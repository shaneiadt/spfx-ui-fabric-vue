!function(t){var e={};function n(u){if(e[u])return e[u].exports;var o=e[u]={i:u,l:!1,exports:{}};return t[u].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,u){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:u})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var u=Object.create(null);if(n.r(u),Object.defineProperty(u,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(u,o,function(e){return t[e]}.bind(null,o));return u},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=15)}({15:function(t,e){(void 0)(["../dist/bundle.esm","vue","@microsoft/load-themed-styles"],function(t,e){"use strict";var n,u,o;return{setters:[function(t){n=t.uiButton},function(t){u=t.default},function(t){o=t.loadStyles}],execute:function(){o(".custom-class{ border: dashed 2px magenta !important"),new u({el:"#app",components:{uiButton:n},template:'<div>\n        <uiButton>Default</uiButton>\n        <uiButton type="primary">Primary</uiButton>\n        <uiButton class="custom-class">Custom class</uiButton>\n    </div>'})}}})}});