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


tags: Koordinatensystem, Stelle, sehr leicht, sehr niedrig, Angeben

comment: Stellen aus dem Koordinatensystem auslesen.

author: Martin Lommatzsch

-->




# Stellen ablesen


**Gib** die Stelle der angegebenen Punkte **an**.

<br>

<center>

```latex  @tikz

\begin{tikzpicture} [scale=2, >=latex]

\draw[black!70, step=5mm,   thin, dashed] (-0,-0) grid (8,4);  
\draw[black!70, step=10mm,   thin] (-0,-0) grid (8,4);

  \coordinate (ya) at (0,-0.25);
  \coordinate (xa) at (-0.25,0);
  \coordinate (o) at (0,0);
  \coordinate (y) at (0,4.25);
  \coordinate (x) at (8.25,0);
  
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
\draw[-, black!100, thin]  (0.1,1) -- (-0.1,1) node[left] {\Large 1};
\draw[-, black!100, thin]  (0.1,2) -- (-0.1,2) node[left] {\Large 2};
\draw[-, black!100, thin]  (0.1,3) -- (-0.1,3) node[left] {\Large 3};
\draw[-, black!100, thin]  (0.1,4) -- (-0.1,4) node[left] {\Large 4};
 
 \draw [ black!100, thick]  (ya) --(o) --  (xa);

  \coordinate[label=center:\LARGE$\times$] (a) at (3+0.03,4-0.02);
  \node[below right] at (3,4) {\LARGE $A$};

  \coordinate[label=center:\LARGE$\times$] (b) at (7+0.03,2-0.02);
  \node[below right] at (7,2) {\LARGE $B$};

  \coordinate[label=center:\LARGE$\times$] (c) at (1+0.03,3-0.02);
  \node[below right] at (1,3) {\LARGE $C$};

	%\draw[thick,color=black, ]  plot[samples=100, domain=-0:4] (\x, {2*\x } ) node[right] {\large $f$};  
  
\end{tikzpicture}

```
</center>

<section class="flex-container">

<div class="flex-child">
 Der Punkt $A$ liegt an der Stelle $x=$[[  3  ]] \
<br>
</div>

<div class="flex-child">

 Der Punkt $B$ liegt an der Stelle $x=$[[  7  ]] \
<br>
</div>

<div class="flex-child">

 Der Punkt $C$ liegt an der Stelle $x=$[[  1  ]] \
<br>

</div>

</section>
<br>
<br>


<br>
<br>
<br>
<br>
<br>