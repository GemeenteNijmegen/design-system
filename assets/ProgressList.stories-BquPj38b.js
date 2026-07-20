import{s as E,r as H,p as U}from"./server.browser-rAMDWieH.js";import{a as L,P}from"./_ProgressList-CuyDTdcL.js";const W={title:"Components/Progress list/Web Component Implementation",id:"web-component-progresslist",argTypes:L,component:P,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(A,e)=>{var d,m;const i=typeof e.component=="function"?e.component:typeof((d=e.component)==null?void 0:d.render)=="function"?(m=e.component)==null?void 0:m.render:null;return i?E.format(H(i(e.args)),{parser:"babel",plugins:[U]}):A}}}}},n={args:{steps:[{heading:"Component ontwerpen",status:"checked",enableToggle:!0,subSteps:[{text:"Atomen van het component zijn geïdentificeerd.",status:"checked"},{text:"Stijlkenmerken van elk atoom zijn vastgesteld.",status:"checked"}]},{heading:"Component opbouwen met design tokens",status:"checked",enableToggle:!0,subSteps:[{text:"Design tokens zijn aangemaakt.",status:"checked"},{text:"Design tokens zijn toegewezen aan de eigenschappen van elk atoom.",status:"checked"}]},{heading:"Component documenteren",status:"current"},{heading:"Component beschikbaar stellen",meta:"Het component kan op dit punt worden gebruikt door andere ontwerpers.",metaDate:"Uiterlijk op 1 juni 2024"}]}},t={name:"Warning",args:{steps:[{heading:"Component ontwerpen",status:"checked",enableToggle:!0,subSteps:[{text:"Atomen van het component zijn geïdentificeerd.",status:"checked"},{text:"Stijlkenmerken van elk atoom zijn vastgesteld.",status:"checked"}]},{heading:"Component opbouwen met design tokens",status:"warning",enableToggle:!0,subSteps:[{text:"Design tokens zijn aangemaakt.",status:"warning"},{text:"Design tokens zijn toegewezen aan de eigenschappen van elk atoom."}]},{heading:"Component documenteren"},{heading:"Component beschikbaar stellen",meta:"Het component kan op dit punt worden gebruikt door andere ontwerpers.",metaDate:"Uiterlijk op 1 juni 2024"}]}},o={name:"Error",args:{steps:[{heading:"Component ontwerpen",status:"checked",enableToggle:!0,subSteps:[{text:"Atomen van het component zijn geïdentificeerd.",status:"checked"},{text:"Stijlkenmerken van elk atoom zijn vastgesteld.",status:"checked"}]},{heading:"Component opbouwen met design tokens",status:"error",enableToggle:!0,subSteps:[{text:"Design tokens zijn aangemaakt.",status:"error"},{text:"Design tokens zijn toegewezen aan de eigenschappen van elk atoom."}]},{heading:"Component documenteren"},{heading:"Component beschikbaar stellen",meta:"Het component kan op dit punt worden gebruikt door andere ontwerpers.",metaDate:"Uiterlijk op 1 juni 2024"}]}},a={name:"Zonder substeps",args:{steps:[{heading:"Component ontwerpen",status:"checked",enableToggle:!0,meta:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod",metaDate:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod"},{heading:"Component opbouwen met design tokens",status:"checked",enableToggle:!0,meta:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod",metaDate:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod"},{heading:"Component documenteren",status:"current"},{heading:"Component beschikbaar stellen",meta:"Het component kan op dit punt worden gebruikt door andere ontwerpers.",metaDate:"Uiterlijk op 1 juni 2024"}]}},s={name:"Alles geopend",args:{steps:[{heading:"Component ontwerpen",status:"checked",subSteps:[{text:"Atomen van het component zijn geïdentificeerd.",status:"checked"},{text:"Stijlkenmerken van elk atoom zijn vastgesteld.",status:"checked"}]},{heading:"Component opbouwen met design tokens",status:"checked",subSteps:[{text:"Design tokens zijn aangemaakt.",status:"checked"},{text:"Design tokens zijn toegewezen aan de eigenschappen van elk atoom.",status:"checked"}]},{heading:"Component documenteren",status:"current"},{heading:"Component beschikbaar stellen",meta:"Het component kan op dit punt worden gebruikt door andere ontwerpers.",metaDate:"Uiterlijk op 1 juni 2024"}]}},r={name:"Alles gesloten",args:{steps:[{heading:"Component ontwerpen",status:"checked",enableToggle:!0,subSteps:[{text:"Atomen van het component zijn geïdentificeerd.",status:"checked"},{text:"Stijlkenmerken van elk atoom zijn vastgesteld.",status:"checked"}]},{heading:"Component opbouwen met design tokens",status:"checked",enableToggle:!0,subSteps:[{text:"Design tokens zijn aangemaakt.",status:"checked"},{text:"Design tokens zijn toegewezen aan de eigenschappen van elk atoom.",status:"checked"}]},{heading:"Component documenteren",status:"current",enableToggle:!0},{heading:"Component beschikbaar stellen",enableToggle:!0,meta:"Het component kan op dit punt worden gebruikt door andere ontwerpers.",metaDate:"Uiterlijk op 1 juni 2024"}]}};var p,c,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    steps: [{
      heading: 'Component ontwerpen',
      status: 'checked',
      enableToggle: true,
      subSteps: [{
        text: 'Atomen van het component zijn geïdentificeerd.',
        status: 'checked'
      }, {
        text: 'Stijlkenmerken van elk atoom zijn vastgesteld.',
        status: 'checked'
      }]
    }, {
      heading: 'Component opbouwen met design tokens',
      status: 'checked',
      enableToggle: true,
      subSteps: [{
        text: 'Design tokens zijn aangemaakt.',
        status: 'checked'
      }, {
        text: 'Design tokens zijn toegewezen aan de eigenschappen van elk atoom.',
        status: 'checked'
      }]
    }, {
      heading: 'Component documenteren',
      status: 'current'
    }, {
      heading: 'Component beschikbaar stellen',
      meta: 'Het component kan op dit punt worden gebruikt door andere ontwerpers.',
      metaDate: 'Uiterlijk op 1 juni 2024'
    }]
  }
}`,...(g=(c=n.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var u,k,l;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Warning',
  args: {
    steps: [{
      heading: 'Component ontwerpen',
      status: 'checked',
      enableToggle: true,
      subSteps: [{
        text: 'Atomen van het component zijn geïdentificeerd.',
        status: 'checked'
      }, {
        text: 'Stijlkenmerken van elk atoom zijn vastgesteld.',
        status: 'checked'
      }]
    }, {
      heading: 'Component opbouwen met design tokens',
      status: 'warning',
      enableToggle: true,
      subSteps: [{
        text: 'Design tokens zijn aangemaakt.',
        status: 'warning'
      }, {
        text: 'Design tokens zijn toegewezen aan de eigenschappen van elk atoom.'
      }]
    }, {
      heading: 'Component documenteren'
    }, {
      heading: 'Component beschikbaar stellen',
      meta: 'Het component kan op dit punt worden gebruikt door andere ontwerpers.',
      metaDate: 'Uiterlijk op 1 juni 2024'
    }]
  }
}`,...(l=(k=t.parameters)==null?void 0:k.docs)==null?void 0:l.source}}};var h,b,j;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Error',
  args: {
    steps: [{
      heading: 'Component ontwerpen',
      status: 'checked',
      enableToggle: true,
      subSteps: [{
        text: 'Atomen van het component zijn geïdentificeerd.',
        status: 'checked'
      }, {
        text: 'Stijlkenmerken van elk atoom zijn vastgesteld.',
        status: 'checked'
      }]
    }, {
      heading: 'Component opbouwen met design tokens',
      status: 'error',
      enableToggle: true,
      subSteps: [{
        text: 'Design tokens zijn aangemaakt.',
        status: 'error'
      }, {
        text: 'Design tokens zijn toegewezen aan de eigenschappen van elk atoom.'
      }]
    }, {
      heading: 'Component documenteren'
    }, {
      heading: 'Component beschikbaar stellen',
      meta: 'Het component kan op dit punt worden gebruikt door andere ontwerpers.',
      metaDate: 'Uiterlijk op 1 juni 2024'
    }]
  }
}`,...(j=(b=o.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var w,z,C;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Zonder substeps',
  args: {
    steps: [{
      heading: 'Component ontwerpen',
      status: 'checked',
      enableToggle: true,
      meta: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
      metaDate: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod'
    }, {
      heading: 'Component opbouwen met design tokens',
      status: 'checked',
      enableToggle: true,
      meta: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod',
      metaDate: 'Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod'
    }, {
      heading: 'Component documenteren',
      status: 'current'
    }, {
      heading: 'Component beschikbaar stellen',
      meta: 'Het component kan op dit punt worden gebruikt door andere ontwerpers.',
      metaDate: 'Uiterlijk op 1 juni 2024'
    }]
  }
}`,...(C=(z=a.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var x,v,S;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Alles geopend',
  args: {
    steps: [{
      heading: 'Component ontwerpen',
      status: 'checked',
      subSteps: [{
        text: 'Atomen van het component zijn geïdentificeerd.',
        status: 'checked'
      }, {
        text: 'Stijlkenmerken van elk atoom zijn vastgesteld.',
        status: 'checked'
      }]
    }, {
      heading: 'Component opbouwen met design tokens',
      status: 'checked',
      subSteps: [{
        text: 'Design tokens zijn aangemaakt.',
        status: 'checked'
      }, {
        text: 'Design tokens zijn toegewezen aan de eigenschappen van elk atoom.',
        status: 'checked'
      }]
    }, {
      heading: 'Component documenteren',
      status: 'current'
    }, {
      heading: 'Component beschikbaar stellen',
      meta: 'Het component kan op dit punt worden gebruikt door andere ontwerpers.',
      metaDate: 'Uiterlijk op 1 juni 2024'
    }]
  }
}`,...(S=(v=s.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var D,T,f;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Alles gesloten',
  args: {
    steps: [{
      heading: 'Component ontwerpen',
      status: 'checked',
      enableToggle: true,
      subSteps: [{
        text: 'Atomen van het component zijn geïdentificeerd.',
        status: 'checked'
      }, {
        text: 'Stijlkenmerken van elk atoom zijn vastgesteld.',
        status: 'checked'
      }]
    }, {
      heading: 'Component opbouwen met design tokens',
      status: 'checked',
      enableToggle: true,
      subSteps: [{
        text: 'Design tokens zijn aangemaakt.',
        status: 'checked'
      }, {
        text: 'Design tokens zijn toegewezen aan de eigenschappen van elk atoom.',
        status: 'checked'
      }]
    }, {
      heading: 'Component documenteren',
      status: 'current',
      enableToggle: true
    }, {
      heading: 'Component beschikbaar stellen',
      enableToggle: true,
      meta: 'Het component kan op dit punt worden gebruikt door andere ontwerpers.',
      metaDate: 'Uiterlijk op 1 juni 2024'
    }]
  }
}`,...(f=(T=r.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};const O=["Default","Warning","Error","Paragraph","Open","Closed"],y=Object.freeze(Object.defineProperty({__proto__:null,Closed:r,Default:n,Error:o,Open:s,Paragraph:a,Warning:t,__namedExportsOrder:O,default:W},Symbol.toStringTag,{value:"Module"}));export{r as C,n as D,o as E,s as O,a as P,t as W,y as a};
