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


-->

# Baumdiagramm 

**Aufgabe 1:** Fülle alle Felder des Baumdiagramms aus.


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
    $P(A) =$ [[ 0.5456 ]]
  </foreignObject>

  <foreignObject x="200" y="510" width="160" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(\bar{A}) =$ [[ 0.5456 ]]
  </foreignObject>

  <!-- 2. Stufe: Knoten-Beschriftungen (B-Bereiche) -->
  <foreignObject x="520" y="90" width="220" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(B \cap A) =$ [[ 0.1111 ]]
  </foreignObject>

  <foreignObject x="520" y="250" width="220" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(\bar{B} \cap A) =$ [[ 0.1111 ]]
  </foreignObject>

  <foreignObject x="520" y="410" width="220" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(B \cap \bar{A}) =$ [[ 0.1111 ]]
  </foreignObject>

  <foreignObject x="520" y="570" width="220" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(\bar{B} \cap \bar{A}) =$ [[ 0.1111 ]]
  </foreignObject>


  <!-- ===================================
       Pfad-Beschriftungen mit Eingabefeld
       passend zur Linienneigung
       =================================== -->

  <!-- 1. Stufe: P(A), Pfad-Mittelpunkt bei (220,280), Winkel ca. -38.7° -->
  <foreignObject x="120" y="210" width="130" height="80"
                 transform="rotate(-57 220 280)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(A) =$ [[ 0.6555 ]]
  </foreignObject>

  <!-- 1. Stufe: P(¬A), Pfad-Mittelpunkt bei (220,440), Winkel ca. +38.7° -->
  <foreignObject x="110" y="490" width="140" height="80"
                 transform="rotate(57 220 440)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(\bar{A}) =$ [[ 0.6555 ]]
  </foreignObject>

  <!-- 2. Stufe links: P(B|A), Mittelpunkt (440,150), Winkel ca. -22.6° -->
  <foreignObject x="390" y="130" width="150" height="80"
                 transform="rotate(-30 440 150)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(B \mid A) =$ [[ 0.6555 ]]
  </foreignObject>

  <!-- 2. Stufe links: P(¬B|A), Mittelpunkt (440,230), Winkel ca. +14.0° -->
  <foreignObject x="370" y="230" width="170" height="80"
                 transform="rotate(18 440 230)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(\bar{B} \mid A) =$ [[ 0.6555 ]]
  </foreignObject>

  <!-- 2. Stufe rechts: P(B|¬A), Mittelpunkt (440,470), Winkel ca. -22.6° -->
  <foreignObject x="390" y="450" width="170" height="80"
                 transform="rotate(-30 440 470)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(B \mid \bar{A}) =$ [[ 0.6555 ]]
  </foreignObject>

  <!-- 2. Stufe rechts: P(¬B|¬A), Mittelpunkt (440,550), Winkel ca. +14.0° -->
  <foreignObject x="365" y="550" width="190" height="80"
                 transform="rotate(18 440 550)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(\bar{B} \mid \bar{A}) =$ [[ 0.6555 ]]
  </foreignObject>





  <!-- =======================
       3. Stufe: Linientexte (bedingte Wahrscheinlichkeiten)
       mit Neigung entlang der Pfade (±10.3°)
       ======================= -->

  <!-- B ∩ A -> C (760,100) -> (980,60), Mittelpunkt (870,80) -->
  <foreignObject x="720" y="45" width="220" height="80"
                 transform="rotate(-10.3 870 80)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(C \mid B \mid A) =$ [[ 0.1111 ]]
  </foreignObject>

  <!-- B ∩ A -> ¬C, Mittelpunkt (870,120) -->
  <foreignObject x="710" y="135" width="240" height="80"
                 transform="rotate(10.3 870 120)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(\bar{C} \mid B \mid A) =$ [[ 0.1111 ]]
  </foreignObject>

  <!-- ¬B ∩ A -> C, Mittelpunkt (870,240) -->
  <foreignObject x="710" y="205" width="240" height="80"
                 transform="rotate(-10.3 870 240)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(C \mid \bar{B} \mid A) =$ [[ 0.1111 ]]
  </foreignObject>

  <!-- ¬B ∩ A -> ¬C, Mittelpunkt (870,280) -->
  <foreignObject x="700" y="295" width="260" height="80"
                 transform="rotate(10.3 870 280)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(\bar{C} \mid \bar{B} \mid A) =$ [[ 0.1111 ]]
  </foreignObject>

  <!-- B ∩ ¬A -> C, Mittelpunkt (870,400) -->
  <foreignObject x="700" y="365" width="260" height="80"
                 transform="rotate(-10.3 870 400)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(C \mid B \mid \bar{A}) =$ [[ 0.1111 ]]
  </foreignObject>

  <!-- B ∩ ¬A -> ¬C, Mittelpunkt (870,440) -->
  <foreignObject x="690" y="455" width="280" height="80"
                 transform="rotate(10.3 870 440)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(\bar{C} \mid B \mid \bar{A}) =$ [[ 0.1111 ]]
  </foreignObject>

  <!-- ¬B ∩ ¬A -> C, Mittelpunkt (870,560) -->
  <foreignObject x="690" y="525" width="280" height="80"
                 transform="rotate(-10.3 870 560)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(C \mid \bar{B} \mid \bar{A}) =$ [[ 0.1111 ]]
  </foreignObject>

  <!-- ¬B ∩ ¬A -> ¬C, Mittelpunkt (870,600) -->
  <foreignObject x="680" y="615" width="300" height="80"
                 transform="rotate(10.3 870 600)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(\bar{C} \mid \bar{B} \mid \bar{A}) =$ [[ 0.1111 ]]
  </foreignObject>


  <!-- =======================
       Blattknoten 3. Stufe:
       gemeinsame Wahrscheinlichkeiten am Ende der Pfade
       (Endpunkte bei x=980 und y = 60,140,220,...,620, Abstand 80px)
       ======================= -->

  <!-- A ∩ B ∩ C   (Endpunkt bei (910,60)) -->
  <foreignObject x="910" y="50" width="220" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(A \cap B \cap C) =$ [[ 0.3828 ]]
  </foreignObject>

  <!-- A ∩ B ∩ ¬C (Endpunkt bei (910,140)) -->
  <foreignObject x="910" y="130" width="220" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(A \cap B \cap \bar{C}) =$ [[ 0.1111 ]]
  </foreignObject>

  <!-- A ∩ ¬B ∩ C (Endpunkt bei (910,220)) -->
  <foreignObject x="910" y="210" width="220" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(A \cap \bar{B} \cap C) =$ [[ 0.1111 ]]
  </foreignObject>

  <!-- A ∩ ¬B ∩ ¬C (Endpunkt bei (910,300)) -->
  <foreignObject x="910" y="290" width="220" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(A \cap \bar{B} \cap \bar{C}) =$ [[ 0.1111 ]]
  </foreignObject>

  <!-- ¬A ∩ B ∩ C (Endpunkt bei (910,380)) -->
  <foreignObject x="910" y="370" width="220" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(\bar{A} \cap B \cap C) =$ [[ 0.1111 ]]
  </foreignObject>

  <!-- ¬A ∩ B ∩ ¬C (Endpunkt bei (910,460)) -->
  <foreignObject x="910" y="450" width="220" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(\bar{A} \cap B \cap \bar{C}) =$ [[ 0.1111 ]]
  </foreignObject>

  <!-- ¬A ∩ ¬B ∩ C (Endpunkt bei (910,540)) -->
  <foreignObject x="910" y="530" width="220" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(\bar{A} \cap \bar{B} \cap C) =$ [[ 0.1111 ]]
  </foreignObject>

  <!-- ¬A ∩ ¬B ∩ ¬C (Endpunkt bei (910,620)) -->
  <foreignObject x="910" y="610" width="220" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(\bar{A} \cap \bar{B} \cap \bar{C}) =$ [[ 0.1111 ]]
  </foreignObject>

