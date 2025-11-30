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

tags: Baumdiagramm, bedingte Wahrscheinlichkeit, leicht, niedrig, Bestimme

comment: Bestimme mithilfe eines Baumdiagramms die bedingten Wahrscheinlichkeiten.

author: Martin Lommatzsch

-->




# Bedingte Wahrscheinlichkeit am Baumdiagramm


Beim folgenden Baumdiagramm ist ein Szenario dargestellt, indem rote (R), blaue (B), grüne (G), weiße (W) und schwarze (S) Kugeln vorkommen. Löse alle Teilaufgaben. **Runde** falls nötig auf drei Nachkommastellen.








<center>
```latex  @tikz 
\begin{tikzpicture}[scale=1,>=latex]	
		\node (F) at (0,1)  {\Large Start};
		\draw[->, thick] (0.5,0) -- (2.5,-2);
		\node[rotate=0] (1) at (2.5,-1)  {\Large $B$}; %rechts	
		
		\draw[->, thick] (-0.5,0) -- (-2.5,-2);
		\node[rotate=0] (2) at (-2.5,-1)  {\Large $R$}; %links
		
		
		\node (A1) at (-3,-2.5)  {\Large $\frac{7}{20}$};
		\node (B2) at (3,-2.5)  {\Large $\frac{13}{20}$};
		
		\draw[->, thick] (-3.5,-3) -- (-5,-5)  ; %A11 %linkslinks
		\node[rotate=0] (22) at (-5,-4)  {\Large $R | R $ }; %linkslinks	

		\draw[->, thick] (-3,-3) -- (-2,-5) ; %B21 %rechtslinks
		\node[rotate=0] (12) at (-1.65,-4)  {\Large $G | R  $  }; %rechtslinks


		\draw[->, thick] (3,-3) -- (2,-5)  ; %B22 %linksrechts
		\node[rotate=0] (21) at (1.65,-4)  {\Large $S | B $  }; %linksrechts	

		\draw[->, thick] (3.5,-3) -- (5,-5)   ; %A12 %rechtsrechts
		\node[rotate=0] (11) at (5,-4)  {\Large $  W | B $  }; %rechtsrechts	
		
		
		\node (A11) at (-5.5,-6)  {\Large $28\%$}; %linkslinks
		\node (A12) at (-2,-6)  {\Large $7\%$}; %linksrechts
		\node (B22) at (2,-6)  {\Large $48,75\%$}; %rechtslinks
		\node (B21) at (5.5,-6)  {\Large $16,25\%$}; %rechtsrechts 

		
		%\node (A11) at (-5.5,-6)  {\Large $\frac{7}{20} \cdot \frac{4}{5}$}; %linkslinks
		%\node (A12) at (-2,-6)  {\Large $\frac{7}{20} \cdot \frac{1}{5} $}; %linksrechts
		%\node (B22) at (2,-6)  {\Large $\frac{13}{20} \cdot \frac{3}{4}$}; %rechtslinks
		%\node (B21) at (5.5,-6)  {\Large $\frac{13}{20} \cdot \frac{1}{4}$}; %rechtsrechts 
\end{tikzpicture} 
```
</center>




__$a) \;\;$__ **Fülle** die Lücken im Lückentext **aus**.

Wenn bei der ersten Ziehung eine [[ blaue  ]] Kugel gezogen wurde, wird in der zweiten Ziehung aus der Urne mit den [[ weißen ]] und schwarzen Kugeln gezogen. Wird hingegen bei der ersten Ziehung eine [[ rote   ]] Kugel gezogen, dann wird in der zweiten Ziehung aus einer Urne mit [[ roten  ]] und grünen Kugeln gezogen.



__$b) \;\;$__ **Bestimme** die Wahrscheinlichkeit eine grüne Kugel zu ziehen.

[[ 20    ]]%



__$c) \;\;$__ **Bestimme** die Wahrscheinlichkeit eine schwarze Kugel zu ziehen.

[[ 75    ]]%












