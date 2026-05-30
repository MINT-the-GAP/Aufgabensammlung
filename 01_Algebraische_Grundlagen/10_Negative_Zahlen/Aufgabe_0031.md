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








tags: Negative Zahlen, Koordinatensystem, Stelle, Punkt, sehr leicht, sehr niedrig, Angeben

comment: Stellen und Punkte aus dem Koordinatensystem auslesen.

author: Martin Lommatzsch

-->




# Punkte im Koordinatensystem


**Gib** die Stelle der angegebenen Punkte **an**.



<center>


<!-- style="width:1000px" -->
![](https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap2/GanzeZ31.png)

</center>

<section class="dynFlex">
<div class="flex-child">
$A($[[  -4 ]]$|$[[  2  ]]$)$ \

</div>
<div class="flex-child">

$B($[[  -5 ]]$|$[[  -3  ]]$)$ \

</div>
<div class="flex-child">

[[  E  ]]$( 3 | -1 )$ \

</div>
</section>










