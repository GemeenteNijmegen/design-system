import{j as e}from"./jsx-runtime-CKrituN3.js";import{s as j,r as _,p as S}from"./server.browser-rAMDWieH.js";/* empty css                  */import{c as v,P as b,L as M}from"./index-D7sGIe68.js";import{c as N}from"./clsx-B-dksMZM.js";import{I as i}from"./IconCalendarEvent-3BPlFUi5.js";const V={title:{name:"Title",control:"text",table:{defaultValue:""}},text:{name:"Text",control:"text",table:{defaultValue:""}},link:{name:"Link",control:"text",table:{defaultValue:""}},url:{name:"Url",control:"text",table:{defaultValue:""}},meta:{name:"Meta",control:{type:"object"},table:{defaultValue:""}},layout:{name:"Meta layout",description:"Layout of the metadata",control:{type:"select"},options:["vertical","horizontal"]}},c=({meta:t=[],layout:a="horizontal",title:s="",text:l="",link:o="",url:d=""})=>e.jsxs("div",{className:"nijmegen-search-results",children:[e.jsx(v,{appearance:"utrecht-heading-4",level:4,children:e.jsx("a",{className:"nijmegen-search-results__heading",href:d,children:s})}),e.jsxs("div",{className:"nijmegen-search-results__content",children:[e.jsxs("div",{className:"nijmegen-search-results__summary",children:[t.length>0&&e.jsx("ul",{className:N("nijmegen-metadata",a==="horizontal"&&"nijmegen-metadata__horizontal"),children:t.map((m,x)=>e.jsxs("li",{className:"nijmegen-metadata__item",children:[m.icon,m.children]},x))}),e.jsx(b,{children:l})]}),e.jsx(M,{href:d,children:o})]})]});try{c.displayName="SearchResultsStory",c.__docgenInfo={description:"",displayName:"SearchResultsStory",props:{meta:{defaultValue:{value:"[] as { children: string; icon: any }[]"},description:"",name:"meta",required:!1,type:{name:"{ children: string; icon: any; }[]"}},layout:{defaultValue:{value:"horizontal"},description:"",name:"layout",required:!1,type:{name:"string"}},title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string"}},text:{defaultValue:{value:""},description:"",name:"text",required:!1,type:{name:"string"}},link:{defaultValue:{value:""},description:"",name:"link",required:!1,type:{name:"string"}},url:{defaultValue:{value:""},description:"",name:"url",required:!1,type:{name:"string"}}}}}catch{}const k={title:"Components/Search results/Html Implementation",id:"html-searchResults",argTypes:V,component:c,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(t,a)=>{var l,o;const s=typeof a.component=="function"?a.component:typeof((l=a.component)==null?void 0:l.render)=="function"?(o=a.component)==null?void 0:o.render:null;return s?j.format(_(s(a.args)),{parser:"babel",plugins:[S]}):t}}}}},n={name:"Search results",args:{title:"Heading",text:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod",link:"Text",url:"#",layout:"horizontal",meta:[{children:"Metadata",icon:e.jsx(i,{})},{children:"Metadata",icon:e.jsx(i,{})},{children:"Metadata",icon:e.jsx(i,{})}]}},r={name:"Search results - no metadata",args:{title:"Heading",text:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod",link:"Text",url:"#",layout:"horizontal"}};var u,p,h;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Search results',
  args: {
    title: 'Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    link: 'Text',
    url: '#',
    layout: 'horizontal',
    meta: ([{
      children: 'Metadata',
      icon: <IconCalendarEvent />
    }, {
      children: 'Metadata',
      icon: <IconCalendarEvent />
    }, {
      children: 'Metadata',
      icon: <IconCalendarEvent />
    }] as Array<{
      children: string;
      icon: any;
    }>)
  }
}`,...(h=(p=n.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var g,f,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Search results - no metadata',
  args: {
    title: 'Heading',
    text: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
    link: 'Text',
    url: '#',
    layout: 'horizontal'
  }
}`,...(y=(f=r.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const z=["Default","NoMeta"],R=Object.freeze(Object.defineProperty({__proto__:null,Default:n,NoMeta:r,__namedExportsOrder:z,default:k},Symbol.toStringTag,{value:"Module"}));export{n as D,r as N,R as S};
