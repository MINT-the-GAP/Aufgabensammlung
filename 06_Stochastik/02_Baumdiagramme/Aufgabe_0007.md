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


tags: Baumdiagramm, bedingte Wahrscheinlichkeit, leicht, niedrig, Bestimme

comment: Bestimme mithilfe eines Baumdiagramms die bedingten Wahrscheinlichkeiten.

author: Martin Lommatzsch

-->




# Bedingte Wahrscheinlichkeit am Baumdiagramm


Beim folgenden Baumdiagramm ist ein Szenario dargestellt, indem rote (R), pinke (P), blaue (B), grüne (G), weiße (W) und schwarze (S) Kugeln vorkommen. Löse alle Teilaufgaben. **Runde** falls nötig auf drei Nachkommastellen.


<br>





<center>
```latex  @tikz 
\begin{tikzpicture}[scale=1,>=latex]	
		\node (F) at (0,1)  {\Large Start};
		\draw[->, thick] (0.5,0) -- (2.5,-2);
		\node[rotate=0] (1) at (2.5,-1)  {\Large $W$}; %rechts	
		
		\draw[->, thick] (-0.5,0) -- (-2.5,-2);
		\node[rotate=0] (2) at (-2.5,-1)  {\Large $G$}; %links
		
		
		\node (A1) at (-3,-2.5)  {\Large $\frac{7}{10}$};
		\node (B2) at (3,-2.5)  {\Large $\frac{3}{10}$};
		
		\draw[->, thick] (-3.5,-3) -- (-5,-5)  ; %A11 %linkslinks
		\node[rotate=0] (22) at (-5,-4)  {\Large $S | G $ }; %linkslinks	

		\draw[->, thick] (-3,-3) -- (-2,-5) ; %B21 %rechtslinks
		\node[rotate=0] (12) at (-1.65,-4)  {\Large $B | G  $  }; %rechtslinks


		\draw[->, thick] (3,-3) -- (2,-5)  ; %B22 %linksrechts
		\node[rotate=0] (21) at (1.65,-4)  {\Large $P | W $  }; %linksrechts	

		\draw[->, thick] (3.5,-3) -- (5,-5)   ; %A12 %rechtsrechts
		\node[rotate=0] (11) at (5,-4)  {\Large $  R | W $  }; %rechtsrechts	
		
		
		\node (A11) at (-5.5,-6)  {\Large $42\%$}; %linkslinks
		\node (A12) at (-2,-6)  {\Large $28\%$}; %linksrechts
		\node (B22) at (2,-6)  {\Large $26,25\%$}; %rechtslinks
		\node (B21) at (5.5,-6)  {\Large $3,75\%$}; %rechtsrechts 

		
		%\node (A11) at (-5.5,-6)  {\Large $\frac{7}{10} \cdot \frac{3}{5}$}; %linkslinks
		%\node (A12) at (-2,-6)  {\Large $\frac{7}{10} \cdot \frac{2}{5} $}; %linksrechts
		%\node (B22) at (2,-6)  {\Large $\frac{3}{10} \cdot \frac{7}{8}$}; %rechtslinks
		%\node (B21) at (5.5,-6)  {\Large $\frac{3}{10} \cdot \frac{1}{8}$}; %rechtsrechts 
\end{tikzpicture} 
```
</center>


<br>

__$a) \;\;$__ **Fülle** die Lücken im Lückentext **aus**.

Wenn bei der ersten Ziehung eine [[ grüne     ]] Kugel gezogen wurde, wird in der zweiten Ziehung aus der Urne mit den [[ schwarzen ]] und blauen Kugeln gezogen. Wird hingegen bei der ersten Ziehung eine [[  weiße    ]] Kugel gezogen, dann wird in der zweiten Ziehung aus einer Urne mit [[ pinken    ]] und roten Kugeln gezogen.

<br>

__$b) \;\;$__ **Bestimme** die Wahrscheinlichkeit eine blaue Kugel zu ziehen.

[[ 40    ]]%

<br>

__$c) \;\;$__ **Bestimme** die Wahrscheinlichkeit eine pinke Kugel zu ziehen.

[[ 87,5  ]]%





<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>