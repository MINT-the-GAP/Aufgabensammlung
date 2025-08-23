<!--
version:  0.0.1

language: de

@style
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

import: https://raw.githubusercontent.com/LiaTemplates/GGBScript/refs/heads/main/README.md



tags: Bruchrechnung, Sachaufgabe, sehr schwer, normal, Berechnen

comment: Löse eine Sachaufgabe mit Schutzmatten mittels der Bruchrechnung.

author: Martin Lommatzsch

-->




# Textaufgabe Bruchrechnung - Schutzmatten


Für eine Veranstaltung wird eine rechteckige Halle vorbereitet.  
Die Länge beträgt $ 25\,\text{m} $, die Breite ist $ \dfrac{4}{5} $ der Länge. Zunächst wird eine Sicherheitszone von $ \dfrac{3}{10} $ der Gesamtfläche abgesperrt (nicht begehbar).  
Von der anschließend verbleibenden Fläche werden Schutzmatten auf $ \dfrac{2}{3} $ ausgelegt (ebenfalls nicht begehbar).  
Zum Schluss blockiert eine Bühne $ \dfrac{1}{5} $ der Gesamtfläche.  
**Berechne** die am Ende frei begehbare Fläche.  \

<!-- data-solution-button="5"-->
[[  50/3  ]] m$^2$
@Algebrite.check(50/3)
************
$$
\begin{align*}
\text{Breite:}&\quad \dfrac{4}{5}\cdot 25\,\text{m} = 20\,\text{m} \\[4pt]
\text{Gesamtfläche:}&\quad 25\,\text{m}\cdot 20\,\text{m} = 500\,\text{m}^2 \\[6pt]
\text{Sicherheitszone:}&\quad \dfrac{3}{10}\cdot 500\,\text{m}^2 = 150\,\text{m}^2 \\[4pt]
\text{Rest 1:}&\quad 500\,\text{m}^2 - 150\,\text{m}^2 = 350\,\text{m}^2 \\[6pt]
\text{Matten (vom Rest 1):}&\quad \dfrac{2}{3}\cdot 350\,\text{m}^2
= \dfrac{700}{3}\,\text{m}^2 \\[6pt]
\text{Rest 2:}&\quad 350\,\text{m}^2 - \dfrac{700}{3}\,\text{m}^2
= \dfrac{1050}{3}\,\text{m}^2 - \dfrac{700}{3}\,\text{m}^2
= \dfrac{350}{3}\,\text{m}^2 \\[6pt]
\text{Bühne (von Gesamt):}&\quad \dfrac{1}{5}\cdot 500\,\text{m}^2 = 100\,\text{m}^2 = \dfrac{300}{3}\,\text{m}^2 \\[6pt]
\text{Frei begehbar:}&\quad \dfrac{350}{3}\,\text{m}^2 - \dfrac{300}{3}\,\text{m}^2
= \dfrac{50}{3}\,\text{m}^2
\end{align*}
$$
************