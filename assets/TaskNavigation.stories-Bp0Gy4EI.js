import{s as N,r as W,p as D}from"./server.browser-rAMDWieH.js";import{j as e}from"./jsx-runtime-CKrituN3.js";/* empty css                  *//* empty css              */import{I as b}from"./IconAlertTriangle-C8yEghIP.js";import{I as S}from"./IconArrowRight-pMXm72se.js";const q={title:{name:"Title",control:"text"},link:{name:"Link Text",control:"text"},href:{name:"URL",control:"text"},date:{name:"Date",control:"text"},dateTime:{name:"DateTime",control:"text"},dateWarning:{name:"Date Warning",control:"boolean"}},d=({title:s="",link:a="",href:o="",date:l="",dateTime:m="",dateWarning:c=!1})=>e.jsxs("a",{className:"nijmegen-task-navigation",href:o,children:[e.jsx("div",{className:"nijmegen-task-navigation__content",children:e.jsx("strong",{children:s})}),e.jsxs("div",{className:"nijmegen-task-navigation__context",children:[e.jsx("div",{className:"nijmegen-task-navigation__details",children:e.jsxs("div",{className:`nijmegen-task-navigation__date ${c?"nijmegen-task-navigation__date--warning":""}`,children:[c&&e.jsx(b,{}),e.jsx("time",{dateTime:m,children:l})]})}),a&&e.jsx("div",{className:"nijmegen-task-navigation__actions",children:e.jsx(S,{})})]})]});try{d.displayName="TaskNavigationStory",d.__docgenInfo={description:"",displayName:"TaskNavigationStory",props:{title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string"}},link:{defaultValue:{value:""},description:"",name:"link",required:!1,type:{name:"string"}},href:{defaultValue:{value:""},description:"",name:"href",required:!1,type:{name:"string"}},date:{defaultValue:{value:""},description:"",name:"date",required:!1,type:{name:"string"}},dateTime:{defaultValue:{value:""},description:"",name:"dateTime",required:!1,type:{name:"string"}},dateWarning:{defaultValue:{value:"false"},description:"",name:"dateWarning",required:!1,type:{name:"boolean"}}}}}catch{}const I={title:"Components/Task navigation/Html Implementation",id:"html-taskNavigation",argTypes:q,component:d,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(s,a)=>{var l,m;const o=typeof a.component=="function"?a.component:typeof((l=a.component)==null?void 0:l.render)=="function"?(m=a.component)==null?void 0:m.render:null;return o?N.format(W(o(a.args)),{parser:"babel",plugins:[D]}):s}}}}},t={name:"TaskNavigation",args:{title:"Task",link:"Text",href:"#example"}},n={name:"With date",args:{title:"Task",link:"Text",href:"#example",date:"29-09-2026",dateTime:"2026-07-15T13:42:10.348Z"}},r={name:"With date relative",args:{title:"Task",link:"Text",href:"#example",date:"vóór 2 oktober 2026",dateTime:"2026-07-15T13:42:10.348Z"}},i={name:"With date warning",args:{title:"Task",link:"Text",href:"#example",date:"nog 2 dagen",dateTime:"2026-07-15T13:42:10.348Z",dateWarning:!0}};var p,g,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'TaskNavigation',
  args: {
    title: 'Task',
    link: 'Text',
    href: '#example'
  }
}`,...(u=(g=t.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var T,f,k;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'With date',
  args: {
    title: 'Task',
    link: 'Text',
    href: '#example',
    date: '29-09-2026',
    dateTime: '2026-07-15T13:42:10.348Z'
  }
}`,...(k=(f=n.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var x,v,h;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'With date relative',
  args: {
    title: 'Task',
    link: 'Text',
    href: '#example',
    date: 'vóór 2 oktober 2026',
    dateTime: '2026-07-15T13:42:10.348Z'
  }
}`,...(h=(v=r.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var _,j,y;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'With date warning',
  args: {
    title: 'Task',
    link: 'Text',
    href: '#example',
    date: 'nog 2 dagen',
    dateTime: '2026-07-15T13:42:10.348Z',
    dateWarning: true
  }
}`,...(y=(j=i.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};const V=["Default","Date","DateReletave","DateWarning"],B=Object.freeze(Object.defineProperty({__proto__:null,Date:n,DateReletave:r,DateWarning:i,Default:t,__namedExportsOrder:V,default:I},Symbol.toStringTag,{value:"Module"}));export{t as D,B as T,n as a,r as b,i as c};
