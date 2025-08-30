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


tags: Zahlenstrahl, Zahlenverständnis, Term, Addition, leicht, sehr niedrig, Angeben

comment: Welcher Term ist hier am Zahlenstrahl dargestellt?

author: Martin Lommatzsch

-->




# Term am Zahlenstrahl

**Gib** den am Zahlenstrahl dargestellten Term **an**.

<section class="flex-container">

<div class="flex-child">

__$a)\;\;$__ 
<center>

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/Grund47_1.png)

</center>

<!-- data-solution-button="5"-->
[[  1+3   ]] $= 4$

</div>

<div class="flex-child">

__$b)\;\;$__ 
<center>

![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/Grund47_2.png)

</center>

<!-- data-solution-button="5"-->
[[  6+2   ]] $= 8$

</div>
</section>