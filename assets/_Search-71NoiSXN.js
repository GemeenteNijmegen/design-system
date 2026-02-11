var O=(o,r,s)=>{if(!r.has(o))throw TypeError("Cannot "+s)};var u=(o,r,s)=>{if(r.has(o))throw TypeError("Cannot add the same private member more than once");r instanceof WeakSet?r.add(o):r.set(o,s)};var l=(o,r,s)=>(O(o,r,"access private method"),s);import{j as a}from"./jsx-runtime-CKrituN3.js";/* empty css                  *//* empty css              */import{c as m}from"./clsx-B-dksMZM.js";import{I as V,a as z}from"./IconX-Dxo-hgpO.js";(function(){var c,w,d,E,b,L,p,S,_,T,j,A,g,N,f,I;function o(v,y){y===void 0&&(y={});var e=y.insertAt;if(!(!v||typeof document>"u")){var n=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",e==="top"&&n.firstChild?n.insertBefore(t,n.firstChild):n.appendChild(t),t.styleSheet?t.styleSheet.cssText=v:t.appendChild(document.createTextNode(v))}}var r=`/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */
/* stylelint-disable-next-line block-no-empty */
/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */
/* stylelint-disable-next-line block-no-empty */
/* TODO: Enable ordering properties when the plugin supports logical CSS properties
 * https://github.com/hudochenkov/stylelint-order/pull/162 */
/* stylelint-disable order/properties-alphabetical-order */
.nijmegen-search {
  inline-size: var(--nijmegen-search-input-max-inline-size);
  max-inline-size: 100%;
  position: relative;
}
.nijmegen-search.nijmegen-search--full-width {
  inline-size: 100%;
}

.nijmegen-search__container {
  display: flex;
  gap: var(--nijmegen-search-input-column-gap);
}
.nijmegen-search__container .utrecht-button {
  max-block-size: 51px;
  min-block-size: 51px;
}

.nijmegen-search__input-holder {
  flex: 1;
  position: relative;
}

.nijmegen-search__search-button.nijmegen-search__search-button--dark {
  border-color: var(--nijmegen-search-input-button-border-color) !important;
}
@media (width < 576px) {
  .nijmegen-search__search-button svg {
    display: none;
  }
}

.nijmegen-search__clear-button {
  align-items: center;
  aspect-ratio: 1/1;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  display: flex;
  height: 100%; /* stylelint-disable-line property-disallowed-list */
  justify-content: center;
  position: absolute;
  right: 0; /* stylelint-disable-line property-disallowed-list */
  top: 0; /* stylelint-disable-line property-disallowed-list */
}
.nijmegen-search__clear-button.nijmegen-search__clear-button--hide {
  display: none;
}
.nijmegen-search__clear-button svg {
  stroke: var(--nijmegen-interaction-color);
}

.nijmegen-search__input {
  background-color: var(--nijmegen-search-input-background-color);
  border-color: var(--nijmegen-search-input-border-color);
  border-radius: var(--nijmegen-search-input-border-radius);
  border-width: var(--nijmegen-search-input-border-width);
  box-sizing: border-box;
  color: var(--nijmegen-search-input-color);
  font-family: var(--nijmegen-search-input-font-family);
  font-size: var(--nijmegen-search-input-font-size);
  font-weight: var(--nijmegen-search-input-font-weight);
  line-height: var(--nijmegen-search-input-line-height);
  min-block-size: var(--nijmegen-search-input-min-block-size);
  padding-block-end: var(--nijmegen-search-input-padding-block-end);
  padding-block-start: var(--nijmegen-search-input-padding-block-start);
  padding-inline-end: var(--nijmegen-search-input-padding-inline-end);
  padding-inline-start: var(--nijmegen-search-input-padding-inline-start);
  width: 100%; /* stylelint-disable-line property-disallowed-list */
}
.nijmegen-search__input:hover, .nijmegen-search__input.nijmegen-search__input--hover {
  background-color: var(--nijmegen-search-input-hover-background-color);
  border-color: var(--nijmegen-search-input-hover-border-color);
  color: var(--nijmegen-search-input-hover-color);
}
.nijmegen-search__input:focus, .nijmegen-search__input.nijmegen-search__input--focus {
  background-color: var(--nijmegen-search-input-focus-background-color);
  border-color: var(--nijmegen-search-input-focus-border-color);
  color: var(--nijmegen-search-input-focus-color);
}
.nijmegen-search__input:focus-visible, .nijmegen-search__input.nijmegen-search__input--focus {
  /* - The browser default focus ring should apply when these CSS custom properties are not set.
   * - Make the \`box-shadow\` value available, so components that have their own \`box-shadow\`
   *   can combine it with the focus ring box shadow.
   */
  --_utrecht-focus-ring-box-shadow: 0 0 0 var(--utrecht-focus-outline-width, 0)
    var(--utrecht-focus-inverse-outline-color, transparent);
  box-shadow: var(--_utrecht-focus-ring-box-shadow);
  outline-color: var(--utrecht-focus-outline-color, revert);
  outline-offset: var(--utrecht-focus-outline-offset, revert);
  outline-style: var(--utrecht-focus-outline-style, revert);
  outline-width: var(--utrecht-focus-outline-width, revert);
  z-index: 1;
  background-color: var(--nijmegen-search-input-focus-background-color);
  border-color: var(--nijmegen-search-input-focus-border-color);
  color: var(--nijmegen-search-input-focus-color);
}
.nijmegen-search__input:read-only, .nijmegen-search__input.nijmegen-search__input-read-only {
  background-color: var(--nijmegen-search-input-read-only-background-color);
  border-color: var(--nijmegen-search-input-read-only-border-color);
  color: var(--nijmegen-search-input-read-only-color);
}
.nijmegen-search__input.nijmegen-search__input--disabled {
  background-color: var(--nijmegen-search-input-disabled-background-color);
  border-color: var(--nijmegen-search-input-disabled-border-color);
  color: var(--nijmegen-search-input-disabled-color);
  cursor: var(--utrecht-action-disabled-cursor, not-allowed);
}
.nijmegen-search__input::placeholder {
  color: var(--nijmegen-search-input-placeholder-color);
}

.nijmegen-search__autocomplete-results {
  display: none;
  margin-block-start: var(--nijmegen-search-input-autocomplete-offset, 8px);
  position: absolute;
  top: var(--nijmegen-search-input-min-block-size); /* stylelint-disable-line property-disallowed-list */
  width: 100%; /* stylelint-disable-line property-disallowed-list */
}
.nijmegen-search__autocomplete-results--show-results {
  display: block;
}
.nijmegen-search__autocomplete-results--static {
  position: static;
}`;o(r);var s=`<form class="nijmegen-search" method="GET" action="" role="search">
  <slot></slot>
</form>
`;class h extends HTMLElement{constructor(){super();u(this,c);u(this,d);u(this,b);u(this,p);u(this,_);u(this,j);u(this,g);u(this,f);const e=document.createElement("template");e.innerHTML=s;const n=this.attachShadow({mode:"open"});n.appendChild(e.content.cloneNode(!0));const t=new CSSStyleSheet;t.replaceSync(r),n.adoptedStyleSheets=[t]}static get observedAttributes(){return["full"]}connectedCallback(){const e=this.querySelector(".nijmegen-search__input"),n=this.querySelector(".nijmegen-search__clear-button"),t=this.querySelector(".nijmegen-listbox__list"),i=this.querySelector(".nijmegen-search__autocomplete-results");l(this,c,w).call(this),l(this,d,E).call(this,e,n),i&&i.classList.contains("nijmegen-search__autocomplete-results--example")&&l(this,b,L).call(this,e,n,t,i)}attributeChangedCallback(e,n,t){e==="full"&&n!==t&&l(this,c,w).call(this)}}c=new WeakSet,w=function(){const e=this.shadowRoot.querySelector(".nijmegen-search");e&&(this.hasAttribute("full")?e.classList.add("nijmegen-search--full-width"):e.classList.remove("nijmegen-search--full-width"))},d=new WeakSet,E=function(e,n){e&&n&&(e.addEventListener("input",()=>{l(this,p,S).call(this,e,n)}),n.addEventListener("click",()=>{e.value="",l(this,p,S).call(this,e,n),e.focus()}))},b=new WeakSet,L=function(e,n,t,i){e&&n&&t&&i&&(e.addEventListener("input",()=>{e.value.trim().length>=3?l(this,_,T).call(this,e.value,Z=>{l(this,j,A).call(this,Z,t,i)}):l(this,g,N).call(this,t,i)}),n.addEventListener("click",()=>{l(this,g,N).call(this,t,i)}))},p=new WeakSet,S=function(e,n){e.value.trim().length>0?n.classList.remove("nijmegen-search__clear-button--hide"):n.classList.add("nijmegen-search__clear-button--hide")},_=new WeakSet,T=function(e,n){const t=l(this,f,I).call(this,e),i=[{title:"Finibus "+t,url:"?q=1_"+t},{title:t+" elementum urna",url:"?q=2_"+t}];n(i)},j=new WeakSet,A=function(e,n,t){n.innerHTML=e.map(i=>`<li><a href="${i.url}" class="nijmegen-listbox__item">${i.title}</a></li>`).join(""),t.classList.add("nijmegen-search__autocomplete-results--show-results")},g=new WeakSet,N=function(e,n){e.innerHTML="",n.classList.remove("nijmegen-search__autocomplete-results--show-results")},f=new WeakSet,I=function(e){const n=document.createElement("p");return n.innerText=e,n.innerHTML},customElements.define("nijmegen-search",h)})();const W={placeholder:{name:"Placeholder",control:"text"},disabled:{name:"Disabled",control:"boolean"},readOnly:{name:"Read only",control:"boolean"},icon:{name:"Search icon",control:"boolean",table:{disable:!0}},dark:{name:"Dark mode",control:"boolean"},full:{name:"Full width",control:"boolean"},autocomplete:{name:"Autocomplete",control:"boolean",table:{disable:!0}},staticAutocomplete:{name:"Static autocomplete",control:"boolean"}},q=({icon:o=!0,disabled:r=!1,readOnly:s=!1,dark:h=!1,full:c=!1,autocomplete:x=!1,staticAutocomplete:d=!1,placeholder:k="Zoeken"})=>a.jsxs("nijmegen-search",{...c&&{full:""},children:[a.jsxs("div",{className:"nijmegen-search__container",children:[a.jsxs("div",{className:"nijmegen-search__input-holder",children:[a.jsx("input",{className:m("nijmegen-search__input",r&&"nijmegen-search__input--disabled"),disabled:r,readOnly:s,id:"search",type:"text",placeholder:k,"aria-controls":"autocomplete-results","aria-autocomplete":"both","aria-label":"Zoekveld"}),a.jsx("button",{className:"nijmegen-search__clear-button nijmegen-search__clear-button--hide","aria-label":"Invoer wissen",title:"Invoer wissen",tabIndex:"-1",children:a.jsx(V,{})})]}),a.jsxs("button",{className:m("utrecht-button utrecht-button--primary-action nijmegen-search__search-button",h&&"nijmegen-search__search-button--dark"),children:[o&&a.jsx(z,{})," Zoeken"]})]}),a.jsx("div",{className:m("nijmegen-search__autocomplete-results",x&&"nijmegen-search__autocomplete-results--example",d&&"nijmegen-search__autocomplete-results--static"),children:a.jsx("div",{className:"nijmegen-listbox",role:"listbox",children:a.jsx("ul",{className:"nijmegen-listbox__list",role:"list"})})})]}),C=({icon:o=!0,disabled:r=!1,readOnly:s=!1,dark:h=!1,full:c=!1,autocomplete:x=!1,staticAutocomplete:d=!1,placeholder:k="Zoeken"})=>a.jsxs("form",{className:m("nijmegen-search",c&&"nijmegen-search--full-width"),method:"GET",action:"",role:"search",children:[a.jsxs("div",{className:"nijmegen-search__container",children:[a.jsxs("div",{className:"nijmegen-search__input-holder",children:[a.jsx("input",{className:m("nijmegen-search__input",r&&"nijmegen-search__input--disabled"),disabled:r,readOnly:s,id:"search",type:"text",placeholder:k,"aria-controls":"autocomplete-results","aria-autocomplete":"both","aria-label":"Zoekveld"}),a.jsx("button",{className:"nijmegen-search__clear-button nijmegen-search__clear-button--hide","aria-label":"Invoer wissen",title:"Invoer wissen",tabIndex:"-1",children:a.jsx(V,{})})]}),a.jsxs("button",{className:m("utrecht-button utrecht-button--primary-action nijmegen-search__search-button",h&&"nijmegen-search__search-button--dark"),children:[o&&a.jsx(z,{})," Zoeken"]})]}),a.jsx("div",{className:m("nijmegen-search__autocomplete-results",x&&"nijmegen-search__autocomplete-results--example",d&&"nijmegen-search__autocomplete-results--static"),children:a.jsx("div",{className:"nijmegen-listbox",role:"listbox",children:a.jsx("ul",{className:"nijmegen-listbox__list",role:"list"})})})]});try{q.displayName="SearchStoryWebComponent",q.__docgenInfo={description:"",displayName:"SearchStoryWebComponent",props:{icon:{defaultValue:{value:"true"},description:"",name:"icon",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},dark:{defaultValue:{value:"false"},description:"",name:"dark",required:!1,type:{name:"boolean"}},full:{defaultValue:{value:"false"},description:"",name:"full",required:!1,type:{name:"boolean"}},autocomplete:{defaultValue:{value:"false"},description:"",name:"autocomplete",required:!1,type:{name:"boolean"}},staticAutocomplete:{defaultValue:{value:"false"},description:"",name:"staticAutocomplete",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:"Zoeken"},description:"",name:"placeholder",required:!1,type:{name:"string"}}}}}catch{}try{C.displayName="SearchStory",C.__docgenInfo={description:"",displayName:"SearchStory",props:{icon:{defaultValue:{value:"true"},description:"",name:"icon",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},dark:{defaultValue:{value:"false"},description:"",name:"dark",required:!1,type:{name:"boolean"}},full:{defaultValue:{value:"false"},description:"",name:"full",required:!1,type:{name:"boolean"}},autocomplete:{defaultValue:{value:"false"},description:"",name:"autocomplete",required:!1,type:{name:"boolean"}},staticAutocomplete:{defaultValue:{value:"false"},description:"",name:"staticAutocomplete",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:"Zoeken"},description:"",name:"placeholder",required:!1,type:{name:"string"}}}}}catch{}export{C as S,W as a,q as b};
