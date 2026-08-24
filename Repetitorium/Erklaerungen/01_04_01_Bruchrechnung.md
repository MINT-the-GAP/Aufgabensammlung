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











tags: Erklärung, Bruchrechnung

comment: In diesem Abschnitt wird die Bruchrechnung ausführlich erklärt.

author: Martin Lommatzsch

-->

# Bruchrechnung




{{|>}}
********************************





Ein *Bruch* setzt sich aus seinem Nenner, der definiert in wie viele gleichgroße Teile ein Ganzes unterteilt wird, und den *Zähler*, der beschreibt wie viele Teile vom *Nenner* tatsächlich vorzufinden sind ($\text{Bruch} = \frac{\text{Zähler}}{\text{Nenner}}$). Sprachlich lässt sich der *Bruch* von den Bruchteil zurückführen, welcher eine Anteil von etwas beschreibt und am besten geometrisch veranschaulicht werden kann: 


@CoordinateSystem(`xmin=-3.6;xmax=15.6;ymin=0;ymax=4;id=BRUCH_E1;0;0;0;static=1`)
@Flaeche(`BRUCH_E1;[[0;0];[12;0];[12;4];[0;4]];#ffffff;1;inhalt=0;umfang=0`)

@Punkt(`BRUCH_E1;M1=0;2.5;2;#000000;0;fix`)
@Punkt(`BRUCH_E1;P1=0;4;2;#000000;0;fix`)
@Punkt(`BRUCH_E1;Q1=0;2.5;3.5;#000000;0;fix`)
@Kreissektor(`BRUCH_E1;[M1;P1;Q1];#ff7b80;1;s1=0`)
@Kreis(`BRUCH_E1;k1=0;M1;#000000;0;radius=1.5`)
@Strecke(`BRUCH_E1;[[1;2];[4;2]];#333333;;-;2px`)
@Strecke(`BRUCH_E1;[[2.5;0.5];[2.5;3.5]];#333333;;-;2px`)

@Punkt(`BRUCH_E1;M2=0;9.5;2;#000000;0;fix`)
@Punkt(`BRUCH_E1;P2=0;10.25;0.701;#000000;0;fix`)
@Punkt(`BRUCH_E1;Q2=0;11;2;#000000;0;fix`)
@Kreis(`BRUCH_E1;f2=0;M2;#ff7b80;1;radius=1.5`)
@Kreissektor(`BRUCH_E1;[M2;P2;Q2];#ffffff;1;s2=0`)
@Kreis(`BRUCH_E1;k2=0;M2;#000000;0;radius=1.5`)
@Strecke(`BRUCH_E1;[[8;2];[11;2]];#333333;;-;2px`)
@Strecke(`BRUCH_E1;[[8.75;0.701];[10.25;3.299]];#333333;;-;2px`)
@Strecke(`BRUCH_E1;[[8.75;3.299];[10.25;0.701]];#333333;;-;2px`)


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
 


@CoordinateSystem(`xmin=-3.706;xmax=21.706;ymin=0;ymax=4;id=BRUCH_E2;0;0;0;static=1`)
@Flaeche(`BRUCH_E2;[[0;0];[18;0];[18;4];[0;4]];#ffffff;1;inhalt=0;umfang=0`)

@Punkt(`BRUCH_E2;M1=0;2.5;2;#000000;0;fix`)
@Punkt(`BRUCH_E2;S1=0;2.5;0.5;#000000;0;fix`)
@Punkt(`BRUCH_E2;N1=0;2.5;3.5;#000000;0;fix`)
@Kreissektor(`BRUCH_E2;[M1;S1;N1];#ff7b80;1;s1=0`)
@Kreis(`BRUCH_E2;k1=0;M1;#000000;0;radius=1.5`)
@Strecke(`BRUCH_E2;[[2.5;0.5];[2.5;3.5]];#333333;;-;2px`)

@Punkt(`BRUCH_E2;M2=0;9;2;#000000;0;fix`)
@Punkt(`BRUCH_E2;S2=0;9;0.5;#000000;0;fix`)
@Punkt(`BRUCH_E2;N2=0;9;3.5;#000000;0;fix`)
@Kreissektor(`BRUCH_E2;[M2;S2;N2];#ff7b80;1;s2=0`)
@Kreis(`BRUCH_E2;k2=0;M2;#000000;0;radius=1.5`)
@Strecke(`BRUCH_E2;[[7.5;2];[10.5;2]];#333333;;-;2px`)
@Strecke(`BRUCH_E2;[[9;0.5];[9;3.5]];#333333;;-;2px`)

