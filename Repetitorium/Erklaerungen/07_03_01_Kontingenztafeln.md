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


tags: Erklärung, Kontingenztafeln, bedingte Wahrscheinlichkeit, Vierfeldertafeln

comment: In diesem Abschnitt werden Vierfeldertafeln (Kontingenztafeln) und bedingte Wahrscheinlichkeit ausführlich erklärt.

author: Martin Lommatzsch





-->






# Kontingenztafeln, Vierfeldertafeln und bedingte Wahrscheinlichkeit




{{|>}}
***************************







Das *Baumdiagramm* wird nicht selten als *Kontingenztafel* dargestellt,


<center>
<svg class="tree2" viewBox="-50 0 450 300">

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
  <foreignObject x="76" y="122" width="48" height="40">
    $P(A)$
  </foreignObject>

  <foreignObject x="276" y="122" width="48" height="40">
    $P(\bar{A})$
  </foreignObject>

  <!-- Blattknoten: P(B ∩ A), … -->
  <foreignObject x="12" y="265" width="56" height="40">
    $P(B \cap A)$
  </foreignObject>

  <foreignObject x="132" y="265" width="56" height="40">
    $P(\bar{B} \cap A)$
  </foreignObject>

  <foreignObject x="212" y="265" width="56" height="40">
    $P(B \cap \bar{A})$
  </foreignObject>

  <foreignObject x="332" y="265" width="56" height="40">
    $P(\bar{B} \cap \bar{A})$    
  </foreignObject>


  <!-- ===================================
       Pfad-Beschriftungen mit Eingabefeld
       (Boxen um den Pfad-Mittelpunkt zentriert)
       =================================== -->

  <!-- 1. Stufe: P(A), Pfad-Mittelpunkt (150,80) -->
  <foreignObject x="90" y="60" width="120" height="60"
                 transform="rotate(-40 150 80)">
                 
    $P(A) $ 
  </foreignObject>

  <!-- 1. Stufe: P(¬A), Pfad-Mittelpunkt (250,80) -->
  <foreignObject x="190" y="60" width="120" height="60"
                 transform="rotate(40 250 80)">
                 
    $P(\bar{A}) $
  </foreignObject>


  <!-- 2. Stufe links: P(B|A), Pfad-Mittelpunkt (70,200) -->
  <foreignObject x="10" y="170" width="120" height="60"
                 transform="rotate(-64 79 195)">
                 
    $P(B \mid A) $ 
  </foreignObject>

  <!-- 2. Stufe links: P(¬B|A), Pfad-Mittelpunkt (130,200) -->
  <foreignObject x="70" y="170" width="120" height="60"
                 transform="rotate(64 121 195)">
                 
    $P(\bar{B} \mid A) $ 
  </foreignObject>


  <!-- 2. Stufe rechts: P(B|¬A), Pfad-Mittelpunkt (270,200) -->
  <foreignObject x="210" y="170" width="120" height="60"
                 transform="rotate(-64 279 195)">
                 
    $P(B \mid \bar{A}) $ 
  </foreignObject>

  <!-- 2. Stufe rechts: P(¬B|¬A), Pfad-Mittelpunkt (330,200) -->
  <foreignObject x="270" y="170" width="120" height="60"
                 transform="rotate(64 321 195)">
                 
    $P(\bar{B} \mid \bar{A}) $ 
  </foreignObject>

</svg>
</center>


{{|>}} welche für die oben gewählte Form *Vierfeldertafel* genannt wird. Dabei werden die *Wahrscheinlichkeiten* eingetragen, um somit aussagen über die Korrelation der beiden Behauptungen machen zu können. 


<center>
<!-- style="width:55%" -->
| | | | |
| | $A$   |  $\bar{A}$   | |
| $B$ | $P(A \cap B)$   |  $P(\bar{A} \cap B)$  | $P(B)$ |
| $\bar{B}$ | $P(A \cap \bar{B})$ | $P(\bar{A} \cap \bar{B})$ | $P(\bar{B})$ |
|  | $P(A)$ |  $P(\bar{A})$ | $1$ |
</center>


{{|>}} Deutlich zu erkennen ist, dass sich die *Summe* der Behauptungsereigniswahrscheinlichkeiten zu $1$ ergeben müssen. Folglich reichen Teile an Informationen aus, um die restlichen Felder auszufüllen.

