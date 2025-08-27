<!--
version:  0.0.1
language: de
narrator: Deutsch Female

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


tags: Erklärung, Bruchrechnung

comment: In diesem Abschnitt wird die Bruchrechnung ausführlich erklärt.

author: Martin Lommatzsch

-->

# Bruchrechnung



{{|>}}
********************************





Ein *Bruch* setzt sich aus seinem *Nenner*, der definiert in wie viele gleichgroße Teile ein Ganzes unterteilt wird, und den *Zähler*, der beschreibt wie viele Teile vom *Nenner* tatsächlich vorzufinden sind ($\text{Bruch} = \frac{\text{Zähler}}{\text{Nenner}}$). Sprachlich lässt sich der *Bruch* von den Bruchteil zurückführen, welcher eine Anteil von etwas beschreibt und am besten geometrisch veranschaulicht werden kann: 


<center>

```latex  @tikz

\begin{tikzpicture}[scale=1,>=latex]

\begin{scope}[xshift=0cm]
\draw[thick,fill=red,opacity=0.5] (0,0) -- (0:1)  arc (0:90:1) -- (0,0); 
\foreach \n in {90,180,270,360} { \draw[opacity=0.5,rotate=\n] (0,0) -- (0:1)  arc (0:90:1) -- (0,0); } 
\draw[thick] (0,0) circle (1cm);  
\end{scope}
 

\begin{scope}[xshift=6cm]
\draw[thick,fill=red,opacity=0.5] (0,0) -- (0:1)  arc (0:300:1) -- (0,0); 
\foreach \n in {60,120,...,360} { \draw[opacity=0.5,rotate=\n] (0,0) -- (0:1)  arc (0:60:1) -- (0,0); } 
\draw[thick] (0,0) circle (1cm);  
\end{scope}
 

\end{tikzpicture}

```
</center>


{{|>}} Hierbei ist im linken Teil der Abbildung ein Viertel vom gesamten *Kreis* markiert, was daran erkannt werden kann, dass der *Kreis* in vier Teile unterteilt wurde und dabei ein Teil eingefärbt wurde. Im rechten Teil der Abbildung gibt es eine Unterteilung in sechs Stücke von denen fünf markiert sind. 



{{|>}} Mittels *Brüchen* kann man die gleiche Zahl auf verschiedene Arten darstellen, so ist $\frac{1}{2}$ das Gleiche wie $\frac{2}{4}$. Wenn der *Nenner* erhöht wird spricht man vom *Erweitern*. Bei einer Verkleinerung des *Nenners* wird vom *Kürzen* gesprochen. 
Dabei muss beachtet werden, dass der *Bruchstrich* nichts weiter als ein *Divisionsoperator* darstellt:


$$
\begin{align*}
& 3 : 4 = \frac{3}{4} \;\; .  \\
\end{align*}
$$


{{|>}} Beim *Erweitern* werden *Zähler* und *Nenner* mit der Zahl *multipliziert* mit der man den *Bruch* *erweitern* möchte. Im folgenden Beispiel wird der *Bruch* im ersten Schritt mit zwei und danach mit vier *erweitert*. 


$$
\begin{align*}
& \quad \frac{1}{2} = \frac{2}{4} = \frac{8}{16}   \\
\end{align*}
$$
 

<center>

```latex  @tikz
\begin{tikzpicture}[scale=1,>=latex]

\begin{scope}[xshift=0cm]
\draw[thick,fill=red,opacity=0.5] (0,0) -- (-90:1)  arc (-90:90:1) -- (0,0); 
\foreach \n in {180,360} { \draw[opacity=0.5,rotate=\n] (0,0) -- (-90:1)  arc (-90:90:1) -- (0,0); } 
\draw[thick] (0,0) circle (1cm); 
\node at (1.5,0) {$=$};	
\end{scope}

\begin{scope}[xshift=3cm]
\draw[thick,fill=red,opacity=0.5] (0,0) -- (-90:1)  arc (-90:90:1) -- (0,0); 
\foreach \n in {90,180,270,360} { \draw[opacity=0.5,rotate=\n] (0,0) -- (-90:1)  arc (-90:90:1) -- (0,0); } 
\draw[thick] (0,0) circle (1cm); 
\node at (1.5,0) {$=$};	
\end{scope}

\begin{scope}[xshift=6cm]
\draw[thick,fill=red,opacity=0.5] (0,0) -- (-90:1)  arc (-90:90:1) -- (0,0); 
\foreach \n in {45,90,...,360} { \draw[opacity=0.5,rotate=\n] (0,0) -- (-90:1)  arc (-90:90:1) -- (0,0); } 
\draw[thick] (0,0) circle (1cm);  
\end{scope}
 

\end{tikzpicture}

```
</center>




