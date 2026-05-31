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











tags: Quadratische Funktionen, Scheitelpunktsform, sehr leicht, sehr niedrig, Angeben

comment: Welcher Graph passt zum gegebenem Funktionsterm in Scheitelpunktsform?

author: Martin Lommatzsch

-->




# Scheitelpunktsformen zuordnen


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Gib** Funktionsnamen **an**, wie er in den Graphen dargestellt ist.



<center>

```latex  @tikz

\begin{tikzpicture} [scale=0.8, >=latex]

\begin{scope}[xshift=0cm]
\draw[black!70, step=5mm,   thin, dashed] (-4,-4) grid (4,4);  
\draw[black!70, step=10mm,   thin] (-4,-4) grid (4,4);

  \coordinate (ya) at (0,-4.25);
  \coordinate (xa) at (-4.25,0);
  \coordinate (o) at (0,0);
  \coordinate (y) at (0,4.25);
  \coordinate (x) at (4.25,0);
  
    \draw[<->, black!100, thick] (y) node[above] {\large $y$} -- (0,0) --  (x) node[right]   {\large $x$};

\draw[-, black!100, thin]  (0,0.1) -- (0,-0.1) node[below=0.25cm,left] {\large 0};
\draw[-, black!100, thin]  (1,0.1) -- (1,-0.1) node[below] {\large 1};
\draw[-, black!100, thin]  (2,0.1) -- (2,-0.1) node[below] {\large 2};
\draw[-, black!100, thin]  (3,0.1) -- (3,-0.1) node[below] {\large 3};
\draw[-, black!100, thin]  (4,0.1) -- (4,-0.1) node[below] {\large 4};
\draw[-, black!100, thin]  (0.1,1) -- (-0.1,1) node[left] {\large 1};
\draw[-, black!100, thin]  (0.1,2) -- (-0.1,2) node[left] {\large 2};
\draw[-, black!100, thin]  (0.1,3) -- (-0.1,3) node[left] {\large 3};
\draw[-, black!100, thin]  (0.1,4) -- (-0.1,4) node[left] {\large 4};

\draw[-, black!100, thin]  (-1,0.1) -- (-1,-0.1) node[below] {\large -1};
\draw[-, black!100, thin]  (-2,0.1) -- (-2,-0.1) node[below] {\large -2};
\draw[-, black!100, thin]  (-3,0.1) -- (-3,-0.1) node[below] {\large -3};
\draw[-, black!100, thin]  (-4,0.1) -- (-4,-0.1) node[below] {\large -4};
\draw[-, black!100, thin]  (0.1,-1) -- (-0.1,-1) node[left] {\large -1};
\draw[-, black!100, thin]  (0.1,-2) -- (-0.1,-2) node[left] {\large -2};
\draw[-, black!100, thin]  (0.1,-3) -- (-0.1,-3) node[left] {\large -3};
\draw[-, black!100, thin]  (0.1,-4) -- (-0.1,-4) node[left] {\large -4};
 
 \draw [ black!100, thick]  (ya) --(o) --  (xa);

	\draw[thick,color=red, ]  plot[samples=100, domain=-4:-0.4] (\x, {1*pow((\x+3),2)-3 } ) node[above] {\Large $f$};  
  \end{scope}

  


\begin{scope}[xshift=10cm]
\draw[black!70, step=5mm,   thin, dashed] (-4,-4) grid (4,4);  
\draw[black!70, step=10mm,   thin] (-4,-4) grid (4,4);

  \coordinate (ya) at (0,-4.25);
  \coordinate (xa) at (-4.25,0);
  \coordinate (o) at (0,0);
  \coordinate (y) at (0,4.25);
  \coordinate (x) at (4.25,0);
  
    \draw[<->, black!100, thick] (y) node[above] {\large $y$} -- (0,0) --  (x) node[right]   {\large $x$};

\draw[-, black!100, thin]  (0,0.1) -- (0,-0.1) node[below=0.25cm,left] {\large 0};
\draw[-, black!100, thin]  (1,0.1) -- (1,-0.1) node[below] {\large 1};
\draw[-, black!100, thin]  (2,0.1) -- (2,-0.1) node[below] {\large 2};
\draw[-, black!100, thin]  (3,0.1) -- (3,-0.1) node[below] {\large 3};
\draw[-, black!100, thin]  (4,0.1) -- (4,-0.1) node[below] {\large 4};
\draw[-, black!100, thin]  (0.1,1) -- (-0.1,1) node[left] {\large 1};
\draw[-, black!100, thin]  (0.1,2) -- (-0.1,2) node[left] {\large 2};
\draw[-, black!100, thin]  (0.1,3) -- (-0.1,3) node[left] {\large 3};
\draw[-, black!100, thin]  (0.1,4) -- (-0.1,4) node[left] {\large 4};

\draw[-, black!100, thin]  (-1,0.1) -- (-1,-0.1) node[below] {\large -1};
\draw[-, black!100, thin]  (-2,0.1) -- (-2,-0.1) node[below] {\large -2};
\draw[-, black!100, thin]  (-3,0.1) -- (-3,-0.1) node[below] {\large -3};
\draw[-, black!100, thin]  (-4,0.1) -- (-4,-0.1) node[below] {\large -4};
\draw[-, black!100, thin]  (0.1,-1) -- (-0.1,-1) node[left] {\large -1};
\draw[-, black!100, thin]  (0.1,-2) -- (-0.1,-2) node[left] {\large -2};
\draw[-, black!100, thin]  (0.1,-3) -- (-0.1,-3) node[left] {\large -3};
\draw[-, black!100, thin]  (0.1,-4) -- (-0.1,-4) node[left] {\large -4};
 
 \draw [ black!100, thick]  (ya) --(o) --  (xa);

	\draw[thick,color=red, ]  plot[samples=100, domain=0.4:4] (\x, {1*pow((\x-3),2)-3 } ) node[right] {\Large $g$};  
  \end{scope}

  

  

\begin{scope}[xshift=20cm]
\draw[black!70, step=5mm,   thin, dashed] (-4,-4) grid (4,4);  
\draw[black!70, step=10mm,   thin] (-4,-4) grid (4,4);

  \coordinate (ya) at (0,-4.25);
  \coordinate (xa) at (-4.25,0);
  \coordinate (o) at (0,0);
  \coordinate (y) at (0,4.25);
  \coordinate (x) at (4.25,0);
  
    \draw[<->, black!100, thick] (y) node[above] {\large $y$} -- (0,0) --  (x) node[right]   {\large $x$};

\draw[-, black!100, thin]  (0,0.1) -- (0,-0.1) node[below=0.25cm,left] {\large 0};
\draw[-, black!100, thin]  (1,0.1) -- (1,-0.1) node[below] {\large 1};
\draw[-, black!100, thin]  (2,0.1) -- (2,-0.1) node[below] {\large 2};
\draw[-, black!100, thin]  (3,0.1) -- (3,-0.1) node[below] {\large 3};
\draw[-, black!100, thin]  (4,0.1) -- (4,-0.1) node[below] {\large 4};
\draw[-, black!100, thin]  (0.1,1) -- (-0.1,1) node[left] {\large 1};
\draw[-, black!100, thin]  (0.1,2) -- (-0.1,2) node[left] {\large 2};
\draw[-, black!100, thin]  (0.1,3) -- (-0.1,3) node[left] {\large 3};
\draw[-, black!100, thin]  (0.1,4) -- (-0.1,4) node[left] {\large 4};

\draw[-, black!100, thin]  (-1,0.1) -- (-1,-0.1) node[below] {\large -1};
\draw[-, black!100, thin]  (-2,0.1) -- (-2,-0.1) node[below] {\large -2};
\draw[-, black!100, thin]  (-3,0.1) -- (-3,-0.1) node[below] {\large -3};
\draw[-, black!100, thin]  (-4,0.1) -- (-4,-0.1) node[below] {\large -4};
\draw[-, black!100, thin]  (0.1,-1) -- (-0.1,-1) node[left] {\large -1};
\draw[-, black!100, thin]  (0.1,-2) -- (-0.1,-2) node[left] {\large -2};
\draw[-, black!100, thin]  (0.1,-3) -- (-0.1,-3) node[left] {\large -3};
\draw[-, black!100, thin]  (0.1,-4) -- (-0.1,-4) node[left] {\large -4};
 
 \draw [ black!100, thick]  (ya) --(o) --  (xa);

	\draw[thick,color=red, ]  plot[samples=100, domain=-1.45:3.45] (\x, {-1*pow((\x-1),2)+2 } ) node[below] {\Large $h$};  
  \end{scope}






\begin{scope}[xshift=0cm, yshift=-10cm]
\draw[black!70, step=5mm,   thin, dashed] (-4,-4) grid (4,4);  
\draw[black!70, step=10mm,   thin] (-4,-4) grid (4,4);

  \coordinate (ya) at (0,-4.25);
  \coordinate (xa) at (-4.25,0);
  \coordinate (o) at (0,0);
  \coordinate (y) at (0,4.25);
  \coordinate (x) at (4.25,0);
  
    \draw[<->, black!100, thick] (y) node[above] {\large $y$} -- (0,0) --  (x) node[right]   {\large $x$};

\draw[-, black!100, thin]  (0,0.1) -- (0,-0.1) node[below=0.25cm,left] {\large 0};
\draw[-, black!100, thin]  (1,0.1) -- (1,-0.1) node[below] {\large 1};
\draw[-, black!100, thin]  (2,0.1) -- (2,-0.1) node[below] {\large 2};
\draw[-, black!100, thin]  (3,0.1) -- (3,-0.1) node[below] {\large 3};
\draw[-, black!100, thin]  (4,0.1) -- (4,-0.1) node[below] {\large 4};
\draw[-, black!100, thin]  (0.1,1) -- (-0.1,1) node[left] {\large 1};
\draw[-, black!100, thin]  (0.1,2) -- (-0.1,2) node[left] {\large 2};
\draw[-, black!100, thin]  (0.1,3) -- (-0.1,3) node[left] {\large 3};
\draw[-, black!100, thin]  (0.1,4) -- (-0.1,4) node[left] {\large 4};

\draw[-, black!100, thin]  (-1,0.1) -- (-1,-0.1) node[below] {\large -1};
\draw[-, black!100, thin]  (-2,0.1) -- (-2,-0.1) node[below] {\large -2};
\draw[-, black!100, thin]  (-3,0.1) -- (-3,-0.1) node[below] {\large -3};
\draw[-, black!100, thin]  (-4,0.1) -- (-4,-0.1) node[below] {\large -4};
\draw[-, black!100, thin]  (0.1,-1) -- (-0.1,-1) node[left] {\large -1};
\draw[-, black!100, thin]  (0.1,-2) -- (-0.1,-2) node[left] {\large -2};
\draw[-, black!100, thin]  (0.1,-3) -- (-0.1,-3) node[left] {\large -3};
\draw[-, black!100, thin]  (0.1,-4) -- (-0.1,-4) node[left] {\large -4};
 
 \draw [ black!100, thick]  (ya) --(o) --  (xa);

	\draw[thick,color=red, ]  plot[samples=100, domain=-4:-1.25] (\x, {-1*pow((\x+4),2)+4 } ) node[below] {\Large $k$};  
  \end{scope}

  


\begin{scope}[xshift=10cm, yshift=-10cm]
\draw[black!70, step=5mm,   thin, dashed] (-4,-4) grid (4,4);  
\draw[black!70, step=10mm,   thin] (-4,-4) grid (4,4);

  \coordinate (ya) at (0,-4.25);
  \coordinate (xa) at (-4.25,0);
  \coordinate (o) at (0,0);
  \coordinate (y) at (0,4.25);
  \coordinate (x) at (4.25,0);
  
    \draw[<->, black!100, thick] (y) node[above] {\large $y$} -- (0,0) --  (x) node[right]   {\large $x$};

\draw[-, black!100, thin]  (0,0.1) -- (0,-0.1) node[below=0.25cm,left] {\large 0};
\draw[-, black!100, thin]  (1,0.1) -- (1,-0.1) node[below] {\large 1};
\draw[-, black!100, thin]  (2,0.1) -- (2,-0.1) node[below] {\large 2};
\draw[-, black!100, thin]  (3,0.1) -- (3,-0.1) node[below] {\large 3};
\draw[-, black!100, thin]  (4,0.1) -- (4,-0.1) node[below] {\large 4};
\draw[-, black!100, thin]  (0.1,1) -- (-0.1,1) node[left] {\large 1};
\draw[-, black!100, thin]  (0.1,2) -- (-0.1,2) node[left] {\large 2};
\draw[-, black!100, thin]  (0.1,3) -- (-0.1,3) node[left] {\large 3};
\draw[-, black!100, thin]  (0.1,4) -- (-0.1,4) node[left] {\large 4};

\draw[-, black!100, thin]  (-1,0.1) -- (-1,-0.1) node[below] {\large -1};
\draw[-, black!100, thin]  (-2,0.1) -- (-2,-0.1) node[below] {\large -2};
\draw[-, black!100, thin]  (-3,0.1) -- (-3,-0.1) node[below] {\large -3};
\draw[-, black!100, thin]  (-4,0.1) -- (-4,-0.1) node[below] {\large -4};
\draw[-, black!100, thin]  (0.1,-1) -- (-0.1,-1) node[left] {\large -1};
\draw[-, black!100, thin]  (0.1,-2) -- (-0.1,-2) node[left] {\large -2};
\draw[-, black!100, thin]  (0.1,-3) -- (-0.1,-3) node[left] {\large -3};
\draw[-, black!100, thin]  (0.1,-4) -- (-0.1,-4) node[left] {\large -4};
 
 \draw [ black!100, thick]  (ya) --(o) --  (xa);

	\draw[thick,color=red, ]  plot[samples=100, domain=0.4:4] (\x, {-1*pow((\x-3),2)+3 } ) node[right] {\Large $l$};  
  \end{scope}

  

  

\begin{scope}[xshift=20cm, yshift=-10cm]
\draw[black!70, step=5mm,   thin, dashed] (-4,-4) grid (4,4);  
\draw[black!70, step=10mm,   thin] (-4,-4) grid (4,4);

  \coordinate (ya) at (0,-4.25);
  \coordinate (xa) at (-4.25,0);
  \coordinate (o) at (0,0);
  \coordinate (y) at (0,4.25);
  \coordinate (x) at (4.25,0);
  
    \draw[<->, black!100, thick] (y) node[above] {\large $y$} -- (0,0) --  (x) node[right]   {\large $x$};

\draw[-, black!100, thin]  (0,0.1) -- (0,-0.1) node[below=0.25cm,left] {\large 0};
\draw[-, black!100, thin]  (1,0.1) -- (1,-0.1) node[below] {\large 1};
\draw[-, black!100, thin]  (2,0.1) -- (2,-0.1) node[below] {\large 2};
\draw[-, black!100, thin]  (3,0.1) -- (3,-0.1) node[below] {\large 3};
\draw[-, black!100, thin]  (4,0.1) -- (4,-0.1) node[below] {\large 4};
\draw[-, black!100, thin]  (0.1,1) -- (-0.1,1) node[left] {\large 1};
\draw[-, black!100, thin]  (0.1,2) -- (-0.1,2) node[left] {\large 2};
\draw[-, black!100, thin]  (0.1,3) -- (-0.1,3) node[left] {\large 3};
\draw[-, black!100, thin]  (0.1,4) -- (-0.1,4) node[left] {\large 4};

\draw[-, black!100, thin]  (-1,0.1) -- (-1,-0.1) node[below] {\large -1};
\draw[-, black!100, thin]  (-2,0.1) -- (-2,-0.1) node[below] {\large -2};
\draw[-, black!100, thin]  (-3,0.1) -- (-3,-0.1) node[below] {\large -3};
\draw[-, black!100, thin]  (-4,0.1) -- (-4,-0.1) node[below] {\large -4};
\draw[-, black!100, thin]  (0.1,-1) -- (-0.1,-1) node[left] {\large -1};
\draw[-, black!100, thin]  (0.1,-2) -- (-0.1,-2) node[left] {\large -2};
\draw[-, black!100, thin]  (0.1,-3) -- (-0.1,-3) node[left] {\large -3};
\draw[-, black!100, thin]  (0.1,-4) -- (-0.1,-4) node[left] {\large -4};
 
 \draw [ black!100, thick]  (ya) --(o) --  (xa);

	\draw[thick,color=red, ]  plot[samples=100, domain=-3.66:-0.33] (\x, {-1*pow((\x+2),2)-1 } ) node[below] {\Large $m$};  
  \end{scope}


\end{tikzpicture}

```
</center>

<section class="dynFlex">

<div class="flex-child">
[[$f(x)$|($g(x)$)|$h(x)$|$k(x)$|$l(x)$|$m(x)$]] $= \left( x -3 \right)^2 -3$ \



</div>

<div class="flex-child">


[[$f(x)$|$g(x)$|$h(x)$|($k(x)$)|$l(x)$|$m(x)$]] $= -\left( x + 4 \right)^2 +4$ \



</div>

<div class="flex-child">


[[$f(x)$|$g(x)$|($h(x)$)|$k(x)$|$l(x)$|$m(x)$]] $= -\left( x - 1 \right)^2 + 2$ \


</div>

</section>






