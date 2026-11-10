import{s as V,r as q,p as D}from"./server.browser-rAMDWieH.js";import{j as d}from"./jsx-runtime-CKrituN3.js";/* empty css                  */import"./index-DP2ZV-sn.js";const E={title:{name:"Title",control:"text",table:{defaultValue:""}},text:{name:"Text",control:"text",table:{defaultValue:""}},href:{name:"Link URL",control:"text",table:{defaultValue:""}},headingSize:{name:"Heading size",control:"select",options:["default","2","3","4","5"]}},m=({title:u="",text:e="",href:l="/",headingSize:t="default"})=>{const h=t!=="default"?`utrecht-heading-${t}`:"";return d.jsxs("div",{className:"nijmegen-list-of-links__item",children:[d.jsx("a",{className:`nijmegen-list-of-links__item__link utrecht-link utrecht-link--html-a ${h}`.trim(),href:l,children:u}),d.jsx("p",{className:"utrecht-paragraph",children:e})]})};try{m.displayName="ListOfLinksStory",m.__docgenInfo={description:"",displayName:"ListOfLinksStory",props:{title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string"}},text:{defaultValue:{value:""},description:"",name:"text",required:!1,type:{name:"string"}},href:{defaultValue:{value:"/"},description:"",name:"href",required:!1,type:{name:"string"}},headingSize:{defaultValue:{value:"default"},description:"",name:"headingSize",required:!1,type:{name:"string"}}}}}catch{}const F={title:"Components/List of links/Html Implementation",id:"html-listoflinks",argTypes:E,component:m,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(u,e)=>{var t,h;const l=typeof e.component=="function"?e.component:typeof((t=e.component)==null?void 0:t.render)=="function"?(h=e.component)==null?void 0:h.render:null;return l?V.format(q(l(e.args)),{parser:"babel",plugins:[D]}):u}}}}},n={name:"List of links item",args:{title:"Hulp bij het huishouden",text:"Hulp in het huishouden als het u zelf niet meer lukt, bijvoorbeeld stofzuigen en schoonmaken.",href:"/",headingSize:"4"}},i={name:"Default",args:{title:"Hulp bij het huishouden",text:"Hulp in het huishouden als het u zelf niet meer lukt, bijvoorbeeld stofzuigen en schoonmaken.",href:"/",headingSize:"default"}},a={name:"Heading 2",args:{title:"Hulp bij het huishouden",text:"Hulp in het huishouden als het u zelf niet meer lukt, bijvoorbeeld stofzuigen en schoonmaken.",href:"/",headingSize:"2"}},s={name:"Heading 3",args:{title:"Hulp bij het huishouden",text:"Hulp in het huishouden als het u zelf niet meer lukt, bijvoorbeeld stofzuigen en schoonmaken.",href:"/",headingSize:"3"}},r={name:"Heading 4",args:{title:"Hulp bij het huishouden",text:"Hulp in het huishouden als het u zelf niet meer lukt, bijvoorbeeld stofzuigen en schoonmaken.",href:"/",headingSize:"4"}},o={name:"Heading 5",args:{title:"Hulp bij het huishouden",text:"Hulp in het huishouden als het u zelf niet meer lukt, bijvoorbeeld stofzuigen en schoonmaken.",href:"/",headingSize:"5"}};var c,p,f;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'List of links item',
  args: {
    title: 'Hulp bij het huishouden',
    text: 'Hulp in het huishouden als het u zelf niet meer lukt, bijvoorbeeld stofzuigen en schoonmaken.',
    href: '/',
    headingSize: '4'
  }
}`,...(f=(p=n.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var g,z,b;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    title: 'Hulp bij het huishouden',
    text: 'Hulp in het huishouden als het u zelf niet meer lukt, bijvoorbeeld stofzuigen en schoonmaken.',
    href: '/',
    headingSize: 'default'
  }
}`,...(b=(z=i.parameters)==null?void 0:z.docs)==null?void 0:b.source}}};var k,S,H;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Heading 2',
  args: {
    title: 'Hulp bij het huishouden',
    text: 'Hulp in het huishouden als het u zelf niet meer lukt, bijvoorbeeld stofzuigen en schoonmaken.',
    href: '/',
    headingSize: '2'
  }
}`,...(H=(S=a.parameters)==null?void 0:S.docs)==null?void 0:H.source}}};var j,x,v;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Heading 3',
  args: {
    title: 'Hulp bij het huishouden',
    text: 'Hulp in het huishouden als het u zelf niet meer lukt, bijvoorbeeld stofzuigen en schoonmaken.',
    href: '/',
    headingSize: '3'
  }
}`,...(v=(x=s.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var _,L,y;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Heading 4',
  args: {
    title: 'Hulp bij het huishouden',
    text: 'Hulp in het huishouden als het u zelf niet meer lukt, bijvoorbeeld stofzuigen en schoonmaken.',
    href: '/',
    headingSize: '4'
  }
}`,...(y=(L=r.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};var T,N,O;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Heading 5',
  args: {
    title: 'Hulp bij het huishouden',
    text: 'Hulp in het huishouden als het u zelf niet meer lukt, bijvoorbeeld stofzuigen en schoonmaken.',
    href: '/',
    headingSize: '5'
  }
}`,...(O=(N=o.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};const w=["Default","None","SizeTwo","SizeThree","SizeFour","SizeFive"],$=Object.freeze(Object.defineProperty({__proto__:null,Default:n,None:i,SizeFive:o,SizeFour:r,SizeThree:s,SizeTwo:a,__namedExportsOrder:w,default:F},Symbol.toStringTag,{value:"Module"}));export{$ as L,i as N,a as S,s as a,r as b,o as c};
