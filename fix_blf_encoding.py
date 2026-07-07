from pathlib import Path

path = Path('BLF_0001.md')
text = path.read_text(encoding='utf-8')
replacements = {
    'Ã¤': 'ä',
    'Ã¶': 'ö',
    'Ã¼': 'ü',
    'ÃŸ': 'ß',
    'Ã„': 'Ä',
    'Ã–': 'Ö',
    'Ãœ': 'Ü',
    'Ã‚': 'Â',
    'â‚¬': '€',
    'Â€': '€',
    'Â°': '°',
    'Â²': '²',
    'Â³': '³',
    'Â·': '·',
    'Â±': '±',
    'Âµ': 'µ',
}
for old, new in replacements.items():
    text = text.replace(old, new)
path.write_text(text, encoding='utf-8')
print('encoding fixed')