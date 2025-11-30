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

tags: Baumdiagramm, Hypergeometrische Verteilung, sehr leicht, sehr niedrig, Bestimme, Skizziere

comment: Bestimme mithilfe eines Baumdiagramms die Wahrscheinlichkeiten für Ereignisse und Ergebnisse.

author: Martin Lommatzsch

-->




# Fragen zum Baumdiagramm

In einem Gefäß befinden sich 8 rote (R), 3 grüne (G) und 12 blaue (B) Kugeln für zwei Ziehungen ohne Zurücklegen. **Runde** falls nötig auf drei Nachkommastellen.





 __$a) \;\;$__ **Skizziere** ein Baumdiagramm für den beschriebenen Fall. 



[[!]]
<script>true</script>
*************

<center>
```latex  @tikz 
\begin{tikzpicture}[scale=1,>=latex]
		
	  \node (F) at (0,1)  {Start};
		\draw[->, thick] (0.5,0) -- (5.5,-2);
	  \node[rotate=335] (1) at (4.5,-1)  {R\,$\frac{8}{23}$}; %rechts	
		
		\draw[->, thick] (-0.5,0) -- (-5.5,-2);
	  \node[rotate=15] (2) at (-4.5,-1)  {B\,$\frac{12}{23}$}; %links
		
		\draw[->, thick] (-0,0) -- (-0,-2);
	  \node[rotate=90] (3) at (-0.66,-1)  {G\,$\frac{3}{23}$}; %mitte
		
	  \node (A1) at (-6,-2.5)  {$\frac{12}{23}$};
		\node (B2) at (6,-2.5)  {$\frac{8}{23}$};
		\node (M1) at (0,-2.5)  {$\frac{3}{23}$};
		 
		
		\draw[->, thick] (6.25,-3) -- (9,-5)   ; %A12 %rechtsrechts
		\node[rotate=315] (11) at (8.1,-4)  {R}; %rechtsrechts			
		\node[rotate=270] (B21) at (9,-6)  {$\frac{8}{23} \cdot \frac{7}{22}$}; %rechtsrechts
		 
		\draw[->, thick] (5.75,-3) -- (5.5,-5)  ; %B22 %rechtslinks
		\node[rotate=315] (12) at (7,-4)  {G}; %rechtslinks	
	  \node[rotate=270] (A12) at (5.5,-6)  {$\frac{8}{23} \cdot \frac{12}{22}$}; %rechtslinks
		 
		\draw[->, thick] (6,-3) -- (7.25,-5)  ; %B22 %rechtsmitte
		\node[rotate=315] (13) at (6,-4)  {B}; %rechtsmitte	
	  \node[rotate=270] (M12) at (7.25,-6)  {$\frac{8}{23} \cdot \frac{3}{22}$}; %rechtsmitte
		
				
		\draw[->, thick] (-6.25,-3) -- (-9,-5)   ; %A12 %linksrechts
		\node[rotate=55] (21) at (-8.1,-4)  {B}; %linksrechts			
		\node[rotate=270] (B22) at (-9,-6)  {$\frac{12}{23} \cdot \frac{11}{22}$}; %linksrechts
		
		\draw[->, thick] (-6,-3) -- (-7.25,-5)  ; %B22 %linksmitte
		\node[rotate=55] (23) at (-6,-4)  {R}; %linksmitte	
	  \node[rotate=270] (M22) at (-7.25,-6)  {$\frac{12}{23} \cdot \frac{3}{22}$}; %linksmitte
		 
		\draw[->, thick] (-5.75,-3) -- (-5.5,-5)  ; %B22 %linkslinks
		\node[rotate=55] (22) at (-7,-4)  {G}; %linkslinks	
	  \node[rotate=270] (A22) at (-5.5,-6)  {$\frac{12}{23} \cdot \frac{8}{22}$}; %linkslinks
		
				
		\draw[->, thick] (0.25,-3) -- (2,-5)   ; %A12 %linksrechts
		\node[rotate=315] (21) at (1.5,-4)  {R}; %linksrechts			
		\node[rotate=270] (B22) at (2,-6)  {$\frac{3}{23} \cdot \frac{8}{22}$}; %linksrechts
		
		\draw[->, thick] (-0,-3) -- (-0,-5)  ; %B22 %linksmitte
		\node[rotate=90] (23) at (-0.5,-4)  {G}; %linksmitte	
	  \node[rotate=270] (M22) at (0,-6)  {$\frac{3}{23} \cdot \frac{2}{22}$}; %linksmitte
		 
		\draw[->, thick] (-0.25,-3) -- (-2,-5)  ; %B22 %linkslinks
		\node[rotate=55] (22) at (-1.5,-4)  {B}; %linkslinks	
	  \node[rotate=270] (A22) at (-2,-6)  {$\frac{3}{23} \cdot \frac{12}{22}$}; %linkslinks
\end{tikzpicture} 
```
</center>

