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
		\node[rotate=0] (1) at (2.5,-1)  {\Large $S$}; %rechts	
		
		\draw[->, thick] (-0.5,0) -- (-2.5,-2);
		\node[rotate=0] (2) at (-2.5,-1)  {\Large $P$}; %links
		
		
		\node (A1) at (-3,-2.5)  {\Large $\frac{4}{25}$};
		\node (B2) at (3,-2.5)  {\Large $\frac{21}{25}$};
		
		\draw[->, thick] (-3.5,-3) -- (-5,-5)  ; %A11 %linkslinks
		\node[rotate=0] (22) at (-5,-4)  {\Large $R | P $ }; %linkslinks	

		\draw[->, thick] (-3,-3) -- (-2,-5) ; %B21 %rechtslinks
		\node[rotate=0] (12) at (-1.65,-4)  {\Large $G | P  $  }; %rechtslinks


		\draw[->, thick] (3,-3) -- (2,-5)  ; %B22 %linksrechts
		\node[rotate=0] (21) at (1.65,-4)  {\Large $B | S $  }; %linksrechts	

		\draw[->, thick] (3.5,-3) -- (5,-5)   ; %A12 %rechtsrechts
		\node[rotate=0] (11) at (5,-4)  {\Large $  W | S $  }; %rechtsrechts	
		
		
		\node (A11) at (-5.5,-6)  {\Large $14,4\%$}; %linkslinks
		\node (A12) at (-2,-6)  {\Large $1,6\%$}; %linksrechts
		\node (B22) at (2,-6)  {\Large $33,6\%$}; %rechtslinks
		\node (B21) at (5.5,-6)  {\Large $50,4\%$}; %rechtsrechts 

		
		%\node (A11) at (-5.5,-6)  {\Large $\frac{4}{25} \cdot \frac{9}{10}$}; %linkslinks
		%\node (A12) at (-2,-6)  {\Large $\frac{4}{25} \cdot \frac{1}{10} $}; %linksrechts
		%\node (B22) at (2,-6)  {\Large $\frac{21}{25} \cdot \frac{4}{10}$}; %rechtslinks
		%\node (B21) at (5.5,-6)  {\Large $\frac{21}{25} \cdot \frac{6}{10}$}; %rechtsrechts 
\end{tikzpicture} 
```
</center>


<br>

__$a) \;\;$__ **Fülle** die Lücken im Lückentext **aus**.

Wenn bei der ersten Ziehung eine [[ pinke    ]] Kugel gezogen wurde, wird in der zweiten Ziehung aus der Urne mit den [[ roten    ]] und grünen Kugeln gezogen. Wird hingegen bei der ersten Ziehung eine [[ schwarze ]] Kugel gezogen, dann wird in der zweiten Ziehung aus einer Urne mit [[ blauen   ]] und weißen Kugeln gezogen.

<br>

__$b) \;\;$__ **Bestimme** die Wahrscheinlichkeit eine rote Kugel zu ziehen.

[[ 90    ]]%

<br>

__$c) \;\;$__ **Bestimme** die Wahrscheinlichkeit eine weiße Kugel zu ziehen.

[[ 60    ]]%





<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>