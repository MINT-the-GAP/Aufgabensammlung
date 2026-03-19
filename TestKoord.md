<!--
version:  0.0.1
language: de
narrator: Deutsch Female

tags:
comment:
author:


import: https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md

import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/imports/KoordREADME.md




-->



# Plot Funktion


> Updateversuch für neue Features am 19.03. um 18:00 Uhr

> `import: https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/imports/KoordREADME.md`




Alles klappt nur wenn `https://raw.githubusercontent.com/liaTemplates/JSXGraph/main/README.md` im Header importiert wurde!


@Koordinatensystem(`xmin=-7;xmax=7;ymin=-5;ymax=5;width=800;id=A1`)

@AchsenBeschriftung(`id=A1;xlabel=$x$;ylabel=$y$`)

@PlotFunktion(`A1;f;x;#b41f65`)



```
@Koordinatensystem(`xmin=-7;xmax=7;ymin=-5;ymax=5;width=800;id=A1`)

@AchsenBeschriftung(`id=A1;xlabel=$x$;ylabel=$y$`)

@PlotFunktion(`A1;f;x;#b41f65`)
```




# Graph selbst plotten

@Koordinatensystem(`xmin=-7;xmax=7;ymin=-5;ymax=5;width=800;id=A8`)

@AchsenBeschriftung(`id=A8;xlabel=$x$;ylabel=$y$`)

@PlotEingabeLatex(`A8;g;#b41f65`)


```
@Koordinatensystem(`xmin=-7;xmax=7;ymin=-5;ymax=5;width=800;id=A8`)

@AchsenBeschriftung(`id=A8;xlabel=$x$;ylabel=$y$`)

@PlotEingabeLatex(`A8;g;#b41f65`)
```







# Punkt auf Koordinate



@Koordinatensystem(`xmin=-7;xmax=7;ymin=-5;ymax=5;width=800;id=A2`)

@AchsenBeschriftung(`id=A2;xlabel=$x$;ylabel=$y$`)



Ziehe den Punkt $A$ auf die Koordinaten $(1|4)$.

@ErzeugePunkt(`A2;A;1;4`,`<!-- data-solution-button="2" -->`)



```
@Koordinatensystem(`xmin=-7;xmax=7;ymin=-5;ymax=5;width=800;id=A2`)

@AchsenBeschriftung(`id=A2;xlabel=$x$;ylabel=$y$`)

Ziehe den Punkt $A$ auf die Koordinaten $(1|4)$.

@ErzeugePunkt(`A2;A;1;4`,`<!-- data-solution-button="2" -->`)
```




# Punkt auf Graph

@Koordinatensystem(`xmin=-7;xmax=7;ymin=-5;ymax=5;width=800;id=A4`)

@AchsenBeschriftung(`id=A4;xlabel=$x$;ylabel=$y$`)

Ziehe den Punkt auf den Graphen von $f(x)=2x-4$.

@PunktGraph(`A4;A;f;2x-4;0.05`) \

Ziehe den Punkt auf den Graphen von $g(x)=x-1$.

@PunktGraph(`A4;B;#ff0000;g;x-1;#000fff;0.05`)


```
@Koordinatensystem(`xmin=-7;xmax=7;ymin=-5;ymax=5;width=800;id=A4`)

@AchsenBeschriftung(`id=A4;xlabel=$x$;ylabel=$y$`)

Ziehe den Punkt auf den Graphen von $f(x)=2x-4$.

@PunktGraph(`A4;A;2x-4;0.05`)
```






# Punkte (plural) auf Graph

@Koordinatensystem(`xmin=-7;xmax=7;ymin=-5;ymax=5;width=800;id=A5`)

@AchsenBeschriftung(`id=A5;xlabel=$x$;ylabel=$y$`)

Generiere drei Punkte und platziere sie auf den Graphen zur Funktion $f(x)=2x-4$, sodass die Punkte mindestens einen Abstand von $2LE$ zueinander haben.

@PunkteAufGraph(`A5;n=4;d=3;A;f;2x-4;0.05`)

Generiere drei Punkte und platziere sie auf den Graphen zur Funktion $g(x)=x-1$, sodass die Punkte mindestens einen Abstand von $1LE$ zueinander haben.

@PunkteAufGraph(`A5;n=4;d=3;B;#0000ff;g;x-1;#fff000;0.05`)


```
@Koordinatensystem(`xmin=-7;xmax=7;ymin=-5;ymax=5;width=800;id=A5`)

@AchsenBeschriftung(`id=A5;xlabel=$x$;ylabel=$y$`)

@PunkteAufGraph(`A5;n=4;d=3;A;f;2x-4;0.05`)

Mit Farbeinstellungen: @PunkteAufGraph(`A5;n=4;d=3;A;#ff00ff;g;2x-4;#b41f65;0.05`)
```



