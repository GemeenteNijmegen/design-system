import{j as e}from"./jsx-runtime-CKrituN3.js";import{a as h}from"./index-N71Teeq5.js";import{a as u}from"./_Link-C6rKkPeO.js";import{I as x}from"./IconCalendarEvent-3BPlFUi5.js";import{I as k}from"./IconArrowRight-pMXm72se.js";const f={title:"Components/Link/React Implementation",id:"react-link",component:h,argTypes:u,args:{},parameters:{status:{type:"BETA"}}},n={name:"Link",args:{href:"https://example.com",title:"Link",children:"Link"}},r={name:"Icon start",args:{href:"https://example.com",title:"Link",children:[e.jsx("span",{className:"utrecht-icon",children:e.jsx(x,{stroke:2})}),e.jsx("span",{children:"Text"})]}},t={name:"Icon end",args:{href:"https://example.com",title:"Link",children:[e.jsx("span",{children:"Text"}),e.jsx("span",{className:"utrecht-icon",children:e.jsx(k,{stroke:2})})]}};var a,s,o;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Link',
  args: {
    href: 'https://example.com',
    title: 'Link',
    children: 'Link'
  }
}`,...(o=(s=n.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var c,i,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Icon start',
  args: {
    href: 'https://example.com',
    title: 'Link',
    children: [<span className="utrecht-icon">
        <IconCalendarEvent stroke={2} />
      </span>, <span>Text</span>]
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,l,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Icon end',
  args: {
    href: 'https://example.com',
    title: 'Link',
    children: [<span>Text</span>, <span className="utrecht-icon">
        <IconArrowRight stroke={2} />
      </span>]
  }
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const I=["Default","IconStart","IconEnd"],T=Object.freeze(Object.defineProperty({__proto__:null,Default:n,IconEnd:t,IconStart:r,__namedExportsOrder:I,default:f},Symbol.toStringTag,{value:"Module"}));export{n as D,r as I,T as L,t as a};
