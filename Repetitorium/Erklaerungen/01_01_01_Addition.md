<!--
version:  1.0.0
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
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-mathpath/refs/heads/master/README.md

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-llm/refs/heads/main/README.md

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-resetter/main/README.md


import: https://raw.githubusercontent.com/MINT-the-GAP/lia-coordinate/refs/heads/main/README.md
import: https://raw.githubusercontent.com/MINT-the-GAP/lia-freeze-v2/main/README.md

import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/main/imports/RedirecterREADME.md










tags: Erklärung, Addition

comment: In diesem Abschnitt wird die Addition ausführlich erklärt.

author: Martin Lommatzsch

-->

# Addition



{{|>}}
***************************


 Die *Addition* ist die wichtigste Grundrechenart und lässt *Zahlen* größer als Eins überhaupt erst erfassbar werden, was am *Zahlenstrahl* schnell erkannt werden kann. Direkt hier wird schon deutlich, dass die Null das *neutrale Element* der *Addition* ist, da eine *Addition* von Null den *Wert des Terms* nicht verändert: $1+0=1$. \




<center>

@Koordinatensystem(`xmin=-0.25;xmax=6.7;ymin=-0.5;ymax=0.9;width=800;id=ADDI01;achsen=0;grid=0;border=0`)

@Flaeche(`ADDI01;[[-0.24;-0.49];[6.69;-0.49];[6.69;0.89];[-0.24;0.89]];#ffffff;1;inhalt=0;umfang=0`)
@Vektor(`ADDI01;[[0;0];[6.5;0]];#000000;x=0`)
@Strecke(`ADDI01;[[0;-0.1];[0;0.1]];#000000;;-;3px`)
@Strecke(`ADDI01;[[1;-0.1];[1;0.1]];#000000;;-;3px`)
@Strecke(`ADDI01;[[2;-0.1];[2;0.1]];#000000;;-;3px`)
@Strecke(`ADDI01;[[3;-0.1];[3;0.1]];#000000;;-;3px`)
@Strecke(`ADDI01;[[4;-0.1];[4;0.1]];#000000;;-;3px`)
@Strecke(`ADDI01;[[5;-0.1];[5;0.1]];#000000;;-;3px`)
@Strecke(`ADDI01;[[6;-0.1];[6;0.1]];#000000;;-;3px`)
@Bogen(`ADDI01;[0;0.3];35;[1;0.3];145;;->;3px;#000000`)
@Bogen(`ADDI01;[1;0.3];35;[2;0.3];145;;->;3px;#000000`)
@Bogen(`ADDI01;[2;0.3];35;[3;0.3];145;;->;3px;#000000`)
@KoordText(`ADDI01;[0.5;0.62];$+1$;#000000;1`)
@KoordText(`ADDI01;[1.5;0.62];$+1$;#000000;1`)
@KoordText(`ADDI01;[2.5;0.62];$+1$;#000000;1`)
@KoordText(`ADDI01;[0;-0.32];$0$;#000000;1`)
@KoordText(`ADDI01;[1;-0.32];$1$;#000000;1`)
@KoordText(`ADDI01;[2;-0.32];$2$;#000000;1`)
@KoordText(`ADDI01;[3;-0.32];$3$;#000000;1`)
@KoordText(`ADDI01;[4;-0.32];$4$;#000000;1`)
@KoordText(`ADDI01;[5;-0.32];$5$;#000000;1`)
@KoordText(`ADDI01;[6;-0.32];$6$;#000000;1`)
@KoordText(`ADDI01;[6.62;0];$x$;#000000;1`)

</center>



    {{|>}} Mit der *Addition* werden *Zahlen* zusammengezählt, was immer durch den *Additionsoperator* $+$ beschrieben wird. Der gesamte *Term* ist die sogenannte *Summe*, während der *Wert der Summe* immer auf der anderen Seite eines *Gleichheitszeichens* $=$ geschrieben wird. \



