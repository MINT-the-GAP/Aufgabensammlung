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


tags: Mengen, Bruchrechnung, Wurzeln, Potenzen, Dezimalzahlen, Negative Zahlen, Vorrangsregeln, leicht, normal, Angeben

comment: Was ist die kleinste Zahlenmenge, in die der Wert des Terms passt?

author: Martin Lommatzsch

-->




# Kleinste Zahlenmenge von Termwerten

**Wähle** die kleinste Zahlenmenge **aus**, in der der beschriebene Term ist.

<br>

<section class="flex-container">
<div class="flex-child">
<br>
__$a)\;\;$__ $ -4^3+(-3)^4 \in$ [[($\mathbb{N}$)|$\mathbb{Z}$|$\mathbb{Q}$|$\mathbb{R}$]] 
<br>
</div>
<div class="flex-child">
<br>
__$b)\;\;$__ $ \left(\sqrt{7}+\sqrt{11}\right)^2 \in$ [[$\mathbb{N}$|$\mathbb{Z}$|$\mathbb{Q}$|($\mathbb{R}$)]] 
<br>
</div>
<div class="flex-child">
<br>
__$c)\;\;$__ $ 8-\sqrt{6,25} \in$ [[$\mathbb{N}$|$\mathbb{Z}$|($\mathbb{Q}$)|$\mathbb{R}$]] 
<br>
</div>
<div class="flex-child">
<br>
__$d)\;\;$__ $ -0,45+\sqrt{0,25}+\dfrac{19}{20} \in$ [[($\mathbb{N}$)|$\mathbb{Z}$|$\mathbb{Q}$|$\mathbb{R}$]] 

</div>
</section>
<br>
<br>
<br>
<br>

