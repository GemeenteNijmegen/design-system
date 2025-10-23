var T=(n,e,a)=>{if(!e.has(n))throw TypeError("Cannot "+a)};var p=(n,e,a)=>{if(e.has(n))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(n):e.set(n,a)};var v=(n,e,a)=>(T(n,e,"access private method"),a);import{j as E}from"./jsx-runtime-CKrituN3.js";import{s as L,r as B,p as A}from"./server.browser-rAMDWieH.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";(function(){var c,z;function n(b,l){l===void 0&&(l={});var r=l.insertAt;if(!(!b||typeof document>"u")){var t=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",r==="top"&&t.firstChild?t.insertBefore(o,t.firstChild):t.appendChild(o),o.styleSheet?o.styleSheet.cssText=b:o.appendChild(document.createTextNode(b))}}var e=`/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */
/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */
/* stylelint-disable-next-line block-no-empty */
/* stylelint-disable-next-line block-no-empty */
/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */
/* stylelint-disable-next-line block-no-empty */
.nijmegen-toolbar-button {
  /*
  \`--_utrecht-button-hint\` is the internal prefix for the applied optional hint, it is not an API.
  The hint color takes priority over the appearance color.

  \`--_utrecht-button-appearance\` is the internal prefix for the appearance
  (primary-action, secondary-action or subtle), it is not an API.
  */
  --_utrecht-button-background-color: var(
    --_utrecht-button-hint-background-color,
    var(--_utrecht-button-appearance-background-color, var(--utrecht-button-background-color))
  );
  --_utrecht-button-color: var(
    --_utrecht-button-hint-color,
    var(--_utrecht-button-appearance-color, var(--utrecht-button-color))
  );
  --_utrecht-button-border-color: var(
    --_utrecht-button-hint-border-color,
    var(--_utrecht-button-appearance-border-color, var(--utrecht-button-border-color, transparent))
  );
  --_utrecht-button-border-bottom-color: var(
    --_utrecht-button-hint-border-bottom-color,
    var(
      --_utrecht-button-hint-border-color,
      var(
        --_utrecht-button-appearance-border-bottom-color,
        var(
          --_utrecht-button-appearance-border-color,
          var(--utrecht-button-border-bottom-color, var(--utrecht-button-border-color, transparent))
        )
      )
    )
  );
  --_utrecht-button-disabled-background-color: var(
    --_utrecht-button-hint-disabled-background-color,
    var(
      --_utrecht-button-appearance-disabled-background-color,
      var(--utrecht-button-disabled-background-color, var(--utrecht-button-background-color))
    )
  );
  --_utrecht-button-disabled-border-color: var(
    --_utrecht-button-hint-disabled-border-color,
    var(
      --_utrecht-button-appearance-disabled-border-color,
      var(--utrecht-button-disabled-border-color, var(--utrecht-button-border-color))
    )
  );
  --_utrecht-button-disabled-color: var(
    --_utrecht-button-hint-disabled-color,
    var(--_utrecht-button-appearance-disabled-color, var(--utrecht-button-disabled-color, var(--utrecht-button-color)))
  );
  --_utrecht-button-pressed-background-color: var(
    --_utrecht-button-hint-pressed-background-color,
    var(
      --_utrecht-button-hint-background-color,
      var(
        --_utrecht-button-appearance-pressed-background-color,
        var(
          --_utrecht-button-appearance-background-color,
          var(--utrecht-button-pressed-background-color, var(--utrecht-button-background-color))
        )
      )
    )
  );
  --_utrecht-button-pressed-border-color: var(
    --_utrecht-button-hint-pressed-border-color,
    var(
      --_utrecht-button-hint-border-color,
      var(
        --_utrecht-button-appearance-pressed-border-color,
        var(
          --_utrecht-button-appearance-border-color,
          var(--utrecht-button-pressed-border-color, var(--utrecht-button-border-color))
        )
      )
    )
  );
  --_utrecht-button-pressed-color: var(
    --_utrecht-button-hint-pressed-color,
    var(
      --_utrecht-button-hint-color,
      var(
        --_utrecht-button-appearance-pressed-color,
        var(--_utrecht-button-appearance-color, var(--utrecht-button-pressed-color, var(--utrecht-button-color)))
      )
    )
  );
  --_utrecht-button-focus-background-color: var(
    --_utrecht-button-hint-focus-background-color,
    var(
      --_utrecht-button-hint-background-color,
      var(
        --_utrecht-button-appearance-focus-background-color,
        var(
          --_utrecht-button-appearance-background-color,
          var(--utrecht-button-focus-background-color, var(--utrecht-button-background-color))
        )
      )
    )
  );
  --_utrecht-button-focus-border-color: var(
    --_utrecht-button-hint-focus-border-color,
    var(
      --_utrecht-button-hint-border-color,
      var(
        --_utrecht-button-appearance-focus-border-color,
        var(
          --_utrecht-button-appearance-border-color,
          var(--utrecht-button-focus-border-color, var(--utrecht-button-border-color))
        )
      )
    )
  );
  --_utrecht-button-focus-color: var(
    --_utrecht-button-hint-focus-color,
    var(
      --_utrecht-button-hint-color,
      var(
        --_utrecht-button-appearance-focus-color,
        var(--_utrecht-button-appearance-color, var(--utrecht-button-focus-color, var(--utrecht-button-color)))
      )
    )
  );
  --_utrecht-button-hover-background-color: var(
    --_utrecht-button-hint-hover-background-color,
    var(
      --_utrecht-button-hint-background-color,
      var(
        --_utrecht-button-appearance-hover-background-color,
        var(
          --_utrecht-button-appearance-background-color,
          var(--utrecht-button-hover-background-color, var(--utrecht-button-background-color))
        )
      )
    )
  );
  --_utrecht-button-hover-border-color: var(
    --_utrecht-button-hint-hover-border-color,
    var(
      --_utrecht-button-hint-border-color,
      var(
        --_utrecht-button-appearance-hover-border-color,
        var(
          --_utrecht-button-appearance-border-color,
          var(--utrecht-button-hover-border-color, var(--utrecht-button-border-color))
        )
      )
    )
  );
  --_utrecht-button-hover-color: var(
    --_utrecht-button-hint-hover-color,
    var(
      --_utrecht-button-hint-color,
      var(
        --_utrecht-button-appearance-hover-color,
        var(--_utrecht-button-appearance-color, var(--utrecht-button-hover-color, var(--utrecht-button-color)))
      )
    )
  );
  --_utrecht-button-active-background-color: var(
    --_utrecht-button-hint-active-background-color,
    var(
      --_utrecht-button-hint-background-color,
      var(
        --_utrecht-button-appearance-active-background-color,
        var(
          --_utrecht-button-appearance-background-color,
          var(--utrecht-button-active-background-color, var(--utrecht-button-background-color))
        )
      )
    )
  );
  --_utrecht-button-active-border-color: var(
    --_utrecht-button-hint-active-border-color,
    var(
      --_utrecht-button-hint-border-color,
      var(
        --_utrecht-button-appearance-active-border-color,
        var(
          --_utrecht-button-appearance-border-color,
          var(--utrecht-button-active-border-color, var(--utrecht-button-border-color))
        )
      )
    )
  );
  --_utrecht-button-active-color: var(
    --_utrecht-button-hint-active-color,
    var(
      --_utrecht-button-hint-color,
      var(
        --_utrecht-button-appearance-active-color,
        var(--_utrecht-button-appearance-color, var(--utrecht-button-active-color, var(--utrecht-button-color)))
      )
    )
  );
  --_utrecht-button-border-width: var(--_utrecht-button-appearance-border-width, var(--utrecht-button-border-width, 0));
  --_utrecht-button-border-block-end-width: var(
    --utrecht-button-border-bottom-width,
    var(--_utrecht-button-border-width, 0)
  );
  --_utrecht-button-font-size: var(--_utrecht-button-appearance-font-size, var(--utrecht-button-font-size));
  --_utrecht-button-line-height: var(--_utrecht-button-appearance-line-height, var(--utrecht-button-line-height));
  --utrecht-icon-size: var(--utrecht-button-icon-size, 1em);
  align-items: center;
  background-color: var(--_utrecht-button-background-color);
  block-size: fit-content;
  border-block-end-color: var(--_utrecht-button-border-bottom-color);
  border-block-end-width: var(--_utrecht-button-border-block-end-width);
  border-color: var(--_utrecht-button-border-color);
  border-radius: var(--utrecht-button-border-radius);
  border-style: solid;
  border-width: var(--_utrecht-button-border-width);
  box-sizing: border-box;
  color: var(--_utrecht-button-color);
  column-gap: var(--utrecht-button-column-gap);
  cursor: var(--utrecht-action-activate-cursor, revert);
  display: inline-flex;
  font-family: var(--utrecht-button-font-family, var(--utrecht-document-font-family));
  font-size: var(--_utrecht-button-font-size, var(--utrecht-document-font-family, inherit));
  font-weight: var(--_utrecht-button-appearance-font-weight, var(--utrecht-button-font-weight));
  inline-size: var(--utrecht-button-inline-size, auto);
  justify-content: center;
  line-height: var(--_utrecht-button-line-height);
  max-inline-size: var(--utrecht-button-max-inline-size, fit-content);
  min-block-size: var(--utrecht-button-min-block-size, 44px);
  min-inline-size: var(--utrecht-button-min-inline-size, 44px);
  padding-block-end: var(--utrecht-button-padding-block-end);
  padding-block-start: var(--utrecht-button-padding-block-start);
  padding-inline-end: var(--utrecht-button-padding-inline-end);
  padding-inline-start: var(--utrecht-button-padding-inline-start);
  scale: 1;
  text-transform: var(--utrecht-button-text-transform);
  -webkit-user-select: none;
  user-select: none;
  --_utrecht-button-appearance-active-background-color: var(--utrecht-button-subtle-active-background-color);
  --_utrecht-button-appearance-active-border-color: var(--utrecht-button-subtle-active-border-color);
  --_utrecht-button-appearance-active-color: var(--utrecht-button-subtle-active-color);
  --_utrecht-button-appearance-background-color: var(--utrecht-button-subtle-background-color);
  --_utrecht-button-appearance-border-color: var(--utrecht-button-subtle-border-color);
  --_utrecht-button-appearance-border-width: var(--utrecht-button-subtle-border-width);
  --_utrecht-button-appearance-color: var(--utrecht-button-subtle-color);
  --_utrecht-button-appearance-font-size: var(--utrecht-button-subtle-font-size);
  --_utrecht-button-appearance-font-weight: var(--utrecht-button-subtle-font-weight);
  --_utrecht-button-appearance-line-height: var(--utrecht-button-subtle-line-height);
  --_utrecht-button-appearance-disabled-background-color: var(--utrecht-button-subtle-disabled-background-color);
  --_utrecht-button-appearance-disabled-border-color: var(--utrecht-button-subtle-disabled-border-color);
  --_utrecht-button-appearance-disabled-color: var(--utrecht-button-subtle-disabled-color);
  --_utrecht-button-appearance-focus-background-color: var(--utrecht-button-subtle-focus-background-color);
  --_utrecht-button-appearance-focus-border-color: var(--utrecht-button-subtle-focus-border-color);
  --_utrecht-button-appearance-focus-color: var(--utrecht-button-subtle-focus-color);
  --_utrecht-button-appearance-hover-background-color: var(--utrecht-button-subtle-hover-background-color);
  --_utrecht-button-appearance-hover-border-color: var(--utrecht-button-subtle-hover-border-color);
  --_utrecht-button-appearance-hover-color: var(--utrecht-button-subtle-hover-color);
  --_utrecht-button-appearance-pressed-background-color: var(--utrecht-button-subtle-pressed-background-color);
  --_utrecht-button-appearance-pressed-border-color: var(--utrecht-button-subtle-pressed-border-color);
  --_utrecht-button-appearance-pressed-color: var(--utrecht-button-subtle-pressed-color);
  column-gap: var(--nijmegen-toolbar-button-column-gap);
  cursor: pointer;
  padding-block-end: var(--nijmegen-toolbar-button-padding-block-end);
  padding-block-start: var(--nijmegen-toolbar-button-padding-block-start);
  padding-inline-end: var(--nijmegen-toolbar-button-padding-inline-end);
  padding-inline-start: var(--nijmegen-toolbar-button-padding-inline-start);
}
.nijmegen-toolbar-button.nijmegen-toolbar-button--icon-menu::before {
  mask-image: var(--nijmegen-toolbar-button-menu-icon-image, url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2" > <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <path d="M4 6l16 0" /> <path d="M4 12l16 0" /> <path d="M4 18l16 0" /> </svg>'));
}
.nijmegen-toolbar-button.nijmegen-toolbar-button--icon-menu::before {
  background-color: var(--_utrecht-button-appearance-color);
  content: "";
  display: inline-block;
  flex-shrink: 0;
  /* stylelint-disable-next-line property-disallowed-list */
  height: var(--nijmegen-toobar-button-menu-icon-height, 1.5rem);
  mask-position: center;
  mask-repeat: no-repeat;
  mask-size: 100%;
  width: var(--nijmegen-toobar-button-menu-icon-width, 1.5rem); /* stylelint-disable-line property-disallowed-list */
}
.nijmegen-toolbar-button.nijmegen-toolbar-button--icon-menu[aria-expanded=true]::before {
  mask-image: var(--nijmegen-toolbar-button-close-icon-image, url('data:image/svg+xml,<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>'));
}
.nijmegen-toolbar-button.nijmegen-toolbar-button--icon-search::before {
  mask-image: var(--nijmegen-toolbar-button-search-icon-image, url('data:image/svg+xml,<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>'));
}
.nijmegen-toolbar-button.nijmegen-toolbar-button--icon-search::before {
  background-color: var(--_utrecht-button-appearance-color);
  content: "";
  display: inline-block;
  flex-shrink: 0;
  /* stylelint-disable-next-line property-disallowed-list */
  height: var(--nijmegen-toobar-button-menu-icon-height, 1.5rem);
  mask-position: center;
  mask-repeat: no-repeat;
  mask-size: 100%;
  width: var(--nijmegen-toobar-button-menu-icon-width, 1.5rem); /* stylelint-disable-line property-disallowed-list */
}
.nijmegen-toolbar-button.nijmegen-toolbar-button--icon-search[aria-expanded=true]::before {
  mask-image: var(--nijmegen-toolbar-button-close-icon-image, url('data:image/svg+xml,<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>'));
}
.nijmegen-toolbar-button:focus-visible, .nijmegen-toolbar-button.nijmegen-toolbar-button--focus-visible {
  background-color: var(--_utrecht-button-focus-background-color);
  border-color: var(--_utrecht-button-focus-border-color);
  color: var(--_utrecht-button-focus-color);
  scale: var(--utrecht-button-focus-scale, 1);
  /* the pseudo-class for \`:focus-visible\` is implemented via the mixin */
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
}
.nijmegen-toolbar-button:active:not(:disabled, [aria-disabled=true]), .nijmegen-toolbar-button.nijmegen-toolbar-button--active {
  background-color: var(--_utrecht-button-active-background-color);
  border-color: var(--_utrecht-button-active-border-color);
  color: var(--_utrecht-button-active-color);
}
.nijmegen-toolbar-button:hover:not(:disabled, [aria-disabled=true]), .nijmegen-toolbar-button.nijmegen-toolbar-button--hover {
  background-color: var(--_utrecht-button-hover-background-color);
  border-color: var(--_utrecht-button-hover-border-color);
  color: var(--_utrecht-button-hover-color);
  scale: var(--utrecht-button-hover-scale, 1);
}`;n(e);var a=`<button class="nijmegen-toolbar-button" type="button" part="button">
  <slot></slot>
</button>
`;class u extends HTMLElement{constructor(){super();p(this,c);const r=document.createElement("template");r.innerHTML=a;const t=this.attachShadow({mode:"open"});t.appendChild(r.content.cloneNode(!0));const o=new CSSStyleSheet;o.replaceSync(e),t.adoptedStyleSheets=[o]}static get observedAttributes(){return["type","aria-controls"]}connectedCallback(){let r=this.shadowRoot.querySelector('[class*="nijmegen-toolbar-button--icon"]');r&&r.addEventListener("click",t=>{let o=t.target;if(t.target.nodeName==="SLOT"&&(o=t.target.parentElement),o.ariaExpanded=o.ariaExpanded==="true"?"false":"true",o.getAttribute("aria-controls")){const d=o.getAttribute("aria-controls");if(d==="mobile-menu"){const M=document.getElementById(d),S="nijmegen-header__mobile-menu--visible",C=o.getAttribute("aria-expanded")==="true";M.classList.toggle(S,C)}}})}attributeChangedCallback(r,t,o){r==="type"?v(this,c,z).call(this,o):r==="aria-controls"&&this.shadowRoot.querySelector(".nijmegen-toolbar-button").setAttribute("aria-controls",o)}}c=new WeakSet,z=function(r){const t=this.shadowRoot.querySelector(".nijmegen-toolbar-button");r==="menu"?(t.classList.add("nijmegen-toolbar-button--icon-menu"),t.classList.remove("nijmegen-toolbar-button--icon-search"),t.ariaExpanded="false",t.ariaLabel="Menu openen"):r==="search"?(t.classList.add("nijmegen-toolbar-button--icon-search"),t.classList.remove("nijmegen-toolbar-button--icon-menu")):t.classList.contains("nijmegen-toolbar-button--icon-menu")?(t.classList.remove("nijmegen-toolbar-button--icon-menu"),t.ariaLabel="Menu sluiten"):t.classList.contains("nijmegen-toolbar-button--icon-search")&&(t.classList.remove("nijmegen-toolbar-button--icon-search"),t.ariaLabel="Zoeken sluiten")},customElements.define("nijmegen-toolbar-button",u)})();const H=({label:n="",type:e=""})=>E.jsx("nijmegen-toolbar-button",{type:e,children:n}),q={title:"Components/Toolbar button/Web Component Implementation",id:"web-component-toolbar-button",component:H,argTypes:{label:{name:"Content",description:"Button text"},type:{name:"Type",description:"Button type",control:{type:"select"},options:["","menu","search"]}},args:{label:"Toolbar button",type:""},parameters:{status:{type:"BETA"},docs:{source:{transform:(n,e)=>{var u,c;const a=typeof e.component=="function"?e.component:typeof((u=e.component)==null?void 0:u.render)=="function"?(c=e.component)==null?void 0:c.render:null;return a?L.format(B(a(e.args)),{parser:"babel",plugins:[A]}):n}},description:{component:"The toolbar button menu and search options implement JS for toggling multiple `aria-` attributes and is therefore available as web component."}}}},i={args:{label:"Toolbar button",type:""}},s={args:{label:"Menu",type:"menu"}},h={args:{label:"Zoeken",type:"search"}};var g,m,_;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Toolbar button',
    type: ''
  }
}`,...(_=(m=i.parameters)==null?void 0:m.docs)==null?void 0:_.source}}};var f,k,w;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Menu',
    type: 'menu'
  }
}`,...(w=(k=s.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var y,j,x;h.parameters={...h.parameters,docs:{...(y=h.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Zoeken',
    type: 'search'
  }
}`,...(x=(j=h.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};const F=["Default","Menu","Search"];export{i as Default,s as Menu,h as Search,F as __namedExportsOrder,q as default};
