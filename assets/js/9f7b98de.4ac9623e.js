"use strict";(self.webpackChunkghewar_docs=self.webpackChunkghewar_docs||[]).push([[591],{3663:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>h,default:()=>m,frontMatter:()=>u,metadata:()=>r,toc:()=>x});const r=JSON.parse('{"id":"hooks/useFetch","title":"useFetch","description":"useFetch is a custom React hook that simplifies making HTTP requests and handling responses.","source":"@site/docs/hooks/useFetch.md","sourceDirName":"hooks","slug":"/hooks/useFetch","permalink":"/ghewar-docs/docs/hooks/useFetch","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/hooks/useFetch.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Hooks","permalink":"/ghewar-docs/docs/category/hooks"}}');var s=t(4848),a=t(8453),i=t(1470),o=t(9365),d=t(6540);const l=e=>{let{url:n,endpoint:t,dataKey:r,options:s={}}=e;const[a,i]=(0,d.useState)(""),[o,l]=(0,d.useState)(!1),[c,u]=(0,d.useState)([]),h=(0,d.useRef)(null);(0,d.useEffect)((()=>{}),[]),(0,d.useEffect)((()=>{(async()=>{h.current?.abort(),h.current=new AbortController,l(!0);try{const e=await fetch(`${n}/${t}`,{...s,signal:h.current?.signal});let a;const i=await e.json();a=r?i[r]:i,u(a)}catch(e){if("AbortError"===e.name)return void console.log("aborted..");i(e.message)}finally{l(!1)}})()}),[]);return{data:c,error:a,isLoading:o}},c=()=>{const{data:e,isLoading:n,error:t}=l({url:"https://dummyjson.com",endpoint:"products",dataKey:"products"});return n?(0,s.jsx)("div",{children:"Loading..."}):t?(0,s.jsxs)("div",{children:["Error: ",t]}):(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{children:"Product List (From API Data)"}),(0,s.jsx)("ul",{children:e.map((e=>(0,s.jsxs)("li",{children:[e.title," - ",e.price]},e.id)))})]})},u={sidebar_position:1},h="useFetch",p={},x=[{value:"Basic Example",id:"basic-example",level:2},{value:"Fetching Data with a Key",id:"fetching-data-with-a-key",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returned Data",id:"returned-data",level:2},{value:"Additional Fetch Options",id:"additional-fetch-options",level:2},{value:"Using Dynamic EndPoint",id:"using-dynamic-endpoint",level:2},{value:"Error Handling",id:"error-handling",level:2},{value:"Cancellation and Cleanup",id:"cancellation-and-cleanup",level:2}];function j(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"usefetch",children:"useFetch"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"useFetch"})," is a custom React hook that simplifies making HTTP requests and handling responses."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"It provides an easy-to-use API for fetching data,"}),"\n",(0,s.jsx)(n.li,{children:"managing loading states, and handling errors in your React components."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"basic-example",children:"Basic Example"}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(o.A,{value:"preview",label:"Preview",default:!0,children:(0,s.jsx)(c,{})}),(0,s.jsx)(o.A,{value:"code",label:"Code",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'import useFetch from "ghewar";\n\nexport interface Product {\n  id?: number;\n  title: string;\n  price: string;\n  thumbnail: string;\n}\n\nconst ProductData = () => {\n  const { data, isLoading, error } = useFetch<Product>({\n    url: "https://dummyjson.com",\n    endpoint: "products",\n    dataKey: "products",\n  });\n\n  if (isLoading) {\n    return <div>Loading...</div>;\n  }\n\n  if (error) {\n    return <div>Error: {error}</div>;\n  }\n\n  return (\n    <div>\n      <h2>Product List (From API Data)</h2>\n      <ul>\n        {data.map(product => (\n          <li key={product.id}>\n            {product.title} - {product.price}\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n};\n\nexport default ProductData;\n'})})})]}),"\n",(0,s.jsx)(n.h2,{id:"fetching-data-with-a-key",children:"Fetching Data with a Key"}),"\n",(0,s.jsx)(n.p,{children:"If the data returned from your API is wrapped in a key (e.g., data or products)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"then you can specify the key using the dataKey parameter."}),"\n",(0,s.jsx)(n.li,{children:"This is helpful when the API response structure is not directly an array but an object with an array property."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"const { data, isLoading, error } = useFetch<Product>({\n  url: 'https://dummyjson.com',\n  endpoint: 'products',\n  dataKey: 'products', // Specify the key to extract the data from\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"This will help if the response is like this"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'{\n  "products": [\n          {\n            ....\n          }\n     ]\n}         \n'})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"useFetch"})," hook accepts an object with the following parameters"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Default Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"url"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:"The base URL of the API you are fetching data from."}),(0,s.jsx)(n.td,{children:"(Required)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"endpoint"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsxs)(n.td,{children:["The endpoint (path) to append to the ",(0,s.jsx)(n.code,{children:"url"})," to form the full request URL. This parameter specifies what resource you want to access."]}),(0,s.jsx)(n.td,{children:"(Required)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"dataKey"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"string"})," (Optional)"]}),(0,s.jsx)(n.td,{children:"The key in the response JSON to extract the data from. If omitted, the entire response is used as the data."}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"options"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"RequestInit"})," (Optional)"]}),(0,s.jsx)(n.td,{children:"Any additional options to customize the fetch request (e.g., headers, method, etc.)."}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"{}"})," (Empty Object)"]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"returned-data",children:"Returned Data"}),"\n",(0,s.jsx)(n.p,{children:"The hook returns an object with the following properties"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"data"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"T[]"})}),(0,s.jsxs)(n.td,{children:["The fetched data (an array of items of type ",(0,s.jsx)(n.code,{children:"T"}),"). If ",(0,s.jsx)(n.code,{children:"dataKey"})," is provided, it returns the array inside the key."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"error"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsx)(n.td,{children:"An error message if something went wrong during the fetch operation (or an empty string if no error)."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"isLoading"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsxs)(n.td,{children:["A boolean flag indicating whether the request is in progress. ",(0,s.jsx)(n.code,{children:"true"})," while loading, ",(0,s.jsx)(n.code,{children:"false"})," after completion."]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"additional-fetch-options",children:"Additional Fetch Options"}),"\n",(0,s.jsx)(n.p,{children:"You can further customize the behavior of useFetch by providing additional options in the options parameter, which is passed directly to the fetch function."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"const { data, isLoading, error } = useFetch<Product>({\n  url: 'https://api.example.com',\n  endpoint: 'products',\n  dataKey: 'products',\n  options: {\n    method: 'GET',\n    headers: {\n      'Authorization': 'Bearer YOUR_API_TOKEN',\n    },\n  },\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"using-dynamic-endpoint",children:"Using Dynamic EndPoint"}),"\n",(0,s.jsx)(n.p,{children:"If you want to fetch data based on a dynamic endpoint (e.g., based on user input), you can easily modify the endpoint parameter inside a component"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"const ProductComponent = ({ productId }: { productId: number }) => {\n  const { data, isLoading, error } = useFetch<Product>({\n    url: 'https://api.example.com',\n    endpoint: `products/${productId}`,\n  });\n\n  // handle loading, error, and rendering as before\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"error-handling",children:"Error Handling"}),"\n",(0,s.jsx)(n.p,{children:"If an error occurs during the fetch operation such as a network failure, invalid URL, or unexpected API response."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"the error state will be populated with the error message."}),"\n",(0,s.jsx)(n.li,{children:"This allows you to display an appropriate message to the user."}),"\n",(0,s.jsx)(n.li,{children:"You can handle errors gracefully by using the error state returned by the hook and showing a user-friendly message."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"if (error) {\n  return <div>Error: {error}</div>;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"cancellation-and-cleanup",children:"Cancellation and Cleanup"}),"\n",(0,s.jsxs)(n.p,{children:["The useFetch hook uses the native ",(0,s.jsx)(n.code,{children:"AbortController"})," to cancel the ongoing request when a new request is initiated."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"This helps to prevent race conditions and unnecessary updates to the state when the previous request is no longer needed."}),"\n",(0,s.jsxs)(n.li,{children:["If the component using ",(0,s.jsx)(n.code,{children:"useFetch"})," is unmounted, any ongoing fetch requests will automatically be aborted to prevent memory leaks."]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>i});t(6540);var r=t(4164);const s={tabItem:"tabItem_Ymn6"};var a=t(4848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,i),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(6540),s=t(4164),a=t(3104),i=t(6347),o=t(205),d=t(7485),l=t(1682),c=t(679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,l.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const s=(0,i.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,d.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function j(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=h(e),[i,d]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[l,u]=x({queryString:t,groupId:s}),[j,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,c.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),f=(()=>{const e=l??j;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{f&&d(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),m(e)}),[u,m,a]),tabValues:a}}var m=t(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(4848);function b(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:o}=e;const d=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.a_)(),c=e=>{const n=e.currentTarget,t=d.indexOf(n),s=o[t].value;s!==r&&(l(n),i(s))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>d.push(e),onKeyDown:u,onClick:c,...a,className:(0,s.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function v(e){const n=j(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,g.jsx)(b,{...n,...e}),(0,g.jsx)(y,{...n,...e})]})}function w(e){const n=(0,m.A)();return(0,g.jsx)(v,{...e,children:u(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(6540);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);