{{|>}} Beim *Kürzen* werden *Zähler* und *Nenner* durch die Zahl *dividiert* mit der man den *Bruch* *kürzen* möchte. Im folgenden Beispiel wird der *Bruch* im ersten Schritt mit zwei und danach mit acht *erweitert*. 

 

$$
\begin{align*}
& \quad \frac{6}{18} = \frac{2}{6} =  \frac{1}{3}   \\
\end{align*}
$$
 

 

<center>

```latex  @tikz
\begin{tikzpicture}[scale=1,>=latex]

\begin{scope}[xshift=0cm]
\draw[thick,fill=red,opacity=0.5] (0,0) -- (0:1)  arc (0:120:1) -- (0,0); 
\foreach \n in {120,240,360} { \draw[opacity=0.5,rotate=\n] (0,0) -- (0:1)  arc (0:120:1) -- (0,0); } 
\draw[thick] (0,0) circle (1cm); 
\end{scope}

\begin{scope}[xshift=-3cm]
\draw[thick,fill=red,opacity=0.5] (0,0) -- (0:1)  arc (0:120:1) -- (0,0); 
\foreach \n in {60,120,...,360} { \draw[opacity=0.5,rotate=\n] (0,0) -- (0:1)  arc (0:120:1) -- (0,0); } 
\draw[thick] (0,0) circle (1cm); 
\node at (1.5,0) {$=$};	
\end{scope}

\begin{scope}[xshift=-6cm]
\draw[thick,fill=red,opacity=0.5] (0,0) -- (0:1)  arc (0:120:1) -- (0,0); 
\foreach \n in {20,40,...,360} { \draw[opacity=0.5,rotate=\n] (0,0) -- (0:1)  arc (0:120:1) -- (0,0); } 
\draw[thick] (0,0) circle (1cm); 
\node at (1.5,0) {$=$};	 
\end{scope}
 

\end{tikzpicture}

```
</center>


{{|>}} Bei der *Addition* beziehungsweise der *Subtraktion* von *Brüchen* müssen die *Nenner* der beteiligten *Brüche* so *erweitert* oder *gekürzt* werden, dass sie gleich sind. Dann können die *Zähler* verrechnet werden. Um immer einen gemeinsamen *Nenner* zu finden, kann man den ersten *Bruch* mit dem *Nenner* des zweiten *Bruch* und den zweiten *Bruch* mit dem *Nenner* des ersten *Bruchs* *erweitern* (wie im Subtraktionsbeispiel gezeigt) oder der *Nenner* auf das *kleinste gemeinsame Vielfache* gebracht.

 


$$
\begin{align*}
& \quad \frac{1}{4} + \frac{1}{2}  = \frac{1}{4} + \frac{1 \cdot 2}{2 \cdot 2} =  \frac{1}{4} + \frac{2}{4} = \frac{1+2}{4} = \frac{3}{4}  \;\;\;\\ 
\end{align*}
$$


<center>

