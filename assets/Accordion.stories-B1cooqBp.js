import{j as s}from"./jsx-runtime-CKrituN3.js";import{H as h}from"./HtmlTransformer-CIQzRuZl.js";import{A as f,a as b,b as g}from"./_Accordion-DWEAn_KQ.js";import"./index-Uj-N_Xw0.js";import{I as x}from"./IconChevronDown-xLOYuVOv.js";const A=`<div class="utrecht-accordion">
  <slot></slot>
</div>
`;class E extends HTMLElement{constructor(){super();const e=document.createElement("template");e.innerHTML=A,this.attachShadow({mode:"open"}).appendChild(e.content.cloneNode(!0))}connectedCallback(){Array.from(this.children).forEach(e=>{const a=e.querySelectorAll("[aria-expanded]");a.forEach(t=>{t.addEventListener("click",i=>{let o=i.target.closest("[aria-expanded]");this.handleClick(o,a)})})})}handleClick(e,a){a.forEach(t=>{if(t===e){const i=e.closest(".utrecht-accordion__section"),o=i?i.querySelector(".utrecht-accordion__panel"):null;o&&(t.ariaExpanded=t.ariaExpanded==="true"?"false":"true",o.ariaHidden=t.ariaExpanded==="false"?"true":"false",o.ariaHidden==="false"?o.removeAttribute("hidden"):o.setAttribute("hidden",""))}})}}customElements.get("nijmegen-accordion")||customElements.define("nijmegen-accordion",E);const y={title:"Components/Accordion/Web Component Implementation",id:"web-component-accordion",component:f,argTypes:b,args:{label:"",body:"",icon:s.jsx("span",{className:"utrecht-icon",children:s.jsx(x,{})})},parameters:{status:{type:"BETA"},docs:{source:{transform:h}}}},n={args:{label:"Title",body:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.`}},r={name:"Accordion with sections",args:{sections:g}};var c,d,l;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Title',
    body: \`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.\`
  }
}`,...(l=(d=n.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,u,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Accordion with sections',
  args: {
    sections: accordionData
  }
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const q=["Default","AccordionWithSections"],w=Object.freeze(Object.defineProperty({__proto__:null,AccordionWithSections:r,Default:n,__namedExportsOrder:q,default:y},Symbol.toStringTag,{value:"Module"}));export{r as A,n as D,w as a};
