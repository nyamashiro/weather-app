(()=>{var e,n,t,r={46:(e,n,t)=>{"use strict";t.d(n,{A:()=>a});var r=t(601),o=t.n(r),i=t(314),c=t.n(i)()(o());c.push([e.id,'* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nh1 {\n  font-weight: bold;\n  padding: 20px;\n}\n\n.display {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 2px black solid;\n  min-width: 800px;\n  gap: 10px;\n}\n\n.form,\ninput,\nbutton {\n  font-size: 1.5rem;\n}\n\nbutton {\n  padding: 3px 6px;\n}\n\n.location {\n  margin-top: 20px;\n}\n\n.condition {\n  margin-bottom: 20px;\n}\n\n.icon {\n  max-width: 200px;\n  height: auto;\n}\n\n.content {\n  font-size: 2rem;\n}\n\n.temperature {\n  font-size: 3rem;\n}\n\n.conversion {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  padding: 20px;\n}\n\n/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  transition: 0.4s;\n  background-color: #87c9ff;\n}\n\n.slider:before {\n  position: absolute;\n  content: "";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #ffa9a9;\n}\n\ninput:checked + .slider:before {\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n',""]);const a=c},56:(e,n,t)=>{"use strict";e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},72:e=>{"use strict";var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},c=[],a=0;a<e.length;a++){var s=e[a],u=r.base?s[0]+r.base:s[0],l=i[u]||0,d="".concat(u," ").concat(l);i[u]=l+1;var p=t(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,r);r.byIndex=a,n.splice(a,0,{identifier:d,updater:m,references:1})}c.push(d)}return c}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<i.length;c++){var a=t(i[c]);n[a].references--}for(var s=r(e,o),u=0;u<i.length;u++){var l=t(i[u]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=s}}},113:e=>{"use strict";e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},314:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(c[s]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&c[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},540:e=>{"use strict";e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},601:e=>{"use strict";e.exports=function(e){return e[1]}},659:e=>{"use strict";var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},825:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},896:(e,n,t)=>{var r={"./clear-day.svg":[736,736],"./clear-night.svg":[908,908],"./cloudy.svg":[806,806],"./fog.svg":[614,614],"./partly-cloudy-day.svg":[912,912],"./partly-cloudy-night.svg":[468,468],"./rain.svg":[80,80],"./sad.svg":[346,346],"./snow.svg":[831,831],"./windy.svg":[929,929]};function o(e){if(!t.o(r,e))return Promise.resolve().then((()=>{var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],o=n[0];return t.e(n[1]).then((()=>t.t(o,17)))}o.keys=()=>Object.keys(r),o.id=896,e.exports=o}},o={};function i(e){var n=o[e];if(void 0!==n)return n.exports;var t=o[e]={id:e,exports:{}};return r[e](t,t.exports,i),t.exports}i.m=r,i.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return i.d(n,{a:n}),n},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(t,r){if(1&r&&(t=this(t)),8&r)return t;if("object"==typeof t&&t){if(4&r&&t.__esModule)return t;if(16&r&&"function"==typeof t.then)return t}var o=Object.create(null);i.r(o);var c={};e=e||[null,n({}),n([]),n(n)];for(var a=2&r&&t;"object"==typeof a&&!~e.indexOf(a);a=n(a))Object.getOwnPropertyNames(a).forEach((e=>c[e]=()=>t[e]));return c.default=()=>t,i.d(o,c),o},i.d=(e,n)=>{for(var t in n)i.o(n,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((n,t)=>(i.f[t](e,n),n)),[])),i.u=e=>e+".main.js",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t={},i.l=(e,n,r,o)=>{if(t[e])t[e].push(n);else{var c,a;if(void 0!==r)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var l=s[u];if(l.getAttribute("src")==e){c=l;break}}c||(a=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=e),t[e]=[n];var d=(n,r)=>{c.onerror=c.onload=null,clearTimeout(p);var o=t[e];if(delete t[e],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((e=>e(r))),n)return n(r)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),a&&document.head.appendChild(c)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var n=i.g.document;if(!e&&n&&(n.currentScript&&"SCRIPT"===n.currentScript.tagName.toUpperCase()&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=t[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{var e={792:0};i.f.j=(n,t)=>{var r=i.o(e,n)?e[n]:void 0;if(0!==r)if(r)t.push(r[2]);else{var o=new Promise(((t,o)=>r=e[n]=[t,o]));t.push(r[2]=o);var c=i.p+i.u(n),a=new Error;i.l(c,(t=>{if(i.o(e,n)&&(0!==(r=e[n])&&(e[n]=void 0),r)){var o=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;a.message="Loading chunk "+n+" failed.\n("+o+": "+c+")",a.name="ChunkLoadError",a.type=o,a.request=c,r[1](a)}}),"chunk-"+n,n)}};var n=(n,t)=>{var r,o,[c,a,s]=t,u=0;if(c.some((n=>0!==e[n]))){for(r in a)i.o(a,r)&&(i.m[r]=a[r]);s&&s(i)}for(n&&n(t);u<c.length;u++)o=c[u],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunk=self.webpackChunk||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})(),i.nc=void 0,(()=>{"use strict";const e=function(){document.querySelectorAll(".content").forEach((e=>{e.classList.contains("temperature")?e.textContent="-°C":e.textContent="-"}))},n=function(e){const n=document.querySelector(".unit-toggle"),t=document.querySelectorAll(".content"),r=[e.location,[e.tempInF,e.tempInC],e.icon,e.condition];t.forEach(((e,t)=>{if(e.classList.contains("temperature"))!0===n.checked?e.textContent=`${r[t][0]} °F`:e.textContent=`${r[t][1]} °C`;else if(e.classList.contains("icon")){const e=document.querySelector(".icon");o(r[t]).then((n=>e.src=n))}else e.textContent=r[t]}))},t=function(){const e=document.querySelector(".location"),n=document.querySelectorAll(".content"),t=document.querySelector(".icon");n.forEach((e=>{e.textContent=""})),t.src=o("none").then((e=>t.src=e)),e.textContent="Location not found"};async function r(e){try{const t=await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${e}?key=BUZJJQFYWWBSZ75MY49HK2KAV`,{mode:"cors"}),r=await t.json(),o=r.currentConditions,i={location:r.resolvedAddress,condition:o.conditions,tempInF:Math.round(o.temp),icon:o.icon,tempInC:Math.round((o.temp-32)*(5/9)),time:o.datetime};n(i)}catch{t()}}async function o(e){let n;return n="none"===e?await i.e(346).then(i.t.bind(i,346,17)):await i(896)(`./${e}.svg`),n.default}var c,a=i(72),s=i.n(a),u=i(825),l=i.n(u),d=i(659),p=i.n(d),f=i(56),m=i.n(f),h=i(540),v=i.n(h),g=i(113),y=i.n(g),b=i(46),x={};x.styleTagTransform=y(),x.setAttributes=m(),x.insert=p().bind(null,"head"),x.domAPI=l(),x.insertStyleElement=v(),s()(b.A,x),b.A&&b.A.locals&&b.A.locals,e(),c=r,document.querySelector("#submit").addEventListener("click",(e=>{e.preventDefault();const n=document.querySelector("#search").value;c(n)})),function(e){document.querySelector(".unit-toggle").addEventListener("click",(async n=>{if("-"!==document.querySelector(".location").textContent)try{n.target.checked,e(document.querySelector("#search").value)}catch{console.log("error")}}))}(r)})()})();