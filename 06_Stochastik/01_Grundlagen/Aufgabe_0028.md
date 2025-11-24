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

<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne23.png)

**Gib** die absolute Häufigkeit der roten Kugeln **an**.\
$\#(R)=$ [[  6  ]]

**Gib** die relative Häufigkeit der grünen Kugeln **an**.\
$p(B)=$ [[ 7/24  ]]
@Algebrite.check(7/24)

**Gib** die Wahrscheinlichkeit **an**, eine grüne Kugel zu ziehen.\
$P(R)=$ [[  7/24  ]]
@Algebrite.check(7/24)

**Gib** die Chance **an**, eine blaue Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(R)=$ [[  8:15  ]]


</div>

<div class="flex-child">
__$b)\;\;$__

<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne24.png)

**Gib** die absolute Häufigkeit der grünen Kugeln **an**.\
$\#(R)=$ [[  9  ]]

**Gib** die relative Häufigkeit der blauen Kugeln **an**.\
$p(B)=$ [[  8/23  ]]
@Algebrite.check(8/23)

**Gib** die Wahrscheinlichkeit **an**, eine rote Kugel zu ziehen.\
$P(R)=$ [[  6/23  ]]
@Algebrite.check(6/23)

**Gib** die Chance **an**, eine grüne Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(R)=$ [[  9:14  ]]


</div>

<div class="flex-child">
__$c)\;\;$__

<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne25.png)

**Gib** die absolute Häufigkeit der blauen Kugeln **an**.\
$\#(R)=$ [[  9  ]]

**Gib** die relative Häufigkeit der roten Kugeln **an**.\
$p(B)=$ [[  10/23  ]]
@Algebrite.check(10/23)

**Gib** die Wahrscheinlichkeit **an**, eine grüne Kugel zu ziehen.\
$P(R)=$ [[  4/23  ]]
@Algebrite.check(4/23)

**Gib** die Chance **an**, eine blaue Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(R)=$ [[  9:14  ]]


</div>

</section>







