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


tags: Multiplikation, Dvision, sehr schwer, sehr niedrig, Bestimme

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
                                    |   " 23328 "     |
                                    |                 |
                           +--------+--------+--------+--------+
                           |                 |                 |
                           | " [[  432  ]] " |     " 54 "      |
                           |                 |                 |
                  +--------+--------+--------+--------+--------+--------+
                  |                 |                 |                 |
                  | " [[  24   ]] " |      " 18 "     |  " [[  3   ]] " |
                  |                 |                 |                 |
         +--------+--------+--------+--------+--------+--------+--------+--------+                                       
         |                 |                 |                 |                 |
         | " [[   4   ]] " |      " 6 "      | " [[   3   ]] " |      " 1 "      |
         |                 |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+                                       
|                 |                 |                 |                 |                 |
| " [[   2   ]] " |      " 2 "      | " [[   3   ]] " | " [[   1   ]] " | " [[   1   ]] " |
|                 |                 |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+                                       
```

<br>
<br>
<br>

__$b)\;\;$__

``` ascii
                                    +-----------------+
                                    |                 |
                                    | " [[   0   ]] " |
                                    |                 |
                           +--------+--------+--------+--------+
                           |                 |                 |
                           | " [[  960  ]] " | " [[   0   ]] " |
                           |                 |                 |
                  +--------+--------+--------+--------+--------+--------+
                  |                 |                 |                 |
                  |     " 24 "      |     " 40 "      | " [[   0   ]] " |
                  |                 |                 |                 |
         +--------+--------+--------+--------+--------+--------+--------+--------+                                       
         |                 |                 |                 |                 |
         | " [[   6   ]] " | " [[   4   ]] " |     " 10 "      | " [[   0   ]] " |
         |                 |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+                                       
|                 |                 |                 |                 |                 |
| " [[   3   ]] " |      " 2 "      | " [[   2   ]] " | " [[   5   ]] " |      " 0 "      |
|                 |                 |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+                                       
```


<br>
<br>
<br>
<br>
<br>
<br>
<br>