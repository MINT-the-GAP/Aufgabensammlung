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


In einem Gefäß befinden sich 6 schwarze und 14 weiße Kugeln für drei Ziehungen mit Zurücklegen.


<br>


 __$a) \;\;$__ Skizziere ein Baumdiagramm für den beschriebenen Fall. 

<br>

[[!]]
<script>true</script>
*************

<center>
```latex  @tikz 
\begin{tikzpicture}[scale=1,>=latex]
	  \node (F) at (0,1)  {\LARGE Start};
		\draw[->, thick] (0.5,0) -- (2.5,-2);
	  \node[rotate=315] (1) at (2.5,-1)  {\LARGE W \; $\frac{14}{20}$}; %rechts	
		
		\draw[->, thick] (-0.5,0) -- (-2.5,-2);
	  \node[rotate=45] (2) at (-2.5,-1)  {\LARGE S \; $\frac{6}{20}$}; %links
		
		
		
	  \node (A1) at (-3,-2.5)  {\LARGE $\frac{6}{20}$};
		\node (B2) at (3,-2.5)  {\LARGE $\frac{14}{20}$};
		
		\draw[->, thick] (3.5,-3) -- (5,-5)   ; %A12 %rechtsrechts
		\node[rotate=315] (11) at (5,-4)  {\LARGE W \; $\frac{14}{20}$}; %rechtsrechts	
		
		\draw[->, thick] (-3.5,-3) -- (-5,-5)  ; %A11 %linkslinks
		\node[rotate=45] (22) at (-5,-4)  {\LARGE S \; $\frac{6}{20}$}; %linkslinks	
		
		\draw[->, thick] (3,-3) -- (2,-5)  ; %B22 %linksrechts
		\node[rotate=55] (21) at (1.65,-4)  {\LARGE S \; $\frac{6}{20}$}; %linksrechts	
		
		\draw[->, thick] (-3,-3) -- (-2,-5) ; %B21 %rechtslinks
	  \node[rotate=305] (12) at (-1.65,-4)  {\LARGE W \; $\frac{14}{20}$}; %rechtslinks
	
		
	  \node (A12) at (-2,-6)  {\LARGE $\frac{6}{20} \cdot \frac{14}{20}$}; %linksrechts
		\node (B22) at (2,-6)  {\LARGE $\frac{14}{20} \cdot \frac{6}{20}$}; %rechtslinks
	  \node (A11) at (-5.5,-6)  {\LARGE $\frac{6}{20} \cdot \frac{6}{20}$}; %linkslinks
		\node (B21) at (5.5,-6)  {\LARGE $\frac{14}{20} \cdot \frac{14}{20}$}; %rechtsrechts
		
		\draw[->, thick] (6,-6.5) -- (8,-9)   ; %A12 %rechtsrechtsrechts
		\node[rotate=315] (111) at (8,-8)  {\LARGE W \; $\frac{14}{20}$}; %rechtsrechtsrechts	
		\node[rotate=270] (B111) at (8,-10.5)  {\LARGE $\frac{14}{20} \cdot \frac{14}{20} \cdot \frac{14}{20}    $}; %rechtsrechtsrechts
		
		
		\draw[->, thick] (5.5,-6.5) -- (5.5,-9)   ; %A12 %rechtsrechtslinks
		\node[rotate=90] (1113) at (4.95,-8)  {\LARGE S \; $\frac{6}{20}$}; %rechtsrechtslinks
		\node[rotate=270] (B1113) at (5.5,-10.5)  {\LARGE $\frac{14}{20}\cdot \frac{14}{20} \cdot \frac{6}{20}    $}; %rechtsrechtslinks
	
	
		\draw[->, thick] (-6,-6.5) -- (-8,-9)   ; %A12 %linkslinkslinks
		\node[rotate=45] (222) at (-8,-8)  {\LARGE S \; $\frac{6}{20}$}; %linkslinkslinks	
		\node[rotate=270] (B222) at (-8,-10.5)  {\LARGE $ \frac{6}{20}\cdot \frac{6}{20}\cdot \frac{6}{20}    $}; %linkslinkslinks
		
		
		\draw[->, thick] (-5.5,-6.5) -- (-5.5,-9)   ; %A12 %linkslinksrechts
		\node[rotate=270] (2223) at (-4.95,-8)  {\LARGE W \; $\frac{14}{20}$}; %linkslinksrechts
		\node[rotate=270] (B2223) at (-5.5,-10.5)  {\LARGE $ \frac{6}{20}\cdot \frac{6}{20} \cdot \frac{14}{20}   $}; %linkslinksrechts
		
		
		\draw[->, thick] (-2.25,-6.5) -- (-2.75,-9)   ; %A12 % 
		\node[rotate=70] (2224) at (-2.95,-8)  {\LARGE S \; $\frac{6}{20}$}; %linkslinksrechts
		\node[rotate=270] (B2224) at (-2.75,-10.5)  {\LARGE $  \frac{6}{20}\cdot \frac{6}{20}\cdot \frac{14}{20}   $}; %linksrechtslinks
		
		\draw[->, thick] (-1.75,-6.5) -- (-1.25,-9)   ; %A12 % 
		\node[rotate=290] (2225) at (-0.95,-8)  {\LARGE W \; $\frac{14}{20}$}; %linkslinksrechts
		\node[rotate=270] (B2225) at (-1.125,-10.5)  {\LARGE $ \frac{14}{20}\cdot \frac{14}{20} \cdot \frac{6}{20}   $}; %linksrechtsrechts
		
		\draw[->, thick] (2.25,-6.5) -- (2.75,-9)   ; %A12 % 
		\node[rotate=290] (2226) at (2.95,-8)  {\LARGE W \; $\frac{14}{20}$}; %linkslinksrechts
		\node[rotate=270] (B2226) at (2.75,-10.5)  {\LARGE $\frac{14}{20}\cdot \frac{14}{20}  \cdot \frac{6}{20}   $}; %rechtslinksrechts
		
		\draw[->, thick] (1.75,-6.5) -- (1.25,-9)   ; %A12 % 
		\node[rotate=70] (2227) at (0.95,-8)  {\LARGE S \; $\frac{6}{20}$}; %linkslinksrechts		
		\node[rotate=270] (B2227) at (1.125,-10.5)  {\LARGE $ \frac{6}{20}\cdot \frac{6}{20}\cdot \frac{14}{20}   $}; %rechtslinkslinks
	
\end{tikzpicture} 
```
</center>

