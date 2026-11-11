import{s as _,r as x,p as j}from"./server.browser-rAMDWieH.js";import{j as e}from"./jsx-runtime-CKrituN3.js";import{d as y,e as k,f as B,P as V}from"./index-CzVPJMJZ.js";/* empty css                  */const H={preHeading:{name:"Pre-heading",control:"text",table:{defaultValue:""}},heading:{name:"Heading",control:"text",table:{defaultValue:""}},content:{name:"Content",control:"text",table:{defaultValue:""}},image:{name:"Image",control:"text",table:{defaultValue:""}},image_alt:{name:"Image alt",control:"text",table:{defaultValue:""}},show_button:{name:"Show button",control:{type:"boolean"}},button_text:{name:"Button text",control:"text",table:{defaultValue:""}},button_href:{name:"Button href",control:"text",table:{defaultValue:""}}},l=({preHeading:a="",heading:t="",content:n="",image:o="",image_alt:i="",show_button:f=!1,button_text:h="",button_href:b="#"})=>e.jsx("div",{className:"nijmegen-feature-block",children:e.jsxs("div",{className:"nijmegen-feature-block__container",children:[e.jsxs("div",{className:"nijmegen-feature-block__content",children:[e.jsxs("div",{className:"nijmegen-feature-block__message",children:[(a||t)&&e.jsxs(y,{children:[a&&e.jsx(k,{children:a}),t&&e.jsx(B,{children:t})]}),n&&e.jsx(V,{children:n})]}),f===!0&&e.jsx("a",{className:"utrecht-button utrecht-button--primary-action",href:b,children:h})]}),o&&e.jsx("figure",{className:"nijmegen-feature-block__figure",children:e.jsx("img",{loading:"lazy",src:o,alt:i})})]})});try{l.displayName="FeatureBlockStory",l.__docgenInfo={description:"",displayName:"FeatureBlockStory",props:{preHeading:{defaultValue:{value:""},description:"",name:"preHeading",required:!1,type:{name:"string"}},heading:{defaultValue:{value:""},description:"",name:"heading",required:!1,type:{name:"string"}},content:{defaultValue:{value:""},description:"",name:"content",required:!1,type:{name:"string"}},image:{defaultValue:{value:""},description:"",name:"image",required:!1,type:{name:"string"}},image_alt:{defaultValue:{value:""},description:"",name:"image_alt",required:!1,type:{name:"string"}},show_button:{defaultValue:{value:"false"},description:"",name:"show_button",required:!1,type:{name:"boolean"}},button_text:{defaultValue:{value:""},description:"",name:"button_text",required:!1,type:{name:"string"}},button_href:{defaultValue:{value:"#"},description:"",name:"button_href",required:!1,type:{name:"string"}}}}}catch{}const v={title:"Components/Feature block/Html Implementation",id:"html-FeatureBlock",argTypes:H,component:l,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(a,t)=>{var o,i;const n=typeof t.component=="function"?t.component:typeof((o=t.component)==null?void 0:o.render)=="function"?(i=t.component)==null?void 0:i.render:null;return n?_.format(x(n(t.args)),{parser:"babel",plugins:[j]}):a}}}}},r={name:"Feature block",args:{preHeading:"Pre-heading",heading:"Heading",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",image:"https://picsum.photos/640/360/",image_alt:"Placeholder image",show_button:!0,button_text:"Button",button_href:"#"}},s={name:"Feature block - no button",args:{preHeading:"Pre-heading",heading:"Heading",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",image:"https://picsum.photos/640/360/",image_alt:"Placeholder image",show_button:!1,button_text:"Button",button_href:"#"}};var u,c,d;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Feature block',
  args: {
    preHeading: 'Pre-heading',
    heading: 'Heading',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
    image: 'https://picsum.photos/640/360/',
    image_alt: 'Placeholder image',
    show_button: true,
    button_text: 'Button',
    button_href: '#'
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,p,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Feature block - no button',
  args: {
    preHeading: 'Pre-heading',
    heading: 'Heading',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
    image: 'https://picsum.photos/640/360/',
    image_alt: 'Placeholder image',
    show_button: false,
    button_text: 'Button',
    button_href: '#'
  }
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const P=["Default","NoButton"],w=Object.freeze(Object.defineProperty({__proto__:null,Default:r,NoButton:s,__namedExportsOrder:P,default:v},Symbol.toStringTag,{value:"Module"}));export{r as D,w as F,s as N};
