import{s as x,r as j,p as H}from"./server.browser-rAMDWieH.js";import{j as e}from"./jsx-runtime-CKrituN3.js";import{d as I,P as N}from"./index-Uj-N_Xw0.js";/* empty css                  */import{c as v}from"./clsx-B-dksMZM.js";const S={title:{name:"Title",control:"text",table:{defaultValue:""}},text:{name:"Text",control:"text",table:{defaultValue:""}},image:{name:"Image",control:"text",table:{defaultValue:""}},image_alt:{name:"Image alt",control:"text",table:{defaultValue:""}},button_group:{name:"Show button group",control:{type:"boolean"}},type:{name:"Type",control:{type:"select"},options:["home","category","image"]}},c=({title:o="",text:t="",image:r="",image_alt:m="",type:a="",button_group:b=!1})=>e.jsxs("section",{className:v("nijmegen-hero",{"nijmegen-hero--home":a==="home","nijmegen-hero--background-image":a==="image"}),children:[e.jsx("div",{className:"nijmegen-hero__container",children:e.jsxs("div",{className:"nijmegen-hero__content",children:[e.jsxs("div",{className:"nijmegen-hero__content--heading",children:[o&&e.jsx(I,{children:o}),t&&a==="home"&&e.jsx("p",{className:"utrecht-heading-2",children:t})]}),t&&a!=="home"&&e.jsx(N,{children:t}),b===!0&&e.jsxs("p",{role:"group",className:"utrecht-button-group",children:[e.jsx("button",{className:"utrecht-button utrecht-button--primary-action",type:"button",children:"Button"}),e.jsx("button",{className:"utrecht-button utrecht-button--secondary-action",type:"button",children:"Button"})]})]})}),r&&(a==="home"||a==="image")&&e.jsx("img",{className:"nijmegen-hero__image",src:r,alt:m})]});try{c.displayName="HeroStory",c.__docgenInfo={description:"",displayName:"HeroStory",props:{title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string"}},text:{defaultValue:{value:""},description:"",name:"text",required:!1,type:{name:"string"}},image:{defaultValue:{value:""},description:"",name:"image",required:!1,type:{name:"string"}},image_alt:{defaultValue:{value:""},description:"",name:"image_alt",required:!1,type:{name:"string"}},type:{defaultValue:{value:""},description:"",name:"type",required:!1,type:{name:"string"}},button_group:{defaultValue:{value:"false"},description:"",name:"button_group",required:!1,type:{name:"boolean"}}}}}catch{}const V={title:"Components/Hero/Html Implementation",id:"html-hero",argTypes:S,component:c,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(o,t)=>{var m,a;const r=typeof t.component=="function"?t.component:typeof((m=t.component)==null?void 0:m.render)=="function"?(a=t.component)==null?void 0:a.render:null;return r?x.format(j(r(t.args)),{parser:"babel",plugins:[H]}):o}}}}},n={name:"Hero homepage",args:{title:"Heading",text:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod",image:"https://picsum.photos/640/360/",image_alt:"Image description",button_group:!1,type:"home"}},s={name:"Hero category, without Image",args:{title:"Heading",text:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod",button_group:!1,type:"category"}},i={name:"Hero category, with Image",args:{title:"Heading",text:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod",image:"https://picsum.photos/640/360/",image_alt:"Image description",button_group:!0,type:"image"}};var u,l,d;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Hero homepage',
  args: {
    title: 'Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    image: 'https://picsum.photos/640/360/',
    image_alt: 'Image description',
    button_group: false,
    type: 'home'
  }
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,g,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Hero category, without Image',
  args: {
    title: 'Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    button_group: false,
    type: 'category'
  }
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,_,y;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Hero category, with Image',
  args: {
    title: 'Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    image: 'https://picsum.photos/640/360/',
    image_alt: 'Image description',
    button_group: true,
    type: 'image'
  }
}`,...(y=(_=i.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};const T=["Default","Category","BackgroundImage"],E=Object.freeze(Object.defineProperty({__proto__:null,BackgroundImage:i,Category:s,Default:n,__namedExportsOrder:T,default:V},Symbol.toStringTag,{value:"Module"}));export{s as C,n as D,E as H};
