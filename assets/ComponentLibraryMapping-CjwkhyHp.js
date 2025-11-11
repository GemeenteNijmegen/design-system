import{j as e}from"./jsx-runtime-CKrituN3.js";import{M as a,e as s}from"./chunk-HLWAVYOI-BePvQ2Fd.js";import{U as r}from"./index-BV_f1HKc.js";/* empty css              */import{useMDXComponents as i}from"./index-DI5IigMn.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-C5I_0LDh.js";import"../sb-preview/runtime.js";import"./react-18-D8cruF67.js";import"./index-BtM5VmRH.js";import"./index-CnWNB3mc.js";import"./extends-CCbyfPlC.js";import"./_getPrototype-nBa_wnor.js";import"./index-ltOY3w3e.js";function o(n){const t=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",code:"code"},i(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"foundations/Semantic HTML/Component Library class mapping"}),`
`,e.jsx(t.h1,{id:"component-library-class-mapping",children:"Component Library class mapping"}),`
`,e.jsxs(t.p,{children:["For users of the ",e.jsx(t.a,{href:"https://componenten.nijmegen.nl",target:"_blank",rel:"nofollow noopener noreferrer",children:"previous design system"})," we support some class mapping of old Bootstrap-based classes. We will only support some base classes for HTML coming from a WYSIWYG editor; therefore, this mapping is placed under the semantic HTML section. This HTML is hard to change on existing websites. The purpose of this mapping is to support a smooth transmission from the component library to the Nijmegen NL Design System."]}),`
`,e.jsx(t.h2,{id:"example-usage",children:"Example usage"}),`
`,e.jsxs(t.p,{children:["For using the component library class mapping you need to use the ",e.jsx(t.code,{children:"nijmegen-component-library-mapping"})," class next to the ",e.jsx(t.code,{children:"nijmegen-html"})," class."]}),`
`,e.jsx(s,{language:"html",code:`
<!doctype html>
<html lang="nl">
  <head>
    <title>Component library class mapping example</title>
    <!-- global -->
    <link rel="stylesheet" href="https://unpkg.com/@utrecht/document-css@1.5.0/dist/index.css" />
    <link rel="stylesheet" href="https://unpkg.com/@gemeentenijmegen/design-tokens@latest/dist/index.css" />
    <link rel="stylesheet" href="https://unpkg.com/@gemeentenijmegen/font@latest/dist/index.css" />
    <!-- Semantic HTML specific -->
    <link rel="stylesheet" href="https://unpkg.com/@gemeentenijmegen/semantic-html@latest/dist/index.css" />
  </head>

  <body class="nijmegen-html nijmegen-component-library-mapping">
    <!-- Regular sematnic support -->
    <h2>Lorem ipsum dolor sit amet</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <!-- Bootstrap btn class mapping support -->
    <button class="btn">button</button>
    <button class="btn btn-primary">button primary</button>
    <button class="btn btn-secondary">button secondary</button>

    <button>Semantic button</button>

  </body>
</html>
`}),`
`,e.jsx(t.h1,{id:"supported-class-mappings",children:"Supported class mappings"}),`
`,e.jsx(t.h2,{id:"button-classes",children:"Button classes"}),`
`,e.jsxs(t.p,{children:["For the button class mapping we also support the ",e.jsx(t.code,{children:"disabled"}),", ",e.jsx(t.code,{children:"focus"}),", ",e.jsx(t.code,{children:"focus-visible"}),", ",e.jsx(t.code,{children:"hover"})," and ",e.jsx(t.code,{children:"active"})," states."]}),`
`,e.jsx(r,{children:e.jsxs("div",{className:"nijmegen-html nijmegen-component-library-mapping",children:[e.jsx("button",{class:"btn",children:"button"}),e.jsx("button",{class:"btn btn-primary",children:"button primary"}),e.jsx("button",{class:"btn btn-secondary",children:"button secondary"})]})}),`
`,e.jsx(s,{language:"html",code:`
<div className="nijmegen-html nijmegen-component-library-mapping">
    <button class="btn">button</button>
    <button class="btn btn-primary">button primary</button>
    <button class="btn btn-secondary">button secondary</button>
</div>

`})]})}function k(n={}){const{wrapper:t}=Object.assign({},i(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(o,n)})):o(n)}export{k as default};
