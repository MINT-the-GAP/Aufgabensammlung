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











tags: Lineare Funktionen, sehr leicht, sehr niedrig, Angeben

comment: Welcher Term passt zu welchem Graphen?

author: Martin Lommatzsch

-->




# Graphen Funktionsterme zuordnen



Gegeben sei die im Koordinatensystem abgebildeten Graphen. **Ordne** den Funktionen einen zum Graph passenden Funktionsterm **zu**. 

<br>

```latex  @tikz 
\begin{tikzpicture}[scale=2, >=latex]

\draw[black!70, step=5mm,   thin, dashed] (-0,-0) grid (4,8);  
\draw[black!70, step=10mm,   thin] (-0,-0) grid (4,8);

  \coordinate (ya) at (0,-0.25);
  \coordinate (xa) at (-0.25,0);
  \coordinate (o) at (0,0);
  \coordinate (y) at (0,8.25);
  \coordinate (x) at (4.25,0);
  
    \draw[<->, black!100, thick] (y) node[above] {\large $y$} -- (0,0) --  (x) node[right]   {\large $x$};

\draw[-, black!100, thin]  (0,0.1) -- (0,-0.1) node[below=0.25cm,left] {0};
\draw[-, black!100, thin]  (1,0.1) -- (1,-0.1) node[below] {1};
\draw[-, black!100, thin]  (2,0.1) -- (2,-0.1) node[below] {2};
\draw[-, black!100, thin]  (3,0.1) -- (3,-0.1) node[below] {3};
\draw[-, black!100, thin]  (4,0.1) -- (4,-0.1) node[below] {4};
\draw[-, black!100, thin]  (0.1,1) -- (-0.1,1) node[left] {1};
\draw[-, black!100, thin]  (0.1,2) -- (-0.1,2) node[left] {2};
\draw[-, black!100, thin]  (0.1,3) -- (-0.1,3) node[left] {3};
\draw[-, black!100, thin]  (0.1,4) -- (-0.1,4) node[left] {4};
\draw[-, black!100, thin]  (0.1,5) -- (-0.1,5) node[left] {5};
\draw[-, black!100, thin]  (0.1,6) -- (-0.1,6) node[left] {6};
\draw[-, black!100, thin]  (0.1,7) -- (-0.1,7) node[left] {7};
\draw[-, black!100, thin]  (0.1,8) -- (-0.1,8) node[left] {8};
 
 \draw [ black!100, thick]  (ya) --(o) --  (xa);

	\draw[thick,color=black, ]  plot[samples=100, domain=-0:4] (\x, {2*\x } ) node[right] {\large $f$};  
	\draw[thick,color=red, ]    plot[samples=100, domain=-0:2.666] (\x, {\x*3 } ) node[above] {\large $g$};  
	\draw[thick,color=blue, ]   plot[samples=100, domain=-0:2.333] (\x, {\x*3 + 1 } ) node[above] {\large $h$};   
    
	\end{tikzpicture}
```

<br>
<section class="dynFlex">

<div class="flex-child">
$f(x)=$ [[$4 \cdot x$|$3 \cdot x$|($2 \cdot x$)|$1 \cdot x$|$4 \cdot x+1$|$3 \cdot x+1$|$2 \cdot x+1$|$1 \cdot x+2$|$1 \cdot x+3$|$1 \cdot x+4$]] \
<br>
</div>

<div class="flex-child">
$g(x)=$ [[$4 \cdot x$|($3 \cdot x$)|$2 \cdot x$|$1 \cdot x$|$4 \cdot x+1$|$3 \cdot x+1$|$2 \cdot x+1$|$1 \cdot x+2$|$1 \cdot x+3$|$1 \cdot x+4$]] \
<br>
</div>

<div class="flex-child">
$h(x)=$ [[$4 \cdot x$|$3 \cdot x$|$2 \cdot x$|$1 \cdot x$|$4 \cdot x+1$|($3 \cdot x+1$)|$2 \cdot x+1$|$1 \cdot x+2$|$1 \cdot x+3$|$1 \cdot x+4$]] 

</div>

</section>
<br>
<br>

