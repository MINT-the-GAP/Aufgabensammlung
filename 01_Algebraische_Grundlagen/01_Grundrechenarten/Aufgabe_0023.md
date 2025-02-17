<!--
version:  0.0.1

language: de

@style
input {
    text-align: center;
}
@end

formula: \carry   \textcolor{red}{\scriptsize #1}
formula: \digit   \rlap{\carry{#1}}\phantom{#2}#2
formula: \permil  \text{‰}

import: https://raw.githubusercontent.com/LiaTemplates/Tikz-Jax/main/README.md

script: https://cdn.jsdelivr.net/gh/LiaTemplates/Tikz-Jax@main/dist/index.js


tags: Multiplikation, Dvision, mittel, sehr niedrig, Bestimme

comment: Eine Rechenmauer der Multiplikation. Kannst du alle fehlenden Felder ausfüllen?

author: Martin Lommatzsch

-->




# Rechenmauer der Multiplation


**Bestimme** die fehlenden Felder der Rechenmauer. Hierbei werden zwei benachbarte Felder miteinander multipliziert und das Produkt in dem Feld darüber eingetragen.



<br>

__$a)\;\;$__

``` ascii
                  +-----------------+
                  |                 |
                  | " [[  288  ]] " |
                  |                 |
         +--------+--------+--------+--------+
         |                 |                 |
         | " [[   24  ]] " |      " 12 "     |
         |                 |                 |
+--------+--------+--------+--------+--------+--------+
|                 |                 |                 |
|      " 6 "      |      " 4 "      | " [[   3   ]] " |
|                 |                 |                 |
+--------+--------+--------+--------+--------+--------+                                       
```

<br>
<br>
<br>

__$b)\;\;$__

``` ascii
                  +-----------------+
                  |                 |
                  | " [[ 1620  ]] " |
                  |                 |
         +--------+--------+--------+--------+
         |                 |                 |
         | " [[  30   ]] " |     " 54 "      |
         |                 |                 |
+--------+--------+--------+--------+--------+--------+
|                 |                 |                 |
|      " 5 "      | " [[   6   ]] " |      " 9 "      |
|                 |                 |                 |
+--------+--------+--------+--------+--------+--------+                                       
```

<br>
<br>
<br>
<br>
<br>
<br>
<br>