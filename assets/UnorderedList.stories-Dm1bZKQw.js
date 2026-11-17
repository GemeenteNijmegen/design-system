import{j as e}from"./jsx-runtime-CKrituN3.js";import{s as g,r as j,p as N}from"./server.browser-rAMDWieH.js";/* empty css                  */import"./index-Chmavs8-.js";const L={},t=({children:r})=>e.jsx("ul",{role:"list",className:"nijmegen-unordered-list",children:r});try{t.displayName="UnorderedListStory",t.__docgenInfo={description:"",displayName:"UnorderedListStory",props:{}}}catch{}const y={title:"Components/Unordered list/Html Implementation",id:"html-unordered-list",component:t,argTypes:L,args:{children:""},parameters:{status:{type:"BETA"},docs:{source:{transform:(r,i)=>{var d,m;const l=typeof i.component=="function"?i.component:typeof((d=i.component)==null?void 0:d.render)=="function"?(m=i.component)==null?void 0:m.render:null;return l?g.format(j(l(i.args)),{parser:"babel",plugins:[N]}):r}}}}},s={args:{children:[e.jsx("li",{className:"nijmegen-unordered-list__item",children:"List item 1"},"1"),e.jsx("li",{className:"nijmegen-unordered-list__item",children:"List item 2"},"2"),e.jsx("li",{className:"nijmegen-unordered-list__item",children:"List item 3"},"3")]}},n={args:{children:[e.jsx("li",{className:"nijmegen-unordered-list__item",children:"List item 1"},"1"),e.jsxs("li",{className:"nijmegen-unordered-list__item",children:["List item 2",e.jsxs("ul",{role:"list",className:"nijmegen-unordered-list",children:[e.jsx("li",{className:"nijmegen-unordered-list__item",children:"Nested List item 1"},"nested-1"),e.jsx("li",{className:"nijmegen-unordered-list__item",children:"Nested List item 2"},"nested-2")]})]},"2"),e.jsx("li",{className:"nijmegen-unordered-list__item",children:"List item 3"},"3")]}};var a,o,c;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    children: [<li key="1" className="nijmegen-unordered-list__item">
        List item 1
      </li>, <li key="2" className="nijmegen-unordered-list__item">
        List item 2
      </li>, <li key="3" className="nijmegen-unordered-list__item">
        List item 3
      </li>]
  }
}`,...(c=(o=s.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var u,_,p;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: [<li key="1" className="nijmegen-unordered-list__item">
        List item 1
      </li>, <li key="2" className="nijmegen-unordered-list__item">
        List item 2
        <ul role="list" className="nijmegen-unordered-list">
          <li key="nested-1" className="nijmegen-unordered-list__item">
            Nested List item 1
          </li>
          <li key="nested-2" className="nijmegen-unordered-list__item">
            Nested List item 2
          </li>
        </ul>
      </li>, <li key="3" className="nijmegen-unordered-list__item">
        List item 3
      </li>]
  }
}`,...(p=(_=n.parameters)==null?void 0:_.docs)==null?void 0:p.source}}};const h=["DefaultUnorderedList","NestedUnorderedList"],S=Object.freeze(Object.defineProperty({__proto__:null,DefaultUnorderedList:s,NestedUnorderedList:n,__namedExportsOrder:h,default:y},Symbol.toStringTag,{value:"Module"}));export{S as U};