@Punkt(`BRUCH_E2;M3=0;15.5;2;#000000;0;fix`)
@Punkt(`BRUCH_E2;S3=0;15.5;0.5;#000000;0;fix`)
@Punkt(`BRUCH_E2;N3=0;15.5;3.5;#000000;0;fix`)
@Kreissektor(`BRUCH_E2;[M3;S3;N3];#ff7b80;1;s3=0`)
@Kreis(`BRUCH_E2;k3=0;M3;#000000;0;radius=1.5`)
@Strecke(`BRUCH_E2;[[14;2];[17;2]];#333333;;-;2px`)
@Strecke(`BRUCH_E2;[[15.5;0.5];[15.5;3.5]];#333333;;-;2px`)
@Strecke(`BRUCH_E2;[[14.439;0.939];[16.561;3.061]];#333333;;-;2px`)
@Strecke(`BRUCH_E2;[[14.439;3.061];[16.561;0.939]];#333333;;-;2px`)

@KoordText(`BRUCH_E2;[5.75;2];$\Large =$;#000000;1`)
@KoordText(`BRUCH_E2;[12.25;2];$\Large =$;#000000;1`)




{{|>}} Beim *Kürzen* werden *Zähler* und *Nenner* durch die Zahl *dividiert* mit der man den *Bruch* *kürzen* möchte. Im folgenden Beispiel wird der *Bruch* im ersten Schritt mit zwei und danach mit acht *erweitert*. 

 

$$
\begin{align*}
& \quad \frac{6}{18} = \frac{2}{6} =  \frac{1}{3}   \\
\end{align*}
$$





@CoordinateSystem(`xmin=-3.706;xmax=21.706;ymin=0;ymax=4;id=BRUCH_E3;0;0;0;static=1`)
@Flaeche(`BRUCH_E3;[[0;0];[18;0];[18;4];[0;4]];#ffffff;1;inhalt=0;umfang=0`)

@Punkt(`BRUCH_E3;M1=0;2.5;2;#000000;0;fix`)
@Punkt(`BRUCH_E3;P1=0;4;2;#000000;0;fix`)
@Punkt(`BRUCH_E3;Q1=0;1.75;3.299;#000000;0;fix`)
@Kreissektor(`BRUCH_E3;[M1;P1;Q1];#ff7b80;1;s1=0`)
@Kreis(`BRUCH_E3;k1=0;M1;#000000;0;radius=1.5`)
@Strecke(`BRUCH_E3;[[1;2];[4;2]];#333333;;-;1.5px`)
@Strecke(`BRUCH_E3;[[1.09;1.487];[3.91;2.513]];#333333;;-;1.5px`)
@Strecke(`BRUCH_E3;[[1.351;1.036];[3.649;2.964]];#333333;;-;1.5px`)
@Strecke(`BRUCH_E3;[[1.75;0.701];[3.25;3.299]];#333333;;-;1.5px`)
@Strecke(`BRUCH_E3;[[2.24;0.523];[2.76;3.477]];#333333;;-;1.5px`)
@Strecke(`BRUCH_E3;[[2.76;0.523];[2.24;3.477]];#333333;;-;1.5px`)
@Strecke(`BRUCH_E3;[[3.25;0.701];[1.75;3.299]];#333333;;-;1.5px`)
@Strecke(`BRUCH_E3;[[3.649;1.036];[1.351;2.964]];#333333;;-;1.5px`)
@Strecke(`BRUCH_E3;[[3.91;1.487];[1.09;2.513]];#333333;;-;1.5px`)

@Punkt(`BRUCH_E3;M2=0;9;2;#000000;0;fix`)
@Punkt(`BRUCH_E3;P2=0;10.5;2;#000000;0;fix`)
@Punkt(`BRUCH_E3;Q2=0;8.25;3.299;#000000;0;fix`)
@Kreissektor(`BRUCH_E3;[M2;P2;Q2];#ff7b80;1;s2=0`)
@Kreis(`BRUCH_E3;k2=0;M2;#000000;0;radius=1.5`)
@Strecke(`BRUCH_E3;[[7.5;2];[10.5;2]];#333333;;-;2px`)
@Strecke(`BRUCH_E3;[[8.25;0.701];[9.75;3.299]];#333333;;-;2px`)
@Strecke(`BRUCH_E3;[[8.25;3.299];[9.75;0.701]];#333333;;-;2px`)

