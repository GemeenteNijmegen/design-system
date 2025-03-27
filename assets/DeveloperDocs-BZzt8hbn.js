import{j as e}from"./jsx-runtime-CKrituN3.js";import{M as a,e as t}from"./chunk-HLWAVYOI-CwXjD0-k.js";import{useMDXComponents as i}from"./index-DI5IigMn.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-B3g7Nuik.js";import"../sb-preview/runtime.js";import"./react-18-D8cruF67.js";import"./index-BtM5VmRH.js";import"./index-ToFVweKJ.js";import"./extends-CCbyfPlC.js";import"./_getPrototype-nBa_wnor.js";import"./index-ltOY3w3e.js";function r(o){const n=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",code:"code",ul:"ul",li:"li"},i(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"foundations/Colors/Developer documentation"}),`
`,e.jsx(n.h1,{id:"colors-developer-documentation",children:"Colors developer documentation"}),`
`,e.jsxs(n.p,{children:["Make sure to check the ",e.jsx(n.a,{href:"/?path=/docs/foundations-icons-documentatie--docs",children:"color palettes documentation"})," for all color palettes."]}),`
`,e.jsx(n.h2,{id:"theming",children:"Theming"}),`
`,e.jsxs(n.p,{children:["Colors are available in the default theme ",e.jsx(n.code,{children:"nijmegen-theme"}),". Some colors have a dark theme counterpart which are available in the dark theme (beta) ",e.jsx(n.code,{children:"nijmegen-theme-dark"}),"."]}),`
`,e.jsx(n.h2,{id:"requirements",children:"Requirements"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["If you implement the colors make sure to follow the ",e.jsx(n.a,{href:"https://www.w3.org/TR/WCAG22/#contrast-minimum",target:"_blank",rel:"nofollow noopener noreferrer",children:"WCAG 2.0 - Web Content Accessibility Guidelines (WCAG 2.2)"}),";"]}),`
`,e.jsxs(n.li,{children:["Check contrasts via a ",e.jsx(n.a,{href:"https://webaim.org/resources/contrastchecker/",target:"_blank",rel:"nofollow noopener noreferrer",children:"contrastchecker"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"html-example",children:"Html example"}),`
`,e.jsx("div",{className:"nijmegen-theme",style:{backgroundColor:"var(--nijmegen-color-background-default)",padding:"20px"},children:e.jsx("span",{style:{color:"var(--nijmegen-interaction-color)"},children:"Interaction color default theme"})}),`
`,e.jsx("div",{className:"nijmegen-theme-dark",style:{backgroundColor:"var(--nijmegen-color-background-default)",padding:"20px"},children:e.jsx("span",{style:{color:"var(--nijmegen-interaction-color)"},children:"Interaction color dark theme"})}),`
`,e.jsx(t,{language:"html",code:`
<!DOCTYPE html>
<html lang="nl">
  <head>
    <title>Example page</title>
    <link rel="stylesheet" href="node_modules/@utrecht/button-css/dist/index.css" />
    <link rel="stylesheet" href="node_modules/@gemeentenijmegen/design-tokens/dist/index.css'" />
    <link rel="stylesheet" href="node_modules/@gemeentenijmegen/font/dist/index.css'" />
    <!-- add the following stylesheet if you want to use the dark theme -->
    <link rel="stylesheet" href="node_modules/@gemeentenijmegen/design-tokens-dark/dist/index.css'" />
  </head>
  <body>
    <div class="nijmegen-theme" style="background-color: var(--nijmegen-color-background-default); padding: 20px;">
        <span style="color: var(--nijmegen-interaction-color);">Interaction color default theme</span>
    </div>
    <div class="nijmegen-theme-dark" style="background-color: var(--nijmegen-color-background-default); padding: 20px;">
        <span style="color: var(--nijmegen-interaction-color);">Interaction color dark theme</span>
    </div>
  </body>
</html>
`}),`
`,e.jsx(n.h2,{id:"react-example",children:"React example"}),`
`,e.jsx("div",{className:"nijmegen-theme",style:{backgroundColor:"var(--nijmegen-color-background-default)",padding:"20px"},children:e.jsx("span",{style:{color:"var(--nijmegen-interaction-color)"},children:"Interaction color default theme"})}),`
`,e.jsx("div",{className:"nijmegen-theme-dark",style:{backgroundColor:"var(--nijmegen-color-background-default)",padding:"20px"},children:e.jsx("span",{style:{color:"var(--nijmegen-interaction-color)"},children:"Interaction color dark theme"})}),`
`,e.jsx(t,{language:"jsx",code:`
import '@gemeentenijmegen/design-tokens/dist/index.css';
import '@gemeentenijmegen/font/dist/index.css';

// add the following stylesheet if you want to use the dark theme
import '@gemeentenijmegen/design-tokens-dark/dist/index.css';

export const MyPage = () => (
    <div className="nijmegen-theme" style={{backgroundColor: 'var(--nijmegen-color-background-default)', padding: '20px'}}>
        <span style={{color: 'var(--nijmegen-interaction-color)'}}>Interaction color default theme</span>
    </div>
    <div className="nijmegen-theme-dark"  style={{backgroundColor: 'var(--nijmegen-color-background-default)', padding: '20px'}}>
        <span style={{color: 'var(--nijmegen-interaction-color)'}}>Interaction color dark theme</span>
    </div>
);
`})]})}function v(o={}){const{wrapper:n}=Object.assign({},i(),o.components);return n?e.jsx(n,Object.assign({},o,{children:e.jsx(r,o)})):r(o)}export{v as default};
