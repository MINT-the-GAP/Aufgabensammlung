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


tags: Ableitungen, grafisches Ableiten, mittel, niedrig, Angeben

comment: Welcher Graph ist die Ableitung welchen Graphen?

author: Martin Lommatzsch

-->




# Grafische Ableitung finden


**Gib an**, welcher Graphen die Ableitung welches Graphen ist.

<br>

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

	\draw[thick,color=red, ]  plot[samples=100, domain=-3.1:2.75] (\x, {-0.5*\x*\x*\x-0.2*\x*\x+3*\x } ) node[below] {\Large $f$};  
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

	\draw[thick,color=red, ]  plot[samples=100, domain=-4:2.5] (\x, { 1.25*\x+1 } ) node[right] {\Large $g$};  
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

	\draw[thick,color=red, ]  plot[samples=100, domain=-2.55:2.28] (\x, { -1*(1.5+\x)*(1.25-\x) } ) node[above] {\Large $h$};  
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

	\draw[thick,color=red, ]  plot[samples=100, domain=-4:4] (\x, {-0.5*\x+1 } ) node[right] {\Large $k$};  
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

	\draw[thick,color=red, ]  plot[samples=100, domain=-2.3:2.05] (\x, {-1.5*\x*\x-0.4*\x+3 } ) node[below] {\Large $l$};  
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

	\draw[thick,color=red, ]  plot[samples=100, domain=-3.1:2.8] (\x, {0.5*\x*\x*\x+0.2*\x*\x-3*\x } ) node[above] {\Large $m$};  
  \end{scope}


\end{tikzpicture}

```
</center>

--> [[ l ]] ist äquivalent zur ersten Ableitung von [[ f ]]. \
<br>
<br>
<br>

<br>
<br>


<br>
<br>
<br>
<br>
<br>