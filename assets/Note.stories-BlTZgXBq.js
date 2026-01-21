import{s as D,r as T,p as I}from"./server.browser-rAMDWieH.js";import{j as p}from"./jsx-runtime-CKrituN3.js";import{H as P,P as V}from"./index-D7sGIe68.js";import{c as H}from"./clsx-B-dksMZM.js";const E={title:{name:"Title",control:"text",table:{defaultValue:""}},text:{name:"Text",control:"text",table:{defaultValue:""}},type:{description:"Type",control:{type:"select"},options:["default","info","error","ok","warning"],table:{defaultValue:"default"}}},u=({title:i="",text:r="",type:e="default"})=>{const c=H("utrecht-spotlight-section",{"utrecht-spotlight-section--info":e==="info","utrecht-spotlight-section--error":e==="error","utrecht-spotlight-section--ok":e==="ok","utrecht-spotlight-section--warning":e==="warning"}),l=e==="info"?"Notitie type Informatie":e==="error"?"Notitie type Foutmelding":e==="ok"?"Notitie type Succes":e==="warning"?"Notitie type Waarschuwing":"Notitie";return p.jsxs("div",{className:c,"aria-label":l,children:[p.jsx(P,{children:i}),p.jsx(V,{children:r})]})};try{u.displayName="NoteStory",u.__docgenInfo={description:"",displayName:"NoteStory",props:{title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string"}},text:{defaultValue:{value:""},description:"",name:"text",required:!1,type:{name:"string"}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"string"}}}}}catch{}const W={title:"Components/Note/Html Implementation",id:"html-note",argTypes:E,component:u,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(i,r)=>{var c,l;const e=typeof r.component=="function"?r.component:typeof((c=r.component)==null?void 0:c.render)=="function"?(l=r.component)==null?void 0:l.render:null;return e?D.format(T(e(r.args)),{parser:"babel",plugins:[I]}):i}}}}},t={name:"Note",args:{title:"Heading",text:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod"}},a={args:{...t.args,type:"info"}},o={args:{...t.args,type:"error"}},s={args:{...t.args,type:"ok"}},n={args:{...t.args,type:"warning"}};var d,m,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Note',
  args: {
    title: 'Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod'
  }
}`,...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var f,y,N;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: 'info'
  }
}`,...(N=(y=a.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var h,_,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: 'error'
  }
}`,...(x=(_=o.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var S,b,v;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: 'ok'
  }
}`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var j,k,w;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: 'warning'
  }
}`,...(w=(k=n.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const q=["Default","Info","Negative","Positive","Warning"],z=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Info:a,Negative:o,Positive:s,Warning:n,__namedExportsOrder:q,default:W},Symbol.toStringTag,{value:"Module"}));export{t as D,a as I,o as N,s as P,n as W,z as a};
