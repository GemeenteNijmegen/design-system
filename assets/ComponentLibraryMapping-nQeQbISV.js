import{j as n}from"./jsx-runtime-CKrituN3.js";import{M as r,e as s}from"./chunk-HLWAVYOI-CMhPLhNE.js";import{U as o}from"./index-Cq7blAea.js";/* empty css              */import{useMDXComponents as a}from"./index-DI5IigMn.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BJpQVEtY.js";import"../sb-preview/runtime.js";import"./react-18-D8cruF67.js";import"./index-BtM5VmRH.js";import"./index-CnWNB3mc.js";import"./extends-CCbyfPlC.js";import"./_getPrototype-nBa_wnor.js";import"./index-ltOY3w3e.js";function i(t){const e=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",code:"code",h3:"h3"},a(),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"foundations/Semantic HTML/Component Library class mapping"}),`
`,n.jsx(e.h1,{id:"component-library-class-mapping",children:"Component Library class mapping"}),`
`,n.jsxs(e.p,{children:["For users of the ",n.jsx(e.a,{href:"https://componenten.nijmegen.nl",target:"_blank",rel:"nofollow noopener noreferrer",children:"previous design system"})," we support some class mapping of old Bootstrap-based classes. We will only support some base classes for HTML coming from a WYSIWYG editor; therefore, this mapping is placed under the semantic HTML section. This HTML is hard to change on existing websites. The purpose of this mapping is to support a smooth transmission from the component library to the Nijmegen NL Design System."]}),`
`,n.jsx(e.h2,{id:"example-usage",children:"Example usage"}),`
`,n.jsxs(e.p,{children:["For using the component library class mapping you need to use the ",n.jsx(e.code,{children:"nijmegen-component-library-mapping"})," class next to the ",n.jsx(e.code,{children:"nijmegen-html"})," class."]}),`
`,n.jsx(s,{language:"html",code:`
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
`,n.jsx(e.h1,{id:"supported-class-mappings",children:"Supported class mappings"}),`
`,n.jsx(e.h2,{id:"button-classes",children:"Button classes"}),`
`,n.jsxs(e.p,{children:["For the button class mapping we also support the ",n.jsx(e.code,{children:"disabled"}),", ",n.jsx(e.code,{children:"focus"}),", ",n.jsx(e.code,{children:"focus-visible"}),", ",n.jsx(e.code,{children:"hover"})," and ",n.jsx(e.code,{children:"active"})," states."]}),`
`,n.jsx(o,{children:n.jsxs("div",{className:"nijmegen-html nijmegen-component-library-mapping",children:[n.jsx("button",{class:"btn",children:"button"}),n.jsx("button",{class:"btn btn-primary",children:"button primary"}),n.jsx("button",{class:"btn btn-secondary",children:"button secondary"})]})}),`
`,n.jsx(s,{language:"html",code:`
<div className="nijmegen-html nijmegen-component-library-mapping">
    <button class="btn">button</button>
    <button class="btn btn-primary">button primary</button>
    <button class="btn btn-secondary">button secondary</button>
</div>
`}),`
`,n.jsx(e.h3,{id:"as-link",children:"As link"}),`
`,n.jsx(o,{children:n.jsx("div",{className:"nijmegen-html nijmegen-component-library-mapping",children:n.jsxs(e.p,{children:[n.jsx("a",{href:"#",class:"btn",children:"button"}),` 
`,n.jsx("a",{href:"#",class:"btn btn-primary",children:"button primary"}),` 
`,n.jsx("a",{href:"#",class:"btn btn-secondary",children:"button secondary"})]})})}),`
`,n.jsx(s,{language:"html",code:`
<div className="nijmegen-html nijmegen-component-library-mapping">
    <a href="#" class="btn">button</a>&nbsp;
    <a href="#" class="btn btn-primary">button primary</a>&nbsp;
    <a href="#" class="btn btn-secondary">button secondary</a>
</div>
`})]})}function L(t={}){const{wrapper:e}=Object.assign({},a(),t.components);return e?n.jsx(e,Object.assign({},t,{children:n.jsx(i,t)})):i(t)}export{L as default};
