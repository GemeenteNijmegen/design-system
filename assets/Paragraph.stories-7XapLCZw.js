import{P as S}from"./index.esm--jZWF5K0.js";import{s as b,r as v,p as q}from"./server.browser-rAMDWieH.js";const y={title:"Components/Paragraph/Html Implementation",id:"css-paragraph",component:S,argTypes:{children:{description:"Content of the paragraph.",control:"text"},lead:{description:"Lead paragraph",control:"boolean"},small:{description:"Paragraph with small print",control:"boolean"}},args:{children:"",lead:!1,small:!1},parameters:{status:{type:"BETA"},docs:{source:{transform:(f,e)=>{var o,i;const n=typeof e.component=="function"?e.component:typeof((o=e.component)==null?void 0:o.render)=="function"?(i=e.component)==null?void 0:i.render:null;return n?b.format(v(n(e.args)),{parser:"babel",plugins:[q]}):f}}}}},a={args:{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},parameters:{docs:{description:{story:"Styling via `utrecht-paragraph` class name."}}}},r={args:{...a.args,lead:!0}},t={args:{...a.args,small:!0},name:"Small print",parameters:{docs:{description:{story:"Styling via the `.utrecht-paragraph` and `.utrecht-paragraph--small` modifier class name"}}}};var s,l,c;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling via \`utrecht-paragraph\` class name.'
      }
    }
  }
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,u,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    lead: true
  }
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var d,g,h;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    small: true
  },
  name: 'Small print',
  parameters: {
    docs: {
      description: {
        story: 'Styling via the \`.utrecht-paragraph\` and \`.utrecht-paragraph--small\` modifier class name'
      }
    }
  }
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const P=["Default","Lead","SmallPrint"],_=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Lead:r,SmallPrint:t,__namedExportsOrder:P,default:y},Symbol.toStringTag,{value:"Module"}));export{_ as P};
