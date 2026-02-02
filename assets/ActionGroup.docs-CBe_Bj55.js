import{j as t}from"./jsx-runtime-CKrituN3.js";import{M as i,P as s,b as p,e as m}from"./chunk-HLWAVYOI-Cjh6T_AG.js";import{A as a}from"./ActionGroup.stories-DUuXW5l8.js";import{useMDXComponents as r}from"./index-DI5IigMn.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-CvFksWGG.js";import"../sb-preview/runtime.js";import"./react-18-D8cruF67.js";import"./index-BtM5VmRH.js";import"./index-CnWNB3mc.js";import"./extends-CCbyfPlC.js";import"./_getPrototype-nBa_wnor.js";import"./index-ltOY3w3e.js";import"./_ActionGroup-DZpJDG99.js";import"./index-S9DfXEnO.js";import"./index-7bwtWdbn.js";import"./index-Cr_ziExY.js";import"./IconExternalLink-DvrFVVe4.js";import"./createReactComponent-D_5DJZVZ.js";function e(o){const n=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2"},r(),o.components);return t.jsxs(t.Fragment,{children:[`
`,`
`,t.jsx(i,{of:a}),`
`,t.jsx(n.h1,{id:"action-group-component-react-implementation",children:"Action Group Component React implementation"}),`
`,t.jsxs(n.p,{children:["This documentation page shows the implementation of the Action Group component in ",t.jsx(n.a,{href:"https://react.dev/",target:"_blank",rel:"nofollow noopener noreferrer",children:"React"}),"."]}),`
`,t.jsx(n.h2,{id:"component-suported-arguments",children:"Component suported arguments"}),`
`,t.jsx(s,{}),`
`,t.jsx(p,{}),`
`,t.jsx(n.h2,{id:"example-implementation",children:"Example implementation"}),`
`,t.jsx(m,{language:"jsx",code:`
// global
import '@gemeentenijmegen/design-tokens/dist/index.css';
import '@gemeentenijmegen/font/dist/index.css';

// specific for ButtonGroup component
import { ButtonGroup, Button } from "@utrecht/component-library-react";
import '@utrecht/components/button/css/index.scss';
import '@utrecht/components/button-group/css/index.scss';

export const MyPage = () => (
    <div className="nijmegen-theme">
      <ButtonGroup>
        <Button appearance="primary-action-button">Opslaan en doorgaan</Button>
        <Button appearance="secondary-action-button">Terug</Button>
      </ButtonGroup>
    </div>
);
`}),`
`,t.jsx(n.h2,{id:"icon-use",children:"Icon use"}),`
`,t.jsxs(n.p,{children:["Please read the ",t.jsx(n.a,{href:"/?path=/docs/foundations-icons-developer-documentation--docs",children:"Icon developer documentation"})," if you want to use icons inside the buttons."]})]})}function D(o={}){const{wrapper:n}=Object.assign({},r(),o.components);return n?t.jsx(n,Object.assign({},o,{children:t.jsx(e,o)})):e(o)}export{D as default};