{{|>}} Zu dieser *Kontingenztafel* und dem vorherigen Baumdiagramm kann auch ein *Gegenbaum* erstellt werden, sodass anhand der Zweigwahrscheinlichkeiten deutlich wird, dass bei einer *bedingten* *Wahrscheinlichkeit* andere *Werte* angebracht werden müssen. Hierbei wurde das Baumdiagramm in der Orientierung der *Kontingenztafel* angepasst:



<center>

<!-- data-group="true" data-show-partial-solution="true"
     data-text-solved="Richtig!" data-text-failed="Falsch!"
     data-text-resolved="Aufgelöst!" -->
<svg class="tree3" viewBox="0 175 620 375">

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
  <line x1="120" y1="360" x2="220" y2="260"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="120" y1="360" x2="220" y2="260"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <!-- 1. Stufe: Start -> ¬A -->
  <line x1="120" y1="360" x2="220" y2="460"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="120" y1="360" x2="220" y2="460"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <!-- 2. Stufe links (A-Bereich): Pfeile starten hinter dem Knoten A -->
  <!-- A -> B|A -->
  <line x1="275" y1="260" x2="400" y2="200"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="275" y1="260" x2="400" y2="200"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <!-- A -> ¬B|A -->
  <line x1="275" y1="260" x2="400" y2="320"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="275" y1="260" x2="400" y2="320"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <!-- 2. Stufe rechts (¬A-Bereich): Pfeile starten hinter dem Knoten ¬A -->
  <!-- ¬A -> B|¬A -->
  <line x1="275" y1="460" x2="400" y2="400"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="275" y1="460" x2="400" y2="400"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <!-- ¬A -> ¬B|¬A -->
  <line x1="275" y1="460" x2="400" y2="520"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="275" y1="460" x2="400" y2="520"
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
  <foreignObject x="200" y="250" width="90" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(A) $ 
  </foreignObject>

  <foreignObject x="200" y="450" width="90" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(\bar{A}) $
  </foreignObject>

  <!-- 2. Stufe: Knoten-Beschriftungen (B-Bereiche) -->
  <foreignObject x="335" y="190" width="220" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(B \cap A) $ 
  </foreignObject>

  <foreignObject x="335" y="310" width="220" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(\bar{B} \cap A) $ 
  </foreignObject>

  <foreignObject x="335" y="390" width="220" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(B \cap \bar{A}) $
  </foreignObject>

  <foreignObject x="335" y="510" width="220" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(\bar{B} \cap \bar{A}) $ 
  </foreignObject>


  <!-- ===================================
       Pfad-Beschriftungen mit Eingabefeld
       passend zur Linienneigung
       =================================== -->

  <!-- 1. Stufe: P(A), Pfad-Mittelpunkt bei (220,280), Winkel ca. -38.7° -->
  <foreignObject x="120" y="210" width="130" height="80"
                 transform="rotate(-57 220 280)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(A) $ 
  </foreignObject>

  <!-- 1. Stufe: P(¬A), Pfad-Mittelpunkt bei (220,440), Winkel ca. +38.7° -->
  <foreignObject x="110" y="490" width="140" height="80"
                 transform="rotate(57 220 440)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(\bar{A}) $ 
  </foreignObject>

  <!-- 2. Stufe links: P(B|A), Mittelpunkt (440,150), Winkel ca. -22.6° -->
  <foreignObject x="250" y="155" width="150" height="80"
                 transform="rotate(-25 440 150)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(B \mid A) $ 
  </foreignObject>

  <!-- 2. Stufe links: P(¬B|A), Mittelpunkt (440,230), Winkel ca. +14.0° -->
  <foreignObject x="290" y="333" width="170" height="80"
                 transform="rotate(25 440 230)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(\bar{B} \mid A) $ 
  </foreignObject>

  <!-- 2. Stufe rechts: P(B|¬A), Mittelpunkt (440,470), Winkel ca. -22.6° -->
  <foreignObject x="295" y="365" width="170" height="80"
                 transform="rotate(-25 440 470)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(B \mid \bar{A}) $ 
  </foreignObject>

  <!-- 2. Stufe rechts: P(¬B|¬A), Mittelpunkt (440,550), Winkel ca. +14.0° -->
  <foreignObject x="240" y="545" width="190" height="80"
                 transform="rotate(25 440 550)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(\bar{B} \mid \bar{A}) $ 
  </foreignObject>



