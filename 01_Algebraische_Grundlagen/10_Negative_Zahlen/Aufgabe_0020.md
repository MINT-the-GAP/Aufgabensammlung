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








tags: Negative Zahlen, Addition, Subtraktion, sehr schwer, niedrig, Bestimme

comment: Eine Rechenmauer für die Addition mit negativen Zahlen. Fülle alle Felder aus.

author: Martin Lommatzsch

-->




# Rechenmauer mit Vorzeichen der Addition

**Bestimme** die fehlenden Felder der Rechenmauer. Hierbei werden zwei benachbarte Felder miteinander addiert und die Summe in dem Feld darüber eingetragen.





__$a)\;\;$__

``` ascii
                                    +-----------------+
                                    |                 |
                                    |      " 73 "     |
                                    |                 |
                           +--------+--------+--------+--------+
                           |                 |                 |
                           | " [[  11   ]] " |     " 62 "      |
                           |                 |                 |
                  +--------+--------+--------+--------+--------+--------+
                  |                 |                 |                 |
                  | " [[  -17  ]] " |      " 28 "     | " [[  34   ]] " |
                  |                 |                 |                 |
         +--------+--------+--------+--------+--------+--------+--------+--------+                                       
         |                 |                 |                 |                 |
         | " [[  -29  ]] " |     " 12 "      | " [[  16   ]] " |     " 18 "      |
         |                 |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+                                       
|                 |                 |                 |                 |                 |
| " [[  -16  ]] " |     " -13 "     | " [[  25   ]] " | " [[  -9   ]] " | " [[  27   ]] " |
|                 |                 |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+                                       
```




__$b)\;\;$__

``` ascii
                                    +-----------------+
                                    |                 |
                                    |      " -9 "     |
                                    |                 |
                           +--------+--------+--------+--------+
                           |                 |                 |
                           | " [[  20   ]] " | " [[ -29   ]] " |
                           |                 |                 |
                  +--------+--------+--------+--------+--------+--------+
                  |                 |                 |                 |
                  | " [[  22   ]] " |     " -2 "      | " [[  -27  ]] " |
                  |                 |                 |                 |
         +--------+--------+--------+--------+--------+--------+--------+--------+                                       
         |                 |                 |                 |                 |
         | " [[  15   ]] " | " [[   7   ]] " |     " -9 "      | " [[  -18  ]] " |
         |                 |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+                                       
|                 |                 |                 |                 |                 |
| " [[  -9   ]] " |      " 24 "     | " [[  -17  ]] " | " [[   8   ]] " |     " -26 "     |
|                 |                 |                 |                 |                 |
+--------+--------+--------+--------+--------+--------+--------+--------+--------+--------+                                       
```









