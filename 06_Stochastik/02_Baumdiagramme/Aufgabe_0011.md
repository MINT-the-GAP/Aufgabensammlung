<!--
version:  0.0.1

language: de

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


/* SVG-Rahmen */
svg.tree3 {
  width: 900px;          /* gewünschte Gesamtbreite */
  max-width: 100%;
  height: auto;
  font-family: sans-serif;
}

/* ALLES, was im foreignObject steht */
svg.tree3 foreignObject {
  font-size: 0.55em;        /* Basisgröße für Text & TeX */
  line-height: 1.4;
  text-align: center;
}

/* LiaScript-Quizcontainer im foreignObject */
svg.tree3 foreignObject .lia-quiz {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 0;                 /* KEINE extra Lücke mehr zwischen Input / Buttons / Feedback */
}

/* Alle automatischen Abstände im Quiz-Block killen */
svg.tree3 foreignObject .lia-quiz * {
  margin: 0 !important;
  padding: 0 !important;
}

/* explizit alle <br>, die LiaScript ggf. einfügt, unsichtbar machen */
svg.tree3 foreignObject .lia-quiz br {
  display: none !important;
  height: 0 !important;
  line-height: 0 !important;
}

/* Eingabefeld (aus [[ ... ]]) */
svg.tree3 foreignObject .lia-input,
svg.tree3 foreignObject input {
  font-size: 1.3em !important;
  width: 2.8em;
  padding: 0.1em !important;
  box-sizing: border-box;
  line-height: 1.0 !important;
}

/* Prüfen-/Auflösen-Buttons im foreignObject verkleinern und nach oben ziehen */
svg.tree3 foreignObject .lia-btn,
svg.tree3 foreignObject button {
  font-size: 1.3em !important;
  padding: 0.1em 0.3em !important;
  line-height: 1.0 !important;
  margin-top: -1.4em !important;
}

/* Feedback-Text (Richtig/Falsch/Aufgelöst) an Boxbreite anpassen */
svg.tree3 foreignObject .lia-quiz span,
svg.tree3 foreignObject .lia-quiz p,
svg.tree3 foreignObject .lia-quiz div {
  max-width: 100% !important;
  white-space: normal !important;
  word-wrap: break-word;
  margin-top: 0.1em !important;
  text-align: center;
}


/* SVG-Rahmen */
svg.tree2 {
  width: 750px;          /* gewünschte Gesamtbreite */
  max-width: 100%;
  height: auto;
  font-family: sans-serif;
}

/* ALLES, was im foreignObject steht */
svg.tree2 foreignObject {
  font-size: 10px;        /* Basisgröße für Text & TeX */
  line-height: 1.2;
  text-align: center;
}

/* LiaScript-Quizcontainer im foreignObject */
svg.tree2 foreignObject .lia-quiz {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 0;                 /* KEINE extra Lücke mehr zwischen Input / Buttons / Feedback */
}

/* Alle automatischen Abstände im Quiz-Block killen */
svg.tree2 foreignObject .lia-quiz * {
  margin: 0 !important;
  padding: 0 !important;
}

/* explizit alle <br>, die LiaScript ggf. einfügt, unsichtbar machen */
svg.tree2 foreignObject .lia-quiz br {
  display: none !important;
  height: 0 !important;
  line-height: 0 !important;
}

/* Eingabefeld (aus [[ ... ]]) */
svg.tree2 foreignObject .lia-input,
svg.tree2 foreignObject input {
  font-size: 10px !important;
  width: 2.5em;
  padding: 0.1em !important;
  box-sizing: border-box;
  line-height: 1.0 !important;
}

/* Prüfen-/Auflösen-Buttons im foreignObject verkleinern und nach oben ziehen */
svg.tree2 foreignObject .lia-btn,
svg.tree2 foreignObject button {
  font-size: 10px !important;
  padding: 0.1em 0.3em !important;
  line-height: 1.0 !important;
  /* kritischer Punkt: die „zusätzliche Zeile“ kompensieren */
  margin-top: -1.4em !important;
}

@end

