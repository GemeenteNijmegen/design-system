/* empty css              */import{s as y,r as f,p as T}from"./server.browser-rAMDWieH.js";import{B,a as P,d as h}from"./Button-DTt5Y0MJ.js";const _={title:"Components/Button/Html Implementation",id:"css-button",component:B,argTypes:P,args:h,parameters:{status:{type:"BETA"},docs:{source:{transform:(S,e)=>{var s,o;const t=typeof e.component=="function"?e.component:typeof((s=e.component)==null?void 0:s.render)=="function"?(o=e.component)==null?void 0:o.render:null;return t?y.format(f(t(e.args)),{parser:"babel",plugins:[T]}):S}}}}},a={name:"Primary",args:{children:"Primaire button",appearance:"Primary"},argTypes:{appearance:{table:{disable:!0}}}},r={args:{children:"Secundaire button",appearance:"Secondary"},argTypes:{appearance:{table:{disable:!0}}}},n={args:{children:"Aanvullende button",appearance:"Subtle"},argTypes:{appearance:{table:{disable:!0}}}};var p,c,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Primary',
  args: {
    children: 'Primaire button',
    appearance: 'Primary'
  },
  argTypes: {
    appearance: {
      table: {
        disable: true
      }
    }
  }
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var l,d,i;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'Secundaire button',
    appearance: 'Secondary'
  },
  argTypes: {
    appearance: {
      table: {
        disable: true
      }
    }
  }
}`,...(i=(d=r.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var m,b,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Aanvullende button',
    appearance: 'Subtle'
  },
  argTypes: {
    appearance: {
      table: {
        disable: true
      }
    }
  }
}`,...(g=(b=n.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const A=["Default","Secondary","Subtle"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Secondary:r,Subtle:n,__namedExportsOrder:A,default:_},Symbol.toStringTag,{value:"Module"}));export{j as B};