$$
\begin{equation}
\begin{split}
\underbrace{\text{Summand} + \text{Summand}}_{\text{Summe}}  & = \text{Wert der Summe} \\ 
 \end{split}
\end{equation}  
$$

Als Beispiel mit *Zahlen*:

$$
\begin{equation}
\begin{split} 
  2+4 &= 6   \\
 \end{split}
\end{equation}  
$$


    {{|>}} Im Beispiel der Gleichung ist zu sehen, dass die Zwei mit der Vier zusammengezählt wurde, wie es der *Additionsoperator* $+$ (gesprochen "plus") gefordert hat. Am *Zahlenstrahl* wird deutlich, dass vom ersten *Summanden* aus Schritte im *Wert* vom zweiten *Summanden* nach rechts gegangen wird, um beim *Wert der Summe* zu enden. \



<center>

@Koordinatensystem(`xmin=-0.25;xmax=6.7;ymin=-1.35;ymax=0.45;width=800;id=ADDI02;achsen=0;grid=0;border=0`)

@Flaeche(`ADDI02;[[-0.24;-1.34];[6.69;-1.34];[6.69;0.44];[-0.24;0.44]];#ffffff;1;inhalt=0;umfang=0`)
@Vektor(`ADDI02;[[0;0];[6.5;0]];#000000;x=0`)
@Strecke(`ADDI02;[[0;-0.1];[0;0.1]];#000000;;-;3px`)
@Strecke(`ADDI02;[[1;-0.1];[1;0.1]];#000000;;-;3px`)
@Strecke(`ADDI02;[[2;-0.1];[2;0.1]];#000000;;-;3px`)
@Strecke(`ADDI02;[[3;-0.1];[3;0.1]];#000000;;-;3px`)
@Strecke(`ADDI02;[[4;-0.1];[4;0.1]];#000000;;-;3px`)
@Strecke(`ADDI02;[[5;-0.1];[5;0.1]];#000000;;-;3px`)
@Strecke(`ADDI02;[[6;-0.1];[6;0.1]];#000000;;-;3px`)
@Bogen(`ADDI02;[2;-0.45];325;[6;-0.45];215;;->;3px;#000000`)
@KoordText(`ADDI02;[0;-0.32];$0$;#000000;1`)
@KoordText(`ADDI02;[1;-0.32];$1$;#000000;1`)
@KoordText(`ADDI02;[2;-0.32];$2$;#000000;1`)
@KoordText(`ADDI02;[3;-0.32];$3$;#000000;1`)
@KoordText(`ADDI02;[4;-0.32];$4$;#000000;1`)
@KoordText(`ADDI02;[5;-0.32];$5$;#000000;1`)
@KoordText(`ADDI02;[6;-0.32];$6$;#000000;1`)
@KoordText(`ADDI02;[4;-1.17];$+4$;#000000;1`)
@KoordText(`ADDI02;[6.62;0];$x$;#000000;1`)

</center>



    {{|>}} Bei der *Darstellung* am *Zahlenstrahl* wird deutlich, dass die *Addition* das *Assoziativgesetz* sowie das *Kommutativgesetz* erfüllt. \


*Kommutativgesetz* für die *Addition*: 

$$
\begin{equation}
\begin{split} 
  a+b=b+a   \\
 \end{split}
\end{equation}  
$$

Folgendes Beispiel des *Kommutativgesetzes* ist am *Zahlenstrahl* dargestellt:

$$
\begin{equation}
\begin{split} 
  2+4=4+2   \\
 \end{split}
\end{equation}  
$$



<center>

@Koordinatensystem(`xmin=-0.25;xmax=6.7;ymin=-1.35;ymax=1.05;width=800;id=ADDI03;achsen=0;grid=0;border=0`)

