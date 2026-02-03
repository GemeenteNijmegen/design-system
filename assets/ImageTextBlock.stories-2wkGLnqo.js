import{j as e}from"./jsx-runtime-CKrituN3.js";import{e as h,P as b,f as r}from"./index-dB9jn2jO.js";import{s as j,r as f,p as y}from"./server.browser-rAMDWieH.js";/* empty css                  */import{c as k}from"./clsx-B-dksMZM.js";const _={reverse:{name:"Reverse",control:"boolean",table:{defaultValue:!1}},title:{name:"Title",control:"text",table:{defaultValue:""}},text:{name:"Text",control:"text",table:{defaultValue:""}},children:{name:"Buttons",defaultValue:""},imageSrc:{control:{type:"text"},description:"Image source URL"},imageAlt:{control:{type:"text"},description:"Alternative text for the image"},imageAspectRatio:{control:{type:"select"},options:{None:"","16:9":"nijmegen-image--aspect-16-9","1:1":"nijmegen-image--aspect-1-1","4:3":"nijmegen-image--aspect-4-3"},description:"Aspect ratio class for the image"}},s=t=>{const a=t.imageAspectRatio?`nijmegen-image ${t.imageAspectRatio}`:"nijmegen-image",i=k("nijmegen-image-text-block",{"nijmegen-image-text-block--reverse":t.reverse});return e.jsxs("div",{className:i,children:[e.jsxs("div",{className:"nijmegen-image-text-block__content",children:[e.jsxs("div",{className:"nijmegen-image-text-block__message",children:[e.jsx(h,{children:t.title}),e.jsx(b,{children:t.text})]}),e.jsx("p",{role:"group",className:"utrecht-button-group",children:t.children})]}),e.jsx("div",{className:"nijmegen-image-text-block__image",children:e.jsx("img",{className:a,src:t.imageSrc,alt:t.imageAlt,width:"640",loading:"lazy"})})]})};try{s.displayName="ImageTextBlockStory",s.__docgenInfo={description:"",displayName:"ImageTextBlockStory",props:{}}}catch{}const v={title:"Components/Image text block/Html Implementation",id:"html-imagetextblock",component:s,argTypes:_,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(t,a)=>{var c,m;const i=typeof a.component=="function"?a.component:typeof((c=a.component)==null?void 0:c.render)=="function"?(m=a.component)==null?void 0:m.render:null;return i?j.format(f(i(a.args)),{parser:"babel",plugins:[y]}):t}}}}},n={name:"Image text block",args:{reverse:!1,title:"Heading",text:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod",children:[e.jsx(r,{appearance:"primary-action-button",children:"Text"},"1"),e.jsx(r,{appearance:"secondary-action-button",children:"Text"},"2")],imageSrc:"https://picsum.photos/640/360/",imageAlt:"Example image description",imageAspectRatio:"nijmegen-image--aspect-4-3"}},o={name:"Image text block reverse",args:{reverse:!0,title:"Heading",text:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod",children:[e.jsx(r,{appearance:"primary-action-button",children:"Text"},"1"),e.jsx(r,{appearance:"secondary-action-button",children:"Text"},"2")],imageSrc:"https://picsum.photos/640/360/",imageAlt:"Example image description",imageAspectRatio:"nijmegen-image--aspect-4-3"}};var l,p,g;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Image text block',
  args: {
    reverse: false,
    title: 'Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    children: [<Button key="1" appearance="primary-action-button">
        Text
      </Button>, <Button key="2" appearance="secondary-action-button">
        Text
      </Button>],
    imageSrc: 'https://picsum.photos/640/360/',
    imageAlt: 'Example image description',
    imageAspectRatio: 'nijmegen-image--aspect-4-3'
  }
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var d,u,x;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Image text block reverse',
  args: {
    reverse: true,
    title: 'Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    children: [<Button key="1" appearance="primary-action-button">
        Text
      </Button>, <Button key="2" appearance="secondary-action-button">
        Text
      </Button>],
    imageSrc: 'https://picsum.photos/640/360/',
    imageAlt: 'Example image description',
    imageAspectRatio: 'nijmegen-image--aspect-4-3'
  }
}`,...(x=(u=o.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const T=["Default","Reverse"],N=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Reverse:o,__namedExportsOrder:T,default:v},Symbol.toStringTag,{value:"Module"}));export{n as D,N as I,o as R};
