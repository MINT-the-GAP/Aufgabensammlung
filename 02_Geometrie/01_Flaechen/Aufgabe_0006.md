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











tags: Rechteck, Länge, Fläche, Umfang, sehr leicht, sehr niedrig, Angeben

comment: Wie viele kleine Strecken umranden die gesamte Fläche?

author: Martin Lommatzsch

-->




# Einheitsrandstrecken


**Gib** Anzahl der umrandenden Strecken **an**.

<br>
 
<section class="dynFlex">
<div class="flex-child">

__$a)\;\;$__ 


```latex  @tikz 
\begin{tikzpicture} [scale=2.5]
\begin{scope}[yshift=0cm]

\begin{scope}[xshift=0cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=0.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=1cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=1.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope}  

  \begin{scope}[xshift=0.0cm]\draw[blue,ultra thick]  (-0.07,0.455)--(-0.07,0) ;\end{scope}
  \begin{scope}[xshift=2.0cm]\draw[blue,ultra thick]  (0.07,0.455)--(0.07,0) ;\end{scope}
\begin{scope}[xshift=0.0cm]\draw[blue,ultra thick]  (0,0.54)--(0.455,0.54) ;\end{scope} 
\begin{scope}[xshift=0.5cm]\draw[blue,ultra thick]  (0,0.54)--(0.455,0.54) ;\end{scope} 
\begin{scope}[xshift=1.0cm]\draw[blue,ultra thick]  (0,0.54)--(0.455,0.54) ;\end{scope} 
\begin{scope}[xshift=1.5cm]\draw[blue,ultra thick]  (0,0.54)--(0.455,0.54) ;\end{scope} 

\end{scope}  

\begin{scope}[yshift=-0.5cm]

\begin{scope}[xshift=0cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=0.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=1cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=1.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope}  

  \begin{scope}[xshift=0.0cm]\draw[blue,ultra thick]  (-0.07,0.455)--(-0.07,0) ;\end{scope}
  \begin{scope}[xshift=2.0cm]\draw[blue,ultra thick]  (0.07,0.455)--(0.07,0) ;\end{scope}
\begin{scope}[yshift=-0.61cm]
\begin{scope}[xshift=0.0cm]\draw[blue,ultra thick]  (0,0.54)--(0.455,0.54) ;\end{scope} 
\begin{scope}[xshift=0.5cm]\draw[blue,ultra thick]  (0,0.54)--(0.455,0.54) ;\end{scope} 
\begin{scope}[xshift=1.0cm]\draw[blue,ultra thick]  (0,0.54)--(0.455,0.54) ;\end{scope} 
\begin{scope}[xshift=1.5cm]\draw[blue,ultra thick]  (0,0.54)--(0.455,0.54) ;\end{scope} 
\end{scope}


\node at (-0.5,1.5) {};
\node at (2.5,1) {};
\node at (-0.5,-0.5) {};

\end{scope}  
\end{tikzpicture}
```

<br>
Es sind [[ 12  ]] umrandende Strecken.

<br>
<br>
<br>

</div>
<div class="flex-child">

__$b)\;\;$__ 