*************

<br>
<br>
<br>

 __$b) \;\;$__ **Bestimme**, wie hoch ist die Wahrscheinlichkeit bei der ersten Ziehung eine weiße Kugel zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. Runde falls nötig auf drei Nachkommastellen.

<br>

[[  70  ]]$\%$.
*************
$$
\begin{align*}
   \frac{14}{20} & = 0,7 = 70\%
\end{align*}
$$
*************

<br>
<br>
<br>

 __$c) \;\;$__ **Bestimme**, wie hoch ist die Wahrscheinlichkeit drei schwarze Kugeln hintereinander zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. 

<br>

[[  2,7  ]]$\%$.
*************
$$
\begin{align*}
   \left(\frac{6}{20}\right)^3 = 2,7\%
\end{align*}
$$
*************


<br>
<br>
<br>

 __$d) \;\;$__ **Bestimme**, wie viele Pfade existieren für die Möglichkeit genau zwei weiße Kugeln zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. 

<br>

[[  3  ]].
*************
$WWS$, $WSW$ und $SWW$
*************


<br>
<br>
<br>

 __$e) \;\;$__ **Bestimme**, wie viele Pfade existieren für die Möglichkeit mindestens eine schwarze Kugel zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. 

<br>

[[  7  ]].
*************
$$
  $WWS$, $WSW$, $SWW$, $WSS$, $SWS$, $SSW$ und $SSS$
$$
*************


<br>
<br>
<br>

 __$f) \;\;$__ **Bestimme**, wie hoch ist die Wahrscheinlichkeit mindestens zwei schwarze Kugeln zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. 


<br>

[[  21,6  ]]$\%$.
*************
$$
\begin{align*}
   \left( \frac{6}{20}\right)^3 + 3 \left( \frac{6}{20}\right)^2 \cdot \frac{14}{20} = 21,6\%
\end{align*}
$$
*************


<br>
<br>
<br>

 __$g) \;\;$__ **Bestimme**, wie hoch ist die Wahrscheinlichkeit mehr als eine weiße Kugel zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. 

<br>

[[  97,3  ]]$\%$.
*************
$$
\begin{align*}
  1 - \left( \frac{6}{20}\right)^3 = 97,3\%
\end{align*}
$$
*************


<br>
<br>
<br>

 __$h) \;\;$__ **Bestimme**, wie hoch ist die Wahrscheinlichkeit weniger als zwei weiße Kugeln zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. 

<br>

[[  21,6  ]]$\%$.
*************
$$
\begin{align*}
   \left( \frac{6}{20}\right)^3 + 3 \left( \frac{6}{20}\right)^2 \cdot \frac{14}{20} = 21,6\%
\end{align*}
$$
*************


<br>
<br>
<br>

 __$i) \;\;$__ **Bestimme**, wie hoch ist die Wahrscheinlichkeit höchstens zwei schwarze Kugel zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. 

<br>

[[  97,3  ]]$\%$.
*************
$$
\begin{align*}
   1 - \left( \frac{6}{20}\right)^3 = 97,3\%
\end{align*}
$$
*************

 


<br>
<br>
<br>
<br>
<br>