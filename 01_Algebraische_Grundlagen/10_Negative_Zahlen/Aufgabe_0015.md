<!--
version:  0.0.1
language: de
narrator: Deutsch Female
mode: Presentation
edit: true

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-DynFlex/refs/heads/main/README.md


@style
input {
    text-align: center;
}

.dynFlex {
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








tags: Negative Zahlen, Addition, Subtraktion, sehr leicht, sehr niedrig, Bestimme

comment: Eine Rechenmauer für die Addition mit negativen Zahlen. Fülle alle Felder aus.

author: Martin Lommatzsch

-->




# Rechenmauer mit Vorzeichen der Addition

**Bestimme** die fehlenden Felder der Rechenmauer. Hierbei werden zwei benachbarte Felder miteinander addiert und die Summe in dem Feld darüber eingetragen.





__$a)\;\;$__

``` ascii
                  +-----------------+
                  |                 |
                  | " [[   0   ]] " |
                  |                 |
         +--------+--------+--------+--------+
         |                 |                 |
         | " [[   1   ]] " | " [[   -1  ]] " |
         |                 |                 |
+--------+--------+--------+--------+--------+--------+
|                 |                 |                 |
|      " -3 "     |      " 4 "      |     " -5 "      |
|                 |                 |                 |
+--------+--------+--------+--------+--------+--------+                                       
```



__$b)\;\;$__

``` ascii
                  +-----------------+
                  |                 |
                  | " [[  -13  ]] " |
                  |                 |
         +--------+--------+--------+--------+
         |                 |                 |
         | " [[  2    ]] " | " [[ -15   ]] " |
         |                 |                 |
+--------+--------+--------+--------+--------+--------+
|                 |                 |                 |
|      " 9 "      |      " -7 "     |      " -8 "     |
|                 |                 |                 |
+--------+--------+--------+--------+--------+--------+                                       
```








