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

tags: Vektoren, Algebra, sehr leicht

-->




# Aufgabe 1


**Entscheide**, ob es sich bei dem Term um einen Vektor, ein Skalar oder einen nicht definierten Ausdruck handelt.
<br>

- [[Vektor]       (Skalar)    [nicht definiert]]
- [    [ ]           [X]             [ ]     ]  $$ \vec{a} \circ \left( \vec{b} - \mu \vec{r} \right) $$
- [    (X)           ( )             ( )     ]  $$ \left( \lambda \vec{z} \right) - \left( \vec{c} \circ \vec{s} \right) \cdot \vec{r} $$
- [    [ ]           [ ]             [X]     ]  $$ \vec{m} \times \left( \lambda \vec{z} \circ \left( \lambda \vec{v} \right) \right) $$
- [    ( )           ( )             (X)     ]  $$ \left| \vec{x} - \mu \vec{r} \right| \times \vec{u} $$
- [    [ ]           [X]             [ ]     ]  $$ \dfrac{ \left| \vec{c} \times \vec{a} \right| }{ \vec{a} \circ \vec{c} } $$