@Punkt(`BRUCH_E3;M3=0;15.5;2;#000000;0;fix`)
@Punkt(`BRUCH_E3;P3=0;17;2;#000000;0;fix`)
@Punkt(`BRUCH_E3;Q3=0;14.75;3.299;#000000;0;fix`)
@Kreissektor(`BRUCH_E3;[M3;P3;Q3];#ff7b80;1;s3=0`)
@Kreis(`BRUCH_E3;k3=0;M3;#000000;0;radius=1.5`)
@Strecke(`BRUCH_E3;[[15.5;2];[17;2]];#333333;;-;2px`)
@Strecke(`BRUCH_E3;[[15.5;2];[14.75;3.299]];#333333;;-;2px`)
@Strecke(`BRUCH_E3;[[15.5;2];[14.75;0.701]];#333333;;-;2px`)

@KoordText(`BRUCH_E3;[5.75;2];$\Large =$;#000000;1`)
@KoordText(`BRUCH_E3;[12.25;2];$\Large =$;#000000;1`)


{{|>}} Bei der *Addition* beziehungsweise der *Subtraktion* von *Brüchen* müssen die *Nenner* der beteiligten *Brüche* so *erweitert* oder *gekürzt* werden, dass sie gleich sind. Dann können die *Zähler* verrechnet werden. Um immer einen gemeinsamen *Nenner* zu finden, kann man den ersten *Bruch* mit dem *Nenner* des zweiten *Bruch* und den zweiten *Bruch* mit dem *Nenner* des ersten *Bruchs* *erweitern* (wie im Subtraktionsbeispiel gezeigt) oder der *Nenner* auf das *kleinste gemeinsame Vielfache* gebracht.

 


$$
\begin{align*}
& \quad \frac{1}{4} + \frac{1}{2}  = \frac{1}{4} + \frac{1 \cdot 2}{2 \cdot 2} =  \frac{1}{4} + \frac{2}{4} = \frac{1+2}{4} = \frac{3}{4}  \;\;\;\\ 
\end{align*}
$$



@CoordinateSystem(`xmin=-3;xmax=33;ymin=0;ymax=4;id=BRUCH_E4;0;0;0;static=1`)
@Flaeche(`BRUCH_E4;[[0;0];[30;0];[30;4];[0;4]];#ffffff;1;inhalt=0;umfang=0`)

@Punkt(`BRUCH_E4;M1=0;2.5;2;#000000;0;fix`)
@Punkt(`BRUCH_E4;E1=0;4;2;#000000;0;fix`)
@Punkt(`BRUCH_E4;N1=0;2.5;3.5;#000000;0;fix`)
@Kreissektor(`BRUCH_E4;[M1;E1;N1];#ff7b80;1;s1=0`)
@Kreis(`BRUCH_E4;k1=0;M1;#000000;0;radius=1.5`)
@Strecke(`BRUCH_E4;[[1;2];[4;2]];#333333;;-;2px`)
@Strecke(`BRUCH_E4;[[2.5;0.5];[2.5;3.5]];#333333;;-;2px`)

@Punkt(`BRUCH_E4;M2=0;8.75;2;#000000;0;fix`)
@Punkt(`BRUCH_E4;W2=0;7.25;2;#000000;0;fix`)
@Punkt(`BRUCH_E4;E2=0;10.25;2;#000000;0;fix`)
@Kreissektor(`BRUCH_E4;[M2;W2;E2];#ff7b80;1;s2=0`)
@Kreis(`BRUCH_E4;k2=0;M2;#000000;0;radius=1.5`)
@Strecke(`BRUCH_E4;[[7.25;2];[10.25;2]];#333333;;-;2px`)

