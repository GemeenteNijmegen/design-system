import{H as h}from"./HtmlTransformer-CIQzRuZl.js";import{a as v}from"./Header-CAkghB0_.js";import"./server.browser-rAMDWieH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CBqU2yxZ.js";import"./jsx-runtime-CKrituN3.js";/* empty css                  */import"./clsx-B-dksMZM.js";import"./MobileMenu-C7OjwW6o.js";import"./index-2t7QHUHa.js";import"./clsx-DxZ0A2-Z.js";import"./extends-CCbyfPlC.js";import"./index.min-KCTtBp7g.js";import"./createReactComponent-D_5DJZVZ.js";import"./IconExternalLink-DvrFVVe4.js";const E={title:"Components/Header/Web Component Implementation",id:"web-component-header",component:v,argTypes:{state:{name:"State",description:"Simulation of the state of the header items.",control:{type:"select"},options:["default","active","hover","focus-visible"]},variant:{name:"Variant",control:{type:"select"},options:["default","funnel","account"],table:{disable:!0}},account:{name:"Account",control:{type:"boolean"},table:{disable:!0}}},args:{state:"default"},parameters:{status:{type:"BETA"},docs:{source:{transform:h},description:{component:'When an `aria-expanded` attribute is set on the header items, the web component will automatically toggle the `expanded` state of the header items on click. So if you have a header item with a following mega-menu make sure you set the `aria-expanded="false"` attribute on the button and make sure that a div with the `nijmegen-header__panel` class is the next sibling of the button.'}}}},e={name:"Header",args:{variant:"default"}},t={name:"Funnel",args:{variant:"funnel",account:!1}},a={name:"Funnel ingelogd",args:{variant:"funnel",account:!0}},n={name:"Mijn omgeving",args:{variant:"account",account:!0}};var r,o,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'Header',
  args: {
    variant: 'default'
  }
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var c,i,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Funnel',
  args: {
    variant: 'funnel',
    account: false
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var u,l,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Funnel ingelogd',
  args: {
    variant: 'funnel',
    account: true
  }
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,g,f;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Mijn omgeving',
  args: {
    variant: 'account',
    account: true
  }
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const M=["Default","Funnel","FunnelAccount","Account"];export{n as Account,e as Default,t as Funnel,a as FunnelAccount,M as __namedExportsOrder,E as default};
