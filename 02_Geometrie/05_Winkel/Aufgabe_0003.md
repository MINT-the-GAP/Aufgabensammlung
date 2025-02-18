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


tags: Winkel, Winkelbeziehungen, sehr leicht, sehr niedrig, Angeben

comment: Ein Winkelmaß ist bekannt, wie groß ist das gesuchte Winkelmaß?

author: Martin Lommatzsch

-->




# Direkte Winkelbeziehungen


**Gib** das gesuchte Winkelmaß sowie die Winkelbeziehung zum gegebenen Winkel **an**. Es gilt $f \parallel g$. (Die graphische Darstellung dient zur Orientierung und entspricht nicht den realen Werten.)

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
    %\node at (0.3,0.15) {\Large $55^\circ$};
    %\draw[very thick] (0.5,0) arc (0:-120:0.5);
    %\node at (0.2,-0.175) {\Large $133^\circ$};
    \draw[very thick] (0.875+0.5,1.5) arc (0:60:0.5);
    \node at (0.875+0.3,1.65) {\LARGE $\mu$};
    \draw[very thick] (0.875-0.5,1.5) arc (180:60:0.5);
    \node at (0.875-0.15,1.65) {\Large $133^\circ$};
\end{scope} 
\end{tikzpicture}
```
</center>

--> $\mu =$ [[ 47 ]]$^\circ$ und es handelt sich um die Beziehung eines [[(Nebenwinkels)|Scheitelwinkels|Stufenwinkels|Wechselwinkels]].

<br>
<br>
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
    \node at (0.3,0.15) {\Large $\eta$};
    %\draw[very thick] (0.875+0.5,1.5) arc (0:60:0.5);
    %\node at (0.875+0.3,1.65) {\LARGE $\chi$};
    %\draw[very thick] (-0.5,0) arc (180:60:0.5);
    %\node at (-0.175,0.15) {\Large $117^\circ$};
    %\draw[very thick] (-0.5,0) arc (180:240:0.5);
    %\node at (-0.225,-0.15) {\Large $34^\circ$};
    \draw[very thick] (0.875-0.5,1.5) arc (180:240:0.5);
    \node at (0.875-0.225,1.65-0.3) {\Large $61^\circ$};
\end{scope} 
\end{tikzpicture}
```
</center>

--> $\eta =$ [[ 61 ]]$^\circ$ und es handelt sich um die Beziehung eines [[Nebenwinkels|Scheitelwinkels|Stufenwinkels|(Wechselwinkels)]].

<br>
<br>
<br>
<br>
<br>