import{s as L,r as q,p as w}from"./server.browser-rAMDWieH.js";import{j as e}from"./jsx-runtime-CKrituN3.js";import{d as B,P as T}from"./index-y1jeV7E6.js";import{c as A}from"./clsx-B-dksMZM.js";import{b as E,S as O}from"./_Search-DSDW7Ey7.js";/* empty css                  */const P={title:{name:"Title",control:"text",table:{defaultValue:""}},text:{name:"Text",control:"text",table:{defaultValue:""}},image:{name:"Image",control:"text",table:{defaultValue:""}},image_alt:{name:"Image alt",control:"text",table:{defaultValue:""}},button_group:{name:"Show button group",control:{type:"boolean"}},type:{name:"Type",control:{type:"select"},options:["home","category","image","background-image"]},autocomplete:{name:"Autocomplete example",control:"boolean"}},l=({title:o="",text:t="",image:r="",image_alt:u="",type:a="",button_group:N=!1,autocomplete:V=!1})=>e.jsxs("section",{className:A("nijmegen-hero",{"nijmegen-hero--home":a==="home","nijmegen-hero--background-image":a==="background-image","nijmegen-hero--image":a==="image"}),role:"region",children:[e.jsx("div",{className:"nijmegen-hero__container",children:e.jsxs("div",{className:"nijmegen-hero__content",children:[e.jsxs("div",{className:"nijmegen-hero__content--heading",children:[o&&e.jsx(B,{children:o}),t&&a==="home"&&e.jsx("p",{className:"utrecht-heading-2",children:t})]}),t&&a!=="home"&&e.jsx(T,{children:t}),a==="home"&&(V?e.jsx(E,{dark:!0,autocomplete:!0}):e.jsx(O,{dark:!0})),N===!0&&e.jsxs("p",{role:"group",className:"utrecht-button-group",children:[e.jsx("button",{className:"utrecht-button utrecht-button--primary-action",type:"button",children:"Button"}),e.jsx("button",{className:"utrecht-button utrecht-button--secondary-action",type:"button",children:"Button"})]})]})}),r&&a!=="category"&&e.jsx("img",{className:"nijmegen-hero__image",src:r,alt:u})]});try{l.displayName="HeroStory",l.__docgenInfo={description:"",displayName:"HeroStory",props:{title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string"}},text:{defaultValue:{value:""},description:"",name:"text",required:!1,type:{name:"string"}},image:{defaultValue:{value:""},description:"",name:"image",required:!1,type:{name:"string"}},image_alt:{defaultValue:{value:""},description:"",name:"image_alt",required:!1,type:{name:"string"}},type:{defaultValue:{value:""},description:"",name:"type",required:!1,type:{name:"string"}},button_group:{defaultValue:{value:"false"},description:"",name:"button_group",required:!1,type:{name:"boolean"}},autocomplete:{defaultValue:{value:"false"},description:"",name:"autocomplete",required:!1,type:{name:"boolean"}}}}}catch{}const D={title:"Components/Hero/Html Implementation",id:"html-hero",argTypes:P,component:l,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(o,t)=>{var u,a;const r=typeof t.component=="function"?t.component:typeof((u=t.component)==null?void 0:u.render)=="function"?(a=t.component)==null?void 0:a.render:null;return r?L.format(q(r(t.args)),{parser:"babel",plugins:[w]}):o}}}}},n={name:"Hero homepage",args:{title:"Heading",text:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod",image:"https://picsum.photos/640/360/",image_alt:"Image description",button_group:!1,autocomplete:!1,type:"home"}},s={name:"Hero homepage, autocomplete example",args:{title:"Heading",text:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod",image:"https://picsum.photos/640/360/",image_alt:"Image description",button_group:!1,autocomplete:!0,type:"home"}},i={name:"Hero category, with image",args:{title:"Heading",text:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod",image:"https://picsum.photos/640/360/",image_alt:"Image description",button_group:!1,type:"image"}},m={name:"Hero category, without Image",args:{title:"Heading",text:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod",button_group:!1,type:"category"}},c={name:"Hero category, with background image",args:{title:"Heading",text:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod",image:"https://picsum.photos/640/360/",image_alt:"Image description",button_group:!0,type:"background-image"}};var p,d,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Hero homepage',
  args: {
    title: 'Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    image: 'https://picsum.photos/640/360/',
    image_alt: 'Image description',
    button_group: false,
    autocomplete: false,
    type: 'home'
  }
}`,...(g=(d=n.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var h,f,b;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Hero homepage, autocomplete example',
  args: {
    title: 'Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    image: 'https://picsum.photos/640/360/',
    image_alt: 'Image description',
    button_group: false,
    autocomplete: true,
    type: 'home'
  }
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var _,y,x;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Hero category, with image',
  args: {
    title: 'Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    image: 'https://picsum.photos/640/360/',
    image_alt: 'Image description',
    button_group: false,
    type: 'image'
  }
}`,...(x=(y=i.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var H,j,I;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Hero category, without Image',
  args: {
    title: 'Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    button_group: false,
    type: 'category'
  }
}`,...(I=(j=m.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var S,k,v;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Hero category, with background image',
  args: {
    title: 'Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    image: 'https://picsum.photos/640/360/',
    image_alt: 'Image description',
    button_group: true,
    type: 'background-image'
  }
}`,...(v=(k=c.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};const M=["Default","Autocomplete","Image","Category","BackgroundImage"],J=Object.freeze(Object.defineProperty({__proto__:null,Autocomplete:s,BackgroundImage:c,Category:m,Default:n,Image:i,__namedExportsOrder:M,default:D},Symbol.toStringTag,{value:"Module"}));export{s as A,c as B,m as C,J as H,i as I};
