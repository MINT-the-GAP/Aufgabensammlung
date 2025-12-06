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


tags: Binomialverteilung, Sammlung

comment: Nur Zeugs

author: Martin Lommatzsch

-->




# Stochastik - Aufgabe 1: 



An einem Gymnasium fahren 50 % der Schüler mit ÖPNV zur Schule, die übrigen 50 % kommen anders. In einer bestimmten Woche gilt:

- Unter den ÖPNV-Nutzern kommen 20 %** mindestens einmal zu spät.
- Unter den anderen kommen 10 % mindestens einmal zu spät.

__Aufgabe 1:__ **Skizziere** ein Baumdiagramm mit zwei Stufen. Zuerst die Betrachtung des ÖPNVs.

{{1}}
$$
\begin{align*} 
&P(Ö)= 0,5 \;\;\wedge\;\; P(\bar{Ö})=0,5 \;\;\wedge\;\; P(\left. V \right|Ö)=0,2 \;\;\wedge\;\; P(\left. V \right|\bar{Ö})=0,1 \\
&P(Ö \cap V) = P(Ö) \cdot P(\left. V \right|Ö) = 0,1 \\
&P(\bar{Ö} \cap V) = P(\bar{Ö}) \cdot P(\left. V \right|\bar{Ö}) = 0,05
\end{align*}
$$

---

__Aufgabe 2:__ **Berechne** die Wahrscheinlichkeit, dass ein Schüler zu spät kommt.

{{2}}
$$
\begin{align*} 
P(V) = P(Ö \cap V) + P(\bar{Ö} \cap V) = 0,15 \\
\end{align*}
$$

---

__Aufgabe 3:__ **Berechne** die Wahrscheinlichkeit, dass ein verspäteter Schüler den ÖPNV benutzte.

{{3}}
$$
\begin{align*} 
 P(\left. Ö \right| V)  =  \dfrac{P(Ö \cap V)}{P(V)} = 0,\bar{6} \\
\end{align*}
$$

---

__Aufgabe 4:__ **Zeige**, dass es sich um eine bedingte Wahrscheinlichkeit handelt.

{{4}}
$$
\begin{align*} 
&P(Ö \cap V) = P(Ö) \cdot P(\left. V \right|Ö) = 0,1 \\
&P(Ö) \cdot P(V) = 0,075 \neq P(Ö \cap V) \qquad _{\Box}  \\
\end{align*}
$$

---


__Aufgabe 5:__ **Berechne** die Wahrscheinlichkeit, dass ein pünktlichter Schüler den ÖPNV benutzte.

{{5}}
$$
\begin{align*} 
&P( \bar{V}) = 1 -  P(V)  = 0,85 \\
&P(  Ö  \cap  \bar{V} )  = P(Ö) P(\left. \bar{V} \right|Ö) = 0,4 \\
&P(\left.Ö \right| \bar{V})  =   \dfrac{P(  Ö  \cap  \bar{V} )}{P( \bar{V})}    = \dfrac{8}{17} \\
\end{align*}
$$



#  Stochastik - Aufgabe 2: 

In einer Jahrgangsstufe werden 120 Schülern nach ihrer bevorzugten Fremdsprache gefragt. Zur Auswahl stehen Englisch und Französisch. Außerdem wird erfasst, ob sie regelmäßig Nachhilfe in Sprachen nehmen. Die Ergebnisse dieser Datenerfassungen sind:

+ 72 Schülern bevorzugen Englisch.
+ 48 Schülern bevorzugen Französisch.
+ Von den Englisch-Schülern nehmen 18 regelmäßig Nachhilfe.
+ Von den Französisch-Schülern nehmen 12 regelmäßig Nachhilfe.

__Aufgabe 1:__ Erstelle eine Vierfeldertafel mit absoluten Schülerzahlen zu diesem Sachzusammenhang.


{{1}}
|    | Nachhilfe ja | Nachhilfe nein | Summe |
|  Englisch     | 18 | 54 | 72  |
|  Französisch  | 12 | 36 | 48  |
| Summe         | 30 | 90 | 120 |



__Aufgabe 2:__ Berechne die Wahrscheinlichkeit, dass eine zufällig ausgewählte Person Französisch gewählt hat.

{{2}}
$$
\begin{align*} 
&P(F) = \dfrac{48}{120} = 0,4  \\
\end{align*}
$$



__Aufgabe 3:__ Berechne die Wahrscheinlichkeit, dass eine zufällig ausgewählte Person Nachhilfe in Anspruch nimmt.

{{3}}
$$
\begin{align*} 
&P(N) = \dfrac{30}{120} = 0,25 \\
\end{align*}
$$


__Aufgabe 4:__ Berechne die Wahrscheinlichkeit, dass eine zufällig ausgewählte Person Englisch gewählt hat und keine Nachhilfe in Anspruch nimmt.

{{3}}
$$
\begin{align*} 
&P(\bar{F} \cap \bar{N}) = \dfrac{54}{120} = 0,45 \\
\end{align*}
$$









#  Stochastik - Aufgabe 3: 


Eine Stadtbibliothek untersucht das Leseverhalten von 200 Jugendlichen. Es wird erfasst, ob sie Romane oder Sachbücher bevorzugen und ob sie regelmäßig die Bibliothek besuchen. Dabei wurde festgestellt, dass 120 Jugendliche Romane und 80 Jugendliche Sachbücher bevorzugen, während von den Roman-Lesern 90 und von den Sachbuch-Lesern 50 regelmäßig die Bibliothek besuchen.



