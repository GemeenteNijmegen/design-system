import{j as e}from"./jsx-runtime-CKrituN3.js";import{M as m,e as i}from"./chunk-HLWAVYOI-CO4hosFN.js";import{useMDXComponents as l}from"./index-DI5IigMn.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DtAid0a1.js";import"../sb-preview/runtime.js";import"./react-18-D8cruF67.js";import"./index-BtM5VmRH.js";import"./index-CnWNB3mc.js";import"./extends-CCbyfPlC.js";import"./_getPrototype-nBa_wnor.js";import"./index-ltOY3w3e.js";const o=`<!doctype html>
<html lang="nl">
  <head>
    <title>Combined example</title>
    <!-- global -->
    <link rel="stylesheet" href="https://unpkg.com/@utrecht/document-css@1.5.0/dist/index.css" />
    <link rel="stylesheet" href="https://unpkg.com/@gemeentenijmegen/design-tokens@latest/dist/index.css" />
    <link rel="stylesheet" href="https://unpkg.com/@gemeentenijmegen/font@latest/dist/index.css" />
    <!-- component specific -->
    <link rel="stylesheet" href="https://unpkg.com/@utrecht/heading-1-css@1.5.0/dist/index.css" />
    <link rel="stylesheet" href="https://unpkg.com/@utrecht/paragraph-css@2.3.1/dist/index.min.css" />

    <!-- Semantic HTML specific -->
    <link rel="stylesheet" href="https://unpkg.com/@gemeentenijmegen/semantic-html@latest/dist/index.css" />
  </head>
  <body class="utrecht-document nijmegen-theme">
    <h1 class="utrecht-heading-1">Heading as component</h1>
    <p class="utrecht-paragraph">Paragraph as component</p>
    <hr />
    <h1>Only document styling is applied to this heading</h1>
    <p>Only document styling is applied to this paragraph</p>
    <!-- wrap content comming from a WYSIWYG editor with an element with a "nijmegen-html" class -->
    <div class="nijmegen-html">
      <h1>Heading styling is applied</h1>
      <p>Paragraph styling is applied</p>
    </div>
  </body>
</html>
`,a=`<!doctype html>
<html lang="nl">
  <head>
    <title>Semantic HTML example</title>
    <!-- global -->
    <link rel="stylesheet" href="https://unpkg.com/@utrecht/document-css@1.5.0/dist/index.css" />
    <link rel="stylesheet" href="https://unpkg.com/@gemeentenijmegen/design-tokens@latest/dist/index.css" />
    <link rel="stylesheet" href="https://unpkg.com/@gemeentenijmegen/font@latest/dist/index.css" />
    <!-- Semantic HTML specific -->
    <link rel="stylesheet" href="https://unpkg.com/@gemeentenijmegen/semantic-html@latest/dist/index.css" />
  </head>

  <body class="nijmegen-html">
    <h1>Lorem ipsum dolor sit amet</h1>
    <h2>Lorem ipsum dolor sit amet</h2>
    <h3>Lorem ipsum dolor sit amet</h3>
    <h4>Lorem ipsum dolor sit amet</h4>
    <h5>Lorem ipsum dolor sit amet</h5>
    <h6>Lorem ipsum dolor sit amet</h6>
    <hr />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <hr />
    <a href="#">Lorem ipsum dolor sit amet</a>
    <hr />
    <ul class="nijmegen-html-linklist">
      <li><a href="#">Link 1</a></li>
      <li><a href="#">Link 2</a></li>
      <li><a href="#">Link 3</a></li>
    </ul>
    <hr />
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Unordered item with <a href="#">link</a></li>
      <li>
        Nested:
        <ul>
          <li>Nested 1</li>
          <li>Nested 2</li>
        </ul>
      </li>
    </ul>
    <hr />
    <button>Lorem ipsum dolor sit amet</button>
  </body>
</html>
`;function s(n){const t=Object.assign({h2:"h2",p:"p"},l(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(m,{title:"foundations/Semantic HTML/Example"}),`
`,e.jsx(t.h2,{id:"example-implementation-only-semantic-html",children:"Example implementation only semantic HTML"}),`
`,e.jsx(i,{language:"html",code:a}),`
`,e.jsx(t.h2,{id:"example-implementation-combining-components-and-semantic-html",children:"Example implementation combining components and semantic HTML"}),`
`,e.jsx(t.p,{children:"This can be used if a part of the content on a page is comming from a WYSIWYG editor"}),`
`,e.jsx(i,{language:"html",code:o})]})}function L(n={}){const{wrapper:t}=Object.assign({},l(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(s,n)})):s(n)}export{L as default};
