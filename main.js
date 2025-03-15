(()=>{"use strict";var e,n,t,r={46:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([e.id,'* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nh1 {\n  font-weight: bold;\n  padding: 20px;\n}\n\n.display {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 2px black solid;\n  min-width: 800px;\n  gap: 10px;\n}\n\n.form,\ninput,\nbutton {\n  font-size: 1.5rem;\n}\n\nbutton {\n  padding: 3px 6px;\n}\n\n.location {\n  margin-top: 20px;\n}\n\n.condition {\n  margin-bottom: 20px;\n}\n\n.icon {\n  max-width: 200px;\n  height: auto;\n}\n\n.content {\n  font-size: 2rem;\n}\n\n.temperature {\n  font-size: 3rem;\n}\n\n.conversion {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  padding: 20px;\n}\n\n/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  transition: 0.4s;\n  background-color: #87c9ff;\n}\n\n.slider:before {\n  position: absolute;\n  content: "";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #ffa9a9;\n}\n\ninput:checked + .slider:before {\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n',""]);const c=a},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],u=r.base?s[0]+r.base:s[0],l=i[u]||0,d="".concat(u," ").concat(l);i[u]=l+1;var p=t(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var h=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:d,updater:h,references:1})}a.push(d)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var s=r(e,o),u=0;u<i.length;u++){var l=t(i[u]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=s}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},601:e=>{e.exports=function(e){return e[1]}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}}},o={};function i(e){var n=o[e];if(void 0!==n)return n.exports;var t=o[e]={id:e,exports:{}};return r[e](t,t.exports,i),t.exports}i.m=r,i.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return i.d(n,{a:n}),n},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(t,r){if(1&r&&(t=this(t)),8&r)return t;if("object"==typeof t&&t){if(4&r&&t.__esModule)return t;if(16&r&&"function"==typeof t.then)return t}var o=Object.create(null);i.r(o);var a={};e=e||[null,n({}),n([]),n(n)];for(var c=2&r&&t;"object"==typeof c&&!~e.indexOf(c);c=n(c))Object.getOwnPropertyNames(c).forEach((e=>a[e]=()=>t[e]));return a.default=()=>t,i.d(o,a),o},i.d=(e,n)=>{for(var t in n)i.o(n,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((n,t)=>(i.f[t](e,n),n)),[])),i.u=e=>e+".main.js",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t={},i.l=(e,n,r,o)=>{if(t[e])t[e].push(n);else{var a,c;if(void 0!==r)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var l=s[u];if(l.getAttribute("src")==e){a=l;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.src=e),t[e]=[n];var d=(n,r)=>{a.onerror=a.onload=null,clearTimeout(p);var o=t[e];if(delete t[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(r))),n)return n(r)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var n=i.g.document;if(!e&&n&&(n.currentScript&&"SCRIPT"===n.currentScript.tagName.toUpperCase()&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=t[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{var e={792:0};i.f.j=(n,t)=>{var r=i.o(e,n)?e[n]:void 0;if(0!==r)if(r)t.push(r[2]);else{var o=new Promise(((t,o)=>r=e[n]=[t,o]));t.push(r[2]=o);var a=i.p+i.u(n),c=new Error;i.l(a,(t=>{if(i.o(e,n)&&(0!==(r=e[n])&&(e[n]=void 0),r)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;c.message="Loading chunk "+n+" failed.\n("+o+": "+a+")",c.name="ChunkLoadError",c.type=o,c.request=a,r[1](c)}}),"chunk-"+n,n)}};var n=(n,t)=>{var r,o,[a,c,s]=t,u=0;if(a.some((n=>0!==e[n]))){for(r in c)i.o(c,r)&&(i.m[r]=c[r]);s&&s(i)}for(n&&n(t);u<a.length;u++)o=a[u],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunk=self.webpackChunk||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})(),i.nc=void 0;const a=function(){document.querySelectorAll(".content").forEach((e=>{e.classList.contains("temperature")?e.textContent="-°C":e.textContent="-"}))},c=function(e){const n=document.querySelector(".unit-toggle"),t=document.querySelectorAll(".content"),r=[e.location,[e.tempInF,e.tempInC],e.icon,e.condition];t.forEach(((e,t)=>{if(e.classList.contains("temperature"))!0===n.checked?e.textContent=`${r[t][0]} °F`:e.textContent=`${r[t][1]} °C`;else if(e.classList.contains("icon")){const e=document.querySelector(".icon");l(r[t]).then((n=>e.src=n))}else e.textContent=r[t]}))},s=function(){const e=document.querySelector(".location"),n=document.querySelectorAll(".content"),t=document.querySelector(".icon");n.forEach((e=>{e.textContent=""})),t.src=l("none").then((e=>t.src=e)),e.textContent="Location not found"};async function u(e){try{const n=await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${e}?key=BUZJJQFYWWBSZ75MY49HK2KAV`,{mode:"cors"}),t=await n.json(),r=t.currentConditions,o={location:t.resolvedAddress,condition:r.conditions,tempInF:Math.round(r.temp),icon:r.icon,tempInC:Math.round((r.temp-32)*(5/9)),time:r.datetime};c(o)}catch{s()}}async function l(e){let n;return"snow"===e?n=await i.e(831).then(i.t.bind(i,831,17)):"rain"===e?n=await i.e(80).then(i.t.bind(i,80,17)):"fog"===e?n=await i.e(614).then(i.t.bind(i,614,17)):"wind"===e?n=await i.e(929).then(i.t.bind(i,929,17)):"cloudy"===e?n=await i.e(806).then(i.t.bind(i,806,17)):"partly-cloudy-day"===e?n=await i.e(912).then(i.t.bind(i,912,17)):"partly-cloudy-night"===e?n=await i.e(468).then(i.t.bind(i,468,17)):"clear-day"===e?n=await i.e(736).then(i.t.bind(i,736,17)):"clear-night"===e?n=await i.e(908).then(i.t.bind(i,908,17)):"none"===e&&(n=await i.e(346).then(i.t.bind(i,346,17))),n.default}var d,p=i(72),f=i.n(p),h=i(825),m=i.n(h),v=i(659),b=i.n(v),y=i(56),g=i.n(y),x=i(540),w=i.n(x),S=i(113),C=i.n(S),k=i(46),T={};T.styleTagTransform=C(),T.setAttributes=g(),T.insert=b().bind(null,"head"),T.domAPI=m(),T.insertStyleElement=w(),f()(k.A,T),k.A&&k.A.locals&&k.A.locals,a(),d=u,document.querySelector("#submit").addEventListener("click",(e=>{e.preventDefault();const n=document.querySelector("#search").value;d(n)})),function(e){document.querySelector(".unit-toggle").addEventListener("click",(async n=>{if("-"!==document.querySelector(".location").textContent)try{n.target.checked,e(document.querySelector("#search").value)}catch{console.log("error")}}))}(u)})();