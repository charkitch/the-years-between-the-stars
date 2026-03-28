var mx=Object.defineProperty;var gx=(t,e,n)=>e in t?mx(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ze=(t,e,n)=>gx(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function _x(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var o0={exports:{}},Fn={},a0={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ta=Symbol.for("react.element"),vx=Symbol.for("react.portal"),xx=Symbol.for("react.fragment"),yx=Symbol.for("react.strict_mode"),Sx=Symbol.for("react.profiler"),Mx=Symbol.for("react.provider"),Ex=Symbol.for("react.context"),Tx=Symbol.for("react.forward_ref"),wx=Symbol.for("react.suspense"),Ax=Symbol.for("react.memo"),Cx=Symbol.for("react.lazy"),Pp=Symbol.iterator;function Rx(t){return t===null||typeof t!="object"?null:(t=Pp&&t[Pp]||t["@@iterator"],typeof t=="function"?t:null)}var l0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},c0=Object.assign,u0={};function ao(t,e,n){this.props=t,this.context=e,this.refs=u0,this.updater=n||l0}ao.prototype.isReactComponent={};ao.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ao.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function d0(){}d0.prototype=ao.prototype;function nh(t,e,n){this.props=t,this.context=e,this.refs=u0,this.updater=n||l0}var ih=nh.prototype=new d0;ih.constructor=nh;c0(ih,ao.prototype);ih.isPureReactComponent=!0;var Lp=Array.isArray,f0=Object.prototype.hasOwnProperty,rh={current:null},h0={key:!0,ref:!0,__self:!0,__source:!0};function p0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)f0.call(e,i)&&!h0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ta,type:t,key:s,ref:o,props:r,_owner:rh.current}}function bx(t,e){return{$$typeof:Ta,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function sh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ta}function Px(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ip=/\/+/g;function eu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Px(""+t.key):e.toString(36)}function Pl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ta:case vx:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+eu(o,0):i,Lp(r)?(n="",t!=null&&(n=t.replace(Ip,"$&/")+"/"),Pl(r,e,n,"",function(c){return c})):r!=null&&(sh(r)&&(r=bx(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Ip,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Lp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+eu(s,a);o+=Pl(s,e,n,l,r)}else if(l=Rx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+eu(s,a++),o+=Pl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ia(t,e,n){if(t==null)return t;var i=[],r=0;return Pl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Lx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var _n={current:null},Ll={transition:null},Ix={ReactCurrentDispatcher:_n,ReactCurrentBatchConfig:Ll,ReactCurrentOwner:rh};function m0(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:Ia,forEach:function(t,e,n){Ia(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ia(t,function(){e++}),e},toArray:function(t){return Ia(t,function(e){return e})||[]},only:function(t){if(!sh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};je.Component=ao;je.Fragment=xx;je.Profiler=Sx;je.PureComponent=nh;je.StrictMode=yx;je.Suspense=wx;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ix;je.act=m0;je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=c0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=rh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)f0.call(e,l)&&!h0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ta,type:t.type,key:r,ref:s,props:i,_owner:o}};je.createContext=function(t){return t={$$typeof:Ex,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Mx,_context:t},t.Consumer=t};je.createElement=p0;je.createFactory=function(t){var e=p0.bind(null,t);return e.type=t,e};je.createRef=function(){return{current:null}};je.forwardRef=function(t){return{$$typeof:Tx,render:t}};je.isValidElement=sh;je.lazy=function(t){return{$$typeof:Cx,_payload:{_status:-1,_result:t},_init:Lx}};je.memo=function(t,e){return{$$typeof:Ax,type:t,compare:e===void 0?null:e}};je.startTransition=function(t){var e=Ll.transition;Ll.transition={};try{t()}finally{Ll.transition=e}};je.unstable_act=m0;je.useCallback=function(t,e){return _n.current.useCallback(t,e)};je.useContext=function(t){return _n.current.useContext(t)};je.useDebugValue=function(){};je.useDeferredValue=function(t){return _n.current.useDeferredValue(t)};je.useEffect=function(t,e){return _n.current.useEffect(t,e)};je.useId=function(){return _n.current.useId()};je.useImperativeHandle=function(t,e,n){return _n.current.useImperativeHandle(t,e,n)};je.useInsertionEffect=function(t,e){return _n.current.useInsertionEffect(t,e)};je.useLayoutEffect=function(t,e){return _n.current.useLayoutEffect(t,e)};je.useMemo=function(t,e){return _n.current.useMemo(t,e)};je.useReducer=function(t,e,n){return _n.current.useReducer(t,e,n)};je.useRef=function(t){return _n.current.useRef(t)};je.useState=function(t){return _n.current.useState(t)};je.useSyncExternalStore=function(t,e,n){return _n.current.useSyncExternalStore(t,e,n)};je.useTransition=function(){return _n.current.useTransition()};je.version="18.3.1";a0.exports=je;var st=a0.exports;const Na=_x(st);var g0={exports:{}},_0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,W){var J=z.length;z.push(W);e:for(;0<J;){var ee=J-1>>>1,te=z[ee];if(0<r(te,W))z[ee]=W,z[J]=te,J=ee;else break e}}function n(z){return z.length===0?null:z[0]}function i(z){if(z.length===0)return null;var W=z[0],J=z.pop();if(J!==W){z[0]=J;e:for(var ee=0,te=z.length,Pe=te>>>1;ee<Pe;){var Ye=2*(ee+1)-1,Xe=z[Ye],q=Ye+1,re=z[q];if(0>r(Xe,J))q<te&&0>r(re,Xe)?(z[ee]=re,z[q]=J,ee=q):(z[ee]=Xe,z[Ye]=J,ee=Ye);else if(q<te&&0>r(re,J))z[ee]=re,z[q]=J,ee=q;else break e}}return W}function r(z,W){var J=z.sortIndex-W.sortIndex;return J!==0?J:z.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,h=null,u=3,m=!1,_=!1,v=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(z){for(var W=n(c);W!==null;){if(W.callback===null)i(c);else if(W.startTime<=z)i(c),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(c)}}function y(z){if(v=!1,x(z),!_)if(n(l)!==null)_=!0,G(T);else{var W=n(c);W!==null&&O(y,W.startTime-z)}}function T(z,W){_=!1,v&&(v=!1,d(S),S=-1),m=!0;var J=u;try{for(x(W),h=n(l);h!==null&&(!(h.expirationTime>W)||z&&!I());){var ee=h.callback;if(typeof ee=="function"){h.callback=null,u=h.priorityLevel;var te=ee(h.expirationTime<=W);W=t.unstable_now(),typeof te=="function"?h.callback=te:h===n(l)&&i(l),x(W)}else i(l);h=n(l)}if(h!==null)var Pe=!0;else{var Ye=n(c);Ye!==null&&O(y,Ye.startTime-W),Pe=!1}return Pe}finally{h=null,u=J,m=!1}}var A=!1,C=null,S=-1,E=5,U=-1;function I(){return!(t.unstable_now()-U<E)}function b(){if(C!==null){var z=t.unstable_now();U=z;var W=!0;try{W=C(!0,z)}finally{W?P():(A=!1,C=null)}}else A=!1}var P;if(typeof p=="function")P=function(){p(b)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,V=H.port2;H.port1.onmessage=b,P=function(){V.postMessage(null)}}else P=function(){g(b,0)};function G(z){C=z,A||(A=!0,P())}function O(z,W){S=g(function(){z(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,G(T))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(z){switch(u){case 1:case 2:case 3:var W=3;break;default:W=u}var J=u;u=W;try{return z()}finally{u=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,W){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var J=u;u=z;try{return W()}finally{u=J}},t.unstable_scheduleCallback=function(z,W,J){var ee=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ee+J:ee):J=ee,z){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=J+te,z={id:f++,callback:W,priorityLevel:z,startTime:J,expirationTime:te,sortIndex:-1},J>ee?(z.sortIndex=J,e(c,z),n(l)===null&&z===n(c)&&(v?(d(S),S=-1):v=!0,O(y,J-ee))):(z.sortIndex=te,e(l,z),_||m||(_=!0,G(T))),z},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(z){var W=u;return function(){var J=u;u=W;try{return z.apply(this,arguments)}finally{u=J}}}})(_0);g0.exports=_0;var Nx=g0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dx=st,Un=Nx;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v0=new Set,ta={};function ts(t,e){qs(t,e),qs(t+"Capture",e)}function qs(t,e){for(ta[t]=e,t=0;t<e.length;t++)v0.add(e[t])}var Hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fd=Object.prototype.hasOwnProperty,Ux=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Np={},Dp={};function Fx(t){return fd.call(Dp,t)?!0:fd.call(Np,t)?!1:Ux.test(t)?Dp[t]=!0:(Np[t]=!0,!1)}function Ox(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Bx(t,e,n,i){if(e===null||typeof e>"u"||Ox(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function vn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Jt[t]=new vn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Jt[e]=new vn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Jt[t]=new vn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Jt[t]=new vn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Jt[t]=new vn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Jt[t]=new vn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Jt[t]=new vn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Jt[t]=new vn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Jt[t]=new vn(t,5,!1,t.toLowerCase(),null,!1,!1)});var oh=/[\-:]([a-z])/g;function ah(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(oh,ah);Jt[e]=new vn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(oh,ah);Jt[e]=new vn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(oh,ah);Jt[e]=new vn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Jt[t]=new vn(t,1,!1,t.toLowerCase(),null,!1,!1)});Jt.xlinkHref=new vn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Jt[t]=new vn(t,1,!1,t.toLowerCase(),null,!0,!0)});function lh(t,e,n,i){var r=Jt.hasOwnProperty(e)?Jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Bx(e,n,r,i)&&(n=null),i||r===null?Fx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var $i=Dx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Da=Symbol.for("react.element"),Rs=Symbol.for("react.portal"),bs=Symbol.for("react.fragment"),ch=Symbol.for("react.strict_mode"),hd=Symbol.for("react.profiler"),x0=Symbol.for("react.provider"),y0=Symbol.for("react.context"),uh=Symbol.for("react.forward_ref"),pd=Symbol.for("react.suspense"),md=Symbol.for("react.suspense_list"),dh=Symbol.for("react.memo"),sr=Symbol.for("react.lazy"),S0=Symbol.for("react.offscreen"),Up=Symbol.iterator;function po(t){return t===null||typeof t!="object"?null:(t=Up&&t[Up]||t["@@iterator"],typeof t=="function"?t:null)}var wt=Object.assign,tu;function Fo(t){if(tu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);tu=e&&e[1]||""}return`
`+tu+t}var nu=!1;function iu(t,e){if(!t||nu)return"";nu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{nu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Fo(t):""}function kx(t){switch(t.tag){case 5:return Fo(t.type);case 16:return Fo("Lazy");case 13:return Fo("Suspense");case 19:return Fo("SuspenseList");case 0:case 2:case 15:return t=iu(t.type,!1),t;case 11:return t=iu(t.type.render,!1),t;case 1:return t=iu(t.type,!0),t;default:return""}}function gd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case bs:return"Fragment";case Rs:return"Portal";case hd:return"Profiler";case ch:return"StrictMode";case pd:return"Suspense";case md:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case y0:return(t.displayName||"Context")+".Consumer";case x0:return(t._context.displayName||"Context")+".Provider";case uh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case dh:return e=t.displayName||null,e!==null?e:gd(t.type)||"Memo";case sr:e=t._payload,t=t._init;try{return gd(t(e))}catch{}}return null}function zx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gd(e);case 8:return e===ch?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Mr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function M0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Vx(t){var e=M0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ua(t){t._valueTracker||(t._valueTracker=Vx(t))}function E0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=M0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Kl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function _d(t,e){var n=e.checked;return wt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Fp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Mr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function T0(t,e){e=e.checked,e!=null&&lh(t,"checked",e,!1)}function vd(t,e){T0(t,e);var n=Mr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?xd(t,e.type,n):e.hasOwnProperty("defaultValue")&&xd(t,e.type,Mr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Op(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function xd(t,e,n){(e!=="number"||Kl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Oo=Array.isArray;function zs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Mr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function yd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return wt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Bp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(Oo(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Mr(n)}}function w0(t,e){var n=Mr(e.value),i=Mr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function kp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function A0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?A0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Fa,C0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Fa=Fa||document.createElement("div"),Fa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Fa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function na(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Wo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gx=["Webkit","ms","Moz","O"];Object.keys(Wo).forEach(function(t){Gx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Wo[e]=Wo[t]})});function R0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Wo.hasOwnProperty(t)&&Wo[t]?(""+e).trim():e+"px"}function b0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=R0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Hx=wt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Md(t,e){if(e){if(Hx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Ed(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Td=null;function fh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var wd=null,Vs=null,Gs=null;function zp(t){if(t=Ca(t)){if(typeof wd!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=Lc(e),wd(t.stateNode,t.type,e))}}function P0(t){Vs?Gs?Gs.push(t):Gs=[t]:Vs=t}function L0(){if(Vs){var t=Vs,e=Gs;if(Gs=Vs=null,zp(t),e)for(t=0;t<e.length;t++)zp(e[t])}}function I0(t,e){return t(e)}function N0(){}var ru=!1;function D0(t,e,n){if(ru)return t(e,n);ru=!0;try{return I0(t,e,n)}finally{ru=!1,(Vs!==null||Gs!==null)&&(N0(),L0())}}function ia(t,e){var n=t.stateNode;if(n===null)return null;var i=Lc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var Ad=!1;if(Hi)try{var mo={};Object.defineProperty(mo,"passive",{get:function(){Ad=!0}}),window.addEventListener("test",mo,mo),window.removeEventListener("test",mo,mo)}catch{Ad=!1}function Wx(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var jo=!1,Zl=null,Jl=!1,Cd=null,jx={onError:function(t){jo=!0,Zl=t}};function Xx(t,e,n,i,r,s,o,a,l){jo=!1,Zl=null,Wx.apply(jx,arguments)}function Yx(t,e,n,i,r,s,o,a,l){if(Xx.apply(this,arguments),jo){if(jo){var c=Zl;jo=!1,Zl=null}else throw Error(ne(198));Jl||(Jl=!0,Cd=c)}}function ns(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function U0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Vp(t){if(ns(t)!==t)throw Error(ne(188))}function qx(t){var e=t.alternate;if(!e){if(e=ns(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Vp(r),t;if(s===i)return Vp(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function F0(t){return t=qx(t),t!==null?O0(t):null}function O0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=O0(t);if(e!==null)return e;t=t.sibling}return null}var B0=Un.unstable_scheduleCallback,Gp=Un.unstable_cancelCallback,$x=Un.unstable_shouldYield,Kx=Un.unstable_requestPaint,Lt=Un.unstable_now,Zx=Un.unstable_getCurrentPriorityLevel,hh=Un.unstable_ImmediatePriority,k0=Un.unstable_UserBlockingPriority,Ql=Un.unstable_NormalPriority,Jx=Un.unstable_LowPriority,z0=Un.unstable_IdlePriority,Cc=null,vi=null;function Qx(t){if(vi&&typeof vi.onCommitFiberRoot=="function")try{vi.onCommitFiberRoot(Cc,t,void 0,(t.current.flags&128)===128)}catch{}}var ri=Math.clz32?Math.clz32:ny,ey=Math.log,ty=Math.LN2;function ny(t){return t>>>=0,t===0?32:31-(ey(t)/ty|0)|0}var Oa=64,Ba=4194304;function Bo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ec(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Bo(a):(s&=o,s!==0&&(i=Bo(s)))}else o=n&~r,o!==0?i=Bo(o):s!==0&&(i=Bo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ri(e),r=1<<n,i|=t[n],e&=~r;return i}function iy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ry(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ri(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=iy(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Rd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function V0(){var t=Oa;return Oa<<=1,!(Oa&4194240)&&(Oa=64),t}function su(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function wa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ri(e),t[e]=n}function sy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ri(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function ph(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ri(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ot=0;function G0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var H0,mh,W0,j0,X0,bd=!1,ka=[],hr=null,pr=null,mr=null,ra=new Map,sa=new Map,ar=[],oy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hp(t,e){switch(t){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":ra.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":sa.delete(e.pointerId)}}function go(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ca(e),e!==null&&mh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function ay(t,e,n,i,r){switch(e){case"focusin":return hr=go(hr,t,e,n,i,r),!0;case"dragenter":return pr=go(pr,t,e,n,i,r),!0;case"mouseover":return mr=go(mr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ra.set(s,go(ra.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,sa.set(s,go(sa.get(s)||null,t,e,n,i,r)),!0}return!1}function Y0(t){var e=Gr(t.target);if(e!==null){var n=ns(e);if(n!==null){if(e=n.tag,e===13){if(e=U0(n),e!==null){t.blockedOn=e,X0(t.priority,function(){W0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Il(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Pd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Td=i,n.target.dispatchEvent(i),Td=null}else return e=Ca(n),e!==null&&mh(e),t.blockedOn=n,!1;e.shift()}return!0}function Wp(t,e,n){Il(t)&&n.delete(e)}function ly(){bd=!1,hr!==null&&Il(hr)&&(hr=null),pr!==null&&Il(pr)&&(pr=null),mr!==null&&Il(mr)&&(mr=null),ra.forEach(Wp),sa.forEach(Wp)}function _o(t,e){t.blockedOn===e&&(t.blockedOn=null,bd||(bd=!0,Un.unstable_scheduleCallback(Un.unstable_NormalPriority,ly)))}function oa(t){function e(r){return _o(r,t)}if(0<ka.length){_o(ka[0],t);for(var n=1;n<ka.length;n++){var i=ka[n];i.blockedOn===t&&(i.blockedOn=null)}}for(hr!==null&&_o(hr,t),pr!==null&&_o(pr,t),mr!==null&&_o(mr,t),ra.forEach(e),sa.forEach(e),n=0;n<ar.length;n++)i=ar[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ar.length&&(n=ar[0],n.blockedOn===null);)Y0(n),n.blockedOn===null&&ar.shift()}var Hs=$i.ReactCurrentBatchConfig,tc=!0;function cy(t,e,n,i){var r=ot,s=Hs.transition;Hs.transition=null;try{ot=1,gh(t,e,n,i)}finally{ot=r,Hs.transition=s}}function uy(t,e,n,i){var r=ot,s=Hs.transition;Hs.transition=null;try{ot=4,gh(t,e,n,i)}finally{ot=r,Hs.transition=s}}function gh(t,e,n,i){if(tc){var r=Pd(t,e,n,i);if(r===null)mu(t,e,i,nc,n),Hp(t,i);else if(ay(r,t,e,n,i))i.stopPropagation();else if(Hp(t,i),e&4&&-1<oy.indexOf(t)){for(;r!==null;){var s=Ca(r);if(s!==null&&H0(s),s=Pd(t,e,n,i),s===null&&mu(t,e,i,nc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else mu(t,e,i,null,n)}}var nc=null;function Pd(t,e,n,i){if(nc=null,t=fh(i),t=Gr(t),t!==null)if(e=ns(t),e===null)t=null;else if(n=e.tag,n===13){if(t=U0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return nc=t,null}function q0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zx()){case hh:return 1;case k0:return 4;case Ql:case Jx:return 16;case z0:return 536870912;default:return 16}default:return 16}}var ur=null,_h=null,Nl=null;function $0(){if(Nl)return Nl;var t,e=_h,n=e.length,i,r="value"in ur?ur.value:ur.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Nl=r.slice(t,1<i?1-i:void 0)}function Dl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function za(){return!0}function jp(){return!1}function On(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?za:jp,this.isPropagationStopped=jp,this}return wt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=za)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=za)},persist:function(){},isPersistent:za}),e}var lo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vh=On(lo),Aa=wt({},lo,{view:0,detail:0}),dy=On(Aa),ou,au,vo,Rc=wt({},Aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==vo&&(vo&&t.type==="mousemove"?(ou=t.screenX-vo.screenX,au=t.screenY-vo.screenY):au=ou=0,vo=t),ou)},movementY:function(t){return"movementY"in t?t.movementY:au}}),Xp=On(Rc),fy=wt({},Rc,{dataTransfer:0}),hy=On(fy),py=wt({},Aa,{relatedTarget:0}),lu=On(py),my=wt({},lo,{animationName:0,elapsedTime:0,pseudoElement:0}),gy=On(my),_y=wt({},lo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),vy=On(_y),xy=wt({},lo,{data:0}),Yp=On(xy),yy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},My={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ey(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=My[t])?!!e[t]:!1}function xh(){return Ey}var Ty=wt({},Aa,{key:function(t){if(t.key){var e=yy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Dl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Sy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xh,charCode:function(t){return t.type==="keypress"?Dl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Dl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),wy=On(Ty),Ay=wt({},Rc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qp=On(Ay),Cy=wt({},Aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xh}),Ry=On(Cy),by=wt({},lo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Py=On(by),Ly=wt({},Rc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Iy=On(Ly),Ny=[9,13,27,32],yh=Hi&&"CompositionEvent"in window,Xo=null;Hi&&"documentMode"in document&&(Xo=document.documentMode);var Dy=Hi&&"TextEvent"in window&&!Xo,K0=Hi&&(!yh||Xo&&8<Xo&&11>=Xo),$p=" ",Kp=!1;function Z0(t,e){switch(t){case"keyup":return Ny.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function J0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ps=!1;function Uy(t,e){switch(t){case"compositionend":return J0(e);case"keypress":return e.which!==32?null:(Kp=!0,$p);case"textInput":return t=e.data,t===$p&&Kp?null:t;default:return null}}function Fy(t,e){if(Ps)return t==="compositionend"||!yh&&Z0(t,e)?(t=$0(),Nl=_h=ur=null,Ps=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return K0&&e.locale!=="ko"?null:e.data;default:return null}}var Oy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Oy[t.type]:e==="textarea"}function Q0(t,e,n,i){P0(i),e=ic(e,"onChange"),0<e.length&&(n=new vh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Yo=null,aa=null;function By(t){u_(t,0)}function bc(t){var e=Ns(t);if(E0(e))return t}function ky(t,e){if(t==="change")return e}var e_=!1;if(Hi){var cu;if(Hi){var uu="oninput"in document;if(!uu){var Jp=document.createElement("div");Jp.setAttribute("oninput","return;"),uu=typeof Jp.oninput=="function"}cu=uu}else cu=!1;e_=cu&&(!document.documentMode||9<document.documentMode)}function Qp(){Yo&&(Yo.detachEvent("onpropertychange",t_),aa=Yo=null)}function t_(t){if(t.propertyName==="value"&&bc(aa)){var e=[];Q0(e,aa,t,fh(t)),D0(By,e)}}function zy(t,e,n){t==="focusin"?(Qp(),Yo=e,aa=n,Yo.attachEvent("onpropertychange",t_)):t==="focusout"&&Qp()}function Vy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return bc(aa)}function Gy(t,e){if(t==="click")return bc(e)}function Hy(t,e){if(t==="input"||t==="change")return bc(e)}function Wy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var oi=typeof Object.is=="function"?Object.is:Wy;function la(t,e){if(oi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!fd.call(e,r)||!oi(t[r],e[r]))return!1}return!0}function em(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function tm(t,e){var n=em(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=em(n)}}function n_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?n_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function i_(){for(var t=window,e=Kl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Kl(t.document)}return e}function Sh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function jy(t){var e=i_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&n_(n.ownerDocument.documentElement,n)){if(i!==null&&Sh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=tm(n,s);var o=tm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Xy=Hi&&"documentMode"in document&&11>=document.documentMode,Ls=null,Ld=null,qo=null,Id=!1;function nm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Id||Ls==null||Ls!==Kl(i)||(i=Ls,"selectionStart"in i&&Sh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),qo&&la(qo,i)||(qo=i,i=ic(Ld,"onSelect"),0<i.length&&(e=new vh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ls)))}function Va(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Is={animationend:Va("Animation","AnimationEnd"),animationiteration:Va("Animation","AnimationIteration"),animationstart:Va("Animation","AnimationStart"),transitionend:Va("Transition","TransitionEnd")},du={},r_={};Hi&&(r_=document.createElement("div").style,"AnimationEvent"in window||(delete Is.animationend.animation,delete Is.animationiteration.animation,delete Is.animationstart.animation),"TransitionEvent"in window||delete Is.transitionend.transition);function Pc(t){if(du[t])return du[t];if(!Is[t])return t;var e=Is[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in r_)return du[t]=e[n];return t}var s_=Pc("animationend"),o_=Pc("animationiteration"),a_=Pc("animationstart"),l_=Pc("transitionend"),c_=new Map,im="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wr(t,e){c_.set(t,e),ts(e,[t])}for(var fu=0;fu<im.length;fu++){var hu=im[fu],Yy=hu.toLowerCase(),qy=hu[0].toUpperCase()+hu.slice(1);wr(Yy,"on"+qy)}wr(s_,"onAnimationEnd");wr(o_,"onAnimationIteration");wr(a_,"onAnimationStart");wr("dblclick","onDoubleClick");wr("focusin","onFocus");wr("focusout","onBlur");wr(l_,"onTransitionEnd");qs("onMouseEnter",["mouseout","mouseover"]);qs("onMouseLeave",["mouseout","mouseover"]);qs("onPointerEnter",["pointerout","pointerover"]);qs("onPointerLeave",["pointerout","pointerover"]);ts("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ts("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ts("onBeforeInput",["compositionend","keypress","textInput","paste"]);ts("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ts("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ts("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$y=new Set("cancel close invalid load scroll toggle".split(" ").concat(ko));function rm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Yx(i,e,void 0,t),t.currentTarget=null}function u_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;rm(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;rm(r,a,c),s=l}}}if(Jl)throw t=Cd,Jl=!1,Cd=null,t}function vt(t,e){var n=e[Od];n===void 0&&(n=e[Od]=new Set);var i=t+"__bubble";n.has(i)||(d_(e,t,2,!1),n.add(i))}function pu(t,e,n){var i=0;e&&(i|=4),d_(n,t,i,e)}var Ga="_reactListening"+Math.random().toString(36).slice(2);function ca(t){if(!t[Ga]){t[Ga]=!0,v0.forEach(function(n){n!=="selectionchange"&&($y.has(n)||pu(n,!1,t),pu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ga]||(e[Ga]=!0,pu("selectionchange",!1,e))}}function d_(t,e,n,i){switch(q0(e)){case 1:var r=cy;break;case 4:r=uy;break;default:r=gh}n=r.bind(null,e,n,t),r=void 0,!Ad||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function mu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Gr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}D0(function(){var c=s,f=fh(n),h=[];e:{var u=c_.get(t);if(u!==void 0){var m=vh,_=t;switch(t){case"keypress":if(Dl(n)===0)break e;case"keydown":case"keyup":m=wy;break;case"focusin":_="focus",m=lu;break;case"focusout":_="blur",m=lu;break;case"beforeblur":case"afterblur":m=lu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Xp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=hy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Ry;break;case s_:case o_:case a_:m=gy;break;case l_:m=Py;break;case"scroll":m=dy;break;case"wheel":m=Iy;break;case"copy":case"cut":case"paste":m=vy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=qp}var v=(e&4)!==0,g=!v&&t==="scroll",d=v?u!==null?u+"Capture":null:u;v=[];for(var p=c,x;p!==null;){x=p;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,d!==null&&(y=ia(p,d),y!=null&&v.push(ua(p,y,x)))),g)break;p=p.return}0<v.length&&(u=new m(u,_,null,n,f),h.push({event:u,listeners:v}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",u&&n!==Td&&(_=n.relatedTarget||n.fromElement)&&(Gr(_)||_[Wi]))break e;if((m||u)&&(u=f.window===f?f:(u=f.ownerDocument)?u.defaultView||u.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?Gr(_):null,_!==null&&(g=ns(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(v=Xp,y="onMouseLeave",d="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(v=qp,y="onPointerLeave",d="onPointerEnter",p="pointer"),g=m==null?u:Ns(m),x=_==null?u:Ns(_),u=new v(y,p+"leave",m,n,f),u.target=g,u.relatedTarget=x,y=null,Gr(f)===c&&(v=new v(d,p+"enter",_,n,f),v.target=x,v.relatedTarget=g,y=v),g=y,m&&_)t:{for(v=m,d=_,p=0,x=v;x;x=ls(x))p++;for(x=0,y=d;y;y=ls(y))x++;for(;0<p-x;)v=ls(v),p--;for(;0<x-p;)d=ls(d),x--;for(;p--;){if(v===d||d!==null&&v===d.alternate)break t;v=ls(v),d=ls(d)}v=null}else v=null;m!==null&&sm(h,u,m,v,!1),_!==null&&g!==null&&sm(h,g,_,v,!0)}}e:{if(u=c?Ns(c):window,m=u.nodeName&&u.nodeName.toLowerCase(),m==="select"||m==="input"&&u.type==="file")var T=ky;else if(Zp(u))if(e_)T=Hy;else{T=Vy;var A=zy}else(m=u.nodeName)&&m.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(T=Gy);if(T&&(T=T(t,c))){Q0(h,T,n,f);break e}A&&A(t,u,c),t==="focusout"&&(A=u._wrapperState)&&A.controlled&&u.type==="number"&&xd(u,"number",u.value)}switch(A=c?Ns(c):window,t){case"focusin":(Zp(A)||A.contentEditable==="true")&&(Ls=A,Ld=c,qo=null);break;case"focusout":qo=Ld=Ls=null;break;case"mousedown":Id=!0;break;case"contextmenu":case"mouseup":case"dragend":Id=!1,nm(h,n,f);break;case"selectionchange":if(Xy)break;case"keydown":case"keyup":nm(h,n,f)}var C;if(yh)e:{switch(t){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else Ps?Z0(t,n)&&(S="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(K0&&n.locale!=="ko"&&(Ps||S!=="onCompositionStart"?S==="onCompositionEnd"&&Ps&&(C=$0()):(ur=f,_h="value"in ur?ur.value:ur.textContent,Ps=!0)),A=ic(c,S),0<A.length&&(S=new Yp(S,t,null,n,f),h.push({event:S,listeners:A}),C?S.data=C:(C=J0(n),C!==null&&(S.data=C)))),(C=Dy?Uy(t,n):Fy(t,n))&&(c=ic(c,"onBeforeInput"),0<c.length&&(f=new Yp("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=C))}u_(h,e)})}function ua(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ic(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ia(t,n),s!=null&&i.unshift(ua(t,s,r)),s=ia(t,e),s!=null&&i.push(ua(t,s,r))),t=t.return}return i}function ls(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function sm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ia(n,s),l!=null&&o.unshift(ua(n,l,a))):r||(l=ia(n,s),l!=null&&o.push(ua(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Ky=/\r\n?/g,Zy=/\u0000|\uFFFD/g;function om(t){return(typeof t=="string"?t:""+t).replace(Ky,`
`).replace(Zy,"")}function Ha(t,e,n){if(e=om(e),om(t)!==e&&n)throw Error(ne(425))}function rc(){}var Nd=null,Dd=null;function Ud(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Fd=typeof setTimeout=="function"?setTimeout:void 0,Jy=typeof clearTimeout=="function"?clearTimeout:void 0,am=typeof Promise=="function"?Promise:void 0,Qy=typeof queueMicrotask=="function"?queueMicrotask:typeof am<"u"?function(t){return am.resolve(null).then(t).catch(eS)}:Fd;function eS(t){setTimeout(function(){throw t})}function gu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),oa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);oa(e)}function gr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function lm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var co=Math.random().toString(36).slice(2),hi="__reactFiber$"+co,da="__reactProps$"+co,Wi="__reactContainer$"+co,Od="__reactEvents$"+co,tS="__reactListeners$"+co,nS="__reactHandles$"+co;function Gr(t){var e=t[hi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Wi]||n[hi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=lm(t);t!==null;){if(n=t[hi])return n;t=lm(t)}return e}t=n,n=t.parentNode}return null}function Ca(t){return t=t[hi]||t[Wi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ns(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function Lc(t){return t[da]||null}var Bd=[],Ds=-1;function Ar(t){return{current:t}}function xt(t){0>Ds||(t.current=Bd[Ds],Bd[Ds]=null,Ds--)}function gt(t,e){Ds++,Bd[Ds]=t.current,t.current=e}var Er={},cn=Ar(Er),Sn=Ar(!1),$r=Er;function $s(t,e){var n=t.type.contextTypes;if(!n)return Er;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Mn(t){return t=t.childContextTypes,t!=null}function sc(){xt(Sn),xt(cn)}function cm(t,e,n){if(cn.current!==Er)throw Error(ne(168));gt(cn,e),gt(Sn,n)}function f_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,zx(t)||"Unknown",r));return wt({},n,i)}function oc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Er,$r=cn.current,gt(cn,t),gt(Sn,Sn.current),!0}function um(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=f_(t,e,$r),i.__reactInternalMemoizedMergedChildContext=t,xt(Sn),xt(cn),gt(cn,t)):xt(Sn),gt(Sn,n)}var Fi=null,Ic=!1,_u=!1;function h_(t){Fi===null?Fi=[t]:Fi.push(t)}function iS(t){Ic=!0,h_(t)}function Cr(){if(!_u&&Fi!==null){_u=!0;var t=0,e=ot;try{var n=Fi;for(ot=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Fi=null,Ic=!1}catch(r){throw Fi!==null&&(Fi=Fi.slice(t+1)),B0(hh,Cr),r}finally{ot=e,_u=!1}}return null}var Us=[],Fs=0,ac=null,lc=0,zn=[],Vn=0,Kr=null,Oi=1,Bi="";function Or(t,e){Us[Fs++]=lc,Us[Fs++]=ac,ac=t,lc=e}function p_(t,e,n){zn[Vn++]=Oi,zn[Vn++]=Bi,zn[Vn++]=Kr,Kr=t;var i=Oi;t=Bi;var r=32-ri(i)-1;i&=~(1<<r),n+=1;var s=32-ri(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Oi=1<<32-ri(e)+r|n<<r|i,Bi=s+t}else Oi=1<<s|n<<r|i,Bi=t}function Mh(t){t.return!==null&&(Or(t,1),p_(t,1,0))}function Eh(t){for(;t===ac;)ac=Us[--Fs],Us[Fs]=null,lc=Us[--Fs],Us[Fs]=null;for(;t===Kr;)Kr=zn[--Vn],zn[Vn]=null,Bi=zn[--Vn],zn[Vn]=null,Oi=zn[--Vn],zn[Vn]=null}var Nn=null,In=null,St=!1,ei=null;function m_(t,e){var n=Gn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function dm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Nn=t,In=gr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Nn=t,In=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Kr!==null?{id:Oi,overflow:Bi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Gn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Nn=t,In=null,!0):!1;default:return!1}}function kd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function zd(t){if(St){var e=In;if(e){var n=e;if(!dm(t,e)){if(kd(t))throw Error(ne(418));e=gr(n.nextSibling);var i=Nn;e&&dm(t,e)?m_(i,n):(t.flags=t.flags&-4097|2,St=!1,Nn=t)}}else{if(kd(t))throw Error(ne(418));t.flags=t.flags&-4097|2,St=!1,Nn=t}}}function fm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nn=t}function Wa(t){if(t!==Nn)return!1;if(!St)return fm(t),St=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ud(t.type,t.memoizedProps)),e&&(e=In)){if(kd(t))throw g_(),Error(ne(418));for(;e;)m_(t,e),e=gr(e.nextSibling)}if(fm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){In=gr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}In=null}}else In=Nn?gr(t.stateNode.nextSibling):null;return!0}function g_(){for(var t=In;t;)t=gr(t.nextSibling)}function Ks(){In=Nn=null,St=!1}function Th(t){ei===null?ei=[t]:ei.push(t)}var rS=$i.ReactCurrentBatchConfig;function xo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function ja(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function hm(t){var e=t._init;return e(t._payload)}function __(t){function e(d,p){if(t){var x=d.deletions;x===null?(d.deletions=[p],d.flags|=16):x.push(p)}}function n(d,p){if(!t)return null;for(;p!==null;)e(d,p),p=p.sibling;return null}function i(d,p){for(d=new Map;p!==null;)p.key!==null?d.set(p.key,p):d.set(p.index,p),p=p.sibling;return d}function r(d,p){return d=yr(d,p),d.index=0,d.sibling=null,d}function s(d,p,x){return d.index=x,t?(x=d.alternate,x!==null?(x=x.index,x<p?(d.flags|=2,p):x):(d.flags|=2,p)):(d.flags|=1048576,p)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,p,x,y){return p===null||p.tag!==6?(p=Tu(x,d.mode,y),p.return=d,p):(p=r(p,x),p.return=d,p)}function l(d,p,x,y){var T=x.type;return T===bs?f(d,p,x.props.children,y,x.key):p!==null&&(p.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===sr&&hm(T)===p.type)?(y=r(p,x.props),y.ref=xo(d,p,x),y.return=d,y):(y=Vl(x.type,x.key,x.props,null,d.mode,y),y.ref=xo(d,p,x),y.return=d,y)}function c(d,p,x,y){return p===null||p.tag!==4||p.stateNode.containerInfo!==x.containerInfo||p.stateNode.implementation!==x.implementation?(p=wu(x,d.mode,y),p.return=d,p):(p=r(p,x.children||[]),p.return=d,p)}function f(d,p,x,y,T){return p===null||p.tag!==7?(p=qr(x,d.mode,y,T),p.return=d,p):(p=r(p,x),p.return=d,p)}function h(d,p,x){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Tu(""+p,d.mode,x),p.return=d,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Da:return x=Vl(p.type,p.key,p.props,null,d.mode,x),x.ref=xo(d,null,p),x.return=d,x;case Rs:return p=wu(p,d.mode,x),p.return=d,p;case sr:var y=p._init;return h(d,y(p._payload),x)}if(Oo(p)||po(p))return p=qr(p,d.mode,x,null),p.return=d,p;ja(d,p)}return null}function u(d,p,x,y){var T=p!==null?p.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return T!==null?null:a(d,p,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Da:return x.key===T?l(d,p,x,y):null;case Rs:return x.key===T?c(d,p,x,y):null;case sr:return T=x._init,u(d,p,T(x._payload),y)}if(Oo(x)||po(x))return T!==null?null:f(d,p,x,y,null);ja(d,x)}return null}function m(d,p,x,y,T){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(x)||null,a(p,d,""+y,T);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Da:return d=d.get(y.key===null?x:y.key)||null,l(p,d,y,T);case Rs:return d=d.get(y.key===null?x:y.key)||null,c(p,d,y,T);case sr:var A=y._init;return m(d,p,x,A(y._payload),T)}if(Oo(y)||po(y))return d=d.get(x)||null,f(p,d,y,T,null);ja(p,y)}return null}function _(d,p,x,y){for(var T=null,A=null,C=p,S=p=0,E=null;C!==null&&S<x.length;S++){C.index>S?(E=C,C=null):E=C.sibling;var U=u(d,C,x[S],y);if(U===null){C===null&&(C=E);break}t&&C&&U.alternate===null&&e(d,C),p=s(U,p,S),A===null?T=U:A.sibling=U,A=U,C=E}if(S===x.length)return n(d,C),St&&Or(d,S),T;if(C===null){for(;S<x.length;S++)C=h(d,x[S],y),C!==null&&(p=s(C,p,S),A===null?T=C:A.sibling=C,A=C);return St&&Or(d,S),T}for(C=i(d,C);S<x.length;S++)E=m(C,d,S,x[S],y),E!==null&&(t&&E.alternate!==null&&C.delete(E.key===null?S:E.key),p=s(E,p,S),A===null?T=E:A.sibling=E,A=E);return t&&C.forEach(function(I){return e(d,I)}),St&&Or(d,S),T}function v(d,p,x,y){var T=po(x);if(typeof T!="function")throw Error(ne(150));if(x=T.call(x),x==null)throw Error(ne(151));for(var A=T=null,C=p,S=p=0,E=null,U=x.next();C!==null&&!U.done;S++,U=x.next()){C.index>S?(E=C,C=null):E=C.sibling;var I=u(d,C,U.value,y);if(I===null){C===null&&(C=E);break}t&&C&&I.alternate===null&&e(d,C),p=s(I,p,S),A===null?T=I:A.sibling=I,A=I,C=E}if(U.done)return n(d,C),St&&Or(d,S),T;if(C===null){for(;!U.done;S++,U=x.next())U=h(d,U.value,y),U!==null&&(p=s(U,p,S),A===null?T=U:A.sibling=U,A=U);return St&&Or(d,S),T}for(C=i(d,C);!U.done;S++,U=x.next())U=m(C,d,S,U.value,y),U!==null&&(t&&U.alternate!==null&&C.delete(U.key===null?S:U.key),p=s(U,p,S),A===null?T=U:A.sibling=U,A=U);return t&&C.forEach(function(b){return e(d,b)}),St&&Or(d,S),T}function g(d,p,x,y){if(typeof x=="object"&&x!==null&&x.type===bs&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Da:e:{for(var T=x.key,A=p;A!==null;){if(A.key===T){if(T=x.type,T===bs){if(A.tag===7){n(d,A.sibling),p=r(A,x.props.children),p.return=d,d=p;break e}}else if(A.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===sr&&hm(T)===A.type){n(d,A.sibling),p=r(A,x.props),p.ref=xo(d,A,x),p.return=d,d=p;break e}n(d,A);break}else e(d,A);A=A.sibling}x.type===bs?(p=qr(x.props.children,d.mode,y,x.key),p.return=d,d=p):(y=Vl(x.type,x.key,x.props,null,d.mode,y),y.ref=xo(d,p,x),y.return=d,d=y)}return o(d);case Rs:e:{for(A=x.key;p!==null;){if(p.key===A)if(p.tag===4&&p.stateNode.containerInfo===x.containerInfo&&p.stateNode.implementation===x.implementation){n(d,p.sibling),p=r(p,x.children||[]),p.return=d,d=p;break e}else{n(d,p);break}else e(d,p);p=p.sibling}p=wu(x,d.mode,y),p.return=d,d=p}return o(d);case sr:return A=x._init,g(d,p,A(x._payload),y)}if(Oo(x))return _(d,p,x,y);if(po(x))return v(d,p,x,y);ja(d,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,p!==null&&p.tag===6?(n(d,p.sibling),p=r(p,x),p.return=d,d=p):(n(d,p),p=Tu(x,d.mode,y),p.return=d,d=p),o(d)):n(d,p)}return g}var Zs=__(!0),v_=__(!1),cc=Ar(null),uc=null,Os=null,wh=null;function Ah(){wh=Os=uc=null}function Ch(t){var e=cc.current;xt(cc),t._currentValue=e}function Vd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ws(t,e){uc=t,wh=Os=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(yn=!0),t.firstContext=null)}function Wn(t){var e=t._currentValue;if(wh!==t)if(t={context:t,memoizedValue:e,next:null},Os===null){if(uc===null)throw Error(ne(308));Os=t,uc.dependencies={lanes:0,firstContext:t}}else Os=Os.next=t;return e}var Hr=null;function Rh(t){Hr===null?Hr=[t]:Hr.push(t)}function x_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Rh(e)):(n.next=r.next,r.next=n),e.interleaved=n,ji(t,i)}function ji(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var or=!1;function bh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function y_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function zi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function _r(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ji(t,n)}return r=i.interleaved,r===null?(e.next=e,Rh(i)):(e.next=r.next,r.next=e),i.interleaved=e,ji(t,n)}function Ul(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ph(t,n)}}function pm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function dc(t,e,n,i){var r=t.updateQueue;or=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,f=c=l=null,a=s;do{var u=a.lane,m=a.eventTime;if((i&u)===u){f!==null&&(f=f.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,v=a;switch(u=e,m=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){h=_.call(m,h,u);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,u=typeof _=="function"?_.call(m,h,u):_,u==null)break e;h=wt({},h,u);break e;case 2:or=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,u=r.effects,u===null?r.effects=[a]:u.push(a))}else m={eventTime:m,lane:u,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=m,l=h):f=f.next=m,o|=u;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;u=a,a=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Jr|=o,t.lanes=o,t.memoizedState=h}}function mm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var Ra={},xi=Ar(Ra),fa=Ar(Ra),ha=Ar(Ra);function Wr(t){if(t===Ra)throw Error(ne(174));return t}function Ph(t,e){switch(gt(ha,e),gt(fa,t),gt(xi,Ra),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Sd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Sd(e,t)}xt(xi),gt(xi,e)}function Js(){xt(xi),xt(fa),xt(ha)}function S_(t){Wr(ha.current);var e=Wr(xi.current),n=Sd(e,t.type);e!==n&&(gt(fa,t),gt(xi,n))}function Lh(t){fa.current===t&&(xt(xi),xt(fa))}var Et=Ar(0);function fc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var vu=[];function Ih(){for(var t=0;t<vu.length;t++)vu[t]._workInProgressVersionPrimary=null;vu.length=0}var Fl=$i.ReactCurrentDispatcher,xu=$i.ReactCurrentBatchConfig,Zr=0,Tt=null,Ot=null,Wt=null,hc=!1,$o=!1,pa=0,sS=0;function en(){throw Error(ne(321))}function Nh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!oi(t[n],e[n]))return!1;return!0}function Dh(t,e,n,i,r,s){if(Zr=s,Tt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Fl.current=t===null||t.memoizedState===null?cS:uS,t=n(i,r),$o){s=0;do{if($o=!1,pa=0,25<=s)throw Error(ne(301));s+=1,Wt=Ot=null,e.updateQueue=null,Fl.current=dS,t=n(i,r)}while($o)}if(Fl.current=pc,e=Ot!==null&&Ot.next!==null,Zr=0,Wt=Ot=Tt=null,hc=!1,e)throw Error(ne(300));return t}function Uh(){var t=pa!==0;return pa=0,t}function di(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wt===null?Tt.memoizedState=Wt=t:Wt=Wt.next=t,Wt}function jn(){if(Ot===null){var t=Tt.alternate;t=t!==null?t.memoizedState:null}else t=Ot.next;var e=Wt===null?Tt.memoizedState:Wt.next;if(e!==null)Wt=e,Ot=t;else{if(t===null)throw Error(ne(310));Ot=t,t={memoizedState:Ot.memoizedState,baseState:Ot.baseState,baseQueue:Ot.baseQueue,queue:Ot.queue,next:null},Wt===null?Tt.memoizedState=Wt=t:Wt=Wt.next=t}return Wt}function ma(t,e){return typeof e=="function"?e(t):e}function yu(t){var e=jn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=Ot,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((Zr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,Tt.lanes|=f,Jr|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,oi(i,e.memoizedState)||(yn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Tt.lanes|=s,Jr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Su(t){var e=jn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);oi(s,e.memoizedState)||(yn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function M_(){}function E_(t,e){var n=Tt,i=jn(),r=e(),s=!oi(i.memoizedState,r);if(s&&(i.memoizedState=r,yn=!0),i=i.queue,Fh(A_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Wt!==null&&Wt.memoizedState.tag&1){if(n.flags|=2048,ga(9,w_.bind(null,n,i,r,e),void 0,null),jt===null)throw Error(ne(349));Zr&30||T_(n,e,r)}return r}function T_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Tt.updateQueue,e===null?(e={lastEffect:null,stores:null},Tt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function w_(t,e,n,i){e.value=n,e.getSnapshot=i,C_(e)&&R_(t)}function A_(t,e,n){return n(function(){C_(e)&&R_(t)})}function C_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!oi(t,n)}catch{return!0}}function R_(t){var e=ji(t,1);e!==null&&si(e,t,1,-1)}function gm(t){var e=di();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:t},e.queue=t,t=t.dispatch=lS.bind(null,Tt,t),[e.memoizedState,t]}function ga(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Tt.updateQueue,e===null?(e={lastEffect:null,stores:null},Tt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function b_(){return jn().memoizedState}function Ol(t,e,n,i){var r=di();Tt.flags|=t,r.memoizedState=ga(1|e,n,void 0,i===void 0?null:i)}function Nc(t,e,n,i){var r=jn();i=i===void 0?null:i;var s=void 0;if(Ot!==null){var o=Ot.memoizedState;if(s=o.destroy,i!==null&&Nh(i,o.deps)){r.memoizedState=ga(e,n,s,i);return}}Tt.flags|=t,r.memoizedState=ga(1|e,n,s,i)}function _m(t,e){return Ol(8390656,8,t,e)}function Fh(t,e){return Nc(2048,8,t,e)}function P_(t,e){return Nc(4,2,t,e)}function L_(t,e){return Nc(4,4,t,e)}function I_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function N_(t,e,n){return n=n!=null?n.concat([t]):null,Nc(4,4,I_.bind(null,e,t),n)}function Oh(){}function D_(t,e){var n=jn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Nh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function U_(t,e){var n=jn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Nh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function F_(t,e,n){return Zr&21?(oi(n,e)||(n=V0(),Tt.lanes|=n,Jr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,yn=!0),t.memoizedState=n)}function oS(t,e){var n=ot;ot=n!==0&&4>n?n:4,t(!0);var i=xu.transition;xu.transition={};try{t(!1),e()}finally{ot=n,xu.transition=i}}function O_(){return jn().memoizedState}function aS(t,e,n){var i=xr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},B_(t))k_(e,n);else if(n=x_(t,e,n,i),n!==null){var r=mn();si(n,t,i,r),z_(n,e,i)}}function lS(t,e,n){var i=xr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(B_(t))k_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,oi(a,o)){var l=e.interleaved;l===null?(r.next=r,Rh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=x_(t,e,r,i),n!==null&&(r=mn(),si(n,t,i,r),z_(n,e,i))}}function B_(t){var e=t.alternate;return t===Tt||e!==null&&e===Tt}function k_(t,e){$o=hc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function z_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ph(t,n)}}var pc={readContext:Wn,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useInsertionEffect:en,useLayoutEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useMutableSource:en,useSyncExternalStore:en,useId:en,unstable_isNewReconciler:!1},cS={readContext:Wn,useCallback:function(t,e){return di().memoizedState=[t,e===void 0?null:e],t},useContext:Wn,useEffect:_m,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ol(4194308,4,I_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ol(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ol(4,2,t,e)},useMemo:function(t,e){var n=di();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=di();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=aS.bind(null,Tt,t),[i.memoizedState,t]},useRef:function(t){var e=di();return t={current:t},e.memoizedState=t},useState:gm,useDebugValue:Oh,useDeferredValue:function(t){return di().memoizedState=t},useTransition:function(){var t=gm(!1),e=t[0];return t=oS.bind(null,t[1]),di().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Tt,r=di();if(St){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),jt===null)throw Error(ne(349));Zr&30||T_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,_m(A_.bind(null,i,s,t),[t]),i.flags|=2048,ga(9,w_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=di(),e=jt.identifierPrefix;if(St){var n=Bi,i=Oi;n=(i&~(1<<32-ri(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=pa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=sS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},uS={readContext:Wn,useCallback:D_,useContext:Wn,useEffect:Fh,useImperativeHandle:N_,useInsertionEffect:P_,useLayoutEffect:L_,useMemo:U_,useReducer:yu,useRef:b_,useState:function(){return yu(ma)},useDebugValue:Oh,useDeferredValue:function(t){var e=jn();return F_(e,Ot.memoizedState,t)},useTransition:function(){var t=yu(ma)[0],e=jn().memoizedState;return[t,e]},useMutableSource:M_,useSyncExternalStore:E_,useId:O_,unstable_isNewReconciler:!1},dS={readContext:Wn,useCallback:D_,useContext:Wn,useEffect:Fh,useImperativeHandle:N_,useInsertionEffect:P_,useLayoutEffect:L_,useMemo:U_,useReducer:Su,useRef:b_,useState:function(){return Su(ma)},useDebugValue:Oh,useDeferredValue:function(t){var e=jn();return Ot===null?e.memoizedState=t:F_(e,Ot.memoizedState,t)},useTransition:function(){var t=Su(ma)[0],e=jn().memoizedState;return[t,e]},useMutableSource:M_,useSyncExternalStore:E_,useId:O_,unstable_isNewReconciler:!1};function Jn(t,e){if(t&&t.defaultProps){e=wt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Gd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:wt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Dc={isMounted:function(t){return(t=t._reactInternals)?ns(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=mn(),r=xr(t),s=zi(i,r);s.payload=e,n!=null&&(s.callback=n),e=_r(t,s,r),e!==null&&(si(e,t,r,i),Ul(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=mn(),r=xr(t),s=zi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=_r(t,s,r),e!==null&&(si(e,t,r,i),Ul(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=mn(),i=xr(t),r=zi(n,i);r.tag=2,e!=null&&(r.callback=e),e=_r(t,r,i),e!==null&&(si(e,t,i,n),Ul(e,t,i))}};function vm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!la(n,i)||!la(r,s):!0}function V_(t,e,n){var i=!1,r=Er,s=e.contextType;return typeof s=="object"&&s!==null?s=Wn(s):(r=Mn(e)?$r:cn.current,i=e.contextTypes,s=(i=i!=null)?$s(t,r):Er),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Dc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function xm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Dc.enqueueReplaceState(e,e.state,null)}function Hd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},bh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Wn(s):(s=Mn(e)?$r:cn.current,r.context=$s(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Gd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Dc.enqueueReplaceState(r,r.state,null),dc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Qs(t,e){try{var n="",i=e;do n+=kx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Mu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Wd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var fS=typeof WeakMap=="function"?WeakMap:Map;function G_(t,e,n){n=zi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){gc||(gc=!0,ef=i),Wd(t,e)},n}function H_(t,e,n){n=zi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Wd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Wd(t,e),typeof i!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ym(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new fS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=AS.bind(null,t,e,n),e.then(t,t))}function Sm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Mm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=zi(-1,1),e.tag=2,_r(n,e,1))),n.lanes|=1),t)}var hS=$i.ReactCurrentOwner,yn=!1;function hn(t,e,n,i){e.child=t===null?v_(e,null,n,i):Zs(e,t.child,n,i)}function Em(t,e,n,i,r){n=n.render;var s=e.ref;return Ws(e,r),i=Dh(t,e,n,i,s,r),n=Uh(),t!==null&&!yn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Xi(t,e,r)):(St&&n&&Mh(e),e.flags|=1,hn(t,e,i,r),e.child)}function Tm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!jh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,W_(t,e,s,i,r)):(t=Vl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:la,n(o,i)&&t.ref===e.ref)return Xi(t,e,r)}return e.flags|=1,t=yr(s,i),t.ref=e.ref,t.return=e,e.child=t}function W_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(la(s,i)&&t.ref===e.ref)if(yn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(yn=!0);else return e.lanes=t.lanes,Xi(t,e,r)}return jd(t,e,n,i,r)}function j_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},gt(ks,Rn),Rn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,gt(ks,Rn),Rn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,gt(ks,Rn),Rn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,gt(ks,Rn),Rn|=i;return hn(t,e,r,n),e.child}function X_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function jd(t,e,n,i,r){var s=Mn(n)?$r:cn.current;return s=$s(e,s),Ws(e,r),n=Dh(t,e,n,i,s,r),i=Uh(),t!==null&&!yn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Xi(t,e,r)):(St&&i&&Mh(e),e.flags|=1,hn(t,e,n,r),e.child)}function wm(t,e,n,i,r){if(Mn(n)){var s=!0;oc(e)}else s=!1;if(Ws(e,r),e.stateNode===null)Bl(t,e),V_(e,n,i),Hd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Wn(c):(c=Mn(n)?$r:cn.current,c=$s(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&xm(e,o,i,c),or=!1;var u=e.memoizedState;o.state=u,dc(e,i,o,r),l=e.memoizedState,a!==i||u!==l||Sn.current||or?(typeof f=="function"&&(Gd(e,n,f,i),l=e.memoizedState),(a=or||vm(e,n,a,i,u,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,y_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Jn(e.type,a),o.props=c,h=e.pendingProps,u=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Wn(l):(l=Mn(n)?$r:cn.current,l=$s(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||u!==l)&&xm(e,o,i,l),or=!1,u=e.memoizedState,o.state=u,dc(e,i,o,r);var _=e.memoizedState;a!==h||u!==_||Sn.current||or?(typeof m=="function"&&(Gd(e,n,m,i),_=e.memoizedState),(c=or||vm(e,n,c,i,u,_,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return Xd(t,e,n,i,s,r)}function Xd(t,e,n,i,r,s){X_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&um(e,n,!1),Xi(t,e,s);i=e.stateNode,hS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Zs(e,t.child,null,s),e.child=Zs(e,null,a,s)):hn(t,e,a,s),e.memoizedState=i.state,r&&um(e,n,!0),e.child}function Y_(t){var e=t.stateNode;e.pendingContext?cm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&cm(t,e.context,!1),Ph(t,e.containerInfo)}function Am(t,e,n,i,r){return Ks(),Th(r),e.flags|=256,hn(t,e,n,i),e.child}var Yd={dehydrated:null,treeContext:null,retryLane:0};function qd(t){return{baseLanes:t,cachePool:null,transitions:null}}function q_(t,e,n){var i=e.pendingProps,r=Et.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),gt(Et,r&1),t===null)return zd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Oc(o,i,0,null),t=qr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=qd(n),e.memoizedState=Yd,t):Bh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return pS(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=yr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=yr(a,s):(s=qr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?qd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Yd,i}return s=t.child,t=s.sibling,i=yr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Bh(t,e){return e=Oc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Xa(t,e,n,i){return i!==null&&Th(i),Zs(e,t.child,null,n),t=Bh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function pS(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Mu(Error(ne(422))),Xa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Oc({mode:"visible",children:i.children},r,0,null),s=qr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Zs(e,t.child,null,o),e.child.memoizedState=qd(o),e.memoizedState=Yd,s);if(!(e.mode&1))return Xa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=Mu(s,i,void 0),Xa(t,e,o,i)}if(a=(o&t.childLanes)!==0,yn||a){if(i=jt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ji(t,r),si(i,t,r,-1))}return Wh(),i=Mu(Error(ne(421))),Xa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=CS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,In=gr(r.nextSibling),Nn=e,St=!0,ei=null,t!==null&&(zn[Vn++]=Oi,zn[Vn++]=Bi,zn[Vn++]=Kr,Oi=t.id,Bi=t.overflow,Kr=e),e=Bh(e,i.children),e.flags|=4096,e)}function Cm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Vd(t.return,e,n)}function Eu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function $_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(hn(t,e,i.children,n),i=Et.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Cm(t,n,e);else if(t.tag===19)Cm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(gt(Et,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&fc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Eu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&fc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Eu(e,!0,n,null,s);break;case"together":Eu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Bl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Xi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Jr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=yr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=yr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function mS(t,e,n){switch(e.tag){case 3:Y_(e),Ks();break;case 5:S_(e);break;case 1:Mn(e.type)&&oc(e);break;case 4:Ph(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;gt(cc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(gt(Et,Et.current&1),e.flags|=128,null):n&e.child.childLanes?q_(t,e,n):(gt(Et,Et.current&1),t=Xi(t,e,n),t!==null?t.sibling:null);gt(Et,Et.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return $_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),gt(Et,Et.current),i)break;return null;case 22:case 23:return e.lanes=0,j_(t,e,n)}return Xi(t,e,n)}var K_,$d,Z_,J_;K_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$d=function(){};Z_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Wr(xi.current);var s=null;switch(n){case"input":r=_d(t,r),i=_d(t,i),s=[];break;case"select":r=wt({},r,{value:void 0}),i=wt({},i,{value:void 0}),s=[];break;case"textarea":r=yd(t,r),i=yd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=rc)}Md(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ta.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ta.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&vt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};J_=function(t,e,n,i){n!==i&&(e.flags|=4)};function yo(t,e){if(!St)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function tn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function gS(t,e,n){var i=e.pendingProps;switch(Eh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(e),null;case 1:return Mn(e.type)&&sc(),tn(e),null;case 3:return i=e.stateNode,Js(),xt(Sn),xt(cn),Ih(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Wa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ei!==null&&(rf(ei),ei=null))),$d(t,e),tn(e),null;case 5:Lh(e);var r=Wr(ha.current);if(n=e.type,t!==null&&e.stateNode!=null)Z_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return tn(e),null}if(t=Wr(xi.current),Wa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[hi]=e,i[da]=s,t=(e.mode&1)!==0,n){case"dialog":vt("cancel",i),vt("close",i);break;case"iframe":case"object":case"embed":vt("load",i);break;case"video":case"audio":for(r=0;r<ko.length;r++)vt(ko[r],i);break;case"source":vt("error",i);break;case"img":case"image":case"link":vt("error",i),vt("load",i);break;case"details":vt("toggle",i);break;case"input":Fp(i,s),vt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},vt("invalid",i);break;case"textarea":Bp(i,s),vt("invalid",i)}Md(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ha(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ha(i.textContent,a,t),r=["children",""+a]):ta.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&vt("scroll",i)}switch(n){case"input":Ua(i),Op(i,s,!0);break;case"textarea":Ua(i),kp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=rc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=A0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[hi]=e,t[da]=i,K_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ed(n,i),n){case"dialog":vt("cancel",t),vt("close",t),r=i;break;case"iframe":case"object":case"embed":vt("load",t),r=i;break;case"video":case"audio":for(r=0;r<ko.length;r++)vt(ko[r],t);r=i;break;case"source":vt("error",t),r=i;break;case"img":case"image":case"link":vt("error",t),vt("load",t),r=i;break;case"details":vt("toggle",t),r=i;break;case"input":Fp(t,i),r=_d(t,i),vt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=wt({},i,{value:void 0}),vt("invalid",t);break;case"textarea":Bp(t,i),r=yd(t,i),vt("invalid",t);break;default:r=i}Md(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?b0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&C0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&na(t,l):typeof l=="number"&&na(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ta.hasOwnProperty(s)?l!=null&&s==="onScroll"&&vt("scroll",t):l!=null&&lh(t,s,l,o))}switch(n){case"input":Ua(t),Op(t,i,!1);break;case"textarea":Ua(t),kp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Mr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?zs(t,!!i.multiple,s,!1):i.defaultValue!=null&&zs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=rc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return tn(e),null;case 6:if(t&&e.stateNode!=null)J_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=Wr(ha.current),Wr(xi.current),Wa(e)){if(i=e.stateNode,n=e.memoizedProps,i[hi]=e,(s=i.nodeValue!==n)&&(t=Nn,t!==null))switch(t.tag){case 3:Ha(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ha(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[hi]=e,e.stateNode=i}return tn(e),null;case 13:if(xt(Et),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(St&&In!==null&&e.mode&1&&!(e.flags&128))g_(),Ks(),e.flags|=98560,s=!1;else if(s=Wa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[hi]=e}else Ks(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;tn(e),s=!1}else ei!==null&&(rf(ei),ei=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Et.current&1?Bt===0&&(Bt=3):Wh())),e.updateQueue!==null&&(e.flags|=4),tn(e),null);case 4:return Js(),$d(t,e),t===null&&ca(e.stateNode.containerInfo),tn(e),null;case 10:return Ch(e.type._context),tn(e),null;case 17:return Mn(e.type)&&sc(),tn(e),null;case 19:if(xt(Et),s=e.memoizedState,s===null)return tn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)yo(s,!1);else{if(Bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=fc(t),o!==null){for(e.flags|=128,yo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return gt(Et,Et.current&1|2),e.child}t=t.sibling}s.tail!==null&&Lt()>eo&&(e.flags|=128,i=!0,yo(s,!1),e.lanes=4194304)}else{if(!i)if(t=fc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),yo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!St)return tn(e),null}else 2*Lt()-s.renderingStartTime>eo&&n!==1073741824&&(e.flags|=128,i=!0,yo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Lt(),e.sibling=null,n=Et.current,gt(Et,i?n&1|2:n&1),e):(tn(e),null);case 22:case 23:return Hh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Rn&1073741824&&(tn(e),e.subtreeFlags&6&&(e.flags|=8192)):tn(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function _S(t,e){switch(Eh(e),e.tag){case 1:return Mn(e.type)&&sc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Js(),xt(Sn),xt(cn),Ih(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Lh(e),null;case 13:if(xt(Et),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));Ks()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return xt(Et),null;case 4:return Js(),null;case 10:return Ch(e.type._context),null;case 22:case 23:return Hh(),null;case 24:return null;default:return null}}var Ya=!1,sn=!1,vS=typeof WeakSet=="function"?WeakSet:Set,_e=null;function Bs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Ct(t,e,i)}else n.current=null}function Kd(t,e,n){try{n()}catch(i){Ct(t,e,i)}}var Rm=!1;function xS(t,e){if(Nd=tc,t=i_(),Sh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,h=t,u=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)u=h,h=m;for(;;){if(h===t)break t;if(u===n&&++c===r&&(a=o),u===s&&++f===i&&(l=o),(m=h.nextSibling)!==null)break;h=u,u=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Dd={focusedElem:t,selectionRange:n},tc=!1,_e=e;_e!==null;)if(e=_e,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,_e=t;else for(;_e!==null;){e=_e;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,g=_.memoizedState,d=e.stateNode,p=d.getSnapshotBeforeUpdate(e.elementType===e.type?v:Jn(e.type,v),g);d.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(y){Ct(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,_e=t;break}_e=e.return}return _=Rm,Rm=!1,_}function Ko(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Kd(e,n,s)}r=r.next}while(r!==i)}}function Uc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Zd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Q_(t){var e=t.alternate;e!==null&&(t.alternate=null,Q_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[hi],delete e[da],delete e[Od],delete e[tS],delete e[nS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ev(t){return t.tag===5||t.tag===3||t.tag===4}function bm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ev(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Jd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=rc));else if(i!==4&&(t=t.child,t!==null))for(Jd(t,e,n),t=t.sibling;t!==null;)Jd(t,e,n),t=t.sibling}function Qd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Qd(t,e,n),t=t.sibling;t!==null;)Qd(t,e,n),t=t.sibling}var qt=null,Qn=!1;function Ji(t,e,n){for(n=n.child;n!==null;)tv(t,e,n),n=n.sibling}function tv(t,e,n){if(vi&&typeof vi.onCommitFiberUnmount=="function")try{vi.onCommitFiberUnmount(Cc,n)}catch{}switch(n.tag){case 5:sn||Bs(n,e);case 6:var i=qt,r=Qn;qt=null,Ji(t,e,n),qt=i,Qn=r,qt!==null&&(Qn?(t=qt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):qt.removeChild(n.stateNode));break;case 18:qt!==null&&(Qn?(t=qt,n=n.stateNode,t.nodeType===8?gu(t.parentNode,n):t.nodeType===1&&gu(t,n),oa(t)):gu(qt,n.stateNode));break;case 4:i=qt,r=Qn,qt=n.stateNode.containerInfo,Qn=!0,Ji(t,e,n),qt=i,Qn=r;break;case 0:case 11:case 14:case 15:if(!sn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Kd(n,e,o),r=r.next}while(r!==i)}Ji(t,e,n);break;case 1:if(!sn&&(Bs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Ct(n,e,a)}Ji(t,e,n);break;case 21:Ji(t,e,n);break;case 22:n.mode&1?(sn=(i=sn)||n.memoizedState!==null,Ji(t,e,n),sn=i):Ji(t,e,n);break;default:Ji(t,e,n)}}function Pm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new vS),e.forEach(function(i){var r=RS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Yn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:qt=a.stateNode,Qn=!1;break e;case 3:qt=a.stateNode.containerInfo,Qn=!0;break e;case 4:qt=a.stateNode.containerInfo,Qn=!0;break e}a=a.return}if(qt===null)throw Error(ne(160));tv(s,o,r),qt=null,Qn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Ct(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)nv(e,t),e=e.sibling}function nv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Yn(e,t),li(t),i&4){try{Ko(3,t,t.return),Uc(3,t)}catch(v){Ct(t,t.return,v)}try{Ko(5,t,t.return)}catch(v){Ct(t,t.return,v)}}break;case 1:Yn(e,t),li(t),i&512&&n!==null&&Bs(n,n.return);break;case 5:if(Yn(e,t),li(t),i&512&&n!==null&&Bs(n,n.return),t.flags&32){var r=t.stateNode;try{na(r,"")}catch(v){Ct(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&T0(r,s),Ed(a,o);var c=Ed(a,s);for(o=0;o<l.length;o+=2){var f=l[o],h=l[o+1];f==="style"?b0(r,h):f==="dangerouslySetInnerHTML"?C0(r,h):f==="children"?na(r,h):lh(r,f,h,c)}switch(a){case"input":vd(r,s);break;case"textarea":w0(r,s);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?zs(r,!!s.multiple,m,!1):u!==!!s.multiple&&(s.defaultValue!=null?zs(r,!!s.multiple,s.defaultValue,!0):zs(r,!!s.multiple,s.multiple?[]:"",!1))}r[da]=s}catch(v){Ct(t,t.return,v)}}break;case 6:if(Yn(e,t),li(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){Ct(t,t.return,v)}}break;case 3:if(Yn(e,t),li(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{oa(e.containerInfo)}catch(v){Ct(t,t.return,v)}break;case 4:Yn(e,t),li(t);break;case 13:Yn(e,t),li(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Vh=Lt())),i&4&&Pm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(sn=(c=sn)||f,Yn(e,t),sn=c):Yn(e,t),li(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(_e=t,f=t.child;f!==null;){for(h=_e=f;_e!==null;){switch(u=_e,m=u.child,u.tag){case 0:case 11:case 14:case 15:Ko(4,u,u.return);break;case 1:Bs(u,u.return);var _=u.stateNode;if(typeof _.componentWillUnmount=="function"){i=u,n=u.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){Ct(i,n,v)}}break;case 5:Bs(u,u.return);break;case 22:if(u.memoizedState!==null){Im(h);continue}}m!==null?(m.return=u,_e=m):Im(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=R0("display",o))}catch(v){Ct(t,t.return,v)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(v){Ct(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Yn(e,t),li(t),i&4&&Pm(t);break;case 21:break;default:Yn(e,t),li(t)}}function li(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ev(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(na(r,""),i.flags&=-33);var s=bm(t);Qd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=bm(t);Jd(t,a,o);break;default:throw Error(ne(161))}}catch(l){Ct(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function yS(t,e,n){_e=t,iv(t)}function iv(t,e,n){for(var i=(t.mode&1)!==0;_e!==null;){var r=_e,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ya;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||sn;a=Ya;var c=sn;if(Ya=o,(sn=l)&&!c)for(_e=r;_e!==null;)o=_e,l=o.child,o.tag===22&&o.memoizedState!==null?Nm(r):l!==null?(l.return=o,_e=l):Nm(r);for(;s!==null;)_e=s,iv(s),s=s.sibling;_e=r,Ya=a,sn=c}Lm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,_e=s):Lm(t)}}function Lm(t){for(;_e!==null;){var e=_e;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:sn||Uc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!sn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Jn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&mm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}mm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&oa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}sn||e.flags&512&&Zd(e)}catch(u){Ct(e,e.return,u)}}if(e===t){_e=null;break}if(n=e.sibling,n!==null){n.return=e.return,_e=n;break}_e=e.return}}function Im(t){for(;_e!==null;){var e=_e;if(e===t){_e=null;break}var n=e.sibling;if(n!==null){n.return=e.return,_e=n;break}_e=e.return}}function Nm(t){for(;_e!==null;){var e=_e;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Uc(4,e)}catch(l){Ct(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ct(e,r,l)}}var s=e.return;try{Zd(e)}catch(l){Ct(e,s,l)}break;case 5:var o=e.return;try{Zd(e)}catch(l){Ct(e,o,l)}}}catch(l){Ct(e,e.return,l)}if(e===t){_e=null;break}var a=e.sibling;if(a!==null){a.return=e.return,_e=a;break}_e=e.return}}var SS=Math.ceil,mc=$i.ReactCurrentDispatcher,kh=$i.ReactCurrentOwner,Hn=$i.ReactCurrentBatchConfig,Je=0,jt=null,Ut=null,Kt=0,Rn=0,ks=Ar(0),Bt=0,_a=null,Jr=0,Fc=0,zh=0,Zo=null,xn=null,Vh=0,eo=1/0,Ui=null,gc=!1,ef=null,vr=null,qa=!1,dr=null,_c=0,Jo=0,tf=null,kl=-1,zl=0;function mn(){return Je&6?Lt():kl!==-1?kl:kl=Lt()}function xr(t){return t.mode&1?Je&2&&Kt!==0?Kt&-Kt:rS.transition!==null?(zl===0&&(zl=V0()),zl):(t=ot,t!==0||(t=window.event,t=t===void 0?16:q0(t.type)),t):1}function si(t,e,n,i){if(50<Jo)throw Jo=0,tf=null,Error(ne(185));wa(t,n,i),(!(Je&2)||t!==jt)&&(t===jt&&(!(Je&2)&&(Fc|=n),Bt===4&&lr(t,Kt)),En(t,i),n===1&&Je===0&&!(e.mode&1)&&(eo=Lt()+500,Ic&&Cr()))}function En(t,e){var n=t.callbackNode;ry(t,e);var i=ec(t,t===jt?Kt:0);if(i===0)n!==null&&Gp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Gp(n),e===1)t.tag===0?iS(Dm.bind(null,t)):h_(Dm.bind(null,t)),Qy(function(){!(Je&6)&&Cr()}),n=null;else{switch(G0(i)){case 1:n=hh;break;case 4:n=k0;break;case 16:n=Ql;break;case 536870912:n=z0;break;default:n=Ql}n=dv(n,rv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function rv(t,e){if(kl=-1,zl=0,Je&6)throw Error(ne(327));var n=t.callbackNode;if(js()&&t.callbackNode!==n)return null;var i=ec(t,t===jt?Kt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=vc(t,i);else{e=i;var r=Je;Je|=2;var s=ov();(jt!==t||Kt!==e)&&(Ui=null,eo=Lt()+500,Yr(t,e));do try{TS();break}catch(a){sv(t,a)}while(!0);Ah(),mc.current=s,Je=r,Ut!==null?e=0:(jt=null,Kt=0,e=Bt)}if(e!==0){if(e===2&&(r=Rd(t),r!==0&&(i=r,e=nf(t,r))),e===1)throw n=_a,Yr(t,0),lr(t,i),En(t,Lt()),n;if(e===6)lr(t,i);else{if(r=t.current.alternate,!(i&30)&&!MS(r)&&(e=vc(t,i),e===2&&(s=Rd(t),s!==0&&(i=s,e=nf(t,s))),e===1))throw n=_a,Yr(t,0),lr(t,i),En(t,Lt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:Br(t,xn,Ui);break;case 3:if(lr(t,i),(i&130023424)===i&&(e=Vh+500-Lt(),10<e)){if(ec(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){mn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Fd(Br.bind(null,t,xn,Ui),e);break}Br(t,xn,Ui);break;case 4:if(lr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ri(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Lt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*SS(i/1960))-i,10<i){t.timeoutHandle=Fd(Br.bind(null,t,xn,Ui),i);break}Br(t,xn,Ui);break;case 5:Br(t,xn,Ui);break;default:throw Error(ne(329))}}}return En(t,Lt()),t.callbackNode===n?rv.bind(null,t):null}function nf(t,e){var n=Zo;return t.current.memoizedState.isDehydrated&&(Yr(t,e).flags|=256),t=vc(t,e),t!==2&&(e=xn,xn=n,e!==null&&rf(e)),t}function rf(t){xn===null?xn=t:xn.push.apply(xn,t)}function MS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!oi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function lr(t,e){for(e&=~zh,e&=~Fc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ri(e),i=1<<n;t[n]=-1,e&=~i}}function Dm(t){if(Je&6)throw Error(ne(327));js();var e=ec(t,0);if(!(e&1))return En(t,Lt()),null;var n=vc(t,e);if(t.tag!==0&&n===2){var i=Rd(t);i!==0&&(e=i,n=nf(t,i))}if(n===1)throw n=_a,Yr(t,0),lr(t,e),En(t,Lt()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Br(t,xn,Ui),En(t,Lt()),null}function Gh(t,e){var n=Je;Je|=1;try{return t(e)}finally{Je=n,Je===0&&(eo=Lt()+500,Ic&&Cr())}}function Qr(t){dr!==null&&dr.tag===0&&!(Je&6)&&js();var e=Je;Je|=1;var n=Hn.transition,i=ot;try{if(Hn.transition=null,ot=1,t)return t()}finally{ot=i,Hn.transition=n,Je=e,!(Je&6)&&Cr()}}function Hh(){Rn=ks.current,xt(ks)}function Yr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Jy(n)),Ut!==null)for(n=Ut.return;n!==null;){var i=n;switch(Eh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&sc();break;case 3:Js(),xt(Sn),xt(cn),Ih();break;case 5:Lh(i);break;case 4:Js();break;case 13:xt(Et);break;case 19:xt(Et);break;case 10:Ch(i.type._context);break;case 22:case 23:Hh()}n=n.return}if(jt=t,Ut=t=yr(t.current,null),Kt=Rn=e,Bt=0,_a=null,zh=Fc=Jr=0,xn=Zo=null,Hr!==null){for(e=0;e<Hr.length;e++)if(n=Hr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Hr=null}return t}function sv(t,e){do{var n=Ut;try{if(Ah(),Fl.current=pc,hc){for(var i=Tt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}hc=!1}if(Zr=0,Wt=Ot=Tt=null,$o=!1,pa=0,kh.current=null,n===null||n.return===null){Bt=1,_a=e,Ut=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Kt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var u=f.alternate;u?(f.updateQueue=u.updateQueue,f.memoizedState=u.memoizedState,f.lanes=u.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=Sm(o);if(m!==null){m.flags&=-257,Mm(m,o,a,s,e),m.mode&1&&ym(s,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var v=new Set;v.add(l),e.updateQueue=v}else _.add(l);break e}else{if(!(e&1)){ym(s,c,e),Wh();break e}l=Error(ne(426))}}else if(St&&a.mode&1){var g=Sm(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Mm(g,o,a,s,e),Th(Qs(l,a));break e}}s=l=Qs(l,a),Bt!==4&&(Bt=2),Zo===null?Zo=[s]:Zo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=G_(s,l,e);pm(s,d);break e;case 1:a=l;var p=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(vr===null||!vr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=H_(s,a,e);pm(s,y);break e}}s=s.return}while(s!==null)}lv(n)}catch(T){e=T,Ut===n&&n!==null&&(Ut=n=n.return);continue}break}while(!0)}function ov(){var t=mc.current;return mc.current=pc,t===null?pc:t}function Wh(){(Bt===0||Bt===3||Bt===2)&&(Bt=4),jt===null||!(Jr&268435455)&&!(Fc&268435455)||lr(jt,Kt)}function vc(t,e){var n=Je;Je|=2;var i=ov();(jt!==t||Kt!==e)&&(Ui=null,Yr(t,e));do try{ES();break}catch(r){sv(t,r)}while(!0);if(Ah(),Je=n,mc.current=i,Ut!==null)throw Error(ne(261));return jt=null,Kt=0,Bt}function ES(){for(;Ut!==null;)av(Ut)}function TS(){for(;Ut!==null&&!$x();)av(Ut)}function av(t){var e=uv(t.alternate,t,Rn);t.memoizedProps=t.pendingProps,e===null?lv(t):Ut=e,kh.current=null}function lv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=_S(n,e),n!==null){n.flags&=32767,Ut=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Bt=6,Ut=null;return}}else if(n=gS(n,e,Rn),n!==null){Ut=n;return}if(e=e.sibling,e!==null){Ut=e;return}Ut=e=t}while(e!==null);Bt===0&&(Bt=5)}function Br(t,e,n){var i=ot,r=Hn.transition;try{Hn.transition=null,ot=1,wS(t,e,n,i)}finally{Hn.transition=r,ot=i}return null}function wS(t,e,n,i){do js();while(dr!==null);if(Je&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(sy(t,s),t===jt&&(Ut=jt=null,Kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||qa||(qa=!0,dv(Ql,function(){return js(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Hn.transition,Hn.transition=null;var o=ot;ot=1;var a=Je;Je|=4,kh.current=null,xS(t,n),nv(n,t),jy(Dd),tc=!!Nd,Dd=Nd=null,t.current=n,yS(n),Kx(),Je=a,ot=o,Hn.transition=s}else t.current=n;if(qa&&(qa=!1,dr=t,_c=r),s=t.pendingLanes,s===0&&(vr=null),Qx(n.stateNode),En(t,Lt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(gc)throw gc=!1,t=ef,ef=null,t;return _c&1&&t.tag!==0&&js(),s=t.pendingLanes,s&1?t===tf?Jo++:(Jo=0,tf=t):Jo=0,Cr(),null}function js(){if(dr!==null){var t=G0(_c),e=Hn.transition,n=ot;try{if(Hn.transition=null,ot=16>t?16:t,dr===null)var i=!1;else{if(t=dr,dr=null,_c=0,Je&6)throw Error(ne(331));var r=Je;for(Je|=4,_e=t.current;_e!==null;){var s=_e,o=s.child;if(_e.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(_e=c;_e!==null;){var f=_e;switch(f.tag){case 0:case 11:case 15:Ko(8,f,s)}var h=f.child;if(h!==null)h.return=f,_e=h;else for(;_e!==null;){f=_e;var u=f.sibling,m=f.return;if(Q_(f),f===c){_e=null;break}if(u!==null){u.return=m,_e=u;break}_e=m}}}var _=s.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var g=v.sibling;v.sibling=null,v=g}while(v!==null)}}_e=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,_e=o;else e:for(;_e!==null;){if(s=_e,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ko(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,_e=d;break e}_e=s.return}}var p=t.current;for(_e=p;_e!==null;){o=_e;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,_e=x;else e:for(o=p;_e!==null;){if(a=_e,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Uc(9,a)}}catch(T){Ct(a,a.return,T)}if(a===o){_e=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,_e=y;break e}_e=a.return}}if(Je=r,Cr(),vi&&typeof vi.onPostCommitFiberRoot=="function")try{vi.onPostCommitFiberRoot(Cc,t)}catch{}i=!0}return i}finally{ot=n,Hn.transition=e}}return!1}function Um(t,e,n){e=Qs(n,e),e=G_(t,e,1),t=_r(t,e,1),e=mn(),t!==null&&(wa(t,1,e),En(t,e))}function Ct(t,e,n){if(t.tag===3)Um(t,t,n);else for(;e!==null;){if(e.tag===3){Um(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(vr===null||!vr.has(i))){t=Qs(n,t),t=H_(e,t,1),e=_r(e,t,1),t=mn(),e!==null&&(wa(e,1,t),En(e,t));break}}e=e.return}}function AS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=mn(),t.pingedLanes|=t.suspendedLanes&n,jt===t&&(Kt&n)===n&&(Bt===4||Bt===3&&(Kt&130023424)===Kt&&500>Lt()-Vh?Yr(t,0):zh|=n),En(t,e)}function cv(t,e){e===0&&(t.mode&1?(e=Ba,Ba<<=1,!(Ba&130023424)&&(Ba=4194304)):e=1);var n=mn();t=ji(t,e),t!==null&&(wa(t,e,n),En(t,n))}function CS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),cv(t,n)}function RS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),cv(t,n)}var uv;uv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Sn.current)yn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return yn=!1,mS(t,e,n);yn=!!(t.flags&131072)}else yn=!1,St&&e.flags&1048576&&p_(e,lc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Bl(t,e),t=e.pendingProps;var r=$s(e,cn.current);Ws(e,n),r=Dh(null,e,i,t,r,n);var s=Uh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Mn(i)?(s=!0,oc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,bh(e),r.updater=Dc,e.stateNode=r,r._reactInternals=e,Hd(e,i,t,n),e=Xd(null,e,i,!0,s,n)):(e.tag=0,St&&s&&Mh(e),hn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Bl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=PS(i),t=Jn(i,t),r){case 0:e=jd(null,e,i,t,n);break e;case 1:e=wm(null,e,i,t,n);break e;case 11:e=Em(null,e,i,t,n);break e;case 14:e=Tm(null,e,i,Jn(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),jd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),wm(t,e,i,r,n);case 3:e:{if(Y_(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,y_(t,e),dc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Qs(Error(ne(423)),e),e=Am(t,e,i,n,r);break e}else if(i!==r){r=Qs(Error(ne(424)),e),e=Am(t,e,i,n,r);break e}else for(In=gr(e.stateNode.containerInfo.firstChild),Nn=e,St=!0,ei=null,n=v_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ks(),i===r){e=Xi(t,e,n);break e}hn(t,e,i,n)}e=e.child}return e;case 5:return S_(e),t===null&&zd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Ud(i,r)?o=null:s!==null&&Ud(i,s)&&(e.flags|=32),X_(t,e),hn(t,e,o,n),e.child;case 6:return t===null&&zd(e),null;case 13:return q_(t,e,n);case 4:return Ph(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Zs(e,null,i,n):hn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),Em(t,e,i,r,n);case 7:return hn(t,e,e.pendingProps,n),e.child;case 8:return hn(t,e,e.pendingProps.children,n),e.child;case 12:return hn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,gt(cc,i._currentValue),i._currentValue=o,s!==null)if(oi(s.value,o)){if(s.children===r.children&&!Sn.current){e=Xi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=zi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Vd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Vd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}hn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ws(e,n),r=Wn(r),i=i(r),e.flags|=1,hn(t,e,i,n),e.child;case 14:return i=e.type,r=Jn(i,e.pendingProps),r=Jn(i.type,r),Tm(t,e,i,r,n);case 15:return W_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),Bl(t,e),e.tag=1,Mn(i)?(t=!0,oc(e)):t=!1,Ws(e,n),V_(e,i,r),Hd(e,i,r,n),Xd(null,e,i,!0,t,n);case 19:return $_(t,e,n);case 22:return j_(t,e,n)}throw Error(ne(156,e.tag))};function dv(t,e){return B0(t,e)}function bS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(t,e,n,i){return new bS(t,e,n,i)}function jh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function PS(t){if(typeof t=="function")return jh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===uh)return 11;if(t===dh)return 14}return 2}function yr(t,e){var n=t.alternate;return n===null?(n=Gn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Vl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")jh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case bs:return qr(n.children,r,s,e);case ch:o=8,r|=8;break;case hd:return t=Gn(12,n,e,r|2),t.elementType=hd,t.lanes=s,t;case pd:return t=Gn(13,n,e,r),t.elementType=pd,t.lanes=s,t;case md:return t=Gn(19,n,e,r),t.elementType=md,t.lanes=s,t;case S0:return Oc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case x0:o=10;break e;case y0:o=9;break e;case uh:o=11;break e;case dh:o=14;break e;case sr:o=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=Gn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function qr(t,e,n,i){return t=Gn(7,t,i,e),t.lanes=n,t}function Oc(t,e,n,i){return t=Gn(22,t,i,e),t.elementType=S0,t.lanes=n,t.stateNode={isHidden:!1},t}function Tu(t,e,n){return t=Gn(6,t,null,e),t.lanes=n,t}function wu(t,e,n){return e=Gn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function LS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=su(0),this.expirationTimes=su(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=su(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Xh(t,e,n,i,r,s,o,a,l){return t=new LS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Gn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bh(s),t}function IS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function fv(t){if(!t)return Er;t=t._reactInternals;e:{if(ns(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(Mn(n))return f_(t,n,e)}return e}function hv(t,e,n,i,r,s,o,a,l){return t=Xh(n,i,!0,t,r,s,o,a,l),t.context=fv(null),n=t.current,i=mn(),r=xr(n),s=zi(i,r),s.callback=e??null,_r(n,s,r),t.current.lanes=r,wa(t,r,i),En(t,i),t}function Bc(t,e,n,i){var r=e.current,s=mn(),o=xr(r);return n=fv(n),e.context===null?e.context=n:e.pendingContext=n,e=zi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=_r(r,e,o),t!==null&&(si(t,r,o,s),Ul(t,r,o)),o}function xc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Fm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Yh(t,e){Fm(t,e),(t=t.alternate)&&Fm(t,e)}function NS(){return null}var pv=typeof reportError=="function"?reportError:function(t){console.error(t)};function qh(t){this._internalRoot=t}kc.prototype.render=qh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));Bc(t,e,null,null)};kc.prototype.unmount=qh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Qr(function(){Bc(null,t,null,null)}),e[Wi]=null}};function kc(t){this._internalRoot=t}kc.prototype.unstable_scheduleHydration=function(t){if(t){var e=j0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ar.length&&e!==0&&e<ar[n].priority;n++);ar.splice(n,0,t),n===0&&Y0(t)}};function $h(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function zc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Om(){}function DS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=xc(o);s.call(c)}}var o=hv(e,i,t,0,null,!1,!1,"",Om);return t._reactRootContainer=o,t[Wi]=o.current,ca(t.nodeType===8?t.parentNode:t),Qr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=xc(l);a.call(c)}}var l=Xh(t,0,!1,null,null,!1,!1,"",Om);return t._reactRootContainer=l,t[Wi]=l.current,ca(t.nodeType===8?t.parentNode:t),Qr(function(){Bc(e,l,n,i)}),l}function Vc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=xc(o);a.call(l)}}Bc(e,o,t,r)}else o=DS(n,e,t,r,i);return xc(o)}H0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Bo(e.pendingLanes);n!==0&&(ph(e,n|1),En(e,Lt()),!(Je&6)&&(eo=Lt()+500,Cr()))}break;case 13:Qr(function(){var i=ji(t,1);if(i!==null){var r=mn();si(i,t,1,r)}}),Yh(t,1)}};mh=function(t){if(t.tag===13){var e=ji(t,134217728);if(e!==null){var n=mn();si(e,t,134217728,n)}Yh(t,134217728)}};W0=function(t){if(t.tag===13){var e=xr(t),n=ji(t,e);if(n!==null){var i=mn();si(n,t,e,i)}Yh(t,e)}};j0=function(){return ot};X0=function(t,e){var n=ot;try{return ot=t,e()}finally{ot=n}};wd=function(t,e,n){switch(e){case"input":if(vd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Lc(i);if(!r)throw Error(ne(90));E0(i),vd(i,r)}}}break;case"textarea":w0(t,n);break;case"select":e=n.value,e!=null&&zs(t,!!n.multiple,e,!1)}};I0=Gh;N0=Qr;var US={usingClientEntryPoint:!1,Events:[Ca,Ns,Lc,P0,L0,Gh]},So={findFiberByHostInstance:Gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},FS={bundleType:So.bundleType,version:So.version,rendererPackageName:So.rendererPackageName,rendererConfig:So.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$i.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=F0(t),t===null?null:t.stateNode},findFiberByHostInstance:So.findFiberByHostInstance||NS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $a=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$a.isDisabled&&$a.supportsFiber)try{Cc=$a.inject(FS),vi=$a}catch{}}Fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=US;Fn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$h(e))throw Error(ne(200));return IS(t,e,null,n)};Fn.createRoot=function(t,e){if(!$h(t))throw Error(ne(299));var n=!1,i="",r=pv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Xh(t,1,!1,null,null,n,!1,i,r),t[Wi]=e.current,ca(t.nodeType===8?t.parentNode:t),new qh(e)};Fn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=F0(e),t=t===null?null:t.stateNode,t};Fn.flushSync=function(t){return Qr(t)};Fn.hydrate=function(t,e,n){if(!zc(e))throw Error(ne(200));return Vc(null,t,e,!0,n)};Fn.hydrateRoot=function(t,e,n){if(!$h(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=pv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=hv(e,null,t,1,n??null,r,!1,s,o),t[Wi]=e.current,ca(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new kc(e)};Fn.render=function(t,e,n){if(!zc(e))throw Error(ne(200));return Vc(null,t,e,!1,n)};Fn.unmountComponentAtNode=function(t){if(!zc(t))throw Error(ne(40));return t._reactRootContainer?(Qr(function(){Vc(null,null,t,!1,function(){t._reactRootContainer=null,t[Wi]=null})}),!0):!1};Fn.unstable_batchedUpdates=Gh;Fn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!zc(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return Vc(t,e,n,!1,i)};Fn.version="18.3.1-next-f1338f8080-20240426";function mv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mv)}catch(t){console.error(t)}}mv(),o0.exports=Fn;var OS=o0.exports,gv,Bm=OS;gv=Bm.createRoot,Bm.hydrateRoot;var _v={exports:{}},Gc={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var BS=st,kS=Symbol.for("react.element"),zS=Symbol.for("react.fragment"),VS=Object.prototype.hasOwnProperty,GS=BS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,HS={key:!0,ref:!0,__self:!0,__source:!0};function vv(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)VS.call(e,i)&&!HS.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:kS,type:t,key:s,ref:o,props:r,_owner:GS.current}}Gc.Fragment=zS;Gc.jsx=vv;Gc.jsxs=vv;_v.exports=Gc;var L=_v.exports;const km=t=>{let e;const n=new Set,i=(c,f)=>{const h=typeof c=="function"?c(e):c;if(!Object.is(h,e)){const u=e;e=f??(typeof h!="object"||h===null)?h:Object.assign({},e,h),n.forEach(m=>m(e,u))}},r=()=>e,a={setState:i,getState:r,getInitialState:()=>l,subscribe:c=>(n.add(c),()=>n.delete(c))},l=e=t(i,r,a);return a},WS=t=>t?km(t):km,jS=t=>t;function XS(t,e=jS){const n=Na.useSyncExternalStore(t.subscribe,Na.useCallback(()=>e(t.getState()),[t,e]),Na.useCallback(()=>e(t.getInitialState()),[t,e]));return Na.useDebugValue(n),n}const zm=t=>{const e=WS(t),n=i=>XS(e,i);return Object.assign(n,e),n},YS=t=>t?zm(t):zm;class Ft{constructor(e){ze(this,"state");this.state=e>>>0}next(){let e=this.state+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}int(e,n){return Math.floor(this.next()*(n-e+1))+e}float(e,n){return this.next()*(n-e)+e}pick(e){return e[Math.floor(this.next()*e.length)]}fork(){return new Ft(Math.floor(this.next()*4294967295))}static fromIndex(e,n){return new Ft((e^n*2654435769)>>>0)}}const Zt=3735928559,qS=30,pn={bg:132104,hyperspaceBright:8939263,starG:16772744,starK:16755268,starM:16737843,starF:16777215,starA:11189247,ambient:1122884,wireframe:3407752,stationWire:4508927},Ci={maxSpeed:500,boostMultiplier:3,boostFuelRate:.5,drag:.97,pitchRate:1.2,yawRate:.8,rollRate:2},Vm={maxDistance:80,maxSpeed:20},Dn={maxRange:25,fuelPerUnit:.35,tankSize:7,countdown:3,duration:2},xv={G:pn.starG,K:pn.starK,M:pn.starM,F:pn.starF,A:pn.starA},yv=["Food","Textiles","Radioactives","Slaves","Liquor","Luxuries","Narcotics","Computers"],$S=["Agricultural","Industrial","High Tech","Rich Industrial","Poor Agricultural","Refinery"],sf=20,KS=1e3,ZS=7,Au=3200,Kh=250,Zh=["Democracy","Libertine Democracy","Corporate State","Military Dictatorship","Stagnant Militancy","Theocracy","Anarchist","Technocracy","Feudal"],JS=[16729156,16746547,4491519,11158783,4513194,16763938],QS=["Ac","Be","Ce","Di","En","Fe","Ge","Hi","Is","Jo","Ka","La","Me","No","Or","Pa","Qu","Re","Si","Te","Ul","Ve","Wo","Xe","Za"],eM=["ar","bi","ce","da","et","fi","ge","ho","in","ja","ki","lo","ma","ni","on","pe","ri","sa","ti","un","ve"],tM=["aar","ble","dis","eon","fis","gon","hus","ion","jex","kus","lis","mex","nis","oos","pus","rix","sus","tix","uun","vex"];function nM(t){const e=t.int(1,2);let n=t.pick(QS);return e>1&&(n+=t.pick(eM)),n+=t.pick(tM),n}const iM=["G","K","M","F","A"],Gm=[.35,.25,.2,.12,.08];function rM(t){const e=t.next();let n=0;for(let i=0;i<Gm.length;i++)if(n+=Gm[i],e<n)return iM[i];return"G"}function sM(){const t=new Ft(Zt),e=[],n=8;let i=0;for(;e.length<qS&&i<2e3;){i++;const r=t.float(5,95),s=t.float(5,95);if(e.some(u=>{const m=u.x-r,_=u.y-s;return Math.sqrt(m*m+_*_)<n}))continue;const a=e.length,l=Ft.fromIndex(Zt,a),c=rM(l),f=l.int(1,14),h=l.pick($S);e.push({id:a,name:nM(l),x:r,y:s,starType:c,economy:h,techLevel:f,population:l.int(10,1e4)})}return e}const oM=sM(),Hm={position:{x:0,y:0,z:2e3},velocity:{x:0,y:0,z:0},shields:100,fuel:ZS,heat:0,credits:KS,cargo:{},cargoCostBasis:{},speed:0,targetId:null};function aM(){try{const t=localStorage.getItem("space-game-save");if(t)return JSON.parse(t)}catch{}return{}}const pe=YS((t,e)=>({player:{...Hm},currentSystemId:0,currentSystem:null,galaxy:oM,visitedSystems:new Set,ui:{mode:"flight",alertMessage:null,hyperspaceTarget:null,hyperspaceCountdown:0},time:0,galaxyYear:Au,jumpLog:[],playerChoices:{},lastVisitYear:{},pendingLandingEvent:null,pendingCommContext:null,knownFactions:new Set,factionMemory:{},systemEntryLines:null,setPlayerPosition:n=>t(i=>({player:{...i.player,position:n}})),setPlayerVelocity:n=>t(i=>({player:{...i.player,velocity:n}})),setPlayerSpeed:n=>t(i=>({player:{...i.player,speed:n}})),setShields:n=>t(i=>({player:{...i.player,shields:Math.max(0,Math.min(100,n))}})),setFuel:n=>t(i=>({player:{...i.player,fuel:Math.max(0,Math.min(Dn.tankSize,n))}})),setHeat:n=>t(i=>({player:{...i.player,heat:Math.max(0,Math.min(100,n))}})),setUIMode:n=>t(i=>({ui:{...i.ui,mode:n}})),setCurrentSystem:(n,i)=>t({currentSystemId:n,currentSystem:i}),setTarget:n=>t(i=>({player:{...i.player,targetId:n}})),setAlert:n=>t(i=>({ui:{...i.ui,alertMessage:n}})),setHyperspaceTarget:n=>t(i=>({ui:{...i.ui,hyperspaceTarget:n}})),setHyperspaceCountdown:n=>t(i=>({ui:{...i.ui,hyperspaceCountdown:n}})),addCredits:n=>t(i=>({player:{...i.player,credits:i.player.credits+n}})),addCargo:(n,i,r)=>t(s=>{const o={...s.player.cargo},a=o[n]??0;o[n]=a+i;const l={...s.player.cargoCostBasis};if(r!==void 0){const c=l[n]??0;l[n]=(c*a+r*i)/(a+i)}return{player:{...s.player,cargo:o,cargoCostBasis:l}}}),removeCargo:(n,i)=>t(r=>{const s={...r.player.cargo};s[n]=Math.max(0,(s[n]??0)-i);const o={...r.player.cargoCostBasis};return s[n]===0&&(delete s[n],delete o[n]),{player:{...r.player,cargo:s,cargoCostBasis:o}}}),markVisited:n=>t(i=>{const r=new Set(i.visitedSystems);return r.add(n),{visitedSystems:r}}),tickTime:n=>t(i=>({time:i.time+n})),advanceGalaxyYear:n=>t(i=>({galaxyYear:i.galaxyYear+n})),addJumpLogEntry:n=>t(i=>({jumpLog:[n,...i.jumpLog].slice(0,20)})),recordPlayerChoice:(n,i,r)=>t(s=>{const o=s.playerChoices[n]??{tradingReputation:0,bannedGoods:[],priceModifier:1,factionTag:null,completedEventIds:[]},a={tradingReputation:o.tradingReputation+(r.tradingReputation??0),bannedGoods:[...new Set([...o.bannedGoods,...r.bannedGoods??[]])],priceModifier:o.priceModifier*(r.priceModifier??1),factionTag:r.factionTag??o.factionTag,completedEventIds:[...o.completedEventIds,i]};return{playerChoices:{...s.playerChoices,[n]:a}}}),setPendingLandingEvent:n=>t({pendingLandingEvent:n}),setPendingCommContext:n=>t({pendingCommContext:n}),recordVisitYear:(n,i)=>t(r=>({lastVisitYear:{...r.lastVisitYear,[n]:i}})),addKnownFaction:n=>t(i=>{const r=new Set(i.knownFactions);return r.add(n),{knownFactions:r}}),setFactionMemory:(n,i)=>t(r=>({factionMemory:{...r.factionMemory,[n]:i}})),setSystemEntryLines:n=>t({systemEntryLines:n}),resetGame:()=>{localStorage.removeItem("space-game-save"),t({player:{...Hm},currentSystemId:0,currentSystem:null,visitedSystems:new Set,time:0,galaxyYear:Au,jumpLog:[],playerChoices:{},lastVisitYear:{},pendingLandingEvent:null,pendingCommContext:null,knownFactions:new Set,factionMemory:{},systemEntryLines:null,ui:{mode:"flight",alertMessage:null,hyperspaceTarget:null,hyperspaceCountdown:0}})},loadSave:()=>{const n=aM();Object.keys(n).length!==0&&t(i=>({player:{...i.player,credits:n.credits??i.player.credits,cargo:n.cargo??i.player.cargo,cargoCostBasis:n.cargoCostBasis??i.player.cargoCostBasis,fuel:n.fuel??i.player.fuel,shields:n.shields??i.player.shields},currentSystemId:n.currentSystemId??0,visitedSystems:new Set(n.visitedSystems??[]),galaxyYear:n.galaxyYear??Au,jumpLog:n.jumpLog??[],playerChoices:n.playerChoices??{},lastVisitYear:n.lastVisitYear??{},knownFactions:new Set(n.knownFactions??[]),factionMemory:n.factionMemory??{}}))},saveGame:()=>{const n=e(),i={credits:n.player.credits,cargo:n.player.cargo,cargoCostBasis:n.player.cargoCostBasis,fuel:n.player.fuel,shields:n.player.shields,currentSystemId:n.currentSystemId,visitedSystems:Array.from(n.visitedSystems),galaxyYear:n.galaxyYear,jumpLog:n.jumpLog,playerChoices:n.playerChoices,lastVisitYear:n.lastVisitYear,knownFactions:Array.from(n.knownFactions),factionMemory:n.factionMemory};localStorage.setItem("space-game-save",JSON.stringify(i))}}));/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jh="183",lM=0,Wm=1,cM=2,Gl=1,uM=2,zo=3,Tr=0,Tn=1,pi=2,Vi=0,Xs=1,to=2,jm=3,Xm=4,dM=5,zr=100,fM=101,hM=102,pM=103,mM=104,gM=200,_M=201,vM=202,xM=203,of=204,af=205,yM=206,SM=207,MM=208,EM=209,TM=210,wM=211,AM=212,CM=213,RM=214,lf=0,cf=1,uf=2,no=3,df=4,ff=5,hf=6,pf=7,Qh=0,bM=1,PM=2,yi=0,Sv=1,Mv=2,Ev=3,Tv=4,wv=5,Av=6,Cv=7,Rv=300,es=301,io=302,Cu=303,Ru=304,Hc=306,mf=1e3,ki=1001,gf=1002,$t=1003,LM=1004,Ka=1005,on=1006,bu=1007,jr=1008,Pn=1009,bv=1010,Pv=1011,va=1012,ep=1013,Mi=1014,ni=1015,Yi=1016,tp=1017,np=1018,xa=1020,Lv=35902,Iv=35899,Nv=1021,Dv=1022,ii=1023,qi=1026,Xr=1027,ip=1028,rp=1029,ro=1030,sp=1031,op=1033,Hl=33776,Wl=33777,jl=33778,Xl=33779,_f=35840,vf=35841,xf=35842,yf=35843,Sf=36196,Mf=37492,Ef=37496,Tf=37488,wf=37489,Af=37490,Cf=37491,Rf=37808,bf=37809,Pf=37810,Lf=37811,If=37812,Nf=37813,Df=37814,Uf=37815,Ff=37816,Of=37817,Bf=37818,kf=37819,zf=37820,Vf=37821,Gf=36492,Hf=36494,Wf=36495,jf=36283,Xf=36284,Yf=36285,qf=36286,IM=3200,Uv=0,NM=1,cr="",kn="srgb",so="srgb-linear",yc="linear",rt="srgb",cs=7680,Ym=519,DM=512,UM=513,FM=514,ap=515,OM=516,BM=517,lp=518,kM=519,$f=35044,qm="300 es",gi=2e3,ya=2001;function zM(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Sc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function VM(){const t=Sc("canvas");return t.style.display="block",t}const $m={};function Mc(...t){const e="THREE."+t.shift();console.log(e,...t)}function Fv(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ie(...t){t=Fv(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Ke(...t){t=Fv(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Ec(...t){const e=t.join(" ");e in $m||($m[e]=!0,Ie(...t))}function GM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const HM={[lf]:cf,[uf]:hf,[df]:pf,[no]:ff,[cf]:lf,[hf]:uf,[pf]:df,[ff]:no};class uo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yl=Math.PI/180,Kf=180/Math.PI;function Sr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[t&255]+nn[t>>8&255]+nn[t>>16&255]+nn[t>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[n&63|128]+nn[n>>8&255]+"-"+nn[n>>16&255]+nn[n>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function qe(t,e,n){return Math.max(e,Math.min(n,t))}function WM(t,e){return(t%e+e)%e}function Pu(t,e,n){return(1-n)*t+n*e}function mi(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function ct(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Fe{constructor(e=0,n=0){Fe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3],u=s[o+0],m=s[o+1],_=s[o+2],v=s[o+3];if(h!==v||l!==u||c!==m||f!==_){let g=l*u+c*m+f*_+h*v;g<0&&(u=-u,m=-m,_=-_,v=-v,g=-g);let d=1-a;if(g<.9995){const p=Math.acos(g),x=Math.sin(p);d=Math.sin(d*p)/x,a=Math.sin(a*p)/x,l=l*d+u*a,c=c*d+m*a,f=f*d+_*a,h=h*d+v*a}else{l=l*d+u*a,c=c*d+m*a,f=f*d+_*a,h=h*d+v*a;const p=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=p,c*=p,f*=p,h*=p}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=s[o],u=s[o+1],m=s[o+2],_=s[o+3];return e[n]=a*_+f*h+l*m-c*u,e[n+1]=l*_+f*u+c*h-a*m,e[n+2]=c*_+f*m+a*u-l*h,e[n+3]=f*_-a*h-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),h=a(s/2),u=l(i/2),m=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=u*f*h+c*m*_,this._y=c*m*h-u*f*_,this._z=c*f*_+u*m*h,this._w=c*f*h-u*m*_;break;case"YXZ":this._x=u*f*h+c*m*_,this._y=c*m*h-u*f*_,this._z=c*f*_-u*m*h,this._w=c*f*h+u*m*_;break;case"ZXY":this._x=u*f*h-c*m*_,this._y=c*m*h+u*f*_,this._z=c*f*_+u*m*h,this._w=c*f*h-u*m*_;break;case"ZYX":this._x=u*f*h-c*m*_,this._y=c*m*h+u*f*_,this._z=c*f*_-u*m*h,this._w=c*f*h+u*m*_;break;case"YZX":this._x=u*f*h+c*m*_,this._y=c*m*h+u*f*_,this._z=c*f*_-u*m*h,this._w=c*f*h-u*m*_;break;case"XZY":this._x=u*f*h-c*m*_,this._y=c*m*h-u*f*_,this._z=c*f*_+u*m*h,this._w=c*f*h+u*m*_;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],h=n[10],u=i+a+h;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(f-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,n=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Km.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Km.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*f,this.y=i+l*f+a*c-s*h,this.z=r+l*h+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Lu.copy(this).projectOnVector(e),this.sub(Lu)}reflect(e){return this.sub(Lu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lu=new D,Km=new fo;class ke{constructor(e,n,i,r,s,o,a,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],h=i[7],u=i[2],m=i[5],_=i[8],v=r[0],g=r[3],d=r[6],p=r[1],x=r[4],y=r[7],T=r[2],A=r[5],C=r[8];return s[0]=o*v+a*p+l*T,s[3]=o*g+a*x+l*A,s[6]=o*d+a*y+l*C,s[1]=c*v+f*p+h*T,s[4]=c*g+f*x+h*A,s[7]=c*d+f*y+h*C,s[2]=u*v+m*p+_*T,s[5]=u*g+m*x+_*A,s[8]=u*d+m*y+_*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=f*o-a*c,u=a*l-f*s,m=c*s-o*l,_=n*h+i*u+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=h*v,e[1]=(r*c-f*i)*v,e[2]=(a*i-r*o)*v,e[3]=u*v,e[4]=(f*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=m*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Iu.makeScale(e,n)),this}rotate(e){return this.premultiply(Iu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Iu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Iu=new ke,Zm=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jm=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jM(){const t={enabled:!0,workingColorSpace:so,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===rt&&(r.r=Gi(r.r),r.g=Gi(r.g),r.b=Gi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===rt&&(r.r=Ys(r.r),r.g=Ys(r.g),r.b=Ys(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===cr?yc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ec("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ec("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[so]:{primaries:e,whitePoint:i,transfer:yc,toXYZ:Zm,fromXYZ:Jm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:kn},outputColorSpaceConfig:{drawingBufferColorSpace:kn}},[kn]:{primaries:e,whitePoint:i,transfer:rt,toXYZ:Zm,fromXYZ:Jm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:kn}}}),t}const Ze=jM();function Gi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ys(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let us;class XM{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{us===void 0&&(us=Sc("canvas")),us.width=e.width,us.height=e.height;const r=us.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=us}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Sc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Gi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Gi(n[i]/255)*255):n[i]=Gi(n[i]);return{data:n,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let YM=0;class cp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:YM++}),this.uuid=Sr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Nu(r[o].image)):s.push(Nu(r[o]))}else s=Nu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Nu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?XM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let qM=0;const Du=new D;class an extends uo{constructor(e=an.DEFAULT_IMAGE,n=an.DEFAULT_MAPPING,i=ki,r=ki,s=on,o=jr,a=ii,l=Pn,c=an.DEFAULT_ANISOTROPY,f=cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qM++}),this.uuid=Sr(),this.name="",this.source=new cp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Du).x}get height(){return this.source.getSize(Du).y}get depth(){return this.source.getSize(Du).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ie(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ie(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mf:e.x=e.x-Math.floor(e.x);break;case ki:e.x=e.x<0?0:1;break;case gf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mf:e.y=e.y-Math.floor(e.y);break;case ki:e.y=e.y<0?0:1;break;case gf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=Rv;an.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,n=0,i=0,r=1){Rt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],h=l[8],u=l[1],m=l[5],_=l[9],v=l[2],g=l[6],d=l[10];if(Math.abs(f-u)<.01&&Math.abs(h-v)<.01&&Math.abs(_-g)<.01){if(Math.abs(f+u)<.1&&Math.abs(h+v)<.1&&Math.abs(_+g)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,y=(m+1)/2,T=(d+1)/2,A=(f+u)/4,C=(h+v)/4,S=(_+g)/4;return x>y&&x>T?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=A/i,s=C/i):y>T?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=A/r,s=S/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=C/s,r=S/s),this.set(i,r,s,n),this}let p=Math.sqrt((g-_)*(g-_)+(h-v)*(h-v)+(u-f)*(u-f));return Math.abs(p)<.001&&(p=1),this.x=(g-_)/p,this.y=(h-v)/p,this.z=(u-f)/p,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this.w=qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this.w=qe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $M extends uo{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Rt(0,0,e,n),this.scissorTest=!1,this.viewport=new Rt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new an(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new cp(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Si extends $M{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Ov extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class KM extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ut{constructor(e,n,i,r,s,o,a,l,c,f,h,u,m,_,v,g){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,h,u,m,_,v,g)}set(e,n,i,r,s,o,a,l,c,f,h,u,m,_,v,g){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=f,d[10]=h,d[14]=u,d[3]=m,d[7]=_,d[11]=v,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/ds.setFromMatrixColumn(e,0).length(),s=1/ds.setFromMatrixColumn(e,1).length(),o=1/ds.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const u=o*f,m=o*h,_=a*f,v=a*h;n[0]=l*f,n[4]=-l*h,n[8]=c,n[1]=m+_*c,n[5]=u-v*c,n[9]=-a*l,n[2]=v-u*c,n[6]=_+m*c,n[10]=o*l}else if(e.order==="YXZ"){const u=l*f,m=l*h,_=c*f,v=c*h;n[0]=u+v*a,n[4]=_*a-m,n[8]=o*c,n[1]=o*h,n[5]=o*f,n[9]=-a,n[2]=m*a-_,n[6]=v+u*a,n[10]=o*l}else if(e.order==="ZXY"){const u=l*f,m=l*h,_=c*f,v=c*h;n[0]=u-v*a,n[4]=-o*h,n[8]=_+m*a,n[1]=m+_*a,n[5]=o*f,n[9]=v-u*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const u=o*f,m=o*h,_=a*f,v=a*h;n[0]=l*f,n[4]=_*c-m,n[8]=u*c+v,n[1]=l*h,n[5]=v*c+u,n[9]=m*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const u=o*l,m=o*c,_=a*l,v=a*c;n[0]=l*f,n[4]=v-u*h,n[8]=_*h+m,n[1]=h,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=m*h+_,n[10]=u-v*h}else if(e.order==="XZY"){const u=o*l,m=o*c,_=a*l,v=a*c;n[0]=l*f,n[4]=-h,n[8]=c*f,n[1]=u*h+v,n[5]=o*f,n[9]=m*h-_,n[2]=_*h-m,n[6]=a*f,n[10]=v*h+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ZM,e,JM)}lookAt(e,n,i){const r=this.elements;return An.subVectors(e,n),An.lengthSq()===0&&(An.z=1),An.normalize(),Qi.crossVectors(i,An),Qi.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Qi.crossVectors(i,An)),Qi.normalize(),Za.crossVectors(An,Qi),r[0]=Qi.x,r[4]=Za.x,r[8]=An.x,r[1]=Qi.y,r[5]=Za.y,r[9]=An.y,r[2]=Qi.z,r[6]=Za.z,r[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],h=i[5],u=i[9],m=i[13],_=i[2],v=i[6],g=i[10],d=i[14],p=i[3],x=i[7],y=i[11],T=i[15],A=r[0],C=r[4],S=r[8],E=r[12],U=r[1],I=r[5],b=r[9],P=r[13],H=r[2],V=r[6],G=r[10],O=r[14],z=r[3],W=r[7],J=r[11],ee=r[15];return s[0]=o*A+a*U+l*H+c*z,s[4]=o*C+a*I+l*V+c*W,s[8]=o*S+a*b+l*G+c*J,s[12]=o*E+a*P+l*O+c*ee,s[1]=f*A+h*U+u*H+m*z,s[5]=f*C+h*I+u*V+m*W,s[9]=f*S+h*b+u*G+m*J,s[13]=f*E+h*P+u*O+m*ee,s[2]=_*A+v*U+g*H+d*z,s[6]=_*C+v*I+g*V+d*W,s[10]=_*S+v*b+g*G+d*J,s[14]=_*E+v*P+g*O+d*ee,s[3]=p*A+x*U+y*H+T*z,s[7]=p*C+x*I+y*V+T*W,s[11]=p*S+x*b+y*G+T*J,s[15]=p*E+x*P+y*O+T*ee,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],h=e[6],u=e[10],m=e[14],_=e[3],v=e[7],g=e[11],d=e[15],p=l*m-c*u,x=a*m-c*h,y=a*u-l*h,T=o*m-c*f,A=o*u-l*f,C=o*h-a*f;return n*(v*p-g*x+d*y)-i*(_*p-g*T+d*A)+r*(_*x-v*T+d*C)-s*(_*y-v*A+g*C)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=e[9],u=e[10],m=e[11],_=e[12],v=e[13],g=e[14],d=e[15],p=n*a-i*o,x=n*l-r*o,y=n*c-s*o,T=i*l-r*a,A=i*c-s*a,C=r*c-s*l,S=f*v-h*_,E=f*g-u*_,U=f*d-m*_,I=h*g-u*v,b=h*d-m*v,P=u*d-m*g,H=p*P-x*b+y*I+T*U-A*E+C*S;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/H;return e[0]=(a*P-l*b+c*I)*V,e[1]=(r*b-i*P-s*I)*V,e[2]=(v*C-g*A+d*T)*V,e[3]=(u*A-h*C-m*T)*V,e[4]=(l*U-o*P-c*E)*V,e[5]=(n*P-r*U+s*E)*V,e[6]=(g*y-_*C-d*x)*V,e[7]=(f*C-u*y+m*x)*V,e[8]=(o*b-a*U+c*S)*V,e[9]=(i*U-n*b-s*S)*V,e[10]=(_*A-v*y+d*p)*V,e[11]=(h*y-f*A-m*p)*V,e[12]=(a*E-o*I-l*S)*V,e[13]=(n*I-i*E+r*S)*V,e[14]=(v*x-_*T-g*p)*V,e[15]=(f*T-h*x+u*p)*V,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,h=a+a,u=s*c,m=s*f,_=s*h,v=o*f,g=o*h,d=a*h,p=l*c,x=l*f,y=l*h,T=i.x,A=i.y,C=i.z;return r[0]=(1-(v+d))*T,r[1]=(m+y)*T,r[2]=(_-x)*T,r[3]=0,r[4]=(m-y)*A,r[5]=(1-(u+d))*A,r[6]=(g+p)*A,r[7]=0,r[8]=(_+x)*C,r[9]=(g-p)*C,r[10]=(1-(u+v))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let o=ds.set(r[0],r[1],r[2]).length();const a=ds.set(r[4],r[5],r[6]).length(),l=ds.set(r[8],r[9],r[10]).length();s<0&&(o=-o),qn.copy(this);const c=1/o,f=1/a,h=1/l;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=f,qn.elements[5]*=f,qn.elements[6]*=f,qn.elements[8]*=h,qn.elements[9]*=h,qn.elements[10]*=h,n.setFromRotationMatrix(qn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=gi,l=!1){const c=this.elements,f=2*s/(n-e),h=2*s/(i-r),u=(n+e)/(n-e),m=(i+r)/(i-r);let _,v;if(l)_=s/(o-s),v=o*s/(o-s);else if(a===gi)_=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===ya)_=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=gi,l=!1){const c=this.elements,f=2/(n-e),h=2/(i-r),u=-(n+e)/(n-e),m=-(i+r)/(i-r);let _,v;if(l)_=1/(o-s),v=o/(o-s);else if(a===gi)_=-2/(o-s),v=-(o+s)/(o-s);else if(a===ya)_=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ds=new D,qn=new ut,ZM=new D(0,0,0),JM=new D(1,1,1),Qi=new D,Za=new D,An=new D,Qm=new ut,eg=new fo;class Ei{constructor(e=0,n=0,i=0,r=Ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],h=r[2],u=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Qm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return eg.setFromEuler(this),this.setFromQuaternion(eg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ei.DEFAULT_ORDER="XYZ";class Bv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let QM=0;const tg=new D,fs=new fo,Ri=new ut,Ja=new D,Mo=new D,eE=new D,tE=new fo,ng=new D(1,0,0),ig=new D(0,1,0),rg=new D(0,0,1),sg={type:"added"},nE={type:"removed"},hs={type:"childadded",child:null},Uu={type:"childremoved",child:null};class Xt extends uo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:QM++}),this.uuid=Sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new D,n=new Ei,i=new fo,r=new D(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new ke}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return fs.setFromAxisAngle(e,n),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,n){return fs.setFromAxisAngle(e,n),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(ng,e)}rotateY(e){return this.rotateOnAxis(ig,e)}rotateZ(e){return this.rotateOnAxis(rg,e)}translateOnAxis(e,n){return tg.copy(e).applyQuaternion(this.quaternion),this.position.add(tg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(ng,e)}translateY(e){return this.translateOnAxis(ig,e)}translateZ(e){return this.translateOnAxis(rg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ja.copy(e):Ja.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(Mo,Ja,this.up):Ri.lookAt(Ja,Mo,this.up),this.quaternion.setFromRotationMatrix(Ri),r&&(Ri.extractRotation(r.matrixWorld),fs.setFromRotationMatrix(Ri),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sg),hs.child=e,this.dispatchEvent(hs),hs.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(nE),Uu.child=e,this.dispatchEvent(Uu),Uu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sg),hs.child=e,this.dispatchEvent(hs),hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,e,eE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,tE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),h=o(e.shapes),u=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Xt.DEFAULT_UP=new D(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class _i extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iE={type:"move"};class Fu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const g=n.getJointPose(v,i),d=this._getHandJoint(c,v);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=f.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&u>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(iE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new _i;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const kv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},er={h:0,s:0,l:0},Qa={h:0,s:0,l:0};function Ou(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Be{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=WM(e,1),n=qe(n,0,1),i=qe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Ou(o,s,e+1/3),this.g=Ou(o,s,e),this.b=Ou(o,s,e-1/3)}return Ze.colorSpaceToWorking(this,r),this}setStyle(e,n=kn){function i(s){s!==void 0&&parseFloat(s)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ie("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=kn){const i=kv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kn){return Ze.workingToColorSpace(rn.copy(this),e),Math.round(qe(rn.r*255,0,255))*65536+Math.round(qe(rn.g*255,0,255))*256+Math.round(qe(rn.b*255,0,255))}getHexString(e=kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.workingToColorSpace(rn.copy(this),n);const i=rn.r,r=rn.g,s=rn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=Ze.workingColorSpace){return Ze.workingToColorSpace(rn.copy(this),n),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=kn){Ze.workingToColorSpace(rn.copy(this),e);const n=rn.r,i=rn.g,r=rn.b;return e!==kn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(er),this.setHSL(er.h+e,er.s+n,er.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(er),e.getHSL(Qa);const i=Pu(er.h,Qa.h,n),r=Pu(er.s,Qa.s,n),s=Pu(er.l,Qa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new Be;Be.NAMES=kv;class up{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Be(e),this.density=n}clone(){return new up(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class rE extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const $n=new D,bi=new D,Bu=new D,Pi=new D,ps=new D,ms=new D,og=new D,ku=new D,zu=new D,Vu=new D,Gu=new Rt,Hu=new Rt,Wu=new Rt;class Ln{constructor(e=new D,n=new D,i=new D){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),$n.subVectors(e,n),r.cross($n);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){$n.subVectors(r,n),bi.subVectors(i,n),Bu.subVectors(e,n);const o=$n.dot($n),a=$n.dot(bi),l=$n.dot(Bu),c=bi.dot(bi),f=bi.dot(Bu),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const u=1/h,m=(c*l-a*f)*u,_=(o*f-a*l)*u;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Pi.x),l.addScaledVector(o,Pi.y),l.addScaledVector(a,Pi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Gu.setScalar(0),Hu.setScalar(0),Wu.setScalar(0),Gu.fromBufferAttribute(e,n),Hu.fromBufferAttribute(e,i),Wu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Gu,s.x),o.addScaledVector(Hu,s.y),o.addScaledVector(Wu,s.z),o}static isFrontFacing(e,n,i,r){return $n.subVectors(i,n),bi.subVectors(e,n),$n.cross(bi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),$n.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ln.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Ln.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ps.subVectors(r,i),ms.subVectors(s,i),ku.subVectors(e,i);const l=ps.dot(ku),c=ms.dot(ku);if(l<=0&&c<=0)return n.copy(i);zu.subVectors(e,r);const f=ps.dot(zu),h=ms.dot(zu);if(f>=0&&h<=f)return n.copy(r);const u=l*h-f*c;if(u<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(ps,o);Vu.subVectors(e,s);const m=ps.dot(Vu),_=ms.dot(Vu);if(_>=0&&m<=_)return n.copy(s);const v=m*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(ms,a);const g=f*_-m*h;if(g<=0&&h-f>=0&&m-_>=0)return og.subVectors(s,r),a=(h-f)/(h-f+(m-_)),n.copy(r).addScaledVector(og,a);const d=1/(g+v+u);return o=v*d,a=u*d,n.copy(i).addScaledVector(ps,o).addScaledVector(ms,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class is{constructor(e=new D(1/0,1/0,1/0),n=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Kn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Kn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Kn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Kn):Kn.fromBufferAttribute(s,o),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),el.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),el.copy(i.boundingBox)),el.applyMatrix4(e.matrixWorld),this.union(el)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Eo),tl.subVectors(this.max,Eo),gs.subVectors(e.a,Eo),_s.subVectors(e.b,Eo),vs.subVectors(e.c,Eo),tr.subVectors(_s,gs),nr.subVectors(vs,_s),Lr.subVectors(gs,vs);let n=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-Lr.z,Lr.y,tr.z,0,-tr.x,nr.z,0,-nr.x,Lr.z,0,-Lr.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-Lr.y,Lr.x,0];return!ju(n,gs,_s,vs,tl)||(n=[1,0,0,0,1,0,0,0,1],!ju(n,gs,_s,vs,tl))?!1:(nl.crossVectors(tr,nr),n=[nl.x,nl.y,nl.z],ju(n,gs,_s,vs,tl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Li=[new D,new D,new D,new D,new D,new D,new D,new D],Kn=new D,el=new is,gs=new D,_s=new D,vs=new D,tr=new D,nr=new D,Lr=new D,Eo=new D,tl=new D,nl=new D,Ir=new D;function ju(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ir.fromArray(t,s);const a=r.x*Math.abs(Ir.x)+r.y*Math.abs(Ir.y)+r.z*Math.abs(Ir.z),l=e.dot(Ir),c=n.dot(Ir),f=i.dot(Ir);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const Dt=new D,il=new Fe;let sE=0;class ln{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sE++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=$f,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)il.fromBufferAttribute(this,n),il.applyMatrix3(e),this.setXY(n,il.x,il.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix3(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix4(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyNormalMatrix(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.transformDirection(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=mi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ct(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=mi(n,this.array)),n}setX(e,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=mi(n,this.array)),n}setY(e,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=mi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=mi(n,this.array)),n}setW(e,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=ct(n,this.array),i=ct(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array),s=ct(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$f&&(e.usage=this.usage),e}}class zv extends ln{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Vv extends ln{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class _t extends ln{constructor(e,n,i){super(new Float32Array(e),n,i)}}const oE=new is,To=new D,Xu=new D;class rs{constructor(e=new D,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):oE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;To.subVectors(e,this.center);const n=To.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(To,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(To.copy(e.center).add(Xu)),this.expandByPoint(To.copy(e.center).sub(Xu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let aE=0;const Bn=new ut,Yu=new Xt,xs=new D,Cn=new is,wo=new is,Ht=new D;class It extends uo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:aE++}),this.uuid=Sr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zM(e)?Vv:zv)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,n,i){return Bn.makeTranslation(e,n,i),this.applyMatrix4(Bn),this}scale(e,n,i){return Bn.makeScale(e,n,i),this.applyMatrix4(Bn),this}lookAt(e){return Yu.lookAt(e),Yu.updateMatrix(),this.applyMatrix4(Yu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _t(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new is);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];wo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(Cn.min,wo.min),Cn.expandByPoint(Ht),Ht.addVectors(Cn.max,wo.max),Cn.expandByPoint(Ht)):(Cn.expandByPoint(wo.min),Cn.expandByPoint(wo.max))}Cn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ht.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ht));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Ht.fromBufferAttribute(a,c),l&&(xs.fromBufferAttribute(e,c),Ht.add(xs)),r=Math.max(r,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let S=0;S<i.count;S++)a[S]=new D,l[S]=new D;const c=new D,f=new D,h=new D,u=new Fe,m=new Fe,_=new Fe,v=new D,g=new D;function d(S,E,U){c.fromBufferAttribute(i,S),f.fromBufferAttribute(i,E),h.fromBufferAttribute(i,U),u.fromBufferAttribute(s,S),m.fromBufferAttribute(s,E),_.fromBufferAttribute(s,U),f.sub(c),h.sub(c),m.sub(u),_.sub(u);const I=1/(m.x*_.y-_.x*m.y);isFinite(I)&&(v.copy(f).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(I),g.copy(h).multiplyScalar(m.x).addScaledVector(f,-_.x).multiplyScalar(I),a[S].add(v),a[E].add(v),a[U].add(v),l[S].add(g),l[E].add(g),l[U].add(g))}let p=this.groups;p.length===0&&(p=[{start:0,count:e.count}]);for(let S=0,E=p.length;S<E;++S){const U=p[S],I=U.start,b=U.count;for(let P=I,H=I+b;P<H;P+=3)d(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const x=new D,y=new D,T=new D,A=new D;function C(S){T.fromBufferAttribute(r,S),A.copy(T);const E=a[S];x.copy(E),x.sub(T.multiplyScalar(T.dot(E))).normalize(),y.crossVectors(A,E);const I=y.dot(l[S])<0?-1:1;o.setXYZW(S,x.x,x.y,x.z,I)}for(let S=0,E=p.length;S<E;++S){const U=p[S],I=U.start,b=U.count;for(let P=I,H=I+b;P<H;P+=3)C(e.getX(P+0)),C(e.getX(P+1)),C(e.getX(P+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ln(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,f=new D,h=new D;if(e)for(let u=0,m=e.count;u<m;u+=3){const _=e.getX(u+0),v=e.getX(u+1),g=e.getX(u+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,g),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),a.add(f),l.add(f),c.add(f),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,m=n.count;u<m;u+=3)r.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),o.fromBufferAttribute(n,u+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ht.fromBufferAttribute(e,n),Ht.normalize(),e.setXYZ(n,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,h=a.normalized,u=new c.constructor(l.length*f);let m=0,_=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*f;for(let d=0;d<f;d++)u[_++]=c[m++]}return new ln(u,f,h)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new It,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,h=c.length;f<h;f++){const u=c[f],m=e(u,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,u=c.length;h<u;h++){const m=c[h];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],h=s[c];for(let u=0,m=h.length;u<m;u++)f.push(h[u].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class lE{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=$f,this.updateRanges=[],this.version=0,this.uuid=Sr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const un=new D;class Tc{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)un.fromBufferAttribute(this,n),un.applyMatrix4(e),this.setXYZ(n,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)un.fromBufferAttribute(this,n),un.applyNormalMatrix(e),this.setXYZ(n,un.x,un.y,un.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)un.fromBufferAttribute(this,n),un.transformDirection(e),this.setXYZ(n,un.x,un.y,un.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=mi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ct(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=mi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=mi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=mi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=mi(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=ct(n,this.array),i=ct(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array),s=ct(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Mc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new ln(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Tc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Mc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let cE=0;class Rr extends uo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cE++}),this.uuid=Sr(),this.name="",this.type="Material",this.blending=Xs,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=of,this.blendDst=af,this.blendEquation=zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ym,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ie(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ie(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xs&&(i.blending=this.blending),this.side!==Tr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==of&&(i.blendSrc=this.blendSrc),this.blendDst!==af&&(i.blendDst=this.blendDst),this.blendEquation!==zr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==no&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ym&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class dp extends Rr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ys;const Ao=new D,Ss=new D,Ms=new D,Es=new Fe,Co=new Fe,Gv=new ut,rl=new D,Ro=new D,sl=new D,ag=new Fe,qu=new Fe,lg=new Fe;class Hv extends Xt{constructor(e=new dp){if(super(),this.isSprite=!0,this.type="Sprite",ys===void 0){ys=new It;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new lE(n,5);ys.setIndex([0,1,2,0,2,3]),ys.setAttribute("position",new Tc(i,3,0,!1)),ys.setAttribute("uv",new Tc(i,2,3,!1))}this.geometry=ys,this.material=e,this.center=new Fe(.5,.5),this.count=1}raycast(e,n){e.camera===null&&Ke('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ss.setFromMatrixScale(this.matrixWorld),Gv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ms.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ss.multiplyScalar(-Ms.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;ol(rl.set(-.5,-.5,0),Ms,o,Ss,r,s),ol(Ro.set(.5,-.5,0),Ms,o,Ss,r,s),ol(sl.set(.5,.5,0),Ms,o,Ss,r,s),ag.set(0,0),qu.set(1,0),lg.set(1,1);let a=e.ray.intersectTriangle(rl,Ro,sl,!1,Ao);if(a===null&&(ol(Ro.set(-.5,.5,0),Ms,o,Ss,r,s),qu.set(0,1),a=e.ray.intersectTriangle(rl,sl,Ro,!1,Ao),a===null))return;const l=e.ray.origin.distanceTo(Ao);l<e.near||l>e.far||n.push({distance:l,point:Ao.clone(),uv:Ln.getInterpolation(Ao,rl,Ro,sl,ag,qu,lg,new Fe),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ol(t,e,n,i,r,s){Es.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(Co.x=s*Es.x-r*Es.y,Co.y=r*Es.x+s*Es.y):Co.copy(Es),t.copy(e),t.x+=Co.x,t.y+=Co.y,t.applyMatrix4(Gv)}const Ii=new D,$u=new D,al=new D,ir=new D,Ku=new D,ll=new D,Zu=new D;class fp{constructor(e=new D,n=new D(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ii.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,n),Ii.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){$u.copy(e).add(n).multiplyScalar(.5),al.copy(n).sub(e).normalize(),ir.copy(this.origin).sub($u);const s=e.distanceTo(n)*.5,o=-this.direction.dot(al),a=ir.dot(this.direction),l=-ir.dot(al),c=ir.lengthSq(),f=Math.abs(1-o*o);let h,u,m,_;if(f>0)if(h=o*l-a,u=o*a-l,_=s*f,h>=0)if(u>=-_)if(u<=_){const v=1/f;h*=v,u*=v,m=h*(h+o*u+2*a)+u*(o*h+u+2*l)+c}else u=s,h=Math.max(0,-(o*u+a)),m=-h*h+u*(u+2*l)+c;else u=-s,h=Math.max(0,-(o*u+a)),m=-h*h+u*(u+2*l)+c;else u<=-_?(h=Math.max(0,-(-o*s+a)),u=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+u*(u+2*l)+c):u<=_?(h=0,u=Math.min(Math.max(-s,-l),s),m=u*(u+2*l)+c):(h=Math.max(0,-(o*s+a)),u=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+u*(u+2*l)+c);else u=o>0?-s:s,h=Math.max(0,-(o*u+a)),m=-h*h+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy($u).addScaledVector(al,u),m}intersectSphere(e,n){Ii.subVectors(e.center,this.origin);const i=Ii.dot(this.direction),r=Ii.dot(Ii)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),f>=0?(s=(e.min.y-u.y)*f,o=(e.max.y-u.y)*f):(s=(e.max.y-u.y)*f,o=(e.min.y-u.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(a=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,n,i,r,s){Ku.subVectors(n,e),ll.subVectors(i,e),Zu.crossVectors(Ku,ll);let o=this.direction.dot(Zu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ir.subVectors(this.origin,e);const l=a*this.direction.dot(ll.crossVectors(ir,ll));if(l<0)return null;const c=a*this.direction.dot(Ku.cross(ir));if(c<0||l+c>o)return null;const f=-a*ir.dot(Zu);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wc extends Rr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=Qh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const cg=new ut,Nr=new fp,cl=new rs,ug=new D,ul=new D,dl=new D,fl=new D,Ju=new D,hl=new D,dg=new D,pl=new D;class gn extends Xt{constructor(e=new It,n=new Wc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){hl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],h=s[l];f!==0&&(Ju.fromBufferAttribute(h,e),o?hl.addScaledVector(Ju,f):hl.addScaledVector(Ju.sub(n),f))}n.add(hl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),cl.copy(i.boundingSphere),cl.applyMatrix4(s),Nr.copy(e.ray).recast(e.near),!(cl.containsPoint(Nr.origin)===!1&&(Nr.intersectSphere(cl,ug)===null||Nr.origin.distanceToSquared(ug)>(e.far-e.near)**2))&&(cg.copy(s).invert(),Nr.copy(e.ray).applyMatrix4(cg),!(i.boundingBox!==null&&Nr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Nr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,u=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=u.length;_<v;_++){const g=u[_],d=o[g.materialIndex],p=Math.max(g.start,m.start),x=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let y=p,T=x;y<T;y+=3){const A=a.getX(y),C=a.getX(y+1),S=a.getX(y+2);r=ml(this,d,e,i,c,f,h,A,C,S),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let g=_,d=v;g<d;g+=3){const p=a.getX(g),x=a.getX(g+1),y=a.getX(g+2);r=ml(this,o,e,i,c,f,h,p,x,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=u.length;_<v;_++){const g=u[_],d=o[g.materialIndex],p=Math.max(g.start,m.start),x=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let y=p,T=x;y<T;y+=3){const A=y,C=y+1,S=y+2;r=ml(this,d,e,i,c,f,h,A,C,S),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let g=_,d=v;g<d;g+=3){const p=g,x=g+1,y=g+2;r=ml(this,o,e,i,c,f,h,p,x,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function uE(t,e,n,i,r,s,o,a){let l;if(e.side===Tn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Tr,a),l===null)return null;pl.copy(a),pl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(pl);return c<n.near||c>n.far?null:{distance:c,point:pl.clone(),object:t}}function ml(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,ul),t.getVertexPosition(l,dl),t.getVertexPosition(c,fl);const f=uE(t,e,n,i,ul,dl,fl,dg);if(f){const h=new D;Ln.getBarycoord(dg,ul,dl,fl,h),r&&(f.uv=Ln.getInterpolatedAttribute(r,a,l,c,h,new Fe)),s&&(f.uv1=Ln.getInterpolatedAttribute(s,a,l,c,h,new Fe)),o&&(f.normal=Ln.getInterpolatedAttribute(o,a,l,c,h,new D),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new D,materialIndex:0};Ln.getNormal(ul,dl,fl,u.normal),f.face=u,f.barycoord=h}return f}class Wv extends an{constructor(e=null,n=1,i=1,r,s,o,a,l,c=$t,f=$t,h,u){super(null,o,a,l,c,f,r,s,h,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fg extends ln{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ts=new ut,hg=new ut,gl=[],pg=new is,dE=new ut,bo=new gn,Po=new rs;class fE extends gn{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new fg(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,dE)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new is),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Ts),pg.copy(e.boundingBox).applyMatrix4(Ts),this.boundingBox.union(pg)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new rs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Ts),Po.copy(e.boundingSphere).applyMatrix4(Ts),this.boundingSphere.union(Po)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(bo.geometry=this.geometry,bo.material=this.material,bo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Po.copy(this.boundingSphere),Po.applyMatrix4(i),e.ray.intersectsSphere(Po)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ts),hg.multiplyMatrices(i,Ts),bo.matrixWorld=hg,bo.raycast(e,gl);for(let o=0,a=gl.length;o<a;o++){const l=gl[o];l.instanceId=s,l.object=this,n.push(l)}gl.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new fg(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Wv(new Float32Array(r*this.count),r,this.count,ip,ni));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Qu=new D,hE=new D,pE=new ke;class kr{constructor(e=new D(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Qu.subVectors(i,n).cross(hE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Qu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||pE.getNormalMatrix(e),r=this.coplanarPoint(Qu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dr=new rs,mE=new Fe(.5,.5),_l=new D;class hp{constructor(e=new kr,n=new kr,i=new kr,r=new kr,s=new kr,o=new kr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=gi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],f=s[4],h=s[5],u=s[6],m=s[7],_=s[8],v=s[9],g=s[10],d=s[11],p=s[12],x=s[13],y=s[14],T=s[15];if(r[0].setComponents(c-o,m-f,d-_,T-p).normalize(),r[1].setComponents(c+o,m+f,d+_,T+p).normalize(),r[2].setComponents(c+a,m+h,d+v,T+x).normalize(),r[3].setComponents(c-a,m-h,d-v,T-x).normalize(),i)r[4].setComponents(l,u,g,y).normalize(),r[5].setComponents(c-l,m-u,d-g,T-y).normalize();else if(r[4].setComponents(c-l,m-u,d-g,T-y).normalize(),n===gi)r[5].setComponents(c+l,m+u,d+g,T+y).normalize();else if(n===ya)r[5].setComponents(l,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(e){Dr.center.set(0,0,0);const n=mE.distanceTo(e.center);return Dr.radius=.7071067811865476+n,Dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(_l.x=r.normal.x>0?e.max.x:e.min.x,_l.y=r.normal.y>0?e.max.y:e.min.y,_l.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_l)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jc extends Rr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const wc=new D,Ac=new D,mg=new ut,Lo=new fp,vl=new rs,ed=new D,gg=new D;class gE extends Xt{constructor(e=new It,n=new jc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)wc.fromBufferAttribute(n,r-1),Ac.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=wc.distanceTo(Ac);e.setAttribute("lineDistance",new _t(i,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vl.copy(i.boundingSphere),vl.applyMatrix4(r),vl.radius+=s,e.ray.intersectsSphere(vl)===!1)return;mg.copy(r).invert(),Lo.copy(e.ray).applyMatrix4(mg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,f=i.index,u=i.attributes.position;if(f!==null){const m=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let v=m,g=_-1;v<g;v+=c){const d=f.getX(v),p=f.getX(v+1),x=xl(this,e,Lo,l,d,p,v);x&&n.push(x)}if(this.isLineLoop){const v=f.getX(_-1),g=f.getX(m),d=xl(this,e,Lo,l,v,g,_-1);d&&n.push(d)}}else{const m=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let v=m,g=_-1;v<g;v+=c){const d=xl(this,e,Lo,l,v,v+1,v);d&&n.push(d)}if(this.isLineLoop){const v=xl(this,e,Lo,l,_-1,m,_-1);v&&n.push(v)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function xl(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(wc.fromBufferAttribute(a,r),Ac.fromBufferAttribute(a,s),n.distanceSqToSegment(wc,Ac,ed,gg)>i)return;ed.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(ed);if(!(c<e.near||c>e.far))return{distance:c,point:gg.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const _g=new D,vg=new D;class pp extends gE{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)_g.fromBufferAttribute(n,r),vg.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+_g.distanceTo(vg);e.setAttribute("lineDistance",new _t(i,1))}else Ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Xc extends Rr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const xg=new ut,Zf=new fp,yl=new rs,Sl=new D;class mp extends Xt{constructor(e=new It,n=new Xc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yl.copy(i.boundingSphere),yl.applyMatrix4(r),yl.radius+=s,e.ray.intersectsSphere(yl)===!1)return;xg.copy(r).invert(),Zf.copy(e.ray).applyMatrix4(xg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const u=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let _=u,v=m;_<v;_++){const g=c.getX(_);Sl.fromBufferAttribute(h,g),yg(Sl,g,l,r,e,n,this)}}else{const u=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=u,v=m;_<v;_++)Sl.fromBufferAttribute(h,_),yg(Sl,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function yg(t,e,n,i,r,s,o){const a=Zf.distanceSqToPoint(t);if(a<n){const l=new D;Zf.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class jv extends an{constructor(e=[],n=es,i,r,s,o,a,l,c,f){super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xv extends an{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Sa extends an{constructor(e,n,i=Mi,r,s,o,a=$t,l=$t,c,f=qi,h=1){if(f!==qi&&f!==Xr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:h};super(u,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new cp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class _E extends Sa{constructor(e,n=Mi,i=es,r,s,o=$t,a=$t,l,c=qi){const f={width:e,height:e,depth:1},h=[f,f,f,f,f,f];super(e,e,n,i,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Yv extends an{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ss extends It{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],h=[];let u=0,m=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(f,3)),this.setAttribute("uv",new _t(h,2));function _(v,g,d,p,x,y,T,A,C,S,E){const U=y/C,I=T/S,b=y/2,P=T/2,H=A/2,V=C+1,G=S+1;let O=0,z=0;const W=new D;for(let J=0;J<G;J++){const ee=J*I-P;for(let te=0;te<V;te++){const Pe=te*U-b;W[v]=Pe*p,W[g]=ee*x,W[d]=H,c.push(W.x,W.y,W.z),W[v]=0,W[g]=0,W[d]=A>0?1:-1,f.push(W.x,W.y,W.z),h.push(te/C),h.push(1-J/S),O+=1}}for(let J=0;J<S;J++)for(let ee=0;ee<C;ee++){const te=u+ee+V*J,Pe=u+ee+V*(J+1),Ye=u+(ee+1)+V*(J+1),Xe=u+(ee+1)+V*J;l.push(te,Pe,Xe),l.push(Pe,Ye,Xe),z+=6}a.addGroup(m,z,E),m+=z,u+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ss(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Yc extends It{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],h=[],u=[],m=[];let _=0;const v=[],g=i/2;let d=0;p(),o===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(f),this.setAttribute("position",new _t(h,3)),this.setAttribute("normal",new _t(u,3)),this.setAttribute("uv",new _t(m,2));function p(){const y=new D,T=new D;let A=0;const C=(n-e)/i;for(let S=0;S<=s;S++){const E=[],U=S/s,I=U*(n-e)+e;for(let b=0;b<=r;b++){const P=b/r,H=P*l+a,V=Math.sin(H),G=Math.cos(H);T.x=I*V,T.y=-U*i+g,T.z=I*G,h.push(T.x,T.y,T.z),y.set(V,C,G).normalize(),u.push(y.x,y.y,y.z),m.push(P,1-U),E.push(_++)}v.push(E)}for(let S=0;S<r;S++)for(let E=0;E<s;E++){const U=v[E][S],I=v[E+1][S],b=v[E+1][S+1],P=v[E][S+1];(e>0||E!==0)&&(f.push(U,I,P),A+=3),(n>0||E!==s-1)&&(f.push(I,b,P),A+=3)}c.addGroup(d,A,0),d+=A}function x(y){const T=_,A=new Fe,C=new D;let S=0;const E=y===!0?e:n,U=y===!0?1:-1;for(let b=1;b<=r;b++)h.push(0,g*U,0),u.push(0,U,0),m.push(.5,.5),_++;const I=_;for(let b=0;b<=r;b++){const H=b/r*l+a,V=Math.cos(H),G=Math.sin(H);C.x=E*G,C.y=g*U,C.z=E*V,h.push(C.x,C.y,C.z),u.push(0,U,0),A.x=V*.5+.5,A.y=G*.5*U+.5,m.push(A.x,A.y),_++}for(let b=0;b<r;b++){const P=T+b,H=I+b;y===!0?f.push(H,H+1,P):f.push(H+1,H,P),S+=3}c.addGroup(d,S,y===!0?1:2),d+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qc extends Yc{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new qc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class gp extends It{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),f(),this.setAttribute("position",new _t(s,3)),this.setAttribute("normal",new _t(s.slice(),3)),this.setAttribute("uv",new _t(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(p){const x=new D,y=new D,T=new D;for(let A=0;A<n.length;A+=3)m(n[A+0],x),m(n[A+1],y),m(n[A+2],T),l(x,y,T,p)}function l(p,x,y,T){const A=T+1,C=[];for(let S=0;S<=A;S++){C[S]=[];const E=p.clone().lerp(y,S/A),U=x.clone().lerp(y,S/A),I=A-S;for(let b=0;b<=I;b++)b===0&&S===A?C[S][b]=E:C[S][b]=E.clone().lerp(U,b/I)}for(let S=0;S<A;S++)for(let E=0;E<2*(A-S)-1;E++){const U=Math.floor(E/2);E%2===0?(u(C[S][U+1]),u(C[S+1][U]),u(C[S][U])):(u(C[S][U+1]),u(C[S+1][U+1]),u(C[S+1][U]))}}function c(p){const x=new D;for(let y=0;y<s.length;y+=3)x.x=s[y+0],x.y=s[y+1],x.z=s[y+2],x.normalize().multiplyScalar(p),s[y+0]=x.x,s[y+1]=x.y,s[y+2]=x.z}function f(){const p=new D;for(let x=0;x<s.length;x+=3){p.x=s[x+0],p.y=s[x+1],p.z=s[x+2];const y=g(p)/2/Math.PI+.5,T=d(p)/Math.PI+.5;o.push(y,1-T)}_(),h()}function h(){for(let p=0;p<o.length;p+=6){const x=o[p+0],y=o[p+2],T=o[p+4],A=Math.max(x,y,T),C=Math.min(x,y,T);A>.9&&C<.1&&(x<.2&&(o[p+0]+=1),y<.2&&(o[p+2]+=1),T<.2&&(o[p+4]+=1))}}function u(p){s.push(p.x,p.y,p.z)}function m(p,x){const y=p*3;x.x=e[y+0],x.y=e[y+1],x.z=e[y+2]}function _(){const p=new D,x=new D,y=new D,T=new D,A=new Fe,C=new Fe,S=new Fe;for(let E=0,U=0;E<s.length;E+=9,U+=6){p.set(s[E+0],s[E+1],s[E+2]),x.set(s[E+3],s[E+4],s[E+5]),y.set(s[E+6],s[E+7],s[E+8]),A.set(o[U+0],o[U+1]),C.set(o[U+2],o[U+3]),S.set(o[U+4],o[U+5]),T.copy(p).add(x).add(y).divideScalar(3);const I=g(T);v(A,U+0,p,I),v(C,U+2,x,I),v(S,U+4,y,I)}}function v(p,x,y,T){T<0&&p.x===1&&(o[x]=p.x-1),y.x===0&&y.z===0&&(o[x]=T/2/Math.PI+.5)}function g(p){return Math.atan2(p.z,-p.x)}function d(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gp(e.vertices,e.indices,e.radius,e.detail)}}const Ml=new D,El=new D,td=new D,Tl=new Ln;class qv extends It{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(Yl*n),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],f=["a","b","c"],h=new Array(3),u={},m=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:v,b:g,c:d}=Tl;if(v.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),d.fromBufferAttribute(a,c[2]),Tl.getNormal(td),h[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,h[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,h[2]=`${Math.round(d.x*r)},${Math.round(d.y*r)},${Math.round(d.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let p=0;p<3;p++){const x=(p+1)%3,y=h[p],T=h[x],A=Tl[f[p]],C=Tl[f[x]],S=`${y}_${T}`,E=`${T}_${y}`;E in u&&u[E]?(td.dot(u[E].normal)<=s&&(m.push(A.x,A.y,A.z),m.push(C.x,C.y,C.z)),u[E]=null):S in u||(u[S]={index0:c[p],index1:c[x],normal:td.clone()})}}for(const _ in u)if(u[_]){const{index0:v,index1:g}=u[_];Ml.fromBufferAttribute(a,v),El.fromBufferAttribute(a,g),m.push(Ml.x,Ml.y,Ml.z),m.push(El.x,El.y,El.z)}this.setAttribute("position",new _t(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ba extends gp{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new ba(e.radius,e.detail)}}class $c extends It{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,h=e/a,u=n/l,m=[],_=[],v=[],g=[];for(let d=0;d<f;d++){const p=d*u-o;for(let x=0;x<c;x++){const y=x*h-s;_.push(y,-p,0),v.push(0,0,1),g.push(x/a),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let p=0;p<a;p++){const x=p+c*d,y=p+c*(d+1),T=p+1+c*(d+1),A=p+1+c*d;m.push(x,y,A),m.push(y,T,A)}this.setIndex(m),this.setAttribute("position",new _t(_,3)),this.setAttribute("normal",new _t(v,3)),this.setAttribute("uv",new _t(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $c(e.width,e.height,e.widthSegments,e.heightSegments)}}class _p extends It{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],f=[];let h=e;const u=(n-e)/r,m=new D,_=new Fe;for(let v=0;v<=r;v++){for(let g=0;g<=i;g++){const d=s+g/i*o;m.x=h*Math.cos(d),m.y=h*Math.sin(d),l.push(m.x,m.y,m.z),c.push(0,0,1),_.x=(m.x/n+1)/2,_.y=(m.y/n+1)/2,f.push(_.x,_.y)}h+=u}for(let v=0;v<r;v++){const g=v*(i+1);for(let d=0;d<i;d++){const p=d+g,x=p,y=p+i+1,T=p+i+2,A=p+1;a.push(x,y,A),a.push(y,T,A)}}this.setIndex(a),this.setAttribute("position",new _t(l,3)),this.setAttribute("normal",new _t(c,3)),this.setAttribute("uv",new _t(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _p(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class vp extends It{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],h=new D,u=new D,m=[],_=[],v=[],g=[];for(let d=0;d<=i;d++){const p=[],x=d/i;let y=0;d===0&&o===0?y=.5/n:d===i&&l===Math.PI&&(y=-.5/n);for(let T=0;T<=n;T++){const A=T/n;h.x=-e*Math.cos(r+A*s)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(r+A*s)*Math.sin(o+x*a),_.push(h.x,h.y,h.z),u.copy(h).normalize(),v.push(u.x,u.y,u.z),g.push(A+y,1-x),p.push(c++)}f.push(p)}for(let d=0;d<i;d++)for(let p=0;p<n;p++){const x=f[d][p+1],y=f[d][p],T=f[d+1][p],A=f[d+1][p+1];(d!==0||o>0)&&m.push(x,y,A),(d!==i-1||l<Math.PI)&&m.push(y,T,A)}this.setIndex(m),this.setAttribute("position",new _t(_,3)),this.setAttribute("normal",new _t(v,3)),this.setAttribute("uv",new _t(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function oo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function fn(t){const e={};for(let n=0;n<t.length;n++){const i=oo(t[n]);for(const r in i)e[r]=i[r]}return e}function vE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function $v(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const xE={clone:oo,merge:fn};var yE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,SE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ti extends Rr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yE,this.fragmentShader=SE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oo(e.uniforms),this.uniformsGroups=vE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class ME extends Ti{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class xp extends Rr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uv,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=Qh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class EE extends Rr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=IM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class TE extends Rr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Kv extends Xt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const nd=new ut,Sg=new D,Mg=new D;class wE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hp,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Sg.setFromMatrixPosition(e.matrixWorld),n.position.copy(Sg),Mg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Mg),n.updateMatrixWorld(),nd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nd,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===ya||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(nd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const wl=new D,Al=new fo,ci=new D;class Zv extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wl,Al,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wl,Al,ci.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(wl,Al,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wl,Al,ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const rr=new D,Eg=new Fe,Tg=new Fe;class bn extends Zv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Kf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kf*2*Math.atan(Math.tan(Yl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rr.x,rr.y).multiplyScalar(-e/rr.z),rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rr.x,rr.y).multiplyScalar(-e/rr.z)}getViewSize(e,n){return this.getViewBounds(e,Eg,Tg),n.subVectors(Tg,Eg)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Yl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class AE extends wE{constructor(){super(new bn(90,1,.5,500)),this.isPointLightShadow=!0}}class CE extends Kv{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new AE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Jv extends Zv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class RE extends Kv{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const ws=-90,As=1;class bE extends Xt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new bn(ws,As,e,n);r.layers=this.layers,this.add(r);const s=new bn(ws,As,e,n);s.layers=this.layers,this.add(s);const o=new bn(ws,As,e,n);o.layers=this.layers,this.add(o);const a=new bn(ws,As,e,n);a.layers=this.layers,this.add(a);const l=new bn(ws,As,e,n);l.layers=this.layers,this.add(l);const c=new bn(ws,As,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===gi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ya)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(h,u,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class PE extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function wg(t,e,n,i){const r=LE(i);switch(n){case Nv:return t*e;case ip:return t*e/r.components*r.byteLength;case rp:return t*e/r.components*r.byteLength;case ro:return t*e*2/r.components*r.byteLength;case sp:return t*e*2/r.components*r.byteLength;case Dv:return t*e*3/r.components*r.byteLength;case ii:return t*e*4/r.components*r.byteLength;case op:return t*e*4/r.components*r.byteLength;case Hl:case Wl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case jl:case Xl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case vf:case yf:return Math.max(t,16)*Math.max(e,8)/4;case _f:case xf:return Math.max(t,8)*Math.max(e,8)/2;case Sf:case Mf:case Tf:case wf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ef:case Af:case Cf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Rf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case bf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Pf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Lf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case If:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Nf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Df:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Uf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Ff:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Of:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Bf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case kf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case zf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Vf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Gf:case Hf:case Wf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case jf:case Xf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Yf:case qf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function LE(t){switch(t){case Pn:case bv:return{byteLength:1,components:1};case va:case Pv:case Yi:return{byteLength:2,components:1};case tp:case np:return{byteLength:2,components:4};case Mi:case ep:case ni:return{byteLength:4,components:1};case Lv:case Iv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jh}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Qv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function IE(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,h=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,f),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const f=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,f);else{h.sort((m,_)=>m.start-_.start);let u=0;for(let m=1;m<h.length;m++){const _=h[u],v=h[m];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++u,h[u]=v)}h.length=u+1;for(let m=0,_=h.length;m<_;m++){const v=h[m];t.bufferSubData(c,v.start*f.BYTES_PER_ELEMENT,f,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var NE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,DE=`#ifdef USE_ALPHAHASH
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
#endif`,UE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,FE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,BE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kE=`#ifdef USE_AOMAP
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
#endif`,zE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,VE=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,GE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,HE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,WE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,XE=`#ifdef USE_IRIDESCENCE
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
#endif`,YE=`#ifdef USE_BUMPMAP
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
#endif`,qE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$E=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,KE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ZE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,JE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,QE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,e1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,t1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,n1=`#define PI 3.141592653589793
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
} // validated`,i1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,r1=`vec3 transformedNormal = objectNormal;
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
#endif`,s1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,o1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,a1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,l1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,c1="gl_FragColor = linearToOutputTexel( gl_FragColor );",u1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,d1=`#ifdef USE_ENVMAP
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
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,f1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,h1=`#ifdef USE_ENVMAP
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
#endif`,p1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,m1=`#ifdef USE_ENVMAP
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
#endif`,g1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,v1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,x1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,y1=`#ifdef USE_GRADIENTMAP
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
}`,S1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,M1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,E1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,T1=`uniform bool receiveShadow;
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
#endif`,w1=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,A1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,C1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,R1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,b1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,P1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,L1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,I1=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,N1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,D1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,U1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,F1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,k1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,z1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,V1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,G1=`#if defined( USE_POINTS_UV )
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
#endif`,H1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,W1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,j1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,X1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Y1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q1=`#ifdef USE_MORPHTARGETS
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
#endif`,$1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Z1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,J1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tT=`#ifdef USE_NORMALMAP
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
#endif`,nT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,lT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,mT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_T=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,vT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xT=`#ifdef USE_SKINNING
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
#endif`,yT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ST=`#ifdef USE_SKINNING
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
#endif`,MT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ET=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,TT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,AT=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,CT=`#ifdef USE_TRANSMISSION
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
#endif`,RT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const IT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NT=`uniform sampler2D t2D;
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
}`,DT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,FT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BT=`#include <common>
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
}`,kT=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,zT=`#define DISTANCE
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
}`,VT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,GT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WT=`uniform float scale;
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
}`,jT=`uniform vec3 diffuse;
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
}`,XT=`#include <common>
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
}`,YT=`uniform vec3 diffuse;
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
}`,qT=`#define LAMBERT
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
}`,$T=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,KT=`#define MATCAP
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
}`,ZT=`#define MATCAP
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
}`,JT=`#define NORMAL
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
}`,QT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ew=`#define PHONG
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
}`,tw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,nw=`#define STANDARD
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
}`,iw=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,rw=`#define TOON
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
}`,sw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,ow=`uniform float size;
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
}`,aw=`uniform vec3 diffuse;
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
}`,lw=`#include <common>
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
}`,cw=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,uw=`uniform float rotation;
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
}`,dw=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:NE,alphahash_pars_fragment:DE,alphamap_fragment:UE,alphamap_pars_fragment:FE,alphatest_fragment:OE,alphatest_pars_fragment:BE,aomap_fragment:kE,aomap_pars_fragment:zE,batching_pars_vertex:VE,batching_vertex:GE,begin_vertex:HE,beginnormal_vertex:WE,bsdfs:jE,iridescence_fragment:XE,bumpmap_pars_fragment:YE,clipping_planes_fragment:qE,clipping_planes_pars_fragment:$E,clipping_planes_pars_vertex:KE,clipping_planes_vertex:ZE,color_fragment:JE,color_pars_fragment:QE,color_pars_vertex:e1,color_vertex:t1,common:n1,cube_uv_reflection_fragment:i1,defaultnormal_vertex:r1,displacementmap_pars_vertex:s1,displacementmap_vertex:o1,emissivemap_fragment:a1,emissivemap_pars_fragment:l1,colorspace_fragment:c1,colorspace_pars_fragment:u1,envmap_fragment:d1,envmap_common_pars_fragment:f1,envmap_pars_fragment:h1,envmap_pars_vertex:p1,envmap_physical_pars_fragment:w1,envmap_vertex:m1,fog_vertex:g1,fog_pars_vertex:_1,fog_fragment:v1,fog_pars_fragment:x1,gradientmap_pars_fragment:y1,lightmap_pars_fragment:S1,lights_lambert_fragment:M1,lights_lambert_pars_fragment:E1,lights_pars_begin:T1,lights_toon_fragment:A1,lights_toon_pars_fragment:C1,lights_phong_fragment:R1,lights_phong_pars_fragment:b1,lights_physical_fragment:P1,lights_physical_pars_fragment:L1,lights_fragment_begin:I1,lights_fragment_maps:N1,lights_fragment_end:D1,logdepthbuf_fragment:U1,logdepthbuf_pars_fragment:F1,logdepthbuf_pars_vertex:O1,logdepthbuf_vertex:B1,map_fragment:k1,map_pars_fragment:z1,map_particle_fragment:V1,map_particle_pars_fragment:G1,metalnessmap_fragment:H1,metalnessmap_pars_fragment:W1,morphinstance_vertex:j1,morphcolor_vertex:X1,morphnormal_vertex:Y1,morphtarget_pars_vertex:q1,morphtarget_vertex:$1,normal_fragment_begin:K1,normal_fragment_maps:Z1,normal_pars_fragment:J1,normal_pars_vertex:Q1,normal_vertex:eT,normalmap_pars_fragment:tT,clearcoat_normal_fragment_begin:nT,clearcoat_normal_fragment_maps:iT,clearcoat_pars_fragment:rT,iridescence_pars_fragment:sT,opaque_fragment:oT,packing:aT,premultiplied_alpha_fragment:lT,project_vertex:cT,dithering_fragment:uT,dithering_pars_fragment:dT,roughnessmap_fragment:fT,roughnessmap_pars_fragment:hT,shadowmap_pars_fragment:pT,shadowmap_pars_vertex:mT,shadowmap_vertex:gT,shadowmask_pars_fragment:_T,skinbase_vertex:vT,skinning_pars_vertex:xT,skinning_vertex:yT,skinnormal_vertex:ST,specularmap_fragment:MT,specularmap_pars_fragment:ET,tonemapping_fragment:TT,tonemapping_pars_fragment:wT,transmission_fragment:AT,transmission_pars_fragment:CT,uv_pars_fragment:RT,uv_pars_vertex:bT,uv_vertex:PT,worldpos_vertex:LT,background_vert:IT,background_frag:NT,backgroundCube_vert:DT,backgroundCube_frag:UT,cube_vert:FT,cube_frag:OT,depth_vert:BT,depth_frag:kT,distance_vert:zT,distance_frag:VT,equirect_vert:GT,equirect_frag:HT,linedashed_vert:WT,linedashed_frag:jT,meshbasic_vert:XT,meshbasic_frag:YT,meshlambert_vert:qT,meshlambert_frag:$T,meshmatcap_vert:KT,meshmatcap_frag:ZT,meshnormal_vert:JT,meshnormal_frag:QT,meshphong_vert:ew,meshphong_frag:tw,meshphysical_vert:nw,meshphysical_frag:iw,meshtoon_vert:rw,meshtoon_frag:sw,points_vert:ow,points_frag:aw,shadow_vert:lw,shadow_frag:cw,sprite_vert:uw,sprite_frag:dw},de={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},fi={basic:{uniforms:fn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:fn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:fn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:fn([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:fn([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:fn([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:fn([de.points,de.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:fn([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:fn([de.common,de.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:fn([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:fn([de.sprite,de.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:fn([de.common,de.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:fn([de.lights,de.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};fi.physical={uniforms:fn([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Cl={r:0,b:0,g:0},Ur=new Ei,fw=new ut;function hw(t,e,n,i,r,s){const o=new Be(0);let a=r===!0?0:1,l,c,f=null,h=0,u=null;function m(p){let x=p.isScene===!0?p.background:null;if(x&&x.isTexture){const y=p.backgroundBlurriness>0;x=e.get(x,y)}return x}function _(p){let x=!1;const y=m(p);y===null?g(o,a):y&&y.isColor&&(g(y,1),x=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function v(p,x){const y=m(x);y&&(y.isCubeTexture||y.mapping===Hc)?(c===void 0&&(c=new gn(new ss(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:oo(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),Ur.copy(x.backgroundRotation),Ur.x*=-1,Ur.y*=-1,Ur.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ur.y*=-1,Ur.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(fw.makeRotationFromEuler(Ur)),c.material.toneMapped=Ze.getTransfer(y.colorSpace)!==rt,(f!==y||h!==y.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,f=y,h=y.version,u=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new gn(new $c(2,2),new Ti({name:"BackgroundMaterial",uniforms:oo(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(y.colorSpace)!==rt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,f=y,h=y.version,u=t.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function g(p,x){p.getRGB(Cl,$v(t)),n.buffers.color.setClear(Cl.r,Cl.g,Cl.b,x,s)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(p,x=1){o.set(p),a=x,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,g(o,a)},render:_,addToRenderList:v,dispose:d}}function pw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,o=!1;function a(I,b,P,H,V){let G=!1;const O=h(I,H,P,b);s!==O&&(s=O,c(s.object)),G=m(I,H,P,V),G&&_(I,H,P,V),V!==null&&e.update(V,t.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,y(I,b,P,H),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return t.createVertexArray()}function c(I){return t.bindVertexArray(I)}function f(I){return t.deleteVertexArray(I)}function h(I,b,P,H){const V=H.wireframe===!0;let G=i[b.id];G===void 0&&(G={},i[b.id]=G);const O=I.isInstancedMesh===!0?I.id:0;let z=G[O];z===void 0&&(z={},G[O]=z);let W=z[P.id];W===void 0&&(W={},z[P.id]=W);let J=W[V];return J===void 0&&(J=u(l()),W[V]=J),J}function u(I){const b=[],P=[],H=[];for(let V=0;V<n;V++)b[V]=0,P[V]=0,H[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:P,attributeDivisors:H,object:I,attributes:{},index:null}}function m(I,b,P,H){const V=s.attributes,G=b.attributes;let O=0;const z=P.getAttributes();for(const W in z)if(z[W].location>=0){const ee=V[W];let te=G[W];if(te===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(te=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(te=I.instanceColor)),ee===void 0||ee.attribute!==te||te&&ee.data!==te.data)return!0;O++}return s.attributesNum!==O||s.index!==H}function _(I,b,P,H){const V={},G=b.attributes;let O=0;const z=P.getAttributes();for(const W in z)if(z[W].location>=0){let ee=G[W];ee===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(ee=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(ee=I.instanceColor));const te={};te.attribute=ee,ee&&ee.data&&(te.data=ee.data),V[W]=te,O++}s.attributes=V,s.attributesNum=O,s.index=H}function v(){const I=s.newAttributes;for(let b=0,P=I.length;b<P;b++)I[b]=0}function g(I){d(I,0)}function d(I,b){const P=s.newAttributes,H=s.enabledAttributes,V=s.attributeDivisors;P[I]=1,H[I]===0&&(t.enableVertexAttribArray(I),H[I]=1),V[I]!==b&&(t.vertexAttribDivisor(I,b),V[I]=b)}function p(){const I=s.newAttributes,b=s.enabledAttributes;for(let P=0,H=b.length;P<H;P++)b[P]!==I[P]&&(t.disableVertexAttribArray(P),b[P]=0)}function x(I,b,P,H,V,G,O){O===!0?t.vertexAttribIPointer(I,b,P,V,G):t.vertexAttribPointer(I,b,P,H,V,G)}function y(I,b,P,H){v();const V=H.attributes,G=P.getAttributes(),O=b.defaultAttributeValues;for(const z in G){const W=G[z];if(W.location>=0){let J=V[z];if(J===void 0&&(z==="instanceMatrix"&&I.instanceMatrix&&(J=I.instanceMatrix),z==="instanceColor"&&I.instanceColor&&(J=I.instanceColor)),J!==void 0){const ee=J.normalized,te=J.itemSize,Pe=e.get(J);if(Pe===void 0)continue;const Ye=Pe.buffer,Xe=Pe.type,q=Pe.bytesPerElement,re=Xe===t.INT||Xe===t.UNSIGNED_INT||J.gpuType===ep;if(J.isInterleavedBufferAttribute){const le=J.data,Ne=le.stride,be=J.offset;if(le.isInstancedInterleavedBuffer){for(let De=0;De<W.locationSize;De++)d(W.location+De,le.meshPerAttribute);I.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let De=0;De<W.locationSize;De++)g(W.location+De);t.bindBuffer(t.ARRAY_BUFFER,Ye);for(let De=0;De<W.locationSize;De++)x(W.location+De,te/W.locationSize,Xe,ee,Ne*q,(be+te/W.locationSize*De)*q,re)}else{if(J.isInstancedBufferAttribute){for(let le=0;le<W.locationSize;le++)d(W.location+le,J.meshPerAttribute);I.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let le=0;le<W.locationSize;le++)g(W.location+le);t.bindBuffer(t.ARRAY_BUFFER,Ye);for(let le=0;le<W.locationSize;le++)x(W.location+le,te/W.locationSize,Xe,ee,te*q,te/W.locationSize*le*q,re)}}else if(O!==void 0){const ee=O[z];if(ee!==void 0)switch(ee.length){case 2:t.vertexAttrib2fv(W.location,ee);break;case 3:t.vertexAttrib3fv(W.location,ee);break;case 4:t.vertexAttrib4fv(W.location,ee);break;default:t.vertexAttrib1fv(W.location,ee)}}}}p()}function T(){E();for(const I in i){const b=i[I];for(const P in b){const H=b[P];for(const V in H){const G=H[V];for(const O in G)f(G[O].object),delete G[O];delete H[V]}}delete i[I]}}function A(I){if(i[I.id]===void 0)return;const b=i[I.id];for(const P in b){const H=b[P];for(const V in H){const G=H[V];for(const O in G)f(G[O].object),delete G[O];delete H[V]}}delete i[I.id]}function C(I){for(const b in i){const P=i[b];for(const H in P){const V=P[H];if(V[I.id]===void 0)continue;const G=V[I.id];for(const O in G)f(G[O].object),delete G[O];delete V[I.id]}}}function S(I){for(const b in i){const P=i[b],H=I.isInstancedMesh===!0?I.id:0,V=P[H];if(V!==void 0){for(const G in V){const O=V[G];for(const z in O)f(O[z].object),delete O[z];delete V[G]}delete P[H],Object.keys(P).length===0&&delete i[b]}}}function E(){U(),o=!0,s!==r&&(s=r,c(s.object))}function U(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:E,resetDefaultState:U,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:S,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:g,disableUnusedAttributes:p}}function mw(t,e,n){let i;function r(c){i=c}function s(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function o(c,f,h){h!==0&&(t.drawArraysInstanced(i,c,f,h),n.update(f,i,h))}function a(c,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,h);let m=0;for(let _=0;_<h;_++)m+=f[_];n.update(m,i,1)}function l(c,f,h,u){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)o(c[_],f[_],u[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,f,0,u,0,h);let _=0;for(let v=0;v<h;v++)_+=f[v]*u[v];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function gw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==ii&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const S=C===Yi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Pn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ni&&!S)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(Ie("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:p,maxVaryings:x,maxFragmentUniforms:y,maxSamples:T,samples:A}}function _w(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new kr,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const m=h.length!==0||u||i!==0||r;return r=u,i=h.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){n=f(h,u,0)},this.setState=function(h,u,m){const _=h.clippingPlanes,v=h.clipIntersection,g=h.clipShadows,d=t.get(h);if(!r||_===null||_.length===0||s&&!g)s?f(null):c();else{const p=s?0:i,x=p*4;let y=d.clippingState||null;l.value=y,y=f(_,u,x,m);for(let T=0;T!==x;++T)y[T]=n[T];d.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=p}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,u,m,_){const v=h!==null?h.length:0;let g=null;if(v!==0){if(g=l.value,_!==!0||g===null){const d=m+v*4,p=u.matrixWorldInverse;a.getNormalMatrix(p),(g===null||g.length<d)&&(g=new Float32Array(d));for(let x=0,y=m;x!==v;++x,y+=4)o.copy(h[x]).applyMatrix4(p,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}const fr=4,Ag=[.125,.215,.35,.446,.526,.582],Vr=20,vw=256,Io=new Jv,Cg=new Be;let id=null,rd=0,sd=0,od=!1;const xw=new D;class Rg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=xw}=s;id=this._renderer.getRenderTarget(),rd=this._renderer.getActiveCubeFace(),sd=this._renderer.getActiveMipmapLevel(),od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(id,rd,sd),this._renderer.xr.enabled=od,e.scissorTest=!1,Cs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===es||e.mapping===io?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),id=this._renderer.getRenderTarget(),rd=this._renderer.getActiveCubeFace(),sd=this._renderer.getActiveMipmapLevel(),od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:on,minFilter:on,generateMipmaps:!1,type:Yi,format:ii,colorSpace:so,depthBuffer:!1},r=bg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bg(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=yw(s)),this._blurMaterial=Mw(s,e,n),this._ggxMaterial=Sw(s,e,n)}return r}_compileMaterial(e){const n=new gn(new It,e);this._renderer.compile(n,Io)}_sceneToCubeUV(e,n,i,r,s){const l=new bn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,m=h.toneMapping;h.getClearColor(Cg),h.toneMapping=yi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new gn(new ss,new Wc({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,g=v.material;let d=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,d=!0):(g.color.copy(Cg),d=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[x],s.y,s.z)):y===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[x]));const T=this._cubeSize;Cs(r,y*T,x>2?T:0,T,T),h.setRenderTarget(r),d&&h.render(v,l),h.render(e,l)}h.toneMapping=m,h.autoClear=u,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===es||e.mapping===io;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Cs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Io)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-f*f),u=0+c*1.25,m=h*u,{_lodMax:_}=this,v=this._sizeLods[i],g=3*v*(i>_-fr?i-_+fr:0),d=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=_-n,Cs(s,g,d,3*v,2*v),r.setRenderTarget(s),r.render(a,Io),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,Cs(e,g,d,3*v,2*v),r.setRenderTarget(e),r.render(a,Io)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ke("blur direction must be either latitudinal or longitudinal!");const f=3,h=this._lodMeshes[r];h.material=c;const u=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Vr-1),v=s/_,g=isFinite(s)?1+Math.floor(f*v):Vr;g>Vr&&Ie(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Vr}`);const d=[];let p=0;for(let C=0;C<Vr;++C){const S=C/v,E=Math.exp(-S*S/2);d.push(E),C===0?p+=E:C<g&&(p+=2*E)}for(let C=0;C<d.length;C++)d[C]=d[C]/p;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=d,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:x}=this;u.dTheta.value=_,u.mipInt.value=x-i;const y=this._sizeLods[r],T=3*y*(r>x-fr?r-x+fr:0),A=4*(this._cubeSize-y);Cs(n,T,A,3*y,2*y),l.setRenderTarget(n),l.render(h,Io)}}function yw(t){const e=[],n=[],i=[];let r=t;const s=t-fr+1+Ag.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-fr?l=Ag[o-t+fr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),f=-c,h=1+c,u=[f,f,h,f,h,h,f,f,h,h,f,h],m=6,_=6,v=3,g=2,d=1,p=new Float32Array(v*_*m),x=new Float32Array(g*_*m),y=new Float32Array(d*_*m);for(let A=0;A<m;A++){const C=A%3*2/3-1,S=A>2?0:-1,E=[C,S,0,C+2/3,S,0,C+2/3,S+1,0,C,S,0,C+2/3,S+1,0,C,S+1,0];p.set(E,v*_*A),x.set(u,g*_*A);const U=[A,A,A,A,A,A];y.set(U,d*_*A)}const T=new It;T.setAttribute("position",new ln(p,v)),T.setAttribute("uv",new ln(x,g)),T.setAttribute("faceIndex",new ln(y,d)),i.push(new gn(T,null)),r>fr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function bg(t,e,n){const i=new Si(t,e,n);return i.texture.mapping=Hc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Cs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Sw(t,e,n){return new Ti({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:vw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Kc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Mw(t,e,n){const i=new Float32Array(Vr),r=new D(0,1,0);return new Ti({name:"SphericalGaussianBlur",defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Kc(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Pg(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kc(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Lg(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Kc(){return`

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
	`}class ex extends Si{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new jv(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ss(5,5,5),s=new Ti({name:"CubemapFromEquirect",uniforms:oo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tn,blending:Vi});s.uniforms.tEquirect.value=n;const o=new gn(r,s),a=n.minFilter;return n.minFilter===jr&&(n.minFilter=on),new bE(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function Ew(t){let e=new WeakMap,n=new WeakMap,i=null;function r(u,m=!1){return u==null?null:m?o(u):s(u)}function s(u){if(u&&u.isTexture){const m=u.mapping;if(m===Cu||m===Ru)if(e.has(u)){const _=e.get(u).texture;return a(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const v=new ex(_.height);return v.fromEquirectangularTexture(t,u),e.set(u,v),u.addEventListener("dispose",c),a(v.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const m=u.mapping,_=m===Cu||m===Ru,v=m===es||m===io;if(_||v){let g=n.get(u);const d=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return i===null&&(i=new Rg(t)),g=_?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{const p=u.image;return _&&p&&p.height>0||v&&p&&l(p)?(i===null&&(i=new Rg(t)),g=_?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",f),g.texture):null}}}return u}function a(u,m){return m===Cu?u.mapping=es:m===Ru&&(u.mapping=io),u}function l(u){let m=0;const _=6;for(let v=0;v<_;v++)u[v]!==void 0&&m++;return m===_}function c(u){const m=u.target;m.removeEventListener("dispose",c);const _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function f(u){const m=u.target;m.removeEventListener("dispose",f);const _=n.get(m);_!==void 0&&(n.delete(m),_.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function Tw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ec("WebGLRenderer: "+i+" extension not supported."),r}}}function ww(t,e,n,i){const r={},s=new WeakMap;function o(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const _ in u.attributes)e.remove(u.attributes[_]);u.removeEventListener("dispose",o),delete r[u.id];const m=s.get(u);m&&(e.remove(m),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function a(h,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,n.memory.geometries++),u}function l(h){const u=h.attributes;for(const m in u)e.update(u[m],t.ARRAY_BUFFER)}function c(h){const u=[],m=h.index,_=h.attributes.position;let v=0;if(_===void 0)return;if(m!==null){const p=m.array;v=m.version;for(let x=0,y=p.length;x<y;x+=3){const T=p[x+0],A=p[x+1],C=p[x+2];u.push(T,A,A,C,C,T)}}else{const p=_.array;v=_.version;for(let x=0,y=p.length/3-1;x<y;x+=3){const T=x+0,A=x+1,C=x+2;u.push(T,A,A,C,C,T)}}const g=new(_.count>=65535?Vv:zv)(u,1);g.version=v;const d=s.get(h);d&&e.remove(d),s.set(h,g)}function f(h){const u=s.get(h);if(u){const m=h.index;m!==null&&u.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function Aw(t,e,n){let i;function r(u){i=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,m){t.drawElements(i,m,s,u*o),n.update(m,i,1)}function c(u,m,_){_!==0&&(t.drawElementsInstanced(i,m,s,u*o,_),n.update(m,i,_))}function f(u,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,u,0,_);let g=0;for(let d=0;d<_;d++)g+=m[d];n.update(g,i,1)}function h(u,m,_,v){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<u.length;d++)c(u[d]/o,m[d],v[d]);else{g.multiDrawElementsInstancedWEBGL(i,m,0,s,u,0,v,0,_);let d=0;for(let p=0;p<_;p++)d+=m[p]*v[p];n.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function Cw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:Ke("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Rw(t,e,n){const i=new WeakMap,r=new Rt;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0;let u=i.get(a);if(u===void 0||u.count!==h){let U=function(){S.dispose(),i.delete(a),a.removeEventListener("dispose",U)};var m=U;u!==void 0&&u.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;_===!0&&(y=1),v===!0&&(y=2),g===!0&&(y=3);let T=a.attributes.position.count*y,A=1;T>e.maxTextureSize&&(A=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const C=new Float32Array(T*A*4*h),S=new Ov(C,T,A,h);S.type=ni,S.needsUpdate=!0;const E=y*4;for(let I=0;I<h;I++){const b=d[I],P=p[I],H=x[I],V=T*A*4*I;for(let G=0;G<b.count;G++){const O=G*E;_===!0&&(r.fromBufferAttribute(b,G),C[V+O+0]=r.x,C[V+O+1]=r.y,C[V+O+2]=r.z,C[V+O+3]=0),v===!0&&(r.fromBufferAttribute(P,G),C[V+O+4]=r.x,C[V+O+5]=r.y,C[V+O+6]=r.z,C[V+O+7]=0),g===!0&&(r.fromBufferAttribute(H,G),C[V+O+8]=r.x,C[V+O+9]=r.y,C[V+O+10]=r.z,C[V+O+11]=H.itemSize===4?r.w:1)}}u={count:h,texture:S,size:new Fe(T,A)},i.set(a,u),a.addEventListener("dispose",U)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const v=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}function bw(t,e,n,i,r){let s=new WeakMap;function o(c){const f=r.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==f&&(e.update(u),s.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==f&&(m.update(),s.set(m,f))}return u}function a(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:o,dispose:a}}const Pw={[Sv]:"LINEAR_TONE_MAPPING",[Mv]:"REINHARD_TONE_MAPPING",[Ev]:"CINEON_TONE_MAPPING",[Tv]:"ACES_FILMIC_TONE_MAPPING",[Av]:"AGX_TONE_MAPPING",[Cv]:"NEUTRAL_TONE_MAPPING",[wv]:"CUSTOM_TONE_MAPPING"};function Lw(t,e,n,i,r){const s=new Si(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),o=new Si(e,n,{type:Yi,depthBuffer:!1,stencilBuffer:!1}),a=new It;a.setAttribute("position",new _t([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new _t([0,2,0,0,2,0],2));const l=new ME({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new gn(a,l),f=new Jv(-1,1,1,-1,0,1);let h=null,u=null,m=!1,_,v=null,g=[],d=!1;this.setSize=function(p,x){s.setSize(p,x),o.setSize(p,x);for(let y=0;y<g.length;y++){const T=g[y];T.setSize&&T.setSize(p,x)}},this.setEffects=function(p){g=p,d=g.length>0&&g[0].isRenderPass===!0;const x=s.width,y=s.height;for(let T=0;T<g.length;T++){const A=g[T];A.setSize&&A.setSize(x,y)}},this.begin=function(p,x){if(m||p.toneMapping===yi&&g.length===0)return!1;if(v=x,x!==null){const y=x.width,T=x.height;(s.width!==y||s.height!==T)&&this.setSize(y,T)}return d===!1&&p.setRenderTarget(s),_=p.toneMapping,p.toneMapping=yi,!0},this.hasRenderPass=function(){return d},this.end=function(p,x){p.toneMapping=_,m=!0;let y=s,T=o;for(let A=0;A<g.length;A++){const C=g[A];if(C.enabled!==!1&&(C.render(p,T,y,x),C.needsSwap!==!1)){const S=y;y=T,T=S}}if(h!==p.outputColorSpace||u!==p.toneMapping){h=p.outputColorSpace,u=p.toneMapping,l.defines={},Ze.getTransfer(h)===rt&&(l.defines.SRGB_TRANSFER="");const A=Pw[u];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,p.setRenderTarget(v),p.render(c,f),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const tx=new an,Jf=new Sa(1,1),nx=new Ov,ix=new KM,rx=new jv,Ig=[],Ng=[],Dg=new Float32Array(16),Ug=new Float32Array(9),Fg=new Float32Array(4);function ho(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Ig[r];if(s===void 0&&(s=new Float32Array(r),Ig[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function kt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function zt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Zc(t,e){let n=Ng[e];n===void 0&&(n=new Int32Array(e),Ng[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Iw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Nw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2fv(this.addr,e),zt(n,e)}}function Dw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(kt(n,e))return;t.uniform3fv(this.addr,e),zt(n,e)}}function Uw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4fv(this.addr,e),zt(n,e)}}function Fw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),zt(n,e)}else{if(kt(n,i))return;Fg.set(i),t.uniformMatrix2fv(this.addr,!1,Fg),zt(n,i)}}function Ow(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),zt(n,e)}else{if(kt(n,i))return;Ug.set(i),t.uniformMatrix3fv(this.addr,!1,Ug),zt(n,i)}}function Bw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),zt(n,e)}else{if(kt(n,i))return;Dg.set(i),t.uniformMatrix4fv(this.addr,!1,Dg),zt(n,i)}}function kw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function zw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2iv(this.addr,e),zt(n,e)}}function Vw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kt(n,e))return;t.uniform3iv(this.addr,e),zt(n,e)}}function Gw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4iv(this.addr,e),zt(n,e)}}function Hw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Ww(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2uiv(this.addr,e),zt(n,e)}}function jw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kt(n,e))return;t.uniform3uiv(this.addr,e),zt(n,e)}}function Xw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4uiv(this.addr,e),zt(n,e)}}function Yw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Jf.compareFunction=n.isReversedDepthBuffer()?lp:ap,s=Jf):s=tx,n.setTexture2D(e||s,r)}function qw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||ix,r)}function $w(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||rx,r)}function Kw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||nx,r)}function Zw(t){switch(t){case 5126:return Iw;case 35664:return Nw;case 35665:return Dw;case 35666:return Uw;case 35674:return Fw;case 35675:return Ow;case 35676:return Bw;case 5124:case 35670:return kw;case 35667:case 35671:return zw;case 35668:case 35672:return Vw;case 35669:case 35673:return Gw;case 5125:return Hw;case 36294:return Ww;case 36295:return jw;case 36296:return Xw;case 35678:case 36198:case 36298:case 36306:case 35682:return Yw;case 35679:case 36299:case 36307:return qw;case 35680:case 36300:case 36308:case 36293:return $w;case 36289:case 36303:case 36311:case 36292:return Kw}}function Jw(t,e){t.uniform1fv(this.addr,e)}function Qw(t,e){const n=ho(e,this.size,2);t.uniform2fv(this.addr,n)}function eA(t,e){const n=ho(e,this.size,3);t.uniform3fv(this.addr,n)}function tA(t,e){const n=ho(e,this.size,4);t.uniform4fv(this.addr,n)}function nA(t,e){const n=ho(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function iA(t,e){const n=ho(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function rA(t,e){const n=ho(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function sA(t,e){t.uniform1iv(this.addr,e)}function oA(t,e){t.uniform2iv(this.addr,e)}function aA(t,e){t.uniform3iv(this.addr,e)}function lA(t,e){t.uniform4iv(this.addr,e)}function cA(t,e){t.uniform1uiv(this.addr,e)}function uA(t,e){t.uniform2uiv(this.addr,e)}function dA(t,e){t.uniform3uiv(this.addr,e)}function fA(t,e){t.uniform4uiv(this.addr,e)}function hA(t,e,n){const i=this.cache,r=e.length,s=Zc(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=Jf:o=tx;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function pA(t,e,n){const i=this.cache,r=e.length,s=Zc(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||ix,s[o])}function mA(t,e,n){const i=this.cache,r=e.length,s=Zc(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||rx,s[o])}function gA(t,e,n){const i=this.cache,r=e.length,s=Zc(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||nx,s[o])}function _A(t){switch(t){case 5126:return Jw;case 35664:return Qw;case 35665:return eA;case 35666:return tA;case 35674:return nA;case 35675:return iA;case 35676:return rA;case 5124:case 35670:return sA;case 35667:case 35671:return oA;case 35668:case 35672:return aA;case 35669:case 35673:return lA;case 5125:return cA;case 36294:return uA;case 36295:return dA;case 36296:return fA;case 35678:case 36198:case 36298:case 36306:case 35682:return hA;case 35679:case 36299:case 36307:return pA;case 35680:case 36300:case 36308:case 36293:return mA;case 36289:case 36303:case 36311:case 36292:return gA}}class vA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Zw(n.type)}}class xA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=_A(n.type)}}class yA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const ad=/(\w+)(\])?(\[|\.)?/g;function Og(t,e){t.seq.push(e),t.map[e.id]=e}function SA(t,e,n){const i=t.name,r=i.length;for(ad.lastIndex=0;;){const s=ad.exec(i),o=ad.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Og(n,c===void 0?new vA(a,t,e):new xA(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new yA(a),Og(n,h)),n=h}}}class ql{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);SA(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Bg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const MA=37297;let EA=0;function TA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const kg=new ke;function wA(t){Ze._getMatrix(kg,Ze.workingColorSpace,t);const e=`mat3( ${kg.elements.map(n=>n.toFixed(4))} )`;switch(Ze.getTransfer(t)){case yc:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function zg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+TA(t.getShaderSource(e),a)}else return s}function AA(t,e){const n=wA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const CA={[Sv]:"Linear",[Mv]:"Reinhard",[Ev]:"Cineon",[Tv]:"ACESFilmic",[Av]:"AgX",[Cv]:"Neutral",[wv]:"Custom"};function RA(t,e){const n=CA[e];return n===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Rl=new D;function bA(){Ze.getLuminanceCoefficients(Rl);const t=Rl.x.toFixed(4),e=Rl.y.toFixed(4),n=Rl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function PA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function LA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function IA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Vo(t){return t!==""}function Vg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const NA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qf(t){return t.replace(NA,UA)}const DA=new Map;function UA(t,e){let n=Ve[e];if(n===void 0){const i=DA.get(e);if(i!==void 0)n=Ve[i],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Qf(n)}const FA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hg(t){return t.replace(FA,OA)}function OA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Wg(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const BA={[Gl]:"SHADOWMAP_TYPE_PCF",[zo]:"SHADOWMAP_TYPE_VSM"};function kA(t){return BA[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const zA={[es]:"ENVMAP_TYPE_CUBE",[io]:"ENVMAP_TYPE_CUBE",[Hc]:"ENVMAP_TYPE_CUBE_UV"};function VA(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":zA[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const GA={[io]:"ENVMAP_MODE_REFRACTION"};function HA(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":GA[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const WA={[Qh]:"ENVMAP_BLENDING_MULTIPLY",[bM]:"ENVMAP_BLENDING_MIX",[PM]:"ENVMAP_BLENDING_ADD"};function jA(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":WA[t.combine]||"ENVMAP_BLENDING_NONE"}function XA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function YA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=kA(n),c=VA(n),f=HA(n),h=jA(n),u=XA(n),m=PA(n),_=LA(s),v=r.createProgram();let g,d,p=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Vo).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Vo).join(`
`),d.length>0&&(d+=`
`)):(g=[Wg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),d=[Wg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==yi?"#define TONE_MAPPING":"",n.toneMapping!==yi?Ve.tonemapping_pars_fragment:"",n.toneMapping!==yi?RA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,AA("linearToOutputTexel",n.outputColorSpace),bA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Vo).join(`
`)),o=Qf(o),o=Vg(o,n),o=Gg(o,n),a=Qf(a),a=Vg(a,n),a=Gg(a,n),o=Hg(o),a=Hg(a),n.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",n.glslVersion===qm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===qm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=p+g+o,y=p+d+a,T=Bg(r,r.VERTEX_SHADER,x),A=Bg(r,r.FRAGMENT_SHADER,y);r.attachShader(v,T),r.attachShader(v,A),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function C(I){if(t.debug.checkShaderErrors){const b=r.getProgramInfoLog(v)||"",P=r.getShaderInfoLog(T)||"",H=r.getShaderInfoLog(A)||"",V=b.trim(),G=P.trim(),O=H.trim();let z=!0,W=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,T,A);else{const J=zg(r,T,"vertex"),ee=zg(r,A,"fragment");Ke("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+V+`
`+J+`
`+ee)}else V!==""?Ie("WebGLProgram: Program Info Log:",V):(G===""||O==="")&&(W=!1);W&&(I.diagnostics={runnable:z,programLog:V,vertexShader:{log:G,prefix:g},fragmentShader:{log:O,prefix:d}})}r.deleteShader(T),r.deleteShader(A),S=new ql(r,v),E=IA(r,v)}let S;this.getUniforms=function(){return S===void 0&&C(this),S};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let U=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(v,MA)),U},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=EA++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=A,this}let qA=0;class $A{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new KA(e),n.set(e,i)),i}}class KA{constructor(e){this.id=qA++,this.code=e,this.usedTimes=0}}function ZA(t,e,n,i,r,s){const o=new Bv,a=new $A,l=new Set,c=[],f=new Map,h=i.logarithmicDepthBuffer;let u=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function v(S,E,U,I,b){const P=I.fog,H=b.geometry,V=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?I.environment:null,G=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,O=e.get(S.envMap||V,G),z=O&&O.mapping===Hc?O.image.height:null,W=m[S.type];S.precision!==null&&(u=i.getMaxPrecision(S.precision),u!==S.precision&&Ie("WebGLProgram.getParameters:",S.precision,"not supported, using",u,"instead."));const J=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ee=J!==void 0?J.length:0;let te=0;H.morphAttributes.position!==void 0&&(te=1),H.morphAttributes.normal!==void 0&&(te=2),H.morphAttributes.color!==void 0&&(te=3);let Pe,Ye,Xe,q;if(W){const nt=fi[W];Pe=nt.vertexShader,Ye=nt.fragmentShader}else Pe=S.vertexShader,Ye=S.fragmentShader,a.update(S),Xe=a.getVertexShaderID(S),q=a.getFragmentShaderID(S);const re=t.getRenderTarget(),le=t.state.buffers.depth.getReversed(),Ne=b.isInstancedMesh===!0,be=b.isBatchedMesh===!0,De=!!S.map,Vt=!!S.matcap,$e=!!O,tt=!!S.aoMap,dt=!!S.lightMap,Ge=!!S.bumpMap,bt=!!S.normalMap,N=!!S.displacementMap,Nt=!!S.emissiveMap,et=!!S.metalnessMap,pt=!!S.roughnessMap,Te=S.anisotropy>0,R=S.clearcoat>0,M=S.dispersion>0,B=S.iridescence>0,Z=S.sheen>0,Q=S.transmission>0,K=Te&&!!S.anisotropyMap,xe=R&&!!S.clearcoatMap,ce=R&&!!S.clearcoatNormalMap,Re=R&&!!S.clearcoatRoughnessMap,Le=B&&!!S.iridescenceMap,ie=B&&!!S.iridescenceThicknessMap,oe=Z&&!!S.sheenColorMap,ye=Z&&!!S.sheenRoughnessMap,Me=!!S.specularMap,me=!!S.specularColorMap,He=!!S.specularIntensityMap,F=Q&&!!S.transmissionMap,ue=Q&&!!S.thicknessMap,ae=!!S.gradientMap,ve=!!S.alphaMap,se=S.alphaTest>0,$=!!S.alphaHash,Se=!!S.extensions;let Ue=yi;S.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Ue=t.toneMapping);const mt={shaderID:W,shaderType:S.type,shaderName:S.name,vertexShader:Pe,fragmentShader:Ye,defines:S.defines,customVertexShaderID:Xe,customFragmentShaderID:q,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:u,batching:be,batchingColor:be&&b._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&b.instanceColor!==null,instancingMorph:Ne&&b.morphTexture!==null,outputColorSpace:re===null?t.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:so,alphaToCoverage:!!S.alphaToCoverage,map:De,matcap:Vt,envMap:$e,envMapMode:$e&&O.mapping,envMapCubeUVHeight:z,aoMap:tt,lightMap:dt,bumpMap:Ge,normalMap:bt,displacementMap:N,emissiveMap:Nt,normalMapObjectSpace:bt&&S.normalMapType===NM,normalMapTangentSpace:bt&&S.normalMapType===Uv,metalnessMap:et,roughnessMap:pt,anisotropy:Te,anisotropyMap:K,clearcoat:R,clearcoatMap:xe,clearcoatNormalMap:ce,clearcoatRoughnessMap:Re,dispersion:M,iridescence:B,iridescenceMap:Le,iridescenceThicknessMap:ie,sheen:Z,sheenColorMap:oe,sheenRoughnessMap:ye,specularMap:Me,specularColorMap:me,specularIntensityMap:He,transmission:Q,transmissionMap:F,thicknessMap:ue,gradientMap:ae,opaque:S.transparent===!1&&S.blending===Xs&&S.alphaToCoverage===!1,alphaMap:ve,alphaTest:se,alphaHash:$,combine:S.combine,mapUv:De&&_(S.map.channel),aoMapUv:tt&&_(S.aoMap.channel),lightMapUv:dt&&_(S.lightMap.channel),bumpMapUv:Ge&&_(S.bumpMap.channel),normalMapUv:bt&&_(S.normalMap.channel),displacementMapUv:N&&_(S.displacementMap.channel),emissiveMapUv:Nt&&_(S.emissiveMap.channel),metalnessMapUv:et&&_(S.metalnessMap.channel),roughnessMapUv:pt&&_(S.roughnessMap.channel),anisotropyMapUv:K&&_(S.anisotropyMap.channel),clearcoatMapUv:xe&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ce&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:ye&&_(S.sheenRoughnessMap.channel),specularMapUv:Me&&_(S.specularMap.channel),specularColorMapUv:me&&_(S.specularColorMap.channel),specularIntensityMapUv:He&&_(S.specularIntensityMap.channel),transmissionMapUv:F&&_(S.transmissionMap.channel),thicknessMapUv:ue&&_(S.thicknessMap.channel),alphaMapUv:ve&&_(S.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(bt||Te),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:b.isPoints===!0&&!!H.attributes.uv&&(De||ve),fog:!!P,useFog:S.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||H.attributes.normal===void 0&&bt===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:le,skinning:b.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:te,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&U.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ue,decodeVideoTexture:De&&S.map.isVideoTexture===!0&&Ze.getTransfer(S.map.colorSpace)===rt,decodeVideoTextureEmissive:Nt&&S.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(S.emissiveMap.colorSpace)===rt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===pi,flipSided:S.side===Tn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Se&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&S.extensions.multiDraw===!0||be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return mt.vertexUv1s=l.has(1),mt.vertexUv2s=l.has(2),mt.vertexUv3s=l.has(3),l.clear(),mt}function g(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const U in S.defines)E.push(U),E.push(S.defines[U]);return S.isRawShaderMaterial===!1&&(d(E,S),p(E,S),E.push(t.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function d(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function p(S,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),S.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),S.push(o.mask)}function x(S){const E=m[S.type];let U;if(E){const I=fi[E];U=xE.clone(I.uniforms)}else U=S.uniforms;return U}function y(S,E){let U=f.get(E);return U!==void 0?++U.usedTimes:(U=new YA(t,E,S,r),c.push(U),f.set(E,U)),U}function T(S){if(--S.usedTimes===0){const E=c.indexOf(S);c[E]=c[c.length-1],c.pop(),f.delete(S.cacheKey),S.destroy()}}function A(S){a.remove(S)}function C(){a.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:x,acquireProgram:y,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:C}}function JA(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function QA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function jg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Xg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function a(u,m,_,v,g,d){let p=t[e];return p===void 0?(p={id:u.id,object:u,geometry:m,material:_,materialVariant:o(u),groupOrder:v,renderOrder:u.renderOrder,z:g,group:d},t[e]=p):(p.id=u.id,p.object=u,p.geometry=m,p.material=_,p.materialVariant=o(u),p.groupOrder=v,p.renderOrder=u.renderOrder,p.z=g,p.group=d),e++,p}function l(u,m,_,v,g,d){const p=a(u,m,_,v,g,d);_.transmission>0?i.push(p):_.transparent===!0?r.push(p):n.push(p)}function c(u,m,_,v,g,d){const p=a(u,m,_,v,g,d);_.transmission>0?i.unshift(p):_.transparent===!0?r.unshift(p):n.unshift(p)}function f(u,m){n.length>1&&n.sort(u||QA),i.length>1&&i.sort(m||jg),r.length>1&&r.sort(m||jg)}function h(){for(let u=e,m=t.length;u<m;u++){const _=t[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:f}}function eC(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Xg,t.set(i,[o])):r>=s.length?(o=new Xg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function tC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new D,color:new Be};break;case"SpotLight":n={position:new D,direction:new D,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new D,color:new Be,distance:0,decay:0};break;case"HemisphereLight":n={direction:new D,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":n={color:new Be,position:new D,halfWidth:new D,halfHeight:new D};break}return t[e.id]=n,n}}}function nC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let iC=0;function rC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function sC(t){const e=new tC,n=nC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const r=new D,s=new ut,o=new ut;function a(c){let f=0,h=0,u=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let m=0,_=0,v=0,g=0,d=0,p=0,x=0,y=0,T=0,A=0,C=0;c.sort(rC);for(let E=0,U=c.length;E<U;E++){const I=c[E],b=I.color,P=I.intensity,H=I.distance;let V=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===ro?V=I.shadow.map.texture:V=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)f+=b.r*P,h+=b.g*P,u+=b.b*P;else if(I.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(I.sh.coefficients[G],P);C++}else if(I.isDirectionalLight){const G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const O=I.shadow,z=n.get(I);z.shadowIntensity=O.intensity,z.shadowBias=O.bias,z.shadowNormalBias=O.normalBias,z.shadowRadius=O.radius,z.shadowMapSize=O.mapSize,i.directionalShadow[m]=z,i.directionalShadowMap[m]=V,i.directionalShadowMatrix[m]=I.shadow.matrix,p++}i.directional[m]=G,m++}else if(I.isSpotLight){const G=e.get(I);G.position.setFromMatrixPosition(I.matrixWorld),G.color.copy(b).multiplyScalar(P),G.distance=H,G.coneCos=Math.cos(I.angle),G.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),G.decay=I.decay,i.spot[v]=G;const O=I.shadow;if(I.map&&(i.spotLightMap[T]=I.map,T++,O.updateMatrices(I),I.castShadow&&A++),i.spotLightMatrix[v]=O.matrix,I.castShadow){const z=n.get(I);z.shadowIntensity=O.intensity,z.shadowBias=O.bias,z.shadowNormalBias=O.normalBias,z.shadowRadius=O.radius,z.shadowMapSize=O.mapSize,i.spotShadow[v]=z,i.spotShadowMap[v]=V,y++}v++}else if(I.isRectAreaLight){const G=e.get(I);G.color.copy(b).multiplyScalar(P),G.halfWidth.set(I.width*.5,0,0),G.halfHeight.set(0,I.height*.5,0),i.rectArea[g]=G,g++}else if(I.isPointLight){const G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),G.distance=I.distance,G.decay=I.decay,I.castShadow){const O=I.shadow,z=n.get(I);z.shadowIntensity=O.intensity,z.shadowBias=O.bias,z.shadowNormalBias=O.normalBias,z.shadowRadius=O.radius,z.shadowMapSize=O.mapSize,z.shadowCameraNear=O.camera.near,z.shadowCameraFar=O.camera.far,i.pointShadow[_]=z,i.pointShadowMap[_]=V,i.pointShadowMatrix[_]=I.shadow.matrix,x++}i.point[_]=G,_++}else if(I.isHemisphereLight){const G=e.get(I);G.skyColor.copy(I.color).multiplyScalar(P),G.groundColor.copy(I.groundColor).multiplyScalar(P),i.hemi[d]=G,d++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=u;const S=i.hash;(S.directionalLength!==m||S.pointLength!==_||S.spotLength!==v||S.rectAreaLength!==g||S.hemiLength!==d||S.numDirectionalShadows!==p||S.numPointShadows!==x||S.numSpotShadows!==y||S.numSpotMaps!==T||S.numLightProbes!==C)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=g,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=p,i.directionalShadowMap.length=p,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=p,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+T-A,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,S.directionalLength=m,S.pointLength=_,S.spotLength=v,S.rectAreaLength=g,S.hemiLength=d,S.numDirectionalShadows=p,S.numPointShadows=x,S.numSpotShadows=y,S.numSpotMaps=T,S.numLightProbes=C,i.version=iC++)}function l(c,f){let h=0,u=0,m=0,_=0,v=0;const g=f.matrixWorldInverse;for(let d=0,p=c.length;d<p;d++){const x=c[d];if(x.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),h++}else if(x.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),m++}else if(x.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),o.identity(),s.copy(x.matrixWorld),s.premultiply(g),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const y=i.point[u];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),u++}else if(x.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(g),v++}}}return{setup:a,setupView:l,state:i}}function Yg(t){const e=new sC(t),n=[],i=[];function r(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function a(){e.setup(n)}function l(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function oC(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Yg(t),e.set(r,[a])):s>=o.length?(a=new Yg(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const aC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,cC=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],uC=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],qg=new ut,No=new D,ld=new D;function dC(t,e,n){let i=new hp;const r=new Fe,s=new Fe,o=new Rt,a=new EE,l=new TE,c={},f=n.maxTextureSize,h={[Tr]:Tn,[Tn]:Tr,[pi]:pi},u=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:aC,fragmentShader:lC}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const _=new It;_.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new gn(_,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gl;let d=this.type;this.render=function(A,C,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===uM&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Gl);const E=t.getRenderTarget(),U=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),b=t.state;b.setBlending(Vi),b.buffers.depth.getReversed()===!0?b.buffers.color.setClear(0,0,0,0):b.buffers.color.setClear(1,1,1,1),b.buffers.depth.setTest(!0),b.setScissorTest(!1);const P=d!==this.type;P&&C.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(V=>V.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,V=A.length;H<V;H++){const G=A[H],O=G.shadow;if(O===void 0){Ie("WebGLShadowMap:",G,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const z=O.getFrameExtents();r.multiply(z),s.copy(O.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/z.x),r.x=s.x*z.x,O.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/z.y),r.y=s.y*z.y,O.mapSize.y=s.y));const W=t.state.buffers.depth.getReversed();if(O.camera._reversedDepth=W,O.map===null||P===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===zo){if(G.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Si(r.x,r.y,{format:ro,type:Yi,minFilter:on,magFilter:on,generateMipmaps:!1}),O.map.texture.name=G.name+".shadowMap",O.map.depthTexture=new Sa(r.x,r.y,ni),O.map.depthTexture.name=G.name+".shadowMapDepth",O.map.depthTexture.format=qi,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=$t,O.map.depthTexture.magFilter=$t}else G.isPointLight?(O.map=new ex(r.x),O.map.depthTexture=new _E(r.x,Mi)):(O.map=new Si(r.x,r.y),O.map.depthTexture=new Sa(r.x,r.y,Mi)),O.map.depthTexture.name=G.name+".shadowMap",O.map.depthTexture.format=qi,this.type===Gl?(O.map.depthTexture.compareFunction=W?lp:ap,O.map.depthTexture.minFilter=on,O.map.depthTexture.magFilter=on):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=$t,O.map.depthTexture.magFilter=$t);O.camera.updateProjectionMatrix()}const J=O.map.isWebGLCubeRenderTarget?6:1;for(let ee=0;ee<J;ee++){if(O.map.isWebGLCubeRenderTarget)t.setRenderTarget(O.map,ee),t.clear();else{ee===0&&(t.setRenderTarget(O.map),t.clear());const te=O.getViewport(ee);o.set(s.x*te.x,s.y*te.y,s.x*te.z,s.y*te.w),b.viewport(o)}if(G.isPointLight){const te=O.camera,Pe=O.matrix,Ye=G.distance||te.far;Ye!==te.far&&(te.far=Ye,te.updateProjectionMatrix()),No.setFromMatrixPosition(G.matrixWorld),te.position.copy(No),ld.copy(te.position),ld.add(cC[ee]),te.up.copy(uC[ee]),te.lookAt(ld),te.updateMatrixWorld(),Pe.makeTranslation(-No.x,-No.y,-No.z),qg.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),O._frustum.setFromProjectionMatrix(qg,te.coordinateSystem,te.reversedDepth)}else O.updateMatrices(G);i=O.getFrustum(),y(C,S,O.camera,G,this.type)}O.isPointLightShadow!==!0&&this.type===zo&&p(O,S),O.needsUpdate=!1}d=this.type,g.needsUpdate=!1,t.setRenderTarget(E,U,I)};function p(A,C){const S=e.update(v);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Si(r.x,r.y,{format:ro,type:Yi})),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(C,null,S,u,v,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(C,null,S,m,v,null)}function x(A,C,S,E){let U=null;const I=S.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)U=I;else if(U=S.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const b=U.uuid,P=C.uuid;let H=c[b];H===void 0&&(H={},c[b]=H);let V=H[P];V===void 0&&(V=U.clone(),H[P]=V,C.addEventListener("dispose",T)),U=V}if(U.visible=C.visible,U.wireframe=C.wireframe,E===zo?U.side=C.shadowSide!==null?C.shadowSide:C.side:U.side=C.shadowSide!==null?C.shadowSide:h[C.side],U.alphaMap=C.alphaMap,U.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,U.map=C.map,U.clipShadows=C.clipShadows,U.clippingPlanes=C.clippingPlanes,U.clipIntersection=C.clipIntersection,U.displacementMap=C.displacementMap,U.displacementScale=C.displacementScale,U.displacementBias=C.displacementBias,U.wireframeLinewidth=C.wireframeLinewidth,U.linewidth=C.linewidth,S.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const b=t.properties.get(U);b.light=S}return U}function y(A,C,S,E,U){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&U===zo)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,A.matrixWorld);const P=e.update(A),H=A.material;if(Array.isArray(H)){const V=P.groups;for(let G=0,O=V.length;G<O;G++){const z=V[G],W=H[z.materialIndex];if(W&&W.visible){const J=x(A,W,E,U);A.onBeforeShadow(t,A,C,S,P,J,z),t.renderBufferDirect(S,null,P,J,A,z),A.onAfterShadow(t,A,C,S,P,J,z)}}}else if(H.visible){const V=x(A,H,E,U);A.onBeforeShadow(t,A,C,S,P,V,null),t.renderBufferDirect(S,null,P,V,A,null),A.onAfterShadow(t,A,C,S,P,V,null)}}const b=A.children;for(let P=0,H=b.length;P<H;P++)y(b[P],C,S,E,U)}function T(A){A.target.removeEventListener("dispose",T);for(const S in c){const E=c[S],U=A.target.uuid;U in E&&(E[U].dispose(),delete E[U])}}}function fC(t,e){function n(){let F=!1;const ue=new Rt;let ae=null;const ve=new Rt(0,0,0,0);return{setMask:function(se){ae!==se&&!F&&(t.colorMask(se,se,se,se),ae=se)},setLocked:function(se){F=se},setClear:function(se,$,Se,Ue,mt){mt===!0&&(se*=Ue,$*=Ue,Se*=Ue),ue.set(se,$,Se,Ue),ve.equals(ue)===!1&&(t.clearColor(se,$,Se,Ue),ve.copy(ue))},reset:function(){F=!1,ae=null,ve.set(-1,0,0,0)}}}function i(){let F=!1,ue=!1,ae=null,ve=null,se=null;return{setReversed:function($){if(ue!==$){const Se=e.get("EXT_clip_control");$?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),ue=$;const Ue=se;se=null,this.setClear(Ue)}},getReversed:function(){return ue},setTest:function($){$?re(t.DEPTH_TEST):le(t.DEPTH_TEST)},setMask:function($){ae!==$&&!F&&(t.depthMask($),ae=$)},setFunc:function($){if(ue&&($=HM[$]),ve!==$){switch($){case lf:t.depthFunc(t.NEVER);break;case cf:t.depthFunc(t.ALWAYS);break;case uf:t.depthFunc(t.LESS);break;case no:t.depthFunc(t.LEQUAL);break;case df:t.depthFunc(t.EQUAL);break;case ff:t.depthFunc(t.GEQUAL);break;case hf:t.depthFunc(t.GREATER);break;case pf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ve=$}},setLocked:function($){F=$},setClear:function($){se!==$&&(se=$,ue&&($=1-$),t.clearDepth($))},reset:function(){F=!1,ae=null,ve=null,se=null,ue=!1}}}function r(){let F=!1,ue=null,ae=null,ve=null,se=null,$=null,Se=null,Ue=null,mt=null;return{setTest:function(nt){F||(nt?re(t.STENCIL_TEST):le(t.STENCIL_TEST))},setMask:function(nt){ue!==nt&&!F&&(t.stencilMask(nt),ue=nt)},setFunc:function(nt,wi,Ai){(ae!==nt||ve!==wi||se!==Ai)&&(t.stencilFunc(nt,wi,Ai),ae=nt,ve=wi,se=Ai)},setOp:function(nt,wi,Ai){($!==nt||Se!==wi||Ue!==Ai)&&(t.stencilOp(nt,wi,Ai),$=nt,Se=wi,Ue=Ai)},setLocked:function(nt){F=nt},setClear:function(nt){mt!==nt&&(t.clearStencil(nt),mt=nt)},reset:function(){F=!1,ue=null,ae=null,ve=null,se=null,$=null,Se=null,Ue=null,mt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let f={},h={},u=new WeakMap,m=[],_=null,v=!1,g=null,d=null,p=null,x=null,y=null,T=null,A=null,C=new Be(0,0,0),S=0,E=!1,U=null,I=null,b=null,P=null,H=null;const V=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,O=0;const z=t.getParameter(t.VERSION);z.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(z)[1]),G=O>=1):z.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),G=O>=2);let W=null,J={};const ee=t.getParameter(t.SCISSOR_BOX),te=t.getParameter(t.VIEWPORT),Pe=new Rt().fromArray(ee),Ye=new Rt().fromArray(te);function Xe(F,ue,ae,ve){const se=new Uint8Array(4),$=t.createTexture();t.bindTexture(F,$),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Se=0;Se<ae;Se++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(ue,0,t.RGBA,1,1,ve,0,t.RGBA,t.UNSIGNED_BYTE,se):t.texImage2D(ue+Se,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,se);return $}const q={};q[t.TEXTURE_2D]=Xe(t.TEXTURE_2D,t.TEXTURE_2D,1),q[t.TEXTURE_CUBE_MAP]=Xe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[t.TEXTURE_2D_ARRAY]=Xe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),q[t.TEXTURE_3D]=Xe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(t.DEPTH_TEST),o.setFunc(no),Ge(!1),bt(Wm),re(t.CULL_FACE),tt(Vi);function re(F){f[F]!==!0&&(t.enable(F),f[F]=!0)}function le(F){f[F]!==!1&&(t.disable(F),f[F]=!1)}function Ne(F,ue){return h[F]!==ue?(t.bindFramebuffer(F,ue),h[F]=ue,F===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=ue),F===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=ue),!0):!1}function be(F,ue){let ae=m,ve=!1;if(F){ae=u.get(ue),ae===void 0&&(ae=[],u.set(ue,ae));const se=F.textures;if(ae.length!==se.length||ae[0]!==t.COLOR_ATTACHMENT0){for(let $=0,Se=se.length;$<Se;$++)ae[$]=t.COLOR_ATTACHMENT0+$;ae.length=se.length,ve=!0}}else ae[0]!==t.BACK&&(ae[0]=t.BACK,ve=!0);ve&&t.drawBuffers(ae)}function De(F){return _!==F?(t.useProgram(F),_=F,!0):!1}const Vt={[zr]:t.FUNC_ADD,[fM]:t.FUNC_SUBTRACT,[hM]:t.FUNC_REVERSE_SUBTRACT};Vt[pM]=t.MIN,Vt[mM]=t.MAX;const $e={[gM]:t.ZERO,[_M]:t.ONE,[vM]:t.SRC_COLOR,[of]:t.SRC_ALPHA,[TM]:t.SRC_ALPHA_SATURATE,[MM]:t.DST_COLOR,[yM]:t.DST_ALPHA,[xM]:t.ONE_MINUS_SRC_COLOR,[af]:t.ONE_MINUS_SRC_ALPHA,[EM]:t.ONE_MINUS_DST_COLOR,[SM]:t.ONE_MINUS_DST_ALPHA,[wM]:t.CONSTANT_COLOR,[AM]:t.ONE_MINUS_CONSTANT_COLOR,[CM]:t.CONSTANT_ALPHA,[RM]:t.ONE_MINUS_CONSTANT_ALPHA};function tt(F,ue,ae,ve,se,$,Se,Ue,mt,nt){if(F===Vi){v===!0&&(le(t.BLEND),v=!1);return}if(v===!1&&(re(t.BLEND),v=!0),F!==dM){if(F!==g||nt!==E){if((d!==zr||y!==zr)&&(t.blendEquation(t.FUNC_ADD),d=zr,y=zr),nt)switch(F){case Xs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case to:t.blendFunc(t.ONE,t.ONE);break;case jm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Xm:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Ke("WebGLState: Invalid blending: ",F);break}else switch(F){case Xs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case to:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case jm:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xm:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",F);break}p=null,x=null,T=null,A=null,C.set(0,0,0),S=0,g=F,E=nt}return}se=se||ue,$=$||ae,Se=Se||ve,(ue!==d||se!==y)&&(t.blendEquationSeparate(Vt[ue],Vt[se]),d=ue,y=se),(ae!==p||ve!==x||$!==T||Se!==A)&&(t.blendFuncSeparate($e[ae],$e[ve],$e[$],$e[Se]),p=ae,x=ve,T=$,A=Se),(Ue.equals(C)===!1||mt!==S)&&(t.blendColor(Ue.r,Ue.g,Ue.b,mt),C.copy(Ue),S=mt),g=F,E=!1}function dt(F,ue){F.side===pi?le(t.CULL_FACE):re(t.CULL_FACE);let ae=F.side===Tn;ue&&(ae=!ae),Ge(ae),F.blending===Xs&&F.transparent===!1?tt(Vi):tt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const ve=F.stencilWrite;a.setTest(ve),ve&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Nt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?re(t.SAMPLE_ALPHA_TO_COVERAGE):le(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(F){U!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),U=F)}function bt(F){F!==lM?(re(t.CULL_FACE),F!==I&&(F===Wm?t.cullFace(t.BACK):F===cM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):le(t.CULL_FACE),I=F}function N(F){F!==b&&(G&&t.lineWidth(F),b=F)}function Nt(F,ue,ae){F?(re(t.POLYGON_OFFSET_FILL),(P!==ue||H!==ae)&&(P=ue,H=ae,o.getReversed()&&(ue=-ue),t.polygonOffset(ue,ae))):le(t.POLYGON_OFFSET_FILL)}function et(F){F?re(t.SCISSOR_TEST):le(t.SCISSOR_TEST)}function pt(F){F===void 0&&(F=t.TEXTURE0+V-1),W!==F&&(t.activeTexture(F),W=F)}function Te(F,ue,ae){ae===void 0&&(W===null?ae=t.TEXTURE0+V-1:ae=W);let ve=J[ae];ve===void 0&&(ve={type:void 0,texture:void 0},J[ae]=ve),(ve.type!==F||ve.texture!==ue)&&(W!==ae&&(t.activeTexture(ae),W=ae),t.bindTexture(F,ue||q[F]),ve.type=F,ve.texture=ue)}function R(){const F=J[W];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function M(){try{t.compressedTexImage2D(...arguments)}catch(F){Ke("WebGLState:",F)}}function B(){try{t.compressedTexImage3D(...arguments)}catch(F){Ke("WebGLState:",F)}}function Z(){try{t.texSubImage2D(...arguments)}catch(F){Ke("WebGLState:",F)}}function Q(){try{t.texSubImage3D(...arguments)}catch(F){Ke("WebGLState:",F)}}function K(){try{t.compressedTexSubImage2D(...arguments)}catch(F){Ke("WebGLState:",F)}}function xe(){try{t.compressedTexSubImage3D(...arguments)}catch(F){Ke("WebGLState:",F)}}function ce(){try{t.texStorage2D(...arguments)}catch(F){Ke("WebGLState:",F)}}function Re(){try{t.texStorage3D(...arguments)}catch(F){Ke("WebGLState:",F)}}function Le(){try{t.texImage2D(...arguments)}catch(F){Ke("WebGLState:",F)}}function ie(){try{t.texImage3D(...arguments)}catch(F){Ke("WebGLState:",F)}}function oe(F){Pe.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),Pe.copy(F))}function ye(F){Ye.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),Ye.copy(F))}function Me(F,ue){let ae=c.get(ue);ae===void 0&&(ae=new WeakMap,c.set(ue,ae));let ve=ae.get(F);ve===void 0&&(ve=t.getUniformBlockIndex(ue,F.name),ae.set(F,ve))}function me(F,ue){const ve=c.get(ue).get(F);l.get(ue)!==ve&&(t.uniformBlockBinding(ue,ve,F.__bindingPointIndex),l.set(ue,ve))}function He(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},W=null,J={},h={},u=new WeakMap,m=[],_=null,v=!1,g=null,d=null,p=null,x=null,y=null,T=null,A=null,C=new Be(0,0,0),S=0,E=!1,U=null,I=null,b=null,P=null,H=null,Pe.set(0,0,t.canvas.width,t.canvas.height),Ye.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:re,disable:le,bindFramebuffer:Ne,drawBuffers:be,useProgram:De,setBlending:tt,setMaterial:dt,setFlipSided:Ge,setCullFace:bt,setLineWidth:N,setPolygonOffset:Nt,setScissorTest:et,activeTexture:pt,bindTexture:Te,unbindTexture:R,compressedTexImage2D:M,compressedTexImage3D:B,texImage2D:Le,texImage3D:ie,updateUBOMapping:Me,uniformBlockBinding:me,texStorage2D:ce,texStorage3D:Re,texSubImage2D:Z,texSubImage3D:Q,compressedTexSubImage2D:K,compressedTexSubImage3D:xe,scissor:oe,viewport:ye,reset:He}}function hC(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Fe,f=new WeakMap;let h;const u=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,M){return m?new OffscreenCanvas(R,M):Sc("canvas")}function v(R,M,B){let Z=1;const Q=Te(R);if((Q.width>B||Q.height>B)&&(Z=B/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const K=Math.floor(Z*Q.width),xe=Math.floor(Z*Q.height);h===void 0&&(h=_(K,xe));const ce=M?_(K,xe):h;return ce.width=K,ce.height=xe,ce.getContext("2d").drawImage(R,0,0,K,xe),Ie("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+K+"x"+xe+")."),ce}else return"data"in R&&Ie("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function g(R){return R.generateMipmaps}function d(R){t.generateMipmap(R)}function p(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(R,M,B,Z,Q=!1){if(R!==null){if(t[R]!==void 0)return t[R];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let K=M;if(M===t.RED&&(B===t.FLOAT&&(K=t.R32F),B===t.HALF_FLOAT&&(K=t.R16F),B===t.UNSIGNED_BYTE&&(K=t.R8)),M===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(K=t.R8UI),B===t.UNSIGNED_SHORT&&(K=t.R16UI),B===t.UNSIGNED_INT&&(K=t.R32UI),B===t.BYTE&&(K=t.R8I),B===t.SHORT&&(K=t.R16I),B===t.INT&&(K=t.R32I)),M===t.RG&&(B===t.FLOAT&&(K=t.RG32F),B===t.HALF_FLOAT&&(K=t.RG16F),B===t.UNSIGNED_BYTE&&(K=t.RG8)),M===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(K=t.RG8UI),B===t.UNSIGNED_SHORT&&(K=t.RG16UI),B===t.UNSIGNED_INT&&(K=t.RG32UI),B===t.BYTE&&(K=t.RG8I),B===t.SHORT&&(K=t.RG16I),B===t.INT&&(K=t.RG32I)),M===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(K=t.RGB8UI),B===t.UNSIGNED_SHORT&&(K=t.RGB16UI),B===t.UNSIGNED_INT&&(K=t.RGB32UI),B===t.BYTE&&(K=t.RGB8I),B===t.SHORT&&(K=t.RGB16I),B===t.INT&&(K=t.RGB32I)),M===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(K=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(K=t.RGBA16UI),B===t.UNSIGNED_INT&&(K=t.RGBA32UI),B===t.BYTE&&(K=t.RGBA8I),B===t.SHORT&&(K=t.RGBA16I),B===t.INT&&(K=t.RGBA32I)),M===t.RGB&&(B===t.UNSIGNED_INT_5_9_9_9_REV&&(K=t.RGB9_E5),B===t.UNSIGNED_INT_10F_11F_11F_REV&&(K=t.R11F_G11F_B10F)),M===t.RGBA){const xe=Q?yc:Ze.getTransfer(Z);B===t.FLOAT&&(K=t.RGBA32F),B===t.HALF_FLOAT&&(K=t.RGBA16F),B===t.UNSIGNED_BYTE&&(K=xe===rt?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function y(R,M){let B;return R?M===null||M===Mi||M===xa?B=t.DEPTH24_STENCIL8:M===ni?B=t.DEPTH32F_STENCIL8:M===va&&(B=t.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Mi||M===xa?B=t.DEPTH_COMPONENT24:M===ni?B=t.DEPTH_COMPONENT32F:M===va&&(B=t.DEPTH_COMPONENT16),B}function T(R,M){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==$t&&R.minFilter!==on?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function A(R){const M=R.target;M.removeEventListener("dispose",A),S(M),M.isVideoTexture&&f.delete(M)}function C(R){const M=R.target;M.removeEventListener("dispose",C),U(M)}function S(R){const M=i.get(R);if(M.__webglInit===void 0)return;const B=R.source,Z=u.get(B);if(Z){const Q=Z[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&E(R),Object.keys(Z).length===0&&u.delete(B)}i.remove(R)}function E(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const B=R.source,Z=u.get(B);delete Z[M.__cacheKey],o.memory.textures--}function U(R){const M=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let Q=0;Q<M.__webglFramebuffer[Z].length;Q++)t.deleteFramebuffer(M.__webglFramebuffer[Z][Q]);else t.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)t.deleteFramebuffer(M.__webglFramebuffer[Z]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const B=R.textures;for(let Z=0,Q=B.length;Z<Q;Z++){const K=i.get(B[Z]);K.__webglTexture&&(t.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(B[Z])}i.remove(R)}let I=0;function b(){I=0}function P(){const R=I;return R>=r.maxTextures&&Ie("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),I+=1,R}function H(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function V(R,M){const B=i.get(R);if(R.isVideoTexture&&et(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){const Z=R.image;if(Z===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{q(B,R,M);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+M)}function G(R,M){const B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){q(B,R,M);return}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+M)}function O(R,M){const B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){q(B,R,M);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+M)}function z(R,M){const B=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&B.__version!==R.version){re(B,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+M)}const W={[mf]:t.REPEAT,[ki]:t.CLAMP_TO_EDGE,[gf]:t.MIRRORED_REPEAT},J={[$t]:t.NEAREST,[LM]:t.NEAREST_MIPMAP_NEAREST,[Ka]:t.NEAREST_MIPMAP_LINEAR,[on]:t.LINEAR,[bu]:t.LINEAR_MIPMAP_NEAREST,[jr]:t.LINEAR_MIPMAP_LINEAR},ee={[DM]:t.NEVER,[kM]:t.ALWAYS,[UM]:t.LESS,[ap]:t.LEQUAL,[FM]:t.EQUAL,[lp]:t.GEQUAL,[OM]:t.GREATER,[BM]:t.NOTEQUAL};function te(R,M){if(M.type===ni&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===on||M.magFilter===bu||M.magFilter===Ka||M.magFilter===jr||M.minFilter===on||M.minFilter===bu||M.minFilter===Ka||M.minFilter===jr)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,W[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,W[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,W[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,J[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,J[M.minFilter]),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,ee[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===$t||M.minFilter!==Ka&&M.minFilter!==jr||M.type===ni&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Pe(R,M){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",A));const Z=M.source;let Q=u.get(Z);Q===void 0&&(Q={},u.set(Z,Q));const K=H(M);if(K!==R.__cacheKey){Q[K]===void 0&&(Q[K]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Q[K].usedTimes++;const xe=Q[R.__cacheKey];xe!==void 0&&(Q[R.__cacheKey].usedTimes--,xe.usedTimes===0&&E(M)),R.__cacheKey=K,R.__webglTexture=Q[K].texture}return B}function Ye(R,M,B){return Math.floor(Math.floor(R/B)/M)}function Xe(R,M,B,Z){const K=R.updateRanges;if(K.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,M.width,M.height,B,Z,M.data);else{K.sort((ie,oe)=>ie.start-oe.start);let xe=0;for(let ie=1;ie<K.length;ie++){const oe=K[xe],ye=K[ie],Me=oe.start+oe.count,me=Ye(ye.start,M.width,4),He=Ye(oe.start,M.width,4);ye.start<=Me+1&&me===He&&Ye(ye.start+ye.count-1,M.width,4)===me?oe.count=Math.max(oe.count,ye.start+ye.count-oe.start):(++xe,K[xe]=ye)}K.length=xe+1;const ce=t.getParameter(t.UNPACK_ROW_LENGTH),Re=t.getParameter(t.UNPACK_SKIP_PIXELS),Le=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,M.width);for(let ie=0,oe=K.length;ie<oe;ie++){const ye=K[ie],Me=Math.floor(ye.start/4),me=Math.ceil(ye.count/4),He=Me%M.width,F=Math.floor(Me/M.width),ue=me,ae=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,He),t.pixelStorei(t.UNPACK_SKIP_ROWS,F),n.texSubImage2D(t.TEXTURE_2D,0,He,F,ue,ae,B,Z,M.data)}R.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ce),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Re),t.pixelStorei(t.UNPACK_SKIP_ROWS,Le)}}function q(R,M,B){let Z=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=t.TEXTURE_3D);const Q=Pe(R,M),K=M.source;n.bindTexture(Z,R.__webglTexture,t.TEXTURE0+B);const xe=i.get(K);if(K.version!==xe.__version||Q===!0){n.activeTexture(t.TEXTURE0+B);const ce=Ze.getPrimaries(Ze.workingColorSpace),Re=M.colorSpace===cr?null:Ze.getPrimaries(M.colorSpace),Le=M.colorSpace===cr||ce===Re?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let ie=v(M.image,!1,r.maxTextureSize);ie=pt(M,ie);const oe=s.convert(M.format,M.colorSpace),ye=s.convert(M.type);let Me=x(M.internalFormat,oe,ye,M.colorSpace,M.isVideoTexture);te(Z,M);let me;const He=M.mipmaps,F=M.isVideoTexture!==!0,ue=xe.__version===void 0||Q===!0,ae=K.dataReady,ve=T(M,ie);if(M.isDepthTexture)Me=y(M.format===Xr,M.type),ue&&(F?n.texStorage2D(t.TEXTURE_2D,1,Me,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,Me,ie.width,ie.height,0,oe,ye,null));else if(M.isDataTexture)if(He.length>0){F&&ue&&n.texStorage2D(t.TEXTURE_2D,ve,Me,He[0].width,He[0].height);for(let se=0,$=He.length;se<$;se++)me=He[se],F?ae&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,me.width,me.height,oe,ye,me.data):n.texImage2D(t.TEXTURE_2D,se,Me,me.width,me.height,0,oe,ye,me.data);M.generateMipmaps=!1}else F?(ue&&n.texStorage2D(t.TEXTURE_2D,ve,Me,ie.width,ie.height),ae&&Xe(M,ie,oe,ye)):n.texImage2D(t.TEXTURE_2D,0,Me,ie.width,ie.height,0,oe,ye,ie.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){F&&ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ve,Me,He[0].width,He[0].height,ie.depth);for(let se=0,$=He.length;se<$;se++)if(me=He[se],M.format!==ii)if(oe!==null)if(F){if(ae)if(M.layerUpdates.size>0){const Se=wg(me.width,me.height,M.format,M.type);for(const Ue of M.layerUpdates){const mt=me.data.subarray(Ue*Se/me.data.BYTES_PER_ELEMENT,(Ue+1)*Se/me.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,Ue,me.width,me.height,1,oe,mt)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,me.width,me.height,ie.depth,oe,me.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,se,Me,me.width,me.height,ie.depth,0,me.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?ae&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,me.width,me.height,ie.depth,oe,ye,me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,se,Me,me.width,me.height,ie.depth,0,oe,ye,me.data)}else{F&&ue&&n.texStorage2D(t.TEXTURE_2D,ve,Me,He[0].width,He[0].height);for(let se=0,$=He.length;se<$;se++)me=He[se],M.format!==ii?oe!==null?F?ae&&n.compressedTexSubImage2D(t.TEXTURE_2D,se,0,0,me.width,me.height,oe,me.data):n.compressedTexImage2D(t.TEXTURE_2D,se,Me,me.width,me.height,0,me.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?ae&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,me.width,me.height,oe,ye,me.data):n.texImage2D(t.TEXTURE_2D,se,Me,me.width,me.height,0,oe,ye,me.data)}else if(M.isDataArrayTexture)if(F){if(ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ve,Me,ie.width,ie.height,ie.depth),ae)if(M.layerUpdates.size>0){const se=wg(ie.width,ie.height,M.format,M.type);for(const $ of M.layerUpdates){const Se=ie.data.subarray($*se/ie.data.BYTES_PER_ELEMENT,($+1)*se/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,$,ie.width,ie.height,1,oe,ye,Se)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,oe,ye,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Me,ie.width,ie.height,ie.depth,0,oe,ye,ie.data);else if(M.isData3DTexture)F?(ue&&n.texStorage3D(t.TEXTURE_3D,ve,Me,ie.width,ie.height,ie.depth),ae&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,oe,ye,ie.data)):n.texImage3D(t.TEXTURE_3D,0,Me,ie.width,ie.height,ie.depth,0,oe,ye,ie.data);else if(M.isFramebufferTexture){if(ue)if(F)n.texStorage2D(t.TEXTURE_2D,ve,Me,ie.width,ie.height);else{let se=ie.width,$=ie.height;for(let Se=0;Se<ve;Se++)n.texImage2D(t.TEXTURE_2D,Se,Me,se,$,0,oe,ye,null),se>>=1,$>>=1}}else if(He.length>0){if(F&&ue){const se=Te(He[0]);n.texStorage2D(t.TEXTURE_2D,ve,Me,se.width,se.height)}for(let se=0,$=He.length;se<$;se++)me=He[se],F?ae&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,oe,ye,me):n.texImage2D(t.TEXTURE_2D,se,Me,oe,ye,me);M.generateMipmaps=!1}else if(F){if(ue){const se=Te(ie);n.texStorage2D(t.TEXTURE_2D,ve,Me,se.width,se.height)}ae&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe,ye,ie)}else n.texImage2D(t.TEXTURE_2D,0,Me,oe,ye,ie);g(M)&&d(Z),xe.__version=K.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function re(R,M,B){if(M.image.length!==6)return;const Z=Pe(R,M),Q=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+B);const K=i.get(Q);if(Q.version!==K.__version||Z===!0){n.activeTexture(t.TEXTURE0+B);const xe=Ze.getPrimaries(Ze.workingColorSpace),ce=M.colorSpace===cr?null:Ze.getPrimaries(M.colorSpace),Re=M.colorSpace===cr||xe===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Le=M.isCompressedTexture||M.image[0].isCompressedTexture,ie=M.image[0]&&M.image[0].isDataTexture,oe=[];for(let $=0;$<6;$++)!Le&&!ie?oe[$]=v(M.image[$],!0,r.maxCubemapSize):oe[$]=ie?M.image[$].image:M.image[$],oe[$]=pt(M,oe[$]);const ye=oe[0],Me=s.convert(M.format,M.colorSpace),me=s.convert(M.type),He=x(M.internalFormat,Me,me,M.colorSpace),F=M.isVideoTexture!==!0,ue=K.__version===void 0||Z===!0,ae=Q.dataReady;let ve=T(M,ye);te(t.TEXTURE_CUBE_MAP,M);let se;if(Le){F&&ue&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ve,He,ye.width,ye.height);for(let $=0;$<6;$++){se=oe[$].mipmaps;for(let Se=0;Se<se.length;Se++){const Ue=se[Se];M.format!==ii?Me!==null?F?ae&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se,0,0,Ue.width,Ue.height,Me,Ue.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se,He,Ue.width,Ue.height,0,Ue.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se,0,0,Ue.width,Ue.height,Me,me,Ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se,He,Ue.width,Ue.height,0,Me,me,Ue.data)}}}else{if(se=M.mipmaps,F&&ue){se.length>0&&ve++;const $=Te(oe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ve,He,$.width,$.height)}for(let $=0;$<6;$++)if(ie){F?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,oe[$].width,oe[$].height,Me,me,oe[$].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,He,oe[$].width,oe[$].height,0,Me,me,oe[$].data);for(let Se=0;Se<se.length;Se++){const mt=se[Se].image[$].image;F?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se+1,0,0,mt.width,mt.height,Me,me,mt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se+1,He,mt.width,mt.height,0,Me,me,mt.data)}}else{F?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Me,me,oe[$]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,He,Me,me,oe[$]);for(let Se=0;Se<se.length;Se++){const Ue=se[Se];F?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se+1,0,0,Me,me,Ue.image[$]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se+1,He,Me,me,Ue.image[$])}}}g(M)&&d(t.TEXTURE_CUBE_MAP),K.__version=Q.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function le(R,M,B,Z,Q,K){const xe=s.convert(B.format,B.colorSpace),ce=s.convert(B.type),Re=x(B.internalFormat,xe,ce,B.colorSpace),Le=i.get(M),ie=i.get(B);if(ie.__renderTarget=M,!Le.__hasExternalTextures){const oe=Math.max(1,M.width>>K),ye=Math.max(1,M.height>>K);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,K,Re,oe,ye,M.depth,0,xe,ce,null):n.texImage2D(Q,K,Re,oe,ye,0,xe,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Nt(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,Q,ie.__webglTexture,0,N(M)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,Q,ie.__webglTexture,K),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ne(R,M,B){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer){const Z=M.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,K=y(M.stencilBuffer,Q),xe=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Nt(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,N(M),K,M.width,M.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,N(M),K,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,K,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,xe,t.RENDERBUFFER,R)}else{const Z=M.textures;for(let Q=0;Q<Z.length;Q++){const K=Z[Q],xe=s.convert(K.format,K.colorSpace),ce=s.convert(K.type),Re=x(K.internalFormat,xe,ce,K.colorSpace);Nt(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,N(M),Re,M.width,M.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,N(M),Re,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Re,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function be(R,M,B){const Z=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(M.depthTexture);if(Q.__renderTarget=M,(!Q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Z){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,M.depthTexture.addEventListener("dispose",A)),Q.__webglTexture===void 0){Q.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),te(t.TEXTURE_CUBE_MAP,M.depthTexture);const Le=s.convert(M.depthTexture.format),ie=s.convert(M.depthTexture.type);let oe;M.depthTexture.format===qi?oe=t.DEPTH_COMPONENT24:M.depthTexture.format===Xr&&(oe=t.DEPTH24_STENCIL8);for(let ye=0;ye<6;ye++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,oe,M.width,M.height,0,Le,ie,null)}}else V(M.depthTexture,0);const K=Q.__webglTexture,xe=N(M),ce=Z?t.TEXTURE_CUBE_MAP_POSITIVE_X+B:t.TEXTURE_2D,Re=M.depthTexture.format===Xr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(M.depthTexture.format===qi)Nt(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Re,ce,K,0,xe):t.framebufferTexture2D(t.FRAMEBUFFER,Re,ce,K,0);else if(M.depthTexture.format===Xr)Nt(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Re,ce,K,0,xe):t.framebufferTexture2D(t.FRAMEBUFFER,Re,ce,K,0);else throw new Error("Unknown depthTexture format")}function De(R){const M=i.get(R),B=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const Z=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Z){const Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Z.removeEventListener("dispose",Q)};Z.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=Z}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(B)for(let Z=0;Z<6;Z++)be(M.__webglFramebuffer[Z],R,Z);else{const Z=R.texture.mipmaps;Z&&Z.length>0?be(M.__webglFramebuffer[0],R,0):be(M.__webglFramebuffer,R,0)}else if(B){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]===void 0)M.__webglDepthbuffer[Z]=t.createRenderbuffer(),Ne(M.__webglDepthbuffer[Z],R,!1);else{const Q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,K)}}else{const Z=R.texture.mipmaps;if(Z&&Z.length>0?n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),Ne(M.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,K)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Vt(R,M,B){const Z=i.get(R);M!==void 0&&le(Z.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&De(R)}function $e(R){const M=R.texture,B=i.get(R),Z=i.get(M);R.addEventListener("dispose",C);const Q=R.textures,K=R.isWebGLCubeRenderTarget===!0,xe=Q.length>1;if(xe||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=M.version,o.memory.textures++),K){B.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[ce]=[];for(let Re=0;Re<M.mipmaps.length;Re++)B.__webglFramebuffer[ce][Re]=t.createFramebuffer()}else B.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let ce=0;ce<M.mipmaps.length;ce++)B.__webglFramebuffer[ce]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(xe)for(let ce=0,Re=Q.length;ce<Re;ce++){const Le=i.get(Q[ce]);Le.__webglTexture===void 0&&(Le.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&Nt(R)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ce=0;ce<Q.length;ce++){const Re=Q[ce];B.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[ce]);const Le=s.convert(Re.format,Re.colorSpace),ie=s.convert(Re.type),oe=x(Re.internalFormat,Le,ie,Re.colorSpace,R.isXRRenderTarget===!0),ye=N(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,ye,oe,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,B.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),Ne(B.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(K){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),te(t.TEXTURE_CUBE_MAP,M);for(let ce=0;ce<6;ce++)if(M.mipmaps&&M.mipmaps.length>0)for(let Re=0;Re<M.mipmaps.length;Re++)le(B.__webglFramebuffer[ce][Re],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re);else le(B.__webglFramebuffer[ce],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);g(M)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(xe){for(let ce=0,Re=Q.length;ce<Re;ce++){const Le=Q[ce],ie=i.get(Le);let oe=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(oe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(oe,ie.__webglTexture),te(oe,Le),le(B.__webglFramebuffer,R,Le,t.COLOR_ATTACHMENT0+ce,oe,0),g(Le)&&d(oe)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ce=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,Z.__webglTexture),te(ce,M),M.mipmaps&&M.mipmaps.length>0)for(let Re=0;Re<M.mipmaps.length;Re++)le(B.__webglFramebuffer[Re],R,M,t.COLOR_ATTACHMENT0,ce,Re);else le(B.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,ce,0);g(M)&&d(ce),n.unbindTexture()}R.depthBuffer&&De(R)}function tt(R){const M=R.textures;for(let B=0,Z=M.length;B<Z;B++){const Q=M[B];if(g(Q)){const K=p(R),xe=i.get(Q).__webglTexture;n.bindTexture(K,xe),d(K),n.unbindTexture()}}}const dt=[],Ge=[];function bt(R){if(R.samples>0){if(Nt(R)===!1){const M=R.textures,B=R.width,Z=R.height;let Q=t.COLOR_BUFFER_BIT;const K=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,xe=i.get(R),ce=M.length>1;if(ce)for(let Le=0;Le<M.length;Le++)n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const Re=R.texture.mipmaps;Re&&Re.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Le=0;Le<M.length;Le++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),ce){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,xe.__webglColorRenderbuffer[Le]);const ie=i.get(M[Le]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ie,0)}t.blitFramebuffer(0,0,B,Z,0,0,B,Z,Q,t.NEAREST),l===!0&&(dt.length=0,Ge.length=0,dt.push(t.COLOR_ATTACHMENT0+Le),R.depthBuffer&&R.resolveDepthBuffer===!1&&(dt.push(K),Ge.push(K),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ge)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,dt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let Le=0;Le<M.length;Le++){n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.RENDERBUFFER,xe.__webglColorRenderbuffer[Le]);const ie=i.get(M[Le]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.TEXTURE_2D,ie,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function N(R){return Math.min(r.maxSamples,R.samples)}function Nt(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function et(R){const M=o.render.frame;f.get(R)!==M&&(f.set(R,M),R.update())}function pt(R,M){const B=R.colorSpace,Z=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==so&&B!==cr&&(Ze.getTransfer(B)===rt?(Z!==ii||Q!==Pn)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",B)),M}function Te(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=P,this.resetTextureUnits=b,this.setTexture2D=V,this.setTexture2DArray=G,this.setTexture3D=O,this.setTextureCube=z,this.rebindTextures=Vt,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Nt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function pC(t,e){function n(i,r=cr){let s;const o=Ze.getTransfer(r);if(i===Pn)return t.UNSIGNED_BYTE;if(i===tp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===np)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Lv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Iv)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===bv)return t.BYTE;if(i===Pv)return t.SHORT;if(i===va)return t.UNSIGNED_SHORT;if(i===ep)return t.INT;if(i===Mi)return t.UNSIGNED_INT;if(i===ni)return t.FLOAT;if(i===Yi)return t.HALF_FLOAT;if(i===Nv)return t.ALPHA;if(i===Dv)return t.RGB;if(i===ii)return t.RGBA;if(i===qi)return t.DEPTH_COMPONENT;if(i===Xr)return t.DEPTH_STENCIL;if(i===ip)return t.RED;if(i===rp)return t.RED_INTEGER;if(i===ro)return t.RG;if(i===sp)return t.RG_INTEGER;if(i===op)return t.RGBA_INTEGER;if(i===Hl||i===Wl||i===jl||i===Xl)if(o===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Hl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===jl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Hl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===jl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_f||i===vf||i===xf||i===yf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===_f)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===xf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===yf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Sf||i===Mf||i===Ef||i===Tf||i===wf||i===Af||i===Cf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Sf||i===Mf)return o===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ef)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Tf)return s.COMPRESSED_R11_EAC;if(i===wf)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Af)return s.COMPRESSED_RG11_EAC;if(i===Cf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Rf||i===bf||i===Pf||i===Lf||i===If||i===Nf||i===Df||i===Uf||i===Ff||i===Of||i===Bf||i===kf||i===zf||i===Vf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Rf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Pf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Lf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===If)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Nf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Df)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Uf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ff)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Of)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Bf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===kf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Vf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Gf||i===Hf||i===Wf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Gf)return o===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===jf||i===Xf||i===Yf||i===qf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===jf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Xf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Yf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===qf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const mC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gC=`
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

}`;class _C{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Yv(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ti({vertexShader:mC,fragmentShader:gC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new gn(new $c(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vC extends uo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,h=null,u=null,m=null,_=null;const v=typeof XRWebGLBinding<"u",g=new _C,d={},p=n.getContextAttributes();let x=null,y=null;const T=[],A=[],C=new Fe;let S=null;const E=new bn;E.viewport=new Rt;const U=new bn;U.viewport=new Rt;const I=[E,U],b=new PE;let P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let re=T[q];return re===void 0&&(re=new Fu,T[q]=re),re.getTargetRaySpace()},this.getControllerGrip=function(q){let re=T[q];return re===void 0&&(re=new Fu,T[q]=re),re.getGripSpace()},this.getHand=function(q){let re=T[q];return re===void 0&&(re=new Fu,T[q]=re),re.getHandSpace()};function V(q){const re=A.indexOf(q.inputSource);if(re===-1)return;const le=T[re];le!==void 0&&(le.update(q.inputSource,q.frame,c||o),le.dispatchEvent({type:q.type,data:q.inputSource}))}function G(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",O);for(let q=0;q<T.length;q++){const re=A[q];re!==null&&(A[q]=null,T[q].disconnect(re))}P=null,H=null,g.reset();for(const q in d)delete d[q];e.setRenderTarget(x),m=null,u=null,h=null,r=null,y=null,Xe.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",G),r.addEventListener("inputsourceschange",O),p.xrCompatible!==!0&&await n.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Ne=null,be=null;p.depth&&(be=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,le=p.stencil?Xr:qi,Ne=p.stencil?xa:Mi);const De={colorFormat:n.RGBA8,depthFormat:be,scaleFactor:s};h=this.getBinding(),u=h.createProjectionLayer(De),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new Si(u.textureWidth,u.textureHeight,{format:ii,type:Pn,depthTexture:new Sa(u.textureWidth,u.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const le={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,le),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new Si(m.framebufferWidth,m.framebufferHeight,{format:ii,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Xe.setContext(r),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function O(q){for(let re=0;re<q.removed.length;re++){const le=q.removed[re],Ne=A.indexOf(le);Ne>=0&&(A[Ne]=null,T[Ne].disconnect(le))}for(let re=0;re<q.added.length;re++){const le=q.added[re];let Ne=A.indexOf(le);if(Ne===-1){for(let De=0;De<T.length;De++)if(De>=A.length){A.push(le),Ne=De;break}else if(A[De]===null){A[De]=le,Ne=De;break}if(Ne===-1)break}const be=T[Ne];be&&be.connect(le)}}const z=new D,W=new D;function J(q,re,le){z.setFromMatrixPosition(re.matrixWorld),W.setFromMatrixPosition(le.matrixWorld);const Ne=z.distanceTo(W),be=re.projectionMatrix.elements,De=le.projectionMatrix.elements,Vt=be[14]/(be[10]-1),$e=be[14]/(be[10]+1),tt=(be[9]+1)/be[5],dt=(be[9]-1)/be[5],Ge=(be[8]-1)/be[0],bt=(De[8]+1)/De[0],N=Vt*Ge,Nt=Vt*bt,et=Ne/(-Ge+bt),pt=et*-Ge;if(re.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(pt),q.translateZ(et),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),be[10]===-1)q.projectionMatrix.copy(re.projectionMatrix),q.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const Te=Vt+et,R=$e+et,M=N-pt,B=Nt+(Ne-pt),Z=tt*$e/R*Te,Q=dt*$e/R*Te;q.projectionMatrix.makePerspective(M,B,Z,Q,Te,R),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ee(q,re){re===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(re.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let re=q.near,le=q.far;g.texture!==null&&(g.depthNear>0&&(re=g.depthNear),g.depthFar>0&&(le=g.depthFar)),b.near=U.near=E.near=re,b.far=U.far=E.far=le,(P!==b.near||H!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,H=b.far),b.layers.mask=q.layers.mask|6,E.layers.mask=b.layers.mask&-5,U.layers.mask=b.layers.mask&-3;const Ne=q.parent,be=b.cameras;ee(b,Ne);for(let De=0;De<be.length;De++)ee(be[De],Ne);be.length===2?J(b,E,U):b.projectionMatrix.copy(E.projectionMatrix),te(q,b,Ne)};function te(q,re,le){le===null?q.matrix.copy(re.matrixWorld):(q.matrix.copy(le.matrixWorld),q.matrix.invert(),q.matrix.multiply(re.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(re.projectionMatrix),q.projectionMatrixInverse.copy(re.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Kf*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(b)},this.getCameraTexture=function(q){return d[q]};let Pe=null;function Ye(q,re){if(f=re.getViewerPose(c||o),_=re,f!==null){const le=f.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let Ne=!1;le.length!==b.cameras.length&&(b.cameras.length=0,Ne=!0);for(let $e=0;$e<le.length;$e++){const tt=le[$e];let dt=null;if(m!==null)dt=m.getViewport(tt);else{const bt=h.getViewSubImage(u,tt);dt=bt.viewport,$e===0&&(e.setRenderTargetTextures(y,bt.colorTexture,bt.depthStencilTexture),e.setRenderTarget(y))}let Ge=I[$e];Ge===void 0&&(Ge=new bn,Ge.layers.enable($e),Ge.viewport=new Rt,I[$e]=Ge),Ge.matrix.fromArray(tt.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(tt.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(dt.x,dt.y,dt.width,dt.height),$e===0&&(b.matrix.copy(Ge.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Ne===!0&&b.cameras.push(Ge)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){h=i.getBinding();const $e=h.getDepthInformation(le[0]);$e&&$e.isValid&&$e.texture&&g.init($e,r.renderState)}if(be&&be.includes("camera-access")&&v){e.state.unbindTexture(),h=i.getBinding();for(let $e=0;$e<le.length;$e++){const tt=le[$e].camera;if(tt){let dt=d[tt];dt||(dt=new Yv,d[tt]=dt);const Ge=h.getCameraImage(tt);dt.sourceTexture=Ge}}}}for(let le=0;le<T.length;le++){const Ne=A[le],be=T[le];Ne!==null&&be!==void 0&&be.update(Ne,re,c||o)}Pe&&Pe(q,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),_=null}const Xe=new Qv;Xe.setAnimationLoop(Ye),this.setAnimationLoop=function(q){Pe=q},this.dispose=function(){}}}const Fr=new Ei,xC=new ut;function yC(t,e){function n(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,$v(t)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,p,x,y){d.isMeshBasicMaterial?s(g,d):d.isMeshLambertMaterial?(s(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(g,d),h(g,d)):d.isMeshPhongMaterial?(s(g,d),f(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(g,d),u(g,d),d.isMeshPhysicalMaterial&&m(g,d,y)):d.isMeshMatcapMaterial?(s(g,d),_(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),v(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?l(g,d,p,x):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,n(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Tn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,n(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Tn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,n(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,n(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const p=e.get(d),x=p.envMap,y=p.envMapRotation;x&&(g.envMap.value=x,Fr.copy(y),Fr.x*=-1,Fr.y*=-1,Fr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Fr.y*=-1,Fr.z*=-1),g.envMapRotation.value.setFromMatrix4(xC.makeRotationFromEuler(Fr)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,p,x){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*p,g.scale.value=x*.5,d.map&&(g.map.value=d.map,n(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function f(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function h(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function u(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function m(g,d,p){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Tn&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=p.texture,g.transmissionSamplerSize.value.set(p.width,p.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,d){d.matcap&&(g.matcap.value=d.matcap)}function v(g,d){const p=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(p.matrixWorld),g.nearDistance.value=p.shadow.camera.near,g.farDistance.value=p.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function SC(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(p,x){const y=x.program;i.uniformBlockBinding(p,y)}function c(p,x){let y=r[p.id];y===void 0&&(_(p),y=f(p),r[p.id]=y,p.addEventListener("dispose",g));const T=x.program;i.updateUBOMapping(p,T);const A=e.render.frame;s[p.id]!==A&&(u(p),s[p.id]=A)}function f(p){const x=h();p.__bindingPointIndex=x;const y=t.createBuffer(),T=p.__size,A=p.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,T,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,y),y}function h(){for(let p=0;p<a;p++)if(o.indexOf(p)===-1)return o.push(p),p;return Ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(p){const x=r[p.id],y=p.uniforms,T=p.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let A=0,C=y.length;A<C;A++){const S=Array.isArray(y[A])?y[A]:[y[A]];for(let E=0,U=S.length;E<U;E++){const I=S[E];if(m(I,A,E,T)===!0){const b=I.__offset,P=Array.isArray(I.value)?I.value:[I.value];let H=0;for(let V=0;V<P.length;V++){const G=P[V],O=v(G);typeof G=="number"||typeof G=="boolean"?(I.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,b+H,I.__data)):G.isMatrix3?(I.__data[0]=G.elements[0],I.__data[1]=G.elements[1],I.__data[2]=G.elements[2],I.__data[3]=0,I.__data[4]=G.elements[3],I.__data[5]=G.elements[4],I.__data[6]=G.elements[5],I.__data[7]=0,I.__data[8]=G.elements[6],I.__data[9]=G.elements[7],I.__data[10]=G.elements[8],I.__data[11]=0):(G.toArray(I.__data,H),H+=O.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,b,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(p,x,y,T){const A=p.value,C=x+"_"+y;if(T[C]===void 0)return typeof A=="number"||typeof A=="boolean"?T[C]=A:T[C]=A.clone(),!0;{const S=T[C];if(typeof A=="number"||typeof A=="boolean"){if(S!==A)return T[C]=A,!0}else if(S.equals(A)===!1)return S.copy(A),!0}return!1}function _(p){const x=p.uniforms;let y=0;const T=16;for(let C=0,S=x.length;C<S;C++){const E=Array.isArray(x[C])?x[C]:[x[C]];for(let U=0,I=E.length;U<I;U++){const b=E[U],P=Array.isArray(b.value)?b.value:[b.value];for(let H=0,V=P.length;H<V;H++){const G=P[H],O=v(G),z=y%T,W=z%O.boundary,J=z+W;y+=W,J!==0&&T-J<O.storage&&(y+=T-J),b.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=y,y+=O.storage}}}const A=y%T;return A>0&&(y+=T-A),p.__size=y,p.__cache={},this}function v(p){const x={boundary:0,storage:0};return typeof p=="number"||typeof p=="boolean"?(x.boundary=4,x.storage=4):p.isVector2?(x.boundary=8,x.storage=8):p.isVector3||p.isColor?(x.boundary=16,x.storage=12):p.isVector4?(x.boundary=16,x.storage=16):p.isMatrix3?(x.boundary=48,x.storage=48):p.isMatrix4?(x.boundary=64,x.storage=64):p.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ie("WebGLRenderer: Unsupported uniform value type.",p),x}function g(p){const x=p.target;x.removeEventListener("dispose",g);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const p in r)t.deleteBuffer(r[p]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}const MC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ui=null;function EC(){return ui===null&&(ui=new Wv(MC,16,16,ro,Yi),ui.name="DFG_LUT",ui.minFilter=on,ui.magFilter=on,ui.wrapS=ki,ui.wrapT=ki,ui.generateMipmaps=!1,ui.needsUpdate=!0),ui}class cd{constructor(e={}){const{canvas:n=VM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:m=Pn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;const v=m,g=new Set([op,sp,rp]),d=new Set([Pn,Mi,va,xa,tp,np]),p=new Uint32Array(4),x=new Int32Array(4);let y=null,T=null;const A=[],C=[];let S=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let U=!1;this._outputColorSpace=kn;let I=0,b=0,P=null,H=-1,V=null;const G=new Rt,O=new Rt;let z=null;const W=new Be(0);let J=0,ee=n.width,te=n.height,Pe=1,Ye=null,Xe=null;const q=new Rt(0,0,ee,te),re=new Rt(0,0,ee,te);let le=!1;const Ne=new hp;let be=!1,De=!1;const Vt=new ut,$e=new D,tt=new Rt,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function bt(){return P===null?Pe:1}let N=i;function Nt(w,k){return n.getContext(w,k)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Jh}`),n.addEventListener("webglcontextlost",Se,!1),n.addEventListener("webglcontextrestored",Ue,!1),n.addEventListener("webglcontextcreationerror",mt,!1),N===null){const k="webgl2";if(N=Nt(k,w),N===null)throw Nt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Ke("WebGLRenderer: "+w.message),w}let et,pt,Te,R,M,B,Z,Q,K,xe,ce,Re,Le,ie,oe,ye,Me,me,He,F,ue,ae,ve;function se(){et=new Tw(N),et.init(),ue=new pC(N,et),pt=new gw(N,et,e,ue),Te=new fC(N,et),pt.reversedDepthBuffer&&u&&Te.buffers.depth.setReversed(!0),R=new Cw(N),M=new JA,B=new hC(N,et,Te,M,pt,ue,R),Z=new Ew(E),Q=new IE(N),ae=new pw(N,Q),K=new ww(N,Q,R,ae),xe=new bw(N,K,Q,ae,R),me=new Rw(N,pt,B),oe=new _w(M),ce=new ZA(E,Z,et,pt,ae,oe),Re=new yC(E,M),Le=new eC,ie=new oC(et),Me=new hw(E,Z,Te,xe,_,l),ye=new dC(E,xe,pt),ve=new SC(N,R,pt,Te),He=new mw(N,et,R),F=new Aw(N,et,R),R.programs=ce.programs,E.capabilities=pt,E.extensions=et,E.properties=M,E.renderLists=Le,E.shadowMap=ye,E.state=Te,E.info=R}se(),v!==Pn&&(S=new Lw(v,n.width,n.height,r,s));const $=new vC(E,N);this.xr=$,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const w=et.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=et.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Pe},this.setPixelRatio=function(w){w!==void 0&&(Pe=w,this.setSize(ee,te,!1))},this.getSize=function(w){return w.set(ee,te)},this.setSize=function(w,k,Y=!0){if($.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}ee=w,te=k,n.width=Math.floor(w*Pe),n.height=Math.floor(k*Pe),Y===!0&&(n.style.width=w+"px",n.style.height=k+"px"),S!==null&&S.setSize(n.width,n.height),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(ee*Pe,te*Pe).floor()},this.setDrawingBufferSize=function(w,k,Y){ee=w,te=k,Pe=Y,n.width=Math.floor(w*Y),n.height=Math.floor(k*Y),this.setViewport(0,0,w,k)},this.setEffects=function(w){if(v===Pn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let k=0;k<w.length;k++)if(w[k].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(G)},this.getViewport=function(w){return w.copy(q)},this.setViewport=function(w,k,Y,X){w.isVector4?q.set(w.x,w.y,w.z,w.w):q.set(w,k,Y,X),Te.viewport(G.copy(q).multiplyScalar(Pe).round())},this.getScissor=function(w){return w.copy(re)},this.setScissor=function(w,k,Y,X){w.isVector4?re.set(w.x,w.y,w.z,w.w):re.set(w,k,Y,X),Te.scissor(O.copy(re).multiplyScalar(Pe).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(w){Te.setScissorTest(le=w)},this.setOpaqueSort=function(w){Ye=w},this.setTransparentSort=function(w){Xe=w},this.getClearColor=function(w){return w.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(w=!0,k=!0,Y=!0){let X=0;if(w){let j=!1;if(P!==null){const fe=P.texture.format;j=g.has(fe)}if(j){const fe=P.texture.type,ge=d.has(fe),he=Me.getClearColor(),Ee=Me.getClearAlpha(),Ae=he.r,Oe=he.g,We=he.b;ge?(p[0]=Ae,p[1]=Oe,p[2]=We,p[3]=Ee,N.clearBufferuiv(N.COLOR,0,p)):(x[0]=Ae,x[1]=Oe,x[2]=We,x[3]=Ee,N.clearBufferiv(N.COLOR,0,x))}else X|=N.COLOR_BUFFER_BIT}k&&(X|=N.DEPTH_BUFFER_BIT),Y&&(X|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&N.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Se,!1),n.removeEventListener("webglcontextrestored",Ue,!1),n.removeEventListener("webglcontextcreationerror",mt,!1),Me.dispose(),Le.dispose(),ie.dispose(),M.dispose(),Z.dispose(),xe.dispose(),ae.dispose(),ve.dispose(),ce.dispose(),$.dispose(),$.removeEventListener("sessionstart",Mp),$.removeEventListener("sessionend",Ep),br.stop()};function Se(w){w.preventDefault(),Mc("WebGLRenderer: Context Lost."),U=!0}function Ue(){Mc("WebGLRenderer: Context Restored."),U=!1;const w=R.autoReset,k=ye.enabled,Y=ye.autoUpdate,X=ye.needsUpdate,j=ye.type;se(),R.autoReset=w,ye.enabled=k,ye.autoUpdate=Y,ye.needsUpdate=X,ye.type=j}function mt(w){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function nt(w){const k=w.target;k.removeEventListener("dispose",nt),wi(k)}function wi(w){Ai(w),M.remove(w)}function Ai(w){const k=M.get(w).programs;k!==void 0&&(k.forEach(function(Y){ce.releaseProgram(Y)}),w.isShaderMaterial&&ce.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,Y,X,j,fe){k===null&&(k=dt);const ge=j.isMesh&&j.matrixWorld.determinant()<0,he=cx(w,k,Y,X,j);Te.setMaterial(X,ge);let Ee=Y.index,Ae=1;if(X.wireframe===!0){if(Ee=K.getWireframeAttribute(Y),Ee===void 0)return;Ae=2}const Oe=Y.drawRange,We=Y.attributes.position;let Ce=Oe.start*Ae,at=(Oe.start+Oe.count)*Ae;fe!==null&&(Ce=Math.max(Ce,fe.start*Ae),at=Math.min(at,(fe.start+fe.count)*Ae)),Ee!==null?(Ce=Math.max(Ce,0),at=Math.min(at,Ee.count)):We!=null&&(Ce=Math.max(Ce,0),at=Math.min(at,We.count));const Pt=at-Ce;if(Pt<0||Pt===1/0)return;ae.setup(j,X,he,Y,Ee);let At,lt=He;if(Ee!==null&&(At=Q.get(Ee),lt=F,lt.setIndex(At)),j.isMesh)X.wireframe===!0?(Te.setLineWidth(X.wireframeLinewidth*bt()),lt.setMode(N.LINES)):lt.setMode(N.TRIANGLES);else if(j.isLine){let Qt=X.linewidth;Qt===void 0&&(Qt=1),Te.setLineWidth(Qt*bt()),j.isLineSegments?lt.setMode(N.LINES):j.isLineLoop?lt.setMode(N.LINE_LOOP):lt.setMode(N.LINE_STRIP)}else j.isPoints?lt.setMode(N.POINTS):j.isSprite&&lt.setMode(N.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Ec("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))lt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Qt=j._multiDrawStarts,we=j._multiDrawCounts,wn=j._multiDrawCount,Qe=Ee?Q.get(Ee).bytesPerElement:1,Xn=M.get(X).currentProgram.getUniforms();for(let ai=0;ai<wn;ai++)Xn.setValue(N,"_gl_DrawID",ai),lt.render(Qt[ai]/Qe,we[ai])}else if(j.isInstancedMesh)lt.renderInstances(Ce,Pt,j.count);else if(Y.isInstancedBufferGeometry){const Qt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,we=Math.min(Y.instanceCount,Qt);lt.renderInstances(Ce,Pt,we)}else lt.render(Ce,Pt)};function Sp(w,k,Y){w.transparent===!0&&w.side===pi&&w.forceSinglePass===!1?(w.side=Tn,w.needsUpdate=!0,La(w,k,Y),w.side=Tr,w.needsUpdate=!0,La(w,k,Y),w.side=pi):La(w,k,Y)}this.compile=function(w,k,Y=null){Y===null&&(Y=w),T=ie.get(Y),T.init(k),C.push(T),Y.traverseVisible(function(j){j.isLight&&j.layers.test(k.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),w!==Y&&w.traverseVisible(function(j){j.isLight&&j.layers.test(k.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),T.setupLights();const X=new Set;return w.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const fe=j.material;if(fe)if(Array.isArray(fe))for(let ge=0;ge<fe.length;ge++){const he=fe[ge];Sp(he,Y,j),X.add(he)}else Sp(fe,Y,j),X.add(fe)}),T=C.pop(),X},this.compileAsync=function(w,k,Y=null){const X=this.compile(w,k,Y);return new Promise(j=>{function fe(){if(X.forEach(function(ge){M.get(ge).currentProgram.isReady()&&X.delete(ge)}),X.size===0){j(w);return}setTimeout(fe,10)}et.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Jc=null;function lx(w){Jc&&Jc(w)}function Mp(){br.stop()}function Ep(){br.start()}const br=new Qv;br.setAnimationLoop(lx),typeof self<"u"&&br.setContext(self),this.setAnimationLoop=function(w){Jc=w,$.setAnimationLoop(w),w===null?br.stop():br.start()},$.addEventListener("sessionstart",Mp),$.addEventListener("sessionend",Ep),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;const Y=$.enabled===!0&&$.isPresenting===!0,X=S!==null&&(P===null||Y)&&S.begin(E,P);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&($.cameraAutoUpdate===!0&&$.updateCamera(k),k=$.getCamera()),w.isScene===!0&&w.onBeforeRender(E,w,k,P),T=ie.get(w,C.length),T.init(k),C.push(T),Vt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Ne.setFromProjectionMatrix(Vt,gi,k.reversedDepth),De=this.localClippingEnabled,be=oe.init(this.clippingPlanes,De),y=Le.get(w,A.length),y.init(),A.push(y),$.enabled===!0&&$.isPresenting===!0){const ge=E.xr.getDepthSensingMesh();ge!==null&&Qc(ge,k,-1/0,E.sortObjects)}Qc(w,k,0,E.sortObjects),y.finish(),E.sortObjects===!0&&y.sort(Ye,Xe),Ge=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Ge&&Me.addToRenderList(y,w),this.info.render.frame++,be===!0&&oe.beginShadows();const j=T.state.shadowsArray;if(ye.render(j,w,k),be===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(X&&S.hasRenderPass())===!1){const ge=y.opaque,he=y.transmissive;if(T.setupLights(),k.isArrayCamera){const Ee=k.cameras;if(he.length>0)for(let Ae=0,Oe=Ee.length;Ae<Oe;Ae++){const We=Ee[Ae];wp(ge,he,w,We)}Ge&&Me.render(w);for(let Ae=0,Oe=Ee.length;Ae<Oe;Ae++){const We=Ee[Ae];Tp(y,w,We,We.viewport)}}else he.length>0&&wp(ge,he,w,k),Ge&&Me.render(w),Tp(y,w,k)}P!==null&&b===0&&(B.updateMultisampleRenderTarget(P),B.updateRenderTargetMipmap(P)),X&&S.end(E),w.isScene===!0&&w.onAfterRender(E,w,k),ae.resetDefaultState(),H=-1,V=null,C.pop(),C.length>0?(T=C[C.length-1],be===!0&&oe.setGlobalState(E.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?y=A[A.length-1]:y=null};function Qc(w,k,Y,X){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)T.pushLight(w),w.castShadow&&T.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ne.intersectsSprite(w)){X&&tt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Vt);const ge=xe.update(w),he=w.material;he.visible&&y.push(w,ge,he,Y,tt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ne.intersectsObject(w))){const ge=xe.update(w),he=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),tt.copy(w.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),tt.copy(ge.boundingSphere.center)),tt.applyMatrix4(w.matrixWorld).applyMatrix4(Vt)),Array.isArray(he)){const Ee=ge.groups;for(let Ae=0,Oe=Ee.length;Ae<Oe;Ae++){const We=Ee[Ae],Ce=he[We.materialIndex];Ce&&Ce.visible&&y.push(w,ge,Ce,Y,tt.z,We)}}else he.visible&&y.push(w,ge,he,Y,tt.z,null)}}const fe=w.children;for(let ge=0,he=fe.length;ge<he;ge++)Qc(fe[ge],k,Y,X)}function Tp(w,k,Y,X){const{opaque:j,transmissive:fe,transparent:ge}=w;T.setupLightsView(Y),be===!0&&oe.setGlobalState(E.clippingPlanes,Y),X&&Te.viewport(G.copy(X)),j.length>0&&Pa(j,k,Y),fe.length>0&&Pa(fe,k,Y),ge.length>0&&Pa(ge,k,Y),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function wp(w,k,Y,X){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[X.id]===void 0){const Ce=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[X.id]=new Si(1,1,{generateMipmaps:!0,type:Ce?Yi:Pn,minFilter:jr,samples:Math.max(4,pt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}const fe=T.state.transmissionRenderTarget[X.id],ge=X.viewport||G;fe.setSize(ge.z*E.transmissionResolutionScale,ge.w*E.transmissionResolutionScale);const he=E.getRenderTarget(),Ee=E.getActiveCubeFace(),Ae=E.getActiveMipmapLevel();E.setRenderTarget(fe),E.getClearColor(W),J=E.getClearAlpha(),J<1&&E.setClearColor(16777215,.5),E.clear(),Ge&&Me.render(Y);const Oe=E.toneMapping;E.toneMapping=yi;const We=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),T.setupLightsView(X),be===!0&&oe.setGlobalState(E.clippingPlanes,X),Pa(w,Y,X),B.updateMultisampleRenderTarget(fe),B.updateRenderTargetMipmap(fe),et.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let at=0,Pt=k.length;at<Pt;at++){const At=k[at],{object:lt,geometry:Qt,material:we,group:wn}=At;if(we.side===pi&&lt.layers.test(X.layers)){const Qe=we.side;we.side=Tn,we.needsUpdate=!0,Ap(lt,Y,X,Qt,we,wn),we.side=Qe,we.needsUpdate=!0,Ce=!0}}Ce===!0&&(B.updateMultisampleRenderTarget(fe),B.updateRenderTargetMipmap(fe))}E.setRenderTarget(he,Ee,Ae),E.setClearColor(W,J),We!==void 0&&(X.viewport=We),E.toneMapping=Oe}function Pa(w,k,Y){const X=k.isScene===!0?k.overrideMaterial:null;for(let j=0,fe=w.length;j<fe;j++){const ge=w[j],{object:he,geometry:Ee,group:Ae}=ge;let Oe=ge.material;Oe.allowOverride===!0&&X!==null&&(Oe=X),he.layers.test(Y.layers)&&Ap(he,k,Y,Ee,Oe,Ae)}}function Ap(w,k,Y,X,j,fe){w.onBeforeRender(E,k,Y,X,j,fe),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(E,k,Y,X,w,fe),j.transparent===!0&&j.side===pi&&j.forceSinglePass===!1?(j.side=Tn,j.needsUpdate=!0,E.renderBufferDirect(Y,k,X,j,w,fe),j.side=Tr,j.needsUpdate=!0,E.renderBufferDirect(Y,k,X,j,w,fe),j.side=pi):E.renderBufferDirect(Y,k,X,j,w,fe),w.onAfterRender(E,k,Y,X,j,fe)}function La(w,k,Y){k.isScene!==!0&&(k=dt);const X=M.get(w),j=T.state.lights,fe=T.state.shadowsArray,ge=j.state.version,he=ce.getParameters(w,j.state,fe,k,Y),Ee=ce.getProgramCacheKey(he);let Ae=X.programs;X.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?k.environment:null,X.fog=k.fog;const Oe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;X.envMap=Z.get(w.envMap||X.environment,Oe),X.envMapRotation=X.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,Ae===void 0&&(w.addEventListener("dispose",nt),Ae=new Map,X.programs=Ae);let We=Ae.get(Ee);if(We!==void 0){if(X.currentProgram===We&&X.lightsStateVersion===ge)return Rp(w,he),We}else he.uniforms=ce.getUniforms(w),w.onBeforeCompile(he,E),We=ce.acquireProgram(he,Ee),Ae.set(Ee,We),X.uniforms=he.uniforms;const Ce=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ce.clippingPlanes=oe.uniform),Rp(w,he),X.needsLights=dx(w),X.lightsStateVersion=ge,X.needsLights&&(Ce.ambientLightColor.value=j.state.ambient,Ce.lightProbe.value=j.state.probe,Ce.directionalLights.value=j.state.directional,Ce.directionalLightShadows.value=j.state.directionalShadow,Ce.spotLights.value=j.state.spot,Ce.spotLightShadows.value=j.state.spotShadow,Ce.rectAreaLights.value=j.state.rectArea,Ce.ltc_1.value=j.state.rectAreaLTC1,Ce.ltc_2.value=j.state.rectAreaLTC2,Ce.pointLights.value=j.state.point,Ce.pointLightShadows.value=j.state.pointShadow,Ce.hemisphereLights.value=j.state.hemi,Ce.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ce.spotLightMatrix.value=j.state.spotLightMatrix,Ce.spotLightMap.value=j.state.spotLightMap,Ce.pointShadowMatrix.value=j.state.pointShadowMatrix),X.currentProgram=We,X.uniformsList=null,We}function Cp(w){if(w.uniformsList===null){const k=w.currentProgram.getUniforms();w.uniformsList=ql.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function Rp(w,k){const Y=M.get(w);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.batchingColor=k.batchingColor,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.instancingMorph=k.instancingMorph,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function cx(w,k,Y,X,j){k.isScene!==!0&&(k=dt),B.resetTextureUnits();const fe=k.fog,ge=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?k.environment:null,he=P===null?E.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:so,Ee=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Ae=Z.get(X.envMap||ge,Ee),Oe=X.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,We=!!Y.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ce=!!Y.morphAttributes.position,at=!!Y.morphAttributes.normal,Pt=!!Y.morphAttributes.color;let At=yi;X.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(At=E.toneMapping);const lt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Qt=lt!==void 0?lt.length:0,we=M.get(X),wn=T.state.lights;if(be===!0&&(De===!0||w!==V)){const Gt=w===V&&X.id===H;oe.setState(X,w,Gt)}let Qe=!1;X.version===we.__version?(we.needsLights&&we.lightsStateVersion!==wn.state.version||we.outputColorSpace!==he||j.isBatchedMesh&&we.batching===!1||!j.isBatchedMesh&&we.batching===!0||j.isBatchedMesh&&we.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&we.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&we.instancing===!1||!j.isInstancedMesh&&we.instancing===!0||j.isSkinnedMesh&&we.skinning===!1||!j.isSkinnedMesh&&we.skinning===!0||j.isInstancedMesh&&we.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&we.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&we.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&we.instancingMorph===!1&&j.morphTexture!==null||we.envMap!==Ae||X.fog===!0&&we.fog!==fe||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==oe.numPlanes||we.numIntersection!==oe.numIntersection)||we.vertexAlphas!==Oe||we.vertexTangents!==We||we.morphTargets!==Ce||we.morphNormals!==at||we.morphColors!==Pt||we.toneMapping!==At||we.morphTargetsCount!==Qt)&&(Qe=!0):(Qe=!0,we.__version=X.version);let Xn=we.currentProgram;Qe===!0&&(Xn=La(X,k,j));let ai=!1,Pr=!1,os=!1;const ft=Xn.getUniforms(),Yt=we.uniforms;if(Te.useProgram(Xn.program)&&(ai=!0,Pr=!0,os=!0),X.id!==H&&(H=X.id,Pr=!0),ai||V!==w){Te.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ft.setValue(N,"projectionMatrix",w.projectionMatrix),ft.setValue(N,"viewMatrix",w.matrixWorldInverse);const Zi=ft.map.cameraPosition;Zi!==void 0&&Zi.setValue(N,$e.setFromMatrixPosition(w.matrixWorld)),pt.logarithmicDepthBuffer&&ft.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ft.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),V!==w&&(V=w,Pr=!0,os=!0)}if(we.needsLights&&(wn.state.directionalShadowMap.length>0&&ft.setValue(N,"directionalShadowMap",wn.state.directionalShadowMap,B),wn.state.spotShadowMap.length>0&&ft.setValue(N,"spotShadowMap",wn.state.spotShadowMap,B),wn.state.pointShadowMap.length>0&&ft.setValue(N,"pointShadowMap",wn.state.pointShadowMap,B)),j.isSkinnedMesh){ft.setOptional(N,j,"bindMatrix"),ft.setOptional(N,j,"bindMatrixInverse");const Gt=j.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),ft.setValue(N,"boneTexture",Gt.boneTexture,B))}j.isBatchedMesh&&(ft.setOptional(N,j,"batchingTexture"),ft.setValue(N,"batchingTexture",j._matricesTexture,B),ft.setOptional(N,j,"batchingIdTexture"),ft.setValue(N,"batchingIdTexture",j._indirectTexture,B),ft.setOptional(N,j,"batchingColorTexture"),j._colorsTexture!==null&&ft.setValue(N,"batchingColorTexture",j._colorsTexture,B));const Ki=Y.morphAttributes;if((Ki.position!==void 0||Ki.normal!==void 0||Ki.color!==void 0)&&me.update(j,Y,Xn),(Pr||we.receiveShadow!==j.receiveShadow)&&(we.receiveShadow=j.receiveShadow,ft.setValue(N,"receiveShadow",j.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&k.environment!==null&&(Yt.envMapIntensity.value=k.environmentIntensity),Yt.dfgLUT!==void 0&&(Yt.dfgLUT.value=EC()),Pr&&(ft.setValue(N,"toneMappingExposure",E.toneMappingExposure),we.needsLights&&ux(Yt,os),fe&&X.fog===!0&&Re.refreshFogUniforms(Yt,fe),Re.refreshMaterialUniforms(Yt,X,Pe,te,T.state.transmissionRenderTarget[w.id]),ql.upload(N,Cp(we),Yt,B)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ql.upload(N,Cp(we),Yt,B),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ft.setValue(N,"center",j.center),ft.setValue(N,"modelViewMatrix",j.modelViewMatrix),ft.setValue(N,"normalMatrix",j.normalMatrix),ft.setValue(N,"modelMatrix",j.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Gt=X.uniformsGroups;for(let Zi=0,as=Gt.length;Zi<as;Zi++){const bp=Gt[Zi];ve.update(bp,Xn),ve.bind(bp,Xn)}}return Xn}function ux(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function dx(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,k,Y){const X=M.get(w);X.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),M.get(w.texture).__webglTexture=k,M.get(w.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Y,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,k){const Y=M.get(w);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0};const fx=N.createFramebuffer();this.setRenderTarget=function(w,k=0,Y=0){P=w,I=k,b=Y;let X=null,j=!1,fe=!1;if(w){const he=M.get(w);if(he.__useDefaultFramebuffer!==void 0){Te.bindFramebuffer(N.FRAMEBUFFER,he.__webglFramebuffer),G.copy(w.viewport),O.copy(w.scissor),z=w.scissorTest,Te.viewport(G),Te.scissor(O),Te.setScissorTest(z),H=-1;return}else if(he.__webglFramebuffer===void 0)B.setupRenderTarget(w);else if(he.__hasExternalTextures)B.rebindTextures(w,M.get(w.texture).__webglTexture,M.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Oe=w.depthTexture;if(he.__boundDepthTexture!==Oe){if(Oe!==null&&M.has(Oe)&&(w.width!==Oe.image.width||w.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(w)}}const Ee=w.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(fe=!0);const Ae=M.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ae[k])?X=Ae[k][Y]:X=Ae[k],j=!0):w.samples>0&&B.useMultisampledRTT(w)===!1?X=M.get(w).__webglMultisampledFramebuffer:Array.isArray(Ae)?X=Ae[Y]:X=Ae,G.copy(w.viewport),O.copy(w.scissor),z=w.scissorTest}else G.copy(q).multiplyScalar(Pe).floor(),O.copy(re).multiplyScalar(Pe).floor(),z=le;if(Y!==0&&(X=fx),Te.bindFramebuffer(N.FRAMEBUFFER,X)&&Te.drawBuffers(w,X),Te.viewport(G),Te.scissor(O),Te.setScissorTest(z),j){const he=M.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+k,he.__webglTexture,Y)}else if(fe){const he=k;for(let Ee=0;Ee<w.textures.length;Ee++){const Ae=M.get(w.textures[Ee]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ee,Ae.__webglTexture,Y,he)}}else if(w!==null&&Y!==0){const he=M.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,he.__webglTexture,Y)}H=-1},this.readRenderTargetPixels=function(w,k,Y,X,j,fe,ge,he=0){if(!(w&&w.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=M.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ge!==void 0&&(Ee=Ee[ge]),Ee){Te.bindFramebuffer(N.FRAMEBUFFER,Ee);try{const Ae=w.textures[he],Oe=Ae.format,We=Ae.type;if(w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+he),!pt.textureFormatReadable(Oe)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pt.textureTypeReadable(We)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-X&&Y>=0&&Y<=w.height-j&&N.readPixels(k,Y,X,j,ue.convert(Oe),ue.convert(We),fe)}finally{const Ae=P!==null?M.get(P).__webglFramebuffer:null;Te.bindFramebuffer(N.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(w,k,Y,X,j,fe,ge,he=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=M.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ge!==void 0&&(Ee=Ee[ge]),Ee)if(k>=0&&k<=w.width-X&&Y>=0&&Y<=w.height-j){Te.bindFramebuffer(N.FRAMEBUFFER,Ee);const Ae=w.textures[he],Oe=Ae.format,We=Ae.type;if(w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+he),!pt.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pt.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ce=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ce),N.bufferData(N.PIXEL_PACK_BUFFER,fe.byteLength,N.STREAM_READ),N.readPixels(k,Y,X,j,ue.convert(Oe),ue.convert(We),0);const at=P!==null?M.get(P).__webglFramebuffer:null;Te.bindFramebuffer(N.FRAMEBUFFER,at);const Pt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await GM(N,Pt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ce),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,fe),N.deleteBuffer(Ce),N.deleteSync(Pt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,k=null,Y=0){const X=Math.pow(2,-Y),j=Math.floor(w.image.width*X),fe=Math.floor(w.image.height*X),ge=k!==null?k.x:0,he=k!==null?k.y:0;B.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,Y,0,0,ge,he,j,fe),Te.unbindTexture()};const hx=N.createFramebuffer(),px=N.createFramebuffer();this.copyTextureToTexture=function(w,k,Y=null,X=null,j=0,fe=0){let ge,he,Ee,Ae,Oe,We,Ce,at,Pt;const At=w.isCompressedTexture?w.mipmaps[fe]:w.image;if(Y!==null)ge=Y.max.x-Y.min.x,he=Y.max.y-Y.min.y,Ee=Y.isBox3?Y.max.z-Y.min.z:1,Ae=Y.min.x,Oe=Y.min.y,We=Y.isBox3?Y.min.z:0;else{const Yt=Math.pow(2,-j);ge=Math.floor(At.width*Yt),he=Math.floor(At.height*Yt),w.isDataArrayTexture?Ee=At.depth:w.isData3DTexture?Ee=Math.floor(At.depth*Yt):Ee=1,Ae=0,Oe=0,We=0}X!==null?(Ce=X.x,at=X.y,Pt=X.z):(Ce=0,at=0,Pt=0);const lt=ue.convert(k.format),Qt=ue.convert(k.type);let we;k.isData3DTexture?(B.setTexture3D(k,0),we=N.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(B.setTexture2DArray(k,0),we=N.TEXTURE_2D_ARRAY):(B.setTexture2D(k,0),we=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,k.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,k.unpackAlignment);const wn=N.getParameter(N.UNPACK_ROW_LENGTH),Qe=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Xn=N.getParameter(N.UNPACK_SKIP_PIXELS),ai=N.getParameter(N.UNPACK_SKIP_ROWS),Pr=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,At.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,At.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ae),N.pixelStorei(N.UNPACK_SKIP_ROWS,Oe),N.pixelStorei(N.UNPACK_SKIP_IMAGES,We);const os=w.isDataArrayTexture||w.isData3DTexture,ft=k.isDataArrayTexture||k.isData3DTexture;if(w.isDepthTexture){const Yt=M.get(w),Ki=M.get(k),Gt=M.get(Yt.__renderTarget),Zi=M.get(Ki.__renderTarget);Te.bindFramebuffer(N.READ_FRAMEBUFFER,Gt.__webglFramebuffer),Te.bindFramebuffer(N.DRAW_FRAMEBUFFER,Zi.__webglFramebuffer);for(let as=0;as<Ee;as++)os&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,M.get(w).__webglTexture,j,We+as),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,M.get(k).__webglTexture,fe,Pt+as)),N.blitFramebuffer(Ae,Oe,ge,he,Ce,at,ge,he,N.DEPTH_BUFFER_BIT,N.NEAREST);Te.bindFramebuffer(N.READ_FRAMEBUFFER,null),Te.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(j!==0||w.isRenderTargetTexture||M.has(w)){const Yt=M.get(w),Ki=M.get(k);Te.bindFramebuffer(N.READ_FRAMEBUFFER,hx),Te.bindFramebuffer(N.DRAW_FRAMEBUFFER,px);for(let Gt=0;Gt<Ee;Gt++)os?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Yt.__webglTexture,j,We+Gt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Yt.__webglTexture,j),ft?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ki.__webglTexture,fe,Pt+Gt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ki.__webglTexture,fe),j!==0?N.blitFramebuffer(Ae,Oe,ge,he,Ce,at,ge,he,N.COLOR_BUFFER_BIT,N.NEAREST):ft?N.copyTexSubImage3D(we,fe,Ce,at,Pt+Gt,Ae,Oe,ge,he):N.copyTexSubImage2D(we,fe,Ce,at,Ae,Oe,ge,he);Te.bindFramebuffer(N.READ_FRAMEBUFFER,null),Te.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ft?w.isDataTexture||w.isData3DTexture?N.texSubImage3D(we,fe,Ce,at,Pt,ge,he,Ee,lt,Qt,At.data):k.isCompressedArrayTexture?N.compressedTexSubImage3D(we,fe,Ce,at,Pt,ge,he,Ee,lt,At.data):N.texSubImage3D(we,fe,Ce,at,Pt,ge,he,Ee,lt,Qt,At):w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,fe,Ce,at,ge,he,lt,Qt,At.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,fe,Ce,at,At.width,At.height,lt,At.data):N.texSubImage2D(N.TEXTURE_2D,fe,Ce,at,ge,he,lt,Qt,At);N.pixelStorei(N.UNPACK_ROW_LENGTH,wn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Qe),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Xn),N.pixelStorei(N.UNPACK_SKIP_ROWS,ai),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Pr),fe===0&&k.generateMipmaps&&N.generateMipmap(we),Te.unbindTexture()},this.initRenderTarget=function(w){M.get(w).__webglFramebuffer===void 0&&B.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?B.setTextureCube(w,0):w.isData3DTexture?B.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?B.setTexture2DArray(w,0):B.setTexture2D(w,0),Te.unbindTexture()},this.resetState=function(){I=0,b=0,P=null,Te.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ze._getUnpackColorSpace()}}function TC(t){const n=new Float32Array(3e3),i=new Float32Array(1e3);for(let a=0;a<1e3;a++){const l=Math.random()*Math.PI*2,c=50+Math.random()*400;n[a*3]=Math.cos(l)*c,n[a*3+1]=Math.sin(l)*c,n[a*3+2]=-Math.random()*8e3,i[a]=2e3+Math.random()*3e3}const r=new It;r.setAttribute("position",new ln(n,3));const s=new Xc({color:pn.hyperspaceBright,size:4,blending:to,depthWrite:!1,sizeAttenuation:!0}),o=new mp(r,s);return o._velocities=i,t.add(o),o}function wC(t,e){const n=t.geometry.attributes.position,i=t._velocities,r=n.array;for(let s=0;s<i.length;s++)r[s*3+2]+=i[s]*e,r[s*3+2]>200&&(r[s*3+2]=-8e3);n.needsUpdate=!0}function AC(t){const n=new Float32Array(48),i=300;for(let a=0;a<8;a++){const l=a/8*Math.PI*2,c=a*6;n[c]=Math.cos(l)*i,n[c+1]=Math.sin(l)*i,n[c+2]=-8e3+a/8*8200,n[c+3]=0,n[c+4]=0,n[c+5]=200}const r=new It;r.setAttribute("position",new ln(n,3));const s=new jc({color:4465356,transparent:!0,opacity:.8}),o=new pp(r,s);return t.add(o),o}function CC(t,e){const n=t.geometry.attributes.position,i=n.array,r=i.length/6;for(let s=0;s<r;s++)i[s*6+2]+=3e3*e,i[s*6+2]>200&&(i[s*6+2]=-8e3);n.needsUpdate=!0}function RC(t,e,n,i,r,s){const a=new Float32Array(240),l=new Float32Array(80*3),c=new Float32Array(80),f=new Uint8Array(80),h=new Uint8Array(80),u=new Be(r),m=new Be(s);for(let p=0;p<80;p++){const x=Math.random()<.5,y=x?n:i,T=x?i:n,A=x?u:m;f[p]=Math.floor(Math.random()*y.length),h[p]=Math.floor(Math.random()*T.length),c[p]=Math.random(),l[p*3]=A.r,l[p*3+1]=A.g,l[p*3+2]=A.b;const C=y[f[p]],S=T[h[p]];a[p*3]=C.x+(S.x-C.x)*c[p],a[p*3+1]=C.y+(S.y-C.y)*c[p],a[p*3+2]=C.z+(S.z-C.z)*c[p]}const _=new It;_.setAttribute("position",new ln(a,3)),_.setAttribute("color",new _t(l,3));const v=new Xc({size:4,vertexColors:!0,blending:to,depthWrite:!1,sizeAttenuation:!1}),g=new mp(_,v),d={tValues:c,sourceIndices:f,targetIndices:h,colors:l,colorA:u,colorB:m};return g._battleData=d,g._shipsA=n,g._shipsB=i,t.add(g),g}function bC(t,e,n){const i=t._battleData,r=t._shipsA,s=t._shipsB;if(!i)return;const o=t.geometry.attributes.position,a=o.array,l=i.tValues.length;for(let f=0;f<l;f++){if(i.tValues[f]+=e*1.5,i.tValues[f]>=1){if(n){const C=a[f*3],S=a[f*3+1],E=a[f*3+2],U=i.colors[f*3],I=i.colors[f*3+1],b=i.colors[f*3+2];DC(n,C,S,E,U,I,b)}i.tValues[f]=0;const x=Math.random()<.5,y=x?r:s,T=x?s:r,A=x?i.colorA:i.colorB;i.sourceIndices[f]=Math.floor(Math.random()*y.length),i.targetIndices[f]=Math.floor(Math.random()*T.length),i.colors[f*3]=A.r,i.colors[f*3+1]=A.g,i.colors[f*3+2]=A.b}const h=i.colors[f*3]===i.colorA.r&&i.colors[f*3+1]===i.colorA.g,u=h?r:s,m=h?s:r,_=i.sourceIndices[f]%u.length,v=i.targetIndices[f]%m.length,g=u[_],d=m[v],p=i.tValues[f];a[f*3]=g.x+(d.x-g.x)*p,a[f*3+1]=g.y+(d.y-g.y)*p,a[f*3+2]=g.z+(d.z-g.z)*p}o.needsUpdate=!0;const c=t.geometry.attributes.color;c&&(c.needsUpdate=!0)}const Qo=24,PC=.4,LC=80;function IC(){const t=document.createElement("canvas");t.width=64,t.height=64;const e=t.getContext("2d"),n=e.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.2,"rgba(255,200,100,0.9)"),n.addColorStop(.5,"rgba(255,100,50,0.4)"),n.addColorStop(1,"rgba(255,50,20,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);const i=new Xv(t),r=new dp({map:i,blending:to,depthWrite:!1,transparent:!0}),s=new Hv(r);return s.visible=!1,s.scale.setScalar(0),s}function NC(t){const e=[];for(let n=0;n<Qo;n++){const i=IC();t.add(i),e.push(i)}return{sprites:e,lifetimes:new Float32Array(Qo),maxLifetimes:new Float32Array(Qo),nextSlot:0}}function DC(t,e,n,i,r,s,o){if(Math.random()>.4)return;const a=t.nextSlot;t.nextSlot=(t.nextSlot+1)%Qo;const l=t.sprites[a];l.position.set(e,n,i),l.visible=!0;const c=l.material;c.color.setRGB(.6+r*.4,.4+s*.4,.3+o*.4),c.opacity=1;const f=PC*(.7+Math.random()*.6);t.lifetimes[a]=f,t.maxLifetimes[a]=f}function UC(t,e){for(let n=0;n<Qo;n++){if(t.lifetimes[n]<=0)continue;t.lifetimes[n]-=e;const i=1-t.lifetimes[n]/t.maxLifetimes[n];if(t.lifetimes[n]<=0){t.sprites[n].visible=!1,t.sprites[n].scale.setScalar(0);continue}const r=LC*(.3+.7*Math.sqrt(i));t.sprites[n].scale.setScalar(r);const s=t.sprites[n].material;s.opacity=Math.max(0,1-i*i)}}function FC(){const e=new Float32Array(6e3);for(let r=0;r<2e3;r++){const s=Math.random()*Math.PI*2,o=Math.acos(2*Math.random()-1),a=4e4;e[r*3]=a*Math.sin(o)*Math.cos(s),e[r*3+1]=a*Math.sin(o)*Math.sin(s),e[r*3+2]=a*Math.cos(o)}const n=new It;n.setAttribute("position",new ln(e,3));const i=new Xc({color:16777215,size:2,sizeAttenuation:!1});return new mp(n,i)}function Ma(t,e,n=pn.wireframe,i=.6){const r=new _i,s=new xp({color:e}),o=new gn(t,s);r.add(o);const a=new qv(t),l=new jc({color:n,transparent:!0,opacity:i}),c=new pp(a,l);return r.add(c),r}function $g(t,e,n=1){const i=new ba(t,n);return Ma(i,e,pn.wireframe)}function OC(t,e,n){const i=new ba(t,2),r=[],s=new Be(e),o=i.attributes.position;for(let h=0;h<o.count;h++){const u=o.getY(h),m=Math.sin(u*.05+n()*2)*.5+.5,_=s.clone().lerp(new Be(16777215),m*.3);r.push(_.r,_.g,_.b)}i.setAttribute("color",new _t(r,3));const a=new _i,l=new xp({vertexColors:!0});a.add(new gn(i,l));const c=new qv(i),f=new jc({color:pn.wireframe,transparent:!0,opacity:.4});return a.add(new pp(c,f)),a}function BC(t=60){const e=new _i,n=12,i=t,r=t*.35,s=t*.12,o=t*.15;for(let c=0;c<n;c++){const f=c/n*Math.PI*2,h=new ss(r,s,o),u=Ma(h,2241348,pn.stationWire,.8);u.position.set(Math.cos(f)*i,Math.sin(f)*i,0),u.rotation.z=f,e.add(u)}const a=new Yc(t*.15,t*.15,t*.3,8),l=Ma(a,1122867,pn.stationWire,.9);return l.rotation.x=Math.PI/2,e.add(l),e}function kC(t,e){const n=document.createElement("canvas");n.width=128,n.height=128;const i=n.getContext("2d"),r=new Be(t),s=Math.round(r.r*255),o=Math.round(r.g*255),a=Math.round(r.b*255),l=i.createRadialGradient(64,64,0,64,64,64);l.addColorStop(0,`rgba(${s},${o},${a},1)`),l.addColorStop(.3,`rgba(${s},${o},${a},0.5)`),l.addColorStop(1,`rgba(${s},${o},${a},0)`),i.fillStyle=l,i.fillRect(0,0,128,128);const c=new Xv(n),f=new dp({map:c,blending:to,depthWrite:!1}),h=new Hv(f);return h.scale.setScalar(e),h}function zC(t,e,n,i){const r=new ba(1,0),s=new xp({color:8947831}),o=new fE(r,s,n),a=new Xt;for(let l=0;l<n;l++){const c=i()*Math.PI*2,f=t+i()*(e-t),h=(i()-.5)*200,u=8+i()*25;a.position.set(Math.cos(c)*f,h,Math.sin(c)*f),a.rotation.set(i()*Math.PI*2,i()*Math.PI*2,i()*Math.PI*2),a.scale.setScalar(u),a.updateMatrix(),o.setMatrixAt(l,a.matrix)}return o.instanceMatrix.needsUpdate=!0,o}function VC(t=4508927){const e=new qc(8,24,4);return e.rotateX(Math.PI/2),Ma(e,t,t,.8)}function Kg(t,e){let n;return e>1.5?n=new ss(6*e,4*e,20*e):(n=new qc(8*e,24*e,4),n.rotateX(Math.PI/2)),Ma(n,t,t,.8)}function GC(t,e){const n=new _p(t,e,64),i=new Wc({color:11189196,side:pi,transparent:!0,opacity:.4}),r=new gn(n,i);return r.rotation.x=Math.PI/2,r}const HC=["Calypso Drift","Iron Meridian","Pale Coronal","Sonder Transit","Hecate Run","Free Margin","Lodestar VII","Equinox Haul","Vagrant Signal","Second Compact"],WC=[["We've been running this lane since before your grandfather's grandfather.","Don't mind the hull scoring — that's history, not damage."],["Good crossing. Sector's been quiet since the toll dispute.","You heading rimward? Watch the debris near the fourth planet."],["We carry what others won't touch. Legally.","If you're buying, we're selling. Simple as that."],["Long route from where we started. Always is.","Another ship. Another day still not being pirates."],["That's a fine vintage vessel you're running.","We remember the old routes. Things were different then."],["You're ancient. We can tell from the registry.","No disrespect. Ancient is valuable out here."],["Manifest's light this run. Economy.","If you need Food or Textiles, we're your best offer this side of the ring."],["Sector patrol's been heavy. Keep your transponder clean.","We don't ask questions. That policy keeps us flying."]];function jC(t,e,n,i,r){if(r.length<2)return[];const s=Math.floor((n-3200)/250),o=Ft.fromIndex(Zt,e*79+3+s*500),a=o.int(2,4),l=[];for(let c=0;c<a;c++){const f=o.int(0,r.length-1);let h=o.int(0,r.length-2);h>=f&&h++;const u=r[f].clone(),m=r[h].clone(),_=Ft.fromIndex(Zt,e*1009+c*31+s*137),v=_.int(1,3),g=[],d=new Set;for(let p=0;p<v;p++){let x,y=0;do x=_.pick(yv),y++;while(d.has(x)&&y<20);d.add(x),g.push({good:x,buyPrice:Math.round(_.float(50,200)),sellPrice:Math.round(_.float(30,180)),qty:_.int(1,10)})}l.push({id:`npc-${e}-${c}`,name:o.pick(HC),originSystemName:i,waypointA:u,waypointB:m,t:o.next(),direction:o.next()>.5?1:-1,speed:o.float(20,60),cargo:g,commLines:o.pick(WC),factionTag:null,color:4508927})}return l}const ea=[["Democracy","Libertine Democracy"],["Corporate State","Technocracy"],["Military Dictatorship","Stagnant Militancy"],["Theocracy","Feudal"],["Anarchist"]],XC=["Kor","Vel","Ash","Dra","Sol","Nyx"],YC=["athi","eron","undi","imar","ossa","enth"];function qC(){const t=Ft.fromIndex(Zt,16434960),e=[];for(let n=0;n<6;n++){const i=XC[n],r=YC[n],s=`${i}${r}`,o=n<ea.length?n:t.int(0,ea.length-1),a=[...ea[o]];e.push({id:`faction-${n}`,name:s,color:JS[n],politicalAffinity:a})}return e}const Go=qC();function ti(t){return Go.find(e=>e.id===t)}function yp(t,e,n){const i=Math.floor(e/Kh),r=Ft.fromIndex((Zt^t*2654435769^i*1367130551+4012)>>>0,i),s=Go.map(h=>{const u=h.politicalAffinity.includes(n)?3:.5,m=r.next()*1.5;return{faction:h,score:u+m}});s.sort((h,u)=>u.score-h.score);const o=s[0].faction;let a=.25;if(i>0){const h=Ft.fromIndex((Zt^t*2654435769^(i-1)*1367130551+4012)>>>0,i-1),u=Go.map(m=>{const _=m.politicalAffinity.includes(n)?3:.5,v=h.next()*1.5;return{faction:m,score:_+v}});u.sort((m,_)=>_.score-m.score),u[0].faction.id!==o.id&&(a=.6)}const l=Ft.fromIndex((Zt^t*2654435769^i*1367130551+3086)>>>0,i),c=l.next()<a;let f=null;if(c){const h=ea.find(m=>m.some(_=>o.politicalAffinity.includes(_))),u=Go.filter(m=>m.id===o.id?!1:ea.find(v=>v.some(g=>m.politicalAffinity.includes(g)))!==h);if(u.length>0)f=l.pick(u).id;else{const m=Go.filter(_=>_.id!==o.id);m.length>0&&(f=l.pick(m).id)}}return{controllingFactionId:o.id,contestingFactionId:f,isContested:f!==null}}const $C={Theocracy:["Narcotics","Slaves","Liquor"],"Military Dictatorship":["Narcotics","Luxuries"],Feudal:["Computers","Narcotics"],Democracy:["Slaves"],Technocracy:["Slaves"]},KC={Theocracy:1.15,"Military Dictatorship":1.2,"Corporate State":.95,"Libertine Democracy":.95},ZC={Democracy:["Agricultural","Industrial","Rich Industrial","High Tech"],"Libertine Democracy":["Agricultural","Industrial","Rich Industrial","High Tech"],"Corporate State":["Industrial","Rich Industrial","High Tech"],"Military Dictatorship":["Industrial","Poor Agricultural","Refinery"],"Stagnant Militancy":["Poor Agricultural","Industrial","Refinery"],Theocracy:["Agricultural","Poor Agricultural","Industrial"],Anarchist:["Poor Agricultural","Agricultural","Refinery","Industrial"],Technocracy:["High Tech","Industrial","Rich Industrial","Refinery"],Feudal:["Poor Agricultural","Agricultural"]},JC=[["Democracy","Libertine Democracy"],["Corporate State","Technocracy"],["Military Dictatorship","Stagnant Militancy"],["Theocracy","Feudal"],["Anarchist"]];function QC(t){return JC.find(e=>e.includes(t))??Zh}function eR(t,e,n){const i=Ft.fromIndex((Zt^t*2654435769^e*1367130551)>>>0,e);if(n!==null){const r=tR(t,n),s=QC(r);if(i.next()<.7)return Ft.fromIndex((Zt^t*2654435769^e*1367130551+1)>>>0,e).pick(s)}return Ft.fromIndex((Zt^t*2654435769^e*1367130551+2)>>>0,e).pick(Zh)}function tR(t,e){return Ft.fromIndex((Zt^t*2654435769^e*1367130551)>>>0,e).pick(Zh)}function nR(t,e,n){const i=ZC[e];return i.includes(t)?t:n.pick(i)}function Ea(t,e,n){const i=Math.floor(e/Kh),r=i>0?i-1:null,s=eR(t,i,r),o=Ft.fromIndex((Zt^t*2654435769^i*1367130551+3)>>>0,i),a=nR(n,s,o),l=$C[s]??[],c=KC[s]??1;return{systemId:t,galaxyYear:e,era:i,politics:s,economy:a,bannedGoods:l,priceModifier:c,luxuryMod:s==="Stagnant Militancy"?1.3:1,anarchyVariance:s==="Anarchist",techBonus:s==="Technocracy"?["Computers","Radioactives"]:[]}}function iR(t,e,n,i){const r=Ea(e,n,i.economy),s=yp(e,n,r.politics);if(!s.isContested||!s.contestingFactionId)return null;const o=Math.floor(n/Kh),a=Ft.fromIndex((Zt^e*2654435769^o*1367130551+47735)>>>0,o);if(t.planets.length===0)return null;const l=a.pick(t.planets),c=Math.cos(l.orbitPhase)*l.orbitRadius,f=Math.sin(l.orbitPhase)*l.orbitRadius,h=l.radius*4+300,u=a.next()*Math.PI*2,m=new D(c+Math.cos(u)*h,0,f+Math.sin(u)*h),_=a.int(5,8),v=a.int(5,8),g=400,d=Zg(a,_,s.controllingFactionId,new D(-g/2,0,0),"a",e),p=Zg(a,v,s.contestingFactionId,new D(g/2,0,0),"b",e);return{factionA:s.controllingFactionId,factionB:s.contestingFactionId,planetId:l.id,position:m,shipsA:d,shipsB:p,noGoRadius:600}}function Zg(t,e,n,i,r,s){const o=[];for(let a=0;a<e;a++){const c=a<2&&t.next()<.4?t.float(2,3):1,f=new D(i.x+(t.next()-.5)*150,(t.next()-.5)*80,i.z+(t.next()-.5)*150);o.push({id:`fleet-${s}-${r}-${a}`,localOffset:f,scale:c,factionId:n})}return o}class rR{constructor(e){ze(this,"renderer");ze(this,"scene");ze(this,"camera");ze(this,"shipGroup");ze(this,"starfield");ze(this,"entities",new Map);ze(this,"npcShips",new Map);ze(this,"starLight",null);ze(this,"hyperspacePoints",null);ze(this,"hyperspaceGrid",null);ze(this,"systemObjects",[]);ze(this,"battleProjectiles",null);ze(this,"battleExplosions",null);ze(this,"fleetBattleData",null);ze(this,"handleResize",()=>{const e=window.innerWidth,n=window.innerHeight;this.renderer.setSize(e,n),this.camera.aspect=e/n,this.camera.updateProjectionMatrix()});const n=e.getContext("webgl2",{antialias:!0}),i=n?null:e.getContext("webgl",{antialias:!0})??e.getContext("experimental-webgl");this.renderer=n?new cd({canvas:e,context:n,antialias:!0}):i?new cd({canvas:e,context:i,antialias:!0}):new cd({canvas:e,antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setClearColor(pn.bg),this.scene=new rE,this.scene.fog=new up(pn.bg,15e-6),this.camera=new bn(75,e.clientWidth/e.clientHeight,1,8e4),this.shipGroup=new _i,this.shipGroup.add(this.camera),this.scene.add(this.shipGroup),this.starfield=FC(),this.shipGroup.add(this.starfield),this.scene.add(new RE(pn.ambient,.3)),this.handleResize(),window.addEventListener("resize",this.handleResize)}loadSystem(e,n,i=0,r="",s){this.systemObjects.forEach(v=>this.scene.remove(v)),this.systemObjects=[],this.entities.clear(),this.npcShips.clear(),this.battleProjectiles=null,this.battleExplosions=null,this.fleetBattleData=null;const o=xv[e.starType]??pn.starG,a=new vp(e.starRadius,8,8),l=new Wc({color:o}),c=new gn(a,l),f=kC(o,e.starRadius*6),h=new _i;h.add(c,f),this.scene.add(h),this.systemObjects.push(h),this.starLight&&this.scene.remove(this.starLight),this.starLight=new CE(o,2,6e4),this.scene.add(this.starLight),this.systemObjects.push(this.starLight),this.entities.set("star",{id:"star",group:h,orbitRadius:0,orbitSpeed:0,orbitPhase:0,type:"star",worldPos:new D});const u=Ft.fromIndex(Zt,n*97+13);for(const v of e.planets){let g;if(v.type==="gas_giant"?g=OC(v.radius,v.color,()=>u.next()):g=$g(v.radius,v.color),g.position.set(v.orbitRadius,0,0),this.scene.add(g),this.systemObjects.push(g),this.entities.set(v.id,{id:v.id,group:g,orbitRadius:v.orbitRadius,orbitSpeed:v.orbitSpeed,orbitPhase:v.orbitPhase,type:"planet",worldPos:new D}),v.hasRings){const d=GC(v.radius*1.4,v.radius*2.2);g.add(d)}if(v.hasStation){const d=BC(60),p=`station-${v.id}`;this.scene.add(d),this.systemObjects.push(d),this.entities.set(p,{id:p,group:d,orbitRadius:v.radius*2.5,orbitSpeed:v.orbitSpeed*2,orbitPhase:u.next()*Math.PI*2,parentId:v.id,type:"station",worldPos:new D})}for(const d of v.moons){const p=$g(d.radius,d.color,0);this.scene.add(p),this.systemObjects.push(p),this.entities.set(d.id,{id:d.id,group:p,orbitRadius:d.orbitRadius,orbitSpeed:d.orbitSpeed,orbitPhase:d.orbitPhase,parentId:v.id,type:"moon",worldPos:new D})}}if(e.asteroidBelt){const v=e.asteroidBelt,g=zC(v.innerRadius,v.outerRadius,v.count,()=>u.next());this.scene.add(g),this.systemObjects.push(g)}const m=e.planets.map(v=>new D(Math.cos(v.orbitPhase)*v.orbitRadius,0,Math.sin(v.orbitPhase)*v.orbitRadius)),_=jC(e,n,i,r,m);for(const v of _){const g=VC(v.color),d=v.waypointA.clone().lerp(v.waypointB,v.t);g.position.copy(d),this.scene.add(g),this.systemObjects.push(g),this.entities.set(v.id,{id:v.id,group:g,orbitRadius:0,orbitSpeed:0,orbitPhase:0,type:"npc_ship",worldPos:d.clone()}),this.npcShips.set(v.id,{id:v.id,name:v.name,originSystemName:v.originSystemName,waypointA:v.waypointA,waypointB:v.waypointB,t:v.t,direction:v.direction,speed:v.speed,cargo:v.cargo,commLines:v.commLines,factionTag:v.factionTag})}if(s){const v=iR(e,n,i,s);if(this.fleetBattleData=v,v){const g=new _i;g.position.copy(v.position),this.scene.add(g),this.systemObjects.push(g);const d=ti(v.factionA),p=ti(v.factionB),x=(d==null?void 0:d.color)??16729156,y=(p==null?void 0:p.color)??4491519,T=[],A=[];for(const C of v.shipsA){const S=Kg(x,C.scale);S.position.copy(C.localOffset),g.add(S);const E=C.localOffset.clone().add(v.position);T.push(E),this.entities.set(C.id,{id:C.id,group:S,orbitRadius:0,orbitSpeed:0,orbitPhase:0,type:"fleet_ship",worldPos:E})}for(const C of v.shipsB){const S=Kg(y,C.scale);S.position.copy(C.localOffset),g.add(S);const E=C.localOffset.clone().add(v.position);A.push(E),this.entities.set(C.id,{id:C.id,group:S,orbitRadius:0,orbitSpeed:0,orbitPhase:0,type:"fleet_ship",worldPos:E})}this.battleProjectiles=RC(this.scene,v.position,T,A,x,y),this.systemObjects.push(this.battleProjectiles),this.battleExplosions=NC(this.scene);for(const C of this.battleExplosions.sprites)this.systemObjects.push(C)}}}updateOrbits(e,n=0){for(const[,i]of this.entities){if(i.type==="star"||i.type==="npc_ship")continue;const r=i.orbitPhase+e*i.orbitSpeed;if(i.parentId){const s=this.entities.get(i.parentId);s&&i.group.position.set(s.worldPos.x+Math.cos(r)*i.orbitRadius,s.worldPos.y,s.worldPos.z+Math.sin(r)*i.orbitRadius)}else i.group.position.set(Math.cos(r)*i.orbitRadius,0,Math.sin(r)*i.orbitRadius);i.worldPos.copy(i.group.position)}for(const[i,r]of this.entities)r.type==="station"&&(r.group.rotation.z+=.001);if(n>0)for(const[,i]of this.npcShips){const r=this.entities.get(i.id);if(!r)continue;const s=i.waypointA.distanceTo(i.waypointB);s<1||(i.t+=i.speed*n/s*i.direction,i.t>=1&&(i.t=1,i.direction=-1),i.t<=0&&(i.t=0,i.direction=1),r.group.position.lerpVectors(i.waypointA,i.waypointB,i.t),r.worldPos.copy(r.group.position))}this.battleProjectiles&&n>0&&bC(this.battleProjectiles,n,this.battleExplosions),this.battleExplosions&&n>0&&UC(this.battleExplosions,n)}getEntityWorldPos(e){var n;return((n=this.entities.get(e))==null?void 0:n.worldPos)??null}getAllEntities(){return this.entities}getNPCShip(e){return this.npcShips.get(e)}getFleetBattle(){return this.fleetBattleData}startHyperspace(){this.hyperspacePoints=TC(this.scene),this.hyperspaceGrid=AC(this.scene)}updateHyperspace(e){this.hyperspacePoints&&wC(this.hyperspacePoints,e),this.hyperspaceGrid&&CC(this.hyperspaceGrid,e)}stopHyperspace(){this.hyperspacePoints&&(this.scene.remove(this.hyperspacePoints),this.hyperspacePoints=null),this.hyperspaceGrid&&(this.scene.remove(this.hyperspaceGrid),this.hyperspaceGrid=null)}render(){this.renderer.render(this.scene,this.camera)}dispose(){window.removeEventListener("resize",this.handleResize),this.renderer.dispose()}}class sR{constructor(){ze(this,"velocity",new D)}update(e,n,i,r,s){const o=n.boost&&r>0;if(n.pitch!==0&&i.rotateX(n.pitch*Ci.pitchRate*e),n.yaw!==0&&i.rotateY(-n.yaw*Ci.yawRate*e),n.roll!==0&&i.rotateZ(-n.roll*Ci.rollRate*e),n.thrust>0){const l=new D(0,0,-1).applyQuaternion(i.quaternion),c=(o?Ci.boostMultiplier:1)*400*e;if(this.velocity.addScaledVector(l,c),o){const f=Ci.boostFuelRate*e;s(f),r=Math.max(0,r-f)}}this.velocity.multiplyScalar(Ci.drag);const a=o?Ci.maxSpeed*Ci.boostMultiplier:Ci.maxSpeed;return this.velocity.length()>a&&this.velocity.setLength(a),i.position.addScaledVector(this.velocity,e),{speed:this.velocity.length(),fuel:r}}static jumpCost(e,n){const i=Math.sqrt(e*e+n*n);return Math.max(.5,Math.min(3,i*Dn.fuelPerUnit))}reset(e){this.velocity.set(0,0,0)}}const eh=new Set;function Zn(t){return eh.has(t)}class oR{constructor(){ze(this,"onDock");ze(this,"onGalaxyMap");ze(this,"onSystemMap");ze(this,"onCycleTarget");ze(this,"onJumpRequest");ze(this,"onHail");ze(this,"onEscape");ze(this,"handleKeyDown",e=>{var n,i,r,s,o,a,l;eh.add(e.code),e.code==="KeyF"&&!e.repeat&&((n=this.onDock)==null||n.call(this)),e.code==="KeyG"&&!e.repeat&&((i=this.onGalaxyMap)==null||i.call(this)),e.code==="Digit1"&&!e.repeat&&((r=this.onSystemMap)==null||r.call(this)),e.code==="Tab"&&(e.preventDefault(),e.repeat||(s=this.onCycleTarget)==null||s.call(this)),e.code==="KeyJ"&&!e.repeat&&((o=this.onJumpRequest)==null||o.call(this)),e.code==="KeyH"&&!e.repeat&&((a=this.onHail)==null||a.call(this)),e.code==="Escape"&&!e.repeat&&((l=this.onEscape)==null||l.call(this))});ze(this,"handleKeyUp",e=>{eh.delete(e.code)});window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("keyup",this.handleKeyUp)}read(){return{pitch:(Zn("KeyS")?1:0)-(Zn("KeyW")?1:0),yaw:(Zn("KeyE")?1:0)-(Zn("KeyQ")?1:0),roll:(Zn("KeyD")?1:0)-(Zn("KeyA")?1:0),thrust:Zn("ArrowUp")||Zn("Space")?1:0,boost:Zn("ShiftLeft")||Zn("ShiftRight"),dockRequest:!1,galaxyMap:!1,systemMap:!1,cycleTarget:!1,jumpRequest:!1,confirmJump:Zn("KeyJ")}}onDockRequest(e){this.onDock=e}onGalaxyMapToggle(e){this.onGalaxyMap=e}onSystemMapToggle(e){this.onSystemMap=e}onCycleTargetEvent(e){this.onCycleTarget=e}onJumpRequestEvent(e){this.onJumpRequest=e}onHailRequest(e){this.onHail=e}onEscapeEvent(e){this.onEscape=e}dispose(){window.removeEventListener("keydown",this.handleKeyDown),window.removeEventListener("keyup",this.handleKeyUp)}}class aR{canDock(e,n,i){return e.distanceTo(n)<=Vm.maxDistance&&i<=Vm.maxSpeed}findNearestStation(e,n){let i=null,r=1/0;for(const[,s]of n){const o=e.distanceTo(s.worldPos);(s.type==="moon"||s.type==="planet")&&o<r&&(r=o),s.type==="station"&&(!i||o<i.dist)&&(i={id:s.id,pos:s.worldPos.clone(),dist:o})}return i&&r<i.dist?null:i}}class sx{canJump(e,n,i){const r=n.x-e.x,s=n.y-e.y;if(Math.sqrt(r*r+s*s)>Dn.maxRange)return{ok:!1,reason:"Target out of range"};const a=this.jumpCost(e,n);return i<a?{ok:!1,reason:"Insufficient fuel"}:{ok:!0}}jumpCost(e,n){const i=n.x-e.x,r=n.y-e.y,s=Math.sqrt(i*i+r*r);return Math.max(.5,Math.min(3,s*Dn.fuelPerUnit))}getReachableSystems(e,n){return n.filter(i=>{if(i.id===e.id)return!1;const r=i.x-e.x,s=i.y-e.y;return Math.sqrt(r*r+s*s)<=Dn.maxRange})}}function th(t){return Math.floor(10*Math.pow(t,1.4))}const lR=[{id:"REFUGEE_FLEET",title:"REFUGEE FLEET",narrativeLines:["A convoy of generation ships from a system you visited centuries ago drifts into the docking queue.","The survivors carry cultural archives they believe you can authenticate — you were there, after all.",'A dignitary with hollow eyes approaches the ramp: "You remember what it was like. Please — tell them what we had."'],choices:[{id:"share_freely",label:"Share your testimony freely",description:"+Reputation, CR 200 humanitarian stipend",effect:{tradingReputation:2,creditsReward:200}},{id:"sell_it",label:"Sell the testimony to media brokers",description:"-Reputation, CR 800",effect:{tradingReputation:-2,creditsReward:800}},{id:"decline",label:"Plead ignorance and move on",description:"No effect",effect:{}}]},{id:"ACQUISITION_PROPOSAL",title:"ACQUISITION PROPOSAL",narrativeLines:["A sleek representative from a megacorporation intercepts you at the airlock.","They want to retain you as a historical courier — your longevity makes you an unrivalled chain of custody.",'"We can make it worth your while," she says, sliding a contract across the scanner.'],applicablePolitics:["Corporate State","Technocracy"],choices:[{id:"sign_contract",label:"Sign the courier contract",description:"+CR 1500, aligned with corporate interests",effect:{creditsReward:1500,factionTag:"corp_ally"}},{id:"remain_independent",label:"Remain independent",description:"No effect",effect:{}}]},{id:"DOCKING_INSPECTION",title:"DOCKING INSPECTION",narrativeLines:["Priests in full ceremonial hazmat suits board before you can cycle the airlock.",'They cite the Purification Mandate — all vessels from "heathen epochs" must be spiritually cleansed.',"The levy is CR 400. You sense enforcement is entirely negotiable."],applicablePolitics:["Theocracy"],choices:[{id:"pay_levy",label:"Pay the CR 400 levy",description:"+Reputation with local clergy",effect:{tradingReputation:1,creditsReward:-400},requiresCredits:400},{id:"invoke_transit",label:"Invoke ancient transit rights",description:"-Reputation, local prices +25%",effect:{tradingReputation:-1,priceModifier:1.25}},{id:"bribe_quietly",label:"Slide CR 200 into a collection plate",description:"+Reputation, cheaper than the levy",effect:{tradingReputation:1,creditsReward:-200},requiresCredits:200}]},{id:"THE_ARCHIVIST",title:"THE ARCHIVIST",narrativeLines:["A white-haired historian intercepts you at the dock café, recorder already running.","She has spent forty years reconstructing the era you lived through from fragments.",'"You are the fragment," she says quietly. "Would you sit with me for an hour?"'],choices:[{id:"full_interview",label:"Give a full interview, free of charge",description:"+Reputation ×2",effect:{tradingReputation:2}},{id:"leave_nav_logs",label:"Leave a copy of your navigation logs",description:"+Reputation",effect:{tradingReputation:1}},{id:"charge_time",label:"Charge your standard rate for your time",description:"-Reputation, CR 500",effect:{tradingReputation:-1,creditsReward:500}}]},{id:"DEAD_DROP_MESSAGE",title:"DEAD DROP MESSAGE",narrativeLines:["A maintenance bot delivers a data chip with no manifest number.","It contains a resistance cell's plea: they need a courier who won't appear on modern databases.","You are, in every formal sense, a ghost. They are counting on it."],applicablePolitics:["Military Dictatorship","Stagnant Militancy"],choices:[{id:"help_rebels",label:"Accept the dead drop run",description:"+Reputation, local prices −15%",effect:{tradingReputation:1,priceModifier:.85,factionTag:"rebel_ally"}},{id:"report_authorities",label:"Report the cell to station security",description:"CR 300 bounty, government aligned",effect:{creditsReward:300,factionTag:"gov_ally"}},{id:"delete_message",label:"Wipe the chip and forget it",description:"No effect",effect:{}}]},{id:"UNREGULATED_MARKET",title:"UNREGULATED MARKET",narrativeLines:["Someone has set up shop in the maintenance ring — no permits, no inspectors, no questions.","They're selling everything in bulk, dirt-cheap, but want immediate payment for the whole lot.","The goods are unmanifested. This is either a great deal or evidence in a future trial."],applicablePolitics:["Anarchist"],choices:[{id:"buy_the_lot",label:"Buy the entire lot (CR 600)",description:"Prices −30% this port",effect:{creditsReward:-600,priceModifier:.7},requiresCredits:600},{id:"browse_carefully",label:"Browse selectively",description:"Prices −15% this port",effect:{priceModifier:.85}},{id:"skip_market",label:"Walk past without stopping",description:"No effect",effect:{}}]},{id:"MUSEUM_OF_ANCIENTS",title:"MUSEUM OF THE ANCIENTS",narrativeLines:["The curator of the System Heritage Museum has been waiting at your berth since 0400.","The museum's centrepiece exhibit covers your home era. They want to add a living artefact.",`"We will display your ship's original components — with your permission, and proper compensation."`],applicablePolitics:["Technocracy","Democracy"],choices:[{id:"sell_components",label:"Sell old components to the museum",description:"CR 1000, +1 fuel unit (new parts fitted)",effect:{creditsReward:1e3,fuelReward:1}},{id:"donate_components",label:"Donate the components",description:"+Reputation ×2, prices −20%",effect:{tradingReputation:2,priceModifier:.8}},{id:"decline_museum",label:"Decline politely",description:"No effect",effect:{}}]},{id:"QUARANTINE_ADVISORY",title:"QUARANTINE ADVISORY",narrativeLines:["Station med-control broadcasts a tier-2 quarantine: a fast-mutating pathogen, origin unknown.","Your ancient immune profile — pre-dating the standard inoculation series — could map the pathogen's lineage.","The chief medical officer is requesting your bioscan data. Voluntarily. For now."],choices:[{id:"release_freely",label:"Release the bioscan data publicly",description:"+Reputation ×2, +2 fuel units (medical priority)",effect:{tradingReputation:2,fuelReward:2}},{id:"sell_data",label:"Sell the data to a pharmaceutical corp",description:"-Reputation ×2, CR 1200",effect:{tradingReputation:-2,creditsReward:1200}},{id:"deny_records",label:"Claim your records were lost in transit",description:"No effect",effect:{}}]},{id:"SECTOR_TOLL",title:"SECTOR TOLL",narrativeLines:["A gunship flags you down inside the docking envelope. The insignia is unfamiliar — local warlord, recent vintage.",'"Toll is five hundred credits. Historical vessels, double rate." The pilot seems to be reading from a card.',"You have been paying tolls since before this warlord's species existed."],applicablePolitics:["Feudal","Military Dictatorship","Stagnant Militancy"],choices:[{id:"pay_toll",label:"Pay the CR 500 toll",description:"Smooth passage",effect:{creditsReward:-500},requiresCredits:500},{id:"negotiate",label:"Negotiate down to CR 200",description:"Half-price toll",effect:{creditsReward:-200},requiresCredits:200},{id:"invoke_immunity",label:"Invoke historical transit immunity (Article 7)",description:"-Reputation, prices +40% (they remember)",effect:{tradingReputation:-1,priceModifier:1.4}}]},{id:"THE_LINEAGE",title:"THE LINEAGE",narrativeLines:["A dockworker stops you cold: she is holding a photograph — old, printed, degraded at the edges.","The person in the photograph is you. The date stamp is 4,200 years ago. She found it in her grandmother's estate.",'"Are you... related to them?" she whispers. The dock is very quiet.'],minGalaxyYear:5e3,choices:[{id:"reveal_truth",label:"Tell her the truth",description:"+Reputation ×2 (she will tell everyone)",effect:{tradingReputation:2}},{id:"claim_descent",label:"Claim to be a distant descendant",description:"+Reputation, CR 100 (she insists on buying you a drink)",effect:{tradingReputation:1,creditsReward:100}},{id:"deny_lineage",label:"Deny any connection",description:"No effect",effect:{}}]}];function cR(t,e,n){const i=(e==null?void 0:e.completedEventIds)??[],r=(e==null?void 0:e.factionTag)??null,s=lR.filter(a=>!(i.includes(a.id)||a.applicablePolitics&&!a.applicablePolitics.includes(t.politics)||a.minGalaxyYear&&t.galaxyYear<a.minGalaxyYear||a.requiredFactionTag&&a.requiredFactionTag!==r));if(s.length===0)return null;const o=new class{constructor(a){ze(this,"s");this.s=a>>>0}next(){let a=this.s+=1831565813;return a=Math.imul(a^a>>>15,a|1),a^=a+Math.imul(a^a>>>7,a|61),((a^a>>>14)>>>0)/4294967296}}(n);return s[Math.floor(o.next()*s.length)]}const uR=[9136404,10506797,8020552,12088115,10053171,13408614],dR=[6719658,8035212,10189418,5601194,8939161,4482730],Jg=[7829384,8947831,11180424,6715272];function Qg(t,e){return`${t} ${["I","II","III","IV","V","VI"][e]??e+1}`}function e0(t){var h;const e=Ft.fromIndex(Zt,t.id*97+13),n=e.int(1,3),i=e.int(1,3),r=e.next()<.5,s=400+e.float(0,200),o=[];let a=1e3;for(let u=0;u<n;u++){const m=a+e.float(200,600);a=m+e.float(300,500);const _=e.int(0,2),v=[];for(let g=0;g<_;g++)v.push({id:`${t.id}-p${u}-m${g}`,radius:e.float(20,40),orbitRadius:e.float(120,280),orbitSpeed:e.float(3e-4,.001),orbitPhase:e.float(0,Math.PI*2),color:e.pick(Jg)});o.push({id:`${t.id}-p${u}`,name:Qg(t.name,u),type:"rocky",radius:e.float(60,120),orbitRadius:m,orbitSpeed:e.float(5e-5,2e-4),orbitPhase:e.float(0,Math.PI*2),color:e.pick(uR),hasRings:!1,moons:v,hasStation:t.techLevel>=3||u===0})}const l=a+e.float(300,600),c=r?{innerRadius:l,outerRadius:l+e.float(400,700),count:400}:null;a=((c==null?void 0:c.outerRadius)??l)+e.float(800,1500);for(let u=0;u<i;u++){const m=a+e.float(1e3,3e3);a=m+e.float(1500,3e3);const _=e.int(2,6),v=[];for(let g=0;g<_;g++)v.push({id:`${t.id}-g${u}-m${g}`,radius:e.float(25,55),orbitRadius:e.float(250,700),orbitSpeed:e.float(1e-4,6e-4),orbitPhase:e.float(0,Math.PI*2),color:e.pick(Jg)});o.push({id:`${t.id}-g${u}`,name:Qg(t.name,n+u),type:"gas_giant",radius:e.float(180,300),orbitRadius:m,orbitSpeed:e.float(8e-6,3e-5),orbitPhase:e.float(0,Math.PI*2),color:e.pick(dR),hasRings:e.next()<.6,moons:v,hasStation:!1})}const f=((h=o.find(u=>u.hasStation))==null?void 0:h.id)??o[0].id;return{starType:t.starType,starRadius:s,planets:o,asteroidBelt:c,mainStationPlanetId:f}}class fR{constructor(e){ze(this,"sceneRenderer");ze(this,"flightModel");ze(this,"input");ze(this,"docking");ze(this,"hyperspace");ze(this,"rafId",0);ze(this,"lastTime",0);ze(this,"hyperspaceTimer",0);ze(this,"hyperspaceActive",!1);ze(this,"scoopingFuel",!1);ze(this,"isDead",!1);ze(this,"loop",e=>{const n=Math.min((e-this.lastTime)/1e3,.05);this.lastTime=e;const i=pe.getState(),r=i.ui.mode;r==="flight"?this.updateFlight(n,i):r==="hyperspace"&&this.updateHyperspace(n,i);const s=i.time;this.sceneRenderer.updateOrbits(s,n),i.tickTime(n),this.sceneRenderer.render(),this.rafId=requestAnimationFrame(this.loop)});this.sceneRenderer=new rR(e),this.flightModel=new sR,this.input=new oR,this.docking=new aR,this.hyperspace=new sx,this.input.onDockRequest(()=>this.tryDock()),this.input.onGalaxyMapToggle(()=>this.toggleGalaxyMap()),this.input.onSystemMapToggle(()=>this.toggleSystemMap()),this.input.onCycleTargetEvent(()=>this.cycleTarget()),this.input.onJumpRequestEvent(()=>this.tryJump()),this.input.onHailRequest(()=>this.tryHail()),this.input.onEscapeEvent(()=>this.handleEscape()),pe.getState().loadSave(),this.loadCurrentSystem()}loadCurrentSystem(){const e=pe.getState(),n=e.galaxy[e.currentSystemId],i=e0(n);e.setCurrentSystem(e.currentSystemId,i),e.markVisited(e.currentSystemId),this.sceneRenderer.loadSystem(i,e.currentSystemId,e.galaxyYear,n.name,n);const r=i.mainStationPlanetId,s=i.planets.find(o=>o.id===r);if(s){const o=s.orbitPhase,a=Math.cos(o)*s.orbitRadius,l=Math.sin(o)*s.orbitRadius,c=Math.cos(o),f=Math.sin(o),h=s.radius*3+80;this.sceneRenderer.shipGroup.position.set(a+c*h,50,l+f*h),this.sceneRenderer.shipGroup.rotation.set(.1,Math.atan2(c,f),0)}this.flightModel.reset(this.sceneRenderer.shipGroup.position)}start(){this.lastTime=performance.now(),this.rafId=requestAnimationFrame(this.loop)}requestJump(){this.tryJump()}updateFlight(e,n){const i=this.input.read(),{speed:r}=this.flightModel.update(e,i,this.sceneRenderer.shipGroup,n.player.fuel,a=>n.setFuel(n.player.fuel-a)),s=this.sceneRenderer.shipGroup.position;n.setPlayerPosition({x:s.x,y:s.y,z:s.z}),n.setPlayerSpeed(r);const o=this.sceneRenderer.getEntityWorldPos("star");if(o){if(s.distanceTo(o)<600){const l=.3*e;n.setFuel(n.player.fuel+l),n.setHeat(n.player.heat+15*e),this.scoopingFuel=!0,n.setAlert("FUEL SCOOPING")}else this.scoopingFuel&&(this.scoopingFuel=!1,n.setAlert(null)),n.player.heat>0&&n.setHeat(n.player.heat-10*e);if(n.player.heat>=100){const l=n.player.shields-20*e;if(n.setShields(l),l<=0&&!this.isDead){this.triggerDeath();return}n.setAlert("OVERHEAT!")}}if(n.player.heat<50&&n.player.shields<100&&!this.isDead&&n.setShields(n.player.shields+5*e),this.checkProximityAlerts(s,n),this.checkBattleZone(s,e,n),n.ui.hyperspaceCountdown>0){const a=n.ui.hyperspaceCountdown-e;a<=0?(n.setHyperspaceCountdown(0),this.executeJump()):(n.setHyperspaceCountdown(a),n.setAlert(`JUMP IN ${Math.ceil(a)}s`))}}checkProximityAlerts(e,n){const i=this.sceneRenderer.getAllEntities();for(const[,r]of i){if(r.type==="star")continue;if(e.distanceTo(r.worldPos)<150){n.setAlert(`WARNING: ${r.type.toUpperCase()} PROXIMITY`);return}}!this.scoopingFuel&&n.ui.hyperspaceCountdown===0&&n.setAlert(null)}checkBattleZone(e,n,i){const r=this.sceneRenderer.getFleetBattle();if(!r)return;const s=e.distanceTo(r.position);s<r.noGoRadius&&(s<350?(i.setShields(i.player.shields-20*n),i.setHeat(i.player.heat+25*n),i.setAlert("TAKING FIRE — COMBAT ZONE"),i.player.shields<=0&&!this.isDead&&this.triggerDeath()):i.setAlert("WARNING: ACTIVE COMBAT ZONE"))}tryDock(){const e=pe.getState();if(e.ui.mode!=="flight")return;const n=this.sceneRenderer.shipGroup.position,i=this.sceneRenderer.getAllEntities(),r=this.docking.findNearestStation(n,i);if(!r){e.setAlert("No station nearby"),setTimeout(()=>pe.getState().setAlert(null),2e3);return}if(this.docking.canDock(n,r.pos,e.player.speed))this.sceneRenderer.shipGroup.position.copy(r.pos),this.flightModel.reset(r.pos),this.prepareLanding(e.currentSystemId);else{const o=r.dist>80?"TOO FAR FROM STATION":"SPEED TOO HIGH";e.setAlert(o),setTimeout(()=>pe.getState().setAlert(null),2e3)}}prepareLanding(e){const n=pe.getState(),i=n.galaxy[e],r=Ea(e,n.galaxyYear,i.economy),s=n.playerChoices[e],o=n.lastVisitYear[e]??null,a=o!==null?n.galaxyYear-o:null,l=n.galaxyYear*31337+e*1009>>>0,c=cR(r,s,l);n.setPendingLandingEvent({systemId:e,civState:r,event:c,yearsSinceLastVisit:a}),n.setUIMode("landing")}completeLanding(e){const n=pe.getState(),i=n.pendingLandingEvent;if(!i)return;const{systemId:r,event:s}=i;if(s){const o=s.choices.find(a=>a.id===e);if(o){const a=o.effect,l={tradingReputation:a.tradingReputation??0,bannedGoods:a.bannedGoods??[],priceModifier:a.priceModifier??1,factionTag:a.factionTag??null,completedEventIds:[]};n.recordPlayerChoice(r,s.id,l),a.creditsReward&&n.addCredits(a.creditsReward),a.fuelReward&&n.setFuel(n.player.fuel+a.fuelReward)}}n.recordVisitYear(r,n.galaxyYear),n.setPendingLandingEvent(null),n.saveGame(),n.setUIMode("docked")}toggleGalaxyMap(){const e=pe.getState();e.ui.mode==="galaxy_map"?e.setUIMode("flight"):e.ui.mode==="flight"&&e.setUIMode("galaxy_map")}toggleSystemMap(){const e=pe.getState();e.ui.mode==="system_map"?e.setUIMode("flight"):e.ui.mode==="flight"&&e.setUIMode("system_map")}cycleTarget(){const e=pe.getState(),n=this.sceneRenderer.getAllEntities(),i=Array.from(n.keys()).filter(o=>o!=="star");if(i.length===0)return;const s=(i.indexOf(e.player.targetId??"")+1)%i.length;e.setTarget(i[s])}tryJump(){const e=pe.getState(),n=e.ui.mode;if(n!=="flight"&&n!=="galaxy_map")return;if(n==="galaxy_map"&&e.setUIMode("flight"),e.ui.hyperspaceTarget===null){e.setAlert("Open galaxy map (G) to select jump target"),setTimeout(()=>pe.getState().setAlert(null),2e3);return}if(e.ui.hyperspaceCountdown>0)return;const i=e.galaxy[e.currentSystemId],r=e.galaxy[e.ui.hyperspaceTarget],s=this.hyperspace.canJump(i,r,e.player.fuel);if(!s.ok){e.setAlert(s.reason??"Cannot jump"),setTimeout(()=>pe.getState().setAlert(null),2e3);return}e.setHyperspaceCountdown(Dn.countdown)}executeJump(){const e=pe.getState(),n=e.ui.hyperspaceTarget;if(n===null)return;const i=e.galaxy[e.currentSystemId],r=e.galaxy[n],s=this.hyperspace.jumpCost(i,r),o=r.x-i.x,a=r.y-i.y,l=Math.sqrt(o*o+a*a),c=th(l);e.setFuel(e.player.fuel-s),e.advanceGalaxyYear(c),e.addJumpLogEntry({fromSystemId:e.currentSystemId,toSystemId:n,yearsElapsed:c,galaxyYearAfter:e.galaxyYear+c}),e.setUIMode("hyperspace"),this.hyperspaceActive=!0,this.hyperspaceTimer=Dn.duration,this.sceneRenderer.startHyperspace(),setTimeout(()=>{this.arriveInSystem(n)},Dn.duration*1e3)}arriveInSystem(e){const n=pe.getState();n.setHyperspaceTarget(null),n.setHyperspaceCountdown(0),this.hyperspaceActive=!1,this.sceneRenderer.stopHyperspace();const i=n.galaxy[e],r=e0(i);n.setCurrentSystem(e,r),n.markVisited(e),this.sceneRenderer.loadSystem(r,e,n.galaxyYear,i.name,i),this.sceneRenderer.shipGroup.position.set(0,0,8e3),this.sceneRenderer.shipGroup.rotation.set(0,0,0),this.flightModel.reset(this.sceneRenderer.shipGroup.position),this.flightModel.velocity.set(0,0,-150),this.buildSystemEntryText(e,i,r,n),n.setUIMode("flight")}buildSystemEntryText(e,n,i,r){const s=Ea(e,r.galaxyYear,n.economy),o=yp(e,r.galaxyYear,s.politics),a=ti(o.controllingFactionId),l=o.contestingFactionId?ti(o.contestingFactionId):null;a&&r.addKnownFaction(a.id),l&&r.addKnownFaction(l.id);const c=[];c.push(`ENTERING ${n.name.toUpperCase()}`),o.isContested&&l&&a?c.push(`CONTESTED — ${a.name.toUpperCase()} vs ${l.name.toUpperCase()}`):a&&c.push(`CONTROLLED BY ${a.name.toUpperCase()}`);const f=this.sceneRenderer.getFleetBattle();if(f){const u=i.planets.find(_=>_.id===f.planetId),m=u?u.id.replace(`${e}-`,""):"UNKNOWN";c.push(`FLEET ENGAGEMENT DETECTED NEAR ${m.toUpperCase()}`)}const h=r.factionMemory[e];if(h){const u=ti(h.factionId);u&&h.factionId!==o.controllingFactionId&&c.push(`LAST VISIT: YEAR ${h.galaxyYear.toLocaleString()}. ${u.name.toUpperCase()} NO LONGER HOLDS THIS SYSTEM.`)}r.setSystemEntryLines(c),r.setFactionMemory(e,{factionId:o.controllingFactionId,contestingFactionId:o.contestingFactionId,galaxyYear:r.galaxyYear})}triggerDeath(){this.isDead=!0;const e=pe.getState();e.setHyperspaceCountdown(0),e.setAlert(null),this.flightModel.reset(this.sceneRenderer.shipGroup.position),e.setUIMode("dead")}newGame(){pe.getState().resetGame(),this.isDead=!1,this.hyperspaceActive=!1,this.hyperspaceTimer=0,this.sceneRenderer.stopHyperspace(),this.loadCurrentSystem()}respawn(){const e=pe.getState(),n=Math.max(100,Math.floor(e.player.credits*.1));e.addCredits(-n),e.setShields(100),e.setHeat(0),this.isDead=!1,e.setUIMode("docked")}tryHail(){const e=pe.getState();if(e.ui.mode!=="flight")return;const n=e.player.targetId;if(!n)return;const i=this.sceneRenderer.getAllEntities().get(n);if(!i||i.type!=="npc_ship")return;const r=this.sceneRenderer.getNPCShip(n);r&&(e.setPendingCommContext({npcId:r.id,npcName:r.name,originSystemName:r.originSystemName,commLines:r.commLines,cargo:r.cargo,factionTag:r.factionTag}),e.setUIMode("comms"))}tradeWithNPC(e,n){const i=pe.getState(),r=i.pendingCommContext;if(!r)return;const s=r.cargo.find(o=>o.good===n);if(s)if(e==="buy"){const o=Object.values(i.player.cargo).reduce((a,l)=>a+(l??0),0);i.player.credits>=s.buyPrice&&o<sf&&(i.addCredits(-s.buyPrice),i.addCargo(n,1,s.buyPrice))}else(i.player.cargo[n]??0)>0&&(i.addCredits(s.sellPrice),i.removeCargo(n,1))}completeComm(){const e=pe.getState();e.setPendingCommContext(null),e.setUIMode("flight")}handleEscape(){const e=pe.getState();if(e.ui.mode==="docked"){this.undock();return}(e.ui.mode==="galaxy_map"||e.ui.mode==="system_map")&&e.setUIMode("flight")}updateHyperspace(e,n){this.sceneRenderer.updateHyperspace(e)}undock(){pe.getState().setUIMode("flight"),this.sceneRenderer.shipGroup.position.z+=200}dispose(){cancelAnimationFrame(this.rafId),this.input.dispose(),this.sceneRenderer.dispose()}}function hR(){const t=pe(e=>e.player);return L.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",minWidth:"180px"},children:[L.jsx(ud,{label:"SHIELDS",value:t.shields,max:100,color:"var(--color-hud)"}),L.jsx(ud,{label:"FUEL",value:t.fuel,max:Dn.tankSize,color:"var(--color-station)"}),L.jsx(ud,{label:"HEAT",value:t.heat,max:100,color:t.heat>70?"var(--color-danger)":"var(--color-warning)"}),L.jsxs("div",{style:{fontSize:"11px",color:"var(--color-hud)",marginTop:"4px"},children:["SPD: ",Math.round(t.speed).toString().padStart(4)," wu/s"]})]})}function ud({label:t,value:e,max:n,color:i}){const r=Math.max(0,Math.min(100,e/n*100));return L.jsxs("div",{children:[L.jsx("div",{style:{fontSize:"10px",marginBottom:"2px",opacity:.7,letterSpacing:"1px"},children:t}),L.jsx("div",{style:{width:"180px",height:"8px",border:"1px solid rgba(51,255,136,0.3)",background:"rgba(0,0,0,0.5)",position:"relative"},children:L.jsx("div",{style:{width:`${r}%`,height:"100%",background:i,transition:"width 0.1s"}})})]})}const pR="_scanner_lrw7x_1",mR="_label_lrw7x_8",t0={scanner:pR,label:mR},Mt=128,bl=5e3;function gR({getEntities:t}){const e=st.useRef(null),n=pe(i=>i.player);return st.useEffect(()=>{const i=e.current;if(!i)return;const r=i.getContext("2d");if(!r)return;const o=setInterval(()=>{r.clearRect(0,0,Mt,Mt),r.fillStyle="rgba(0,0,0,0.8)",r.beginPath(),r.arc(Mt/2,Mt/2,Mt/2-2,0,Math.PI*2),r.fill(),r.strokeStyle="rgba(51,255,136,0.2)",r.lineWidth=.5;for(const f of[Mt*.25,Mt*.5-2])r.beginPath(),r.arc(Mt/2,Mt/2,f,0,Math.PI*2),r.stroke();r.beginPath(),r.moveTo(Mt/2,2),r.lineTo(Mt/2,Mt-2),r.moveTo(2,Mt/2),r.lineTo(Mt-2,Mt/2),r.stroke();const a=t(),l=n.position.x,c=n.position.z;for(const[,f]of a){const h=f.worldPos.x,u=f.worldPos.z,m=f.worldPos.y,_=h-l,v=u-c;if(Math.sqrt(_*_+v*v)>bl)continue;const d=Mt/2+_/bl*(Mt/2-4),p=Mt/2+v/bl*(Mt/2-4);f.type==="star"?r.fillStyle="#FFEE88":f.type==="station"?r.fillStyle="#44CCFF":r.fillStyle="#33FF88";const x=f.type==="star"?4:f.type==="station"?3:2;r.beginPath(),r.arc(d,p,x,0,Math.PI*2),r.fill(),Math.abs(m)>100&&(r.strokeStyle=r.fillStyle,r.lineWidth=.5,r.beginPath(),r.moveTo(d,p),r.lineTo(d,p-m/bl*20),r.stroke())}r.fillStyle="#FFFFFF",r.beginPath(),r.arc(Mt/2,Mt/2,2,0,Math.PI*2),r.fill()},100);return()=>clearInterval(o)},[n,t]),L.jsxs("div",{children:[L.jsx("canvas",{ref:e,width:Mt,height:Mt,className:t0.scanner}),L.jsx("div",{className:t0.label,children:"SCANNER"})]})}const ox="rgba(68, 204, 255, 0.85)",n0=30,_R=14,vR=12;function xR(t,e,n){const i=_R,r=vR;t.strokeStyle=ox,t.lineWidth=1.5,t.beginPath(),t.moveTo(e-r-i,n-r),t.lineTo(e-r,n-r),t.lineTo(e-r,n-r-i),t.moveTo(e+r+i,n-r),t.lineTo(e+r,n-r),t.lineTo(e+r,n-r-i),t.moveTo(e-r-i,n+r),t.lineTo(e-r,n+r),t.lineTo(e-r,n+r+i),t.moveTo(e+r+i,n+r),t.lineTo(e+r,n+r),t.lineTo(e+r,n+r+i),t.stroke()}function yR(t,e,n,i){t.save(),t.translate(e,n),t.rotate(i),t.fillStyle=ox,t.beginPath(),t.moveTo(14,0),t.lineTo(-11,-11*.6),t.lineTo(-11*.35,0),t.lineTo(-11,11*.6),t.closePath(),t.fill(),t.restore()}function SR({getEntities:t,getCamera:e}){const n=st.useRef(null),i=pe(s=>s.player.targetId),r=st.useRef(0);return st.useEffect(()=>{const s=n.current;if(!s)return;const o=s.getContext("2d");if(!o)return;const a=()=>{const l=window.innerWidth,c=window.innerHeight;if(s.width!==l&&(s.width=l),s.height!==c&&(s.height=c),o.clearRect(0,0,l,c),i){const f=t().get(i),h=e();if(f&&h){const u=f.worldPos.clone().project(h),m=u.z>=1;let _=u.x,v=-u.y;if(m&&(_=-_,v=-v),!m&&u.x>-.95&&u.x<.95&&u.y>-.95&&u.y<.95){const d=(u.x+1)/2*l,p=(1-u.y)/2*c;xR(o,d,p)}else{const d=Math.atan2(v,_),p=l/2-n0,x=c/2-n0,y=Math.abs(_)||1e-6,T=Math.abs(v)||1e-6;let A,C;if(y/p>T/x){const S=_>=0?1:-1;A=l/2+S*p,C=c/2+v/y*p}else{const S=v>=0?1:-1;C=c/2+S*x,A=l/2+_/T*x}yR(o,A,C,d)}}}r.current=requestAnimationFrame(a)};return r.current=requestAnimationFrame(a),()=>{cancelAnimationFrame(r.current)}},[i,t,e]),L.jsx("canvas",{ref:n,style:{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none"}})}const MR="_hud_1ma00_1",ER="_topLeft_1ma00_10",TR="_topRight_1ma00_16",wR="_bottomLeft_1ma00_23",AR="_bottomRight_1ma00_29",CR="_center_1ma00_35",RR="_crosshair_1ma00_42",bR="_alertBanner_1ma00_69",PR="_targetInfo_1ma00_87",LR="_targetLabel_1ma00_95",IR="_credits_1ma00_103",NR="_systemInfo_1ma00_108",DR="_controls_1ma00_114",dn={hud:MR,topLeft:ER,topRight:TR,bottomLeft:wR,bottomRight:AR,center:CR,crosshair:RR,alertBanner:bR,targetInfo:PR,targetLabel:LR,credits:IR,systemInfo:NR,controls:DR};function UR({getEntities:t,getShipPos:e,getCamera:n}){const i=pe(_=>_.player),r=pe(_=>_.galaxy),s=pe(_=>_.currentSystemId),o=pe(_=>_.ui.alertMessage),a=pe(_=>_.ui.hyperspaceTarget),l=pe(_=>_.galaxyYear),c=pe(_=>_.knownFactions),f=r[s],h=a!==null?r[a]:null,u=i.targetId?t().get(i.targetId):null;let m=0;if(u){const _=e();m=Math.round(_.distanceTo(u.worldPos))}return L.jsxs("div",{className:dn.hud,children:[L.jsx(SR,{getEntities:t,getCamera:n}),L.jsx("div",{className:dn.center,children:L.jsx("div",{className:dn.crosshair})}),o&&L.jsx("div",{className:dn.alertBanner,children:o}),L.jsxs("div",{className:dn.topLeft,children:[L.jsxs("div",{className:dn.credits,children:["CR ",i.credits.toLocaleString()]}),L.jsxs("div",{style:{fontSize:"11px",color:"var(--color-hud-dim)",letterSpacing:"2px",marginBottom:"2px"},children:["YEAR ",l.toLocaleString()]}),L.jsxs("div",{className:dn.systemInfo,children:[f==null?void 0:f.name," · ",f==null?void 0:f.starType,"-TYPE · ",f==null?void 0:f.economy,f&&(()=>{const _=Ea(s,l,f.economy),v=yp(s,l,_.politics),g=ti(v.controllingFactionId),d=g&&c.has(g.id),p=d?g.name.toUpperCase():"UNKNOWN",x=d&&g?`#${g.color.toString(16).padStart(6,"0")}`:"var(--color-hud-dim)";return L.jsxs("span",{style:{color:x,marginLeft:"6px"},children:["· ",p]})})()]}),h&&L.jsxs("div",{style:{color:"var(--color-hyperspace-bright)",fontSize:"11px",marginTop:"4px"},children:["JUMP TARGET: ",h.name]}),L.jsxs("div",{className:dn.controls,children:["W/S Pitch · A/D Roll · Q/E Yaw",L.jsx("br",{}),"SPACE Thrust · SHIFT Boost · TAB Target",L.jsx("br",{}),"F Dock · G Galaxy Map · 1 System Map · J Jump · H Hail"]})]}),L.jsx("div",{className:dn.topRight,children:u?L.jsxs("div",{className:dn.targetInfo,children:[L.jsx("div",{className:dn.targetLabel,children:"TARGET"}),L.jsx("div",{children:u.id.replace(`${s}-`,"")}),L.jsxs("div",{style:{color:"var(--color-hud-dim)",fontSize:"11px"},children:["DIST: ",m," wu"]}),L.jsxs("div",{style:{fontSize:"10px",opacity:.6},children:["TYPE: ",u.type.toUpperCase()]}),u.type==="npc_ship"&&L.jsx("div",{style:{color:"var(--color-station)",fontSize:"10px",marginTop:"4px",letterSpacing:"1px"},children:"H TO HAIL"})]}):L.jsxs("div",{className:dn.targetInfo,children:[L.jsx("div",{className:dn.targetLabel,children:"NO TARGET"}),L.jsx("div",{style:{fontSize:"10px",opacity:.5},children:"TAB to cycle"})]})}),L.jsx("div",{className:dn.bottomLeft,children:L.jsx(hR,{})}),L.jsx("div",{className:dn.bottomRight,children:L.jsx(gR,{getEntities:t})})]})}function FR(){const t=pe(o=>o.systemEntryLines),e=pe(o=>o.setSystemEntryLines),[n,i]=st.useState(0),[r,s]=st.useState(!1);return st.useEffect(()=>{if(!t||t.length===0){i(0),s(!1);return}i(0),s(!1);const o=[];for(let a=0;a<t.length;a++)o.push(setTimeout(()=>i(a+1),a*500));return o.push(setTimeout(()=>s(!0),8e3)),o.push(setTimeout(()=>{e(null)},1e4)),()=>o.forEach(clearTimeout)},[t,e]),!t||t.length===0?null:L.jsxs("div",{style:{position:"absolute",bottom:"15%",left:"50%",transform:"translateX(-50%)",textAlign:"center",fontFamily:"Courier New, monospace",pointerEvents:"none",zIndex:20,opacity:r?0:1,transition:"opacity 2s ease-out"},children:[t.slice(0,n).map((o,a)=>{const l=a===0,c=o.startsWith("CONTESTED")||o.includes("COMBAT ZONE"),f=o.includes("FLEET ENGAGEMENT")||o.includes("NO LONGER HOLDS");let h="#33FF88";return c&&(h="#FFAA00"),f&&(h="#FFAA00"),L.jsx("div",{style:{fontSize:l?"18px":"13px",letterSpacing:l?"6px":"3px",color:h,textShadow:`0 0 10px ${h}44`,marginBottom:"8px",opacity:0,animation:"entryLineFade 0.5s ease-out forwards"},children:o},a)}),L.jsx("style",{children:`
        @keyframes entryLineFade {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `})]})}const OR="_overlay_1e9ue_1",BR="_panel_1e9ue_12",kR="_title_1e9ue_20",zR="_canvas_1e9ue_28",VR="_info_1e9ue_34",GR="_selected_1e9ue_43",HR="_hint_1e9ue_47",WR="_jumpBtn_1e9ue_53",Ni={overlay:OR,panel:BR,title:kR,canvas:zR,info:VR,selected:GR,hint:HR,jumpBtn:WR},dd=new sx,Ho=520,$l=420;function i0(t,e){return[t*Ho/100,e*$l/100]}const jR={G:"#FFEE88",K:"#FFAA44",M:"#FF6633",F:"#FFFFFF",A:"#AABBFF"};function XR({onClose:t,onJump:e}){const n=st.useRef(null),i=pe(b=>b.galaxy),r=pe(b=>b.currentSystemId),s=pe(b=>b.visitedSystems),o=pe(b=>b.player),a=pe(b=>b.ui.hyperspaceTarget),l=pe(b=>b.setHyperspaceTarget),c=pe(b=>b.galaxyYear),f=pe(b=>b.jumpLog),h=pe(b=>b.factionMemory),u=pe(b=>b.knownFactions),m=i[r],_=dd.getReachableSystems(m,i),v=new Set(_.map(b=>b.id)),[g,d]=st.useState(null),p=g??(a!==null?i[a]:null),x=p&&p.id!==r?(()=>{const b=p.x-m.x,P=p.y-m.y;return th(Math.sqrt(b*b+P*P))})():null,y=st.useCallback(()=>{const b=n.current;if(!b)return;const P=b.getContext("2d");if(!P)return;P.clearRect(0,0,Ho,$l),P.fillStyle="#010206",P.fillRect(0,0,Ho,$l);const[H,V]=i0(m.x,m.y),G=Dn.maxRange/100*Ho;P.strokeStyle="rgba(51,255,136,0.2)",P.lineWidth=1,P.setLineDash([4,4]),P.beginPath(),P.arc(H,V,G,0,Math.PI*2),P.stroke(),P.setLineDash([]);for(const O of i){const[z,W]=i0(O.x,O.y),J=v.has(O.id),ee=O.id===r,te=O.id===a,Pe=s.has(O.id);J&&(P.strokeStyle="rgba(51,255,136,0.15)",P.lineWidth=.5,P.beginPath(),P.moveTo(H,V),P.lineTo(z,W),P.stroke());const Ye=jR[O.starType]??"#FFFFFF",Xe=ee?7:te?6:4;if(te){const q=P.createRadialGradient(z,W,0,z,W,20);q.addColorStop(0,"rgba(68,204,255,0.5)"),q.addColorStop(1,"rgba(68,204,255,0)"),P.fillStyle=q,P.beginPath(),P.arc(z,W,20,0,Math.PI*2),P.fill()}if((g==null?void 0:g.id)===O.id&&!te&&!ee&&(P.strokeStyle="rgba(255,255,255,0.3)",P.lineWidth=1.5,P.beginPath(),P.arc(z,W,Xe+3,0,Math.PI*2),P.stroke()),P.beginPath(),P.arc(z,W,Xe,0,Math.PI*2),P.fillStyle=ee?"#33FF88":te?"#44CCFF":Pe?Ye:`${Ye}66`,P.fill(),!Pe&&!J&&!ee&&(P.strokeStyle="rgba(255,255,255,0.15)",P.lineWidth=1,P.stroke()),Pe){const q=h[O.id];if(q){const re=ti(q.factionId);if(re&&u.has(re.id)){const le=`#${re.color.toString(16).padStart(6,"0")}`;if(P.beginPath(),P.arc(z+Xe+4,W-Xe+2,2.5,0,Math.PI*2),P.fillStyle=le,P.fill(),q.contestingFactionId){const Ne=ti(q.contestingFactionId);if(Ne&&u.has(Ne.id)){const be=`#${Ne.color.toString(16).padStart(6,"0")}`;P.beginPath(),P.arc(z+Xe+4,W-Xe+8,2.5,0,Math.PI*2),P.fillStyle=be,P.fill()}}}}}(ee||te||(g==null?void 0:g.id)===O.id)&&(P.fillStyle=ee?"#33FF88":te?"#44CCFF":"#FFFFFF",P.font="10px Courier New",P.fillText(O.name.toUpperCase(),z+8,W+4))}},[i,r,s,a,v,g,m,h,u]);st.useEffect(()=>{y()},[y]);const T=b=>{const P=n.current.getBoundingClientRect(),H=(b.clientX-P.left)/P.width*100,V=(b.clientY-P.top)/P.height*100;let G=null,O=1/0;for(const z of i){const W=Math.hypot(z.x-H,z.y-V);W<O&&W<6&&(G=z,O=W)}G&&G.id!==r&&v.has(G.id)&&l(G.id)},A=b=>{const P=n.current.getBoundingClientRect(),H=(b.clientX-P.left)/P.width*100,V=(b.clientY-P.top)/P.height*100;let G=null,O=1/0;for(const z of i){const W=Math.hypot(z.x-H,z.y-V);W<O&&W<6&&(G=z,O=W)}d(G)},C=a!==null?i[a]:null,S=C?dd.jumpCost(m,C):0,E=C?dd.canJump(m,C,o.fuel).ok:!1,U=()=>{E&&e()},I=f.slice(0,5);return L.jsx("div",{className:Ni.overlay,onClick:b=>{b.target===b.currentTarget&&t()},children:L.jsxs("div",{className:Ni.panel,children:[L.jsxs("div",{className:Ni.title,children:["GALAXY CHART",L.jsxs("span",{style:{fontSize:"11px",letterSpacing:"2px",color:"var(--color-hud-dim)",marginLeft:"16px"},children:["YEAR ",c.toLocaleString()]})]}),L.jsx("canvas",{ref:n,width:Ho,height:$l,className:Ni.canvas,onClick:T,onMouseMove:A}),L.jsxs("div",{className:Ni.info,children:[L.jsxs("div",{children:[L.jsxs("div",{children:["CURRENT: ",L.jsx("span",{className:Ni.selected,children:m.name.toUpperCase()})]}),C&&L.jsxs("div",{style:{marginTop:"4px"},children:["TARGET: ",L.jsx("span",{className:Ni.selected,children:C.name.toUpperCase()}),L.jsx("br",{}),"FUEL COST: ",S.toFixed(1)," / ",o.fuel.toFixed(1),L.jsx("br",{}),(()=>{const b=C.x-m.x,P=C.y-m.y,H=th(Math.sqrt(b*b+P*P));return L.jsxs("span",{style:{color:"var(--color-warning)"},children:["+",H.toLocaleString()," YRS"]})})(),L.jsx("br",{}),"TECH LV: ",C.techLevel," · ",C.economy,(()=>{const b=h[C.id];if(!b)return null;const P=ti(b.factionId);if(!P||!u.has(P.id))return null;const H=`#${P.color.toString(16).padStart(6,"0")}`;return L.jsxs(L.Fragment,{children:[L.jsx("br",{}),L.jsx("span",{style:{color:H},children:P.name.toUpperCase()}),b.contestingFactionId&&(()=>{const V=ti(b.contestingFactionId);if(!V||!u.has(V.id))return null;const G=`#${V.color.toString(16).padStart(6,"0")}`;return L.jsxs("span",{style:{color:G},children:[" vs ",V.name.toUpperCase()]})})()]})})()]}),x!==null&&!C&&g&&v.has(g.id)&&L.jsxs("div",{style:{marginTop:"4px",color:"var(--color-warning)",fontSize:"11px"},children:["HOVER: ",g.name.toUpperCase()," +",x.toLocaleString()," YRS",(()=>{const b=h[g.id];if(!b)return null;const P=ti(b.factionId);if(!P||!u.has(P.id))return null;const H=`#${P.color.toString(16).padStart(6,"0")}`;return L.jsx("span",{style:{color:H,marginLeft:6},children:P.name.toUpperCase()})})()]})]}),L.jsxs("div",{children:[I.length>0&&L.jsxs("div",{style:{fontSize:"10px",opacity:.7},children:[L.jsx("div",{style:{marginBottom:"3px",letterSpacing:"1px"},children:"RECENT JUMPS"}),I.map((b,P)=>{var G,O;const H=((G=i[b.fromSystemId])==null?void 0:G.name)??"?",V=((O=i[b.toSystemId])==null?void 0:O.name)??"?";return L.jsxs("div",{style:{marginBottom:"2px"},children:[H.toUpperCase()," → ",V.toUpperCase(),L.jsxs("span",{style:{color:"var(--color-warning)",marginLeft:4},children:["+",b.yearsElapsed.toLocaleString(),"Y"]})]},P)})]}),L.jsxs("div",{className:Ni.hint,style:{marginTop:I.length>0?"8px":0},children:["Click to select target",L.jsx("br",{}),"G or ESC to close",L.jsx("br",{}),"J to initiate jump"]})]})]}),L.jsx("button",{className:Ni.jumpBtn,disabled:!E,onClick:U,children:E?`JUMP TO ${C==null?void 0:C.name.toUpperCase()}`:C?"INSUFFICIENT FUEL":"SELECT TARGET"})]})})}const YR="_overlay_124kf_1",qR="_panel_124kf_12",$R="_title_124kf_20",KR="_canvas_124kf_27",ZR="_legend_124kf_32",JR="_dot_124kf_40",QR="_closeBtn_124kf_49",Di={overlay:YR,panel:qR,title:$R,canvas:KR,legend:ZR,dot:JR,closeBtn:QR},Do=540,Uo=400;function eb({onClose:t}){const e=st.useRef(null),n=pe(a=>a.currentSystem),i=pe(a=>a.currentSystemId),s=pe(a=>a.galaxy)[i],o=pe(a=>a.time);return st.useEffect(()=>{const a=e.current;if(!a||!n)return;const l=a.getContext("2d");if(!l)return;l.clearRect(0,0,Do,Uo),l.fillStyle="#010206",l.fillRect(0,0,Do,Uo);const c=Do/2,f=Uo/2,h=Math.max(...n.planets.map(g=>g.orbitRadius)),u=Math.min(Do,Uo)*.45/h,m="#"+new Be(xv[n.starType]??16772744).getHexString(),_=Math.max(6,n.starRadius*u),v=l.createRadialGradient(c,f,0,c,f,_*2);v.addColorStop(0,m),v.addColorStop(.5,m+"88"),v.addColorStop(1,"transparent"),l.fillStyle=v,l.beginPath(),l.arc(c,f,_*2,0,Math.PI*2),l.fill(),l.fillStyle=m,l.beginPath(),l.arc(c,f,_,0,Math.PI*2),l.fill();for(const g of n.planets){const d=g.orbitRadius*u;l.strokeStyle="rgba(51,255,136,0.15)",l.lineWidth=.5,l.beginPath(),l.arc(c,f,d,0,Math.PI*2),l.stroke();const p=g.orbitPhase+o*g.orbitSpeed,x=c+Math.cos(p)*d,y=f+Math.sin(p)*d,T="#"+new Be(g.color).getHexString(),A=Math.max(3,g.radius*u*.5);l.fillStyle=T,l.beginPath(),l.arc(x,y,A,0,Math.PI*2),l.fill(),g.hasStation&&(l.strokeStyle="#44CCFF",l.lineWidth=1,l.beginPath(),l.arc(x,y,A+4,0,Math.PI*2),l.stroke()),g.hasRings&&(l.strokeStyle="rgba(170,187,204,0.5)",l.lineWidth=1,l.beginPath(),l.ellipse(x,y,A*2.2,A*.4,.3,0,Math.PI*2),l.stroke()),l.fillStyle="#33FF88",l.font="9px Courier New",l.fillText(g.name,x+A+3,y+3)}if(n.asteroidBelt){const{innerRadius:g,outerRadius:d}=n.asteroidBelt,p=g*u,x=d*u,y=l.createRadialGradient(c,f,p,c,f,x);y.addColorStop(0,"rgba(136,136,119,0.0)"),y.addColorStop(.3,"rgba(136,136,119,0.15)"),y.addColorStop(1,"rgba(136,136,119,0.0)"),l.fillStyle=y,l.beginPath(),l.arc(c,f,x,0,Math.PI*2),l.arc(c,f,p,0,Math.PI*2,!0),l.fill()}},[n,o]),L.jsx("div",{className:Di.overlay,onClick:a=>{a.target===a.currentTarget&&t()},children:L.jsxs("div",{className:Di.panel,children:[L.jsxs("div",{className:Di.title,children:[s==null?void 0:s.name.toUpperCase()," SYSTEM"]}),L.jsx("canvas",{ref:e,width:Do,height:Uo,className:Di.canvas}),L.jsxs("div",{className:Di.legend,children:[L.jsxs("span",{children:[L.jsx("span",{className:Di.dot,style:{background:"#33FF88"}}),"Planet"]}),L.jsxs("span",{children:[L.jsx("span",{className:Di.dot,style:{background:"#44CCFF",outline:"1px solid #44CCFF"}}),"Station"]}),L.jsxs("span",{children:[L.jsx("span",{className:Di.dot,style:{background:"#888877"}}),"Asteroids"]})]}),L.jsx("button",{className:Di.closeBtn,onClick:t,children:"CLOSE [1]"})]})})}const tb={Food:40,Textiles:65,Radioactives:162,Slaves:52,Liquor:220,Luxuries:440,Narcotics:490,Computers:853},nb={Agricultural:{Food:-20,Textiles:-15,Narcotics:60},Industrial:{Computers:-100,Textiles:-20,Food:30},"High Tech":{Computers:-200,Radioactives:-40,Luxuries:-50},"Rich Industrial":{Computers:-150,Textiles:-30,Liquor:-30},"Poor Agricultural":{Food:-30,Slaves:-20,Luxuries:100},Refinery:{Radioactives:-60,Liquor:-40,Food:20}},ib=.02;class rb{getMarket(e,n,i,r){const s=(i==null?void 0:i.era)??0,o=Ft.fromIndex(Zt,e*53+7+s*1e3),a=nb[n]??{},l=(i==null?void 0:i.bannedGoods)??[],c=(r==null?void 0:r.bannedGoods)??[],f=new Set([...l,...c]),h=(i==null?void 0:i.priceModifier)??1,u=(i==null?void 0:i.luxuryMod)??1,m=new Set((i==null?void 0:i.techBonus)??[]),_=(i==null?void 0:i.anarchyVariance)??!1,v=(r==null?void 0:r.priceModifier)??1,g=r?1+r.tradingReputation*ib:1;return yv.map(d=>{const p=tb[d],x=a[d]??0;let y;_?y=o.float(-.5,.5):y=o.float(-.15,.15);let T=Math.round((p+x)*(1+y));T=Math.round(T*h),d==="Luxuries"&&(T=Math.round(T*u)),m.has(d)&&(T=Math.round(T*.9)),T=Math.round(T*v);const A=Math.max(1,T),C=Math.max(1,Math.round(T*.85*g)),S=o.int(0,30),E=f.has(d);return{good:d,buyPrice:A,sellPrice:C,stock:S,banned:E}})}cargoTotal(e){return Object.values(e).reduce((n,i)=>n+(i??0),0)}}const sb="_overlay_dxyz5_1",ob="_panel_dxyz5_12",ab="_header_dxyz5_22",lb="_stationName_dxyz5_31",cb="_credits_dxyz5_37",ub="_tabs_dxyz5_42",db="_tab_dxyz5_42",fb="_active_dxyz5_55",hb="_table_dxyz5_61",pb="_buyBtn_dxyz5_85",mb="_sellBtn_dxyz5_85",gb="_cargo_dxyz5_100",_b="_cargoTitle_dxyz5_107",vb="_cargoItem_dxyz5_113",xb="_undockBtn_dxyz5_119",yb="_refuelBtn_dxyz5_129",Sb="_infoRow_dxyz5_140",Mb="_infoItem_dxyz5_147",Eb="_infoValue_dxyz5_151",it={overlay:sb,panel:ob,header:ab,stationName:lb,credits:cb,tabs:ub,tab:db,active:fb,table:hb,buyBtn:pb,sellBtn:mb,cargo:gb,cargoTitle:_b,cargoItem:vb,undockBtn:xb,refuelBtn:yb,infoRow:Sb,infoItem:Mb,infoValue:Eb},r0=5,s0=new rb;function Tb({onUndock:t}){const[e,n]=st.useState("trade"),i=pe(b=>b.galaxy),r=pe(b=>b.currentSystemId),s=pe(b=>b.player),o=pe(b=>b.galaxyYear),a=pe(b=>b.playerChoices),l=pe(b=>b.addCredits),c=pe(b=>b.addCargo),f=pe(b=>b.removeCargo),h=pe(b=>b.setFuel),u=pe(b=>b.setShields),m=i[r],_=Ea(r,o,m.economy),v=a[r],g=s0.getMarket(r,_.economy,_,v),d=s0.cargoTotal(s.cargo),p=sf-d,x=(b,P,H,V)=>{V||H===0||p===0||s.credits<P||(l(-P),c(b,1,P))},y=(b,P)=>{(s.cargo[b]??0)!==0&&(l(P),f(b,1))},T=Math.max(0,Dn.tankSize-s.fuel),C=Math.round(T*50),S=()=>{s.credits<C||T===0||(l(-C),h(Dn.tankSize))},E=Math.max(0,100-Math.floor(s.shields)),U=E*r0,I=()=>{s.credits<U||E===0||(l(-U),u(100))};return L.jsx("div",{className:it.overlay,children:L.jsxs("div",{className:it.panel,children:[L.jsxs("div",{className:it.header,children:[L.jsxs("div",{className:it.stationName,children:["⬡ ",m.name.toUpperCase()," STATION"]}),L.jsxs("div",{className:it.credits,children:["CR ",s.credits.toLocaleString()]})]}),L.jsxs("div",{className:it.infoRow,children:[L.jsxs("div",{className:it.infoItem,children:["ECONOMY: ",L.jsx("span",{className:it.infoValue,children:_.economy})]}),L.jsxs("div",{className:it.infoItem,children:["POLITICS: ",L.jsx("span",{className:it.infoValue,children:_.politics})]}),L.jsxs("div",{className:it.infoItem,children:["TECH LV: ",L.jsx("span",{className:it.infoValue,children:m.techLevel})]}),L.jsxs("div",{className:it.infoItem,children:["POPULATION: ",L.jsxs("span",{className:it.infoValue,children:[m.population.toLocaleString(),"M"]})]})]}),_.bannedGoods.length>0&&L.jsx("div",{className:it.infoRow,style:{marginBottom:8},children:L.jsxs("div",{className:it.infoItem,children:["PROHIBITED:"," ",L.jsx("span",{style:{color:"var(--color-danger)"},children:_.bannedGoods.join(", ")})]})}),L.jsx("div",{className:it.tabs,children:["trade","refuel","cargo"].map(b=>L.jsx("button",{className:`${it.tab} ${e===b?it.active:""}`,onClick:()=>n(b),children:b.toUpperCase()},b))}),e==="trade"&&L.jsxs("table",{className:it.table,children:[L.jsx("thead",{children:L.jsxs("tr",{children:[L.jsx("th",{children:"COMMODITY"}),L.jsx("th",{children:"BUY"}),L.jsx("th",{children:"SELL"}),L.jsx("th",{children:"PAID"}),L.jsx("th",{children:"STOCK"}),L.jsx("th",{children:"HELD"}),L.jsx("th",{})]})}),L.jsx("tbody",{children:g.map(({good:b,buyPrice:P,sellPrice:H,stock:V,banned:G})=>{const O=s.cargo[b]??0,z=s.cargoCostBasis[b],W=!G&&V>0&&p>0&&s.credits>=P,J=O>0,ee=z!==void 0?H-z:null;return L.jsxs("tr",{style:G?{opacity:.45}:void 0,children:[L.jsxs("td",{children:[b,G&&L.jsx("span",{style:{color:"var(--color-danger)",fontSize:"9px",marginLeft:6,letterSpacing:1},children:"PROHIBITED"})]}),L.jsx("td",{style:{color:G?"inherit":"var(--color-hud)"},children:G?"—":P}),L.jsxs("td",{children:[L.jsx("span",{style:{color:ee===null?"var(--color-warning)":ee>=0?"#44FF88":"#FF4422"},children:H}),ee!==null&&L.jsxs("span",{style:{fontSize:"9px",marginLeft:4,opacity:.8,color:ee>=0?"#44FF88":"#FF4422"},children:[ee>=0?"+":"",Math.round(ee)]})]}),L.jsx("td",{style:{opacity:O>0?1:.35,color:"var(--color-hud-dim)"},children:z!==void 0?Math.round(z):"—"}),L.jsx("td",{style:{opacity:.7},children:G?"—":V}),L.jsx("td",{style:{color:O>0?"var(--color-station)":"inherit"},children:O}),L.jsxs("td",{style:{display:"flex",gap:"4px"},children:[L.jsx("button",{className:it.buyBtn,disabled:!W,onClick:()=>x(b,P,V,G),children:"BUY"}),L.jsx("button",{className:`${it.buyBtn} ${it.sellBtn}`,disabled:!J,onClick:()=>y(b,H),children:"SELL"})]})]},b)})})]}),e==="refuel"&&L.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[L.jsxs("div",{children:[L.jsx("div",{style:{marginBottom:"8px",fontSize:"var(--font-size-sm)",opacity:.7,letterSpacing:1},children:"FUEL"}),L.jsxs("div",{style:{marginBottom:"10px",fontSize:"var(--font-size-sm)"},children:[L.jsxs("div",{children:["FUEL: ",s.fuel.toFixed(2)," / ",Dn.tankSize," LY"]}),L.jsxs("div",{style:{marginTop:"4px",opacity:.7},children:["Full refuel cost: CR ",C,T===0&&" (FULL)"]})]}),L.jsxs("button",{className:it.refuelBtn,disabled:T===0||s.credits<C,onClick:S,children:["REFUEL (",T.toFixed(1)," units — CR ",C,")"]})]}),L.jsxs("div",{children:[L.jsx("div",{style:{marginBottom:"8px",fontSize:"var(--font-size-sm)",opacity:.7,letterSpacing:1},children:"SHIELD REPAIR"}),L.jsxs("div",{style:{marginBottom:"10px",fontSize:"var(--font-size-sm)"},children:[L.jsxs("div",{children:["SHIELDS: ",Math.floor(s.shields)," / 100",s.shields>=100&&L.jsx("span",{style:{opacity:.6},children:" (FULL)"})]}),L.jsxs("div",{style:{marginTop:"4px",opacity:.7},children:["Repair cost: CR ",U," (",r0," CR/point)"]})]}),L.jsxs("button",{className:it.refuelBtn,disabled:E===0||s.credits<U,onClick:I,children:["REPAIR SHIELDS (",E," pts — CR ",U,")"]})]})]}),e==="cargo"&&L.jsxs("div",{className:it.cargo,children:[L.jsxs("div",{className:it.cargoTitle,children:["HOLD: ",d," / ",sf," UNITS"]}),Object.entries(s.cargo).length===0?L.jsx("div",{style:{opacity:.5},children:"Empty cargo hold"}):Object.entries(s.cargo).map(([b,P])=>{const H=s.cargoCostBasis[b];return L.jsxs("div",{className:it.cargoItem,children:[L.jsx("span",{children:b}),L.jsxs("span",{style:{color:"var(--color-station)"},children:[P," units"]}),H!==void 0&&L.jsxs("span",{style:{fontSize:"10px",color:"var(--color-hud-dim)",marginLeft:"auto"},children:["avg paid ",Math.round(H)," CR"]})]},b)})]}),L.jsx("button",{className:it.undockBtn,onClick:t,children:"UNDOCK"})]})})}const wb="_overlay_1vypt_1",Ab="_panel_1vypt_12",Cb="_header_1vypt_25",Rb="_yearBadge_1vypt_34",bb="_systemLabel_1vypt_40",Pb="_returnInfo_1vypt_51",Lb="_civRow_1vypt_61",Ib="_civTag_1vypt_70",Nb="_civValue_1vypt_74",Db="_banned_1vypt_79",Ub="_eventTitle_1vypt_86",Fb="_narrative_1vypt_94",Ob="_narrativeLine_1vypt_100",Bb="_choices_1vypt_114",kb="_choiceBtn_1vypt_121",zb="_choiceLabel_1vypt_146",Vb="_choiceDesc_1vypt_151",ht={overlay:wb,panel:Ab,header:Cb,yearBadge:Rb,systemLabel:bb,returnInfo:Pb,civRow:Lb,civTag:Ib,civValue:Nb,banned:Db,eventTitle:Ub,narrative:Fb,narrativeLine:Ob,choices:Bb,choiceBtn:kb,choiceLabel:zb,choiceDesc:Vb};function Gb({onChoice:t}){const e=pe(f=>f.pendingLandingEvent),n=pe(f=>f.galaxyYear),i=pe(f=>f.player),[r,s]=st.useState(!1);if(!e)return null;const{civState:o,event:a,yearsSinceLastVisit:l}=e,c=f=>{r||(s(!0),t(f))};return L.jsx("div",{className:ht.overlay,children:L.jsxs("div",{className:ht.panel,children:[L.jsxs("div",{className:ht.header,children:[L.jsxs("div",{className:ht.yearBadge,children:["YEAR ",n.toLocaleString()]}),L.jsx("div",{className:ht.systemLabel,children:o.politics.toUpperCase()})]}),l!==null&&L.jsxs("div",{className:ht.returnInfo,children:[l.toLocaleString()," YEARS SINCE LAST VISIT"]}),L.jsxs("div",{className:ht.civRow,children:[L.jsxs("span",{className:ht.civTag,children:["ECONOMY: ",L.jsx("span",{className:ht.civValue,children:o.economy})]}),o.bannedGoods.length>0&&L.jsxs("span",{className:ht.civTag,children:["PROHIBITED:"," ",L.jsx("span",{className:ht.banned,children:o.bannedGoods.join(", ")})]})]}),a?L.jsxs(L.Fragment,{children:[L.jsx("div",{className:ht.eventTitle,children:a.title}),L.jsx("div",{className:ht.narrative,children:a.narrativeLines.map((f,h)=>L.jsx("p",{className:ht.narrativeLine,children:f},h))}),L.jsx("div",{className:ht.choices,children:a.choices.map(f=>{const h=f.requiresCredits!==void 0&&i.credits<f.requiresCredits,u=f.requiresMinTech!==void 0;return L.jsxs("button",{className:ht.choiceBtn,disabled:r||h||u,onClick:()=>c(f.id),title:h?`Requires CR ${f.requiresCredits}`:void 0,children:[L.jsx("span",{className:ht.choiceLabel,children:f.label}),L.jsx("span",{className:ht.choiceDesc,children:f.description})]},f.id)})})]}):L.jsxs(L.Fragment,{children:[L.jsx("div",{className:ht.eventTitle,children:"DOCKING CLEARANCE GRANTED"}),L.jsxs("div",{className:ht.narrative,children:[L.jsx("p",{className:ht.narrativeLine,children:"The port authority processes your ancient registration without comment."}),L.jsx("p",{className:ht.narrativeLine,children:"Another century has passed. The docking clamps feel familiar."}),L.jsx("p",{className:ht.narrativeLine,children:"You are the only constant in a galaxy that never stops changing."})]}),L.jsx("div",{className:ht.choices,children:L.jsxs("button",{className:ht.choiceBtn,disabled:r,onClick:()=>c("proceed"),children:[L.jsx("span",{className:ht.choiceLabel,children:"Proceed to station"}),L.jsx("span",{className:ht.choiceDesc,children:"No effect"})]})})]})]})})}const Hb="_overlay_y2bps_1",Wb="_panel_y2bps_12",jb="_header_y2bps_25",Xb="_dimLabel_y2bps_33",Yb="_vesselName_y2bps_37",qb="_originName_y2bps_43",$b="_faction_y2bps_48",Kb="_commLines_y2bps_57",Zb="_commLine_y2bps_57",Jb="_manifestSection_y2bps_79",Qb="_manifestTitle_y2bps_83",e2="_manifestHeader_y2bps_90",t2="_manifestRow_y2bps_101",n2="_goodName_y2bps_114",i2="_price_y2bps_118",r2="_qty_y2bps_123",s2="_tradeButtons_y2bps_128",o2="_tradeBtn_y2bps_133",a2="_actions_y2bps_157",l2="_dismissBtn_y2bps_164",yt={overlay:Hb,panel:Wb,header:jb,dimLabel:Xb,vesselName:Yb,originName:qb,faction:$b,commLines:Kb,commLine:Zb,manifestSection:Jb,manifestTitle:Qb,manifestHeader:e2,manifestRow:t2,goodName:n2,price:i2,qty:r2,tradeButtons:s2,tradeBtn:o2,actions:a2,dismissBtn:l2};function c2({onTrade:t,onDismiss:e}){const n=pe(r=>r.pendingCommContext),i=pe(r=>r.player);return n?L.jsx("div",{className:yt.overlay,children:L.jsxs("div",{className:yt.panel,children:[L.jsxs("div",{className:yt.header,children:[L.jsxs("div",{children:[L.jsx("span",{className:yt.dimLabel,children:"◈ VESSEL: "}),L.jsx("span",{className:yt.vesselName,children:n.npcName}),L.jsx("span",{className:yt.dimLabel,children:"  ORIGIN: "}),L.jsx("span",{className:yt.originName,children:n.originSystemName})]}),n.factionTag&&L.jsxs("div",{className:yt.faction,children:["FACTION: ",n.factionTag]})]}),L.jsxs("div",{className:yt.commLines,children:[L.jsxs("p",{className:yt.commLine,children:['"',n.commLines[0],'"']}),L.jsxs("p",{className:yt.commLine,children:['"',n.commLines[1],'"']})]}),L.jsxs("div",{className:yt.manifestSection,children:[L.jsx("div",{className:yt.manifestTitle,children:"MANIFEST"}),L.jsxs("div",{className:yt.manifestHeader,children:[L.jsx("span",{children:"Good"}),L.jsx("span",{children:"Buy"}),L.jsx("span",{children:"Sell"}),L.jsx("span",{children:"Qty"}),L.jsx("span",{})]}),n.cargo.map(r=>{const s=i.credits>=r.buyPrice,o=(i.cargo[r.good]??0)>0;return L.jsxs("div",{className:yt.manifestRow,children:[L.jsx("span",{className:yt.goodName,children:r.good}),L.jsxs("span",{className:yt.price,children:[r.buyPrice," CR"]}),L.jsxs("span",{className:yt.price,children:[r.sellPrice," CR"]}),L.jsx("span",{className:yt.qty,children:r.qty}),L.jsxs("span",{className:yt.tradeButtons,children:[L.jsx("button",{className:yt.tradeBtn,disabled:!s,onClick:()=>t("buy",r.good),title:s?void 0:"Insufficient credits",children:"BUY"}),L.jsx("button",{className:yt.tradeBtn,disabled:!o,onClick:()=>t("sell",r.good),title:o?void 0:"None in cargo",children:"SELL"})]})]},r.good)})]}),L.jsx("div",{className:yt.actions,children:L.jsx("button",{className:yt.dismissBtn,onClick:e,children:"DISMISS"})})]})}):null}function u2(){const t=st.useRef(null),e=st.useRef(null),n=pe(y=>y.ui.mode),i=pe(y=>y.ui.hyperspaceCountdown),r=pe(y=>y.setUIMode),s=st.useRef("flight"),[o,a]=st.useState("none");st.useEffect(()=>{if(!t.current||e.current)return;const y=new fR(t.current);return e.current=y,y.start(),()=>{y.dispose(),e.current=null}},[]),st.useEffect(()=>{const y=s.current;y==="flight"&&n==="hyperspace"?a("entry"):y==="hyperspace"&&n==="landing"&&a("exit"),s.current=n},[n]);const l=st.useCallback(()=>{var y,T;return((T=(y=e.current)==null?void 0:y.sceneRenderer)==null?void 0:T.getAllEntities())??new Map},[]),c=st.useCallback(()=>{var y,T,A;return((A=(T=(y=e.current)==null?void 0:y.sceneRenderer)==null?void 0:T.shipGroup)==null?void 0:A.position)??new D},[]),f=st.useCallback(()=>{var y,T;return((T=(y=e.current)==null?void 0:y.sceneRenderer)==null?void 0:T.camera)??null},[]),h=()=>{var y;(y=e.current)==null||y.undock()},u=y=>{var T;(T=e.current)==null||T.completeLanding(y)},m=()=>r("flight"),_=()=>r("flight"),v=()=>{var y;(y=e.current)==null||y.requestJump()},g=(y,T)=>{var A;(A=e.current)==null||A.tradeWithNPC(y,T)},d=()=>{var y;(y=e.current)==null||y.completeComm()},p=()=>{var y;(y=e.current)==null||y.respawn()},x=()=>{var y;(y=e.current)==null||y.newGame()};return L.jsxs(L.Fragment,{children:[L.jsx("canvas",{ref:t,style:{position:"absolute",inset:0,width:"100%",height:"100%"}}),(n==="flight"||n==="comms")&&L.jsx(UR,{getEntities:l,getShipPos:c,getCamera:f}),n==="flight"&&L.jsx(FR,{}),n==="hyperspace"&&L.jsx("div",{style:{position:"absolute",inset:0,background:"#000",pointerEvents:"none",zIndex:20}}),n==="hyperspace"&&L.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"var(--color-hyperspace-bright)",fontSize:"24px",letterSpacing:"8px",textShadow:"0 0 20px #8866FF",pointerEvents:"none",zIndex:21},children:"HYPERSPACE"}),i>0&&L.jsx("div",{className:"hyperChargeGlow"}),o!=="none"&&L.jsx("div",{className:o==="entry"?"flashEntry":"flashExit",onAnimationEnd:()=>a("none")}),n==="comms"&&L.jsx(c2,{onTrade:g,onDismiss:d}),n==="galaxy_map"&&L.jsx(XR,{onClose:m,onJump:v}),n==="system_map"&&L.jsx(eb,{onClose:_}),n==="landing"&&L.jsx(Gb,{onChoice:u}),n==="docked"&&L.jsx(Tb,{onUndock:h}),n==="dead"&&L.jsx(d2,{onRespawn:p,onNewGame:x}),(n==="flight"||n==="docked")&&L.jsx("button",{onClick:x,style:{position:"absolute",bottom:16,right:16,padding:"6px 14px",fontSize:11,letterSpacing:2,border:"1px solid rgba(255,255,255,0.15)",background:"rgba(0,0,0,0.5)",color:"rgba(255,255,255,0.35)",fontFamily:"Courier New, monospace",cursor:"pointer"},onMouseEnter:y=>y.currentTarget.style.color="rgba(255,255,255,0.7)",onMouseLeave:y=>y.currentTarget.style.color="rgba(255,255,255,0.35)",children:"NEW GAME"})]})}function d2({onRespawn:t,onNewGame:e}){const n=pe(r=>r.player.credits),i=Math.max(100,Math.floor(n*.1));return L.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(40,0,0,0.97)",zIndex:40,pointerEvents:"all"},children:L.jsxs("div",{style:{border:"1px solid rgba(255,34,0,0.6)",padding:"36px 44px",maxWidth:480,textAlign:"center",fontFamily:"Courier New, monospace"},children:[L.jsx("div",{style:{fontSize:28,letterSpacing:8,color:"#FF2200",marginBottom:16},children:"SHIP DESTROYED"}),L.jsxs("div",{style:{fontSize:13,color:"rgba(220,180,180,0.8)",lineHeight:1.7,marginBottom:24},children:["Hull integrity failed. Emergency beacon triggered.",L.jsx("br",{}),"Rescue vessel recovered pilot and cargo.",L.jsx("br",{}),L.jsxs("span",{style:{color:"#FFAA00"},children:["Insurance deducted: CR ",i.toLocaleString()]})]}),L.jsxs("div",{style:{display:"flex",gap:12,justifyContent:"center"},children:[L.jsx("button",{onClick:t,style:{padding:"10px 28px",fontSize:13,letterSpacing:3,border:"1px solid rgba(255,34,0,0.5)",background:"rgba(255,34,0,0.1)",color:"#FF6644",fontFamily:"inherit",cursor:"pointer"},children:"CLAIM INSURANCE"}),L.jsx("button",{onClick:e,style:{padding:"10px 28px",fontSize:13,letterSpacing:3,border:"1px solid rgba(255,255,255,0.2)",background:"rgba(255,255,255,0.05)",color:"rgba(255,255,255,0.5)",fontFamily:"inherit",cursor:"pointer"},children:"NEW GAME"})]})]})})}const ax=document.getElementById("root");if(!ax)throw new Error("No #root element");gv(ax).render(st.createElement(u2));
