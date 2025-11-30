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

tags: Baumdiagramm, Binomialverteilung, leicht, niedrig, Bestimme, Skizziere

comment: Bestimme mithilfe eines Baumdiagramms die Wahrscheinlichkeiten für Ereignisse und Ergebnisse.

author: Martin Lommatzsch

-->




# Fragen zum Baumdiagramm

In einem Gefäß befinden sich 5 schwarze (S), 7 grüne (G) und 11 weiße (W) Kugeln für zwei Ziehungen mit Zurücklegen. 





 __$a) \;\;$__ **Skizziere** ein Baumdiagramm für den beschriebenen Fall. 



[[!]]
<script>true</script>
*************




<!-- data-group="true" data-show-partial-solution="true"
     data-text-solved="Richtig!" data-text-failed="Falsch!"
     data-text-resolved="Aufgelöst!" -->
<svg class="tree3" viewBox="70 0 850 700">

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
       3 Ausgänge: S, G, W
       und je 3 Folgezweige
       ======================= -->

  <!-- Startknoten: (120, 360) -->

  <!-- 1. Stufe: Start -> S (etwas höher gesetzt) -->
  <line x1="120" y1="360" x2="320" y2="150"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="120" y1="360" x2="320" y2="150"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <!-- 1. Stufe: Start -> G (Mitte) -->
  <line x1="120" y1="360" x2="320" y2="360"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="120" y1="360" x2="320" y2="360"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <!-- 1. Stufe: Start -> W (etwas tiefer gesetzt) -->
  <line x1="120" y1="360" x2="320" y2="570"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="120" y1="360" x2="320" y2="570"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />


  <!-- 2. Stufe: je 3 Ausgänge von S, G, W, mit größeren Abständen:
       S-Kinder: y =  60, 150, 240
       G-Kinder: y = 300, 360, 420
       W-Kinder: y = 480, 570, 660
  -->

  <!-- Von S (320,150) zu (650, 60), (650,150), (650,240) -->

  <!-- S -> S | S -->
  <line x1="435" y1="150" x2="650" y2="60"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="435" y1="150" x2="650" y2="60"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <!-- S -> G | S -->
  <line x1="435" y1="150" x2="650" y2="150"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="435" y1="150" x2="650" y2="150"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <!-- S -> W | S -->
  <line x1="435" y1="150" x2="650" y2="240"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="435" y1="150" x2="650" y2="240"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />


  <!-- Von G (320,360) zu (650,300), (650,360), (650,420) -->

  <!-- G -> S | G -->
  <line x1="435" y1="360" x2="650" y2="300"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="435" y1="360" x2="650" y2="300"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <!-- G -> G | G -->
  <line x1="435" y1="360" x2="650" y2="360"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="435" y1="360" x2="650" y2="360"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <!-- G -> W | G -->
  <line x1="435" y1="360" x2="650" y2="420"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="435" y1="360" x2="650" y2="420"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />


  <!-- Von W (320,570) zu (650,480), (650,570), (650,660) -->

  <!-- W -> S | W -->
  <line x1="435" y1="570" x2="650" y2="480"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="435" y1="570" x2="650" y2="480"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <!-- W -> G | W -->
  <line x1="435" y1="570" x2="650" y2="570"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="435" y1="570" x2="650" y2="570"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <!-- W -> W | W -->
  <line x1="435" y1="570" x2="650" y2="660"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="435" y1="570" x2="650" y2="660"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />


  <!-- =======================
       Knoten-Beschriftungen
       ======================= -->

  <!-- Start -->
  <foreignObject x="35" y="345" width="120" height="50">
    <big><big><b>Start</b></big></big>
  </foreignObject>

  <!-- 1. Stufe: P(S), P(G), P(W) am Knoten -->
  <foreignObject x="295" y="140" width="160" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(S) = \frac{5}{23} $ 
  </foreignObject>

  <foreignObject x="295" y="350" width="160" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(G) = \frac{7}{23} $ 
  </foreignObject>

  <foreignObject x="295" y="560" width="160" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(W) = \frac{11}{23} $ 
  </foreignObject>


  <!-- 2. Stufe: Knoten-Beschriftungen (S/G/W-Bereiche am Ende der Zweige) -->

  <!-- Aus S kommend: S,S / G,S / W,S -->
  <foreignObject x="630" y="50" width="200" height="60">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(S \cap S) = \frac{5}{23} \cdot \frac{5}{23}$ 
  </foreignObject>

  <foreignObject x="630" y="140" width="200" height="60">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(G \cap S) = \frac{5}{23} \cdot \frac{7}{23}$ 
  </foreignObject>

  <foreignObject x="630" y="230" width="200" height="60">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(W \cap S) = \frac{5}{23} \cdot \frac{11}{23}$ 
  </foreignObject>

  <!-- Aus G kommend: S,G / G,G / W,G -->
  <foreignObject x="630" y="290" width="200" height="60">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(S \cap G) = \frac{7}{23} \cdot \frac{5}{23}$ 
  </foreignObject>

  <foreignObject x="630" y="350" width="200" height="60">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(G \cap G) = \frac{7}{23} \cdot \frac{7}{23}$ 
  </foreignObject>

  <foreignObject x="630" y="410" width="200" height="60">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(W \cap G) = \frac{}{23} \cdot \frac{11}{23}$ 
  </foreignObject>

  <!-- Aus W kommend: S,W / G,W / W,W -->
  <foreignObject x="630" y="470" width="200" height="60">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(S \cap W) = \frac{11}{23} \cdot \frac{5}{23}$ 
  </foreignObject>

  <foreignObject x="630" y="560" width="200" height="60">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(G \cap W) = \frac{11}{23} \cdot \frac{7}{23}$ 
  </foreignObject>

  <foreignObject x="630" y="650" width="200" height="60">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(W \cap W) = \frac{11}{23} \cdot \frac{11}{23}$ 
  </foreignObject>


  <!-- ===================================
       Pfad-Beschriftungen mit Eingabefeld
       passend zur Linienneigung
       =================================== -->

  <!-- 1. Stufe: P(S), P(G), P(W) auf den Pfaden -->

  <!-- Start -> S, Mittelpunkt ca. (220,255), Winkel ~ -45° -->
  <foreignObject x="160" y="228" width="130" height="80"
                 transform="rotate(-50 220 255)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(S) = \frac{5}{23} $ 
  </foreignObject>

  <!-- Start -> G, Mittelpunkt (220,360), horizontal -->
  <foreignObject x="170" y="330" width="130" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(G) = \frac{7}{23} $ 
  </foreignObject>

  <!-- Start -> W, Mittelpunkt ca. (220,465), Winkel ~ +45° -->
  <foreignObject x="130" y="435" width="140" height="80"
                 transform="rotate(45 220 465)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(W) = \frac{11}{23} $ 
  </foreignObject>


  <!-- 2. Stufe: Pfad-Beschriftungen von S aus -->
  <!-- Mittelpunkte:
       S->S|S: (485,105), S->G|S: (485,150), S->W|S: (485,195)
  -->

  <foreignObject x="490" y="100" width="150" height="80"
                 transform="rotate(-25 485 105)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(S \mid S) = \frac{5}{23} \cdot \frac{5}{23}$ 
  </foreignObject>

  <foreignObject x="490" y="155" width="150" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(G \mid S) = \frac{5}{23} \cdot \frac{7}{23}$ 
  </foreignObject>

  <foreignObject x="490" y="175" width="150" height="80"
                 transform="rotate(25 485 195)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(W \mid S) = \frac{5}{23} \cdot \frac{11}{23}$ 
  </foreignObject>


  <!-- 2. Stufe: Pfad-Beschriftungen von G aus -->
  <!-- Mittelpunkte:
       G->S|G: (485,330), G->G|G: (485,360), G->W|G: (485,390)
  -->

  <foreignObject x="490" y="315" width="150" height="80"
                 transform="rotate(-15 485 330)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(S \mid G) = \frac{5}{23} \cdot \frac{7}{23}$ 
  </foreignObject>

  <foreignObject x="490" y="364" width="150" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(G \mid G) = \frac{7}{23} \cdot \frac{7}{23}$ 
  </foreignObject>

  <foreignObject x="490" y="380" width="150" height="80"
                 transform="rotate(15 485 390)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(W \mid G) = \frac{7}{23} \cdot \frac{11}{23}$ 
  </foreignObject>


  <!-- 2. Stufe: Pfad-Beschriftungen von W aus -->
  <!-- Mittelpunkte:
       W->S|W: (485,525), W->G|W: (485,570), W->W|W: (485,615)
  -->

  <foreignObject x="490" y="523" width="150" height="80"
                 transform="rotate(-25 485 525)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(S \mid W) = \frac{11}{23} \cdot \frac{5}{23}$ 
  </foreignObject>

  <foreignObject x="490" y="572" width="150" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(G \mid W) = \frac{11}{23} \cdot \frac{7}{23}$ 
  </foreignObject>

  <foreignObject x="490" y="592" width="150" height="80"
                 transform="rotate(25 485 615)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(W \mid W) = \frac{11}{23} \cdot \frac{11}{23}$ 
  </foreignObject>

