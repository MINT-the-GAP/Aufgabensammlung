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




import: https://raw.githubusercontent.com/LiaTemplates/Tikz-Jax/main/README.md

script: https://cdn.jsdelivr.net/gh/LiaTemplates/Tikz-Jax@main/dist/index.js

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
        https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md



author: Martin Lommatzsch





-->


#### Übungsaufgaben zu Baumdiagrammen 1 bis 10



<!-- Baumdiagramme 0008 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 1:__ **Gib** die im gezeigten Baumdiagramm fehlen Werte **an**.




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
    $P(A) = $ [[  1/5  ]]
    @Algebrite.check(1/5)
  </foreignObject>

  <foreignObject x="276" y="122" width="90" height="40">
    $P(\bar{A}) = $  [[  4/5  ]] 
    @Algebrite.check(4/5)
  </foreignObject>

  <!-- Blattknoten: P(B ∩ A), … -->
  <foreignObject x="12" y="265" width="60" height="50">
    $P(B \cap A) \\ = $ [[   1/20  ]]
    @Algebrite.check(1/20)
  </foreignObject>

  <foreignObject x="132" y="265" width="60" height="50">
    $P(\bar{B} \cap A) \\ = $  [[   3/20  ]]
    @Algebrite.check(3/20)
  </foreignObject>

  <foreignObject x="212" y="265" width="60" height="50">
    $P(B \cap \bar{A}) \\ = $ [[   1/5   ]]
    @Algebrite.check(1/5)
  </foreignObject>

  <foreignObject x="332" y="265" width="60" height="50">
    $P(\bar{B} \cap \bar{A}) \\ = $  [[   3/5   ]]
    @Algebrite.check(3/5)
  </foreignObject>


  <!-- ===================================
       Pfad-Beschriftungen mit Eingabefeld
       (Boxen um den Pfad-Mittelpunkt zentriert)
       =================================== -->

  <!-- 1. Stufe: P(A), Pfad-Mittelpunkt (150,80) -->
  <foreignObject x="90" y="60" width="120" height="60"
                 transform="rotate(-40 150 80)">
    <!-- data-text-solved="Richtig!"  data-text-failed="Falsch!"  data-text-resolved="Aufgelöst!"  -->
    $P(A) =  \frac{1}{5}$ 
  </foreignObject>

  <!-- 1. Stufe: P(¬A), Pfad-Mittelpunkt (250,80) -->
  <foreignObject x="190" y="60" width="120" height="60"
                 transform="rotate(40 250 80)">
    <!-- data-text-solved="Richtig!"  data-text-failed="Falsch!"  data-text-resolved="Aufgelöst!"  -->
    $P(\bar{A}) = \frac{4}{5}$ 
  </foreignObject>


  <!-- 2. Stufe links: P(B|A), Pfad-Mittelpunkt (70,200) -->
  <foreignObject x="10" y="170" width="120" height="60"
                 transform="rotate(-64 79 195)">
    <!-- data-text-solved="Richtig!"  data-text-failed="Falsch!"  data-text-resolved="Aufgelöst!"  -->
    $P(B \mid A) = \frac{1}{4} $ 
  </foreignObject>

  <!-- 2. Stufe links: P(¬B|A), Pfad-Mittelpunkt (130,200) -->
  <foreignObject x="70" y="170" width="120" height="60"
                 transform="rotate(64 121 195)">
    <!-- data-text-solved="Richtig!"  data-text-failed="Falsch!"  data-text-resolved="Aufgelöst!"  -->
    $P(\bar{B} \mid A) =  \frac{3}{4} $
  </foreignObject>


  <!-- 2. Stufe rechts: P(B|¬A), Pfad-Mittelpunkt (270,200) -->
  <foreignObject x="210" y="170" width="120" height="60"
                 transform="rotate(-64 279 195)">
    <!-- data-text-solved="Richtig!"  data-text-failed="Falsch!"  data-text-resolved="Aufgelöst!"  -->
    $P(B \mid \bar{A}) =  \frac{1}{4} $ 
  </foreignObject>

  <!-- 2. Stufe rechts: P(¬B|¬A), Pfad-Mittelpunkt (330,200) -->
  <foreignObject x="270" y="170" width="120" height="60"
                 transform="rotate(64 321 195)">
    <!-- data-text-solved="Richtig!"  data-text-failed="Falsch!"  data-text-resolved="Aufgelöst!"  -->
    $P(\bar{B} \mid \bar{A}) =  \frac{3}{4} $
  </foreignObject>

</svg>










<!-- Baumdiagramme 0009 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
__Aufgabe 2:__ **Gib** die im gezeigten Baumdiagramm fehlen Werte **an**.






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
    $P(A) = $ [[  5/8  ]]
    @Algebrite.check(5/8)
  </foreignObject>

  <foreignObject x="276" y="122" width="90" height="40">
    $P(\bar{A}) = \frac{3}{8}$  
  </foreignObject>

  <!-- Blattknoten: P(B ∩ A), … -->
  <foreignObject x="12" y="265" width="60" height="50">
    $P(B \cap A) \\ = $  [[   1/2  ]]
    @Algebrite.check(1/2)
  </foreignObject>

  <foreignObject x="132" y="265" width="60" height="50">
    $P(\bar{B} \cap A) \\ = $  [[   3/8  ]]
    @Algebrite.check(3/8)
  </foreignObject>

  <foreignObject x="212" y="265" width="60" height="50">
    $P(B \cap \bar{A}) \\ = $ [[   3/20  ]]
    @Algebrite.check(1/10)
  </foreignObject>

  <foreignObject x="332" y="265" width="60" height="50">
    $P(\bar{B} \cap \bar{A}) \\ = $  [[  9/40  ]]
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
    $P(A) =  \frac{5}{8}$ 
  </foreignObject>

  <!-- 1. Stufe: P(¬A), Pfad-Mittelpunkt (250,80) -->
  <foreignObject x="190" y="60" width="120" height="60"
                 transform="rotate(40 250 80)">
    <!-- data-text-solved="Richtig!"  data-text-failed="Falsch!"  data-text-resolved="Aufgelöst!"  -->
    $P(\bar{A}) = $ [[  3/8  ]] 
    @Algebrite.check(3/8)
  </foreignObject>


  <!-- 2. Stufe links: P(B|A), Pfad-Mittelpunkt (70,200) -->
  <foreignObject x="10" y="170" width="120" height="60"
                 transform="rotate(-64 79 195)">
    <!-- data-text-solved="Richtig!"  data-text-failed="Falsch!"  data-text-resolved="Aufgelöst!"  -->
    $P(B \mid A) = \frac{2}{5} $ 
  </foreignObject>

  <!-- 2. Stufe links: P(¬B|A), Pfad-Mittelpunkt (130,200) -->
  <foreignObject x="70" y="170" width="120" height="60"
                 transform="rotate(64 121 195)">
    <!-- data-text-solved="Richtig!"  data-text-failed="Falsch!"  data-text-resolved="Aufgelöst!"  -->
    $P(\bar{B} \mid A) =  $ [[  3/5  ]]
    @Algebrite.check(3/5)
  </foreignObject>


  <!-- 2. Stufe rechts: P(B|¬A), Pfad-Mittelpunkt (270,200) -->
  <foreignObject x="210" y="170" width="120" height="60"
                 transform="rotate(-64 279 195)">
    <!-- data-text-solved="Richtig!"  data-text-failed="Falsch!"  data-text-resolved="Aufgelöst!"  -->
    $P(B \mid \bar{A}) =  \frac{2}{5}$  
  </foreignObject>

  <!-- 2. Stufe rechts: P(¬B|¬A), Pfad-Mittelpunkt (330,200) -->
  <foreignObject x="270" y="170" width="120" height="60"
                 transform="rotate(64 321 195)">
    <!-- data-text-solved="Richtig!"  data-text-failed="Falsch!"  data-text-resolved="Aufgelöst!"  -->
    $P(\bar{B} \mid \bar{A}) =  \frac{3}{5} $
  </foreignObject>

