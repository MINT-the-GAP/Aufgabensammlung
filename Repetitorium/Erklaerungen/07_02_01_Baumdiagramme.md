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


tags: Erklärung, Baumdiagramm, bedingte Wahrscheinlichkeit

comment: In diesem Abschnitt werden Baumdiagramme und bedingte Wahrscheinlichkeit ausführlich erklärt.

author: Martin Lommatzsch





-->






# Baumdiagramme und bedingte Wahrscheinlichkeit




{{|>}}
***************************
Wenn in einem Experiment alle Ereignisse die gleiche *Wahrscheinlichkeit* besitzen, dann wird von einem *Laplace-Experiment* gesprochen. Dies ist zum Beispiel der Fall bei einem exakten *Würfel*. Wenn die Wahrscheinlichkeiten wie zum Beispiel bei einer Heftzwecke nicht gleich verteilt sind, dann liegt kein *Laplace-Experiment* vor. Allerdings können die Einzelwahrscheinlichkeiten für ein Ereignis immer über $P = \frac{\text{Anzahl der Ereignisse}}{\text{Gesamtanzahl der Ereignisse}}$ berechnet werden. Diese *Gleichung* erhält nur seine Gültigkeit, wenn die *Teilwahrscheinlichkeiten* schon bekannt sind oder unendlich viele Messungen vorgenommen wurden, was in einem späteren Abschnitt detaillierter erläutert wird. 


{{|>}} Generell kann in der Wahrscheinlichkeitsrechnung ein *Ereignis* $A$ mit einem einem *Gegenereignis* $\bar{A}$ verknüpft werden. Hieraus ergeben sich die *Axiome von Kolmogorov*, welche eine *Ergebnismenge* von zwei Ereignissen $\Omega = \left\{ A,B \right\} $ vorsieht, wobei $B=\bar{A}$ angenommen werden kann. Somit ergeben sich folgende Möglichkeiten für den Ergebnisraum $\Sigma= \left\{\varnothing, A,B, \Omega \right\} $, welcher noch die Komponenten für "kein Ereignis passt zur Ergebnismenge" ($\varnothing$) sowie "Es ist gleich welches Ereignis aus der *Ergebnismenge* vorkommt" ($\Omega$):



$$
\begin{align*}
  P(\varnothing) & = 0 \\
  P(A) & = 1-P(B) \\
  P(\Omega) & = 1  \;\; .\\
\end{align*}
$$


{{|>}} Für eine *Ergebnismenge* mit drei *Ereignissen* $\Omega = \left\{ A_1,A_2,A_3 \right\} $ verändert sich die zweite *Gleichung* zu $P(A_1)  = 1-P(A_2)-P(A_3)$. 



{{|>}} Wenn zwei Behauptungen mit einander verknüpft sind, könne diese auch in einem *Baumdiagramm* dargestellt werden. So kann ein *Ereignisse* $A$ als erstes betrachtet werden. Anschließend wird von den jeweiligen Ergebnisse der ersten Beobachtung das *Ereignis* $B$ betrachtet:





<center>
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







{{|>}} wobei die Notation $B|A$ dafür steht, dass erst das *Ereignis* $A$ eintrat und anschließend das Ereignis $B$. Eine andere Schreibweise ist $P_A(B) = P(B|A)$. Im *Baumdiagramm* zu erkennen ist auch, dass die *Wahrscheinlichkeit* $P(A \cap B)$ sich aus den *Teilwahrscheinlichkeiten* $P(A)$ und $P(B|A)$ ergibt. Dies ist die sogenannte *Bayes’sche Regel*:


$$
\begin{align*}
  P\left( A \left| B \right. \right) \cdot P(B) =  P\left( B  \cap  A   \right) \;\;.   \\
\end{align*}
$$



{{|>}} Über die *Bayes'sche Regel* und der *kommutativen* Eigenschaft, dass $ P\left( B  \cap  A   \right) =  P\left( A  \cap  B   \right)$ ist, ergibt sich die sogenannte erste *Pfadregel*:



$$
\begin{align*}
  P(A \cup B) = P(A)+P(B) \;\; . \\
\end{align*}
$$



{{|>}} Aus dem *Baumdiagramm* ist auch zu erkennen, dass die *Aufsummierung* aller Ereignisse einer Aufspaltungsstufe zu $100\%$ ergeben. Somit ergibt sich die zweite *Pfadregel*:



$$
\begin{align*}
  P\left( A \left| B \right. \right) \cdot P(B)  =   P\left( B \left| A \right. \right) \cdot P(A) \;\; .  \\
\end{align*}
$$



{{|>}} Unter der Verwendung der *Pfadregeln* können über die *Aufsummierungen* der Ergebnisse ohne Berücksichtigung der Reihenfolge, also alle *Permutationen*, folgende Ausdrücke gefunden werden:


