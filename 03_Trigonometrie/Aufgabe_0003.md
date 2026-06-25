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











tags: Trigonometrie, sehr leicht, sehr niedrig, Angeben

comment: Setze die passende Größe in die gegebene Gleichung zum gegebenen rechtwinkligen Dreieck ein.

author: Martin Lommatzsch

-->




# Gleichungen im rechtwinkligen Dreieck


<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/grad/1.png" width="30" height="30"> <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/pics/sgrad/1.png" width="120" height="30">  \
**Fülle** die Lücke in der Gleichung aus, sodass die Gleichung eine wahre mathematische Aussage zum gegebenen Dreieck darstellt.


<section class="dynFlex">

<div class="flex-child">

__$a)\;\;$__

<center>

```latex  @tikz 

\begin{tikzpicture} [scale=1.66]

\begin{scope}[yshift=0cm] 
  \draw[very thick] (-2,0) -- (2,0) node[midway, below] {\LARGE $a$};
  \draw[very thick] (2,0) -- (2,3) node[midway, right] {\LARGE $d$};
  \draw[very thick] (2,3) -- (-2,0)  node[midway, above] {\LARGE $c$};

    \draw[very thick] (1.7,0) arc (180:90:0.3);
    \node at (1.875,0.125) {\Large $\cdot$};

    \draw[very thick] (-1.4,0) arc (0:37:0.6);
    \node at (-1.6,0.115) {\Large $\kappa$};

    \draw[very thick] (2,2.4) arc (270:270-53:0.6);
    \node at (1.875,2.66) {\Large $\phi$};
\end{scope} 

\end{tikzpicture}
```
</center>




<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
Gleichung: $\quad$ [[ c ]]$^2 = $ [[ d ]]$^2 + a^2$


@ADetails(1=BE; Trigonometrie, Satz des Pythagoras)


</div>

<div class="flex-child">

__$b)\;\;$__

<center>

```latex  @tikz 

\begin{tikzpicture} [scale=1.66]

\begin{scope}[rotate=124] 
  \draw[very thick] (-2,0) -- (2,0) node[midway, left] {\LARGE $k$};
  \draw[very thick] (2,0) -- (2,3) node[midway, below] {\LARGE $l$};
  \draw[very thick] (2,3) -- (-2,0)  node[midway, above] {\LARGE $h$};

    \draw[very thick] (1.7,0) arc (180:90:0.3);
    \node at (1.875,0.125) {\Large $\cdot$};

    \draw[very thick] (-1.4,0) arc (0:37:0.6);
    \node at (-1.6,0.115) {\Large $\delta$};

    \draw[very thick] (2,2.4) arc (270:270-53:0.6);
    \node at (1.875,2.66) {\Large $\rho$};
\end{scope} 

\end{tikzpicture}
```
</center>




<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
Gleichung: $\quad$ $\cos($ [[$l$|($\delta$)|$\rho$]] $)= \frac{k}{h}$


@ADetails(1=BE; Trigonometrie)

</div>




<div class="flex-child">

__$c)\;\;$__

<center>

```latex  @tikz 

\begin{tikzpicture} [scale=1.66]

\begin{scope}[rotate=320] 
  \draw[very thick] (-2,0) -- (2,0) node[midway, below] {\LARGE $g$};
  \draw[very thick] (2,0) -- (2,3) node[midway, right] {\LARGE $z$};
  \draw[very thick] (2,3) -- (-2,0)  node[midway, above] {\LARGE $u$};

    \draw[very thick] (1.7,0) arc (180:90:0.3);
    \node at (1.875,0.125) {\Large $\cdot$};

    \draw[very thick] (-1.4,0) arc (0:37:0.6);
    \node at (-1.6,0.115) {\Large $\psi$};

    \draw[very thick] (2,2.4) arc (270:270-53:0.6);
    \node at (1.875,2.66) {\Large $\chi$};
\end{scope} 

\end{tikzpicture}
```
</center>




<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
Gleichung: $\quad$  [[($\sin$)|$\cos$|$\tan$|$\text{cot}$]] $(\psi)= \frac{z}{u}$


@ADetails(1=BE; Trigonometrie)


</div>

<div class="flex-child">

__$d)\;\;$__

<center>

```latex  @tikz 

\begin{tikzpicture} [scale=1.66]

\begin{scope}[xscale=-1, yscale=1, rotate=25] 
  \draw[very thick] (-2,0) -- (2,0) node[midway, below] {\LARGE $r$};
  \draw[very thick] (2,0) -- (2,3) node[midway, right] {\LARGE $a$};
  \draw[very thick] (2,3) -- (-2,0)  node[midway, above] {\LARGE $s$};

    \draw[very thick] (1.7,0) arc (180:90:0.3);
    \node at (1.875,0.125) {\Large $\cdot$};

    \draw[very thick] (-1.4,0) arc (0:37:0.6);
    \node at (-1.6,0.115) {\Large $\alpha$};

    \draw[very thick] (2,2.4) arc (270:270-53:0.6);
    \node at (1.875,2.66) {\Large $\sigma$};
\end{scope} 

\end{tikzpicture}
```
</center>




<!-- data-solution-timer="5s" 
data-solution-timer-start="oncheck" 
data-solution-timer-badge="off" 
data-solution-button="5" 
data-hint-button="3"  -->
Gleichung: $\quad$  [[$\sin$|$\cos$|($\tan$)|$\text{cot}$]] $(\sigma)= \frac{r}{s}$


@ADetails(1=BE; Trigonometrie)

</div>

</section>