</svg>






<!-- Baumdiagramme 0010 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 3:__ **Gib** die im gezeigten Baumdiagramm fehlen Werte **an**.




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
    $P(A) = $ [[  0,9  ]]
    @Algebrite.check(9/10)
  </foreignObject>

  <foreignObject x="276" y="122" width="90" height="40">
    $P(\bar{A}) = 10\% $  
  </foreignObject>

  <!-- Blattknoten: P(B ∩ A), … -->
  <foreignObject x="12" y="265" width="60" height="50">
    $P(B \cap A) \\ = $ [[  3/5  ]]
    @Algebrite.check(3/5)
  </foreignObject>

  <foreignObject x="132" y="265" width="60" height="50">
    $P(\bar{B} \cap A) \\ = $  [[  3/10  ]]
    @Algebrite.check(3/10)
  </foreignObject>

  <foreignObject x="212" y="265" width="60" height="50">
    $P(B \cap \bar{A}) \\ = 2,5\%$
  </foreignObject>

  <foreignObject x="332" y="265" width="60" height="50">
    $P(\bar{B} \cap \bar{A}) \\ = $  [[  3/40  ]]
    @Algebrite.check(3/40)
  </foreignObject>


  <!-- ===================================
       Pfad-Beschriftungen mit Eingabefeld
       (Boxen um den Pfad-Mittelpunkt zentriert)
       =================================== -->

  <!-- 1. Stufe: P(A), Pfad-Mittelpunkt (150,80) -->
  <foreignObject x="90" y="60" width="120" height="60"
                 transform="rotate(-40 150 80)">
    <!-- data-text-solved="Richtig!"  data-text-failed="Falsch!"  data-text-resolved="Aufgelöst!"  -->
    $P(A) =  $  [[  9/10  ]] 
    @Algebrite.check(9/10)
  </foreignObject>

  <!-- 1. Stufe: P(¬A), Pfad-Mittelpunkt (250,80) -->
  <foreignObject x="190" y="60" width="120" height="60"
                 transform="rotate(40 250 80)">
    <!-- data-text-solved="Richtig!"  data-text-failed="Falsch!"  data-text-resolved="Aufgelöst!"  -->
    $P(\bar{A}) =$ [[  1/10  ]] 
    @Algebrite.check(1/10)
  </foreignObject>


  <!-- 2. Stufe links: P(B|A), Pfad-Mittelpunkt (70,200) -->
  <foreignObject x="10" y="170" width="120" height="60"
                 transform="rotate(-64 79 195)">
    <!-- data-text-solved="Richtig!"  data-text-failed="Falsch!"  data-text-resolved="Aufgelöst!"  -->
    $P(B \mid A) =  $  [[  2/3  ]]
    @Algebrite.check(2/3)
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
    $P(B \mid \bar{A}) =$   [[  1/4  ]]
    @Algebrite.check(1/4)
  </foreignObject>

  <!-- 2. Stufe rechts: P(¬B|¬A), Pfad-Mittelpunkt (330,200) -->
  <foreignObject x="270" y="170" width="120" height="60"
                 transform="rotate(64 321 195)">
    <!-- data-text-solved="Richtig!"  data-text-failed="Falsch!"  data-text-resolved="Aufgelöst!"  -->
    $P(\bar{B} \mid \bar{A}) =$   [[  3/4  ]]
    @Algebrite.check(3/4)
  </foreignObject>

</svg>






<!-- Baumdiagramme 0011 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 4:__ **Gib** die im gezeigten Baumdiagramm fehlen Werte **an**.




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













