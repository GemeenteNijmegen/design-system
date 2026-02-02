import{s as O,r as Z,p as D}from"./server.browser-rAMDWieH.js";import{a as _,S as T}from"./_Search-BwbNRKto.js";const E={title:"Components/Search/Html Implementation",id:"html-search",argTypes:_,component:T,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(y,e)=>{var o,d;const l=typeof e.component=="function"?e.component:typeof((o=e.component)==null?void 0:o.render)=="function"?(d=e.component)==null?void 0:d.render:null;return l?O.format(Z(l(e.args)),{parser:"babel",plugins:[D]}):y}}}}},a={name:"Search",args:{placeholder:"Zoeken",icon:!0,disabled:!1,dark:!1,full:!1,readOnly:!1}},r={name:"Search disabled",args:{placeholder:"Zoeken",icon:!0,disabled:!0,dark:!1,full:!1,readOnly:!1}},n={name:"Search read only",args:{placeholder:"Zoeken",icon:!0,disabled:!1,dark:!1,full:!1,readOnly:!0}},s={name:"Search dark mode",args:{placeholder:"Zoeken",icon:!0,disabled:!1,dark:!0,full:!1,readOnly:!1}};var c,t,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Search',
  args: {
    placeholder: 'Zoeken',
    icon: true,
    disabled: false,
    dark: false,
    full: false,
    readOnly: false
  }
}`,...(u=(t=a.parameters)==null?void 0:t.docs)==null?void 0:u.source}}};var f,p,m;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Search disabled',
  args: {
    placeholder: 'Zoeken',
    icon: true,
    disabled: true,
    dark: false,
    full: false,
    readOnly: false
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var i,h,k;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Search read only',
  args: {
    placeholder: 'Zoeken',
    icon: true,
    disabled: false,
    dark: false,
    full: false,
    readOnly: true
  }
}`,...(k=(h=n.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var S,b,g;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Search dark mode',
  args: {
    placeholder: 'Zoeken',
    icon: true,
    disabled: false,
    dark: true,
    full: false,
    readOnly: false
  }
}`,...(g=(b=s.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const R=["Default","Disabled","ReadOnly","Dark"],M=Object.freeze(Object.defineProperty({__proto__:null,Dark:s,Default:a,Disabled:r,ReadOnly:n,__namedExportsOrder:R,default:E},Symbol.toStringTag,{value:"Module"}));export{a as D,n as R,M as S,r as a,s as b};
