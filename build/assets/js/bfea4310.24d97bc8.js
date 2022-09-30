"use strict";(self.webpackChunkchargily_epay_docs=self.webpackChunkchargily_epay_docs||[]).push([[81],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=u(n),c=a,g=s["".concat(p,".").concat(c)]||s[c]||m[c]||l;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6103:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={title:"Chargily ePay with PHP",sidebar_label:"PHP",sidebar_position:1,slug:"/epay-php"},i=void 0,o={unversionedId:"addons-for-programming-languages/php",id:"addons-for-programming-languages/php",title:"Chargily ePay with PHP",description:"Requirements",source:"@site/docs/addons-for-programming-languages/php.md",sourceDirName:"addons-for-programming-languages",slug:"/epay-php",permalink:"/chargily-dev-docs/epay-php",draft:!1,editUrl:"https://github.com/Chargily/chargily-dev-docs/docs/addons-for-programming-languages/php.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Chargily ePay with PHP",sidebar_label:"PHP",sidebar_position:1,slug:"/epay-php"},sidebar:"tutorialSidebar",previous:{title:"Addons for programming languages",permalink:"/chargily-dev-docs/category/addons-for-programming-languages"},next:{title:"JavaScript",permalink:"/chargily-dev-docs/epay-js"}},p={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Quick start",id:"quick-start",level:2},{value:"Configurations",id:"configurations",level:2}],d={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"PHP 7.2.5 or later. "),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Via Composer (Recomended)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"composer require chargily/epay-php\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Download as ZIP\nWe do not recommend this option. But be careful to download the updated versions every a while ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Chargily/epay-gateway-php/releases/"},"Download"))),(0,a.kt)("h2",{id:"quick-start"},"Quick start"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"create config file ",(0,a.kt)("strong",{parentName:"li"},"epay_config.php"),"\nThis is where store your api credentials")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"//  Configurations file\nreturn [\n    'key' => 'your-api-key', // you can you found it on your epay.chargily.com.dz Dashboard\n    'secret' => 'your-api-secret', // you can you found it on your epay.chargily.com.dz Dashboard\n];\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"create payment redirection file ",(0,a.kt)("strong",{parentName:"li"},"redirect.php"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use Chargily\\ePay\\Chargily;\n\nrequire 'path-to-vendor/vendor/autoload.php';\n\n$epay_config = require 'epay_config.php';\n\n$chargily = new Chargily([\n    //credentials\n    'api_key' => $epay_config['key'],\n    'api_secret' => $epay_config['secret'],\n    //urls\n    'urls' => [\n        'back_url' => \"valid-url-to-redirect-after-payment\", // this is where client redirected after payment processing\n        'webhook_url' => \"valid-url-to-receive-payment-informations\", // this is where you receive payment informations\n    ],\n    //mode\n    'mode' => 'EDAHABIA', //OR CIB\n    //payment details\n    'payment' => [\n        'number' => 'payment-number-from-your-side', // Payment or order number\n        'client_name' => 'client name', // Client name\n        'client_email' => 'client_email@mail.com', // This is where client receive payment receipt after confirmation\n        'amount' => 75, //this the amount must be greater than or equal 75 \n        'discount' => 0, //this is discount percentage between 0 and 99\n        'description' => 'payment-description', // this is the payment description\n\n    ]\n]);\n// get redirect url\n$redirectUrl = $chargily->getRedirectUrl();\n//like : https://epay.chargily.com.dz/checkout/random_token_here\n//\nif($redirectUrl){\n    //redirect\n    header('Location: '.$redirectUrl);\n}else{\n    echo \"We cant redirect to your payment now\";\n}\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"create payment processing file ",(0,a.kt)("strong",{parentName:"li"},"process.php"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},'\nuse Chargily\\ePay\\Chargily;\n\nrequire \'path-to-vendor/vendor/autoload.php\';\n\n$epay_config = require \'epay_config.php\';\n\n$chargily = new Chargily([\n    //credentials\n    \'api_key\' => $epay_config[\'key\'],\n    \'api_secret\' => $epay_config[\'secret\'],\n]);\n\nif ($chargily->checkResponse()) {\n    $response = $chargily->getResponseDetails();\n    //@ToDo: Validate order status by $response[\'invoice\'][\'invoice_number\']. If it is not already approved, approve it.\n    //something else\n    /*\n        $response like the follwing array\n            $response = array(\n                "invoice" => array(\n                            "id" => 5566321,\n                            "client" => "Client name",\n                            "invoice_number" => "123456789",\n                            "due_date" => "2022-01-01 00:00:00",\n                            "status" => "paid",\n                            "amount" => 75,\n                            "fee" => 25,\n                            "discount" => 0,\n                            "comment" => "Payment description",\n                            "tos" => 1,\n                            "mode" => "EDAHABIA",\n                            "invoice_token" => "randoom_token_here",\n                            "due_amount" => 10000,\n                            "created_at" => "2022-01-01 06:10:38",\n                            "updated_at" => "2022-01-01 06:13:00",\n                            "back_url" => "https://www.mydomain.com/success",\n                            "new" => 1,\n                );\n            )\n    */\n    exit(\'OK\');\n}\n\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Guide for testing your webhook (process) url ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Chargily/epay-gateway-php/blob/main/README_WEBHOOK.md"},"Click Here"))),(0,a.kt)("h2",{id:"configurations"},"Configurations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Available Configurations")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"key"),(0,a.kt)("th",{parentName:"tr",align:null},"description"),(0,a.kt)("th",{parentName:"tr",align:null},"redirect url"),(0,a.kt)("th",{parentName:"tr",align:null},"process url"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"api_key"),(0,a.kt)("td",{parentName:"tr",align:null},"must be string given by organization"),(0,a.kt)("td",{parentName:"tr",align:null},"required"),(0,a.kt)("td",{parentName:"tr",align:null},"required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"api_secret"),(0,a.kt)("td",{parentName:"tr",align:null},"must be string given by organization"),(0,a.kt)("td",{parentName:"tr",align:null},"required"),(0,a.kt)("td",{parentName:"tr",align:null},"required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"urls"),(0,a.kt)("td",{parentName:"tr",align:null},"must be array"),(0,a.kt)("td",{parentName:"tr",align:null},"required"),(0,a.kt)("td",{parentName:"tr",align:null},"not required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"urls","[back_url]"),(0,a.kt)("td",{parentName:"tr",align:null},"must be string and valid url"),(0,a.kt)("td",{parentName:"tr",align:null},"required"),(0,a.kt)("td",{parentName:"tr",align:null},"not required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"urls","[process_url]"),(0,a.kt)("td",{parentName:"tr",align:null},"must be string and valid url"),(0,a.kt)("td",{parentName:"tr",align:null},"required"),(0,a.kt)("td",{parentName:"tr",align:null},"not required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mode"),(0,a.kt)("td",{parentName:"tr",align:null},"must be in ",(0,a.kt)("strong",{parentName:"td"},"CIB"),",",(0,a.kt)("strong",{parentName:"td"},"EDAHABIA")),(0,a.kt)("td",{parentName:"tr",align:null},"required"),(0,a.kt)("td",{parentName:"tr",align:null},"not required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"payment","[number]"),(0,a.kt)("td",{parentName:"tr",align:null},"must be string or int"),(0,a.kt)("td",{parentName:"tr",align:null},"required"),(0,a.kt)("td",{parentName:"tr",align:null},"not required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"payment","[client_name]"),(0,a.kt)("td",{parentName:"tr",align:null},"must be string"),(0,a.kt)("td",{parentName:"tr",align:null},"required"),(0,a.kt)("td",{parentName:"tr",align:null},"not required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"payment","[client_email]"),(0,a.kt)("td",{parentName:"tr",align:null},"must be string and valid email This is where client receive payment receipt after confirmation"),(0,a.kt)("td",{parentName:"tr",align:null},"required"),(0,a.kt)("td",{parentName:"tr",align:null},"not required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"payment","[amount]"),(0,a.kt)("td",{parentName:"tr",align:null},"must be numeric and greather or equal than  75"),(0,a.kt)("td",{parentName:"tr",align:null},"required"),(0,a.kt)("td",{parentName:"tr",align:null},"not required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"payment","[discount]"),(0,a.kt)("td",{parentName:"tr",align:null},"must be numeric and between 0 and 99.99  (discount percentage)"),(0,a.kt)("td",{parentName:"tr",align:null},"required"),(0,a.kt)("td",{parentName:"tr",align:null},"not required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"payment","[description]"),(0,a.kt)("td",{parentName:"tr",align:null},"must be string"),(0,a.kt)("td",{parentName:"tr",align:null},"required"),(0,a.kt)("td",{parentName:"tr",align:null},"not required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"options"),(0,a.kt)("td",{parentName:"tr",align:null},"must be array"),(0,a.kt)("td",{parentName:"tr",align:null},"required"),(0,a.kt)("td",{parentName:"tr",align:null},"not required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"options","[headers]"),(0,a.kt)("td",{parentName:"tr",align:null},"must be array"),(0,a.kt)("td",{parentName:"tr",align:null},"required"),(0,a.kt)("td",{parentName:"tr",align:null},"not required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"options","[timeout]"),(0,a.kt)("td",{parentName:"tr",align:null},"must be numeric"),(0,a.kt)("td",{parentName:"tr",align:null},"required"),(0,a.kt)("td",{parentName:"tr",align:null},"not required")))))}m.isMDXComponent=!0}}]);