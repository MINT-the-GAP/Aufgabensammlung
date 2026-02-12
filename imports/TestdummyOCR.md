<!--
version:  0.0.1
language: de
author: Martin Lommatzsch
comment: LaTeX-OCR (Browser/LiaScript) v0.0.1 — robust: Canvas->RawImage, Output-Key-Fallback, Preview der Preprocess-Grafik, JSON-Debug wenn leer.

@style
:root{
  --mfr-accent:#0b5fff;
  --mfr-border:rgba(0,0,0,.18);
  --mfr-bg:rgba(0,0,0,.03);
  --mfr-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
}
@media (prefers-color-scheme: dark){
  :root{ --mfr-border:rgba(255,255,255,.18); --mfr-bg:rgba(255,255,255,.06); }
}
.mfr-card{ border:1px solid var(--mfr-border); border-radius:16px; padding:14px; background:var(--mfr-bg); }
.mfr-row{ display:flex; flex-wrap:wrap; gap:10px; align-items:center; margin:10px 0; }
.mfr-btn{
  border:1px solid var(--mfr-border); background:transparent; color:inherit;
  border-radius:999px; padding:8px 12px; cursor:pointer; user-select:none; font-weight:700;
}
.mfr-btn.primary{ border-color:var(--mfr-accent); color:var(--mfr-accent); }
.mfr-btn:disabled{ opacity:.55; cursor:not-allowed; }
.mfr-select,.mfr-range{
  border:1px solid var(--mfr-border); background:transparent; color:inherit;
  border-radius:999px; padding:6px 10px;
}
.mfr-wrap{ border:1px solid var(--mfr-border); border-radius:14px; overflow:hidden; background:#fff; }
.mfr-canvas{ display:block; width:100%; height:260px; touch-action:none; }
.mfr-status{
  font-family:var(--mfr-mono); font-size:12px; white-space:pre-wrap;
  border:1px dashed var(--mfr-border); border-radius:12px; padding:10px 12px; min-height:64px;
}
.mfr-out{
  width:100%; min-height:170px; resize:vertical;
  font-family:var(--mfr-mono); font-size:13px;
  border:1px solid var(--mfr-border); border-radius:12px; padding:10px 12px;
  background:transparent; color:inherit;
}
.mfr-preview{
  width:256px; height:256px;
  border:1px solid var(--mfr-border); border-radius:12px;
  background:#fff;
}
@end

@onload
(function(){
  function getRootWindow(){ let w=window; try{ while(w.parent && w.parent!==w) w=w.parent; }catch(e){} return w; }
  const ROOT=getRootWindow();
  const REGKEY="__LIA_LATEX_OCR_V001__";
  ROOT[REGKEY]=ROOT[REGKEY]||{ mounted:new WeakSet(), lib:null, pipes:new Map(), obs:false };
  const REG=ROOT[REGKEY];

  const AT=String.fromCharCode(64);
  const TF_URL="https://cdn.jsdelivr.net/npm/"+AT+"huggingface/transformers@3.8.1/+esm";

  async function loadTF(){
    if (REG.lib) return REG.lib;
    const mod = await import(TF_URL);
    if (mod?.env){
      mod.env.allowRemoteModels = true;
      mod.env.allowLocalModels  = false;
      mod.env.useBrowserCache   = true;
    }
    REG.lib = mod;
    return mod;
  }

  function fmtBytes(n){
    if(!Number.isFinite(n)) return "";
    const u=["B","KB","MB","GB"]; let i=0,x=n;
    while(x>=1024 && i<u.length-1){ x/=1024; i++; }
    return x.toFixed(i===0?0:1)+" "+u[i];
  }

  function extractText(res){
    let r = res;
    if (Array.isArray(r)) r = r[0];
    if (typeof r === "string") return r;
    if (!r) return "";
    // möglichst breit fangen:
    const v = r.generated_text ?? r.text ?? r.output_text ?? r.output ?? r.caption ?? "";
    return (v == null) ? "" : String(v);
  }

  async function getPipe({model, device, dtype, statusEl}){
    const key = [model,device,dtype].join("|");
    if (REG.pipes.has(key)) return REG.pipes.get(key);

    const tf = await loadTF();
    statusEl.textContent = "Baue Pipeline…\n"+key;

    const pipePromise = tf.pipeline("image-to-text", model, {
      device,
      dtype,
      progress_callback: (p)=>{
        try{
          if(!p) return;
          if(p.status==="progress"){
            const pct = p.total ? Math.round((p.loaded/p.total)*100) : null;
            statusEl.textContent =
              "Lädt…\n"+(p.file||"")+"\n"+
              (pct!=null ? (pct+"% — ") : "")+
              fmtBytes(p.loaded)+(p.total?(" / "+fmtBytes(p.total)):"");
          } else if (p.status){
            statusEl.textContent = String(p.status) + (p.file?("\n"+p.file):"");
          }
        }catch(e){}
      }
    });

    REG.pipes.set(key, pipePromise);
    const pipe = await pipePromise;
    statusEl.textContent = "✅ Pipeline bereit.";
    return pipe;
  }

  function preprocessTo512(src){
    const sw=src.width, sh=src.height;
    const sctx=src.getContext("2d",{willReadFrequently:true});
    const img=sctx.getImageData(0,0,sw,sh);
    const d=img.data;

    // bbox "ink" (dunkel)
    let x0=sw, y0=sh, x1=-1, y1=-1;
    const thr=245;
    for(let y=0;y<sh;y++){
      for(let x=0;x<sw;x++){
        const i=(y*sw+x)*4;
        const r=d[i], g=d[i+1], b=d[i+2], a=d[i+3];
        if (a>0 && (r<thr || g<thr || b<thr)){
          if(x<x0) x0=x; if(y<y0) y0=y; if(x>x1) x1=x; if(y>y1) y1=y;
        }
      }
    }

    const out=document.createElement("canvas");
    out.width=out.height=512;
    const octx=out.getContext("2d");
    octx.fillStyle="#fff";
    octx.fillRect(0,0,512,512);

    if (x1<0){
      return { canvas: out, hasInk:false };
    }

    const pad=Math.round(Math.min(sw,sh)*0.06);
    x0=Math.max(0,x0-pad); y0=Math.max(0,y0-pad);
    x1=Math.min(sw-1,x1+pad); y1=Math.min(sh-1,y1+pad);

    const cw=x1-x0+1, ch=y1-y0+1;
    const s=Math.min((512*0.86)/cw, (512*0.86)/ch);
    const dw=Math.max(1,Math.round(cw*s));
    const dh=Math.max(1,Math.round(ch*s));
    const dx=Math.round((512-dw)/2);
    const dy=Math.round((512-dh)/2);

    octx.imageSmoothingEnabled=true;
    octx.imageSmoothingQuality="high";
    octx.drawImage(src, x0,y0,cw,ch, dx,dy,dw,dh);

    // harte Binarisierung
    const id=octx.getImageData(0,0,512,512);
    const dd=id.data;
    for(let i=0;i<dd.length;i+=4){
      const lum = 0.2126*dd[i] + 0.7152*dd[i+1] + 0.0722*dd[i+2];
      const v = (lum < 210) ? 0 : 255;
      dd[i]=dd[i+1]=dd[i+2]=v; dd[i+3]=255;
    }
    octx.putImageData(id,0,0);

    return { canvas: out, hasInk:true };
  }

  function mount(host){
    if(!host || REG.mounted.has(host)) return;
    REG.mounted.add(host);

    host.innerHTML = `
      <div class="mfr-card">
        <div style="font-weight:900; font-size:18px;">Formel-OCR → LaTeX (Browser)</div>

        <div class="mfr-row">
          <label>Modell
            <select class="mfr-select" data-k="model">
              <option value="Xenova/texify" selected>Xenova/texify</option>
              <option value="Xenova/texify2">Xenova/texify2</option>
              <option value="alephpi/FormulaNet">alephpi/FormulaNet</option>
            </select>
          </label>

          <label>Device
            <select class="mfr-select" data-k="device">
              <option value="wasm" selected>wasm</option>
              <option value="webgpu">webgpu</option>
            </select>
          </label>

          <label>dtype
            <select class="mfr-select" data-k="dtype">
              <option value="q4" selected>q4</option>
              <option value="q8">q8</option>
              <option value="fp16">fp16</option>
              <option value="fp32">fp32</option>
            </select>
          </label>

          <label>Stift
            <input class="mfr-range" data-k="pen" type="range" min="2" max="18" step="1" value="7"/>
          </label>

          <button class="mfr-btn" data-act="clear">Leeren</button>
          <button class="mfr-btn" data-act="warmup">Modell laden</button>
          <button class="mfr-btn primary" data-act="run">Erkennen</button>
        </div>

        <div class="mfr-row" style="align-items:flex-start;">
          <div style="flex:1 1 520px;">
            <div class="mfr-wrap">
              <canvas class="mfr-canvas" data-k="c"></canvas>
            </div>
          </div>

          <div style="flex:0 0 auto;">
            <div style="font-weight:700; margin:2px 0 8px 0;">Preprocess-Preview</div>
            <canvas class="mfr-preview" data-k="p" width="256" height="256"></canvas>
          </div>
        </div>

        <div class="mfr-status" data-k="status">OK: gemountet.</div>
        <textarea class="mfr-out" data-k="out" placeholder="LaTeX-Ausgabe… (wenn leer: JSON-Debug erscheint hier)"></textarea>
      </div>
    `;

    const selModel  = host.querySelector('[data-k="model"]');
    const selDevice = host.querySelector('[data-k="device"]');
    const selDtype  = host.querySelector('[data-k="dtype"]');
    const rngPen    = host.querySelector('[data-k="pen"]');
    const statusEl  = host.querySelector('[data-k="status"]');
    const outEl     = host.querySelector('[data-k="out"]');
    const canvas    = host.querySelector('[data-k="c"]');
    const prev      = host.querySelector('[data-k="p"]');

    const btnClear  = host.querySelector('[data-act="clear"]');
    const btnWarmup = host.querySelector('[data-act="warmup"]');
    const btnRun    = host.querySelector('[data-act="run"]');

    function lock(on){
      btnWarmup.disabled = !!on;
      btnRun.disabled    = !!on;
    }

    function resize(){
      const wrap = canvas.parentElement.getBoundingClientRect();
      const cssW = Math.max(320, Math.floor(wrap.width));
      const cssH = 260;
      const dpr  = Math.max(1, Math.min(3, window.devicePixelRatio || 1));
      canvas.style.height = cssH + "px";
      canvas.width  = Math.round(cssW * dpr);
      canvas.height = Math.round(cssH * dpr);
      const ctx = canvas.getContext("2d");
      ctx.setTransform(dpr,0,0,dpr,0,0);
      ctx.fillStyle="#fff";
      ctx.fillRect(0,0,cssW,cssH);
    }
    resize();
    window.addEventListener("resize", resize, { passive:true });

    // Zeichnen (schwarz)
    const ctx = canvas.getContext("2d");
    let drawing=false, last=null;
    function pos(ev){
      const r = canvas.getBoundingClientRect();
      return { x: ev.clientX - r.left, y: ev.clientY - r.top };
    }
    function stroke(a,b){
      ctx.save();
      ctx.lineCap="round"; ctx.lineJoin="round";
      ctx.lineWidth = Number(rngPen.value || 7);
      ctx.strokeStyle="#000";
      ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke();
      ctx.restore();
    }
    canvas.addEventListener("pointerdown",(ev)=>{
      ev.preventDefault();
      drawing=true; last=pos(ev);
      try{ canvas.setPointerCapture(ev.pointerId); }catch(e){}
    });
    canvas.addEventListener("pointermove",(ev)=>{
      if(!drawing) return;
      const p=pos(ev);
      if(last) stroke(last,p);
      last=p;
    });
    canvas.addEventListener("pointerup",()=>{ drawing=false; last=null; });
    canvas.addEventListener("pointercancel",()=>{ drawing=false; last=null; });

    function opts(){
      return { model: selModel.value, device: selDevice.value, dtype: selDtype.value };
    }

    function showPreview(pre512){
      const pctx = prev.getContext("2d");
      pctx.fillStyle="#fff"; pctx.fillRect(0,0,256,256);
      pctx.imageSmoothingEnabled=false;
      pctx.drawImage(pre512, 0,0,512,512, 0,0,256,256);
    }

    btnClear.addEventListener("click", ()=>{
      resize();
      outEl.value="";
      const pctx = prev.getContext("2d");
      pctx.fillStyle="#fff"; pctx.fillRect(0,0,256,256);
      statusEl.textContent="Canvas geleert.";
    });

    btnWarmup.addEventListener("click", async ()=>{
      try{
        lock(true);
        outEl.value="";
        statusEl.textContent="Lade Modell…";
        await getPipe({ ...opts(), statusEl });
        statusEl.textContent="✅ Modell/Pipeline bereit.";
      } catch(e){
        statusEl.textContent="❌ Warmup-Fehler:\n"+(e?.message||String(e));
      } finally {
        lock(false);
      }
    });

    btnRun.addEventListener("click", async ()=>{
      try{
        lock(true);
        outEl.value="";

        const tf = await loadTF();
        const pipe = await getPipe({ ...opts(), statusEl });

        statusEl.textContent="Preprocess… (crop→512 + binarize)";
        const pre = preprocessTo512(canvas);
        showPreview(pre.canvas);

        if (!pre.hasInk){
          statusEl.textContent="⚠️ Ich sehe keine Striche (Ink=0). Schreib/zeichne erst etwas.";
          outEl.value = "";
          return;
        }

        // robust: Canvas direkt als RawImage
        const img = await tf.RawImage.read(pre.canvas);

        statusEl.textContent="Inferenz…";
        const t0 = performance.now();
        const res = await pipe(img, { max_new_tokens: 256, num_beams: 3 });
        const t1 = performance.now();

        let txt = extractText(res).trim();

        // Falls das Modell leer liefert: JSON Debug ausgeben
        if (!txt){
          outEl.value = JSON.stringify(res, null, 2);
          statusEl.textContent = "⚠️ Ergebnis leer. (JSON-Debug ausgegeben) — ggf. größer schreiben / Stift dicker / Modell wechseln.";
          return;
        }

        // optional: äußere $...$ entfernen
        if ((txt.startsWith("$$") && txt.endsWith("$$")) || (txt.startsWith("$") && txt.endsWith("$"))){
          txt = txt.replace(/^\$+\s*/,"").replace(/\s*\$+$/,"").trim();
        }

        outEl.value = txt;

        if (/\\includegraphics\b|\.eps\b|figures\//i.test(txt)){
          statusEl.textContent =
            "⚠️ Modell hat ein Bild-Fallback im LaTeX erzeugt (includegraphics).\n" +
            "→ Exponenten deutlich größer schreiben + weniger klein/eng.\n" +
            "→ Oder Modell wechseln (texify ↔ FormulaNet).";
        } else {
          statusEl.textContent = "✅ Fertig in "+Math.round(t1-t0)+" ms.";
        }
      } catch(e){
        statusEl.textContent="❌ OCR-Fehler:\n"+(e?.message||String(e));
      } finally {
        lock(false);
      }
    });
  }

  function mountAll(){ document.querySelectorAll('[data-mfr-pad="1"]').forEach(mount); }

  mountAll();
  if(!REG.obs){
    REG.obs=true;
    const obs=new MutationObserver(()=>mountAll());
    try{ obs.observe(document.body,{childList:true,subtree:true}); }catch(e){}
  }
})();
@end
-->

# Gleichung-OCR → LaTeX (Erster Test)

<div data-mfr-pad="1">
Wenn du diesen Text siehst, wurde noch nicht gemountet.
</div>
