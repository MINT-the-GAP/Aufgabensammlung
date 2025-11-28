<!--
version:  0.0.1
language: de
narrator: Deutsch Female

tags: 

comment: 

author: Martin Lommatzsch





import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
        https://raw.githubusercontent.com/LiaTemplates/Tikz-Jax/main/README.md
        https://raw.githubusercontent.com/LiaTemplates/mermaid_template/0.1.4/README.md
        https://raw.githubusercontent.com/liaTemplates/ABCjs/main/README.md
        https://raw.githubusercontent.com/LiaTemplates/Speech-Recognition-Quiz/refs/heads/main/README.md
        https://raw.githubusercontent.com/liaTemplates/AVR8js/main/README.md
        https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md
        https://raw.githubusercontent.com/LiaTemplates/mec2/main/README.md
        https://raw.githubusercontent.com/LiaTemplates/CollaborativeDrawing/main/README.md
        https://raw.githubusercontent.com/LiaTemplates/SpreadSheet/refs/heads/main/README.md
        https://github.com/LiaTemplates/PeriodicTable/blob/main/README.md
        https://raw.githubusercontent.com/LiaTemplates/GGBScript/refs/heads/main/README.md

import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/README.md

script: https://cdn.jsdelivr.net/gh/LiaTemplates/Tikz-Jax@main/dist/index.js



@style

.tree2 {
  position: relative;
  width: 800px;
  height: 480px;
  margin: 1em auto;
  font-family: sans-serif;
}

/* SVG-Layer */
.tree2 svg {
  position: absolute;
  inset: 0;
}

/* Knoten-Beschriftungen (Start, A, ¬A, ...) */
.tree2 .tree-node {
  position: absolute;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  font-size: 1.5rem;
  text-align: center;
}

/* Pfad-Container: wird gedreht und positioniert */
.tree2 .tree-edge {
  position: absolute;
  display: inline-block;
  transform-origin: 50% 0%;   /* Anker: oben, mittig */
  font-size: 1.5rem;
  text-align: center;
}

/* Rotationen für die Pfade – Kopf bleibt an left/top */
.tree2 .edge-l1-left  { transform: translate(-50%, 0%) rotate(-40deg); }
.tree2 .edge-l1-right { transform: translate(-50%, 0%) rotate( 40deg); }

/* 2. Stufe: stärker geneigt */
.tree2 .edge-l2-left  { transform: translate(-50%, 0%) rotate(-64deg); }
.tree2 .edge-l2-right { transform: translate(-50%, 0%) rotate( 64deg); }

/* Eine „Zeile“ aus Label + Quiz, die nicht umbrechen darf,
   aber in einem festen Kasten steckt */
.tree2 .tree-line {
  display: inline-block;
  width: 9em;            /* Breite des „Pfad-Kastens“ */
  text-align: center;
  white-space: nowrap;    /* P(...) = [[...]] bleibt immer in EINER Zeile */
}

/* LiaScript-Quiz: innerhalb der 11em-Box; hier darf UMBROCH passieren */
.tree2 .tree-line .lia-quiz {
  display: inline-block;
  max-width: 80%;               /* nicht breiter als tree-line */
  white-space: normal !important;/* bricht Zeilen innerhalb des Quiz */
  text-align: center;
}

/* Eingabefeld im Pfad etwas größer und schmal */
.tree2 .tree-line .lia-quiz .lia-input {
  font-size: 1.5rem;
  width: 3em;
}

/* Prüfen-/Auflösen-Buttons etwas kleiner */
.tree2 .tree-line .lia-quiz .lia-btn {
  font-size: 0.8rem;
}

/* Aufklapp-Feedbacktext: an die Linienbreite angepasst */
.tree2 .tree-line .lia-quiz span,
.tree2 .tree-line .lia-quiz p {
  display: block !important;
  max-width: 100%;               /* orientiert sich an der 11em-Box */
  white-space: normal !important;/* Text darf umbrechen */
  word-wrap: break-word;
  font-size: 0.8rem;
  line-height: 1.1;
  margin-top: 0.2em;
  text-align: center;
}

@end










-->




# Baumdiagramm



<div class="tree2">


