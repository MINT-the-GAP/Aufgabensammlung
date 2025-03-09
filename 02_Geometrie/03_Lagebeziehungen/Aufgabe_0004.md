<!--
version:  0.0.1

language: de


@style
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


tags: Lagebeziehung, leicht, niedrig, Angeben

comment: Strecken oder Geraden können unter besonderen Bedingungen parallel oder orthogonal zueinander sein. Welche Lagebeziehung haben die betrachteten Objekte zueinander?

author: Martin Lommatzsch

-->


# Lagebeziehungen von Geraden

**Wähle** die passende Lagebeziehung **aus**.

<br>

<section class="flex-container">

<div class="flex-child">
__$a)\;\;$__ Die Gerade $f$ ist parallel zur Geraden $g$, während $g$ parallel zur Geraden $h$ ist. Die Gerade $k$ ist orthogonal zur Geraden $h$. \
<br>
$f$ [[($\bot$)|$\parallel$]] $k$

<br>
</div>

<div class="flex-child">

__$b)\;\;$__ Die Gerade $f$ ist orthogonal zur Geraden $g$, während $g$ orthogonal zur Geraden $h$ ist. Die Gerade $h$ ist orthogonal zur Geraden $k$. \
<br>
$f$ [[($\bot$)|$\parallel$]] $k$


</div>

</section>



<br>
<br>
<br>
<br>
<br>