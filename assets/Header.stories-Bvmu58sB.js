import{H as h}from"./HtmlTransformer-CIQzRuZl.js";import{a as b}from"./Header-Du4wAg0B.js";const v={title:"Components/Header/Web Component Implementation",id:"web-component-header",component:b,argTypes:{state:{name:"State",description:"Simulation of the state of the header items.",control:{type:"select"},options:["default","active","hover","focus-visible"]},variant:{name:"Variant",control:{type:"select"},options:["default","funnel","account"],table:{disable:!0}},account:{name:"Account",control:{type:"boolean"},table:{disable:!0}}},args:{state:"default"},parameters:{status:{type:"BETA"},docs:{source:{transform:h},description:{component:'When an `aria-expanded` attribute is set on the header items, the web component will automatically toggle the `expanded` state of the header items on click. So if you have a header item with a following mega-menu make sure you set the `aria-expanded="false"` attribute on the button and make sure that a div with the `nijmegen-header__panel` class is the next sibling of the button.'}}}},e={name:"Header",args:{variant:"default"}},a={name:"Funnel",args:{variant:"funnel",account:!1}},t={name:"Funnel ingelogd",args:{variant:"funnel",account:!0}},n={name:"Mijn omgeving",args:{variant:"account",account:!0}};var o,r,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Header',
  args: {
    variant: 'default'
  }
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var c,u,i;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Funnel',
  args: {
    variant: 'funnel',
    account: false
  }
}`,...(i=(u=a.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var l,m,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Funnel ingelogd',
  args: {
    variant: 'funnel',
    account: true
  }
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,g,f;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Mijn omgeving',
  args: {
    variant: 'account',
    account: true
  }
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const y=["Default","Funnel","FunnelAccount","Account"],H=Object.freeze(Object.defineProperty({__proto__:null,Account:n,Default:e,Funnel:a,FunnelAccount:t,__namedExportsOrder:y,default:v},Symbol.toStringTag,{value:"Module"}));export{H};
