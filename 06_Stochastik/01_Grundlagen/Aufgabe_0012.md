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

<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne1.png)

**Gib** die absolute Häufigkeit der roten Kugeln **an**.\
$\#(R)=$ [[  7  ]]

**Gib** die relative Häufigkeit der blauen Kugeln **an**.\
$p(B)=$ [[ 15/22  ]]
@Algebrite.check(15/22)

**Gib** die Wahrscheinlichkeit **an**, eine rote Kugel zu ziehen.\
$P(R)=$ [[ 7/22  ]]
@Algebrite.check(7/22)

**Gib** die Chance **an**, eine rote Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(R)=$ [[  7:15  ]]


</div>

<div class="flex-child">
__$b)\;\;$__ 

<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne2.png)

**Gib** die absolute Häufigkeit der roten Kugeln **an**.\
$\#(R)=$ [[  5  ]]

**Gib** die relative Häufigkeit der blauen Kugeln **an**.\
$p(B)=$ [[ 12/17  ]]
@Algebrite.check(12/17)

**Gib** die Wahrscheinlichkeit **an**, eine blaue Kugel zu ziehen.\
$P(B)=$ [[ 12/17  ]]
@Algebrite.check(12/17)

**Gib** die Chance **an**, eine rote Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(R)=$ [[  5:12  ]]


</div>

<div class="flex-child">
__$c)\;\;$__ 

<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne3.png)

**Gib** die absolute Häufigkeit der blauen Kugeln **an**.\
$\#(B)=$ [[  6  ]]

**Gib** die relative Häufigkeit der roten Kugeln **an**.\
$p(R)=$ [[ 6/12  ]]
@Algebrite.check(6/12)

**Gib** die Wahrscheinlichkeit **an**, eine rote Kugel zu ziehen.\
$P(R)=$ [[ 6/12  ]]
@Algebrite.check(7/22)

**Gib** die Chance **an**, eine blaue Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(B)=$ [[  6:6  ]]


</div>

<div class="flex-child">
__$d)\;\;$__ 

<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne4.png)

**Gib** die absolute Häufigkeit der roten Kugeln **an**.\
$\#(R)=$ [[  10  ]]

**Gib** die relative Häufigkeit der roten Kugeln **an**.\
$p(R)=$ [[  10/25  ]]
@Algebrite.check(10/25)

**Gib** die Wahrscheinlichkeit **an**, eine blaue Kugel zu ziehen.\
$P(B)=$ [[  15/25  ]]
@Algebrite.check(15/25)

**Gib** die Chance **an**, eine blaue Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(B)=$ [[  15:25  ]]


</div>

</section>







