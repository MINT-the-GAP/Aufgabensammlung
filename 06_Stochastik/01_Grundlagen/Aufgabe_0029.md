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




<!-- Stochastik Grundlagen 0029 -->

In den dargestellten Gefäßen befinden sich Kugeln unterschiedlicher Farben. 


<section class="flex-container">

<div class="flex-child">
__$a)\;\;$__ 

<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne26.png)


</div>
<div class="flex-child">


**Gib** die absolute Häufigkeit der orangen Kugeln **an**.\
$\#(O)=$ [[  4  ]]

**Gib** die relative Häufigkeit der blauen und roten Kugeln **an**.\
$p(B \cup R)=$ [[ 8/24  ]]
@Algebrite.check(8/24)

**Gib** die Wahrscheinlichkeit **an**, keine grüne oder graue Kugel zu ziehen.\
$P(R \cup B \cup O)=$ [[  12/24  ]]
@Algebrite.check(12/24)

**Gib** die Chance **an**, eine blaue Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(B)=$ [[  5:19  ]]

**Gib** die absolute Häufigkeit der nicht roten Kugeln **an**.\
$\#(\bar{R})=$ [[  21  ]]

**Gib** die Wahrscheinlichkeit **an**, keine rote oder orange Kugel zu ziehen.\
$P(\bar{R} \cup \bar{O})=$ [[  17/24  ]]
@Algebrite.check(17/24)



</div>
</section>


---


<section class="flex-container">

<div class="flex-child">
__$b)\;\;$__

<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne27.png)


</div>
<div class="flex-child">


**Gib** die absolute Häufigkeit der orangen Kugeln **an**.\
$\#(O)=$ [[  3  ]]

**Gib** die relative Häufigkeit der blauen Kugeln **an**.\
$p(B)=$ [[  8/22  ]]
@Algebrite.check(8/22)

**Gib** die Wahrscheinlichkeit **an**, eine rote oder orange Kugel zu ziehen.\
$P(R \cup O)=$ [[  14/22  ]]
@Algebrite.check(14/22)

**Gib** die Chance **an**, eine nicht orange Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(\bar{O})=$ [[  19:3  ]]

**Gib** die relative Häufigkeit der grünen und roten Kugeln **an**.\
$p(G \cup R)=$ [[  9/22  ]]
@Algebrite.check(9/22)

**Gib** die relative Häufigkeit der blauen und roten Kugeln **an**.\
$p(B \cup R)=$ [[  13/22  ]]
@Algebrite.check(13/22)


</div>
</section>

---



<section class="flex-container">

<div class="flex-child">
__$c)\;\;$__

<!-- style="width:350px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/urne28.png)


</div>
<div class="flex-child">


**Gib** die absolute Häufigkeit der grauen Kugeln **an**.\
$\#(G)=$ [[  3  ]]

**Gib** die relative Häufigkeit der violette Kugeln **an**.\
$p(B)=$ [[  8/18  ]]
@Algebrite.check(8/18)

**Gib** die Wahrscheinlichkeit **an**, eine grüne Kugel zu ziehen.\
$P(R)=$ [[  10/18  ]]
@Algebrite.check(10/18)

**Gib** die Chance **an**, eine graue oder violette Kugel im Vergleich zu den anderen Kugeln zu ziehen.\
$R(G \cup V)=$ [[  11:7  ]]

**Gib** die Wahrscheinlichkeit **an**, eine rote Kugel zu ziehen.\
$P(R)=$  [[  0  ]]
@Algebrite.check(0)

**Gib** die absolute Häufigkeit der nicht orangen Kugeln **an**.\
$\#(R)=$ [[  11  ]]



</div>

</section>