__Aufgabe 1:__ Erstelle eine Vierfeldertafel mit absoluten Jugendlichenzahlen zu diesem Sachzusammenhang.


{{1}}
|    | Besuch ja | Besuch nein | Summe |
|  Romane       | 90 | 30 | 120  |
|  Sachbücher   | 50 | 30 | 80  |
| Summe         | 140 | 60 | 200 |



__Aufgabe 2:__ Berechne die Wahrscheinlichkeit, dass eine zufällig ausgewählt Person Romane bevorzugt.

{{2}}
$$
\begin{align*} 
&P(R) = \dfrac{120}{200} = 0,6  \\
\end{align*}
$$



__Aufgabe 3:__ Berechne die Wahrscheinlichkeit, dass eine zufällig ausgewählt Person die Bibliothek regelmäßig aufsucht.

{{3}}
$$
\begin{align*} 
&P(B) = \dfrac{140}{200} = 0,7  \\
\end{align*}
$$



__Aufgabe 3:__ Berechne die Wahrscheinlichkeit, dass eine zufällig ausgewählt Person Sachbücher bevorzugt und die Bibliothek nicht regelmäßig aufsucht.

{{4}}
$$
\begin{align*} 
&P(\bar{R} \cap \bar{B}) = \dfrac{30}{200} = 0,15  \\
\end{align*}
$$










#  Stochastik - Aufgabe 4: 

Ein Online-Shop unterscheidet Bestellungen nach Bekleidung und Nicht-Bekleidung. In der betrachteten Woche gilt: 40% der Bestellungen sind Bekleidung. Aber es kommen auch regelmäßig Rückgabenwünsche herein. Bei Bekleidung werden 20% der Bestellungen retourniert und 5% der Nicht-Bekleidung werden zurückgegeben.


__Aufgabe 1:__ **Skizziere** ein Baumdiagramm mit zwei Stufen. Zuerst die Betrachtung der Kategorien.

{{1}}
$$
\begin{align*} 
&P(B)= 0,4 \;\;\wedge\;\; P(\bar{B})=0,6 \;\;\wedge\;\; P(\left. R \right|B)=0,2 \;\;\wedge\;\; P(\left. R \right|\bar{B})=0,05 \\
&P(B \cap R) = P(B) \cdot P(\left. R \right|B) = 0,08 \\
&P(\bar{B} \cap R) = P(\bar{B}) \cdot P(\left. R \right|\bar{B}) = 0,03
\end{align*}
$$



---

__Aufgabe 2:__ **Berechne** die Wahrscheinlichkeit, für eine Retour.

{{2}}
$$
\begin{align*} 
P(R) = P(B \cap R) + P(\bar{B} \cap R) = 0,11 \\
\end{align*}
$$

---

__Aufgabe 3:__ **Berechne** die Wahrscheinlichkeit, dass es sich bei retournierter Ware um Bekleidung handelt.

{{3}}
$$
\begin{align*} 
 P(\left. B \right| R)  =  \dfrac{P(B \cap R)}{P(R)} = \dfrac{8}{11} \\
\end{align*}
$$

---

__Aufgabe 4:__ **Zeige**, dass es sich um eine bedingte Wahrscheinlichkeit handelt.

{{4}}
$$
\begin{align*} 
&P(B \cap R) = P(B) \cdot P(\left. R \right|B) = 0,08 \\
&P(B) \cdot P(R) = 0,044 \neq P(B \cap R) \qquad _{\Box}  \\
\end{align*}
$$

---


__Aufgabe 5:__ **Berechne** die Wahrscheinlichkeit, dass es sich bei nicht-retournierter Ware um Bekleidung handelt.

{{5}}
$$
\begin{align*} 
&P( \bar{R}) = 1 -  P(R)  = 0,89 \\
&P(  B  \cap  \bar{R} )  = P(B) P(\left. \bar{R} \right|B) = 0,32 \\
&P(\left.B \right| \bar{R})  =   \dfrac{P(  B  \cap  \bar{R} )}{P( \bar{R})}    = \dfrac{32}{89} \\
\end{align*}
$$









#  Stochastik - Aufgabe 5: 

Im Schul-Leichtathletikteam wird diskutiert, ob gezieltes Aufwärmen vor dem Training die Verletzungsgefahr senkt. Über eine Saison wurden Daten erhoben und in einer Stichprobe erfasst. Hierfür wurde eine Stichprobe von 300 Probanten betrachtet, wovon 180 sich regelmäßig aufwärmten. Die gesamte Verletzungsquote betrog 12%, während in nur 10% der aufgewärmten Leichtathleten sich verletzten.




__Aufgabe 1:__ Erstelle eine Vierfeldertafel mit absoluten Leichtathletenzahlen zu diesem Sachzusammenhang.


{{1}}
|               | $A$ | $\bar{A}$ | Summe |
|  $V$          | 18   |  18   | 36    |
|  $\bar{V}$    | 162  |  102  |  264  |
| Summe         | 180  |  120  | 300   |


---


__Aufgabe 2:__ Berechne die Wahrscheinlichkeit, dass eine Person, die sich nicht aufgewärmt hat, sich verletzte.


