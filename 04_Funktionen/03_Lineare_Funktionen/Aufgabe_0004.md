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


tags: lineare Funktionen, Bruchrechnung, sehr leicht, niedrig, Angeben

comment: Welcher Term passt zu welchem Graphen?

author: Martin Lommatzsch

-->




# Graphen Funktionsterme zuordnen



Gegeben sei die im Koordinatensystem abgebildeten Graphen. **Ordne** den Funktionen einen zum Graph passenden Funktionsterm **zu**. 

<br>

```latex  @tikz 
\begin{tikzpicture}[scale=2, >=latex]

\draw[black!70, step=5mm,   thin, dashed] (-0,-0) grid (4,4);  
\draw[black!70, step=10mm,   thin] (-0,-0) grid (4,4);

  \coordinate (ya) at (0,-0.25);
  \coordinate (xa) at (-0.25,0);
  \coordinate (o) at (0,0);
  \coordinate (y) at (0,4.25);
  \coordinate (x) at (4.25,0);
  
    \draw[<->, black!100, thick] (y) node[above] {\large $y$} -- (0,0) --  (x) node[right]   {\large $x$};

\draw[-, black!100, thin]  (0,0.1) -- (0,-0.1) node[below=0.25cm,left] {0};
\draw[-, black!100, thin]  (1,0.1) -- (1,-0.1) node[below] {1};
\draw[-, black!100, thin]  (2,0.1) -- (2,-0.1) node[below] {2};
\draw[-, black!100, thin]  (3,0.1) -- (3,-0.1) node[below] {3};
\draw[-, black!100, thin]  (4,0.1) -- (4,-0.1) node[below] {4};
\draw[-, black!100, thin]  (0.1,1) -- (-0.1,1) node[left] {1};
\draw[-, black!100, thin]  (0.1,2) -- (-0.1,2) node[left] {2};
\draw[-, black!100, thin]  (0.1,3) -- (-0.1,3) node[left] {3};
\draw[-, black!100, thin]  (0.1,4) -- (-0.1,4) node[left] {4};
 
 \draw [ black!100, thick]  (ya) --(o) --  (xa);

	\draw[thick,color=black, ]  plot[samples=100, domain=-0:4] (\x, {\x } ) node[right] {\large $f$};  
	\draw[thick,color=red, ]    plot[samples=100, domain=-0:4] (\x, {\x*0.25+1 } ) node[above] {\large $g$};  
	\draw[thick,color=blue, ]   plot[samples=100, domain=-0:4] (\x, {\x*0.5 } ) node[right] {\large $h$};   
    
	\end{tikzpicture}
```

<br>
$f(x)=$ [[($x$)|$4 \cdot x$|$2 \cdot x$|$\frac{1}{2} \cdot x$|$\frac{1}{4} \cdot x$|$x+1$|$x+0,5$|$x+\frac{1}{4}$|$2 \cdot x+1$|$\frac{1}{2} \cdot x+1$|$\frac{1}{4} \cdot x+1$]] \
<br>
$g(x)=$ [[$x$|$4 \cdot x$|$2 \cdot x$|$\frac{1}{2} \cdot x$|$\frac{1}{4} \cdot x$|$x+1$|$x+0,5$|$x+\frac{1}{4}$|$2 \cdot x+1$|$\frac{1}{2} \cdot x+1$|($\frac{1}{4} \cdot x+1$)]] \
<br>
$h(x)=$ [[$x$|$4 \cdot x$|$2 \cdot x$|($\frac{1}{2} \cdot x$)|$\frac{1}{4} \cdot x$|$x+1$|$x+0,5$|$x+\frac{1}{4}$|$2 \cdot x+1$|$\frac{1}{2} \cdot x+1$|$\frac{1}{4} \cdot x+1$]] 

<br>
<br>

