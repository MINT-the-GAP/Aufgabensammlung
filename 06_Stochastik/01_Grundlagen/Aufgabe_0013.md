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



In den dargestellten Gefäßen befinden sich Kugeln unterschiedlicher Farben. 



<section class="flex-container">

<div class="flex-child">
__$a)\;\;$__ 

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne9.png)

**Gib** die absolute Häufigkeit der roten Kugeln **an**.\
$\#(R)=$ [[  8  ]]

**Gib** die relative Häufigkeit der blauen Kugeln **an**.\
$p(B)=$ [[ 11/23  ]]
@Algebrite.check(11/23)

**Gib** die Wahrscheinlichkeit **an**, eine grüne Kugel zu ziehen.\
$P(R)=$ [[ 4/23  ]]
@Algebrite.check(4/23)

**Gib** die Chance **an**, eine rote Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(R)=$ [[  8:15  ]]


</div>

<div class="flex-child">
__$b)\;\;$__ 

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne10.png)

**Gib** die absolute Häufigkeit der grünen Kugeln **an**.\
$\#(R)=$ [[  4  ]]

**Gib** die relative Häufigkeit der blauen Kugeln **an**.\
$p(B)=$ [[  4/10  ]]
@Algebrite.check(4/10)

**Gib** die Wahrscheinlichkeit **an**, eine grüne Kugel zu ziehen.\
$P(R)=$ [[  4/10  ]]
@Algebrite.check(4/10)

**Gib** die Chance **an**, eine rote Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(R)=$ [[  1:4  ]]


</div>

<div class="flex-child">
__$c)\;\;$__ 

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne11.png)

**Gib** die absolute Häufigkeit der blauen Kugeln **an**.\
$\#(R)=$ [[  9  ]]

**Gib** die relative Häufigkeit der grüne Kugeln **an**.\
$p(B)=$ [[  7/23  ]]
@Algebrite.check(7/23)

**Gib** die Wahrscheinlichkeit **an**, eine blaue Kugel zu ziehen.\
$P(R)=$ [[  9/23  ]]
@Algebrite.check(9/23)

**Gib** die Chance **an**, eine grüne Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(R)=$ [[  7:16  ]]


</div>

<div class="flex-child">
__$d)\;\;$__ 

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne12.png)

**Gib** die absolute Häufigkeit der grünen Kugeln **an**.\
$\#(R)=$ [[  6  ]]

**Gib** die relative Häufigkeit der roten Kugeln **an**.\
$p(B)=$ [[  2/5  ]]
@Algebrite.check(2/5)

**Gib** die Wahrscheinlichkeit **an**, eine grüne Kugel zu ziehen.\
$P(R)=$ [[  3/5  ]]
@Algebrite.check(3/5)

**Gib** die Chance **an**, eine blaue Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(R)=$ [[  1:4  ]]


</div>

</section>










