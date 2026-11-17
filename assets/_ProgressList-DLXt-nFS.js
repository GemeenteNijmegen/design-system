var _=(o,e,s)=>{if(!e.has(o))throw TypeError("Cannot "+s)};var b=(o,e,s)=>{if(e.has(o))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(o):e.set(o,s)};var j=(o,e,s)=>(_(o,e,"access private method"),s);import{j as n}from"./jsx-runtime-CKrituN3.js";/* empty css                  */import{I as f}from"./IconChevronDown-xLOYuVOv.js";(function(){var l,x,a,y;function o(c,p){p===void 0&&(p={});var i=p.insertAt;if(!(!c||typeof document>"u")){var t=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",i==="top"&&t.firstChild?t.insertBefore(r,t.firstChild):t.appendChild(r),r.styleSheet?r.styleSheet.cssText=c:r.appendChild(document.createTextNode(c))}}var e=`/* stylelint-disable no-descending-specificity */
/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */
/**
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
.nijmegen-progress-list,
nijmegen-progress-list {
  /* Configure \`box-sizing\` and \`text-align\` for \`--center\` */
  box-sizing: border-box;
  font-family: var(--utrecht-document-font-family, inherit);
  font-size: var(--utrecht-unordered-list-font-size, var(--utrecht-document-font-size, inherit));
  line-height: var(--utrecht-unordered-list-line-height, var(--utrecht-document-line-height, inherit));
  margin-block-end: calc(var(--utrecht-space-around, 0) * var(--utrecht-unordered-list-margin-block-end, var(--utrecht-paragraph-margin-block-end, 0)));
  margin-block-start: calc(var(--utrecht-space-around, 0) * var(--utrecht-unordered-list-margin-block-start, var(--utrecht-paragraph-margin-block-start, 0)));
  padding-inline-start: var(--utrecht-unordered-list-padding-inline-start, 2ch);
  text-align: start;
  counter-reset: nijmegen-counter;
  list-style: none;
  padding-inline-start: 0;
}

.nijmegen-progress-list__header {
  height: 3rem; /* stylelint-disable-line property-disallowed-list */
  padding-block-start: var(--nijmegen-progress-list-step-heading-padding-block-start);
  padding-inline-start: var(--nijmegen-progress-list-step-meta-padding-inline-start);
  position: relative;
}
.nijmegen-progress-list__header span {
  font-family: var(--nijmegen-progress-list-step-marker-font-family);
  font-size: var(--nijmegen-progress-list-step-marker-font-size);
  font-weight: var(--nijmegen-progress-list-step-marker-font-weight);
}
.nijmegen-progress-list__header span.nijmegen-sr-only {
  clip: rect(0, 0, 0, 0);
  height: 1px; /* stylelint-disable-line property-disallowed-list */
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px; /* stylelint-disable-line property-disallowed-list */
}

.nijmegen-progress-list__button {
  background-color: var(--nijmegen-progress-list-button-checked-background-color);
  background-color: var(--nijmegen-progress-list-button-current-background-color);
  border-color: var(--nijmegen-progress-list-button-current-border-color);
  border-radius: var(--nijmegen-progress-list-button-border-radius);
  border-width: var(--nijmegen-progress-list-button-border-width);
  cursor: pointer;
  display: inline-flex;
  font-family: var(--nijmegen-progress-list-step-marker-font-family);
  font-size: var(--nijmegen-progress-list-step-marker-font-size);
  font-weight: var(--nijmegen-progress-list-step-marker-font-weight);
  gap: var(--nijmegen-progress-list-button-column-gap);
  min-block-size: var(--nijmegen-progress-list-button-min-block-size);
  min-inline-size: var(--nijmegen-progress-list-button-min-inline-size);
  padding: 0; /* stylelint-disable-line property-disallowed-list */
  text-align: inherit;
}
.nijmegen-progress-list__button:hover {
  background-color: var(--nijmegen-progress-list-button-current-hover-background-color);
  border-color: var(--nijmegen-progress-list-button-current-hover-border-color);
  color: var(--nijmegen-progress-list-button-current-hover-color);
}
.nijmegen-progress-list__button:active {
  background-color: var(--nijmegen-progress-list-button-current-active-background-color);
  border-color: var(--nijmegen-progress-list-button-current-active-border-color);
  color: var(--nijmegen-progress-list-button-current-active-color);
}
.nijmegen-progress-list__button:focus-visible {
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
  background-color: var(--nijmegen-progress-list-button-current-focus-visible-background-color);
  border-color: var(--nijmegen-progress-list-button-current-focus-visible-border-color);
  color: var(--nijmegen-progress-list-button-current-focus-visible-color);
}
.nijmegen-progress-list__button[aria-expanded=true] svg {
  transform: scaleY(-1);
}

.nijmegen-progress-list__step {
  counter-increment: nijmegen-counter;
  position: relative;
}
.nijmegen-progress-list__step:last-child:not(:has(.nijmegen-progress-list__details--active)) .nijmegen-progress-list__body::after {
  display: none;
}
.nijmegen-progress-list__step:last-child .nijmegen-progress-list__sub-step:last-child::after {
  display: none;
}
.nijmegen-progress-list__step::before {
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: var(--nijmegen-progress-list-step-marker-border-radius);
  border-style: solid;
  border-width: var(--nijmegen-progress-list-step-marker-border-width);
  box-sizing: border-box;
  display: flex;
  font-family: var(--nijmegen-progress-list-step-marker-font-family);
  font-size: var(--nijmegen-progress-list-step-marker-font-size);
  font-weight: var(--nijmegen-progress-list-step-marker-font-weight);
  height: var(--nijmegen-progress-list-step-marker-size); /* stylelint-disable-line property-disallowed-list */
  justify-content: space-around;
  line-height: var(--nijmegen-progress-list-step-marker-line-height);
  position: absolute;
  background-color: var(--nijmegen-progress-list-step-marker-not-checked-background-color);
  border-color: var(--nijmegen-progress-list-connector-not-checked-border-color);
  color: var(--nijmegen-progress-list-step-marker-not-checked-color);
  content: counter(nijmegen-counter);
  width: var(--nijmegen-progress-list-step-marker-size); /* stylelint-disable-line property-disallowed-list */
}
.nijmegen-progress-list__step--current::before {
  background-color: var(--nijmegen-progress-list-step-marker-current-background-color);
  border-color: var(--nijmegen-progress-list-step-marker-current-background-color);
  color: var(--nijmegen-progress-list-step-marker-current-color);
}
.nijmegen-progress-list__step--not-checked::before {
  background-color: var(--nijmegen-progress-list-step-marker-not-checked-background-color);
  border-color: var(--nijmegen-progress-list-connector-not-checked-border-color);
  color: var(--nijmegen-progress-list-step-marker-not-checked-color);
}
.nijmegen-progress-list__step--error::before {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiA0QzcuNTgxNzIgNCA0IDcuNTgxNzIgNCAxMkM0IDE2LjQxODMgNy41ODE3MiAyMCAxMiAyMEMxNi40MTgzIDIwIDIwIDE2LjQxODMgMjAgMTJDMjAgNy41ODE3MiAxNi40MTgzIDQgMTIgNFpNMiAxMkMyIDYuNDc3MTUgNi40NzcxNSAyIDEyIDJDMTcuNTIyOCAyIDIyIDYuNDc3MTUgMjIgMTJDMjIgMTcuNTIyOCAxNy41MjI4IDIyIDEyIDIyQzYuNDc3MTUgMjIgMiAxNy41MjI4IDIgMTJaTTEyIDdDMTIuNTUyMyA3IDEzIDcuNDQ3NzIgMTMgOFYxMkMxMyAxMi41NTIzIDEyLjU1MjMgMTMgMTIgMTNDMTEuNDQ3NyAxMyAxMSAxMi41NTIzIDExIDEyVjhDMTEgNy40NDc3MiAxMS40NDc3IDcgMTIgN1pNMTEgMTZDMTEgMTUuNDQ3NyAxMS40NDc3IDE1IDEyIDE1SDEyLjAxQzEyLjU2MjMgMTUgMTMuMDEgMTUuNDQ3NyAxMy4wMSAxNkMxMy4wMSAxNi41NTIzIDEyLjU2MjMgMTcgMTIuMDEgMTdIMTJDMTEuNDQ3NyAxNyAxMSAxNi41NTIzIDExIDE2WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==");
  content: "";
  background-color: var(--nijmegen-progress-list-step-marker-error-background-color);
  border-color: var(--nijmegen-progress-list-step-marker-error-border-color);
  color: var(--nijmegen-progress-list-step-marker-error-color);
}
.nijmegen-progress-list__step--error:has(.nijmegen-progress-list__body)::after,
.nijmegen-progress-list__step--error:has(.nijmegen-progress-list__body) .nijmegen-progress-list__body::after {
  border-color: var(--nijmegen-progress-list-connector-error-border-color);
  border-inline-start-style: solid;
}
.nijmegen-progress-list__step--error:has(.nijmegen-progress-list__details) .nijmegen-progress-list__header::after {
  border-color: var(--nijmegen-progress-list-connector-error-border-color);
  border-inline-start-style: solid;
}
.nijmegen-progress-list__step--error .nijmegen-progress-list__button {
  background-color: var(--nijmegen-progress-list-button-error-background-color);
  border-color: var(--nijmegen-progress-list-button-error-border-color);
}
.nijmegen-progress-list__step--error .nijmegen-progress-list__button:hover {
  background-color: var(--nijmegen-progress-list-button-error-hover-background-color);
  border-color: var(--nijmegen-progress-list-button-error-hover-border-color);
  color: var(--nijmegen-progress-list-button-error-hover-color);
}
.nijmegen-progress-list__step--error .nijmegen-progress-list__button:active {
  background-color: var(--nijmegen-progress-list-button-error-active-background-color);
  border-color: var(--nijmegen-progress-list-button-error-active-border-color);
  color: var(--nijmegen-progress-list-button-error-active-color);
}
.nijmegen-progress-list__step--error .nijmegen-progress-list__button:focus-visible {
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
  background-color: var(--nijmegen-progress-list-button-error-focus-visible-background-color);
  border-color: var(--nijmegen-progress-list-button-error-focus-visible-border-color);
  color: var(--nijmegen-progress-list-button-error-focus-visible-color);
}
.nijmegen-progress-list__step--warning::before {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05LjM3MDI4IDMuNTA1NzdDOS45MDAwNCAyLjU1NjQ0IDEwLjkwMjIgMS45Njc3MSAxMS45OSAxLjk2NzcxQzEzLjA3NzcgMS45Njc3MSAxNC4wNzk5IDIuNTU2NDMgMTQuNjA5NiAzLjUwNTc1TDIxLjcwNTEgMTUuNzQ4QzIxLjcyODcgMTUuNzg4NyAyMS43NDk0IDE1LjgzMDkgMjEuNzY3IDE1Ljg3NDRDMjIuMTM5NyAxNi43OTU3IDIyLjAzMTkgMTcuODQxOCAyMS40NzkzIDE4LjY2NzhDMjAuOTI2NiAxOS40OTM4IDIwLjAwMDggMTkuOTkyNSAxOS4wMDcgMTkuOTk5NEwxOSAxOS45OTk1SDQuOTk5OTVDNC45ODE2OCAxOS45OTk1IDQuOTYzNTEgMTkuOTk5IDQuOTQ1NDggMTkuOTk4QzQuOTEwMjIgMTkuOTk5OSA0Ljg3NDUyIDIwIDQuODM4NDcgMTkuOTk4MUMzLjg2ODc3IDE5Ljk0ODEgMi45ODMyNCAxOS40MzE5IDIuNDYxOTQgMTguNjEyN0MxLjk0MDY1IDE3Ljc5MzYgMS44NDgwNiAxNi43NzI3IDIuMjEzNDcgMTUuODczMUMyLjIzMDk3IDE1LjgzMDEgMi4yNTE0NSAxNS43ODgyIDIuMjc0NzcgMTUuNzQ4TDkuMzcwMjggMy41MDU3N1pNNC45NDQ3MSAxOC4wMDFDNC45NjMgMTggNC45ODE0MiAxNy45OTk1IDQuOTk5OTUgMTcuOTk5NUgxOC45OTU5QzE5LjMyNiAxNy45OTYyIDE5LjYzMzQgMTcuODMwMSAxOS44MTcgMTcuNTU1NkMxOS45OTA0IDE3LjI5NjYgMjAuMDMyNCAxNi45NzI2IDE5LjkzMzMgMTYuNjc5NEwxMi44NzQ4IDQuNTAwOTJMMTIuODY1IDQuNDgzNTlDMTIuNjg4OCA0LjE2NTI3IDEyLjM1MzcgMy45Njc3MSAxMS45OSAzLjk2NzcxQzExLjYyNjIgMy45Njc3MSAxMS4yOTExIDQuMTY1MjcgMTEuMTE1IDQuNDgzNTlMMTEuMTA1MSA0LjUwMDkyTDQuMDQ2MiAxNi42ODAxQzMuOTQ4ODUgMTYuOTY2MiAzLjk4NTkxIDE3LjI4MjMgNC4xNDkyNyAxNy41MzlDNC4zMjMwMyAxNy44MTIxIDQuNjE4MjEgMTcuOTg0MSA0Ljk0MTQ0IDE4LjAwMDhDNC45NDI1MyAxOC4wMDA5IDQuOTQzNjIgMTguMDAwOSA0Ljk0NDcxIDE4LjAwMVpNMTIgNy45OTk0N0MxMi41NTIyIDcuOTk5NDcgMTMgOC40NDcxOCAxMyA4Ljk5OTQ3VjEwLjk5OTVDMTMgMTEuNTUxOCAxMi41NTIyIDExLjk5OTUgMTIgMTEuOTk5NUMxMS40NDc3IDExLjk5OTUgMTEgMTEuNTUxOCAxMSAxMC45OTk1VjguOTk5NDdDMTEgOC40NDcxOCAxMS40NDc3IDcuOTk5NDcgMTIgNy45OTk0N1pNMTEgMTQuOTk5NUMxMSAxNC40NDcyIDExLjQ0NzcgMTMuOTk5NSAxMiAxMy45OTk1SDEyLjAxQzEyLjU2MjIgMTMuOTk5NSAxMy4wMSAxNC40NDcyIDEzLjAxIDE0Ljk5OTVDMTMuMDEgMTUuNTUxOCAxMi41NjIyIDE1Ljk5OTUgMTIuMDEgMTUuOTk5NUgxMkMxMS40NDc3IDE1Ljk5OTUgMTEgMTUuNTUxOCAxMSAxNC45OTk1WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==");
  content: "";
  background-color: var(--nijmegen-progress-list-step-marker-warning-background-color);
  border-color: var(--nijmegen-progress-list-step-marker-warning-border-color);
  color: var(--nijmegen-progress-list-step-marker-warning-color);
}
.nijmegen-progress-list__step--warning:has(.nijmegen-progress-list__body)::after,
.nijmegen-progress-list__step--warning:has(.nijmegen-progress-list__body) .nijmegen-progress-list__body::after {
  border-color: var(--nijmegen-progress-list-connector-warning-border-color);
  border-inline-start-style: solid;
}
.nijmegen-progress-list__step--warning:has(.nijmegen-progress-list__details) .nijmegen-progress-list__header::after {
  border-color: var(--nijmegen-progress-list-connector-warning-border-color);
  border-inline-start-style: solid;
}
.nijmegen-progress-list__step--warning .nijmegen-progress-list__button {
  background-color: var(--nijmegen-progress-list-button-warning-background-color);
  border-color: var(--nijmegen-progress-list-button-warning-border-color);
}
.nijmegen-progress-list__step--warning .nijmegen-progress-list__button:hover {
  background-color: var(--nijmegen-progress-list-button-warning-hover-background-color);
  border-color: var(--nijmegen-progress-list-button-warning-hover-border-color);
  color: var(--nijmegen-progress-list-button-warning-hover-color);
}
.nijmegen-progress-list__step--warning .nijmegen-progress-list__button:active {
  background-color: var(--nijmegen-progress-list-button-warning-active-background-color);
  border-color: var(--nijmegen-progress-list-button-warning-active-border-color);
  color: var(--nijmegen-progress-list-button-warning-active-color);
}
.nijmegen-progress-list__step--warning .nijmegen-progress-list__button:focus-visible {
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
  background-color: var(--nijmegen-progress-list-button-warning-focus-visible-background-color);
  border-color: var(--nijmegen-progress-list-button-warning-focus-visible-border-color);
  color: var(--nijmegen-progress-list-button-warning-focus-visible-color);
}
.nijmegen-progress-list__step--checked::before {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMC43MDcxIDYuMjkyODlDMjEuMDk3NiA2LjY4MzQyIDIxLjA5NzYgNy4zMTY1OCAyMC43MDcxIDcuNzA3MTFMMTAuNzA3MSAxNy43MDcxQzEwLjMxNjYgMTguMDk3NiA5LjY4MzQyIDE4LjA5NzYgOS4yOTI4OSAxNy43MDcxTDQuMjkyODkgMTIuNzA3MUMzLjkwMjM3IDEyLjMxNjYgMy45MDIzNyAxMS42ODM0IDQuMjkyODkgMTEuMjkyOUM0LjY4MzQyIDEwLjkwMjQgNS4zMTY1OCAxMC45MDI0IDUuNzA3MTEgMTEuMjkyOUwxMCAxNS41ODU4TDE5LjI5MjkgNi4yOTI4OUMxOS42ODM0IDUuOTAyMzcgMjAuMzE2NiA1LjkwMjM3IDIwLjcwNzEgNi4yOTI4OVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=");
  content: "";
  background-color: var(--nijmegen-progress-list-step-marker-checked-background-color);
  border-color: var(--nijmegen-progress-list-step-marker-checked-border-color);
  color: var(--nijmegen-progress-list-step-marker-checked-color);
}
.nijmegen-progress-list__step--checked:has(.nijmegen-progress-list__body)::after,
.nijmegen-progress-list__step--checked:has(.nijmegen-progress-list__body) .nijmegen-progress-list__body::after {
  border-color: var(--nijmegen-progress-list-connector-checked-border-color);
  border-inline-start-style: solid;
}
.nijmegen-progress-list__step--checked:has(.nijmegen-progress-list__details) .nijmegen-progress-list__header::after {
  border-color: var(--nijmegen-progress-list-connector-checked-border-color);
  border-inline-start-style: solid;
}
.nijmegen-progress-list__step--checked .nijmegen-progress-list__button {
  background-color: var(--nijmegen-progress-list-button-checked-background-color);
  border-color: var(--nijmegen-progress-list-button-checked-border-color);
}
.nijmegen-progress-list__step--checked .nijmegen-progress-list__button:hover {
  background-color: var(--nijmegen-progress-list-button-checked-hover-background-color);
  border-color: var(--nijmegen-progress-list-button-checked-hover-border-color);
  color: var(--nijmegen-progress-list-button-checked-hover-color);
}
.nijmegen-progress-list__step--checked .nijmegen-progress-list__button:active {
  background-color: var(--nijmegen-progress-list-button-checked-active-background-color);
  border-color: var(--nijmegen-progress-list-button-checked-active-border-color);
  color: var(--nijmegen-progress-list-button-checked-active-color);
}
.nijmegen-progress-list__step--checked .nijmegen-progress-list__button:focus-visible {
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
  background-color: var(--nijmegen-progress-list-button-checked-focus-visible-background-color);
  border-color: var(--nijmegen-progress-list-button-checked-focus-visible-border-color);
  color: var(--nijmegen-progress-list-button-checked-focus-visible-color);
}

.nijmegen-progress-list__body {
  margin-block-end: var(--nijmegen-progress-list-sub-step-margin-block-start);
  padding-inline-start: var(--nijmegen-progress-list-step-meta-padding-inline-start);
  position: relative;
}
.nijmegen-progress-list__body::after {
  border-inline-start-width: var(--nijmegen-progress-list-connector-border-width);
  content: "";
  inset-block-start: 0;
  inset-inline-start: var(--nijmegen-progress-list-connector-padding-inline-start);
  position: absolute;
  z-index: -1;
  border-color: var(--nijmegen-progress-list-connector-not-checked-border-color);
  border-inline-start-style: dashed;
  /* stylelint-disable-next-line property-disallowed-list */
  height: calc(100% + var(--nijmegen-progress-list-step-meta-padding-inline-start) + 0.5rem);
  inset-block-start: calc(-1 * var(--nijmegen-progress-list-sub-step-margin-block-start));
}

.nijmegen-progress-list__meta {
  display: flex;
  flex-direction: column;
  gap: var(--nijmegen-progress-list-step-body-row-gap);
}
.nijmegen-progress-list__meta .utrecht-paragraph {
  margin: 0; /* stylelint-disable-line property-disallowed-list */
}
.nijmegen-progress-list__meta .utrecht-paragraph--lead {
  font-size: 1.25rem;
}
.nijmegen-progress-list__step--toggle .nijmegen-progress-list__meta {
  display: none;
}
.nijmegen-progress-list__step--active .nijmegen-progress-list__meta {
  display: flex;
}

.nijmegen-progress-list__details {
  all: unset;
  display: flex;
  flex-direction: column;
  gap: var(--nijmegen-progress-list-step-body-row-gap);
}
.nijmegen-progress-list__step--toggle .nijmegen-progress-list__details {
  display: none;
}
.nijmegen-progress-list__step--active .nijmegen-progress-list__details {
  display: flex;
}

.nijmegen-progress-list__sub-step {
  margin-block-end: var(--nijmegen-progress-list-sub-step-margin-block-start);
  padding-inline-start: var(--nijmegen-progress-list-step-meta-padding-inline-start);
  position: relative;
}
.nijmegen-progress-list__sub-step::before {
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: var(--nijmegen-progress-list-step-marker-border-radius);
  border-style: solid;
  border-width: var(--nijmegen-progress-list-step-marker-border-width);
  box-sizing: border-box;
  display: flex;
  font-family: var(--nijmegen-progress-list-step-marker-font-family);
  font-size: var(--nijmegen-progress-list-step-marker-font-size);
  font-weight: var(--nijmegen-progress-list-step-marker-font-weight);
  height: var(--nijmegen-progress-list-step-marker-size); /* stylelint-disable-line property-disallowed-list */
  justify-content: space-around;
  line-height: var(--nijmegen-progress-list-step-marker-line-height);
  position: absolute;
  background-color: var(--nijmegen-progress-list-step-marker-not-checked-background-color);
  border-color: var(--nijmegen-progress-list-connector-not-checked-border-color);
  color: var(--nijmegen-progress-list-step-marker-not-checked-color);
  content: "";
  height: var(--nijmegen-progress-list-step-marker-nested-size); /* stylelint-disable-line property-disallowed-list */
  inset-block-start: var(--nijmegen-progress-list-step-marker-nested-inset-block-start);
  left: 0.55rem; /* stylelint-disable-line property-disallowed-list */
  width: var(--nijmegen-progress-list-step-marker-nested-size); /* stylelint-disable-line property-disallowed-list */
}
.nijmegen-progress-list__sub-step::after {
  border-inline-start-width: var(--nijmegen-progress-list-connector-border-width);
  content: "";
  inset-block-start: 0;
  inset-inline-start: var(--nijmegen-progress-list-connector-padding-inline-start);
  position: absolute;
  z-index: -1;
  border-color: var(--nijmegen-progress-list-connector-not-checked-border-color);
  border-inline-start-style: dashed;
  /* stylelint-disable-next-line property-disallowed-list */
  height: calc(100% + var(--nijmegen-progress-list-step-meta-padding-inline-start) - 0.5rem);
  inset-block-start: 0.5rem;
}
.nijmegen-progress-list__sub-step--current::before {
  background-color: var(--nijmegen-progress-list-step-marker-current-background-color);
  border-color: var(--nijmegen-progress-list-step-marker-current-background-color);
  color: var(--nijmegen-progress-list-step-marker-current-color);
}
.nijmegen-progress-list__sub-step--not-checked::before {
  background-color: var(--nijmegen-progress-list-step-marker-not-checked-background-color);
  border-color: var(--nijmegen-progress-list-connector-not-checked-border-color);
  color: var(--nijmegen-progress-list-step-marker-not-checked-color);
}
.nijmegen-progress-list__sub-step--error::before {
  background-color: var(--nijmegen-progress-list-step-marker-error-background-color);
  border-color: var(--nijmegen-progress-list-step-marker-error-border-color);
  color: var(--nijmegen-progress-list-step-marker-error-color);
}
.nijmegen-progress-list__sub-step--error::after {
  border-color: var(--nijmegen-progress-list-connector-error-border-color);
  border-inline-start-style: solid;
}
.nijmegen-progress-list__sub-step--warning::before {
  background-color: var(--nijmegen-progress-list-step-marker-warning-background-color);
  border-color: var(--nijmegen-progress-list-step-marker-warning-border-color);
  color: var(--nijmegen-progress-list-step-marker-warning-color);
}
.nijmegen-progress-list__sub-step--warning::after {
  border-color: var(--nijmegen-progress-list-connector-warning-border-color);
  border-inline-start-style: solid;
}
.nijmegen-progress-list__sub-step--checked::before {
  background-color: var(--nijmegen-progress-list-step-marker-checked-background-color);
  border-color: var(--nijmegen-progress-list-step-marker-checked-border-color);
  color: var(--nijmegen-progress-list-step-marker-checked-color);
}
.nijmegen-progress-list__sub-step--checked::after {
  border-color: var(--nijmegen-progress-list-connector-checked-border-color);
  border-inline-start-style: solid;
}`;o(e);var s=`<div>
  <slot></slot>
</div>
`;class g extends HTMLElement{constructor(){super();b(this,l);b(this,a);const i=document.createElement("template");i.innerHTML=s;const t=this.attachShadow({mode:"open"});t.appendChild(i.content.cloneNode(!0));const r=new CSSStyleSheet;r.replaceSync(e),t.adoptedStyleSheets=[r]}static get observedAttributes(){return["full"]}connectedCallback(){Array.from(this.children).forEach(i=>{i.addEventListener("click",t=>{const r=t.target.closest(".nijmegen-progress-list__button[aria-expanded]");r&&j(this,l,x).call(this,r)})})}}l=new WeakSet,x=function(i){const t=i.getAttribute("aria-expanded")==="true",r=i.closest(".nijmegen-progress-list__step");if(i.setAttribute("aria-expanded",String(!t)),j(this,a,y).call(this,i,!t),r){r.classList.toggle("nijmegen-progress-list__step--active",!t);const u=r.querySelector(".nijmegen-progress-list__meta");u&&(u.hidden=t);const k=r.querySelector(".nijmegen-progress-list__details");k&&(k.hidden=t)}},a=new WeakSet,y=function(i,t){var u;const r=((u=i.textContent)==null?void 0:u.trim())||"";t?i.setAttribute("aria-label",`${r} - Details verbergen`):i.setAttribute("aria-label",`${r} - Details tonen`)},customElements.define("nijmegen-progress-list",g)})();const I={steps:{name:"Steps",description:"Array of steps to display in the progress list",control:{type:"object"},table:{defaultValue:{summary:"[]"}}}},m=o=>{switch(o){case"checked":return"afgerond";case"current":return"huidige stap";case"not-checked":return"nog niet gestart";case"warning":return"waarschuwing in stap";case"error":return"fout in stap";default:return"nog niet gestart"}},v=({steps:o=[]})=>n.jsx("nijmegen-progress-list",{children:n.jsx("ol",{className:"nijmegen-progress-list",children:o.map((e,s)=>{const g=e.subSteps&&e.subSteps.length>0,l=e.meta||e.metaDate,h=g||l,a=e.enableToggle&&h;return n.jsxs("li",{className:`nijmegen-progress-list__step${e.status?` nijmegen-progress-list__step--${e.status}`:""}${a?" nijmegen-progress-list__step--toggle":""}`,children:[n.jsx("div",{className:"nijmegen-progress-list__header",children:a?n.jsxs("button",{className:"nijmegen-progress-list__button","aria-expanded":"false","aria-label":`Stap ${s+1} ${m(e.status)}: ${e.heading}`,children:[e.heading,n.jsx(f,{})]}):n.jsxs("span",{children:[n.jsxs("span",{className:"nijmegen-sr-only",children:["Stap ",s+1," ",m(e.status),":"," "]}),e.heading]})}),n.jsx("div",{className:"nijmegen-progress-list__body",children:n.jsxs("div",{className:"nijmegen-progress-list__meta",hidden:a,children:[e.meta&&(typeof e.meta=="string"?n.jsx("p",{className:"utrecht-paragraph",children:e.meta}):e.meta),e.metaDate&&(typeof e.metaDate=="string"?n.jsx("p",{className:"utrecht-paragraph utrecht-paragraph--lead",children:e.metaDate}):e.metaDate)]})}),g&&e.subSteps&&n.jsx("ul",{className:"nijmegen-progress-list__details",hidden:a,children:e.subSteps.map((d,c)=>n.jsx("li",{className:`nijmegen-progress-list__sub-step${d.status?` nijmegen-progress-list__sub-step--${d.status}`:""}`,children:d.text},c))})]},s)})})}),M=({steps:o=[]})=>n.jsx("ol",{className:"nijmegen-progress-list",children:o.map((e,s)=>{const g=e.subSteps&&e.subSteps.length>0,l=e.meta||e.metaDate,h=g||l,a=e.enableToggle&&h;return n.jsxs("li",{className:`nijmegen-progress-list__step${e.status?` nijmegen-progress-list__step--${e.status}`:""}${a?" nijmegen-progress-list__step--toggle":""}`,children:[n.jsx("div",{className:"nijmegen-progress-list__header",children:a?n.jsxs("button",{className:"nijmegen-progress-list__button","aria-expanded":"false","aria-label":`Stap ${s+1} ${m(e.status)}: ${e.heading}`,children:[e.heading,n.jsx(f,{})]}):n.jsxs("span",{children:[n.jsxs("span",{className:"nijmegen-sr-only",children:["Stap ",s+1," ",m(e.status),":"," "]}),e.heading]})}),n.jsx("div",{className:"nijmegen-progress-list__body",children:n.jsxs("div",{className:"nijmegen-progress-list__meta",hidden:a,children:[e.meta&&(typeof e.meta=="string"?n.jsx("p",{className:"utrecht-paragraph",children:e.meta}):e.meta),e.metaDate&&(typeof e.metaDate=="string"?n.jsx("p",{className:"utrecht-paragraph utrecht-paragraph--lead",children:e.metaDate}):e.metaDate)]})}),g&&e.subSteps&&n.jsx("ul",{className:"nijmegen-progress-list__details",hidden:a,children:e.subSteps.map((d,c)=>n.jsx("li",{className:`nijmegen-progress-list__sub-step${d.status?` nijmegen-progress-list__sub-step--${d.status}`:""}`,children:d.text},c))})]},s)})});try{v.displayName="ProgressListStoryWebComponent",v.__docgenInfo={description:"",displayName:"ProgressListStoryWebComponent",props:{steps:{defaultValue:{value:"[] as Step[]"},description:"",name:"steps",required:!1,type:{name:"Step[]"}}}}}catch{}try{M.displayName="ProgressListStory",M.__docgenInfo={description:"",displayName:"ProgressListStory",props:{steps:{defaultValue:{value:"[] as Step[]"},description:"",name:"steps",required:!1,type:{name:"Step[]"}}}}}catch{}export{v as P,I as a,M as b};
