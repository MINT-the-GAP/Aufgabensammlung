<!--
version:  0.0.1
language: de
narrator: Deutsch Female

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


tags: Erklärung, Logarithmus

comment: In diesem Abschnitt wird der Logarithmus ausführlich erklärt.

author: Martin Lommatzsch

-->

# Logarithmus


{{|>}}
********************************



Da die **Potenzen** eingeführt wurden, sollte auch eine Rechenvorschrift eingeführt werden um den **Exponenten** zu bestimmen. Diese wird **Logarithmus** genannt, welche folgende Frage in mathematischer Art und Weise stellt: "`Die **Basis** und der **Wert** des **Terms** seien bekannt, welchen **Wert** muss der **Exponent** haben?"'



$$
\begin{align*}
a^c = b  \Leftrightarrow c = \log_a (b) \\  
\end{align*}
$$


{{|>}} Gelesen wird $\log_a (b)$ als "`der **Logarithmus** von $b$ zur **Basis** $a$"'. Der **Logarithmus** bildet somit die **Umkehrfunktion** zur **Exponentialfunktion**. 

{{|>}} Da der **Logarithmus** wie auch andere **Funktionen** besonders häufig ein **triviales Argument** besitzen (**triviales Argument**: $\log_4(x)$, nicht **triviales Argument**: $\log_4(2x-3)$), werden die **Klammern** um das **Argument** in einer Konvention oftmals weggelassen: $\log_a(b)=\log_a b$, während die **Klammern** bei komplexeren **Argumenten** bestehen bleiben: $\log_a(b+c)$. Generell ist nicht zu empfehlen, die **Klammern** wegzulassen, da sie den **Funktionscharakter** betonen.



{{|>}} Wie für die **Potenzen** gelten auch für die **Logarithmen** Regeln, welche sich aus den **Potenzgesetzen** ableiten lassen.


+ {{|>}} Da der **Logarithmus** die **Umkehrfunktion** der **Exponentialfunktion** ist, gilt:


$$
\begin{align*}
 a^0 = 1 \;\; \Leftrightarrow \;\; & \log_a (1) = 0 \\
\end{align*}
$$


+ {{|>}} Da der **Logarithmus** die **Umkehrfunktion** der **Exponentialfunktion** ist, gilt:


$$
\begin{align*}
 a^1 = a \;\; \Leftrightarrow \;\; & \log_a (a) = 1 \\
\end{align*}
$$

+ {{|>}} Da der **Logarithmus** die **Umkehrfunktion** der **Exponentialfunktion** ist, heben sich diese gegenseitig auf: $k^{\log_k(x)} = \log_k(k^x) = x$.


$$
\begin{align*}
  & a^{\log_a (n)} = n \\
\end{align*}
$$


+ {{|>}} Analog zur **Multiplikation** mit gleicher **Basis** ergibt sich aus dem dazugehörigen **Potenzgesetz** das **Logarithmengesetz**:


$$
\begin{align*}
   a^n \cdot a^m &= a^{( n + m )} \\
  \log_a \left( a^n \cdot a^m \right) &=\log_a \left( a^{( n + m )} \right)  \\
  \log_a \left( a^n \cdot a^m \right) &= n + m   \\
\end{align*}
$$


{{|>}} Mit $u=a^m$ und $v=a^n$ **substituiert** ergibt sich $\log_a(u) = m$ und $\log_a(v) = n$, sodass sich der vorherige Ausdruck durch das **Einsetzen** verändert:


$$
\begin{align*}
  \log_a \left( a^n \cdot a^m \right) &=  n + m    \\
  \log_a \left( a^{\log_a(u)} \cdot a^{\log_a(v)} \right) &=  \log_a(u)  +  \log_a(v)   \\
   \log_a (u \cdot v) &= \log_a(u)  +  \log_a(v)  \\
\end{align*}
$$


+ {{|>}} Analog zum vorherig gefundenen **Logarithmusgesetz** ergibt sich bei der **Division**:


$$
\begin{align*}
  &   \log_a \left( \frac{n}{m} \right) = \log_a (n) - \log_a (m) \\
\end{align*}
$$

+ {{|>}} Die Fortsetzung der vorherigen Regeln liefert bei der **Substitution** $u = m$ und $\log_a(v) = n$:


$$
\begin{align*}
    \left(a^n\right)^m &= a^{nm} \\
  \log_a  \left(  \left(a^n\right)^m \right) &= \log_a  \left( a^{nm} \right) \\
  \log_a  \left(  \left(a^n\right)^m \right) &=  n   m   \\ 
  \log_a  \left(  \left(a^{\log_a(v)}\right)^u \right) &=  \log_a(v)   u   \\ 
   \log_a \left(v^u\right) &= u \log_a(v) \\
\end{align*}
$$


+ {{|>}} Wie auch bei der **Exponentialfunktion** kann die **Basis** gewechselt werden, indem das zuvor gefundene **Logarithmusgesetz** genutzt wird:


$$
\begin{align*}
    a^{\log_a (b)} & =  b  \\
  \log_c \left(  a^{\log_a (b)}  \right) & = \log_c (b)  \\
  \log_a (b) \cdot \log_c \left(  a  \right) & = \log_c (b) \quad \left| :\log_a (b)   \right. \\
   \log_a c &= \frac{\log_b c}{ \log_b a} \\
\end{align*}
$$




{{|>}} Zusammengefasst haben sich folgende **Logarithmengesetze** finden lassen:





$$
\begin{align*}
   \log_a (n \cdot m) &= \log_a (n) + \log_a (m) \\
    \log_a \frac{n}{m} &= \log_a (n) - \log_a (m) \\
   \log_a (n^m) &=m \cdot \log_a (n) \\
   a^{\log_a n} &= n \\
   \log_a (n) &= \frac{\log_b (n)}{ \log_b (a)} \\
   \log_a (a) &= 1 \\
   \log_a (1) &= 0 \\
\end{align*}
$$


{{|>}} Dabei werden folgende Abkürzungen für bestimme **Werte** der **Basis** verwendet: 



$$
\begin{align*}
   \log_{10} (n) &= \lg (n) \\
   \log_2 (n) &= \text{lb } (n) \\
   \log_e (n) &= \ln (n) \;\; ,\\
\end{align*}
$$

{{|>}} wobei $e=2,718281...$ die **Euler'sche Zahl** ist, welche eine **Basis** mit besonderer Bedeutung in der Mathematik und den Naturwissenschaften darstellt, deren Bedeutung im Kapitel der "**Funktionen**" im Abschnitt der "**Exponentialfunktionen**" und bei der "**Differentiation**" noch gerecht wird.





********************************
