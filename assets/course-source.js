/* Shared, buildless LiaScript course assembly for the generator and player. */
(function (root, factory) {
  const api = factory()
  if (typeof module === 'object' && module.exports) module.exports = api
  if (root) root.SchulLiaCourseSource = api
})(typeof window === 'object' ? window : typeof globalThis === 'object' ? globalThis : this, function () {
  'use strict'

  const RESOURCE_KEYS = new Set(['import', 'script', 'link'])
  const MULTIPLE_KEYS = new Set(['attribute', 'translation'])
  const COURSE_MODES = new Set(['Presentation', 'Slides', 'Textbook'])

  function normalize(value) {
    return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/ß/g, 'ss').trim().toLowerCase()
  }

  function canonicalTag(value) {
    const tag = String(value || '').trim()
    const key = normalize(tag)
    if (key === 'bruch' || key === 'bruche' || key === 'brueche' || key === 'bruchrechnung') return 'Bruchrechnung'
    if (key === 'dreieck' || key === 'dreiecke') return 'Dreiecke'
    return tag
  }

  function resolveResource(value, base) {
    const url = String(value || '').trim()
    if (!url || !base || /^(?:[a-z][a-z\d+.-]*:|\/\/|#|@)/i.test(url) || /\$\{|[\r\n]/.test(url)) return url
    try { return new URL(url, base).href } catch (_) { return url }
  }

  function rebaseCss(text, base) {
    return text.replace(/\burl\(\s*(['"]?)([^)'"\s]+)\1\s*\)/gi, function (match, quote, url) {
      return 'url(' + quote + resolveResource(url, base) + quote + ')'
    })
  }

  function rebaseHtml(text, base) {
    return text.replace(/<[a-z][^>]*>/gi, function (tag) {
      return tag.replace(/(\s(?:src|href|poster|data)\s*=\s*)(?:(['"])(.*?)\2|([^\s>]+))/gi,
        function (match, prefix, quote, quoted, unquoted) {
          const value = quote ? quoted : unquoted
          const resolved = resolveResource(value, base)
          return prefix + (quote ? quote + resolved + quote : '"' + resolved.replace(/"/g, '%22') + '"')
        }).replace(/(\sstyle\s*=\s*)(['"])(.*?)\2/gi, function (match, prefix, quote, css) {
          return prefix + quote + rebaseCss(css, base) + quote
        })
    })
  }

  // Scan destinations instead of a single regex so paths containing balanced
  // parentheses and optional Markdown titles remain intact.
  function rebaseLinks(text, base) {
    let result = ''
    let cursor = 0
    while (cursor < text.length) {
      const marker = text.indexOf('](', cursor)
      if (marker < 0) return result + text.slice(cursor)
      let start = marker + 2
      while (/\s/.test(text.charAt(start)) && start < text.length) start++
      const angled = text.charAt(start) === '<'
      if (angled) start++
      let end = start
      let depth = 0
      while (end < text.length) {
        const character = text.charAt(end)
        if (character === '\\') { end += 2; continue }
        if (angled && character === '>') break
        if (!angled) {
          if (character === '(') depth++
          if (character === ')') { if (!depth) break; depth-- }
          if (/\s/.test(character) && !depth) break
        }
        end++
      }
      result += text.slice(cursor, start) + resolveResource(text.slice(start, end), base)
      cursor = end
    }
    return result
  }

  function rebaseMarkdown(text, base) {
    if (!base) return text
    const protectedScripts = []
    const source = String(text).replace(/<script\b[^>]*>[\s\S]*?<\/script\s*>/gi, function (script) {
      protectedScripts.push({
        original: script,
        rebased: script.replace(/^<script\b[^>]*>/i, function (tag) { return rebaseHtml(tag, base) }),
        active: false
      })
      return '\u0000SCHULLIA_SCRIPT_' + (protectedScripts.length - 1) + '\u0000'
    })
    let fence = null
    const rebased = source.split('\n').map(function (line) {
      const marker = line.match(/^ {0,3}(`{3,}|~{3,})/)
      if (marker) {
        if (!fence) fence = { character: marker[1].charAt(0), length: marker[1].length }
        else if (marker[1].charAt(0) === fence.character && marker[1].length >= fence.length && /^ {0,3}(?:`+|~+)\s*$/.test(line)) fence = null
        return line
      }
      if (fence) return line
      const code = []
      let output = line.replace(/(`+)(.*?)\1/g, function (match) {
        code.push(match)
        return '\u0000SCHULLIA_CODE_' + (code.length - 1) + '\u0000'
      })
      output = output.replace(/\u0000SCHULLIA_SCRIPT_(\d+)\u0000/g, function (placeholder, index) {
        protectedScripts[Number(index)].active = true
        return placeholder
      })
      output = rebaseLinks(rebaseHtml(output, base), base)
      output = output.replace(/^( {0,3}\[[^\]]+\]:[ \t]*)(?:<([^>]+)>|(\S+))/, function (match, prefix, angle, plain) {
        return prefix + (angle !== undefined ? '<' + resolveResource(angle, base) + '>' : resolveResource(plain, base))
      })
      return output.replace(/\u0000SCHULLIA_CODE_(\d+)\u0000/g, function (_, index) { return code[Number(index)] })
    }).join('\n')
    return rebased.replace(/\u0000SCHULLIA_SCRIPT_(\d+)\u0000/g, function (_, index) {
      const script = protectedScripts[Number(index)]
      return script.active ? script.rebased : script.original
    })
  }

  function blockStart(line) {
    const match = line.match(/^\s*(@{1,3}[a-z_][\w.-]*)\s*$/i)
    return match && !/^@+end$/i.test(match[1]) ? match[1] : null
  }

  function split(markdown) {
    const source = String(markdown || '').replace(/^\uFEFF/, '').replace(/\r\n?/g, '\n')
    const opening = source.match(/^\s*<!--/)
    if (!opening) return { header: '', body: source.trim() }
    const rest = source.slice(opening[0].length)
    const lines = rest.split('\n')
    let block = false
    let position = opening[0].length
    for (let index = 0; index < lines.length; index++) {
      const line = lines[index]
      if (block && /^\s*@end\s*$/.test(line)) block = false
      else if (!block && blockStart(line)) block = true
      const close = block ? -1 : line.indexOf('-->')
      if (close >= 0) {
        return { header: source.slice(opening[0].length, position + close).replace(/^\n|\n$/g, ''), body: source.slice(position + close + 3).trim() }
      }
      position += line.length + 1
    }
    throw new Error('Der LiaScript-Dokumentkopf ist nicht vollständig geschlossen.')
  }

  function headerEntries(header) {
    const lines = header.split('\n')
    const entries = []
    for (let index = 0; index < lines.length; index++) {
      const line = lines[index]
      if (!line.trim()) continue
      const macro = blockStart(line)
      if (macro) {
        const block = [line]
        let closed = false
        while (++index < lines.length) {
          block.push(lines[index])
          if (/^\s*@end\s*$/.test(lines[index])) { closed = true; break }
        }
        if (!closed) throw new Error('Der Makroblock ' + macro + ' ist nicht vollständig geschlossen.')
        entries.push({ type: 'macro', key: macro, text: block.join('\n') })
        continue
      }
      const meta = line.match(/^\s*([a-z][a-z\d_-]*)\s*:\s*(.*)$/i)
      const inlineMacro = line.match(/^\s*(@{1,3}[a-z_][\w.-]*)\s*:/i)
      const parts = [line]
      while (index + 1 < lines.length && /^[ \t]+\S/.test(lines[index + 1])) parts.push(lines[++index])
      if (meta) entries.push({ type: 'metadata', key: meta[1].toLowerCase(), value: [meta[2]].concat(parts.slice(1).map(function (part) { return part.trim() })).join('\n'), text: parts.join('\n') })
      else entries.push({ type: inlineMacro ? 'macro' : 'raw', key: inlineMacro ? inlineMacro[1] : '', text: parts.join('\n') })
    }
    return entries
  }

  function coordinateTemplate(url) {
    let parsed
    try { parsed = new URL(url) } catch (_) { return null }
    if (parsed.hostname !== 'raw.githubusercontent.com' || parsed.search || parsed.hash) return null
    const match = parsed.pathname.match(/^\/MINT-the-GAP\/lia-coordinate\/(.+)\/README(\.static)?\.md$/i)
    return match ? { ref: match[1].replace(/^refs\/heads\//, ''), static: !!match[2] } : null
  }

  function reconcileCoordinateImports(imports) {
    if (!imports) return
    const fullRefs = new Set()
    imports.forEach(function (url) {
      const template = coordinateTemplate(url)
      if (template && !template.static) fullRefs.add(template.ref)
    })
    if (!fullRefs.size) return
    imports.forEach(function (url) {
      const template = coordinateTemplate(url)
      if (!template || !template.static) return
      // The normal coordinate template supports static=1 as well. Its docs
      // forbid combining it with the lightweight template's competing aliases.
      if (fullRefs.has(template.ref)) imports.delete(url)
      else throw new Error('Die Aufgaben benötigen unterschiedliche Versionen der statischen und interaktiven Koordinatenvorlage. Bitte wähle eine andere Kombination.')
    })
  }

  function build(documents, options) {
    if (!Array.isArray(documents) || !documents.length) throw new Error('Es wurden keine Aufgaben ausgewählt.')
    const settings = options || {}
    const requestedMode = settings.mode === undefined ? undefined : String(settings.mode).trim()
    if (requestedMode !== undefined && !COURSE_MODES.has(requestedMode)) {
      throw new Error('Der angeforderte LiaScript-Modus ist ungültig.')
    }
    const chunks = []
    const records = []
    const resources = new Map()
    const macros = new Map()
    const metadata = new Set()
    const multiple = new Set()
    const rawSeen = new Set()
    const tags = new Map()
    const authors = new Map()
    const comments = new Set()

    function resourceValues(key) {
      if (!resources.has(key)) {
        const values = new Set()
        resources.set(key, values)
        records.push({ type: 'resources', key: key, values: values })
      }
      return resources.get(key)
    }

    documents.forEach(function (document) {
      const parsed = split(document && document.content)
      const base = document && document.url
      if (parsed.body) chunks.push(rebaseMarkdown(parsed.body, base))
      headerEntries(parsed.header).forEach(function (entry) {
        if (entry.type === 'metadata') {
          if (RESOURCE_KEYS.has(entry.key)) {
            entry.value.split(/\s+/).filter(Boolean).forEach(function (url) {
              const resolved = resolveResource(url, base)
              if (!settings.resourceFilter || settings.resourceFilter(entry.key, resolved) !== false) {
                resourceValues(entry.key).add(resolved)
              }
            })
          } else if (entry.key === 'tags') {
            entry.value.split(/[,;]|\s+-\s+/).forEach(function (value) {
              const tag = canonicalTag(value)
              if (tag && !tags.has(normalize(tag))) tags.set(normalize(tag), tag)
            })
          } else if (entry.key === 'author') {
            entry.value.split(/;/).forEach(function (value) {
              const author = value.trim()
              if (author && !authors.has(normalize(author))) authors.set(normalize(author), author)
            })
          } else if (entry.key === 'comment') {
            if (entry.value.trim()) comments.add(entry.value.trim().replace(/\s*\n\s*/g, ' '))
          } else if (MULTIPLE_KEYS.has(entry.key)) {
            const text = rebaseMarkdown(entry.text, base)
            if (!multiple.has(text)) { multiple.add(text); records.push({ type: 'text', text: text }) }
          } else if (!metadata.has(entry.key)) {
            metadata.add(entry.key)
            let text = entry.text
            if (entry.key === 'logo' || entry.key === 'icon') text = entry.key + ': ' + resolveResource(entry.value, base)
            if (entry.key === 'edit' && settings.edit !== undefined) text = 'edit: ' + (settings.edit ? 'true' : 'false')
            if (entry.key === 'mode' && requestedMode !== undefined) text = 'mode: ' + requestedMode
            records.push({ type: 'text', text: text })
          }
          return
        }
        if (entry.type === 'macro') {
          const text = entry.key === '@style' ? rebaseCss(entry.text, base) : rebaseMarkdown(entry.text, base)
          const key = entry.key
          if (!macros.has(key)) {
            const record = { type: 'text', text: text, variants: new Set([text]) }
            macros.set(key, record)
            records.push(record)
          } else {
            const prior = macros.get(key)
            if (prior.variants.has(text)) return
            if (key === '@style' && /\n\s*@end\s*$/.test(prior.text) && /\n\s*@end\s*$/.test(text)) {
              prior.variants.add(text)
              prior.text = prior.text.replace(/\n\s*@end\s*$/, '') + '\n\n' + text.replace(/^\s*@style\s*\n/, '')
            } else {
              throw new Error('Die Aufgaben verwenden unterschiedliche Definitionen für ' + entry.key + '. Bitte wähle eine andere Kombination.')
            }
          }
          return
        }
        if (!rawSeen.has(entry.text)) { rawSeen.add(entry.text); records.push({ type: 'text', text: entry.text }) }
      })
    })

    if (!chunks.length) throw new Error('Die geladenen Aufgaben waren leer.')
    ;(Array.isArray(settings.imports) ? settings.imports : []).forEach(function (url) {
      const resolved = String(url || '').trim()
      if (resolved && (!settings.resourceFilter || settings.resourceFilter('import', resolved) !== false)) {
        resourceValues('import').add(resolved)
      }
    })
    reconcileCoordinateImports(resources.get('import'))
    const header = records.map(function (record) {
      return record.type === 'resources' ? Array.from(record.values).map(function (url) { return record.key + ': ' + url }).join('\n') : record.text
    }).filter(Boolean)
    if (settings.edit !== undefined && !metadata.has('edit')) header.push('edit: ' + (settings.edit ? 'true' : 'false'))
    if (requestedMode !== undefined && !metadata.has('mode')) header.push('mode: ' + requestedMode)
    if (tags.size) header.push('tags: ' + Array.from(tags.values()).join(', '))
    if (settings.comment === undefined) {
      if (comments.size) header.push('comment: ' + Array.from(comments).join(' - '))
    } else {
      const comment = settings.comment == null
        ? ''
        : String(settings.comment).trim().replace(/\s+/g, ' ').replace(/-->/g, '--&gt;')
      if (comment) header.push('comment: ' + comment)
    }
    if (authors.size) header.push('author: ' + Array.from(authors.values()).join('; '))
    ;(Array.isArray(settings.header) ? settings.header : settings.header ? [settings.header] : [])
      .map(function (line) { return String(line || '').trim() })
      .filter(Boolean)
      .forEach(function (line) { header.push(line) })
    const title = settings.title ? '# ' + String(settings.title).replace(/[\r\n]+/g, ' ').trim() + '\n\n' : ''
    const prependBody = settings.prependBody ? String(settings.prependBody).trim() + '\n\n\n' : ''
    const appendBody = settings.appendBody ? '\n\n\n' + String(settings.appendBody).trim() : ''
    return (header.length ? '<!--\n\n' + header.join('\n\n') + '\n\n-->\n\n' : '') +
      title + prependBody + chunks.join('\n\n\n') + appendBody
  }

  return { build: build, split: split, rebase: rebaseMarkdown }
})
