# @canner/slate-md-plugin

A markdown plugin for slate framework

## Install

```
npm i @canner/slate-md-plugin
```

## Usage

```js
import MarkdownPlugin from '@canner/slate-md-plugin';
const plugins = [
  MarkdownPlugin(options)
]

<Editor
  value={value}
  onChange={this.onChange}
  plugins={plugins}
/>
```

## Options

`MarkdownPlugin` also use many other plugins as dependencies, and allows you to pass their customized settings.

Additionally, **_blocks, marks, inlines_** default types are the same as [Markup-it](https://github.com/GitbookIO/markup-it).

```js
// Default settings
{
  blocks: BLOCKS, // https://github.com/GitbookIO/markup-it/blob/master/src/constants/blocks.js
  marks: MARKS, // https://github.com/GitbookIO/markup-it/blob/master/src/constants/marks.js
  inlines: INLINES, // https://github.com/GitbookIO/markup-it/blob/master/src/constants/inlines.js
  codeOption: {
    // https://github.com/GitbookIO/slate-edit-code
    onlyIn: node => node.type === BLOCKS.CODE
  },
  blockquoteOption: {
    // https://github.com/GitbookIO/slate-edit-blockquote

  },
  listOption: {
    // https://github.com/GitbookIO/slate-edit-list
  }
}
```

If you want to change a type, you could set that specific key type alone, without all types.

For example, you want to change `BOLD` default type to `bold_type`. Just pass object as below

```js
{
  marks: {
    BOLD: "bold_type";
  }
}
```

This will replace default `BOLD` setting to your new setting.

# Feature TOC

* [Blockquote](#blockquote)
* [Code block (inline)](#code-block-inline)
* [Code block (triple backticks)](#code-block-triple-backticks)
* [Header](#header)
* [Bold](#bold)
* [Italic](#italic)
* [Bold + Italic](#bold--italic)
* [Strikethrough](#strikethrough)
* [Hr](#hr)
* [Link](#link)
* [Image](#image)
* [Unordered List](#unordered-list)
* [Ordered List](#ordered-list)

## Support

### Blockquote

**In editor enter:**

```
>[space]Blockquote
```

**_Hot key_**

<kbd>Ctrl</kbd>+<kbd>opt</kbd>+<kbd>q</kbd>

### Code block (inline)

**In editor enter:**

```
[space * 4]Code block
```

### Code block (triple backticks)

**In editor enter:**

```
[` * 3][space] Code block
```

Use specific language:

```
[` * 3][lang][space] Code block
```

for example:

```js
const wow = test();
```

**_Hot key_**

<kbd>CMD</kbd>+<kbd>Enter</kbd>: to exit code block

### Header

**In editor enter:**

```
[# * 1~6][space] Header
```

Example

```
# h1
## h2
### h3
#### h4
##### h5
###### h6
```

**_Hot keys_**

**Header 1**

<kbd>Ctrl</kbd>+<kbd>opt</kbd>+<kbd>1</kbd>

**Header 2**

<kbd>Ctrl</kbd>+<kbd>opt</kbd>+<kbd>2</kbd>

**Header 3**

<kbd>Ctrl</kbd>+<kbd>opt</kbd>+<kbd>3</kbd>

**Header 4**

<kbd>Ctrl</kbd>+<kbd>opt</kbd>+<kbd>4</kbd>

**Header 5**

<kbd>Ctrl</kbd>+<kbd>opt</kbd>+<kbd>5</kbd>

**Header 6**

<kbd>Ctrl</kbd>+<kbd>opt</kbd>+<kbd>6</kbd>

### Bold

**In editor enter:**

```
**strong**[space]
or
__strong__[space]
```

**_Hot key_**

<kbd>CMD</kbd>+<kbd>b</kbd>

### Italic

**In editor enter:**

```
_italic_[space]
or
*italic*[space]
```

**_Hot key_**

<kbd>CMD</kbd>+<kbd>i</kbd>

### Bold + Italic

**In editor enter:**

```
___[strong + italic]___[space]
or
***[strong + italic]***[space]
```

### Strikethrough

**In editor enter:**

```
~[strikethrough]~[space]
```

**_Hot key_**

<kbd>Ctrl</kbd>+<kbd>Opt</kbd>+<kbd>d</kbd>

### Hr

**In editor enter:**

```
***
or
---
```

### Link

**In editor enter:**

```
[example](http://example.com "Optional title")[space]
```

### Image

**In editor enter:**

```
![example](http://example.com "Optional title")[space]
```

### Unordered list

**In editor enter:**

```
*[space]
or
+[space]
or
-[space]
```

### Ordered List

**In editor enter:**

```
1.[space]
```
