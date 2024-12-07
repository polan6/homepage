(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function e1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var t1={exports:{}},nc={},n1={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ta=Symbol.for("react.element"),XA=Symbol.for("react.portal"),JA=Symbol.for("react.fragment"),ZA=Symbol.for("react.strict_mode"),eR=Symbol.for("react.profiler"),tR=Symbol.for("react.provider"),nR=Symbol.for("react.context"),rR=Symbol.for("react.forward_ref"),iR=Symbol.for("react.suspense"),sR=Symbol.for("react.memo"),oR=Symbol.for("react.lazy"),Iy=Symbol.iterator;function aR(t){return t===null||typeof t!="object"?null:(t=Iy&&t[Iy]||t["@@iterator"],typeof t=="function"?t:null)}var r1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},i1=Object.assign,s1={};function bs(t,e,n){this.props=t,this.context=e,this.refs=s1,this.updater=n||r1}bs.prototype.isReactComponent={};bs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};bs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function o1(){}o1.prototype=bs.prototype;function cp(t,e,n){this.props=t,this.context=e,this.refs=s1,this.updater=n||r1}var hp=cp.prototype=new o1;hp.constructor=cp;i1(hp,bs.prototype);hp.isPureReactComponent=!0;var Sy=Array.isArray,a1=Object.prototype.hasOwnProperty,dp={current:null},l1={key:!0,ref:!0,__self:!0,__source:!0};function u1(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)a1.call(e,r)&&!l1.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ta,type:t,key:s,ref:o,props:i,_owner:dp.current}}function lR(t,e){return{$$typeof:Ta,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function fp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ta}function uR(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ay=/\/+/g;function wh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?uR(""+t.key):e.toString(36)}function Ol(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ta:case XA:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+wh(o,0):r,Sy(i)?(n="",t!=null&&(n=t.replace(Ay,"$&/")+"/"),Ol(i,e,n,"",function(c){return c})):i!=null&&(fp(i)&&(i=lR(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ay,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Sy(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+wh(s,a);o+=Ol(s,e,n,u,i)}else if(u=aR(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+wh(s,a++),o+=Ol(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ol(t,e,n){if(t==null)return t;var r=[],i=0;return Ol(t,r,"","",function(s){return e.call(n,s,i++)}),r}function cR(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pt={current:null},Dl={transition:null},hR={ReactCurrentDispatcher:pt,ReactCurrentBatchConfig:Dl,ReactCurrentOwner:dp};function c1(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:ol,forEach:function(t,e,n){ol(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ol(t,function(){e++}),e},toArray:function(t){return ol(t,function(e){return e})||[]},only:function(t){if(!fp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=bs;ie.Fragment=JA;ie.Profiler=eR;ie.PureComponent=cp;ie.StrictMode=ZA;ie.Suspense=iR;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hR;ie.act=c1;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=i1({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=dp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)a1.call(e,u)&&!l1.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Ta,type:t.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:nR,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:tR,_context:t},t.Consumer=t};ie.createElement=u1;ie.createFactory=function(t){var e=u1.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:rR,render:t}};ie.isValidElement=fp;ie.lazy=function(t){return{$$typeof:oR,_payload:{_status:-1,_result:t},_init:cR}};ie.memo=function(t,e){return{$$typeof:sR,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=Dl.transition;Dl.transition={};try{t()}finally{Dl.transition=e}};ie.unstable_act=c1;ie.useCallback=function(t,e){return pt.current.useCallback(t,e)};ie.useContext=function(t){return pt.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return pt.current.useDeferredValue(t)};ie.useEffect=function(t,e){return pt.current.useEffect(t,e)};ie.useId=function(){return pt.current.useId()};ie.useImperativeHandle=function(t,e,n){return pt.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return pt.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return pt.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return pt.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return pt.current.useReducer(t,e,n)};ie.useRef=function(t){return pt.current.useRef(t)};ie.useState=function(t){return pt.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return pt.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return pt.current.useTransition()};ie.version="18.3.1";n1.exports=ie;var M=n1.exports;const h1=e1(M);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dR=M,fR=Symbol.for("react.element"),pR=Symbol.for("react.fragment"),mR=Object.prototype.hasOwnProperty,gR=dR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yR={key:!0,ref:!0,__self:!0,__source:!0};function d1(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)mR.call(e,r)&&!yR.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:fR,type:t,key:s,ref:o,props:i,_owner:gR.current}}nc.Fragment=pR;nc.jsx=d1;nc.jsxs=d1;t1.exports=nc;var x=t1.exports,f1={exports:{}},Nt={},p1={exports:{}},m1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(q,J){var ne=q.length;q.push(J);e:for(;0<ne;){var Te=ne-1>>>1,fe=q[Te];if(0<i(fe,J))q[Te]=J,q[ne]=fe,ne=Te;else break e}}function n(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var J=q[0],ne=q.pop();if(ne!==J){q[0]=ne;e:for(var Te=0,fe=q.length,xe=fe>>>1;Te<xe;){var Sn=2*(Te+1)-1,An=q[Sn],Rn=Sn+1,Cn=q[Rn];if(0>i(An,ne))Rn<fe&&0>i(Cn,An)?(q[Te]=Cn,q[Rn]=ne,Te=Rn):(q[Te]=An,q[Sn]=ne,Te=Sn);else if(Rn<fe&&0>i(Cn,ne))q[Te]=Cn,q[Rn]=ne,Te=Rn;else break e}}return J}function i(q,J){var ne=q.sortIndex-J.sortIndex;return ne!==0?ne:q.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],d=1,p=null,m=3,w=!1,E=!1,T=!1,R=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(q){for(var J=n(c);J!==null;){if(J.callback===null)r(c);else if(J.startTime<=q)r(c),J.sortIndex=J.expirationTime,e(u,J);else break;J=n(c)}}function O(q){if(T=!1,I(q),!E)if(n(u)!==null)E=!0,Ws(V);else{var J=n(c);J!==null&&In(O,J.startTime-q)}}function V(q,J){E=!1,T&&(T=!1,_(v),v=-1),w=!0;var ne=m;try{for(I(J),p=n(u);p!==null&&(!(p.expirationTime>J)||q&&!k());){var Te=p.callback;if(typeof Te=="function"){p.callback=null,m=p.priorityLevel;var fe=Te(p.expirationTime<=J);J=t.unstable_now(),typeof fe=="function"?p.callback=fe:p===n(u)&&r(u),I(J)}else r(u);p=n(u)}if(p!==null)var xe=!0;else{var Sn=n(c);Sn!==null&&In(O,Sn.startTime-J),xe=!1}return xe}finally{p=null,m=ne,w=!1}}var j=!1,A=null,v=-1,S=5,C=-1;function k(){return!(t.unstable_now()-C<S)}function N(){if(A!==null){var q=t.unstable_now();C=q;var J=!0;try{J=A(!0,q)}finally{J?P():(j=!1,A=null)}}else j=!1}var P;if(typeof y=="function")P=function(){y(N)};else if(typeof MessageChannel<"u"){var Lt=new MessageChannel,Wr=Lt.port2;Lt.port1.onmessage=N,P=function(){Wr.postMessage(null)}}else P=function(){R(N,0)};function Ws(q){A=q,j||(j=!0,P())}function In(q,J){v=R(function(){q(t.unstable_now())},J)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(q){q.callback=null},t.unstable_continueExecution=function(){E||w||(E=!0,Ws(V))},t.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<q?Math.floor(1e3/q):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(q){switch(m){case 1:case 2:case 3:var J=3;break;default:J=m}var ne=m;m=J;try{return q()}finally{m=ne}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(q,J){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var ne=m;m=q;try{return J()}finally{m=ne}},t.unstable_scheduleCallback=function(q,J,ne){var Te=t.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?Te+ne:Te):ne=Te,q){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=ne+fe,q={id:d++,callback:J,priorityLevel:q,startTime:ne,expirationTime:fe,sortIndex:-1},ne>Te?(q.sortIndex=ne,e(c,q),n(u)===null&&q===n(c)&&(T?(_(v),v=-1):T=!0,In(O,ne-Te))):(q.sortIndex=fe,e(u,q),E||w||(E=!0,Ws(V))),q},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(q){var J=m;return function(){var ne=m;m=J;try{return q.apply(this,arguments)}finally{m=ne}}}})(m1);p1.exports=m1;var vR=p1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _R=M,bt=vR;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g1=new Set,qo={};function Ri(t,e){ms(t,e),ms(t+"Capture",e)}function ms(t,e){for(qo[t]=e,t=0;t<e.length;t++)g1.add(e[t])}var zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_d=Object.prototype.hasOwnProperty,wR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ry={},Cy={};function ER(t){return _d.call(Cy,t)?!0:_d.call(Ry,t)?!1:wR.test(t)?Cy[t]=!0:(Ry[t]=!0,!1)}function TR(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function IR(t,e,n,r){if(e===null||typeof e>"u"||TR(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Qe[t]=new mt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Qe[e]=new mt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Qe[t]=new mt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Qe[t]=new mt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Qe[t]=new mt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Qe[t]=new mt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Qe[t]=new mt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Qe[t]=new mt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Qe[t]=new mt(t,5,!1,t.toLowerCase(),null,!1,!1)});var pp=/[\-:]([a-z])/g;function mp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(pp,mp);Qe[e]=new mt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(pp,mp);Qe[e]=new mt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(pp,mp);Qe[e]=new mt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Qe[t]=new mt(t,1,!1,t.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Qe[t]=new mt(t,1,!1,t.toLowerCase(),null,!0,!0)});function gp(t,e,n,r){var i=Qe.hasOwnProperty(e)?Qe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(IR(e,n,i,r)&&(n=null),r||i===null?ER(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Xn=_R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,al=Symbol.for("react.element"),qi=Symbol.for("react.portal"),Hi=Symbol.for("react.fragment"),yp=Symbol.for("react.strict_mode"),wd=Symbol.for("react.profiler"),y1=Symbol.for("react.provider"),v1=Symbol.for("react.context"),vp=Symbol.for("react.forward_ref"),Ed=Symbol.for("react.suspense"),Td=Symbol.for("react.suspense_list"),_p=Symbol.for("react.memo"),ar=Symbol.for("react.lazy"),_1=Symbol.for("react.offscreen"),Py=Symbol.iterator;function oo(t){return t===null||typeof t!="object"?null:(t=Py&&t[Py]||t["@@iterator"],typeof t=="function"?t:null)}var Re=Object.assign,Eh;function vo(t){if(Eh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Eh=e&&e[1]||""}return`
`+Eh+t}var Th=!1;function Ih(t,e){if(!t||Th)return"";Th=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{Th=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?vo(t):""}function SR(t){switch(t.tag){case 5:return vo(t.type);case 16:return vo("Lazy");case 13:return vo("Suspense");case 19:return vo("SuspenseList");case 0:case 2:case 15:return t=Ih(t.type,!1),t;case 11:return t=Ih(t.type.render,!1),t;case 1:return t=Ih(t.type,!0),t;default:return""}}function Id(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Hi:return"Fragment";case qi:return"Portal";case wd:return"Profiler";case yp:return"StrictMode";case Ed:return"Suspense";case Td:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case v1:return(t.displayName||"Context")+".Consumer";case y1:return(t._context.displayName||"Context")+".Provider";case vp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _p:return e=t.displayName||null,e!==null?e:Id(t.type)||"Memo";case ar:e=t._payload,t=t._init;try{return Id(t(e))}catch{}}return null}function AR(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Id(e);case 8:return e===yp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function xr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function w1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function RR(t){var e=w1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ll(t){t._valueTracker||(t._valueTracker=RR(t))}function E1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=w1(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function au(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Sd(t,e){var n=e.checked;return Re({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ky(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=xr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function T1(t,e){e=e.checked,e!=null&&gp(t,"checked",e,!1)}function Ad(t,e){T1(t,e);var n=xr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Rd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Rd(t,e.type,xr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function xy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Rd(t,e,n){(e!=="number"||au(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var _o=Array.isArray;function is(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+xr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Cd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return Re({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function by(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(_o(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:xr(n)}}function I1(t,e){var n=xr(e.value),r=xr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ny(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function S1(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?S1(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ul,A1=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ul=ul||document.createElement("div"),ul.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ul.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ho(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Co={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},CR=["Webkit","ms","Moz","O"];Object.keys(Co).forEach(function(t){CR.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Co[e]=Co[t]})});function R1(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Co.hasOwnProperty(t)&&Co[t]?(""+e).trim():e+"px"}function C1(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=R1(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var PR=Re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kd(t,e){if(e){if(PR[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function xd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bd=null;function wp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Nd=null,ss=null,os=null;function Oy(t){if(t=Aa(t)){if(typeof Nd!="function")throw Error(B(280));var e=t.stateNode;e&&(e=ac(e),Nd(t.stateNode,t.type,e))}}function P1(t){ss?os?os.push(t):os=[t]:ss=t}function k1(){if(ss){var t=ss,e=os;if(os=ss=null,Oy(t),e)for(t=0;t<e.length;t++)Oy(e[t])}}function x1(t,e){return t(e)}function b1(){}var Sh=!1;function N1(t,e,n){if(Sh)return t(e,n);Sh=!0;try{return x1(t,e,n)}finally{Sh=!1,(ss!==null||os!==null)&&(b1(),k1())}}function Wo(t,e){var n=t.stateNode;if(n===null)return null;var r=ac(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var Od=!1;if(zn)try{var ao={};Object.defineProperty(ao,"passive",{get:function(){Od=!0}}),window.addEventListener("test",ao,ao),window.removeEventListener("test",ao,ao)}catch{Od=!1}function kR(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Po=!1,lu=null,uu=!1,Dd=null,xR={onError:function(t){Po=!0,lu=t}};function bR(t,e,n,r,i,s,o,a,u){Po=!1,lu=null,kR.apply(xR,arguments)}function NR(t,e,n,r,i,s,o,a,u){if(bR.apply(this,arguments),Po){if(Po){var c=lu;Po=!1,lu=null}else throw Error(B(198));uu||(uu=!0,Dd=c)}}function Ci(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function O1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Dy(t){if(Ci(t)!==t)throw Error(B(188))}function OR(t){var e=t.alternate;if(!e){if(e=Ci(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Dy(i),t;if(s===r)return Dy(i),e;s=s.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function D1(t){return t=OR(t),t!==null?L1(t):null}function L1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=L1(t);if(e!==null)return e;t=t.sibling}return null}var M1=bt.unstable_scheduleCallback,Ly=bt.unstable_cancelCallback,DR=bt.unstable_shouldYield,LR=bt.unstable_requestPaint,Ne=bt.unstable_now,MR=bt.unstable_getCurrentPriorityLevel,Ep=bt.unstable_ImmediatePriority,V1=bt.unstable_UserBlockingPriority,cu=bt.unstable_NormalPriority,VR=bt.unstable_LowPriority,F1=bt.unstable_IdlePriority,rc=null,fn=null;function FR(t){if(fn&&typeof fn.onCommitFiberRoot=="function")try{fn.onCommitFiberRoot(rc,t,void 0,(t.current.flags&128)===128)}catch{}}var Jt=Math.clz32?Math.clz32:zR,UR=Math.log,jR=Math.LN2;function zR(t){return t>>>=0,t===0?32:31-(UR(t)/jR|0)|0}var cl=64,hl=4194304;function wo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function hu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=wo(a):(s&=o,s!==0&&(r=wo(s)))}else o=n&~i,o!==0?r=wo(o):s!==0&&(r=wo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Jt(e),i=1<<n,r|=t[n],e&=~i;return r}function BR(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $R(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Jt(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=BR(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function Ld(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function U1(){var t=cl;return cl<<=1,!(cl&4194240)&&(cl=64),t}function Ah(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ia(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Jt(e),t[e]=n}function qR(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Jt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Tp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Jt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var de=0;function j1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var z1,Ip,B1,$1,q1,Md=!1,dl=[],vr=null,_r=null,wr=null,Go=new Map,Ko=new Map,cr=[],HR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function My(t,e){switch(t){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":wr=null;break;case"pointerover":case"pointerout":Go.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ko.delete(e.pointerId)}}function lo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Aa(e),e!==null&&Ip(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function WR(t,e,n,r,i){switch(e){case"focusin":return vr=lo(vr,t,e,n,r,i),!0;case"dragenter":return _r=lo(_r,t,e,n,r,i),!0;case"mouseover":return wr=lo(wr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Go.set(s,lo(Go.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ko.set(s,lo(Ko.get(s)||null,t,e,n,r,i)),!0}return!1}function H1(t){var e=ei(t.target);if(e!==null){var n=Ci(e);if(n!==null){if(e=n.tag,e===13){if(e=O1(n),e!==null){t.blockedOn=e,q1(t.priority,function(){B1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ll(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Vd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);bd=r,n.target.dispatchEvent(r),bd=null}else return e=Aa(n),e!==null&&Ip(e),t.blockedOn=n,!1;e.shift()}return!0}function Vy(t,e,n){Ll(t)&&n.delete(e)}function GR(){Md=!1,vr!==null&&Ll(vr)&&(vr=null),_r!==null&&Ll(_r)&&(_r=null),wr!==null&&Ll(wr)&&(wr=null),Go.forEach(Vy),Ko.forEach(Vy)}function uo(t,e){t.blockedOn===e&&(t.blockedOn=null,Md||(Md=!0,bt.unstable_scheduleCallback(bt.unstable_NormalPriority,GR)))}function Qo(t){function e(i){return uo(i,t)}if(0<dl.length){uo(dl[0],t);for(var n=1;n<dl.length;n++){var r=dl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(vr!==null&&uo(vr,t),_r!==null&&uo(_r,t),wr!==null&&uo(wr,t),Go.forEach(e),Ko.forEach(e),n=0;n<cr.length;n++)r=cr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<cr.length&&(n=cr[0],n.blockedOn===null);)H1(n),n.blockedOn===null&&cr.shift()}var as=Xn.ReactCurrentBatchConfig,du=!0;function KR(t,e,n,r){var i=de,s=as.transition;as.transition=null;try{de=1,Sp(t,e,n,r)}finally{de=i,as.transition=s}}function QR(t,e,n,r){var i=de,s=as.transition;as.transition=null;try{de=4,Sp(t,e,n,r)}finally{de=i,as.transition=s}}function Sp(t,e,n,r){if(du){var i=Vd(t,e,n,r);if(i===null)Lh(t,e,r,fu,n),My(t,r);else if(WR(i,t,e,n,r))r.stopPropagation();else if(My(t,r),e&4&&-1<HR.indexOf(t)){for(;i!==null;){var s=Aa(i);if(s!==null&&z1(s),s=Vd(t,e,n,r),s===null&&Lh(t,e,r,fu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Lh(t,e,r,null,n)}}var fu=null;function Vd(t,e,n,r){if(fu=null,t=wp(r),t=ei(t),t!==null)if(e=Ci(t),e===null)t=null;else if(n=e.tag,n===13){if(t=O1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return fu=t,null}function W1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(MR()){case Ep:return 1;case V1:return 4;case cu:case VR:return 16;case F1:return 536870912;default:return 16}default:return 16}}var mr=null,Ap=null,Ml=null;function G1(){if(Ml)return Ml;var t,e=Ap,n=e.length,r,i="value"in mr?mr.value:mr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ml=i.slice(t,1<r?1-r:void 0)}function Vl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function fl(){return!0}function Fy(){return!1}function Ot(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?fl:Fy,this.isPropagationStopped=Fy,this}return Re(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fl)},persist:function(){},isPersistent:fl}),e}var Ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rp=Ot(Ns),Sa=Re({},Ns,{view:0,detail:0}),YR=Ot(Sa),Rh,Ch,co,ic=Re({},Sa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==co&&(co&&t.type==="mousemove"?(Rh=t.screenX-co.screenX,Ch=t.screenY-co.screenY):Ch=Rh=0,co=t),Rh)},movementY:function(t){return"movementY"in t?t.movementY:Ch}}),Uy=Ot(ic),XR=Re({},ic,{dataTransfer:0}),JR=Ot(XR),ZR=Re({},Sa,{relatedTarget:0}),Ph=Ot(ZR),eC=Re({},Ns,{animationName:0,elapsedTime:0,pseudoElement:0}),tC=Ot(eC),nC=Re({},Ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),rC=Ot(nC),iC=Re({},Ns,{data:0}),jy=Ot(iC),sC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},aC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=aC[t])?!!e[t]:!1}function Cp(){return lC}var uC=Re({},Sa,{key:function(t){if(t.key){var e=sC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Vl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?oC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cp,charCode:function(t){return t.type==="keypress"?Vl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),cC=Ot(uC),hC=Re({},ic,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zy=Ot(hC),dC=Re({},Sa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cp}),fC=Ot(dC),pC=Re({},Ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),mC=Ot(pC),gC=Re({},ic,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),yC=Ot(gC),vC=[9,13,27,32],Pp=zn&&"CompositionEvent"in window,ko=null;zn&&"documentMode"in document&&(ko=document.documentMode);var _C=zn&&"TextEvent"in window&&!ko,K1=zn&&(!Pp||ko&&8<ko&&11>=ko),By=" ",$y=!1;function Q1(t,e){switch(t){case"keyup":return vC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Y1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wi=!1;function wC(t,e){switch(t){case"compositionend":return Y1(e);case"keypress":return e.which!==32?null:($y=!0,By);case"textInput":return t=e.data,t===By&&$y?null:t;default:return null}}function EC(t,e){if(Wi)return t==="compositionend"||!Pp&&Q1(t,e)?(t=G1(),Ml=Ap=mr=null,Wi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return K1&&e.locale!=="ko"?null:e.data;default:return null}}var TC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!TC[t.type]:e==="textarea"}function X1(t,e,n,r){P1(r),e=pu(e,"onChange"),0<e.length&&(n=new Rp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var xo=null,Yo=null;function IC(t){lw(t,0)}function sc(t){var e=Qi(t);if(E1(e))return t}function SC(t,e){if(t==="change")return e}var J1=!1;if(zn){var kh;if(zn){var xh="oninput"in document;if(!xh){var Hy=document.createElement("div");Hy.setAttribute("oninput","return;"),xh=typeof Hy.oninput=="function"}kh=xh}else kh=!1;J1=kh&&(!document.documentMode||9<document.documentMode)}function Wy(){xo&&(xo.detachEvent("onpropertychange",Z1),Yo=xo=null)}function Z1(t){if(t.propertyName==="value"&&sc(Yo)){var e=[];X1(e,Yo,t,wp(t)),N1(IC,e)}}function AC(t,e,n){t==="focusin"?(Wy(),xo=e,Yo=n,xo.attachEvent("onpropertychange",Z1)):t==="focusout"&&Wy()}function RC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return sc(Yo)}function CC(t,e){if(t==="click")return sc(e)}function PC(t,e){if(t==="input"||t==="change")return sc(e)}function kC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var tn=typeof Object.is=="function"?Object.is:kC;function Xo(t,e){if(tn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!_d.call(e,i)||!tn(t[i],e[i]))return!1}return!0}function Gy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ky(t,e){var n=Gy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gy(n)}}function ew(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ew(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function tw(){for(var t=window,e=au();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=au(t.document)}return e}function kp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function xC(t){var e=tw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ew(n.ownerDocument.documentElement,n)){if(r!==null&&kp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Ky(n,s);var o=Ky(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var bC=zn&&"documentMode"in document&&11>=document.documentMode,Gi=null,Fd=null,bo=null,Ud=!1;function Qy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ud||Gi==null||Gi!==au(r)||(r=Gi,"selectionStart"in r&&kp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bo&&Xo(bo,r)||(bo=r,r=pu(Fd,"onSelect"),0<r.length&&(e=new Rp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Gi)))}function pl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ki={animationend:pl("Animation","AnimationEnd"),animationiteration:pl("Animation","AnimationIteration"),animationstart:pl("Animation","AnimationStart"),transitionend:pl("Transition","TransitionEnd")},bh={},nw={};zn&&(nw=document.createElement("div").style,"AnimationEvent"in window||(delete Ki.animationend.animation,delete Ki.animationiteration.animation,delete Ki.animationstart.animation),"TransitionEvent"in window||delete Ki.transitionend.transition);function oc(t){if(bh[t])return bh[t];if(!Ki[t])return t;var e=Ki[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in nw)return bh[t]=e[n];return t}var rw=oc("animationend"),iw=oc("animationiteration"),sw=oc("animationstart"),ow=oc("transitionend"),aw=new Map,Yy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(t,e){aw.set(t,e),Ri(e,[t])}for(var Nh=0;Nh<Yy.length;Nh++){var Oh=Yy[Nh],NC=Oh.toLowerCase(),OC=Oh[0].toUpperCase()+Oh.slice(1);zr(NC,"on"+OC)}zr(rw,"onAnimationEnd");zr(iw,"onAnimationIteration");zr(sw,"onAnimationStart");zr("dblclick","onDoubleClick");zr("focusin","onFocus");zr("focusout","onBlur");zr(ow,"onTransitionEnd");ms("onMouseEnter",["mouseout","mouseover"]);ms("onMouseLeave",["mouseout","mouseover"]);ms("onPointerEnter",["pointerout","pointerover"]);ms("onPointerLeave",["pointerout","pointerover"]);Ri("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ri("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ri("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ri("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ri("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ri("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),DC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Eo));function Xy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,NR(r,e,void 0,t),t.currentTarget=null}function lw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;Xy(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;Xy(i,a,c),s=u}}}if(uu)throw t=Dd,uu=!1,Dd=null,t}function ye(t,e){var n=e[qd];n===void 0&&(n=e[qd]=new Set);var r=t+"__bubble";n.has(r)||(uw(e,t,2,!1),n.add(r))}function Dh(t,e,n){var r=0;e&&(r|=4),uw(n,t,r,e)}var ml="_reactListening"+Math.random().toString(36).slice(2);function Jo(t){if(!t[ml]){t[ml]=!0,g1.forEach(function(n){n!=="selectionchange"&&(DC.has(n)||Dh(n,!1,t),Dh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ml]||(e[ml]=!0,Dh("selectionchange",!1,e))}}function uw(t,e,n,r){switch(W1(e)){case 1:var i=KR;break;case 4:i=QR;break;default:i=Sp}n=i.bind(null,e,n,t),i=void 0,!Od||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Lh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ei(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}N1(function(){var c=s,d=wp(n),p=[];e:{var m=aw.get(t);if(m!==void 0){var w=Rp,E=t;switch(t){case"keypress":if(Vl(n)===0)break e;case"keydown":case"keyup":w=cC;break;case"focusin":E="focus",w=Ph;break;case"focusout":E="blur",w=Ph;break;case"beforeblur":case"afterblur":w=Ph;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Uy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=JR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=fC;break;case rw:case iw:case sw:w=tC;break;case ow:w=mC;break;case"scroll":w=YR;break;case"wheel":w=yC;break;case"copy":case"cut":case"paste":w=rC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=zy}var T=(e&4)!==0,R=!T&&t==="scroll",_=T?m!==null?m+"Capture":null:m;T=[];for(var y=c,I;y!==null;){I=y;var O=I.stateNode;if(I.tag===5&&O!==null&&(I=O,_!==null&&(O=Wo(y,_),O!=null&&T.push(Zo(y,O,I)))),R)break;y=y.return}0<T.length&&(m=new w(m,E,null,n,d),p.push({event:m,listeners:T}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",m&&n!==bd&&(E=n.relatedTarget||n.fromElement)&&(ei(E)||E[Bn]))break e;if((w||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,w?(E=n.relatedTarget||n.toElement,w=c,E=E?ei(E):null,E!==null&&(R=Ci(E),E!==R||E.tag!==5&&E.tag!==6)&&(E=null)):(w=null,E=c),w!==E)){if(T=Uy,O="onMouseLeave",_="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(T=zy,O="onPointerLeave",_="onPointerEnter",y="pointer"),R=w==null?m:Qi(w),I=E==null?m:Qi(E),m=new T(O,y+"leave",w,n,d),m.target=R,m.relatedTarget=I,O=null,ei(d)===c&&(T=new T(_,y+"enter",E,n,d),T.target=I,T.relatedTarget=R,O=T),R=O,w&&E)t:{for(T=w,_=E,y=0,I=T;I;I=Ui(I))y++;for(I=0,O=_;O;O=Ui(O))I++;for(;0<y-I;)T=Ui(T),y--;for(;0<I-y;)_=Ui(_),I--;for(;y--;){if(T===_||_!==null&&T===_.alternate)break t;T=Ui(T),_=Ui(_)}T=null}else T=null;w!==null&&Jy(p,m,w,T,!1),E!==null&&R!==null&&Jy(p,R,E,T,!0)}}e:{if(m=c?Qi(c):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var V=SC;else if(qy(m))if(J1)V=PC;else{V=RC;var j=AC}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(V=CC);if(V&&(V=V(t,c))){X1(p,V,n,d);break e}j&&j(t,m,c),t==="focusout"&&(j=m._wrapperState)&&j.controlled&&m.type==="number"&&Rd(m,"number",m.value)}switch(j=c?Qi(c):window,t){case"focusin":(qy(j)||j.contentEditable==="true")&&(Gi=j,Fd=c,bo=null);break;case"focusout":bo=Fd=Gi=null;break;case"mousedown":Ud=!0;break;case"contextmenu":case"mouseup":case"dragend":Ud=!1,Qy(p,n,d);break;case"selectionchange":if(bC)break;case"keydown":case"keyup":Qy(p,n,d)}var A;if(Pp)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Wi?Q1(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(K1&&n.locale!=="ko"&&(Wi||v!=="onCompositionStart"?v==="onCompositionEnd"&&Wi&&(A=G1()):(mr=d,Ap="value"in mr?mr.value:mr.textContent,Wi=!0)),j=pu(c,v),0<j.length&&(v=new jy(v,t,null,n,d),p.push({event:v,listeners:j}),A?v.data=A:(A=Y1(n),A!==null&&(v.data=A)))),(A=_C?wC(t,n):EC(t,n))&&(c=pu(c,"onBeforeInput"),0<c.length&&(d=new jy("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=A))}lw(p,e)})}function Zo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function pu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Wo(t,n),s!=null&&r.unshift(Zo(t,s,i)),s=Wo(t,e),s!=null&&r.push(Zo(t,s,i))),t=t.return}return r}function Ui(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Jy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=Wo(n,s),u!=null&&o.unshift(Zo(n,u,a))):i||(u=Wo(n,s),u!=null&&o.push(Zo(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var LC=/\r\n?/g,MC=/\u0000|\uFFFD/g;function Zy(t){return(typeof t=="string"?t:""+t).replace(LC,`
`).replace(MC,"")}function gl(t,e,n){if(e=Zy(e),Zy(t)!==e&&n)throw Error(B(425))}function mu(){}var jd=null,zd=null;function Bd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $d=typeof setTimeout=="function"?setTimeout:void 0,VC=typeof clearTimeout=="function"?clearTimeout:void 0,e0=typeof Promise=="function"?Promise:void 0,FC=typeof queueMicrotask=="function"?queueMicrotask:typeof e0<"u"?function(t){return e0.resolve(null).then(t).catch(UC)}:$d;function UC(t){setTimeout(function(){throw t})}function Mh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Qo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Qo(e)}function Er(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function t0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Os=Math.random().toString(36).slice(2),cn="__reactFiber$"+Os,ea="__reactProps$"+Os,Bn="__reactContainer$"+Os,qd="__reactEvents$"+Os,jC="__reactListeners$"+Os,zC="__reactHandles$"+Os;function ei(t){var e=t[cn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Bn]||n[cn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=t0(t);t!==null;){if(n=t[cn])return n;t=t0(t)}return e}t=n,n=t.parentNode}return null}function Aa(t){return t=t[cn]||t[Bn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Qi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function ac(t){return t[ea]||null}var Hd=[],Yi=-1;function Br(t){return{current:t}}function _e(t){0>Yi||(t.current=Hd[Yi],Hd[Yi]=null,Yi--)}function me(t,e){Yi++,Hd[Yi]=t.current,t.current=e}var br={},ot=Br(br),_t=Br(!1),pi=br;function gs(t,e){var n=t.type.contextTypes;if(!n)return br;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function wt(t){return t=t.childContextTypes,t!=null}function gu(){_e(_t),_e(ot)}function n0(t,e,n){if(ot.current!==br)throw Error(B(168));me(ot,e),me(_t,n)}function cw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,AR(t)||"Unknown",i));return Re({},n,r)}function yu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||br,pi=ot.current,me(ot,t),me(_t,_t.current),!0}function r0(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=cw(t,e,pi),r.__reactInternalMemoizedMergedChildContext=t,_e(_t),_e(ot),me(ot,t)):_e(_t),me(_t,n)}var bn=null,lc=!1,Vh=!1;function hw(t){bn===null?bn=[t]:bn.push(t)}function BC(t){lc=!0,hw(t)}function $r(){if(!Vh&&bn!==null){Vh=!0;var t=0,e=de;try{var n=bn;for(de=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}bn=null,lc=!1}catch(i){throw bn!==null&&(bn=bn.slice(t+1)),M1(Ep,$r),i}finally{de=e,Vh=!1}}return null}var Xi=[],Ji=0,vu=null,_u=0,Mt=[],Vt=0,mi=null,On=1,Dn="";function Xr(t,e){Xi[Ji++]=_u,Xi[Ji++]=vu,vu=t,_u=e}function dw(t,e,n){Mt[Vt++]=On,Mt[Vt++]=Dn,Mt[Vt++]=mi,mi=t;var r=On;t=Dn;var i=32-Jt(r)-1;r&=~(1<<i),n+=1;var s=32-Jt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,On=1<<32-Jt(e)+i|n<<i|r,Dn=s+t}else On=1<<s|n<<i|r,Dn=t}function xp(t){t.return!==null&&(Xr(t,1),dw(t,1,0))}function bp(t){for(;t===vu;)vu=Xi[--Ji],Xi[Ji]=null,_u=Xi[--Ji],Xi[Ji]=null;for(;t===mi;)mi=Mt[--Vt],Mt[Vt]=null,Dn=Mt[--Vt],Mt[Vt]=null,On=Mt[--Vt],Mt[Vt]=null}var Pt=null,Ct=null,Ee=!1,Yt=null;function fw(t,e){var n=Ut(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function i0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pt=t,Ct=Er(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pt=t,Ct=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=mi!==null?{id:On,overflow:Dn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ut(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pt=t,Ct=null,!0):!1;default:return!1}}function Wd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Gd(t){if(Ee){var e=Ct;if(e){var n=e;if(!i0(t,e)){if(Wd(t))throw Error(B(418));e=Er(n.nextSibling);var r=Pt;e&&i0(t,e)?fw(r,n):(t.flags=t.flags&-4097|2,Ee=!1,Pt=t)}}else{if(Wd(t))throw Error(B(418));t.flags=t.flags&-4097|2,Ee=!1,Pt=t}}}function s0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pt=t}function yl(t){if(t!==Pt)return!1;if(!Ee)return s0(t),Ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Bd(t.type,t.memoizedProps)),e&&(e=Ct)){if(Wd(t))throw pw(),Error(B(418));for(;e;)fw(t,e),e=Er(e.nextSibling)}if(s0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ct=Er(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ct=null}}else Ct=Pt?Er(t.stateNode.nextSibling):null;return!0}function pw(){for(var t=Ct;t;)t=Er(t.nextSibling)}function ys(){Ct=Pt=null,Ee=!1}function Np(t){Yt===null?Yt=[t]:Yt.push(t)}var $C=Xn.ReactCurrentBatchConfig;function ho(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function vl(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function o0(t){var e=t._init;return e(t._payload)}function mw(t){function e(_,y){if(t){var I=_.deletions;I===null?(_.deletions=[y],_.flags|=16):I.push(y)}}function n(_,y){if(!t)return null;for(;y!==null;)e(_,y),y=y.sibling;return null}function r(_,y){for(_=new Map;y!==null;)y.key!==null?_.set(y.key,y):_.set(y.index,y),y=y.sibling;return _}function i(_,y){return _=Ar(_,y),_.index=0,_.sibling=null,_}function s(_,y,I){return _.index=I,t?(I=_.alternate,I!==null?(I=I.index,I<y?(_.flags|=2,y):I):(_.flags|=2,y)):(_.flags|=1048576,y)}function o(_){return t&&_.alternate===null&&(_.flags|=2),_}function a(_,y,I,O){return y===null||y.tag!==6?(y=qh(I,_.mode,O),y.return=_,y):(y=i(y,I),y.return=_,y)}function u(_,y,I,O){var V=I.type;return V===Hi?d(_,y,I.props.children,O,I.key):y!==null&&(y.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===ar&&o0(V)===y.type)?(O=i(y,I.props),O.ref=ho(_,y,I),O.return=_,O):(O=ql(I.type,I.key,I.props,null,_.mode,O),O.ref=ho(_,y,I),O.return=_,O)}function c(_,y,I,O){return y===null||y.tag!==4||y.stateNode.containerInfo!==I.containerInfo||y.stateNode.implementation!==I.implementation?(y=Hh(I,_.mode,O),y.return=_,y):(y=i(y,I.children||[]),y.return=_,y)}function d(_,y,I,O,V){return y===null||y.tag!==7?(y=ci(I,_.mode,O,V),y.return=_,y):(y=i(y,I),y.return=_,y)}function p(_,y,I){if(typeof y=="string"&&y!==""||typeof y=="number")return y=qh(""+y,_.mode,I),y.return=_,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case al:return I=ql(y.type,y.key,y.props,null,_.mode,I),I.ref=ho(_,null,y),I.return=_,I;case qi:return y=Hh(y,_.mode,I),y.return=_,y;case ar:var O=y._init;return p(_,O(y._payload),I)}if(_o(y)||oo(y))return y=ci(y,_.mode,I,null),y.return=_,y;vl(_,y)}return null}function m(_,y,I,O){var V=y!==null?y.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return V!==null?null:a(_,y,""+I,O);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case al:return I.key===V?u(_,y,I,O):null;case qi:return I.key===V?c(_,y,I,O):null;case ar:return V=I._init,m(_,y,V(I._payload),O)}if(_o(I)||oo(I))return V!==null?null:d(_,y,I,O,null);vl(_,I)}return null}function w(_,y,I,O,V){if(typeof O=="string"&&O!==""||typeof O=="number")return _=_.get(I)||null,a(y,_,""+O,V);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case al:return _=_.get(O.key===null?I:O.key)||null,u(y,_,O,V);case qi:return _=_.get(O.key===null?I:O.key)||null,c(y,_,O,V);case ar:var j=O._init;return w(_,y,I,j(O._payload),V)}if(_o(O)||oo(O))return _=_.get(I)||null,d(y,_,O,V,null);vl(y,O)}return null}function E(_,y,I,O){for(var V=null,j=null,A=y,v=y=0,S=null;A!==null&&v<I.length;v++){A.index>v?(S=A,A=null):S=A.sibling;var C=m(_,A,I[v],O);if(C===null){A===null&&(A=S);break}t&&A&&C.alternate===null&&e(_,A),y=s(C,y,v),j===null?V=C:j.sibling=C,j=C,A=S}if(v===I.length)return n(_,A),Ee&&Xr(_,v),V;if(A===null){for(;v<I.length;v++)A=p(_,I[v],O),A!==null&&(y=s(A,y,v),j===null?V=A:j.sibling=A,j=A);return Ee&&Xr(_,v),V}for(A=r(_,A);v<I.length;v++)S=w(A,_,v,I[v],O),S!==null&&(t&&S.alternate!==null&&A.delete(S.key===null?v:S.key),y=s(S,y,v),j===null?V=S:j.sibling=S,j=S);return t&&A.forEach(function(k){return e(_,k)}),Ee&&Xr(_,v),V}function T(_,y,I,O){var V=oo(I);if(typeof V!="function")throw Error(B(150));if(I=V.call(I),I==null)throw Error(B(151));for(var j=V=null,A=y,v=y=0,S=null,C=I.next();A!==null&&!C.done;v++,C=I.next()){A.index>v?(S=A,A=null):S=A.sibling;var k=m(_,A,C.value,O);if(k===null){A===null&&(A=S);break}t&&A&&k.alternate===null&&e(_,A),y=s(k,y,v),j===null?V=k:j.sibling=k,j=k,A=S}if(C.done)return n(_,A),Ee&&Xr(_,v),V;if(A===null){for(;!C.done;v++,C=I.next())C=p(_,C.value,O),C!==null&&(y=s(C,y,v),j===null?V=C:j.sibling=C,j=C);return Ee&&Xr(_,v),V}for(A=r(_,A);!C.done;v++,C=I.next())C=w(A,_,v,C.value,O),C!==null&&(t&&C.alternate!==null&&A.delete(C.key===null?v:C.key),y=s(C,y,v),j===null?V=C:j.sibling=C,j=C);return t&&A.forEach(function(N){return e(_,N)}),Ee&&Xr(_,v),V}function R(_,y,I,O){if(typeof I=="object"&&I!==null&&I.type===Hi&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case al:e:{for(var V=I.key,j=y;j!==null;){if(j.key===V){if(V=I.type,V===Hi){if(j.tag===7){n(_,j.sibling),y=i(j,I.props.children),y.return=_,_=y;break e}}else if(j.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===ar&&o0(V)===j.type){n(_,j.sibling),y=i(j,I.props),y.ref=ho(_,j,I),y.return=_,_=y;break e}n(_,j);break}else e(_,j);j=j.sibling}I.type===Hi?(y=ci(I.props.children,_.mode,O,I.key),y.return=_,_=y):(O=ql(I.type,I.key,I.props,null,_.mode,O),O.ref=ho(_,y,I),O.return=_,_=O)}return o(_);case qi:e:{for(j=I.key;y!==null;){if(y.key===j)if(y.tag===4&&y.stateNode.containerInfo===I.containerInfo&&y.stateNode.implementation===I.implementation){n(_,y.sibling),y=i(y,I.children||[]),y.return=_,_=y;break e}else{n(_,y);break}else e(_,y);y=y.sibling}y=Hh(I,_.mode,O),y.return=_,_=y}return o(_);case ar:return j=I._init,R(_,y,j(I._payload),O)}if(_o(I))return E(_,y,I,O);if(oo(I))return T(_,y,I,O);vl(_,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,y!==null&&y.tag===6?(n(_,y.sibling),y=i(y,I),y.return=_,_=y):(n(_,y),y=qh(I,_.mode,O),y.return=_,_=y),o(_)):n(_,y)}return R}var vs=mw(!0),gw=mw(!1),wu=Br(null),Eu=null,Zi=null,Op=null;function Dp(){Op=Zi=Eu=null}function Lp(t){var e=wu.current;_e(wu),t._currentValue=e}function Kd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ls(t,e){Eu=t,Op=Zi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(vt=!0),t.firstContext=null)}function $t(t){var e=t._currentValue;if(Op!==t)if(t={context:t,memoizedValue:e,next:null},Zi===null){if(Eu===null)throw Error(B(308));Zi=t,Eu.dependencies={lanes:0,firstContext:t}}else Zi=Zi.next=t;return e}var ti=null;function Mp(t){ti===null?ti=[t]:ti.push(t)}function yw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Mp(e)):(n.next=i.next,i.next=n),e.interleaved=n,$n(t,r)}function $n(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var lr=!1;function Vp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Un(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Tr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,$n(t,n)}return i=r.interleaved,i===null?(e.next=e,Mp(r)):(e.next=i.next,i.next=e),r.interleaved=e,$n(t,n)}function Fl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Tp(t,n)}}function a0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Tu(t,e,n,r){var i=t.updateQueue;lr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,a=s;do{var m=a.lane,w=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var E=t,T=a;switch(m=e,w=n,T.tag){case 1:if(E=T.payload,typeof E=="function"){p=E.call(w,p,m);break e}p=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=T.payload,m=typeof E=="function"?E.call(w,p,m):E,m==null)break e;p=Re({},p,m);break e;case 2:lr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else w={eventTime:w,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=w,u=p):d=d.next=w,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);yi|=o,t.lanes=o,t.memoizedState=p}}function l0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var Ra={},pn=Br(Ra),ta=Br(Ra),na=Br(Ra);function ni(t){if(t===Ra)throw Error(B(174));return t}function Fp(t,e){switch(me(na,e),me(ta,t),me(pn,Ra),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Pd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Pd(e,t)}_e(pn),me(pn,e)}function _s(){_e(pn),_e(ta),_e(na)}function _w(t){ni(na.current);var e=ni(pn.current),n=Pd(e,t.type);e!==n&&(me(ta,t),me(pn,n))}function Up(t){ta.current===t&&(_e(pn),_e(ta))}var Ie=Br(0);function Iu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Fh=[];function jp(){for(var t=0;t<Fh.length;t++)Fh[t]._workInProgressVersionPrimary=null;Fh.length=0}var Ul=Xn.ReactCurrentDispatcher,Uh=Xn.ReactCurrentBatchConfig,gi=0,Se=null,Ve=null,Be=null,Su=!1,No=!1,ra=0,qC=0;function et(){throw Error(B(321))}function zp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!tn(t[n],e[n]))return!1;return!0}function Bp(t,e,n,r,i,s){if(gi=s,Se=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ul.current=t===null||t.memoizedState===null?KC:QC,t=n(r,i),No){s=0;do{if(No=!1,ra=0,25<=s)throw Error(B(301));s+=1,Be=Ve=null,e.updateQueue=null,Ul.current=YC,t=n(r,i)}while(No)}if(Ul.current=Au,e=Ve!==null&&Ve.next!==null,gi=0,Be=Ve=Se=null,Su=!1,e)throw Error(B(300));return t}function $p(){var t=ra!==0;return ra=0,t}function ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Se.memoizedState=Be=t:Be=Be.next=t,Be}function qt(){if(Ve===null){var t=Se.alternate;t=t!==null?t.memoizedState:null}else t=Ve.next;var e=Be===null?Se.memoizedState:Be.next;if(e!==null)Be=e,Ve=t;else{if(t===null)throw Error(B(310));Ve=t,t={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},Be===null?Se.memoizedState=Be=t:Be=Be.next=t}return Be}function ia(t,e){return typeof e=="function"?e(t):e}function jh(t){var e=qt(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=Ve,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var d=c.lane;if((gi&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=p,o=r):u=u.next=p,Se.lanes|=d,yi|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,tn(r,e.memoizedState)||(vt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Se.lanes|=s,yi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function zh(t){var e=qt(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);tn(s,e.memoizedState)||(vt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function ww(){}function Ew(t,e){var n=Se,r=qt(),i=e(),s=!tn(r.memoizedState,i);if(s&&(r.memoizedState=i,vt=!0),r=r.queue,qp(Sw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,sa(9,Iw.bind(null,n,r,i,e),void 0,null),$e===null)throw Error(B(349));gi&30||Tw(n,e,i)}return i}function Tw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Iw(t,e,n,r){e.value=n,e.getSnapshot=r,Aw(e)&&Rw(t)}function Sw(t,e,n){return n(function(){Aw(e)&&Rw(t)})}function Aw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!tn(t,n)}catch{return!0}}function Rw(t){var e=$n(t,1);e!==null&&Zt(e,t,1,-1)}function u0(t){var e=ln();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:t},e.queue=t,t=t.dispatch=GC.bind(null,Se,t),[e.memoizedState,t]}function sa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Cw(){return qt().memoizedState}function jl(t,e,n,r){var i=ln();Se.flags|=t,i.memoizedState=sa(1|e,n,void 0,r===void 0?null:r)}function uc(t,e,n,r){var i=qt();r=r===void 0?null:r;var s=void 0;if(Ve!==null){var o=Ve.memoizedState;if(s=o.destroy,r!==null&&zp(r,o.deps)){i.memoizedState=sa(e,n,s,r);return}}Se.flags|=t,i.memoizedState=sa(1|e,n,s,r)}function c0(t,e){return jl(8390656,8,t,e)}function qp(t,e){return uc(2048,8,t,e)}function Pw(t,e){return uc(4,2,t,e)}function kw(t,e){return uc(4,4,t,e)}function xw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function bw(t,e,n){return n=n!=null?n.concat([t]):null,uc(4,4,xw.bind(null,e,t),n)}function Hp(){}function Nw(t,e){var n=qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&zp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Ow(t,e){var n=qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&zp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Dw(t,e,n){return gi&21?(tn(n,e)||(n=U1(),Se.lanes|=n,yi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,vt=!0),t.memoizedState=n)}function HC(t,e){var n=de;de=n!==0&&4>n?n:4,t(!0);var r=Uh.transition;Uh.transition={};try{t(!1),e()}finally{de=n,Uh.transition=r}}function Lw(){return qt().memoizedState}function WC(t,e,n){var r=Sr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Mw(t))Vw(e,n);else if(n=yw(t,e,n,r),n!==null){var i=dt();Zt(n,t,r,i),Fw(n,e,r)}}function GC(t,e,n){var r=Sr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Mw(t))Vw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,tn(a,o)){var u=e.interleaved;u===null?(i.next=i,Mp(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=yw(t,e,i,r),n!==null&&(i=dt(),Zt(n,t,r,i),Fw(n,e,r))}}function Mw(t){var e=t.alternate;return t===Se||e!==null&&e===Se}function Vw(t,e){No=Su=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Fw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Tp(t,n)}}var Au={readContext:$t,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},KC={readContext:$t,useCallback:function(t,e){return ln().memoizedState=[t,e===void 0?null:e],t},useContext:$t,useEffect:c0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,jl(4194308,4,xw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return jl(4194308,4,t,e)},useInsertionEffect:function(t,e){return jl(4,2,t,e)},useMemo:function(t,e){var n=ln();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ln();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=WC.bind(null,Se,t),[r.memoizedState,t]},useRef:function(t){var e=ln();return t={current:t},e.memoizedState=t},useState:u0,useDebugValue:Hp,useDeferredValue:function(t){return ln().memoizedState=t},useTransition:function(){var t=u0(!1),e=t[0];return t=HC.bind(null,t[1]),ln().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Se,i=ln();if(Ee){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),$e===null)throw Error(B(349));gi&30||Tw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,c0(Sw.bind(null,r,s,t),[t]),r.flags|=2048,sa(9,Iw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=ln(),e=$e.identifierPrefix;if(Ee){var n=Dn,r=On;n=(r&~(1<<32-Jt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ra++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=qC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},QC={readContext:$t,useCallback:Nw,useContext:$t,useEffect:qp,useImperativeHandle:bw,useInsertionEffect:Pw,useLayoutEffect:kw,useMemo:Ow,useReducer:jh,useRef:Cw,useState:function(){return jh(ia)},useDebugValue:Hp,useDeferredValue:function(t){var e=qt();return Dw(e,Ve.memoizedState,t)},useTransition:function(){var t=jh(ia)[0],e=qt().memoizedState;return[t,e]},useMutableSource:ww,useSyncExternalStore:Ew,useId:Lw,unstable_isNewReconciler:!1},YC={readContext:$t,useCallback:Nw,useContext:$t,useEffect:qp,useImperativeHandle:bw,useInsertionEffect:Pw,useLayoutEffect:kw,useMemo:Ow,useReducer:zh,useRef:Cw,useState:function(){return zh(ia)},useDebugValue:Hp,useDeferredValue:function(t){var e=qt();return Ve===null?e.memoizedState=t:Dw(e,Ve.memoizedState,t)},useTransition:function(){var t=zh(ia)[0],e=qt().memoizedState;return[t,e]},useMutableSource:ww,useSyncExternalStore:Ew,useId:Lw,unstable_isNewReconciler:!1};function Kt(t,e){if(t&&t.defaultProps){e=Re({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Qd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Re({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var cc={isMounted:function(t){return(t=t._reactInternals)?Ci(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=dt(),i=Sr(t),s=Un(r,i);s.payload=e,n!=null&&(s.callback=n),e=Tr(t,s,i),e!==null&&(Zt(e,t,i,r),Fl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=dt(),i=Sr(t),s=Un(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Tr(t,s,i),e!==null&&(Zt(e,t,i,r),Fl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=dt(),r=Sr(t),i=Un(n,r);i.tag=2,e!=null&&(i.callback=e),e=Tr(t,i,r),e!==null&&(Zt(e,t,r,n),Fl(e,t,r))}};function h0(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Xo(n,r)||!Xo(i,s):!0}function Uw(t,e,n){var r=!1,i=br,s=e.contextType;return typeof s=="object"&&s!==null?s=$t(s):(i=wt(e)?pi:ot.current,r=e.contextTypes,s=(r=r!=null)?gs(t,i):br),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=cc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function d0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&cc.enqueueReplaceState(e,e.state,null)}function Yd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Vp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=$t(s):(s=wt(e)?pi:ot.current,i.context=gs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Qd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&cc.enqueueReplaceState(i,i.state,null),Tu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ws(t,e){try{var n="",r=e;do n+=SR(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Bh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Xd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var XC=typeof WeakMap=="function"?WeakMap:Map;function jw(t,e,n){n=Un(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Cu||(Cu=!0,lf=r),Xd(t,e)},n}function zw(t,e,n){n=Un(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Xd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Xd(t,e),typeof r!="function"&&(Ir===null?Ir=new Set([this]):Ir.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function f0(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new XC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=hP.bind(null,t,e,n),e.then(t,t))}function p0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function m0(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Un(-1,1),e.tag=2,Tr(n,e,1))),n.lanes|=1),t)}var JC=Xn.ReactCurrentOwner,vt=!1;function ht(t,e,n,r){e.child=t===null?gw(e,null,n,r):vs(e,t.child,n,r)}function g0(t,e,n,r,i){n=n.render;var s=e.ref;return ls(e,i),r=Bp(t,e,n,r,s,i),n=$p(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,qn(t,e,i)):(Ee&&n&&xp(e),e.flags|=1,ht(t,e,r,i),e.child)}function y0(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Zp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Bw(t,e,s,r,i)):(t=ql(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Xo,n(o,r)&&t.ref===e.ref)return qn(t,e,i)}return e.flags|=1,t=Ar(s,r),t.ref=e.ref,t.return=e,e.child=t}function Bw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Xo(s,r)&&t.ref===e.ref)if(vt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(vt=!0);else return e.lanes=t.lanes,qn(t,e,i)}return Jd(t,e,n,r,i)}function $w(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(ts,Rt),Rt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,me(ts,Rt),Rt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,me(ts,Rt),Rt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,me(ts,Rt),Rt|=r;return ht(t,e,i,n),e.child}function qw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Jd(t,e,n,r,i){var s=wt(n)?pi:ot.current;return s=gs(e,s),ls(e,i),n=Bp(t,e,n,r,s,i),r=$p(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,qn(t,e,i)):(Ee&&r&&xp(e),e.flags|=1,ht(t,e,n,i),e.child)}function v0(t,e,n,r,i){if(wt(n)){var s=!0;yu(e)}else s=!1;if(ls(e,i),e.stateNode===null)zl(t,e),Uw(e,n,r),Yd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=$t(c):(c=wt(n)?pi:ot.current,c=gs(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&d0(e,o,r,c),lr=!1;var m=e.memoizedState;o.state=m,Tu(e,r,o,i),u=e.memoizedState,a!==r||m!==u||_t.current||lr?(typeof d=="function"&&(Qd(e,n,d,r),u=e.memoizedState),(a=lr||h0(e,n,a,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,vw(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Kt(e.type,a),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=$t(u):(u=wt(n)?pi:ot.current,u=gs(e,u));var w=n.getDerivedStateFromProps;(d=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||m!==u)&&d0(e,o,r,u),lr=!1,m=e.memoizedState,o.state=m,Tu(e,r,o,i);var E=e.memoizedState;a!==p||m!==E||_t.current||lr?(typeof w=="function"&&(Qd(e,n,w,r),E=e.memoizedState),(c=lr||h0(e,n,c,r,m,E,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,E,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,E,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=E),o.props=r,o.state=E,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Zd(t,e,n,r,s,i)}function Zd(t,e,n,r,i,s){qw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&r0(e,n,!1),qn(t,e,s);r=e.stateNode,JC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=vs(e,t.child,null,s),e.child=vs(e,null,a,s)):ht(t,e,a,s),e.memoizedState=r.state,i&&r0(e,n,!0),e.child}function Hw(t){var e=t.stateNode;e.pendingContext?n0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&n0(t,e.context,!1),Fp(t,e.containerInfo)}function _0(t,e,n,r,i){return ys(),Np(i),e.flags|=256,ht(t,e,n,r),e.child}var ef={dehydrated:null,treeContext:null,retryLane:0};function tf(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ww(t,e,n){var r=e.pendingProps,i=Ie.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),me(Ie,i&1),t===null)return Gd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=fc(o,r,0,null),t=ci(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=tf(n),e.memoizedState=ef,t):Wp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return ZC(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Ar(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Ar(a,s):(s=ci(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?tf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ef,r}return s=t.child,t=s.sibling,r=Ar(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Wp(t,e){return e=fc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function _l(t,e,n,r){return r!==null&&Np(r),vs(e,t.child,null,n),t=Wp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ZC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Bh(Error(B(422))),_l(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=fc({mode:"visible",children:r.children},i,0,null),s=ci(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&vs(e,t.child,null,o),e.child.memoizedState=tf(o),e.memoizedState=ef,s);if(!(e.mode&1))return _l(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(B(419)),r=Bh(s,r,void 0),_l(t,e,o,r)}if(a=(o&t.childLanes)!==0,vt||a){if(r=$e,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,$n(t,i),Zt(r,t,i,-1))}return Jp(),r=Bh(Error(B(421))),_l(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=dP.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ct=Er(i.nextSibling),Pt=e,Ee=!0,Yt=null,t!==null&&(Mt[Vt++]=On,Mt[Vt++]=Dn,Mt[Vt++]=mi,On=t.id,Dn=t.overflow,mi=e),e=Wp(e,r.children),e.flags|=4096,e)}function w0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Kd(t.return,e,n)}function $h(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Gw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ht(t,e,r.children,n),r=Ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&w0(t,n,e);else if(t.tag===19)w0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(me(Ie,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Iu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),$h(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Iu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}$h(e,!0,n,null,s);break;case"together":$h(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function zl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function qn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),yi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=Ar(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ar(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function eP(t,e,n){switch(e.tag){case 3:Hw(e),ys();break;case 5:_w(e);break;case 1:wt(e.type)&&yu(e);break;case 4:Fp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;me(wu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(me(Ie,Ie.current&1),e.flags|=128,null):n&e.child.childLanes?Ww(t,e,n):(me(Ie,Ie.current&1),t=qn(t,e,n),t!==null?t.sibling:null);me(Ie,Ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Gw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),me(Ie,Ie.current),r)break;return null;case 22:case 23:return e.lanes=0,$w(t,e,n)}return qn(t,e,n)}var Kw,nf,Qw,Yw;Kw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};nf=function(){};Qw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ni(pn.current);var s=null;switch(n){case"input":i=Sd(t,i),r=Sd(t,r),s=[];break;case"select":i=Re({},i,{value:void 0}),r=Re({},r,{value:void 0}),s=[];break;case"textarea":i=Cd(t,i),r=Cd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=mu)}kd(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(qo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(qo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ye("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Yw=function(t,e,n,r){n!==r&&(e.flags|=4)};function fo(t,e){if(!Ee)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function tt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function tP(t,e,n){var r=e.pendingProps;switch(bp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(e),null;case 1:return wt(e.type)&&gu(),tt(e),null;case 3:return r=e.stateNode,_s(),_e(_t),_e(ot),jp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(yl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Yt!==null&&(hf(Yt),Yt=null))),nf(t,e),tt(e),null;case 5:Up(e);var i=ni(na.current);if(n=e.type,t!==null&&e.stateNode!=null)Qw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return tt(e),null}if(t=ni(pn.current),yl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[cn]=e,r[ea]=s,t=(e.mode&1)!==0,n){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(i=0;i<Eo.length;i++)ye(Eo[i],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":ky(r,s),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ye("invalid",r);break;case"textarea":by(r,s),ye("invalid",r)}kd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&gl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&gl(r.textContent,a,t),i=["children",""+a]):qo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ye("scroll",r)}switch(n){case"input":ll(r),xy(r,s,!0);break;case"textarea":ll(r),Ny(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=mu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=S1(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[cn]=e,t[ea]=r,Kw(t,e,!1,!1),e.stateNode=t;e:{switch(o=xd(n,r),n){case"dialog":ye("cancel",t),ye("close",t),i=r;break;case"iframe":case"object":case"embed":ye("load",t),i=r;break;case"video":case"audio":for(i=0;i<Eo.length;i++)ye(Eo[i],t);i=r;break;case"source":ye("error",t),i=r;break;case"img":case"image":case"link":ye("error",t),ye("load",t),i=r;break;case"details":ye("toggle",t),i=r;break;case"input":ky(t,r),i=Sd(t,r),ye("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Re({},r,{value:void 0}),ye("invalid",t);break;case"textarea":by(t,r),i=Cd(t,r),ye("invalid",t);break;default:i=r}kd(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?C1(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&A1(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ho(t,u):typeof u=="number"&&Ho(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(qo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ye("scroll",t):u!=null&&gp(t,s,u,o))}switch(n){case"input":ll(t),xy(t,r,!1);break;case"textarea":ll(t),Ny(t);break;case"option":r.value!=null&&t.setAttribute("value",""+xr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?is(t,!!r.multiple,s,!1):r.defaultValue!=null&&is(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=mu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return tt(e),null;case 6:if(t&&e.stateNode!=null)Yw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=ni(na.current),ni(pn.current),yl(e)){if(r=e.stateNode,n=e.memoizedProps,r[cn]=e,(s=r.nodeValue!==n)&&(t=Pt,t!==null))switch(t.tag){case 3:gl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&gl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[cn]=e,e.stateNode=r}return tt(e),null;case 13:if(_e(Ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ee&&Ct!==null&&e.mode&1&&!(e.flags&128))pw(),ys(),e.flags|=98560,s=!1;else if(s=yl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(B(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(B(317));s[cn]=e}else ys(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;tt(e),s=!1}else Yt!==null&&(hf(Yt),Yt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ie.current&1?Fe===0&&(Fe=3):Jp())),e.updateQueue!==null&&(e.flags|=4),tt(e),null);case 4:return _s(),nf(t,e),t===null&&Jo(e.stateNode.containerInfo),tt(e),null;case 10:return Lp(e.type._context),tt(e),null;case 17:return wt(e.type)&&gu(),tt(e),null;case 19:if(_e(Ie),s=e.memoizedState,s===null)return tt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)fo(s,!1);else{if(Fe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Iu(t),o!==null){for(e.flags|=128,fo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return me(Ie,Ie.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ne()>Es&&(e.flags|=128,r=!0,fo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Iu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),fo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ee)return tt(e),null}else 2*Ne()-s.renderingStartTime>Es&&n!==1073741824&&(e.flags|=128,r=!0,fo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ne(),e.sibling=null,n=Ie.current,me(Ie,r?n&1|2:n&1),e):(tt(e),null);case 22:case 23:return Xp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Rt&1073741824&&(tt(e),e.subtreeFlags&6&&(e.flags|=8192)):tt(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function nP(t,e){switch(bp(e),e.tag){case 1:return wt(e.type)&&gu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _s(),_e(_t),_e(ot),jp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Up(e),null;case 13:if(_e(Ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));ys()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _e(Ie),null;case 4:return _s(),null;case 10:return Lp(e.type._context),null;case 22:case 23:return Xp(),null;case 24:return null;default:return null}}var wl=!1,it=!1,rP=typeof WeakSet=="function"?WeakSet:Set,W=null;function es(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ke(t,e,r)}else n.current=null}function rf(t,e,n){try{n()}catch(r){ke(t,e,r)}}var E0=!1;function iP(t,e){if(jd=du,t=tw(),kp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,d=0,p=t,m=null;t:for(;;){for(var w;p!==n||i!==0&&p.nodeType!==3||(a=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(w=p.firstChild)!==null;)m=p,p=w;for(;;){if(p===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++d===r&&(u=o),(w=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=w}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(zd={focusedElem:t,selectionRange:n},du=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var E=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var T=E.memoizedProps,R=E.memoizedState,_=e.stateNode,y=_.getSnapshotBeforeUpdate(e.elementType===e.type?T:Kt(e.type,T),R);_.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(O){ke(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return E=E0,E0=!1,E}function Oo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&rf(e,n,s)}i=i.next}while(i!==r)}}function hc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function sf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Xw(t){var e=t.alternate;e!==null&&(t.alternate=null,Xw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[cn],delete e[ea],delete e[qd],delete e[jC],delete e[zC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Jw(t){return t.tag===5||t.tag===3||t.tag===4}function T0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Jw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function of(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=mu));else if(r!==4&&(t=t.child,t!==null))for(of(t,e,n),t=t.sibling;t!==null;)of(t,e,n),t=t.sibling}function af(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(af(t,e,n),t=t.sibling;t!==null;)af(t,e,n),t=t.sibling}var He=null,Qt=!1;function rr(t,e,n){for(n=n.child;n!==null;)Zw(t,e,n),n=n.sibling}function Zw(t,e,n){if(fn&&typeof fn.onCommitFiberUnmount=="function")try{fn.onCommitFiberUnmount(rc,n)}catch{}switch(n.tag){case 5:it||es(n,e);case 6:var r=He,i=Qt;He=null,rr(t,e,n),He=r,Qt=i,He!==null&&(Qt?(t=He,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):He.removeChild(n.stateNode));break;case 18:He!==null&&(Qt?(t=He,n=n.stateNode,t.nodeType===8?Mh(t.parentNode,n):t.nodeType===1&&Mh(t,n),Qo(t)):Mh(He,n.stateNode));break;case 4:r=He,i=Qt,He=n.stateNode.containerInfo,Qt=!0,rr(t,e,n),He=r,Qt=i;break;case 0:case 11:case 14:case 15:if(!it&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&rf(n,e,o),i=i.next}while(i!==r)}rr(t,e,n);break;case 1:if(!it&&(es(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ke(n,e,a)}rr(t,e,n);break;case 21:rr(t,e,n);break;case 22:n.mode&1?(it=(r=it)||n.memoizedState!==null,rr(t,e,n),it=r):rr(t,e,n);break;default:rr(t,e,n)}}function I0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new rP),e.forEach(function(r){var i=fP.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Wt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:He=a.stateNode,Qt=!1;break e;case 3:He=a.stateNode.containerInfo,Qt=!0;break e;case 4:He=a.stateNode.containerInfo,Qt=!0;break e}a=a.return}if(He===null)throw Error(B(160));Zw(s,o,i),He=null,Qt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){ke(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)eE(e,t),e=e.sibling}function eE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Wt(e,t),an(t),r&4){try{Oo(3,t,t.return),hc(3,t)}catch(T){ke(t,t.return,T)}try{Oo(5,t,t.return)}catch(T){ke(t,t.return,T)}}break;case 1:Wt(e,t),an(t),r&512&&n!==null&&es(n,n.return);break;case 5:if(Wt(e,t),an(t),r&512&&n!==null&&es(n,n.return),t.flags&32){var i=t.stateNode;try{Ho(i,"")}catch(T){ke(t,t.return,T)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&T1(i,s),xd(a,o);var c=xd(a,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?C1(i,p):d==="dangerouslySetInnerHTML"?A1(i,p):d==="children"?Ho(i,p):gp(i,d,p,c)}switch(a){case"input":Ad(i,s);break;case"textarea":I1(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?is(i,!!s.multiple,w,!1):m!==!!s.multiple&&(s.defaultValue!=null?is(i,!!s.multiple,s.defaultValue,!0):is(i,!!s.multiple,s.multiple?[]:"",!1))}i[ea]=s}catch(T){ke(t,t.return,T)}}break;case 6:if(Wt(e,t),an(t),r&4){if(t.stateNode===null)throw Error(B(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(T){ke(t,t.return,T)}}break;case 3:if(Wt(e,t),an(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qo(e.containerInfo)}catch(T){ke(t,t.return,T)}break;case 4:Wt(e,t),an(t);break;case 13:Wt(e,t),an(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Qp=Ne())),r&4&&I0(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(it=(c=it)||d,Wt(e,t),it=c):Wt(e,t),an(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(W=t,d=t.child;d!==null;){for(p=W=d;W!==null;){switch(m=W,w=m.child,m.tag){case 0:case 11:case 14:case 15:Oo(4,m,m.return);break;case 1:es(m,m.return);var E=m.stateNode;if(typeof E.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,E.props=e.memoizedProps,E.state=e.memoizedState,E.componentWillUnmount()}catch(T){ke(r,n,T)}}break;case 5:es(m,m.return);break;case 22:if(m.memoizedState!==null){A0(p);continue}}w!==null?(w.return=m,W=w):A0(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=R1("display",o))}catch(T){ke(t,t.return,T)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(T){ke(t,t.return,T)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Wt(e,t),an(t),r&4&&I0(t);break;case 21:break;default:Wt(e,t),an(t)}}function an(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Jw(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ho(i,""),r.flags&=-33);var s=T0(t);af(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=T0(t);of(t,a,o);break;default:throw Error(B(161))}}catch(u){ke(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function sP(t,e,n){W=t,tE(t)}function tE(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||wl;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||it;a=wl;var c=it;if(wl=o,(it=u)&&!c)for(W=i;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?R0(i):u!==null?(u.return=o,W=u):R0(i);for(;s!==null;)W=s,tE(s),s=s.sibling;W=i,wl=a,it=c}S0(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):S0(t)}}function S0(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:it||hc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!it)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Kt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&l0(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}l0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Qo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}it||e.flags&512&&sf(e)}catch(m){ke(e,e.return,m)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function A0(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function R0(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{hc(4,e)}catch(u){ke(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){ke(e,i,u)}}var s=e.return;try{sf(e)}catch(u){ke(e,s,u)}break;case 5:var o=e.return;try{sf(e)}catch(u){ke(e,o,u)}}}catch(u){ke(e,e.return,u)}if(e===t){W=null;break}var a=e.sibling;if(a!==null){a.return=e.return,W=a;break}W=e.return}}var oP=Math.ceil,Ru=Xn.ReactCurrentDispatcher,Gp=Xn.ReactCurrentOwner,jt=Xn.ReactCurrentBatchConfig,ue=0,$e=null,De=null,Ke=0,Rt=0,ts=Br(0),Fe=0,oa=null,yi=0,dc=0,Kp=0,Do=null,yt=null,Qp=0,Es=1/0,xn=null,Cu=!1,lf=null,Ir=null,El=!1,gr=null,Pu=0,Lo=0,uf=null,Bl=-1,$l=0;function dt(){return ue&6?Ne():Bl!==-1?Bl:Bl=Ne()}function Sr(t){return t.mode&1?ue&2&&Ke!==0?Ke&-Ke:$C.transition!==null?($l===0&&($l=U1()),$l):(t=de,t!==0||(t=window.event,t=t===void 0?16:W1(t.type)),t):1}function Zt(t,e,n,r){if(50<Lo)throw Lo=0,uf=null,Error(B(185));Ia(t,n,r),(!(ue&2)||t!==$e)&&(t===$e&&(!(ue&2)&&(dc|=n),Fe===4&&hr(t,Ke)),Et(t,r),n===1&&ue===0&&!(e.mode&1)&&(Es=Ne()+500,lc&&$r()))}function Et(t,e){var n=t.callbackNode;$R(t,e);var r=hu(t,t===$e?Ke:0);if(r===0)n!==null&&Ly(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ly(n),e===1)t.tag===0?BC(C0.bind(null,t)):hw(C0.bind(null,t)),FC(function(){!(ue&6)&&$r()}),n=null;else{switch(j1(r)){case 1:n=Ep;break;case 4:n=V1;break;case 16:n=cu;break;case 536870912:n=F1;break;default:n=cu}n=uE(n,nE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function nE(t,e){if(Bl=-1,$l=0,ue&6)throw Error(B(327));var n=t.callbackNode;if(us()&&t.callbackNode!==n)return null;var r=hu(t,t===$e?Ke:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ku(t,r);else{e=r;var i=ue;ue|=2;var s=iE();($e!==t||Ke!==e)&&(xn=null,Es=Ne()+500,ui(t,e));do try{uP();break}catch(a){rE(t,a)}while(!0);Dp(),Ru.current=s,ue=i,De!==null?e=0:($e=null,Ke=0,e=Fe)}if(e!==0){if(e===2&&(i=Ld(t),i!==0&&(r=i,e=cf(t,i))),e===1)throw n=oa,ui(t,0),hr(t,r),Et(t,Ne()),n;if(e===6)hr(t,r);else{if(i=t.current.alternate,!(r&30)&&!aP(i)&&(e=ku(t,r),e===2&&(s=Ld(t),s!==0&&(r=s,e=cf(t,s))),e===1))throw n=oa,ui(t,0),hr(t,r),Et(t,Ne()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:Jr(t,yt,xn);break;case 3:if(hr(t,r),(r&130023424)===r&&(e=Qp+500-Ne(),10<e)){if(hu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){dt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=$d(Jr.bind(null,t,yt,xn),e);break}Jr(t,yt,xn);break;case 4:if(hr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Jt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*oP(r/1960))-r,10<r){t.timeoutHandle=$d(Jr.bind(null,t,yt,xn),r);break}Jr(t,yt,xn);break;case 5:Jr(t,yt,xn);break;default:throw Error(B(329))}}}return Et(t,Ne()),t.callbackNode===n?nE.bind(null,t):null}function cf(t,e){var n=Do;return t.current.memoizedState.isDehydrated&&(ui(t,e).flags|=256),t=ku(t,e),t!==2&&(e=yt,yt=n,e!==null&&hf(e)),t}function hf(t){yt===null?yt=t:yt.push.apply(yt,t)}function aP(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!tn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function hr(t,e){for(e&=~Kp,e&=~dc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Jt(e),r=1<<n;t[n]=-1,e&=~r}}function C0(t){if(ue&6)throw Error(B(327));us();var e=hu(t,0);if(!(e&1))return Et(t,Ne()),null;var n=ku(t,e);if(t.tag!==0&&n===2){var r=Ld(t);r!==0&&(e=r,n=cf(t,r))}if(n===1)throw n=oa,ui(t,0),hr(t,e),Et(t,Ne()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Jr(t,yt,xn),Et(t,Ne()),null}function Yp(t,e){var n=ue;ue|=1;try{return t(e)}finally{ue=n,ue===0&&(Es=Ne()+500,lc&&$r())}}function vi(t){gr!==null&&gr.tag===0&&!(ue&6)&&us();var e=ue;ue|=1;var n=jt.transition,r=de;try{if(jt.transition=null,de=1,t)return t()}finally{de=r,jt.transition=n,ue=e,!(ue&6)&&$r()}}function Xp(){Rt=ts.current,_e(ts)}function ui(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,VC(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(bp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&gu();break;case 3:_s(),_e(_t),_e(ot),jp();break;case 5:Up(r);break;case 4:_s();break;case 13:_e(Ie);break;case 19:_e(Ie);break;case 10:Lp(r.type._context);break;case 22:case 23:Xp()}n=n.return}if($e=t,De=t=Ar(t.current,null),Ke=Rt=e,Fe=0,oa=null,Kp=dc=yi=0,yt=Do=null,ti!==null){for(e=0;e<ti.length;e++)if(n=ti[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ti=null}return t}function rE(t,e){do{var n=De;try{if(Dp(),Ul.current=Au,Su){for(var r=Se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Su=!1}if(gi=0,Be=Ve=Se=null,No=!1,ra=0,Gp.current=null,n===null||n.return===null){Fe=1,oa=e,De=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=Ke,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var w=p0(o);if(w!==null){w.flags&=-257,m0(w,o,a,s,e),w.mode&1&&f0(s,c,e),e=w,u=c;var E=e.updateQueue;if(E===null){var T=new Set;T.add(u),e.updateQueue=T}else E.add(u);break e}else{if(!(e&1)){f0(s,c,e),Jp();break e}u=Error(B(426))}}else if(Ee&&a.mode&1){var R=p0(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),m0(R,o,a,s,e),Np(ws(u,a));break e}}s=u=ws(u,a),Fe!==4&&(Fe=2),Do===null?Do=[s]:Do.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var _=jw(s,u,e);a0(s,_);break e;case 1:a=u;var y=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(Ir===null||!Ir.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=zw(s,a,e);a0(s,O);break e}}s=s.return}while(s!==null)}oE(n)}catch(V){e=V,De===n&&n!==null&&(De=n=n.return);continue}break}while(!0)}function iE(){var t=Ru.current;return Ru.current=Au,t===null?Au:t}function Jp(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),$e===null||!(yi&268435455)&&!(dc&268435455)||hr($e,Ke)}function ku(t,e){var n=ue;ue|=2;var r=iE();($e!==t||Ke!==e)&&(xn=null,ui(t,e));do try{lP();break}catch(i){rE(t,i)}while(!0);if(Dp(),ue=n,Ru.current=r,De!==null)throw Error(B(261));return $e=null,Ke=0,Fe}function lP(){for(;De!==null;)sE(De)}function uP(){for(;De!==null&&!DR();)sE(De)}function sE(t){var e=lE(t.alternate,t,Rt);t.memoizedProps=t.pendingProps,e===null?oE(t):De=e,Gp.current=null}function oE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=nP(n,e),n!==null){n.flags&=32767,De=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Fe=6,De=null;return}}else if(n=tP(n,e,Rt),n!==null){De=n;return}if(e=e.sibling,e!==null){De=e;return}De=e=t}while(e!==null);Fe===0&&(Fe=5)}function Jr(t,e,n){var r=de,i=jt.transition;try{jt.transition=null,de=1,cP(t,e,n,r)}finally{jt.transition=i,de=r}return null}function cP(t,e,n,r){do us();while(gr!==null);if(ue&6)throw Error(B(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(qR(t,s),t===$e&&(De=$e=null,Ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||El||(El=!0,uE(cu,function(){return us(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=jt.transition,jt.transition=null;var o=de;de=1;var a=ue;ue|=4,Gp.current=null,iP(t,n),eE(n,t),xC(zd),du=!!jd,zd=jd=null,t.current=n,sP(n),LR(),ue=a,de=o,jt.transition=s}else t.current=n;if(El&&(El=!1,gr=t,Pu=i),s=t.pendingLanes,s===0&&(Ir=null),FR(n.stateNode),Et(t,Ne()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Cu)throw Cu=!1,t=lf,lf=null,t;return Pu&1&&t.tag!==0&&us(),s=t.pendingLanes,s&1?t===uf?Lo++:(Lo=0,uf=t):Lo=0,$r(),null}function us(){if(gr!==null){var t=j1(Pu),e=jt.transition,n=de;try{if(jt.transition=null,de=16>t?16:t,gr===null)var r=!1;else{if(t=gr,gr=null,Pu=0,ue&6)throw Error(B(331));var i=ue;for(ue|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(W=c;W!==null;){var d=W;switch(d.tag){case 0:case 11:case 15:Oo(8,d,s)}var p=d.child;if(p!==null)p.return=d,W=p;else for(;W!==null;){d=W;var m=d.sibling,w=d.return;if(Xw(d),d===c){W=null;break}if(m!==null){m.return=w,W=m;break}W=w}}}var E=s.alternate;if(E!==null){var T=E.child;if(T!==null){E.child=null;do{var R=T.sibling;T.sibling=null,T=R}while(T!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Oo(9,s,s.return)}var _=s.sibling;if(_!==null){_.return=s.return,W=_;break e}W=s.return}}var y=t.current;for(W=y;W!==null;){o=W;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,W=I;else e:for(o=y;W!==null;){if(a=W,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:hc(9,a)}}catch(V){ke(a,a.return,V)}if(a===o){W=null;break e}var O=a.sibling;if(O!==null){O.return=a.return,W=O;break e}W=a.return}}if(ue=i,$r(),fn&&typeof fn.onPostCommitFiberRoot=="function")try{fn.onPostCommitFiberRoot(rc,t)}catch{}r=!0}return r}finally{de=n,jt.transition=e}}return!1}function P0(t,e,n){e=ws(n,e),e=jw(t,e,1),t=Tr(t,e,1),e=dt(),t!==null&&(Ia(t,1,e),Et(t,e))}function ke(t,e,n){if(t.tag===3)P0(t,t,n);else for(;e!==null;){if(e.tag===3){P0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ir===null||!Ir.has(r))){t=ws(n,t),t=zw(e,t,1),e=Tr(e,t,1),t=dt(),e!==null&&(Ia(e,1,t),Et(e,t));break}}e=e.return}}function hP(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=dt(),t.pingedLanes|=t.suspendedLanes&n,$e===t&&(Ke&n)===n&&(Fe===4||Fe===3&&(Ke&130023424)===Ke&&500>Ne()-Qp?ui(t,0):Kp|=n),Et(t,e)}function aE(t,e){e===0&&(t.mode&1?(e=hl,hl<<=1,!(hl&130023424)&&(hl=4194304)):e=1);var n=dt();t=$n(t,e),t!==null&&(Ia(t,e,n),Et(t,n))}function dP(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),aE(t,n)}function fP(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),aE(t,n)}var lE;lE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||_t.current)vt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return vt=!1,eP(t,e,n);vt=!!(t.flags&131072)}else vt=!1,Ee&&e.flags&1048576&&dw(e,_u,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;zl(t,e),t=e.pendingProps;var i=gs(e,ot.current);ls(e,n),i=Bp(null,e,r,t,i,n);var s=$p();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,wt(r)?(s=!0,yu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vp(e),i.updater=cc,e.stateNode=i,i._reactInternals=e,Yd(e,r,t,n),e=Zd(null,e,r,!0,s,n)):(e.tag=0,Ee&&s&&xp(e),ht(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(zl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=mP(r),t=Kt(r,t),i){case 0:e=Jd(null,e,r,t,n);break e;case 1:e=v0(null,e,r,t,n);break e;case 11:e=g0(null,e,r,t,n);break e;case 14:e=y0(null,e,r,Kt(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),Jd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),v0(t,e,r,i,n);case 3:e:{if(Hw(e),t===null)throw Error(B(387));r=e.pendingProps,s=e.memoizedState,i=s.element,vw(t,e),Tu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ws(Error(B(423)),e),e=_0(t,e,r,n,i);break e}else if(r!==i){i=ws(Error(B(424)),e),e=_0(t,e,r,n,i);break e}else for(Ct=Er(e.stateNode.containerInfo.firstChild),Pt=e,Ee=!0,Yt=null,n=gw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ys(),r===i){e=qn(t,e,n);break e}ht(t,e,r,n)}e=e.child}return e;case 5:return _w(e),t===null&&Gd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Bd(r,i)?o=null:s!==null&&Bd(r,s)&&(e.flags|=32),qw(t,e),ht(t,e,o,n),e.child;case 6:return t===null&&Gd(e),null;case 13:return Ww(t,e,n);case 4:return Fp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=vs(e,null,r,n):ht(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),g0(t,e,r,i,n);case 7:return ht(t,e,e.pendingProps,n),e.child;case 8:return ht(t,e,e.pendingProps.children,n),e.child;case 12:return ht(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,me(wu,r._currentValue),r._currentValue=o,s!==null)if(tn(s.value,o)){if(s.children===i.children&&!_t.current){e=qn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Un(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Kd(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(B(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Kd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ht(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ls(e,n),i=$t(i),r=r(i),e.flags|=1,ht(t,e,r,n),e.child;case 14:return r=e.type,i=Kt(r,e.pendingProps),i=Kt(r.type,i),y0(t,e,r,i,n);case 15:return Bw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),zl(t,e),e.tag=1,wt(r)?(t=!0,yu(e)):t=!1,ls(e,n),Uw(e,r,i),Yd(e,r,i,n),Zd(null,e,r,!0,t,n);case 19:return Gw(t,e,n);case 22:return $w(t,e,n)}throw Error(B(156,e.tag))};function uE(t,e){return M1(t,e)}function pP(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(t,e,n,r){return new pP(t,e,n,r)}function Zp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function mP(t){if(typeof t=="function")return Zp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===vp)return 11;if(t===_p)return 14}return 2}function Ar(t,e){var n=t.alternate;return n===null?(n=Ut(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ql(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Zp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Hi:return ci(n.children,i,s,e);case yp:o=8,i|=8;break;case wd:return t=Ut(12,n,e,i|2),t.elementType=wd,t.lanes=s,t;case Ed:return t=Ut(13,n,e,i),t.elementType=Ed,t.lanes=s,t;case Td:return t=Ut(19,n,e,i),t.elementType=Td,t.lanes=s,t;case _1:return fc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case y1:o=10;break e;case v1:o=9;break e;case vp:o=11;break e;case _p:o=14;break e;case ar:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=Ut(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ci(t,e,n,r){return t=Ut(7,t,r,e),t.lanes=n,t}function fc(t,e,n,r){return t=Ut(22,t,r,e),t.elementType=_1,t.lanes=n,t.stateNode={isHidden:!1},t}function qh(t,e,n){return t=Ut(6,t,null,e),t.lanes=n,t}function Hh(t,e,n){return e=Ut(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function gP(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ah(0),this.expirationTimes=Ah(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ah(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function em(t,e,n,r,i,s,o,a,u){return t=new gP(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ut(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vp(s),t}function yP(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function cE(t){if(!t)return br;t=t._reactInternals;e:{if(Ci(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(wt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(wt(n))return cw(t,n,e)}return e}function hE(t,e,n,r,i,s,o,a,u){return t=em(n,r,!0,t,i,s,o,a,u),t.context=cE(null),n=t.current,r=dt(),i=Sr(n),s=Un(r,i),s.callback=e??null,Tr(n,s,i),t.current.lanes=i,Ia(t,i,r),Et(t,r),t}function pc(t,e,n,r){var i=e.current,s=dt(),o=Sr(i);return n=cE(n),e.context===null?e.context=n:e.pendingContext=n,e=Un(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Tr(i,e,o),t!==null&&(Zt(t,i,o,s),Fl(t,i,o)),o}function xu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function k0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function tm(t,e){k0(t,e),(t=t.alternate)&&k0(t,e)}function vP(){return null}var dE=typeof reportError=="function"?reportError:function(t){console.error(t)};function nm(t){this._internalRoot=t}mc.prototype.render=nm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));pc(t,e,null,null)};mc.prototype.unmount=nm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;vi(function(){pc(null,t,null,null)}),e[Bn]=null}};function mc(t){this._internalRoot=t}mc.prototype.unstable_scheduleHydration=function(t){if(t){var e=$1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<cr.length&&e!==0&&e<cr[n].priority;n++);cr.splice(n,0,t),n===0&&H1(t)}};function rm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function gc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function x0(){}function _P(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=xu(o);s.call(c)}}var o=hE(e,r,t,0,null,!1,!1,"",x0);return t._reactRootContainer=o,t[Bn]=o.current,Jo(t.nodeType===8?t.parentNode:t),vi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=xu(u);a.call(c)}}var u=em(t,0,!1,null,null,!1,!1,"",x0);return t._reactRootContainer=u,t[Bn]=u.current,Jo(t.nodeType===8?t.parentNode:t),vi(function(){pc(e,u,n,r)}),u}function yc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=xu(o);a.call(u)}}pc(e,o,t,i)}else o=_P(n,e,t,i,r);return xu(o)}z1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=wo(e.pendingLanes);n!==0&&(Tp(e,n|1),Et(e,Ne()),!(ue&6)&&(Es=Ne()+500,$r()))}break;case 13:vi(function(){var r=$n(t,1);if(r!==null){var i=dt();Zt(r,t,1,i)}}),tm(t,1)}};Ip=function(t){if(t.tag===13){var e=$n(t,134217728);if(e!==null){var n=dt();Zt(e,t,134217728,n)}tm(t,134217728)}};B1=function(t){if(t.tag===13){var e=Sr(t),n=$n(t,e);if(n!==null){var r=dt();Zt(n,t,e,r)}tm(t,e)}};$1=function(){return de};q1=function(t,e){var n=de;try{return de=t,e()}finally{de=n}};Nd=function(t,e,n){switch(e){case"input":if(Ad(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ac(r);if(!i)throw Error(B(90));E1(r),Ad(r,i)}}}break;case"textarea":I1(t,n);break;case"select":e=n.value,e!=null&&is(t,!!n.multiple,e,!1)}};x1=Yp;b1=vi;var wP={usingClientEntryPoint:!1,Events:[Aa,Qi,ac,P1,k1,Yp]},po={findFiberByHostInstance:ei,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},EP={bundleType:po.bundleType,version:po.version,rendererPackageName:po.rendererPackageName,rendererConfig:po.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=D1(t),t===null?null:t.stateNode},findFiberByHostInstance:po.findFiberByHostInstance||vP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tl.isDisabled&&Tl.supportsFiber)try{rc=Tl.inject(EP),fn=Tl}catch{}}Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wP;Nt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rm(e))throw Error(B(200));return yP(t,e,null,n)};Nt.createRoot=function(t,e){if(!rm(t))throw Error(B(299));var n=!1,r="",i=dE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=em(t,1,!1,null,null,n,!1,r,i),t[Bn]=e.current,Jo(t.nodeType===8?t.parentNode:t),new nm(e)};Nt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=D1(e),t=t===null?null:t.stateNode,t};Nt.flushSync=function(t){return vi(t)};Nt.hydrate=function(t,e,n){if(!gc(e))throw Error(B(200));return yc(null,t,e,!0,n)};Nt.hydrateRoot=function(t,e,n){if(!rm(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=dE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=hE(e,null,t,1,n??null,i,!1,s,o),t[Bn]=e.current,Jo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new mc(e)};Nt.render=function(t,e,n){if(!gc(e))throw Error(B(200));return yc(null,t,e,!1,n)};Nt.unmountComponentAtNode=function(t){if(!gc(t))throw Error(B(40));return t._reactRootContainer?(vi(function(){yc(null,null,t,!1,function(){t._reactRootContainer=null,t[Bn]=null})}),!0):!1};Nt.unstable_batchedUpdates=Yp;Nt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!gc(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return yc(t,e,n,!1,r)};Nt.version="18.3.1-next-f1338f8080-20240426";function fE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fE)}catch(t){console.error(t)}}fE(),f1.exports=Nt;var TP=f1.exports,pE,b0=TP;pE=b0.createRoot,b0.hydrateRoot;var im={};Object.defineProperty(im,"__esModule",{value:!0});im.parse=kP;im.serialize=xP;const IP=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,SP=/^[\u0021-\u003A\u003C-\u007E]*$/,AP=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,RP=/^[\u0020-\u003A\u003D-\u007E]*$/,CP=Object.prototype.toString,PP=(()=>{const t=function(){};return t.prototype=Object.create(null),t})();function kP(t,e){const n=new PP,r=t.length;if(r<2)return n;const i=(e==null?void 0:e.decode)||bP;let s=0;do{const o=t.indexOf("=",s);if(o===-1)break;const a=t.indexOf(";",s),u=a===-1?r:a;if(o>u){s=t.lastIndexOf(";",o-1)+1;continue}const c=N0(t,s,o),d=O0(t,o,c),p=t.slice(c,d);if(n[p]===void 0){let m=N0(t,o+1,u),w=O0(t,u,m);const E=i(t.slice(m,w));n[p]=E}s=u+1}while(s<r);return n}function N0(t,e,n){do{const r=t.charCodeAt(e);if(r!==32&&r!==9)return e}while(++e<n);return n}function O0(t,e,n){for(;e>n;){const r=t.charCodeAt(--e);if(r!==32&&r!==9)return e+1}return n}function xP(t,e,n){const r=(n==null?void 0:n.encode)||encodeURIComponent;if(!IP.test(t))throw new TypeError(`argument name is invalid: ${t}`);const i=r(e);if(!SP.test(i))throw new TypeError(`argument val is invalid: ${e}`);let s=t+"="+i;if(!n)return s;if(n.maxAge!==void 0){if(!Number.isInteger(n.maxAge))throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);s+="; Max-Age="+n.maxAge}if(n.domain){if(!AP.test(n.domain))throw new TypeError(`option domain is invalid: ${n.domain}`);s+="; Domain="+n.domain}if(n.path){if(!RP.test(n.path))throw new TypeError(`option path is invalid: ${n.path}`);s+="; Path="+n.path}if(n.expires){if(!NP(n.expires)||!Number.isFinite(n.expires.valueOf()))throw new TypeError(`option expires is invalid: ${n.expires}`);s+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(s+="; HttpOnly"),n.secure&&(s+="; Secure"),n.partitioned&&(s+="; Partitioned"),n.priority)switch(typeof n.priority=="string"?n.priority.toLowerCase():void 0){case"low":s+="; Priority=Low";break;case"medium":s+="; Priority=Medium";break;case"high":s+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${n.priority}`)}if(n.sameSite)switch(typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite){case!0:case"strict":s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"none":s+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${n.sameSite}`)}return s}function bP(t){if(t.indexOf("%")===-1)return t;try{return decodeURIComponent(t)}catch{return t}}function NP(t){return CP.call(t)==="[object Date]"}/**
 * react-router v7.0.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var D0="popstate";function OP(t={}){function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return df("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:aa(i)}return LP(e,n,null,t)}function Ae(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function qr(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function DP(){return Math.random().toString(36).substring(2,10)}function L0(t,e){return{usr:t.state,key:t.key,idx:e}}function df(t,e,n=null,r){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?Ds(e):e,state:n,key:e&&e.key||r||DP()}}function aa({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Ds(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substring(r),t=t.substring(0,r)),t&&(e.pathname=t)}return e}function LP(t,e,n,r={}){let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a="POP",u=null,c=d();c==null&&(c=0,o.replaceState({...o.state,idx:c},""));function d(){return(o.state||{idx:null}).idx}function p(){a="POP";let R=d(),_=R==null?null:R-c;c=R,u&&u({action:a,location:T.location,delta:_})}function m(R,_){a="PUSH";let y=df(T.location,R,_);c=d()+1;let I=L0(y,c),O=T.createHref(y);try{o.pushState(I,"",O)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;i.location.assign(O)}s&&u&&u({action:a,location:T.location,delta:1})}function w(R,_){a="REPLACE";let y=df(T.location,R,_);c=d();let I=L0(y,c),O=T.createHref(y);o.replaceState(I,"",O),s&&u&&u({action:a,location:T.location,delta:0})}function E(R){let _=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof R=="string"?R:aa(R);return y=y.replace(/ $/,"%20"),Ae(_,`No window.location.(origin|href) available to create URL for href: ${y}`),new URL(y,_)}let T={get action(){return a},get location(){return t(i,o)},listen(R){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(D0,p),u=R,()=>{i.removeEventListener(D0,p),u=null}},createHref(R){return e(i,R)},createURL:E,encodeLocation(R){let _=E(R);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:m,replace:w,go(R){return o.go(R)}};return T}function mE(t,e,n="/"){return MP(t,e,n,!1)}function MP(t,e,n,r){let i=typeof e=="string"?Ds(e):e,s=Nr(i.pathname||"/",n);if(s==null)return null;let o=gE(t);VP(o);let a=null;for(let u=0;a==null&&u<o.length;++u){let c=KP(s);a=WP(o[u],c,r)}return a}function gE(t,e=[],n=[],r=""){let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Ae(u.relativePath.startsWith(r),`Absolute route path "${u.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),u.relativePath=u.relativePath.slice(r.length));let c=jn([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(Ae(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${c}".`),gE(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:qP(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of yE(s.path))i(s,o,u)}),e}function yE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=yE(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function VP(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:HP(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var FP=/^:[\w-]+$/,UP=3,jP=2,zP=1,BP=10,$P=-2,M0=t=>t==="*";function qP(t,e){let n=t.split("/"),r=n.length;return n.some(M0)&&(r+=$P),e&&(r+=jP),n.filter(i=>!M0(i)).reduce((i,s)=>i+(FP.test(s)?UP:s===""?zP:BP),r)}function HP(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function WP(t,e,n=!1){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",p=bu({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!p&&c&&n&&!r[r.length-1].route.index&&(p=bu({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:jn([s,p.pathname]),pathnameBase:JP(jn([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=jn([s,p.pathnameBase]))}return o}function bu(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=GP(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,{paramName:d,isOptional:p},m)=>{if(d==="*"){let E=a[m]||"";o=s.slice(0,s.length-E.length).replace(/(.)\/+$/,"$1")}const w=a[m];return p&&!w?c[d]=void 0:c[d]=(w||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function GP(t,e=!1,n=!0){qr(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function KP(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return qr(!1,`The URL path "${t}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function Nr(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function QP(t,e="/"){let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ds(t):t;return{pathname:n?n.startsWith("/")?n:YP(n,e):e,search:ZP(r),hash:ek(i)}}function YP(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Wh(t,e,n,r){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function XP(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function vE(t){let e=XP(t);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function _E(t,e,n,r=!1){let i;typeof t=="string"?i=Ds(t):(i={...t},Ae(!i.pathname||!i.pathname.includes("?"),Wh("?","pathname","search",i)),Ae(!i.pathname||!i.pathname.includes("#"),Wh("#","pathname","hash",i)),Ae(!i.search||!i.search.includes("#"),Wh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}a=p>=0?e[p]:"/"}let u=QP(i,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}var jn=t=>t.join("/").replace(/\/\/+/g,"/"),JP=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),ZP=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,ek=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function tk(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var wE=["POST","PUT","PATCH","DELETE"];new Set(wE);var nk=["GET",...wE];new Set(nk);var Ls=M.createContext(null);Ls.displayName="DataRouter";var vc=M.createContext(null);vc.displayName="DataRouterState";var EE=M.createContext({isTransitioning:!1});EE.displayName="ViewTransition";var rk=M.createContext(new Map);rk.displayName="Fetchers";var ik=M.createContext(null);ik.displayName="Await";var Tn=M.createContext(null);Tn.displayName="Navigation";var Ca=M.createContext(null);Ca.displayName="Location";var Jn=M.createContext({outlet:null,matches:[],isDataRoute:!1});Jn.displayName="Route";var sm=M.createContext(null);sm.displayName="RouteError";function sk(t,{relative:e}={}){Ae(Pa(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=M.useContext(Tn),{hash:i,pathname:s,search:o}=ka(t,{relative:e}),a=s;return n!=="/"&&(a=s==="/"?n:jn([n,s])),r.createHref({pathname:a,search:o,hash:i})}function Pa(){return M.useContext(Ca)!=null}function Pi(){return Ae(Pa(),"useLocation() may be used only in the context of a <Router> component."),M.useContext(Ca).location}var TE="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function IE(t){M.useContext(Tn).static||M.useLayoutEffect(t)}function ok(){let{isDataRoute:t}=M.useContext(Jn);return t?_k():ak()}function ak(){Ae(Pa(),"useNavigate() may be used only in the context of a <Router> component.");let t=M.useContext(Ls),{basename:e,navigator:n}=M.useContext(Tn),{matches:r}=M.useContext(Jn),{pathname:i}=Pi(),s=JSON.stringify(vE(r)),o=M.useRef(!1);return IE(()=>{o.current=!0}),M.useCallback((u,c={})=>{if(qr(o.current,TE),!o.current)return;if(typeof u=="number"){n.go(u);return}let d=_E(u,JSON.parse(s),i,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:jn([e,d.pathname])),(c.replace?n.replace:n.push)(d,c.state,c)},[e,n,s,i,t])}M.createContext(null);function ka(t,{relative:e}={}){let{matches:n}=M.useContext(Jn),{pathname:r}=Pi(),i=JSON.stringify(vE(n));return M.useMemo(()=>_E(t,JSON.parse(i),r,e==="path"),[t,i,r,e])}function lk(t,e){return SE(t,e)}function SE(t,e,n,r){var T;Ae(Pa(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=M.useContext(Tn),{matches:s}=M.useContext(Jn),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Pi(),d;if(e){let R=typeof e=="string"?Ds(e):e;Ae(u==="/"||((T=R.pathname)==null?void 0:T.startsWith(u)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${R.pathname}" was given in the \`location\` prop.`),d=R}else d=c;let p=d.pathname||"/",m=p;if(u!=="/"){let R=u.replace(/^\//,"").split("/");m="/"+p.replace(/^\//,"").split("/").slice(R.length).join("/")}let w=mE(t,{pathname:m}),E=fk(w&&w.map(R=>Object.assign({},R,{params:Object.assign({},a,R.params),pathname:jn([u,i.encodeLocation?i.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?u:jn([u,i.encodeLocation?i.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),s,n,r);return e&&E?M.createElement(Ca.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...d},navigationType:"POP"}},E):E}function uk(){let t=vk(),e=tk(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},e),n?M.createElement("pre",{style:i},n):null,null)}var ck=M.createElement(uk,null),hk=class extends M.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?M.createElement(Jn.Provider,{value:this.props.routeContext},M.createElement(sm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function dk({routeContext:t,match:e,children:n}){let r=M.useContext(Ls);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),M.createElement(Jn.Provider,{value:t},n)}function fk(t,e=[],n=null,r=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let i=t,s=n==null?void 0:n.errors;if(s!=null){let u=i.findIndex(c=>c.route.id&&(s==null?void 0:s[c.route.id])!==void 0);Ae(u>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),i=i.slice(0,Math.min(i.length,u+1))}let o=!1,a=-1;if(n)for(let u=0;u<i.length;u++){let c=i[u];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(a=u),c.route.id){let{loaderData:d,errors:p}=n,m=c.route.loader&&!d.hasOwnProperty(c.route.id)&&(!p||p[c.route.id]===void 0);if(c.route.lazy||m){o=!0,a>=0?i=i.slice(0,a+1):i=[i[0]];break}}}return i.reduceRight((u,c,d)=>{let p,m=!1,w=null,E=null;n&&(p=s&&c.route.id?s[c.route.id]:void 0,w=c.route.errorElement||ck,o&&(a<0&&d===0?(wk("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),m=!0,E=null):a===d&&(m=!0,E=c.route.hydrateFallbackElement||null)));let T=e.concat(i.slice(0,d+1)),R=()=>{let _;return p?_=w:m?_=E:c.route.Component?_=M.createElement(c.route.Component,null):c.route.element?_=c.route.element:_=u,M.createElement(dk,{match:c,routeContext:{outlet:u,matches:T,isDataRoute:n!=null},children:_})};return n&&(c.route.ErrorBoundary||c.route.errorElement||d===0)?M.createElement(hk,{location:n.location,revalidation:n.revalidation,component:w,error:p,children:R(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):R()},null)}function om(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function pk(t){let e=M.useContext(Ls);return Ae(e,om(t)),e}function mk(t){let e=M.useContext(vc);return Ae(e,om(t)),e}function gk(t){let e=M.useContext(Jn);return Ae(e,om(t)),e}function am(t){let e=gk(t),n=e.matches[e.matches.length-1];return Ae(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function yk(){return am("useRouteId")}function vk(){var r;let t=M.useContext(sm),e=mk("useRouteError"),n=am("useRouteError");return t!==void 0?t:(r=e.errors)==null?void 0:r[n]}function _k(){let{router:t}=pk("useNavigate"),e=am("useNavigate"),n=M.useRef(!1);return IE(()=>{n.current=!0}),M.useCallback(async(i,s={})=>{qr(n.current,TE),n.current&&(typeof i=="number"?t.navigate(i):await t.navigate(i,{fromRouteId:e,...s}))},[t,e])}var V0={};function wk(t,e,n){V0[t]||(V0[t]=!0,qr(!1,n))}M.memo(Ek);function Ek({routes:t,future:e,state:n}){return SE(t,void 0,n,e)}function To(t){Ae(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Tk({basename:t="/",children:e=null,location:n,navigationType:r="POP",navigator:i,static:s=!1}){Ae(!Pa(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=t.replace(/^\/*/,"/"),a=M.useMemo(()=>({basename:o,navigator:i,static:s,future:{}}),[o,i,s]);typeof n=="string"&&(n=Ds(n));let{pathname:u="/",search:c="",hash:d="",state:p=null,key:m="default"}=n,w=M.useMemo(()=>{let E=Nr(u,o);return E==null?null:{location:{pathname:E,search:c,hash:d,state:p,key:m},navigationType:r}},[o,u,c,d,p,m,r]);return qr(w!=null,`<Router basename="${o}"> is not able to match the URL "${u}${c}${d}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:M.createElement(Tn.Provider,{value:a},M.createElement(Ca.Provider,{children:e,value:w}))}function Ik({children:t,location:e}){return lk(ff(t),e)}function ff(t,e=[]){let n=[];return M.Children.forEach(t,(r,i)=>{if(!M.isValidElement(r))return;let s=[...e,i];if(r.type===M.Fragment){n.push.apply(n,ff(r.props.children,s));return}Ae(r.type===To,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ae(!r.props.index||!r.props.children,"An index route cannot have child routes.");let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ff(r.props.children,s)),n.push(o)}),n}var Hl="get",Wl="application/x-www-form-urlencoded";function _c(t){return t!=null&&typeof t.tagName=="string"}function Sk(t){return _c(t)&&t.tagName.toLowerCase()==="button"}function Ak(t){return _c(t)&&t.tagName.toLowerCase()==="form"}function Rk(t){return _c(t)&&t.tagName.toLowerCase()==="input"}function Ck(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Pk(t,e){return t.button===0&&(!e||e==="_self")&&!Ck(t)}var Il=null;function kk(){if(Il===null)try{new FormData(document.createElement("form"),0),Il=!1}catch{Il=!0}return Il}var xk=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Gh(t){return t!=null&&!xk.has(t)?(qr(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Wl}"`),null):t}function bk(t,e){let n,r,i,s,o;if(Ak(t)){let a=t.getAttribute("action");r=a?Nr(a,e):null,n=t.getAttribute("method")||Hl,i=Gh(t.getAttribute("enctype"))||Wl,s=new FormData(t)}else if(Sk(t)||Rk(t)&&(t.type==="submit"||t.type==="image")){let a=t.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=t.getAttribute("formaction")||a.getAttribute("action");if(r=u?Nr(u,e):null,n=t.getAttribute("formmethod")||a.getAttribute("method")||Hl,i=Gh(t.getAttribute("formenctype"))||Gh(a.getAttribute("enctype"))||Wl,s=new FormData(a,t),!kk()){let{name:c,type:d,value:p}=t;if(d==="image"){let m=c?`${c}.`:"";s.append(`${m}x`,"0"),s.append(`${m}y`,"0")}else c&&s.append(c,p)}}else{if(_c(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Hl,r=null,i=Wl,o=t}return s&&i==="text/plain"&&(o=s,s=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:s,body:o}}function lm(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}async function Nk(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ok(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function Dk(t,e,n){let r=await Promise.all(t.map(async i=>{let s=e.routes[i.route.id];if(s){let o=await Nk(s,n);return o.links?o.links():[]}return[]}));return Fk(r.flat(1).filter(Ok).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function F0(t,e,n,r,i,s){let o=(u,c)=>n[c]?u.route.id!==n[c].route.id:!0,a=(u,c)=>{var d;return n[c].pathname!==u.pathname||((d=n[c].route.path)==null?void 0:d.endsWith("*"))&&n[c].params["*"]!==u.params["*"]};return s==="assets"?e.filter((u,c)=>o(u,c)||a(u,c)):s==="data"?e.filter((u,c)=>{var p;let d=r.routes[u.route.id];if(!d||!d.hasLoader)return!1;if(o(u,c)||a(u,c))return!0;if(u.route.shouldRevalidate){let m=u.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((p=n[0])==null?void 0:p.params)||{},nextUrl:new URL(t,window.origin),nextParams:u.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function Lk(t,e){return Mk(t.map(n=>{let r=e.routes[n.route.id];if(!r)return[];let i=[r.module];return r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function Mk(t){return[...new Set(t)]}function Vk(t){let e={},n=Object.keys(t).sort();for(let r of n)e[r]=t[r];return e}function Fk(t,e){let n=new Set;return new Set(e),t.reduce((r,i)=>{let s=JSON.stringify(Vk(i));return n.has(s)||(n.add(s),r.push({key:s,link:i})),r},[])}function Uk(t){let e=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function jk(){let t=M.useContext(Ls);return lm(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function zk(){let t=M.useContext(vc);return lm(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var um=M.createContext(void 0);um.displayName="FrameworkContext";function AE(){let t=M.useContext(um);return lm(t,"You must render this element inside a <HydratedRouter> element"),t}function Bk(t,e){let n=M.useContext(um),[r,i]=M.useState(!1),[s,o]=M.useState(!1),{onFocus:a,onBlur:u,onMouseEnter:c,onMouseLeave:d,onTouchStart:p}=e,m=M.useRef(null);M.useEffect(()=>{if(t==="render"&&o(!0),t==="viewport"){let T=_=>{_.forEach(y=>{o(y.isIntersecting)})},R=new IntersectionObserver(T,{threshold:.5});return m.current&&R.observe(m.current),()=>{R.disconnect()}}},[t]),M.useEffect(()=>{if(r){let T=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(T)}}},[r]);let w=()=>{i(!0)},E=()=>{i(!1),o(!1)};return n?t!=="intent"?[s,m,{}]:[s,m,{onFocus:mo(a,w),onBlur:mo(u,E),onMouseEnter:mo(c,w),onMouseLeave:mo(d,E),onTouchStart:mo(p,w)}]:[!1,m,{}]}function mo(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function $k({page:t,...e}){let{router:n}=jk(),r=M.useMemo(()=>mE(n.routes,t,n.basename),[n.routes,t,n.basename]);return r?M.createElement(Hk,{page:t,matches:r,...e}):(console.warn(`Tried to prefetch ${t} but no routes matched.`),null)}function qk(t){let{manifest:e,routeModules:n}=AE(),[r,i]=M.useState([]);return M.useEffect(()=>{let s=!1;return Dk(t,e,n).then(o=>{s||i(o)}),()=>{s=!0}},[t,e,n]),r}function Hk({page:t,matches:e,...n}){let r=Pi(),{manifest:i,routeModules:s}=AE(),{loaderData:o,matches:a}=zk(),u=M.useMemo(()=>F0(t,e,a,i,r,"data"),[t,e,a,i,r]),c=M.useMemo(()=>F0(t,e,a,i,r,"assets"),[t,e,a,i,r]),d=M.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let w=new Set,E=!1;if(e.forEach(R=>{var y;let _=i.routes[R.route.id];!_||!_.hasLoader||(!u.some(I=>I.route.id===R.route.id)&&R.route.id in o&&((y=s[R.route.id])!=null&&y.shouldRevalidate)||_.hasClientLoader?E=!0:w.add(R.route.id))}),w.size===0)return[];let T=Uk(t);return E&&w.size>0&&T.searchParams.set("_routes",e.filter(R=>w.has(R.route.id)).map(R=>R.route.id).join(",")),[T.pathname+T.search]},[o,r,i,u,e,t,s]),p=M.useMemo(()=>Lk(c,i),[c,i]),m=qk(c);return M.createElement(M.Fragment,null,d.map(w=>M.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...n})),p.map(w=>M.createElement("link",{key:w,rel:"modulepreload",href:w,...n})),m.map(({key:w,link:E})=>M.createElement("link",{key:w,...E})))}function Wk(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var RE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{RE&&(window.__reactRouterVersion="7.0.1")}catch{}function Gk({basename:t,children:e,window:n}){let r=M.useRef();r.current==null&&(r.current=OP({window:n,v5Compat:!0}));let i=r.current,[s,o]=M.useState({action:i.action,location:i.location}),a=M.useCallback(u=>{M.startTransition(()=>o(u))},[o]);return M.useLayoutEffect(()=>i.listen(a),[i,a]),M.createElement(Tk,{basename:t,children:e,location:s.location,navigationType:s.action,navigator:i})}var CE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ri=M.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:i,reloadDocument:s,replace:o,state:a,target:u,to:c,preventScrollReset:d,viewTransition:p,...m},w){let{basename:E}=M.useContext(Tn),T=typeof c=="string"&&CE.test(c),R,_=!1;if(typeof c=="string"&&T&&(R=c,RE))try{let S=new URL(window.location.href),C=c.startsWith("//")?new URL(S.protocol+c):new URL(c),k=Nr(C.pathname,E);C.origin===S.origin&&k!=null?c=k+C.search+C.hash:_=!0}catch{qr(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let y=sk(c,{relative:i}),[I,O,V]=Bk(r,m),j=Xk(c,{replace:o,state:a,target:u,preventScrollReset:d,relative:i,viewTransition:p});function A(S){e&&e(S),S.defaultPrevented||j(S)}let v=M.createElement("a",{...m,...V,href:R||y,onClick:_||s?e:A,ref:Wk(w,O),target:u,"data-discover":!T&&n==="render"?"true":void 0});return I&&!T?M.createElement(M.Fragment,null,v,M.createElement($k,{page:y})):v});ri.displayName="Link";var Kk=M.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:i=!1,style:s,to:o,viewTransition:a,children:u,...c},d){let p=ka(o,{relative:c.relative}),m=Pi(),w=M.useContext(vc),{navigator:E,basename:T}=M.useContext(Tn),R=w!=null&&n2(p)&&a===!0,_=E.encodeLocation?E.encodeLocation(p).pathname:p.pathname,y=m.pathname,I=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;n||(y=y.toLowerCase(),I=I?I.toLowerCase():null,_=_.toLowerCase()),I&&T&&(I=Nr(I,T)||I);const O=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let V=y===_||!i&&y.startsWith(_)&&y.charAt(O)==="/",j=I!=null&&(I===_||!i&&I.startsWith(_)&&I.charAt(_.length)==="/"),A={isActive:V,isPending:j,isTransitioning:R},v=V?e:void 0,S;typeof r=="function"?S=r(A):S=[r,V?"active":null,j?"pending":null,R?"transitioning":null].filter(Boolean).join(" ");let C=typeof s=="function"?s(A):s;return M.createElement(ri,{...c,"aria-current":v,className:S,ref:d,style:C,to:o,viewTransition:a},typeof u=="function"?u(A):u)});Kk.displayName="NavLink";var Qk=M.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:i,state:s,method:o=Hl,action:a,onSubmit:u,relative:c,preventScrollReset:d,viewTransition:p,...m},w)=>{let E=e2(),T=t2(a,{relative:c}),R=o.toLowerCase()==="get"?"get":"post",_=typeof a=="string"&&CE.test(a),y=I=>{if(u&&u(I),I.defaultPrevented)return;I.preventDefault();let O=I.nativeEvent.submitter,V=(O==null?void 0:O.getAttribute("formmethod"))||o;E(O||I.currentTarget,{fetcherKey:e,method:V,navigate:n,replace:i,state:s,relative:c,preventScrollReset:d,viewTransition:p})};return M.createElement("form",{ref:w,method:R,action:T,onSubmit:r?u:y,...m,"data-discover":!_&&t==="render"?"true":void 0})});Qk.displayName="Form";function Yk(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function PE(t){let e=M.useContext(Ls);return Ae(e,Yk(t)),e}function Xk(t,{target:e,replace:n,state:r,preventScrollReset:i,relative:s,viewTransition:o}={}){let a=ok(),u=Pi(),c=ka(t,{relative:s});return M.useCallback(d=>{if(Pk(d,e)){d.preventDefault();let p=n!==void 0?n:aa(u)===aa(c);a(t,{replace:p,state:r,preventScrollReset:i,relative:s,viewTransition:o})}},[u,a,c,n,r,e,t,i,s,o])}var Jk=0,Zk=()=>`__${String(++Jk)}__`;function e2(){let{router:t}=PE("useSubmit"),{basename:e}=M.useContext(Tn),n=yk();return M.useCallback(async(r,i={})=>{let{action:s,method:o,encType:a,formData:u,body:c}=bk(r,e);if(i.navigate===!1){let d=i.fetcherKey||Zk();await t.fetch(d,n,i.action||s,{preventScrollReset:i.preventScrollReset,formData:u,body:c,formMethod:i.method||o,formEncType:i.encType||a,flushSync:i.flushSync})}else await t.navigate(i.action||s,{preventScrollReset:i.preventScrollReset,formData:u,body:c,formMethod:i.method||o,formEncType:i.encType||a,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[t,e,n])}function t2(t,{relative:e}={}){let{basename:n}=M.useContext(Tn),r=M.useContext(Jn);Ae(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),s={...ka(t||".",{relative:e})},o=Pi();if(t==null){s.search=o.search;let a=new URLSearchParams(s.search),u=a.getAll("index");if(u.some(d=>d==="")){a.delete("index"),u.filter(p=>p).forEach(p=>a.append("index",p));let d=a.toString();s.search=d?`?${d}`:""}}return(!t||t===".")&&i.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:jn([n,s.pathname])),aa(s)}function n2(t,e={}){let n=M.useContext(EE);Ae(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=PE("useViewTransitionState"),i=ka(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Nr(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Nr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return bu(i.pathname,o)!=null||bu(i.pathname,s)!=null}new TextEncoder;/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function r2(t,e,n){return(e=s2(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function U0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function z(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?U0(Object(n),!0).forEach(function(r){r2(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):U0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function i2(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function s2(t){var e=i2(t,"string");return typeof e=="symbol"?e:e+""}const j0=()=>{};let cm={},kE={},xE=null,bE={mark:j0,measure:j0};try{typeof window<"u"&&(cm=window),typeof document<"u"&&(kE=document),typeof MutationObserver<"u"&&(xE=MutationObserver),typeof performance<"u"&&(bE=performance)}catch{}const{userAgent:z0=""}=cm.navigator||{},Or=cm,we=kE,B0=xE,Sl=bE;Or.document;const Zn=!!we.documentElement&&!!we.head&&typeof we.addEventListener=="function"&&typeof we.createElement=="function",NE=~z0.indexOf("MSIE")||~z0.indexOf("Trident/");var o2=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,a2=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,OE={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},l2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},DE=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],at="classic",wc="duotone",u2="sharp",c2="sharp-duotone",LE=[at,wc,u2,c2],h2={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},d2={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},f2=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),p2={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},m2=["fak","fa-kit","fakd","fa-kit-duotone"],$0={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},g2=["kit"],y2={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},v2=["fak","fakd"],_2={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},q0={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Al={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},w2=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],E2=["fak","fa-kit","fakd","fa-kit-duotone"],T2={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},I2={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},S2={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},pf={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},A2=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],mf=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...w2,...A2],R2=["solid","regular","light","thin","duotone","brands"],ME=[1,2,3,4,5,6,7,8,9,10],C2=ME.concat([11,12,13,14,15,16,17,18,19,20]),P2=[...Object.keys(S2),...R2,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Al.GROUP,Al.SWAP_OPACITY,Al.PRIMARY,Al.SECONDARY].concat(ME.map(t=>"".concat(t,"x"))).concat(C2.map(t=>"w-".concat(t))),k2={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const Hn="___FONT_AWESOME___",gf=16,VE="fa",FE="svg-inline--fa",_i="data-fa-i2svg",yf="data-fa-pseudo-element",x2="data-fa-pseudo-element-pending",hm="data-prefix",dm="data-icon",H0="fontawesome-i2svg",b2="async",N2=["HTML","HEAD","STYLE","SCRIPT"],UE=(()=>{try{return!0}catch{return!1}})();function xa(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[at]}})}const jE=z({},OE);jE[at]=z(z(z(z({},{"fa-duotone":"duotone"}),OE[at]),$0.kit),$0["kit-duotone"]);const O2=xa(jE),vf=z({},p2);vf[at]=z(z(z(z({},{duotone:"fad"}),vf[at]),q0.kit),q0["kit-duotone"]);const W0=xa(vf),_f=z({},pf);_f[at]=z(z({},_f[at]),_2.kit);const fm=xa(_f),wf=z({},I2);wf[at]=z(z({},wf[at]),y2.kit);xa(wf);const D2=o2,zE="fa-layers-text",L2=a2,M2=z({},h2);xa(M2);const V2=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Kh=l2,F2=[...g2,...P2],Mo=Or.FontAwesomeConfig||{};function U2(t){var e=we.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function j2(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}we&&typeof we.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const i=j2(U2(n));i!=null&&(Mo[r]=i)});const BE={styleDefault:"solid",familyDefault:at,cssPrefix:VE,replacementClass:FE,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Mo.familyPrefix&&(Mo.cssPrefix=Mo.familyPrefix);const Ts=z(z({},BE),Mo);Ts.autoReplaceSvg||(Ts.observeMutations=!1);const K={};Object.keys(BE).forEach(t=>{Object.defineProperty(K,t,{enumerable:!0,set:function(e){Ts[t]=e,Vo.forEach(n=>n(K))},get:function(){return Ts[t]}})});Object.defineProperty(K,"familyPrefix",{enumerable:!0,set:function(t){Ts.cssPrefix=t,Vo.forEach(e=>e(K))},get:function(){return Ts.cssPrefix}});Or.FontAwesomeConfig=K;const Vo=[];function z2(t){return Vo.push(t),()=>{Vo.splice(Vo.indexOf(t),1)}}const ir=gf,hn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function B2(t){if(!t||!Zn)return;const e=we.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=we.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return we.head.insertBefore(e,r),t}const $2="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function la(){let t=12,e="";for(;t-- >0;)e+=$2[Math.random()*62|0];return e}function Ms(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function pm(t){return t.classList?Ms(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function $E(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function q2(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat($E(t[n]),'" '),"").trim()}function Ec(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function mm(t){return t.size!==hn.size||t.x!==hn.x||t.y!==hn.y||t.rotate!==hn.rotate||t.flipX||t.flipY}function H2(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:u,path:c}}function W2(t){let{transform:e,width:n=gf,height:r=gf,startCentered:i=!1}=t,s="";return i&&NE?s+="translate(".concat(e.x/ir-n/2,"em, ").concat(e.y/ir-r/2,"em) "):i?s+="translate(calc(-50% + ".concat(e.x/ir,"em), calc(-50% + ").concat(e.y/ir,"em)) "):s+="translate(".concat(e.x/ir,"em, ").concat(e.y/ir,"em) "),s+="scale(".concat(e.size/ir*(e.flipX?-1:1),", ").concat(e.size/ir*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var G2=`:root, :host {
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
}`;function qE(){const t=VE,e=FE,n=K.cssPrefix,r=K.replacementClass;let i=G2;if(n!==t||r!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}let G0=!1;function Qh(){K.autoAddCss&&!G0&&(B2(qE()),G0=!0)}var K2={mixout(){return{dom:{css:qE,insertCss:Qh}}},hooks(){return{beforeDOMElementCreation(){Qh()},beforeI2svg(){Qh()}}}};const Wn=Or||{};Wn[Hn]||(Wn[Hn]={});Wn[Hn].styles||(Wn[Hn].styles={});Wn[Hn].hooks||(Wn[Hn].hooks={});Wn[Hn].shims||(Wn[Hn].shims=[]);var dn=Wn[Hn];const HE=[],WE=function(){we.removeEventListener("DOMContentLoaded",WE),Nu=1,HE.map(t=>t())};let Nu=!1;Zn&&(Nu=(we.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(we.readyState),Nu||we.addEventListener("DOMContentLoaded",WE));function Q2(t){Zn&&(Nu?setTimeout(t,0):HE.push(t))}function ba(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?$E(t):"<".concat(e," ").concat(q2(n),">").concat(r.map(ba).join(""),"</").concat(e,">")}function K0(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Yh=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=n,u,c,d;for(r===void 0?(u=1,d=e[s[0]]):(u=0,d=r);u<o;u++)c=s[u],d=a(d,e[c],c,e);return d};function Y2(t){const e=[];let n=0;const r=t.length;for(;n<r;){const i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Ef(t){const e=Y2(t);return e.length===1?e[0].toString(16):null}function X2(t,e){const n=t.length;let r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Q0(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function Tf(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=Q0(e);typeof dn.hooks.addPack=="function"&&!r?dn.hooks.addPack(t,Q0(e)):dn.styles[t]=z(z({},dn.styles[t]||{}),i),t==="fas"&&Tf("fa",e)}const{styles:ua,shims:J2}=dn,GE=Object.keys(fm),Z2=GE.reduce((t,e)=>(t[e]=Object.keys(fm[e]),t),{});let gm=null,KE={},QE={},YE={},XE={},JE={};function ex(t){return~F2.indexOf(t)}function tx(t,e){const n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!ex(i)?i:null}const ZE=()=>{const t=r=>Yh(ua,(i,s,o)=>(i[o]=Yh(s,r,{}),i),{});KE=t((r,i,s)=>(i[3]&&(r[i[3]]=s),i[2]&&i[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=s}),r)),QE=t((r,i,s)=>(r[s]=s,i[2]&&i[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=s}),r)),JE=t((r,i,s)=>{const o=i[2];return r[s]=s,o.forEach(a=>{r[a]=s}),r});const e="far"in ua||K.autoFetchSvg,n=Yh(J2,(r,i)=>{const s=i[0];let o=i[1];const a=i[2];return o==="far"&&!e&&(o="fas"),typeof s=="string"&&(r.names[s]={prefix:o,iconName:a}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});YE=n.names,XE=n.unicodes,gm=Tc(K.styleDefault,{family:K.familyDefault})};z2(t=>{gm=Tc(t.styleDefault,{family:K.familyDefault})});ZE();function ym(t,e){return(KE[t]||{})[e]}function nx(t,e){return(QE[t]||{})[e]}function ii(t,e){return(JE[t]||{})[e]}function eT(t){return YE[t]||{prefix:null,iconName:null}}function rx(t){const e=XE[t],n=ym("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Dr(){return gm}const tT=()=>({prefix:null,iconName:null,rest:[]});function ix(t){let e=at;const n=GE.reduce((r,i)=>(r[i]="".concat(K.cssPrefix,"-").concat(i),r),{});return LE.forEach(r=>{(t.includes(n[r])||t.some(i=>Z2[r].includes(i)))&&(e=r)}),e}function Tc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=at}=e,r=O2[n][t];if(n===wc&&!t)return"fad";const i=W0[n][t]||W0[n][r],s=t in dn.styles?t:null;return i||s||null}function sx(t){let e=[],n=null;return t.forEach(r=>{const i=tx(K.cssPrefix,r);i?n=i:r&&e.push(r)}),{iconName:n,rest:e}}function Y0(t){return t.sort().filter((e,n,r)=>r.indexOf(e)===n)}function Ic(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let r=null;const i=mf.concat(E2),s=Y0(t.filter(p=>i.includes(p))),o=Y0(t.filter(p=>!mf.includes(p))),a=s.filter(p=>(r=p,!DE.includes(p))),[u=null]=a,c=ix(s),d=z(z({},sx(o)),{},{prefix:Tc(u,{family:c})});return z(z(z({},d),ux({values:t,family:c,styles:ua,config:K,canonical:d,givenPrefix:r})),ox(n,r,d))}function ox(t,e,n){let{prefix:r,iconName:i}=n;if(t||!r||!i)return{prefix:r,iconName:i};const s=e==="fa"?eT(i):{},o=ii(r,i);return i=s.iconName||o||i,r=s.prefix||r,r==="far"&&!ua.far&&ua.fas&&!K.autoFetchSvg&&(r="fas"),{prefix:r,iconName:i}}const ax=LE.filter(t=>t!==at||t!==wc),lx=Object.keys(pf).filter(t=>t!==at).map(t=>Object.keys(pf[t])).flat();function ux(t){const{values:e,family:n,canonical:r,givenPrefix:i="",styles:s={},config:o={}}=t,a=n===wc,u=e.includes("fa-duotone")||e.includes("fad"),c=o.familyDefault==="duotone",d=r.prefix==="fad"||r.prefix==="fa-duotone";if(!a&&(u||c||d)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&ax.includes(n)&&(Object.keys(s).find(m=>lx.includes(m))||o.autoFetchSvg)){const m=f2.get(n).defaultShortPrefixId;r.prefix=m,r.iconName=ii(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||i==="fa")&&(r.prefix=Dr()||"fas"),r}class cx{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(s=>{this.definitions[s]=z(z({},this.definitions[s]||{}),i[s]),Tf(s,i[s]);const o=fm[at][s];o&&Tf(o,i[s]),ZE()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:s,iconName:o,icon:a}=r[i],u=a[2];e[s]||(e[s]={}),u.length>0&&u.forEach(c=>{typeof c=="string"&&(e[s][c]=a)}),e[s][o]=a}),e}}let X0=[],ns={};const cs={},hx=Object.keys(cs);function dx(t,e){let{mixoutsTo:n}=e;return X0=t,ns={},Object.keys(cs).forEach(r=>{hx.indexOf(r)===-1&&delete cs[r]}),X0.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(s=>{typeof i[s]=="function"&&(n[s]=i[s]),typeof i[s]=="object"&&Object.keys(i[s]).forEach(o=>{n[s]||(n[s]={}),n[s][o]=i[s][o]})}),r.hooks){const s=r.hooks();Object.keys(s).forEach(o=>{ns[o]||(ns[o]=[]),ns[o].push(s[o])})}r.provides&&r.provides(cs)}),n}function If(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(ns[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function wi(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(ns[t]||[]).forEach(s=>{s.apply(null,n)})}function Lr(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return cs[t]?cs[t].apply(null,e):void 0}function Sf(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Dr();if(e)return e=ii(n,e)||e,K0(nT.definitions,n,e)||K0(dn.styles,n,e)}const nT=new cx,fx=()=>{K.autoReplaceSvg=!1,K.observeMutations=!1,wi("noAuto")},px={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Zn?(wi("beforeI2svg",t),Lr("pseudoElements2svg",t),Lr("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;K.autoReplaceSvg===!1&&(K.autoReplaceSvg=!0),K.observeMutations=!0,Q2(()=>{gx({autoReplaceSvgRoot:e}),wi("watch",t)})}},mx={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ii(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Tc(t[0]);return{prefix:n,iconName:ii(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(K.cssPrefix,"-"))>-1||t.match(D2))){const e=Ic(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Dr(),iconName:ii(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Dr();return{prefix:e,iconName:ii(e,t)||t}}}},Dt={noAuto:fx,config:K,dom:px,parse:mx,library:nT,findIconDefinition:Sf,toHtml:ba},gx=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=we}=t;(Object.keys(dn.styles).length>0||K.autoFetchSvg)&&Zn&&K.autoReplaceSvg&&Dt.dom.i2svg({node:e})};function Sc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>ba(n))}}),Object.defineProperty(t,"node",{get:function(){if(!Zn)return;const n=we.createElement("div");return n.innerHTML=t.html,n.children}}),t}function yx(t){let{children:e,main:n,mask:r,attributes:i,styles:s,transform:o}=t;if(mm(o)&&n.found&&!r.found){const{width:a,height:u}=n,c={x:a/u/2,y:.5};i.style=Ec(z(z({},s),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function vx(t){let{prefix:e,iconName:n,children:r,attributes:i,symbol:s}=t;const o=s===!0?"".concat(e,"-").concat(K.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:z(z({},i),{},{id:o}),children:r}]}]}function vm(t){const{icons:{main:e,mask:n},prefix:r,iconName:i,transform:s,symbol:o,title:a,maskId:u,titleId:c,extra:d,watchable:p=!1}=t,{width:m,height:w}=n.found?n:e,E=v2.includes(r),T=[K.replacementClass,i?"".concat(K.cssPrefix,"-").concat(i):""].filter(V=>d.classes.indexOf(V)===-1).filter(V=>V!==""||!!V).concat(d.classes).join(" ");let R={children:[],attributes:z(z({},d.attributes),{},{"data-prefix":r,"data-icon":i,class:T,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(w)})};const _=E&&!~d.classes.indexOf("fa-fw")?{width:"".concat(m/w*16*.0625,"em")}:{};p&&(R.attributes[_i]=""),a&&(R.children.push({tag:"title",attributes:{id:R.attributes["aria-labelledby"]||"title-".concat(c||la())},children:[a]}),delete R.attributes.title);const y=z(z({},R),{},{prefix:r,iconName:i,main:e,mask:n,maskId:u,transform:s,symbol:o,styles:z(z({},_),d.styles)}),{children:I,attributes:O}=n.found&&e.found?Lr("generateAbstractMask",y)||{children:[],attributes:{}}:Lr("generateAbstractIcon",y)||{children:[],attributes:{}};return y.children=I,y.attributes=O,o?vx(y):yx(y)}function J0(t){const{content:e,width:n,height:r,transform:i,title:s,extra:o,watchable:a=!1}=t,u=z(z(z({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});a&&(u[_i]="");const c=z({},o.styles);mm(i)&&(c.transform=W2({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const d=Ec(c);d.length>0&&(u.style=d);const p=[];return p.push({tag:"span",attributes:u,children:[e]}),s&&p.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),p}function _x(t){const{content:e,title:n,extra:r}=t,i=z(z(z({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Ec(r.styles);s.length>0&&(i.style=s);const o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:Xh}=dn;function Af(t){const e=t[0],n=t[1],[r]=t.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(K.cssPrefix,"-").concat(Kh.GROUP)},children:[{tag:"path",attributes:{class:"".concat(K.cssPrefix,"-").concat(Kh.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(K.cssPrefix,"-").concat(Kh.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:i}}const wx={found:!1,width:512,height:512};function Ex(t,e){!UE&&!K.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Rf(t,e){let n=e;return e==="fa"&&K.styleDefault!==null&&(e=Dr()),new Promise((r,i)=>{if(n==="fa"){const s=eT(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Xh[e]&&Xh[e][t]){const s=Xh[e][t];return r(Af(s))}Ex(t,e),r(z(z({},wx),{},{icon:K.showMissingIcons&&t?Lr("missingIconAbstract")||{}:{}}))})}const Z0=()=>{},Cf=K.measurePerformance&&Sl&&Sl.mark&&Sl.measure?Sl:{mark:Z0,measure:Z0},Io='FA "6.7.1"',Tx=t=>(Cf.mark("".concat(Io," ").concat(t," begins")),()=>rT(t)),rT=t=>{Cf.mark("".concat(Io," ").concat(t," ends")),Cf.measure("".concat(Io," ").concat(t),"".concat(Io," ").concat(t," begins"),"".concat(Io," ").concat(t," ends"))};var _m={begin:Tx,end:rT};const Gl=()=>{};function ev(t){return typeof(t.getAttribute?t.getAttribute(_i):null)=="string"}function Ix(t){const e=t.getAttribute?t.getAttribute(hm):null,n=t.getAttribute?t.getAttribute(dm):null;return e&&n}function Sx(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(K.replacementClass)}function Ax(){return K.autoReplaceSvg===!0?Kl.replace:Kl[K.autoReplaceSvg]||Kl.replace}function Rx(t){return we.createElementNS("http://www.w3.org/2000/svg",t)}function Cx(t){return we.createElement(t)}function iT(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?Rx:Cx}=e;if(typeof t=="string")return we.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){r.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){r.appendChild(iT(s,{ceFn:n}))}),r}function Px(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Kl={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(iT(n),e)}),e.getAttribute(_i)===null&&K.keepOriginalSource){let n=we.createComment(Px(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~pm(e).indexOf(K.replacementClass))return Kl.replace(t);const r=new RegExp("".concat(K.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((o,a)=>(a===K.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const i=n.map(s=>ba(s)).join(`
`);e.setAttribute(_i,""),e.innerHTML=i}};function tv(t){t()}function sT(t,e){const n=typeof e=="function"?e:Gl;if(t.length===0)n();else{let r=tv;K.mutateApproach===b2&&(r=Or.requestAnimationFrame||tv),r(()=>{const i=Ax(),s=_m.begin("mutate");t.map(i),s(),n()})}}let wm=!1;function oT(){wm=!0}function Pf(){wm=!1}let Ou=null;function nv(t){if(!B0||!K.observeMutations)return;const{treeCallback:e=Gl,nodeCallback:n=Gl,pseudoElementsCallback:r=Gl,observeMutationsRoot:i=we}=t;Ou=new B0(s=>{if(wm)return;const o=Dr();Ms(s).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!ev(a.addedNodes[0])&&(K.searchPseudoElements&&r(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&K.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&ev(a.target)&&~V2.indexOf(a.attributeName))if(a.attributeName==="class"&&Ix(a.target)){const{prefix:u,iconName:c}=Ic(pm(a.target));a.target.setAttribute(hm,u||o),c&&a.target.setAttribute(dm,c)}else Sx(a.target)&&n(a.target)})}),Zn&&Ou.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function kx(){Ou&&Ou.disconnect()}function xx(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,i)=>{const s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function bx(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let i=Ic(pm(t));return i.prefix||(i.prefix=Dr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=nx(i.prefix,t.innerText)||ym(i.prefix,Ef(t.innerText))),!i.iconName&&K.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function Nx(t){const e=Ms(t.attributes).reduce((i,s)=>(i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return K.autoA11y&&(n?e["aria-labelledby"]="".concat(K.replacementClass,"-title-").concat(r||la()):(e["aria-hidden"]="true",e.focusable="false")),e}function Ox(){return{iconName:null,title:null,titleId:null,prefix:null,transform:hn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function rv(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=bx(t),s=Nx(t),o=If("parseNodeAttributes",{},t);let a=e.styleParser?xx(t):[];return z({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:hn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:a,attributes:s}},o)}const{styles:Dx}=dn;function aT(t){const e=K.autoReplaceSvg==="nest"?rv(t,{styleParser:!1}):rv(t);return~e.extra.classes.indexOf(zE)?Lr("generateLayersText",t,e):Lr("generateSvgReplacementMutation",t,e)}function Lx(){return[...m2,...mf]}function iv(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Zn)return Promise.resolve();const n=we.documentElement.classList,r=d=>n.add("".concat(H0,"-").concat(d)),i=d=>n.remove("".concat(H0,"-").concat(d)),s=K.autoFetchSvg?Lx():DE.concat(Object.keys(Dx));s.includes("fa")||s.push("fa");const o=[".".concat(zE,":not([").concat(_i,"])")].concat(s.map(d=>".".concat(d,":not([").concat(_i,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=Ms(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();const u=_m.begin("onTree"),c=a.reduce((d,p)=>{try{const m=aT(p);m&&d.push(m)}catch(m){UE||m.name==="MissingIcon"&&console.error(m)}return d},[]);return new Promise((d,p)=>{Promise.all(c).then(m=>{sT(m,()=>{r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),u(),d()})}).catch(m=>{u(),p(m)})})}function Mx(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;aT(t).then(n=>{n&&sT([n],e)})}function Vx(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:Sf(e||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:Sf(i||{})),t(r,z(z({},n),{},{mask:i}))}}const Fx=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=hn,symbol:r=!1,mask:i=null,maskId:s=null,title:o=null,titleId:a=null,classes:u=[],attributes:c={},styles:d={}}=e;if(!t)return;const{prefix:p,iconName:m,icon:w}=t;return Sc(z({type:"icon"},t),()=>(wi("beforeDOMElementCreation",{iconDefinition:t,params:e}),K.autoA11y&&(o?c["aria-labelledby"]="".concat(K.replacementClass,"-title-").concat(a||la()):(c["aria-hidden"]="true",c.focusable="false")),vm({icons:{main:Af(w),mask:i?Af(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:m,transform:z(z({},hn),n),symbol:r,title:o,maskId:s,titleId:a,extra:{attributes:c,styles:d,classes:u}})))};var Ux={mixout(){return{icon:Vx(Fx)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=iv,t.nodeCallback=Mx,t}}},provides(t){t.i2svg=function(e){const{node:n=we,callback:r=()=>{}}=e;return iv(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:i,titleId:s,prefix:o,transform:a,symbol:u,mask:c,maskId:d,extra:p}=n;return new Promise((m,w)=>{Promise.all([Rf(r,o),c.iconName?Rf(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(E=>{let[T,R]=E;m([e,vm({icons:{main:T,mask:R},prefix:o,iconName:r,transform:a,symbol:u,maskId:d,title:i,titleId:s,extra:p,watchable:!0})])}).catch(w)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:i,transform:s,styles:o}=e;const a=Ec(o);a.length>0&&(r.style=a);let u;return mm(s)&&(u=Lr("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),n.push(u||i.icon),{children:n,attributes:r}}}},jx={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Sc({type:"layer"},()=>{wi("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(i=>{Array.isArray(i)?i.map(s=>{r=r.concat(s.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(K.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},zx={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:s={}}=e;return Sc({type:"counter",content:t},()=>(wi("beforeDOMElementCreation",{content:t,params:e}),_x({content:t.toString(),title:n,extra:{attributes:i,styles:s,classes:["".concat(K.cssPrefix,"-layers-counter"),...r]}})))}}}},Bx={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=hn,title:r=null,classes:i=[],attributes:s={},styles:o={}}=e;return Sc({type:"text",content:t},()=>(wi("beforeDOMElementCreation",{content:t,params:e}),J0({content:t,transform:z(z({},hn),n),title:r,extra:{attributes:s,styles:o,classes:["".concat(K.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:i,extra:s}=n;let o=null,a=null;if(NE){const u=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/u,a=c.height/u}return K.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,J0({content:e.innerHTML,width:o,height:a,transform:i,title:r,extra:s,watchable:!0})])}}};const $x=new RegExp('"',"ug"),sv=[1105920,1112319],ov=z(z(z(z({},{FontAwesome:{normal:"fas",400:"fas"}}),d2),k2),T2),kf=Object.keys(ov).reduce((t,e)=>(t[e.toLowerCase()]=ov[e],t),{}),qx=Object.keys(kf).reduce((t,e)=>{const n=kf[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Hx(t){const e=t.replace($x,""),n=X2(e,0),r=n>=sv[0]&&n<=sv[1],i=e.length===2?e[0]===e[1]:!1;return{value:Ef(i?e[0]:e),isSecondary:r||i}}function Wx(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),i=isNaN(r)?"normal":r;return(kf[n]||{})[i]||qx[n]}function av(t,e){const n="".concat(x2).concat(e.replace(":","-"));return new Promise((r,i)=>{if(t.getAttribute(n)!==null)return r();const o=Ms(t.children).filter(m=>m.getAttribute(yf)===e)[0],a=Or.getComputedStyle(t,e),u=a.getPropertyValue("font-family"),c=u.match(L2),d=a.getPropertyValue("font-weight"),p=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&p!=="none"&&p!==""){const m=a.getPropertyValue("content");let w=Wx(u,d);const{value:E,isSecondary:T}=Hx(m),R=c[0].startsWith("FontAwesome");let _=ym(w,E),y=_;if(R){const I=rx(E);I.iconName&&I.prefix&&(_=I.iconName,w=I.prefix)}if(_&&!T&&(!o||o.getAttribute(hm)!==w||o.getAttribute(dm)!==y)){t.setAttribute(n,y),o&&t.removeChild(o);const I=Ox(),{extra:O}=I;O.attributes[yf]=e,Rf(_,w).then(V=>{const j=vm(z(z({},I),{},{icons:{main:V,mask:tT()},prefix:w,iconName:y,extra:O,watchable:!0})),A=we.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(A,t.firstChild):t.appendChild(A),A.outerHTML=j.map(v=>ba(v)).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Gx(t){return Promise.all([av(t,"::before"),av(t,"::after")])}function Kx(t){return t.parentNode!==document.head&&!~N2.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(yf)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function lv(t){if(Zn)return new Promise((e,n)=>{const r=Ms(t.querySelectorAll("*")).filter(Kx).map(Gx),i=_m.begin("searchPseudoElements");oT(),Promise.all(r).then(()=>{i(),Pf(),e()}).catch(()=>{i(),Pf(),n()})})}var Qx={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=lv,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=we}=e;K.searchPseudoElements&&lv(n)}}};let uv=!1;var Yx={mixout(){return{dom:{unwatch(){oT(),uv=!0}}}},hooks(){return{bootstrap(){nv(If("mutationObserverCallbacks",{}))},noAuto(){kx()},watch(t){const{observeMutationsRoot:e}=t;uv?Pf():nv(If("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const cv=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),s=i[0];let o=i.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var Xx={mixout(){return{parse:{transform:t=>cv(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=cv(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:i,iconWidth:s}=e;const o={transform:"translate(".concat(i/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(a," ").concat(u," ").concat(c)},p={transform:"translate(".concat(s/2*-1," -256)")},m={outer:o,inner:d,path:p};return{tag:"g",attributes:z({},m.outer),children:[{tag:"g",attributes:z({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:z(z({},n.icon.attributes),m.path)}]}]}}}};const Jh={x:0,y:0,width:"100%",height:"100%"};function hv(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Jx(t){return t.tag==="g"?t.children:[t]}var Zx={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?Ic(n.split(" ").map(i=>i.trim())):tT();return r.prefix||(r.prefix=Dr()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:i,mask:s,maskId:o,transform:a}=e;const{width:u,icon:c}=i,{width:d,icon:p}=s,m=H2({transform:a,containerWidth:d,iconWidth:u}),w={tag:"rect",attributes:z(z({},Jh),{},{fill:"white"})},E=c.children?{children:c.children.map(hv)}:{},T={tag:"g",attributes:z({},m.inner),children:[hv(z({tag:c.tag,attributes:z(z({},c.attributes),m.path)},E))]},R={tag:"g",attributes:z({},m.outer),children:[T]},_="mask-".concat(o||la()),y="clip-".concat(o||la()),I={tag:"mask",attributes:z(z({},Jh),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,R]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:Jx(p)},I]};return n.push(O,{tag:"rect",attributes:z({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(_,")")},Jh)}),{children:n,attributes:r}}}},eb={provides(t){let e=!1;Or.matchMedia&&(e=Or.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:z(z({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const s=z(z({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:z(z({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:z(z({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:z(z({},s),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:z(z({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:z(z({},s),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:z(z({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:z(z({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},tb={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},nb=[K2,Ux,jx,zx,Bx,Qx,Yx,Xx,Zx,eb,tb];dx(nb,{mixoutsTo:Dt});Dt.noAuto;Dt.config;Dt.library;Dt.dom;const xf=Dt.parse;Dt.findIconDefinition;Dt.toHtml;const rb=Dt.icon;Dt.layer;Dt.text;Dt.counter;var lT={exports:{}},ib="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",sb=ib,ob=sb;function uT(){}function cT(){}cT.resetWarningCache=uT;var ab=function(){function t(r,i,s,o,a,u){if(u!==ob){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:cT,resetWarningCache:uT};return n.PropTypes=n,n};lT.exports=ab();var lb=lT.exports;const re=e1(lb);function dv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function un(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?dv(Object(n),!0).forEach(function(r){rs(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):dv(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Du(t){"@babel/helpers - typeof";return Du=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Du(t)}function rs(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ub(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function cb(t,e){if(t==null)return{};var n=ub(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function bf(t){return hb(t)||db(t)||fb(t)||pb()}function hb(t){if(Array.isArray(t))return Nf(t)}function db(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function fb(t,e){if(t){if(typeof t=="string")return Nf(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Nf(t,e)}}function Nf(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function pb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mb(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,u=t.spin,c=t.spinPulse,d=t.spinReverse,p=t.pulse,m=t.fixedWidth,w=t.inverse,E=t.border,T=t.listItem,R=t.flip,_=t.size,y=t.rotation,I=t.pull,O=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":u,"fa-spin-reverse":d,"fa-spin-pulse":c,"fa-pulse":p,"fa-fw":m,"fa-inverse":w,"fa-border":E,"fa-li":T,"fa-flip":R===!0,"fa-flip-horizontal":R==="horizontal"||R==="both","fa-flip-vertical":R==="vertical"||R==="both"},rs(e,"fa-".concat(_),typeof _<"u"&&_!==null),rs(e,"fa-rotate-".concat(y),typeof y<"u"&&y!==null&&y!==0),rs(e,"fa-pull-".concat(I),typeof I<"u"&&I!==null),rs(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(O).map(function(V){return O[V]?V:null}).filter(function(V){return V})}function gb(t){return t=t-0,t===t}function hT(t){return gb(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var yb=["style"];function vb(t){return t.charAt(0).toUpperCase()+t.slice(1)}function _b(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=hT(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[vb(i)]=s:e[i]=s,e},{})}function dT(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(u){return dT(t,u)}),i=Object.keys(e.attributes||{}).reduce(function(u,c){var d=e.attributes[c];switch(c){case"class":u.attrs.className=d,delete e.attributes.class;break;case"style":u.attrs.style=_b(d);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?u.attrs[c.toLowerCase()]=d:u.attrs[hT(c)]=d}return u},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=cb(n,yb);return i.attrs.style=un(un({},i.attrs.style),o),t.apply(void 0,[e.tag,un(un({},i.attrs),a)].concat(bf(r)))}var fT=!1;try{fT=!0}catch{}function wb(){if(!fT&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function fv(t){if(t&&Du(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(xf.icon)return xf.icon(t);if(t===null)return null;if(t&&Du(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Zh(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?rs({},t,e):{}}var pv={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},ur=h1.forwardRef(function(t,e){var n=un(un({},pv),t),r=n.icon,i=n.mask,s=n.symbol,o=n.className,a=n.title,u=n.titleId,c=n.maskId,d=fv(r),p=Zh("classes",[].concat(bf(mb(n)),bf((o||"").split(" ")))),m=Zh("transform",typeof n.transform=="string"?xf.transform(n.transform):n.transform),w=Zh("mask",fv(i)),E=rb(d,un(un(un(un({},p),m),w),{},{symbol:s,title:a,titleId:u,maskId:c}));if(!E)return wb("Could not find icon",d),null;var T=E.abstract,R={ref:e};return Object.keys(n).forEach(function(_){pv.hasOwnProperty(_)||(R[_]=n[_])}),Eb(T[0],R)});ur.displayName="FontAwesomeIcon";ur.propTypes={beat:re.bool,border:re.bool,beatFade:re.bool,bounce:re.bool,className:re.string,fade:re.bool,flash:re.bool,mask:re.oneOfType([re.object,re.array,re.string]),maskId:re.string,fixedWidth:re.bool,inverse:re.bool,flip:re.oneOf([!0,!1,"horizontal","vertical","both"]),icon:re.oneOfType([re.object,re.array,re.string]),listItem:re.bool,pull:re.oneOf(["right","left"]),pulse:re.bool,rotation:re.oneOf([0,90,180,270]),shake:re.bool,size:re.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:re.bool,spinPulse:re.bool,spinReverse:re.bool,symbol:re.oneOfType([re.bool,re.string]),title:re.string,titleId:re.string,transform:re.oneOfType([re.string,re.object]),swapOpacity:re.bool};var Eb=dT.bind(null,h1.createElement);/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Tb={prefix:"fas",iconName:"pencil",icon:[512,512,[9999,61504,"pencil-alt"],"f303","M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]},Ib={prefix:"fas",iconName:"q",icon:[448,512,[113],"51","M64 256c0 88.4 71.6 160 160 160c28.9 0 56-7.7 79.4-21.1l-72-86.4c-11.3-13.6-9.5-33.8 4.1-45.1s33.8-9.5 45.1 4.1l70.9 85.1C371.9 325.8 384 292.3 384 256c0-88.4-71.6-160-160-160S64 167.6 64 256zM344.9 444.6C310 467 268.5 480 224 480C100.3 480 0 379.7 0 256S100.3 32 224 32s224 100.3 224 224c0 56.1-20.6 107.4-54.7 146.7l47.3 56.8c11.3 13.6 9.5 33.8-4.1 45.1s-33.8 9.5-45.1-4.1l-46.6-55.9z"]},Sb={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},Ab={prefix:"fas",iconName:"sun",icon:[512,512,[9728],"f185","M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]},Rb={prefix:"fas",iconName:"hospital",icon:[640,512,[127973,62589,"hospital-alt","hospital-wide"],"f0f8","M192 48c0-26.5 21.5-48 48-48L400 0c26.5 0 48 21.5 48 48l0 464-80 0 0-80c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 80-80 0 0-464zM48 96l112 0 0 416L48 512c-26.5 0-48-21.5-48-48L0 320l80 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L0 288l0-64 80 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L0 192l0-48c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48l0 48-80 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0 0 64-80 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0 0 144c0 26.5-21.5 48-48 48l-112 0 0-416 112 0zM312 64c-8.8 0-16 7.2-16 16l0 24-24 0c-8.8 0-16 7.2-16 16l0 16c0 8.8 7.2 16 16 16l24 0 0 24c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-24 24 0c8.8 0 16-7.2 16-16l0-16c0-8.8-7.2-16-16-16l-24 0 0-24c0-8.8-7.2-16-16-16l-16 0z"]},Cb={prefix:"fas",iconName:"link",icon:[640,512,[128279,"chain"],"f0c1","M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"]},Pb=Cb,pT=({isHam:t})=>{const e=()=>{const n=document.querySelector(".header__menu");document.querySelector(".header__hamburger").classList.toggle("active"),n.classList.toggle("active")};return x.jsxs("ul",{className:t?"header__menu-items":"links__items",children:[x.jsx("li",{className:t?"header__menu-items-item":"links__items-item",children:x.jsxs(ri,{to:"/",onClick:t?e:()=>{},children:[x.jsx(ur,{icon:Sb}),"ホーム"]})}),x.jsx("li",{className:t?"header__menu-items-item":"links__items-item",children:x.jsxs(ri,{to:"/board",onClick:t?e:()=>{},children:[x.jsx(ur,{icon:Tb}),"掲示板"]})}),x.jsx("li",{className:t?"header__menu-items-item":"links__items-item",children:x.jsxs(ri,{to:"/weather",onClick:t?e:()=>{},children:[x.jsx(ur,{icon:Ab}),"天気予報"]})}),x.jsx("li",{className:t?"header__menu-items-item":"links__items-item",children:x.jsxs(ri,{to:"/depression",onClick:t?e:()=>{},children:[x.jsx(ur,{icon:Rb}),"うつ病チェック"]})}),x.jsx("li",{className:t?"header__menu-items-item":"links__items-item",children:x.jsxs("a",{href:"https://github.com/polan6/homepage",onClick:t?e:()=>{},children:[x.jsx(ur,{icon:Pb}),"GitHub"]})}),x.jsx("li",{className:t?"header__menu-items-item":"links__items-item",children:x.jsxs("a",{href:"https://qiita.com/Polan",onClick:t?e:()=>{},children:[x.jsx(ur,{icon:Ib}),"Qiita"]})})]})},kb=()=>{const t=()=>{const e=document.querySelector(".header__menu");document.querySelector(".header__hamburger").classList.toggle("active"),e.classList.toggle("active")};return x.jsxs("div",{className:"header",children:[x.jsx("div",{className:"header__text",children:x.jsx(ri,{to:"/",children:x.jsx("h1",{children:"Polanのホームページ"})})}),x.jsx("div",{className:"header__menu",children:x.jsx(pT,{isHam:!0})}),x.jsxs("button",{className:"header__hamburger",onClick:t,children:[x.jsx("span",{}),x.jsx("span",{}),x.jsx("span",{})]})]})},xb=()=>{const[t,e]=M.useState("");M.useEffect(()=>{e(n());const r=setInterval(()=>{e(n())},1e3);return()=>{clearInterval(r)}},[]);const n=()=>{const r=new Date(Date.now()+(new Date().getTimezoneOffset()+540)*60*1e3),i=r.getFullYear(),s=("00"+r.getMonth()).slice(-2),o=("00"+r.getHours()).slice(-2),a=("00"+r.getHours()).slice(-2),u=("00"+r.getMinutes()).slice(-2),c=("00"+r.getSeconds()).slice(-2);return`${i}/${s}/${o} ${a}:${u}:${c}`};return x.jsx("footer",{children:x.jsx("h3",{children:t})})},bb=()=>x.jsxs("div",{className:"content",children:[x.jsx("h1",{children:"自己紹介"}),x.jsx("div",{children:"名前: Polan"}),x.jsx("div",{children:"好きなこと: コンピュータ・プログラミングの勉強"}),x.jsx("div",{children:"やりたいこと: 執筆活動"}),x.jsxs("div",{className:"links__container",children:[x.jsx("h1",{children:"リンク"}),x.jsx(pT,{isHam:!1})]})]});var mv={};/**
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
 */const mT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Nb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},gT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,w=c&63;u||(w=64,o||(m=64)),r.push(n[d],n[p],n[m],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(mT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Nb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||p==null)throw new Ob;const m=s<<2|a>>4;if(r.push(m),c!==64){const w=a<<4&240|c>>2;if(r.push(w),p!==64){const E=c<<6&192|p;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ob extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Db=function(t){const e=mT(t);return gT.encodeByteArray(e,!0)},Lu=function(t){return Db(t).replace(/\./g,"")},yT=function(t){try{return gT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Lb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Mb=()=>Lb().__FIREBASE_DEFAULTS__,Vb=()=>{if(typeof process>"u"||typeof mv>"u")return;const t=mv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Fb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&yT(t[1]);return e&&JSON.parse(e)},Ac=()=>{try{return Mb()||Vb()||Fb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},vT=t=>{var e,n;return(n=(e=Ac())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ub=t=>{const e=vT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},_T=()=>{var t;return(t=Ac())===null||t===void 0?void 0:t.config},wT=t=>{var e;return(e=Ac())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class jb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function zb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Lu(JSON.stringify(n)),Lu(JSON.stringify(o)),""].join(".")}/**
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
 */function lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Bb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function $b(){var t;const e=(t=Ac())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function qb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ET(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Hb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Wb(){const t=lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Gb(){return!$b()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function TT(){try{return typeof indexedDB=="object"}catch{return!1}}function IT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function Kb(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Qb="FirebaseError";class sn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Qb,Object.setPrototypeOf(this,sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ki.prototype.create)}}class ki{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Yb(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new sn(i,a,r)}}function Yb(t,e){return t.replace(Xb,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Xb=/\{\$([^}]+)}/g;function Jb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ca(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(gv(s)&&gv(o)){if(!ca(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function gv(t){return t!==null&&typeof t=="object"}/**
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
 */function Na(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Zb(t,e){const n=new eN(t,e);return n.subscribe.bind(n)}class eN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");tN(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ed),i.error===void 0&&(i.error=ed),i.complete===void 0&&(i.complete=ed);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ed(){}/**
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
 */const nN=1e3,rN=2,iN=4*60*60*1e3,sN=.5;function yv(t,e=nN,n=rN){const r=e*Math.pow(n,t),i=Math.round(sN*r*(Math.random()-.5)*2);return Math.min(iN,r+i)}/**
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
 */function ft(t){return t&&t._delegate?t._delegate:t}class nn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Zr="[DEFAULT]";/**
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
 */class oN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new jb;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lN(e))try{this.getOrInitializeService({instanceIdentifier:Zr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Zr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zr){return this.instances.has(e)}getOptions(e=Zr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:aN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zr){return this.component?this.component.multipleInstances?e:Zr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function aN(t){return t===Zr?void 0:t}function lN(t){return t.instantiationMode==="EAGER"}/**
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
 */class uN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new oN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const cN={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},hN=se.INFO,dN={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},fN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=dN[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rc{constructor(e){this.name=e,this._logLevel=hN,this._logHandler=fN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const pN=(t,e)=>e.some(n=>t instanceof n);let vv,_v;function mN(){return vv||(vv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gN(){return _v||(_v=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ST=new WeakMap,Of=new WeakMap,AT=new WeakMap,td=new WeakMap,Em=new WeakMap;function yN(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Rr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ST.set(n,t)}).catch(()=>{}),Em.set(e,t),e}function vN(t){if(Of.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Of.set(t,e)}let Df={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Of.get(t);if(e==="objectStoreNames")return t.objectStoreNames||AT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _N(t){Df=t(Df)}function wN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(nd(this),e,...n);return AT.set(r,e.sort?e.sort():[e]),Rr(r)}:gN().includes(t)?function(...e){return t.apply(nd(this),e),Rr(ST.get(this))}:function(...e){return Rr(t.apply(nd(this),e))}}function EN(t){return typeof t=="function"?wN(t):(t instanceof IDBTransaction&&vN(t),pN(t,mN())?new Proxy(t,Df):t)}function Rr(t){if(t instanceof IDBRequest)return yN(t);if(td.has(t))return td.get(t);const e=EN(t);return e!==t&&(td.set(t,e),Em.set(e,t)),e}const nd=t=>Em.get(t);function RT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Rr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Rr(o.result),u.oldVersion,u.newVersion,Rr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const TN=["get","getKey","getAll","getAllKeys","count"],IN=["put","add","delete","clear"],rd=new Map;function wv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(rd.get(e))return rd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=IN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||TN.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return rd.set(e,s),s}_N(t=>({...t,get:(e,n,r)=>wv(e,n)||t.get(e,n,r),has:(e,n)=>!!wv(e,n)||t.has(e,n)}));/**
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
 */class SN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(AN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function AN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Lf="@firebase/app",Ev="0.10.16";/**
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
 */const Gn=new Rc("@firebase/app"),RN="@firebase/app-compat",CN="@firebase/analytics-compat",PN="@firebase/analytics",kN="@firebase/app-check-compat",xN="@firebase/app-check",bN="@firebase/auth",NN="@firebase/auth-compat",ON="@firebase/database",DN="@firebase/data-connect",LN="@firebase/database-compat",MN="@firebase/functions",VN="@firebase/functions-compat",FN="@firebase/installations",UN="@firebase/installations-compat",jN="@firebase/messaging",zN="@firebase/messaging-compat",BN="@firebase/performance",$N="@firebase/performance-compat",qN="@firebase/remote-config",HN="@firebase/remote-config-compat",WN="@firebase/storage",GN="@firebase/storage-compat",KN="@firebase/firestore",QN="@firebase/vertexai",YN="@firebase/firestore-compat",XN="firebase",JN="11.0.2";/**
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
 */const Mf="[DEFAULT]",ZN={[Lf]:"fire-core",[RN]:"fire-core-compat",[PN]:"fire-analytics",[CN]:"fire-analytics-compat",[xN]:"fire-app-check",[kN]:"fire-app-check-compat",[bN]:"fire-auth",[NN]:"fire-auth-compat",[ON]:"fire-rtdb",[DN]:"fire-data-connect",[LN]:"fire-rtdb-compat",[MN]:"fire-fn",[VN]:"fire-fn-compat",[FN]:"fire-iid",[UN]:"fire-iid-compat",[jN]:"fire-fcm",[zN]:"fire-fcm-compat",[BN]:"fire-perf",[$N]:"fire-perf-compat",[qN]:"fire-rc",[HN]:"fire-rc-compat",[WN]:"fire-gcs",[GN]:"fire-gcs-compat",[KN]:"fire-fst",[YN]:"fire-fst-compat",[QN]:"fire-vertex","fire-js":"fire-js",[XN]:"fire-js-all"};/**
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
 */const Mu=new Map,eO=new Map,Vf=new Map;function Tv(t,e){try{t.container.addComponent(e)}catch(n){Gn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _n(t){const e=t.name;if(Vf.has(e))return Gn.debug(`There were multiple attempts to register component ${e}.`),!1;Vf.set(e,t);for(const n of Mu.values())Tv(n,t);for(const n of eO.values())Tv(n,t);return!0}function xi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ln(t){return t.settings!==void 0}/**
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
 */const tO={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Cr=new ki("app","Firebase",tO);/**
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
 */class nO{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Cr.create("app-deleted",{appName:this._name})}}/**
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
 */const Vs=JN;function CT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Mf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Cr.create("bad-app-name",{appName:String(i)});if(n||(n=_T()),!n)throw Cr.create("no-options");const s=Mu.get(i);if(s){if(ca(n,s.options)&&ca(r,s.config))return s;throw Cr.create("duplicate-app",{appName:i})}const o=new uN(i);for(const u of Vf.values())o.addComponent(u);const a=new nO(n,r,o);return Mu.set(i,a),a}function Tm(t=Mf){const e=Mu.get(t);if(!e&&t===Mf&&_T())return CT();if(!e)throw Cr.create("no-app",{appName:t});return e}function zt(t,e,n){var r;let i=(r=ZN[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gn.warn(a.join(" "));return}_n(new nn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const rO="firebase-heartbeat-database",iO=1,ha="firebase-heartbeat-store";let id=null;function PT(){return id||(id=RT(rO,iO,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ha)}catch(n){console.warn(n)}}}}).catch(t=>{throw Cr.create("idb-open",{originalErrorMessage:t.message})})),id}async function sO(t){try{const n=(await PT()).transaction(ha),r=await n.objectStore(ha).get(kT(t));return await n.done,r}catch(e){if(e instanceof sn)Gn.warn(e.message);else{const n=Cr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gn.warn(n.message)}}}async function Iv(t,e){try{const r=(await PT()).transaction(ha,"readwrite");await r.objectStore(ha).put(e,kT(t)),await r.done}catch(n){if(n instanceof sn)Gn.warn(n.message);else{const r=Cr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gn.warn(r.message)}}}function kT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const oO=1024,aO=30*24*60*60*1e3;class lO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cO(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Sv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=aO}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Gn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Sv(),{heartbeatsToSend:r,unsentEntries:i}=uO(this._heartbeatsCache.heartbeats),s=Lu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Gn.warn(n),""}}}function Sv(){return new Date().toISOString().substring(0,10)}function uO(t,e=oO){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Av(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Av(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class cO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return TT()?IT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await sO(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Iv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Iv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Av(t){return Lu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function hO(t){_n(new nn("platform-logger",e=>new SN(e),"PRIVATE")),_n(new nn("heartbeat",e=>new lO(e),"PRIVATE")),zt(Lf,Ev,t),zt(Lf,Ev,"esm2017"),zt("fire-js","")}hO("");var dO="firebase",fO="11.0.2";/**
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
 */zt(dO,fO,"app");function Im(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function xT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pO=xT,bT=new ki("auth","Firebase",xT());/**
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
 */const Vu=new Rc("@firebase/auth");function mO(t,...e){Vu.logLevel<=se.WARN&&Vu.warn(`Auth (${Vs}): ${t}`,...e)}function Ql(t,...e){Vu.logLevel<=se.ERROR&&Vu.error(`Auth (${Vs}): ${t}`,...e)}/**
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
 */function wn(t,...e){throw Am(t,...e)}function en(t,...e){return Am(t,...e)}function Sm(t,e,n){const r=Object.assign(Object.assign({},pO()),{[e]:n});return new ki("auth","Firebase",r).create(e,{appName:t.name})}function hi(t){return Sm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function gO(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&wn(t,"argument-error"),Sm(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Am(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return bT.create(t,...e)}function X(t,e,...n){if(!t)throw Am(e,...n)}function Mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ql(e),new Error(e)}function Kn(t,e){t||Mn(e)}/**
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
 */function Ff(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function yO(){return Rv()==="http:"||Rv()==="https:"}function Rv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function vO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yO()||ET()||"connection"in navigator)?navigator.onLine:!0}function _O(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Oa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Kn(n>e,"Short delay should be less than long delay!"),this.isMobile=Bb()||Hb()}get(){return vO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Rm(t,e){Kn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class NT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const wO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const EO=new Oa(3e4,6e4);function Cm(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Fs(t,e,n,r,i={}){return OT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Na(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return qb()||(c.referrerPolicy="no-referrer"),NT.fetch()(DT(t,t.config.apiHost,n,a),c)})}async function OT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},wO),e);try{const i=new IO(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Rl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Rl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Rl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Rl(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Sm(t,d,c);wn(t,d)}}catch(i){if(i instanceof sn)throw i;wn(t,"network-request-failed",{message:String(i)})}}async function TO(t,e,n,r,i={}){const s=await Fs(t,e,n,r,i);return"mfaPendingCredential"in s&&wn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function DT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Rm(t.config,i):`${t.config.apiScheme}://${i}`}class IO{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(en(this.auth,"network-request-failed")),EO.get())})}}function Rl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=en(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function SO(t,e){return Fs(t,"POST","/v1/accounts:delete",e)}async function LT(t,e){return Fs(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Fo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function AO(t,e=!1){const n=ft(t),r=await n.getIdToken(e),i=Pm(r);X(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Fo(sd(i.auth_time)),issuedAtTime:Fo(sd(i.iat)),expirationTime:Fo(sd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function sd(t){return Number(t)*1e3}function Pm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ql("JWT malformed, contained fewer than 3 sections"),null;try{const i=yT(n);return i?JSON.parse(i):(Ql("Failed to decode base64 JWT payload"),null)}catch(i){return Ql("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Cv(t){const e=Pm(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function da(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof sn&&RO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function RO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class CO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Uf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fo(this.lastLoginAt),this.creationTime=Fo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Fu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await da(t,LT(n,{idToken:r}));X(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?MT(s.providerUserInfo):[],a=kO(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Uf(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function PO(t){const e=ft(t);await Fu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kO(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function MT(t){return t.map(e=>{var{providerId:n}=e,r=Im(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function xO(t,e){const n=await OT(t,{},async()=>{const r=Na({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=DT(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",NT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function bO(t,e){return Fs(t,"POST","/v2/accounts:revokeToken",Cm(t,e))}/**
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
 */class hs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Cv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=Cv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await xO(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new hs;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(X(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(X(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hs,this.toJSON())}_performRefresh(){return Mn("not implemented")}}/**
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
 */function sr(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Vn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Im(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new CO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Uf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await da(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return AO(this,e)}reload(){return PO(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Vn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Fu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ln(this.auth.app))return Promise.reject(hi(this.auth));const e=await this.getIdToken();return await da(this,SO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,w=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,_=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:I,emailVerified:O,isAnonymous:V,providerData:j,stsTokenManager:A}=n;X(I&&A,e,"internal-error");const v=hs.fromJSON(this.name,A);X(typeof I=="string",e,"internal-error"),sr(p,e.name),sr(m,e.name),X(typeof O=="boolean",e,"internal-error"),X(typeof V=="boolean",e,"internal-error"),sr(w,e.name),sr(E,e.name),sr(T,e.name),sr(R,e.name),sr(_,e.name),sr(y,e.name);const S=new Vn({uid:I,auth:e,email:m,emailVerified:O,displayName:p,isAnonymous:V,photoURL:E,phoneNumber:w,tenantId:T,stsTokenManager:v,createdAt:_,lastLoginAt:y});return j&&Array.isArray(j)&&(S.providerData=j.map(C=>Object.assign({},C))),R&&(S._redirectEventId=R),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new hs;i.updateFromServerResponse(n);const s=new Vn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Fu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];X(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?MT(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new hs;a.updateFromIdToken(r);const u=new Vn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Uf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const Pv=new Map;function Fn(t){Kn(t instanceof Function,"Expected a class definition");let e=Pv.get(t);return e?(Kn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Pv.set(t,e),e)}/**
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
 */class VT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}VT.type="NONE";const kv=VT;/**
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
 */function Yl(t,e,n){return`firebase:${t}:${e}:${n}`}class ds{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Yl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Yl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ds(Fn(kv),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Fn(kv);const o=Yl(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const p=Vn._fromJSON(e,d);c!==s&&(a=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ds(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ds(s,e,r))}}/**
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
 */function xv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(FT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($T(e))return"Blackberry";if(qT(e))return"Webos";if(UT(e))return"Safari";if((e.includes("chrome/")||jT(e))&&!e.includes("edge/"))return"Chrome";if(BT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function FT(t=lt()){return/firefox\//i.test(t)}function UT(t=lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jT(t=lt()){return/crios\//i.test(t)}function zT(t=lt()){return/iemobile/i.test(t)}function BT(t=lt()){return/android/i.test(t)}function $T(t=lt()){return/blackberry/i.test(t)}function qT(t=lt()){return/webos/i.test(t)}function km(t=lt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function NO(t=lt()){var e;return km(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function OO(){return Wb()&&document.documentMode===10}function HT(t=lt()){return km(t)||BT(t)||qT(t)||$T(t)||/windows phone/i.test(t)||zT(t)}/**
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
 */function WT(t,e=[]){let n;switch(t){case"Browser":n=xv(lt());break;case"Worker":n=`${xv(lt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vs}/${r}`}/**
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
 */class DO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function LO(t,e={}){return Fs(t,"GET","/v2/passwordPolicy",Cm(t,e))}/**
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
 */const MO=6;class VO{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:MO,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class FO{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bv(this),this.idTokenSubscription=new bv(this),this.beforeStateQueue=new DO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Fn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ds.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await LT(this,{idToken:e}),r=await Vn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ln(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_O()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ln(this.app))return Promise.reject(hi(this));const n=e?ft(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ln(this.app)?Promise.reject(hi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ln(this.app)?Promise.reject(hi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await LO(this),n=new VO(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ki("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await bO(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Fn(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await ds.create(this,[Fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=WT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&mO(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Cc(t){return ft(t)}class bv{constructor(e){this.auth=e,this.observer=null,this.addObserver=Zb(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let xm={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function UO(t){xm=t}function jO(t){return xm.loadJS(t)}function zO(){return xm.gapiScript}function BO(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function $O(t,e){const n=xi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ca(s,e??{}))return i;wn(i,"already-initialized")}return n.initialize({options:e})}function qO(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function HO(t,e,n){const r=Cc(t);X(r._canInitEmulator,r,"emulator-config-failed"),X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=GT(e),{host:o,port:a}=WO(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),GO()}function GT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function WO(t){const e=GT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Nv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Nv(o)}}}function Nv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function GO(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class KT{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Mn("not implemented")}_getIdTokenResponse(e){return Mn("not implemented")}_linkToIdToken(e,n){return Mn("not implemented")}_getReauthenticationResolver(e){return Mn("not implemented")}}/**
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
 */async function fs(t,e){return TO(t,"POST","/v1/accounts:signInWithIdp",Cm(t,e))}/**
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
 */const KO="http://localhost";class Ei extends KT{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ei(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Im(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ei(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return fs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,fs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fs(e,n)}buildRequest(){const e={requestUri:KO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Na(n)}return e}}/**
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
 */class bm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Da extends bm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class dr extends Da{constructor(){super("facebook.com")}static credential(e){return Ei._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dr.credential(e.oauthAccessToken)}catch{return null}}}dr.FACEBOOK_SIGN_IN_METHOD="facebook.com";dr.PROVIDER_ID="facebook.com";/**
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
 */class Nn extends Da{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ei._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Nn.credential(n,r)}catch{return null}}}Nn.GOOGLE_SIGN_IN_METHOD="google.com";Nn.PROVIDER_ID="google.com";/**
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
 */class fr extends Da{constructor(){super("github.com")}static credential(e){return Ei._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fr.credential(e.oauthAccessToken)}catch{return null}}}fr.GITHUB_SIGN_IN_METHOD="github.com";fr.PROVIDER_ID="github.com";/**
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
 */class pr extends Da{constructor(){super("twitter.com")}static credential(e,n){return Ei._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return pr.credential(n,r)}catch{return null}}}pr.TWITTER_SIGN_IN_METHOD="twitter.com";pr.PROVIDER_ID="twitter.com";/**
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
 */class Is{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Vn._fromIdTokenResponse(e,r,i),o=Ov(r);return new Is({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Ov(r);return new Is({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Ov(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Uu extends sn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Uu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Uu(e,n,r,i)}}function QT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Uu._fromErrorAndOperation(t,s,e,r):s})}async function QO(t,e,n=!1){const r=await da(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Is._forOperation(t,"link",r)}/**
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
 */async function YO(t,e,n=!1){const{auth:r}=t;if(Ln(r.app))return Promise.reject(hi(r));const i="reauthenticate";try{const s=await da(t,QT(r,i,e,t),n);X(s.idToken,r,"internal-error");const o=Pm(s.idToken);X(o,r,"internal-error");const{sub:a}=o;return X(t.uid===a,r,"user-mismatch"),Is._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&wn(r,"user-mismatch"),s}}/**
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
 */async function XO(t,e,n=!1){if(Ln(t.app))return Promise.reject(hi(t));const r="signIn",i=await QT(t,r,e),s=await Is._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function JO(t,e,n,r){return ft(t).onIdTokenChanged(e,n,r)}function ZO(t,e,n){return ft(t).beforeAuthStateChanged(e,n)}function eD(t){return ft(t).signOut()}const ju="__sak";/**
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
 */class YT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ju,"1"),this.storage.removeItem(ju),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const tD=1e3,nD=10;class XT extends YT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=HT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);OO()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,nD):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},tD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}XT.type="LOCAL";const rD=XT;/**
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
 */class JT extends YT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}JT.type="SESSION";const ZT=JT;/**
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
 */function iD(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Pc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Pc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await iD(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pc.receivers=[];/**
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
 */function Nm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class sD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=Nm("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function mn(){return window}function oD(t){mn().location.href=t}/**
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
 */function eI(){return typeof mn().WorkerGlobalScope<"u"&&typeof mn().importScripts=="function"}async function aD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function uD(){return eI()?self:null}/**
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
 */const tI="firebaseLocalStorageDb",cD=1,zu="firebaseLocalStorage",nI="fbase_key";class La{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function kc(t,e){return t.transaction([zu],e?"readwrite":"readonly").objectStore(zu)}function hD(){const t=indexedDB.deleteDatabase(tI);return new La(t).toPromise()}function jf(){const t=indexedDB.open(tI,cD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(zu,{keyPath:nI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(zu)?e(r):(r.close(),await hD(),e(await jf()))})})}async function Dv(t,e,n){const r=kc(t,!0).put({[nI]:e,value:n});return new La(r).toPromise()}async function dD(t,e){const n=kc(t,!1).get(e),r=await new La(n).toPromise();return r===void 0?null:r.value}function Lv(t,e){const n=kc(t,!0).delete(e);return new La(n).toPromise()}const fD=800,pD=3;class rI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>pD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return eI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pc._getInstance(uD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await aD(),!this.activeServiceWorker)return;this.sender=new sD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jf();return await Dv(e,ju,"1"),await Lv(e,ju),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Dv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>dD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Lv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=kc(i,!1).getAll();return new La(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}rI.type="LOCAL";const mD=rI;new Oa(3e4,6e4);/**
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
 */function iI(t,e){return e?Fn(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Om extends KT{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function gD(t){return XO(t.auth,new Om(t),t.bypassAuthState)}function yD(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),YO(n,new Om(t),t.bypassAuthState)}async function vD(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),QO(n,new Om(t),t.bypassAuthState)}/**
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
 */class sI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gD;case"linkViaPopup":case"linkViaRedirect":return vD;case"reauthViaPopup":case"reauthViaRedirect":return yD;default:wn(this.auth,"internal-error")}}resolve(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const _D=new Oa(2e3,1e4);async function wD(t,e,n){if(Ln(t.app))return Promise.reject(en(t,"operation-not-supported-in-this-environment"));const r=Cc(t);gO(t,e,bm);const i=iI(r,n);return new si(r,"signInViaPopup",e,i).executeNotNull()}class si extends sI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,si.currentPopupAction&&si.currentPopupAction.cancel(),si.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){Kn(this.filter.length===1,"Popup operations only handle one event");const e=Nm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(en(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(en(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,si.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(en(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_D.get())};e()}}si.currentPopupAction=null;/**
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
 */const ED="pendingRedirect",Xl=new Map;class TD extends sI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Xl.get(this.auth._key());if(!e){try{const r=await ID(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Xl.set(this.auth._key(),e)}return this.bypassAuthState||Xl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ID(t,e){const n=RD(e),r=AD(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function SD(t,e){Xl.set(t._key(),e)}function AD(t){return Fn(t._redirectPersistence)}function RD(t){return Yl(ED,t.config.apiKey,t.name)}async function CD(t,e,n=!1){if(Ln(t.app))return Promise.reject(hi(t));const r=Cc(t),i=iI(r,e),o=await new TD(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const PD=10*60*1e3;class kD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!xD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!oI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(en(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=PD&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mv(e))}saveEventToCache(e){this.cachedEventUids.add(Mv(e)),this.lastProcessedEventTime=Date.now()}}function Mv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function oI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function xD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return oI(t);default:return!1}}/**
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
 */async function bD(t,e={}){return Fs(t,"GET","/v1/projects",e)}/**
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
 */const ND=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,OD=/^https?/;async function DD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await bD(t);for(const n of e)try{if(LD(n))return}catch{}wn(t,"unauthorized-domain")}function LD(t){const e=Ff(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!OD.test(n))return!1;if(ND.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const MD=new Oa(3e4,6e4);function Vv(){const t=mn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function VD(t){return new Promise((e,n)=>{var r,i,s;function o(){Vv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vv(),n(en(t,"network-request-failed"))},timeout:MD.get()})}if(!((i=(r=mn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=mn().gapi)===null||s===void 0)&&s.load)o();else{const a=BO("iframefcb");return mn()[a]=()=>{gapi.load?o():n(en(t,"network-request-failed"))},jO(`${zO()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Jl=null,e})}let Jl=null;function FD(t){return Jl=Jl||VD(t),Jl}/**
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
 */const UD=new Oa(5e3,15e3),jD="__/auth/iframe",zD="emulator/auth/iframe",BD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$D=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qD(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Rm(e,zD):`https://${t.config.authDomain}/${jD}`,r={apiKey:e.apiKey,appName:t.name,v:Vs},i=$D.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Na(r).slice(1)}`}async function HD(t){const e=await FD(t),n=mn().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:qD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:BD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=en(t,"network-request-failed"),a=mn().setTimeout(()=>{s(o)},UD.get());function u(){mn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const WD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},GD=500,KD=600,QD="_blank",YD="http://localhost";class Fv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function XD(t,e,n,r=GD,i=KD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},WD),{width:r.toString(),height:i.toString(),top:s,left:o}),c=lt().toLowerCase();n&&(a=jT(c)?QD:n),FT(c)&&(e=e||YD,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[w,E])=>`${m}${w}=${E},`,"");if(NO(c)&&a!=="_self")return JD(e||"",a),new Fv(null);const p=window.open(e||"",a,d);X(p,t,"popup-blocked");try{p.focus()}catch{}return new Fv(p)}function JD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const ZD="__/auth/handler",eL="emulator/auth/handler",tL=encodeURIComponent("fac");async function Uv(t,e,n,r,i,s){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Vs,eventId:i};if(e instanceof bm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Jb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Da){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const u=await t._getAppCheckToken(),c=u?`#${tL}=${encodeURIComponent(u)}`:"";return`${nL(t)}?${Na(a).slice(1)}${c}`}function nL({config:t}){return t.emulator?Rm(t,eL):`https://${t.authDomain}/${ZD}`}/**
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
 */const od="webStorageSupport";class rL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ZT,this._completeRedirectFn=CD,this._overrideRedirectResult=SD}async _openPopup(e,n,r,i){var s;Kn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Uv(e,n,r,Ff(),i);return XD(e,o,Nm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Uv(e,n,r,Ff(),i);return oD(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Kn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await HD(e),r=new kD(e);return n.register("authEvent",i=>(X(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(od,{type:od},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[od];o!==void 0&&n(!!o),wn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=DD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return HT()||UT()||km()}}const iL=rL;var jv="@firebase/auth",zv="1.8.1";/**
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
 */class sL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function oL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function aL(t){_n(new nn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:WT(t)},c=new FO(r,i,s,u);return qO(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),_n(new nn("auth-internal",e=>{const n=Cc(e.getProvider("auth").getImmediate());return(r=>new sL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),zt(jv,zv,oL(t)),zt(jv,zv,"esm2017")}/**
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
 */const lL=5*60,uL=wT("authIdTokenMaxAge")||lL;let Bv=null;const cL=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>uL)return;const i=n==null?void 0:n.token;Bv!==i&&(Bv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function hL(t=Tm()){const e=xi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=$O(t,{popupRedirectResolver:iL,persistence:[mD,rD,ZT]}),r=wT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=cL(s.toString());ZO(n,o,()=>o(n.currentUser)),JO(n,a=>o(a))}}const i=vT("auth");return i&&HO(n,`http://${i}`),n}function dL(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}UO({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=en("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",dL().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});aL("Browser");const aI="@firebase/installations",Dm="0.6.11";/**
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
 */const lI=1e4,uI=`w:${Dm}`,cI="FIS_v2",fL="https://firebaseinstallations.googleapis.com/v1",pL=60*60*1e3,mL="installations",gL="Installations";/**
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
 */const yL={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ti=new ki(mL,gL,yL);function hI(t){return t instanceof sn&&t.code.includes("request-failed")}/**
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
 */function dI({projectId:t}){return`${fL}/projects/${t}/installations`}function fI(t){return{token:t.token,requestStatus:2,expiresIn:_L(t.expiresIn),creationTime:Date.now()}}async function pI(t,e){const r=(await e.json()).error;return Ti.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function mI({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function vL(t,{refreshToken:e}){const n=mI(t);return n.append("Authorization",wL(e)),n}async function gI(t){const e=await t();return e.status>=500&&e.status<600?t():e}function _L(t){return Number(t.replace("s","000"))}function wL(t){return`${cI} ${t}`}/**
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
 */async function EL({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=dI(t),i=mI(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:cI,appId:t.appId,sdkVersion:uI},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await gI(()=>fetch(r,a));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:fI(c.authToken)}}else throw await pI("Create Installation",u)}/**
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
 */function yI(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function TL(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const IL=/^[cdef][\w-]{21}$/,zf="";function SL(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=AL(t);return IL.test(n)?n:zf}catch{return zf}}function AL(t){return TL(t).substr(0,22)}/**
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
 */function xc(t){return`${t.appName}!${t.appId}`}/**
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
 */const vI=new Map;function _I(t,e){const n=xc(t);wI(n,e),RL(n,e)}function wI(t,e){const n=vI.get(t);if(n)for(const r of n)r(e)}function RL(t,e){const n=CL();n&&n.postMessage({key:t,fid:e}),PL()}let oi=null;function CL(){return!oi&&"BroadcastChannel"in self&&(oi=new BroadcastChannel("[Firebase] FID Change"),oi.onmessage=t=>{wI(t.data.key,t.data.fid)}),oi}function PL(){vI.size===0&&oi&&(oi.close(),oi=null)}/**
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
 */const kL="firebase-installations-database",xL=1,Ii="firebase-installations-store";let ad=null;function Lm(){return ad||(ad=RT(kL,xL,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ii)}}})),ad}async function Bu(t,e){const n=xc(t),i=(await Lm()).transaction(Ii,"readwrite"),s=i.objectStore(Ii),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&_I(t,e.fid),e}async function EI(t){const e=xc(t),r=(await Lm()).transaction(Ii,"readwrite");await r.objectStore(Ii).delete(e),await r.done}async function bc(t,e){const n=xc(t),i=(await Lm()).transaction(Ii,"readwrite"),s=i.objectStore(Ii),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&_I(t,a.fid),a}/**
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
 */async function Mm(t){let e;const n=await bc(t.appConfig,r=>{const i=bL(r),s=NL(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===zf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function bL(t){const e=t||{fid:SL(),registrationStatus:0};return TI(e)}function NL(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ti.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=OL(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:DL(t)}:{installationEntry:e}}async function OL(t,e){try{const n=await EL(t,e);return Bu(t.appConfig,n)}catch(n){throw hI(n)&&n.customData.serverCode===409?await EI(t.appConfig):await Bu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function DL(t){let e=await $v(t.appConfig);for(;e.registrationStatus===1;)await yI(100),e=await $v(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Mm(t);return r||n}return e}function $v(t){return bc(t,e=>{if(!e)throw Ti.create("installation-not-found");return TI(e)})}function TI(t){return LL(t)?{fid:t.fid,registrationStatus:0}:t}function LL(t){return t.registrationStatus===1&&t.registrationTime+lI<Date.now()}/**
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
 */async function ML({appConfig:t,heartbeatServiceProvider:e},n){const r=VL(t,n),i=vL(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:uI,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await gI(()=>fetch(r,a));if(u.ok){const c=await u.json();return fI(c)}else throw await pI("Generate Auth Token",u)}function VL(t,{fid:e}){return`${dI(t)}/${e}/authTokens:generate`}/**
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
 */async function Vm(t,e=!1){let n;const r=await bc(t.appConfig,s=>{if(!II(s))throw Ti.create("not-registered");const o=s.authToken;if(!e&&jL(o))return s;if(o.requestStatus===1)return n=FL(t,e),s;{if(!navigator.onLine)throw Ti.create("app-offline");const a=BL(s);return n=UL(t,a),a}});return n?await n:r.authToken}async function FL(t,e){let n=await qv(t.appConfig);for(;n.authToken.requestStatus===1;)await yI(100),n=await qv(t.appConfig);const r=n.authToken;return r.requestStatus===0?Vm(t,e):r}function qv(t){return bc(t,e=>{if(!II(e))throw Ti.create("not-registered");const n=e.authToken;return $L(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function UL(t,e){try{const n=await ML(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Bu(t.appConfig,r),n}catch(n){if(hI(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await EI(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Bu(t.appConfig,r)}throw n}}function II(t){return t!==void 0&&t.registrationStatus===2}function jL(t){return t.requestStatus===2&&!zL(t)}function zL(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+pL}function BL(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function $L(t){return t.requestStatus===1&&t.requestTime+lI<Date.now()}/**
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
 */async function qL(t){const e=t,{installationEntry:n,registrationPromise:r}=await Mm(e);return r?r.catch(console.error):Vm(e).catch(console.error),n.fid}/**
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
 */async function HL(t,e=!1){const n=t;return await WL(n),(await Vm(n,e)).token}async function WL(t){const{registrationPromise:e}=await Mm(t);e&&await e}/**
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
 */function GL(t){if(!t||!t.options)throw ld("App Configuration");if(!t.name)throw ld("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ld(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ld(t){return Ti.create("missing-app-config-values",{valueName:t})}/**
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
 */const SI="installations",KL="installations-internal",QL=t=>{const e=t.getProvider("app").getImmediate(),n=GL(e),r=xi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},YL=t=>{const e=t.getProvider("app").getImmediate(),n=xi(e,SI).getImmediate();return{getId:()=>qL(n),getToken:i=>HL(n,i)}};function XL(){_n(new nn(SI,QL,"PUBLIC")),_n(new nn(KL,YL,"PRIVATE"))}XL();zt(aI,Dm);zt(aI,Dm,"esm2017");/**
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
 */const $u="analytics",JL="firebase_id",ZL="origin",e4=60*1e3,t4="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Fm="https://www.googletagmanager.com/gtag/js";/**
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
 */const Tt=new Rc("@firebase/analytics");/**
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
 */const n4={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},kt=new ki("analytics","Analytics",n4);/**
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
 */function r4(t){if(!t.startsWith(Fm)){const e=kt.create("invalid-gtag-resource",{gtagURL:t});return Tt.warn(e.message),""}return t}function AI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function i4(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function s4(t,e){const n=i4("firebase-js-sdk-policy",{createScriptURL:r4}),r=document.createElement("script"),i=`${Fm}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function o4(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function a4(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await AI(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(a){Tt.error(a)}t("config",i,s)}async function l4(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await AI(n);for(const u of o){const c=a.find(p=>p.measurementId===u),d=c&&e[c.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Tt.error(s)}}function u4(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,u]=o;await l4(t,e,n,a,u)}else if(s==="config"){const[a,u]=o;await a4(t,e,n,r,a,u)}else if(s==="consent"){const[a,u]=o;t("consent",a,u)}else if(s==="get"){const[a,u,c]=o;t("get",a,u,c)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){Tt.error(a)}}return i}function c4(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=u4(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function h4(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Fm)&&n.src.includes(t))return n;return null}/**
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
 */const d4=30,f4=1e3;class p4{constructor(e={},n=f4){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const RI=new p4;function m4(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function g4(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:m4(r)},s=t4.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(a=u.error.message)}catch{}throw kt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function y4(t,e=RI,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw kt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw kt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new w4;return setTimeout(async()=>{a.abort()},e4),CI({appId:r,apiKey:i,measurementId:s},o,a,e)}async function CI(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=RI){var s;const{appId:o,measurementId:a}=t;try{await v4(r,e)}catch(u){if(a)return Tt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw u}try{const u=await g4(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!_4(c)){if(i.deleteThrottleMetadata(o),a)return Tt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw u}const d=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?yv(n,i.intervalMillis,d4):yv(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,p),Tt.debug(`Calling attemptFetch again in ${d} millis`),CI(t,p,r,i)}}function v4(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(kt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function _4(t){if(!(t instanceof sn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class w4{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function E4(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function T4(){if(TT())try{await IT()}catch(t){return Tt.warn(kt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Tt.warn(kt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function I4(t,e,n,r,i,s,o){var a;const u=y4(t);u.then(w=>{n[w.measurementId]=w.appId,t.options.measurementId&&w.measurementId!==t.options.measurementId&&Tt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${w.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(w=>Tt.error(w)),e.push(u);const c=T4().then(w=>{if(w)return r.getId()}),[d,p]=await Promise.all([u,c]);h4(s)||s4(s,d.measurementId),i("js",new Date);const m=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return m[ZL]="firebase",m.update=!0,p!=null&&(m[JL]=p),i("config",d.measurementId,m),d.measurementId}/**
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
 */class S4{constructor(e){this.app=e}_delete(){return delete Uo[this.app.options.appId],Promise.resolve()}}let Uo={},Hv=[];const Wv={};let ud="dataLayer",A4="gtag",Gv,PI,Kv=!1;function R4(){const t=[];if(ET()&&t.push("This is a browser extension environment."),Kb()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=kt.create("invalid-analytics-context",{errorInfo:e});Tt.warn(n.message)}}function C4(t,e,n){R4();const r=t.options.appId;if(!r)throw kt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Tt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw kt.create("no-api-key");if(Uo[r]!=null)throw kt.create("already-exists",{id:r});if(!Kv){o4(ud);const{wrappedGtag:s,gtagCore:o}=c4(Uo,Hv,Wv,ud,A4);PI=s,Gv=o,Kv=!0}return Uo[r]=I4(t,Hv,Wv,e,Gv,ud,n),new S4(t)}function P4(t=Tm()){t=ft(t);const e=xi(t,$u);return e.isInitialized()?e.getImmediate():k4(t)}function k4(t,e={}){const n=xi(t,$u);if(n.isInitialized()){const i=n.getImmediate();if(ca(e,n.getOptions()))return i;throw kt.create("already-initialized")}return n.initialize({options:e})}function x4(t,e,n,r){t=ft(t),E4(PI,Uo[t.app.options.appId],e,n,r).catch(i=>Tt.error(i))}const Qv="@firebase/analytics",Yv="0.10.10";function b4(){_n(new nn($u,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return C4(r,i,n)},"PUBLIC")),_n(new nn("analytics-internal",t,"PRIVATE")),zt(Qv,Yv),zt(Qv,Yv,"esm2017");function t(e){try{const n=e.getProvider($u).getImmediate();return{logEvent:(r,i,s)=>x4(n,r,i,s)}}catch(n){throw kt.create("interop-component-reg-failed",{reason:n})}}}b4();var Xv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var di,kI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,v){function S(){}S.prototype=v.prototype,A.D=v.prototype,A.prototype=new S,A.prototype.constructor=A,A.C=function(C,k,N){for(var P=Array(arguments.length-2),Lt=2;Lt<arguments.length;Lt++)P[Lt-2]=arguments[Lt];return v.prototype[k].apply(C,P)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(A,v,S){S||(S=0);var C=Array(16);if(typeof v=="string")for(var k=0;16>k;++k)C[k]=v.charCodeAt(S++)|v.charCodeAt(S++)<<8|v.charCodeAt(S++)<<16|v.charCodeAt(S++)<<24;else for(k=0;16>k;++k)C[k]=v[S++]|v[S++]<<8|v[S++]<<16|v[S++]<<24;v=A.g[0],S=A.g[1],k=A.g[2];var N=A.g[3],P=v+(N^S&(k^N))+C[0]+3614090360&4294967295;v=S+(P<<7&4294967295|P>>>25),P=N+(k^v&(S^k))+C[1]+3905402710&4294967295,N=v+(P<<12&4294967295|P>>>20),P=k+(S^N&(v^S))+C[2]+606105819&4294967295,k=N+(P<<17&4294967295|P>>>15),P=S+(v^k&(N^v))+C[3]+3250441966&4294967295,S=k+(P<<22&4294967295|P>>>10),P=v+(N^S&(k^N))+C[4]+4118548399&4294967295,v=S+(P<<7&4294967295|P>>>25),P=N+(k^v&(S^k))+C[5]+1200080426&4294967295,N=v+(P<<12&4294967295|P>>>20),P=k+(S^N&(v^S))+C[6]+2821735955&4294967295,k=N+(P<<17&4294967295|P>>>15),P=S+(v^k&(N^v))+C[7]+4249261313&4294967295,S=k+(P<<22&4294967295|P>>>10),P=v+(N^S&(k^N))+C[8]+1770035416&4294967295,v=S+(P<<7&4294967295|P>>>25),P=N+(k^v&(S^k))+C[9]+2336552879&4294967295,N=v+(P<<12&4294967295|P>>>20),P=k+(S^N&(v^S))+C[10]+4294925233&4294967295,k=N+(P<<17&4294967295|P>>>15),P=S+(v^k&(N^v))+C[11]+2304563134&4294967295,S=k+(P<<22&4294967295|P>>>10),P=v+(N^S&(k^N))+C[12]+1804603682&4294967295,v=S+(P<<7&4294967295|P>>>25),P=N+(k^v&(S^k))+C[13]+4254626195&4294967295,N=v+(P<<12&4294967295|P>>>20),P=k+(S^N&(v^S))+C[14]+2792965006&4294967295,k=N+(P<<17&4294967295|P>>>15),P=S+(v^k&(N^v))+C[15]+1236535329&4294967295,S=k+(P<<22&4294967295|P>>>10),P=v+(k^N&(S^k))+C[1]+4129170786&4294967295,v=S+(P<<5&4294967295|P>>>27),P=N+(S^k&(v^S))+C[6]+3225465664&4294967295,N=v+(P<<9&4294967295|P>>>23),P=k+(v^S&(N^v))+C[11]+643717713&4294967295,k=N+(P<<14&4294967295|P>>>18),P=S+(N^v&(k^N))+C[0]+3921069994&4294967295,S=k+(P<<20&4294967295|P>>>12),P=v+(k^N&(S^k))+C[5]+3593408605&4294967295,v=S+(P<<5&4294967295|P>>>27),P=N+(S^k&(v^S))+C[10]+38016083&4294967295,N=v+(P<<9&4294967295|P>>>23),P=k+(v^S&(N^v))+C[15]+3634488961&4294967295,k=N+(P<<14&4294967295|P>>>18),P=S+(N^v&(k^N))+C[4]+3889429448&4294967295,S=k+(P<<20&4294967295|P>>>12),P=v+(k^N&(S^k))+C[9]+568446438&4294967295,v=S+(P<<5&4294967295|P>>>27),P=N+(S^k&(v^S))+C[14]+3275163606&4294967295,N=v+(P<<9&4294967295|P>>>23),P=k+(v^S&(N^v))+C[3]+4107603335&4294967295,k=N+(P<<14&4294967295|P>>>18),P=S+(N^v&(k^N))+C[8]+1163531501&4294967295,S=k+(P<<20&4294967295|P>>>12),P=v+(k^N&(S^k))+C[13]+2850285829&4294967295,v=S+(P<<5&4294967295|P>>>27),P=N+(S^k&(v^S))+C[2]+4243563512&4294967295,N=v+(P<<9&4294967295|P>>>23),P=k+(v^S&(N^v))+C[7]+1735328473&4294967295,k=N+(P<<14&4294967295|P>>>18),P=S+(N^v&(k^N))+C[12]+2368359562&4294967295,S=k+(P<<20&4294967295|P>>>12),P=v+(S^k^N)+C[5]+4294588738&4294967295,v=S+(P<<4&4294967295|P>>>28),P=N+(v^S^k)+C[8]+2272392833&4294967295,N=v+(P<<11&4294967295|P>>>21),P=k+(N^v^S)+C[11]+1839030562&4294967295,k=N+(P<<16&4294967295|P>>>16),P=S+(k^N^v)+C[14]+4259657740&4294967295,S=k+(P<<23&4294967295|P>>>9),P=v+(S^k^N)+C[1]+2763975236&4294967295,v=S+(P<<4&4294967295|P>>>28),P=N+(v^S^k)+C[4]+1272893353&4294967295,N=v+(P<<11&4294967295|P>>>21),P=k+(N^v^S)+C[7]+4139469664&4294967295,k=N+(P<<16&4294967295|P>>>16),P=S+(k^N^v)+C[10]+3200236656&4294967295,S=k+(P<<23&4294967295|P>>>9),P=v+(S^k^N)+C[13]+681279174&4294967295,v=S+(P<<4&4294967295|P>>>28),P=N+(v^S^k)+C[0]+3936430074&4294967295,N=v+(P<<11&4294967295|P>>>21),P=k+(N^v^S)+C[3]+3572445317&4294967295,k=N+(P<<16&4294967295|P>>>16),P=S+(k^N^v)+C[6]+76029189&4294967295,S=k+(P<<23&4294967295|P>>>9),P=v+(S^k^N)+C[9]+3654602809&4294967295,v=S+(P<<4&4294967295|P>>>28),P=N+(v^S^k)+C[12]+3873151461&4294967295,N=v+(P<<11&4294967295|P>>>21),P=k+(N^v^S)+C[15]+530742520&4294967295,k=N+(P<<16&4294967295|P>>>16),P=S+(k^N^v)+C[2]+3299628645&4294967295,S=k+(P<<23&4294967295|P>>>9),P=v+(k^(S|~N))+C[0]+4096336452&4294967295,v=S+(P<<6&4294967295|P>>>26),P=N+(S^(v|~k))+C[7]+1126891415&4294967295,N=v+(P<<10&4294967295|P>>>22),P=k+(v^(N|~S))+C[14]+2878612391&4294967295,k=N+(P<<15&4294967295|P>>>17),P=S+(N^(k|~v))+C[5]+4237533241&4294967295,S=k+(P<<21&4294967295|P>>>11),P=v+(k^(S|~N))+C[12]+1700485571&4294967295,v=S+(P<<6&4294967295|P>>>26),P=N+(S^(v|~k))+C[3]+2399980690&4294967295,N=v+(P<<10&4294967295|P>>>22),P=k+(v^(N|~S))+C[10]+4293915773&4294967295,k=N+(P<<15&4294967295|P>>>17),P=S+(N^(k|~v))+C[1]+2240044497&4294967295,S=k+(P<<21&4294967295|P>>>11),P=v+(k^(S|~N))+C[8]+1873313359&4294967295,v=S+(P<<6&4294967295|P>>>26),P=N+(S^(v|~k))+C[15]+4264355552&4294967295,N=v+(P<<10&4294967295|P>>>22),P=k+(v^(N|~S))+C[6]+2734768916&4294967295,k=N+(P<<15&4294967295|P>>>17),P=S+(N^(k|~v))+C[13]+1309151649&4294967295,S=k+(P<<21&4294967295|P>>>11),P=v+(k^(S|~N))+C[4]+4149444226&4294967295,v=S+(P<<6&4294967295|P>>>26),P=N+(S^(v|~k))+C[11]+3174756917&4294967295,N=v+(P<<10&4294967295|P>>>22),P=k+(v^(N|~S))+C[2]+718787259&4294967295,k=N+(P<<15&4294967295|P>>>17),P=S+(N^(k|~v))+C[9]+3951481745&4294967295,A.g[0]=A.g[0]+v&4294967295,A.g[1]=A.g[1]+(k+(P<<21&4294967295|P>>>11))&4294967295,A.g[2]=A.g[2]+k&4294967295,A.g[3]=A.g[3]+N&4294967295}r.prototype.u=function(A,v){v===void 0&&(v=A.length);for(var S=v-this.blockSize,C=this.B,k=this.h,N=0;N<v;){if(k==0)for(;N<=S;)i(this,A,N),N+=this.blockSize;if(typeof A=="string"){for(;N<v;)if(C[k++]=A.charCodeAt(N++),k==this.blockSize){i(this,C),k=0;break}}else for(;N<v;)if(C[k++]=A[N++],k==this.blockSize){i(this,C),k=0;break}}this.h=k,this.o+=v},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var v=1;v<A.length-8;++v)A[v]=0;var S=8*this.o;for(v=A.length-8;v<A.length;++v)A[v]=S&255,S/=256;for(this.u(A),A=Array(16),v=S=0;4>v;++v)for(var C=0;32>C;C+=8)A[S++]=this.g[v]>>>C&255;return A};function s(A,v){var S=a;return Object.prototype.hasOwnProperty.call(S,A)?S[A]:S[A]=v(A)}function o(A,v){this.h=v;for(var S=[],C=!0,k=A.length-1;0<=k;k--){var N=A[k]|0;C&&N==v||(S[k]=N,C=!1)}this.g=S}var a={};function u(A){return-128<=A&&128>A?s(A,function(v){return new o([v|0],0>v?-1:0)}):new o([A|0],0>A?-1:0)}function c(A){if(isNaN(A)||!isFinite(A))return p;if(0>A)return R(c(-A));for(var v=[],S=1,C=0;A>=S;C++)v[C]=A/S|0,S*=4294967296;return new o(v,0)}function d(A,v){if(A.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(A.charAt(0)=="-")return R(d(A.substring(1),v));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=c(Math.pow(v,8)),C=p,k=0;k<A.length;k+=8){var N=Math.min(8,A.length-k),P=parseInt(A.substring(k,k+N),v);8>N?(N=c(Math.pow(v,N)),C=C.j(N).add(c(P))):(C=C.j(S),C=C.add(c(P)))}return C}var p=u(0),m=u(1),w=u(16777216);t=o.prototype,t.m=function(){if(T(this))return-R(this).m();for(var A=0,v=1,S=0;S<this.g.length;S++){var C=this.i(S);A+=(0<=C?C:4294967296+C)*v,v*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(E(this))return"0";if(T(this))return"-"+R(this).toString(A);for(var v=c(Math.pow(A,6)),S=this,C="";;){var k=O(S,v).g;S=_(S,k.j(v));var N=((0<S.g.length?S.g[0]:S.h)>>>0).toString(A);if(S=k,E(S))return N+C;for(;6>N.length;)N="0"+N;C=N+C}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function E(A){if(A.h!=0)return!1;for(var v=0;v<A.g.length;v++)if(A.g[v]!=0)return!1;return!0}function T(A){return A.h==-1}t.l=function(A){return A=_(this,A),T(A)?-1:E(A)?0:1};function R(A){for(var v=A.g.length,S=[],C=0;C<v;C++)S[C]=~A.g[C];return new o(S,~A.h).add(m)}t.abs=function(){return T(this)?R(this):this},t.add=function(A){for(var v=Math.max(this.g.length,A.g.length),S=[],C=0,k=0;k<=v;k++){var N=C+(this.i(k)&65535)+(A.i(k)&65535),P=(N>>>16)+(this.i(k)>>>16)+(A.i(k)>>>16);C=P>>>16,N&=65535,P&=65535,S[k]=P<<16|N}return new o(S,S[S.length-1]&-2147483648?-1:0)};function _(A,v){return A.add(R(v))}t.j=function(A){if(E(this)||E(A))return p;if(T(this))return T(A)?R(this).j(R(A)):R(R(this).j(A));if(T(A))return R(this.j(R(A)));if(0>this.l(w)&&0>A.l(w))return c(this.m()*A.m());for(var v=this.g.length+A.g.length,S=[],C=0;C<2*v;C++)S[C]=0;for(C=0;C<this.g.length;C++)for(var k=0;k<A.g.length;k++){var N=this.i(C)>>>16,P=this.i(C)&65535,Lt=A.i(k)>>>16,Wr=A.i(k)&65535;S[2*C+2*k]+=P*Wr,y(S,2*C+2*k),S[2*C+2*k+1]+=N*Wr,y(S,2*C+2*k+1),S[2*C+2*k+1]+=P*Lt,y(S,2*C+2*k+1),S[2*C+2*k+2]+=N*Lt,y(S,2*C+2*k+2)}for(C=0;C<v;C++)S[C]=S[2*C+1]<<16|S[2*C];for(C=v;C<2*v;C++)S[C]=0;return new o(S,0)};function y(A,v){for(;(A[v]&65535)!=A[v];)A[v+1]+=A[v]>>>16,A[v]&=65535,v++}function I(A,v){this.g=A,this.h=v}function O(A,v){if(E(v))throw Error("division by zero");if(E(A))return new I(p,p);if(T(A))return v=O(R(A),v),new I(R(v.g),R(v.h));if(T(v))return v=O(A,R(v)),new I(R(v.g),v.h);if(30<A.g.length){if(T(A)||T(v))throw Error("slowDivide_ only works with positive integers.");for(var S=m,C=v;0>=C.l(A);)S=V(S),C=V(C);var k=j(S,1),N=j(C,1);for(C=j(C,2),S=j(S,2);!E(C);){var P=N.add(C);0>=P.l(A)&&(k=k.add(S),N=P),C=j(C,1),S=j(S,1)}return v=_(A,k.j(v)),new I(k,v)}for(k=p;0<=A.l(v);){for(S=Math.max(1,Math.floor(A.m()/v.m())),C=Math.ceil(Math.log(S)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),N=c(S),P=N.j(v);T(P)||0<P.l(A);)S-=C,N=c(S),P=N.j(v);E(N)&&(N=m),k=k.add(N),A=_(A,P)}return new I(k,A)}t.A=function(A){return O(this,A).h},t.and=function(A){for(var v=Math.max(this.g.length,A.g.length),S=[],C=0;C<v;C++)S[C]=this.i(C)&A.i(C);return new o(S,this.h&A.h)},t.or=function(A){for(var v=Math.max(this.g.length,A.g.length),S=[],C=0;C<v;C++)S[C]=this.i(C)|A.i(C);return new o(S,this.h|A.h)},t.xor=function(A){for(var v=Math.max(this.g.length,A.g.length),S=[],C=0;C<v;C++)S[C]=this.i(C)^A.i(C);return new o(S,this.h^A.h)};function V(A){for(var v=A.g.length+1,S=[],C=0;C<v;C++)S[C]=A.i(C)<<1|A.i(C-1)>>>31;return new o(S,A.h)}function j(A,v){var S=v>>5;v%=32;for(var C=A.g.length-S,k=[],N=0;N<C;N++)k[N]=0<v?A.i(N+S)>>>v|A.i(N+S+1)<<32-v:A.i(N+S);return new o(k,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,kI=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,di=o}).apply(typeof Xv<"u"?Xv:typeof self<"u"?self:typeof window<"u"?window:{});var Cl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xI,So,bI,Zl,Bf,NI,OI,DI;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,f){return l==Array.prototype||l==Object.prototype||(l[h]=f.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Cl=="object"&&Cl];for(var h=0;h<l.length;++h){var f=l[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(l,h){if(h)e:{var f=r;l=l.split(".");for(var g=0;g<l.length-1;g++){var b=l[g];if(!(b in f))break e;f=f[b]}l=l[l.length-1],g=f[l],h=h(g),h!=g&&h!=null&&e(f,l,{configurable:!0,writable:!0,value:h})}}function s(l,h){l instanceof String&&(l+="");var f=0,g=!1,b={next:function(){if(!g&&f<l.length){var D=f++;return{value:h(D,l[D]),done:!1}}return g=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(l){return l||function(){return s(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function c(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function d(l,h,f){return l.call.apply(l.bind,arguments)}function p(l,h,f){if(!l)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,g),l.apply(h,b)}}return function(){return l.apply(h,arguments)}}function m(l,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function w(l,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),l.apply(this,g)}}function E(l,h){function f(){}f.prototype=h.prototype,l.aa=h.prototype,l.prototype=new f,l.prototype.constructor=l,l.Qb=function(g,b,D){for(var $=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)$[pe-2]=arguments[pe];return h.prototype[b].apply(g,$)}}function T(l){const h=l.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=l[g];return f}return[]}function R(l,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(u(g)){const b=l.length||0,D=g.length||0;l.length=b+D;for(let $=0;$<D;$++)l[b+$]=g[$]}else l.push(g)}}class _{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function y(l){return/^[\s\xa0]*$/.test(l)}function I(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function O(l){return O[" "](l),l}O[" "]=function(){};var V=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function j(l,h,f){for(const g in l)h.call(f,l[g],g,l)}function A(l,h){for(const f in l)h.call(void 0,l[f],f,l)}function v(l){const h={};for(const f in l)h[f]=l[f];return h}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(l,h){let f,g;for(let b=1;b<arguments.length;b++){g=arguments[b];for(f in g)l[f]=g[f];for(let D=0;D<S.length;D++)f=S[D],Object.prototype.hasOwnProperty.call(g,f)&&(l[f]=g[f])}}function k(l){var h=1;l=l.split(":");const f=[];for(;0<h&&l.length;)f.push(l.shift()),h--;return l.length&&f.push(l.join(":")),f}function N(l){a.setTimeout(()=>{throw l},0)}function P(){var l=J;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class Lt{constructor(){this.h=this.g=null}add(h,f){const g=Wr.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Wr=new _(()=>new Ws,l=>l.reset());class Ws{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let In,q=!1,J=new Lt,ne=()=>{const l=a.Promise.resolve(void 0);In=()=>{l.then(Te)}};var Te=()=>{for(var l;l=P();){try{l.h.call(l.g)}catch(f){N(f)}var h=Wr;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}q=!1};function fe(){this.s=this.s,this.C=this.C}fe.prototype.s=!1,fe.prototype.ma=function(){this.s||(this.s=!0,this.N())},fe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function xe(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}xe.prototype.h=function(){this.defaultPrevented=!0};var Sn=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const f=()=>{};a.addEventListener("test",f,h),a.removeEventListener("test",f,h)}catch{}return l}();function An(l,h){if(xe.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var f=this.type=l.type,g=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(V){e:{try{O(h.nodeName);var b=!0;break e}catch{}b=!1}b||(h=null)}}else f=="mouseover"?h=l.fromElement:f=="mouseout"&&(h=l.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Rn[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&An.aa.h.call(this)}}E(An,xe);var Rn={2:"touch",3:"pen",4:"mouse"};An.prototype.h=function(){An.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Cn="closure_listenable_"+(1e6*Math.random()|0),wA=0;function EA(l,h,f,g,b){this.listener=l,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=b,this.key=++wA,this.da=this.fa=!1}function Ba(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function $a(l){this.src=l,this.g={},this.h=0}$a.prototype.add=function(l,h,f,g,b){var D=l.toString();l=this.g[D],l||(l=this.g[D]=[],this.h++);var $=Jc(l,h,g,b);return-1<$?(h=l[$],f||(h.fa=!1)):(h=new EA(h,this.src,D,!!g,b),h.fa=f,l.push(h)),h};function Xc(l,h){var f=h.type;if(f in l.g){var g=l.g[f],b=Array.prototype.indexOf.call(g,h,void 0),D;(D=0<=b)&&Array.prototype.splice.call(g,b,1),D&&(Ba(h),l.g[f].length==0&&(delete l.g[f],l.h--))}}function Jc(l,h,f,g){for(var b=0;b<l.length;++b){var D=l[b];if(!D.da&&D.listener==h&&D.capture==!!f&&D.ha==g)return b}return-1}var Zc="closure_lm_"+(1e6*Math.random()|0),eh={};function Sg(l,h,f,g,b){if(Array.isArray(h)){for(var D=0;D<h.length;D++)Sg(l,h[D],f,g,b);return null}return f=Cg(f),l&&l[Cn]?l.K(h,f,c(g)?!!g.capture:!!g,b):TA(l,h,f,!1,g,b)}function TA(l,h,f,g,b,D){if(!h)throw Error("Invalid event type");var $=c(b)?!!b.capture:!!b,pe=nh(l);if(pe||(l[Zc]=pe=new $a(l)),f=pe.add(h,f,g,$,D),f.proxy)return f;if(g=IA(),f.proxy=g,g.src=l,g.listener=f,l.addEventListener)Sn||(b=$),b===void 0&&(b=!1),l.addEventListener(h.toString(),g,b);else if(l.attachEvent)l.attachEvent(Rg(h.toString()),g);else if(l.addListener&&l.removeListener)l.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function IA(){function l(f){return h.call(l.src,l.listener,f)}const h=SA;return l}function Ag(l,h,f,g,b){if(Array.isArray(h))for(var D=0;D<h.length;D++)Ag(l,h[D],f,g,b);else g=c(g)?!!g.capture:!!g,f=Cg(f),l&&l[Cn]?(l=l.i,h=String(h).toString(),h in l.g&&(D=l.g[h],f=Jc(D,f,g,b),-1<f&&(Ba(D[f]),Array.prototype.splice.call(D,f,1),D.length==0&&(delete l.g[h],l.h--)))):l&&(l=nh(l))&&(h=l.g[h.toString()],l=-1,h&&(l=Jc(h,f,g,b)),(f=-1<l?h[l]:null)&&th(f))}function th(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[Cn])Xc(h.i,l);else{var f=l.type,g=l.proxy;h.removeEventListener?h.removeEventListener(f,g,l.capture):h.detachEvent?h.detachEvent(Rg(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=nh(h))?(Xc(f,l),f.h==0&&(f.src=null,h[Zc]=null)):Ba(l)}}}function Rg(l){return l in eh?eh[l]:eh[l]="on"+l}function SA(l,h){if(l.da)l=!0;else{h=new An(h,this);var f=l.listener,g=l.ha||l.src;l.fa&&th(l),l=f.call(g,h)}return l}function nh(l){return l=l[Zc],l instanceof $a?l:null}var rh="__closure_events_fn_"+(1e9*Math.random()>>>0);function Cg(l){return typeof l=="function"?l:(l[rh]||(l[rh]=function(h){return l.handleEvent(h)}),l[rh])}function Xe(){fe.call(this),this.i=new $a(this),this.M=this,this.F=null}E(Xe,fe),Xe.prototype[Cn]=!0,Xe.prototype.removeEventListener=function(l,h,f,g){Ag(this,l,h,f,g)};function ut(l,h){var f,g=l.F;if(g)for(f=[];g;g=g.F)f.push(g);if(l=l.M,g=h.type||h,typeof h=="string")h=new xe(h,l);else if(h instanceof xe)h.target=h.target||l;else{var b=h;h=new xe(g,l),C(h,b)}if(b=!0,f)for(var D=f.length-1;0<=D;D--){var $=h.g=f[D];b=qa($,g,!0,h)&&b}if($=h.g=l,b=qa($,g,!0,h)&&b,b=qa($,g,!1,h)&&b,f)for(D=0;D<f.length;D++)$=h.g=f[D],b=qa($,g,!1,h)&&b}Xe.prototype.N=function(){if(Xe.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var f=l.g[h],g=0;g<f.length;g++)Ba(f[g]);delete l.g[h],l.h--}}this.F=null},Xe.prototype.K=function(l,h,f,g){return this.i.add(String(l),h,!1,f,g)},Xe.prototype.L=function(l,h,f,g){return this.i.add(String(l),h,!0,f,g)};function qa(l,h,f,g){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var b=!0,D=0;D<h.length;++D){var $=h[D];if($&&!$.da&&$.capture==f){var pe=$.listener,qe=$.ha||$.src;$.fa&&Xc(l.i,$),b=pe.call(qe,g)!==!1&&b}}return b&&!g.defaultPrevented}function Pg(l,h,f){if(typeof l=="function")f&&(l=m(l,f));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(l,h||0)}function kg(l){l.g=Pg(()=>{l.g=null,l.i&&(l.i=!1,kg(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class AA extends fe{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:kg(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Gs(l){fe.call(this),this.h=l,this.g={}}E(Gs,fe);var xg=[];function bg(l){j(l.g,function(h,f){this.g.hasOwnProperty(f)&&th(h)},l),l.g={}}Gs.prototype.N=function(){Gs.aa.N.call(this),bg(this)},Gs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ih=a.JSON.stringify,RA=a.JSON.parse,CA=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function sh(){}sh.prototype.h=null;function Ng(l){return l.h||(l.h=l.i())}function Og(){}var Ks={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function oh(){xe.call(this,"d")}E(oh,xe);function ah(){xe.call(this,"c")}E(ah,xe);var Gr={},Dg=null;function Ha(){return Dg=Dg||new Xe}Gr.La="serverreachability";function Lg(l){xe.call(this,Gr.La,l)}E(Lg,xe);function Qs(l){const h=Ha();ut(h,new Lg(h))}Gr.STAT_EVENT="statevent";function Mg(l,h){xe.call(this,Gr.STAT_EVENT,l),this.stat=h}E(Mg,xe);function ct(l){const h=Ha();ut(h,new Mg(h,l))}Gr.Ma="timingevent";function Vg(l,h){xe.call(this,Gr.Ma,l),this.size=h}E(Vg,xe);function Ys(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function Xs(){this.g=!0}Xs.prototype.xa=function(){this.g=!1};function PA(l,h,f,g,b,D){l.info(function(){if(l.g)if(D)for(var $="",pe=D.split("&"),qe=0;qe<pe.length;qe++){var ce=pe[qe].split("=");if(1<ce.length){var Je=ce[0];ce=ce[1];var Ze=Je.split("_");$=2<=Ze.length&&Ze[1]=="type"?$+(Je+"="+ce+"&"):$+(Je+"=redacted&")}}else $=null;else $=D;return"XMLHTTP REQ ("+g+") [attempt "+b+"]: "+h+`
`+f+`
`+$})}function kA(l,h,f,g,b,D,$){l.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+b+"]: "+h+`
`+f+`
`+D+" "+$})}function Li(l,h,f,g){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+bA(l,f)+(g?" "+g:"")})}function xA(l,h){l.info(function(){return"TIMEOUT: "+h})}Xs.prototype.info=function(){};function bA(l,h){if(!l.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(l=0;l<f.length;l++)if(Array.isArray(f[l])){var g=f[l];if(!(2>g.length)){var b=g[1];if(Array.isArray(b)&&!(1>b.length)){var D=b[0];if(D!="noop"&&D!="stop"&&D!="close")for(var $=1;$<b.length;$++)b[$]=""}}}}return ih(f)}catch{return h}}var Wa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Fg={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},lh;function Ga(){}E(Ga,sh),Ga.prototype.g=function(){return new XMLHttpRequest},Ga.prototype.i=function(){return{}},lh=new Ga;function er(l,h,f,g){this.j=l,this.i=h,this.l=f,this.R=g||1,this.U=new Gs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ug}function Ug(){this.i=null,this.g="",this.h=!1}var jg={},uh={};function ch(l,h,f){l.L=1,l.v=Xa(Pn(h)),l.m=f,l.P=!0,zg(l,null)}function zg(l,h){l.F=Date.now(),Ka(l),l.A=Pn(l.v);var f=l.A,g=l.R;Array.isArray(g)||(g=[String(g)]),ty(f.i,"t",g),l.C=0,f=l.j.J,l.h=new Ug,l.g=_y(l.j,f?h:null,!l.m),0<l.O&&(l.M=new AA(m(l.Y,l,l.g),l.O)),h=l.U,f=l.g,g=l.ca;var b="readystatechange";Array.isArray(b)||(b&&(xg[0]=b.toString()),b=xg);for(var D=0;D<b.length;D++){var $=Sg(f,b[D],g||h.handleEvent,!1,h.h||h);if(!$)break;h.g[$.key]=$}h=l.H?v(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),Qs(),PA(l.i,l.u,l.A,l.l,l.R,l.m)}er.prototype.ca=function(l){l=l.target;const h=this.M;h&&kn(l)==3?h.j():this.Y(l)},er.prototype.Y=function(l){try{if(l==this.g)e:{const Ze=kn(this.g);var h=this.g.Ba();const Fi=this.g.Z();if(!(3>Ze)&&(Ze!=3||this.g&&(this.h.h||this.g.oa()||ly(this.g)))){this.J||Ze!=4||h==7||(h==8||0>=Fi?Qs(3):Qs(2)),hh(this);var f=this.g.Z();this.X=f;t:if(Bg(this)){var g=ly(this.g);l="";var b=g.length,D=kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Kr(this),Js(this);var $="";break t}this.h.i=new a.TextDecoder}for(h=0;h<b;h++)this.h.h=!0,l+=this.h.i.decode(g[h],{stream:!(D&&h==b-1)});g.length=0,this.h.g+=l,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=f==200,kA(this.i,this.u,this.A,this.l,this.R,Ze,f),this.o){if(this.T&&!this.K){t:{if(this.g){var pe,qe=this.g;if((pe=qe.g?qe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(pe)){var ce=pe;break t}}ce=null}if(f=ce)Li(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,dh(this,f);else{this.o=!1,this.s=3,ct(12),Kr(this),Js(this);break e}}if(this.P){f=!0;let Ht;for(;!this.J&&this.C<$.length;)if(Ht=NA(this,$),Ht==uh){Ze==4&&(this.s=4,ct(14),f=!1),Li(this.i,this.l,null,"[Incomplete Response]");break}else if(Ht==jg){this.s=4,ct(15),Li(this.i,this.l,$,"[Invalid Chunk]"),f=!1;break}else Li(this.i,this.l,Ht,null),dh(this,Ht);if(Bg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ze!=4||$.length!=0||this.h.h||(this.s=1,ct(16),f=!1),this.o=this.o&&f,!f)Li(this.i,this.l,$,"[Invalid Chunked Response]"),Kr(this),Js(this);else if(0<$.length&&!this.W){this.W=!0;var Je=this.j;Je.g==this&&Je.ba&&!Je.M&&(Je.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),vh(Je),Je.M=!0,ct(11))}}else Li(this.i,this.l,$,null),dh(this,$);Ze==4&&Kr(this),this.o&&!this.J&&(Ze==4?my(this.j,this):(this.o=!1,Ka(this)))}else QA(this.g),f==400&&0<$.indexOf("Unknown SID")?(this.s=3,ct(12)):(this.s=0,ct(13)),Kr(this),Js(this)}}}catch{}finally{}};function Bg(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function NA(l,h){var f=l.C,g=h.indexOf(`
`,f);return g==-1?uh:(f=Number(h.substring(f,g)),isNaN(f)?jg:(g+=1,g+f>h.length?uh:(h=h.slice(g,g+f),l.C=g+f,h)))}er.prototype.cancel=function(){this.J=!0,Kr(this)};function Ka(l){l.S=Date.now()+l.I,$g(l,l.I)}function $g(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Ys(m(l.ba,l),h)}function hh(l){l.B&&(a.clearTimeout(l.B),l.B=null)}er.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(xA(this.i,this.A),this.L!=2&&(Qs(),ct(17)),Kr(this),this.s=2,Js(this)):$g(this,this.S-l)};function Js(l){l.j.G==0||l.J||my(l.j,l)}function Kr(l){hh(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,bg(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function dh(l,h){try{var f=l.j;if(f.G!=0&&(f.g==l||fh(f.h,l))){if(!l.K&&fh(f.h,l)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var b=g;if(b[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<l.F)rl(f),tl(f);else break e;yh(f),ct(18)}}else f.za=b[1],0<f.za-f.T&&37500>b[2]&&f.F&&f.v==0&&!f.C&&(f.C=Ys(m(f.Za,f),6e3));if(1>=Wg(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Yr(f,11)}else if((l.K||f.g==l)&&rl(f),!y(h))for(b=f.Da.g.parse(h),h=0;h<b.length;h++){let ce=b[h];if(f.T=ce[0],ce=ce[1],f.G==2)if(ce[0]=="c"){f.K=ce[1],f.ia=ce[2];const Je=ce[3];Je!=null&&(f.la=Je,f.j.info("VER="+f.la));const Ze=ce[4];Ze!=null&&(f.Aa=Ze,f.j.info("SVER="+f.Aa));const Fi=ce[5];Fi!=null&&typeof Fi=="number"&&0<Fi&&(g=1.5*Fi,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Ht=l.g;if(Ht){const sl=Ht.g?Ht.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(sl){var D=g.h;D.g||sl.indexOf("spdy")==-1&&sl.indexOf("quic")==-1&&sl.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(ph(D,D.h),D.h=null))}if(g.D){const _h=Ht.g?Ht.g.getResponseHeader("X-HTTP-Session-Id"):null;_h&&(g.ya=_h,ge(g.I,g.D,_h))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-l.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var $=l;if(g.qa=vy(g,g.J?g.ia:null,g.W),$.K){Gg(g.h,$);var pe=$,qe=g.L;qe&&(pe.I=qe),pe.B&&(hh(pe),Ka(pe)),g.g=$}else fy(g);0<f.i.length&&nl(f)}else ce[0]!="stop"&&ce[0]!="close"||Yr(f,7);else f.G==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?Yr(f,7):gh(f):ce[0]!="noop"&&f.l&&f.l.ta(ce),f.v=0)}}Qs(4)}catch{}}var OA=class{constructor(l,h){this.g=l,this.map=h}};function qg(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Hg(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Wg(l){return l.h?1:l.g?l.g.size:0}function fh(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function ph(l,h){l.g?l.g.add(h):l.h=h}function Gg(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}qg.prototype.cancel=function(){if(this.i=Kg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Kg(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const f of l.g.values())h=h.concat(f.D);return h}return T(l.i)}function DA(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var h=[],f=l.length,g=0;g<f;g++)h.push(l[g]);return h}h=[],f=0;for(g in l)h[f++]=l[g];return h}function LA(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var h=[];l=l.length;for(var f=0;f<l;f++)h.push(f);return h}h=[],f=0;for(const g in l)h[f++]=g;return h}}}function Qg(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var f=LA(l),g=DA(l),b=g.length,D=0;D<b;D++)h.call(void 0,g[D],f&&f[D],l)}var Yg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function MA(l,h){if(l){l=l.split("&");for(var f=0;f<l.length;f++){var g=l[f].indexOf("="),b=null;if(0<=g){var D=l[f].substring(0,g);b=l[f].substring(g+1)}else D=l[f];h(D,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Qr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Qr){this.h=l.h,Qa(this,l.j),this.o=l.o,this.g=l.g,Ya(this,l.s),this.l=l.l;var h=l.i,f=new to;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Xg(this,f),this.m=l.m}else l&&(h=String(l).match(Yg))?(this.h=!1,Qa(this,h[1]||"",!0),this.o=Zs(h[2]||""),this.g=Zs(h[3]||"",!0),Ya(this,h[4]),this.l=Zs(h[5]||"",!0),Xg(this,h[6]||"",!0),this.m=Zs(h[7]||"")):(this.h=!1,this.i=new to(null,this.h))}Qr.prototype.toString=function(){var l=[],h=this.j;h&&l.push(eo(h,Jg,!0),":");var f=this.g;return(f||h=="file")&&(l.push("//"),(h=this.o)&&l.push(eo(h,Jg,!0),"@"),l.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&l.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&l.push("/"),l.push(eo(f,f.charAt(0)=="/"?UA:FA,!0))),(f=this.i.toString())&&l.push("?",f),(f=this.m)&&l.push("#",eo(f,zA)),l.join("")};function Pn(l){return new Qr(l)}function Qa(l,h,f){l.j=f?Zs(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function Ya(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function Xg(l,h,f){h instanceof to?(l.i=h,BA(l.i,l.h)):(f||(h=eo(h,jA)),l.i=new to(h,l.h))}function ge(l,h,f){l.i.set(h,f)}function Xa(l){return ge(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Zs(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function eo(l,h,f){return typeof l=="string"?(l=encodeURI(l).replace(h,VA),f&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function VA(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Jg=/[#\/\?@]/g,FA=/[#\?:]/g,UA=/[#\?]/g,jA=/[#\?@]/g,zA=/#/g;function to(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function tr(l){l.g||(l.g=new Map,l.h=0,l.i&&MA(l.i,function(h,f){l.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=to.prototype,t.add=function(l,h){tr(this),this.i=null,l=Mi(this,l);var f=this.g.get(l);return f||this.g.set(l,f=[]),f.push(h),this.h+=1,this};function Zg(l,h){tr(l),h=Mi(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function ey(l,h){return tr(l),h=Mi(l,h),l.g.has(h)}t.forEach=function(l,h){tr(this),this.g.forEach(function(f,g){f.forEach(function(b){l.call(h,b,g,this)},this)},this)},t.na=function(){tr(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const b=l[g];for(let D=0;D<b.length;D++)f.push(h[g])}return f},t.V=function(l){tr(this);let h=[];if(typeof l=="string")ey(this,l)&&(h=h.concat(this.g.get(Mi(this,l))));else{l=Array.from(this.g.values());for(let f=0;f<l.length;f++)h=h.concat(l[f])}return h},t.set=function(l,h){return tr(this),this.i=null,l=Mi(this,l),ey(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function ty(l,h,f){Zg(l,h),0<f.length&&(l.i=null,l.g.set(Mi(l,h),T(f)),l.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const D=encodeURIComponent(String(g)),$=this.V(g);for(g=0;g<$.length;g++){var b=D;$[g]!==""&&(b+="="+encodeURIComponent(String($[g]))),l.push(b)}}return this.i=l.join("&")};function Mi(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function BA(l,h){h&&!l.j&&(tr(l),l.i=null,l.g.forEach(function(f,g){var b=g.toLowerCase();g!=b&&(Zg(this,g),ty(this,b,f))},l)),l.j=h}function $A(l,h){const f=new Xs;if(a.Image){const g=new Image;g.onload=w(nr,f,"TestLoadImage: loaded",!0,h,g),g.onerror=w(nr,f,"TestLoadImage: error",!1,h,g),g.onabort=w(nr,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=w(nr,f,"TestLoadImage: timeout",!1,h,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=l}else h(!1)}function qA(l,h){const f=new Xs,g=new AbortController,b=setTimeout(()=>{g.abort(),nr(f,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:g.signal}).then(D=>{clearTimeout(b),D.ok?nr(f,"TestPingServer: ok",!0,h):nr(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(b),nr(f,"TestPingServer: error",!1,h)})}function nr(l,h,f,g,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),g(f)}catch{}}function HA(){this.g=new CA}function WA(l,h,f){const g=f||"";try{Qg(l,function(b,D){let $=b;c(b)&&($=ih(b)),h.push(g+D+"="+encodeURIComponent($))})}catch(b){throw h.push(g+"type="+encodeURIComponent("_badmap")),b}}function Ja(l){this.l=l.Ub||null,this.j=l.eb||!1}E(Ja,sh),Ja.prototype.g=function(){return new Za(this.l,this.j)},Ja.prototype.i=function(l){return function(){return l}}({});function Za(l,h){Xe.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}E(Za,Xe),t=Za.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,ro(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,no(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,ro(this)),this.g&&(this.readyState=3,ro(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ny(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function ny(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?no(this):ro(this),this.readyState==3&&ny(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,no(this))},t.Qa=function(l){this.g&&(this.response=l,no(this))},t.ga=function(){this.g&&no(this)};function no(l){l.readyState=4,l.l=null,l.j=null,l.v=null,ro(l)}t.setRequestHeader=function(l,h){this.u.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,l.push(f[0]+": "+f[1]),f=h.next();return l.join(`\r
`)};function ro(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Za.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function ry(l){let h="";return j(l,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function mh(l,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=ry(f),typeof l=="string"?f!=null&&encodeURIComponent(String(f)):ge(l,h,f))}function Pe(l){Xe.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}E(Pe,Xe);var GA=/^https?$/i,KA=["POST","PUT"];t=Pe.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():lh.g(),this.v=this.o?Ng(this.o):Ng(lh),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(D){iy(this,D);return}if(l=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var b in g)f.set(b,g[b]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())f.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(D=>D.toLowerCase()=="content-type"),b=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(KA,h,void 0))||g||b||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,$]of f)this.g.setRequestHeader(D,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ay(this),this.u=!0,this.g.send(l),this.u=!1}catch(D){iy(this,D)}};function iy(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,sy(l),el(l)}function sy(l){l.A||(l.A=!0,ut(l,"complete"),ut(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ut(this,"complete"),ut(this,"abort"),el(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),el(this,!0)),Pe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?oy(this):this.bb())},t.bb=function(){oy(this)};function oy(l){if(l.h&&typeof o<"u"&&(!l.v[1]||kn(l)!=4||l.Z()!=2)){if(l.u&&kn(l)==4)Pg(l.Ea,0,l);else if(ut(l,"readystatechange"),kn(l)==4){l.h=!1;try{const $=l.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=$===0){var b=String(l.D).match(Yg)[1]||null;!b&&a.self&&a.self.location&&(b=a.self.location.protocol.slice(0,-1)),g=!GA.test(b?b.toLowerCase():"")}f=g}if(f)ut(l,"complete"),ut(l,"success");else{l.m=6;try{var D=2<kn(l)?l.g.statusText:""}catch{D=""}l.l=D+" ["+l.Z()+"]",sy(l)}}finally{el(l)}}}}function el(l,h){if(l.g){ay(l);const f=l.g,g=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||ut(l,"ready");try{f.onreadystatechange=g}catch{}}}function ay(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function kn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<kn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),RA(h)}};function ly(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function QA(l){const h={};l=(l.g&&2<=kn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<l.length;g++){if(y(l[g]))continue;var f=k(l[g]);const b=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const D=h[b]||[];h[b]=D,D.push(f)}A(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function io(l,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[l]||h}function uy(l){this.Aa=0,this.i=[],this.j=new Xs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=io("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=io("baseRetryDelayMs",5e3,l),this.cb=io("retryDelaySeedMs",1e4,l),this.Wa=io("forwardChannelMaxRetries",2,l),this.wa=io("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new qg(l&&l.concurrentRequestLimit),this.Da=new HA,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=uy.prototype,t.la=8,t.G=1,t.connect=function(l,h,f,g){ct(0),this.W=l,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=vy(this,null,this.W),nl(this)};function gh(l){if(cy(l),l.G==3){var h=l.U++,f=Pn(l.I);if(ge(f,"SID",l.K),ge(f,"RID",h),ge(f,"TYPE","terminate"),so(l,f),h=new er(l,l.j,h),h.L=2,h.v=Xa(Pn(f)),f=!1,a.navigator&&a.navigator.sendBeacon)try{f=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&a.Image&&(new Image().src=h.v,f=!0),f||(h.g=_y(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Ka(h)}yy(l)}function tl(l){l.g&&(vh(l),l.g.cancel(),l.g=null)}function cy(l){tl(l),l.u&&(a.clearTimeout(l.u),l.u=null),rl(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function nl(l){if(!Hg(l.h)&&!l.s){l.s=!0;var h=l.Ga;In||ne(),q||(In(),q=!0),J.add(h,l),l.B=0}}function YA(l,h){return Wg(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Ys(m(l.Ga,l,h),gy(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const b=new er(this,this.j,l);let D=this.o;if(this.S&&(D?(D=v(D),C(D,this.S)):D=this.S),this.m!==null||this.O||(b.H=D,D=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=dy(this,b,h),f=Pn(this.I),ge(f,"RID",l),ge(f,"CVER",22),this.D&&ge(f,"X-HTTP-Session-Id",this.D),so(this,f),D&&(this.O?h="headers="+encodeURIComponent(String(ry(D)))+"&"+h:this.m&&mh(f,this.m,D)),ph(this.h,b),this.Ua&&ge(f,"TYPE","init"),this.P?(ge(f,"$req",h),ge(f,"SID","null"),b.T=!0,ch(b,f,null)):ch(b,f,h),this.G=2}}else this.G==3&&(l?hy(this,l):this.i.length==0||Hg(this.h)||hy(this))};function hy(l,h){var f;h?f=h.l:f=l.U++;const g=Pn(l.I);ge(g,"SID",l.K),ge(g,"RID",f),ge(g,"AID",l.T),so(l,g),l.m&&l.o&&mh(g,l.m,l.o),f=new er(l,l.j,f,l.B+1),l.m===null&&(f.H=l.o),h&&(l.i=h.D.concat(l.i)),h=dy(l,f,1e3),f.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),ph(l.h,f),ch(f,g,h)}function so(l,h){l.H&&j(l.H,function(f,g){ge(h,g,f)}),l.l&&Qg({},function(f,g){ge(h,g,f)})}function dy(l,h,f){f=Math.min(l.i.length,f);var g=l.l?m(l.l.Na,l.l,l):null;e:{var b=l.i;let D=-1;for(;;){const $=["count="+f];D==-1?0<f?(D=b[0].g,$.push("ofs="+D)):D=0:$.push("ofs="+D);let pe=!0;for(let qe=0;qe<f;qe++){let ce=b[qe].g;const Je=b[qe].map;if(ce-=D,0>ce)D=Math.max(0,b[qe].g-100),pe=!1;else try{WA(Je,$,"req"+ce+"_")}catch{g&&g(Je)}}if(pe){g=$.join("&");break e}}}return l=l.i.splice(0,f),h.D=l,g}function fy(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;In||ne(),q||(In(),q=!0),J.add(h,l),l.v=0}}function yh(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Ys(m(l.Fa,l),gy(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,py(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Ys(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ct(10),tl(this),py(this))};function vh(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function py(l){l.g=new er(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=Pn(l.qa);ge(h,"RID","rpc"),ge(h,"SID",l.K),ge(h,"AID",l.T),ge(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&ge(h,"TO",l.ja),ge(h,"TYPE","xmlhttp"),so(l,h),l.m&&l.o&&mh(h,l.m,l.o),l.L&&(l.g.I=l.L);var f=l.g;l=l.ia,f.L=1,f.v=Xa(Pn(h)),f.m=null,f.P=!0,zg(f,l)}t.Za=function(){this.C!=null&&(this.C=null,tl(this),yh(this),ct(19))};function rl(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function my(l,h){var f=null;if(l.g==h){rl(l),vh(l),l.g=null;var g=2}else if(fh(l.h,h))f=h.D,Gg(l.h,h),g=1;else return;if(l.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var b=l.B;g=Ha(),ut(g,new Vg(g,f)),nl(l)}else fy(l);else if(b=h.s,b==3||b==0&&0<h.X||!(g==1&&YA(l,h)||g==2&&yh(l)))switch(f&&0<f.length&&(h=l.h,h.i=h.i.concat(f)),b){case 1:Yr(l,5);break;case 4:Yr(l,10);break;case 3:Yr(l,6);break;default:Yr(l,2)}}}function gy(l,h){let f=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(f*=2),f*h}function Yr(l,h){if(l.j.info("Error code "+h),h==2){var f=m(l.fb,l),g=l.Xa;const b=!g;g=new Qr(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Qa(g,"https"),Xa(g),b?$A(g.toString(),f):qA(g.toString(),f)}else ct(2);l.G=0,l.l&&l.l.sa(h),yy(l),cy(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))};function yy(l){if(l.G=0,l.ka=[],l.l){const h=Kg(l.h);(h.length!=0||l.i.length!=0)&&(R(l.ka,h),R(l.ka,l.i),l.h.i.length=0,T(l.i),l.i.length=0),l.l.ra()}}function vy(l,h,f){var g=f instanceof Qr?Pn(f):new Qr(f);if(g.g!="")h&&(g.g=h+"."+g.g),Ya(g,g.s);else{var b=a.location;g=b.protocol,h=h?h+"."+b.hostname:b.hostname,b=+b.port;var D=new Qr(null);g&&Qa(D,g),h&&(D.g=h),b&&Ya(D,b),f&&(D.l=f),g=D}return f=l.D,h=l.ya,f&&h&&ge(g,f,h),ge(g,"VER",l.la),so(l,g),g}function _y(l,h,f){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new Pe(new Ja({eb:f})):new Pe(l.pa),h.Ha(l.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function wy(){}t=wy.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function il(){}il.prototype.g=function(l,h){return new At(l,h)};function At(l,h){Xe.call(this),this.g=new uy(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!y(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!y(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new Vi(this)}E(At,Xe),At.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){gh(this.g)},At.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var f={};f.__data__=l,l=f}else this.u&&(f={},f.__data__=ih(l),l=f);h.i.push(new OA(h.Ya++,l)),h.G==3&&nl(h)},At.prototype.N=function(){this.g.l=null,delete this.j,gh(this.g),delete this.g,At.aa.N.call(this)};function Ey(l){oh.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const f in h){l=f;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}E(Ey,oh);function Ty(){ah.call(this),this.status=1}E(Ty,ah);function Vi(l){this.g=l}E(Vi,wy),Vi.prototype.ua=function(){ut(this.g,"a")},Vi.prototype.ta=function(l){ut(this.g,new Ey(l))},Vi.prototype.sa=function(l){ut(this.g,new Ty)},Vi.prototype.ra=function(){ut(this.g,"b")},il.prototype.createWebChannel=il.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,DI=function(){return new il},OI=function(){return Ha()},NI=Gr,Bf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Wa.NO_ERROR=0,Wa.TIMEOUT=8,Wa.HTTP_ERROR=6,Zl=Wa,Fg.COMPLETE="complete",bI=Fg,Og.EventType=Ks,Ks.OPEN="a",Ks.CLOSE="b",Ks.ERROR="c",Ks.MESSAGE="d",Xe.prototype.listen=Xe.prototype.K,So=Og,Pe.prototype.listenOnce=Pe.prototype.L,Pe.prototype.getLastError=Pe.prototype.Ka,Pe.prototype.getLastErrorCode=Pe.prototype.Ba,Pe.prototype.getStatus=Pe.prototype.Z,Pe.prototype.getResponseJson=Pe.prototype.Oa,Pe.prototype.getResponseText=Pe.prototype.oa,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Ha,xI=Pe}).apply(typeof Cl<"u"?Cl:typeof self<"u"?self:typeof window<"u"?window:{});const Jv="@firebase/firestore";/**
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
 */class rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rt.UNAUTHENTICATED=new rt(null),rt.GOOGLE_CREDENTIALS=new rt("google-credentials-uid"),rt.FIRST_PARTY=new rt("first-party-uid"),rt.MOCK_USER=new rt("mock-user");/**
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
 */let Us="11.0.2";/**
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
 */const Si=new Rc("@firebase/firestore");function ji(){return Si.logLevel}function H(t,...e){if(Si.logLevel<=se.DEBUG){const n=e.map(Um);Si.debug(`Firestore (${Us}): ${t}`,...n)}}function Qn(t,...e){if(Si.logLevel<=se.ERROR){const n=e.map(Um);Si.error(`Firestore (${Us}): ${t}`,...n)}}function Ss(t,...e){if(Si.logLevel<=se.WARN){const n=e.map(Um);Si.warn(`Firestore (${Us}): ${t}`,...n)}}function Um(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${Us}) INTERNAL ASSERTION FAILED: `+t;throw Qn(e),new Error(e)}function he(t,e){t||Y()}function ee(t,e){return t}/**
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
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends sn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Pr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class LI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class N4{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(rt.UNAUTHENTICATED))}shutdown(){}}class O4{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class D4{constructor(e){this.t=e,this.currentUser=rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){he(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Pr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Pr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Pr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(he(typeof r.accessToken=="string"),new LI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return he(e===null||typeof e=="string"),new rt(e)}}class L4{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=rt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class M4{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new L4(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class V4{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class F4{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){he(this.o===void 0);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(he(typeof n.token=="string"),this.R=n.token,new V4(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function U4(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class MI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=U4(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ae(t,e){return t<e?-1:t>e?1:0}function As(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Ue{static now(){return Ue.fromMillis(Date.now())}static fromDate(e){return Ue.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ue(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new G(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Z{static fromTimestamp(e){return new Z(e)}static min(){return new Z(new Ue(0,0))}static max(){return new Z(new Ue(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class fa{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return fa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof fa?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ve extends fa{construct(e,n,r){return new ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ve(n)}static emptyPath(){return new ve([])}}const j4=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends fa{construct(e,n,r){return new Ge(e,n,r)}static isValidIdentifier(e){return j4.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ge(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new G(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new G(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new G(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new G(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(n)}static emptyPath(){return new Ge([])}}/**
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
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(ve.fromString(e))}static fromName(e){return new Q(ve.fromString(e).popFirst(5))}static empty(){return new Q(ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new ve(e.slice()))}}function z4(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Z.fromTimestamp(r===1e9?new Ue(n+1,0):new Ue(n,r));return new Mr(i,Q.empty(),e)}function B4(t){return new Mr(t.readTime,t.key,-1)}class Mr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Mr(Z.min(),Q.empty(),-1)}static max(){return new Mr(Z.max(),Q.empty(),-1)}}function $4(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:ae(t.largestBatchId,e.largestBatchId))}/**
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
 */const q4="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class H4{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function js(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==q4)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new F((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function W4(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function zs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Nc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Nc.oe=-1;function Oc(t){return t==null}function qu(t){return t===0&&1/t==-1/0}function G4(t){return typeof t=="number"&&Number.isInteger(t)&&!qu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function K4(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Zv(e)),e=Q4(t.get(n),e);return Zv(e)}function Q4(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function Zv(t){return t+""}/**
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
 */function e_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function bi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function VI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ce{constructor(e,n){this.comparator=e,this.root=n||We.EMPTY}insert(e,n){return new Ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,We.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,We.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pl(this.root,e,this.comparator,!0)}}class Pl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class We{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??We.RED,this.left=i??We.EMPTY,this.right=s??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new We(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return We.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,n,r,i,s){return this}insert(e,n,r){return new We(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class je{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new t_(this.data.getIterator())}getIteratorFrom(e){return new t_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new je(this.comparator);return n.data=e,n}}class t_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Xt{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new Xt([])}unionWith(e){let n=new je(Ge.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return As(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class FI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ye{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new FI("Invalid base64 string: "+s):s}}(e);return new Ye(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ye(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ye.EMPTY_BYTE_STRING=new Ye("");const Y4=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vr(t){if(he(!!t),typeof t=="string"){let e=0;const n=Y4.exec(t);if(he(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:be(t.seconds),nanos:be(t.nanos)}}function be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Fr(t){return typeof t=="string"?Ye.fromBase64String(t):Ye.fromUint8Array(t)}/**
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
 */function jm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Dc(t){const e=t.mapValue.fields.__previous_value__;return jm(e)?Dc(e):e}function pa(t){const e=Vr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ue(e.seconds,e.nanos)}/**
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
 */class X4{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class ma{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ma("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ma&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const kl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ur(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?jm(t)?4:Z4(t)?9007199254740991:J4(t)?10:11:Y()}function En(t,e){if(t===e)return!0;const n=Ur(t);if(n!==Ur(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return pa(t).isEqual(pa(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Vr(i.timestampValue),a=Vr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Fr(i.bytesValue).isEqual(Fr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return be(i.geoPointValue.latitude)===be(s.geoPointValue.latitude)&&be(i.geoPointValue.longitude)===be(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return be(i.integerValue)===be(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=be(i.doubleValue),a=be(s.doubleValue);return o===a?qu(o)===qu(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return As(t.arrayValue.values||[],e.arrayValue.values||[],En);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(e_(o)!==e_(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!En(o[u],a[u])))return!1;return!0}(t,e);default:return Y()}}function ga(t,e){return(t.values||[]).find(n=>En(n,e))!==void 0}function Rs(t,e){if(t===e)return 0;const n=Ur(t),r=Ur(e);if(n!==r)return ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ae(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=be(s.integerValue||s.doubleValue),u=be(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return n_(t.timestampValue,e.timestampValue);case 4:return n_(pa(t),pa(e));case 5:return ae(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Fr(s),u=Fr(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const d=ae(a[c],u[c]);if(d!==0)return d}return ae(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ae(be(s.latitude),be(o.latitude));return a!==0?a:ae(be(s.longitude),be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return r_(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,c,d;const p=s.fields||{},m=o.fields||{},w=(a=p.value)===null||a===void 0?void 0:a.arrayValue,E=(u=m.value)===null||u===void 0?void 0:u.arrayValue,T=ae(((c=w==null?void 0:w.values)===null||c===void 0?void 0:c.length)||0,((d=E==null?void 0:E.values)===null||d===void 0?void 0:d.length)||0);return T!==0?T:r_(w,E)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===kl.mapValue&&o===kl.mapValue)return 0;if(s===kl.mapValue)return 1;if(o===kl.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=ae(u[p],d[p]);if(m!==0)return m;const w=Rs(a[u[p]],c[d[p]]);if(w!==0)return w}return ae(u.length,d.length)}(t.mapValue,e.mapValue);default:throw Y()}}function n_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ae(t,e);const n=Vr(t),r=Vr(e),i=ae(n.seconds,r.seconds);return i!==0?i:ae(n.nanos,r.nanos)}function r_(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Rs(n[i],r[i]);if(s)return s}return ae(n.length,r.length)}function Cs(t){return $f(t)}function $f(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Vr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Fr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=$f(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${$f(n.fields[o])}`;return i+"}"}(t.mapValue):Y()}function eu(t){switch(Ur(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Dc(t);return e?16+eu(e):16;case 5:return 2*t.stringValue.length;case 6:return Fr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+eu(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return bi(r.fields,(s,o)=>{i+=s.length+eu(o)}),i}(t.mapValue);default:throw Y()}}function i_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function qf(t){return!!t&&"integerValue"in t}function zm(t){return!!t&&"arrayValue"in t}function s_(t){return!!t&&"nullValue"in t}function o_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function tu(t){return!!t&&"mapValue"in t}function J4(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function jo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return bi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=jo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=jo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Z4(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ft{constructor(e){this.value=e}static empty(){return new Ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!tu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=jo(n)}setAll(e){let n=Ge.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=jo(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());tu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return En(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];tu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){bi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ft(jo(this.value))}}function UI(t){const e=[];return bi(t.fields,(n,r)=>{const i=new Ge([n]);if(tu(r)){const s=UI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Xt(e)}/**
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
 */class st{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new st(e,0,Z.min(),Z.min(),Z.min(),Ft.empty(),0)}static newFoundDocument(e,n,r,i){return new st(e,1,n,Z.min(),r,i,0)}static newNoDocument(e,n){return new st(e,2,n,Z.min(),Z.min(),Ft.empty(),0)}static newUnknownDocument(e,n){return new st(e,3,n,Z.min(),Z.min(),Ft.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof st&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new st(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Hu{constructor(e,n){this.position=e,this.inclusive=n}}function a_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),n.key):r=Rs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function l_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!En(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ya{constructor(e,n="asc"){this.field=e,this.dir=n}}function eM(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class jI{}class Le extends jI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new nM(e,n,r):n==="array-contains"?new sM(e,r):n==="in"?new oM(e,r):n==="not-in"?new aM(e,r):n==="array-contains-any"?new lM(e,r):new Le(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new rM(e,r):new iM(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Rs(n,this.value)):n!==null&&Ur(this.value)===Ur(n)&&this.matchesComparison(Rs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rn extends jI{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new rn(e,n)}matches(e){return zI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function zI(t){return t.op==="and"}function BI(t){return tM(t)&&zI(t)}function tM(t){for(const e of t.filters)if(e instanceof rn)return!1;return!0}function Hf(t){if(t instanceof Le)return t.field.canonicalString()+t.op.toString()+Cs(t.value);if(BI(t))return t.filters.map(e=>Hf(e)).join(",");{const e=t.filters.map(n=>Hf(n)).join(",");return`${t.op}(${e})`}}function $I(t,e){return t instanceof Le?function(r,i){return i instanceof Le&&r.op===i.op&&r.field.isEqual(i.field)&&En(r.value,i.value)}(t,e):t instanceof rn?function(r,i){return i instanceof rn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&$I(o,i.filters[a]),!0):!1}(t,e):void Y()}function qI(t){return t instanceof Le?function(n){return`${n.field.canonicalString()} ${n.op} ${Cs(n.value)}`}(t):t instanceof rn?function(n){return n.op.toString()+" {"+n.getFilters().map(qI).join(" ,")+"}"}(t):"Filter"}class nM extends Le{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class rM extends Le{constructor(e,n){super(e,"in",n),this.keys=HI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class iM extends Le{constructor(e,n){super(e,"not-in",n),this.keys=HI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function HI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class sM extends Le{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return zm(n)&&ga(n.arrayValue,this.value)}}class oM extends Le{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ga(this.value.arrayValue,n)}}class aM extends Le{constructor(e,n){super(e,"not-in",n)}matches(e){if(ga(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ga(this.value.arrayValue,n)}}class lM extends Le{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!zm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ga(this.value.arrayValue,r))}}/**
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
 */class uM{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function u_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new uM(t,e,n,r,i,s,o)}function Bm(t){const e=ee(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Hf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Oc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Cs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Cs(r)).join(",")),e.ue=n}return e.ue}function $m(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!eM(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!$I(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!l_(t.startAt,e.startAt)&&l_(t.endAt,e.endAt)}function Wf(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Bs{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function cM(t,e,n,r,i,s,o,a){return new Bs(t,e,n,r,i,s,o,a)}function WI(t){return new Bs(t)}function c_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function GI(t){return t.collectionGroup!==null}function zo(t){const e=ee(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new je(Ge.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new ya(s,r))}),n.has(Ge.keyField().canonicalString())||e.ce.push(new ya(Ge.keyField(),r))}return e.ce}function gn(t){const e=ee(t);return e.le||(e.le=hM(e,zo(t))),e.le}function hM(t,e){if(t.limitType==="F")return u_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ya(i.field,s)});const n=t.endAt?new Hu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Hu(t.startAt.position,t.startAt.inclusive):null;return u_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Gf(t,e){const n=t.filters.concat([e]);return new Bs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Wu(t,e,n){return new Bs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Lc(t,e){return $m(gn(t),gn(e))&&t.limitType===e.limitType}function KI(t){return`${Bm(gn(t))}|lt:${t.limitType}`}function zi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>qI(i)).join(", ")}]`),Oc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Cs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Cs(i)).join(",")),`Target(${r})`}(gn(t))}; limitType=${t.limitType})`}function Mc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of zo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=a_(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,zo(r),i)||r.endAt&&!function(o,a,u){const c=a_(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,zo(r),i))}(t,e)}function dM(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function QI(t){return(e,n)=>{let r=!1;for(const i of zo(t)){const s=fM(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function fM(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?Rs(u,c):Y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
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
 */class Ni{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){bi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return VI(this.inner)}size(){return this.innerSize}}/**
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
 */const pM=new Ce(Q.comparator);function Yn(){return pM}const YI=new Ce(Q.comparator);function Ao(...t){let e=YI;for(const n of t)e=e.insert(n.key,n);return e}function XI(t){let e=YI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ai(){return Bo()}function JI(){return Bo()}function Bo(){return new Ni(t=>t.toString(),(t,e)=>t.isEqual(e))}const mM=new Ce(Q.comparator),gM=new je(Q.comparator);function oe(...t){let e=gM;for(const n of t)e=e.add(n);return e}const yM=new je(ae);function vM(){return yM}/**
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
 */function qm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qu(e)?"-0":e}}function ZI(t){return{integerValue:""+t}}function _M(t,e){return G4(e)?ZI(e):qm(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Vc{constructor(){this._=void 0}}function wM(t,e,n){return t instanceof Gu?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&jm(s)&&(s=Dc(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof va?tS(t,e):t instanceof _a?nS(t,e):function(i,s){const o=eS(i,s),a=h_(o)+h_(i.Pe);return qf(o)&&qf(i.Pe)?ZI(a):qm(i.serializer,a)}(t,e)}function EM(t,e,n){return t instanceof va?tS(t,e):t instanceof _a?nS(t,e):n}function eS(t,e){return t instanceof Ku?function(r){return qf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Gu extends Vc{}class va extends Vc{constructor(e){super(),this.elements=e}}function tS(t,e){const n=rS(e);for(const r of t.elements)n.some(i=>En(i,r))||n.push(r);return{arrayValue:{values:n}}}class _a extends Vc{constructor(e){super(),this.elements=e}}function nS(t,e){let n=rS(e);for(const r of t.elements)n=n.filter(i=>!En(i,r));return{arrayValue:{values:n}}}class Ku extends Vc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function h_(t){return be(t.integerValue||t.doubleValue)}function rS(t){return zm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function TM(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof va&&i instanceof va||r instanceof _a&&i instanceof _a?As(r.elements,i.elements,En):r instanceof Ku&&i instanceof Ku?En(r.Pe,i.Pe):r instanceof Gu&&i instanceof Gu}(t.transform,e.transform)}class IM{constructor(e,n){this.version=e,this.transformResults=n}}class yn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new yn}static exists(e){return new yn(void 0,e)}static updateTime(e){return new yn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function nu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Fc{}function iS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Hm(t.key,yn.none()):new Ma(t.key,t.data,yn.none());{const n=t.data,r=Ft.empty();let i=new je(Ge.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Oi(t.key,r,new Xt(i.toArray()),yn.none())}}function SM(t,e,n){t instanceof Ma?function(i,s,o){const a=i.value.clone(),u=f_(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Oi?function(i,s,o){if(!nu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=f_(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(sS(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function $o(t,e,n,r){return t instanceof Ma?function(s,o,a,u){if(!nu(s.precondition,o))return a;const c=s.value.clone(),d=p_(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Oi?function(s,o,a,u){if(!nu(s.precondition,o))return a;const c=p_(s.fieldTransforms,u,o),d=o.data;return d.setAll(sS(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,a){return nu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function AM(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=eS(r.transform,i||null);s!=null&&(n===null&&(n=Ft.empty()),n.set(r.field,s))}return n||null}function d_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&As(r,i,(s,o)=>TM(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ma extends Fc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Oi extends Fc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function sS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function f_(t,e,n){const r=new Map;he(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,EM(o,a,n[i]))}return r}function p_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,wM(s,o,e))}return r}class Hm extends Fc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class RM extends Fc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class CM{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&SM(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=$o(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=$o(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=JI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=iS(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&As(this.mutations,e.mutations,(n,r)=>d_(n,r))&&As(this.baseMutations,e.baseMutations,(n,r)=>d_(n,r))}}class Wm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){he(e.mutations.length===r.length);let i=function(){return mM}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Wm(e,n,r,i)}}/**
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
 */class PM{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class kM{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Oe,le;function xM(t){switch(t){default:return Y();case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0}}function oS(t){if(t===void 0)return Qn("GRPC error has no .code"),U.UNKNOWN;switch(t){case Oe.OK:return U.OK;case Oe.CANCELLED:return U.CANCELLED;case Oe.UNKNOWN:return U.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return U.INTERNAL;case Oe.UNAVAILABLE:return U.UNAVAILABLE;case Oe.UNAUTHENTICATED:return U.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case Oe.NOT_FOUND:return U.NOT_FOUND;case Oe.ALREADY_EXISTS:return U.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return U.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case Oe.ABORTED:return U.ABORTED;case Oe.OUT_OF_RANGE:return U.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return U.UNIMPLEMENTED;case Oe.DATA_LOSS:return U.DATA_LOSS;default:return Y()}}(le=Oe||(Oe={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function bM(){return new TextEncoder}/**
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
 */const NM=new di([4294967295,4294967295],0);function m_(t){const e=bM().encode(t),n=new kI;return n.update(e),new Uint8Array(n.digest())}function g_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new di([n,r],0),new di([i,s],0)]}class Gm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ro(`Invalid padding: ${n}`);if(r<0)throw new Ro(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ro(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ro(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=di.fromNumber(this.Te)}Ee(e,n,r){let i=e.add(n.multiply(di.fromNumber(r)));return i.compare(NM)===1&&(i=new di([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=m_(e),[r,i]=g_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Gm(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=m_(e),[r,i]=g_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ro extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Uc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Va.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Uc(Z.min(),i,new Ce(ae),Yn(),oe())}}class Va{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Va(r,n,oe(),oe(),oe())}}/**
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
 */class ru{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class aS{constructor(e,n){this.targetId=e,this.me=n}}class lS{constructor(e,n,r=Ye.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class y_{constructor(){this.fe=0,this.ge=v_(),this.pe=Ye.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=oe(),n=oe(),r=oe();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Y()}}),new Va(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=v_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,he(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class OM{constructor(e){this.Le=e,this.Be=new Map,this.ke=Yn(),this.qe=xl(),this.Qe=xl(),this.Ke=new Ce(ae)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.je(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.De(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.me.count,i=this.Ye(n);if(i){const s=i.target;if(Wf(s))if(r===0){const o=new Q(s.path);this.We(n,o,st.newNoDocument(o,Z.min()))}else he(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),u=a?this.et(a,e,o):1;if(u!==0){this.He(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Fr(r).toUint8Array()}catch(u){if(u instanceof FI)return Ss("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Gm(o,i,s)}catch(u){return Ss(u instanceof Ro?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Te===0?null:a}et(e,n,r){return n.me.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&Wf(a.target)){const u=new Q(a.target.path);this.st(u).has(o)||this.ot(o,u)||this.We(o,u,st.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=oe();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Ye(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Uc(e,n,this.Ke,this.ke,r);return this.ke=Yn(),this.qe=xl(),this.Qe=xl(),this.Ke=new Ce(ae),i}Ue(e,n){if(!this.je(e))return;const r=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.ot(e,n)?i.Fe(n,1):i.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Be.get(e);return n||(n=new y_,this.Be.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new je(ae),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new je(ae),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new y_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function xl(){return new Ce(Q.comparator)}function v_(){return new Ce(Q.comparator)}const DM={asc:"ASCENDING",desc:"DESCENDING"},LM={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},MM={and:"AND",or:"OR"};class VM{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Kf(t,e){return t.useProto3Json||Oc(e)?e:{value:e}}function Qu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function uS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function FM(t,e){return Qu(t,e.toTimestamp())}function vn(t){return he(!!t),Z.fromTimestamp(function(n){const r=Vr(n);return new Ue(r.seconds,r.nanos)}(t))}function Km(t,e){return Qf(t,e).canonicalString()}function Qf(t,e){const n=function(i){return new ve(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function cS(t){const e=ve.fromString(t);return he(mS(e)),e}function Yf(t,e){return Km(t.databaseId,e.path)}function cd(t,e){const n=cS(e);if(n.get(1)!==t.databaseId.projectId)throw new G(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(dS(n))}function hS(t,e){return Km(t.databaseId,e)}function UM(t){const e=cS(t);return e.length===4?ve.emptyPath():dS(e)}function Xf(t){return new ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function dS(t){return he(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function __(t,e,n){return{name:Yf(t,e),fields:n.value.mapValue.fields}}function jM(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(he(d===void 0||typeof d=="string"),Ye.fromBase64String(d||"")):(he(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Ye.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const d=c.code===void 0?U.UNKNOWN:oS(c.code);return new G(d,c.message||"")}(o);n=new lS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=cd(t,r.document.name),s=vn(r.document.updateTime),o=r.document.createTime?vn(r.document.createTime):Z.min(),a=new Ft({mapValue:{fields:r.document.fields}}),u=st.newFoundDocument(i,s,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];n=new ru(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=cd(t,r.document),s=r.readTime?vn(r.readTime):Z.min(),o=st.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ru([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=cd(t,r.document),s=r.removedTargetIds||[];n=new ru([],s,i,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new kM(i,s),a=r.targetId;n=new aS(a,o)}}return n}function zM(t,e){let n;if(e instanceof Ma)n={update:__(t,e.key,e.value)};else if(e instanceof Hm)n={delete:Yf(t,e.key)};else if(e instanceof Oi)n={update:__(t,e.key,e.data),updateMask:YM(e.fieldMask)};else{if(!(e instanceof RM))return Y();n={verify:Yf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Gu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof va)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof _a)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ku)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:FM(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y()}(t,e.precondition)),n}function BM(t,e){return t&&t.length>0?(he(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?vn(i.updateTime):vn(s);return o.isEqual(Z.min())&&(o=vn(s)),new IM(o,i.transformResults||[])}(n,e))):[]}function $M(t,e){return{documents:[hS(t,e.path)]}}function qM(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=hS(t,i);const s=function(c){if(c.length!==0)return pS(rn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:Bi(m.field),direction:GM(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Kf(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ct:n,parent:i}}function HM(t){let e=UM(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){he(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const m=fS(p);return m instanceof rn&&BI(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(E){return new ya($i(E.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(p){let m;return m=typeof p=="object"?p.value:p,Oc(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,w=p.values||[];return new Hu(w,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,w=p.values||[];return new Hu(w,m)}(n.endAt)),cM(e,i,o,s,a,"F",u,c)}function WM(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function fS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=$i(n.unaryFilter.field);return Le.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=$i(n.unaryFilter.field);return Le.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=$i(n.unaryFilter.field);return Le.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=$i(n.unaryFilter.field);return Le.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(n){return Le.create($i(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return rn.create(n.compositeFilter.filters.map(r=>fS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y()}}(n.compositeFilter.op))}(t):Y()}function GM(t){return DM[t]}function KM(t){return LM[t]}function QM(t){return MM[t]}function Bi(t){return{fieldPath:t.canonicalString()}}function $i(t){return Ge.fromServerFormat(t.fieldPath)}function pS(t){return t instanceof Le?function(n){if(n.op==="=="){if(o_(n.value))return{unaryFilter:{field:Bi(n.field),op:"IS_NAN"}};if(s_(n.value))return{unaryFilter:{field:Bi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(o_(n.value))return{unaryFilter:{field:Bi(n.field),op:"IS_NOT_NAN"}};if(s_(n.value))return{unaryFilter:{field:Bi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Bi(n.field),op:KM(n.op),value:n.value}}}(t):t instanceof rn?function(n){const r=n.getFilters().map(i=>pS(i));return r.length===1?r[0]:{compositeFilter:{op:QM(n.op),filters:r}}}(t):Y()}function YM(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function mS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class yr{constructor(e,n,r,i,s=Z.min(),o=Z.min(),a=Ye.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new yr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new yr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class XM{constructor(e){this.ht=e}}function JM(t){const e=HM({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Wu(e,e.limit,"L"):e}/**
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
 */class ZM{constructor(){this.ln=new eV}addToCollectionParentIndex(e,n){return this.ln.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(Mr.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(Mr.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class eV{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new je(ve.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new je(ve.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const w_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class gt{static withCacheSize(e){return new gt(e,gt.DEFAULT_COLLECTION_PERCENTILE,gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */gt.DEFAULT_COLLECTION_PERCENTILE=10,gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,gt.DEFAULT=new gt(41943040,gt.DEFAULT_COLLECTION_PERCENTILE,gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),gt.DISABLED=new gt(-1,0,0);/**
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
 */class Ps{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new Ps(0)}static Qn(){return new Ps(-1)}}/**
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
 */function E_([t,e],[n,r]){const i=ae(t,n);return i===0?ae(e,r):i}class tV{constructor(e){this.Gn=e,this.buffer=new je(E_),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();E_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class nV{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){H("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){zs(n)?H("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await js(n)}await this.Yn(3e5)})}}class rV{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return F.resolve(Nc.oe);const r=new tV(n);return this.Zn.forEachTarget(e,i=>r.Hn(i.sequenceNumber)).next(()=>this.Zn.er(e,i=>r.Hn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(w_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),w_):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let r,i,s,o,a,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,a=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),ji()<=se.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function iV(t,e){return new rV(t,e)}/**
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
 */class sV{constructor(){this.changes=new Ni(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,st.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class oV{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class aV{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&$o(r.mutation,i,Xt.empty(),Ue.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=oe()){const i=ai();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ao();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ai();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,oe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Yn();const o=Bo(),a=function(){return Bo()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Oi)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),$o(d.mutation,c,d.mutation.getFieldMask(),Ue.now())):o.set(c.key,Xt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var p;return a.set(c,new oV(d,(p=o.get(c))!==null&&p!==void 0?p:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Bo();let i=new Ce((o,a)=>o-a),s=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Xt.empty();d=a.applyToLocalView(c,d),r.set(u,d);const p=(i.get(a.batchId)||oe()).add(u);i=i.insert(a.batchId,p)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,d=u.value,p=JI();d.forEach(m=>{if(!s.has(m)){const w=iS(n.get(m),r.get(m));w!==null&&p.set(m,w),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return Q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):GI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):F.resolve(ai());let a=-1,u=s;return o.next(c=>F.forEach(c,(d,p)=>(a<p.largestBatchId&&(a=p.largestBatchId),s.get(d)?F.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,oe())).next(d=>({batchId:a,changes:XI(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let i=Ao();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ao();return this.indexManager.getCollectionParents(e,s).next(a=>F.forEach(a,u=>{const c=function(p,m){return new Bs(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,st.newInvalidDocument(d)))});let a=Ao();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&$o(d.mutation,c,Xt.empty(),Ue.now()),Mc(n,c)&&(a=a.insert(u,c))}),a})}}/**
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
 */class lV{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return F.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:vn(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(i){return{name:i.name,query:JM(i.bundledQuery),readTime:vn(i.readTime)}}(n)),F.resolve()}}/**
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
 */class uV{constructor(){this.overlays=new Ce(Q.comparator),this.Er=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ai();return F.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.Tt(e,n,s)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Er.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Er.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=ai(),s=n.length+1,o=new Q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ce((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=ai(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=ai(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return F.resolve(a)}Tt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Er.get(i.largestBatchId).delete(r.key);this.Er.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new PM(n,r));let s=this.Er.get(n);s===void 0&&(s=oe(),this.Er.set(n,s)),this.Er.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class cV{constructor(){this.sessionToken=Ye.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
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
 */class Qm{constructor(){this.dr=new je(ze.Ar),this.Rr=new je(ze.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const r=new ze(e,n);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gr(new ze(e,n))}pr(e,n){e.forEach(r=>this.removeReference(r,n))}yr(e){const n=new Q(new ve([])),r=new ze(n,e),i=new ze(n,e+1),s=[];return this.Rr.forEachInRange([r,i],o=>{this.gr(o),s.push(o.key)}),s}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new Q(new ve([])),r=new ze(n,e),i=new ze(n,e+1);let s=oe();return this.Rr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ze(e,0),r=this.dr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ze{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return Q.comparator(e.key,n.key)||ae(e.br,n.br)}static Vr(e,n){return ae(e.br,n.br)||Q.comparator(e.key,n.key)}}/**
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
 */class hV{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new je(ze.Ar)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new CM(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.vr=this.vr.add(new ze(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Fr(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ze(n,0),i=new ze(n,Number.POSITIVE_INFINITY),s=[];return this.vr.forEachInRange([r,i],o=>{const a=this.Cr(o.br);s.push(a)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new je(ae);return n.forEach(i=>{const s=new ze(i,0),o=new ze(i,Number.POSITIVE_INFINITY);this.vr.forEachInRange([s,o],a=>{r=r.add(a.br)})}),F.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Q.isDocumentKey(s)||(s=s.child(""));const o=new ze(new Q(s),0);let a=new je(ae);return this.vr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.br)),!0)},o),F.resolve(this.Mr(a))}Mr(e){const n=[];return e.forEach(r=>{const i=this.Cr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){he(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return F.forEach(n.mutations,i=>{const s=new ze(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,n){const r=new ze(n,0),i=this.vr.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class dV{constructor(e){this.Nr=e,this.docs=function(){return new Ce(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():st.newInvalidDocument(n))}getEntries(e,n){let r=Yn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():st.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Yn();const o=n.path,a=new Q(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||$4(B4(d),r)<=0||(i.has(d.key)||Mc(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Y()}Lr(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new fV(this)}getSize(e){return F.resolve(this.size)}}class fV extends sV{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.hr.addEntry(e,i)):this.hr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
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
 */class pV{constructor(e){this.persistence=e,this.Br=new Ni(n=>Bm(n),$m),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.kr=0,this.qr=new Qm,this.targetCount=0,this.Qr=Ps.qn()}forEachTarget(e,n){return this.Br.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),F.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new Ps(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Un(n),F.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Br.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Br.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),F.waitFor(s).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Br.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.qr.mr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.qr.pr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qr.Sr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.qr.containsKey(n))}}/**
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
 */class gS{constructor(e,n){this.Kr={},this.overlays={},this.$r=new Nc(0),this.Ur=!1,this.Ur=!0,this.Wr=new cV,this.referenceDelegate=e(this),this.Gr=new pV(this),this.indexManager=new ZM,this.remoteDocumentCache=function(i){return new dV(i)}(r=>this.referenceDelegate.zr(r)),this.serializer=new XM(n),this.jr=new lV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new uV,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Kr[e.toKey()];return r||(r=new hV(n,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new mV(this.$r.next());return this.referenceDelegate.Hr(),r(i).next(s=>this.referenceDelegate.Jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Yr(e,n){return F.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,n)))}}class mV extends H4{constructor(e){super(),this.currentSequenceNumber=e}}class Ym{constructor(e){this.persistence=e,this.Zr=new Qm,this.Xr=null}static ei(e){return new Ym(e)}get ti(){if(this.Xr)return this.Xr;throw Y()}addReference(e,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),F.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(i=>this.ti.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.ti.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.ti,r=>{const i=Q.fromPath(r);return this.ni(e,i).next(s=>{s||n.removeEntry(i,Z.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return F.or([()=>F.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class Yu{constructor(e,n){this.persistence=e,this.ri=new Ni(r=>K4(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=iV(this,n)}static ei(e,n){return new Yu(e,n)}Hr(){}Jr(e){return F.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}nr(e){let n=0;return this.er(e,r=>{n++}).next(()=>n)}er(e,n){return F.forEach(this.ri,(r,i)=>this.ir(e,r,i).next(s=>s?F.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.Lr(e,o=>this.ir(e,o,n).next(a=>{a||(r++,s.removeEntry(o,Z.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),F.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),F.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=eu(e.data.value)),n}ir(e,n,r){return F.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.ri.get(n);return F.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Xm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Wi=r,this.Gi=i}static zi(e,n){let r=oe(),i=oe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Xm(e,n.fromCache,r,i)}}/**
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
 */class gV{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class yV{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return Gb()?8:W4(lt())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Xi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.es(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new gV;return this.ts(e,n,o).next(a=>{if(s.result=a,this.Hi)return this.ns(e,n,o,a.size)})}).next(()=>s.result)}ns(e,n,r,i){return r.documentReadCount<this.Ji?(ji()<=se.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",zi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),F.resolve()):(ji()<=se.DEBUG&&H("QueryEngine","Query:",zi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Yi*i?(ji()<=se.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",zi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,gn(n))):F.resolve())}Xi(e,n){if(c_(n))return F.resolve(null);let r=gn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Wu(n,null,"F"),r=gn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=oe(...s);return this.Zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.rs(n,a);return this.ss(n,c,o,u.readTime)?this.Xi(e,Wu(n,null,"F")):this.os(e,c,n,u)}))})))}es(e,n,r,i){return c_(n)||i.isEqual(Z.min())?F.resolve(null):this.Zi.getDocuments(e,r).next(s=>{const o=this.rs(n,s);return this.ss(n,o,r,i)?F.resolve(null):(ji()<=se.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),zi(n)),this.os(e,o,n,z4(i,-1)).next(a=>a))})}rs(e,n){let r=new je(QI(e));return n.forEach((i,s)=>{Mc(e,s)&&(r=r.add(s))}),r}ss(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ts(e,n,r){return ji()<=se.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",zi(n)),this.Zi.getDocumentsMatchingQuery(e,n,Mr.min(),r)}os(e,n,r,i){return this.Zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class vV{constructor(e,n,r,i){this.persistence=e,this._s=n,this.serializer=i,this.us=new Ce(ae),this.cs=new Ni(s=>Bm(s),$m),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new aV(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function _V(t,e,n,r){return new vV(t,e,n,r)}async function yS(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Ps(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=oe();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ts:c,removedBatchIds:o,addedBatchIds:a}))})})}function wV(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.hs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,d){const p=c.batch,m=p.keys();let w=F.resolve();return m.forEach(E=>{w=w.next(()=>d.getEntry(u,E)).next(T=>{const R=c.docVersions.get(E);he(R!==null),T.version.compareTo(R)<0&&(p.applyToRemoteDocument(T,c),T.isValidDocument()&&(T.setReadTime(c.commitVersion),d.addEntry(T)))})}),w.next(()=>a.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=oe();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function vS(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function EV(t,e){const n=ee(t),r=e.snapshotVersion;let i=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});i=n.us;const a=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;a.push(n.Gr.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.Gr.addMatchingKeys(s,d.addedDocuments,p)));let w=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?w=w.withResumeToken(Ye.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):d.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(d.resumeToken,r)),i=i.insert(p,w),function(T,R,_){return T.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(m,w,d)&&a.push(n.Gr.updateTargetData(s,w))});let u=Yn(),c=oe();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(TV(s,o,e.documentUpdates).next(d=>{u=d.Is,c=d.Es})),!r.isEqual(Z.min())){const d=n.Gr.getLastRemoteSnapshotVersion(s).next(p=>n.Gr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return F.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.us=i,s))}function TV(t,e,n){let r=oe(),i=oe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Yn();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(Z.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):H("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Is:o,Es:i}})}function IV(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function SV(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Gr.getTargetData(r,e).next(s=>s?(i=s,F.resolve(i)):n.Gr.allocateTargetId(r).next(o=>(i=new yr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Gr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.us.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.us=n.us.insert(r.targetId,r),n.cs.set(e,r.targetId)),r})}async function Jf(t,e,n){const r=ee(t),i=r.us.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!zs(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.us=r.us.remove(e),r.cs.delete(i.target)}function T_(t,e,n){const r=ee(t);let i=Z.min(),s=oe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=ee(u),m=p.cs.get(d);return m!==void 0?F.resolve(p.us.get(m)):p.Gr.getTargetData(c,d)}(r,o,gn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r._s.getDocumentsMatchingQuery(o,e,n?i:Z.min(),n?s:oe())).next(a=>(AV(r,dM(e),a),{documents:a,ds:s})))}function AV(t,e,n){let r=t.ls.get(e)||Z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ls.set(e,r)}class I_{constructor(){this.activeTargetIds=vM()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class RV{constructor(){this._o=new I_,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,r){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new I_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class CV{uo(e){}shutdown(){}}/**
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
 */class S_{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let bl=null;function hd(){return bl===null?bl=function(){return 268435456+Math.round(2147483648*Math.random())}():bl++,"0x"+bl.toString(16)}/**
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
 */const PV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class kV{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const nt="WebChannelConnection";class xV extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${i}/databases/${s}`,this.xo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Oo(n,r,i,s,o){const a=hd(),u=this.No(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(c,s,o),this.Bo(n,u,c,i).then(d=>(H("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw Ss("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",u,"request:",i),d})}ko(n,r,i,s,o,a){return this.Oo(n,r,i,s,o)}Lo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Us}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}No(n,r){const i=PV[n];return`${this.Fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,r,i){const s=hd();return new Promise((o,a)=>{const u=new xI;u.setWithCredentials(!0),u.listenOnce(bI.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Zl.NO_ERROR:const d=u.getResponseJson();H(nt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case Zl.TIMEOUT:H(nt,`RPC '${e}' ${s} timed out`),a(new G(U.DEADLINE_EXCEEDED,"Request time out"));break;case Zl.HTTP_ERROR:const p=u.getStatus();if(H(nt,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const w=m==null?void 0:m.error;if(w&&w.status&&w.message){const E=function(R){const _=R.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(_)>=0?_:U.UNKNOWN}(w.status);a(new G(E,w.message))}else a(new G(U.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new G(U.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{H(nt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);H(nt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}qo(e,n,r){const i=hd(),s=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=DI(),a=OI(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Lo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");H(nt,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);let m=!1,w=!1;const E=new kV({Eo:R=>{w?H(nt,`Not sending because RPC '${e}' stream ${i} is closed:`,R):(m||(H(nt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),H(nt,`RPC '${e}' stream ${i} sending:`,R),p.send(R))},Ao:()=>p.close()}),T=(R,_,y)=>{R.listen(_,I=>{try{y(I)}catch(O){setTimeout(()=>{throw O},0)}})};return T(p,So.EventType.OPEN,()=>{w||(H(nt,`RPC '${e}' stream ${i} transport opened.`),E.So())}),T(p,So.EventType.CLOSE,()=>{w||(w=!0,H(nt,`RPC '${e}' stream ${i} transport closed`),E.Do())}),T(p,So.EventType.ERROR,R=>{w||(w=!0,Ss(nt,`RPC '${e}' stream ${i} transport errored:`,R),E.Do(new G(U.UNAVAILABLE,"The operation could not be completed")))}),T(p,So.EventType.MESSAGE,R=>{var _;if(!w){const y=R.data[0];he(!!y);const I=y,O=(I==null?void 0:I.error)||((_=I[0])===null||_===void 0?void 0:_.error);if(O){H(nt,`RPC '${e}' stream ${i} received error:`,O);const V=O.status;let j=function(S){const C=Oe[S];if(C!==void 0)return oS(C)}(V),A=O.message;j===void 0&&(j=U.INTERNAL,A="Unknown error status: "+V+" with message "+O.message),w=!0,E.Do(new G(j,A)),p.close()}else H(nt,`RPC '${e}' stream ${i} received:`,y),E.vo(y)}}),T(a,NI.STAT_EVENT,R=>{R.stat===Bf.PROXY?H(nt,`RPC '${e}' stream ${i} detected buffering proxy`):R.stat===Bf.NOPROXY&&H(nt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{E.bo()},0),E}}function dd(){return typeof document<"u"?document:null}/**
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
 */function jc(t){return new VM(t,!0)}/**
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
 */class _S{constructor(e,n,r=1e3,i=1.5,s=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=i,this.$o=s,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,i,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class wS{constructor(e,n,r,i,s,o,a,u){this.li=e,this.Yo=r,this.Zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new _S(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(Qn(n.toString()),Qn("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Xo===n&&this.I_(r,i)},r=>{e(()=>{const i=new G(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(i)})})}I_(e,n){const r=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(i=>{r(()=>this.E_(i))}),this.stream.onMessage(i=>{r(()=>++this.n_==1?this.A_(i):this.onNext(i))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class bV extends wS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}d_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=jM(this.serializer,e),r=function(s){if(!("targetChange"in s))return Z.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Z.min():o.readTime?vn(o.readTime):Z.min()}(e);return this.listener.R_(n,r)}V_(e){const n={};n.database=Xf(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=Wf(u)?{documents:$M(s,u)}:{query:qM(s,u).ct},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=uS(s,o.resumeToken);const c=Kf(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(Z.min())>0){a.readTime=Qu(s,o.snapshotVersion.toTimestamp());const c=Kf(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=WM(this.serializer,e);r&&(n.labels=r),this.c_(n)}m_(e){const n={};n.database=Xf(this.serializer),n.removeTarget=e,this.c_(n)}}class NV extends wS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,n){return this.connection.qo("Write",e,n)}A_(e){return he(!!e.streamToken),this.lastStreamToken=e.streamToken,he(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){he(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=BM(e.writeResults,e.commitTime),r=vn(e.commitTime);return this.listener.y_(r,n)}w_(){const e={};e.database=Xf(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>zM(this.serializer,r))};this.c_(n)}}/**
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
 */class OV extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.S_=!1}b_(){if(this.S_)throw new G(U.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,r,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Oo(e,Qf(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(U.UNKNOWN,s.toString())})}ko(e,n,r,i,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.ko(e,Qf(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G(U.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class DV{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Qn(n),this.C_=!1):H("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class LV{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=s,this.Q_.uo(o=>{r.enqueueAndForget(async()=>{Di(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=ee(u);c.k_.add(4),await Fa(c),c.K_.set("Unknown"),c.k_.delete(4),await zc(c)}(this))})}),this.K_=new DV(r,i)}}async function zc(t){if(Di(t))for(const e of t.q_)await e(!0)}async function Fa(t){for(const e of t.q_)await e(!1)}function ES(t,e){const n=ee(t);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),tg(n)?eg(n):$s(n).s_()&&Zm(n,e))}function Jm(t,e){const n=ee(t),r=$s(n);n.B_.delete(e),r.s_()&&TS(n,e),n.B_.size===0&&(r.s_()?r.a_():Di(n)&&n.K_.set("Unknown"))}function Zm(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}$s(t).V_(e)}function TS(t,e){t.U_.xe(e),$s(t).m_(e)}function eg(t){t.U_=new OM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.B_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),$s(t).start(),t.K_.F_()}function tg(t){return Di(t)&&!$s(t).i_()&&t.B_.size>0}function Di(t){return ee(t).k_.size===0}function IS(t){t.U_=void 0}async function MV(t){t.K_.set("Online")}async function VV(t){t.B_.forEach((e,n)=>{Zm(t,e)})}async function FV(t,e){IS(t),tg(t)?(t.K_.O_(e),eg(t)):t.K_.set("Unknown")}async function UV(t,e,n){if(t.K_.set("Online"),e instanceof lS&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.B_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.B_.delete(a),i.U_.removeTarget(a))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Xu(t,r)}else if(e instanceof ru?t.U_.$e(e):e instanceof aS?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(Z.min()))try{const r=await vS(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.U_.it(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.B_.get(c);d&&s.B_.set(c,d.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const d=s.B_.get(u);if(!d)return;s.B_.set(u,d.withResumeToken(Ye.EMPTY_BYTE_STRING,d.snapshotVersion)),TS(s,u);const p=new yr(d.target,u,c,d.sequenceNumber);Zm(s,p)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await Xu(t,r)}}async function Xu(t,e,n){if(!zs(e))throw e;t.k_.add(1),await Fa(t),t.K_.set("Offline"),n||(n=()=>vS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await zc(t)})}function SS(t,e){return e().catch(n=>Xu(t,n,e))}async function Bc(t){const e=ee(t),n=jr(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;jV(e);)try{const i=await IV(e.localStore,r);if(i===null){e.L_.length===0&&n.a_();break}r=i.batchId,zV(e,i)}catch(i){await Xu(e,i)}AS(e)&&RS(e)}function jV(t){return Di(t)&&t.L_.length<10}function zV(t,e){t.L_.push(e);const n=jr(t);n.s_()&&n.f_&&n.g_(e.mutations)}function AS(t){return Di(t)&&!jr(t).i_()&&t.L_.length>0}function RS(t){jr(t).start()}async function BV(t){jr(t).w_()}async function $V(t){const e=jr(t);for(const n of t.L_)e.g_(n.mutations)}async function qV(t,e,n){const r=t.L_.shift(),i=Wm.from(r,e,n);await SS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Bc(t)}async function HV(t,e){e&&jr(t).f_&&await async function(r,i){if(function(o){return xM(o)&&o!==U.ABORTED}(i.code)){const s=r.L_.shift();jr(r).__(),await SS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Bc(r)}}(t,e),AS(t)&&RS(t)}async function A_(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=Di(n);n.k_.add(3),await Fa(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await zc(n)}async function WV(t,e){const n=ee(t);e?(n.k_.delete(2),await zc(n)):e||(n.k_.add(2),await Fa(n),n.K_.set("Unknown"))}function $s(t){return t.W_||(t.W_=function(n,r,i){const s=ee(n);return s.b_(),new bV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Ro:MV.bind(null,t),mo:VV.bind(null,t),po:FV.bind(null,t),R_:UV.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),tg(t)?eg(t):t.K_.set("Unknown")):(await t.W_.stop(),IS(t))})),t.W_}function jr(t){return t.G_||(t.G_=function(n,r,i){const s=ee(n);return s.b_(),new NV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:BV.bind(null,t),po:HV.bind(null,t),p_:$V.bind(null,t),y_:qV.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await Bc(t)):(await t.G_.stop(),t.L_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.L_.length} pending writes`),t.L_=[]))})),t.G_}/**
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
 */class ng{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Pr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new ng(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rg(t,e){if(Qn("AsyncQueue",`${e}: ${t}`),zs(t))return new G(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ps{static emptySet(e){return new ps(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||Q.comparator(n.key,r.key):(n,r)=>Q.comparator(n.key,r.key),this.keyedMap=Ao(),this.sortedSet=new Ce(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ps)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ps;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class R_{constructor(){this.z_=new Ce(Q.comparator)}track(e){const n=e.doc.key,r=this.z_.get(n);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(n,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(n):e.type===1&&r.type===2?this.z_=this.z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):Y():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ks{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ks(e,n,ps.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Lc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class GV{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class KV{constructor(){this.queries=C_(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const i=ee(n),s=i.queries;i.queries=C_(),s.forEach((o,a)=>{for(const u of a.J_)u.onError(r)})})(this,new G(U.ABORTED,"Firestore shutting down"))}}function C_(){return new Ni(t=>KI(t),Lc)}async function QV(t,e){const n=ee(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Y_()&&e.Z_()&&(r=2):(s=new GV,r=e.Z_()?0:1);try{switch(r){case 0:s.H_=await n.onListen(i,!0);break;case 1:s.H_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=rg(o,`Initialization of query '${zi(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.J_.push(e),e.ea(n.onlineState),s.H_&&e.ta(s.H_)&&ig(n)}async function YV(t,e){const n=ee(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.J_.indexOf(e);o>=0&&(s.J_.splice(o,1),s.J_.length===0?i=e.Z_()?0:1:!s.Y_()&&e.Z_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function XV(t,e){const n=ee(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.J_)a.ta(i)&&(r=!0);o.H_=i}}r&&ig(n)}function JV(t,e,n){const r=ee(t),i=r.queries.get(e);if(i)for(const s of i.J_)s.onError(n);r.queries.delete(e)}function ig(t){t.X_.forEach(e=>{e.next()})}var Zf,P_;(P_=Zf||(Zf={})).na="default",P_.Cache="cache";class ZV{constructor(e,n,r){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ks(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const r=n!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=ks.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Zf.Cache}}/**
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
 */class CS{constructor(e){this.key=e}}class PS{constructor(e){this.key=e}}class eF{constructor(e,n){this.query=e,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=oe(),this.mutatedKeys=oe(),this.Va=QI(e),this.ma=new ps(this.Va)}get fa(){return this.da}ga(e,n){const r=n?n.pa:new R_,i=n?n.ma:this.ma;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),w=Mc(this.query,p)?p:null,E=!!m&&this.mutatedKeys.has(m.key),T=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let R=!1;m&&w?m.data.isEqual(w.data)?E!==T&&(r.track({type:3,doc:w}),R=!0):this.ya(m,w)||(r.track({type:2,doc:w}),R=!0,(u&&this.Va(w,u)>0||c&&this.Va(w,c)<0)&&(a=!0)):!m&&w?(r.track({type:0,doc:w}),R=!0):m&&!w&&(r.track({type:1,doc:m}),R=!0,(u||c)&&(a=!0)),R&&(w?(o=o.add(w),s=T?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{ma:o,pa:r,ss:a,mutatedKeys:s}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((d,p)=>function(w,E){const T=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return T(w)-T(E)}(d.type,p.type)||this.Va(d.doc,p.doc)),this.wa(r),i=i!=null&&i;const a=n&&!i?this.Sa():[],u=this.Ra.size===0&&this.current&&!i?1:0,c=u!==this.Aa;return this.Aa=u,o.length!==0||c?{snapshot:new ks(this.query,e.ma,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:a}:{ba:a}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new R_,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.da=this.da.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=oe(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const n=[];return e.forEach(r=>{this.Ra.has(r)||n.push(new PS(r))}),this.Ra.forEach(r=>{e.has(r)||n.push(new CS(r))}),n}va(e){this.da=e.ds,this.Ra=oe();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return ks.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class tF{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class nF{constructor(e){this.key=e,this.Fa=!1}}class rF{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new Ni(a=>KI(a),Lc),this.Oa=new Map,this.Na=new Set,this.La=new Ce(Q.comparator),this.Ba=new Map,this.ka=new Qm,this.qa={},this.Qa=new Map,this.Ka=Ps.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function iF(t,e,n=!0){const r=DS(t);let i;const s=r.xa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Ca()):i=await kS(r,e,n,!0),i}async function sF(t,e){const n=DS(t);await kS(n,e,!0,!1)}async function kS(t,e,n,r){const i=await SV(t.localStore,gn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await oF(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&ES(t.remoteStore,i),a}async function oF(t,e,n,r,i){t.Ua=(p,m,w)=>async function(T,R,_,y){let I=R.view.ga(_);I.ss&&(I=await T_(T.localStore,R.query,!1).then(({documents:A})=>R.view.ga(A,I)));const O=y&&y.targetChanges.get(R.targetId),V=y&&y.targetMismatches.get(R.targetId)!=null,j=R.view.applyChanges(I,T.isPrimaryClient,O,V);return x_(T,R.targetId,j.ba),j.snapshot}(t,p,m,w);const s=await T_(t.localStore,e,!0),o=new eF(e,s.ds),a=o.ga(s.documents),u=Va.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);x_(t,n,c.ba);const d=new tF(e,n,o);return t.xa.set(e,d),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),c.snapshot}async function aF(t,e,n){const r=ee(t),i=r.xa.get(e),s=r.Oa.get(i.targetId);if(s.length>1)return r.Oa.set(i.targetId,s.filter(o=>!Lc(o,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Jf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Jm(r.remoteStore,i.targetId),ep(r,i.targetId)}).catch(js)):(ep(r,i.targetId),await Jf(r.localStore,i.targetId,!0))}async function lF(t,e){const n=ee(t),r=n.xa.get(e),i=n.Oa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Jm(n.remoteStore,r.targetId))}async function uF(t,e,n){const r=gF(t);try{const i=await function(o,a){const u=ee(o),c=Ue.now(),d=a.reduce((w,E)=>w.add(E.key),oe());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",w=>{let E=Yn(),T=oe();return u.hs.getEntries(w,d).next(R=>{E=R,E.forEach((_,y)=>{y.isValidDocument()||(T=T.add(_))})}).next(()=>u.localDocuments.getOverlayedDocuments(w,E)).next(R=>{p=R;const _=[];for(const y of a){const I=AM(y,p.get(y.key).overlayedDocument);I!=null&&_.push(new Oi(y.key,I,UI(I.value.mapValue),yn.exists(!0)))}return u.mutationQueue.addMutationBatch(w,c,_,a)}).next(R=>{m=R;const _=R.applyToLocalDocumentSet(p,T);return u.documentOverlayCache.saveOverlays(w,R.batchId,_)})}).then(()=>({batchId:m.batchId,changes:XI(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.qa[o.currentUser.toKey()];c||(c=new Ce(ae)),c=c.insert(a,u),o.qa[o.currentUser.toKey()]=c}(r,i.batchId,n),await Ua(r,i.changes),await Bc(r.remoteStore)}catch(i){const s=rg(i,"Failed to persist write");n.reject(s)}}async function xS(t,e){const n=ee(t);try{const r=await EV(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Ba.get(s);o&&(he(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Fa=!0:i.modifiedDocuments.size>0?he(o.Fa):i.removedDocuments.size>0&&(he(o.Fa),o.Fa=!1))}),await Ua(n,r,e)}catch(r){await js(r)}}function k_(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.xa.forEach((s,o)=>{const a=o.view.ea(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=ee(o);u.onlineState=a;let c=!1;u.queries.forEach((d,p)=>{for(const m of p.J_)m.ea(a)&&(c=!0)}),c&&ig(u)}(r.eventManager,e),i.length&&r.Ma.R_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function cF(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Ba.get(e),s=i&&i.key;if(s){let o=new Ce(Q.comparator);o=o.insert(s,st.newNoDocument(s,Z.min()));const a=oe().add(s),u=new Uc(Z.min(),new Map,new Ce(ae),o,a);await xS(r,u),r.La=r.La.remove(s),r.Ba.delete(e),sg(r)}else await Jf(r.localStore,e,!1).then(()=>ep(r,e,n)).catch(js)}async function hF(t,e){const n=ee(t),r=e.batch.batchId;try{const i=await wV(n.localStore,e);NS(n,r,null),bS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ua(n,i)}catch(i){await js(i)}}async function dF(t,e,n){const r=ee(t);try{const i=await function(o,a){const u=ee(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,a).next(p=>(he(p!==null),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);NS(r,e,n),bS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ua(r,i)}catch(i){await js(i)}}function bS(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function NS(t,e,n){const r=ee(t);let i=r.qa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.qa[r.currentUser.toKey()]=i}}function ep(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Oa.get(e))t.xa.delete(r),n&&t.Ma.Wa(r,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(r=>{t.ka.containsKey(r)||OS(t,r)})}function OS(t,e){t.Na.delete(e.path.canonicalString());const n=t.La.get(e);n!==null&&(Jm(t.remoteStore,n),t.La=t.La.remove(e),t.Ba.delete(n),sg(t))}function x_(t,e,n){for(const r of n)r instanceof CS?(t.ka.addReference(r.key,e),fF(t,r)):r instanceof PS?(H("SyncEngine","Document no longer in limbo: "+r.key),t.ka.removeReference(r.key,e),t.ka.containsKey(r.key)||OS(t,r.key)):Y()}function fF(t,e){const n=e.key,r=n.path.canonicalString();t.La.get(n)||t.Na.has(r)||(H("SyncEngine","New document in limbo: "+n),t.Na.add(r),sg(t))}function sg(t){for(;t.Na.size>0&&t.La.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new Q(ve.fromString(e)),r=t.Ka.next();t.Ba.set(r,new nF(n)),t.La=t.La.insert(n,r),ES(t.remoteStore,new yr(gn(WI(n.path)),r,"TargetPurposeLimboResolution",Nc.oe))}}async function Ua(t,e,n){const r=ee(t),i=[],s=[],o=[];r.xa.isEmpty()||(r.xa.forEach((a,u)=>{o.push(r.Ua(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=Xm.zi(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ma.R_(i),await async function(u,c){const d=ee(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>F.forEach(c,m=>F.forEach(m.Wi,w=>d.persistence.referenceDelegate.addReference(p,m.targetId,w)).next(()=>F.forEach(m.Gi,w=>d.persistence.referenceDelegate.removeReference(p,m.targetId,w)))))}catch(p){if(!zs(p))throw p;H("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const w=d.us.get(m),E=w.snapshotVersion,T=w.withLastLimboFreeSnapshotVersion(E);d.us=d.us.insert(m,T)}}}(r.localStore,s))}async function pF(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await yS(n.localStore,e);n.currentUser=e,function(s,o){s.Qa.forEach(a=>{a.forEach(u=>{u.reject(new G(U.CANCELLED,o))})}),s.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ua(n,r.Ts)}}function mF(t,e){const n=ee(t),r=n.Ba.get(e);if(r&&r.Fa)return oe().add(r.key);{let i=oe();const s=n.Oa.get(e);if(!s)return i;for(const o of s){const a=n.xa.get(o);i=i.unionWith(a.view.fa)}return i}}function DS(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=xS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mF.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=cF.bind(null,e),e.Ma.R_=XV.bind(null,e.eventManager),e.Ma.Wa=JV.bind(null,e.eventManager),e}function gF(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=hF.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=dF.bind(null,e),e}class Ju{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=jc(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return _V(this.persistence,new yV,e.initialUser,this.serializer)}ja(e){return new gS(Ym.ei,this.serializer)}za(e){return new RV}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ju.provider={build:()=>new Ju};class yF extends Ju{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){he(this.persistence.referenceDelegate instanceof Yu);const r=this.persistence.referenceDelegate.garbageCollector;return new nV(r,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?gt.withCacheSize(this.cacheSizeBytes):gt.DEFAULT;return new gS(r=>Yu.ei(r,n),this.serializer)}}class tp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>k_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=pF.bind(null,this.syncEngine),await WV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new KV}()}createDatastore(e){const n=jc(e.databaseInfo.databaseId),r=function(s){return new xV(s)}(e.databaseInfo);return function(s,o,a,u){return new OV(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new LV(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>k_(this.syncEngine,n,0),function(){return S_.p()?new S_:new CV}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,d){const p=new rF(i,s,o,a,u,c);return d&&(p.$a=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ee(i);H("RemoteStore","RemoteStore shutting down."),s.k_.add(5),await Fa(s),s.Q_.shutdown(),s.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}tp.provider={build:()=>new tp};/**
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
 *//**
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
 */class vF{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Qn("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class _F{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=rt.UNAUTHENTICATED,this.clientId=MI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{H("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=rg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function fd(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await yS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function b_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await wF(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>A_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>A_(e.remoteStore,i)),t._onlineComponents=e}async function wF(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await fd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===U.FAILED_PRECONDITION||i.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ss("Error using user provided cache. Falling back to memory cache: "+n),await fd(t,new Ju)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await fd(t,new yF(void 0));return t._offlineComponents}async function LS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await b_(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await b_(t,new tp))),t._onlineComponents}function EF(t){return LS(t).then(e=>e.syncEngine)}async function TF(t){const e=await LS(t),n=e.eventManager;return n.onListen=iF.bind(null,e.syncEngine),n.onUnlisten=aF.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=sF.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=lF.bind(null,e.syncEngine),n}function IF(t,e,n={}){const r=new Pr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new vF({next:m=>{d.eu(),o.enqueueAndForget(()=>YV(s,p)),m.fromCache&&u.source==="server"?c.reject(new G(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new ZV(a,d,{includeMetadataChanges:!0,ua:!0});return QV(s,p)}(await TF(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function MS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const N_=new Map;/**
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
 */function VS(t,e,n){if(!n)throw new G(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function SF(t,e,n,r){if(e===!0&&r===!0)throw new G(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function O_(t){if(!Q.isDocumentKey(t))throw new G(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function D_(t){if(Q.isDocumentKey(t))throw new G(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function $c(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function wa(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=$c(t);throw new G(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class L_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new G(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new G(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}SF("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=MS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new G(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new G(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new G(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class qc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new L_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new L_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new N4;switch(r.type){case"firstParty":return new M4(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=N_.get(n);r&&(H("ComponentProvider","Removing Datastore"),N_.delete(n),r.terminate())}(this),Promise.resolve()}}function AF(t,e,n,r={}){var i;const s=(t=wa(t,qc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ss("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=rt.MOCK_USER;else{a=zb(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new G(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new rt(c)}t._authCredentials=new O4(new LI(a,u))}}/**
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
 */class Hr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Hr(this.firestore,e,this._query)}}class Bt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Bt(this.firestore,e,this._key)}}class kr extends Hr{constructor(e,n,r){super(e,n,WI(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Bt(this.firestore,null,new Q(e))}withConverter(e){return new kr(this.firestore,e,this._path)}}function M_(t,e,...n){if(t=ft(t),VS("collection","path",e),t instanceof qc){const r=ve.fromString(e,...n);return D_(r),new kr(t,null,r)}{if(!(t instanceof Bt||t instanceof kr))throw new G(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ve.fromString(e,...n));return D_(r),new kr(t.firestore,null,r)}}function FS(t,e,...n){if(t=ft(t),arguments.length===1&&(e=MI.newId()),VS("doc","path",e),t instanceof qc){const r=ve.fromString(e,...n);return O_(r),new Bt(t,null,new Q(r))}{if(!(t instanceof Bt||t instanceof kr))throw new G(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ve.fromString(e,...n));return O_(r),new Bt(t.firestore,t instanceof kr?t.converter:null,new Q(r))}}/**
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
 */class V_{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new _S(this,"async_queue_retry"),this.fu=()=>{const r=dd();r&&H("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=dd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=dd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new Pr;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!zs(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Qn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const i=ng.createAndSchedule(this,e,n,r,s=>this.Su(s));return this.du.push(i),i}pu(){this.Au&&Y()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}class Hc extends qc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new V_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new V_(e),this._firestoreClient=void 0,await e}}}function RF(t,e){const n=typeof t=="object"?t:Tm(),r=typeof t=="string"?t:"(default)",i=xi(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Ub("firestore");s&&AF(i,...s)}return i}function US(t){if(t._terminated)throw new G(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||CF(t),t._firestoreClient}function CF(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,d){return new X4(a,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,MS(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new _F(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class xs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xs(Ye.fromBase64String(e))}catch(n){throw new G(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new xs(Ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class og{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class jS{constructor(e){this._methodName=e}}/**
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
 */class ag{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class lg{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const PF=/^__.*__$/;class kF{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Oi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ma(e,this.data,n,this.fieldTransforms)}}function zS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class ug{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Fu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new ug(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.xu({path:r,Nu:!1});return i.Lu(e),i}Bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.xu({path:r,Nu:!1});return i.Fu(),i}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Zu(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(zS(this.Mu)&&PF.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class xF{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||jc(e)}$u(e,n,r,i=!1){return new ug({Mu:e,methodName:n,Ku:r,path:Ge.emptyPath(),Nu:!1,Qu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function BS(t){const e=t._freezeSettings(),n=jc(t._databaseId);return new xF(t._databaseId,!!e.ignoreUndefinedProperties,n)}function bF(t,e,n,r,i,s={}){const o=t.$u(s.merge||s.mergeFields?2:0,e,n,i);HS("Data must be an object, but it was:",o,r);const a=$S(r,o);let u,c;if(s.merge)u=new Xt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=OF(e,p,n);if(!o.contains(m))throw new G(U.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);LF(d,m)||d.push(m)}u=new Xt(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new kF(new Ft(a),u,c)}function NF(t,e,n,r=!1){return cg(n,t.$u(r?4:3,e))}function cg(t,e){if(qS(t=ft(t)))return HS("Unsupported field value:",e,t),$S(t,e);if(t instanceof jS)return function(r,i){if(!zS(i.Mu))throw i.qu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.qu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=cg(a,i.ku(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ft(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return _M(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ue.fromDate(r);return{timestampValue:Qu(i.serializer,s)}}if(r instanceof Ue){const s=new Ue(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Qu(i.serializer,s)}}if(r instanceof ag)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof xs)return{bytesValue:uS(i.serializer,r._byteString)};if(r instanceof Bt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Km(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof lg)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.qu("VectorValues must only contain numeric values.");return qm(a.serializer,u)})}}}}}}(r,i);throw i.qu(`Unsupported field value: ${$c(r)}`)}(t,e)}function $S(t,e){const n={};return VI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bi(t,(r,i)=>{const s=cg(i,e.Ou(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function qS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ue||t instanceof ag||t instanceof xs||t instanceof Bt||t instanceof jS||t instanceof lg)}function HS(t,e,n){if(!qS(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=$c(n);throw r==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+r)}}function OF(t,e,n){if((e=ft(e))instanceof og)return e._internalPath;if(typeof e=="string")return WS(t,e);throw Zu("Field path arguments must be of type string or ",t,!1,void 0,n)}const DF=new RegExp("[~\\*/\\[\\]]");function WS(t,e,n){if(e.search(DF)>=0)throw Zu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new og(...e.split("."))._internalPath}catch{throw Zu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Zu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new G(U.INVALID_ARGUMENT,a+t+u)}function LF(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class GS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new MF(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(hg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class MF extends GS{data(){return super.data()}}function hg(t,e){return typeof e=="string"?WS(t,e):e instanceof og?e._internalPath:e._delegate._internalPath}/**
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
 */function VF(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new G(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class dg{}class fg extends dg{}function FF(t,e,...n){let r=[];e instanceof dg&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof mg).length,a=s.filter(u=>u instanceof pg).length;if(o>1||o>0&&a>0)throw new G(U.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class pg extends fg{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new pg(e,n,r)}_apply(e){const n=this._parse(e);return KS(e._query,n),new Hr(e.firestore,e.converter,Gf(e._query,n))}_parse(e){const n=BS(e.firestore);return function(s,o,a,u,c,d,p){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new G(U.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){U_(p,d);const w=[];for(const E of p)w.push(F_(u,s,E));m={arrayValue:{values:w}}}else m=F_(u,s,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||U_(p,d),m=NF(a,o,p,d==="in"||d==="not-in");return Le.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class mg extends dg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new mg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:rn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)KS(o,u),o=Gf(o,u)}(e._query,n),new Hr(e.firestore,e.converter,Gf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class gg extends fg{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new gg(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new G(U.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new G(U.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ya(s,o)}(e._query,this._field,this._direction);return new Hr(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Bs(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function UF(t,e="asc"){const n=e,r=hg("orderBy",t);return gg._create(r,n)}class yg extends fg{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new yg(e,n,r)}_apply(e){return new Hr(e.firestore,e.converter,Wu(e._query,this._limit,this._limitType))}}function jF(t){return yg._create("limit",t,"F")}function F_(t,e,n){if(typeof(n=ft(n))=="string"){if(n==="")throw new G(U.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!GI(e)&&n.indexOf("/")!==-1)throw new G(U.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ve.fromString(n));if(!Q.isDocumentKey(r))throw new G(U.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return i_(t,new Q(r))}if(n instanceof Bt)return i_(t,n._key);throw new G(U.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${$c(n)}.`)}function U_(t,e){if(!Array.isArray(t)||t.length===0)throw new G(U.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function KS(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new G(U.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new G(U.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class zF{convertValue(e,n="none"){switch(Ur(e)){case 0:return null;case 1:return e.booleanValue;case 2:return be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Fr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Y()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return bi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>be(o.doubleValue));return new lg(s)}convertGeoPoint(e){return new ag(be(e.latitude),be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Dc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(pa(e));default:return null}}convertTimestamp(e){const n=Vr(e);return new Ue(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ve.fromString(e);he(mS(r));const i=new ma(r.get(1),r.get(3)),s=new Q(r.popFirst(5));return i.isEqual(n)||Qn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function BF(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class Nl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class $F extends GS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new iu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(hg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class iu extends $F{data(e={}){return super.data(e)}}class qF{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Nl(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new iu(this._firestore,this._userDataWriter,r.key,r,new Nl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new G(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new iu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Nl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new iu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Nl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:HF(a.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function HF(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}class WF extends zF{constructor(e){super(),this.firestore=e}convertBytes(e){return new xs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Bt(this.firestore,null,n)}}function GF(t){t=wa(t,Hr);const e=wa(t.firestore,Hc),n=US(e),r=new WF(e);return VF(t._query),IF(n,t._query).then(i=>new qF(e,r,t,i))}function KF(t){return QS(wa(t.firestore,Hc),[new Hm(t._key,yn.none())])}function QF(t,e){const n=wa(t.firestore,Hc),r=FS(t),i=BF(t.converter,e);return QS(n,[bF(BS(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,yn.exists(!1))]).then(()=>r)}function QS(t,e){return function(r,i){const s=new Pr;return r.asyncQueue.enqueueAndForget(async()=>uF(await EF(r),i,s)),s.promise}(US(t),e)}(function(e,n=!0){(function(i){Us=i})(Vs),_n(new nn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Hc(new D4(r.getProvider("auth-internal")),new F4(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new G(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ma(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),zt(Jv,"4.7.5",e),zt(Jv,"4.7.5","esm2017")})();const YF={apiKey:"AIzaSyB1x6aOUfLL17gtvyH9D6iS89Hmxm6_qNg",authDomain:"homepage-board-88e25.firebaseapp.com",projectId:"homepage-board-88e25",storageBucket:"homepage-board-88e25.firebasestorage.app",messagingSenderId:"775580599019",appId:"1:775580599019:web:b8734c86dac0c1e0cf34ae",measurementId:"G-21TRLLP7JW"},vg=CT(YF);P4(vg);const go=hL(vg),XF=new Nn,pd=RF(vg),JF=()=>{const[t,e]=M.useState(localStorage.getItem("isLogin")),[n,r]=M.useState("名無しさん"),[i,s]=M.useState(""),[o,a]=M.useState([]),u=()=>{wD(go,XF).then(E=>{localStorage.setItem("isLogin",!0),e(!0)})},c=()=>{eD(go).then(()=>{localStorage.clear(),e(!1)})},d=async()=>{if(!n||!i){console.log("投稿できません");return}await QF(M_(pd,"posts"),{user:n,postText:i,author:{username:go.currentUser.displayName,id:go.currentUser.uid},time:m()}),p(),s("")},p=async()=>{const E=await GF(FF(M_(pd,"posts"),UF("time","desc"),jF(20)));a(E.docs.map(T=>({...T.data(),id:T.id})))},m=()=>{const E=new Date(Date.now()+(new Date().getTimezoneOffset()+540)*60*1e3),T=E.getFullYear(),R=("00"+(E.getMonth()+1)).slice(-2),_=("00"+E.getDate()).slice(-2),y=("00"+E.getHours()).slice(-2),I=("00"+E.getMinutes()).slice(-2),O=("00"+E.getSeconds()).slice(-2);return console.log(`${T}/${R}/${_} ${y}:${I}:${O}`),`${T}/${R}/${_} ${y}:${I}:${O}`};M.useEffect(()=>{p()},[]);const w=async E=>{await KF(FS(pd,"posts",E)),p()};return x.jsxs("div",{className:"board__content",children:[x.jsx("h1",{children:"掲示板"}),t?x.jsxs(x.Fragment,{children:[x.jsxs("div",{className:"loginMenu",children:[x.jsx("p",{children:"ログアウトする"}),x.jsx("button",{onClick:c,children:"ログアウト"})]}),x.jsx("div",{className:"createPostPage",children:x.jsxs("div",{className:"postContainer",children:[x.jsx("h1",{children:"コメントを投稿する"}),x.jsxs("div",{className:"inputPost",children:[x.jsx("div",{children:"ハンドルネーム"}),x.jsx("input",{type:"text",placeholder:"タイトルを記入",value:n,onChange:E=>r(E.target.value)})]}),x.jsxs("div",{className:"inputPost",children:[x.jsx("div",{children:"コメント"}),x.jsx("textarea",{placeholder:"コメントを記入",value:i,onChange:E=>s(E.target.value)})]}),x.jsx("button",{className:"postButton",onClick:d,children:"投稿する"})]})})]}):x.jsx(x.Fragment,{children:x.jsxs("div",{className:"loginMenu",children:[x.jsx("p",{children:"ログインして書き込む"}),x.jsx("button",{onClick:u,children:"Googleでログイン"})]})}),x.jsx("div",{className:"postList",children:o.map(E=>{var T;return x.jsxs("div",{className:"postContents",children:[x.jsxs("h3",{children:["@",E.user]}),x.jsx("div",{className:"postTextContainer",children:E.postText}),x.jsx("div",{className:"postTextContainer",children:E.time}),E.author.id===((T=go.currentUser)==null?void 0:T.uid)&&x.jsx("button",{onClick:()=>w(E.id),children:"削除"})]},E.id)})})]})};function YS(t,e){return function(){return t.apply(e,arguments)}}const{toString:ZF}=Object.prototype,{getPrototypeOf:_g}=Object,Wc=(t=>e=>{const n=ZF.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),on=t=>(t=t.toLowerCase(),e=>Wc(e)===t),Gc=t=>e=>typeof e===t,{isArray:qs}=Array,Ea=Gc("undefined");function e3(t){return t!==null&&!Ea(t)&&t.constructor!==null&&!Ea(t.constructor)&&xt(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const XS=on("ArrayBuffer");function t3(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&XS(t.buffer),e}const n3=Gc("string"),xt=Gc("function"),JS=Gc("number"),Kc=t=>t!==null&&typeof t=="object",r3=t=>t===!0||t===!1,su=t=>{if(Wc(t)!=="object")return!1;const e=_g(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},i3=on("Date"),s3=on("File"),o3=on("Blob"),a3=on("FileList"),l3=t=>Kc(t)&&xt(t.pipe),u3=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||xt(t.append)&&((e=Wc(t))==="formdata"||e==="object"&&xt(t.toString)&&t.toString()==="[object FormData]"))},c3=on("URLSearchParams"),[h3,d3,f3,p3]=["ReadableStream","Request","Response","Headers"].map(on),m3=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ja(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),qs(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(r=0;r<o;r++)a=s[r],e.call(null,t[a],a,t)}}function ZS(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const li=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,eA=t=>!Ea(t)&&t!==li;function np(){const{caseless:t}=eA(this)&&this||{},e={},n=(r,i)=>{const s=t&&ZS(e,i)||i;su(e[s])&&su(r)?e[s]=np(e[s],r):su(r)?e[s]=np({},r):qs(r)?e[s]=r.slice():e[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&ja(arguments[r],n);return e}const g3=(t,e,n,{allOwnKeys:r}={})=>(ja(e,(i,s)=>{n&&xt(i)?t[s]=YS(i,n):t[s]=i},{allOwnKeys:r}),t),y3=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),v3=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},_3=(t,e,n,r)=>{let i,s,o;const a={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)o=i[s],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&_g(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},w3=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},E3=t=>{if(!t)return null;if(qs(t))return t;let e=t.length;if(!JS(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},T3=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&_g(Uint8Array)),I3=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(t,s[0],s[1])}},S3=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},A3=on("HTMLFormElement"),R3=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),j_=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),C3=on("RegExp"),tA=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};ja(n,(i,s)=>{let o;(o=e(i,s,t))!==!1&&(r[s]=o||i)}),Object.defineProperties(t,r)},P3=t=>{tA(t,(e,n)=>{if(xt(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(xt(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},k3=(t,e)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return qs(t)?r(t):r(String(t).split(e)),n},x3=()=>{},b3=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,md="abcdefghijklmnopqrstuvwxyz",z_="0123456789",nA={DIGIT:z_,ALPHA:md,ALPHA_DIGIT:md+md.toUpperCase()+z_},N3=(t=16,e=nA.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function O3(t){return!!(t&&xt(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const D3=t=>{const e=new Array(10),n=(r,i)=>{if(Kc(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const s=qs(r)?[]:{};return ja(r,(o,a)=>{const u=n(o,i+1);!Ea(u)&&(s[a]=u)}),e[i]=void 0,s}}return r};return n(t,0)},L3=on("AsyncFunction"),M3=t=>t&&(Kc(t)||xt(t))&&xt(t.then)&&xt(t.catch),rA=((t,e)=>t?setImmediate:e?((n,r)=>(li.addEventListener("message",({source:i,data:s})=>{i===li&&s===n&&r.length&&r.shift()()},!1),i=>{r.push(i),li.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",xt(li.postMessage)),V3=typeof queueMicrotask<"u"?queueMicrotask.bind(li):typeof process<"u"&&process.nextTick||rA,L={isArray:qs,isArrayBuffer:XS,isBuffer:e3,isFormData:u3,isArrayBufferView:t3,isString:n3,isNumber:JS,isBoolean:r3,isObject:Kc,isPlainObject:su,isReadableStream:h3,isRequest:d3,isResponse:f3,isHeaders:p3,isUndefined:Ea,isDate:i3,isFile:s3,isBlob:o3,isRegExp:C3,isFunction:xt,isStream:l3,isURLSearchParams:c3,isTypedArray:T3,isFileList:a3,forEach:ja,merge:np,extend:g3,trim:m3,stripBOM:y3,inherits:v3,toFlatObject:_3,kindOf:Wc,kindOfTest:on,endsWith:w3,toArray:E3,forEachEntry:I3,matchAll:S3,isHTMLForm:A3,hasOwnProperty:j_,hasOwnProp:j_,reduceDescriptors:tA,freezeMethods:P3,toObjectSet:k3,toCamelCase:R3,noop:x3,toFiniteNumber:b3,findKey:ZS,global:li,isContextDefined:eA,ALPHABET:nA,generateString:N3,isSpecCompliantForm:O3,toJSONObject:D3,isAsyncFn:L3,isThenable:M3,setImmediate:rA,asap:V3};function te(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status?i.status:null)}L.inherits(te,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:L.toJSONObject(this.config),code:this.code,status:this.status}}});const iA=te.prototype,sA={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{sA[t]={value:t}});Object.defineProperties(te,sA);Object.defineProperty(iA,"isAxiosError",{value:!0});te.from=(t,e,n,r,i,s)=>{const o=Object.create(iA);return L.toFlatObject(t,o,function(u){return u!==Error.prototype},a=>a!=="isAxiosError"),te.call(o,t.message,e,n,r,i),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const F3=null;function rp(t){return L.isPlainObject(t)||L.isArray(t)}function oA(t){return L.endsWith(t,"[]")?t.slice(0,-2):t}function B_(t,e,n){return t?t.concat(e).map(function(i,s){return i=oA(i),!n&&s?"["+i+"]":i}).join(n?".":""):e}function U3(t){return L.isArray(t)&&!t.some(rp)}const j3=L.toFlatObject(L,{},null,function(e){return/^is[A-Z]/.test(e)});function Qc(t,e,n){if(!L.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=L.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(T,R){return!L.isUndefined(R[T])});const r=n.metaTokens,i=n.visitor||d,s=n.dots,o=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&L.isSpecCompliantForm(e);if(!L.isFunction(i))throw new TypeError("visitor must be a function");function c(E){if(E===null)return"";if(L.isDate(E))return E.toISOString();if(!u&&L.isBlob(E))throw new te("Blob is not supported. Use a Buffer instead.");return L.isArrayBuffer(E)||L.isTypedArray(E)?u&&typeof Blob=="function"?new Blob([E]):Buffer.from(E):E}function d(E,T,R){let _=E;if(E&&!R&&typeof E=="object"){if(L.endsWith(T,"{}"))T=r?T:T.slice(0,-2),E=JSON.stringify(E);else if(L.isArray(E)&&U3(E)||(L.isFileList(E)||L.endsWith(T,"[]"))&&(_=L.toArray(E)))return T=oA(T),_.forEach(function(I,O){!(L.isUndefined(I)||I===null)&&e.append(o===!0?B_([T],O,s):o===null?T:T+"[]",c(I))}),!1}return rp(E)?!0:(e.append(B_(R,T,s),c(E)),!1)}const p=[],m=Object.assign(j3,{defaultVisitor:d,convertValue:c,isVisitable:rp});function w(E,T){if(!L.isUndefined(E)){if(p.indexOf(E)!==-1)throw Error("Circular reference detected in "+T.join("."));p.push(E),L.forEach(E,function(_,y){(!(L.isUndefined(_)||_===null)&&i.call(e,_,L.isString(y)?y.trim():y,T,m))===!0&&w(_,T?T.concat(y):[y])}),p.pop()}}if(!L.isObject(t))throw new TypeError("data must be an object");return w(t),e}function $_(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function wg(t,e){this._pairs=[],t&&Qc(t,this,e)}const aA=wg.prototype;aA.append=function(e,n){this._pairs.push([e,n])};aA.toString=function(e){const n=e?function(r){return e.call(this,r,$_)}:$_;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function z3(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function lA(t,e,n){if(!e)return t;const r=n&&n.encode||z3,i=n&&n.serialize;let s;if(i?s=i(e,n):s=L.isURLSearchParams(e)?e.toString():new wg(e,n).toString(r),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class q_{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){L.forEach(this.handlers,function(r){r!==null&&e(r)})}}const uA={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},B3=typeof URLSearchParams<"u"?URLSearchParams:wg,$3=typeof FormData<"u"?FormData:null,q3=typeof Blob<"u"?Blob:null,H3={isBrowser:!0,classes:{URLSearchParams:B3,FormData:$3,Blob:q3},protocols:["http","https","file","blob","url","data"]},Eg=typeof window<"u"&&typeof document<"u",ip=typeof navigator=="object"&&navigator||void 0,W3=Eg&&(!ip||["ReactNative","NativeScript","NS"].indexOf(ip.product)<0),G3=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",K3=Eg&&window.location.href||"http://localhost",Q3=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Eg,hasStandardBrowserEnv:W3,hasStandardBrowserWebWorkerEnv:G3,navigator:ip,origin:K3},Symbol.toStringTag,{value:"Module"})),It={...Q3,...H3};function Y3(t,e){return Qc(t,new It.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return It.isNode&&L.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function X3(t){return L.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function J3(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function cA(t){function e(n,r,i,s){let o=n[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),u=s>=n.length;return o=!o&&L.isArray(i)?i.length:o,u?(L.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!a):((!i[o]||!L.isObject(i[o]))&&(i[o]=[]),e(n,r,i[o],s)&&L.isArray(i[o])&&(i[o]=J3(i[o])),!a)}if(L.isFormData(t)&&L.isFunction(t.entries)){const n={};return L.forEachEntry(t,(r,i)=>{e(X3(r),i,n,0)}),n}return null}function Z3(t,e,n){if(L.isString(t))try{return(e||JSON.parse)(t),L.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(0,JSON.stringify)(t)}const za={transitional:uA,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=L.isObject(e);if(s&&L.isHTMLForm(e)&&(e=new FormData(e)),L.isFormData(e))return i?JSON.stringify(cA(e)):e;if(L.isArrayBuffer(e)||L.isBuffer(e)||L.isStream(e)||L.isFile(e)||L.isBlob(e)||L.isReadableStream(e))return e;if(L.isArrayBufferView(e))return e.buffer;if(L.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Y3(e,this.formSerializer).toString();if((a=L.isFileList(e))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return Qc(a?{"files[]":e}:e,u&&new u,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),Z3(e)):e}],transformResponse:[function(e){const n=this.transitional||za.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(L.isResponse(e)||L.isReadableStream(e))return e;if(e&&L.isString(e)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?te.from(a,te.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:It.classes.FormData,Blob:It.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};L.forEach(["delete","get","head","post","put","patch"],t=>{za.headers[t]={}});const e6=L.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),t6=t=>{const e={};let n,r,i;return t&&t.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||e[n]&&e6[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},H_=Symbol("internals");function yo(t){return t&&String(t).trim().toLowerCase()}function ou(t){return t===!1||t==null?t:L.isArray(t)?t.map(ou):String(t)}function n6(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const r6=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function gd(t,e,n,r,i){if(L.isFunction(r))return r.call(this,e,n);if(i&&(e=n),!!L.isString(e)){if(L.isString(r))return e.indexOf(r)!==-1;if(L.isRegExp(r))return r.test(e)}}function i6(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function s6(t,e){const n=L.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(i,s,o){return this[r].call(this,e,i,s,o)},configurable:!0})})}class St{constructor(e){e&&this.set(e)}set(e,n,r){const i=this;function s(a,u,c){const d=yo(u);if(!d)throw new Error("header name must be a non-empty string");const p=L.findKey(i,d);(!p||i[p]===void 0||c===!0||c===void 0&&i[p]!==!1)&&(i[p||u]=ou(a))}const o=(a,u)=>L.forEach(a,(c,d)=>s(c,d,u));if(L.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(L.isString(e)&&(e=e.trim())&&!r6(e))o(t6(e),n);else if(L.isHeaders(e))for(const[a,u]of e.entries())s(u,a,r);else e!=null&&s(n,e,r);return this}get(e,n){if(e=yo(e),e){const r=L.findKey(this,e);if(r){const i=this[r];if(!n)return i;if(n===!0)return n6(i);if(L.isFunction(n))return n.call(this,i,r);if(L.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=yo(e),e){const r=L.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||gd(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let i=!1;function s(o){if(o=yo(o),o){const a=L.findKey(r,o);a&&(!n||gd(r,r[a],a,n))&&(delete r[a],i=!0)}}return L.isArray(e)?e.forEach(s):s(e),i}clear(e){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!e||gd(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const n=this,r={};return L.forEach(this,(i,s)=>{const o=L.findKey(r,s);if(o){n[o]=ou(i),delete n[s];return}const a=e?i6(s):String(s).trim();a!==s&&delete n[s],n[a]=ou(i),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return L.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=e&&L.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[H_]=this[H_]={accessors:{}}).accessors,i=this.prototype;function s(o){const a=yo(o);r[a]||(s6(i,o),r[a]=!0)}return L.isArray(e)?e.forEach(s):s(e),this}}St.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);L.reduceDescriptors(St.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});L.freezeMethods(St);function yd(t,e){const n=this||za,r=e||n,i=St.from(r.headers);let s=r.data;return L.forEach(t,function(a){s=a.call(n,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function hA(t){return!!(t&&t.__CANCEL__)}function Hs(t,e,n){te.call(this,t??"canceled",te.ERR_CANCELED,e,n),this.name="CanceledError"}L.inherits(Hs,te,{__CANCEL__:!0});function dA(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new te("Request failed with status code "+n.status,[te.ERR_BAD_REQUEST,te.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function o6(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function a6(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,s=0,o;return e=e!==void 0?e:1e3,function(u){const c=Date.now(),d=r[s];o||(o=c),n[i]=u,r[i]=c;let p=s,m=0;for(;p!==i;)m+=n[p++],p=p%t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),c-o<e)return;const w=d&&c-d;return w?Math.round(m*1e3/w):void 0}}function l6(t,e){let n=0,r=1e3/e,i,s;const o=(c,d=Date.now())=>{n=d,i=null,s&&(clearTimeout(s),s=null),t.apply(null,c)};return[(...c)=>{const d=Date.now(),p=d-n;p>=r?o(c,d):(i=c,s||(s=setTimeout(()=>{s=null,o(i)},r-p)))},()=>i&&o(i)]}const ec=(t,e,n=3)=>{let r=0;const i=a6(50,250);return l6(s=>{const o=s.loaded,a=s.lengthComputable?s.total:void 0,u=o-r,c=i(u),d=o<=a;r=o;const p={loaded:o,total:a,progress:a?o/a:void 0,bytes:u,rate:c||void 0,estimated:c&&a&&d?(a-o)/c:void 0,event:s,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(p)},n)},W_=(t,e)=>{const n=t!=null;return[r=>e[0]({lengthComputable:n,total:t,loaded:r}),e[1]]},G_=t=>(...e)=>L.asap(()=>t(...e)),u6=It.hasStandardBrowserEnv?function(){const e=It.navigator&&/(msie|trident)/i.test(It.navigator.userAgent),n=document.createElement("a");let r;function i(s){let o=s;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const a=L.isString(o)?i(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}(),c6=It.hasStandardBrowserEnv?{write(t,e,n,r,i,s){const o=[t+"="+encodeURIComponent(e)];L.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),L.isString(r)&&o.push("path="+r),L.isString(i)&&o.push("domain="+i),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function h6(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function d6(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function fA(t,e){return t&&!h6(e)?d6(t,e):e}const K_=t=>t instanceof St?{...t}:t;function Ai(t,e){e=e||{};const n={};function r(c,d,p){return L.isPlainObject(c)&&L.isPlainObject(d)?L.merge.call({caseless:p},c,d):L.isPlainObject(d)?L.merge({},d):L.isArray(d)?d.slice():d}function i(c,d,p){if(L.isUndefined(d)){if(!L.isUndefined(c))return r(void 0,c,p)}else return r(c,d,p)}function s(c,d){if(!L.isUndefined(d))return r(void 0,d)}function o(c,d){if(L.isUndefined(d)){if(!L.isUndefined(c))return r(void 0,c)}else return r(void 0,d)}function a(c,d,p){if(p in e)return r(c,d);if(p in t)return r(void 0,c)}const u={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,d)=>i(K_(c),K_(d),!0)};return L.forEach(Object.keys(Object.assign({},t,e)),function(d){const p=u[d]||i,m=p(t[d],e[d],d);L.isUndefined(m)&&p!==a||(n[d]=m)}),n}const pA=t=>{const e=Ai({},t);let{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:s,headers:o,auth:a}=e;e.headers=o=St.from(o),e.url=lA(fA(e.baseURL,e.url),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let u;if(L.isFormData(n)){if(It.hasStandardBrowserEnv||It.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((u=o.getContentType())!==!1){const[c,...d]=u?u.split(";").map(p=>p.trim()).filter(Boolean):[];o.setContentType([c||"multipart/form-data",...d].join("; "))}}if(It.hasStandardBrowserEnv&&(r&&L.isFunction(r)&&(r=r(e)),r||r!==!1&&u6(e.url))){const c=i&&s&&c6.read(s);c&&o.set(i,c)}return e},f6=typeof XMLHttpRequest<"u",p6=f6&&function(t){return new Promise(function(n,r){const i=pA(t);let s=i.data;const o=St.from(i.headers).normalize();let{responseType:a,onUploadProgress:u,onDownloadProgress:c}=i,d,p,m,w,E;function T(){w&&w(),E&&E(),i.cancelToken&&i.cancelToken.unsubscribe(d),i.signal&&i.signal.removeEventListener("abort",d)}let R=new XMLHttpRequest;R.open(i.method.toUpperCase(),i.url,!0),R.timeout=i.timeout;function _(){if(!R)return;const I=St.from("getAllResponseHeaders"in R&&R.getAllResponseHeaders()),V={data:!a||a==="text"||a==="json"?R.responseText:R.response,status:R.status,statusText:R.statusText,headers:I,config:t,request:R};dA(function(A){n(A),T()},function(A){r(A),T()},V),R=null}"onloadend"in R?R.onloadend=_:R.onreadystatechange=function(){!R||R.readyState!==4||R.status===0&&!(R.responseURL&&R.responseURL.indexOf("file:")===0)||setTimeout(_)},R.onabort=function(){R&&(r(new te("Request aborted",te.ECONNABORTED,t,R)),R=null)},R.onerror=function(){r(new te("Network Error",te.ERR_NETWORK,t,R)),R=null},R.ontimeout=function(){let O=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const V=i.transitional||uA;i.timeoutErrorMessage&&(O=i.timeoutErrorMessage),r(new te(O,V.clarifyTimeoutError?te.ETIMEDOUT:te.ECONNABORTED,t,R)),R=null},s===void 0&&o.setContentType(null),"setRequestHeader"in R&&L.forEach(o.toJSON(),function(O,V){R.setRequestHeader(V,O)}),L.isUndefined(i.withCredentials)||(R.withCredentials=!!i.withCredentials),a&&a!=="json"&&(R.responseType=i.responseType),c&&([m,E]=ec(c,!0),R.addEventListener("progress",m)),u&&R.upload&&([p,w]=ec(u),R.upload.addEventListener("progress",p),R.upload.addEventListener("loadend",w)),(i.cancelToken||i.signal)&&(d=I=>{R&&(r(!I||I.type?new Hs(null,t,R):I),R.abort(),R=null)},i.cancelToken&&i.cancelToken.subscribe(d),i.signal&&(i.signal.aborted?d():i.signal.addEventListener("abort",d)));const y=o6(i.url);if(y&&It.protocols.indexOf(y)===-1){r(new te("Unsupported protocol "+y+":",te.ERR_BAD_REQUEST,t));return}R.send(s||null)})},m6=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let r=new AbortController,i;const s=function(c){if(!i){i=!0,a();const d=c instanceof Error?c:this.reason;r.abort(d instanceof te?d:new Hs(d instanceof Error?d.message:d))}};let o=e&&setTimeout(()=>{o=null,s(new te(`timeout ${e} of ms exceeded`,te.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(c=>{c.unsubscribe?c.unsubscribe(s):c.removeEventListener("abort",s)}),t=null)};t.forEach(c=>c.addEventListener("abort",s));const{signal:u}=r;return u.unsubscribe=()=>L.asap(a),u}},g6=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let r=0,i;for(;r<n;)i=r+e,yield t.slice(r,i),r=i},y6=async function*(t,e){for await(const n of v6(t))yield*g6(n,e)},v6=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:r}=await e.read();if(n)break;yield r}}finally{await e.cancel()}},Q_=(t,e,n,r)=>{const i=y6(t,e);let s=0,o,a=u=>{o||(o=!0,r&&r(u))};return new ReadableStream({async pull(u){try{const{done:c,value:d}=await i.next();if(c){a(),u.close();return}let p=d.byteLength;if(n){let m=s+=p;n(m)}u.enqueue(new Uint8Array(d))}catch(c){throw a(c),c}},cancel(u){return a(u),i.return()}},{highWaterMark:2})},Yc=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",mA=Yc&&typeof ReadableStream=="function",_6=Yc&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),gA=(t,...e)=>{try{return!!t(...e)}catch{return!1}},w6=mA&&gA(()=>{let t=!1;const e=new Request(It.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),Y_=64*1024,sp=mA&&gA(()=>L.isReadableStream(new Response("").body)),tc={stream:sp&&(t=>t.body)};Yc&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!tc[e]&&(tc[e]=L.isFunction(t[e])?n=>n[e]():(n,r)=>{throw new te(`Response type '${e}' is not supported`,te.ERR_NOT_SUPPORT,r)})})})(new Response);const E6=async t=>{if(t==null)return 0;if(L.isBlob(t))return t.size;if(L.isSpecCompliantForm(t))return(await new Request(It.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(L.isArrayBufferView(t)||L.isArrayBuffer(t))return t.byteLength;if(L.isURLSearchParams(t)&&(t=t+""),L.isString(t))return(await _6(t)).byteLength},T6=async(t,e)=>{const n=L.toFiniteNumber(t.getContentLength());return n??E6(e)},I6=Yc&&(async t=>{let{url:e,method:n,data:r,signal:i,cancelToken:s,timeout:o,onDownloadProgress:a,onUploadProgress:u,responseType:c,headers:d,withCredentials:p="same-origin",fetchOptions:m}=pA(t);c=c?(c+"").toLowerCase():"text";let w=m6([i,s&&s.toAbortSignal()],o),E;const T=w&&w.unsubscribe&&(()=>{w.unsubscribe()});let R;try{if(u&&w6&&n!=="get"&&n!=="head"&&(R=await T6(d,r))!==0){let V=new Request(e,{method:"POST",body:r,duplex:"half"}),j;if(L.isFormData(r)&&(j=V.headers.get("content-type"))&&d.setContentType(j),V.body){const[A,v]=W_(R,ec(G_(u)));r=Q_(V.body,Y_,A,v)}}L.isString(p)||(p=p?"include":"omit");const _="credentials"in Request.prototype;E=new Request(e,{...m,signal:w,method:n.toUpperCase(),headers:d.normalize().toJSON(),body:r,duplex:"half",credentials:_?p:void 0});let y=await fetch(E);const I=sp&&(c==="stream"||c==="response");if(sp&&(a||I&&T)){const V={};["status","statusText","headers"].forEach(S=>{V[S]=y[S]});const j=L.toFiniteNumber(y.headers.get("content-length")),[A,v]=a&&W_(j,ec(G_(a),!0))||[];y=new Response(Q_(y.body,Y_,A,()=>{v&&v(),T&&T()}),V)}c=c||"text";let O=await tc[L.findKey(tc,c)||"text"](y,t);return!I&&T&&T(),await new Promise((V,j)=>{dA(V,j,{data:O,headers:St.from(y.headers),status:y.status,statusText:y.statusText,config:t,request:E})})}catch(_){throw T&&T(),_&&_.name==="TypeError"&&/fetch/i.test(_.message)?Object.assign(new te("Network Error",te.ERR_NETWORK,t,E),{cause:_.cause||_}):te.from(_,_&&_.code,t,E)}}),op={http:F3,xhr:p6,fetch:I6};L.forEach(op,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const X_=t=>`- ${t}`,S6=t=>L.isFunction(t)||t===null||t===!1,yA={getAdapter:t=>{t=L.isArray(t)?t:[t];const{length:e}=t;let n,r;const i={};for(let s=0;s<e;s++){n=t[s];let o;if(r=n,!S6(n)&&(r=op[(o=String(n)).toLowerCase()],r===void 0))throw new te(`Unknown adapter '${o}'`);if(r)break;i[o||"#"+s]=r}if(!r){const s=Object.entries(i).map(([a,u])=>`adapter ${a} `+(u===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(X_).join(`
`):" "+X_(s[0]):"as no adapter specified";throw new te("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:op};function vd(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Hs(null,t)}function J_(t){return vd(t),t.headers=St.from(t.headers),t.data=yd.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),yA.getAdapter(t.adapter||za.adapter)(t).then(function(r){return vd(t),r.data=yd.call(t,t.transformResponse,r),r.headers=St.from(r.headers),r},function(r){return hA(r)||(vd(t),r&&r.response&&(r.response.data=yd.call(t,t.transformResponse,r.response),r.response.headers=St.from(r.response.headers))),Promise.reject(r)})}const vA="1.7.7",Tg={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Tg[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const Z_={};Tg.transitional=function(e,n,r){function i(s,o){return"[Axios v"+vA+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,a)=>{if(e===!1)throw new te(i(o," has been removed"+(n?" in "+n:"")),te.ERR_DEPRECATED);return n&&!Z_[o]&&(Z_[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};function A6(t,e,n){if(typeof t!="object")throw new te("options must be an object",te.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],o=e[s];if(o){const a=t[s],u=a===void 0||o(a,s,t);if(u!==!0)throw new te("option "+s+" must be "+u,te.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new te("Unknown option "+s,te.ERR_BAD_OPTION)}}const ap={assertOptions:A6,validators:Tg},or=ap.validators;class fi{constructor(e){this.defaults=e,this.interceptors={request:new q_,response:new q_}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;const s=i.stack?i.stack.replace(/^.+\n/,""):"";try{r.stack?s&&!String(r.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+s):r.stack=s}catch{}}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Ai(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&ap.assertOptions(r,{silentJSONParsing:or.transitional(or.boolean),forcedJSONParsing:or.transitional(or.boolean),clarifyTimeoutError:or.transitional(or.boolean)},!1),i!=null&&(L.isFunction(i)?n.paramsSerializer={serialize:i}:ap.assertOptions(i,{encode:or.function,serialize:or.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&L.merge(s.common,s[n.method]);s&&L.forEach(["delete","get","head","post","put","patch","common"],E=>{delete s[E]}),n.headers=St.concat(o,s);const a=[];let u=!0;this.interceptors.request.forEach(function(T){typeof T.runWhen=="function"&&T.runWhen(n)===!1||(u=u&&T.synchronous,a.unshift(T.fulfilled,T.rejected))});const c=[];this.interceptors.response.forEach(function(T){c.push(T.fulfilled,T.rejected)});let d,p=0,m;if(!u){const E=[J_.bind(this),void 0];for(E.unshift.apply(E,a),E.push.apply(E,c),m=E.length,d=Promise.resolve(n);p<m;)d=d.then(E[p++],E[p++]);return d}m=a.length;let w=n;for(p=0;p<m;){const E=a[p++],T=a[p++];try{w=E(w)}catch(R){T.call(this,R);break}}try{d=J_.call(this,w)}catch(E){return Promise.reject(E)}for(p=0,m=c.length;p<m;)d=d.then(c[p++],c[p++]);return d}getUri(e){e=Ai(this.defaults,e);const n=fA(e.baseURL,e.url);return lA(n,e.params,e.paramsSerializer)}}L.forEach(["delete","get","head","options"],function(e){fi.prototype[e]=function(n,r){return this.request(Ai(r||{},{method:e,url:n,data:(r||{}).data}))}});L.forEach(["post","put","patch"],function(e){function n(r){return function(s,o,a){return this.request(Ai(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}fi.prototype[e]=n(),fi.prototype[e+"Form"]=n(!0)});class Ig{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(a=>{r.subscribe(a),s=a}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},e(function(s,o,a){r.reason||(r.reason=new Hs(s,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=r=>{e.abort(r)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new Ig(function(i){e=i}),cancel:e}}}function R6(t){return function(n){return t.apply(null,n)}}function C6(t){return L.isObject(t)&&t.isAxiosError===!0}const lp={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(lp).forEach(([t,e])=>{lp[e]=t});function _A(t){const e=new fi(t),n=YS(fi.prototype.request,e);return L.extend(n,fi.prototype,e,{allOwnKeys:!0}),L.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return _A(Ai(t,i))},n}const Me=_A(za);Me.Axios=fi;Me.CanceledError=Hs;Me.CancelToken=Ig;Me.isCancel=hA;Me.VERSION=vA;Me.toFormData=Qc;Me.AxiosError=te;Me.Cancel=Me.CanceledError;Me.all=function(e){return Promise.all(e)};Me.spread=R6;Me.isAxiosError=C6;Me.mergeConfig=Ai;Me.AxiosHeaders=St;Me.formToJSON=t=>cA(L.isHTMLForm(t)?new FormData(t):t);Me.getAdapter=yA.getAdapter;Me.HttpStatusCode=lp;Me.default=Me;const Gt={regionList:["北海道","東北","関東","中部北陸","東海","近畿","中国","四国","九州"],prefList:{北海道:["道北","道東","道南","道央"],東北:["青森県","岩手県","宮城県","秋田県","山形県","福島県"],関東:["茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県"],中部北陸:["新潟県","富山県","石川県","福井県","山梨県","長野県"],東海:["岐阜県","静岡県","愛知県","三重県"],近畿:["滋賀県","京都府","大阪府","兵庫県","奈良県","和歌山県"],中国:["鳥取県","島根県","岡山県","広島県","山口県"],四国:["徳島県","香川県","愛媛県","高知県"],九州:["福岡県","佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄県"]},cityList:{道北:[{city:"稚内",id:"011000"},{city:"旭川",id:"012010"},{city:"留萌",id:"012020"}],道東:[{city:"網走",id:"013010"},{city:"北見",id:"013020"},{city:"紋別",id:"013030"},{city:"根室",id:"014010"},{city:"釧路",id:"014020"},{city:"帯広",id:"014030"}],道南:[{city:"室蘭",id:"015010"},{city:"浦河",id:"015020"},{city:"函館",id:"017010"},{city:"江差",id:"017020"}],道央:[{city:"札幌",id:"016010"},{city:"岩見沢",id:"016020"},{city:"倶知安",id:"016030"}],青森県:[{city:"青森",id:"020010"},{city:"むつ",id:"020020"},{city:"八戸",id:"020030"}],岩手県:[{city:"盛岡",id:"030010"},{city:"宮古",id:"030020"},{city:"大船渡",id:"030030"}],宮城県:[{city:"仙台",id:"040010"},{city:"白石",id:"040020"}],秋田県:[{city:"秋田",id:"050010"},{city:"横手",id:"050020"}],山形県:[{city:"山形",id:"060010"},{city:"米沢",id:"060020"},{city:"酒田",id:"060030"},{city:"新庄",id:"060040"}],福島県:[{city:"福島",id:"070010"},{city:"小名浜",id:"070020"},{city:"若松",id:"070030"}],茨城県:[{city:"水戸",id:"080010"},{city:"土浦",id:"080020"}],栃木県:[{city:"宇都宮",id:"090010"},{city:"大田原",id:"090020"}],群馬県:[{city:"前橋",id:"100010"},{city:"みなかみ",id:"100020"}],埼玉県:[{city:"さいたま",id:"110010"},{city:"熊谷",id:"110020"},{city:"秩父",id:"110030"}],千葉県:[{city:"千葉",id:"120010"},{city:"銚子",id:"120020"},{city:"館山",id:"120030"}],東京都:[{city:"東京",id:"130010"},{city:"大島",id:"130020"},{city:"八丈島",id:"130030"},{city:"父島",id:"130040"}],神奈川県:[{city:"横浜",id:"140010"},{city:"小田原",id:"140020"}],新潟県:[{city:"新潟",id:"150010"},{city:"長岡",id:"150020"},{city:"高田",id:"150030"},{city:"相川",id:"150040"}],富山県:[{city:"富山",id:"160010"},{city:"伏木",id:"160020"}],石川県:[{city:"金沢",id:"170010"},{city:"輪島",id:"170020"}],福井県:[{city:"福井",id:"180010"},{city:"敦賀",id:"180020"}],山梨県:[{city:"甲府",id:"190010"},{city:"河口湖",id:"190020"}],長野県:[{city:"長野",id:"200010"},{city:"松本",id:"200020"},{city:"飯田",id:"200030"}],岐阜県:[{city:"岐阜",id:"210010"},{city:"高山",id:"210020"}],静岡県:[{city:"静岡",id:"220010"},{city:"網代",id:"220020"},{city:"三島",id:"220030"},{city:"浜松",id:"220040"}],愛知県:[{city:"名古屋",id:"230010"},{city:"豊橋",id:"230020"}],三重県:[{city:"津",id:"240010"},{city:"尾鷲",id:"240020"}],滋賀県:[{city:"大津",id:"250010"},{city:"彦根",id:"250020"}],京都府:[{city:"京都",id:"260010"},{city:"舞鶴",id:"260020"}],大阪府:[{city:"大阪",id:"270000"}],兵庫県:[{city:"神戸",id:"280010"},{city:"豊岡",id:"280020"}],奈良県:[{city:"奈良",id:"290010"},{city:"風屋",id:"290020"}],和歌山県:[{city:"和歌山",id:"300010"},{city:"潮岬",id:"300020"}],鳥取県:[{city:"鳥取",id:"310010"},{city:"米子",id:"310020"}],島根県:[{city:"松江",id:"320010"},{city:"浜田",id:"320020"},{city:"西郷",id:"320030"}],岡山県:[{city:"岡山",id:"330010"},{city:"津山",id:"330020"}],広島県:[{city:"広島",id:"340010"},{city:"庄原",id:"340020"}],山口県:[{city:"下関",id:"350010"},{city:"山口",id:"350020"},{city:"柳井",id:"350030"},{city:"萩",id:"350040"}],徳島県:[{city:"徳島",id:"360010"},{city:"日和佐",id:"360020"}],香川県:[{city:"高松",id:"370000"}],愛媛県:[{city:"松山",id:"380010"},{city:"新居浜",id:"380020"},{city:"宇和島",id:"380030"}],高知県:[{city:"高知",id:"390010"},{city:"室戸岬",id:"390020"},{city:"清水",id:"390030"}],福岡県:[{city:"福岡",id:"400010"},{city:"八幡",id:"400020"},{city:"飯塚",id:"400030"},{city:"久留米",id:"400040"}],佐賀県:[{city:"佐賀",id:"410010"},{city:"伊万里",id:"410020"}],長崎県:[{city:"長崎",id:"420010"},{city:"佐世保",id:"420020"},{city:"厳原",id:"420030"},{city:"福江",id:"420040"}],熊本県:[{city:"熊本",id:"430010"},{city:"阿蘇乙姫",id:"430020"},{city:"牛深",id:"430030"},{city:"人吉",id:"430040"}],大分県:[{city:"大分",id:"440010"},{city:"中津",id:"440020"},{city:"日田",id:"440030"},{city:"佐伯",id:"440040"}],宮崎県:[{city:"宮崎",id:"450010"},{city:"延岡",id:"450020"},{city:"都城",id:"450030"},{city:"高千穂",id:"450040"}],鹿児島県:[{city:"鹿児島",id:"460010"},{city:"鹿屋",id:"460020"},{city:"種子島",id:"460030"},{city:"名瀬",id:"460040"}],沖縄県:[{city:"那覇",id:"471010"},{city:"名護",id:"471020"},{city:"久米島",id:"471030"},{city:"南大東",id:"472000"},{city:"宮古島",id:"473000"},{city:"石垣島",id:"474010"},{city:"与那国島",id:"474020"}]}},P6="https://weather.tsukumijima.net/api/forecast",k6=()=>{const[t,e]=M.useState(Gt.cityList.東京都[0]),[n,r]=M.useState("東京都"),[i,s]=M.useState("関東"),[o,a]=M.useState(Gt.cityList.東京都),[u,c]=M.useState(Gt.prefList.関東),[d,p]=M.useState([]);M.useEffect(()=>{Me.get(`${P6}/city/${t.id}`).then(T=>{console.log(T.data.forecasts[0]),p(T.data.forecasts)})},[t]);const m=T=>{e(o.filter(R=>`${R.id}`===T.target.value)[0])},w=T=>{r(T.target.value),a(Gt.cityList[T.target.value]),e(Gt.cityList[T.target.value][0])},E=T=>{s(T.target.value),c(Gt.prefList[T.target.value]),r(Gt.prefList[T.target.value][0]);const R=Gt.prefList[T.target.value][0];a(Gt.cityList[R]),e(Gt.cityList[R][0])};return x.jsxs("div",{className:"weather__content",children:[x.jsxs("h1",{children:["天気予報","(β)"]}),x.jsxs("div",{children:["地方:",x.jsx("select",{onChange:E,value:i,children:Gt.regionList.map(T=>x.jsx("option",{value:T,children:T},T))})]}),x.jsxs("div",{children:["都道府県:",x.jsx("select",{onChange:w,value:n,children:u.map(T=>x.jsx("option",{value:T,children:T},T))})]}),x.jsxs("div",{children:["都市:",x.jsx("select",{onChange:m,value:t.id,children:o.map(T=>x.jsx("option",{value:T.id,children:T.city},T.id))})]}),x.jsx("div",{className:"weather__forecast",children:d.map(T=>x.jsxs("div",{className:"weather__block",children:[x.jsx("div",{children:x.jsx("h3",{children:`${T.dateLabel}(${T.date})`})}),x.jsxs("div",{className:"weather__telop",children:["天気：",T.telop,x.jsx("img",{src:T.image.url,className:"weather__image"})]}),x.jsx("div",{}),x.jsxs("div",{className:"weather__temperature",children:["最高気温",T.temperature.max.celsius||"--","℃・最低気温",T.temperature.min.celsius||"--","℃"]}),x.jsxs("div",{children:["降水確率",x.jsxs("table",{className:"weather__chanceOfRain",children:[x.jsx("thead",{children:x.jsxs("tr",{children:[x.jsx("th",{scope:"col",children:"0-6時"}),x.jsx("th",{scope:"col",children:"6-12時"}),x.jsx("th",{scope:"col",children:"12-18時"}),x.jsx("th",{scope:"col",children:"18-24時"})]})}),x.jsx("tbody",{children:x.jsxs("tr",{children:[x.jsx("td",{children:T.chanceOfRain.T00_06}),x.jsx("td",{children:T.chanceOfRain.T06_12}),x.jsx("td",{children:T.chanceOfRain.T12_18}),x.jsx("td",{children:T.chanceOfRain.T18_24})]})})]})]})]},T.date))}),x.jsxs("div",{children:["天気予報API:",x.jsx("a",{href:"https://weather.tsukumijima.net/",children:"https://weather.tsukumijima.net/"})]})]})},up={sheet:[{q:"1.寝つき",a:["問題ない（または、寝付くのに３０分以上かかったことは一度もない）","寝つくのに３０分以上かかったこともあるが、一週間の半分以下である","寝つくのに３０分以上かかったことが、週の半分以上ある","寝つくのに６０分以上かかったことが、（１週間の）半分以上ある"]},{q:"2.夜間の睡眠",a:["問題ない（夜間に目が覚めたことはない）","落ち着かない、浅い眠りで、何回か短く目が覚めたことがある","毎晩少なくとも１回は目が覚めるが、難なくまた眠ることができる","毎晩１回以上目が覚め、そのまま２０分以上眠れないことが、（１週間の）半分以上ある"]},{q:"3.早く目が覚めすぎる",a:["問題ない（または、ほとんどの場合、目が覚めるのは、起きなくてはいけない時間の、せいぜい３０分前である）","週の半分以上、起きなくてはならない時間より３０分以上早く目が覚める","ほとんどいつも、起きなくてはならない時間より１時間早く目が覚めてしまうが、最終的にはまた眠ることができる。","起きなくてはならない時間よりも１時間以上早く起きてしまい、もう一度眠ることができない"]},{q:"4.眠りすぎる",a:["問題ない（夜間、眠りすぎることはなく、日中に昼寝をすることもない）","２４時間のうち、眠っている時間は、昼寝を含めて１０時間ほどである","２４時間のうち、眠っている時間は、昼寝を含めて１２時間ほどである","２４時間のうち、昼寝を含めて１２時間以上眠っている"]},{q:"5.悲しい気持ち",a:["悲しいとは思わない","悲しいと思うことは、半分以下の時間である","悲しいと思うことが半分以上の時間ある","ほとんどすべての時間、悲しいと感じている"]},{q:"6.食欲低下",a:["普段の食欲とかわらない、または、食欲が増えた","普段よりいくぶん食べる回数が少ないか、量が少ない","普段よりかなり食べる量が少なく、食べるよう努めないといけない","まる１日（２４時間）ほとんどものを食べず、食べるのは極めて強く食べようと努めたり、誰かに食べるよう説得されたときだけである"]},{q:"7.食欲増進",a:["普段の食欲とかわらない、または、食欲が減った","普段より頻回に食べないといけないように感じる","普段とくらべて、常に食べる回数が多かったり、量が多かったりする","食事の時も、食事と食事の間も、食べ過ぎる衝動にかられている"]},{q:"8.体重減少（最近２週間で）",a:["体重は変わっていない、または、体重は増えた","少し体重が減った気がする","１キロ以上やせた","２キロ以上やせた"]},{q:"9.体重増加（最近２週間で）",a:["体重は変わっていない、または、体重は減った","少し体重が増えた気がする","１キロ以上太った","２キロ以上太った"]},{q:"10.集中力／決断",a:["集中力や決断力は普段とかわりない","ときどき決断しづらくなっているように感じたり、注意が散漫になるように感じる","ほとんどの時間、注意を集中したり、決断を下すのに苦労する","ものを読むこともじゅうぶんにできなかったり、小さなことですら決断できないほど集中力が落ちている"]},{q:"11.自分についての見方",a:["自分のことを、他の人と同じくらい価値があって、援助に値する人間だと思う","普段よりも自分を責めがちである","自分が他の人に迷惑をかけているとかなり信じている","自分の大小の欠陥について、ほとんど常に考えている"]},{q:"12.死や自殺についての考え",a:["死や自殺について考えることはない","人生が空っぽに感じ、生きている価値があるかどうか疑問に思う","自殺や死について、１週間に数回、数分間にわたって考えることがある","自殺や死について１日に何回か細部にわたって考える、または、具体的な自殺の計画を立てたり、実際に死のうとしたりしたことがあった"]},{q:"13.一般的な興味",a:["他人のことやいろいろな活動についての興味は普段と変わらない","人々や活動について、普段より興味が薄れていると感じる","以前好んでいた活動のうち、一つか二つのことにしか興味がなくなっていると感じる","以前好んでいた活動に、ほとんどまったく興味がなくなっている"]},{q:"14.エネルギーのレベル",a:["普段のエネルギーのレベルと変わりない","普段よりも疲れやすい","普段の日常の活動（例えば、買い物、宿題、料理、出勤など）をやり始めたり、やりとげるのに、大きな努力が必要である","ただエネルギーがないという理由だけで、日常の活動のほとんどが実行できない"]},{q:"15.動きが遅くなった気がする",a:["普段どおりの速さで考えたり、話したり、動いたりしている","頭の働きが遅くなっていたり、声が単調で平坦に感じる","ほとんどの質問に答えるのに何秒かかかり、考えが遅くなっているのがわかる","最大の努力をしないと、質問に答えられないことがしばしばである"]},{q:"16.落ち着かない",a:["落ち着かない気持ちはない。","しばしばそわそわしていて、手をもんだり、座り直したりせずにはいられない","動き回りたい衝動があって、かなり落ち着かない。","ときどき、座っていられなくて歩き回らずにはいられないことがある"]}],calcScore:t=>{if(Math.min(...t)===-1)return-1;let e=0;return e+=Math.max(...t.slice(0,4)),e+=t[4],e+=Math.max(...t.slice(5,9)),e+=t.slice(9,14).reduce((n,r)=>n+r,0),e+=Math.max(...t.slice(14,16)),e}},x6=up.sheet.map(t=>-1),b6=()=>{const[t,e]=M.useState(x6),[n,r]=M.useState(""),[i,s]=M.useState(""),o=(u,c)=>{let d=[...t];d[u]=c,e(d)},a=()=>{const u=up.calcScore(t);if(u===-1){r("未入力の項目があります");const c=t.indexOf(-1),p=document.getElementById(`question_${c}`).getBoundingClientRect().top+window.scrollY-70;return window.scrollTo({top:p,behavior:"smooth"}),!1}else r(""),u<=5?s(x.jsxs(x.Fragment,{children:[x.jsx("h2",{children:"結果"}),x.jsxs("h3",{children:[u,"点 : 正常"]}),"心身の不調を感じた時は、医療機関に相談してください。"]})):u<=10?s(x.jsxs(x.Fragment,{children:[x.jsx("h2",{children:"結果"}),x.jsxs("h3",{children:[u,"点 : 軽度"]}),"うつ病の可能性がありますので、医療機関などに相談することをおすすめします。"]})):u<=15?s(x.jsxs(x.Fragment,{children:[x.jsx("h2",{children:"結果"}),x.jsxs("h3",{children:[u,"点 : 中等度"]}),"うつ病の可能性がありますので、医療機関などに相談することをおすすめします。"]})):u<=20?s(x.jsxs(x.Fragment,{children:[x.jsx("h2",{children:"結果"}),x.jsxs("h3",{children:[u,"点 : 重度"]}),"うつ病の可能性がありますので、医療機関などに相談することをおすすめします。"]})):u<=27&&s(x.jsxs(x.Fragment,{children:[x.jsx("h2",{children:"結果"}),x.jsxs("h3",{children:[u,"点 : 極めて重度"]}),"うつ病の可能性がありますので、医療機関などに相談することをおすすめします。"]}))};return x.jsxs("div",{className:"depression__content",children:[x.jsx("h1",{children:"うつ病チェック"}),x.jsx("span",{children:"うつ病チェックを簡易抑うつ症状尺度（QIDS-J）を使って行いましょう。"}),x.jsx("h2",{children:"簡易抑うつ症状尺度（QIDS-J）とは"}),x.jsx("span",{children:"簡易抑うつ症状尺度（Quick Inventory of Depressive Symptomatology：QIDS-J）は、16項目の自己記入式の評価尺度で、うつ病の重症度を評価できるほか、アメリカ精神医学会の診断基準 DSM-IV の大うつ病性障害（中核的なうつ病）の診断基準に対応しているという特長を持っています。世界的に知られた精神科医 John Rush 先生によって開発され、世界 10カ国以上で使用されています。日本語版は、慶応大学医学部の藤澤大介先生のグループによって作成されました。"}),x.jsx("h2",{children:"採点方法"}),x.jsx("span",{children:"睡眠に関する項目（第１－４項目）、食欲／体重に関する項目（第６－９項目）、精神運動状態に関する２項目（第１５、１６項目）は、それぞれの項目で最も点数が高いものを１つだけ選んで点数化します。それ以外の項目（第５、１０，１１，１２，１３，１４項目）は、それぞれの点数を書き出します。うつ病の重症度は、睡眠、食欲／体重、精神運動、その他6項目を合わせて9項目の合計点数（０点から２７点）で評価します。原版QIDSでは、点数と重症度は下記のようになっています。"}),x.jsxs("table",{className:"depression__table",children:[x.jsx("thead",{children:x.jsxs("tr",{children:[x.jsx("th",{scope:"col",children:"点数"}),x.jsx("th",{scope:"col",children:"0-5"}),x.jsx("th",{scope:"col",children:"6-10"}),x.jsx("th",{scope:"col",children:"11-15"}),x.jsx("th",{scope:"col",children:"16-20"}),x.jsx("th",{scope:"col",children:"21-27"})]})}),x.jsx("tbody",{children:x.jsxs("tr",{children:[x.jsx("th",{scope:"row",children:"重症度"}),x.jsx("td",{children:"正常"}),x.jsx("td",{children:"軽度"}),x.jsx("td",{children:"中等度"}),x.jsx("td",{children:"重度"}),x.jsx("td",{children:"極めて重度"})]})})]}),x.jsx("span",{children:"各項目が大うつ病性障害の症状に対応しているので、うつ症状の評価やスクリーニングに使えるほか、合計点を算出することでうつ状態の変化を見ることができます。6点以上の場合にはうつ病の可能性がありますので、まず医療機関に相談してください。"}),x.jsx("h2",{children:"質問"}),x.jsx("div",{className:"depression__question-container",children:up.sheet.map((u,c)=>x.jsxs("div",{className:"depression__question",children:[x.jsx("h3",{id:`question_${c}`,children:u.q}),x.jsx("div",{className:"depression__errmsg",children:n&&t[c]===-1&&"未入力です"}),x.jsx("div",{className:"depression__answer",children:u.a.map((d,p)=>x.jsx("div",{children:x.jsxs("label",{children:[x.jsx("input",{type:"radio",checked:t[c]===p,onChange:()=>o(c,p)}),`${p}. ${d}`]})},`question_${c}_answer_${p}`))})]},`question_${c}`))}),x.jsx("button",{onClick:a,children:"点数を計算する"}),x.jsx("div",{className:"depression__errmsg",children:n}),x.jsx("div",{className:"depression__result",children:i}),x.jsxs("div",{className:"depression__footer",children:["出典",x.jsx("div",{children:x.jsx("a",{href:"https://www.mhlw.go.jp/bunya/shougaihoken/kokoro/dl/02.pdf",children:"https://www.mhlw.go.jp/bunya/shougaihoken/kokoro/dl/02.pdf"})})]})]})},N6="/homepage";function O6(){return M.useEffect(()=>{console.log("production")},[]),x.jsxs(Gk,{basename:N6,children:[x.jsx(kb,{}),x.jsx("div",{className:"page-content",children:x.jsxs(Ik,{children:[x.jsx(To,{path:"/",element:x.jsx(bb,{})}),x.jsx(To,{path:"/board",element:x.jsx(JF,{})}),x.jsx(To,{path:"/weather",element:x.jsx(k6,{})}),x.jsx(To,{path:"/depression",element:x.jsx(b6,{})})]})}),x.jsx(xb,{})]})}pE(document.getElementById("root")).render(x.jsx(M.StrictMode,{children:x.jsx(O6,{})}));
