<!--
version:  0.0.1
language: de
narrator: Deutsch Female
mode: Presentation
edit: true

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-DynFlex/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-timer/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-board-mode/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-marker/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-annotation/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-canvas-ocr/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-orthography/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-Mathe/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-kachel/refs/heads/main/README.md

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md


import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/KoordREADME.md
import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/FreezeREADME.md

import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/RedirecterREADME.md











tags: Winkel, Winkelbeziehungen, leicht, sehr niedrig, Angeben

comment: Ein Winkelmaß ist bekannt, wie groß ist das gesuchte Winkelmaß?

author: Martin Lommatzsch

-->




# Winkelbeziehungen


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/2.png" width="120" height="30">  \
**Gib** das gesuchte Winkelmaß **an**. Es gilt $f \parallel g$. (Die graphische Darstellung dient zur Orientierung und entspricht nicht den realen Werten.)


<section class="dynFlex">

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

    %\draw[very thick] (0.875-0.5,1.5) arc (180:60:0.5);
    %\node at (0.875-0.15,1.65) {\Large $133^\circ$};

    \draw[very thick] (0.875+0.5,1.5) arc (0:60:0.5);
    \node at (0.875+0.3,1.65) {\Large $49^\circ$};

    %\draw[very thick] (0.875+0.5,1.5) arc (0:-120:0.5);
    %\node at (0.875+0.2,1.65-0.35) {\Large $128^\circ$};

    %\draw[very thick] (0.875-0.5,1.5) arc (180:240:0.5);
    %\node at (0.875-0.225,1.65-0.3) {\LARGE $\gamma$};


    %\draw[very thick] (-0.5,0) arc (180:60:0.5);
    %\node at (-0.15,0.225) {\Large $147^\circ$};

    %\draw[very thick] (0.5,0) arc (0:60:0.5);
    %\node at (0.3,0.15) {\Large $52^\circ$};

    %\draw[very thick] (0.5,0) arc (0:-120:0.5);
    %\node at (0.2,-0.225) {\Large $122^\circ$};

    \draw[very thick] (-0.5,0) arc (180:240:0.5);
    \node at (-0.225,-0.15) {\LARGE $\beta$};
\end{scope} 
\end{tikzpicture}
```
</center>

$\beta =$ [[ 49 ]]$^\circ$


</div>

<div class="flex-child">



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

    \draw[very thick] (0.875-0.5,1.5) arc (180:60:0.5);
    \node at (0.875-0.15,1.65) {\Large $137^\circ$};

    %\draw[very thick] (0.875+0.5,1.5) arc (0:60:0.5);
    %\node at (0.875+0.3,1.65) {\LARGE $\chi$};

    %\draw[very thick] (0.875+0.5,1.5) arc (0:-120:0.5);
    %\node at (0.875+0.2,1.65-0.35) {\LARGE $\omega$};

    %\draw[very thick] (0.875-0.5,1.5) arc (180:240:0.5);
    %\node at (0.875-0.225,1.65-0.3) {\Large $64^\circ$};


    \draw[very thick] (-0.5,0) arc (180:60:0.5);
    \node at (-0.15,0.225) {\LARGE $\alpha$};

    %\draw[very thick] (0.5,0) arc (0:60:0.5);
    %\node at (0.3,0.15) {\Large $52^\circ$};

    %\draw[very thick] (0.5,0) arc (0:-120:0.5);
    %\node at (0.2,-0.225) {\Large $122^\circ$};

    %\draw[very thick] (-0.5,0) arc (180:240:0.5);
    %\node at (-0.225,-0.15) {\Large $34^\circ$};
\end{scope} 
\end{tikzpicture}
```
</center>

$\alpha =$ [[ 116 ]]$^\circ$

</div>

</section>




