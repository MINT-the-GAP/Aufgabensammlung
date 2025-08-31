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


tags: Erklärung, Fakultät, Zahlensysteme

comment: In diesem Abschnitt werden Zahlensysteme ausführlich erklärt.

author: Martin Lommatzsch

-->


# Zahlensysteme




{{|>}}
********************************




Neben der verschiedenen Schreibweisen der Zahlen in den jeweiligen Sprachen existieren auch noch verschiedene **Zahlensysteme**. Besonders in der Informatik werden neben dem **Dezimalsystem** (10er-System) auch das **Dualsystem** (2er-System), **Oktalsystem** (8er-System) und das **Hexadezimalsystem** (16er-System) verwendet. In diesem Abschnitt werden die Systeme und die oftmals benutzen **römischen Zahlen** vorgestellt. 


<h2> Die Geschichte der Zwölf </h2>

{{|>}} Um die heutigen Bezeichnungen von Zahlen zu verstehen, muss die Vergangenheit betrachtet werden. Vor mehreren tausend Jahren haben die Menschen nicht mit der Anzahl ihrer Finger sondern mit den Fingergliedern gezählt. Aus diesem Grund hat der Daumen auch rein sprachlich eine besondere Bedeutung, da dieser benutzt wurde mittels den zwölf Fingergliedern die Zahl anzuzeigen. Aus dieser Betrachtung haben sich religiöse Züge herauskristallisiert, da so das Wissen damals leichter bewahrt werden könnte. Aus diesem Grund heißt die Zwölf nicht Zweizehn und die Elf nicht Einzehn. Auch sind die zwölf Stunden Sonnenaufgang und zwölf Stunden Sonnenuntergang hiermit zu erklären. Hat man sich verzählt, kam man bei der 13 raus, was somit den Fehler offenbarte und heute immernoch im Mythos der Unglückzahl zu finden ist.

{{|>}} Da Stunden eine sehr große Zeitdauer sind, wurde kleinere Zeitdauern mit der einen Hand im 12er-System gezählt und mit den Fingern (dieses mal inklusive Daumen) an der anderen Hand vermerkt. Aus diesem Grund haben Stunden 60 Minuten und Minuten 60 Sekunden, da $12 \cdot 5 = 60$.

{{|>}} Die damaligen Astronomen waren auch in der Landwirtschaft tätig und konnten durch ihre Beobachtungen herausfinden, dass der Mond seinen Zyklus nach rund 28 Tagen (einen Monat) durchläuft. Dies wurde als göttliches Zeichen gewertet, da ein Mensch ja vier Finger zum Zählen besitzt. Hieraus sind die Wochen entstanden, da ein Mondzyklus durch die Fingeranzahl **dividierbar** ist. Somit wurde die Zahl Sieben wie auch die Zahl Drei aufgrund der Anzahl der Fingerglieder pro Finger als magisch erklärt.

{{|>}} Die Astronomen beobachteten, dass ein Jahr aus rund 13 Monaten bestehen müsste ($13 \cdot 12 = 364$), was nicht sein dürfe, da die $13$ nunmal die Unglückszahl sei. Aus diesem Grund wurden die unwichtigen Monate mit ein paar Extratagen versehen. Der Februar, der mit seinem Ende den Frühling einläutet, erhielt somit keine Extratage und galt als Ende des Jahres. Dies kann auch an den Bezeichnungen der Monate fest gemacht werden: ***Sept***ember (7. Monat), ***Okto***ber (8. Monat), ***Nov***ember (9. Monat), ***Dez***ember (10. Monat). Die Astronomen stellten auch fest, dass am 21. Dezember die Sonnendauer wieder zunahm, was als Geburt des Licht- bzw. Sonnengottes oder aber als Sieg über die Dunkelheit interpretiert wurde. Da dieser mystifizierte Tag jedoch keinerlei Verbindung zur Zwölf hatte, wurden die Monate sowie dieser Tag leicht verschoben - an den 24.12, da die 24 die Zeit eines Tages symbolisiert und durch 12 **teilbar** ist. 

{{|>}} Auch das **Winkelmaß** kann hierüber erklärt werden: Die beiden Formen **Kreis** und **gleichseitiges Dreieck** gelten in vielen Kulturen als Perfektionsdarstellung. Eine volle Merkhand stellt die Zahl 60 dar, sodass bei einem gleichseitigen Dreieck dieses Winkelmaß dreimal vorkommt. Die Verbindung zwischen Kreis und gleichseitigem Dreieck offenbart dann die $360^\circ$, da ein gleichmäßiges Hexagon, bestehend aus sechs **gleichseitigen Dreiecken**, mit seinen **Eckpunkten** auf einer **Kreislinie** liegt, was eine Verbindung zur Sechs anmuten lässt. 

