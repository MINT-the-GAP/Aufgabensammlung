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










tags: Erklärung, Subtraktion

comment: In diesem Abschnitt wird die Subtraktion ausführlich erklärt.

author: Martin Lommatzsch

-->

# Subtraktion


{{|>}}
*********************

Die *Subtraktion* ist die Umkehroperation der *Addition* und wird durch den *Subtraktionsoperator* $-$ (gesprochen "minus") beschrieben. Auch bei der *Subtraktion* ist somit die Null das *neutrale Element* der *Subtraktion*, da eine *Subtraktion* mit Null den *Wert des Terms* nicht verändert: $1-0=1$. Auf dem Zahlenstrahl wird somit die Richtung der Schritte der Addition von links nach rechts umgekehrt: \


<center>

@Koordinatensystem(`xmin=-0.25;xmax=6.7;ymin=-0.5;ymax=0.9;width=800;id=SUBT01;achsen=0;grid=0;border=0`)

@Flaeche(`SUBT01;[[-0.24;-0.49];[6.69;-0.49];[6.69;0.89];[-0.24;0.89]];#ffffff;1;inhalt=0;umfang=0`)
@Vektor(`SUBT01;[[0;0];[6.5;0]];#000000;x=0`)
@Strecke(`SUBT01;[[0;-0.1];[0;0.1]];#000000;;-;3px`)
@Strecke(`SUBT01;[[1;-0.1];[1;0.1]];#000000;;-;3px`)
@Strecke(`SUBT01;[[2;-0.1];[2;0.1]];#000000;;-;3px`)
@Strecke(`SUBT01;[[3;-0.1];[3;0.1]];#000000;;-;3px`)
@Strecke(`SUBT01;[[4;-0.1];[4;0.1]];#000000;;-;3px`)
@Strecke(`SUBT01;[[5;-0.1];[5;0.1]];#000000;;-;3px`)
@Strecke(`SUBT01;[[6;-0.1];[6;0.1]];#000000;;-;3px`)
@Bogen(`SUBT01;[5;0.3];145;[4;0.3];35;;->;3px;#000000`)
@Bogen(`SUBT01;[4;0.3];145;[3;0.3];35;;->;3px;#000000`)
@Bogen(`SUBT01;[3;0.3];145;[2;0.3];35;;->;3px;#000000`)
@KoordText(`SUBT01;[4.5;0.62];$-1$;#000000;1`)
@KoordText(`SUBT01;[3.5;0.62];$-1$;#000000;1`)
@KoordText(`SUBT01;[2.5;0.62];$-1$;#000000;1`)
@KoordText(`SUBT01;[0;-0.32];$0$;#000000;1`)
@KoordText(`SUBT01;[1;-0.32];$1$;#000000;1`)
@KoordText(`SUBT01;[2;-0.32];$2$;#000000;1`)
@KoordText(`SUBT01;[3;-0.32];$3$;#000000;1`)
@KoordText(`SUBT01;[4;-0.32];$4$;#000000;1`)
@KoordText(`SUBT01;[5;-0.32];$5$;#000000;1`)
@KoordText(`SUBT01;[6;-0.32];$6$;#000000;1`)
@KoordText(`SUBT01;[6.62;0];$x$;#000000;1`)

</center>






    {{|>}} Der gesamte *Term* ist die sogenannte *Differenz*, während der *Wert der Differenz* immer auf der anderen Seite eines *Gleichheitszeichens* $=$ geschrieben wird. Vom *Minuenden* wird dabei der *Subtrahend* abgezogen. \



$$
\begin{equation}
\begin{split}
\underbrace{\text{Minuend} - \text{Subtrahend}}_{\text{Differenz}}  & = \text{Wert der Differenz} \\ 
 \end{split}
\end{equation}  
$$

Als Beispiel mit *Zahlen*:

$$
\begin{equation}
\begin{split} 
  5 - 2 = 3   \\
 \end{split}
\end{equation}  
$$




<center>

@Koordinatensystem(`xmin=-0.25;xmax=6.7;ymin=-0.5;ymax=1.05;width=800;id=SUBT02;achsen=0;grid=0;border=0`)

