"use strict";(self.webpackChunkchargily_epay_docs=self.webpackChunkchargily_epay_docs||[]).push([[942],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,y=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(y,s(s({ref:t},p),{},{components:n})):r.createElement(y,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7005:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"Chargily ePay with Symphony",sidebar_label:"Symphony",sidebar_position:3,slug:"/epay-symfony"},s=void 0,l={unversionedId:"addons-for-frameworks/symphony",id:"addons-for-frameworks/symphony",title:"Chargily ePay with Symphony",description:"Installation",source:"@site/docs/addons-for-frameworks/symphony.md",sourceDirName:"addons-for-frameworks",slug:"/epay-symfony",permalink:"/epay-symfony",draft:!1,editUrl:"https://github.com/Chargily/chargily-dev-docs/docs/addons-for-frameworks/symphony.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Chargily ePay with Symphony",sidebar_label:"Symphony",sidebar_position:3,slug:"/epay-symfony"},sidebar:"tutorialSidebar",previous:{title:"Django",permalink:"/epay-django"},next:{title:"React",permalink:"/epay-react-js"}},i={},c=[{value:"Installation",id:"installation",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Via Composer (Recomended)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"composer require chargily/epay-symfony\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Register the bundle, add this line at the end of the file config/bundles.php ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\\Chargily\\SymfonyBundle\\ChargilySymfonyBundle::class => ['all' => true],\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Import the services, Add the follow line in config/services.yml")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'imports:\n    - { resource: "@ChargilySymfonyBundle/config/services.yaml" }\n')),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Configure the api keys Add the follow line in config/services.yml")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'parameters:\n    api_key: "API_KEY"\n    secret_key: "SECRET_KEY"\n')),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Process payment and redirection to payment page")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'        $payload = array(\n            "client" => "test",\n            \'client_email\' => "test@gmail.com",\n            "invoice_number" => \'123456789\',\n            "amount" => 110,\n            \'discount\' => 0,\n            \'mode\' => \'CIB\',\n            \'back_url\' => "https://test.com",\n            \'webhook_url\' => "https://test.com" . "/" . "webHookSuffixRoute". "/" ."OrderNumber",\n            //back_url example when you want to take your host base url\n            //\'back_url\'  => $request->getSchemeAndHttpHost(),\n            //webhook_url example when you want to take your host base url and add your suffix route for the webhook\n            //\'webhook_url\' => $request->getSchemeAndHttpHost() . "/" . you_back_url_suffix_here . "/" .Order_Number,\n            \'comment\' => \'My Payment Comment.\',\n            \'api_key\' => $this->getParameter(\'api_key\'),\n        );\n\n        $chargyliController = new ChargilyEpaySymfonyController();\n\n        $response = $chargyliController->pay($payload);\n        $status_code = $response->getStatusCode();\n        $response = json_decode($response->getContent());\n        if ($status_code == 200) {\n            //redirect to chargily payment gateway\n            return $this->redirect($response->response);\n        } else {\n            // This is a error message depending on issue that happen\n            dd($status_code . " " . $response->response);\n        }\n\n')),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"success Message for the Process payment")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"200 => getting redirection link with success => Redirection to url\n")),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"Error Message for the Process payment")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"400 => There mode must be CIB,EDAHABIA option Only\n400 => There amount must be numeric and greather or equal than 75\n400 => There is issue \\for connecting payment gateway. Sorry \\for the inconvenience => with error message\n400 => There is missing information in payment parameters\n")),(0,a.kt)("ol",{start:8},(0,a.kt)("li",{parentName:"ol"},"Webhook Template")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"    /**\n     * @Route(\"/chargily/webhook/{OrderNumber}\",name=\"chargily_webhook\")\n     * @throws \\Exception\n     */\n    public function chargilyWebhook(Request $request)\n    {\n        //getting your order number\n        $number = $request->attributes->get('OrderNumber');\n\n        //part or code for searching your order by number\n        /*\n         *\n         */\n\n        //getting request content\n        $data = json_decode($request->getContent(), true);\n        $headers = json_decode($request->headers, true);\n\n        $hashedData =  hash_hmac('sha256', json_encode($data) , $this->getParameter('secret_key'));\n\n        if (isset($data) and isset($number)) {\n            if($data['invoice']['status'] == 'paid'){\n\n                //part where you update your order status for paid status\n\n                return new JsonResponse([\n                    'code' => 200,\n                    'message' => 'Update status with success'\n                ]);\n            }elseif($data['invoice']['status'] == 'failed'){\n                //part where you update your order status for failed status\n\n                return new JsonResponse([\n                    'code' => 200,\n                    'message' => 'Update status with success'\n                ]);\n            }\n            elseif( $data['invoice']['status'] == 'canceled'){\n                //part where you update your order status for canceled status\n                return new JsonResponse([\n                    'code' => 200,\n                    'message' => 'Update status with success'\n                ]);\n            }\n        } else {\n            return new JsonResponse([\n                'code' => 400,\n                'message' => 'Update status Failed'\n            ]);\n        }\n\n    }\n")),(0,a.kt)("ol",{start:9},(0,a.kt)("li",{parentName:"ol"},"Clear the Cache And Enjoy")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"php bin/console cache:clear\n")))}u.isMDXComponent=!0}}]);