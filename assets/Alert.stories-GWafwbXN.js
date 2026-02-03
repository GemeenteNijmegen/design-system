import{s as v,r as D,p as T}from"./server.browser-rAMDWieH.js";import{A as k,a as E}from"./_Alert-BBj8y1eT.js";const O={title:"Components/Alert/Html Implementation",id:"html-alert",component:k,argTypes:E,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(_,e)=>{var n,p;const o=typeof e.component=="function"?e.component:typeof((n=e.component)==null?void 0:n.render)=="function"?(p=e.component)==null?void 0:p.render:null;return o?v.format(D(o(e.args)),{parser:"babel",plugins:[T]}):_}}}}},r={},a={args:{...r.args,type:"error"}},s={args:{...r.args,type:"ok"}},t={args:{...r.args,type:"warning"}};var c,m,i;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(i=(m=r.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var u,l,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: 'error'
  }
}`,...(g=(l=a.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var d,f,y;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: 'ok'
  }
}`,...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var S,b,A;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: 'warning'
  }
}`,...(A=(b=t.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};const P=["Default","Negative","Positive","Warning"],B=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Negative:a,Positive:s,Warning:t,__namedExportsOrder:P,default:O},Symbol.toStringTag,{value:"Module"}));export{B as A};
