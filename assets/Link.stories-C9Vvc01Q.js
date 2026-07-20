import{j as e}from"./jsx-runtime-CKrituN3.js";import{L as x}from"./index-dB9jn2jO.js";/* empty css                  */import{s as I,r as L,p as b}from"./server.browser-rAMDWieH.js";import{I as j}from"./IconCalendarEvent-3BPlFUi5.js";import{I as T}from"./IconArrowRight-pMXm72se.js";const _={title:{name:"Title",control:"text"},children:{name:"Children",control:"text"},rel:{name:"rel",control:"text"},target:{name:"Target",description:"Link target",control:{type:"select"},options:["_self","_blank","_parent","_top"]},placeholder:{name:"Placeholder",description:"Show the placeholder",control:{type:"boolean"},table:{type:{summary:["boolean"]}}}},S={title:"Components/Link/Html Implementation",id:"html-link",component:x,argTypes:_,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(g,n)=>{var s,c;const o=typeof n.component=="function"?n.component:typeof((s=n.component)==null?void 0:s.render)=="function"?(c=n.component)==null?void 0:c.render:null;return o?I.format(L(o(n.args)),{parser:"babel",plugins:[b]}):g}}}}},r={name:"Link",args:{href:"https://example.com",title:"Link",children:"Link"}},t={name:"Icon start",args:{href:"https://example.com",title:"Link",children:[e.jsx("span",{className:"utrecht-icon",children:e.jsx(j,{stroke:2})}),e.jsx("span",{children:"Text"})]}},a={name:"Icon end",args:{href:"https://example.com",title:"Link",children:[e.jsx("span",{children:"Text"}),e.jsx("span",{className:"utrecht-icon",children:e.jsx(T,{stroke:2})})]}};var p,l,i;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Link',
  args: {
    href: 'https://example.com',
    title: 'Link',
    children: 'Link'
  }
}`,...(i=(l=r.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var m,d,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(k=(f=a.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};const E=["Default","IconStart","IconEnd"],O=Object.freeze(Object.defineProperty({__proto__:null,Default:r,IconEnd:a,IconStart:t,__namedExportsOrder:E,default:S},Symbol.toStringTag,{value:"Module"}));export{r as D,t as I,O as L,a};
