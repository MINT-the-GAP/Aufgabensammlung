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



<!-- Stochastik Grundlagen 0026 -->


In den dargestellten Gefäßen befinden sich Kugeln unterschiedlicher Farben. 


<section class="flex-container">

<div class="flex-child">
__$a)\;\;$__ 

<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne17.png)

**Gib** die absolute Häufigkeit der grünen Kugeln **an**.\
$\#(G)=$ [[  5  ]]

**Gib** die relative Häufigkeit der orangen Kugeln **an**.\
$p(O)=$ [[ 3/18  ]]
@Algebrite.check(3/18)

**Gib** die Wahrscheinlichkeit **an**, eine blaue Kugel zu ziehen.\
$P(B)=$ [[  6/18  ]]
@Algebrite.check(6/18)

**Gib** die Chance **an**, eine rote Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(R)=$ [[  4:14  ]]

**Gib** die Wahrscheinlichkeit **an**, eine orange oder grüne Kugel zu ziehen.\
$P(O \cup G)=$ [[  8/18  ]]
@Algebrite.check(8/18)

**Gib** die Chance **an**, eine rote oder blaue Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(R \cup B)=$ [[  10:8  ]]


</div>

<div class="flex-child">
__$b)\;\;$__

<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne18.png)

**Gib** die absolute Häufigkeit der violette Kugeln **an**.\
$\#(V)=$ [[  6  ]]

**Gib** die relative Häufigkeit der grünen Kugeln **an**.\
$p(G)=$ [[  4/20  ]]
@Algebrite.check(4/20)

**Gib** die Wahrscheinlichkeit **an**, eine blaue Kugel zu ziehen.\
$P(B)=$ [[  6/20  ]]
@Algebrite.check(6/20)

**Gib** die Chance **an**, eine orange Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(O)=$ [[  3:17  ]]

**Gib** die Wahrscheinlichkeit **an**, keine rote Kugel zu ziehen.\
$P(\bar{R})=$ [[  19/20  ]]
@Algebrite.check(19/20)

**Gib** die Chance **an**, eine violette oder orange Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(O \cup V)=$ [[  9:11  ]]


</div>

<div class="flex-child">
__$c)\;\;$__

<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne19.png)


**Gib** die relative Häufigkeit der violetten und grünen Kugeln **an**.\
$p(V \cup G)=$ [[  9/22  ]]
@Algebrite.check(9/22)

**Gib** die Wahrscheinlichkeit **an**, keine grüne oder blaue Kugel zu ziehen.\
$P(\bar{G} \cup \bar{B})=$ [[  16/22  ]]
@Algebrite.check(16/22)

**Gib** die Chance **an**, eine blaue oder violette Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(V \cup B)=$ [[  10:12  ]]

**Gib** die Wahrscheinlichkeit **an**, eine rote oder grüne Kugel zu ziehen.\
$P(R \cup G)=$ [[  7/22  ]]
@Algebrite.check(7/22)

**Gib** die Wahrscheinlichkeit **an**, eine orange, blaue oder violette Kugel zu ziehen.\
$P(O \cup B \cup V) =$ [[  15/22  ]]
@Algebrite.check(15/22)

**Gib** die Chance **an**, keine rote oder violette Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(\bar{R} \cup \bar{V})=$ [[  11:11  ]]


</div>

</section>







