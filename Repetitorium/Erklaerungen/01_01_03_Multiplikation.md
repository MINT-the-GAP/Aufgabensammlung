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










tags: Erklärung, Multiplikation

comment: In diesem Abschnitt wird die Multiplikation ausführlich erklärt.

author: Martin Lommatzsch

-->

# Multiplikation


{{|>}}
*********************


Die *Multiplikation* ist die erste abkürzende Schreibweise, die in der Schule eingeführt wird. Dabei wird zum Beispiel die Rechnung $3+3+3+3$ abgekürzt als $4 \cdot 3$ geschrieben, also vier mal die Drei, was durch den *Multiplikationsoperator* $\cdot$ beschrieben wird. Werden also gleichwertige *Summanden* *aufaddiert*, dann kann dies durch die *Multiplikation* im Sinne der Anzahl der *Summanden* mal dem Wert des *Summanden* beschrieben werden. Folglich werden die beiden *Faktoren* miteinander *multipliziert* und bilden ein *Produkt*, während der *Wert des Produkts* auf der anderen Seite des *Gleichheitszeichens* steht.


$$
\begin{equation}
\begin{split}
\underbrace{\text{Faktor} \cdot \text{Faktor}}_{\text{Produkt}}  & = \text{Wert des Produkts} \\ 
 \end{split}
\end{equation}  
$$



Als Beispiel mit *Zahlen*:

$$
\begin{equation}
\begin{split} 
  5 \cdot 4 &= 20   \\
 \end{split}
\end{equation}  
$$

    {{|>}} Am Beispiel kann schon erkannt werden, dass die Anzahl der gleichwertigen *Summanden* und der Wert des *Summanden* vertauscht werden kann. \


$$
\begin{equation}
\begin{split} 
  5 + 5 +5+5 &= 20   \\
  4+4+4+4+4 &= 20   \\
 \end{split}
\end{equation}  
$$

    {{|>}} Diese Rechnung kann ebenfalls geometrisch interpretiert werden, indem mehrfache Schrittfolgen gleicher Werte am *Zahlenstrahl* vollzogen oder eine zweidimensionale *rechteckige* Anordnung von *Einheitsflächen* betrachtet wird. Beide Interpretationen werden am Beispiel $2 \cdot 4$ dargestellt: \





<center>

@Koordinatensystem(`xmin=-0.25;xmax=9.7;ymin=-0.5;ymax=0.9;width=800;id=MULT01;achsen=0;grid=0;border=0`)

@Flaeche(`MULT01;[[-0.24;-0.49];[9.69;-0.49];[9.69;0.89];[-0.24;0.89]];#ffffff;1;inhalt=0;umfang=0`)
@Vektor(`MULT01;[[0;0];[9.5;0]];#000000;x=0`)
@Strecke(`MULT01;[[0;-0.1];[0;0.1]];#000000;;-;3px`)
@Strecke(`MULT01;[[1;-0.1];[1;0.1]];#000000;;-;3px`)
@Strecke(`MULT01;[[2;-0.1];[2;0.1]];#000000;;-;3px`)
@Strecke(`MULT01;[[3;-0.1];[3;0.1]];#000000;;-;3px`)
@Strecke(`MULT01;[[4;-0.1];[4;0.1]];#000000;;-;3px`)
@Strecke(`MULT01;[[5;-0.1];[5;0.1]];#000000;;-;3px`)
@Strecke(`MULT01;[[6;-0.1];[6;0.1]];#000000;;-;3px`)
@Strecke(`MULT01;[[7;-0.1];[7;0.1]];#000000;;-;3px`)
@Strecke(`MULT01;[[8;-0.1];[8;0.1]];#000000;;-;3px`)
@Strecke(`MULT01;[[9;-0.1];[9;0.1]];#000000;;-;3px`)
@Bogen(`MULT01;[0;0.3];35;[2;0.3];145;;->;3px;#000000`)
@Bogen(`MULT01;[2;0.3];35;[4;0.3];145;;->;3px;#000000`)
@Bogen(`MULT01;[4;0.3];35;[6;0.3];145;;->;3px;#000000`)
@Bogen(`MULT01;[6;0.3];35;[8;0.3];145;;->;3px;#000000`)
@KoordText(`MULT01;[1;0.62];$+2$;#000000;1`)
@KoordText(`MULT01;[3;0.62];$+2$;#000000;1`)
@KoordText(`MULT01;[5;0.62];$+2$;#000000;1`)
@KoordText(`MULT01;[7;0.62];$+2$;#000000;1`)
@KoordText(`MULT01;[0;-0.32];$0$;#000000;1`)
@KoordText(`MULT01;[1;-0.32];$1$;#000000;1`)
@KoordText(`MULT01;[2;-0.32];$2$;#000000;1`)
@KoordText(`MULT01;[3;-0.32];$3$;#000000;1`)
@KoordText(`MULT01;[4;-0.32];$4$;#000000;1`)
@KoordText(`MULT01;[5;-0.32];$5$;#000000;1`)
@KoordText(`MULT01;[6;-0.32];$6$;#000000;1`)
@KoordText(`MULT01;[7;-0.32];$7$;#000000;1`)
@KoordText(`MULT01;[8;-0.32];$8$;#000000;1`)
@KoordText(`MULT01;[9;-0.32];$9$;#000000;1`)
@KoordText(`MULT01;[9.62;0];$x$;#000000;1`)

</center>

<center>

@Koordinatensystem(`xmin=-0.5;xmax=9.5;ymin=-0.5;ymax=4.5;width=800;id=MULT02;achsen=0;grid=0;border=0`)

