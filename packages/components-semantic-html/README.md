# Nijmegen Semantic HTML elements

The Nijmegen Semantic HTML elements package contain a small subset of the CSS components, for components that occur in regular HTML pages with semantic HTML. You can apply the `nijmegen-html` class name to your page, and any semantic HTML will be styled automatically. This can be helpful to style HTML content from a CMS, for example.

## Install

```ssh
npm install --save-dev --save-exact @gemeentenijmegen/semantic-html
```

## Usage

```html
<!doctype html>
<html lang="nl">
  <head>
    <title>Example page</title>
    <link rel="stylesheet" href="node_modules/@gemeentenijmegen/design-tokens/dist/index.css'" />
    <link rel="stylesheet" href="node_modules/@gemeentenijmegen/font/dist/index.css'" />
    <link rel="stylesheet" href="node_modules/@gemeentenijmegen/semantic-html/dist/index.css" />
  </head>
  <body class="nijmegen-html">
    <h1>Home</h1>
    <p>Hello, world!</p>
  </body>
</html>
```
