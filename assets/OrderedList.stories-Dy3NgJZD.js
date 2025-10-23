import{j as e}from"./jsx-runtime-CKrituN3.js";import{O,a as r}from"./index-2t7QHUHa.js";import{s as I,r as f,p as h}from"./server.browser-rAMDWieH.js";import{a as j}from"./_OrderedList-C6rKkPeO.js";/* empty css                  */const g={title:"Components/Ordered list/Html Implementation",id:"html-ordered-list",component:O,argTypes:j,args:{children:""},parameters:{status:{type:"BETA"},docs:{source:{transform:(u,t)=>{var m,n;const d=typeof t.component=="function"?t.component:typeof((m=t.component)==null?void 0:m.render)=="function"?(n=t.component)==null?void 0:n.render:null;return d?I.format(f(d(t.args)),{parser:"babel",plugins:[h]}):u}}}}},s={args:{children:[e.jsx(r,{children:"List item 1"},"li-1"),e.jsx(r,{children:"List item 2"},"li-2"),e.jsx(r,{children:"List item 3"},"li-3")]}},i={args:{children:[e.jsx(r,{children:"List item 1"},"li-4"),e.jsxs(r,{children:["List item 2",e.jsxs(O,{children:[e.jsx(r,{children:"Nested List item 1"}),e.jsx(r,{children:"Nested List item 2"})]})]},"li-5"),e.jsx(r,{children:"List item 3"},"li-6")]}};var a,o,l;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    children: [<OrderedListItem key="li-1">List item 1</OrderedListItem>, <OrderedListItem key="li-2">List item 2</OrderedListItem>, <OrderedListItem key="li-3">List item 3</OrderedListItem>]
  }
}`,...(l=(o=s.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var c,L,p;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: [<OrderedListItem key="li-4">List item 1</OrderedListItem>, <OrderedListItem key="li-5">
        List item 2
        <OrderedList>
          <OrderedListItem>Nested List item 1</OrderedListItem>
          <OrderedListItem>Nested List item 2</OrderedListItem>
        </OrderedList>
      </OrderedListItem>, <OrderedListItem key="li-6">List item 3</OrderedListItem>]
  }
}`,...(p=(L=i.parameters)==null?void 0:L.docs)==null?void 0:p.source}}};const x=["DefaultOrderedList","NestedOrderedList"],S=Object.freeze(Object.defineProperty({__proto__:null,DefaultOrderedList:s,NestedOrderedList:i,__namedExportsOrder:x,default:g},Symbol.toStringTag,{value:"Module"}));export{S as O};
