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


tags: Häufigkeit, Chance, Wahrscheinlichkeit, leicht, niedrig, Angeben

comment: Es wird aus einer Urne gezogen. Kannst du die Chance, die Häufigkeit oder die Wahrscheinlichkeit angeben?

author: Martin Lommatzsch

-->




# Betrachtung von Urnen

In den dargestellten Gefäßen befinden sich Kugeln unterschiedlicher Farben. 

<section class="flex-container">

<div class="flex-child">
__$a)\;\;$__ 

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne5.png)

**Gib** die absolute Häufigkeit der roten Kugeln **an**.\
$\#(R)=$ [[  4  ]]

**Gib** die relative Häufigkeit der blauen Kugeln **an**.\
$p(B)=$ [[ 25/29  ]]
@Algebrite.check(25/29)

**Gib** die Wahrscheinlichkeit **an**, eine rote Kugel zu ziehen.\
$P(R)=$ [[  4/29  ]]
@Algebrite.check(4/29)

**Gib** die Chance **an**, eine blaue Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(R)=$ [[  25:4  ]]


</div>

<div class="flex-child">
__$b)\;\;$__ 

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne6.png)

**Gib** die absolute Häufigkeit der blauen Kugeln **an**.\
$\#(R)=$ [[  6  ]]

**Gib** die relative Häufigkeit der blauen Kugeln **an**.\
$p(B)=$ [[  6/13  ]]
@Algebrite.check(6/13)

**Gib** die Wahrscheinlichkeit **an**, eine rote Kugel zu ziehen.\
$P(R)=$ [[  7/13  ]]
@Algebrite.check(7/13)

**Gib** die Chance **an**, eine blaue Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(R)=$ [[  7:6  ]]


</div>

<div class="flex-child">
__$c)\;\;$__ 

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne7.png)

**Gib** die absolute Häufigkeit der roten Kugeln **an**.\
$\#(R)=$ [[  7  ]]

**Gib** die relative Häufigkeit der roten Kugeln **an**.\
$p(B)=$ [[  7/23  ]]
@Algebrite.check(7/23)

**Gib** die Wahrscheinlichkeit **an**, eine rote Kugel zu ziehen.\
$P(R)=$ [[  7/23  ]]
@Algebrite.check(7/23)

**Gib** die Chance **an**, eine rote Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(R)=$ [[  7:16  ]]


</div>

<div class="flex-child">
__$d)\;\;$__ 

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne8.png)

**Gib** die absolute Häufigkeit der roten Kugeln **an**.\
$\#(R)=$ [[  5  ]]

**Gib** die relative Häufigkeit der blauen Kugeln **an**.\
$p(B)=$ [[  27/32  ]]
@Algebrite.check(27/32)

**Gib** die Wahrscheinlichkeit **an**, eine rote Kugel zu ziehen.\
$P(R)=$ [[  5/32  ]]
@Algebrite.check(5/32)

**Gib** die Chance **an**, eine blaue Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(R)=$ [[  27:5  ]]


</div>

</section>