</svg>


</center>



{{|>}} *Kontingenztafeln* können in beliebiger Zeilen- und Spaltennummer auftreten, sodass mit ihrer Hilfe viele stochastisch verknüpfte Aussagen überprüfen lassen. Im folgenden noch ein Beispiel für eine $3\times3$-*Kontingenztafel* mit entsprechenden *Baumdiagramm*.


<center>
<!-- style="width:75%"  -->
| | | | |
| | $A_1$ | $A_2$ | $A_3$ | |
| $B_1$ | $P(A_1 \cap B_1)$ | $P(A_2 \cap B_1)$ | $P(A_3 \cap B_1)$ | $P(B_1)$ |
| $B_2$ | $P(A_1 \cap B_2)$ | $P(A_2 \cap B_2)$ | $P(A_3 \cap B_2)$ | $P(B_2)$ |
| $B_3$ | $P(A_1 \cap B_3)$ | $P(A_2 \cap B_3)$ | $P(A_3 \cap B_3)$ | $P(B_3)$ |
| | $P(A_1)$ | $P(A_2)$ | $P(A_3)$ | $1$ |

</center>


<center>
<!-- data-group="true" data-show-partial-solution="true"
     data-text-solved="Richtig!" data-text-failed="Falsch!"
     data-text-resolved="Aufgelöst!" -->