```latex  @tikz
\begin{tikzpicture}[scale=1,>=latex]

\begin{scope}[xshift=0cm]
\draw[thick,fill=red,opacity=0.5] (0,0) -- (0:1)  arc (0:90:1) -- (0,0); 
\foreach \n in {90,180,270,360} { \draw[opacity=0.5,rotate=\n] (0,0) -- (0:1)  arc (0:90:1) -- (0,0); } 
\draw[thick] (0,0) circle (1cm); 
\node at (1.5,0) {$+$};	
\end{scope}

\begin{scope}[xshift=3cm]
\draw[thick,fill=red,opacity=0.5] (0,0) -- (0:1)  arc (0:-180:1) -- (0,0); 
\foreach \n in {180,360} { \draw[opacity=0.5,rotate=\n] (0,0) -- (0:1)  arc (0:180:1) -- (0,0); } 
\draw[thick] (0,0) circle (1cm); 
\node at (1.5,0) {$=$};	
\end{scope}
 

\begin{scope}[xshift=6cm]
\draw[thick,fill=red,opacity=0.5] (0,0) -- (0:1)  arc (0:90:1) -- (0,0); 
\foreach \n in {90,180,270,360} { \draw[opacity=0.5,rotate=\n] (0,0) -- (0:1)  arc (0:90:1) -- (0,0); } 
\draw[thick] (0,0) circle (1cm); 
\node at (1.5,0) {$+$};	
\end{scope}

\begin{scope}[xshift=9cm]
\draw[thick,fill=red,opacity=0.5] (0,0) -- (0:1)  arc (0:-180:1) -- (0,0); 
\foreach \n in {90,180,270,360} { \draw[opacity=0.5,rotate=\n] (0,0) -- (0:1)  arc (0:90:1) -- (0,0); } 
\draw[thick] (0,0) circle (1cm); 
\node at (1.5,0) {$=$};	
\end{scope}

\begin{scope}[xshift=12cm]
\draw[thick,fill=red,opacity=0.5] (0,0) -- (0:1)  arc (0:90:1) -- (0,0); 
\draw[thick,fill=red,opacity=0.5] (0,0) -- (0:1)  arc (0:-180:1) -- (0,0); 
\foreach \n in {90,180,270,360} { \draw[opacity=0.5,rotate=\n] (0,0) -- (0:1)  arc (0:90:1) -- (0,0); } 
\draw[thick] (0,0) circle (1cm);  
\end{scope}
 
 

\end{tikzpicture}

```
</center>



$$
\begin{align*}
& \quad \frac{3}{4} - \frac{1}{6}  = \frac{3\cdot 6 }{4\cdot 6 } - \frac{1\cdot 4}{6\cdot 4}  =  \frac{18}{24} - \frac{4}{24} = \frac{18-4}{24} = \frac{14}{24} = \frac{7}{12}   \\
& \quad \frac{3}{4} - \frac{1}{6}  = \frac{3\cdot 3 }{4\cdot 3 } - \frac{1\cdot 2}{6\cdot 2}  =  \frac{9}{12} - \frac{2}{12} = \frac{9-2}{12} =  \frac{7}{12}   \\
\end{align*}
$$


 



<center>

```latex  @tikz
\begin{tikzpicture}[scale=1,>=latex]

\begin{scope}[xshift=0cm]
\draw[thick,fill=red,opacity=0.5] (0,0) -- (0:1)  arc (0:90:1) -- (0,0); 
\draw[thick,fill=red,opacity=0.5] (0,0) -- (0:1)  arc (0:-180:1) -- (0,0); 
\foreach \n in {90,180,270,360} { \draw[opacity=0.5,rotate=\n] (0,0) -- (0:1)  arc (0:90:1) -- (0,0); } 
\draw[thick] (0,0) circle (1cm);  
\node at (1.5,0) {$-$};	
\end{scope} 

\begin{scope}[xshift=3cm]
\draw[thick,fill=red,opacity=0.5] (0,0) -- (180:1)  arc (180:240:1) -- (0,0); 
\foreach \n in {60,120,...,360} { \draw[opacity=0.5,rotate=\n] (0,0) -- (0:1)  arc (0:120:1) -- (0,0); } 
\draw[thick] (0,0) circle (1cm); 
\node at (1.5,0) {$=$};	 
\end{scope} 

\begin{scope}[xshift=6cm]
\draw[thick,fill=red,opacity=0.5] (0,0) -- (0:1)  arc (0:90:1) -- (0,0); 
\draw[thick,fill=red,opacity=0.5] (0,0) -- (0:1)  arc (0:-180:1) -- (0,0); 
\foreach \n in {30,60,...,360} { \draw[opacity=0.5,rotate=\n] (0,0) -- (0:1)  arc (0:30:1) -- (0,0); } 
\draw[thick] (0,0) circle (1cm);  
\node at (1.5,0) {$-$};	
\end{scope} 

\begin{scope}[xshift=9cm]
\draw[thick,fill=red,opacity=0.5] (0,0) -- (180:1)  arc (180:240:1) -- (0,0); 
\foreach \n in {30,60,...,360} { \draw[opacity=0.5,rotate=\n] (0,0) -- (0:1)  arc (0:30:1) -- (0,0); } 
\draw[thick] (0,0) circle (1cm); 
\node at (1.5,0) {$=$};	 
\end{scope} 
 

\begin{scope}[xshift=12cm]
\draw[thick,fill=red,opacity=0.5] (0,0) -- (240:1)  arc (240:450:1) -- (0,0); 
\foreach \n in {30,60,...,360} { \draw[opacity=0.5,rotate=\n] (0,0) -- (0:1)  arc (0:30:1) -- (0,0); } 
\draw[thick] (0,0) circle (1cm);  
\end{scope} 

\end{tikzpicture}

```
</center>



