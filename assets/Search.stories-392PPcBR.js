import{s as O,r as A,p as Z}from"./server.browser-rAMDWieH.js";import{a as D,b as _}from"./_Search-DdSMRMGM.js";const T={title:"Components/Search/Web Component Implementation",id:"web-component-search",argTypes:D,component:_,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(y,e)=>{var s,l;const t=typeof e.component=="function"?e.component:typeof((s=e.component)==null?void 0:s.render)=="function"?(l=e.component)==null?void 0:l.render:null;return t?O.format(A(t(e.args)),{parser:"babel",plugins:[Z]}):y}}}}},a={name:"Search",args:{placeholder:"Zoeken",icon:!0,disabled:!1,dark:!1,full:!1,readOnly:!1,autocomplete:!0,staticAutocomplete:!1}},r={name:"Search disabled",args:{placeholder:"Zoeken",icon:!0,disabled:!0,dark:!1,full:!1,readOnly:!1,autocomplete:!0,staticAutocomplete:!1}},o={name:"Search read only",args:{placeholder:"Zoeken",icon:!0,disabled:!1,dark:!1,full:!1,readOnly:!0,autocomplete:!0,staticAutocomplete:!1}},n={name:"Search dark mode",args:{placeholder:"Zoeken",icon:!0,disabled:!1,dark:!0,readOnly:!1,autocomplete:!0,staticAutocomplete:!1}};var c,d,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Search',
  args: {
    placeholder: 'Zoeken',
    icon: true,
    disabled: false,
    dark: false,
    full: false,
    readOnly: false,
    autocomplete: true,
    staticAutocomplete: false
  }
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var p,m,f;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Search disabled',
  args: {
    placeholder: 'Zoeken',
    icon: true,
    disabled: true,
    dark: false,
    full: false,
    readOnly: false,
    autocomplete: true,
    staticAutocomplete: false
  }
}`,...(f=(m=r.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var i,b,k;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Search read only',
  args: {
    placeholder: 'Zoeken',
    icon: true,
    disabled: false,
    dark: false,
    full: false,
    readOnly: true,
    autocomplete: true,
    staticAutocomplete: false
  }
}`,...(k=(b=o.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var h,S,g;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Search dark mode',
  args: {
    placeholder: 'Zoeken',
    icon: true,
    disabled: false,
    dark: true,
    readOnly: false,
    autocomplete: true,
    staticAutocomplete: false
  }
}`,...(g=(S=n.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};const E=["Default","Disabled","ReadOnly","Dark"],M=Object.freeze(Object.defineProperty({__proto__:null,Dark:n,Default:a,Disabled:r,ReadOnly:o,__namedExportsOrder:E,default:T},Symbol.toStringTag,{value:"Module"}));export{M as S};
