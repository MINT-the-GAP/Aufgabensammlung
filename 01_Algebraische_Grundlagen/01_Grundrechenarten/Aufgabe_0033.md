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
__$a)\;\;$__ $ 9 \cdot 6 = \textcolor{red}{54}$ \
[[ Wert des Produkts  ]]
<br>
</div>
<div class="flex-child">
<br>
__$b)\;\;$__ $ \textcolor{red}{18:6} = 3 $ \
[[    Quotient        ]]
<br>
</div>
<div class="flex-child">
<br>
__$c)\;\;$__ $ 63-\textcolor{red}{34} = 29$ \
[[      Subtrahend    ]]

</div>
<div class="flex-child">
<br>
__$d)\;\;$__ $ 32 = \textcolor{red}{72-40}$ \
[[          Differenz ]]

</div>
</section>
<br>
<br>
<br>
<br>

