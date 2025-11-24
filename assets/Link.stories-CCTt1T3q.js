import{j as e}from"./jsx-runtime-CKrituN3.js";import{L as x}from"./index-C-vBBRYD.js";import{s as I,r as L,p as j}from"./server.browser-rAMDWieH.js";import{a as E}from"./_Link-HyCNf-Lb.js";import{I as S}from"./IconCalendarEvent-3BPlFUi5.js";import{I as T}from"./IconArrowRight-pMXm72se.js";const b={title:"Components/Link/Html Implementation",id:"html-link",component:x,argTypes:E,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(g,n)=>{var o,c;const s=typeof n.component=="function"?n.component:typeof((o=n.component)==null?void 0:o.render)=="function"?(c=n.component)==null?void 0:c.render:null;return s?I.format(L(s(n.args)),{parser:"babel",plugins:[j]}):g}}}}},r={name:"Link",args:{href:"https://example.com",title:"Link",children:"Link"}},t={name:"Icon start",args:{href:"https://example.com",title:"Link",children:[e.jsx("span",{className:"utrecht-icon",children:e.jsx(S,{stroke:2})}),e.jsx("span",{children:"Text"})]}},a={name:"Icon end",args:{href:"https://example.com",title:"Link",children:[e.jsx("span",{children:"Text"}),e.jsx("span",{className:"utrecht-icon",children:e.jsx(T,{stroke:2})})]}};var p,m,i;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Link',
  args: {
    href: 'https://example.com',
    title: 'Link',
    children: 'Link'
  }
}`,...(i=(m=r.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var l,d,h;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Icon start',
  args: {
    href: 'https://example.com',
    title: 'Link',
    children: [<span className="utrecht-icon">
        <IconCalendarEvent stroke={2} />
      </span>, <span>Text</span>]
  }
}`,...(h=(d=t.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var u,f,k;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Icon end',
  args: {
    href: 'https://example.com',
    title: 'Link',
    children: [<span>Text</span>, <span className="utrecht-icon">
        <IconArrowRight stroke={2} />
      </span>]
  }
}`,...(k=(f=a.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};const _=["Default","IconStart","IconEnd"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:r,IconEnd:a,IconStart:t,__namedExportsOrder:_,default:b},Symbol.toStringTag,{value:"Module"}));export{y as L};
