import{s as z,r as C,p as F}from"./server.browser-rAMDWieH.js";import{j as e}from"./jsx-runtime-CKrituN3.js";import{c as R,P as X}from"./index-CzVPJMJZ.js";/* empty css                  */import{I as $}from"./IconX-uKCbV2yY.js";import{I as y,a as J,b as K}from"./IconInfoCircle-Bw9o0Bye.js";import{I as Q}from"./IconAlertTriangle-C8yEghIP.js";const U={title:{name:"title",control:"text",table:{defaultValue:""}},text:{name:"text",control:"text",table:{defaultValue:""}},type:{description:"Type",control:{type:"select"},options:["info","error","ok","warning"],table:{defaultValue:""}},global:{name:"global",control:"boolean",table:{defaultValue:{summary:!1}}}},f={title:"Heading",text:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod",type:"info",global:!1},b=({title:g=f.title,text:t=f.text,type:s=f.type,global:d=f.global})=>{let r=e.jsx(y,{}),o="Alert type Succes";switch(s){case"error":r=e.jsx(K,{}),o="Alert type Foutmelding";break;case"info":r=e.jsx(J,{}),o="Alert type Informatie";break;case"ok":r=e.jsx(y,{}),o="Alert type Succes";break;case"warning":r=e.jsx(Q,{}),o="Alert type Waarschuwing";break}return e.jsxs("div",{className:`nijmegen-alert nijmegen-alert--${s}`,children:[e.jsx("div",{className:"nijmegen-alert__icon",children:e.jsx("span",{className:"utrecht-icon",role:"img","aria-label":o,children:r})}),e.jsx("div",{className:"nijmegen-alert__content",children:e.jsxs("div",{className:"nijmegen-alert__message",role:"status",children:[e.jsx(R,{children:g}),e.jsx(X,{children:t})]})}),d&&e.jsx("div",{className:"nijmegen-alert__icon",children:e.jsx("button",{className:"nijmegen-alert__close",children:e.jsx("span",{className:"utrecht-icon",role:"img","aria-label":"Sluiten",children:e.jsx($,{})})})})]})};try{b.displayName="AlertStory",b.__docgenInfo={description:"",displayName:"AlertStory",props:{title:{defaultValue:{value:"Heading"},description:"",name:"title",required:!1,type:{name:"string"}},text:{defaultValue:{value:"Lorem ipsum dolor sit amet, consectetur ad isicing elit, sed do eiusmod"},description:"",name:"text",required:!1,type:{name:"string"}},type:{defaultValue:{value:"info"},description:"",name:"type",required:!1,type:{name:"string"}},global:{defaultValue:{value:"false"},description:"",name:"global",required:!1,type:{name:"boolean"}}}}}catch{}const Y={title:"Components/Alert/Html Implementation",id:"html-alert",component:b,argTypes:U,args:{},parameters:{status:{type:"BETA"},docs:{source:{transform:(g,t)=>{var d,r;const s=typeof t.component=="function"?t.component:typeof((d=t.component)==null?void 0:d.render)=="function"?(r=t.component)==null?void 0:r.render:null;return s?z.format(C(s(t.args)),{parser:"babel",plugins:[F]}):g}}}}},a={args:{global:!1}},n={args:{...a.args,type:"error"}},l={args:{...a.args,type:"ok"}},i={args:{...a.args,type:"warning"}},c={args:{global:!0}},p={args:{...a.args,type:"error",global:!0}},m={args:{...a.args,type:"ok",global:!0}},u={args:{...a.args,type:"warning",global:!0}};var j,x,_;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    global: false
  }
}`,...(_=(x=a.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var h,v,S;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: 'error'
  }
}`,...(S=(v=n.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var A,N,k;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: 'ok'
  }
}`,...(k=(N=l.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var I,D,w;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: 'warning'
  }
}`,...(w=(D=i.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var G,P,V;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    global: true
  }
}`,...(V=(P=c.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var T,W,q;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: 'error',
    global: true
  }
}`,...(q=(W=p.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var E,H,L;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: 'ok',
    global: true
  }
}`,...(L=(H=m.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var O,B,M;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: 'warning',
    global: true
  }
}`,...(M=(B=u.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};const Z=["Default","Negative","Positive","Warning","DefaultGlobal","NegativeGlobal","PositiveGlobal","WarningGlobal"],le=Object.freeze(Object.defineProperty({__proto__:null,Default:a,DefaultGlobal:c,Negative:n,NegativeGlobal:p,Positive:l,PositiveGlobal:m,Warning:i,WarningGlobal:u,__namedExportsOrder:Z,default:Y},Symbol.toStringTag,{value:"Module"}));export{le as A,a as D,n as N,l as P,i as W};
