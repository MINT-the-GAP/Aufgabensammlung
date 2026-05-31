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
import:  https://raw.githubusercontent.com/LiaTemplates/Tikz-Jax/main/README.md











tags: Grenzwerte, Definitionsbereich, Wertebereich, Verhalten, mittel, niedrig, Angeben

comment: Welche Eigenschaften passen zum dargestellten Graphen?

author: Martin Lommatzsch

-->




# Eigenschaften von Funktionen


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/2.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/3.png" width="120" height="30">  \
**Gib an**, welche der Eigenschaften zum im Koordinatensystem dargestellten Graphen passen.




<section class="dynFlex">
<div class="flex-child">

__$a)\;\;$__

<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=0.75] 

\draw[black!70, step= 10mm, very thin] (- 4,- 4) grid ( 4, 4);

  \coordinate (ya) at (0,- 4.25);
  \coordinate (xa) at (- 4.25,0);
  \coordinate (o) at (0,0);

  \coordinate (y) at (0,4.25);
    \coordinate (x) at (4.25,0);
    \draw[<->, black!100, thick] (y) node[above] {\scriptsize$y$} -- (0,0) --  (x) node[right]     {\scriptsize$x$};

\draw[-, black!100, thin]  ( 0,0.1) -- ( 0,-0.1) node[below=0.25cm,left] {\scriptsize$0$};
\draw[-, black!100, thin]  ( 1,0.1) -- ( 1,-0.1) node[below] {\scriptsize$1$};
\draw[-, black!100, thin]  ( 2,0.1) -- ( 2,-0.1) node[below] {\scriptsize$2$};
\draw[-, black!100, thin]  ( 3,0.1) -- ( 3,-0.1) node[below] {\scriptsize$3$}; 
\draw[-, black!100, thin]  ( 4,0.1) -- ( 4,-0.1) node[below] {\scriptsize$4$}; 
\draw[-, black!100, thin]  (0.1, 1) -- (-0.1, 1) node[left] {\scriptsize$1$};
\draw[-, black!100, thin]  (0.1, 2) -- (-0.1, 2) node[left] {\scriptsize$2$};
\draw[-, black!100, thin]  (0.1, 3) -- (-0.1, 3) node[left] {\scriptsize$3$}; 
\draw[-, black!100, thin]  (0.1, 4) -- (-0.1, 4) node[left] {\scriptsize$4$}; 

\draw[-, black!100, thin]  (- 1,0.1) -- (- 1,-0.1) node[below] {\scriptsize$-1$};
\draw[-, black!100, thin]  (- 2,0.1) -- (- 2,-0.1) node[below] {\scriptsize$-2$};
\draw[-, black!100, thin]  (- 3,0.1) -- (- 3,-0.1) node[below] {\scriptsize$-3$}; 
\draw[-, black!100, thin]  (- 4,0.1) -- (- 4,-0.1) node[below] {\scriptsize$-4$}; 
\draw[-, black!100, thin]  (0.1,- 1) -- (-0.1,- 1) node[left] {\scriptsize$-1$};
\draw[-, black!100, thin]  (0.1,- 2) -- (-0.1,- 2) node[left] {\scriptsize$-2$};
\draw[-, black!100, thin]  (0.1,- 3) -- (-0.1,- 3) node[left] {\scriptsize$-3$}; 
\draw[-, black!100, thin]  (0.1,- 4) -- (-0.1,- 4) node[left] {\scriptsize$-4$}; 
	
 \draw [ black!100, thick]  (ya) --(o) --  (xa);	 
	
  
	\draw[thick,color=red, ] plot[samples=100, domain=-3:4] (\x, {-2*sqrt(\x+3) +2 } ) node[above] {$ $};  

\end{tikzpicture}

