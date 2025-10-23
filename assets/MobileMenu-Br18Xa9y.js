var z=(a,t,o)=>{if(!t.has(a))throw TypeError("Cannot "+o)};var c=(a,t,o)=>{if(t.has(a))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(a):t.set(a,o)};var r=(a,t,o)=>(z(a,t,"access private method"),o);import{j as e}from"./jsx-runtime-CKrituN3.js";import{S as x}from"./index-BNvQJCla.js";import{c as S}from"./createReactComponent-D_5DJZVZ.js";import{I as f}from"./IconUser-CHKGFGGR.js";import{I as v}from"./IconExternalLink-DvrFVVe4.js";/**
 * @license @tabler/icons-react v3.20.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var w=S("outline","world","IconWorld",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M3.6 9h16.8",key:"svg-1"}],["path",{d:"M3.6 15h16.8",key:"svg-2"}],["path",{d:"M11.5 3a17 17 0 0 0 0 18",key:"svg-3"}],["path",{d:"M12.5 3a17 17 0 0 1 0 18",key:"svg-4"}]]);(function(){var d,y,u,N,g,C,m,p;function a(h,j){j===void 0&&(j={});var l=j.insertAt;if(!(!h||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",l==="top"&&i.firstChild?i.insertBefore(n,i.firstChild):i.appendChild(n),n.styleSheet?n.styleSheet.cssText=h:n.appendChild(document.createTextNode(h))}}var t=`/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */
/* stylelint-disable scss/no-global-function-names */
/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */
/* stylelint-disable-next-line block-no-empty */
/*

# CSS implementation

## \`text-decoration-skip\`

\`text-decoration-skip\` can be helpful to avoid making some texts unreadable.
For example by obscuring Arabic diacritics.

However, the combination of a greater thickness and skipping this thick underline
leads to a very unappealing rendering of the underline. To avoid this,
\`text-decoration-skip\` is disabled for interactive states.

For design token configurations that have identical thickness for normal and interactive
states, this will lead to the (undesirable) effect that the focus/hover effect is switching
from an interrupted to an uninterrupted underline (for some texts).

Apart from making \`skip-ink\` configurable for normal/focus/hover, there is no good solution yet.

---

Disabling \`text-decoration-skip\` for interactive states obscures some texts, and we assume for now
that moving the pointer away from a link or having focus elsewhere first is simple enough to
not make this too inconvenient.

---

Some folks implement the underline of links using \`border-bottom\` or even using a finely crafted
\`linear-gradient()\` with a solid color at the bottom and transparent behind the text. These approaches
would unfortunately not be able to provide the improved readability of \`text-decoration-skip\`.

## \`text-decoration-thickness\`

Varying \`text-decoration-thickness\` can be used to distinguish interactive states.

---

\`text-decoration-thickness\` appears to have rendering differences between Chrome and Safari.
In Safari the line becomes thicker with extra pixels added to the bottom, while in Chrome
the underline offset also seems to increase along with the thickness, which effectively means
the underline is closer to the next line than in Safari.

---

It might be nice to use font-relative units for \`text-decoration-thickness\`, and that is why we
use the \`max()\` function to ensure the underline remains visible for every font size.

## \`transition\`

\`text-decoration-thickness\` could be a candidate for animating between interactive states,
however browsers don't seem to have implemented great looking supixel tweening yet.

\`text-decoration-skip\` also makes the transition more challenging to implement.

*/
/**
 * Simulate forced-colors mode.
 */
/* stylelint-disable-next-line block-no-empty */
/* stylelint-disable-next-line block-no-empty */
/* stylelint-disable-next-line block-no-empty */
/* stylelint-disable-next-line block-no-empty */
/**
 * Link for elements such as \`<img>\` or \`<article>\`, that are not inline elements or plain text.
 * 
 * Changing \`display: inline\` to \`inline-block\` ensures the focus outline is rendered around the entire box.
 */
/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */
/* stylelint-disable-next-line block-no-empty */
.nijmegen-mobile-menu {
  background-color: var(--nijmegen-menu-background-color);
  position: relative;
}

.nijmegen-mobile-menu__list {
  display: flex;
  flex-direction: column;
  line-height: var(--nijmegen-menu-link-line-height);
  list-style: none;
  padding-inline-start: 0;
}

