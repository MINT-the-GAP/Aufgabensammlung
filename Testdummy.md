<!--
import: https://raw.githubusercontent.com/LiaTemplates/GGBScript/refs/heads/main/README.md
-->

# Math

A = (<script input="range" min="0" max="100" value="50" step="1" default="50" output="A0">
@input
</script>,
<script input="range" min="-100" max="100" value="50" step="1" default="50" output="A1">
@input
</script>
)

B = (<script input="range" min="0" max="100" value="96" step="1" default="96" output="B0">
@input
</script>,
<script input="range" min="-100" max="100" value="27" step="1" default="27" output="B1">
@input
</script>
)


C = (<script input="range" min="0" max="100" value="20" step="1" default="20" output="C0">
@input
</script>,
<script input="range" min="-100" max="100" value="20" step="1" default="20" output="C1">
@input
</script>
)

Rotation: 
<script input="range" min="0" max="360" value="0" step="1" default="0" output="rotation">
@input
</script>°


``` js @GGBScript
UserAxisLimits(0,150,0,60);

const A = Punkt(@input(`A0`), @input(`A1`), "A");
const B = Punkt(@input(`B0`), @input(`B1`), "B");
const C = Punkt(@input(`C0`), @input(`C1`), "C");

const P = Polygon("A", "B", "C");

Farbe(P, "red");

const M = Mittelpunkt(P);

const P2 = Rotation(P, M, @input(`rotation`), "P2");

Farbe("P2", "green");

Kreis(M, 16, "Kreis");
```