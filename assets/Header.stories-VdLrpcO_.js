import{H as v}from"./Header-CAkghB0_.js";import{H as h}from"./HtmlTransformer-CIQzRuZl.js";const H={title:"Components/Header/Html Implementation",id:"html-header",component:v,argTypes:{state:{name:"State",description:"Simulation of the state of the header items.",control:{type:"select"},options:["default","active","hover","focus-visible"]},expanded:{name:"Aria expanded",description:"Simulation of the aria-expanded attribute of all items in the header which can expand.",control:{type:"select"},options:["false","true"]},variant:{name:"Variant",control:{type:"select"},options:["default","funnel","account"],table:{disable:!0}},account:{name:"Account",control:{type:"boolean"},table:{disable:!0}}},args:{state:"default",expanded:"false",variant:""},parameters:{status:{type:"BETA"},docs:{source:{transform:h}}}},e={name:"Header",args:{variant:"default"}},a={name:"Funnel",args:{variant:"funnel",account:!1}},n={name:"Funnel ingelogd",args:{variant:"funnel",account:!0}},t={name:"Mijn omgeving",args:{variant:"account",account:!0}};var r,o,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'Header',
  args: {
    variant: 'default'
  }
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var c,u,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Funnel',
  args: {
    variant: 'funnel',
    account: false
  }
}`,...(l=(u=a.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var i,m,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Funnel ingelogd',
  args: {
    variant: 'funnel',
    account: true
  }
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,f,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Mijn omgeving',
  args: {
    variant: 'account',
    account: true
  }
}`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const b=["Default","Funnel","FunnelAccount","Account"],F=Object.freeze(Object.defineProperty({__proto__:null,Account:t,Default:e,Funnel:a,FunnelAccount:n,__namedExportsOrder:b,default:H},Symbol.toStringTag,{value:"Module"}));export{F as H};
