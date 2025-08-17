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


tags: Erklärung, Teilbarkeiten, kgV, ggT, Teilermengen, Vielfachmengen

comment: In diesem Abschnitt wird das Lösen von Ungleichungen ausführlich erklärt.

author: Martin Lommatzsch

-->

# Teilbarkeiten







{{|>}} Die Untersuchung von Zahlen auf ihre *Teilbarkeit*, lässt den Umgang mit großen Zahlen verbessern. Besonders in der Informatik ist die Zerlegung von Zahlen in ihre *Faktoren* und sogar auf ihre elementarsten *Faktoren*, den *Primzahlen*, von besonderer Bedeutung. Folgende Regeln, um *Teiler* zu ermitteln, existieren:



{{|>}} •  *Summen*- und *Differenzregel*: Wenn eine Zahl zwei andere Zahlen *teilt*, dann *teilt* sie auch die *Summe* bzw. die *Differenz* dieser Zahlen.
Beispiel: $720:6 + 18:6 = 738:6$
  

{{|>}} •  *Teilerregel*: Wenn eine Zahl $a$ *Teiler* einer Zahl $b$ ist, dann ist auch jeder *Teiler* von $a$ *Teiler* von $b$.
Beispiel: $4$ ist ein *Teiler* von $12$ und $12$ ein *Teiler* von $720$, also ist $4$ auch ein *Teiler* von $720$.
  


{{|>}} • Endstellenregeln:    

{{|>}} 
- Eine Zahl ist durch $10$ *teilbar*, wenn ihre letzte *Ziffer* eine $0$ ist. Beispiel: $436360$.
- Eine Zahl ist durch $5$ *teilbar*, wenn ihre letzte *Ziffer* eine $5$ oder eine $0$ ist. Beispiel: $436360$.
- Eine Zahl ist durch $2$ *teilbar*, wenn ihre letzte *Ziffer* eine gerade *Ziffer* ist. Beispiel: $436360$.
- Eine Zahl ist durch $4$ *teilbar*, wenn ihre letzten beiden *Ziffern* eine durch $4$ *teilbare* Zahl darstellen. Beispiel: $436360$. 
- Eine Zahl ist durch $8$ *teilbar*, wenn ihre letzten drei *Ziffern* eine durch $8$ *teilbare* Zahl darstellen. Beispiel: $436360$.




{{|>}} • *Quersummenregeln*: 

{{|>}} 
- Eine Zahl ist durch $3$ *teilbar*, wenn ihre *Quersumme* durch $3$ *teilbar* ist. Beispiel: $36369 \;\Rightarrow\; 3+6+3+6+9=27$, $3$ ist ein Teiler von $27$ und somit auch $36360$.
- Eine Zahl ist durch $9$ *teilbar*, wenn ihre *Quersumme* durch $9$ *teilbar* ist. Beispiel: $36369 \;\Rightarrow\; 3+6+3+6+9=27$, $9$ ist ein Teiler von $27$ und somit auch $36360$.



{{|>}} • *Alternierende* *Ziffernsumme*:
Eine Zahl ist durch $11$ *teilbar*, wenn die *alternierende* *Ziffernsumme* durch $11$ *teilbar* ist.
Beispiel $5938394$: *alternierende* *Ziffernsumme*: $5-9+3-8+3-9+4 = -11$. Die *negative* $11$ ist auch durch $11$ *teilbar*, also ist $11$ auch ein *Teiler* von $5938394$. 


{{|>}} • Regel für die Sieben:
Wenn die *Differenz* der Zahl ohne die letzte *Ziffer* und das doppelte der letzten *Ziffer* durch $7$ *teilbar* ist, dann ist auch die gesamte Zahl durch $7$ *teilbar*.
Beispiel: $665875$ wird zerlegt in $66587$ und $5$, verrechnet und das Prozedere anschließend solange wiederholt bis die *Teilbarkeit* durch das Einmaleins zu entweder zu erkennen oder auszuschließen ist.

$$
\begin{align*}
   665875 \;\Rightarrow\; 66587 - 2\cdot 5 &= 66577 \\
                          6657 - 2\cdot 7 &= 6643 \\
                          664 - 2\cdot 3 &= 658 \\
                          65 - 2\cdot 8 &= 49 \\
                          \Rightarrow \; 7|49 \;&\Rightarrow 7|665875
  \end{align*}
$$





{{|>}} Eine besondere Eigenschaft zu den *Teilbarkeitsregeln* stellt die Zahl $9$ dar, wobei die Zahl $9$ ist ein Teiler einer beliebigen Zahl $z$ von der die Quersumme der Zahl $Q(z)$ subtrahiert wurde.


{{|>}} • *Primzahlzerlegung*: Jede Zahl kann so lange zerlegt werden bis sie nur noch durch *Faktoren* aus *Primzahlen* dargestellt wird. Dabei werden alle Regeln angewendet. Beispiel: $1576575 = 5 \cdot 7 \cdot 3 \cdot 3 \cdot 5 \cdot 11 \cdot 13 \cdot 7$. Hier wird auch deutlich, dass noch wesentlich mehr *Teilbarkeitsregeln* existieren - besonders für *Primzahlen*. 


