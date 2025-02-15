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

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md
import: https://raw.githubusercontent.com/LiaTemplates/Tikz-Jax/main/README.md

script: https://cdn.jsdelivr.net/gh/LiaTemplates/Tikz-Jax@main/dist/index.js

@round
<script>
  let value = `@input`;
  if (value.startsWith("@")) {
    ""
  } else {
    value = JSON.parse(value);
    value = value[0]
    value = value.replace(/,/g, ".");
    value = parseFloat(value);
    value = Math.round(value * Math.pow(10,@1)) / Math.pow(10,@1);
    value == @0
  }
</script>
@end

tags: Vektoren, Algebra, Skalarprodukt, Vektorprodukt, Betrag, Potenzen, Vorrangsregeln, sehr leicht

-->




# Aufgabe 1


**Entscheide**, ob es sich bei dem Term um einen Vektor, ein Skalar oder einen nicht definierten Ausdruck handelt.
<br>

- [[Vektor]       (Skalar)    [nicht definiert]]
- [    [ ]           [ ]             [X]     ]  $$ \vec{a} \circ \vec{b} + \mu \vec{r} $$
- [    ( )           (X)             ( )     ]  $$ \left| \lambda \vec{z} \right| - \left( \vec{c} \circ \vec{s} \right) $$
- [    [X]           [ ]             [ ]     ]  $$ (r \cdot s) \vec{m} - \left( \lambda \vec{z} \times \vec{v} \right) $$
- [    ( )           (X)             ( )     ]  $$ \left( \vec{x} \times \vec{r} \right)^2 - u $$
- [    [X]           [ ]             [ ]     ]  $$ \left( \left( \vec{v} + \vec{u} \right) \times \left( \vec{v} - \vec{u} \right) \right) \times \vec{n} $$

