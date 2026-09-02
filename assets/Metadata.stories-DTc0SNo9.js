import{j as e}from"./jsx-runtime-CKrituN3.js";import{s as P,r as N,p as L}from"./server.browser-rAMDWieH.js";/* empty css                  */import{c as A}from"./clsx-B-dksMZM.js";import{I as s}from"./IconCalendarEvent-3BPlFUi5.js";import{I as m}from"./IconClock-Droxfkbk.js";import{I as d}from"./IconMapPin-wVF2mRzo.js";import{I as _}from"./IconUser-CHKGFGGR.js";import{c as h}from"./createReactComponent-D_5DJZVZ.js";import{I as S,a as w}from"./IconPhone-Cbv9qV1-.js";/**
 * @license @tabler/icons-react v3.20.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var C=h("outline","brand-twitter","IconBrandTwitter",[["path",{d:"M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z",key:"svg-0"}]]);/**
 * @license @tabler/icons-react v3.20.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var B=h("outline","mail","IconMail",[["path",{d:"M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z",key:"svg-0"}],["path",{d:"M3 7l9 6l9 -6",key:"svg-1"}]]);/**
 * @license @tabler/icons-react v3.20.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var D=h("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]]);/**
 * @license @tabler/icons-react v3.20.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var E=h("outline","shield-check","IconShieldCheck",[["path",{d:"M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06",key:"svg-0"}],["path",{d:"M15 19l2 2l4 -4",key:"svg-1"}]]);const G={meta:{name:"Meta",control:{type:"object"},table:{defaultValue:""}},layout:{name:"Layout",description:"Layout of the metadata",control:{type:"select"},options:["vertical","horizontal"]}},p=({meta:l=[],layout:a="vertical"})=>e.jsx("ul",{className:A("nijmegen-metadata",a==="horizontal"&&"nijmegen-metadata__horizontal"),children:l.map((n,c)=>e.jsxs("li",{className:"nijmegen-metadata__item",children:[n.icon,n.children]},c))});try{p.displayName="MetadataStory",p.__docgenInfo={description:"",displayName:"MetadataStory",props:{meta:{defaultValue:{value:"[] as { children: string; icon: any }[]"},description:"",name:"meta",required:!1,type:{name:"{ children: string; icon: any; }[]"}},layout:{defaultValue:{value:"vertical"},description:"",name:"layout",required:!1,type:{name:"string"}}}}}catch{}const V={title:"Components/Metadata/Html Implementation",id:"html-metadata",argTypes:G,component:p,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(l,a)=>{var c,u;const n=typeof a.component=="function"?a.component:typeof((c=a.component)==null?void 0:c.render)=="function"?(u=a.component)==null?void 0:u.render:null;return n?P.format(N(n(a.args)),{parser:"babel",plugins:[L]}):l}}}}},r={name:"Metadata vertical",args:{layout:"vertical",meta:[{children:"15 maart 2025",icon:e.jsx(s,{"aria-label":"Datum: "})},{children:"08:30 uur",icon:e.jsx(m,{"aria-label":"Tijd: "})},{children:"Gemeente Nijmegen, vergaderzaal 3",icon:e.jsx(d,{"aria-label":"Locatie: "})}]}},i={name:"Metadata horizontal",args:{layout:"horizontal",meta:[{children:"15 maart 2025",icon:e.jsx(s,{"aria-label":"Datum: "})},{children:"08:30 uur",icon:e.jsx(m,{"aria-label":"Tijd: "})},{children:"Gemeente Nijmegen, vergaderzaal 3",icon:e.jsx(d,{"aria-label":"Locatie: "})}]}},o={name:"Metadata vertical 10 items",args:{layout:"vertical",meta:[{children:"15 maart 2025",icon:e.jsx(s,{"aria-label":"Datum: "})},{children:"08:30 uur",icon:e.jsx(m,{"aria-label":"Tijd: "})},{children:"Gemeente Nijmegen, vergaderzaal 3",icon:e.jsx(d,{"aria-label":"Locatie: "})},{children:"Contactpersoon: Sophie de Vries",icon:e.jsx(_,{})},{children:"Bewerkt door Thomas op 20 maart",icon:e.jsx(D,{})},{children:"Alleen intern zichtbaar",icon:e.jsx(E,{})},{children:"14 024 (werkdagen 09.00 - 17.00)",icon:e.jsx(S,{"aria-label":"Telefoonnummer: "})},{children:"info@nijmegen.nl",icon:e.jsx(B,{"aria-label":"E-mailadres: "})},{children:"/gem_nijmegen",icon:e.jsx(C,{"aria-label":"Twitter: "})},{children:"/gemeentenijmegen",icon:e.jsx(w,{"aria-label":"Instagram: "})}]}},t={name:"Metadata horizontal 10 items",args:{layout:"horizontal",meta:[{children:"15 maart 2025",icon:e.jsx(s,{"aria-label":"Datum: "})},{children:"08:30 uur",icon:e.jsx(m,{"aria-label":"Tijd: "})},{children:"Gemeente Nijmegen, vergaderzaal 3",icon:e.jsx(d,{"aria-label":"Locatie: "})},{children:"Contactpersoon: Sophie de Vries",icon:e.jsx(_,{})},{children:"Bewerkt door Thomas op 20 maart",icon:e.jsx(D,{})},{children:"Alleen intern zichtbaar",icon:e.jsx(E,{})},{children:"14 024 (werkdagen 09.00 - 17.00)",icon:e.jsx(S,{"aria-label":"Telefoonnummer: "})},{children:"info@nijmegen.nl",icon:e.jsx(B,{"aria-label":"E-mailadres: "})},{children:"/gem_nijmegen",icon:e.jsx(C,{"aria-label":"Twitter: "})},{children:"/gemeentenijmegen",icon:e.jsx(w,{"aria-label":"Instagram: "})}]}};var g,j,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Metadata vertical',
  args: {
    layout: 'vertical',
    meta: ([{
      children: '15 maart 2025',
      icon: <IconCalendarEvent aria-label="Datum: " />
    }, {
      children: '08:30 uur',
      icon: <IconClock aria-label="Tijd: " />
    }, {
      children: 'Gemeente Nijmegen, vergaderzaal 3',
      icon: <IconMapPin aria-label="Locatie: " />
    }] as Array<{
      children: string;
      icon: any;
    }>)
  }
}`,...(b=(j=r.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var I,y,v;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Metadata horizontal',
  args: {
    layout: 'horizontal',
    meta: ([{
      children: '15 maart 2025',
      icon: <IconCalendarEvent aria-label="Datum: " />
    }, {
      children: '08:30 uur',
      icon: <IconClock aria-label="Tijd: " />
    }, {
      children: 'Gemeente Nijmegen, vergaderzaal 3',
      icon: <IconMapPin aria-label="Locatie: " />
    }] as Array<{
      children: string;
      icon: any;
    }>)
  }
}`,...(v=(y=i.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var f,M,x;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Metadata vertical 10 items',
  args: {
    layout: 'vertical',
    meta: ([{
      children: '15 maart 2025',
      icon: <IconCalendarEvent aria-label="Datum: " />
    }, {
      children: '08:30 uur',
      icon: <IconClock aria-label="Tijd: " />
    }, {
      children: 'Gemeente Nijmegen, vergaderzaal 3',
      icon: <IconMapPin aria-label="Locatie: " />
    }, {
      children: 'Contactpersoon: Sophie de Vries',
      icon: <IconUser />
    }, {
      children: 'Bewerkt door Thomas op 20 maart',
      icon: <IconPencil />
    }, {
      children: 'Alleen intern zichtbaar',
      icon: <IconShieldCheck />
    }, {
      children: '14 024 (werkdagen 09.00 - 17.00)',
      icon: <IconPhone aria-label="Telefoonnummer: " />
    }, {
      children: 'info@nijmegen.nl',
      icon: <IconMail aria-label="E-mailadres: " />
    }, {
      children: '/gem_nijmegen',
      icon: <IconBrandTwitter aria-label="Twitter: " />
    }, {
      children: '/gemeentenijmegen',
      icon: <IconBrandInstagram aria-label="Instagram: " />
    }] as Array<{
      children: string;
      icon: any;
    }>)
  }
}`,...(x=(M=o.parameters)==null?void 0:M.docs)==null?void 0:x.source}}};var z,T,k;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Metadata horizontal 10 items',
  args: {
    layout: 'horizontal',
    meta: ([{
      children: '15 maart 2025',
      icon: <IconCalendarEvent aria-label="Datum: " />
    }, {
      children: '08:30 uur',
      icon: <IconClock aria-label="Tijd: " />
    }, {
      children: 'Gemeente Nijmegen, vergaderzaal 3',
      icon: <IconMapPin aria-label="Locatie: " />
    }, {
      children: 'Contactpersoon: Sophie de Vries',
      icon: <IconUser />
    }, {
      children: 'Bewerkt door Thomas op 20 maart',
      icon: <IconPencil />
    }, {
      children: 'Alleen intern zichtbaar',
      icon: <IconShieldCheck />
    }, {
      children: '14 024 (werkdagen 09.00 - 17.00)',
      icon: <IconPhone aria-label="Telefoonnummer: " />
    }, {
      children: 'info@nijmegen.nl',
      icon: <IconMail aria-label="E-mailadres: " />
    }, {
      children: '/gem_nijmegen',
      icon: <IconBrandTwitter aria-label="Twitter: " />
    }, {
      children: '/gemeentenijmegen',
      icon: <IconBrandInstagram aria-label="Instagram: " />
    }] as Array<{
      children: string;
      icon: any;
    }>)
  }
}`,...(k=(T=t.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const H=["Default","DefaultHorizontal","Multiple","MultipleHorizontal"],Y=Object.freeze(Object.defineProperty({__proto__:null,Default:r,DefaultHorizontal:i,Multiple:o,MultipleHorizontal:t,__namedExportsOrder:H,default:V},Symbol.toStringTag,{value:"Module"}));export{r as D,o as M,i as a,t as b,Y as c};