.nijmegen-mobile-menu__link {
  background-color: var(--nijmegen-menu-background-color);
  box-sizing: border-box;
  color: var(--nijmegen-menu-link-color);
  cursor: pointer;
  display: flex;
  font-family: var(--nijmegen-menu-link-font-family);
  font-size: var(--nijmegen-menu-link-font-size);
  font-weight: var(--nijmegen-menu-link-font-weight);
  justify-content: space-between;
  padding-block-end: var(--nijmegen-menu-link-padding-block-end);
  padding-block-start: var(--nijmegen-menu-link-padding-block-start);
  padding-inline-end: var(--nijmegen-menu-link-padding-inline-end);
  padding-inline-start: var(--nijmegen-menu-link-padding-inline-start);
  position: relative;
  text-decoration: none;
  width: 100%; /* stylelint-disable-line property-disallowed-list */
}
.nijmegen-mobile-menu__link:is(button) {
  appearance: none;
  border: 0;
}
.nijmegen-mobile-menu__link:focus, .nijmegen-mobile-menu__link.nijmegen-mobile-menu__link--focus {
  --_utrecht-link-state-color: var(--utrecht-link-focus-color);
  background-color: var(--utrecht-link-focus-background-color, transparent);
  text-decoration-skip: none;
  text-decoration-skip-ink: none;
}
.nijmegen-mobile-menu__link:focus-visible, .nijmegen-mobile-menu__link.nijmegen-mobile-menu__link--focus-visible {
  --_utrecht-link-state-color: var(--utrecht-link-focus-color);
  background-color: var(--utrecht-link-focus-background-color, transparent);
  text-decoration-skip: none;
  text-decoration-skip-ink: none;
  /*
   * WCAG SC 2.4.12: Focus Not Obscured
   * Use \`z-index\` to ensure the focus ring is stacked above adjecent elements with a \`background\`
   */
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
  /*
   * The following tokens are deprecated, but we keep them for backwards compatibility for now:
   * 
   * \`--utrecht-link-focus-text-decoration\`
   * \`--utrecht-link-focus-text-decoration-thickness\`
   */
  --_utrecht-link-state-text-decoration: var(
    --utrecht-link-focus-visible-text-decoration,
    var(--utrecht-link-focus-text-decoration)
  );
  --_utrecht-link-state-text-decoration-thickness: var(
    --utrecht-link-focus-visible-text-decoration-thickness,
    var(--utrecht-link-focus-text-decoration-thickness)
  );
  z-index: var(--utrecht-stack-focus-z-index, 1);
}
.nijmegen-mobile-menu__link span {
  align-items: center;
  display: inline-flex;
  gap: var(--nijmegen-menu-link-column-gap);
}
.nijmegen-mobile-menu__link svg {
  stroke: currentColor;
}
.nijmegen-mobile-menu__link--small {
  font-size: var(--nijmegen-menu-link-small-font-size);
  padding-block-end: var(--nijmegen-menu-link-small-padding-block-end);
  padding-block-start: var(--nijmegen-menu-link-small-padding-block-start);
  padding-inline-end: var(--nijmegen-menu-link-small-padding-inline-end);
  padding-inline-start: var(--nijmegen-menu-link-small-padding-inline-start);
}
.nijmegen-mobile-menu__link--small span {
  gap: var(--nijmegen-menu-link-small-column-gap);
}
.nijmegen-mobile-menu__link--strong {
  font-weight: var(--nijmegen-menu-link-level-1-font-weight);
}
.nijmegen-mobile-menu__link--back {
  font-weight: var(--nijmegen-menu-link-level-1-font-weight);
  padding-block-end: var(--nijmegen-menu-button-padding-block-end);
  padding-block-start: var(--nijmegen-menu-button-padding-block-start);
  padding-inline-end: var(--nijmegen-menu-button-padding-inline-end);
  padding-inline-start: var(--nijmegen-menu-button-padding-inline-start);
}
.nijmegen-mobile-menu__link--back span::before {
  background-color: currentColor;
  content: "";
  display: inline-block;
  /* stylelint-disable-next-line property-disallowed-list */
  height: var(--nijmegen-header-item-icon-size, 1.5rem);
  mask-position: center;
  mask-repeat: no-repeat;
  mask-size: 100%;
  width: var(--nijmegen-header-item-icon-size, 1.5rem); /* stylelint-disable-line property-disallowed-list */
  mask-image: var(--nijmegen-header-item-open-icon-image, url('data:image/svg+xml,<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6" /></svg>'));
}
.nijmegen-mobile-menu__link--current {
  color: var(--nijmegen-menu-link-current-color);
  font-weight: var(--nijmegen-menu-link-current-font-weight, 600);
}
.nijmegen-mobile-menu__link--current::after {
  border-inline-start-color: var(--nijmegen-menu-link-current-border-color);
  border-inline-start-style: solid;
  border-inline-start-width: var(--nijmegen-menu-link-current-border-width, 4px);
  content: "";
  inset: 0;
  position: absolute;
}
.nijmegen-mobile-menu__link--expanded, .nijmegen-mobile-menu__link[aria-expanded=true] {
  background-color: var(--nijmegen-menu-link-expanded-background-color);
  color: var(--nijmegen-menu-link-expanded-color);
  font-weight: var(--nijmegen-menu-link-expanded-font-weight, 600);
}
.nijmegen-mobile-menu__link--expanded svg, .nijmegen-mobile-menu__link--expanded::after, .nijmegen-mobile-menu__link[aria-expanded=true] svg, .nijmegen-mobile-menu__link[aria-expanded=true]::after {
  transform: scaleY(-1);
}
.nijmegen-mobile-menu__link--chevron::after {
  background-color: currentColor;
  content: "";
  display: inline-block;
  /* stylelint-disable-next-line property-disallowed-list */
  height: var(--nijmegen-header-item-icon-size, 1.5rem);
  mask-position: center;
  mask-repeat: no-repeat;
  mask-size: 100%;
  width: var(--nijmegen-header-item-icon-size, 1.5rem); /* stylelint-disable-line property-disallowed-list */
  mask-image: var(--nijmegen-header-item-open-icon-image, url('data:image/svg+xml,<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg>'));
}
.nijmegen-mobile-menu__link--arrow::after {
  background-color: currentColor;
  content: "";
  display: inline-block;
  /* stylelint-disable-next-line property-disallowed-list */
  height: var(--nijmegen-header-item-icon-size, 1.5rem);
  mask-position: center;
  mask-repeat: no-repeat;
  mask-size: 100%;
  width: var(--nijmegen-header-item-icon-size, 1.5rem); /* stylelint-disable-line property-disallowed-list */
  mask-image: var(--nijmegen-header-item-open-icon-image, url('data:image/svg+xml,<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>'));
}

