(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[8592],{895:function(e,t,n){"use strict";n.d(t,{H6:function(){return d},Hk:function(){return m},Iz:function(){return f},_k:function(){return i},dK:function(){return c},qo:function(){return u},rx:function(){return s},vc:function(){return o.a}});var r=n(1336),a=n.n(r),l=n(813),o=n.n(l);n(892)(a()),n(4212).w(a()),n(4182)(a());var c=["en","zh"],i=!1,s="958c2e8d",u=8,m=50,d=!1,f={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},9685:function(e){e.exports={githubOrgUrl:"https://github.com/zeromicro",domain:"go-zero.dev",baseUrl:"/",organizationName:"zeromicro",projectName:"portal",discord:"discord",getImageUrl:function(e){switch(e){case"\u5fae\u4fe1\u7fa4":return"https://raw.githubusercontent.com/zeromicro/zero-doc/main/doc/images/wechat.jpg";case"discord":return"/img/footer/discord.png";default:return""}}}},769:function(e,t,n){var r=n(9685);e.exports={copyright:"Copyright \xa9 "+(new Date).getFullYear()+" zeromicro",demoUrl:"/docs/introduction",title:"go-zero",description:"go-zero \u662f\u4e00\u4e2a\u96c6\u6210\u4e86\u5404\u79cd\u5de5\u7a0b\u5b9e\u8df5\u7684 web \u548c rpc \u6846\u67b6\u3002\u901a\u8fc7\u5f39\u6027\u8bbe\u8ba1\u4fdd\u969c\u4e86\u5927\u5e76\u53d1\u670d\u52a1\u7aef\u7684\u7a33\u5b9a\u6027\uff0c\u7ecf\u53d7\u4e86\u5145\u5206\u7684\u5b9e\u6218\u68c0\u9a8c\u3002",oldDocUrl:"https://legacy.go-zero.dev",githubOrgUrl:r.githubOrgUrl,githubUrl:r.githubOrgUrl+"/go-zero",zeroApiUrl:r.githubOrgUrl+"/zero-api",goQueueUrl:r.githubOrgUrl+"/go-queue",awesomeZeroUrl:r.githubOrgUrl+"/awesome-zero",zeroExamplesUrl:r.githubOrgUrl+"/zero-examples",oneLiner:"",discordUrl:"https://discord.gg/4JQvC5A4Fe",videosUrl:"https://space.bilibili.com/389552232/channel/seriesdetail?sid=2122723",cncfUrl:"https://landscape.cncf.io/?selected=go-zero",roadMapUrl:"https://github.com/zeromicro/go-zero/blob/master/ROADMAP.md"}},5789:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(7462),a=n(6010),l=n(7294),o="button_f7Ff",c="button--plain_WPGr",i="button--primary_--SO",s="button--icon_q89D",u="button--secondary_x3vq",m="button--tertiary_vtfp",d="button--small_1ubn",f="button--xsmall_fwzy",g="button--xxsmall_FHEV",_="button--uppercase_ESEN",h=function(e){var t,n=e.children,h=e.className,v=e.href,p=e.icon,b=e.newTab,E=e.onClick,N=e.size,w=e.to,Z=e.type,k=e.uppercase,z=e.variant,y=(0,a.Z)(h,o,((t={})[s]=null!=p,t[i]="primary"===z,t[u]="secondary"===z,t[d]="small"===N,t[m]="tertiary"===z,t[c]="plain"===z,t[_]=k,t[f]="xsmall"===N,t[g]="xxsmall"===N,t));return null!=v?l.createElement("a",(0,r.Z)({className:y,href:v,onClick:E},b?{rel:"noopener noreferrer",target:"_blank"}:{}),p,n):null!=w?l.createElement("a",{className:y,href:w,onClick:E},p,n):l.createElement("button",{className:y,onClick:E,type:null!=Z?Z:"button"},p,n)};h.defaultProps={newTab:!0,size:"normal",uppercase:!0,variant:"primary"};var v=h},9042:function(e,t,n){"use strict";n.d(t,{Z:function(){return Ie}});var r=n(6010),a=n(7294),l=n(9105),o=n(2263),c=n(4996),i=n(7462),s=n(3366),u=n(769),m=n.n(u),d=n(9685),f=n(5789),g={altFooter:!1,isBlogPost:!1},_=(0,a.createContext)(g),h=function(e){var t=e.children,n=e.value;return a.createElement(_.Provider,{value:null!=n?n:g},t)},v=function(){return(0,a.useContext)(_)},p=n(9178),b="footer_rm3y",E="footer--alt_BPBa",N="footer__inner_OWoZ",w="footer__column_+a5z",Z="footer__column--left_4bpB",k="footer__column--right_FGdI",z="footer__logo_ayM4",y="footer__tagline_b1u+",C="footer__github_okz3",I="footer__links_5pu0",x="footer__title_ulcL",D="footer__link_l-+N",U="footer__img_4fbU",B="footer__bottom_rXtt",M="footer__items_3d9P",L="footer__item_K578",A="footer__copyright_9e29",S=n(4973),P=n(1417),V=(n(7435),["to","href","label"]),F=function(e){var t=e.to,n=e.href,l=e.label,o=(0,s.Z)(e,V),u=(0,c.Z)(null!=n?n:"",{forcePrependBaseUrl:void 0}),m=(0,c.Z)(null!=t?t:""),f="",g="";if("image//:"===n){if(""===(f=(0,d.getImageUrl)(l)))return a.createElement("span",null)}else if("image//:"===t&&""===(g=(0,d.getImageUrl)(l)))return a.createElement("span",null);return"-"===l?a.createElement("span",null):""!==g?a.createElement(P.Z,{overlayBgColorEnd:"rgba(0, 0, 0, 0.3)",zoomMargin:150},a.createElement("img",{alt:l,width:80,src:g,className:(0,r.Z)(U)})):""!==f?a.createElement(P.Z,{overlayBgColorEnd:"rgba(0, 0, 0, 0.3)",zoomMargin:150},a.createElement("img",{alt:l,width:80,src:f,className:(0,r.Z)(U)})):a.createElement("a",(0,i.Z)({className:D},null!=n?{href:u,rel:"noopener noreferrer",target:"_blank"}:{href:m},o),l)},T=function(){var e,t=(0,o.default)().siteConfig,n=v(),l=t.themeConfig.footer.links;return a.createElement("footer",{className:(0,r.Z)(b,p.Z.section,(e={},e[E]=n.altFooter,e))},a.createElement("div",{className:(0,r.Z)(N,p.Z["section--inner"])},a.createElement("div",{className:(0,r.Z)(w,Z)},a.createElement("div",null,a.createElement("img",{alt:"go-zero logo",className:z,height:27,src:(0,c.Z)("/img/footer/go-zero.svg"),title:"go-zero",width:108}),a.createElement("img",{alt:"stars",height:27,src:"https://img.shields.io/github/stars/zeromicro/go-zero?style=social",className:z}),a.createElement("img",{alt:"forks",height:27,src:"https://img.shields.io/github/forks/zeromicro/go-zero?style=social",className:z})),a.createElement("p",{className:y},a.createElement(S.Z,null,"go-zero is a web and rpc framework that with lots of engineering practices builtin")),a.createElement(f.Z,{className:C,href:m().githubUrl,icon:a.createElement("img",{alt:"GitHub logo",height:22,src:(0,c.Z)("/img/github.svg"),title:"GitHub",width:22}),size:"xsmall",uppercase:!1,variant:"secondary"},"Star us on GitHub")),a.createElement("div",{className:(0,r.Z)(w,k)},l.map((function(e,t){var n;return a.createElement("div",{key:t,className:I},a.createElement("ul",{className:M},null!=e.title&&a.createElement("li",{className:x},e.title),null==(n=e.items)?void 0:n.map((function(e){var t;return a.createElement("li",{className:L,key:null!=(t=e.href)?t:e.to},a.createElement(F,e))}))))})))),a.createElement("div",{className:B},a.createElement("p",{className:A},m().copyright,a.createElement("ul",null,a.createElement("li",{className:L},a.createElement("a",{className:D,href:"https://github.com/zeromicro/portal/blob/main/LICENSE"},"License"))))))},O=n(7557),H=n(6700),R={toggle:"toggle_1y7K"},q=function(e){e.icon;var t=e.style;return a.createElement("span",{className:(0,r.Z)(R.toggle,R.dark),style:t},a.createElement("svg",{t:"1651718448922",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2080",width:"200",height:"200"},a.createElement("path",{d:"M439.04383639 224.33271976a289.43717504 289.43717504 0 0 0-89.06329676 39.44690807c-27.5075319 18.12412161-51.158867 39.64960558-70.96389486 64.57645191-19.79019562 24.92684633-35.31880082 53.25011237-46.62042137 84.97474006C221.10449032 445.05050411 215.45368042 478.01109252 215.45368042 512c0 40.16870887 7.81621301 78.48347702 23.45358166 115.04318192 15.64725682 36.67341315 36.77228986 68.19039996 63.2910532 94.76354538 26.53359488 26.56820206 58.11485196 47.57952611 94.69927585 63.23667111 36.59431134 15.65714501 75.00301286 23.48324474 115.16183354 23.48324475 33.97407594 0 66.85061917-5.56182137 98.62468557-16.89310498 31.76417894-11.32633953 60.10227581-26.77584294 85.01429133-46.65502781 24.87740834-19.77536407 46.43255539-43.46625042 64.57150781-70.96389488a290.15403174 290.15403174 0 0 0 39.43701989-88.98913905c-8.3056532 0.72180079-17.71378249 1.13213991-28.0958481 1.1321392-45.21637032 0-88.35138342-8.85936294-129.45942212-26.46932463-41.1327577-17.71872658-76.62459295-41.50848964-106.44089858-71.27535655C505.84007277 458.54719011 482.10963587 423.01086095 464.42057238 381.91765379 446.7562286 340.81455917 437.94135957 297.65977044 437.94135957 252.4483442c0-10.40184195 0.39550758-19.77536407 1.15685891-28.01674772l-0.049438-0.09887672zM512.02976157 141.21192041c8.32542811 0 16.51242896 0.31146168 24.6054972 0.92944167-16.4036648 35.32374419-24.60549719 72.09603405-24.60549719 110.30698212 0 35.12104668 6.84227598 68.69961578 20.58121076 100.83458258 13.70927096 32.03114601 32.15474243 59.63261126 55.35124448 82.80933769 23.16683898 23.17178306 50.76830423 41.60736635 82.82416923 55.30674985 32.02125855 13.69938351 65.654209 20.60098567 100.78514387 20.60098568 38.23072298 0 75.03267594-8.24138293 110.35147675-24.62032874 0.59326099 8.14250622 0.86517214 16.28006837 0.86517213 24.62032874 0 33.57856837-4.43956893 66.43533597-13.29893256 98.46648269-8.90880166 32.03114601-21.28817928 61.69419283-37.24195443 88.78149743-15.92411206 27.19112615-35.31880082 52.11797247-58.09013296 74.87941716-22.77627549 22.76144395-47.74267309 42.12152555-74.87447306 58.09013223-27.15157487 15.96366261-56.75529553 28.32326532-88.78644152 37.28644905A368.16784419 368.16784419 0 0 1 512.00009921 882.78807959a368.20739474 368.20739474 0 0 1-98.48625832-13.28904439c-32.03609009-8.95824037-61.6249792-21.31784236-88.79138561-37.28150569-27.12685589-15.96860669-52.08336529-35.32868827-74.89919206-58.09013223-22.7515565-22.76144395-42.13635709-47.68829101-58.05058169-74.87941715-15.96366261-27.0922487-28.34304097-56.75529553-37.2518426-88.78149744A367.9354836 367.9354836 0 0 1 141.21201889 512c0-33.57856837 4.4494571-66.43533597 13.30882004-98.46648269 8.90880166-32.03114601 21.28817928-61.69419283 37.25184259-88.78149744 15.91916798-27.19112615 35.29902519-52.11797247 58.0505817-74.87941715 22.81582676-22.86526476 47.77233617-42.22534634 74.89919206-58.09013223C351.89380578 175.81880789 381.4826949 163.36032846 413.51878498 154.50096479A368.20739474 368.20739474 0 0 1 512.00009921 141.21192041h0.02966236z","p-id":"2081",fill:"#ffffff"})))},j=function(e){e.icon;var t=e.style;return a.createElement("span",{className:(0,r.Z)(R.toggle,R.light),style:t},a.createElement("svg",{className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1940",width:"25",height:"25"},a.createElement("path",{d:"M752.41931153 240.7063601c8.36993432 0 15.62255883 3.08990502 21.72821045 9.16589356 6.1353147 6.08093262 9.18566918 13.3928833 9.18566918 21.73315382 0 8.55285621-3.05035376 15.85986352-9.18566918 21.94079614l-43.67394996 43.66900658c-5.93261719 5.97216773-13.17041016 8.95825195-21.72326709 8.95825195-8.87420678 0-16.20098901-2.98608422-22.08911085-8.75061035-5.88317847-5.87329102-8.80004906-13.2890625-8.80004906-22.14843774 0-8.54791283 2.95642114-15.75604272 8.91375732-21.72821044l43.66900659-43.67394996c6.14025879-6.07598853 13.44726539-9.16589356 21.98034668-9.16589356z m37.66223167 240.39459181h61.79809547c8.52813721 0 15.82031227 2.98608422 21.83697534 9.06207276C879.78271508 496.24395728 882.78857422 503.45208717 882.78857422 512c0 8.55285621-3.00585914 15.85986352-9.07196021 21.83697533-6.01666236 6.07598853-13.30883813 9.06207276-21.83697534 9.06207276h-61.79809547c-8.52813721 0-15.80053734-2.98608422-21.86663841-9.06207276-6.01666236-5.97711182-9.05712867-13.2890625-9.05712867-21.83697533 0-8.55285621 3.04046631-15.76098609 9.05712867-21.83697533 6.06610107-6.07598853 13.33850122-9.06207276 21.86663841-9.06207276zM512 141.21142578c8.52813721 0 15.79064917 3.08990502 21.85180688 9.06207276 6.02160645 6.08093262 9.05712867 13.3928833 9.05712867 21.83697533v61.79809546c0 8.55285621-3.03552222 15.85986352-9.0521853 21.83697534-6.06610107 6.07598853-13.32861305 9.16589356-21.85675025 9.16589355-8.53802467 0-15.80053734-3.08990502-21.86663842-9.16589355-6.01666236-5.97711182-9.0521853-13.2890625-9.05218458-21.83697534V172.11047387c0-8.44409203 3.03552222-15.76098609 9.05218458-21.83697533C496.20440674 144.3013308 503.46691871 141.21142578 512.00494408 141.21142578zM271.81304907 240.7063601c8.36499023 0 15.61267066 3.08990502 21.743042 9.16589356l43.66900659 43.67394996c6.14025879 6.07598853 9.17083764 13.38793922 9.17083764 21.72821044 0 8.55285621-3.01080323 15.86480689-9.05712938 21.83697534-6.03149391 6.08093262-13.30389404 9.06207276-21.85180617 9.06207275-8.69622827 0-16.02795386-2.98608422-21.95068359-8.85443115l-43.68383814-43.67395068c-5.97216773-5.97216773-8.92858886-13.28411842-8.92858886-22.03967284 0-8.55285621 3.00585914-15.76098609 9.07196021-21.83697462 6.01666236-5.97216773 13.30883813-9.06207276 21.85675096-9.06207276h-0.03955126z m436.93725586 436.91253615c8.36499023 0 15.60772729 2.98608422 21.72326709 9.16589355l43.67394995 43.67395067c6.1353147 6.17980933 9.18566918 13.38793922 9.18566919 21.93585205 0 8.34521461-3.05035376 15.65716529-9.18566919 21.73315382-6.1105957 6.17980933-13.35827613 9.16589356-21.72326636 9.16589356-8.52813721 0-15.84008789-2.98608422-21.98034668-9.16589356l-43.66900659-43.66900587c-5.95733618-5.87329102-8.91375732-13.1852417-8.91375732-21.73315453 0-8.55285621 3.01080323-15.86480689 9.05712866-21.94079614 6.03149391-6.07598853 13.32861305-9.16589356 21.85180689-9.16589355h-0.01977564zM512.00494408 388.40380836c-34.12243628 0-63.22192359 12.05310035-87.39239525 36.2532351-24.1358645 24.10125732-36.21368384 53.25018335-36.21368384 87.34295654 0 34.0927732 12.07782007 63.24169922 36.21368384 87.44677734C448.78796387 623.53814721 477.88250709 635.59619164 512 635.59619164c34.12243628 0 63.23181176-12.05310035 87.4072268-36.15435838C623.51837158 575.2466433 635.59619164 546.09771729 635.59619164 512c0-34.0927732-12.07782007-63.24169922-36.18896484-87.34295654C575.23181176 400.45690942 546.12243628 388.40380836 512 388.40380836zM172.12036133 481.10095191h61.79809547c8.53802467 0 15.80053734 2.98608422 21.86663841 9.06207276 6.01666236 6.08093262 9.05712867 13.2890625 9.05712867 21.83697533 0 8.55285621-3.04046631 15.85986352-9.05712867 21.83697533-6.06610107 6.07598853-13.32861305 9.06207276-21.86663841 9.06207276h-61.79809547c-8.52813721 0-15.81042481-2.98608422-21.83697534-9.06207276C144.21728492 527.85986352 141.21142578 520.54791283 141.21142578 512c0-8.55285621 3.00585914-15.76098609 9.07196021-21.83697533 6.03149391-6.07598853 13.30883813-9.06207276 21.83697534-9.06207276zM512.00494408 759.19238258c8.52813721 0 15.79064917 2.98608422 21.85180617 9.06207274 6.02160645 6.08093262 9.05712867 13.2890625 9.05712938 21.83697535v61.79809546c0 8.55285621-3.03552222 15.85986352-9.0521853 21.83697533C527.79559326 879.80249 520.53308129 882.78857422 512 882.78857422c-8.53802467 0-15.80053734-2.98608422-21.86663842-9.06207276-6.01666236-5.97711182-9.0521853-13.2890625-9.05218458-21.83697533v-61.79809546c0-8.55285621 3.03552222-15.76098609 9.05218458-21.83697534 6.06610107-6.07598853 13.32861305-9.06207276 21.86663842-9.06207275z m-196.47839379-81.57348633c8.5034182 0 15.80053734 2.98608422 21.84686279 9.16589355 6.03149391 6.08093262 9.07196021 13.3928833 9.07196021 21.94079614 0 8.44409203-3.08001685 15.65222192-9.19555664 21.72821044l-43.67394995 43.67394996c-6.10565162 6.17980933-13.34838867 9.16589356-21.72326637 9.16589356-8.54791283 0-15.84008789-2.98608422-21.85180687-8.96319533-6.07104516-6.07598853-9.0769043-13.38793922-9.0769043-21.93585205 0-8.65173364 2.95642114-15.96862769 8.92858887-21.94079614l43.68383813-43.66900658c6.10565162-6.17980933 13.44232202-9.16589356 21.95068359-9.16589355h0.03955054zM512 326.60571289c33.628052 0 64.6506958 8.34521461 93.0481565 24.81811547 28.42712378 16.69042992 50.92163109 39.1404419 67.4637456 67.56756568 16.57177758 28.32824708 24.86755347 59.32617188 24.86755347 93.00860596 0 33.68243408-8.27600098 64.68035888-24.86755347 93.10748267-16.58166504 28.32824708-39.08605981 50.77825904-67.4637456 67.4637456-28.36285424 16.58166504-59.37561059 24.82305884-93.0481565 24.82305884-33.66760254 0-64.67047143-8.24139381-93.05804468-24.81811547-28.37768578-16.69042992-50.86230492-39.14538598-67.46374487-67.46868897-16.58166504-28.42712378-24.86755347-59.42504859-24.86755348-93.10748267 0-33.68243408 8.31555152-64.68035888 24.86755348-93.00860596 16.55200195-28.42712378 39.03662109-50.87713647 67.46374487-67.56262231C447.35424828 334.94598413 478.371948 326.60571289 512 326.60571289z","p-id":"1941"})))},G=(0,a.memo)((function(e){var t=e.className,n=e.icons,l=e.checked,o=e.disabled,c=e.onChange,i=(0,a.useState)(l),s=i[0],u=i[1],m=(0,a.useState)(!1),d=m[0],f=m[1],g=(0,a.useRef)(null);return a.createElement("div",{className:(0,r.Z)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":d,"react-toggle--disabled":o}),role:"button",tabIndex:-1,onClick:function(e){var t=g.current;if(t)return e.target!==t?(e.preventDefault(),t.focus(),void t.click()):void u(null==t?void 0:t.checked)}},a.createElement("div",{className:"react-toggle-track"},a.createElement("div",{className:"react-toggle-track-check"},n.checked),a.createElement("div",{className:"react-toggle-track-x"},n.unchecked)),a.createElement("div",{className:"react-toggle-thumb"}),a.createElement("input",{ref:g,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:c,onFocus:function(){return f(!0)},onBlur:function(){return f(!1)}}))}));function W(e){var t=(0,H.LU)().colorMode.switchConfig,n=t.darkIcon,r=t.darkIconStyle,l=t.lightIcon,c=t.lightIconStyle,s=(0,o.default)().isClient;return a.createElement(G,(0,i.Z)({disabled:!s,icons:{checked:a.createElement(q,{icon:n,style:r}),unchecked:a.createElement(j,{icon:l,style:c})}},e))}var K=n(1839),J=n(3783),Q="star_fork_layout_ROo5",X="star__fork_dBtt",Y="brand_AtiA",$="brand_logo_MqNk",ee="brand_name_O39n",te="inner_Y8Z6",ne="navbar_wBc8",re="themeToggleInSidebar_qGRI",ae="themeToggleInHeading_b3Mq",le=n(8219),oe=["width","height"],ce=function(e){var t=e.width,n=void 0===t?24:t,r=e.height,l=void 0===r?24:r,o=(0,s.Z)(e,oe);return a.createElement("svg",(0,i.Z)({t:"1651714104711",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"8547",width:n,height:l},o),a.createElement("path",{d:"M0 0h1024v1024H0z",fill:"#FFFFFF","p-id":"8548"}),a.createElement("path",{d:"M785.09056 297.86112l-0.01024-176.40448-253.61408 87.18336 253.62432 89.22112zM499.3024 197.64224L232.58112 102.4v184.1664l266.72128-88.92416zM334.1824 337.37728l44.46208-12.70784v53.97504l95.26272-34.9184v171.4688l-38.11328 12.6976v-25.38496l-63.50848 25.38496 0.27648 95.41632-38.37952 12.55424-0.28672-94.44352-63.21152 24.576 0.01024 19.05664-38.12352 12.6976 0.01024-171.45856 101.60128-31.75424v-57.15968z m101.61152 60.33408l-57.14944 22.2208v63.50848l57.14944-19.05664v-66.67264zM270.68416 521.54368l63.50848-22.23104-0.01024-66.67264-63.49824 22.2208v66.68288z m247.67488-308.40832l-342.9376 117.88288v469.9648l342.9376-114.3296V213.13536z m9.55392 489.41056c-123.38176 41.30816-248.24832 82.5344-371.54816 123.83232l-0.01024-508.0576L804.1472 102.4v202.16832l63.50848 20.10112-0.01024 489.0112-339.73248-111.13472z m266.6496-20.1728c-14.92992-53.98528-29.9008-108.19584-44.9024-162.54976-15.0528-54.49728-30.11584-109.24032-45.2608-164.15744-16.22016-6.28736-32.48128-12.60544-48.81408-18.944-14.85824 43.61216-29.76768 87.36768-44.6976 131.21536l-45.056 132.28032c16.57856 5.96992 33.16736 11.9296 49.68448 17.85856 6.4-20.1728 12.8-40.36608 19.18976-60.54912 30.49472 11.1616 60.9792 22.3232 91.46368 33.47456 6.5024 24.65792 12.99456 49.28512 19.51744 73.8304 16.32256 5.86752 32.63488 11.70432 48.87552 17.54112zM711.30112 535.8592c-10.5472-40.2944-21.10464-80.59904-31.58016-120.90368-10.31168 32.5632-20.60288 65.14688-30.90432 97.73056 20.8384 7.71072 41.65632 15.45216 62.48448 23.17312z m-30.53568 312.10496c-121.21088 75.776-241.60256 85.18656-365.38368 6.51264l-6.62528 10.35264c118.45632 75.264 236.3392 74.07616 357.65248 6.01088 7.10656-4.03456 14.08-8.192 20.992-12.51328L701.44 880.25088l31.87712-58.5728-66.53952 4.42368 13.98784 21.8624z","p-id":"8549"}))},ie=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function se(e){var t=e.mobile,n=e.dropdownItemsBefore,r=e.dropdownItemsAfter,l=(0,s.Z)(e,ie),c=(0,o.default)().i18n,u=c.currentLocale,m=c.locales,d=c.localeConfigs,f=(0,H.l5)();function g(e){return d[e].label}var _=m.map((function(e){var t="pathname://"+f.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:g(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===u?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),h=[].concat(n,_,r),v=t?"Languages":g(u);return a.createElement(le.Z,(0,i.Z)({},l,{href:"#",mobile:t,label:a.createElement("span",null,a.createElement(ce,{style:{verticalAlign:"text-bottom",marginRight:5}}),a.createElement("span",null,v)),items:h}))}var ue=n(5865),me="searchWrapper_glLF";function de(e){return e.mobile?null:a.createElement("div",{className:me},a.createElement(ue.Z,null))}var fe=["type"],ge={default:function(){return le.Z},localeDropdown:function(){return se},search:function(){return de},docsVersion:function(){return n(1555).Z},docsVersionDropdown:function(){return n(5391).Z},doc:function(){return n(8729).Z}};function _e(e){var t=e.type,n=(0,s.Z)(e,fe),r=function(e){void 0===e&&(e="default");var t=ge[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t()}(t);return a.createElement(r,n)}var he=n(5350);function ve(e,t){var n;return(null!=(n=t.position)?n:"right")===e&&"localeDropdown"!==t.type}var pe=function(){var e=(0,o.default)().siteConfig.themeConfig.navbar.items,t=(0,a.useState)(!1),n=t[0],l=t[1];(0,K.Z)(n);var s,u,m,d,f,g=(0,a.useCallback)((function(){l(!0)}),[]),_=(0,a.useCallback)((function(){l(!1)}),[]),h=(0,J.Z)(),v=(s=(0,H.LU)().colorMode.disableSwitch,u=(0,he.Z)(),m=u.isDarkTheme,d=u.setLightTheme,f=u.setDarkTheme,{isDarkTheme:m,toggle:(0,a.useCallback)((function(e){return e.target.checked?f():d()}),[d,f]),disabled:s});(0,a.useEffect)((function(){h===J.D.desktop&&l(!1)}),[h]);var p=function(e){return{leftItems:e.filter((function(e){return ve("left",e)})),rightItems:e.filter((function(e){return ve("right",e)})),localItems:e.filter((function(e){var t;return"localeDropdown"===(null!=(t=e.type)?t:"none")}))}}(e),b=p.leftItems,E=p.rightItems,N=p.localItems;return a.createElement("nav",{className:(0,r.Z)("navbar",ne,"navbar--light","navbar--fixed-top",{"navbar-sidebar--show":n})},a.createElement("div",{className:(0,r.Z)("navbar__inner",te)},a.createElement("div",{className:"navbar__items"},a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:g,onKeyDown:g},a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),a.createElement("a",{className:Y,href:(0,c.Z)("/")},a.createElement("img",{alt:"logo",height:30,src:(0,c.Z)("img/navbar/logo.svg"),className:(0,r.Z)($)}),a.createElement("a",{className:(0,r.Z)("navbar__brand",ee)},"go-zero")),b.map((function(e,t){return a.createElement(_e,(0,i.Z)({},e,{key:t}))}))),a.createElement("div",{className:"navbar__items navbar__items--right"},E.map((function(e,t){return a.createElement(_e,(0,i.Z)({},e,{key:t}))})),N.map((function(e,t){return a.createElement(_e,(0,i.Z)({type:!0},e,{key:t}))})),a.createElement("a",{href:"https://github.com/zeromicro/go-zero",className:"navbar__items navbar__items--right"},a.createElement("img",{alt:"forks",height:30,src:(0,c.Z)("img/navbar/github.svg"),className:X}),a.createElement("div",{className:Q},a.createElement("img",{alt:"stars",height:20,src:"https://img.shields.io/github/stars/zeromicro/go-zero?style=social",className:X}),a.createElement("img",{alt:"forks",height:20,src:"https://img.shields.io/github/forks/zeromicro/go-zero?style=social",className:X}))),!v.disabled&&a.createElement(W,{className:ae,checked:v.isDarkTheme,onChange:v.toggle}))),a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:_}),a.createElement("div",{className:"navbar-sidebar"},a.createElement("div",{className:"navbar-sidebar__brand"},a.createElement("a",{className:(0,r.Z)("navbar__brand",Y),href:(0,c.Z)("/"),onClick:_},"go-zero"),!v.disabled&&a.createElement(W,{className:re,checked:v.isDarkTheme,onChange:v.toggle})),a.createElement("div",{className:"navbar-sidebar__items"},a.createElement("div",{className:"menu"},a.createElement("ul",{className:"menu__list"},e.map((function(e,t){return a.createElement(_e,(0,i.Z)({mobile:!0},e,"search"!==e.type&&{onClick:_},{key:t}))})))))))},be="wrapper_DIJ0",Ee="flex_Tu1-",Ne=n(944),we="announcement_VlTZ",Ze="announcement__close_MS8Q",ke="announcement__content_9bnM",ze="announcement__link_Xto+",ye=function(){var e=(0,Ne.Z)(),t=e.isAnnouncementBarClosed,n=e.closeAnnouncementBar;return t?null:a.createElement("div",{className:we,role:"banner"},a.createElement("p",{className:ke},a.createElement(S.Z,null,"Welcome to the latest document of go-zero, click"),a.createElement("a",{className:ze,href:m().oldDocUrl,rel:"noopener noreferrer",target:"_blank"},a.createElement(S.Z,null,"https://legacy.go-zero.dev")),a.createElement(S.Z,null,"to visit the old document!")),a.createElement("button",{"aria-label":"Close",className:Ze,onClick:n,type:"button"},a.createElement("span",{"aria-hidden":"true"},"\xd7")))},Ce=function(e){var t,n=e.altFooter,i=e.canonical,s=e.children,u=e.description,m=e.flex,d=e.image,f=e.keywords,g=e.noFooter,_=e.permalink,v=e.title,p=e.replaceTitle,b=void 0!==p&&p,E=e.wrapperClassName,N=(0,o.default)().siteConfig,w=N.title,Z=N.themeConfig.image,k=N.url,z=b?v:null!=v?v+" | "+w:w,y=null!=d?d:Z,C=(0,c.Z)(y,{absolute:!0}),I=null==(null==u?void 0:u.match(/^Blog/g))&&"blog-wrapper"===E;return a.createElement(h,{value:{altFooter:n,isBlogPost:I}},a.createElement(O.Z,null,a.createElement(l.Z,null,a.createElement("title",null,z),null!=_&&a.createElement("link",{rel:"canonical",href:""+k+_+"/"}),null==_&&null!=i&&a.createElement("link",{rel:"canonical",href:""+k+i+"/"}),a.createElement("meta",{property:"og:image",content:C}),null!=_&&a.createElement("meta",{property:"og:url",content:""+k+_+"/"}),null==_&&null!=i&&a.createElement("meta",{property:"og:url",content:""+k+i+"/"}),a.createElement("meta",{property:"og:title",content:z}),a.createElement("meta",{name:"twitter:image",content:C}),null!=u&&a.createElement("meta",{name:"description",content:u}),null!=u&&a.createElement("meta",{name:"twitter:description",content:u}),null!=u&&a.createElement("meta",{property:"og:description",content:u}),a.createElement("meta",{name:"twitter:title",content:z}),a.createElement("meta",{name:"twitter:image:alt",content:'Image for "'+String(z)+'"'}),null!=f&&f.length>0&&a.createElement("meta",{name:"keywords",content:f instanceof Array?f.join(","):f})),a.createElement(ye,null),a.createElement(pe,null),a.createElement("div",{className:(0,r.Z)(be,E,(t={},t[Ee]=m,t))},s),!0!==g&&a.createElement(T,null)))};Ce.defaultProps={altFooter:!1,flex:!1};var Ie=Ce},8219:function(e,t,n){"use strict";var r=n(7462),a=n(3366),l=n(7294),o=n(6010),c=n(6742),i=n(4996),s=n(5977),u=n(6700),m=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],d=["items","position","className"],f=["className"],g=["items","className","position"],_=["className"],h=["mobile"];function v(e){var t=e.activeBasePath,n=e.activeBaseRegex,o=e.to,s=e.href,u=e.label,d=e.activeClassName,f=void 0===d?"navbar__link--active":d,g=e.prependBaseUrlToHref,_=(0,a.Z)(e,m),h=(0,i.Z)(o),v=(0,i.Z)(t),p=(0,i.Z)(s,{forcePrependBaseUrl:!0});return l.createElement(c.Z,(0,r.Z)({},s?{href:g?p:s}:Object.assign({isNavLink:!0,activeClassName:f,to:h},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(v)}}:null),_),u)}function p(e){var t,n=e.items,c=e.position,i=e.className,s=(0,a.Z)(e,d),u=(0,l.useRef)(null),m=(0,l.useRef)(null),g=(0,l.useState)(!1),_=g[0],h=g[1];(0,l.useEffect)((function(){var e=function(e){u.current&&!u.current.contains(e.target)&&h(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[u]);var p=function(e,t){return void 0===t&&(t=!1),(0,o.Z)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return n?l.createElement("div",{ref:u,className:(0,o.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===c,"dropdown--right":"right"===c,"dropdown--show":_})},l.createElement(v,(0,r.Z)({className:p(i)},s,{onClick:s.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),h(!_))}}),null!=(t=s.children)?t:s.label),l.createElement("ul",{ref:m,className:"dropdown__menu"},n.map((function(e,t){var o=e.className,c=(0,a.Z)(e,f);return l.createElement("li",{key:t},l.createElement(v,(0,r.Z)({onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),h(!1);var r=u.current.nextElementSibling;r&&r.focus()}},activeClassName:"dropdown__link--active",className:p(o,!0)},c)))})))):l.createElement(v,(0,r.Z)({className:p(i)},s))}function b(e){var t,n,c,i=e.items,m=e.className,d=(e.position,(0,a.Z)(e,g)),f=(0,l.useRef)(null),h=(0,s.TH)().pathname,p=(0,l.useState)((function(){var e;return null==(e=!(null!=i&&i.some((function(e){return(0,u.Mg)(e.to,h)}))))||e})),b=p[0],E=p[1],N=function(e,t){return void 0===t&&(t=!1),(0,o.Z)("menu__link",{"menu__link--sublist":t},e)};if(!i)return l.createElement("li",{className:"menu__list-item"},l.createElement(v,(0,r.Z)({className:N(m)},d)));var w=null!=(t=f.current)&&t.scrollHeight?(null==(n=f.current)?void 0:n.scrollHeight)+"px":void 0;return l.createElement("li",{className:(0,o.Z)("menu__list-item",{"menu__list-item--collapsed":b})},l.createElement(v,(0,r.Z)({role:"button",className:N(m,!0)},d,{onClick:function(e){e.preventDefault(),E((function(e){return!e}))}}),null!=(c=d.children)?c:d.label),l.createElement("ul",{className:"menu__list",ref:f,style:{height:b?void 0:w}},i.map((function(e,t){var n=e.className,o=(0,a.Z)(e,_);return l.createElement("li",{className:"menu__list-item",key:t},l.createElement(v,(0,r.Z)({activeClassName:"menu__link--active",className:N(n)},o,{onClick:d.onClick})))}))))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,r=(0,a.Z)(e,h),o=n?b:p;return l.createElement(o,r)}},8729:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(7462),a=n(3366),l=n(7294),o=n(8219),c=n(907),i=n(6010),s=n(6700),u=["docId","activeSidebarClassName","label","docsPluginId"];function m(e){var t,n,m=e.docId,d=e.activeSidebarClassName,f=e.label,g=e.docsPluginId,_=(0,a.Z)(e,u),h=(0,c.useActiveDocContext)(g),v=h.activeVersion,p=h.activeDoc,b=(0,s.J)(g).preferredVersion,E=(0,c.useLatestVersion)(g),N=null!=(t=null!=v?v:b)?t:E,w=N.docs.find((function(e){return e.id===m}));if(!w){var Z=N.docs.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id="+m+" in version "+N.name+".\nAvailable docIds=\n- "+Z)}return l.createElement(o.Z,(0,r.Z)({exact:!0},_,{className:(0,i.Z)(_.className,(n={},n[d]=p&&p.sidebar===w.sidebar,n)),label:null!=f?f:w.id,to:w.path}))}},5391:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(7462),a=n(3366),l=n(7294),o=n(8219),c=n(907),i=n(6700),s=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],u=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function m(e){var t,n,m=e.mobile,d=e.docsPluginId,f=e.dropdownActiveClassDisabled,g=e.dropdownItemsBefore,_=e.dropdownItemsAfter,h=(0,a.Z)(e,s),v=(0,c.useActiveDocContext)(d),p=(0,c.useVersions)(d),b=(0,c.useLatestVersion)(d),E=(0,i.J)(d),N=E.preferredVersion,w=E.savePreferredVersionName;var Z=null!=(t=null!=(n=v.activeVersion)?n:N)?t:b,k=m?"Versions":Z.label,z=m?void 0:u(Z).path;return l.createElement(o.Z,(0,r.Z)({},h,{mobile:m,label:k,to:z,items:function(){var e=p.map((function(e){var t=(null==v?void 0:v.alternateDocVersions[e.name])||u(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==v?void 0:v.activeVersion)},onClick:function(){w(e.name)}}})),t=[].concat(g,e,_);if(!(t.length<=1))return t}(),isActive:f?function(){return!1}:void 0}))}},1555:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7462),a=n(3366),l=n(7294),o=n(8219),c=n(907),i=n(6700),s=["label","to","docsPluginId"];function u(e){var t,n=e.label,u=e.to,m=e.docsPluginId,d=(0,a.Z)(e,s),f=(0,c.useActiveVersion)(m),g=(0,i.J)(m).preferredVersion,_=(0,c.useLatestVersion)(m),h=null!=(t=null!=f?f:g)?t:_,v=null!=n?n:h.label,p=null!=u?u:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(h).path;return l.createElement(o.Z,(0,r.Z)({},d,{label:v,to:p}))}},9096:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var r=n(7294),a=n(9042),l={wrapper:"wrapper_gpSL",message:"message_Rqvl"},o=function(){return r.createElement(a.Z,{flex:!0,title:"Page not found"},r.createElement("div",{className:l.wrapper},r.createElement("h1",{className:l.title},"404"),r.createElement("p",{className:l.message},"We could not find what you were looking for.")))}},6439:function(e,t,n){"use strict";t.Z=n.p+"assets/files/book-3d0b9e679f9e502cb07685b701c450cf.zip"},9178:function(e,t){"use strict";t.Z={section:"section_bQ6r","section--inner":"section--inner_6-fB","section--accent":"section--accent_GhZ8","section--flex-wrap":"section--flex-wrap_05Su","section--slim":"section--slim_hu0z","section--slim--accent":"section--slim--accent_+OP3","section--center":"section--center_0sLU","section--column":"section--column_ZlID","section--odd":"section--odd_8zop","section--showcase":"section--showcase_TV-2",section__title:"section__title_W17F",section__title__em:"section__title__em_wlLN","section__title--accent":"section__title--accent_Fux3","section__title--wide":"section__title--wide_i09D",section__subtitle:"section__subtitle_V-qQ","section__subtitle--narrow":"section__subtitle--narrow_HAbD","section__subtitle--accent":"section__subtitle--accent_6eNO",section__header:"section__header_IOqa",section__header__left:"section__header__left_ykLe",section__illustration:"section__illustration_7Yaq",section__footer:"section__footer_4BzJ","section__footer--console":"section__footer--console_ppbG","section__footer--feature-cards":"section__footer--feature-cards_pv8X","section__footer--feature-tabs":"section__footer--feature-tabs_54g6","section__title--jumbotron":"section__title--jumbotron_jmXI","section__subtitle--jumbotron":"section__subtitle--jumbotron_KstL"}},2748:function(e,t,n){"use strict";t.Z=n.p+"assets/images/redis-cache-05-f1847d60569f085c07e97d9d3e7482e4.png"}}]);