@Flaeche(`MULT02;[[-0.49;-0.49];[9.49;-0.49];[9.49;4.49];[-0.49;4.49]];#ffffff;1;inhalt=0;umfang=0`)
@Flaeche(`MULT02;[[0;1];[4;1];[4;3];[0;3]];#80f580;1;inhalt=0;umfang=0`)
@Flaeche(`MULT02;[[7;0];[9;0];[9;4];[7;4]];#80f580;1;inhalt=0;umfang=0`)

@Strecke(`MULT02;[[0;1];[4;1];[4;3];[0;3];[0;1]];#000000;;-;2px`)
@Strecke(`MULT02;[[1;1];[1;3]];#000000;;-;2px`)
@Strecke(`MULT02;[[2;1];[2;3]];#000000;;-;2px`)
@Strecke(`MULT02;[[3;1];[3;3]];#000000;;-;2px`)
@Strecke(`MULT02;[[0;2];[4;2]];#000000;;-;2px`)

@Strecke(`MULT02;[[7;0];[9;0];[9;4];[7;4];[7;0]];#000000;;-;2px`)
@Strecke(`MULT02;[[8;0];[8;4]];#000000;;-;2px`)
@Strecke(`MULT02;[[7;1];[9;1]];#000000;;-;2px`)
@Strecke(`MULT02;[[7;2];[9;2]];#000000;;-;2px`)
@Strecke(`MULT02;[[7;3];[9;3]];#000000;;-;2px`)

</center>




    {{|>}} Es wird deutlich, dass die *Multiplikation* das *Assoziativgesetz* sowie das *Kommutativgesetz* erfüllt. \


*Kommutativgesetz* für die *Multiplikation*: 

$$
\begin{equation}
\begin{split} 
  a \cdot b=b \cdot a   \\
 \end{split}
\end{equation}  
$$


*Assoziativgesetz* für die *Multiplikation*: 

$$
\begin{equation}
\begin{split} 
  a \cdot b \cdot c = (a \cdot b) \cdot c = a \cdot (b \cdot c)  \\
 \end{split}
\end{equation}  
$$


    {{|>}} Die schriftliche *Multiplikation* sieht Zahlen von $0$ bis $9 \cdot 9 = 81$ vor, da auch hier die einzelnen *Ziffern* der Zahl nacheinander bearbeitet werden. Die *Multiplikation* kann in mehreren Schritten aus der *Addition* heraus eingeführt werden. Hierbei wird das Beispiel $3463 \cdot 5$ betrachtet:  \



$$
\begin{equation}
\begin{split}
3463 &   \\
+3463 & \\ 
+3463 & \\ 
+3463 & \\ 
+3463 & \\ 
	\textcolor{red}{231}\hspace{0.5em}&  \\ \hline
17315& \\
 \end{split}
\end{equation}  
$$

$$
\begin{equation}
\begin{split}
3463 \cdot 5 &   \\ \hline
+\hspace{0.5em}\hspace{0.5em}\hspace{0.5em}15\textcolor{red}{}& \\ 
+\hspace{0.5em}\hspace{0.5em}30\textcolor{red}{0}& \\ 
+\hspace{0.5em}20\textcolor{red}{00}& \\ 
+15\textcolor{red}{000}& \\   \hline
17315& \\
 \end{split}
\end{equation}  
$$


$$
\begin{equation}
\begin{split}
3_{\textcolor{red}{2}}4_{\textcolor{red}{3}}6_{\textcolor{red}{1}}3 \cdot 5 &   \\ \hline 
17315& \\
 \end{split}
\end{equation}  

$$



    {{|>}} Hierbei wird deutlich, dass die Schreibweisen sich verkürzen, sodass bei der dritten Variante die Merkzahlen im *Index* der Ziffern des ersten *Faktors* geschrieben wurden. Dies ist nicht mehr übersichtlich genug, wenn beide *Faktoren* über mehrere Ziffern verfügen, sodass dann die Merkzahlen entweder separat niedergeschrieben oder im Kopf behalten werden müssen. \


$$
\begin{equation}
\begin{split}
1337 \cdot \textcolor{blue}{2}\textcolor{green}{3} &   \\ \hline
\textcolor{blue}{2674}\textcolor{red}{0}& \\ 
+\textcolor{red}{0}\textcolor{green}{4011}& \\ \hline
30751& \\
 \end{split}
\end{equation}  
$$


    {{|>}} Aus der Gleichung ist zu erkennen, dass die $2$ auf die Zahl $7$ wirkt und danach auf die $3$. Dabei wird die Zehn der Rechnung $2 \cdot 7 = 14$ mit zur nächsten Ziffer von rechts gezählt. Das Ergebnis wird so notiert, dass die am weitesten links stehende *Ziffer* direkt unter der betrachteten Zahl steht (im Beispiel unter der $2$). Anschließend wird dies mit der nächsten *Ziffer*, hier die Drei, wiederholt. Die untereinander geschriebenen Zahlen werden dann *addiert*, sodass sich der Wert des *Terms* ergibt. \





    {{|>}} Da die *Multiplikation* die abkürzende Schreibweise der *Addition* von gleichwertigen *Summanden* ist, ergibt sich daraus die erste *Vorrangsregel*: Punktrechnungen werden vor Strichrechnungen durchgeführt. \

$$
\begin{equation}
\begin{split}
\textcolor{blue}{3 \cdot 5} + \textcolor{red}{2 \cdot 8} & = \textcolor{blue}{5+5+ 5} + \textcolor{red}{8+8}   \\
 & = \textcolor{blue}{15} + \textcolor{red}{16}   \\ 
 & = 31   \\ 
 \end{split}
\end{equation}  
$$






*********************