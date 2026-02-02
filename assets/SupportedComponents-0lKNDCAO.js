import{j as e}from"./jsx-runtime-CKrituN3.js";import{M as m,e as n}from"./chunk-HLWAVYOI-B4mApEy6.js";import{U as l}from"./index-CsZiO4tE.js";/* empty css              */import{useMDXComponents as a}from"./index-DI5IigMn.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-h9IQem09.js";import"../sb-preview/runtime.js";import"./react-18-D8cruF67.js";import"./index-BtM5VmRH.js";import"./index-CnWNB3mc.js";import"./extends-CCbyfPlC.js";import"./_getPrototype-nBa_wnor.js";import"./index-ltOY3w3e.js";function d(){document.querySelectorAll(".nijmegen-html table").forEach(t=>{const i=t.querySelectorAll("thead th"),s=Array.from(i).map(r=>r.textContent.trim());if(s.length===0)return;t.querySelectorAll("tbody td").forEach((r,h)=>{r.setAttribute("data-label",s[h%s.length])})})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",d):d();function o(t){const i=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong"},a(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(m,{title:"foundations/Semantic HTML/Supported semantic elements"}),`
`,e.jsx(i.h1,{id:"supported-semantic-html-elements",children:"Supported semantic HTML elements"}),`
`,e.jsx(i.h2,{id:"h1---h6",children:"h1 - h6"}),`
`,e.jsx(l,{children:e.jsxs("div",{className:"nijmegen-html",children:[e.jsx("h1",{children:"Lorem ipsum dolor sit amet"}),e.jsx("h2",{children:"Lorem ipsum dolor sit amet"}),e.jsx("h3",{children:"Lorem ipsum dolor sit amet"}),e.jsx("h4",{children:"Lorem ipsum dolor sit amet"}),e.jsx("h5",{children:"Lorem ipsum dolor sit amet"}),e.jsx("h6",{children:"Lorem ipsum dolor sit amet"})]})}),`
`,e.jsx(n,{language:"html",code:`
<h1>Lorem ipsum dolor sit amet</h1>
<h2>Lorem ipsum dolor sit amet</h2>
<h3>Lorem ipsum dolor sit amet</h3>
<h4>Lorem ipsum dolor sit amet</h4>
<h5>Lorem ipsum dolor sit amet</h5>
<h6>Lorem ipsum dolor sit amet</h6>

`}),`
`,e.jsx(i.h2,{id:"paragraph",children:"Paragraph"}),`
`,e.jsx(l,{children:e.jsx("div",{className:"nijmegen-html",children:e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})}),`
`,e.jsx(n,{language:"html",code:`
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
`}),`
`,e.jsx(i.h2,{id:"link",children:"Link"}),`
`,e.jsx(l,{children:e.jsx("div",{className:"nijmegen-html",children:e.jsx("a",{href:"#",children:"Lorem ipsum dolor sit amet"})})}),`
`,e.jsx(n,{language:"html",code:`
<a href="#">Lorem ipsum dolor sit amet</a>
`}),`
`,e.jsx(i.h2,{id:"link-list",children:"Link list"}),`
`,e.jsx(l,{children:e.jsx("div",{className:"nijmegen-html",children:e.jsxs("ul",{class:"nijmegen-html-linklist",children:[e.jsx("li",{children:e.jsx("a",{href:"#",children:"Link 1"})}),e.jsx("li",{children:e.jsx("a",{href:"#",children:"Link 2"})}),e.jsx("li",{children:e.jsx("a",{href:"#",children:"Link 3"})})]})})}),`
`,e.jsx(n,{language:"html",code:`
<ul class="nijmegen-html-linklist">
    <li><a href="#">Link 1</a></li>
    <li><a href="#">Link 2</a></li>
    <li><a href="#">Link 3</a></li>
</ul>
`}),`
`,e.jsx(i.h2,{id:"unordered-list",children:"Unordered list"}),`
`,e.jsx(l,{children:e.jsx("div",{className:"nijmegen-html",children:e.jsxs("ul",{children:[e.jsx("li",{children:"Item 1"}),e.jsx("li",{children:"Item 2"}),e.jsx("li",{children:"Item 3"}),e.jsxs("li",{children:["Unordered item with ",e.jsx("a",{href:"#",children:"link"})]}),e.jsxs("li",{children:["Nested:",e.jsxs("ul",{children:[e.jsx("li",{children:"Nested 1"}),e.jsx("li",{children:"Nested 2"})]})]})]})})}),`
`,e.jsx(n,{language:"html",code:`
<ul>
    <li>Item 1</li>
    <li>Item 2/li>
    <li>Item 3</li>
    <li>Unordered item with <a href="#">link</a></li>
    <li>Nested:
        <ul>
            <li>Nested 1</li>
            <li>Nested 2</li>
        </ul>
    </li>
</ul>
`}),`
`,e.jsx(i.h2,{id:"button",children:"Button"}),`
`,e.jsx(l,{children:e.jsx("div",{className:"nijmegen-html",children:e.jsx("button",{children:"Lorem ipsum dolor sit amet"})})}),`
`,e.jsx(n,{language:"html",code:`
<button>Lorem ipsum dolor sit amet</button>
`}),`
`,e.jsx(i.h2,{id:"table",children:"Table"}),`
`,e.jsxs(i.p,{children:["⚠️ ",e.jsx(i.strong,{children:"Note:"})," The responsive view does not display titles correctly due to an issue in Storybook."]}),`
`,e.jsx(l,{children:e.jsx("div",{className:"nijmegen-html",children:e.jsxs("table",{children:[e.jsx("caption",{children:"Afval ophaaldagen"}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Wijk"}),e.jsx("th",{children:"Afvalsoort"}),e.jsx("th",{children:"Ophaaldag"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Nijmegen-Oost"}),e.jsx("td",{children:"Restafval"}),e.jsx("td",{children:"Maandag"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Dukenburg"}),e.jsx("td",{children:"Papier & karton"}),e.jsx("td",{children:"Woensdag"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Lindenholt"}),e.jsx("td",{children:"PGFT"}),e.jsx("td",{children:"Donderdag"})]})]})]})})}),`
`,e.jsx(n,{language:"html",code:`
<table>
    <caption>Afval ophaaldagen</caption>
    <thead>
        <tr>
            <th>Wijk</th>
            <th>Afvalsoort</th>
            <th>Ophaaldag</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Nijmegen-Oost</td>
            <td>Restafval</td>
            <td>Maandag</td>
        </tr>
        <tr>
            <td>Dukenburg</td>
            <td>Papier & karton</td>
            <td>Woensdag</td>
        </tr>
        <tr>
            <td>Lindenholt</td>
            <td>PGFT</td>
            <td>Donderdag</td>
        </tr>
    </tbody>
</table>
`})]})}function A(t={}){const{wrapper:i}=Object.assign({},a(),t.components);return i?e.jsx(i,Object.assign({},t,{children:e.jsx(o,t)})):o(t)}export{A as default};
