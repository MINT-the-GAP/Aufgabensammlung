<!--
version:  0.0.1
language: de


@style
main > *:not(:last-child) {
  margin-bottom: 3rem;
}

input {
    text-align: center;
}

.flex-container {
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
@end

formula: \carry   \textcolor{red}{\scriptsize #1}
formula: \digit   \rlap{\carry{#1}}\phantom{#2}#2
formula: \permil  \text{‰}

import: https://raw.githubusercontent.com/LiaTemplates/Tikz-Jax/main/README.md

script: https://cdn.jsdelivr.net/gh/LiaTemplates/Tikz-Jax@main/dist/index.js

import: https://raw.githubusercontent.com/liaTemplates/algebrite/master/README.md





tags: Gleichungssysteme, Bruchrechnung, negative Zahlen, schwer, normal, Berechnen

comment: Löse Gleichungssysteme mit rationalen Zahlen.

author: Martin Lommatzsch

-->




# Gleichungssysteme lösen


**Berechne** die Lösungen des gegebenen Gleichungssystems.



<section class="flex-container">

<div class="flex-child">
<!-- data-solution-button="5"-->
__$a)\;\;$__  
$$
\begin{align*}
I.& \qquad 12x + 12y + 12z = 5 \\
II.& \qquad 24x - 12y + 36z = -23 \\
III.& \qquad -3x + 12y - 6z = 11
\end{align*}
$$
$x$ = [[  1/2  ]],  $y$ = [[  2/3  ]]  und  $z$ = [[  -3/4  ]]
@Algebrite.check([ 1/2; 2/3; -3/4 ])
************
$$
\begin{align*}
I.& \qquad 12x + 12y + 12z = 5 \\
II.& \qquad 24x - 12y + 36z = -23 \\
III.& \qquad -3x + 12y - 6z = 11 \\ \hline
IV := I + II:&\qquad 36x + 0y + 48z = -18 \quad \left| :6 \right. \\
IV: &\qquad 6x + 8z = -3 \\[6pt]
V := I - III:&\qquad 15x + 0y + 18z = -6 \quad \left| :3 \right. \\
V:&\qquad 5x + 6z = -2 \\[6pt]
IV\cdot 5:&\qquad 30x + 40z = -15 \\
V\cdot 6:&\qquad 30x + 36z = -12 \\ \hline
IV\cdot 5 - V\cdot 6 &\qquad 4z = -3 \;\Rightarrow\; z = -\dfrac{3}{4} \\[6pt]
z \cap V:&\qquad 5x + 6\left(-\dfrac{3}{4}\right) = -2 \\
&\qquad 5x - \dfrac{9}{2} = -2 \;\Rightarrow\; 5x = \dfrac{5}{2} \;\Rightarrow\; x = \dfrac{1}{2} \\[6pt]
z,x \cap I:&\qquad 12\cdot\dfrac{1}{2} + 12y + 12\cdot\left(-\dfrac{3}{4}\right) = 5 \\
&\qquad 6 + 12y - 9 = 5 \;\Rightarrow\; 12y = 8 \;\Rightarrow\; y = \dfrac{2}{3}
\end{align*}
$$
************
</div>
<div class="flex-child">
<!-- data-solution-button="5"-->
__$b)\;\;$__  
$$
\begin{align*}
I.& \qquad 14x + 6y + 6z = 7 \\
II.& \qquad 7x - 3y + 12z = 15 \\
III.& \qquad -21x + 12y - 6z = -22
\end{align*}
$$
$x$ = [[  3/7  ]],  $y$ = [[  -2/3  ]]  und  $z$ = [[  5/6  ]]
@Algebrite.check([ 3/7; -2/3; 5/6 ])
************
$$
\begin{align*}
I.& \qquad 14x + 6y + 6z = 7 \\
II.& \qquad 7x - 3y + 12z = 15 \\
III.& \qquad -21x + 12y - 6z = -22 \\ \hline
IV := I + 2\cdot II:& \qquad 28x + 0y + 30z = 37 \\
& \qquad \Rightarrow\; 28x + 30z = 37 \\[6pt]
V := 2\cdot I - III:& \qquad 49x + 0y + 18z = 36 \\
& \qquad \Rightarrow\; 49x + 18z = 36 \\[6pt]
(IV)\cdot 7:& \qquad 196x + 210z = 259 \\
(V)\cdot 4:& \qquad 196x + 72z = 144 \\ \hline
(IV)\cdot 7 - (V)\cdot 4:& \qquad 138z = 115 \;\Rightarrow\; z = \dfrac{115}{138} = \dfrac{5}{6} \\[6pt]
z \cap V:& \qquad 49x + 18\cdot \dfrac{5}{6} = 36 \;\Rightarrow\; 49x + 15 = 36 \;\Rightarrow\; x = \dfrac{21}{49} = \dfrac{3}{7} \\[6pt]
z,x \cap II:& \qquad 7\cdot \dfrac{3}{7} - 3y + 12\cdot \dfrac{5}{6} = 15 \\
& \qquad 3 - 3y + 10 = 15 \;\Rightarrow\; -3y = 2 \;\Rightarrow\; y = -\dfrac{2}{3}
\end{align*}
$$
************
</div>


<div class="flex-child">
<!-- data-solution-button="5"-->
__$c)\;\;$__  
$$
\begin{align*}
I.& \qquad 6x + 8y + 5z = 10 \\
II.& \qquad 9x - 4y + 10z = -4 \\
III.& \qquad -12x + 12y - 15z = 13
\end{align*}
$$
$x$ = [[  -1/3  ]],  $y$ = [[  5/4  ]]  und  $z$ = [[  2/5  ]]
@Algebrite.check([ -1/3; 5/4; 2/5 ])
************
$$
\begin{align*}
I.& \qquad 6x + 8y + 5z = 10 \\
II.& \qquad 9x - 4y + 10z = -4 \\
III.& \qquad -12x + 12y - 15z = 13 \\ \hline
IV := I + 2\cdot II:& \qquad 24x + 0y + 25z = 2 \\
& \qquad \Rightarrow\; 24x + 25z = 2 \\[6pt]
V := 3\cdot I - 2\cdot III:& \qquad 42x + 0y + 45z = 4 \\
& \qquad \Rightarrow\; 42x + 45z = 4 \\[6pt]
(IV)\cdot 7:& \qquad 168x + 175z = 14 \\
(V)\cdot 4:& \qquad 168x + 180z = 16 \\ \hline
(V)\cdot 4 - (IV)\cdot 7:& \qquad 5z = 2 \;\Rightarrow\; z = \dfrac{2}{5} \\[6pt]
z \cap IV:& \qquad 24x + 25\cdot \dfrac{2}{5} = 2 \;\Rightarrow\; 24x + 10 = 2 \;\Rightarrow\; 24x = -8 \;\Rightarrow\; x = -\dfrac{1}{3} \\[6pt]
z,x \cap I:& \qquad 6\cdot \left(-\dfrac{1}{3}\right) + 8y + 5\cdot \dfrac{2}{5} = 10 \\
& \qquad -2 + 8y + 2 = 10 \;\Rightarrow\; 8y = 10 \;\Rightarrow\; y = \dfrac{5}{4}
\end{align*}
$$
************
</div>


<div class="flex-child">
<!-- data-solution-button="5"-->
__$d)\;\;$__  
$$
\begin{align*}
I.& \qquad 9x + 6y + 3z = 3 \\
II.& \qquad 18x - 12y + 6z = 26 \\
III.& \qquad -9x + 12y - 15z = -22
\end{align*}
$$
$x$ = [[  7/9  ]],  $y$ = [[  -5/6  ]]  und  $z$ = [[  1/3  ]]
@Algebrite.check([ 7/9; -5/6; 1/3 ])
************
$$
\begin{align*}
I.& \qquad 9x + 6y + 3z = 3 \\
II.& \qquad 18x - 12y + 6z = 26 \\
III.& \qquad -9x + 12y - 15z = -22 \\ \hline
IV := 2\cdot I + II:& \qquad 36x + 0y + 12z = 32 \quad \left| :4 \right. \\
IV:& \qquad 9x + 3z = 8 \\[6pt]
V := 2\cdot I - III:& \qquad 27x + 0y + 21z = 28 \\
& \qquad \Rightarrow\; 27x + 21z = 28 \\[6pt]
(IV)\cdot 3:& \qquad 27x + 9z = 24 \\ \hline
V - (IV)\cdot 3:& \qquad 12z = 4 \;\Rightarrow\; z = \dfrac{1}{3} \\[6pt]
z \cap IV:& \qquad 9x + 3\cdot \dfrac{1}{3} = 8 \;\Rightarrow\; 9x + 1 = 8 \;\Rightarrow\; 9x = 7 \;\Rightarrow\; x = \dfrac{7}{9} \\[6pt]
z,x \cap I:& \qquad 9\cdot \dfrac{7}{9} + 6y + 3\cdot \dfrac{1}{3} = 3 \\
& \qquad 7 + 6y + 1 = 3 \;\Rightarrow\; 6y = -5 \;\Rightarrow\; y = -\dfrac{5}{6}
\end{align*}
$$
************
</div>



</section>







