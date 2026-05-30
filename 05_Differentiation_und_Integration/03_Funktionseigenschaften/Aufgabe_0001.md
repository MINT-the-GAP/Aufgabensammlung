<!--
version:  0.0.1
language: de
narrator: Deutsch Female
mode: Presentation
edit: true

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-DynFlex/refs/heads/main/README.md











tags: Grenzwerte, Definitionsbereich, Wertebereich, Verhalten, mittel, niedrig, Angeben

comment: Welche Eigenschaften passen zum dargestellten Graphen?

author: Martin Lommatzsch

-->




# Eigenschaften von Funktionen


**Gib an**, welche der Eigenschaften zum im Koordinatensystem dargestellten Graphen passen.

<br>


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
	
  
	\draw[thick,color=red, ] plot[samples=100, domain=-1.3:-4] (\x, {\x+1/(2*(\x+1)*(\x+1)) } ) node[right] {$ $};  
	\draw[thick,color=red, ] plot[samples=100, domain=-0.7:4] (\x, {\x+1/(2*(\x+1)*(\x+1)) } ) node[right] {$ $};  

\end{tikzpicture}

```
</center>

<br>

[[X]] $\mathbb{D} = \left\{x \in \mathbb{R}  \setminus \left\{-1\right\} \right\}$
[[X]] $\mathbb{W} = \mathbb{R}$
[[X]] $\lim\limits_{x \rightarrow -\infty} f(x) =  -\infty$
[[X]] $\lim\limits_{x \rightarrow \infty} f(x) = \infty$
[[ ]] $\lim\limits_{x \nearrow -1} f(x) = -\infty$
[[X]] $\lim\limits_{x \searrow -1} f(x) = \infty$

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
	
  
	\draw[thick,color=red, ] plot[samples=100, domain=0:4] (\x, {\x } ) node[above] {$ $};  
	\draw[thick,color=red, ] plot[samples=100, domain=0:-4] (\x, {-\x } ) node[above] {$ $};  

\end{tikzpicture}

```
</center>

<br>

[[ ]] $\mathbb{D} = \mathbb{R}^+$
[[ ]] $\mathbb{W} = \mathbb{R}$
[[X]] $\lim\limits_{x \rightarrow -\infty} f(x) = \infty$
[[X]] $\lim\limits_{x \rightarrow \infty} f(x) = \infty$
[[X]] $\lim\limits_{x \nearrow -1} f(x) = 1$
[[ ]] $\lim\limits_{x \searrow -1} f(x) = -1$


</div>
</section>

<br>
<br>


<br>
<br>
<br>
<br>
<br>