{{2}}
$$
\begin{align*} 
P( \left. V \right| \bar{A} ) =  \dfrac{P(  V \cap \bar{A} ) }{P(\bar{A})} = 0,15  \\
\end{align*}
$$


---

__Aufgabe 3:__ Berechne die Wahrscheinlichkeit, dass eine verletzte Person sich abgewärmt hatte.


{{3}}
$$
\begin{align*} 
P( \left. A \right| V )  =  \dfrac{P(  A \cap V ) }{P(\bar{V})}  =  0,5  \\
\end{align*}
$$



---

__Aufgabe 4:__ Berechne die Wahrscheinlichkeit, dass eine zufällig gewählte unverletzte Person sich nicht aufgewärmt hat.


{{4}}
$$
\begin{align*} 
P( \left. \bar{A} \right| \bar{V} ) =   \dfrac{P(  \bar{A} \cap \bar{V} ) }{P(\bar{V})}  = \dfrac{17}{44}  \\
\end{align*}
$$


---


__Aufgabe 5:__ **Zeige**, dass es sich um eine bedingte Wahrscheinlichkeit handelt.

{{5}}
$$
\begin{align*} 
&P(V \cap A) = 0,01 \\
&P(V) = 0,12 \neq P(V \cap A) \qquad _{\Box}  \\
\end{align*}
$$





#  Stochastik - Aufgabe 6: 



Gegeben ist eine Zufallsvariable $X$ mit $X \sim B(n=5, p)$.

Es soll überprüft werden, ob die Erfolgswahrscheinlichkeit $p$ eher
„normal“ ($p = 0{,}5$) oder eher „erhöht“ ($p = 0{,}8$) ist.

Es wird folgender Test verwendet (Entscheidungsregel):

> Wenn in den $5$ Versuchen mindestens $4$ Erfolge auftreten ($X \ge 4$),
> dann wird die Nullhypothese verworfen.  
> Sonst ($X \le 3$) wird die Nullhypothese beibehalten.


__$a)\;\;$__ **Formuliere** die Nullhypothese $H_0$ und die Gegenhypothese (alternative Hypothese) $H_1$.


[[!]]
<script>true</script>
********************

Es werden zwei feste Werte für $p$ verglichen:

- Nullhypothese:  
  $H_0:\; p = 0{,}5$

- Gegenhypothese:  
  $H_1:\; p = 0{,}8$

********************

__$b)\;\;$__ **Bestimme** den $\alpha$-Fehler dieses Tests. 
Das ist die Wahrscheinlichkeit, dass $H_0$ verworfen wird, obwohl in Wirklichkeit $p = 0{,}5$ gilt.

$\alpha = $ [[ 18,75 ]]$\,\%$
@Algebrite.check(18.75)
********************
$\alpha = P(X \ge 4 \mid p = 0{,}5) = P(X = 4 \mid p = 0{,}5) + P(X = 5 \mid p = 0{,}5)$.

Mit $X \sim B(5, 0{,}5)$ gilt allgemein
$P(X = k) = \binom{5}{k} \cdot 0{,}5^k \cdot 0{,}5^{5-k} = \binom{5}{k} \cdot 0{,}5^5$.

Also
$P(X = 4) = \binom{5}{4} \cdot 0{,}5^4 \cdot 0{,}5^1 = 5 \cdot 0{,}5^4 \cdot 0{,}5^1$,

$P(X = 5) = \binom{5}{5} \cdot 0{,}5^5 = 1 \cdot 0{,}5^5$.

Damit
$\alpha = (5 + 1) \cdot 0{,}5^5 = 6 \cdot \dfrac{1}{32} = \dfrac{6}{32} = \dfrac{3}{16} = 0{,}1875$.

In Prozent: $\alpha = 18{,}75\%$.

********************



__$c)\;\;$__ **Bestimme** den $\beta$-Fehler dieses Tests.
Das ist die Wahrscheinlichkeit, dass $H_0$ **nicht** verworfen wird, obwohl in Wirklichkeit $p = 0{,}8$ gilt. \


$\beta \approx $ [[ 26,27 ]]$\,\%$
@Algebrite.check2(26.27,0.01)
********************
Wir betrachten nun $X \sim B(5, 0{,}8)$ und berechnen
$\beta = P(X \le 3 \mid p = 0{,}8)$.

Bequemer ist:
$\beta = 1 - P(X \ge 4 \mid p = 0{,}8) = 1 - \bigl(P(X = 4) + P(X = 5)\bigr)$.

Nun
$P(X = 4) = \binom{5}{4} \cdot 0{,}8^4 \cdot 0{,}2^1 = 5 \cdot 0{,}8^4 \cdot 0{,}2$,

$P(X = 5) = \binom{5}{5} \cdot 0{,}8^5 \cdot 0{,}2^0 = 1 \cdot 0{,}8^5$.

Also
$P(X = 4) = 5 \cdot 0{,}8^4 \cdot 0{,}2 = 5 \cdot 0{,}4096 \cdot 0{,}2 = 0{,}4096$,

$P(X = 5) = 0{,}8^5 = 0{,}32768$.

Damit
$P(X \ge 4) = 0{,}4096 + 0{,}32768 = 0{,}73728$

und
$\beta = 1 - 0{,}73728 = 0{,}26272$.

In Prozent: $\beta \approx 26{,}3\%$.

********************