<!-- Baumdiagramme 0012 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 5:__ **Gib** die im gezeigten Baumdiagramm fehlen Werte **an**.




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
    $P(A) = $ [[  7/8  ]]
    @Algebrite.check(7/8)
  </foreignObject>

  <foreignObject x="276" y="122" width="90" height="40">
    $P(\bar{A}) = 12,5\% $  
  </foreignObject>

  <!-- Blattknoten: P(B ∩ A), … -->
  <foreignObject x="12" y="265" width="60" height="50">
    $P(B \cap A) \\ = $ [[  7/10  ]]
    @Algebrite.check(7/10)
  </foreignObject>

  <foreignObject x="132" y="265" width="60" height="50">
    $P(\bar{B} \cap A) \\ = $  [[  7/40  ]]
    @Algebrite.check(7/40)
  </foreignObject>

  <foreignObject x="212" y="265" width="60" height="50">
    $P(B \cap \bar{A}) \\ = $  [[  1/32  ]]
    @Algebrite.check(1/32)
  </foreignObject>

  <foreignObject x="332" y="265" width="60" height="50">
    $P(\bar{B} \cap \bar{A}) \\ = $  [[  3/32  ]]
    @Algebrite.check(3/32)
  </foreignObject>


  <!-- ===================================
       Pfad-Beschriftungen mit Eingabefeld
       (Boxen um den Pfad-Mittelpunkt zentriert)
       =================================== -->

  <!-- 1. Stufe: P(A), Pfad-Mittelpunkt (150,80) -->
  <foreignObject x="90" y="60" width="120" height="60"
                 transform="rotate(-40 150 80)">
    <!-- data-text-solved="Richtig!"  data-text-failed="Falsch!"  data-text-resolved="Aufgelöst!"  -->
    $P(A) =  $ [[  7/8  ]]
    @Algebrite.check(7/8)
  </foreignObject>

  <!-- 1. Stufe: P(¬A), Pfad-Mittelpunkt (250,80) -->
  <foreignObject x="190" y="60" width="120" height="60"
                 transform="rotate(40 250 80)">
    <!-- data-text-solved="Richtig!"  data-text-failed="Falsch!"  data-text-resolved="Aufgelöst!"  -->
    $P(\bar{A}) =$ [[  1/8  ]] 
    @Algebrite.check(1/8)
  </foreignObject>


  <!-- 2. Stufe links: P(B|A), Pfad-Mittelpunkt (70,200) -->
  <foreignObject x="10" y="170" width="120" height="60"
                 transform="rotate(-64 79 195)">
    <!-- data-text-solved="Richtig!"  data-text-failed="Falsch!"  data-text-resolved="Aufgelöst!"  -->
    $P(B \mid A) = \frac{4}{5} $ 
  </foreignObject>

  <!-- 2. Stufe links: P(¬B|A), Pfad-Mittelpunkt (130,200) -->
  <foreignObject x="70" y="170" width="120" height="60"
                 transform="rotate(64 121 195)">
    <!-- data-text-solved="Richtig!"  data-text-failed="Falsch!"  data-text-resolved="Aufgelöst!"  -->
    $P(\bar{B} \mid A) =  $[[   1/5   ]]
    @Algebrite.check(1/5)
  </foreignObject>


  <!-- 2. Stufe rechts: P(B|¬A), Pfad-Mittelpunkt (270,200) -->
  <foreignObject x="210" y="170" width="120" height="60"
                 transform="rotate(-64 279 195)">
    <!-- data-text-solved="Richtig!"  data-text-failed="Falsch!"  data-text-resolved="Aufgelöst!"  -->
    $P(B \mid \bar{A}) =$   [[   1/4   ]]
    @Algebrite.check(1/4)
  </foreignObject>

  <!-- 2. Stufe rechts: P(¬B|¬A), Pfad-Mittelpunkt (330,200) -->
  <foreignObject x="270" y="170" width="120" height="60"
                 transform="rotate(64 321 195)">
    <!-- data-text-solved="Richtig!"  data-text-failed="Falsch!"  data-text-resolved="Aufgelöst!"  -->
    $P(\bar{B} \mid \bar{A}) = 0,75$ 
  </foreignObject>

</svg>














<!-- Baumdiagramme 0013 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 6:__ **Gib** die im gezeigten Baumdiagramm fehlen Werte **an**.




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
    $P(A) = $ [[  1/6  ]]
    @Algebrite.check(1/6)
  </foreignObject>

  <foreignObject x="276" y="122" width="90" height="40">
    $P(\bar{A}) =  $  [[  5/6  ]] 
    @Algebrite.check(5/6)
  </foreignObject>

  <!-- Blattknoten: P(B ∩ A), … -->
  <foreignObject x="12" y="265" width="60" height="50">
    $P(B \cap A) \\ = \frac{1}{10} $ 
  </foreignObject>

  <foreignObject x="132" y="265" width="60" height="50">
    $P(\bar{B} \cap A) \\ = $  [[  1/15  ]]
    @Algebrite.check(1/15)
  </foreignObject>

  <foreignObject x="212" y="265" width="60" height="50">
    $P(B \cap \bar{A}) \\ = 75\% $
  </foreignObject>

  <foreignObject x="332" y="265" width="60" height="50">
    $P(\bar{B} \cap \bar{A}) \\ = $  [[  1/12  ]]
    @Algebrite.check(1/12)
  </foreignObject>


  <!-- ===================================
       Pfad-Beschriftungen mit Eingabefeld
       (Boxen um den Pfad-Mittelpunkt zentriert)
       =================================== -->

  <!-- 1. Stufe: P(A), Pfad-Mittelpunkt (150,80) -->
  <foreignObject x="90" y="60" width="120" height="60"
                 transform="rotate(-40 150 80)">
    <!-- data-text-solved="Richtig!"  data-text-failed="Falsch!"  data-text-resolved="Aufgelöst!"  -->
    $P(A) =  $ [[  1/6  ]] 
    @Algebrite.check(1/6)
  </foreignObject>

  <!-- 1. Stufe: P(¬A), Pfad-Mittelpunkt (250,80) -->
  <foreignObject x="190" y="60" width="120" height="60"
                 transform="rotate(40 250 80)">
    <!-- data-text-solved="Richtig!"  data-text-failed="Falsch!"  data-text-resolved="Aufgelöst!"  -->
    $P(\bar{A}) = \frac{5}{6}$ 
  </foreignObject>


  <!-- 2. Stufe links: P(B|A), Pfad-Mittelpunkt (70,200) -->
  <foreignObject x="10" y="170" width="120" height="60"
                 transform="rotate(-64 79 195)">
    <!-- data-text-solved="Richtig!"  data-text-failed="Falsch!"  data-text-resolved="Aufgelöst!"  -->
    $P(B \mid A) =  $ [[  3/5  ]]
    @Algebrite.check(3/5)
  </foreignObject>

  <!-- 2. Stufe links: P(¬B|A), Pfad-Mittelpunkt (130,200) -->
  <foreignObject x="70" y="170" width="120" height="60"
                 transform="rotate(64 121 195)">
    <!-- data-text-solved="Richtig!"  data-text-failed="Falsch!"  data-text-resolved="Aufgelöst!"  -->
    $P(\bar{B} \mid A) =  $[[  2/5  ]]
    @Algebrite.check(2/5)
  </foreignObject>


  <!-- 2. Stufe rechts: P(B|¬A), Pfad-Mittelpunkt (270,200) -->
  <foreignObject x="210" y="170" width="120" height="60"
                 transform="rotate(-64 279 195)">
    <!-- data-text-solved="Richtig!"  data-text-failed="Falsch!"  data-text-resolved="Aufgelöst!"  -->
    $P(B \mid \bar{A}) =$   [[  9/10  ]]
    @Algebrite.check(9/10)
  </foreignObject>

  <!-- 2. Stufe rechts: P(¬B|¬A), Pfad-Mittelpunkt (330,200) -->
  <foreignObject x="270" y="170" width="120" height="60"
                 transform="rotate(64 321 195)">
    <!-- data-text-solved="Richtig!"  data-text-failed="Falsch!"  data-text-resolved="Aufgelöst!"  -->
    $P(\bar{B} \mid \bar{A}) =$   [[  1/10  ]]
    @Algebrite.check(1/10)
  </foreignObject>

