# Gemeinsamer SchulLia-Kursgenerator

Die Aufgabensammlung veröffentlicht Katalog, Auswahl und Kursaufbau als
versionierte, buildfreie Browser-Schnittstelle. Die Website und externe
Verbraucher wie MathPath verwenden dadurch dieselbe Auswahlpolitik.

## Öffentliche Assets

Basis: `https://mint-the-gap.github.io/Aufgabensammlung/`

- `assets/course-source.js`: `window.SchulLiaCourseSource`
- `assets/course-generator.js`: `window.SchulLiaCourseGenerator`
- `assets/course-catalog.js`: `window.SchulLiaCourseCatalog`
- `assets/course-catalog.json`: derselbe Katalog als JSON
- `assets/vendor/fflate-0.8.2.min.js`: lokal vendorter, deterministischer gzip-Codec
- `course.html`: direkter, aus einem Hash-Manifest erzeugter LiaScript-Kurs

Die Pages-Assets werden mit JavaScript-/JSON-MIME-Typ und
`Access-Control-Allow-Origin: *` ausgeliefert. Für klassische Scripts soll
die Pages-URL verwendet werden. Die Raw-GitHub-URL liefert JavaScript als
`text/plain` mit `nosniff` und ist dafür ungeeignet.

Empfohlene Ladereihenfolge:

1. `course-source.js`
2. `course-generator.js`
3. `course-catalog.js`

Die Generator-Runtime trägt
`schema: 'schullia-course-generator'`, `version: 1` und das gemeinsame
Runtime-Release `release: '1.0.3'`. Der Katalog trägt
`schema: 'schullia-course-catalog'` und `version: 1`.

Alle eigenen, von `index.html` und `course.html` geladenen Runtime-Scripts tragen
denselben Cache-Parameter `?v=1.0.3`; der gepinnte Codec trägt
`?v=0.8.2`. Auch
`buildDirectCourseUrl(...)` versieht `course.html` damit; das Kursmanifest
bleibt ausschließlich im Hash.

## Auswahl und Build

Ein minimaler Request für vier Aufgaben zu genau einem Thema lautet:

```js
const request = {
  themes: ['Bruchrechnung'],
  blockedThemes: [],
  count: 4,
  group: 'einsteiger',
  strictCount: true,
  seed: 'optional-reproduzierbar'
}

const result = await SchulLiaCourseGenerator.generate(
  SchulLiaCourseCatalog,
  request,
  {
    fetch,
    assembler: SchulLiaCourseSource,
    sourceOptions: { edit: false }
  }
)
```

`result` enthält `tasks`, `documents` und `source`. Themen werden nach
kanonischer Normalisierung exakt gefiltert; es gibt keinen unsichtbaren
Themen-Fallback. Bei `strictCount: true` führt ein Bestand unter vier zu
`CourseGeneratorError` mit `code: 'INSUFFICIENT_TASKS'`.

## Lernpfad-Direktkurs

```js
const manifest = {
  v: 1,
  kind: 'lernpfad',
  offer: 'weitere-uebungen',
  topic: 'Bruchrechnung',
  level: 'fortgeschrittene',
  urls: result.tasks.map(task => task.url)
}

const url = SchulLiaCourseGenerator.buildDirectCourseUrl(
  'https://mint-the-gap.github.io/Aufgabensammlung/index.html',
  manifest
)
```

Zulässige Angebote sind `schwaechen-ueben`, `weitere-uebungen` und
`vertiefungen`; zulässige Niveaus sind `einsteiger`,
`fortgeschrittene` und `experten`. Ein Lernpfad-Manifest muss genau vier
verschiedene Aufgaben-URLs enthalten.

`course.html` lädt die gemeinsamen Runtime-Scripts, entfernt Freeze-Importe,
erzwingt den MathPath-Import, setzt den Lernpfad ausdrücklich auf
`mode: Presentation`, ergänzt `lernpfad-level` und hängt eine Abschlussfolie
mit `@Lernpfad` an. Danach wird der Quelltext mit dem lokal ausgelieferten
`fflate` 0.8.2 und dem vollständig festgelegten Optionssatz
`{ level: 6, mem: 8, mtime: 0 }` gzip-komprimiert und
als LiaScript-Data-URI direkt im offiziellen
`https://liascript.github.io/course/?...`-Viewer geöffnet. Die Data-URI wird
nicht als Ganzes URL-kodiert. Überschreitet die fertige Viewer-URL 6.000
Zeichen oder fehlt der lokale Codec, bleibt der vorhandene
gleichursprüngliche `parent:`-Player als Kompatibilitätsfallback erhalten.
Auswahl und Kursquellen werden an keinen zusätzlichen Server übertragen. Der
gefixte Codec erzeugt für denselben UTF-8-Quelltext in Chromium, Firefox und
WebKit dieselben gzip-Bytes und damit dieselbe Viewer-URL.

`fflate` ist unter der MIT-Lizenz von Arjun Barrett veröffentlicht. Die
offizielle UMD-Distribution und der vollständige Lizenztext werden als
`assets/vendor/fflate-0.8.2.min.js` beziehungsweise
`assets/vendor/fflate-LICENSE.txt` mit ausgeliefert.

## Runtime-Veröffentlichung

Der Pages-Workflow veröffentlicht `course.html`, `course-frame.html`, die
benötigten `assets/course-*`-Dateien und den gepinnten Codec samt Lizenz direkt
nach den Kernprüfungen. Dieser
kleine Publish verwendet `keep_files: true`, damit die bestehende Website
erhalten bleibt, und läuft vor dem langsameren Liaex-Export. Dadurch wird das
Zeitfenster zwischen Quelländerung und verfügbarer Runtime deutlich verkürzt.
Anschließend ersetzt der vollständige Deploy die Website samt frisch erzeugter
`index.html`. Eine Workflow-Concurrency-Gruppe bricht überholte Läufe ab.

## Katalog aktualisieren

```sh
node scripts/build-course-catalog.cjs
node scripts/build-course-catalog.cjs --check
```

Der Builder liest `project.yml` und die LiaScript-Dokumentköpfe, erzeugt die
beiden Katalog-Assets deterministisch und wird im Deployment-Workflow geprüft.
