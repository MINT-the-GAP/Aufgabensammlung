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


tags: Trigonometrie, sehr leicht, sehr niedrig, Angeben

comment: Setze die passende Größe in die gegebene Gleichung zum gegebenen rechtwinkligen Dreieck ein.

author: Martin Lommatzsch

-->




# Gleichungen im rechtwinkligen Dreieck


**Fülle** die Lücke in der Gleichung aus, sodass die Gleichung eine wahre mathematische Aussage zum gegebenen Dreieck darstellt.

<br>
<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__

<center>
```latex  @tikz 

\begin{tikzpicture} [scale=1.66]

\begin{scope}[yshift=0cm] 
  \draw[very thick] (-2,0) -- (2,0) node[midway, below] {\LARGE $f$};
  \draw[very thick] (2,0) -- (2,3) node[midway, right] {\LARGE $g$};
  \draw[very thick] (2,3) -- (-2,0)  node[midway, above] {\LARGE $h$};

    \draw[very thick] (1.7,0) arc (180:90:0.3);
    \node at (1.875,0.125) {\Large $\cdot$};

    \draw[very thick] (-1.4,0) arc (0:37:0.6);
    \node at (-1.6,0.115) {\Large $\delta$};

    \draw[very thick] (2,2.4) arc (270:270-53:0.6);
    \node at (1.875,2.66) {\Large $\varphi$};
\end{scope} 

\end{tikzpicture}
```
</center>

Gleichung: $\quad$  [[($\sin$)|$\cos$|$\tan$|$\text{cot}$]] $(\delta)= \frac{h}{g}$

<br>
</div>

<div class="flex-child">

__$b)\;\;$__

<center>
```latex  @tikz 

\begin{tikzpicture} [scale=1.66]

\begin{scope}[rotate=124] 
  \draw[very thick] (-2,0) -- (2,0) node[midway, left] {\LARGE $n$};
  \draw[very thick] (2,0) -- (2,3) node[midway, below] {\LARGE $z$};
  \draw[very thick] (2,3) -- (-2,0)  node[midway, above] {\LARGE $r$};

    \draw[very thick] (1.7,0) arc (180:90:0.3);
    \node at (1.875,0.125) {\Large $\cdot$};

    \draw[very thick] (-1.4,0) arc (0:37:0.6);
    \node at (-1.6,0.115) {\Large $\gamma$};

    \draw[very thick] (2,2.4) arc (270:270-53:0.6);
    \node at (1.875,2.66) {\Large $\theta$};
\end{scope} 

\end{tikzpicture}
```
</center>

Gleichung: $\quad$ $\cos($ [[$z$|($\gamma$)|$\theta$]] $)= \frac{n}{r}$

</div>




<div class="flex-child">

__$c)\;\;$__

<center>
```latex  @tikz 

\begin{tikzpicture} [scale=1.66]

\begin{scope}[rotate=320] 
  \draw[very thick] (-2,0) -- (2,0) node[midway, below] {\LARGE $x$};
  \draw[very thick] (2,0) -- (2,3) node[midway, right] {\LARGE $y$};
  \draw[very thick] (2,3) -- (-2,0)  node[midway, above] {\LARGE $t$};

    \draw[very thick] (1.7,0) arc (180:90:0.3);
    \node at (1.875,0.125) {\Large $\cdot$};

    \draw[very thick] (-1.4,0) arc (0:37:0.6);
    \node at (-1.6,0.115) {\Large $\xi$};

    \draw[very thick] (2,2.4) arc (270:270-53:0.6);
    \node at (1.875,2.66) {\Large $\omega$};
\end{scope} 

\end{tikzpicture}
```
</center>

Gleichung: $\quad$  [[$\sin$|$\cos$|($\tan$)|$\text{cot}$]] $(\xi)= \frac{h}{g}$

<br>
</div>

<div class="flex-child">

__$d)\;\;$__

<center>
```latex  @tikz 

\begin{tikzpicture} [scale=1.66]

\begin{scope}[xscale=-1, yscale=1, rotate=25] 
  \draw[very thick] (-2,0) -- (2,0) node[midway, below] {\LARGE $k$};
  \draw[very thick] (2,0) -- (2,3) node[midway, right] {\LARGE $p$};
  \draw[very thick] (2,3) -- (-2,0)  node[midway, above] {\LARGE $v$};

    \draw[very thick] (1.7,0) arc (180:90:0.3);
    \node at (1.875,0.125) {\Large $\cdot$};

    \draw[very thick] (-1.4,0) arc (0:37:0.6);
    \node at (-1.6,0.115) {\Large $\mu$};

    \draw[very thick] (2,2.4) arc (270:270-53:0.6);
    \node at (1.875,2.66) {\Large $\kappa$};
\end{scope} 

\end{tikzpicture}
```
</center>

Gleichung: $\quad$ [[ v ]]$^2 = $ [[ k ]]$^2 + p^2$

</div>

</section>
<br>
<br>
<br>
<br>
<br>