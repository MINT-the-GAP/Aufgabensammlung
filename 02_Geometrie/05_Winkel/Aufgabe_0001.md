<!--
version:  0.0.1

language: de

@style
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
@end

formula: \carry   \textcolor{red}{\scriptsize #1}
formula: \digit   \rlap{\carry{#1}}\phantom{#2}#2
formula: \permil  \text{‰}

import: https://raw.githubusercontent.com/LiaTemplates/Tikz-Jax/main/README.md

script: https://cdn.jsdelivr.net/gh/LiaTemplates/Tikz-Jax@main/dist/index.js


tags: Winkel, Winkelbeziehungen, sehr leicht, sehr niedrig, Angeben

comment: Ein Winkelmaß ist bekannt, wie groß ist das gesuchte Winkelmaß?

author: Martin Lommatzsch

-->




# Direkte Winkelbeziehungen


**Gib** das gesuchte Winkelmaß sowie die Winkelbeziehung zum gegebenen Winkel **an**. Es gilt $f \parallel g$. (Die graphische Darstellung dient zur Orientierung und entspricht nicht den realen Werten.)

<br>
<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__

<center>
```latex  @tikz 
\begin{tikzpicture} [scale=2]
\begin{scope}[yshift=0cm]
  \coordinate[label=center:$ $] (Z) at (0,0);
  \coordinate[label=center:$ $] (B) at (0:2.5);
  \coordinate[label=center:$ $] (A) at (0:-1.5);
  \coordinate[label=center:$ $] (G) at (60:3);
  \coordinate[label=center:$ $] (H) at (60:-1);
    \begin{scope}[yshift=1.5cm]      
      \coordinate[label=center:$ $] (C) at (0:2.5);
      \coordinate[label=center:$ $] (D) at (0:-1.5);
    \end{scope} 
  \draw[very thick] (A) -- (B) node[right] {\LARGE $f$};
  \draw[very thick] (D) -- (C) node[right] {\LARGE $g$};
  \draw[very thick] (H) -- (Z) -- (G)  node[right] {\LARGE $h$};
    \draw[very thick] (0.5,0) arc (0:60:0.5);
    \node at (0.3,0.15) {\Large $55^\circ$};
    \draw[very thick] (0.875+0.5,1.5) arc (0:60:0.5);
    \node at (0.875+0.3,1.65) {\LARGE $\chi$};
\end{scope} 
\end{tikzpicture}
```
</center>

--> $\chi =$ [[ 55 ]]$^\circ$ und es handelt sich um die Beziehung eines [[Nebenwinkels|Scheitelwinkels|(Stufenwinkels)|Wechselwinkels]].

<br>
</div>

<div class="flex-child">
<br>


__$b)\;\;$__

<center>
```latex  @tikz 
\begin{tikzpicture} [scale=2]
\begin{scope}[yshift=0cm]
  \coordinate[label=center:$ $] (Z) at (0,0);
  \coordinate[label=center:$ $] (B) at (0:2.5);
  \coordinate[label=center:$ $] (A) at (0:-1.5);
  \coordinate[label=center:$ $] (G) at (60:3);
  \coordinate[label=center:$ $] (H) at (60:-1);
    \begin{scope}[yshift=1.5cm]      
      \coordinate[label=center:$ $] (C) at (0:2.5);
      \coordinate[label=center:$ $] (D) at (0:-1.5);
    \end{scope} 
  \draw[very thick] (A) -- (B) node[right] {\LARGE $f$};
  \draw[very thick] (D) -- (C) node[right] {\LARGE $g$};
  \draw[very thick] (H) -- (Z) -- (G)  node[right] {\LARGE $h$};
    \draw[very thick] (0.5,0) arc (0:60:0.5);
    \node at (0.3,0.15) {\Large $\delta$};
    %\draw[very thick] (0.875+0.5,1.5) arc (0:60:0.5);
    %\node at (0.875+0.3,1.65) {\LARGE $\chi$};
    \draw[very thick] (-0.5,0) arc (180:60:0.5);
    \node at (-0.175,0.15) {\Large $117^\circ$};
\end{scope} 
\end{tikzpicture}
```
</center>

--> $\delta =$ [[ 63 ]]$^\circ$ und es handelt sich um die Beziehung eines [[(Nebenwinkels)|Scheitelwinkels|Stufenwinkels|Wechselwinkels]].

</div>

</section>
<br>
<br>
<br>
<br>
<br>