formula: \carry   \textcolor{red}{\scriptsize #1}
formula: \digit   \rlap{\carry{#1}}\phantom{#2}#2
formula: \permil  \text{‰}

import: https://raw.githubusercontent.com/LiaTemplates/Tikz-Jax/main/README.md

script: https://cdn.jsdelivr.net/gh/LiaTemplates/Tikz-Jax@main/dist/index.js


import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
        https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md


tags: Baumdiagramm, leicht, sehr niedrig, Angeben

comment: In einem Baumdiagramm fehlen Werte. Gib sie an.

author: Martin Lommatzsch

-->




# Rechnen im zweistufigen Baumdiagramm



**Gib** die im gezeigten Baumdiagramm fehlen Werte **an**.




<!-- data-group="true" data-show-partial-solution="true"  data-text-solved="Richtig!"  data-text-failed="Falsch!"  data-text-resolved="Aufgelöst!" -->
<svg class="tree2" viewBox="0 0 480 320">

  <defs>
    <!-- Latex-ähnliche Pfeilspitze, innen weiß, schwarz umrandet -->
    <marker id="arrow-white" markerWidth="10" markerHeight="10"
            refX="7" refY="3.5" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L7,3.5 L0,7 z"
            fill="white" stroke="black" stroke-width="0.6" />
    </marker>
  </defs>

  <!-- =======================
       Kanten des Baumdiagramms
       ======================= -->

  <!-- 1. Stufe: Start -> A und Start -> ¬A -->
  <line x1="200" y1="40" x2="103.12" y2="117.52"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="200" y1="40" x2="100" y2="120"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <line x1="200" y1="40" x2="296.88" y2="117.52"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="200" y1="40" x2="300" y2="120"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <!-- 2. Stufe links: A -> B|A und A -> ¬B|A -->
  <line x1="100" y1="140" x2="41.8" y2="256.44"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="100" y1="140" x2="40" y2="260"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <line x1="100" y1="140" x2="158.2" y2="256.44"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="100" y1="140" x2="160" y2="260"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <!-- 2. Stufe rechts: ¬A -> B|¬A und ¬A -> ¬B|¬A -->
  <line x1="300" y1="140" x2="241.8" y2="256.44"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="300" y1="140" x2="240" y2="260"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <line x1="300" y1="140" x2="358.2" y2="256.44"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="300" y1="140" x2="360" y2="260"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />


  <!-- =======================
       Knoten-Beschriftungen
       ======================= -->

  <!-- Start (ungekippt, im Zentrum oben) -->
  <foreignObject x="168" y="12" width="64" height="40">
    <b><big><big>Start</big></big></b>
  </foreignObject>

  <!-- Knoten der 1. Stufe: P(A), P(¬A) -->
  <foreignObject x="76" y="122" width="90" height="40">
    $P(A) = $ [[  3/10  ]]
    @Algebrite.check(3/10)
  </foreignObject>

  <foreignObject x="276" y="122" width="90" height="40">
    $P(\bar{A}) = \frac{7}{10} $  
  </foreignObject>

  <!-- Blattknoten: P(B ∩ A), … -->
  <foreignObject x="12" y="265" width="60" height="50">
    $P(B \cap A) \\ = $ [[   1/5   ]]
    @Algebrite.check(1/5)
  </foreignObject>

  <foreignObject x="132" y="265" width="60" height="50">
    $P(\bar{B} \cap A) \\ = $  [[   1/10  ]]
    @Algebrite.check(1/10)
  </foreignObject>

  <foreignObject x="212" y="265" width="60" height="50">
    $P(B \cap \bar{A}) \\ = \frac{2}{10}$
  </foreignObject>

  <foreignObject x="332" y="265" width="60" height="50">
    $P(\bar{B} \cap \bar{A}) \\ = $  [[   1/2   ]]
    @Algebrite.check(1/2)
  </foreignObject>


  <!-- ===================================
       Pfad-Beschriftungen mit Eingabefeld
       (Boxen um den Pfad-Mittelpunkt zentriert)
       =================================== -->

  <!-- 1. Stufe: P(A), Pfad-Mittelpunkt (150,80) -->
  <foreignObject x="90" y="60" width="120" height="60"
                 transform="rotate(-40 150 80)">
    <!-- data-text-solved="Richtig!"  data-text-failed="Falsch!"  data-text-resolved="Aufgelöst!"  -->
    $P(A) =  \frac{3}{10}$ 
  </foreignObject>

  <!-- 1. Stufe: P(¬A), Pfad-Mittelpunkt (250,80) -->
  <foreignObject x="190" y="60" width="120" height="60"
                 transform="rotate(40 250 80)">
    <!-- data-text-solved="Richtig!"  data-text-failed="Falsch!"  data-text-resolved="Aufgelöst!"  -->
    $P(\bar{A}) =$ [[  7/10  ]] 
    @Algebrite.check(7/10)
  </foreignObject>


  <!-- 2. Stufe links: P(B|A), Pfad-Mittelpunkt (70,200) -->
  <foreignObject x="10" y="170" width="120" height="60"
                 transform="rotate(-64 79 195)">
    <!-- data-text-solved="Richtig!"  data-text-failed="Falsch!"  data-text-resolved="Aufgelöst!"  -->
    $P(B \mid A) = \frac{2}{3} $ 
  </foreignObject>

  <!-- 2. Stufe links: P(¬B|A), Pfad-Mittelpunkt (130,200) -->
  <foreignObject x="70" y="170" width="120" height="60"
                 transform="rotate(64 121 195)">
    <!-- data-text-solved="Richtig!"  data-text-failed="Falsch!"  data-text-resolved="Aufgelöst!"  -->
    $P(\bar{B} \mid A) =  \frac{1}{3} $
  </foreignObject>


  <!-- 2. Stufe rechts: P(B|¬A), Pfad-Mittelpunkt (270,200) -->
  <foreignObject x="210" y="170" width="120" height="60"
                 transform="rotate(-64 279 195)">
    <!-- data-text-solved="Richtig!"  data-text-failed="Falsch!"  data-text-resolved="Aufgelöst!"  -->
    $P(B \mid \bar{A}) =$   [[   2/7   ]]
    @Algebrite.check(2/7)
  </foreignObject>

  <!-- 2. Stufe rechts: P(¬B|¬A), Pfad-Mittelpunkt (330,200) -->
  <foreignObject x="270" y="170" width="120" height="60"
                 transform="rotate(64 321 195)">
    <!-- data-text-solved="Richtig!"  data-text-failed="Falsch!"  data-text-resolved="Aufgelöst!"  -->
    $P(\bar{B} \mid \bar{A}) =$   [[   5/7   ]]
    @Algebrite.check(5/7)
  </foreignObject>

</svg>










