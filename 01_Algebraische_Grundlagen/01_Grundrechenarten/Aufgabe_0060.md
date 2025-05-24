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
import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md


tags: Überschlagen, sehr leicht, sehr niedrig, Angeben

comment: Kannst du einschätzen wie viele Objekte auf dem Bild abgebildet sind? 

author: Martin Lommatzsch

-->




# Abschätzen von Mengen aus Bildern

**Gib** den ungefähren Wert der abgebildeten Objekte an **an**.

<section class="flex-container">

<div class="flex-child">
<br>
__$a)\;\;$__

![Linsen](https://mint-the-gap.github.io/Aufgabensammlung/pics/circa7.jpg)

[[ 1200  ]] Linsen
@Algebrite.check_margin(1100,1350)
<br>
</div>
<div class="flex-child">
<br>
__$b)\;\;$__ $

![Puffgerstenkörner](https://mint-the-gap.github.io/Aufgabensammlung/pics/circa8.jpg)

[[ 1050  ]] Puffgerstenkörner
@Algebrite.check_margin(950,1250)
<br>
</div> 
</section>
<br>
<br>
<br>
<br>