<svg viewBox="0 0 100 70">

  <defs>
    <!-- Latex-ähnliche Pfeilspitze, innen weiß, schwarz umrandet -->
    <marker id="arrow-white" markerWidth="10" markerHeight="10"
            refX="7" refY="3.5" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L7,3.5 L0,7 z"
            fill="white" stroke="black" stroke-width="0.6" />
    </marker>
  </defs>

  <!-- 1. Stufe: Start -> A und Start -> ¬A -->
  <!-- schwarze Linien leicht gekürzt -->
  <line x1="50" y1="10" x2="25.78" y2="29.38"
        stroke="black" stroke-width="1" stroke-linecap="butt" />
  <line x1="50" y1="10" x2="25" y2="30"
        stroke="white" stroke-width="0.5" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <line x1="50" y1="10" x2="74.22" y2="29.38"
        stroke="black" stroke-width="1" stroke-linecap="butt" />
  <line x1="50" y1="10" x2="75" y2="30"
        stroke="white" stroke-width="0.5" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />


  <!-- 2. Stufe links: A -> B|A und A -> ¬B|A -->
  <line x1="25" y1="35" x2="10.45" y2="64.11"
        stroke="black" stroke-width="1" stroke-linecap="butt" />
  <line x1="25" y1="35" x2="10" y2="65"
        stroke="white" stroke-width="0.5" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <line x1="25" y1="35" x2="39.55" y2="64.11"
        stroke="black" stroke-width="1" stroke-linecap="butt" />
  <line x1="25" y1="35" x2="40" y2="65"
        stroke="white" stroke-width="0.5" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <!-- 2. Stufe rechts: ¬A -> B|¬A und ¬A -> ¬B|¬A -->
  <line x1="75" y1="35" x2="60.45" y2="64.11"
        stroke="black" stroke-width="1" stroke-linecap="butt" />
  <line x1="75" y1="35" x2="60" y2="65"
        stroke="white" stroke-width="0.5" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <line x1="75" y1="35" x2="89.55" y2="64.11"
        stroke="black" stroke-width="1" stroke-linecap="butt" />
  <line x1="75" y1="35" x2="90" y2="65"
        stroke="white" stroke-width="0.5" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

</svg>



  <span class="tree-node" style="left:50%; top:12.3%;"> <big>Start</big> </span>


  <span class="tree-node" style="left:25%; top:55%;">
    $P(A)$
  </span>
  <span class="tree-node" style="left:75%; top:55%;">
    $P(\bar{A})$
  </span>


  <span class="tree-node" style="left:10%; top:113%;">
    $P(B \cap A)$
  </span>
  <span class="tree-node" style="left:40%; top:113%;">
    $P(\bar{B} \cap A)$
  </span>

  <span class="tree-node" style="left:60%; top:113%;">
    $P(B \cap \bar{A})$
  </span>
  <span class="tree-node" style="left:90%; top:113%;">
    $P(\bar{B} \cap \bar{A})$
  </span>





<span class="tree-edge edge-l1-left" style="left:35.25%; top:28%;">
<span class="tree-line">
  $P(A) =$ [[ 0.4 ]]
</span>
</span>

<span class="tree-edge edge-l1-right" style="left:64.5%; top:28%;">
<span class="tree-line">
  $P(\bar{A}) =$ [[ 0.6 ]]
</span>
</span>

<span class="tree-edge edge-l2-left" style="left:14%; top:80%;">
<span class="tree-line">
  $P(B \mid A) =$ [[ 0.3 ]]
</span>
</span>

<span class="tree-edge edge-l2-right" style="left:35.5%; top:80%;">
<span class="tree-line">
  $P(\bar{B} \mid A) =$ [[ 0.7 ]]
</span>
</span>

<span class="tree-edge edge-l2-left" style="left:64%; top:80%;">
<span class="tree-line">
  $P(B \mid \bar{A}) =$ [[ 0.2 ]]
</span>
</span>

<span class="tree-edge edge-l2-right" style="left:85.5%; top:80%;">
<span class="tree-line">
  $P(\bar{B} \mid \bar{A}) =$ [[ 0.8 ]]
</span>
</span>




</div>