__$d)\;\;$__ **Erkläre** in eigenen Worten, was $\alpha$- und $\beta$-Fehler in dieser Situation bedeuten.



[[!]]
<script>true</script>
********************

- Der $\alpha$-Fehler (ca. $18{,}75\%$):  
  Das ist die Wahrscheinlichkeit, dass der Test sagt  
  „$p = 0{,}8$ (erhöht)“ und die Nullhypothese $H_0: p = 0{,}5$
  verwirft, obwohl in Wirklichkeit $p = 0{,}5$ ist.

- Der $\beta$-Fehler (ca. $26{,}3\%$):  
  Das ist die Wahrscheinlichkeit, dass der Test bei der Nullhypothese
  $H_0: p = 0{,}5$ bleibt, also nicht verwirft,
  obwohl in Wirklichkeit $p = 0{,}8$ ist.

********************









#  Stochastik - Aufgabe 7: 



Gegeben ist eine Zufallsvariable $X$ mit $X \sim B(n = 20, p)$.

Es soll überprüft werden, ob die Erfolgswahrscheinlichkeit $p$ eher
„normal“ ($p = 0{,}2$) oder „leicht erhöht“ ($p = 0{,}3$) ist.

Es wird folgender Test verwendet (Entscheidungsregel):

> Wenn in den $20$ Versuchen mindestens $6$ Erfolge auftreten ($X \ge 6$),
> dann wird die Nullhypothese verworfen.  
> Sonst ($X \le 5$) wird die Nullhypothese beibehalten.

---

__$a)\;\;$__ **Formuliere** die Nullhypothese $H_0$ und die Gegenhypothese (alternative Hypothese) $H_1$.

[[!]]
<script>true</script>
********************

Es werden zwei feste Werte für $p$ verglichen:

- Nullhypothese:  
  $H_0:\; p = 0{,}2$

- Gegenhypothese:  
  $H_1:\; p = 0{,}3$

********************

__$b)\;\;$__ **Bestimme** den $\alpha$-Fehler dieses Tests.  
Das ist die Wahrscheinlichkeit, dass $H_0$ verworfen wird, obwohl in Wirklichkeit $p = 0{,}2$ gilt.

$\alpha \approx $ [[ 19,58 ]]$\,\%$
@Algebrite.check2(19.58,0.01)
********************

Der $\alpha$-Fehler ist
$\alpha = P(X \ge 6 \mid p = 0{,}2)$.

Bequemer ist die Rechnung über das Komplement:
$\alpha = 1 - P(X \le 5 \mid p = 0{,}2)$.

Mit $X \sim B(20, 0{,}2)$ gilt allgemein
$P(X = k) = \binom{20}{k} \cdot 0{,}2^k \cdot 0{,}8^{20-k}$.

Also
$P(X \le 5) = \displaystyle\sum_{k=0}^{5} \binom{20}{k} \cdot 0{,}2^k \cdot 0{,}8^{20-k}$

und damit
$\alpha = 1 - \displaystyle\sum_{k=0}^{5} \binom{20}{k} \cdot 0{,}2^k \cdot 0{,}8^{20-k} \approx 0{,}1958$.

In Prozent: $\alpha \approx 19{,}58\%$.

********************

__$c)\;\;$__ **Bestimme** den $\beta$-Fehler dieses Tests.  
Das ist die Wahrscheinlichkeit, dass $H_0$ nicht verworfen wird, obwohl in Wirklichkeit $p = 0{,}3$ gilt.

$\beta \approx $ [[ 41,64 ]]$\,\%$
@Algebrite.check2(41.64,0.01)
********************

Jetzt gilt $X \sim B(20, 0{,}3)$.

Der $\beta$-Fehler ist
$\beta = P(X \le 5 \mid p = 0{,}3)$,

denn dann wird $H_0$ beibehalten.

Wir berechnen
$\beta = \displaystyle\sum_{k=0}^{5} \binom{20}{k} \cdot 0{,}3^k \cdot 0{,}7^{20-k}$

und erhalten näherungsweise
$\beta \approx 0{,}4164$.

In Prozent: $\beta \approx 41{,}64\%$.

********************

__$d)\;\;$__ **Erkläre** in eigenen Worten, was $\alpha$- und $\beta$-Fehler in dieser Situation bedeuten.

[[!]]
<script>true</script>
********************

- Der $\alpha$-Fehler (ca. $19{,}58\%$):  
  Das ist die Wahrscheinlichkeit, dass der Test $H_0$ verwirft und sich
  für $p = 0{,}3$ entscheidet, obwohl in Wirklichkeit $p = 0{,}2$ ist.

- Der $\beta$-Fehler (ca. $41{,}64\%$):  
  Das ist die Wahrscheinlichkeit, dass der Test $H_0$ beibehält
  (also $p = 0{,}2$ nicht verwirft),  
  obwohl in Wirklichkeit $p = 0{,}3$ ist.

********************




#  Stochastik - Aufgabe 8: 



Gegeben ist eine Zufallsvariable $X$ mit $X \sim B(n = 10, p)$.

Es soll überprüft werden, ob die Erfolgswahrscheinlichkeit $p$ eher
„klein“ ($p = 0{,}2$) oder „größer“ ($p = 0{,}25$) ist.

Wir legen ein Signifikanzniveau von $\alpha = 10\,\%$ fest und wollen
einen rechtsseitigen Test verwenden:

> Wir verwerfen $H_0$, wenn $X \ge c$ gilt.  
> Sonst (also für $X \le c-1$) behalten wir $H_0$ bei.

Dabei ist $c$ eine ganze Zahl, die noch so zu wählen ist,  
dass der Test das geforderte Signifikanzniveau nicht überschreitet.



---

__$a)\;\;$__ **Formuliere** die Nullhypothese $H_0$ und die Gegenhypothese (alternative Hypothese) $H_1$.

[[!]]
<script>true</script>
********************

Es werden zwei feste Werte für $p$ verglichen:

- Nullhypothese:  
  $H_0:\; p = 0{,}2$

- Gegenhypothese:  
  $H_1:\; p = 0{,}25$

********************


__$b)\;\;$__ Bestimme nun den Wert $c$ so, dass der Test das
Signifikanzniveau $\alpha = 10\,\%$ **nicht überschreitet**.  
Verwende die Entscheidungsregel

> „Verwerfe $H_0$, wenn $X \ge c$.“

Gesucht ist also das **kleinste** $c$, für das gilt:
$P(X \ge c \mid p = 0{,}2) \le 0{,}10$.

$c = $ [[ 5 ]]
********************

Wir betrachten $X \sim B(10, 0{,}2)$ unter $H_0$.

Für verschiedene $c$ gilt:

- Für $c = 4$:
  $$
  P(X \ge 4 \mid p = 0{,}2)
  = 1 - P(X \le 3 \mid p = 0{,}2)
  \approx 0{,}1209 > 0{,}10
  $$
  $\Rightarrow$ Signifikanzniveau wird **überschritten**, $c = 4$ ist **nicht** zulässig.

- Für $c = 5$:
  $$
  P(X \ge 5 \mid p = 0{,}2)
  \approx 0{,}0328 \le 0{,}10
  $$
  $\Rightarrow$ Signifikanzniveau wird **eingehalten**.

Damit ist das **kleinste** zulässige $c$:
$c = 5$.

********************


__$c)\;\;$__ **Berechne** den tatsächlichen $\alpha$-Fehler dieses Tests mit der gefundenen Grenze $c = 5$.  

$\alpha \approx $ [[ 3,28 ]]$\,\%$
@Algebrite.check2(3.28,0.01)
********************

Unter $H_0$ gilt $X \sim B(10, 0{,}2)$.

Der $\alpha$-Fehler ist:
$$
\alpha = P(X \ge 5 \mid p = 0{,}2)
= \sum_{k=5}^{10} \binom{10}{k} \cdot 0{,}2^k \cdot 0{,}8^{10-k}.
$$

Mit dem Taschenrechner (oder Tabellen) erhält man:
$$
\alpha \approx 0{,}0328.
$$

In Prozent:
$$
\alpha \approx 3{,}28\,\%.
$$

********************


__$d)\;\;$__ **Berechne** den $\beta$-Fehler dieses Tests, wenn in Wirklichkeit $p = 0{,}25$ gilt.  

$\beta \approx $ [[ 92,19 ]]$\,\%$
@Algebrite.check2(92.19,0.01)
********************

Jetzt betrachten wir die Gegenhypothese:
$H_1:\; p = 0{,}25$.

Dann gilt $X \sim B(10, 0{,}25)$.

Der $\beta$-Fehler ist die Wahrscheinlichkeit, dass wir $H_0$ **beibehalten**, obwohl $p = 0{,}25$ gilt.  
$H_0$ wird beibehalten, wenn $X \le 4$ ist (da wir nur für $X \ge 5$ verwerfen).

Also:
$$
\beta = P(X \le 4 \mid p = 0{,}25)
= \sum_{k=0}^{4} \binom{10}{k} \cdot 0{,}25^k \cdot 0{,}75^{10-k}.
$$

Mit dem Taschenrechner erhält man näherungsweise:
$$
\beta \approx 0{,}9219.
$$

In Prozent:
$$
\beta \approx 92{,}19\,\%.
$$

********************


__$e)\;\;$__ **Erkläre** in eigenen Worten, was $\alpha$- und $\beta$-Fehler in dieser Situation bedeuten.

[[!]]
<script>true</script>
********************

- Der $\alpha$-Fehler (ca. $3{,}28\,\%$):  
  Das ist die Wahrscheinlichkeit, dass der Test $H_0:\; p = 0{,}2$ verwirft
  (also behauptet, $p$ sei größer),  
  obwohl in Wirklichkeit $p = 0{,}2$ ist.

- Der $\beta$-Fehler (ca. $92{,}19\,\%$):  
  Das ist die Wahrscheinlichkeit, dass der Test $H_0:\; p = 0{,}2$ nicht verwirft
  (also bei „$p = 0{,}2$“ bleibt),  
  obwohl in Wirklichkeit $p = 0{,}25$ ist.

********************




#  Stochastik - Aufgabe 9: 




Gegeben ist eine Zufallsvariable $X$ mit $X \sim B(n = 50, p)$.

Es soll überprüft werden, ob die Erfolgswahrscheinlichkeit $p$ eher
„klein“ ($p = 0{,}17$) oder „etwas größer“ ($p = 0{,}23$) ist.

Wir legen ein Signifikanzniveau von $\alpha = 10\,\%$ fest und wollen
einen zweiseitigen Test verwenden:

> Wir verwerfen $H_0$, wenn $X \le k_{\text{unten}}$ oder
> $X \ge k_{\text{oben}}$ gilt.  
> Sonst (für $k_{\text{unten}} < X < k_{\text{oben}}$) behalten wir $H_0$ bei.

Die beiden ganzen Zahlen $k_{\text{unten}}$ und $k_{\text{oben}}$ sollen so gewählt werden,
dass das Signifikanzniveau $\alpha = 10\,\%$ nicht überschritten wird.


---

__$a)\;\;$__ **Formuliere** die Nullhypothese $H_0$ und die Gegenhypothese (alternative Hypothese) $H_1$.

[[!]]
<script>true</script>
********************

Es werden zwei feste Werte für $p$ verglichen:

- Nullhypothese:  
  $H_0:\; p = 0{,}17$

- Gegenhypothese:  
  $H_1:\; p = 0{,}23$

********************

__$b)\;\;$__ **Bestimme** die passenden Grenzwerte $k_{\text{unten}}$ und $k_{\text{oben}}$.

$k_{\text{unten}} = $ [[ 3 ]] $\;\;\wedge\;\;$
$k_{\text{oben}} = $ [[ 13 ]]
********************

Unter $H_0$ gilt $X \sim B(50, 0{,}17)$.

Zuerst berechnen wir Erwartungswert und Standardabweichung:

- Erwartungswert:
  $$
  \mu = n p = 50 \cdot 0{,}17 = 8{,}5
  $$
- Standardabweichung:
  $$
  \sigma = \sqrt{n p (1-p)}
  = \sqrt{50 \cdot 0{,}17 \cdot 0{,}83}
  \approx \sqrt{23{,}605} \approx 2{,}66
  $$

Für einen zweiseitigen Test mit $\alpha = 10\,\%$ verwenden wir
$z \approx 1{,}645$ und erhalten als groben Annahmebereich:
$$
\mu \pm z \sigma
= 8{,}5 \pm 1{,}645 \cdot 2{,}66
\approx 8{,}5 \pm 4{,}4
$$
also näherungsweise:
$$
4 \lesssim X \lesssim 13.
$$

Daraus bietet sich als Annahmebereich der ganzzahlige Bereich
$$
4 \le X \le 12
$$
an und damit als Verwerfungsbereich:
$$
X \le 3 \quad \text{oder} \quad X \ge 13.
$$

Nun prüfen wir mit der Binomialverteilung, ob damit
$\alpha \le 0{,}10$ gilt:

- $P(X \le 3 \mid p = 0{,}17) \approx 0{,}0208$
- $P(X \ge 13 \mid p = 0{,}17) \approx 0{,}0714$

Damit:
$$
P(X \le 3) + P(X \ge 13)
\approx 0{,}0208 + 0{,}0714
= 0{,}0922 \le 0{,}10.
$$

Also sind $k_{\text{unten}} = 3$ und $k_{\text{oben}} = 13$
eine zulässige Wahl für den zweiseitigen Verwerfungsbereich.

********************


__$c)\;\;$__ **Berechne** den tatsächlichen $\alpha$-Fehler dieses Tests mit den gefundenen Grenzen.

$\alpha \approx $ [[ 9,22 ]]$\,\%$
@Algebrite.check2(9.22,0.1)
********************

Unter $H_0$ gilt $X \sim B(50, 0{,}17)$.

Der $\alpha$-Fehler ist die Wahrscheinlichkeit, dass wir $H_0$ verwerfen,
obwohl $p = 0{,}17$ stimmt:
$$
\alpha
= P(X \le 3 \mid p = 0{,}17)
+ P(X \ge 13 \mid p = 0{,}17).
$$

Mit dem Taschenrechner erhält man näherungsweise:
$$
P(X \le 3) \approx 0{,}0208,
\qquad
P(X \ge 13) \approx 0{,}0714.
$$

Also:
$$
\alpha \approx 0{,}0208 + 0{,}0714 = 0{,}0922.
$$

In Prozent:
$$
\alpha \approx 9{,}22\,\%.
$$

********************


__$d)\;\;$__ **Berechne** den $\beta$-Fehler dieses Tests, wenn in Wirklichkeit $p = 0{,}23$ gilt.

$\beta \approx $ [[ 64,02 ]]$\,\%$
@Algebrite.check2(64.02,0.2)
********************

Jetzt betrachten wir die Gegenhypothese:
$H_1:\; p = 0{,}23$.

Dann gilt $X \sim B(50, 0{,}23)$.

Der $\beta$-Fehler ist die Wahrscheinlichkeit, dass wir $H_0$ beibehalten,
obwohl in Wirklichkeit $p = 0{,}23$ ist.

Beibehalten von $H_0$ bedeutet:
$$
k_{\text{unten}} < X < k_{\text{oben}}
\quad\Rightarrow\quad
4 \le X \le 12.
$$

Also:
$$
\beta = P(4 \le X \le 12 \mid p = 0{,}23)
= P(X \le 12 \mid p = 0{,}23) - P(X \le 3 \mid p = 0{,}23).
$$

Mit dem Taschenrechner erhält man näherungsweise:
$$
P(X \le 3 \mid p = 0{,}23) \approx 0{,}0014,
\qquad
P(X \le 12 \mid p = 0{,}23) \approx 0{,}6415.
$$

