<!--
version:  0.0.1
language: de
narrator: Deutsch Female
mode: Presentation
edit: true

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-DynFlex/refs/heads/main/README.md






import: https://cdn.jsdelivr.net/gh/LiaTemplates/algebrite@master/README.md




@round
<script>
  let value = `@input`;
  if (value.startsWith("@")) {
    ""
  } else {
    value = JSON.parse(value);
    value = value[0]
    value = value.replace(/,/g, ".");
    value = parseFloat(value);
    value = Math.round(value * Math.pow(10,@1)) / Math.pow(10,@1);
    value == @0
  }
</script>
@end

tags: kgV, ggT, Vorrangsregeln, schwer, normal, Angeben

comment: Rechne mit kleinsten gemeinsamen Vielfachen und größten gemeinsamen Teilern.

author: Martin Lommatzsch

-->




# Rechnen mit Vielfachen und Teilern


**Gib** den Wert des Terms **an**.



$a)\;\; \text{kgV}\left(\text{kgV}(6;7);\text{kgV}(3;5)\right)-\text{kgV}(18;16) =$ [[  66 ]]



$b)\;\; \text{kgV}(17;19) - \text{ggT}\left(128;\text{ggT}(1024;256)\right) =$ [[ 215 ]]



$c)\;\; \left(\text{kgV}(24;11) + \text{ggT}(83;91)\right) : \text{ggT}(105;215) =$ [[ 53 ]]

