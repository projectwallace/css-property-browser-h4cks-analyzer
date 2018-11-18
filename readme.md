# css-property-hacks-analyzer [![Build Status](https://travis-ci.org/bartveneman/css-property-hacks-analyzer.svg?branch=master)](https://travis-ci.org/bartveneman/css-property-hacks-analyzer) [![Known Vulnerabilities](https://snyk.io/test/github/bartveneman/css-property-hacks-analyzer/badge.svg)](https://snyk.io/test/github/bartveneman/css-property-hacks-analyzer) ![Dependencies Status](https://img.shields.io/david/bartveneman/css-property-hacks-analyzer.svg) ![Dependencies Status](https://img.shields.io/david/dev/bartveneman/css-property-hacks-analyzer.svg) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

A list of tests to determine whether a property is a browser hack, derived from
the formidable [browserhacks.com](https://browserhacks.com)
([Repo](https://github.com/4ae9b8/browserhacks)).

## Installation

```bash
npm install css-property-hacks-analyzer

# or

yarn add css-property-hacks-analyzer
```

## Usage

```js
const isBrowserHack = require('css-property-hacks-analyzer')

// CSS declaration example => .selector { _property: value; }
console.log(isBrowserHack('_property'))
// => true

console.log(isBrowserHack('color'))
// => false
```

## Related projects

- [CSS Analyzer](https://github.com/projectwallace/css-analyzer) - CSS
  statistics module
- [Wallace CLI](https://github.com/bartveneman/wallace-cli) - CSS statistics in
  your CLI
- [CSS Analyzer Diff](https://github.com/bartveneman/css-analyzer-diff) -
  Calculates the diff between two sets of CSS analysis
- [Color Sorter](https://github.com/bartveneman/color-sorter) - Sort CSS colors
  by hue, saturation, lightness and opacity
- [Gromit CLI](https://github.com/bartveneman/gromit-cli) - A test framework to
  assert that CSS statistics don't exceed certain thresholds.

## License

MIT © Bart Veneman