$$
\begin{align*}
  P(A) = P\left( B \left| A \right. \right) \cdot P(A) + P\left( B \left| \bar{A} \right. \right) \cdot P(\bar{A}) \;\; ,   \\
\end{align*}
$$


$$
\begin{align*}
  P\left( A \left| B \right. \right) = \frac{ P\left( B \left| A \right. \right) \cdot P(A)}{  P\left( B \left| A \right. \right) \cdot P(A) + P\left( B \left| \bar{A} \right. \right) \cdot P(\bar{A})   }  \;\; . \\
\end{align*}
$$



Wenn ein Experiment ein so genanntes *Bernoulli-Experiment* ist, dann sind die *Ereignisse* *unabhängig* von einander. Dies bedeutet, dass ein *Wahrscheinlichkeitsbaum* umgekehrt werden kann. Dieses umgekehrte *Baumdiagramm* wird auch *Gegenbaum* genannt. Wenn kein *Bernoulli-Experiment* vorliegt, ist die Erstellung des *Gegenbaums* nicht möglich. 





<center>
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
    $P(B)$
  </foreignObject>

  <foreignObject x="276" y="122" width="48" height="40">
    $P(\bar{B})$
  </foreignObject>

  <!-- Blattknoten: P(B ∩ A), … -->
  <foreignObject x="12" y="265" width="56" height="40">
    $P(A \cap B)$
  </foreignObject>

  <foreignObject x="132" y="265" width="56" height="40">
    $P(\bar{A} \cap B)$
  </foreignObject>

  <foreignObject x="212" y="265" width="56" height="40">
    $P(A \cap \bar{B})$
  </foreignObject>

  <foreignObject x="332" y="265" width="56" height="40">
    $P(\bar{A} \cap \bar{B})$    
  </foreignObject>


  <!-- ===================================
       Pfad-Beschriftungen mit Eingabefeld
       (Boxen um den Pfad-Mittelpunkt zentriert)
       =================================== -->

  <!-- 1. Stufe: P(A), Pfad-Mittelpunkt (150,80) -->
  <foreignObject x="90" y="60" width="120" height="60"
                 transform="rotate(-40 150 80)">
                 
    $P(B) $ 
  </foreignObject>

  <!-- 1. Stufe: P(¬A), Pfad-Mittelpunkt (250,80) -->
  <foreignObject x="190" y="60" width="120" height="60"
                 transform="rotate(40 250 80)">
                 
    $P(\bar{B}) $
  </foreignObject>


  <!-- 2. Stufe links: P(B|A), Pfad-Mittelpunkt (70,200) -->
  <foreignObject x="10" y="170" width="120" height="60"
                 transform="rotate(-64 79 195)">
                 
    $P(A \mid B) $ 
  </foreignObject>

  <!-- 2. Stufe links: P(¬B|A), Pfad-Mittelpunkt (130,200) -->
  <foreignObject x="70" y="170" width="120" height="60"
                 transform="rotate(64 121 195)">
                 
    $P(\bar{A} \mid B) $ 
  </foreignObject>


  <!-- 2. Stufe rechts: P(B|¬A), Pfad-Mittelpunkt (270,200) -->
  <foreignObject x="210" y="170" width="120" height="60"
                 transform="rotate(-64 279 195)">
                 
    $P(A \mid \bar{B}) $ 
  </foreignObject>

  <!-- 2. Stufe rechts: P(¬B|¬A), Pfad-Mittelpunkt (330,200) -->
  <foreignObject x="270" y="170" width="120" height="60"
                 transform="rotate(64 321 195)">
                 
    $P(\bar{A} \mid \bar{B}) $ 
  </foreignObject>

</svg>
</center>





Bei einer *unbedingten* *Wahrscheinlichkeit* handelt es sich stets um betrachtete *Ereignisse*, die nicht auseinander resultieren. Während die *bedingte* *Wahrscheinlichkeit* hier auch in den *Teilwahrscheinlichkeiten* nach dem ersten *Ereignis* unterscheidet. So kann nach dem *Ereignis* $A$ das *Ereignis* $B$ oder $\bar{B}$ eintreten, während wiederum bei $\bar{A}$ entweder $C$ oder $\bar{C}$ eintreten könnten, obwohl diese auch den selben Sachzusammenhang besitzen können.













<center>
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
    $P(C \cap \bar{A})$
  </foreignObject>

  <foreignObject x="332" y="265" width="56" height="40">
    $P(\bar{C} \cap \bar{A})$    
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
                 
    $P(C \mid \bar{A}) $ 
  </foreignObject>

  <!-- 2. Stufe rechts: P(¬B|¬A), Pfad-Mittelpunkt (330,200) -->
  <foreignObject x="270" y="170" width="120" height="60"
                 transform="rotate(64 321 195)">
                 
    $P(\bar{C} \mid \bar{A}) $ 
  </foreignObject>

