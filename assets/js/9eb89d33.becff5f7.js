"use strict";(self.webpackChunkghewar_docs=self.webpackChunkghewar_docs||[]).push([[870],{9191:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>x,frontMatter:()=>c,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"components/button","title":"Button","description":"The Button component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.","source":"@site/docs/components/button.md","sourceDirName":"components","slug":"/components/button","permalink":"/ghewar/docs/components/button","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/button.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Components","permalink":"/ghewar/docs/category/components"},"next":{"title":"Card","permalink":"/ghewar/docs/components/card"}}');var s=t(4848),i=t(8453),l=t(1470),a=t(9365),o=t(8993);const c={sidebar_position:1},d="Button",u={},h=[{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2},{value:"Button Variants",id:"button-variants",level:2},{value:"Button Sizes",id:"button-sizes",level:2},{value:"Customizing Properties",id:"customizing-properties",level:2},{value:"Handling Interactions",id:"handling-interactions",level:2},{value:"Customizing Content with Children",id:"customizing-content-with-children",level:2},{value:"Props",id:"props",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"button",children:"Button"})}),"\n",(0,s.jsx)(n.p,{children:"The Button component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation."}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(n.p,{children:["Import the ",(0,s.jsx)(n.code,{children:"Button"})," component into your React file"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'import { Button } from "ghewar";\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Then, you can use the ",(0,s.jsx)(n.code,{children:"<Button />"})," component anywhere in your JSX code"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'<Button onClick={() => alert("Button clicked!")}>Click Me</Button>\n'})}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import { Button } from 'ghewar';\n\nfunction App() {\n  const handleClick = () => {\n    console.log('Button was clicked!');\n  };\n\n  return (\n    <div>\n      <h1>Welcome to the App!</h1>\n      <Button onClick={handleClick}>Submit</Button>\n    </div>\n  );\n}\n\nexport default App;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"button-variants",children:"Button Variants"}),"\n",(0,s.jsx)(n.p,{children:"The Button component supports multiple variants to customize its appearance."}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsx)(a.A,{value:"preview",label:"Preview",default:!0,children:(0,s.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",gap:"20px"},children:[(0,s.jsx)(o.A,{variant:"primary",children:"Button"}),(0,s.jsx)(o.A,{variant:"secondary",children:"Button"}),(0,s.jsx)(o.A,{variant:"destructive",children:"Button"}),(0,s.jsx)(o.A,{variant:"outline",children:"Button"})]})}),(0,s.jsx)(a.A,{value:"code",label:"Code",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:' <Button variant="primary">Button</Button> \n <Button variant="secondary">Button</Button>\n <Button variant="destructive">Button</Button>\n <Button variant="outline">Button</Button>\n'})})})]}),"\n",(0,s.jsx)(n.h2,{id:"button-sizes",children:"Button Sizes"}),"\n",(0,s.jsx)(n.p,{children:"The Button component comes with predefined sizes to ensure consistency across your UI. You can easily choose from a variety of button sizes to suit your design needs."}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsx)(a.A,{value:"preview",label:"Preview",default:!0,children:(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"column",flexWrap:"wrap",gap:"20px"},children:[(0,s.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",gap:"20px"},children:[(0,s.jsx)(o.A,{size:"xs",children:"xs"}),(0,s.jsx)(o.A,{size:"sm",children:"sm"}),(0,s.jsx)(o.A,{size:"md",children:"md"}),(0,s.jsx)(o.A,{size:"lg",children:"large"})]}),(0,s.jsx)(o.A,{size:"full",children:"Full"})]})}),(0,s.jsx)(a.A,{value:"code",label:"Code",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:' <Button size="xs">xs</Button>\n   <Button size="sm">sm</Button>\n   <Button size="md">md</Button>\n   <Button size="lg">large</Button>\n   <Button size="full">Full</Button>\n'})})})]}),"\n",(0,s.jsx)(n.h2,{id:"customizing-properties",children:"Customizing Properties"}),"\n",(0,s.jsxs)(n.p,{children:["You can add any valid HTML attributes (like className, aria-label, etc.) to the Button component, and it will be forwarded to the underlying ",(0,s.jsx)(n.code,{children:"<button>"})," element."]}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsx)(a.A,{value:"preview",label:"Preview",default:!0,children:(0,s.jsx)(o.A,{"aria-label":"Submit",children:"Submit"})}),(0,s.jsx)(a.A,{value:"code",label:"Code",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:' <Button aria-label="Submit">Submit</Button>\n'})})})]}),"\n",(0,s.jsx)(n.h2,{id:"handling-interactions",children:"Handling Interactions"}),"\n",(0,s.jsx)(n.p,{children:"You can pass standard React event handlers like onClick, onMouseEnter, onFocus, etc. to handle user interactions with the button."}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsx)(a.A,{value:"preview",label:"Preview",default:!0,children:(0,s.jsx)(o.A,{onClick:()=>alert("Button clicked!"),children:"Click"})}),(0,s.jsx)(a.A,{value:"code",label:"Code",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:" <Button onClick={() => alert('Button clicked!')}>Click</Button>\n"})})})]}),"\n",(0,s.jsx)(n.h2,{id:"customizing-content-with-children",children:"Customizing Content with Children"}),"\n",(0,s.jsx)(n.p,{children:"We can place dynamic content between opening and closing tags. This children prop makes the button flexible and adaptable to different situations."}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsx)(a.A,{value:"preview",label:"Preview",default:!0,children:(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"8px"},children:[(0,s.jsx)(o.A,{size:"lg",children:"Click Me"}),(0,s.jsx)(o.A,{size:"lg",children:(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"8px"},children:[(0,s.jsx)("i",{className:"fa fa-check"}),(0,s.jsx)("span",{children:"Submit"})]})})]})}),(0,s.jsx)(a.A,{value:"code",label:"Code",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:" <Button size=\"lg\">Click Me</Button>\n <Button size=\"lg\">\n   <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px' }}>\n   <i className=\"fa fa-check\"></i> <span>Submit</span>\n   </div>\n </Button>\n"})})})]}),"\n",(0,s.jsx)(n.h2,{id:"props",children:"Props"}),"\n",(0,s.jsx)(n.p,{children:"The Button component accepts the following props"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Prop Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Default Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"size"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsxs)(n.td,{children:["Specifies the size of the button. Accepts ",(0,s.jsx)(n.code,{children:"xs"}),", ",(0,s.jsx)(n.code,{children:"sm"}),", ",(0,s.jsx)(n.code,{children:"md"}),", ",(0,s.jsx)(n.code,{children:"lg"}),", ",(0,s.jsx)(n.code,{children:"full"}),"."]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"'md'"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"variant"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsxs)(n.td,{children:["Defines the variant of the button. Options are ",(0,s.jsx)(n.code,{children:"primary"}),", ",(0,s.jsx)(n.code,{children:"secondary"}),", ",(0,s.jsx)(n.code,{children:"destructive"}),", ",(0,s.jsx)(n.code,{children:"outline"}),"."]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"'primary'"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"onClick"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"function"})}),(0,s.jsx)(n.td,{children:"A callback function that triggers when the button is clicked."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"disabled"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsxs)(n.td,{children:["Disables the button when set to ",(0,s.jsx)(n.code,{children:"true"}),"."]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"children"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"node"})}),(0,s.jsx)(n.td,{children:"Content inside the button (can be text, icons, or other elements)."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})})]})]})]})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>l});t(6540);var r=t(4164);const s={tabItem:"tabItem_Ymn6"};var i=t(4848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,l),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>B});var r=t(6540),s=t(4164),i=t(3104),l=t(6347),a=t(205),o=t(7485),c=t(1682),d=t(679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const s=(0,l.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,i=h(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,u]=x({queryString:t,groupId:s}),[m,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,d.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),b=(()=>{const e=c??m;return p({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{b&&o(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),j(e)}),[u,j,i]),tabValues:i}}var j=t(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(4848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:a}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),s=a[t].value;s!==r&&(c(n),l(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...i,className:(0,s.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:i}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=m(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,f.jsx)(v,{...n,...e}),(0,f.jsx)(g,{...n,...e})]})}function B(e){const n=(0,j.A)();return(0,f.jsx)(y,{...e,children:u(e.children)},String(n))}},8993:(e,n,t)=>{t.d(n,{A:()=>i});var r=t(4848);const s=e=>{let{variant:n="primary",size:t="md",children:s,...i}=e;return(0,r.jsx)("div",{children:(0,r.jsx)("button",{...i,className:`btn btn-${n} btn-${t}`,children:s})})};s.defaultProps={variant:"primary",size:"md"};const i=s},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var r=t(6540);const s={},i=r.createContext(s);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);