@Punkt(`BRUCH_E4;M3=0;15;2;#000000;0;fix`)
@Punkt(`BRUCH_E4;E3=0;16.5;2;#000000;0;fix`)
@Punkt(`BRUCH_E4;N3=0;15;3.5;#000000;0;fix`)
@Kreissektor(`BRUCH_E4;[M3;E3;N3];#ff7b80;1;s3=0`)
@Kreis(`BRUCH_E4;k3=0;M3;#000000;0;radius=1.5`)
@Strecke(`BRUCH_E4;[[13.5;2];[16.5;2]];#333333;;-;2px`)
@Strecke(`BRUCH_E4;[[15;0.5];[15;3.5]];#333333;;-;2px`)

@Punkt(`BRUCH_E4;M4=0;21.25;2;#000000;0;fix`)
@Punkt(`BRUCH_E4;W4=0;19.75;2;#000000;0;fix`)
@Punkt(`BRUCH_E4;E4=0;22.75;2;#000000;0;fix`)
@Kreissektor(`BRUCH_E4;[M4;W4;E4];#ff7b80;1;s4=0`)
@Kreis(`BRUCH_E4;k4=0;M4;#000000;0;radius=1.5`)
@Strecke(`BRUCH_E4;[[19.75;2];[22.75;2]];#333333;;-;2px`)
@Strecke(`BRUCH_E4;[[21.25;0.5];[21.25;3.5]];#333333;;-;2px`)

@Punkt(`BRUCH_E4;M5=0;27.5;2;#000000;0;fix`)
@Punkt(`BRUCH_E4;N5=0;27.5;3.5;#000000;0;fix`)
@Punkt(`BRUCH_E4;W5=0;26;2;#000000;0;fix`)
@Kreis(`BRUCH_E4;f5=0;M5;#ff7b80;1;radius=1.5`)
@Kreissektor(`BRUCH_E4;[M5;N5;W5];#ffffff;1;s5=0`)
@Kreis(`BRUCH_E4;k5=0;M5;#000000;0;radius=1.5`)
@Strecke(`BRUCH_E4;[[26;2];[29;2]];#333333;;-;2px`)
@Strecke(`BRUCH_E4;[[27.5;0.5];[27.5;3.5]];#333333;;-;2px`)

@KoordText(`BRUCH_E4;[5.625;2];$\Large +$;#000000;1`)
@KoordText(`BRUCH_E4;[11.875;2];$\Large =$;#000000;1`)
@KoordText(`BRUCH_E4;[18.125;2];$\Large +$;#000000;1`)
@KoordText(`BRUCH_E4;[24.375;2];$\Large =$;#000000;1`)



$$
\begin{align*}
& \quad \frac{3}{4} - \frac{1}{6}  = \frac{3\cdot 6 }{4\cdot 6 } - \frac{1\cdot 4}{6\cdot 4}  =  \frac{18}{24} - \frac{4}{24} = \frac{18-4}{24} = \frac{14}{24} = \frac{7}{12}   \\
& \quad \frac{3}{4} - \frac{1}{6}  = \frac{3\cdot 3 }{4\cdot 3 } - \frac{1\cdot 2}{6\cdot 2}  =  \frac{9}{12} - \frac{2}{12} = \frac{9-2}{12} =  \frac{7}{12}   \\
\end{align*}
$$







@CoordinateSystem(`xmin=-3;xmax=33;ymin=0;ymax=4;id=BRUCH_E5;0;0;0;static=1`)
@Flaeche(`BRUCH_E5;[[0;0];[30;0];[30;4];[0;4]];#ffffff;1;inhalt=0;umfang=0`)

@Punkt(`BRUCH_E5;M1=0;2.5;2;#000000;0;fix`)
@Punkt(`BRUCH_E5;N1=0;2.5;3.5;#000000;0;fix`)
@Punkt(`BRUCH_E5;W1=0;1;2;#000000;0;fix`)
@Kreis(`BRUCH_E5;f1=0;M1;#ff7b80;1;radius=1.5`)
@Kreissektor(`BRUCH_E5;[M1;N1;W1];#ffffff;1;s1=0`)
@Kreis(`BRUCH_E5;k1=0;M1;#000000;0;radius=1.5`)
@Strecke(`BRUCH_E5;[[1;2];[4;2]];#333333;;-;2px`)
@Strecke(`BRUCH_E5;[[2.5;0.5];[2.5;3.5]];#333333;;-;2px`)

