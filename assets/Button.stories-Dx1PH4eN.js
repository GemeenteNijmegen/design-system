/* empty css              */import{s as P,r as h,p as O}from"./server.browser-rAMDWieH.js";import{B as _,a as A,d as v}from"./Button-BLfOhI6e.js";const E={title:"Components/Button/Html Implementation",id:"css-button",component:_,argTypes:A,args:v,parameters:{status:{type:"BETA"},docs:{source:{transform:(B,e)=>{var o,p;const s=typeof e.component=="function"?e.component:typeof((o=e.component)==null?void 0:o.render)=="function"?(p=e.component)==null?void 0:p.render:null;return s?P.format(h(s(e.args)),{parser:"babel",plugins:[O]}):B}}}}},a={name:"Primary",args:{children:"Primaire button",appearance:"Primary"},argTypes:{appearance:{table:{disable:!0}}}},r={args:{children:"Secundaire button",appearance:"Secondary"},argTypes:{appearance:{table:{disable:!0}}}},n={args:{children:"Aanvullende button",appearance:"Subtle"},argTypes:{appearance:{table:{disable:!0}}}},t={args:{children:"",appearance:"Primary",iconBeginning:"Tabler example",iconOnly:!0},argTypes:{appearance:{table:{disable:!0}}}};var c,l,i;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(i=(l=a.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var u,d,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var b,g,y;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(y=(g=n.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var S,f,T;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: '',
    appearance: 'Primary',
    iconBeginning: 'Tabler example',
    iconOnly: true
  },
  argTypes: {
    appearance: {
      table: {
        disable: true
      }
    }
  }
}`,...(T=(f=t.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};const I=["Default","Secondary","Subtle","IconOnly"],k=Object.freeze(Object.defineProperty({__proto__:null,Default:a,IconOnly:t,Secondary:r,Subtle:n,__namedExportsOrder:I,default:E},Symbol.toStringTag,{value:"Module"}));export{k as B};
