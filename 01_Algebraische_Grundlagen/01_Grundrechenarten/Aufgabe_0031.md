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


tags: Vokabeln, sehr leicht, sehr niedrig, Angeben

comment: Kannst du in vorliegenden Gleichung den mit rot markierten Bereich mit der Fachsprache richtig benennen?

author: Martin Lommatzsch

-->




# Vokabeln der Grundrechenarten

**Gib** die korrekte Bezeichnung in Fachsprache für den rot markierten Teil **an**.

<section class="flex-container">

<div class="flex-child">
<br>
__$a)\;\;$__ $ \textcolor{red}{5} \cdot 3 = 15$ \
[[    Faktor          ]]
<br>
</div>
<div class="flex-child">
<br>
__$b)\;\;$__ $ \textcolor{red}{5 + 6} = 11 $ \
[[    Summe           ]]
<br>
</div>
<div class="flex-child">
<br>
__$c)\;\;$__ $ 85:\textcolor{red}{13} = 5$ \
[[        Dividend    ]]

</div>
<div class="flex-child">
<br>
__$d)\;\;$__ $ 27-12 = \textcolor{red}{15}$ \
[[ Wert der Differenz ]]

</div>
</section>
<br>
<br>
<br>
<br>

