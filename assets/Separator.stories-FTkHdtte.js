import{j as o}from"./jsx-runtime-CKrituN3.js";import{S}from"./index-4APgs2F3.js";import{s as f,r as v,p as g}from"./server.browser-rAMDWieH.js";const h=()=>o.jsx("div",{role:"separator","aria-hidden":"true",className:"utrecht-separator"}),b=({element:a})=>a==="div"?o.jsx(h,{}):o.jsx(S,{"aria-hidden":"true"}),y={title:"Components/Separator/Html Implementation",id:"html-separator",component:b,argTypes:{element:{control:{type:"select"},options:["div","separator"]}},args:{element:"separator"},parameters:{status:{type:"BETA"},docs:{source:{transform:(a,e)=>{var n,p;const s=typeof e.component=="function"?e.component:typeof((n=e.component)==null?void 0:n.render)=="function"?(p=e.component)==null?void 0:p.render:null;return s?f.format(v(s(e.args)),{parser:"babel",plugins:[g]}):a}}}}},r={name:"Separator"},t={args:{element:"div"},parameters:{docs:{description:{story:"Markup with a `<div>` element, with additional attributes to give the correct ARIA role. Styling via `utrecht-separator` class name."}}}};var i,c,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Separator'
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var l,d,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    element: 'div'
  },
  parameters: {
    docs: {
      description: {
        story: 'Markup with a \`<div>\` element, with additional attributes to give the correct ARIA role. Styling via \`utrecht-separator\` class name.'
      }
    }
  }
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const j=["Default","SeparatorDivSupport"],w=Object.freeze(Object.defineProperty({__proto__:null,Default:r,SeparatorDivSupport:t,__namedExportsOrder:j,default:y},Symbol.toStringTag,{value:"Module"}));export{w as S};
