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


tags: Koordinatensystem, Punkt, Vierecke, sehr leicht, sehr niedrig, Angeben

comment: Ein Punkt fehlt für das beschriebene Viereck im Koordinatensystem. Kannst du die Koordinaten des Punktes finden?

author: Martin Lommatzsch

-->




# Fehlende Punkte von Vierecken


**Gib** die Koordinaten des fehlenden Punktes für das beschriebene Viereck **an**.

<br>
<section class="flex-container">

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

  %\coordinate[label=center:\LARGE$\times$] (a) at (2+0.055,3-0.055);
  %\node[below right] at (a) {\LARGE $A$};

  \coordinate[label=center:\LARGE$\times$] (b) at (6+0.055,6-0.055);
  \node[below right] at (b) {\LARGE $B$};

  \coordinate[label=center:\LARGE$\times$] (c) at (9+0.055,10-0.055);
  \node[below right] at (c) {\LARGE $C$};

  \coordinate[label=center:\LARGE$\times$] (d) at (5+0.055,7-0.055);
  \node[below right] at (d) {\LARGE $D$}; 

	%\draw[thick,color=black, ]  plot[samples=100, domain=-0:4] (\x, {2*\x } ) node[right] {\large $f$};  
  
\end{tikzpicture}

```
</center>
Es handelt sich um eine Raute. \
--> $A($[[  2  ]]$|$[[  3  ]]$)$ \
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

  \coordinate[label=center:\LARGE$\times$] (a) at (7+0.055,9-0.055);
  \node[below right] at (a) {\LARGE $A$};

  \coordinate[label=center:\LARGE$\times$] (b) at (2+0.055,6-0.055);
  \node[below right] at (b) {\LARGE $B$};

  \coordinate[label=center:\LARGE$\times$] (c) at (2+0.055,3-0.055);
  \node[below right] at (c) {\LARGE $C$};

  %\coordinate[label=center:\LARGE$\times$] (d) at (7+0.055,0-0.055);
  %\node[below right] at (d) {\LARGE $D$}; 

	%\draw[thick,color=black, ]  plot[samples=100, domain=-0:4] (\x, {2*\x } ) node[right] {\large $f$};  
  
\end{tikzpicture}

```
</center>
Es handelt sich um ein symmetrisches Trapez mit einer Symmetrieachse, die orthogonal zur Stecke $\overline{AB}$ ist. \
--> $D($[[  7  ]]$|$[[  0  ]]$)$ \
<br>
</div> 


</section>

<br>
<br>
<br>
<br>
<br>