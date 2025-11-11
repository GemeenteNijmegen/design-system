import{j as t}from"./jsx-runtime-CKrituN3.js";import{M as r,P as s,b as m,e as a}from"./chunk-HLWAVYOI-B2_id1ey.js";import{B as p}from"./Button.stories-L8DzqoDq.js";import{useMDXComponents as i}from"./index-DI5IigMn.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BVuD90U6.js";import"../sb-preview/runtime.js";import"./react-18-D8cruF67.js";import"./index-BtM5VmRH.js";import"./index-CnWNB3mc.js";import"./extends-CCbyfPlC.js";import"./_getPrototype-nBa_wnor.js";import"./index-ltOY3w3e.js";import"./index.esm--jZWF5K0.js";import"./clsx-DxZ0A2-Z.js";/* empty css              */import"./IconCalendarEvent-3BPlFUi5.js";import"./createReactComponent-D_5DJZVZ.js";function o(n){const e=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2"},i(),n.components);return t.jsxs(t.Fragment,{children:[`
`,`
`,t.jsx(r,{of:p}),`
`,t.jsx(e.h1,{id:"button-component-react-implementation",children:"Button Component React implementation"}),`
`,t.jsxs(e.p,{children:["This documentation page shows the implementation of the Button component in ",t.jsx(e.a,{href:"https://react.dev/",target:"_blank",rel:"nofollow noopener noreferrer",children:"React"}),"."]}),`
`,t.jsx(e.h2,{id:"component-suported-arguments",children:"Component suported arguments"}),`
`,t.jsx(s,{}),`
`,t.jsx(m,{}),`
`,t.jsx(e.h2,{id:"example-implementation",children:"Example implementation"}),`
`,t.jsx(a,{language:"jsx",code:`
// global
import '@gemeentenijmegen/design-tokens/dist/index.css';
import '@gemeentenijmegen/font/dist/index.css';

// specific for Button component
import { Button } from "@utrecht/component-library-react";
import '@utrecht/components/button/css/index.scss';

export const MyPage = () => (
    <div className="nijmegen-theme">
      <Button appearance="primary-action-button">Label</Button>
    </div>
);
`}),`
`,t.jsx(e.h2,{id:"icon-use",children:"Icon use"}),`
`,t.jsxs(e.p,{children:["Please read the ",t.jsx(e.a,{href:"/?path=/docs/foundations-icons-developer-documentation--docs",children:"Icon developer documentation"})," if you want to use icons inside the buttons."]})]})}function R(n={}){const{wrapper:e}=Object.assign({},i(),n.components);return e?t.jsx(e,Object.assign({},n,{children:t.jsx(o,n)})):o(n)}export{R as default};