@Flaeche(`ADDI03;[[-0.24;-1.34];[6.69;-1.34];[6.69;1.04];[-0.24;1.04]];#ffffff;1;inhalt=0;umfang=0`)
@Vektor(`ADDI03;[[0;0];[6.5;0]];#000000;x=0`)
@Strecke(`ADDI03;[[0;-0.1];[0;0.1]];#000000;;-;3px`)
@Strecke(`ADDI03;[[1;-0.1];[1;0.1]];#000000;;-;3px`)
@Strecke(`ADDI03;[[2;-0.1];[2;0.1]];#000000;;-;3px`)
@Strecke(`ADDI03;[[3;-0.1];[3;0.1]];#000000;;-;3px`)
@Strecke(`ADDI03;[[4;-0.1];[4;0.1]];#000000;;-;3px`)
@Strecke(`ADDI03;[[5;-0.1];[5;0.1]];#000000;;-;3px`)
@Strecke(`ADDI03;[[6;-0.1];[6;0.1]];#000000;;-;3px`)
@Bogen(`ADDI03;[4;0.3];35;[6;0.3];145;;->;3px;#000000`)
@Bogen(`ADDI03;[2;-0.45];325;[6;-0.45];215;;->;3px;#000000`)
@KoordText(`ADDI03;[0;-0.32];$0$;#000000;1`)
@KoordText(`ADDI03;[1;-0.32];$1$;#000000;1`)
@KoordText(`ADDI03;[2;-0.32];$2$;#000000;1`)
@KoordText(`ADDI03;[3;-0.32];$3$;#000000;1`)
@KoordText(`ADDI03;[4;-0.32];$4$;#000000;1`)
@KoordText(`ADDI03;[5;-0.32];$5$;#000000;1`)
@KoordText(`ADDI03;[6;-0.32];$6$;#000000;1`)
@KoordText(`ADDI03;[5;0.78];$+2$;#000000;1`)
@KoordText(`ADDI03;[4;-1.17];$+4$;#000000;1`)
@KoordText(`ADDI03;[6.62;0];$x$;#000000;1`)

</center>




*Assoziativgesetz* für die *Addition*: 

$$
\begin{equation}
\begin{split} 
  a+b+c=(a+b)+c=a+(b+c)   \\
 \end{split}
\end{equation}  
$$

Folgendes Beispiel des *Assoziativgesetzes* ist am *Zahlenstrahl* dargestellt:

$$
\begin{equation}
\begin{split} 
  1+1+4=1+(1+4)   \\
 \end{split}
\end{equation}  
$$  


<center>

@Koordinatensystem(`xmin=-0.25;xmax=6.7;ymin=-1.35;ymax=1.05;width=800;id=ADDI04;achsen=0;grid=0;border=0`)

@Flaeche(`ADDI04;[[-0.24;-1.34];[6.69;-1.34];[6.69;1.04];[-0.24;1.04]];#ffffff;1;inhalt=0;umfang=0`)
@Vektor(`ADDI04;[[0;0];[6.5;0]];#000000;x=0`)
@Strecke(`ADDI04;[[0;-0.1];[0;0.1]];#000000;;-;3px`)
@Strecke(`ADDI04;[[1;-0.1];[1;0.1]];#000000;;-;3px`)
@Strecke(`ADDI04;[[2;-0.1];[2;0.1]];#000000;;-;3px`)
@Strecke(`ADDI04;[[3;-0.1];[3;0.1]];#000000;;-;3px`)
@Strecke(`ADDI04;[[4;-0.1];[4;0.1]];#000000;;-;3px`)
@Strecke(`ADDI04;[[5;-0.1];[5;0.1]];#000000;;-;3px`)
@Strecke(`ADDI04;[[6;-0.1];[6;0.1]];#000000;;-;3px`)
@Bogen(`ADDI04;[4;0.3];35;[6;0.3];145;;->;3px;#000000`)
@Bogen(`ADDI04;[2;-0.45];325;[6;-0.45];215;;->;3px;#000000`)
@KoordText(`ADDI04;[0;-0.32];$0$;#000000;1`)
@KoordText(`ADDI04;[1;-0.32];$1$;#000000;1`)
@KoordText(`ADDI04;[2;-0.32];$2$;#000000;1`)
@KoordText(`ADDI04;[3;-0.32];$3$;#000000;1`)
@KoordText(`ADDI04;[4;-0.32];$4$;#000000;1`)
@KoordText(`ADDI04;[5;-0.32];$5$;#000000;1`)
@KoordText(`ADDI04;[6;-0.32];$6$;#000000;1`)
@KoordText(`ADDI04;[5;0.78];$+2$;#000000;1`)
@KoordText(`ADDI04;[4;-1.17];$+4$;#000000;1`)
@KoordText(`ADDI04;[6.62;0];$x$;#000000;1`)

