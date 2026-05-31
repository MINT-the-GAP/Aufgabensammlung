const fs = require('fs')

const FILES = ['patch.js', 'index.html']

// Feature -> { regex, esYear, description }
const FEATURES = [
  ['arrow functions',        /=>/g,                                            2015],
  ['let/const',              /\b(let|const)\s+[A-Za-z_$]/g,                    2015],
  ['template literals',      /`[^`]*`/g,                                       2015],
  ['classes',                /\bclass\s+[A-Za-z_$]/g,                          2015],
  ['for…of',                 /\bfor\s*\(\s*(?:const|let|var)\s+[\w$]+\s+of\b/g, 2015],
  ['default params',         /function[^()]*\([^)]*=\s*[^)]+\)/g,              2015],
  ['rest/spread',            /\.\.\.[A-Za-z_$]/g,                              2015],
  ['destructuring',          /(?:const|let|var)\s*(?:\{[^}]+\}|\[[^\]]+\])\s*=/g, 2015],
  ['Promise',                /\bPromise\b/g,                                   2015],
  ['Map/Set',                /\bnew\s+(?:Map|Set|WeakMap|WeakSet)\b/g,         2015],
  ['Symbol',                 /\bSymbol\(/g,                                    2015],
  ['Object.assign',          /\bObject\.assign\b/g,                            2015],
  ['exponent **',            /[A-Za-z_$0-9\)\]]\s*\*\*\s*[A-Za-z_$0-9\(]/g,    2016],
  ['Array.includes',         /\.includes\s*\(/g,                               2016],
  ['async/await',            /\b(?:async|await)\b/g,                           2017],
  ['Object.entries/values',  /\bObject\.(?:entries|values)\b/g,                2017],
  ['String.padStart/End',    /\.pad(?:Start|End)\s*\(/g,                       2017],
  ['rest/spread props',      /\{[^{}]*\.\.\.[A-Za-z_$][^{}]*\}/g,              2018],
  ['for await…of',           /\bfor\s+await\s*\(/g,                            2018],
  ['s flag regex',           /\/[^\/\n]+\/[gimsuy]*s[gimuy]*/g,                2018],
  ['Array.flat/flatMap',     /\.flat(?:Map)?\s*\(/g,                           2019],
  ['Object.fromEntries',     /\bObject\.fromEntries\b/g,                       2019],
  ['String.trimStart/End',   /\.trim(?:Start|End)\s*\(/g,                      2019],
  ['optional catch binding', /\}\s*catch\s*\{/g,                               2019],
  ['optional chaining ?.',   /\?\.(?!\d)/g,                                    2020],
  ['nullish ??',             /\?\?(?!=)/g,                                     2020],
  ['BigInt literal',         /\b\d+n\b/g,                                      2020],
  ['globalThis',             /\bglobalThis\b/g,                                2020],
  ['Promise.allSettled',     /\bPromise\.allSettled\b/g,                       2020],
  ['logical assign ||=,&&=,??=', /(?:\|\|=|&&=|\?\?=)/g,                       2021],
  ['numeric separator',      /\b\d+(?:_\d+)+(?:\.\d+(?:_\d+)*)?\b/g,           2021],
  ['Promise.any',            /\bPromise\.any\b/g,                              2021],
  ['String.replaceAll',      /\.replaceAll\s*\(/g,                             2021],
  ['private class field #',  /\bthis\.#[A-Za-z_]/g,                            2022],
  ['class fields',           /^\s*(?:#?[A-Za-z_$][\w$]*)\s*=\s*[^=]/gm,        2022], // noisy
  ['top-level await',        /^\s*await\s+/gm,                                 2022],
  ['Array.at',               /\.at\s*\(\s*-?\d/g,                              2022],
  ['Object.hasOwn',          /\bObject\.hasOwn\b/g,                            2022],
  ['Array.findLast',         /\.findLast(?:Index)?\s*\(/g,                     2023],
  ['Array.toSorted/Reversed',/\.to(?:Sorted|Reversed|Spliced)\s*\(/g,          2023],
]

for (const file of FILES) {
  const src = fs.readFileSync(file, 'utf8')
  console.log('=== ' + file + ' (' + src.length + ' bytes) ===')
  let maxYear = 0
  for (const [name, re, year] of FEATURES) {
    const m = src.match(re)
    if (m && m.length) {
      console.log(
        String(year).padEnd(6) +
          name.padEnd(28) +
          ' count=' +
          m.length
      )
      if (year > maxYear) maxYear = year
    }
  }
  console.log('highest ES year detected: ' + maxYear)
  console.log('')
}
