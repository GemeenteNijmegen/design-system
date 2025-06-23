import{j as a}from"./jsx-runtime-CKrituN3.js";import{a as g,I as b}from"./_ButtonGroup-CgdqYaYo.js";import{B as t}from"./index.esm-DF6Ih14a.js";import{B}from"./index-I-h-doQp.js";import{s as k,r as y,p as x}from"./server.browser-rAMDWieH.js";const j={title:"Components/Button Group/Html Implementation",id:"css-button-group",component:B,argTypes:g,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(f,n)=>{var s,p;const o=typeof n.component=="function"?n.component:typeof((s=n.component)==null?void 0:s.render)=="function"?(p=n.component)==null?void 0:p.render:null;return o?k.format(y(o(n.args)),{parser:"babel",plugins:[x]}):f}}}}},e={args:{children:[a.jsx(t,{appearance:"primary-action-button",children:"Opslaan en doorgaan"},"1"),a.jsx(t,{appearance:"secondary-action-button",children:"Terug"},"2")]}},r={args:{children:[a.jsxs(t,{appearance:"primary-action-button",iconBeginning:"Tabler example",children:["Afspraak maken",a.jsx(b,{stroke:2})]},"1"),a.jsx(t,{appearance:"subtle-button",children:"Annuleren"},"2")]}};var c,u,i;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: [<Button key="1" appearance="primary-action-button">
        Opslaan en doorgaan
      </Button>, <Button key="2" appearance="secondary-action-button">
        Terug
      </Button>]
  }
}`,...(i=(u=e.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var m,l,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: [<Button key="1" appearance="primary-action-button" iconBeginning="Tabler example">
        Afspraak maken
        <IconExternalLink stroke={2} />
      </Button>, <Button key="2" appearance="subtle-button">
        Annuleren
      </Button>]
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const h=["Default","DefaultVariant"],O=Object.freeze(Object.defineProperty({__proto__:null,Default:e,DefaultVariant:r,__namedExportsOrder:h,default:j},Symbol.toStringTag,{value:"Module"}));export{O as B};
