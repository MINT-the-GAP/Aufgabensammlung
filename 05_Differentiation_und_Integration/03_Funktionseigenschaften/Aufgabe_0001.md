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


tags: Grenzwerte, Definitionsbereich, Wertebereich, Verhalten, mittel, niedrig, Angeben

comment: Welche Eigenschaften passen zum dargestellten Graphen?

author: Martin Lommatzsch

-->




# Eigenschaften von Funktionen


**Gib an**, welche der Eigenschaften zum im Koordinatensystem dargestellten Graphen passen.

<br>


<section class="flex-container">
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