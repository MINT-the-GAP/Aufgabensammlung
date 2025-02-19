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


.vertical-text {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    text-align: center;
}
@end

formula: \carry   \textcolor{red}{\scriptsize #1}
formula: \digit   \rlap{\carry{#1}}\phantom{#2}#2
formula: \permil  \text{‰}

import: https://raw.githubusercontent.com/LiaTemplates/Tikz-Jax/main/README.md

script: https://cdn.jsdelivr.net/gh/LiaTemplates/Tikz-Jax@main/dist/index.js


tags: Negative Zahlen, Addition, Subtraktion, mittel, niedrig, Bestimme

comment: Eine Rechenmauer für die Addition mit negativen Zahlen. Fülle alle Felder aus.

author: Martin Lommatzsch

-->




# Rechenmauer mit Vorzeichen der Addition

Bestimme die fehlenden Felder der Rechenmauer. Hierbei werden zwei benachbarte Felder miteinander addiert und die Summe in dem Feld darüber eingetragen.



<br>

<section class="flex-container">
<div class="flex-child">

__$a)\;\;$__

``` ascii
                  +-----------------+
                  |                 |
                  |     " -4 "      |
                  |                 |
         +--------+--------+--------+--------+
         |                 |                 |
         | " [[  -27  ]] " |     " 23 "      |
         |                 |                 |
+--------+--------+--------+--------+--------+--------+
|                 |                 |                 |
|     " -61 "     | " [[  34   ]] " | " [[  -11  ]] " |
|                 |                 |                 |
+--------+--------+--------+--------+--------+--------+                                       
```


</div>
<div class="flex-child">

__$b)\;\;$__

``` ascii
                  +-----------------+
                  |                 |
                  |     " -37 "     |
                  |                 |
         +--------+--------+--------+--------+
         |                 |                 |
         |     " -22 "     | " [[  -15  ]] " |
         |                 |                 |
+--------+--------+--------+--------+--------+--------+
|                 |                 |                 |
|     " 37 "      | " [[  -59  ]] " | " [[  44   ]] " |
|                 |                 |                 |
+--------+--------+--------+--------+--------+--------+                                       
```

</div>
</section>

<br>
<br>
<br>
<br>
<br>
<br>
<br>