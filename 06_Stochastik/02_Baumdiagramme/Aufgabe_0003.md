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

tags: Baumdiagramm, Binomialverteilung, sehr leicht, sehr niedrig, Bestimme, Skizziere

comment: Bestimme mithilfe eines Baumdiagramms die Wahrscheinlichkeiten für Ereignisse und Ergebnisse.

author: Martin Lommatzsch

-->




# Fragen zum Baumdiagramm

In einem Gefäß befinden sich 5 schwarze (S), 7 grüne (G) und 11 weiße (W) Kugeln für zwei Ziehungen mit Zurücklegen. **Runde** falls nötig auf drei Nachkommastellen.





 __$a) \;\;$__ **Skizziere** ein Baumdiagramm für den beschriebenen Fall. 



[[!]]
<script>true</script>
*************

<center>
```latex  @tikz 
\begin{tikzpicture}[scale=1,>=latex]
\node (F) at (0,1)  {Start};
		\draw[->, thick] (0.5,0) -- (5.5,-2);
	  \node[rotate=335] (1) at (4.5,-1)  {S\,$\frac{5}{23}$}; %rechts	
		
		\draw[->, thick] (-0.5,0) -- (-5.5,-2);
	  \node[rotate=15] (2) at (-4.5,-1)  {W\,$\frac{11}{23}$}; %links
		
		\draw[->, thick] (-0,0) -- (-0,-2);
	  \node[rotate=90] (3) at (-0.66,-1)  {G\,$\frac{7}{23}$}; %mitte
		
	  \node (A1) at (-6,-2.5)  {$\frac{11}{23}$};
		\node (B2) at (6,-2.5)  {$\frac{5}{23}$};
		\node (M1) at (0,-2.5)  {$\frac{7}{23}$};
		 
		
		\draw[->, thick] (6.25,-3) -- (9,-5)   ; %A12 %rechtsrechts
		\node[rotate=315] (11) at (8.1,-4)  {S}; %rechtsrechts			
		\node[rotate=270] (B21) at (9,-6)  {$\frac{5}{23} \cdot \frac{5}{23}$}; %rechtsrechts
		 
		\draw[->, thick] (5.75,-3) -- (5.5,-5)  ; %B22 %rechtslinks
		\node[rotate=315] (12) at (7,-4)  {G}; %rechtslinks	
	  \node[rotate=270] (A12) at (5.5,-6)  {$\frac{5}{23} \cdot \frac{11}{23}$}; %rechtslinks
		 
		\draw[->, thick] (6,-3) -- (7.25,-5)  ; %B22 %rechtsmitte
		\node[rotate=315] (13) at (6,-4)  {W}; %rechtsmitte	
	  \node[rotate=270] (M12) at (7.25,-6)  {$\frac{5}{23} \cdot \frac{7}{23}$}; %rechtsmitte
		
				
		\draw[->, thick] (-6.25,-3) -- (-9,-5)   ; %A12 %linksrechts
		\node[rotate=55] (21) at (-8.1,-4)  {W}; %linksrechts			
		\node[rotate=270] (B22) at (-9,-6)  {$\frac{11}{23} \cdot \frac{11}{23}$}; %linksrechts
		
		\draw[->, thick] (-6,-3) -- (-7.25,-5)  ; %B22 %linksmitte
		\node[rotate=55] (23) at (-6,-4)  {S}; %linksmitte	
	  \node[rotate=270] (M22) at (-7.25,-6)  {$\frac{11}{23} \cdot \frac{7}{23}$}; %linksmitte
		 
		\draw[->, thick] (-5.75,-3) -- (-5.5,-5)  ; %B22 %linkslinks
		\node[rotate=55] (22) at (-7,-4)  {G}; %linkslinks	
	  \node[rotate=270] (A22) at (-5.5,-6)  {$\frac{11}{23} \cdot \frac{5}{23}$}; %linkslinks
		
				
		\draw[->, thick] (0.25,-3) -- (2,-5)   ; %A12 %linksrechts
		\node[rotate=315] (21) at (1.5,-4)  {S}; %linksrechts			
		\node[rotate=270] (B22) at (2,-6)  {$\frac{7}{23} \cdot \frac{5}{23}$}; %linksrechts
		
		\draw[->, thick] (-0,-3) -- (-0,-5)  ; %B22 %linksmitte
		\node[rotate=90] (23) at (-0.5,-4)  {G}; %linksmitte	
	  \node[rotate=270] (M22) at (0,-6)  {$\frac{7}{23} \cdot \frac{7}{23}$}; %linksmitte
		 
		\draw[->, thick] (-0.25,-3) -- (-2,-5)  ; %B22 %linkslinks
		\node[rotate=55] (22) at (-1.5,-4)  {W}; %linkslinks	
	  \node[rotate=270] (A22) at (-2,-6)  {$\frac{7}{23} \cdot \frac{11}{23}$}; %linkslinks
		 
\end{tikzpicture} 
```
</center>