{{|>}} Bei der *Multiplikation* von *Brüchen*, werden die *Nenner* miteinander *multipliziert* und bilden so den neuen *Nenner*. Auch die *Zähler* werden miteinander *multipliziert*.



$$
\begin{align*}
& \quad \frac{1}{4} \cdot \frac{1}{2}  =   \frac{1 \cdot 1}{4 \cdot 2} = \frac{1}{8}  \;\;\;\\
\end{align*}
$$


{{|>}} Am besten kann die *Multiplikation* von *Brüchen* daran veranschaulicht werden, dass zuvor immer von einem *Ganzen* der Bruchteil bestimmt wurde, während bei der *Multiplikation* von zwei *Brüchen* der *Anteil* von einem *Anteil* bestimmt werden soll.


<center>

```latex  @tikz
\begin{tikzpicture}[scale=1,>=latex]

\begin{scope}[xshift=-3.5cm]
\draw[thick,fill=red,opacity=0.5] (0,0) -- (0:1)  arc (0:180:1) -- (0,0);  
\foreach \n in {0,180} { \draw[opacity=0.5,rotate=\n] (0,0) -- (0:1)  arc (0:180:1) -- (0,0); } 
\draw[thick] (0,0) circle (1cm);  
\node at (0,-1.66666) {$\dfrac{1}{2}$};	
\node at (1.75,0) {$\longrightarrow$};	
\end{scope}  

\begin{scope}[xshift=0cm]
\draw[thick,fill=red,opacity=0.5] (0,0) -- (0:1)  arc (0:180:1) -- (0,0);  
\foreach \n in {90} { \draw[opacity=0.5,rotate=\n-90] (0,0) -- (0:1)  arc (0:180:1) -- (0,0); }  
\node at (0,-1.66666) {$\dfrac{1}{2}$};	
\node at (1.75,0) {$\longrightarrow$};	
\end{scope}  

\begin{scope}[xshift=3.5cm]
\draw[thick,fill=red,opacity=0.5] (0,0) -- (0:1)  arc (0:180:1) -- (0,0);  
\foreach \n in {90,180} { \draw[opacity=0.5,rotate=\n-90] (0,0) -- (0:1)  arc (0:90:1) -- (0,0); } 
\foreach \n in {45,90,135} { \draw[opacity=0.5,rotate=\n,dashed] (0,0) -- (0:1)  arc (0:45:1) -- (0,0); }   
\node at (0,-1.66666) {$\dfrac{4}{8}$ };	
\node at (1.75,0) {$\longrightarrow$};	
\end{scope}  

\begin{scope}[xshift=7cm]
\draw[thick,fill=red,opacity=0.5] (0,0) -- (0:1)  arc (0:45:1) -- (0,0);  
\foreach \n in {90,180} { \draw[opacity=0.5,rotate=\n-90] (0,0) -- (0:1)  arc (0:90:1) -- (0,0); } 
\foreach \n in {45,90,135} { \draw[opacity=0.5,rotate=\n,dashed] (0,0) -- (0:1)  arc (0:45:1) -- (0,0); }   
\node at (0,-1.66666) {$\dfrac{1}{4}$ von $\dfrac{4}{8}$ };	
\node at (1.75,0) {$\longrightarrow$};	
\end{scope}  

\begin{scope}[xshift=10.5cm]
\draw[thick,fill=red,opacity=0.5] (0,0) -- (0:1)  arc (0:45:1) -- (0,0);  
\foreach \n in {90,180,270,360} { \draw[opacity=0.5,rotate=\n] (0,0) -- (0:1)  arc (0:90:1) -- (0,0); } 
\foreach \n in {45,90,135} { \draw[opacity=0.5,rotate=\n,dashed] (0,0) -- (0:1)  arc (0:45:1) -- (0,0); }  
\draw[thick] (0,0) circle (1cm);  
\node at (0,-1.66666) {$\dfrac{1}{4}$ von $\dfrac{1}{2} = \dfrac{1}{8}$ };	 
\end{scope}  



\end{tikzpicture}

```
</center>


