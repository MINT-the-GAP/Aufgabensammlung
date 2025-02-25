<!--
version:  0.0.1

language: de

@style
input {
    text-align: center;
}
@end

formula: \carry   \textcolor{red}{\scriptsize #1}
formula: \digit   \rlap{\carry{#1}}\phantom{#2}#2
formula: \permil  \text{‰}

import: https://raw.githubusercontent.com/LiaTemplates/Tikz-Jax/main/README.md

script: https://cdn.jsdelivr.net/gh/LiaTemplates/Tikz-Jax@main/dist/index.js


tags: Baumdiagramm, Hypergeometrische Verteilung, sehr leicht, sehr niedrig, Bestimme, Skizziere

comment: Bestimme mithilfe eines Baumdiagramms die Wahrscheinlichkeiten für Ereignisse und Ergebnisse.

author: Martin Lommatzsch

-->




# Fragen zum Baumdiagramm

In einem Gefäß befinden sich 8 rote (R), 3 grüne (G) und 12 blaue (B) Kugeln für zwei Ziehungen ohne Zurücklegen. **Runde** falls nötig auf drei Nachkommastellen.


<br>


 __$a) \;\;$__ **Skizziere** ein Baumdiagramm für den beschriebenen Fall. 

<br>

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

<br>
<br>
<br>


 __$b) \;\;$__ **Bestimme**, wie hoch die Wahrscheinlichkeit ist bei der ersten Ziehung eine blaue Kugel zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. Runde falls nötig auf drei Nachkommastellen.

<br>

[[  52,174  ]]$\%$.
*************
$$
\begin{align*}
   \frac{12}{23} & \approx 52,174\%
\end{align*}
$$
*************

<br>
<br>
<br>

 __$c) \;\;$__ **Bestimme**, wie hoch die Wahrscheinlichkeit ist zwei grüne Kugel hintereinander zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. 

<br>

[[   1,189  ]]$\%$.
*************
$$
\begin{align*}
   \frac{3}{23} \cdot \frac{2}{22} \approx 1,189\%
\end{align*}
$$
*************


<br>
<br>
<br>

 __$d) \;\;$__ **Bestimme**, wie viele Pfade bei drei Ziehungen für die Möglichkeit existieren von jeder Farbe eine Kugel zu ziehen. 

<br>

[[   6   ]] 
*************
RBG, RGB, BGR, BRG, GBR, GRB
*************


<br>
<br>
<br>

 __$e) \;\;$__ **Bestimme**, wie viele Pfade bei drei Ziehungen für die Möglichkeit existieren eine Farbe zweimal zu ziehen. 

<br>

[[   18  ]] 
*************
$$
  RRG, RGR, GRR, RRB, RBR, BRR, BBG, BGB, GBB, BBR, BRB, RBB, GGR, GRG, RGG, GGB, GBG, BGG 
$$
*************


<br>
<br>
<br>

 __$f) \;\;$__ **Bestimme**, wie hoch die Wahrscheinlichkeit bei zwei Ziehungen ohne Zurücklegen ist zwei blaue Kugeln zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. 


<br>

[[  26,087  ]]\% 
*************
$$
  \frac{12 \cdot 11}{23 \cdot 22} \approx 26,087 \%
$$
*************


<br>
<br>
<br>

 __$g) \;\;$__ **Bestimme**, wie hoch die Wahrscheinlichkeit bei drei Ziehungen ohne Zurücklegen ist mehr als eine rote Kugel zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. 

<br>

[[  11,067  ]]$\%$.
*************
$$
\begin{align*}
\frac{8}{23} \cdot \frac{7}{22} \approx 11,067 \%
\end{align*}
$$
*************


<br>
<br>
<br>

 __$h) \;\;$__ **Bestimme**, wie hoch die Wahrscheinlichkeit bei zwei Ziehungen ohne Zurücklegen ist weniger als zwei grüne Kugeln zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. 

<br>

[[  98,814  ]]$\%$.
*************
$$
\begin{align*}
  1-  \frac{3}{23} \cdot \frac{2}{22} \approx 98,814\%
\end{align*}
$$
*************


<br>
<br>
<br>

 __$i) \;\;$__ **Bestimme**, wie hoch die Wahrscheinlichkeit bei zwei Ziehungen ohne Zurücklegen ist höchstens zwei rote Kugel zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. 

<br>

[[  100  ]]$\%$.
*************
Alle Optionen sind zulässig.
*************

 


<br>
<br>
<br>
<br>
<br>