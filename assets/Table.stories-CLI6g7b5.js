import{s as T,r as E,p as N}from"./server.browser-rAMDWieH.js";import{j as n}from"./jsx-runtime-CKrituN3.js";/* empty css                  */import{c as d}from"./clsx-B-dksMZM.js";const v={fullTable:{control:"boolean"},columns:{control:"object"}},c=({fullTable:o,columns:e})=>n.jsxs("table",{className:d("nijmegen-table",o&&"nijmegen-table-full-width"),children:[n.jsx("caption",{className:"nijmegen-table__caption",children:"Afval ophaaldagen"}),n.jsx("thead",{className:"nijmegen-table__header",children:n.jsx("tr",{className:"nijmegen-table__row",children:e.map((a,l)=>n.jsx("th",{scope:"col",className:d("nijmegen-table__header-cell",a.alignEnd&&"nijmegen-table__header-cell-end"),children:a.title},l))})}),n.jsx("tbody",{className:"nijmegen-table__body",children:Array.from({length:Math.max(...e.map(a=>a.children.length))}).map((a,l)=>n.jsx("tr",{className:"nijmegen-table__row",children:e.map((t,_)=>n.jsx("td",{className:d("nijmegen-table__data-cell",t.alignEnd&&"nijmegen-table__data-cell-end"),"data-label":t.title,dangerouslySetInnerHTML:{__html:t.children[l]||""}},_))},l))})]});try{c.displayName="TableStory",c.__docgenInfo={description:"",displayName:"TableStory",props:{fullTable:{defaultValue:null,description:"",name:"fullTable",required:!0,type:{name:"boolean"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"{ title: string; alignEnd: boolean; children: string[]; }[]"}}}}}catch{}const M={title:"Components/Table/Html Implementation",id:"html-table",argTypes:v,component:c,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(o,e)=>{var l,t;const a=typeof e.component=="function"?e.component:typeof((l=e.component)==null?void 0:l.render)=="function"?(t=e.component)==null?void 0:t.render:null;return a?T.format(E(a(e.args)),{parser:"babel",plugins:[N]}):o}}}}},r={name:"Table",args:{fullTable:!0,columns:[{title:"Wijk",alignEnd:!1,children:["Nijmegen-Oost","Dukenburg","Lindenholt","Nijmegen-Noord"]},{title:"Afvalsoort",alignEnd:!1,children:["Restafval","Papier & karton","GFT","Grofvuil"]},{title:"Ophaaldag",alignEnd:!1,children:["Maandag","Woensdag","Donderdag","Maandag"]}]}},i={name:"Table content",args:{fullTable:!0,columns:[{title:"Wijk",alignEnd:!1,children:['<a href="/" class="utrecht-link utrecht-link--html-a" title="link">Nijmegen-Oost</a>','<a href="/" class="utrecht-link utrecht-link--html-a" title="link">Dukenburg</a>','<a href="/" class="utrecht-link utrecht-link--html-a" title="link">Lindenholt</a>','<a href="/" class="utrecht-link utrecht-link--html-a" title="link">Nijmegen-Noord</a>']},{title:"Afvalsoort",alignEnd:!1,children:["Restafval","Papier & karton","GFT","Grofvuil"]},{title:"Ophaaldag",alignEnd:!1,children:["Maandag","Woensdag","Donderdag","Maandag"]}]}},s={name:"Table alignment",args:{fullTable:!0,columns:[{title:"Wijk",alignEnd:!1,children:["Nijmegen-Oost","Dukenburg","Lindenholt","Nijmegen-Noord"]},{title:"Afvalsoort",alignEnd:!1,children:["Restafval","Papier & karton","GFT","Grofvuil"]},{title:"Ophaaldag",alignEnd:!0,children:["Maandag","Woensdag","Donderdag","Maandag"]}]}};var g,m,u;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Table',
  args: {
    fullTable: true,
    columns: [{
      title: 'Wijk',
      alignEnd: false,
      children: ['Nijmegen-Oost', 'Dukenburg', 'Lindenholt', 'Nijmegen-Noord']
    }, {
      title: 'Afvalsoort',
      alignEnd: false,
      children: ['Restafval', 'Papier & karton', 'GFT', 'Grofvuil']
    }, {
      title: 'Ophaaldag',
      alignEnd: false,
      children: ['Maandag', 'Woensdag', 'Donderdag', 'Maandag']
    }]
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,f,p;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Table content',
  args: {
    fullTable: true,
    columns: [{
      title: 'Wijk',
      alignEnd: false,
      children: ['<a href="/" class="utrecht-link utrecht-link--html-a" title="link">Nijmegen-Oost</a>', '<a href="/" class="utrecht-link utrecht-link--html-a" title="link">Dukenburg</a>', '<a href="/" class="utrecht-link utrecht-link--html-a" title="link">Lindenholt</a>', '<a href="/" class="utrecht-link utrecht-link--html-a" title="link">Nijmegen-Noord</a>']
    }, {
      title: 'Afvalsoort',
      alignEnd: false,
      children: ['Restafval', 'Papier & karton', 'GFT', 'Grofvuil']
    }, {
      title: 'Ophaaldag',
      alignEnd: false,
      children: ['Maandag', 'Woensdag', 'Donderdag', 'Maandag']
    }]
  }
}`,...(p=(f=i.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};var b,k,j;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Table alignment',
  args: {
    fullTable: true,
    columns: [{
      title: 'Wijk',
      alignEnd: false,
      children: ['Nijmegen-Oost', 'Dukenburg', 'Lindenholt', 'Nijmegen-Noord']
    }, {
      title: 'Afvalsoort',
      alignEnd: false,
      children: ['Restafval', 'Papier & karton', 'GFT', 'Grofvuil']
    }, {
      title: 'Ophaaldag',
      alignEnd: true,
      children: ['Maandag', 'Woensdag', 'Donderdag', 'Maandag']
    }]
  }
}`,...(j=(k=s.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};const y=["Default","Content","End"],x=Object.freeze(Object.defineProperty({__proto__:null,Content:i,Default:r,End:s,__namedExportsOrder:y,default:M},Symbol.toStringTag,{value:"Module"}));export{i as C,r as D,s as E,x as T};
