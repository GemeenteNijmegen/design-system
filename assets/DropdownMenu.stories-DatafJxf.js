import{s as m,r as c,p as u}from"./server.browser-rAMDWieH.js";import{j as a}from"./jsx-runtime-CKrituN3.js";/* empty css                  */const g={items:{control:"object"}},o=({items:r=[{text:"Placeholder",href:"#",lang:"#"}]})=>a.jsx("div",{className:"nijmegen-dropdown-menu",children:a.jsx("ul",{className:"nijmegen-dropdown-menu__list",role:"list",children:r.map((e,t)=>a.jsx("li",{children:a.jsx("a",{href:e.href,...e.lang&&{lang:e.lang},className:"nijmegen-dropdown-menu__item",children:e.text})},t))})});try{o.displayName="DropdownMenuStory",o.__docgenInfo={description:"",displayName:"DropdownMenuStory",props:{items:{defaultValue:{value:"[{ text: 'Placeholder', href: '#', lang: '#' }]"},description:"",name:"items",required:!1,type:{name:"{ text: string; href: string; lang?: string; }[]"}}}}}catch{}const f={title:"Components/Dropdown Menu/Html Implementation",id:"html-dropdown-menu",argTypes:g,component:o,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(r,e)=>{var s,l;const t=typeof e.component=="function"?e.component:typeof((s=e.component)==null?void 0:s.render)=="function"?(l=e.component)==null?void 0:l.render:null;return t?m.format(c(t(e.args)),{parser:"babel",plugins:[u]}):r}}}}},n={name:"Dropdown menu",args:{items:[{text:"English (Engels)",href:"#",lang:"en"},{text:"Deutsch (Duits)",href:"#",lang:"de"},{text:"Français (Frans)",href:"#",lang:"fr"}]}};var p,i,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Dropdown menu',
  args: {
    items: [{
      text: 'English (Engels)',
      href: '#',
      lang: 'en'
    }, {
      text: 'Deutsch (Duits)',
      href: '#',
      lang: 'de'
    }, {
      text: 'Français (Frans)',
      href: '#',
      lang: 'fr'
    }]
  }
}`,...(d=(i=n.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const h=["Default"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:n,__namedExportsOrder:h,default:f},Symbol.toStringTag,{value:"Module"}));export{n as D,j as a};
