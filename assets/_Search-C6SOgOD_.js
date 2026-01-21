var I=(o,r,l)=>{if(!r.has(o))throw TypeError("Cannot "+l)};var d=(o,r,l)=>{if(r.has(o))throw TypeError("Cannot add the same private member more than once");r instanceof WeakSet?r.add(o):r.set(o,l)};var s=(o,r,l)=>(I(o,r,"access private method"),l);import{j as t}from"./jsx-runtime-CKrituN3.js";/* empty css                  *//* empty css              */import{c as h}from"./clsx-B-dksMZM.js";import{I as N,a as q}from"./IconX-Dxo-hgpO.js";(function(){var c,C,u,z,p,x,b,E,_,V,g,k,j,L;function o(f,v){v===void 0&&(v={});var n=v.insertAt;if(!(!f||typeof document>"u")){var e=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",n==="top"&&e.firstChild?e.insertBefore(a,e.firstChild):e.appendChild(a),a.styleSheet?a.styleSheet.cssText=f:a.appendChild(document.createTextNode(f))}}var r=`/**
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
.nijmegen-search__container {
  display: flex;
  gap: var(--nijmegen-search-input-column-gap);
  inline-size: var(--nijmegen-search-input-max-inline-size);
  max-inline-size: 100%;
  position: relative;
}
.nijmegen-search__container .utrecht-button {
  max-block-size: 51px;
  min-block-size: 51px;
}
.nijmegen-search__container.nijmegen-search__container--full-width {
  inline-size: 100%;
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
}`;o(r);var l=`<form class="nijmegen-search" method="GET" action="" role="search">
  <slot></slot>
</form>
`;class m extends HTMLElement{constructor(){super();d(this,c);d(this,u);d(this,p);d(this,b);d(this,_);d(this,g);d(this,j);const n=document.createElement("template");n.innerHTML=l;const e=this.attachShadow({mode:"open"});e.appendChild(n.content.cloneNode(!0));const a=new CSSStyleSheet;a.replaceSync(r),e.adoptedStyleSheets=[a]}connectedCallback(){const n=this.querySelector(".nijmegen-search__input"),e=this.querySelector(".nijmegen-search__clear-button"),a=this.querySelector(".nijmegen-listbox__list"),i=this.querySelector(".nijmegen-search__autocomplete-results");s(this,c,C).call(this,n,e),i&&i.classList.contains("nijmegen-search__autocomplete-results--example")&&s(this,u,z).call(this,n,e,a,i)}}c=new WeakSet,C=function(n,e){n&&e&&(n.addEventListener("input",()=>{s(this,p,x).call(this,n,e)}),e.addEventListener("click",()=>{n.value="",s(this,p,x).call(this,n,e),n.focus()}))},u=new WeakSet,z=function(n,e,a,i){n&&e&&a&&i&&(n.addEventListener("input",()=>{n.value.trim().length>=3?s(this,b,E).call(this,n.value,T=>{s(this,_,V).call(this,T,a,i)}):s(this,g,k).call(this,a,i)}),e.addEventListener("click",()=>{s(this,g,k).call(this,a,i)}))},p=new WeakSet,x=function(n,e){n.value.trim().length>0?e.classList.remove("nijmegen-search__clear-button--hide"):e.classList.add("nijmegen-search__clear-button--hide")},b=new WeakSet,E=function(n,e){const a=s(this,j,L).call(this,n),i=[{title:"Finibus "+a,url:"?q=1_"+a},{title:a+" elementum urna",url:"?q=2_"+a}];e(i)},_=new WeakSet,V=function(n,e,a){e.innerHTML=n.map(i=>`<li><a href="${i.url}" class="nijmegen-listbox__item">${i.title}</a></li>`).join(""),a.classList.add("nijmegen-search__autocomplete-results--show-results")},g=new WeakSet,k=function(n,e){n.innerHTML="",e.classList.remove("nijmegen-search__autocomplete-results--show-results")},j=new WeakSet,L=function(n){const e=document.createElement("p");return e.innerText=n,e.innerHTML},customElements.define("nijmegen-search",m)})();const F={placeholder:{name:"Placeholder",control:"text"},disabled:{name:"Disabled",control:"boolean"},readOnly:{name:"Read only",control:"boolean"},icon:{name:"Search icon",control:"boolean",table:{disable:!0}},dark:{name:"Dark mode",control:"boolean"},full:{name:"Full width",control:"boolean"},autocomplete:{name:"Autocomplete",control:"boolean",table:{disable:!0}}},w=({icon:o=!0,disabled:r=!1,readOnly:l=!1,dark:m=!1,full:c=!1,autocomplete:y=!1,placeholder:u="Zoeken"})=>t.jsx("nijmegen-search",{children:t.jsxs("div",{className:h("nijmegen-search__container",c&&"nijmegen-search__container--full-width"),children:[t.jsxs("div",{className:"nijmegen-search__input-holder",children:[t.jsx("input",{className:h("nijmegen-search__input",r&&"nijmegen-search__input--disabled"),disabled:r,readOnly:l,id:"search",type:"text",placeholder:u,"aria-controls":"autocomplete-results","aria-autocomplete":"both","aria-label":"Zoekveld"}),t.jsx("button",{className:"nijmegen-search__clear-button nijmegen-search__clear-button--hide","aria-label":"Invoer wissen",title:"Invoer wissen",tabIndex:"-1",children:t.jsx(N,{})})]}),t.jsxs("button",{className:h("utrecht-button utrecht-button--primary-action nijmegen-search__search-button",m&&"nijmegen-search__search-button--dark"),children:[o&&t.jsx(q,{})," Zoeken"]}),t.jsx("div",{className:h("nijmegen-search__autocomplete-results",y&&"nijmegen-search__autocomplete-results--example"),children:t.jsx("div",{className:"nijmegen-listbox",role:"listbox",children:t.jsx("ul",{className:"nijmegen-listbox__list",role:"list"})})})]})}),S=({icon:o=!0,disabled:r=!1,readOnly:l=!1,dark:m=!1,full:c=!1,autocomplete:y=!1,placeholder:u="Zoeken"})=>t.jsx("form",{className:"nijmegen-search",method:"GET",action:"",role:"search",children:t.jsxs("div",{className:h("nijmegen-search__container",c&&"nijmegen-search__container--full-width"),children:[t.jsxs("div",{className:"nijmegen-search__input-holder",children:[t.jsx("input",{className:h("nijmegen-search__input",r&&"nijmegen-search__input--disabled"),disabled:r,readOnly:l,id:"search",type:"text",placeholder:u,"aria-controls":"autocomplete-results","aria-autocomplete":"both","aria-label":"Zoekveld"}),t.jsx("button",{className:"nijmegen-search__clear-button nijmegen-search__clear-button--hide","aria-label":"Invoer wissen",title:"Invoer wissen",tabIndex:"-1",children:t.jsx(N,{})})]}),t.jsxs("button",{className:h("utrecht-button utrecht-button--primary-action nijmegen-search__search-button",m&&"nijmegen-search__search-button--dark"),children:[o&&t.jsx(q,{})," Zoeken"]}),t.jsx("div",{className:h("nijmegen-search__autocomplete-results",y&&"nijmegen-search__autocomplete-results--example"),children:t.jsx("div",{className:"nijmegen-listbox",role:"listbox",children:t.jsx("ul",{className:"nijmegen-listbox__list",role:"list"})})})]})});try{w.displayName="SearchStoryWebComponent",w.__docgenInfo={description:"",displayName:"SearchStoryWebComponent",props:{icon:{defaultValue:{value:"true"},description:"",name:"icon",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},dark:{defaultValue:{value:"false"},description:"",name:"dark",required:!1,type:{name:"boolean"}},full:{defaultValue:{value:"false"},description:"",name:"full",required:!1,type:{name:"boolean"}},autocomplete:{defaultValue:{value:"false"},description:"",name:"autocomplete",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:"Zoeken"},description:"",name:"placeholder",required:!1,type:{name:"string"}}}}}catch{}try{S.displayName="SearchStory",S.__docgenInfo={description:"",displayName:"SearchStory",props:{icon:{defaultValue:{value:"true"},description:"",name:"icon",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},dark:{defaultValue:{value:"false"},description:"",name:"dark",required:!1,type:{name:"boolean"}},full:{defaultValue:{value:"false"},description:"",name:"full",required:!1,type:{name:"boolean"}},autocomplete:{defaultValue:{value:"false"},description:"",name:"autocomplete",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:"Zoeken"},description:"",name:"placeholder",required:!1,type:{name:"string"}}}}}catch{}export{S,F as a,w as b};
