"use strict";(self.webpackChunkchargily_epay_docs=self.webpackChunkchargily_epay_docs||[]).push([[526],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>s});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=u(n),s=r,k=c["".concat(p,".").concat(s)]||c[s]||d[s]||i;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7102:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2,slug:"/epay-api"},l="Chargily ePay API",o={unversionedId:"chargily-epay-api",id:"chargily-epay-api",title:"Chargily ePay API",description:"Here is how you can work with our API.",source:"@site/docs/chargily-epay-api.md",sourceDirName:".",slug:"/epay-api",permalink:"/epay-api",draft:!1,editUrl:"https://github.com/Chargily/chargily-dev-docs/docs/chargily-epay-api.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/epay-api"},sidebar:"tutorialSidebar",previous:{title:"Chargily ePay Docs Intro",permalink:"/intro"},next:{title:"Addons for programming languages",permalink:"/category/addons-for-programming-languages"}},p={},u=[{value:"1. Make payment",id:"1-make-payment",level:2},{value:"2. Payment confirmation",id:"2-payment-confirmation",level:2}],m={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"chargily-epay-api"},"Chargily ePay API"),(0,r.kt)("p",null,"Here is how you can work with our API."),(0,r.kt)("h2",{id:"1-make-payment"},"1. Make payment"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request method ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," url ",(0,r.kt)("inlineCode",{parentName:"p"},"http://epay.chargily.com.dz/api/invoice"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request Headers :\n",(0,r.kt)("inlineCode",{parentName:"p"},"X-Authorization : API_KEY")," , ",(0,r.kt)("inlineCode",{parentName:"p"},"Accept : application/json"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request Parameters :"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"description"),(0,r.kt)("th",{parentName:"tr",align:null},"Validation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"client ")),(0,r.kt)("td",{parentName:"tr",align:null},"Your client name"),(0,r.kt)("td",{parentName:"tr",align:null},"required ; string ; min:3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"client_email ")),(0,r.kt)("td",{parentName:"tr",align:null},"Your client email"),(0,r.kt)("td",{parentName:"tr",align:null},"required ; email")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"invoice_number ")),(0,r.kt)("td",{parentName:"tr",align:null},"Order number will be used to check payment response"),(0,r.kt)("td",{parentName:"tr",align:null},"required ;")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"amount ")),(0,r.kt)("td",{parentName:"tr",align:null},"Order total amount must be greater than or equal 75"),(0,r.kt)("td",{parentName:"tr",align:null},"required ; numeric ; min:75")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"discount ")),(0,r.kt)("td",{parentName:"tr",align:null},"Discount percentage"),(0,r.kt)("td",{parentName:"tr",align:null},"required ; numeric ; min:0 ; max:99.99")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"back_url ")),(0,r.kt)("td",{parentName:"tr",align:null},"This url you will be redirected to after the payment is done, and must be active URL"),(0,r.kt)("td",{parentName:"tr",align:null},"required ; string  ; url")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"webhook_url")),(0,r.kt)("td",{parentName:"tr",align:null},"This is the source url wich you will get information of payment responce"),(0,r.kt)("td",{parentName:"tr",align:null},"required ; string  ; url")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mode ")),(0,r.kt)("td",{parentName:"tr",align:null},'This is the payment method "EDAHABIA" or "CIB"'),(0,r.kt)("td",{parentName:"tr",align:null},"required ; in:EDAHABIA / CIB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"comment ")),(0,r.kt)("td",{parentName:"tr",align:null},"Description for the payment raison"),(0,r.kt)("td",{parentName:"tr",align:null},"required ; string")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Responses :"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"201 : payment created successffully"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Response as 'json' : 'checkout_url'\n\nExample: {\"checkout_url\"=>\"https://epay.chargily.com.dz/checkout/random_token_here\"}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"401 : Unauthorized"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Invalid API_KEY\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"422 : invalid parametters"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"The request was well-formed but was unable to be followed due to semantic errors\n")))))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"if the creation of invoice successed make redirection to checkout_url")),(0,r.kt)("h2",{id:"2-payment-confirmation"},"2. Payment confirmation"),(0,r.kt)("p",null,'We will send you operation responce via already sent "webhook_url".'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Method ",(0,r.kt)("inlineCode",{parentName:"p"},"POST"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Headers :"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"  Signature\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Body :"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"  invoice with payment status\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Signature Validation :"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"  Incoming webhook request has a header that can be used to verify the payload\n  The name of the header containing the signature can be configured in the 'Signature' header key to validate signatures\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This is an example how you will compute the signature in PHP"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'    //Secret key can be found in your profile information\n    $secret = "API_SECRET";\n    //get incoming webhook request body content\n    $body_content = file_get_contents("php://input");\n    //\n    $computed_signature = hash_hmac(\'sha256\', $body_content,$secret);\n    //get signature from header\n    $signature = getallheaders()["Signature"];\n    //check computed signature\n    $validated =  hash_equals($computed_signature, $signature);// : bool\n\n    if($validated){\n        $payment = json_decode($body_content,true);\n        //@Todo: check invoice status first ($payment["invoice"]["status"] === \'paid\')\n        if($payment["invoice"]["status"] === \'paid\'){\n            //@Todo: confirm order\n        }elseif($payment["invoice"]["status"] === \'failed\'){\n            //@Todo: do anything when payment failed\n        }\n    }\n    exit;\n')))}d.isMDXComponent=!0}}]);