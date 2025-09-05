<!--
version:  0.0.1
language: de
narrator: Deutsch Female

@style
main > *:not(:last-child) {
  margin-bottom: 3rem;
}

input {
    text-align: center;
}

.flex-container {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    gap: 20px;
}

.flex-child {
    flex: 1;
    min-width: 350px;
    margin-right: 20px;
}

@media (max-width: 400px) {
    .flex-child {
        flex: 100%;
        margin-right: 0;
    }
}
@end

formula: \carry   \textcolor{red}{\scriptsize #1}
formula: \digit   \rlap{\carry{#1}}\phantom{#2}#2
formula: \permil  \text{‰}

import: https://raw.githubusercontent.com/LiaTemplates/Tikz-Jax/main/README.md

script: https://cdn.jsdelivr.net/gh/LiaTemplates/Tikz-Jax@main/dist/index.js


import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md


tags: 

comment: 

author: 



import: https://raw.githubusercontent.com/LiaTemplates/GGBScript/refs/heads/main/README.md
-->



# Zahlenstrahl






# Koordinatensystem








# Downloadbalken



> Klicke/ziehe den Balken auf **77 %** und drücke **Prüfen**.

<div>
  <progress id="prog77" value="0" max="100" style="width:33%; transform:scale(3); position:relative; left:calc(100% / 3); margin-bottom:1rem">0%</progress>
</div>

<script>
(() => {
  const bar = document.getElementById('prog77');
  if (!bar) return;

  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
  function setValue(val) {
    const max = Number(bar.max) || 100;
    const v = clamp(Math.round(val), 0, max);
    bar.value = v;
    bar.textContent = v + '%'; // Fallback-Anzeige
  }
  function handlePointer(clientX) {
    const rect = bar.getBoundingClientRect();
    const frac = (clientX - rect.left) / rect.width;
    setValue(frac * (bar.max || 100));
  }

  // Klick & Drag
  bar.addEventListener('click', (e) => handlePointer(e.clientX));
  let dragging = false;
  bar.addEventListener('mousedown', (e) => { dragging = true; handlePointer(e.clientX); e.preventDefault(); });
  window.addEventListener('mousemove', (e) => { if (dragging) handlePointer(e.clientX); });
  window.addEventListener('mouseup',   () => { dragging = false; });

  // Anfangswert
  setValue(bar.value || 0);
})();
</script>

<!-- data-solution-button="3" -->
```js
(() => {
  const bar = document.getElementById('prog77');
  return !!bar && Number(bar.value) === 77;
})()
```








