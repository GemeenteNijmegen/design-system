import{j as e}from"./jsx-runtime-CKrituN3.js";import{d as b,P as n,e as d,L as x}from"./index-D7sGIe68.js";import{s as T,r as _,p as L}from"./server.browser-rAMDWieH.js";/* empty css                  */import{R as l}from"./index-CBqU2yxZ.js";const S={type:{control:{type:"radio"},options:{"Ordered list":"ol","Unordered list":"ul"}},items:{control:{type:"object"}}},p=({type:o="ol",items:t})=>l.createElement(o,{className:"nijmegen-step-list"},...t.map((r,s)=>e.jsxs("li",{className:"nijmegen-step-list__item",children:[e.jsx("div",{className:"nijmegen-step-list__header",children:e.jsx(b,{children:r.title})}),e.jsx("div",{className:"nijmegen-step-list__body",children:r.content.map((c,j)=>e.jsx(l.Fragment,{children:c},j))})]},s)));try{p.displayName="StepListStory",p.__docgenInfo={description:"",displayName:"StepListStory",props:{type:{defaultValue:{value:"ol"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"ol"'},{value:'"ul"'}]}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"{ title: string; content: ReactNode[]; }[]"}}}}}catch{}const P={title:"Components/Step list/Html Implementation",id:"html-steplist",argTypes:S,component:p,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(o,t)=>{var s,c;const r=typeof t.component=="function"?t.component:typeof((s=t.component)==null?void 0:s.render)=="function"?(c=t.component)==null?void 0:c.render:null;return r?T.format(_(r(t.args)),{parser:"babel",plugins:[L]}):o}}}}},a={name:"Ordered Step list",args:{type:"ol",items:[{title:"Heading",content:[e.jsx(n,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"})]},{title:"Heading",content:[e.jsx(n,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"}),e.jsx(d,{appearance:"primary-action-button",children:"Text"},"1"),e.jsx(d,{appearance:"secondary-action-button",children:"Text"},"2")]},{title:"Heading",content:[e.jsx(n,{children:"Different content for the third step. This can be any text you want."}),e.jsx(x,{href:"#",children:"Text"})]}]}},i={name:"Unordered Step list",args:{type:"ul",items:[{title:"Heading",content:[e.jsx(n,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"})]},{title:"Heading",content:[e.jsx(n,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"}),e.jsx(d,{appearance:"primary-action-button",children:"Text"},"1"),e.jsx(d,{appearance:"secondary-action-button",children:"Text"},"2")]},{title:"Heading",content:[e.jsx(n,{children:"Different content for the third step. This can be any text you want."}),e.jsx(x,{href:"#",children:"Text"})]}]}};var m,u,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Ordered Step list',
  args: {
    type: 'ol',
    items: [{
      title: 'Heading',
      content: [<Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</Paragraph>]
    }, {
      title: 'Heading',
      content: [<Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</Paragraph>, <Button key="1" appearance="primary-action-button">
            Text
          </Button>, <Button key="2" appearance="secondary-action-button">
            Text
          </Button>]
    }, {
      title: 'Heading',
      content: [<Paragraph>Different content for the third step. This can be any text you want.</Paragraph>, <Link href="#">Text</Link>]
    }]
  }
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,y,f;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Unordered Step list',
  args: {
    type: 'ul',
    items: [{
      title: 'Heading',
      content: [<Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</Paragraph>]
    }, {
      title: 'Heading',
      content: [<Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</Paragraph>, <Button key="1" appearance="primary-action-button">
            Text
          </Button>, <Button key="2" appearance="secondary-action-button">
            Text
          </Button>]
    }, {
      title: 'Heading',
      content: [<Paragraph>Different content for the third step. This can be any text you want.</Paragraph>, <Link href="#">Text</Link>]
    }]
  }
}`,...(f=(y=i.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const H=["Default","Unordered"],O=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Unordered:i,__namedExportsOrder:H,default:P},Symbol.toStringTag,{value:"Module"}));export{a as D,O as S,i as U};
