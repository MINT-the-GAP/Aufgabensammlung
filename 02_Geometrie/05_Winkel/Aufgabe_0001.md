<!--
version:  0.0.1
language: de
narrator: Deutsch Female
mode: Presentation
edit: true

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-DynFlex/refs/heads/main/README.md











tags: Winkel, Winkelbeziehungen, sehr leicht, sehr niedrig, Angeben

comment: Ein Winkelmaß ist bekannt, wie groß ist das gesuchte Winkelmaß?

author: Martin Lommatzsch

-->




# Direkte Winkelbeziehungen


**Gib** das gesuchte Winkelmaß sowie die Winkelbeziehung zum gegebenen Winkel **an**. Es gilt $f \parallel g$. (Die graphische Darstellung dient zur Orientierung und entspricht nicht den realen Werten.)

<br>
<section class="dynFlex">

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
    \draw[very thick] (0.5,0) arc (0:60:0.5);
    \node at (0.3,0.15) {\Large $55^\circ$};
    \draw[very thick] (0.875+0.5,1.5) arc (0:60:0.5);
    \node at (0.875+0.3,1.65) {\LARGE $\chi$};
\end{scope} 
\end{tikzpicture}
```
</center>

$\chi =$ [[ 55 ]]$^\circ$ und es handelt sich um die Beziehung eines [[Nebenwinkels|Scheitelwinkels|(Stufenwinkels)|Wechselwinkels]].

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

$\delta =$ [[ 63 ]]$^\circ$ und es handelt sich um die Beziehung eines [[(Nebenwinkels)|Scheitelwinkels|Stufenwinkels|Wechselwinkels]].

</div>

</section>
<br>
<br>
<br>
<br>
<br>