{{|>}} Da die Zeit die für uns Menschen wichtigste Größe ist und ihre **Einheit** stets mit Göttlichkeiten in Verbindung gebracht wird, konnte sich eine demokratisch legitimierte neue **Einheit** mit einfacheren Umrechnungen nicht durchsetzen. Durch den göttlichen Deutungsbezug bei **Kreisen** und **gleichseitigen Dreiecken** konnte sich ebenfalls keine **Winkelmaßeinheit** durchsetzen, die leichter zu verrechnen ist.


<h2> Römische Zahlen </h2>


{{|>}} Da die **römischen Zahlen** immer wieder mal im Alltag vorkommen, ist in der folgenden Tabelle eine Übersetzung der Symbole gegeben, sodass römische Zahlen in die arabischen üblichen Ziffern übersetzt werden können:



<center>

<!-- data-type="none" 
data-sortable="false" 
style="width:500px" -->
|römische Zahl   |  arabische Zahl  | römische Zahl   |   arabische Zahl  |
|:----:|:----:|:----:|:----:|
|$I$    |     1 	|	$XI$    |     11 	|
|$II$    |    2     |	$XII$    |     12 	|
|$III$    |     3 	|	$XIII$    |     13 	|
|$IV$    |     4 	|	$XIV$    |     14 	|
|$V$    |     5 	|	$XV$    |     15 	|
|$VI$    |     6 	|	$XVI$    |     16 	|
|$VII$    |     7 	|	$XVII$    |     17 	|
|$VIII$    |     8 	|	$XVIII$    |     18 	|
|$IX$    |     9 	|	$XIX$    |     19 	|
|$X$    |     10    |  $XX$    |     20 	|
|$L$    |   50      |  $C$    |     100 	|
|$D$    |   500     | $M$    |     1000 	|
|$DXLVI$    |   549 |   $MDLXXIII$    |     1573 	|

</center>


{{|>}} Da die Zahlen über $1000$ nur selten benutzt wurden bürgerten sich verschiedene Schreibweisen ein. So zum Beispiel die Apostrophus-Schreibweise, bei der aus der Zeichenreihenfolge  $I$ <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/roman500.png" width="30" height="30"> $= D$ entstand. Diese Konstruktion setzte sich fort, sodass folgende Symbole entstanden:



<center>

<!-- data-type="none" 
data-sortable="false" 
style="width:500px" -->
| römische Zahl   |   arabische Zahl   |
|:------:|:------:|
| $I$ <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/roman500.png" width="30" height="30"> $= D$  | 500  |
| <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/roman1000.png" width="30" height="30">   | 1000  |
| <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/roman5000.png" width="30" height="30">   | 5000 |
| <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/roman10000.png" width="30" height="30">   | 10000 |
| <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/roman50000.png" width="30" height="30">  | 50000 |
| <img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/roman100000.png" width="30" height="30">  | 100000 |

</center>


{{|>}} Bei der Vinculum-Schreibweise wurde lediglich ein Strich über die Zahl gesetzt, was eine **Multiplikation** mit $1000$ entsprach $\bar{I} = M$, sodass die Anzahl der Striche darüber entscheidend war. Auch die anderen Schreibweisen beschäftigten sich mit der **Multiplikation** mit $1000$, allerdings boten die arabische Zahlenzeichen eine wesentlich einfachere Schreibweise, was dazu führte das sich auch diese durchsetzten. 



<h2> Dualsystem </h2>


{{|>}} Das **Dualsystem** besteht aus den Zahlen $1$ und $0$, also "Ja" und "Nein". Aus diesem System, dem System der **binäre Zahlen**, ergibt sich eine gesamte algebraische Kategorie, die sogenannte **Bool'sche Algebra**. Auf diesem Zahlensystem beruht die gesamte Informatik, da es technisch aufgrund der Transistoren entweder ein Signal weitergeleitet wird oder eben nicht.

{{|>}} Um Zahlen aus diesem System in das **Dezimalsystem** umzurechnen, kann eine **Gleichung** verwendet werden, welche hier anhand eines Beispiels illustriert ist:


$$
\begin{align*}
\left[1101\right]_2 & = 1 \cdot 2^3 + 1 \cdot 2^2 + 0 \cdot 2^1 + 1 \cdot 2^0     \\
                    & = 1 \cdot 8 + 1 \cdot 4 + 0 \cdot 2  + 1 \cdot 1     \\
                    & = \left[13\right]_{10}   \;\; .  \\
\end{align*}
$$


{{|>}} Um vom **Dezimalsystem** in das **Dualsystem** zu wechseln, benötigt es der **Division**, wobei der **Rest** den jeweiligen Zahleneintrag darstellt, während mit dem **Quotienten** weiter gerechnet wird, bis der **Quotient** Null wird. 



$$
\begin{align*}
 41 : 2& = 20 \;\; \text{Rest:} \;\; 1       \\ 
 20 : 2& = 10 \;\; \text{Rest:} \;\; 0       \\ 
 10 : 2& = 5 \;\; \text{Rest:} \;\; 0       \\ 
 5 : 2& = 2 \;\; \text{Rest:} \;\; 1       \\ 
 2 : 2& = 1 \;\; \text{Rest:} \;\; 0       \\ 
 1 : 2& = 0 \;\; \text{Rest:} \;\; 1       \\ 
\Rightarrow \left[41\right]_{10} & = \left[101001\right]_{2} \\
\end{align*}
$$

{{|>}} Bei anderen **Zahlensystemen** muss bei dieser Rechnung der **Divisor** durch die jeweilige **Zahlensystembasis** (hier $2$) ausgetauscht werden.


<h2> Oktalsystem </h2>

{{|>}}  Ähnlich wie beim **Dualsystem** werden im **Oktalsystem** die Zahlen allerdings von $0$ bis $7$ pro Ziffernstelle gezählt:


$$
\begin{align*}
\left[1074\right]_{8} & =  1 \cdot 8^3 +   0 \cdot 8^2 + 7 \cdot 8^1 + 4 \cdot 8^0     \\
                    & =    1 \cdot 512 +   0 \cdot 64  + 7 \cdot 6   + 4 \cdot 1     \\
                    & = \left[572\right]_{10}     \\
\end{align*}
$$



{{|>}} In Informatik ergeben sich $8bit$ zu $1byte$, sodass bei kleinsten Informationsmengen oftmals auf das **Oktalsystem** zurückgegriffen wird. 


<h2> Hexadezimalsystem </h2>

{{|>}} Farben werden in der Informatik meistens mit einem **Hexadezimalcode** angegeben. Hierbei wird von $0$ bis $F$ gezählt, wobei das $F$ einer $15$ entspricht. Bei der Umrechnung kann wieder die schon im **Dual**- und **Oktalsystem** vorgestellt **Gleichung** verwendet werden:



$$
\begin{align*}
\left[2B1\right]_{16} & =   2 \cdot 16^2 + 11 \cdot 16^1 + 1 \cdot 16^0     \\
                    & =     2 \cdot 256 + 11 \cdot 16  + 1 \cdot 1     \\
                    & = \left[689\right]_{10}     \\
\end{align*}
$$


{{|>}} Die folgende Tabelle soll dazu dienen, um eine Gesamtübersicht über die Zusammenhänge der **Zahlensysteme** zu bekommen.




<center>

<!-- data-type="none" 
data-sortable="false" 
style="width:500px" -->
| Dezimal |   Dual |   Oktal    |  Hexadezimal  |
|:------:|:------:|:------:|:------:|
| 0     |   0   |    0    |     0	 |
| 1     |   1   |    1    |     1	 |
| 2   |   10   |   2     |    2 		 |
| 3   |  11   |   3    |     3			 |
| 4   |  100  |    4    |     4			 |
| 5   | 101   |    5   |     5			 |
| 6   | 110   |    6    |     6			 |
| 7   | 111   |    7    |     7			 |
| 8  |  1000   |    10    |   	8		 |
| 9  |  1001   |    11    |    	9		 |
| 10   |  1010   |    12   |    	A	 |
| 11  |  1011   |   13    |    	B		 |
| 12   |  1100   |    14    |     	C	 |
| 13 |  1101   |    15    |     	D	 |
| 14  |  1110   |    16    |    	E	 |
| 15  |   1111  |    17   |     	F	 |
| 16 |  10000   |   20   |    	10		 |
| 17 |  10001  |    21   |     	11		 |
| 18 |  10010  |    22   |     	12		 |
| 19  |  10011  |    23  |     	13		 |
| 20 | 10100   |    24   |    	14		 |

</center>




********************************
