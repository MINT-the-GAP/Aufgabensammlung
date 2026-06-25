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
	
  
	\draw[thick,color=red, ] plot[samples=100, domain=-4:-2.2] (\x, { 1/(\x+2)+1 } ) node[above] {$ $}; 
	\draw[thick,color=red, ] plot[samples=100, domain=4:-1.65] (\x, { 1/(\x+2)+1 } ) node[above] {$ $};   

\end{tikzpicture}

```
</center>





<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
[[ ]] $\mathbb{D} = \mathbb{R}$
[[ ]] $\mathbb{W} = \mathbb{R}$
[[X]] $\lim\limits_{x \rightarrow -\infty} f(x) =  1$
[[X]] $\lim\limits_{x \rightarrow \infty} f(x) = 1$
[[ ]] $\lim\limits_{x \nearrow -2} f(x) = -\infty$
[[ ]] $\lim\limits_{x \searrow -2} f(x) = \infty$


@ADetails(1=BE; Definitionsbereich, Wertebereich, Verhalten)

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
	
  
	\draw[thick,color=red, ] plot[samples=100, domain=-0.85:0.85] (\x, { 1/(\x*\x-1) } ) node[above] {$ $};  
	\draw[thick,color=red, ] plot[samples=100, domain=-1.11:-4] (\x, { 1/(\x*\x-1) } ) node[above] {$ $};  
	\draw[thick,color=red, ] plot[samples=100, domain=1.11:4] (\x, { 1/(\x*\x-1) } ) node[above] {$ $};  

\end{tikzpicture}

```
</center>





<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
[[X]] $\mathbb{D} = \left\{ x \in \mathbb{R}  \setminus \left\{-1;1\right\}  \right\}$
[[X]] $\mathbb{W} =\left\{ f(x) \in \mathbb{R}  \left| f(x) \geq 0 \wedge  f(x) \leq -1 \right. \right\}$
[[X]] $\lim\limits_{x \rightarrow -\infty} f(x) = 0$
[[X]] $\lim\limits_{x \rightarrow \infty} f(x) = 0$
[[X]] $\lim\limits_{x \nearrow -1} f(x) = -1$
[[X]] $\lim\limits_{x \nearrow 1} f(x) = 1$


@ADetails(1=BE; Definitionsbereich, Wertebereich, Verhalten)


</div>
</section>










