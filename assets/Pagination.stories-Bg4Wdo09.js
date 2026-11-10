import{s as j,r as u,p as _}from"./server.browser-rAMDWieH.js";import{j as e}from"./jsx-runtime-CKrituN3.js";/* empty css                  */import{c as l}from"./clsx-B-dksMZM.js";const x={next:{name:"Volgende",control:"object"},prev:{name:"Vorige",control:"object"},ellipses:{name:"Toon ellipses",control:"boolean"}},t=({next:a={href:"",disabled:!1},prev:n={href:"",disabled:!1},ellipses:r=!1})=>e.jsx("nav",{className:"nijmegen-pagination","aria-label":"Pagina-navigatie",children:e.jsxs("ul",{className:"nijmegen-pagination-list",children:[n.disabled?e.jsx("li",{children:e.jsx("span",{className:"nijmegen-sr-only",children:"Vorige is niet mogelijk"})}):e.jsx("li",{children:e.jsx("a",{href:n.href,className:l("nijmegen-pagination__relative-link","nijmegen-pagination__relative-link--prev"),rel:"prev",children:e.jsx("span",{children:"Vorige"})})}),e.jsx("li",{children:e.jsxs("a",{className:"nijmegen-pagination__page-link nijmegen-pagination__page-link--current","aria-current":"true",href:"./1",children:["1",e.jsx("span",{className:"nijmegen-sr-only",children:"(huidig)"})]})}),e.jsx("li",{children:e.jsx("a",{className:"nijmegen-pagination__page-link",href:"./2",rel:"next",children:"2"})}),e.jsx("li",{children:e.jsx("a",{className:"nijmegen-pagination__page-link",href:"./3",children:"3"})}),r?e.jsxs(e.Fragment,{children:[e.jsx("li",{children:e.jsx("span",{className:"nijmegen-pagination__ellipses",children:"..."})}),e.jsx("li",{children:e.jsx("a",{className:"nijmegen-pagination__page-link",href:"./99",children:"99"})})]}):e.jsxs(e.Fragment,{children:[e.jsx("li",{children:e.jsx("a",{className:"nijmegen-pagination__page-link",href:"./4",children:"4"})}),e.jsx("li",{children:e.jsx("a",{className:"nijmegen-pagination__page-link",href:"./5",children:"5"})})]}),a.disabled?e.jsx("li",{children:e.jsx("span",{className:l("nijmegen-pagination__relative-link","nijmegen-pagination__relative-link--next","nijmegen-pagination__relative-link--disabled"),rel:"next",children:e.jsx("span",{children:"Volgende"})})}):e.jsx("li",{children:e.jsx("a",{href:a.href,className:l("nijmegen-pagination__relative-link","nijmegen-pagination__relative-link--next"),rel:"next",children:e.jsx("span",{children:"Volgende"})})})]})});try{t.displayName="PaginationStory",t.__docgenInfo={description:"",displayName:"PaginationStory",props:{next:{defaultValue:{value:"{ href: '', disabled: false }"},description:"",name:"next",required:!1,type:{name:"{ href: string; disabled: boolean; }"}},prev:{defaultValue:{value:"{ href: '', disabled: false }"},description:"",name:"prev",required:!1,type:{name:"{ href: string; disabled: boolean; }"}},ellipses:{defaultValue:{value:"false"},description:"",name:"ellipses",required:!1,type:{name:"boolean"}}}}}catch{}const b={title:"Components/Pagination/Html Implementation",id:"html-pagination",argTypes:x,component:t,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(a,n)=>{var o,d;const r=typeof n.component=="function"?n.component:typeof((o=n.component)==null?void 0:o.render)=="function"?(d=n.component)==null?void 0:d.render:null;return r?j.format(u(r(n.args)),{parser:"babel",plugins:[_]}):a}}}}},i={name:"Pagination",args:{next:{href:"",disabled:!1},prev:{href:"",disabled:!0},ellipses:!1}},s={name:"Pagination with ellipses",args:{next:{href:"",disabled:!1},prev:{href:"",disabled:!0},ellipses:!0}};var p,c,m;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Pagination',
  args: {
    next: {
      href: '',
      disabled: false
    },
    prev: {
      href: '',
      disabled: true
    },
    ellipses: false
  }
}`,...(m=(c=i.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var g,h,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Pagination with ellipses',
  args: {
    next: {
      href: '',
      disabled: false
    },
    prev: {
      href: '',
      disabled: true
    },
    ellipses: true
  }
}`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const v=["Default","Ellipses"],V=Object.freeze(Object.defineProperty({__proto__:null,Default:i,Ellipses:s,__namedExportsOrder:v,default:b},Symbol.toStringTag,{value:"Module"}));export{i as D,s as E,V as P};
