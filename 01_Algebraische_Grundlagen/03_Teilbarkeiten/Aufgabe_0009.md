<!--
version:  0.0.1
language: de
narrator: Deutsch Female
mode: Presentation
edit: true

import: https://raw.githubusercontent.com/MINT-the-GAP/lia-DynFlex/refs/heads/main/README.md










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

tags: ggT, mittel, sehr niedrig, Angeben

comment: Gib den größten gemeinsamen Teiler an.

author: Martin Lommatzsch

-->




# größter gemeinsamer Teiler


**Gib** den Wert des Terms **an**.




<section class="dynFlex">

<div class="flex-child">

$a)\;\; \text{ggT}(35;105;115) =$ [[  5  ]]

</div>

<div class="flex-child">

$b)\;\; \text{ggT}(20;64;96) =$ [[  4  ]]

</div>

<div class="flex-child">

$c)\;\; \text{ggT}(36;83;144) =$ [[  1  ]]

</div>

<div class="flex-child">

$d)\;\; \text{ggT}(48;144;176) =$ [[  16 ]]

</div> 

</section>