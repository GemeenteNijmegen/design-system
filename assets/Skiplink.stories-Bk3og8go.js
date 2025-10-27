import{s as f,r as h,p as b}from"./server.browser-rAMDWieH.js";import{j as y}from"./jsx-runtime-CKrituN3.js";/* empty css                  */import{c as k}from"./clsx-B-dksMZM.js";const g={children:{name:"Children",control:"text",description:"Link text"},href:{name:"rel",control:"text"},visibilty:{name:"Visibilty",control:{type:"boolean"},description:"Visibilty"}},o=({children:i="",href:e="",visibilty:a=!1})=>y.jsx("a",{href:e,"aria-label":"Skip link",className:k("nijmegen-skip-link",a&&"nijmegen-skip-link--focus"),children:i});try{o.displayName="SkipLinkStory",o.__docgenInfo={description:"",displayName:"SkipLinkStory",props:{href:{defaultValue:{value:""},description:"",name:"href",required:!1,type:{name:"string"}},visibilty:{defaultValue:{value:"false"},description:"",name:"visibilty",required:!1,type:{name:"boolean"}}}}}catch{}const S={title:"Components/Skip link/Html Implementation",id:"html-skiplink",component:o,argTypes:g,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(i,e)=>{var s,t;const a=typeof e.component=="function"?e.component:typeof((s=e.component)==null?void 0:s.render)=="function"?(t=e.component)==null?void 0:t.render:null;return a?f.format(h(a(e.args)),{parser:"babel",plugins:[b]}):i}}}}},r={args:{href:"#main",children:"Ga naar hoofdinhoud",visibilty:!0}},n={name:"Visible on focus",args:{href:"#main",children:"Ga naar hoofdinhoud",visibilty:!1}};var l,c,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    href: '#main',
    children: 'Ga naar hoofdinhoud',
    visibilty: true
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,d,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Visible on focus',
  args: {
    href: '#main',
    children: 'Ga naar hoofdinhoud',
    visibilty: false
  }
}`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const _=["Default","VisibleOnFocus"],O=Object.freeze(Object.defineProperty({__proto__:null,Default:r,VisibleOnFocus:n,__namedExportsOrder:_,default:S},Symbol.toStringTag,{value:"Module"}));export{r as D,O as S,n as V};
