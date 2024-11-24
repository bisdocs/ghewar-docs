/*! For license information please see 0d8bf7e4.5c386d77.js.LICENSE.txt */
(self.webpackChunkghewar_docs=self.webpackChunkghewar_docs||[]).push([[899],{7780:(e,r,n)=>{"use strict";n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>h,default:()=>f,frontMatter:()=>l,metadata:()=>t,toc:()=>p});const t=JSON.parse('{"id":"components/card","title":"Card","description":"The Card component is a flexible and customizable component designed to display content in a \\"card-like\\" format.","source":"@site/docs/components/card.md","sourceDirName":"components","slug":"/components/card","permalink":"/ghewar-docs/docs/components/card","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/card.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Button","permalink":"/ghewar-docs/docs/components/button"},"next":{"title":"Date Picker","permalink":"/ghewar-docs/docs/components/date-picker"}}');var a=n(4848),d=n(8453),s=n(1470),i=n(9365),o=n(132),c=n(8993);const l={sidebar_position:3},h="Card",u={},p=[{value:"Example",id:"example",level:2},{value:"Card Variants",id:"card-variants",level:2},{value:"Card Sizes",id:"card-sizes",level:2},{value:"Card Action",id:"card-action",level:2},{value:"Props",id:"props",level:2}];function x(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.header,{children:(0,a.jsx)(r.h1,{id:"card",children:"Card"})}),"\n",(0,a.jsx)(r.p,{children:'The Card component is a flexible and customizable component designed to display content in a "card-like" format.'}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"It supports customizable headers, body content, and footers"}),"\n",(0,a.jsx)(r.li,{children:"as well as adjustable sizes and variants."}),"\n",(0,a.jsx)(r.li,{children:"You can also make the card interactive by passing an onClick handler."}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-jsx",children:'import { Button } from "ghewar";\r\nimport { Heading } from "ghewar";\r\nimport { Card } from "ghewar";\r\n\r\nconst App = () => {\r\n  return (\r\n    <div>\r\n      <Card\r\n        header={<Heading level={2}>Card Header</Heading>}\r\n        body={<p>This is the body content of the card.</p>}\r\n        footer={\r\n          <Button size="lg" variant="secondary">\r\n            Card Footer\r\n          </Button>\r\n        }\r\n        size="medium"\r\n        variant="primary"\r\n        onClick={() => alert("Card clicked!")}\r\n      />\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default App;\n'})}),"\n",(0,a.jsx)(r.h2,{id:"card-variants",children:"Card Variants"}),"\n",(0,a.jsxs)(r.p,{children:["The Card component supports two variants: ",(0,a.jsx)(r.code,{children:"primary"})," and ",(0,a.jsx)(r.code,{children:"secondary"}),"."]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"If it's not specified then by default, the card uses the primary variant."}),"\n"]}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(i.A,{value:"preview",label:"Preview",default:!0,children:(0,a.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",gap:"20px"},children:[(0,a.jsx)(o.A,{header:(0,a.jsx)(r.h3,{children:" Card Header "}),body:(0,a.jsx)(r.p,{children:"This is the body content of the card."}),footer:(0,a.jsx)(c.A,{size:"sm",variant:"secondary",children:"Click"}),variant:"primary"}),(0,a.jsx)(o.A,{header:(0,a.jsx)(r.h3,{children:" Card Header "}),body:(0,a.jsx)(r.p,{children:"This is the body content of the card."}),footer:(0,a.jsx)(c.A,{size:"sm",children:"Click"}),variant:"secondary",onClick:()=>alert("Card clicked!")}),(0,a.jsx)(o.A,{header:(0,a.jsx)(r.h3,{children:" Card Header "}),body:(0,a.jsx)(r.p,{children:"This is the body content of the card."}),footer:(0,a.jsx)(c.A,{size:"sm",children:"Click"}),variant:"default"})]})}),(0,a.jsx)(i.A,{value:"code",label:"Code",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-tsx",children:' <Card \r\n     header={ <h3> Card Header </h3> } \r\n     body={<p>This is the body content of the card.</p>} \r\n     footer={<Button size="sm" variant="secondary">Click</Button>} \r\n     variant="primary"  \r\n   />\r\n\r\n <Card\r\n     header={ <h3> Card Header </h3> }\r\n     body={<p>This is the body content of the card.</p>}\r\n     footer={<Button size="sm">Click</Button>}\r\n     variant="secondary"\r\n     onClick={() => alert(\'Card clicked!\')}\r\n />\r\n\r\n <Card\r\n     header={ <h3> Card Header </h3> }\r\n     body={<p>This is the body content of the card.</p>}\r\n     footer={<Button size="sm">Click</Button>}\r\n     variant="default"\r\n   />\n'})})})]}),"\n",(0,a.jsx)(r.h2,{id:"card-sizes",children:"Card Sizes"}),"\n",(0,a.jsx)(r.p,{children:"The Card component can be customized in terms of size."}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(i.A,{value:"preview",label:"Preview",default:!0,children:(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column",flexWrap:"wrap",gap:"20px"},children:[(0,a.jsx)(o.A,{header:(0,a.jsx)(r.h3,{children:" Card Header "}),body:(0,a.jsx)(r.p,{children:"This is the body content of the card."}),size:"small"}),(0,a.jsx)(o.A,{header:(0,a.jsx)(r.h3,{children:" Card Header "}),body:(0,a.jsx)(r.p,{children:"This is the body content of the card."}),size:"medium"}),(0,a.jsx)(o.A,{header:(0,a.jsx)(r.h3,{children:" Card Header "}),body:(0,a.jsx)(r.p,{children:"This is the body content of the card."}),size:"large"}),(0,a.jsx)(o.A,{header:(0,a.jsx)(r.h3,{children:" Card Header "}),body:(0,a.jsx)(r.p,{children:"This is the body content of the card."})})]})}),(0,a.jsx)(i.A,{value:"Code",label:"Code",default:!0,children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-tsx",children:'  <Card \r\n     header={ <h3> Card Header </h3> } \r\n     body={<p>This is the body content of the card.</p>} \r\n     size = "small"\r\n   />\r\n\r\n   <Card\r\n     header={ <h3> Card Header </h3> }\r\n     body={<p>This is the body content of the card.</p>}\r\n     size = "medium"\r\n   />\r\n\r\n   <Card\r\n     header={ <h3> Card Header </h3> }\r\n     body={<p>This is the body content of the card.</p>}\r\n     size = "large"\r\n   />\r\n\r\n   <Card\r\n     header={ <h3> Card Header </h3> }\r\n     body={<p>This is the body content of the card.</p>}\r\n   />\n'})})})]}),"\n",(0,a.jsx)(r.h2,{id:"card-action",children:"Card Action"}),"\n",(0,a.jsx)(r.p,{children:"The Card component includes an action feature that lets you trigger a custom function when the card is clicked."}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["To enable the action feature, simply provide an ",(0,a.jsx)(r.code,{children:"onClick"})," prop."]}),"\n",(0,a.jsx)(r.li,{children:"If the onClick handler is passed, a hover effect is applied to the card, indicating that it is interactive."}),"\n"]}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(i.A,{value:"preview",label:"Preview",default:!0,children:(0,a.jsx)(o.A,{header:(0,a.jsx)(r.h3,{children:"Learn More"}),body:(0,a.jsx)(r.p,{children:"Click the card to learn more about this topic."}),size:"medium",variant:"primary",onClick:()=>window.location.href="https://www.google.com"})}),(0,a.jsx)(i.A,{value:"code",label:"Code",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-tsx",children:'  <Card \r\n      header={<h3>Learn More</h3>} \r\n      body={<p>Click the card to learn more about this topic.</p>} \r\n      size = "medium"\r\n      variant = "primary"\r\n      onClick={() => window.location.href = \'https://www.google.com\'} \r\n  />\n'})})})]}),"\n",(0,a.jsx)(r.h2,{id:"props",children:"Props"}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Prop"}),(0,a.jsx)(r.th,{children:"Type"}),(0,a.jsx)(r.th,{children:"Default"}),(0,a.jsx)(r.th,{children:"Description"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"header"})}),(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"ReactNode"})}),(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"undefined"})}),(0,a.jsx)(r.td,{children:"Optional. Content for the header section of the card."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"body"})}),(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"ReactNode"})}),(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"undefined"})}),(0,a.jsx)(r.td,{children:"Optional. Content for the main body of the card."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"footer"})}),(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"ReactNode"})}),(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"undefined"})}),(0,a.jsx)(r.td,{children:"Optional. Content for the footer section of the card."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"size"})}),(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:'"default" | "small" | "medium" | "large"'})}),(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:'"default"'})}),(0,a.jsxs)(r.td,{children:["Controls the size of the card. Choose from: ",(0,a.jsx)(r.code,{children:"small"}),", ",(0,a.jsx)(r.code,{children:"medium"}),", ",(0,a.jsx)(r.code,{children:"large"}),"."]})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"variant"})}),(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:'"default" | "primary" | "secondary"'})}),(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:'"default"'})}),(0,a.jsxs)(r.td,{children:["Controls the appearance of the card. Choose from: ",(0,a.jsx)(r.code,{children:"default"}),", ",(0,a.jsx)(r.code,{children:"primary"}),", ",(0,a.jsx)(r.code,{children:"secondary"}),"."]})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"onClick"})}),(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"() => void"})}),(0,a.jsx)(r.td,{children:(0,a.jsx)(r.code,{children:"undefined"})}),(0,a.jsx)(r.td,{children:"Optional. A function triggered when the card is clicked. Adds hover effect if provided."})]})]})]})]})}function f(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},9365:(e,r,n)=>{"use strict";n.d(r,{A:()=>s});n(6540);var t=n(4164);const a={tabItem:"tabItem_Ymn6"};var d=n(4848);function s(e){let{children:r,hidden:n,className:s}=e;return(0,d.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,s),hidden:n,children:r})}},1470:(e,r,n)=>{"use strict";n.d(r,{A:()=>g});var t=n(6540),a=n(4164),d=n(3104),s=n(6347),i=n(205),o=n(7485),c=n(1682),l=n(679);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return h(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:a}}=e;return{value:r,label:n,attributes:t,default:a}}))}(n);return function(e){const r=(0,c.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function p(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function x(e){let{queryString:r=!1,groupId:n}=e;const a=(0,s.W6)(),d=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,o.aZ)(d),(0,t.useCallback)((e=>{if(!d)return;const r=new URLSearchParams(a.location.search);r.set(d,e),a.replace({...a.location,search:r.toString()})}),[d,a])]}function f(e){const{defaultValue:r,queryString:n=!1,groupId:a}=e,d=u(e),[s,o]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:d}))),[c,h]=x({queryString:n,groupId:a}),[f,m]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,d]=(0,l.Dv)(n);return[a,(0,t.useCallback)((e=>{n&&d.set(e)}),[n,d])]}({groupId:a}),j=(()=>{const e=c??f;return p({value:e,tabValues:d})?e:null})();(0,i.A)((()=>{j&&o(j)}),[j]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:d}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),m(e)}),[h,m,d]),tabValues:d}}var m=n(2303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(4848);function v(e){let{className:r,block:n,selectedValue:t,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,d.a_)(),l=e=>{const r=e.currentTarget,n=o.indexOf(r),a=i[n].value;a!==t&&(c(r),s(a))},h=e=>{let r=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;r=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;r=o[n]??o[o.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},r),children:i.map((e=>{let{value:r,label:n,attributes:d}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>o.push(e),onKeyDown:h,onClick:l,...d,className:(0,a.A)("tabs__item",j.tabItem,d?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function y(e){let{lazy:r,children:n,selectedValue:d}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===d));return e?(0,t.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==d})))})}function C(e){const r=f(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",j.tabList),children:[(0,b.jsx)(v,{...r,...e}),(0,b.jsx)(y,{...r,...e})]})}function g(e){const r=(0,m.A)();return(0,b.jsx)(C,{...e,children:h(e.children)},String(r))}},8993:(e,r,n)=>{"use strict";n.d(r,{A:()=>d});var t=n(4848);const a=e=>{let{variant:r="primary",size:n="md",children:a,...d}=e;return(0,t.jsx)("div",{children:(0,t.jsx)("button",{...d,className:`btn btn-${r} btn-${n}`,children:a})})};a.defaultProps={variant:"primary",size:"md"};const d=a},132:(e,r,n)=>{"use strict";n.d(r,{A:()=>s});var t=n(6942),a=n.n(t),d=n(4848);const s=e=>{let{header:r,body:n,footer:t,size:s="default",variant:i="default",onClick:o}=e;const c=a()("card",`size-${s}`,`variant-${i}`,{"card-hover":o});return(0,d.jsxs)("div",{className:c,onClick:o,children:[r&&(0,d.jsx)("div",{className:"card-header",children:r}),n&&(0,d.jsx)("div",{className:"card-body",children:n}),t&&(0,d.jsx)("div",{className:"card-footer",children:t})]})}},6942:(e,r)=>{var n;!function(){"use strict";var t={}.hasOwnProperty;function a(){for(var e="",r=0;r<arguments.length;r++){var n=arguments[r];n&&(e=s(e,d(n)))}return e}function d(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var r="";for(var n in e)t.call(e,n)&&e[n]&&(r=s(r,n));return r}function s(e,r){return r?e?e+" "+r:e+r:e}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(r,[]))||(e.exports=n)}()},8453:(e,r,n)=>{"use strict";n.d(r,{R:()=>s,x:()=>i});var t=n(6540);const a={},d=t.createContext(a);function s(e){const r=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(d.Provider,{value:r},e.children)}}}]);