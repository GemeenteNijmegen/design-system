import{j as e}from"./jsx-runtime-CKrituN3.js";import{U as L,b as t}from"./index-D7sGIe68.js";import{a as l}from"./_UnorderedList-C6rKkPeO.js";const c={title:"Components/Unordered list/React Implementation",id:"react-unordered-list",component:L,argTypes:l,args:{children:""},parameters:{status:{type:"BETA"}}},r={args:{children:[e.jsx(t,{children:"List item 1"},"li-1"),e.jsx(t,{children:"List item 2"},"li-2"),e.jsx(t,{children:"List item 3"},"li-3")]}},s={args:{children:[e.jsx(t,{children:"List item 1"},"li-4"),e.jsxs(t,{children:["List item 2",e.jsxs(L,{children:[e.jsx(t,{children:"Nested List item 1"}),e.jsx(t,{children:"Nested List item 2"})]})]},"li-5"),e.jsx(t,{children:"List item 3"},"li-6")]}};var i,d,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: [<UnorderedListItem key="li-1">List item 1</UnorderedListItem>, <UnorderedListItem key="li-2">List item 2</UnorderedListItem>, <UnorderedListItem key="li-3">List item 3</UnorderedListItem>]
  }
}`,...(n=(d=r.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};var o,m,a;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: [<UnorderedListItem key="li-4">List item 1</UnorderedListItem>, <UnorderedListItem key="li-5">
        List item 2
        <UnorderedList>
          <UnorderedListItem>Nested List item 1</UnorderedListItem>
          <UnorderedListItem>Nested List item 2</UnorderedListItem>
        </UnorderedList>
      </UnorderedListItem>, <UnorderedListItem key="li-6">List item 3</UnorderedListItem>]
  }
}`,...(a=(m=s.parameters)==null?void 0:m.docs)==null?void 0:a.source}}};const U=["DefaultUnorderedList","NestedUnorderedList"],h=Object.freeze(Object.defineProperty({__proto__:null,DefaultUnorderedList:r,NestedUnorderedList:s,__namedExportsOrder:U,default:c},Symbol.toStringTag,{value:"Module"}));export{h as U};