</svg>






















<!-- Baumdiagramme 0001 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 7:__ In einem Gefäß befinden sich 6 schwarze und 14 weiße Kugeln für drei Ziehungen mit Zurücklegen. 





 __$a) \;\;$__ **Skizziere** ein Baumdiagramm für den beschriebenen Fall. 



[[!]]
<script>true</script>
*************






<!-- data-group="true" data-show-partial-solution="true"
     data-text-solved="Richtig!" data-text-failed="Falsch!"
     data-text-resolved="Aufgelöst!" -->
<svg class="tree3" viewBox="70 0 1050 680">

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

  <!-- 1. Stufe: Start -> A (mit Abstand vor dem Knoten) -->
  <line x1="120" y1="360" x2="220" y2="200"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="120" y1="360" x2="220" y2="200"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <!-- 1. Stufe: Start -> ¬A -->
  <line x1="120" y1="360" x2="220" y2="520"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="120" y1="360" x2="220" y2="520"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <!-- 2. Stufe links (A-Bereich): Pfeile starten hinter dem Knoten A -->
  <!-- A -> B|A -->
  <line x1="350" y1="200" x2="550" y2="100"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="350" y1="200" x2="550" y2="100"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <!-- A -> ¬B|A -->
  <line x1="350" y1="200" x2="550" y2="260"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="350" y1="200" x2="550" y2="260"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <!-- 2. Stufe rechts (¬A-Bereich): Pfeile starten hinter dem Knoten ¬A -->
  <!-- ¬A -> B|¬A -->
  <line x1="350" y1="520" x2="550" y2="420"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="350" y1="520" x2="550" y2="420"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <!-- ¬A -> ¬B|¬A -->
  <line x1="350" y1="520" x2="550" y2="580"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="350" y1="520" x2="550" y2="580"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <!-- 3. Stufe: von jedem B-/¬B-Knoten zu C / ¬C,
       mit Start bei x=760 und Endpunkten im 80px-Abstand
       y = 60, 140, 220, 300, 380, 460, 540, 620
  -->

  <!-- von B ∩ A (710,100) -->
  <line x1="710" y1="100" x2="930" y2="60"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="710" y1="100" x2="930" y2="60"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <line x1="710" y1="100" x2="930" y2="140"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="710" y1="100" x2="930" y2="140"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <!-- von ¬B ∩ A (710,260) -->
  <line x1="710" y1="260" x2="930" y2="220"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="710" y1="260" x2="930" y2="220"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <line x1="710" y1="260" x2="930" y2="300"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="710" y1="260" x2="930" y2="300"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <!-- von B ∩ ¬A (710,420) -->
  <line x1="710" y1="420" x2="930" y2="380"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="710" y1="420" x2="930" y2="380"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <line x1="710" y1="420" x2="930" y2="460"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="710" y1="420" x2="930" y2="460"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <!-- von ¬B ∩ ¬A (710,580) -->
  <line x1="710" y1="580" x2="930" y2="540"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="710" y1="580" x2="930" y2="540"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <line x1="710" y1="580" x2="930" y2="620"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="710" y1="580" x2="930" y2="620"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />


  <!-- =======================
       Knoten-Beschriftungen
       ======================= -->

  <!-- Start -->
  <foreignObject x="35" y="345" width="120" height="50">
    <big><big><b>  Start </b></big> </big> 
  </foreignObject>

  <!-- 1. Stufe: P(A), P(¬A) am Knoten -->
  <foreignObject x="200" y="190" width="160" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(W) = \frac{14}{20}$
  </foreignObject>

  <foreignObject x="200" y="510" width="160" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(S) =  \frac{6}{20}$ 
  </foreignObject>

  <!-- 2. Stufe: Knoten-Beschriftungen (B-Bereiche) -->
  <foreignObject x="520" y="90" width="220" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(W \cap W) = \frac{14}{20} \cdot \frac{14}{20}$ 
  </foreignObject>

  <foreignObject x="520" y="250" width="220" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(S \cap W) = \frac{6}{20} \cdot \frac{14}{20}$ 
  </foreignObject>

  <foreignObject x="520" y="410" width="220" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(W \cap S) = \frac{14}{20} \cdot \frac{6}{20}$ 
  </foreignObject>

  <foreignObject x="520" y="570" width="220" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(S \cap S) = \frac{6}{20} \cdot \frac{6}{20}$ 
  </foreignObject>


  <!-- ===================================
       Pfad-Beschriftungen mit Eingabefeld
       passend zur Linienneigung
       =================================== -->

  <!-- 1. Stufe: P(A), Pfad-Mittelpunkt bei (220,280), Winkel ca. -38.7° -->
  <foreignObject x="120" y="210" width="130" height="80"
                 transform="rotate(-57 220 280)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(W) = \frac{14}{20}$ 
  </foreignObject>

  <!-- 1. Stufe: P(¬A), Pfad-Mittelpunkt bei (220,440), Winkel ca. +38.7° -->
  <foreignObject x="110" y="490" width="140" height="80"
                 transform="rotate(57 220 440)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(S) = \frac{6}{20}$ 
  </foreignObject>

  <!-- 2. Stufe links: P(B|A), Mittelpunkt (440,150), Winkel ca. -22.6° -->
  <foreignObject x="390" y="130" width="150" height="80"
                 transform="rotate(-30 440 150)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(W \mid W) = \frac{14}{20} \cdot \frac{14}{20}$ 
  </foreignObject>

  <!-- 2. Stufe links: P(¬B|A), Mittelpunkt (440,230), Winkel ca. +14.0° -->
  <foreignObject x="370" y="230" width="170" height="80"
                 transform="rotate(18 440 230)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(S \mid W) = \frac{6}{20} \cdot \frac{14}{20}$ 
  </foreignObject>

  <!-- 2. Stufe rechts: P(B|¬A), Mittelpunkt (440,470), Winkel ca. -22.6° -->
  <foreignObject x="390" y="450" width="170" height="80"
                 transform="rotate(-30 440 470)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(W \mid S) = \frac{14}{20} \cdot \frac{6}{20}$ 
  </foreignObject>

  <!-- 2. Stufe rechts: P(¬B|¬A), Mittelpunkt (440,550), Winkel ca. +14.0° -->
  <foreignObject x="365" y="550" width="190" height="80"
                 transform="rotate(18 440 550)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(S \mid S) = \frac{6}{20} \cdot \frac{6}{20}$ 
  </foreignObject>





  <!-- =======================
       3. Stufe: Linientexte (bedingte Wahrscheinlichkeiten)
       mit Neigung entlang der Pfade (±10.3°)
       ======================= -->

  <!-- B ∩ A -> C (760,100) -> (980,60), Mittelpunkt (870,80) -->
  <foreignObject x="720" y="45" width="220" height="80"
                 transform="rotate(-10.3 870 80)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(W \mid W \mid W) = \frac{14}{20} \cdot \frac{14}{20} \cdot \frac{14}{20}$
  </foreignObject>

  <!-- B ∩ A -> ¬C, Mittelpunkt (870,120) -->
  <foreignObject x="710" y="135" width="240" height="80"
                 transform="rotate(10.3 870 120)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(S \mid W \mid W) = \frac{6}{20} \cdot \frac{14}{20} \cdot \frac{14}{20}$ 
  </foreignObject>

  <!-- ¬B ∩ A -> C, Mittelpunkt (870,240) -->
  <foreignObject x="710" y="205" width="240" height="80"
                 transform="rotate(-10.3 870 240)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(W \mid S \mid W) = \frac{14}{20} \cdot \frac{6}{20} \cdot \frac{14}{20}$ 
  </foreignObject>

  <!-- ¬B ∩ A -> ¬C, Mittelpunkt (870,280) -->
  <foreignObject x="700" y="295" width="260" height="80"
                 transform="rotate(10.3 870 280)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(S \mid S \mid W) = \frac{6}{20} \cdot \frac{6}{20} \cdot \frac{14}{20}$ 
  </foreignObject>

  <!-- B ∩ ¬A -> C, Mittelpunkt (870,400) -->
  <foreignObject x="700" y="365" width="260" height="80"
                 transform="rotate(-10.3 870 400)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(W \mid W \mid S) = \frac{14}{20} \cdot \frac{14}{20} \cdot \frac{6}{20}$ 
  </foreignObject>

  <!-- B ∩ ¬A -> ¬C, Mittelpunkt (870,440) -->
  <foreignObject x="690" y="455" width="280" height="80"
                 transform="rotate(10.3 870 440)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(S \mid W \mid S) = \frac{6}{20} \cdot \frac{14}{20} \cdot \frac{6}{20}$ 
  </foreignObject>

  <!-- ¬B ∩ ¬A -> C, Mittelpunkt (870,560) -->
  <foreignObject x="690" y="525" width="280" height="80"
                 transform="rotate(-10.3 870 560)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(W \mid S \mid S) = \frac{14}{20} \cdot \frac{6}{20} \cdot \frac{6}{20}$ 
  </foreignObject>

  <!-- ¬B ∩ ¬A -> ¬C, Mittelpunkt (870,600) -->
  <foreignObject x="680" y="615" width="300" height="80"
                 transform="rotate(10.3 870 600)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(S \mid S \mid S) = \frac{6}{20} \cdot \frac{6}{20} \cdot \frac{6}{20}$ 
  </foreignObject>


  <!-- =======================
       Blattknoten 3. Stufe:
       gemeinsame Wahrscheinlichkeiten am Ende der Pfade
       (Endpunkte bei x=980 und y = 60,140,220,...,620, Abstand 80px)
       ======================= -->

  <!-- A ∩ B ∩ C   (Endpunkt bei (910,60)) -->
  <foreignObject x="910" y="50" width="220" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(W \cap W \cap W) = \frac{14}{20} \cdot \frac{14}{20} \cdot \frac{14}{20}$ 
  </foreignObject>

  <!-- A ∩ B ∩ ¬C (Endpunkt bei (910,140)) -->
  <foreignObject x="910" y="130" width="220" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(W \cap W \cap S) = \frac{14}{20} \cdot \frac{14}{20} \cdot \frac{6}{20}$ 
  </foreignObject>

  <!-- A ∩ ¬B ∩ C (Endpunkt bei (910,220)) -->
  <foreignObject x="910" y="210" width="220" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(W \cap S \cap W) = \frac{14}{20} \cdot \frac{6}{20} \cdot \frac{14}{20}$ 
  </foreignObject>

  <!-- A ∩ ¬B ∩ ¬C (Endpunkt bei (910,300)) -->
  <foreignObject x="910" y="290" width="220" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(W \cap S \cap S) = \frac{14}{20} \cdot \frac{6}{20} \cdot \frac{6}{20}$ 
  </foreignObject>

  <!-- ¬A ∩ B ∩ C (Endpunkt bei (910,380)) -->
  <foreignObject x="910" y="370" width="220" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(S \cap W \cap W) = \frac{6}{20} \cdot \frac{14}{20} \cdot \frac{14}{20}$ 
  </foreignObject>

  <!-- ¬A ∩ B ∩ ¬C (Endpunkt bei (910,460)) -->
  <foreignObject x="910" y="450" width="220" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(S \cap W \cap S) = \frac{6}{20} \cdot \frac{14}{20} \cdot \frac{6}{20}$ 
  </foreignObject>

  <!-- ¬A ∩ ¬B ∩ C (Endpunkt bei (910,540)) -->
  <foreignObject x="910" y="530" width="220" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(S \cap S \cap W) = \frac{6}{20} \cdot \frac{6}{20} \cdot \frac{14}{20}$ 
  </foreignObject>

  <!-- ¬A ∩ ¬B ∩ ¬C (Endpunkt bei (910,620)) -->
  <foreignObject x="910" y="610" width="220" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(S \cap S \cap S) = \frac{6}{20} \cdot \frac{6}{20} \cdot \frac{6}{20}$ 
  </foreignObject>

