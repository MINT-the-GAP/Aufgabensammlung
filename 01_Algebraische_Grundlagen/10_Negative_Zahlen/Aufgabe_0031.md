<!--
version:  0.0.1

language: de

@style
input {
    text-align: center;
}
@end

formula: \carry   \textcolor{red}{\scriptsize #1}
formula: \digit   \rlap{\carry{#1}}\phantom{#2}#2
formula: \permil  \text{‰}

import: https://raw.githubusercontent.com/LiaTemplates/Tikz-Jax/main/README.md

script: https://cdn.jsdelivr.net/gh/LiaTemplates/Tikz-Jax@main/dist/index.js


tags: Negative Zahlen, Koordinatensystem, Stelle, Punkt, sehr leicht, sehr niedrig, Angeben

comment: Stellen und Punkte aus dem Koordinatensystem auslesen.

author: Martin Lommatzsch

-->




# Punkte im Koordinatensystem


**Gib** die Stelle der angegebenen Punkte **an**.

<br>

<center>

```latex  @tikz

\begin{tikzpicture} [scale=1.25, >=latex]

\draw[black!70, step=5mm,   thin, dashed] (-5,-5) grid (5,5);  
\draw[black!70, step=10mm,   thin] (-5,-5) grid (5,5);

  \coordinate (ya) at (0,-5.25);
  \coordinate (xa) at (-5.25,0);
  \coordinate (o) at (0,0);
  \coordinate (y) at (0,5.25);
  \coordinate (x) at (5.25,0);
  
    \draw[<->, black!100, thick] (y) node[above] {\large $y$} -- (0,0) --  (x) node[right]   {\large $x$};

\draw[-, black!100, thin]  (0,0.1) -- (0,-0.1) node[below=0.25cm,left] {\Large 0};
\draw[-, black!100, thin]  (1,0.1) -- (1,-0.1) node[below] {\Large 1};
\draw[-, black!100, thin]  (2,0.1) -- (2,-0.1) node[below] {\Large 2};
\draw[-, black!100, thin]  (3,0.1) -- (3,-0.1) node[below] {\Large 3};
\draw[-, black!100, thin]  (4,0.1) -- (4,-0.1) node[below] {\Large 4};
\draw[-, black!100, thin]  (5,0.1) -- (5,-0.1) node[below] {\Large 5};
\draw[-, black!100, thin]  (0.1,1) -- (-0.1,1) node[left] {\Large 1};
\draw[-, black!100, thin]  (0.1,2) -- (-0.1,2) node[left] {\Large 2};
\draw[-, black!100, thin]  (0.1,3) -- (-0.1,3) node[left] {\Large 3};
\draw[-, black!100, thin]  (0.1,4) -- (-0.1,4) node[left] {\Large 4};
\draw[-, black!100, thin]  (0.1,5) -- (-0.1,5) node[left] {\Large 5};

\draw[-, black!100, thin]  (-1,0.1) -- (-1,-0.1) node[below] {\Large -1};
\draw[-, black!100, thin]  (-2,0.1) -- (-2,-0.1) node[below] {\Large -2};
\draw[-, black!100, thin]  (-3,0.1) -- (-3,-0.1) node[below] {\Large -3};
\draw[-, black!100, thin]  (-4,0.1) -- (-4,-0.1) node[below] {\Large -4};
\draw[-, black!100, thin]  (-5,0.1) -- (-5,-0.1) node[below] {\Large -5};
\draw[-, black!100, thin]  (0.1,-1) -- (-0.1,-1) node[left] {\Large -1};
\draw[-, black!100, thin]  (0.1,-2) -- (-0.1,-2) node[left] {\Large -2};
\draw[-, black!100, thin]  (0.1,-3) -- (-0.1,-3) node[left] {\Large -3};
\draw[-, black!100, thin]  (0.1,-4) -- (-0.1,-4) node[left] {\Large -4};
\draw[-, black!100, thin]  (0.1,-5) -- (-0.1,-5) node[left] {\Large -5};
 
 \draw [ black!100, thick]  (ya) --(o) --  (xa);

  \coordinate[label=center:\LARGE$\times$] (a) at (-4+0.03,2-0.02);
  \node[below right] at (-4,2) {\LARGE $A$};

  \coordinate[label=center:\LARGE$\times$] (b) at (-5+0.03,-3-0.02);
  \node[below right] at (-5,-3) {\LARGE $B$};

  \coordinate[label=center:\LARGE$\times$] (c) at (-3+0.03,-1-0.02);
  \node[below right] at (-3,-1) {\LARGE $C$};

  \coordinate[label=center:\LARGE$\times$] (d) at (-3+0.03,1-0.02);
  \node[below right] at (-3,1) {\LARGE $D$};

  \coordinate[label=center:\LARGE$\times$] (e) at (3+0.03,-1-0.02);
  \node[below right] at (3,-1) {\LARGE $E$};

  \coordinate[label=center:\LARGE$\times$] (f) at (3+0.03,1-0.02);
  \node[below right] at (3,1) {\LARGE $F$};

	%\draw[thick,color=black, ]  plot[samples=100, domain=-0:4] (\x, {2*\x } ) node[right] {\large $f$};  
  
\end{tikzpicture}

```
</center>

--> $A($[[  -4 ]]$|$[[  2  ]]$)$ \
<br>

--> $B($[[  -5 ]]$|$[[  -3  ]]$)$ \
<br>

--> [[  E  ]]$( 3 | -1 )$ \
<br>
<br>

<br>
<br>


<br>
<br>
<br>
<br>
<br>