```
</center>



[[ ]] $\mathbb{D} = \left\{x \in \mathbb{R}  \left| x \leq -3 \right. \right\}$
[[X]] $\mathbb{D} = \left\{x \in \mathbb{R}  \left| x \geq -3 \right. \right\}$
[[ ]] $\mathbb{W} = \left\{f(x) \in \mathbb{R}  \left| x > 2 \right. \right\}$
[[ ]] $\mathbb{W} = \left\{f(x) \in \mathbb{R}  \left| x < 2 \right. \right\}$
[[X]] $\mathbb{W} = \left\{f(x) \in \mathbb{R}  \left| x \leq 2 \right. \right\}$
[[ ]] $\mathbb{W} = \left\{f(x) \in \mathbb{R}  \left| x \geq 2 \right. \right\}$

</div>
<div class="flex-child">


__$b)\;\;$__

<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=0.75] 

\draw[black!70, step= 10mm, very thin] (- 4,- 4) grid ( 4, 4);

  \coordinate (ya) at (0,- 4.25);
  \coordinate (xa) at (- 4.25,0);
  \coordinate (o) at (0,0);

  \coordinate (y) at (0,4.25);
    \coordinate (x) at (4.25,0);
    \draw[<->, black!100, thick] (y) node[above] {\scriptsize$y$} -- (0,0) --  (x) node[right]     {\scriptsize$x$};

\draw[-, black!100, thin]  ( 0,0.1) -- ( 0,-0.1) node[below=0.25cm,left] {\scriptsize$0$};
\draw[-, black!100, thin]  ( 1,0.1) -- ( 1,-0.1) node[below] {\scriptsize$1$};
\draw[-, black!100, thin]  ( 2,0.1) -- ( 2,-0.1) node[below] {\scriptsize$2$};
\draw[-, black!100, thin]  ( 3,0.1) -- ( 3,-0.1) node[below] {\scriptsize$3$}; 
\draw[-, black!100, thin]  ( 4,0.1) -- ( 4,-0.1) node[below] {\scriptsize$4$}; 
\draw[-, black!100, thin]  (0.1, 1) -- (-0.1, 1) node[left] {\scriptsize$1$};
\draw[-, black!100, thin]  (0.1, 2) -- (-0.1, 2) node[left] {\scriptsize$2$};
\draw[-, black!100, thin]  (0.1, 3) -- (-0.1, 3) node[left] {\scriptsize$3$}; 
\draw[-, black!100, thin]  (0.1, 4) -- (-0.1, 4) node[left] {\scriptsize$4$}; 

\draw[-, black!100, thin]  (- 1,0.1) -- (- 1,-0.1) node[below] {\scriptsize$-1$};
\draw[-, black!100, thin]  (- 2,0.1) -- (- 2,-0.1) node[below] {\scriptsize$-2$};
\draw[-, black!100, thin]  (- 3,0.1) -- (- 3,-0.1) node[below] {\scriptsize$-3$}; 
\draw[-, black!100, thin]  (- 4,0.1) -- (- 4,-0.1) node[below] {\scriptsize$-4$}; 
\draw[-, black!100, thin]  (0.1,- 1) -- (-0.1,- 1) node[left] {\scriptsize$-1$};
\draw[-, black!100, thin]  (0.1,- 2) -- (-0.1,- 2) node[left] {\scriptsize$-2$};
\draw[-, black!100, thin]  (0.1,- 3) -- (-0.1,- 3) node[left] {\scriptsize$-3$}; 
\draw[-, black!100, thin]  (0.1,- 4) -- (-0.1,- 4) node[left] {\scriptsize$-4$}; 
	
 \draw [ black!100, thick]  (ya) --(o) --  (xa);	 
	
  
	\draw[thick,color=red, ] plot[samples=100, domain=-0.475:4] (\x, {5.43656*\x*pow(e, -\x) } ) node[above] {$ $};  

\end{tikzpicture}

```
</center>



[[X]] $\mathbb{D} = \mathbb{R}$
[[X]] $\mathbb{W} = \left\{f(x) \in \mathbb{R}  \left| x \leq 2 \right. \right\}$
[[ ]] $\mathbb{W} = \left\{f(x) \in \mathbb{R}  \left| x \geq 2 \right. \right\}$
[[X]] $\lim\limits_{x \rightarrow -\infty} f(x) = \infty$
[[ ]] $\lim\limits_{x \rightarrow \infty} f(x) = \infty$
[[X]] $\lim\limits_{x \rightarrow \infty} f(x) = 0$


</div>
</section>










