import{s as v,r as N,p as V}from"./server.browser-rAMDWieH.js";import{j as e}from"./jsx-runtime-CKrituN3.js";import{d as L,P as q}from"./index-Cr_ziExY.js";import{c as T}from"./clsx-B-dksMZM.js";import{b as k,S as B}from"./_Search-BwbNRKto.js";/* empty css                  */const w={title:{name:"Title",control:"text",table:{defaultValue:""}},text:{name:"Text",control:"text",table:{defaultValue:""}},image:{name:"Image",control:"text",table:{defaultValue:""}},image_alt:{name:"Image alt",control:"text",table:{defaultValue:""}},button_group:{name:"Show button group",control:{type:"boolean"}},type:{name:"Type",control:{type:"select"},options:["home","category","image"]},autocomplete:{name:"Autocomplete example",control:"boolean"}},c=({title:a="",text:t="",image:r="",image_alt:l="",type:o="",button_group:I=!1,autocomplete:S=!1})=>e.jsxs("section",{className:T("nijmegen-hero",{"nijmegen-hero--home":o==="home","nijmegen-hero--background-image":o==="image"}),role:"region",children:[e.jsx("div",{className:"nijmegen-hero__container",children:e.jsxs("div",{className:"nijmegen-hero__content",children:[e.jsxs("div",{className:"nijmegen-hero__content--heading",children:[a&&e.jsx(L,{children:a}),t&&o==="home"&&e.jsx("p",{className:"utrecht-heading-2",children:t})]}),t&&o!=="home"&&e.jsx(q,{children:t}),o==="home"&&(S?e.jsx(k,{dark:!0,autocomplete:!0}):e.jsx(B,{dark:!0})),I===!0&&e.jsxs("p",{role:"group",className:"utrecht-button-group",children:[e.jsx("button",{className:"utrecht-button utrecht-button--primary-action",type:"button",children:"Button"}),e.jsx("button",{className:"utrecht-button utrecht-button--secondary-action",type:"button",children:"Button"})]})]})}),r&&(o==="home"||o==="image")&&e.jsx("img",{className:"nijmegen-hero__image",src:r,alt:l})]});try{c.displayName="HeroStory",c.__docgenInfo={description:"",displayName:"HeroStory",props:{title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string"}},text:{defaultValue:{value:""},description:"",name:"text",required:!1,type:{name:"string"}},image:{defaultValue:{value:""},description:"",name:"image",required:!1,type:{name:"string"}},image_alt:{defaultValue:{value:""},description:"",name:"image_alt",required:!1,type:{name:"string"}},type:{defaultValue:{value:""},description:"",name:"type",required:!1,type:{name:"string"}},button_group:{defaultValue:{value:"false"},description:"",name:"button_group",required:!1,type:{name:"boolean"}},autocomplete:{defaultValue:{value:"false"},description:"",name:"autocomplete",required:!1,type:{name:"boolean"}}}}}catch{}const A={title:"Components/Hero/Html Implementation",id:"html-hero",argTypes:w,component:c,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(a,t)=>{var l,o;const r=typeof t.component=="function"?t.component:typeof((l=t.component)==null?void 0:l.render)=="function"?(o=t.component)==null?void 0:o.render:null;return r?v.format(N(r(t.args)),{parser:"babel",plugins:[V]}):a}}}}},n={name:"Hero homepage",args:{title:"Heading",text:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod",image:"https://picsum.photos/640/360/",image_alt:"Image description",button_group:!1,autocomplete:!1,type:"home"}},s={name:"Hero homepage, autocomplete example",args:{title:"Heading",text:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod",image:"https://picsum.photos/640/360/",image_alt:"Image description",button_group:!1,autocomplete:!0,type:"home"}},i={name:"Hero category, without Image",args:{title:"Heading",text:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod",button_group:!1,type:"category"}},m={name:"Hero category, with Image",args:{title:"Heading",text:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod",image:"https://picsum.photos/640/360/",image_alt:"Image description",button_group:!0,type:"image"}};var u,p,d;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var g,h,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var _,y,b;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Hero category, without Image',
  args: {
    title: 'Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    button_group: false,
    type: 'category'
  }
}`,...(b=(y=i.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var x,j,H;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Hero category, with Image',
  args: {
    title: 'Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    image: 'https://picsum.photos/640/360/',
    image_alt: 'Image description',
    button_group: true,
    type: 'image'
  }
}`,...(H=(j=m.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};const E=["Default","Autocomplete","Category","BackgroundImage"],R=Object.freeze(Object.defineProperty({__proto__:null,Autocomplete:s,BackgroundImage:m,Category:i,Default:n,__namedExportsOrder:E,default:A},Symbol.toStringTag,{value:"Module"}));export{i as C,n as D,R as H};
