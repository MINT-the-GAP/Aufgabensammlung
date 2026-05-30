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











tags: Koordinatensystem, Punkt, Rechteck, Fläche, sehr leicht, niedrig, Angeben

comment: Im Koodinatensystem ist ein Rechteck dargestellt. Bestimme den Flächeninhalt.

author: Martin Lommatzsch

-->




# Fehlende Punkte von Vierecken


**Gib** den Flächeninhalt des dargestellten Vierecks **an**.

<br>
<section class="dynFlex">

<div class="flex-child">

__$a)\;\;$__

<center>

```latex  @tikz

\begin{tikzpicture} [scale=1, >=latex]

%\draw[blue!50, step=1mm, very thin] (-0,-0) grid (10,10);  
\draw[black!90, step=5mm,    dashed] (-0,-0) grid (10,10);  
\draw[black!90, step=10mm,   ] (-0,-0) grid (10,10);

  \coordinate (ya) at (0,-0.25);
  \coordinate (xa) at (-0.25,0);
  \coordinate (o) at (0,0);
  \coordinate (y) at (0,10.25);
  \coordinate (x) at (10.25,0);
  
    \draw[<->, black!100, thick] (y) node[above] {\large $y$} -- (0,0) --  (x) node[right]   {\large $x$};

\draw[-, black!100, thin]  (0,0.1) -- (0,-0.1) node[below=0.25cm,left] {\Large 0};
\draw[-, black!100, thin]  (1,0.1) -- (1,-0.1) node[below] {\Large 1};
\draw[-, black!100, thin]  (2,0.1) -- (2,-0.1) node[below] {\Large 2};
\draw[-, black!100, thin]  (3,0.1) -- (3,-0.1) node[below] {\Large 3};
\draw[-, black!100, thin]  (4,0.1) -- (4,-0.1) node[below] {\Large 4};
\draw[-, black!100, thin]  (5,0.1) -- (5,-0.1) node[below] {\Large 5};
\draw[-, black!100, thin]  (6,0.1) -- (6,-0.1) node[below] {\Large 6};
\draw[-, black!100, thin]  (7,0.1) -- (7,-0.1) node[below] {\Large 7};
\draw[-, black!100, thin]  (8,0.1) -- (8,-0.1) node[below] {\Large 8};
\draw[-, black!100, thin]  (9,0.1) -- (9,-0.1) node[below] {\Large 9};
\draw[-, black!100, thin]  (10,0.1) -- (10,-0.1) node[below] {\Large 10};
\draw[-, black!100, thin]  (0.1,1) -- (-0.1,1) node[left] {\Large 1};
\draw[-, black!100, thin]  (0.1,2) -- (-0.1,2) node[left] {\Large 2};
\draw[-, black!100, thin]  (0.1,3) -- (-0.1,3) node[left] {\Large 3};
\draw[-, black!100, thin]  (0.1,4) -- (-0.1,4) node[left] {\Large 4};
\draw[-, black!100, thin]  (0.1,5) -- (-0.1,5) node[left] {\Large 5};
\draw[-, black!100, thin]  (0.1,6) -- (-0.1,6) node[left] {\Large 6};
\draw[-, black!100, thin]  (0.1,7) -- (-0.1,7) node[left] {\Large 7};
\draw[-, black!100, thin]  (0.1,8) -- (-0.1,8) node[left] {\Large 8};
\draw[-, black!100, thin]  (0.1,9) -- (-0.1,9) node[left] {\Large 9};
\draw[-, black!100, thin]  (0.1,10) -- (-0.1,10) node[left] {\Large 10};
 
 \draw [ black!100, thick]  (ya) --(o) --  (xa);

   \draw[very thick, red, fill=red!70, opacity=0.4] (1,2)-- (8,2)-- (8,7)-- (1,7)-- (1,2);

	%\draw[thick,color=black, ]  plot[samples=100, domain=-0:4] (\x, {2*\x } ) node[right] {\large $f$};  
  
\end{tikzpicture}

```
</center>
 $A=$[[  35  ]]$FE$ \
<br>
</div> 




<div class="flex-child">

__$b)\;\;$__

<center>

```latex  @tikz

\begin{tikzpicture} [scale=1, >=latex]

%\draw[blue!50, step=1mm, very thin] (-0,-0) grid (10,10);  
\draw[black!90, step=5mm,    dashed] (-0,-0) grid (10,10);  
\draw[black!90, step=10mm,   ] (-0,-0) grid (10,10);

  \coordinate (ya) at (0,-0.25);
  \coordinate (xa) at (-0.25,0);
  \coordinate (o) at (0,0);
  \coordinate (y) at (0,10.25);
  \coordinate (x) at (10.25,0);
  
    \draw[<->, black!100, thick] (y) node[above] {\large $y$} -- (0,0) --  (x) node[right]   {\large $x$};

\draw[-, black!100, thin]  (0,0.1) -- (0,-0.1) node[below=0.25cm,left] {\Large 0};
\draw[-, black!100, thin]  (1,0.1) -- (1,-0.1) node[below] {\Large 1};
\draw[-, black!100, thin]  (2,0.1) -- (2,-0.1) node[below] {\Large 2};
\draw[-, black!100, thin]  (3,0.1) -- (3,-0.1) node[below] {\Large 3};
\draw[-, black!100, thin]  (4,0.1) -- (4,-0.1) node[below] {\Large 4};
\draw[-, black!100, thin]  (5,0.1) -- (5,-0.1) node[below] {\Large 5};
\draw[-, black!100, thin]  (6,0.1) -- (6,-0.1) node[below] {\Large 6};
\draw[-, black!100, thin]  (7,0.1) -- (7,-0.1) node[below] {\Large 7};
\draw[-, black!100, thin]  (8,0.1) -- (8,-0.1) node[below] {\Large 8};
\draw[-, black!100, thin]  (9,0.1) -- (9,-0.1) node[below] {\Large 9};
\draw[-, black!100, thin]  (10,0.1) -- (10,-0.1) node[below] {\Large 10};
\draw[-, black!100, thin]  (0.1,1) -- (-0.1,1) node[left] {\Large 1};
\draw[-, black!100, thin]  (0.1,2) -- (-0.1,2) node[left] {\Large 2};
\draw[-, black!100, thin]  (0.1,3) -- (-0.1,3) node[left] {\Large 3};
\draw[-, black!100, thin]  (0.1,4) -- (-0.1,4) node[left] {\Large 4};
\draw[-, black!100, thin]  (0.1,5) -- (-0.1,5) node[left] {\Large 5};
\draw[-, black!100, thin]  (0.1,6) -- (-0.1,6) node[left] {\Large 6};
\draw[-, black!100, thin]  (0.1,7) -- (-0.1,7) node[left] {\Large 7};
\draw[-, black!100, thin]  (0.1,8) -- (-0.1,8) node[left] {\Large 8};
\draw[-, black!100, thin]  (0.1,9) -- (-0.1,9) node[left] {\Large 9};
\draw[-, black!100, thin]  (0.1,10) -- (-0.1,10) node[left] {\Large 10};
 
 \draw [ black!100, thick]  (ya) --(o) --  (xa);

   \draw[very thick, red, fill=red!70, opacity=0.4] (3,0)-- (6,0)-- (6,8)-- (3,8)-- (3,0);

	%\draw[thick,color=black, ]  plot[samples=100, domain=-0:4] (\x, {2*\x } ) node[right] {\large $f$};  
  
\end{tikzpicture}

```
</center>
 $A=$[[  24  ]]$FE$ \
<br>
</div> 


</section>

<br>
<br>
<br>
<br>
<br>