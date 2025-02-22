<!--
version:  0.0.1

language: de

@style
main > *:not(:last-child) {
  margin-bottom: 3rem;
}

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


tags: Zahlenstrahl, Zahlenverständnis, Negative Zahlen, sehr leicht, niedrig, Angeben

comment: Welche Zahl müsste dort auf dem Zahlenstrahl stehen?

author: Martin Lommatzsch

-->




# Ganze Zahlen auf dem Zahlenstrahl

**Gib** den Wert für die rot markierte Stelle auf dem Zahlenstrahl **an**.

<section class="flex-container">

<div class="flex-child">
<br>
__$a)\;\;$__ 
<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=1] 

  \node at (-0.75,-0.75) {};
  \node at (9.5, 0.5) {};

    \draw[ ->, black!100, thick] (-0.5,0) --  (8.5,0) node[right] {\large$x$};

\draw[-, black!100,thick]  ( 0,0.1) -- ( 0,-0.1) node[below] {\large$-9$};
\draw[-, black!100,thick]  ( 1,0.1) -- ( 1,-0.1) node[below] {\large$ $};
\draw[-, black!100,thick]  ( 2,0.1) -- ( 2,-0.1) node[below] {\large$ $};
\draw[-, black!100,thick]  ( 3,0.1) -- ( 3,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 4,0.1) -- ( 4,-0.1) node[below] {\large$ $}; 
\draw[-, red!100,ultra thick]  ( 5,0.1) -- ( 5,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 6,0.1) -- ( 6,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 7,0.1) -- ( 7,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 8,0.1) -- ( 8,-0.1) node[below] {\large$-1$}; 

\end{tikzpicture}

```
</center>
[[  -4   ]]
<br>
</div> 

<div class="flex-child">
<br>
__$b)\;\;$__ 
<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=1] 

  \node at (-0.75,-0.75) {};
  \node at (9.5, 0.5) {};

    \draw[ ->, black!100, thick] (-0.5,0) --  (8.5,0) node[right] {\large$x$};

\draw[-, black!100,thick]  ( 0,0.1) -- ( 0,-0.1) node[below] {\large$ $};
\draw[-, red!100,ultra thick]  ( 1,0.1) -- ( 1,-0.1) node[below] {\large$ $};
\draw[-, black!100,thick]  ( 2,0.1) -- ( 2,-0.1) node[below] {\large$ $};
\draw[-, black!100,thick]  ( 3,0.1) -- ( 3,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 4,0.1) -- ( 4,-0.1) node[below] {\large$-8$}; 
\draw[-, black!100,thick]  ( 5,0.1) -- ( 5,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 6,0.1) -- ( 6,-0.1) node[below] {\large$4$}; 
\draw[-, black!100,thick]  ( 7,0.1) -- ( 7,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 8,0.1) -- ( 8,-0.1) node[below] {\large$ $}; 

\end{tikzpicture}

```
</center>
[[  -26  ]]
<br>
</div> 

<div class="flex-child">
<br>
__$c)\;\;$__ 
<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=1] 

  \node at (-0.75,-0.75) {};
  \node at (9.5, 0.5) {};

    \draw[ ->, black!100, thick] (-0.5,0) --  (8.5,0) node[right] {\large$x$};

\draw[-, black!100,thick]  ( 0,0.1) -- ( 0,-0.1) node[below] {\large$-16$};
\draw[-, black!100,thick]  ( 1,0.1) -- ( 1,-0.1) node[below] {\large$ $};
\draw[-, black!100,thick]  ( 2,0.1) -- ( 2,-0.1) node[below] {\large$ $};
\draw[-, black!100,thick]  ( 3,0.1) -- ( 3,-0.1) node[below] {\large$ $}; 
\draw[-, red!100,ultra thick]  ( 4,0.1) -- ( 4,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 5,0.1) -- ( 5,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 6,0.1) -- ( 6,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 7,0.1) -- ( 7,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 8,0.1) -- ( 8,-0.1) node[below] {\large$ 8$}; 

\end{tikzpicture}

```
</center>
[[   -4  ]]
<br>
</div> 

<div class="flex-child">
<br>
__$d)\;\;$__ 
<center>

```latex  @tikz

\begin{tikzpicture}[>=latex, scale=1] 

  \node at (-0.75,-0.75) {};
  \node at (9.5, 0.5) {};

    \draw[ ->, black!100, thick] (-0.5,0) --  (8.5,0) node[right] {\large$x$};

\draw[-, black!100,thick]  ( 0,0.1) -- ( 0,-0.1) node[below] {\large$ -75$};
\draw[-, black!100,thick]  ( 1,0.1) -- ( 1,-0.1) node[below] {\large$ $};
\draw[-, black!100,thick]  ( 2,0.1) -- ( 2,-0.1) node[below] {\large$ $};
\draw[-, black!100,thick]  ( 3,0.1) -- ( 3,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 4,0.1) -- ( 4,-0.1) node[below] {\large$ -45$}; 
\draw[-, black!100,thick]  ( 5,0.1) -- ( 5,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 6,0.1) -- ( 6,-0.1) node[below] {\large$ $}; 
\draw[-, black!100,thick]  ( 7,0.1) -- ( 7,-0.1) node[below] {\large$ $}; 
\draw[-, red!100,ultra thick]  ( 8,0.1) -- ( 8,-0.1) node[below] {\large$ $}; 

\end{tikzpicture}

```
</center>
[[  -25  ]]
<br>
</div> 
</section>
<br>
<br>
<br>
<br>