@Punkt(`BRUCH_E5;M2=0;8.75;2;#000000;0;fix`)
@Punkt(`BRUCH_E5;W2=0;7.25;2;#000000;0;fix`)
@Punkt(`BRUCH_E5;Q2=0;8;0.701;#000000;0;fix`)
@Kreissektor(`BRUCH_E5;[M2;W2;Q2];#ff7b80;1;s2=0`)
@Kreis(`BRUCH_E5;k2=0;M2;#000000;0;radius=1.5`)
@Strecke(`BRUCH_E5;[[7.25;2];[10.25;2]];#333333;;-;1.5px`)
@Strecke(`BRUCH_E5;[[8;0.701];[9.5;3.299]];#333333;;-;1.5px`)
@Strecke(`BRUCH_E5;[[8;3.299];[9.5;0.701]];#333333;;-;1.5px`)

@Punkt(`BRUCH_E5;M3=0;15;2;#000000;0;fix`)
@Punkt(`BRUCH_E5;N3=0;15;3.5;#000000;0;fix`)
@Punkt(`BRUCH_E5;W3=0;13.5;2;#000000;0;fix`)
@Kreis(`BRUCH_E5;f3=0;M3;#ff7b80;1;radius=1.5`)
@Kreissektor(`BRUCH_E5;[M3;N3;W3];#ffffff;1;s3=0`)
@Kreis(`BRUCH_E5;k3=0;M3;#000000;0;radius=1.5`)
@Strecke(`BRUCH_E5;[[13.5;2];[16.5;2]];#333333;;-;1.5px`)
@Strecke(`BRUCH_E5;[[13.701;1.25];[16.299;2.75]];#333333;;-;1.5px`)
@Strecke(`BRUCH_E5;[[14.25;0.701];[15.75;3.299]];#333333;;-;1.5px`)
@Strecke(`BRUCH_E5;[[15;0.5];[15;3.5]];#333333;;-;1.5px`)
@Strecke(`BRUCH_E5;[[15.75;0.701];[14.25;3.299]];#333333;;-;1.5px`)
@Strecke(`BRUCH_E5;[[16.299;1.25];[13.701;2.75]];#333333;;-;1.5px`)

@Punkt(`BRUCH_E5;M4=0;21.25;2;#000000;0;fix`)
@Punkt(`BRUCH_E5;W4=0;19.75;2;#000000;0;fix`)
@Punkt(`BRUCH_E5;Q4=0;20.5;0.701;#000000;0;fix`)
@Kreissektor(`BRUCH_E5;[M4;W4;Q4];#ff7b80;1;s4=0`)
@Kreis(`BRUCH_E5;k4=0;M4;#000000;0;radius=1.5`)
@Strecke(`BRUCH_E5;[[19.75;2];[22.75;2]];#333333;;-;1.5px`)
@Strecke(`BRUCH_E5;[[19.951;1.25];[22.549;2.75]];#333333;;-;1.5px`)
@Strecke(`BRUCH_E5;[[20.5;0.701];[22;3.299]];#333333;;-;1.5px`)
@Strecke(`BRUCH_E5;[[21.25;0.5];[21.25;3.5]];#333333;;-;1.5px`)
@Strecke(`BRUCH_E5;[[22;0.701];[20.5;3.299]];#333333;;-;1.5px`)
@Strecke(`BRUCH_E5;[[22.549;1.25];[19.951;2.75]];#333333;;-;1.5px`)

@Punkt(`BRUCH_E5;M5=0;27.5;2;#000000;0;fix`)
@Punkt(`BRUCH_E5;N5=0;27.5;3.5;#000000;0;fix`)
@Punkt(`BRUCH_E5;Q5=0;26.75;0.701;#000000;0;fix`)
@Kreis(`BRUCH_E5;f5=0;M5;#ff7b80;1;radius=1.5`)
@Kreissektor(`BRUCH_E5;[M5;N5;Q5];#ffffff;1;s5=0`)
@Kreis(`BRUCH_E5;k5=0;M5;#000000;0;radius=1.5`)
@Strecke(`BRUCH_E5;[[26;2];[29;2]];#333333;;-;1.5px`)
@Strecke(`BRUCH_E5;[[26.201;1.25];[28.799;2.75]];#333333;;-;1.5px`)
@Strecke(`BRUCH_E5;[[26.75;0.701];[28.25;3.299]];#333333;;-;1.5px`)
@Strecke(`BRUCH_E5;[[27.5;0.5];[27.5;3.5]];#333333;;-;1.5px`)
@Strecke(`BRUCH_E5;[[28.25;0.701];[26.75;3.299]];#333333;;-;1.5px`)
@Strecke(`BRUCH_E5;[[28.799;1.25];[26.201;2.75]];#333333;;-;1.5px`)