</svg>







*************



<section class="flex-container">

<div class="flex-child">




 __$b) \;\;$__ **Bestimme**, wie hoch die Wahrscheinlichkeit ist bei der ersten Ziehung eine weiße Kugel zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. Runde falls nötig auf drei Nachkommastellen.



[[  70  ]]$\%$.
@Algebrite.check(70)
*************
$$
\begin{align*}
   \frac{14}{20} & = 0,7 = 70\%
\end{align*}
$$
*************



</div>
<div class="flex-child">


 __$c) \;\;$__ **Bestimme**, wie hoch die Wahrscheinlichkeit ist drei schwarze Kugeln hintereinander zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. 



[[  2,7  ]]$\%$.
@Algebrite.check(2.7)
*************
$$
\begin{align*}
   \left(\frac{6}{20}\right)^3 = 2,7\%
\end{align*}
$$
*************


</div>
<div class="flex-child">




 __$d) \;\;$__ **Bestimme**, wie viele Pfade für die Möglichkeit existieren genau zwei weiße Kugeln zu ziehen. 



[[  3  ]] 
*************
WWS, WSW und SWW
*************



</div>
<div class="flex-child">



 __$e) \;\;$__ **Bestimme**, wie viele Pfade für die Möglichkeit existieren mindestens eine schwarze Kugel zu ziehen. 



