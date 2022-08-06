(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var l;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function da(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=da(this);function n(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
n("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.i=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.i};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
n("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function p(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ia(a){if(!(a instanceof Array)){a=p(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ja(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ma="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ja(d,e)&&(a[e]=d[e])}return a};
n("Object.assign",function(a){return a||ma});
var oa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},pa=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=oa(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),qa;
if("function"==typeof Object.setPrototypeOf)qa=Object.setPrototypeOf;else{var ra;a:{var sa={a:!0},ta={};try{ta.__proto__=sa;ra=ta.a;break a}catch(a){}ra=!1}qa=ra?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ua=qa;
function t(a,b){a.prototype=oa(b.prototype);a.prototype.constructor=a;if(ua)ua(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Y=b.prototype}
function va(){this.C=!1;this.m=null;this.j=void 0;this.i=1;this.o=this.s=0;this.A=this.l=null}
function wa(a){if(a.C)throw new TypeError("Generator is already running");a.C=!0}
va.prototype.N=function(a){this.j=a};
function xa(a,b){a.l={Tb:b,Zb:!0};a.i=a.s||a.o}
va.prototype.return=function(a){this.l={return:a};this.i=this.o};
function v(a,b,c){a.i=c;return{value:b}}
va.prototype.u=function(a){this.i=a};
function ya(a,b,c){a.s=b;void 0!=c&&(a.o=c)}
function za(a,b){a.i=b;a.s=0}
function Aa(a){a.s=0;var b=a.l.Tb;a.l=null;return b}
function Ba(a){a.A=[a.l];a.s=0;a.o=0}
function Ca(a){var b=a.A.splice(0)[0];(b=a.l=a.l||b)?b.Zb?a.i=a.s||a.o:void 0!=b.u&&a.o<b.u?(a.i=b.u,a.l=null):a.i=a.o:a.i=0}
function Da(a){this.i=new va;this.j=a}
function Ea(a,b){wa(a.i);var c=a.i.m;if(c)return Fa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.i.return);
a.i.return(b);return Ga(a)}
function Fa(a,b,c,d){try{var e=b.call(a.i.m,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.i.C=!1,e;var f=e.value}catch(g){return a.i.m=null,xa(a.i,g),Ga(a)}a.i.m=null;d.call(a.i,f);return Ga(a)}
function Ga(a){for(;a.i.i;)try{var b=a.j(a.i);if(b)return a.i.C=!1,{value:b.value,done:!1}}catch(c){a.i.j=void 0,xa(a.i,c)}a.i.C=!1;if(a.i.l){b=a.i.l;a.i.l=null;if(b.Zb)throw b.Tb;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ha(a){this.next=function(b){wa(a.i);a.i.m?b=Fa(a,a.i.m.next,b,a.i.N):(a.i.N(b),b=Ga(a));return b};
this.throw=function(b){wa(a.i);a.i.m?b=Fa(a,a.i.m["throw"],b,a.i.N):(xa(a.i,b),b=Ga(a));return b};
this.return=function(b){return Ea(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ia(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function w(a){return Ia(new Ha(new Da(a)))}
function Ja(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
n("Reflect",function(a){return a?a:{}});
n("Reflect.construct",function(){return pa});
n("Reflect.setPrototypeOf",function(a){return a?a:ua?function(b,c){try{return ua(b,c),!0}catch(d){return!1}}:null});
n("Promise",function(a){function b(g){this.i=0;this.l=void 0;this.j=[];this.C=!1;var h=this.m();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.i=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.j=function(g){if(null==this.i){this.i=[];var h=this;this.l(function(){h.o()})}this.i.push(g)};
var e=fa.setTimeout;c.prototype.l=function(g){e(g,0)};
c.prototype.o=function(){for(;this.i&&this.i.length;){var g=this.i;this.i=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(m){this.m(m)}}}this.i=null};
c.prototype.m=function(g){this.l(function(){throw g;})};
b.prototype.m=function(){function g(m){return function(q){k||(k=!0,m.call(h,q))}}
var h=this,k=!1;return{resolve:g(this.K),reject:g(this.o)}};
b.prototype.K=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.R(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.J(g):this.s(g)}};
b.prototype.J=function(g){var h=void 0;try{h=g.then}catch(k){this.o(k);return}"function"==typeof h?this.T(h,g):this.s(g)};
b.prototype.o=function(g){this.N(2,g)};
b.prototype.s=function(g){this.N(1,g)};
b.prototype.N=function(g,h){if(0!=this.i)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.i);this.i=g;this.l=h;2===this.i&&this.P();this.A()};
b.prototype.P=function(){var g=this;e(function(){if(g.G()){var h=fa.console;"undefined"!==typeof h&&h.error(g.l)}},1)};
b.prototype.G=function(){if(this.C)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.l;return k(g)};
b.prototype.A=function(){if(null!=this.j){for(var g=0;g<this.j.length;++g)f.j(this.j[g]);this.j=null}};
var f=new c;b.prototype.R=function(g){var h=this.m();g.Ua(h.resolve,h.reject)};
b.prototype.T=function(g,h){var k=this.m();try{g.call(h,k.resolve,k.reject)}catch(m){k.reject(m)}};
b.prototype.then=function(g,h){function k(x,u){return"function"==typeof x?function(A){try{m(x(A))}catch(E){q(E)}}:u}
var m,q,r=new b(function(x,u){m=x;q=u});
this.Ua(k(g,m),k(h,q));return r};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Ua=function(g,h){function k(){switch(m.i){case 1:g(m.l);break;case 2:h(m.l);break;default:throw Error("Unexpected state: "+m.i);}}
var m=this;null==this.j?f.j(k):this.j.push(k);this.C=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var m=p(g),q=m.next();!q.done;q=m.next())d(q.value).Ua(h,k)})};
b.all=function(g){var h=p(g),k=h.next();return k.done?d([]):new b(function(m,q){function r(A){return function(E){x[A]=E;u--;0==u&&m(x)}}
var x=[],u=0;do x.push(void 0),u++,d(k.value).Ua(r(x.length-1),q),k=h.next();while(!k.done)})};
return b});
n("WeakMap",function(a){function b(k){this.i=(h+=Math.random()+1).toString();if(k){k=p(k);for(var m;!(m=k.next()).done;)m=m.value,this.set(m[0],m[1])}}
function c(){}
function d(k){var m=typeof k;return"object"===m&&null!==k||"function"===m}
function e(k){if(!ja(k,g)){var m=new c;ba(k,g,{value:m})}}
function f(k){var m=Object[k];m&&(Object[k]=function(q){if(q instanceof c)return q;Object.isExtensible(q)&&e(q);return m(q)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),m=Object.seal({}),q=new a([[k,2],[m,3]]);if(2!=q.get(k)||3!=q.get(m))return!1;q.delete(k);q.set(m,4);return!q.has(k)&&4==q.get(m)}catch(r){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,m){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ja(k,g))throw Error("WeakMap key fail: "+k);k[g][this.i]=m;return this};
b.prototype.get=function(k){return d(k)&&ja(k,g)?k[g][this.i]:void 0};
b.prototype.has=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.i)};
b.prototype.delete=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.i)?delete k[g][this.i]:!1};
return b});
n("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var m=h.i;return ha(function(){if(m){for(;m.head!=h.i;)m=m.previous;for(;m.next!=m.head;)return m=m.next,{done:!1,value:k(m)};m=null}return{done:!0,value:void 0}})}
function d(h,k){var m=k&&typeof k;"object"==m||"function"==m?f.has(k)?m=f.get(k):(m=""+ ++g,f.set(k,m)):m="p_"+k;var q=h.data_[m];if(q&&ja(h.data_,m))for(h=0;h<q.length;h++){var r=q[h];if(k!==k&&r.key!==r.key||k===r.key)return{id:m,list:q,index:h,entry:r}}return{id:m,list:q,index:-1,entry:void 0}}
function e(h){this.data_={};this.i=b();this.size=0;if(h){h=p(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(p([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var m=k.entries(),q=m.next();if(q.done||q.value[0]!=h||"s"!=q.value[1])return!1;q=m.next();return q.done||4!=q.value[0].x||"t"!=q.value[1]||!m.next().done?!1:!0}catch(r){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var m=d(this,h);m.list||(m.list=this.data_[m.id]=[]);m.entry?m.entry.value=k:(m.entry={next:this.i,previous:this.i.previous,head:this.i,key:h,value:k},m.list.push(m.entry),this.i.previous.next=m.entry,this.i.previous=m.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.i=this.i.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var m=this.entries(),q;!(q=m.next()).done;)q=q.value,h.call(k,q[1],q[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ka(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
n("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
n("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
n("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
n("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
n("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
n("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
function La(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
n("Array.prototype.entries",function(a){return a?a:function(){return La(this,function(b,c){return[b,c]})}});
n("Array.prototype.keys",function(a){return a?a:function(){return La(this,function(b){return b})}});
n("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
n("Set",function(a){function b(c){this.i=new Map;if(c){c=p(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.i.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(p([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.i.set(c,c);this.size=this.i.size;return this};
b.prototype.delete=function(c){c=this.i.delete(c);this.size=this.i.size;return c};
b.prototype.clear=function(){this.i.clear();this.size=0};
b.prototype.has=function(c){return this.i.has(c)};
b.prototype.entries=function(){return this.i.entries()};
b.prototype.values=function(){return this.i.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.i.forEach(function(f){return c.call(d,f,f,e)})};
return b});
n("Array.prototype.values",function(a){return a?a:function(){return La(this,function(b,c){return c})}});
n("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
n("Object.setPrototypeOf",function(a){return a||ua});
n("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
n("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
n("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ka(this,b,"includes").indexOf(b,c||0)}});
n("globalThis",function(a){return a||fa});
n("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push([d,b[d]]);return c}});
n("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push(b[d]);return c}});
var Ma=Ma||{},y=this||self;function z(a,b,c){a=a.split(".");c=c||y;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function B(a,b){a=a.split(".");b=b||y;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Na(a){a.tb=void 0;a.getInstance=function(){return a.tb?a.tb:a.tb=new a}}
function Oa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Pa(a){var b=Oa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Qa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ra(a){return Object.prototype.hasOwnProperty.call(a,Sa)&&a[Sa]||(a[Sa]=++Ta)}
var Sa="closure_uid_"+(1E9*Math.random()>>>0),Ta=0;function Ua(a,b,c){return a.call.apply(a.bind,arguments)}
function Va(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Wa(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Wa=Ua:Wa=Va;return Wa.apply(null,arguments)}
function Ya(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Za(a,b){function c(){}
c.prototype=b.prototype;a.Y=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Aq=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function $a(a){return a}
;function ab(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,ab);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Za(ab,Error);ab.prototype.name="CustomError";function bb(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.l=!b&&/[?&]ae=1(&|$)/.test(a);this.m=!b&&/[?&]ae=2(&|$)/.test(a);if((this.i=/[?&]adurl=([^&]*)/.exec(a))&&this.i[1]){try{var c=decodeURIComponent(this.i[1])}catch(d){c=null}this.j=c}}
;function cb(){}
function db(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var eb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},fb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},gb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},hb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},ib=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
fb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d},jb=Array.prototype.every?function(a,b){return Array.prototype.every.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&!b.call(void 0,d[e],e,a))return!1;
return!0};
function kb(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function lb(a,b){b=eb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function mb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Pa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function ob(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function pb(a){var b=qb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function rb(a){for(var b in a)return!1;return!0}
function sb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function tb(a){return null!==a&&"privembed"in a?a.privembed:!1}
function ub(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function vb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function wb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=wb(a[c]);return b}
var xb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function yb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<xb.length;f++)c=xb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var zb;function Ab(){if(void 0===zb){var a=null,b=y.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:$a,createScript:$a,createScriptURL:$a})}catch(c){y.console&&y.console.error(c.message)}zb=a}else zb=a}return zb}
;function Bb(a,b){this.l=a===Cb&&b||""}
Bb.prototype.j=!0;Bb.prototype.i=function(){return this.l};
function Db(a){return new Bb(Cb,a)}
var Cb={};Db("");var Eb={};function Fb(a){this.l=Eb===Eb?a:"";this.j=!0}
Fb.prototype.toString=function(){return this.l.toString()};
Fb.prototype.i=function(){return this.l.toString()};function Gb(a,b){this.l=b===Hb?a:""}
Gb.prototype.toString=function(){return this.l+""};
Gb.prototype.j=!0;Gb.prototype.i=function(){return this.l.toString()};
function Ib(a){if(a instanceof Gb&&a.constructor===Gb)return a.l;Oa(a);return"type_error:TrustedResourceUrl"}
var Hb={};function Lb(a){var b=Ab();a=b?b.createScriptURL(a):a;return new Gb(a,Hb)}
;var Mb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Nb(a,b){return a<b?-1:a>b?1:0}
;function Ob(a,b){this.l=b===Pb?a:""}
Ob.prototype.toString=function(){return this.l.toString()};
Ob.prototype.j=!0;Ob.prototype.i=function(){return this.l.toString()};
function Qb(a){if(a instanceof Ob&&a.constructor===Ob)return a.l;Oa(a);return"type_error:SafeUrl"}
var Rb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Pb={},Sb=new Ob("about:invalid#zClosurez",Pb);function Tb(){var a=y.navigator;return a&&(a=a.userAgent)?a:""}
function C(a){return-1!=Tb().indexOf(a)}
;function Ub(){return C("Trident")||C("MSIE")}
function Vb(){return C("Firefox")||C("FxiOS")}
function Wb(){return C("Safari")&&!(Xb()||C("Coast")||C("Opera")||C("Edge")||C("Edg/")||C("OPR")||Vb()||C("Silk")||C("Android"))}
function Xb(){return(C("Chrome")||C("CriOS"))&&!C("Edge")||C("Silk")}
function Yb(){return C("Android")&&!(Xb()||Vb()||C("Opera")||C("Silk"))}
function Zb(a){var b={};a.forEach(function(c){b[c[0]]=c[1]});
return function(c){return b[c.find(function(d){return d in b})]||""}}
function $b(a){var b=Tb();if("Internet Explorer"===a){if(Ub())if((a=/rv: *([\d\.]*)/.exec(b))&&a[1])b=a[1];else{a="";var c=/MSIE +([\d\.]+)/.exec(b);if(c&&c[1])if(b=/Trident\/(\d.\d)/.exec(b),"7.0"==c[1])if(b&&b[1])switch(b[1]){case "4.0":a="8.0";break;case "5.0":a="9.0";break;case "6.0":a="10.0";break;case "7.0":a="11.0"}else a="7.0";else a=c[1];b=a}else b="";return b}var d=RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g");c=[];for(var e;e=d.exec(b);)c.push([e[1],e[2],e[3]||void 0]);b=Zb(c);
switch(a){case "Opera":if(C("Opera"))return b(["Version","Opera"]);if(C("OPR"))return b(["OPR"]);break;case "Microsoft Edge":if(C("Edge"))return b(["Edge"]);if(C("Edg/"))return b(["Edg"]);break;case "Chromium":if(Xb())return b(["Chrome","CriOS","HeadlessChrome"])}return"Firefox"===a&&Vb()||"Safari"===a&&Wb()||"Android Browser"===a&&Yb()||"Silk"===a&&C("Silk")?(b=c[2])&&b[1]||"":""}
function ac(a){a=$b(a);if(""===a)return NaN;a=a.split(".");return 0===a.length?NaN:Number(a[0])}
;var dc={};function ec(a){this.l=dc===dc?a:"";this.j=!0}
ec.prototype.i=function(){return this.l.toString()};
ec.prototype.toString=function(){return this.l.toString()};function fc(a,b){b instanceof Ob||b instanceof Ob||(b="object"==typeof b&&b.j?b.i():String(b),Rb.test(b)||(b="about:invalid#zClosurez"),b=new Ob(b,Pb));a.href=Qb(b)}
function gc(a,b){a.rel="stylesheet";a.href=Ib(b).toString();(b=hc('style[nonce],link[rel="stylesheet"][nonce]',a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)}
function ic(){return hc("script[nonce]")}
var jc=/^[\w+/_-]+[=]{0,2}$/;function hc(a,b){b=(b||y).document;return b.querySelector?(a=b.querySelector(a))&&(a=a.nonce||a.getAttribute("nonce"))&&jc.test(a)?a:"":""}
;function kc(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var lc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mc(a){return a?decodeURI(a):a}
function nc(a,b){return b.match(lc)[a]||null}
function oc(a){return mc(nc(3,a))}
function pc(a){var b=a.match(lc);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function qc(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;return a[0]+(a[1]?"?"+a[1]:"")+a[2]}
function rc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)rc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function sc(a,b){var c=[];for(b=b||0;b<a.length;b+=2)rc(a[b],a[b+1],c);return c.join("&")}
function tc(a){var b=[],c;for(c in a)rc(c,a[c],b);return b.join("&")}
function uc(a,b){var c=2==arguments.length?sc(arguments[1],0):sc(arguments,1);return qc(a,c)}
function vc(a,b){b=tc(b);return qc(a,b)}
function wc(a,b,c){c=null!=c?"="+encodeURIComponent(String(c)):"";return qc(a,b+c)}
function xc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var yc=/#|$/,Cc=/[?&]($|#)/;function Dc(a,b){for(var c=a.search(yc),d=0,e,f=[];0<=(e=xc(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(Cc,"$1")}
;var Ec={};function Fc(a){if(a!==Ec)throw Error("requires a valid immutable API token");}
;function Gc(){return C("iPhone")&&!C("iPod")&&!C("iPad")}
function Hc(){var a=Tb();if(C("Windows")){var b=/Windows (?:NT|Phone) ([0-9.]+)/;b.exec(a)}else Gc()||C("iPad")||C("iPod")?(b=/(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/,(a=b.exec(a))&&a[1].replace(/_/g,".")):C("Macintosh")?(b=/Mac OS X ([0-9_.]+)/,(a=b.exec(a))&&a[1].replace(/_/g,".")):-1!=Tb().toLowerCase().indexOf("kaios")?(b=/(?:KaiOS)\/(\S+)/i,b.exec(a)):C("Android")?(b=/Android\s+([^\);]+)(\)|;)/,b.exec(a)):C("CrOS")&&(b=/(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,b.exec(a))}
;function Ic(a){Ic[" "](a);return a}
Ic[" "]=function(){};
function Jc(a){var b=Kc;return Object.prototype.hasOwnProperty.call(b,9)?b[9]:b[9]=a(9)}
;var Lc=C("Opera"),Mc=Ub(),Nc=C("Edge"),Oc=C("Gecko")&&!(-1!=Tb().toLowerCase().indexOf("webkit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),Pc=-1!=Tb().toLowerCase().indexOf("webkit")&&!C("Edge"),Qc=C("Android");function Rc(){var a=y.document;return a?a.documentMode:void 0}
var Sc;a:{var Tc="",Uc=function(){var a=Tb();if(Oc)return/rv:([^\);]+)(\)|;)/.exec(a);if(Nc)return/Edge\/([\d\.]+)/.exec(a);if(Mc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Pc)return/WebKit\/(\S+)/.exec(a);if(Lc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Uc&&(Tc=Uc?Uc[1]:"");if(Mc){var Vc=Rc();if(null!=Vc&&Vc>parseFloat(Tc)){Sc=String(Vc);break a}}Sc=Tc}var Wc=Sc,Kc={};
function Xc(){return Jc(function(){for(var a=0,b=Mb(String(Wc)).split("."),c=Mb("9").split("."),d=Math.max(b.length,c.length),e=0;0==a&&e<d;e++){var f=b[e]||"",g=c[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==f[0].length&&0==g[0].length)break;a=Nb(0==f[1].length?0:parseInt(f[1],10),0==g[1].length?0:parseInt(g[1],10))||Nb(0==f[2].length,0==g[2].length)||Nb(f[2],g[2]);f=f[3];g=g[3]}while(0==a)}return 0<=a})}
var Yc;if(y.document&&Mc){var Zc=Rc();Yc=Zc?Zc:parseInt(Wc,10)||void 0}else Yc=void 0;var $c=Yc;var ad=Gc()||C("iPod"),bd=C("iPad");Yb();Xb();var cd=Wb()&&!(Gc()||C("iPad")||C("iPod"));var dd={},ed=null;
function fd(a,b){Pa(a);void 0===b&&(b=0);if(!ed){ed={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));dd[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===ed[h]&&(ed[h]=g)}}}b=dd[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],m=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|m>>4];m=b[(m&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+m+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var gd="undefined"!==typeof Uint8Array,hd={};var id;function jd(){if(hd!==hd)throw Error("illegal external caller");}
function kd(a){jd();this.ka=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
kd.prototype.isEmpty=function(){return null==this.ka};var ld="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function md(a,b){Object.isFrozen(a)||(ld?a[ld]|=b:void 0!==a.ga?a.ga|=b:Object.defineProperties(a,{ga:{value:b,configurable:!0,writable:!0,enumerable:!1}}))}
function nd(a,b){Object.isExtensible(a)&&(ld?a[ld]&&(a[ld]&=~b):void 0!==a.ga&&(a.ga&=~b))}
function od(a){var b;ld?b=a[ld]:b=a.ga;return null==b?0:b}
function pd(a,b){ld?a[ld]=b:void 0!==a.ga?a.ga=b:Object.defineProperties(a,{ga:{value:b,configurable:!0,writable:!0,enumerable:!1}})}
function qd(a){md(a,1);return a}
function rd(a){return a?!!(od(a)&2):!1}
function sd(a){md(a,16);return a}
function td(a){if(!Array.isArray(a))throw Error("cannot mark non-array as shared mutably");nd(a,16)}
function yd(a,b){b?md(a,8):nd(a,8)}
function zd(a,b){pd(b,(od(a)|0)&-51)}
;function Ad(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Bd,Cd=Object.freeze(qd([]));function Dd(a){if(rd(a.v))throw Error("Cannot mutate an immutable Message");}
var Ed="undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.hasInstance;function Fd(a){return{value:a,configurable:!1,writable:!1,enumerable:!1}}
;function Gd(a){return a.displayName||a.name||"unknown type name"}
function Hd(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Gd(b)+" but got "+(a&&Gd(a.constructor)));return a}
function Id(a,b,c,d){c=void 0===c?!1:c;d=void 0===d?!1:d;if(Array.isArray(a))return new b(d?sd(a):a);if(c)return new b}
;function Jd(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)){if(gd&&null!=a&&a instanceof Uint8Array)return fd(a);if(a instanceof kd){var b=a.ka;null!=b&&"string"!==typeof b&&(gd&&b instanceof Uint8Array?b=fd(b):(Oa(b),b=null));return null==b?"":a.ka=b}}}return a}
;function Kd(a,b,c){if(null!=a){if(Array.isArray(a))a=Ld(a,b,c);else if(Ad(a)){var d={},e;for(e in a)d[e]=Kd(a[e],b,c);a=d}else a=b(a);return a}}
function Ld(a,b,c){var d=Array.prototype.slice.call(a);c(a,d);for(a=0;a<d.length;a++)d[a]=Kd(d[a],b,c);return d}
function Md(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a=Jd(a);return Array.isArray(a)?Ld(a,Md,Nd):a}
function Od(a){if("object"===typeof a){if(gd&&null!=a&&a instanceof Uint8Array)return new Uint8Array(a);if(Array.isArray(a.v)&&a.constructor!==Object)return a.clone()}return a}
function Nd(){}
;function Pd(a){return a.j||(a.j=a.v[a.l+a.ma]={})}
function Qd(a,b,c){return-1===b?null:b>=a.l?a.j?a.j[b]:void 0:(void 0===c?0:c)&&a.j&&(c=a.j[b],null!=c)?c:a.v[b+a.ma]}
function D(a,b,c,d,e){d=void 0===d?!1:d;(void 0===e?0:e)||Dd(a);if(b>=a.l||d)return Pd(a)[b]=c,a;void 0!==a.j&&a.l>=a.v.length?(d=a.v.length-1,e=b+a.ma,e>=d?(a.v[d]=void 0,a.v[e]=c,a.v.push(a.j)):a.v[e]=c):a.v[b+a.ma]=c;void 0!==a.j&&b in a.j&&delete a.j[b];return a}
function Rd(a,b,c,d){var e=Qd(a,b,d);Array.isArray(e)?e&&od(e)&1||qd(e):e=Cd;if(rd(a.v))c&1||(md(e,2),Object.freeze(e));else if(e===Cd||rd(e))e=qd(Array.prototype.slice.call(e)),D(a,b,e,d);return e}
function Sd(a,b,c){a=Qd(a,b);return null==a?c:a}
function Td(a,b,c){null==c?c=Cd:qd(c);return D(a,b,c)}
function Ud(a,b,c,d){Dd(a);(c=Vd(a,c))&&c!==b&&null!=d&&(a.i&&c in a.i&&(a.i[c]=void 0),D(a,c));return D(a,b,d)}
function Vd(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=Qd(a,e)&&(0!==c&&D(a,c,void 0,!1,!0),c=e)}return c}
function Wd(a,b,c,d){d=void 0===d?!1:d;var e=d;a.i||(a.i={});var f=a.i[c];if(f)b=f;else if(b=Id(Qd(a,c,e),b))a.i[c]=b,md(b.v,od(a.v)&-33);if(null==b)return b;rd(b.v)&&!rd(a.v)&&(b=b.Db(),D(a,c,b.v,d),a.i[c]=b);return b}
function Xd(a,b,c,d,e){e=void 0===e?!0:e;a.i||(a.i={});var f=a.i[c];d=Rd(a,c,2,d);var g=!!(od(a.v)&16),h=rd(d);h=rd(a.v)||h;if(!f){f=[];for(var k=h,m=0;m<d.length;m++){var q=d[m];k=k||rd(q);q=Id(q,b,!1,g);void 0!==q&&(f.push(q),h&&md(q.v,2))}a.i[c]=f;yd(d,!k)}b=h||e;e=rd(f);b&&!e&&(Object.isFrozen(f)&&(a.i[c]=f=f.slice()),md(f,2),Object.freeze(f));!b&&e&&(a.i[c]=f=f.slice());return f}
function Yd(a,b,c,d){d=void 0===d?!1:d;var e=rd(a.v);b=Xd(a,b,c,d,e);a=Rd(a,c,0,void 0===d?!1:d);if(!(c=e)&&(c=a)){if(!a)throw Error("cannot check mutability state of non-array");c=!(od(a)&8)}if(c){for(c=0;c<b.length;c++)(d=b[c])&&rd(d.v)&&!e&&(b[c]=b[c].Db(),a[c]=b[c].v);yd(a,!0)}return b}
function G(a,b,c,d){Dd(a);a.i||(a.i={});null==d?b=d=void 0:b=Hd(d,b).v;a.i[c]=d;return D(a,c,b)}
function Zd(a,b,c,d,e){Dd(a);a.i||(a.i={});null!=e?b=Hd(e,b).v:b=e=void 0;a.i[c]=e;Ud(a,c,d,b)}
function $d(a,b,c,d){Dd(a);if(null!=d){var e=qd([]);for(var f=!1,g=0;g<d.length;g++)e[g]=Hd(d[g],b).v,f=f||rd(e[g]);a.i||(a.i={});a.i[c]=d;yd(e,!f)}else a.i&&(a.i[c]=void 0),e=Cd;return D(a,c,e)}
function ae(a,b,c,d){Dd(a);var e=Xd(a,c,b,void 0,!1);c=null!=d?Hd(d,c):new c;a=Rd(a,b,2);e.push(c);a.push(c.v);Fc(Ec);rd(c.v)&&yd(a,!1)}
;function be(a,b,c){a||(a=ce);ce=null;var d=this.constructor.i||0,e=0<d,f=this.constructor.j;a?od(a)&16&&md(a,32):(a=f?[f]:[],md(a,48));e&&0<a.length&&Ad(a[a.length-1])&&"g"in a[a.length-1]&&(d=0);this.ma=(f?0:-1)-d;this.i=void 0;this.v=a;a:{f=this.v.length;d=f-1;if(f&&(f=this.v[d],Ad(f))){this.j=f;b=Object.keys(f);0<b.length&&jb(b,isNaN)?this.l=Number.MAX_VALUE:this.l=d-this.ma;break a}void 0!==b&&-1<b?(this.l=Math.max(b,d+1-this.ma),this.j=void 0):this.l=Number.MAX_VALUE}if(!e&&this.j&&"g"in this.j)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
if(c)for(e=0;e<c.length;e++)b=c[e],b<this.l?(b+=this.ma,(d=this.v[b])?Array.isArray(d)&&qd(d):this.v[b]=Cd):(d=Pd(this),(f=d[b])?Array.isArray(f)&&qd(f):d[b]=Cd)}
be.prototype.toJSON=function(){var a=this.v;return Bd?a:Ld(a,Md,Nd)};
function de(a){Bd=!0;try{return JSON.stringify(a.toJSON(),ee)}finally{Bd=!1}}
be.prototype.clone=function(){var a=Ld(this.v,Od,zd);sd(a);ce=a;a=new this.constructor(a);ce=null;fe(a,this);return a};
be.prototype.isMutable=function(a){Fc(a);return!rd(this.v)};
be.prototype.toString=function(){return this.v.toString()};
function ee(a,b){return Jd(b)}
function fe(a,b){b.Ha&&(a.Ha=b.Ha.slice());var c=b.i;if(c){b=b.j;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length)for(f=Yd(a,e[0].constructor,g,f),g=0;g<Math.min(f.length,e.length);g++)fe(f[g],e[g])}else(f=Wd(a,e.constructor,g,f))&&fe(f,e)}}}}
var ce;function ge(){be.apply(this,arguments)}
t(ge,be);ge.prototype.Db=function(){return this};
if(Ed){var he={};Object.defineProperties(ge,(he[Symbol.hasInstance]=Fd(function(){throw Error("Cannot perform instanceof checks for MutableMessage");}),he))};function ie(a){var b=this.i,c=this.j;return this.isRepeated?Yd(a,b,c,!0):Wd(a,b,c,!0)}
;function je(a,b,c,d,e,f){(a=a.i&&a.i[c])?Array.isArray(a)?(e=f.kb?qd(a.slice()):a,$d(b,0<e.length?e[0].constructor:void 0,c,e)):G(b,a.constructor,c,a):(gd&&d instanceof Uint8Array?e=d.length?new kd(new Uint8Array(d)):id||(id=new kd(null)):(Array.isArray(d)&&(e?md(d,2):d&&od(d)&1&&f.kb?(e=d.slice(),pd(e,(od(d)|0)&-51),d=e):td(d)),e=d),D(b,c,e))}
;function I(){ge.apply(this,arguments)}
t(I,ge);I.prototype.Db=function(){if(rd(this.v)){var a={kb:!0};var b=rd(this.v);if(b&&!a.kb)throw Error("copyRepeatedFields must be true for frozen messages");b||td(this.v);var c=new this.constructor;this.Ha&&(c.Ha=this.Ha.slice());for(var d=this.v,e=0;e<d.length;e++){var f=d[e];if(e===d.length-1&&Ad(f))for(var g in f){var h=+g;Number.isNaN(h)?Pd(c)[g]=f[g]:je(this,c,h,f[g],b,a)}else je(this,c,e-this.ma,f,b,a)}a=c}else a=this;return a};
if(Ed){var ke={};Object.defineProperties(I,(ke[Symbol.hasInstance]=Fd(Object[Symbol.hasInstance]),ke))};function le(a){this.Nb=a}
;function me(a,b,c){this.j=a;this.m=b;this.i=c||[];this.ya=new Map}
l=me.prototype;l.yc=function(a){var b=Ja.apply(1,arguments),c=this.nb(b);c?c.push(new le(a)):this.mc(a,b)};
l.mc=function(a){this.ya.set(this.Ub(Ja.apply(1,arguments)),[new le(a)])};
l.nb=function(){var a=this.Ub(Ja.apply(0,arguments));return this.ya.has(a)?this.ya.get(a):void 0};
l.Lc=function(){var a=this.nb(Ja.apply(0,arguments));return a&&a.length?a[0]:void 0};
l.clear=function(){this.ya.clear()};
l.Ub=function(){var a=Ja.apply(0,arguments);return a?a.join(","):"key"};function ne(a,b){me.call(this,a,3,b)}
t(ne,me);ne.prototype.l=function(a){var b=Ja.apply(1,arguments),c=0,d=this.Lc(b);d&&(c=d.Nb);this.mc(c+a,b)};function oe(a,b){me.call(this,a,2,b)}
t(oe,me);oe.prototype.l=function(a){this.yc(a,Ja.apply(1,arguments))};function pe(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function qe(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Pa(d)?qe.apply(null,d):pe(d)}}
;function J(){this.N=this.N;this.C=this.C}
J.prototype.N=!1;J.prototype.i=function(){return this.N};
J.prototype.dispose=function(){this.N||(this.N=!0,this.D())};
function re(a,b){se(a,Ya(pe,b))}
function se(a,b){a.N?b():(a.C||(a.C=[]),a.C.push(b))}
J.prototype.D=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function te(a,b){this.type=a;this.i=this.target=b;this.defaultPrevented=this.l=!1}
te.prototype.stopPropagation=function(){this.l=!0};
te.prototype.preventDefault=function(){this.defaultPrevented=!0};function ue(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||y.$googDebugFname||b}catch(g){e="Not available",c=!0}b=ve(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,we[c])c=we[c];else{c=String(c);if(!we[c]){var f=/function\s+([^\(]+)/m.exec(c);we[c]=f?f[1]:"[Anonymous]"}c=we[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function ve(a,b){b||(b={});b[xe(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[xe(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=ve(a,b));return c}
function xe(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var we={};var ye=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{y.addEventListener("test",function(){},b),y.removeEventListener("test",function(){},b)}catch(c){}return a}();function ze(a,b){te.call(this,a?a.type:"");this.relatedTarget=this.i=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.j=null;a&&this.init(a,b)}
Za(ze,te);var Ae={2:"touch",3:"pen",4:"mouse"};
ze.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.i=b;if(b=a.relatedTarget){if(Oc){a:{try{Ic(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Ae[a.pointerType]||"";this.state=a.state;
this.j=a;a.defaultPrevented&&ze.Y.preventDefault.call(this)};
ze.prototype.stopPropagation=function(){ze.Y.stopPropagation.call(this);this.j.stopPropagation?this.j.stopPropagation():this.j.cancelBubble=!0};
ze.prototype.preventDefault=function(){ze.Y.preventDefault.call(this);var a=this.j;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ge="closure_listenable_"+(1E6*Math.random()|0);var He=0;function Ie(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Ya=e;this.key=++He;this.Ja=this.Ta=!1}
function Je(a){a.Ja=!0;a.listener=null;a.proxy=null;a.src=null;a.Ya=null}
;function Ke(a){this.src=a;this.listeners={};this.i=0}
Ke.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.i++);var g=Le(a,b,d,e);-1<g?(b=a[g],c||(b.Ta=!1)):(b=new Ie(b,this.src,f,!!d,e),b.Ta=c,a.push(b));return b};
Ke.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Le(e,b,c,d);return-1<b?(Je(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.i--),!0):!1};
function Me(a,b){var c=b.type;c in a.listeners&&lb(a.listeners[c],b)&&(Je(b),0==a.listeners[c].length&&(delete a.listeners[c],a.i--))}
function Le(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Ja&&f.listener==b&&f.capture==!!c&&f.Ya==d)return e}return-1}
;var Ne="closure_lm_"+(1E6*Math.random()|0),Oe={},Pe=0;function Qe(a,b,c,d,e){if(d&&d.once)Re(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Qe(a,b[f],c,d,e);else c=Se(c),a&&a[Ge]?a.aa(b,c,Qa(d)?!!d.capture:!!d,e):Te(a,b,c,!1,d,e)}
function Te(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Qa(e)?!!e.capture:!!e,h=Ue(a);h||(a[Ne]=h=new Ke(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Ve();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)ye||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(We(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Pe++}}
function Ve(){function a(c){return b.call(a.src,a.listener,c)}
var b=Xe;return a}
function Re(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Re(a,b[f],c,d,e);else c=Se(c),a&&a[Ge]?a.m.add(String(b),c,!0,Qa(d)?!!d.capture:!!d,e):Te(a,b,c,!0,d,e)}
function Ye(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ye(a,b[f],c,d,e);else(d=Qa(d)?!!d.capture:!!d,c=Se(c),a&&a[Ge])?a.m.remove(String(b),c,d,e):a&&(a=Ue(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Le(b,c,d,e)),(c=-1<a?b[a]:null)&&Ze(c))}
function Ze(a){if("number"!==typeof a&&a&&!a.Ja){var b=a.src;if(b&&b[Ge])Me(b.m,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(We(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Pe--;(c=Ue(b))?(Me(c,a),0==c.i&&(c.src=null,b[Ne]=null)):Je(a)}}}
function We(a){return a in Oe?Oe[a]:Oe[a]="on"+a}
function Xe(a,b){if(a.Ja)a=!0;else{b=new ze(b,this);var c=a.listener,d=a.Ya||a.src;a.Ta&&Ze(a);a=c.call(d,b)}return a}
function Ue(a){a=a[Ne];return a instanceof Ke?a:null}
var $e="__closure_events_fn_"+(1E9*Math.random()>>>0);function Se(a){if("function"===typeof a)return a;a[$e]||(a[$e]=function(b){return a.handleEvent(b)});
return a[$e]}
;function af(){J.call(this);this.m=new Ke(this);this.vc=this;this.la=null}
Za(af,J);af.prototype[Ge]=!0;af.prototype.addEventListener=function(a,b,c,d){Qe(this,a,b,c,d)};
af.prototype.removeEventListener=function(a,b,c,d){Ye(this,a,b,c,d)};
function bf(a,b){var c=a.la;if(c){var d=[];for(var e=1;c;c=c.la)d.push(c),++e}a=a.vc;c=b.type||b;"string"===typeof b?b=new te(b,a):b instanceof te?b.target=b.target||a:(e=b,b=new te(c,a),yb(b,e));e=!0;if(d)for(var f=d.length-1;!b.l&&0<=f;f--){var g=b.i=d[f];e=cf(g,c,!0,b)&&e}b.l||(g=b.i=a,e=cf(g,c,!0,b)&&e,b.l||(e=cf(g,c,!1,b)&&e));if(d)for(f=0;!b.l&&f<d.length;f++)g=b.i=d[f],e=cf(g,c,!1,b)&&e}
af.prototype.D=function(){af.Y.D.call(this);if(this.m){var a=this.m,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Je(d[e]);delete a.listeners[c];a.i--}}this.la=null};
af.prototype.aa=function(a,b,c,d){return this.m.add(String(a),b,!1,c,d)};
function cf(a,b,c,d){b=a.m.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Ja&&g.capture==c){var h=g.listener,k=g.Ya||g.src;g.Ta&&Me(a.m,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function df(a,b){this.l=a;this.m=b;this.j=0;this.i=null}
df.prototype.get=function(){if(0<this.j){this.j--;var a=this.i;this.i=a.next;a.next=null}else a=this.l();return a};
function ef(a,b){a.m(b);100>a.j&&(a.j++,b.next=a.i,a.i=b)}
;function ff(a,b){return a+Math.random()*(b-a)}
;function gf(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
l=gf.prototype;l.clone=function(){return new gf(this.x,this.y)};
l.equals=function(a){return a instanceof gf&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
l.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
l.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
l.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
l.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function hf(a,b){this.width=a;this.height=b}
l=hf.prototype;l.clone=function(){return new hf(this.width,this.height)};
l.aspectRatio=function(){return this.width/this.height};
l.isEmpty=function(){return!(this.width*this.height)};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
l.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function jf(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function kf(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function lf(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var mf;function nf(){var a=y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!C("Presto")&&(a=function(){var e=kf("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Wa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Ub()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Mb;c.Mb=null;e()}};
return function(e){d.next={Mb:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function of(a){y.setTimeout(function(){throw a;},0)}
;function pf(){this.j=this.i=null}
pf.prototype.add=function(a,b){var c=qf.get();c.set(a,b);this.j?this.j.next=c:this.i=c;this.j=c};
pf.prototype.remove=function(){var a=null;this.i&&(a=this.i,this.i=this.i.next,this.i||(this.j=null),a.next=null);return a};
var qf=new df(function(){return new rf},function(a){return a.reset()});
function rf(){this.next=this.scope=this.i=null}
rf.prototype.set=function(a,b){this.i=a;this.scope=b;this.next=null};
rf.prototype.reset=function(){this.next=this.scope=this.i=null};var sf,tf=!1,uf=new pf;function vf(a,b){sf||wf();tf||(sf(),tf=!0);uf.add(a,b)}
function wf(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);sf=function(){a.then(xf)}}else sf=function(){var b=xf;
"function"!==typeof y.setImmediate||y.Window&&y.Window.prototype&&!C("Edge")&&y.Window.prototype.setImmediate==y.setImmediate?(mf||(mf=nf()),mf(b)):y.setImmediate(b)}}
function xf(){for(var a;a=uf.remove();){try{a.i.call(a.scope)}catch(b){of(b)}ef(qf,a)}tf=!1}
;function yf(a){this.i=0;this.C=void 0;this.m=this.j=this.l=null;this.o=this.s=!1;if(a!=cb)try{var b=this;a.call(void 0,function(c){zf(b,2,c)},function(c){zf(b,3,c)})}catch(c){zf(this,3,c)}}
function Af(){this.next=this.context=this.onRejected=this.j=this.i=null;this.l=!1}
Af.prototype.reset=function(){this.context=this.onRejected=this.j=this.i=null;this.l=!1};
var Bf=new df(function(){return new Af},function(a){a.reset()});
function Cf(a,b,c){var d=Bf.get();d.j=a;d.onRejected=b;d.context=c;return d}
function Df(a){return new yf(function(b,c){c(a)})}
yf.prototype.then=function(a,b,c){return Ef(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
yf.prototype.$goog_Thenable=!0;l=yf.prototype;l.gb=function(a,b){return Ef(this,null,a,b)};
l.catch=yf.prototype.gb;l.cancel=function(a){if(0==this.i){var b=new Ff(a);vf(function(){Gf(this,b)},this)}};
function Gf(a,b){if(0==a.i)if(a.l){var c=a.l;if(c.j){for(var d=0,e=null,f=null,g=c.j;g&&(g.l||(d++,g.i==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.i&&1==d?Gf(c,b):(f?(d=f,d.next==c.m&&(c.m=d),d.next=d.next.next):Hf(c),If(c,e,3,b)))}a.l=null}else zf(a,3,b)}
function Jf(a,b){a.j||2!=a.i&&3!=a.i||Kf(a);a.m?a.m.next=b:a.j=b;a.m=b}
function Ef(a,b,c,d){var e=Cf(null,null,null);e.i=new yf(function(f,g){e.j=b?function(h){try{var k=b.call(d,h);f(k)}catch(m){g(m)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Ff?g(h):f(k)}catch(m){g(m)}}:g});
e.i.l=a;Jf(a,e);return e.i}
l.td=function(a){this.i=0;zf(this,2,a)};
l.ud=function(a){this.i=0;zf(this,3,a)};
function zf(a,b,c){if(0==a.i){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.i=1;a:{var d=c,e=a.td,f=a.ud;if(d instanceof yf){Jf(d,Cf(e||cb,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(m){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Qa(d))try{var k=d.then;if("function"===typeof k){Lf(d,k,e,f,a);g=!0;break a}}catch(m){f.call(a,m);g=!0;break a}g=!1}}}g||(a.C=c,a.i=b,a.l=null,Kf(a),3!=b||c instanceof Ff||Mf(a,c))}}
function Lf(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Kf(a){a.s||(a.s=!0,vf(a.Jc,a))}
function Hf(a){var b=null;a.j&&(b=a.j,a.j=b.next,b.next=null);a.j||(a.m=null);return b}
l.Jc=function(){for(var a;a=Hf(this);)If(this,a,this.i,this.C);this.s=!1};
function If(a,b,c,d){if(3==c&&b.onRejected&&!b.l)for(;a&&a.o;a=a.l)a.o=!1;if(b.i)b.i.l=null,Nf(b,c,d);else try{b.l?b.j.call(b.context):Nf(b,c,d)}catch(e){Of.call(null,e)}ef(Bf,b)}
function Nf(a,b,c){2==b?a.j.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Mf(a,b){a.o=!0;vf(function(){a.o&&Of.call(null,b)})}
var Of=of;function Ff(a){ab.call(this,a)}
Za(Ff,ab);Ff.prototype.name="cancel";function Pf(a,b){af.call(this);this.l=a||1;this.j=b||y;this.o=Wa(this.rd,this);this.s=Date.now()}
Za(Pf,af);l=Pf.prototype;l.enabled=!1;l.ca=null;function Qf(a,b){a.l=b;a.ca&&a.enabled?(a.stop(),a.start()):a.ca&&a.stop()}
l.rd=function(){if(this.enabled){var a=Date.now()-this.s;0<a&&a<.8*this.l?this.ca=this.j.setTimeout(this.o,this.l-a):(this.ca&&(this.j.clearTimeout(this.ca),this.ca=null),bf(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
l.start=function(){this.enabled=!0;this.ca||(this.ca=this.j.setTimeout(this.o,this.l),this.s=Date.now())};
l.stop=function(){this.enabled=!1;this.ca&&(this.j.clearTimeout(this.ca),this.ca=null)};
l.D=function(){Pf.Y.D.call(this);this.stop();delete this.j};
function Rf(a,b,c){if("function"===typeof a)c&&(a=Wa(a,c));else if(a&&"function"==typeof a.handleEvent)a=Wa(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:y.setTimeout(a,b||0)}
;function Sf(a){this.C=a;this.i=new Map;this.s=new Set;this.l=0;this.m=100;this.flushInterval=3E4;this.j=new Pf(this.flushInterval);this.j.aa("tick",this.ib,!1,this);this.o=!1}
l=Sf.prototype;l.kc=function(a){this.o=a;this.m=1};
function Tf(a){a.j.enabled||a.j.start();a.l++;a.l>=a.m&&a.ib()}
l.ib=function(){var a=this.i.values();a=[].concat(ia(a)).filter(function(b){return b.ya.size});
a.length&&this.C.flush(a,this.o);Uf(a);this.l=0;this.j.enabled&&this.j.stop()};
l.zc=function(a){var b=Ja.apply(1,arguments);this.i.has(a)||this.i.set(a,new ne(a,b))};
l.Kb=function(a){var b=Ja.apply(1,arguments);this.i.has(a)||this.i.set(a,new oe(a,b))};
function Vf(a,b){return a.s.has(b)?void 0:a.i.get(b)}
l.Eb=function(a){this.tc.apply(this,[a,1].concat(ia(Ja.apply(1,arguments))))};
l.tc=function(a,b){var c=Ja.apply(2,arguments),d=Vf(this,a);d&&d instanceof ne&&(d.l(b,c),Tf(this))};
l.hb=function(a,b){var c=Ja.apply(2,arguments),d=Vf(this,a);d&&d instanceof oe&&(d.l(b,c),Tf(this))};
function Uf(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function Wf(a){this.i=a;this.i.Kb("/client_streamz/bg/fil",{mb:3,lb:"rk"})}
function Xf(a){this.i=a;this.i.zc("/client_streamz/bg/fsc",{mb:3,lb:"rk"})}
function Yf(a){this.i=a;this.i.Kb("/client_streamz/bg/fsl",{mb:3,lb:"rk"})}
;function Zf(a){I.call(this,a,-1,$f)}
t(Zf,I);function ag(a){I.call(this,a,-1,bg)}
t(ag,I);function cg(a){I.call(this,a)}
t(cg,I);function dg(a){I.call(this,a)}
t(dg,I);var $f=[3,6,4],bg=[1],eg=[1,2,3],fg=[1,2,3];function gg(a){I.call(this,a,-1,hg)}
t(gg,I);var hg=[1];function ig(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function jg(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;q=m=0}
function b(r){for(var x=g,u=0;64>u;u+=4)x[u/4]=r[u]<<24|r[u+1]<<16|r[u+2]<<8|r[u+3];for(u=16;80>u;u++)r=x[u-3]^x[u-8]^x[u-14]^x[u-16],x[u]=(r<<1|r>>>31)&4294967295;r=e[0];var A=e[1],E=e[2],F=e[3],O=e[4];for(u=0;80>u;u++){if(40>u)if(20>u){var N=F^A&(E^F);var R=1518500249}else N=A^E^F,R=1859775393;else 60>u?(N=A&E|F&(A|E),R=2400959708):(N=A^E^F,R=3395469782);N=((r<<5|r>>>27)&4294967295)+N+O+R+x[u]&4294967295;O=F;F=E;E=(A<<30|A>>>2)&4294967295;A=r;r=N}e[0]=e[0]+r&4294967295;e[1]=e[1]+A&4294967295;e[2]=
e[2]+E&4294967295;e[3]=e[3]+F&4294967295;e[4]=e[4]+O&4294967295}
function c(r,x){if("string"===typeof r){r=unescape(encodeURIComponent(r));for(var u=[],A=0,E=r.length;A<E;++A)u.push(r.charCodeAt(A));r=u}x||(x=r.length);u=0;if(0==m)for(;u+64<x;)b(r.slice(u,u+64)),u+=64,q+=64;for(;u<x;)if(f[m++]=r[u++],q++,64==m)for(m=0,b(f);u+64<x;)b(r.slice(u,u+64)),u+=64,q+=64}
function d(){var r=[],x=8*q;56>m?c(h,56-m):c(h,64-(m-56));for(var u=63;56<=u;u--)f[u]=x&255,x>>>=8;b(f);for(u=x=0;5>u;u++)for(var A=24;0<=A;A-=8)r[x++]=e[u]>>A&255;return r}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var m,q;a();return{reset:a,update:c,digest:d,Fc:function(){for(var r=d(),x="",u=0;u<r.length;u++)x+="0123456789ABCDEF".charAt(Math.floor(r[u]/16))+"0123456789ABCDEF".charAt(r[u]%16);return x}}}
;function kg(a,b,c){var d=String(y.location.href);return d&&a&&b?[b,lg(ig(d),a,c||null)].join(" "):null}
function lg(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],fb(d,function(h){e.push(h)}),mg(e.join(" "));
var f=[],g=[];fb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];fb(d,function(h){e.push(h)});
a=mg(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function mg(a){var b=jg();b.update(a);return b.Fc().toLowerCase()}
;var ng={};function og(a){this.i=a||{cookie:""}}
l=og.prototype;l.isEnabled=function(){if(!y.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{ab:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
l.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Pq;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.ab}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.i.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
l.get=function(a,b){for(var c=a+"=",d=(this.i.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Mb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
l.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{ab:0,path:b,domain:c});return d};
l.qb=function(){return pg(this).keys};
l.isEmpty=function(){return!this.i.cookie};
l.clear=function(){for(var a=pg(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function pg(a){a=(a.i.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Mb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var qg=new og("undefined"==typeof document?null:document);function rg(a){return!!ng.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function sg(a){a=void 0===a?!1:a;var b=y.__SAPISID||y.__APISID||y.__3PSAPISID||y.__OVERRIDE_SID;rg(a)&&(b=b||y.__1PSAPISID);if(b)return!0;var c=new og(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID");rg(a)&&(b=b||c.get("__Secure-1PAPISID"));return!!b}
function tg(a,b,c,d){(a=y[a])||(a=(new og(document)).get(b));return a?kg(a,c,d):null}
function ug(a,b){b=void 0===b?!1:b;var c=ig(String(y.location.href)),d=[];if(sg(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?y.__SAPISID:y.__APISID;e||(e=new og(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?kg(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&rg(b)&&((b=tg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=tg("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return 0==
d.length?null:d.join(" ")}
;function vg(a){I.call(this,a,-1,wg)}
t(vg,I);var wg=[2];function xg(a){this.i=this.j=this.l=a}
xg.prototype.reset=function(){this.i=this.j=this.l};
xg.prototype.getValue=function(){return this.j};function yg(a){var b=[];zg(new Ag,a,b);return b.join("")}
function Ag(){}
function zg(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),zg(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Bg(d,c),c.push(":"),zg(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Bg(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Cg={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Dg=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Bg(a,b){b.push('"',a.replace(Dg,function(c){var d=Cg[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Cg[c]=d);return d}),'"')}
;function Eg(){}
Eg.prototype.i=null;Eg.prototype.getOptions=function(){var a;(a=this.i)||(a={},Fg(this)&&(a[0]=!0,a[1]=!0),a=this.i=a);return a};var Gg;function Hg(){}
Za(Hg,Eg);function Ig(a){return(a=Fg(a))?new ActiveXObject(a):new XMLHttpRequest}
function Fg(a){if(!a.j&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.j=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.j}
Gg=new Hg;function Jg(a){af.call(this);this.headers=new Map;this.K=a||null;this.j=!1;this.J=this.B=null;this.o=this.T="";this.l=this.R=this.A=this.P=!1;this.s=0;this.G=null;this.da="";this.W=this.X=!1}
Za(Jg,af);var Kg=/^https?$/i,Lg=["POST","PUT"],Mg=[];function Ng(a,b,c,d,e,f,g){var h=new Jg;Mg.push(h);b&&h.aa("complete",b);h.m.add("ready",h.Dc,!0,void 0,void 0);f&&(h.s=Math.max(0,f));g&&(h.X=g);h.send(a,c,d,e)}
l=Jg.prototype;l.Dc=function(){this.dispose();lb(Mg,this)};
l.send=function(a,b,c,d){if(this.B)throw Error("[goog.net.XhrIo] Object is active with another request="+this.T+"; newUri="+a);b=b?b.toUpperCase():"GET";this.T=a;this.o="";this.P=!1;this.j=!0;this.B=this.K?Ig(this.K):Ig(Gg);this.J=this.K?this.K.getOptions():Gg.getOptions();this.B.onreadystatechange=Wa(this.cc,this);try{this.getStatus(),this.R=!0,this.B.open(b,String(a),!0),this.R=!1}catch(g){this.getStatus();Og(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,
d[e]);else if("function"===typeof d.keys&&"function"===typeof d.get){e=p(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=y.FormData&&a instanceof y.FormData;!(0<=eb(Lg,b))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=p(c);for(d=b.next();!d.done;d=b.next())c=p(d.value),d=c.next().value,c=c.next().value,this.B.setRequestHeader(d,c);this.da&&(this.B.responseType=this.da);"withCredentials"in this.B&&this.B.withCredentials!==this.X&&(this.B.withCredentials=this.X);try{Pg(this),0<this.s&&(this.W=Sg(this.B),this.getStatus(),this.W?(this.B.timeout=this.s,this.B.ontimeout=Wa(this.oc,this)):
this.G=Rf(this.oc,this.s,this)),this.getStatus(),this.A=!0,this.B.send(a),this.A=!1}catch(g){this.getStatus(),Og(this,g)}};
function Sg(a){return Mc&&Xc()&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
l.oc=function(){"undefined"!=typeof Ma&&this.B&&(this.o="Timed out after "+this.s+"ms, aborting",this.getStatus(),bf(this,"timeout"),this.abort(8))};
function Og(a,b){a.j=!1;a.B&&(a.l=!0,a.B.abort(),a.l=!1);a.o=b;Tg(a);Ug(a)}
function Tg(a){a.P||(a.P=!0,bf(a,"complete"),bf(a,"error"))}
l.abort=function(){this.B&&this.j&&(this.getStatus(),this.j=!1,this.l=!0,this.B.abort(),this.l=!1,bf(this,"complete"),bf(this,"abort"),Ug(this))};
l.D=function(){this.B&&(this.j&&(this.j=!1,this.l=!0,this.B.abort(),this.l=!1),Ug(this,!0));Jg.Y.D.call(this)};
l.cc=function(){this.i()||(this.R||this.A||this.l?Vg(this):this.Uc())};
l.Uc=function(){Vg(this)};
function Vg(a){if(a.j&&"undefined"!=typeof Ma)if(a.J[1]&&4==Wg(a)&&2==a.getStatus())a.getStatus();else if(a.A&&4==Wg(a))Rf(a.cc,0,a);else if(bf(a,"readystatechange"),a.isComplete()){a.getStatus();a.j=!1;try{if(Xg(a))bf(a,"complete"),bf(a,"success");else{try{var b=2<Wg(a)?a.B.statusText:""}catch(c){b=""}a.o=b+" ["+a.getStatus()+"]";Tg(a)}}finally{Ug(a)}}}
function Ug(a,b){if(a.B){Pg(a);var c=a.B,d=a.J[0]?function(){}:null;
a.B=null;a.J=null;b||bf(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function Pg(a){a.B&&a.W&&(a.B.ontimeout=null);a.G&&(y.clearTimeout(a.G),a.G=null)}
l.isActive=function(){return!!this.B};
l.isComplete=function(){return 4==Wg(this)};
function Xg(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=nc(1,String(a.T)),!a&&y.self&&y.self.location&&(a=y.self.location.protocol.slice(0,-1)),b=!Kg.test(a?a.toLowerCase():"");c=b}return c}
function Wg(a){return a.B?a.B.readyState:0}
l.getStatus=function(){try{return 2<Wg(this)?this.B.status:-1}catch(a){return-1}};
l.getLastError=function(){return"string"===typeof this.o?this.o:String(this.o)};function Yg(a){I.call(this,a)}
t(Yg,I);function Zg(a){I.call(this,a,-1,$g)}
t(Zg,I);var $g=[1];var ah=["platform","platformVersion","architecture","model","uaFullVersion"];new Zg;function bh(a){I.call(this,a)}
t(bh,I);function ch(a){I.call(this,a,31,dh)}
t(ch,I);var dh=[3,20,27];function eh(a){I.call(this,a,17,fh)}
t(eh,I);var fh=[3,5];function gh(a){I.call(this,a,6,hh)}
t(gh,I);var hh=[5];function ih(a){I.call(this,a)}
t(ih,I);var jh;jh=new function(a,b,c){this.j=a;this.fieldName=b;this.i=c;this.isRepeated=0;this.l=ie}(175237375,{Gq:0},ih);function kh(a,b,c,d,e,f,g,h,k,m,q){af.call(this);var r=this;this.P="";this.l=[];this.Ib="";this.Jb=this.sa=-1;this.Qa=!1;this.J=this.o=null;this.G=0;this.wc=1;this.timeoutMillis=0;this.da=!1;af.call(this);this.Hb=b||function(){};
this.A=new lh(a,f);this.uc=d;this.Pa=q;this.xc=Ya(ff,0,1);this.T=e||null;this.K=c||null;this.W=g||!1;this.pageId=k||null;this.logger=null;this.withCredentials=!h;this.Ea=f||!1;!this.Ea&&(65<=ac("Chromium")||45<=ac("Firefox")||12<=ac("Safari")||(Gc()||C("iPad")||C("iPod"))&&Hc());a=D(new bh,1,1);mh(this.A,a);this.s=new xg(1E4);this.j=new Pf(this.s.getValue());re(this,this.j);m=nh(this,m);Qe(this.j,"tick",m,!1,this);this.R=new Pf(6E5);re(this,this.R);Qe(this.R,"tick",m,!1,this);this.W||this.R.start();
this.Ea||(Qe(document,"visibilitychange",function(){"hidden"===document.visibilityState&&r.X()}),Qe(document,"pagehide",this.X,!1,this))}
t(kh,af);function nh(a,b){return b?function(){b().then(function(){a.flush()})}:function(){a.flush()}}
kh.prototype.D=function(){this.X();af.prototype.D.call(this)};
function oh(a){a.T||(a.T=.01>a.xc()?"https://www.google.com/log?format=json&hasfast=true":"https://play.google.com/log?format=json&hasfast=true");return a.T}
function ph(a,b){a.s=new xg(1>b?1:b);Qf(a.j,a.s.getValue())}
kh.prototype.log=function(a){a=a.clone();var b=this.wc++;D(a,21,b);this.P&&D(a,26,this.P);if(!Qd(a,1)){b=a;var c=Date.now().toString();D(b,1,c)}null!=Qd(a,15)||D(a,15,60*(new Date).getTimezoneOffset());this.o&&(b=this.o.clone(),G(a,vg,16,b));for(;1E3<=this.l.length;)this.l.shift(),++this.G;this.l.push(a);bf(this,new qh(a));this.W||this.j.enabled||this.j.start()};
kh.prototype.flush=function(a,b){var c=this;if(0===this.l.length)a&&a();else if(this.da)rh(this);else{var d=Date.now();if(this.Jb>d&&this.sa<d)b&&b("throttled");else{var e=sh(this.A,this.l,this.G);d={};var f=this.Hb();f&&(d.Authorization=f);var g=oh(this);this.K&&(d["X-Goog-AuthUser"]=this.K,g=wc(g,"authuser",this.K));this.pageId&&(d["X-Goog-PageId"]=this.pageId,g=wc(g,"pageId",this.pageId));if(f&&this.Ib===f)b&&b("stale-auth-token");else{this.l=[];this.j.enabled&&this.j.stop();this.G=0;var h=de(e),
k;this.J&&this.J.isSupported(h.length)&&(k=this.J.compress(h));var m={url:g,body:h,Bc:1,zb:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis},q=function(u){c.s.reset();Qf(c.j,c.s.getValue());if(u){var A=null;try{var E=JSON.parse(u.replace(")]}'\n",""));A=new gh(E)}catch(F){}A&&(u=Number(Sd(A,1,"-1")),0<u&&(c.sa=Date.now(),c.Jb=c.sa+u),A=jh.l(A))&&(A=Sd(A,1,-1),-1!=A&&(c.Qa||ph(c,A)))}a&&a()},r=function(u,A){var E=Yd(e,ch,3),F=c.s;
F.i=Math.min(3E5,2*F.i);F.j=Math.min(3E5,F.i+Math.round(.2*(Math.random()-.5)*F.i));Qf(c.j,c.s.getValue());401===u&&f&&(c.Ib=f);void 0===A&&(A=500<=u&&600>u||401===u||0===u);A&&(c.l=E.concat(c.l),c.W||c.j.enabled||c.j.start());b&&b("net-send-failed",u)},x=function(){c.Pa?c.Pa.send(m,q,r):c.uc(m,q,r)};
k?k.then(function(u){m.zb["Content-Encoding"]="gzip";m.zb["Content-Type"]="application/binary";m.body=u;m.Bc=2;x()},function(){x()}):x()}}}};
kh.prototype.X=function(){this.flush()};
function rh(a){th(a,function(b,c){b=wc(b,"format","json");b=window.navigator.sendBeacon(b,de(c));a.da&&!b&&(a.da=!1);return b})}
function th(a,b){if(0!==a.l.length){var c=Dc(oh(a),"format");c=uc(c,"auth",a.Hb(),"authuser",a.K||"0");for(var d=0;10>d&&a.l.length;++d){var e=a.l.slice(0,32),f=sh(a.A,e,a.G);if(!b(c,f))break;a.G=0;a.l=a.l.slice(e.length)}a.j.enabled&&a.j.stop()}}
function qh(){te.call(this,"event-logged",void 0)}
t(qh,te);function lh(a,b){this.j=b=void 0===b?!1:b;this.uach=this.locale=null;this.i=new eh;D(this.i,2,a);b||(this.locale=document.documentElement.getAttribute("lang"));mh(this,new bh)}
function mh(a,b){G(a.i,bh,1,b);Qd(b,1)||D(b,1,1);a.j||(b=uh(a),Qd(b,5)||D(b,5,a.locale));a.uach&&(b=uh(a),Wd(b,Zg,9)||G(b,Zg,9,a.uach))}
function vh(a,b){var c=void 0===c?ah:c;b(window,c).then(function(d){a.uach=d;d=uh(a);G(d,Zg,9,a.uach);return!0}).catch(function(){return!1})}
function uh(a){a=Wd(a.i,bh,1);var b=Wd(a,Yg,11);b||(b=new Yg,G(a,Yg,11,b));return b}
function sh(a,b,c){c=void 0===c?0:c;a=a.i.clone();var d=Date.now().toString();a=D(a,4,d);b=$d(a,ch,3,b);c&&D(b,14,c);return b}
;function wh(a,b,c){Ng(a.url,function(d){d=d.target;if(Xg(d)){try{var e=d.B?d.B.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.zb,a.timeoutMillis,a.withCredentials)}
;function xh(){this.l="https://play.google.com/log?format=json&hasfast=true";this.m=!1;this.s=wh;this.i=""}
;function yh(){var a=void 0===a?"":a;var b=void 0===b?!1:b;var c=void 0===c?"":c;var d=new xh;d.i="";""!=a&&(d.l=a);b&&(d.m=!0);c&&(d.j=c);a=new kh(1828,d.J?d.J:ug,"0",d.s,d.l,d.m,!1,d.R,void 0,void 0,d.C?d.C:void 0);d.A&&mh(a.A,d.A);d.j&&(b=d.j,c=uh(a.A),D(c,7,b));d.o&&(a.J=d.o);d.i&&(a.P=d.i);d.N&&((b=d.N)?(a.o||(a.o=new vg),b=de(b),D(a.o,4,b)):a.o&&D(a.o,4,void 0,!1));d.K&&(b=d.K,a.o||(a.o=new vg),Td(a.o,2,b));d.G&&(b=d.G,a.Qa=!0,ph(a,b));d.P&&vh(a.A,d.P);this.i=a}
yh.prototype.flush=function(a){var b=a||[];if(b.length){a=new gg;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=e;var g=new Zf;g=D(g,1,f.j);for(var h=f,k=[],m=0;m<h.i.length;m++)k.push(h.i[m].lb);g=Td(g,3,k);h=[];k=[];m=p(f.ya.keys());for(var q=m.next();!q.done;q=m.next())k.push(q.value.split(","));for(m=0;m<k.length;m++){q=k[m];var r=f.m;for(var x=f.nb(q)||[],u=[],A=0;A<x.length;A++){var E=x[A];E=E&&E.Nb;var F=new dg;switch(r){case 3:Ud(F,1,fg,Number(E));break;case 2:Ud(F,2,fg,Number(E))}u.push(F)}r=
u;for(x=0;x<r.length;x++){u=r[x];A=new ag;u=G(A,dg,2,u);A=q;E=[];F=f;for(var O=[],N=0;N<F.i.length;N++)O.push(F.i[N].mb);F=O;for(O=0;O<F.length;O++){N=F[O];var R=A[O],ca=new cg;switch(N){case 3:Ud(ca,1,eg,String(R));break;case 2:Ud(ca,2,eg,Number(R));break;case 1:Ud(ca,3,eg,"true"==R)}E.push(ca)}$d(u,cg,1,E);h.push(u)}}$d(g,ag,4,h);c.push(g);e.clear()}$d(a,Zf,1,c);b=this.i;a instanceof ch?b.log(a):(c=new ch,a=de(a),a=D(c,8,a),b.log(a));this.i.flush()}};function zh(){this.o=Ah();this.s=new yh;this.i=new Sf(this.s);this.m=new Wf(this.i);this.j=new Xf(this.i);this.l=new Yf(this.i);this.Ba=window.document.location.hostname}
function Ah(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()}
;function Bh(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Ch(a){var b=this;this.Wa=!1;if(a.Nq){var c;this.ta=null!=(c=a.ta)?c:new zh}c=a.program;a=a.globalName;var d=new Bh;this.j=d.promise;this.pd=p((0,y[a].a)(c,function(e,f){Promise.resolve().then(function(){var g;if(null!=(g=b.ta)){var h=Ah()-g.o;g.m.i.hb("/client_streamz/bg/fil",h,g.Ba)}d.resolve({Ac:e,md:f})})},!0)).next().value;
this.ld=d.promise.then(function(){})}
Ch.prototype.snapshot=function(a){var b=this;if(this.Wa)throw Error("Already disposed");var c=Ah(),d;null!=(d=this.ta)&&d.j.i.Eb("/client_streamz/bg/fsc",d.Ba);return this.j.then(function(e){var f=e.Ac;return new Promise(function(g){f(function(h){var k;if(null!=(k=b.ta)){var m=Ah()-c;k.l.i.hb("/client_streamz/bg/fsl",m,k.Ba)}g(h)},[a.Pb,
a.nd])})})};
Ch.prototype.dispose=function(){var a;null!=(a=this.ta)&&a.i.ib();this.Wa=!0;this.j.then(function(b){(b=b.md)&&b()})};
Ch.prototype.i=function(){return this.Wa};var Dh=window;Db("csi.gstatic.com");Db("googleads.g.doubleclick.net");Db("partner.googleadservices.com");Db("pubads.g.doubleclick.net");Db("securepubads.g.doubleclick.net");Db("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var Eh;try{new URL("s://g"),Eh=!0}catch(a){Eh=!1}var Fh=Eh;function Gh(a,b){a.src=Ib(b);var c,d;(c=(b=null==(d=(c=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:d.call(c,"script[nonce]"))?b.nonce||b.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)}
;function Hh(a){var b=Ih;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Jh(){var a=[];Hh(function(b){a.push(b)});
return a}
var Ih={Id:"allow-forms",Jd:"allow-modals",Kd:"allow-orientation-lock",Ld:"allow-pointer-lock",Md:"allow-popups",Nd:"allow-popups-to-escape-sandbox",Od:"allow-presentation",Pd:"allow-same-origin",Qd:"allow-scripts",Rd:"allow-top-navigation",Sd:"allow-top-navigation-by-user-activation"},Kh=db(function(){return Jh()});
function Lh(){var a=Mh(),b={};fb(Kh(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Mh(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function Nh(a){this.isValid=a}
function Oh(a){return new Nh(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Ph=[Oh("data"),Oh("http"),Oh("https"),Oh("mailto"),Oh("ftp"),new Nh(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function Qh(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Rh=(new Date).getTime();var Sh="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");ia(Sh);function Th(a){af.call(this);var b=this;this.A=this.l=0;this.Z=null!=a?a:{S:function(e,f){return setTimeout(e,f)},
fa:function(e){clearTimeout(e)}};
var c,d;this.j=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.o=function(){return w(function(e){return v(e,Uh(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.A||Vh(this)}
t(Th,af);function Wh(){var a=Xh;Th.i||(Th.i=new Th(a));return Th.i}
Th.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.Z.fa(this.A);delete Th.i};
Th.prototype.L=function(){return this.j};
function Vh(a){a.A=a.Z.S(function(){var b;return w(function(c){if(1==c.i)return a.j?(null==(b=window.navigator)?0:b.onLine)?c.u(3):v(c,Uh(a),3):v(c,Uh(a),3);Vh(a);c.i=0})},3E4)}
function Uh(a,b){return a.s?a.s:a.s=new Promise(function(c){var d,e,f,g;return w(function(h){switch(h.i){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,ya(h,2,3),d&&(a.l=a.Z.S(function(){d.abort()},b||2E4)),v(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:Ba(h);a.s=void 0;a.l&&(a.Z.fa(a.l),a.l=0);g!==a.j&&(a.j=g,a.j?bf(a,"networkstatus-online"):bf(a,"networkstatus-offline"));c(g);Ca(h);break;case 2:Aa(h),g=!1,h.u(3)}})})}
;var Yh={Yh:"EMBEDDED_PLAYER_MODE_UNKNOWN",Vh:"EMBEDDED_PLAYER_MODE_DEFAULT",Xh:"EMBEDDED_PLAYER_MODE_PFP",Wh:"EMBEDDED_PLAYER_MODE_PFL"},Zh={hq:"WEB_DISPLAY_MODE_UNKNOWN",bq:"WEB_DISPLAY_MODE_BROWSER",fq:"WEB_DISPLAY_MODE_MINIMAL_UI",gq:"WEB_DISPLAY_MODE_STANDALONE",cq:"WEB_DISPLAY_MODE_FULLSCREEN"};function $h(){this.data_=[];this.i=-1}
$h.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.i=-1)};
$h.prototype.get=function(a){return!!this.data_[a]};
function ai(a){-1===a.i&&(a.i=ib(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.i}
;function bi(a,b){this.i=a[y.Symbol.iterator]();this.j=b}
bi.prototype[Symbol.iterator]=function(){return this};
bi.prototype.next=function(){var a=this.i.next();return{value:a.done?void 0:this.j.call(void 0,a.value),done:a.done}};
function ci(a,b){return new bi(a,b)}
;function di(){this.blockSize=-1}
;function ei(){this.blockSize=-1;this.blockSize=64;this.i=[];this.o=[];this.s=[];this.l=[];this.l[0]=128;for(var a=1;a<this.blockSize;++a)this.l[a]=0;this.m=this.j=0;this.reset()}
Za(ei,di);ei.prototype.reset=function(){this.i[0]=1732584193;this.i[1]=4023233417;this.i[2]=2562383102;this.i[3]=271733878;this.i[4]=3285377520;this.m=this.j=0};
function fi(a,b,c){c||(c=0);var d=a.s;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.i[0];c=a.i[1];var g=a.i[2],h=a.i[3],k=a.i[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var m=1518500249}else f=c^g^h,m=1859775393;else 60>e?(f=c&g|h&(c|g),m=2400959708):
(f=c^g^h,m=3395469782);f=(b<<5|b>>>27)+f+k+m+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.i[0]=a.i[0]+b&4294967295;a.i[1]=a.i[1]+c&4294967295;a.i[2]=a.i[2]+g&4294967295;a.i[3]=a.i[3]+h&4294967295;a.i[4]=a.i[4]+k&4294967295}
ei.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.o,f=this.j;d<b;){if(0==f)for(;d<=c;)fi(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){fi(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){fi(this,e);f=0;break}}this.j=f;this.m+=b}};
ei.prototype.digest=function(){var a=[],b=8*this.m;56>this.j?this.update(this.l,56-this.j):this.update(this.l,this.blockSize-(this.j-56));for(var c=this.blockSize-1;56<=c;c--)this.o[c]=b&255,b/=256;fi(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.i[c]>>d&255,++b;return a};function gi(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function hi(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function ii(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:gi(a).match(/\S+/g)||[],b=0<=eb(a,b));return b}
function ji(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):ii(a,"inverted-hdpi")&&hi(a,Array.prototype.filter.call(a.classList?a.classList:gi(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function ki(){}
ki.prototype.next=function(){return li};
var li={done:!0,value:void 0};function mi(a){return{value:a,done:!1}}
ki.prototype.ea=function(){return this};function ni(a){if(a instanceof oi||a instanceof pi||a instanceof qi)return a;if("function"==typeof a.next)return new oi(function(){return a});
if("function"==typeof a[Symbol.iterator])return new oi(function(){return a[Symbol.iterator]()});
if("function"==typeof a.ea)return new oi(function(){return a.ea()});
throw Error("Not an iterator or iterable.");}
function oi(a){this.j=a}
oi.prototype.ea=function(){return new pi(this.j())};
oi.prototype[Symbol.iterator]=function(){return new qi(this.j())};
oi.prototype.i=function(){return new qi(this.j())};
function pi(a){this.j=a}
t(pi,ki);pi.prototype.next=function(){return this.j.next()};
pi.prototype[Symbol.iterator]=function(){return new qi(this.j)};
pi.prototype.i=function(){return new qi(this.j)};
function qi(a){oi.call(this,function(){return a});
this.l=a}
t(qi,oi);qi.prototype.next=function(){return this.l.next()};function ri(a,b){this.j={};this.i=[];this.qa=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof ri)for(c=a.qb(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
l=ri.prototype;l.qb=function(){si(this);return this.i.concat()};
l.has=function(a){return ti(this.j,a)};
l.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||ui;si(this);for(var c,d=0;c=this.i[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function ui(a,b){return a===b}
l.isEmpty=function(){return 0==this.size};
l.clear=function(){this.j={};this.qa=this.size=this.i.length=0};
l.remove=function(a){return this.delete(a)};
l.delete=function(a){return ti(this.j,a)?(delete this.j[a],--this.size,this.qa++,this.i.length>2*this.size&&si(this),!0):!1};
function si(a){if(a.size!=a.i.length){for(var b=0,c=0;b<a.i.length;){var d=a.i[b];ti(a.j,d)&&(a.i[c++]=d);b++}a.i.length=c}if(a.size!=a.i.length){var e={};for(c=b=0;b<a.i.length;)d=a.i[b],ti(e,d)||(a.i[c++]=d,e[d]=1),b++;a.i.length=c}}
l.get=function(a,b){return ti(this.j,a)?this.j[a]:b};
l.set=function(a,b){ti(this.j,a)||(this.size+=1,this.i.push(a),this.qa++);this.j[a]=b};
l.forEach=function(a,b){for(var c=this.qb(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
l.clone=function(){return new ri(this)};
l.keys=function(){return ni(this.ea(!0)).i()};
l.values=function(){return ni(this.ea(!1)).i()};
l.entries=function(){var a=this;return ci(this.keys(),function(b){return[b,a.get(b)]})};
l.ea=function(a){si(this);var b=0,c=this.qa,d=this,e=new ki;e.next=function(){if(c!=d.qa)throw Error("The map has changed since the iterator was created");if(b>=d.i.length)return li;var f=d.i[b++];return mi(a?f:d.j[f])};
return e};
function ti(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function K(a){J.call(this);this.s=1;this.m=[];this.o=0;this.j=[];this.l={};this.A=!!a}
Za(K,J);l=K.prototype;l.subscribe=function(a,b,c){var d=this.l[a];d||(d=this.l[a]=[]);var e=this.s;this.j[e]=a;this.j[e+1]=b;this.j[e+2]=c;this.s=e+3;d.push(e);return e};
function vi(a,b,c,d){if(b=a.l[b]){var e=a.j;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.Da(b)}}
l.Da=function(a){var b=this.j[a];if(b){var c=this.l[b];0!=this.o?(this.m.push(a),this.j[a+1]=function(){}):(c&&lb(c,a),delete this.j[a],delete this.j[a+1],delete this.j[a+2])}return!!b};
l.ra=function(a,b){var c=this.l[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];wi(this.j[g+1],this.j[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f&&!this.i();e++)g=c[e],this.j[g+1].apply(this.j[g+2],d)}finally{if(this.o--,0<this.m.length&&0==this.o)for(;c=this.m.pop();)this.Da(c)}}return 0!=e}return!1};
function wi(a,b,c){vf(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.l[a];b&&(b.forEach(this.Da,this),delete this.l[a])}else this.j.length=0,this.l={}};
l.D=function(){K.Y.D.call(this);this.clear();this.m.length=0};function xi(a){this.i=a}
xi.prototype.set=function(a,b){void 0===b?this.i.remove(a):this.i.set(a,yg(b))};
xi.prototype.get=function(a){try{var b=this.i.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
xi.prototype.remove=function(a){this.i.remove(a)};function yi(a){this.i=a}
Za(yi,xi);function zi(a){this.data=a}
function Ai(a){return void 0===a||a instanceof zi?a:new zi(a)}
yi.prototype.set=function(a,b){yi.Y.set.call(this,a,Ai(b))};
yi.prototype.j=function(a){a=yi.Y.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
yi.prototype.get=function(a){if(a=this.j(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Bi(a){this.i=a}
Za(Bi,yi);Bi.prototype.set=function(a,b,c){if(b=Ai(b)){if(c){if(c<Date.now()){Bi.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}Bi.Y.set.call(this,a,b)};
Bi.prototype.j=function(a){var b=Bi.Y.j.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())Bi.prototype.remove.call(this,a);else return b}};function Ci(){}
;function Di(){}
Za(Di,Ci);Di.prototype[Symbol.iterator]=function(){return ni(this.ea(!0)).i()};
Di.prototype.clear=function(){var a=Array.from(this);a=p(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Ei(a){this.i=a}
Za(Ei,Di);l=Ei.prototype;l.isAvailable=function(){if(!this.i)return!1;try{return this.i.setItem("__sak","1"),this.i.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.i.setItem(a,b)}catch(c){if(0==this.i.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.i.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.i.removeItem(a)};
l.ea=function(a){var b=0,c=this.i,d=new ki;d.next=function(){if(b>=c.length)return li;var e=c.key(b++);if(a)return mi(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return mi(e)};
return d};
l.clear=function(){this.i.clear()};
l.key=function(a){return this.i.key(a)};function Fi(){var a=null;try{a=window.localStorage||null}catch(b){}this.i=a}
Za(Fi,Ei);function Gi(a,b){this.j=a;this.i=null;var c;if(c=Mc)c=!(9<=Number($c));if(c){Hi||(Hi=new ri);this.i=Hi.get(a);this.i||(b?this.i=document.getElementById(b):(this.i=document.createElement("userdata"),this.i.addBehavior("#default#userData"),document.body.appendChild(this.i)),Hi.set(a,this.i));try{this.i.load(this.j)}catch(d){this.i=null}}}
Za(Gi,Di);var Ii={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Hi=null;function Ji(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Ii[b]})}
l=Gi.prototype;l.isAvailable=function(){return!!this.i};
l.set=function(a,b){this.i.setAttribute(Ji(a),b);Ki(this)};
l.get=function(a){a=this.i.getAttribute(Ji(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.i.removeAttribute(Ji(a));Ki(this)};
l.ea=function(a){var b=0,c=this.i.XMLDocument.documentElement.attributes,d=new ki;d.next=function(){if(b>=c.length)return li;var e=c[b++];if(a)return mi(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return mi(e)};
return d};
l.clear=function(){for(var a=this.i.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Ki(this)};
function Ki(a){try{a.i.save(a.j)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Li(a,b){this.j=a;this.i=b+"::"}
Za(Li,Di);Li.prototype.set=function(a,b){this.j.set(this.i+a,b)};
Li.prototype.get=function(a){return this.j.get(this.i+a)};
Li.prototype.remove=function(a){this.j.remove(this.i+a)};
Li.prototype.ea=function(a){var b=this.j[Symbol.iterator](),c=this,d=new ki;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.i.length)!=c.i;){e=b.next();if(e.done)return e;e=e.value}return mi(a?e.slice(c.i.length):c.j.get(e))};
return d};function Mi(a){I.call(this,a)}
t(Mi,I);function Ni(a){I.call(this,a)}
t(Ni,I);Ni.prototype.getKey=function(){return Qd(this,1)};
Ni.prototype.getValue=function(){return Qd(this,2===Vd(this,Oi)?2:-1)};
Ni.prototype.setValue=function(a){return Ud(this,2,Oi,a)};
var Oi=[2,3,4,5,6];function Pi(a){I.call(this,a)}
t(Pi,I);function Qi(a){I.call(this,a)}
t(Qi,I);function Ri(a){I.call(this,a,-1,Si)}
t(Ri,I);var Si=[2];function Ti(a){I.call(this,a,-1,Ui)}
t(Ti,I);Ti.prototype.getPlayerType=function(){return Qd(this,36)};
Ti.prototype.setHomeGroupInfo=function(a){return G(this,Ri,81,a)};
var Ui=[9,66,24,32,86,100,101];function Vi(a){I.call(this,a,-1,Wi)}
t(Vi,I);var Wi=[15,26,28];function Xi(a){I.call(this,a)}
t(Xi,I);Xi.prototype.setToken=function(a){return D(this,2,a)};function Yi(a){I.call(this,a,-1,Zi)}
t(Yi,I);Yi.prototype.setSafetyMode=function(a){return D(this,5,a)};
var Zi=[12];function $i(a){I.call(this,a,-1,aj)}
t($i,I);$i.prototype.s=function(a){G(this,Ti,1,a)};
var aj=[12];function bj(a){this.name=a}
;var cj=new bj("continuationCommand");var dj=new bj("webCommandMetadata");var ej=new bj("signalServiceEndpoint");var fj=new bj("feedbackEndpoint");function gj(a){I.call(this,a,-1,hj)}
t(gj,I);function ij(a){I.call(this,a)}
t(ij,I);ij.prototype.getKey=function(){return Sd(this,1,"")};
ij.prototype.getValue=function(){return Sd(this,2,"")};
ij.prototype.setValue=function(a){return D(this,2,a)};
var hj=[4,5];function jj(a){I.call(this,a)}
t(jj,I);function kj(a){I.call(this,a)}
t(kj,I);var lj=[2,3,4];function mj(a){I.call(this,a)}
t(mj,I);mj.prototype.getMessage=function(){return Sd(this,1,"")};function nj(a){I.call(this,a)}
t(nj,I);function oj(a){I.call(this,a)}
t(oj,I);function pj(a){I.call(this,a,-1,qj)}
t(pj,I);var qj=[10,17];function rj(a){I.call(this,a)}
t(rj,I);function sj(a){I.call(this,a)}
t(sj,I);sj.prototype.V=function(a){D(this,1,a)};function tj(a){I.call(this,a)}
t(tj,I);function uj(a){I.call(this,a)}
t(uj,I);function vj(a){I.call(this,a)}
t(vj,I);function wj(a){I.call(this,a,-1,xj)}
t(wj,I);wj.prototype.getVideoData=function(){return Wd(this,vj,15)};
var xj=[4];function yj(a){I.call(this,a)}
t(yj,I);function zj(a,b){G(a,tj,1,b)}
yj.prototype.V=function(a){D(this,2,a)};
function Aj(a){I.call(this,a)}
t(Aj,I);function Bj(a,b){G(a,tj,1,b)}
;function Cj(a){I.call(this,a,-1,Dj)}
t(Cj,I);Cj.prototype.V=function(a){D(this,1,a)};
function Ej(a,b){G(a,tj,2,b)}
var Dj=[3];function Fj(a){I.call(this,a)}
t(Fj,I);Fj.prototype.V=function(a){D(this,1,a)};function Gj(a){I.call(this,a)}
t(Gj,I);Gj.prototype.V=function(a){D(this,1,a)};function Hj(a){I.call(this,a)}
t(Hj,I);Hj.prototype.V=function(a){D(this,1,a)};function Ij(a){I.call(this,a)}
t(Ij,I);Ij.prototype.V=function(a){D(this,1,a)};function Jj(a){I.call(this,a)}
t(Jj,I);function Kj(a){I.call(this,a)}
t(Kj,I);function Lj(a){I.call(this,a,-1,Mj)}
t(Lj,I);Lj.prototype.getPlayerType=function(){return Sd(this,7,0)};
Lj.prototype.setVideoId=function(a){return D(this,19,a)};
function Nj(a,b){ae(a,68,Oj,b)}
function Oj(a){I.call(this,a)}
t(Oj,I);Oj.prototype.getId=function(){return Sd(this,2,"")};
var Mj=[83,68];function Pj(a){I.call(this,a)}
t(Pj,I);function Qj(a){I.call(this,a)}
t(Qj,I);function lk(a){I.call(this,a)}
t(lk,I);function mk(a){I.call(this,a,442)}
t(mk,I);
var nk=[23,24,11,6,7,5,2,3,13,20,21,22,28,32,37,229,241,45,59,225,288,72,73,78,208,156,202,215,74,76,79,80,111,85,91,97,100,102,105,119,126,127,136,146,148,151,157,158,159,163,164,168,176,222,383,177,178,179,411,184,188,189,190,191,193,194,195,196,197,198,199,200,201,402,320,203,204,205,206,258,259,260,261,327,209,219,226,227,232,233,234,240,244,247,248,249,251,256,257,266,254,255,270,272,278,291,293,300,304,308,309,310,311,313,314,319,321,323,324,328,330,331,332,334,337,338,340,344,348,350,351,352,
353,354,355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,388,389,403,410,412,429,413,414,415,416,417,418,430,423,424,425,426,427,431,117,439,441];var ok={Zi:0,Ki:1,Qi:2,Ri:4,Wi:8,Si:16,Ti:32,Yi:64,Xi:128,Mi:256,Oi:512,Vi:1024,Ni:2048,Pi:4096,Li:8192,Ui:16384};function pk(a){I.call(this,a)}
t(pk,I);function qk(a){I.call(this,a)}
t(qk,I);qk.prototype.setVideoId=function(a){return Ud(this,1,rk,a)};
qk.prototype.getPlaylistId=function(){return Qd(this,2===Vd(this,rk)?2:-1)};
var rk=[1,2];function sk(a){I.call(this,a,-1,tk)}
t(sk,I);var tk=[3];var uk=new bj("webPlayerShareEntityServiceEndpoint");var vk=new bj("playlistEditEndpoint");var wk=new bj("modifyChannelNotificationPreferenceEndpoint");var xk=new bj("unsubscribeEndpoint");var yk=new bj("subscribeEndpoint");function zk(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Ak=y.window,Bk,Ck,Dk=(null==Ak?void 0:null==(Bk=Ak.yt)?void 0:Bk.config_)||(null==Ak?void 0:null==(Ck=Ak.ytcfg)?void 0:Ck.data_)||{};z("yt.config_",Dk);function Ek(){zk(Dk,arguments)}
function L(a,b){return a in Dk?Dk[a]:b}
function Fk(){var a=Dk.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;function M(a){a=Gk(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Hk(a,b){a=Gk(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Ik(){return L("EXPERIMENTS_TOKEN","")}
function Gk(a){var b=L("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:L("EXPERIMENT_FLAGS",{})[a]}
function Jk(){var a=[],b=L("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=L("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var Kk=[];function Lk(a){Kk.forEach(function(b){return b(a)})}
function Mk(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Nk(b)}}:a}
function Nk(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=L("ERRORS",[]),e.push([a,"ERROR",b,c,d]),Ek("ERRORS",e));Lk(a)}
function Ok(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=L("ERRORS",[]),e.push([a,"WARNING",b,c,d]),Ek("ERRORS",e))}
;function Pk(){var a=Qk;B("yt.ads.biscotti.getId_")||z("yt.ads.biscotti.getId_",a)}
function Rk(a){z("yt.ads.biscotti.lastId_",a)}
;var Sk=/^[\w.]*$/,Tk={q:!0,search_query:!0};function Uk(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Vk(f[0]||""),h=Vk(f[1]||"");g in c?Array.isArray(c[g])?mb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(r){var k=r,m=f[0],q=String(Uk);k.args=[{key:m,value:f[1],query:a,method:Wk==q?"unchanged":q}];Tk.hasOwnProperty(m)||Ok(k)}}return c}
var Wk=String(Uk);function Xk(a){var b=[];ob(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];fb(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Yk(a){"?"==a.charAt(0)&&(a=a.substr(1));return Uk(a,"&")}
function Zk(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),Yk(1<a.length?a[1]:a[0])):{}}
function $k(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Yk(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return vc(a,e)+d}
function al(a){if(!b)var b=window.location.href;var c=nc(1,a),d=oc(a);c&&d?(a=a.match(lc),b=b.match(lc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?oc(b)==d&&(Number(nc(4,b))||null)==(Number(nc(4,a))||null):!0;return a}
function Vk(a){return a&&a.match(Sk)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function bl(a){var b=cl;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Rh;e.flash="0";a:{try{var f=b.i.top.location.href}catch(ea){f=2;break a}f=f?f===b.j.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Dh:g;try{var h=g.history.length}catch(ea){h=0}e.u_his=h;var k;e.u_h=null==(k=Dh.screen)?void 0:k.height;var m;e.u_w=null==(m=Dh.screen)?void 0:m.width;var q;e.u_ah=null==(q=Dh.screen)?void 0:q.availHeight;var r;e.u_aw=
null==(r=Dh.screen)?void 0:r.availWidth;var x;e.u_cd=null==(x=Dh.screen)?void 0:x.colorDepth}catch(ea){}h=b.i;try{var u=h.screenX;var A=h.screenY}catch(ea){}try{var E=h.outerWidth;var F=h.outerHeight}catch(ea){}try{var O=h.innerWidth;var N=h.innerHeight}catch(ea){}try{var R=h.screenLeft;var ca=h.screenTop}catch(ea){}try{O=h.innerWidth,N=h.innerHeight}catch(ea){}try{var V=h.screen.availWidth;var nb=h.screen.availTop}catch(ea){}u=[R,ca,u,A,V,nb,E,F,O,N];try{var Xa=(b.i.top||window).document,la="CSS1Compat"==
Xa.compatMode?Xa.documentElement:Xa.body;var H=(new hf(la.clientWidth,la.clientHeight)).round()}catch(ea){H=new hf(-12245933,-12245933)}Xa=H;H={};var ka=void 0===ka?y:ka;la=new $h;ka.SVGElement&&ka.document.createElementNS&&la.set(0);A=Lh();A["allow-top-navigation-by-user-activation"]&&la.set(1);A["allow-popups-to-escape-sandbox"]&&la.set(2);ka.crypto&&ka.crypto.subtle&&la.set(3);ka.TextDecoder&&ka.TextEncoder&&la.set(4);ka=ai(la);H.bc=ka;H.bih=Xa.height;H.biw=Xa.width;H.brdim=u.join();b=b.j;b=(H.vis=
b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,H.wgl=!!Dh.WebGLRenderingContext,H);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var cl=new function(){var a=window.document;this.i=window;this.j=a};
z("yt.ads_.signals_.getAdSignalsString",function(a){return Xk(bl(a))});Date.now();var dl="XMLHttpRequest"in y?function(){return new XMLHttpRequest}:null;
function el(){if(!dl)return null;var a=dl();return"open"in a?a:null}
function fl(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function gl(a,b){"function"===typeof a&&(a=Mk(a));return window.setTimeout(a,b)}
function hl(a){window.clearTimeout(a)}
;var il={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},jl="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ia(Sh)),kl=!1;
function ll(a,b){b=void 0===b?{}:b;var c=al(a),d=M("web_ajax_ignore_global_headers_if_set"),e;for(e in il){var f=L(il[e]);"X-Goog-Visitor-Id"!==e||f||(f=L("VISITOR_DATA"));!f||!c&&oc(a)||d&&void 0!==b[e]||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!oc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!oc(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||
!oc(a))b["X-YouTube-Ad-Signals"]=Xk(bl());return b}
function ml(a){var b=window.location.search,c=oc(a);M("debug_handle_relative_url_for_query_forward_killswitch")||c||!al(a)||(c=document.location.hostname);var d=mc(nc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Yk(b),f={};fb(jl,function(g){e[g]&&(f[g]=e[g])});
return $k(a,f||{},!1)}
function nl(a,b){var c=b.format||"JSON";a=ol(a,b);var d=pl(a,b),e=!1,f=ql(a,function(k){if(!e){e=!0;h&&hl(h);var m=fl(k),q=null,r=400<=k.status&&500>k.status,x=500<=k.status&&600>k.status;if(m||r||x)q=rl(a,c,k,b.convertToSafeHtml);if(m)a:if(k&&204==k.status)m=!0;else{switch(c){case "XML":m=0==parseInt(q&&q.return_code,10);break a;case "RAW":m=!0;break a}m=!!q}q=q||{};r=b.context||y;m?b.onSuccess&&b.onSuccess.call(r,k,q):b.onError&&b.onError.call(r,k,q);b.onFinish&&b.onFinish.call(r,k,q)}},b.method,
d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=gl(function(){e||(e=!0,f.abort(),hl(h),g.call(b.context||y,f))},d)}return f}
function ol(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=L("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=$k(a,b||{},!0);return a}
function pl(a,b){var c=L("XSRF_FIELD_NAME"),d=L("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=L("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||oc(a)&&!b.withCredentials&&oc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Yk(e),yb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):tc(e));f=e||f&&!rb(f);!kl&&f&&"POST"!=b.method&&(kl=
!0,Nk(Error("AJAX request with postData should use POST")));return e}
function rl(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Ok(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?sl(a):null)e={},fb(a.getElementsByTagName("*"),function(g){e[g.tagName]=tl(g)})}d&&ul(e);
return e}
function ul(a){if(Qa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;Db("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=a[b],e=Ab();d=e?e.createHTML(d):d;a[c]=new ec(d)}else ul(a[b])}}
function sl(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function tl(a){var b="";fb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function ql(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Mk(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=el();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;M("debug_forward_web_query_parameters")&&(a=ml(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=ll(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function vl(a){var b=this;this.j=void 0;this.i=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.j=c});
a.addEventListener("appinstalled",function(){b.i=!0},{once:!0})}
function wl(){if(!y.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return y.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":y.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":y.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":y.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function xl(a,b,c,d,e){qg.set(""+a,b,{ab:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function yl(){if(!qg.isEnabled())return!1;if(!qg.isEmpty())return!0;qg.set("TESTCOOKIESENABLED","1",{ab:60});if("1"!==qg.get("TESTCOOKIESENABLED"))return!1;qg.remove("TESTCOOKIESENABLED");return!0}
;var zl=B("ytglobal.prefsUserPrefsPrefs_")||{};z("ytglobal.prefsUserPrefsPrefs_",zl);function Al(){this.i=L("ALT_PREF_COOKIE_NAME","PREF");this.j=L("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=qg.get(""+this.i,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(zl[d]=c.toString())}}}
Al.prototype.get=function(a,b){Bl(a);Cl(a);a=void 0!==zl[a]?zl[a].toString():null;return null!=a?a:b?b:""};
Al.prototype.set=function(a,b){Bl(a);Cl(a);if(null==b)throw Error("ExpectedNotNull");zl[a]=b.toString()};
function Dl(a){return!!((El("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
Al.prototype.remove=function(a){Bl(a);Cl(a);delete zl[a]};
Al.prototype.clear=function(){for(var a in zl)delete zl[a]};
function Cl(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Bl(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function El(a){a=void 0!==zl[a]?zl[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Na(Al);var Fl={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Gl={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},Hl={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},Il={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function Jl(){var a=y.navigator;return a?a.connection:void 0}
function Kl(){var a=Jl();if(a){var b=Fl[a.type||"unknown"]||"CONN_UNKNOWN";a=Fl[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function Ll(){var a=Jl();if(null!=a&&a.effectiveType)return Il.hasOwnProperty(a.effectiveType)?Il[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function Ml(){return"INNERTUBE_API_KEY"in Dk&&"INNERTUBE_API_VERSION"in Dk}
function Nl(){return{innertubeApiKey:L("INNERTUBE_API_KEY"),innertubeApiVersion:L("INNERTUBE_API_VERSION"),sb:L("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Wb:L("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Nc:L("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:L("INNERTUBE_CONTEXT_CLIENT_VERSION"),Yb:L("INNERTUBE_CONTEXT_HL"),Xb:L("INNERTUBE_CONTEXT_GL"),Oc:L("INNERTUBE_HOST_OVERRIDE")||"",Qc:!!L("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Pc:!!L("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:L("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Ol(a){var b={client:{hl:a.Yb,gl:a.Xb,clientName:a.Wb,clientVersion:a.innertubeContextClientVersion,configInfo:a.sb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=y.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=Ik();""!==c&&(b.client.experimentsToken=c);c=Jk();0<c.length&&(b.request={internalExperimentFlags:c});Pl(a,void 0,b);Ql(void 0,b);Rl(a,void 0,b);Sl(void 0,b);L("DELEGATED_SESSION_ID")&&!M("pageid_as_header_web")&&(b.user={onBehalfOfUser:L("DELEGATED_SESSION_ID")});
a=Object;c=a.assign;for(var d=b.client,e={},f=p(Object.entries(Yk(L("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=p(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function Tl(a){var b=new $i,c=new Ti;D(c,1,a.Yb);D(c,2,a.Xb);D(c,16,a.Nc);D(c,17,a.innertubeContextClientVersion);if(a.sb){var d=a.sb,e=new Pi;d.coldConfigData&&D(e,1,d.coldConfigData);d.appInstallData&&D(e,6,d.appInstallData);d.coldHashData&&D(e,3,d.coldHashData);d.hotHashData&&D(e,5,d.hotHashData);G(c,Pi,62,e)}(d=y.devicePixelRatio)&&1!=d&&D(c,65,d);d=Ik();""!==d&&D(c,54,d);d=Jk();if(0<d.length){e=new Vi;for(var f=0;f<d.length;f++){var g=new Ni;D(g,1,d[f].key);g.setValue(d[f].value);ae(e,15,Ni,
g)}G(b,Vi,5,e)}Pl(a,c);Ql(c);Rl(a,c);Sl(c);L("DELEGATED_SESSION_ID")&&!M("pageid_as_header_web")&&(a=new Yi,D(a,3,L("DELEGATED_SESSION_ID")));a=p(Object.entries(Yk(L("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=p(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?D(c,12,e):"cmodel"===d?D(c,13,e):"cbr"===d?D(c,87,e):"cbrver"===d?D(c,88,e):"cos"===d?D(c,18,e):"cosver"===d?D(c,19,e):"cplatform"===d&&D(c,42,e);b.s(c);return b}
function Pl(a,b,c){a=a.Wb;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=Wd(b,Qi,96)||new Qi;var d=wl();d=Object.keys(Zh).indexOf(d);d=-1===d?null:d;null!==d&&D(c,3,d);G(b,Qi,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=wl())}
function Ql(a,b){var c;if(M("web_log_memory_total_kbytes")&&(null==(c=y.navigator)?0:c.deviceMemory)){var d;c=null==(d=y.navigator)?void 0:d.deviceMemory;a?D(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function Rl(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=Wd(b,Pi,62))?d:new Pi;D(c,6,a.appInstallData);G(b,Pi,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Sl(a,b){var c=Kl();c&&(a?D(a,61,Gl[c]):b&&(b.client.connectionType=c));M("web_log_effective_connection_type")&&(c=Ll())&&(a?D(a,94,Hl[c]):b&&(b.client.effectiveConnectionType=c))}
function Ul(a,b,c){c=void 0===c?{}:c;var d={};L("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":L("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||L("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.zq||L("AUTHORIZATION"))||(a?b="Bearer "+B("gapi.auth.getToken")().yq:b=ug([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=L("SESSION_INDEX",0),M("pageid_as_header_web")&&(d["X-Goog-PageId"]=L("DELEGATED_SESSION_ID")));return d}
;function Vl(a){a=Object.assign({},a);delete a.Authorization;var b=ug();if(b){var c=new ei;c.update(L("INNERTUBE_API_KEY"));c.update(b);a.hash=fd(c.digest(),3)}return a}
;function Wl(a){var b=new Fi;(b=b.isAvailable()?a?new Li(b,a):b:null)||(a=new Gi(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.i=(a=b)?new Bi(a):null;this.j=document.domain||window.location.hostname}
Wl.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.i)try{this.i.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(yg(b))}catch(f){return}else e=escape(b);xl(a,e,c,this.j)};
Wl.prototype.get=function(a,b){var c=void 0,d=!this.i;if(!d)try{c=this.i.get(a)}catch(e){d=!0}if(d&&(c=qg.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Wl.prototype.remove=function(a){this.i&&this.i.remove(a);var b=this.j;qg.remove(""+a,"/",void 0===b?"youtube.com":b)};var Xl=window,P=Xl.ytcsi&&Xl.ytcsi.now?Xl.ytcsi.now:Xl.performance&&Xl.performance.timing&&Xl.performance.now&&Xl.performance.timing.navigationStart?function(){return Xl.performance.timing.navigationStart+Xl.performance.now()}:function(){return(new Date).getTime()};var Yl;function Zl(){Yl||(Yl=new Wl("yt.innertube"));return Yl}
function $l(a,b,c,d){if(d)return null;d=Zl().get("nextId",!0)||1;var e=Zl().get("requests",!0)||{};e[d]={method:a,request:b,authState:Vl(c),requestTime:Math.round(P())};Zl().set("nextId",d+1,86400,!0);Zl().set("requests",e,86400,!0);return d}
function am(a){var b=Zl().get("requests",!0)||{};delete b[a];Zl().set("requests",b,86400,!0)}
function bm(a){var b=Zl().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(P())-d.requestTime)){var e=d.authState,f=Vl(Ul(!1));ub(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(P())),cm(a,d.method,e,{}));delete b[c]}}Zl().set("requests",b,86400,!0)}}
;function dm(){}
dm.prototype.S=function(a,b){return em(a,1,b)};
function fm(a,b){em(a,2,b)}
function gm(a){var b=B("yt.scheduler.instance.addImmediateJob");b?b(a):a()}
;function hm(){dm.apply(this,arguments)}
t(hm,dm);function im(){hm.i||(hm.i=new hm);return hm.i}
function em(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):gl(a,c||0)}
hm.prototype.fa=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=B("yt.scheduler.instance.cancelJob");b?b(a):hl(a)}};
hm.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};
hm.prototype.pause=function(){var a=B("yt.scheduler.instance.pause");a&&a()};var Xh=im();var jm=ad||bd;function km(a){var b=Tb();return b?0<=b.toLowerCase().indexOf(a):!1}
;var lm=function(){var a;return function(){a||(a=new Wl("ytidb"));return a}}();
function mm(){var a;return null==(a=lm())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var nm=[],om,pm=!1;function qm(){var a={};for(om=new rm(void 0===a.handleError?sm:a.handleError,void 0===a.logEvent?tm:a.logEvent);0<nm.length;)switch(a=nm.shift(),a.type){case "ERROR":om.handleError(a.payload);break;case "EVENT":om.logEvent(a.eventType,a.payload)}}
function um(a){pm||(om?om.handleError(a):(nm.push({type:"ERROR",payload:a}),10<nm.length&&nm.shift()))}
function vm(a,b){pm||(om?om.logEvent(a,b):(nm.push({type:"EVENT",eventType:a,payload:b}),10<nm.length&&nm.shift()))}
;function Q(a){var b=Ja.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ia(b))}
t(Q,Error);function wm(){try{return xm(),!0}catch(a){return!1}}
function xm(a){if(void 0!==L("DATASYNC_ID"))return L("DATASYNC_ID");throw new Q("Datasync ID not set",void 0===a?"unknown":a);}
;function ym(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function zm(a){return a.substr(0,a.indexOf(":"))||a}
;var Am={},Bm=(Am.AUTH_INVALID="No user identifier specified.",Am.EXPLICIT_ABORT="Transaction was explicitly aborted.",Am.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Am.MISSING_INDEX="Index not created.",Am.MISSING_OBJECT_STORES="Object stores not created.",Am.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Am.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Am.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Am.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Am.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Am.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Am.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Am),Cm={},Dm=(Cm.AUTH_INVALID="ERROR",Cm.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Cm.EXPLICIT_ABORT="IGNORED",Cm.IDB_NOT_SUPPORTED="ERROR",Cm.MISSING_INDEX=
"WARNING",Cm.MISSING_OBJECT_STORES="ERROR",Cm.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Cm.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Cm.QUOTA_EXCEEDED="WARNING",Cm.QUOTA_MAYBE_EXCEEDED="WARNING",Cm.UNKNOWN_ABORT="WARNING",Cm.INCOMPATIBLE_DB_VERSION="WARNING",Cm),Em={},Fm=(Em.AUTH_INVALID=!1,Em.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Em.EXPLICIT_ABORT=!1,Em.IDB_NOT_SUPPORTED=!1,Em.MISSING_INDEX=!1,Em.MISSING_OBJECT_STORES=!1,Em.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Em.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Em.QUOTA_EXCEEDED=!1,Em.QUOTA_MAYBE_EXCEEDED=!0,Em.UNKNOWN_ABORT=!0,Em.INCOMPATIBLE_DB_VERSION=!1,Em);function Gm(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Bm[a]:c;d=void 0===d?Dm[a]:d;e=void 0===e?Fm[a]:e;Q.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.i=e;Object.setPrototypeOf(this,Gm.prototype)}
t(Gm,Q);function Hm(a,b){Gm.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Bm.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Hm.prototype)}
t(Hm,Gm);function Im(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Im.prototype)}
t(Im,Error);var Jm=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Km(a,b,c,d){b=zm(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Gm)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new Gm("QUOTA_EXCEEDED",a);if(cd&&"UnknownError"===e.name)return new Gm("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Im)return new Gm("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Jm.some(function(f){return e.message.includes(f)}))return new Gm("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new Gm("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",dc:e.name})];e.level="WARNING";return e}
function Lm(a,b,c){var d=mm();return new Gm("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Mm(a){if(!a)throw Error();throw a;}
function Nm(a){return a}
function Om(a){this.i=a}
function Pm(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=p(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=p(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.i=[];this.onRejected=[];a=a.i;try{a(c,b)}catch(e){b(e)}}
Pm.all=function(a){return new Pm(new Om(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={xa:0};f.xa<a.length;f={xa:f.xa},++f.xa)Pm.resolve(a[f.xa]).then(function(g){return function(h){d[g.xa]=h;e--;0===e&&b(d)}}(f)).catch(function(g){c(g)})}))};
Pm.resolve=function(a){return new Pm(new Om(function(b,c){a instanceof Pm?a.then(b,c):b(a)}))};
Pm.reject=function(a){return new Pm(new Om(function(b,c){c(a)}))};
Pm.prototype.then=function(a,b){var c=this,d=null!=a?a:Nm,e=null!=b?b:Mm;return new Pm(new Om(function(f,g){"PENDING"===c.state.status?(c.i.push(function(){Qm(c,c,d,f,g)}),c.onRejected.push(function(){Rm(c,c,e,f,g)})):"FULFILLED"===c.state.status?Qm(c,c,d,f,g):"REJECTED"===c.state.status&&Rm(c,c,e,f,g)}))};
Pm.prototype.catch=function(a){return this.then(void 0,a)};
function Qm(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Pm?Sm(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Rm(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Pm?Sm(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Sm(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Pm?Sm(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Tm(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Um(a){return new Promise(function(b,c){Tm(a,b,c)})}
function Vm(a){return new Pm(new Om(function(b,c){Tm(a,b,c)}))}
;function Wm(a,b){return new Pm(new Om(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function Xm(a,b){this.i=a;this.options=b;this.transactionCount=0;this.l=Math.round(P());this.j=!1}
l=Xm.prototype;l.add=function(a,b,c){return Ym(this,[a],{mode:"readwrite",U:!0},function(d){return d.objectStore(a).add(b,c)})};
l.clear=function(a){return Ym(this,[a],{mode:"readwrite",U:!0},function(b){return b.objectStore(a).clear()})};
l.close=function(){this.i.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
l.count=function(a,b){return Ym(this,[a],{mode:"readonly",U:!0},function(c){return c.objectStore(a).count(b)})};
function Zm(a,b,c){a=a.i.createObjectStore(b,c);return new $m(a)}
l.delete=function(a,b){return Ym(this,[a],{mode:"readwrite",U:!0},function(c){return c.objectStore(a).delete(b)})};
l.get=function(a,b){return Ym(this,[a],{mode:"readonly",U:!0},function(c){return c.objectStore(a).get(b)})};
function an(a,b){return Ym(a,["LogsRequestsStore"],{mode:"readwrite",U:!0},function(c){c=c.objectStore("LogsRequestsStore");return Vm(c.i.put(b,void 0))})}
l.objectStoreNames=function(){return Array.from(this.i.objectStoreNames)};
function Ym(a,b,c,d){var e,f,g,h,k,m,q,r,x,u,A,E;return w(function(F){switch(F.i){case 1:var O={mode:"readonly",U:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?O.mode=c:Object.assign(O,c);e=O;a.transactionCount++;f=e.U?3:1;g=0;case 2:if(h){F.u(3);break}g++;k=Math.round(P());ya(F,4);m=a.i.transaction(b,e.mode);O=new bn(m);O=cn(O,d);return v(F,O,6);case 6:return q=F.j,r=Math.round(P()),dn(a,k,r,g,void 0,b.join(),e),F.return(q);case 4:x=Aa(F);u=Math.round(P());A=Km(x,a.i.name,b.join(),a.i.version);
if((E=A instanceof Gm&&!A.i)||g>=f)dn(a,k,u,g,A,b.join(),e),h=A;F.u(2);break;case 3:return F.return(Promise.reject(h))}})}
function dn(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Gm&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&vm("QUOTA_EXCEEDED",{dbName:zm(a.i.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Gm&&"UNKNOWN_ABORT"===e.type&&(c-=a.l,0>c&&c>=Math.pow(2,31)&&(c=0),vm("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.j=!0),en(a,!1,d,f,b,g.tag),um(e)):en(a,!0,d,f,b,g.tag)}
function en(a,b,c,d,e,f){vm("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.j,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
l.getName=function(){return this.i.name};
function $m(a){this.i=a}
l=$m.prototype;l.add=function(a,b){return Vm(this.i.add(a,b))};
l.autoIncrement=function(){return this.i.autoIncrement};
l.clear=function(){return Vm(this.i.clear()).then(function(){})};
l.count=function(a){return Vm(this.i.count(a))};
function fn(a,b){return gn(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
l.delete=function(a){return a instanceof IDBKeyRange?fn(this,a):Vm(this.i.delete(a))};
l.get=function(a){return Vm(this.i.get(a))};
l.index=function(a){try{return new hn(this.i.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Im(a,this.i.name);throw b;}};
l.getName=function(){return this.i.name};
l.keyPath=function(){return this.i.keyPath};
function gn(a,b,c){a=a.i.openCursor(b.query,b.direction);return jn(a).then(function(d){return Wm(d,c)})}
function bn(a){var b=this;this.i=a;this.l=new Map;this.j=!1;this.done=new Promise(function(c,d){b.i.addEventListener("complete",function(){c()});
b.i.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.i.error)});
b.i.addEventListener("abort",function(){var e=b.i.error;if(e)d(e);else if(!b.j){e=Gm;for(var f=b.i.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.i.db.name,mode:b.i.mode});d(e)}})})}
function cn(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return p(d).next().value})}
bn.prototype.abort=function(){this.i.abort();this.j=!0;throw new Gm("EXPLICIT_ABORT");};
bn.prototype.objectStore=function(a){a=this.i.objectStore(a);var b=this.l.get(a);b||(b=new $m(a),this.l.set(a,b));return b};
function hn(a){this.i=a}
l=hn.prototype;l.count=function(a){return Vm(this.i.count(a))};
l.delete=function(a){return kn(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
l.get=function(a){return Vm(this.i.get(a))};
l.getKey=function(a){return Vm(this.i.getKey(a))};
l.keyPath=function(){return this.i.keyPath};
l.unique=function(){return this.i.unique};
function kn(a,b,c){a=a.i.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return jn(a).then(function(d){return Wm(d,c)})}
function ln(a,b){this.request=a;this.cursor=b}
function jn(a){return Vm(a).then(function(b){return b?new ln(a,b):null})}
l=ln.prototype;l.advance=function(a){this.cursor.advance(a);return jn(this.request)};
l.continue=function(a){this.cursor.continue(a);return jn(this.request)};
l.delete=function(){return Vm(this.cursor.delete()).then(function(){})};
l.getKey=function(){return this.cursor.key};
l.getValue=function(){return this.cursor.value};
l.update=function(a){return Vm(this.cursor.update(a))};function mn(a,b,c){return new Promise(function(d,e){function f(){x||(x=new Xm(g.result,{closed:r}));return x}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,k=c.blocking,m=c.qd,q=c.upgrade,r=c.closed,x;g.addEventListener("upgradeneeded",function(u){try{if(null===u.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");u.dataLoss&&"none"!==u.dataLoss&&vm("IDB_DATA_CORRUPTED",{reason:u.dataLossMessage||"unknown reason",dbName:zm(a)});var A=f(),E=new bn(g.transaction);
q&&q(A,function(F){return u.oldVersion<F&&u.newVersion>=F},E);
E.done.catch(function(F){e(F)})}catch(F){e(F)}});
g.addEventListener("success",function(){var u=g.result;k&&u.addEventListener("versionchange",function(){k(f())});
u.addEventListener("close",function(){vm("IDB_UNEXPECTEDLY_CLOSED",{dbName:zm(a),dbVersion:u.version});m&&m()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function nn(a,b,c){c=void 0===c?{}:c;return mn(a,b,c)}
function on(a,b){b=void 0===b?{}:b;var c,d,e,f;return w(function(g){if(1==g.i)return ya(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.blocked)&&c.addEventListener("blocked",function(){e()}),v(g,Um(c),4);
if(2!=g.i)return za(g,0);f=Aa(g);throw Km(f,a,"",-1);})}
;function pn(a){return new Promise(function(b){fm(function(){b()},a)})}
function qn(a,b){this.name=a;this.options=b;this.m=!0;this.s=this.o=0;this.j=500}
qn.prototype.l=function(a,b,c){c=void 0===c?{}:c;return nn(a,b,c)};
qn.prototype.delete=function(a){a=void 0===a?{}:a;return on(this.name,a)};
function rn(a,b){return new Gm("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function sn(a,b){if(!b)throw Lm("openWithToken",zm(a.name));return tn(a)}
function tn(a){function b(){var f,g,h,k,m,q,r,x,u,A;return w(function(E){switch(E.i){case 1:return g=null!=(f=Error().stack)?f:"",ya(E,2),v(E,a.l(a.name,a.options.version,d),4);case 4:h=E.j;for(var F=a.options,O=[],N=p(Object.keys(F.Ia)),R=N.next();!R.done;R=N.next()){R=R.value;var ca=F.Ia[R],V=void 0===ca.Yc?Number.MAX_VALUE:ca.Yc;!(h.i.version>=ca.jb)||h.i.version>=V||h.i.objectStoreNames.contains(R)||O.push(R)}k=O;if(0===k.length){E.u(5);break}m=Object.keys(a.options.Ia);q=h.objectStoreNames();
if(a.s<Hk("ytidb_reopen_db_retries",0))return a.s++,h.close(),um(new Gm("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:m,foundObjectStores:q})),E.return(b());if(!(a.o<Hk("ytidb_remake_db_retries",1))){E.u(6);break}a.o++;if(!M("ytidb_remake_db_enable_backoff_delay")){E.u(7);break}return v(E,pn(a.j),8);case 8:a.j*=2;case 7:return v(E,a.delete(),9);case 9:return um(new Gm("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:m,foundObjectStores:q})),E.return(b());
case 6:throw new Hm(q,m);case 5:return E.return(h);case 2:r=Aa(E);if(r instanceof DOMException?"VersionError"!==r.name:"DOMError"in self&&r instanceof DOMError?"VersionError"!==r.name:!(r instanceof Object&&"message"in r)||"An attempt was made to open a database using a lower version than the existing version."!==r.message){E.u(10);break}return v(E,a.l(a.name,void 0,Object.assign({},d,{upgrade:void 0})),11);case 11:x=E.j;u=x.i.version;if(void 0!==a.options.version&&u>a.options.version+1)throw x.close(),
a.m=!1,rn(a,u);return E.return(x);case 10:throw c(),r instanceof Error&&!M("ytidb_async_stack_killswitch")&&(r.stack=r.stack+"\n"+g.substring(g.indexOf("\n")+1)),Km(r,a.name,"",null!=(A=a.options.version)?A:-1);}})}
function c(){a.i===e&&(a.i=void 0)}
if(!a.m)throw rn(a);if(a.i)return a.i;var d={blocking:function(f){f.close()},
closed:c,qd:c,upgrade:a.options.upgrade};var e=b();a.i=e;return a.i}
;var un=new qn("YtIdbMeta",{Ia:{databases:{jb:1}},upgrade:function(a,b){b(1)&&Zm(a,"databases",{keyPath:"actualName"})}});
function vn(a,b){var c;return w(function(d){if(1==d.i)return v(d,sn(un,b),2);c=d.j;return d.return(Ym(c,["databases"],{U:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Vm(f.i.put(a,void 0)).then(function(){})})}))})}
function wn(a,b){var c;return w(function(d){if(1==d.i)return a?v(d,sn(un,b),2):d.return();c=d.j;return d.return(c.delete("databases",a))})}
function xn(a,b){var c,d;return w(function(e){return 1==e.i?(c=[],v(e,sn(un,b),2)):3!=e.i?(d=e.j,v(e,Ym(d,["databases"],{U:!0,mode:"readonly"},function(f){c.length=0;return gn(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function yn(a){return xn(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function zn(a,b,c){return xn(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function An(a){var b,c;return w(function(d){if(1==d.i)return b=xm("YtIdbMeta hasAnyMeta other"),v(d,xn(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.j;return d.return(0<c.length)})}
;var Bn,Cn=new function(){}(new function(){});
function Dn(){var a,b,c,d;return w(function(e){switch(e.i){case 1:a=mm();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=jm)f=/WebKit\/([0-9]+)/.exec(Tb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Tb()),f=!(f&&602<=parseInt(f[1],10)));if(f||Nc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
ya(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return v(e,vn(d,Cn),4);case 4:return v(e,wn("yt-idb-test-do-not-use",Cn),5);case 5:return e.return(!0);case 2:return Aa(e),e.return(!1)}})}
function En(){if(void 0!==Bn)return Bn;pm=!0;return Bn=Dn().then(function(a){pm=!1;var b;if(null!=(b=lm())&&b.i){var c;b={hasSucceededOnce:(null==(c=mm())?void 0:c.hasSucceededOnce)||a};var d;null==(d=lm())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Fn(){return B("ytglobal.idbToken_")||void 0}
function Gn(){var a=Fn();return a?Promise.resolve(a):En().then(function(b){(b=b?Cn:void 0)&&z("ytglobal.idbToken_",b);return b})}
;var Hn=0;function In(a,b){Hn||(Hn=Xh.S(function(){var c,d,e,f,g;return w(function(h){switch(h.i){case 1:return v(h,Gn(),2);case 2:c=h.j;if(!c)return h.return();d=!0;ya(h,3);return v(h,zn(a,c,b),5);case 5:e=h.j;if(!e.length){d=!1;h.u(6);break}f=e[0];return v(h,on(f.actualName),7);case 7:return v(h,wn(f.actualName,c),6);case 6:za(h,4);break;case 3:g=Aa(h),um(g),d=!1;case 4:Xh.fa(Hn),Hn=0,d&&In(a,b),h.i=0}})}))}
function Jn(){var a;return w(function(b){return 1==b.i?v(b,Gn(),2):(a=b.j)?b.return(An(a)):b.return(!1)})}
new Bh;function Kn(a){if(!wm())throw a=new Gm("AUTH_INVALID",{dbName:a}),um(a),a;var b=xm();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Ln(a,b,c,d){var e,f,g,h,k,m;return w(function(q){switch(q.i){case 1:return f=null!=(e=Error().stack)?e:"",v(q,Gn(),2);case 2:g=q.j;if(!g)throw h=Lm("openDbImpl",a,b),M("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),um(h),h;ym(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Kn(a);ya(q,3);return v(q,vn(k,g),5);case 5:return v(q,nn(k.actualName,b,d),6);case 6:return q.return(q.j);case 3:return m=Aa(q),ya(q,7),v(q,wn(k.actualName,g),9);case 9:za(q,
8);break;case 7:Aa(q);case 8:throw m;}})}
function Mn(a,b,c){c=void 0===c?{}:c;return Ln(a,b,!1,c)}
function Nn(a,b,c){c=void 0===c?{}:c;return Ln(a,b,!0,c)}
function On(a,b){b=void 0===b?{}:b;var c,d;return w(function(e){if(1==e.i)return v(e,Gn(),2);if(3!=e.i){c=e.j;if(!c)return e.return();ym(a);d=Kn(a);return v(e,on(d.actualName,b),3)}return v(e,wn(d.actualName,c),0)})}
function Pn(a,b,c){a=a.map(function(d){return w(function(e){return 1==e.i?v(e,on(d.actualName,b),2):v(e,wn(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Qn(){var a=void 0===a?{}:a;var b,c;return w(function(d){if(1==d.i)return v(d,Gn(),2);if(3!=d.i){b=d.j;if(!b)return d.return();ym("LogsDatabaseV2");return v(d,yn(b),3)}c=d.j;return v(d,Pn(c,a,b),0)})}
function Rn(a,b){b=void 0===b?{}:b;var c;return w(function(d){if(1==d.i)return v(d,Gn(),2);if(3!=d.i){c=d.j;if(!c)return d.return();ym(a);return v(d,on(a,b),3)}return v(d,wn(a,c),0)})}
;function Sn(a){this.Sa=this.i=!1;this.potentialEsfErrorCounter=this.j=0;this.handleError=function(){};
this.Aa=function(){};
this.now=Date.now;this.Ga=!1;var b;this.nc=null!=(b=a.nc)?b:100;var c;this.jc=null!=(c=a.jc)?c:1;var d;this.hc=null!=(d=a.hc)?d:2592E6;var e;this.ec=null!=(e=a.ec)?e:12E4;var f;this.ic=null!=(f=a.ic)?f:5E3;var g;this.H=null!=(g=a.H)?g:void 0;this.Xa=!!a.Xa;var h;this.Va=null!=(h=a.Va)?h:.1;var k;this.cb=null!=(k=a.cb)?k:10;a.handleError&&(this.handleError=a.handleError);a.Aa&&(this.Aa=a.Aa);a.Ga&&(this.Ga=a.Ga);a.Sa&&(this.Sa=a.Sa);this.I=a.I;this.Z=a.Z;this.O=a.O;this.M=a.M;this.ja=a.ja;this.xb=
a.xb;this.wb=a.wb;Tn(this)&&(!this.I||this.I("networkless_logging"))&&Un(this)}
function Un(a){Tn(a)&&!a.Ga&&(a.i=!0,a.Xa&&Math.random()<=a.Va&&a.O.Cc(a.H),Vn(a),a.M.L()&&a.Ma(),a.M.aa(a.xb,a.Ma.bind(a)),a.M.aa(a.wb,a.Lb.bind(a)))}
l=Sn.prototype;l.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(Tn(this)&&this.i){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.O.set(d,this.H).then(function(e){d.id=e;c.M.L()&&Wn(c,d)}).catch(function(e){Wn(c,d);
Xn(c,e)})}else this.ja(a,b)};
l.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(Tn(this)&&this.i){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.I&&this.I("nwl_skip_retry")&&(e.skipRetry=c);if(this.M.L()||this.I&&this.I("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return w(function(k){if(1==k.i)return v(k,d.O.set(e,d.H).catch(function(m){Xn(d,m)}),2);
f(g,h);k.i=0})}}this.ja(a,b,e.skipRetry)}else this.O.set(e,this.H).catch(function(g){d.ja(a,b,e.skipRetry);
Xn(d,g)})}else this.ja(a,b,this.I&&this.I("nwl_skip_retry")&&c)};
l.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(Tn(this)&&this.i){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.O.za(d.id,c.H):e=!0;c.M.ia&&c.I&&c.I("vss_network_hint")&&c.M.ia(!0);f(g,h)};
this.ja(d.url,d.options);this.O.set(d,this.H).then(function(g){d.id=g;e&&c.O.za(d.id,c.H)}).catch(function(g){Xn(c,g)})}else this.ja(a,b)};
l.Ma=function(){var a=this;if(!Tn(this))throw Lm("throttleSend");this.j||(this.j=this.Z.S(function(){var b;return w(function(c){if(1==c.i)return v(c,a.O.Vb("NEW",a.H),2);if(3!=c.i)return b=c.j,b?v(c,Wn(a,b),3):(a.Lb(),c.return());a.j&&(a.j=0,a.Ma());c.i=0})},this.nc))};
l.Lb=function(){this.Z.fa(this.j);this.j=0};
function Wn(a,b){var c,d;return w(function(e){switch(e.i){case 1:if(!Tn(a))throw c=Lm("immediateSend"),c;if(void 0===b.id){e.u(2);break}return v(e,a.O.Sc(b.id,a.H),3);case 3:(d=e.j)?b=d:a.Aa(Error("The request cannot be found in the database."));case 2:if(Yn(a,b,a.hc)){e.u(4);break}a.Aa(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.u(5);break}return v(e,a.O.za(b.id,a.H),5);case 5:return e.return();case 4:b.skipRetry||(b=Zn(a,b));if(!b){e.u(0);break}if(!b.skipRetry||
void 0===b.id){e.u(8);break}return v(e,a.O.za(b.id,a.H),8);case 8:a.ja(b.url,b.options,!!b.skipRetry),e.i=0}})}
function Zn(a,b){if(!Tn(a))throw Lm("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k;return w(function(m){switch(m.i){case 1:g=$n(f);if(!(a.I&&a.I("nwl_consider_error_code")&&g||a.I&&!a.I("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.cb)){m.u(2);break}if(!a.M.Ka){m.u(3);break}return v(m,a.M.Ka(),3);case 3:if(a.M.L()){m.u(2);break}c(e,f);if(!a.I||!a.I("nwl_consider_error_code")||void 0===(null==(h=b)?void 0:h.id)){m.u(6);break}return v(m,a.O.Ab(b.id,a.H,!1),6);case 6:return m.return();case 2:if(a.I&&a.I("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.cb)return m.return();a.potentialEsfErrorCounter++;if(void 0===(null==(k=b)?void 0:k.id)){m.u(8);break}return b.sendCount<a.jc?v(m,a.O.Ab(b.id,a.H),12):v(m,a.O.za(b.id,a.H),8);case 12:a.Z.S(function(){a.M.L()&&a.Ma()},a.ic);
case 8:c(e,f),m.i=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return w(function(h){if(1==h.i)return void 0===(null==(g=b)?void 0:g.id)?h.u(2):v(h,a.O.za(b.id,a.H),2);a.M.ia&&a.I&&a.I("vss_network_hint")&&a.M.ia(!0);d(e,f);h.i=0})};
return b}
function Yn(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Vn(a){if(!Tn(a))throw Lm("retryQueuedRequests");a.O.Vb("QUEUED",a.H).then(function(b){b&&!Yn(a,b,a.ec)?a.Z.S(function(){return w(function(c){if(1==c.i)return void 0===b.id?c.u(2):v(c,a.O.Ab(b.id,a.H),2);Vn(a);c.i=0})}):a.M.L()&&a.Ma()})}
function Xn(a,b){a.sc&&!a.M.L()?a.sc(b):a.handleError(b)}
function Tn(a){return!!a.H||a.Sa}
function $n(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;function ao(a,b){this.version=a;this.args=b}
;function bo(a,b){this.topic=a;this.i=b}
bo.prototype.toString=function(){return this.topic};var co=B("ytPubsub2Pubsub2Instance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.Da;K.prototype.publish=K.prototype.ra;K.prototype.clear=K.prototype.clear;z("ytPubsub2Pubsub2Instance",co);var eo=B("ytPubsub2Pubsub2SubscribedKeys")||{};z("ytPubsub2Pubsub2SubscribedKeys",eo);var fo=B("ytPubsub2Pubsub2TopicToKeys")||{};z("ytPubsub2Pubsub2TopicToKeys",fo);var go=B("ytPubsub2Pubsub2IsAsync")||{};z("ytPubsub2Pubsub2IsAsync",go);
z("ytPubsub2Pubsub2SkipSubKey",null);function ho(a,b){var c=io();c&&c.publish.call(c,a.toString(),a,b)}
function jo(a){var b=ko,c=io();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=B("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(eo[d])try{if(f&&b instanceof bo&&b!=e)try{var h=b.i,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.qa){var m=new h;h.qa=m.version}var q=h.qa}catch(F){}if(!q||k.version!=q)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{q=Reflect;var r=q.construct;
var x=k.args,u=x.length;if(0<u){var A=Array(u);for(k=0;k<u;k++)A[k]=x[k];var E=A}else E=[];f=r.call(q,h,E)}catch(F){throw F.message="yt.pubsub2.Data.deserialize(): "+F.message,F;}}catch(F){throw F.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+F.message,F;}a.call(window,f)}catch(F){Nk(F)}},go[b.toString()]?B("yt.scheduler.instance")?Xh.S(g):gl(g,0):g())});
eo[d]=!0;fo[b.toString()]||(fo[b.toString()]=[]);fo[b.toString()].push(d);return d}
function lo(){var a=mo,b=jo(function(c){a.apply(void 0,arguments);no(b)});
return b}
function no(a){var b=io();b&&("number"===typeof a&&(a=[a]),fb(a,function(c){b.unsubscribeByKey(c);delete eo[c]}))}
function io(){return B("ytPubsub2Pubsub2Instance")}
;function oo(a,b){qn.call(this,a,b);this.options=b;ym(a)}
t(oo,qn);function po(a,b){var c;return function(){c||(c=new oo(a,b));return c}}
oo.prototype.l=function(a,b,c){c=void 0===c?{}:c;return(this.options.Cb?Nn:Mn)(a,b,Object.assign({},c))};
oo.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Cb?Rn:On)(this.name,a)};
function qo(a,b){return po(a,b)}
;var ro;
function so(){if(ro)return ro();var a={};ro=qo("LogsDatabaseV2",{Ia:(a.LogsRequestsStore={jb:2},a),Cb:!1,upgrade:function(b,c,d){c(2)&&Zm(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.i.indexNames.contains("newRequest")&&d.i.deleteIndex("newRequest"),d.i.createIndex("newRequestV2",["status","interface","timestamp"],{unique:!1}));c(7)&&b.i.objectStoreNames.contains("sapisid")&&b.i.deleteObjectStore("sapisid");c(9)&&b.i.objectStoreNames.contains("SWHealthLog")&&b.i.deleteObjectStore("SWHealthLog")},
version:9});return ro()}
;function to(a){return sn(so(),a)}
function uo(a,b){var c,d,e,f;return w(function(g){if(1==g.i)return c={startTime:P(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},v(g,to(b),2);if(3!=g.i)return d=g.j,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:L("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),v(g,an(d,e),3);f=g.j;c.sd=P();vo(c);return g.return(f)})}
function wo(a,b){var c,d,e,f,g,h,k;return w(function(m){if(1==m.i)return c={startTime:P(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},v(m,to(b),2);if(3!=m.i)return d=m.j,e=L("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,P()],h=IDBKeyRange.bound(f,g),k=void 0,v(m,Ym(d,["LogsRequestsStore"],{mode:"readwrite",U:!0},function(q){return kn(q.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(r){r.getValue()&&(k=r.getValue(),"NEW"===a&&(k.status="QUEUED",
r.update(k)))})}),3);
c.sd=P();vo(c);return m.return(k)})}
function xo(a,b){var c;return w(function(d){if(1==d.i)return v(d,to(b),2);c=d.j;return d.return(Ym(c,["LogsRequestsStore"],{mode:"readwrite",U:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Vm(f.i.put(g,void 0)).then(function(){return g})})}))})}
function yo(a,b,c){c=void 0===c?!0:c;var d;return w(function(e){if(1==e.i)return v(e,to(b),2);d=e.j;return e.return(Ym(d,["LogsRequestsStore"],{mode:"readwrite",U:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",c&&(h.sendCount+=1),Vm(g.i.put(h,void 0)).then(function(){return h})):Pm.resolve(void 0)})}))})}
function zo(a,b){var c;return w(function(d){if(1==d.i)return v(d,to(b),2);c=d.j;return d.return(c.delete("LogsRequestsStore",a))})}
function Ao(a){var b,c;return w(function(d){if(1==d.i)return v(d,to(a),2);b=d.j;c=P()-2592E6;return v(d,Ym(b,["LogsRequestsStore"],{mode:"readwrite",U:!0},function(e){return gn(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Bo(){return w(function(a){return v(a,Qn(),0)})}
function vo(a){M("nwl_csi_killswitch")||.01>=Math.random()&&ho("nwl_transaction_latency_payload",a)}
;var Co={},Do=qo("ServiceWorkerLogsDatabase",{Ia:(Co.SWHealthLog={jb:1},Co),Cb:!0,upgrade:function(a,b){b(1)&&Zm(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).i.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function Eo(a){return sn(Do(),a)}
function Fo(a){var b,c;return w(function(d){if(1==d.i)return v(d,Eo(a),2);b=d.j;c=P()-2592E6;return v(d,Ym(b,["SWHealthLog"],{mode:"readwrite",U:!0},function(e){return gn(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Go(a){var b;return w(function(c){if(1==c.i)return v(c,Eo(a),2);b=c.j;return v(c,b.clear("SWHealthLog"),0)})}
;var Ho={},Io=0;
function Jo(a){var b=void 0===b?"":b;var c=void 0===c?!1:c;if(a)if(b)ql(a,void 0,"POST",b);else if(L("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))ql(a,void 0,"GET","",void 0,void 0,c);else{b:{try{var d=new bb({url:a});if(d.l&&d.j||d.m){var e=mc(nc(5,a)),f;if(!(f=!e||!e.endsWith("/aclk"))){var g=a.search(yc),h=xc(a,0,"ri",g);if(0>h)var k=null;else{var m=a.indexOf("&",h);if(0>m||m>g)m=g;k=decodeURIComponent(a.slice(h+3,-1!==m?m:0).replace(/\+/g," "))}f="1"!==k}var q=!f;break b}}catch(x){}q=!1}if(q){b:{try{if(window.navigator&&
window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var r=!0;break b}}catch(x){}r=!1}b=r?!0:!1}else b=!1;b||Ko(a)}}
function Ko(a){var b=new Image,c=""+Io++;Ho[c]=b;b.onload=b.onerror=function(){delete Ho[c]};
b.src=a}
;function Lo(){this.i=new Map;this.j=!1}
function Mo(){if(!Lo.i){var a=B("yt.networkRequestMonitor.instance")||new Lo;z("yt.networkRequestMonitor.instance",a);Lo.i=a}return Lo.i}
Lo.prototype.requestComplete=function(a,b){b&&(this.j=!0);a=this.removeParams(a);this.i.get(a)||this.i.set(a,b)};
Lo.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.i.get(a))?!1:!1===a&&this.j?!0:null};
Lo.prototype.removeParams=function(a){return a.split("?")[0]};
Lo.prototype.removeParams=Lo.prototype.removeParams;Lo.prototype.isEndpointCFR=Lo.prototype.isEndpointCFR;Lo.prototype.requestComplete=Lo.prototype.requestComplete;Lo.getInstance=Mo;var No;function Oo(){No||(No=new Wl("yt.offline"));return No}
function Po(a){if(M("offline_error_handling")){var b=Oo().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Oo().set("errors",b,2592E3,!0)}}
;function Qo(){af.call(this);var a=this;this.l=!1;this.j=Wh();this.j.aa("networkstatus-online",function(){if(a.l&&M("offline_error_handling")){var b=Oo().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new Q(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Nk(d)}Oo().set("errors",{},2592E3,!0)}}})}
t(Qo,af);function Ro(){if(!Qo.i){var a=B("yt.networkStatusManager.instance")||new Qo;z("yt.networkStatusManager.instance",a);Qo.i=a}return Qo.i}
l=Qo.prototype;l.L=function(){return this.j.L()};
l.ia=function(a){this.j.j=a};
l.Mc=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
l.Gc=function(){this.l=!0};
l.aa=function(a,b){return this.j.aa(a,b)};
l.Ka=function(a){a=Uh(this.j,a);a.then(function(b){M("use_cfr_monitor")&&Mo().requestComplete("generate_204",b)});
return a};
Qo.prototype.sendNetworkCheckRequest=Qo.prototype.Ka;Qo.prototype.listen=Qo.prototype.aa;Qo.prototype.enableErrorFlushing=Qo.prototype.Gc;Qo.prototype.getWindowStatus=Qo.prototype.Mc;Qo.prototype.networkStatusHint=Qo.prototype.ia;Qo.prototype.isNetworkAvailable=Qo.prototype.L;Qo.getInstance=Ro;function So(a){a=void 0===a?{}:a;af.call(this);var b=this;this.j=this.s=0;this.l=Ro();var c=B("yt.networkStatusManager.instance.listen").bind(this.l);c&&(a.fb?(this.fb=a.fb,c("networkstatus-online",function(){To(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){To(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){bf(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){bf(b,"publicytnetworkstatus-offline")})))}
t(So,af);So.prototype.L=function(){var a=B("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.l)():!0};
So.prototype.ia=function(a){var b=B("yt.networkStatusManager.instance.networkStatusHint").bind(this.l);b&&b(a)};
So.prototype.Ka=function(a){var b=this,c;return w(function(d){c=B("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.l);return M("skip_network_check_if_cfr")&&Mo().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.ia((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.L())})):c?d.return(c(a)):d.return(!0)})};
function To(a,b){a.fb?a.j?(Xh.fa(a.s),a.s=Xh.S(function(){a.o!==b&&(bf(a,b),a.o=b,a.j=P())},a.fb-(P()-a.j))):(bf(a,b),a.o=b,a.j=P()):bf(a,b)}
;var Uo;function Vo(){Sn.call(this,{O:{Cc:Ao,za:zo,Vb:wo,Sc:xo,Ab:yo,set:uo},M:Wo(),handleError:Nk,Aa:Ok,ja:Xo,now:P,sc:Po,Z:im(),xb:"publicytnetworkstatus-online",wb:"publicytnetworkstatus-offline",Xa:!0,Va:.1,cb:Hk("potential_esf_error_limit",10),I:M,Ga:!(wm()&&Yo())});this.l=new Bh;M("networkless_immediately_drop_all_requests")&&Bo();Rn("LogsDatabaseV2")}
t(Vo,Sn);function Zo(){var a=B("yt.networklessRequestController.instance");a||(a=new Vo,z("yt.networklessRequestController.instance",a),M("networkless_logging")&&Gn().then(function(b){a.H=b;Un(a);a.l.resolve();a.Xa&&Math.random()<=a.Va&&a.H&&Fo(a.H);M("networkless_immediately_drop_sw_health_store")&&$o(a)}));
return a}
Vo.prototype.writeThenSend=function(a,b){b||(b={});wm()||(this.i=!1);Sn.prototype.writeThenSend.call(this,a,b)};
Vo.prototype.sendThenWrite=function(a,b,c){b||(b={});wm()||(this.i=!1);Sn.prototype.sendThenWrite.call(this,a,b,c)};
Vo.prototype.sendAndWrite=function(a,b){b||(b={});wm()||(this.i=!1);Sn.prototype.sendAndWrite.call(this,a,b)};
Vo.prototype.awaitInitialization=function(){return this.l.promise};
function $o(a){var b;w(function(c){if(!a.H)throw b=Lm("clearSWHealthLogsDb"),b;return c.return(Go(a.H).catch(function(d){a.handleError(d)}))})}
function Xo(a,b,c){M("use_cfr_monitor")&&ap(a,b);if(M("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(P())));else{var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(P())}c&&0===Object.keys(b).length?Jo(a):nl(a,b)}
function Wo(){Uo||(Uo=new So({Rc:!0,Hc:!0}));return Uo}
function ap(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Mo().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Mo().requestComplete(a,!0);d(e,f)}}
function Yo(){return"www.youtube-nocookie.com"!==oc(document.location.toString())}
;var bp=!1,cp=0,dp=0,ep,fp=y.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:bp,potentialEsfErrorCounter:dp};z("ytNetworklessLoggingInitializationOptions",fp);
function gp(){var a;w(function(b){switch(b.i){case 1:return v(b,Gn(),2);case 2:a=b.j;if(!a||!wm()&&!M("nwl_init_require_datasync_id_killswitch")||!Yo()){b.u(0);break}bp=!0;fp.isNwlInitialized=bp;if(!M("use_new_nwl_initialization")){b.u(4);break}return v(b,Zo().awaitInitialization(),5);case 5:return b.return();case 4:return v(b,Rn("LogsDatabaseV2"),6);case 6:if(!(.1>=Math.random())){b.u(7);break}return v(b,Ao(a),8);case 8:return v(b,Fo(a),7);case 7:hp();ip().L()&&jp();ip().aa("publicytnetworkstatus-online",
jp);ip().aa("publicytnetworkstatus-offline",kp);if(!M("networkless_immediately_drop_sw_health_store")){b.u(10);break}return v(b,lp(),10);case 10:if(M("networkless_immediately_drop_all_requests"))return v(b,Bo(),0);b.u(0)}})}
function mp(a,b){function c(d){var e=ip().L();if(!np()||!d||e&&M("vss_networkless_bypass_write"))op(a,b);else{var f={url:a,options:b,timestamp:P(),status:"NEW",sendCount:0};uo(f,d).then(function(g){f.id=g;ip().L()&&pp(f)}).catch(function(g){pp(f);
ip().L()?Nk(g):Po(g)})}}
b=void 0===b?{}:b;M("skip_is_supported_killswitch")?Gn().then(function(d){c(d)}):c(Fn())}
function qp(a,b){function c(d){if(np()&&d){var e={url:a,options:b,timestamp:P(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(k,m){M("use_cfr_monitor")&&Mo().requestComplete(e.url,!0);void 0!==e.id?zo(e.id,d):f=!0;M("vss_network_hint")&&ip().ia(!0);g(k,m)};
if(M("use_cfr_monitor")){var h=b.onError?b.onError:function(){};
e.options.onError=function(k,m){Mo().requestComplete(e.url,!1);h(k,m)}}op(e.url,e.options);
uo(e,d).then(function(k){e.id=k;f&&zo(e.id,d)}).catch(function(k){ip().L()?Nk(k):Po(k)})}else op(a,b)}
b=void 0===b?{}:b;M("skip_is_supported_killswitch")?Gn().then(function(d){c(d)}):c(Fn())}
function jp(){var a=Fn();if(!a)throw Lm("throttleSend");cp||(cp=Xh.S(function(){var b;return w(function(c){if(1==c.i)return v(c,wo("NEW",a),2);if(3!=c.i)return b=c.j,b?v(c,pp(b),3):(kp(),c.return());cp&&(cp=0,jp());c.i=0})},100))}
function kp(){Xh.fa(cp);cp=0}
function pp(a){var b,c,d;return w(function(e){switch(e.i){case 1:b=Fn();if(!b)throw c=Lm("immediateSend"),c;if(void 0===a.id){e.u(2);break}return v(e,xo(a.id,b),3);case 3:(d=e.j)?a=d:Ok(Error("The request cannot be found in the database."));case 2:if(Ep(a,2592E6)){e.u(4);break}Ok(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.u(5);break}return v(e,zo(a.id,b),5);case 5:return e.return();case 4:a.skipRetry||(a=cq(a));var f=a;if(M("use_request_time_ms_header")){var g;
if(null==f?0:null==(g=f.options)?0:g.headers)f.options.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(P()))}else{var h,k;if(null==f?0:null==(h=f.options)?0:null==(k=h.postParams)?0:k.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(P())}a=f;if(!a){e.u(0);break}if(!a.skipRetry||void 0===a.id){e.u(8);break}return v(e,zo(a.id,b),8);case 8:op(a.url,a.options,!!a.skipRetry),e.i=0}})}
function cq(a){var b=Fn();if(!b)throw Lm("updateRequestHandlers");var c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){var g,h,k;return w(function(m){switch(m.i){case 1:M("use_cfr_monitor")&&Mo().requestComplete(a.url,!1);g=$n(f);if(!(M("nwl_consider_error_code")&&g||!M("nwl_consider_error_code")&&dq()<=Hk("potential_esf_error_limit",10))){m.u(2);break}if(M("skip_checking_network_on_cfr_failure")&&(!M("skip_checking_network_on_cfr_failure")||Mo().isEndpointCFR(a.url))){m.u(3);break}return v(m,ip().Ka(),3);case 3:if(ip().L()){m.u(2);break}c(e,f);if(!M("nwl_consider_error_code")||void 0===
(null==(h=a)?void 0:h.id)){m.u(6);break}return v(m,yo(a.id,b,!1),6);case 6:return m.return();case 2:if(M("nwl_consider_error_code")&&!g&&dq()>Hk("potential_esf_error_limit",10))return m.return();B("ytNetworklessLoggingInitializationOptions")&&fp.potentialEsfErrorCounter++;dp++;if(void 0===(null==(k=a)?void 0:k.id)){m.u(8);break}return 1>a.sendCount?v(m,yo(a.id,b),12):v(m,zo(a.id,b),8);case 12:Xh.S(function(){ip().L()&&jp()},5E3);
case 8:c(e,f),m.i=0}})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){var g;return w(function(h){if(1==h.i)return M("use_cfr_monitor")&&Mo().requestComplete(a.url,!0),void 0===(null==(g=a)?void 0:g.id)?h.u(2):v(h,zo(a.id,b),2);M("vss_network_hint")&&ip().ia(!0);d(e,f);h.i=0})};
return a}
function Ep(a,b){a=a.timestamp;return P()-a>=b?!1:!0}
function hp(){var a=Fn();if(!a)throw Lm("retryQueuedRequests");wo("QUEUED",a).then(function(b){b&&!Ep(b,12E4)?Xh.S(function(){return w(function(c){if(1==c.i)return void 0===b.id?c.u(2):v(c,yo(b.id,a),2);hp();c.i=0})}):ip().L()&&jp()})}
function lp(){var a,b;return w(function(c){a=Fn();if(!a)throw b=Lm("clearSWHealthLogsDb"),b;return c.return(Go(a).catch(function(d){Nk(d)}))})}
function ip(){if(M("use_new_nwl"))return Wo();ep||(ep=new So({Rc:!0,Hc:!0}));return ep}
function op(a,b,c){c&&0===Object.keys(b).length?Jo(a):nl(a,b)}
function np(){return B("ytNetworklessLoggingInitializationOptions")?fp.isNwlInitialized:bp}
function dq(){return B("ytNetworklessLoggingInitializationOptions")?fp.potentialEsfErrorCounter:dp}
;function eq(a){var b=this;this.config_=null;a?this.config_=a:Ml()&&(this.config_=Nl());em(function(){bm(b)},0,5E3)}
eq.prototype.isReady=function(){!this.config_&&Ml()&&(this.config_=Nl());return!!this.config_};
function cm(a,b,c,d){function e(A){A=void 0===A?!1:A;var E;if(d.retry&&"www.youtube-nocookie.com"!=h&&(A||M("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(E=$l(b,c,m,k)),E)){var F=g.onSuccess,O=g.onFetchSuccess;g.onSuccess=function(N,R){am(E);F(N,R)};
c.onFetchSuccess=function(N,R){am(E);O(N,R)}}try{A&&d.retry&&!d.ac.bypassNetworkless?(g.method="POST",d.ac.writeThenSend?M("use_new_nwl_wts")?Zo().writeThenSend(u,g):mp(u,g):M("use_new_nwl_saw")?Zo().sendAndWrite(u,g):qp(u,g)):(g.method="POST",g.postParams||(g.postParams={}),nl(u,g))}catch(N){if("InvalidAccessError"==N.name)E&&(am(E),E=0),Ok(Error("An extension is blocking network request."));
else throw N;}E&&em(function(){bm(a)},0,5E3)}
!L("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Ok(new Q("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Q("innertube xhrclient not ready",b,c,d);Nk(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(A,E){if(d.onSuccess)d.onSuccess(E)},
onFetchSuccess:function(A){if(d.onSuccess)d.onSuccess(A)},
onError:function(A,E){if(d.onError)d.onError(E)},
onFetchError:function(A){if(d.onError)d.onError(A)},
timeout:d.timeout,withCredentials:!0};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Oc)&&(h=f);var k=a.config_.Qc||!1,m=Ul(k,h,d);Object.assign(g.headers,m);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var q="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,r={alt:"json"},x=a.config_.Pc&&f;x=x&&f.startsWith("Bearer");x||(r.key=a.config_.innertubeApiKey);var u=$k(""+h+q,r||{},!0);M("use_new_nwl")&&Zo().i||!M("use_new_nwl")&&
np()?En().then(function(A){e(A)}):e(!1)}
;var fq=0,gq=Pc?"webkit":Oc?"moz":Mc?"ms":Lc?"o":"";z("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++fq});var hq={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function iq(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in hq||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.i=a.pageX;this.j=a.pageY}}catch(e){}}
function jq(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.i=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.j=a.clientY+b}}
iq.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
iq.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
iq.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var qb=y.ytEventsEventsListeners||{};z("ytEventsEventsListeners",qb);var kq=y.ytEventsEventsCounter||{count:0};z("ytEventsEventsCounter",kq);
function lq(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return pb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Qa(e[4])&&Qa(d)&&ub(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var mq=db(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function nq(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=lq(a,b,c,d);if(e)return e;e=++kq.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new iq(h);if(!lf(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new iq(h);
h.currentTarget=a;return c.call(a,h)};
g=Mk(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),mq()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);qb[e]=[a,b,c,g,d];return e}
function oq(a){a&&("string"==typeof a&&(a=[a]),fb(a,function(b){if(b in qb){var c=qb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?mq()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete qb[b]}}))}
;var pq=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function qq(a){this.G=a;this.j=null;this.o=0;this.A=null;this.s=0;this.l=[];for(a=0;4>a;a++)this.l.push(0);this.m=0;this.K=nq(window,"mousemove",Wa(this.P,this));a=Wa(this.J,this);"function"===typeof a&&(a=Mk(a));this.R=window.setInterval(a,25)}
Za(qq,J);qq.prototype.P=function(a){void 0===a.i&&jq(a);var b=a.i;void 0===a.j&&jq(a);this.j=new gf(b,a.j)};
qq.prototype.J=function(){if(this.j){var a=pq();if(0!=this.o){var b=this.A,c=this.j,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.l[this.m]=.5<Math.abs((d-this.s)/this.s)?1:0;for(c=b=0;4>c;c++)b+=this.l[c]||0;3<=b&&this.G();this.s=d}this.o=a;this.A=this.j;this.m=(this.m+1)%4}};
qq.prototype.D=function(){window.clearInterval(this.R);oq(this.K)};var rq={};
function sq(a){var b=void 0===a?{}:a;a=void 0===b.Wc?!1:b.Wc;b=void 0===b.Ic?!0:b.Ic;if(null==B("_lact",window)){var c=parseInt(L("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;z("_lact",c,window);z("_fact",c,window);-1==c&&tq();nq(document,"keydown",tq);nq(document,"keyup",tq);nq(document,"mousedown",tq);nq(document,"mouseup",tq);a?nq(window,"touchmove",function(){uq("touchmove",200)},{passive:!0}):(nq(window,"resize",function(){uq("resize",200)}),b&&nq(window,"scroll",function(){uq("scroll",200)}));
new qq(function(){uq("mouse",100)});
nq(document,"touchstart",tq,{passive:!0});nq(document,"touchend",tq,{passive:!0})}}
function uq(a,b){rq[a]||(rq[a]=!0,Xh.S(function(){tq();rq[a]=!1},b))}
function tq(){null==B("_lact",window)&&sq();var a=Date.now();z("_lact",a,window);-1==B("_fact",window)&&z("_fact",a,window);(a=B("ytglobal.ytUtilActivityCallback_"))&&a()}
function vq(){var a=B("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var wq=y.ytPubsubPubsubInstance||new K,xq=y.ytPubsubPubsubSubscribedKeys||{},yq=y.ytPubsubPubsubTopicToKeys||{},zq=y.ytPubsubPubsubIsSynchronous||{};function Aq(a,b){var c=Bq();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){xq[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{zq[a]?f():gl(f,0)}catch(g){Nk(g)}},void 0);
xq[d]=!0;yq[a]||(yq[a]=[]);yq[a].push(d);return d}return 0}
function Cq(a){var b=Bq();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),fb(a,function(c){b.unsubscribeByKey(c);delete xq[c]}))}
function Dq(a,b){var c=Bq();c&&c.publish.apply(c,arguments)}
function Eq(a){var b=Bq();if(b)if(b.clear(a),a)Fq(a);else for(var c in yq)Fq(c)}
function Bq(){return y.ytPubsubPubsubInstance}
function Fq(a){yq[a]&&(a=yq[a],fb(a,function(b){xq[b]&&delete xq[b]}),a.length=0)}
K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.Da;K.prototype.publish=K.prototype.ra;K.prototype.clear=K.prototype.clear;z("ytPubsubPubsubInstance",wq);z("ytPubsubPubsubTopicToKeys",yq);z("ytPubsubPubsubIsSynchronous",zq);z("ytPubsubPubsubSubscribedKeys",xq);function Gq(a){this.policy=a;this.store=[];this.i={}}
Gq.prototype.storePayload=function(a,b){this.store.push({payload:b,keys:a});b=[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo].join("/");this.i[b]?this.i[b]++:this.i[b]=1;this.i[b]>=this.policy.maxBatchSize&&(this.policy.onBatchSizeExceeded(a),this.i[b]=0);return b};
Gq.prototype.extractMatchingEntries=function(a){for(var b=[],c=[],d=p(this.store),e=d.next();!e.done;e=d.next()){e=e.value;a:{var f=a;var g=Object.keys(f);g=p(g);for(var h=g.next();!h.done;h=g.next())if(h=h.value,e.keys[h]!==f[h]){f=!1;break a}f=!0}f?b.push(e.payload):c.push(e)}this.store=c;c=0;a=Hq(this,a);a=p(a);for(d=a.next();!d.done;d=a.next())d=d.value,c+=this.i[d],this.i[d]=0;c!==b.length&&Ok(new Q("Transport IMS extracted entries count != keyCounter sum",b.length,c));return b};
Gq.prototype.getSequenceCount=function(a){var b=Hq(this,a);a=0;b=p(b);for(var c=b.next();!c.done;c=b.next())a+=this.i[c.value];return a};
function Hq(a,b){var c=Object.keys(b),d="THIS_KEY_FIELD_NOT_FILLED",e="THIS_KEY_FIELD_NOT_FILLED",f="THIS_KEY_FIELD_NOT_FILLED";c=p(c);for(var g=c.next();!g.done;g=c.next())g=g.value,"auth"===g?d=Iq(b.auth):"isJspb"===g?e=JSON.stringify(b.isJspb):"cttAuthInfo"===g&&(f=Iq(b.cttAuthInfo));b=[];d=[d,e,f];a=p(Object.keys(a.i));for(e=a.next();!e.done;e=a.next()){e=e.value;f=e.split("/");c=!0;for(g=0;g<d.length;g++)if("THIS_KEY_FIELD_NOT_FILLED"!==d[g]&&d[g]!==f[g]){c=!1;break}c&&b.push(e)}return b}
Gq.prototype.getSequenceCount=Gq.prototype.getSequenceCount;Gq.prototype.extractMatchingEntries=Gq.prototype.extractMatchingEntries;Gq.prototype.storePayload=Gq.prototype.storePayload;function Iq(a){return void 0===a?"undefined":a}
;var Jq=Hk("initial_gel_batch_timeout",2E3),Kq=Math.pow(2,16)-1,Lq=void 0;function Mq(){this.l=this.i=this.j=0}
var Nq=new Mq,Oq=new Mq,Pq=!0,Qq=y.ytLoggingTransportGELQueue_||new Map;z("ytLoggingTransportGELQueue_",Qq);var Rq=y.ytLoggingTransportGELProtoQueue_||new Map;z("ytLoggingTransportGELProtoQueue_",Rq);var Sq=y.ytLoggingTransportTokensToCttTargetIds_||{};z("ytLoggingTransportTokensToCttTargetIds_",Sq);var Tq=y.ytLoggingTransportTokensToJspbCttTargetIds_||{};z("ytLoggingTransportTokensToJspbCttTargetIds_",Tq);var Uq={};
function Vq(){var a=B("yt.logging.ims");a||(a=new Gq({maxBatchSize:Hk("tvhtml5_logging_max_batch")||Hk("web_logging_max_batch")||100,onBatchSizeExceeded:function(b){Wq({writeThenSend:!0},void 0,b.isJspb)}}),z("yt.logging.ims",a));
return a}
function Xq(a,b){if("log_event"===a.endpoint){Yq(a);var c=Zq(a);if(M("use_new_in_memory_storage")){Uq[c]=!0;var d={cttAuthInfo:c,isJspb:!1};Vq().storePayload(d,a.payload);$q(b,[],c,!1,d)}else d=Qq.get(c)||[],Qq.set(c,d),d.push(a.payload),$q(b,d,c)}}
function ar(a,b){if("log_event"===a.endpoint){Yq(void 0,a);var c=Zq(a,!0);if(M("use_new_in_memory_storage")){Uq[c]=!0;var d={cttAuthInfo:c,isJspb:!0};Vq().storePayload(d,a.payload.toJSON());$q(b,[],c,!0,d)}else d=Rq.get(c)||[],Rq.set(c,d),a=a.payload.toJSON(),d.push(a),$q(b,d,c,!0)}}
function $q(a,b,c,d,e){d=void 0===d?!1:d;a&&(Lq=new a);a=Hk("tvhtml5_logging_max_batch")||Hk("web_logging_max_batch")||100;var f=P(),g=d?Oq.l:Nq.l;b=b.length;e&&(b=Vq().getSequenceCount(e));b>=a?Wq({writeThenSend:!0},M("flush_only_full_queue")?c:void 0,d):10<=f-g&&(br(d),d?Oq.l=f:Nq.l=f)}
function cr(a,b){if("log_event"===a.endpoint){Yq(a);var c=Zq(a),d=new Map;d.set(c,[a.payload]);b&&(Lq=new b);return new yf(function(e,f){Lq&&Lq.isReady()?dr(d,Lq,e,f,{bypassNetworkless:!0},!0):e()})}}
function er(a,b){if("log_event"===a.endpoint){Yq(void 0,a);var c=Zq(a,!0),d=new Map;d.set(c,[a.payload.toJSON()]);b&&(Lq=new b);return new yf(function(e){Lq&&Lq.isReady()?fr(d,Lq,e,{bypassNetworkless:!0},!0):e()})}}
function Zq(a,b){var c="";if(a.Fa)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new qk;c.videoId?d.setVideoId(c.videoId):c.playlistId&&Ud(d,2,rk,c.playlistId);Tq[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Sq[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function Wq(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;new yf(function(d,e){c?(hl(Oq.j),hl(Oq.i),Oq.i=0):(hl(Nq.j),hl(Nq.i),Nq.i=0);if(Lq&&Lq.isReady())if(M("use_new_in_memory_storage")){var f=a,g=c,h=Lq;f=void 0===f?{}:f;g=void 0===g?!1:g;var k=new Map,m=new Map;if(void 0!==b)g?(e=Vq().extractMatchingEntries({isJspb:g,cttAuthInfo:b}),k.set(b,e),fr(k,h,d,f)):(k=Vq().extractMatchingEntries({isJspb:g,cttAuthInfo:b}),m.set(b,k),dr(m,h,d,e,f));else if(g){e=p(Object.keys(Uq));for(g=e.next();!g.done;g=
e.next())m=g.value,g=Vq().extractMatchingEntries({isJspb:!0,cttAuthInfo:m}),0<g.length&&k.set(m,g),Uq[m]=!1;fr(k,h,d,f)}else{k=p(Object.keys(Uq));for(g=k.next();!g.done;g=k.next()){g=g.value;var q=Vq().extractMatchingEntries({isJspb:!1,cttAuthInfo:g});0!==q.length&&m.set(g,q)}dr(m,h,d,e,f)}}else f=a,k=c,h=Lq,f=void 0===f?{}:f,k=void 0===k?!1:k,void 0!==b?k?(e=new Map,k=Rq.get(b)||[],e.set(b,k),fr(e,h,d,f),Rq.delete(b)):(k=new Map,m=Qq.get(b)||[],k.set(b,m),dr(k,h,d,e,f),Qq.delete(b)):k?(fr(Rq,h,d,
f),Rq.clear()):(dr(Qq,h,d,e,f),Qq.clear());else br(c),d()})}
function br(a){a=void 0===a?!1:a;if(M("web_gel_timeout_cap")&&(!a&&!Nq.i||a&&!Oq.i)){var b=gl(function(){Wq({writeThenSend:!0},void 0,a)},6E4);
a?Oq.i=b:Nq.i=b}hl(a?Oq.j:Nq.j);b=L("LOGGING_BATCH_TIMEOUT",Hk("web_gel_debounce_ms",1E4));M("shorten_initial_gel_batch_timeout")&&Pq&&(b=Jq);b=gl(function(){Wq({writeThenSend:!0},void 0,a)},b);
a?Oq.j=b:Nq.j=b}
function dr(a,b,c,d,e,f){e=void 0===e?{}:e;var g=Math.round(P()),h=a.size;a=p(a);for(var k=a.next();!k.done;k=a.next()){var m=p(k.value);k=m.next().value;var q=m.next().value;m=k;k=wb({context:Ol(b.config_||Nl())});if(!Pa(q)&&!M("throw_err_when_logevent_malformed_killswitch")){d();break}k.events=q;(q=Sq[m])&&gr(k,m,q);delete Sq[m];m="visitorOnlyApprovedKey"===m;hr(k,g,m);ir(e);q=function(){h--;h||c()};
var r=function(){h--;h||c()};
try{cm(b,"log_event",k,jr(e,m,q,r,f)),Pq=!1}catch(x){Nk(x),d()}}}
function fr(a,b,c,d,e){d=void 0===d?{}:d;var f=Math.round(P()),g=a.size,h=new Map([].concat(ia(a)));h=p(h);for(var k=h.next();!k.done;k=h.next()){var m=p(k.value).next().value,q=a.get(m);k=new sk;var r=Tl(b.config_||Nl());G(k,$i,1,r);q=q?kr(q):[];q=p(q);for(r=q.next();!r.done;r=q.next())ae(k,3,mk,r.value);(q=Tq[m])&&lr(k,m,q);delete Tq[m];m="visitorOnlyApprovedKey"===m;mr(k,f,m);ir(d);k=de(k);m=jr(d,m,function(){g--;g||c()},function(){g--;
g||c()},e);
m.headers["Content-Type"]="application/json+protobuf";m.postBodyFormat="JSPB";m.postBody=k;cm(b,"log_event","",m);Pq=!1}}
function ir(a){M("always_send_and_write")&&(a.writeThenSend=!1)}
function jr(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,ac:a,Fa:b,Bq:!!e,headers:{},postBodyFormat:"",postBody:""};M("use_request_time_ms_header")&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(P())));return a}
function hr(a,b,c){M("use_request_time_ms_header")||(a.requestTimeMs=String(b));M("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=L("EVENT_ID"))&&(c=nr(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function mr(a,b,c){M("use_request_time_ms_header")||D(a,2,b);if(!c&&(b=L("EVENT_ID"))){c=nr();var d=new pk;D(d,1,b);D(d,2,c);G(a,pk,5,d)}}
function nr(){var a=L("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*Kq/2));a++;a>Kq&&(a=1);Ek("BATCH_CLIENT_COUNTER",a);return a}
function gr(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function lr(a,b,c){if(Qd(c,1===Vd(c,rk)?1:-1))var d=1;else if(c.getPlaylistId())d=2;else return;G(a,qk,4,c);a=Wd(a,$i,1)||new $i;c=Wd(a,Yi,3)||new Yi;var e=new Xi;e.setToken(b);D(e,1,d);ae(c,12,Xi,e);G(a,Yi,3,c)}
function kr(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new mk(a[c]))}catch(d){Nk(new Q("Transport failed to deserialize "+String(a[c])))}return b}
function Yq(a,b){if(B("yt.logging.transport.enableScrapingForTest")){var c=B("yt.logging.transport.scrapedPayloadsForTesting"),d=B("yt.logging.transport.payloadToScrape","");b&&(b=B("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);a&&a.payload[d]&&c.push((null==a?void 0:a.payload)[d]);z("yt.logging.transport.scrapedPayloadsForTesting",c)}}
;var or=y.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",or);function pr(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||P());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=vq();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};M("log_sequence_info_on_gel_web")&&d.ba&&(a=e.context,b=d.ba,b={index:qr(b),groupKey:b},a.sequence=b,d.Sb&&delete or[d.ba]);(d.kc?cr:Xq)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,Fa:d.Fa},c)}
function rr(a){Wq(void 0,void 0,void 0===a?!1:a)}
function qr(a){or[a]=a in or?or[a]+1:0;return or[a]}
;var sr=y.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",sr);function tr(a,b,c){c=void 0===c?{}:c;var d=Math.round(c.timestamp||P());D(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=vq();d=new lk;D(d,1,c.timestamp||!isFinite(e)?-1:e);if(M("log_sequence_info_on_gel_web")&&c.ba){e=c.ba;var f=qr(e),g=new Qj;D(g,2,f);D(g,1,e);G(d,Qj,3,g);c.Sb&&delete sr[c.ba]}G(a,lk,33,d);(c.kc?er:ar)({endpoint:"log_event",payload:a,cttAuthInfo:c.cttAuthInfo,Fa:c.Fa},b)}
;function ur(a,b){b=void 0===b?{}:b;var c=!1;L("ytLoggingEventsDefaultDisabled",!1)&&(c=!0);tr(a,c?null:eq,b)}
;function vr(a,b){var c=new mk;Zd(c,Hj,72,nk,a);ur(c,b)}
function wr(a,b,c){var d=new mk;Zd(d,Gj,73,nk,a);c?tr(d,c,b):ur(d,b)}
function xr(a,b,c){var d=new mk;Zd(d,Fj,78,nk,a);c?tr(d,c,b):ur(d,b)}
function yr(a,b,c){var d=new mk;Zd(d,Ij,208,nk,a);c?tr(d,c,b):ur(d,b)}
function zr(a,b,c){var d=new mk;Zd(d,yj,156,nk,a);c?tr(d,c,b):ur(d,b)}
function Ar(a,b,c){var d=new mk;Zd(d,Cj,215,nk,a);c?tr(d,c,b):ur(d,b)}
function Br(a,b,c){var d=new mk;Zd(d,uj,111,nk,a);c?tr(d,c,b):ur(d,b)}
;function tm(a,b,c){c=void 0===c?{}:c;if(M("migrate_events_to_ts")){c=void 0===c?{}:c;var d=eq;L("ytLoggingEventsDefaultDisabled",!1)&&eq===eq&&(d=null);pr(a,b,d,c)}else d=eq,L("ytLoggingEventsDefaultDisabled",!1)&&eq==eq&&(d=null),pr(a,b,d,c)}
;var Cr=[{vb:function(a){return"Cannot read property '"+a.key+"'"},
bb:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{vb:function(a){return"Cannot call '"+a.key+"'"},
bb:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{vb:function(a){return a.key+" is not defined"},
bb:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Er={oa:[],na:[{callback:Dr,weight:500}]};function Dr(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Fr(){this.na=[];this.oa=[]}
var Gr;function Hr(){if(!Gr){var a=Gr=new Fr;a.oa.length=0;a.na.length=0;Er.oa&&a.oa.push.apply(a.oa,Er.oa);Er.na&&a.na.push.apply(a.na,Er.na)}return Gr}
;var Ir=new K;function Jr(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Kr(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Kr(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Kr(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Kr(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Lr(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Mr(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=Jr(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?Mr(e+".ve",f,g,h):0;d+=g;d+=Mr(e,a[e],b,c);if(500<d)break}}else c[b]=Nr(a),d+=c[b].length;else c[b]=Nr(a),d+=c[b].length;return d}
function Mr(a,b,c,d){c+="."+a;a=Nr(b);d[c]=a;return c.length+a.length}
function Nr(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;var Or=new Set,Pr=0,Qr=0,Rr=0,Sr=[],Tr=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function sm(a){Ur(a)}
function Vr(a){Ur(a,"WARNING")}
function Ur(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||L("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||L("INNERTUBE_CONTEXT_CLIENT_VERSION");var g=f||{},h=void 0===b?"ERROR":b;h=void 0===h?"ERROR":h;if(a){a.hasOwnProperty("level")&&a.level&&(h=a.level);if(M("console_log_js_exceptions")){var k=[];k.push("Name: "+a.name);k.push("Message: "+a.message);a.hasOwnProperty("params")&&k.push("Error Params: "+JSON.stringify(a.params));a.hasOwnProperty("args")&&k.push("Error args: "+JSON.stringify(a.args));
k.push("File name: "+a.fileName);k.push("Stacktrace: "+a.stack);window.console.log(k.join("\n"),a)}if(!(5<=Pr)){var m=Sr,q=ue(a),r=q.message||"Unknown Error",x=q.name||"UnknownError",u=q.stack||a.j||"Not available";if(u.startsWith(x+": "+r)){var A=u.split("\n");A.shift();u=A.join("\n")}var E=q.lineNumber||"Not available",F=q.fileName||"Not available",O=u,N=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var R=0;R<a.args.length&&!(N=Lr(a.args[R],"params."+R,g,N),500<=N);R++);else if(a.hasOwnProperty("params")&&
a.params){var ca=a.params;if("object"===typeof a.params)for(var V in ca){if(ca[V]){var nb="params."+V,Xa=Nr(ca[V]);g[nb]=Xa;N+=nb.length+Xa.length;if(500<N)break}}else g.params=Nr(ca)}if(m.length)for(var la=0;la<m.length&&!(N=Lr(m[la],"params.context."+la,g,N),500<=N);la++);navigator.vendor&&!g.hasOwnProperty("vendor")&&(g["device.vendor"]=navigator.vendor);var H={message:r,name:x,lineNumber:E,fileName:F,stack:O,params:g,sampleWeight:1},ka=Number(a.columnNumber);isNaN(ka)||(H.lineNumber=H.lineNumber+
":"+ka);if("IGNORED"===a.level)var ea=0;else a:{for(var Be=Hr(),Ce=p(Be.oa),ud=Ce.next();!ud.done;ud=Ce.next()){var na=ud.value;if(H.message&&H.message.match(na.Jq)){ea=na.weight;break a}}for(var rp=p(Be.na),Rj=rp.next();!Rj.done;Rj=rp.next()){var sp=Rj.value;if(sp.callback(H)){ea=sp.weight;break a}}ea=1}H.sampleWeight=ea;for(var tp=p(Cr),Sj=tp.next();!Sj.done;Sj=tp.next()){var Tj=Sj.value;if(Tj.bb[H.name])for(var up=p(Tj.bb[H.name]),Uj=up.next();!Uj.done;Uj=up.next()){var vp=Uj.value,Qg=H.message.match(vp.regexp);
if(Qg){H.params["params.error.original"]=Qg[0];for(var Vj=vp.groups,wp={},vd=0;vd<Vj.length;vd++)wp[Vj[vd]]=Qg[vd+1],H.params["params.error."+Vj[vd]]=Qg[vd+1];H.message=Tj.vb(wp);break}}}H.params||(H.params={});var xp=Hr();H.params["params.errorServiceSignature"]="msg="+xp.oa.length+"&cb="+xp.na.length;H.params["params.serviceWorker"]="false";y.document&&y.document.querySelectorAll&&(H.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));Db("sample").constructor!==
Bb&&(H.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(H);if(0!==H.sampleWeight&&!Or.has(H.message)){if("ERROR"===h){Ir.ra("handleError",H);if(M("record_app_crashed_web")&&0===Rr&&1===H.sampleWeight)if(Rr++,M("errors_via_jspb")){var Wj=new rj;D(Wj,1,1);if(!M("report_client_error_with_app_crash_ks")){var yp=new mj;D(yp,1,H.message);var zp=new nj;G(zp,mj,3,yp);var Ap=new oj;G(Ap,nj,5,zp);var Bp=new pj;G(Bp,oj,9,Ap);G(Wj,pj,4,Bp)}var Cp=new mk;Zd(Cp,rj,20,
nk,Wj);ur(Cp)}else{var Dp={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};M("report_client_error_with_app_crash_ks")||(Dp.systemHealth={crashData:{clientError:{logMessage:{message:H.message}}}});tm("appCrashed",Dp)}Qr++}else"WARNING"===h&&Ir.ra("handleWarning",H);if(M("kevlar_gel_error_routing"))a:{var De=h;if(M("errors_via_jspb")){if(Wr())var Fp=void 0;else{var wd=new jj;D(wd,1,H.stack);H.fileName&&D(wd,4,H.fileName);var Jb=H.lineNumber&&H.lineNumber.split?H.lineNumber.split(":"):[];0!==Jb.length&&(1!==
Jb.length||isNaN(Number(Jb[0]))?2!==Jb.length||isNaN(Number(Jb[0]))||isNaN(Number(Jb[1]))||(D(wd,2,Number(Jb[0])),D(wd,3,Number(Jb[1]))):D(wd,2,Number(Jb[0])));var zc=new mj;D(zc,1,H.message);D(zc,3,H.name);D(zc,6,H.sampleWeight);"ERROR"===De?D(zc,2,2):"WARNING"===De?D(zc,2,1):D(zc,2,0);var Xj=new kj;D(Xj,1,!0);Zd(Xj,jj,3,lj,wd);var bc=new gj;D(bc,3,window.location.href);for(var Gp=L("FEXP_EXPERIMENTS",[]),Yj=0;Yj<Gp.length;Yj++){var Pv=Gp[Yj];Dd(bc);Rd(bc,5,2,!1).push(Pv)}var Zj=L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");
if(!Fk()&&Zj)for(var Hp=p(Object.keys(Zj)),Ac=Hp.next();!Ac.done;Ac=Hp.next()){var Ip=Ac.value,ak=new ij;D(ak,1,Ip);ak.setValue(String(Zj[Ip]));ae(bc,4,ij,ak)}var bk=H.params;if(bk){var Jp=p(Object.keys(bk));for(Ac=Jp.next();!Ac.done;Ac=Jp.next()){var Kp=Ac.value,ck=new ij;D(ck,1,"client."+Kp);ck.setValue(String(bk[Kp]));ae(bc,4,ij,ck)}}var Lp=L("SERVER_NAME"),Mp=L("SERVER_VERSION");if(Lp&&Mp){var dk=new ij;D(dk,1,"server.name");dk.setValue(Lp);ae(bc,4,ij,dk);var ek=new ij;D(ek,1,"server.version");
ek.setValue(Mp);ae(bc,4,ij,ek)}var Rg=new nj;G(Rg,gj,1,bc);G(Rg,kj,2,Xj);G(Rg,mj,3,zc);Fp=Rg}var Np=Fp;if(!Np)break a;var Op=new mk;Zd(Op,nj,163,nk,Np);ur(Op)}else{if(Wr())var Pp=void 0;else{var Ee={stackTrace:H.stack};H.fileName&&(Ee.filename=H.fileName);var Kb=H.lineNumber&&H.lineNumber.split?H.lineNumber.split(":"):[];0!==Kb.length&&(1!==Kb.length||isNaN(Number(Kb[0]))?2!==Kb.length||isNaN(Number(Kb[0]))||isNaN(Number(Kb[1]))||(Ee.lineNumber=Number(Kb[0]),Ee.columnNumber=Number(Kb[1])):Ee.lineNumber=
Number(Kb[0]));var fk={level:"ERROR_LEVEL_UNKNOWN",message:H.message,errorClassName:H.name,sampleWeight:H.sampleWeight};"ERROR"===De?fk.level="ERROR_LEVEL_ERROR":"WARNING"===De&&(fk.level="ERROR_LEVEL_WARNNING");var Qv={isObfuscated:!0,browserStackInfo:Ee},xd={pageUrl:window.location.href,kvPairs:[]};L("FEXP_EXPERIMENTS")&&(xd.experimentIds=L("FEXP_EXPERIMENTS"));var gk=L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Fk()&&gk)for(var Qp=p(Object.keys(gk)),Bc=Qp.next();!Bc.done;Bc=Qp.next()){var Rp=
Bc.value;xd.kvPairs.push({key:Rp,value:String(gk[Rp])})}var hk=H.params;if(hk){var Sp=p(Object.keys(hk));for(Bc=Sp.next();!Bc.done;Bc=Sp.next()){var Tp=Bc.value;xd.kvPairs.push({key:"client."+Tp,value:String(hk[Tp])})}}var Up=L("SERVER_NAME"),Vp=L("SERVER_VERSION");Up&&Vp&&(xd.kvPairs.push({key:"server.name",value:Up}),xd.kvPairs.push({key:"server.version",value:Vp}));Pp={errorMetadata:xd,stackTrace:Qv,logMessage:fk}}var Wp=Pp;if(!Wp)break a;tm("clientError",Wp)}if("ERROR"===De||M("errors_flush_gel_always_killswitch"))b:if(M("migrate_events_to_ts"))c:{if(M("web_fp_via_jspb")&&
(rr(!0),!M("web_fp_via_jspb_and_json")))break c;rr()}else{if(M("web_fp_via_jspb")&&(rr(!0),!M("web_fp_via_jspb_and_json")))break b;rr()}}if(!M("suppress_error_204_logging")){var Fe=H.params||{},cc={urlParams:{a:"logerror",t:"jserror",type:H.name,msg:H.message.substr(0,250),line:H.lineNumber,level:h,"client.name":Fe.name},postParams:{url:L("PAGE_NAME",window.location.href),file:H.fileName},method:"POST"};Fe.version&&(cc["client.version"]=Fe.version);if(cc.postParams){H.stack&&(cc.postParams.stack=
H.stack);for(var Xp=p(Object.keys(Fe)),ik=Xp.next();!ik.done;ik=Xp.next()){var Yp=ik.value;cc.postParams["client."+Yp]=Fe[Yp]}var jk=L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(jk)for(var Zp=p(Object.keys(jk)),kk=Zp.next();!kk.done;kk=Zp.next()){var $p=kk.value;cc.postParams[$p]=jk[$p]}var aq=L("SERVER_NAME"),bq=L("SERVER_VERSION");aq&&bq&&(cc.postParams["server.name"]=aq,cc.postParams["server.version"]=bq)}nl(L("ECATCHER_REPORT_HOST","")+"/error_204",cc)}try{Or.add(H.message)}catch(px){}Pr++}}}}
function Wr(){for(var a=p(Tr),b=a.next();!b.done;b=a.next())if(km(b.value.toLowerCase()))return!0;return!1}
function Xr(a){var b=Ja.apply(1,arguments);a.args||(a.args=[]);a.args.push.apply(a.args,ia(b))}
;function Yr(){this.register=new Map}
function Zr(a){a=p(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Mq("ABORTED")}
Yr.prototype.clear=function(){Zr(this);this.register.clear()};
var $r=new Yr;var as=Date.now().toString();
function bs(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(as)for(a=1,b=0;b<as.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^as.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var cs=y.ytLoggingDocDocumentNonce_;cs||(cs=bs(),z("ytLoggingDocDocumentNonce_",cs));var ds=cs;var es={Kh:0,me:1,xe:2,El:3,Mh:4,Sp:5,tm:6,ao:7,wn:8,On:9,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS",9:"RICH_GRID_WATCH"};function fs(a){this.i=a}
function gs(a){return new fs({trackingParams:a})}
fs.prototype.getAsJson=function(){var a={};void 0!==this.i.trackingParams?a.trackingParams=this.i.trackingParams:(a.veType=this.i.veType,void 0!==this.i.veCounter&&(a.veCounter=this.i.veCounter),void 0!==this.i.elementIndex&&(a.elementIndex=this.i.elementIndex));void 0!==this.i.dataElement&&(a.dataElement=this.i.dataElement.getAsJson());void 0!==this.i.youtubeData&&(a.youtubeData=this.i.youtubeData);return a};
fs.prototype.getAsJspb=function(){var a=new tj;if(void 0!==this.i.trackingParams){var b=this.i.trackingParams;null!=b&&b instanceof kd&&jd();D(a,1,b)}else void 0!==this.i.veType&&D(a,2,this.i.veType),void 0!==this.i.veCounter&&D(a,6,this.i.veCounter),void 0!==this.i.elementIndex&&D(a,3,this.i.elementIndex);void 0!==this.i.dataElement&&(b=this.i.dataElement.getAsJspb(),G(a,tj,7,b));void 0!==this.i.youtubeData&&G(a,Mi,8,this.i.jspbYoutubeData);return a};
fs.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
fs.prototype.isClientVe=function(){return!this.i.trackingParams&&!!this.i.veType};function hs(a){a=void 0===a?0:a;return 0===a?"client-screen-nonce":"client-screen-nonce."+a}
function is(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function js(a){return L(is(void 0===a?0:a))}
z("yt_logging_screen.getRootVeType",js);function ks(a){return(a=js(void 0===a?0:a))?new fs({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null}
function ls(){var a=L("csn-to-ctt-auth-info");a||(a={},Ek("csn-to-ctt-auth-info",a));return a}
function ms(a){a=L(hs(void 0===a?0:a));if(!a&&!L("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
z("yt_logging_screen.getCurrentCsn",ms);function ns(a,b,c){var d=ls();(c=ms(c))&&delete d[c];b&&(d[a]=b)}
function os(a){return ls()[a]}
z("yt_logging_screen.getCttAuthInfo",os);
function ps(a,b,c,d){c=void 0===c?0:c;if(a!==L(hs(c))||b!==L(is(c)))if(ns(a,d,c),Ek(hs(c),a),Ek(is(c),b),b=function(){setTimeout(function(){if(a)if(M("web_time_via_jspb")){var e=new uj;D(e,1,ds);D(e,2,a);M("use_default_heartbeat_client")?Br(e):Br(e,void 0,eq)}else e={clientDocumentNonce:ds,clientScreenNonce:a},M("use_default_heartbeat_client")?tm("foregroundHeartbeatScreenAssociated",e):pr("foregroundHeartbeatScreenAssociated",e,eq)},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()}
z("yt_logging_screen.setCurrentScreen",ps);var qs=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};z("yt.msgs_",qs);function rs(a){zk(qs,arguments)}
;var ss={le:3611,wd:27686,xd:85013,yd:23462,Ad:157557,Bd:42016,Cd:62407,Dd:26926,zd:43781,Ed:51236,Fd:79148,Gd:50160,Hd:77504,Td:153587,Ud:87907,Vd:18630,Wd:54445,Xd:80935,Yd:152172,Zd:105675,ae:150723,be:37521,ce:147285,de:47786,ee:98349,ge:123695,he:6827,ie:29434,je:7282,ke:124448,oe:32276,ne:76278,pe:147868,qe:147869,re:93911,se:106531,te:27259,ue:27262,we:27263,ye:21759,ze:27107,Ae:62936,Be:49568,Ce:38408,De:80637,Ee:68727,Fe:68728,Ge:80353,He:80356,Ie:74610,Je:45707,Ke:83962,Le:83970,Me:46713,
Ne:89711,Oe:74612,Pe:155792,Qe:93265,Re:74611,Se:131380,Ue:128979,Ve:139311,We:128978,Te:131391,Xe:105350,Ze:139312,af:134800,Ye:131392,cf:113533,df:93252,ef:99357,gf:94521,hf:114252,jf:113532,kf:94522,ff:94583,lf:88E3,mf:139580,nf:93253,pf:93254,qf:94387,rf:94388,sf:93255,tf:97424,bf:72502,uf:110111,vf:76019,xf:117092,yf:117093,wf:89431,zf:110466,Af:77240,Bf:60508,Cf:148123,Df:148124,Ef:137401,Ff:137402,Gf:137046,Hf:73393,If:113534,Jf:92098,Kf:131381,Lf:84517,Mf:83759,Nf:80357,Of:86113,Pf:72598,
Qf:72733,Rf:107349,Sf:124275,Tf:118203,Uf:133275,Vf:152569,Wf:156651,Xf:133274,Yf:133272,Zf:133273,ag:133276,cg:144507,dg:143247,eg:156652,fg:143248,gg:143249,hg:143250,ig:143251,jg:156653,kg:144401,mg:117431,lg:133797,ng:153964,og:128572,pg:133405,qg:117429,rg:117430,sg:117432,tg:120080,ug:117259,vg:156655,wg:156654,xg:121692,yg:145656,zg:156656,Ag:145655,Bg:145653,Cg:145654,Dg:145657,Eg:132972,Fg:133051,Gg:133658,Hg:132971,Ig:97615,Kg:143359,Jg:143356,Mg:143361,Lg:143358,Og:143360,Ng:143357,Pg:142303,
Qg:143353,Rg:143354,Sg:144479,Tg:143355,Ug:31402,Wg:133624,Xg:146477,Yg:133623,Zg:133622,Vg:133621,ah:84774,bh:95117,dh:150497,eh:98930,fh:98931,gh:98932,hh:153320,ih:153321,jh:43347,kh:129889,lh:149123,mh:45474,nh:100352,oh:84758,ph:98443,qh:117985,rh:74613,sh:155911,th:74614,uh:64502,vh:136032,wh:74615,xh:74616,yh:122224,zh:74617,Ah:77820,Bh:74618,Ch:93278,Dh:93274,Eh:93275,Fh:93276,Gh:22110,Hh:29433,Ih:133798,Jh:132295,Lh:120541,Nh:82047,Oh:113550,Ph:75836,Qh:75837,Rh:42352,Sh:84512,Th:76065,Uh:75989,
Zh:16623,ai:32594,bi:27240,ci:32633,di:74858,fi:156999,hi:3945,gi:16989,ii:45520,ji:25488,ki:25492,li:25494,mi:55760,ni:14057,oi:18451,ri:57204,si:57203,ti:17897,vi:57205,wi:18198,xi:17898,yi:17909,zi:43980,Ai:46220,Bi:11721,Ci:147994,Di:49954,Ei:96369,Fi:3854,Gi:151633,Hi:56251,Ii:25624,Ji:152036,aj:16906,bj:99999,cj:68172,dj:27068,ej:47973,fj:72773,gj:26970,hj:26971,ij:96805,jj:17752,kj:73233,lj:109512,mj:22256,nj:14115,oj:22696,pj:89278,qj:89277,rj:109513,sj:43278,tj:43459,uj:43464,vj:89279,wj:43717,
xj:55764,yj:22255,zj:147912,Aj:89281,Bj:40963,Cj:43277,Dj:43442,Ej:91824,Fj:120137,Gj:96367,Hj:36850,Ij:72694,Jj:37414,Kj:36851,Mj:124863,Lj:121343,Nj:73491,Oj:54473,Pj:43375,Qj:46674,Rj:143815,Sj:139095,Tj:144402,Uj:149968,Vj:149969,Wj:32473,Xj:72901,Yj:72906,Zj:50947,ak:50612,bk:50613,ck:50942,dk:84938,ek:84943,fk:84939,gk:84941,hk:84944,ik:84940,jk:84942,kk:35585,lk:51926,mk:79983,nk:63238,pk:18921,qk:63241,rk:57893,sk:41182,tk:135732,uk:33424,vk:22207,wk:42993,xk:36229,yk:22206,zk:22205,Ak:18993,
Bk:19001,Ck:18990,Dk:18991,Ek:18997,Fk:18725,Gk:19003,Hk:36874,Ik:44763,Jk:33427,Kk:67793,Lk:22182,Mk:37091,Nk:34650,Ok:50617,Pk:47261,Qk:22287,Rk:25144,Sk:97917,Tk:62397,Uk:150871,Vk:150874,Wk:125598,Xk:137935,Yk:36961,Zk:108035,al:27426,bl:27857,dl:27846,fl:27854,il:69692,jl:61411,kl:39299,ll:38696,ml:62520,nl:36382,ol:108701,pl:50663,ql:36387,rl:14908,sl:37533,ul:105443,vl:61635,wl:62274,xl:133818,yl:65702,zl:65703,Al:65701,Bl:76256,Cl:37671,Dl:49953,Fl:36216,Gl:28237,Hl:39553,Il:29222,Jl:26107,
Kl:38050,Ll:26108,Nl:120745,Ml:26109,Ol:26110,Pl:66881,Ql:28236,Rl:14586,Sl:57929,Tl:74723,Ul:44098,Vl:44099,Yl:23528,Zl:61699,Wl:134104,Xl:134103,am:59149,bm:101951,cm:97346,dm:118051,em:95102,fm:64882,gm:119505,hm:63595,im:63349,jm:95101,km:75240,lm:27039,mm:68823,nm:21537,om:83464,pm:75707,qm:83113,rm:101952,sm:101953,um:79610,vm:125755,wm:24402,xm:24400,ym:32925,Am:57173,zm:156421,Bm:122502,Cm:145268,Dm:138480,Em:64423,Fm:64424,Gm:33986,Hm:100828,Im:129089,Jm:21409,Nm:135155,Om:135156,Pm:135157,
Qm:135158,Rm:135159,Sm:135160,Tm:135161,Um:135162,Vm:135163,Wm:135164,Xm:135165,Ym:135166,Km:11070,Lm:11074,Mm:17880,Zm:14001,bn:30709,cn:30707,dn:30711,en:30710,fn:30708,an:26984,gn:146143,hn:63648,jn:63649,kn:51879,ln:111059,mn:5754,nn:20445,pn:151308,qn:151152,sn:130975,rn:130976,tn:110386,un:113746,vn:66557,xn:17310,yn:28631,zn:21589,An:154946,Bn:68012,Cn:60480,Dn:138664,En:141121,Fn:31571,Gn:141978,Hn:150105,In:150106,Jn:150107,Kn:150108,Ln:76980,Mn:41577,Nn:45469,Pn:38669,Qn:13768,Rn:13777,
Sn:141842,Tn:62985,Un:4724,Vn:59369,Wn:43927,Xn:43928,Yn:12924,Zn:100355,co:56219,eo:27669,fo:10337,bo:47896,ho:122629,ko:139723,jo:139722,lo:121258,mo:107598,no:127991,oo:96639,po:107536,qo:130169,ro:96661,so:145188,to:96658,uo:116646,vo:121122,wo:96660,xo:127738,yo:127083,zo:155281,Ao:147842,Bo:104443,Co:96659,Do:147595,Eo:106442,Fo:134840,Go:63667,Ho:63668,Io:63669,Jo:130686,Ko:147036,Lo:78314,Mo:147799,No:148649,Oo:55761,Po:127098,Qo:134841,Ro:96368,So:67374,To:48992,Uo:146176,Vo:49956,Wo:31961,
Xo:26388,Yo:23811,Zo:5E4,ap:126250,bp:96370,cp:47355,ep:47356,fp:37935,gp:45521,hp:21760,ip:83769,jp:49977,kp:49974,lp:93497,mp:93498,np:34325,qp:140759,rp:115803,sp:123707,tp:100081,up:35309,vp:68314,wp:25602,xp:100339,yp:143516,zp:59018,Ap:18248,Bp:50625,Cp:9729,Dp:37168,Ep:37169,Fp:21667,Gp:16749,Hp:18635,Ip:39305,Jp:18046,Kp:53969,Lp:8213,Mp:93926,Np:102852,Op:110099,Pp:22678,Qp:69076,Rp:137575,Tp:139224,Up:100856,Vp:154430,Wp:17736,Xp:3832,Yp:147111,Zp:55759,aq:64031,iq:93044,jq:93045,kq:34388,
lq:17657,mq:17655,nq:39579,oq:39578,pq:77448,qq:8196,rq:11357,sq:69877,tq:8197,uq:156512,wq:156509,xq:82039};function ts(){var a=vb(us),b;return(new yf(function(c,d){a.onSuccess=function(e){fl(e)?c(new vs(e)):d(new ws("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new ws("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new ws("Request timed out","net.timeout",e))};
b=nl("//googleads.g.doubleclick.net/pagead/id",a)})).gb(function(c){c instanceof Ff&&b.abort();
return Df(c)})}
function ws(a,b,c){ab.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
t(ws,ab);function vs(a){this.xhr=a}
;function xs(){this.i=0;this.ka=null}
xs.prototype.then=function(a,b,c){return 1===this.i&&a?(a=a.call(c,this.ka))&&"function"===typeof a.then?a:ys(a):2===this.i&&b?(a=b.call(c,this.ka))&&"function"===typeof a.then?a:zs(a):this};
xs.prototype.getValue=function(){return this.ka};
xs.prototype.$goog_Thenable=!0;function zs(a){var b=new xs;a=void 0===a?null:a;b.i=2;b.ka=void 0===a?null:a;return b}
function ys(a){var b=new xs;a=void 0===a?null:a;b.i=1;b.ka=void 0===a?null:a;return b}
;function As(a,b){if(a)return a[b.name]}
;function Bs(a,b){var c=void 0===c?{}:c;a={method:void 0===b?"POST":b,mode:al(a)?"same-origin":"cors",credentials:al(a)?"same-origin":"include"};b={};for(var d=p(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);0<Object.keys(b).length&&(a.headers=b);return a}
;function Cs(){return sg()||jm&&km("applewebkit")&&!km("version")&&(!km("safari")||km("gsa/"))||Qc&&km("version/")?!0:L("EOM_VISITOR_DATA")?!1:!0}
;function Ds(a){a:{var b=a.raw_embedded_player_response;if(!b&&(a=a.embedded_player_response))try{b=JSON.parse(a)}catch(d){b="EMBEDDED_PLAYER_MODE_UNKNOWN";break a}if(b)b:{for(var c in Yh)if(Yh[c]==b.embeddedPlayerMode){b=Yh[c];break b}b="EMBEDDED_PLAYER_MODE_UNKNOWN"}else b="EMBEDDED_PLAYER_MODE_UNKNOWN"}return"EMBEDDED_PLAYER_MODE_PFL"===b}
;function Es(a){ab.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Fs;this.isTimeout=a instanceof ws&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Ff}
t(Es,ab);Es.prototype.name="BiscottiError";function Fs(){ab.call(this,"Biscotti ID is missing from server")}
t(Fs,ab);Fs.prototype.name="BiscottiMissingError";var us={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Gs=null;function Hs(){if(M("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Cs())return Error("User has not consented - not fetching biscotti id.");var a=L("PLAYER_VARS",{});if("1"==tb(a))return Error("Biscotti ID is not available in private embed mode");if(Ds(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Qk(){var a=Hs();if(void 0!==a)return Df(a);Gs||(Gs=ts().then(Is).gb(function(b){return Js(2,b)}));
return Gs}
function Is(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Fs;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Fs;a=a.id;Rk(a);Gs=ys(a);Ks(18E5,2);return a}
function Js(a,b){b=new Es(b);Rk("");Gs=zs(b);0<a&&Ks(12E4,a-1);throw b;}
function Ks(a,b){gl(function(){ts().then(Is,function(c){return Js(b,c)}).gb(cb)},a)}
function Ls(){try{var a=B("yt.ads.biscotti.getId_");return a?a():Qk()}catch(b){return Df(b)}}
;function Ms(a){if("1"!=tb(L("PLAYER_VARS",{}))){a&&Pk();try{Ls().then(function(){},function(){}),gl(Ms,18E5)}catch(b){Nk(b)}}}
;function Ns(){this.od=!0}
function Os(a){var b={},c=ug([]);c&&(b.Authorization=c,c=a=null==a?void 0:a.sessionIndex,void 0===c&&(c=Number(L("SESSION_INDEX",0)),c=isNaN(c)?0:c),M("voice_search_auth_header_removal")||(b["X-Goog-AuthUser"]=c),"INNERTUBE_HOST_OVERRIDE"in Dk||(b["X-Origin"]=window.location.origin),void 0===a&&"DELEGATED_SESSION_ID"in Dk&&(b["X-Goog-PageId"]=L("DELEGATED_SESSION_ID")));return b}
;var Ps={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};var Qs=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function Rs(){var a=void 0===a?window.location.href:a;if(M("kevlar_disable_theme_param"))return null;mc(nc(5,a));try{var b=Zk(a).theme;return Qs.get(b)||null}catch(c){}return null}
;function Ss(){this.i={};if(this.j=yl()){var a=qg.get("CONSISTENCY",void 0);a&&Ts(this,{encryptedTokenJarContents:a})}}
Ss.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=(null==(c=b.ha.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=p(b);for(c=e.next();!c.done;c=e.next())delete this.i[c.value.encryptedTokenJarContents];Ts(this,a)}};
function Ts(a,b){if(b.encryptedTokenJarContents&&(a.i[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.i[b.encryptedTokenJarContents]},1E3*c);
a.j&&xl("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Us=window.location.hostname.split(".").slice(-2).join(".");function Vs(){var a=L("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===L("INNERTUBE_CLIENT_NAME")&&(this.i=Ws(this))&&(a=this.i.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.j=void 0)}
var Xs;Vs.getInstance=function(){Xs=B("yt.clientLocationService.instance");Xs||(Xs=new Vs,z("yt.clientLocationService.instance",Xs));return Xs};
Vs.prototype.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.j?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.j.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.j.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.j.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
Vs.prototype.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.j=void 0,"TVHTML5"===L("INNERTUBE_CLIENT_NAME")?(this.i=Ws(this))&&this.i.set("yt-location-playability-token",a,15552E3):xl("YT_CL",JSON.stringify({loctok:a}),15552E3,Us,!0))};
function Ws(a){return void 0===a.i?new Wl("yt-client-location"):a.i}
Vs.prototype.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;"MWEB"===L("INNERTUBE_CLIENT_NAME")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.j=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
Vs.prototype.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};function Ys(a,b){var c,d=null==(c=As(a,ej))?void 0:c.signal;if(d&&b.La&&(c=b.La[d]))return c();var e;if((c=null==(e=As(a,cj))?void 0:e.request)&&b.Ec&&(e=b.Ec[c]))return e();for(var f in a)if(b.Ob[f]&&(a=b.Ob[f]))return a()}
;var Zs=Symbol("injectionDeps");function $s(a){this.name=a}
$s.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function at(){this.key=bt}
function ct(){this.providers=new Map;this.i=new Map}
ct.prototype.resolve=function(a){return a instanceof at?dt(this,a.key,[],!0):dt(this,a,[])};
function dt(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.i.has(b))return a.i.get(b);if(!a.providers.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.providers.get(b);c.push(b);if(d.qc)var e=d.qc;else if(d.vd)e=d[Zs]?et(a,d[Zs],c):[],e=d.vd.apply(d,ia(e));else if(d.pc){e=d.pc;var f=e[Zs]?et(a,e[Zs],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ia(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Sq||a.i.set(b,e);
return e}
function et(a,b,c){return b?b.map(function(d){return d instanceof at?dt(a,d.key,c,!0):dt(a,d,c)}):[]}
;var ft;function gt(){ft||(ft=new ct);return ft}
;function ht(a){return function(){return new a}}
;var jt={},kt=(jt.WEB_UNPLUGGED="^unplugged/",jt.WEB_UNPLUGGED_ONBOARDING="^unplugged/",jt.WEB_UNPLUGGED_OPS="^unplugged/",jt.WEB_UNPLUGGED_PUBLIC="^unplugged/",jt.WEB_CREATOR="^creator/",jt.WEB_KIDS="^kids/",jt.WEB_EXPERIMENTS="^experiments/",jt.WEB_MUSIC="^music/",jt.WEB_REMIX="^music/",jt.WEB_MUSIC_EMBEDDED_PLAYER="^music/",jt.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",jt);
function lt(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=kt[b];if(c){var d=new RegExp(c),e=p(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(kt).forEach(function(g){var h=p(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=p(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function mt(){}
mt.prototype.o=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?Ps:c;var d=a.clickTrackingParams,e=this.m,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=L("INNERTUBE_CONTEXT");if(g){g=wb(g);M("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&(h.clientFormFactor=L("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||
1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;Al.getInstance();var m="USER_INTERFACE_THEME_LIGHT";Dl(165)?m="USER_INTERFACE_THEME_DARK":Dl(174)?m="USER_INTERFACE_THEME_LIGHT":!M("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(m="USER_INTERFACE_THEME_DARK");k=k?m:Rs()||m;h.userInterfaceTheme=k;if(!f){if(k=
Kl())h.connectionType=k;M("web_log_effective_connection_type")&&(k=Ll())&&(g.client.effectiveConnectionType=k)}var q;if(M("web_log_memory_total_kbytes")&&(null==(q=y.navigator)?0:q.deviceMemory)){var r;q=null==(r=y.navigator)?void 0:r.deviceMemory;g.client.memoryTotalKbytes=""+1E6*q}r=Zk(y.location.href);!M("web_populate_internal_geo_killswitch")&&r.internalcountrycode&&(h.internalGeo=r.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:y.location.href},M("kevlar_woffle")&&
vl.i&&(r=vl.i,h.mainAppWebInfo.pwaInstallabilityStatus=!r.i&&r.j?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=wl(),h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):"TVHTML5"===h.clientName&&(!M("web_lr_app_quality_killswitch")&&(r=L("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:r})),r=L("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||
{},{certificationScope:r}));if(!M("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var x=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(nb){}x=void 0}x&&(h.timeZone=x)}(x=Ik())?h.experimentsToken=x:delete h.experimentsToken;x=Jk();Ss.i||(Ss.i=new Ss);h=Ss.i.i;r=[];q=0;for(var u in h)r[q++]=h[u];g.request=Object.assign({},g.request,{internalExperimentFlags:x,consistencyTokenJars:r});!M("web_prequest_context_killswitch")&&(u=L("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&
(g.request.externalPrequestContext=u);x=Al.getInstance();u=Dl(58);x=x.get("gsml","");g.user=Object.assign({},g.user);u&&(g.user.enableSafetyMode=u);x&&(g.user.lockedSafetyMode=!0);M("warm_op_csn_cleanup")?e&&(f=ms())&&(g.clientScreenNonce=f):!f&&(f=ms())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=B("yt.mdx.remote.remoteClient_"))g.remoteClient=d;M("web_enable_client_location_service")&&Vs.getInstance().setLocationOnInnerTubeContext(g);try{var A=bl(),E=A.bid;delete A.bid;
g.adSignalsInfo={params:[],bid:E};var F=p(Object.entries(A));for(var O=F.next();!O.done;O=F.next()){var N=p(O.value),R=N.next().value,ca=N.next().value;A=R;E=ca;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:A,value:""+E})}}catch(nb){Ur(nb)}F=g}else Ur(Error("Error: No InnerTubeContext shell provided in ytconfig.")),F={};F={context:F};if(O=this.i(a)){this.j(F,O,b);var V;b="/youtubei/v1/"+lt(this.l());(O=null==(V=As(a.commandMetadata,dj))?void 0:V.apiUrl)&&(b=O);V=b;(b=L("INNERTUBE_HOST_OVERRIDE"))&&
(V=String(b)+String(pc(V)));b={};b.key=L("INNERTUBE_API_KEY");M("json_condensed_response")&&(b.prettyPrint="false");V=$k(V,b||{},!1);a=M("kevlar_response_command_processor_page")?Object.assign({},{command:a},void 0):Object.assign({},void 0);a={input:V,va:Bs(V),ha:F,config:a};a.config.Ra?a.config.Ra.identity=c:a.config.Ra={identity:c};return a}Ur(new Q("Error: Failed to create Request from Command.",a))};
fa.Object.defineProperties(mt.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!1}}});function nt(){}
t(nt,mt);nt.prototype.o=function(){return{input:"/getDatasyncIdsEndpoint",va:Bs("/getDatasyncIdsEndpoint","GET"),ha:{}}};
nt.prototype.l=function(){return[]};
nt.prototype.i=function(){};
nt.prototype.j=function(){};var ot={},pt=(ot.GET_DATASYNC_IDS=ht(nt),ot);function qt(a){var b=Ja.apply(1,arguments);if(!rt(a)||b.some(function(d){return!rt(d)}))throw Error("Only objects may be merged.");
b=p(b);for(var c=b.next();!c.done;c=b.next())st(a,c.value);return a}
function st(a,b){for(var c in b)if(rt(b[c])){if(c in a&&!rt(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});st(a[c],b[c])}else if(tt(b[c])){if(c in a&&!tt(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);ut(a[c],b[c])}else a[c]=b[c];return a}
function ut(a,b){b=p(b);for(var c=b.next();!c.done;c=b.next())c=c.value,rt(c)?a.push(st({},c)):tt(c)?a.push(ut([],c)):a.push(c);return a}
function rt(a){return"object"===typeof a&&!Array.isArray(a)}
function tt(a){return"object"===typeof a&&Array.isArray(a)}
;function vt(a,b){ao.call(this,1,arguments);this.timer=b}
t(vt,ao);var wt=new bo("aft-recorded",vt);var xt=window;function zt(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var S=xt.performance||xt.mozPerformance||xt.msPerformance||xt.webkitPerformance||new zt;var At=!1,Bt={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};
Wa(S.clearResourceTimings||S.webkitClearResourceTimings||S.mozClearResourceTimings||S.msClearResourceTimings||S.oClearResourceTimings||cb,S);function Ct(a){var b=Dt(a);if(b.aft)return b.aft;a=L((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function Et(){var a;if(M("csi_use_performance_navigation_timing")||M("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=null==S?void 0:null==(a=S.getEntriesByType)?void 0:null==(b=a.call(S,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=Ft(e.requestStart),e.responseEnd=Ft(e.responseEnd),e.redirectStart=Ft(e.redirectStart),e.redirectEnd=Ft(e.redirectEnd),e.domainLookupEnd=Ft(e.domainLookupEnd),e.connectStart=Ft(e.connectStart),e.connectEnd=
Ft(e.connectEnd),e.responseStart=Ft(e.responseStart),e.secureConnectionStart=Ft(e.secureConnectionStart),e.domainLookupStart=Ft(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=S.timing}else a=S.timing;return a}
function Gt(){return(M("csi_use_time_origin")||M("csi_use_time_origin_tvhtml5"))&&S.timeOrigin?Math.floor(S.timeOrigin):S.timing.navigationStart}
function Ft(a){return Math.round(Gt()+a)}
function Ht(a){var b;(b=B("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},z("ytcsi."+(a||"")+"data_",b));return b}
function It(a){a=Ht(a);a.info||(a.info={});return a.info}
function Dt(a){a=Ht(a);a.tick||(a.tick={});return a.tick}
function Jt(a){a=Ht(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Kt(a){a=Jt(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function Lt(a){a=Jt(a);a.jspbInfos||(a.jspbInfos=[]);return a.jspbInfos}
function Mt(a){var b=Ht(a).nonce;b||(b=bs(),Ht(a).nonce=b);return b}
function Nt(a){var b=Dt(a||""),c=Ct(a);c&&!At&&(ho(wt,new vt(Math.round(c-b._start),a)),At=!0)}
function Ot(a,b){for(var c=p(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!Ot(a[d],b[d]))return!1;return!0}
;function Pt(){if(S.getEntriesByType){var a=S.getEntriesByType("paint");if(a=kb(a,function(b){return"first-paint"===b.name}))return Ft(a.startTime)}a=S.timing;
return a.Tc?Math.max(0,a.Tc):0}
;function Qt(){var a=B("ytcsi.debug");a||(a=[],z("ytcsi.debug",a),z("ytcsi.reference",{}));return a}
function Rt(a){a=a||"";var b=B("ytcsi.reference");b||(Qt(),b=B("ytcsi.reference"));if(b[a])return b[a];var c=Qt(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var T={},St=(T.auto_search="LATENCY_ACTION_AUTO_SEARCH",T.ad_to_ad="LATENCY_ACTION_AD_TO_AD",T.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",T["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",T.app_startup="LATENCY_ACTION_APP_STARTUP",T["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",T["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",T["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",T["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",T.browse="LATENCY_ACTION_BROWSE",
T.cast_splash="LATENCY_ACTION_CAST_SPLASH",T.channels="LATENCY_ACTION_CHANNELS",T.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",T["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",T["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",T["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",T["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",T["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",T["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",
T["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",T["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",T["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",T["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",T["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",T["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",T["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",T.chips="LATENCY_ACTION_CHIPS",
T["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",T["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",T["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",T.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",T.embed="LATENCY_ACTION_EMBED",T.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",T.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",T.explore="LATENCY_ACTION_EXPLORE",T.home=
"LATENCY_ACTION_HOME",T.library="LATENCY_ACTION_LIBRARY",T.live="LATENCY_ACTION_LIVE",T.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",T.onboarding="LATENCY_ACTION_ONBOARDING",T.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",T.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",T.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",T.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",T["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",T["post.edit"]=
"LATENCY_ACTION_CREATOR_POST_EDIT",T.prebuffer="LATENCY_ACTION_PREBUFFER",T.prefetch="LATENCY_ACTION_PREFETCH",T.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",T.profile_switcher="LATENCY_ACTION_LOGIN",T.reel_watch="LATENCY_ACTION_REEL_WATCH",T.results="LATENCY_ACTION_RESULTS",T["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",T.search_ui="LATENCY_ACTION_SEARCH_UI",T.search_suggest="LATENCY_ACTION_SUGGEST",T.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",T.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",
T.seek="LATENCY_ACTION_PLAYER_SEEK",T.settings="LATENCY_ACTION_SETTINGS",T.store="LATENCY_ACTION_STORE",T.tenx="LATENCY_ACTION_TENX",T.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",T.watch="LATENCY_ACTION_WATCH",T.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",T["watch,watch7"]="LATENCY_ACTION_WATCH",T["watch,watch7_html5"]="LATENCY_ACTION_WATCH",T["watch,watch7ad"]="LATENCY_ACTION_WATCH",T["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",T.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",T.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",
T["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",T["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",T["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",T["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",T["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",T["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",T["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",T["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",
T["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",T.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",T.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",T.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",T),U={},Tt=(U.ad_allowed="adTypesAllowed",U.yt_abt="adBreakType",U.ad_cpn="adClientPlaybackNonce",U.ad_docid="adVideoId",U.yt_ad_an="adNetworks",U.ad_at="adType",U.aida="appInstallDataAgeMs",U.browse_id="browseId",U.p="httpProtocol",U.t="transportProtocol",
U.cs="commandSource",U.cpn="clientPlaybackNonce",U.ccs="creatorInfo.creatorCanaryState",U.ctop="creatorInfo.topEntityType",U.csn="clientScreenNonce",U.docid="videoId",U.GetHome_rid="requestIds",U.GetSearch_rid="requestIds",U.GetPlayer_rid="requestIds",U.GetWatchNext_rid="requestIds",U.GetBrowse_rid="requestIds",U.GetLibrary_rid="requestIds",U.is_continuation="isContinuation",U.is_nav="isNavigation",U.b_p="kabukiInfo.browseParams",U.is_prefetch="kabukiInfo.isPrefetch",U.is_secondary_nav="kabukiInfo.isSecondaryNav",
U.nav_type="kabukiInfo.navigationType",U.prev_browse_id="kabukiInfo.prevBrowseId",U.query_source="kabukiInfo.querySource",U.voz_type="kabukiInfo.vozType",U.yt_lt="loadType",U.mver="creatorInfo.measurementVersion",U.yt_ad="isMonetized",U.nr="webInfo.navigationReason",U.nrsu="navigationRequestedSameUrl",U.pnt="performanceNavigationTiming",U.prt="playbackRequiresTap",U.plt="playerInfo.playbackType",U.pis="playerInfo.playerInitializedState",U.paused="playerInfo.isPausedOnLoad",U.yt_pt="playerType",U.fmt=
"playerInfo.itag",U.yt_pl="watchInfo.isPlaylist",U.yt_pre="playerInfo.preloadType",U.yt_ad_pr="prerollAllowed",U.pa="previousAction",U.yt_red="isRedSubscriber",U.rce="mwebInfo.responseContentEncoding",U.rc="resourceInfo.resourceCache",U.scrh="screenHeight",U.scrw="screenWidth",U.st="serverTimeMs",U.ssdm="shellStartupDurationMs",U.br_trs="tvInfo.bedrockTriggerState",U.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",U.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",U.label="tvInfo.label",
U.is_mdx="tvInfo.isMdx",U.preloaded="tvInfo.isPreloaded",U.aac_type="tvInfo.authAccessCredentialType",U.upg_player_vis="playerInfo.visibilityState",U.query="unpluggedInfo.query",U.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",U.yt_vst="videoStreamType",U.vph="viewportHeight",U.vpw="viewportWidth",U.yt_vis="isVisible",U.rcl="mwebInfo.responseContentLength",U.GetSettings_rid="requestIds",U.GetTrending_rid="requestIds",U.GetMusicSearchSuggestions_rid="requestIds",U.REQUEST_ID="requestIds",U),
Ut="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),Vt={},Wt=(Vt.ccs="CANARY_STATE_",Vt.mver="MEASUREMENT_VERSION_",Vt.pis="PLAYER_INITIALIZED_STATE_",Vt.yt_pt="LATENCY_PLAYER_",Vt.pa="LATENCY_ACTION_",Vt.ctop="TOP_ENTITY_TYPE_",
Vt.yt_vst="VIDEO_STREAM_TYPE_",Vt),Xt="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");function Yt(a){return St[a]||"LATENCY_ACTION_UNKNOWN"}
function Zt(a,b,c){c=Jt(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in Tt){c=Tt[a];0<=eb(Ut,c)&&(b=!!b);a in Wt&&"string"===typeof b&&(b=Wt[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return qt({},d)}0<=eb(Xt,a)||Vr(new Q("Unknown label logged with GEL CSI",a))}
;var W={LATENCY_ACTION_KIDS_PROFILE_SWITCHER:90,LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER:100,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC:46,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR:37,LATENCY_ACTION_SPINNER_DISPLAYED:14,LATENCY_ACTION_PLAYABILITY_CHECK:10,LATENCY_ACTION_PROCESS:9,LATENCY_ACTION_APP_STARTUP:5,LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING:179,LATENCY_ACTION_COMMERCE_TRANSACTION:184,LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC:173,LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC:172,
LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC:171,LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC:170,LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC:169,LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC:168,LATENCY_ACTION_GET_OFFERS_RPC:167,LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC:166,LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC:165,LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC:164,LATENCY_ACTION_GET_OFFER_DETAILS_RPC:163,LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC:162,LATENCY_ACTION_GET_TIP_MODULE_RPC:161,LATENCY_ACTION_HANDLE_TRANSACTION_RPC:160,
LATENCY_ACTION_COMPLETE_TRANSACTION_RPC:159,LATENCY_ACTION_GET_CART_RPC:158,LATENCY_ACTION_THUMBNAIL_FETCH:156,LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK:154,LATENCY_ACTION_SHARE_VIDEO:153,LATENCY_ACTION_AD_TO_VIDEO_INT:152,LATENCY_ACTION_ABANDONED_BROWSE:151,LATENCY_ACTION_PLAYER_ROTATION:150,LATENCY_ACTION_GENERIC_WEB_VIEW:183,LATENCY_ACTION_SHOPPING_IN_APP:124,LATENCY_ACTION_PLAYER_ATTESTATION:121,LATENCY_ACTION_PLAYER_SEEK:119,LATENCY_ACTION_SUPER_STICKER_BUY_FLOW:114,LATENCY_ACTION_DOWNLOADS_DATA_ACCESS:180,
LATENCY_ACTION_BLOCKS_PERFORMANCE:148,LATENCY_ACTION_ASSISTANT_QUERY:138,LATENCY_ACTION_ASSISTANT_SETTINGS:137,LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF:129,LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF:128,LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE:127,LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION:123,LATENCY_ACTION_NETWORKLESS_PERFORMANCE:122,LATENCY_ACTION_DOWNLOADS_EXPANSION:133,LATENCY_ACTION_ENTITY_TRANSFORM:131,LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER:96,LATENCY_ACTION_EMBEDS_SET_VIDEO:95,
LATENCY_ACTION_SETTINGS:93,LATENCY_ACTION_ABANDONED_STARTUP:81,LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY:80,LATENCY_ACTION_MEDIA_BROWSER_SEARCH:79,LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE:78,LATENCY_ACTION_WHO_IS_WATCHING:77,LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH:76,LATENCY_ACTION_LITE_SWITCH_ACCOUNT:73,LATENCY_ACTION_ELEMENTS_PERFORMANCE:70,LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION:69,LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION:65,LATENCY_ACTION_OFFLINE_STORE_START:61,LATENCY_ACTION_REEL_EDITOR:58,
LATENCY_ACTION_CHANNEL_SUBSCRIBE:56,LATENCY_ACTION_CHANNEL_PREVIEW:55,LATENCY_ACTION_PREFETCH:52,LATENCY_ACTION_ABANDONED_WATCH:45,LATENCY_ACTION_LOAD_COMMENT_REPLIES:26,LATENCY_ACTION_LOAD_COMMENTS:25,LATENCY_ACTION_EDIT_COMMENT:24,LATENCY_ACTION_NEW_COMMENT:23,LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING:19,LATENCY_ACTION_EMBED:18,LATENCY_ACTION_MDX_LAUNCH:15,LATENCY_ACTION_RESOLVE_URL:13,LATENCY_ACTION_CAST_SPLASH:149,LATENCY_ACTION_MDX_STREAM_TRANSFER:178,LATENCY_ACTION_MDX_CAST:120,LATENCY_ACTION_MDX_COMMAND:12,
LATENCY_ACTION_REEL_SELECT_SEGMENT:136,LATENCY_ACTION_ACCELERATED_EFFECTS:145,LATENCY_ACTION_EDIT_AUDIO_GEN:182,LATENCY_ACTION_UPLOAD_AUDIO_MIXER:147,LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING:157,LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING:146,LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK:130,LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD:125,LATENCY_ACTION_SHORTS_VIDEO_INGESTION:155,LATENCY_ACTION_SHORTS_GALLERY:107,LATENCY_ACTION_SHORTS_TRIM:105,LATENCY_ACTION_SHORTS_EDIT:104,LATENCY_ACTION_SHORTS_CAMERA:103,
LATENCY_ACTION_PARENT_TOOLS_DASHBOARD:102,LATENCY_ACTION_PARENT_TOOLS_COLLECTION:101,LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS:116,LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS:115,LATENCY_ACTION_MUSIC_ALBUM_DETAIL:72,LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL:71,LATENCY_ACTION_STORE:175,LATENCY_ACTION_CHIPS:68,LATENCY_ACTION_SEARCH_ZERO_STATE:67,LATENCY_ACTION_LIVE_PAGINATION:117,LATENCY_ACTION_LIVE:20,LATENCY_ACTION_PREBUFFER:40,LATENCY_ACTION_TENX:39,LATENCY_ACTION_KIDS_PROFILE_SETTINGS:94,LATENCY_ACTION_KIDS_WATCH_IT_AGAIN:92,
LATENCY_ACTION_KIDS_SECRET_CODE:91,LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS:89,LATENCY_ACTION_KIDS_ONBOARDING:88,LATENCY_ACTION_KIDS_VOICE_SEARCH:82,LATENCY_ACTION_KIDS_CURATED_COLLECTION:62,LATENCY_ACTION_KIDS_LIBRARY:53,LATENCY_ACTION_CREATOR_PROMOTION_LIST:186,LATENCY_ACTION_CREATOR_PROMOTION_EDIT:185,LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS:38,LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION:74,LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING:141,LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS:142,LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC:51,
LATENCY_ACTION_CREATOR_VIDEO_EDITOR:50,LATENCY_ACTION_CREATOR_VIDEO_EDIT:36,LATENCY_ACTION_CREATOR_VIDEO_COMMENTS:34,LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS:33,LATENCY_ACTION_CREATOR_SONG_ANALYTICS:176,LATENCY_ACTION_CREATOR_POST_LIST:112,LATENCY_ACTION_CREATOR_POST_EDIT:110,LATENCY_ACTION_CREATOR_POST_COMMENTS:111,LATENCY_ACTION_CREATOR_LIVE_STREAMING:108,LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT:174,LATENCY_ACTION_CREATOR_DIALOG_UPLOADS:86,LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES:87,LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS:32,
LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS:48,LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS:139,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT:177,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC:99,LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION:43,LATENCY_ACTION_CREATOR_CHANNEL_EDITING:113,LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD:49,LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT:44,LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS:66,LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS:31,LATENCY_ACTION_CREATOR_ARTIST_PROFILE:85,LATENCY_ACTION_CREATOR_ARTIST_CONCERTS:84,
LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS:83,LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE:140,LATENCY_ACTION_EXPERIMENTAL_WATCH_UI:181,LATENCY_ACTION_STORYBOARD_THUMBNAILS:118,LATENCY_ACTION_SEARCH_THUMBNAILS:59,LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD:54,LATENCY_ACTION_VOICE_ASSISTANT:47,LATENCY_ACTION_SEARCH_UI:35,LATENCY_ACTION_SUGGEST:30,LATENCY_ACTION_AUTO_SEARCH:126,LATENCY_ACTION_DOWNLOADS:98,LATENCY_ACTION_EXPLORE:75,LATENCY_ACTION_VIDEO_LIST:63,LATENCY_ACTION_HOME_RESUME:60,LATENCY_ACTION_SUBSCRIPTIONS_LIST:57,
LATENCY_ACTION_THUMBNAIL_LOAD:42,LATENCY_ACTION_FIRST_THUMBNAIL_LOAD:29,LATENCY_ACTION_SUBSCRIPTIONS_FEED:109,LATENCY_ACTION_SUBSCRIPTIONS:28,LATENCY_ACTION_TRENDING:27,LATENCY_ACTION_LIBRARY:21,LATENCY_ACTION_VIDEO_THUMBNAIL:8,LATENCY_ACTION_SHOW_MORE:7,LATENCY_ACTION_VIDEO_PREVIEW:6,LATENCY_ACTION_PREBUFFER_VIDEO:144,LATENCY_ACTION_PREFETCH_VIDEO:143,LATENCY_ACTION_DIRECT_PLAYBACK:132,LATENCY_ACTION_REEL_WATCH:41,LATENCY_ACTION_AD_TO_AD:22,LATENCY_ACTION_VIDEO_TO_AD:17,LATENCY_ACTION_AD_TO_VIDEO:16,
LATENCY_ACTION_ONBOARDING:135,LATENCY_ACTION_LOGIN:97,LATENCY_ACTION_BROWSE:11,LATENCY_ACTION_CHANNELS:4,LATENCY_ACTION_WATCH:3,LATENCY_ACTION_RESULTS:2,LATENCY_ACTION_HOME:1,LATENCY_ACTION_STARTUP:106,LATENCY_ACTION_UNKNOWN:0};W[W.LATENCY_ACTION_KIDS_PROFILE_SWITCHER]="LATENCY_ACTION_KIDS_PROFILE_SWITCHER";W[W.LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER]="LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER";W[W.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC";
W[W.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR";W[W.LATENCY_ACTION_SPINNER_DISPLAYED]="LATENCY_ACTION_SPINNER_DISPLAYED";W[W.LATENCY_ACTION_PLAYABILITY_CHECK]="LATENCY_ACTION_PLAYABILITY_CHECK";W[W.LATENCY_ACTION_PROCESS]="LATENCY_ACTION_PROCESS";W[W.LATENCY_ACTION_APP_STARTUP]="LATENCY_ACTION_APP_STARTUP";W[W.LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING";W[W.LATENCY_ACTION_COMMERCE_TRANSACTION]="LATENCY_ACTION_COMMERCE_TRANSACTION";
W[W.LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC]="LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC";W[W.LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC]="LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC";W[W.LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC]="LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC";W[W.LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC]="LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC";W[W.LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC]="LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC";
W[W.LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC]="LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC";W[W.LATENCY_ACTION_GET_OFFERS_RPC]="LATENCY_ACTION_GET_OFFERS_RPC";W[W.LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC]="LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC";W[W.LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC]="LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC";W[W.LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC]="LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC";W[W.LATENCY_ACTION_GET_OFFER_DETAILS_RPC]="LATENCY_ACTION_GET_OFFER_DETAILS_RPC";
W[W.LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC]="LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC";W[W.LATENCY_ACTION_GET_TIP_MODULE_RPC]="LATENCY_ACTION_GET_TIP_MODULE_RPC";W[W.LATENCY_ACTION_HANDLE_TRANSACTION_RPC]="LATENCY_ACTION_HANDLE_TRANSACTION_RPC";W[W.LATENCY_ACTION_COMPLETE_TRANSACTION_RPC]="LATENCY_ACTION_COMPLETE_TRANSACTION_RPC";W[W.LATENCY_ACTION_GET_CART_RPC]="LATENCY_ACTION_GET_CART_RPC";W[W.LATENCY_ACTION_THUMBNAIL_FETCH]="LATENCY_ACTION_THUMBNAIL_FETCH";
W[W.LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK]="LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK";W[W.LATENCY_ACTION_SHARE_VIDEO]="LATENCY_ACTION_SHARE_VIDEO";W[W.LATENCY_ACTION_AD_TO_VIDEO_INT]="LATENCY_ACTION_AD_TO_VIDEO_INT";W[W.LATENCY_ACTION_ABANDONED_BROWSE]="LATENCY_ACTION_ABANDONED_BROWSE";W[W.LATENCY_ACTION_PLAYER_ROTATION]="LATENCY_ACTION_PLAYER_ROTATION";W[W.LATENCY_ACTION_GENERIC_WEB_VIEW]="LATENCY_ACTION_GENERIC_WEB_VIEW";W[W.LATENCY_ACTION_SHOPPING_IN_APP]="LATENCY_ACTION_SHOPPING_IN_APP";
W[W.LATENCY_ACTION_PLAYER_ATTESTATION]="LATENCY_ACTION_PLAYER_ATTESTATION";W[W.LATENCY_ACTION_PLAYER_SEEK]="LATENCY_ACTION_PLAYER_SEEK";W[W.LATENCY_ACTION_SUPER_STICKER_BUY_FLOW]="LATENCY_ACTION_SUPER_STICKER_BUY_FLOW";W[W.LATENCY_ACTION_DOWNLOADS_DATA_ACCESS]="LATENCY_ACTION_DOWNLOADS_DATA_ACCESS";W[W.LATENCY_ACTION_BLOCKS_PERFORMANCE]="LATENCY_ACTION_BLOCKS_PERFORMANCE";W[W.LATENCY_ACTION_ASSISTANT_QUERY]="LATENCY_ACTION_ASSISTANT_QUERY";W[W.LATENCY_ACTION_ASSISTANT_SETTINGS]="LATENCY_ACTION_ASSISTANT_SETTINGS";
W[W.LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF";W[W.LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF";W[W.LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE]="LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE";W[W.LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION]="LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION";W[W.LATENCY_ACTION_NETWORKLESS_PERFORMANCE]="LATENCY_ACTION_NETWORKLESS_PERFORMANCE";
W[W.LATENCY_ACTION_DOWNLOADS_EXPANSION]="LATENCY_ACTION_DOWNLOADS_EXPANSION";W[W.LATENCY_ACTION_ENTITY_TRANSFORM]="LATENCY_ACTION_ENTITY_TRANSFORM";W[W.LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER]="LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER";W[W.LATENCY_ACTION_EMBEDS_SET_VIDEO]="LATENCY_ACTION_EMBEDS_SET_VIDEO";W[W.LATENCY_ACTION_SETTINGS]="LATENCY_ACTION_SETTINGS";W[W.LATENCY_ACTION_ABANDONED_STARTUP]="LATENCY_ACTION_ABANDONED_STARTUP";W[W.LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY]="LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY";
W[W.LATENCY_ACTION_MEDIA_BROWSER_SEARCH]="LATENCY_ACTION_MEDIA_BROWSER_SEARCH";W[W.LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE]="LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE";W[W.LATENCY_ACTION_WHO_IS_WATCHING]="LATENCY_ACTION_WHO_IS_WATCHING";W[W.LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH]="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH";W[W.LATENCY_ACTION_LITE_SWITCH_ACCOUNT]="LATENCY_ACTION_LITE_SWITCH_ACCOUNT";W[W.LATENCY_ACTION_ELEMENTS_PERFORMANCE]="LATENCY_ACTION_ELEMENTS_PERFORMANCE";
W[W.LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION]="LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION";W[W.LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION]="LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION";W[W.LATENCY_ACTION_OFFLINE_STORE_START]="LATENCY_ACTION_OFFLINE_STORE_START";W[W.LATENCY_ACTION_REEL_EDITOR]="LATENCY_ACTION_REEL_EDITOR";W[W.LATENCY_ACTION_CHANNEL_SUBSCRIBE]="LATENCY_ACTION_CHANNEL_SUBSCRIBE";W[W.LATENCY_ACTION_CHANNEL_PREVIEW]="LATENCY_ACTION_CHANNEL_PREVIEW";W[W.LATENCY_ACTION_PREFETCH]="LATENCY_ACTION_PREFETCH";
W[W.LATENCY_ACTION_ABANDONED_WATCH]="LATENCY_ACTION_ABANDONED_WATCH";W[W.LATENCY_ACTION_LOAD_COMMENT_REPLIES]="LATENCY_ACTION_LOAD_COMMENT_REPLIES";W[W.LATENCY_ACTION_LOAD_COMMENTS]="LATENCY_ACTION_LOAD_COMMENTS";W[W.LATENCY_ACTION_EDIT_COMMENT]="LATENCY_ACTION_EDIT_COMMENT";W[W.LATENCY_ACTION_NEW_COMMENT]="LATENCY_ACTION_NEW_COMMENT";W[W.LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING]="LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING";W[W.LATENCY_ACTION_EMBED]="LATENCY_ACTION_EMBED";
W[W.LATENCY_ACTION_MDX_LAUNCH]="LATENCY_ACTION_MDX_LAUNCH";W[W.LATENCY_ACTION_RESOLVE_URL]="LATENCY_ACTION_RESOLVE_URL";W[W.LATENCY_ACTION_CAST_SPLASH]="LATENCY_ACTION_CAST_SPLASH";W[W.LATENCY_ACTION_MDX_STREAM_TRANSFER]="LATENCY_ACTION_MDX_STREAM_TRANSFER";W[W.LATENCY_ACTION_MDX_CAST]="LATENCY_ACTION_MDX_CAST";W[W.LATENCY_ACTION_MDX_COMMAND]="LATENCY_ACTION_MDX_COMMAND";W[W.LATENCY_ACTION_REEL_SELECT_SEGMENT]="LATENCY_ACTION_REEL_SELECT_SEGMENT";W[W.LATENCY_ACTION_ACCELERATED_EFFECTS]="LATENCY_ACTION_ACCELERATED_EFFECTS";
W[W.LATENCY_ACTION_EDIT_AUDIO_GEN]="LATENCY_ACTION_EDIT_AUDIO_GEN";W[W.LATENCY_ACTION_UPLOAD_AUDIO_MIXER]="LATENCY_ACTION_UPLOAD_AUDIO_MIXER";W[W.LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING]="LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING";W[W.LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING]="LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING";W[W.LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK]="LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK";W[W.LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD]="LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD";
W[W.LATENCY_ACTION_SHORTS_VIDEO_INGESTION]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION";W[W.LATENCY_ACTION_SHORTS_GALLERY]="LATENCY_ACTION_SHORTS_GALLERY";W[W.LATENCY_ACTION_SHORTS_TRIM]="LATENCY_ACTION_SHORTS_TRIM";W[W.LATENCY_ACTION_SHORTS_EDIT]="LATENCY_ACTION_SHORTS_EDIT";W[W.LATENCY_ACTION_SHORTS_CAMERA]="LATENCY_ACTION_SHORTS_CAMERA";W[W.LATENCY_ACTION_PARENT_TOOLS_DASHBOARD]="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD";W[W.LATENCY_ACTION_PARENT_TOOLS_COLLECTION]="LATENCY_ACTION_PARENT_TOOLS_COLLECTION";
W[W.LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS";W[W.LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS";W[W.LATENCY_ACTION_MUSIC_ALBUM_DETAIL]="LATENCY_ACTION_MUSIC_ALBUM_DETAIL";W[W.LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL]="LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL";W[W.LATENCY_ACTION_STORE]="LATENCY_ACTION_STORE";W[W.LATENCY_ACTION_CHIPS]="LATENCY_ACTION_CHIPS";W[W.LATENCY_ACTION_SEARCH_ZERO_STATE]="LATENCY_ACTION_SEARCH_ZERO_STATE";
W[W.LATENCY_ACTION_LIVE_PAGINATION]="LATENCY_ACTION_LIVE_PAGINATION";W[W.LATENCY_ACTION_LIVE]="LATENCY_ACTION_LIVE";W[W.LATENCY_ACTION_PREBUFFER]="LATENCY_ACTION_PREBUFFER";W[W.LATENCY_ACTION_TENX]="LATENCY_ACTION_TENX";W[W.LATENCY_ACTION_KIDS_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PROFILE_SETTINGS";W[W.LATENCY_ACTION_KIDS_WATCH_IT_AGAIN]="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN";W[W.LATENCY_ACTION_KIDS_SECRET_CODE]="LATENCY_ACTION_KIDS_SECRET_CODE";W[W.LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS";
W[W.LATENCY_ACTION_KIDS_ONBOARDING]="LATENCY_ACTION_KIDS_ONBOARDING";W[W.LATENCY_ACTION_KIDS_VOICE_SEARCH]="LATENCY_ACTION_KIDS_VOICE_SEARCH";W[W.LATENCY_ACTION_KIDS_CURATED_COLLECTION]="LATENCY_ACTION_KIDS_CURATED_COLLECTION";W[W.LATENCY_ACTION_KIDS_LIBRARY]="LATENCY_ACTION_KIDS_LIBRARY";W[W.LATENCY_ACTION_CREATOR_PROMOTION_LIST]="LATENCY_ACTION_CREATOR_PROMOTION_LIST";W[W.LATENCY_ACTION_CREATOR_PROMOTION_EDIT]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT";
W[W.LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS";W[W.LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION";W[W.LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING";W[W.LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS";W[W.LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC";
W[W.LATENCY_ACTION_CREATOR_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR";W[W.LATENCY_ACTION_CREATOR_VIDEO_EDIT]="LATENCY_ACTION_CREATOR_VIDEO_EDIT";W[W.LATENCY_ACTION_CREATOR_VIDEO_COMMENTS]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS";W[W.LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_SONG_ANALYTICS]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_POST_LIST]="LATENCY_ACTION_CREATOR_POST_LIST";
W[W.LATENCY_ACTION_CREATOR_POST_EDIT]="LATENCY_ACTION_CREATOR_POST_EDIT";W[W.LATENCY_ACTION_CREATOR_POST_COMMENTS]="LATENCY_ACTION_CREATOR_POST_COMMENTS";W[W.LATENCY_ACTION_CREATOR_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_LIVE_STREAMING";W[W.LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT";W[W.LATENCY_ACTION_CREATOR_DIALOG_UPLOADS]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS";W[W.LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES";
W[W.LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT";W[W.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC";W[W.LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION";
W[W.LATENCY_ACTION_CREATOR_CHANNEL_EDITING]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING";W[W.LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD]="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD";W[W.LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT";W[W.LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_ARTIST_PROFILE]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE";
W[W.LATENCY_ACTION_CREATOR_ARTIST_CONCERTS]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS";W[W.LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE";W[W.LATENCY_ACTION_EXPERIMENTAL_WATCH_UI]="LATENCY_ACTION_EXPERIMENTAL_WATCH_UI";W[W.LATENCY_ACTION_STORYBOARD_THUMBNAILS]="LATENCY_ACTION_STORYBOARD_THUMBNAILS";W[W.LATENCY_ACTION_SEARCH_THUMBNAILS]="LATENCY_ACTION_SEARCH_THUMBNAILS";
W[W.LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD]="LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD";W[W.LATENCY_ACTION_VOICE_ASSISTANT]="LATENCY_ACTION_VOICE_ASSISTANT";W[W.LATENCY_ACTION_SEARCH_UI]="LATENCY_ACTION_SEARCH_UI";W[W.LATENCY_ACTION_SUGGEST]="LATENCY_ACTION_SUGGEST";W[W.LATENCY_ACTION_AUTO_SEARCH]="LATENCY_ACTION_AUTO_SEARCH";W[W.LATENCY_ACTION_DOWNLOADS]="LATENCY_ACTION_DOWNLOADS";W[W.LATENCY_ACTION_EXPLORE]="LATENCY_ACTION_EXPLORE";W[W.LATENCY_ACTION_VIDEO_LIST]="LATENCY_ACTION_VIDEO_LIST";
W[W.LATENCY_ACTION_HOME_RESUME]="LATENCY_ACTION_HOME_RESUME";W[W.LATENCY_ACTION_SUBSCRIPTIONS_LIST]="LATENCY_ACTION_SUBSCRIPTIONS_LIST";W[W.LATENCY_ACTION_THUMBNAIL_LOAD]="LATENCY_ACTION_THUMBNAIL_LOAD";W[W.LATENCY_ACTION_FIRST_THUMBNAIL_LOAD]="LATENCY_ACTION_FIRST_THUMBNAIL_LOAD";W[W.LATENCY_ACTION_SUBSCRIPTIONS_FEED]="LATENCY_ACTION_SUBSCRIPTIONS_FEED";W[W.LATENCY_ACTION_SUBSCRIPTIONS]="LATENCY_ACTION_SUBSCRIPTIONS";W[W.LATENCY_ACTION_TRENDING]="LATENCY_ACTION_TRENDING";
W[W.LATENCY_ACTION_LIBRARY]="LATENCY_ACTION_LIBRARY";W[W.LATENCY_ACTION_VIDEO_THUMBNAIL]="LATENCY_ACTION_VIDEO_THUMBNAIL";W[W.LATENCY_ACTION_SHOW_MORE]="LATENCY_ACTION_SHOW_MORE";W[W.LATENCY_ACTION_VIDEO_PREVIEW]="LATENCY_ACTION_VIDEO_PREVIEW";W[W.LATENCY_ACTION_PREBUFFER_VIDEO]="LATENCY_ACTION_PREBUFFER_VIDEO";W[W.LATENCY_ACTION_PREFETCH_VIDEO]="LATENCY_ACTION_PREFETCH_VIDEO";W[W.LATENCY_ACTION_DIRECT_PLAYBACK]="LATENCY_ACTION_DIRECT_PLAYBACK";W[W.LATENCY_ACTION_REEL_WATCH]="LATENCY_ACTION_REEL_WATCH";
W[W.LATENCY_ACTION_AD_TO_AD]="LATENCY_ACTION_AD_TO_AD";W[W.LATENCY_ACTION_VIDEO_TO_AD]="LATENCY_ACTION_VIDEO_TO_AD";W[W.LATENCY_ACTION_AD_TO_VIDEO]="LATENCY_ACTION_AD_TO_VIDEO";W[W.LATENCY_ACTION_ONBOARDING]="LATENCY_ACTION_ONBOARDING";W[W.LATENCY_ACTION_LOGIN]="LATENCY_ACTION_LOGIN";W[W.LATENCY_ACTION_BROWSE]="LATENCY_ACTION_BROWSE";W[W.LATENCY_ACTION_CHANNELS]="LATENCY_ACTION_CHANNELS";W[W.LATENCY_ACTION_WATCH]="LATENCY_ACTION_WATCH";W[W.LATENCY_ACTION_RESULTS]="LATENCY_ACTION_RESULTS";
W[W.LATENCY_ACTION_HOME]="LATENCY_ACTION_HOME";W[W.LATENCY_ACTION_STARTUP]="LATENCY_ACTION_STARTUP";W[W.LATENCY_ACTION_UNKNOWN]="LATENCY_ACTION_UNKNOWN";var $t={LATENCY_NETWORK_MOBILE:2,LATENCY_NETWORK_WIFI:1,LATENCY_NETWORK_UNKNOWN:0};$t[$t.LATENCY_NETWORK_MOBILE]="LATENCY_NETWORK_MOBILE";$t[$t.LATENCY_NETWORK_WIFI]="LATENCY_NETWORK_WIFI";$t[$t.LATENCY_NETWORK_UNKNOWN]="LATENCY_NETWORK_UNKNOWN";
var X={CONN_INVALID:31,CONN_CELLULAR_5G_NSA:12,CONN_CELLULAR_5G_SA:11,CONN_WIFI_METERED:10,CONN_CELLULAR_5G:9,CONN_DISCO:8,CONN_CELLULAR_UNKNOWN:7,CONN_CELLULAR_4G:6,CONN_CELLULAR_3G:5,CONN_CELLULAR_2G:4,CONN_WIFI:3,CONN_NONE:2,CONN_UNKNOWN:1,CONN_DEFAULT:0};X[X.CONN_INVALID]="CONN_INVALID";X[X.CONN_CELLULAR_5G_NSA]="CONN_CELLULAR_5G_NSA";X[X.CONN_CELLULAR_5G_SA]="CONN_CELLULAR_5G_SA";X[X.CONN_WIFI_METERED]="CONN_WIFI_METERED";X[X.CONN_CELLULAR_5G]="CONN_CELLULAR_5G";X[X.CONN_DISCO]="CONN_DISCO";
X[X.CONN_CELLULAR_UNKNOWN]="CONN_CELLULAR_UNKNOWN";X[X.CONN_CELLULAR_4G]="CONN_CELLULAR_4G";X[X.CONN_CELLULAR_3G]="CONN_CELLULAR_3G";X[X.CONN_CELLULAR_2G]="CONN_CELLULAR_2G";X[X.CONN_WIFI]="CONN_WIFI";X[X.CONN_NONE]="CONN_NONE";X[X.CONN_UNKNOWN]="CONN_UNKNOWN";X[X.CONN_DEFAULT]="CONN_DEFAULT";
var Y={DETAILED_NETWORK_TYPE_NR_NSA:126,DETAILED_NETWORK_TYPE_NR_SA:125,DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED:124,DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT:123,DETAILED_NETWORK_TYPE_DISCONNECTED:122,DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN:121,DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN:120,DETAILED_NETWORK_TYPE_WIMAX:119,DETAILED_NETWORK_TYPE_ETHERNET:118,DETAILED_NETWORK_TYPE_BLUETOOTH:117,DETAILED_NETWORK_TYPE_WIFI:116,DETAILED_NETWORK_TYPE_LTE:115,DETAILED_NETWORK_TYPE_HSPAP:114,DETAILED_NETWORK_TYPE_EHRPD:113,
DETAILED_NETWORK_TYPE_EVDO_B:112,DETAILED_NETWORK_TYPE_UMTS:111,DETAILED_NETWORK_TYPE_IDEN:110,DETAILED_NETWORK_TYPE_HSUPA:109,DETAILED_NETWORK_TYPE_HSPA:108,DETAILED_NETWORK_TYPE_HSDPA:107,DETAILED_NETWORK_TYPE_EVDO_A:106,DETAILED_NETWORK_TYPE_EVDO_0:105,DETAILED_NETWORK_TYPE_CDMA:104,DETAILED_NETWORK_TYPE_1_X_RTT:103,DETAILED_NETWORK_TYPE_GPRS:102,DETAILED_NETWORK_TYPE_EDGE:101,DETAILED_NETWORK_TYPE_UNKNOWN:0};Y[Y.DETAILED_NETWORK_TYPE_NR_NSA]="DETAILED_NETWORK_TYPE_NR_NSA";
Y[Y.DETAILED_NETWORK_TYPE_NR_SA]="DETAILED_NETWORK_TYPE_NR_SA";Y[Y.DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED]="DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED";Y[Y.DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT]="DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT";Y[Y.DETAILED_NETWORK_TYPE_DISCONNECTED]="DETAILED_NETWORK_TYPE_DISCONNECTED";Y[Y.DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN";Y[Y.DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN";
Y[Y.DETAILED_NETWORK_TYPE_WIMAX]="DETAILED_NETWORK_TYPE_WIMAX";Y[Y.DETAILED_NETWORK_TYPE_ETHERNET]="DETAILED_NETWORK_TYPE_ETHERNET";Y[Y.DETAILED_NETWORK_TYPE_BLUETOOTH]="DETAILED_NETWORK_TYPE_BLUETOOTH";Y[Y.DETAILED_NETWORK_TYPE_WIFI]="DETAILED_NETWORK_TYPE_WIFI";Y[Y.DETAILED_NETWORK_TYPE_LTE]="DETAILED_NETWORK_TYPE_LTE";Y[Y.DETAILED_NETWORK_TYPE_HSPAP]="DETAILED_NETWORK_TYPE_HSPAP";Y[Y.DETAILED_NETWORK_TYPE_EHRPD]="DETAILED_NETWORK_TYPE_EHRPD";Y[Y.DETAILED_NETWORK_TYPE_EVDO_B]="DETAILED_NETWORK_TYPE_EVDO_B";
Y[Y.DETAILED_NETWORK_TYPE_UMTS]="DETAILED_NETWORK_TYPE_UMTS";Y[Y.DETAILED_NETWORK_TYPE_IDEN]="DETAILED_NETWORK_TYPE_IDEN";Y[Y.DETAILED_NETWORK_TYPE_HSUPA]="DETAILED_NETWORK_TYPE_HSUPA";Y[Y.DETAILED_NETWORK_TYPE_HSPA]="DETAILED_NETWORK_TYPE_HSPA";Y[Y.DETAILED_NETWORK_TYPE_HSDPA]="DETAILED_NETWORK_TYPE_HSDPA";Y[Y.DETAILED_NETWORK_TYPE_EVDO_A]="DETAILED_NETWORK_TYPE_EVDO_A";Y[Y.DETAILED_NETWORK_TYPE_EVDO_0]="DETAILED_NETWORK_TYPE_EVDO_0";Y[Y.DETAILED_NETWORK_TYPE_CDMA]="DETAILED_NETWORK_TYPE_CDMA";
Y[Y.DETAILED_NETWORK_TYPE_1_X_RTT]="DETAILED_NETWORK_TYPE_1_X_RTT";Y[Y.DETAILED_NETWORK_TYPE_GPRS]="DETAILED_NETWORK_TYPE_GPRS";Y[Y.DETAILED_NETWORK_TYPE_EDGE]="DETAILED_NETWORK_TYPE_EDGE";Y[Y.DETAILED_NETWORK_TYPE_UNKNOWN]="DETAILED_NETWORK_TYPE_UNKNOWN";var au={LATENCY_PLAYER_RTSP:7,LATENCY_PLAYER_HTML5_INLINE:6,LATENCY_PLAYER_HTML5_FULLSCREEN:5,LATENCY_PLAYER_HTML5:4,LATENCY_PLAYER_FRAMEWORK:3,LATENCY_PLAYER_FLASH:2,LATENCY_PLAYER_EXO:1,LATENCY_PLAYER_UNKNOWN:0};au[au.LATENCY_PLAYER_RTSP]="LATENCY_PLAYER_RTSP";
au[au.LATENCY_PLAYER_HTML5_INLINE]="LATENCY_PLAYER_HTML5_INLINE";au[au.LATENCY_PLAYER_HTML5_FULLSCREEN]="LATENCY_PLAYER_HTML5_FULLSCREEN";au[au.LATENCY_PLAYER_HTML5]="LATENCY_PLAYER_HTML5";au[au.LATENCY_PLAYER_FRAMEWORK]="LATENCY_PLAYER_FRAMEWORK";au[au.LATENCY_PLAYER_FLASH]="LATENCY_PLAYER_FLASH";au[au.LATENCY_PLAYER_EXO]="LATENCY_PLAYER_EXO";au[au.LATENCY_PLAYER_UNKNOWN]="LATENCY_PLAYER_UNKNOWN";
var bu={LATENCY_AD_BREAK_TYPE_POSTROLL:3,LATENCY_AD_BREAK_TYPE_MIDROLL:2,LATENCY_AD_BREAK_TYPE_PREROLL:1,LATENCY_AD_BREAK_TYPE_UNKNOWN:0};bu[bu.LATENCY_AD_BREAK_TYPE_POSTROLL]="LATENCY_AD_BREAK_TYPE_POSTROLL";bu[bu.LATENCY_AD_BREAK_TYPE_MIDROLL]="LATENCY_AD_BREAK_TYPE_MIDROLL";bu[bu.LATENCY_AD_BREAK_TYPE_PREROLL]="LATENCY_AD_BREAK_TYPE_PREROLL";bu[bu.LATENCY_AD_BREAK_TYPE_UNKNOWN]="LATENCY_AD_BREAK_TYPE_UNKNOWN";var cu={LATENCY_ACTION_ERROR_STARTUP_TIMEOUT:1,LATENCY_ACTION_ERROR_UNSPECIFIED:0};
cu[cu.LATENCY_ACTION_ERROR_STARTUP_TIMEOUT]="LATENCY_ACTION_ERROR_STARTUP_TIMEOUT";cu[cu.LATENCY_ACTION_ERROR_UNSPECIFIED]="LATENCY_ACTION_ERROR_UNSPECIFIED";var du={LIVE_STREAM_MODE_WINDOW:5,LIVE_STREAM_MODE_POST:4,LIVE_STREAM_MODE_LP:3,LIVE_STREAM_MODE_LIVE:2,LIVE_STREAM_MODE_DVR:1,LIVE_STREAM_MODE_UNKNOWN:0};du[du.LIVE_STREAM_MODE_WINDOW]="LIVE_STREAM_MODE_WINDOW";du[du.LIVE_STREAM_MODE_POST]="LIVE_STREAM_MODE_POST";du[du.LIVE_STREAM_MODE_LP]="LIVE_STREAM_MODE_LP";
du[du.LIVE_STREAM_MODE_LIVE]="LIVE_STREAM_MODE_LIVE";du[du.LIVE_STREAM_MODE_DVR]="LIVE_STREAM_MODE_DVR";du[du.LIVE_STREAM_MODE_UNKNOWN]="LIVE_STREAM_MODE_UNKNOWN";var eu={VIDEO_STREAM_TYPE_VOD:3,VIDEO_STREAM_TYPE_DVR:2,VIDEO_STREAM_TYPE_LIVE:1,VIDEO_STREAM_TYPE_UNSPECIFIED:0};eu[eu.VIDEO_STREAM_TYPE_VOD]="VIDEO_STREAM_TYPE_VOD";eu[eu.VIDEO_STREAM_TYPE_DVR]="VIDEO_STREAM_TYPE_DVR";eu[eu.VIDEO_STREAM_TYPE_LIVE]="VIDEO_STREAM_TYPE_LIVE";eu[eu.VIDEO_STREAM_TYPE_UNSPECIFIED]="VIDEO_STREAM_TYPE_UNSPECIFIED";
var fu={YT_IDB_TRANSACTION_TYPE_READ:2,YT_IDB_TRANSACTION_TYPE_WRITE:1,YT_IDB_TRANSACTION_TYPE_UNKNOWN:0};fu[fu.YT_IDB_TRANSACTION_TYPE_READ]="YT_IDB_TRANSACTION_TYPE_READ";fu[fu.YT_IDB_TRANSACTION_TYPE_WRITE]="YT_IDB_TRANSACTION_TYPE_WRITE";fu[fu.YT_IDB_TRANSACTION_TYPE_UNKNOWN]="YT_IDB_TRANSACTION_TYPE_UNKNOWN";var gu={PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN:2,PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT:1,PLAYER_ROTATION_TYPE_UNKNOWN:0};gu[gu.PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN]="PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN";
gu[gu.PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT]="PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT";gu[gu.PLAYER_ROTATION_TYPE_UNKNOWN]="PLAYER_ROTATION_TYPE_UNKNOWN";var hu="actionVisualElement spinnerInfo resourceInfo playerInfo commentInfo mdxInfo watchInfo thumbnailLoadInfo creatorInfo unpluggedInfo reelInfo subscriptionsFeedInfo requestIds mediaBrowserActionInfo musicLoadActionInfo shoppingInfo webViewInfo prefetchInfo accelerationSession commerceInfo webInfo tvInfo kabukiInfo mwebInfo musicInfo".split(" ");var iu=y.ytLoggingLatencyUsageStats_||{};z("ytLoggingLatencyUsageStats_",iu);function ju(){this.i=0}
function ku(){ju.i||(ju.i=new ju);return ju.i}
ju.prototype.tick=function(a,b,c,d){lu(this,"tick_"+a+"_"+b)||(c={timestamp:c,cttAuthInfo:d},M("web_csi_via_jspb")?(d=new Pj,D(d,1,a),D(d,2,b),a=new mk,Zd(a,Pj,5,nk,d),ur(a,c)):tm("latencyActionTicked",{tickName:a,clientActionNonce:b},c))};
ju.prototype.info=function(a,b,c){var d=Object.keys(a).join("");lu(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,tm("latencyActionInfo",a,{cttAuthInfo:c}))};
ju.prototype.jspbInfo=function(a,b,c){for(var d="",e=0;e<a.toJSON().length;e++)void 0!==a.toJSON()[e]&&(d=0===e?d.concat(""+e):d.concat("_"+e));lu(this,"info_"+d+"_"+b)||(D(a,2,b),b={cttAuthInfo:c},c=new mk,Zd(c,Lj,7,nk,a),ur(c,b))};
ju.prototype.span=function(a,b,c){var d=Object.keys(a).join("");lu(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,tm("latencyActionSpan",a,{cttAuthInfo:c}))};
function lu(a,b){iu[b]=iu[b]||{count:0};var c=iu[b];c.count++;c.time=P();a.i||(a.i=em(function(){var d=P(),e;for(e in iu)iu[e]&&6E4<d-iu[e].time&&delete iu[e];a&&(a.i=0)},0,5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new Q("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Vr(c)),!0):!1}
;function mu(){var a=["ol"];Rt("").info.actionType="embed";a&&Ek("TIMING_AFT_KEYS",a);Ek("TIMING_ACTION","embed");if(M("web_csi_via_jspb")){a=L("TIMING_INFO",{});var b=new Lj;a=p(Object.entries(a));for(var c=a.next();!c.done;c=a.next()){var d=p(c.value);c=d.next().value;d=d.next().value;switch(c){case "GetBrowse_rid":var e=new Oj;D(e,1,c);D(e,2,String(d));Nj(b,e);break;case "GetGuide_rid":e=new Oj;D(e,1,c);D(e,2,String(d));Nj(b,e);break;case "GetHome_rid":e=new Oj;D(e,1,c);D(e,2,String(d));Nj(b,e);
break;case "GetPlayer_rid":e=new Oj;D(e,1,c);D(e,2,String(d));Nj(b,e);break;case "GetSearch_rid":e=new Oj;D(e,1,c);D(e,2,String(d));Nj(b,e);break;case "GetSettings_rid":e=new Oj;D(e,1,c);D(e,2,String(d));Nj(b,e);break;case "GetTrending_rid":e=new Oj;D(e,1,c);D(e,2,String(d));Nj(b,e);break;case "GetWatchNext_rid":e=new Oj;D(e,1,c);D(e,2,String(d));Nj(b,e);break;case "yt_red":D(b,14,!!d);break;case "yt_ad":D(b,9,!!d)}}nu(b);b=new Lj;b=D(b,25,!0);b=D(b,1,W[Yt(L("TIMING_ACTION"))]);(a=L("PREVIOUS_ACTION"))&&
D(b,13,W[Yt(a)]);(a=L("CLIENT_PROTOCOL"))&&D(b,33,a);(a=L("CLIENT_TRANSPORT"))&&D(b,34,a);(a=ms())&&"UNDEFINED_CSN"!==a&&D(b,4,a);a=ou();1!==a&&-1!==a||D(b,6,!0);a=It();a:{d=Lt();c=[];for(e=0;e<d.length;e++){var f=c,g=f.push;var h=d[e];var k=Lj;if(null==h||""==h)k=new k;else{h=JSON.parse(h);if(!Array.isArray(h))throw Error("Expected to deserialize an Array but got "+Oa(h)+": "+h);ce=h;sd(h);k=new k(h);ce=null}g.call(f,k)}for(d=0;d<c.length;d++)if("cold"===Sd(c[d],3,""))break a}D(b,3,"cold");pu(a);
a=qu();if(0<a.length)for(a=p(a),c=a.next();!c.done;c=a.next())c=c.value,d=new Kj,D(d,1,c),ae(b,83,Kj,d);nu(b)}else{a=L("TIMING_INFO",{});for(b in a)a.hasOwnProperty(b)&&ru(b,a[b]);b={isNavigation:!0,actionType:Yt(L("TIMING_ACTION"))};if(a=L("PREVIOUS_ACTION"))b.previousAction=Yt(a);if(a=L("CLIENT_PROTOCOL"))b.httpProtocol=a;if(a=L("CLIENT_TRANSPORT"))b.transportProtocol=a;(a=ms())&&"UNDEFINED_CSN"!==a&&(b.clientScreenNonce=a);a=ou();if(1===a||-1===a)b.isVisible=!0;a=It();b.loadType="cold";pu(a);a=
qu();if(0<a.length)for(b.resourceInfo=[],a=p(a),c=a.next();!c.done;c=a.next())b.resourceInfo.push({resourceCache:c.value});su(b)}b=It();a=Kt();if("cold"===b.yt_lt||"cold"===a.loadType){c=Dt();d=Jt();d=d.gelTicks?d.gelTicks:d.gelTicks={};for(var m in c)m in d||Z(m,c[m]);m={};c=!1;d=p(Object.keys(b));for(e=d.next();!e.done;e=d.next())e=e.value,(e=Zt(e,b[e]))&&!Ot(Kt(),e)&&(qt(a,e),qt(m,e),c=!0);c&&su(m)}z("ytglobal.timingready_",!0);m=L("TIMING_ACTION");B("ytglobal.timingready_")&&m&&"_start"in Dt()&&
Ct()&&Nt()}
function ru(a,b,c,d){null!==b&&(It(c)[a]=b,(a=Zt(a,b,c))&&su(a,c,d))}
function su(a,b,c){if(!M("web_csi_via_jspb")||(void 0===c?0:c))c=Rt(b||""),qt(c.info,a),qt(Kt(b),a),c=Mt(b),b=Ht(b).cttAuthInfo,ku().info(a,c,b);else{c=new Lj;var d=Object.keys(a);a=Object.values(a);for(var e=0;e<d.length;e++){var f=d[e];try{switch(f){case "actionType":D(c,1,W[a[e]]);break;case "clientActionNonce":D(c,2,a[e]);break;case "clientScreenNonce":D(c,4,a[e]);break;case "loadType":D(c,3,a[e]);break;case "isPrewarmedLaunch":D(c,92,a[e]);break;case "isFirstInstall":D(c,55,a[e]);break;case "networkType":D(c,
5,$t[a[e]]);break;case "connectionType":D(c,26,X[a[e]]);break;case "detailedConnectionType":D(c,27,Y[a[e]]);break;case "isVisible":D(c,6,a[e]);break;case "playerType":D(c,7,au[a[e]]);break;case "clientPlaybackNonce":D(c,8,a[e]);break;case "adClientPlaybackNonce":D(c,28,a[e]);break;case "previousCpn":D(c,77,a[e]);break;case "targetCpn":D(c,76,a[e]);break;case "isMonetized":D(c,9,a[e]);break;case "isPrerollAllowed":D(c,16,a[e]);break;case "isPrerollShown":D(c,17,a[e]);break;case "adType":D(c,12,a[e]);
break;case "adTypesAllowed":D(c,36,a[e]);break;case "adNetworks":D(c,37,a[e]);break;case "previousAction":D(c,13,W[a[e]]);break;case "isRedSubscriber":D(c,14,a[e]);break;case "serverTimeMs":D(c,15,a[e]);break;case "videoId":c.setVideoId(a[e]);break;case "adVideoId":D(c,20,a[e]);break;case "targetVideoId":D(c,78,a[e]);break;case "adBreakType":D(c,21,bu[a[e]]);break;case "isNavigation":D(c,25,a[e]);break;case "viewportHeight":D(c,29,a[e]);break;case "viewportWidth":D(c,30,a[e]);break;case "screenHeight":D(c,
84,a[e]);break;case "screenWidth":D(c,85,a[e]);break;case "browseId":D(c,31,a[e]);break;case "isCacheHit":D(c,32,a[e]);break;case "httpProtocol":D(c,33,a[e]);break;case "transportProtocol":D(c,34,a[e]);break;case "searchQuery":D(c,41,a[e]);break;case "isContinuation":D(c,42,a[e]);break;case "availableProcessors":D(c,43,a[e]);break;case "sdk":D(c,44,a[e]);break;case "isLocalStream":D(c,45,a[e]);break;case "navigationRequestedSameUrl":D(c,64,a[e]);break;case "shellStartupDurationMs":D(c,70,a[e]);break;
case "appInstallDataAgeMs":D(c,73,a[e]);break;case "latencyActionError":D(c,71,cu[a[e]]);break;case "actionStep":D(c,79,a[e]);break;case "jsHeapSizeLimit":D(c,80,a[e]);break;case "totalJsHeapSize":D(c,81,a[e]);break;case "usedJsHeapSize":D(c,82,a[e]);break;case "sourceVideoDurationMs":D(c,90,a[e]);break;case "videoOutputFrames":D(c,93,a[e]);break;case "isResume":D(c,104,a[e]);break;case "adPrebufferedTimeSecs":D(c,39,a[e]);break;case "isLivestream":D(c,47,a[e]);break;case "liveStreamMode":D(c,91,
du[a[e]]);break;case "adCpn2":D(c,48,a[e]);break;case "adDaiDriftMillis":D(c,49,a[e]);break;case "videoStreamType":D(c,53,eu[a[e]]);break;case "playbackRequiresTap":D(c,56,a[e]);break;case "performanceNavigationTiming":D(c,67,a[e]);break;case "transactionType":D(c,74,fu[a[e]]);break;case "playerRotationType":D(c,101,gu[a[e]]);break;case "allowedPreroll":D(c,10,a[e]);break;case "shownPreroll":D(c,11,a[e]);break;case "getHomeRequestId":D(c,57,a[e]);break;case "getSearchRequestId":D(c,60,a[e]);break;
case "getPlayerRequestId":D(c,61,a[e]);break;case "getWatchNextRequestId":D(c,62,a[e]);break;case "getBrowseRequestId":D(c,63,a[e]);break;case "getLibraryRequestId":D(c,66,a[e]);break;default:hu.includes(f)&&Nk(new Q("Codegen laipb translator asked to translate message field",""+f))}}catch(g){Nk(Error("Codegen laipb translator failed to set "+f))}}nu(c,b)}}
function nu(a,b){Lt(b).push(de(a));Rt(b||"").jspbInfo.push(a);var c=Mt(b);b=Ht(b).cttAuthInfo;ku().jspbInfo(a,c,b)}
function Z(a,b,c){if(!b&&"_"!==a[0]){var d=a;S.mark&&(0==d.lastIndexOf("mark_",0)||(d="mark_"+d),c&&(d+=" ("+c+")"),S.mark(d))}d=Rt(c||"");d.tick[a]=b||P();if(d.callback&&d.callback[a]){d=p(d.callback[a]);for(var e=d.next();!e.done;e=d.next())e=e.value,e()}d=Jt(c);d.gelTicks&&(d.gelTicks[a]=!0);d=Dt(c);e=b||P();d[a]=e;e=Mt(c);var f=Ht(c).cttAuthInfo;if("_start"===a){var g=ku();lu(g,"baseline_"+e)||(b={timestamp:b,cttAuthInfo:f},M("web_csi_via_jspb")?(f=new Jj,D(f,1,e),e=new mk,Zd(e,Jj,6,nk,f),ur(e,
b)):tm("latencyActionBaselined",{clientActionNonce:e},b))}else ku().tick(a,e,b,f);Nt(c);return d[a]}
function tu(){var a=Mt();requestAnimationFrame(function(){setTimeout(function(){a===Mt()&&Z("ol",void 0,void 0)},0)})}
function ou(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=gq+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function pu(a){var b=Et(),c=Gt(),d=L("CSI_START_TIMESTAMP_MILLIS",0);0<d&&!M("embeds_web_enable_csi_start_override_killswitch")&&(c=d);c&&(Z("srt",b.responseStart),1!==a.prerender&&Z("_start",c,void 0));a=Pt();0<a&&Z("fpt",a);a=Et();a.isPerformanceNavigationTiming&&su({performanceNavigationTiming:!0});Z("nreqs",a.requestStart,void 0);Z("nress",a.responseStart,void 0);Z("nrese",a.responseEnd,void 0);0<a.redirectEnd-a.redirectStart&&(Z("nrs",a.redirectStart,void 0),Z("nre",a.redirectEnd,void 0));0<
a.domainLookupEnd-a.domainLookupStart&&(Z("ndnss",a.domainLookupStart,void 0),Z("ndnse",a.domainLookupEnd,void 0));0<a.connectEnd-a.connectStart&&(Z("ntcps",a.connectStart,void 0),Z("ntcpe",a.connectEnd,void 0));a.secureConnectionStart>=Gt()&&0<a.connectEnd-a.secureConnectionStart&&(Z("nstcps",a.secureConnectionStart,void 0),Z("ntcpe",a.connectEnd,void 0));S&&"getEntriesByType"in S&&uu()}
function vu(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);ic()&&a.setAttribute("nonce",ic());return c?(a=S.getEntriesByName(c))&&a[0]&&(a=a[0],c=Gt(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function qu(){var a=[];if(document.querySelector&&S&&S.getEntriesByName)for(var b in Bt)if(Bt.hasOwnProperty(b)){var c=Bt[b];vu(b,c)&&a.push(c)}return a}
function uu(){var a=window.location.protocol,b=S.getEntriesByType("resource");b=gb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=ib(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Z("wffs",Ft(b.startTime)),Z("wffe",Ft(b.responseEnd)))}
var wu=window;wu.ytcsi&&(wu.ytcsi.info=ru,wu.ytcsi.tick=Z);var xu="tokens consistency mss client_location entities response_received_commands store PLAYER_PRELOAD".split(" "),yu=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse"];function zu(a,b,c,d){this.o=a;this.M=b;this.m=c;this.l=d;this.j=void 0;this.i=new Map;a.La||(a.La={});a.La=Object.assign({},pt,a.La)}
function Au(a,b,c,d){if(void 0!==zu.i){if(d=zu.i,a=[a!==d.o,b!==d.M,c!==d.m,!1,!1,void 0!==d.j],a.some(function(e){return e}))throw new Q("InnerTubeTransportService is already initialized",a);
}else zu.i=new zu(a,b,c,d)}
function Bu(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?Ps:c;var d=Ys(b,a.o);if(!d)return Df(new Q("Error: No request builder found for command.",b));var e=d.o(b,void 0,c);return e?new yf(function(f){var g,h,k;return w(function(m){if(1==m.i){h="cors"===(null==(g=e.va)?void 0:g.mode)?"cors":void 0;if(a.m.od){var q=e.config,r;q=null==q?void 0:null==(r=q.Ra)?void 0:r.sessionIndex;r=Os({sessionIndex:q});k=Object.assign({},Cu(h),r);return m.u(2)}return v(m,Du(e.config,
h),3)}2!=m.i&&(k=m.j);f(Eu(a,e,k));m.i=0})}):Df(new Q("Error: Failed to build request for command.",b))}
function Fu(a,b,c){var d;if(b&&!(null==b?0:null==(d=b.Qq)?0:d.Tq)&&a.l){d=p(xu);for(var e=d.next();!e.done;e=d.next())e=e.value,a.l[e]&&a.l[e].handleResponse(b,c)}}
function Eu(a,b,c){var d,e,f,g,h,k,m,q,r,x,u,A,E,F,O,N,R,ca,V,nb,Xa,la,H,ka,ea,Be,Ce,ud;return w(function(na){switch(na.i){case 1:na.u(2);break;case 3:if((d=na.j)&&!d.isExpired())return na.return(Promise.resolve(d.i()));case 2:if(null==(e=b)?0:null==(f=e.ha)?0:f.context)for(g=p([]),h=g.next();!h.done;h=g.next())k=h.value,k.Lq(b.ha.context);if(null==(m=a.j)||!m.Rq(b.input,b.ha)){na.u(4);break}return v(na,a.j.Iq(b.input,b.ha),5);case 5:return q=na.j,M("kevlar_process_local_innertube_responses_killswitch")||
Fu(a,q,b),na.return(q);case 4:return(u=null==(x=b.config)?void 0:x.Ba)&&a.i.has(u)&&M("web_memoize_inflight_requests")?r=a.i.get(u):(A=JSON.stringify(b.ha),O=null!=(F=null==(E=b.va)?void 0:E.headers)?F:{},b.va=Object.assign({},b.va,{headers:Object.assign({},O,c)}),N=Object.assign({},b.va),"POST"===b.va.method&&(N=Object.assign({},N,{body:A})),(null==(R=b.config)?0:R.Zc)&&Z(b.config.Zc),ca=function(){return a.M.fetch(b.input,N,b.config)},r=ca(),u&&a.i.set(u,r)),v(na,r,6);
case 6:V=na.j;if(M("web_one_platform_error_handling")&&(null==(nb=V)?0:null==(Xa=nb.error)?0:Xa.details))for(la=V.error.details,H=p(la),ka=H.next();!ka.done;ka=H.next())ea=ka.value,(Be=ea["@type"])&&-1<yu.indexOf(Be)&&(delete ea["@type"],V=ea);u&&a.i.has(u)&&a.i.delete(u);(null==(Ce=b.config)?0:Ce.bd)&&Z(b.config.bd);if(V||null==(ud=a.j)||!ud.Cq(b.input,b.ha)){na.u(7);break}return v(na,a.j.Hq(b.input,b.ha),8);case 8:V=na.j;case 7:return Fu(a,V,b),na.return(V)}})}
function Du(a,b){var c,d,e,f;return w(function(g){if(1==g.i){e=null==(c=a)?void 0:null==(d=c.Ra)?void 0:d.sessionIndex;var h=Os({sessionIndex:e});if(!(h instanceof yf)){var k=new yf(cb);zf(k,2,h);h=k}return v(g,h,2)}f=g.j;return g.return(Promise.resolve(Object.assign({},Cu(b),f)))})}
function Cu(a){var b={"Content-Type":"application/json"};L("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=L("EOM_VISITOR_DATA"):L("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=L("VISITOR_DATA"));M("track_webfe_innertube_auth_mismatch")&&(b["X-Youtube-Bootstrap-Logged-In"]=L("LOGGED_IN",!1));"cors"!==a&&((a=L("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=L("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=L("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=
a),(a=L("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var Gu=new $s("INNERTUBE_TRANSPORT_TOKEN");var Hu=["share/get_web_player_share_panel"],Iu=["feedback"],Ju=["notification/modify_channel_preference"],Ku=["browse/edit_playlist"],Lu=["subscription/subscribe"],Mu=["subscription/unsubscribe"];function Nu(){}
t(Nu,mt);Nu.prototype.l=function(){return Lu};
Nu.prototype.i=function(a){return As(a,yk)||void 0};
Nu.prototype.j=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
fa.Object.defineProperties(Nu.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Ou(){}
t(Ou,mt);Ou.prototype.l=function(){return Mu};
Ou.prototype.i=function(a){return As(a,xk)||void 0};
Ou.prototype.j=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
fa.Object.defineProperties(Ou.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Pu(){}
t(Pu,mt);Pu.prototype.l=function(){return Iu};
Pu.prototype.i=function(a){return As(a,fj)||void 0};
Pu.prototype.j=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
fa.Object.defineProperties(Pu.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Qu(){}
t(Qu,mt);Qu.prototype.l=function(){return Ju};
Qu.prototype.i=function(a){return As(a,wk)||void 0};
Qu.prototype.j=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function Ru(){}
t(Ru,mt);Ru.prototype.l=function(){return Ku};
Ru.prototype.i=function(a){return As(a,vk)||void 0};
Ru.prototype.j=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function Su(){}
t(Su,mt);Su.prototype.l=function(){return Hu};
Su.prototype.i=function(a){return As(a,uk)};
Su.prototype.j=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var bt=new $s("NETWORK_SLI_TOKEN");function Tu(a){this.i=a}
Tu.prototype.fetch=function(a,b){var c=this,d,e;return w(function(f){c.i&&(d=mc(nc(5,Dc(a,"key")))||"/UNKNOWN_PATH",c.i.start(d));e=new window.Request(a,b);return M("web_fetch_promise_cleanup_killswitch")?f.return(Promise.resolve(fetch(e).then(function(g){return c.handleResponse(g)}).catch(function(g){Vr(g)}))):f.return(fetch(e).then(function(g){return c.handleResponse(g)}).catch(function(g){Vr(g)}))})};
Tu.prototype.handleResponse=function(a){var b=a.text().then(function(c){return JSON.parse(c.replace(")]}'",""))});
a.redirected||a.ok?this.i&&this.i.success():(this.i&&this.i.failure(),b=b.then(function(c){Vr(new Q("Error: API fetch failed",a.status,a.url,c));return Object.assign({},c,{errorMetadata:{status:a.status}})}));
return b};
Tu[Zs]=[new at];var Uu=new $s("NETWORK_MANAGER_TOKEN");var Vu;function Wu(a){ao.call(this,1,arguments);this.csn=a}
t(Wu,ao);var ko=new bo("screen-created",Wu),Xu=[],Zu=Yu,$u=0;function av(a,b,c,d,e,f,g){function h(){Vr(new Q("newScreen() parent element does not have a VE - rootVe",b))}
var k=Zu();f=new fs({veType:b,youtubeData:f,jspbYoutubeData:void 0});e={cttAuthInfo:e,ba:k};if(M("il_via_jspb")){var m=new yj;m.V(k);zj(m,f.getAsJspb());c&&c.visualElement?(f=new Aj,c.clientScreenNonce&&D(f,2,c.clientScreenNonce),Bj(f,c.visualElement.getAsJspb()),g&&D(f,4,ok[g]),G(m,Aj,5,f)):c&&h();d&&D(m,3,d);zr(m,e,a)}else f={csn:k,pageVe:f.getAsJson()},c&&c.visualElement?(f.implicitGesture={parentCsn:c.clientScreenNonce,gesturedVe:c.visualElement.getAsJson()},g&&(f.implicitGesture.gestureType=
g)):c&&h(),d&&(f.cloneCsn=d),a?pr("screenCreated",f,a,e):tm("screenCreated",f,e);ho(ko,new Wu(k));return k}
function bv(a,b,c,d){var e=d.filter(function(k){k.csn!==b?(k.csn=b,k=!0):k=!1;return k}),f={cttAuthInfo:os(b),
ba:b};d=p(d);for(var g=d.next();!g.done;g=d.next())g=g.value.getAsJson(),(rb(g)||!g.trackingParams&&!g.veType)&&Vr(Error("Child VE logged with no data"));if(M("il_via_jspb")){var h=new Cj;h.V(b);Ej(h,c.getAsJspb());hb(e,function(k){k=k.getAsJspb();ae(h,3,tj,k)});
"UNDEFINED_CSN"==b?cv("visualElementAttached",h,f):Ar(h,f,a)}else c={csn:b,parentVe:c.getAsJson(),childVes:hb(e,function(k){return k.getAsJson()})},"UNDEFINED_CSN"==b?cv("visualElementAttached",c,f):a?pr("visualElementAttached",c,a,f):tm("visualElementAttached",c,f)}
function Yu(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return fd(b,3)}
function cv(a,b,c){Xu.push({payloadName:a,payload:b,options:c});$u||($u=lo())}
function mo(a){if(Xu){for(var b=p(Xu),c=b.next();!c.done;c=b.next())if(c=c.value,c.payload)if(M("il_via_jspb"))switch(c.payload.V(a.csn),c.payloadName){case "screenCreated":zr(c.payload,c.options);break;case "visualElementAttached":Ar(c.payload,c.options);break;case "visualElementShown":vr(c.payload,c.options);break;case "visualElementHidden":wr(c.payload,c.options);break;case "visualElementGestured":xr(c.payload,c.options);break;case "visualElementStateChanged":yr(c.payload,c.options);break;default:Vr(new Q("flushQueue unable to map payloadName to JSPB setter"))}else c.payload.csn=
a.csn,pr(c.payloadName,c.payload,null,c.options);Xu.length=0}$u=0}
;function dv(){this.j=new Set;this.i=new Set;this.l=new Map}
dv.prototype.s=function(){};
dv.prototype.clear=function(){this.j.clear();this.i.clear();this.l.clear()};
Na(dv);function ev(){this.o=[];this.N=[];this.i=[];this.m=[];this.C=[];this.j=new Set;this.A=new Map}
ev.prototype.s=function(a){this.client=a};
function fv(a,b,c){c=void 0===c?0:c;b.then(function(d){a.j.has(c)&&a.l&&a.l();var e=ms(c),f=ks(c);if(e&&f){var g;(null==d?0:null==(g=d.response)?0:g.trackingParams)&&bv(a.client,e,f,[gs(d.response.trackingParams)]);var h;(null==d?0:null==(h=d.playerResponse)?0:h.trackingParams)&&bv(a.client,e,f,[gs(d.playerResponse.trackingParams)])}})}
function gv(a,b,c,d){d=void 0===d?0:d;if(a.j.has(d))a.o.push([b,c]);else{var e=ms(d);c=c||ks(d);e&&c&&bv(a.client,e,c,[b])}}
ev.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=ms(void 0===c?0:c)){a=this.client;var e=gs(d);d={cttAuthInfo:os(c),ba:c};if(M("il_via_jspb")){var f=new Fj;f.V(c);e=e.getAsJspb();G(f,tj,2,e);D(f,4,ok.INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK);b&&G(f,wj,3);"UNDEFINED_CSN"==c?cv("visualElementGestured",f,d):xr(f,d,a)}else f={csn:c,ve:e.getAsJson(),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"},b&&(f.clientData=b),"UNDEFINED_CSN"==c?
cv("visualElementGestured",f,d):a?pr("visualElementGestured",f,a,d):tm("visualElementGestured",f,d);b=!0}else b=!1;else b=!1;return b};
function hv(a,b,c){c=void 0===c?{}:c;a.j.add(c.layer||0);a.l=function(){iv(a,b,c);var f=ks(c.layer);if(f){for(var g=p(a.o),h=g.next();!h.done;h=g.next())h=h.value,gv(a,h[0],h[1]||f,c.layer);f=p(a.N);for(g=f.next();!g.done;g=f.next()){var k=g.value;g=void 0;g=void 0===g?0:g;h=ms(g);var m=k[0]||ks(g);if(h&&m){g=a.client;var q=k[1];k={cttAuthInfo:os(h),ba:h};M("il_via_jspb")?(q=new Ij,q.V(h),m=m.getAsJspb(),G(q,tj,2,m),"UNDEFINED_CSN"==h?cv("visualElementStateChanged",q,k):yr(q,k,g)):(m={csn:h,ve:m.getAsJson(),
clientData:q},"UNDEFINED_CSN"==h?cv("visualElementStateChanged",m,k):g?pr("visualElementStateChanged",m,g,k):tm("visualElementStateChanged",m,k))}}}};
ms(c.layer)||a.l();if(c.Rb)for(var d=p(c.Rb),e=d.next();!e.done;e=d.next())fv(a,e.value,c.layer);else Ur(Error("Delayed screen needs a data promise."))}
function iv(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.Vc?c.Vc:c.layer;var e=ms(d);d=ks(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));var g,h=L("EVENT_ID");"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});try{var k=av(a.client,b,f,c.Qb,c.cttAuthInfo,g,c.Fq)}catch(m){Xr(m,{Oq:b,rootVe:d,parentVisualElement:void 0,Dq:e,Kq:f,Qb:c.Qb});Ur(m);return}ps(k,b,
c.layer,c.cttAuthInfo);if(b=e&&"UNDEFINED_CSN"!==e&&d){a:{b=p(Object.values(es));for(f=b.next();!f.done;f=b.next())if(ms(f.value)===e){b=!0;break a}b=!1}b=!b}b&&(b=a.client,g=!0,h=(g=void 0===g?!1:g)?16:8,f={cttAuthInfo:os(e),ba:e,Sb:g},M("il_via_jspb")?(h=new Gj,h.V(e),d=d.getAsJspb(),G(h,tj,2,d),D(h,4,g?16:8),"UNDEFINED_CSN"==e?cv("visualElementHidden",h,f):wr(h,f,b)):(d={csn:e,ve:d.getAsJson(),eventType:h},"UNDEFINED_CSN"==e?cv("visualElementHidden",d,f):b?pr("visualElementHidden",d,b,f):tm("visualElementHidden",
d,f)));a.i[a.i.length-1]&&!a.i[a.i.length-1].csn&&(a.i[a.i.length-1].csn=k||"");su({clientScreenNonce:k});dv.getInstance().clear();d=ks(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(M("web_mark_root_visible")||M("music_web_mark_root_visible"))&&(e=k,k={cttAuthInfo:os(e),ba:e},M("il_via_jspb")?(b=new Hj,b.V(e),f=d.getAsJspb(),G(b,tj,2,f),D(b,4,1),"UNDEFINED_CSN"==e?cv("visualElementShown",b,k):vr(b,k)):(b={csn:e,ve:d.getAsJson(),eventType:1},"UNDEFINED_CSN"==e?cv("visualElementShown",b,k):tm("visualElementShown",
b,k)));a.j.delete(c.layer||0);a.l=void 0;e=p(a.A);for(k=e.next();!k.done;k=e.next())b=p(k.value),k=b.next().value,b=b.next().value,b.has(c.layer)&&d&&gv(a,k,d,c.layer);for(c=0;c<a.m.length;c++){e=a.m[c];try{e()}catch(m){Ur(m)}}for(c=a.m.length=0;c<a.C.length;c++){e=a.C[c];try{e()}catch(m){Ur(m)}}}
;function jv(){var a,b;return w(function(c){if(1==c.i)return a=gt().resolve(Gu),a?v(c,Bu(a),2):(Vr(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),c.return(void 0));if(b=c.j)return b.errorMetadata?(Vr(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),c.return(void 0)):c.return(b.Eq);Vr(Error("Network request to get Datasync IDs failed."));return c.return(void 0)})}
;var kv=y.caches,lv;function mv(a){var b=a.indexOf(":");return-1===b?{dc:a}:{dc:a.substring(0,b),datasyncId:a.substring(b+1)}}
function nv(){return w(function(a){if(void 0!==lv)return a.return(lv);lv=new Promise(function(b){var c;return w(function(d){switch(d.i){case 1:return ya(d,2),v(d,kv.open("test-only"),4);case 4:return v(d,kv.delete("test-only"),5);case 5:za(d,3);break;case 2:if(c=Aa(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.i=0}})});
return a.return(lv)})}
function ov(a){var b,c,d,e,f,g,h;w(function(k){if(1==k.i)return v(k,nv(),2);if(3!=k.i){if(!k.j)return k.return(!1);b=[];return v(k,kv.keys(),3)}c=k.j;d=p(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=mv(f),h=g.datasyncId,!h||a.includes(h)||b.push(kv.delete(f));return k.return(Promise.all(b).then(function(m){return m.some(function(q){return q})}))})}
function pv(){var a,b,c,d,e,f,g;return w(function(h){if(1==h.i)return v(h,nv(),2);if(3!=h.i){if(!h.j)return h.return(!1);a=xm("cache contains other");return v(h,kv.keys(),3)}b=h.j;c=p(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=mv(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function qv(){try{return!!self.localStorage}catch(a){return!1}}
;function rv(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function sv(a){if(qv()){var b=Object.keys(window.localStorage);b=p(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=rv(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function tv(){if(!qv())return!1;var a=xm(),b=Object.keys(window.localStorage);b=p(b);for(var c=b.next();!c.done;c=b.next())if(c=rv(c.value),void 0!==c&&c!==a)return!0;return!1}
;function uv(){jv().then(function(a){a&&(In(a),ov(a),sv(a))})}
function vv(){var a=new So;Xh.S(function(){var b,c,d,e;return w(function(f){switch(f.i){case 1:if(M("ytidb_clear_optimizations_killswitch")){f.u(2);break}b=xm("clear");if(b.startsWith("V")){var g=[b];In(g);ov(g);sv(g);return f.return()}c=tv();return v(f,pv(),3);case 3:return d=f.j,v(f,Jn(),4);case 4:if(e=f.j,!c&&!d&&!e)return f.return();case 2:a.L()?uv():a.m.add("publicytnetworkstatus-online",uv,!0,void 0,void 0),f.i=0}})})}
;function wv(a){a&&(a.dataset?a.dataset[xv("loaded")]="true":a.setAttribute("data-loaded","true"))}
function yv(a,b){return a?a.dataset?a.dataset[xv(b)]:a.getAttribute("data-"+b):null}
var zv={};function xv(a){return zv[a]||(zv[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Av=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Bv=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Cv(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Av,""),c=c.replace(Bv,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Dv(a,b,c)}
function Dv(a,b,c){c=void 0===c?null:c;var d=Ev(a),e=document.getElementById(d),f=e&&yv(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=Aq(d,b),b=""+Ra(b),Fv[b]=f),g||(e=Gv(a,d,function(){yv(e,"loaded")||(wv(e),Dq(d),gl(Ya(Eq,d),0))},c)))}
function Gv(a,b,c,d){d=void 0===d?null:d;var e=kf("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Gh(e,Lb(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Hv(a){a=Ev(a);var b=document.getElementById(a);b&&(Eq(a),b.parentNode.removeChild(b))}
function Iv(a,b){a&&b&&(a=""+Ra(b),(a=Fv[a])&&Cq(a))}
function Ev(a){var b=document.createElement("a");fc(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+kc(a)}
var Fv={};var Jv=[],Kv=!1;function Lv(){if(!M("disable_biscotti_fetch_for_ad_blocker_detection")&&!M("disable_biscotti_fetch_entirely_for_all_web_clients")&&Cs()){var a=L("PLAYER_VARS",{});if("1"!=tb(a)&&!Ds(a)){var b=function(){Kv=!0;"google_ad_status"in window?Ek("DCLKSTAT",1):Ek("DCLKSTAT",2)};
try{Cv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Jv.push(Xh.S(function(){if(!(Kv||"google_ad_status"in window)){try{Iv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Kv=!0;Ek("DCLKSTAT",3)}},5E3))}}}
function Mv(){var a=Number(L("DCLKSTAT",0));return isNaN(a)?0:a}
;function Nv(){this.state=1;this.i=null}
l=Nv.prototype;
l.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterScript)?d:null,f;d=null!=(f=a.interpreterUrl)?f:null;a.interpreterSafeScript&&(e=a.interpreterSafeScript,Db("From proto message. b/166824318"),e=e.privateDoNotAccessOrElseSafeScriptWrappedValue||"",e=(f=Ab())?f.createScript(e):e,e=(new Fb(e)).toString());a.interpreterSafeUrl&&(d=a.interpreterSafeUrl,Db("From proto message. b/166824318"),d=Lb(d.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||"").toString());Ov(this,e,
d,a.program,b,c)}else Vr(Error("Cannot initialize botguard without program"))};
function Ov(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,Cv(c,function(){window[g]?Rv(a,d,g,e):(a.state=3,Hv(c),Vr(new Q("Unable to load Botguard","from "+c)))},f)):b?(f=kf("SCRIPT"),f.textContent=b,f.nonce=ic(),document.head.appendChild(f),document.head.removeChild(f),window[g]?Rv(a,d,g,e):(a.state=4,Vr(new Q("Unable to load Botguard from JS")))):Vr(new Q("Unable to load VM; no url or JS provided"))}
l.isInitialized=function(){return!!this.rb()};
function Rv(a,b,c,d){a.state=5;try{var e=new Ch({program:b,globalName:c});e.ld.then(function(){a.state=6;d&&d(b)});
a.Bb(e)}catch(f){a.state=7,f instanceof Error&&Vr(f)}}
l.invoke=function(a){a=void 0===a?{}:a;var b=this.rb();if(b){var c={Pb:a};if(b.Wa)throw Error("Already disposed");a=Ah();var d;null!=(d=b.ta)&&d.j.i.Eb("/client_streamz/bg/fsc",d.Ba);d=b.pd([c.Pb,c.nd]);null!=(b=b.ta)&&(a=Ah()-a,b.l.i.hb("/client_streamz/bg/fsl",a,b.Ba));b=d}else b=null;return b};
l.dispose=function(){this.Fb()};
l.Fb=function(){this.Bb(null);this.state=8};
l.rb=function(){return this.i};
l.Bb=function(a){pe(this.i);this.i=a};function Sv(){return B("yt.abuse.playerAttLoader")||null}
function Tv(){Nv.apply(this,arguments)}
t(Tv,Nv);Tv.prototype.Fb=function(){this.state=8};
Tv.prototype.rb=function(){return Sv()};
Tv.prototype.Bb=function(a){pe(Sv());z("yt.abuse.playerAttLoader",a)};var Uv=new Tv;var Vv=new Nv;function Wv(){return M("use_player_abuse_bg_library")?Uv.isInitialized():Vv.isInitialized()}
function Xv(a){a=void 0===a?{}:a;M("use_player_abuse_bg_library")?(a=void 0===a?{}:a,a=Uv.invoke(a)):a=Vv.invoke(a);return a}
;function Yv(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?im():d;this.m=c;this.l=d;this.j=new Bh;this.i=a;a={};c=p(this.i.entries());for(d=c.next();!d.done;a={Ca:a.Ca,Na:a.Na},d=c.next()){var e=p(d.value);d=e.next().value;e=e.next().value;a.Na=d;a.Ca=e;d=function(f){return function(){f.Ca.ub();b.i[f.Na].eb=!0;b.i.every(function(g){return!0===g.eb})&&b.j.resolve()}}(a);
e=em(d,Zv(this,a.Ca));this.i[a.Na]=Object.assign({},a.Ca,{ub:d,Za:e})}}
function $v(a){var b=Array.from(a.i.keys()).sort(function(d,e){return Zv(a,a.i[e])-Zv(a,a.i[d])});
b=p(b);for(var c=b.next();!c.done;c=b.next())c=a.i[c.value],void 0===c.Za||c.eb||(a.l.fa(c.Za),em(c.ub,10))}
Yv.prototype.cancel=function(){for(var a=p(this.i),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.Za||b.eb||this.l.fa(b.Za),b.eb=!0;this.j.resolve()};
function Zv(a,b){var c;return null!=(c=b.priority)?c:a.m}
;function aw(a){this.state=a;this.plugins=[];this.s=void 0}
aw.prototype.install=function(){this.plugins.push.apply(this.plugins,ia(Ja.apply(0,arguments)))};
aw.prototype.transition=function(a,b){var c=this,d=this.C.find(function(f){return f.from===c.state&&f.F===a});
if(d){this.l&&($v(this.l),this.l=void 0);this.state=a;d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(bw(this,e,this.s),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function bw(a,b,c){return function(){var d=Ja.apply(0,arguments),e=b.filter(function(k){var m;return 10===(null!=(m=null!=c?c:k.priority)?m:0)}),f=b.filter(function(k){var m;
return 10!==(null!=(m=null!=c?c:k.priority)?m:0)});
im();var g={};e=p(e);for(var h=e.next();!h.done;g={Oa:g.Oa},h=e.next())g.Oa=h.value,gm(function(k){return function(){k.Oa.callback.apply(k.Oa,ia(d))}}(g));
f=f.map(function(k){var m;return{ub:function(){k.callback.apply(k,ia(d))},
priority:null!=(m=null!=c?c:k.priority)?m:0}});
f.length&&(a.l=new Yv(f))}}
fa.Object.defineProperties(aw.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function cw(a){aw.call(this,void 0===a?"document_active":a);var b=this;this.s=10;this.i=new Map;this.C=[{from:"document_active",F:"document_disposed_preventable",action:this.N},{from:"document_active",F:"document_disposed",action:this.m},{from:"document_disposed_preventable",F:"document_disposed",action:this.m},{from:"document_disposed_preventable",F:"flush_logs",action:this.o},{from:"document_disposed_preventable",F:"document_active",action:this.j},{from:"document_disposed",F:"flush_logs",action:this.o},
{from:"document_disposed",F:"document_active",action:this.j},{from:"document_disposed",F:"document_disposed",action:function(){}},
{from:"flush_logs",F:"document_active",action:this.j}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
t(cw,aw);cw.prototype.N=function(a,b){if(!this.i.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.i=new Map;this.transition("document_active");return}}this.i.set("document_disposed_preventable",!0);this.i.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
cw.prototype.m=function(a,b){this.i.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.i.set("document_disposed",!0),this.transition("flush_logs"))};
cw.prototype.o=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
cw.prototype.j=function(){this.i=new Map};function dw(a){aw.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.C=[{from:"document_visibility_unknown",F:"document_visible",action:this.j},{from:"document_visibility_unknown",F:"document_hidden",action:this.i},{from:"document_visibility_unknown",F:"document_foregrounded",action:this.o},{from:"document_visibility_unknown",F:"document_backgrounded",action:this.m},{from:"document_visible",F:"document_hidden",action:this.i},{from:"document_visible",F:"document_foregrounded",action:this.o},
{from:"document_visible",F:"document_visible",action:this.j},{from:"document_foregrounded",F:"document_visible",action:this.j},{from:"document_foregrounded",F:"document_hidden",action:this.i},{from:"document_foregrounded",F:"document_foregrounded",action:this.o},{from:"document_hidden",F:"document_visible",action:this.j},{from:"document_hidden",F:"document_backgrounded",action:this.m},{from:"document_hidden",F:"document_hidden",action:this.i},{from:"document_backgrounded",F:"document_hidden",action:this.i},
{from:"document_backgrounded",F:"document_backgrounded",action:this.m},{from:"document_backgrounded",F:"document_visible",action:this.j}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
M("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
t(dw,aw);dw.prototype.j=function(a,b){a(null==b?void 0:b.event);M("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
dw.prototype.i=function(a,b){a(null==b?void 0:b.event);M("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
dw.prototype.m=function(a,b){a(null==b?void 0:b.event)};
dw.prototype.o=function(a,b){a(null==b?void 0:b.event)};function ew(){this.i=new cw;this.j=new dw}
ew.prototype.install=function(){var a=Ja.apply(0,arguments);this.i.install.apply(this.i,ia(a));this.j.install.apply(this.j,ia(a))};function fw(){ew.call(this);var a={};this.install((a.document_disposed={callback:this.l},a));a={};this.install((a.flush_logs={callback:this.m},a))}
var gw;t(fw,ew);fw.prototype.m=function(){if(M("web_fp_via_jspb")){var a=new sj,b=ms();b&&a.V(b);b=new mk;Zd(b,sj,380,nk,a);ur(b);M("web_fp_via_jspb_and_json")&&tm("finalPayload",{csn:ms()})}else tm("finalPayload",{csn:ms()})};
fw.prototype.l=function(){Zr($r)};function hw(){}
hw.getInstance=function(){var a=B("ytglobal.storage_");a||(a=new hw,z("ytglobal.storage_",a));return a};
hw.prototype.estimate=function(){var a,b,c;return w(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(iw()):d.return()})};
function iw(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
z("ytglobal.storageClass_",hw);function rm(a,b){var c=this;this.handleError=a;this.i=b;this.j=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.j=!0});
this.l=Math.random()<=Hk("ytidb_transaction_ended_event_rate_limit",.02)}
rm.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":M("idb_data_corrupted_killswitch")||this.i("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.i("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":M("idb_is_supported_completed_killswitch")||this.i("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":jw(this,b);break;case "TRANSACTION_ENDED":this.l&&this.i("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,
{hasWindowUnloaded:this.j}),this.i("idbTransactionAborted",a)}};
function jw(a,b){hw.getInstance().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:kw(null==c?void 0:c.usage),deviceStorageQuotaMbytes:kw(null==c?void 0:c.quota)});a.i("idbQuotaExceeded",c)})}
function kw(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;function lw(a,b,c){J.call(this);var d=this;c=c||L("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.l=b||null;this.targetOrigin="*";this.m=c;this.sessionId=null;this.channel="widget";this.G=!!a;this.A=function(e){a:if(!("*"!=d.m&&e.origin!=d.m||d.l&&e.source!=d.l||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.G&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.m=d.targetOrigin=e.origin);d.l=e.source;d.sessionId=f.id;d.j&&(d.j(),d.j=null);break;case "command":d.o&&(!d.s||0<=eb(d.s,f.func))&&d.o(f.func,f.args,e.origin)}}};
this.s=this.j=this.o=null;window.addEventListener("message",this.A)}
t(lw,J);lw.prototype.sendMessage=function(a,b){if(b=b||this.l){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){Ok(d)}}};
lw.prototype.D=function(){window.removeEventListener("message",this.A);J.prototype.D.call(this)};function mw(){this.j=[];this.isReady=!1;this.l={};var a=this.i=new lw(!!L("WIDGET_ID_ENFORCE")),b=this.Xc.bind(this);a.o=b;a.s=null;this.i.channel="widget";if(a=L("WIDGET_ID"))this.i.sessionId=a}
l=mw.prototype;l.Xc=function(a,b,c){"addEventListener"===a&&b?(a=b[0],this.l[a]||"onReady"===a||(this.addEventListener(a,nw(this,a)),this.l[a]=!0)):this.Gb(a,b,c)};
l.Gb=function(){};
function nw(a,b){return function(c){return a.sendMessage(b,c)}}
l.addEventListener=function(){};
l.Kc=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.pb());this.sendMessage("onReady");fb(this.j,this.lc,this);this.j=[]};
l.pb=function(){return null};
function ow(a,b){a.sendMessage("infoDelivery",b)}
l.lc=function(a){this.isReady?this.i.sendMessage(a):this.j.push(a)};
l.sendMessage=function(a,b){this.lc({event:a,info:void 0===b?null:b})};
l.dispose=function(){this.i=null};var pw=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function qw(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function rw(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=p(pw);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function sw(a,b,c,d){if(Qa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function tw(a){mw.call(this);this.listeners=[];this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.hd.bind(this));this.addEventListener("onVolumeChange",this.jd.bind(this));this.addEventListener("onApiChange",this.cd.bind(this));this.addEventListener("onPlaybackQualityChange",this.ed.bind(this));this.addEventListener("onPlaybackRateChange",this.fd.bind(this));this.addEventListener("onStateChange",this.gd.bind(this));this.addEventListener("onWebglSettingsChanged",
this.kd.bind(this))}
t(tw,mw);l=tw.prototype;
l.Gb=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&qw(a)){var d=b;if(Qa(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=rw(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=rw(e);break;case "loadPlaylist":case "cuePlaylist":e=sw(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);qw(a)&&ow(this,this.pb())}};
l.onReady=function(){var a=this.Kc.bind(this);this.i.j=a;a=this.api.getVideoData();!1===a.isPlayable&&this.sendMessage("onError",a.errorCode)};
l.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
l.pb=function(){if(!this.api)return null;var a=this.api.getApiInterface();lb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
l.gd=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());ow(this,a)};
l.ed=function(a){ow(this,{playbackQuality:a})};
l.fd=function(a){ow(this,{playbackRate:a})};
l.cd=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],m=this.api.getOption(e,k);b[e][k]=m}}this.sendMessage("apiInfoDelivery",b)};
l.jd=function(){ow(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
l.hd=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());ow(this,a)};
l.kd=function(){var a={sphericalProperties:this.api.getSphericalProperties()};ow(this,a)};
l.dispose=function(){mw.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function uw(a){J.call(this);this.j={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.fc,this)}
t(uw,J);l=uw.prototype;l.start=function(){this.started||this.i()||(this.started=!0,this.connection.wa("RECEIVING"))};
l.wa=function(a,b){this.started&&!this.i()&&this.connection.wa(a,b)};
l.fc=function(a,b,c){if(this.started&&!this.i()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=vw(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=ww(a,c))&&this.wa(a,c))}}};
l.addListener=function(a){if(!(a in this.j)){var b=this.dd.bind(this,a);this.j[a]=b;this.addEventListener(a,b)}};
l.dd=function(a,b){this.started&&!this.i()&&this.connection.wa(a,this.ob(a,b))};
l.ob=function(a,b){if(null!=b)return{value:b}};
l.removeListener=function(a){a in this.j&&(this.removeEventListener(a,this.j[a]),delete this.j[a])};
l.D=function(){var a=this.connection;a.i()||vi(a.j,"command",this.fc,this);this.connection=null;for(var b in this.j)this.j.hasOwnProperty(b)&&this.removeListener(b);J.prototype.D.call(this)};function xw(a,b){uw.call(this,b);this.api=a;this.start()}
t(xw,uw);xw.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
xw.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function vw(a,b){switch(a){case "loadVideoById":return a=rw(b),[a];case "cueVideoById":return a=rw(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=sw(b),[a];case "cuePlaylist":return a=sw(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function ww(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
xw.prototype.ob=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return uw.prototype.ob.call(this,a,b)};
xw.prototype.D=function(){uw.prototype.D.call(this);delete this.api};function yw(a){a=void 0===a?!1:a;J.call(this);this.j=new K(a);re(this,this.j)}
Za(yw,J);yw.prototype.subscribe=function(a,b,c){return this.i()?0:this.j.subscribe(a,b,c)};
yw.prototype.m=function(a,b){this.i()||this.j.ra.apply(this.j,arguments)};function zw(a,b,c){yw.call(this);this.l=a;this.destination=b;this.id=c}
t(zw,yw);zw.prototype.wa=function(a,b){this.i()||this.l.wa(this.destination,this.id,a,b)};
zw.prototype.D=function(){this.destination=this.l=null;yw.prototype.D.call(this)};function Aw(a,b,c){J.call(this);this.destination=a;this.origin=c;this.j=nq(window,"message",this.l.bind(this));this.connection=new zw(this,a,b);re(this,this.connection)}
t(Aw,J);Aw.prototype.wa=function(a,b,c,d){this.i()||a!==this.destination||(a={id:b,command:c},d&&(a.data=d),this.destination.postMessage(JSON.stringify(a),this.origin))};
Aw.prototype.l=function(a){if(!this.i()&&a.origin===this.origin){var b=a.data;if("string"===typeof b){try{b=JSON.parse(b)}catch(d){return}if(b.command){var c=this.connection;c.i()||c.m("command",b.command,b.data,a.origin)}}}};
Aw.prototype.D=function(){oq(this.j);this.destination=null;J.prototype.D.call(this)};function Bw(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||vb(b);this.assets=a.assets||{};this.attrs=a.attrs||vb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Bw.prototype.clone=function(){var a=new Bw,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Oa(c)?a[b]=vb(c):a[b]=c}return a};var Cw=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Dw(a){a=a||"";if(window.spf){var b=a.match(Cw);spf.style.load(a,b?b[1]:"",void 0)}else Ew(a)}
function Ew(a){var b=Fw(a),c=document.getElementById(b),d=c&&yv(c,"loaded");d||c&&!d||(c=Gw(a,b,function(){yv(c,"loaded")||(wv(c),Dq(b),gl(Ya(Eq,b),0))}))}
function Gw(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Lb(a);gc(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Fw(a){var b=kf("A");Db("This URL is never added to the DOM");fc(b,new Ob(a,Pb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+kc(a)}
;function Hw(){J.call(this);this.j=[]}
t(Hw,J);Hw.prototype.D=function(){for(;this.j.length;){var a=this.j.pop();a.target.removeEventListener(a.name,a.callback,void 0)}J.prototype.D.call(this)};function Iw(){Hw.apply(this,arguments)}
t(Iw,Hw);function Jw(a,b,c,d){J.call(this);var e=this;this.A=b;this.webPlayerContextConfig=d;this.da=!1;this.api={};this.W=this.s=null;this.K=new K;this.j={};this.R=this.X=this.elementId=this.sa=this.config=null;this.P=!1;this.m=this.G=null;this.la={};this.Pa=["onReady"];this.lastError=null;this.Ea=NaN;this.J={};this.Qa=new Iw(this);this.T=0;this.l=this.o=a;re(this,this.K);Kw(this);Lw(this);re(this,this.Qa);c?this.T=gl(function(){e.loadNewVideoConfig(c)},0):d&&(Mw(this),Nw(this))}
t(Jw,J);l=Jw.prototype;l.getId=function(){return this.A};
l.loadNewVideoConfig=function(a){if(!this.i()){this.T&&(hl(this.T),this.T=0);var b=a||{};b instanceof Bw||(b=new Bw(b));this.config=b;this.setConfig(a);Nw(this);this.isReady()&&Ow(this)}};
function Mw(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.A,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.A:a.config.attrs.id=a.A);var c;(null==(c=a.l)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
l.setConfig=function(a){this.sa=a;this.config=Pw(a);Mw(this);if(!this.X){var b;this.X=Qw(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.l&&(this.l.style.width=Qh(Number(b)||b)),(a=a.height)&&this.l&&(this.l.style.height=Qh(Number(a)||a))};
function Ow(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function Rw(a){var b=!0,c=Sw(a);c&&a.config&&(a=Tw(a),b=yv(c,"version")===a);return b&&!!B("yt.player.Application.create")}
function Nw(a){if(!a.i()&&!a.P){var b=Rw(a);if(b&&"html5"===(Sw(a)?"html5":null))a.R="html5",a.isReady()||Uw(a);else if(Vw(a),a.R="html5",b&&a.m&&a.o)a.o.appendChild(a.m),Uw(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.G=function(){c=!0;var d=Ww(a,"player_bootstrap_method")?B("yt.player.Application.createAlternate")||B("yt.player.Application.create"):B("yt.player.Application.create");var e=a.config?Pw(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig);Uw(a)};
a.P=!0;b?a.G():(Cv(Tw(a),a.G),(b=Xw(a))&&Dw(b),Yw(a)&&!c&&z("yt.player.Application.create",null))}}}
function Sw(a){var b=jf(a.elementId);!b&&a.l&&a.l.querySelector&&(b=a.l.querySelector("#"+a.elementId));return b}
function Uw(a){if(!a.i()){var b=Sw(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.P=!1;if(!Ww(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}Zw(a)}else a.Ea=gl(function(){Uw(a)},50)}}
function Zw(a){Kw(a);a.da=!0;var b=Sw(a);if(b){a.s=$w(a,b,"addEventListener");a.W=$w(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=$w(a,b,f))}}for(var g in a.j)a.j.hasOwnProperty(g)&&a.s&&a.s(g,a.j[g]);Ow(a);a.X&&a.X(a.api);a.K.ra("onReady",a.api)}
function $w(a,b,c){var d=b[c];return function(){var e=Ja.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){"sendAbandonmentPing"!==c&&(f.params=c,a.lastError=f,Vr(f))}}}
function Kw(a){a.da=!1;if(a.W)for(var b in a.j)a.j.hasOwnProperty(b)&&a.W(b,a.j[b]);for(var c in a.J)a.J.hasOwnProperty(c)&&hl(Number(c));a.J={};a.s=null;a.W=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.sa};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
l.isReady=function(){return this.da};
function Lw(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){Dq("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){Dq("WATCH_LATER_VIDEO_REMOVED",b)})}
l.addEventListener=function(a,b){var c=this,d=Qw(this,b);d&&(0<=eb(this.Pa,a)||this.j[a]||(b=ax(this,a),this.s&&this.s(a,b)),this.K.subscribe(a,d),"onReady"===a&&this.isReady()&&gl(function(){d(c.api)},0))};
l.removeEventListener=function(a,b){this.i()||(b=Qw(this,b))&&vi(this.K,a,b)};
function Qw(a,b){var c=b;if("string"===typeof b){if(a.la[b])return a.la[b];c=function(){var d=Ja.apply(0,arguments),e=B(b);if(e)try{e.apply(y,d)}catch(f){Ur(f)}};
a.la[b]=c}return c?c:null}
function ax(a,b){var c="ytPlayer"+b+a.A;a.j[b]=c;y[c]=function(d){var e=gl(function(){if(!a.i()){try{a.K.ra(b,null!=d?d:void 0)}catch(h){Vr(new Q("PlayerProxy error when creating global callback",{error:h,event:b,playerId:a.A,data:d}))}var f=a.J,g=String(e);g in f&&delete f[g]}},0);
sb(a.J,String(e))};
return c}
l.getPlayerType=function(){return this.R||(Sw(this)?"html5":null)};
l.getLastError=function(){return this.lastError};
function Vw(a){a.cancel();Kw(a);a.R=null;a.config&&(a.config.loaded=!1);var b=Sw(a);b&&(Rw(a)||!Yw(a)?a.m=b:(b&&b.destroy&&b.destroy(),a.m=null));if(a.o)for(a=a.o;b=a.firstChild;)a.removeChild(b)}
l.cancel=function(){this.G&&Iv(Tw(this),this.G);hl(this.Ea);this.P=!1};
l.D=function(){Vw(this);if(this.m&&this.config&&this.m.destroy)try{this.m.destroy()}catch(b){Ur(b)}this.la=null;for(var a in this.j)this.j.hasOwnProperty(a)&&(y[this.j[a]]=null);this.sa=this.config=this.api=null;delete this.o;delete this.l;J.prototype.D.call(this)};
function Yw(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function Tw(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function Xw(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Ww(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return"true"===Uk(c||"","&")[b]}
function Pw(a){for(var b={},c=p(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?vb(e):e}return b}
;var bx={},cx="player_uid_"+(1E9*Math.random()>>>0);function dx(a,b,c){var d="player";c=void 0===c?!0:c;d="string"===typeof d?jf(d):d;var e=cx+"_"+Ra(d),f=bx[e];if(f&&c)return ex(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new Jw(d,e,a,b);bx[e]=f;Dq("player-added",f.api);se(f,function(){delete bx[f.getId()]});
return f.api}
function ex(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var fx=null,gx=null,hx=null;function ix(){jx()}
function kx(){jx()}
function jx(){var a=fx.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
;function lx(a,b,c){a="ST-"+kc(a).toString(36);b=b?tc(b):"";c=c||5;Cs()&&xl(a,b,c)}
;function mx(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=L("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=L("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=oc(window.location.href);g&&f.push(g);g=oc(d);if(0<=eb(f,g)||!g&&0==d.lastIndexOf("/",0))if(M("autoescape_tempdata_url")&&(f=document.createElement("a"),fc(f,d),d=f.href),d&&(d=pc(d),f=d.indexOf("#"),d=0>f?d:d.slice(0,f)))if(e&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:ms()},b)),h){var h=parseInt(h,10);isFinite(h)&&0<h&&
lx(d,b,h)}else lx(d,b)}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var k=void 0===k?{}:k;var m=void 0===m?"":m;var q=void 0===q?window:q;c=q.location;a=vc(a,k)+m;var r=void 0===r?Ph:r;a:{r=void 0===r?Ph:r;for(k=0;k<r.length;++k)if(m=r[k],m instanceof Nh&&m.isValid(a)){r=new Ob(a,Pb);break a}r=void 0}r=r||Sb;if(r instanceof Ob)var x=Qb(r);else{a:if(Fh){try{x=new URL(r)}catch(u){x="https:";break a}x=x.protocol}else b:{x=document.createElement("a");try{x.href=r}catch(u){x=void 0;
break b}x=-1!==[":",""].indexOf(x.protocol)?"https:":x.protocol}x="javascript:"===x?"about:invalid":r}c.href=x}return!0}
;z("yt.setConfig",Ek);z("yt.config.set",Ek);z("yt.setMsg",rs);z("yt.msgs.set",rs);z("yt.logging.errors.log",Ur);
z("writeEmbed",function(){var a=L("PLAYER_CONFIG");if(!a){var b=L("PLAYER_VARS");b&&(a={args:b})}Ms(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=L("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);M("embeds_js_api_set_1p_cookie")&&(c=Zk(window.location.href),c.embedsTokenValue&&(a.args.embedsTokenValue=c.embedsTokenValue));mu();if((c=L("WEB_PLAYER_CONTEXT_CONFIGS"))&&
"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in c){c=c.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=Zk(window.location.href);d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}fx=dx(a,c,!1)}else fx=dx(a);fx.addEventListener("onVideoDataChange",ix);fx.addEventListener("onReady",kx);a=L("POST_MESSAGE_ID","player");L("ENABLE_JS_API")?hx=new tw(fx):L("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(gx=new Aw(window.parent,
a,b),hx=new xw(fx,gx.connection));Lv();M("ytidb_create_logger_embed_killswitch")||qm();a={};gw||(gw=new fw);gw.install((a.flush_logs={callback:function(){Wq()}},a));
M("embeds_web_enable_new_nwl")?Zo():gp();M("ytidb_clear_embedded_player")&&Xh.S(function(){var e;if(!Vu){var f=gt(),g={yb:Uu,pc:Tu};f.providers.set(g.yb,g);g={Ob:{feedbackEndpoint:ht(Pu),modifyChannelNotificationPreferenceEndpoint:ht(Qu),playlistEditEndpoint:ht(Ru),subscribeEndpoint:ht(Nu),unsubscribeEndpoint:ht(Ou),webPlayerShareEntityServiceEndpoint:ht(Su)}};var h=M("web_enable_client_location_service")?Vs.getInstance():void 0,k={};h&&(k.client_location=h);if(void 0===m){Ns.i||(Ns.i=new Ns);var m=
Ns.i}void 0===e&&(e=f.resolve(Uu));Au(g,e,m,k);m={yb:Gu,qc:zu.i};f.providers.set(m.yb,m);Vu=f.resolve(Gu)}vv()})});
var nx=Mk(function(){tu();var a=Al.getInstance(),b=Dl(119),c=1<window.devicePixelRatio;if(document.body&&ii(document.body,"exp-invert-logo"))if(c&&!ii(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!ii(d,"inverted-hdpi")){var e=gi(d);hi(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&ii(document.body,"inverted-hdpi")&&ji();if(b!=c){b="f"+(Math.floor(119/31)+1);d=El(b)||0;d=c?d|67108864:d&-67108865;0==d?delete zl[b]:(c=d.toString(16),
zl[b]=c.toString());c=!0;M("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.i;d=[];for(var f in zl)d.push(f+"="+encodeURIComponent(String(zl[f])));xl(b,d.join("&"),63072E3,a.j,c)}ev.i||(ev.i=new ev);a=ev.i;f=16623;var g=void 0===g?{}:g;Object.values(ss).includes(f)||(Vr(new Q("createClientScreen() called with a non-page VE",f)),f=83769);g.isHistoryNavigation||a.i.push({rootVe:f,key:g.key||""});a.o=[];a.N=[];g.Rb?hv(a,f,g):iv(a,f,g)}),ox=Mk(function(){fx&&fx.sendAbandonmentPing&&fx.sendAbandonmentPing();
L("PL_ATT")&&(M("use_player_abuse_bg_library")?Uv.dispose():Vv.dispose());for(var a=Xh,b=0,c=Jv.length;b<c;b++)a.fa(Jv[b]);Jv.length=0;Hv("//static.doubleclick.net/instream/ad_status.js");Kv=!1;Ek("DCLKSTAT",0);qe(hx,gx);fx&&(fx.removeEventListener("onVideoDataChange",ix),fx.destroy())});
window.addEventListener?(window.addEventListener("load",nx),window.addEventListener("pagehide",ox)):window.attachEvent&&(window.attachEvent("onload",nx),window.attachEvent("onunload",ox));z("yt.abuse.player.botguardInitialized",B("yt.abuse.player.botguardInitialized")||Wv);z("yt.abuse.player.invokeBotguard",B("yt.abuse.player.invokeBotguard")||Xv);z("yt.abuse.dclkstatus.checkDclkStatus",B("yt.abuse.dclkstatus.checkDclkStatus")||Mv);z("yt.player.exports.navigate",B("yt.player.exports.navigate")||mx);
z("yt.util.activity.init",B("yt.util.activity.init")||sq);z("yt.util.activity.getTimeSinceActive",B("yt.util.activity.getTimeSinceActive")||vq);z("yt.util.activity.setTimestamp",B("yt.util.activity.setTimestamp")||tq);}).call(this);
