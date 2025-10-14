import{j as e}from"./jsx-runtime-CKrituN3.js";import{U,b as r}from"./index-CAeyYOdx.js";import{s as I,r as f,p as h}from"./server.browser-rAMDWieH.js";import{a as j}from"./_UnorderedList-C6rKkPeO.js";const g={title:"Components/Unordered list/Html Implementation",id:"html-unordered-list",component:U,argTypes:j,args:{children:""},parameters:{status:{type:"BETA"},docs:{source:{transform:(u,t)=>{var d,o;const n=typeof t.component=="function"?t.component:typeof((d=t.component)==null?void 0:d.render)=="function"?(o=t.component)==null?void 0:o.render:null;return n?I.format(f(n(t.args)),{parser:"babel",plugins:[h]}):u}}}}},s={args:{children:[e.jsx(r,{children:"List item 1"},"li-1"),e.jsx(r,{children:"List item 2"},"li-2"),e.jsx(r,{children:"List item 3"},"li-3")]}},i={args:{children:[e.jsx(r,{children:"List item 1"},"li-4"),e.jsxs(r,{children:["List item 2",e.jsxs(U,{children:[e.jsx(r,{children:"Nested List item 1"}),e.jsx(r,{children:"Nested List item 2"})]})]},"li-5"),e.jsx(r,{children:"List item 3"},"li-6")]}};var m,a,l;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: [<UnorderedListItem key="li-1">List item 1</UnorderedListItem>, <UnorderedListItem key="li-2">List item 2</UnorderedListItem>, <UnorderedListItem key="li-3">List item 3</UnorderedListItem>]
  }
}`,...(l=(a=s.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var c,L,p;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: [<UnorderedListItem key="li-4">List item 1</UnorderedListItem>, <UnorderedListItem key="li-5">
        List item 2
        <UnorderedList>
          <UnorderedListItem>Nested List item 1</UnorderedListItem>
          <UnorderedListItem>Nested List item 2</UnorderedListItem>
        </UnorderedList>
      </UnorderedListItem>, <UnorderedListItem key="li-6">List item 3</UnorderedListItem>]
  }
}`,...(p=(L=i.parameters)==null?void 0:L.docs)==null?void 0:p.source}}};const x=["DefaultUnorderedList","NestedUnorderedList"],_=Object.freeze(Object.defineProperty({__proto__:null,DefaultUnorderedList:s,NestedUnorderedList:i,__namedExportsOrder:x,default:g},Symbol.toStringTag,{value:"Module"}));export{_ as U};
