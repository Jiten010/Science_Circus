var Am=t=>{throw TypeError(t)};var zu=(t,e,n)=>e.has(t)||Am("Cannot "+n);var j=(t,e,n)=>(zu(t,e,"read from private field"),n?n.call(t):e.get(t)),He=(t,e,n)=>e.has(t)?Am("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),Ie=(t,e,n,i)=>(zu(t,e,"write to private field"),i?i.call(t,n):e.set(t,n),n),Ct=(t,e,n)=>(zu(t,e,"access private method"),n);var dl=(t,e,n,i)=>({set _(r){Ie(t,e,r,n)},get _(){return j(t,e,i)}});function TE(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function M0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var w0={exports:{}},fu={},T0={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ka=Symbol.for("react.element"),bE=Symbol.for("react.portal"),CE=Symbol.for("react.fragment"),AE=Symbol.for("react.strict_mode"),RE=Symbol.for("react.profiler"),PE=Symbol.for("react.provider"),NE=Symbol.for("react.context"),DE=Symbol.for("react.forward_ref"),LE=Symbol.for("react.suspense"),IE=Symbol.for("react.memo"),UE=Symbol.for("react.lazy"),Rm=Symbol.iterator;function FE(t){return t===null||typeof t!="object"?null:(t=Rm&&t[Rm]||t["@@iterator"],typeof t=="function"?t:null)}var b0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C0=Object.assign,A0={};function ko(t,e,n){this.props=t,this.context=e,this.refs=A0,this.updater=n||b0}ko.prototype.isReactComponent={};ko.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ko.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function R0(){}R0.prototype=ko.prototype;function Qh(t,e,n){this.props=t,this.context=e,this.refs=A0,this.updater=n||b0}var Zh=Qh.prototype=new R0;Zh.constructor=Qh;C0(Zh,ko.prototype);Zh.isPureReactComponent=!0;var Pm=Array.isArray,P0=Object.prototype.hasOwnProperty,Jh={current:null},N0={key:!0,ref:!0,__self:!0,__source:!0};function D0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)P0.call(e,i)&&!N0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ka,type:t,key:s,ref:o,props:r,_owner:Jh.current}}function OE(t,e){return{$$typeof:Ka,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ep(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ka}function kE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Nm=/\/+/g;function Vu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?kE(""+t.key):e.toString(36)}function dc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ka:case bE:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Vu(o,0):i,Pm(r)?(n="",t!=null&&(n=t.replace(Nm,"$&/")+"/"),dc(r,e,n,"",function(c){return c})):r!=null&&(ep(r)&&(r=OE(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Nm,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Pm(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Vu(s,a);o+=dc(s,e,n,l,r)}else if(l=FE(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Vu(s,a++),o+=dc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function fl(t,e,n){if(t==null)return t;var i=[],r=0;return dc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function BE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ln={current:null},fc={transition:null},zE={ReactCurrentDispatcher:ln,ReactCurrentBatchConfig:fc,ReactCurrentOwner:Jh};function L0(){throw Error("act(...) is not supported in production builds of React.")}Ve.Children={map:fl,forEach:function(t,e,n){fl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return fl(t,function(){e++}),e},toArray:function(t){return fl(t,function(e){return e})||[]},only:function(t){if(!ep(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ve.Component=ko;Ve.Fragment=CE;Ve.Profiler=RE;Ve.PureComponent=Qh;Ve.StrictMode=AE;Ve.Suspense=LE;Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zE;Ve.act=L0;Ve.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=C0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Jh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)P0.call(e,l)&&!N0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ka,type:t.type,key:r,ref:s,props:i,_owner:o}};Ve.createContext=function(t){return t={$$typeof:NE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:PE,_context:t},t.Consumer=t};Ve.createElement=D0;Ve.createFactory=function(t){var e=D0.bind(null,t);return e.type=t,e};Ve.createRef=function(){return{current:null}};Ve.forwardRef=function(t){return{$$typeof:DE,render:t}};Ve.isValidElement=ep;Ve.lazy=function(t){return{$$typeof:UE,_payload:{_status:-1,_result:t},_init:BE}};Ve.memo=function(t,e){return{$$typeof:IE,type:t,compare:e===void 0?null:e}};Ve.startTransition=function(t){var e=fc.transition;fc.transition={};try{t()}finally{fc.transition=e}};Ve.unstable_act=L0;Ve.useCallback=function(t,e){return ln.current.useCallback(t,e)};Ve.useContext=function(t){return ln.current.useContext(t)};Ve.useDebugValue=function(){};Ve.useDeferredValue=function(t){return ln.current.useDeferredValue(t)};Ve.useEffect=function(t,e){return ln.current.useEffect(t,e)};Ve.useId=function(){return ln.current.useId()};Ve.useImperativeHandle=function(t,e,n){return ln.current.useImperativeHandle(t,e,n)};Ve.useInsertionEffect=function(t,e){return ln.current.useInsertionEffect(t,e)};Ve.useLayoutEffect=function(t,e){return ln.current.useLayoutEffect(t,e)};Ve.useMemo=function(t,e){return ln.current.useMemo(t,e)};Ve.useReducer=function(t,e,n){return ln.current.useReducer(t,e,n)};Ve.useRef=function(t){return ln.current.useRef(t)};Ve.useState=function(t){return ln.current.useState(t)};Ve.useSyncExternalStore=function(t,e,n){return ln.current.useSyncExternalStore(t,e,n)};Ve.useTransition=function(){return ln.current.useTransition()};Ve.version="18.3.1";T0.exports=Ve;var N=T0.exports;const ar=M0(N),I0=TE({__proto__:null,default:ar},[N]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var VE=N,HE=Symbol.for("react.element"),GE=Symbol.for("react.fragment"),WE=Object.prototype.hasOwnProperty,jE=VE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,XE={key:!0,ref:!0,__self:!0,__source:!0};function U0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)WE.call(e,i)&&!XE.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:HE,type:t,key:s,ref:o,props:r,_owner:jE.current}}fu.Fragment=GE;fu.jsx=U0;fu.jsxs=U0;w0.exports=fu;var y=w0.exports,F0={exports:{}},An={},O0={exports:{}},k0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,$){var J=I.length;I.push($);e:for(;0<J;){var se=J-1>>>1,Ee=I[se];if(0<r(Ee,$))I[se]=$,I[J]=Ee,J=se;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var $=I[0],J=I.pop();if(J!==$){I[0]=J;e:for(var se=0,Ee=I.length,ze=Ee>>>1;se<ze;){var Y=2*(se+1)-1,ae=I[Y],me=Y+1,le=I[me];if(0>r(ae,J))me<Ee&&0>r(le,ae)?(I[se]=le,I[me]=J,se=me):(I[se]=ae,I[Y]=J,se=Y);else if(me<Ee&&0>r(le,J))I[se]=le,I[me]=J,se=me;else break e}}return $}function r(I,$){var J=I.sortIndex-$.sortIndex;return J!==0?J:I.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,h=null,f=3,m=!1,_=!1,g=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(I){for(var $=n(c);$!==null;){if($.callback===null)i(c);else if($.startTime<=I)i(c),$.sortIndex=$.expirationTime,e(l,$);else break;$=n(c)}}function S(I){if(g=!1,x(I),!_)if(n(l)!==null)_=!0,X(C);else{var $=n(c);$!==null&&Z(S,$.startTime-I)}}function C(I,$){_=!1,g&&(g=!1,u(P),P=-1),m=!0;var J=f;try{for(x($),h=n(l);h!==null&&(!(h.expirationTime>$)||I&&!D());){var se=h.callback;if(typeof se=="function"){h.callback=null,f=h.priorityLevel;var Ee=se(h.expirationTime<=$);$=t.unstable_now(),typeof Ee=="function"?h.callback=Ee:h===n(l)&&i(l),x($)}else i(l);h=n(l)}if(h!==null)var ze=!0;else{var Y=n(c);Y!==null&&Z(S,Y.startTime-$),ze=!1}return ze}finally{h=null,f=J,m=!1}}var A=!1,b=null,P=-1,T=5,E=-1;function D(){return!(t.unstable_now()-E<T)}function k(){if(b!==null){var I=t.unstable_now();E=I;var $=!0;try{$=b(!0,I)}finally{$?H():(A=!1,b=null)}}else A=!1}var H;if(typeof v=="function")H=function(){v(k)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,K=V.port2;V.port1.onmessage=k,H=function(){K.postMessage(null)}}else H=function(){p(k,0)};function X(I){b=I,A||(A=!0,H())}function Z(I,$){P=p(function(){I(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,X(C))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(f){case 1:case 2:case 3:var $=3;break;default:$=f}var J=f;f=$;try{return I()}finally{f=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,$){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var J=f;f=I;try{return $()}finally{f=J}},t.unstable_scheduleCallback=function(I,$,J){var se=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?se+J:se):J=se,I){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=J+Ee,I={id:d++,callback:$,priorityLevel:I,startTime:J,expirationTime:Ee,sortIndex:-1},J>se?(I.sortIndex=J,e(c,I),n(l)===null&&I===n(c)&&(g?(u(P),P=-1):g=!0,Z(S,J-se))):(I.sortIndex=Ee,e(l,I),_||m||(_=!0,X(C))),I},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(I){var $=f;return function(){var J=f;f=$;try{return I.apply(this,arguments)}finally{f=J}}}})(k0);O0.exports=k0;var qE=O0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $E=N,Cn=qE;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var B0=new Set,Ta={};function Ms(t,e){wo(t,e),wo(t+"Capture",e)}function wo(t,e){for(Ta[t]=e,t=0;t<e.length;t++)B0.add(e[t])}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),af=Object.prototype.hasOwnProperty,YE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dm={},Lm={};function KE(t){return af.call(Lm,t)?!0:af.call(Dm,t)?!1:YE.test(t)?Lm[t]=!0:(Dm[t]=!0,!1)}function QE(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ZE(t,e,n,i){if(e===null||typeof e>"u"||QE(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function cn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){jt[t]=new cn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];jt[e]=new cn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){jt[t]=new cn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){jt[t]=new cn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){jt[t]=new cn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){jt[t]=new cn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){jt[t]=new cn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){jt[t]=new cn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){jt[t]=new cn(t,5,!1,t.toLowerCase(),null,!1,!1)});var tp=/[\-:]([a-z])/g;function np(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(tp,np);jt[e]=new cn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(tp,np);jt[e]=new cn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(tp,np);jt[e]=new cn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){jt[t]=new cn(t,1,!1,t.toLowerCase(),null,!1,!1)});jt.xlinkHref=new cn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){jt[t]=new cn(t,1,!1,t.toLowerCase(),null,!0,!0)});function ip(t,e,n,i){var r=jt.hasOwnProperty(e)?jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ZE(e,n,r,i)&&(n=null),i||r===null?KE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Qi=$E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hl=Symbol.for("react.element"),js=Symbol.for("react.portal"),Xs=Symbol.for("react.fragment"),rp=Symbol.for("react.strict_mode"),lf=Symbol.for("react.profiler"),z0=Symbol.for("react.provider"),V0=Symbol.for("react.context"),sp=Symbol.for("react.forward_ref"),cf=Symbol.for("react.suspense"),uf=Symbol.for("react.suspense_list"),op=Symbol.for("react.memo"),ur=Symbol.for("react.lazy"),H0=Symbol.for("react.offscreen"),Im=Symbol.iterator;function Xo(t){return t===null||typeof t!="object"?null:(t=Im&&t[Im]||t["@@iterator"],typeof t=="function"?t:null)}var _t=Object.assign,Hu;function ua(t){if(Hu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Hu=e&&e[1]||""}return`
`+Hu+t}var Gu=!1;function Wu(t,e){if(!t||Gu)return"";Gu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Gu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ua(t):""}function JE(t){switch(t.tag){case 5:return ua(t.type);case 16:return ua("Lazy");case 13:return ua("Suspense");case 19:return ua("SuspenseList");case 0:case 2:case 15:return t=Wu(t.type,!1),t;case 11:return t=Wu(t.type.render,!1),t;case 1:return t=Wu(t.type,!0),t;default:return""}}function df(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Xs:return"Fragment";case js:return"Portal";case lf:return"Profiler";case rp:return"StrictMode";case cf:return"Suspense";case uf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case V0:return(t.displayName||"Context")+".Consumer";case z0:return(t._context.displayName||"Context")+".Provider";case sp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case op:return e=t.displayName||null,e!==null?e:df(t.type)||"Memo";case ur:e=t._payload,t=t._init;try{return df(t(e))}catch{}}return null}function eM(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return df(e);case 8:return e===rp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Fr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function G0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function tM(t){var e=G0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function pl(t){t._valueTracker||(t._valueTracker=tM(t))}function W0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=G0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Uc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ff(t,e){var n=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Um(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Fr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function j0(t,e){e=e.checked,e!=null&&ip(t,"checked",e,!1)}function hf(t,e){j0(t,e);var n=Fr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?pf(t,e.type,n):e.hasOwnProperty("defaultValue")&&pf(t,e.type,Fr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Fm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function pf(t,e,n){(e!=="number"||Uc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var da=Array.isArray;function ro(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Fr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function mf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Om(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(da(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Fr(n)}}function X0(t,e){var n=Fr(e.value),i=Fr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function km(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function q0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?q0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ml,$0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ml=ml||document.createElement("div"),ml.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ml.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ba(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ma={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nM=["Webkit","ms","Moz","O"];Object.keys(ma).forEach(function(t){nM.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ma[e]=ma[t]})});function Y0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ma.hasOwnProperty(t)&&ma[t]?(""+e).trim():e+"px"}function K0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Y0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var iM=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vf(t,e){if(e){if(iM[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function _f(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xf=null;function ap(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var yf=null,so=null,oo=null;function Bm(t){if(t=Ja(t)){if(typeof yf!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=vu(e),yf(t.stateNode,t.type,e))}}function Q0(t){so?oo?oo.push(t):oo=[t]:so=t}function Z0(){if(so){var t=so,e=oo;if(oo=so=null,Bm(t),e)for(t=0;t<e.length;t++)Bm(e[t])}}function J0(t,e){return t(e)}function e_(){}var ju=!1;function t_(t,e,n){if(ju)return t(e,n);ju=!0;try{return J0(t,e,n)}finally{ju=!1,(so!==null||oo!==null)&&(e_(),Z0())}}function Ca(t,e){var n=t.stateNode;if(n===null)return null;var i=vu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var Sf=!1;if(ji)try{var qo={};Object.defineProperty(qo,"passive",{get:function(){Sf=!0}}),window.addEventListener("test",qo,qo),window.removeEventListener("test",qo,qo)}catch{Sf=!1}function rM(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var ga=!1,Fc=null,Oc=!1,Ef=null,sM={onError:function(t){ga=!0,Fc=t}};function oM(t,e,n,i,r,s,o,a,l){ga=!1,Fc=null,rM.apply(sM,arguments)}function aM(t,e,n,i,r,s,o,a,l){if(oM.apply(this,arguments),ga){if(ga){var c=Fc;ga=!1,Fc=null}else throw Error(ie(198));Oc||(Oc=!0,Ef=c)}}function ws(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function n_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function zm(t){if(ws(t)!==t)throw Error(ie(188))}function lM(t){var e=t.alternate;if(!e){if(e=ws(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return zm(r),t;if(s===i)return zm(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function i_(t){return t=lM(t),t!==null?r_(t):null}function r_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=r_(t);if(e!==null)return e;t=t.sibling}return null}var s_=Cn.unstable_scheduleCallback,Vm=Cn.unstable_cancelCallback,cM=Cn.unstable_shouldYield,uM=Cn.unstable_requestPaint,At=Cn.unstable_now,dM=Cn.unstable_getCurrentPriorityLevel,lp=Cn.unstable_ImmediatePriority,o_=Cn.unstable_UserBlockingPriority,kc=Cn.unstable_NormalPriority,fM=Cn.unstable_LowPriority,a_=Cn.unstable_IdlePriority,hu=null,yi=null;function hM(t){if(yi&&typeof yi.onCommitFiberRoot=="function")try{yi.onCommitFiberRoot(hu,t,void 0,(t.current.flags&128)===128)}catch{}}var ni=Math.clz32?Math.clz32:gM,pM=Math.log,mM=Math.LN2;function gM(t){return t>>>=0,t===0?32:31-(pM(t)/mM|0)|0}var gl=64,vl=4194304;function fa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Bc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=fa(a):(s&=o,s!==0&&(i=fa(s)))}else o=n&~r,o!==0?i=fa(o):s!==0&&(i=fa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ni(e),r=1<<n,i|=t[n],e&=~r;return i}function vM(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _M(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ni(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=vM(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Mf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function l_(){var t=gl;return gl<<=1,!(gl&4194240)&&(gl=64),t}function Xu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Qa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ni(e),t[e]=n}function xM(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ni(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function cp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ni(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var rt=0;function c_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var u_,up,d_,f_,h_,wf=!1,_l=[],Tr=null,br=null,Cr=null,Aa=new Map,Ra=new Map,fr=[],yM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hm(t,e){switch(t){case"focusin":case"focusout":Tr=null;break;case"dragenter":case"dragleave":br=null;break;case"mouseover":case"mouseout":Cr=null;break;case"pointerover":case"pointerout":Aa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ra.delete(e.pointerId)}}function $o(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ja(e),e!==null&&up(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function SM(t,e,n,i,r){switch(e){case"focusin":return Tr=$o(Tr,t,e,n,i,r),!0;case"dragenter":return br=$o(br,t,e,n,i,r),!0;case"mouseover":return Cr=$o(Cr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Aa.set(s,$o(Aa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ra.set(s,$o(Ra.get(s)||null,t,e,n,i,r)),!0}return!1}function p_(t){var e=is(t.target);if(e!==null){var n=ws(e);if(n!==null){if(e=n.tag,e===13){if(e=n_(n),e!==null){t.blockedOn=e,h_(t.priority,function(){d_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function hc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Tf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);xf=i,n.target.dispatchEvent(i),xf=null}else return e=Ja(n),e!==null&&up(e),t.blockedOn=n,!1;e.shift()}return!0}function Gm(t,e,n){hc(t)&&n.delete(e)}function EM(){wf=!1,Tr!==null&&hc(Tr)&&(Tr=null),br!==null&&hc(br)&&(br=null),Cr!==null&&hc(Cr)&&(Cr=null),Aa.forEach(Gm),Ra.forEach(Gm)}function Yo(t,e){t.blockedOn===e&&(t.blockedOn=null,wf||(wf=!0,Cn.unstable_scheduleCallback(Cn.unstable_NormalPriority,EM)))}function Pa(t){function e(r){return Yo(r,t)}if(0<_l.length){Yo(_l[0],t);for(var n=1;n<_l.length;n++){var i=_l[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Tr!==null&&Yo(Tr,t),br!==null&&Yo(br,t),Cr!==null&&Yo(Cr,t),Aa.forEach(e),Ra.forEach(e),n=0;n<fr.length;n++)i=fr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<fr.length&&(n=fr[0],n.blockedOn===null);)p_(n),n.blockedOn===null&&fr.shift()}var ao=Qi.ReactCurrentBatchConfig,zc=!0;function MM(t,e,n,i){var r=rt,s=ao.transition;ao.transition=null;try{rt=1,dp(t,e,n,i)}finally{rt=r,ao.transition=s}}function wM(t,e,n,i){var r=rt,s=ao.transition;ao.transition=null;try{rt=4,dp(t,e,n,i)}finally{rt=r,ao.transition=s}}function dp(t,e,n,i){if(zc){var r=Tf(t,e,n,i);if(r===null)nd(t,e,i,Vc,n),Hm(t,i);else if(SM(r,t,e,n,i))i.stopPropagation();else if(Hm(t,i),e&4&&-1<yM.indexOf(t)){for(;r!==null;){var s=Ja(r);if(s!==null&&u_(s),s=Tf(t,e,n,i),s===null&&nd(t,e,i,Vc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else nd(t,e,i,null,n)}}var Vc=null;function Tf(t,e,n,i){if(Vc=null,t=ap(i),t=is(t),t!==null)if(e=ws(t),e===null)t=null;else if(n=e.tag,n===13){if(t=n_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Vc=t,null}function m_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dM()){case lp:return 1;case o_:return 4;case kc:case fM:return 16;case a_:return 536870912;default:return 16}default:return 16}}var Er=null,fp=null,pc=null;function g_(){if(pc)return pc;var t,e=fp,n=e.length,i,r="value"in Er?Er.value:Er.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return pc=r.slice(t,1<i?1-i:void 0)}function mc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function xl(){return!0}function Wm(){return!1}function Rn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?xl:Wm,this.isPropagationStopped=Wm,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xl)},persist:function(){},isPersistent:xl}),e}var Bo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hp=Rn(Bo),Za=_t({},Bo,{view:0,detail:0}),TM=Rn(Za),qu,$u,Ko,pu=_t({},Za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ko&&(Ko&&t.type==="mousemove"?(qu=t.screenX-Ko.screenX,$u=t.screenY-Ko.screenY):$u=qu=0,Ko=t),qu)},movementY:function(t){return"movementY"in t?t.movementY:$u}}),jm=Rn(pu),bM=_t({},pu,{dataTransfer:0}),CM=Rn(bM),AM=_t({},Za,{relatedTarget:0}),Yu=Rn(AM),RM=_t({},Bo,{animationName:0,elapsedTime:0,pseudoElement:0}),PM=Rn(RM),NM=_t({},Bo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),DM=Rn(NM),LM=_t({},Bo,{data:0}),Xm=Rn(LM),IM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},UM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},FM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function OM(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=FM[t])?!!e[t]:!1}function pp(){return OM}var kM=_t({},Za,{key:function(t){if(t.key){var e=IM[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=mc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?UM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pp,charCode:function(t){return t.type==="keypress"?mc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?mc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),BM=Rn(kM),zM=_t({},pu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qm=Rn(zM),VM=_t({},Za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pp}),HM=Rn(VM),GM=_t({},Bo,{propertyName:0,elapsedTime:0,pseudoElement:0}),WM=Rn(GM),jM=_t({},pu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),XM=Rn(jM),qM=[9,13,27,32],mp=ji&&"CompositionEvent"in window,va=null;ji&&"documentMode"in document&&(va=document.documentMode);var $M=ji&&"TextEvent"in window&&!va,v_=ji&&(!mp||va&&8<va&&11>=va),$m=" ",Ym=!1;function __(t,e){switch(t){case"keyup":return qM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function x_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var qs=!1;function YM(t,e){switch(t){case"compositionend":return x_(e);case"keypress":return e.which!==32?null:(Ym=!0,$m);case"textInput":return t=e.data,t===$m&&Ym?null:t;default:return null}}function KM(t,e){if(qs)return t==="compositionend"||!mp&&__(t,e)?(t=g_(),pc=fp=Er=null,qs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return v_&&e.locale!=="ko"?null:e.data;default:return null}}var QM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Km(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!QM[t.type]:e==="textarea"}function y_(t,e,n,i){Q0(i),e=Hc(e,"onChange"),0<e.length&&(n=new hp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var _a=null,Na=null;function ZM(t){N_(t,0)}function mu(t){var e=Ks(t);if(W0(e))return t}function JM(t,e){if(t==="change")return e}var S_=!1;if(ji){var Ku;if(ji){var Qu="oninput"in document;if(!Qu){var Qm=document.createElement("div");Qm.setAttribute("oninput","return;"),Qu=typeof Qm.oninput=="function"}Ku=Qu}else Ku=!1;S_=Ku&&(!document.documentMode||9<document.documentMode)}function Zm(){_a&&(_a.detachEvent("onpropertychange",E_),Na=_a=null)}function E_(t){if(t.propertyName==="value"&&mu(Na)){var e=[];y_(e,Na,t,ap(t)),t_(ZM,e)}}function e1(t,e,n){t==="focusin"?(Zm(),_a=e,Na=n,_a.attachEvent("onpropertychange",E_)):t==="focusout"&&Zm()}function t1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return mu(Na)}function n1(t,e){if(t==="click")return mu(e)}function i1(t,e){if(t==="input"||t==="change")return mu(e)}function r1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var si=typeof Object.is=="function"?Object.is:r1;function Da(t,e){if(si(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!af.call(e,r)||!si(t[r],e[r]))return!1}return!0}function Jm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function eg(t,e){var n=Jm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jm(n)}}function M_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?M_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function w_(){for(var t=window,e=Uc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Uc(t.document)}return e}function gp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function s1(t){var e=w_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&M_(n.ownerDocument.documentElement,n)){if(i!==null&&gp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=eg(n,s);var o=eg(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var o1=ji&&"documentMode"in document&&11>=document.documentMode,$s=null,bf=null,xa=null,Cf=!1;function tg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cf||$s==null||$s!==Uc(i)||(i=$s,"selectionStart"in i&&gp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),xa&&Da(xa,i)||(xa=i,i=Hc(bf,"onSelect"),0<i.length&&(e=new hp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=$s)))}function yl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ys={animationend:yl("Animation","AnimationEnd"),animationiteration:yl("Animation","AnimationIteration"),animationstart:yl("Animation","AnimationStart"),transitionend:yl("Transition","TransitionEnd")},Zu={},T_={};ji&&(T_=document.createElement("div").style,"AnimationEvent"in window||(delete Ys.animationend.animation,delete Ys.animationiteration.animation,delete Ys.animationstart.animation),"TransitionEvent"in window||delete Ys.transitionend.transition);function gu(t){if(Zu[t])return Zu[t];if(!Ys[t])return t;var e=Ys[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in T_)return Zu[t]=e[n];return t}var b_=gu("animationend"),C_=gu("animationiteration"),A_=gu("animationstart"),R_=gu("transitionend"),P_=new Map,ng="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(t,e){P_.set(t,e),Ms(e,[t])}for(var Ju=0;Ju<ng.length;Ju++){var ed=ng[Ju],a1=ed.toLowerCase(),l1=ed[0].toUpperCase()+ed.slice(1);zr(a1,"on"+l1)}zr(b_,"onAnimationEnd");zr(C_,"onAnimationIteration");zr(A_,"onAnimationStart");zr("dblclick","onDoubleClick");zr("focusin","onFocus");zr("focusout","onBlur");zr(R_,"onTransitionEnd");wo("onMouseEnter",["mouseout","mouseover"]);wo("onMouseLeave",["mouseout","mouseover"]);wo("onPointerEnter",["pointerout","pointerover"]);wo("onPointerLeave",["pointerout","pointerover"]);Ms("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ms("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ms("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ms("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ms("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ms("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),c1=new Set("cancel close invalid load scroll toggle".split(" ").concat(ha));function ig(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,aM(i,e,void 0,t),t.currentTarget=null}function N_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;ig(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;ig(r,a,c),s=l}}}if(Oc)throw t=Ef,Oc=!1,Ef=null,t}function dt(t,e){var n=e[Df];n===void 0&&(n=e[Df]=new Set);var i=t+"__bubble";n.has(i)||(D_(e,t,2,!1),n.add(i))}function td(t,e,n){var i=0;e&&(i|=4),D_(n,t,i,e)}var Sl="_reactListening"+Math.random().toString(36).slice(2);function La(t){if(!t[Sl]){t[Sl]=!0,B0.forEach(function(n){n!=="selectionchange"&&(c1.has(n)||td(n,!1,t),td(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Sl]||(e[Sl]=!0,td("selectionchange",!1,e))}}function D_(t,e,n,i){switch(m_(e)){case 1:var r=MM;break;case 4:r=wM;break;default:r=dp}n=r.bind(null,e,n,t),r=void 0,!Sf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function nd(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=is(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}t_(function(){var c=s,d=ap(n),h=[];e:{var f=P_.get(t);if(f!==void 0){var m=hp,_=t;switch(t){case"keypress":if(mc(n)===0)break e;case"keydown":case"keyup":m=BM;break;case"focusin":_="focus",m=Yu;break;case"focusout":_="blur",m=Yu;break;case"beforeblur":case"afterblur":m=Yu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=jm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=CM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=HM;break;case b_:case C_:case A_:m=PM;break;case R_:m=WM;break;case"scroll":m=TM;break;case"wheel":m=XM;break;case"copy":case"cut":case"paste":m=DM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=qm}var g=(e&4)!==0,p=!g&&t==="scroll",u=g?f!==null?f+"Capture":null:f;g=[];for(var v=c,x;v!==null;){x=v;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,u!==null&&(S=Ca(v,u),S!=null&&g.push(Ia(v,S,x)))),p)break;v=v.return}0<g.length&&(f=new m(f,_,null,n,d),h.push({event:f,listeners:g}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==xf&&(_=n.relatedTarget||n.fromElement)&&(is(_)||_[Xi]))break e;if((m||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?is(_):null,_!==null&&(p=ws(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(g=jm,S="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(g=qm,S="onPointerLeave",u="onPointerEnter",v="pointer"),p=m==null?f:Ks(m),x=_==null?f:Ks(_),f=new g(S,v+"leave",m,n,d),f.target=p,f.relatedTarget=x,S=null,is(d)===c&&(g=new g(u,v+"enter",_,n,d),g.target=x,g.relatedTarget=p,S=g),p=S,m&&_)t:{for(g=m,u=_,v=0,x=g;x;x=bs(x))v++;for(x=0,S=u;S;S=bs(S))x++;for(;0<v-x;)g=bs(g),v--;for(;0<x-v;)u=bs(u),x--;for(;v--;){if(g===u||u!==null&&g===u.alternate)break t;g=bs(g),u=bs(u)}g=null}else g=null;m!==null&&rg(h,f,m,g,!1),_!==null&&p!==null&&rg(h,p,_,g,!0)}}e:{if(f=c?Ks(c):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var C=JM;else if(Km(f))if(S_)C=i1;else{C=t1;var A=e1}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=n1);if(C&&(C=C(t,c))){y_(h,C,n,d);break e}A&&A(t,f,c),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&pf(f,"number",f.value)}switch(A=c?Ks(c):window,t){case"focusin":(Km(A)||A.contentEditable==="true")&&($s=A,bf=c,xa=null);break;case"focusout":xa=bf=$s=null;break;case"mousedown":Cf=!0;break;case"contextmenu":case"mouseup":case"dragend":Cf=!1,tg(h,n,d);break;case"selectionchange":if(o1)break;case"keydown":case"keyup":tg(h,n,d)}var b;if(mp)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else qs?__(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(v_&&n.locale!=="ko"&&(qs||P!=="onCompositionStart"?P==="onCompositionEnd"&&qs&&(b=g_()):(Er=d,fp="value"in Er?Er.value:Er.textContent,qs=!0)),A=Hc(c,P),0<A.length&&(P=new Xm(P,t,null,n,d),h.push({event:P,listeners:A}),b?P.data=b:(b=x_(n),b!==null&&(P.data=b)))),(b=$M?YM(t,n):KM(t,n))&&(c=Hc(c,"onBeforeInput"),0<c.length&&(d=new Xm("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=b))}N_(h,e)})}function Ia(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Hc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ca(t,n),s!=null&&i.unshift(Ia(t,s,r)),s=Ca(t,e),s!=null&&i.push(Ia(t,s,r))),t=t.return}return i}function bs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function rg(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Ca(n,s),l!=null&&o.unshift(Ia(n,l,a))):r||(l=Ca(n,s),l!=null&&o.push(Ia(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var u1=/\r\n?/g,d1=/\u0000|\uFFFD/g;function sg(t){return(typeof t=="string"?t:""+t).replace(u1,`
`).replace(d1,"")}function El(t,e,n){if(e=sg(e),sg(t)!==e&&n)throw Error(ie(425))}function Gc(){}var Af=null,Rf=null;function Pf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Nf=typeof setTimeout=="function"?setTimeout:void 0,f1=typeof clearTimeout=="function"?clearTimeout:void 0,og=typeof Promise=="function"?Promise:void 0,h1=typeof queueMicrotask=="function"?queueMicrotask:typeof og<"u"?function(t){return og.resolve(null).then(t).catch(p1)}:Nf;function p1(t){setTimeout(function(){throw t})}function id(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Pa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Pa(e)}function Ar(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ag(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var zo=Math.random().toString(36).slice(2),vi="__reactFiber$"+zo,Ua="__reactProps$"+zo,Xi="__reactContainer$"+zo,Df="__reactEvents$"+zo,m1="__reactListeners$"+zo,g1="__reactHandles$"+zo;function is(t){var e=t[vi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Xi]||n[vi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ag(t);t!==null;){if(n=t[vi])return n;t=ag(t)}return e}t=n,n=t.parentNode}return null}function Ja(t){return t=t[vi]||t[Xi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ks(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function vu(t){return t[Ua]||null}var Lf=[],Qs=-1;function Vr(t){return{current:t}}function ft(t){0>Qs||(t.current=Lf[Qs],Lf[Qs]=null,Qs--)}function lt(t,e){Qs++,Lf[Qs]=t.current,t.current=e}var Or={},en=Vr(Or),mn=Vr(!1),ps=Or;function To(t,e){var n=t.type.contextTypes;if(!n)return Or;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function gn(t){return t=t.childContextTypes,t!=null}function Wc(){ft(mn),ft(en)}function lg(t,e,n){if(en.current!==Or)throw Error(ie(168));lt(en,e),lt(mn,n)}function L_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,eM(t)||"Unknown",r));return _t({},n,i)}function jc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Or,ps=en.current,lt(en,t),lt(mn,mn.current),!0}function cg(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=L_(t,e,ps),i.__reactInternalMemoizedMergedChildContext=t,ft(mn),ft(en),lt(en,t)):ft(mn),lt(mn,n)}var Li=null,_u=!1,rd=!1;function I_(t){Li===null?Li=[t]:Li.push(t)}function v1(t){_u=!0,I_(t)}function Hr(){if(!rd&&Li!==null){rd=!0;var t=0,e=rt;try{var n=Li;for(rt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Li=null,_u=!1}catch(r){throw Li!==null&&(Li=Li.slice(t+1)),s_(lp,Hr),r}finally{rt=e,rd=!1}}return null}var Zs=[],Js=0,Xc=null,qc=0,Fn=[],On=0,ms=null,Fi=1,Oi="";function Qr(t,e){Zs[Js++]=qc,Zs[Js++]=Xc,Xc=t,qc=e}function U_(t,e,n){Fn[On++]=Fi,Fn[On++]=Oi,Fn[On++]=ms,ms=t;var i=Fi;t=Oi;var r=32-ni(i)-1;i&=~(1<<r),n+=1;var s=32-ni(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Fi=1<<32-ni(e)+r|n<<r|i,Oi=s+t}else Fi=1<<s|n<<r|i,Oi=t}function vp(t){t.return!==null&&(Qr(t,1),U_(t,1,0))}function _p(t){for(;t===Xc;)Xc=Zs[--Js],Zs[Js]=null,qc=Zs[--Js],Zs[Js]=null;for(;t===ms;)ms=Fn[--On],Fn[On]=null,Oi=Fn[--On],Fn[On]=null,Fi=Fn[--On],Fn[On]=null}var bn=null,Tn=null,pt=!1,Jn=null;function F_(t,e){var n=Bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ug(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,bn=t,Tn=Ar(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,bn=t,Tn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ms!==null?{id:Fi,overflow:Oi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,bn=t,Tn=null,!0):!1;default:return!1}}function If(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Uf(t){if(pt){var e=Tn;if(e){var n=e;if(!ug(t,e)){if(If(t))throw Error(ie(418));e=Ar(n.nextSibling);var i=bn;e&&ug(t,e)?F_(i,n):(t.flags=t.flags&-4097|2,pt=!1,bn=t)}}else{if(If(t))throw Error(ie(418));t.flags=t.flags&-4097|2,pt=!1,bn=t}}}function dg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;bn=t}function Ml(t){if(t!==bn)return!1;if(!pt)return dg(t),pt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Pf(t.type,t.memoizedProps)),e&&(e=Tn)){if(If(t))throw O_(),Error(ie(418));for(;e;)F_(t,e),e=Ar(e.nextSibling)}if(dg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Tn=Ar(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Tn=null}}else Tn=bn?Ar(t.stateNode.nextSibling):null;return!0}function O_(){for(var t=Tn;t;)t=Ar(t.nextSibling)}function bo(){Tn=bn=null,pt=!1}function xp(t){Jn===null?Jn=[t]:Jn.push(t)}var _1=Qi.ReactCurrentBatchConfig;function Qo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function wl(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function fg(t){var e=t._init;return e(t._payload)}function k_(t){function e(u,v){if(t){var x=u.deletions;x===null?(u.deletions=[v],u.flags|=16):x.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=Dr(u,v),u.index=0,u.sibling=null,u}function s(u,v,x){return u.index=x,t?(x=u.alternate,x!==null?(x=x.index,x<v?(u.flags|=2,v):x):(u.flags|=2,v)):(u.flags|=1048576,v)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,v,x,S){return v===null||v.tag!==6?(v=dd(x,u.mode,S),v.return=u,v):(v=r(v,x),v.return=u,v)}function l(u,v,x,S){var C=x.type;return C===Xs?d(u,v,x.props.children,S,x.key):v!==null&&(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ur&&fg(C)===v.type)?(S=r(v,x.props),S.ref=Qo(u,v,x),S.return=u,S):(S=Ec(x.type,x.key,x.props,null,u.mode,S),S.ref=Qo(u,v,x),S.return=u,S)}function c(u,v,x,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=fd(x,u.mode,S),v.return=u,v):(v=r(v,x.children||[]),v.return=u,v)}function d(u,v,x,S,C){return v===null||v.tag!==7?(v=hs(x,u.mode,S,C),v.return=u,v):(v=r(v,x),v.return=u,v)}function h(u,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=dd(""+v,u.mode,x),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case hl:return x=Ec(v.type,v.key,v.props,null,u.mode,x),x.ref=Qo(u,null,v),x.return=u,x;case js:return v=fd(v,u.mode,x),v.return=u,v;case ur:var S=v._init;return h(u,S(v._payload),x)}if(da(v)||Xo(v))return v=hs(v,u.mode,x,null),v.return=u,v;wl(u,v)}return null}function f(u,v,x,S){var C=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return C!==null?null:a(u,v,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case hl:return x.key===C?l(u,v,x,S):null;case js:return x.key===C?c(u,v,x,S):null;case ur:return C=x._init,f(u,v,C(x._payload),S)}if(da(x)||Xo(x))return C!==null?null:d(u,v,x,S,null);wl(u,x)}return null}function m(u,v,x,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(x)||null,a(v,u,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case hl:return u=u.get(S.key===null?x:S.key)||null,l(v,u,S,C);case js:return u=u.get(S.key===null?x:S.key)||null,c(v,u,S,C);case ur:var A=S._init;return m(u,v,x,A(S._payload),C)}if(da(S)||Xo(S))return u=u.get(x)||null,d(v,u,S,C,null);wl(v,S)}return null}function _(u,v,x,S){for(var C=null,A=null,b=v,P=v=0,T=null;b!==null&&P<x.length;P++){b.index>P?(T=b,b=null):T=b.sibling;var E=f(u,b,x[P],S);if(E===null){b===null&&(b=T);break}t&&b&&E.alternate===null&&e(u,b),v=s(E,v,P),A===null?C=E:A.sibling=E,A=E,b=T}if(P===x.length)return n(u,b),pt&&Qr(u,P),C;if(b===null){for(;P<x.length;P++)b=h(u,x[P],S),b!==null&&(v=s(b,v,P),A===null?C=b:A.sibling=b,A=b);return pt&&Qr(u,P),C}for(b=i(u,b);P<x.length;P++)T=m(b,u,P,x[P],S),T!==null&&(t&&T.alternate!==null&&b.delete(T.key===null?P:T.key),v=s(T,v,P),A===null?C=T:A.sibling=T,A=T);return t&&b.forEach(function(D){return e(u,D)}),pt&&Qr(u,P),C}function g(u,v,x,S){var C=Xo(x);if(typeof C!="function")throw Error(ie(150));if(x=C.call(x),x==null)throw Error(ie(151));for(var A=C=null,b=v,P=v=0,T=null,E=x.next();b!==null&&!E.done;P++,E=x.next()){b.index>P?(T=b,b=null):T=b.sibling;var D=f(u,b,E.value,S);if(D===null){b===null&&(b=T);break}t&&b&&D.alternate===null&&e(u,b),v=s(D,v,P),A===null?C=D:A.sibling=D,A=D,b=T}if(E.done)return n(u,b),pt&&Qr(u,P),C;if(b===null){for(;!E.done;P++,E=x.next())E=h(u,E.value,S),E!==null&&(v=s(E,v,P),A===null?C=E:A.sibling=E,A=E);return pt&&Qr(u,P),C}for(b=i(u,b);!E.done;P++,E=x.next())E=m(b,u,P,E.value,S),E!==null&&(t&&E.alternate!==null&&b.delete(E.key===null?P:E.key),v=s(E,v,P),A===null?C=E:A.sibling=E,A=E);return t&&b.forEach(function(k){return e(u,k)}),pt&&Qr(u,P),C}function p(u,v,x,S){if(typeof x=="object"&&x!==null&&x.type===Xs&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case hl:e:{for(var C=x.key,A=v;A!==null;){if(A.key===C){if(C=x.type,C===Xs){if(A.tag===7){n(u,A.sibling),v=r(A,x.props.children),v.return=u,u=v;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ur&&fg(C)===A.type){n(u,A.sibling),v=r(A,x.props),v.ref=Qo(u,A,x),v.return=u,u=v;break e}n(u,A);break}else e(u,A);A=A.sibling}x.type===Xs?(v=hs(x.props.children,u.mode,S,x.key),v.return=u,u=v):(S=Ec(x.type,x.key,x.props,null,u.mode,S),S.ref=Qo(u,v,x),S.return=u,u=S)}return o(u);case js:e:{for(A=x.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(u,v.sibling),v=r(v,x.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=fd(x,u.mode,S),v.return=u,u=v}return o(u);case ur:return A=x._init,p(u,v,A(x._payload),S)}if(da(x))return _(u,v,x,S);if(Xo(x))return g(u,v,x,S);wl(u,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,x),v.return=u,u=v):(n(u,v),v=dd(x,u.mode,S),v.return=u,u=v),o(u)):n(u,v)}return p}var Co=k_(!0),B_=k_(!1),$c=Vr(null),Yc=null,eo=null,yp=null;function Sp(){yp=eo=Yc=null}function Ep(t){var e=$c.current;ft($c),t._currentValue=e}function Ff(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function lo(t,e){Yc=t,yp=eo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(pn=!0),t.firstContext=null)}function Vn(t){var e=t._currentValue;if(yp!==t)if(t={context:t,memoizedValue:e,next:null},eo===null){if(Yc===null)throw Error(ie(308));eo=t,Yc.dependencies={lanes:0,firstContext:t}}else eo=eo.next=t;return e}var rs=null;function Mp(t){rs===null?rs=[t]:rs.push(t)}function z_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Mp(e)):(n.next=r.next,r.next=n),e.interleaved=n,qi(t,i)}function qi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var dr=!1;function wp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function V_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Vi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Rr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,qi(t,n)}return r=i.interleaved,r===null?(e.next=e,Mp(i)):(e.next=r.next,r.next=e),i.interleaved=e,qi(t,n)}function gc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,cp(t,n)}}function hg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Kc(t,e,n,i){var r=t.updateQueue;dr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,d=c=l=null,a=s;do{var f=a.lane,m=a.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,g=a;switch(f=e,m=n,g.tag){case 1:if(_=g.payload,typeof _=="function"){h=_.call(m,h,f);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=g.payload,f=typeof _=="function"?_.call(m,h,f):_,f==null)break e;h=_t({},h,f);break e;case 2:dr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=m,l=h):d=d.next=m,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);vs|=o,t.lanes=o,t.memoizedState=h}}function pg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var el={},Si=Vr(el),Fa=Vr(el),Oa=Vr(el);function ss(t){if(t===el)throw Error(ie(174));return t}function Tp(t,e){switch(lt(Oa,e),lt(Fa,t),lt(Si,el),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:gf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=gf(e,t)}ft(Si),lt(Si,e)}function Ao(){ft(Si),ft(Fa),ft(Oa)}function H_(t){ss(Oa.current);var e=ss(Si.current),n=gf(e,t.type);e!==n&&(lt(Fa,t),lt(Si,n))}function bp(t){Fa.current===t&&(ft(Si),ft(Fa))}var gt=Vr(0);function Qc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var sd=[];function Cp(){for(var t=0;t<sd.length;t++)sd[t]._workInProgressVersionPrimary=null;sd.length=0}var vc=Qi.ReactCurrentDispatcher,od=Qi.ReactCurrentBatchConfig,gs=0,vt=null,Lt=null,kt=null,Zc=!1,ya=!1,ka=0,x1=0;function $t(){throw Error(ie(321))}function Ap(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!si(t[n],e[n]))return!1;return!0}function Rp(t,e,n,i,r,s){if(gs=s,vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,vc.current=t===null||t.memoizedState===null?M1:w1,t=n(i,r),ya){s=0;do{if(ya=!1,ka=0,25<=s)throw Error(ie(301));s+=1,kt=Lt=null,e.updateQueue=null,vc.current=T1,t=n(i,r)}while(ya)}if(vc.current=Jc,e=Lt!==null&&Lt.next!==null,gs=0,kt=Lt=vt=null,Zc=!1,e)throw Error(ie(300));return t}function Pp(){var t=ka!==0;return ka=0,t}function fi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?vt.memoizedState=kt=t:kt=kt.next=t,kt}function Hn(){if(Lt===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=Lt.next;var e=kt===null?vt.memoizedState:kt.next;if(e!==null)kt=e,Lt=t;else{if(t===null)throw Error(ie(310));Lt=t,t={memoizedState:Lt.memoizedState,baseState:Lt.baseState,baseQueue:Lt.baseQueue,queue:Lt.queue,next:null},kt===null?vt.memoizedState=kt=t:kt=kt.next=t}return kt}function Ba(t,e){return typeof e=="function"?e(t):e}function ad(t){var e=Hn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=Lt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((gs&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,vt.lanes|=d,vs|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,si(i,e.memoizedState)||(pn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,vt.lanes|=s,vs|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ld(t){var e=Hn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);si(s,e.memoizedState)||(pn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function G_(){}function W_(t,e){var n=vt,i=Hn(),r=e(),s=!si(i.memoizedState,r);if(s&&(i.memoizedState=r,pn=!0),i=i.queue,Np(q_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||kt!==null&&kt.memoizedState.tag&1){if(n.flags|=2048,za(9,X_.bind(null,n,i,r,e),void 0,null),zt===null)throw Error(ie(349));gs&30||j_(n,e,r)}return r}function j_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function X_(t,e,n,i){e.value=n,e.getSnapshot=i,$_(e)&&Y_(t)}function q_(t,e,n){return n(function(){$_(e)&&Y_(t)})}function $_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!si(t,n)}catch{return!0}}function Y_(t){var e=qi(t,1);e!==null&&ii(e,t,1,-1)}function mg(t){var e=fi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ba,lastRenderedState:t},e.queue=t,t=t.dispatch=E1.bind(null,vt,t),[e.memoizedState,t]}function za(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function K_(){return Hn().memoizedState}function _c(t,e,n,i){var r=fi();vt.flags|=t,r.memoizedState=za(1|e,n,void 0,i===void 0?null:i)}function xu(t,e,n,i){var r=Hn();i=i===void 0?null:i;var s=void 0;if(Lt!==null){var o=Lt.memoizedState;if(s=o.destroy,i!==null&&Ap(i,o.deps)){r.memoizedState=za(e,n,s,i);return}}vt.flags|=t,r.memoizedState=za(1|e,n,s,i)}function gg(t,e){return _c(8390656,8,t,e)}function Np(t,e){return xu(2048,8,t,e)}function Q_(t,e){return xu(4,2,t,e)}function Z_(t,e){return xu(4,4,t,e)}function J_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ex(t,e,n){return n=n!=null?n.concat([t]):null,xu(4,4,J_.bind(null,e,t),n)}function Dp(){}function tx(t,e){var n=Hn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ap(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function nx(t,e){var n=Hn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ap(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function ix(t,e,n){return gs&21?(si(n,e)||(n=l_(),vt.lanes|=n,vs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,pn=!0),t.memoizedState=n)}function y1(t,e){var n=rt;rt=n!==0&&4>n?n:4,t(!0);var i=od.transition;od.transition={};try{t(!1),e()}finally{rt=n,od.transition=i}}function rx(){return Hn().memoizedState}function S1(t,e,n){var i=Nr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},sx(t))ox(e,n);else if(n=z_(t,e,n,i),n!==null){var r=on();ii(n,t,i,r),ax(n,e,i)}}function E1(t,e,n){var i=Nr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(sx(t))ox(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,si(a,o)){var l=e.interleaved;l===null?(r.next=r,Mp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=z_(t,e,r,i),n!==null&&(r=on(),ii(n,t,i,r),ax(n,e,i))}}function sx(t){var e=t.alternate;return t===vt||e!==null&&e===vt}function ox(t,e){ya=Zc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ax(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,cp(t,n)}}var Jc={readContext:Vn,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},M1={readContext:Vn,useCallback:function(t,e){return fi().memoizedState=[t,e===void 0?null:e],t},useContext:Vn,useEffect:gg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,_c(4194308,4,J_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return _c(4194308,4,t,e)},useInsertionEffect:function(t,e){return _c(4,2,t,e)},useMemo:function(t,e){var n=fi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=fi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=S1.bind(null,vt,t),[i.memoizedState,t]},useRef:function(t){var e=fi();return t={current:t},e.memoizedState=t},useState:mg,useDebugValue:Dp,useDeferredValue:function(t){return fi().memoizedState=t},useTransition:function(){var t=mg(!1),e=t[0];return t=y1.bind(null,t[1]),fi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=vt,r=fi();if(pt){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),zt===null)throw Error(ie(349));gs&30||j_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,gg(q_.bind(null,i,s,t),[t]),i.flags|=2048,za(9,X_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=fi(),e=zt.identifierPrefix;if(pt){var n=Oi,i=Fi;n=(i&~(1<<32-ni(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ka++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=x1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},w1={readContext:Vn,useCallback:tx,useContext:Vn,useEffect:Np,useImperativeHandle:ex,useInsertionEffect:Q_,useLayoutEffect:Z_,useMemo:nx,useReducer:ad,useRef:K_,useState:function(){return ad(Ba)},useDebugValue:Dp,useDeferredValue:function(t){var e=Hn();return ix(e,Lt.memoizedState,t)},useTransition:function(){var t=ad(Ba)[0],e=Hn().memoizedState;return[t,e]},useMutableSource:G_,useSyncExternalStore:W_,useId:rx,unstable_isNewReconciler:!1},T1={readContext:Vn,useCallback:tx,useContext:Vn,useEffect:Np,useImperativeHandle:ex,useInsertionEffect:Q_,useLayoutEffect:Z_,useMemo:nx,useReducer:ld,useRef:K_,useState:function(){return ld(Ba)},useDebugValue:Dp,useDeferredValue:function(t){var e=Hn();return Lt===null?e.memoizedState=t:ix(e,Lt.memoizedState,t)},useTransition:function(){var t=ld(Ba)[0],e=Hn().memoizedState;return[t,e]},useMutableSource:G_,useSyncExternalStore:W_,useId:rx,unstable_isNewReconciler:!1};function Yn(t,e){if(t&&t.defaultProps){e=_t({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Of(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:_t({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var yu={isMounted:function(t){return(t=t._reactInternals)?ws(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=on(),r=Nr(t),s=Vi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Rr(t,s,r),e!==null&&(ii(e,t,r,i),gc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=on(),r=Nr(t),s=Vi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Rr(t,s,r),e!==null&&(ii(e,t,r,i),gc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=on(),i=Nr(t),r=Vi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Rr(t,r,i),e!==null&&(ii(e,t,i,n),gc(e,t,i))}};function vg(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Da(n,i)||!Da(r,s):!0}function lx(t,e,n){var i=!1,r=Or,s=e.contextType;return typeof s=="object"&&s!==null?s=Vn(s):(r=gn(e)?ps:en.current,i=e.contextTypes,s=(i=i!=null)?To(t,r):Or),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=yu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function _g(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&yu.enqueueReplaceState(e,e.state,null)}function kf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},wp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Vn(s):(s=gn(e)?ps:en.current,r.context=To(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Of(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&yu.enqueueReplaceState(r,r.state,null),Kc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ro(t,e){try{var n="",i=e;do n+=JE(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function cd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Bf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var b1=typeof WeakMap=="function"?WeakMap:Map;function cx(t,e,n){n=Vi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){tu||(tu=!0,Yf=i),Bf(t,e)},n}function ux(t,e,n){n=Vi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Bf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Bf(t,e),typeof i!="function"&&(Pr===null?Pr=new Set([this]):Pr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function xg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new b1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=z1.bind(null,t,e,n),e.then(t,t))}function yg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Sg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Vi(-1,1),e.tag=2,Rr(n,e,1))),n.lanes|=1),t)}var C1=Qi.ReactCurrentOwner,pn=!1;function sn(t,e,n,i){e.child=t===null?B_(e,null,n,i):Co(e,t.child,n,i)}function Eg(t,e,n,i,r){n=n.render;var s=e.ref;return lo(e,r),i=Rp(t,e,n,i,s,r),n=Pp(),t!==null&&!pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,$i(t,e,r)):(pt&&n&&vp(e),e.flags|=1,sn(t,e,i,r),e.child)}function Mg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!zp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,dx(t,e,s,i,r)):(t=Ec(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Da,n(o,i)&&t.ref===e.ref)return $i(t,e,r)}return e.flags|=1,t=Dr(s,i),t.ref=e.ref,t.return=e,e.child=t}function dx(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Da(s,i)&&t.ref===e.ref)if(pn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(pn=!0);else return e.lanes=t.lanes,$i(t,e,r)}return zf(t,e,n,i,r)}function fx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},lt(no,wn),wn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,lt(no,wn),wn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,lt(no,wn),wn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,lt(no,wn),wn|=i;return sn(t,e,r,n),e.child}function hx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function zf(t,e,n,i,r){var s=gn(n)?ps:en.current;return s=To(e,s),lo(e,r),n=Rp(t,e,n,i,s,r),i=Pp(),t!==null&&!pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,$i(t,e,r)):(pt&&i&&vp(e),e.flags|=1,sn(t,e,n,r),e.child)}function wg(t,e,n,i,r){if(gn(n)){var s=!0;jc(e)}else s=!1;if(lo(e,r),e.stateNode===null)xc(t,e),lx(e,n,i),kf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Vn(c):(c=gn(n)?ps:en.current,c=To(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&_g(e,o,i,c),dr=!1;var f=e.memoizedState;o.state=f,Kc(e,i,o,r),l=e.memoizedState,a!==i||f!==l||mn.current||dr?(typeof d=="function"&&(Of(e,n,d,i),l=e.memoizedState),(a=dr||vg(e,n,a,i,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,V_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Yn(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Vn(l):(l=gn(n)?ps:en.current,l=To(e,l));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&_g(e,o,i,l),dr=!1,f=e.memoizedState,o.state=f,Kc(e,i,o,r);var _=e.memoizedState;a!==h||f!==_||mn.current||dr?(typeof m=="function"&&(Of(e,n,m,i),_=e.memoizedState),(c=dr||vg(e,n,c,i,f,_,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Vf(t,e,n,i,s,r)}function Vf(t,e,n,i,r,s){hx(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&cg(e,n,!1),$i(t,e,s);i=e.stateNode,C1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Co(e,t.child,null,s),e.child=Co(e,null,a,s)):sn(t,e,a,s),e.memoizedState=i.state,r&&cg(e,n,!0),e.child}function px(t){var e=t.stateNode;e.pendingContext?lg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&lg(t,e.context,!1),Tp(t,e.containerInfo)}function Tg(t,e,n,i,r){return bo(),xp(r),e.flags|=256,sn(t,e,n,i),e.child}var Hf={dehydrated:null,treeContext:null,retryLane:0};function Gf(t){return{baseLanes:t,cachePool:null,transitions:null}}function mx(t,e,n){var i=e.pendingProps,r=gt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),lt(gt,r&1),t===null)return Uf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Mu(o,i,0,null),t=hs(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Gf(n),e.memoizedState=Hf,t):Lp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return A1(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Dr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Dr(a,s):(s=hs(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Gf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Hf,i}return s=t.child,t=s.sibling,i=Dr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Lp(t,e){return e=Mu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Tl(t,e,n,i){return i!==null&&xp(i),Co(e,t.child,null,n),t=Lp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function A1(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=cd(Error(ie(422))),Tl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Mu({mode:"visible",children:i.children},r,0,null),s=hs(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Co(e,t.child,null,o),e.child.memoizedState=Gf(o),e.memoizedState=Hf,s);if(!(e.mode&1))return Tl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ie(419)),i=cd(s,i,void 0),Tl(t,e,o,i)}if(a=(o&t.childLanes)!==0,pn||a){if(i=zt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,qi(t,r),ii(i,t,r,-1))}return Bp(),i=cd(Error(ie(421))),Tl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=V1.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Tn=Ar(r.nextSibling),bn=e,pt=!0,Jn=null,t!==null&&(Fn[On++]=Fi,Fn[On++]=Oi,Fn[On++]=ms,Fi=t.id,Oi=t.overflow,ms=e),e=Lp(e,i.children),e.flags|=4096,e)}function bg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ff(t.return,e,n)}function ud(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function gx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(sn(t,e,i.children,n),i=gt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&bg(t,n,e);else if(t.tag===19)bg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(lt(gt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Qc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),ud(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Qc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}ud(e,!0,n,null,s);break;case"together":ud(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function xc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function $i(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),vs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=Dr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Dr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function R1(t,e,n){switch(e.tag){case 3:px(e),bo();break;case 5:H_(e);break;case 1:gn(e.type)&&jc(e);break;case 4:Tp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;lt($c,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(lt(gt,gt.current&1),e.flags|=128,null):n&e.child.childLanes?mx(t,e,n):(lt(gt,gt.current&1),t=$i(t,e,n),t!==null?t.sibling:null);lt(gt,gt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return gx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),lt(gt,gt.current),i)break;return null;case 22:case 23:return e.lanes=0,fx(t,e,n)}return $i(t,e,n)}var vx,Wf,_x,xx;vx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wf=function(){};_x=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ss(Si.current);var s=null;switch(n){case"input":r=ff(t,r),i=ff(t,i),s=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),s=[];break;case"textarea":r=mf(t,r),i=mf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Gc)}vf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ta.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ta.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&dt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};xx=function(t,e,n,i){n!==i&&(e.flags|=4)};function Zo(t,e){if(!pt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function P1(t,e,n){var i=e.pendingProps;switch(_p(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(e),null;case 1:return gn(e.type)&&Wc(),Yt(e),null;case 3:return i=e.stateNode,Ao(),ft(mn),ft(en),Cp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ml(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Jn!==null&&(Zf(Jn),Jn=null))),Wf(t,e),Yt(e),null;case 5:bp(e);var r=ss(Oa.current);if(n=e.type,t!==null&&e.stateNode!=null)_x(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return Yt(e),null}if(t=ss(Si.current),Ml(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[vi]=e,i[Ua]=s,t=(e.mode&1)!==0,n){case"dialog":dt("cancel",i),dt("close",i);break;case"iframe":case"object":case"embed":dt("load",i);break;case"video":case"audio":for(r=0;r<ha.length;r++)dt(ha[r],i);break;case"source":dt("error",i);break;case"img":case"image":case"link":dt("error",i),dt("load",i);break;case"details":dt("toggle",i);break;case"input":Um(i,s),dt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},dt("invalid",i);break;case"textarea":Om(i,s),dt("invalid",i)}vf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&El(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&El(i.textContent,a,t),r=["children",""+a]):Ta.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&dt("scroll",i)}switch(n){case"input":pl(i),Fm(i,s,!0);break;case"textarea":pl(i),km(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Gc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=q0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[vi]=e,t[Ua]=i,vx(t,e,!1,!1),e.stateNode=t;e:{switch(o=_f(n,i),n){case"dialog":dt("cancel",t),dt("close",t),r=i;break;case"iframe":case"object":case"embed":dt("load",t),r=i;break;case"video":case"audio":for(r=0;r<ha.length;r++)dt(ha[r],t);r=i;break;case"source":dt("error",t),r=i;break;case"img":case"image":case"link":dt("error",t),dt("load",t),r=i;break;case"details":dt("toggle",t),r=i;break;case"input":Um(t,i),r=ff(t,i),dt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),dt("invalid",t);break;case"textarea":Om(t,i),r=mf(t,i),dt("invalid",t);break;default:r=i}vf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?K0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&$0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ba(t,l):typeof l=="number"&&ba(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ta.hasOwnProperty(s)?l!=null&&s==="onScroll"&&dt("scroll",t):l!=null&&ip(t,s,l,o))}switch(n){case"input":pl(t),Fm(t,i,!1);break;case"textarea":pl(t),km(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Fr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ro(t,!!i.multiple,s,!1):i.defaultValue!=null&&ro(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Gc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Yt(e),null;case 6:if(t&&e.stateNode!=null)xx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=ss(Oa.current),ss(Si.current),Ml(e)){if(i=e.stateNode,n=e.memoizedProps,i[vi]=e,(s=i.nodeValue!==n)&&(t=bn,t!==null))switch(t.tag){case 3:El(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&El(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[vi]=e,e.stateNode=i}return Yt(e),null;case 13:if(ft(gt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(pt&&Tn!==null&&e.mode&1&&!(e.flags&128))O_(),bo(),e.flags|=98560,s=!1;else if(s=Ml(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[vi]=e}else bo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Yt(e),s=!1}else Jn!==null&&(Zf(Jn),Jn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||gt.current&1?It===0&&(It=3):Bp())),e.updateQueue!==null&&(e.flags|=4),Yt(e),null);case 4:return Ao(),Wf(t,e),t===null&&La(e.stateNode.containerInfo),Yt(e),null;case 10:return Ep(e.type._context),Yt(e),null;case 17:return gn(e.type)&&Wc(),Yt(e),null;case 19:if(ft(gt),s=e.memoizedState,s===null)return Yt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Zo(s,!1);else{if(It!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Qc(t),o!==null){for(e.flags|=128,Zo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return lt(gt,gt.current&1|2),e.child}t=t.sibling}s.tail!==null&&At()>Po&&(e.flags|=128,i=!0,Zo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Qc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Zo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!pt)return Yt(e),null}else 2*At()-s.renderingStartTime>Po&&n!==1073741824&&(e.flags|=128,i=!0,Zo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=At(),e.sibling=null,n=gt.current,lt(gt,i?n&1|2:n&1),e):(Yt(e),null);case 22:case 23:return kp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?wn&1073741824&&(Yt(e),e.subtreeFlags&6&&(e.flags|=8192)):Yt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function N1(t,e){switch(_p(e),e.tag){case 1:return gn(e.type)&&Wc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ao(),ft(mn),ft(en),Cp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return bp(e),null;case 13:if(ft(gt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));bo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ft(gt),null;case 4:return Ao(),null;case 10:return Ep(e.type._context),null;case 22:case 23:return kp(),null;case 24:return null;default:return null}}var bl=!1,Jt=!1,D1=typeof WeakSet=="function"?WeakSet:Set,ge=null;function to(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Et(t,e,i)}else n.current=null}function jf(t,e,n){try{n()}catch(i){Et(t,e,i)}}var Cg=!1;function L1(t,e){if(Af=zc,t=w_(),gp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,h=t,f=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)f=h,h=m;for(;;){if(h===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++d===i&&(l=o),(m=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rf={focusedElem:t,selectionRange:n},zc=!1,ge=e;ge!==null;)if(e=ge,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ge=t;else for(;ge!==null;){e=ge;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var g=_.memoizedProps,p=_.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?g:Yn(e.type,g),p);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(S){Et(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,ge=t;break}ge=e.return}return _=Cg,Cg=!1,_}function Sa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&jf(e,n,s)}r=r.next}while(r!==i)}}function Su(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Xf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function yx(t){var e=t.alternate;e!==null&&(t.alternate=null,yx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[vi],delete e[Ua],delete e[Df],delete e[m1],delete e[g1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Sx(t){return t.tag===5||t.tag===3||t.tag===4}function Ag(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Sx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Gc));else if(i!==4&&(t=t.child,t!==null))for(qf(t,e,n),t=t.sibling;t!==null;)qf(t,e,n),t=t.sibling}function $f(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for($f(t,e,n),t=t.sibling;t!==null;)$f(t,e,n),t=t.sibling}var Ht=null,Zn=!1;function Zi(t,e,n){for(n=n.child;n!==null;)Ex(t,e,n),n=n.sibling}function Ex(t,e,n){if(yi&&typeof yi.onCommitFiberUnmount=="function")try{yi.onCommitFiberUnmount(hu,n)}catch{}switch(n.tag){case 5:Jt||to(n,e);case 6:var i=Ht,r=Zn;Ht=null,Zi(t,e,n),Ht=i,Zn=r,Ht!==null&&(Zn?(t=Ht,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ht.removeChild(n.stateNode));break;case 18:Ht!==null&&(Zn?(t=Ht,n=n.stateNode,t.nodeType===8?id(t.parentNode,n):t.nodeType===1&&id(t,n),Pa(t)):id(Ht,n.stateNode));break;case 4:i=Ht,r=Zn,Ht=n.stateNode.containerInfo,Zn=!0,Zi(t,e,n),Ht=i,Zn=r;break;case 0:case 11:case 14:case 15:if(!Jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&jf(n,e,o),r=r.next}while(r!==i)}Zi(t,e,n);break;case 1:if(!Jt&&(to(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Et(n,e,a)}Zi(t,e,n);break;case 21:Zi(t,e,n);break;case 22:n.mode&1?(Jt=(i=Jt)||n.memoizedState!==null,Zi(t,e,n),Jt=i):Zi(t,e,n);break;default:Zi(t,e,n)}}function Rg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new D1),e.forEach(function(i){var r=H1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function jn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ht=a.stateNode,Zn=!1;break e;case 3:Ht=a.stateNode.containerInfo,Zn=!0;break e;case 4:Ht=a.stateNode.containerInfo,Zn=!0;break e}a=a.return}if(Ht===null)throw Error(ie(160));Ex(s,o,r),Ht=null,Zn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Et(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Mx(e,t),e=e.sibling}function Mx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(jn(e,t),di(t),i&4){try{Sa(3,t,t.return),Su(3,t)}catch(g){Et(t,t.return,g)}try{Sa(5,t,t.return)}catch(g){Et(t,t.return,g)}}break;case 1:jn(e,t),di(t),i&512&&n!==null&&to(n,n.return);break;case 5:if(jn(e,t),di(t),i&512&&n!==null&&to(n,n.return),t.flags&32){var r=t.stateNode;try{ba(r,"")}catch(g){Et(t,t.return,g)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&j0(r,s),_f(a,o);var c=_f(a,s);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?K0(r,h):d==="dangerouslySetInnerHTML"?$0(r,h):d==="children"?ba(r,h):ip(r,d,h,c)}switch(a){case"input":hf(r,s);break;case"textarea":X0(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?ro(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?ro(r,!!s.multiple,s.defaultValue,!0):ro(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ua]=s}catch(g){Et(t,t.return,g)}}break;case 6:if(jn(e,t),di(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(g){Et(t,t.return,g)}}break;case 3:if(jn(e,t),di(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Pa(e.containerInfo)}catch(g){Et(t,t.return,g)}break;case 4:jn(e,t),di(t);break;case 13:jn(e,t),di(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Fp=At())),i&4&&Rg(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Jt=(c=Jt)||d,jn(e,t),Jt=c):jn(e,t),di(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(ge=t,d=t.child;d!==null;){for(h=ge=d;ge!==null;){switch(f=ge,m=f.child,f.tag){case 0:case 11:case 14:case 15:Sa(4,f,f.return);break;case 1:to(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(g){Et(i,n,g)}}break;case 5:to(f,f.return);break;case 22:if(f.memoizedState!==null){Ng(h);continue}}m!==null?(m.return=f,ge=m):Ng(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Y0("display",o))}catch(g){Et(t,t.return,g)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(g){Et(t,t.return,g)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:jn(e,t),di(t),i&4&&Rg(t);break;case 21:break;default:jn(e,t),di(t)}}function di(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Sx(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ba(r,""),i.flags&=-33);var s=Ag(t);$f(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Ag(t);qf(t,a,o);break;default:throw Error(ie(161))}}catch(l){Et(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function I1(t,e,n){ge=t,wx(t)}function wx(t,e,n){for(var i=(t.mode&1)!==0;ge!==null;){var r=ge,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||bl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Jt;a=bl;var c=Jt;if(bl=o,(Jt=l)&&!c)for(ge=r;ge!==null;)o=ge,l=o.child,o.tag===22&&o.memoizedState!==null?Dg(r):l!==null?(l.return=o,ge=l):Dg(r);for(;s!==null;)ge=s,wx(s),s=s.sibling;ge=r,bl=a,Jt=c}Pg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ge=s):Pg(t)}}function Pg(t){for(;ge!==null;){var e=ge;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Jt||Su(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Yn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&pg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}pg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&Pa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}Jt||e.flags&512&&Xf(e)}catch(f){Et(e,e.return,f)}}if(e===t){ge=null;break}if(n=e.sibling,n!==null){n.return=e.return,ge=n;break}ge=e.return}}function Ng(t){for(;ge!==null;){var e=ge;if(e===t){ge=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ge=n;break}ge=e.return}}function Dg(t){for(;ge!==null;){var e=ge;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Su(4,e)}catch(l){Et(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Et(e,r,l)}}var s=e.return;try{Xf(e)}catch(l){Et(e,s,l)}break;case 5:var o=e.return;try{Xf(e)}catch(l){Et(e,o,l)}}}catch(l){Et(e,e.return,l)}if(e===t){ge=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ge=a;break}ge=e.return}}var U1=Math.ceil,eu=Qi.ReactCurrentDispatcher,Ip=Qi.ReactCurrentOwner,zn=Qi.ReactCurrentBatchConfig,Ke=0,zt=null,Dt=null,Wt=0,wn=0,no=Vr(0),It=0,Va=null,vs=0,Eu=0,Up=0,Ea=null,hn=null,Fp=0,Po=1/0,Di=null,tu=!1,Yf=null,Pr=null,Cl=!1,Mr=null,nu=0,Ma=0,Kf=null,yc=-1,Sc=0;function on(){return Ke&6?At():yc!==-1?yc:yc=At()}function Nr(t){return t.mode&1?Ke&2&&Wt!==0?Wt&-Wt:_1.transition!==null?(Sc===0&&(Sc=l_()),Sc):(t=rt,t!==0||(t=window.event,t=t===void 0?16:m_(t.type)),t):1}function ii(t,e,n,i){if(50<Ma)throw Ma=0,Kf=null,Error(ie(185));Qa(t,n,i),(!(Ke&2)||t!==zt)&&(t===zt&&(!(Ke&2)&&(Eu|=n),It===4&&hr(t,Wt)),vn(t,i),n===1&&Ke===0&&!(e.mode&1)&&(Po=At()+500,_u&&Hr()))}function vn(t,e){var n=t.callbackNode;_M(t,e);var i=Bc(t,t===zt?Wt:0);if(i===0)n!==null&&Vm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Vm(n),e===1)t.tag===0?v1(Lg.bind(null,t)):I_(Lg.bind(null,t)),h1(function(){!(Ke&6)&&Hr()}),n=null;else{switch(c_(i)){case 1:n=lp;break;case 4:n=o_;break;case 16:n=kc;break;case 536870912:n=a_;break;default:n=kc}n=Dx(n,Tx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Tx(t,e){if(yc=-1,Sc=0,Ke&6)throw Error(ie(327));var n=t.callbackNode;if(co()&&t.callbackNode!==n)return null;var i=Bc(t,t===zt?Wt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=iu(t,i);else{e=i;var r=Ke;Ke|=2;var s=Cx();(zt!==t||Wt!==e)&&(Di=null,Po=At()+500,fs(t,e));do try{k1();break}catch(a){bx(t,a)}while(!0);Sp(),eu.current=s,Ke=r,Dt!==null?e=0:(zt=null,Wt=0,e=It)}if(e!==0){if(e===2&&(r=Mf(t),r!==0&&(i=r,e=Qf(t,r))),e===1)throw n=Va,fs(t,0),hr(t,i),vn(t,At()),n;if(e===6)hr(t,i);else{if(r=t.current.alternate,!(i&30)&&!F1(r)&&(e=iu(t,i),e===2&&(s=Mf(t),s!==0&&(i=s,e=Qf(t,s))),e===1))throw n=Va,fs(t,0),hr(t,i),vn(t,At()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:Zr(t,hn,Di);break;case 3:if(hr(t,i),(i&130023424)===i&&(e=Fp+500-At(),10<e)){if(Bc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){on(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Nf(Zr.bind(null,t,hn,Di),e);break}Zr(t,hn,Di);break;case 4:if(hr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ni(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=At()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*U1(i/1960))-i,10<i){t.timeoutHandle=Nf(Zr.bind(null,t,hn,Di),i);break}Zr(t,hn,Di);break;case 5:Zr(t,hn,Di);break;default:throw Error(ie(329))}}}return vn(t,At()),t.callbackNode===n?Tx.bind(null,t):null}function Qf(t,e){var n=Ea;return t.current.memoizedState.isDehydrated&&(fs(t,e).flags|=256),t=iu(t,e),t!==2&&(e=hn,hn=n,e!==null&&Zf(e)),t}function Zf(t){hn===null?hn=t:hn.push.apply(hn,t)}function F1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!si(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function hr(t,e){for(e&=~Up,e&=~Eu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ni(e),i=1<<n;t[n]=-1,e&=~i}}function Lg(t){if(Ke&6)throw Error(ie(327));co();var e=Bc(t,0);if(!(e&1))return vn(t,At()),null;var n=iu(t,e);if(t.tag!==0&&n===2){var i=Mf(t);i!==0&&(e=i,n=Qf(t,i))}if(n===1)throw n=Va,fs(t,0),hr(t,e),vn(t,At()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Zr(t,hn,Di),vn(t,At()),null}function Op(t,e){var n=Ke;Ke|=1;try{return t(e)}finally{Ke=n,Ke===0&&(Po=At()+500,_u&&Hr())}}function _s(t){Mr!==null&&Mr.tag===0&&!(Ke&6)&&co();var e=Ke;Ke|=1;var n=zn.transition,i=rt;try{if(zn.transition=null,rt=1,t)return t()}finally{rt=i,zn.transition=n,Ke=e,!(Ke&6)&&Hr()}}function kp(){wn=no.current,ft(no)}function fs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,f1(n)),Dt!==null)for(n=Dt.return;n!==null;){var i=n;switch(_p(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Wc();break;case 3:Ao(),ft(mn),ft(en),Cp();break;case 5:bp(i);break;case 4:Ao();break;case 13:ft(gt);break;case 19:ft(gt);break;case 10:Ep(i.type._context);break;case 22:case 23:kp()}n=n.return}if(zt=t,Dt=t=Dr(t.current,null),Wt=wn=e,It=0,Va=null,Up=Eu=vs=0,hn=Ea=null,rs!==null){for(e=0;e<rs.length;e++)if(n=rs[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}rs=null}return t}function bx(t,e){do{var n=Dt;try{if(Sp(),vc.current=Jc,Zc){for(var i=vt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Zc=!1}if(gs=0,kt=Lt=vt=null,ya=!1,ka=0,Ip.current=null,n===null||n.return===null){It=1,Va=e,Dt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Wt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=yg(o);if(m!==null){m.flags&=-257,Sg(m,o,a,s,e),m.mode&1&&xg(s,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var g=new Set;g.add(l),e.updateQueue=g}else _.add(l);break e}else{if(!(e&1)){xg(s,c,e),Bp();break e}l=Error(ie(426))}}else if(pt&&a.mode&1){var p=yg(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Sg(p,o,a,s,e),xp(Ro(l,a));break e}}s=l=Ro(l,a),It!==4&&(It=2),Ea===null?Ea=[s]:Ea.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=cx(s,l,e);hg(s,u);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Pr===null||!Pr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=ux(s,a,e);hg(s,S);break e}}s=s.return}while(s!==null)}Rx(n)}catch(C){e=C,Dt===n&&n!==null&&(Dt=n=n.return);continue}break}while(!0)}function Cx(){var t=eu.current;return eu.current=Jc,t===null?Jc:t}function Bp(){(It===0||It===3||It===2)&&(It=4),zt===null||!(vs&268435455)&&!(Eu&268435455)||hr(zt,Wt)}function iu(t,e){var n=Ke;Ke|=2;var i=Cx();(zt!==t||Wt!==e)&&(Di=null,fs(t,e));do try{O1();break}catch(r){bx(t,r)}while(!0);if(Sp(),Ke=n,eu.current=i,Dt!==null)throw Error(ie(261));return zt=null,Wt=0,It}function O1(){for(;Dt!==null;)Ax(Dt)}function k1(){for(;Dt!==null&&!cM();)Ax(Dt)}function Ax(t){var e=Nx(t.alternate,t,wn);t.memoizedProps=t.pendingProps,e===null?Rx(t):Dt=e,Ip.current=null}function Rx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=N1(n,e),n!==null){n.flags&=32767,Dt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{It=6,Dt=null;return}}else if(n=P1(n,e,wn),n!==null){Dt=n;return}if(e=e.sibling,e!==null){Dt=e;return}Dt=e=t}while(e!==null);It===0&&(It=5)}function Zr(t,e,n){var i=rt,r=zn.transition;try{zn.transition=null,rt=1,B1(t,e,n,i)}finally{zn.transition=r,rt=i}return null}function B1(t,e,n,i){do co();while(Mr!==null);if(Ke&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(xM(t,s),t===zt&&(Dt=zt=null,Wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Cl||(Cl=!0,Dx(kc,function(){return co(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=zn.transition,zn.transition=null;var o=rt;rt=1;var a=Ke;Ke|=4,Ip.current=null,L1(t,n),Mx(n,t),s1(Rf),zc=!!Af,Rf=Af=null,t.current=n,I1(n),uM(),Ke=a,rt=o,zn.transition=s}else t.current=n;if(Cl&&(Cl=!1,Mr=t,nu=r),s=t.pendingLanes,s===0&&(Pr=null),hM(n.stateNode),vn(t,At()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(tu)throw tu=!1,t=Yf,Yf=null,t;return nu&1&&t.tag!==0&&co(),s=t.pendingLanes,s&1?t===Kf?Ma++:(Ma=0,Kf=t):Ma=0,Hr(),null}function co(){if(Mr!==null){var t=c_(nu),e=zn.transition,n=rt;try{if(zn.transition=null,rt=16>t?16:t,Mr===null)var i=!1;else{if(t=Mr,Mr=null,nu=0,Ke&6)throw Error(ie(331));var r=Ke;for(Ke|=4,ge=t.current;ge!==null;){var s=ge,o=s.child;if(ge.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ge=c;ge!==null;){var d=ge;switch(d.tag){case 0:case 11:case 15:Sa(8,d,s)}var h=d.child;if(h!==null)h.return=d,ge=h;else for(;ge!==null;){d=ge;var f=d.sibling,m=d.return;if(yx(d),d===c){ge=null;break}if(f!==null){f.return=m,ge=f;break}ge=m}}}var _=s.alternate;if(_!==null){var g=_.child;if(g!==null){_.child=null;do{var p=g.sibling;g.sibling=null,g=p}while(g!==null)}}ge=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ge=o;else e:for(;ge!==null;){if(s=ge,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Sa(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,ge=u;break e}ge=s.return}}var v=t.current;for(ge=v;ge!==null;){o=ge;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,ge=x;else e:for(o=v;ge!==null;){if(a=ge,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Su(9,a)}}catch(C){Et(a,a.return,C)}if(a===o){ge=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,ge=S;break e}ge=a.return}}if(Ke=r,Hr(),yi&&typeof yi.onPostCommitFiberRoot=="function")try{yi.onPostCommitFiberRoot(hu,t)}catch{}i=!0}return i}finally{rt=n,zn.transition=e}}return!1}function Ig(t,e,n){e=Ro(n,e),e=cx(t,e,1),t=Rr(t,e,1),e=on(),t!==null&&(Qa(t,1,e),vn(t,e))}function Et(t,e,n){if(t.tag===3)Ig(t,t,n);else for(;e!==null;){if(e.tag===3){Ig(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Pr===null||!Pr.has(i))){t=Ro(n,t),t=ux(e,t,1),e=Rr(e,t,1),t=on(),e!==null&&(Qa(e,1,t),vn(e,t));break}}e=e.return}}function z1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=on(),t.pingedLanes|=t.suspendedLanes&n,zt===t&&(Wt&n)===n&&(It===4||It===3&&(Wt&130023424)===Wt&&500>At()-Fp?fs(t,0):Up|=n),vn(t,e)}function Px(t,e){e===0&&(t.mode&1?(e=vl,vl<<=1,!(vl&130023424)&&(vl=4194304)):e=1);var n=on();t=qi(t,e),t!==null&&(Qa(t,e,n),vn(t,n))}function V1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Px(t,n)}function H1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),Px(t,n)}var Nx;Nx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||mn.current)pn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return pn=!1,R1(t,e,n);pn=!!(t.flags&131072)}else pn=!1,pt&&e.flags&1048576&&U_(e,qc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;xc(t,e),t=e.pendingProps;var r=To(e,en.current);lo(e,n),r=Rp(null,e,i,t,r,n);var s=Pp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gn(i)?(s=!0,jc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,wp(e),r.updater=yu,e.stateNode=r,r._reactInternals=e,kf(e,i,t,n),e=Vf(null,e,i,!0,s,n)):(e.tag=0,pt&&s&&vp(e),sn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(xc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=W1(i),t=Yn(i,t),r){case 0:e=zf(null,e,i,t,n);break e;case 1:e=wg(null,e,i,t,n);break e;case 11:e=Eg(null,e,i,t,n);break e;case 14:e=Mg(null,e,i,Yn(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),zf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),wg(t,e,i,r,n);case 3:e:{if(px(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,V_(t,e),Kc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ro(Error(ie(423)),e),e=Tg(t,e,i,n,r);break e}else if(i!==r){r=Ro(Error(ie(424)),e),e=Tg(t,e,i,n,r);break e}else for(Tn=Ar(e.stateNode.containerInfo.firstChild),bn=e,pt=!0,Jn=null,n=B_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bo(),i===r){e=$i(t,e,n);break e}sn(t,e,i,n)}e=e.child}return e;case 5:return H_(e),t===null&&Uf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Pf(i,r)?o=null:s!==null&&Pf(i,s)&&(e.flags|=32),hx(t,e),sn(t,e,o,n),e.child;case 6:return t===null&&Uf(e),null;case 13:return mx(t,e,n);case 4:return Tp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Co(e,null,i,n):sn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),Eg(t,e,i,r,n);case 7:return sn(t,e,e.pendingProps,n),e.child;case 8:return sn(t,e,e.pendingProps.children,n),e.child;case 12:return sn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,lt($c,i._currentValue),i._currentValue=o,s!==null)if(si(s.value,o)){if(s.children===r.children&&!mn.current){e=$i(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Vi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ff(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ie(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ff(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}sn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,lo(e,n),r=Vn(r),i=i(r),e.flags|=1,sn(t,e,i,n),e.child;case 14:return i=e.type,r=Yn(i,e.pendingProps),r=Yn(i.type,r),Mg(t,e,i,r,n);case 15:return dx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),xc(t,e),e.tag=1,gn(i)?(t=!0,jc(e)):t=!1,lo(e,n),lx(e,i,r),kf(e,i,r,n),Vf(null,e,i,!0,t,n);case 19:return gx(t,e,n);case 22:return fx(t,e,n)}throw Error(ie(156,e.tag))};function Dx(t,e){return s_(t,e)}function G1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(t,e,n,i){return new G1(t,e,n,i)}function zp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function W1(t){if(typeof t=="function")return zp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===sp)return 11;if(t===op)return 14}return 2}function Dr(t,e){var n=t.alternate;return n===null?(n=Bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ec(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")zp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Xs:return hs(n.children,r,s,e);case rp:o=8,r|=8;break;case lf:return t=Bn(12,n,e,r|2),t.elementType=lf,t.lanes=s,t;case cf:return t=Bn(13,n,e,r),t.elementType=cf,t.lanes=s,t;case uf:return t=Bn(19,n,e,r),t.elementType=uf,t.lanes=s,t;case H0:return Mu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case z0:o=10;break e;case V0:o=9;break e;case sp:o=11;break e;case op:o=14;break e;case ur:o=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=Bn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function hs(t,e,n,i){return t=Bn(7,t,i,e),t.lanes=n,t}function Mu(t,e,n,i){return t=Bn(22,t,i,e),t.elementType=H0,t.lanes=n,t.stateNode={isHidden:!1},t}function dd(t,e,n){return t=Bn(6,t,null,e),t.lanes=n,t}function fd(t,e,n){return e=Bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function j1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xu(0),this.expirationTimes=Xu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Vp(t,e,n,i,r,s,o,a,l){return t=new j1(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Bn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wp(s),t}function X1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:js,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Lx(t){if(!t)return Or;t=t._reactInternals;e:{if(ws(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(gn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(gn(n))return L_(t,n,e)}return e}function Ix(t,e,n,i,r,s,o,a,l){return t=Vp(n,i,!0,t,r,s,o,a,l),t.context=Lx(null),n=t.current,i=on(),r=Nr(n),s=Vi(i,r),s.callback=e??null,Rr(n,s,r),t.current.lanes=r,Qa(t,r,i),vn(t,i),t}function wu(t,e,n,i){var r=e.current,s=on(),o=Nr(r);return n=Lx(n),e.context===null?e.context=n:e.pendingContext=n,e=Vi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Rr(r,e,o),t!==null&&(ii(t,r,o,s),gc(t,r,o)),o}function ru(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ug(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Hp(t,e){Ug(t,e),(t=t.alternate)&&Ug(t,e)}function q1(){return null}var Ux=typeof reportError=="function"?reportError:function(t){console.error(t)};function Gp(t){this._internalRoot=t}Tu.prototype.render=Gp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));wu(t,e,null,null)};Tu.prototype.unmount=Gp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;_s(function(){wu(null,t,null,null)}),e[Xi]=null}};function Tu(t){this._internalRoot=t}Tu.prototype.unstable_scheduleHydration=function(t){if(t){var e=f_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<fr.length&&e!==0&&e<fr[n].priority;n++);fr.splice(n,0,t),n===0&&p_(t)}};function Wp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function bu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Fg(){}function $1(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=ru(o);s.call(c)}}var o=Ix(e,i,t,0,null,!1,!1,"",Fg);return t._reactRootContainer=o,t[Xi]=o.current,La(t.nodeType===8?t.parentNode:t),_s(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=ru(l);a.call(c)}}var l=Vp(t,0,!1,null,null,!1,!1,"",Fg);return t._reactRootContainer=l,t[Xi]=l.current,La(t.nodeType===8?t.parentNode:t),_s(function(){wu(e,l,n,i)}),l}function Cu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=ru(o);a.call(l)}}wu(e,o,t,r)}else o=$1(n,e,t,r,i);return ru(o)}u_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=fa(e.pendingLanes);n!==0&&(cp(e,n|1),vn(e,At()),!(Ke&6)&&(Po=At()+500,Hr()))}break;case 13:_s(function(){var i=qi(t,1);if(i!==null){var r=on();ii(i,t,1,r)}}),Hp(t,1)}};up=function(t){if(t.tag===13){var e=qi(t,134217728);if(e!==null){var n=on();ii(e,t,134217728,n)}Hp(t,134217728)}};d_=function(t){if(t.tag===13){var e=Nr(t),n=qi(t,e);if(n!==null){var i=on();ii(n,t,e,i)}Hp(t,e)}};f_=function(){return rt};h_=function(t,e){var n=rt;try{return rt=t,e()}finally{rt=n}};yf=function(t,e,n){switch(e){case"input":if(hf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=vu(i);if(!r)throw Error(ie(90));W0(i),hf(i,r)}}}break;case"textarea":X0(t,n);break;case"select":e=n.value,e!=null&&ro(t,!!n.multiple,e,!1)}};J0=Op;e_=_s;var Y1={usingClientEntryPoint:!1,Events:[Ja,Ks,vu,Q0,Z0,Op]},Jo={findFiberByHostInstance:is,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},K1={bundleType:Jo.bundleType,version:Jo.version,rendererPackageName:Jo.rendererPackageName,rendererConfig:Jo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=i_(t),t===null?null:t.stateNode},findFiberByHostInstance:Jo.findFiberByHostInstance||q1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Al.isDisabled&&Al.supportsFiber)try{hu=Al.inject(K1),yi=Al}catch{}}An.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y1;An.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wp(e))throw Error(ie(200));return X1(t,e,null,n)};An.createRoot=function(t,e){if(!Wp(t))throw Error(ie(299));var n=!1,i="",r=Ux;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Vp(t,1,!1,null,null,n,!1,i,r),t[Xi]=e.current,La(t.nodeType===8?t.parentNode:t),new Gp(e)};An.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=i_(e),t=t===null?null:t.stateNode,t};An.flushSync=function(t){return _s(t)};An.hydrate=function(t,e,n){if(!bu(e))throw Error(ie(200));return Cu(null,t,e,!0,n)};An.hydrateRoot=function(t,e,n){if(!Wp(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Ux;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Ix(e,null,t,1,n??null,r,!1,s,o),t[Xi]=e.current,La(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Tu(e)};An.render=function(t,e,n){if(!bu(e))throw Error(ie(200));return Cu(null,t,e,!1,n)};An.unmountComponentAtNode=function(t){if(!bu(t))throw Error(ie(40));return t._reactRootContainer?(_s(function(){Cu(null,null,t,!1,function(){t._reactRootContainer=null,t[Xi]=null})}),!0):!1};An.unstable_batchedUpdates=Op;An.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!bu(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return Cu(t,e,n,!1,i)};An.version="18.3.1-next-f1338f8080-20240426";function Fx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fx)}catch(t){console.error(t)}}Fx(),F0.exports=An;var Au=F0.exports;const Q1=M0(Au);var Ox,Og=Au;Ox=Og.createRoot,Og.hydrateRoot;function Z1(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,i,r,s,o=[],a="",l=t.split("/");for(l[0]||l.shift();r=l.shift();)n=r[0],n==="*"?(o.push(n),a+=r[1]==="?"?"(?:/(.*))?":"/(.*)"):n===":"?(i=r.indexOf("?",1),s=r.indexOf(".",1),o.push(r.substring(1,~i?i:~s?s:r.length)),a+=~i&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(a+=(~i?"?":"")+"\\"+r.substring(s))):a+="/"+r;return{keys:o,pattern:new RegExp("^"+a+(e?"(?=$|/)":"/?$"),"i")}}var kx={exports:{}},Bx={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var No=N;function J1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ew=typeof Object.is=="function"?Object.is:J1,tw=No.useState,nw=No.useEffect,iw=No.useLayoutEffect,rw=No.useDebugValue;function sw(t,e){var n=e(),i=tw({inst:{value:n,getSnapshot:e}}),r=i[0].inst,s=i[1];return iw(function(){r.value=n,r.getSnapshot=e,hd(r)&&s({inst:r})},[t,n,e]),nw(function(){return hd(r)&&s({inst:r}),t(function(){hd(r)&&s({inst:r})})},[t]),rw(n),n}function hd(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ew(t,n)}catch{return!0}}function ow(t,e){return e()}var aw=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?ow:sw;Bx.useSyncExternalStore=No.useSyncExternalStore!==void 0?No.useSyncExternalStore:aw;kx.exports=Bx;var lw=kx.exports;const cw=I0.useInsertionEffect,uw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",dw=uw?N.useLayoutEffect:N.useEffect,fw=cw||dw,zx=t=>{const e=N.useRef([t,(...n)=>e[0](...n)]).current;return fw(()=>{e[0]=t}),e[1]},hw="popstate",jp="pushState",Xp="replaceState",pw="hashchange",kg=[hw,jp,Xp,pw],mw=t=>{for(const e of kg)addEventListener(e,t);return()=>{for(const e of kg)removeEventListener(e,t)}},Vx=(t,e)=>lw.useSyncExternalStore(mw,t,e),gw=()=>location.search,vw=({ssrSearch:t=""}={})=>Vx(gw,()=>t),Bg=()=>location.pathname,_w=({ssrPath:t}={})=>Vx(Bg,t?()=>t:Bg),xw=(t,{replace:e=!1,state:n=null}={})=>history[e?Xp:jp](n,"",t),yw=(t={})=>[_w(t),xw],zg=Symbol.for("wouter_v3");if(typeof history<"u"&&typeof window[zg]>"u"){for(const t of[jp,Xp]){const e=history[t];history[t]=function(){const n=e.apply(this,arguments),i=new Event(t);return i.arguments=arguments,dispatchEvent(i),n}}Object.defineProperty(window,zg,{value:!0})}const Sw=(t,e)=>e.toLowerCase().indexOf(t.toLowerCase())?"~"+e:e.slice(t.length)||"/",Hx=(t="")=>t==="/"?"":t,Ew=(t,e)=>t[0]==="~"?t.slice(1):Hx(e)+t,Mw=(t="",e)=>Sw(Vg(Hx(t)),Vg(e)),Vg=t=>{try{return decodeURI(t)}catch{return t}},Gx={hook:yw,searchHook:vw,parser:Z1,base:"",ssrPath:void 0,ssrSearch:void 0,hrefs:t=>t},Wx=N.createContext(Gx),Ru=()=>N.useContext(Wx),jx={},Xx=N.createContext(jx),ww=()=>N.useContext(Xx),qp=t=>{const[e,n]=t.hook(t);return[Mw(t.base,e),zx((i,r)=>n(Ew(i,t.base),r))]},qx=(t,e,n,i)=>{const{pattern:r,keys:s}=e instanceof RegExp?{keys:!1,pattern:e}:t(e||"*",i),o=r.exec(n)||[],[a,...l]=o;return a!==void 0?[!0,(()=>{const c=s!==!1?Object.fromEntries(s.map((h,f)=>[h,l[f]])):o.groups;let d={...l};return c&&Object.assign(d,c),d})(),...i?[a]:[]]:[!1,null]},Tw=({children:t,...e})=>{var d,h;const n=Ru(),i=e.hook?Gx:n;let r=i;const[s,o]=((d=e.ssrPath)==null?void 0:d.split("?"))??[];o&&(e.ssrSearch=o,e.ssrPath=s),e.hrefs=e.hrefs??((h=e.hook)==null?void 0:h.hrefs);let a=N.useRef({}),l=a.current,c=l;for(let f in i){const m=f==="base"?i[f]+(e[f]||""):e[f]||i[f];l===c&&m!==c[f]&&(a.current=c={...c}),c[f]=m,m!==i[f]&&(r=c)}return N.createElement(Wx.Provider,{value:r,children:t})},Hg=({children:t,component:e},n)=>e?N.createElement(e,{params:n}):typeof t=="function"?t(n):t,bw=t=>{let e=N.useRef(jx),n=e.current;for(const i in t)t[i]!==n[i]&&(n=t);return Object.keys(t).length===0&&(n=t),e.current=n},Gg=({path:t,nest:e,match:n,...i})=>{const r=Ru(),[s]=qp(r),[o,a,l]=n??qx(r.parser,t,s,e),c=bw({...ww(),...a});if(!o)return null;const d=l?N.createElement(Tw,{base:l},Hg(i,c)):Hg(i,c);return N.createElement(Xx.Provider,{value:c,children:d})},$x=N.forwardRef((t,e)=>{const n=Ru(),[i,r]=qp(n),{to:s="",href:o=s,onClick:a,asChild:l,children:c,className:d,replace:h,state:f,...m}=t,_=zx(p=>{p.ctrlKey||p.metaKey||p.altKey||p.shiftKey||p.button!==0||(a==null||a(p),p.defaultPrevented||(p.preventDefault(),r(o,t)))}),g=n.hrefs(o[0]==="~"?o.slice(1):n.base+o,n);return l&&N.isValidElement(c)?N.cloneElement(c,{onClick:_,href:g}):N.createElement("a",{...m,onClick:_,href:g,className:d!=null&&d.call?d(i===o):d,children:c,ref:e})}),Yx=t=>Array.isArray(t)?t.flatMap(e=>Yx(e&&e.type===N.Fragment?e.props.children:e)):[t],Cw=({children:t,location:e})=>{const n=Ru(),[i]=qp(n);for(const r of Yx(t)){let s=0;if(N.isValidElement(r)&&(s=qx(n.parser,r.props.path,e||i,r.props.nest))[0])return N.cloneElement(r,{match:s})}return null};var tl=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Pu=typeof window>"u"||"Deno"in globalThis;function Kn(){}function Aw(t,e){return typeof t=="function"?t(e):t}function Rw(t){return typeof t=="number"&&t>=0&&t!==1/0}function Pw(t,e){return Math.max(t+(e||0)-Date.now(),0)}function Wg(t,e){return typeof t=="function"?t(e):t}function Nw(t,e){return typeof t=="function"?t(e):t}function jg(t,e){const{type:n="all",exact:i,fetchStatus:r,predicate:s,queryKey:o,stale:a}=t;if(o){if(i){if(e.queryHash!==$p(o,e.options))return!1}else if(!Ha(e.queryKey,o))return!1}if(n!=="all"){const l=e.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof a=="boolean"&&e.isStale()!==a||r&&r!==e.state.fetchStatus||s&&!s(e))}function Xg(t,e){const{exact:n,status:i,predicate:r,mutationKey:s}=t;if(s){if(!e.options.mutationKey)return!1;if(n){if(xs(e.options.mutationKey)!==xs(s))return!1}else if(!Ha(e.options.mutationKey,s))return!1}return!(i&&e.state.status!==i||r&&!r(e))}function $p(t,e){return((e==null?void 0:e.queryKeyHashFn)||xs)(t)}function xs(t){return JSON.stringify(t,(e,n)=>Jf(n)?Object.keys(n).sort().reduce((i,r)=>(i[r]=n[r],i),{}):n)}function Ha(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?!Object.keys(e).some(n=>!Ha(t[n],e[n])):!1}function Kx(t,e){if(t===e)return t;const n=qg(t)&&qg(e);if(n||Jf(t)&&Jf(e)){const i=n?t:Object.keys(t),r=i.length,s=n?e:Object.keys(e),o=s.length,a=n?[]:{};let l=0;for(let c=0;c<o;c++){const d=n?c:s[c];(!n&&i.includes(d)||n)&&t[d]===void 0&&e[d]===void 0?(a[d]=void 0,l++):(a[d]=Kx(t[d],e[d]),a[d]===t[d]&&t[d]!==void 0&&l++)}return r===o&&l===r?t:a}return e}function Dw(t,e){if(!e||Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(t[n]!==e[n])return!1;return!0}function qg(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function Jf(t){if(!$g(t))return!1;const e=t.constructor;if(e===void 0)return!0;const n=e.prototype;return!(!$g(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(t)!==Object.prototype)}function $g(t){return Object.prototype.toString.call(t)==="[object Object]"}function Lw(t){return new Promise(e=>{setTimeout(e,t)})}function Iw(t,e,n){return typeof n.structuralSharing=="function"?n.structuralSharing(t,e):n.structuralSharing!==!1?Kx(t,e):e}function Uw(t,e,n=0){const i=[...t,e];return n&&i.length>n?i.slice(1):i}function Fw(t,e,n=0){const i=[e,...t];return n&&i.length>n?i.slice(0,-1):i}var Yp=Symbol();function Qx(t,e){return!t.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!t.queryFn||t.queryFn===Yp?()=>Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)):t.queryFn}var ls,mr,mo,p0,Ow=(p0=class extends tl{constructor(){super();He(this,ls);He(this,mr);He(this,mo);Ie(this,mo,e=>{if(!Pu&&window.addEventListener){const n=()=>e();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){j(this,mr)||this.setEventListener(j(this,mo))}onUnsubscribe(){var e;this.hasListeners()||((e=j(this,mr))==null||e.call(this),Ie(this,mr,void 0))}setEventListener(e){var n;Ie(this,mo,e),(n=j(this,mr))==null||n.call(this),Ie(this,mr,e(i=>{typeof i=="boolean"?this.setFocused(i):this.onFocus()}))}setFocused(e){j(this,ls)!==e&&(Ie(this,ls,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(n=>{n(e)})}isFocused(){var e;return typeof j(this,ls)=="boolean"?j(this,ls):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},ls=new WeakMap,mr=new WeakMap,mo=new WeakMap,p0),Zx=new Ow,go,gr,vo,m0,kw=(m0=class extends tl{constructor(){super();He(this,go,!0);He(this,gr);He(this,vo);Ie(this,vo,e=>{if(!Pu&&window.addEventListener){const n=()=>e(!0),i=()=>e(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",i,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",i)}}})}onSubscribe(){j(this,gr)||this.setEventListener(j(this,vo))}onUnsubscribe(){var e;this.hasListeners()||((e=j(this,gr))==null||e.call(this),Ie(this,gr,void 0))}setEventListener(e){var n;Ie(this,vo,e),(n=j(this,gr))==null||n.call(this),Ie(this,gr,e(this.setOnline.bind(this)))}setOnline(e){j(this,go)!==e&&(Ie(this,go,e),this.listeners.forEach(i=>{i(e)}))}isOnline(){return j(this,go)}},go=new WeakMap,gr=new WeakMap,vo=new WeakMap,m0),su=new kw;function Bw(){let t,e;const n=new Promise((r,s)=>{t=r,e=s});n.status="pending",n.catch(()=>{});function i(r){Object.assign(n,r),delete n.resolve,delete n.reject}return n.resolve=r=>{i({status:"fulfilled",value:r}),t(r)},n.reject=r=>{i({status:"rejected",reason:r}),e(r)},n}function zw(t){return Math.min(1e3*2**t,3e4)}function Jx(t){return(t??"online")==="online"?su.isOnline():!0}var ey=class extends Error{constructor(t){super("CancelledError"),this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}};function pd(t){return t instanceof ey}function ty(t){let e=!1,n=0,i=!1,r;const s=Bw(),o=g=>{var p;i||(f(new ey(g)),(p=t.abort)==null||p.call(t))},a=()=>{e=!0},l=()=>{e=!1},c=()=>Zx.isFocused()&&(t.networkMode==="always"||su.isOnline())&&t.canRun(),d=()=>Jx(t.networkMode)&&t.canRun(),h=g=>{var p;i||(i=!0,(p=t.onSuccess)==null||p.call(t,g),r==null||r(),s.resolve(g))},f=g=>{var p;i||(i=!0,(p=t.onError)==null||p.call(t,g),r==null||r(),s.reject(g))},m=()=>new Promise(g=>{var p;r=u=>{(i||c())&&g(u)},(p=t.onPause)==null||p.call(t)}).then(()=>{var g;r=void 0,i||(g=t.onContinue)==null||g.call(t)}),_=()=>{if(i)return;let g;const p=n===0?t.initialPromise:void 0;try{g=p??t.fn()}catch(u){g=Promise.reject(u)}Promise.resolve(g).then(h).catch(u=>{var A;if(i)return;const v=t.retry??(Pu?0:3),x=t.retryDelay??zw,S=typeof x=="function"?x(n,u):x,C=v===!0||typeof v=="number"&&n<v||typeof v=="function"&&v(n,u);if(e||!C){f(u);return}n++,(A=t.onFail)==null||A.call(t,n,u),Lw(S).then(()=>c()?void 0:m()).then(()=>{e?f(u):_()})})};return{promise:s,cancel:o,continue:()=>(r==null||r(),s),cancelRetry:a,continueRetry:l,canStart:d,start:()=>(d()?_():m().then(_),s)}}function Vw(){let t=[],e=0,n=a=>{a()},i=a=>{a()},r=a=>setTimeout(a,0);const s=a=>{e?t.push(a):r(()=>{n(a)})},o=()=>{const a=t;t=[],a.length&&r(()=>{i(()=>{a.forEach(l=>{n(l)})})})};return{batch:a=>{let l;e++;try{l=a()}finally{e--,e||o()}return l},batchCalls:a=>(...l)=>{s(()=>{a(...l)})},schedule:s,setNotifyFunction:a=>{n=a},setBatchNotifyFunction:a=>{i=a},setScheduler:a=>{r=a}}}var Gt=Vw(),cs,g0,ny=(g0=class{constructor(){He(this,cs)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),Rw(this.gcTime)&&Ie(this,cs,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(Pu?1/0:5*60*1e3))}clearGcTimeout(){j(this,cs)&&(clearTimeout(j(this,cs)),Ie(this,cs,void 0))}},cs=new WeakMap,g0),_o,xo,In,Zt,$a,us,Qn,Pi,v0,Hw=(v0=class extends ny{constructor(e){super();He(this,Qn);He(this,_o);He(this,xo);He(this,In);He(this,Zt);He(this,$a);He(this,us);Ie(this,us,!1),Ie(this,$a,e.defaultOptions),this.setOptions(e.options),this.observers=[],Ie(this,In,e.cache),this.queryKey=e.queryKey,this.queryHash=e.queryHash,Ie(this,_o,Ww(this.options)),this.state=e.state??j(this,_o),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var e;return(e=j(this,Zt))==null?void 0:e.promise}setOptions(e){this.options={...j(this,$a),...e},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&j(this,In).remove(this)}setData(e,n){const i=Iw(this.state.data,e,this.options);return Ct(this,Qn,Pi).call(this,{data:i,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),i}setState(e,n){Ct(this,Qn,Pi).call(this,{type:"setState",state:e,setStateOptions:n})}cancel(e){var i,r;const n=(i=j(this,Zt))==null?void 0:i.promise;return(r=j(this,Zt))==null||r.cancel(e),n?n.then(Kn).catch(Kn):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(j(this,_o))}isActive(){return this.observers.some(e=>Nw(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Yp||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(e=0){return this.state.isInvalidated||this.state.data===void 0||!Pw(this.state.dataUpdatedAt,e)}onFocus(){var n;const e=this.observers.find(i=>i.shouldFetchOnWindowFocus());e==null||e.refetch({cancelRefetch:!1}),(n=j(this,Zt))==null||n.continue()}onOnline(){var n;const e=this.observers.find(i=>i.shouldFetchOnReconnect());e==null||e.refetch({cancelRefetch:!1}),(n=j(this,Zt))==null||n.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),j(this,In).notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(n=>n!==e),this.observers.length||(j(this,Zt)&&(j(this,us)?j(this,Zt).cancel({revert:!0}):j(this,Zt).cancelRetry()),this.scheduleGc()),j(this,In).notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Ct(this,Qn,Pi).call(this,{type:"invalidate"})}fetch(e,n){var l,c,d;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(j(this,Zt))return j(this,Zt).continueRetry(),j(this,Zt).promise}if(e&&this.setOptions(e),!this.options.queryFn){const h=this.observers.find(f=>f.options.queryFn);h&&this.setOptions(h.options)}const i=new AbortController,r=h=>{Object.defineProperty(h,"signal",{enumerable:!0,get:()=>(Ie(this,us,!0),i.signal)})},s=()=>{const h=Qx(this.options,n),f={queryKey:this.queryKey,meta:this.meta};return r(f),Ie(this,us,!1),this.options.persister?this.options.persister(h,f,this):h(f)},o={fetchOptions:n,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:s};r(o),(l=this.options.behavior)==null||l.onFetch(o,this),Ie(this,xo,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((c=o.fetchOptions)==null?void 0:c.meta))&&Ct(this,Qn,Pi).call(this,{type:"fetch",meta:(d=o.fetchOptions)==null?void 0:d.meta});const a=h=>{var f,m,_,g;pd(h)&&h.silent||Ct(this,Qn,Pi).call(this,{type:"error",error:h}),pd(h)||((m=(f=j(this,In).config).onError)==null||m.call(f,h,this),(g=(_=j(this,In).config).onSettled)==null||g.call(_,this.state.data,h,this)),this.scheduleGc()};return Ie(this,Zt,ty({initialPromise:n==null?void 0:n.initialPromise,fn:o.fetchFn,abort:i.abort.bind(i),onSuccess:h=>{var f,m,_,g;if(h===void 0){a(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(h)}catch(p){a(p);return}(m=(f=j(this,In).config).onSuccess)==null||m.call(f,h,this),(g=(_=j(this,In).config).onSettled)==null||g.call(_,h,this.state.error,this),this.scheduleGc()},onError:a,onFail:(h,f)=>{Ct(this,Qn,Pi).call(this,{type:"failed",failureCount:h,error:f})},onPause:()=>{Ct(this,Qn,Pi).call(this,{type:"pause"})},onContinue:()=>{Ct(this,Qn,Pi).call(this,{type:"continue"})},retry:o.options.retry,retryDelay:o.options.retryDelay,networkMode:o.options.networkMode,canRun:()=>!0})),j(this,Zt).start()}},_o=new WeakMap,xo=new WeakMap,In=new WeakMap,Zt=new WeakMap,$a=new WeakMap,us=new WeakMap,Qn=new WeakSet,Pi=function(e){const n=i=>{switch(e.type){case"failed":return{...i,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...i,fetchStatus:"paused"};case"continue":return{...i,fetchStatus:"fetching"};case"fetch":return{...i,...Gw(i.data,this.options),fetchMeta:e.meta??null};case"success":return{...i,data:e.data,dataUpdateCount:i.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const r=e.error;return pd(r)&&r.revert&&j(this,xo)?{...j(this,xo),fetchStatus:"idle"}:{...i,error:r,errorUpdateCount:i.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:i.fetchFailureCount+1,fetchFailureReason:r,fetchStatus:"idle",status:"error"};case"invalidate":return{...i,isInvalidated:!0};case"setState":return{...i,...e.state}}};this.state=n(this.state),Gt.batch(()=>{this.observers.forEach(i=>{i.onQueryUpdate()}),j(this,In).notify({query:this,type:"updated",action:e})})},v0);function Gw(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Jx(e.networkMode)?"fetching":"paused",...t===void 0&&{error:null,status:"pending"}}}function Ww(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,n=e!==void 0,i=n?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:n?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var hi,_0,jw=(_0=class extends tl{constructor(e={}){super();He(this,hi);this.config=e,Ie(this,hi,new Map)}build(e,n,i){const r=n.queryKey,s=n.queryHash??$p(r,n);let o=this.get(s);return o||(o=new Hw({cache:this,queryKey:r,queryHash:s,options:e.defaultQueryOptions(n),state:i,defaultOptions:e.getQueryDefaults(r)}),this.add(o)),o}add(e){j(this,hi).has(e.queryHash)||(j(this,hi).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const n=j(this,hi).get(e.queryHash);n&&(e.destroy(),n===e&&j(this,hi).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){Gt.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return j(this,hi).get(e)}getAll(){return[...j(this,hi).values()]}find(e){const n={exact:!0,...e};return this.getAll().find(i=>jg(n,i))}findAll(e={}){const n=this.getAll();return Object.keys(e).length>0?n.filter(i=>jg(e,i)):n}notify(e){Gt.batch(()=>{this.listeners.forEach(n=>{n(e)})})}onFocus(){Gt.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){Gt.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},hi=new WeakMap,_0),pi,rn,ds,mi,lr,x0,Xw=(x0=class extends ny{constructor(e){super();He(this,mi);He(this,pi);He(this,rn);He(this,ds);this.mutationId=e.mutationId,Ie(this,rn,e.mutationCache),Ie(this,pi,[]),this.state=e.state||iy(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){j(this,pi).includes(e)||(j(this,pi).push(e),this.clearGcTimeout(),j(this,rn).notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){Ie(this,pi,j(this,pi).filter(n=>n!==e)),this.scheduleGc(),j(this,rn).notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){j(this,pi).length||(this.state.status==="pending"?this.scheduleGc():j(this,rn).remove(this))}continue(){var e;return((e=j(this,ds))==null?void 0:e.continue())??this.execute(this.state.variables)}async execute(e){var r,s,o,a,l,c,d,h,f,m,_,g,p,u,v,x,S,C,A,b;Ie(this,ds,ty({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(new Error("No mutationFn found")),onFail:(P,T)=>{Ct(this,mi,lr).call(this,{type:"failed",failureCount:P,error:T})},onPause:()=>{Ct(this,mi,lr).call(this,{type:"pause"})},onContinue:()=>{Ct(this,mi,lr).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>j(this,rn).canRun(this)}));const n=this.state.status==="pending",i=!j(this,ds).canStart();try{if(!n){Ct(this,mi,lr).call(this,{type:"pending",variables:e,isPaused:i}),await((s=(r=j(this,rn).config).onMutate)==null?void 0:s.call(r,e,this));const T=await((a=(o=this.options).onMutate)==null?void 0:a.call(o,e));T!==this.state.context&&Ct(this,mi,lr).call(this,{type:"pending",context:T,variables:e,isPaused:i})}const P=await j(this,ds).start();return await((c=(l=j(this,rn).config).onSuccess)==null?void 0:c.call(l,P,e,this.state.context,this)),await((h=(d=this.options).onSuccess)==null?void 0:h.call(d,P,e,this.state.context)),await((m=(f=j(this,rn).config).onSettled)==null?void 0:m.call(f,P,null,this.state.variables,this.state.context,this)),await((g=(_=this.options).onSettled)==null?void 0:g.call(_,P,null,e,this.state.context)),Ct(this,mi,lr).call(this,{type:"success",data:P}),P}catch(P){try{throw await((u=(p=j(this,rn).config).onError)==null?void 0:u.call(p,P,e,this.state.context,this)),await((x=(v=this.options).onError)==null?void 0:x.call(v,P,e,this.state.context)),await((C=(S=j(this,rn).config).onSettled)==null?void 0:C.call(S,void 0,P,this.state.variables,this.state.context,this)),await((b=(A=this.options).onSettled)==null?void 0:b.call(A,void 0,P,e,this.state.context)),P}finally{Ct(this,mi,lr).call(this,{type:"error",error:P})}}finally{j(this,rn).runNext(this)}}},pi=new WeakMap,rn=new WeakMap,ds=new WeakMap,mi=new WeakSet,lr=function(e){const n=i=>{switch(e.type){case"failed":return{...i,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...i,isPaused:!0};case"continue":return{...i,isPaused:!1};case"pending":return{...i,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...i,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...i,data:void 0,error:e.error,failureCount:i.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=n(this.state),Gt.batch(()=>{j(this,pi).forEach(i=>{i.onMutationUpdate(e)}),j(this,rn).notify({mutation:this,type:"updated",action:e})})},x0);function iy(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Mn,Ya,y0,qw=(y0=class extends tl{constructor(e={}){super();He(this,Mn);He(this,Ya);this.config=e,Ie(this,Mn,new Map),Ie(this,Ya,Date.now())}build(e,n,i){const r=new Xw({mutationCache:this,mutationId:++dl(this,Ya)._,options:e.defaultMutationOptions(n),state:i});return this.add(r),r}add(e){const n=Rl(e),i=j(this,Mn).get(n)??[];i.push(e),j(this,Mn).set(n,i),this.notify({type:"added",mutation:e})}remove(e){var i;const n=Rl(e);if(j(this,Mn).has(n)){const r=(i=j(this,Mn).get(n))==null?void 0:i.filter(s=>s!==e);r&&(r.length===0?j(this,Mn).delete(n):j(this,Mn).set(n,r))}this.notify({type:"removed",mutation:e})}canRun(e){var i;const n=(i=j(this,Mn).get(Rl(e)))==null?void 0:i.find(r=>r.state.status==="pending");return!n||n===e}runNext(e){var i;const n=(i=j(this,Mn).get(Rl(e)))==null?void 0:i.find(r=>r!==e&&r.state.isPaused);return(n==null?void 0:n.continue())??Promise.resolve()}clear(){Gt.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}getAll(){return[...j(this,Mn).values()].flat()}find(e){const n={exact:!0,...e};return this.getAll().find(i=>Xg(n,i))}findAll(e={}){return this.getAll().filter(n=>Xg(e,n))}notify(e){Gt.batch(()=>{this.listeners.forEach(n=>{n(e)})})}resumePausedMutations(){const e=this.getAll().filter(n=>n.state.isPaused);return Gt.batch(()=>Promise.all(e.map(n=>n.continue().catch(Kn))))}},Mn=new WeakMap,Ya=new WeakMap,y0);function Rl(t){var e;return((e=t.options.scope)==null?void 0:e.id)??String(t.mutationId)}function Yg(t){return{onFetch:(e,n)=>{var d,h,f,m,_;const i=e.options,r=(f=(h=(d=e.fetchOptions)==null?void 0:d.meta)==null?void 0:h.fetchMore)==null?void 0:f.direction,s=((m=e.state.data)==null?void 0:m.pages)||[],o=((_=e.state.data)==null?void 0:_.pageParams)||[];let a={pages:[],pageParams:[]},l=0;const c=async()=>{let g=!1;const p=x=>{Object.defineProperty(x,"signal",{enumerable:!0,get:()=>(e.signal.aborted?g=!0:e.signal.addEventListener("abort",()=>{g=!0}),e.signal)})},u=Qx(e.options,e.fetchOptions),v=async(x,S,C)=>{if(g)return Promise.reject();if(S==null&&x.pages.length)return Promise.resolve(x);const A={queryKey:e.queryKey,pageParam:S,direction:C?"backward":"forward",meta:e.options.meta};p(A);const b=await u(A),{maxPages:P}=e.options,T=C?Fw:Uw;return{pages:T(x.pages,b,P),pageParams:T(x.pageParams,S,P)}};if(r&&s.length){const x=r==="backward",S=x?$w:Kg,C={pages:s,pageParams:o},A=S(i,C);a=await v(C,A,x)}else{const x=t??s.length;do{const S=l===0?o[0]??i.initialPageParam:Kg(i,a);if(l>0&&S==null)break;a=await v(a,S),l++}while(l<x)}return a};e.options.persister?e.fetchFn=()=>{var g,p;return(p=(g=e.options).persister)==null?void 0:p.call(g,c,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},n)}:e.fetchFn=c}}}function Kg(t,{pages:e,pageParams:n}){const i=e.length-1;return e.length>0?t.getNextPageParam(e[i],e,n[i],n):void 0}function $w(t,{pages:e,pageParams:n}){var i;return e.length>0?(i=t.getPreviousPageParam)==null?void 0:i.call(t,e[0],e,n[0],n):void 0}var St,vr,_r,yo,So,xr,Eo,Mo,S0,Yw=(S0=class{constructor(t={}){He(this,St);He(this,vr);He(this,_r);He(this,yo);He(this,So);He(this,xr);He(this,Eo);He(this,Mo);Ie(this,St,t.queryCache||new jw),Ie(this,vr,t.mutationCache||new qw),Ie(this,_r,t.defaultOptions||{}),Ie(this,yo,new Map),Ie(this,So,new Map),Ie(this,xr,0)}mount(){dl(this,xr)._++,j(this,xr)===1&&(Ie(this,Eo,Zx.subscribe(async t=>{t&&(await this.resumePausedMutations(),j(this,St).onFocus())})),Ie(this,Mo,su.subscribe(async t=>{t&&(await this.resumePausedMutations(),j(this,St).onOnline())})))}unmount(){var t,e;dl(this,xr)._--,j(this,xr)===0&&((t=j(this,Eo))==null||t.call(this),Ie(this,Eo,void 0),(e=j(this,Mo))==null||e.call(this),Ie(this,Mo,void 0))}isFetching(t){return j(this,St).findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return j(this,vr).findAll({...t,status:"pending"}).length}getQueryData(t){var n;const e=this.defaultQueryOptions({queryKey:t});return(n=j(this,St).get(e.queryHash))==null?void 0:n.state.data}ensureQueryData(t){const e=this.getQueryData(t.queryKey);if(e===void 0)return this.fetchQuery(t);{const n=this.defaultQueryOptions(t),i=j(this,St).build(this,n);return t.revalidateIfStale&&i.isStaleByTime(Wg(n.staleTime,i))&&this.prefetchQuery(n),Promise.resolve(e)}}getQueriesData(t){return j(this,St).findAll(t).map(({queryKey:e,state:n})=>{const i=n.data;return[e,i]})}setQueryData(t,e,n){const i=this.defaultQueryOptions({queryKey:t}),r=j(this,St).get(i.queryHash),s=r==null?void 0:r.state.data,o=Aw(e,s);if(o!==void 0)return j(this,St).build(this,i).setData(o,{...n,manual:!0})}setQueriesData(t,e,n){return Gt.batch(()=>j(this,St).findAll(t).map(({queryKey:i})=>[i,this.setQueryData(i,e,n)]))}getQueryState(t){var n;const e=this.defaultQueryOptions({queryKey:t});return(n=j(this,St).get(e.queryHash))==null?void 0:n.state}removeQueries(t){const e=j(this,St);Gt.batch(()=>{e.findAll(t).forEach(n=>{e.remove(n)})})}resetQueries(t,e){const n=j(this,St),i={type:"active",...t};return Gt.batch(()=>(n.findAll(t).forEach(r=>{r.reset()}),this.refetchQueries(i,e)))}cancelQueries(t={},e={}){const n={revert:!0,...e},i=Gt.batch(()=>j(this,St).findAll(t).map(r=>r.cancel(n)));return Promise.all(i).then(Kn).catch(Kn)}invalidateQueries(t={},e={}){return Gt.batch(()=>{if(j(this,St).findAll(t).forEach(i=>{i.invalidate()}),t.refetchType==="none")return Promise.resolve();const n={...t,type:t.refetchType??t.type??"active"};return this.refetchQueries(n,e)})}refetchQueries(t={},e){const n={...e,cancelRefetch:(e==null?void 0:e.cancelRefetch)??!0},i=Gt.batch(()=>j(this,St).findAll(t).filter(r=>!r.isDisabled()).map(r=>{let s=r.fetch(void 0,n);return n.throwOnError||(s=s.catch(Kn)),r.state.fetchStatus==="paused"?Promise.resolve():s}));return Promise.all(i).then(Kn)}fetchQuery(t){const e=this.defaultQueryOptions(t);e.retry===void 0&&(e.retry=!1);const n=j(this,St).build(this,e);return n.isStaleByTime(Wg(e.staleTime,n))?n.fetch(e):Promise.resolve(n.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(Kn).catch(Kn)}fetchInfiniteQuery(t){return t.behavior=Yg(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(Kn).catch(Kn)}ensureInfiniteQueryData(t){return t.behavior=Yg(t.pages),this.ensureQueryData(t)}resumePausedMutations(){return su.isOnline()?j(this,vr).resumePausedMutations():Promise.resolve()}getQueryCache(){return j(this,St)}getMutationCache(){return j(this,vr)}getDefaultOptions(){return j(this,_r)}setDefaultOptions(t){Ie(this,_r,t)}setQueryDefaults(t,e){j(this,yo).set(xs(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){const e=[...j(this,yo).values()];let n={};return e.forEach(i=>{Ha(t,i.queryKey)&&(n={...n,...i.defaultOptions})}),n}setMutationDefaults(t,e){j(this,So).set(xs(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){const e=[...j(this,So).values()];let n={};return e.forEach(i=>{Ha(t,i.mutationKey)&&(n={...n,...i.defaultOptions})}),n}defaultQueryOptions(t){if(t._defaulted)return t;const e={...j(this,_r).queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=$p(e.queryKey,e)),e.refetchOnReconnect===void 0&&(e.refetchOnReconnect=e.networkMode!=="always"),e.throwOnError===void 0&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.enabled!==!0&&e.queryFn===Yp&&(e.enabled=!1),e}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...j(this,_r).mutations,...(t==null?void 0:t.mutationKey)&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){j(this,St).clear(),j(this,vr).clear()}},St=new WeakMap,vr=new WeakMap,_r=new WeakMap,yo=new WeakMap,So=new WeakMap,xr=new WeakMap,Eo=new WeakMap,Mo=new WeakMap,S0),yr,Sr,fn,Ii,Wi,Mc,eh,E0,Kw=(E0=class extends tl{constructor(n,i){super();He(this,Wi);He(this,yr);He(this,Sr);He(this,fn);He(this,Ii);Ie(this,yr,n),this.setOptions(i),this.bindMethods(),Ct(this,Wi,Mc).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(n){var r;const i=this.options;this.options=j(this,yr).defaultMutationOptions(n),Dw(this.options,i)||j(this,yr).getMutationCache().notify({type:"observerOptionsUpdated",mutation:j(this,fn),observer:this}),i!=null&&i.mutationKey&&this.options.mutationKey&&xs(i.mutationKey)!==xs(this.options.mutationKey)?this.reset():((r=j(this,fn))==null?void 0:r.state.status)==="pending"&&j(this,fn).setOptions(this.options)}onUnsubscribe(){var n;this.hasListeners()||(n=j(this,fn))==null||n.removeObserver(this)}onMutationUpdate(n){Ct(this,Wi,Mc).call(this),Ct(this,Wi,eh).call(this,n)}getCurrentResult(){return j(this,Sr)}reset(){var n;(n=j(this,fn))==null||n.removeObserver(this),Ie(this,fn,void 0),Ct(this,Wi,Mc).call(this),Ct(this,Wi,eh).call(this)}mutate(n,i){var r;return Ie(this,Ii,i),(r=j(this,fn))==null||r.removeObserver(this),Ie(this,fn,j(this,yr).getMutationCache().build(j(this,yr),this.options)),j(this,fn).addObserver(this),j(this,fn).execute(n)}},yr=new WeakMap,Sr=new WeakMap,fn=new WeakMap,Ii=new WeakMap,Wi=new WeakSet,Mc=function(){var i;const n=((i=j(this,fn))==null?void 0:i.state)??iy();Ie(this,Sr,{...n,isPending:n.status==="pending",isSuccess:n.status==="success",isError:n.status==="error",isIdle:n.status==="idle",mutate:this.mutate,reset:this.reset})},eh=function(n){Gt.batch(()=>{var i,r,s,o,a,l,c,d;if(j(this,Ii)&&this.hasListeners()){const h=j(this,Sr).variables,f=j(this,Sr).context;(n==null?void 0:n.type)==="success"?((r=(i=j(this,Ii)).onSuccess)==null||r.call(i,n.data,h,f),(o=(s=j(this,Ii)).onSettled)==null||o.call(s,n.data,null,h,f)):(n==null?void 0:n.type)==="error"&&((l=(a=j(this,Ii)).onError)==null||l.call(a,n.error,h,f),(d=(c=j(this,Ii)).onSettled)==null||d.call(c,void 0,n.error,h,f))}this.listeners.forEach(h=>{h(j(this,Sr))})})},E0),ry=N.createContext(void 0),Qw=t=>{const e=N.useContext(ry);if(!e)throw new Error("No QueryClient set, use QueryClientProvider to set one");return e},Zw=({client:t,children:e})=>(N.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),y.jsx(ry.Provider,{value:t,children:e}));function Jw(t,e){return typeof t=="function"?t(...e):!!t}function eT(){}function sy(t,e){const n=Qw(),[i]=N.useState(()=>new Kw(n,t));N.useEffect(()=>{i.setOptions(t)},[i,t]);const r=N.useSyncExternalStore(N.useCallback(o=>i.subscribe(Gt.batchCalls(o)),[i]),()=>i.getCurrentResult(),()=>i.getCurrentResult()),s=N.useCallback((o,a)=>{i.mutate(o,a).catch(eT)},[i]);if(r.error&&Jw(i.options.throwOnError,[r.error]))throw r.error;return{...r,mutate:s,mutateAsync:r.mutate}}async function oy(t){if(!t.ok){const e=await t.text()||t.statusText;throw new Error(`${t.status}: ${e}`)}}async function ay(t,e,n){const i=await fetch(e,{method:t,headers:n?{"Content-Type":"application/json"}:{},body:n?JSON.stringify(n):void 0,credentials:"include"});return await oy(i),i}const tT=({on401:t})=>async({queryKey:e})=>{const n=await fetch(e[0],{credentials:"include"});return t==="returnNull"&&n.status===401?null:(await oy(n),await n.json())},nT=new Yw({defaultOptions:{queries:{queryFn:tT({on401:"throw"}),refetchInterval:!1,refetchOnWindowFocus:!1,staleTime:1/0,retry:!1},mutations:{retry:!1}}}),iT=1,rT=1e6;let md=0;function sT(){return md=(md+1)%Number.MAX_SAFE_INTEGER,md.toString()}const gd=new Map,Qg=t=>{if(gd.has(t))return;const e=setTimeout(()=>{gd.delete(t),wa({type:"REMOVE_TOAST",toastId:t})},rT);gd.set(t,e)},oT=(t,e)=>{switch(e.type){case"ADD_TOAST":return{...t,toasts:[e.toast,...t.toasts].slice(0,iT)};case"UPDATE_TOAST":return{...t,toasts:t.toasts.map(n=>n.id===e.toast.id?{...n,...e.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=e;return n?Qg(n):t.toasts.forEach(i=>{Qg(i.id)}),{...t,toasts:t.toasts.map(i=>i.id===n||n===void 0?{...i,open:!1}:i)}}case"REMOVE_TOAST":return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(n=>n.id!==e.toastId)}}},wc=[];let Tc={toasts:[]};function wa(t){Tc=oT(Tc,t),wc.forEach(e=>{e(Tc)})}function aT({...t}){const e=sT(),n=r=>wa({type:"UPDATE_TOAST",toast:{...r,id:e}}),i=()=>wa({type:"DISMISS_TOAST",toastId:e});return wa({type:"ADD_TOAST",toast:{...t,id:e,open:!0,onOpenChange:r=>{r||i()}}}),{id:e,dismiss:i,update:n}}function Kp(){const[t,e]=N.useState(Tc);return N.useEffect(()=>(wc.push(e),()=>{const n=wc.indexOf(e);n>-1&&wc.splice(n,1)}),[t]),{...t,toast:aT,dismiss:n=>wa({type:"DISMISS_TOAST",toastId:n})}}function Bt(t,e,{checkForDefaultPrevented:n=!0}={}){return function(r){if(t==null||t(r),n===!1||!r.defaultPrevented)return e==null?void 0:e(r)}}function lT(t,e){typeof t=="function"?t(e):t!=null&&(t.current=e)}function ly(...t){return e=>t.forEach(n=>lT(n,e))}function oi(...t){return N.useCallback(ly(...t),t)}function cT(t,e=[]){let n=[];function i(s,o){const a=N.createContext(o),l=n.length;n=[...n,o];function c(h){const{scope:f,children:m,..._}=h,g=(f==null?void 0:f[t][l])||a,p=N.useMemo(()=>_,Object.values(_));return y.jsx(g.Provider,{value:p,children:m})}function d(h,f){const m=(f==null?void 0:f[t][l])||a,_=N.useContext(m);if(_)return _;if(o!==void 0)return o;throw new Error(`\`${h}\` must be used within \`${s}\``)}return c.displayName=s+"Provider",[c,d]}const r=()=>{const s=n.map(o=>N.createContext(o));return function(a){const l=(a==null?void 0:a[t])||s;return N.useMemo(()=>({[`__scope${t}`]:{...a,[t]:l}}),[a,l])}};return r.scopeName=t,[i,uT(r,...e)]}function uT(...t){const e=t[0];if(t.length===1)return e;const n=()=>{const i=t.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(s){const o=i.reduce((a,{useScope:l,scopeName:c})=>{const h=l(s)[`__scope${c}`];return{...a,...h}},{});return N.useMemo(()=>({[`__scope${e.scopeName}`]:o}),[o])}};return n.scopeName=e.scopeName,n}var Do=N.forwardRef((t,e)=>{const{children:n,...i}=t,r=N.Children.toArray(n),s=r.find(fT);if(s){const o=s.props.children,a=r.map(l=>l===s?N.Children.count(o)>1?N.Children.only(null):N.isValidElement(o)?o.props.children:null:l);return y.jsx(th,{...i,ref:e,children:N.isValidElement(o)?N.cloneElement(o,void 0,a):null})}return y.jsx(th,{...i,ref:e,children:n})});Do.displayName="Slot";var th=N.forwardRef((t,e)=>{const{children:n,...i}=t;if(N.isValidElement(n)){const r=pT(n);return N.cloneElement(n,{...hT(i,n.props),ref:e?ly(e,r):r})}return N.Children.count(n)>1?N.Children.only(null):null});th.displayName="SlotClone";var dT=({children:t})=>y.jsx(y.Fragment,{children:t});function fT(t){return N.isValidElement(t)&&t.type===dT}function hT(t,e){const n={...e};for(const i in e){const r=t[i],s=e[i];/^on[A-Z]/.test(i)?r&&s?n[i]=(...a)=>{s(...a),r(...a)}:r&&(n[i]=r):i==="style"?n[i]={...r,...s}:i==="className"&&(n[i]=[r,s].filter(Boolean).join(" "))}return{...t,...n}}function pT(t){var i,r;let e=(i=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(r=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}function mT(t){const e=t+"CollectionProvider",[n,i]=cT(e),[r,s]=n(e,{collectionRef:{current:null},itemMap:new Map}),o=m=>{const{scope:_,children:g}=m,p=ar.useRef(null),u=ar.useRef(new Map).current;return y.jsx(r,{scope:_,itemMap:u,collectionRef:p,children:g})};o.displayName=e;const a=t+"CollectionSlot",l=ar.forwardRef((m,_)=>{const{scope:g,children:p}=m,u=s(a,g),v=oi(_,u.collectionRef);return y.jsx(Do,{ref:v,children:p})});l.displayName=a;const c=t+"CollectionItemSlot",d="data-radix-collection-item",h=ar.forwardRef((m,_)=>{const{scope:g,children:p,...u}=m,v=ar.useRef(null),x=oi(_,v),S=s(c,g);return ar.useEffect(()=>(S.itemMap.set(v,{ref:v,...u}),()=>void S.itemMap.delete(v))),y.jsx(Do,{[d]:"",ref:x,children:p})});h.displayName=c;function f(m){const _=s(t+"CollectionConsumer",m);return ar.useCallback(()=>{const p=_.collectionRef.current;if(!p)return[];const u=Array.from(p.querySelectorAll(`[${d}]`));return Array.from(_.itemMap.values()).sort((S,C)=>u.indexOf(S.ref.current)-u.indexOf(C.ref.current))},[_.collectionRef,_.itemMap])}return[{Provider:o,Slot:l,ItemSlot:h},f,i]}function gT(t,e){const n=N.createContext(e),i=s=>{const{children:o,...a}=s,l=N.useMemo(()=>a,Object.values(a));return y.jsx(n.Provider,{value:l,children:o})};i.displayName=t+"Provider";function r(s){const o=N.useContext(n);if(o)return o;if(e!==void 0)return e;throw new Error(`\`${s}\` must be used within \`${t}\``)}return[i,r]}function cy(t,e=[]){let n=[];function i(s,o){const a=N.createContext(o),l=n.length;n=[...n,o];const c=h=>{var u;const{scope:f,children:m,..._}=h,g=((u=f==null?void 0:f[t])==null?void 0:u[l])||a,p=N.useMemo(()=>_,Object.values(_));return y.jsx(g.Provider,{value:p,children:m})};c.displayName=s+"Provider";function d(h,f){var g;const m=((g=f==null?void 0:f[t])==null?void 0:g[l])||a,_=N.useContext(m);if(_)return _;if(o!==void 0)return o;throw new Error(`\`${h}\` must be used within \`${s}\``)}return[c,d]}const r=()=>{const s=n.map(o=>N.createContext(o));return function(a){const l=(a==null?void 0:a[t])||s;return N.useMemo(()=>({[`__scope${t}`]:{...a,[t]:l}}),[a,l])}};return r.scopeName=t,[i,vT(r,...e)]}function vT(...t){const e=t[0];if(t.length===1)return e;const n=()=>{const i=t.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(s){const o=i.reduce((a,{useScope:l,scopeName:c})=>{const h=l(s)[`__scope${c}`];return{...a,...h}},{});return N.useMemo(()=>({[`__scope${e.scopeName}`]:o}),[o])}};return n.scopeName=e.scopeName,n}var _T=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Xt=_T.reduce((t,e)=>{const n=N.forwardRef((i,r)=>{const{asChild:s,...o}=i,a=s?Do:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),y.jsx(a,{...o,ref:r})});return n.displayName=`Primitive.${e}`,{...t,[e]:n}},{});function uy(t,e){t&&Au.flushSync(()=>t.dispatchEvent(e))}function ai(t){const e=N.useRef(t);return N.useEffect(()=>{e.current=t}),N.useMemo(()=>(...n)=>{var i;return(i=e.current)==null?void 0:i.call(e,...n)},[])}function xT(t,e=globalThis==null?void 0:globalThis.document){const n=ai(t);N.useEffect(()=>{const i=r=>{r.key==="Escape"&&n(r)};return e.addEventListener("keydown",i,{capture:!0}),()=>e.removeEventListener("keydown",i,{capture:!0})},[n,e])}var yT="DismissableLayer",nh="dismissableLayer.update",ST="dismissableLayer.pointerDownOutside",ET="dismissableLayer.focusOutside",Zg,dy=N.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Qp=N.forwardRef((t,e)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:i,onPointerDownOutside:r,onFocusOutside:s,onInteractOutside:o,onDismiss:a,...l}=t,c=N.useContext(dy),[d,h]=N.useState(null),f=(d==null?void 0:d.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,m]=N.useState({}),_=oi(e,b=>h(b)),g=Array.from(c.layers),[p]=[...c.layersWithOutsidePointerEventsDisabled].slice(-1),u=g.indexOf(p),v=d?g.indexOf(d):-1,x=c.layersWithOutsidePointerEventsDisabled.size>0,S=v>=u,C=wT(b=>{const P=b.target,T=[...c.branches].some(E=>E.contains(P));!S||T||(r==null||r(b),o==null||o(b),b.defaultPrevented||a==null||a())},f),A=TT(b=>{const P=b.target;[...c.branches].some(E=>E.contains(P))||(s==null||s(b),o==null||o(b),b.defaultPrevented||a==null||a())},f);return xT(b=>{v===c.layers.size-1&&(i==null||i(b),!b.defaultPrevented&&a&&(b.preventDefault(),a()))},f),N.useEffect(()=>{if(d)return n&&(c.layersWithOutsidePointerEventsDisabled.size===0&&(Zg=f.body.style.pointerEvents,f.body.style.pointerEvents="none"),c.layersWithOutsidePointerEventsDisabled.add(d)),c.layers.add(d),Jg(),()=>{n&&c.layersWithOutsidePointerEventsDisabled.size===1&&(f.body.style.pointerEvents=Zg)}},[d,f,n,c]),N.useEffect(()=>()=>{d&&(c.layers.delete(d),c.layersWithOutsidePointerEventsDisabled.delete(d),Jg())},[d,c]),N.useEffect(()=>{const b=()=>m({});return document.addEventListener(nh,b),()=>document.removeEventListener(nh,b)},[]),y.jsx(Xt.div,{...l,ref:_,style:{pointerEvents:x?S?"auto":"none":void 0,...t.style},onFocusCapture:Bt(t.onFocusCapture,A.onFocusCapture),onBlurCapture:Bt(t.onBlurCapture,A.onBlurCapture),onPointerDownCapture:Bt(t.onPointerDownCapture,C.onPointerDownCapture)})});Qp.displayName=yT;var MT="DismissableLayerBranch",fy=N.forwardRef((t,e)=>{const n=N.useContext(dy),i=N.useRef(null),r=oi(e,i);return N.useEffect(()=>{const s=i.current;if(s)return n.branches.add(s),()=>{n.branches.delete(s)}},[n.branches]),y.jsx(Xt.div,{...t,ref:r})});fy.displayName=MT;function wT(t,e=globalThis==null?void 0:globalThis.document){const n=ai(t),i=N.useRef(!1),r=N.useRef(()=>{});return N.useEffect(()=>{const s=a=>{if(a.target&&!i.current){let l=function(){hy(ST,n,c,{discrete:!0})};const c={originalEvent:a};a.pointerType==="touch"?(e.removeEventListener("click",r.current),r.current=l,e.addEventListener("click",r.current,{once:!0})):l()}else e.removeEventListener("click",r.current);i.current=!1},o=window.setTimeout(()=>{e.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(o),e.removeEventListener("pointerdown",s),e.removeEventListener("click",r.current)}},[e,n]),{onPointerDownCapture:()=>i.current=!0}}function TT(t,e=globalThis==null?void 0:globalThis.document){const n=ai(t),i=N.useRef(!1);return N.useEffect(()=>{const r=s=>{s.target&&!i.current&&hy(ET,n,{originalEvent:s},{discrete:!1})};return e.addEventListener("focusin",r),()=>e.removeEventListener("focusin",r)},[e,n]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}function Jg(){const t=new CustomEvent(nh);document.dispatchEvent(t)}function hy(t,e,n,{discrete:i}){const r=n.originalEvent.target,s=new CustomEvent(t,{bubbles:!1,cancelable:!0,detail:n});e&&r.addEventListener(t,e,{once:!0}),i?uy(r,s):r.dispatchEvent(s)}var bT=Qp,CT=fy,Ga=globalThis!=null&&globalThis.document?N.useLayoutEffect:()=>{},AT="Portal",Zp=N.forwardRef((t,e)=>{var a;const{container:n,...i}=t,[r,s]=N.useState(!1);Ga(()=>s(!0),[]);const o=n||r&&((a=globalThis==null?void 0:globalThis.document)==null?void 0:a.body);return o?Q1.createPortal(y.jsx(Xt.div,{...i,ref:e}),o):null});Zp.displayName=AT;function RT(t,e){return N.useReducer((n,i)=>e[n][i]??n,t)}var nl=t=>{const{present:e,children:n}=t,i=PT(e),r=typeof n=="function"?n({present:i.isPresent}):N.Children.only(n),s=oi(i.ref,NT(r));return typeof n=="function"||i.isPresent?N.cloneElement(r,{ref:s}):null};nl.displayName="Presence";function PT(t){const[e,n]=N.useState(),i=N.useRef({}),r=N.useRef(t),s=N.useRef("none"),o=t?"mounted":"unmounted",[a,l]=RT(o,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return N.useEffect(()=>{const c=Pl(i.current);s.current=a==="mounted"?c:"none"},[a]),Ga(()=>{const c=i.current,d=r.current;if(d!==t){const f=s.current,m=Pl(c);t?l("MOUNT"):m==="none"||(c==null?void 0:c.display)==="none"?l("UNMOUNT"):l(d&&f!==m?"ANIMATION_OUT":"UNMOUNT"),r.current=t}},[t,l]),Ga(()=>{if(e){let c;const d=e.ownerDocument.defaultView??window,h=m=>{const g=Pl(i.current).includes(m.animationName);if(m.target===e&&g&&(l("ANIMATION_END"),!r.current)){const p=e.style.animationFillMode;e.style.animationFillMode="forwards",c=d.setTimeout(()=>{e.style.animationFillMode==="forwards"&&(e.style.animationFillMode=p)})}},f=m=>{m.target===e&&(s.current=Pl(i.current))};return e.addEventListener("animationstart",f),e.addEventListener("animationcancel",h),e.addEventListener("animationend",h),()=>{d.clearTimeout(c),e.removeEventListener("animationstart",f),e.removeEventListener("animationcancel",h),e.removeEventListener("animationend",h)}}else l("ANIMATION_END")},[e,l]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:N.useCallback(c=>{c&&(i.current=getComputedStyle(c)),n(c)},[])}}function Pl(t){return(t==null?void 0:t.animationName)||"none"}function NT(t){var i,r;let e=(i=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(r=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}function py({prop:t,defaultProp:e,onChange:n=()=>{}}){const[i,r]=DT({defaultProp:e,onChange:n}),s=t!==void 0,o=s?t:i,a=ai(n),l=N.useCallback(c=>{if(s){const h=typeof c=="function"?c(t):c;h!==t&&a(h)}else r(c)},[s,t,r,a]);return[o,l]}function DT({defaultProp:t,onChange:e}){const n=N.useState(t),[i]=n,r=N.useRef(i),s=ai(e);return N.useEffect(()=>{r.current!==i&&(s(i),r.current=i)},[i,r,s]),n}var LT="VisuallyHidden",Jp=N.forwardRef((t,e)=>y.jsx(Xt.span,{...t,ref:e,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...t.style}}));Jp.displayName=LT;var em="ToastProvider",[tm,IT,UT]=mT("Toast"),[my,YL]=cy("Toast",[UT]),[FT,Nu]=my(em),gy=t=>{const{__scopeToast:e,label:n="Notification",duration:i=5e3,swipeDirection:r="right",swipeThreshold:s=50,children:o}=t,[a,l]=N.useState(null),[c,d]=N.useState(0),h=N.useRef(!1),f=N.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${em}\`. Expected non-empty \`string\`.`),y.jsx(tm.Provider,{scope:e,children:y.jsx(FT,{scope:e,label:n,duration:i,swipeDirection:r,swipeThreshold:s,toastCount:c,viewport:a,onViewportChange:l,onToastAdd:N.useCallback(()=>d(m=>m+1),[]),onToastRemove:N.useCallback(()=>d(m=>m-1),[]),isFocusedToastEscapeKeyDownRef:h,isClosePausedRef:f,children:o})})};gy.displayName=em;var vy="ToastViewport",OT=["F8"],ih="toast.viewportPause",rh="toast.viewportResume",_y=N.forwardRef((t,e)=>{const{__scopeToast:n,hotkey:i=OT,label:r="Notifications ({hotkey})",...s}=t,o=Nu(vy,n),a=IT(n),l=N.useRef(null),c=N.useRef(null),d=N.useRef(null),h=N.useRef(null),f=oi(e,h,o.onViewportChange),m=i.join("+").replace(/Key/g,"").replace(/Digit/g,""),_=o.toastCount>0;N.useEffect(()=>{const p=u=>{var x;i.length!==0&&i.every(S=>u[S]||u.code===S)&&((x=h.current)==null||x.focus())};return document.addEventListener("keydown",p),()=>document.removeEventListener("keydown",p)},[i]),N.useEffect(()=>{const p=l.current,u=h.current;if(_&&p&&u){const v=()=>{if(!o.isClosePausedRef.current){const A=new CustomEvent(ih);u.dispatchEvent(A),o.isClosePausedRef.current=!0}},x=()=>{if(o.isClosePausedRef.current){const A=new CustomEvent(rh);u.dispatchEvent(A),o.isClosePausedRef.current=!1}},S=A=>{!p.contains(A.relatedTarget)&&x()},C=()=>{p.contains(document.activeElement)||x()};return p.addEventListener("focusin",v),p.addEventListener("focusout",S),p.addEventListener("pointermove",v),p.addEventListener("pointerleave",C),window.addEventListener("blur",v),window.addEventListener("focus",x),()=>{p.removeEventListener("focusin",v),p.removeEventListener("focusout",S),p.removeEventListener("pointermove",v),p.removeEventListener("pointerleave",C),window.removeEventListener("blur",v),window.removeEventListener("focus",x)}}},[_,o.isClosePausedRef]);const g=N.useCallback(({tabbingDirection:p})=>{const v=a().map(x=>{const S=x.ref.current,C=[S,...KT(S)];return p==="forwards"?C:C.reverse()});return(p==="forwards"?v.reverse():v).flat()},[a]);return N.useEffect(()=>{const p=h.current;if(p){const u=v=>{var C,A,b;const x=v.altKey||v.ctrlKey||v.metaKey;if(v.key==="Tab"&&!x){const P=document.activeElement,T=v.shiftKey;if(v.target===p&&T){(C=c.current)==null||C.focus();return}const k=g({tabbingDirection:T?"backwards":"forwards"}),H=k.findIndex(V=>V===P);vd(k.slice(H+1))?v.preventDefault():T?(A=c.current)==null||A.focus():(b=d.current)==null||b.focus()}};return p.addEventListener("keydown",u),()=>p.removeEventListener("keydown",u)}},[a,g]),y.jsxs(CT,{ref:l,role:"region","aria-label":r.replace("{hotkey}",m),tabIndex:-1,style:{pointerEvents:_?void 0:"none"},children:[_&&y.jsx(sh,{ref:c,onFocusFromOutsideViewport:()=>{const p=g({tabbingDirection:"forwards"});vd(p)}}),y.jsx(tm.Slot,{scope:n,children:y.jsx(Xt.ol,{tabIndex:-1,...s,ref:f})}),_&&y.jsx(sh,{ref:d,onFocusFromOutsideViewport:()=>{const p=g({tabbingDirection:"backwards"});vd(p)}})]})});_y.displayName=vy;var xy="ToastFocusProxy",sh=N.forwardRef((t,e)=>{const{__scopeToast:n,onFocusFromOutsideViewport:i,...r}=t,s=Nu(xy,n);return y.jsx(Jp,{"aria-hidden":!0,tabIndex:0,...r,ref:e,style:{position:"fixed"},onFocus:o=>{var c;const a=o.relatedTarget;!((c=s.viewport)!=null&&c.contains(a))&&i()}})});sh.displayName=xy;var Du="Toast",kT="toast.swipeStart",BT="toast.swipeMove",zT="toast.swipeCancel",VT="toast.swipeEnd",yy=N.forwardRef((t,e)=>{const{forceMount:n,open:i,defaultOpen:r,onOpenChange:s,...o}=t,[a=!0,l]=py({prop:i,defaultProp:r,onChange:s});return y.jsx(nl,{present:n||a,children:y.jsx(WT,{open:a,...o,ref:e,onClose:()=>l(!1),onPause:ai(t.onPause),onResume:ai(t.onResume),onSwipeStart:Bt(t.onSwipeStart,c=>{c.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:Bt(t.onSwipeMove,c=>{const{x:d,y:h}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","move"),c.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${d}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${h}px`)}),onSwipeCancel:Bt(t.onSwipeCancel,c=>{c.currentTarget.setAttribute("data-swipe","cancel"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:Bt(t.onSwipeEnd,c=>{const{x:d,y:h}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","end"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${d}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${h}px`),l(!1)})})})});yy.displayName=Du;var[HT,GT]=my(Du,{onClose(){}}),WT=N.forwardRef((t,e)=>{const{__scopeToast:n,type:i="foreground",duration:r,open:s,onClose:o,onEscapeKeyDown:a,onPause:l,onResume:c,onSwipeStart:d,onSwipeMove:h,onSwipeCancel:f,onSwipeEnd:m,..._}=t,g=Nu(Du,n),[p,u]=N.useState(null),v=oi(e,V=>u(V)),x=N.useRef(null),S=N.useRef(null),C=r||g.duration,A=N.useRef(0),b=N.useRef(C),P=N.useRef(0),{onToastAdd:T,onToastRemove:E}=g,D=ai(()=>{var K;(p==null?void 0:p.contains(document.activeElement))&&((K=g.viewport)==null||K.focus()),o()}),k=N.useCallback(V=>{!V||V===1/0||(window.clearTimeout(P.current),A.current=new Date().getTime(),P.current=window.setTimeout(D,V))},[D]);N.useEffect(()=>{const V=g.viewport;if(V){const K=()=>{k(b.current),c==null||c()},X=()=>{const Z=new Date().getTime()-A.current;b.current=b.current-Z,window.clearTimeout(P.current),l==null||l()};return V.addEventListener(ih,X),V.addEventListener(rh,K),()=>{V.removeEventListener(ih,X),V.removeEventListener(rh,K)}}},[g.viewport,C,l,c,k]),N.useEffect(()=>{s&&!g.isClosePausedRef.current&&k(C)},[s,C,g.isClosePausedRef,k]),N.useEffect(()=>(T(),()=>E()),[T,E]);const H=N.useMemo(()=>p?Cy(p):null,[p]);return g.viewport?y.jsxs(y.Fragment,{children:[H&&y.jsx(jT,{__scopeToast:n,role:"status","aria-live":i==="foreground"?"assertive":"polite","aria-atomic":!0,children:H}),y.jsx(HT,{scope:n,onClose:D,children:Au.createPortal(y.jsx(tm.ItemSlot,{scope:n,children:y.jsx(bT,{asChild:!0,onEscapeKeyDown:Bt(a,()=>{g.isFocusedToastEscapeKeyDownRef.current||D(),g.isFocusedToastEscapeKeyDownRef.current=!1}),children:y.jsx(Xt.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":s?"open":"closed","data-swipe-direction":g.swipeDirection,..._,ref:v,style:{userSelect:"none",touchAction:"none",...t.style},onKeyDown:Bt(t.onKeyDown,V=>{V.key==="Escape"&&(a==null||a(V.nativeEvent),V.nativeEvent.defaultPrevented||(g.isFocusedToastEscapeKeyDownRef.current=!0,D()))}),onPointerDown:Bt(t.onPointerDown,V=>{V.button===0&&(x.current={x:V.clientX,y:V.clientY})}),onPointerMove:Bt(t.onPointerMove,V=>{if(!x.current)return;const K=V.clientX-x.current.x,X=V.clientY-x.current.y,Z=!!S.current,I=["left","right"].includes(g.swipeDirection),$=["left","up"].includes(g.swipeDirection)?Math.min:Math.max,J=I?$(0,K):0,se=I?0:$(0,X),Ee=V.pointerType==="touch"?10:2,ze={x:J,y:se},Y={originalEvent:V,delta:ze};Z?(S.current=ze,Nl(BT,h,Y,{discrete:!1})):ev(ze,g.swipeDirection,Ee)?(S.current=ze,Nl(kT,d,Y,{discrete:!1}),V.target.setPointerCapture(V.pointerId)):(Math.abs(K)>Ee||Math.abs(X)>Ee)&&(x.current=null)}),onPointerUp:Bt(t.onPointerUp,V=>{const K=S.current,X=V.target;if(X.hasPointerCapture(V.pointerId)&&X.releasePointerCapture(V.pointerId),S.current=null,x.current=null,K){const Z=V.currentTarget,I={originalEvent:V,delta:K};ev(K,g.swipeDirection,g.swipeThreshold)?Nl(VT,m,I,{discrete:!0}):Nl(zT,f,I,{discrete:!0}),Z.addEventListener("click",$=>$.preventDefault(),{once:!0})}})})})}),g.viewport)})]}):null}),jT=t=>{const{__scopeToast:e,children:n,...i}=t,r=Nu(Du,e),[s,o]=N.useState(!1),[a,l]=N.useState(!1);return $T(()=>o(!0)),N.useEffect(()=>{const c=window.setTimeout(()=>l(!0),1e3);return()=>window.clearTimeout(c)},[]),a?null:y.jsx(Zp,{asChild:!0,children:y.jsx(Jp,{...i,children:s&&y.jsxs(y.Fragment,{children:[r.label," ",n]})})})},XT="ToastTitle",Sy=N.forwardRef((t,e)=>{const{__scopeToast:n,...i}=t;return y.jsx(Xt.div,{...i,ref:e})});Sy.displayName=XT;var qT="ToastDescription",Ey=N.forwardRef((t,e)=>{const{__scopeToast:n,...i}=t;return y.jsx(Xt.div,{...i,ref:e})});Ey.displayName=qT;var My="ToastAction",wy=N.forwardRef((t,e)=>{const{altText:n,...i}=t;return n.trim()?y.jsx(by,{altText:n,asChild:!0,children:y.jsx(nm,{...i,ref:e})}):(console.error(`Invalid prop \`altText\` supplied to \`${My}\`. Expected non-empty \`string\`.`),null)});wy.displayName=My;var Ty="ToastClose",nm=N.forwardRef((t,e)=>{const{__scopeToast:n,...i}=t,r=GT(Ty,n);return y.jsx(by,{asChild:!0,children:y.jsx(Xt.button,{type:"button",...i,ref:e,onClick:Bt(t.onClick,r.onClose)})})});nm.displayName=Ty;var by=N.forwardRef((t,e)=>{const{__scopeToast:n,altText:i,...r}=t;return y.jsx(Xt.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":i||void 0,...r,ref:e})});function Cy(t){const e=[];return Array.from(t.childNodes).forEach(i=>{if(i.nodeType===i.TEXT_NODE&&i.textContent&&e.push(i.textContent),YT(i)){const r=i.ariaHidden||i.hidden||i.style.display==="none",s=i.dataset.radixToastAnnounceExclude==="";if(!r)if(s){const o=i.dataset.radixToastAnnounceAlt;o&&e.push(o)}else e.push(...Cy(i))}}),e}function Nl(t,e,n,{discrete:i}){const r=n.originalEvent.currentTarget,s=new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:n});e&&r.addEventListener(t,e,{once:!0}),i?uy(r,s):r.dispatchEvent(s)}var ev=(t,e,n=0)=>{const i=Math.abs(t.x),r=Math.abs(t.y),s=i>r;return e==="left"||e==="right"?s&&i>n:!s&&r>n};function $T(t=()=>{}){const e=ai(t);Ga(()=>{let n=0,i=0;return n=window.requestAnimationFrame(()=>i=window.requestAnimationFrame(e)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(i)}},[e])}function YT(t){return t.nodeType===t.ELEMENT_NODE}function KT(t){const e=[],n=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:i=>{const r=i.tagName==="INPUT"&&i.type==="hidden";return i.disabled||i.hidden||r?NodeFilter.FILTER_SKIP:i.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)e.push(n.currentNode);return e}function vd(t){const e=document.activeElement;return t.some(n=>n===e?!0:(n.focus(),document.activeElement!==e))}var QT=gy,Ay=_y,Ry=yy,Py=Sy,Ny=Ey,Dy=wy,Ly=nm;function Iy(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=Iy(t[e]))&&(i&&(i+=" "),i+=n);else for(e in t)t[e]&&(i&&(i+=" "),i+=e);return i}function ZT(){for(var t,e,n=0,i="";n<arguments.length;)(t=arguments[n++])&&(e=Iy(t))&&(i&&(i+=" "),i+=e);return i}const tv=t=>typeof t=="boolean"?"".concat(t):t===0?"0":t,nv=ZT,im=(t,e)=>n=>{var i;if((e==null?void 0:e.variants)==null)return nv(t,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:r,defaultVariants:s}=e,o=Object.keys(r).map(c=>{const d=n==null?void 0:n[c],h=s==null?void 0:s[c];if(d===null)return null;const f=tv(d)||tv(h);return r[c][f]}),a=n&&Object.entries(n).reduce((c,d)=>{let[h,f]=d;return f===void 0||(c[h]=f),c},{}),l=e==null||(i=e.compoundVariants)===null||i===void 0?void 0:i.reduce((c,d)=>{let{class:h,className:f,...m}=d;return Object.entries(m).every(_=>{let[g,p]=_;return Array.isArray(p)?p.includes({...s,...a}[g]):{...s,...a}[g]===p})?[...c,h,f]:c},[]);return nv(t,o,l,n==null?void 0:n.class,n==null?void 0:n.className)};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JT=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Uy=(...t)=>t.filter((e,n,i)=>!!e&&i.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var eb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=N.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>N.createElement("svg",{ref:l,...eb,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:Uy("lucide",r),...a},[...o.map(([c,d])=>N.createElement(c,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=(t,e)=>{const n=N.forwardRef(({className:i,...r},s)=>N.createElement(tb,{ref:s,iconNode:e,className:Uy(`lucide-${JT(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=wt("Atom",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb=wt("Beaker",[["path",{d:"M4.5 3h15",key:"c7n0jr"}],["path",{d:"M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3",key:"m1uhx7"}],["path",{d:"M6 14h12",key:"4cwo0f"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ib=wt("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=wt("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb=wt("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb=wt("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob=wt("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=wt("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=wt("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=wt("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=wt("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=wt("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=wt("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=wt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cb=wt("Microscope",[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=wt("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db=wt("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=wt("School",[["path",{d:"M14 22v-4a2 2 0 1 0-4 0v4",key:"hhkicm"}],["path",{d:"m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2",key:"1vwozw"}],["path",{d:"M18 5v17",key:"1sw6gf"}],["path",{d:"m4 6 8-4 8 4",key:"1q0ilc"}],["path",{d:"M6 5v17",key:"1xfsm0"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb=wt("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=wt("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=wt("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu=wt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function Vy(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(e=0;e<r;e++)t[e]&&(n=Vy(t[e]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n);return i}function mb(){for(var t,e,n=0,i="",r=arguments.length;n<r;n++)(t=arguments[n])&&(e=Vy(t))&&(i&&(i+=" "),i+=e);return i}const om="-",gb=t=>{const e=_b(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:i}=t;return{getClassGroupId:o=>{const a=o.split(om);return a[0]===""&&a.length!==1&&a.shift(),Hy(a,e)||vb(o)},getConflictingClassGroupIds:(o,a)=>{const l=n[o]||[];return a&&i[o]?[...l,...i[o]]:l}}},Hy=(t,e)=>{var o;if(t.length===0)return e.classGroupId;const n=t[0],i=e.nextPart.get(n),r=i?Hy(t.slice(1),i):void 0;if(r)return r;if(e.validators.length===0)return;const s=t.join(om);return(o=e.validators.find(({validator:a})=>a(s)))==null?void 0:o.classGroupId},iv=/^\[(.+)\]$/,vb=t=>{if(iv.test(t)){const e=iv.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},_b=t=>{const{theme:e,prefix:n}=t,i={nextPart:new Map,validators:[]};return yb(Object.entries(t.classGroups),n).forEach(([s,o])=>{ah(o,i,s,e)}),i},ah=(t,e,n,i)=>{t.forEach(r=>{if(typeof r=="string"){const s=r===""?e:rv(e,r);s.classGroupId=n;return}if(typeof r=="function"){if(xb(r)){ah(r(i),e,n,i);return}e.validators.push({validator:r,classGroupId:n});return}Object.entries(r).forEach(([s,o])=>{ah(o,rv(e,s),n,i)})})},rv=(t,e)=>{let n=t;return e.split(om).forEach(i=>{n.nextPart.has(i)||n.nextPart.set(i,{nextPart:new Map,validators:[]}),n=n.nextPart.get(i)}),n},xb=t=>t.isThemeGetter,yb=(t,e)=>e?t.map(([n,i])=>{const r=i.map(s=>typeof s=="string"?e+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([o,a])=>[e+o,a])):s);return[n,r]}):t,Sb=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,i=new Map;const r=(s,o)=>{n.set(s,o),e++,e>t&&(e=0,i=n,n=new Map)};return{get(s){let o=n.get(s);if(o!==void 0)return o;if((o=i.get(s))!==void 0)return r(s,o),o},set(s,o){n.has(s)?n.set(s,o):r(s,o)}}},Gy="!",Eb=t=>{const{separator:e,experimentalParseClassName:n}=t,i=e.length===1,r=e[0],s=e.length,o=a=>{const l=[];let c=0,d=0,h;for(let p=0;p<a.length;p++){let u=a[p];if(c===0){if(u===r&&(i||a.slice(p,p+s)===e)){l.push(a.slice(d,p)),d=p+s;continue}if(u==="/"){h=p;continue}}u==="["?c++:u==="]"&&c--}const f=l.length===0?a:a.substring(d),m=f.startsWith(Gy),_=m?f.substring(1):f,g=h&&h>d?h-d:void 0;return{modifiers:l,hasImportantModifier:m,baseClassName:_,maybePostfixModifierPosition:g}};return n?a=>n({className:a,parseClassName:o}):o},Mb=t=>{if(t.length<=1)return t;const e=[];let n=[];return t.forEach(i=>{i[0]==="["?(e.push(...n.sort(),i),n=[]):n.push(i)}),e.push(...n.sort()),e},wb=t=>({cache:Sb(t.cacheSize),parseClassName:Eb(t),...gb(t)}),Tb=/\s+/,bb=(t,e)=>{const{parseClassName:n,getClassGroupId:i,getConflictingClassGroupIds:r}=e,s=[],o=t.trim().split(Tb);let a="";for(let l=o.length-1;l>=0;l-=1){const c=o[l],{modifiers:d,hasImportantModifier:h,baseClassName:f,maybePostfixModifierPosition:m}=n(c);let _=!!m,g=i(_?f.substring(0,m):f);if(!g){if(!_){a=c+(a.length>0?" "+a:a);continue}if(g=i(f),!g){a=c+(a.length>0?" "+a:a);continue}_=!1}const p=Mb(d).join(":"),u=h?p+Gy:p,v=u+g;if(s.includes(v))continue;s.push(v);const x=r(g,_);for(let S=0;S<x.length;++S){const C=x[S];s.push(u+C)}a=c+(a.length>0?" "+a:a)}return a};function Cb(){let t=0,e,n,i="";for(;t<arguments.length;)(e=arguments[t++])&&(n=Wy(e))&&(i&&(i+=" "),i+=n);return i}const Wy=t=>{if(typeof t=="string")return t;let e,n="";for(let i=0;i<t.length;i++)t[i]&&(e=Wy(t[i]))&&(n&&(n+=" "),n+=e);return n};function Ab(t,...e){let n,i,r,s=o;function o(l){const c=e.reduce((d,h)=>h(d),t());return n=wb(c),i=n.cache.get,r=n.cache.set,s=a,a(l)}function a(l){const c=i(l);if(c)return c;const d=bb(l,n);return r(l,d),d}return function(){return s(Cb.apply(null,arguments))}}const ut=t=>{const e=n=>n[t]||[];return e.isThemeGetter=!0,e},jy=/^\[(?:([a-z-]+):)?(.+)\]$/i,Rb=/^\d+\/\d+$/,Pb=new Set(["px","full","screen"]),Nb=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Db=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Lb=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Ib=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Ub=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,wi=t=>uo(t)||Pb.has(t)||Rb.test(t),Ji=t=>Vo(t,"length",Gb),uo=t=>!!t&&!Number.isNaN(Number(t)),_d=t=>Vo(t,"number",uo),ea=t=>!!t&&Number.isInteger(Number(t)),Fb=t=>t.endsWith("%")&&uo(t.slice(0,-1)),Fe=t=>jy.test(t),er=t=>Nb.test(t),Ob=new Set(["length","size","percentage"]),kb=t=>Vo(t,Ob,Xy),Bb=t=>Vo(t,"position",Xy),zb=new Set(["image","url"]),Vb=t=>Vo(t,zb,jb),Hb=t=>Vo(t,"",Wb),ta=()=>!0,Vo=(t,e,n)=>{const i=jy.exec(t);return i?i[1]?typeof e=="string"?i[1]===e:e.has(i[1]):n(i[2]):!1},Gb=t=>Db.test(t)&&!Lb.test(t),Xy=()=>!1,Wb=t=>Ib.test(t),jb=t=>Ub.test(t),Xb=()=>{const t=ut("colors"),e=ut("spacing"),n=ut("blur"),i=ut("brightness"),r=ut("borderColor"),s=ut("borderRadius"),o=ut("borderSpacing"),a=ut("borderWidth"),l=ut("contrast"),c=ut("grayscale"),d=ut("hueRotate"),h=ut("invert"),f=ut("gap"),m=ut("gradientColorStops"),_=ut("gradientColorStopPositions"),g=ut("inset"),p=ut("margin"),u=ut("opacity"),v=ut("padding"),x=ut("saturate"),S=ut("scale"),C=ut("sepia"),A=ut("skew"),b=ut("space"),P=ut("translate"),T=()=>["auto","contain","none"],E=()=>["auto","hidden","clip","visible","scroll"],D=()=>["auto",Fe,e],k=()=>[Fe,e],H=()=>["",wi,Ji],V=()=>["auto",uo,Fe],K=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],X=()=>["solid","dashed","dotted","double","none"],Z=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],I=()=>["start","end","center","between","around","evenly","stretch"],$=()=>["","0",Fe],J=()=>["auto","avoid","all","avoid-page","page","left","right","column"],se=()=>[uo,Fe];return{cacheSize:500,separator:":",theme:{colors:[ta],spacing:[wi,Ji],blur:["none","",er,Fe],brightness:se(),borderColor:[t],borderRadius:["none","","full",er,Fe],borderSpacing:k(),borderWidth:H(),contrast:se(),grayscale:$(),hueRotate:se(),invert:$(),gap:k(),gradientColorStops:[t],gradientColorStopPositions:[Fb,Ji],inset:D(),margin:D(),opacity:se(),padding:k(),saturate:se(),scale:se(),sepia:$(),skew:se(),space:k(),translate:k()},classGroups:{aspect:[{aspect:["auto","square","video",Fe]}],container:["container"],columns:[{columns:[er]}],"break-after":[{"break-after":J()}],"break-before":[{"break-before":J()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...K(),Fe]}],overflow:[{overflow:E()}],"overflow-x":[{"overflow-x":E()}],"overflow-y":[{"overflow-y":E()}],overscroll:[{overscroll:T()}],"overscroll-x":[{"overscroll-x":T()}],"overscroll-y":[{"overscroll-y":T()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",ea,Fe]}],basis:[{basis:D()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Fe]}],grow:[{grow:$()}],shrink:[{shrink:$()}],order:[{order:["first","last","none",ea,Fe]}],"grid-cols":[{"grid-cols":[ta]}],"col-start-end":[{col:["auto",{span:["full",ea,Fe]},Fe]}],"col-start":[{"col-start":V()}],"col-end":[{"col-end":V()}],"grid-rows":[{"grid-rows":[ta]}],"row-start-end":[{row:["auto",{span:[ea,Fe]},Fe]}],"row-start":[{"row-start":V()}],"row-end":[{"row-end":V()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Fe]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Fe]}],gap:[{gap:[f]}],"gap-x":[{"gap-x":[f]}],"gap-y":[{"gap-y":[f]}],"justify-content":[{justify:["normal",...I()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...I(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...I(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[v]}],px:[{px:[v]}],py:[{py:[v]}],ps:[{ps:[v]}],pe:[{pe:[v]}],pt:[{pt:[v]}],pr:[{pr:[v]}],pb:[{pb:[v]}],pl:[{pl:[v]}],m:[{m:[p]}],mx:[{mx:[p]}],my:[{my:[p]}],ms:[{ms:[p]}],me:[{me:[p]}],mt:[{mt:[p]}],mr:[{mr:[p]}],mb:[{mb:[p]}],ml:[{ml:[p]}],"space-x":[{"space-x":[b]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[b]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Fe,e]}],"min-w":[{"min-w":[Fe,e,"min","max","fit"]}],"max-w":[{"max-w":[Fe,e,"none","full","min","max","fit","prose",{screen:[er]},er]}],h:[{h:[Fe,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Fe,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Fe,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Fe,e,"auto","min","max","fit"]}],"font-size":[{text:["base",er,Ji]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",_d]}],"font-family":[{font:[ta]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Fe]}],"line-clamp":[{"line-clamp":["none",uo,_d]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",wi,Fe]}],"list-image":[{"list-image":["none",Fe]}],"list-style-type":[{list:["none","disc","decimal",Fe]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[u]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[u]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...X(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",wi,Ji]}],"underline-offset":[{"underline-offset":["auto",wi,Fe]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:k()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Fe]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Fe]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[u]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...K(),Bb]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",kb]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Vb]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[_]}],"gradient-via-pos":[{via:[_]}],"gradient-to-pos":[{to:[_]}],"gradient-from":[{from:[m]}],"gradient-via":[{via:[m]}],"gradient-to":[{to:[m]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[u]}],"border-style":[{border:[...X(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[u]}],"divide-style":[{divide:X()}],"border-color":[{border:[r]}],"border-color-x":[{"border-x":[r]}],"border-color-y":[{"border-y":[r]}],"border-color-s":[{"border-s":[r]}],"border-color-e":[{"border-e":[r]}],"border-color-t":[{"border-t":[r]}],"border-color-r":[{"border-r":[r]}],"border-color-b":[{"border-b":[r]}],"border-color-l":[{"border-l":[r]}],"divide-color":[{divide:[r]}],"outline-style":[{outline:["",...X()]}],"outline-offset":[{"outline-offset":[wi,Fe]}],"outline-w":[{outline:[wi,Ji]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:H()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[u]}],"ring-offset-w":[{"ring-offset":[wi,Ji]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",er,Hb]}],"shadow-color":[{shadow:[ta]}],opacity:[{opacity:[u]}],"mix-blend":[{"mix-blend":[...Z(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":Z()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[i]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",er,Fe]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[h]}],saturate:[{saturate:[x]}],sepia:[{sepia:[C]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[i]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[h]}],"backdrop-opacity":[{"backdrop-opacity":[u]}],"backdrop-saturate":[{"backdrop-saturate":[x]}],"backdrop-sepia":[{"backdrop-sepia":[C]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Fe]}],duration:[{duration:se()}],ease:[{ease:["linear","in","out","in-out",Fe]}],delay:[{delay:se()}],animate:[{animate:["none","spin","ping","pulse","bounce",Fe]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[S]}],"scale-x":[{"scale-x":[S]}],"scale-y":[{"scale-y":[S]}],rotate:[{rotate:[ea,Fe]}],"translate-x":[{"translate-x":[P]}],"translate-y":[{"translate-y":[P]}],"skew-x":[{"skew-x":[A]}],"skew-y":[{"skew-y":[A]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Fe]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Fe]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":k()}],"scroll-mx":[{"scroll-mx":k()}],"scroll-my":[{"scroll-my":k()}],"scroll-ms":[{"scroll-ms":k()}],"scroll-me":[{"scroll-me":k()}],"scroll-mt":[{"scroll-mt":k()}],"scroll-mr":[{"scroll-mr":k()}],"scroll-mb":[{"scroll-mb":k()}],"scroll-ml":[{"scroll-ml":k()}],"scroll-p":[{"scroll-p":k()}],"scroll-px":[{"scroll-px":k()}],"scroll-py":[{"scroll-py":k()}],"scroll-ps":[{"scroll-ps":k()}],"scroll-pe":[{"scroll-pe":k()}],"scroll-pt":[{"scroll-pt":k()}],"scroll-pr":[{"scroll-pr":k()}],"scroll-pb":[{"scroll-pb":k()}],"scroll-pl":[{"scroll-pl":k()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Fe]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[wi,Ji,_d]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},qb=Ab(Xb);function Tt(...t){return qb(mb(t))}const $b=QT,qy=N.forwardRef(({className:t,...e},n)=>y.jsx(Ay,{ref:n,className:Tt("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",t),...e}));qy.displayName=Ay.displayName;const Yb=im("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),$y=N.forwardRef(({className:t,variant:e,...n},i)=>y.jsx(Ry,{ref:i,className:Tt(Yb({variant:e}),t),...n}));$y.displayName=Ry.displayName;const Kb=N.forwardRef(({className:t,...e},n)=>y.jsx(Dy,{ref:n,className:Tt("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",t),...e}));Kb.displayName=Dy.displayName;const Yy=N.forwardRef(({className:t,...e},n)=>y.jsx(Ly,{ref:n,className:Tt("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",t),"toast-close":"",...e,children:y.jsx(Lu,{className:"h-4 w-4"})}));Yy.displayName=Ly.displayName;const Ky=N.forwardRef(({className:t,...e},n)=>y.jsx(Py,{ref:n,className:Tt("text-sm font-semibold",t),...e}));Ky.displayName=Py.displayName;const Qy=N.forwardRef(({className:t,...e},n)=>y.jsx(Ny,{ref:n,className:Tt("text-sm opacity-90",t),...e}));Qy.displayName=Ny.displayName;function Qb(){const{toasts:t}=Kp();return y.jsxs($b,{children:[t.map(function({id:e,title:n,description:i,action:r,...s}){return y.jsxs($y,{...s,children:[y.jsxs("div",{className:"grid gap-1",children:[n&&y.jsx(Ky,{children:n}),i&&y.jsx(Qy,{children:i})]}),r,y.jsx(Yy,{})]},e)}),y.jsx(qy,{})]})}const Zy=N.forwardRef(({className:t,...e},n)=>y.jsx("div",{ref:n,className:Tt("rounded-lg border bg-card text-card-foreground shadow-sm",t),...e}));Zy.displayName="Card";const Zb=N.forwardRef(({className:t,...e},n)=>y.jsx("div",{ref:n,className:Tt("flex flex-col space-y-1.5 p-6",t),...e}));Zb.displayName="CardHeader";const Jb=N.forwardRef(({className:t,...e},n)=>y.jsx("h3",{ref:n,className:Tt("text-2xl font-semibold leading-none tracking-tight",t),...e}));Jb.displayName="CardTitle";const eC=N.forwardRef(({className:t,...e},n)=>y.jsx("p",{ref:n,className:Tt("text-sm text-muted-foreground",t),...e}));eC.displayName="CardDescription";const Jy=N.forwardRef(({className:t,...e},n)=>y.jsx("div",{ref:n,className:Tt("p-6 pt-0",t),...e}));Jy.displayName="CardContent";const tC=N.forwardRef(({className:t,...e},n)=>y.jsx("div",{ref:n,className:Tt("flex items-center p-6 pt-0",t),...e}));tC.displayName="CardFooter";function nC(){return y.jsx("div",{className:"min-h-screen w-full flex items-center justify-center bg-gray-50",children:y.jsx(Zy,{className:"w-full max-w-md mx-4",children:y.jsxs(Jy,{className:"pt-6",children:[y.jsxs("div",{className:"flex mb-4 gap-2",children:[y.jsx(sb,{className:"h-8 w-8 text-red-500"}),y.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"404 Page Not Found"})]}),y.jsx("p",{className:"mt-4 text-sm text-gray-600",children:"Did you forget to add the page to the router?"})]})})})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const am="175",iC=0,sv=1,rC=2,eS=1,sC=2,Ni=3,kr=0,_n=1,Ui=2,Lr=0,fo=1,ov=2,av=3,lv=4,oC=5,ts=100,aC=101,lC=102,cC=103,uC=104,dC=200,fC=201,hC=202,pC=203,lh=204,ch=205,mC=206,gC=207,vC=208,_C=209,xC=210,yC=211,SC=212,EC=213,MC=214,uh=0,dh=1,fh=2,Lo=3,hh=4,ph=5,mh=6,gh=7,tS=0,wC=1,TC=2,Ir=0,bC=1,CC=2,AC=3,RC=4,PC=5,NC=6,DC=7,nS=300,Io=301,Uo=302,vh=303,_h=304,Iu=306,xh=1e3,os=1001,yh=1002,ri=1003,LC=1004,Dl=1005,xi=1006,xd=1007,as=1008,Yi=1009,iS=1010,rS=1011,Wa=1012,lm=1013,ys=1014,ki=1015,il=1016,cm=1017,um=1018,ja=1020,sS=35902,oS=1021,aS=1022,ti=1023,lS=1024,cS=1025,Xa=1026,qa=1027,uS=1028,dm=1029,dS=1030,fm=1031,hm=1033,bc=33776,Cc=33777,Ac=33778,Rc=33779,Sh=35840,Eh=35841,Mh=35842,wh=35843,Th=36196,bh=37492,Ch=37496,Ah=37808,Rh=37809,Ph=37810,Nh=37811,Dh=37812,Lh=37813,Ih=37814,Uh=37815,Fh=37816,Oh=37817,kh=37818,Bh=37819,zh=37820,Vh=37821,Pc=36492,Hh=36494,Gh=36495,fS=36283,Wh=36284,jh=36285,Xh=36286,IC=3200,UC=3201,FC=0,OC=1,pr="",Un="srgb",Fo="srgb-linear",ou="linear",st="srgb",Cs=7680,cv=519,kC=512,BC=513,zC=514,hS=515,VC=516,HC=517,GC=518,WC=519,uv=35044,dv="300 es",Bi=2e3,au=2001;class Ho{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yd=Math.PI/180,qh=180/Math.PI;function rl(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[t&255]+Kt[t>>8&255]+Kt[t>>16&255]+Kt[t>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[n&63|128]+Kt[n>>8&255]+"-"+Kt[n>>16&255]+Kt[n>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function Ge(t,e,n){return Math.max(e,Math.min(n,t))}function jC(t,e){return(t%e+e)%e}function Sd(t,e,n){return(1-n)*t+n*e}function na(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function dn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class ot{constructor(e=0,n=0){ot.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ge(this.x,e.x,n.x),this.y=Ge(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ge(this.x,e,n),this.y=Ge(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,n,i,r,s,o,a,l,c){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],h=i[7],f=i[2],m=i[5],_=i[8],g=r[0],p=r[3],u=r[6],v=r[1],x=r[4],S=r[7],C=r[2],A=r[5],b=r[8];return s[0]=o*g+a*v+l*C,s[3]=o*p+a*x+l*A,s[6]=o*u+a*S+l*b,s[1]=c*g+d*v+h*C,s[4]=c*p+d*x+h*A,s[7]=c*u+d*S+h*b,s[2]=f*g+m*v+_*C,s[5]=f*p+m*x+_*A,s[8]=f*u+m*S+_*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*o-a*c,f=a*l-d*s,m=c*s-o*l,_=n*h+i*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(r*c-d*i)*g,e[2]=(a*i-r*o)*g,e[3]=f*g,e[4]=(d*n-r*l)*g,e[5]=(r*s-a*n)*g,e[6]=m*g,e[7]=(i*l-c*n)*g,e[8]=(o*n-i*s)*g,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Ed.makeScale(e,n)),this}rotate(e){return this.premultiply(Ed.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ed.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ed=new Oe;function pS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function lu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function XC(){const t=lu("canvas");return t.style.display="block",t}const fv={};function Nc(t){t in fv||(fv[t]=!0,console.warn(t))}function qC(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function $C(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function YC(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const hv=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pv=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function KC(){const t={enabled:!0,workingColorSpace:Fo,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===st&&(r.r=Hi(r.r),r.g=Hi(r.g),r.b=Hi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===st&&(r.r=ho(r.r),r.g=ho(r.g),r.b=ho(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===pr?ou:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Fo]:{primaries:e,whitePoint:i,transfer:ou,toXYZ:hv,fromXYZ:pv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Un},outputColorSpaceConfig:{drawingBufferColorSpace:Un}},[Un]:{primaries:e,whitePoint:i,transfer:st,toXYZ:hv,fromXYZ:pv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Un}}}),t}const Ze=KC();function Hi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ho(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let As;class QC{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{As===void 0&&(As=lu("canvas")),As.width=e.width,As.height=e.height;const r=As.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=As}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=lu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Hi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Hi(n[i]/255)*255):n[i]=Hi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ZC=0;class pm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ZC++}),this.uuid=rl(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Md(r[o].image)):s.push(Md(r[o]))}else s=Md(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Md(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?QC.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let JC=0;class xn extends Ho{constructor(e=xn.DEFAULT_IMAGE,n=xn.DEFAULT_MAPPING,i=os,r=os,s=xi,o=as,a=ti,l=Yi,c=xn.DEFAULT_ANISOTROPY,d=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:JC++}),this.uuid=rl(),this.name="",this.source=new pm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xh:e.x=e.x-Math.floor(e.x);break;case os:e.x=e.x<0?0:1;break;case yh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xh:e.y=e.y-Math.floor(e.y);break;case os:e.y=e.y<0?0:1;break;case yh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=nS;xn.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,n=0,i=0,r=1){Rt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],m=l[5],_=l[9],g=l[2],p=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,S=(m+1)/2,C=(u+1)/2,A=(d+f)/4,b=(h+g)/4,P=(_+p)/4;return x>S&&x>C?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=A/i,s=b/i):S>C?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=P/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=b/s,r=P/s),this.set(i,r,s,n),this}let v=Math.sqrt((p-_)*(p-_)+(h-g)*(h-g)+(f-d)*(f-d));return Math.abs(v)<.001&&(v=1),this.x=(p-_)/v,this.y=(h-g)/v,this.z=(f-d)/v,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ge(this.x,e.x,n.x),this.y=Ge(this.y,e.y,n.y),this.z=Ge(this.z,e.z,n.z),this.w=Ge(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ge(this.x,e,n),this.y=Ge(this.y,e,n),this.z=Ge(this.z,e,n),this.w=Ge(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eA extends Ho{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Rt(0,0,e,n),this.scissorTest=!1,this.viewport=new Rt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new xn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new pm(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ss extends eA{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class mS extends xn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=ri,this.minFilter=ri,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class tA extends xn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=ri,this.minFilter=ri,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sl{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3];const f=s[o+0],m=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h;return}if(a===1){e[n+0]=f,e[n+1]=m,e[n+2]=_,e[n+3]=g;return}if(h!==g||l!==f||c!==m||d!==_){let p=1-a;const u=l*f+c*m+d*_+h*g,v=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const C=Math.sqrt(x),A=Math.atan2(C,u*v);p=Math.sin(p*A)/C,a=Math.sin(a*A)/C}const S=a*v;if(l=l*p+f*S,c=c*p+m*S,d=d*p+_*S,h=h*p+g*S,p===1-a){const C=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=C,c*=C,d*=C,h*=C}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[o],f=s[o+1],m=s[o+2],_=s[o+3];return e[n]=a*_+d*h+l*m-c*f,e[n+1]=l*_+d*f+c*h-a*m,e[n+2]=c*_+d*m+a*f-l*h,e[n+3]=d*_-a*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),h=a(s/2),f=l(i/2),m=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*d*h+c*m*_,this._y=c*m*h-f*d*_,this._z=c*d*_+f*m*h,this._w=c*d*h-f*m*_;break;case"YXZ":this._x=f*d*h+c*m*_,this._y=c*m*h-f*d*_,this._z=c*d*_-f*m*h,this._w=c*d*h+f*m*_;break;case"ZXY":this._x=f*d*h-c*m*_,this._y=c*m*h+f*d*_,this._z=c*d*_+f*m*h,this._w=c*d*h-f*m*_;break;case"ZYX":this._x=f*d*h-c*m*_,this._y=c*m*h+f*d*_,this._z=c*d*_-f*m*h,this._w=c*d*h+f*m*_;break;case"YZX":this._x=f*d*h+c*m*_,this._y=c*m*h+f*d*_,this._z=c*d*_-f*m*h,this._w=c*d*h-f*m*_;break;case"XZY":this._x=f*d*h-c*m*_,this._y=c*m*h-f*d*_,this._z=c*d*_+f*m*h,this._w=c*d*h+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],h=n[10],f=i+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(d-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),h=Math.sin((1-n)*d)/c,f=Math.sin(n*d)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,n=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(mv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(mv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*d,this.y=i+l*d+a*c-s*h,this.z=r+l*h+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ge(this.x,e.x,n.x),this.y=Ge(this.y,e.y,n.y),this.z=Ge(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ge(this.x,e,n),this.y=Ge(this.y,e,n),this.z=Ge(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return wd.copy(this).projectOnVector(e),this.sub(wd)}reflect(e){return this.sub(wd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wd=new z,mv=new sl;class ol{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Xn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Xn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Xn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Xn):Xn.fromBufferAttribute(s,o),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ll.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ll.copy(i.boundingBox)),Ll.applyMatrix4(e.matrixWorld),this.union(Ll)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ia),Il.subVectors(this.max,ia),Rs.subVectors(e.a,ia),Ps.subVectors(e.b,ia),Ns.subVectors(e.c,ia),tr.subVectors(Ps,Rs),nr.subVectors(Ns,Ps),jr.subVectors(Rs,Ns);let n=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-jr.z,jr.y,tr.z,0,-tr.x,nr.z,0,-nr.x,jr.z,0,-jr.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-jr.y,jr.x,0];return!Td(n,Rs,Ps,Ns,Il)||(n=[1,0,0,0,1,0,0,0,1],!Td(n,Rs,Ps,Ns,Il))?!1:(Ul.crossVectors(tr,nr),n=[Ul.x,Ul.y,Ul.z],Td(n,Rs,Ps,Ns,Il))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ti=[new z,new z,new z,new z,new z,new z,new z,new z],Xn=new z,Ll=new ol,Rs=new z,Ps=new z,Ns=new z,tr=new z,nr=new z,jr=new z,ia=new z,Il=new z,Ul=new z,Xr=new z;function Td(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Xr.fromArray(t,s);const a=r.x*Math.abs(Xr.x)+r.y*Math.abs(Xr.y)+r.z*Math.abs(Xr.z),l=e.dot(Xr),c=n.dot(Xr),d=i.dot(Xr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const nA=new ol,ra=new z,bd=new z;class al{constructor(e=new z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):nA.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ra.subVectors(e,this.center);const n=ra.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ra,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ra.copy(e.center).add(bd)),this.expandByPoint(ra.copy(e.center).sub(bd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bi=new z,Cd=new z,Fl=new z,ir=new z,Ad=new z,Ol=new z,Rd=new z;class mm{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=bi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,n),bi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Cd.copy(e).add(n).multiplyScalar(.5),Fl.copy(n).sub(e).normalize(),ir.copy(this.origin).sub(Cd);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Fl),a=ir.dot(this.direction),l=-ir.dot(Fl),c=ir.lengthSq(),d=Math.abs(1-o*o);let h,f,m,_;if(d>0)if(h=o*l-a,f=o*a-l,_=s*d,h>=0)if(f>=-_)if(f<=_){const g=1/d;h*=g,f*=g,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Cd).addScaledVector(Fl,f),m}intersectSphere(e,n){bi.subVectors(e.center,this.origin);const i=bi.dot(this.direction),r=bi.dot(bi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,n,i,r,s){Ad.subVectors(n,e),Ol.subVectors(i,e),Rd.crossVectors(Ad,Ol);let o=this.direction.dot(Rd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ir.subVectors(this.origin,e);const l=a*this.direction.dot(Ol.crossVectors(ir,Ol));if(l<0)return null;const c=a*this.direction.dot(Ad.cross(ir));if(c<0||l+c>o)return null;const d=-a*ir.dot(Rd);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(e,n,i,r,s,o,a,l,c,d,h,f,m,_,g,p){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,h,f,m,_,g,p)}set(e,n,i,r,s,o,a,l,c,d,h,f,m,_,g,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=m,u[7]=_,u[11]=g,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Ds.setFromMatrixColumn(e,0).length(),s=1/Ds.setFromMatrixColumn(e,1).length(),o=1/Ds.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*d,m=o*h,_=a*d,g=a*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=m+_*c,n[5]=f-g*c,n[9]=-a*l,n[2]=g-f*c,n[6]=_+m*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*d,m=l*h,_=c*d,g=c*h;n[0]=f+g*a,n[4]=_*a-m,n[8]=o*c,n[1]=o*h,n[5]=o*d,n[9]=-a,n[2]=m*a-_,n[6]=g+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*d,m=l*h,_=c*d,g=c*h;n[0]=f-g*a,n[4]=-o*h,n[8]=_+m*a,n[1]=m+_*a,n[5]=o*d,n[9]=g-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*d,m=o*h,_=a*d,g=a*h;n[0]=l*d,n[4]=_*c-m,n[8]=f*c+g,n[1]=l*h,n[5]=g*c+f,n[9]=m*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,_=a*l,g=a*c;n[0]=l*d,n[4]=g-f*h,n[8]=_*h+m,n[1]=h,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=m*h+_,n[10]=f-g*h}else if(e.order==="XZY"){const f=o*l,m=o*c,_=a*l,g=a*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=f*h+g,n[5]=o*d,n[9]=m*h-_,n[2]=_*h-m,n[6]=a*d,n[10]=g*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(iA,e,rA)}lookAt(e,n,i){const r=this.elements;return Sn.subVectors(e,n),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),rr.crossVectors(i,Sn),rr.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),rr.crossVectors(i,Sn)),rr.normalize(),kl.crossVectors(Sn,rr),r[0]=rr.x,r[4]=kl.x,r[8]=Sn.x,r[1]=rr.y,r[5]=kl.y,r[9]=Sn.y,r[2]=rr.z,r[6]=kl.z,r[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],h=i[5],f=i[9],m=i[13],_=i[2],g=i[6],p=i[10],u=i[14],v=i[3],x=i[7],S=i[11],C=i[15],A=r[0],b=r[4],P=r[8],T=r[12],E=r[1],D=r[5],k=r[9],H=r[13],V=r[2],K=r[6],X=r[10],Z=r[14],I=r[3],$=r[7],J=r[11],se=r[15];return s[0]=o*A+a*E+l*V+c*I,s[4]=o*b+a*D+l*K+c*$,s[8]=o*P+a*k+l*X+c*J,s[12]=o*T+a*H+l*Z+c*se,s[1]=d*A+h*E+f*V+m*I,s[5]=d*b+h*D+f*K+m*$,s[9]=d*P+h*k+f*X+m*J,s[13]=d*T+h*H+f*Z+m*se,s[2]=_*A+g*E+p*V+u*I,s[6]=_*b+g*D+p*K+u*$,s[10]=_*P+g*k+p*X+u*J,s[14]=_*T+g*H+p*Z+u*se,s[3]=v*A+x*E+S*V+C*I,s[7]=v*b+x*D+S*K+C*$,s[11]=v*P+x*k+S*X+C*J,s[15]=v*T+x*H+S*Z+C*se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],f=e[10],m=e[14],_=e[3],g=e[7],p=e[11],u=e[15];return _*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*m-i*l*m)+g*(+n*l*m-n*c*f+s*o*f-r*o*m+r*c*d-s*l*d)+p*(+n*c*h-n*a*m-s*o*h+i*o*m+s*a*d-i*c*d)+u*(-r*a*d-n*l*h+n*a*f+r*o*h-i*o*f+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],f=e[10],m=e[11],_=e[12],g=e[13],p=e[14],u=e[15],v=h*p*c-g*f*c+g*l*m-a*p*m-h*l*u+a*f*u,x=_*f*c-d*p*c-_*l*m+o*p*m+d*l*u-o*f*u,S=d*g*c-_*h*c+_*a*m-o*g*m-d*a*u+o*h*u,C=_*h*l-d*g*l-_*a*f+o*g*f+d*a*p-o*h*p,A=n*v+i*x+r*S+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=v*b,e[1]=(g*f*s-h*p*s-g*r*m+i*p*m+h*r*u-i*f*u)*b,e[2]=(a*p*s-g*l*s+g*r*c-i*p*c-a*r*u+i*l*u)*b,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*m-i*l*m)*b,e[4]=x*b,e[5]=(d*p*s-_*f*s+_*r*m-n*p*m-d*r*u+n*f*u)*b,e[6]=(_*l*s-o*p*s-_*r*c+n*p*c+o*r*u-n*l*u)*b,e[7]=(o*f*s-d*l*s+d*r*c-n*f*c-o*r*m+n*l*m)*b,e[8]=S*b,e[9]=(_*h*s-d*g*s-_*i*m+n*g*m+d*i*u-n*h*u)*b,e[10]=(o*g*s-_*a*s+_*i*c-n*g*c-o*i*u+n*a*u)*b,e[11]=(d*a*s-o*h*s-d*i*c+n*h*c+o*i*m-n*a*m)*b,e[12]=C*b,e[13]=(d*g*r-_*h*r+_*i*f-n*g*f-d*i*p+n*h*p)*b,e[14]=(_*a*r-o*g*r-_*i*l+n*g*l+o*i*p-n*a*p)*b,e[15]=(o*h*r-d*a*r+d*i*l-n*h*l-o*i*f+n*a*f)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,h=a+a,f=s*c,m=s*d,_=s*h,g=o*d,p=o*h,u=a*h,v=l*c,x=l*d,S=l*h,C=i.x,A=i.y,b=i.z;return r[0]=(1-(g+u))*C,r[1]=(m+S)*C,r[2]=(_-x)*C,r[3]=0,r[4]=(m-S)*A,r[5]=(1-(f+u))*A,r[6]=(p+v)*A,r[7]=0,r[8]=(_+x)*b,r[9]=(p-v)*b,r[10]=(1-(f+g))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Ds.set(r[0],r[1],r[2]).length();const o=Ds.set(r[4],r[5],r[6]).length(),a=Ds.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],qn.copy(this);const c=1/s,d=1/o,h=1/a;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=d,qn.elements[5]*=d,qn.elements[6]*=d,qn.elements[8]*=h,qn.elements[9]*=h,qn.elements[10]*=h,n.setFromRotationMatrix(qn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Bi){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let m,_;if(a===Bi)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===au)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Bi){const l=this.elements,c=1/(n-e),d=1/(i-r),h=1/(o-s),f=(n+e)*c,m=(i+r)*d;let _,g;if(a===Bi)_=(o+s)*h,g=-2*h;else if(a===au)_=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ds=new z,qn=new Mt,iA=new z(0,0,0),rA=new z(1,1,1),rr=new z,kl=new z,Sn=new z,gv=new Mt,vv=new sl;class Ki{constructor(e=0,n=0,i=0,r=Ki.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],h=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return gv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gv,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return vv.setFromEuler(this),this.setFromQuaternion(vv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ki.DEFAULT_ORDER="XYZ";class gS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sA=0;const _v=new z,Ls=new sl,Ci=new Mt,Bl=new z,sa=new z,oA=new z,aA=new sl,xv=new z(1,0,0),yv=new z(0,1,0),Sv=new z(0,0,1),Ev={type:"added"},lA={type:"removed"},Is={type:"childadded",child:null},Pd={type:"childremoved",child:null};class an extends Ho{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sA++}),this.uuid=rl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const e=new z,n=new Ki,i=new sl,r=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Oe}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ls.setFromAxisAngle(e,n),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,n){return Ls.setFromAxisAngle(e,n),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(xv,e)}rotateY(e){return this.rotateOnAxis(yv,e)}rotateZ(e){return this.rotateOnAxis(Sv,e)}translateOnAxis(e,n){return _v.copy(e).applyQuaternion(this.quaternion),this.position.add(_v.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(xv,e)}translateY(e){return this.translateOnAxis(yv,e)}translateZ(e){return this.translateOnAxis(Sv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Bl.copy(e):Bl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(sa,Bl,this.up):Ci.lookAt(Bl,sa,this.up),this.quaternion.setFromRotationMatrix(Ci),r&&(Ci.extractRotation(r.matrixWorld),Ls.setFromRotationMatrix(Ci),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ev),Is.child=e,this.dispatchEvent(Is),Is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(lA),Pd.child=e,this.dispatchEvent(Pd),Pd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ev),Is.child=e,this.dispatchEvent(Is),Is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,e,oA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,aA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}an.DEFAULT_UP=new z(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $n=new z,Ai=new z,Nd=new z,Ri=new z,Us=new z,Fs=new z,Mv=new z,Dd=new z,Ld=new z,Id=new z,Ud=new Rt,Fd=new Rt,Od=new Rt;class ei{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),$n.subVectors(e,n),r.cross($n);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){$n.subVectors(r,n),Ai.subVectors(i,n),Nd.subVectors(e,n);const o=$n.dot($n),a=$n.dot(Ai),l=$n.dot(Nd),c=Ai.dot(Ai),d=Ai.dot(Nd),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(c*l-a*d)*f,_=(o*d-a*l)*f;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ri.x),l.addScaledVector(o,Ri.y),l.addScaledVector(a,Ri.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Ud.setScalar(0),Fd.setScalar(0),Od.setScalar(0),Ud.fromBufferAttribute(e,n),Fd.fromBufferAttribute(e,i),Od.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ud,s.x),o.addScaledVector(Fd,s.y),o.addScaledVector(Od,s.z),o}static isFrontFacing(e,n,i,r){return $n.subVectors(i,n),Ai.subVectors(e,n),$n.cross(Ai).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),$n.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ei.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ei.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Us.subVectors(r,i),Fs.subVectors(s,i),Dd.subVectors(e,i);const l=Us.dot(Dd),c=Fs.dot(Dd);if(l<=0&&c<=0)return n.copy(i);Ld.subVectors(e,r);const d=Us.dot(Ld),h=Fs.dot(Ld);if(d>=0&&h<=d)return n.copy(r);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(Us,o);Id.subVectors(e,s);const m=Us.dot(Id),_=Fs.dot(Id);if(_>=0&&m<=_)return n.copy(s);const g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(Fs,a);const p=d*_-m*h;if(p<=0&&h-d>=0&&m-_>=0)return Mv.subVectors(s,r),a=(h-d)/(h-d+(m-_)),n.copy(r).addScaledVector(Mv,a);const u=1/(p+g+f);return o=g*u,a=f*u,n.copy(i).addScaledVector(Us,o).addScaledVector(Fs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sr={h:0,s:0,l:0},zl={h:0,s:0,l:0};function kd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class nt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=jC(e,1),n=Ge(n,0,1),i=Ge(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=kd(o,s,e+1/3),this.g=kd(o,s,e),this.b=kd(o,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,n=Un){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Un){const i=vS[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=ho(e.r),this.g=ho(e.g),this.b=ho(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Un){return Ze.fromWorkingColorSpace(Qt.copy(this),e),Math.round(Ge(Qt.r*255,0,255))*65536+Math.round(Ge(Qt.g*255,0,255))*256+Math.round(Ge(Qt.b*255,0,255))}getHexString(e=Un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Qt.copy(this),n);const i=Qt.r,r=Qt.g,s=Qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Qt.copy(this),n),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=Un){Ze.fromWorkingColorSpace(Qt.copy(this),e);const n=Qt.r,i=Qt.g,r=Qt.b;return e!==Un?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(sr),this.setHSL(sr.h+e,sr.s+n,sr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(sr),e.getHSL(zl);const i=Sd(sr.h,zl.h,n),r=Sd(sr.s,zl.s,n),s=Sd(sr.l,zl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new nt;nt.NAMES=vS;let cA=0;class Go extends Ho{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cA++}),this.uuid=rl(),this.name="",this.type="Material",this.blending=fo,this.side=kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lh,this.blendDst=ch,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=Lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fo&&(i.blending=this.blending),this.side!==kr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==lh&&(i.blendSrc=this.blendSrc),this.blendDst!==ch&&(i.blendDst=this.blendDst),this.blendEquation!==ts&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Lo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class _S extends Go{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.combine=tS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nt=new z,Vl=new ot;let uA=0;class Ei{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uA++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=uv,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Vl.fromBufferAttribute(this,n),Vl.applyMatrix3(e),this.setXY(n,Vl.x,Vl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix3(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix4(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyNormalMatrix(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.transformDirection(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=na(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=dn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=na(n,this.array)),n}setX(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=na(n,this.array)),n}setY(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=na(n,this.array)),n}setZ(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=na(n,this.array)),n}setW(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array),r=dn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array),r=dn(r,this.array),s=dn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uv&&(e.usage=this.usage),e}}class xS extends Ei{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class yS extends Ei{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Gi extends Ei{constructor(e,n,i){super(new Float32Array(e),n,i)}}let dA=0;const Ln=new Mt,Bd=new an,Os=new z,En=new ol,oa=new ol,Ot=new z;class li extends Ho{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dA++}),this.uuid=rl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pS(e)?yS:xS)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,n,i){return Ln.makeTranslation(e,n,i),this.applyMatrix4(Ln),this}scale(e,n,i){return Ln.makeScale(e,n,i),this.applyMatrix4(Ln),this}lookAt(e){return Bd.lookAt(e),Bd.updateMatrix(),this.applyMatrix4(Bd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Gi(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ol);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];En.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new al);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];oa.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(En.min,oa.min),En.expandByPoint(Ot),Ot.addVectors(En.max,oa.max),En.expandByPoint(Ot)):(En.expandByPoint(oa.min),En.expandByPoint(oa.max))}En.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ot.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ot));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Ot.fromBufferAttribute(a,c),l&&(Os.fromBufferAttribute(e,c),Ot.add(Os)),r=Math.max(r,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ei(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new z,l[P]=new z;const c=new z,d=new z,h=new z,f=new ot,m=new ot,_=new ot,g=new z,p=new z;function u(P,T,E){c.fromBufferAttribute(i,P),d.fromBufferAttribute(i,T),h.fromBufferAttribute(i,E),f.fromBufferAttribute(s,P),m.fromBufferAttribute(s,T),_.fromBufferAttribute(s,E),d.sub(c),h.sub(c),m.sub(f),_.sub(f);const D=1/(m.x*_.y-_.x*m.y);isFinite(D)&&(g.copy(d).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(D),p.copy(h).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(D),a[P].add(g),a[T].add(g),a[E].add(g),l[P].add(p),l[T].add(p),l[E].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,T=v.length;P<T;++P){const E=v[P],D=E.start,k=E.count;for(let H=D,V=D+k;H<V;H+=3)u(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const x=new z,S=new z,C=new z,A=new z;function b(P){C.fromBufferAttribute(r,P),A.copy(C);const T=a[P];x.copy(T),x.sub(C.multiplyScalar(C.dot(T))).normalize(),S.crossVectors(A,T);const D=S.dot(l[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,D)}for(let P=0,T=v.length;P<T;++P){const E=v[P],D=E.start,k=E.count;for(let H=D,V=D+k;H<V;H+=3)b(e.getX(H+0)),b(e.getX(H+1)),b(e.getX(H+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ei(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,d=new z,h=new z;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),g=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,g),o.fromBufferAttribute(n,p),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,p),a.add(d),l.add(d),c.add(d),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ot.fromBufferAttribute(e,n),Ot.normalize(),e.setXYZ(n,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,h=a.normalized,f=new c.constructor(l.length*d);let m=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*d;for(let u=0;u<d;u++)f[_++]=c[m++]}return new Ei(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new li,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,h=c.length;d<h;d++){const f=c[d],m=e(f,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let f=0,m=h.length;f<m;f++)d.push(h[f].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wv=new Mt,qr=new mm,Hl=new al,Tv=new z,Gl=new z,Wl=new z,jl=new z,zd=new z,Xl=new z,bv=new z,ql=new z;class zi extends an{constructor(e=new li,n=new _S){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Xl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],h=s[l];d!==0&&(zd.fromBufferAttribute(h,e),o?Xl.addScaledVector(zd,d):Xl.addScaledVector(zd.sub(n),d))}n.add(Xl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Hl.copy(i.boundingSphere),Hl.applyMatrix4(s),qr.copy(e.ray).recast(e.near),!(Hl.containsPoint(qr.origin)===!1&&(qr.intersectSphere(Hl,Tv)===null||qr.origin.distanceToSquared(Tv)>(e.far-e.near)**2))&&(wv.copy(s).invert(),qr.copy(e.ray).applyMatrix4(wv),!(i.boundingBox!==null&&qr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,qr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],u=o[p.materialIndex],v=Math.max(p.start,m.start),x=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let S=v,C=x;S<C;S+=3){const A=a.getX(S),b=a.getX(S+1),P=a.getX(S+2);r=$l(this,u,e,i,c,d,h,A,b,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let p=_,u=g;p<u;p+=3){const v=a.getX(p),x=a.getX(p+1),S=a.getX(p+2);r=$l(this,o,e,i,c,d,h,v,x,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],u=o[p.materialIndex],v=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=v,C=x;S<C;S+=3){const A=S,b=S+1,P=S+2;r=$l(this,u,e,i,c,d,h,A,b,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=_,u=g;p<u;p+=3){const v=p,x=p+1,S=p+2;r=$l(this,o,e,i,c,d,h,v,x,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function fA(t,e,n,i,r,s,o,a){let l;if(e.side===_n?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===kr,a),l===null)return null;ql.copy(a),ql.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ql);return c<n.near||c>n.far?null:{distance:c,point:ql.clone(),object:t}}function $l(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Gl),t.getVertexPosition(l,Wl),t.getVertexPosition(c,jl);const d=fA(t,e,n,i,Gl,Wl,jl,bv);if(d){const h=new z;ei.getBarycoord(bv,Gl,Wl,jl,h),r&&(d.uv=ei.getInterpolatedAttribute(r,a,l,c,h,new ot)),s&&(d.uv1=ei.getInterpolatedAttribute(s,a,l,c,h,new ot)),o&&(d.normal=ei.getInterpolatedAttribute(o,a,l,c,h,new z),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new z,materialIndex:0};ei.getNormal(Gl,Wl,jl,f.normal),d.face=f,d.barycoord=h}return d}class ll extends li{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],h=[];let f=0,m=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Gi(c,3)),this.setAttribute("normal",new Gi(d,3)),this.setAttribute("uv",new Gi(h,2));function _(g,p,u,v,x,S,C,A,b,P,T){const E=S/b,D=C/P,k=S/2,H=C/2,V=A/2,K=b+1,X=P+1;let Z=0,I=0;const $=new z;for(let J=0;J<X;J++){const se=J*D-H;for(let Ee=0;Ee<K;Ee++){const ze=Ee*E-k;$[g]=ze*v,$[p]=se*x,$[u]=V,c.push($.x,$.y,$.z),$[g]=0,$[p]=0,$[u]=A>0?1:-1,d.push($.x,$.y,$.z),h.push(Ee/b),h.push(1-J/P),Z+=1}}for(let J=0;J<P;J++)for(let se=0;se<b;se++){const Ee=f+se+K*J,ze=f+se+K*(J+1),Y=f+(se+1)+K*(J+1),ae=f+(se+1)+K*J;l.push(Ee,ze,ae),l.push(ze,Y,ae),I+=6}a.addGroup(m,I,T),m+=I,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ll(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Oo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function nn(t){const e={};for(let n=0;n<t.length;n++){const i=Oo(t[n]);for(const r in i)e[r]=i[r]}return e}function hA(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function SS(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const pA={clone:Oo,merge:nn};var mA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Br extends Go{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mA,this.fragmentShader=gA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oo(e.uniforms),this.uniformsGroups=hA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class ES extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=Bi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const or=new z,Cv=new ot,Av=new ot;class kn extends ES{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=qh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qh*2*Math.atan(Math.tan(yd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(or.x,or.y).multiplyScalar(-e/or.z),or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(or.x,or.y).multiplyScalar(-e/or.z)}getViewSize(e,n){return this.getViewBounds(e,Cv,Av),n.subVectors(Av,Cv)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(yd*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ks=-90,Bs=1;class vA extends an{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new kn(ks,Bs,e,n);r.layers=this.layers,this.add(r);const s=new kn(ks,Bs,e,n);s.layers=this.layers,this.add(s);const o=new kn(ks,Bs,e,n);o.layers=this.layers,this.add(o);const a=new kn(ks,Bs,e,n);a.layers=this.layers,this.add(a);const l=new kn(ks,Bs,e,n);l.layers=this.layers,this.add(l);const c=new kn(ks,Bs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Bi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===au)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(h,f,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class MS extends xn{constructor(e=[],n=Io,i,r,s,o,a,l,c,d){super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _A extends Ss{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new MS(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:xi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ll(5,5,5),s=new Br({name:"CubemapFromEquirect",uniforms:Oo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:Lr});s.uniforms.tEquirect.value=n;const o=new zi(r,s),a=n.minFilter;return n.minFilter===as&&(n.minFilter=xi),new vA(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class Yl extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xA={type:"move"};class Vd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const p=n.getJointPose(g,i),u=this._getHandJoint(c,g);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Yl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class yA extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ki,this.environmentIntensity=1,this.environmentRotation=new Ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Hd=new z,SA=new z,EA=new Oe;class Jr{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Hd.subVectors(i,n).cross(SA.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Hd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||EA.getNormalMatrix(e),r=this.coplanarPoint(Hd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $r=new al,Kl=new z;class wS{constructor(e=new Jr,n=new Jr,i=new Jr,r=new Jr,s=new Jr,o=new Jr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Bi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],h=r[6],f=r[7],m=r[8],_=r[9],g=r[10],p=r[11],u=r[12],v=r[13],x=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,p-m,S-u).normalize(),i[1].setComponents(l+s,f+c,p+m,S+u).normalize(),i[2].setComponents(l+o,f+d,p+_,S+v).normalize(),i[3].setComponents(l-o,f-d,p-_,S-v).normalize(),i[4].setComponents(l-a,f-h,p-g,S-x).normalize(),n===Bi)i[5].setComponents(l+a,f+h,p+g,S+x).normalize();else if(n===au)i[5].setComponents(a,h,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($r)}intersectsSprite(e){return $r.center.set(0,0,0),$r.radius=.7071067811865476,$r.applyMatrix4(e.matrixWorld),this.intersectsSphere($r)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Kl.x=r.normal.x>0?e.max.x:e.min.x,Kl.y=r.normal.y>0?e.max.y:e.min.y,Kl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Kl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class TS extends Go{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const cu=new z,uu=new z,Rv=new Mt,aa=new mm,Ql=new al,Gd=new z,Pv=new z;class MA extends an{constructor(e=new li,n=new TS){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)cu.fromBufferAttribute(n,r-1),uu.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=cu.distanceTo(uu);e.setAttribute("lineDistance",new Gi(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ql.copy(i.boundingSphere),Ql.applyMatrix4(r),Ql.radius+=s,e.ray.intersectsSphere(Ql)===!1)return;Rv.copy(r).invert(),aa.copy(e.ray).applyMatrix4(Rv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=i.index,f=i.attributes.position;if(d!==null){const m=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let g=m,p=_-1;g<p;g+=c){const u=d.getX(g),v=d.getX(g+1),x=Zl(this,e,aa,l,u,v,g);x&&n.push(x)}if(this.isLineLoop){const g=d.getX(_-1),p=d.getX(m),u=Zl(this,e,aa,l,g,p,_-1);u&&n.push(u)}}else{const m=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let g=m,p=_-1;g<p;g+=c){const u=Zl(this,e,aa,l,g,g+1,g);u&&n.push(u)}if(this.isLineLoop){const g=Zl(this,e,aa,l,_-1,m,_-1);g&&n.push(g)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Zl(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(cu.fromBufferAttribute(a,r),uu.fromBufferAttribute(a,s),n.distanceSqToSegment(cu,uu,Gd,Pv)>i)return;Gd.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(Gd);if(!(c<e.near||c>e.far))return{distance:c,point:Pv.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}class bS extends Go{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Nv=new Mt,$h=new mm,Jl=new al,ec=new z;class wA extends an{constructor(e=new li,n=new bS){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Jl.copy(i.boundingSphere),Jl.applyMatrix4(r),Jl.radius+=s,e.ray.intersectsSphere(Jl)===!1)return;Nv.copy(r).invert(),$h.copy(e.ray).applyMatrix4(Nv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let _=f,g=m;_<g;_++){const p=c.getX(_);ec.fromBufferAttribute(h,p),Dv(ec,p,l,r,e,n,this)}}else{const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=f,g=m;_<g;_++)ec.fromBufferAttribute(h,_),Dv(ec,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Dv(t,e,n,i,r,s,o){const a=$h.distanceSqToPoint(t);if(a<n){const l=new z;$h.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class CS extends xn{constructor(e,n,i=ys,r,s,o,a=ri,l=ri,c,d=Xa){if(d!==Xa&&d!==qa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new pm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Uu extends li{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,h=e/a,f=n/l,m=[],_=[],g=[],p=[];for(let u=0;u<d;u++){const v=u*f-o;for(let x=0;x<c;x++){const S=x*h-s;_.push(S,-v,0),g.push(0,0,1),p.push(x/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<a;v++){const x=v+c*u,S=v+c*(u+1),C=v+1+c*(u+1),A=v+1+c*u;m.push(x,S,A),m.push(S,C,A)}this.setIndex(m),this.setAttribute("position",new Gi(_,3)),this.setAttribute("normal",new Gi(g,3)),this.setAttribute("uv",new Gi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uu(e.width,e.height,e.widthSegments,e.heightSegments)}}class TA extends Go{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=IC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bA extends Go{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class CA extends ES{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class AA extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}function Lv(t,e,n,i){const r=RA(i);switch(n){case oS:return t*e;case lS:return t*e;case cS:return t*e*2;case uS:return t*e/r.components*r.byteLength;case dm:return t*e/r.components*r.byteLength;case dS:return t*e*2/r.components*r.byteLength;case fm:return t*e*2/r.components*r.byteLength;case aS:return t*e*3/r.components*r.byteLength;case ti:return t*e*4/r.components*r.byteLength;case hm:return t*e*4/r.components*r.byteLength;case bc:case Cc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ac:case Rc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Eh:case wh:return Math.max(t,16)*Math.max(e,8)/4;case Sh:case Mh:return Math.max(t,8)*Math.max(e,8)/2;case Th:case bh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ch:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ah:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Rh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Ph:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Dh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Lh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Uh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Fh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Oh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case kh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Bh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case zh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Vh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Pc:case Hh:case Gh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case fS:case Wh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case jh:case Xh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function RA(t){switch(t){case Yi:case iS:return{byteLength:1,components:1};case Wa:case rS:case il:return{byteLength:2,components:1};case cm:case um:return{byteLength:2,components:4};case ys:case lm:case ki:return{byteLength:4,components:1};case sS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:am}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=am);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function AS(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function PA(t){const e=new WeakMap;function n(a,l){const c=a.array,d=a.usage,h=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,d),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const d=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,d);else{h.sort((m,_)=>m.start-_.start);let f=0;for(let m=1;m<h.length;m++){const _=h[f],g=h[m];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,h[f]=g)}h.length=f+1;for(let m=0,_=h.length;m<_;m++){const g=h[m];t.bufferSubData(c,g.start*d.BYTES_PER_ELEMENT,d,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var NA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,DA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,LA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,IA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,FA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,OA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,BA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,zA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,VA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,HA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,GA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,WA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,XA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,qA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$A=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,YA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,KA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,QA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ZA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,JA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,eR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,tR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,nR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,iR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aR="gl_FragColor = linearToOutputTexel( gl_FragColor );",lR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,uR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,pR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_R=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,SR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ER=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,MR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,wR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,TR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,CR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,AR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,RR=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,PR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,NR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,DR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,LR=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,IR=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UR=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FR=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,OR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,BR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,HR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,GR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,WR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$R=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,YR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,KR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,JR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,e2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,t2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,n2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,i2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,r2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,s2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,o2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,a2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,l2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,c2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,u2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,d2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,f2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,h2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,p2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,m2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,g2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,v2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,x2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,y2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,S2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,E2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,M2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,w2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,T2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,b2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,C2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,A2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,R2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const P2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,N2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,O2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,k2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,B2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,z2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,V2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,G2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,W2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,j2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,q2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Y2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Q2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Z2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eP=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tP=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nP=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iP=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rP=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oP=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aP=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lP=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:NA,alphahash_pars_fragment:DA,alphamap_fragment:LA,alphamap_pars_fragment:IA,alphatest_fragment:UA,alphatest_pars_fragment:FA,aomap_fragment:OA,aomap_pars_fragment:kA,batching_pars_vertex:BA,batching_vertex:zA,begin_vertex:VA,beginnormal_vertex:HA,bsdfs:GA,iridescence_fragment:WA,bumpmap_pars_fragment:jA,clipping_planes_fragment:XA,clipping_planes_pars_fragment:qA,clipping_planes_pars_vertex:$A,clipping_planes_vertex:YA,color_fragment:KA,color_pars_fragment:QA,color_pars_vertex:ZA,color_vertex:JA,common:eR,cube_uv_reflection_fragment:tR,defaultnormal_vertex:nR,displacementmap_pars_vertex:iR,displacementmap_vertex:rR,emissivemap_fragment:sR,emissivemap_pars_fragment:oR,colorspace_fragment:aR,colorspace_pars_fragment:lR,envmap_fragment:cR,envmap_common_pars_fragment:uR,envmap_pars_fragment:dR,envmap_pars_vertex:fR,envmap_physical_pars_fragment:MR,envmap_vertex:hR,fog_vertex:pR,fog_pars_vertex:mR,fog_fragment:gR,fog_pars_fragment:vR,gradientmap_pars_fragment:_R,lightmap_pars_fragment:xR,lights_lambert_fragment:yR,lights_lambert_pars_fragment:SR,lights_pars_begin:ER,lights_toon_fragment:wR,lights_toon_pars_fragment:TR,lights_phong_fragment:bR,lights_phong_pars_fragment:CR,lights_physical_fragment:AR,lights_physical_pars_fragment:RR,lights_fragment_begin:PR,lights_fragment_maps:NR,lights_fragment_end:DR,logdepthbuf_fragment:LR,logdepthbuf_pars_fragment:IR,logdepthbuf_pars_vertex:UR,logdepthbuf_vertex:FR,map_fragment:OR,map_pars_fragment:kR,map_particle_fragment:BR,map_particle_pars_fragment:zR,metalnessmap_fragment:VR,metalnessmap_pars_fragment:HR,morphinstance_vertex:GR,morphcolor_vertex:WR,morphnormal_vertex:jR,morphtarget_pars_vertex:XR,morphtarget_vertex:qR,normal_fragment_begin:$R,normal_fragment_maps:YR,normal_pars_fragment:KR,normal_pars_vertex:QR,normal_vertex:ZR,normalmap_pars_fragment:JR,clearcoat_normal_fragment_begin:e2,clearcoat_normal_fragment_maps:t2,clearcoat_pars_fragment:n2,iridescence_pars_fragment:i2,opaque_fragment:r2,packing:s2,premultiplied_alpha_fragment:o2,project_vertex:a2,dithering_fragment:l2,dithering_pars_fragment:c2,roughnessmap_fragment:u2,roughnessmap_pars_fragment:d2,shadowmap_pars_fragment:f2,shadowmap_pars_vertex:h2,shadowmap_vertex:p2,shadowmask_pars_fragment:m2,skinbase_vertex:g2,skinning_pars_vertex:v2,skinning_vertex:_2,skinnormal_vertex:x2,specularmap_fragment:y2,specularmap_pars_fragment:S2,tonemapping_fragment:E2,tonemapping_pars_fragment:M2,transmission_fragment:w2,transmission_pars_fragment:T2,uv_pars_fragment:b2,uv_pars_vertex:C2,uv_vertex:A2,worldpos_vertex:R2,background_vert:P2,background_frag:N2,backgroundCube_vert:D2,backgroundCube_frag:L2,cube_vert:I2,cube_frag:U2,depth_vert:F2,depth_frag:O2,distanceRGBA_vert:k2,distanceRGBA_frag:B2,equirect_vert:z2,equirect_frag:V2,linedashed_vert:H2,linedashed_frag:G2,meshbasic_vert:W2,meshbasic_frag:j2,meshlambert_vert:X2,meshlambert_frag:q2,meshmatcap_vert:$2,meshmatcap_frag:Y2,meshnormal_vert:K2,meshnormal_frag:Q2,meshphong_vert:Z2,meshphong_frag:J2,meshphysical_vert:eP,meshphysical_frag:tP,meshtoon_vert:nP,meshtoon_frag:iP,points_vert:rP,points_frag:sP,shadow_vert:oP,shadow_frag:aP,sprite_vert:lP,sprite_frag:cP},ce={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},gi={basic:{uniforms:nn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:nn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new nt(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:nn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:nn([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:nn([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new nt(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:nn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:nn([ce.points,ce.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:nn([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:nn([ce.common,ce.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:nn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:nn([ce.sprite,ce.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:nn([ce.common,ce.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:nn([ce.lights,ce.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};gi.physical={uniforms:nn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const tc={r:0,b:0,g:0},Yr=new Ki,uP=new Mt;function dP(t,e,n,i,r,s,o){const a=new nt(0);let l=s===!0?0:1,c,d,h=null,f=0,m=null;function _(x){let S=x.isScene===!0?x.background:null;return S&&S.isTexture&&(S=(x.backgroundBlurriness>0?n:e).get(S)),S}function g(x){let S=!1;const C=_(x);C===null?u(a,l):C&&C.isColor&&(u(C,1),S=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(x,S){const C=_(S);C&&(C.isCubeTexture||C.mapping===Iu)?(d===void 0&&(d=new zi(new ll(1,1,1),new Br({name:"BackgroundCubeMaterial",uniforms:Oo(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(A,b,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Yr.copy(S.backgroundRotation),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),d.material.uniforms.envMap.value=C,d.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(uP.makeRotationFromEuler(Yr)),d.material.toneMapped=Ze.getTransfer(C.colorSpace)!==st,(h!==C||f!==C.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,h=C,f=C.version,m=t.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new zi(new Uu(2,2),new Br({name:"BackgroundMaterial",uniforms:Oo(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:kr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(C.colorSpace)!==st,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(h!==C||f!==C.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,h=C,f=C.version,m=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function u(x,S){x.getRGB(tc,SS(t)),i.buffers.color.setClear(tc.r,tc.g,tc.b,S,o)}function v(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,S=1){a.set(x),l=S,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,u(a,l)},render:g,addToRenderList:p,dispose:v}}function fP(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(E,D,k,H,V){let K=!1;const X=h(H,k,D);s!==X&&(s=X,c(s.object)),K=m(E,H,k,V),K&&_(E,H,k,V),V!==null&&e.update(V,t.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,S(E,D,k,H),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return t.createVertexArray()}function c(E){return t.bindVertexArray(E)}function d(E){return t.deleteVertexArray(E)}function h(E,D,k){const H=k.wireframe===!0;let V=i[E.id];V===void 0&&(V={},i[E.id]=V);let K=V[D.id];K===void 0&&(K={},V[D.id]=K);let X=K[H];return X===void 0&&(X=f(l()),K[H]=X),X}function f(E){const D=[],k=[],H=[];for(let V=0;V<n;V++)D[V]=0,k[V]=0,H[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:k,attributeDivisors:H,object:E,attributes:{},index:null}}function m(E,D,k,H){const V=s.attributes,K=D.attributes;let X=0;const Z=k.getAttributes();for(const I in Z)if(Z[I].location>=0){const J=V[I];let se=K[I];if(se===void 0&&(I==="instanceMatrix"&&E.instanceMatrix&&(se=E.instanceMatrix),I==="instanceColor"&&E.instanceColor&&(se=E.instanceColor)),J===void 0||J.attribute!==se||se&&J.data!==se.data)return!0;X++}return s.attributesNum!==X||s.index!==H}function _(E,D,k,H){const V={},K=D.attributes;let X=0;const Z=k.getAttributes();for(const I in Z)if(Z[I].location>=0){let J=K[I];J===void 0&&(I==="instanceMatrix"&&E.instanceMatrix&&(J=E.instanceMatrix),I==="instanceColor"&&E.instanceColor&&(J=E.instanceColor));const se={};se.attribute=J,J&&J.data&&(se.data=J.data),V[I]=se,X++}s.attributes=V,s.attributesNum=X,s.index=H}function g(){const E=s.newAttributes;for(let D=0,k=E.length;D<k;D++)E[D]=0}function p(E){u(E,0)}function u(E,D){const k=s.newAttributes,H=s.enabledAttributes,V=s.attributeDivisors;k[E]=1,H[E]===0&&(t.enableVertexAttribArray(E),H[E]=1),V[E]!==D&&(t.vertexAttribDivisor(E,D),V[E]=D)}function v(){const E=s.newAttributes,D=s.enabledAttributes;for(let k=0,H=D.length;k<H;k++)D[k]!==E[k]&&(t.disableVertexAttribArray(k),D[k]=0)}function x(E,D,k,H,V,K,X){X===!0?t.vertexAttribIPointer(E,D,k,V,K):t.vertexAttribPointer(E,D,k,H,V,K)}function S(E,D,k,H){g();const V=H.attributes,K=k.getAttributes(),X=D.defaultAttributeValues;for(const Z in K){const I=K[Z];if(I.location>=0){let $=V[Z];if($===void 0&&(Z==="instanceMatrix"&&E.instanceMatrix&&($=E.instanceMatrix),Z==="instanceColor"&&E.instanceColor&&($=E.instanceColor)),$!==void 0){const J=$.normalized,se=$.itemSize,Ee=e.get($);if(Ee===void 0)continue;const ze=Ee.buffer,Y=Ee.type,ae=Ee.bytesPerElement,me=Y===t.INT||Y===t.UNSIGNED_INT||$.gpuType===lm;if($.isInterleavedBufferAttribute){const le=$.data,Ae=le.stride,Je=$.offset;if(le.isInstancedInterleavedBuffer){for(let Pe=0;Pe<I.locationSize;Pe++)u(I.location+Pe,le.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Pe=0;Pe<I.locationSize;Pe++)p(I.location+Pe);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let Pe=0;Pe<I.locationSize;Pe++)x(I.location+Pe,se/I.locationSize,Y,J,Ae*ae,(Je+se/I.locationSize*Pe)*ae,me)}else{if($.isInstancedBufferAttribute){for(let le=0;le<I.locationSize;le++)u(I.location+le,$.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let le=0;le<I.locationSize;le++)p(I.location+le);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let le=0;le<I.locationSize;le++)x(I.location+le,se/I.locationSize,Y,J,se*ae,se/I.locationSize*le*ae,me)}}else if(X!==void 0){const J=X[Z];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(I.location,J);break;case 3:t.vertexAttrib3fv(I.location,J);break;case 4:t.vertexAttrib4fv(I.location,J);break;default:t.vertexAttrib1fv(I.location,J)}}}}v()}function C(){P();for(const E in i){const D=i[E];for(const k in D){const H=D[k];for(const V in H)d(H[V].object),delete H[V];delete D[k]}delete i[E]}}function A(E){if(i[E.id]===void 0)return;const D=i[E.id];for(const k in D){const H=D[k];for(const V in H)d(H[V].object),delete H[V];delete D[k]}delete i[E.id]}function b(E){for(const D in i){const k=i[D];if(k[E.id]===void 0)continue;const H=k[E.id];for(const V in H)d(H[V].object),delete H[V];delete k[E.id]}}function P(){T(),o=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:T,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:b,initAttributes:g,enableAttribute:p,disableUnusedAttributes:v}}function hP(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function o(c,d,h){h!==0&&(t.drawArraysInstanced(i,c,d,h),n.update(d,i,h))}function a(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,h);let m=0;for(let _=0;_<h;_++)m+=d[_];n.update(m,i,1)}function l(c,d,h,f){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)o(c[_],d[_],f[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,d,0,f,0,h);let _=0;for(let g=0;g<h;g++)_+=d[g]*f[g];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function pP(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(b){return!(b!==ti&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const P=b===il&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Yi&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==ki&&!P)}function l(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:C,maxSamples:A}}function mP(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Jr,a=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||r;return r=f,i=h.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,m){const _=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,u=t.get(h);if(!r||_===null||_.length===0||s&&!p)s?d(null):c();else{const v=s?0:i,x=v*4;let S=u.clippingState||null;l.value=S,S=d(_,f,x,m);for(let C=0;C!==x;++C)S[C]=n[C];u.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,m,_){const g=h!==null?h.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const u=m+g*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<u)&&(p=new Float32Array(u));for(let x=0,S=m;x!==g;++x,S+=4)o.copy(h[x]).applyMatrix4(v,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function gP(t){let e=new WeakMap;function n(o,a){return a===vh?o.mapping=Io:a===_h&&(o.mapping=Uo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===vh||a===_h)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new _A(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const io=4,Iv=[.125,.215,.35,.446,.526,.582],ns=20,Wd=new CA,Uv=new nt;let jd=null,Xd=0,qd=0,$d=!1;const es=(1+Math.sqrt(5))/2,zs=1/es,Fv=[new z(-es,zs,0),new z(es,zs,0),new z(-zs,0,es),new z(zs,0,es),new z(0,es,-zs),new z(0,es,zs),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],vP=new z;class Ov{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=vP}=s;jd=this._renderer.getRenderTarget(),Xd=this._renderer.getActiveCubeFace(),qd=this._renderer.getActiveMipmapLevel(),$d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(jd,Xd,qd),this._renderer.xr.enabled=$d,e.scissorTest=!1,nc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Io||e.mapping===Uo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jd=this._renderer.getRenderTarget(),Xd=this._renderer.getActiveCubeFace(),qd=this._renderer.getActiveMipmapLevel(),$d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:xi,minFilter:xi,generateMipmaps:!1,type:il,format:ti,colorSpace:Fo,depthBuffer:!1},r=kv(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kv(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_P(s)),this._blurMaterial=xP(s,e,n)}return r}_compileMaterial(e){const n=new zi(this._lodPlanes[0],e);this._renderer.compile(n,Wd)}_sceneToCubeUV(e,n,i,r,s){const l=new kn(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,m=h.toneMapping;h.getClearColor(Uv),h.toneMapping=Ir,h.autoClear=!1;const _=new _S({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),g=new zi(new ll,_);let p=!1;const u=e.background;u?u.isColor&&(_.color.copy(u),e.background=null,p=!0):(_.color.copy(Uv),p=!0);for(let v=0;v<6;v++){const x=v%3;x===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[v],s.y,s.z)):x===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[v]));const S=this._cubeSize;nc(r,x*S,v>2?S:0,S,S),h.setRenderTarget(r),p&&h.render(g,l),h.render(e,l)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=m,h.autoClear=f,e.background=u}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Io||e.mapping===Uo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new zi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;nc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Wd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Fv[(r-s-1)%Fv.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new zi(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ns-1),g=s/_,p=isFinite(s)?1+Math.floor(d*g):ns;p>ns&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ns}`);const u=[];let v=0;for(let b=0;b<ns;++b){const P=b/g,T=Math.exp(-P*P/2);u.push(T),b===0?v+=T:b<p&&(v+=2*T)}for(let b=0;b<u.length;b++)u[b]=u[b]/v;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-i;const S=this._sizeLods[r],C=3*S*(r>x-io?r-x+io:0),A=4*(this._cubeSize-S);nc(n,C,A,3*S,2*S),l.setRenderTarget(n),l.render(h,Wd)}}function _P(t){const e=[],n=[],i=[];let r=t;const s=t-io+1+Iv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-io?l=Iv[o-t+io-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,_=6,g=3,p=2,u=1,v=new Float32Array(g*_*m),x=new Float32Array(p*_*m),S=new Float32Array(u*_*m);for(let A=0;A<m;A++){const b=A%3*2/3-1,P=A>2?0:-1,T=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];v.set(T,g*_*A),x.set(f,p*_*A);const E=[A,A,A,A,A,A];S.set(E,u*_*A)}const C=new li;C.setAttribute("position",new Ei(v,g)),C.setAttribute("uv",new Ei(x,p)),C.setAttribute("faceIndex",new Ei(S,u)),e.push(C),r>io&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function kv(t,e,n){const i=new Ss(t,e,n);return i.texture.mapping=Iu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function nc(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function xP(t,e,n){const i=new Float32Array(ns),r=new z(0,1,0);return new Br({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:gm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function Bv(){return new Br({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function zv(){return new Br({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function gm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function yP(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===vh||l===_h,d=l===Io||l===Uo;if(c||d){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new Ov(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return c&&m&&m.height>0||d&&m&&r(m)?(n===null&&(n=new Ov(t)),h=c?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function SP(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Nc("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function EP(t,e,n,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const m in f)e.update(f[m],t.ARRAY_BUFFER)}function c(h){const f=[],m=h.index,_=h.attributes.position;let g=0;if(m!==null){const v=m.array;g=m.version;for(let x=0,S=v.length;x<S;x+=3){const C=v[x+0],A=v[x+1],b=v[x+2];f.push(C,A,A,b,b,C)}}else if(_!==void 0){const v=_.array;g=_.version;for(let x=0,S=v.length/3-1;x<S;x+=3){const C=x+0,A=x+1,b=x+2;f.push(C,A,A,b,b,C)}}else return;const p=new(pS(f)?yS:xS)(f,1);p.version=g;const u=s.get(h);u&&e.remove(u),s.set(h,p)}function d(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function MP(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,m){t.drawElements(i,m,s,f*o),n.update(m,i,1)}function c(f,m,_){_!==0&&(t.drawElementsInstanced(i,m,s,f*o,_),n.update(m,i,_))}function d(f,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,f,0,_);let p=0;for(let u=0;u<_;u++)p+=m[u];n.update(p,i,1)}function h(f,m,_,g){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<f.length;u++)c(f[u]/o,m[u],g[u]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,f,0,g,0,_);let u=0;for(let v=0;v<_;v++)u+=m[v]*g[v];n.update(u,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function wP(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function TP(t,e,n){const i=new WeakMap,r=new Rt;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let E=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",E)};var m=E;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),g===!0&&(S=2),p===!0&&(S=3);let C=a.attributes.position.count*S,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const b=new Float32Array(C*A*4*h),P=new mS(b,C,A,h);P.type=ki,P.needsUpdate=!0;const T=S*4;for(let D=0;D<h;D++){const k=u[D],H=v[D],V=x[D],K=C*A*4*D;for(let X=0;X<k.count;X++){const Z=X*T;_===!0&&(r.fromBufferAttribute(k,X),b[K+Z+0]=r.x,b[K+Z+1]=r.y,b[K+Z+2]=r.z,b[K+Z+3]=0),g===!0&&(r.fromBufferAttribute(H,X),b[K+Z+4]=r.x,b[K+Z+5]=r.y,b[K+Z+6]=r.z,b[K+Z+7]=0),p===!0&&(r.fromBufferAttribute(V,X),b[K+Z+8]=r.x,b[K+Z+9]=r.y,b[K+Z+10]=r.z,b[K+Z+11]=V.itemSize===4?r.w:1)}}f={count:h,texture:P,size:new ot(C,A)},i.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function bP(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const RS=new xn,Vv=new CS(1,1),PS=new mS,NS=new tA,DS=new MS,Hv=[],Gv=[],Wv=new Float32Array(16),jv=new Float32Array(9),Xv=new Float32Array(4);function Wo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Hv[r];if(s===void 0&&(s=new Float32Array(r),Hv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ut(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ft(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Fu(t,e){let n=Gv[e];n===void 0&&(n=new Int32Array(e),Gv[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function CP(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function AP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2fv(this.addr,e),Ft(n,e)}}function RP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ut(n,e))return;t.uniform3fv(this.addr,e),Ft(n,e)}}function PP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4fv(this.addr,e),Ft(n,e)}}function NP(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ft(n,e)}else{if(Ut(n,i))return;Xv.set(i),t.uniformMatrix2fv(this.addr,!1,Xv),Ft(n,i)}}function DP(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ft(n,e)}else{if(Ut(n,i))return;jv.set(i),t.uniformMatrix3fv(this.addr,!1,jv),Ft(n,i)}}function LP(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ft(n,e)}else{if(Ut(n,i))return;Wv.set(i),t.uniformMatrix4fv(this.addr,!1,Wv),Ft(n,i)}}function IP(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function UP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2iv(this.addr,e),Ft(n,e)}}function FP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3iv(this.addr,e),Ft(n,e)}}function OP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4iv(this.addr,e),Ft(n,e)}}function kP(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function BP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2uiv(this.addr,e),Ft(n,e)}}function zP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3uiv(this.addr,e),Ft(n,e)}}function VP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4uiv(this.addr,e),Ft(n,e)}}function HP(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Vv.compareFunction=hS,s=Vv):s=RS,n.setTexture2D(e||s,r)}function GP(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||NS,r)}function WP(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||DS,r)}function jP(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||PS,r)}function XP(t){switch(t){case 5126:return CP;case 35664:return AP;case 35665:return RP;case 35666:return PP;case 35674:return NP;case 35675:return DP;case 35676:return LP;case 5124:case 35670:return IP;case 35667:case 35671:return UP;case 35668:case 35672:return FP;case 35669:case 35673:return OP;case 5125:return kP;case 36294:return BP;case 36295:return zP;case 36296:return VP;case 35678:case 36198:case 36298:case 36306:case 35682:return HP;case 35679:case 36299:case 36307:return GP;case 35680:case 36300:case 36308:case 36293:return WP;case 36289:case 36303:case 36311:case 36292:return jP}}function qP(t,e){t.uniform1fv(this.addr,e)}function $P(t,e){const n=Wo(e,this.size,2);t.uniform2fv(this.addr,n)}function YP(t,e){const n=Wo(e,this.size,3);t.uniform3fv(this.addr,n)}function KP(t,e){const n=Wo(e,this.size,4);t.uniform4fv(this.addr,n)}function QP(t,e){const n=Wo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function ZP(t,e){const n=Wo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function JP(t,e){const n=Wo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function eN(t,e){t.uniform1iv(this.addr,e)}function tN(t,e){t.uniform2iv(this.addr,e)}function nN(t,e){t.uniform3iv(this.addr,e)}function iN(t,e){t.uniform4iv(this.addr,e)}function rN(t,e){t.uniform1uiv(this.addr,e)}function sN(t,e){t.uniform2uiv(this.addr,e)}function oN(t,e){t.uniform3uiv(this.addr,e)}function aN(t,e){t.uniform4uiv(this.addr,e)}function lN(t,e,n){const i=this.cache,r=e.length,s=Fu(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||RS,s[o])}function cN(t,e,n){const i=this.cache,r=e.length,s=Fu(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||NS,s[o])}function uN(t,e,n){const i=this.cache,r=e.length,s=Fu(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||DS,s[o])}function dN(t,e,n){const i=this.cache,r=e.length,s=Fu(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||PS,s[o])}function fN(t){switch(t){case 5126:return qP;case 35664:return $P;case 35665:return YP;case 35666:return KP;case 35674:return QP;case 35675:return ZP;case 35676:return JP;case 5124:case 35670:return eN;case 35667:case 35671:return tN;case 35668:case 35672:return nN;case 35669:case 35673:return iN;case 5125:return rN;case 36294:return sN;case 36295:return oN;case 36296:return aN;case 35678:case 36198:case 36298:case 36306:case 35682:return lN;case 35679:case 36299:case 36307:return cN;case 35680:case 36300:case 36308:case 36293:return uN;case 36289:case 36303:case 36311:case 36292:return dN}}class hN{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=XP(n.type)}}class pN{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=fN(n.type)}}class mN{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Yd=/(\w+)(\])?(\[|\.)?/g;function qv(t,e){t.seq.push(e),t.map[e.id]=e}function gN(t,e,n){const i=t.name,r=i.length;for(Yd.lastIndex=0;;){const s=Yd.exec(i),o=Yd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){qv(n,c===void 0?new hN(a,t,e):new pN(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new mN(a),qv(n,h)),n=h}}}class Dc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);gN(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function $v(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const vN=37297;let _N=0;function xN(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Yv=new Oe;function yN(t){Ze._getMatrix(Yv,Ze.workingColorSpace,t);const e=`mat3( ${Yv.elements.map(n=>n.toFixed(4))} )`;switch(Ze.getTransfer(t)){case ou:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Kv(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+xN(t.getShaderSource(e),o)}else return r}function SN(t,e){const n=yN(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function EN(t,e){let n;switch(e){case bC:n="Linear";break;case CC:n="Reinhard";break;case AC:n="Cineon";break;case RC:n="ACESFilmic";break;case NC:n="AgX";break;case DC:n="Neutral";break;case PC:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ic=new z;function MN(){Ze.getLuminanceCoefficients(ic);const t=ic.x.toFixed(4),e=ic.y.toFixed(4),n=ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wN(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pa).join(`
`)}function TN(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function bN(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function pa(t){return t!==""}function Qv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const CN=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yh(t){return t.replace(CN,RN)}const AN=new Map;function RN(t,e){let n=Be[e];if(n===void 0){const i=AN.get(e);if(i!==void 0)n=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Yh(n)}const PN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jv(t){return t.replace(PN,NN)}function NN(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function e0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function DN(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===eS?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===sC?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ni&&(e="SHADOWMAP_TYPE_VSM"),e}function LN(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Io:case Uo:e="ENVMAP_TYPE_CUBE";break;case Iu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function IN(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Uo:e="ENVMAP_MODE_REFRACTION";break}return e}function UN(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case tS:e="ENVMAP_BLENDING_MULTIPLY";break;case wC:e="ENVMAP_BLENDING_MIX";break;case TC:e="ENVMAP_BLENDING_ADD";break}return e}function FN(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function ON(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=DN(n),c=LN(n),d=IN(n),h=UN(n),f=FN(n),m=wN(n),_=TN(s),g=r.createProgram();let p,u,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(pa).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(pa).join(`
`),u.length>0&&(u+=`
`)):(p=[e0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pa).join(`
`),u=[e0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ir?"#define TONE_MAPPING":"",n.toneMapping!==Ir?Be.tonemapping_pars_fragment:"",n.toneMapping!==Ir?EN("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,SN("linearToOutputTexel",n.outputColorSpace),MN(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(pa).join(`
`)),o=Yh(o),o=Qv(o,n),o=Zv(o,n),a=Yh(a),a=Qv(a,n),a=Zv(a,n),o=Jv(o),a=Jv(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",n.glslVersion===dv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===dv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=v+p+o,S=v+u+a,C=$v(r,r.VERTEX_SHADER,x),A=$v(r,r.FRAGMENT_SHADER,S);r.attachShader(g,C),r.attachShader(g,A),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function b(D){if(t.debug.checkShaderErrors){const k=r.getProgramInfoLog(g).trim(),H=r.getShaderInfoLog(C).trim(),V=r.getShaderInfoLog(A).trim();let K=!0,X=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(K=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,C,A);else{const Z=Kv(r,C,"vertex"),I=Kv(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+k+`
`+Z+`
`+I)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(H===""||V==="")&&(X=!1);X&&(D.diagnostics={runnable:K,programLog:k,vertexShader:{log:H,prefix:p},fragmentShader:{log:V,prefix:u}})}r.deleteShader(C),r.deleteShader(A),P=new Dc(r,g),T=bN(r,g)}let P;this.getUniforms=function(){return P===void 0&&b(this),P};let T;this.getAttributes=function(){return T===void 0&&b(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(g,vN)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=_N++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=A,this}let kN=0;class BN{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new zN(e),n.set(e,i)),i}}class zN{constructor(e){this.id=kN++,this.code=e,this.usedTimes=0}}function VN(t,e,n,i,r,s,o){const a=new gS,l=new BN,c=new Set,d=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(T){return c.add(T),T===0?"uv":`uv${T}`}function p(T,E,D,k,H){const V=k.fog,K=H.geometry,X=T.isMeshStandardMaterial?k.environment:null,Z=(T.isMeshStandardMaterial?n:e).get(T.envMap||X),I=Z&&Z.mapping===Iu?Z.image.height:null,$=_[T.type];T.precision!==null&&(m=r.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const J=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,se=J!==void 0?J.length:0;let Ee=0;K.morphAttributes.position!==void 0&&(Ee=1),K.morphAttributes.normal!==void 0&&(Ee=2),K.morphAttributes.color!==void 0&&(Ee=3);let ze,Y,ae,me;if($){const it=gi[$];ze=it.vertexShader,Y=it.fragmentShader}else ze=T.vertexShader,Y=T.fragmentShader,l.update(T),ae=l.getVertexShaderID(T),me=l.getFragmentShaderID(T);const le=t.getRenderTarget(),Ae=t.state.buffers.depth.getReversed(),Je=H.isInstancedMesh===!0,Pe=H.isBatchedMesh===!0,bt=!!T.map,mt=!!T.matcap,We=!!Z,L=!!T.aoMap,Pn=!!T.lightMap,qe=!!T.bumpMap,je=!!T.normalMap,Te=!!T.displacementMap,ct=!!T.emissiveMap,we=!!T.metalnessMap,R=!!T.roughnessMap,M=T.anisotropy>0,B=T.clearcoat>0,ee=T.dispersion>0,ne=T.iridescence>0,Q=T.sheen>0,Me=T.transmission>0,de=M&&!!T.anisotropyMap,_e=B&&!!T.clearcoatMap,$e=B&&!!T.clearcoatNormalMap,oe=B&&!!T.clearcoatRoughnessMap,xe=ne&&!!T.iridescenceMap,Re=ne&&!!T.iridescenceThicknessMap,De=Q&&!!T.sheenColorMap,ye=Q&&!!T.sheenRoughnessMap,Xe=!!T.specularMap,ke=!!T.specularColorMap,at=!!T.specularIntensityMap,U=Me&&!!T.transmissionMap,fe=Me&&!!T.thicknessMap,q=!!T.gradientMap,te=!!T.alphaMap,pe=T.alphaTest>0,he=!!T.alphaHash,Ue=!!T.extensions;let xt=Ir;T.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(xt=t.toneMapping);const qt={shaderID:$,shaderType:T.type,shaderName:T.name,vertexShader:ze,fragmentShader:Y,defines:T.defines,customVertexShaderID:ae,customFragmentShaderID:me,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:Pe,batchingColor:Pe&&H._colorsTexture!==null,instancing:Je,instancingColor:Je&&H.instanceColor!==null,instancingMorph:Je&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Fo,alphaToCoverage:!!T.alphaToCoverage,map:bt,matcap:mt,envMap:We,envMapMode:We&&Z.mapping,envMapCubeUVHeight:I,aoMap:L,lightMap:Pn,bumpMap:qe,normalMap:je,displacementMap:f&&Te,emissiveMap:ct,normalMapObjectSpace:je&&T.normalMapType===OC,normalMapTangentSpace:je&&T.normalMapType===FC,metalnessMap:we,roughnessMap:R,anisotropy:M,anisotropyMap:de,clearcoat:B,clearcoatMap:_e,clearcoatNormalMap:$e,clearcoatRoughnessMap:oe,dispersion:ee,iridescence:ne,iridescenceMap:xe,iridescenceThicknessMap:Re,sheen:Q,sheenColorMap:De,sheenRoughnessMap:ye,specularMap:Xe,specularColorMap:ke,specularIntensityMap:at,transmission:Me,transmissionMap:U,thicknessMap:fe,gradientMap:q,opaque:T.transparent===!1&&T.blending===fo&&T.alphaToCoverage===!1,alphaMap:te,alphaTest:pe,alphaHash:he,combine:T.combine,mapUv:bt&&g(T.map.channel),aoMapUv:L&&g(T.aoMap.channel),lightMapUv:Pn&&g(T.lightMap.channel),bumpMapUv:qe&&g(T.bumpMap.channel),normalMapUv:je&&g(T.normalMap.channel),displacementMapUv:Te&&g(T.displacementMap.channel),emissiveMapUv:ct&&g(T.emissiveMap.channel),metalnessMapUv:we&&g(T.metalnessMap.channel),roughnessMapUv:R&&g(T.roughnessMap.channel),anisotropyMapUv:de&&g(T.anisotropyMap.channel),clearcoatMapUv:_e&&g(T.clearcoatMap.channel),clearcoatNormalMapUv:$e&&g(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&g(T.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&g(T.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&g(T.iridescenceThicknessMap.channel),sheenColorMapUv:De&&g(T.sheenColorMap.channel),sheenRoughnessMapUv:ye&&g(T.sheenRoughnessMap.channel),specularMapUv:Xe&&g(T.specularMap.channel),specularColorMapUv:ke&&g(T.specularColorMap.channel),specularIntensityMapUv:at&&g(T.specularIntensityMap.channel),transmissionMapUv:U&&g(T.transmissionMap.channel),thicknessMapUv:fe&&g(T.thicknessMap.channel),alphaMapUv:te&&g(T.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(je||M),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!K.attributes.uv&&(bt||te),fog:!!V,useFog:T.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ae,skinning:H.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Ee,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:xt,decodeVideoTexture:bt&&T.map.isVideoTexture===!0&&Ze.getTransfer(T.map.colorSpace)===st,decodeVideoTextureEmissive:ct&&T.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(T.emissiveMap.colorSpace)===st,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ui,flipSided:T.side===_n,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ue&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&T.extensions.multiDraw===!0||Pe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return qt.vertexUv1s=c.has(1),qt.vertexUv2s=c.has(2),qt.vertexUv3s=c.has(3),c.clear(),qt}function u(T){const E=[];if(T.shaderID?E.push(T.shaderID):(E.push(T.customVertexShaderID),E.push(T.customFragmentShaderID)),T.defines!==void 0)for(const D in T.defines)E.push(D),E.push(T.defines[D]);return T.isRawShaderMaterial===!1&&(v(E,T),x(E,T),E.push(t.outputColorSpace)),E.push(T.customProgramCacheKey),E.join()}function v(T,E){T.push(E.precision),T.push(E.outputColorSpace),T.push(E.envMapMode),T.push(E.envMapCubeUVHeight),T.push(E.mapUv),T.push(E.alphaMapUv),T.push(E.lightMapUv),T.push(E.aoMapUv),T.push(E.bumpMapUv),T.push(E.normalMapUv),T.push(E.displacementMapUv),T.push(E.emissiveMapUv),T.push(E.metalnessMapUv),T.push(E.roughnessMapUv),T.push(E.anisotropyMapUv),T.push(E.clearcoatMapUv),T.push(E.clearcoatNormalMapUv),T.push(E.clearcoatRoughnessMapUv),T.push(E.iridescenceMapUv),T.push(E.iridescenceThicknessMapUv),T.push(E.sheenColorMapUv),T.push(E.sheenRoughnessMapUv),T.push(E.specularMapUv),T.push(E.specularColorMapUv),T.push(E.specularIntensityMapUv),T.push(E.transmissionMapUv),T.push(E.thicknessMapUv),T.push(E.combine),T.push(E.fogExp2),T.push(E.sizeAttenuation),T.push(E.morphTargetsCount),T.push(E.morphAttributeCount),T.push(E.numDirLights),T.push(E.numPointLights),T.push(E.numSpotLights),T.push(E.numSpotLightMaps),T.push(E.numHemiLights),T.push(E.numRectAreaLights),T.push(E.numDirLightShadows),T.push(E.numPointLightShadows),T.push(E.numSpotLightShadows),T.push(E.numSpotLightShadowsWithMaps),T.push(E.numLightProbes),T.push(E.shadowMapType),T.push(E.toneMapping),T.push(E.numClippingPlanes),T.push(E.numClipIntersection),T.push(E.depthPacking)}function x(T,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),T.push(a.mask)}function S(T){const E=_[T.type];let D;if(E){const k=gi[E];D=pA.clone(k.uniforms)}else D=T.uniforms;return D}function C(T,E){let D;for(let k=0,H=d.length;k<H;k++){const V=d[k];if(V.cacheKey===E){D=V,++D.usedTimes;break}}return D===void 0&&(D=new ON(t,E,T,s),d.push(D)),D}function A(T){if(--T.usedTimes===0){const E=d.indexOf(T);d[E]=d[d.length-1],d.pop(),T.destroy()}}function b(T){l.remove(T)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:S,acquireProgram:C,releaseProgram:A,releaseShaderCache:b,programs:d,dispose:P}}function HN(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function GN(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function t0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function n0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,f,m,_,g,p){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:f,material:m,groupOrder:_,renderOrder:h.renderOrder,z:g,group:p},t[e]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=m,u.groupOrder=_,u.renderOrder=h.renderOrder,u.z=g,u.group=p),e++,u}function a(h,f,m,_,g,p){const u=o(h,f,m,_,g,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(h,f,m,_,g,p){const u=o(h,f,m,_,g,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,f){n.length>1&&n.sort(h||GN),i.length>1&&i.sort(f||t0),r.length>1&&r.sort(f||t0)}function d(){for(let h=e,f=t.length;h<f;h++){const m=t[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function WN(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new n0,t.set(i,[o])):r>=s.length?(o=new n0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function jN(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new nt};break;case"SpotLight":n={position:new z,direction:new z,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new nt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":n={color:new nt,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function XN(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let qN=0;function $N(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function YN(t){const e=new jN,n=XN(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const r=new z,s=new Mt,o=new Mt;function a(c){let d=0,h=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let m=0,_=0,g=0,p=0,u=0,v=0,x=0,S=0,C=0,A=0,b=0;c.sort($N);for(let T=0,E=c.length;T<E;T++){const D=c[T],k=D.color,H=D.intensity,V=D.distance,K=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=k.r*H,h+=k.g*H,f+=k.b*H;else if(D.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(D.sh.coefficients[X],H);b++}else if(D.isDirectionalLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Z=D.shadow,I=n.get(D);I.shadowIntensity=Z.intensity,I.shadowBias=Z.bias,I.shadowNormalBias=Z.normalBias,I.shadowRadius=Z.radius,I.shadowMapSize=Z.mapSize,i.directionalShadow[m]=I,i.directionalShadowMap[m]=K,i.directionalShadowMatrix[m]=D.shadow.matrix,v++}i.directional[m]=X,m++}else if(D.isSpotLight){const X=e.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(k).multiplyScalar(H),X.distance=V,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,i.spot[g]=X;const Z=D.shadow;if(D.map&&(i.spotLightMap[C]=D.map,C++,Z.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[g]=Z.matrix,D.castShadow){const I=n.get(D);I.shadowIntensity=Z.intensity,I.shadowBias=Z.bias,I.shadowNormalBias=Z.normalBias,I.shadowRadius=Z.radius,I.shadowMapSize=Z.mapSize,i.spotShadow[g]=I,i.spotShadowMap[g]=K,S++}g++}else if(D.isRectAreaLight){const X=e.get(D);X.color.copy(k).multiplyScalar(H),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),i.rectArea[p]=X,p++}else if(D.isPointLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){const Z=D.shadow,I=n.get(D);I.shadowIntensity=Z.intensity,I.shadowBias=Z.bias,I.shadowNormalBias=Z.normalBias,I.shadowRadius=Z.radius,I.shadowMapSize=Z.mapSize,I.shadowCameraNear=Z.camera.near,I.shadowCameraFar=Z.camera.far,i.pointShadow[_]=I,i.pointShadowMap[_]=K,i.pointShadowMatrix[_]=D.shadow.matrix,x++}i.point[_]=X,_++}else if(D.isHemisphereLight){const X=e.get(D);X.skyColor.copy(D.color).multiplyScalar(H),X.groundColor.copy(D.groundColor).multiplyScalar(H),i.hemi[u]=X,u++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=f;const P=i.hash;(P.directionalLength!==m||P.pointLength!==_||P.spotLength!==g||P.rectAreaLength!==p||P.hemiLength!==u||P.numDirectionalShadows!==v||P.numPointShadows!==x||P.numSpotShadows!==S||P.numSpotMaps!==C||P.numLightProbes!==b)&&(i.directional.length=m,i.spot.length=g,i.rectArea.length=p,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=b,P.directionalLength=m,P.pointLength=_,P.spotLength=g,P.rectAreaLength=p,P.hemiLength=u,P.numDirectionalShadows=v,P.numPointShadows=x,P.numSpotShadows=S,P.numSpotMaps=C,P.numLightProbes=b,i.version=qN++)}function l(c,d){let h=0,f=0,m=0,_=0,g=0;const p=d.matrixWorldInverse;for(let u=0,v=c.length;u<v;u++){const x=c[u];if(x.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),h++}else if(x.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),m++}else if(x.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),o.identity(),s.copy(x.matrixWorld),s.premultiply(p),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const S=i.hemi[g];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:i}}function i0(t){const e=new YN(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function o(d){i.push(d)}function a(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function KN(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new i0(t),e.set(r,[a])):s>=o.length?(a=new i0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const QN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZN=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function JN(t,e,n){let i=new wS;const r=new ot,s=new ot,o=new Rt,a=new TA({depthPacking:UC}),l=new bA,c={},d=n.maxTextureSize,h={[kr]:_n,[_n]:kr,[Ui]:Ui},f=new Br({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:QN,fragmentShader:ZN}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new li;_.setAttribute("position",new Ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new zi(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eS;let u=this.type;this.render=function(A,b,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const T=t.getRenderTarget(),E=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),k=t.state;k.setBlending(Lr),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const H=u!==Ni&&this.type===Ni,V=u===Ni&&this.type!==Ni;for(let K=0,X=A.length;K<X;K++){const Z=A[K],I=Z.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const $=I.getFrameExtents();if(r.multiply($),s.copy(I.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/$.x),r.x=s.x*$.x,I.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/$.y),r.y=s.y*$.y,I.mapSize.y=s.y)),I.map===null||H===!0||V===!0){const se=this.type!==Ni?{minFilter:ri,magFilter:ri}:{};I.map!==null&&I.map.dispose(),I.map=new Ss(r.x,r.y,se),I.map.texture.name=Z.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const J=I.getViewportCount();for(let se=0;se<J;se++){const Ee=I.getViewport(se);o.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),k.viewport(o),I.updateMatrices(Z,se),i=I.getFrustum(),S(b,P,I.camera,Z,this.type)}I.isPointLightShadow!==!0&&this.type===Ni&&v(I,P),I.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(T,E,D)};function v(A,b){const P=e.update(g);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ss(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(b,null,P,f,g,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(b,null,P,m,g,null)}function x(A,b,P,T){let E=null;const D=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)E=D;else if(E=P.isPointLight===!0?l:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const k=E.uuid,H=b.uuid;let V=c[k];V===void 0&&(V={},c[k]=V);let K=V[H];K===void 0&&(K=E.clone(),V[H]=K,b.addEventListener("dispose",C)),E=K}if(E.visible=b.visible,E.wireframe=b.wireframe,T===Ni?E.side=b.shadowSide!==null?b.shadowSide:b.side:E.side=b.shadowSide!==null?b.shadowSide:h[b.side],E.alphaMap=b.alphaMap,E.alphaTest=b.alphaTest,E.map=b.map,E.clipShadows=b.clipShadows,E.clippingPlanes=b.clippingPlanes,E.clipIntersection=b.clipIntersection,E.displacementMap=b.displacementMap,E.displacementScale=b.displacementScale,E.displacementBias=b.displacementBias,E.wireframeLinewidth=b.wireframeLinewidth,E.linewidth=b.linewidth,P.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const k=t.properties.get(E);k.light=P}return E}function S(A,b,P,T,E){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===Ni)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const H=e.update(A),V=A.material;if(Array.isArray(V)){const K=H.groups;for(let X=0,Z=K.length;X<Z;X++){const I=K[X],$=V[I.materialIndex];if($&&$.visible){const J=x(A,$,T,E);A.onBeforeShadow(t,A,b,P,H,J,I),t.renderBufferDirect(P,null,H,J,A,I),A.onAfterShadow(t,A,b,P,H,J,I)}}}else if(V.visible){const K=x(A,V,T,E);A.onBeforeShadow(t,A,b,P,H,K,null),t.renderBufferDirect(P,null,H,K,A,null),A.onAfterShadow(t,A,b,P,H,K,null)}}const k=A.children;for(let H=0,V=k.length;H<V;H++)S(k[H],b,P,T,E)}function C(A){A.target.removeEventListener("dispose",C);for(const P in c){const T=c[P],E=A.target.uuid;E in T&&(T[E].dispose(),delete T[E])}}}const eD={[uh]:dh,[fh]:mh,[hh]:gh,[Lo]:ph,[dh]:uh,[mh]:fh,[gh]:hh,[ph]:Lo};function tD(t,e){function n(){let U=!1;const fe=new Rt;let q=null;const te=new Rt(0,0,0,0);return{setMask:function(pe){q!==pe&&!U&&(t.colorMask(pe,pe,pe,pe),q=pe)},setLocked:function(pe){U=pe},setClear:function(pe,he,Ue,xt,qt){qt===!0&&(pe*=xt,he*=xt,Ue*=xt),fe.set(pe,he,Ue,xt),te.equals(fe)===!1&&(t.clearColor(pe,he,Ue,xt),te.copy(fe))},reset:function(){U=!1,q=null,te.set(-1,0,0,0)}}}function i(){let U=!1,fe=!1,q=null,te=null,pe=null;return{setReversed:function(he){if(fe!==he){const Ue=e.get("EXT_clip_control");he?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),fe=he;const xt=pe;pe=null,this.setClear(xt)}},getReversed:function(){return fe},setTest:function(he){he?le(t.DEPTH_TEST):Ae(t.DEPTH_TEST)},setMask:function(he){q!==he&&!U&&(t.depthMask(he),q=he)},setFunc:function(he){if(fe&&(he=eD[he]),te!==he){switch(he){case uh:t.depthFunc(t.NEVER);break;case dh:t.depthFunc(t.ALWAYS);break;case fh:t.depthFunc(t.LESS);break;case Lo:t.depthFunc(t.LEQUAL);break;case hh:t.depthFunc(t.EQUAL);break;case ph:t.depthFunc(t.GEQUAL);break;case mh:t.depthFunc(t.GREATER);break;case gh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}te=he}},setLocked:function(he){U=he},setClear:function(he){pe!==he&&(fe&&(he=1-he),t.clearDepth(he),pe=he)},reset:function(){U=!1,q=null,te=null,pe=null,fe=!1}}}function r(){let U=!1,fe=null,q=null,te=null,pe=null,he=null,Ue=null,xt=null,qt=null;return{setTest:function(it){U||(it?le(t.STENCIL_TEST):Ae(t.STENCIL_TEST))},setMask:function(it){fe!==it&&!U&&(t.stencilMask(it),fe=it)},setFunc:function(it,Gn,Mi){(q!==it||te!==Gn||pe!==Mi)&&(t.stencilFunc(it,Gn,Mi),q=it,te=Gn,pe=Mi)},setOp:function(it,Gn,Mi){(he!==it||Ue!==Gn||xt!==Mi)&&(t.stencilOp(it,Gn,Mi),he=it,Ue=Gn,xt=Mi)},setLocked:function(it){U=it},setClear:function(it){qt!==it&&(t.clearStencil(it),qt=it)},reset:function(){U=!1,fe=null,q=null,te=null,pe=null,he=null,Ue=null,xt=null,qt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let d={},h={},f=new WeakMap,m=[],_=null,g=!1,p=null,u=null,v=null,x=null,S=null,C=null,A=null,b=new nt(0,0,0),P=0,T=!1,E=null,D=null,k=null,H=null,V=null;const K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Z=0;const I=t.getParameter(t.VERSION);I.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(I)[1]),X=Z>=1):I.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),X=Z>=2);let $=null,J={};const se=t.getParameter(t.SCISSOR_BOX),Ee=t.getParameter(t.VIEWPORT),ze=new Rt().fromArray(se),Y=new Rt().fromArray(Ee);function ae(U,fe,q,te){const pe=new Uint8Array(4),he=t.createTexture();t.bindTexture(U,he),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ue=0;Ue<q;Ue++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,te,0,t.RGBA,t.UNSIGNED_BYTE,pe):t.texImage2D(fe+Ue,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,pe);return he}const me={};me[t.TEXTURE_2D]=ae(t.TEXTURE_2D,t.TEXTURE_2D,1),me[t.TEXTURE_CUBE_MAP]=ae(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[t.TEXTURE_2D_ARRAY]=ae(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),me[t.TEXTURE_3D]=ae(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(t.DEPTH_TEST),o.setFunc(Lo),qe(!1),je(sv),le(t.CULL_FACE),L(Lr);function le(U){d[U]!==!0&&(t.enable(U),d[U]=!0)}function Ae(U){d[U]!==!1&&(t.disable(U),d[U]=!1)}function Je(U,fe){return h[U]!==fe?(t.bindFramebuffer(U,fe),h[U]=fe,U===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=fe),U===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function Pe(U,fe){let q=m,te=!1;if(U){q=f.get(fe),q===void 0&&(q=[],f.set(fe,q));const pe=U.textures;if(q.length!==pe.length||q[0]!==t.COLOR_ATTACHMENT0){for(let he=0,Ue=pe.length;he<Ue;he++)q[he]=t.COLOR_ATTACHMENT0+he;q.length=pe.length,te=!0}}else q[0]!==t.BACK&&(q[0]=t.BACK,te=!0);te&&t.drawBuffers(q)}function bt(U){return _!==U?(t.useProgram(U),_=U,!0):!1}const mt={[ts]:t.FUNC_ADD,[aC]:t.FUNC_SUBTRACT,[lC]:t.FUNC_REVERSE_SUBTRACT};mt[cC]=t.MIN,mt[uC]=t.MAX;const We={[dC]:t.ZERO,[fC]:t.ONE,[hC]:t.SRC_COLOR,[lh]:t.SRC_ALPHA,[xC]:t.SRC_ALPHA_SATURATE,[vC]:t.DST_COLOR,[mC]:t.DST_ALPHA,[pC]:t.ONE_MINUS_SRC_COLOR,[ch]:t.ONE_MINUS_SRC_ALPHA,[_C]:t.ONE_MINUS_DST_COLOR,[gC]:t.ONE_MINUS_DST_ALPHA,[yC]:t.CONSTANT_COLOR,[SC]:t.ONE_MINUS_CONSTANT_COLOR,[EC]:t.CONSTANT_ALPHA,[MC]:t.ONE_MINUS_CONSTANT_ALPHA};function L(U,fe,q,te,pe,he,Ue,xt,qt,it){if(U===Lr){g===!0&&(Ae(t.BLEND),g=!1);return}if(g===!1&&(le(t.BLEND),g=!0),U!==oC){if(U!==p||it!==T){if((u!==ts||S!==ts)&&(t.blendEquation(t.FUNC_ADD),u=ts,S=ts),it)switch(U){case fo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ov:t.blendFunc(t.ONE,t.ONE);break;case av:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case lv:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case fo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ov:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case av:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case lv:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,x=null,C=null,A=null,b.set(0,0,0),P=0,p=U,T=it}return}pe=pe||fe,he=he||q,Ue=Ue||te,(fe!==u||pe!==S)&&(t.blendEquationSeparate(mt[fe],mt[pe]),u=fe,S=pe),(q!==v||te!==x||he!==C||Ue!==A)&&(t.blendFuncSeparate(We[q],We[te],We[he],We[Ue]),v=q,x=te,C=he,A=Ue),(xt.equals(b)===!1||qt!==P)&&(t.blendColor(xt.r,xt.g,xt.b,qt),b.copy(xt),P=qt),p=U,T=!1}function Pn(U,fe){U.side===Ui?Ae(t.CULL_FACE):le(t.CULL_FACE);let q=U.side===_n;fe&&(q=!q),qe(q),U.blending===fo&&U.transparent===!1?L(Lr):L(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const te=U.stencilWrite;a.setTest(te),te&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ct(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):Ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function qe(U){E!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),E=U)}function je(U){U!==iC?(le(t.CULL_FACE),U!==D&&(U===sv?t.cullFace(t.BACK):U===rC?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ae(t.CULL_FACE),D=U}function Te(U){U!==k&&(X&&t.lineWidth(U),k=U)}function ct(U,fe,q){U?(le(t.POLYGON_OFFSET_FILL),(H!==fe||V!==q)&&(t.polygonOffset(fe,q),H=fe,V=q)):Ae(t.POLYGON_OFFSET_FILL)}function we(U){U?le(t.SCISSOR_TEST):Ae(t.SCISSOR_TEST)}function R(U){U===void 0&&(U=t.TEXTURE0+K-1),$!==U&&(t.activeTexture(U),$=U)}function M(U,fe,q){q===void 0&&($===null?q=t.TEXTURE0+K-1:q=$);let te=J[q];te===void 0&&(te={type:void 0,texture:void 0},J[q]=te),(te.type!==U||te.texture!==fe)&&($!==q&&(t.activeTexture(q),$=q),t.bindTexture(U,fe||me[U]),te.type=U,te.texture=fe)}function B(){const U=J[$];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ee(){try{t.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{t.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{t.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{t.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{t.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{t.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $e(){try{t.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{t.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{t.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(){try{t.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(U){ze.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),ze.copy(U))}function ye(U){Y.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),Y.copy(U))}function Xe(U,fe){let q=c.get(fe);q===void 0&&(q=new WeakMap,c.set(fe,q));let te=q.get(U);te===void 0&&(te=t.getUniformBlockIndex(fe,U.name),q.set(U,te))}function ke(U,fe){const te=c.get(fe).get(U);l.get(fe)!==te&&(t.uniformBlockBinding(fe,te,U.__bindingPointIndex),l.set(fe,te))}function at(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},$=null,J={},h={},f=new WeakMap,m=[],_=null,g=!1,p=null,u=null,v=null,x=null,S=null,C=null,A=null,b=new nt(0,0,0),P=0,T=!1,E=null,D=null,k=null,H=null,V=null,ze.set(0,0,t.canvas.width,t.canvas.height),Y.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:le,disable:Ae,bindFramebuffer:Je,drawBuffers:Pe,useProgram:bt,setBlending:L,setMaterial:Pn,setFlipSided:qe,setCullFace:je,setLineWidth:Te,setPolygonOffset:ct,setScissorTest:we,activeTexture:R,bindTexture:M,unbindTexture:B,compressedTexImage2D:ee,compressedTexImage3D:ne,texImage2D:xe,texImage3D:Re,updateUBOMapping:Xe,uniformBlockBinding:ke,texStorage2D:$e,texStorage3D:oe,texSubImage2D:Q,texSubImage3D:Me,compressedTexSubImage2D:de,compressedTexSubImage3D:_e,scissor:De,viewport:ye,reset:at}}function nD(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,d=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,M){return m?new OffscreenCanvas(R,M):lu("canvas")}function g(R,M,B){let ee=1;const ne=we(R);if((ne.width>B||ne.height>B)&&(ee=B/Math.max(ne.width,ne.height)),ee<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Q=Math.floor(ee*ne.width),Me=Math.floor(ee*ne.height);h===void 0&&(h=_(Q,Me));const de=M?_(Q,Me):h;return de.width=Q,de.height=Me,de.getContext("2d").drawImage(R,0,0,Q,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Q+"x"+Me+")."),de}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),R;return R}function p(R){return R.generateMipmaps}function u(R){t.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(R,M,B,ee,ne=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Q=M;if(M===t.RED&&(B===t.FLOAT&&(Q=t.R32F),B===t.HALF_FLOAT&&(Q=t.R16F),B===t.UNSIGNED_BYTE&&(Q=t.R8)),M===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(Q=t.R8UI),B===t.UNSIGNED_SHORT&&(Q=t.R16UI),B===t.UNSIGNED_INT&&(Q=t.R32UI),B===t.BYTE&&(Q=t.R8I),B===t.SHORT&&(Q=t.R16I),B===t.INT&&(Q=t.R32I)),M===t.RG&&(B===t.FLOAT&&(Q=t.RG32F),B===t.HALF_FLOAT&&(Q=t.RG16F),B===t.UNSIGNED_BYTE&&(Q=t.RG8)),M===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(Q=t.RG8UI),B===t.UNSIGNED_SHORT&&(Q=t.RG16UI),B===t.UNSIGNED_INT&&(Q=t.RG32UI),B===t.BYTE&&(Q=t.RG8I),B===t.SHORT&&(Q=t.RG16I),B===t.INT&&(Q=t.RG32I)),M===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),B===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),B===t.UNSIGNED_INT&&(Q=t.RGB32UI),B===t.BYTE&&(Q=t.RGB8I),B===t.SHORT&&(Q=t.RGB16I),B===t.INT&&(Q=t.RGB32I)),M===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),B===t.UNSIGNED_INT&&(Q=t.RGBA32UI),B===t.BYTE&&(Q=t.RGBA8I),B===t.SHORT&&(Q=t.RGBA16I),B===t.INT&&(Q=t.RGBA32I)),M===t.RGB&&B===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),M===t.RGBA){const Me=ne?ou:Ze.getTransfer(ee);B===t.FLOAT&&(Q=t.RGBA32F),B===t.HALF_FLOAT&&(Q=t.RGBA16F),B===t.UNSIGNED_BYTE&&(Q=Me===st?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function S(R,M){let B;return R?M===null||M===ys||M===ja?B=t.DEPTH24_STENCIL8:M===ki?B=t.DEPTH32F_STENCIL8:M===Wa&&(B=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ys||M===ja?B=t.DEPTH_COMPONENT24:M===ki?B=t.DEPTH_COMPONENT32F:M===Wa&&(B=t.DEPTH_COMPONENT16),B}function C(R,M){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==ri&&R.minFilter!==xi?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function A(R){const M=R.target;M.removeEventListener("dispose",A),P(M),M.isVideoTexture&&d.delete(M)}function b(R){const M=R.target;M.removeEventListener("dispose",b),E(M)}function P(R){const M=i.get(R);if(M.__webglInit===void 0)return;const B=R.source,ee=f.get(B);if(ee){const ne=ee[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&T(R),Object.keys(ee).length===0&&f.delete(B)}i.remove(R)}function T(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const B=R.source,ee=f.get(B);delete ee[M.__cacheKey],o.memory.textures--}function E(R){const M=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(M.__webglFramebuffer[ee]))for(let ne=0;ne<M.__webglFramebuffer[ee].length;ne++)t.deleteFramebuffer(M.__webglFramebuffer[ee][ne]);else t.deleteFramebuffer(M.__webglFramebuffer[ee]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[ee])}else{if(Array.isArray(M.__webglFramebuffer))for(let ee=0;ee<M.__webglFramebuffer.length;ee++)t.deleteFramebuffer(M.__webglFramebuffer[ee]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ee=0;ee<M.__webglColorRenderbuffer.length;ee++)M.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[ee]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const B=R.textures;for(let ee=0,ne=B.length;ee<ne;ee++){const Q=i.get(B[ee]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(B[ee])}i.remove(R)}let D=0;function k(){D=0}function H(){const R=D;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),D+=1,R}function V(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function K(R,M){const B=i.get(R);if(R.isVideoTexture&&Te(R),R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){const ee=R.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(B,R,M);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+M)}function X(R,M){const B=i.get(R);if(R.version>0&&B.__version!==R.version){Y(B,R,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+M)}function Z(R,M){const B=i.get(R);if(R.version>0&&B.__version!==R.version){Y(B,R,M);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+M)}function I(R,M){const B=i.get(R);if(R.version>0&&B.__version!==R.version){ae(B,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+M)}const $={[xh]:t.REPEAT,[os]:t.CLAMP_TO_EDGE,[yh]:t.MIRRORED_REPEAT},J={[ri]:t.NEAREST,[LC]:t.NEAREST_MIPMAP_NEAREST,[Dl]:t.NEAREST_MIPMAP_LINEAR,[xi]:t.LINEAR,[xd]:t.LINEAR_MIPMAP_NEAREST,[as]:t.LINEAR_MIPMAP_LINEAR},se={[kC]:t.NEVER,[WC]:t.ALWAYS,[BC]:t.LESS,[hS]:t.LEQUAL,[zC]:t.EQUAL,[GC]:t.GEQUAL,[VC]:t.GREATER,[HC]:t.NOTEQUAL};function Ee(R,M){if(M.type===ki&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===xi||M.magFilter===xd||M.magFilter===Dl||M.magFilter===as||M.minFilter===xi||M.minFilter===xd||M.minFilter===Dl||M.minFilter===as)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,$[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,$[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,$[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,J[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,J[M.minFilter]),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,se[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ri||M.minFilter!==Dl&&M.minFilter!==as||M.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ze(R,M){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",A));const ee=M.source;let ne=f.get(ee);ne===void 0&&(ne={},f.set(ee,ne));const Q=V(M);if(Q!==R.__cacheKey){ne[Q]===void 0&&(ne[Q]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ne[Q].usedTimes++;const Me=ne[R.__cacheKey];Me!==void 0&&(ne[R.__cacheKey].usedTimes--,Me.usedTimes===0&&T(M)),R.__cacheKey=Q,R.__webglTexture=ne[Q].texture}return B}function Y(R,M,B){let ee=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ee=t.TEXTURE_3D);const ne=ze(R,M),Q=M.source;n.bindTexture(ee,R.__webglTexture,t.TEXTURE0+B);const Me=i.get(Q);if(Q.version!==Me.__version||ne===!0){n.activeTexture(t.TEXTURE0+B);const de=Ze.getPrimaries(Ze.workingColorSpace),_e=M.colorSpace===pr?null:Ze.getPrimaries(M.colorSpace),$e=M.colorSpace===pr||de===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let oe=g(M.image,!1,r.maxTextureSize);oe=ct(M,oe);const xe=s.convert(M.format,M.colorSpace),Re=s.convert(M.type);let De=x(M.internalFormat,xe,Re,M.colorSpace,M.isVideoTexture);Ee(ee,M);let ye;const Xe=M.mipmaps,ke=M.isVideoTexture!==!0,at=Me.__version===void 0||ne===!0,U=Q.dataReady,fe=C(M,oe);if(M.isDepthTexture)De=S(M.format===qa,M.type),at&&(ke?n.texStorage2D(t.TEXTURE_2D,1,De,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,De,oe.width,oe.height,0,xe,Re,null));else if(M.isDataTexture)if(Xe.length>0){ke&&at&&n.texStorage2D(t.TEXTURE_2D,fe,De,Xe[0].width,Xe[0].height);for(let q=0,te=Xe.length;q<te;q++)ye=Xe[q],ke?U&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,ye.width,ye.height,xe,Re,ye.data):n.texImage2D(t.TEXTURE_2D,q,De,ye.width,ye.height,0,xe,Re,ye.data);M.generateMipmaps=!1}else ke?(at&&n.texStorage2D(t.TEXTURE_2D,fe,De,oe.width,oe.height),U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe.width,oe.height,xe,Re,oe.data)):n.texImage2D(t.TEXTURE_2D,0,De,oe.width,oe.height,0,xe,Re,oe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ke&&at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,De,Xe[0].width,Xe[0].height,oe.depth);for(let q=0,te=Xe.length;q<te;q++)if(ye=Xe[q],M.format!==ti)if(xe!==null)if(ke){if(U)if(M.layerUpdates.size>0){const pe=Lv(ye.width,ye.height,M.format,M.type);for(const he of M.layerUpdates){const Ue=ye.data.subarray(he*pe/ye.data.BYTES_PER_ELEMENT,(he+1)*pe/ye.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,he,ye.width,ye.height,1,xe,Ue)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,ye.width,ye.height,oe.depth,xe,ye.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,q,De,ye.width,ye.height,oe.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,ye.width,ye.height,oe.depth,xe,Re,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,q,De,ye.width,ye.height,oe.depth,0,xe,Re,ye.data)}else{ke&&at&&n.texStorage2D(t.TEXTURE_2D,fe,De,Xe[0].width,Xe[0].height);for(let q=0,te=Xe.length;q<te;q++)ye=Xe[q],M.format!==ti?xe!==null?ke?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,q,0,0,ye.width,ye.height,xe,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,q,De,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?U&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,ye.width,ye.height,xe,Re,ye.data):n.texImage2D(t.TEXTURE_2D,q,De,ye.width,ye.height,0,xe,Re,ye.data)}else if(M.isDataArrayTexture)if(ke){if(at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,De,oe.width,oe.height,oe.depth),U)if(M.layerUpdates.size>0){const q=Lv(oe.width,oe.height,M.format,M.type);for(const te of M.layerUpdates){const pe=oe.data.subarray(te*q/oe.data.BYTES_PER_ELEMENT,(te+1)*q/oe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,te,oe.width,oe.height,1,xe,Re,pe)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,xe,Re,oe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,De,oe.width,oe.height,oe.depth,0,xe,Re,oe.data);else if(M.isData3DTexture)ke?(at&&n.texStorage3D(t.TEXTURE_3D,fe,De,oe.width,oe.height,oe.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,xe,Re,oe.data)):n.texImage3D(t.TEXTURE_3D,0,De,oe.width,oe.height,oe.depth,0,xe,Re,oe.data);else if(M.isFramebufferTexture){if(at)if(ke)n.texStorage2D(t.TEXTURE_2D,fe,De,oe.width,oe.height);else{let q=oe.width,te=oe.height;for(let pe=0;pe<fe;pe++)n.texImage2D(t.TEXTURE_2D,pe,De,q,te,0,xe,Re,null),q>>=1,te>>=1}}else if(Xe.length>0){if(ke&&at){const q=we(Xe[0]);n.texStorage2D(t.TEXTURE_2D,fe,De,q.width,q.height)}for(let q=0,te=Xe.length;q<te;q++)ye=Xe[q],ke?U&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,xe,Re,ye):n.texImage2D(t.TEXTURE_2D,q,De,xe,Re,ye);M.generateMipmaps=!1}else if(ke){if(at){const q=we(oe);n.texStorage2D(t.TEXTURE_2D,fe,De,q.width,q.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,Re,oe)}else n.texImage2D(t.TEXTURE_2D,0,De,xe,Re,oe);p(M)&&u(ee),Me.__version=Q.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ae(R,M,B){if(M.image.length!==6)return;const ee=ze(R,M),ne=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+B);const Q=i.get(ne);if(ne.version!==Q.__version||ee===!0){n.activeTexture(t.TEXTURE0+B);const Me=Ze.getPrimaries(Ze.workingColorSpace),de=M.colorSpace===pr?null:Ze.getPrimaries(M.colorSpace),_e=M.colorSpace===pr||Me===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const $e=M.isCompressedTexture||M.image[0].isCompressedTexture,oe=M.image[0]&&M.image[0].isDataTexture,xe=[];for(let te=0;te<6;te++)!$e&&!oe?xe[te]=g(M.image[te],!0,r.maxCubemapSize):xe[te]=oe?M.image[te].image:M.image[te],xe[te]=ct(M,xe[te]);const Re=xe[0],De=s.convert(M.format,M.colorSpace),ye=s.convert(M.type),Xe=x(M.internalFormat,De,ye,M.colorSpace),ke=M.isVideoTexture!==!0,at=Q.__version===void 0||ee===!0,U=ne.dataReady;let fe=C(M,Re);Ee(t.TEXTURE_CUBE_MAP,M);let q;if($e){ke&&at&&n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,Xe,Re.width,Re.height);for(let te=0;te<6;te++){q=xe[te].mipmaps;for(let pe=0;pe<q.length;pe++){const he=q[pe];M.format!==ti?De!==null?ke?U&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe,0,0,he.width,he.height,De,he.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe,Xe,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe,0,0,he.width,he.height,De,ye,he.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe,Xe,he.width,he.height,0,De,ye,he.data)}}}else{if(q=M.mipmaps,ke&&at){q.length>0&&fe++;const te=we(xe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,Xe,te.width,te.height)}for(let te=0;te<6;te++)if(oe){ke?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,xe[te].width,xe[te].height,De,ye,xe[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Xe,xe[te].width,xe[te].height,0,De,ye,xe[te].data);for(let pe=0;pe<q.length;pe++){const Ue=q[pe].image[te].image;ke?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe+1,0,0,Ue.width,Ue.height,De,ye,Ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe+1,Xe,Ue.width,Ue.height,0,De,ye,Ue.data)}}else{ke?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,De,ye,xe[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Xe,De,ye,xe[te]);for(let pe=0;pe<q.length;pe++){const he=q[pe];ke?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe+1,0,0,De,ye,he.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe+1,Xe,De,ye,he.image[te])}}}p(M)&&u(t.TEXTURE_CUBE_MAP),Q.__version=ne.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function me(R,M,B,ee,ne,Q){const Me=s.convert(B.format,B.colorSpace),de=s.convert(B.type),_e=x(B.internalFormat,Me,de,B.colorSpace),$e=i.get(M),oe=i.get(B);if(oe.__renderTarget=M,!$e.__hasExternalTextures){const xe=Math.max(1,M.width>>Q),Re=Math.max(1,M.height>>Q);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,Q,_e,xe,Re,M.depth,0,Me,de,null):n.texImage2D(ne,Q,_e,xe,Re,0,Me,de,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),je(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,ne,oe.__webglTexture,0,qe(M)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,ne,oe.__webglTexture,Q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(R,M,B){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer){const ee=M.depthTexture,ne=ee&&ee.isDepthTexture?ee.type:null,Q=S(M.stencilBuffer,ne),Me=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=qe(M);je(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,de,Q,M.width,M.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,de,Q,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Q,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Me,t.RENDERBUFFER,R)}else{const ee=M.textures;for(let ne=0;ne<ee.length;ne++){const Q=ee[ne],Me=s.convert(Q.format,Q.colorSpace),de=s.convert(Q.type),_e=x(Q.internalFormat,Me,de,Q.colorSpace),$e=qe(M);B&&je(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,$e,_e,M.width,M.height):je(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,$e,_e,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,_e,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ae(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=i.get(M.depthTexture);ee.__renderTarget=M,(!ee.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),K(M.depthTexture,0);const ne=ee.__webglTexture,Q=qe(M);if(M.depthTexture.format===Xa)je(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0);else if(M.depthTexture.format===qa)je(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Je(R){const M=i.get(R),B=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const ee=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ee){const ne=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ee.removeEventListener("dispose",ne)};ee.addEventListener("dispose",ne),M.__depthDisposeCallback=ne}M.__boundDepthTexture=ee}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ae(M.__webglFramebuffer,R)}else if(B){M.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[ee]),M.__webglDepthbuffer[ee]===void 0)M.__webglDepthbuffer[ee]=t.createRenderbuffer(),le(M.__webglDepthbuffer[ee],R,!1);else{const ne=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer[ee];t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,Q)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),le(M.__webglDepthbuffer,R,!1);else{const ee=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ne),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,ne)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Pe(R,M,B){const ee=i.get(R);M!==void 0&&me(ee.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&Je(R)}function bt(R){const M=R.texture,B=i.get(R),ee=i.get(M);R.addEventListener("dispose",b);const ne=R.textures,Q=R.isWebGLCubeRenderTarget===!0,Me=ne.length>1;if(Me||(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=M.version,o.memory.textures++),Q){B.__webglFramebuffer=[];for(let de=0;de<6;de++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[de]=[];for(let _e=0;_e<M.mipmaps.length;_e++)B.__webglFramebuffer[de][_e]=t.createFramebuffer()}else B.__webglFramebuffer[de]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let de=0;de<M.mipmaps.length;de++)B.__webglFramebuffer[de]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(Me)for(let de=0,_e=ne.length;de<_e;de++){const $e=i.get(ne[de]);$e.__webglTexture===void 0&&($e.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&je(R)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let de=0;de<ne.length;de++){const _e=ne[de];B.__webglColorRenderbuffer[de]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[de]);const $e=s.convert(_e.format,_e.colorSpace),oe=s.convert(_e.type),xe=x(_e.internalFormat,$e,oe,_e.colorSpace,R.isXRRenderTarget===!0),Re=qe(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Re,xe,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,B.__webglColorRenderbuffer[de])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),le(B.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),Ee(t.TEXTURE_CUBE_MAP,M);for(let de=0;de<6;de++)if(M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)me(B.__webglFramebuffer[de][_e],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,_e);else me(B.__webglFramebuffer[de],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);p(M)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Me){for(let de=0,_e=ne.length;de<_e;de++){const $e=ne[de],oe=i.get($e);n.bindTexture(t.TEXTURE_2D,oe.__webglTexture),Ee(t.TEXTURE_2D,$e),me(B.__webglFramebuffer,R,$e,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,0),p($e)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let de=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(de=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(de,ee.__webglTexture),Ee(de,M),M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)me(B.__webglFramebuffer[_e],R,M,t.COLOR_ATTACHMENT0,de,_e);else me(B.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,de,0);p(M)&&u(de),n.unbindTexture()}R.depthBuffer&&Je(R)}function mt(R){const M=R.textures;for(let B=0,ee=M.length;B<ee;B++){const ne=M[B];if(p(ne)){const Q=v(R),Me=i.get(ne).__webglTexture;n.bindTexture(Q,Me),u(Q),n.unbindTexture()}}}const We=[],L=[];function Pn(R){if(R.samples>0){if(je(R)===!1){const M=R.textures,B=R.width,ee=R.height;let ne=t.COLOR_BUFFER_BIT;const Q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Me=i.get(R),de=M.length>1;if(de)for(let _e=0;_e<M.length;_e++)n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let _e=0;_e<M.length;_e++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),de){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Me.__webglColorRenderbuffer[_e]);const $e=i.get(M[_e]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,$e,0)}t.blitFramebuffer(0,0,B,ee,0,0,B,ee,ne,t.NEAREST),l===!0&&(We.length=0,L.length=0,We.push(t.COLOR_ATTACHMENT0+_e),R.depthBuffer&&R.resolveDepthBuffer===!1&&(We.push(Q),L.push(Q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,L)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,We))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),de)for(let _e=0;_e<M.length;_e++){n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,Me.__webglColorRenderbuffer[_e]);const $e=i.get(M[_e]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,$e,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function qe(R){return Math.min(r.maxSamples,R.samples)}function je(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Te(R){const M=o.render.frame;d.get(R)!==M&&(d.set(R,M),R.update())}function ct(R,M){const B=R.colorSpace,ee=R.format,ne=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==Fo&&B!==pr&&(Ze.getTransfer(B)===st?(ee!==ti||ne!==Yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}function we(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=k,this.setTexture2D=K,this.setTexture2DArray=X,this.setTexture3D=Z,this.setTextureCube=I,this.rebindTextures=Pe,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=Pn,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=me,this.useMultisampledRTT=je}function iD(t,e){function n(i,r=pr){let s;const o=Ze.getTransfer(r);if(i===Yi)return t.UNSIGNED_BYTE;if(i===cm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===um)return t.UNSIGNED_SHORT_5_5_5_1;if(i===sS)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===iS)return t.BYTE;if(i===rS)return t.SHORT;if(i===Wa)return t.UNSIGNED_SHORT;if(i===lm)return t.INT;if(i===ys)return t.UNSIGNED_INT;if(i===ki)return t.FLOAT;if(i===il)return t.HALF_FLOAT;if(i===oS)return t.ALPHA;if(i===aS)return t.RGB;if(i===ti)return t.RGBA;if(i===lS)return t.LUMINANCE;if(i===cS)return t.LUMINANCE_ALPHA;if(i===Xa)return t.DEPTH_COMPONENT;if(i===qa)return t.DEPTH_STENCIL;if(i===uS)return t.RED;if(i===dm)return t.RED_INTEGER;if(i===dS)return t.RG;if(i===fm)return t.RG_INTEGER;if(i===hm)return t.RGBA_INTEGER;if(i===bc||i===Cc||i===Ac||i===Rc)if(o===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===bc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Cc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ac)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Rc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===bc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Cc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ac)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Rc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Sh||i===Eh||i===Mh||i===wh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Sh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Eh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Mh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Th||i===bh||i===Ch)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Th||i===bh)return o===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ch)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ah||i===Rh||i===Ph||i===Nh||i===Dh||i===Lh||i===Ih||i===Uh||i===Fh||i===Oh||i===kh||i===Bh||i===zh||i===Vh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ah)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ph)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Nh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Dh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Lh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ih)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Uh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Oh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===kh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Vh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Pc||i===Hh||i===Gh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Pc)return o===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===fS||i===Wh||i===jh||i===Xh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Pc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Wh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ja?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const rD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sD=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class oD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new xn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Br({vertexShader:rD,fragmentShader:sD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new zi(new Uu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class aD extends Ho{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,f=null,m=null,_=null;const g=new oD,p=n.getContextAttributes();let u=null,v=null;const x=[],S=[],C=new ot;let A=null;const b=new kn;b.viewport=new Rt;const P=new kn;P.viewport=new Rt;const T=[b,P],E=new AA;let D=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ae=x[Y];return ae===void 0&&(ae=new Vd,x[Y]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Y){let ae=x[Y];return ae===void 0&&(ae=new Vd,x[Y]=ae),ae.getGripSpace()},this.getHand=function(Y){let ae=x[Y];return ae===void 0&&(ae=new Vd,x[Y]=ae),ae.getHandSpace()};function H(Y){const ae=S.indexOf(Y.inputSource);if(ae===-1)return;const me=x[ae];me!==void 0&&(me.update(Y.inputSource,Y.frame,c||o),me.dispatchEvent({type:Y.type,data:Y.inputSource}))}function V(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",K);for(let Y=0;Y<x.length;Y++){const ae=S[Y];ae!==null&&(S[Y]=null,x[Y].disconnect(ae))}D=null,k=null,g.reset(),e.setRenderTarget(u),m=null,f=null,h=null,r=null,v=null,ze.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",V),r.addEventListener("inputsourceschange",K),p.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,le=null,Ae=null;p.depth&&(Ae=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,me=p.stencil?qa:Xa,le=p.stencil?ja:ys);const Je={colorFormat:n.RGBA8,depthFormat:Ae,scaleFactor:s};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(Je),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Ss(f.textureWidth,f.textureHeight,{format:ti,type:Yi,depthTexture:new CS(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const me={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,me),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new Ss(m.framebufferWidth,m.framebufferHeight,{format:ti,type:Yi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ze.setContext(r),ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function K(Y){for(let ae=0;ae<Y.removed.length;ae++){const me=Y.removed[ae],le=S.indexOf(me);le>=0&&(S[le]=null,x[le].disconnect(me))}for(let ae=0;ae<Y.added.length;ae++){const me=Y.added[ae];let le=S.indexOf(me);if(le===-1){for(let Je=0;Je<x.length;Je++)if(Je>=S.length){S.push(me),le=Je;break}else if(S[Je]===null){S[Je]=me,le=Je;break}if(le===-1)break}const Ae=x[le];Ae&&Ae.connect(me)}}const X=new z,Z=new z;function I(Y,ae,me){X.setFromMatrixPosition(ae.matrixWorld),Z.setFromMatrixPosition(me.matrixWorld);const le=X.distanceTo(Z),Ae=ae.projectionMatrix.elements,Je=me.projectionMatrix.elements,Pe=Ae[14]/(Ae[10]-1),bt=Ae[14]/(Ae[10]+1),mt=(Ae[9]+1)/Ae[5],We=(Ae[9]-1)/Ae[5],L=(Ae[8]-1)/Ae[0],Pn=(Je[8]+1)/Je[0],qe=Pe*L,je=Pe*Pn,Te=le/(-L+Pn),ct=Te*-L;if(ae.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ct),Y.translateZ(Te),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ae[10]===-1)Y.projectionMatrix.copy(ae.projectionMatrix),Y.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const we=Pe+Te,R=bt+Te,M=qe-ct,B=je+(le-ct),ee=mt*bt/R*we,ne=We*bt/R*we;Y.projectionMatrix.makePerspective(M,B,ee,ne,we,R),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function $(Y,ae){ae===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ae.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let ae=Y.near,me=Y.far;g.texture!==null&&(g.depthNear>0&&(ae=g.depthNear),g.depthFar>0&&(me=g.depthFar)),E.near=P.near=b.near=ae,E.far=P.far=b.far=me,(D!==E.near||k!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),D=E.near,k=E.far),b.layers.mask=Y.layers.mask|2,P.layers.mask=Y.layers.mask|4,E.layers.mask=b.layers.mask|P.layers.mask;const le=Y.parent,Ae=E.cameras;$(E,le);for(let Je=0;Je<Ae.length;Je++)$(Ae[Je],le);Ae.length===2?I(E,b,P):E.projectionMatrix.copy(b.projectionMatrix),J(Y,E,le)};function J(Y,ae,me){me===null?Y.matrix.copy(ae.matrixWorld):(Y.matrix.copy(me.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ae.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ae.projectionMatrix),Y.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=qh*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(E)};let se=null;function Ee(Y,ae){if(d=ae.getViewerPose(c||o),_=ae,d!==null){const me=d.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let le=!1;me.length!==E.cameras.length&&(E.cameras.length=0,le=!0);for(let Pe=0;Pe<me.length;Pe++){const bt=me[Pe];let mt=null;if(m!==null)mt=m.getViewport(bt);else{const L=h.getViewSubImage(f,bt);mt=L.viewport,Pe===0&&(e.setRenderTargetTextures(v,L.colorTexture,L.depthStencilTexture),e.setRenderTarget(v))}let We=T[Pe];We===void 0&&(We=new kn,We.layers.enable(Pe),We.viewport=new Rt,T[Pe]=We),We.matrix.fromArray(bt.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(bt.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(mt.x,mt.y,mt.width,mt.height),Pe===0&&(E.matrix.copy(We.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),le===!0&&E.cameras.push(We)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&h){const Pe=h.getDepthInformation(me[0]);Pe&&Pe.isValid&&Pe.texture&&g.init(e,Pe,r.renderState)}}for(let me=0;me<x.length;me++){const le=S[me],Ae=x[me];le!==null&&Ae!==void 0&&Ae.update(le,ae,c||o)}se&&se(Y,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),_=null}const ze=new AS;ze.setAnimationLoop(Ee),this.setAnimationLoop=function(Y){se=Y},this.dispose=function(){}}}const Kr=new Ki,lD=new Mt;function cD(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,SS(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,v,x,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),h(p,u)):u.isMeshPhongMaterial?(s(p,u),d(p,u)):u.isMeshStandardMaterial?(s(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,S)):u.isMeshMatcapMaterial?(s(p,u),_(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),g(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,v,x):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===_n&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===_n&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const v=e.get(u),x=v.envMap,S=v.envMapRotation;x&&(p.envMap.value=x,Kr.copy(S),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),p.envMapRotation.value.setFromMatrix4(lD.makeRotationFromEuler(Kr)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,v,x){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*v,p.scale.value=x*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,v){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===_n&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function g(p,u){const v=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function uD(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const S=x.program;i.uniformBlockBinding(v,S)}function c(v,x){let S=r[v.id];S===void 0&&(_(v),S=d(v),r[v.id]=S,v.addEventListener("dispose",p));const C=x.program;i.updateUBOMapping(v,C);const A=e.render.frame;s[v.id]!==A&&(f(v),s[v.id]=A)}function d(v){const x=h();v.__bindingPointIndex=x;const S=t.createBuffer(),C=v.__size,A=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,C,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,S),S}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const x=r[v.id],S=v.uniforms,C=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let A=0,b=S.length;A<b;A++){const P=Array.isArray(S[A])?S[A]:[S[A]];for(let T=0,E=P.length;T<E;T++){const D=P[T];if(m(D,A,T,C)===!0){const k=D.__offset,H=Array.isArray(D.value)?D.value:[D.value];let V=0;for(let K=0;K<H.length;K++){const X=H[K],Z=g(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,k+V,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):(X.toArray(D.__data,V),V+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,k,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(v,x,S,C){const A=v.value,b=x+"_"+S;if(C[b]===void 0)return typeof A=="number"||typeof A=="boolean"?C[b]=A:C[b]=A.clone(),!0;{const P=C[b];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return C[b]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function _(v){const x=v.uniforms;let S=0;const C=16;for(let b=0,P=x.length;b<P;b++){const T=Array.isArray(x[b])?x[b]:[x[b]];for(let E=0,D=T.length;E<D;E++){const k=T[E],H=Array.isArray(k.value)?k.value:[k.value];for(let V=0,K=H.length;V<K;V++){const X=H[V],Z=g(X),I=S%C,$=I%Z.boundary,J=I+$;S+=$,J!==0&&C-J<Z.storage&&(S+=C-J),k.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=Z.storage}}}const A=S%C;return A>0&&(S+=C-A),v.__size=S,v.__cache={},this}function g(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function p(v){const x=v.target;x.removeEventListener("dispose",p);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class dD{constructor(e={}){const{canvas:n=XC(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const _=new Uint32Array(4),g=new Int32Array(4);let p=null,u=null;const v=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ir,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let C=!1;this._outputColorSpace=Un;let A=0,b=0,P=null,T=-1,E=null;const D=new Rt,k=new Rt;let H=null;const V=new nt(0);let K=0,X=n.width,Z=n.height,I=1,$=null,J=null;const se=new Rt(0,0,X,Z),Ee=new Rt(0,0,X,Z);let ze=!1;const Y=new wS;let ae=!1,me=!1;const le=new Mt,Ae=new Mt,Je=new z,Pe=new Rt,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function We(){return P===null?I:1}let L=i;function Pn(w,F){return n.getContext(w,F)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${am}`),n.addEventListener("webglcontextlost",te,!1),n.addEventListener("webglcontextrestored",pe,!1),n.addEventListener("webglcontextcreationerror",he,!1),L===null){const F="webgl2";if(L=Pn(F,w),L===null)throw Pn(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let qe,je,Te,ct,we,R,M,B,ee,ne,Q,Me,de,_e,$e,oe,xe,Re,De,ye,Xe,ke,at,U;function fe(){qe=new SP(L),qe.init(),ke=new iD(L,qe),je=new pP(L,qe,e,ke),Te=new tD(L,qe),je.reverseDepthBuffer&&f&&Te.buffers.depth.setReversed(!0),ct=new wP(L),we=new HN,R=new nD(L,qe,Te,we,je,ke,ct),M=new gP(S),B=new yP(S),ee=new PA(L),at=new fP(L,ee),ne=new EP(L,ee,ct,at),Q=new bP(L,ne,ee,ct),De=new TP(L,je,R),oe=new mP(we),Me=new VN(S,M,B,qe,je,at,oe),de=new cD(S,we),_e=new WN,$e=new KN(qe),Re=new dP(S,M,B,Te,Q,m,l),xe=new JN(S,Q,je),U=new uD(L,ct,je,Te),ye=new hP(L,qe,ct),Xe=new MP(L,qe,ct),ct.programs=Me.programs,S.capabilities=je,S.extensions=qe,S.properties=we,S.renderLists=_e,S.shadowMap=xe,S.state=Te,S.info=ct}fe();const q=new aD(S,L);this.xr=q,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=qe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=qe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(w){w!==void 0&&(I=w,this.setSize(X,Z,!1))},this.getSize=function(w){return w.set(X,Z)},this.setSize=function(w,F,G=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=w,Z=F,n.width=Math.floor(w*I),n.height=Math.floor(F*I),G===!0&&(n.style.width=w+"px",n.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(X*I,Z*I).floor()},this.setDrawingBufferSize=function(w,F,G){X=w,Z=F,I=G,n.width=Math.floor(w*G),n.height=Math.floor(F*G),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(D)},this.getViewport=function(w){return w.copy(se)},this.setViewport=function(w,F,G,W){w.isVector4?se.set(w.x,w.y,w.z,w.w):se.set(w,F,G,W),Te.viewport(D.copy(se).multiplyScalar(I).round())},this.getScissor=function(w){return w.copy(Ee)},this.setScissor=function(w,F,G,W){w.isVector4?Ee.set(w.x,w.y,w.z,w.w):Ee.set(w,F,G,W),Te.scissor(k.copy(Ee).multiplyScalar(I).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(w){Te.setScissorTest(ze=w)},this.setOpaqueSort=function(w){$=w},this.setTransparentSort=function(w){J=w},this.getClearColor=function(w){return w.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(w=!0,F=!0,G=!0){let W=0;if(w){let O=!1;if(P!==null){const re=P.texture.format;O=re===hm||re===fm||re===dm}if(O){const re=P.texture.type,ue=re===Yi||re===ys||re===Wa||re===ja||re===cm||re===um,ve=Re.getClearColor(),Se=Re.getClearAlpha(),Le=ve.r,Ne=ve.g,be=ve.b;ue?(_[0]=Le,_[1]=Ne,_[2]=be,_[3]=Se,L.clearBufferuiv(L.COLOR,0,_)):(g[0]=Le,g[1]=Ne,g[2]=be,g[3]=Se,L.clearBufferiv(L.COLOR,0,g))}else W|=L.COLOR_BUFFER_BIT}F&&(W|=L.DEPTH_BUFFER_BIT),G&&(W|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",te,!1),n.removeEventListener("webglcontextrestored",pe,!1),n.removeEventListener("webglcontextcreationerror",he,!1),Re.dispose(),_e.dispose(),$e.dispose(),we.dispose(),M.dispose(),B.dispose(),Q.dispose(),at.dispose(),U.dispose(),Me.dispose(),q.dispose(),q.removeEventListener("sessionstart",Sm),q.removeEventListener("sessionend",Em),Gr.stop()};function te(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const w=ct.autoReset,F=xe.enabled,G=xe.autoUpdate,W=xe.needsUpdate,O=xe.type;fe(),ct.autoReset=w,xe.enabled=F,xe.autoUpdate=G,xe.needsUpdate=W,xe.type=O}function he(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ue(w){const F=w.target;F.removeEventListener("dispose",Ue),xt(F)}function xt(w){qt(w),we.remove(w)}function qt(w){const F=we.get(w).programs;F!==void 0&&(F.forEach(function(G){Me.releaseProgram(G)}),w.isShaderMaterial&&Me.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,G,W,O,re){F===null&&(F=bt);const ue=O.isMesh&&O.matrixWorld.determinant()<0,ve=xE(w,F,G,W,O);Te.setMaterial(W,ue);let Se=G.index,Le=1;if(W.wireframe===!0){if(Se=ne.getWireframeAttribute(G),Se===void 0)return;Le=2}const Ne=G.drawRange,be=G.attributes.position;let Ye=Ne.start*Le,et=(Ne.start+Ne.count)*Le;re!==null&&(Ye=Math.max(Ye,re.start*Le),et=Math.min(et,(re.start+re.count)*Le)),Se!==null?(Ye=Math.max(Ye,0),et=Math.min(et,Se.count)):be!=null&&(Ye=Math.max(Ye,0),et=Math.min(et,be.count));const Pt=et-Ye;if(Pt<0||Pt===1/0)return;at.setup(O,W,ve,G,Se);let yt,Qe=ye;if(Se!==null&&(yt=ee.get(Se),Qe=Xe,Qe.setIndex(yt)),O.isMesh)W.wireframe===!0?(Te.setLineWidth(W.wireframeLinewidth*We()),Qe.setMode(L.LINES)):Qe.setMode(L.TRIANGLES);else if(O.isLine){let Ce=W.linewidth;Ce===void 0&&(Ce=1),Te.setLineWidth(Ce*We()),O.isLineSegments?Qe.setMode(L.LINES):O.isLineLoop?Qe.setMode(L.LINE_LOOP):Qe.setMode(L.LINE_STRIP)}else O.isPoints?Qe.setMode(L.POINTS):O.isSprite&&Qe.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Nc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Qe.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(qe.get("WEBGL_multi_draw"))Qe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ce=O._multiDrawStarts,Vt=O._multiDrawCounts,tt=O._multiDrawCount,Wn=Se?ee.get(Se).bytesPerElement:1,Ts=we.get(W).currentProgram.getUniforms();for(let yn=0;yn<tt;yn++)Ts.setValue(L,"_gl_DrawID",yn),Qe.render(Ce[yn]/Wn,Vt[yn])}else if(O.isInstancedMesh)Qe.renderInstances(Ye,Pt,O.count);else if(G.isInstancedBufferGeometry){const Ce=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Vt=Math.min(G.instanceCount,Ce);Qe.renderInstances(Ye,Pt,Vt)}else Qe.render(Ye,Pt)};function it(w,F,G){w.transparent===!0&&w.side===Ui&&w.forceSinglePass===!1?(w.side=_n,w.needsUpdate=!0,ul(w,F,G),w.side=kr,w.needsUpdate=!0,ul(w,F,G),w.side=Ui):ul(w,F,G)}this.compile=function(w,F,G=null){G===null&&(G=w),u=$e.get(G),u.init(F),x.push(u),G.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),w!==G&&w.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),u.setupLights();const W=new Set;return w.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const re=O.material;if(re)if(Array.isArray(re))for(let ue=0;ue<re.length;ue++){const ve=re[ue];it(ve,G,O),W.add(ve)}else it(re,G,O),W.add(re)}),u=x.pop(),W},this.compileAsync=function(w,F,G=null){const W=this.compile(w,F,G);return new Promise(O=>{function re(){if(W.forEach(function(ue){we.get(ue).currentProgram.isReady()&&W.delete(ue)}),W.size===0){O(w);return}setTimeout(re,10)}qe.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Gn=null;function Mi(w){Gn&&Gn(w)}function Sm(){Gr.stop()}function Em(){Gr.start()}const Gr=new AS;Gr.setAnimationLoop(Mi),typeof self<"u"&&Gr.setContext(self),this.setAnimationLoop=function(w){Gn=w,q.setAnimationLoop(w),w===null?Gr.stop():Gr.start()},q.addEventListener("sessionstart",Sm),q.addEventListener("sessionend",Em),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(F),F=q.getCamera()),w.isScene===!0&&w.onBeforeRender(S,w,F,P),u=$e.get(w,x.length),u.init(F),x.push(u),Ae.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Y.setFromProjectionMatrix(Ae),me=this.localClippingEnabled,ae=oe.init(this.clippingPlanes,me),p=_e.get(w,v.length),p.init(),v.push(p),q.enabled===!0&&q.isPresenting===!0){const re=S.xr.getDepthSensingMesh();re!==null&&ku(re,F,-1/0,S.sortObjects)}ku(w,F,0,S.sortObjects),p.finish(),S.sortObjects===!0&&p.sort($,J),mt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,mt&&Re.addToRenderList(p,w),this.info.render.frame++,ae===!0&&oe.beginShadows();const G=u.state.shadowsArray;xe.render(G,w,F),ae===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=p.opaque,O=p.transmissive;if(u.setupLights(),F.isArrayCamera){const re=F.cameras;if(O.length>0)for(let ue=0,ve=re.length;ue<ve;ue++){const Se=re[ue];wm(W,O,w,Se)}mt&&Re.render(w);for(let ue=0,ve=re.length;ue<ve;ue++){const Se=re[ue];Mm(p,w,Se,Se.viewport)}}else O.length>0&&wm(W,O,w,F),mt&&Re.render(w),Mm(p,w,F);P!==null&&b===0&&(R.updateMultisampleRenderTarget(P),R.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(S,w,F),at.resetDefaultState(),T=-1,E=null,x.pop(),x.length>0?(u=x[x.length-1],ae===!0&&oe.setGlobalState(S.clippingPlanes,u.state.camera)):u=null,v.pop(),v.length>0?p=v[v.length-1]:p=null};function ku(w,F,G,W){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)u.pushLight(w),w.castShadow&&u.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Y.intersectsSprite(w)){W&&Pe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ae);const ue=Q.update(w),ve=w.material;ve.visible&&p.push(w,ue,ve,G,Pe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Y.intersectsObject(w))){const ue=Q.update(w),ve=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Pe.copy(w.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Pe.copy(ue.boundingSphere.center)),Pe.applyMatrix4(w.matrixWorld).applyMatrix4(Ae)),Array.isArray(ve)){const Se=ue.groups;for(let Le=0,Ne=Se.length;Le<Ne;Le++){const be=Se[Le],Ye=ve[be.materialIndex];Ye&&Ye.visible&&p.push(w,ue,Ye,G,Pe.z,be)}}else ve.visible&&p.push(w,ue,ve,G,Pe.z,null)}}const re=w.children;for(let ue=0,ve=re.length;ue<ve;ue++)ku(re[ue],F,G,W)}function Mm(w,F,G,W){const O=w.opaque,re=w.transmissive,ue=w.transparent;u.setupLightsView(G),ae===!0&&oe.setGlobalState(S.clippingPlanes,G),W&&Te.viewport(D.copy(W)),O.length>0&&cl(O,F,G),re.length>0&&cl(re,F,G),ue.length>0&&cl(ue,F,G),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function wm(w,F,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[W.id]===void 0&&(u.state.transmissionRenderTarget[W.id]=new Ss(1,1,{generateMipmaps:!0,type:qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float")?il:Yi,minFilter:as,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const re=u.state.transmissionRenderTarget[W.id],ue=W.viewport||D;re.setSize(ue.z*S.transmissionResolutionScale,ue.w*S.transmissionResolutionScale);const ve=S.getRenderTarget();S.setRenderTarget(re),S.getClearColor(V),K=S.getClearAlpha(),K<1&&S.setClearColor(16777215,.5),S.clear(),mt&&Re.render(G);const Se=S.toneMapping;S.toneMapping=Ir;const Le=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),u.setupLightsView(W),ae===!0&&oe.setGlobalState(S.clippingPlanes,W),cl(w,G,W),R.updateMultisampleRenderTarget(re),R.updateRenderTargetMipmap(re),qe.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let be=0,Ye=F.length;be<Ye;be++){const et=F[be],Pt=et.object,yt=et.geometry,Qe=et.material,Ce=et.group;if(Qe.side===Ui&&Pt.layers.test(W.layers)){const Vt=Qe.side;Qe.side=_n,Qe.needsUpdate=!0,Tm(Pt,G,W,yt,Qe,Ce),Qe.side=Vt,Qe.needsUpdate=!0,Ne=!0}}Ne===!0&&(R.updateMultisampleRenderTarget(re),R.updateRenderTargetMipmap(re))}S.setRenderTarget(ve),S.setClearColor(V,K),Le!==void 0&&(W.viewport=Le),S.toneMapping=Se}function cl(w,F,G){const W=F.isScene===!0?F.overrideMaterial:null;for(let O=0,re=w.length;O<re;O++){const ue=w[O],ve=ue.object,Se=ue.geometry,Le=ue.group;let Ne=ue.material;Ne.allowOverride===!0&&W!==null&&(Ne=W),ve.layers.test(G.layers)&&Tm(ve,F,G,Se,Ne,Le)}}function Tm(w,F,G,W,O,re){w.onBeforeRender(S,F,G,W,O,re),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(S,F,G,W,w,re),O.transparent===!0&&O.side===Ui&&O.forceSinglePass===!1?(O.side=_n,O.needsUpdate=!0,S.renderBufferDirect(G,F,W,O,w,re),O.side=kr,O.needsUpdate=!0,S.renderBufferDirect(G,F,W,O,w,re),O.side=Ui):S.renderBufferDirect(G,F,W,O,w,re),w.onAfterRender(S,F,G,W,O,re)}function ul(w,F,G){F.isScene!==!0&&(F=bt);const W=we.get(w),O=u.state.lights,re=u.state.shadowsArray,ue=O.state.version,ve=Me.getParameters(w,O.state,re,F,G),Se=Me.getProgramCacheKey(ve);let Le=W.programs;W.environment=w.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(w.isMeshStandardMaterial?B:M).get(w.envMap||W.environment),W.envMapRotation=W.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Le===void 0&&(w.addEventListener("dispose",Ue),Le=new Map,W.programs=Le);let Ne=Le.get(Se);if(Ne!==void 0){if(W.currentProgram===Ne&&W.lightsStateVersion===ue)return Cm(w,ve),Ne}else ve.uniforms=Me.getUniforms(w),w.onBeforeCompile(ve,S),Ne=Me.acquireProgram(ve,Se),Le.set(Se,Ne),W.uniforms=ve.uniforms;const be=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(be.clippingPlanes=oe.uniform),Cm(w,ve),W.needsLights=SE(w),W.lightsStateVersion=ue,W.needsLights&&(be.ambientLightColor.value=O.state.ambient,be.lightProbe.value=O.state.probe,be.directionalLights.value=O.state.directional,be.directionalLightShadows.value=O.state.directionalShadow,be.spotLights.value=O.state.spot,be.spotLightShadows.value=O.state.spotShadow,be.rectAreaLights.value=O.state.rectArea,be.ltc_1.value=O.state.rectAreaLTC1,be.ltc_2.value=O.state.rectAreaLTC2,be.pointLights.value=O.state.point,be.pointLightShadows.value=O.state.pointShadow,be.hemisphereLights.value=O.state.hemi,be.directionalShadowMap.value=O.state.directionalShadowMap,be.directionalShadowMatrix.value=O.state.directionalShadowMatrix,be.spotShadowMap.value=O.state.spotShadowMap,be.spotLightMatrix.value=O.state.spotLightMatrix,be.spotLightMap.value=O.state.spotLightMap,be.pointShadowMap.value=O.state.pointShadowMap,be.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=Ne,W.uniformsList=null,Ne}function bm(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=Dc.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function Cm(w,F){const G=we.get(w);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function xE(w,F,G,W,O){F.isScene!==!0&&(F=bt),R.resetTextureUnits();const re=F.fog,ue=W.isMeshStandardMaterial?F.environment:null,ve=P===null?S.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Fo,Se=(W.isMeshStandardMaterial?B:M).get(W.envMap||ue),Le=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ne=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),be=!!G.morphAttributes.position,Ye=!!G.morphAttributes.normal,et=!!G.morphAttributes.color;let Pt=Ir;W.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Pt=S.toneMapping);const yt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Qe=yt!==void 0?yt.length:0,Ce=we.get(W),Vt=u.state.lights;if(ae===!0&&(me===!0||w!==E)){const tn=w===E&&W.id===T;oe.setState(W,w,tn)}let tt=!1;W.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Vt.state.version||Ce.outputColorSpace!==ve||O.isBatchedMesh&&Ce.batching===!1||!O.isBatchedMesh&&Ce.batching===!0||O.isBatchedMesh&&Ce.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ce.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ce.instancing===!1||!O.isInstancedMesh&&Ce.instancing===!0||O.isSkinnedMesh&&Ce.skinning===!1||!O.isSkinnedMesh&&Ce.skinning===!0||O.isInstancedMesh&&Ce.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ce.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ce.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ce.instancingMorph===!1&&O.morphTexture!==null||Ce.envMap!==Se||W.fog===!0&&Ce.fog!==re||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==oe.numPlanes||Ce.numIntersection!==oe.numIntersection)||Ce.vertexAlphas!==Le||Ce.vertexTangents!==Ne||Ce.morphTargets!==be||Ce.morphNormals!==Ye||Ce.morphColors!==et||Ce.toneMapping!==Pt||Ce.morphTargetsCount!==Qe)&&(tt=!0):(tt=!0,Ce.__version=W.version);let Wn=Ce.currentProgram;tt===!0&&(Wn=ul(W,F,O));let Ts=!1,yn=!1,jo=!1;const ht=Wn.getUniforms(),Nn=Ce.uniforms;if(Te.useProgram(Wn.program)&&(Ts=!0,yn=!0,jo=!0),W.id!==T&&(T=W.id,yn=!0),Ts||E!==w){Te.buffers.depth.getReversed()?(le.copy(w.projectionMatrix),$C(le),YC(le),ht.setValue(L,"projectionMatrix",le)):ht.setValue(L,"projectionMatrix",w.projectionMatrix),ht.setValue(L,"viewMatrix",w.matrixWorldInverse);const un=ht.map.cameraPosition;un!==void 0&&un.setValue(L,Je.setFromMatrixPosition(w.matrixWorld)),je.logarithmicDepthBuffer&&ht.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ht.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),E!==w&&(E=w,yn=!0,jo=!0)}if(O.isSkinnedMesh){ht.setOptional(L,O,"bindMatrix"),ht.setOptional(L,O,"bindMatrixInverse");const tn=O.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),ht.setValue(L,"boneTexture",tn.boneTexture,R))}O.isBatchedMesh&&(ht.setOptional(L,O,"batchingTexture"),ht.setValue(L,"batchingTexture",O._matricesTexture,R),ht.setOptional(L,O,"batchingIdTexture"),ht.setValue(L,"batchingIdTexture",O._indirectTexture,R),ht.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&ht.setValue(L,"batchingColorTexture",O._colorsTexture,R));const Dn=G.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&De.update(O,G,Wn),(yn||Ce.receiveShadow!==O.receiveShadow)&&(Ce.receiveShadow=O.receiveShadow,ht.setValue(L,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Nn.envMap.value=Se,Nn.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(Nn.envMapIntensity.value=F.environmentIntensity),yn&&(ht.setValue(L,"toneMappingExposure",S.toneMappingExposure),Ce.needsLights&&yE(Nn,jo),re&&W.fog===!0&&de.refreshFogUniforms(Nn,re),de.refreshMaterialUniforms(Nn,W,I,Z,u.state.transmissionRenderTarget[w.id]),Dc.upload(L,bm(Ce),Nn,R)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Dc.upload(L,bm(Ce),Nn,R),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ht.setValue(L,"center",O.center),ht.setValue(L,"modelViewMatrix",O.modelViewMatrix),ht.setValue(L,"normalMatrix",O.normalMatrix),ht.setValue(L,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const tn=W.uniformsGroups;for(let un=0,Bu=tn.length;un<Bu;un++){const Wr=tn[un];U.update(Wr,Wn),U.bind(Wr,Wn)}}return Wn}function yE(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function SE(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,F,G){const W=we.get(w);W.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),we.get(w.texture).__webglTexture=F,we.get(w.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:G,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,F){const G=we.get(w);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0};const EE=L.createFramebuffer();this.setRenderTarget=function(w,F=0,G=0){P=w,A=F,b=G;let W=!0,O=null,re=!1,ue=!1;if(w){const Se=we.get(w);if(Se.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(L.FRAMEBUFFER,null),W=!1;else if(Se.__webglFramebuffer===void 0)R.setupRenderTarget(w);else if(Se.__hasExternalTextures)R.rebindTextures(w,we.get(w.texture).__webglTexture,we.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const be=w.depthTexture;if(Se.__boundDepthTexture!==be){if(be!==null&&we.has(be)&&(w.width!==be.image.width||w.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(w)}}const Le=w.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(ue=!0);const Ne=we.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ne[F])?O=Ne[F][G]:O=Ne[F],re=!0):w.samples>0&&R.useMultisampledRTT(w)===!1?O=we.get(w).__webglMultisampledFramebuffer:Array.isArray(Ne)?O=Ne[G]:O=Ne,D.copy(w.viewport),k.copy(w.scissor),H=w.scissorTest}else D.copy(se).multiplyScalar(I).floor(),k.copy(Ee).multiplyScalar(I).floor(),H=ze;if(G!==0&&(O=EE),Te.bindFramebuffer(L.FRAMEBUFFER,O)&&W&&Te.drawBuffers(w,O),Te.viewport(D),Te.scissor(k),Te.setScissorTest(H),re){const Se=we.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,Se.__webglTexture,G)}else if(ue){const Se=we.get(w.texture),Le=F;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Se.__webglTexture,G,Le)}else if(w!==null&&G!==0){const Se=we.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Se.__webglTexture,G)}T=-1},this.readRenderTargetPixels=function(w,F,G,W,O,re,ue){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=we.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ue!==void 0&&(ve=ve[ue]),ve){Te.bindFramebuffer(L.FRAMEBUFFER,ve);try{const Se=w.texture,Le=Se.format,Ne=Se.type;if(!je.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!je.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-W&&G>=0&&G<=w.height-O&&L.readPixels(F,G,W,O,ke.convert(Le),ke.convert(Ne),re)}finally{const Se=P!==null?we.get(P).__webglFramebuffer:null;Te.bindFramebuffer(L.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(w,F,G,W,O,re,ue){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=we.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ue!==void 0&&(ve=ve[ue]),ve)if(F>=0&&F<=w.width-W&&G>=0&&G<=w.height-O){Te.bindFramebuffer(L.FRAMEBUFFER,ve);const Se=w.texture,Le=Se.format,Ne=Se.type;if(!je.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!je.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const be=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,be),L.bufferData(L.PIXEL_PACK_BUFFER,re.byteLength,L.STREAM_READ),L.readPixels(F,G,W,O,ke.convert(Le),ke.convert(Ne),0);const Ye=P!==null?we.get(P).__webglFramebuffer:null;Te.bindFramebuffer(L.FRAMEBUFFER,Ye);const et=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await qC(L,et,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,be),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,re),L.deleteBuffer(be),L.deleteSync(et),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,F=null,G=0){const W=Math.pow(2,-G),O=Math.floor(w.image.width*W),re=Math.floor(w.image.height*W),ue=F!==null?F.x:0,ve=F!==null?F.y:0;R.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,G,0,0,ue,ve,O,re),Te.unbindTexture()};const ME=L.createFramebuffer(),wE=L.createFramebuffer();this.copyTextureToTexture=function(w,F,G=null,W=null,O=0,re=null){re===null&&(O!==0?(Nc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),re=O,O=0):re=0);let ue,ve,Se,Le,Ne,be,Ye,et,Pt;const yt=w.isCompressedTexture?w.mipmaps[re]:w.image;if(G!==null)ue=G.max.x-G.min.x,ve=G.max.y-G.min.y,Se=G.isBox3?G.max.z-G.min.z:1,Le=G.min.x,Ne=G.min.y,be=G.isBox3?G.min.z:0;else{const Dn=Math.pow(2,-O);ue=Math.floor(yt.width*Dn),ve=Math.floor(yt.height*Dn),w.isDataArrayTexture?Se=yt.depth:w.isData3DTexture?Se=Math.floor(yt.depth*Dn):Se=1,Le=0,Ne=0,be=0}W!==null?(Ye=W.x,et=W.y,Pt=W.z):(Ye=0,et=0,Pt=0);const Qe=ke.convert(F.format),Ce=ke.convert(F.type);let Vt;F.isData3DTexture?(R.setTexture3D(F,0),Vt=L.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(R.setTexture2DArray(F,0),Vt=L.TEXTURE_2D_ARRAY):(R.setTexture2D(F,0),Vt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);const tt=L.getParameter(L.UNPACK_ROW_LENGTH),Wn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ts=L.getParameter(L.UNPACK_SKIP_PIXELS),yn=L.getParameter(L.UNPACK_SKIP_ROWS),jo=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,yt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,yt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Le),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ne),L.pixelStorei(L.UNPACK_SKIP_IMAGES,be);const ht=w.isDataArrayTexture||w.isData3DTexture,Nn=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){const Dn=we.get(w),tn=we.get(F),un=we.get(Dn.__renderTarget),Bu=we.get(tn.__renderTarget);Te.bindFramebuffer(L.READ_FRAMEBUFFER,un.__webglFramebuffer),Te.bindFramebuffer(L.DRAW_FRAMEBUFFER,Bu.__webglFramebuffer);for(let Wr=0;Wr<Se;Wr++)ht&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,we.get(w).__webglTexture,O,be+Wr),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,we.get(F).__webglTexture,re,Pt+Wr)),L.blitFramebuffer(Le,Ne,ue,ve,Ye,et,ue,ve,L.DEPTH_BUFFER_BIT,L.NEAREST);Te.bindFramebuffer(L.READ_FRAMEBUFFER,null),Te.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(O!==0||w.isRenderTargetTexture||we.has(w)){const Dn=we.get(w),tn=we.get(F);Te.bindFramebuffer(L.READ_FRAMEBUFFER,ME),Te.bindFramebuffer(L.DRAW_FRAMEBUFFER,wE);for(let un=0;un<Se;un++)ht?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Dn.__webglTexture,O,be+un):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Dn.__webglTexture,O),Nn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,tn.__webglTexture,re,Pt+un):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,tn.__webglTexture,re),O!==0?L.blitFramebuffer(Le,Ne,ue,ve,Ye,et,ue,ve,L.COLOR_BUFFER_BIT,L.NEAREST):Nn?L.copyTexSubImage3D(Vt,re,Ye,et,Pt+un,Le,Ne,ue,ve):L.copyTexSubImage2D(Vt,re,Ye,et,Le,Ne,ue,ve);Te.bindFramebuffer(L.READ_FRAMEBUFFER,null),Te.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Nn?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(Vt,re,Ye,et,Pt,ue,ve,Se,Qe,Ce,yt.data):F.isCompressedArrayTexture?L.compressedTexSubImage3D(Vt,re,Ye,et,Pt,ue,ve,Se,Qe,yt.data):L.texSubImage3D(Vt,re,Ye,et,Pt,ue,ve,Se,Qe,Ce,yt):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,re,Ye,et,ue,ve,Qe,Ce,yt.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,re,Ye,et,yt.width,yt.height,Qe,yt.data):L.texSubImage2D(L.TEXTURE_2D,re,Ye,et,ue,ve,Qe,Ce,yt);L.pixelStorei(L.UNPACK_ROW_LENGTH,tt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Wn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ts),L.pixelStorei(L.UNPACK_SKIP_ROWS,yn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,jo),re===0&&F.generateMipmaps&&L.generateMipmap(Vt),Te.unbindTexture()},this.copyTextureToTexture3D=function(w,F,G=null,W=null,O=0){return Nc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,F,G,W,O)},this.initRenderTarget=function(w){we.get(w).__webglFramebuffer===void 0&&R.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),Te.unbindTexture()},this.resetState=function(){A=0,b=0,P=null,Te.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ze._getUnpackColorSpace()}}function fD(){const t=N.useRef(null);return N.useEffect(()=>{if(!t.current)return;const e=new yA,n=new kn(75,window.innerWidth/window.innerHeight,.1,1e3),i=new dD({alpha:!0});i.setSize(window.innerWidth,window.innerHeight),i.setClearColor(0,0),t.current.appendChild(i.domElement);const r=new li,s=new bS({color:16777215,size:.5,transparent:!0}),o=[];for(let f=0;f<6e3;f++){const m=(Math.random()-.5)*2e3,_=(Math.random()-.5)*2e3,g=(Math.random()-.5)*2e3;o.push(m,_,g)}r.setAttribute("position",new Gi(o,3));const a=new wA(r,s);e.add(a);const l=new TS({color:6697932,transparent:!0,opacity:.4}),c=[];for(let f=0;f<100;f++){const m=(Math.random()-.5)*1e3,_=(Math.random()-.5)*1e3,g=(Math.random()-.5)*1e3;if(f>0&&f%2===0){const p=c[c.length-3],u=c[c.length-2],v=c[c.length-1],x=new li().setFromPoints([new z(p,u,v),new z(m,_,g)]),S=new MA(x,l);e.add(S)}c.push(m,_,g)}n.position.z=50;const d=()=>{requestAnimationFrame(d),a.rotation.x+=1e-4,a.rotation.y+=1e-4,i.render(e,n)};d();const h=()=>{const f=window.innerWidth,m=window.innerHeight;n.aspect=f/m,n.updateProjectionMatrix(),i.setSize(f,m)};return window.addEventListener("resize",h),()=>{t.current&&t.current.removeChild(i.domElement),window.removeEventListener("resize",h)}},[]),y.jsx("div",{ref:t,className:"absolute inset-0 -z-10"})}const hD=im("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),ci=N.forwardRef(({className:t,variant:e,size:n,asChild:i=!1,...r},s)=>{const o=i?Do:"button";return y.jsx(o,{className:Tt(hD({variant:e,size:n,className:t})),ref:s,...r})});ci.displayName="Button";function pD(){const[t,e]=N.useState(!1),[n,i]=N.useState(!1);N.useEffect(()=>{const a=()=>{window.scrollY>50?i(!0):i(!1)};return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[]);const r=()=>e(!t),s=()=>e(!1),o=a=>{s();const l=document.getElementById(a);l&&l.scrollIntoView({behavior:"smooth"})};return y.jsxs("nav",{className:`fixed top-0 w-full bg-opacity-80 bg-[#121628] backdrop-filter backdrop-blur-lg z-50 transition-all duration-300 ${n?"py-2":"py-3"}`,children:[y.jsxs("div",{className:"container mx-auto px-4 flex items-center justify-between",children:[y.jsxs($x,{href:"/",className:"flex items-center space-x-2",children:[y.jsx("img",{src:"https://i.postimg.cc/pVwhhzfh/image.png",alt:"Event Logo"}),y.jsx("span",{className:"text-xl font-bold",children:"Science Circus"})]}),y.jsxs("div",{className:"hidden md:flex space-x-8 items-center",children:[y.jsx(la,{onClick:()=>o("about"),children:"About"}),y.jsx(la,{onClick:()=>o("events"),children:"Events"}),y.jsx(la,{onClick:()=>o("gallery"),children:"Gallery"}),y.jsx(la,{onClick:()=>o("sponsors"),children:"Sponsors"}),y.jsx(la,{onClick:()=>o("team"),children:"Team"}),y.jsx(ci,{onClick:()=>o("contact"),className:"bg-primary hover:bg-opacity-80 px-5 py-2 rounded-full transition",children:"Contact"})]}),y.jsx("button",{className:"md:hidden text-2xl",onClick:r,children:t?y.jsx(Lu,{}):y.jsx(lb,{})})]}),y.jsx("div",{className:`md:hidden bg-[#242936] absolute w-full transition-all duration-300 ${t?"max-h-96 opacity-100 visible":"max-h-0 opacity-0 invisible overflow-hidden"}`,children:y.jsxs("div",{className:"container mx-auto px-4 py-3 flex flex-col space-y-4",children:[y.jsx(ca,{onClick:()=>o("about"),children:"About"}),y.jsx(ca,{onClick:()=>o("events"),children:"Events"}),y.jsx(ca,{onClick:()=>o("gallery"),children:"Gallery"}),y.jsx(ca,{onClick:()=>o("sponsors"),children:"Sponsors"}),y.jsx(ca,{onClick:()=>o("team"),children:"Team"}),y.jsx(ci,{onClick:()=>o("contact"),className:"bg-primary hover:bg-opacity-80 py-2 px-4 rounded-full transition text-center",children:"Contact"})]})})]})}function la({children:t,onClick:e}){return y.jsx("button",{onClick:e,className:"relative hover:text-[#33CCFF] transition after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-5px] after:left-0 after:bg-[#33CCFF] after:transition-[width] after:duration-300 hover:after:w-full",children:t})}function ca({children:t,onClick:e}){return y.jsx("button",{onClick:e,className:"py-2 hover:text-[#33CCFF] transition text-left",children:t})}function mD(){const t=e=>{const n=document.getElementById(e);n&&n.scrollIntoView({behavior:"smooth"})};return y.jsxs("section",{className:"relative min-h-screen flex items-center justify-center overflow-hidden",children:[y.jsxs("div",{className:"absolute inset-0 z-0",children:[y.jsx("div",{className:"absolute inset-0 bg-[#121628] opacity-80"}),y.jsx("img",{src:"https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",alt:"Cosmic background",className:"w-full h-full object-cover"})]}),y.jsxs("div",{className:"container mx-auto px-4 z-10 text-center",children:[y.jsxs("div",{className:"animate-[float_6s_ease-in-out_infinite]",children:[y.jsxs("h1",{className:"text-5xl md:text-7xl font-bold mb-6 leading-tight",children:[y.jsx("span",{className:"block",children:"Science Circus"}),y.jsx("span",{className:"text-[#33CCFF]",children:"Physics & Mathematics"})]}),y.jsx("p",{className:"text-xl md:text-2xl mb-8 max-w-3xl mx-auto",children:"Experience the wonders of science through interactive games, puzzles, and exhibits. Join us for an unforgettable journey through the laws of physics and mathematical marvels."}),y.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[y.jsx(ci,{onClick:()=>t("events"),className:"px-8 py-3 bg-primary hover:bg-opacity-80 rounded-full text-lg transition duration-300 transform hover:scale-105",children:"Explore Events"}),y.jsx(ci,{onClick:()=>t("about"),variant:"outline",className:"px-8 py-3 border-2 border-[#33CCFF] hover:bg-[#33CCFF] hover:bg-opacity-20 rounded-full text-lg transition duration-300",children:"Learn More"})]})]}),y.jsx("div",{className:"absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce",children:y.jsx("button",{onClick:()=>t("about"),className:"text-4xl opacity-70 hover:opacity-100 transition",children:y.jsx(rb,{})})})]})]})}function gD(){return y.jsx("section",{id:"about",className:"py-20 relative",children:y.jsxs("div",{className:"container mx-auto px-4",children:[y.jsxs("div",{className:"text-center mb-16",children:[y.jsxs("h2",{className:"text-4xl font-bold mb-4",children:["About ",y.jsx("span",{className:"text-[#33CCFF]",children:"Science Circus"})]}),y.jsx("div",{className:"w-20 h-1 bg-primary mx-auto"})]}),y.jsxs("div",{className:"grid md:grid-cols-2 gap-12 items-center",children:[y.jsxs("div",{className:"order-2 md:order-1",children:[y.jsx("h3",{className:"text-3xl font-bold mb-6",children:"Where Science Meets Entertainment"}),y.jsx("p",{className:"text-lg mb-6 text-gray-300",children:"Science Circus is an immersive event that brings together the wonder of physics and mathematics in an entertaining format. We believe that learning should be fun, interactive, and memorable."}),y.jsx("p",{className:"text-lg mb-8 text-gray-300",children:"Through carefully designed activities, games, and challenges, participants will explore scientific concepts, solve puzzles, and witness the beauty of mathematical patterns that govern our universe."}),y.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[y.jsx(rc,{icon:y.jsx(oh,{className:"h-6 w-6"}),children:"Physics Exploration"}),y.jsx(rc,{icon:y.jsx(Fy,{className:"h-6 w-6"}),children:"Mathematical Challenges"}),y.jsx(rc,{icon:y.jsx(By,{className:"h-6 w-6"}),children:"Interactive Learning"}),y.jsx(rc,{icon:y.jsx(pb,{className:"h-6 w-6"}),children:"Team Collaboration"})]})]}),y.jsxs("div",{className:"order-1 md:order-2 relative",children:[y.jsxs("div",{className:"relative rounded-lg overflow-hidden shadow-2xl animate-[float_6s_ease-in-out_infinite]",children:[y.jsx("img",{src:"https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",alt:"Physics experiment with light trails",className:"w-full h-full object-cover"}),y.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#121628] to-transparent opacity-40"})]}),y.jsx("div",{className:"absolute -bottom-10 -left-10 w-48 h-48 bg-primary rounded-full opacity-20 blur-xl"})]})]})]})})}function rc({icon:t,children:e}){return y.jsxs("div",{className:"flex items-center space-x-3",children:[y.jsx("div",{className:"text-[#33CCFF] text-2xl",children:t}),y.jsx("span",{children:e})]})}const vD=[{title:"Anti-Quiz",description:"A mind-bending quiz that challenges your physics knowledge in unexpected ways. Think you know science? Think again!",duration:"2 Hours",image:"https://images.unsplash.com/photo-1606326608690-4e0281b1e588?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",actionText:"Register"},{title:"Physics Squid Game",description:"Survive a series of physics-based challenges that test your understanding of mechanics, energy, and problem-solving.",duration:"3 Hours",image:"https://images.unsplash.com/photo-1624948465027-6f9b51067557?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",actionText:"Register"},{title:"Math Tricks Stalls",description:"Explore fascinating mathematical tricks, illusions, and puzzles through interactive stalls and demonstrations.",duration:"Ongoing",image:"https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",actionText:"Visit"},{title:"Treasure Hunt",description:"Follow scientific clues and solve physics-based puzzles to find hidden treasures across the event grounds.",duration:"4 Hours",image:"https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",actionText:"Register"}],_D=[{src:"https://images.unsplash.com/photo-1581093458791-9d3fd7570b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",title:"Physics Workshop",description:"Interactive demonstration of quantum principles"},{src:"https://images.unsplash.com/photo-1576319155264-99536e0be1ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",title:"Mathematical Patterns",description:"Exploring geometry in nature and technology"},{src:"https://images.unsplash.com/photo-1554475900-0a0350e3fc7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",title:"Team Challenge",description:"Students collaborating on physics problems"},{src:"https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",title:"Light Experiments",description:"Exploring the properties of light and color"},{src:"https://images.unsplash.com/photo-1628595351029-c2bf17511435?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",title:"Robotics Display",description:"Showcasing technology and engineering principles"},{src:"https://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",title:"Interactive Display",description:"Hands-on learning about cosmic phenomena"}],xD=[{name:"PhysicsTech",iconName:"Atom"},{name:"SpaceX",iconName:"Rocket"},{name:"MathWorks",iconName:"Calculator"},{name:"SciLabs",iconName:"Microscope"},{name:"National Science Foundation",iconName:"School"},{name:"Innovate Inc.",iconName:"Lightbulb"},{name:"SciEdu Publishers",iconName:"BookOpen"},{name:"ChemTech",iconName:"Beaker"}],yD=[{name:"Dr. Alex Morgan",role:"Event Director",image:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"},{name:"Dr. Sarah Chen",role:"Physics Lead",image:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"},{name:"Prof. Michael Davis",role:"Mathematics Lead",image:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"},{name:"Dr. Emily Rodriguez",role:"Technology Coordinator",image:"https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"}],Ur=N.forwardRef(({className:t,type:e,...n},i)=>y.jsx("input",{type:e,className:Tt("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:i,...n}));Ur.displayName="Input";var SD="Label",LS=N.forwardRef((t,e)=>y.jsx(Xt.label,{...t,ref:e,onMouseDown:n=>{var r;n.target.closest("button, input, select, textarea")||((r=t.onMouseDown)==null||r.call(t,n),!n.defaultPrevented&&n.detail>1&&n.preventDefault())}}));LS.displayName=SD;var IS=LS;const ED=im("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),wr=N.forwardRef(({className:t,...e},n)=>y.jsx(IS,{ref:n,className:Tt(ED(),t),...e}));wr.displayName=IS.displayName;var MD=I0.useId||(()=>{}),wD=0;function Kd(t){const[e,n]=N.useState(MD());return Ga(()=>{t||n(i=>i??String(wD++))},[t]),t||(e?`radix-${e}`:"")}var Qd="focusScope.autoFocusOnMount",Zd="focusScope.autoFocusOnUnmount",r0={bubbles:!1,cancelable:!0},TD="FocusScope",US=N.forwardRef((t,e)=>{const{loop:n=!1,trapped:i=!1,onMountAutoFocus:r,onUnmountAutoFocus:s,...o}=t,[a,l]=N.useState(null),c=ai(r),d=ai(s),h=N.useRef(null),f=oi(e,g=>l(g)),m=N.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;N.useEffect(()=>{if(i){let g=function(x){if(m.paused||!a)return;const S=x.target;a.contains(S)?h.current=S:cr(h.current,{select:!0})},p=function(x){if(m.paused||!a)return;const S=x.relatedTarget;S!==null&&(a.contains(S)||cr(h.current,{select:!0}))},u=function(x){if(document.activeElement===document.body)for(const C of x)C.removedNodes.length>0&&cr(a)};document.addEventListener("focusin",g),document.addEventListener("focusout",p);const v=new MutationObserver(u);return a&&v.observe(a,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",g),document.removeEventListener("focusout",p),v.disconnect()}}},[i,a,m.paused]),N.useEffect(()=>{if(a){o0.add(m);const g=document.activeElement;if(!a.contains(g)){const u=new CustomEvent(Qd,r0);a.addEventListener(Qd,c),a.dispatchEvent(u),u.defaultPrevented||(bD(ND(FS(a)),{select:!0}),document.activeElement===g&&cr(a))}return()=>{a.removeEventListener(Qd,c),setTimeout(()=>{const u=new CustomEvent(Zd,r0);a.addEventListener(Zd,d),a.dispatchEvent(u),u.defaultPrevented||cr(g??document.body,{select:!0}),a.removeEventListener(Zd,d),o0.remove(m)},0)}}},[a,c,d,m]);const _=N.useCallback(g=>{if(!n&&!i||m.paused)return;const p=g.key==="Tab"&&!g.altKey&&!g.ctrlKey&&!g.metaKey,u=document.activeElement;if(p&&u){const v=g.currentTarget,[x,S]=CD(v);x&&S?!g.shiftKey&&u===S?(g.preventDefault(),n&&cr(x,{select:!0})):g.shiftKey&&u===x&&(g.preventDefault(),n&&cr(S,{select:!0})):u===v&&g.preventDefault()}},[n,i,m.paused]);return y.jsx(Xt.div,{tabIndex:-1,...o,ref:f,onKeyDown:_})});US.displayName=TD;function bD(t,{select:e=!1}={}){const n=document.activeElement;for(const i of t)if(cr(i,{select:e}),document.activeElement!==n)return}function CD(t){const e=FS(t),n=s0(e,t),i=s0(e.reverse(),t);return[n,i]}function FS(t){const e=[],n=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:i=>{const r=i.tagName==="INPUT"&&i.type==="hidden";return i.disabled||i.hidden||r?NodeFilter.FILTER_SKIP:i.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)e.push(n.currentNode);return e}function s0(t,e){for(const n of t)if(!AD(n,{upTo:e}))return n}function AD(t,{upTo:e}){if(getComputedStyle(t).visibility==="hidden")return!0;for(;t;){if(e!==void 0&&t===e)return!1;if(getComputedStyle(t).display==="none")return!0;t=t.parentElement}return!1}function RD(t){return t instanceof HTMLInputElement&&"select"in t}function cr(t,{select:e=!1}={}){if(t&&t.focus){const n=document.activeElement;t.focus({preventScroll:!0}),t!==n&&RD(t)&&e&&t.select()}}var o0=PD();function PD(){let t=[];return{add(e){const n=t[0];e!==n&&(n==null||n.pause()),t=a0(t,e),t.unshift(e)},remove(e){var n;t=a0(t,e),(n=t[0])==null||n.resume()}}}function a0(t,e){const n=[...t],i=n.indexOf(e);return i!==-1&&n.splice(i,1),n}function ND(t){return t.filter(e=>e.tagName!=="A")}var Jd=0;function DD(){N.useEffect(()=>{const t=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",t[0]??l0()),document.body.insertAdjacentElement("beforeend",t[1]??l0()),Jd++,()=>{Jd===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),Jd--}},[])}function l0(){const t=document.createElement("span");return t.setAttribute("data-radix-focus-guard",""),t.tabIndex=0,t.style.outline="none",t.style.opacity="0",t.style.position="fixed",t.style.pointerEvents="none",t}var _i=function(){return _i=Object.assign||function(e){for(var n,i=1,r=arguments.length;i<r;i++){n=arguments[i];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},_i.apply(this,arguments)};function OS(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function LD(t,e,n){if(n||arguments.length===2)for(var i=0,r=e.length,s;i<r;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return t.concat(s||Array.prototype.slice.call(e))}var Lc="right-scroll-bar-position",Ic="width-before-scroll-bar",ID="with-scroll-bars-hidden",UD="--removed-body-scroll-bar-size";function ef(t,e){return typeof t=="function"?t(e):t&&(t.current=e),t}function FD(t,e){var n=N.useState(function(){return{value:t,callback:e,facade:{get current(){return n.value},set current(i){var r=n.value;r!==i&&(n.value=i,n.callback(i,r))}}}})[0];return n.callback=e,n.facade}var OD=typeof window<"u"?N.useLayoutEffect:N.useEffect,c0=new WeakMap;function kD(t,e){var n=FD(null,function(i){return t.forEach(function(r){return ef(r,i)})});return OD(function(){var i=c0.get(n);if(i){var r=new Set(i),s=new Set(t),o=n.current;r.forEach(function(a){s.has(a)||ef(a,null)}),s.forEach(function(a){r.has(a)||ef(a,o)})}c0.set(n,t)},[t]),n}function BD(t){return t}function zD(t,e){e===void 0&&(e=BD);var n=[],i=!1,r={read:function(){if(i)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:t},useMedium:function(s){var o=e(s,i);return n.push(o),function(){n=n.filter(function(a){return a!==o})}},assignSyncMedium:function(s){for(i=!0;n.length;){var o=n;n=[],o.forEach(s)}n={push:function(a){return s(a)},filter:function(){return n}}},assignMedium:function(s){i=!0;var o=[];if(n.length){var a=n;n=[],a.forEach(s),o=n}var l=function(){var d=o;o=[],d.forEach(s)},c=function(){return Promise.resolve().then(l)};c(),n={push:function(d){o.push(d),c()},filter:function(d){return o=o.filter(d),n}}}};return r}function VD(t){t===void 0&&(t={});var e=zD(null);return e.options=_i({async:!0,ssr:!1},t),e}var kS=function(t){var e=t.sideCar,n=OS(t,["sideCar"]);if(!e)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var i=e.read();if(!i)throw new Error("Sidecar medium not found");return N.createElement(i,_i({},n))};kS.isSideCarExport=!0;function HD(t,e){return t.useMedium(e),kS}var BS=VD(),tf=function(){},Ou=N.forwardRef(function(t,e){var n=N.useRef(null),i=N.useState({onScrollCapture:tf,onWheelCapture:tf,onTouchMoveCapture:tf}),r=i[0],s=i[1],o=t.forwardProps,a=t.children,l=t.className,c=t.removeScrollBar,d=t.enabled,h=t.shards,f=t.sideCar,m=t.noIsolation,_=t.inert,g=t.allowPinchZoom,p=t.as,u=p===void 0?"div":p,v=t.gapMode,x=OS(t,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),S=f,C=kD([n,e]),A=_i(_i({},x),r);return N.createElement(N.Fragment,null,d&&N.createElement(S,{sideCar:BS,removeScrollBar:c,shards:h,noIsolation:m,inert:_,setCallbacks:s,allowPinchZoom:!!g,lockRef:n,gapMode:v}),o?N.cloneElement(N.Children.only(a),_i(_i({},A),{ref:C})):N.createElement(u,_i({},A,{className:l,ref:C}),a))});Ou.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Ou.classNames={fullWidth:Ic,zeroRight:Lc};var GD=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function WD(){if(!document)return null;var t=document.createElement("style");t.type="text/css";var e=GD();return e&&t.setAttribute("nonce",e),t}function jD(t,e){t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}function XD(t){var e=document.head||document.getElementsByTagName("head")[0];e.appendChild(t)}var qD=function(){var t=0,e=null;return{add:function(n){t==0&&(e=WD())&&(jD(e,n),XD(e)),t++},remove:function(){t--,!t&&e&&(e.parentNode&&e.parentNode.removeChild(e),e=null)}}},$D=function(){var t=qD();return function(e,n){N.useEffect(function(){return t.add(e),function(){t.remove()}},[e&&n])}},zS=function(){var t=$D(),e=function(n){var i=n.styles,r=n.dynamic;return t(i,r),null};return e},YD={left:0,top:0,right:0,gap:0},nf=function(t){return parseInt(t||"",10)||0},KD=function(t){var e=window.getComputedStyle(document.body),n=e[t==="padding"?"paddingLeft":"marginLeft"],i=e[t==="padding"?"paddingTop":"marginTop"],r=e[t==="padding"?"paddingRight":"marginRight"];return[nf(n),nf(i),nf(r)]},QD=function(t){if(t===void 0&&(t="margin"),typeof window>"u")return YD;var e=KD(t),n=document.documentElement.clientWidth,i=window.innerWidth;return{left:e[0],top:e[1],right:e[2],gap:Math.max(0,i-n+e[2]-e[0])}},ZD=zS(),po="data-scroll-locked",JD=function(t,e,n,i){var r=t.left,s=t.top,o=t.right,a=t.gap;return n===void 0&&(n="margin"),`
  .`.concat(ID,` {
   overflow: hidden `).concat(i,`;
   padding-right: `).concat(a,"px ").concat(i,`;
  }
  body[`).concat(po,`] {
    overflow: hidden `).concat(i,`;
    overscroll-behavior: contain;
    `).concat([e&&"position: relative ".concat(i,";"),n==="margin"&&`
    padding-left: `.concat(r,`px;
    padding-top: `).concat(s,`px;
    padding-right: `).concat(o,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a,"px ").concat(i,`;
    `),n==="padding"&&"padding-right: ".concat(a,"px ").concat(i,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(Lc,` {
    right: `).concat(a,"px ").concat(i,`;
  }
  
  .`).concat(Ic,` {
    margin-right: `).concat(a,"px ").concat(i,`;
  }
  
  .`).concat(Lc," .").concat(Lc,` {
    right: 0 `).concat(i,`;
  }
  
  .`).concat(Ic," .").concat(Ic,` {
    margin-right: 0 `).concat(i,`;
  }
  
  body[`).concat(po,`] {
    `).concat(UD,": ").concat(a,`px;
  }
`)},u0=function(){var t=parseInt(document.body.getAttribute(po)||"0",10);return isFinite(t)?t:0},eL=function(){N.useEffect(function(){return document.body.setAttribute(po,(u0()+1).toString()),function(){var t=u0()-1;t<=0?document.body.removeAttribute(po):document.body.setAttribute(po,t.toString())}},[])},tL=function(t){var e=t.noRelative,n=t.noImportant,i=t.gapMode,r=i===void 0?"margin":i;eL();var s=N.useMemo(function(){return QD(r)},[r]);return N.createElement(ZD,{styles:JD(s,!e,r,n?"":"!important")})},Kh=!1;if(typeof window<"u")try{var sc=Object.defineProperty({},"passive",{get:function(){return Kh=!0,!0}});window.addEventListener("test",sc,sc),window.removeEventListener("test",sc,sc)}catch{Kh=!1}var Vs=Kh?{passive:!1}:!1,nL=function(t){return t.tagName==="TEXTAREA"},VS=function(t,e){if(!(t instanceof Element))return!1;var n=window.getComputedStyle(t);return n[e]!=="hidden"&&!(n.overflowY===n.overflowX&&!nL(t)&&n[e]==="visible")},iL=function(t){return VS(t,"overflowY")},rL=function(t){return VS(t,"overflowX")},d0=function(t,e){var n=e.ownerDocument,i=e;do{typeof ShadowRoot<"u"&&i instanceof ShadowRoot&&(i=i.host);var r=HS(t,i);if(r){var s=GS(t,i),o=s[1],a=s[2];if(o>a)return!0}i=i.parentNode}while(i&&i!==n.body);return!1},sL=function(t){var e=t.scrollTop,n=t.scrollHeight,i=t.clientHeight;return[e,n,i]},oL=function(t){var e=t.scrollLeft,n=t.scrollWidth,i=t.clientWidth;return[e,n,i]},HS=function(t,e){return t==="v"?iL(e):rL(e)},GS=function(t,e){return t==="v"?sL(e):oL(e)},aL=function(t,e){return t==="h"&&e==="rtl"?-1:1},lL=function(t,e,n,i,r){var s=aL(t,window.getComputedStyle(e).direction),o=s*i,a=n.target,l=e.contains(a),c=!1,d=o>0,h=0,f=0;do{var m=GS(t,a),_=m[0],g=m[1],p=m[2],u=g-p-s*_;(_||u)&&HS(t,a)&&(h+=u,f+=_),a instanceof ShadowRoot?a=a.host:a=a.parentNode}while(!l&&a!==document.body||l&&(e.contains(a)||e===a));return(d&&(Math.abs(h)<1||!r)||!d&&(Math.abs(f)<1||!r))&&(c=!0),c},oc=function(t){return"changedTouches"in t?[t.changedTouches[0].clientX,t.changedTouches[0].clientY]:[0,0]},f0=function(t){return[t.deltaX,t.deltaY]},h0=function(t){return t&&"current"in t?t.current:t},cL=function(t,e){return t[0]===e[0]&&t[1]===e[1]},uL=function(t){return`
  .block-interactivity-`.concat(t,` {pointer-events: none;}
  .allow-interactivity-`).concat(t,` {pointer-events: all;}
`)},dL=0,Hs=[];function fL(t){var e=N.useRef([]),n=N.useRef([0,0]),i=N.useRef(),r=N.useState(dL++)[0],s=N.useState(zS)[0],o=N.useRef(t);N.useEffect(function(){o.current=t},[t]),N.useEffect(function(){if(t.inert){document.body.classList.add("block-interactivity-".concat(r));var g=LD([t.lockRef.current],(t.shards||[]).map(h0),!0).filter(Boolean);return g.forEach(function(p){return p.classList.add("allow-interactivity-".concat(r))}),function(){document.body.classList.remove("block-interactivity-".concat(r)),g.forEach(function(p){return p.classList.remove("allow-interactivity-".concat(r))})}}},[t.inert,t.lockRef.current,t.shards]);var a=N.useCallback(function(g,p){if("touches"in g&&g.touches.length===2||g.type==="wheel"&&g.ctrlKey)return!o.current.allowPinchZoom;var u=oc(g),v=n.current,x="deltaX"in g?g.deltaX:v[0]-u[0],S="deltaY"in g?g.deltaY:v[1]-u[1],C,A=g.target,b=Math.abs(x)>Math.abs(S)?"h":"v";if("touches"in g&&b==="h"&&A.type==="range")return!1;var P=d0(b,A);if(!P)return!0;if(P?C=b:(C=b==="v"?"h":"v",P=d0(b,A)),!P)return!1;if(!i.current&&"changedTouches"in g&&(x||S)&&(i.current=C),!C)return!0;var T=i.current||C;return lL(T,p,g,T==="h"?x:S,!0)},[]),l=N.useCallback(function(g){var p=g;if(!(!Hs.length||Hs[Hs.length-1]!==s)){var u="deltaY"in p?f0(p):oc(p),v=e.current.filter(function(C){return C.name===p.type&&(C.target===p.target||p.target===C.shadowParent)&&cL(C.delta,u)})[0];if(v&&v.should){p.cancelable&&p.preventDefault();return}if(!v){var x=(o.current.shards||[]).map(h0).filter(Boolean).filter(function(C){return C.contains(p.target)}),S=x.length>0?a(p,x[0]):!o.current.noIsolation;S&&p.cancelable&&p.preventDefault()}}},[]),c=N.useCallback(function(g,p,u,v){var x={name:g,delta:p,target:u,should:v,shadowParent:hL(u)};e.current.push(x),setTimeout(function(){e.current=e.current.filter(function(S){return S!==x})},1)},[]),d=N.useCallback(function(g){n.current=oc(g),i.current=void 0},[]),h=N.useCallback(function(g){c(g.type,f0(g),g.target,a(g,t.lockRef.current))},[]),f=N.useCallback(function(g){c(g.type,oc(g),g.target,a(g,t.lockRef.current))},[]);N.useEffect(function(){return Hs.push(s),t.setCallbacks({onScrollCapture:h,onWheelCapture:h,onTouchMoveCapture:f}),document.addEventListener("wheel",l,Vs),document.addEventListener("touchmove",l,Vs),document.addEventListener("touchstart",d,Vs),function(){Hs=Hs.filter(function(g){return g!==s}),document.removeEventListener("wheel",l,Vs),document.removeEventListener("touchmove",l,Vs),document.removeEventListener("touchstart",d,Vs)}},[]);var m=t.removeScrollBar,_=t.inert;return N.createElement(N.Fragment,null,_?N.createElement(s,{styles:uL(r)}):null,m?N.createElement(tL,{gapMode:t.gapMode}):null)}function hL(t){for(var e=null;t!==null;)t instanceof ShadowRoot&&(e=t.host,t=t.host),t=t.parentNode;return e}const pL=HD(BS,fL);var WS=N.forwardRef(function(t,e){return N.createElement(Ou,_i({},t,{ref:e,sideCar:pL}))});WS.classNames=Ou.classNames;var mL=function(t){if(typeof document>"u")return null;var e=Array.isArray(t)?t[0]:t;return e.ownerDocument.body},Gs=new WeakMap,ac=new WeakMap,lc={},rf=0,jS=function(t){return t&&(t.host||jS(t.parentNode))},gL=function(t,e){return e.map(function(n){if(t.contains(n))return n;var i=jS(n);return i&&t.contains(i)?i:(console.error("aria-hidden",n,"in not contained inside",t,". Doing nothing"),null)}).filter(function(n){return!!n})},vL=function(t,e,n,i){var r=gL(e,Array.isArray(t)?t:[t]);lc[n]||(lc[n]=new WeakMap);var s=lc[n],o=[],a=new Set,l=new Set(r),c=function(h){!h||a.has(h)||(a.add(h),c(h.parentNode))};r.forEach(c);var d=function(h){!h||l.has(h)||Array.prototype.forEach.call(h.children,function(f){if(a.has(f))d(f);else try{var m=f.getAttribute(i),_=m!==null&&m!=="false",g=(Gs.get(f)||0)+1,p=(s.get(f)||0)+1;Gs.set(f,g),s.set(f,p),o.push(f),g===1&&_&&ac.set(f,!0),p===1&&f.setAttribute(n,"true"),_||f.setAttribute(i,"true")}catch(u){console.error("aria-hidden: cannot operate on ",f,u)}})};return d(e),a.clear(),rf++,function(){o.forEach(function(h){var f=Gs.get(h)-1,m=s.get(h)-1;Gs.set(h,f),s.set(h,m),f||(ac.has(h)||h.removeAttribute(i),ac.delete(h)),m||h.removeAttribute(n)}),rf--,rf||(Gs=new WeakMap,Gs=new WeakMap,ac=new WeakMap,lc={})}},_L=function(t,e,n){n===void 0&&(n="data-aria-hidden");var i=Array.from(Array.isArray(t)?t:[t]),r=mL(t);return r?(i.push.apply(i,Array.from(r.querySelectorAll("[aria-live]"))),vL(i,r,n,"aria-hidden")):function(){return null}},vm="Dialog",[XS,KL]=cy(vm),[xL,ui]=XS(vm),qS=t=>{const{__scopeDialog:e,children:n,open:i,defaultOpen:r,onOpenChange:s,modal:o=!0}=t,a=N.useRef(null),l=N.useRef(null),[c=!1,d]=py({prop:i,defaultProp:r,onChange:s});return y.jsx(xL,{scope:e,triggerRef:a,contentRef:l,contentId:Kd(),titleId:Kd(),descriptionId:Kd(),open:c,onOpenChange:d,onOpenToggle:N.useCallback(()=>d(h=>!h),[d]),modal:o,children:n})};qS.displayName=vm;var $S="DialogTrigger",yL=N.forwardRef((t,e)=>{const{__scopeDialog:n,...i}=t,r=ui($S,n),s=oi(e,r.triggerRef);return y.jsx(Xt.button,{type:"button","aria-haspopup":"dialog","aria-expanded":r.open,"aria-controls":r.contentId,"data-state":ym(r.open),...i,ref:s,onClick:Bt(t.onClick,r.onOpenToggle)})});yL.displayName=$S;var _m="DialogPortal",[SL,YS]=XS(_m,{forceMount:void 0}),KS=t=>{const{__scopeDialog:e,forceMount:n,children:i,container:r}=t,s=ui(_m,e);return y.jsx(SL,{scope:e,forceMount:n,children:N.Children.map(i,o=>y.jsx(nl,{present:n||s.open,children:y.jsx(Zp,{asChild:!0,container:r,children:o})}))})};KS.displayName=_m;var du="DialogOverlay",QS=N.forwardRef((t,e)=>{const n=YS(du,t.__scopeDialog),{forceMount:i=n.forceMount,...r}=t,s=ui(du,t.__scopeDialog);return s.modal?y.jsx(nl,{present:i||s.open,children:y.jsx(EL,{...r,ref:e})}):null});QS.displayName=du;var EL=N.forwardRef((t,e)=>{const{__scopeDialog:n,...i}=t,r=ui(du,n);return y.jsx(WS,{as:Do,allowPinchZoom:!0,shards:[r.contentRef],children:y.jsx(Xt.div,{"data-state":ym(r.open),...i,ref:e,style:{pointerEvents:"auto",...i.style}})})}),Es="DialogContent",ZS=N.forwardRef((t,e)=>{const n=YS(Es,t.__scopeDialog),{forceMount:i=n.forceMount,...r}=t,s=ui(Es,t.__scopeDialog);return y.jsx(nl,{present:i||s.open,children:s.modal?y.jsx(ML,{...r,ref:e}):y.jsx(wL,{...r,ref:e})})});ZS.displayName=Es;var ML=N.forwardRef((t,e)=>{const n=ui(Es,t.__scopeDialog),i=N.useRef(null),r=oi(e,n.contentRef,i);return N.useEffect(()=>{const s=i.current;if(s)return _L(s)},[]),y.jsx(JS,{...t,ref:r,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:Bt(t.onCloseAutoFocus,s=>{var o;s.preventDefault(),(o=n.triggerRef.current)==null||o.focus()}),onPointerDownOutside:Bt(t.onPointerDownOutside,s=>{const o=s.detail.originalEvent,a=o.button===0&&o.ctrlKey===!0;(o.button===2||a)&&s.preventDefault()}),onFocusOutside:Bt(t.onFocusOutside,s=>s.preventDefault())})}),wL=N.forwardRef((t,e)=>{const n=ui(Es,t.__scopeDialog),i=N.useRef(!1),r=N.useRef(!1);return y.jsx(JS,{...t,ref:e,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:s=>{var o,a;(o=t.onCloseAutoFocus)==null||o.call(t,s),s.defaultPrevented||(i.current||(a=n.triggerRef.current)==null||a.focus(),s.preventDefault()),i.current=!1,r.current=!1},onInteractOutside:s=>{var l,c;(l=t.onInteractOutside)==null||l.call(t,s),s.defaultPrevented||(i.current=!0,s.detail.originalEvent.type==="pointerdown"&&(r.current=!0));const o=s.target;((c=n.triggerRef.current)==null?void 0:c.contains(o))&&s.preventDefault(),s.detail.originalEvent.type==="focusin"&&r.current&&s.preventDefault()}})}),JS=N.forwardRef((t,e)=>{const{__scopeDialog:n,trapFocus:i,onOpenAutoFocus:r,onCloseAutoFocus:s,...o}=t,a=ui(Es,n),l=N.useRef(null),c=oi(e,l);return DD(),y.jsxs(y.Fragment,{children:[y.jsx(US,{asChild:!0,loop:!0,trapped:i,onMountAutoFocus:r,onUnmountAutoFocus:s,children:y.jsx(Qp,{role:"dialog",id:a.contentId,"aria-describedby":a.descriptionId,"aria-labelledby":a.titleId,"data-state":ym(a.open),...o,ref:c,onDismiss:()=>a.onOpenChange(!1)})}),y.jsxs(y.Fragment,{children:[y.jsx(TL,{titleId:a.titleId}),y.jsx(CL,{contentRef:l,descriptionId:a.descriptionId})]})]})}),xm="DialogTitle",eE=N.forwardRef((t,e)=>{const{__scopeDialog:n,...i}=t,r=ui(xm,n);return y.jsx(Xt.h2,{id:r.titleId,...i,ref:e})});eE.displayName=xm;var tE="DialogDescription",nE=N.forwardRef((t,e)=>{const{__scopeDialog:n,...i}=t,r=ui(tE,n);return y.jsx(Xt.p,{id:r.descriptionId,...i,ref:e})});nE.displayName=tE;var iE="DialogClose",rE=N.forwardRef((t,e)=>{const{__scopeDialog:n,...i}=t,r=ui(iE,n);return y.jsx(Xt.button,{type:"button",...i,ref:e,onClick:Bt(t.onClick,()=>r.onOpenChange(!1))})});rE.displayName=iE;function ym(t){return t?"open":"closed"}var sE="DialogTitleWarning",[QL,oE]=gT(sE,{contentName:Es,titleName:xm,docsSlug:"dialog"}),TL=({titleId:t})=>{const e=oE(sE),n=`\`${e.contentName}\` requires a \`${e.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${e.docsSlug}`;return N.useEffect(()=>{t&&(document.getElementById(t)||console.error(n))},[n,t]),null},bL="DialogDescriptionWarning",CL=({contentRef:t,descriptionId:e})=>{const i=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${oE(bL).contentName}}.`;return N.useEffect(()=>{var s;const r=(s=t.current)==null?void 0:s.getAttribute("aria-describedby");e&&r&&(document.getElementById(e)||console.warn(i))},[i,t,e]),null},AL=qS,RL=KS,aE=QS,lE=ZS,cE=eE,uE=nE,dE=rE;const PL=AL,NL=RL,DL=dE,fE=N.forwardRef(({className:t,...e},n)=>y.jsx(aE,{ref:n,className:Tt("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...e}));fE.displayName=aE.displayName;const hE=N.forwardRef(({className:t,children:e,...n},i)=>y.jsxs(NL,{children:[y.jsx(fE,{}),y.jsxs(lE,{ref:i,className:Tt("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",t),...n,children:[e,y.jsxs(dE,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[y.jsx(Lu,{className:"h-4 w-4"}),y.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));hE.displayName=lE.displayName;const pE=({className:t,...e})=>y.jsx("div",{className:Tt("flex flex-col space-y-1.5 text-center sm:text-left",t),...e});pE.displayName="DialogHeader";const mE=({className:t,...e})=>y.jsx("div",{className:Tt("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...e});mE.displayName="DialogFooter";const gE=N.forwardRef(({className:t,...e},n)=>y.jsx(cE,{ref:n,className:Tt("text-lg font-semibold leading-none tracking-tight",t),...e}));gE.displayName=cE.displayName;const vE=N.forwardRef(({className:t,...e},n)=>y.jsx(uE,{ref:n,className:Tt("text-sm text-muted-foreground",t),...e}));vE.displayName=uE.displayName;function LL(){const t=e=>{const n=document.getElementById(e);n&&n.scrollIntoView({behavior:"smooth"})};return y.jsxs("section",{id:"events",className:"py-20 relative bg-[#242936]",children:[y.jsxs("div",{className:"absolute inset-0 z-0",children:[y.jsx("div",{className:"absolute inset-0 bg-[#121628] opacity-40"}),y.jsx("img",{src:"https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",alt:"Cosmic background",className:"w-full h-full object-cover opacity-20"})]}),y.jsxs("div",{className:"container mx-auto px-4 relative z-10",children:[y.jsxs("div",{className:"text-center mb-16",children:[y.jsxs("h2",{className:"text-4xl font-bold mb-4",children:["Our ",y.jsx("span",{className:"text-[#33CCFF]",children:"Events"})]}),y.jsx("p",{className:"text-xl max-w-3xl mx-auto text-gray-300",children:"Discover our exciting lineup of physics and mathematics themed challenges and games"}),y.jsx("div",{className:"w-20 h-1 bg-primary mx-auto mt-4"})]}),y.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:vD.map((e,n)=>y.jsx(IL,{event:e,eventId:`event-${n+1}`},n))}),y.jsx("div",{className:"mt-16 text-center",children:y.jsx(ci,{onClick:()=>t("contact"),className:"px-8 py-3 bg-primary hover:bg-opacity-80 rounded-full text-lg transition duration-300 transform hover:scale-105",children:"Contact Us About Events"})})]})]})}function IL({event:t,eventId:e}){const{toast:n}=Kp(),[i,r]=N.useState(!1),[s,o]=N.useState({name:"",email:"",phone:""}),a=d=>{const{id:h,value:f}=d.target;o(m=>({...m,[h]:f}))},l=sy({mutationFn:async d=>await ay("POST","/api/register",d),onSuccess:()=>{n({title:"Registration successful!",description:`You are now registered for ${t.title}.`}),o({name:"",email:"",phone:""}),r(!1)},onError:d=>{n({title:"Registration failed",description:d.message||"Please try again later.",variant:"destructive"})}}),c=d=>{d.preventDefault(),l.mutate({...s,event_id:e})};return y.jsxs(y.Fragment,{children:[y.jsxs("div",{className:"bg-gradient-to-br from-[#121628] to-[#242936] rounded-xl overflow-hidden shadow-lg transition duration-300 transform hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(102,51,204,0.2)]",children:[y.jsxs("div",{className:"relative h-48",children:[y.jsx("img",{src:t.image,alt:t.title,className:"w-full h-full object-cover"}),y.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#121628] to-transparent"})]}),y.jsxs("div",{className:"p-6",children:[y.jsx("h3",{className:"text-2xl font-bold mb-3",children:t.title}),y.jsx("p",{className:"text-gray-300 mb-4",children:t.description}),y.jsxs("div",{className:"flex justify-between items-center",children:[y.jsxs("span",{className:"text-[#33CCFF] flex items-center font-['Exo_2']",children:[y.jsx(ob,{className:"mr-2 h-4 w-4"})," ",t.duration]}),y.jsx(ci,{size:"sm",className:"bg-primary px-4 py-1 rounded-full hover:bg-opacity-80 transition text-sm",onClick:()=>r(!0),children:t.actionText})]})]})]}),y.jsx(PL,{open:i,onOpenChange:r,children:y.jsxs(hE,{className:"bg-[#1a1f2e] border-gray-700 text-white max-w-md",children:[y.jsxs(pE,{children:[y.jsxs(gE,{className:"text-2xl flex items-center justify-between",children:["Register for ",t.title,y.jsx(DL,{className:"rounded-full p-1 hover:bg-gray-700",children:y.jsx(Lu,{className:"h-5 w-5"})})]}),y.jsx(vE,{className:"text-gray-300",children:"Fill out the form below to register for this event."})]}),y.jsxs("form",{onSubmit:c,className:"space-y-4",children:[y.jsxs("div",{children:[y.jsx(wr,{htmlFor:"name",className:"text-gray-300",children:"Full Name"}),y.jsx(Ur,{id:"name",value:s.name,onChange:a,className:"bg-[#121628] border-gray-700 mt-1",required:!0})]}),y.jsxs("div",{children:[y.jsx(wr,{htmlFor:"email",className:"text-gray-300",children:"Email Address"}),y.jsx(Ur,{id:"email",type:"email",value:s.email,onChange:a,className:"bg-[#121628] border-gray-700 mt-1",required:!0})]}),y.jsxs("div",{children:[y.jsx(wr,{htmlFor:"phone",className:"text-gray-300",children:"Phone Number (optional)"}),y.jsx(Ur,{id:"phone",type:"tel",value:s.phone,onChange:a,className:"bg-[#121628] border-gray-700 mt-1"})]}),y.jsx(mE,{className:"mt-6",children:y.jsx(ci,{type:"submit",className:"w-full bg-primary hover:bg-[#2ab3fc]",disabled:l.isPending,children:l.isPending?"Registering...":"Complete Registration"})})]})]})})]})}function UL(){return y.jsx("section",{id:"gallery",className:"py-20 relative",children:y.jsxs("div",{className:"container mx-auto px-4",children:[y.jsxs("div",{className:"text-center mb-16",children:[y.jsxs("h2",{className:"text-4xl font-bold mb-4",children:["Event ",y.jsx("span",{className:"text-[#33CCFF]",children:"Gallery"})]}),y.jsx("p",{className:"text-xl max-w-3xl mx-auto text-gray-300",children:"Glimpses from our previous science events and activities"}),y.jsx("div",{className:"w-20 h-1 bg-primary mx-auto mt-4"})]}),y.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:_D.map((t,e)=>y.jsx(FL,{image:t},e))}),y.jsx("div",{className:"mt-12 text-center",children:y.jsxs("a",{href:"#",className:"inline-flex items-center text-[#33CCFF] hover:text-white transition",children:[y.jsx("span",{className:"mr-2",children:"View More Photos"}),y.jsxs("svg",{className:"h-4 w-4",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[y.jsx("path",{d:"M13.75 6.75L19.25 12L13.75 17.25",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),y.jsx("path",{d:"M19 12H4.75",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})]})})]})})}function FL({image:t}){return y.jsxs("div",{className:"relative overflow-hidden rounded-xl group",children:[y.jsx("img",{src:t.src,alt:t.title,className:"w-full h-64 object-cover transition duration-500 group-hover:scale-110"}),y.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#121628] to-transparent opacity-0 group-hover:opacity-80 transition duration-300 flex items-end p-6",children:y.jsxs("div",{children:[y.jsx("h4",{className:"text-xl font-bold",children:t.title}),y.jsx("p",{className:"text-gray-300",children:t.description})]})})]})}function OL(){const t=n=>{const i=document.getElementById(n);i&&i.scrollIntoView({behavior:"smooth"})},e=n=>{switch(n){case"Atom":return y.jsx(oh,{className:"h-6 w-6"});case"Rocket":return y.jsx(db,{className:"h-6 w-6"});case"Calculator":return y.jsx(Fy,{className:"h-6 w-6"});case"Microscope":return y.jsx(cb,{className:"h-6 w-6"});case"School":return y.jsx(fb,{className:"h-6 w-6"});case"Lightbulb":return y.jsx(By,{className:"h-6 w-6"});case"BookOpen":return y.jsx(ib,{className:"h-6 w-6"});case"Beaker":return y.jsx(nb,{className:"h-6 w-6"});default:return y.jsx(oh,{className:"h-6 w-6"})}};return y.jsx("section",{id:"sponsors",className:"py-20 relative bg-[#242936]",children:y.jsxs("div",{className:"container mx-auto px-4",children:[y.jsxs("div",{className:"text-center mb-16",children:[y.jsxs("h2",{className:"text-4xl font-bold mb-4",children:["Our ",y.jsx("span",{className:"text-[#33CCFF]",children:"Sponsors"})]}),y.jsx("p",{className:"text-xl max-w-3xl mx-auto text-gray-300",children:"Partners who make the Science Circus possible through their generous support"}),y.jsx("div",{className:"w-20 h-1 bg-primary mx-auto mt-4"})]}),y.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center",children:xD.map((n,i)=>y.jsx(kL,{sponsor:{name:n.name,icon:e(n.iconName)}},i))}),y.jsxs("div",{className:"mt-16 text-center",children:[y.jsx("p",{className:"text-xl text-gray-300 mb-6",children:"Interested in becoming a sponsor?"}),y.jsx(ci,{onClick:()=>t("contact"),className:"px-8 py-3 bg-primary hover:bg-opacity-80 rounded-full text-lg transition duration-300",children:"Contact Us"})]})]})})}function kL({sponsor:t}){return y.jsx("div",{className:"bg-[#121628] bg-opacity-50 p-8 rounded-xl flex items-center justify-center transition hover:bg-opacity-70",children:y.jsx("div",{className:"w-36 h-36 flex items-center justify-center",children:y.jsxs("div",{className:"text-center",children:[y.jsx("div",{className:"w-20 h-20 bg-white bg-opacity-10 rounded-full mx-auto flex items-center justify-center mb-3",children:y.jsx("div",{className:"text-3xl text-[#33CCFF]",children:t.icon})}),y.jsx("p",{className:"text-lg font-bold",children:t.name})]})})})}function BL(){return y.jsx("section",{id:"team",className:"py-20 relative",children:y.jsxs("div",{className:"container mx-auto px-4",children:[y.jsxs("div",{className:"text-center mb-16",children:[y.jsxs("h2",{className:"text-4xl font-bold mb-4",children:["Our ",y.jsx("span",{className:"text-[#33CCFF]",children:"Team"})]}),y.jsx("p",{className:"text-xl max-w-3xl mx-auto text-gray-300",children:"Meet the brilliant minds behind Science Circus"}),y.jsx("div",{className:"w-20 h-1 bg-primary mx-auto mt-4"})]}),y.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8",children:yD.map((t,e)=>y.jsx(zL,{member:t},e))})]})})}function zL({member:t}){return y.jsxs("div",{className:"relative group",children:[y.jsxs("div",{className:"relative overflow-hidden rounded-xl",children:[y.jsx("img",{src:t.image,alt:t.name,className:"w-full aspect-square object-cover transition duration-500 group-hover:scale-110"}),y.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#121628] via-transparent to-transparent"}),y.jsx("div",{className:"absolute inset-0 bg-primary bg-opacity-40 opacity-0 transition duration-300 flex items-center justify-center group-hover:opacity-100",children:y.jsxs("div",{className:"flex space-x-4",children:[y.jsx(sf,{children:y.jsx(rm,{className:"h-4 w-4"})}),y.jsx(sf,{children:y.jsx(sm,{className:"h-4 w-4"})}),y.jsx(sf,{children:y.jsx(zy,{className:"h-4 w-4"})})]})})]}),y.jsxs("div",{className:"pt-4 text-center",children:[y.jsx("h4",{className:"text-xl font-bold",children:t.name}),y.jsx("p",{className:"text-[#33CCFF]",children:t.role})]})]})}function sf({children:t}){return y.jsx("a",{href:"#",className:"w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-40 transition",children:t})}const _E=N.forwardRef(({className:t,...e},n)=>y.jsx("textarea",{className:Tt("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:n,...e}));_E.displayName="Textarea";function VL(){const{toast:t}=Kp(),[e,n]=N.useState({name:"",email:"",subject:"",message:""}),i=o=>{const{id:a,value:l}=o.target;n(c=>({...c,[a]:l}))},r=sy({mutationFn:async o=>await ay("POST","/api/contact",o),onSuccess:()=>{t({title:"Message sent!",description:"We'll get back to you as soon as possible."}),n({name:"",email:"",subject:"",message:""})},onError:o=>{t({title:"Error sending message",description:o.message||"Please try again later.",variant:"destructive"})}}),s=o=>{o.preventDefault(),r.mutate(e)};return y.jsxs("section",{id:"contact",className:"py-20 relative bg-[#242936]",children:[y.jsxs("div",{className:"absolute inset-0 z-0",children:[y.jsx("div",{className:"absolute inset-0 bg-[#121628] opacity-80"}),y.jsx("img",{src:"https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",alt:"Cosmic background",className:"w-full h-full object-cover opacity-20"})]}),y.jsxs("div",{className:"container mx-auto px-4 relative z-10",children:[y.jsxs("div",{className:"text-center mb-16",children:[y.jsxs("h2",{className:"text-4xl font-bold mb-4",children:["Contact ",y.jsx("span",{className:"text-[#33CCFF]",children:"Us"})]}),y.jsx("p",{className:"text-xl max-w-3xl mx-auto text-gray-300",children:"Have questions about Science Circus? We'd love to hear from you!"}),y.jsx("div",{className:"w-20 h-1 bg-primary mx-auto mt-4"})]}),y.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12",children:[y.jsx("div",{children:y.jsxs("form",{className:"space-y-6",onSubmit:s,children:[y.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[y.jsxs("div",{children:[y.jsx(wr,{htmlFor:"name",className:"block text-sm font-medium text-gray-300 mb-2",children:"Your Name"}),y.jsx(Ur,{type:"text",id:"name",value:e.name,onChange:i,className:"w-full px-4 py-3 bg-[#121628] border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#33CCFF]",placeholder:"John Doe",required:!0})]}),y.jsxs("div",{children:[y.jsx(wr,{htmlFor:"email",className:"block text-sm font-medium text-gray-300 mb-2",children:"Your Email"}),y.jsx(Ur,{type:"email",id:"email",value:e.email,onChange:i,className:"w-full px-4 py-3 bg-[#121628] border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#33CCFF]",placeholder:"john@example.com",required:!0})]})]}),y.jsxs("div",{children:[y.jsx(wr,{htmlFor:"subject",className:"block text-sm font-medium text-gray-300 mb-2",children:"Subject"}),y.jsx(Ur,{type:"text",id:"subject",value:e.subject,onChange:i,className:"w-full px-4 py-3 bg-[#121628] border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#33CCFF]",placeholder:"Event Inquiry",required:!0})]}),y.jsxs("div",{children:[y.jsx(wr,{htmlFor:"message",className:"block text-sm font-medium text-gray-300 mb-2",children:"Message"}),y.jsx(_E,{id:"message",value:e.message,onChange:i,rows:5,className:"w-full px-4 py-3 bg-[#121628] border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#33CCFF]",placeholder:"Your message here...",required:!0})]}),y.jsx("div",{children:y.jsx(ci,{type:"submit",className:"w-full py-3 bg-primary hover:bg-opacity-80 rounded-lg transition duration-300",disabled:r.isPending,children:r.isPending?"Sending...":"Send Message"})})]})}),y.jsxs("div",{className:"flex flex-col justify-between",children:[y.jsxs("div",{className:"space-y-8",children:[y.jsxs(of,{icon:y.jsx(ab,{}),title:"Location",children:["Science Building,",y.jsx("br",{}),"University Campus,",y.jsx("br",{}),"123 Education Street,",y.jsx("br",{}),"Cityville, CV 12345"]}),y.jsxs(of,{icon:y.jsx(zy,{}),title:"Email",children:["info@sciencecircus.edu",y.jsx("br",{}),"events@sciencecircus.edu"]}),y.jsxs(of,{icon:y.jsx(ub,{}),title:"Phone",children:["+1 (555) 123-4567",y.jsx("br",{}),"+1 (555) 987-6543"]})]}),y.jsxs("div",{className:"mt-8 lg:mt-0",children:[y.jsx("h4",{className:"text-xl font-bold mb-4",children:"Follow Us"}),y.jsxs("div",{className:"flex space-x-4",children:[y.jsx(cc,{icon:y.jsx(Oy,{className:"h-5 w-5"})}),y.jsx(cc,{icon:y.jsx(sm,{className:"h-5 w-5"})}),y.jsx(cc,{icon:y.jsx(ky,{className:"h-5 w-5"})}),y.jsx(cc,{icon:y.jsx(rm,{className:"h-5 w-5"})})]})]})]})]})]})]})}function of({icon:t,title:e,children:n}){return y.jsxs("div",{className:"flex items-start space-x-6",children:[y.jsx("div",{className:"text-[#33CCFF] text-2xl mt-1",children:t}),y.jsxs("div",{children:[y.jsx("h4",{className:"text-xl font-bold mb-2",children:e}),y.jsx("p",{className:"text-gray-300",children:n})]})]})}function cc({icon:t}){return y.jsx("a",{href:"#",className:"w-12 h-12 rounded-full bg-[#121628] bg-opacity-50 flex items-center justify-center hover:bg-primary transition",children:t})}function HL(){const t=e=>{const n=document.getElementById(e);n&&n.scrollIntoView({behavior:"smooth"})};return y.jsx("footer",{className:"bg-[#121628] py-12 relative",children:y.jsxs("div",{className:"container mx-auto px-4",children:[y.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8",children:[y.jsxs("div",{className:"md:col-span-2",children:[y.jsxs($x,{href:"/",className:"flex items-center space-x-3 mb-4",children:[y.jsxs("div",{className:"relative w-10 h-10",children:[y.jsx("div",{className:"absolute inset-0 bg-primary rounded-full opacity-70"}),y.jsx("div",{className:"absolute inset-1 bg-[#33CCFF] rounded-full opacity-70"}),y.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:y.jsx("span",{className:"font-bold text-lg text-white",children:"SC"})})]}),y.jsx("span",{className:"text-xl font-bold",children:"Science Circus"})]}),y.jsx("p",{className:"text-gray-400 mb-6",children:"Science Circus brings the wonders of physics and mathematics to life through interactive and engaging events. Join us for an unforgettable journey through the laws that govern our universe."}),y.jsxs("div",{className:"flex space-x-4",children:[y.jsx(uc,{icon:y.jsx(Oy,{className:"h-4 w-4"})}),y.jsx(uc,{icon:y.jsx(sm,{className:"h-4 w-4"})}),y.jsx(uc,{icon:y.jsx(ky,{className:"h-4 w-4"})}),y.jsx(uc,{icon:y.jsx(rm,{className:"h-4 w-4"})})]})]}),y.jsxs("div",{children:[y.jsx("h4",{className:"text-lg font-bold mb-4",children:"Quick Links"}),y.jsxs("ul",{className:"space-y-2 text-gray-400",children:[y.jsx("li",{children:y.jsx(Ws,{onClick:()=>t("about"),children:"About Us"})}),y.jsx("li",{children:y.jsx(Ws,{onClick:()=>t("events"),children:"Events"})}),y.jsx("li",{children:y.jsx(Ws,{onClick:()=>t("gallery"),children:"Gallery"})}),y.jsx("li",{children:y.jsx(Ws,{onClick:()=>t("sponsors"),children:"Sponsors"})}),y.jsx("li",{children:y.jsx(Ws,{onClick:()=>t("team"),children:"Team"})}),y.jsx("li",{children:y.jsx(Ws,{onClick:()=>t("contact"),children:"Contact"})})]})]}),y.jsxs("div",{children:[y.jsx("h4",{className:"text-lg font-bold mb-4",children:"Newsletter"}),y.jsx("p",{className:"text-gray-400 mb-4",children:"Subscribe to our newsletter to receive updates about upcoming events."}),y.jsxs("form",{className:"flex",children:[y.jsx(Ur,{type:"email",className:"w-full px-4 py-2 bg-[#242936] border border-gray-600 rounded-l-lg focus:ring-2 focus:ring-[#33CCFF]",placeholder:"Your email"}),y.jsx(ci,{type:"submit",className:"px-4 py-2 bg-primary hover:bg-opacity-80 rounded-r-lg transition",children:y.jsx(hb,{className:"h-4 w-4"})})]})]})]}),y.jsx("div",{className:"border-t border-gray-700 mt-12 pt-8 text-center text-gray-500",children:y.jsxs("p",{children:["© ",new Date().getFullYear()," Science Circus. All rights reserved."]})})]})})}function uc({icon:t}){return y.jsx("a",{href:"#",className:"text-gray-400 hover:text-[#33CCFF] transition",children:t})}function Ws({onClick:t,children:e}){return y.jsx("button",{onClick:t,className:"hover:text-[#33CCFF] transition",children:e})}function GL(){const[t,e]=N.useState(!0);return N.useEffect(()=>{const n=setTimeout(()=>{e(!1)},2500);return()=>clearTimeout(n)},[]),y.jsxs("div",{className:"min-h-screen bg-[#121628] text-white overflow-x-hidden",children:[y.jsx("div",{className:`fixed top-0 left-0 w-full h-full bg-[#121628] flex justify-center items-center z-50 transition-opacity duration-500 ${t?"opacity-100":"opacity-0 pointer-events-none"}`,children:y.jsxs("div",{className:"relative w-64 h-64",children:[y.jsx("div",{className:"absolute inset-0 rounded-full bg-primary opacity-20 animate-pulse",style:{animationDuration:"4s"}}),y.jsx("div",{className:"absolute inset-8 rounded-full bg-[#33CCFF] opacity-20 animate-pulse"}),y.jsx("div",{className:"absolute inset-16 rounded-full border-4 border-white opacity-40",style:{animation:"spin 10s linear infinite"}}),y.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:y.jsx("h1",{className:"text-4xl font-bold text-white",children:"Science Circus"})})]})}),y.jsx("div",{className:"fixed inset-0 z-0",children:y.jsx(fD,{})}),y.jsx(pD,{}),y.jsx(mD,{}),y.jsx(gD,{}),y.jsx(LL,{}),y.jsx(UL,{}),y.jsx(OL,{}),y.jsx(BL,{}),y.jsx(VL,{}),y.jsx(HL,{}),y.jsx(WL,{})]})}function WL(){const[t,e]=N.useState(!1);N.useEffect(()=>{const i=()=>{window.scrollY>300?e(!0):e(!1)};return window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)},[]);const n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return y.jsx("button",{onClick:n,className:`fixed bottom-6 right-6 w-12 h-12 bg-primary rounded-full flex items-center justify-center transition-all duration-300 ${t?"opacity-100":"opacity-0 invisible"}`,children:y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 15l7-7 7 7"})})})}function jL(){return y.jsxs(Cw,{children:[y.jsx(Gg,{path:"/",component:GL}),y.jsx(Gg,{component:nC})]})}function XL(){return y.jsxs(Zw,{client:nT,children:[y.jsx(jL,{}),y.jsx(Qb,{})]})}Ox(document.getElementById("root")).render(y.jsx(XL,{}));