.nijmegen-mobile-menu__details-content {
  display: none;
}

.nijmegen-mobile-menu__details .nijmegen-mobile-menu__list {
  display: none;
}
.nijmegen-mobile-menu__details--open .nijmegen-mobile-menu__list {
  display: block;
}

.nijmegen-mobile-menu__separator {
  padding-inline-end: var(--nijmegen-menu-link-padding-inline-end);
  padding-inline-start: var(--nijmegen-menu-link-padding-inline-start);
}

.nijmegen-mobile-menu__panel {
  background-color: var(--nijmegen-menu-background-color);
  display: none;
  flex-direction: column;
  gap: var(--nijmegen-menu-link-column-gap);
  inset: 0;
  min-height: 100%; /* stylelint-disable-line property-disallowed-list */
  position: absolute;
  width: 100%; /* stylelint-disable-line property-disallowed-list */
  z-index: 10;
}
.nijmegen-mobile-menu__panel--active {
  display: flex;
}`;a(t);var o=`<nav class="nijmegen-mobile-menu">
  <slot></slot>
</nav>
`;class E extends HTMLElement{constructor(){super();c(this,d);c(this,u);c(this,g);c(this,m);const l=document.createElement("template");l.innerHTML=o;const i=this.attachShadow({mode:"open"});i.appendChild(l.content.cloneNode(!0));const n=new CSSStyleSheet;n.replaceSync(t),i.adoptedStyleSheets=[n]}connectedCallback(){Array.from(this.children).forEach(l=>{l.addEventListener("click",i=>{const n=i.target.closest("[aria-expanded]");if(n&&!n.hasAttribute("data-panel")){r(this,g,C).call(this,n);return}const s=i.target.closest("[data-panel]");s&&r(this,m,p).call(this,s,!1)}),l.addEventListener("keydown",i=>{if(i.key==="Enter"||i.key===" "){const n=i.target.closest("[data-panel]");n&&(i.preventDefault(),r(this,m,p).call(this,n,!0))}}),l.addEventListener("focusout",i=>{setTimeout(()=>{r(this,d,y).call(this,i.target)},0)})})}}d=new WeakSet,y=function(l){const i=l.closest(".nijmegen-mobile-menu__panel");if(!i)return;const n=document.activeElement;n&&i.contains(n)||r(this,u,N).call(this,i)},u=new WeakSet,N=function(l){const i=l.closest("li"),n=i==null?void 0:i.querySelector("[aria-expanded]");n&&n.ariaExpanded==="true"&&(n.ariaExpanded="false",l.classList.remove("nijmegen-mobile-menu__panel--active"))},g=new WeakSet,C=function(l){const i=l.ariaExpanded==="true",n=l.parentElement;l.ariaExpanded=i?"false":"true",n.classList.toggle("nijmegen-mobile-menu__details--open",!i)},m=new WeakSet,p=function(l,i){const n=l.closest("li"),s=n==null?void 0:n.querySelector("[aria-expanded]"),_=n==null?void 0:n.querySelector(".nijmegen-mobile-menu__panel");if(!s||!_)return;const b=s.ariaExpanded==="true";if(s.ariaExpanded=b?"false":"true",_.classList.toggle("nijmegen-mobile-menu__panel--active",!b),i)if(b)s.focus();else{const k=_.querySelector("a, button");k==null||k.focus()}},customElements.define("nijmegen-mobile-menu",E)})();const U=()=>e.jsxs("nijmegen-mobile-menu",{children:[e.jsxs("ul",{className:"nijmegen-mobile-menu__list",children:[e.jsx("li",{children:e.jsx("a",{href:"/",target:"_self",className:"nijmegen-mobile-menu__link nijmegen-mobile-menu__link--strong nijmegen-mobile-menu__link--current",children:"Home"})}),e.jsx("li",{children:e.jsxs("div",{className:"nijmegen-mobile-menu__details",children:[e.jsx("button",{"aria-expanded":"false",className:"nijmegen-mobile-menu__link nijmegen-mobile-menu__link--chevron nijmegen-mobile-menu__link--strong",children:e.jsx("span",{children:"Onderwerpen"})}),e.jsxs("ul",{className:"nijmegen-mobile-menu__list",children:[e.jsxs("li",{children:[e.jsx("button",{className:"nijmegen-mobile-menu__link","aria-expanded":"false","aria-haspopup":"menu","data-panel":!0,children:e.jsx("span",{children:"Identiteit"})}),e.jsxs("div",{className:"nijmegen-mobile-menu__panel",children:[e.jsx("button",{className:"nijmegen-mobile-menu__link nijmegen-mobile-menu__link--back","data-panel":!0,children:e.jsx("span",{children:"Identiteit"})}),e.jsxs("ul",{className:"nijmegen-mobile-menu__list",children:[e.jsx("li",{children:e.jsx("a",{href:"/",target:"_self",className:"nijmegen-mobile-menu__link nijmegen-mobile-menu__link--arrow",children:"Paspoort en identiteitskaart"})}),e.jsx("li",{children:e.jsx("a",{href:"/",target:"_self",className:"nijmegen-mobile-menu__link nijmegen-mobile-menu__link--arrow",children:"Uittreksels, verklaringen & bewijzen"})}),e.jsx("li",{children:e.jsx("a",{href:"/",target:"_self",className:"nijmegen-mobile-menu__link nijmegen-mobile-menu__link--arrow",children:"Geboorte en overlijden"})}),e.jsx("li",{children:e.jsx("a",{href:"/",target:"_self",className:"nijmegen-mobile-menu__link nijmegen-mobile-menu__link--arrow",children:"Trouwen en scheiden"})})]})]})]}),e.jsxs("li",{children:[e.jsx("button",{className:"nijmegen-mobile-menu__link","aria-expanded":"false","aria-haspopup":"menu","data-panel":!0,children:e.jsx("span",{children:"Wonen"})}),e.jsxs("div",{className:"nijmegen-mobile-menu__panel",children:[e.jsx("button",{className:"nijmegen-mobile-menu__link nijmegen-mobile-menu__link--back","data-panel":!0,children:e.jsx("span",{children:"Wonen"})}),e.jsxs("ul",{className:"nijmegen-mobile-menu__list",children:[e.jsx("li",{children:e.jsx("a",{href:"/",target:"_self",className:"nijmegen-mobile-menu__link nijmegen-mobile-menu__link--arrow",children:"Verhuizen en migratie"})}),e.jsx("li",{children:e.jsx("a",{href:"/",target:"_self",className:"nijmegen-mobile-menu__link nijmegen-mobile-menu__link--arrow",children:"Belastingen"})}),e.jsx("li",{children:e.jsx("a",{href:"/",target:"_self",className:"nijmegen-mobile-menu__link nijmegen-mobile-menu__link--arrow",children:"Erfpacht"})}),e.jsx("li",{children:e.jsx("a",{href:"/",target:"_self",className:"nijmegen-mobile-menu__link nijmegen-mobile-menu__link--arrow",children:"Verbouwen en wonen"})})]})]})]})]})]})}),e.jsx("li",{children:e.jsx("a",{href:"/",className:"nijmegen-mobile-menu__link nijmegen-mobile-menu__link--strong",children:"Nieuws"})}),e.jsx("li",{children:e.jsx("a",{href:"/",className:"nijmegen-mobile-menu__link nijmegen-mobile-menu__link--strong",children:"Contact"})})]}),e.jsx("div",{className:"nijmegen-mobile-menu__separator",children:e.jsx(x,{})}),e.jsxs("ul",{className:"nijmegen-mobile-menu__list",children:[e.jsx("li",{children:e.jsxs("div",{className:"nijmegen-mobile-menu__details",children:[e.jsxs("button",{"aria-expanded":"false",className:"nijmegen-mobile-menu__link nijmegen-mobile-menu__link--chevron nijmegen-mobile-menu__link--strong nijmegen-mobile-menu__link--small",children:[e.jsxs("span",{children:[e.jsx(w,{})," Nederlands"]})," "]}),e.jsxs("ul",{className:"nijmegen-mobile-menu__list",children:[e.jsx("li",{children:e.jsx("a",{href:"/",target:"_self",className:"nijmegen-mobile-menu__link nijmegen-mobile-menu__link--small",children:"English (Engels)"})}),e.jsx("li",{children:e.jsx("a",{href:"/",target:"_self",className:"nijmegen-mobile-menu__link nijmegen-mobile-menu__link--small",children:"Deutsch (Duits)"})}),e.jsx("li",{children:e.jsx("a",{href:"/",target:"_self",className:"nijmegen-mobile-menu__link nijmegen-mobile-menu__link--small",children:"Français (Frans)"})}),e.jsx("li",{children:e.jsx("a",{href:"/",target:"_self",className:"nijmegen-mobile-menu__link nijmegen-mobile-menu__link--small",children:"Türkçe (Turks)"})}),e.jsx("li",{children:e.jsxs("a",{href:"/",target:"_self",className:"nijmegen-mobile-menu__link nijmegen-mobile-menu__link--small",children:["العربية (Arabisch)"," "]})})]})]})}),e.jsx("li",{children:e.jsxs("a",{href:"/",target:"_blank",className:"nijmegen-mobile-menu__link nijmegen-mobile-menu__link--strong nijmegen-mobile-menu__link--small",children:[e.jsxs("span",{children:[e.jsx(f,{})," Mijn Nijmegen"]})," ",e.jsx(v,{})]})})]})]}),A=()=>e.jsxs("nav",{className:"nijmegen-mobile-menu",children:[e.jsxs("ul",{className:"nijmegen-mobile-menu__list",children:[e.jsx("li",{children:e.jsx("a",{href:"/",target:"_self",className:"nijmegen-mobile-menu__link nijmegen-mobile-menu__link--strong nijmegen-mobile-menu__link--current",children:"Home"})}),e.jsx("li",{children:e.jsxs("div",{className:"nijmegen-mobile-menu__details",children:[e.jsx("button",{"aria-expanded":"false",className:"nijmegen-mobile-menu__link nijmegen-mobile-menu__link--chevron nijmegen-mobile-menu__link--strong",children:e.jsx("span",{children:"Onderwerpen"})}),e.jsxs("ul",{className:"nijmegen-mobile-menu__list",children:[e.jsxs("li",{children:[e.jsx("button",{className:"nijmegen-mobile-menu__link","aria-expanded":"false","aria-haspopup":"menu","data-panel":!0,children:e.jsx("span",{children:"Identiteit"})}),e.jsxs("div",{className:"nijmegen-mobile-menu__panel",children:[e.jsx("button",{className:"nijmegen-mobile-menu__link nijmegen-mobile-menu__link--back","data-panel":!0,children:e.jsx("span",{children:"Identiteit"})}),e.jsxs("ul",{className:"nijmegen-mobile-menu__list",children:[e.jsx("li",{children:e.jsx("a",{href:"/",target:"_self",className:"nijmegen-mobile-menu__link nijmegen-mobile-menu__link--arrow",children:"Paspoort en identiteitskaart"})}),e.jsx("li",{children:e.jsx("a",{href:"/",target:"_self",className:"nijmegen-mobile-menu__link nijmegen-mobile-menu__link--arrow",children:"Uittreksels, verklaringen & bewijzen"})}),e.jsx("li",{children:e.jsx("a",{href:"/",target:"_self",className:"nijmegen-mobile-menu__link nijmegen-mobile-menu__link--arrow",children:"Geboorte en overlijden"})}),e.jsx("li",{children:e.jsx("a",{href:"/",target:"_self",className:"nijmegen-mobile-menu__link nijmegen-mobile-menu__link--arrow",children:"Trouwen en scheiden"})})]})]})]}),e.jsxs("li",{children:[e.jsx("button",{className:"nijmegen-mobile-menu__link","aria-expanded":"false","aria-haspopup":"menu","data-panel":!0,children:e.jsx("span",{children:"Wonen"})}),e.jsxs("div",{className:"nijmegen-mobile-menu__panel",children:[e.jsx("button",{className:"nijmegen-mobile-menu__link nijmegen-mobile-menu__link--back","data-panel":!0,children:e.jsx("span",{children:"Wonen"})}),e.jsxs("ul",{className:"nijmegen-mobile-menu__list",children:[e.jsx("li",{children:e.jsx("a",{href:"/",target:"_self",className:"nijmegen-mobile-menu__link nijmegen-mobile-menu__link--arrow",children:"Verhuizen en migratie"})}),e.jsx("li",{children:e.jsx("a",{href:"/",target:"_self",className:"nijmegen-mobile-menu__link nijmegen-mobile-menu__link--arrow",children:"Belastingen"})}),e.jsx("li",{children:e.jsx("a",{href:"/",target:"_self",className:"nijmegen-mobile-menu__link nijmegen-mobile-menu__link--arrow",children:"Erfpacht"})}),e.jsx("li",{children:e.jsx("a",{href:"/",target:"_self",className:"nijmegen-mobile-menu__link nijmegen-mobile-menu__link--arrow",children:"Verbouwen en wonen"})})]})]})]})]})]})}),e.jsx("li",{children:e.jsx("a",{href:"/",className:"nijmegen-mobile-menu__link nijmegen-mobile-menu__link--strong",children:"Nieuws"})}),e.jsx("li",{children:e.jsx("a",{href:"/",className:"nijmegen-mobile-menu__link nijmegen-mobile-menu__link--strong",children:"Contact"})})]}),e.jsx("div",{className:"nijmegen-mobile-menu__separator",children:e.jsx(x,{})}),e.jsxs("ul",{className:"nijmegen-mobile-menu__list",children:[e.jsx("li",{children:e.jsxs("div",{className:"nijmegen-mobile-menu__details",children:[e.jsxs("button",{"aria-expanded":"false",className:"nijmegen-mobile-menu__link nijmegen-mobile-menu__link--chevron nijmegen-mobile-menu__link--strong nijmegen-mobile-menu__link--small",children:[e.jsxs("span",{children:[e.jsx(w,{})," Nederlands"]})," "]}),e.jsxs("ul",{className:"nijmegen-mobile-menu__list",children:[e.jsx("li",{children:e.jsx("a",{href:"/",target:"_self",className:"nijmegen-mobile-menu__link nijmegen-mobile-menu__link--small",children:"English (Engels)"})}),e.jsx("li",{children:e.jsx("a",{href:"/",target:"_self",className:"nijmegen-mobile-menu__link nijmegen-mobile-menu__link--small",children:"Deutsch (Duits)"})}),e.jsx("li",{children:e.jsx("a",{href:"/",target:"_self",className:"nijmegen-mobile-menu__link nijmegen-mobile-menu__link--small",children:"Français (Frans)"})}),e.jsx("li",{children:e.jsx("a",{href:"/",target:"_self",className:"nijmegen-mobile-menu__link nijmegen-mobile-menu__link--small",children:"Türkçe (Turks)"})}),e.jsx("li",{children:e.jsxs("a",{href:"/",target:"_self",className:"nijmegen-mobile-menu__link nijmegen-mobile-menu__link--small",children:["العربية (Arabisch)"," "]})})]})]})}),e.jsx("li",{children:e.jsxs("a",{href:"/",target:"_blank",className:"nijmegen-mobile-menu__link nijmegen-mobile-menu__link--strong nijmegen-mobile-menu__link--small",children:[e.jsxs("span",{children:[e.jsx(f,{})," Mijn Nijmegen"]})," ",e.jsx(v,{})]})})]})]});export{A as M,U as a};
