# Hebreiska Translitteration

A tool for transliterating liturgical Hebrew texts to Swedish orthography.
It is an augmentation of [havarot](https://github.com/charlesLoder/havarot).

## About

Its purpose is to transliterate litrugical Hebrew into Swedish orthography.

Funding for this module was graciously provided by [Educating for Impact](https://educatingforimpact.com/).

## Install

### npm

`npm install github:taatik/hebreiska-translitteration`

### source

Download or clone this repository.

```bash
cd hebreiska-translitteration
npm install
npm run build
```

## Example

### JavaScript

```javascript
const hebrewTransliteration = require("hebreiska-translitteration");
const Text = hebrewTransliteration.Text;
const heb = new Text("שָׁלֹום");
const transliteration = heb.transliterate();
transliteration;
// shalom
```

### TypeScript

```typescript
import { Text } from "hebreiska-translitteration";
const heb = new Text("שָׁלֹום");
const transliteration = heb.transliterate();
transliteration;
// shalom
```

## Schema

### Consonants

For consonants with slashes, the left hand side reprsents the unmarked (i.e. spirantized) form, and the right side is the marked form.

| Consonant | Transliteration | Consonant | Transliteration |
| :-------: | :-------------: | :-------: | :-------------: |
|     א     |                 |    מ ם    |        m        |
|     ב     |       b/v       |    נ ן    |        n        |
|     ג     |        g        |     ס     |        s        |
|     ד     |        d        |     ע     |                 |
|     ה     |        h        |    פ ף    |       p/f       |
|     ו     |        v        |    צ ץ    |       ts        |
|     ז     |        z        |     ק     |        k        |
|     ח     |       ch        |     ר     |        r        |
|     ט     |        t        |    שׂ     |        s        |
|     י     |        j        |    שׁ     |       sh        |
|    כ ך    |      k/ch       |     ת     |        t        |
|     ל     |        l        |           |                 |

### Vowels

|        Vowel        | Transliteration |      Vowel       | Transliteration |
| :-----------------: | :-------------: | :--------------: | :-------------: |
|      ◌ַ patakh      |        a        |  י◌ִ hireq yod   |        i        |
|  ◌ַ furtive patakh  |        a        | ◌ָ qamets katan  |        o        |
|      ◌ָ qamets      |        a        |     ◌ֹ holem     |        o        |
| ה◌ָ final qamets he |        a        |  וֹ full holem   |        o        |
| יו◌ָ three 3ms sufx |       av        | ◌ֻ short qibbuts |        u        |
|      ◌ֶ segol       |        e        | ◌ֻ long qibbuts  |        u        |
|      ◌ֵ tsere       |        e        |    וּ shureq     |        u        |
| י◌ֵ final tsere yod |       ej        | ◌ֳ khatef qamets |        a        |
| י◌ֶ final segol yod |       ej        | ◌ֲ khatef patakh |        a        |
|   ◌ִ short hiriq    |        i        | ◌ֱ khatef segol  |        e        |
|    ◌ִ long hiriq    |        i        |  ◌ְ vocal shewa  |        e        |

## Contributors

- Rav Bookworm (?)
- Marina Burstein
- Eva Ekselius
- Natalie Lantz
- Patric Joshua Lebenswerd
