import{s as E,r as R,p as A}from"./server.browser-rAMDWieH.js";import{j as S}from"./jsx-runtime-CKrituN3.js";/* empty css                  */const b={src:{control:{type:"text"},description:"Image source URL"},alt:{control:{type:"text"},description:"Alternative text for the image"},aspectRatio:{control:{type:"select"},options:{None:"","16:9":"nijmegen-image--aspect-16-9","1:1":"nijmegen-image--aspect-1-1","4:3":"nijmegen-image--aspect-4-3"},description:"Aspect ratio class for the image"}},p=e=>{const a=e.aspectRatio?`nijmegen-image ${e.aspectRatio}`:"nijmegen-image";return S.jsx("img",{className:a,src:e.src,alt:e.alt,width:"640",loading:"lazy"})};try{p.displayName="ImageStory",p.__docgenInfo={description:"",displayName:"ImageStory",props:{}}}catch{}const N={title:"Components/Image/Html Implementation",id:"html-image",component:p,argTypes:b,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(e,a)=>{var c,m;const n=typeof a.component=="function"?a.component:typeof((c=a.component)==null?void 0:c.render)=="function"?(m=a.component)==null?void 0:m.render:null;return n?E.format(R(n(a.args)),{parser:"babel",plugins:[A]}):e}}}}},t={name:"Image",args:{src:"https://picsum.photos/1200/675/",alt:"Example image description"}},s={name:"Image aspect ratio 16:9",args:{src:"https://picsum.photos/1200/675/",alt:"Example image description",aspectRatio:"nijmegen-image--aspect-16-9"}},r={name:"Image aspect ratio 1:1",args:{src:"https://picsum.photos/1200/675/",alt:"Example image description",aspectRatio:"nijmegen-image--aspect-1-1"}},o={name:"Image aspect ratio 4:3",args:{src:"https://picsum.photos/1200/675/",alt:"Example image description",aspectRatio:"nijmegen-image--aspect-4-3"}};var i,g,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Image',
  args: {
    src: 'https://picsum.photos/1200/675/',
    alt: 'Example image description'
  }
}`,...(l=(g=t.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var d,u,_;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Image aspect ratio 16:9',
  args: {
    src: 'https://picsum.photos/1200/675/',
    alt: 'Example image description',
    aspectRatio: 'nijmegen-image--aspect-16-9'
  }
}`,...(_=(u=s.parameters)==null?void 0:u.docs)==null?void 0:_.source}}};var h,f,I;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Image aspect ratio 1:1',
  args: {
    src: 'https://picsum.photos/1200/675/',
    alt: 'Example image description',
    aspectRatio: 'nijmegen-image--aspect-1-1'
  }
}`,...(I=(f=r.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var j,x,y;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Image aspect ratio 4:3',
  args: {
    src: 'https://picsum.photos/1200/675/',
    alt: 'Example image description',
    aspectRatio: 'nijmegen-image--aspect-4-3'
  }
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const T=["Default","Aspect_16_9","Aspect_1_1","Aspect_4_3"],B=Object.freeze(Object.defineProperty({__proto__:null,Aspect_16_9:s,Aspect_1_1:r,Aspect_4_3:o,Default:t,__namedExportsOrder:T,default:N},Symbol.toStringTag,{value:"Module"}));export{s as A,B as I,r as a,o as b};
