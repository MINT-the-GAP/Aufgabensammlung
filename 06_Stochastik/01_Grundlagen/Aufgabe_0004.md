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




tags: Median, sehr leicht, sehr niedrig, Angeben

comment: Bestimme den Median von gegebenen Ergebnismengen.

author: Martin Lommatzsch

-->




# Median einer Ergebnismenge




**Gib** den Median **an**.



__$a)\;\;$__ Gegeben sei die folgende Ergebnismenge: 
$\{$ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew2.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew4.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew1.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew2.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew4.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew1.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew5.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew6.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew6.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew1.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew1.png" width="30" height="30"> 
$\}$

<!-- data-solution-button="5" -->
$\tilde{x}=$ [[  2  ]]
*******************
$\{ 1;1;1;1;2;\textcolor{red}{2};4;4;5;6;6 \}$
*******************









__$b)\;\;$__ Gegeben sei die folgende Ergebnismenge: 
$\{ \{$ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew6.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb4.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew3.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb4.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew1.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb5.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew2.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb5.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew3.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb4.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew3.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb4.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew6.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb1.png" width="30" height="30"> 
$\} \}$


<!-- data-solution-button="5" -->
$\tilde{x}=$ [[  7  ]]
*******************
$\{ 6;7;7;\textcolor{red}{7};7;7;10; \}$
*******************




__$c)\;\;$__ Gegeben sei die folgende Ergebnismenge: 
$\{ \{$ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew6.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb3.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew2.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb1.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew4.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb5.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew6.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb6.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew2.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb5.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew3.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb1.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew5.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb2.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew3.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb4.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew6.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb2.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew1.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb1.png" width="30" height="30"> $ \} ; \{ $ 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/diew3.png" width="30" height="30"> ; 
<img src="https://raw.githubusercontent.com/MINT-the-GAP/Aufgabensammlung/refs/heads/main/Repetitorium/Kap7/dieb1.png" width="30" height="30"> 
$\} \}$


<!-- data-solution-button="5" -->
$\tilde{x}=$ [[  7  ]]
*******************
$\{ 2;3;4;4;7;\textcolor{red}{7};7;8;9;9;12  \}$
*******************