</svg>











# Baumdiagramm 2stufig


<!-- data-group="true" data-show-partial-solution="true"  data-text-solved="Richtig!"  data-text-failed="Falsch!"  data-text-resolved="Aufgelöst!" -->
<svg class="tree2" viewBox="0 0 480 300">

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
    <!-- data-text-solved="Richtig!"  data-text-failed="Falsch!"  data-text-resolved="Aufgelöst!"  -->
    $P(A) =$ [[ 0.3333 ]]
  </foreignObject>

  <!-- 1. Stufe: P(¬A), Pfad-Mittelpunkt (250,80) -->
  <foreignObject x="190" y="60" width="120" height="60"
                 transform="rotate(40 250 80)">
    <!-- data-text-solved="Richtig!"  data-text-failed="Falsch!"  data-text-resolved="Aufgelöst!"  -->
    $P(\bar{A}) =$ [[ 0.3333 ]]
  </foreignObject>


  <!-- 2. Stufe links: P(B|A), Pfad-Mittelpunkt (70,200) -->
  <foreignObject x="10" y="170" width="120" height="60"
                 transform="rotate(-64 79 195)">
    <!-- data-text-solved="Richtig!"  data-text-failed="Falsch!"  data-text-resolved="Aufgelöst!"  -->
    $P(B \mid A) =$ [[ 0.3333 ]]
  </foreignObject>

  <!-- 2. Stufe links: P(¬B|A), Pfad-Mittelpunkt (130,200) -->
  <foreignObject x="70" y="170" width="120" height="60"
                 transform="rotate(64 121 195)">
    <!-- data-text-solved="Richtig!"  data-text-failed="Falsch!"  data-text-resolved="Aufgelöst!"  -->
    $P(\bar{B} \mid A) =$ [[ 0.3333 ]]
  </foreignObject>


  <!-- 2. Stufe rechts: P(B|¬A), Pfad-Mittelpunkt (270,200) -->
  <foreignObject x="210" y="170" width="120" height="60"
                 transform="rotate(-64 279 195)">
    <!-- data-text-solved="Richtig!"  data-text-failed="Falsch!"  data-text-resolved="Aufgelöst!"  -->
    $P(B \mid \bar{A}) =$ [[ 0.3333 ]]
  </foreignObject>

  <!-- 2. Stufe rechts: P(¬B|¬A), Pfad-Mittelpunkt (330,200) -->
  <foreignObject x="270" y="170" width="120" height="60"
                 transform="rotate(64 321 195)">
    <!-- data-text-solved="Richtig!"  data-text-failed="Falsch!"  data-text-resolved="Aufgelöst!"  -->
    $P(\bar{B} \mid \bar{A}) =$ [[ 0.3333 ]]
  </foreignObject>

