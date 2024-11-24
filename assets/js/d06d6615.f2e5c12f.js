/*! For license information please see d06d6615.f2e5c12f.js.LICENSE.txt */
(self.webpackChunkghewar_docs=self.webpackChunkghewar_docs||[]).push([[859],{1176:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>v,frontMatter:()=>d,metadata:()=>n,toc:()=>f});const n=JSON.parse('{"id":"components/loader","title":"Loader","description":"The DotLoader component provides a visually appealing loading indicator with three animated dots, which is commonly used for indicating that data is being loaded or an action is in progress.","source":"@site/docs/components/loader.md","sourceDirName":"components","slug":"/components/loader","permalink":"/ghewar-docs/docs/components/loader","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/loader.md","tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"sidebar_position":9},"sidebar":"tutorialSidebar","previous":{"title":"Input","permalink":"/ghewar-docs/docs/components/input"},"next":{"title":"Select Drop Down","permalink":"/ghewar-docs/docs/components/select-drop-down"}}');var a=r(4848),o=r(8453),s=r(1470),i=r(9365),l=(r(132),r(6540));const u=()=>(0,a.jsxs)("div",{className:"dot-loader",children:[(0,a.jsx)("div",{className:"dot"}),(0,a.jsx)("div",{className:"dot"}),(0,a.jsx)("div",{className:"dot"})]}),c=()=>{const[e,t]=(0,l.useState)(!0);return(0,l.useEffect)((()=>{setTimeout((()=>{t(!1)}),3e3)}),[]),(0,a.jsx)("div",{children:e?(0,a.jsx)(u,{}):(0,a.jsx)("h3",{children:"Data loaded"})})},d={sidebar_position:9},p="Loader",h={},f=[{value:"Features",id:"features",level:2}];function m(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"loader",children:"Loader"})}),"\n",(0,a.jsx)(t.p,{children:"The DotLoader component provides a visually appealing loading indicator with three animated dots, which is commonly used for indicating that data is being loaded or an action is in progress."}),"\n",(0,a.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Lightweight and simple to integrate."}),"\n",(0,a.jsx)(t.li,{children:"Animated dots for a smooth loading experience."}),"\n",(0,a.jsx)(t.li,{children:"Customizable via CSS for styling."}),"\n"]}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(i.A,{value:"preview",label:"Preview",default:!0,children:(0,a.jsx)("div",{style:{display:"flex",flexWrap:"wrap",gap:"20px"},children:(0,a.jsx)(c,{})})}),(0,a.jsx)(i.A,{value:"code",label:"Code",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"\r\nimport { useEffect, useState } from 'react';\r\nimport DotLoader from 'ghewar';\r\n\r\nconst LoadingPage = () =>{\r\nconst [isLoading, setLoading] = useState(true);\r\n\r\nuseEffect(()=>{\r\n   setTimeout(()=>{\r\n       setLoading(false);\r\n   },3000);\r\n},[])\r\n\r\nreturn(\r\n   <div>\r\n       {isLoading ? <DotLoader /> : <h3>Data loaded</h3>}\r\n   </div>\r\n )\r\n\r\n}\r\n\r\nexport default LoadingPage;\n"})})})]})]})}function v(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},9365:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});r(6540);var n=r(4164);const a={tabItem:"tabItem_Ymn6"};var o=r(4848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,s),hidden:r,children:t})}},1470:(e,t,r)=>{"use strict";r.d(t,{A:()=>w});var n=r(6540),a=r(4164),o=r(3104),s=r(6347),i=r(205),l=r(7485),u=r(1682),c=r(679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=p(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[u,d]=f({queryString:r,groupId:a}),[m,v]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),b=(()=>{const e=u??m;return h({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),v(e)}),[d,v,o]),tabValues:o}}var v=r(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(4848);function x(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const t=e.currentTarget,r=l.indexOf(t),a=i[r].value;a!==n&&(u(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...o,className:(0,a.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:o}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===o));return e?(0,n.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function j(e){const t=m(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,g.jsx)(x,{...t,...e}),(0,g.jsx)(y,{...t,...e})]})}function w(e){const t=(0,v.A)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(t))}},132:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var n=r(6942),a=r.n(n),o=r(4848);const s=e=>{let{header:t,body:r,footer:n,size:s="default",variant:i="default",onClick:l}=e;const u=a()("card",`size-${s}`,`variant-${i}`,{"card-hover":l});return(0,o.jsxs)("div",{className:u,onClick:l,children:[t&&(0,o.jsx)("div",{className:"card-header",children:t}),r&&(0,o.jsx)("div",{className:"card-body",children:r}),n&&(0,o.jsx)("div",{className:"card-footer",children:n})]})}},6942:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=s(e,o(r)))}return e}function o(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=s(t,r));return t}function s(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},8453:(e,t,r)=>{"use strict";r.d(t,{R:()=>s,x:()=>i});var n=r(6540);const a={},o=n.createContext(a);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);