Damit:
$$
\beta \approx 0{,}6415 - 0{,}0014 = 0{,}6401.
$$

In Prozent:
$$
\beta \approx 64{,}01\,\%.
$$

********************


__$e)\;\;$__ **Erkläre** in eigenen Worten, was $\alpha$- und $\beta$-Fehler in dieser Situation bedeuten.

[[!]]
<script>true</script>
********************

- Der $\alpha$-Fehler (ca. $9{,}2\,\%$):  
  Das ist die Wahrscheinlichkeit, dass der Test $H_0:\; p = 0{,}17$
  verwirft (also sagt: „$p$ ist eher $0{,}23$“),
  obwohl in Wirklichkeit $p = 0{,}17$ ist.

- Der $\beta$-Fehler (ca. $64{,}0\,\%$):  
  Das ist die Wahrscheinlichkeit, dass der Test $H_0:\; p = 0{,}17$
  nicht verwirft (also bei „$p = 0{,}17$“ bleibt),
  obwohl in Wirklichkeit $p = 0{,}23$ ist.

********************







#  Stochastik - Aufgabe 10: 









#  Stochastik - Aufgabe 11: 




























#  Stochastik - Aufgabe 12: 



Ein Hersteller von LED-Lampen wirbt damit, dass höchstens **5 %** seiner Lampen defekt sind.  
Eine Verbraucherorganisation möchte diese Angabe überprüfen.

Dazu werden zufällig und unabhängig **80 Lampen** aus der laufenden Produktion entnommen und getestet.  
Eine Lampe gilt als „defekt“, wenn sie innerhalb der ersten 10 Minuten ausfällt.

Wir betrachten die Zufallsvariable

$$
X = \text{„Anzahl der defekten Lampen in einer Stichprobe von 80 Lampen“}.
$$

---

$a)\;\;$ Begründe, warum man $X$ als **binomialverteilte** Zufallsvariable auffassen kann, und gib die passenden Parameter $n$ und $p$ an (unter der Annahme, dass die Werbung stimmt).

> Tipp: Überlege dir, welche Bedingungen für eine Binomialverteilung erfüllt sein müssen  
> (feste Anzahl von Versuchen, zwei mögliche Ausgänge, konstante Wahrscheinlichkeit, Unabhängigkeit).

---

$b)\;\;$ Hypothesen formulieren

Es soll getestet werden, ob die Werbeaussage „höchstens 5 % defekt“ noch glaubwürdig ist.

**Aufgabe:**  
Formuliere eine Nullhypothese $H_0$ und eine Alternativhypothese $H_1$ für den Anteil defekter Lampen $p$.

> Tipp: $H_0$ entspricht der Werbeaussage, $H_1$ dem Verdacht der Verbraucherorganisation.

---

$c)\;\;$ Testentscheidung bei Signifikanzniveau $\alpha = 5\,\%$

Es soll ein **einseitiger Test** durchgeführt werden mit Signifikanzniveau $\alpha = 5\,\%$.

Man schlägt die folgende Entscheidungsregel vor:

> „Wir verwerfen $H_0$, wenn in der Stichprobe **mindestens 8** defekte Lampen auftreten.“

1. Begründe, warum diese Entscheidungsregel zu einem Test passt, der „schlechte Qualität“ (zu viele Defekte) nachweisen soll.  
2. Berechne (mithilfe einer geeigneten Tabelle oder eines CAS) die Wahrscheinlichkeit
   $$
   P(X \ge 8 \mid p = 0{,}05)
   $$
   und überprüfe, ob das Signifikanzniveau $\alpha = 5\,\%$ eingehalten wird.

---

$d)\;\;$ Fehler 1. und 2. Art – anschauliche Deutung

1. Erkläre in **eigenen Worten**, was in diesem Kontext ein  
   - Fehler **1. Art** (Alpha-Fehler) und  
   - Fehler **2. Art** (Beta-Fehler)  
   bedeutet.

2. Überlege: Für wen ist welcher Fehler „schlimmer“ – eher für den **Hersteller** oder eher für die **Kundschaft**? Begründe kurz.

---

$e)\;\;$ Abschätzung des Beta-Fehlers

Angenommen, die wahre Defektwahrscheinlichkeit beträgt in Wirklichkeit schon $p = 0{,}10$ (also 10 %).

Es wird weiterhin mit der Entscheidungsregel  
„Verwerfe $H_0$, wenn $X \ge 8$“ gearbeitet.

1. Bestimme (mithilfe einer Tabelle oder eines CAS) die Wahrscheinlichkeit
   $$
   \beta = P(\text{„Wir verwerfen } H_0 \text{ nicht“} \mid p = 0{,}10).
   $$
   Hinweis: „Wir verwerfen $H_0$ **nicht**“ bedeutet hier $X \le 7$.

2. Deute das Ergebnis im Sachkontext:  
   Was sagt die Höhe von $\beta$ über die „Entdeckungswahrscheinlichkeit“ schlechter Qualität aus?

---

$f)\;\;$ Kritische Reflexion

Beurteile, ob du diesen Test aus Sicht der Verbraucherorganisation als ausreichend empfindest.  
Gehe dabei kurz auf das Zusammenspiel von $\alpha$ und $\beta$ ein  
(z.B. „streng für den Hersteller“ vs. „schützend für die Kundschaft“).

---