@KoordText(`BRUCH_E5;[5.625;2];$\Large -$;#000000;1`)
@KoordText(`BRUCH_E5;[11.875;2];$\Large =$;#000000;1`)
@KoordText(`BRUCH_E5;[18.125;2];$\Large -$;#000000;1`)
@KoordText(`BRUCH_E5;[24.375;2];$\Large =$;#000000;1`)



{{|>}} Bei der *Multiplikation* von *Brüchen*, werden die *Nenner* miteinander *multipliziert* und bilden so den neuen *Nenner*. Auch die *Zähler* werden miteinander *multipliziert*.



$$
\begin{align*}
& \quad \frac{1}{4} \cdot \frac{1}{2}  =   \frac{1 \cdot 1}{4 \cdot 2} = \frac{1}{8}  \;\;\;\\
\end{align*}
$$


{{|>}} Am besten kann die *Multiplikation* von *Brüchen* daran veranschaulicht werden, dass zuvor immer von einem *Ganzen* der Bruchteil bestimmt wurde, während bei der *Multiplikation* von zwei *Brüchen* der *Anteil* von einem *Anteil* bestimmt werden soll.



@CoordinateSystem(`xmin=-3.4;xmax=37.4;ymin=-1.6;ymax=4.2;id=BRUCH_E6;0;0;0;static=1`)
@Flaeche(`BRUCH_E6;[[0;-1.6];[34;-1.6];[34;4.2];[0;4.2]];#ffffff;1;inhalt=0;umfang=0`)

@Punkt(`BRUCH_E6;M1=0;2.8;2;#000000;0;fix`)
@Punkt(`BRUCH_E6;E1=0;4.4;2;#000000;0;fix`)
@Punkt(`BRUCH_E6;W1=0;1.2;2;#000000;0;fix`)
@Kreissektor(`BRUCH_E6;[M1;E1;W1];#ff7b80;1;s1=0`)
@Kreis(`BRUCH_E6;k1=0;M1;#000000;0;radius=1.6`)
@Strecke(`BRUCH_E6;[[1.2;2];[4.4;2]];#333333;;-;2px`)
@KoordText(`BRUCH_E6;[2.8;-0.55];$\Large \frac{1}{2}$;#000000;1`)

@Punkt(`BRUCH_E6;M2=0;9;2;#000000;0;fix`)
@Punkt(`BRUCH_E6;E2=0;10.6;2;#000000;0;fix`)
@Punkt(`BRUCH_E6;W2=0;7.4;2;#000000;0;fix`)
@Kreissektor(`BRUCH_E6;[M2;E2;W2];#ff7b80;1;s2=0`)
@Kreis(`BRUCH_E6;k2=0;M2;#333333;0;radius=1.6`)
@Flaeche(`BRUCH_E6;[[7.2;0.2];[10.8;0.2];[10.8;2];[7.2;2]];#ffffff;1;inhalt=0;umfang=0`)
@Strecke(`BRUCH_E6;[[7.4;2];[10.6;2]];#333333;;-;2px`)
@KoordText(`BRUCH_E6;[9;-0.55];$\Large \frac{1}{2}$;#000000;1`)

@Punkt(`BRUCH_E6;M3=0;15.2;2;#000000;0;fix`)
@Punkt(`BRUCH_E6;E3=0;16.8;2;#000000;0;fix`)
@Punkt(`BRUCH_E6;W3=0;13.6;2;#000000;0;fix`)
@Kreissektor(`BRUCH_E6;[M3;E3;W3];#ff7b80;1;s3=0`)
@Kreis(`BRUCH_E6;k3=0;M3;#333333;0;radius=1.6`)
@Flaeche(`BRUCH_E6;[[13.4;0.2];[17;0.2];[17;2];[13.4;2]];#ffffff;1;inhalt=0;umfang=0`)
@Strecke(`BRUCH_E6;[[13.6;2];[16.8;2]];#333333;;-;2px`)
@Strecke(`BRUCH_E6;[[15.2;2];[15.2;3.6]];#333333;;-;1.5px`)
@Strecke(`BRUCH_E6;[[15.2;2];[16.331;3.131]];#666666;;-;1.5px;linestyle=dashed`)
@Strecke(`BRUCH_E6;[[15.2;2];[14.069;3.131]];#666666;;-;1.5px;linestyle=dashed`)
@KoordText(`BRUCH_E6;[15.2;-0.55];$\Large \frac{4}{8}$;#000000;1`)

