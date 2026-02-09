<!--
version:  0.0.1
language: de
author: Martin Lommatzsch
comment: Kachel-Sortierer v0.0.1 — Pool -> Zonen (Tabelle), auto-Slots, Check/Reset per Buttons — DnD-Fix für Firefox/iframe

@style
/* =========================
   Kachel-Pool + Zonen
   ========================= */
.lia-kachel-pool,
.lia-kachel-zone{
  border: 2px dashed rgba(0,0,0,.25);
  border-radius: 12px;
  padding: 10px 12px;
  min-height: 54px;
}

@media (prefers-color-scheme: dark){
  .lia-kachel-pool,
  .lia-kachel-zone{ border-color: rgba(255,255,255,.25); }
}

.lia-kachel-bank{
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.lia-kachel-tile{
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  border-radius: 999px;
  border: 2px solid rgba(0,0,0,.18);
  background: rgba(127,127,127,.12);
  cursor: grab;
  user-select: none;
  white-space: nowrap;
}
@media (prefers-color-scheme: dark){
  .lia-kachel-tile{
    border-color: rgba(255,255,255,.18);
    background: rgba(255,255,255,.08);
  }
}
.lia-kachel-tile:active{ cursor: grabbing; }

.lia-kachel-zone-list{
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.lia-kachel-slot{
  display: inline-flex;
  align-items: center;
  min-height: 34px;
  min-width: 70px;
  border-radius: 999px;
  border: 2px dashed rgba(0,0,0,.18);
  padding: 2px;
}
@media (prefers-color-scheme: dark){
  .lia-kachel-slot{ border-color: rgba(255,255,255,.18); }
}

.lia-kachel-slot.filled{
  border-style: solid;
  border-color: transparent;
  padding: 0;
  min-width: auto;
}

.lia-kachel-feedback{
  margin-top: 8px;
  font-size: 0.95em;
  opacity: .9;
}
.lia-kachel-feedback[data-state="ok"]{ opacity: .85; }

/* Drag-Hover */
.lia-kachel-zone.is-over{
  outline: 2px solid rgba(var(--color-highlight, 11,95,255), 0.9);
  outline-offset: 2px;
}
.lia-kachel-pool.is-over{
  outline: 2px solid rgba(var(--color-highlight, 11,95,255), 0.55);
  outline-offset: 2px;
}

/* Buttons */
.lia-kachel-controls{
  display:flex;
  gap: 10px;
  margin-top: 10px;
  flex-wrap: wrap;
}
.lia-kachel-btn{
  border: 0;
  border-radius: 999px;
  padding: 8px 12px;
  font-weight: 700;
  cursor: pointer;
  background: rgb(var(--color-highlight, 11,95,255));
  color: #fff;
}
.lia-kachel-btn.secondary{
  background: rgba(0,0,0,0.12);
  color: rgb(var(--color-text, 20,20,20));
}
@media (prefers-color-scheme: dark){
  .lia-kachel-btn.secondary{
    background: rgba(255,255,255,0.10);
    color: rgb(var(--color-text, 230,230,230));
  }
}
@end


@onload
(function(){
  function getRootWindow(){
    let w = window;
    try { while (w.parent && w.parent !== w) w = w.parent; } catch(e){}
    return w;
  }

  const ROOT = getRootWindow();
  const KEY  = "__LIA_KACHEL_SORTIERER_V1__";
  ROOT[KEY]  = ROOT[KEY] || {};
  const API  = ROOT[KEY];

  // Run-once (import-sicher)
  if(API.__installed) return;
  API.__installed = true;

  // Firefox/iframe: dataTransfer.getData kann in dragover leer sein → globaler Fallback
  API.__dragId = "";
  API.__dragBankId = "";

  function attrEscape(s){
    // minimaler Escape für "..." in querySelector-Attribut-Selektoren
    return String(s).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  }

  function norm(s){
    return String(s || "")
      .replace(/\u00A0/g, " ")
      .trim()
      .toLowerCase();
  }

  function uniq(arr){
    const out = [];
    const seen = new Set();
    for(const x of arr){
      const k = norm(x);
      if(!k) continue;
      if(seen.has(k)) continue;
      seen.add(k);
      out.push(String(x).trim());
    }
    return out;
  }

  function getBankEl(id){
    return document.querySelector('.lia-kachel-pool[data-kachel-id="'+attrEscape(id)+'"]');
  }
  function getZones(id){
    return Array.from(document.querySelectorAll('.lia-kachel-zone[data-kachel-id="'+attrEscape(id)+'"]'));
  }

  function setDragId(ev, id, bankId){
    API.__dragId = id;
    API.__dragBankId = bankId || "";
    try{
      ev.dataTransfer.setData("text/plain", "KACHEL:" + id);
      ev.dataTransfer.effectAllowed = "move";
    } catch(e){}
  }

  function getDragId(ev){
    let raw = "";
    try { raw = (ev.dataTransfer.getData("text/plain") || "").trim(); } catch(e){}
    if(raw.startsWith("KACHEL:")) return raw.slice(6);
    return API.__dragId || "";
  }

  function makeTile(word, bankId){
    const t = document.createElement("span");
    t.className = "lia-kachel-tile";
    t.textContent = word;
    t.draggable = true;
    t.dataset.word = word;
    t.dataset.kachelId = bankId;
    t.id = "kachel_" + bankId.replace(/[^a-zA-Z0-9_-]/g,"_") + "_" + Math.random().toString(36).slice(2,10);

    t.addEventListener("dragstart", (e) => setDragId(e, t.id, bankId));
    t.addEventListener("dragend", () => { API.__dragId=""; API.__dragBankId=""; });

    // Optional: Doppelklick zurück in Pool
    t.addEventListener("dblclick", () => {
      const bank = getBankEl(bankId);
      if(!bank) return;
      const list = bank.querySelector(".lia-kachel-bank") || bank;
      list.appendChild(t);
      cleanupZones(bankId);
    });

    return t;
  }

  function makeSlot(bankId){
    const s = document.createElement("span");
    s.className = "lia-kachel-slot";
    s.dataset.kachelId = bankId;
    return s;
  }

  function ensureTrailingEmptySlot(zoneList, bankId){
    const slots = zoneList.querySelectorAll(".lia-kachel-slot");
    const last  = slots[slots.length - 1];
    if(!last || last.classList.contains("filled")){
      zoneList.appendChild(makeSlot(bankId));
    }
  }

  function cleanupZones(bankId){
    for(const z of getZones(bankId)){
      const list = z.querySelector(".lia-kachel-zone-list");
      if(!list) continue;

      const slots = Array.from(list.querySelectorAll(".lia-kachel-slot"));
      while(slots.length >= 2){
        const last = slots[slots.length - 1];
        const prev = slots[slots.length - 2];
        if(!last.classList.contains("filled") && !prev.classList.contains("filled")){
          last.remove();
          slots.pop();
        } else break;
      }
      ensureTrailingEmptySlot(list, bankId);
    }
  }

  function initPool(pool){
    if(pool.dataset.kachelReady === "1") return;
    pool.dataset.kachelReady = "1";

    const bankId = pool.dataset.kachelId;
    const words = [];

    // Plaintext aus Pool (Zeilen / Whitespace)
    const txt = pool.textContent || "";
    txt.split(/[\n,;]+/g).forEach(chunk => {
      chunk.split(/\s+/g).forEach(w => { if(w) words.push(w); });
    });

    const list = document.createElement("div");
    list.className = "lia-kachel-bank";

    const clean = uniq(words);
    pool.innerHTML = "";
    pool.appendChild(list);

    if(clean.length === 0){
      list.innerHTML = "<em>Pool leer (Wörter fehlen oder stehen nicht im @KachelPool-Block)</em>";
      return;
    }

    clean.forEach(w => list.appendChild(makeTile(w, bankId)));

    pool.addEventListener("dragenter", () => pool.classList.add("is-over"));
    pool.addEventListener("dragleave", () => pool.classList.remove("is-over"));

    // WICHTIG: immer preventDefault(), sonst drop verboten (Firefox/iframe)
    pool.addEventListener("dragover", (e) => {
      e.preventDefault();
      try{ e.dataTransfer.dropEffect = "move"; } catch(_e){}
    });

    pool.addEventListener("drop", (e) => {
      e.preventDefault();
      pool.classList.remove("is-over");

      const id = getDragId(e);
      const tile = id ? document.getElementById(id) : null;
      if(!tile) return;
      if(tile.dataset.kachelId !== bankId) return;

      list.appendChild(tile);
      cleanupZones(bankId);
    });
  }

  function initZone(zone){
    if(zone.dataset.kachelReady === "1") return;
    zone.dataset.kachelReady = "1";

    const bankId = zone.dataset.kachelId;

    const list = document.createElement("div");
    list.className = "lia-kachel-zone-list";
    zone.appendChild(list);
    list.appendChild(makeSlot(bankId));

    const fb = document.createElement("div");
    fb.className = "lia-kachel-feedback";
    zone.appendChild(fb);

    zone.addEventListener("dragenter", () => zone.classList.add("is-over"));
    zone.addEventListener("dragleave", () => zone.classList.remove("is-over"));

    // WICHTIG: immer preventDefault(), sonst drop verboten
    zone.addEventListener("dragover", (e) => {
      e.preventDefault();
      try{ e.dataTransfer.dropEffect = "move"; } catch(_e){}
    });

    zone.addEventListener("drop", (e) => {
      e.preventDefault();
      zone.classList.remove("is-over");

      const id = getDragId(e);
      const tile = id ? document.getElementById(id) : null;
      if(!tile) return;
      if(tile.dataset.kachelId !== bankId) return;

      const list = zone.querySelector(".lia-kachel-zone-list");
      if(!list) return;

      // Slot bestimmen: Drop auf Slot → der Slot, sonst letzter leerer Slot
      let slot = null;
      const t = e.target && e.target.closest ? e.target.closest(".lia-kachel-slot") : null;
      if(t && !t.classList.contains("filled")) slot = t;

      if(!slot){
        const slots = Array.from(list.querySelectorAll(".lia-kachel-slot"));
        const last = slots[slots.length - 1];
        slot = (last && !last.classList.contains("filled")) ? last : null;
      }
      if(!slot){
        slot = makeSlot(bankId);
        list.appendChild(slot);
      }

      slot.appendChild(tile);
      slot.classList.add("filled");

      ensureTrailingEmptySlot(list, bankId);
      cleanupZones(bankId);

      const fb = zone.querySelector(".lia-kachel-feedback");
      if(fb){ fb.textContent = ""; fb.removeAttribute("data-state"); }
    });
  }

  function initAll(){
    document.querySelectorAll(".lia-kachel-pool[data-kachel-id]").forEach(initPool);
    document.querySelectorAll(".lia-kachel-zone[data-kachel-id]").forEach(initZone);
  }

  API.check = function(bankId){
    initAll();
    let allOk = true;

    for(const zone of getZones(bankId)){
      const label = (zone.dataset.kachelLabel || "").trim();

      const expected = uniq(String(zone.dataset.kachelSolution || "")
        .split(";")
        .map(s => s.trim())
        .filter(Boolean)
      ).map(norm);

      const actual = Array.from(zone.querySelectorAll(".lia-kachel-slot.filled .lia-kachel-tile"))
        .map(el => norm(el.dataset.word || el.textContent));

      const missing = expected.filter(w => !actual.includes(w));
      const extra   = actual.filter(w => !expected.includes(w));

      const ok = (missing.length === 0 && extra.length === 0);
      allOk = allOk && ok;

      const fb = zone.querySelector(".lia-kachel-feedback");
      if(fb){
        if(ok){
          fb.textContent = (label ? (label + ": ") : "") + "✓ korrekt";
          fb.dataset.state = "ok";
        } else {
          const parts = [];
          if(missing.length) parts.push("Fehlt: " + missing.join(", "));
          if(extra.length)   parts.push("Zu viel: " + extra.join(", "));
          fb.textContent = (label ? (label + ": ") : "") + parts.join(" | ");
          fb.dataset.state = "no";
        }
      }
    }
    return allOk;
  };

  API.reset = function(bankId){
    initAll();
    const bank = getBankEl(bankId);
    if(!bank) return;

    const bankList = bank.querySelector(".lia-kachel-bank") || bank;
    document.querySelectorAll('.lia-kachel-tile[data-kachel-id="'+attrEscape(bankId)+'"]').forEach(t => bankList.appendChild(t));

    for(const z of getZones(bankId)){
      z.dataset.kachelReady = "0";
      z.innerHTML = "";
      initZone(z);
    }
    return true;
  };

  function bindButtons(){
    document.querySelectorAll('button[data-kachel-action][data-kachel-id]').forEach(btn => {
      if(btn.dataset.kachelBound === "1") return;
      btn.dataset.kachelBound = "1";

      btn.addEventListener("click", () => {
        const id  = btn.dataset.kachelId;
        const act = btn.dataset.kachelAction;
        if(act === "check") API.check(id);
        if(act === "reset") API.reset(id);
      });
    });
  }

  function scan(){
    initAll();
    bindButtons();
  }
  scan();

  let timer = null;
  const obs = new MutationObserver(() => {
    if(timer) return;
    timer = setTimeout(() => { timer = null; scan(); }, 50);
  });
  obs.observe(document.body, { childList: true, subtree: true });

})();
@end


@KachelPool
<div class="lia-kachel-pool" data-kachel-id="@0">
@1
</div>
@end

@KachelZone: <div class="lia-kachel-zone" data-kachel-id="@0" data-kachel-label="@1" data-kachel-solution="@2"></div>

@KachelCheck: <button class="lia-kachel-btn" type="button" data-kachel-action="check" data-kachel-id="@0">Prüfen</button>

@KachelReset: <button class="lia-kachel-btn secondary" type="button" data-kachel-action="reset" data-kachel-id="@0">Reset</button>

@KachelControls
<div class="lia-kachel-controls">
  @KachelCheck(@0) @KachelReset(@0)
</div>
@end
-->













# Geo 1


``` md @KachelPool(WORTARTEN_1)
Haus
Hund
Katze
Vogel
kaufen
rennen
```

| Wortart           | Wörter |
| :---------------- | :----- |
| Nomen/Substantive | @KachelZone(WORTARTEN_1,Nomen, Haus; Hund; Katze; Vogel) |
| Verben            | @KachelZone(WORTARTEN_1,Verben, kaufen; rennen) |

@KachelControls(WORTARTEN_1)