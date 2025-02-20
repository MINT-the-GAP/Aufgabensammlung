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


tags: Winkel, Winkelbeziehungen, leicht, sehr niedrig, Angeben

comment: Ein Winkelmaß ist bekannt, wie groß ist das gesuchte Winkelmaß?

author: Martin Lommatzsch

-->




# Winkelbeziehungen


**Gib** das gesuchte Winkelmaß **an**. Es gilt $f \parallel g$. (Die graphische Darstellung dient zur Orientierung und entspricht nicht den realen Werten.)

<br>

<section class="flex-container">

<div class="flex-child">
<br>
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
    %\draw[very thick] (0.5,0) arc (0:60:0.5);
    %\node at (0.3,0.15) {\Large $43^\circ$};
    \draw[very thick] (0.5,0) arc (0:-120:0.5);
    \node at (0.2,-0.225) {\Large $135^\circ$};
    %\draw[very thick] (0.5,0) arc (0:-120:0.5);
    %\node at (0.2,-0.175) {\Large $133^\circ$};
    \draw[very thick] (0.875+0.5,1.5) arc (0:60:0.5);
    \node at (0.875+0.3,1.65) {\LARGE $\epsilon$};
    %\draw[very thick] (0.875-0.5,1.5) arc (180:60:0.5);
    %\node at (0.875-0.15,1.65) {\Large $133^\circ$};
\end{scope} 
\end{tikzpicture}
```
</center>

$\epsilon =$ [[ 45 ]]$^\circ$

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
    %\draw[very thick] (0.5,0) arc (0:-120:0.5);
    %\node at (0.2,-0.225) {\Large $122^\circ$};
    %\draw[very thick] (0.875+0.5,1.5) arc (0:60:0.5);
    %\node at (0.875+0.3,1.65) {\LARGE $\chi$};
    \draw[very thick] (0.875+0.5,1.5) arc (0:-120:0.5);
    \node at (0.875+0.2,1.65-0.35) {\Large $128^\circ$};
    \draw[very thick] (-0.5,0) arc (180:60:0.5);
    \node at (-0.15,0.225) {\LARGE $\psi$};
    %\draw[very thick] (-0.5,0) arc (180:240:0.5);
    %\node at (-0.225,-0.15) {\Large $34^\circ$};
    %\draw[very thick] (0.875-0.5,1.5) arc (180:240:0.5);
    %\node at (0.875-0.225,1.65-0.3) {\Large $61^\circ$};
\end{scope} 
\end{tikzpicture}
```
</center>

$\psi =$ [[ 128 ]]$^\circ$

</div>

</section>
<br>
<br>
<br>
<br>
<br>