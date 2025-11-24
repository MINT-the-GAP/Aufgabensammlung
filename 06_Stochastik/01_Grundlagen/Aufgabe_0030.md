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




<!-- Stochastik Grundlagen 0030 -->

In den dargestellten Gefäßen befinden sich Kugeln unterschiedlicher Farben. 


<section class="flex-container">

<div class="flex-child">
__$a)\;\;$__ 

<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne29.png)

**Gib** die absolute Häufigkeit der nicht grauen Kugeln **an**.\
$\#(\bar{G})=$ [[  11  ]]

**Gib** die relative Häufigkeit der blauen und grauen Kugeln **an**.\
$p(B \cup G)=$ [[ 7/14  ]]
@Algebrite.check(7/14)

**Gib** die Wahrscheinlichkeit **an**, eine rote Kugel zu ziehen.\
$P(R)=$ [[  0  ]]
@Algebrite.check(0)

**Gib** die Chance **an**, eine blaue Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(R)=$ [[  4:10  ]]

**Gib** die Chance **an**, eine nicht graue Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(\bar{G})=$ [[  11:3  ]]

**Gib** die Wahrscheinlichkeit **an**, eine blaue Kugel zu ziehen.\
$P(B)=$ [[  4/14  ]]
@Algebrite.check(4/14)


</div>

<div class="flex-child">
__$b)\;\;$__

<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne30.png)

**Gib** die absolute Häufigkeit der violetten Kugeln **an**.\
$\#(V)=$ [[  4  ]]

**Gib** die relative Häufigkeit der blauen Kugeln **an**.\
$p(B)=$ [[  7/19  ]]
@Algebrite.check(7/19)

**Gib** die Wahrscheinlichkeit **an**, eine orange oder violette Kugel zu ziehen.\
$P(O \cup V)=$ [[  9/19  ]]
@Algebrite.check(9/19)

**Gib** die Chance **an**, eine grüne oder blauen Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(G \cup B)=$ [[  10:9  ]]

**Gib** die Wahrscheinlichkeit **an**, keine violette Kugel zu ziehen.\
$P(\bar{V})=$ [[  15/19  ]]
@Algebrite.check(15/19)

**Gib** die Chance **an**, keine orange Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(R)=$ [[  14:5  ]]


</div>

<div class="flex-child">
__$c)\;\;$__

<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne31.png)

**Gib** die absolute Häufigkeit der nicht orangen Kugeln **an**.\
$\#(\bar{O})=$ [[  23  ]]

**Gib** die relative Häufigkeit der roten Kugeln **an**.\
$p(R)=$ [[  7/25  ]]
@Algebrite.check(7/25)

**Gib** die Wahrscheinlichkeit **an**, keine blaue Kugel zu ziehen.\
$P(\bar{B})=$ [[  6/25  ]]
@Algebrite.check(6/25)

**Gib** die Chance **an**, weder eine grüne noch eine graue Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(R)=$ [[  15:10  ]]

**Gib** die relative Häufigkeit der orangen und grünen Kugeln **an**.\
$p(O \cup G)=$ [[  8/25  ]]
@Algebrite.check(8/25)

**Gib** die Wahrscheinlichkeit **an**, keine blaue oder rote Kugel zu ziehen.\
$P(\bar{B} \cup \bar{R})=$ [[  13/25  ]]
@Algebrite.check(13/25)


</div>


</section>