{{|>}} Bei der *Division* muss man mit dem *Kehrwert*, also der Vertauschung von *Nenner* und *Zähler* des *Divisors*, *multiplizieren*. Durch die Fragestellung "`Wie oft passt $\frac{1}{2}$ in die Zwei?"' wird bei der bereits bekannten Antwort auf die Frage die zugrunde liegende Rechnung deutlich.

 
$$
\begin{align*}
& \quad 2 : \frac{1}{2}  =  \frac{2}{1} : \frac{1}{2}  =  \frac{2}{1} \cdot \frac{2}{1}  =  \frac{2 \cdot 2}{1 \cdot 1} = \frac{4}{1} = 4  \;\;\;\\
& \quad \frac{1}{4} : \frac{1}{2}  =  \frac{1}{4} \cdot \frac{2}{1}  =  \frac{1 \cdot 2}{4 \cdot 1} = \frac{2}{4} = \frac{1}{2}  \;\;\;\\
\end{align*}
$$



{{|>}} Ferner gilt bei Berücksichtigung von *Parametern* oder *Variablen*:

 
$$
\begin{align*}
\frac{a}{b}  &= \frac{a  }{b  } \cdot 1 = \frac{a  }{b  }  \cdot \frac{n}{n} = \frac{a \cdot n}{ b  \cdot n} \quad\qquad\quad\;\;  \text{Erweitern} \\
\frac{a \cdot n}{ b  \cdot n} &= \frac{a  }{b  }  \cdot \frac{n}{n} = \frac{a  }{b  } \cdot 1  = \frac{a}{b}  \quad\qquad\qquad\;\;\; \text{Kürzen} \\
\frac{a}{b} + \frac{c}{d} &= \frac{a \cdot d}{b \cdot d} + \frac{c \cdot b}{d \cdot b} = \frac{a \cdot d + c \cdot  b}{ d  \cdot b} \quad\quad\, \text{Addition} \\
\frac{a}{b} - \frac{c}{d} &= \frac{a \cdot d}{b \cdot d} - \frac{c \cdot b}{d \cdot b} = \frac{a \cdot d - c \cdot  b}{ d  \cdot b} \quad\quad\, \text{Subtraktion} \\
\frac{a}{b} \cdot \frac{c}{d} &= \frac{a \cdot c }{ d \cdot b} \quad\qquad\qquad\qquad\qquad\qquad \text{Multiplikation} \\
\frac{a}{b} : \frac{c}{d} &= \frac{a}{b} \cdot \frac{d}{c} = \frac{a \cdot d }{ c \cdot b} \quad\qquad\qquad\qquad\;\;\; \text{Division} \\
\end{align*}
$$



{{|>}} Im den folgenden Abschnitten wird der Malpunkt zwischen einer Zahl und einem *Parameter* beziehungsweise einer *Variablen* oder zwischen *Parametern* beziehungsweise *Variablen* selbst nicht mehr notiert, es sei denn dieser ist zum Verständnis von besonderer Bedeutung. Aus diesem Grund soll auch auf die Schreibweise für *gemischte Brüche* vollständig verzichtet werden, da in dieser Schreibweise $\frac{13}{6} = 2 \frac{1}{6} = 2 + \frac{1}{6}$ das *Additionszeichen* eingespart wird. Sobald das *Multiplikationszeichen* durch eine Konvention im Unterricht fallen gelassen wird, würde es zu Verwirrungen und Missverständnissen kommen, sodass entweder $2 \frac{1}{6} = 2 + \frac{1}{6}$  oder $2 \frac{1}{6} = 2 \cdot \frac{1}{6}$ gilt. Ein *Bruch* der in einen *gemischten Bruc*h (*gemischte Zahl*) überführt werden kann wird auch *unechter Bruch* genannt. Dieses Buch orientiert sich an der Konvention, welche in der höheren Mathematik verwendet wird. Deswegen sollte auf die Schreibweise von *gemischten Brüchen* vollständig verzichtet werden und ausschließlich nur eine einzige Konvention - die des Weglassens des *Multiplikationsoperators* - verwendet werden.