*************






 __$b) \;\;$__ **Bestimme**, wie hoch die Wahrscheinlichkeit ist bei der ersten Ziehung eine grüne Kugel zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. Runde falls nötig auf drei Nachkommastellen.



[[  30,435  ]]$\%$.
*************
$$
\begin{align*}
   \frac{7}{23} & \approx 30,435\%
\end{align*}
$$
*************





 __$c) \;\;$__ **Bestimme**, wie hoch die Wahrscheinlichkeit ist erst eine schwarze dann eine weiße Kugel hintereinander zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. 



[[  10,397  ]]$\%$.
*************
$$
\begin{align*}
   \frac{5}{23} \cdot \frac{11}{23} \approx 10,397\%
\end{align*}
$$
*************






 __$d) \;\;$__ **Bestimme**, wie viele Pfade für die Möglichkeit existieren genau eine weiße und eine grüne Kugeln zu ziehen. 



[[   1   ]] 
*************
WW
*************






 __$e) \;\;$__ **Bestimme**, wie viele Pfade für die Möglichkeit existieren mindestens eine schwarze Kugel zu ziehen. 



[[   3   ]] 
*************
$$
  SS, SW, SG
$$
*************






 __$f) \;\;$__ **Bestimme**, wie viele Pfade für die Möglichkeit existieren von jeder Kugel eine zu ziehen, wenn drei mal gezogen würde. 




[[   6   ]] 
*************
$$
  SGW, SWG, WSG, GSW, GWS, WGS
$$
*************






 __$g) \;\;$__ **Bestimme**, wie hoch die Wahrscheinlichkeit ist jede Kugelfarbe bei drei Ziehungen mit Zurücklegen einmal zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. 



[[  18,986  ]]$\%$.
*************
$$
\begin{align*}
6 \cdot \frac{5}{23} \cdot \frac{7}{23} \cdot \frac{11}{23} \approx 18,986 \%
\end{align*}
$$
*************






 __$h) \;\;$__ **Bestimme**, wie hoch die Wahrscheinlichkeit bei drei Ziehungen mit Zurücklegen ist, bei der erst eine schwarze, dann eine grüne und abschließend eine weiße Kugel zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. 



[[   3,164  ]]$\%$.
*************
$$
\begin{align*}
   \frac{5}{23} \cdot \frac{7}{23} \cdot \frac{11}{23} \approx 3,164\%
\end{align*}
$$
*************






 __$i) \;\;$__ **Bestimme**, wie hoch die Wahrscheinlichkeit bei drei Ziehungen mit Zurücklegen ist höchstens zwei schwarze Kugel zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. 



[[  86,241  ]]$\%$.
*************
$$
\begin{align*}
  1 -  \left(\frac{7}{23}\right)^3 -  \left(\frac{11}{23}\right)^3 \approx 86,241 \%
\end{align*}
$$
*************

 