```latex  @tikz 
\begin{tikzpicture} [scale=2.5]
\begin{scope}[yshift=0cm]

\begin{scope}[xshift=0cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=0.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=1cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=1.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=2cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope}  
\begin{scope}[xshift=2.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=3cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=3.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope}  

  \begin{scope}[xshift=0.0cm]\draw[blue,ultra thick]  (-0.07,0.455)--(-0.07,0) ;\end{scope}
  \begin{scope}[xshift=4cm]\draw[blue,ultra thick]  (0.07,0.455)--(0.07,0) ;\end{scope}
\begin{scope}[xshift=0.0cm]\draw[blue,ultra thick]  (0,0.54)--(0.455,0.54) ;\end{scope} 
\begin{scope}[xshift=0.5cm]\draw[blue,ultra thick]  (0,0.54)--(0.455,0.54) ;\end{scope} 
\begin{scope}[xshift=1.0cm]\draw[blue,ultra thick]  (0,0.54)--(0.455,0.54) ;\end{scope} 
\begin{scope}[xshift=1.5cm]\draw[blue,ultra thick]  (0,0.54)--(0.455,0.54) ;\end{scope} 
\begin{scope}[xshift=2.0cm]\draw[blue,ultra thick]  (0,0.54)--(0.455,0.54) ;\end{scope} 
\begin{scope}[xshift=2.5cm]\draw[blue,ultra thick]  (0,0.54)--(0.455,0.54) ;\end{scope} 
\begin{scope}[xshift=3.0cm]\draw[blue,ultra thick]  (0,0.54)--(0.455,0.54) ;\end{scope} 
\begin{scope}[xshift=3.5cm]\draw[blue,ultra thick]  (0,0.54)--(0.455,0.54) ;\end{scope}  

\end{scope}  

\begin{scope}[yshift=-0.5cm]

\begin{scope}[xshift=0cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=0.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=1cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=1.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=2cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope}
\begin{scope}[xshift=2.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=3cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=3.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope}   

  \begin{scope}[xshift=0.0cm]\draw[blue,ultra thick]  (-0.07,0.455)--(-0.07,0) ;\end{scope}
  \begin{scope}[xshift=4cm]\draw[blue,ultra thick]  (0.07,0.455)--(0.07,0) ;\end{scope}

\end{scope} 

\begin{scope}[yshift=-1cm]

\begin{scope}[xshift=0cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=0.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=1cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=1.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=2cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope}
\begin{scope}[xshift=2.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=3cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=3.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope}   

  \begin{scope}[xshift=0.0cm]\draw[blue,ultra thick]  (-0.07,0.455)--(-0.07,0) ;\end{scope}
  \begin{scope}[xshift=4cm]\draw[blue,ultra thick]  (0.07,0.455)--(0.07,0) ;\end{scope}

\end{scope} 

\begin{scope}[yshift=-1.5cm]

\begin{scope}[xshift=0cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=0.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=1cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=1.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=2cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope}
\begin{scope}[xshift=2.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=3cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=3.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope}   

  \begin{scope}[xshift=0.0cm]\draw[blue,ultra thick]  (-0.07,0.455)--(-0.07,0) ;\end{scope}
  \begin{scope}[xshift=4cm]\draw[blue,ultra thick]  (0.07,0.455)--(0.07,0) ;\end{scope}

\end{scope} 

\begin{scope}[yshift=-2cm]

\begin{scope}[xshift=0cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=0.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=1cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=1.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=2cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope}
\begin{scope}[xshift=2.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=3cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=3.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope}   

  \begin{scope}[xshift=0.0cm]\draw[blue,ultra thick]  (-0.07,0.455)--(-0.07,0) ;\end{scope}
  \begin{scope}[xshift=4cm]\draw[blue,ultra thick]  (0.07,0.455)--(0.07,0) ;\end{scope}

\end{scope} 

\begin{scope}[yshift=-2.5cm]

\begin{scope}[xshift=0cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=0.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=1cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=1.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=2cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope}
\begin{scope}[xshift=2.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=3cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=3.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope}   

  \begin{scope}[xshift=0.0cm]\draw[blue,ultra thick]  (-0.07,0.455)--(-0.07,0) ;\end{scope}
  \begin{scope}[xshift=4cm]\draw[blue,ultra thick]  (0.07,0.455)--(0.07,0) ;\end{scope}

\end{scope}  


\begin{scope}[yshift=-3cm]

\begin{scope}[xshift=0cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=0.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=1cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=1.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=2cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope}
\begin{scope}[xshift=2.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=3cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=3.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope}   

  \begin{scope}[xshift=0.0cm]\draw[blue,ultra thick]  (-0.07,0.455)--(-0.07,0) ;\end{scope}
  \begin{scope}[xshift=4cm]\draw[blue,ultra thick]  (0.07,0.455)--(0.07,0) ;\end{scope}

\end{scope} 


\begin{scope}[yshift=-3.5cm]

\begin{scope}[xshift=0cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=0.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=1cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=1.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=2cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope}
\begin{scope}[xshift=2.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=3cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=3.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope}   

  \begin{scope}[xshift=0.0cm]\draw[blue,ultra thick]  (-0.07,0.455)--(-0.07,0) ;\end{scope}
  \begin{scope}[xshift=4cm]\draw[blue,ultra thick]  (0.07,0.455)--(0.07,0) ;\end{scope}

\end{scope} 

\begin{scope}[yshift=-4cm]

\begin{scope}[xshift=0cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=0.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=1cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=1.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=2cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=2.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=3cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope} 
\begin{scope}[xshift=3.5cm]\fill[fill=green!45, draw=black]  (0,0)--(0.47,0)--(0.47,0.47)--(0,0.47)--(0,0) ;\end{scope}   

  \begin{scope}[xshift=0.0cm]\draw[blue,ultra thick]  (-0.07,0.455)--(-0.07,0) ;\end{scope}
  \begin{scope}[xshift=4cm]\draw[blue,ultra thick]  (0.07,0.455)--(0.07,0) ;\end{scope}
\begin{scope}[yshift=-0.61cm]
\begin{scope}[xshift=0.0cm]\draw[blue,ultra thick]  (0,0.54)--(0.455,0.54) ;\end{scope} 
\begin{scope}[xshift=0.5cm]\draw[blue,ultra thick]  (0,0.54)--(0.455,0.54) ;\end{scope} 
\begin{scope}[xshift=1.0cm]\draw[blue,ultra thick]  (0,0.54)--(0.455,0.54) ;\end{scope} 
\begin{scope}[xshift=1.5cm]\draw[blue,ultra thick]  (0,0.54)--(0.455,0.54) ;\end{scope} 
\begin{scope}[xshift=2.0cm]\draw[blue,ultra thick]  (0,0.54)--(0.455,0.54) ;\end{scope} 
\begin{scope}[xshift=2.5cm]\draw[blue,ultra thick]  (0,0.54)--(0.455,0.54) ;\end{scope} 
\begin{scope}[xshift=3.0cm]\draw[blue,ultra thick]  (0,0.54)--(0.455,0.54) ;\end{scope} 
\begin{scope}[xshift=3.5cm]\draw[blue,ultra thick]  (0,0.54)--(0.455,0.54) ;\end{scope} 
\end{scope}

\end{scope}   

\node at (-0.5,1) {};
\node at (4.5,1) {};
\node at (-0.5,-4.5) {};

\end{tikzpicture}
```

<br>
Es sind [[ 34  ]] umrandende Strecken.

<br>
<br>
<br>

</div>
</section>


 


<br>
<br>
<br>
<br>
<br>