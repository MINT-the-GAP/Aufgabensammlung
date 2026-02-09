<!--
version:  0.0.1
language: de
author: Martin Lommatzsch
comment: Kachel-Sortierer v0.0.1 — Pool -> Zonen (Tabelle), auto-Slots, Check/Reset per Buttons — robustes Dragging via Pointer-Drag (kein HTML5-DnD)

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
  touch-action: none; /* wichtig fürs Pointer-Dragging */
}
@media (prefers-color-scheme: dark){
  .lia-kachel-tile{
    border-color: rgba(255,255,255,.18);
    background: rgba(255,255,255,.08);
  }
}
.lia-kachel-tile:active{ cursor: grabbing; }
.lia-kachel-tile.is-dragging{ opacity: .45; }

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

.lia-kachel-zone.is-over,
.lia-kachel-pool.is-over{
  outline: 2px solid rgba(var(--color-highlight, 11,95,255), 0.65);
  outline-offset: 2px;
}

/* Ghost */
.lia-kachel-ghost{
  position: fixed;
  left: 0; top: 0;
  z-index: 2147483647;
  pointer-events: none;
  opacity: .92;
  transform: translate(-9999px,-9999px);
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

  if(API.__installed) return;
  API.__installed = true;

  // Toggle bei Bedarf:
  API.__debug = false;

  function log(){
    if(!API.__debug) return;
    try{ console.log.apply(console, arguments); } catch(e){}
  }

  function escAttr(s){
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
    return document.querySelector('.lia-kachel-pool[data-kachel-id="'+escAttr(id)+'"]');
  }

  function getZones(id){
    return Array.from(document.querySelectorAll('.lia-kachel-zone[data-kachel-id="'+escAttr(id)+'"]'));
  }

  function ensureTrailingEmptySlot(zoneList, bankId){
    const slots = zoneList.querySelectorAll(".lia-kachel-slot");
    const last  = slots[slots.length - 1];
    if(!last || last.classList.contains("filled")){
      const s = document.createElement("span");
      s.className = "lia-kachel-slot";
      s.dataset.kachelId = bankId;
      zoneList.appendChild(s);
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

  // -------------------------
  // Pointer-Drag Engine
  // -------------------------
  const drag = {
    active: false,
    tile: null,
    bankId: "",
    originParent: null,
    ghost: null,
    overEl: null
  };

  function clearOver(){
    if(drag.overEl){
      drag.overEl.classList.remove("is-over");
      drag.overEl = null;
    }
  }

  function setOver(el){
    if(drag.overEl === el) return;
    clearOver();
    drag.overEl = el;
    if(el) el.classList.add("is-over");
  }

  function makeGhostFrom(tile){
    const g = tile.cloneNode(true);
    g.classList.add("lia-kachel-ghost");
    g.classList.remove("is-dragging");
    g.style.width = tile.getBoundingClientRect().width + "px";
    document.body.appendChild(g);
    return g;
  }

  function moveGhost(x,y){
    if(!drag.ghost) return;
    // kleiner Offset, damit der Cursor nicht exakt drüber liegt
    drag.ghost.style.transform = "translate(" + (x + 10) + "px," + (y + 10) + "px)";
  }

  function findDropTarget(x,y, bankId){
    const el = document.elementFromPoint(x,y);
    if(!el) return { kind: "none", el: null, slot: null };

    // Slot preferieren (wenn auf Slot)
    const slot = el.closest ? el.closest('.lia-kachel-slot') : null;
    if(slot){
      const zone = slot.closest('.lia-kachel-zone[data-kachel-id="'+escAttr(bankId)+'"]');
      if(zone) return { kind: "zone", el: zone, slot: slot };
    }

    const zone = el.closest ? el.closest('.lia-kachel-zone[data-kachel-id="'+escAttr(bankId)+'"]') : null;
    if(zone) return { kind: "zone", el: zone, slot: null };

    const pool = el.closest ? el.closest('.lia-kachel-pool[data-kachel-id="'+escAttr(bankId)+'"]') : null;
    if(pool) return { kind: "pool", el: pool, slot: null };

    return { kind: "none", el: null, slot: null };
  }

  function placeIntoZone(tile, zone, slotHint){
    const bankId = tile.dataset.kachelId;
    const list = zone.querySelector(".lia-kachel-zone-list");
    if(!list) return;

    // Zielslot bestimmen
    let slot = null;

    if(slotHint && slotHint.classList && slotHint.classList.contains("lia-kachel-slot") && !slotHint.classList.contains("filled")){
      slot = slotHint;
    }

    if(!slot){
      const slots = Array.from(list.querySelectorAll(".lia-kachel-slot"));
      const last = slots[slots.length - 1];
      if(last && !last.classList.contains("filled")) slot = last;
    }

    if(!slot){
      slot = document.createElement("span");
      slot.className = "lia-kachel-slot";
      slot.dataset.kachelId = bankId;
      list.appendChild(slot);
    }

    slot.appendChild(tile);
    slot.classList.add("filled");
    ensureTrailingEmptySlot(list, bankId);
    cleanupZones(bankId);

    const fb = zone.querySelector(".lia-kachel-feedback");
    if(fb){ fb.textContent = ""; fb.removeAttribute("data-state"); }
  }

  function placeIntoPool(tile){
    const bankId = tile.dataset.kachelId;
    const bank = getBankEl(bankId);
    if(!bank) return;
    const list = bank.querySelector(".lia-kachel-bank") || bank;
    list.appendChild(tile);
    cleanupZones(bankId);
  }

  function onDragStart(e, tile){
    // nur links / primär
    if(e.button !== undefined && e.button !== 0) return;

    const bankId = tile.dataset.kachelId || "";
    if(!bankId) return;

    e.preventDefault();

    drag.active = true;
    drag.tile = tile;
    drag.bankId = bankId;
    drag.originParent = tile.parentNode;
    tile.classList.add("is-dragging");

    drag.ghost = makeGhostFrom(tile);
    moveGhost(e.clientX, e.clientY);

    // capture pointer
    if(tile.setPointerCapture && e.pointerId != null){
      try { tile.setPointerCapture(e.pointerId); } catch(_e){}
    }

    log("[Kachel] dragstart", bankId, tile.textContent);
  }

  function onDragMove(e){
    if(!drag.active) return;
    e.preventDefault();

    moveGhost(e.clientX, e.clientY);

    const t = findDropTarget(e.clientX, e.clientY, drag.bankId);
    setOver(t.el);
  }

  function onDragEnd(e){
    if(!drag.active) return;
    e.preventDefault();

    const tile = drag.tile;
    const bankId = drag.bankId;

    const t = findDropTarget(e.clientX, e.clientY, bankId);

    clearOver();

    if(drag.ghost && drag.ghost.parentNode) drag.ghost.parentNode.removeChild(drag.ghost);

    if(tile) tile.classList.remove("is-dragging");

    // Drop-Action
    if(tile && t.kind === "zone" && t.el){
      placeIntoZone(tile, t.el, t.slot);
    } else if(tile && t.kind === "pool" && t.el){
      placeIntoPool(tile);
    } else {
      // keine Zielzone: zurück (falls aus DOM raus wäre)
      if(tile && drag.originParent && tile.parentNode !== drag.originParent){
        drag.originParent.appendChild(tile);
      }
    }

    drag.active = false;
    drag.tile = null;
    drag.bankId = "";
    drag.originParent = null;
    drag.ghost = null;
    drag.overEl = null;

    log("[Kachel] dragend");
  }

  function bindTileDragging(tile){
    if(tile.dataset.kachelBound === "1") return;
    tile.dataset.kachelBound = "1";

    // Pointer Events
    tile.addEventListener("pointerdown", (e) => onDragStart(e, tile));
    tile.addEventListener("pointermove", onDragMove);
    tile.addEventListener("pointerup", onDragEnd);
    tile.addEventListener("pointercancel", onDragEnd);

    // Optional: Doppelklick zurück in Pool
    tile.addEventListener("dblclick", () => placeIntoPool(tile));
  }

  // -------------------------
  // UI Init
  // -------------------------
  function initPool(pool){
    if(pool.dataset.kachelReady === "1") return;
    pool.dataset.kachelReady = "1";

    const bankId = pool.dataset.kachelId;

    // Wörter aus Plaintext
    const txt = pool.textContent || "";
    const words = [];
    txt.split(/[\n,;]+/g).forEach(chunk => {
      chunk.split(/\s+/g).forEach(w => { if(w) words.push(w); });
    });

    const clean = uniq(words);

    const list = document.createElement("div");
    list.className = "lia-kachel-bank";

    pool.innerHTML = "";
    pool.appendChild(list);

    if(clean.length === 0){
      list.innerHTML = "<em>Pool leer (Wörter fehlen oder stehen nicht im @KachelPool-Block)</em>";
      return;
    }

    clean.forEach(w => {
      const t = document.createElement("span");
      t.className = "lia-kachel-tile";
      t.textContent = w;
      t.dataset.word = w;
      t.dataset.kachelId = bankId;
      list.appendChild(t);
      bindTileDragging(t);
    });

    // Hover-Klasse für optisches Feedback (wird vom Drag-Engine gesetzt, aber Pool kann so auch markiert werden)
  }

  function initZone(zone){
    if(zone.dataset.kachelReady === "1") return;
    zone.dataset.kachelReady = "1";

    const bankId = zone.dataset.kachelId;

    const list = document.createElement("div");
    list.className = "lia-kachel-zone-list";
    zone.appendChild(list);

    const slot = document.createElement("span");
    slot.className = "lia-kachel-slot";
    slot.dataset.kachelId = bankId;
    list.appendChild(slot);

    const fb = document.createElement("div");
    fb.className = "lia-kachel-feedback";
    zone.appendChild(fb);
  }

  function initAll(){
    document.querySelectorAll(".lia-kachel-pool[data-kachel-id]").forEach(initPool);
    document.querySelectorAll(".lia-kachel-zone[data-kachel-id]").forEach(initZone);

    // Falls Tiles später wieder in Pool kommen / Reset: sicherstellen dass alle Tiles gebunden sind
    document.querySelectorAll(".lia-kachel-tile[data-kachel-id]").forEach(bindTileDragging);
  }

  // -------------------------
  // Check / Reset API
  // -------------------------
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

    // Alle Tiles zurück in Bank
    document.querySelectorAll('.lia-kachel-tile[data-kachel-id="'+escAttr(bankId)+'"]').forEach(t => bankList.appendChild(t));

    // Zonen neu aufbauen
    for(const z of getZones(bankId)){
      z.dataset.kachelReady = "0";
      z.innerHTML = "";
      initZone(z);
    }

    // Re-bind
    initAll();
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

  // Slide-Wechsel / Re-Render
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