</svg>













# Baumdiagramm 3er 2stufig







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
    $P(S) =$ [[  0  ]]
  </foreignObject>

  <foreignObject x="295" y="350" width="160" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(G) =$ [[  0  ]]
  </foreignObject>

  <foreignObject x="295" y="560" width="160" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(W) =$ [[  0  ]]
  </foreignObject>


  <!-- 2. Stufe: Knoten-Beschriftungen (S/G/W-Bereiche am Ende der Zweige) -->

  <!-- Aus S kommend: S,S / G,S / W,S -->
  <foreignObject x="630" y="50" width="200" height="60">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(S \cap S) =$ [[  0  ]]
  </foreignObject>

  <foreignObject x="630" y="140" width="200" height="60">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(G \cap S) =$ [[  0  ]]
  </foreignObject>

  <foreignObject x="630" y="230" width="200" height="60">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(W \cap S) =$ [[  0  ]]
  </foreignObject>

  <!-- Aus G kommend: S,G / G,G / W,G -->
  <foreignObject x="630" y="290" width="200" height="60">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(S \cap G) =$ [[  0  ]]
  </foreignObject>

  <foreignObject x="630" y="350" width="200" height="60">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(G \cap G) =$ [[  0  ]]
  </foreignObject>

  <foreignObject x="630" y="410" width="200" height="60">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(W \cap G) =$ [[  0  ]]
  </foreignObject>

  <!-- Aus W kommend: S,W / G,W / W,W -->
  <foreignObject x="630" y="470" width="200" height="60">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(S \cap W) =$ [[  0  ]]
  </foreignObject>

  <foreignObject x="630" y="560" width="200" height="60">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(G \cap W) =$ [[  0  ]]
  </foreignObject>

  <foreignObject x="630" y="650" width="200" height="60">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(W \cap W) =$ [[  0  ]]
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
    $P(S) =$ [[  0  ]]
  </foreignObject>

  <!-- Start -> G, Mittelpunkt (220,360), horizontal -->
  <foreignObject x="170" y="330" width="130" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(G) =$ [[  0  ]]
  </foreignObject>

  <!-- Start -> W, Mittelpunkt ca. (220,465), Winkel ~ +45° -->
  <foreignObject x="130" y="435" width="140" height="80"
                 transform="rotate(45 220 465)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(W) =$ [[  0  ]]
  </foreignObject>


  <!-- 2. Stufe: Pfad-Beschriftungen von S aus -->
  <!-- Mittelpunkte:
       S->S|S: (485,105), S->G|S: (485,150), S->W|S: (485,195)
  -->

  <foreignObject x="490" y="100" width="150" height="80"
                 transform="rotate(-25 485 105)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(S \mid S) =$ [[  0  ]]
  </foreignObject>

  <foreignObject x="490" y="155" width="150" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(G \mid S) =$ [[  0  ]]
  </foreignObject>

  <foreignObject x="490" y="175" width="150" height="80"
                 transform="rotate(25 485 195)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(W \mid S) =$ [[  0  ]]
  </foreignObject>


  <!-- 2. Stufe: Pfad-Beschriftungen von G aus -->
  <!-- Mittelpunkte:
       G->S|G: (485,330), G->G|G: (485,360), G->W|G: (485,390)
  -->

  <foreignObject x="490" y="315" width="150" height="80"
                 transform="rotate(-15 485 330)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(S \mid G) =$ [[  0  ]]
  </foreignObject>

  <foreignObject x="490" y="364" width="150" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(G \mid G) =$ [[  0  ]]
  </foreignObject>

  <foreignObject x="490" y="380" width="150" height="80"
                 transform="rotate(15 485 390)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(W \mid G) =$ [[  0  ]]
  </foreignObject>


  <!-- 2. Stufe: Pfad-Beschriftungen von W aus -->
  <!-- Mittelpunkte:
       W->S|W: (485,525), W->G|W: (485,570), W->W|W: (485,615)
  -->

  <foreignObject x="490" y="523" width="150" height="80"
                 transform="rotate(-25 485 525)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(S \mid W) =$ [[  0  ]]
  </foreignObject>

  <foreignObject x="490" y="572" width="150" height="80">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(G \mid W) =$ [[  0  ]]
  </foreignObject>

  <foreignObject x="490" y="592" width="150" height="80"
                 transform="rotate(25 485 615)">
    <!-- data-text-solved="Richtig!" data-text-failed="Falsch!" data-text-resolved="Aufgelöst!" -->
    $P(W \mid W) =$ [[  0  ]]
  </foreignObject>

</svg>