[[  7  ]] 
*************
$$
  WWS, WSW, SWW, WSS, SWS, SSW und SSS
$$
*************


</div>
<div class="flex-child">




 __$f) \;\;$__ **Bestimme**, wie hoch die Wahrscheinlichkeit ist mindestens zwei schwarze Kugeln zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. 




[[  21,6  ]]$\%$.
@Algebrite.check(21.6)
*************
$$
\begin{align*}
   \left( \frac{6}{20}\right)^3 + 3 \left( \frac{6}{20}\right)^2 \cdot \frac{14}{20} = 21,6\%
\end{align*}
$$
*************



</div>
<div class="flex-child">



 __$g) \;\;$__ **Bestimme**, wie hoch die Wahrscheinlichkeit ist mehr als eine weiße Kugel zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. 



[[  97,3  ]]$\%$.
@Algebrite.check(97.3)
*************
$$
\begin{align*}
  1 - \left( \frac{6}{20}\right)^3 = 97,3\%
\end{align*}
$$
*************



</div>
<div class="flex-child">



 __$h) \;\;$__ **Bestimme**, wie hoch die Wahrscheinlichkeit ist weniger als zwei weiße Kugeln zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. 



[[  21,6  ]]$\%$.
@Algebrite.check(21.6)
*************
$$
\begin{align*}
   \left( \frac{6}{20}\right)^3 + 3 \left( \frac{6}{20}\right)^2 \cdot \frac{14}{20} = 21,6\%
\end{align*}
$$
*************



</div>
<div class="flex-child">



 __$i) \;\;$__ **Bestimme**, wie hoch die Wahrscheinlichkeit ist höchstens zwei schwarze Kugel zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. 



[[  97,3  ]]$\%$.
@Algebrite.check(97.3)
*************
$$
\begin{align*}
   1 - \left( \frac{6}{20}\right)^3 = 97,3\%
\end{align*}
$$
*************




</div>
</section>















<!-- Baumdiagramme 0002 -->

<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
__Aufgabe 8:__ In einem Gefäß befinden sich 11 schwarze und 15 weiße Kugeln für drei Ziehungen ohne Zurücklegen. 





 __$a) \;\;$__ **Skizziere** ein Baumdiagramm für den beschriebenen Fall. 



[[!]]
<script>true</script>
*************




<!-- data-group="true" data-show-partial-solution="true"
     data-text-solved="Richtig!" data-text-failed="Falsch!"
     data-text-resolved="Aufgelöst!" -->
