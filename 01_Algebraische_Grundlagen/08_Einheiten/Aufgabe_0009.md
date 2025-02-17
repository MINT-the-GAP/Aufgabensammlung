<!--
version:  0.0.1

language: de

@style
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


tags: Einheiten, Zeit, sehr leicht, sehr niedrig, Angeben

comment: Wie viel Zeit ist vergangen? Finde die richtige Einheit.

author: Martin Lommatzsch

-->




# Uhrzeiten als Zeitdifferenz

**Fülle** die Lücken mit der richtigen Einheitenabkürzung **aus**.

<br>


<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ Von 12:00$\,$Uhr bis 15:00$\,$Uhr sind $3\,$[[  h  ]] vergangen. \

</div>
<br>
<div class="flex-child">

__$b)\;\;$__ Von 17:00$\,$Uhr bis 19:00$\,$Uhr sind $120\,$[[ min ]] vergangen. \

</div>
<br>
<div class="flex-child">

__$c)\;\;$__ Von 14:37$\,$Uhr bis 14:38$\,$Uhr sind $60\,$[[  s  ]] vergangen. \

</div>
<br>
<div class="flex-child">

__$d)\;\;$__ Von 06:15$\,$Uhr bis 17:15$\,$Uhr sind $11\,$[[  h  ]] vergangen. \

</div>
<br>
<div class="flex-child">

__$e)\;\;$__ Von 04:15$\,$Uhr bis 05:45$\,$Uhr sind $90\,$[[ min ]] vergangen. \

</div>
<br>
<div class="flex-child">

__$f)\;\;$__ Von 21:45$\,$Uhr bis 22:15$\,$Uhr sind $30\,$[[ min ]] vergangen. \

</div>


</section>

<br>
<br>
<br>
<br>
<br>