*************






 __$b) \;\;$__ **Bestimme**, wie hoch die Wahrscheinlichkeit ist bei der ersten Ziehung eine blaue Kugel zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. Runde falls nötig auf drei Nachkommastellen.



[[  52,174  ]]$\%$.
*************
$$
\begin{align*}
   \frac{12}{23} & \approx 52,174\%
\end{align*}
$$
*************





 __$c) \;\;$__ **Bestimme**, wie hoch die Wahrscheinlichkeit ist zwei grüne Kugel hintereinander zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. 



[[   1,189  ]]$\%$.
*************
$$
\begin{align*}
   \frac{3}{23} \cdot \frac{2}{22} \approx 1,189\%
\end{align*}
$$
*************






 __$d) \;\;$__ **Bestimme**, wie viele Pfade bei drei Ziehungen für die Möglichkeit existieren von jeder Farbe eine Kugel zu ziehen. 



[[   6   ]] 
*************
RBG, RGB, BGR, BRG, GBR, GRB
*************






 __$e) \;\;$__ **Bestimme**, wie viele Pfade bei drei Ziehungen für die Möglichkeit existieren eine Farbe zweimal zu ziehen. 



[[   18  ]] 
*************
$$
  RRG, RGR, GRR, RRB, RBR, BRR, BBG, BGB, GBB, BBR, BRB, RBB, GGR, GRG, RGG, GGB, GBG, BGG 
$$
*************






 __$f) \;\;$__ **Bestimme**, wie hoch die Wahrscheinlichkeit bei zwei Ziehungen ohne Zurücklegen ist zwei blaue Kugeln zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. 




[[  26,087  ]]\% 
*************
$$
  \frac{12 \cdot 11}{23 \cdot 22} \approx 26,087 \%
$$
*************






 __$g) \;\;$__ **Bestimme**, wie hoch die Wahrscheinlichkeit bei drei Ziehungen ohne Zurücklegen ist mehr als eine rote Kugel zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. 



[[  11,067  ]]$\%$.
*************
$$
\begin{align*}
\frac{8}{23} \cdot \frac{7}{22} \approx 11,067 \%
\end{align*}
$$
*************






 __$h) \;\;$__ **Bestimme**, wie hoch die Wahrscheinlichkeit bei zwei Ziehungen ohne Zurücklegen ist weniger als zwei grüne Kugeln zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. 



[[  98,814  ]]$\%$.
*************
$$
\begin{align*}
  1-  \frac{3}{23} \cdot \frac{2}{22} \approx 98,814\%
\end{align*}
$$
*************






 __$i) \;\;$__ **Bestimme**, wie hoch die Wahrscheinlichkeit bei zwei Ziehungen ohne Zurücklegen ist höchstens zwei rote Kugel zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. 



[[  100  ]]$\%$.
*************
Alle Optionen sind zulässig.
*************

 