{{|>}} Da es auch zu sogenannten *Doppelbrüchen* kommen kann, sollte der Umgang hiermit geschult werden. Hierbei werden lediglich die unterschiedlichen Schreibweisen des *Divisionsoperators* ausgenutzt, sodass sich Regeln für die *Doppelbrüche* offenbaren. 


$$
\begin{align*}
\dfrac{\left(\dfrac{a}{b}\right)}{\left(\dfrac{c}{d}\right)} & = \dfrac{a}{b}: \dfrac{c}{d} = \dfrac{a}{b} \cdot  \dfrac{d}{c}  =   \dfrac{a \cdot d}{b \cdot c}  \\
\end{align*}
$$


{{|>}} Aus dem Beispiel geht hervor, dass der *Nenner* des *Zählerbruchs* $b$ insgesamt in den *Nenner* rutscht, während der *Zähler* des *Nennerbruchs* $c$ im *Nenner* bleibt, wohingegen der *Nenner* des *Nennerbruchs* $d$ in den *Zähler* wandert. Dieses Verhalten lässt sich noch weiter verallgemeinern, wenn *Mehrfachbrüche* betrachtet werden. Hierbei sind die *Klammern* lediglich um zu verdeutlichen, welcher *Bruchstrich* mehr Gewichtung besitzt. Es ist nicht nötig bei *Doppelbrüchen* mit *Klammern* zu agieren, allerdings sollte für die Übersicht dennoch manchmal nicht auf Klammern verzichtet werden. 



$$
\begin{align*}
\dfrac{\left[\dfrac{  \left(\dfrac{a}{b}\right)  }{  \left(\dfrac{c}{d}\right)  }\right]}{\left[\dfrac{ \left(\dfrac{e}{f}\right)   }{  \left(\dfrac{g}{h}\right)  }\right]} & = \left[ \dfrac{ \left( \dfrac{a}{b}\right)  }{  \left(\dfrac{c}{d}\right)  } \right]:  \left[\dfrac{ \left(\dfrac{e}{f}\right)   }{  \left(\dfrac{g}{h}\right)  }\right]=    \left[\dfrac{a}{b}   :  \dfrac{c}{d}\right]    :  \left[ \dfrac{e}{f}  :  \dfrac{g}{h} \right] =    \left[\dfrac{a}{b}   \cdot  \dfrac{d}{c}\right]    :  \left[ \dfrac{e}{f}   \cdot  \dfrac{h}{g} \right] \\
&=    \dfrac{a \cdot d}{b \cdot c}      :  \dfrac{e \cdot h}{f \cdot g}  =    \dfrac{a \cdot d}{b \cdot c}      \cdot   \dfrac{f \cdot g}{e \cdot h}       =    \dfrac{a \cdot d  \cdot f \cdot g}{b \cdot c  \cdot e \cdot h}      \\
\end{align*}
$$



{{|>}} Es wird deutlich, dass *Parameter* die in einer geraden Anzahl im *Nenner* vorkommen in der eleganteren Endschreibweise im *Zähler* zu finden sind, während die ungerade Anzahl von *Nennerpositionen* eine Endposition im *Nenner* ergibt. (Beispiele hierzu: $h$ befindet sich im Hauptbruch im *Nenner*, im ersten Nebenbruch im *Nenner* und diesem *Bruch* auch im *Nenner*, sodass $h$ drei *Nennerpositionen* besitzt und somit auch im *Nenner* bleibt. $d$ befindet sich im Hauptbruch im *Zähler*, anschließend im *Nenner* und dort wiederum im *Nenner*, sodass zwei *Nennerpositionen* gezählt werden können und somit $d$ die Endposition im *Zähler* besitzt.) 



{{|>}} Zur *Bruchrechnung* ist anzumerken, dass es nicht möglich ist durch die Zahl Null zu *dividieren*. Diese *Rechenoperation* würde jeder Logik widersprechen und ist damit in der Mathematik nicht vorgesehen. Es existieren Beschreibungen, welche sich damit beschäftigen was in der unmittelbaren Umgebung dieser nicht definierten *Rechenoperation* geschieht und welche im Abschnitt "*Grenzwerte*" und "*Komplexe Zahlen*" vorgestellt werden. 












Im folgenden Video wird das Beschriebene nochmal anhand von Beispielen erklärt:  \


!?[Bruchrechnung](https://www.youtube.com/watch?v=E0jIuLBRPBg)



********************************