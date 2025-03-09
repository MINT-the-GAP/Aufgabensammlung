<!--
version:  0.0.1

language: de

@style
main > *:not(:last-child) {
  margin-bottom: 3rem;
}
@end

formula: \carry   \textcolor{red}{\scriptsize #1}
formula: \digit   \rlap{\carry{#1}}\phantom{#2}#2
formula: \permil  \text{‰}

import: https://raw.githubusercontent.com/LiaTemplates/Tikz-Jax/main/README.md

script: https://cdn.jsdelivr.net/gh/LiaTemplates/Tikz-Jax@main/dist/index.js


tags: Vektoren, Algebra, Skalarprodukt, Vektorprodukt, Betrag, Potenzen, Vorrangsregeln, sehr leicht, normal, Angeben

comment: Skalar, Vektor oder nicht definiert? Bewerte den Term.

author: Martin Lommatzsch

-->




# Vektorielle Operatoren


**Entscheide**, ob es sich bei dem Term um einen Vektor, ein Skalar oder einen nicht definierten Ausdruck handelt.
<br>

- [[Vektor]       (Skalar)    [nicht definiert]]
- [    [ ]           [X]             [ ]     ]  $$ \vec{a} \circ \left( \vec{b} - \mu \vec{r} \right) $$
- [    (X)           ( )             ( )     ]  $$ \left( \lambda \vec{z} \right) - \left( \vec{c} \circ \vec{s} \right) \cdot \vec{r} $$
- [    [ ]           [ ]             [X]     ]  $$ \vec{m} \times \left( \lambda \vec{z} \circ \left( \lambda \vec{v} \right) \right) $$
- [    ( )           ( )             (X)     ]  $$ \left| \vec{x} - \mu \vec{r} \right| \times \vec{u} $$
- [    [ ]           [X]             [ ]     ]  $$ \dfrac{ \left| \vec{c} \times \vec{a} \right| }{ \vec{a} \circ \vec{c} } $$