<svg class="tree3" viewBox="70 0 1050 680">

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

  <!-- 1. Stufe: Start -> A (mit Abstand vor dem Knoten) -->
  <line x1="120" y1="360" x2="220" y2="200"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="120" y1="360" x2="220" y2="200"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <!-- 1. Stufe: Start -> ¬A -->
  <line x1="120" y1="360" x2="220" y2="520"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="120" y1="360" x2="220" y2="520"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <!-- 2. Stufe links (A-Bereich): Pfeile starten hinter dem Knoten A -->
  <!-- A -> B|A -->
  <line x1="350" y1="200" x2="550" y2="100"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="350" y1="200" x2="550" y2="100"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <!-- A -> ¬B|A -->
  <line x1="350" y1="200" x2="550" y2="260"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="350" y1="200" x2="550" y2="260"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <!-- 2. Stufe rechts (¬A-Bereich): Pfeile starten hinter dem Knoten ¬A -->
  <!-- ¬A -> B|¬A -->
  <line x1="350" y1="520" x2="550" y2="420"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="350" y1="520" x2="550" y2="420"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <!-- ¬A -> ¬B|¬A -->
  <line x1="350" y1="520" x2="550" y2="580"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="350" y1="520" x2="550" y2="580"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <!-- 3. Stufe: von jedem B-/¬B-Knoten zu C / ¬C,
       mit Start bei x=760 und Endpunkten im 80px-Abstand
       y = 60, 140, 220, 300, 380, 460, 540, 620
  -->

  <!-- von B ∩ A (710,100) -->
  <line x1="710" y1="100" x2="930" y2="60"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="710" y1="100" x2="930" y2="60"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <line x1="710" y1="100" x2="930" y2="140"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="710" y1="100" x2="930" y2="140"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <!-- von ¬B ∩ A (710,260) -->
  <line x1="710" y1="260" x2="930" y2="220"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="710" y1="260" x2="930" y2="220"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <line x1="710" y1="260" x2="930" y2="300"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="710" y1="260" x2="930" y2="300"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <!-- von B ∩ ¬A (710,420) -->
  <line x1="710" y1="420" x2="930" y2="380"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="710" y1="420" x2="930" y2="380"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <line x1="710" y1="420" x2="930" y2="460"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="710" y1="420" x2="930" y2="460"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <!-- von ¬B ∩ ¬A (710,580) -->
  <line x1="710" y1="580" x2="930" y2="540"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="710" y1="580" x2="930" y2="540"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <line x1="710" y1="580" x2="930" y2="620"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="710" y1="580" x2="930" y2="620"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />


  <!-- =======================
       Knoten-Beschriftungen
       ======================= -->

  <!-- Start -->
  <foreignObject x="35" y="345" width="120" height="50">
    <big><big><b>  Start </b></big> </big> 
  </foreignObject>

  <!-- 1. Stufe: P(A), P(¬A) am Knoten -->
  <foreignObject x="200" y="190" width="160" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(W) = \frac{15}{26}$
  </foreignObject>

  <foreignObject x="200" y="510" width="160" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(S) =  \frac{11}{26}$ 
  </foreignObject>

  <!-- 2. Stufe: Knoten-Beschriftungen (B-Bereiche) -->
  <foreignObject x="520" y="90" width="220" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(W \cap W) = \frac{15}{26} \cdot \frac{14}{25}$ 
  </foreignObject>

  <foreignObject x="520" y="250" width="220" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(S \cap W) = \frac{14}{26} \cdot \frac{11}{25}$ 
  </foreignObject>

  <foreignObject x="520" y="410" width="220" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(W \cap S) = \frac{11}{26} \cdot \frac{15}{25}$ 
  </foreignObject>

  <foreignObject x="520" y="570" width="220" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(S \cap S) = \frac{11}{26} \cdot \frac{10}{25}$ 
  </foreignObject>


  <!-- ===================================
       Pfad-Beschriftungen mit Eingabefeld
       passend zur Linienneigung
       =================================== -->

  <!-- 1. Stufe: P(A), Pfad-Mittelpunkt bei (220,280), Winkel ca. -38.7° -->
  <foreignObject x="120" y="210" width="130" height="80"
                 transform="rotate(-57 220 280)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(W) = \frac{15}{26}$ 
  </foreignObject>

  <!-- 1. Stufe: P(¬A), Pfad-Mittelpunkt bei (220,440), Winkel ca. +38.7° -->
  <foreignObject x="110" y="490" width="140" height="80"
                 transform="rotate(57 220 440)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(S) = \frac{11}{26}$ 
  </foreignObject>

  <!-- 2. Stufe links: P(B|A), Mittelpunkt (440,150), Winkel ca. -22.6° -->
  <foreignObject x="390" y="130" width="150" height="80"
                 transform="rotate(-30 440 150)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(W \mid W) = \frac{15}{26} \cdot \frac{14}{25}$ 
  </foreignObject>

  <!-- 2. Stufe links: P(¬B|A), Mittelpunkt (440,230), Winkel ca. +14.0° -->
  <foreignObject x="370" y="230" width="170" height="80"
                 transform="rotate(18 440 230)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(S \mid W) = \frac{15}{26} \cdot \frac{11}{25}$ 
  </foreignObject>

  <!-- 2. Stufe rechts: P(B|¬A), Mittelpunkt (440,470), Winkel ca. -22.6° -->
  <foreignObject x="390" y="450" width="170" height="80"
                 transform="rotate(-30 440 470)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(W \mid S) = \frac{11}{26} \cdot \frac{15}{25}$ 
  </foreignObject>

  <!-- 2. Stufe rechts: P(¬B|¬A), Mittelpunkt (440,550), Winkel ca. +14.0° -->
  <foreignObject x="365" y="550" width="190" height="80"
                 transform="rotate(18 440 550)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(S \mid S) = \frac{11}{26} \cdot \frac{10}{25}$ 
  </foreignObject>





  <!-- =======================
       3. Stufe: Linientexte (bedingte Wahrscheinlichkeiten)
       mit Neigung entlang der Pfade (±10.3°)
       ======================= -->

  <!-- B ∩ A -> C (760,100) -> (980,60), Mittelpunkt (870,80) -->
  <foreignObject x="720" y="45" width="220" height="80"
                 transform="rotate(-10.3 870 80)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(W \mid W \mid W) = \frac{15}{26} \cdot \frac{14}{25} \cdot \frac{13}{24}$
  </foreignObject>

  <!-- B ∩ A -> ¬C, Mittelpunkt (870,120) -->
  <foreignObject x="710" y="135" width="240" height="80"
                 transform="rotate(10.3 870 120)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(S \mid W \mid W) = \frac{15}{26} \cdot \frac{14}{25} \cdot \frac{11}{24}$ 
  </foreignObject>

  <!-- ¬B ∩ A -> C, Mittelpunkt (870,240) -->
  <foreignObject x="710" y="205" width="240" height="80"
                 transform="rotate(-10.3 870 240)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(W \mid S \mid W) = \frac{15}{26} \cdot \frac{11}{25} \cdot \frac{14}{24}$ 
  </foreignObject>

  <!-- ¬B ∩ A -> ¬C, Mittelpunkt (870,280) -->
  <foreignObject x="700" y="295" width="260" height="80"
                 transform="rotate(10.3 870 280)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(S \mid S \mid W) = \frac{15}{26} \cdot \frac{11}{25} \cdot \frac{10}{24}$ 
  </foreignObject>

  <!-- B ∩ ¬A -> C, Mittelpunkt (870,400) -->
  <foreignObject x="700" y="365" width="260" height="80"
                 transform="rotate(-10.3 870 400)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(W \mid W \mid S) = \frac{11}{26} \cdot \frac{15}{25} \cdot \frac{14}{24}$ 
  </foreignObject>

  <!-- B ∩ ¬A -> ¬C, Mittelpunkt (870,440) -->
  <foreignObject x="690" y="455" width="280" height="80"
                 transform="rotate(10.3 870 440)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(S \mid W \mid S) = \frac{11}{26} \cdot \frac{15}{25} \cdot \frac{10}{24}$ 
  </foreignObject>

  <!-- ¬B ∩ ¬A -> C, Mittelpunkt (870,560) -->
  <foreignObject x="690" y="525" width="280" height="80"
                 transform="rotate(-10.3 870 560)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(W \mid S \mid S) = \frac{11}{26} \cdot \frac{10}{25} \cdot \frac{15}{24}$ 
  </foreignObject>

  <!-- ¬B ∩ ¬A -> ¬C, Mittelpunkt (870,600) -->
  <foreignObject x="680" y="615" width="300" height="80"
                 transform="rotate(10.3 870 600)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(S \mid S \mid S) = \frac{11}{26} \cdot \frac{10}{25} \cdot \frac{9}{24}$ 
  </foreignObject>


  <!-- =======================
       Blattknoten 3. Stufe:
       gemeinsame Wahrscheinlichkeiten am Ende der Pfade
       (Endpunkte bei x=980 und y = 60,140,220,...,620, Abstand 80px)
       ======================= -->

  <!-- A ∩ B ∩ C   (Endpunkt bei (910,60)) -->
  <foreignObject x="910" y="50" width="220" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(W \cap W \cap W) = \frac{15}{26} \cdot \frac{14}{25} \cdot \frac{13}{24}$ 
  </foreignObject>

  <!-- A ∩ B ∩ ¬C (Endpunkt bei (910,140)) -->
  <foreignObject x="910" y="130" width="220" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(W \cap W \cap S) = \frac{11}{26} \cdot \frac{15}{25} \cdot \frac{4}{24}$ 
  </foreignObject>

  <!-- A ∩ ¬B ∩ C (Endpunkt bei (910,220)) -->
  <foreignObject x="910" y="210" width="220" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(W \cap S \cap W) = \frac{15}{26} \cdot \frac{11}{25} \cdot \frac{14}{24}$ 
  </foreignObject>

  <!-- A ∩ ¬B ∩ ¬C (Endpunkt bei (910,300)) -->
  <foreignObject x="910" y="290" width="220" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(W \cap S \cap S) = \frac{11}{26} \cdot \frac{10}{25} \cdot \frac{15}{24}$ 
  </foreignObject>

  <!-- ¬A ∩ B ∩ C (Endpunkt bei (910,380)) -->
  <foreignObject x="910" y="370" width="220" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(S \cap W \cap W) = \frac{15}{26} \cdot \frac{14}{25} \cdot \frac{11}{24}$ 
  </foreignObject>

  <!-- ¬A ∩ B ∩ ¬C (Endpunkt bei (910,460)) -->
  <foreignObject x="910" y="450" width="220" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(S \cap W \cap S) = \frac{11}{26} \cdot \frac{15}{25} \cdot \frac{10}{24}$ 
  </foreignObject>

  <!-- ¬A ∩ ¬B ∩ C (Endpunkt bei (910,540)) -->
  <foreignObject x="910" y="530" width="220" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(S \cap S \cap W) = \frac{15}{26} \cdot \frac{11}{25} \cdot \frac{10}{24}$ 
  </foreignObject>

  <!-- ¬A ∩ ¬B ∩ ¬C (Endpunkt bei (910,620)) -->
  <foreignObject x="910" y="610" width="220" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(S \cap S \cap S) = \frac{11}{26} \cdot \frac{10}{25} \cdot \frac{9}{24}$ 
  </foreignObject>

