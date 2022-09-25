"use strict";(self.webpackChunkchargily_epay_docs=self.webpackChunkchargily_epay_docs||[]).push([[270],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9597:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"Chargily ePay with React",sidebar_label:"React",sidebar_position:4},i=void 0,l={unversionedId:"addons-for-frameworks/react",id:"addons-for-frameworks/react",title:"Chargily ePay with React",description:"Requirements",source:"@site/docs/addons-for-frameworks/react.md",sourceDirName:"addons-for-frameworks",slug:"/addons-for-frameworks/react",permalink:"/docs/docs/addons-for-frameworks/react",draft:!1,editUrl:"https://github.com/Chargily/chargily-dev-docs/docs/addons-for-frameworks/react.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Chargily ePay with React",sidebar_label:"React",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Symphony",permalink:"/docs/docs/addons-for-frameworks/symphony"},next:{title:"NextJS",permalink:"/docs/docs/addons-for-frameworks/nextjs"}},s={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Environment Variables",id:"environment-variables",level:2},{value:"Get started",id:"get-started",level:2},{value:"Usage/Examples",id:"usageexamples",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Node 8, 10 or higher."),(0,a.kt)("li",{parentName:"ul"},"Node package manager (npm).")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Install this package with npm"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"  npm install chargily-epay-react-js\n")),(0,a.kt)("h2",{id:"environment-variables"},"Environment Variables"),(0,a.kt)("p",null,"To run this project, you will need to add the following environment variables to your .env file."),(0,a.kt)("p",null,"Open the project and create .env file in the root directory."),(0,a.kt)("p",null,"Create-react-app does not allow you to define Environment Variables that do not start with the REACT",(0,a.kt)("em",{parentName:"p"},"APP")," prefix."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"REACT_APP_CHARGILY_APP_KEY")),(0,a.kt)("p",null,"If you are wondering about the app_secret, it will be used in the backend to validate the incoming webhooks. "),(0,a.kt)("h2",{id:"get-started"},"Get started"),(0,a.kt)("p",null,"Check ",(0,a.kt)("a",{parentName:"p",href:"https://youtu.be/41NOoEz3Tzc"},"this")," video to more understand about webhooks."),(0,a.kt)("p",null,"Use ",(0,a.kt)("a",{parentName:"p",href:"https://beeceptor.com"},"beeceptor")," to actually observe some details(body, headers) about\nthe post request (webhook)."),(0,a.kt)("p",null,"You need to validate the incoming webhooks in the backend, here is where you will need the app_secret that you got from ",(0,a.kt)("a",{parentName:"p",href:"https://epay.chargily.com.dz"},"ePay by Chargily")," previously."),(0,a.kt)("p",null,"check the documentaion of laravel or express packages in github(depends on what you're using in the backend) too see how validate incoming webhooks."),(0,a.kt)("h2",{id:"usageexamples"},"Usage/Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'import {create_payement} from \'chargily-epay-react-js\'\n\nfunction App() {\n\n  const handleClick = async()=>{\n\n    const invoice = {\n      "amount":600,\n      "invoice_number":23,\n      "client":"Ahmed malek", // add a text field to allow the user to enter his name, or get it from a context api (depends on the project architecture)\n      "mode":"CIB",\n      "webhook_url":"https://your_beeceptor_url.free.beeceptor.com", // here is the webhook url, use beecptor to easly see the post request and it\'s body, you will use this in backened to save and validate the transactions.\n      "back_url":"https://www.youtube.com/", // to where the user will be redirected after he finish/cancel the payement \n      "discount" :0\n  }\n    try {\n      await create_payement(invoice)\n    } catch (error) {\n      // handle your error here \n      console.log(error)\n    }\n  }\n\n  return (\n    <>\n      {/* Here you can add a form, to get te client name, the mode Edahabiya or CIB, the amount & discount */}\n      {/* It really depends on the project architecture, for example you will not need \n      to add a text field input to get the name of the user if he is  logged in\n      (get the name from redux toolkit or react context api for example) */}\n      \n      \n      <button onClick={handleClick}>testing</button>\n    </>\n  );\n}\n\nexport default App;\n\n')))}d.isMDXComponent=!0}}]);