{{|>}} • Eine besondere Rolle für die weiteren Regeln spielt die *Quersumme* und die alternierende *Quersummen*. Bei einer *Quersumme* $Q_k(z)$ werden die einzelnen *Ziffern* einer Zahl *aufaddiert*: $z = 987654321 \;\Rightarrow \; Q_1(z) = 9+8+7+6+5+4+3+2+1 $. Bei der *alternierenden* *Quersumme* $AQ_k(z)$ wechseln sich *Additions*- und *Subtraktionsoperatoren* ab.



$$
\begin{align*}
 z &= 987654321\\
   AQ_1 (z) &= 9-8+7-6+5-4+3-2+1 \\
   AQ_2 (z) &= 9-87+65-43+21 \\
   AQ_3 (z) &= 987-654+321 \\
   AQ_4 (z) &= 9-8765+4321 \\
   AQ_5 (z) &= 9876-54321 \\
   AQ_6 (z) &= 987-654321 \\
   Q_2 (z) &= 9+87+65+43+21 \\
   Q_3 (z) &= 987+654+321  \\
  \end{align*}
$$


{{|>}} Dabei gibt die Zahl im *Index* an nach welcher *Ziffernstelle* von hinten der jeweilige *Operator* gesetzt werden muss. So wird bei einer *alternierenden* $3$er-*Quersumme* der erste *Operator* nach drei *Ziffern* von hinten gesetzt. 


{{|>}} Generell gilt die Notation $3 | 27$, was "$27$ ist durch $3$ *teilbar*" beziehungsweise "$27$ ist ein *Vielfaches* von $3$" oder "$3$ ist ein *Teiler* von $27$". Umgekehrt gilt $3 \nmid 28$, was "$28$ ist nicht durch $3$ *teilbar*" bedeutet. 






{{|>}} Für ein tief erreichendes Verständnis der *Multiplikation* sowie *Division* und somit der *Bruchrechnung* aufzubauen, ist die Bestimmung vom "*kleinsten gemeinsamen Vielfachen*", "*größter gemeinsamer Teiler*" und "*Teilermengen*" hilfreich:



{{|>}} • *Teilermengen*: Um die *Teilermenge* einer Zahl zu bestimmen müssen alle *natürlichen Zahlen* gefunden werden, durch die die betrachtete Zahl *dividiert* werden kann. Wenn ein *Teiler* gefunden wurde, kann durch die *Division* der dazugehörige *Teiler* gefunden werden, sodass sich auch die größeren Zahlen ergeben. Zur Veranschaulichung der Notation werden Beispiele gewählt:



$$
\begin{align*}
T_{21} &= \left\{ 1;3;7;21 \right\}    \\
T_{36} &= \left\{ 1;2;3;4;9;12;36 \right\}    \\
 T_{23} &= \left\{ 1;23 \right\}    \\
  \end{align*}
$$



{{|>}} • *Kleinstes gemeinsames Vielfach*: Das *kleinste gemeinsame Vielfach* kann verwendet werden, um *Brüche* auf den gleichen *Nenner* zu bringen, wovon allerdings hier in diesem Buch abgeraten wird, da auch nach der Verrechnung der *Brüche* gekürzt werden kann. Zur Notation wieder einige Beispiele:



$$
\begin{align*}
kgV(4;5) &= 20    \\ 
kgV(2;8) &= 8    \\ 
kgV(6;9) &= 18    \\ 
  \end{align*}
$$




{{|>}} • *Größter gemeinsamer Teiler*: Um *Brüche* effektiv zu *kürzen*, kann in mehreren Schritten auf die *Teilbarkeitsregeln* zurückgegriffen werden oder mit dem *größten gemeinsamen Teiler* das *Kürzen* auf einen einzigen Schritt reduziert werden, wobei die *Teilbarkeitsregeln* in diesem Buch einen höheren Stellenwert besitzen werden.   Zur Notation wieder einige Beispiele:



$$
\begin{align*}
ggT(45;35) &= 5    \\ 
ggT(12;48) &= 12    \\ 
ggT(8;17) &= 1    \\ 
  \end{align*}
$$




{{|>}}   Durch Vergleich der *Teilermengen* oder der *Primzahlzerlegung* über die *Teilbarkeitsregeln*, kann der *größte gemeinsame Teiler* gefunden werden. Wobei auch das sogenannte *Euklidische Verfahren* verwendet werden kann, welches ein *iteratives* *Divisionsverfahren* mit *Rest* darstellt: Hierbei wird der *Divisor* durch den *Rest* geteilt wird bis kein *Rest* mehr existiert. Der letzte *Divisor* ist somit der *größte gemeinsame Teiler*



$$
\begin{align*}
ggT(159;789) \; &\Rightarrow \;\; 159:789 = 0 \;\; \text{Rest}\; 159 \;\;\Rightarrow\;\; ggT(159;789) = ggT(789;159)      \\  
  \; &\Rightarrow \;\; 789:159 = 4 \;\; \text{Rest}\; 153 \;\;\Rightarrow\;\; ggT(789;159) = ggT(159;153)      \\  
  \; &\Rightarrow \;\; 159:153 = 1 \;\; \text{Rest}\; 6 \;\;\Rightarrow\;\; ggT(159;153) = ggT(153;6)      \\  
  \; &\Rightarrow \;\; 153:6 = 25 \;\; \text{Rest}\; 3 \;\;\Rightarrow\;\; ggT(153;6) = ggT(6;3)      \\ 
  \; &\Rightarrow \;\; 6:3 = 2 \;\; \text{Rest}\; 0 \;\;\Rightarrow\;\; ggT(159;789) = 3      \\  
  \end{align*}
$$