</svg>






*************




<section class="flex-container">

<div class="flex-child">


 __$b) \;\;$__ **Bestimme**, wie hoch die Wahrscheinlichkeit ist bei der ersten Ziehung eine weiße Kugel zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. 



[[  57,692  ]]$\%$.
@Algebrite.check2(1500/26,0.001)
*************
$$
\begin{align*}
   \frac{15}{26} & \approx 0,57692 = 57,692\%
\end{align*}
$$
*************



</div>
<div class="flex-child">



 __$c) \;\;$__ **Bestimme**, wie hoch die Wahrscheinlichkeit ist drei schwarze Kugeln hintereinander zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. 



[[   6,346  ]]$\%$.
@Algebrite.check2(3300/520,0.001)
*************
$$
\begin{align*}
   \frac{11}{26} \cdot \frac{10}{25} \cdot \frac{9}{24} \approx 6,346\%
\end{align*}
$$
*************




</div>
<div class="flex-child">



 __$d) \;\;$__ **Bestimme**, wie viele Pfade für die Möglichkeit existieren genau zwei weiße Kugeln zu ziehen.  



[[   3   ]] 
*************
WWS, WSW und SWW
*************




</div>
<div class="flex-child">



 __$e) \;\;$__ **Bestimme**, wie viele Pfade für die Möglichkeit existieren mindestens eine schwarze Kugel zu ziehen. 



[[   7   ]] 
*************
$$
  WWS, WSW, SWW, WSS, SWS, SSW und SSS
$$
*************




</div>
<div class="flex-child">



 __$f) \;\;$__ **Bestimme**, wie hoch die Wahrscheinlichkeit ist mindestens zwei schwarze Kugeln zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. 




[[  38,077  ]]$\%$.
@Algebrite.check2(9900/260,0.001)
*************
$$
\begin{align*}
  \frac{11}{26} \cdot \frac{10}{25} \cdot \frac{9}{24} + 3 \cdot \frac{15}{26} \cdot \frac{11}{25} \cdot \frac{10}{24} \approx 38,077\%
\end{align*}
$$
*************



</div>
<div class="flex-child">




 __$g) \;\;$__ **Bestimme**, wie hoch die Wahrscheinlichkeit ist mehr als eine weiße Kugel zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. 



[[  93,653  ]]$\%$.
@Algebrite.check2(48700/520,0.001)
*************
$$
\begin{align*}
1- \frac{11}{26} \cdot \frac{10}{25} \cdot \frac{9}{24} \approx 93,653 \%
\end{align*}
$$
*************




</div>
<div class="flex-child">



 __$h) \;\;$__ **Bestimme**, wie hoch die Wahrscheinlichkeit ist weniger als zwei weiße Kugeln zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. 



[[  38,077  ]]$\%$.
@Algebrite.check2(9900/260,0.001)
*************
$$
\begin{align*}
   \frac{11}{26} \cdot \frac{10}{25} \cdot \frac{9}{24} + 3 \cdot \frac{15}{26} \cdot \frac{11}{25} \cdot \frac{10}{24} \approx 38,077\%
\end{align*}
$$
*************




</div>
<div class="flex-child">



 __$i) \;\;$__ **Bestimme**, wie hoch die Wahrscheinlichkeit ist höchstens zwei schwarze Kugel zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. 



[[  93,653  ]]$\%$.
@Algebrite.check2(48700/520,0.001)
*************
$$
\begin{align*}
   1- \frac{11}{26} \cdot \frac{10}{25} \cdot \frac{9}{24}  \approx 93,653 \%
\end{align*}
$$
*************


</div>
</section>










