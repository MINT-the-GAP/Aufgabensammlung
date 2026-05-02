<!--
comment: Lia Textmarker (import-sicher) — Crash-Fix (keine Observer-Feedback-Loops) + Panel immer im Viewport
author: Martin Lommatzsch



script: ./Marker.js












TextmarkerQuiz: <span class="hlq-proxy"><span class="hlq-msg"></span><button class="hlq-btn" type="button" data-hlq-act="check">Prüfen</button><button class="hlq-btn" type="button" data-hlq-act="solve">Auflösen</button><span class="hlq-lia">[[ 1 ]]</span></span>







markred:    <span class="lia-hl-target" data-hl-expected="red"    data-hl-quiz="default" data-hl-rest1="@1" data-hl-rest2="@2" data-hl-rest3="@3" data-hl-rest4="@4" data-hl-rest5="@5" data-hl-rest6="@6" data-hl-rest7="@7" data-hl-rest8="@8" data-hl-rest9="@9">@0</span>
markblue:   <span class="lia-hl-target" data-hl-expected="blue"   data-hl-quiz="default" data-hl-rest1="@1" data-hl-rest2="@2" data-hl-rest3="@3" data-hl-rest4="@4" data-hl-rest5="@5" data-hl-rest6="@6" data-hl-rest7="@7" data-hl-rest8="@8" data-hl-rest9="@9">@0</span>
markgreen:  <span class="lia-hl-target" data-hl-expected="green"  data-hl-quiz="default" data-hl-rest1="@1" data-hl-rest2="@2" data-hl-rest3="@3" data-hl-rest4="@4" data-hl-rest5="@5" data-hl-rest6="@6" data-hl-rest7="@7" data-hl-rest8="@8" data-hl-rest9="@9">@0</span>
markyellow: <span class="lia-hl-target" data-hl-expected="yellow" data-hl-quiz="default" data-hl-rest1="@1" data-hl-rest2="@2" data-hl-rest3="@3" data-hl-rest4="@4" data-hl-rest5="@5" data-hl-rest6="@6" data-hl-rest7="@7" data-hl-rest8="@8" data-hl-rest9="@9">@0</span>
markpink:   <span class="lia-hl-target" data-hl-expected="pink"   data-hl-quiz="default" data-hl-rest1="@1" data-hl-rest2="@2" data-hl-rest3="@3" data-hl-rest4="@4" data-hl-rest5="@5" data-hl-rest6="@6" data-hl-rest7="@7" data-hl-rest8="@8" data-hl-rest9="@9">@0</span>
markorange: <span class="lia-hl-target" data-hl-expected="orange" data-hl-quiz="default" data-hl-rest1="@1" data-hl-rest2="@2" data-hl-rest3="@3" data-hl-rest4="@4" data-hl-rest5="@5" data-hl-rest6="@6" data-hl-rest7="@7" data-hl-rest8="@8" data-hl-rest9="@9">@0</span>

mark: <span class="lia-hl-target" data-hl-expected="any" data-hl-quiz="default" data-hl-rest1="@1" data-hl-rest2="@2" data-hl-rest3="@3" data-hl-rest4="@4" data-hl-rest5="@5" data-hl-rest6="@6" data-hl-rest7="@7" data-hl-rest8="@8" data-hl-rest9="@9">@0</span>



markedred:    <span class="lia-hl-prefill" data-hl-prefill="red" data-hl-rest1="@1" data-hl-rest2="@2" data-hl-rest3="@3" data-hl-rest4="@4" data-hl-rest5="@5" data-hl-rest6="@6" data-hl-rest7="@7" data-hl-rest8="@8" data-hl-rest9="@9">@0</span>
markedblue:   <span class="lia-hl-prefill" data-hl-prefill="blue" data-hl-rest1="@1" data-hl-rest2="@2" data-hl-rest3="@3" data-hl-rest4="@4" data-hl-rest5="@5" data-hl-rest6="@6" data-hl-rest7="@7" data-hl-rest8="@8" data-hl-rest9="@9">@0</span>
markedgreen:  <span class="lia-hl-prefill" data-hl-prefill="green" data-hl-rest1="@1" data-hl-rest2="@2" data-hl-rest3="@3" data-hl-rest4="@4" data-hl-rest5="@5" data-hl-rest6="@6" data-hl-rest7="@7" data-hl-rest8="@8" data-hl-rest9="@9">@0</span>
markedyellow: <span class="lia-hl-prefill" data-hl-prefill="yellow" data-hl-rest1="@1" data-hl-rest2="@2" data-hl-rest3="@3" data-hl-rest4="@4" data-hl-rest5="@5" data-hl-rest6="@6" data-hl-rest7="@7" data-hl-rest8="@8" data-hl-rest9="@9">@0</span>
markedpink:   <span class="lia-hl-prefill" data-hl-prefill="pink" data-hl-rest1="@1" data-hl-rest2="@2" data-hl-rest3="@3" data-hl-rest4="@4" data-hl-rest5="@5" data-hl-rest6="@6" data-hl-rest7="@7" data-hl-rest8="@8" data-hl-rest9="@9">@0</span>
markedorange: <span class="lia-hl-prefill" data-hl-prefill="orange" data-hl-rest1="@1" data-hl-rest2="@2" data-hl-rest3="@3" data-hl-rest4="@4" data-hl-rest5="@5" data-hl-rest6="@6" data-hl-rest7="@7" data-hl-rest8="@8" data-hl-rest9="@9">@0</span>




-->



# Folie 1

Markiere die korrekt.

<div class="markerquiz">
@markred(rot) und @markblue(blau bis blau)  
@TextmarkerQuiz
</div>


# Folie 2

<div class="markerquiz">
@mark(dieser Teil ist zu markieren, wobei die Farbe egal ist)
@TextmarkerQuiz
</div>



Aufgabe 1:
<div class="markerquiz">
@markred(Katze) @markred(Schritt).
@TextmarkerQuiz
</div>





`@markedred(red)`  @markedred(red)

`@markedblue(blue)`  @markedblue(blue)

`@markedyellow(yellow)`  @markedyellow(yellow)

`@markedpink(pink)`  @markedpink(pink)

`@markedgreen(green)`  @markedgreen(green)

`@markedorange(orange)`  @markedorange(orange)