</center>




    {{|>}} Für größere *Zahlen* lohnt sich eine Schreibweise, die die *Zahlen*, die *addiert* werden sollen, entsprechtend ihrer Position in der Stellenwerttafel untereinander schreibt. Dabei wird der *Wert des Terms* unter einem Strich ausgerechnet.\






<!-- data-type="none" 
data-sortable="false" -->
|  Tausender   |  Hunderter |  Zehner   |  Einer  |    |
| :----------: | :--------: | :-------: | :-----: | :-----: |
|       $1$      |      $3$     |    $4$      |    $7$    |    1. Summand    |
|       $4$      |      $2$     |    $6$      |    $5$    |    2. Summand    |
|       $5$      |      $5$     | $\textcolor{red}{1}0$ |    $\textcolor{red}{1}2$    |    Einzelziffersummen    |
|       $5$      |      $6$     |    $1$      |    $2$    |    Wert der Summe    |

    {{|>}} Außerhalb der *Stellenwerttafel* wirkt die Rechnung der schriftlichen *Addition* übersichtlicher: \


$$
\begin{equation}
\begin{split}
 1347&   \\
+4265& \\ \hline
+\hspace{0.5em}\hspace{0.5em}\textcolor{red}{1}2& \\ 
+\hspace{0.5em}\textcolor{red}{1}0\hspace{0.5em}& \\ 
+\hspace{0.5em}5\hspace{0.5em}\hspace{0.5em}& \\ 
+5\hspace{0.5em}\hspace{0.5em}\hspace{0.5em}& \\ \hline
5612& \\
 \end{split}
\end{equation}  
$$


{{|>}} Dies kann noch wie folgt verkürzt geschrieben werden: \

$$
\begin{equation}
\begin{split}
1347&   \\
+4265& \\ 
	\textcolor{red}{11}\hspace{0.5em}\hspace{0.5em}&  \\ \hline
5612& \\
 \end{split}
\end{equation}  
$$


{{|>}} Bei dieser Art der Schreibweise, werden die *Zahlen*, die entsprechend ihrer Position in der *Stellenwerttafel* untereinander stehen, einzeln *addiert*. Dabei wird immer bei der *Ziffern* der kleinsten Position in der *Stellenwerttafel* begonnen. Dies sind stets die *Ziffern*, die am weitesten rechts bei den *Zahlen* stehen. Wenn die *addierte* Zahl höher ist als Neun, dann wird die Eins der Zehn zur nächsten Zahlenspalte hinzugezählt. Diese Eins wird auch oft Merkeins genannt und ist in der Beispielrechnung rot eingefärbt. Der Vorteil dieser Schreibweise ist es, dass niemals höhere *Zahlen* als $9$ und $9$ *addiert* werden können. Folglich benötigt der Schüler nur ein sehr gutes Zahlenverständnis von der Zahl $0$ bis $18$ um jegliche Additionsaufgabe zu lösen. Falls mehr als zwei *Summanden* (im Beispiel sind $1337$ und $4265$ die *Summanden*) vorkommen ist es immer erlaubt in einer Nebenrechnung zunächst nur zwei *Summanden* zu *addieren* um dann anschließend die *Summe* der ersten beiden *Summanden* mit dem nächsten *Summanden* zu verrechnen. 





***************************