</svg>
</center>


---

---


Das Prinzip einer unbedingten Wahrscheinlichkeit lässt sich am besten an einem Beispiel erläutern:



![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/bedingt1.PNG)


Im gewählten Beispiel sind blaue $B$ und grüne Kreise $\bar{B}$ gezeichnet, wobei einige Kreise noch einen roten Kreis $R$ sich beherbergen. Folgende *relativen Häufigkeiten* sind zu erkennen: \



- blaue Kreise von allen Kreisen: $P(B) = \frac{16}{28}$
- grüne Kreise von allen Kreisen: $P(\bar{B}) = \frac{12}{28}$
- Kreise mit rotem Kreis von allen Kreisen: $P(R) = \frac{7}{28}$
- Kreise ohne rotem Kreis von allen Kreisen: $P(\bar{R}) = \frac{21}{28}$
- blaue Kreise mit rotem Kreis von allen Kreisen: $P(B \cap R) = \frac{4}{28}$
- grüne Kreise mit rotem Kreis von allen Kreisen: $P(\bar{B} \cap R) = \frac{3}{28}$
- blaue Kreise ohne rotem Kreis von allen Kreisen: $P(B \cap \bar{R}) = \frac{12}{28}$
- grüne Kreise ohne rotem Kreis von allen Kreisen: $P(\bar{B} \cap \bar{R}) = \frac{9}{28}$
- blaue Kreise mit rotem Kreis von den blaue Kreisen: $P( R \left|   B \right.) = \frac{4}{16}$
- blaue Kreise ohne rotem Kreis von den blaue Kreisen: $P( \bar{R} \left|   B \right.) = \frac{12}{16}$
- grüne Kreise mit rotem Kreis von den grünen Kreisen: $P( R  \left|   \bar{B} \right.) = \frac{3}{12}$
- grüne Kreise ohne rotem Kreis von den grünen Kreisen: $P( \bar{R} \left|  \bar{B} \right.) = \frac{9}{12}$
- blaue Kreise mit rotem Kreis von den Kreisen mit rotem Kreis: $P( B \left|   R \right.) = \frac{4}{7}$ 
- grüne Kreise mit rotem Kreis von den Kreisen mit rotem Kreis: $P( \bar{B} \left| R \right.) = \frac{3}{7}$ 
- blaue Kreise ohne rotem Kreis von den Kreisen ohne rotem Kreis: $P( B \left|   \bar{R} \right.) = \frac{12}{21}$ 
- grüne Kreise ohne rotem Kreis von den Kreisen ohne rotem Kreis: $P( \bar{B} \left| \bar{R} \right.) = \frac{9}{21}$ \


Werden die *relativen Häufigkeiten* auf ein *Baumdiagramm* übertragen ergibt sich zum Beispiel:




<center>
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
  <foreignObject x="76" y="122" width="80" height="40">
    $P(B) = \dfrac{16}{28} $
  </foreignObject>

  <foreignObject x="276" y="122" width="80" height="40">
    $P(\bar{B}) = \dfrac{12}{28} $
  </foreignObject>

  <!-- Blattknoten: P(B ∩ A), … -->
  <foreignObject x="12" y="265" width="68" height="60">
    $P(R \cap B) \\  = \dfrac{4}{28} $
  </foreignObject>

  <foreignObject x="132" y="265" width="68" height="60">
    $P(\bar{R} \cap B) \\ = \dfrac{12}{28} $
  </foreignObject>

  <foreignObject x="212" y="265" width="68" height="60">
    $P(R \cap \bar{B}) \\  = \dfrac{3}{28} $
  </foreignObject>

  <foreignObject x="332" y="265" width="68" height="60">
    $P(\bar{R} \cap \bar{B}) \\  = \dfrac{9}{28} $    
  </foreignObject>


  <!-- ===================================
       Pfad-Beschriftungen mit Eingabefeld
       (Boxen um den Pfad-Mittelpunkt zentriert)
       =================================== -->

  <!-- 1. Stufe: P(A), Pfad-Mittelpunkt (150,80) -->
  <foreignObject x="90" y="50" width="120" height="60"
                 transform="rotate(-40 150 80)">
                 
    $P(B) = \dfrac{16}{28}  $ 
  </foreignObject>

  <!-- 1. Stufe: P(¬A), Pfad-Mittelpunkt (250,80) -->
  <foreignObject x="190" y="50" width="120" height="60"
                 transform="rotate(40 250 80)">
                 
    $P(\bar{B}) = \dfrac{12}{28}  $
  </foreignObject>


  <!-- 2. Stufe links: P(B|A), Pfad-Mittelpunkt (70,200) -->
  <foreignObject x="10" y="160" width="120" height="60"
                 transform="rotate(-64 79 195)">
                 
    $P(R \mid B) = \dfrac{4}{16}  $ 
  </foreignObject>

  <!-- 2. Stufe links: P(¬B|A), Pfad-Mittelpunkt (130,200) -->
  <foreignObject x="70" y="160" width="120" height="60"
                 transform="rotate(64 121 195)">
                 
    $P(\bar{R} \mid B) = \dfrac{12}{16}  $ 
  </foreignObject>


  <!-- 2. Stufe rechts: P(B|¬A), Pfad-Mittelpunkt (270,200) -->
  <foreignObject x="210" y="160" width="120" height="60"
                 transform="rotate(-64 279 195)">
                 
    $P(R \mid \bar{B}) = \dfrac{3}{12}  $ 
  </foreignObject>

  <!-- 2. Stufe rechts: P(¬B|¬A), Pfad-Mittelpunkt (330,200) -->
  <foreignObject x="270" y="160" width="120" height="60"
                 transform="rotate(64 321 195)">
                 
    $P(\bar{R} \mid \bar{B}) = \dfrac{9}{12} $ 
  </foreignObject>

