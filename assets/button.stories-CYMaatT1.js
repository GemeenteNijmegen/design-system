import{j as f}from"./jsx-runtime-DRTy3Uxn.js";import"./index-BBkUAzwr.js";function l(t){var r,e,o="";if(typeof t=="string"||typeof t=="number")o+=t;else if(typeof t=="object")if(Array.isArray(t)){var u=t.length;for(r=0;r<u;r++)t[r]&&(e=l(t[r]))&&(o&&(o+=" "),o+=e)}else for(e in t)t[e]&&(o&&(o+=" "),o+=e);return o}function m(){for(var t,r,e=0,o="",u=arguments.length;e<u;e++)(t=arguments[e])&&(r=l(t))&&(o&&(o+=" "),o+=r);return o}const b={children:{name:"Content",description:"Button text",defaultValue:""},appearance:{name:"Variation",description:"Button variations",control:{type:"select"},options:["Default","Primary","Secondary","Subtle"],table:{type:{summary:["string"]}}},state:{name:"State",description:"Button states",control:{type:"select"},options:["Default","Active","Hover","Hover + focus-visible","Focus","Focus-visible"]},icon:{name:"Icon",description:"Icon",control:{type:"select"},options:["None","Start","End"]}},a={children:"Button text",appearance:"Default",state:"Default",icon:"None"},p=({children:t,appearance:r=a.appearance,state:e=a.state,...o})=>f.jsx("button",{className:m("utrecht-button",{"utrecht-button--primary-action":r==="Primary","utrecht-button--secondary-action":r==="Secondary","utrecht-button--subtle":r==="Subtle","utrecht-button--active":e==="Active","utrecht-button--hover":e==="Hover","utrecht-button--hover utrecht-button--focus utrecht-button--focus-visible":e==="Hover + focus-visible","utrecht-button--focus":e==="Focus","utrecht-button--focus utrecht-button--focus-visible":e==="Focus-visible"}),type:"button",...o,children:t});p.__docgenInfo={description:"",methods:[],displayName:"Button",props:{appearance:{defaultValue:{value:"'Default'",computed:!1},required:!1},state:{defaultValue:{value:"'Default'",computed:!1},required:!1}}};/* @license CC0-1.0 */const y={title:"Components/Button",id:"button",component:p,argTypes:b,args:a,parameters:{status:{type:"WORK IN PROGRESS"}}},n={name:"Default button"};var s,c,i;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Default button'
}`,...(i=(c=n.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const h=["Default"];export{n as Default,h as __namedExportsOrder,y as default};
