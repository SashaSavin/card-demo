(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5133:function(e,t,r){Promise.resolve().then(r.bind(r,1804)),Promise.resolve().then(r.t.bind(r,5562,23))},2011:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b}});let n=r(6927),i=r(5909),o=i._(r(6006)),a=n._(r(9619)),l=r(9080),s=r(9600),u=r(5934);r(4169);let d=n._(r(8697)),c={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function f(e){return void 0!==e.default}function p(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,r,n,i,o,a){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===r&&o(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}})}function g(e){let[t,r]=o.version.split("."),n=parseInt(t,10),i=parseInt(r,10);return n>18||18===n&&i>=3?{fetchPriority:e}:{fetchpriority:e}}let h=(0,o.forwardRef)((e,t)=>{let{imgAttributes:r,heightInt:n,widthInt:i,qualityInt:a,className:l,imgStyle:s,blurStyle:u,isLazy:d,fetchPriority:c,fill:f,placeholder:p,loading:h,srcString:_,config:b,unoptimized:y,loader:v,onLoadRef:w,onLoadingCompleteRef:x,setBlurComplete:j,setShowAltText:E,onLoad:S,onError:O,...C}=e;return h=d?"lazy":h,o.default.createElement("img",{...C,...g(c),loading:h,width:i,height:n,decoding:"async","data-nimg":f?"fill":"1",className:l,style:{...s,...u},...r,ref:(0,o.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(O&&(e.src=e.src),e.complete&&m(e,_,p,w,x,j,y))},[_,p,w,x,j,O,y,t]),onLoad:e=>{let t=e.currentTarget;m(t,_,p,w,x,j,y)},onError:e=>{E(!0),"blur"===p&&j(!0),O&&O(e)}})}),_=(0,o.forwardRef)((e,t)=>{var r;let n,i,{src:m,sizes:_,unoptimized:b=!1,priority:y=!1,loading:v,className:w,quality:x,width:j,height:E,fill:S,style:O,onLoad:C,onLoadingComplete:P,placeholder:k="empty",blurDataURL:M,fetchPriority:I,layout:A,objectFit:N,objectPosition:R,lazyBoundary:z,lazyRoot:D,...U}=e,T=(0,o.useContext)(u.ImageConfigContext),W=(0,o.useMemo)(()=>{let e=c||T||s.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[T]),F=U.loader||d.default;delete U.loader;let L="__next_img_default"in F;if(L){if("custom"===W.loader)throw Error('Image with src "'+m+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=F;F=t=>{let{config:r,...n}=t;return e(n)}}if(A){"fill"===A&&(S=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[A];e&&(O={...O,...e});let t={responsive:"100vw",fill:"100vw"}[A];t&&!_&&(_=t)}let B="",$=p(j),G=p(E);if("object"==typeof(r=m)&&(f(r)||void 0!==r.src)){let e=f(m)?m.default:m;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(n=e.blurWidth,i=e.blurHeight,M=M||e.blurDataURL,B=e.src,!S){if($||G){if($&&!G){let t=$/e.width;G=Math.round(e.height*t)}else if(!$&&G){let t=G/e.height;$=Math.round(e.width*t)}}else $=e.width,G=e.height}}let H=!y&&("lazy"===v||void 0===v);(!(m="string"==typeof m?m:B)||m.startsWith("data:")||m.startsWith("blob:"))&&(b=!0,H=!1),W.unoptimized&&(b=!0),L&&m.endsWith(".svg")&&!W.dangerouslyAllowSVG&&(b=!0),y&&(I="high");let[V,q]=(0,o.useState)(!1),[Y,J]=(0,o.useState)(!1),K=p(x),Q=Object.assign(S?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:N,objectPosition:R}:{},Y?{}:{color:"transparent"},O),X="blur"===k&&M&&!V?{backgroundSize:Q.objectFit||"cover",backgroundPosition:Q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,l.getImageBlurSvg)({widthInt:$,heightInt:G,blurWidth:n,blurHeight:i,blurDataURL:M,objectFit:Q.objectFit})+'")'}:{},Z=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:a,loader:l}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:u}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let o=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:o,kind:"x"}}(t,i,a),d=s.length-1;return{sizes:a||"w"!==u?a:"100vw",srcSet:s.map((e,n)=>l({config:t,src:r,quality:o,width:e})+" "+("w"===u?e:n+1)+u).join(", "),src:l({config:t,src:r,quality:o,width:s[d]})}}({config:W,src:m,unoptimized:b,width:$,quality:K,sizes:_,loader:F}),ee=m,et=(0,o.useRef)(C);(0,o.useEffect)(()=>{et.current=C},[C]);let er=(0,o.useRef)(P);(0,o.useEffect)(()=>{er.current=P},[P]);let en={isLazy:H,imgAttributes:Z,heightInt:G,widthInt:$,qualityInt:K,className:w,imgStyle:Q,blurStyle:X,loading:v,config:W,fetchPriority:I,fill:S,unoptimized:b,placeholder:k,loader:F,srcString:ee,onLoadRef:et,onLoadingCompleteRef:er,setBlurComplete:q,setShowAltText:J,...U};return o.default.createElement(o.default.Fragment,null,o.default.createElement(h,{...en,ref:t}),y?o.default.createElement(a.default,null,o.default.createElement("link",{key:"__nimg-"+Z.src+Z.srcSet+Z.sizes,rel:"preload",as:"image",href:Z.srcSet?void 0:Z.src,imageSrcSet:Z.srcSet,imageSizes:Z.sizes,crossOrigin:U.crossOrigin,...g(I)})):null)}),b=_;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4920:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return o}});let n=r(6927),i=n._(r(6006)),o=i.default.createContext({})},5224:function(e,t){"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},9619:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{defaultHead:function(){return d},default:function(){return m}});let n=r(6927),i=r(5909),o=i._(r(6006)),a=n._(r(2776)),l=r(4920),s=r(508),u=r(5224);function d(e){void 0===e&&(e=!1);let t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function c(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(4169);let f=["name","httpEquiv","charSet","itemProp"];function p(e,t){let{inAmpMode:r}=t;return e.reduce(c,[]).reverse().concat(d(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return i=>{let o=!0,a=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){a=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?o=!1:r.add(t);else{let e=i.props[t],r=n[t]||new Set;("name"!==t||!a)&&r.has(e)?o=!1:(r.add(e),n[t]=r)}}}}return o}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,o.default.cloneElement(e,t)}return o.default.cloneElement(e,{key:n})})}let m=function(e){let{children:t}=e,r=(0,o.useContext)(l.AmpStateContext),n=(0,o.useContext)(s.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:n,inAmpMode:(0,u.isInAmpMode)(r)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9080:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o,objectFit:a}=e,l=n||t,s=i||r,u=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+l+" "+s+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(n&&i?"1":"20")+"'/%3E"+u+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+o+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},5934:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return a}});let n=r(6927),i=n._(r(6006)),o=r(9600),a=i.default.createContext(o.imageConfigDefault)},9600:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},8697:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},2776:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let n=r(5909),i=n._(r(6006)),o=i.useLayoutEffect,a=i.useEffect;function l(e){let{headManager:t,reduceComponentsToState:r}=e;function n(){if(t&&t.mountedInstances){let n=i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(n,e))}}return o(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=n),()=>{t&&(t._pendingUpdate=n)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},4169:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},1804:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var n=r(9268),i=r(6286),o=r.n(i),a=r(6394),l=r.n(a),s=r(6006),u=r(3557),d=r.n(u);function c(e){let{type:t,text:r}=e;return(0,n.jsx)("div",{className:(e=>{switch(e){case e="outlined":return d().outlined;case e="base":return d().base;default:return d().outlined}})(t),children:r})}let f={red:"#EE4444",blue:"#3C81F6",black:"black"},p=e=>{switch(e){case f.red:return"images/image_red.png";case f.blue:return"images/image_blue.png";case f.black:return"images/image_black.png";default:return""}};function m(e){let{name:t,descr:r,price:i,colors:a}=e,[u,d]=(0,s.useState)(f.red),m=(0,s.useCallback)(e=>{d(e)},[]);return(0,n.jsxs)("div",{className:o().card,children:[(0,n.jsx)(l(),{src:p(u),placeholder:"empty",alt:"img",width:258,height:258,priority:!0}),(0,n.jsxs)("div",{className:o().text,children:[(0,n.jsxs)("h1",{children:["$",i]}),(0,n.jsx)("h3",{children:t}),(0,n.jsx)("small",{children:r}),(0,n.jsxs)("div",{className:o().color,children:[(0,n.jsx)("small",{style:{color:"gray"},children:"Choose your colour"}),(0,n.jsx)("div",{className:o().color_btns,children:null==a?void 0:a.map((e,t)=>(0,n.jsx)("div",{children:(0,n.jsx)("button",{className:o().btn,style:{background:"".concat(f[e]),border:u===f[e]?"4px solid black":"4px solid white"},onClick:()=>m(f[e])})},t))})]})]}),(0,n.jsxs)("div",{className:o().btn__group,children:[(0,n.jsx)(c,{type:"base",text:"Add to card"}),(0,n.jsx)(c,{type:"outlined",text:"Buy now"})]}),(0,n.jsx)("small",{className:o().read,children:"read reviews"})]})}},3557:function(e){e.exports={outlined:"button_outlined__Wogn0",base:"button_base__vpeB6"}},6286:function(e){e.exports={card:"card_card__ssraE",text:"card_text__SgL1h",color:"card_color__QwPP0",color_btns:"card_color_btns__fEKR_",btn:"card_btn__vr83R",btn__group:"card_btn__group__uqMuW",read:"card_read__p2ze7"}},5562:function(e){e.exports={wrapper:"contentWrapper_wrapper__ttjHA"}},3177:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(6006),i=Symbol.for("react.element"),o=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var n,s={},u=null,d=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,n)&&!l.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:i,type:e,key:u,ref:d,props:s,_owner:a.current}}t.jsx=s,t.jsxs=s},9268:function(e,t,r){"use strict";e.exports=r(3177)},6394:function(e,t,r){e.exports=r(2011)}},function(e){e.O(0,[667,139,744],function(){return e(e.s=5133)}),_N_E=e.O()}]);