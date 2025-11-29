<!--
version:  0.0.1

language: de

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


tags: Häufigkeit, Chance, Wahrscheinlichkeit, mittel, niedrig, Angeben

comment: Es wird aus einer Urne gezogen. Kannst du die Chance, die Häufigkeit oder die Wahrscheinlichkeit angeben?

author: Martin Lommatzsch

-->




# Betrachtung von Urnen




<!-- Stochastik Grundlagen 0027 -->

In den dargestellten Gefäßen befinden sich Kugeln unterschiedlicher Farben. 


<section class="flex-container">

<div class="flex-child">
__$a)\;\;$__ 

<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne20.png)


</div>
<div class="flex-child">


**Gib** die absolute Häufigkeit der roten Kugeln **an**.\
$\#(R)=$ [[  5  ]]

**Gib** die relative Häufigkeit der grünen Kugeln **an**.\
$p(G)=$ [[ 6/20  ]]
@Algebrite.check(6/20)

**Gib** die Wahrscheinlichkeit **an**, keine blaue Kugel zu ziehen.\
$P(\bar{B})=$ [[  16/20  ]]
@Algebrite.check(16/20)

**Gib** die Chance **an**, eine rote Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(R)=$ [[  5:15  ]]

**Gib** die Wahrscheinlichkeit **an**, eine grüne oder rote Kugel zu ziehen.\
$P(R \cup G)=$ [[  11/20  ]]
@Algebrite.check(11/20)

**Gib** die Wahrscheinlichkeit **an**, keine graue Kugel zu ziehen.\
$P(R \cup B \cup G)=$ [[  15/20  ]]
@Algebrite.check(15/20)


</div>
</section>


---


<section class="flex-container">

<div class="flex-child">
__$b)\;\;$__

<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne21.png)


</div>
<div class="flex-child">


**Gib** die absolute Häufigkeit der orange Kugeln **an**.\
$\#(O)=$ [[  7  ]]

**Gib** die relative Häufigkeit der violetten und orangen Kugeln **an**.\
$p(B \cup O)=$ [[  11/22  ]]
@Algebrite.check(11/22)

**Gib** die Wahrscheinlichkeit **an**, eine graue oder violette Kugel zu ziehen.\
$P(G \cup V)=$ [[  9/22  ]]
@Algebrite.check(9/22)

**Gib** die Chance **an**, eine violette Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(V)=$ [[  5:17  ]]

**Gib** die relative Häufigkeit der nicht grauen Kugeln **an**.\
$p(\bar{G})=$ [[  18/22  ]]
@Algebrite.check(18/22)

**Gib** die Wahrscheinlichkeit **an**, keine blaue oder violette Kugel zu ziehen.\
$P(\bar{V} \cup \bar{B})=$ [[  11/22  ]]
@Algebrite.check(11/22)


</div>
</section>


---


<section class="flex-container">

<div class="flex-child">
__$c)\;\;$__

<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne22.png)


</div>
<div class="flex-child">


**Gib** die absolute Häufigkeit der blauen und orangen Kugeln **an**.\
$\#(B \cup O)=$ [[  10  ]]

**Gib** die relative Häufigkeit der roten Kugeln **an**.\
$p(R)=$ [[  7/22  ]]
@Algebrite.check(7/22)

**Gib** die Wahrscheinlichkeit **an**, eine grüne Kugel zu ziehen.\
$P(G)=$ [[  4/22  ]]
@Algebrite.check(4/22)

**Gib** die relative Häufigkeit der nicht blauen Kugeln **an**.\
$p(\bar{B})=$ [[  16/22  ]]
@Algebrite.check(16/22)

**Gib** die Wahrscheinlichkeit **an**, eine orange oder rote Kugel zu ziehen.\
$P(R \cup O)=$ [[  13/22  ]]
@Algebrite.check(13/22)

**Gib** die Chance **an**, eine orange oder grüne Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(G \cup O)=$ [[  11:11  ]]


</div>

</section>







