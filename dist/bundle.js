(()=>{"use strict";function t(o){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(o)}function o(t,o){for(var e=0;e<o.length;e++){var r=o[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,n(r.key),r)}}function e(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function n(o){var e=function(o,e){if("object"!=t(o)||!o)return o;var n=o[Symbol.toPrimitive];if(void 0!==n){var r=n.call(o,"string");if("object"!=t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}(o);return"symbol"==t(e)?e:e+""}var r=new(e((function t(o,e){!function(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}(this,t),this.nome=o,this.disciplina=e})))("Davi","Matemática");console.log(r.nome),console.log(r.disciplina)})();