<svg class="tree3" viewBox="30 150 690 425">

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
  <line x1="120" y1="360" x2="320" y2="220"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="120" y1="360" x2="320" y2="220"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <!-- 1. Stufe: Start -> G (Mitte) -->
  <line x1="120" y1="360" x2="320" y2="360"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="120" y1="360" x2="320" y2="360"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <!-- 1. Stufe: Start -> W (etwas tiefer gesetzt) -->
  <line x1="120" y1="360" x2="320" y2="500"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="120" y1="360" x2="320" y2="500"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />


  <!-- 2. Stufe: je 3 Ausgänge von S, G, W, mit größeren Abständen:
       S-Kinder: y =  60, 150, 240
       G-Kinder: y = 300, 360, 420
       W-Kinder: y = 480, 570, 660
  -->

  <!-- Von S (320,150) zu (650, 60), (650,150), (650,240) -->

  <!-- S -> S | S -->
  <line x1="375" y1="220" x2="590" y2="180"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="375" y1="220" x2="590" y2="180"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <!-- S -> G | S -->
  <line x1="375" y1="220" x2="590" y2="220"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="375" y1="220" x2="590" y2="220"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <!-- S -> W | S -->
  <line x1="375" y1="220" x2="590" y2="260"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="375" y1="220" x2="590" y2="260"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />


  <!-- Von G (320,360) zu (650,300), (650,360), (650,420) -->

  <!-- G -> S | G -->
  <line x1="375" y1="360" x2="590" y2="320"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="375" y1="360" x2="590" y2="320"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <!-- G -> G | G -->
  <line x1="375" y1="360" x2="590" y2="360"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="375" y1="360" x2="590" y2="360"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <!-- G -> W | G -->
  <line x1="375" y1="360" x2="590" y2="400"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="375" y1="360" x2="590" y2="400"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />


  <!-- Von W (320,570) zu (650,480), (650,570), (650,660) -->

  <!-- W -> S | W -->
  <line x1="375" y1="500" x2="590" y2="460"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="375" y1="500" x2="590" y2="460"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <!-- W -> G | W -->
  <line x1="375" y1="500" x2="590" y2="500"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="375" y1="500" x2="590" y2="500"
        stroke="white" stroke-width="2.25" stroke-linecap="butt"
        marker-end="url(#arrow-white)" />

  <!-- W -> W | W -->
  <line x1="375" y1="500" x2="590" y2="540"
        stroke="black" stroke-width="3.5" stroke-linecap="butt" />
  <line x1="375" y1="500" x2="590" y2="540"
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
  <foreignObject x="265" y="210" width="160" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(B_1) $ 
  </foreignObject>

  <foreignObject x="265" y="350" width="160" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(B_2)  $ 
  </foreignObject>

  <foreignObject x="265" y="490" width="160" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(B_3)  $ 
  </foreignObject>




  <!-- 2. Stufe: Knoten-Beschriftungen (S/G/W-Bereiche am Ende der Zweige) -->

  <!-- Aus S kommend: S,S / G,S / W,S -->
  <foreignObject x="540" y="170" width="200" height="60">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(A_1 \cap B_1) $ 
  </foreignObject>

  <foreignObject x="540" y="210" width="200" height="60">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(A_2 \cap B_1) $ 
  </foreignObject>

  <foreignObject x="540" y="250" width="200" height="60">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(A_3 \cap B_1) $ 
  </foreignObject>

  <!-- Aus G kommend: S,G / G,G / W,G -->
  <foreignObject x="540" y="310" width="200" height="60">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(A_1 \cap B_2) $ 
  </foreignObject>

  <foreignObject x="540" y="350" width="200" height="60">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(A_2 \cap B_2) $ 
  </foreignObject>

  <foreignObject x="540" y="390" width="200" height="60">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(A_3 \cap B_2) $ 
  </foreignObject>

  <!-- Aus W kommend: S,W / G,W / W,W -->
  <foreignObject x="540" y="450" width="200" height="60">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(A_1 \cap B_3) $ 
  </foreignObject>

  <foreignObject x="540" y="490" width="200" height="60">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(A_2 \cap B_3) $ 
  </foreignObject>

  <foreignObject x="540" y="530" width="200" height="60">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(A_3 \cap B_3) $ 
  </foreignObject>


  <!-- ===================================
       Pfad-Beschriftungen mit Eingabefeld
       passend zur Linienneigung
       =================================== -->

  <!-- 1. Stufe: P(S), P(G), P(W) auf den Pfaden -->

  <!-- Start -> S, Mittelpunkt ca. (220,255), Winkel ~ -45° -->
  <foreignObject x="160" y="260" width="130" height="80"
                 transform="rotate(-40 220 255)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(B_1)  $ 
  </foreignObject>

  <!-- Start -> G, Mittelpunkt (220,360), horizontal -->
  <foreignObject x="170" y="330" width="130" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(B_2)  $ 
  </foreignObject>

  <!-- Start -> W, Mittelpunkt ca. (220,465), Winkel ~ +45° -->
  <foreignObject x="130" y="410" width="140" height="80"
                 transform="rotate(35 220 465)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(B_3)  $ 
  </foreignObject>


  <!-- 2. Stufe: Pfad-Beschriftungen von S aus -->
  <!-- Mittelpunkte:
       S->S|S: (485,105), S->G|S: (485,150), S->W|S: (485,195)
  -->

  <foreignObject x="400" y="200" width="150" height="80"
                 transform="rotate(-15 400 200)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(A_1 \mid B_1) $ 
  </foreignObject>

  <foreignObject x="450" y="225" width="150" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(A_2 \mid B_1) $ 
  </foreignObject>

  <foreignObject x="400" y="230" width="150" height="80"
                 transform="rotate(10 400 225)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(A_3 \mid B_1) $ 
  </foreignObject>


  <!-- 2. Stufe: Pfad-Beschriftungen von G aus -->
  <!-- Mittelpunkte:
       G->S|G: (485,330), G->G|G: (485,360), G->W|G: (485,390)
  -->

  <foreignObject x="400" y="315" width="150" height="80"
                 transform="rotate(-15 485 330)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(A_1 \mid B_2) $ 
  </foreignObject>

  <foreignObject x="450" y="364" width="150" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(A_2 \mid B_2) $ 
  </foreignObject>

  <foreignObject x="400" y="385" width="150" height="80"
                 transform="rotate(15 485 390)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(A_3 \mid B_2) $ 
  </foreignObject>


  <!-- 2. Stufe: Pfad-Beschriftungen von W aus -->
  <!-- Mittelpunkte:
       W->S|W: (485,525), W->G|W: (485,570), W->W|W: (485,615)
  -->

  <foreignObject x="400" y="480" width="150" height="80"
                 transform="rotate(-15 400 480)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(A_1 \mid B_3) $ 
  </foreignObject>

  <foreignObject x="450" y="500" width="150" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(A_2 \mid B_3) $ 
  </foreignObject>

  <foreignObject x="400" y="510" width="150" height="80"
                 transform="rotate(10 400 492)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(A_3 \mid B_3) $ 
  </foreignObject>

</svg>

</center>


{{|>}} Kommen mehr Behauptungsstufen hinzu kann *iterativ* vorgegangen werden:


<center>
|  |  |  |  |  |  | 
| | $A \cap B$ | $\bar{A} \cap B$ | $A \cap \bar{B}$ | $\bar{A} \cap \bar{B}$ |  | 
| $C$ | $P(A \cap B \cap C)$ | $P(\bar{A} \cap B \cap C)$ | $P( A \cap \bar{B} \cap C)$ | $P(\bar{A} \cap \bar{B} \cap C)$ | $P(C)$ | 
| $\bar{C}$ | $P(A \cap B \cap \bar{C})$ | $P(\bar{A}  \cap B \cap \bar{C})$ | $P(A \cap \bar{B} \cap \bar{C})$ | $P(\bar{A}  \cap \bar{B}  \cap \bar{C})$ | $P(\bar{C})$ | 
|  |  $P(A \cap B)$ | $P(\bar{A} \cap B)$ | $P(A \cap \bar{B})$ | $P(\bar{A} \cap \bar{B})$ | $1$ |

</center>



{{|>}} wobei sich die Spaltenanzahl nach den verschiedenen vorhergegangenden Optionen ergibt und die Zeilenanzahl oder die *Anzahl* der jetzigen Varianten. In diesem Beispiel wurden jeweils *Ereignis* und *Gegenereignis* als Option gewählt. \



{{|>}} Innerhalb der *Kontingenztafeln* gelten je nach Art der *Wahrscheinlichkeit* unterschiedlich Rechenregeln:





{{|>}} • Für die *unbedingte Wahrscheinlichkeit* gilt:


<center>
 |  |  |  |  | 
| | $A$ | $\bar{A}$  |  | 
| $B$  | $P(A \cap B) = \\ P(B) \cdot P(A)$  |   $P(\bar{A} \cap B) = \\ P(B) \cdot P(\bar{A})$  | $P(B)= \\P(A \cap B)+P(\bar{A} \cap B)$ | 
| $\bar{B}$ |  $P(A \cap \bar{B}) =  \\P(A) \cdot P(\bar{B})$  |  $P(\bar{A} \cap \bar{B}) =  \\P(\bar{B}) \cdot P(\bar{A})$  | $P(\bar{B})= \\P(A \cap \bar{B})+P(\bar{A} \cap \bar{B})$ | 
|  | $P(A)= \\P(A \cap B)+P(A \cap \bar{B})$   |   $P(\bar{A})= \\P(\bar{A} \cap B)+P(\bar{A} \cap \bar{B})$  | 	$1=P(A)+P(\bar{A}) \\=P(B)+P(\bar{B})$	 | 

</center>


{{|>}} • Für die *bedingte Wahrscheinlichkeit* gilt:



<center>
 |  |  |  |  | 
|  |  $A$  |   $\bar{A}$  | 	 | 
| $B$		 |  $P(A \cap B) =  \\ P_A(B) \cdot P(A) = \\ P(B \mid A) \cdot P(A)$   |   $P(\bar{A} \cap B) = \\ P_{\bar{A}}(B) \cdot P(\bar{A}) = \\ P(B \mid \bar{A}) \cdot P(\bar{A})$   | 	$P(B)= \\P(A \cap B)+P(\bar{A} \cap B)$ | 
| $\bar{B}$		 |  $P(A \cap \bar{B}) = \\ P_A(\bar{B}) \cdot P(A) = \\ P(\bar{B} \mid A) \cdot P(A)$  |  $P(\bar{A} \cap \bar{B}) = \\ P_{\bar{A}}(\bar{B}) \cdot P(\bar{A})= \\ P(\bar{B} \mid \bar{A}) \cdot P(\bar{A})$   | 	$P(\bar{B})=  \\P(A \cap \bar{B})+P(\bar{A} \cap \bar{B})$	 | 
|  |  $P(A)= \\P(A \cap B)+P(A \cap \bar{B})$   |   $P(\bar{A})= \\ P(\bar{A} \cap B)+P(\bar{A} \cap \bar{B})$   | 		$1=P(A)+P(\bar{A}) \\ =P(B)+P(\bar{B})$	 | 

</center>


{{|>}} wobei die *Pfadregeln*  $P\left( A \left| B \right. \right) \cdot P(B) =  P\left( B  \cap  A   \right) $  ausgenutzt werden könnten. \




{{|>}} Wenn kein *Bernoulli-Experiment* vorliegt, ist die Verwendung von *Kontingenztafeln* nicht möglich.





***************************


