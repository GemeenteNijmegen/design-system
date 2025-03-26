import{j as e}from"./jsx-runtime-CKrituN3.js";function l(t){var s,n,o="";if(typeof t=="string"||typeof t=="number")o+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(s=0;s<r;s++)t[s]&&(n=l(t[s]))&&(o&&(o+=" "),o+=n)}else for(n in t)t[n]&&(o&&(o+=" "),o+=n);return o}function u(){for(var t,s,n=0,o="",r=arguments.length;n<r;n++)(t=arguments[n])&&(s=l(t))&&(o&&(o+=" "),o+=s);return o}const p={children:{control:{type:"object"},name:"Content",description:"Button text"},appearance:{name:"Variation",description:"Button variations",control:{type:"select"},options:["Default","Primary","Secondary","Subtle"],table:{type:{summary:["string"]}}},state:{name:"State",description:"Button states",control:{type:"select"},options:["Default","Active","Hover","Hover + focus-visible","Focus","Focus-visible"]},disabled:{name:"Disabled",description:"Disable the button",control:{type:"boolean"},table:{type:{summary:["boolean"]}}},iconBeginning:{name:"Icon beginning",description:"Icon at the beginning of the button",control:{type:"select"},options:["None","Tabler example","OpenGemeente example"],table:{type:{summary:["string"]}}},iconEnding:{name:"Icon ending",description:"Icon at the ending of the button",control:{type:"select"},options:["None","Tabler example","OpenGemeente example"],table:{type:{summary:["string"]}}}},i={children:"Button text",appearance:"Default",state:"Default",disabled:!1,iconBeginning:"None",iconEnding:"None"},c=({children:t="",appearance:s=i.appearance,state:n=i.state,disabled:o=i.disabled,iconBeginning:r=i.iconBeginning,iconEnding:a=i.iconEnding})=>e.jsxs("button",{className:u("utrecht-button",{"utrecht-button--primary-action":s==="Primary","utrecht-button--secondary-action":s==="Secondary","utrecht-button--subtle":s==="Subtle","utrecht-button--active":n==="Active","utrecht-button--hover":n==="Hover","utrecht-button--hover utrecht-button--focus utrecht-button--focus-visible":n==="Hover + focus-visible","utrecht-button--focus":n==="Focus","utrecht-button--focus utrecht-button--focus-visible":n==="Focus-visible"}),disabled:o,type:"button",children:[r==="Tabler example"&&e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e.jsx("path",{d:"M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"}),e.jsx("path",{d:"M16 3l0 4"}),e.jsx("path",{d:"M8 3l0 4"}),e.jsx("path",{d:"M4 11l16 0"}),e.jsx("path",{d:"M8 15h2v2h-2z"})]}),r==="OpenGemeente example"&&e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 48 48",fill:"currentColor",stroke:"currentColor",children:[e.jsx("title",{children:"Agenda"}),e.jsx("path",{d:"M29 34c0-.55.45-1 1-1h2c.55 0 1 .45 1 1s-.45 1-1 1h-2c-.55 0-1-.45-1-1Zm-6-5h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1Zm0-6h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1Zm7 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1Zm0 6h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1Zm-14 6h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1Zm0-12h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1Zm0 6h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1Zm6.7 7.46c.37.32.93.31 1.29-.02l3.22-2.94c.41-.37.42-1.01.03-1.41-.38-.38-1-.38-1.38 0l-2.5 2.5-.73-.73a.966.966 0 0 0-1.37 0c-.4.39-.37 1.04.05 1.4l1.39 1.19ZM37.02 8h-5V6.99c0-.55-.44-.99-.99-.99H31c-.55 0-.99.44-.99.99V11c0 .55.45 1 1 1s1-.45 1-1v-1h5v4H11.03v-4h1.99c.55 0 1-.45 1-1s-.45-1-1-1h-2c-1.11 0-2 .89-2 1.99L9 38.02c0 2.2 1.78 3.99 3.98 3.99h22.04c2.21 0 4-1.79 4-4V10c0-1.1-.9-2-2-2ZM13.01 40c-1.1 0-1.99-.89-1.99-1.99V16h26v22c0 1.1-.9 2-2 2H13.01Zm3.02-29c0 .55.45 1 1 1s1-.45 1-1v-1h9c.55 0 1-.45 1-1s-.45-1-1-1h-9V6.99c0-.55-.44-.99-.99-.99s-.99.44-.99.99V8h-.02v3Z"})]}),t,a==="Tabler example"&&e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e.jsx("path",{d:"M5 12l14 0"}),e.jsx("path",{d:"M13 18l6 -6"}),e.jsx("path",{d:"M13 6l6 6"})]}),a==="OpenGemeente example"&&e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 48 48",fill:"currentColor",stroke:"currentColor",children:[e.jsx("title",{children:"Let op"}),e.jsx("path",{d:"M25.07 29.42c.28.28.42.64.42 1.08s-.14.8-.42 1.08c-.28.28-.64.42-1.08.42s-.8-.14-1.08-.42c-.28-.28-.42-.64-.42-1.08s.14-.8.42-1.08.64-.42 1.08-.42.8.14 1.08.42ZM24 25c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1s-1 .45-1 1v8c0 .55.45 1 1 1Zm16-1c0 8.82-7.18 16-16 16S8 32.82 8 24 15.18 8 24 8s16 7.18 16 16Zm-2 0c0-7.72-6.28-14-14-14s-14 6.28-14 14 6.28 14 14 14 14-6.28 14-14Z"})]})]});try{c.displayName="ButtonStory",c.__docgenInfo={description:"",displayName:"ButtonStory",props:{appearance:{defaultValue:{value:"Default"},description:"",name:"appearance",required:!1,type:{name:"string"}},state:{defaultValue:{value:"Default"},description:"",name:"state",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},iconBeginning:{defaultValue:{value:"None"},description:"",name:"iconBeginning",required:!1,type:{name:"string"}},iconEnding:{defaultValue:{value:"None"},description:"",name:"iconEnding",required:!1,type:{name:"string"}}}}}catch{}export{c as B,p as a,i as d};
