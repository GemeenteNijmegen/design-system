import{j as z}from"./jsx-runtime-CKrituN3.js";import{s as B,r as D,p as M}from"./server.browser-rAMDWieH.js";const V=({level:l,children:e,...c})=>{const d=`h${l}`,p=`utrecht-heading-${l}`;return z.jsx(d,{className:p,...c,children:e})},$={title:"Components/Heading/Html Implementation",id:"css-heading",component:V,argTypes:{children:{name:"Content",description:"Heading text",defaultValue:"Heading text",control:{type:"text"}},level:{name:"Level",description:"Heading level",control:{type:"select"},options:[1,2,3,4,5,6],defaultValue:1,table:{type:{summary:["number"]}}}},args:{children:"The quick brown fox jumps over the lazy dog",level:1},parameters:{status:{type:"BETA"},docs:{source:{transform:(l,e)=>{var d,p;const c=typeof e.component=="function"?e.component:typeof((d=e.component)==null?void 0:d.render)=="function"?(p=e.component)==null?void 0:p.render:null;return c?B.format(D(c(e.args)),{parser:"babel",plugins:[M]}):l}}}}},n={name:"Heading"},a={name:"Heading 2",args:{level:2},argTypes:{level:{control:!1}}},r={name:"Heading 3",args:{level:3},argTypes:{level:{control:!1}}},s={name:"Heading 4",args:{level:4},argTypes:{level:{control:!1}}},o={name:"Heading 5",args:{level:5},argTypes:{level:{control:!1}}},t={name:"Heading 6",args:{level:6},argTypes:{level:{control:!1}}};var i,g,m;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Heading'
}`,...(m=(g=n.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var u,H,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Heading 2',
  args: {
    level: 2
  },
  argTypes: {
    level: {
      control: false
    }
  }
}`,...(f=(H=a.parameters)==null?void 0:H.docs)==null?void 0:f.source}}};var v,y,T;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Heading 3',
  args: {
    level: 3
  },
  argTypes: {
    level: {
      control: false
    }
  }
}`,...(T=(y=r.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var S,b,h;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Heading 4',
  args: {
    level: 4
  },
  argTypes: {
    level: {
      control: false
    }
  }
}`,...(h=(b=s.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var j,x,_;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Heading 5',
  args: {
    level: 5
  },
  argTypes: {
    level: {
      control: false
    }
  }
}`,...(_=(x=o.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var E,O,k;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Heading 6',
  args: {
    level: 6
  },
  argTypes: {
    level: {
      control: false
    }
  }
}`,...(k=(O=t.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};const q=["Default","Heading2","Heading3","Heading4","Heading5","Heading6"],I=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Heading2:a,Heading3:r,Heading4:s,Heading5:o,Heading6:t,__namedExportsOrder:q,default:$},Symbol.toStringTag,{value:"Module"}));export{I as H};
