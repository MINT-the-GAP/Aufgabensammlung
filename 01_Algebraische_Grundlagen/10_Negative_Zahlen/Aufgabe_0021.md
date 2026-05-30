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








tags: Negative Zahlen, Multiplikation, sehr leicht, sehr niedrig, Bestimme

comment: Eine Rechenmauer für die Multiplikation mit negativen Zahlen. Fülle alle Felder aus.

author: Martin Lommatzsch

-->




# Rechenmauer mit Vorzeichen der Multiplikation

**Bestimme** die fehlenden Felder der Rechenmauer. Hierbei werden zwei benachbarte Felder miteinander multipliziert und das Produkt in dem Feld darüber eingetragen.




__$a)\;\;$__

<!-- data-solution-button="5"--> 
``` ascii
                  +-----------------+
                  |                 |
                  | " [[  300  ]] " |
                  |                 |
         +--------+--------+--------+--------+
         |                 |                 |
         | " [[  -10  ]] " | " [[  -30  ]] " |
         |                 |                 |
+--------+--------+--------+--------+--------+--------+
|                 |                 |                 |
|      " -2 "     |      " 5 "      |      " -6 "     |
|                 |                 |                 |
+--------+--------+--------+--------+--------+--------+                                       
```




__$b)\;\;$__

<!-- data-solution-button="5"--> 
``` ascii
                  +-----------------+
                  |                 |
                  | " [[ -224  ]] " |
                  |                 |
         +--------+--------+--------+--------+
         |                 |                 |
         | " [[  -28  ]] " | " [[   8   ]] " |
         |                 |                 |
+--------+--------+--------+--------+--------+--------+
|                 |                 |                 |
|      " -7 "     |      " 4 "      |      " 2 "      |
|                 |                 |                 |
+--------+--------+--------+--------+--------+--------+                                       
```








