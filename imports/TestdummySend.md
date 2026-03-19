<!--
version: 0.0.1
language: de
author: Martin Lommatzsch
comment: Minimale reine LiaScript-Mail-Demo

@style
.lia-mail-box{
  margin-top: 1.5rem;
  padding: 1rem;
  border: 1px solid rgba(127,127,127,.3);
  border-radius: 12px;
}

.lia-mail-box label{
  display: block;
  font-weight: 700;
  margin: .7rem 0 .25rem 0;
}

.lia-mail-box input[type="text"],
.lia-mail-box input[type="password"]{
  width: 100%;
  max-width: 420px;
  box-sizing: border-box;
  padding: .65rem .8rem;
  border: 1px solid rgba(127,127,127,.35);
  border-radius: 10px;
  font-size: 1rem;
}

.lia-mail-box button{
  margin-top: 1rem;
  padding: .7rem 1rem;
  border: 1px solid rgba(127,127,127,.35);
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
}

#lia-mail-status{
  margin-top: .8rem;
  font-weight: 700;
}
@end

@onload
window.__liaMiniMail = (function () {
  const MAIL_CODES = [109, 46, 108, 111, 109, 109, 97, 116, 122, 115, 99, 104, 64, 103, 115, 103, 45, 102, 114, 101, 105, 98, 101, 114, 103, 46, 108, 101, 114, 110, 115, 97, 120, 46, 100, 101];
  const PASSWORD_CODES = [76, 105, 97, 84, 101, 115, 116, 50, 54];

  function fromCodes(arr) {
    return (arr || []).map(function (n) {
      return String.fromCharCode(n);
    }).join("");
  }

  function getTaskInputs() {
    const all = Array.from(document.querySelectorAll('input[type="text"]'));
    return all.filter(function (el) {
      return el.id !== "lia-name";
    }).slice(0, 4);
  }

  function send() {
    const nameEl = document.getElementById("lia-name");
    const pwEl = document.getElementById("lia-password");
    const statusEl = document.getElementById("lia-mail-status");

    const name = nameEl ? String(nameEl.value || "").trim() : "";
    const pw = pwEl ? String(pwEl.value || "") : "";

    if (pw !== fromCodes(PASSWORD_CODES)) {
      if (statusEl) statusEl.textContent = "Passwort falsch.";
      return;
    }

    const inputs = getTaskInputs();
    const a = inputs[0] ? inputs[0].value : "";
    const b = inputs[1] ? inputs[1].value : "";
    const c = inputs[2] ? inputs[2].value : "";
    const d = inputs[3] ? inputs[3].value : "";

    const subject = "LiaScript-Abgabe - " + (name || "Ohne Name");
    const body = [
      "Name: " + (name || "-"),
      "",
      "Antworten:",
      "a) 7000+123 = " + a,
      "b) 6000+123 = " + b,
      "c) 5000+123 = " + c,
      "d) 4000+123 = " + d
    ].join("\n");

    const href =
      "mailto:" + encodeURIComponent(fromCodes(MAIL_CODES)) +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);

    if (statusEl) statusEl.textContent = "Mailprogramm wird geöffnet.";
    window.location.href = href;
  }

  return {
    send: send
  };
})();
@end
-->

# Reine LiaScript-Mail-Demo

> Diese Version ist absichtlich **nur clientseitig**.  
> Sie dient dazu, den Ablauf **Zustand sammeln → Passwort eingeben → Absenden klicken** zu testen.

$a)\;\;$ $7000+123=$ [[ 7123 ]]

$b)\;\;$ $6000+123=$ [[ 6123 ]]

$c)\;\;$ $5000+123=$ [[ 5123 ]]

$d)\;\;$ $4000+123=$ [[ 4123 ]]


<div class="lia-mail-box">
  <label for="lia-name">Name</label>
  <input id="lia-name" type="text" placeholder="Name eingeben">

  <label for="lia-password">Passwort</label>
  <input id="lia-password" type="password" placeholder="Passwort eingeben">

  <button onclick="window.__liaMiniMail.send()">Abschicken</button>

  <div id="lia-mail-status"></div>
</div>