@Punkt(`BRUCH_E6;M4=0;21.4;2;#000000;0;fix`)
@Punkt(`BRUCH_E6;E4=0;23;2;#000000;0;fix`)
@Punkt(`BRUCH_E6;W4=0;19.8;2;#000000;0;fix`)
@Punkt(`BRUCH_E6;Q4=0;22.531;3.131;#000000;0;fix`)
@Kreissektor(`BRUCH_E6;[M4;E4;W4];#ffffff;1;s4=0`)
@Kreissektor(`BRUCH_E6;[M4;E4;Q4];#ff7b80;1;s4a=0`)
@Kreis(`BRUCH_E6;k4=0;M4;#333333;0;radius=1.6`)
@Flaeche(`BRUCH_E6;[[19.6;0.2];[23.2;0.2];[23.2;2];[19.6;2]];#ffffff;1;inhalt=0;umfang=0`)
@Strecke(`BRUCH_E6;[[19.8;2];[23;2]];#333333;;-;2px`)
@Strecke(`BRUCH_E6;[[21.4;2];[21.4;3.6]];#333333;;-;1.5px`)
@Strecke(`BRUCH_E6;[[21.4;2];[20.269;3.131]];#666666;;-;1.5px;linestyle=dashed`)
@Strecke(`BRUCH_E6;[[21.4;2];[22.531;3.131]];#666666;;-;1.5px;linestyle=dashed`)
@KoordText(`BRUCH_E6;[21.4;-0.55];$\Large \frac{1}{4}\;\text{von}\;\frac{4}{8}$;#000000;1`)

@Punkt(`BRUCH_E6;M5=0;28.8;2;#000000;0;fix`)
@Punkt(`BRUCH_E6;E5=0;30.4;2;#000000;0;fix`)
@Punkt(`BRUCH_E6;Q5=0;29.931;3.131;#000000;0;fix`)
@Kreissektor(`BRUCH_E6;[M5;E5;Q5];#ff7b80;1;s5=0`)
@Kreis(`BRUCH_E6;k5=0;M5;#000000;0;radius=1.6`)
@Strecke(`BRUCH_E6;[[27.2;2];[30.4;2]];#333333;;-;2px`)
@Strecke(`BRUCH_E6;[[28.8;0.4];[28.8;3.6]];#333333;;-;1.5px`)
@Strecke(`BRUCH_E6;[[28.8;2];[27.669;3.131]];#666666;;-;1.5px;linestyle=dashed`)
@Strecke(`BRUCH_E6;[[28.8;2];[29.931;3.131]];#666666;;-;1.5px;linestyle=dashed`)
@KoordText(`BRUCH_E6;[29.4;-0.55];$\Large \frac{1}{4}\;\text{von}\;\frac{1}{2}=\frac{1}{8}$;#000000;1`)

@KoordText(`BRUCH_E6;[5.9;2];$\Large \longrightarrow$;#000000;1`)
@KoordText(`BRUCH_E6;[12.1;2];$\Large \longrightarrow$;#000000;1`)
@KoordText(`BRUCH_E6;[18.3;2];$\Large \longrightarrow$;#000000;1`)
@KoordText(`BRUCH_E6;[25.1;2];$\Large \longrightarrow$;#000000;1`)


{{|>}} Bei der *Division* muss man mit dem *Kehrwert*, also der Vertauschung von *Nenner* und *Zähler* des *Divisors*, *multiplizieren*. Durch die Fragestellung "Wie oft passt $\frac{1}{2}$ in die Zwei?" wird bei der bereits bekannten Antwort auf die Frage die zugrunde liegende Rechnung deutlich.

 
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















********************************