</svg>




*************





<section class="flex-container">

<div class="flex-child">




 __$b) \;\;$__ **Bestimme**, wie hoch die Wahrscheinlichkeit ist bei der ersten Ziehung eine grüne Kugel zu ziehen. Gib die Wahrscheinlichkeit in Prozent an.



[[  30,435  ]]$\%$.
@Algebrite.check2(700/23,0.001)
*************
$$
\begin{align*}
   \frac{7}{23} & \approx 30,435\%
\end{align*}
$$
*************




</div>
<div class="flex-child">



 __$c) \;\;$__ **Bestimme**, wie hoch die Wahrscheinlichkeit ist erst eine schwarze dann eine weiße Kugel hintereinander zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. 



[[  10,397  ]]$\%$.
@Algebrite.check2(5500/529,0.001)
*************
$$
\begin{align*}
   \frac{5}{23} \cdot \frac{11}{23} \approx 10,397\%
\end{align*}
$$
*************




</div>
<div class="flex-child">




 __$d) \;\;$__ **Bestimme**, wie viele Pfade für die Möglichkeit existieren genau eine weiße und eine grüne Kugeln zu ziehen. 



[[   1   ]] 
@Algebrite.check(1)
*************
WW
*************




</div>
<div class="flex-child">




 __$e) \;\;$__ **Bestimme**, wie viele Pfade für die Möglichkeit existieren mindestens eine schwarze Kugel zu ziehen. 



