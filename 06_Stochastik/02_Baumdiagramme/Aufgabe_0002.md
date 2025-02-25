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

In einem Gefäß befinden sich 11 schwarze und 15 weiße Kugeln für drei Ziehungen ohne Zurücklegen. **Runde** falls nötig auf drei Nachkommastellen.


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
		\draw[->, thick] (0.5,0) -- (2.5,-2);
	  \node[rotate=315] (1) at (2.5,-1)  {S \; $\frac{11}{26}$}; %rechts	
		
		\draw[->, thick] (-0.5,0) -- (-2.5,-2);
	  \node[rotate=45] (2) at (-2.5,-1)  {W \; $\frac{15}{26}$}; %links
		
		
		
	  \node (A1) at (-3,-2.5)  {$\frac{15}{23}$};
		\node (B2) at (3,-2.5)  {$\frac{11}{23}$};
		
		\draw[->, thick] (3.5,-3) -- (5,-5)   ; %A12 %rechtsrechts
		\node[rotate=315] (11) at (5,-4)  {S \; $\frac{10}{25}$}; %rechtsrechts	
		
		\draw[->, thick] (-3.5,-3) -- (-5,-5)  ; %A11 %linkslinks
		\node[rotate=45] (22) at (-5,-4)  {W \; $\frac{14}{25}$}; %linkslinks	
		
		\draw[->, thick] (3,-3) -- (2,-5)  ; %B22 %linksrechts
		\node[rotate=55] (21) at (1.65,-4)  {W \; $\frac{15}{25}$}; %linksrechts	
		
		\draw[->, thick] (-3,-3) -- (-2,-5) ; %B21 %rechtslinks
	  \node[rotate=305] (12) at (-1.65,-4)  {S \; $\frac{11}{25}$}; %rechtslinks
	
		
	  \node (A12) at (-2,-6)  {$\frac{15}{26} \cdot \frac{11}{25}$}; %linksrechts
		\node (B22) at (2,-6)  {$\frac{11}{26} \cdot \frac{15}{25}$}; %rechtslinks
	  \node (A11) at (-5.5,-6)  {$\frac{15}{26} \cdot \frac{14}{25}$}; %linkslinks
		\node (B21) at (5.5,-6)  {$\frac{11}{26} \cdot \frac{10}{25}$}; %rechtsrechts
		
		\draw[->, thick] (6,-6.5) -- (8,-9)   ; %A12 %rechtsrechtsrechts
		\node[rotate=315] (111) at (8,-8)  {S \; $\frac{9}{24}$}; %rechtsrechtsrechts	
		\node[rotate=270] (B111) at (8,-10.5)  {$\frac{11}{26} \cdot \frac{10}{25}  \cdot \frac{9}{24}    $}; %rechtsrechtsrechts
		
		
		\draw[->, thick] (5.5,-6.5) -- (5.5,-9)   ; %A12 %rechtsrechtslinks
		\node[rotate=90] (1113) at (4.95,-8)  {W \; $\frac{15}{24}$}; %rechtsrechtslinks
		\node[rotate=270] (B1113) at (5.5,-10.5)  {$\frac{11}{26} \cdot \frac{10}{25} \cdot \frac{15}{24}    $}; %rechtsrechtslinks
	
	
		\draw[->, thick] (-6,-6.5) -- (-8,-9)   ; %A12 %linkslinkslinks
		\node[rotate=45] (222) at (-8,-8)  {W \; $\frac{13}{24}$}; %linkslinkslinks	
		\node[rotate=270] (B222) at (-8,-10.5)  {$\frac{15}{26} \cdot  \frac{14}{25} \cdot  \frac{13}{24}   $}; %linkslinkslinks
		
		
		\draw[->, thick] (-5.5,-6.5) -- (-5.5,-9)   ; %A12 %linkslinksrechts
		\node[rotate=270] (2223) at (-4.95,-8)  {S \; $\frac{15}{24}$}; %linkslinksrechts
		\node[rotate=270] (B2223) at (-5.5,-10.5)  {$\frac{15}{26} \cdot  \frac{14}{25} \cdot \frac{11}{24}   $}; %linkslinksrechts
		
		
		\draw[->, thick] (-2.25,-6.5) -- (-2.75,-9)   ; %A12 % 
		\node[rotate=70] (2224) at (-2.95,-8)  {W \; $\frac{14}{24}$}; %linkslinksrechts
		\node[rotate=270] (B2224) at (-2.75,-10.5)  {$\frac{15}{26}   \cdot \frac{11}{25} \cdot  \frac{14}{24}  $}; %linksrechtslinks
		
		\draw[->, thick] (-1.75,-6.5) -- (-1.25,-9)   ; %A12 % 
		\node[rotate=290] (2225) at (-0.95,-8)  {S \; $\frac{10}{24}$}; %linkslinksrechts
		\node[rotate=270] (B2225) at (-1.125,-10.5)  {$\frac{15}{26} \cdot \frac{11}{25} \cdot \frac{10}{24}   $}; %linksrechtsrechts
		
		\draw[->, thick] (2.25,-6.5) -- (2.75,-9)   ; %A12 % 
		\node[rotate=290] (2226) at (2.95,-8)  {S \; $\frac{10}{24}$}; %linkslinksrechts
		\node[rotate=270] (B2226) at (2.75,-10.5)  {$\frac{11}{26} \cdot \frac{15}{25} \cdot \frac{10}{24}   $}; %rechtslinksrechts
		
		\draw[->, thick] (1.75,-6.5) -- (1.25,-9)   ; %A12 % 
		\node[rotate=70] (2227) at (0.95,-8)  {W \; $\frac{14}{24}$}; %linkslinksrechts		
		\node[rotate=270] (B2227) at (1.125,-10.5)  {$\frac{11}{26} \cdot \frac{15}{25} \cdot \frac{14}{24}     $}; %rechtslinkslinks
