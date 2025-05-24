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

**Gib** den ungefähren Wert der abgebildeten Objekte **an**.

<section class="flex-container">

<div class="flex-child">


__$a)\;\;$__

![Perlen](../pics/circa3.jpg)

[[ 900  ]] Perlen
@Algebrite.check_margin(820,980)


</div>
<div class="flex-child">


__$b)\;\;$__ 

![Holzperlen](../pics/circa4.jpg)

[[ 280  ]] Holzperlen
@Algebrite.check_margin(250,310)


</div> 
</section>


