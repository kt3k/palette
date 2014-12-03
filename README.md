# palette-set v0.1.4

- example: http://kt3k.github.io/palette/#962956462228bb8911ed

# paletteSet.json

You need to make a file called 'paletteSet.json' in a gist to share on the site.

After creating a gist containing paletteSet.json, then url http://kt3k.github.io/palette/#[your-gist-id] shows your color palette set.

## Field description

### `author`

The author name of the palette set.

### `description`

The description of the palette set.

### `palette`

Array of palettes.

## `palette` object

### `name`

The name of the palette.

### `description`

The description of the palette.

### `colors`

The array of colors ( in hex format, e.g. #FFFFFF, #000000, #1f0e55 etc )

# Examples

- Color Palette for Google Material Design
  - http://kt3k.github.io/palette/#135988589b185740866d
- Color palette of JS logo
  - http://kt3k.github.io/palette/#5a7d465565523a1de460
- Color palette of Raspberry Pi logo
  - http://kt3k.github.io/palette/#461202729e8fa8e0676d

# CLI

```sh
npm install -g palette-set
```

The above installs `palette` command. Execute `palette` command at the directory where you put `paletteSet.json` and your palette will be served at http://0.0.0.0:3000/ .