</svg>
</center>






und dem dazu gehörigen *Gegenbaum*:



<center>
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
  <foreignObject x="76" y="122" width="68" height="50">
    $P(R) = \dfrac{7}{28} $
  </foreignObject>

  <foreignObject x="276" y="122" width="68" height="50">
    $P(\bar{R}) = \dfrac{21}{28} $
  </foreignObject>

  <!-- Blattknoten: P(B ∩ A), … -->
  <foreignObject x="12" y="265" width="68" height="60">
    $P(B \cap R) \\ = \dfrac{4}{28} $
  </foreignObject>

  <foreignObject x="132" y="265" width="68" height="60">
    $P(\bar{B} \cap R)  \\ = \dfrac{3}{28} $
  </foreignObject>

  <foreignObject x="212" y="265" width="68" height="60">
    $P(B \cap \bar{R}) \\ = \dfrac{12}{28} $
  </foreignObject>

  <foreignObject x="332" y="265" width="68" height="60">
    $P(\bar{B} \cap \bar{R})  \\ = \dfrac{9}{28} $    
  </foreignObject>


  <!-- ===================================
       Pfad-Beschriftungen mit Eingabefeld
       (Boxen um den Pfad-Mittelpunkt zentriert)
       =================================== -->

  <!-- 1. Stufe: P(A), Pfad-Mittelpunkt (150,80) -->
  <foreignObject x="90" y="50" width="120" height="60"
                 transform="rotate(-40 150 80)">
                 
    $P(R) = \dfrac{7}{28}  $ 
  </foreignObject>

  <!-- 1. Stufe: P(¬A), Pfad-Mittelpunkt (250,80) -->
  <foreignObject x="190" y="50" width="120" height="60"
                 transform="rotate(40 250 80)">
                 
    $P(\bar{R}) = \dfrac{21}{28}  $
  </foreignObject>


  <!-- 2. Stufe links: P(B|A), Pfad-Mittelpunkt (70,200) -->
  <foreignObject x="10" y="160" width="120" height="60"
                 transform="rotate(-64 79 195)">
                 
    $P(B \mid R) = \dfrac{4}{7}  $ 
  </foreignObject>

  <!-- 2. Stufe links: P(¬B|A), Pfad-Mittelpunkt (130,200) -->
  <foreignObject x="70" y="160" width="120" height="60"
                 transform="rotate(64 121 195)">
                 
    $P(\bar{B} \mid R) = \dfrac{3}{7}  $ 
  </foreignObject>


  <!-- 2. Stufe rechts: P(B|¬A), Pfad-Mittelpunkt (270,200) -->
  <foreignObject x="210" y="160" width="120" height="60"
                 transform="rotate(-64 279 195)">
                 
    $P(B \mid \bar{R}) = \dfrac{12}{21}  $ 
  </foreignObject>

  <!-- 2. Stufe rechts: P(¬B|¬A), Pfad-Mittelpunkt (330,200) -->
  <foreignObject x="270" y="160" width="120" height="60"
                 transform="rotate(64 321 195)">
                 
    $P(\bar{B} \mid \bar{R}) = \dfrac{9}{21} $ 
  </foreignObject>

</svg>
</center>




Es wird deutlich, dass die *Zweigwahrscheinlichkeiten* sich je nach Diagrammaufbau verändern, sodass diese oftmals über dem *Satz von Bayes* berechnet werden müssen. 




***************************


