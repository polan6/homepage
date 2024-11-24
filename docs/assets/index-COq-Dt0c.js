(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function dg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var hg={exports:{}},Fa={},pg={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lo=Symbol.for("react.element"),Iw=Symbol.for("react.portal"),kw=Symbol.for("react.fragment"),Tw=Symbol.for("react.strict_mode"),Cw=Symbol.for("react.profiler"),Aw=Symbol.for("react.provider"),Pw=Symbol.for("react.context"),xw=Symbol.for("react.forward_ref"),Rw=Symbol.for("react.suspense"),Ow=Symbol.for("react.memo"),Nw=Symbol.for("react.lazy"),xh=Symbol.iterator;function bw(e){return e===null||typeof e!="object"?null:(e=xh&&e[xh]||e["@@iterator"],typeof e=="function"?e:null)}var mg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gg=Object.assign,vg={};function di(e,t,n){this.props=e,this.context=t,this.refs=vg,this.updater=n||mg}di.prototype.isReactComponent={};di.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};di.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function yg(){}yg.prototype=di.prototype;function Jc(e,t,n){this.props=e,this.context=t,this.refs=vg,this.updater=n||mg}var Qc=Jc.prototype=new yg;Qc.constructor=Jc;gg(Qc,di.prototype);Qc.isPureReactComponent=!0;var Rh=Array.isArray,wg=Object.prototype.hasOwnProperty,Zc={current:null},_g={key:!0,ref:!0,__self:!0,__source:!0};function Eg(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)wg.call(t,r)&&!_g.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Lo,type:e,key:o,ref:a,props:i,_owner:Zc.current}}function Lw(e,t){return{$$typeof:Lo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ef(e){return typeof e=="object"&&e!==null&&e.$$typeof===Lo}function Dw(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Oh=/\/+/g;function Fl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Dw(""+e.key):t.toString(36)}function Ns(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Lo:case Iw:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Fl(a,0):r,Rh(i)?(n="",e!=null&&(n=e.replace(Oh,"$&/")+"/"),Ns(i,t,n,"",function(d){return d})):i!=null&&(ef(i)&&(i=Lw(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Oh,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Rh(e))for(var l=0;l<e.length;l++){o=e[l];var c=r+Fl(o,l);a+=Ns(o,t,n,c,i)}else if(c=bw(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=r+Fl(o,l++),a+=Ns(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function cs(e,t,n){if(e==null)return e;var r=[],i=0;return Ns(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Mw(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ze={current:null},bs={transition:null},Fw={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:bs,ReactCurrentOwner:Zc};function Sg(){throw Error("act(...) is not supported in production builds of React.")}Y.Children={map:cs,forEach:function(e,t,n){cs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return cs(e,function(){t++}),t},toArray:function(e){return cs(e,function(t){return t})||[]},only:function(e){if(!ef(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Y.Component=di;Y.Fragment=kw;Y.Profiler=Cw;Y.PureComponent=Jc;Y.StrictMode=Tw;Y.Suspense=Rw;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fw;Y.act=Sg;Y.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=gg({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Zc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)wg.call(t,c)&&!_g.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:Lo,type:e.type,key:i,ref:o,props:r,_owner:a}};Y.createContext=function(e){return e={$$typeof:Pw,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Aw,_context:e},e.Consumer=e};Y.createElement=Eg;Y.createFactory=function(e){var t=Eg.bind(null,e);return t.type=e,t};Y.createRef=function(){return{current:null}};Y.forwardRef=function(e){return{$$typeof:xw,render:e}};Y.isValidElement=ef;Y.lazy=function(e){return{$$typeof:Nw,_payload:{_status:-1,_result:e},_init:Mw}};Y.memo=function(e,t){return{$$typeof:Ow,type:e,compare:t===void 0?null:t}};Y.startTransition=function(e){var t=bs.transition;bs.transition={};try{e()}finally{bs.transition=t}};Y.unstable_act=Sg;Y.useCallback=function(e,t){return ze.current.useCallback(e,t)};Y.useContext=function(e){return ze.current.useContext(e)};Y.useDebugValue=function(){};Y.useDeferredValue=function(e){return ze.current.useDeferredValue(e)};Y.useEffect=function(e,t){return ze.current.useEffect(e,t)};Y.useId=function(){return ze.current.useId()};Y.useImperativeHandle=function(e,t,n){return ze.current.useImperativeHandle(e,t,n)};Y.useInsertionEffect=function(e,t){return ze.current.useInsertionEffect(e,t)};Y.useLayoutEffect=function(e,t){return ze.current.useLayoutEffect(e,t)};Y.useMemo=function(e,t){return ze.current.useMemo(e,t)};Y.useReducer=function(e,t,n){return ze.current.useReducer(e,t,n)};Y.useRef=function(e){return ze.current.useRef(e)};Y.useState=function(e){return ze.current.useState(e)};Y.useSyncExternalStore=function(e,t,n){return ze.current.useSyncExternalStore(e,t,n)};Y.useTransition=function(){return ze.current.useTransition()};Y.version="18.3.1";pg.exports=Y;var L=pg.exports;const Ig=dg(L);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uw=L,jw=Symbol.for("react.element"),zw=Symbol.for("react.fragment"),$w=Object.prototype.hasOwnProperty,Bw=Uw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Hw={key:!0,ref:!0,__self:!0,__source:!0};function kg(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)$w.call(t,r)&&!Hw.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:jw,type:e,key:o,ref:a,props:i,_owner:Bw.current}}Fa.Fragment=zw;Fa.jsx=kg;Fa.jsxs=kg;hg.exports=Fa;var G=hg.exports,Tg={exports:{}},tt={},Cg={exports:{}},Ag={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,V){var W=z.length;z.push(V);e:for(;0<W;){var le=W-1>>>1,ee=z[le];if(0<i(ee,V))z[le]=V,z[W]=ee,W=le;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var V=z[0],W=z.pop();if(W!==V){z[0]=W;e:for(var le=0,ee=z.length,pe=ee>>>1;le<pe;){var Ut=2*(le+1)-1,jt=z[Ut],zt=Ut+1,$t=z[zt];if(0>i(jt,W))zt<ee&&0>i($t,jt)?(z[le]=$t,z[zt]=W,le=zt):(z[le]=jt,z[Ut]=W,le=Ut);else if(zt<ee&&0>i($t,W))z[le]=$t,z[zt]=W,le=zt;else break e}}return V}function i(z,V){var W=z.sortIndex-V.sortIndex;return W!==0?W:z.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],d=[],m=1,w=null,y=3,C=!1,x=!1,O=!1,N=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(z){for(var V=n(d);V!==null;){if(V.callback===null)r(d);else if(V.startTime<=z)r(d),V.sortIndex=V.expirationTime,t(c,V);else break;V=n(d)}}function b(z){if(O=!1,k(z),!x)if(n(c)!==null)x=!0,_i(D);else{var V=n(d);V!==null&&Ft(b,V.startTime-z)}}function D(z,V){x=!1,O&&(O=!1,_(p),p=-1),C=!0;var W=y;try{for(k(V),w=n(c);w!==null&&(!(w.expirationTime>V)||z&&!T());){var le=w.callback;if(typeof le=="function"){w.callback=null,y=w.priorityLevel;var ee=le(w.expirationTime<=V);V=e.unstable_now(),typeof ee=="function"?w.callback=ee:w===n(c)&&r(c),k(V)}else r(c);w=n(c)}if(w!==null)var pe=!0;else{var Ut=n(d);Ut!==null&&Ft(b,Ut.startTime-V),pe=!1}return pe}finally{w=null,y=W,C=!1}}var j=!1,E=null,p=-1,v=5,S=-1;function T(){return!(e.unstable_now()-S<v)}function P(){if(E!==null){var z=e.unstable_now();S=z;var V=!0;try{V=E(!0,z)}finally{V?I():(j=!1,E=null)}}else j=!1}var I;if(typeof g=="function")I=function(){g(P)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,Xn=it.port2;it.port1.onmessage=P,I=function(){Xn.postMessage(null)}}else I=function(){N(P,0)};function _i(z){E=z,j||(j=!0,I())}function Ft(z,V){p=N(function(){z(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){x||C||(x=!0,_i(D))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(z){switch(y){case 1:case 2:case 3:var V=3;break;default:V=y}var W=y;y=V;try{return z()}finally{y=W}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,V){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var W=y;y=z;try{return V()}finally{y=W}},e.unstable_scheduleCallback=function(z,V,W){var le=e.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?le+W:le):W=le,z){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=W+ee,z={id:m++,callback:V,priorityLevel:z,startTime:W,expirationTime:ee,sortIndex:-1},W>le?(z.sortIndex=W,t(d,z),n(c)===null&&z===n(d)&&(O?(_(p),p=-1):O=!0,Ft(b,W-le))):(z.sortIndex=ee,t(c,z),x||C||(x=!0,_i(D))),z},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(z){var V=y;return function(){var W=y;y=V;try{return z.apply(this,arguments)}finally{y=W}}}})(Ag);Cg.exports=Ag;var Vw=Cg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ww=L,et=Vw;function F(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Pg=new Set,co={};function Er(e,t){ni(e,t),ni(e+"Capture",t)}function ni(e,t){for(co[e]=t,e=0;e<t.length;e++)Pg.add(t[e])}var tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pu=Object.prototype.hasOwnProperty,Gw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Nh={},bh={};function Kw(e){return Pu.call(bh,e)?!0:Pu.call(Nh,e)?!1:Gw.test(e)?bh[e]=!0:(Nh[e]=!0,!1)}function Yw(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Xw(e,t,n,r){if(t===null||typeof t>"u"||Yw(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function $e(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Te[e]=new $e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Te[t]=new $e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Te[e]=new $e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Te[e]=new $e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Te[e]=new $e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Te[e]=new $e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Te[e]=new $e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Te[e]=new $e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Te[e]=new $e(e,5,!1,e.toLowerCase(),null,!1,!1)});var tf=/[\-:]([a-z])/g;function nf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(tf,nf);Te[t]=new $e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(tf,nf);Te[t]=new $e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(tf,nf);Te[t]=new $e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Te[e]=new $e(e,1,!1,e.toLowerCase(),null,!1,!1)});Te.xlinkHref=new $e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Te[e]=new $e(e,1,!1,e.toLowerCase(),null,!0,!0)});function rf(e,t,n,r){var i=Te.hasOwnProperty(t)?Te[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Xw(t,n,i,r)&&(n=null),r||i===null?Kw(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var cn=Ww.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fs=Symbol.for("react.element"),Nr=Symbol.for("react.portal"),br=Symbol.for("react.fragment"),of=Symbol.for("react.strict_mode"),xu=Symbol.for("react.profiler"),xg=Symbol.for("react.provider"),Rg=Symbol.for("react.context"),sf=Symbol.for("react.forward_ref"),Ru=Symbol.for("react.suspense"),Ou=Symbol.for("react.suspense_list"),af=Symbol.for("react.memo"),wn=Symbol.for("react.lazy"),Og=Symbol.for("react.offscreen"),Lh=Symbol.iterator;function Li(e){return e===null||typeof e!="object"?null:(e=Lh&&e[Lh]||e["@@iterator"],typeof e=="function"?e:null)}var de=Object.assign,Ul;function Hi(e){if(Ul===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ul=t&&t[1]||""}return`
`+Ul+e}var jl=!1;function zl(e,t){if(!e||jl)return"";jl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{jl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Hi(e):""}function qw(e){switch(e.tag){case 5:return Hi(e.type);case 16:return Hi("Lazy");case 13:return Hi("Suspense");case 19:return Hi("SuspenseList");case 0:case 2:case 15:return e=zl(e.type,!1),e;case 11:return e=zl(e.type.render,!1),e;case 1:return e=zl(e.type,!0),e;default:return""}}function Nu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case br:return"Fragment";case Nr:return"Portal";case xu:return"Profiler";case of:return"StrictMode";case Ru:return"Suspense";case Ou:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Rg:return(e.displayName||"Context")+".Consumer";case xg:return(e._context.displayName||"Context")+".Provider";case sf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case af:return t=e.displayName||null,t!==null?t:Nu(e.type)||"Memo";case wn:t=e._payload,e=e._init;try{return Nu(e(t))}catch{}}return null}function Jw(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Nu(t);case 8:return t===of?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Un(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ng(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Qw(e){var t=Ng(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ds(e){e._valueTracker||(e._valueTracker=Qw(e))}function bg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ng(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Qs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function bu(e,t){var n=t.checked;return de({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Dh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Un(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Lg(e,t){t=t.checked,t!=null&&rf(e,"checked",t,!1)}function Lu(e,t){Lg(e,t);var n=Un(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Du(e,t.type,n):t.hasOwnProperty("defaultValue")&&Du(e,t.type,Un(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Mh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Du(e,t,n){(t!=="number"||Qs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Vi=Array.isArray;function Gr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Un(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Mu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(F(91));return de({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Fh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(F(92));if(Vi(n)){if(1<n.length)throw Error(F(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Un(n)}}function Dg(e,t){var n=Un(t.value),r=Un(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Uh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Mg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Mg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var hs,Fg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(hs=hs||document.createElement("div"),hs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=hs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function fo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Yi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Zw=["Webkit","ms","Moz","O"];Object.keys(Yi).forEach(function(e){Zw.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Yi[t]=Yi[e]})});function Ug(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Yi.hasOwnProperty(e)&&Yi[e]?(""+t).trim():t+"px"}function jg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ug(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var e_=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Uu(e,t){if(t){if(e_[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(F(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(F(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(F(61))}if(t.style!=null&&typeof t.style!="object")throw Error(F(62))}}function ju(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zu=null;function lf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $u=null,Kr=null,Yr=null;function jh(e){if(e=Fo(e)){if(typeof $u!="function")throw Error(F(280));var t=e.stateNode;t&&(t=Ba(t),$u(e.stateNode,e.type,t))}}function zg(e){Kr?Yr?Yr.push(e):Yr=[e]:Kr=e}function $g(){if(Kr){var e=Kr,t=Yr;if(Yr=Kr=null,jh(e),t)for(e=0;e<t.length;e++)jh(t[e])}}function Bg(e,t){return e(t)}function Hg(){}var $l=!1;function Vg(e,t,n){if($l)return e(t,n);$l=!0;try{return Bg(e,t,n)}finally{$l=!1,(Kr!==null||Yr!==null)&&(Hg(),$g())}}function ho(e,t){var n=e.stateNode;if(n===null)return null;var r=Ba(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(F(231,t,typeof n));return n}var Bu=!1;if(tn)try{var Di={};Object.defineProperty(Di,"passive",{get:function(){Bu=!0}}),window.addEventListener("test",Di,Di),window.removeEventListener("test",Di,Di)}catch{Bu=!1}function t_(e,t,n,r,i,o,a,l,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(m){this.onError(m)}}var Xi=!1,Zs=null,ea=!1,Hu=null,n_={onError:function(e){Xi=!0,Zs=e}};function r_(e,t,n,r,i,o,a,l,c){Xi=!1,Zs=null,t_.apply(n_,arguments)}function i_(e,t,n,r,i,o,a,l,c){if(r_.apply(this,arguments),Xi){if(Xi){var d=Zs;Xi=!1,Zs=null}else throw Error(F(198));ea||(ea=!0,Hu=d)}}function Sr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Wg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function zh(e){if(Sr(e)!==e)throw Error(F(188))}function o_(e){var t=e.alternate;if(!t){if(t=Sr(e),t===null)throw Error(F(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return zh(i),e;if(o===r)return zh(i),t;o=o.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?e:t}function Gg(e){return e=o_(e),e!==null?Kg(e):null}function Kg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Kg(e);if(t!==null)return t;e=e.sibling}return null}var Yg=et.unstable_scheduleCallback,$h=et.unstable_cancelCallback,s_=et.unstable_shouldYield,a_=et.unstable_requestPaint,ge=et.unstable_now,l_=et.unstable_getCurrentPriorityLevel,uf=et.unstable_ImmediatePriority,Xg=et.unstable_UserBlockingPriority,ta=et.unstable_NormalPriority,u_=et.unstable_LowPriority,qg=et.unstable_IdlePriority,Ua=null,Ot=null;function c_(e){if(Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot(Ua,e,void 0,(e.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:h_,f_=Math.log,d_=Math.LN2;function h_(e){return e>>>=0,e===0?32:31-(f_(e)/d_|0)|0}var ps=64,ms=4194304;function Wi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function na(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Wi(l):(o&=a,o!==0&&(r=Wi(o)))}else a=n&~i,a!==0?r=Wi(a):o!==0&&(r=Wi(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-wt(t),i=1<<n,r|=e[n],t&=~i;return r}function p_(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function m_(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-wt(o),l=1<<a,c=i[a];c===-1?(!(l&n)||l&r)&&(i[a]=p_(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function Vu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Jg(){var e=ps;return ps<<=1,!(ps&4194240)&&(ps=64),e}function Bl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Do(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-wt(t),e[t]=n}function g_(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-wt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function cf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-wt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Z=0;function Qg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Zg,ff,ev,tv,nv,Wu=!1,gs=[],Pn=null,xn=null,Rn=null,po=new Map,mo=new Map,En=[],v_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bh(e,t){switch(e){case"focusin":case"focusout":Pn=null;break;case"dragenter":case"dragleave":xn=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":po.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":mo.delete(t.pointerId)}}function Mi(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Fo(t),t!==null&&ff(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function y_(e,t,n,r,i){switch(t){case"focusin":return Pn=Mi(Pn,e,t,n,r,i),!0;case"dragenter":return xn=Mi(xn,e,t,n,r,i),!0;case"mouseover":return Rn=Mi(Rn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return po.set(o,Mi(po.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,mo.set(o,Mi(mo.get(o)||null,e,t,n,r,i)),!0}return!1}function rv(e){var t=nr(e.target);if(t!==null){var n=Sr(t);if(n!==null){if(t=n.tag,t===13){if(t=Wg(n),t!==null){e.blockedOn=t,nv(e.priority,function(){ev(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ls(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Gu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);zu=r,n.target.dispatchEvent(r),zu=null}else return t=Fo(n),t!==null&&ff(t),e.blockedOn=n,!1;t.shift()}return!0}function Hh(e,t,n){Ls(e)&&n.delete(t)}function w_(){Wu=!1,Pn!==null&&Ls(Pn)&&(Pn=null),xn!==null&&Ls(xn)&&(xn=null),Rn!==null&&Ls(Rn)&&(Rn=null),po.forEach(Hh),mo.forEach(Hh)}function Fi(e,t){e.blockedOn===t&&(e.blockedOn=null,Wu||(Wu=!0,et.unstable_scheduleCallback(et.unstable_NormalPriority,w_)))}function go(e){function t(i){return Fi(i,e)}if(0<gs.length){Fi(gs[0],e);for(var n=1;n<gs.length;n++){var r=gs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Pn!==null&&Fi(Pn,e),xn!==null&&Fi(xn,e),Rn!==null&&Fi(Rn,e),po.forEach(t),mo.forEach(t),n=0;n<En.length;n++)r=En[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<En.length&&(n=En[0],n.blockedOn===null);)rv(n),n.blockedOn===null&&En.shift()}var Xr=cn.ReactCurrentBatchConfig,ra=!0;function __(e,t,n,r){var i=Z,o=Xr.transition;Xr.transition=null;try{Z=1,df(e,t,n,r)}finally{Z=i,Xr.transition=o}}function E_(e,t,n,r){var i=Z,o=Xr.transition;Xr.transition=null;try{Z=4,df(e,t,n,r)}finally{Z=i,Xr.transition=o}}function df(e,t,n,r){if(ra){var i=Gu(e,t,n,r);if(i===null)Ql(e,t,r,ia,n),Bh(e,r);else if(y_(i,e,t,n,r))r.stopPropagation();else if(Bh(e,r),t&4&&-1<v_.indexOf(e)){for(;i!==null;){var o=Fo(i);if(o!==null&&Zg(o),o=Gu(e,t,n,r),o===null&&Ql(e,t,r,ia,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ql(e,t,r,null,n)}}var ia=null;function Gu(e,t,n,r){if(ia=null,e=lf(r),e=nr(e),e!==null)if(t=Sr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Wg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ia=e,null}function iv(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(l_()){case uf:return 1;case Xg:return 4;case ta:case u_:return 16;case qg:return 536870912;default:return 16}default:return 16}}var Cn=null,hf=null,Ds=null;function ov(){if(Ds)return Ds;var e,t=hf,n=t.length,r,i="value"in Cn?Cn.value:Cn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Ds=i.slice(e,1<r?1-r:void 0)}function Ms(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function vs(){return!0}function Vh(){return!1}function nt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?vs:Vh,this.isPropagationStopped=Vh,this}return de(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vs)},persist:function(){},isPersistent:vs}),t}var hi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pf=nt(hi),Mo=de({},hi,{view:0,detail:0}),S_=nt(Mo),Hl,Vl,Ui,ja=de({},Mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ui&&(Ui&&e.type==="mousemove"?(Hl=e.screenX-Ui.screenX,Vl=e.screenY-Ui.screenY):Vl=Hl=0,Ui=e),Hl)},movementY:function(e){return"movementY"in e?e.movementY:Vl}}),Wh=nt(ja),I_=de({},ja,{dataTransfer:0}),k_=nt(I_),T_=de({},Mo,{relatedTarget:0}),Wl=nt(T_),C_=de({},hi,{animationName:0,elapsedTime:0,pseudoElement:0}),A_=nt(C_),P_=de({},hi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),x_=nt(P_),R_=de({},hi,{data:0}),Gh=nt(R_),O_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},N_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},b_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function L_(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=b_[e])?!!t[e]:!1}function mf(){return L_}var D_=de({},Mo,{key:function(e){if(e.key){var t=O_[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ms(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?N_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mf,charCode:function(e){return e.type==="keypress"?Ms(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ms(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),M_=nt(D_),F_=de({},ja,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kh=nt(F_),U_=de({},Mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mf}),j_=nt(U_),z_=de({},hi,{propertyName:0,elapsedTime:0,pseudoElement:0}),$_=nt(z_),B_=de({},ja,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),H_=nt(B_),V_=[9,13,27,32],gf=tn&&"CompositionEvent"in window,qi=null;tn&&"documentMode"in document&&(qi=document.documentMode);var W_=tn&&"TextEvent"in window&&!qi,sv=tn&&(!gf||qi&&8<qi&&11>=qi),Yh=" ",Xh=!1;function av(e,t){switch(e){case"keyup":return V_.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lv(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Lr=!1;function G_(e,t){switch(e){case"compositionend":return lv(t);case"keypress":return t.which!==32?null:(Xh=!0,Yh);case"textInput":return e=t.data,e===Yh&&Xh?null:e;default:return null}}function K_(e,t){if(Lr)return e==="compositionend"||!gf&&av(e,t)?(e=ov(),Ds=hf=Cn=null,Lr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return sv&&t.locale!=="ko"?null:t.data;default:return null}}var Y_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Y_[e.type]:t==="textarea"}function uv(e,t,n,r){zg(r),t=oa(t,"onChange"),0<t.length&&(n=new pf("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ji=null,vo=null;function X_(e){_v(e,0)}function za(e){var t=Fr(e);if(bg(t))return e}function q_(e,t){if(e==="change")return t}var cv=!1;if(tn){var Gl;if(tn){var Kl="oninput"in document;if(!Kl){var Jh=document.createElement("div");Jh.setAttribute("oninput","return;"),Kl=typeof Jh.oninput=="function"}Gl=Kl}else Gl=!1;cv=Gl&&(!document.documentMode||9<document.documentMode)}function Qh(){Ji&&(Ji.detachEvent("onpropertychange",fv),vo=Ji=null)}function fv(e){if(e.propertyName==="value"&&za(vo)){var t=[];uv(t,vo,e,lf(e)),Vg(X_,t)}}function J_(e,t,n){e==="focusin"?(Qh(),Ji=t,vo=n,Ji.attachEvent("onpropertychange",fv)):e==="focusout"&&Qh()}function Q_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return za(vo)}function Z_(e,t){if(e==="click")return za(t)}function eE(e,t){if(e==="input"||e==="change")return za(t)}function tE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var St=typeof Object.is=="function"?Object.is:tE;function yo(e,t){if(St(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Pu.call(t,i)||!St(e[i],t[i]))return!1}return!0}function Zh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ep(e,t){var n=Zh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zh(n)}}function dv(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?dv(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function hv(){for(var e=window,t=Qs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qs(e.document)}return t}function vf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function nE(e){var t=hv(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dv(n.ownerDocument.documentElement,n)){if(r!==null&&vf(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=ep(n,o);var a=ep(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var rE=tn&&"documentMode"in document&&11>=document.documentMode,Dr=null,Ku=null,Qi=null,Yu=!1;function tp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yu||Dr==null||Dr!==Qs(r)||(r=Dr,"selectionStart"in r&&vf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qi&&yo(Qi,r)||(Qi=r,r=oa(Ku,"onSelect"),0<r.length&&(t=new pf("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Dr)))}function ys(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Mr={animationend:ys("Animation","AnimationEnd"),animationiteration:ys("Animation","AnimationIteration"),animationstart:ys("Animation","AnimationStart"),transitionend:ys("Transition","TransitionEnd")},Yl={},pv={};tn&&(pv=document.createElement("div").style,"AnimationEvent"in window||(delete Mr.animationend.animation,delete Mr.animationiteration.animation,delete Mr.animationstart.animation),"TransitionEvent"in window||delete Mr.transitionend.transition);function $a(e){if(Yl[e])return Yl[e];if(!Mr[e])return e;var t=Mr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in pv)return Yl[e]=t[n];return e}var mv=$a("animationend"),gv=$a("animationiteration"),vv=$a("animationstart"),yv=$a("transitionend"),wv=new Map,np="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vn(e,t){wv.set(e,t),Er(t,[e])}for(var Xl=0;Xl<np.length;Xl++){var ql=np[Xl],iE=ql.toLowerCase(),oE=ql[0].toUpperCase()+ql.slice(1);Vn(iE,"on"+oE)}Vn(mv,"onAnimationEnd");Vn(gv,"onAnimationIteration");Vn(vv,"onAnimationStart");Vn("dblclick","onDoubleClick");Vn("focusin","onFocus");Vn("focusout","onBlur");Vn(yv,"onTransitionEnd");ni("onMouseEnter",["mouseout","mouseover"]);ni("onMouseLeave",["mouseout","mouseover"]);ni("onPointerEnter",["pointerout","pointerover"]);ni("onPointerLeave",["pointerout","pointerover"]);Er("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Er("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Er("onBeforeInput",["compositionend","keypress","textInput","paste"]);Er("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Er("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Er("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gi));function rp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,i_(r,t,void 0,e),e.currentTarget=null}function _v(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;rp(i,l,d),o=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,d=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;rp(i,l,d),o=c}}}if(ea)throw e=Hu,ea=!1,Hu=null,e}function ie(e,t){var n=t[Zu];n===void 0&&(n=t[Zu]=new Set);var r=e+"__bubble";n.has(r)||(Ev(t,e,2,!1),n.add(r))}function Jl(e,t,n){var r=0;t&&(r|=4),Ev(n,e,r,t)}var ws="_reactListening"+Math.random().toString(36).slice(2);function wo(e){if(!e[ws]){e[ws]=!0,Pg.forEach(function(n){n!=="selectionchange"&&(sE.has(n)||Jl(n,!1,e),Jl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ws]||(t[ws]=!0,Jl("selectionchange",!1,t))}}function Ev(e,t,n,r){switch(iv(t)){case 1:var i=__;break;case 4:i=E_;break;default:i=df}n=i.bind(null,t,n,e),i=void 0,!Bu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ql(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=nr(l),a===null)return;if(c=a.tag,c===5||c===6){r=o=a;continue e}l=l.parentNode}}r=r.return}Vg(function(){var d=o,m=lf(n),w=[];e:{var y=wv.get(e);if(y!==void 0){var C=pf,x=e;switch(e){case"keypress":if(Ms(n)===0)break e;case"keydown":case"keyup":C=M_;break;case"focusin":x="focus",C=Wl;break;case"focusout":x="blur",C=Wl;break;case"beforeblur":case"afterblur":C=Wl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=Wh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=k_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=j_;break;case mv:case gv:case vv:C=A_;break;case yv:C=$_;break;case"scroll":C=S_;break;case"wheel":C=H_;break;case"copy":case"cut":case"paste":C=x_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=Kh}var O=(t&4)!==0,N=!O&&e==="scroll",_=O?y!==null?y+"Capture":null:y;O=[];for(var g=d,k;g!==null;){k=g;var b=k.stateNode;if(k.tag===5&&b!==null&&(k=b,_!==null&&(b=ho(g,_),b!=null&&O.push(_o(g,b,k)))),N)break;g=g.return}0<O.length&&(y=new C(y,x,null,n,m),w.push({event:y,listeners:O}))}}if(!(t&7)){e:{if(y=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",y&&n!==zu&&(x=n.relatedTarget||n.fromElement)&&(nr(x)||x[nn]))break e;if((C||y)&&(y=m.window===m?m:(y=m.ownerDocument)?y.defaultView||y.parentWindow:window,C?(x=n.relatedTarget||n.toElement,C=d,x=x?nr(x):null,x!==null&&(N=Sr(x),x!==N||x.tag!==5&&x.tag!==6)&&(x=null)):(C=null,x=d),C!==x)){if(O=Wh,b="onMouseLeave",_="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(O=Kh,b="onPointerLeave",_="onPointerEnter",g="pointer"),N=C==null?y:Fr(C),k=x==null?y:Fr(x),y=new O(b,g+"leave",C,n,m),y.target=N,y.relatedTarget=k,b=null,nr(m)===d&&(O=new O(_,g+"enter",x,n,m),O.target=k,O.relatedTarget=N,b=O),N=b,C&&x)t:{for(O=C,_=x,g=0,k=O;k;k=Or(k))g++;for(k=0,b=_;b;b=Or(b))k++;for(;0<g-k;)O=Or(O),g--;for(;0<k-g;)_=Or(_),k--;for(;g--;){if(O===_||_!==null&&O===_.alternate)break t;O=Or(O),_=Or(_)}O=null}else O=null;C!==null&&ip(w,y,C,O,!1),x!==null&&N!==null&&ip(w,N,x,O,!0)}}e:{if(y=d?Fr(d):window,C=y.nodeName&&y.nodeName.toLowerCase(),C==="select"||C==="input"&&y.type==="file")var D=q_;else if(qh(y))if(cv)D=eE;else{D=Q_;var j=J_}else(C=y.nodeName)&&C.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(D=Z_);if(D&&(D=D(e,d))){uv(w,D,n,m);break e}j&&j(e,y,d),e==="focusout"&&(j=y._wrapperState)&&j.controlled&&y.type==="number"&&Du(y,"number",y.value)}switch(j=d?Fr(d):window,e){case"focusin":(qh(j)||j.contentEditable==="true")&&(Dr=j,Ku=d,Qi=null);break;case"focusout":Qi=Ku=Dr=null;break;case"mousedown":Yu=!0;break;case"contextmenu":case"mouseup":case"dragend":Yu=!1,tp(w,n,m);break;case"selectionchange":if(rE)break;case"keydown":case"keyup":tp(w,n,m)}var E;if(gf)e:{switch(e){case"compositionstart":var p="onCompositionStart";break e;case"compositionend":p="onCompositionEnd";break e;case"compositionupdate":p="onCompositionUpdate";break e}p=void 0}else Lr?av(e,n)&&(p="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(p="onCompositionStart");p&&(sv&&n.locale!=="ko"&&(Lr||p!=="onCompositionStart"?p==="onCompositionEnd"&&Lr&&(E=ov()):(Cn=m,hf="value"in Cn?Cn.value:Cn.textContent,Lr=!0)),j=oa(d,p),0<j.length&&(p=new Gh(p,e,null,n,m),w.push({event:p,listeners:j}),E?p.data=E:(E=lv(n),E!==null&&(p.data=E)))),(E=W_?G_(e,n):K_(e,n))&&(d=oa(d,"onBeforeInput"),0<d.length&&(m=new Gh("onBeforeInput","beforeinput",null,n,m),w.push({event:m,listeners:d}),m.data=E))}_v(w,t)})}function _o(e,t,n){return{instance:e,listener:t,currentTarget:n}}function oa(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ho(e,n),o!=null&&r.unshift(_o(e,o,i)),o=ho(e,t),o!=null&&r.push(_o(e,o,i))),e=e.return}return r}function Or(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ip(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,d=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&d!==null&&(l=d,i?(c=ho(n,o),c!=null&&a.unshift(_o(n,c,l))):i||(c=ho(n,o),c!=null&&a.push(_o(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var aE=/\r\n?/g,lE=/\u0000|\uFFFD/g;function op(e){return(typeof e=="string"?e:""+e).replace(aE,`
`).replace(lE,"")}function _s(e,t,n){if(t=op(t),op(e)!==t&&n)throw Error(F(425))}function sa(){}var Xu=null,qu=null;function Ju(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Qu=typeof setTimeout=="function"?setTimeout:void 0,uE=typeof clearTimeout=="function"?clearTimeout:void 0,sp=typeof Promise=="function"?Promise:void 0,cE=typeof queueMicrotask=="function"?queueMicrotask:typeof sp<"u"?function(e){return sp.resolve(null).then(e).catch(fE)}:Qu;function fE(e){setTimeout(function(){throw e})}function Zl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),go(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);go(t)}function On(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ap(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var pi=Math.random().toString(36).slice(2),Pt="__reactFiber$"+pi,Eo="__reactProps$"+pi,nn="__reactContainer$"+pi,Zu="__reactEvents$"+pi,dE="__reactListeners$"+pi,hE="__reactHandles$"+pi;function nr(e){var t=e[Pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[nn]||n[Pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ap(e);e!==null;){if(n=e[Pt])return n;e=ap(e)}return t}e=n,n=e.parentNode}return null}function Fo(e){return e=e[Pt]||e[nn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Fr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(F(33))}function Ba(e){return e[Eo]||null}var ec=[],Ur=-1;function Wn(e){return{current:e}}function oe(e){0>Ur||(e.current=ec[Ur],ec[Ur]=null,Ur--)}function ne(e,t){Ur++,ec[Ur]=e.current,e.current=t}var jn={},Ne=Wn(jn),Ge=Wn(!1),fr=jn;function ri(e,t){var n=e.type.contextTypes;if(!n)return jn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ke(e){return e=e.childContextTypes,e!=null}function aa(){oe(Ge),oe(Ne)}function lp(e,t,n){if(Ne.current!==jn)throw Error(F(168));ne(Ne,t),ne(Ge,n)}function Sv(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(F(108,Jw(e)||"Unknown",i));return de({},n,r)}function la(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||jn,fr=Ne.current,ne(Ne,e),ne(Ge,Ge.current),!0}function up(e,t,n){var r=e.stateNode;if(!r)throw Error(F(169));n?(e=Sv(e,t,fr),r.__reactInternalMemoizedMergedChildContext=e,oe(Ge),oe(Ne),ne(Ne,e)):oe(Ge),ne(Ge,n)}var Wt=null,Ha=!1,eu=!1;function Iv(e){Wt===null?Wt=[e]:Wt.push(e)}function pE(e){Ha=!0,Iv(e)}function Gn(){if(!eu&&Wt!==null){eu=!0;var e=0,t=Z;try{var n=Wt;for(Z=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Wt=null,Ha=!1}catch(i){throw Wt!==null&&(Wt=Wt.slice(e+1)),Yg(uf,Gn),i}finally{Z=t,eu=!1}}return null}var jr=[],zr=0,ua=null,ca=0,st=[],at=0,dr=null,Kt=1,Yt="";function Zn(e,t){jr[zr++]=ca,jr[zr++]=ua,ua=e,ca=t}function kv(e,t,n){st[at++]=Kt,st[at++]=Yt,st[at++]=dr,dr=e;var r=Kt;e=Yt;var i=32-wt(r)-1;r&=~(1<<i),n+=1;var o=32-wt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Kt=1<<32-wt(t)+i|n<<i|r,Yt=o+e}else Kt=1<<o|n<<i|r,Yt=e}function yf(e){e.return!==null&&(Zn(e,1),kv(e,1,0))}function wf(e){for(;e===ua;)ua=jr[--zr],jr[zr]=null,ca=jr[--zr],jr[zr]=null;for(;e===dr;)dr=st[--at],st[at]=null,Yt=st[--at],st[at]=null,Kt=st[--at],st[at]=null}var Qe=null,Je=null,ae=!1,vt=null;function Tv(e,t){var n=lt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function cp(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Qe=e,Je=On(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Qe=e,Je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=dr!==null?{id:Kt,overflow:Yt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=lt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Qe=e,Je=null,!0):!1;default:return!1}}function tc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function nc(e){if(ae){var t=Je;if(t){var n=t;if(!cp(e,t)){if(tc(e))throw Error(F(418));t=On(n.nextSibling);var r=Qe;t&&cp(e,t)?Tv(r,n):(e.flags=e.flags&-4097|2,ae=!1,Qe=e)}}else{if(tc(e))throw Error(F(418));e.flags=e.flags&-4097|2,ae=!1,Qe=e}}}function fp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qe=e}function Es(e){if(e!==Qe)return!1;if(!ae)return fp(e),ae=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ju(e.type,e.memoizedProps)),t&&(t=Je)){if(tc(e))throw Cv(),Error(F(418));for(;t;)Tv(e,t),t=On(t.nextSibling)}if(fp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(F(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Je=On(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Je=null}}else Je=Qe?On(e.stateNode.nextSibling):null;return!0}function Cv(){for(var e=Je;e;)e=On(e.nextSibling)}function ii(){Je=Qe=null,ae=!1}function _f(e){vt===null?vt=[e]:vt.push(e)}var mE=cn.ReactCurrentBatchConfig;function ji(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,e))}return e}function Ss(e,t){throw e=Object.prototype.toString.call(t),Error(F(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function dp(e){var t=e._init;return t(e._payload)}function Av(e){function t(_,g){if(e){var k=_.deletions;k===null?(_.deletions=[g],_.flags|=16):k.push(g)}}function n(_,g){if(!e)return null;for(;g!==null;)t(_,g),g=g.sibling;return null}function r(_,g){for(_=new Map;g!==null;)g.key!==null?_.set(g.key,g):_.set(g.index,g),g=g.sibling;return _}function i(_,g){return _=Dn(_,g),_.index=0,_.sibling=null,_}function o(_,g,k){return _.index=k,e?(k=_.alternate,k!==null?(k=k.index,k<g?(_.flags|=2,g):k):(_.flags|=2,g)):(_.flags|=1048576,g)}function a(_){return e&&_.alternate===null&&(_.flags|=2),_}function l(_,g,k,b){return g===null||g.tag!==6?(g=au(k,_.mode,b),g.return=_,g):(g=i(g,k),g.return=_,g)}function c(_,g,k,b){var D=k.type;return D===br?m(_,g,k.props.children,b,k.key):g!==null&&(g.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===wn&&dp(D)===g.type)?(b=i(g,k.props),b.ref=ji(_,g,k),b.return=_,b):(b=Hs(k.type,k.key,k.props,null,_.mode,b),b.ref=ji(_,g,k),b.return=_,b)}function d(_,g,k,b){return g===null||g.tag!==4||g.stateNode.containerInfo!==k.containerInfo||g.stateNode.implementation!==k.implementation?(g=lu(k,_.mode,b),g.return=_,g):(g=i(g,k.children||[]),g.return=_,g)}function m(_,g,k,b,D){return g===null||g.tag!==7?(g=ur(k,_.mode,b,D),g.return=_,g):(g=i(g,k),g.return=_,g)}function w(_,g,k){if(typeof g=="string"&&g!==""||typeof g=="number")return g=au(""+g,_.mode,k),g.return=_,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case fs:return k=Hs(g.type,g.key,g.props,null,_.mode,k),k.ref=ji(_,null,g),k.return=_,k;case Nr:return g=lu(g,_.mode,k),g.return=_,g;case wn:var b=g._init;return w(_,b(g._payload),k)}if(Vi(g)||Li(g))return g=ur(g,_.mode,k,null),g.return=_,g;Ss(_,g)}return null}function y(_,g,k,b){var D=g!==null?g.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return D!==null?null:l(_,g,""+k,b);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case fs:return k.key===D?c(_,g,k,b):null;case Nr:return k.key===D?d(_,g,k,b):null;case wn:return D=k._init,y(_,g,D(k._payload),b)}if(Vi(k)||Li(k))return D!==null?null:m(_,g,k,b,null);Ss(_,k)}return null}function C(_,g,k,b,D){if(typeof b=="string"&&b!==""||typeof b=="number")return _=_.get(k)||null,l(g,_,""+b,D);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case fs:return _=_.get(b.key===null?k:b.key)||null,c(g,_,b,D);case Nr:return _=_.get(b.key===null?k:b.key)||null,d(g,_,b,D);case wn:var j=b._init;return C(_,g,k,j(b._payload),D)}if(Vi(b)||Li(b))return _=_.get(k)||null,m(g,_,b,D,null);Ss(g,b)}return null}function x(_,g,k,b){for(var D=null,j=null,E=g,p=g=0,v=null;E!==null&&p<k.length;p++){E.index>p?(v=E,E=null):v=E.sibling;var S=y(_,E,k[p],b);if(S===null){E===null&&(E=v);break}e&&E&&S.alternate===null&&t(_,E),g=o(S,g,p),j===null?D=S:j.sibling=S,j=S,E=v}if(p===k.length)return n(_,E),ae&&Zn(_,p),D;if(E===null){for(;p<k.length;p++)E=w(_,k[p],b),E!==null&&(g=o(E,g,p),j===null?D=E:j.sibling=E,j=E);return ae&&Zn(_,p),D}for(E=r(_,E);p<k.length;p++)v=C(E,_,p,k[p],b),v!==null&&(e&&v.alternate!==null&&E.delete(v.key===null?p:v.key),g=o(v,g,p),j===null?D=v:j.sibling=v,j=v);return e&&E.forEach(function(T){return t(_,T)}),ae&&Zn(_,p),D}function O(_,g,k,b){var D=Li(k);if(typeof D!="function")throw Error(F(150));if(k=D.call(k),k==null)throw Error(F(151));for(var j=D=null,E=g,p=g=0,v=null,S=k.next();E!==null&&!S.done;p++,S=k.next()){E.index>p?(v=E,E=null):v=E.sibling;var T=y(_,E,S.value,b);if(T===null){E===null&&(E=v);break}e&&E&&T.alternate===null&&t(_,E),g=o(T,g,p),j===null?D=T:j.sibling=T,j=T,E=v}if(S.done)return n(_,E),ae&&Zn(_,p),D;if(E===null){for(;!S.done;p++,S=k.next())S=w(_,S.value,b),S!==null&&(g=o(S,g,p),j===null?D=S:j.sibling=S,j=S);return ae&&Zn(_,p),D}for(E=r(_,E);!S.done;p++,S=k.next())S=C(E,_,p,S.value,b),S!==null&&(e&&S.alternate!==null&&E.delete(S.key===null?p:S.key),g=o(S,g,p),j===null?D=S:j.sibling=S,j=S);return e&&E.forEach(function(P){return t(_,P)}),ae&&Zn(_,p),D}function N(_,g,k,b){if(typeof k=="object"&&k!==null&&k.type===br&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case fs:e:{for(var D=k.key,j=g;j!==null;){if(j.key===D){if(D=k.type,D===br){if(j.tag===7){n(_,j.sibling),g=i(j,k.props.children),g.return=_,_=g;break e}}else if(j.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===wn&&dp(D)===j.type){n(_,j.sibling),g=i(j,k.props),g.ref=ji(_,j,k),g.return=_,_=g;break e}n(_,j);break}else t(_,j);j=j.sibling}k.type===br?(g=ur(k.props.children,_.mode,b,k.key),g.return=_,_=g):(b=Hs(k.type,k.key,k.props,null,_.mode,b),b.ref=ji(_,g,k),b.return=_,_=b)}return a(_);case Nr:e:{for(j=k.key;g!==null;){if(g.key===j)if(g.tag===4&&g.stateNode.containerInfo===k.containerInfo&&g.stateNode.implementation===k.implementation){n(_,g.sibling),g=i(g,k.children||[]),g.return=_,_=g;break e}else{n(_,g);break}else t(_,g);g=g.sibling}g=lu(k,_.mode,b),g.return=_,_=g}return a(_);case wn:return j=k._init,N(_,g,j(k._payload),b)}if(Vi(k))return x(_,g,k,b);if(Li(k))return O(_,g,k,b);Ss(_,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,g!==null&&g.tag===6?(n(_,g.sibling),g=i(g,k),g.return=_,_=g):(n(_,g),g=au(k,_.mode,b),g.return=_,_=g),a(_)):n(_,g)}return N}var oi=Av(!0),Pv=Av(!1),fa=Wn(null),da=null,$r=null,Ef=null;function Sf(){Ef=$r=da=null}function If(e){var t=fa.current;oe(fa),e._currentValue=t}function rc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function qr(e,t){da=e,Ef=$r=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(We=!0),e.firstContext=null)}function ft(e){var t=e._currentValue;if(Ef!==e)if(e={context:e,memoizedValue:t,next:null},$r===null){if(da===null)throw Error(F(308));$r=e,da.dependencies={lanes:0,firstContext:e}}else $r=$r.next=e;return t}var rr=null;function kf(e){rr===null?rr=[e]:rr.push(e)}function xv(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,kf(t)):(n.next=i.next,i.next=n),t.interleaved=n,rn(e,r)}function rn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var _n=!1;function Tf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rv(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Zt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Nn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,rn(e,n)}return i=r.interleaved,i===null?(t.next=t,kf(r)):(t.next=i.next,i.next=t),r.interleaved=t,rn(e,n)}function Fs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,cf(e,n)}}function hp(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ha(e,t,n,r){var i=e.updateQueue;_n=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,d=c.next;c.next=null,a===null?o=d:a.next=d,a=c;var m=e.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==a&&(l===null?m.firstBaseUpdate=d:l.next=d,m.lastBaseUpdate=c))}if(o!==null){var w=i.baseState;a=0,m=d=c=null,l=o;do{var y=l.lane,C=l.eventTime;if((r&y)===y){m!==null&&(m=m.next={eventTime:C,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,O=l;switch(y=t,C=n,O.tag){case 1:if(x=O.payload,typeof x=="function"){w=x.call(C,w,y);break e}w=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=O.payload,y=typeof x=="function"?x.call(C,w,y):x,y==null)break e;w=de({},w,y);break e;case 2:_n=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else C={eventTime:C,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(d=m=C,c=w):m=m.next=C,a|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(m===null&&(c=w),i.baseState=c,i.firstBaseUpdate=d,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);pr|=a,e.lanes=a,e.memoizedState=w}}function pp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var Uo={},Nt=Wn(Uo),So=Wn(Uo),Io=Wn(Uo);function ir(e){if(e===Uo)throw Error(F(174));return e}function Cf(e,t){switch(ne(Io,t),ne(So,e),ne(Nt,Uo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Fu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Fu(t,e)}oe(Nt),ne(Nt,t)}function si(){oe(Nt),oe(So),oe(Io)}function Ov(e){ir(Io.current);var t=ir(Nt.current),n=Fu(t,e.type);t!==n&&(ne(So,e),ne(Nt,n))}function Af(e){So.current===e&&(oe(Nt),oe(So))}var ue=Wn(0);function pa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var tu=[];function Pf(){for(var e=0;e<tu.length;e++)tu[e]._workInProgressVersionPrimary=null;tu.length=0}var Us=cn.ReactCurrentDispatcher,nu=cn.ReactCurrentBatchConfig,hr=0,ce=null,ye=null,_e=null,ma=!1,Zi=!1,ko=0,gE=0;function xe(){throw Error(F(321))}function xf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!St(e[n],t[n]))return!1;return!0}function Rf(e,t,n,r,i,o){if(hr=o,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Us.current=e===null||e.memoizedState===null?_E:EE,e=n(r,i),Zi){o=0;do{if(Zi=!1,ko=0,25<=o)throw Error(F(301));o+=1,_e=ye=null,t.updateQueue=null,Us.current=SE,e=n(r,i)}while(Zi)}if(Us.current=ga,t=ye!==null&&ye.next!==null,hr=0,_e=ye=ce=null,ma=!1,t)throw Error(F(300));return e}function Of(){var e=ko!==0;return ko=0,e}function Ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?ce.memoizedState=_e=e:_e=_e.next=e,_e}function dt(){if(ye===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var t=_e===null?ce.memoizedState:_e.next;if(t!==null)_e=t,ye=e;else{if(e===null)throw Error(F(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},_e===null?ce.memoizedState=_e=e:_e=_e.next=e}return _e}function To(e,t){return typeof t=="function"?t(e):t}function ru(e){var t=dt(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var r=ye,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,c=null,d=o;do{var m=d.lane;if((hr&m)===m)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var w={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=w,a=r):c=c.next=w,ce.lanes|=m,pr|=m}d=d.next}while(d!==null&&d!==o);c===null?a=r:c.next=l,St(r,t.memoizedState)||(We=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ce.lanes|=o,pr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function iu(e){var t=dt(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);St(o,t.memoizedState)||(We=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Nv(){}function bv(e,t){var n=ce,r=dt(),i=t(),o=!St(r.memoizedState,i);if(o&&(r.memoizedState=i,We=!0),r=r.queue,Nf(Mv.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||_e!==null&&_e.memoizedState.tag&1){if(n.flags|=2048,Co(9,Dv.bind(null,n,r,i,t),void 0,null),Ee===null)throw Error(F(349));hr&30||Lv(n,t,i)}return i}function Lv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Dv(e,t,n,r){t.value=n,t.getSnapshot=r,Fv(t)&&Uv(e)}function Mv(e,t,n){return n(function(){Fv(t)&&Uv(e)})}function Fv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!St(e,n)}catch{return!0}}function Uv(e){var t=rn(e,1);t!==null&&_t(t,e,1,-1)}function mp(e){var t=Ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:To,lastRenderedState:e},t.queue=e,e=e.dispatch=wE.bind(null,ce,e),[t.memoizedState,e]}function Co(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function jv(){return dt().memoizedState}function js(e,t,n,r){var i=Ct();ce.flags|=e,i.memoizedState=Co(1|t,n,void 0,r===void 0?null:r)}function Va(e,t,n,r){var i=dt();r=r===void 0?null:r;var o=void 0;if(ye!==null){var a=ye.memoizedState;if(o=a.destroy,r!==null&&xf(r,a.deps)){i.memoizedState=Co(t,n,o,r);return}}ce.flags|=e,i.memoizedState=Co(1|t,n,o,r)}function gp(e,t){return js(8390656,8,e,t)}function Nf(e,t){return Va(2048,8,e,t)}function zv(e,t){return Va(4,2,e,t)}function $v(e,t){return Va(4,4,e,t)}function Bv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Hv(e,t,n){return n=n!=null?n.concat([e]):null,Va(4,4,Bv.bind(null,t,e),n)}function bf(){}function Vv(e,t){var n=dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Wv(e,t){var n=dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Gv(e,t,n){return hr&21?(St(n,t)||(n=Jg(),ce.lanes|=n,pr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,We=!0),e.memoizedState=n)}function vE(e,t){var n=Z;Z=n!==0&&4>n?n:4,e(!0);var r=nu.transition;nu.transition={};try{e(!1),t()}finally{Z=n,nu.transition=r}}function Kv(){return dt().memoizedState}function yE(e,t,n){var r=Ln(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Yv(e))Xv(t,n);else if(n=xv(e,t,n,r),n!==null){var i=Ue();_t(n,e,r,i),qv(n,t,r)}}function wE(e,t,n){var r=Ln(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Yv(e))Xv(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,St(l,a)){var c=t.interleaved;c===null?(i.next=i,kf(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=xv(e,t,i,r),n!==null&&(i=Ue(),_t(n,e,r,i),qv(n,t,r))}}function Yv(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function Xv(e,t){Zi=ma=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function qv(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,cf(e,n)}}var ga={readContext:ft,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useInsertionEffect:xe,useLayoutEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useMutableSource:xe,useSyncExternalStore:xe,useId:xe,unstable_isNewReconciler:!1},_E={readContext:ft,useCallback:function(e,t){return Ct().memoizedState=[e,t===void 0?null:t],e},useContext:ft,useEffect:gp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,js(4194308,4,Bv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return js(4194308,4,e,t)},useInsertionEffect:function(e,t){return js(4,2,e,t)},useMemo:function(e,t){var n=Ct();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ct();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=yE.bind(null,ce,e),[r.memoizedState,e]},useRef:function(e){var t=Ct();return e={current:e},t.memoizedState=e},useState:mp,useDebugValue:bf,useDeferredValue:function(e){return Ct().memoizedState=e},useTransition:function(){var e=mp(!1),t=e[0];return e=vE.bind(null,e[1]),Ct().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ce,i=Ct();if(ae){if(n===void 0)throw Error(F(407));n=n()}else{if(n=t(),Ee===null)throw Error(F(349));hr&30||Lv(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,gp(Mv.bind(null,r,o,e),[e]),r.flags|=2048,Co(9,Dv.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ct(),t=Ee.identifierPrefix;if(ae){var n=Yt,r=Kt;n=(r&~(1<<32-wt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ko++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=gE++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},EE={readContext:ft,useCallback:Vv,useContext:ft,useEffect:Nf,useImperativeHandle:Hv,useInsertionEffect:zv,useLayoutEffect:$v,useMemo:Wv,useReducer:ru,useRef:jv,useState:function(){return ru(To)},useDebugValue:bf,useDeferredValue:function(e){var t=dt();return Gv(t,ye.memoizedState,e)},useTransition:function(){var e=ru(To)[0],t=dt().memoizedState;return[e,t]},useMutableSource:Nv,useSyncExternalStore:bv,useId:Kv,unstable_isNewReconciler:!1},SE={readContext:ft,useCallback:Vv,useContext:ft,useEffect:Nf,useImperativeHandle:Hv,useInsertionEffect:zv,useLayoutEffect:$v,useMemo:Wv,useReducer:iu,useRef:jv,useState:function(){return iu(To)},useDebugValue:bf,useDeferredValue:function(e){var t=dt();return ye===null?t.memoizedState=e:Gv(t,ye.memoizedState,e)},useTransition:function(){var e=iu(To)[0],t=dt().memoizedState;return[e,t]},useMutableSource:Nv,useSyncExternalStore:bv,useId:Kv,unstable_isNewReconciler:!1};function mt(e,t){if(e&&e.defaultProps){t=de({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ic(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:de({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Wa={isMounted:function(e){return(e=e._reactInternals)?Sr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ue(),i=Ln(e),o=Zt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Nn(e,o,i),t!==null&&(_t(t,e,i,r),Fs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ue(),i=Ln(e),o=Zt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Nn(e,o,i),t!==null&&(_t(t,e,i,r),Fs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ue(),r=Ln(e),i=Zt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Nn(e,i,r),t!==null&&(_t(t,e,r,n),Fs(t,e,r))}};function vp(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!yo(n,r)||!yo(i,o):!0}function Jv(e,t,n){var r=!1,i=jn,o=t.contextType;return typeof o=="object"&&o!==null?o=ft(o):(i=Ke(t)?fr:Ne.current,r=t.contextTypes,o=(r=r!=null)?ri(e,i):jn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Wa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function yp(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Wa.enqueueReplaceState(t,t.state,null)}function oc(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Tf(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=ft(o):(o=Ke(t)?fr:Ne.current,i.context=ri(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ic(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Wa.enqueueReplaceState(i,i.state,null),ha(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ai(e,t){try{var n="",r=t;do n+=qw(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ou(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function sc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var IE=typeof WeakMap=="function"?WeakMap:Map;function Qv(e,t,n){n=Zt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ya||(ya=!0,gc=r),sc(e,t)},n}function Zv(e,t,n){n=Zt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){sc(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){sc(e,t),typeof r!="function"&&(bn===null?bn=new Set([this]):bn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function wp(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new IE;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=FE.bind(null,e,t,n),t.then(e,e))}function _p(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ep(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Zt(-1,1),t.tag=2,Nn(n,t,1))),n.lanes|=1),e)}var kE=cn.ReactCurrentOwner,We=!1;function Me(e,t,n,r){t.child=e===null?Pv(t,null,n,r):oi(t,e.child,n,r)}function Sp(e,t,n,r,i){n=n.render;var o=t.ref;return qr(t,i),r=Rf(e,t,n,r,o,i),n=Of(),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,on(e,t,i)):(ae&&n&&yf(t),t.flags|=1,Me(e,t,r,i),t.child)}function Ip(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!$f(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,ey(e,t,o,r,i)):(e=Hs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:yo,n(a,r)&&e.ref===t.ref)return on(e,t,i)}return t.flags|=1,e=Dn(o,r),e.ref=t.ref,e.return=t,t.child=e}function ey(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(yo(o,r)&&e.ref===t.ref)if(We=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(We=!0);else return t.lanes=e.lanes,on(e,t,i)}return ac(e,t,n,r,i)}function ty(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(Hr,qe),qe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ne(Hr,qe),qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ne(Hr,qe),qe|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ne(Hr,qe),qe|=r;return Me(e,t,i,n),t.child}function ny(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ac(e,t,n,r,i){var o=Ke(n)?fr:Ne.current;return o=ri(t,o),qr(t,i),n=Rf(e,t,n,r,o,i),r=Of(),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,on(e,t,i)):(ae&&r&&yf(t),t.flags|=1,Me(e,t,n,i),t.child)}function kp(e,t,n,r,i){if(Ke(n)){var o=!0;la(t)}else o=!1;if(qr(t,i),t.stateNode===null)zs(e,t),Jv(t,n,r),oc(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=ft(d):(d=Ke(n)?fr:Ne.current,d=ri(t,d));var m=n.getDerivedStateFromProps,w=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";w||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==d)&&yp(t,a,r,d),_n=!1;var y=t.memoizedState;a.state=y,ha(t,r,a,i),c=t.memoizedState,l!==r||y!==c||Ge.current||_n?(typeof m=="function"&&(ic(t,n,m,r),c=t.memoizedState),(l=_n||vp(t,n,l,r,y,c,d))?(w||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=d,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Rv(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:mt(t.type,l),a.props=d,w=t.pendingProps,y=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=ft(c):(c=Ke(n)?fr:Ne.current,c=ri(t,c));var C=n.getDerivedStateFromProps;(m=typeof C=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==w||y!==c)&&yp(t,a,r,c),_n=!1,y=t.memoizedState,a.state=y,ha(t,r,a,i);var x=t.memoizedState;l!==w||y!==x||Ge.current||_n?(typeof C=="function"&&(ic(t,n,C,r),x=t.memoizedState),(d=_n||vp(t,n,d,r,y,x,c)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,x,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,x,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),a.props=r,a.state=x,a.context=c,r=d):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),r=!1)}return lc(e,t,n,r,o,i)}function lc(e,t,n,r,i,o){ny(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&up(t,n,!1),on(e,t,o);r=t.stateNode,kE.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=oi(t,e.child,null,o),t.child=oi(t,null,l,o)):Me(e,t,l,o),t.memoizedState=r.state,i&&up(t,n,!0),t.child}function ry(e){var t=e.stateNode;t.pendingContext?lp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&lp(e,t.context,!1),Cf(e,t.containerInfo)}function Tp(e,t,n,r,i){return ii(),_f(i),t.flags|=256,Me(e,t,n,r),t.child}var uc={dehydrated:null,treeContext:null,retryLane:0};function cc(e){return{baseLanes:e,cachePool:null,transitions:null}}function iy(e,t,n){var r=t.pendingProps,i=ue.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ne(ue,i&1),e===null)return nc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Ya(a,r,0,null),e=ur(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=cc(n),t.memoizedState=uc,e):Lf(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return TE(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Dn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Dn(l,o):(o=ur(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?cc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=uc,r}return o=e.child,e=o.sibling,r=Dn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Lf(e,t){return t=Ya({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Is(e,t,n,r){return r!==null&&_f(r),oi(t,e.child,null,n),e=Lf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function TE(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=ou(Error(F(422))),Is(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ya({mode:"visible",children:r.children},i,0,null),o=ur(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&oi(t,e.child,null,a),t.child.memoizedState=cc(a),t.memoizedState=uc,o);if(!(t.mode&1))return Is(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(F(419)),r=ou(o,r,void 0),Is(e,t,a,r)}if(l=(a&e.childLanes)!==0,We||l){if(r=Ee,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,rn(e,i),_t(r,e,i,-1))}return zf(),r=ou(Error(F(421))),Is(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=UE.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Je=On(i.nextSibling),Qe=t,ae=!0,vt=null,e!==null&&(st[at++]=Kt,st[at++]=Yt,st[at++]=dr,Kt=e.id,Yt=e.overflow,dr=t),t=Lf(t,r.children),t.flags|=4096,t)}function Cp(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),rc(e.return,t,n)}function su(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function oy(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Me(e,t,r.children,n),r=ue.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cp(e,n,t);else if(e.tag===19)Cp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ne(ue,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&pa(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),su(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&pa(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}su(t,!0,n,null,o);break;case"together":su(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function zs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function on(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),pr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(F(153));if(t.child!==null){for(e=t.child,n=Dn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Dn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function CE(e,t,n){switch(t.tag){case 3:ry(t),ii();break;case 5:Ov(t);break;case 1:Ke(t.type)&&la(t);break;case 4:Cf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ne(fa,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ne(ue,ue.current&1),t.flags|=128,null):n&t.child.childLanes?iy(e,t,n):(ne(ue,ue.current&1),e=on(e,t,n),e!==null?e.sibling:null);ne(ue,ue.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return oy(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ne(ue,ue.current),r)break;return null;case 22:case 23:return t.lanes=0,ty(e,t,n)}return on(e,t,n)}var sy,fc,ay,ly;sy=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fc=function(){};ay=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,ir(Nt.current);var o=null;switch(n){case"input":i=bu(e,i),r=bu(e,r),o=[];break;case"select":i=de({},i,{value:void 0}),r=de({},r,{value:void 0}),o=[];break;case"textarea":i=Mu(e,i),r=Mu(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=sa)}Uu(n,r);var a;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(co.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var c=r[d];if(l=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(co.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&ie("scroll",e),o||l===c||(o=[])):(o=o||[]).push(d,c))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};ly=function(e,t,n,r){n!==r&&(t.flags|=4)};function zi(e,t){if(!ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function AE(e,t,n){var r=t.pendingProps;switch(wf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(t),null;case 1:return Ke(t.type)&&aa(),Re(t),null;case 3:return r=t.stateNode,si(),oe(Ge),oe(Ne),Pf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Es(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,vt!==null&&(wc(vt),vt=null))),fc(e,t),Re(t),null;case 5:Af(t);var i=ir(Io.current);if(n=t.type,e!==null&&t.stateNode!=null)ay(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(F(166));return Re(t),null}if(e=ir(Nt.current),Es(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Pt]=t,r[Eo]=o,e=(t.mode&1)!==0,n){case"dialog":ie("cancel",r),ie("close",r);break;case"iframe":case"object":case"embed":ie("load",r);break;case"video":case"audio":for(i=0;i<Gi.length;i++)ie(Gi[i],r);break;case"source":ie("error",r);break;case"img":case"image":case"link":ie("error",r),ie("load",r);break;case"details":ie("toggle",r);break;case"input":Dh(r,o),ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ie("invalid",r);break;case"textarea":Fh(r,o),ie("invalid",r)}Uu(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&_s(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&_s(r.textContent,l,e),i=["children",""+l]):co.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ie("scroll",r)}switch(n){case"input":ds(r),Mh(r,o,!0);break;case"textarea":ds(r),Uh(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=sa)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Mg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Pt]=t,e[Eo]=r,sy(e,t,!1,!1),t.stateNode=e;e:{switch(a=ju(n,r),n){case"dialog":ie("cancel",e),ie("close",e),i=r;break;case"iframe":case"object":case"embed":ie("load",e),i=r;break;case"video":case"audio":for(i=0;i<Gi.length;i++)ie(Gi[i],e);i=r;break;case"source":ie("error",e),i=r;break;case"img":case"image":case"link":ie("error",e),ie("load",e),i=r;break;case"details":ie("toggle",e),i=r;break;case"input":Dh(e,r),i=bu(e,r),ie("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=de({},r,{value:void 0}),ie("invalid",e);break;case"textarea":Fh(e,r),i=Mu(e,r),ie("invalid",e);break;default:i=r}Uu(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?jg(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Fg(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&fo(e,c):typeof c=="number"&&fo(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(co.hasOwnProperty(o)?c!=null&&o==="onScroll"&&ie("scroll",e):c!=null&&rf(e,o,c,a))}switch(n){case"input":ds(e),Mh(e,r,!1);break;case"textarea":ds(e),Uh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Un(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Gr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Gr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=sa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Re(t),null;case 6:if(e&&t.stateNode!=null)ly(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(F(166));if(n=ir(Io.current),ir(Nt.current),Es(t)){if(r=t.stateNode,n=t.memoizedProps,r[Pt]=t,(o=r.nodeValue!==n)&&(e=Qe,e!==null))switch(e.tag){case 3:_s(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&_s(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pt]=t,t.stateNode=r}return Re(t),null;case 13:if(oe(ue),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ae&&Je!==null&&t.mode&1&&!(t.flags&128))Cv(),ii(),t.flags|=98560,o=!1;else if(o=Es(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(F(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(F(317));o[Pt]=t}else ii(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Re(t),o=!1}else vt!==null&&(wc(vt),vt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ue.current&1?we===0&&(we=3):zf())),t.updateQueue!==null&&(t.flags|=4),Re(t),null);case 4:return si(),fc(e,t),e===null&&wo(t.stateNode.containerInfo),Re(t),null;case 10:return If(t.type._context),Re(t),null;case 17:return Ke(t.type)&&aa(),Re(t),null;case 19:if(oe(ue),o=t.memoizedState,o===null)return Re(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)zi(o,!1);else{if(we!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=pa(e),a!==null){for(t.flags|=128,zi(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ne(ue,ue.current&1|2),t.child}e=e.sibling}o.tail!==null&&ge()>li&&(t.flags|=128,r=!0,zi(o,!1),t.lanes=4194304)}else{if(!r)if(e=pa(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),zi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!ae)return Re(t),null}else 2*ge()-o.renderingStartTime>li&&n!==1073741824&&(t.flags|=128,r=!0,zi(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ge(),t.sibling=null,n=ue.current,ne(ue,r?n&1|2:n&1),t):(Re(t),null);case 22:case 23:return jf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?qe&1073741824&&(Re(t),t.subtreeFlags&6&&(t.flags|=8192)):Re(t),null;case 24:return null;case 25:return null}throw Error(F(156,t.tag))}function PE(e,t){switch(wf(t),t.tag){case 1:return Ke(t.type)&&aa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return si(),oe(Ge),oe(Ne),Pf(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Af(t),null;case 13:if(oe(ue),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(F(340));ii()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return oe(ue),null;case 4:return si(),null;case 10:return If(t.type._context),null;case 22:case 23:return jf(),null;case 24:return null;default:return null}}var ks=!1,Oe=!1,xE=typeof WeakSet=="function"?WeakSet:Set,$=null;function Br(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){he(e,t,r)}else n.current=null}function dc(e,t,n){try{n()}catch(r){he(e,t,r)}}var Ap=!1;function RE(e,t){if(Xu=ra,e=hv(),vf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,d=0,m=0,w=e,y=null;t:for(;;){for(var C;w!==n||i!==0&&w.nodeType!==3||(l=a+i),w!==o||r!==0&&w.nodeType!==3||(c=a+r),w.nodeType===3&&(a+=w.nodeValue.length),(C=w.firstChild)!==null;)y=w,w=C;for(;;){if(w===e)break t;if(y===n&&++d===i&&(l=a),y===o&&++m===r&&(c=a),(C=w.nextSibling)!==null)break;w=y,y=w.parentNode}w=C}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(qu={focusedElem:e,selectionRange:n},ra=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var O=x.memoizedProps,N=x.memoizedState,_=t.stateNode,g=_.getSnapshotBeforeUpdate(t.elementType===t.type?O:mt(t.type,O),N);_.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var k=t.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(b){he(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return x=Ap,Ap=!1,x}function eo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&dc(t,n,o)}i=i.next}while(i!==r)}}function Ga(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function hc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function uy(e){var t=e.alternate;t!==null&&(e.alternate=null,uy(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Pt],delete t[Eo],delete t[Zu],delete t[dE],delete t[hE])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function cy(e){return e.tag===5||e.tag===3||e.tag===4}function Pp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=sa));else if(r!==4&&(e=e.child,e!==null))for(pc(e,t,n),e=e.sibling;e!==null;)pc(e,t,n),e=e.sibling}function mc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(mc(e,t,n),e=e.sibling;e!==null;)mc(e,t,n),e=e.sibling}var Ie=null,gt=!1;function gn(e,t,n){for(n=n.child;n!==null;)fy(e,t,n),n=n.sibling}function fy(e,t,n){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount(Ua,n)}catch{}switch(n.tag){case 5:Oe||Br(n,t);case 6:var r=Ie,i=gt;Ie=null,gn(e,t,n),Ie=r,gt=i,Ie!==null&&(gt?(e=Ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(gt?(e=Ie,n=n.stateNode,e.nodeType===8?Zl(e.parentNode,n):e.nodeType===1&&Zl(e,n),go(e)):Zl(Ie,n.stateNode));break;case 4:r=Ie,i=gt,Ie=n.stateNode.containerInfo,gt=!0,gn(e,t,n),Ie=r,gt=i;break;case 0:case 11:case 14:case 15:if(!Oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&dc(n,t,a),i=i.next}while(i!==r)}gn(e,t,n);break;case 1:if(!Oe&&(Br(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){he(n,t,l)}gn(e,t,n);break;case 21:gn(e,t,n);break;case 22:n.mode&1?(Oe=(r=Oe)||n.memoizedState!==null,gn(e,t,n),Oe=r):gn(e,t,n);break;default:gn(e,t,n)}}function xp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new xE),t.forEach(function(r){var i=jE.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function pt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Ie=l.stateNode,gt=!1;break e;case 3:Ie=l.stateNode.containerInfo,gt=!0;break e;case 4:Ie=l.stateNode.containerInfo,gt=!0;break e}l=l.return}if(Ie===null)throw Error(F(160));fy(o,a,i),Ie=null,gt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(d){he(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)dy(t,e),t=t.sibling}function dy(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(pt(t,e),Tt(e),r&4){try{eo(3,e,e.return),Ga(3,e)}catch(O){he(e,e.return,O)}try{eo(5,e,e.return)}catch(O){he(e,e.return,O)}}break;case 1:pt(t,e),Tt(e),r&512&&n!==null&&Br(n,n.return);break;case 5:if(pt(t,e),Tt(e),r&512&&n!==null&&Br(n,n.return),e.flags&32){var i=e.stateNode;try{fo(i,"")}catch(O){he(e,e.return,O)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Lg(i,o),ju(l,a);var d=ju(l,o);for(a=0;a<c.length;a+=2){var m=c[a],w=c[a+1];m==="style"?jg(i,w):m==="dangerouslySetInnerHTML"?Fg(i,w):m==="children"?fo(i,w):rf(i,m,w,d)}switch(l){case"input":Lu(i,o);break;case"textarea":Dg(i,o);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var C=o.value;C!=null?Gr(i,!!o.multiple,C,!1):y!==!!o.multiple&&(o.defaultValue!=null?Gr(i,!!o.multiple,o.defaultValue,!0):Gr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Eo]=o}catch(O){he(e,e.return,O)}}break;case 6:if(pt(t,e),Tt(e),r&4){if(e.stateNode===null)throw Error(F(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(O){he(e,e.return,O)}}break;case 3:if(pt(t,e),Tt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{go(t.containerInfo)}catch(O){he(e,e.return,O)}break;case 4:pt(t,e),Tt(e);break;case 13:pt(t,e),Tt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ff=ge())),r&4&&xp(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(Oe=(d=Oe)||m,pt(t,e),Oe=d):pt(t,e),Tt(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!m&&e.mode&1)for($=e,m=e.child;m!==null;){for(w=$=m;$!==null;){switch(y=$,C=y.child,y.tag){case 0:case 11:case 14:case 15:eo(4,y,y.return);break;case 1:Br(y,y.return);var x=y.stateNode;if(typeof x.componentWillUnmount=="function"){r=y,n=y.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(O){he(r,n,O)}}break;case 5:Br(y,y.return);break;case 22:if(y.memoizedState!==null){Op(w);continue}}C!==null?(C.return=y,$=C):Op(w)}m=m.sibling}e:for(m=null,w=e;;){if(w.tag===5){if(m===null){m=w;try{i=w.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=w.stateNode,c=w.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Ug("display",a))}catch(O){he(e,e.return,O)}}}else if(w.tag===6){if(m===null)try{w.stateNode.nodeValue=d?"":w.memoizedProps}catch(O){he(e,e.return,O)}}else if((w.tag!==22&&w.tag!==23||w.memoizedState===null||w===e)&&w.child!==null){w.child.return=w,w=w.child;continue}if(w===e)break e;for(;w.sibling===null;){if(w.return===null||w.return===e)break e;m===w&&(m=null),w=w.return}m===w&&(m=null),w.sibling.return=w.return,w=w.sibling}}break;case 19:pt(t,e),Tt(e),r&4&&xp(e);break;case 21:break;default:pt(t,e),Tt(e)}}function Tt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(cy(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(fo(i,""),r.flags&=-33);var o=Pp(e);mc(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Pp(e);pc(e,l,a);break;default:throw Error(F(161))}}catch(c){he(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function OE(e,t,n){$=e,hy(e)}function hy(e,t,n){for(var r=(e.mode&1)!==0;$!==null;){var i=$,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||ks;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||Oe;l=ks;var d=Oe;if(ks=a,(Oe=c)&&!d)for($=i;$!==null;)a=$,c=a.child,a.tag===22&&a.memoizedState!==null?Np(i):c!==null?(c.return=a,$=c):Np(i);for(;o!==null;)$=o,hy(o),o=o.sibling;$=i,ks=l,Oe=d}Rp(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,$=o):Rp(e)}}function Rp(e){for(;$!==null;){var t=$;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Oe||Ga(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Oe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:mt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&pp(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}pp(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var w=m.dehydrated;w!==null&&go(w)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}Oe||t.flags&512&&hc(t)}catch(y){he(t,t.return,y)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function Op(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function Np(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ga(4,t)}catch(c){he(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){he(t,i,c)}}var o=t.return;try{hc(t)}catch(c){he(t,o,c)}break;case 5:var a=t.return;try{hc(t)}catch(c){he(t,a,c)}}}catch(c){he(t,t.return,c)}if(t===e){$=null;break}var l=t.sibling;if(l!==null){l.return=t.return,$=l;break}$=t.return}}var NE=Math.ceil,va=cn.ReactCurrentDispatcher,Df=cn.ReactCurrentOwner,ut=cn.ReactCurrentBatchConfig,q=0,Ee=null,ve=null,ke=0,qe=0,Hr=Wn(0),we=0,Ao=null,pr=0,Ka=0,Mf=0,to=null,Be=null,Ff=0,li=1/0,Vt=null,ya=!1,gc=null,bn=null,Ts=!1,An=null,wa=0,no=0,vc=null,$s=-1,Bs=0;function Ue(){return q&6?ge():$s!==-1?$s:$s=ge()}function Ln(e){return e.mode&1?q&2&&ke!==0?ke&-ke:mE.transition!==null?(Bs===0&&(Bs=Jg()),Bs):(e=Z,e!==0||(e=window.event,e=e===void 0?16:iv(e.type)),e):1}function _t(e,t,n,r){if(50<no)throw no=0,vc=null,Error(F(185));Do(e,n,r),(!(q&2)||e!==Ee)&&(e===Ee&&(!(q&2)&&(Ka|=n),we===4&&Sn(e,ke)),Ye(e,r),n===1&&q===0&&!(t.mode&1)&&(li=ge()+500,Ha&&Gn()))}function Ye(e,t){var n=e.callbackNode;m_(e,t);var r=na(e,e===Ee?ke:0);if(r===0)n!==null&&$h(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&$h(n),t===1)e.tag===0?pE(bp.bind(null,e)):Iv(bp.bind(null,e)),cE(function(){!(q&6)&&Gn()}),n=null;else{switch(Qg(r)){case 1:n=uf;break;case 4:n=Xg;break;case 16:n=ta;break;case 536870912:n=qg;break;default:n=ta}n=Ey(n,py.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function py(e,t){if($s=-1,Bs=0,q&6)throw Error(F(327));var n=e.callbackNode;if(Jr()&&e.callbackNode!==n)return null;var r=na(e,e===Ee?ke:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=_a(e,r);else{t=r;var i=q;q|=2;var o=gy();(Ee!==e||ke!==t)&&(Vt=null,li=ge()+500,lr(e,t));do try{DE();break}catch(l){my(e,l)}while(!0);Sf(),va.current=o,q=i,ve!==null?t=0:(Ee=null,ke=0,t=we)}if(t!==0){if(t===2&&(i=Vu(e),i!==0&&(r=i,t=yc(e,i))),t===1)throw n=Ao,lr(e,0),Sn(e,r),Ye(e,ge()),n;if(t===6)Sn(e,r);else{if(i=e.current.alternate,!(r&30)&&!bE(i)&&(t=_a(e,r),t===2&&(o=Vu(e),o!==0&&(r=o,t=yc(e,o))),t===1))throw n=Ao,lr(e,0),Sn(e,r),Ye(e,ge()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(F(345));case 2:er(e,Be,Vt);break;case 3:if(Sn(e,r),(r&130023424)===r&&(t=Ff+500-ge(),10<t)){if(na(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ue(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Qu(er.bind(null,e,Be,Vt),t);break}er(e,Be,Vt);break;case 4:if(Sn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-wt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*NE(r/1960))-r,10<r){e.timeoutHandle=Qu(er.bind(null,e,Be,Vt),r);break}er(e,Be,Vt);break;case 5:er(e,Be,Vt);break;default:throw Error(F(329))}}}return Ye(e,ge()),e.callbackNode===n?py.bind(null,e):null}function yc(e,t){var n=to;return e.current.memoizedState.isDehydrated&&(lr(e,t).flags|=256),e=_a(e,t),e!==2&&(t=Be,Be=n,t!==null&&wc(t)),e}function wc(e){Be===null?Be=e:Be.push.apply(Be,e)}function bE(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!St(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Sn(e,t){for(t&=~Mf,t&=~Ka,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-wt(t),r=1<<n;e[n]=-1,t&=~r}}function bp(e){if(q&6)throw Error(F(327));Jr();var t=na(e,0);if(!(t&1))return Ye(e,ge()),null;var n=_a(e,t);if(e.tag!==0&&n===2){var r=Vu(e);r!==0&&(t=r,n=yc(e,r))}if(n===1)throw n=Ao,lr(e,0),Sn(e,t),Ye(e,ge()),n;if(n===6)throw Error(F(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,er(e,Be,Vt),Ye(e,ge()),null}function Uf(e,t){var n=q;q|=1;try{return e(t)}finally{q=n,q===0&&(li=ge()+500,Ha&&Gn())}}function mr(e){An!==null&&An.tag===0&&!(q&6)&&Jr();var t=q;q|=1;var n=ut.transition,r=Z;try{if(ut.transition=null,Z=1,e)return e()}finally{Z=r,ut.transition=n,q=t,!(q&6)&&Gn()}}function jf(){qe=Hr.current,oe(Hr)}function lr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,uE(n)),ve!==null)for(n=ve.return;n!==null;){var r=n;switch(wf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&aa();break;case 3:si(),oe(Ge),oe(Ne),Pf();break;case 5:Af(r);break;case 4:si();break;case 13:oe(ue);break;case 19:oe(ue);break;case 10:If(r.type._context);break;case 22:case 23:jf()}n=n.return}if(Ee=e,ve=e=Dn(e.current,null),ke=qe=t,we=0,Ao=null,Mf=Ka=pr=0,Be=to=null,rr!==null){for(t=0;t<rr.length;t++)if(n=rr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}rr=null}return e}function my(e,t){do{var n=ve;try{if(Sf(),Us.current=ga,ma){for(var r=ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ma=!1}if(hr=0,_e=ye=ce=null,Zi=!1,ko=0,Df.current=null,n===null||n.return===null){we=1,Ao=t,ve=null;break}e:{var o=e,a=n.return,l=n,c=t;if(t=ke,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,m=l,w=m.tag;if(!(m.mode&1)&&(w===0||w===11||w===15)){var y=m.alternate;y?(m.updateQueue=y.updateQueue,m.memoizedState=y.memoizedState,m.lanes=y.lanes):(m.updateQueue=null,m.memoizedState=null)}var C=_p(a);if(C!==null){C.flags&=-257,Ep(C,a,l,o,t),C.mode&1&&wp(o,d,t),t=C,c=d;var x=t.updateQueue;if(x===null){var O=new Set;O.add(c),t.updateQueue=O}else x.add(c);break e}else{if(!(t&1)){wp(o,d,t),zf();break e}c=Error(F(426))}}else if(ae&&l.mode&1){var N=_p(a);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Ep(N,a,l,o,t),_f(ai(c,l));break e}}o=c=ai(c,l),we!==4&&(we=2),to===null?to=[o]:to.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var _=Qv(o,c,t);hp(o,_);break e;case 1:l=c;var g=o.type,k=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(bn===null||!bn.has(k)))){o.flags|=65536,t&=-t,o.lanes|=t;var b=Zv(o,l,t);hp(o,b);break e}}o=o.return}while(o!==null)}yy(n)}catch(D){t=D,ve===n&&n!==null&&(ve=n=n.return);continue}break}while(!0)}function gy(){var e=va.current;return va.current=ga,e===null?ga:e}function zf(){(we===0||we===3||we===2)&&(we=4),Ee===null||!(pr&268435455)&&!(Ka&268435455)||Sn(Ee,ke)}function _a(e,t){var n=q;q|=2;var r=gy();(Ee!==e||ke!==t)&&(Vt=null,lr(e,t));do try{LE();break}catch(i){my(e,i)}while(!0);if(Sf(),q=n,va.current=r,ve!==null)throw Error(F(261));return Ee=null,ke=0,we}function LE(){for(;ve!==null;)vy(ve)}function DE(){for(;ve!==null&&!s_();)vy(ve)}function vy(e){var t=_y(e.alternate,e,qe);e.memoizedProps=e.pendingProps,t===null?yy(e):ve=t,Df.current=null}function yy(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=PE(n,t),n!==null){n.flags&=32767,ve=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{we=6,ve=null;return}}else if(n=AE(n,t,qe),n!==null){ve=n;return}if(t=t.sibling,t!==null){ve=t;return}ve=t=e}while(t!==null);we===0&&(we=5)}function er(e,t,n){var r=Z,i=ut.transition;try{ut.transition=null,Z=1,ME(e,t,n,r)}finally{ut.transition=i,Z=r}return null}function ME(e,t,n,r){do Jr();while(An!==null);if(q&6)throw Error(F(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(F(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(g_(e,o),e===Ee&&(ve=Ee=null,ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ts||(Ts=!0,Ey(ta,function(){return Jr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=ut.transition,ut.transition=null;var a=Z;Z=1;var l=q;q|=4,Df.current=null,RE(e,n),dy(n,e),nE(qu),ra=!!Xu,qu=Xu=null,e.current=n,OE(n),a_(),q=l,Z=a,ut.transition=o}else e.current=n;if(Ts&&(Ts=!1,An=e,wa=i),o=e.pendingLanes,o===0&&(bn=null),c_(n.stateNode),Ye(e,ge()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ya)throw ya=!1,e=gc,gc=null,e;return wa&1&&e.tag!==0&&Jr(),o=e.pendingLanes,o&1?e===vc?no++:(no=0,vc=e):no=0,Gn(),null}function Jr(){if(An!==null){var e=Qg(wa),t=ut.transition,n=Z;try{if(ut.transition=null,Z=16>e?16:e,An===null)var r=!1;else{if(e=An,An=null,wa=0,q&6)throw Error(F(331));var i=q;for(q|=4,$=e.current;$!==null;){var o=$,a=o.child;if($.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for($=d;$!==null;){var m=$;switch(m.tag){case 0:case 11:case 15:eo(8,m,o)}var w=m.child;if(w!==null)w.return=m,$=w;else for(;$!==null;){m=$;var y=m.sibling,C=m.return;if(uy(m),m===d){$=null;break}if(y!==null){y.return=C,$=y;break}$=C}}}var x=o.alternate;if(x!==null){var O=x.child;if(O!==null){x.child=null;do{var N=O.sibling;O.sibling=null,O=N}while(O!==null)}}$=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,$=a;else e:for(;$!==null;){if(o=$,o.flags&2048)switch(o.tag){case 0:case 11:case 15:eo(9,o,o.return)}var _=o.sibling;if(_!==null){_.return=o.return,$=_;break e}$=o.return}}var g=e.current;for($=g;$!==null;){a=$;var k=a.child;if(a.subtreeFlags&2064&&k!==null)k.return=a,$=k;else e:for(a=g;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ga(9,l)}}catch(D){he(l,l.return,D)}if(l===a){$=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,$=b;break e}$=l.return}}if(q=i,Gn(),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot(Ua,e)}catch{}r=!0}return r}finally{Z=n,ut.transition=t}}return!1}function Lp(e,t,n){t=ai(n,t),t=Qv(e,t,1),e=Nn(e,t,1),t=Ue(),e!==null&&(Do(e,1,t),Ye(e,t))}function he(e,t,n){if(e.tag===3)Lp(e,e,n);else for(;t!==null;){if(t.tag===3){Lp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(bn===null||!bn.has(r))){e=ai(n,e),e=Zv(t,e,1),t=Nn(t,e,1),e=Ue(),t!==null&&(Do(t,1,e),Ye(t,e));break}}t=t.return}}function FE(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ue(),e.pingedLanes|=e.suspendedLanes&n,Ee===e&&(ke&n)===n&&(we===4||we===3&&(ke&130023424)===ke&&500>ge()-Ff?lr(e,0):Mf|=n),Ye(e,t)}function wy(e,t){t===0&&(e.mode&1?(t=ms,ms<<=1,!(ms&130023424)&&(ms=4194304)):t=1);var n=Ue();e=rn(e,t),e!==null&&(Do(e,t,n),Ye(e,n))}function UE(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),wy(e,n)}function jE(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(t),wy(e,n)}var _y;_y=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ge.current)We=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return We=!1,CE(e,t,n);We=!!(e.flags&131072)}else We=!1,ae&&t.flags&1048576&&kv(t,ca,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;zs(e,t),e=t.pendingProps;var i=ri(t,Ne.current);qr(t,n),i=Rf(null,t,r,e,i,n);var o=Of();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ke(r)?(o=!0,la(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Tf(t),i.updater=Wa,t.stateNode=i,i._reactInternals=t,oc(t,r,e,n),t=lc(null,t,r,!0,o,n)):(t.tag=0,ae&&o&&yf(t),Me(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(zs(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=$E(r),e=mt(r,e),i){case 0:t=ac(null,t,r,e,n);break e;case 1:t=kp(null,t,r,e,n);break e;case 11:t=Sp(null,t,r,e,n);break e;case 14:t=Ip(null,t,r,mt(r.type,e),n);break e}throw Error(F(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),ac(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),kp(e,t,r,i,n);case 3:e:{if(ry(t),e===null)throw Error(F(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Rv(e,t),ha(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=ai(Error(F(423)),t),t=Tp(e,t,r,n,i);break e}else if(r!==i){i=ai(Error(F(424)),t),t=Tp(e,t,r,n,i);break e}else for(Je=On(t.stateNode.containerInfo.firstChild),Qe=t,ae=!0,vt=null,n=Pv(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ii(),r===i){t=on(e,t,n);break e}Me(e,t,r,n)}t=t.child}return t;case 5:return Ov(t),e===null&&nc(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Ju(r,i)?a=null:o!==null&&Ju(r,o)&&(t.flags|=32),ny(e,t),Me(e,t,a,n),t.child;case 6:return e===null&&nc(t),null;case 13:return iy(e,t,n);case 4:return Cf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=oi(t,null,r,n):Me(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),Sp(e,t,r,i,n);case 7:return Me(e,t,t.pendingProps,n),t.child;case 8:return Me(e,t,t.pendingProps.children,n),t.child;case 12:return Me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,ne(fa,r._currentValue),r._currentValue=a,o!==null)if(St(o.value,a)){if(o.children===i.children&&!Ge.current){t=on(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=Zt(-1,n&-n),c.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?c.next=c:(c.next=m.next,m.next=c),d.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),rc(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(F(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),rc(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Me(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,qr(t,n),i=ft(i),r=r(i),t.flags|=1,Me(e,t,r,n),t.child;case 14:return r=t.type,i=mt(r,t.pendingProps),i=mt(r.type,i),Ip(e,t,r,i,n);case 15:return ey(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),zs(e,t),t.tag=1,Ke(r)?(e=!0,la(t)):e=!1,qr(t,n),Jv(t,r,i),oc(t,r,i,n),lc(null,t,r,!0,e,n);case 19:return oy(e,t,n);case 22:return ty(e,t,n)}throw Error(F(156,t.tag))};function Ey(e,t){return Yg(e,t)}function zE(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(e,t,n,r){return new zE(e,t,n,r)}function $f(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $E(e){if(typeof e=="function")return $f(e)?1:0;if(e!=null){if(e=e.$$typeof,e===sf)return 11;if(e===af)return 14}return 2}function Dn(e,t){var n=e.alternate;return n===null?(n=lt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Hs(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")$f(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case br:return ur(n.children,i,o,t);case of:a=8,i|=8;break;case xu:return e=lt(12,n,t,i|2),e.elementType=xu,e.lanes=o,e;case Ru:return e=lt(13,n,t,i),e.elementType=Ru,e.lanes=o,e;case Ou:return e=lt(19,n,t,i),e.elementType=Ou,e.lanes=o,e;case Og:return Ya(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xg:a=10;break e;case Rg:a=9;break e;case sf:a=11;break e;case af:a=14;break e;case wn:a=16,r=null;break e}throw Error(F(130,e==null?e:typeof e,""))}return t=lt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function ur(e,t,n,r){return e=lt(7,e,r,t),e.lanes=n,e}function Ya(e,t,n,r){return e=lt(22,e,r,t),e.elementType=Og,e.lanes=n,e.stateNode={isHidden:!1},e}function au(e,t,n){return e=lt(6,e,null,t),e.lanes=n,e}function lu(e,t,n){return t=lt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function BE(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bl(0),this.expirationTimes=Bl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Bf(e,t,n,r,i,o,a,l,c){return e=new BE(e,t,n,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=lt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tf(o),e}function HE(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Nr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Sy(e){if(!e)return jn;e=e._reactInternals;e:{if(Sr(e)!==e||e.tag!==1)throw Error(F(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(F(171))}if(e.tag===1){var n=e.type;if(Ke(n))return Sv(e,n,t)}return t}function Iy(e,t,n,r,i,o,a,l,c){return e=Bf(n,r,!0,e,i,o,a,l,c),e.context=Sy(null),n=e.current,r=Ue(),i=Ln(n),o=Zt(r,i),o.callback=t??null,Nn(n,o,i),e.current.lanes=i,Do(e,i,r),Ye(e,r),e}function Xa(e,t,n,r){var i=t.current,o=Ue(),a=Ln(i);return n=Sy(n),t.context===null?t.context=n:t.pendingContext=n,t=Zt(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Nn(i,t,a),e!==null&&(_t(e,i,a,o),Fs(e,i,a)),a}function Ea(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Dp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Hf(e,t){Dp(e,t),(e=e.alternate)&&Dp(e,t)}function VE(){return null}var ky=typeof reportError=="function"?reportError:function(e){console.error(e)};function Vf(e){this._internalRoot=e}qa.prototype.render=Vf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(F(409));Xa(e,t,null,null)};qa.prototype.unmount=Vf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;mr(function(){Xa(null,e,null,null)}),t[nn]=null}};function qa(e){this._internalRoot=e}qa.prototype.unstable_scheduleHydration=function(e){if(e){var t=tv();e={blockedOn:null,target:e,priority:t};for(var n=0;n<En.length&&t!==0&&t<En[n].priority;n++);En.splice(n,0,e),n===0&&rv(e)}};function Wf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ja(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Mp(){}function WE(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var d=Ea(a);o.call(d)}}var a=Iy(t,r,e,0,null,!1,!1,"",Mp);return e._reactRootContainer=a,e[nn]=a.current,wo(e.nodeType===8?e.parentNode:e),mr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var d=Ea(c);l.call(d)}}var c=Bf(e,0,!1,null,null,!1,!1,"",Mp);return e._reactRootContainer=c,e[nn]=c.current,wo(e.nodeType===8?e.parentNode:e),mr(function(){Xa(t,c,n,r)}),c}function Qa(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var c=Ea(a);l.call(c)}}Xa(t,a,e,i)}else a=WE(n,t,e,i,r);return Ea(a)}Zg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Wi(t.pendingLanes);n!==0&&(cf(t,n|1),Ye(t,ge()),!(q&6)&&(li=ge()+500,Gn()))}break;case 13:mr(function(){var r=rn(e,1);if(r!==null){var i=Ue();_t(r,e,1,i)}}),Hf(e,1)}};ff=function(e){if(e.tag===13){var t=rn(e,134217728);if(t!==null){var n=Ue();_t(t,e,134217728,n)}Hf(e,134217728)}};ev=function(e){if(e.tag===13){var t=Ln(e),n=rn(e,t);if(n!==null){var r=Ue();_t(n,e,t,r)}Hf(e,t)}};tv=function(){return Z};nv=function(e,t){var n=Z;try{return Z=e,t()}finally{Z=n}};$u=function(e,t,n){switch(t){case"input":if(Lu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ba(r);if(!i)throw Error(F(90));bg(r),Lu(r,i)}}}break;case"textarea":Dg(e,n);break;case"select":t=n.value,t!=null&&Gr(e,!!n.multiple,t,!1)}};Bg=Uf;Hg=mr;var GE={usingClientEntryPoint:!1,Events:[Fo,Fr,Ba,zg,$g,Uf]},$i={findFiberByHostInstance:nr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},KE={bundleType:$i.bundleType,version:$i.version,rendererPackageName:$i.rendererPackageName,rendererConfig:$i.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:cn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Gg(e),e===null?null:e.stateNode},findFiberByHostInstance:$i.findFiberByHostInstance||VE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cs.isDisabled&&Cs.supportsFiber)try{Ua=Cs.inject(KE),Ot=Cs}catch{}}tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=GE;tt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wf(t))throw Error(F(200));return HE(e,t,null,n)};tt.createRoot=function(e,t){if(!Wf(e))throw Error(F(299));var n=!1,r="",i=ky;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Bf(e,1,!1,null,null,n,!1,r,i),e[nn]=t.current,wo(e.nodeType===8?e.parentNode:e),new Vf(t)};tt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(F(188)):(e=Object.keys(e).join(","),Error(F(268,e)));return e=Gg(t),e=e===null?null:e.stateNode,e};tt.flushSync=function(e){return mr(e)};tt.hydrate=function(e,t,n){if(!Ja(t))throw Error(F(200));return Qa(null,e,t,!0,n)};tt.hydrateRoot=function(e,t,n){if(!Wf(e))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=ky;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Iy(t,null,e,1,n??null,i,!1,o,a),e[nn]=t.current,wo(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new qa(t)};tt.render=function(e,t,n){if(!Ja(t))throw Error(F(200));return Qa(null,e,t,!1,n)};tt.unmountComponentAtNode=function(e){if(!Ja(e))throw Error(F(40));return e._reactRootContainer?(mr(function(){Qa(null,null,e,!1,function(){e._reactRootContainer=null,e[nn]=null})}),!0):!1};tt.unstable_batchedUpdates=Uf;tt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ja(n))throw Error(F(200));if(e==null||e._reactInternals===void 0)throw Error(F(38));return Qa(e,t,n,!1,r)};tt.version="18.3.1-next-f1338f8080-20240426";function Ty(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ty)}catch(e){console.error(e)}}Ty(),Tg.exports=tt;var YE=Tg.exports,Cy,Fp=YE;Cy=Fp.createRoot,Fp.hydrateRoot;var Gf={};Object.defineProperty(Gf,"__esModule",{value:!0});Gf.parse=tS;Gf.serialize=nS;const XE=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,qE=/^[\u0021-\u003A\u003C-\u007E]*$/,JE=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,QE=/^[\u0020-\u003A\u003D-\u007E]*$/,ZE=Object.prototype.toString,eS=(()=>{const e=function(){};return e.prototype=Object.create(null),e})();function tS(e,t){const n=new eS,r=e.length;if(r<2)return n;const i=(t==null?void 0:t.decode)||rS;let o=0;do{const a=e.indexOf("=",o);if(a===-1)break;const l=e.indexOf(";",o),c=l===-1?r:l;if(a>c){o=e.lastIndexOf(";",a-1)+1;continue}const d=Up(e,o,a),m=jp(e,a,d),w=e.slice(d,m);if(n[w]===void 0){let y=Up(e,a+1,c),C=jp(e,c,y);const x=i(e.slice(y,C));n[w]=x}o=c+1}while(o<r);return n}function Up(e,t,n){do{const r=e.charCodeAt(t);if(r!==32&&r!==9)return t}while(++t<n);return n}function jp(e,t,n){for(;t>n;){const r=e.charCodeAt(--t);if(r!==32&&r!==9)return t+1}return n}function nS(e,t,n){const r=(n==null?void 0:n.encode)||encodeURIComponent;if(!XE.test(e))throw new TypeError(`argument name is invalid: ${e}`);const i=r(t);if(!qE.test(i))throw new TypeError(`argument val is invalid: ${t}`);let o=e+"="+i;if(!n)return o;if(n.maxAge!==void 0){if(!Number.isInteger(n.maxAge))throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);o+="; Max-Age="+n.maxAge}if(n.domain){if(!JE.test(n.domain))throw new TypeError(`option domain is invalid: ${n.domain}`);o+="; Domain="+n.domain}if(n.path){if(!QE.test(n.path))throw new TypeError(`option path is invalid: ${n.path}`);o+="; Path="+n.path}if(n.expires){if(!iS(n.expires)||!Number.isFinite(n.expires.valueOf()))throw new TypeError(`option expires is invalid: ${n.expires}`);o+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(o+="; HttpOnly"),n.secure&&(o+="; Secure"),n.partitioned&&(o+="; Partitioned"),n.priority)switch(typeof n.priority=="string"?n.priority.toLowerCase():void 0){case"low":o+="; Priority=Low";break;case"medium":o+="; Priority=Medium";break;case"high":o+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${n.priority}`)}if(n.sameSite)switch(typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite){case!0:case"strict":o+="; SameSite=Strict";break;case"lax":o+="; SameSite=Lax";break;case"none":o+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${n.sameSite}`)}return o}function rS(e){if(e.indexOf("%")===-1)return e;try{return decodeURIComponent(e)}catch{return e}}function iS(e){return ZE.call(e)==="[object Date]"}/**
 * react-router v7.0.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var zp="popstate";function oS(e={}){function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return _c("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Po(i)}return aS(t,n,null,e)}function fe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Kn(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function sS(){return Math.random().toString(36).substring(2,10)}function $p(e,t){return{usr:e.state,key:e.key,idx:t}}function _c(e,t,n=null,r){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?mi(t):t,state:n,key:t&&t.key||r||sS()}}function Po({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function mi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function aS(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l="POP",c=null,d=m();d==null&&(d=0,a.replaceState({...a.state,idx:d},""));function m(){return(a.state||{idx:null}).idx}function w(){l="POP";let N=m(),_=N==null?null:N-d;d=N,c&&c({action:l,location:O.location,delta:_})}function y(N,_){l="PUSH";let g=_c(O.location,N,_);d=m()+1;let k=$p(g,d),b=O.createHref(g);try{a.pushState(k,"",b)}catch(D){if(D instanceof DOMException&&D.name==="DataCloneError")throw D;i.location.assign(b)}o&&c&&c({action:l,location:O.location,delta:1})}function C(N,_){l="REPLACE";let g=_c(O.location,N,_);d=m();let k=$p(g,d),b=O.createHref(g);a.replaceState(k,"",b),o&&c&&c({action:l,location:O.location,delta:0})}function x(N){let _=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof N=="string"?N:Po(N);return g=g.replace(/ $/,"%20"),fe(_,`No window.location.(origin|href) available to create URL for href: ${g}`),new URL(g,_)}let O={get action(){return l},get location(){return e(i,a)},listen(N){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(zp,w),c=N,()=>{i.removeEventListener(zp,w),c=null}},createHref(N){return t(i,N)},createURL:x,encodeLocation(N){let _=x(N);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:y,replace:C,go(N){return a.go(N)}};return O}function Ay(e,t,n="/"){return lS(e,t,n,!1)}function lS(e,t,n,r){let i=typeof t=="string"?mi(t):t,o=zn(i.pathname||"/",n);if(o==null)return null;let a=Py(e);uS(a);let l=null;for(let c=0;l==null&&c<a.length;++c){let d=_S(o);l=yS(a[c],d,r)}return l}function Py(e,t=[],n=[],r=""){let i=(o,a,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};c.relativePath.startsWith("/")&&(fe(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length));let d=en([r,c.relativePath]),m=n.concat(c);o.children&&o.children.length>0&&(fe(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),Py(o.children,t,m,d)),!(o.path==null&&!o.index)&&t.push({path:d,score:gS(d,o.index),routesMeta:m})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let c of xy(o.path))i(o,a,c)}),t}function xy(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=xy(r.join("/")),l=[];return l.push(...a.map(c=>c===""?o:[o,c].join("/"))),i&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function uS(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:vS(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var cS=/^:[\w-]+$/,fS=3,dS=2,hS=1,pS=10,mS=-2,Bp=e=>e==="*";function gS(e,t){let n=e.split("/"),r=n.length;return n.some(Bp)&&(r+=mS),t&&(r+=dS),n.filter(i=>!Bp(i)).reduce((i,o)=>i+(cS.test(o)?fS:o===""?hS:pS),r)}function vS(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function yS(e,t,n=!1){let{routesMeta:r}=e,i={},o="/",a=[];for(let l=0;l<r.length;++l){let c=r[l],d=l===r.length-1,m=o==="/"?t:t.slice(o.length)||"/",w=Sa({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},m),y=c.route;if(!w&&d&&n&&!r[r.length-1].route.index&&(w=Sa({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},m)),!w)return null;Object.assign(i,w.params),a.push({params:i,pathname:en([o,w.pathname]),pathnameBase:kS(en([o,w.pathnameBase])),route:y}),w.pathnameBase!=="/"&&(o=en([o,w.pathnameBase]))}return a}function Sa(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=wS(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((d,{paramName:m,isOptional:w},y)=>{if(m==="*"){let x=l[y]||"";a=o.slice(0,o.length-x.length).replace(/(.)\/+$/,"$1")}const C=l[y];return w&&!C?d[m]=void 0:d[m]=(C||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:a,pattern:e}}function wS(e,t=!1,n=!0){Kn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function _S(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Kn(!1,`The URL path "${e}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function zn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function ES(e,t="/"){let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?mi(e):e;return{pathname:n?n.startsWith("/")?n:SS(n,t):t,search:TS(r),hash:CS(i)}}function SS(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function uu(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function IS(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ry(e){let t=IS(e);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function Oy(e,t,n,r=!1){let i;typeof e=="string"?i=mi(e):(i={...e},fe(!i.pathname||!i.pathname.includes("?"),uu("?","pathname","search",i)),fe(!i.pathname||!i.pathname.includes("#"),uu("#","pathname","hash",i)),fe(!i.search||!i.search.includes("#"),uu("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(a==null)l=n;else{let w=t.length-1;if(!r&&a.startsWith("..")){let y=a.split("/");for(;y[0]==="..";)y.shift(),w-=1;i.pathname=y.join("/")}l=w>=0?t[w]:"/"}let c=ES(i,l),d=a&&a!=="/"&&a.endsWith("/"),m=(o||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(d||m)&&(c.pathname+="/"),c}var en=e=>e.join("/").replace(/\/\/+/g,"/"),kS=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),TS=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,CS=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function AS(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var Ny=["POST","PUT","PATCH","DELETE"];new Set(Ny);var PS=["GET",...Ny];new Set(PS);var gi=L.createContext(null);gi.displayName="DataRouter";var Za=L.createContext(null);Za.displayName="DataRouterState";var by=L.createContext({isTransitioning:!1});by.displayName="ViewTransition";var xS=L.createContext(new Map);xS.displayName="Fetchers";var RS=L.createContext(null);RS.displayName="Await";var Mt=L.createContext(null);Mt.displayName="Navigation";var jo=L.createContext(null);jo.displayName="Location";var fn=L.createContext({outlet:null,matches:[],isDataRoute:!1});fn.displayName="Route";var Kf=L.createContext(null);Kf.displayName="RouteError";function OS(e,{relative:t}={}){fe(zo(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=L.useContext(Mt),{hash:i,pathname:o,search:a}=$o(e,{relative:t}),l=o;return n!=="/"&&(l=o==="/"?n:en([n,o])),r.createHref({pathname:l,search:a,hash:i})}function zo(){return L.useContext(jo)!=null}function Ir(){return fe(zo(),"useLocation() may be used only in the context of a <Router> component."),L.useContext(jo).location}var Ly="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Dy(e){L.useContext(Mt).static||L.useLayoutEffect(e)}function NS(){let{isDataRoute:e}=L.useContext(fn);return e?WS():bS()}function bS(){fe(zo(),"useNavigate() may be used only in the context of a <Router> component.");let e=L.useContext(gi),{basename:t,navigator:n}=L.useContext(Mt),{matches:r}=L.useContext(fn),{pathname:i}=Ir(),o=JSON.stringify(Ry(r)),a=L.useRef(!1);return Dy(()=>{a.current=!0}),L.useCallback((c,d={})=>{if(Kn(a.current,Ly),!a.current)return;if(typeof c=="number"){n.go(c);return}let m=Oy(c,JSON.parse(o),i,d.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:en([t,m.pathname])),(d.replace?n.replace:n.push)(m,d.state,d)},[t,n,o,i,e])}L.createContext(null);function $o(e,{relative:t}={}){let{matches:n}=L.useContext(fn),{pathname:r}=Ir(),i=JSON.stringify(Ry(n));return L.useMemo(()=>Oy(e,JSON.parse(i),r,t==="path"),[e,i,r,t])}function LS(e,t){return My(e,t)}function My(e,t,n,r){var O;fe(zo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=L.useContext(Mt),{matches:o}=L.useContext(fn),a=o[o.length-1],l=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let d=Ir(),m;if(t){let N=typeof t=="string"?mi(t):t;fe(c==="/"||((O=N.pathname)==null?void 0:O.startsWith(c)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${N.pathname}" was given in the \`location\` prop.`),m=N}else m=d;let w=m.pathname||"/",y=w;if(c!=="/"){let N=c.replace(/^\//,"").split("/");y="/"+w.replace(/^\//,"").split("/").slice(N.length).join("/")}let C=Ay(e,{pathname:y}),x=jS(C&&C.map(N=>Object.assign({},N,{params:Object.assign({},l,N.params),pathname:en([c,i.encodeLocation?i.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?c:en([c,i.encodeLocation?i.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),o,n,r);return t&&x?L.createElement(jo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...m},navigationType:"POP"}},x):x}function DS(){let e=VS(),t=AS(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},t),n?L.createElement("pre",{style:i},n):null,null)}var MS=L.createElement(DS,null),FS=class extends L.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?L.createElement(fn.Provider,{value:this.props.routeContext},L.createElement(Kf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function US({routeContext:e,match:t,children:n}){let r=L.useContext(gi);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),L.createElement(fn.Provider,{value:e},n)}function jS(e,t=[],n=null,r=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,o=n==null?void 0:n.errors;if(o!=null){let c=i.findIndex(d=>d.route.id&&(o==null?void 0:o[d.route.id])!==void 0);fe(c>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),i=i.slice(0,Math.min(i.length,c+1))}let a=!1,l=-1;if(n)for(let c=0;c<i.length;c++){let d=i[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(l=c),d.route.id){let{loaderData:m,errors:w}=n,y=d.route.loader&&!m.hasOwnProperty(d.route.id)&&(!w||w[d.route.id]===void 0);if(d.route.lazy||y){a=!0,l>=0?i=i.slice(0,l+1):i=[i[0]];break}}}return i.reduceRight((c,d,m)=>{let w,y=!1,C=null,x=null;n&&(w=o&&d.route.id?o[d.route.id]:void 0,C=d.route.errorElement||MS,a&&(l<0&&m===0?(GS("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,x=null):l===m&&(y=!0,x=d.route.hydrateFallbackElement||null)));let O=t.concat(i.slice(0,m+1)),N=()=>{let _;return w?_=C:y?_=x:d.route.Component?_=L.createElement(d.route.Component,null):d.route.element?_=d.route.element:_=c,L.createElement(US,{match:d,routeContext:{outlet:c,matches:O,isDataRoute:n!=null},children:_})};return n&&(d.route.ErrorBoundary||d.route.errorElement||m===0)?L.createElement(FS,{location:n.location,revalidation:n.revalidation,component:C,error:w,children:N(),routeContext:{outlet:null,matches:O,isDataRoute:!0}}):N()},null)}function Yf(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function zS(e){let t=L.useContext(gi);return fe(t,Yf(e)),t}function $S(e){let t=L.useContext(Za);return fe(t,Yf(e)),t}function BS(e){let t=L.useContext(fn);return fe(t,Yf(e)),t}function Xf(e){let t=BS(e),n=t.matches[t.matches.length-1];return fe(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function HS(){return Xf("useRouteId")}function VS(){var r;let e=L.useContext(Kf),t=$S("useRouteError"),n=Xf("useRouteError");return e!==void 0?e:(r=t.errors)==null?void 0:r[n]}function WS(){let{router:e}=zS("useNavigate"),t=Xf("useNavigate"),n=L.useRef(!1);return Dy(()=>{n.current=!0}),L.useCallback(async(i,o={})=>{Kn(n.current,Ly),n.current&&(typeof i=="number"?e.navigate(i):await e.navigate(i,{fromRouteId:t,...o}))},[e,t])}var Hp={};function GS(e,t,n){Hp[e]||(Hp[e]=!0,Kn(!1,n))}L.memo(KS);function KS({routes:e,future:t,state:n}){return My(e,void 0,n,t)}function Ec(e){fe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function YS({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:i,static:o=!1}){fe(!zo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let a=e.replace(/^\/*/,"/"),l=L.useMemo(()=>({basename:a,navigator:i,static:o,future:{}}),[a,i,o]);typeof n=="string"&&(n=mi(n));let{pathname:c="/",search:d="",hash:m="",state:w=null,key:y="default"}=n,C=L.useMemo(()=>{let x=zn(c,a);return x==null?null:{location:{pathname:x,search:d,hash:m,state:w,key:y},navigationType:r}},[a,c,d,m,w,y,r]);return Kn(C!=null,`<Router basename="${a}"> is not able to match the URL "${c}${d}${m}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:L.createElement(Mt.Provider,{value:l},L.createElement(jo.Provider,{children:t,value:C}))}function XS({children:e,location:t}){return LS(Sc(e),t)}function Sc(e,t=[]){let n=[];return L.Children.forEach(e,(r,i)=>{if(!L.isValidElement(r))return;let o=[...t,i];if(r.type===L.Fragment){n.push.apply(n,Sc(r.props.children,o));return}fe(r.type===Ec,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),fe(!r.props.index||!r.props.children,"An index route cannot have child routes.");let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Sc(r.props.children,o)),n.push(a)}),n}var Vs="get",Ws="application/x-www-form-urlencoded";function el(e){return e!=null&&typeof e.tagName=="string"}function qS(e){return el(e)&&e.tagName.toLowerCase()==="button"}function JS(e){return el(e)&&e.tagName.toLowerCase()==="form"}function QS(e){return el(e)&&e.tagName.toLowerCase()==="input"}function ZS(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function e2(e,t){return e.button===0&&(!t||t==="_self")&&!ZS(e)}var As=null;function t2(){if(As===null)try{new FormData(document.createElement("form"),0),As=!1}catch{As=!0}return As}var n2=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function cu(e){return e!=null&&!n2.has(e)?(Kn(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ws}"`),null):e}function r2(e,t){let n,r,i,o,a;if(JS(e)){let l=e.getAttribute("action");r=l?zn(l,t):null,n=e.getAttribute("method")||Vs,i=cu(e.getAttribute("enctype"))||Ws,o=new FormData(e)}else if(qS(e)||QS(e)&&(e.type==="submit"||e.type==="image")){let l=e.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=e.getAttribute("formaction")||l.getAttribute("action");if(r=c?zn(c,t):null,n=e.getAttribute("formmethod")||l.getAttribute("method")||Vs,i=cu(e.getAttribute("formenctype"))||cu(l.getAttribute("enctype"))||Ws,o=new FormData(l,e),!t2()){let{name:d,type:m,value:w}=e;if(m==="image"){let y=d?`${d}.`:"";o.append(`${y}x`,"0"),o.append(`${y}y`,"0")}else d&&o.append(d,w)}}else{if(el(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Vs,r=null,i=Ws,a=e}return o&&i==="text/plain"&&(a=o,o=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:o,body:a}}function qf(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}async function i2(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function o2(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function s2(e,t,n){let r=await Promise.all(e.map(async i=>{let o=t.routes[i.route.id];if(o){let a=await i2(o,n);return a.links?a.links():[]}return[]}));return c2(r.flat(1).filter(o2).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function Vp(e,t,n,r,i,o){let a=(c,d)=>n[d]?c.route.id!==n[d].route.id:!0,l=(c,d)=>{var m;return n[d].pathname!==c.pathname||((m=n[d].route.path)==null?void 0:m.endsWith("*"))&&n[d].params["*"]!==c.params["*"]};return o==="assets"?t.filter((c,d)=>a(c,d)||l(c,d)):o==="data"?t.filter((c,d)=>{var w;let m=r.routes[c.route.id];if(!m||!m.hasLoader)return!1;if(a(c,d)||l(c,d))return!0;if(c.route.shouldRevalidate){let y=c.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((w=n[0])==null?void 0:w.params)||{},nextUrl:new URL(e,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function a2(e,t){return l2(e.map(n=>{let r=t.routes[n.route.id];if(!r)return[];let i=[r.module];return r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function l2(e){return[...new Set(e)]}function u2(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function c2(e,t){let n=new Set;return new Set(t),e.reduce((r,i)=>{let o=JSON.stringify(u2(i));return n.has(o)||(n.add(o),r.push({key:o,link:i})),r},[])}function f2(e){let t=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return t.pathname==="/"?t.pathname="_root.data":t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function d2(){let e=L.useContext(gi);return qf(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function h2(){let e=L.useContext(Za);return qf(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Jf=L.createContext(void 0);Jf.displayName="FrameworkContext";function Fy(){let e=L.useContext(Jf);return qf(e,"You must render this element inside a <HydratedRouter> element"),e}function p2(e,t){let n=L.useContext(Jf),[r,i]=L.useState(!1),[o,a]=L.useState(!1),{onFocus:l,onBlur:c,onMouseEnter:d,onMouseLeave:m,onTouchStart:w}=t,y=L.useRef(null);L.useEffect(()=>{if(e==="render"&&a(!0),e==="viewport"){let O=_=>{_.forEach(g=>{a(g.isIntersecting)})},N=new IntersectionObserver(O,{threshold:.5});return y.current&&N.observe(y.current),()=>{N.disconnect()}}},[e]),L.useEffect(()=>{if(r){let O=setTimeout(()=>{a(!0)},100);return()=>{clearTimeout(O)}}},[r]);let C=()=>{i(!0)},x=()=>{i(!1),a(!1)};return n?e!=="intent"?[o,y,{}]:[o,y,{onFocus:Bi(l,C),onBlur:Bi(c,x),onMouseEnter:Bi(d,C),onMouseLeave:Bi(m,x),onTouchStart:Bi(w,C)}]:[!1,y,{}]}function Bi(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function m2({page:e,...t}){let{router:n}=d2(),r=L.useMemo(()=>Ay(n.routes,e,n.basename),[n.routes,e,n.basename]);return r?L.createElement(v2,{page:e,matches:r,...t}):(console.warn(`Tried to prefetch ${e} but no routes matched.`),null)}function g2(e){let{manifest:t,routeModules:n}=Fy(),[r,i]=L.useState([]);return L.useEffect(()=>{let o=!1;return s2(e,t,n).then(a=>{o||i(a)}),()=>{o=!0}},[e,t,n]),r}function v2({page:e,matches:t,...n}){let r=Ir(),{manifest:i,routeModules:o}=Fy(),{loaderData:a,matches:l}=h2(),c=L.useMemo(()=>Vp(e,t,l,i,r,"data"),[e,t,l,i,r]),d=L.useMemo(()=>Vp(e,t,l,i,r,"assets"),[e,t,l,i,r]),m=L.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let C=new Set,x=!1;if(t.forEach(N=>{var g;let _=i.routes[N.route.id];!_||!_.hasLoader||(!c.some(k=>k.route.id===N.route.id)&&N.route.id in a&&((g=o[N.route.id])!=null&&g.shouldRevalidate)||_.hasClientLoader?x=!0:C.add(N.route.id))}),C.size===0)return[];let O=f2(e);return x&&C.size>0&&O.searchParams.set("_routes",t.filter(N=>C.has(N.route.id)).map(N=>N.route.id).join(",")),[O.pathname+O.search]},[a,r,i,c,t,e,o]),w=L.useMemo(()=>a2(d,i),[d,i]),y=g2(d);return L.createElement(L.Fragment,null,m.map(C=>L.createElement("link",{key:C,rel:"prefetch",as:"fetch",href:C,...n})),w.map(C=>L.createElement("link",{key:C,rel:"modulepreload",href:C,...n})),y.map(({key:C,link:x})=>L.createElement("link",{key:C,...x})))}function y2(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var Uy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Uy&&(window.__reactRouterVersion="7.0.1")}catch{}function w2({basename:e,children:t,window:n}){let r=L.useRef();r.current==null&&(r.current=oS({window:n,v5Compat:!0}));let i=r.current,[o,a]=L.useState({action:i.action,location:i.location}),l=L.useCallback(c=>{L.startTransition(()=>a(c))},[a]);return L.useLayoutEffect(()=>i.listen(l),[i,l]),L.createElement(YS,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:i})}var jy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ro=L.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:i,reloadDocument:o,replace:a,state:l,target:c,to:d,preventScrollReset:m,viewTransition:w,...y},C){let{basename:x}=L.useContext(Mt),O=typeof d=="string"&&jy.test(d),N,_=!1;if(typeof d=="string"&&O&&(N=d,Uy))try{let v=new URL(window.location.href),S=d.startsWith("//")?new URL(v.protocol+d):new URL(d),T=zn(S.pathname,x);S.origin===v.origin&&T!=null?d=T+S.search+S.hash:_=!0}catch{Kn(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let g=OS(d,{relative:i}),[k,b,D]=p2(r,y),j=I2(d,{replace:a,state:l,target:c,preventScrollReset:m,relative:i,viewTransition:w});function E(v){t&&t(v),v.defaultPrevented||j(v)}let p=L.createElement("a",{...y,...D,href:N||g,onClick:_||o?t:E,ref:y2(C,b),target:c,"data-discover":!O&&n==="render"?"true":void 0});return k&&!O?L.createElement(L.Fragment,null,p,L.createElement(m2,{page:g})):p});ro.displayName="Link";var _2=L.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:i=!1,style:o,to:a,viewTransition:l,children:c,...d},m){let w=$o(a,{relative:d.relative}),y=Ir(),C=L.useContext(Za),{navigator:x,basename:O}=L.useContext(Mt),N=C!=null&&P2(w)&&l===!0,_=x.encodeLocation?x.encodeLocation(w).pathname:w.pathname,g=y.pathname,k=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;n||(g=g.toLowerCase(),k=k?k.toLowerCase():null,_=_.toLowerCase()),k&&O&&(k=zn(k,O)||k);const b=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let D=g===_||!i&&g.startsWith(_)&&g.charAt(b)==="/",j=k!=null&&(k===_||!i&&k.startsWith(_)&&k.charAt(_.length)==="/"),E={isActive:D,isPending:j,isTransitioning:N},p=D?t:void 0,v;typeof r=="function"?v=r(E):v=[r,D?"active":null,j?"pending":null,N?"transitioning":null].filter(Boolean).join(" ");let S=typeof o=="function"?o(E):o;return L.createElement(ro,{...d,"aria-current":p,className:v,ref:m,style:S,to:a,viewTransition:l},typeof c=="function"?c(E):c)});_2.displayName="NavLink";var E2=L.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:o,method:a=Vs,action:l,onSubmit:c,relative:d,preventScrollReset:m,viewTransition:w,...y},C)=>{let x=C2(),O=A2(l,{relative:d}),N=a.toLowerCase()==="get"?"get":"post",_=typeof l=="string"&&jy.test(l),g=k=>{if(c&&c(k),k.defaultPrevented)return;k.preventDefault();let b=k.nativeEvent.submitter,D=(b==null?void 0:b.getAttribute("formmethod"))||a;x(b||k.currentTarget,{fetcherKey:t,method:D,navigate:n,replace:i,state:o,relative:d,preventScrollReset:m,viewTransition:w})};return L.createElement("form",{ref:C,method:N,action:O,onSubmit:r?c:g,...y,"data-discover":!_&&e==="render"?"true":void 0})});E2.displayName="Form";function S2(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function zy(e){let t=L.useContext(gi);return fe(t,S2(e)),t}function I2(e,{target:t,replace:n,state:r,preventScrollReset:i,relative:o,viewTransition:a}={}){let l=NS(),c=Ir(),d=$o(e,{relative:o});return L.useCallback(m=>{if(e2(m,t)){m.preventDefault();let w=n!==void 0?n:Po(c)===Po(d);l(e,{replace:w,state:r,preventScrollReset:i,relative:o,viewTransition:a})}},[c,l,d,n,r,t,e,i,o,a])}var k2=0,T2=()=>`__${String(++k2)}__`;function C2(){let{router:e}=zy("useSubmit"),{basename:t}=L.useContext(Mt),n=HS();return L.useCallback(async(r,i={})=>{let{action:o,method:a,encType:l,formData:c,body:d}=r2(r,t);if(i.navigate===!1){let m=i.fetcherKey||T2();await e.fetch(m,n,i.action||o,{preventScrollReset:i.preventScrollReset,formData:c,body:d,formMethod:i.method||a,formEncType:i.encType||l,flushSync:i.flushSync})}else await e.navigate(i.action||o,{preventScrollReset:i.preventScrollReset,formData:c,body:d,formMethod:i.method||a,formEncType:i.encType||l,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[e,t,n])}function A2(e,{relative:t}={}){let{basename:n}=L.useContext(Mt),r=L.useContext(fn);fe(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),o={...$o(e||".",{relative:t})},a=Ir();if(e==null){o.search=a.search;let l=new URLSearchParams(o.search),c=l.getAll("index");if(c.some(m=>m==="")){l.delete("index"),c.filter(w=>w).forEach(w=>l.append("index",w));let m=l.toString();o.search=m?`?${m}`:""}}return(!e||e===".")&&i.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(o.pathname=o.pathname==="/"?n:en([n,o.pathname])),Po(o)}function P2(e,t={}){let n=L.useContext(by);fe(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=zy("useViewTransitionState"),i=$o(e,{relative:t.relative});if(!n.isTransitioning)return!1;let o=zn(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=zn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Sa(i.pathname,a)!=null||Sa(i.pathname,o)!=null}new TextEncoder;/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function x2(e,t,n){return(t=O2(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Wp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Wp(Object(n),!0).forEach(function(r){x2(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Wp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function R2(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function O2(e){var t=R2(e,"string");return typeof t=="symbol"?t:t+""}const Gp=()=>{};let Qf={},$y={},By=null,Hy={mark:Gp,measure:Gp};try{typeof window<"u"&&(Qf=window),typeof document<"u"&&($y=document),typeof MutationObserver<"u"&&(By=MutationObserver),typeof performance<"u"&&(Hy=performance)}catch{}const{userAgent:Kp=""}=Qf.navigator||{},$n=Qf,se=$y,Yp=By,Ps=Hy;$n.document;const dn=!!se.documentElement&&!!se.head&&typeof se.addEventListener=="function"&&typeof se.createElement=="function",Vy=~Kp.indexOf("MSIE")||~Kp.indexOf("Trident/");var N2=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,b2=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Wy={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},L2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Gy=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],be="classic",tl="duotone",D2="sharp",M2="sharp-duotone",Ky=[be,tl,D2,M2],F2={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},U2={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},j2=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),z2={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},$2=["fak","fa-kit","fakd","fa-kit-duotone"],Xp={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},B2=["kit"],H2={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},V2=["fak","fakd"],W2={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},qp={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},xs={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},G2=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],K2=["fak","fa-kit","fakd","fa-kit-duotone"],Y2={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},X2={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},q2={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Ic={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},J2=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],kc=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...G2,...J2],Q2=["solid","regular","light","thin","duotone","brands"],Yy=[1,2,3,4,5,6,7,8,9,10],Z2=Yy.concat([11,12,13,14,15,16,17,18,19,20]),eI=[...Object.keys(q2),...Q2,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",xs.GROUP,xs.SWAP_OPACITY,xs.PRIMARY,xs.SECONDARY].concat(Yy.map(e=>"".concat(e,"x"))).concat(Z2.map(e=>"w-".concat(e))),tI={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const sn="___FONT_AWESOME___",Tc=16,Xy="fa",qy="svg-inline--fa",gr="data-fa-i2svg",Cc="data-fa-pseudo-element",nI="data-fa-pseudo-element-pending",Zf="data-prefix",ed="data-icon",Jp="fontawesome-i2svg",rI="async",iI=["HTML","HEAD","STYLE","SCRIPT"],Jy=(()=>{try{return!0}catch{return!1}})();function Bo(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[be]}})}const Qy=M({},Wy);Qy[be]=M(M(M(M({},{"fa-duotone":"duotone"}),Wy[be]),Xp.kit),Xp["kit-duotone"]);const oI=Bo(Qy),Ac=M({},z2);Ac[be]=M(M(M(M({},{duotone:"fad"}),Ac[be]),qp.kit),qp["kit-duotone"]);const Qp=Bo(Ac),Pc=M({},Ic);Pc[be]=M(M({},Pc[be]),W2.kit);const td=Bo(Pc),xc=M({},X2);xc[be]=M(M({},xc[be]),H2.kit);Bo(xc);const sI=N2,Zy="fa-layers-text",aI=b2,lI=M({},F2);Bo(lI);const uI=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],fu=L2,cI=[...B2,...eI],io=$n.FontAwesomeConfig||{};function fI(e){var t=se.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function dI(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}se&&typeof se.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const i=dI(fI(n));i!=null&&(io[r]=i)});const e0={styleDefault:"solid",familyDefault:be,cssPrefix:Xy,replacementClass:qy,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};io.familyPrefix&&(io.cssPrefix=io.familyPrefix);const ui=M(M({},e0),io);ui.autoReplaceSvg||(ui.observeMutations=!1);const B={};Object.keys(e0).forEach(e=>{Object.defineProperty(B,e,{enumerable:!0,set:function(t){ui[e]=t,oo.forEach(n=>n(B))},get:function(){return ui[e]}})});Object.defineProperty(B,"familyPrefix",{enumerable:!0,set:function(e){ui.cssPrefix=e,oo.forEach(t=>t(B))},get:function(){return ui.cssPrefix}});$n.FontAwesomeConfig=B;const oo=[];function hI(e){return oo.push(e),()=>{oo.splice(oo.indexOf(e),1)}}const vn=Tc,xt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function pI(e){if(!e||!dn)return;const t=se.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=se.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const o=n[i],a=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=o)}return se.head.insertBefore(t,r),e}const mI="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function xo(){let e=12,t="";for(;e-- >0;)t+=mI[Math.random()*62|0];return t}function vi(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function nd(e){return e.classList?vi(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function t0(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function gI(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(t0(e[n]),'" '),"").trim()}function nl(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function rd(e){return e.size!==xt.size||e.x!==xt.x||e.y!==xt.y||e.rotate!==xt.rotate||e.flipX||e.flipY}function vI(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(o," ").concat(a," ").concat(l)},d={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:c,path:d}}function yI(e){let{transform:t,width:n=Tc,height:r=Tc,startCentered:i=!1}=e,o="";return i&&Vy?o+="translate(".concat(t.x/vn-n/2,"em, ").concat(t.y/vn-r/2,"em) "):i?o+="translate(calc(-50% + ".concat(t.x/vn,"em), calc(-50% + ").concat(t.y/vn,"em)) "):o+="translate(".concat(t.x/vn,"em, ").concat(t.y/vn,"em) "),o+="scale(".concat(t.size/vn*(t.flipX?-1:1),", ").concat(t.size/vn*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var wI=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function n0(){const e=Xy,t=qy,n=B.cssPrefix,r=B.replacementClass;let i=wI;if(n!==e||r!==t){const o=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(l,".".concat(r))}return i}let Zp=!1;function du(){B.autoAddCss&&!Zp&&(pI(n0()),Zp=!0)}var _I={mixout(){return{dom:{css:n0,insertCss:du}}},hooks(){return{beforeDOMElementCreation(){du()},beforeI2svg(){du()}}}};const an=$n||{};an[sn]||(an[sn]={});an[sn].styles||(an[sn].styles={});an[sn].hooks||(an[sn].hooks={});an[sn].shims||(an[sn].shims=[]);var Rt=an[sn];const r0=[],i0=function(){se.removeEventListener("DOMContentLoaded",i0),Ia=1,r0.map(e=>e())};let Ia=!1;dn&&(Ia=(se.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(se.readyState),Ia||se.addEventListener("DOMContentLoaded",i0));function EI(e){dn&&(Ia?setTimeout(e,0):r0.push(e))}function Ho(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?t0(e):"<".concat(t," ").concat(gI(n),">").concat(r.map(Ho).join(""),"</").concat(t,">")}function em(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var hu=function(t,n,r,i){var o=Object.keys(t),a=o.length,l=n,c,d,m;for(r===void 0?(c=1,m=t[o[0]]):(c=0,m=r);c<a;c++)d=o[c],m=l(m,t[d],d,t);return m};function SI(e){const t=[];let n=0;const r=e.length;for(;n<r;){const i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const o=e.charCodeAt(n++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Rc(e){const t=SI(e);return t.length===1?t[0].toString(16):null}function II(e,t){const n=e.length;let r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function tm(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Oc(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=tm(t);typeof Rt.hooks.addPack=="function"&&!r?Rt.hooks.addPack(e,tm(t)):Rt.styles[e]=M(M({},Rt.styles[e]||{}),i),e==="fas"&&Oc("fa",t)}const{styles:Ro,shims:kI}=Rt,o0=Object.keys(td),TI=o0.reduce((e,t)=>(e[t]=Object.keys(td[t]),e),{});let id=null,s0={},a0={},l0={},u0={},c0={};function CI(e){return~cI.indexOf(e)}function AI(e,t){const n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!CI(i)?i:null}const f0=()=>{const e=r=>hu(Ro,(i,o,a)=>(i[a]=hu(o,r,{}),i),{});s0=e((r,i,o)=>(i[3]&&(r[i[3]]=o),i[2]&&i[2].filter(l=>typeof l=="number").forEach(l=>{r[l.toString(16)]=o}),r)),a0=e((r,i,o)=>(r[o]=o,i[2]&&i[2].filter(l=>typeof l=="string").forEach(l=>{r[l]=o}),r)),c0=e((r,i,o)=>{const a=i[2];return r[o]=o,a.forEach(l=>{r[l]=o}),r});const t="far"in Ro||B.autoFetchSvg,n=hu(kI,(r,i)=>{const o=i[0];let a=i[1];const l=i[2];return a==="far"&&!t&&(a="fas"),typeof o=="string"&&(r.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:a,iconName:l}),r},{names:{},unicodes:{}});l0=n.names,u0=n.unicodes,id=rl(B.styleDefault,{family:B.familyDefault})};hI(e=>{id=rl(e.styleDefault,{family:B.familyDefault})});f0();function od(e,t){return(s0[e]||{})[t]}function PI(e,t){return(a0[e]||{})[t]}function or(e,t){return(c0[e]||{})[t]}function d0(e){return l0[e]||{prefix:null,iconName:null}}function xI(e){const t=u0[e],n=od("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Bn(){return id}const h0=()=>({prefix:null,iconName:null,rest:[]});function RI(e){let t=be;const n=o0.reduce((r,i)=>(r[i]="".concat(B.cssPrefix,"-").concat(i),r),{});return Ky.forEach(r=>{(e.includes(n[r])||e.some(i=>TI[r].includes(i)))&&(t=r)}),t}function rl(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=be}=t,r=oI[n][e];if(n===tl&&!e)return"fad";const i=Qp[n][e]||Qp[n][r],o=e in Rt.styles?e:null;return i||o||null}function OI(e){let t=[],n=null;return e.forEach(r=>{const i=AI(B.cssPrefix,r);i?n=i:r&&t.push(r)}),{iconName:n,rest:t}}function nm(e){return e.sort().filter((t,n,r)=>r.indexOf(t)===n)}function il(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t;let r=null;const i=kc.concat(K2),o=nm(e.filter(w=>i.includes(w))),a=nm(e.filter(w=>!kc.includes(w))),l=o.filter(w=>(r=w,!Gy.includes(w))),[c=null]=l,d=RI(o),m=M(M({},OI(a)),{},{prefix:rl(c,{family:d})});return M(M(M({},m),DI({values:e,family:d,styles:Ro,config:B,canonical:m,givenPrefix:r})),NI(n,r,m))}function NI(e,t,n){let{prefix:r,iconName:i}=n;if(e||!r||!i)return{prefix:r,iconName:i};const o=t==="fa"?d0(i):{},a=or(r,i);return i=o.iconName||a||i,r=o.prefix||r,r==="far"&&!Ro.far&&Ro.fas&&!B.autoFetchSvg&&(r="fas"),{prefix:r,iconName:i}}const bI=Ky.filter(e=>e!==be||e!==tl),LI=Object.keys(Ic).filter(e=>e!==be).map(e=>Object.keys(Ic[e])).flat();function DI(e){const{values:t,family:n,canonical:r,givenPrefix:i="",styles:o={},config:a={}}=e,l=n===tl,c=t.includes("fa-duotone")||t.includes("fad"),d=a.familyDefault==="duotone",m=r.prefix==="fad"||r.prefix==="fa-duotone";if(!l&&(c||d||m)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&bI.includes(n)&&(Object.keys(o).find(y=>LI.includes(y))||a.autoFetchSvg)){const y=j2.get(n).defaultShortPrefixId;r.prefix=y,r.iconName=or(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||i==="fa")&&(r.prefix=Bn()||"fas"),r}class MI{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(o=>{this.definitions[o]=M(M({},this.definitions[o]||{}),i[o]),Oc(o,i[o]);const a=td[be][o];a&&Oc(a,i[o]),f0()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:o,iconName:a,icon:l}=r[i],c=l[2];t[o]||(t[o]={}),c.length>0&&c.forEach(d=>{typeof d=="string"&&(t[o][d]=l)}),t[o][a]=l}),t}}let rm=[],Vr={};const Qr={},FI=Object.keys(Qr);function UI(e,t){let{mixoutsTo:n}=t;return rm=e,Vr={},Object.keys(Qr).forEach(r=>{FI.indexOf(r)===-1&&delete Qr[r]}),rm.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(o=>{typeof i[o]=="function"&&(n[o]=i[o]),typeof i[o]=="object"&&Object.keys(i[o]).forEach(a=>{n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){const o=r.hooks();Object.keys(o).forEach(a=>{Vr[a]||(Vr[a]=[]),Vr[a].push(o[a])})}r.provides&&r.provides(Qr)}),n}function Nc(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(Vr[e]||[]).forEach(a=>{t=a.apply(null,[t,...r])}),t}function vr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(Vr[e]||[]).forEach(o=>{o.apply(null,n)})}function Hn(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Qr[e]?Qr[e].apply(null,t):void 0}function bc(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||Bn();if(t)return t=or(n,t)||t,em(p0.definitions,n,t)||em(Rt.styles,n,t)}const p0=new MI,jI=()=>{B.autoReplaceSvg=!1,B.observeMutations=!1,vr("noAuto")},zI={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return dn?(vr("beforeI2svg",e),Hn("pseudoElements2svg",e),Hn("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;B.autoReplaceSvg===!1&&(B.autoReplaceSvg=!0),B.observeMutations=!0,EI(()=>{BI({autoReplaceSvgRoot:t}),vr("watch",e)})}},$I={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:or(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=rl(e[0]);return{prefix:n,iconName:or(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(B.cssPrefix,"-"))>-1||e.match(sI))){const t=il(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||Bn(),iconName:or(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=Bn();return{prefix:t,iconName:or(t,e)||e}}}},rt={noAuto:jI,config:B,dom:zI,parse:$I,library:p0,findIconDefinition:bc,toHtml:Ho},BI=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=se}=e;(Object.keys(Rt.styles).length>0||B.autoFetchSvg)&&dn&&B.autoReplaceSvg&&rt.dom.i2svg({node:t})};function ol(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>Ho(n))}}),Object.defineProperty(e,"node",{get:function(){if(!dn)return;const n=se.createElement("div");return n.innerHTML=e.html,n.children}}),e}function HI(e){let{children:t,main:n,mask:r,attributes:i,styles:o,transform:a}=e;if(rd(a)&&n.found&&!r.found){const{width:l,height:c}=n,d={x:l/c/2,y:.5};i.style=nl(M(M({},o),{},{"transform-origin":"".concat(d.x+a.x/16,"em ").concat(d.y+a.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function VI(e){let{prefix:t,iconName:n,children:r,attributes:i,symbol:o}=e;const a=o===!0?"".concat(t,"-").concat(B.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:M(M({},i),{},{id:a}),children:r}]}]}function sd(e){const{icons:{main:t,mask:n},prefix:r,iconName:i,transform:o,symbol:a,title:l,maskId:c,titleId:d,extra:m,watchable:w=!1}=e,{width:y,height:C}=n.found?n:t,x=V2.includes(r),O=[B.replacementClass,i?"".concat(B.cssPrefix,"-").concat(i):""].filter(D=>m.classes.indexOf(D)===-1).filter(D=>D!==""||!!D).concat(m.classes).join(" ");let N={children:[],attributes:M(M({},m.attributes),{},{"data-prefix":r,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(C)})};const _=x&&!~m.classes.indexOf("fa-fw")?{width:"".concat(y/C*16*.0625,"em")}:{};w&&(N.attributes[gr]=""),l&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(d||xo())},children:[l]}),delete N.attributes.title);const g=M(M({},N),{},{prefix:r,iconName:i,main:t,mask:n,maskId:c,transform:o,symbol:a,styles:M(M({},_),m.styles)}),{children:k,attributes:b}=n.found&&t.found?Hn("generateAbstractMask",g)||{children:[],attributes:{}}:Hn("generateAbstractIcon",g)||{children:[],attributes:{}};return g.children=k,g.attributes=b,a?VI(g):HI(g)}function im(e){const{content:t,width:n,height:r,transform:i,title:o,extra:a,watchable:l=!1}=e,c=M(M(M({},a.attributes),o?{title:o}:{}),{},{class:a.classes.join(" ")});l&&(c[gr]="");const d=M({},a.styles);rd(i)&&(d.transform=yI({transform:i,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);const m=nl(d);m.length>0&&(c.style=m);const w=[];return w.push({tag:"span",attributes:c,children:[t]}),o&&w.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),w}function WI(e){const{content:t,title:n,extra:r}=e,i=M(M(M({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=nl(r.styles);o.length>0&&(i.style=o);const a=[];return a.push({tag:"span",attributes:i,children:[t]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}const{styles:pu}=Rt;function Lc(e){const t=e[0],n=e[1],[r]=e.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(B.cssPrefix,"-").concat(fu.GROUP)},children:[{tag:"path",attributes:{class:"".concat(B.cssPrefix,"-").concat(fu.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(B.cssPrefix,"-").concat(fu.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:i}}const GI={found:!1,width:512,height:512};function KI(e,t){!Jy&&!B.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Dc(e,t){let n=t;return t==="fa"&&B.styleDefault!==null&&(t=Bn()),new Promise((r,i)=>{if(n==="fa"){const o=d0(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&pu[t]&&pu[t][e]){const o=pu[t][e];return r(Lc(o))}KI(e,t),r(M(M({},GI),{},{icon:B.showMissingIcons&&e?Hn("missingIconAbstract")||{}:{}}))})}const om=()=>{},Mc=B.measurePerformance&&Ps&&Ps.mark&&Ps.measure?Ps:{mark:om,measure:om},Ki='FA "6.7.1"',YI=e=>(Mc.mark("".concat(Ki," ").concat(e," begins")),()=>m0(e)),m0=e=>{Mc.mark("".concat(Ki," ").concat(e," ends")),Mc.measure("".concat(Ki," ").concat(e),"".concat(Ki," ").concat(e," begins"),"".concat(Ki," ").concat(e," ends"))};var ad={begin:YI,end:m0};const Gs=()=>{};function sm(e){return typeof(e.getAttribute?e.getAttribute(gr):null)=="string"}function XI(e){const t=e.getAttribute?e.getAttribute(Zf):null,n=e.getAttribute?e.getAttribute(ed):null;return t&&n}function qI(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(B.replacementClass)}function JI(){return B.autoReplaceSvg===!0?Ks.replace:Ks[B.autoReplaceSvg]||Ks.replace}function QI(e){return se.createElementNS("http://www.w3.org/2000/svg",e)}function ZI(e){return se.createElement(e)}function g0(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?QI:ZI}=t;if(typeof e=="string")return se.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])}),(e.children||[]).forEach(function(o){r.appendChild(g0(o,{ceFn:n}))}),r}function ek(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const Ks={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(g0(n),t)}),t.getAttribute(gr)===null&&B.keepOriginalSource){let n=se.createComment(ek(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~nd(t).indexOf(B.replacementClass))return Ks.replace(e);const r=new RegExp("".concat(B.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((a,l)=>(l===B.replacementClass||l.match(r)?a.toSvg.push(l):a.toNode.push(l),a),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",o.toNode.join(" "))}const i=n.map(o=>Ho(o)).join(`
`);t.setAttribute(gr,""),t.innerHTML=i}};function am(e){e()}function v0(e,t){const n=typeof t=="function"?t:Gs;if(e.length===0)n();else{let r=am;B.mutateApproach===rI&&(r=$n.requestAnimationFrame||am),r(()=>{const i=JI(),o=ad.begin("mutate");e.map(i),o(),n()})}}let ld=!1;function y0(){ld=!0}function Fc(){ld=!1}let ka=null;function lm(e){if(!Yp||!B.observeMutations)return;const{treeCallback:t=Gs,nodeCallback:n=Gs,pseudoElementsCallback:r=Gs,observeMutationsRoot:i=se}=e;ka=new Yp(o=>{if(ld)return;const a=Bn();vi(o).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!sm(l.addedNodes[0])&&(B.searchPseudoElements&&r(l.target),t(l.target)),l.type==="attributes"&&l.target.parentNode&&B.searchPseudoElements&&r(l.target.parentNode),l.type==="attributes"&&sm(l.target)&&~uI.indexOf(l.attributeName))if(l.attributeName==="class"&&XI(l.target)){const{prefix:c,iconName:d}=il(nd(l.target));l.target.setAttribute(Zf,c||a),d&&l.target.setAttribute(ed,d)}else qI(l.target)&&n(l.target)})}),dn&&ka.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function tk(){ka&&ka.disconnect()}function nk(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,i)=>{const o=i.split(":"),a=o[0],l=o.slice(1);return a&&l.length>0&&(r[a]=l.join(":").trim()),r},{})),n}function rk(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let i=il(nd(e));return i.prefix||(i.prefix=Bn()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=PI(i.prefix,e.innerText)||od(i.prefix,Rc(e.innerText))),!i.iconName&&B.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function ik(e){const t=vi(e.attributes).reduce((i,o)=>(i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return B.autoA11y&&(n?t["aria-labelledby"]="".concat(B.replacementClass,"-title-").concat(r||xo()):(t["aria-hidden"]="true",t.focusable="false")),t}function ok(){return{iconName:null,title:null,titleId:null,prefix:null,transform:xt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function um(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=rk(e),o=ik(e),a=Nc("parseNodeAttributes",{},e);let l=t.styleParser?nk(e):[];return M({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:xt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},a)}const{styles:sk}=Rt;function w0(e){const t=B.autoReplaceSvg==="nest"?um(e,{styleParser:!1}):um(e);return~t.extra.classes.indexOf(Zy)?Hn("generateLayersText",e,t):Hn("generateSvgReplacementMutation",e,t)}function ak(){return[...$2,...kc]}function cm(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!dn)return Promise.resolve();const n=se.documentElement.classList,r=m=>n.add("".concat(Jp,"-").concat(m)),i=m=>n.remove("".concat(Jp,"-").concat(m)),o=B.autoFetchSvg?ak():Gy.concat(Object.keys(sk));o.includes("fa")||o.push("fa");const a=[".".concat(Zy,":not([").concat(gr,"])")].concat(o.map(m=>".".concat(m,":not([").concat(gr,"])"))).join(", ");if(a.length===0)return Promise.resolve();let l=[];try{l=vi(e.querySelectorAll(a))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();const c=ad.begin("onTree"),d=l.reduce((m,w)=>{try{const y=w0(w);y&&m.push(y)}catch(y){Jy||y.name==="MissingIcon"&&console.error(y)}return m},[]);return new Promise((m,w)=>{Promise.all(d).then(y=>{v0(y,()=>{r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),c(),m()})}).catch(y=>{c(),w(y)})})}function lk(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;w0(e).then(n=>{n&&v0([n],t)})}function uk(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:bc(t||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:bc(i||{})),e(r,M(M({},n),{},{mask:i}))}}const ck=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=xt,symbol:r=!1,mask:i=null,maskId:o=null,title:a=null,titleId:l=null,classes:c=[],attributes:d={},styles:m={}}=t;if(!e)return;const{prefix:w,iconName:y,icon:C}=e;return ol(M({type:"icon"},e),()=>(vr("beforeDOMElementCreation",{iconDefinition:e,params:t}),B.autoA11y&&(a?d["aria-labelledby"]="".concat(B.replacementClass,"-title-").concat(l||xo()):(d["aria-hidden"]="true",d.focusable="false")),sd({icons:{main:Lc(C),mask:i?Lc(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:w,iconName:y,transform:M(M({},xt),n),symbol:r,title:a,maskId:o,titleId:l,extra:{attributes:d,styles:m,classes:c}})))};var fk={mixout(){return{icon:uk(ck)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=cm,e.nodeCallback=lk,e}}},provides(e){e.i2svg=function(t){const{node:n=se,callback:r=()=>{}}=t;return cm(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:i,titleId:o,prefix:a,transform:l,symbol:c,mask:d,maskId:m,extra:w}=n;return new Promise((y,C)=>{Promise.all([Dc(r,a),d.iconName?Dc(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(x=>{let[O,N]=x;y([t,sd({icons:{main:O,mask:N},prefix:a,iconName:r,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:w,watchable:!0})])}).catch(C)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:i,transform:o,styles:a}=t;const l=nl(a);l.length>0&&(r.style=l);let c;return rd(o)&&(c=Hn("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),n.push(c||i.icon),{children:n,attributes:r}}}},dk={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return ol({type:"layer"},()=>{vr("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(i=>{Array.isArray(i)?i.map(o=>{r=r.concat(o.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(B.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},hk={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:o={}}=t;return ol({type:"counter",content:e},()=>(vr("beforeDOMElementCreation",{content:e,params:t}),WI({content:e.toString(),title:n,extra:{attributes:i,styles:o,classes:["".concat(B.cssPrefix,"-layers-counter"),...r]}})))}}}},pk={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=xt,title:r=null,classes:i=[],attributes:o={},styles:a={}}=t;return ol({type:"text",content:e},()=>(vr("beforeDOMElementCreation",{content:e,params:t}),im({content:e,transform:M(M({},xt),n),title:r,extra:{attributes:o,styles:a,classes:["".concat(B.cssPrefix,"-layers-text"),...i]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:i,extra:o}=n;let a=null,l=null;if(Vy){const c=parseInt(getComputedStyle(t).fontSize,10),d=t.getBoundingClientRect();a=d.width/c,l=d.height/c}return B.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([t,im({content:t.innerHTML,width:a,height:l,transform:i,title:r,extra:o,watchable:!0})])}}};const mk=new RegExp('"',"ug"),fm=[1105920,1112319],dm=M(M(M(M({},{FontAwesome:{normal:"fas",400:"fas"}}),U2),tI),Y2),Uc=Object.keys(dm).reduce((e,t)=>(e[t.toLowerCase()]=dm[t],e),{}),gk=Object.keys(Uc).reduce((e,t)=>{const n=Uc[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function vk(e){const t=e.replace(mk,""),n=II(t,0),r=n>=fm[0]&&n<=fm[1],i=t.length===2?t[0]===t[1]:!1;return{value:Rc(i?t[0]:t),isSecondary:r||i}}function yk(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),i=isNaN(r)?"normal":r;return(Uc[n]||{})[i]||gk[n]}function hm(e,t){const n="".concat(nI).concat(t.replace(":","-"));return new Promise((r,i)=>{if(e.getAttribute(n)!==null)return r();const a=vi(e.children).filter(y=>y.getAttribute(Cc)===t)[0],l=$n.getComputedStyle(e,t),c=l.getPropertyValue("font-family"),d=c.match(aI),m=l.getPropertyValue("font-weight"),w=l.getPropertyValue("content");if(a&&!d)return e.removeChild(a),r();if(d&&w!=="none"&&w!==""){const y=l.getPropertyValue("content");let C=yk(c,m);const{value:x,isSecondary:O}=vk(y),N=d[0].startsWith("FontAwesome");let _=od(C,x),g=_;if(N){const k=xI(x);k.iconName&&k.prefix&&(_=k.iconName,C=k.prefix)}if(_&&!O&&(!a||a.getAttribute(Zf)!==C||a.getAttribute(ed)!==g)){e.setAttribute(n,g),a&&e.removeChild(a);const k=ok(),{extra:b}=k;b.attributes[Cc]=t,Dc(_,C).then(D=>{const j=sd(M(M({},k),{},{icons:{main:D,mask:h0()},prefix:C,iconName:g,extra:b,watchable:!0})),E=se.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(E,e.firstChild):e.appendChild(E),E.outerHTML=j.map(p=>Ho(p)).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function wk(e){return Promise.all([hm(e,"::before"),hm(e,"::after")])}function _k(e){return e.parentNode!==document.head&&!~iI.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Cc)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function pm(e){if(dn)return new Promise((t,n)=>{const r=vi(e.querySelectorAll("*")).filter(_k).map(wk),i=ad.begin("searchPseudoElements");y0(),Promise.all(r).then(()=>{i(),Fc(),t()}).catch(()=>{i(),Fc(),n()})})}var Ek={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=pm,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=se}=t;B.searchPseudoElements&&pm(n)}}};let mm=!1;var Sk={mixout(){return{dom:{unwatch(){y0(),mm=!0}}}},hooks(){return{bootstrap(){lm(Nc("mutationObserverCallbacks",{}))},noAuto(){tk()},watch(e){const{observeMutationsRoot:t}=e;mm?Fc():lm(Nc("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const gm=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),o=i[0];let a=i.slice(1).join("-");if(o&&a==="h")return n.flipX=!0,n;if(o&&a==="v")return n.flipY=!0,n;if(a=parseFloat(a),isNaN(a))return n;switch(o){case"grow":n.size=n.size+a;break;case"shrink":n.size=n.size-a;break;case"left":n.x=n.x-a;break;case"right":n.x=n.x+a;break;case"up":n.y=n.y-a;break;case"down":n.y=n.y+a;break;case"rotate":n.rotate=n.rotate+a;break}return n},t)};var Ik={mixout(){return{parse:{transform:e=>gm(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=gm(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:i,iconWidth:o}=t;const a={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),d="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},w={transform:"translate(".concat(o/2*-1," -256)")},y={outer:a,inner:m,path:w};return{tag:"g",attributes:M({},y.outer),children:[{tag:"g",attributes:M({},y.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:M(M({},n.icon.attributes),y.path)}]}]}}}};const mu={x:0,y:0,width:"100%",height:"100%"};function vm(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function kk(e){return e.tag==="g"?e.children:[e]}var Tk={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?il(n.split(" ").map(i=>i.trim())):h0();return r.prefix||(r.prefix=Bn()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:i,mask:o,maskId:a,transform:l}=t;const{width:c,icon:d}=i,{width:m,icon:w}=o,y=vI({transform:l,containerWidth:m,iconWidth:c}),C={tag:"rect",attributes:M(M({},mu),{},{fill:"white"})},x=d.children?{children:d.children.map(vm)}:{},O={tag:"g",attributes:M({},y.inner),children:[vm(M({tag:d.tag,attributes:M(M({},d.attributes),y.path)},x))]},N={tag:"g",attributes:M({},y.outer),children:[O]},_="mask-".concat(a||xo()),g="clip-".concat(a||xo()),k={tag:"mask",attributes:M(M({},mu),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[C,N]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:kk(w)},k]};return n.push(b,{tag:"rect",attributes:M({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(_,")")},mu)}),{children:n,attributes:r}}}},Ck={provides(e){let t=!1;$n.matchMedia&&(t=$n.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:M(M({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const o=M(M({},i),{},{attributeName:"opacity"}),a={tag:"circle",attributes:M(M({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||a.children.push({tag:"animate",attributes:M(M({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:M(M({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(a),n.push({tag:"path",attributes:M(M({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:M(M({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:M(M({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:M(M({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Ak={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},Pk=[_I,fk,dk,hk,pk,Ek,Sk,Ik,Tk,Ck,Ak];UI(Pk,{mixoutsTo:rt});rt.noAuto;rt.config;rt.library;rt.dom;const jc=rt.parse;rt.findIconDefinition;rt.toHtml;const xk=rt.icon;rt.layer;rt.text;rt.counter;var _0={exports:{}},Rk="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ok=Rk,Nk=Ok;function E0(){}function S0(){}S0.resetWarningCache=E0;var bk=function(){function e(r,i,o,a,l,c){if(c!==Nk){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:S0,resetWarningCache:E0};return n.PropTypes=n,n};_0.exports=bk();var Lk=_0.exports;const K=dg(Lk);function ym(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function At(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ym(Object(n),!0).forEach(function(r){Wr(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ym(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ta(e){"@babel/helpers - typeof";return Ta=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ta(e)}function Wr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Dk(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Mk(e,t){if(e==null)return{};var n=Dk(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function zc(e){return Fk(e)||Uk(e)||jk(e)||zk()}function Fk(e){if(Array.isArray(e))return $c(e)}function Uk(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function jk(e,t){if(e){if(typeof e=="string")return $c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $c(e,t)}}function $c(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function zk(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $k(e){var t,n=e.beat,r=e.fade,i=e.beatFade,o=e.bounce,a=e.shake,l=e.flash,c=e.spin,d=e.spinPulse,m=e.spinReverse,w=e.pulse,y=e.fixedWidth,C=e.inverse,x=e.border,O=e.listItem,N=e.flip,_=e.size,g=e.rotation,k=e.pull,b=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":a,"fa-flash":l,"fa-spin":c,"fa-spin-reverse":m,"fa-spin-pulse":d,"fa-pulse":w,"fa-fw":y,"fa-inverse":C,"fa-border":x,"fa-li":O,"fa-flip":N===!0,"fa-flip-horizontal":N==="horizontal"||N==="both","fa-flip-vertical":N==="vertical"||N==="both"},Wr(t,"fa-".concat(_),typeof _<"u"&&_!==null),Wr(t,"fa-rotate-".concat(g),typeof g<"u"&&g!==null&&g!==0),Wr(t,"fa-pull-".concat(k),typeof k<"u"&&k!==null),Wr(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(b).map(function(D){return b[D]?D:null}).filter(function(D){return D})}function Bk(e){return e=e-0,e===e}function I0(e){return Bk(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Hk=["style"];function Vk(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Wk(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=I0(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?t[Vk(i)]=o:t[i]=o,t},{})}function k0(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return k0(e,c)}),i=Object.keys(t.attributes||{}).reduce(function(c,d){var m=t.attributes[d];switch(d){case"class":c.attrs.className=m,delete t.attributes.class;break;case"style":c.attrs.style=Wk(m);break;default:d.indexOf("aria-")===0||d.indexOf("data-")===0?c.attrs[d.toLowerCase()]=m:c.attrs[I0(d)]=m}return c},{attrs:{}}),o=n.style,a=o===void 0?{}:o,l=Mk(n,Hk);return i.attrs.style=At(At({},i.attrs.style),a),e.apply(void 0,[t.tag,At(At({},i.attrs),l)].concat(zc(r)))}var T0=!1;try{T0=!0}catch{}function Gk(){if(!T0&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function wm(e){if(e&&Ta(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(jc.icon)return jc.icon(e);if(e===null)return null;if(e&&Ta(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function gu(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Wr({},e,t):{}}var _m={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Ca=Ig.forwardRef(function(e,t){var n=At(At({},_m),e),r=n.icon,i=n.mask,o=n.symbol,a=n.className,l=n.title,c=n.titleId,d=n.maskId,m=wm(r),w=gu("classes",[].concat(zc($k(n)),zc((a||"").split(" ")))),y=gu("transform",typeof n.transform=="string"?jc.transform(n.transform):n.transform),C=gu("mask",wm(i)),x=xk(m,At(At(At(At({},w),y),C),{},{symbol:o,title:l,titleId:c,maskId:d}));if(!x)return Gk("Could not find icon",m),null;var O=x.abstract,N={ref:t};return Object.keys(n).forEach(function(_){_m.hasOwnProperty(_)||(N[_]=n[_])}),Kk(O[0],N)});Ca.displayName="FontAwesomeIcon";Ca.propTypes={beat:K.bool,border:K.bool,beatFade:K.bool,bounce:K.bool,className:K.string,fade:K.bool,flash:K.bool,mask:K.oneOfType([K.object,K.array,K.string]),maskId:K.string,fixedWidth:K.bool,inverse:K.bool,flip:K.oneOf([!0,!1,"horizontal","vertical","both"]),icon:K.oneOfType([K.object,K.array,K.string]),listItem:K.bool,pull:K.oneOf(["right","left"]),pulse:K.bool,rotation:K.oneOf([0,90,180,270]),shake:K.bool,size:K.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:K.bool,spinPulse:K.bool,spinReverse:K.bool,symbol:K.oneOfType([K.bool,K.string]),title:K.string,titleId:K.string,transform:K.oneOfType([K.string,K.object]),swapOpacity:K.bool};var Kk=k0.bind(null,Ig.createElement);/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Yk={prefix:"fas",iconName:"pencil",icon:[512,512,[9999,61504,"pencil-alt"],"f303","M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]},Xk={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},qk=()=>{const e=()=>{const t=document.querySelector(".header__menu");document.querySelector(".header__hamburger").classList.toggle("active"),t.classList.toggle("active")};return G.jsxs("div",{className:"header",children:[G.jsx("div",{className:"header__text",children:G.jsx(ro,{to:"/homepage",children:G.jsx("h1",{children:"Polanのホームページ"})})}),G.jsx("div",{className:"header__menu",children:G.jsxs("ul",{className:"header__menu-items",children:[G.jsx("li",{className:"header__menu-items-item",children:G.jsxs(ro,{to:"/homepage",onClick:e,children:[G.jsx(Ca,{icon:Xk}),"ホーム"]})}),G.jsx("li",{className:"header__menu-items-item",children:G.jsxs(ro,{to:"/homepage/board",onClick:e,children:[G.jsx(Ca,{icon:Yk}),"掲示板"]})})]})}),G.jsxs("button",{className:"header__hamburger",onClick:e,children:[G.jsx("span",{}),G.jsx("span",{}),G.jsx("span",{})]})]})},Jk=()=>{const[e,t]=L.useState("");L.useEffect(()=>{t(n());const r=setInterval(()=>{t(n())},1e3);return()=>{clearInterval(r)}},[]);const n=()=>{const r=new Date(Date.now()+(new Date().getTimezoneOffset()+540)*60*1e3),i=r.getFullYear(),o=("00"+r.getMonth()).slice(-2),a=("00"+r.getHours()).slice(-2),l=("00"+r.getHours()).slice(-2),c=("00"+r.getMinutes()).slice(-2),d=("00"+r.getSeconds()).slice(-2);return`${i}/${o}/${a} ${l}:${c}:${d}`};return G.jsx("footer",{children:G.jsx("h3",{children:e})})},Qk=()=>G.jsxs("div",{className:"content",children:[G.jsx("h1",{children:"自己紹介"}),G.jsx("div",{children:"名前 Polan"}),G.jsx("div",{children:"好きなこと コンピュータ・プログラミングの勉強"}),G.jsx("div",{children:"やりたいこと 執筆活動"})]});var Em={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Zk=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],a=e[n++],l=e[n++],c=((i&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const o=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")},A0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],a=i+1<e.length,l=a?e[i+1]:0,c=i+2<e.length,d=c?e[i+2]:0,m=o>>2,w=(o&3)<<4|l>>4;let y=(l&15)<<2|d>>6,C=d&63;c||(C=64,a||(y=64)),r.push(n[m],n[w],n[y],n[C])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(C0(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Zk(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],l=i<e.length?n[e.charAt(i)]:0;++i;const d=i<e.length?n[e.charAt(i)]:64;++i;const w=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||l==null||d==null||w==null)throw new eT;const y=o<<2|l>>4;if(r.push(y),d!==64){const C=l<<4&240|d>>2;if(r.push(C),w!==64){const x=d<<6&192|w;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class eT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tT=function(e){const t=C0(e);return A0.encodeByteArray(t,!0)},Aa=function(e){return tT(e).replace(/\./g,"")},P0=function(e){try{return A0.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT=()=>nT().__FIREBASE_DEFAULTS__,iT=()=>{if(typeof process>"u"||typeof Em>"u")return;const e=Em.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},oT=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&P0(e[1]);return t&&JSON.parse(t)},ud=()=>{try{return rT()||iT()||oT()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},x0=e=>{var t,n;return(n=(t=ud())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},sT=e=>{const t=x0(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},R0=()=>{var e;return(e=ud())===null||e===void 0?void 0:e.config},O0=e=>{var t;return(t=ud())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lT(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Aa(JSON.stringify(n)),Aa(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function uT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(je())}function cT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function N0(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function fT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dT(){const e=je();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function b0(){try{return typeof indexedDB=="object"}catch{return!1}}function L0(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function hT(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT="FirebaseError";class kt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=pT,Object.setPrototypeOf(this,kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,kr.prototype.create)}}class kr{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],a=o?mT(o,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new kt(i,l,r)}}function mT(e,t){return e.replace(gT,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const gT=/\{\$([^}]+)}/g;function vT(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Oo(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],a=t[i];if(Sm(o)&&Sm(a)){if(!Oo(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Sm(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function yT(e,t){const n=new wT(e,t);return n.subscribe.bind(n)}class wT{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");_T(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=vu),i.error===void 0&&(i.error=vu),i.complete===void 0&&(i.complete=vu);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _T(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function vu(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET=1e3,ST=2,IT=4*60*60*1e3,kT=.5;function Im(e,t=ET,n=ST){const r=t*Math.pow(n,e),i=Math.round(kT*r*(Math.random()-.5)*2);return Math.min(IT,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(e){return e&&e._delegate?e._delegate:e}class It{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new aT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(AT(t))try{this.getOrInitializeService({instanceIdentifier:tr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=tr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=tr){return this.instances.has(t)}getOptions(t=tr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&t(a,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:CT(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=tr){return this.component?this.component.multipleInstances?t:tr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function CT(e){return e===tr?void 0:e}function AT(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new TT(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Q||(Q={}));const xT={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},RT=Q.INFO,OT={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},NT=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=OT[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class sl{constructor(t){this.name=t,this._logLevel=RT,this._logHandler=NT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Q))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?xT[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...t),this._logHandler(this,Q.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...t),this._logHandler(this,Q.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...t),this._logHandler(this,Q.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...t),this._logHandler(this,Q.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...t),this._logHandler(this,Q.ERROR,...t)}}const bT=(e,t)=>t.some(n=>e instanceof n);let km,Tm;function LT(){return km||(km=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function DT(){return Tm||(Tm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const D0=new WeakMap,Bc=new WeakMap,M0=new WeakMap,yu=new WeakMap,cd=new WeakMap;function MT(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",a)},o=()=>{n(Mn(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&D0.set(n,e)}).catch(()=>{}),cd.set(t,e),t}function FT(e){if(Bc.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",a),e.removeEventListener("abort",a)},o=()=>{n(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",a),e.addEventListener("abort",a)});Bc.set(e,t)}let Hc={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Bc.get(e);if(t==="objectStoreNames")return e.objectStoreNames||M0.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function UT(e){Hc=e(Hc)}function jT(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(wu(this),t,...n);return M0.set(r,t.sort?t.sort():[t]),Mn(r)}:DT().includes(e)?function(...t){return e.apply(wu(this),t),Mn(D0.get(this))}:function(...t){return Mn(e.apply(wu(this),t))}}function zT(e){return typeof e=="function"?jT(e):(e instanceof IDBTransaction&&FT(e),bT(e,LT())?new Proxy(e,Hc):e)}function Mn(e){if(e instanceof IDBRequest)return MT(e);if(yu.has(e))return yu.get(e);const t=zT(e);return t!==e&&(yu.set(e,t),cd.set(t,e)),t}const wu=e=>cd.get(e);function F0(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(e,t),l=Mn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Mn(a.result),c.oldVersion,c.newVersion,Mn(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{o&&c.addEventListener("close",()=>o()),i&&c.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const $T=["get","getKey","getAll","getAllKeys","count"],BT=["put","add","delete","clear"],_u=new Map;function Cm(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(_u.get(t))return _u.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=BT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||$T.includes(n)))return;const o=async function(a,...l){const c=this.transaction(a,i?"readwrite":"readonly");let d=c.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),i&&c.done]))[0]};return _u.set(t,o),o}UT(e=>({...e,get:(t,n,r)=>Cm(t,n)||e.get(t,n,r),has:(t,n)=>!!Cm(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(VT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function VT(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Vc="@firebase/app",Am="0.10.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln=new sl("@firebase/app"),WT="@firebase/app-compat",GT="@firebase/analytics-compat",KT="@firebase/analytics",YT="@firebase/app-check-compat",XT="@firebase/app-check",qT="@firebase/auth",JT="@firebase/auth-compat",QT="@firebase/database",ZT="@firebase/data-connect",eC="@firebase/database-compat",tC="@firebase/functions",nC="@firebase/functions-compat",rC="@firebase/installations",iC="@firebase/installations-compat",oC="@firebase/messaging",sC="@firebase/messaging-compat",aC="@firebase/performance",lC="@firebase/performance-compat",uC="@firebase/remote-config",cC="@firebase/remote-config-compat",fC="@firebase/storage",dC="@firebase/storage-compat",hC="@firebase/firestore",pC="@firebase/vertexai",mC="@firebase/firestore-compat",gC="firebase",vC="11.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc="[DEFAULT]",yC={[Vc]:"fire-core",[WT]:"fire-core-compat",[KT]:"fire-analytics",[GT]:"fire-analytics-compat",[XT]:"fire-app-check",[YT]:"fire-app-check-compat",[qT]:"fire-auth",[JT]:"fire-auth-compat",[QT]:"fire-rtdb",[ZT]:"fire-data-connect",[eC]:"fire-rtdb-compat",[tC]:"fire-fn",[nC]:"fire-fn-compat",[rC]:"fire-iid",[iC]:"fire-iid-compat",[oC]:"fire-fcm",[sC]:"fire-fcm-compat",[aC]:"fire-perf",[lC]:"fire-perf-compat",[uC]:"fire-rc",[cC]:"fire-rc-compat",[fC]:"fire-gcs",[dC]:"fire-gcs-compat",[hC]:"fire-fst",[mC]:"fire-fst-compat",[pC]:"fire-vertex","fire-js":"fire-js",[gC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa=new Map,wC=new Map,Gc=new Map;function Pm(e,t){try{e.container.addComponent(t)}catch(n){ln.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Lt(e){const t=e.name;if(Gc.has(t))return ln.debug(`There were multiple attempts to register component ${t}.`),!1;Gc.set(t,e);for(const n of Pa.values())Pm(n,e);for(const n of wC.values())Pm(n,e);return!0}function Tr(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Xt(e){return e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _C={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Fn=new kr("app","Firebase",_C);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new It("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Fn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi=vC;function U0(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Wc,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Fn.create("bad-app-name",{appName:String(i)});if(n||(n=R0()),!n)throw Fn.create("no-options");const o=Pa.get(i);if(o){if(Oo(n,o.options)&&Oo(r,o.config))return o;throw Fn.create("duplicate-app",{appName:i})}const a=new PT(i);for(const c of Gc.values())a.addComponent(c);const l=new EC(n,r,a);return Pa.set(i,l),l}function fd(e=Wc){const t=Pa.get(e);if(!t&&e===Wc&&R0())return U0();if(!t)throw Fn.create("no-app",{appName:e});return t}function ct(e,t,n){var r;let i=(r=yC[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const l=[`Unable to register library "${i}" with version "${t}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ln.warn(l.join(" "));return}Lt(new It(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC="firebase-heartbeat-database",IC=1,No="firebase-heartbeat-store";let Eu=null;function j0(){return Eu||(Eu=F0(SC,IC,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(No)}catch(n){console.warn(n)}}}}).catch(e=>{throw Fn.create("idb-open",{originalErrorMessage:e.message})})),Eu}async function kC(e){try{const n=(await j0()).transaction(No),r=await n.objectStore(No).get(z0(e));return await n.done,r}catch(t){if(t instanceof kt)ln.warn(t.message);else{const n=Fn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ln.warn(n.message)}}}async function xm(e,t){try{const r=(await j0()).transaction(No,"readwrite");await r.objectStore(No).put(t,z0(e)),await r.done}catch(n){if(n instanceof kt)ln.warn(n.message);else{const r=Fn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ln.warn(r.message)}}}function z0(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC=1024,CC=30*24*60*60*1e3;class AC{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Rm();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=CC}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ln.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Rm(),{heartbeatsToSend:r,unsentEntries:i}=PC(this._heartbeatsCache.heartbeats),o=Aa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return ln.warn(n),""}}}function Rm(){return new Date().toISOString().substring(0,10)}function PC(e,t=TC){const n=[];let r=e.slice();for(const i of e){const o=n.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),Om(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Om(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class xC{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return b0()?L0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await kC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return xm(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return xm(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Om(e){return Aa(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RC(e){Lt(new It("platform-logger",t=>new HT(t),"PRIVATE")),Lt(new It("heartbeat",t=>new AC(t),"PRIVATE")),ct(Vc,Am,e),ct(Vc,Am,"esm2017"),ct("fire-js","")}RC("");var OC="firebase",NC="11.0.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ct(OC,NC,"app");function dd(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function $0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bC=$0,B0=new kr("auth","Firebase",$0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa=new sl("@firebase/auth");function LC(e,...t){xa.logLevel<=Q.WARN&&xa.warn(`Auth (${yi}): ${e}`,...t)}function Ys(e,...t){xa.logLevel<=Q.ERROR&&xa.error(`Auth (${yi}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(e,...t){throw pd(e,...t)}function Et(e,...t){return pd(e,...t)}function hd(e,t,n){const r=Object.assign(Object.assign({},bC()),{[t]:n});return new kr("auth","Firebase",r).create(t,{appName:e.name})}function cr(e){return hd(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function DC(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&Dt(e,"argument-error"),hd(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function pd(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return B0.create(e,...t)}function H(e,t,...n){if(!e)throw pd(t,...n)}function qt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ys(t),new Error(t)}function un(e,t){e||qt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function MC(){return Nm()==="http:"||Nm()==="https:"}function Nm(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(MC()||N0()||"connection"in navigator)?navigator.onLine:!0}function UC(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(t,n){this.shortDelay=t,this.longDelay=n,un(n>t,"Short delay should be less than long delay!"),this.isMobile=uT()||fT()}get(){return FC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(e,t){un(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC=new Wo(3e4,6e4);function gd(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function wi(e,t,n,r,i={}){return V0(e,i,async()=>{let o={},a={};r&&(t==="GET"?a=r:o={body:JSON.stringify(r)});const l=Vo(Object.assign({key:e.config.apiKey},a)).slice(1),c=await e._getAdditionalHeaders();c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode);const d=Object.assign({method:t,headers:c},o);return cT()||(d.referrerPolicy="no-referrer"),H0.fetch()(W0(e,e.config.apiHost,n,l),d)})}async function V0(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},jC),t);try{const i=new BC(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Rs(e,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const l=o.ok?a.errorMessage:a.error.message,[c,d]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Rs(e,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw Rs(e,"email-already-in-use",a);if(c==="USER_DISABLED")throw Rs(e,"user-disabled",a);const m=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw hd(e,m,d);Dt(e,m)}}catch(i){if(i instanceof kt)throw i;Dt(e,"network-request-failed",{message:String(i)})}}async function $C(e,t,n,r,i={}){const o=await wi(e,t,n,r,i);return"mfaPendingCredential"in o&&Dt(e,"multi-factor-auth-required",{_serverResponse:o}),o}function W0(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?md(e.config,i):`${e.config.apiScheme}://${i}`}class BC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Et(this.auth,"network-request-failed")),zC.get())})}}function Rs(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Et(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HC(e,t){return wi(e,"POST","/v1/accounts:delete",t)}async function G0(e,t){return wi(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function VC(e,t=!1){const n=Yn(e),r=await n.getIdToken(t),i=vd(r);H(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:so(Su(i.auth_time)),issuedAtTime:so(Su(i.iat)),expirationTime:so(Su(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Su(e){return Number(e)*1e3}function vd(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Ys("JWT malformed, contained fewer than 3 sections"),null;try{const i=P0(n);return i?JSON.parse(i):(Ys("Failed to decode base64 JWT payload"),null)}catch(i){return Ys("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function bm(e){const t=vd(e);return H(t,"internal-error"),H(typeof t.exp<"u","internal-error"),H(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bo(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof kt&&WC(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function WC({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=so(this.lastLoginAt),this.creationTime=so(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ra(e){var t;const n=e.auth,r=await e.getIdToken(),i=await bo(e,G0(n,{idToken:r}));H(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const a=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?K0(o.providerUserInfo):[],l=YC(e.providerData,a),c=e.isAnonymous,d=!(e.email&&o.passwordHash)&&!(l!=null&&l.length),m=c?d:!1,w={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Yc(o.createdAt,o.lastLoginAt),isAnonymous:m};Object.assign(e,w)}async function KC(e){const t=Yn(e);await Ra(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function YC(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function K0(e){return e.map(t=>{var{providerId:n}=t,r=dd(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XC(e,t){const n=await V0(e,{},async()=>{const r=Vo({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,a=W0(e,i,"/v1/token",`key=${o}`),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",H0.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function qC(e,t){return wi(e,"POST","/v2/accounts:revokeToken",gd(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){H(t.idToken,"internal-error"),H(typeof t.idToken<"u","internal-error"),H(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):bm(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){H(t.length!==0,"internal-error");const n=bm(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await XC(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,a=new Zr;return r&&(H(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),i&&(H(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),o&&(H(typeof o=="number","internal-error",{appName:t}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Zr,this.toJSON())}_performRefresh(){return qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(e,t){H(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Jt{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=dd(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new GC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Yc(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await bo(this,this.stsTokenManager.getToken(this.auth,t));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return VC(this,t)}reload(){return KC(this)}_assign(t){this!==t&&(H(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Jt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Ra(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xt(this.auth.app))return Promise.reject(cr(this.auth));const t=await this.getIdToken();return await bo(this,HC(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,a,l,c,d,m;const w=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(i=n.email)!==null&&i!==void 0?i:void 0,C=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,x=(a=n.photoURL)!==null&&a!==void 0?a:void 0,O=(l=n.tenantId)!==null&&l!==void 0?l:void 0,N=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,_=(d=n.createdAt)!==null&&d!==void 0?d:void 0,g=(m=n.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:k,emailVerified:b,isAnonymous:D,providerData:j,stsTokenManager:E}=n;H(k&&E,t,"internal-error");const p=Zr.fromJSON(this.name,E);H(typeof k=="string",t,"internal-error"),yn(w,t.name),yn(y,t.name),H(typeof b=="boolean",t,"internal-error"),H(typeof D=="boolean",t,"internal-error"),yn(C,t.name),yn(x,t.name),yn(O,t.name),yn(N,t.name),yn(_,t.name),yn(g,t.name);const v=new Jt({uid:k,auth:t,email:y,emailVerified:b,displayName:w,isAnonymous:D,photoURL:x,phoneNumber:C,tenantId:O,stsTokenManager:p,createdAt:_,lastLoginAt:g});return j&&Array.isArray(j)&&(v.providerData=j.map(S=>Object.assign({},S))),N&&(v._redirectEventId=N),v}static async _fromIdTokenResponse(t,n,r=!1){const i=new Zr;i.updateFromServerResponse(n);const o=new Jt({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Ra(o),o}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];H(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?K0(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),l=new Zr;l.updateFromIdToken(r);const c=new Jt({uid:i.localId,auth:t,stsTokenManager:l,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Yc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(c,d),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm=new Map;function Qt(e){un(e instanceof Function,"Expected a class definition");let t=Lm.get(e);return t?(un(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Lm.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Y0.type="NONE";const Dm=Y0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(e,t,n){return`firebase:${e}:${t}:${n}`}class ei{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Xs(this.userKey,i.apiKey,o),this.fullPersistenceKey=Xs("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Jt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new ei(Qt(Dm),t,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=i[0]||Qt(Dm);const a=Xs(r,t.config.apiKey,t.name);let l=null;for(const d of n)try{const m=await d._get(a);if(m){const w=Jt._fromJSON(t,m);d!==o&&(l=w),o=d;break}}catch{}const c=i.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!c.length?new ei(o,t,r):(o=c[0],l&&await o._set(a,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new ei(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mm(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Q0(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(X0(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(e1(t))return"Blackberry";if(t1(t))return"Webos";if(q0(t))return"Safari";if((t.includes("chrome/")||J0(t))&&!t.includes("edge/"))return"Chrome";if(Z0(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function X0(e=je()){return/firefox\//i.test(e)}function q0(e=je()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function J0(e=je()){return/crios\//i.test(e)}function Q0(e=je()){return/iemobile/i.test(e)}function Z0(e=je()){return/android/i.test(e)}function e1(e=je()){return/blackberry/i.test(e)}function t1(e=je()){return/webos/i.test(e)}function yd(e=je()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function JC(e=je()){var t;return yd(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function QC(){return dT()&&document.documentMode===10}function n1(e=je()){return yd(e)||Z0(e)||t1(e)||e1(e)||/windows phone/i.test(e)||Q0(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r1(e,t=[]){let n;switch(e){case"Browser":n=Mm(je());break;case"Worker":n=`${Mm(je())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${yi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((a,l)=>{try{const c=t(o);a(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eA(e,t={}){return wi(e,"GET","/v2/passwordPolicy",gd(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tA=6;class nA{constructor(t){var n,r,i,o;const a=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:tA,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,o,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsUppercaseLetter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fm(this),this.idTokenSubscription=new Fm(this),this.beforeStateQueue=new ZC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=B0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Qt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ei.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await G0(this,{idToken:t}),r=await Jt._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(Xt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(t);(!a||a===l)&&(c!=null&&c.user)&&(i=c.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Ra(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=UC()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Xt(this.app))return Promise.reject(cr(this));const n=t?Yn(t):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&H(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Xt(this.app)?Promise.reject(cr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Xt(this.app)?Promise.reject(cr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Qt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await eA(this),n=new nA(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new kr("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await qC(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Qt(t)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await ei.create(this,[Qt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(l,this,"internal-error"),l.then(()=>{a||o(this.currentUser)}),typeof n=="function"){const c=t.addObserver(n,r,i);return()=>{a=!0,c()}}else{const c=t.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=r1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&LC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function al(e){return Yn(e)}class Fm{constructor(t){this.auth=t,this.observer=null,this.addObserver=yT(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function iA(e){wd=e}function oA(e){return wd.loadJS(e)}function sA(){return wd.gapiScript}function aA(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lA(e,t){const n=Tr(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Oo(o,t??{}))return i;Dt(i,"already-initialized")}return n.initialize({options:t})}function uA(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Qt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function cA(e,t,n){const r=al(e);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,o=i1(t),{host:a,port:l}=fA(t),c=l===null?"":`:${l}`;r.config.emulator={url:`${o}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),dA()}function i1(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function fA(e){const t=i1(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Um(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:Um(a)}}}function Um(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function dA(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return qt("not implemented")}_getIdTokenResponse(t){return qt("not implemented")}_linkToIdToken(t,n){return qt("not implemented")}_getReauthenticationResolver(t){return qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ti(e,t){return $C(e,"POST","/v1/accounts:signInWithIdp",gd(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA="http://localhost";class yr extends o1{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new yr(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Dt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=dd(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new yr(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(t){const n=this.buildRequest();return ti(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,ti(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,ti(t,n)}buildRequest(){const t={requestUri:hA,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Vo(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go extends _d{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends Go{constructor(){super("facebook.com")}static credential(t){return yr._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return In.credentialFromTaggedObject(t)}static credentialFromError(t){return In.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return In.credential(t.oauthAccessToken)}catch{return null}}}In.FACEBOOK_SIGN_IN_METHOD="facebook.com";In.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends Go{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return yr._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Gt.credentialFromTaggedObject(t)}static credentialFromError(t){return Gt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Gt.credential(n,r)}catch{return null}}}Gt.GOOGLE_SIGN_IN_METHOD="google.com";Gt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends Go{constructor(){super("github.com")}static credential(t){return yr._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return kn.credentialFromTaggedObject(t)}static credentialFromError(t){return kn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return kn.credential(t.oauthAccessToken)}catch{return null}}}kn.GITHUB_SIGN_IN_METHOD="github.com";kn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends Go{constructor(){super("twitter.com")}static credential(t,n){return yr._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Tn.credentialFromTaggedObject(t)}static credentialFromError(t){return Tn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Tn.credential(n,r)}catch{return null}}}Tn.TWITTER_SIGN_IN_METHOD="twitter.com";Tn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await Jt._fromIdTokenResponse(t,r,i),a=jm(r);return new ci({user:o,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=jm(r);return new ci({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function jm(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa extends kt{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Oa.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Oa(t,n,r,i)}}function s1(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Oa._fromErrorAndOperation(e,o,t,r):o})}async function pA(e,t,n=!1){const r=await bo(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return ci._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mA(e,t,n=!1){const{auth:r}=e;if(Xt(r.app))return Promise.reject(cr(r));const i="reauthenticate";try{const o=await bo(e,s1(r,i,t,e),n);H(o.idToken,r,"internal-error");const a=vd(o.idToken);H(a,r,"internal-error");const{sub:l}=a;return H(e.uid===l,r,"user-mismatch"),ci._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Dt(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gA(e,t,n=!1){if(Xt(e.app))return Promise.reject(cr(e));const r="signIn",i=await s1(e,r,t),o=await ci._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}function vA(e,t,n,r){return Yn(e).onIdTokenChanged(t,n,r)}function yA(e,t,n){return Yn(e).beforeAuthStateChanged(t,n)}const Na="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Na,"1"),this.storage.removeItem(Na),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA=1e3,_A=10;class l1 extends a1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=n1(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);QC()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,_A):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},wA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}l1.type="LOCAL";const EA=l1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1 extends a1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}u1.type="SESSION";const c1=u1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SA(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new ll(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async d=>d(n.origin,o)),c=await SA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ll.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((l,c)=>{const d=Ed("",20);i.port1.start();const m=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(w){const y=w;if(y.data.eventId===d)switch(y.data.status){case"ack":clearTimeout(m),o=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(y.data.response);break;default:clearTimeout(m),clearTimeout(o),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:d,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(){return window}function kA(e){bt().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f1(){return typeof bt().WorkerGlobalScope<"u"&&typeof bt().importScripts=="function"}async function TA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function CA(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function AA(){return f1()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d1="firebaseLocalStorageDb",PA=1,ba="firebaseLocalStorage",h1="fbase_key";class Ko{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ul(e,t){return e.transaction([ba],t?"readwrite":"readonly").objectStore(ba)}function xA(){const e=indexedDB.deleteDatabase(d1);return new Ko(e).toPromise()}function Xc(){const e=indexedDB.open(d1,PA);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(ba,{keyPath:h1})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(ba)?t(r):(r.close(),await xA(),t(await Xc()))})})}async function zm(e,t,n){const r=ul(e,!0).put({[h1]:t,value:n});return new Ko(r).toPromise()}async function RA(e,t){const n=ul(e,!1).get(t),r=await new Ko(n).toPromise();return r===void 0?null:r.value}function $m(e,t){const n=ul(e,!0).delete(t);return new Ko(n).toPromise()}const OA=800,NA=3;class p1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xc(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>NA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return f1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ll._getInstance(AA()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await TA(),!this.activeServiceWorker)return;this.sender=new IA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||CA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Xc();return await zm(t,Na,"1"),await $m(t,Na),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>zm(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>RA(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>$m(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=ul(i,!1).getAll();return new Ko(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),OA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}p1.type="LOCAL";const bA=p1;new Wo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m1(e,t){return t?Qt(t):(H(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd extends o1{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return ti(t,this._buildIdpRequest())}_linkToIdToken(t,n){return ti(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return ti(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function LA(e){return gA(e.auth,new Sd(e),e.bypassAuthState)}function DA(e){const{auth:t,user:n}=e;return H(n,t,"internal-error"),mA(n,new Sd(e),e.bypassAuthState)}async function MA(e){const{auth:t,user:n}=e;return H(n,t,"internal-error"),pA(n,new Sd(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:a,type:l}=t;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(d){this.reject(d)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return LA;case"linkViaPopup":case"linkViaRedirect":return MA;case"reauthViaPopup":case"reauthViaRedirect":return DA;default:Dt(this.auth,"internal-error")}}resolve(t){un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA=new Wo(2e3,1e4);async function UA(e,t,n){if(Xt(e.app))return Promise.reject(Et(e,"operation-not-supported-in-this-environment"));const r=al(e);DC(e,t,_d);const i=m1(r,n);return new sr(r,"signInViaPopup",t,i).executeNotNull()}class sr extends g1{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,sr.currentPopupAction&&sr.currentPopupAction.cancel(),sr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return H(t,this.auth,"internal-error"),t}async onExecution(){un(this.filter.length===1,"Popup operations only handle one event");const t=Ed();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,sr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,FA.get())};t()}}sr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA="pendingRedirect",qs=new Map;class zA extends g1{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=qs.get(this.auth._key());if(!t){try{const r=await $A(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}qs.set(this.auth._key(),t)}return this.bypassAuthState||qs.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $A(e,t){const n=VA(t),r=HA(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function BA(e,t){qs.set(e._key(),t)}function HA(e){return Qt(e._redirectPersistence)}function VA(e){return Xs(jA,e.config.apiKey,e.name)}async function WA(e,t,n=!1){if(Xt(e.app))return Promise.reject(cr(e));const r=al(e),i=m1(r,t),a=await new zA(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA=10*60*1e3;class KA{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!YA(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!v1(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Et(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=GA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bm(t))}saveEventToCache(t){this.cachedEventUids.add(Bm(t)),this.lastProcessedEventTime=Date.now()}}function Bm(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function v1({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function YA(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return v1(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XA(e,t={}){return wi(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,JA=/^https?/;async function QA(e){if(e.config.emulator)return;const{authorizedDomains:t}=await XA(e);for(const n of t)try{if(ZA(n))return}catch{}Dt(e,"unauthorized-domain")}function ZA(e){const t=Kc(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!JA.test(n))return!1;if(qA.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eP=new Wo(3e4,6e4);function Hm(){const e=bt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function tP(e){return new Promise((t,n)=>{var r,i,o;function a(){Hm(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Hm(),n(Et(e,"network-request-failed"))},timeout:eP.get()})}if(!((i=(r=bt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=bt().gapi)===null||o===void 0)&&o.load)a();else{const l=aA("iframefcb");return bt()[l]=()=>{gapi.load?a():n(Et(e,"network-request-failed"))},oA(`${sA()}?onload=${l}`).catch(c=>n(c))}}).catch(t=>{throw Js=null,t})}let Js=null;function nP(e){return Js=Js||tP(e),Js}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rP=new Wo(5e3,15e3),iP="__/auth/iframe",oP="emulator/auth/iframe",sP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},aP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lP(e){const t=e.config;H(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?md(t,oP):`https://${e.config.authDomain}/${iP}`,r={apiKey:t.apiKey,appName:e.name,v:yi},i=aP.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Vo(r).slice(1)}`}async function uP(e){const t=await nP(e),n=bt().gapi;return H(n,e,"internal-error"),t.open({where:document.body,url:lP(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sP,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const a=Et(e,"network-request-failed"),l=bt().setTimeout(()=>{o(a)},rP.get());function c(){bt().clearTimeout(l),i(r)}r.ping(c).then(c,()=>{o(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fP=500,dP=600,hP="_blank",pP="http://localhost";class Vm{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mP(e,t,n,r=fP,i=dP){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},cP),{width:r.toString(),height:i.toString(),top:o,left:a}),d=je().toLowerCase();n&&(l=J0(d)?hP:n),X0(d)&&(t=t||pP,c.scrollbars="yes");const m=Object.entries(c).reduce((y,[C,x])=>`${y}${C}=${x},`,"");if(JC(d)&&l!=="_self")return gP(t||"",l),new Vm(null);const w=window.open(t||"",l,m);H(w,e,"popup-blocked");try{w.focus()}catch{}return new Vm(w)}function gP(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vP="__/auth/handler",yP="emulator/auth/handler",wP=encodeURIComponent("fac");async function Wm(e,t,n,r,i,o){H(e.config.authDomain,e,"auth-domain-config-required"),H(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:yi,eventId:i};if(t instanceof _d){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",vT(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[m,w]of Object.entries({}))a[m]=w}if(t instanceof Go){const m=t.getScopes().filter(w=>w!=="");m.length>0&&(a.scopes=m.join(","))}e.tenantId&&(a.tid=e.tenantId);const l=a;for(const m of Object.keys(l))l[m]===void 0&&delete l[m];const c=await e._getAppCheckToken(),d=c?`#${wP}=${encodeURIComponent(c)}`:"";return`${_P(e)}?${Vo(l).slice(1)}${d}`}function _P({config:e}){return e.emulator?md(e,yP):`https://${e.authDomain}/${vP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu="webStorageSupport";class EP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=c1,this._completeRedirectFn=WA,this._overrideRedirectResult=BA}async _openPopup(t,n,r,i){var o;un((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await Wm(t,n,r,Kc(),i);return mP(t,a,Ed())}async _openRedirect(t,n,r,i){await this._originValidation(t);const o=await Wm(t,n,r,Kc(),i);return kA(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(un(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await uP(t),r=new KA(t);return n.register("authEvent",i=>(H(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Iu,{type:Iu},i=>{var o;const a=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Iu];a!==void 0&&n(!!a),Dt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=QA(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return n1()||q0()||yd()}}const SP=EP;var Gm="@firebase/auth",Km="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kP(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function TP(e){Lt(new It("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;H(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:r1(e)},d=new rA(r,i,o,c);return uA(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Lt(new It("auth-internal",t=>{const n=al(t.getProvider("auth").getImmediate());return(r=>new IP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ct(Gm,Km,kP(e)),ct(Gm,Km,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CP=5*60,AP=O0("authIdTokenMaxAge")||CP;let Ym=null;const PP=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>AP)return;const i=n==null?void 0:n.token;Ym!==i&&(Ym=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function xP(e=fd()){const t=Tr(e,"auth");if(t.isInitialized())return t.getImmediate();const n=lA(e,{popupRedirectResolver:SP,persistence:[bA,EA,c1]}),r=O0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=PP(o.toString());yA(n,a,()=>a(n.currentUser)),vA(n,l=>a(l))}}const i=x0("auth");return i&&cA(n,`http://${i}`),n}function RP(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}iA({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=Et("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",RP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});TP("Browser");const y1="@firebase/installations",Id="0.6.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1=1e4,_1=`w:${Id}`,E1="FIS_v2",OP="https://firebaseinstallations.googleapis.com/v1",NP=60*60*1e3,bP="installations",LP="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DP={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},wr=new kr(bP,LP,DP);function S1(e){return e instanceof kt&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I1({projectId:e}){return`${OP}/projects/${e}/installations`}function k1(e){return{token:e.token,requestStatus:2,expiresIn:FP(e.expiresIn),creationTime:Date.now()}}async function T1(e,t){const r=(await t.json()).error;return wr.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function C1({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function MP(e,{refreshToken:t}){const n=C1(e);return n.append("Authorization",UP(t)),n}async function A1(e){const t=await e();return t.status>=500&&t.status<600?e():t}function FP(e){return Number(e.replace("s","000"))}function UP(e){return`${E1} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jP({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=I1(e),i=C1(e),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const a={fid:n,authVersion:E1,appId:e.appId,sdkVersion:_1},l={method:"POST",headers:i,body:JSON.stringify(a)},c=await A1(()=>fetch(r,l));if(c.ok){const d=await c.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:k1(d.authToken)}}else throw await T1("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P1(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zP(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $P=/^[cdef][\w-]{21}$/,qc="";function BP(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=HP(e);return $P.test(n)?n:qc}catch{return qc}}function HP(e){return zP(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x1=new Map;function R1(e,t){const n=cl(e);O1(n,t),VP(n,t)}function O1(e,t){const n=x1.get(e);if(n)for(const r of n)r(t)}function VP(e,t){const n=WP();n&&n.postMessage({key:e,fid:t}),GP()}let ar=null;function WP(){return!ar&&"BroadcastChannel"in self&&(ar=new BroadcastChannel("[Firebase] FID Change"),ar.onmessage=e=>{O1(e.data.key,e.data.fid)}),ar}function GP(){x1.size===0&&ar&&(ar.close(),ar=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KP="firebase-installations-database",YP=1,_r="firebase-installations-store";let ku=null;function kd(){return ku||(ku=F0(KP,YP,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(_r)}}})),ku}async function La(e,t){const n=cl(e),i=(await kd()).transaction(_r,"readwrite"),o=i.objectStore(_r),a=await o.get(n);return await o.put(t,n),await i.done,(!a||a.fid!==t.fid)&&R1(e,t.fid),t}async function N1(e){const t=cl(e),r=(await kd()).transaction(_r,"readwrite");await r.objectStore(_r).delete(t),await r.done}async function fl(e,t){const n=cl(e),i=(await kd()).transaction(_r,"readwrite"),o=i.objectStore(_r),a=await o.get(n),l=t(a);return l===void 0?await o.delete(n):await o.put(l,n),await i.done,l&&(!a||a.fid!==l.fid)&&R1(e,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Td(e){let t;const n=await fl(e.appConfig,r=>{const i=XP(r),o=qP(e,i);return t=o.registrationPromise,o.installationEntry});return n.fid===qc?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function XP(e){const t=e||{fid:BP(),registrationStatus:0};return b1(t)}function qP(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(wr.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=JP(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:QP(e)}:{installationEntry:t}}async function JP(e,t){try{const n=await jP(e,t);return La(e.appConfig,n)}catch(n){throw S1(n)&&n.customData.serverCode===409?await N1(e.appConfig):await La(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function QP(e){let t=await Xm(e.appConfig);for(;t.registrationStatus===1;)await P1(100),t=await Xm(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Td(e);return r||n}return t}function Xm(e){return fl(e,t=>{if(!t)throw wr.create("installation-not-found");return b1(t)})}function b1(e){return ZP(e)?{fid:e.fid,registrationStatus:0}:e}function ZP(e){return e.registrationStatus===1&&e.registrationTime+w1<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ex({appConfig:e,heartbeatServiceProvider:t},n){const r=tx(e,n),i=MP(e,n),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const a={installation:{sdkVersion:_1,appId:e.appId}},l={method:"POST",headers:i,body:JSON.stringify(a)},c=await A1(()=>fetch(r,l));if(c.ok){const d=await c.json();return k1(d)}else throw await T1("Generate Auth Token",c)}function tx(e,{fid:t}){return`${I1(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cd(e,t=!1){let n;const r=await fl(e.appConfig,o=>{if(!L1(o))throw wr.create("not-registered");const a=o.authToken;if(!t&&ix(a))return o;if(a.requestStatus===1)return n=nx(e,t),o;{if(!navigator.onLine)throw wr.create("app-offline");const l=sx(o);return n=rx(e,l),l}});return n?await n:r.authToken}async function nx(e,t){let n=await qm(e.appConfig);for(;n.authToken.requestStatus===1;)await P1(100),n=await qm(e.appConfig);const r=n.authToken;return r.requestStatus===0?Cd(e,t):r}function qm(e){return fl(e,t=>{if(!L1(t))throw wr.create("not-registered");const n=t.authToken;return ax(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function rx(e,t){try{const n=await ex(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await La(e.appConfig,r),n}catch(n){if(S1(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await N1(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await La(e.appConfig,r)}throw n}}function L1(e){return e!==void 0&&e.registrationStatus===2}function ix(e){return e.requestStatus===2&&!ox(e)}function ox(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+NP}function sx(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function ax(e){return e.requestStatus===1&&e.requestTime+w1<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lx(e){const t=e,{installationEntry:n,registrationPromise:r}=await Td(t);return r?r.catch(console.error):Cd(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ux(e,t=!1){const n=e;return await cx(n),(await Cd(n,t)).token}async function cx(e){const{registrationPromise:t}=await Td(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fx(e){if(!e||!e.options)throw Tu("App Configuration");if(!e.name)throw Tu("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Tu(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Tu(e){return wr.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D1="installations",dx="installations-internal",hx=e=>{const t=e.getProvider("app").getImmediate(),n=fx(t),r=Tr(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},px=e=>{const t=e.getProvider("app").getImmediate(),n=Tr(t,D1).getImmediate();return{getId:()=>lx(n),getToken:i=>ux(n,i)}};function mx(){Lt(new It(D1,hx,"PUBLIC")),Lt(new It(dx,px,"PRIVATE"))}mx();ct(y1,Id);ct(y1,Id,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da="analytics",gx="firebase_id",vx="origin",yx=60*1e3,wx="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ad="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe=new sl("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _x={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ze=new kr("analytics","Analytics",_x);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ex(e){if(!e.startsWith(Ad)){const t=Ze.create("invalid-gtag-resource",{gtagURL:e});return Xe.warn(t.message),""}return e}function M1(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Sx(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function Ix(e,t){const n=Sx("firebase-js-sdk-policy",{createScriptURL:Ex}),r=document.createElement("script"),i=`${Ad}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function kx(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Tx(e,t,n,r,i,o){const a=r[i];try{if(a)await t[a];else{const c=(await M1(n)).find(d=>d.measurementId===i);c&&await t[c.appId]}}catch(l){Xe.error(l)}e("config",i,o)}async function Cx(e,t,n,r,i){try{let o=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const l=await M1(n);for(const c of a){const d=l.find(w=>w.measurementId===c),m=d&&t[d.appId];if(m)o.push(m);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(o){Xe.error(o)}}function Ax(e,t,n,r){async function i(o,...a){try{if(o==="event"){const[l,c]=a;await Cx(e,t,n,l,c)}else if(o==="config"){const[l,c]=a;await Tx(e,t,n,r,l,c)}else if(o==="consent"){const[l,c]=a;e("consent",l,c)}else if(o==="get"){const[l,c,d]=a;e("get",l,c,d)}else if(o==="set"){const[l]=a;e("set",l)}else e(o,...a)}catch(l){Xe.error(l)}}return i}function Px(e,t,n,r,i){let o=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=Ax(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}function xx(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Ad)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rx=30,Ox=1e3;class Nx{constructor(t={},n=Ox){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const F1=new Nx;function bx(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Lx(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:bx(r)},o=wx.replace("{app-id}",n),a=await fetch(o,i);if(a.status!==200&&a.status!==304){let l="";try{const c=await a.json();!((t=c.error)===null||t===void 0)&&t.message&&(l=c.error.message)}catch{}throw Ze.create("config-fetch-failed",{httpStatus:a.status,responseMessage:l})}return a.json()}async function Dx(e,t=F1,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw Ze.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw Ze.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new Ux;return setTimeout(async()=>{l.abort()},yx),U1({appId:r,apiKey:i,measurementId:o},a,l,t)}async function U1(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=F1){var o;const{appId:a,measurementId:l}=e;try{await Mx(r,t)}catch(c){if(l)return Xe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:a,measurementId:l};throw c}try{const c=await Lx(e);return i.deleteThrottleMetadata(a),c}catch(c){const d=c;if(!Fx(d)){if(i.deleteThrottleMetadata(a),l)return Xe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:a,measurementId:l};throw c}const m=Number((o=d==null?void 0:d.customData)===null||o===void 0?void 0:o.httpStatus)===503?Im(n,i.intervalMillis,Rx):Im(n,i.intervalMillis),w={throttleEndTimeMillis:Date.now()+m,backoffCount:n+1};return i.setThrottleMetadata(a,w),Xe.debug(`Calling attemptFetch again in ${m} millis`),U1(e,w,r,i)}}function Mx(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(o),r(Ze.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Fx(e){if(!(e instanceof kt)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Ux{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function jx(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const o=await t,a=Object.assign(Object.assign({},r),{send_to:o});e("event",n,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zx(){if(b0())try{await L0()}catch(e){return Xe.warn(Ze.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Xe.warn(Ze.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function $x(e,t,n,r,i,o,a){var l;const c=Dx(e);c.then(C=>{n[C.measurementId]=C.appId,e.options.measurementId&&C.measurementId!==e.options.measurementId&&Xe.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${C.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(C=>Xe.error(C)),t.push(c);const d=zx().then(C=>{if(C)return r.getId()}),[m,w]=await Promise.all([c,d]);xx(o)||Ix(o,m.measurementId),i("js",new Date);const y=(l=a==null?void 0:a.config)!==null&&l!==void 0?l:{};return y[vx]="firebase",y.update=!0,w!=null&&(y[gx]=w),i("config",m.measurementId,y),m.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{constructor(t){this.app=t}_delete(){return delete ao[this.app.options.appId],Promise.resolve()}}let ao={},Jm=[];const Qm={};let Cu="dataLayer",Hx="gtag",Zm,j1,eg=!1;function Vx(){const e=[];if(N0()&&e.push("This is a browser extension environment."),hT()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ze.create("invalid-analytics-context",{errorInfo:t});Xe.warn(n.message)}}function Wx(e,t,n){Vx();const r=e.options.appId;if(!r)throw Ze.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Xe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ze.create("no-api-key");if(ao[r]!=null)throw Ze.create("already-exists",{id:r});if(!eg){kx(Cu);const{wrappedGtag:o,gtagCore:a}=Px(ao,Jm,Qm,Cu,Hx);j1=o,Zm=a,eg=!0}return ao[r]=$x(e,Jm,Qm,t,Zm,Cu,n),new Bx(e)}function Gx(e=fd()){e=Yn(e);const t=Tr(e,Da);return t.isInitialized()?t.getImmediate():Kx(e)}function Kx(e,t={}){const n=Tr(e,Da);if(n.isInitialized()){const i=n.getImmediate();if(Oo(t,n.getOptions()))return i;throw Ze.create("already-initialized")}return n.initialize({options:t})}function Yx(e,t,n,r){e=Yn(e),jx(j1,ao[e.app.options.appId],t,n,r).catch(i=>Xe.error(i))}const tg="@firebase/analytics",ng="0.10.10";function Xx(){Lt(new It(Da,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return Wx(r,i,n)},"PUBLIC")),Lt(new It("analytics-internal",e,"PRIVATE")),ct(tg,ng),ct(tg,ng,"esm2017");function e(t){try{const n=t.getProvider(Da).getImmediate();return{logEvent:(r,i,o)=>Yx(n,r,i,o)}}catch(n){throw Ze.create("interop-component-reg-failed",{reason:n})}}}Xx();var rg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var z1;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,p){function v(){}v.prototype=p.prototype,E.D=p.prototype,E.prototype=new v,E.prototype.constructor=E,E.C=function(S,T,P){for(var I=Array(arguments.length-2),it=2;it<arguments.length;it++)I[it-2]=arguments[it];return p.prototype[T].apply(S,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,p,v){v||(v=0);var S=Array(16);if(typeof p=="string")for(var T=0;16>T;++T)S[T]=p.charCodeAt(v++)|p.charCodeAt(v++)<<8|p.charCodeAt(v++)<<16|p.charCodeAt(v++)<<24;else for(T=0;16>T;++T)S[T]=p[v++]|p[v++]<<8|p[v++]<<16|p[v++]<<24;p=E.g[0],v=E.g[1],T=E.g[2];var P=E.g[3],I=p+(P^v&(T^P))+S[0]+3614090360&4294967295;p=v+(I<<7&4294967295|I>>>25),I=P+(T^p&(v^T))+S[1]+3905402710&4294967295,P=p+(I<<12&4294967295|I>>>20),I=T+(v^P&(p^v))+S[2]+606105819&4294967295,T=P+(I<<17&4294967295|I>>>15),I=v+(p^T&(P^p))+S[3]+3250441966&4294967295,v=T+(I<<22&4294967295|I>>>10),I=p+(P^v&(T^P))+S[4]+4118548399&4294967295,p=v+(I<<7&4294967295|I>>>25),I=P+(T^p&(v^T))+S[5]+1200080426&4294967295,P=p+(I<<12&4294967295|I>>>20),I=T+(v^P&(p^v))+S[6]+2821735955&4294967295,T=P+(I<<17&4294967295|I>>>15),I=v+(p^T&(P^p))+S[7]+4249261313&4294967295,v=T+(I<<22&4294967295|I>>>10),I=p+(P^v&(T^P))+S[8]+1770035416&4294967295,p=v+(I<<7&4294967295|I>>>25),I=P+(T^p&(v^T))+S[9]+2336552879&4294967295,P=p+(I<<12&4294967295|I>>>20),I=T+(v^P&(p^v))+S[10]+4294925233&4294967295,T=P+(I<<17&4294967295|I>>>15),I=v+(p^T&(P^p))+S[11]+2304563134&4294967295,v=T+(I<<22&4294967295|I>>>10),I=p+(P^v&(T^P))+S[12]+1804603682&4294967295,p=v+(I<<7&4294967295|I>>>25),I=P+(T^p&(v^T))+S[13]+4254626195&4294967295,P=p+(I<<12&4294967295|I>>>20),I=T+(v^P&(p^v))+S[14]+2792965006&4294967295,T=P+(I<<17&4294967295|I>>>15),I=v+(p^T&(P^p))+S[15]+1236535329&4294967295,v=T+(I<<22&4294967295|I>>>10),I=p+(T^P&(v^T))+S[1]+4129170786&4294967295,p=v+(I<<5&4294967295|I>>>27),I=P+(v^T&(p^v))+S[6]+3225465664&4294967295,P=p+(I<<9&4294967295|I>>>23),I=T+(p^v&(P^p))+S[11]+643717713&4294967295,T=P+(I<<14&4294967295|I>>>18),I=v+(P^p&(T^P))+S[0]+3921069994&4294967295,v=T+(I<<20&4294967295|I>>>12),I=p+(T^P&(v^T))+S[5]+3593408605&4294967295,p=v+(I<<5&4294967295|I>>>27),I=P+(v^T&(p^v))+S[10]+38016083&4294967295,P=p+(I<<9&4294967295|I>>>23),I=T+(p^v&(P^p))+S[15]+3634488961&4294967295,T=P+(I<<14&4294967295|I>>>18),I=v+(P^p&(T^P))+S[4]+3889429448&4294967295,v=T+(I<<20&4294967295|I>>>12),I=p+(T^P&(v^T))+S[9]+568446438&4294967295,p=v+(I<<5&4294967295|I>>>27),I=P+(v^T&(p^v))+S[14]+3275163606&4294967295,P=p+(I<<9&4294967295|I>>>23),I=T+(p^v&(P^p))+S[3]+4107603335&4294967295,T=P+(I<<14&4294967295|I>>>18),I=v+(P^p&(T^P))+S[8]+1163531501&4294967295,v=T+(I<<20&4294967295|I>>>12),I=p+(T^P&(v^T))+S[13]+2850285829&4294967295,p=v+(I<<5&4294967295|I>>>27),I=P+(v^T&(p^v))+S[2]+4243563512&4294967295,P=p+(I<<9&4294967295|I>>>23),I=T+(p^v&(P^p))+S[7]+1735328473&4294967295,T=P+(I<<14&4294967295|I>>>18),I=v+(P^p&(T^P))+S[12]+2368359562&4294967295,v=T+(I<<20&4294967295|I>>>12),I=p+(v^T^P)+S[5]+4294588738&4294967295,p=v+(I<<4&4294967295|I>>>28),I=P+(p^v^T)+S[8]+2272392833&4294967295,P=p+(I<<11&4294967295|I>>>21),I=T+(P^p^v)+S[11]+1839030562&4294967295,T=P+(I<<16&4294967295|I>>>16),I=v+(T^P^p)+S[14]+4259657740&4294967295,v=T+(I<<23&4294967295|I>>>9),I=p+(v^T^P)+S[1]+2763975236&4294967295,p=v+(I<<4&4294967295|I>>>28),I=P+(p^v^T)+S[4]+1272893353&4294967295,P=p+(I<<11&4294967295|I>>>21),I=T+(P^p^v)+S[7]+4139469664&4294967295,T=P+(I<<16&4294967295|I>>>16),I=v+(T^P^p)+S[10]+3200236656&4294967295,v=T+(I<<23&4294967295|I>>>9),I=p+(v^T^P)+S[13]+681279174&4294967295,p=v+(I<<4&4294967295|I>>>28),I=P+(p^v^T)+S[0]+3936430074&4294967295,P=p+(I<<11&4294967295|I>>>21),I=T+(P^p^v)+S[3]+3572445317&4294967295,T=P+(I<<16&4294967295|I>>>16),I=v+(T^P^p)+S[6]+76029189&4294967295,v=T+(I<<23&4294967295|I>>>9),I=p+(v^T^P)+S[9]+3654602809&4294967295,p=v+(I<<4&4294967295|I>>>28),I=P+(p^v^T)+S[12]+3873151461&4294967295,P=p+(I<<11&4294967295|I>>>21),I=T+(P^p^v)+S[15]+530742520&4294967295,T=P+(I<<16&4294967295|I>>>16),I=v+(T^P^p)+S[2]+3299628645&4294967295,v=T+(I<<23&4294967295|I>>>9),I=p+(T^(v|~P))+S[0]+4096336452&4294967295,p=v+(I<<6&4294967295|I>>>26),I=P+(v^(p|~T))+S[7]+1126891415&4294967295,P=p+(I<<10&4294967295|I>>>22),I=T+(p^(P|~v))+S[14]+2878612391&4294967295,T=P+(I<<15&4294967295|I>>>17),I=v+(P^(T|~p))+S[5]+4237533241&4294967295,v=T+(I<<21&4294967295|I>>>11),I=p+(T^(v|~P))+S[12]+1700485571&4294967295,p=v+(I<<6&4294967295|I>>>26),I=P+(v^(p|~T))+S[3]+2399980690&4294967295,P=p+(I<<10&4294967295|I>>>22),I=T+(p^(P|~v))+S[10]+4293915773&4294967295,T=P+(I<<15&4294967295|I>>>17),I=v+(P^(T|~p))+S[1]+2240044497&4294967295,v=T+(I<<21&4294967295|I>>>11),I=p+(T^(v|~P))+S[8]+1873313359&4294967295,p=v+(I<<6&4294967295|I>>>26),I=P+(v^(p|~T))+S[15]+4264355552&4294967295,P=p+(I<<10&4294967295|I>>>22),I=T+(p^(P|~v))+S[6]+2734768916&4294967295,T=P+(I<<15&4294967295|I>>>17),I=v+(P^(T|~p))+S[13]+1309151649&4294967295,v=T+(I<<21&4294967295|I>>>11),I=p+(T^(v|~P))+S[4]+4149444226&4294967295,p=v+(I<<6&4294967295|I>>>26),I=P+(v^(p|~T))+S[11]+3174756917&4294967295,P=p+(I<<10&4294967295|I>>>22),I=T+(p^(P|~v))+S[2]+718787259&4294967295,T=P+(I<<15&4294967295|I>>>17),I=v+(P^(T|~p))+S[9]+3951481745&4294967295,E.g[0]=E.g[0]+p&4294967295,E.g[1]=E.g[1]+(T+(I<<21&4294967295|I>>>11))&4294967295,E.g[2]=E.g[2]+T&4294967295,E.g[3]=E.g[3]+P&4294967295}r.prototype.u=function(E,p){p===void 0&&(p=E.length);for(var v=p-this.blockSize,S=this.B,T=this.h,P=0;P<p;){if(T==0)for(;P<=v;)i(this,E,P),P+=this.blockSize;if(typeof E=="string"){for(;P<p;)if(S[T++]=E.charCodeAt(P++),T==this.blockSize){i(this,S),T=0;break}}else for(;P<p;)if(S[T++]=E[P++],T==this.blockSize){i(this,S),T=0;break}}this.h=T,this.o+=p},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var p=1;p<E.length-8;++p)E[p]=0;var v=8*this.o;for(p=E.length-8;p<E.length;++p)E[p]=v&255,v/=256;for(this.u(E),E=Array(16),p=v=0;4>p;++p)for(var S=0;32>S;S+=8)E[v++]=this.g[p]>>>S&255;return E};function o(E,p){var v=l;return Object.prototype.hasOwnProperty.call(v,E)?v[E]:v[E]=p(E)}function a(E,p){this.h=p;for(var v=[],S=!0,T=E.length-1;0<=T;T--){var P=E[T]|0;S&&P==p||(v[T]=P,S=!1)}this.g=v}var l={};function c(E){return-128<=E&&128>E?o(E,function(p){return new a([p|0],0>p?-1:0)}):new a([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return w;if(0>E)return N(d(-E));for(var p=[],v=1,S=0;E>=v;S++)p[S]=E/v|0,v*=4294967296;return new a(p,0)}function m(E,p){if(E.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(E.charAt(0)=="-")return N(m(E.substring(1),p));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=d(Math.pow(p,8)),S=w,T=0;T<E.length;T+=8){var P=Math.min(8,E.length-T),I=parseInt(E.substring(T,T+P),p);8>P?(P=d(Math.pow(p,P)),S=S.j(P).add(d(I))):(S=S.j(v),S=S.add(d(I)))}return S}var w=c(0),y=c(1),C=c(16777216);e=a.prototype,e.m=function(){if(O(this))return-N(this).m();for(var E=0,p=1,v=0;v<this.g.length;v++){var S=this.i(v);E+=(0<=S?S:4294967296+S)*p,p*=4294967296}return E},e.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(x(this))return"0";if(O(this))return"-"+N(this).toString(E);for(var p=d(Math.pow(E,6)),v=this,S="";;){var T=b(v,p).g;v=_(v,T.j(p));var P=((0<v.g.length?v.g[0]:v.h)>>>0).toString(E);if(v=T,x(v))return P+S;for(;6>P.length;)P="0"+P;S=P+S}},e.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function x(E){if(E.h!=0)return!1;for(var p=0;p<E.g.length;p++)if(E.g[p]!=0)return!1;return!0}function O(E){return E.h==-1}e.l=function(E){return E=_(this,E),O(E)?-1:x(E)?0:1};function N(E){for(var p=E.g.length,v=[],S=0;S<p;S++)v[S]=~E.g[S];return new a(v,~E.h).add(y)}e.abs=function(){return O(this)?N(this):this},e.add=function(E){for(var p=Math.max(this.g.length,E.g.length),v=[],S=0,T=0;T<=p;T++){var P=S+(this.i(T)&65535)+(E.i(T)&65535),I=(P>>>16)+(this.i(T)>>>16)+(E.i(T)>>>16);S=I>>>16,P&=65535,I&=65535,v[T]=I<<16|P}return new a(v,v[v.length-1]&-2147483648?-1:0)};function _(E,p){return E.add(N(p))}e.j=function(E){if(x(this)||x(E))return w;if(O(this))return O(E)?N(this).j(N(E)):N(N(this).j(E));if(O(E))return N(this.j(N(E)));if(0>this.l(C)&&0>E.l(C))return d(this.m()*E.m());for(var p=this.g.length+E.g.length,v=[],S=0;S<2*p;S++)v[S]=0;for(S=0;S<this.g.length;S++)for(var T=0;T<E.g.length;T++){var P=this.i(S)>>>16,I=this.i(S)&65535,it=E.i(T)>>>16,Xn=E.i(T)&65535;v[2*S+2*T]+=I*Xn,g(v,2*S+2*T),v[2*S+2*T+1]+=P*Xn,g(v,2*S+2*T+1),v[2*S+2*T+1]+=I*it,g(v,2*S+2*T+1),v[2*S+2*T+2]+=P*it,g(v,2*S+2*T+2)}for(S=0;S<p;S++)v[S]=v[2*S+1]<<16|v[2*S];for(S=p;S<2*p;S++)v[S]=0;return new a(v,0)};function g(E,p){for(;(E[p]&65535)!=E[p];)E[p+1]+=E[p]>>>16,E[p]&=65535,p++}function k(E,p){this.g=E,this.h=p}function b(E,p){if(x(p))throw Error("division by zero");if(x(E))return new k(w,w);if(O(E))return p=b(N(E),p),new k(N(p.g),N(p.h));if(O(p))return p=b(E,N(p)),new k(N(p.g),p.h);if(30<E.g.length){if(O(E)||O(p))throw Error("slowDivide_ only works with positive integers.");for(var v=y,S=p;0>=S.l(E);)v=D(v),S=D(S);var T=j(v,1),P=j(S,1);for(S=j(S,2),v=j(v,2);!x(S);){var I=P.add(S);0>=I.l(E)&&(T=T.add(v),P=I),S=j(S,1),v=j(v,1)}return p=_(E,T.j(p)),new k(T,p)}for(T=w;0<=E.l(p);){for(v=Math.max(1,Math.floor(E.m()/p.m())),S=Math.ceil(Math.log(v)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),P=d(v),I=P.j(p);O(I)||0<I.l(E);)v-=S,P=d(v),I=P.j(p);x(P)&&(P=y),T=T.add(P),E=_(E,I)}return new k(T,E)}e.A=function(E){return b(this,E).h},e.and=function(E){for(var p=Math.max(this.g.length,E.g.length),v=[],S=0;S<p;S++)v[S]=this.i(S)&E.i(S);return new a(v,this.h&E.h)},e.or=function(E){for(var p=Math.max(this.g.length,E.g.length),v=[],S=0;S<p;S++)v[S]=this.i(S)|E.i(S);return new a(v,this.h|E.h)},e.xor=function(E){for(var p=Math.max(this.g.length,E.g.length),v=[],S=0;S<p;S++)v[S]=this.i(S)^E.i(S);return new a(v,this.h^E.h)};function D(E){for(var p=E.g.length+1,v=[],S=0;S<p;S++)v[S]=E.i(S)<<1|E.i(S-1)>>>31;return new a(v,E.h)}function j(E,p){var v=p>>5;p%=32;for(var S=E.g.length-v,T=[],P=0;P<S;P++)T[P]=0<p?E.i(P+v)>>>p|E.i(P+v+1)<<32-p:E.i(P+v);return new a(T,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,z1=a}).apply(typeof rg<"u"?rg:typeof self<"u"?self:typeof window<"u"?window:{});var Os=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,u,f){return s==Array.prototype||s==Object.prototype||(s[u]=f.value),s};function n(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Os=="object"&&Os];for(var u=0;u<s.length;++u){var f=s[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(s,u){if(u)e:{var f=r;s=s.split(".");for(var h=0;h<s.length-1;h++){var A=s[h];if(!(A in f))break e;f=f[A]}s=s[s.length-1],h=f[s],u=u(h),u!=h&&u!=null&&t(f,s,{configurable:!0,writable:!0,value:u})}}function o(s,u){s instanceof String&&(s+="");var f=0,h=!1,A={next:function(){if(!h&&f<s.length){var R=f++;return{value:u(R,s[R]),done:!1}}return h=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}i("Array.prototype.values",function(s){return s||function(){return o(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(s){var u=typeof s;return u=u!="object"?u:s?Array.isArray(s)?"array":u:"null",u=="array"||u=="object"&&typeof s.length=="number"}function d(s){var u=typeof s;return u=="object"&&s!=null||u=="function"}function m(s,u,f){return s.call.apply(s.bind,arguments)}function w(s,u,f){if(!s)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,h),s.apply(u,A)}}return function(){return s.apply(u,arguments)}}function y(s,u,f){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:w,y.apply(null,arguments)}function C(s,u){var f=Array.prototype.slice.call(arguments,1);return function(){var h=f.slice();return h.push.apply(h,arguments),s.apply(this,h)}}function x(s,u){function f(){}f.prototype=u.prototype,s.aa=u.prototype,s.prototype=new f,s.prototype.constructor=s,s.Qb=function(h,A,R){for(var U=Array(arguments.length-2),te=2;te<arguments.length;te++)U[te-2]=arguments[te];return u.prototype[A].apply(h,U)}}function O(s){const u=s.length;if(0<u){const f=Array(u);for(let h=0;h<u;h++)f[h]=s[h];return f}return[]}function N(s,u){for(let f=1;f<arguments.length;f++){const h=arguments[f];if(c(h)){const A=s.length||0,R=h.length||0;s.length=A+R;for(let U=0;U<R;U++)s[A+U]=h[U]}else s.push(h)}}class _{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function g(s){return/^[\s\xa0]*$/.test(s)}function k(){var s=l.navigator;return s&&(s=s.userAgent)?s:""}function b(s){return b[" "](s),s}b[" "]=function(){};var D=k().indexOf("Gecko")!=-1&&!(k().toLowerCase().indexOf("webkit")!=-1&&k().indexOf("Edge")==-1)&&!(k().indexOf("Trident")!=-1||k().indexOf("MSIE")!=-1)&&k().indexOf("Edge")==-1;function j(s,u,f){for(const h in s)u.call(f,s[h],h,s)}function E(s,u){for(const f in s)u.call(void 0,s[f],f,s)}function p(s){const u={};for(const f in s)u[f]=s[f];return u}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(s,u){let f,h;for(let A=1;A<arguments.length;A++){h=arguments[A];for(f in h)s[f]=h[f];for(let R=0;R<v.length;R++)f=v[R],Object.prototype.hasOwnProperty.call(h,f)&&(s[f]=h[f])}}function T(s){var u=1;s=s.split(":");const f=[];for(;0<u&&s.length;)f.push(s.shift()),u--;return s.length&&f.push(s.join(":")),f}function P(s){l.setTimeout(()=>{throw s},0)}function I(){var s=V;let u=null;return s.g&&(u=s.g,s.g=s.g.next,s.g||(s.h=null),u.next=null),u}class it{constructor(){this.h=this.g=null}add(u,f){const h=Xn.get();h.set(u,f),this.h?this.h.next=h:this.g=h,this.h=h}}var Xn=new _(()=>new _i,s=>s.reset());class _i{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Ft,z=!1,V=new it,W=()=>{const s=l.Promise.resolve(void 0);Ft=()=>{s.then(le)}};var le=()=>{for(var s;s=I();){try{s.h.call(s.g)}catch(f){P(f)}var u=Xn;u.j(s),100>u.h&&(u.h++,s.next=u.g,u.g=s)}z=!1};function ee(){this.s=this.s,this.C=this.C}ee.prototype.s=!1,ee.prototype.ma=function(){this.s||(this.s=!0,this.N())},ee.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(s,u){this.type=s,this.g=this.target=u,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var Ut=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var s=!1,u=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return s}();function jt(s,u){if(pe.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var f=this.type=s.type,h=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=u,u=s.relatedTarget){if(D){e:{try{b(u.nodeName);var A=!0;break e}catch{}A=!1}A||(u=null)}}else f=="mouseover"?u=s.fromElement:f=="mouseout"&&(u=s.toElement);this.relatedTarget=u,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:zt[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&jt.aa.h.call(this)}}x(jt,pe);var zt={2:"touch",3:"pen",4:"mouse"};jt.prototype.h=function(){jt.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var $t="closure_listenable_"+(1e6*Math.random()|0),V1=0;function W1(s,u,f,h,A){this.listener=s,this.proxy=null,this.src=u,this.type=f,this.capture=!!h,this.ha=A,this.key=++V1,this.da=this.fa=!1}function Xo(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function qo(s){this.src=s,this.g={},this.h=0}qo.prototype.add=function(s,u,f,h,A){var R=s.toString();s=this.g[R],s||(s=this.g[R]=[],this.h++);var U=hl(s,u,h,A);return-1<U?(u=s[U],f||(u.fa=!1)):(u=new W1(u,this.src,R,!!h,A),u.fa=f,s.push(u)),u};function dl(s,u){var f=u.type;if(f in s.g){var h=s.g[f],A=Array.prototype.indexOf.call(h,u,void 0),R;(R=0<=A)&&Array.prototype.splice.call(h,A,1),R&&(Xo(u),s.g[f].length==0&&(delete s.g[f],s.h--))}}function hl(s,u,f,h){for(var A=0;A<s.length;++A){var R=s[A];if(!R.da&&R.listener==u&&R.capture==!!f&&R.ha==h)return A}return-1}var pl="closure_lm_"+(1e6*Math.random()|0),ml={};function Nd(s,u,f,h,A){if(Array.isArray(u)){for(var R=0;R<u.length;R++)Nd(s,u[R],f,h,A);return null}return f=Dd(f),s&&s[$t]?s.K(u,f,d(h)?!!h.capture:!!h,A):G1(s,u,f,!1,h,A)}function G1(s,u,f,h,A,R){if(!u)throw Error("Invalid event type");var U=d(A)?!!A.capture:!!A,te=vl(s);if(te||(s[pl]=te=new qo(s)),f=te.add(u,f,h,U,R),f.proxy)return f;if(h=K1(),f.proxy=h,h.src=s,h.listener=f,s.addEventListener)Ut||(A=U),A===void 0&&(A=!1),s.addEventListener(u.toString(),h,A);else if(s.attachEvent)s.attachEvent(Ld(u.toString()),h);else if(s.addListener&&s.removeListener)s.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return f}function K1(){function s(f){return u.call(s.src,s.listener,f)}const u=Y1;return s}function bd(s,u,f,h,A){if(Array.isArray(u))for(var R=0;R<u.length;R++)bd(s,u[R],f,h,A);else h=d(h)?!!h.capture:!!h,f=Dd(f),s&&s[$t]?(s=s.i,u=String(u).toString(),u in s.g&&(R=s.g[u],f=hl(R,f,h,A),-1<f&&(Xo(R[f]),Array.prototype.splice.call(R,f,1),R.length==0&&(delete s.g[u],s.h--)))):s&&(s=vl(s))&&(u=s.g[u.toString()],s=-1,u&&(s=hl(u,f,h,A)),(f=-1<s?u[s]:null)&&gl(f))}function gl(s){if(typeof s!="number"&&s&&!s.da){var u=s.src;if(u&&u[$t])dl(u.i,s);else{var f=s.type,h=s.proxy;u.removeEventListener?u.removeEventListener(f,h,s.capture):u.detachEvent?u.detachEvent(Ld(f),h):u.addListener&&u.removeListener&&u.removeListener(h),(f=vl(u))?(dl(f,s),f.h==0&&(f.src=null,u[pl]=null)):Xo(s)}}}function Ld(s){return s in ml?ml[s]:ml[s]="on"+s}function Y1(s,u){if(s.da)s=!0;else{u=new jt(u,this);var f=s.listener,h=s.ha||s.src;s.fa&&gl(s),s=f.call(h,u)}return s}function vl(s){return s=s[pl],s instanceof qo?s:null}var yl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Dd(s){return typeof s=="function"?s:(s[yl]||(s[yl]=function(u){return s.handleEvent(u)}),s[yl])}function Ce(){ee.call(this),this.i=new qo(this),this.M=this,this.F=null}x(Ce,ee),Ce.prototype[$t]=!0,Ce.prototype.removeEventListener=function(s,u,f,h){bd(this,s,u,f,h)};function Le(s,u){var f,h=s.F;if(h)for(f=[];h;h=h.F)f.push(h);if(s=s.M,h=u.type||u,typeof u=="string")u=new pe(u,s);else if(u instanceof pe)u.target=u.target||s;else{var A=u;u=new pe(h,s),S(u,A)}if(A=!0,f)for(var R=f.length-1;0<=R;R--){var U=u.g=f[R];A=Jo(U,h,!0,u)&&A}if(U=u.g=s,A=Jo(U,h,!0,u)&&A,A=Jo(U,h,!1,u)&&A,f)for(R=0;R<f.length;R++)U=u.g=f[R],A=Jo(U,h,!1,u)&&A}Ce.prototype.N=function(){if(Ce.aa.N.call(this),this.i){var s=this.i,u;for(u in s.g){for(var f=s.g[u],h=0;h<f.length;h++)Xo(f[h]);delete s.g[u],s.h--}}this.F=null},Ce.prototype.K=function(s,u,f,h){return this.i.add(String(s),u,!1,f,h)},Ce.prototype.L=function(s,u,f,h){return this.i.add(String(s),u,!0,f,h)};function Jo(s,u,f,h){if(u=s.i.g[String(u)],!u)return!0;u=u.concat();for(var A=!0,R=0;R<u.length;++R){var U=u[R];if(U&&!U.da&&U.capture==f){var te=U.listener,Se=U.ha||U.src;U.fa&&dl(s.i,U),A=te.call(Se,h)!==!1&&A}}return A&&!h.defaultPrevented}function Md(s,u,f){if(typeof s=="function")f&&(s=y(s,f));else if(s&&typeof s.handleEvent=="function")s=y(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(s,u||0)}function Fd(s){s.g=Md(()=>{s.g=null,s.i&&(s.i=!1,Fd(s))},s.l);const u=s.h;s.h=null,s.m.apply(null,u)}class X1 extends ee{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Fd(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ei(s){ee.call(this),this.h=s,this.g={}}x(Ei,ee);var Ud=[];function jd(s){j(s.g,function(u,f){this.g.hasOwnProperty(f)&&gl(u)},s),s.g={}}Ei.prototype.N=function(){Ei.aa.N.call(this),jd(this)},Ei.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var wl=l.JSON.stringify,q1=l.JSON.parse,J1=class{stringify(s){return l.JSON.stringify(s,void 0)}parse(s){return l.JSON.parse(s,void 0)}};function _l(){}_l.prototype.h=null;function zd(s){return s.h||(s.h=s.i())}function Q1(){}var Si={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function El(){pe.call(this,"d")}x(El,pe);function Sl(){pe.call(this,"c")}x(Sl,pe);var Cr={},$d=null;function Il(){return $d=$d||new Ce}Cr.La="serverreachability";function Bd(s){pe.call(this,Cr.La,s)}x(Bd,pe);function Ii(s){const u=Il();Le(u,new Bd(u))}Cr.STAT_EVENT="statevent";function Hd(s,u){pe.call(this,Cr.STAT_EVENT,s),this.stat=u}x(Hd,pe);function De(s){const u=Il();Le(u,new Hd(u,s))}Cr.Ma="timingevent";function Vd(s,u){pe.call(this,Cr.Ma,s),this.size=u}x(Vd,pe);function ki(s,u){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){s()},u)}function Ti(){this.g=!0}Ti.prototype.xa=function(){this.g=!1};function Z1(s,u,f,h,A,R){s.info(function(){if(s.g)if(R)for(var U="",te=R.split("&"),Se=0;Se<te.length;Se++){var J=te[Se].split("=");if(1<J.length){var Ae=J[0];J=J[1];var Pe=Ae.split("_");U=2<=Pe.length&&Pe[1]=="type"?U+(Ae+"="+J+"&"):U+(Ae+"=redacted&")}}else U=null;else U=R;return"XMLHTTP REQ ("+h+") [attempt "+A+"]: "+u+`
`+f+`
`+U})}function ew(s,u,f,h,A,R,U){s.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+A+"]: "+u+`
`+f+`
`+R+" "+U})}function Ar(s,u,f,h){s.info(function(){return"XMLHTTP TEXT ("+u+"): "+nw(s,f)+(h?" "+h:"")})}function tw(s,u){s.info(function(){return"TIMEOUT: "+u})}Ti.prototype.info=function(){};function nw(s,u){if(!s.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(s=0;s<f.length;s++)if(Array.isArray(f[s])){var h=f[s];if(!(2>h.length)){var A=h[1];if(Array.isArray(A)&&!(1>A.length)){var R=A[0];if(R!="noop"&&R!="stop"&&R!="close")for(var U=1;U<A.length;U++)A[U]=""}}}}return wl(f)}catch{return u}}var kl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},rw={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Tl;function Qo(){}x(Qo,_l),Qo.prototype.g=function(){return new XMLHttpRequest},Qo.prototype.i=function(){return{}},Tl=new Qo;function hn(s,u,f,h){this.j=s,this.i=u,this.l=f,this.R=h||1,this.U=new Ei(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Wd}function Wd(){this.i=null,this.g="",this.h=!1}var Gd={},Cl={};function Al(s,u,f){s.L=1,s.v=ns(Bt(u)),s.m=f,s.P=!0,Kd(s,null)}function Kd(s,u){s.F=Date.now(),Zo(s),s.A=Bt(s.v);var f=s.A,h=s.R;Array.isArray(h)||(h=[String(h)]),ah(f.i,"t",h),s.C=0,f=s.j.J,s.h=new Wd,s.g=Th(s.j,f?u:null,!s.m),0<s.O&&(s.M=new X1(y(s.Y,s,s.g),s.O)),u=s.U,f=s.g,h=s.ca;var A="readystatechange";Array.isArray(A)||(A&&(Ud[0]=A.toString()),A=Ud);for(var R=0;R<A.length;R++){var U=Nd(f,A[R],h||u.handleEvent,!1,u.h||u);if(!U)break;u.g[U.key]=U}u=s.H?p(s.H):{},s.m?(s.u||(s.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,u)):(s.u="GET",s.g.ea(s.A,s.u,null,u)),Ii(),Z1(s.i,s.u,s.A,s.l,s.R,s.m)}hn.prototype.ca=function(s){s=s.target;const u=this.M;u&&Ht(s)==3?u.j():this.Y(s)},hn.prototype.Y=function(s){try{if(s==this.g)e:{const Pe=Ht(this.g);var u=this.g.Ba();const Rr=this.g.Z();if(!(3>Pe)&&(Pe!=3||this.g&&(this.h.h||this.g.oa()||ph(this.g)))){this.J||Pe!=4||u==7||(u==8||0>=Rr?Ii(3):Ii(2)),Pl(this);var f=this.g.Z();this.X=f;t:if(Yd(this)){var h=ph(this.g);s="";var A=h.length,R=Ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){qn(this),Ci(this);var U="";break t}this.h.i=new l.TextDecoder}for(u=0;u<A;u++)this.h.h=!0,s+=this.h.i.decode(h[u],{stream:!(R&&u==A-1)});h.length=0,this.h.g+=s,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=f==200,ew(this.i,this.u,this.A,this.l,this.R,Pe,f),this.o){if(this.T&&!this.K){t:{if(this.g){var te,Se=this.g;if((te=Se.g?Se.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(te)){var J=te;break t}}J=null}if(f=J)Ar(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xl(this,f);else{this.o=!1,this.s=3,De(12),qn(this),Ci(this);break e}}if(this.P){f=!0;let ht;for(;!this.J&&this.C<U.length;)if(ht=iw(this,U),ht==Cl){Pe==4&&(this.s=4,De(14),f=!1),Ar(this.i,this.l,null,"[Incomplete Response]");break}else if(ht==Gd){this.s=4,De(15),Ar(this.i,this.l,U,"[Invalid Chunk]"),f=!1;break}else Ar(this.i,this.l,ht,null),xl(this,ht);if(Yd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Pe!=4||U.length!=0||this.h.h||(this.s=1,De(16),f=!1),this.o=this.o&&f,!f)Ar(this.i,this.l,U,"[Invalid Chunked Response]"),qn(this),Ci(this);else if(0<U.length&&!this.W){this.W=!0;var Ae=this.j;Ae.g==this&&Ae.ba&&!Ae.M&&(Ae.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),Dl(Ae),Ae.M=!0,De(11))}}else Ar(this.i,this.l,U,null),xl(this,U);Pe==4&&qn(this),this.o&&!this.J&&(Pe==4?Eh(this.j,this):(this.o=!1,Zo(this)))}else Ew(this.g),f==400&&0<U.indexOf("Unknown SID")?(this.s=3,De(12)):(this.s=0,De(13)),qn(this),Ci(this)}}}catch{}finally{}};function Yd(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function iw(s,u){var f=s.C,h=u.indexOf(`
`,f);return h==-1?Cl:(f=Number(u.substring(f,h)),isNaN(f)?Gd:(h+=1,h+f>u.length?Cl:(u=u.slice(h,h+f),s.C=h+f,u)))}hn.prototype.cancel=function(){this.J=!0,qn(this)};function Zo(s){s.S=Date.now()+s.I,Xd(s,s.I)}function Xd(s,u){if(s.B!=null)throw Error("WatchDog timer not null");s.B=ki(y(s.ba,s),u)}function Pl(s){s.B&&(l.clearTimeout(s.B),s.B=null)}hn.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(tw(this.i,this.A),this.L!=2&&(Ii(),De(17)),qn(this),this.s=2,Ci(this)):Xd(this,this.S-s)};function Ci(s){s.j.G==0||s.J||Eh(s.j,s)}function qn(s){Pl(s);var u=s.M;u&&typeof u.ma=="function"&&u.ma(),s.M=null,jd(s.U),s.g&&(u=s.g,s.g=null,u.abort(),u.ma())}function xl(s,u){try{var f=s.j;if(f.G!=0&&(f.g==s||Rl(f.h,s))){if(!s.K&&Rl(f.h,s)&&f.G==3){try{var h=f.Da.g.parse(u)}catch{h=null}if(Array.isArray(h)&&h.length==3){var A=h;if(A[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<s.F)ls(f),ss(f);else break e;Ll(f),De(18)}}else f.za=A[1],0<f.za-f.T&&37500>A[2]&&f.F&&f.v==0&&!f.C&&(f.C=ki(y(f.Za,f),6e3));if(1>=Qd(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Qn(f,11)}else if((s.K||f.g==s)&&ls(f),!g(u))for(A=f.Da.g.parse(u),u=0;u<A.length;u++){let J=A[u];if(f.T=J[0],J=J[1],f.G==2)if(J[0]=="c"){f.K=J[1],f.ia=J[2];const Ae=J[3];Ae!=null&&(f.la=Ae,f.j.info("VER="+f.la));const Pe=J[4];Pe!=null&&(f.Aa=Pe,f.j.info("SVER="+f.Aa));const Rr=J[5];Rr!=null&&typeof Rr=="number"&&0<Rr&&(h=1.5*Rr,f.L=h,f.j.info("backChannelRequestTimeoutMs_="+h)),h=f;const ht=s.g;if(ht){const us=ht.g?ht.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(us){var R=h.h;R.g||us.indexOf("spdy")==-1&&us.indexOf("quic")==-1&&us.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Ol(R,R.h),R.h=null))}if(h.D){const Ml=ht.g?ht.g.getResponseHeader("X-HTTP-Session-Id"):null;Ml&&(h.ya=Ml,re(h.I,h.D,Ml))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-s.F,f.j.info("Handshake RTT: "+f.R+"ms")),h=f;var U=s;if(h.qa=kh(h,h.J?h.ia:null,h.W),U.K){Zd(h.h,U);var te=U,Se=h.L;Se&&(te.I=Se),te.B&&(Pl(te),Zo(te)),h.g=U}else wh(h);0<f.i.length&&as(f)}else J[0]!="stop"&&J[0]!="close"||Qn(f,7);else f.G==3&&(J[0]=="stop"||J[0]=="close"?J[0]=="stop"?Qn(f,7):bl(f):J[0]!="noop"&&f.l&&f.l.ta(J),f.v=0)}}Ii(4)}catch{}}var ow=class{constructor(s,u){this.g=s,this.map=u}};function qd(s){this.l=s||10,l.PerformanceNavigationTiming?(s=l.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Jd(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Qd(s){return s.h?1:s.g?s.g.size:0}function Rl(s,u){return s.h?s.h==u:s.g?s.g.has(u):!1}function Ol(s,u){s.g?s.g.add(u):s.h=u}function Zd(s,u){s.h&&s.h==u?s.h=null:s.g&&s.g.has(u)&&s.g.delete(u)}qd.prototype.cancel=function(){if(this.i=eh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function eh(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let u=s.i;for(const f of s.g.values())u=u.concat(f.D);return u}return O(s.i)}function sw(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(c(s)){for(var u=[],f=s.length,h=0;h<f;h++)u.push(s[h]);return u}u=[],f=0;for(h in s)u[f++]=s[h];return u}function aw(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(c(s)||typeof s=="string"){var u=[];s=s.length;for(var f=0;f<s;f++)u.push(f);return u}u=[],f=0;for(const h in s)u[f++]=h;return u}}}function th(s,u){if(s.forEach&&typeof s.forEach=="function")s.forEach(u,void 0);else if(c(s)||typeof s=="string")Array.prototype.forEach.call(s,u,void 0);else for(var f=aw(s),h=sw(s),A=h.length,R=0;R<A;R++)u.call(void 0,h[R],f&&f[R],s)}var nh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lw(s,u){if(s){s=s.split("&");for(var f=0;f<s.length;f++){var h=s[f].indexOf("="),A=null;if(0<=h){var R=s[f].substring(0,h);A=s[f].substring(h+1)}else R=s[f];u(R,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Jn(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof Jn){this.h=s.h,es(this,s.j),this.o=s.o,this.g=s.g,ts(this,s.s),this.l=s.l;var u=s.i,f=new xi;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),rh(this,f),this.m=s.m}else s&&(u=String(s).match(nh))?(this.h=!1,es(this,u[1]||"",!0),this.o=Ai(u[2]||""),this.g=Ai(u[3]||"",!0),ts(this,u[4]),this.l=Ai(u[5]||"",!0),rh(this,u[6]||"",!0),this.m=Ai(u[7]||"")):(this.h=!1,this.i=new xi(null,this.h))}Jn.prototype.toString=function(){var s=[],u=this.j;u&&s.push(Pi(u,ih,!0),":");var f=this.g;return(f||u=="file")&&(s.push("//"),(u=this.o)&&s.push(Pi(u,ih,!0),"@"),s.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&s.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&s.push("/"),s.push(Pi(f,f.charAt(0)=="/"?fw:cw,!0))),(f=this.i.toString())&&s.push("?",f),(f=this.m)&&s.push("#",Pi(f,hw)),s.join("")};function Bt(s){return new Jn(s)}function es(s,u,f){s.j=f?Ai(u,!0):u,s.j&&(s.j=s.j.replace(/:$/,""))}function ts(s,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);s.s=u}else s.s=null}function rh(s,u,f){u instanceof xi?(s.i=u,pw(s.i,s.h)):(f||(u=Pi(u,dw)),s.i=new xi(u,s.h))}function re(s,u,f){s.i.set(u,f)}function ns(s){return re(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Ai(s,u){return s?u?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Pi(s,u,f){return typeof s=="string"?(s=encodeURI(s).replace(u,uw),f&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function uw(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var ih=/[#\/\?@]/g,cw=/[#\?:]/g,fw=/[#\?]/g,dw=/[#\?@]/g,hw=/#/g;function xi(s,u){this.h=this.g=null,this.i=s||null,this.j=!!u}function pn(s){s.g||(s.g=new Map,s.h=0,s.i&&lw(s.i,function(u,f){s.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}e=xi.prototype,e.add=function(s,u){pn(this),this.i=null,s=Pr(this,s);var f=this.g.get(s);return f||this.g.set(s,f=[]),f.push(u),this.h+=1,this};function oh(s,u){pn(s),u=Pr(s,u),s.g.has(u)&&(s.i=null,s.h-=s.g.get(u).length,s.g.delete(u))}function sh(s,u){return pn(s),u=Pr(s,u),s.g.has(u)}e.forEach=function(s,u){pn(this),this.g.forEach(function(f,h){f.forEach(function(A){s.call(u,A,h,this)},this)},this)},e.na=function(){pn(this);const s=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let h=0;h<u.length;h++){const A=s[h];for(let R=0;R<A.length;R++)f.push(u[h])}return f},e.V=function(s){pn(this);let u=[];if(typeof s=="string")sh(this,s)&&(u=u.concat(this.g.get(Pr(this,s))));else{s=Array.from(this.g.values());for(let f=0;f<s.length;f++)u=u.concat(s[f])}return u},e.set=function(s,u){return pn(this),this.i=null,s=Pr(this,s),sh(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[u]),this.h+=1,this},e.get=function(s,u){return s?(s=this.V(s),0<s.length?String(s[0]):u):u};function ah(s,u,f){oh(s,u),0<f.length&&(s.i=null,s.g.set(Pr(s,u),O(f)),s.h+=f.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var h=u[f];const R=encodeURIComponent(String(h)),U=this.V(h);for(h=0;h<U.length;h++){var A=R;U[h]!==""&&(A+="="+encodeURIComponent(String(U[h]))),s.push(A)}}return this.i=s.join("&")};function Pr(s,u){return u=String(u),s.j&&(u=u.toLowerCase()),u}function pw(s,u){u&&!s.j&&(pn(s),s.i=null,s.g.forEach(function(f,h){var A=h.toLowerCase();h!=A&&(oh(this,h),ah(this,A,f))},s)),s.j=u}function mw(s,u){const f=new Ti;if(l.Image){const h=new Image;h.onload=C(mn,f,"TestLoadImage: loaded",!0,u,h),h.onerror=C(mn,f,"TestLoadImage: error",!1,u,h),h.onabort=C(mn,f,"TestLoadImage: abort",!1,u,h),h.ontimeout=C(mn,f,"TestLoadImage: timeout",!1,u,h),l.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=s}else u(!1)}function gw(s,u){const f=new Ti,h=new AbortController,A=setTimeout(()=>{h.abort(),mn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(s,{signal:h.signal}).then(R=>{clearTimeout(A),R.ok?mn(f,"TestPingServer: ok",!0,u):mn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(A),mn(f,"TestPingServer: error",!1,u)})}function mn(s,u,f,h,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),h(f)}catch{}}function vw(){this.g=new J1}function yw(s,u,f){const h=f||"";try{th(s,function(A,R){let U=A;d(A)&&(U=wl(A)),u.push(h+R+"="+encodeURIComponent(U))})}catch(A){throw u.push(h+"type="+encodeURIComponent("_badmap")),A}}function rs(s){this.l=s.Ub||null,this.j=s.eb||!1}x(rs,_l),rs.prototype.g=function(){return new is(this.l,this.j)},rs.prototype.i=function(s){return function(){return s}}({});function is(s,u){Ce.call(this),this.D=s,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(is,Ce),e=is.prototype,e.open=function(s,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=u,this.readyState=1,Oi(this)},e.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(u.body=s),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ri(this)),this.readyState=0},e.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Oi(this)),this.g&&(this.readyState=3,Oi(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;lh(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function lh(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}e.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var u=s.value?s.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!s.done}))&&(this.response=this.responseText+=u)}s.done?Ri(this):Oi(this),this.readyState==3&&lh(this)}},e.Ra=function(s){this.g&&(this.response=this.responseText=s,Ri(this))},e.Qa=function(s){this.g&&(this.response=s,Ri(this))},e.ga=function(){this.g&&Ri(this)};function Ri(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Oi(s)}e.setRequestHeader=function(s,u){this.u.append(s,u)},e.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,s.push(f[0]+": "+f[1]),f=u.next();return s.join(`\r
`)};function Oi(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(is.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function uh(s){let u="";return j(s,function(f,h){u+=h,u+=":",u+=f,u+=`\r
`}),u}function Nl(s,u,f){e:{for(h in f){var h=!1;break e}h=!0}h||(f=uh(f),typeof s=="string"?f!=null&&encodeURIComponent(String(f)):re(s,u,f))}function me(s){Ce.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(me,Ce);var ww=/^https?$/i,_w=["POST","PUT"];e=me.prototype,e.Ha=function(s){this.J=s},e.ea=function(s,u,f,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);u=u?u.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Tl.g(),this.v=this.o?zd(this.o):zd(Tl),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(u,String(s),!0),this.B=!1}catch(R){ch(this,R);return}if(s=f||"",f=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var A in h)f.set(A,h[A]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const R of h.keys())f.set(R,h.get(R));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(f.keys()).find(R=>R.toLowerCase()=="content-type"),A=l.FormData&&s instanceof l.FormData,!(0<=Array.prototype.indexOf.call(_w,u,void 0))||h||A||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,U]of f)this.g.setRequestHeader(R,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{hh(this),this.u=!0,this.g.send(s),this.u=!1}catch(R){ch(this,R)}};function ch(s,u){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=u,s.m=5,fh(s),os(s)}function fh(s){s.A||(s.A=!0,Le(s,"complete"),Le(s,"error"))}e.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Le(this,"complete"),Le(this,"abort"),os(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),os(this,!0)),me.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?dh(this):this.bb())},e.bb=function(){dh(this)};function dh(s){if(s.h&&typeof a<"u"&&(!s.v[1]||Ht(s)!=4||s.Z()!=2)){if(s.u&&Ht(s)==4)Md(s.Ea,0,s);else if(Le(s,"readystatechange"),Ht(s)==4){s.h=!1;try{const U=s.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var h;if(h=U===0){var A=String(s.D).match(nh)[1]||null;!A&&l.self&&l.self.location&&(A=l.self.location.protocol.slice(0,-1)),h=!ww.test(A?A.toLowerCase():"")}f=h}if(f)Le(s,"complete"),Le(s,"success");else{s.m=6;try{var R=2<Ht(s)?s.g.statusText:""}catch{R=""}s.l=R+" ["+s.Z()+"]",fh(s)}}finally{os(s)}}}}function os(s,u){if(s.g){hh(s);const f=s.g,h=s.v[0]?()=>{}:null;s.g=null,s.v=null,u||Le(s,"ready");try{f.onreadystatechange=h}catch{}}}function hh(s){s.I&&(l.clearTimeout(s.I),s.I=null)}e.isActive=function(){return!!this.g};function Ht(s){return s.g?s.g.readyState:0}e.Z=function(){try{return 2<Ht(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(s){if(this.g){var u=this.g.responseText;return s&&u.indexOf(s)==0&&(u=u.substring(s.length)),q1(u)}};function ph(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Ew(s){const u={};s=(s.g&&2<=Ht(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<s.length;h++){if(g(s[h]))continue;var f=T(s[h]);const A=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const R=u[A]||[];u[A]=R,R.push(f)}E(u,function(h){return h.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ni(s,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[s]||u}function mh(s){this.Aa=0,this.i=[],this.j=new Ti,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ni("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ni("baseRetryDelayMs",5e3,s),this.cb=Ni("retryDelaySeedMs",1e4,s),this.Wa=Ni("forwardChannelMaxRetries",2,s),this.wa=Ni("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new qd(s&&s.concurrentRequestLimit),this.Da=new vw,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=mh.prototype,e.la=8,e.G=1,e.connect=function(s,u,f,h){De(0),this.W=s,this.H=u||{},f&&h!==void 0&&(this.H.OSID=f,this.H.OAID=h),this.F=this.X,this.I=kh(this,null,this.W),as(this)};function bl(s){if(gh(s),s.G==3){var u=s.U++,f=Bt(s.I);if(re(f,"SID",s.K),re(f,"RID",u),re(f,"TYPE","terminate"),bi(s,f),u=new hn(s,s.j,u),u.L=2,u.v=ns(Bt(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=Th(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Zo(u)}Ih(s)}function ss(s){s.g&&(Dl(s),s.g.cancel(),s.g=null)}function gh(s){ss(s),s.u&&(l.clearTimeout(s.u),s.u=null),ls(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&l.clearTimeout(s.s),s.s=null)}function as(s){if(!Jd(s.h)&&!s.s){s.s=!0;var u=s.Ga;Ft||W(),z||(Ft(),z=!0),V.add(u,s),s.B=0}}function Sw(s,u){return Qd(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=u.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=ki(y(s.Ga,s,u),Sh(s,s.B)),s.B++,!0)}e.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const A=new hn(this,this.j,s);let R=this.o;if(this.S&&(R?(R=p(R),S(R,this.S)):R=this.S),this.m!==null||this.O||(A.H=R,R=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var h=this.i[f];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break t}h=void 0}if(h===void 0)break;if(u+=h,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=yh(this,A,u),f=Bt(this.I),re(f,"RID",s),re(f,"CVER",22),this.D&&re(f,"X-HTTP-Session-Id",this.D),bi(this,f),R&&(this.O?u="headers="+encodeURIComponent(String(uh(R)))+"&"+u:this.m&&Nl(f,this.m,R)),Ol(this.h,A),this.Ua&&re(f,"TYPE","init"),this.P?(re(f,"$req",u),re(f,"SID","null"),A.T=!0,Al(A,f,null)):Al(A,f,u),this.G=2}}else this.G==3&&(s?vh(this,s):this.i.length==0||Jd(this.h)||vh(this))};function vh(s,u){var f;u?f=u.l:f=s.U++;const h=Bt(s.I);re(h,"SID",s.K),re(h,"RID",f),re(h,"AID",s.T),bi(s,h),s.m&&s.o&&Nl(h,s.m,s.o),f=new hn(s,s.j,f,s.B+1),s.m===null&&(f.H=s.o),u&&(s.i=u.D.concat(s.i)),u=yh(s,f,1e3),f.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Ol(s.h,f),Al(f,h,u)}function bi(s,u){s.H&&j(s.H,function(f,h){re(u,h,f)}),s.l&&th({},function(f,h){re(u,h,f)})}function yh(s,u,f){f=Math.min(s.i.length,f);var h=s.l?y(s.l.Na,s.l,s):null;e:{var A=s.i;let R=-1;for(;;){const U=["count="+f];R==-1?0<f?(R=A[0].g,U.push("ofs="+R)):R=0:U.push("ofs="+R);let te=!0;for(let Se=0;Se<f;Se++){let J=A[Se].g;const Ae=A[Se].map;if(J-=R,0>J)R=Math.max(0,A[Se].g-100),te=!1;else try{yw(Ae,U,"req"+J+"_")}catch{h&&h(Ae)}}if(te){h=U.join("&");break e}}}return s=s.i.splice(0,f),u.D=s,h}function wh(s){if(!s.g&&!s.u){s.Y=1;var u=s.Fa;Ft||W(),z||(Ft(),z=!0),V.add(u,s),s.v=0}}function Ll(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=ki(y(s.Fa,s),Sh(s,s.v)),s.v++,!0)}e.Fa=function(){if(this.u=null,_h(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=ki(y(this.ab,this),s)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,De(10),ss(this),_h(this))};function Dl(s){s.A!=null&&(l.clearTimeout(s.A),s.A=null)}function _h(s){s.g=new hn(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var u=Bt(s.qa);re(u,"RID","rpc"),re(u,"SID",s.K),re(u,"AID",s.T),re(u,"CI",s.F?"0":"1"),!s.F&&s.ja&&re(u,"TO",s.ja),re(u,"TYPE","xmlhttp"),bi(s,u),s.m&&s.o&&Nl(u,s.m,s.o),s.L&&(s.g.I=s.L);var f=s.g;s=s.ia,f.L=1,f.v=ns(Bt(u)),f.m=null,f.P=!0,Kd(f,s)}e.Za=function(){this.C!=null&&(this.C=null,ss(this),Ll(this),De(19))};function ls(s){s.C!=null&&(l.clearTimeout(s.C),s.C=null)}function Eh(s,u){var f=null;if(s.g==u){ls(s),Dl(s),s.g=null;var h=2}else if(Rl(s.h,u))f=u.D,Zd(s.h,u),h=1;else return;if(s.G!=0){if(u.o)if(h==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var A=s.B;h=Il(),Le(h,new Vd(h,f)),as(s)}else wh(s);else if(A=u.s,A==3||A==0&&0<u.X||!(h==1&&Sw(s,u)||h==2&&Ll(s)))switch(f&&0<f.length&&(u=s.h,u.i=u.i.concat(f)),A){case 1:Qn(s,5);break;case 4:Qn(s,10);break;case 3:Qn(s,6);break;default:Qn(s,2)}}}function Sh(s,u){let f=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(f*=2),f*u}function Qn(s,u){if(s.j.info("Error code "+u),u==2){var f=y(s.fb,s),h=s.Xa;const A=!h;h=new Jn(h||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||es(h,"https"),ns(h),A?mw(h.toString(),f):gw(h.toString(),f)}else De(2);s.G=0,s.l&&s.l.sa(u),Ih(s),gh(s)}e.fb=function(s){s?(this.j.info("Successfully pinged google.com"),De(2)):(this.j.info("Failed to ping google.com"),De(1))};function Ih(s){if(s.G=0,s.ka=[],s.l){const u=eh(s.h);(u.length!=0||s.i.length!=0)&&(N(s.ka,u),N(s.ka,s.i),s.h.i.length=0,O(s.i),s.i.length=0),s.l.ra()}}function kh(s,u,f){var h=f instanceof Jn?Bt(f):new Jn(f);if(h.g!="")u&&(h.g=u+"."+h.g),ts(h,h.s);else{var A=l.location;h=A.protocol,u=u?u+"."+A.hostname:A.hostname,A=+A.port;var R=new Jn(null);h&&es(R,h),u&&(R.g=u),A&&ts(R,A),f&&(R.l=f),h=R}return f=s.D,u=s.ya,f&&u&&re(h,f,u),re(h,"VER",s.la),bi(s,h),h}function Th(s,u,f){if(u&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=s.Ca&&!s.pa?new me(new rs({eb:f})):new me(s.pa),u.Ha(s.J),u}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ch(){}e=Ch.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function ot(s,u){Ce.call(this),this.g=new mh(u),this.l=s,this.h=u&&u.messageUrlParams||null,s=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(s?s["X-WebChannel-Content-Type"]=u.messageContentType:s={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(s?s["X-WebChannel-Client-Profile"]=u.va:s={"X-WebChannel-Client-Profile":u.va}),this.g.S=s,(s=u&&u.Sb)&&!g(s)&&(this.g.m=s),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!g(u)&&(this.g.D=u,s=this.h,s!==null&&u in s&&(s=this.h,u in s&&delete s[u])),this.j=new xr(this)}x(ot,Ce),ot.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ot.prototype.close=function(){bl(this.g)},ot.prototype.o=function(s){var u=this.g;if(typeof s=="string"){var f={};f.__data__=s,s=f}else this.u&&(f={},f.__data__=wl(s),s=f);u.i.push(new ow(u.Ya++,s)),u.G==3&&as(u)},ot.prototype.N=function(){this.g.l=null,delete this.j,bl(this.g),delete this.g,ot.aa.N.call(this)};function Ah(s){El.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var u=s.__sm__;if(u){e:{for(const f in u){s=f;break e}s=void 0}(this.i=s)&&(s=this.i,u=u!==null&&s in u?u[s]:void 0),this.data=u}else this.data=s}x(Ah,El);function Ph(){Sl.call(this),this.status=1}x(Ph,Sl);function xr(s){this.g=s}x(xr,Ch),xr.prototype.ua=function(){Le(this.g,"a")},xr.prototype.ta=function(s){Le(this.g,new Ah(s))},xr.prototype.sa=function(s){Le(this.g,new Ph)},xr.prototype.ra=function(){Le(this.g,"b")},ot.prototype.send=ot.prototype.o,ot.prototype.open=ot.prototype.m,ot.prototype.close=ot.prototype.close,kl.NO_ERROR=0,kl.TIMEOUT=8,kl.HTTP_ERROR=6,rw.COMPLETE="complete",Q1.EventType=Si,Si.OPEN="a",Si.CLOSE="b",Si.ERROR="c",Si.MESSAGE="d",Ce.prototype.listen=Ce.prototype.K,me.prototype.listenOnce=me.prototype.L,me.prototype.getLastError=me.prototype.Ka,me.prototype.getLastErrorCode=me.prototype.Ba,me.prototype.getStatus=me.prototype.Z,me.prototype.getResponseJson=me.prototype.Oa,me.prototype.getResponseText=me.prototype.oa,me.prototype.send=me.prototype.ea,me.prototype.setWithCredentials=me.prototype.Ha}).apply(typeof Os<"u"?Os:typeof self<"u"?self:typeof window<"u"?window:{});const ig="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Fe.UNAUTHENTICATED=new Fe(null),Fe.GOOGLE_CREDENTIALS=new Fe("google-credentials-uid"),Fe.FIRST_PARTY=new Fe("first-party-uid"),Fe.MOCK_USER=new Fe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yo="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi=new sl("@firebase/firestore");function yt(e,...t){if(fi.logLevel<=Q.DEBUG){const n=t.map(Pd);fi.debug(`Firestore (${Yo}): ${e}`,...n)}}function $1(e,...t){if(fi.logLevel<=Q.ERROR){const n=t.map(Pd);fi.error(`Firestore (${Yo}): ${e}`,...n)}}function qx(e,...t){if(fi.logLevel<=Q.WARN){const n=t.map(Pd);fi.warn(`Firestore (${Yo}): ${e}`,...n)}}function Pd(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(e="Unexpected state"){const t=`FIRESTORE (${Yo}) INTERNAL ASSERTION FAILED: `+e;throw $1(t),new Error(t)}function lo(e,t){e||xd()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ve extends kt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Jx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Fe.UNAUTHENTICATED))}shutdown(){}}class Qx{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Zx{constructor(t){this.t=t,this.currentUser=Fe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){lo(this.o===void 0);let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let o=new uo;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new uo,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const c=o;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{yt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(yt("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new uo)}},0),a()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(yt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(lo(typeof r.accessToken=="string"),new B1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return lo(t===null||typeof t=="string"),new Fe(t)}}class eR{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=Fe.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class tR{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new eR(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Fe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nR{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rR{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){lo(this.o===void 0);const r=o=>{o.error!=null&&yt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,yt("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{yt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):yt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(lo(typeof n.token=="string"),this.R=n.token,new nR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function iR(e){return e.name==="IndexedDbTransactionError"}class Ma{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Ma("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ma&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var og,X;(X=og||(og={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new z1([4294967295,4294967295],0);function Au(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(t,n,r=1e3,i=1.5,o=6e4){this.li=t,this.timerId=n,this.Qo=r,this.Ko=i,this.$o=o,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(t){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),i=Math.max(0,n-r);i>0&&yt("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,i,()=>(this.Go=Date.now(),t())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(t,n,r,i,o){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new uo,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,o){const a=Date.now()+r,l=new Rd(t,n,a,i,o);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ve(He.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var sg,ag;(ag=sg||(sg={})).na="default",ag.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sR(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg=new Map;function aR(e,t,n,r){if(t===!0&&r===!0)throw new Ve(He.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function lR(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":xd()}function uR(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Ve(He.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=lR(e);throw new Ve(He.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new Ve(He.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new Ve(He.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}aR("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sR((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new Ve(He.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new Ve(He.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new Ve(He.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class H1{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ug({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Ve(He.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new Ve(He.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ug(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Jx;switch(r.type){case"firstParty":return new tR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Ve(He.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=lg.get(n);r&&(yt("ComponentProvider","Removing Datastore"),lg.delete(n),r.terminate())}(this),Promise.resolve()}}function cR(e,t,n,r={}){var i;const o=(e=uR(e,H1))._getSettings(),a=`${t}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&qx("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=Fe.MOCK_USER;else{l=lT(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new Ve(He.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Fe(d)}e._authCredentials=new Qx(new B1(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(t=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new oR(this,"async_queue_retry"),this.fu=()=>{const r=Au();r&&yt("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=t;const n=Au();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.pu(),this.yu(t)}enterRestrictedMode(t){if(!this.Eu){this.Eu=!0,this.Vu=t||!1;const n=Au();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(t){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new uo;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Iu.push(t),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(t){if(!iR(t))throw t;yt("AsyncQueue","Operation failed with retryable error: "+t)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(t){const n=this.gu.then(()=>(this.Ru=!0,t().catch(r=>{this.Au=r,this.Ru=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw $1("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(t,n,r){this.pu(),this.mu.indexOf(t)>-1&&(n=0);const i=Rd.createAndSchedule(this,t,n,r,o=>this.Su(o));return this.du.push(i),i}pu(){this.Au&&xd()}verifyOperationInProgress(){}async bu(){let t;do t=this.gu,await t;while(t!==this.gu)}Du(t){for(const n of this.du)if(n.timerId===t)return!0;return!1}vu(t){return this.bu().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.bu()})}Cu(t){this.mu.push(t)}Su(t){const n=this.du.indexOf(t);this.du.splice(n,1)}}class fR extends H1{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=new cg,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new cg(t),this._firestoreClient=void 0,await t}}}function dR(e,t){const n=typeof e=="object"?e:fd(),r=typeof e=="string"?e:"(default)",i=Tr(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=sT("firestore");o&&cR(i,...o)}return i}(function(t,n=!0){(function(i){Yo=i})(yi),Lt(new It("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new fR(new Zx(r.getProvider("auth-internal")),new rR(r.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new Ve(He.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ma(d.options.projectId,m)}(a,i),a);return o=Object.assign({useFetchStreams:n},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),ct(ig,"4.7.5",t),ct(ig,"4.7.5","esm2017")})();const hR={apiKey:"AIzaSyC7yX1milFnVO56xSvdB51F3Hp1QkspOas",authDomain:"homepage-board-88e25.firebaseapp.com",projectId:"homepage-board-88e25",storageBucket:"homepage-board-88e25.firebasestorage.app",messagingSenderId:"775580599019",appId:"1:775580599019:web:b8734c86dac0c1e0cf34ae",measurementId:"G-21TRLLP7JW"},Od=U0(hR);Gx(Od);const fg=xP(Od),pR=new Gt;dR(Od);const mR=()=>{const[e,t]=L.useState(localStorage.getItem("isLogin")),n=()=>{UA(fg,pR).then(i=>{localStorage.setItem("isLogin",!0),t(!0)})},r=()=>{signOut(fg).then(()=>{localStorage.clear(),t(!1)})};return G.jsx("div",{children:e?G.jsxs("div",{children:[G.jsx("p",{children:"ログアウトする"}),G.jsx("button",{onClick:r,children:"ログアウト"})]}):G.jsxs("div",{children:[G.jsx("p",{children:"ログインして書き込む"}),G.jsx("button",{onClick:n,children:"Googleでログイン"})]})})};function gR(){return G.jsxs(w2,{children:[G.jsx(qk,{}),G.jsx("div",{className:"page-content",children:G.jsxs(XS,{children:[G.jsx(Ec,{path:"/homepage",element:G.jsx(Qk,{})}),G.jsx(Ec,{path:"/homepage/board",element:G.jsx(mR,{})})]})}),G.jsx(Jk,{})]})}Cy(document.getElementById("root")).render(G.jsx(L.StrictMode,{children:G.jsx(gR,{})}));
