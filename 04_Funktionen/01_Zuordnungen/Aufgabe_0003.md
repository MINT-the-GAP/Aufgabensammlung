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


tags: Zuordnung, Proportional, Antiproportional, beliebige Zuordnung, sehr leicht, sehr niedrig, Angeben

comment: Um was für eine Zuordnung handelt es sich?

author: Martin Lommatzsch

-->




# Zuordnungsarten

**Entscheide**, ob die dargestellte Tabelle eine beliebe, eine proportionale oder antiproportionale Zuordnung ist. (Der $x$-Wert wird dem $y$-Wert zugeordnet.)

<br>

<section class="flex-container">

<div class="flex-child">
__$a)\;\;$__

<!-- data-type="none" -->
|  $x$  |  96  |  48  |  38  |  8   |  6   |
|  $y$  |  1   |  2   |  3   |  12  |  16  |

[[Proportionale|Antiproportionale|(Beliebige)]] Zuordnung.

<br>
</div>

<div class="flex-child">

__$b)\;\;$__

<!-- data-type="none" -->
|  $x$  |  144  |  96  |  48  |  12  |  9  |
|  $y$  |  2    |  3   |  6   |  24  |  32  |

[[Proportionale|(Antiproportionale)|Beliebige]] Zuordnung.

</div>

</section>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>