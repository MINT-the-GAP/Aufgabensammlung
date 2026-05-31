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











tags: Lineare Funktionen, Bruchrechnung, sehr leicht, niedrig, Angeben

comment: Welcher Term passt zu welchem Graphen?

author: Martin Lommatzsch

-->




# Graphen Funktionsterme zuordnen



<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
Gegeben sei die im Koordinatensystem abgebildeten Graphen. **Ordne** den Funktionen einen zum Graph passenden Funktionsterm **zu**. 



```latex  @tikz 
\begin{tikzpicture}[scale=2, >=latex]

\draw[black!70, step=5mm,   thin, dashed] (-0,-0) grid (9,5);  
\draw[black!70, step=10mm,   thin] (-0,-0) grid (9,5);

  \coordinate (ya) at (0,-0.25);
  \coordinate (xa) at (-0.25,0);
  \coordinate (o) at (0,0);
  \coordinate (y) at (0,5.25);
  \coordinate (x) at (9.25,0);
  
    \draw[<->, black!100, thick] (y) node[above] {\large $y$} -- (0,0) --  (x) node[right]   {\large $x$};

\draw[-, black!100, thin]  (0,0.1) -- (0,-0.1) node[below=0.25cm,left] {0};
\draw[-, black!100, thin]  (1,0.1) -- (1,-0.1) node[below] {1};
\draw[-, black!100, thin]  (2,0.1) -- (2,-0.1) node[below] {2};
\draw[-, black!100, thin]  (3,0.1) -- (3,-0.1) node[below] {3};
\draw[-, black!100, thin]  (4,0.1) -- (4,-0.1) node[below] {4};
\draw[-, black!100, thin]  (5,0.1) -- (5,-0.1) node[below] {5};
\draw[-, black!100, thin]  (6,0.1) -- (6,-0.1) node[below] {6};
\draw[-, black!100, thin]  (7,0.1) -- (7,-0.1) node[below] {7};
\draw[-, black!100, thin]  (8,0.1) -- (8,-0.1) node[below] {8};
\draw[-, black!100, thin]  (9,0.1) -- (9,-0.1) node[below] {9};
\draw[-, black!100, thin]  (0.1,1) -- (-0.1,1) node[left] {1};
\draw[-, black!100, thin]  (0.1,2) -- (-0.1,2) node[left] {2};
\draw[-, black!100, thin]  (0.1,3) -- (-0.1,3) node[left] {3};
\draw[-, black!100, thin]  (0.1,4) -- (-0.1,4) node[left] {4};
\draw[-, black!100, thin]  (0.1,5) -- (-0.1,5) node[left] {5};
 
 \draw [ black!100, thick]  (ya) --(o) --  (xa);

	\draw[thick,color=black, ]  plot[samples=100, domain=-0:9] (\x, {\x/3 +1.5 } ) node[right] {\large $f$};  
	\draw[thick,color=red, ]    plot[samples=100, domain=-0:9] (\x, {\x/5 + 1 } ) node[right] {\large $g$};  
	\draw[thick,color=blue, ]   plot[samples=100, domain=-0:9] (\x, {\x/8 + 3 } ) node[right] {\large $h$};   
    
	\end{tikzpicture}
```


<section class="dynFlex">

<div class="flex-child">
$f(x)=$ [[$\frac{1}{3} \cdot x + 1$|$\frac{1}{4} \cdot x + 1$|$\frac{1}{5} \cdot x + 1$|$\frac{1}{8} \cdot x + 1$|($\frac{1}{3} \cdot x + 1.5$)|$\frac{1}{4} \cdot x + 1.5$|$\frac{1}{5} \cdot x + \frac{3}{2}$|$\frac{1}{8} \cdot x + \frac{3}{2}$|$\frac{x}{3} + 3$|$\frac{x}{4} + 3$|$\frac{x}{5} + 3$|$\frac{x}{8} + 3$]] \

</div>

<div class="flex-child">
$g(x)=$ [[$\frac{1}{3} \cdot x + 1$|$\frac{1}{4} \cdot x + 1$|($\frac{1}{5} \cdot x + 1$)|$\frac{1}{8} \cdot x + 1$|$\frac{1}{3} \cdot x + 1.5$|$\frac{1}{4} \cdot x + 1.5$|$\frac{1}{5} \cdot x + \frac{3}{2}$|$\frac{1}{8} \cdot x + \frac{3}{2}$|$\frac{x}{3} + 3$|$\frac{x}{4} + 3$|$\frac{x}{5} + 3$|$\frac{x}{8} + 3$]] \

</div>

<div class="flex-child">
$h(x)=$ [[$\frac{1}{3} \cdot x + 1$|$\frac{1}{4} \cdot x + 1$|$\frac{1}{5} \cdot x + 1$|$\frac{1}{8} \cdot x + 1$|$\frac{1}{3} \cdot x + 1.5$|$\frac{1}{4} \cdot x + 1.5$|$\frac{1}{5} \cdot x + \frac{3}{2}$|$\frac{1}{8} \cdot x + \frac{3}{2}$|$\frac{x}{3} + 3$|$\frac{x}{4} + 3$|$\frac{x}{5} + 3$|($\frac{x}{8} + 3$)]] 

</div>

</section>



