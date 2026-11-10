import{s as m,r as d,p as f}from"./server.browser-rAMDWieH.js";import{j as n}from"./jsx-runtime-CKrituN3.js";/* empty css                  */import"./index-dB9jn2jO.js";const u={items:{control:"object"}},s=({items:r=[{text:"Placeholder",href:"#"}]})=>n.jsx("div",{className:"nijmegen-listbox",role:"listbox",children:n.jsx("ul",{className:"nijmegen-listbox__list",role:"list",children:r.map((e,o)=>n.jsx("li",{children:n.jsx("a",{href:e.href,className:"nijmegen-listbox__item",children:e.text})},o))})});try{s.displayName="ListboxStory",s.__docgenInfo={description:"",displayName:"ListboxStory",props:{items:{defaultValue:{value:"[{ text: 'Placeholder', href: '#' }]"},description:"",name:"items",required:!1,type:{name:"{ text: string; href: string; }[]"}}}}}catch{}const x={title:"Components/Listbox/Html Implementation",id:"html-listbox",component:s,argTypes:u,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(r,e)=>{var a,i;const o=typeof e.component=="function"?e.component:typeof((a=e.component)==null?void 0:a.render)=="function"?(i=e.component)==null?void 0:i.render:null;return o?m.format(d(o(e.args)),{parser:"babel",plugins:[f]}):r}}}}},t={args:{items:[{text:"Option #1",href:"#"},{text:"Option #2",href:"#"},{text:"Option #3",href:"#"}]}};var l,p,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    items: [{
      text: 'Option #1',
      href: '#'
    }, {
      text: 'Option #2',
      href: '#'
    }, {
      text: 'Option #3',
      href: '#'
    }]
  }
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const h=["Default"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:h,default:x},Symbol.toStringTag,{value:"Module"}));export{t as D,y as L};
