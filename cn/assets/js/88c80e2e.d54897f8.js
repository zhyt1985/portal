"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[4124],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),g=i(r),m=o,d=g["".concat(l,".").concat(m)]||g[m]||u[m]||a;return r?n.createElement(d,p(p({ref:t},s),{},{components:r})):n.createElement(d,p({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,p[1]=c;for(var i=2;i<a;i++)p[i]=r[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},2165:function(e,t,r){r.r(t),r.d(t,{default:function(){return u},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return i}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),p=["components"],c={},l={unversionedId:"goctl/zrpc",id:"goctl/zrpc",isDocsHomePage:!1,title:"rpc \u6307\u4ee4",description:"Goctl Rpc\u662fgoctl\u811a\u624b\u67b6\u4e0b\u7684\u4e00\u4e2arpc\u670d\u52a1\u4ee3\u7801\u751f\u6210\u6a21\u5757\uff0c\u652f\u6301proto\u6a21\u677f\u751f\u6210\u548crpc\u670d\u52a1\u4ee3\u7801\u751f\u6210\uff0c\u901a\u8fc7\u6b64\u5de5\u5177\u751f\u6210\u4ee3\u7801\u4f60\u53ea\u9700\u8981\u5173\u6ce8\u4e1a\u52a1\u903b\u8f91\u7f16\u5199\u800c\u4e0d\u7528\u53bb\u7f16\u5199\u4e00\u4e9b\u91cd\u590d\u6027\u7684\u4ee3\u7801\u3002\u8fd9\u4f7f\u5f97\u6211\u4eec\u628a\u7cbe\u529b\u91cd\u5fc3\u653e\u5728\u4e1a\u52a1\u4e0a\uff0c\u4ece\u800c\u52a0\u5feb\u4e86\u5f00\u53d1\u6548\u7387\u4e14\u964d\u4f4e\u4e86\u4ee3\u7801\u51fa\u9519\u7387\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/goctl/zrpc.md",sourceDirName:"goctl",slug:"/goctl/zrpc",permalink:"/cn/docs/goctl/zrpc",editUrl:"https://github.com/zeromicro/portal/edit/main/i18n/cn/docusaurus-plugin-content-docs/current/goctl/zrpc.md",version:"current",lastUpdatedAt:1651323237,formattedLastUpdatedAt:"4/30/2022",frontMatter:{},sidebar:"goctl",previous:{title:"API \u6307\u4ee4",permalink:"/cn/docs/goctl/api"},next:{title:"model \u6307\u4ee4",permalink:"/cn/docs/goctl/model"}},i=[{value:"\u7279\u6027",id:"\u7279\u6027",children:[]},{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",children:[{value:"\u65b9\u5f0f\u4e00\uff1a\u5feb\u901f\u751f\u6210greet\u670d\u52a1",id:"\u65b9\u5f0f\u4e00\u5feb\u901f\u751f\u6210greet\u670d\u52a1",children:[]},{value:"\u65b9\u5f0f\u4e8c\uff1a\u901a\u8fc7\u6307\u5b9aproto\u751f\u6210rpc\u670d\u52a1",id:"\u65b9\u5f0f\u4e8c\u901a\u8fc7\u6307\u5b9aproto\u751f\u6210rpc\u670d\u52a1",children:[]}]},{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",children:[]},{value:"\u7528\u6cd5",id:"\u7528\u6cd5",children:[{value:"rpc\u670d\u52a1\u751f\u6210\u7528\u6cd5",id:"rpc\u670d\u52a1\u751f\u6210\u7528\u6cd5",children:[]},{value:"\u5f00\u53d1\u4eba\u5458\u9700\u8981\u505a\u4ec0\u4e48",id:"\u5f00\u53d1\u4eba\u5458\u9700\u8981\u505a\u4ec0\u4e48",children:[]},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",children:[]}]},{value:"proto import",id:"proto-import",children:[{value:"\u9519\u8befimport",id:"\u9519\u8befimport",children:[]},{value:"\u6b63\u786eimport",id:"\u6b63\u786eimport",children:[]}]}],s={toc:i};function u(e){var t=e.components,r=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Goctl Rpc\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"goctl"),"\u811a\u624b\u67b6\u4e0b\u7684\u4e00\u4e2arpc\u670d\u52a1\u4ee3\u7801\u751f\u6210\u6a21\u5757\uff0c\u652f\u6301proto\u6a21\u677f\u751f\u6210\u548crpc\u670d\u52a1\u4ee3\u7801\u751f\u6210\uff0c\u901a\u8fc7\u6b64\u5de5\u5177\u751f\u6210\u4ee3\u7801\u4f60\u53ea\u9700\u8981\u5173\u6ce8\u4e1a\u52a1\u903b\u8f91\u7f16\u5199\u800c\u4e0d\u7528\u53bb\u7f16\u5199\u4e00\u4e9b\u91cd\u590d\u6027\u7684\u4ee3\u7801\u3002\u8fd9\u4f7f\u5f97\u6211\u4eec\u628a\u7cbe\u529b\u91cd\u5fc3\u653e\u5728\u4e1a\u52a1\u4e0a\uff0c\u4ece\u800c\u52a0\u5feb\u4e86\u5f00\u53d1\u6548\u7387\u4e14\u964d\u4f4e\u4e86\u4ee3\u7801\u51fa\u9519\u7387\u3002"),(0,a.kt)("h2",{id:"\u7279\u6027"},"\u7279\u6027"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7b80\u5355\u6613\u7528"),(0,a.kt)("li",{parentName:"ul"},"\u5feb\u901f\u63d0\u5347\u5f00\u53d1\u6548\u7387"),(0,a.kt)("li",{parentName:"ul"},"\u51fa\u9519\u7387\u4f4e"),(0,a.kt)("li",{parentName:"ul"},"\u8d34\u8fd1protoc")),(0,a.kt)("h2",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,a.kt)("h3",{id:"\u65b9\u5f0f\u4e00\u5feb\u901f\u751f\u6210greet\u670d\u52a1"},"\u65b9\u5f0f\u4e00\uff1a\u5feb\u901f\u751f\u6210greet\u670d\u52a1"),(0,a.kt)("p",null,"\u901a\u8fc7\u547d\u4ee4 ",(0,a.kt)("inlineCode",{parentName:"p"},"goctl rpc new ${servieName}"),"\u751f\u6210"),(0,a.kt)("p",null,"\u5982\u751f\u6210greet rpc\u670d\u52a1\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ goctl rpc new greet\n")),(0,a.kt)("p",null,"\u6267\u884c\u540e\u4ee3\u7801\u7ed3\u6784\u5982\u4e0b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd greet && tree\n.\n\u251c\u2500\u2500 etc\n\u2502\xa0\xa0 \u2514\u2500\u2500 greet.yaml\n\u251c\u2500\u2500 go.mod\n\u251c\u2500\u2500 go.sum\n\u251c\u2500\u2500 greet\n\u2502\xa0\xa0 \u251c\u2500\u2500 greet.go\n\u2502\xa0\xa0 \u251c\u2500\u2500 greet.pb.go\n\u2502\xa0\xa0 \u2514\u2500\u2500 greet_grpc.pb.go\n\u251c\u2500\u2500 greet.go\n\u251c\u2500\u2500 greet.proto\n\u2514\u2500\u2500 internal\n    \u251c\u2500\u2500 config\n    \u2502\xa0\xa0 \u2514\u2500\u2500 config.go\n    \u251c\u2500\u2500 logic\n    \u2502\xa0\xa0 \u2514\u2500\u2500 pinglogic.go\n    \u251c\u2500\u2500 server\n    \u2502\xa0\xa0 \u2514\u2500\u2500 greetserver.go\n    \u2514\u2500\u2500 svc\n        \u2514\u2500\u2500 servicecontext.go\n")),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u65b0\u7248\u672c\u76ee\u5f55\u8be6\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"../design/rpc-dir"},"rpc\u76ee\u5f55")))),(0,a.kt)("h3",{id:"\u65b9\u5f0f\u4e8c\u901a\u8fc7\u6307\u5b9aproto\u751f\u6210rpc\u670d\u52a1"},"\u65b9\u5f0f\u4e8c\uff1a\u901a\u8fc7\u6307\u5b9aproto\u751f\u6210rpc\u670d\u52a1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u751f\u6210proto\u6a21\u677f"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ goctl rpc template -o=user.proto\n")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\n\npackage user;\noption go_package="./user";\n\nmessage Request {\n  string ping = 1;\n}\n\nmessage Response {\n  string pong = 1;\n}\n\nservice User {\n  rpc Ping(Request) returns(Response);\n}\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u751f\u6210rpc\u670d\u52a1\u4ee3\u7801"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ goctl rpc protoc user.proto --go_out=. --go-grpc_out=. --zrpc_out=.\n")))),(0,a.kt)("h2",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b89\u88c5\u4e86go\u73af\u5883"),(0,a.kt)("li",{parentName:"ul"},"\u5b89\u88c5\u4e86protoc & protoc-gen-go\uff0c\u5e76\u4e14\u5df2\u7ecf\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf"),(0,a.kt)("li",{parentName:"ul"},"\u66f4\u591a\u95ee\u9898\u8bf7\u89c1 ",(0,a.kt)("a",{href:"#\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"))),(0,a.kt)("h2",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),(0,a.kt)("h3",{id:"rpc\u670d\u52a1\u751f\u6210\u7528\u6cd5"},"rpc\u670d\u52a1\u751f\u6210\u7528\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ goctl rpc protoc -h\nNAME:\n   goctl rpc protoc - generate grpc code\n\nUSAGE:\n   example: goctl rpc protoc xx.proto --go_out=./pb --go-grpc_out=./pb --zrpc_out=.\n\nDESCRIPTION:\n   for details, see https://go-zero.dev/cn/goctl-rpc.html\n\nOPTIONS:\n   --zrpc_out value  the zrpc output directory\n   --style value     the file naming format, see [https://github.com/zeromicro/go-zero/tree/master/tools/goctl/config/readme.md]\n   --home value      the goctl home path of the template\n   --remote value    the remote git repo of the template, --home and --remote cannot be set at the same time, if they are, --remote has higher priority\n                     The git repo directory must be consistent with the https://github.com/zeromicro/go-zero-template directory structure\n   --branch value    the branch of the remote repo, it does work with --remote\n   --verbose, -v     enable log output\n")),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u7406\u89e3\u4e3a zrpc \u4ee3\u7801\u751f\u6210\u662f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"goctl rpc $protoc_command --zrpc_out=${output}")," \u6a21\u677f\uff0c\u5982\u539f\u6765\u751f\u6210 grpc \u4ee3\u7801\u6307\u4ee4\u4e3a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ protoc user.proto --go_out=. --go-grpc_out=.\n")),(0,a.kt)("p",null,"\u5219\u751f\u6210 zrpc \u4ee3\u7801\u6307\u4ee4\u5c31\u4e3a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ goctl rpc protoc user.proto --go_out=. --go-grpc_out=. --zrpc_out=.\n")),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol"},"--go_out \u4e0e --go-grpc_out \u751f\u6210\u7684\u6700\u7ec8\u76ee\u5f55\u5fc5\u987b\u4e00\u81f4"),(0,a.kt)("li",{parentName:"ol"},"--go_out & --go-grpc_out \u548c --zrpc_out \u7684\u751f\u6210\u7684\u6700\u7ec8\u76ee\u5f55\u5fc5\u987b\u4e0d\u4e3a\u540c\u4e00\u76ee\u5f55\uff0c\u5426\u5219pb.go\u548c_grpc.pb.go\u5c31\u4e0emain\u51fd\u6570\u540c\u7ea7\u4e86\uff0c\u8fd9\u662f\u4e0d\u5141\u8bb8\u7684\u3002\n--go_out \u4e0e --go-grpc_out \u751f\u4ea7\u7684\u76ee\u5f55\u4f1a\u53d7 --go_opt \u548c --grpc-go_opt \u548cproto\u6e90\u6587\u4ef6\u4e2d go_package\u503c\u7684\u5f71\u54cd\uff0c\u8981\u60f3\u7406\u89e3\u8fd9\u91cc\u7684\u751f\u6210\u903b\u8f91\uff0c\u5efa\u8bae\u9605\u8bfb\n\u5b98\u65b9\u6587\u6587\u6863\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://developers.google.com/protocol-buffers/docs/reference/go-generated"},"Go Generated Code"))))),(0,a.kt)("h3",{id:"\u5f00\u53d1\u4eba\u5458\u9700\u8981\u505a\u4ec0\u4e48"},"\u5f00\u53d1\u4eba\u5458\u9700\u8981\u505a\u4ec0\u4e48"),(0,a.kt)("p",null,"\u5173\u6ce8\u4e1a\u52a1\u4ee3\u7801\u7f16\u5199\uff0c\u5c06\u91cd\u590d\u6027\u3001\u4e0e\u4e1a\u52a1\u65e0\u5173\u7684\u5de5\u4f5c\u4ea4\u7ed9goctl\uff0c\u751f\u6210\u597drpc\u670d\u52a1\u4ee3\u7801\u540e\uff0c\u5f00\u53d1\u4eba\u5458\u4ec5\u9700\u8981\u4fee\u6539"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u670d\u52a1\u4e2d\u7684\u914d\u7f6e\u6587\u4ef6\u7f16\u5199(etc/xx.json\u3001internal/config/config.go)"),(0,a.kt)("li",{parentName:"ul"},"\u670d\u52a1\u4e2d\u4e1a\u52a1\u903b\u8f91\u7f16\u5199(internal/logic/xxlogic.go)"),(0,a.kt)("li",{parentName:"ul"},"\u670d\u52a1\u4e2d\u8d44\u6e90\u4e0a\u4e0b\u6587\u7684\u7f16\u5199(internal/svc/servicecontext.go)")),(0,a.kt)("h3",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"proto\u6682\u4e0d\u652f\u6301\u591a\u6587\u4ef6\u540c\u65f6\u751f\u6210")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"proto\u4e0d\u652f\u6301\u5916\u90e8\u4f9d\u8d56\u5305\u5f15\u5165\uff0cmessage\u4e0d\u652f\u6301inline")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u76ee\u524dmain\u6587\u4ef6\u3001shared\u6587\u4ef6\u3001handler\u6587\u4ef6\u4f1a\u88ab\u5f3a\u5236\u8986\u76d6\uff0c\u800c\u548c\u5f00\u53d1\u4eba\u5458\u624b\u52a8\u9700\u8981\u7f16\u5199\u7684\u5219\u4e0d\u4f1a\u8986\u76d6\u751f\u6210\uff0c\u8fd9\u4e00\u7c7b\u5728\u4ee3\u7801\u5934\u90e8\u5747\u6709"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"// Code generated by goctl. DO NOT EDIT!\n// Source: xxx.proto\n")),(0,a.kt)("p",{parentName:"li"},"\u7684\u6807\u8bc6\uff0c\u8bf7\u6ce8\u610f\u4e0d\u8981\u5728\u91cc\u9762\u5199\u4e1a\u52a1\u6027\u4ee3\u7801;\u4e5f\u4e0d\u8981\u5c06\u5b83\u5199\u5728\u4e1a\u52a1\u6027\u4ee3\u7801\u91cc\u9762\u3002"))),(0,a.kt)("h2",{id:"proto-import"},"proto import"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u4e8erpc\u4e2d\u7684requestType\u548creturnType\u5fc5\u987b\u5728main proto\u6587\u4ef6\u5b9a\u4e49\uff0c\u5bf9\u4e8eproto\u4e2d\u7684message\u53ef\u4ee5\u50cfprotoc\u4e00\u6837import\u5176\u4ed6proto\u6587\u4ef6\u3002")),(0,a.kt)("p",null,"proto\u793a\u4f8b:"),(0,a.kt)("h3",{id:"\u9519\u8befimport"},"\u9519\u8befimport"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\n\npackage greet;\n\noption go_package = "./greet";\n\nimport "base/common.proto";\n\nmessage Request {\n  string ping = 1;\n}\n\nmessage Response {\n  string pong = 1;\n}\n\nservice Greet {\n  rpc Ping(base.In) returns(base.Out);// request\u548creturn \u4e0d\u652f\u6301import\n}\n\n')),(0,a.kt)("h3",{id:"\u6b63\u786eimport"},"\u6b63\u786eimport"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\n\npackage greet;\n\noption go_package =  "./greet";\n\nimport "base/common.proto";\n\nmessage Request {\n  base.In in = 1;// \u652f\u6301import\n}\n\nmessage Response {\n base.Out out = 2;// \u652f\u6301import\n}\n\nservice Greet {\n  rpc Ping(Request) returns(Response);\n}\n')))}u.isMDXComponent=!0}}]);