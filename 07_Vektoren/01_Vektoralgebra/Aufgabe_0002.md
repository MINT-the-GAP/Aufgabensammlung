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
- [    [X]           [ ]             [ ]     ]  $$ \vec{r} \cdot \left( \vec{n} \circ \vec{s}\right) $$
- [    ( )           (X)             ( )     ]  $$ \lambda{\vec{d}}^{\,2} \cdot \left|\vec{k}\right| $$
- [    [ ]           [ ]             [X]     ]  $$ \left|\vec{a}\right| \times s \cdot \vec{b} $$
- [    ( )           (X)             ( )     ]  $$ \left( \vec{z} \times \lambda\vec{x}\right) \circ \vec{c} $$
- [    [ ]           [ ]             [X]     ]  $$ \dfrac{\vec{u}-\mu \vec{v}}{\vec{u}+\vec{v}} $$