@Flaeche(`SUBT02;[[-0.24;-0.49];[6.69;-0.49];[6.69;1.04];[-0.24;1.04]];#ffffff;1;inhalt=0;umfang=0`)
@Vektor(`SUBT02;[[0;0];[6.5;0]];#000000;x=0`)
@Strecke(`SUBT02;[[0;-0.1];[0;0.1]];#000000;;-;3px`)
@Strecke(`SUBT02;[[1;-0.1];[1;0.1]];#000000;;-;3px`)
@Strecke(`SUBT02;[[2;-0.1];[2;0.1]];#000000;;-;3px`)
@Strecke(`SUBT02;[[3;-0.1];[3;0.1]];#000000;;-;3px`)
@Strecke(`SUBT02;[[4;-0.1];[4;0.1]];#000000;;-;3px`)
@Strecke(`SUBT02;[[5;-0.1];[5;0.1]];#000000;;-;3px`)
@Strecke(`SUBT02;[[6;-0.1];[6;0.1]];#000000;;-;3px`)
@Bogen(`SUBT02;[5;0.3];145;[2;0.3];35;;->;3px;#000000`)
@KoordText(`SUBT02;[3.5;0.82];$-3$;#000000;1`)
@KoordText(`SUBT02;[0;-0.32];$0$;#000000;1`)
@KoordText(`SUBT02;[1;-0.32];$1$;#000000;1`)
@KoordText(`SUBT02;[2;-0.32];$2$;#000000;1`)
@KoordText(`SUBT02;[3;-0.32];$3$;#000000;1`)
@KoordText(`SUBT02;[4;-0.32];$4$;#000000;1`)
@KoordText(`SUBT02;[5;-0.32];$5$;#000000;1`)
@KoordText(`SUBT02;[6;-0.32];$6$;#000000;1`)
@KoordText(`SUBT02;[6.62;0];$x$;#000000;1`)

</center>


    {{|>}} Wie schon an den unterschiedlichen Bezeichnungen *Minuend* sowie *Subtrahend* zu erahnen ist, ist die *Subtraktion* weder *kommutativ* noch *assoziativ*. \


$$
\begin{equation}
\begin{split}
  a-b & \neq b-a   \\
  a-b-c & \neq a-(b-c)  \\
 \end{split}
\end{equation}  
$$



    {{|>}} Auch bei der schriftlichen *Subtraktion* werden die Ziffern startend von der kleinsten Position in der *Stellenwerttafel* bearbeitet. Dabei kann die jeweilige *Ziffer* des *Subtrahenden* größer sein als die des *Minuenden*, wie in der zweiten Ziffernspalte. Hierbei ist die Zahl $6$ statt von der $3$ von der $13$ zu *subtrahieren*. Die dazu geschriebene Zehn muss anschließend von der nächsten Ziffernspalte abgezogen werden, was durch die Merkeins in rot wieder symbolisiert wird.


$$
\begin{equation}
\begin{split}
 6337&   \\
-4265& \\ 
	\textcolor{red}{1}\hspace{0.5em}\hspace{0.5em}&  \\ \hline
2072& \\
 \end{split}
\end{equation}  
$$


    {{|>}} Auch bei der *Subtraktion* kann es vorkommen, dass mehrere *Subtrahenden* vorzufinden sind. Dabei sind zwei Arten von Nebenrechnungen zulässig: Die erste Variante sieht vor, dass die *Subtrahenden* nacheinander vom *Minuenden* *subtrahiert* werden, während die zweite Variante vorsieht, dass die *Subtrahenden* *addiert* werden und anschließend die *Summe* der *Subtrahenden* vom *Minuend* abgezogen werden. 

Beispiele der ersten Variante:
$$
\begin{equation}
\begin{split}
  a - b - c &= (a - b) - c     \\
  874 - 125 - 236 &= (874 - 125) - 236      \\
 &\\
  a - b - c - d &= ((a - b) - c) - d      \\
  874 - 125 - 236 - 58 &= ((874 - 125) - 236) - 58      \\
 \end{split}
\end{equation}  
$$



Beispiele der zweiten Variante:
$$
\begin{equation}
\begin{split}
  a - b - c &= a - (b + c)     \\
  874 - 125 - 236 &= 874 - (125 + 236)     \\
 &\\
  a - b - c - d &= a - (b + c + d)     \\
  874 - 125 - 236 - 58 &= 874 - (125 + 236 + 58)     \\
 \end{split}
\end{equation}  
$$


    {{|>}} Beim schriftlichen *Subtrahieren* kann maximal die *Ziffer* $9$ als *Subtrahend* der einzelnen Spalten auftauchen. Somit ist die größte Zahl von der abgezogen werden kann die $18$. Folglich wird lediglich ein gutes Zahlenverständnis bei der *Subtraktion* von den Zahlen $0$ bis $18$ benötigt. \







*********************

