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


tags: Koordinatensystem, Stelle, Punkt, Dezimalzahlen, leicht, niedrig, Angeben

comment: Stellen und Punkte aus dem Koordinatensystem auslesen mit Dezimalzahlen.

author: Martin Lommatzsch

-->




# Punkte ablesen


**Gib** die fehlende Information zu den Punkten als Dezimalzahl **an**.

<br>

<center>

```latex  @tikz

\begin{tikzpicture} [scale=1.75, >=latex]

\draw[blue!50, step=1mm, very thin] (-0,-0) grid (10,10);  
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

  \coordinate[label=center:\LARGE$\times$] (a) at (4.4+0.03,8.2-0.025);
  \node[below right] at (a) {\LARGE $A$};

  \coordinate[label=center:\LARGE$\times$] (b) at (1.7+0.03,2.8-0.025);
  \node[below right] at (b) {\LARGE $B$};

  \coordinate[label=center:\LARGE$\times$] (c) at (3.1+0.03,7.9-0.025);
  \node[below right] at (c) {\LARGE $C$};

  \coordinate[label=center:\LARGE$\times$] (d) at (6.7+0.03,4.5-0.025);
  \node[below right] at (d) {\LARGE $D$};

  \coordinate[label=center:\LARGE$\times$] (e) at (9.4+0.03,0.3-0.025);
  \node[below right] at (e) {\LARGE $E$};

  \coordinate[label=center:\LARGE$\times$] (f) at (5.6+0.03,7.1-0.025);
  \node[below right] at (f) {\LARGE $F$};

	%\draw[thick,color=black, ]  plot[samples=100, domain=-0:4] (\x, {2*\x } ) node[right] {\large $f$};  
  
\end{tikzpicture}

```
</center>

<section class="flex-container">

<div class="flex-child">
 $A($[[  4,4  ]]$|$[[  8,2  ]]$)$ \
<br>
</div>

<div class="flex-child">

 $B($[[  1,7  ]]$|$[[  2,8  ]]$)$ \
<br>
</div>

<div class="flex-child">

 [[  E  ]]$( 9,4 | 0,3 )$ \
<br>

</div>

</section>

<br>
<br>
<br>
<br>
<br>