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


tags: Negative Zahlen, Multiplikation, Division, schwer, niedrig, Bestimme

comment: Eine Rechenmauer für die Multiplikation mit negativen Zahlen. Fülle alle Felder aus.

author: Martin Lommatzsch

-->




# Rechenmauer mit Vorzeichen der Multiplikation

Bestimme die fehlenden Felder der Rechenmauer. Hierbei werden zwei benachbarte Felder miteinander multipliziert und das Produkt in dem Feld darüber eingetragen.



<br>

<section class="flex-container">
<div class="flex-child">

__$a)\;\;$__

``` ascii
                           +-----------------+
                           |                 |
                           |    " -648 "     |
                           |                 |
                  +--------+--------+--------+--------+
                  |                 |                 |
                  | " [[  18   ]] " |     " -36 "     |
                  |                 |                 |
         +--------+--------+--------+--------+--------+--------+
         |                 |                 |                 |
         | " [[  -3   ]] " |     " -6 "      | " [[   6   ]] " |
         |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+                                       
|                 |                 |                 |                 |
| " [[  -1   ]] " |      " 3 "      | " [[   -2  ]] " | " [[   -3  ]] " |
|                 |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+                                       
```


</div>
<div class="flex-child">

__$b)\;\;$__

``` ascii
                           +-----------------+
                           |                 |
                           | " [[ -384  ]] " |
                           |                 |
                  +--------+--------+--------+--------+
                  |                 |                 |
                  |      " 24 "     | " [[  -16  ]] " |
                  |                 |                 |
         +--------+--------+--------+--------+--------+--------+
         |                 |                 |                 |
         |      " 6 "      | " [[  4    ]] " |      " -4 "     |
         |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+                                       
|                 |                 |                 |                 |
| " [[   -5  ]] " |      " -1 "     | " [[   4   ]] " | " [[   -1  ]] " |
|                 |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+                                       
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