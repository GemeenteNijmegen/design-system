import{s as O,r as A,p as Z}from"./server.browser-rAMDWieH.js";import{a as D,S as _}from"./_Search-Cy0Hjm0F.js";const T={title:"Components/Search/Html Implementation",id:"html-search",argTypes:D,component:_,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(y,e)=>{var o,t;const l=typeof e.component=="function"?e.component:typeof((o=e.component)==null?void 0:o.render)=="function"?(t=e.component)==null?void 0:t.render:null;return l?O.format(A(l(e.args)),{parser:"babel",plugins:[Z]}):y}}}}},a={name:"Search",args:{placeholder:"Zoeken",icon:!0,disabled:!1,dark:!1,full:!1,readOnly:!1,staticAutocomplete:!1}},r={name:"Search disabled",args:{placeholder:"Zoeken",icon:!0,disabled:!0,dark:!1,full:!1,readOnly:!1,staticAutocomplete:!1}},s={name:"Search read only",args:{placeholder:"Zoeken",icon:!0,disabled:!1,dark:!1,full:!1,readOnly:!0,staticAutocomplete:!1}},n={name:"Search dark mode",args:{placeholder:"Zoeken",icon:!0,disabled:!1,dark:!0,full:!1,readOnly:!1,staticAutocomplete:!1}};var c,d,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Search',
  args: {
    placeholder: 'Zoeken',
    icon: true,
    disabled: false,
    dark: false,
    full: false,
    readOnly: false,
    staticAutocomplete: false
  }
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var f,p,m;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Search disabled',
  args: {
    placeholder: 'Zoeken',
    icon: true,
    disabled: true,
    dark: false,
    full: false,
    readOnly: false,
    staticAutocomplete: false
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var i,h,k;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Search read only',
  args: {
    placeholder: 'Zoeken',
    icon: true,
    disabled: false,
    dark: false,
    full: false,
    readOnly: true,
    staticAutocomplete: false
  }
}`,...(k=(h=s.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var S,b,g;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Search dark mode',
  args: {
    placeholder: 'Zoeken',
    icon: true,
    disabled: false,
    dark: true,
    full: false,
    readOnly: false,
    staticAutocomplete: false
  }
}`,...(g=(b=n.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const E=["Default","Disabled","ReadOnly","Dark"],B=Object.freeze(Object.defineProperty({__proto__:null,Dark:n,Default:a,Disabled:r,ReadOnly:s,__namedExportsOrder:E,default:T},Symbol.toStringTag,{value:"Module"}));export{a as D,s as R,B as S,r as a,n as b};
