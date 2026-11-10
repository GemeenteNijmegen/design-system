import{s as c,r as p,p as u}from"./server.browser-rAMDWieH.js";import{j as t}from"./jsx-runtime-CKrituN3.js";/* empty css                  */import{L as g}from"./index-DP2ZV-sn.js";const f={items:{control:"object",description:"Array of description list items"}},o=({items:i=[]})=>t.jsx("div",{className:"nijmegen-description-list-container",children:t.jsx("dl",{className:"nijmegen-description-list",children:i.map((e,a)=>t.jsxs("div",{className:"nijmegen-description-list-item",children:[t.jsx("dt",{className:"nijmegen-description-list__title",children:e.title}),e.details.map((s,r)=>t.jsx("dd",{className:"nijmegen-description-list__detail",children:s},r)),e.link&&t.jsx("dd",{className:"nijmegen-description-list__detail",children:t.jsx(g,{href:e.link.href,children:e.link.text})})]},a))})});try{o.displayName="DataSummaryStory",o.__docgenInfo={description:"",displayName:"DataSummaryStory",props:{items:{defaultValue:{value:"[]"},description:"",name:"items",required:!1,type:{name:"{ title: string; details: string[]; link?: { href: string; text: string; title: string; }; }[]"}}}}}catch{}const j={title:"Components/Data summary/Html Implementation",id:"html-datasummary",argTypes:f,component:o,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(i,e)=>{var s,r;const a=typeof e.component=="function"?e.component:typeof((s=e.component)==null?void 0:s.render)=="function"?(r=e.component)==null?void 0:r.render:null;return a?c.format(p(a(e.args)),{parser:"babel",plugins:[u]}):i}}}}},n={name:"Data summary",args:{items:[{title:"Heading",details:["Lorem ipsum dolor sit amet"],link:{href:"#",text:"Aanpassen",title:"Link to adjust"}},{title:"Heading",details:["Consectetur adipiscing elit"]},{title:"Heading",details:["Sed do eiusmod"]}]}};var l,d,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Data summary',
  args: {
    items: [{
      title: 'Heading',
      details: ['Lorem ipsum dolor sit amet'],
      link: {
        href: '#',
        text: 'Aanpassen',
        title: 'Link to adjust'
      }
    }, {
      title: 'Heading',
      details: ['Consectetur adipiscing elit']
    }, {
      title: 'Heading',
      details: ['Sed do eiusmod']
    }]
  }
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const _=["Default"],k=Object.freeze(Object.defineProperty({__proto__:null,Default:n,__namedExportsOrder:_,default:j},Symbol.toStringTag,{value:"Module"}));export{n as D,k as a};