<details>
<summary><strong>Musterlösung (zum Aufklappen)</strong></summary>

a) Modellierung

- Es werden $n = 80$ Lampen getestet, also eine feste Stichprobengröße.
- Jede Lampe ist (unter der Werbeaussage) mit Wahrscheinlichkeit $p = 0{,}05$ defekt.
- Die Lampen werden zufällig und unabhängig ausgewählt.

Damit gilt:
$$
X \sim B(n = 80,\; p = 0{,}05).
$$

---

b) Hypothesen

Werbeaussage: „höchstens 5 % defekt“.

Eine mögliche Formulierung (Schulstandard):

- Nullhypothese:
  $$
  H_0: p = 0{,}05
  $$
  (bzw. je nach Konvention auch $H_0: p \le 0{,}05$)

- Alternativhypothese:
  $$
  H_1: p > 0{,}05,
  $$
  also: Der Anteil defekter Lampen ist **größer** als 5 %.

---

c) Testentscheidung bei $\alpha = 5\,\%$

**1. Begründung der Entscheidungsregel**

Entscheidungsregel: „Verwirf $H_0$, wenn $X \ge 8$.“

- Viele defekte Lampen (8 oder mehr) sind ein Hinweis darauf, dass der wahre Anteil $p$ **größer** als 5 % ist.
- Damit passt die Regel gut zur Alternativhypothese $H_1: p > 0{,}05$.

**2. Prüfung des Signifikanzniveaus**

Unter $H_0$ gilt $X \sim B(80; 0{,}05)$.

Gesucht ist:
$$
\alpha = P(X \ge 8 \mid p = 0{,}05) = 1 - P(X \le 7 \mid p = 0{,}05).
$$

Mit CAS oder Tabelle erhält man (gerundet):
$$
P(X \ge 8) \approx 0{,}0466.
$$

Damit:
$$
\alpha \approx 4{,}7\,\% < 5\,\%.
$$

Das Signifikanzniveau von $5\,\%$ wird also **eingehalten**.

---

d) Fehler 1. und 2. Art

**Fehler 1. Art (Alpha-Fehler):**

- In Wirklichkeit ist $H_0$ richtig (höchstens 5 % defekt),
- aber der Test führt zur **Verwerfung** von $H_0$.
- Interpretation: Der Hersteller wird **zu Unrecht** beschuldigt, schlechte Qualität zu liefern.

**Fehler 2. Art (Beta-Fehler):**

- In Wirklichkeit ist $H_1$ wahr (mehr als 5 % defekt),
- aber der Test **verwirft $H_0$ nicht**.
- Interpretation: Schlechte Qualität bleibt **unentdeckt**, Kundinnen und Kunden verlassen sich auf eine eigentlich falsche Werbeaussage.

**Für wen ist welcher Fehler schlimmer?**

- Für den **Hersteller** ist vor allem der Alpha-Fehler unangenehm (zu Unrecht schlechter Ruf, mögliche Konsequenzen).
- Für die **Kundschaft** ist der Beta-Fehler gefährlicher (sie kaufen Produkte, die deutlich schlechter sind als versprochen).

---

e) Abschätzung des Beta-Fehlers

Unter der Annahme $p = 0{,}10$ gilt:
$$
X \sim B(80; 0{,}10).
$$

Fehler 2. Art: Wir verwerfen $H_0$ **nicht**, also $X \le 7$.

1. Berechnung:
   $$
   \beta = P(X \le 7 \mid p = 0{,}10).
   $$

   Mit CAS oder Tabelle erhält man (gerundet):
   $$
   \beta \approx 0{,}446.
   $$

2. Deutung:

   - Mit einer Wahrscheinlichkeit von ca. $44{,}6\,\%$ wird **trotz** tatsächlicher schlechter Qualität ($p = 0{,}10$) die Nullhypothese $H_0$ nicht verworfen.
   - Die „Entdeckungswahrscheinlichkeit“ schlechter Qualität (Teststärke) ist
     $$
     1 - \beta \approx 0{,}554,
     $$
     also nur etwa $55{,}4\,\%$.

   → Selbst bei deutlich schlechterer Qualität schlägt der Test nur in gut der Hälfte der Fälle an.

---

f) Kritische Reflexion

- Der Test wurde so gewählt, dass der Alpha-Fehler klein ist ($\alpha \approx 4{,}7\,\%$).  
  → Das ist **herstellerfreundlich**: Der Hersteller wird nur selten „zu Unrecht“ beschuldigt.

- Gleichzeitig ist der Beta-Fehler bei $p = 0{,}10$ relativ groß ($\beta \approx 44{,}6\,\%$).  
  → Das ist **kundenunfreundlich**: Schlechte Qualität bleibt relativ oft unentdeckt.

Aus Sicht der Verbraucherorganisation könnte man den Test daher als **nicht streng genug** ansehen.  
Mögliche Verbesserungen:

- Stichprobengröße $n$ erhöhen (mehr Lampen testen),  
- eventuell eine strengere Entscheidungsregel wählen (z.B. schon ab 7 Defekten verwerfen, dann aber $\alpha$ neu prüfen).

So wird deutlich, dass man $\alpha$ und $\beta$ nicht gleichzeitig beliebig klein machen kann – man muss einen **Kompromiss** finden zwischen Schutz der Hersteller und Schutz der Verbraucher.

</details>