[[   3   ]] 
@Algebrite.check(3)
*************
$$
  SS, SW, SG
$$
*************




</div>
<div class="flex-child">




 __$f) \;\;$__ **Bestimme**, wie viele Pfade für die Möglichkeit existieren von jeder Kugel eine zu ziehen, wenn drei mal gezogen würde. 




[[   6   ]] 
@Algebrite.check(6)
*************
$$
  SGW, SWG, WSG, GSW, GWS, WGS
$$
*************




</div>
<div class="flex-child">




 __$g) \;\;$__ **Bestimme**, wie hoch die Wahrscheinlichkeit ist jede Kugelfarbe bei drei Ziehungen mit Zurücklegen einmal zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. 



[[  18,986  ]]$\%$.
@Algebrite.check2(231000/12167,0.001)
*************
$$
\begin{align*}
6 \cdot \frac{5}{23} \cdot \frac{7}{23} \cdot \frac{11}{23} \approx 18,986 \%
\end{align*}
$$
*************




</div>
<div class="flex-child">




 __$h) \;\;$__ **Bestimme**, wie hoch die Wahrscheinlichkeit bei drei Ziehungen mit Zurücklegen ist, bei der erst eine schwarze, dann eine grüne und abschließend eine weiße Kugel zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. 



[[   3,164  ]]$\%$.
@Algebrite.check2(38500/12167,0.001)
*************
$$
\begin{align*}
   \frac{5}{23} \cdot \frac{7}{23} \cdot \frac{11}{23} \approx 3,164\%
\end{align*}
$$
*************




</div>
<div class="flex-child">




 __$i) \;\;$__ **Bestimme**, wie hoch die Wahrscheinlichkeit bei drei Ziehungen mit Zurücklegen ist höchstens zwei schwarze Kugel zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. 



[[  86,241  ]]$\%$.
@Algebrite.check2(1049300/12167,0.001)
*************
$$
\begin{align*}
  1 -  \left(\frac{7}{23}\right)^3 -  \left(\frac{11}{23}\right)^3 \approx 86,241 \%
\end{align*}
$$
*************



</div>
</section>







