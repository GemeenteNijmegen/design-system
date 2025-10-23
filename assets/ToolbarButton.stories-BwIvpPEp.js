var L=(o,n,t)=>{if(!n.has(o))throw TypeError("Cannot "+t)};var i=(o,n,t)=>{if(n.has(o))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(o):n.set(o,t)};var u=(o,n,t)=>(L(o,n,"access private method"),t);import{j as T}from"./jsx-runtime-CKrituN3.js";import{s as E,r as M,p as k}from"./server.browser-rAMDWieH.js";import{s as w}from"./index.min-DC3Oj5dC.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";const x=`<button class="nijmegen-toolbar-button" type="button" part="button">
  <slot></slot>
</button>
`;var c,j;class B extends HTMLElement{constructor(){super();i(this,c);const t=document.createElement("template");t.innerHTML=x;const e=this.attachShadow({mode:"open"});e.appendChild(t.content.cloneNode(!0));const a=new CSSStyleSheet;a.replaceSync(w),e.adoptedStyleSheets=[a]}static get observedAttributes(){return["type"]}connectedCallback(){let t=this.shadowRoot.querySelector('[class*="nijmegen-toolbar-button--icon"]');t&&t.addEventListener("click",e=>{let a=e.target;e.target.nodeName==="SLOT"&&(a=e.target.parentElement),a.ariaExpanded=a.ariaExpanded==="true"?"false":"true"})}attributeChangedCallback(t,e,a){t==="type"&&u(this,c,j).call(this,a)}}c=new WeakSet,j=function(t){const e=this.shadowRoot.querySelector(".nijmegen-toolbar-button");t==="menu"?(e.classList.add("nijmegen-toolbar-button--icon-menu"),e.classList.remove("nijmegen-toolbar-button--icon-search"),e.ariaExpanded="false",e.ariaLabel="Menu openen"):t==="search"?(e.classList.add("nijmegen-toolbar-button--icon-search"),e.classList.remove("nijmegen-toolbar-button--icon-menu")):e.classList.contains("nijmegen-toolbar-button--icon-menu")?(e.classList.remove("nijmegen-toolbar-button--icon-menu"),e.ariaLabel="Menu sluiten"):e.classList.contains("nijmegen-toolbar-button--icon-search")&&(e.classList.remove("nijmegen-toolbar-button--icon-search"),e.ariaLabel="Zoeken sluiten")};customElements.define("nijmegen-toolbar-button",B);const v=({label:o="",type:n=""})=>T.jsx("nijmegen-toolbar-button",{type:n,children:o}),D={title:"Components/Toolbar button/Web Component Implementation",id:"web-component-toolbar-button",component:v,argTypes:{label:{name:"Content",description:"Button text"},type:{name:"Type",description:"Button type",control:{type:"select"},options:["","menu","search"]}},args:{label:"Toolbar button",type:""},parameters:{status:{type:"BETA"},docs:{source:{transform:(o,n)=>{var e,a;const t=typeof n.component=="function"?n.component:typeof((e=n.component)==null?void 0:e.render)=="function"?(a=n.component)==null?void 0:a.render:null;return t?E.format(M(t(n.args)),{parser:"babel",plugins:[k]}):o}},description:{component:"The toolbar button menu and search options implement JS for toggling multiple `aria-` attributes and is therefore available as web component."}}}},r={args:{label:"Toolbar button",type:""}},s={args:{label:"Menu",type:"menu"}},l={args:{label:"Zoeken",type:"search"}};var m,p,b;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Toolbar button',
    type: ''
  }
}`,...(b=(p=r.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var d,g,h;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Menu',
    type: 'menu'
  }
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,y,S;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Zoeken',
    type: 'search'
  }
}`,...(S=(y=l.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const H=["Default","Menu","Search"];export{r as Default,s as Menu,l as Search,H as __namedExportsOrder,D as default};
