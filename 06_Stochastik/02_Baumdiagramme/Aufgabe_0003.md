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


tags: Baumdiagramm, Binomialverteilung, sehr leicht, sehr niedrig, Bestimme, Skizziere

comment: Bestimme mithilfe eines Baumdiagramms die Wahrscheinlichkeiten für Ereignisse und Ergebnisse.

author: Martin Lommatzsch

-->




# Fragen zum Baumdiagramm

In einem Gefäß befinden sich 5 schwarze (S), 7 grüne (G) und 11 weiße (W) Kugeln für zwei Ziehungen mit Zurücklegen. **Runde** falls nötig auf drei Nachkommastellen.


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

<br>
<br>
<br>


 __$b) \;\;$__ **Bestimme**, wie hoch die Wahrscheinlichkeit ist bei der ersten Ziehung eine grüne Kugel zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. Runde falls nötig auf drei Nachkommastellen.

<br>

[[  30,435  ]]$\%$.
*************
$$
\begin{align*}
   \frac{7}{23} & \approx 30,435\%
\end{align*}
$$
*************

<br>
<br>
<br>

 __$c) \;\;$__ **Bestimme**, wie hoch die Wahrscheinlichkeit ist erst eine schwarze dann eine weiße Kugel hintereinander zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. 

<br>

[[  10,397  ]]$\%$.
*************
$$
\begin{align*}
   \frac{5}{23} \cdot \frac{11}{23} \approx 10,397\%
\end{align*}
$$
*************


<br>
<br>
<br>

 __$d) \;\;$__ **Bestimme**, wie viele Pfade für die Möglichkeit existieren genau eine weiße und eine grüne Kugeln zu ziehen. 

<br>

[[   1   ]] 
*************
WW
*************


<br>
<br>
<br>

 __$e) \;\;$__ **Bestimme**, wie viele Pfade für die Möglichkeit existieren mindestens eine schwarze Kugel zu ziehen. 

<br>

[[   3   ]] 
*************
$$
  SS, SW, SG
$$
*************


<br>
<br>
<br>

 __$f) \;\;$__ **Bestimme**, wie viele Pfade für die Möglichkeit existieren von jeder Kugel eine zu ziehen, wenn drei mal gezogen würde. 


<br>

[[   6   ]] 
*************
$$
  SGW, SWG, WSG, GSW, GWS, WGS
$$
*************


<br>
<br>
<br>

 __$g) \;\;$__ **Bestimme**, wie hoch die Wahrscheinlichkeit ist jede Kugelfarbe bei drei Ziehungen mit Zurücklegen einmal zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. 

<br>

[[  18,986  ]]$\%$.
*************
$$
\begin{align*}
6 \cdot \frac{5}{23} \cdot \frac{7}{23} \cdot \frac{11}{23} \approx 18,986 \%
\end{align*}
$$
*************


<br>
<br>
<br>

 __$h) \;\;$__ **Bestimme**, wie hoch die Wahrscheinlichkeit bei drei Ziehungen mit Zurücklegen ist, bei der erst eine schwarze, dann eine grüne und abschließend eine weiße Kugel zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. 

<br>

[[   3,164  ]]$\%$.
*************
$$
\begin{align*}
   \frac{5}{23} \cdot \frac{7}{23} \cdot \frac{11}{23} \approx 3,164\%
\end{align*}
$$
*************


<br>
<br>
<br>

 __$i) \;\;$__ **Bestimme**, wie hoch die Wahrscheinlichkeit bei drei Ziehungen mit Zurücklegen ist höchstens zwei schwarze Kugel zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. 

<br>

[[  86,241  ]]$\%$.
*************
$$
\begin{align*}
  1 -  \left(\frac{7}{23}\right)^3 -  \left(\frac{11}{23}\right)^3 \approx 86,241 \%
\end{align*}
$$
*************

 


<br>
<br>
<br>
<br>
<br>