\end{tikzpicture} 
```
</center>

*************

<br>
<br>
<br>


 __$b) \;\;$__ **Bestimme**, wie hoch die Wahrscheinlichkeit ist bei der ersten Ziehung eine weiße Kugel zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. Runde falls nötig auf drei Nachkommastellen.

<br>

[[  57,692  ]]$\%$.
*************
$$
\begin{align*}
   \frac{15}{26} & \approx 0,57692 = 57,692\%
\end{align*}
$$
*************

<br>
<br>
<br>

 __$c) \;\;$__ **Bestimme**, wie hoch die Wahrscheinlichkeit ist drei schwarze Kugeln hintereinander zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. 

<br>

[[   6,346  ]]$\%$.
*************
$$
\begin{align*}
   \frac{11}{26} \cdot \frac{10}{25} \cdot \frac{9}{24} \approx 6,346\%
\end{align*}
$$
*************


<br>
<br>
<br>

 __$d) \;\;$__ **Bestimme**, wie viele Pfade für die Möglichkeit existieren genau zwei weiße Kugeln zu ziehen.  

<br>

[[   3   ]] 
*************
WWS, WSW und SWW
*************


<br>
<br>
<br>

 __$e) \;\;$__ **Bestimme**, wie viele Pfade für die Möglichkeit existieren mindestens eine schwarze Kugel zu ziehen. 

<br>

[[   7   ]] 
*************
$$
  WWS, WSW, SWW, WSS, SWS, SSW und SSS
$$
*************


<br>
<br>
<br>

 __$f) \;\;$__ **Bestimme**, wie hoch die Wahrscheinlichkeit ist mindestens zwei schwarze Kugeln zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. 


<br>

[[  38,077  ]]$\%$.
*************
$$
\begin{align*}
  \frac{11}{26} \cdot \frac{10}{25} \cdot \frac{9}{24} + 3 \cdot \frac{15}{26} \cdot \frac{11}{25} \cdot \frac{10}{24} \approx 38,077\%
\end{align*}
$$
*************


<br>
<br>
<br>

 __$g) \;\;$__ **Bestimme**, wie hoch die Wahrscheinlichkeit ist mehr als eine weiße Kugel zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. 

<br>

[[  93,653  ]]$\%$.
*************
$$
\begin{align*}
1- \frac{11}{26} \cdot \frac{10}{25} \cdot \frac{9}{24} \approx 93,653 \%
\end{align*}
$$
*************


<br>
<br>
<br>

 __$h) \;\;$__ **Bestimme**, wie hoch die Wahrscheinlichkeit ist weniger als zwei weiße Kugeln zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. 

<br>

[[  38,077  ]]$\%$.
*************
$$
\begin{align*}
   \frac{11}{26} \cdot \frac{10}{25} \cdot \frac{9}{24} + 3 \cdot \frac{15}{26} \cdot \frac{11}{25} \cdot \frac{10}{24} \approx 38,077\%
\end{align*}
$$
*************


<br>
<br>
<br>

 __$i) \;\;$__ **Bestimme**, wie hoch die Wahrscheinlichkeit ist höchstens zwei schwarze Kugel zu ziehen. Gib die Wahrscheinlichkeit in Prozent an. 

<br>

[[  93,653  ]]$\%$.
*************
$$
\begin{align*}
   1- \frac{11}{26} \cdot \frac{10}{25} \cdot \frac{9}{24}  \approx 93,653 \%
\end{align*}
$$
*************

 


<br>
<br>
<br>
<br>
<br>