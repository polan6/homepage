(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Z0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ew={exports:{}},nc={},tw={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ea=Symbol.for("react.element"),QA=Symbol.for("react.portal"),YA=Symbol.for("react.fragment"),XA=Symbol.for("react.strict_mode"),JA=Symbol.for("react.profiler"),ZA=Symbol.for("react.provider"),eR=Symbol.for("react.context"),tR=Symbol.for("react.forward_ref"),nR=Symbol.for("react.suspense"),rR=Symbol.for("react.memo"),iR=Symbol.for("react.lazy"),Ty=Symbol.iterator;function sR(t){return t===null||typeof t!="object"?null:(t=Ty&&t[Ty]||t["@@iterator"],typeof t=="function"?t:null)}var nw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},rw=Object.assign,iw={};function xs(t,e,n){this.props=t,this.context=e,this.refs=iw,this.updater=n||nw}xs.prototype.isReactComponent={};xs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};xs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function sw(){}sw.prototype=xs.prototype;function up(t,e,n){this.props=t,this.context=e,this.refs=iw,this.updater=n||nw}var cp=up.prototype=new sw;cp.constructor=up;rw(cp,xs.prototype);cp.isPureReactComponent=!0;var Iy=Array.isArray,ow=Object.prototype.hasOwnProperty,hp={current:null},aw={key:!0,ref:!0,__self:!0,__source:!0};function lw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ow.call(e,r)&&!aw.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ea,type:t,key:s,ref:o,props:i,_owner:hp.current}}function oR(t,e){return{$$typeof:Ea,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function fp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ea}function aR(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Sy=/\/+/g;function wh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?aR(""+t.key):e.toString(36)}function Nl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ea:case QA:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+wh(o,0):r,Iy(i)?(n="",t!=null&&(n=t.replace(Sy,"$&/")+"/"),Nl(i,e,n,"",function(c){return c})):i!=null&&(fp(i)&&(i=oR(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Sy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Iy(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+wh(s,a);o+=Nl(s,e,n,u,i)}else if(u=sR(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+wh(s,a++),o+=Nl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function sl(t,e,n){if(t==null)return t;var r=[],i=0;return Nl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function lR(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pt={current:null},Ol={transition:null},uR={ReactCurrentDispatcher:pt,ReactCurrentBatchConfig:Ol,ReactCurrentOwner:hp};function uw(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:sl,forEach:function(t,e,n){sl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return sl(t,function(){e++}),e},toArray:function(t){return sl(t,function(e){return e})||[]},only:function(t){if(!fp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=xs;ie.Fragment=YA;ie.Profiler=JA;ie.PureComponent=up;ie.StrictMode=XA;ie.Suspense=nR;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uR;ie.act=uw;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=rw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=hp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)ow.call(e,u)&&!aw.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Ea,type:t.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:eR,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ZA,_context:t},t.Consumer=t};ie.createElement=lw;ie.createFactory=function(t){var e=lw.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:tR,render:t}};ie.isValidElement=fp;ie.lazy=function(t){return{$$typeof:iR,_payload:{_status:-1,_result:t},_init:lR}};ie.memo=function(t,e){return{$$typeof:rR,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=Ol.transition;Ol.transition={};try{t()}finally{Ol.transition=e}};ie.unstable_act=uw;ie.useCallback=function(t,e){return pt.current.useCallback(t,e)};ie.useContext=function(t){return pt.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return pt.current.useDeferredValue(t)};ie.useEffect=function(t,e){return pt.current.useEffect(t,e)};ie.useId=function(){return pt.current.useId()};ie.useImperativeHandle=function(t,e,n){return pt.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return pt.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return pt.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return pt.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return pt.current.useReducer(t,e,n)};ie.useRef=function(t){return pt.current.useRef(t)};ie.useState=function(t){return pt.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return pt.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return pt.current.useTransition()};ie.version="18.3.1";tw.exports=ie;var L=tw.exports;const cw=Z0(L);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cR=L,hR=Symbol.for("react.element"),fR=Symbol.for("react.fragment"),dR=Object.prototype.hasOwnProperty,pR=cR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mR={key:!0,ref:!0,__self:!0,__source:!0};function hw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)dR.call(e,r)&&!mR.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:hR,type:t,key:s,ref:o,props:i,_owner:pR.current}}nc.Fragment=fR;nc.jsx=hw;nc.jsxs=hw;ew.exports=nc;var U=ew.exports,fw={exports:{}},Nt={},dw={exports:{}},pw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(q,J){var ne=q.length;q.push(J);e:for(;0<ne;){var Te=ne-1>>>1,de=q[Te];if(0<i(de,J))q[Te]=J,q[ne]=de,ne=Te;else break e}}function n(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var J=q[0],ne=q.pop();if(ne!==J){q[0]=ne;e:for(var Te=0,de=q.length,be=de>>>1;Te<be;){var Sn=2*(Te+1)-1,An=q[Sn],Rn=Sn+1,Cn=q[Rn];if(0>i(An,ne))Rn<de&&0>i(Cn,An)?(q[Te]=Cn,q[Rn]=ne,Te=Rn):(q[Te]=An,q[Sn]=ne,Te=Sn);else if(Rn<de&&0>i(Cn,ne))q[Te]=Cn,q[Rn]=ne,Te=Rn;else break e}}return J}function i(q,J){var ne=q.sortIndex-J.sortIndex;return ne!==0?ne:q.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],f=1,p=null,m=3,w=!1,E=!1,C=!1,T=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(q){for(var J=n(c);J!==null;){if(J.callback===null)r(c);else if(J.startTime<=q)r(c),J.sortIndex=J.expirationTime,e(u,J);else break;J=n(c)}}function N(q){if(C=!1,I(q),!E)if(n(u)!==null)E=!0,Ws(V);else{var J=n(c);J!==null&&In(N,J.startTime-q)}}function V(q,J){E=!1,C&&(C=!1,_(v),v=-1),w=!0;var ne=m;try{for(I(J),p=n(u);p!==null&&(!(p.expirationTime>J)||q&&!k());){var Te=p.callback;if(typeof Te=="function"){p.callback=null,m=p.priorityLevel;var de=Te(p.expirationTime<=J);J=t.unstable_now(),typeof de=="function"?p.callback=de:p===n(u)&&r(u),I(J)}else r(u);p=n(u)}if(p!==null)var be=!0;else{var Sn=n(c);Sn!==null&&In(N,Sn.startTime-J),be=!1}return be}finally{p=null,m=ne,w=!1}}var j=!1,A=null,v=-1,S=5,R=-1;function k(){return!(t.unstable_now()-R<S)}function x(){if(A!==null){var q=t.unstable_now();R=q;var J=!0;try{J=A(!0,q)}finally{J?P():(j=!1,A=null)}}else j=!1}var P;if(typeof y=="function")P=function(){y(x)};else if(typeof MessageChannel<"u"){var Lt=new MessageChannel,Hr=Lt.port2;Lt.port1.onmessage=x,P=function(){Hr.postMessage(null)}}else P=function(){T(x,0)};function Ws(q){A=q,j||(j=!0,P())}function In(q,J){v=T(function(){q(t.unstable_now())},J)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(q){q.callback=null},t.unstable_continueExecution=function(){E||w||(E=!0,Ws(V))},t.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<q?Math.floor(1e3/q):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(q){switch(m){case 1:case 2:case 3:var J=3;break;default:J=m}var ne=m;m=J;try{return q()}finally{m=ne}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(q,J){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var ne=m;m=q;try{return J()}finally{m=ne}},t.unstable_scheduleCallback=function(q,J,ne){var Te=t.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?Te+ne:Te):ne=Te,q){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=ne+de,q={id:f++,callback:J,priorityLevel:q,startTime:ne,expirationTime:de,sortIndex:-1},ne>Te?(q.sortIndex=ne,e(c,q),n(u)===null&&q===n(c)&&(C?(_(v),v=-1):C=!0,In(N,ne-Te))):(q.sortIndex=de,e(u,q),E||w||(E=!0,Ws(V))),q},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(q){var J=m;return function(){var ne=m;m=J;try{return q.apply(this,arguments)}finally{m=ne}}}})(pw);dw.exports=pw;var gR=dw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yR=L,xt=gR;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var mw=new Set,$o={};function Si(t,e){ms(t,e),ms(t+"Capture",e)}function ms(t,e){for($o[t]=e,t=0;t<e.length;t++)mw.add(e[t])}var zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wf=Object.prototype.hasOwnProperty,vR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ay={},Ry={};function _R(t){return wf.call(Ry,t)?!0:wf.call(Ay,t)?!1:vR.test(t)?Ry[t]=!0:(Ay[t]=!0,!1)}function wR(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ER(t,e,n,r){if(e===null||typeof e>"u"||wR(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Qe[t]=new mt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Qe[e]=new mt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Qe[t]=new mt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Qe[t]=new mt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Qe[t]=new mt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Qe[t]=new mt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Qe[t]=new mt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Qe[t]=new mt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Qe[t]=new mt(t,5,!1,t.toLowerCase(),null,!1,!1)});var dp=/[\-:]([a-z])/g;function pp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(dp,pp);Qe[e]=new mt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(dp,pp);Qe[e]=new mt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(dp,pp);Qe[e]=new mt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Qe[t]=new mt(t,1,!1,t.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Qe[t]=new mt(t,1,!1,t.toLowerCase(),null,!0,!0)});function mp(t,e,n,r){var i=Qe.hasOwnProperty(e)?Qe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ER(e,n,i,r)&&(n=null),r||i===null?_R(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Xn=yR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ol=Symbol.for("react.element"),Bi=Symbol.for("react.portal"),$i=Symbol.for("react.fragment"),gp=Symbol.for("react.strict_mode"),Ef=Symbol.for("react.profiler"),gw=Symbol.for("react.provider"),yw=Symbol.for("react.context"),yp=Symbol.for("react.forward_ref"),Tf=Symbol.for("react.suspense"),If=Symbol.for("react.suspense_list"),vp=Symbol.for("react.memo"),ar=Symbol.for("react.lazy"),vw=Symbol.for("react.offscreen"),Cy=Symbol.iterator;function oo(t){return t===null||typeof t!="object"?null:(t=Cy&&t[Cy]||t["@@iterator"],typeof t=="function"?t:null)}var Re=Object.assign,Eh;function vo(t){if(Eh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Eh=e&&e[1]||""}return`
`+Eh+t}var Th=!1;function Ih(t,e){if(!t||Th)return"";Th=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{Th=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?vo(t):""}function TR(t){switch(t.tag){case 5:return vo(t.type);case 16:return vo("Lazy");case 13:return vo("Suspense");case 19:return vo("SuspenseList");case 0:case 2:case 15:return t=Ih(t.type,!1),t;case 11:return t=Ih(t.type.render,!1),t;case 1:return t=Ih(t.type,!0),t;default:return""}}function Sf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case $i:return"Fragment";case Bi:return"Portal";case Ef:return"Profiler";case gp:return"StrictMode";case Tf:return"Suspense";case If:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case yw:return(t.displayName||"Context")+".Consumer";case gw:return(t._context.displayName||"Context")+".Provider";case yp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case vp:return e=t.displayName||null,e!==null?e:Sf(t.type)||"Memo";case ar:e=t._payload,t=t._init;try{return Sf(t(e))}catch{}}return null}function IR(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Sf(e);case 8:return e===gp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function kr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _w(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function SR(t){var e=_w(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function al(t){t._valueTracker||(t._valueTracker=SR(t))}function ww(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=_w(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function au(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Af(t,e){var n=e.checked;return Re({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Py(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=kr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ew(t,e){e=e.checked,e!=null&&mp(t,"checked",e,!1)}function Rf(t,e){Ew(t,e);var n=kr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Cf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Cf(t,e.type,kr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ky(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Cf(t,e,n){(e!=="number"||au(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var _o=Array.isArray;function is(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+kr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Pf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return Re({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function by(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(_o(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:kr(n)}}function Tw(t,e){var n=kr(e.value),r=kr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function xy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Iw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Iw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ll,Sw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ll=ll||document.createElement("div"),ll.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ll.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function qo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},AR=["Webkit","ms","Moz","O"];Object.keys(Ro).forEach(function(t){AR.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ro[e]=Ro[t]})});function Aw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ro.hasOwnProperty(t)&&Ro[t]?(""+e).trim():e+"px"}function Rw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Aw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var RR=Re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bf(t,e){if(e){if(RR[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function xf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nf=null;function _p(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Of=null,ss=null,os=null;function Ny(t){if(t=Sa(t)){if(typeof Of!="function")throw Error(B(280));var e=t.stateNode;e&&(e=ac(e),Of(t.stateNode,t.type,e))}}function Cw(t){ss?os?os.push(t):os=[t]:ss=t}function Pw(){if(ss){var t=ss,e=os;if(os=ss=null,Ny(t),e)for(t=0;t<e.length;t++)Ny(e[t])}}function kw(t,e){return t(e)}function bw(){}var Sh=!1;function xw(t,e,n){if(Sh)return t(e,n);Sh=!0;try{return kw(t,e,n)}finally{Sh=!1,(ss!==null||os!==null)&&(bw(),Pw())}}function Ho(t,e){var n=t.stateNode;if(n===null)return null;var r=ac(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var Df=!1;if(zn)try{var ao={};Object.defineProperty(ao,"passive",{get:function(){Df=!0}}),window.addEventListener("test",ao,ao),window.removeEventListener("test",ao,ao)}catch{Df=!1}function CR(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Co=!1,lu=null,uu=!1,Lf=null,PR={onError:function(t){Co=!0,lu=t}};function kR(t,e,n,r,i,s,o,a,u){Co=!1,lu=null,CR.apply(PR,arguments)}function bR(t,e,n,r,i,s,o,a,u){if(kR.apply(this,arguments),Co){if(Co){var c=lu;Co=!1,lu=null}else throw Error(B(198));uu||(uu=!0,Lf=c)}}function Ai(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Nw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Oy(t){if(Ai(t)!==t)throw Error(B(188))}function xR(t){var e=t.alternate;if(!e){if(e=Ai(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Oy(i),t;if(s===r)return Oy(i),e;s=s.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function Ow(t){return t=xR(t),t!==null?Dw(t):null}function Dw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Dw(t);if(e!==null)return e;t=t.sibling}return null}var Lw=xt.unstable_scheduleCallback,Dy=xt.unstable_cancelCallback,NR=xt.unstable_shouldYield,OR=xt.unstable_requestPaint,Ne=xt.unstable_now,DR=xt.unstable_getCurrentPriorityLevel,wp=xt.unstable_ImmediatePriority,Vw=xt.unstable_UserBlockingPriority,cu=xt.unstable_NormalPriority,LR=xt.unstable_LowPriority,Mw=xt.unstable_IdlePriority,rc=null,dn=null;function VR(t){if(dn&&typeof dn.onCommitFiberRoot=="function")try{dn.onCommitFiberRoot(rc,t,void 0,(t.current.flags&128)===128)}catch{}}var Xt=Math.clz32?Math.clz32:UR,MR=Math.log,FR=Math.LN2;function UR(t){return t>>>=0,t===0?32:31-(MR(t)/FR|0)|0}var ul=64,cl=4194304;function wo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function hu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=wo(a):(s&=o,s!==0&&(r=wo(s)))}else o=n&~i,o!==0?r=wo(o):s!==0&&(r=wo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Xt(e),i=1<<n,r|=t[n],e&=~i;return r}function jR(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zR(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Xt(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=jR(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function Vf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Fw(){var t=ul;return ul<<=1,!(ul&4194240)&&(ul=64),t}function Ah(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ta(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xt(e),t[e]=n}function BR(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Xt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Ep(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Xt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var fe=0;function Uw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var jw,Tp,zw,Bw,$w,Mf=!1,hl=[],yr=null,vr=null,_r=null,Wo=new Map,Go=new Map,ur=[],$R="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ly(t,e){switch(t){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":_r=null;break;case"pointerover":case"pointerout":Wo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Go.delete(e.pointerId)}}function lo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Sa(e),e!==null&&Tp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function qR(t,e,n,r,i){switch(e){case"focusin":return yr=lo(yr,t,e,n,r,i),!0;case"dragenter":return vr=lo(vr,t,e,n,r,i),!0;case"mouseover":return _r=lo(_r,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Wo.set(s,lo(Wo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Go.set(s,lo(Go.get(s)||null,t,e,n,r,i)),!0}return!1}function qw(t){var e=Zr(t.target);if(e!==null){var n=Ai(e);if(n!==null){if(e=n.tag,e===13){if(e=Nw(n),e!==null){t.blockedOn=e,$w(t.priority,function(){zw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Dl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ff(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Nf=r,n.target.dispatchEvent(r),Nf=null}else return e=Sa(n),e!==null&&Tp(e),t.blockedOn=n,!1;e.shift()}return!0}function Vy(t,e,n){Dl(t)&&n.delete(e)}function HR(){Mf=!1,yr!==null&&Dl(yr)&&(yr=null),vr!==null&&Dl(vr)&&(vr=null),_r!==null&&Dl(_r)&&(_r=null),Wo.forEach(Vy),Go.forEach(Vy)}function uo(t,e){t.blockedOn===e&&(t.blockedOn=null,Mf||(Mf=!0,xt.unstable_scheduleCallback(xt.unstable_NormalPriority,HR)))}function Ko(t){function e(i){return uo(i,t)}if(0<hl.length){uo(hl[0],t);for(var n=1;n<hl.length;n++){var r=hl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(yr!==null&&uo(yr,t),vr!==null&&uo(vr,t),_r!==null&&uo(_r,t),Wo.forEach(e),Go.forEach(e),n=0;n<ur.length;n++)r=ur[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ur.length&&(n=ur[0],n.blockedOn===null);)qw(n),n.blockedOn===null&&ur.shift()}var as=Xn.ReactCurrentBatchConfig,fu=!0;function WR(t,e,n,r){var i=fe,s=as.transition;as.transition=null;try{fe=1,Ip(t,e,n,r)}finally{fe=i,as.transition=s}}function GR(t,e,n,r){var i=fe,s=as.transition;as.transition=null;try{fe=4,Ip(t,e,n,r)}finally{fe=i,as.transition=s}}function Ip(t,e,n,r){if(fu){var i=Ff(t,e,n,r);if(i===null)Lh(t,e,r,du,n),Ly(t,r);else if(qR(i,t,e,n,r))r.stopPropagation();else if(Ly(t,r),e&4&&-1<$R.indexOf(t)){for(;i!==null;){var s=Sa(i);if(s!==null&&jw(s),s=Ff(t,e,n,r),s===null&&Lh(t,e,r,du,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Lh(t,e,r,null,n)}}var du=null;function Ff(t,e,n,r){if(du=null,t=_p(r),t=Zr(t),t!==null)if(e=Ai(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Nw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return du=t,null}function Hw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(DR()){case wp:return 1;case Vw:return 4;case cu:case LR:return 16;case Mw:return 536870912;default:return 16}default:return 16}}var pr=null,Sp=null,Ll=null;function Ww(){if(Ll)return Ll;var t,e=Sp,n=e.length,r,i="value"in pr?pr.value:pr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ll=i.slice(t,1<r?1-r:void 0)}function Vl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function fl(){return!0}function My(){return!1}function Ot(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?fl:My,this.isPropagationStopped=My,this}return Re(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fl)},persist:function(){},isPersistent:fl}),e}var Ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ap=Ot(Ns),Ia=Re({},Ns,{view:0,detail:0}),KR=Ot(Ia),Rh,Ch,co,ic=Re({},Ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==co&&(co&&t.type==="mousemove"?(Rh=t.screenX-co.screenX,Ch=t.screenY-co.screenY):Ch=Rh=0,co=t),Rh)},movementY:function(t){return"movementY"in t?t.movementY:Ch}}),Fy=Ot(ic),QR=Re({},ic,{dataTransfer:0}),YR=Ot(QR),XR=Re({},Ia,{relatedTarget:0}),Ph=Ot(XR),JR=Re({},Ns,{animationName:0,elapsedTime:0,pseudoElement:0}),ZR=Ot(JR),eC=Re({},Ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),tC=Ot(eC),nC=Re({},Ns,{data:0}),Uy=Ot(nC),rC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=sC[t])?!!e[t]:!1}function Rp(){return oC}var aC=Re({},Ia,{key:function(t){if(t.key){var e=rC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Vl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?iC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rp,charCode:function(t){return t.type==="keypress"?Vl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),lC=Ot(aC),uC=Re({},ic,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jy=Ot(uC),cC=Re({},Ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rp}),hC=Ot(cC),fC=Re({},Ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),dC=Ot(fC),pC=Re({},ic,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),mC=Ot(pC),gC=[9,13,27,32],Cp=zn&&"CompositionEvent"in window,Po=null;zn&&"documentMode"in document&&(Po=document.documentMode);var yC=zn&&"TextEvent"in window&&!Po,Gw=zn&&(!Cp||Po&&8<Po&&11>=Po),zy=" ",By=!1;function Kw(t,e){switch(t){case"keyup":return gC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var qi=!1;function vC(t,e){switch(t){case"compositionend":return Qw(e);case"keypress":return e.which!==32?null:(By=!0,zy);case"textInput":return t=e.data,t===zy&&By?null:t;default:return null}}function _C(t,e){if(qi)return t==="compositionend"||!Cp&&Kw(t,e)?(t=Ww(),Ll=Sp=pr=null,qi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Gw&&e.locale!=="ko"?null:e.data;default:return null}}var wC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $y(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!wC[t.type]:e==="textarea"}function Yw(t,e,n,r){Cw(r),e=pu(e,"onChange"),0<e.length&&(n=new Ap("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ko=null,Qo=null;function EC(t){aE(t,0)}function sc(t){var e=Gi(t);if(ww(e))return t}function TC(t,e){if(t==="change")return e}var Xw=!1;if(zn){var kh;if(zn){var bh="oninput"in document;if(!bh){var qy=document.createElement("div");qy.setAttribute("oninput","return;"),bh=typeof qy.oninput=="function"}kh=bh}else kh=!1;Xw=kh&&(!document.documentMode||9<document.documentMode)}function Hy(){ko&&(ko.detachEvent("onpropertychange",Jw),Qo=ko=null)}function Jw(t){if(t.propertyName==="value"&&sc(Qo)){var e=[];Yw(e,Qo,t,_p(t)),xw(EC,e)}}function IC(t,e,n){t==="focusin"?(Hy(),ko=e,Qo=n,ko.attachEvent("onpropertychange",Jw)):t==="focusout"&&Hy()}function SC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return sc(Qo)}function AC(t,e){if(t==="click")return sc(e)}function RC(t,e){if(t==="input"||t==="change")return sc(e)}function CC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var en=typeof Object.is=="function"?Object.is:CC;function Yo(t,e){if(en(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!wf.call(e,i)||!en(t[i],e[i]))return!1}return!0}function Wy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Gy(t,e){var n=Wy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Wy(n)}}function Zw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Zw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function eE(){for(var t=window,e=au();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=au(t.document)}return e}function Pp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function PC(t){var e=eE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Zw(n.ownerDocument.documentElement,n)){if(r!==null&&Pp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Gy(n,s);var o=Gy(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var kC=zn&&"documentMode"in document&&11>=document.documentMode,Hi=null,Uf=null,bo=null,jf=!1;function Ky(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;jf||Hi==null||Hi!==au(r)||(r=Hi,"selectionStart"in r&&Pp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bo&&Yo(bo,r)||(bo=r,r=pu(Uf,"onSelect"),0<r.length&&(e=new Ap("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Hi)))}function dl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Wi={animationend:dl("Animation","AnimationEnd"),animationiteration:dl("Animation","AnimationIteration"),animationstart:dl("Animation","AnimationStart"),transitionend:dl("Transition","TransitionEnd")},xh={},tE={};zn&&(tE=document.createElement("div").style,"AnimationEvent"in window||(delete Wi.animationend.animation,delete Wi.animationiteration.animation,delete Wi.animationstart.animation),"TransitionEvent"in window||delete Wi.transitionend.transition);function oc(t){if(xh[t])return xh[t];if(!Wi[t])return t;var e=Wi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in tE)return xh[t]=e[n];return t}var nE=oc("animationend"),rE=oc("animationiteration"),iE=oc("animationstart"),sE=oc("transitionend"),oE=new Map,Qy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jr(t,e){oE.set(t,e),Si(e,[t])}for(var Nh=0;Nh<Qy.length;Nh++){var Oh=Qy[Nh],bC=Oh.toLowerCase(),xC=Oh[0].toUpperCase()+Oh.slice(1);jr(bC,"on"+xC)}jr(nE,"onAnimationEnd");jr(rE,"onAnimationIteration");jr(iE,"onAnimationStart");jr("dblclick","onDoubleClick");jr("focusin","onFocus");jr("focusout","onBlur");jr(sE,"onTransitionEnd");ms("onMouseEnter",["mouseout","mouseover"]);ms("onMouseLeave",["mouseout","mouseover"]);ms("onPointerEnter",["pointerout","pointerover"]);ms("onPointerLeave",["pointerout","pointerover"]);Si("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Si("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Si("onBeforeInput",["compositionend","keypress","textInput","paste"]);Si("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Si("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Si("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),NC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Eo));function Yy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,bR(r,e,void 0,t),t.currentTarget=null}function aE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;Yy(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;Yy(i,a,c),s=u}}}if(uu)throw t=Lf,uu=!1,Lf=null,t}function ye(t,e){var n=e[Hf];n===void 0&&(n=e[Hf]=new Set);var r=t+"__bubble";n.has(r)||(lE(e,t,2,!1),n.add(r))}function Dh(t,e,n){var r=0;e&&(r|=4),lE(n,t,r,e)}var pl="_reactListening"+Math.random().toString(36).slice(2);function Xo(t){if(!t[pl]){t[pl]=!0,mw.forEach(function(n){n!=="selectionchange"&&(NC.has(n)||Dh(n,!1,t),Dh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[pl]||(e[pl]=!0,Dh("selectionchange",!1,e))}}function lE(t,e,n,r){switch(Hw(e)){case 1:var i=WR;break;case 4:i=GR;break;default:i=Ip}n=i.bind(null,e,n,t),i=void 0,!Df||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Lh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Zr(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}xw(function(){var c=s,f=_p(n),p=[];e:{var m=oE.get(t);if(m!==void 0){var w=Ap,E=t;switch(t){case"keypress":if(Vl(n)===0)break e;case"keydown":case"keyup":w=lC;break;case"focusin":E="focus",w=Ph;break;case"focusout":E="blur",w=Ph;break;case"beforeblur":case"afterblur":w=Ph;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Fy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=YR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=hC;break;case nE:case rE:case iE:w=ZR;break;case sE:w=dC;break;case"scroll":w=KR;break;case"wheel":w=mC;break;case"copy":case"cut":case"paste":w=tC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=jy}var C=(e&4)!==0,T=!C&&t==="scroll",_=C?m!==null?m+"Capture":null:m;C=[];for(var y=c,I;y!==null;){I=y;var N=I.stateNode;if(I.tag===5&&N!==null&&(I=N,_!==null&&(N=Ho(y,_),N!=null&&C.push(Jo(y,N,I)))),T)break;y=y.return}0<C.length&&(m=new w(m,E,null,n,f),p.push({event:m,listeners:C}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",m&&n!==Nf&&(E=n.relatedTarget||n.fromElement)&&(Zr(E)||E[Bn]))break e;if((w||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,w?(E=n.relatedTarget||n.toElement,w=c,E=E?Zr(E):null,E!==null&&(T=Ai(E),E!==T||E.tag!==5&&E.tag!==6)&&(E=null)):(w=null,E=c),w!==E)){if(C=Fy,N="onMouseLeave",_="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(C=jy,N="onPointerLeave",_="onPointerEnter",y="pointer"),T=w==null?m:Gi(w),I=E==null?m:Gi(E),m=new C(N,y+"leave",w,n,f),m.target=T,m.relatedTarget=I,N=null,Zr(f)===c&&(C=new C(_,y+"enter",E,n,f),C.target=I,C.relatedTarget=T,N=C),T=N,w&&E)t:{for(C=w,_=E,y=0,I=C;I;I=Mi(I))y++;for(I=0,N=_;N;N=Mi(N))I++;for(;0<y-I;)C=Mi(C),y--;for(;0<I-y;)_=Mi(_),I--;for(;y--;){if(C===_||_!==null&&C===_.alternate)break t;C=Mi(C),_=Mi(_)}C=null}else C=null;w!==null&&Xy(p,m,w,C,!1),E!==null&&T!==null&&Xy(p,T,E,C,!0)}}e:{if(m=c?Gi(c):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var V=TC;else if($y(m))if(Xw)V=RC;else{V=SC;var j=IC}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(V=AC);if(V&&(V=V(t,c))){Yw(p,V,n,f);break e}j&&j(t,m,c),t==="focusout"&&(j=m._wrapperState)&&j.controlled&&m.type==="number"&&Cf(m,"number",m.value)}switch(j=c?Gi(c):window,t){case"focusin":($y(j)||j.contentEditable==="true")&&(Hi=j,Uf=c,bo=null);break;case"focusout":bo=Uf=Hi=null;break;case"mousedown":jf=!0;break;case"contextmenu":case"mouseup":case"dragend":jf=!1,Ky(p,n,f);break;case"selectionchange":if(kC)break;case"keydown":case"keyup":Ky(p,n,f)}var A;if(Cp)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else qi?Kw(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(Gw&&n.locale!=="ko"&&(qi||v!=="onCompositionStart"?v==="onCompositionEnd"&&qi&&(A=Ww()):(pr=f,Sp="value"in pr?pr.value:pr.textContent,qi=!0)),j=pu(c,v),0<j.length&&(v=new Uy(v,t,null,n,f),p.push({event:v,listeners:j}),A?v.data=A:(A=Qw(n),A!==null&&(v.data=A)))),(A=yC?vC(t,n):_C(t,n))&&(c=pu(c,"onBeforeInput"),0<c.length&&(f=new Uy("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=A))}aE(p,e)})}function Jo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function pu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ho(t,n),s!=null&&r.unshift(Jo(t,s,i)),s=Ho(t,e),s!=null&&r.push(Jo(t,s,i))),t=t.return}return r}function Mi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Xy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=Ho(n,s),u!=null&&o.unshift(Jo(n,u,a))):i||(u=Ho(n,s),u!=null&&o.push(Jo(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var OC=/\r\n?/g,DC=/\u0000|\uFFFD/g;function Jy(t){return(typeof t=="string"?t:""+t).replace(OC,`
`).replace(DC,"")}function ml(t,e,n){if(e=Jy(e),Jy(t)!==e&&n)throw Error(B(425))}function mu(){}var zf=null,Bf=null;function $f(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var qf=typeof setTimeout=="function"?setTimeout:void 0,LC=typeof clearTimeout=="function"?clearTimeout:void 0,Zy=typeof Promise=="function"?Promise:void 0,VC=typeof queueMicrotask=="function"?queueMicrotask:typeof Zy<"u"?function(t){return Zy.resolve(null).then(t).catch(MC)}:qf;function MC(t){setTimeout(function(){throw t})}function Vh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ko(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ko(e)}function wr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ev(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Os=Math.random().toString(36).slice(2),cn="__reactFiber$"+Os,Zo="__reactProps$"+Os,Bn="__reactContainer$"+Os,Hf="__reactEvents$"+Os,FC="__reactListeners$"+Os,UC="__reactHandles$"+Os;function Zr(t){var e=t[cn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Bn]||n[cn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ev(t);t!==null;){if(n=t[cn])return n;t=ev(t)}return e}t=n,n=t.parentNode}return null}function Sa(t){return t=t[cn]||t[Bn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Gi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function ac(t){return t[Zo]||null}var Wf=[],Ki=-1;function zr(t){return{current:t}}function _e(t){0>Ki||(t.current=Wf[Ki],Wf[Ki]=null,Ki--)}function me(t,e){Ki++,Wf[Ki]=t.current,t.current=e}var br={},ot=zr(br),_t=zr(!1),fi=br;function gs(t,e){var n=t.type.contextTypes;if(!n)return br;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function wt(t){return t=t.childContextTypes,t!=null}function gu(){_e(_t),_e(ot)}function tv(t,e,n){if(ot.current!==br)throw Error(B(168));me(ot,e),me(_t,n)}function uE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,IR(t)||"Unknown",i));return Re({},n,r)}function yu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||br,fi=ot.current,me(ot,t),me(_t,_t.current),!0}function nv(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=uE(t,e,fi),r.__reactInternalMemoizedMergedChildContext=t,_e(_t),_e(ot),me(ot,t)):_e(_t),me(_t,n)}var xn=null,lc=!1,Mh=!1;function cE(t){xn===null?xn=[t]:xn.push(t)}function jC(t){lc=!0,cE(t)}function Br(){if(!Mh&&xn!==null){Mh=!0;var t=0,e=fe;try{var n=xn;for(fe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}xn=null,lc=!1}catch(i){throw xn!==null&&(xn=xn.slice(t+1)),Lw(wp,Br),i}finally{fe=e,Mh=!1}}return null}var Qi=[],Yi=0,vu=null,_u=0,Vt=[],Mt=0,di=null,On=1,Dn="";function Yr(t,e){Qi[Yi++]=_u,Qi[Yi++]=vu,vu=t,_u=e}function hE(t,e,n){Vt[Mt++]=On,Vt[Mt++]=Dn,Vt[Mt++]=di,di=t;var r=On;t=Dn;var i=32-Xt(r)-1;r&=~(1<<i),n+=1;var s=32-Xt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,On=1<<32-Xt(e)+i|n<<i|r,Dn=s+t}else On=1<<s|n<<i|r,Dn=t}function kp(t){t.return!==null&&(Yr(t,1),hE(t,1,0))}function bp(t){for(;t===vu;)vu=Qi[--Yi],Qi[Yi]=null,_u=Qi[--Yi],Qi[Yi]=null;for(;t===di;)di=Vt[--Mt],Vt[Mt]=null,Dn=Vt[--Mt],Vt[Mt]=null,On=Vt[--Mt],Vt[Mt]=null}var Pt=null,Ct=null,Ee=!1,Qt=null;function fE(t,e){var n=Ut(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function rv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pt=t,Ct=wr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pt=t,Ct=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=di!==null?{id:On,overflow:Dn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ut(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pt=t,Ct=null,!0):!1;default:return!1}}function Gf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Kf(t){if(Ee){var e=Ct;if(e){var n=e;if(!rv(t,e)){if(Gf(t))throw Error(B(418));e=wr(n.nextSibling);var r=Pt;e&&rv(t,e)?fE(r,n):(t.flags=t.flags&-4097|2,Ee=!1,Pt=t)}}else{if(Gf(t))throw Error(B(418));t.flags=t.flags&-4097|2,Ee=!1,Pt=t}}}function iv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pt=t}function gl(t){if(t!==Pt)return!1;if(!Ee)return iv(t),Ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!$f(t.type,t.memoizedProps)),e&&(e=Ct)){if(Gf(t))throw dE(),Error(B(418));for(;e;)fE(t,e),e=wr(e.nextSibling)}if(iv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ct=wr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ct=null}}else Ct=Pt?wr(t.stateNode.nextSibling):null;return!0}function dE(){for(var t=Ct;t;)t=wr(t.nextSibling)}function ys(){Ct=Pt=null,Ee=!1}function xp(t){Qt===null?Qt=[t]:Qt.push(t)}var zC=Xn.ReactCurrentBatchConfig;function ho(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function yl(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function sv(t){var e=t._init;return e(t._payload)}function pE(t){function e(_,y){if(t){var I=_.deletions;I===null?(_.deletions=[y],_.flags|=16):I.push(y)}}function n(_,y){if(!t)return null;for(;y!==null;)e(_,y),y=y.sibling;return null}function r(_,y){for(_=new Map;y!==null;)y.key!==null?_.set(y.key,y):_.set(y.index,y),y=y.sibling;return _}function i(_,y){return _=Sr(_,y),_.index=0,_.sibling=null,_}function s(_,y,I){return _.index=I,t?(I=_.alternate,I!==null?(I=I.index,I<y?(_.flags|=2,y):I):(_.flags|=2,y)):(_.flags|=1048576,y)}function o(_){return t&&_.alternate===null&&(_.flags|=2),_}function a(_,y,I,N){return y===null||y.tag!==6?(y=qh(I,_.mode,N),y.return=_,y):(y=i(y,I),y.return=_,y)}function u(_,y,I,N){var V=I.type;return V===$i?f(_,y,I.props.children,N,I.key):y!==null&&(y.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===ar&&sv(V)===y.type)?(N=i(y,I.props),N.ref=ho(_,y,I),N.return=_,N):(N=$l(I.type,I.key,I.props,null,_.mode,N),N.ref=ho(_,y,I),N.return=_,N)}function c(_,y,I,N){return y===null||y.tag!==4||y.stateNode.containerInfo!==I.containerInfo||y.stateNode.implementation!==I.implementation?(y=Hh(I,_.mode,N),y.return=_,y):(y=i(y,I.children||[]),y.return=_,y)}function f(_,y,I,N,V){return y===null||y.tag!==7?(y=li(I,_.mode,N,V),y.return=_,y):(y=i(y,I),y.return=_,y)}function p(_,y,I){if(typeof y=="string"&&y!==""||typeof y=="number")return y=qh(""+y,_.mode,I),y.return=_,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ol:return I=$l(y.type,y.key,y.props,null,_.mode,I),I.ref=ho(_,null,y),I.return=_,I;case Bi:return y=Hh(y,_.mode,I),y.return=_,y;case ar:var N=y._init;return p(_,N(y._payload),I)}if(_o(y)||oo(y))return y=li(y,_.mode,I,null),y.return=_,y;yl(_,y)}return null}function m(_,y,I,N){var V=y!==null?y.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return V!==null?null:a(_,y,""+I,N);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case ol:return I.key===V?u(_,y,I,N):null;case Bi:return I.key===V?c(_,y,I,N):null;case ar:return V=I._init,m(_,y,V(I._payload),N)}if(_o(I)||oo(I))return V!==null?null:f(_,y,I,N,null);yl(_,I)}return null}function w(_,y,I,N,V){if(typeof N=="string"&&N!==""||typeof N=="number")return _=_.get(I)||null,a(y,_,""+N,V);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case ol:return _=_.get(N.key===null?I:N.key)||null,u(y,_,N,V);case Bi:return _=_.get(N.key===null?I:N.key)||null,c(y,_,N,V);case ar:var j=N._init;return w(_,y,I,j(N._payload),V)}if(_o(N)||oo(N))return _=_.get(I)||null,f(y,_,N,V,null);yl(y,N)}return null}function E(_,y,I,N){for(var V=null,j=null,A=y,v=y=0,S=null;A!==null&&v<I.length;v++){A.index>v?(S=A,A=null):S=A.sibling;var R=m(_,A,I[v],N);if(R===null){A===null&&(A=S);break}t&&A&&R.alternate===null&&e(_,A),y=s(R,y,v),j===null?V=R:j.sibling=R,j=R,A=S}if(v===I.length)return n(_,A),Ee&&Yr(_,v),V;if(A===null){for(;v<I.length;v++)A=p(_,I[v],N),A!==null&&(y=s(A,y,v),j===null?V=A:j.sibling=A,j=A);return Ee&&Yr(_,v),V}for(A=r(_,A);v<I.length;v++)S=w(A,_,v,I[v],N),S!==null&&(t&&S.alternate!==null&&A.delete(S.key===null?v:S.key),y=s(S,y,v),j===null?V=S:j.sibling=S,j=S);return t&&A.forEach(function(k){return e(_,k)}),Ee&&Yr(_,v),V}function C(_,y,I,N){var V=oo(I);if(typeof V!="function")throw Error(B(150));if(I=V.call(I),I==null)throw Error(B(151));for(var j=V=null,A=y,v=y=0,S=null,R=I.next();A!==null&&!R.done;v++,R=I.next()){A.index>v?(S=A,A=null):S=A.sibling;var k=m(_,A,R.value,N);if(k===null){A===null&&(A=S);break}t&&A&&k.alternate===null&&e(_,A),y=s(k,y,v),j===null?V=k:j.sibling=k,j=k,A=S}if(R.done)return n(_,A),Ee&&Yr(_,v),V;if(A===null){for(;!R.done;v++,R=I.next())R=p(_,R.value,N),R!==null&&(y=s(R,y,v),j===null?V=R:j.sibling=R,j=R);return Ee&&Yr(_,v),V}for(A=r(_,A);!R.done;v++,R=I.next())R=w(A,_,v,R.value,N),R!==null&&(t&&R.alternate!==null&&A.delete(R.key===null?v:R.key),y=s(R,y,v),j===null?V=R:j.sibling=R,j=R);return t&&A.forEach(function(x){return e(_,x)}),Ee&&Yr(_,v),V}function T(_,y,I,N){if(typeof I=="object"&&I!==null&&I.type===$i&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case ol:e:{for(var V=I.key,j=y;j!==null;){if(j.key===V){if(V=I.type,V===$i){if(j.tag===7){n(_,j.sibling),y=i(j,I.props.children),y.return=_,_=y;break e}}else if(j.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===ar&&sv(V)===j.type){n(_,j.sibling),y=i(j,I.props),y.ref=ho(_,j,I),y.return=_,_=y;break e}n(_,j);break}else e(_,j);j=j.sibling}I.type===$i?(y=li(I.props.children,_.mode,N,I.key),y.return=_,_=y):(N=$l(I.type,I.key,I.props,null,_.mode,N),N.ref=ho(_,y,I),N.return=_,_=N)}return o(_);case Bi:e:{for(j=I.key;y!==null;){if(y.key===j)if(y.tag===4&&y.stateNode.containerInfo===I.containerInfo&&y.stateNode.implementation===I.implementation){n(_,y.sibling),y=i(y,I.children||[]),y.return=_,_=y;break e}else{n(_,y);break}else e(_,y);y=y.sibling}y=Hh(I,_.mode,N),y.return=_,_=y}return o(_);case ar:return j=I._init,T(_,y,j(I._payload),N)}if(_o(I))return E(_,y,I,N);if(oo(I))return C(_,y,I,N);yl(_,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,y!==null&&y.tag===6?(n(_,y.sibling),y=i(y,I),y.return=_,_=y):(n(_,y),y=qh(I,_.mode,N),y.return=_,_=y),o(_)):n(_,y)}return T}var vs=pE(!0),mE=pE(!1),wu=zr(null),Eu=null,Xi=null,Np=null;function Op(){Np=Xi=Eu=null}function Dp(t){var e=wu.current;_e(wu),t._currentValue=e}function Qf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ls(t,e){Eu=t,Np=Xi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(vt=!0),t.firstContext=null)}function $t(t){var e=t._currentValue;if(Np!==t)if(t={context:t,memoizedValue:e,next:null},Xi===null){if(Eu===null)throw Error(B(308));Xi=t,Eu.dependencies={lanes:0,firstContext:t}}else Xi=Xi.next=t;return e}var ei=null;function Lp(t){ei===null?ei=[t]:ei.push(t)}function gE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Lp(e)):(n.next=i.next,i.next=n),e.interleaved=n,$n(t,r)}function $n(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var lr=!1;function Vp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Un(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Er(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,$n(t,n)}return i=r.interleaved,i===null?(e.next=e,Lp(r)):(e.next=i.next,i.next=e),r.interleaved=e,$n(t,n)}function Ml(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ep(t,n)}}function ov(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Tu(t,e,n,r){var i=t.updateQueue;lr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=c=u=null,a=s;do{var m=a.lane,w=a.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var E=t,C=a;switch(m=e,w=n,C.tag){case 1:if(E=C.payload,typeof E=="function"){p=E.call(w,p,m);break e}p=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=C.payload,m=typeof E=="function"?E.call(w,p,m):E,m==null)break e;p=Re({},p,m);break e;case 2:lr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else w={eventTime:w,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=w,u=p):f=f.next=w,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);mi|=o,t.lanes=o,t.memoizedState=p}}function av(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var Aa={},pn=zr(Aa),ea=zr(Aa),ta=zr(Aa);function ti(t){if(t===Aa)throw Error(B(174));return t}function Mp(t,e){switch(me(ta,e),me(ea,t),me(pn,Aa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:kf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=kf(e,t)}_e(pn),me(pn,e)}function _s(){_e(pn),_e(ea),_e(ta)}function vE(t){ti(ta.current);var e=ti(pn.current),n=kf(e,t.type);e!==n&&(me(ea,t),me(pn,n))}function Fp(t){ea.current===t&&(_e(pn),_e(ea))}var Ie=zr(0);function Iu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Fh=[];function Up(){for(var t=0;t<Fh.length;t++)Fh[t]._workInProgressVersionPrimary=null;Fh.length=0}var Fl=Xn.ReactCurrentDispatcher,Uh=Xn.ReactCurrentBatchConfig,pi=0,Se=null,Me=null,Be=null,Su=!1,xo=!1,na=0,BC=0;function et(){throw Error(B(321))}function jp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!en(t[n],e[n]))return!1;return!0}function zp(t,e,n,r,i,s){if(pi=s,Se=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Fl.current=t===null||t.memoizedState===null?WC:GC,t=n(r,i),xo){s=0;do{if(xo=!1,na=0,25<=s)throw Error(B(301));s+=1,Be=Me=null,e.updateQueue=null,Fl.current=KC,t=n(r,i)}while(xo)}if(Fl.current=Au,e=Me!==null&&Me.next!==null,pi=0,Be=Me=Se=null,Su=!1,e)throw Error(B(300));return t}function Bp(){var t=na!==0;return na=0,t}function ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Se.memoizedState=Be=t:Be=Be.next=t,Be}function qt(){if(Me===null){var t=Se.alternate;t=t!==null?t.memoizedState:null}else t=Me.next;var e=Be===null?Se.memoizedState:Be.next;if(e!==null)Be=e,Me=t;else{if(t===null)throw Error(B(310));Me=t,t={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Be===null?Se.memoizedState=Be=t:Be=Be.next=t}return Be}function ra(t,e){return typeof e=="function"?e(t):e}function jh(t){var e=qt(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=Me,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var f=c.lane;if((pi&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=p,o=r):u=u.next=p,Se.lanes|=f,mi|=f}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,en(r,e.memoizedState)||(vt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Se.lanes|=s,mi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function zh(t){var e=qt(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);en(s,e.memoizedState)||(vt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function _E(){}function wE(t,e){var n=Se,r=qt(),i=e(),s=!en(r.memoizedState,i);if(s&&(r.memoizedState=i,vt=!0),r=r.queue,$p(IE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,ia(9,TE.bind(null,n,r,i,e),void 0,null),$e===null)throw Error(B(349));pi&30||EE(n,e,i)}return i}function EE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function TE(t,e,n,r){e.value=n,e.getSnapshot=r,SE(e)&&AE(t)}function IE(t,e,n){return n(function(){SE(e)&&AE(t)})}function SE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!en(t,n)}catch{return!0}}function AE(t){var e=$n(t,1);e!==null&&Jt(e,t,1,-1)}function lv(t){var e=ln();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:t},e.queue=t,t=t.dispatch=HC.bind(null,Se,t),[e.memoizedState,t]}function ia(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function RE(){return qt().memoizedState}function Ul(t,e,n,r){var i=ln();Se.flags|=t,i.memoizedState=ia(1|e,n,void 0,r===void 0?null:r)}function uc(t,e,n,r){var i=qt();r=r===void 0?null:r;var s=void 0;if(Me!==null){var o=Me.memoizedState;if(s=o.destroy,r!==null&&jp(r,o.deps)){i.memoizedState=ia(e,n,s,r);return}}Se.flags|=t,i.memoizedState=ia(1|e,n,s,r)}function uv(t,e){return Ul(8390656,8,t,e)}function $p(t,e){return uc(2048,8,t,e)}function CE(t,e){return uc(4,2,t,e)}function PE(t,e){return uc(4,4,t,e)}function kE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function bE(t,e,n){return n=n!=null?n.concat([t]):null,uc(4,4,kE.bind(null,e,t),n)}function qp(){}function xE(t,e){var n=qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&jp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function NE(t,e){var n=qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&jp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function OE(t,e,n){return pi&21?(en(n,e)||(n=Fw(),Se.lanes|=n,mi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,vt=!0),t.memoizedState=n)}function $C(t,e){var n=fe;fe=n!==0&&4>n?n:4,t(!0);var r=Uh.transition;Uh.transition={};try{t(!1),e()}finally{fe=n,Uh.transition=r}}function DE(){return qt().memoizedState}function qC(t,e,n){var r=Ir(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},LE(t))VE(e,n);else if(n=gE(t,e,n,r),n!==null){var i=ft();Jt(n,t,r,i),ME(n,e,r)}}function HC(t,e,n){var r=Ir(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(LE(t))VE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,en(a,o)){var u=e.interleaved;u===null?(i.next=i,Lp(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=gE(t,e,i,r),n!==null&&(i=ft(),Jt(n,t,r,i),ME(n,e,r))}}function LE(t){var e=t.alternate;return t===Se||e!==null&&e===Se}function VE(t,e){xo=Su=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ME(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ep(t,n)}}var Au={readContext:$t,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},WC={readContext:$t,useCallback:function(t,e){return ln().memoizedState=[t,e===void 0?null:e],t},useContext:$t,useEffect:uv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ul(4194308,4,kE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ul(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ul(4,2,t,e)},useMemo:function(t,e){var n=ln();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ln();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=qC.bind(null,Se,t),[r.memoizedState,t]},useRef:function(t){var e=ln();return t={current:t},e.memoizedState=t},useState:lv,useDebugValue:qp,useDeferredValue:function(t){return ln().memoizedState=t},useTransition:function(){var t=lv(!1),e=t[0];return t=$C.bind(null,t[1]),ln().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Se,i=ln();if(Ee){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),$e===null)throw Error(B(349));pi&30||EE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,uv(IE.bind(null,r,s,t),[t]),r.flags|=2048,ia(9,TE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=ln(),e=$e.identifierPrefix;if(Ee){var n=Dn,r=On;n=(r&~(1<<32-Xt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=na++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=BC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},GC={readContext:$t,useCallback:xE,useContext:$t,useEffect:$p,useImperativeHandle:bE,useInsertionEffect:CE,useLayoutEffect:PE,useMemo:NE,useReducer:jh,useRef:RE,useState:function(){return jh(ra)},useDebugValue:qp,useDeferredValue:function(t){var e=qt();return OE(e,Me.memoizedState,t)},useTransition:function(){var t=jh(ra)[0],e=qt().memoizedState;return[t,e]},useMutableSource:_E,useSyncExternalStore:wE,useId:DE,unstable_isNewReconciler:!1},KC={readContext:$t,useCallback:xE,useContext:$t,useEffect:$p,useImperativeHandle:bE,useInsertionEffect:CE,useLayoutEffect:PE,useMemo:NE,useReducer:zh,useRef:RE,useState:function(){return zh(ra)},useDebugValue:qp,useDeferredValue:function(t){var e=qt();return Me===null?e.memoizedState=t:OE(e,Me.memoizedState,t)},useTransition:function(){var t=zh(ra)[0],e=qt().memoizedState;return[t,e]},useMutableSource:_E,useSyncExternalStore:wE,useId:DE,unstable_isNewReconciler:!1};function Gt(t,e){if(t&&t.defaultProps){e=Re({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Yf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Re({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var cc={isMounted:function(t){return(t=t._reactInternals)?Ai(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ft(),i=Ir(t),s=Un(r,i);s.payload=e,n!=null&&(s.callback=n),e=Er(t,s,i),e!==null&&(Jt(e,t,i,r),Ml(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ft(),i=Ir(t),s=Un(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Er(t,s,i),e!==null&&(Jt(e,t,i,r),Ml(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ft(),r=Ir(t),i=Un(n,r);i.tag=2,e!=null&&(i.callback=e),e=Er(t,i,r),e!==null&&(Jt(e,t,r,n),Ml(e,t,r))}};function cv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Yo(n,r)||!Yo(i,s):!0}function FE(t,e,n){var r=!1,i=br,s=e.contextType;return typeof s=="object"&&s!==null?s=$t(s):(i=wt(e)?fi:ot.current,r=e.contextTypes,s=(r=r!=null)?gs(t,i):br),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=cc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function hv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&cc.enqueueReplaceState(e,e.state,null)}function Xf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Vp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=$t(s):(s=wt(e)?fi:ot.current,i.context=gs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Yf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&cc.enqueueReplaceState(i,i.state,null),Tu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ws(t,e){try{var n="",r=e;do n+=TR(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Bh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Jf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var QC=typeof WeakMap=="function"?WeakMap:Map;function UE(t,e,n){n=Un(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Cu||(Cu=!0,ld=r),Jf(t,e)},n}function jE(t,e,n){n=Un(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Jf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Jf(t,e),typeof r!="function"&&(Tr===null?Tr=new Set([this]):Tr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function fv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new QC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=uP.bind(null,t,e,n),e.then(t,t))}function dv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function pv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Un(-1,1),e.tag=2,Er(n,e,1))),n.lanes|=1),t)}var YC=Xn.ReactCurrentOwner,vt=!1;function ht(t,e,n,r){e.child=t===null?mE(e,null,n,r):vs(e,t.child,n,r)}function mv(t,e,n,r,i){n=n.render;var s=e.ref;return ls(e,i),r=zp(t,e,n,r,s,i),n=Bp(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,qn(t,e,i)):(Ee&&n&&kp(e),e.flags|=1,ht(t,e,r,i),e.child)}function gv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Jp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,zE(t,e,s,r,i)):(t=$l(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Yo,n(o,r)&&t.ref===e.ref)return qn(t,e,i)}return e.flags|=1,t=Sr(s,r),t.ref=e.ref,t.return=e,e.child=t}function zE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Yo(s,r)&&t.ref===e.ref)if(vt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(vt=!0);else return e.lanes=t.lanes,qn(t,e,i)}return Zf(t,e,n,r,i)}function BE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(Zi,Rt),Rt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,me(Zi,Rt),Rt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,me(Zi,Rt),Rt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,me(Zi,Rt),Rt|=r;return ht(t,e,i,n),e.child}function $E(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Zf(t,e,n,r,i){var s=wt(n)?fi:ot.current;return s=gs(e,s),ls(e,i),n=zp(t,e,n,r,s,i),r=Bp(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,qn(t,e,i)):(Ee&&r&&kp(e),e.flags|=1,ht(t,e,n,i),e.child)}function yv(t,e,n,r,i){if(wt(n)){var s=!0;yu(e)}else s=!1;if(ls(e,i),e.stateNode===null)jl(t,e),FE(e,n,r),Xf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=$t(c):(c=wt(n)?fi:ot.current,c=gs(e,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&hv(e,o,r,c),lr=!1;var m=e.memoizedState;o.state=m,Tu(e,r,o,i),u=e.memoizedState,a!==r||m!==u||_t.current||lr?(typeof f=="function"&&(Yf(e,n,f,r),u=e.memoizedState),(a=lr||cv(e,n,a,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,yE(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Gt(e.type,a),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=$t(u):(u=wt(n)?fi:ot.current,u=gs(e,u));var w=n.getDerivedStateFromProps;(f=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||m!==u)&&hv(e,o,r,u),lr=!1,m=e.memoizedState,o.state=m,Tu(e,r,o,i);var E=e.memoizedState;a!==p||m!==E||_t.current||lr?(typeof w=="function"&&(Yf(e,n,w,r),E=e.memoizedState),(c=lr||cv(e,n,c,r,m,E,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,E,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,E,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=E),o.props=r,o.state=E,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return ed(t,e,n,r,s,i)}function ed(t,e,n,r,i,s){$E(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&nv(e,n,!1),qn(t,e,s);r=e.stateNode,YC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=vs(e,t.child,null,s),e.child=vs(e,null,a,s)):ht(t,e,a,s),e.memoizedState=r.state,i&&nv(e,n,!0),e.child}function qE(t){var e=t.stateNode;e.pendingContext?tv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&tv(t,e.context,!1),Mp(t,e.containerInfo)}function vv(t,e,n,r,i){return ys(),xp(i),e.flags|=256,ht(t,e,n,r),e.child}var td={dehydrated:null,treeContext:null,retryLane:0};function nd(t){return{baseLanes:t,cachePool:null,transitions:null}}function HE(t,e,n){var r=e.pendingProps,i=Ie.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),me(Ie,i&1),t===null)return Kf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=dc(o,r,0,null),t=li(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=nd(n),e.memoizedState=td,t):Hp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return XC(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Sr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Sr(a,s):(s=li(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?nd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=td,r}return s=t.child,t=s.sibling,r=Sr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Hp(t,e){return e=dc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function vl(t,e,n,r){return r!==null&&xp(r),vs(e,t.child,null,n),t=Hp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function XC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Bh(Error(B(422))),vl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=dc({mode:"visible",children:r.children},i,0,null),s=li(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&vs(e,t.child,null,o),e.child.memoizedState=nd(o),e.memoizedState=td,s);if(!(e.mode&1))return vl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(B(419)),r=Bh(s,r,void 0),vl(t,e,o,r)}if(a=(o&t.childLanes)!==0,vt||a){if(r=$e,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,$n(t,i),Jt(r,t,i,-1))}return Xp(),r=Bh(Error(B(421))),vl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=cP.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ct=wr(i.nextSibling),Pt=e,Ee=!0,Qt=null,t!==null&&(Vt[Mt++]=On,Vt[Mt++]=Dn,Vt[Mt++]=di,On=t.id,Dn=t.overflow,di=e),e=Hp(e,r.children),e.flags|=4096,e)}function _v(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Qf(t.return,e,n)}function $h(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function WE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ht(t,e,r.children,n),r=Ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_v(t,n,e);else if(t.tag===19)_v(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(me(Ie,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Iu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),$h(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Iu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}$h(e,!0,n,null,s);break;case"together":$h(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function jl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function qn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),mi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=Sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function JC(t,e,n){switch(e.tag){case 3:qE(e),ys();break;case 5:vE(e);break;case 1:wt(e.type)&&yu(e);break;case 4:Mp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;me(wu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(me(Ie,Ie.current&1),e.flags|=128,null):n&e.child.childLanes?HE(t,e,n):(me(Ie,Ie.current&1),t=qn(t,e,n),t!==null?t.sibling:null);me(Ie,Ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return WE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),me(Ie,Ie.current),r)break;return null;case 22:case 23:return e.lanes=0,BE(t,e,n)}return qn(t,e,n)}var GE,rd,KE,QE;GE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};rd=function(){};KE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ti(pn.current);var s=null;switch(n){case"input":i=Af(t,i),r=Af(t,r),s=[];break;case"select":i=Re({},i,{value:void 0}),r=Re({},r,{value:void 0}),s=[];break;case"textarea":i=Pf(t,i),r=Pf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=mu)}bf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&($o.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&($o.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ye("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};QE=function(t,e,n,r){n!==r&&(e.flags|=4)};function fo(t,e){if(!Ee)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function tt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function ZC(t,e,n){var r=e.pendingProps;switch(bp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(e),null;case 1:return wt(e.type)&&gu(),tt(e),null;case 3:return r=e.stateNode,_s(),_e(_t),_e(ot),Up(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(gl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qt!==null&&(hd(Qt),Qt=null))),rd(t,e),tt(e),null;case 5:Fp(e);var i=ti(ta.current);if(n=e.type,t!==null&&e.stateNode!=null)KE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return tt(e),null}if(t=ti(pn.current),gl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[cn]=e,r[Zo]=s,t=(e.mode&1)!==0,n){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(i=0;i<Eo.length;i++)ye(Eo[i],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":Py(r,s),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ye("invalid",r);break;case"textarea":by(r,s),ye("invalid",r)}bf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ml(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ml(r.textContent,a,t),i=["children",""+a]):$o.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ye("scroll",r)}switch(n){case"input":al(r),ky(r,s,!0);break;case"textarea":al(r),xy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=mu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Iw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[cn]=e,t[Zo]=r,GE(t,e,!1,!1),e.stateNode=t;e:{switch(o=xf(n,r),n){case"dialog":ye("cancel",t),ye("close",t),i=r;break;case"iframe":case"object":case"embed":ye("load",t),i=r;break;case"video":case"audio":for(i=0;i<Eo.length;i++)ye(Eo[i],t);i=r;break;case"source":ye("error",t),i=r;break;case"img":case"image":case"link":ye("error",t),ye("load",t),i=r;break;case"details":ye("toggle",t),i=r;break;case"input":Py(t,r),i=Af(t,r),ye("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Re({},r,{value:void 0}),ye("invalid",t);break;case"textarea":by(t,r),i=Pf(t,r),ye("invalid",t);break;default:i=r}bf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?Rw(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Sw(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&qo(t,u):typeof u=="number"&&qo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&($o.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ye("scroll",t):u!=null&&mp(t,s,u,o))}switch(n){case"input":al(t),ky(t,r,!1);break;case"textarea":al(t),xy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+kr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?is(t,!!r.multiple,s,!1):r.defaultValue!=null&&is(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=mu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return tt(e),null;case 6:if(t&&e.stateNode!=null)QE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=ti(ta.current),ti(pn.current),gl(e)){if(r=e.stateNode,n=e.memoizedProps,r[cn]=e,(s=r.nodeValue!==n)&&(t=Pt,t!==null))switch(t.tag){case 3:ml(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ml(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[cn]=e,e.stateNode=r}return tt(e),null;case 13:if(_e(Ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ee&&Ct!==null&&e.mode&1&&!(e.flags&128))dE(),ys(),e.flags|=98560,s=!1;else if(s=gl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(B(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(B(317));s[cn]=e}else ys(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;tt(e),s=!1}else Qt!==null&&(hd(Qt),Qt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ie.current&1?Fe===0&&(Fe=3):Xp())),e.updateQueue!==null&&(e.flags|=4),tt(e),null);case 4:return _s(),rd(t,e),t===null&&Xo(e.stateNode.containerInfo),tt(e),null;case 10:return Dp(e.type._context),tt(e),null;case 17:return wt(e.type)&&gu(),tt(e),null;case 19:if(_e(Ie),s=e.memoizedState,s===null)return tt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)fo(s,!1);else{if(Fe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Iu(t),o!==null){for(e.flags|=128,fo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return me(Ie,Ie.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ne()>Es&&(e.flags|=128,r=!0,fo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Iu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),fo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ee)return tt(e),null}else 2*Ne()-s.renderingStartTime>Es&&n!==1073741824&&(e.flags|=128,r=!0,fo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ne(),e.sibling=null,n=Ie.current,me(Ie,r?n&1|2:n&1),e):(tt(e),null);case 22:case 23:return Yp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Rt&1073741824&&(tt(e),e.subtreeFlags&6&&(e.flags|=8192)):tt(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function eP(t,e){switch(bp(e),e.tag){case 1:return wt(e.type)&&gu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _s(),_e(_t),_e(ot),Up(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Fp(e),null;case 13:if(_e(Ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));ys()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _e(Ie),null;case 4:return _s(),null;case 10:return Dp(e.type._context),null;case 22:case 23:return Yp(),null;case 24:return null;default:return null}}var _l=!1,it=!1,tP=typeof WeakSet=="function"?WeakSet:Set,W=null;function Ji(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ke(t,e,r)}else n.current=null}function id(t,e,n){try{n()}catch(r){ke(t,e,r)}}var wv=!1;function nP(t,e){if(zf=fu,t=eE(),Pp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,f=0,p=t,m=null;t:for(;;){for(var w;p!==n||i!==0&&p.nodeType!==3||(a=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(w=p.firstChild)!==null;)m=p,p=w;for(;;){if(p===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++f===r&&(u=o),(w=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=w}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bf={focusedElem:t,selectionRange:n},fu=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var E=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var C=E.memoizedProps,T=E.memoizedState,_=e.stateNode,y=_.getSnapshotBeforeUpdate(e.elementType===e.type?C:Gt(e.type,C),T);_.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(N){ke(e,e.return,N)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return E=wv,wv=!1,E}function No(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&id(e,n,s)}i=i.next}while(i!==r)}}function hc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function sd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function YE(t){var e=t.alternate;e!==null&&(t.alternate=null,YE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[cn],delete e[Zo],delete e[Hf],delete e[FC],delete e[UC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function XE(t){return t.tag===5||t.tag===3||t.tag===4}function Ev(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||XE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function od(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=mu));else if(r!==4&&(t=t.child,t!==null))for(od(t,e,n),t=t.sibling;t!==null;)od(t,e,n),t=t.sibling}function ad(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ad(t,e,n),t=t.sibling;t!==null;)ad(t,e,n),t=t.sibling}var He=null,Kt=!1;function rr(t,e,n){for(n=n.child;n!==null;)JE(t,e,n),n=n.sibling}function JE(t,e,n){if(dn&&typeof dn.onCommitFiberUnmount=="function")try{dn.onCommitFiberUnmount(rc,n)}catch{}switch(n.tag){case 5:it||Ji(n,e);case 6:var r=He,i=Kt;He=null,rr(t,e,n),He=r,Kt=i,He!==null&&(Kt?(t=He,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):He.removeChild(n.stateNode));break;case 18:He!==null&&(Kt?(t=He,n=n.stateNode,t.nodeType===8?Vh(t.parentNode,n):t.nodeType===1&&Vh(t,n),Ko(t)):Vh(He,n.stateNode));break;case 4:r=He,i=Kt,He=n.stateNode.containerInfo,Kt=!0,rr(t,e,n),He=r,Kt=i;break;case 0:case 11:case 14:case 15:if(!it&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&id(n,e,o),i=i.next}while(i!==r)}rr(t,e,n);break;case 1:if(!it&&(Ji(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ke(n,e,a)}rr(t,e,n);break;case 21:rr(t,e,n);break;case 22:n.mode&1?(it=(r=it)||n.memoizedState!==null,rr(t,e,n),it=r):rr(t,e,n);break;default:rr(t,e,n)}}function Tv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new tP),e.forEach(function(r){var i=hP.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Wt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:He=a.stateNode,Kt=!1;break e;case 3:He=a.stateNode.containerInfo,Kt=!0;break e;case 4:He=a.stateNode.containerInfo,Kt=!0;break e}a=a.return}if(He===null)throw Error(B(160));JE(s,o,i),He=null,Kt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){ke(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ZE(e,t),e=e.sibling}function ZE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Wt(e,t),on(t),r&4){try{No(3,t,t.return),hc(3,t)}catch(C){ke(t,t.return,C)}try{No(5,t,t.return)}catch(C){ke(t,t.return,C)}}break;case 1:Wt(e,t),on(t),r&512&&n!==null&&Ji(n,n.return);break;case 5:if(Wt(e,t),on(t),r&512&&n!==null&&Ji(n,n.return),t.flags&32){var i=t.stateNode;try{qo(i,"")}catch(C){ke(t,t.return,C)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ew(i,s),xf(a,o);var c=xf(a,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?Rw(i,p):f==="dangerouslySetInnerHTML"?Sw(i,p):f==="children"?qo(i,p):mp(i,f,p,c)}switch(a){case"input":Rf(i,s);break;case"textarea":Tw(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?is(i,!!s.multiple,w,!1):m!==!!s.multiple&&(s.defaultValue!=null?is(i,!!s.multiple,s.defaultValue,!0):is(i,!!s.multiple,s.multiple?[]:"",!1))}i[Zo]=s}catch(C){ke(t,t.return,C)}}break;case 6:if(Wt(e,t),on(t),r&4){if(t.stateNode===null)throw Error(B(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(C){ke(t,t.return,C)}}break;case 3:if(Wt(e,t),on(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ko(e.containerInfo)}catch(C){ke(t,t.return,C)}break;case 4:Wt(e,t),on(t);break;case 13:Wt(e,t),on(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Kp=Ne())),r&4&&Tv(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(it=(c=it)||f,Wt(e,t),it=c):Wt(e,t),on(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(W=t,f=t.child;f!==null;){for(p=W=f;W!==null;){switch(m=W,w=m.child,m.tag){case 0:case 11:case 14:case 15:No(4,m,m.return);break;case 1:Ji(m,m.return);var E=m.stateNode;if(typeof E.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,E.props=e.memoizedProps,E.state=e.memoizedState,E.componentWillUnmount()}catch(C){ke(r,n,C)}}break;case 5:Ji(m,m.return);break;case 22:if(m.memoizedState!==null){Sv(p);continue}}w!==null?(w.return=m,W=w):Sv(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Aw("display",o))}catch(C){ke(t,t.return,C)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(C){ke(t,t.return,C)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Wt(e,t),on(t),r&4&&Tv(t);break;case 21:break;default:Wt(e,t),on(t)}}function on(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(XE(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(qo(i,""),r.flags&=-33);var s=Ev(t);ad(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Ev(t);od(t,a,o);break;default:throw Error(B(161))}}catch(u){ke(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function rP(t,e,n){W=t,e1(t)}function e1(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||_l;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||it;a=_l;var c=it;if(_l=o,(it=u)&&!c)for(W=i;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?Av(i):u!==null?(u.return=o,W=u):Av(i);for(;s!==null;)W=s,e1(s),s=s.sibling;W=i,_l=a,it=c}Iv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):Iv(t)}}function Iv(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:it||hc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!it)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Gt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&av(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}av(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Ko(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}it||e.flags&512&&sd(e)}catch(m){ke(e,e.return,m)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function Sv(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function Av(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{hc(4,e)}catch(u){ke(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){ke(e,i,u)}}var s=e.return;try{sd(e)}catch(u){ke(e,s,u)}break;case 5:var o=e.return;try{sd(e)}catch(u){ke(e,o,u)}}}catch(u){ke(e,e.return,u)}if(e===t){W=null;break}var a=e.sibling;if(a!==null){a.return=e.return,W=a;break}W=e.return}}var iP=Math.ceil,Ru=Xn.ReactCurrentDispatcher,Wp=Xn.ReactCurrentOwner,jt=Xn.ReactCurrentBatchConfig,ue=0,$e=null,De=null,Ke=0,Rt=0,Zi=zr(0),Fe=0,sa=null,mi=0,fc=0,Gp=0,Oo=null,yt=null,Kp=0,Es=1/0,bn=null,Cu=!1,ld=null,Tr=null,wl=!1,mr=null,Pu=0,Do=0,ud=null,zl=-1,Bl=0;function ft(){return ue&6?Ne():zl!==-1?zl:zl=Ne()}function Ir(t){return t.mode&1?ue&2&&Ke!==0?Ke&-Ke:zC.transition!==null?(Bl===0&&(Bl=Fw()),Bl):(t=fe,t!==0||(t=window.event,t=t===void 0?16:Hw(t.type)),t):1}function Jt(t,e,n,r){if(50<Do)throw Do=0,ud=null,Error(B(185));Ta(t,n,r),(!(ue&2)||t!==$e)&&(t===$e&&(!(ue&2)&&(fc|=n),Fe===4&&cr(t,Ke)),Et(t,r),n===1&&ue===0&&!(e.mode&1)&&(Es=Ne()+500,lc&&Br()))}function Et(t,e){var n=t.callbackNode;zR(t,e);var r=hu(t,t===$e?Ke:0);if(r===0)n!==null&&Dy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Dy(n),e===1)t.tag===0?jC(Rv.bind(null,t)):cE(Rv.bind(null,t)),VC(function(){!(ue&6)&&Br()}),n=null;else{switch(Uw(r)){case 1:n=wp;break;case 4:n=Vw;break;case 16:n=cu;break;case 536870912:n=Mw;break;default:n=cu}n=l1(n,t1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function t1(t,e){if(zl=-1,Bl=0,ue&6)throw Error(B(327));var n=t.callbackNode;if(us()&&t.callbackNode!==n)return null;var r=hu(t,t===$e?Ke:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ku(t,r);else{e=r;var i=ue;ue|=2;var s=r1();($e!==t||Ke!==e)&&(bn=null,Es=Ne()+500,ai(t,e));do try{aP();break}catch(a){n1(t,a)}while(!0);Op(),Ru.current=s,ue=i,De!==null?e=0:($e=null,Ke=0,e=Fe)}if(e!==0){if(e===2&&(i=Vf(t),i!==0&&(r=i,e=cd(t,i))),e===1)throw n=sa,ai(t,0),cr(t,r),Et(t,Ne()),n;if(e===6)cr(t,r);else{if(i=t.current.alternate,!(r&30)&&!sP(i)&&(e=ku(t,r),e===2&&(s=Vf(t),s!==0&&(r=s,e=cd(t,s))),e===1))throw n=sa,ai(t,0),cr(t,r),Et(t,Ne()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:Xr(t,yt,bn);break;case 3:if(cr(t,r),(r&130023424)===r&&(e=Kp+500-Ne(),10<e)){if(hu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ft(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=qf(Xr.bind(null,t,yt,bn),e);break}Xr(t,yt,bn);break;case 4:if(cr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Xt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*iP(r/1960))-r,10<r){t.timeoutHandle=qf(Xr.bind(null,t,yt,bn),r);break}Xr(t,yt,bn);break;case 5:Xr(t,yt,bn);break;default:throw Error(B(329))}}}return Et(t,Ne()),t.callbackNode===n?t1.bind(null,t):null}function cd(t,e){var n=Oo;return t.current.memoizedState.isDehydrated&&(ai(t,e).flags|=256),t=ku(t,e),t!==2&&(e=yt,yt=n,e!==null&&hd(e)),t}function hd(t){yt===null?yt=t:yt.push.apply(yt,t)}function sP(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!en(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function cr(t,e){for(e&=~Gp,e&=~fc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xt(e),r=1<<n;t[n]=-1,e&=~r}}function Rv(t){if(ue&6)throw Error(B(327));us();var e=hu(t,0);if(!(e&1))return Et(t,Ne()),null;var n=ku(t,e);if(t.tag!==0&&n===2){var r=Vf(t);r!==0&&(e=r,n=cd(t,r))}if(n===1)throw n=sa,ai(t,0),cr(t,e),Et(t,Ne()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Xr(t,yt,bn),Et(t,Ne()),null}function Qp(t,e){var n=ue;ue|=1;try{return t(e)}finally{ue=n,ue===0&&(Es=Ne()+500,lc&&Br())}}function gi(t){mr!==null&&mr.tag===0&&!(ue&6)&&us();var e=ue;ue|=1;var n=jt.transition,r=fe;try{if(jt.transition=null,fe=1,t)return t()}finally{fe=r,jt.transition=n,ue=e,!(ue&6)&&Br()}}function Yp(){Rt=Zi.current,_e(Zi)}function ai(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,LC(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(bp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&gu();break;case 3:_s(),_e(_t),_e(ot),Up();break;case 5:Fp(r);break;case 4:_s();break;case 13:_e(Ie);break;case 19:_e(Ie);break;case 10:Dp(r.type._context);break;case 22:case 23:Yp()}n=n.return}if($e=t,De=t=Sr(t.current,null),Ke=Rt=e,Fe=0,sa=null,Gp=fc=mi=0,yt=Oo=null,ei!==null){for(e=0;e<ei.length;e++)if(n=ei[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ei=null}return t}function n1(t,e){do{var n=De;try{if(Op(),Fl.current=Au,Su){for(var r=Se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Su=!1}if(pi=0,Be=Me=Se=null,xo=!1,na=0,Wp.current=null,n===null||n.return===null){Fe=1,sa=e,De=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=Ke,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=a,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var w=dv(o);if(w!==null){w.flags&=-257,pv(w,o,a,s,e),w.mode&1&&fv(s,c,e),e=w,u=c;var E=e.updateQueue;if(E===null){var C=new Set;C.add(u),e.updateQueue=C}else E.add(u);break e}else{if(!(e&1)){fv(s,c,e),Xp();break e}u=Error(B(426))}}else if(Ee&&a.mode&1){var T=dv(o);if(T!==null){!(T.flags&65536)&&(T.flags|=256),pv(T,o,a,s,e),xp(ws(u,a));break e}}s=u=ws(u,a),Fe!==4&&(Fe=2),Oo===null?Oo=[s]:Oo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var _=UE(s,u,e);ov(s,_);break e;case 1:a=u;var y=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(Tr===null||!Tr.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var N=jE(s,a,e);ov(s,N);break e}}s=s.return}while(s!==null)}s1(n)}catch(V){e=V,De===n&&n!==null&&(De=n=n.return);continue}break}while(!0)}function r1(){var t=Ru.current;return Ru.current=Au,t===null?Au:t}function Xp(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),$e===null||!(mi&268435455)&&!(fc&268435455)||cr($e,Ke)}function ku(t,e){var n=ue;ue|=2;var r=r1();($e!==t||Ke!==e)&&(bn=null,ai(t,e));do try{oP();break}catch(i){n1(t,i)}while(!0);if(Op(),ue=n,Ru.current=r,De!==null)throw Error(B(261));return $e=null,Ke=0,Fe}function oP(){for(;De!==null;)i1(De)}function aP(){for(;De!==null&&!NR();)i1(De)}function i1(t){var e=a1(t.alternate,t,Rt);t.memoizedProps=t.pendingProps,e===null?s1(t):De=e,Wp.current=null}function s1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=eP(n,e),n!==null){n.flags&=32767,De=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Fe=6,De=null;return}}else if(n=ZC(n,e,Rt),n!==null){De=n;return}if(e=e.sibling,e!==null){De=e;return}De=e=t}while(e!==null);Fe===0&&(Fe=5)}function Xr(t,e,n){var r=fe,i=jt.transition;try{jt.transition=null,fe=1,lP(t,e,n,r)}finally{jt.transition=i,fe=r}return null}function lP(t,e,n,r){do us();while(mr!==null);if(ue&6)throw Error(B(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(BR(t,s),t===$e&&(De=$e=null,Ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wl||(wl=!0,l1(cu,function(){return us(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=jt.transition,jt.transition=null;var o=fe;fe=1;var a=ue;ue|=4,Wp.current=null,nP(t,n),ZE(n,t),PC(Bf),fu=!!zf,Bf=zf=null,t.current=n,rP(n),OR(),ue=a,fe=o,jt.transition=s}else t.current=n;if(wl&&(wl=!1,mr=t,Pu=i),s=t.pendingLanes,s===0&&(Tr=null),VR(n.stateNode),Et(t,Ne()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Cu)throw Cu=!1,t=ld,ld=null,t;return Pu&1&&t.tag!==0&&us(),s=t.pendingLanes,s&1?t===ud?Do++:(Do=0,ud=t):Do=0,Br(),null}function us(){if(mr!==null){var t=Uw(Pu),e=jt.transition,n=fe;try{if(jt.transition=null,fe=16>t?16:t,mr===null)var r=!1;else{if(t=mr,mr=null,Pu=0,ue&6)throw Error(B(331));var i=ue;for(ue|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(W=c;W!==null;){var f=W;switch(f.tag){case 0:case 11:case 15:No(8,f,s)}var p=f.child;if(p!==null)p.return=f,W=p;else for(;W!==null;){f=W;var m=f.sibling,w=f.return;if(YE(f),f===c){W=null;break}if(m!==null){m.return=w,W=m;break}W=w}}}var E=s.alternate;if(E!==null){var C=E.child;if(C!==null){E.child=null;do{var T=C.sibling;C.sibling=null,C=T}while(C!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:No(9,s,s.return)}var _=s.sibling;if(_!==null){_.return=s.return,W=_;break e}W=s.return}}var y=t.current;for(W=y;W!==null;){o=W;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,W=I;else e:for(o=y;W!==null;){if(a=W,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:hc(9,a)}}catch(V){ke(a,a.return,V)}if(a===o){W=null;break e}var N=a.sibling;if(N!==null){N.return=a.return,W=N;break e}W=a.return}}if(ue=i,Br(),dn&&typeof dn.onPostCommitFiberRoot=="function")try{dn.onPostCommitFiberRoot(rc,t)}catch{}r=!0}return r}finally{fe=n,jt.transition=e}}return!1}function Cv(t,e,n){e=ws(n,e),e=UE(t,e,1),t=Er(t,e,1),e=ft(),t!==null&&(Ta(t,1,e),Et(t,e))}function ke(t,e,n){if(t.tag===3)Cv(t,t,n);else for(;e!==null;){if(e.tag===3){Cv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Tr===null||!Tr.has(r))){t=ws(n,t),t=jE(e,t,1),e=Er(e,t,1),t=ft(),e!==null&&(Ta(e,1,t),Et(e,t));break}}e=e.return}}function uP(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ft(),t.pingedLanes|=t.suspendedLanes&n,$e===t&&(Ke&n)===n&&(Fe===4||Fe===3&&(Ke&130023424)===Ke&&500>Ne()-Kp?ai(t,0):Gp|=n),Et(t,e)}function o1(t,e){e===0&&(t.mode&1?(e=cl,cl<<=1,!(cl&130023424)&&(cl=4194304)):e=1);var n=ft();t=$n(t,e),t!==null&&(Ta(t,e,n),Et(t,n))}function cP(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),o1(t,n)}function hP(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),o1(t,n)}var a1;a1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||_t.current)vt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return vt=!1,JC(t,e,n);vt=!!(t.flags&131072)}else vt=!1,Ee&&e.flags&1048576&&hE(e,_u,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;jl(t,e),t=e.pendingProps;var i=gs(e,ot.current);ls(e,n),i=zp(null,e,r,t,i,n);var s=Bp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,wt(r)?(s=!0,yu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vp(e),i.updater=cc,e.stateNode=i,i._reactInternals=e,Xf(e,r,t,n),e=ed(null,e,r,!0,s,n)):(e.tag=0,Ee&&s&&kp(e),ht(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(jl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=dP(r),t=Gt(r,t),i){case 0:e=Zf(null,e,r,t,n);break e;case 1:e=yv(null,e,r,t,n);break e;case 11:e=mv(null,e,r,t,n);break e;case 14:e=gv(null,e,r,Gt(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Gt(r,i),Zf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Gt(r,i),yv(t,e,r,i,n);case 3:e:{if(qE(e),t===null)throw Error(B(387));r=e.pendingProps,s=e.memoizedState,i=s.element,yE(t,e),Tu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ws(Error(B(423)),e),e=vv(t,e,r,n,i);break e}else if(r!==i){i=ws(Error(B(424)),e),e=vv(t,e,r,n,i);break e}else for(Ct=wr(e.stateNode.containerInfo.firstChild),Pt=e,Ee=!0,Qt=null,n=mE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ys(),r===i){e=qn(t,e,n);break e}ht(t,e,r,n)}e=e.child}return e;case 5:return vE(e),t===null&&Kf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,$f(r,i)?o=null:s!==null&&$f(r,s)&&(e.flags|=32),$E(t,e),ht(t,e,o,n),e.child;case 6:return t===null&&Kf(e),null;case 13:return HE(t,e,n);case 4:return Mp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=vs(e,null,r,n):ht(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Gt(r,i),mv(t,e,r,i,n);case 7:return ht(t,e,e.pendingProps,n),e.child;case 8:return ht(t,e,e.pendingProps.children,n),e.child;case 12:return ht(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,me(wu,r._currentValue),r._currentValue=o,s!==null)if(en(s.value,o)){if(s.children===i.children&&!_t.current){e=qn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Un(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Qf(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(B(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Qf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ht(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ls(e,n),i=$t(i),r=r(i),e.flags|=1,ht(t,e,r,n),e.child;case 14:return r=e.type,i=Gt(r,e.pendingProps),i=Gt(r.type,i),gv(t,e,r,i,n);case 15:return zE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Gt(r,i),jl(t,e),e.tag=1,wt(r)?(t=!0,yu(e)):t=!1,ls(e,n),FE(e,r,i),Xf(e,r,i,n),ed(null,e,r,!0,t,n);case 19:return WE(t,e,n);case 22:return BE(t,e,n)}throw Error(B(156,e.tag))};function l1(t,e){return Lw(t,e)}function fP(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(t,e,n,r){return new fP(t,e,n,r)}function Jp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function dP(t){if(typeof t=="function")return Jp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===yp)return 11;if(t===vp)return 14}return 2}function Sr(t,e){var n=t.alternate;return n===null?(n=Ut(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function $l(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Jp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case $i:return li(n.children,i,s,e);case gp:o=8,i|=8;break;case Ef:return t=Ut(12,n,e,i|2),t.elementType=Ef,t.lanes=s,t;case Tf:return t=Ut(13,n,e,i),t.elementType=Tf,t.lanes=s,t;case If:return t=Ut(19,n,e,i),t.elementType=If,t.lanes=s,t;case vw:return dc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case gw:o=10;break e;case yw:o=9;break e;case yp:o=11;break e;case vp:o=14;break e;case ar:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=Ut(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function li(t,e,n,r){return t=Ut(7,t,r,e),t.lanes=n,t}function dc(t,e,n,r){return t=Ut(22,t,r,e),t.elementType=vw,t.lanes=n,t.stateNode={isHidden:!1},t}function qh(t,e,n){return t=Ut(6,t,null,e),t.lanes=n,t}function Hh(t,e,n){return e=Ut(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function pP(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ah(0),this.expirationTimes=Ah(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ah(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Zp(t,e,n,r,i,s,o,a,u){return t=new pP(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ut(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vp(s),t}function mP(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function u1(t){if(!t)return br;t=t._reactInternals;e:{if(Ai(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(wt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(wt(n))return uE(t,n,e)}return e}function c1(t,e,n,r,i,s,o,a,u){return t=Zp(n,r,!0,t,i,s,o,a,u),t.context=u1(null),n=t.current,r=ft(),i=Ir(n),s=Un(r,i),s.callback=e??null,Er(n,s,i),t.current.lanes=i,Ta(t,i,r),Et(t,r),t}function pc(t,e,n,r){var i=e.current,s=ft(),o=Ir(i);return n=u1(n),e.context===null?e.context=n:e.pendingContext=n,e=Un(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Er(i,e,o),t!==null&&(Jt(t,i,o,s),Ml(t,i,o)),o}function bu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Pv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function em(t,e){Pv(t,e),(t=t.alternate)&&Pv(t,e)}function gP(){return null}var h1=typeof reportError=="function"?reportError:function(t){console.error(t)};function tm(t){this._internalRoot=t}mc.prototype.render=tm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));pc(t,e,null,null)};mc.prototype.unmount=tm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;gi(function(){pc(null,t,null,null)}),e[Bn]=null}};function mc(t){this._internalRoot=t}mc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Bw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ur.length&&e!==0&&e<ur[n].priority;n++);ur.splice(n,0,t),n===0&&qw(t)}};function nm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function gc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function kv(){}function yP(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=bu(o);s.call(c)}}var o=c1(e,r,t,0,null,!1,!1,"",kv);return t._reactRootContainer=o,t[Bn]=o.current,Xo(t.nodeType===8?t.parentNode:t),gi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=bu(u);a.call(c)}}var u=Zp(t,0,!1,null,null,!1,!1,"",kv);return t._reactRootContainer=u,t[Bn]=u.current,Xo(t.nodeType===8?t.parentNode:t),gi(function(){pc(e,u,n,r)}),u}function yc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=bu(o);a.call(u)}}pc(e,o,t,i)}else o=yP(n,e,t,i,r);return bu(o)}jw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=wo(e.pendingLanes);n!==0&&(Ep(e,n|1),Et(e,Ne()),!(ue&6)&&(Es=Ne()+500,Br()))}break;case 13:gi(function(){var r=$n(t,1);if(r!==null){var i=ft();Jt(r,t,1,i)}}),em(t,1)}};Tp=function(t){if(t.tag===13){var e=$n(t,134217728);if(e!==null){var n=ft();Jt(e,t,134217728,n)}em(t,134217728)}};zw=function(t){if(t.tag===13){var e=Ir(t),n=$n(t,e);if(n!==null){var r=ft();Jt(n,t,e,r)}em(t,e)}};Bw=function(){return fe};$w=function(t,e){var n=fe;try{return fe=t,e()}finally{fe=n}};Of=function(t,e,n){switch(e){case"input":if(Rf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ac(r);if(!i)throw Error(B(90));ww(r),Rf(r,i)}}}break;case"textarea":Tw(t,n);break;case"select":e=n.value,e!=null&&is(t,!!n.multiple,e,!1)}};kw=Qp;bw=gi;var vP={usingClientEntryPoint:!1,Events:[Sa,Gi,ac,Cw,Pw,Qp]},po={findFiberByHostInstance:Zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_P={bundleType:po.bundleType,version:po.version,rendererPackageName:po.rendererPackageName,rendererConfig:po.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ow(t),t===null?null:t.stateNode},findFiberByHostInstance:po.findFiberByHostInstance||gP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var El=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!El.isDisabled&&El.supportsFiber)try{rc=El.inject(_P),dn=El}catch{}}Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vP;Nt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nm(e))throw Error(B(200));return mP(t,e,null,n)};Nt.createRoot=function(t,e){if(!nm(t))throw Error(B(299));var n=!1,r="",i=h1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Zp(t,1,!1,null,null,n,!1,r,i),t[Bn]=e.current,Xo(t.nodeType===8?t.parentNode:t),new tm(e)};Nt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=Ow(e),t=t===null?null:t.stateNode,t};Nt.flushSync=function(t){return gi(t)};Nt.hydrate=function(t,e,n){if(!gc(e))throw Error(B(200));return yc(null,t,e,!0,n)};Nt.hydrateRoot=function(t,e,n){if(!nm(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=h1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=c1(e,null,t,1,n??null,i,!1,s,o),t[Bn]=e.current,Xo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new mc(e)};Nt.render=function(t,e,n){if(!gc(e))throw Error(B(200));return yc(null,t,e,!1,n)};Nt.unmountComponentAtNode=function(t){if(!gc(t))throw Error(B(40));return t._reactRootContainer?(gi(function(){yc(null,null,t,!1,function(){t._reactRootContainer=null,t[Bn]=null})}),!0):!1};Nt.unstable_batchedUpdates=Qp;Nt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!gc(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return yc(t,e,n,!1,r)};Nt.version="18.3.1-next-f1338f8080-20240426";function f1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f1)}catch(t){console.error(t)}}f1(),fw.exports=Nt;var wP=fw.exports,d1,bv=wP;d1=bv.createRoot,bv.hydrateRoot;var rm={};Object.defineProperty(rm,"__esModule",{value:!0});rm.parse=CP;rm.serialize=PP;const EP=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,TP=/^[\u0021-\u003A\u003C-\u007E]*$/,IP=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,SP=/^[\u0020-\u003A\u003D-\u007E]*$/,AP=Object.prototype.toString,RP=(()=>{const t=function(){};return t.prototype=Object.create(null),t})();function CP(t,e){const n=new RP,r=t.length;if(r<2)return n;const i=(e==null?void 0:e.decode)||kP;let s=0;do{const o=t.indexOf("=",s);if(o===-1)break;const a=t.indexOf(";",s),u=a===-1?r:a;if(o>u){s=t.lastIndexOf(";",o-1)+1;continue}const c=xv(t,s,o),f=Nv(t,o,c),p=t.slice(c,f);if(n[p]===void 0){let m=xv(t,o+1,u),w=Nv(t,u,m);const E=i(t.slice(m,w));n[p]=E}s=u+1}while(s<r);return n}function xv(t,e,n){do{const r=t.charCodeAt(e);if(r!==32&&r!==9)return e}while(++e<n);return n}function Nv(t,e,n){for(;e>n;){const r=t.charCodeAt(--e);if(r!==32&&r!==9)return e+1}return n}function PP(t,e,n){const r=(n==null?void 0:n.encode)||encodeURIComponent;if(!EP.test(t))throw new TypeError(`argument name is invalid: ${t}`);const i=r(e);if(!TP.test(i))throw new TypeError(`argument val is invalid: ${e}`);let s=t+"="+i;if(!n)return s;if(n.maxAge!==void 0){if(!Number.isInteger(n.maxAge))throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);s+="; Max-Age="+n.maxAge}if(n.domain){if(!IP.test(n.domain))throw new TypeError(`option domain is invalid: ${n.domain}`);s+="; Domain="+n.domain}if(n.path){if(!SP.test(n.path))throw new TypeError(`option path is invalid: ${n.path}`);s+="; Path="+n.path}if(n.expires){if(!bP(n.expires)||!Number.isFinite(n.expires.valueOf()))throw new TypeError(`option expires is invalid: ${n.expires}`);s+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(s+="; HttpOnly"),n.secure&&(s+="; Secure"),n.partitioned&&(s+="; Partitioned"),n.priority)switch(typeof n.priority=="string"?n.priority.toLowerCase():void 0){case"low":s+="; Priority=Low";break;case"medium":s+="; Priority=Medium";break;case"high":s+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${n.priority}`)}if(n.sameSite)switch(typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite){case!0:case"strict":s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"none":s+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${n.sameSite}`)}return s}function kP(t){if(t.indexOf("%")===-1)return t;try{return decodeURIComponent(t)}catch{return t}}function bP(t){return AP.call(t)==="[object Date]"}/**
 * react-router v7.0.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Ov="popstate";function xP(t={}){function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return fd("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:oa(i)}return OP(e,n,null,t)}function Ae(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function $r(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function NP(){return Math.random().toString(36).substring(2,10)}function Dv(t,e){return{usr:t.state,key:t.key,idx:e}}function fd(t,e,n=null,r){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?Ds(e):e,state:n,key:e&&e.key||r||NP()}}function oa({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Ds(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substring(r),t=t.substring(0,r)),t&&(e.pathname=t)}return e}function OP(t,e,n,r={}){let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a="POP",u=null,c=f();c==null&&(c=0,o.replaceState({...o.state,idx:c},""));function f(){return(o.state||{idx:null}).idx}function p(){a="POP";let T=f(),_=T==null?null:T-c;c=T,u&&u({action:a,location:C.location,delta:_})}function m(T,_){a="PUSH";let y=fd(C.location,T,_);c=f()+1;let I=Dv(y,c),N=C.createHref(y);try{o.pushState(I,"",N)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;i.location.assign(N)}s&&u&&u({action:a,location:C.location,delta:1})}function w(T,_){a="REPLACE";let y=fd(C.location,T,_);c=f();let I=Dv(y,c),N=C.createHref(y);o.replaceState(I,"",N),s&&u&&u({action:a,location:C.location,delta:0})}function E(T){let _=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof T=="string"?T:oa(T);return y=y.replace(/ $/,"%20"),Ae(_,`No window.location.(origin|href) available to create URL for href: ${y}`),new URL(y,_)}let C={get action(){return a},get location(){return t(i,o)},listen(T){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Ov,p),u=T,()=>{i.removeEventListener(Ov,p),u=null}},createHref(T){return e(i,T)},createURL:E,encodeLocation(T){let _=E(T);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:m,replace:w,go(T){return o.go(T)}};return C}function p1(t,e,n="/"){return DP(t,e,n,!1)}function DP(t,e,n,r){let i=typeof e=="string"?Ds(e):e,s=xr(i.pathname||"/",n);if(s==null)return null;let o=m1(t);LP(o);let a=null;for(let u=0;a==null&&u<o.length;++u){let c=WP(s);a=qP(o[u],c,r)}return a}function m1(t,e=[],n=[],r=""){let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Ae(u.relativePath.startsWith(r),`Absolute route path "${u.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),u.relativePath=u.relativePath.slice(r.length));let c=jn([r,u.relativePath]),f=n.concat(u);s.children&&s.children.length>0&&(Ae(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${c}".`),m1(s.children,e,f,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:BP(c,s.index),routesMeta:f})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of g1(s.path))i(s,o,u)}),e}function g1(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=g1(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function LP(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:$P(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var VP=/^:[\w-]+$/,MP=3,FP=2,UP=1,jP=10,zP=-2,Lv=t=>t==="*";function BP(t,e){let n=t.split("/"),r=n.length;return n.some(Lv)&&(r+=zP),e&&(r+=FP),n.filter(i=>!Lv(i)).reduce((i,s)=>i+(VP.test(s)?MP:s===""?UP:jP),r)}function $P(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function qP(t,e,n=!1){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",p=xu({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},f),m=u.route;if(!p&&c&&n&&!r[r.length-1].route.index&&(p=xu({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},f)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:jn([s,p.pathname]),pathnameBase:YP(jn([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=jn([s,p.pathnameBase]))}return o}function xu(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=HP(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,{paramName:f,isOptional:p},m)=>{if(f==="*"){let E=a[m]||"";o=s.slice(0,s.length-E.length).replace(/(.)\/+$/,"$1")}const w=a[m];return p&&!w?c[f]=void 0:c[f]=(w||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function HP(t,e=!1,n=!0){$r(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function WP(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return $r(!1,`The URL path "${t}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function xr(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function GP(t,e="/"){let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ds(t):t;return{pathname:n?n.startsWith("/")?n:KP(n,e):e,search:XP(r),hash:JP(i)}}function KP(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Wh(t,e,n,r){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function QP(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function y1(t){let e=QP(t);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function v1(t,e,n,r=!1){let i;typeof t=="string"?i=Ds(t):(i={...t},Ae(!i.pathname||!i.pathname.includes("?"),Wh("?","pathname","search",i)),Ae(!i.pathname||!i.pathname.includes("#"),Wh("#","pathname","hash",i)),Ae(!i.search||!i.search.includes("#"),Wh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}a=p>=0?e[p]:"/"}let u=GP(i,a),c=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||f)&&(u.pathname+="/"),u}var jn=t=>t.join("/").replace(/\/\/+/g,"/"),YP=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),XP=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,JP=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function ZP(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var _1=["POST","PUT","PATCH","DELETE"];new Set(_1);var ek=["GET",..._1];new Set(ek);var Ls=L.createContext(null);Ls.displayName="DataRouter";var vc=L.createContext(null);vc.displayName="DataRouterState";var w1=L.createContext({isTransitioning:!1});w1.displayName="ViewTransition";var tk=L.createContext(new Map);tk.displayName="Fetchers";var nk=L.createContext(null);nk.displayName="Await";var Tn=L.createContext(null);Tn.displayName="Navigation";var Ra=L.createContext(null);Ra.displayName="Location";var Jn=L.createContext({outlet:null,matches:[],isDataRoute:!1});Jn.displayName="Route";var im=L.createContext(null);im.displayName="RouteError";function rk(t,{relative:e}={}){Ae(Ca(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=L.useContext(Tn),{hash:i,pathname:s,search:o}=Pa(t,{relative:e}),a=s;return n!=="/"&&(a=s==="/"?n:jn([n,s])),r.createHref({pathname:a,search:o,hash:i})}function Ca(){return L.useContext(Ra)!=null}function Ri(){return Ae(Ca(),"useLocation() may be used only in the context of a <Router> component."),L.useContext(Ra).location}var E1="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function T1(t){L.useContext(Tn).static||L.useLayoutEffect(t)}function ik(){let{isDataRoute:t}=L.useContext(Jn);return t?yk():sk()}function sk(){Ae(Ca(),"useNavigate() may be used only in the context of a <Router> component.");let t=L.useContext(Ls),{basename:e,navigator:n}=L.useContext(Tn),{matches:r}=L.useContext(Jn),{pathname:i}=Ri(),s=JSON.stringify(y1(r)),o=L.useRef(!1);return T1(()=>{o.current=!0}),L.useCallback((u,c={})=>{if($r(o.current,E1),!o.current)return;if(typeof u=="number"){n.go(u);return}let f=v1(u,JSON.parse(s),i,c.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:jn([e,f.pathname])),(c.replace?n.replace:n.push)(f,c.state,c)},[e,n,s,i,t])}L.createContext(null);function Pa(t,{relative:e}={}){let{matches:n}=L.useContext(Jn),{pathname:r}=Ri(),i=JSON.stringify(y1(n));return L.useMemo(()=>v1(t,JSON.parse(i),r,e==="path"),[t,i,r,e])}function ok(t,e){return I1(t,e)}function I1(t,e,n,r){var C;Ae(Ca(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=L.useContext(Tn),{matches:s}=L.useContext(Jn),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Ri(),f;if(e){let T=typeof e=="string"?Ds(e):e;Ae(u==="/"||((C=T.pathname)==null?void 0:C.startsWith(u)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${T.pathname}" was given in the \`location\` prop.`),f=T}else f=c;let p=f.pathname||"/",m=p;if(u!=="/"){let T=u.replace(/^\//,"").split("/");m="/"+p.replace(/^\//,"").split("/").slice(T.length).join("/")}let w=p1(t,{pathname:m}),E=hk(w&&w.map(T=>Object.assign({},T,{params:Object.assign({},a,T.params),pathname:jn([u,i.encodeLocation?i.encodeLocation(T.pathname).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?u:jn([u,i.encodeLocation?i.encodeLocation(T.pathnameBase).pathname:T.pathnameBase])})),s,n,r);return e&&E?L.createElement(Ra.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...f},navigationType:"POP"}},E):E}function ak(){let t=gk(),e=ZP(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},e),n?L.createElement("pre",{style:i},n):null,null)}var lk=L.createElement(ak,null),uk=class extends L.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?L.createElement(Jn.Provider,{value:this.props.routeContext},L.createElement(im.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function ck({routeContext:t,match:e,children:n}){let r=L.useContext(Ls);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),L.createElement(Jn.Provider,{value:t},n)}function hk(t,e=[],n=null,r=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let i=t,s=n==null?void 0:n.errors;if(s!=null){let u=i.findIndex(c=>c.route.id&&(s==null?void 0:s[c.route.id])!==void 0);Ae(u>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),i=i.slice(0,Math.min(i.length,u+1))}let o=!1,a=-1;if(n)for(let u=0;u<i.length;u++){let c=i[u];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(a=u),c.route.id){let{loaderData:f,errors:p}=n,m=c.route.loader&&!f.hasOwnProperty(c.route.id)&&(!p||p[c.route.id]===void 0);if(c.route.lazy||m){o=!0,a>=0?i=i.slice(0,a+1):i=[i[0]];break}}}return i.reduceRight((u,c,f)=>{let p,m=!1,w=null,E=null;n&&(p=s&&c.route.id?s[c.route.id]:void 0,w=c.route.errorElement||lk,o&&(a<0&&f===0?(vk("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),m=!0,E=null):a===f&&(m=!0,E=c.route.hydrateFallbackElement||null)));let C=e.concat(i.slice(0,f+1)),T=()=>{let _;return p?_=w:m?_=E:c.route.Component?_=L.createElement(c.route.Component,null):c.route.element?_=c.route.element:_=u,L.createElement(ck,{match:c,routeContext:{outlet:u,matches:C,isDataRoute:n!=null},children:_})};return n&&(c.route.ErrorBoundary||c.route.errorElement||f===0)?L.createElement(uk,{location:n.location,revalidation:n.revalidation,component:w,error:p,children:T(),routeContext:{outlet:null,matches:C,isDataRoute:!0}}):T()},null)}function sm(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function fk(t){let e=L.useContext(Ls);return Ae(e,sm(t)),e}function dk(t){let e=L.useContext(vc);return Ae(e,sm(t)),e}function pk(t){let e=L.useContext(Jn);return Ae(e,sm(t)),e}function om(t){let e=pk(t),n=e.matches[e.matches.length-1];return Ae(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function mk(){return om("useRouteId")}function gk(){var r;let t=L.useContext(im),e=dk("useRouteError"),n=om("useRouteError");return t!==void 0?t:(r=e.errors)==null?void 0:r[n]}function yk(){let{router:t}=fk("useNavigate"),e=om("useNavigate"),n=L.useRef(!1);return T1(()=>{n.current=!0}),L.useCallback(async(i,s={})=>{$r(n.current,E1),n.current&&(typeof i=="number"?t.navigate(i):await t.navigate(i,{fromRouteId:e,...s}))},[t,e])}var Vv={};function vk(t,e,n){Vv[t]||(Vv[t]=!0,$r(!1,n))}L.memo(_k);function _k({routes:t,future:e,state:n}){return I1(t,void 0,n,e)}function ql(t){Ae(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function wk({basename:t="/",children:e=null,location:n,navigationType:r="POP",navigator:i,static:s=!1}){Ae(!Ca(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=t.replace(/^\/*/,"/"),a=L.useMemo(()=>({basename:o,navigator:i,static:s,future:{}}),[o,i,s]);typeof n=="string"&&(n=Ds(n));let{pathname:u="/",search:c="",hash:f="",state:p=null,key:m="default"}=n,w=L.useMemo(()=>{let E=xr(u,o);return E==null?null:{location:{pathname:E,search:c,hash:f,state:p,key:m},navigationType:r}},[o,u,c,f,p,m,r]);return $r(w!=null,`<Router basename="${o}"> is not able to match the URL "${u}${c}${f}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:L.createElement(Tn.Provider,{value:a},L.createElement(Ra.Provider,{children:e,value:w}))}function Ek({children:t,location:e}){return ok(dd(t),e)}function dd(t,e=[]){let n=[];return L.Children.forEach(t,(r,i)=>{if(!L.isValidElement(r))return;let s=[...e,i];if(r.type===L.Fragment){n.push.apply(n,dd(r.props.children,s));return}Ae(r.type===ql,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ae(!r.props.index||!r.props.children,"An index route cannot have child routes.");let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=dd(r.props.children,s)),n.push(o)}),n}var Hl="get",Wl="application/x-www-form-urlencoded";function _c(t){return t!=null&&typeof t.tagName=="string"}function Tk(t){return _c(t)&&t.tagName.toLowerCase()==="button"}function Ik(t){return _c(t)&&t.tagName.toLowerCase()==="form"}function Sk(t){return _c(t)&&t.tagName.toLowerCase()==="input"}function Ak(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Rk(t,e){return t.button===0&&(!e||e==="_self")&&!Ak(t)}var Tl=null;function Ck(){if(Tl===null)try{new FormData(document.createElement("form"),0),Tl=!1}catch{Tl=!0}return Tl}var Pk=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Gh(t){return t!=null&&!Pk.has(t)?($r(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Wl}"`),null):t}function kk(t,e){let n,r,i,s,o;if(Ik(t)){let a=t.getAttribute("action");r=a?xr(a,e):null,n=t.getAttribute("method")||Hl,i=Gh(t.getAttribute("enctype"))||Wl,s=new FormData(t)}else if(Tk(t)||Sk(t)&&(t.type==="submit"||t.type==="image")){let a=t.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=t.getAttribute("formaction")||a.getAttribute("action");if(r=u?xr(u,e):null,n=t.getAttribute("formmethod")||a.getAttribute("method")||Hl,i=Gh(t.getAttribute("formenctype"))||Gh(a.getAttribute("enctype"))||Wl,s=new FormData(a,t),!Ck()){let{name:c,type:f,value:p}=t;if(f==="image"){let m=c?`${c}.`:"";s.append(`${m}x`,"0"),s.append(`${m}y`,"0")}else c&&s.append(c,p)}}else{if(_c(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Hl,r=null,i=Wl,o=t}return s&&i==="text/plain"&&(o=s,s=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:s,body:o}}function am(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}async function bk(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function xk(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function Nk(t,e,n){let r=await Promise.all(t.map(async i=>{let s=e.routes[i.route.id];if(s){let o=await bk(s,n);return o.links?o.links():[]}return[]}));return Vk(r.flat(1).filter(xk).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function Mv(t,e,n,r,i,s){let o=(u,c)=>n[c]?u.route.id!==n[c].route.id:!0,a=(u,c)=>{var f;return n[c].pathname!==u.pathname||((f=n[c].route.path)==null?void 0:f.endsWith("*"))&&n[c].params["*"]!==u.params["*"]};return s==="assets"?e.filter((u,c)=>o(u,c)||a(u,c)):s==="data"?e.filter((u,c)=>{var p;let f=r.routes[u.route.id];if(!f||!f.hasLoader)return!1;if(o(u,c)||a(u,c))return!0;if(u.route.shouldRevalidate){let m=u.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((p=n[0])==null?void 0:p.params)||{},nextUrl:new URL(t,window.origin),nextParams:u.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function Ok(t,e){return Dk(t.map(n=>{let r=e.routes[n.route.id];if(!r)return[];let i=[r.module];return r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function Dk(t){return[...new Set(t)]}function Lk(t){let e={},n=Object.keys(t).sort();for(let r of n)e[r]=t[r];return e}function Vk(t,e){let n=new Set;return new Set(e),t.reduce((r,i)=>{let s=JSON.stringify(Lk(i));return n.has(s)||(n.add(s),r.push({key:s,link:i})),r},[])}function Mk(t){let e=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function Fk(){let t=L.useContext(Ls);return am(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function Uk(){let t=L.useContext(vc);return am(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var lm=L.createContext(void 0);lm.displayName="FrameworkContext";function S1(){let t=L.useContext(lm);return am(t,"You must render this element inside a <HydratedRouter> element"),t}function jk(t,e){let n=L.useContext(lm),[r,i]=L.useState(!1),[s,o]=L.useState(!1),{onFocus:a,onBlur:u,onMouseEnter:c,onMouseLeave:f,onTouchStart:p}=e,m=L.useRef(null);L.useEffect(()=>{if(t==="render"&&o(!0),t==="viewport"){let C=_=>{_.forEach(y=>{o(y.isIntersecting)})},T=new IntersectionObserver(C,{threshold:.5});return m.current&&T.observe(m.current),()=>{T.disconnect()}}},[t]),L.useEffect(()=>{if(r){let C=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(C)}}},[r]);let w=()=>{i(!0)},E=()=>{i(!1),o(!1)};return n?t!=="intent"?[s,m,{}]:[s,m,{onFocus:mo(a,w),onBlur:mo(u,E),onMouseEnter:mo(c,w),onMouseLeave:mo(f,E),onTouchStart:mo(p,w)}]:[!1,m,{}]}function mo(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function zk({page:t,...e}){let{router:n}=Fk(),r=L.useMemo(()=>p1(n.routes,t,n.basename),[n.routes,t,n.basename]);return r?L.createElement($k,{page:t,matches:r,...e}):(console.warn(`Tried to prefetch ${t} but no routes matched.`),null)}function Bk(t){let{manifest:e,routeModules:n}=S1(),[r,i]=L.useState([]);return L.useEffect(()=>{let s=!1;return Nk(t,e,n).then(o=>{s||i(o)}),()=>{s=!0}},[t,e,n]),r}function $k({page:t,matches:e,...n}){let r=Ri(),{manifest:i,routeModules:s}=S1(),{loaderData:o,matches:a}=Uk(),u=L.useMemo(()=>Mv(t,e,a,i,r,"data"),[t,e,a,i,r]),c=L.useMemo(()=>Mv(t,e,a,i,r,"assets"),[t,e,a,i,r]),f=L.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let w=new Set,E=!1;if(e.forEach(T=>{var y;let _=i.routes[T.route.id];!_||!_.hasLoader||(!u.some(I=>I.route.id===T.route.id)&&T.route.id in o&&((y=s[T.route.id])!=null&&y.shouldRevalidate)||_.hasClientLoader?E=!0:w.add(T.route.id))}),w.size===0)return[];let C=Mk(t);return E&&w.size>0&&C.searchParams.set("_routes",e.filter(T=>w.has(T.route.id)).map(T=>T.route.id).join(",")),[C.pathname+C.search]},[o,r,i,u,e,t,s]),p=L.useMemo(()=>Ok(c,i),[c,i]),m=Bk(c);return L.createElement(L.Fragment,null,f.map(w=>L.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...n})),p.map(w=>L.createElement("link",{key:w,rel:"modulepreload",href:w,...n})),m.map(({key:w,link:E})=>L.createElement("link",{key:w,...E})))}function qk(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var A1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{A1&&(window.__reactRouterVersion="7.0.1")}catch{}function Hk({basename:t,children:e,window:n}){let r=L.useRef();r.current==null&&(r.current=xP({window:n,v5Compat:!0}));let i=r.current,[s,o]=L.useState({action:i.action,location:i.location}),a=L.useCallback(u=>{L.startTransition(()=>o(u))},[o]);return L.useLayoutEffect(()=>i.listen(a),[i,a]),L.createElement(wk,{basename:t,children:e,location:s.location,navigationType:s.action,navigator:i})}var R1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,es=L.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:i,reloadDocument:s,replace:o,state:a,target:u,to:c,preventScrollReset:f,viewTransition:p,...m},w){let{basename:E}=L.useContext(Tn),C=typeof c=="string"&&R1.test(c),T,_=!1;if(typeof c=="string"&&C&&(T=c,A1))try{let S=new URL(window.location.href),R=c.startsWith("//")?new URL(S.protocol+c):new URL(c),k=xr(R.pathname,E);R.origin===S.origin&&k!=null?c=k+R.search+R.hash:_=!0}catch{$r(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let y=rk(c,{relative:i}),[I,N,V]=jk(r,m),j=Qk(c,{replace:o,state:a,target:u,preventScrollReset:f,relative:i,viewTransition:p});function A(S){e&&e(S),S.defaultPrevented||j(S)}let v=L.createElement("a",{...m,...V,href:T||y,onClick:_||s?e:A,ref:qk(w,N),target:u,"data-discover":!C&&n==="render"?"true":void 0});return I&&!C?L.createElement(L.Fragment,null,v,L.createElement(zk,{page:y})):v});es.displayName="Link";var Wk=L.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:i=!1,style:s,to:o,viewTransition:a,children:u,...c},f){let p=Pa(o,{relative:c.relative}),m=Ri(),w=L.useContext(vc),{navigator:E,basename:C}=L.useContext(Tn),T=w!=null&&e2(p)&&a===!0,_=E.encodeLocation?E.encodeLocation(p).pathname:p.pathname,y=m.pathname,I=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;n||(y=y.toLowerCase(),I=I?I.toLowerCase():null,_=_.toLowerCase()),I&&C&&(I=xr(I,C)||I);const N=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let V=y===_||!i&&y.startsWith(_)&&y.charAt(N)==="/",j=I!=null&&(I===_||!i&&I.startsWith(_)&&I.charAt(_.length)==="/"),A={isActive:V,isPending:j,isTransitioning:T},v=V?e:void 0,S;typeof r=="function"?S=r(A):S=[r,V?"active":null,j?"pending":null,T?"transitioning":null].filter(Boolean).join(" ");let R=typeof s=="function"?s(A):s;return L.createElement(es,{...c,"aria-current":v,className:S,ref:f,style:R,to:o,viewTransition:a},typeof u=="function"?u(A):u)});Wk.displayName="NavLink";var Gk=L.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:i,state:s,method:o=Hl,action:a,onSubmit:u,relative:c,preventScrollReset:f,viewTransition:p,...m},w)=>{let E=Jk(),C=Zk(a,{relative:c}),T=o.toLowerCase()==="get"?"get":"post",_=typeof a=="string"&&R1.test(a),y=I=>{if(u&&u(I),I.defaultPrevented)return;I.preventDefault();let N=I.nativeEvent.submitter,V=(N==null?void 0:N.getAttribute("formmethod"))||o;E(N||I.currentTarget,{fetcherKey:e,method:V,navigate:n,replace:i,state:s,relative:c,preventScrollReset:f,viewTransition:p})};return L.createElement("form",{ref:w,method:T,action:C,onSubmit:r?u:y,...m,"data-discover":!_&&t==="render"?"true":void 0})});Gk.displayName="Form";function Kk(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function C1(t){let e=L.useContext(Ls);return Ae(e,Kk(t)),e}function Qk(t,{target:e,replace:n,state:r,preventScrollReset:i,relative:s,viewTransition:o}={}){let a=ik(),u=Ri(),c=Pa(t,{relative:s});return L.useCallback(f=>{if(Rk(f,e)){f.preventDefault();let p=n!==void 0?n:oa(u)===oa(c);a(t,{replace:p,state:r,preventScrollReset:i,relative:s,viewTransition:o})}},[u,a,c,n,r,e,t,i,s,o])}var Yk=0,Xk=()=>`__${String(++Yk)}__`;function Jk(){let{router:t}=C1("useSubmit"),{basename:e}=L.useContext(Tn),n=mk();return L.useCallback(async(r,i={})=>{let{action:s,method:o,encType:a,formData:u,body:c}=kk(r,e);if(i.navigate===!1){let f=i.fetcherKey||Xk();await t.fetch(f,n,i.action||s,{preventScrollReset:i.preventScrollReset,formData:u,body:c,formMethod:i.method||o,formEncType:i.encType||a,flushSync:i.flushSync})}else await t.navigate(i.action||s,{preventScrollReset:i.preventScrollReset,formData:u,body:c,formMethod:i.method||o,formEncType:i.encType||a,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[t,e,n])}function Zk(t,{relative:e}={}){let{basename:n}=L.useContext(Tn),r=L.useContext(Jn);Ae(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),s={...Pa(t||".",{relative:e})},o=Ri();if(t==null){s.search=o.search;let a=new URLSearchParams(s.search),u=a.getAll("index");if(u.some(f=>f==="")){a.delete("index"),u.filter(p=>p).forEach(p=>a.append("index",p));let f=a.toString();s.search=f?`?${f}`:""}}return(!t||t===".")&&i.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:jn([n,s.pathname])),oa(s)}function e2(t,e={}){let n=L.useContext(w1);Ae(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=C1("useViewTransitionState"),i=Pa(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=xr(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=xr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return xu(i.pathname,o)!=null||xu(i.pathname,s)!=null}new TextEncoder;/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function t2(t,e,n){return(e=r2(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Fv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function z(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Fv(Object(n),!0).forEach(function(r){t2(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Fv(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function n2(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function r2(t){var e=n2(t,"string");return typeof e=="symbol"?e:e+""}const Uv=()=>{};let um={},P1={},k1=null,b1={mark:Uv,measure:Uv};try{typeof window<"u"&&(um=window),typeof document<"u"&&(P1=document),typeof MutationObserver<"u"&&(k1=MutationObserver),typeof performance<"u"&&(b1=performance)}catch{}const{userAgent:jv=""}=um.navigator||{},Nr=um,we=P1,zv=k1,Il=b1;Nr.document;const Zn=!!we.documentElement&&!!we.head&&typeof we.addEventListener=="function"&&typeof we.createElement=="function",x1=~jv.indexOf("MSIE")||~jv.indexOf("Trident/");var i2=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,s2=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,N1={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},o2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},O1=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],at="classic",wc="duotone",a2="sharp",l2="sharp-duotone",D1=[at,wc,a2,l2],u2={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},c2={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},h2=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),f2={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},d2=["fak","fa-kit","fakd","fa-kit-duotone"],Bv={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},p2=["kit"],m2={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},g2=["fak","fakd"],y2={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},$v={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Sl={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},v2=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],_2=["fak","fa-kit","fakd","fa-kit-duotone"],w2={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},E2={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},T2={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},pd={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},I2=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],md=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...v2,...I2],S2=["solid","regular","light","thin","duotone","brands"],L1=[1,2,3,4,5,6,7,8,9,10],A2=L1.concat([11,12,13,14,15,16,17,18,19,20]),R2=[...Object.keys(T2),...S2,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Sl.GROUP,Sl.SWAP_OPACITY,Sl.PRIMARY,Sl.SECONDARY].concat(L1.map(t=>"".concat(t,"x"))).concat(A2.map(t=>"w-".concat(t))),C2={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const Hn="___FONT_AWESOME___",gd=16,V1="fa",M1="svg-inline--fa",yi="data-fa-i2svg",yd="data-fa-pseudo-element",P2="data-fa-pseudo-element-pending",cm="data-prefix",hm="data-icon",qv="fontawesome-i2svg",k2="async",b2=["HTML","HEAD","STYLE","SCRIPT"],F1=(()=>{try{return!0}catch{return!1}})();function ka(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[at]}})}const U1=z({},N1);U1[at]=z(z(z(z({},{"fa-duotone":"duotone"}),N1[at]),Bv.kit),Bv["kit-duotone"]);const x2=ka(U1),vd=z({},f2);vd[at]=z(z(z(z({},{duotone:"fad"}),vd[at]),$v.kit),$v["kit-duotone"]);const Hv=ka(vd),_d=z({},pd);_d[at]=z(z({},_d[at]),y2.kit);const fm=ka(_d),wd=z({},E2);wd[at]=z(z({},wd[at]),m2.kit);ka(wd);const N2=i2,j1="fa-layers-text",O2=s2,D2=z({},u2);ka(D2);const L2=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Kh=o2,V2=[...p2,...R2],Lo=Nr.FontAwesomeConfig||{};function M2(t){var e=we.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function F2(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}we&&typeof we.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const i=F2(M2(n));i!=null&&(Lo[r]=i)});const z1={styleDefault:"solid",familyDefault:at,cssPrefix:V1,replacementClass:M1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Lo.familyPrefix&&(Lo.cssPrefix=Lo.familyPrefix);const Ts=z(z({},z1),Lo);Ts.autoReplaceSvg||(Ts.observeMutations=!1);const K={};Object.keys(z1).forEach(t=>{Object.defineProperty(K,t,{enumerable:!0,set:function(e){Ts[t]=e,Vo.forEach(n=>n(K))},get:function(){return Ts[t]}})});Object.defineProperty(K,"familyPrefix",{enumerable:!0,set:function(t){Ts.cssPrefix=t,Vo.forEach(e=>e(K))},get:function(){return Ts.cssPrefix}});Nr.FontAwesomeConfig=K;const Vo=[];function U2(t){return Vo.push(t),()=>{Vo.splice(Vo.indexOf(t),1)}}const ir=gd,hn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function j2(t){if(!t||!Zn)return;const e=we.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=we.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return we.head.insertBefore(e,r),t}const z2="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function aa(){let t=12,e="";for(;t-- >0;)e+=z2[Math.random()*62|0];return e}function Vs(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function dm(t){return t.classList?Vs(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function B1(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function B2(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(B1(t[n]),'" '),"").trim()}function Ec(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function pm(t){return t.size!==hn.size||t.x!==hn.x||t.y!==hn.y||t.rotate!==hn.rotate||t.flipX||t.flipY}function $2(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:u,path:c}}function q2(t){let{transform:e,width:n=gd,height:r=gd,startCentered:i=!1}=t,s="";return i&&x1?s+="translate(".concat(e.x/ir-n/2,"em, ").concat(e.y/ir-r/2,"em) "):i?s+="translate(calc(-50% + ".concat(e.x/ir,"em), calc(-50% + ").concat(e.y/ir,"em)) "):s+="translate(".concat(e.x/ir,"em, ").concat(e.y/ir,"em) "),s+="scale(".concat(e.size/ir*(e.flipX?-1:1),", ").concat(e.size/ir*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var H2=`:root, :host {
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
}`;function $1(){const t=V1,e=M1,n=K.cssPrefix,r=K.replacementClass;let i=H2;if(n!==t||r!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}let Wv=!1;function Qh(){K.autoAddCss&&!Wv&&(j2($1()),Wv=!0)}var W2={mixout(){return{dom:{css:$1,insertCss:Qh}}},hooks(){return{beforeDOMElementCreation(){Qh()},beforeI2svg(){Qh()}}}};const Wn=Nr||{};Wn[Hn]||(Wn[Hn]={});Wn[Hn].styles||(Wn[Hn].styles={});Wn[Hn].hooks||(Wn[Hn].hooks={});Wn[Hn].shims||(Wn[Hn].shims=[]);var fn=Wn[Hn];const q1=[],H1=function(){we.removeEventListener("DOMContentLoaded",H1),Nu=1,q1.map(t=>t())};let Nu=!1;Zn&&(Nu=(we.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(we.readyState),Nu||we.addEventListener("DOMContentLoaded",H1));function G2(t){Zn&&(Nu?setTimeout(t,0):q1.push(t))}function ba(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?B1(t):"<".concat(e," ").concat(B2(n),">").concat(r.map(ba).join(""),"</").concat(e,">")}function Gv(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Yh=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=n,u,c,f;for(r===void 0?(u=1,f=e[s[0]]):(u=0,f=r);u<o;u++)c=s[u],f=a(f,e[c],c,e);return f};function K2(t){const e=[];let n=0;const r=t.length;for(;n<r;){const i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Ed(t){const e=K2(t);return e.length===1?e[0].toString(16):null}function Q2(t,e){const n=t.length;let r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Kv(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function Td(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=Kv(e);typeof fn.hooks.addPack=="function"&&!r?fn.hooks.addPack(t,Kv(e)):fn.styles[t]=z(z({},fn.styles[t]||{}),i),t==="fas"&&Td("fa",e)}const{styles:la,shims:Y2}=fn,W1=Object.keys(fm),X2=W1.reduce((t,e)=>(t[e]=Object.keys(fm[e]),t),{});let mm=null,G1={},K1={},Q1={},Y1={},X1={};function J2(t){return~V2.indexOf(t)}function Z2(t,e){const n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!J2(i)?i:null}const J1=()=>{const t=r=>Yh(la,(i,s,o)=>(i[o]=Yh(s,r,{}),i),{});G1=t((r,i,s)=>(i[3]&&(r[i[3]]=s),i[2]&&i[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=s}),r)),K1=t((r,i,s)=>(r[s]=s,i[2]&&i[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=s}),r)),X1=t((r,i,s)=>{const o=i[2];return r[s]=s,o.forEach(a=>{r[a]=s}),r});const e="far"in la||K.autoFetchSvg,n=Yh(Y2,(r,i)=>{const s=i[0];let o=i[1];const a=i[2];return o==="far"&&!e&&(o="fas"),typeof s=="string"&&(r.names[s]={prefix:o,iconName:a}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});Q1=n.names,Y1=n.unicodes,mm=Tc(K.styleDefault,{family:K.familyDefault})};U2(t=>{mm=Tc(t.styleDefault,{family:K.familyDefault})});J1();function gm(t,e){return(G1[t]||{})[e]}function eb(t,e){return(K1[t]||{})[e]}function ni(t,e){return(X1[t]||{})[e]}function Z1(t){return Q1[t]||{prefix:null,iconName:null}}function tb(t){const e=Y1[t],n=gm("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Or(){return mm}const eT=()=>({prefix:null,iconName:null,rest:[]});function nb(t){let e=at;const n=W1.reduce((r,i)=>(r[i]="".concat(K.cssPrefix,"-").concat(i),r),{});return D1.forEach(r=>{(t.includes(n[r])||t.some(i=>X2[r].includes(i)))&&(e=r)}),e}function Tc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=at}=e,r=x2[n][t];if(n===wc&&!t)return"fad";const i=Hv[n][t]||Hv[n][r],s=t in fn.styles?t:null;return i||s||null}function rb(t){let e=[],n=null;return t.forEach(r=>{const i=Z2(K.cssPrefix,r);i?n=i:r&&e.push(r)}),{iconName:n,rest:e}}function Qv(t){return t.sort().filter((e,n,r)=>r.indexOf(e)===n)}function Ic(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let r=null;const i=md.concat(_2),s=Qv(t.filter(p=>i.includes(p))),o=Qv(t.filter(p=>!md.includes(p))),a=s.filter(p=>(r=p,!O1.includes(p))),[u=null]=a,c=nb(s),f=z(z({},rb(o)),{},{prefix:Tc(u,{family:c})});return z(z(z({},f),ab({values:t,family:c,styles:la,config:K,canonical:f,givenPrefix:r})),ib(n,r,f))}function ib(t,e,n){let{prefix:r,iconName:i}=n;if(t||!r||!i)return{prefix:r,iconName:i};const s=e==="fa"?Z1(i):{},o=ni(r,i);return i=s.iconName||o||i,r=s.prefix||r,r==="far"&&!la.far&&la.fas&&!K.autoFetchSvg&&(r="fas"),{prefix:r,iconName:i}}const sb=D1.filter(t=>t!==at||t!==wc),ob=Object.keys(pd).filter(t=>t!==at).map(t=>Object.keys(pd[t])).flat();function ab(t){const{values:e,family:n,canonical:r,givenPrefix:i="",styles:s={},config:o={}}=t,a=n===wc,u=e.includes("fa-duotone")||e.includes("fad"),c=o.familyDefault==="duotone",f=r.prefix==="fad"||r.prefix==="fa-duotone";if(!a&&(u||c||f)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&sb.includes(n)&&(Object.keys(s).find(m=>ob.includes(m))||o.autoFetchSvg)){const m=h2.get(n).defaultShortPrefixId;r.prefix=m,r.iconName=ni(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||i==="fa")&&(r.prefix=Or()||"fas"),r}class lb{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(s=>{this.definitions[s]=z(z({},this.definitions[s]||{}),i[s]),Td(s,i[s]);const o=fm[at][s];o&&Td(o,i[s]),J1()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:s,iconName:o,icon:a}=r[i],u=a[2];e[s]||(e[s]={}),u.length>0&&u.forEach(c=>{typeof c=="string"&&(e[s][c]=a)}),e[s][o]=a}),e}}let Yv=[],ts={};const cs={},ub=Object.keys(cs);function cb(t,e){let{mixoutsTo:n}=e;return Yv=t,ts={},Object.keys(cs).forEach(r=>{ub.indexOf(r)===-1&&delete cs[r]}),Yv.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(s=>{typeof i[s]=="function"&&(n[s]=i[s]),typeof i[s]=="object"&&Object.keys(i[s]).forEach(o=>{n[s]||(n[s]={}),n[s][o]=i[s][o]})}),r.hooks){const s=r.hooks();Object.keys(s).forEach(o=>{ts[o]||(ts[o]=[]),ts[o].push(s[o])})}r.provides&&r.provides(cs)}),n}function Id(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(ts[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function vi(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(ts[t]||[]).forEach(s=>{s.apply(null,n)})}function Dr(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return cs[t]?cs[t].apply(null,e):void 0}function Sd(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Or();if(e)return e=ni(n,e)||e,Gv(tT.definitions,n,e)||Gv(fn.styles,n,e)}const tT=new lb,hb=()=>{K.autoReplaceSvg=!1,K.observeMutations=!1,vi("noAuto")},fb={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Zn?(vi("beforeI2svg",t),Dr("pseudoElements2svg",t),Dr("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;K.autoReplaceSvg===!1&&(K.autoReplaceSvg=!0),K.observeMutations=!0,G2(()=>{pb({autoReplaceSvgRoot:e}),vi("watch",t)})}},db={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ni(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Tc(t[0]);return{prefix:n,iconName:ni(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(K.cssPrefix,"-"))>-1||t.match(N2))){const e=Ic(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Or(),iconName:ni(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Or();return{prefix:e,iconName:ni(e,t)||t}}}},Dt={noAuto:hb,config:K,dom:fb,parse:db,library:tT,findIconDefinition:Sd,toHtml:ba},pb=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=we}=t;(Object.keys(fn.styles).length>0||K.autoFetchSvg)&&Zn&&K.autoReplaceSvg&&Dt.dom.i2svg({node:e})};function Sc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>ba(n))}}),Object.defineProperty(t,"node",{get:function(){if(!Zn)return;const n=we.createElement("div");return n.innerHTML=t.html,n.children}}),t}function mb(t){let{children:e,main:n,mask:r,attributes:i,styles:s,transform:o}=t;if(pm(o)&&n.found&&!r.found){const{width:a,height:u}=n,c={x:a/u/2,y:.5};i.style=Ec(z(z({},s),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function gb(t){let{prefix:e,iconName:n,children:r,attributes:i,symbol:s}=t;const o=s===!0?"".concat(e,"-").concat(K.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:z(z({},i),{},{id:o}),children:r}]}]}function ym(t){const{icons:{main:e,mask:n},prefix:r,iconName:i,transform:s,symbol:o,title:a,maskId:u,titleId:c,extra:f,watchable:p=!1}=t,{width:m,height:w}=n.found?n:e,E=g2.includes(r),C=[K.replacementClass,i?"".concat(K.cssPrefix,"-").concat(i):""].filter(V=>f.classes.indexOf(V)===-1).filter(V=>V!==""||!!V).concat(f.classes).join(" ");let T={children:[],attributes:z(z({},f.attributes),{},{"data-prefix":r,"data-icon":i,class:C,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(w)})};const _=E&&!~f.classes.indexOf("fa-fw")?{width:"".concat(m/w*16*.0625,"em")}:{};p&&(T.attributes[yi]=""),a&&(T.children.push({tag:"title",attributes:{id:T.attributes["aria-labelledby"]||"title-".concat(c||aa())},children:[a]}),delete T.attributes.title);const y=z(z({},T),{},{prefix:r,iconName:i,main:e,mask:n,maskId:u,transform:s,symbol:o,styles:z(z({},_),f.styles)}),{children:I,attributes:N}=n.found&&e.found?Dr("generateAbstractMask",y)||{children:[],attributes:{}}:Dr("generateAbstractIcon",y)||{children:[],attributes:{}};return y.children=I,y.attributes=N,o?gb(y):mb(y)}function Xv(t){const{content:e,width:n,height:r,transform:i,title:s,extra:o,watchable:a=!1}=t,u=z(z(z({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});a&&(u[yi]="");const c=z({},o.styles);pm(i)&&(c.transform=q2({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const f=Ec(c);f.length>0&&(u.style=f);const p=[];return p.push({tag:"span",attributes:u,children:[e]}),s&&p.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),p}function yb(t){const{content:e,title:n,extra:r}=t,i=z(z(z({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Ec(r.styles);s.length>0&&(i.style=s);const o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:Xh}=fn;function Ad(t){const e=t[0],n=t[1],[r]=t.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(K.cssPrefix,"-").concat(Kh.GROUP)},children:[{tag:"path",attributes:{class:"".concat(K.cssPrefix,"-").concat(Kh.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(K.cssPrefix,"-").concat(Kh.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:i}}const vb={found:!1,width:512,height:512};function _b(t,e){!F1&&!K.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Rd(t,e){let n=e;return e==="fa"&&K.styleDefault!==null&&(e=Or()),new Promise((r,i)=>{if(n==="fa"){const s=Z1(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Xh[e]&&Xh[e][t]){const s=Xh[e][t];return r(Ad(s))}_b(t,e),r(z(z({},vb),{},{icon:K.showMissingIcons&&t?Dr("missingIconAbstract")||{}:{}}))})}const Jv=()=>{},Cd=K.measurePerformance&&Il&&Il.mark&&Il.measure?Il:{mark:Jv,measure:Jv},To='FA "6.7.1"',wb=t=>(Cd.mark("".concat(To," ").concat(t," begins")),()=>nT(t)),nT=t=>{Cd.mark("".concat(To," ").concat(t," ends")),Cd.measure("".concat(To," ").concat(t),"".concat(To," ").concat(t," begins"),"".concat(To," ").concat(t," ends"))};var vm={begin:wb,end:nT};const Gl=()=>{};function Zv(t){return typeof(t.getAttribute?t.getAttribute(yi):null)=="string"}function Eb(t){const e=t.getAttribute?t.getAttribute(cm):null,n=t.getAttribute?t.getAttribute(hm):null;return e&&n}function Tb(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(K.replacementClass)}function Ib(){return K.autoReplaceSvg===!0?Kl.replace:Kl[K.autoReplaceSvg]||Kl.replace}function Sb(t){return we.createElementNS("http://www.w3.org/2000/svg",t)}function Ab(t){return we.createElement(t)}function rT(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?Sb:Ab}=e;if(typeof t=="string")return we.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){r.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){r.appendChild(rT(s,{ceFn:n}))}),r}function Rb(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Kl={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(rT(n),e)}),e.getAttribute(yi)===null&&K.keepOriginalSource){let n=we.createComment(Rb(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~dm(e).indexOf(K.replacementClass))return Kl.replace(t);const r=new RegExp("".concat(K.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((o,a)=>(a===K.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const i=n.map(s=>ba(s)).join(`
`);e.setAttribute(yi,""),e.innerHTML=i}};function e_(t){t()}function iT(t,e){const n=typeof e=="function"?e:Gl;if(t.length===0)n();else{let r=e_;K.mutateApproach===k2&&(r=Nr.requestAnimationFrame||e_),r(()=>{const i=Ib(),s=vm.begin("mutate");t.map(i),s(),n()})}}let _m=!1;function sT(){_m=!0}function Pd(){_m=!1}let Ou=null;function t_(t){if(!zv||!K.observeMutations)return;const{treeCallback:e=Gl,nodeCallback:n=Gl,pseudoElementsCallback:r=Gl,observeMutationsRoot:i=we}=t;Ou=new zv(s=>{if(_m)return;const o=Or();Vs(s).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!Zv(a.addedNodes[0])&&(K.searchPseudoElements&&r(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&K.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&Zv(a.target)&&~L2.indexOf(a.attributeName))if(a.attributeName==="class"&&Eb(a.target)){const{prefix:u,iconName:c}=Ic(dm(a.target));a.target.setAttribute(cm,u||o),c&&a.target.setAttribute(hm,c)}else Tb(a.target)&&n(a.target)})}),Zn&&Ou.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Cb(){Ou&&Ou.disconnect()}function Pb(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,i)=>{const s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function kb(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let i=Ic(dm(t));return i.prefix||(i.prefix=Or()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=eb(i.prefix,t.innerText)||gm(i.prefix,Ed(t.innerText))),!i.iconName&&K.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function bb(t){const e=Vs(t.attributes).reduce((i,s)=>(i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return K.autoA11y&&(n?e["aria-labelledby"]="".concat(K.replacementClass,"-title-").concat(r||aa()):(e["aria-hidden"]="true",e.focusable="false")),e}function xb(){return{iconName:null,title:null,titleId:null,prefix:null,transform:hn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function n_(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=kb(t),s=bb(t),o=Id("parseNodeAttributes",{},t);let a=e.styleParser?Pb(t):[];return z({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:hn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:a,attributes:s}},o)}const{styles:Nb}=fn;function oT(t){const e=K.autoReplaceSvg==="nest"?n_(t,{styleParser:!1}):n_(t);return~e.extra.classes.indexOf(j1)?Dr("generateLayersText",t,e):Dr("generateSvgReplacementMutation",t,e)}function Ob(){return[...d2,...md]}function r_(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Zn)return Promise.resolve();const n=we.documentElement.classList,r=f=>n.add("".concat(qv,"-").concat(f)),i=f=>n.remove("".concat(qv,"-").concat(f)),s=K.autoFetchSvg?Ob():O1.concat(Object.keys(Nb));s.includes("fa")||s.push("fa");const o=[".".concat(j1,":not([").concat(yi,"])")].concat(s.map(f=>".".concat(f,":not([").concat(yi,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=Vs(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();const u=vm.begin("onTree"),c=a.reduce((f,p)=>{try{const m=oT(p);m&&f.push(m)}catch(m){F1||m.name==="MissingIcon"&&console.error(m)}return f},[]);return new Promise((f,p)=>{Promise.all(c).then(m=>{iT(m,()=>{r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),u(),f()})}).catch(m=>{u(),p(m)})})}function Db(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;oT(t).then(n=>{n&&iT([n],e)})}function Lb(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:Sd(e||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:Sd(i||{})),t(r,z(z({},n),{},{mask:i}))}}const Vb=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=hn,symbol:r=!1,mask:i=null,maskId:s=null,title:o=null,titleId:a=null,classes:u=[],attributes:c={},styles:f={}}=e;if(!t)return;const{prefix:p,iconName:m,icon:w}=t;return Sc(z({type:"icon"},t),()=>(vi("beforeDOMElementCreation",{iconDefinition:t,params:e}),K.autoA11y&&(o?c["aria-labelledby"]="".concat(K.replacementClass,"-title-").concat(a||aa()):(c["aria-hidden"]="true",c.focusable="false")),ym({icons:{main:Ad(w),mask:i?Ad(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:m,transform:z(z({},hn),n),symbol:r,title:o,maskId:s,titleId:a,extra:{attributes:c,styles:f,classes:u}})))};var Mb={mixout(){return{icon:Lb(Vb)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=r_,t.nodeCallback=Db,t}}},provides(t){t.i2svg=function(e){const{node:n=we,callback:r=()=>{}}=e;return r_(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:i,titleId:s,prefix:o,transform:a,symbol:u,mask:c,maskId:f,extra:p}=n;return new Promise((m,w)=>{Promise.all([Rd(r,o),c.iconName?Rd(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(E=>{let[C,T]=E;m([e,ym({icons:{main:C,mask:T},prefix:o,iconName:r,transform:a,symbol:u,maskId:f,title:i,titleId:s,extra:p,watchable:!0})])}).catch(w)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:i,transform:s,styles:o}=e;const a=Ec(o);a.length>0&&(r.style=a);let u;return pm(s)&&(u=Dr("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),n.push(u||i.icon),{children:n,attributes:r}}}},Fb={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Sc({type:"layer"},()=>{vi("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(i=>{Array.isArray(i)?i.map(s=>{r=r.concat(s.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(K.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},Ub={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:s={}}=e;return Sc({type:"counter",content:t},()=>(vi("beforeDOMElementCreation",{content:t,params:e}),yb({content:t.toString(),title:n,extra:{attributes:i,styles:s,classes:["".concat(K.cssPrefix,"-layers-counter"),...r]}})))}}}},jb={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=hn,title:r=null,classes:i=[],attributes:s={},styles:o={}}=e;return Sc({type:"text",content:t},()=>(vi("beforeDOMElementCreation",{content:t,params:e}),Xv({content:t,transform:z(z({},hn),n),title:r,extra:{attributes:s,styles:o,classes:["".concat(K.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:i,extra:s}=n;let o=null,a=null;if(x1){const u=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/u,a=c.height/u}return K.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,Xv({content:e.innerHTML,width:o,height:a,transform:i,title:r,extra:s,watchable:!0})])}}};const zb=new RegExp('"',"ug"),i_=[1105920,1112319],s_=z(z(z(z({},{FontAwesome:{normal:"fas",400:"fas"}}),c2),C2),w2),kd=Object.keys(s_).reduce((t,e)=>(t[e.toLowerCase()]=s_[e],t),{}),Bb=Object.keys(kd).reduce((t,e)=>{const n=kd[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function $b(t){const e=t.replace(zb,""),n=Q2(e,0),r=n>=i_[0]&&n<=i_[1],i=e.length===2?e[0]===e[1]:!1;return{value:Ed(i?e[0]:e),isSecondary:r||i}}function qb(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),i=isNaN(r)?"normal":r;return(kd[n]||{})[i]||Bb[n]}function o_(t,e){const n="".concat(P2).concat(e.replace(":","-"));return new Promise((r,i)=>{if(t.getAttribute(n)!==null)return r();const o=Vs(t.children).filter(m=>m.getAttribute(yd)===e)[0],a=Nr.getComputedStyle(t,e),u=a.getPropertyValue("font-family"),c=u.match(O2),f=a.getPropertyValue("font-weight"),p=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&p!=="none"&&p!==""){const m=a.getPropertyValue("content");let w=qb(u,f);const{value:E,isSecondary:C}=$b(m),T=c[0].startsWith("FontAwesome");let _=gm(w,E),y=_;if(T){const I=tb(E);I.iconName&&I.prefix&&(_=I.iconName,w=I.prefix)}if(_&&!C&&(!o||o.getAttribute(cm)!==w||o.getAttribute(hm)!==y)){t.setAttribute(n,y),o&&t.removeChild(o);const I=xb(),{extra:N}=I;N.attributes[yd]=e,Rd(_,w).then(V=>{const j=ym(z(z({},I),{},{icons:{main:V,mask:eT()},prefix:w,iconName:y,extra:N,watchable:!0})),A=we.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(A,t.firstChild):t.appendChild(A),A.outerHTML=j.map(v=>ba(v)).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Hb(t){return Promise.all([o_(t,"::before"),o_(t,"::after")])}function Wb(t){return t.parentNode!==document.head&&!~b2.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(yd)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function a_(t){if(Zn)return new Promise((e,n)=>{const r=Vs(t.querySelectorAll("*")).filter(Wb).map(Hb),i=vm.begin("searchPseudoElements");sT(),Promise.all(r).then(()=>{i(),Pd(),e()}).catch(()=>{i(),Pd(),n()})})}var Gb={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=a_,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=we}=e;K.searchPseudoElements&&a_(n)}}};let l_=!1;var Kb={mixout(){return{dom:{unwatch(){sT(),l_=!0}}}},hooks(){return{bootstrap(){t_(Id("mutationObserverCallbacks",{}))},noAuto(){Cb()},watch(t){const{observeMutationsRoot:e}=t;l_?Pd():t_(Id("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const u_=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),s=i[0];let o=i.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var Qb={mixout(){return{parse:{transform:t=>u_(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=u_(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:i,iconWidth:s}=e;const o={transform:"translate(".concat(i/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(a," ").concat(u," ").concat(c)},p={transform:"translate(".concat(s/2*-1," -256)")},m={outer:o,inner:f,path:p};return{tag:"g",attributes:z({},m.outer),children:[{tag:"g",attributes:z({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:z(z({},n.icon.attributes),m.path)}]}]}}}};const Jh={x:0,y:0,width:"100%",height:"100%"};function c_(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Yb(t){return t.tag==="g"?t.children:[t]}var Xb={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?Ic(n.split(" ").map(i=>i.trim())):eT();return r.prefix||(r.prefix=Or()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:i,mask:s,maskId:o,transform:a}=e;const{width:u,icon:c}=i,{width:f,icon:p}=s,m=$2({transform:a,containerWidth:f,iconWidth:u}),w={tag:"rect",attributes:z(z({},Jh),{},{fill:"white"})},E=c.children?{children:c.children.map(c_)}:{},C={tag:"g",attributes:z({},m.inner),children:[c_(z({tag:c.tag,attributes:z(z({},c.attributes),m.path)},E))]},T={tag:"g",attributes:z({},m.outer),children:[C]},_="mask-".concat(o||aa()),y="clip-".concat(o||aa()),I={tag:"mask",attributes:z(z({},Jh),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,T]},N={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:Yb(p)},I]};return n.push(N,{tag:"rect",attributes:z({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(_,")")},Jh)}),{children:n,attributes:r}}}},Jb={provides(t){let e=!1;Nr.matchMedia&&(e=Nr.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:z(z({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const s=z(z({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:z(z({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:z(z({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:z(z({},s),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:z(z({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:z(z({},s),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:z(z({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:z(z({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Zb={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},ex=[W2,Mb,Fb,Ub,jb,Gb,Kb,Qb,Xb,Jb,Zb];cb(ex,{mixoutsTo:Dt});Dt.noAuto;Dt.config;Dt.library;Dt.dom;const bd=Dt.parse;Dt.findIconDefinition;Dt.toHtml;const tx=Dt.icon;Dt.layer;Dt.text;Dt.counter;var aT={exports:{}},nx="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",rx=nx,ix=rx;function lT(){}function uT(){}uT.resetWarningCache=lT;var sx=function(){function t(r,i,s,o,a,u){if(u!==ix){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:uT,resetWarningCache:lT};return n.PropTypes=n,n};aT.exports=sx();var ox=aT.exports;const re=Z0(ox);function h_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function un(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?h_(Object(n),!0).forEach(function(r){ns(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Du(t){"@babel/helpers - typeof";return Du=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Du(t)}function ns(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ax(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function lx(t,e){if(t==null)return{};var n=ax(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function xd(t){return ux(t)||cx(t)||hx(t)||fx()}function ux(t){if(Array.isArray(t))return Nd(t)}function cx(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function hx(t,e){if(t){if(typeof t=="string")return Nd(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Nd(t,e)}}function Nd(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function fx(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dx(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,u=t.spin,c=t.spinPulse,f=t.spinReverse,p=t.pulse,m=t.fixedWidth,w=t.inverse,E=t.border,C=t.listItem,T=t.flip,_=t.size,y=t.rotation,I=t.pull,N=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":u,"fa-spin-reverse":f,"fa-spin-pulse":c,"fa-pulse":p,"fa-fw":m,"fa-inverse":w,"fa-border":E,"fa-li":C,"fa-flip":T===!0,"fa-flip-horizontal":T==="horizontal"||T==="both","fa-flip-vertical":T==="vertical"||T==="both"},ns(e,"fa-".concat(_),typeof _<"u"&&_!==null),ns(e,"fa-rotate-".concat(y),typeof y<"u"&&y!==null&&y!==0),ns(e,"fa-pull-".concat(I),typeof I<"u"&&I!==null),ns(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(N).map(function(V){return N[V]?V:null}).filter(function(V){return V})}function px(t){return t=t-0,t===t}function cT(t){return px(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var mx=["style"];function gx(t){return t.charAt(0).toUpperCase()+t.slice(1)}function yx(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=cT(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[gx(i)]=s:e[i]=s,e},{})}function hT(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(u){return hT(t,u)}),i=Object.keys(e.attributes||{}).reduce(function(u,c){var f=e.attributes[c];switch(c){case"class":u.attrs.className=f,delete e.attributes.class;break;case"style":u.attrs.style=yx(f);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?u.attrs[c.toLowerCase()]=f:u.attrs[cT(c)]=f}return u},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=lx(n,mx);return i.attrs.style=un(un({},i.attrs.style),o),t.apply(void 0,[e.tag,un(un({},i.attrs),a)].concat(xd(r)))}var fT=!1;try{fT=!0}catch{}function vx(){if(!fT&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function f_(t){if(t&&Du(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(bd.icon)return bd.icon(t);if(t===null)return null;if(t&&Du(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Zh(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ns({},t,e):{}}var d_={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},rs=cw.forwardRef(function(t,e){var n=un(un({},d_),t),r=n.icon,i=n.mask,s=n.symbol,o=n.className,a=n.title,u=n.titleId,c=n.maskId,f=f_(r),p=Zh("classes",[].concat(xd(dx(n)),xd((o||"").split(" ")))),m=Zh("transform",typeof n.transform=="string"?bd.transform(n.transform):n.transform),w=Zh("mask",f_(i)),E=tx(f,un(un(un(un({},p),m),w),{},{symbol:s,title:a,titleId:u,maskId:c}));if(!E)return vx("Could not find icon",f),null;var C=E.abstract,T={ref:e};return Object.keys(n).forEach(function(_){d_.hasOwnProperty(_)||(T[_]=n[_])}),_x(C[0],T)});rs.displayName="FontAwesomeIcon";rs.propTypes={beat:re.bool,border:re.bool,beatFade:re.bool,bounce:re.bool,className:re.string,fade:re.bool,flash:re.bool,mask:re.oneOfType([re.object,re.array,re.string]),maskId:re.string,fixedWidth:re.bool,inverse:re.bool,flip:re.oneOf([!0,!1,"horizontal","vertical","both"]),icon:re.oneOfType([re.object,re.array,re.string]),listItem:re.bool,pull:re.oneOf(["right","left"]),pulse:re.bool,rotation:re.oneOf([0,90,180,270]),shake:re.bool,size:re.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:re.bool,spinPulse:re.bool,spinReverse:re.bool,symbol:re.oneOfType([re.bool,re.string]),title:re.string,titleId:re.string,transform:re.oneOfType([re.string,re.object]),swapOpacity:re.bool};var _x=hT.bind(null,cw.createElement);/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const wx={prefix:"fas",iconName:"pencil",icon:[512,512,[9999,61504,"pencil-alt"],"f303","M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]},Ex={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},Tx={prefix:"fas",iconName:"sun",icon:[512,512,[9728],"f185","M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]},Ix={prefix:"fas",iconName:"link",icon:[640,512,[128279,"chain"],"f0c1","M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"]},Sx=Ix,Ax=()=>{const t=()=>{const e=document.querySelector(".header__menu");document.querySelector(".header__hamburger").classList.toggle("active"),e.classList.toggle("active")};return U.jsxs("div",{className:"header",children:[U.jsx("div",{className:"header__text",children:U.jsx(es,{to:"/",children:U.jsx("h1",{children:"Polanのホームページ"})})}),U.jsx("div",{className:"header__menu",children:U.jsxs("ul",{className:"header__menu-items",children:[U.jsx("li",{className:"header__menu-items-item",children:U.jsxs(es,{to:"/",onClick:t,children:[U.jsx(rs,{icon:Ex}),"ホーム"]})}),U.jsx("li",{className:"header__menu-items-item",children:U.jsxs(es,{to:"/board",onClick:t,children:[U.jsx(rs,{icon:wx}),"掲示板"]})}),U.jsx("li",{className:"header__menu-items-item",children:U.jsxs(es,{to:"/weather",onClick:t,children:[U.jsx(rs,{icon:Tx}),"天気予報"]})}),U.jsx("li",{className:"header__menu-items-item",children:U.jsxs("a",{href:"https://github.com/polan6/homepage",onClick:t,children:[U.jsx(rs,{icon:Sx}),"github"]})})]})}),U.jsxs("button",{className:"header__hamburger",onClick:t,children:[U.jsx("span",{}),U.jsx("span",{}),U.jsx("span",{})]})]})},Rx=()=>{const[t,e]=L.useState("");L.useEffect(()=>{e(n());const r=setInterval(()=>{e(n())},1e3);return()=>{clearInterval(r)}},[]);const n=()=>{const r=new Date(Date.now()+(new Date().getTimezoneOffset()+540)*60*1e3),i=r.getFullYear(),s=("00"+r.getMonth()).slice(-2),o=("00"+r.getHours()).slice(-2),a=("00"+r.getHours()).slice(-2),u=("00"+r.getMinutes()).slice(-2),c=("00"+r.getSeconds()).slice(-2);return`${i}/${s}/${o} ${a}:${u}:${c}`};return U.jsx("footer",{children:U.jsx("h3",{children:t})})},Cx=()=>U.jsxs("div",{className:"content",children:[U.jsx("h1",{children:"自己紹介"}),U.jsx("div",{children:"名前: Polan"}),U.jsx("div",{children:"好きなこと: コンピュータ・プログラミングの勉強"}),U.jsx("div",{children:"やりたいこと: 執筆活動"})]});var p_={};/**
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
 */const dT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Px=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},pT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,w=c&63;u||(w=64,o||(m=64)),r.push(n[f],n[p],n[m],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(dT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Px(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||p==null)throw new kx;const m=s<<2|a>>4;if(r.push(m),c!==64){const w=a<<4&240|c>>2;if(r.push(w),p!==64){const E=c<<6&192|p;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class kx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bx=function(t){const e=dT(t);return pT.encodeByteArray(e,!0)},Lu=function(t){return bx(t).replace(/\./g,"")},mT=function(t){try{return pT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function xx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Nx=()=>xx().__FIREBASE_DEFAULTS__,Ox=()=>{if(typeof process>"u"||typeof p_>"u")return;const t=p_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Dx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&mT(t[1]);return e&&JSON.parse(e)},Ac=()=>{try{return Nx()||Ox()||Dx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},gT=t=>{var e,n;return(n=(e=Ac())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Lx=t=>{const e=gT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},yT=()=>{var t;return(t=Ac())===null||t===void 0?void 0:t.config},vT=t=>{var e;return(e=Ac())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Vx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Mx(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Lu(JSON.stringify(n)),Lu(JSON.stringify(o)),""].join(".")}/**
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
 */function lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Fx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function Ux(){var t;const e=(t=Ac())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jx(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function _T(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function zx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Bx(){const t=lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function $x(){return!Ux()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function wT(){try{return typeof indexedDB=="object"}catch{return!1}}function ET(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function qx(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Hx="FirebaseError";class rn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Hx,Object.setPrototypeOf(this,rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ci.prototype.create)}}class Ci{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Wx(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new rn(i,a,r)}}function Wx(t,e){return t.replace(Gx,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Gx=/\{\$([^}]+)}/g;function Kx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ua(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(m_(s)&&m_(o)){if(!ua(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function m_(t){return t!==null&&typeof t=="object"}/**
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
 */function xa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Qx(t,e){const n=new Yx(t,e);return n.subscribe.bind(n)}class Yx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Xx(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ef),i.error===void 0&&(i.error=ef),i.complete===void 0&&(i.complete=ef);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Xx(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ef(){}/**
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
 */const Jx=1e3,Zx=2,eN=4*60*60*1e3,tN=.5;function g_(t,e=Jx,n=Zx){const r=e*Math.pow(n,t),i=Math.round(tN*r*(Math.random()-.5)*2);return Math.min(eN,r+i)}/**
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
 */function dt(t){return t&&t._delegate?t._delegate:t}class tn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Jr="[DEFAULT]";/**
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
 */class nN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Vx;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(iN(e))try{this.getOrInitializeService({instanceIdentifier:Jr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Jr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Jr){return this.instances.has(e)}getOptions(e=Jr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Jr){return this.component?this.component.multipleInstances?e:Jr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rN(t){return t===Jr?void 0:t}function iN(t){return t.instantiationMode==="EAGER"}/**
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
 */class sN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new nN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const oN={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},aN=se.INFO,lN={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},uN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=lN[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rc{constructor(e){this.name=e,this._logLevel=aN,this._logHandler=uN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?oN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const cN=(t,e)=>e.some(n=>t instanceof n);let y_,v_;function hN(){return y_||(y_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fN(){return v_||(v_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const TT=new WeakMap,Od=new WeakMap,IT=new WeakMap,tf=new WeakMap,wm=new WeakMap;function dN(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ar(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&TT.set(n,t)}).catch(()=>{}),wm.set(e,t),e}function pN(t){if(Od.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Od.set(t,e)}let Dd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Od.get(t);if(e==="objectStoreNames")return t.objectStoreNames||IT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ar(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function mN(t){Dd=t(Dd)}function gN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(nf(this),e,...n);return IT.set(r,e.sort?e.sort():[e]),Ar(r)}:fN().includes(t)?function(...e){return t.apply(nf(this),e),Ar(TT.get(this))}:function(...e){return Ar(t.apply(nf(this),e))}}function yN(t){return typeof t=="function"?gN(t):(t instanceof IDBTransaction&&pN(t),cN(t,hN())?new Proxy(t,Dd):t)}function Ar(t){if(t instanceof IDBRequest)return dN(t);if(tf.has(t))return tf.get(t);const e=yN(t);return e!==t&&(tf.set(t,e),wm.set(e,t)),e}const nf=t=>wm.get(t);function ST(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Ar(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Ar(o.result),u.oldVersion,u.newVersion,Ar(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const vN=["get","getKey","getAll","getAllKeys","count"],_N=["put","add","delete","clear"],rf=new Map;function __(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(rf.get(e))return rf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=_N.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||vN.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return rf.set(e,s),s}mN(t=>({...t,get:(e,n,r)=>__(e,n)||t.get(e,n,r),has:(e,n)=>!!__(e,n)||t.has(e,n)}));/**
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
 */class wN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(EN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function EN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ld="@firebase/app",w_="0.10.16";/**
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
 */const Gn=new Rc("@firebase/app"),TN="@firebase/app-compat",IN="@firebase/analytics-compat",SN="@firebase/analytics",AN="@firebase/app-check-compat",RN="@firebase/app-check",CN="@firebase/auth",PN="@firebase/auth-compat",kN="@firebase/database",bN="@firebase/data-connect",xN="@firebase/database-compat",NN="@firebase/functions",ON="@firebase/functions-compat",DN="@firebase/installations",LN="@firebase/installations-compat",VN="@firebase/messaging",MN="@firebase/messaging-compat",FN="@firebase/performance",UN="@firebase/performance-compat",jN="@firebase/remote-config",zN="@firebase/remote-config-compat",BN="@firebase/storage",$N="@firebase/storage-compat",qN="@firebase/firestore",HN="@firebase/vertexai",WN="@firebase/firestore-compat",GN="firebase",KN="11.0.2";/**
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
 */const Vd="[DEFAULT]",QN={[Ld]:"fire-core",[TN]:"fire-core-compat",[SN]:"fire-analytics",[IN]:"fire-analytics-compat",[RN]:"fire-app-check",[AN]:"fire-app-check-compat",[CN]:"fire-auth",[PN]:"fire-auth-compat",[kN]:"fire-rtdb",[bN]:"fire-data-connect",[xN]:"fire-rtdb-compat",[NN]:"fire-fn",[ON]:"fire-fn-compat",[DN]:"fire-iid",[LN]:"fire-iid-compat",[VN]:"fire-fcm",[MN]:"fire-fcm-compat",[FN]:"fire-perf",[UN]:"fire-perf-compat",[jN]:"fire-rc",[zN]:"fire-rc-compat",[BN]:"fire-gcs",[$N]:"fire-gcs-compat",[qN]:"fire-fst",[WN]:"fire-fst-compat",[HN]:"fire-vertex","fire-js":"fire-js",[GN]:"fire-js-all"};/**
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
 */const Vu=new Map,YN=new Map,Md=new Map;function E_(t,e){try{t.container.addComponent(e)}catch(n){Gn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _n(t){const e=t.name;if(Md.has(e))return Gn.debug(`There were multiple attempts to register component ${e}.`),!1;Md.set(e,t);for(const n of Vu.values())E_(n,t);for(const n of YN.values())E_(n,t);return!0}function Pi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ln(t){return t.settings!==void 0}/**
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
 */const XN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Rr=new Ci("app","Firebase",XN);/**
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
 */class JN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ms=KN;function AT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Vd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Rr.create("bad-app-name",{appName:String(i)});if(n||(n=yT()),!n)throw Rr.create("no-options");const s=Vu.get(i);if(s){if(ua(n,s.options)&&ua(r,s.config))return s;throw Rr.create("duplicate-app",{appName:i})}const o=new sN(i);for(const u of Md.values())o.addComponent(u);const a=new JN(n,r,o);return Vu.set(i,a),a}function Em(t=Vd){const e=Vu.get(t);if(!e&&t===Vd&&yT())return AT();if(!e)throw Rr.create("no-app",{appName:t});return e}function zt(t,e,n){var r;let i=(r=QN[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gn.warn(a.join(" "));return}_n(new tn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const ZN="firebase-heartbeat-database",eO=1,ca="firebase-heartbeat-store";let sf=null;function RT(){return sf||(sf=ST(ZN,eO,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ca)}catch(n){console.warn(n)}}}}).catch(t=>{throw Rr.create("idb-open",{originalErrorMessage:t.message})})),sf}async function tO(t){try{const n=(await RT()).transaction(ca),r=await n.objectStore(ca).get(CT(t));return await n.done,r}catch(e){if(e instanceof rn)Gn.warn(e.message);else{const n=Rr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gn.warn(n.message)}}}async function T_(t,e){try{const r=(await RT()).transaction(ca,"readwrite");await r.objectStore(ca).put(e,CT(t)),await r.done}catch(n){if(n instanceof rn)Gn.warn(n.message);else{const r=Rr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gn.warn(r.message)}}}function CT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const nO=1024,rO=30*24*60*60*1e3;class iO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new oO(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=I_();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=rO}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Gn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=I_(),{heartbeatsToSend:r,unsentEntries:i}=sO(this._heartbeatsCache.heartbeats),s=Lu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Gn.warn(n),""}}}function I_(){return new Date().toISOString().substring(0,10)}function sO(t,e=nO){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),S_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),S_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class oO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wT()?ET().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await tO(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return T_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return T_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function S_(t){return Lu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function aO(t){_n(new tn("platform-logger",e=>new wN(e),"PRIVATE")),_n(new tn("heartbeat",e=>new iO(e),"PRIVATE")),zt(Ld,w_,t),zt(Ld,w_,"esm2017"),zt("fire-js","")}aO("");var lO="firebase",uO="11.0.2";/**
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
 */zt(lO,uO,"app");function Tm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function PT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const cO=PT,kT=new Ci("auth","Firebase",PT());/**
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
 */const Mu=new Rc("@firebase/auth");function hO(t,...e){Mu.logLevel<=se.WARN&&Mu.warn(`Auth (${Ms}): ${t}`,...e)}function Ql(t,...e){Mu.logLevel<=se.ERROR&&Mu.error(`Auth (${Ms}): ${t}`,...e)}/**
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
 */function wn(t,...e){throw Sm(t,...e)}function Zt(t,...e){return Sm(t,...e)}function Im(t,e,n){const r=Object.assign(Object.assign({},cO()),{[e]:n});return new Ci("auth","Firebase",r).create(e,{appName:t.name})}function ui(t){return Im(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function fO(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&wn(t,"argument-error"),Im(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Sm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return kT.create(t,...e)}function X(t,e,...n){if(!t)throw Sm(e,...n)}function Vn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ql(e),new Error(e)}function Kn(t,e){t||Vn(e)}/**
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
 */function Fd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function dO(){return A_()==="http:"||A_()==="https:"}function A_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function pO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dO()||_T()||"connection"in navigator)?navigator.onLine:!0}function mO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Na{constructor(e,n){this.shortDelay=e,this.longDelay=n,Kn(n>e,"Short delay should be less than long delay!"),this.isMobile=Fx()||zx()}get(){return pO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Am(t,e){Kn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class bT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const gO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const yO=new Na(3e4,6e4);function Rm(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Fs(t,e,n,r,i={}){return xT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=xa(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return jx()||(c.referrerPolicy="no-referrer"),bT.fetch()(NT(t,t.config.apiHost,n,a),c)})}async function xT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},gO),e);try{const i=new _O(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Al(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Al(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Al(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Al(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Im(t,f,c);wn(t,f)}}catch(i){if(i instanceof rn)throw i;wn(t,"network-request-failed",{message:String(i)})}}async function vO(t,e,n,r,i={}){const s=await Fs(t,e,n,r,i);return"mfaPendingCredential"in s&&wn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function NT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Am(t.config,i):`${t.config.apiScheme}://${i}`}class _O{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Zt(this.auth,"network-request-failed")),yO.get())})}}function Al(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Zt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function wO(t,e){return Fs(t,"POST","/v1/accounts:delete",e)}async function OT(t,e){return Fs(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Mo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function EO(t,e=!1){const n=dt(t),r=await n.getIdToken(e),i=Cm(r);X(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Mo(of(i.auth_time)),issuedAtTime:Mo(of(i.iat)),expirationTime:Mo(of(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function of(t){return Number(t)*1e3}function Cm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ql("JWT malformed, contained fewer than 3 sections"),null;try{const i=mT(n);return i?JSON.parse(i):(Ql("Failed to decode base64 JWT payload"),null)}catch(i){return Ql("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function R_(t){const e=Cm(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ha(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof rn&&TO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function TO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class IO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ud{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mo(this.lastLoginAt),this.creationTime=Mo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Fu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ha(t,OT(n,{idToken:r}));X(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?DT(s.providerUserInfo):[],a=AO(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),f=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ud(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function SO(t){const e=dt(t);await Fu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function AO(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function DT(t){return t.map(e=>{var{providerId:n}=e,r=Tm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function RO(t,e){const n=await xT(t,{},async()=>{const r=xa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=NT(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",bT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function CO(t,e){return Fs(t,"POST","/v2/accounts:revokeToken",Rm(t,e))}/**
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
 */class hs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):R_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=R_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await RO(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new hs;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(X(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(X(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hs,this.toJSON())}_performRefresh(){return Vn("not implemented")}}/**
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
 */function sr(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Mn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Tm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new IO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ud(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ha(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return EO(this,e)}reload(){return SO(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Mn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Fu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ln(this.auth.app))return Promise.reject(ui(this.auth));const e=await this.getIdToken();return await ha(this,wO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,w=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,_=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:I,emailVerified:N,isAnonymous:V,providerData:j,stsTokenManager:A}=n;X(I&&A,e,"internal-error");const v=hs.fromJSON(this.name,A);X(typeof I=="string",e,"internal-error"),sr(p,e.name),sr(m,e.name),X(typeof N=="boolean",e,"internal-error"),X(typeof V=="boolean",e,"internal-error"),sr(w,e.name),sr(E,e.name),sr(C,e.name),sr(T,e.name),sr(_,e.name),sr(y,e.name);const S=new Mn({uid:I,auth:e,email:m,emailVerified:N,displayName:p,isAnonymous:V,photoURL:E,phoneNumber:w,tenantId:C,stsTokenManager:v,createdAt:_,lastLoginAt:y});return j&&Array.isArray(j)&&(S.providerData=j.map(R=>Object.assign({},R))),T&&(S._redirectEventId=T),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new hs;i.updateFromServerResponse(n);const s=new Mn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Fu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];X(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?DT(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new hs;a.updateFromIdToken(r);const u=new Mn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ud(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const C_=new Map;function Fn(t){Kn(t instanceof Function,"Expected a class definition");let e=C_.get(t);return e?(Kn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,C_.set(t,e),e)}/**
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
 */class LT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}LT.type="NONE";const P_=LT;/**
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
 */function Yl(t,e,n){return`firebase:${t}:${e}:${n}`}class fs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Yl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Yl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Mn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new fs(Fn(P_),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Fn(P_);const o=Yl(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const f=await c._get(o);if(f){const p=Mn._fromJSON(e,f);c!==s&&(a=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new fs(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new fs(s,e,r))}}/**
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
 */function k_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(UT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(VT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zT(e))return"Blackberry";if(BT(e))return"Webos";if(MT(e))return"Safari";if((e.includes("chrome/")||FT(e))&&!e.includes("edge/"))return"Chrome";if(jT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function VT(t=lt()){return/firefox\//i.test(t)}function MT(t=lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function FT(t=lt()){return/crios\//i.test(t)}function UT(t=lt()){return/iemobile/i.test(t)}function jT(t=lt()){return/android/i.test(t)}function zT(t=lt()){return/blackberry/i.test(t)}function BT(t=lt()){return/webos/i.test(t)}function Pm(t=lt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function PO(t=lt()){var e;return Pm(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function kO(){return Bx()&&document.documentMode===10}function $T(t=lt()){return Pm(t)||jT(t)||BT(t)||zT(t)||/windows phone/i.test(t)||UT(t)}/**
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
 */function qT(t,e=[]){let n;switch(t){case"Browser":n=k_(lt());break;case"Worker":n=`${k_(lt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ms}/${r}`}/**
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
 */class bO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function xO(t,e={}){return Fs(t,"GET","/v2/passwordPolicy",Rm(t,e))}/**
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
 */const NO=6;class OO{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:NO,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class DO{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new b_(this),this.idTokenSubscription=new b_(this),this.beforeStateQueue=new bO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Fn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await fs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await OT(this,{idToken:e}),r=await Mn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ln(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ln(this.app))return Promise.reject(ui(this));const n=e?dt(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ln(this.app)?Promise.reject(ui(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ln(this.app)?Promise.reject(ui(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xO(this),n=new OO(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ci("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await CO(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Fn(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await fs.create(this,[Fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&hO(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Cc(t){return dt(t)}class b_{constructor(e){this.auth=e,this.observer=null,this.addObserver=Qx(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let km={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function LO(t){km=t}function VO(t){return km.loadJS(t)}function MO(){return km.gapiScript}function FO(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function UO(t,e){const n=Pi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ua(s,e??{}))return i;wn(i,"already-initialized")}return n.initialize({options:e})}function jO(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function zO(t,e,n){const r=Cc(t);X(r._canInitEmulator,r,"emulator-config-failed"),X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=HT(e),{host:o,port:a}=BO(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),$O()}function HT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function BO(t){const e=HT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:x_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:x_(o)}}}function x_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function $O(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class WT{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Vn("not implemented")}_getIdTokenResponse(e){return Vn("not implemented")}_linkToIdToken(e,n){return Vn("not implemented")}_getReauthenticationResolver(e){return Vn("not implemented")}}/**
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
 */async function ds(t,e){return vO(t,"POST","/v1/accounts:signInWithIdp",Rm(t,e))}/**
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
 */const qO="http://localhost";class _i extends WT{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new _i(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Tm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new _i(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ds(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ds(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ds(e,n)}buildRequest(){const e={requestUri:qO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xa(n)}return e}}/**
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
 */class Oa extends bm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class hr extends Oa{constructor(){super("facebook.com")}static credential(e){return _i._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hr.credential(e.oauthAccessToken)}catch{return null}}}hr.FACEBOOK_SIGN_IN_METHOD="facebook.com";hr.PROVIDER_ID="facebook.com";/**
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
 */class Nn extends Oa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return _i._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Nn.credential(n,r)}catch{return null}}}Nn.GOOGLE_SIGN_IN_METHOD="google.com";Nn.PROVIDER_ID="google.com";/**
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
 */class fr extends Oa{constructor(){super("github.com")}static credential(e){return _i._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fr.credential(e.oauthAccessToken)}catch{return null}}}fr.GITHUB_SIGN_IN_METHOD="github.com";fr.PROVIDER_ID="github.com";/**
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
 */class dr extends Oa{constructor(){super("twitter.com")}static credential(e,n){return _i._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return dr.credential(n,r)}catch{return null}}}dr.TWITTER_SIGN_IN_METHOD="twitter.com";dr.PROVIDER_ID="twitter.com";/**
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
 */class Is{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Mn._fromIdTokenResponse(e,r,i),o=N_(r);return new Is({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=N_(r);return new Is({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function N_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Uu extends rn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Uu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Uu(e,n,r,i)}}function GT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Uu._fromErrorAndOperation(t,s,e,r):s})}async function HO(t,e,n=!1){const r=await ha(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Is._forOperation(t,"link",r)}/**
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
 */async function WO(t,e,n=!1){const{auth:r}=t;if(Ln(r.app))return Promise.reject(ui(r));const i="reauthenticate";try{const s=await ha(t,GT(r,i,e,t),n);X(s.idToken,r,"internal-error");const o=Cm(s.idToken);X(o,r,"internal-error");const{sub:a}=o;return X(t.uid===a,r,"user-mismatch"),Is._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&wn(r,"user-mismatch"),s}}/**
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
 */async function GO(t,e,n=!1){if(Ln(t.app))return Promise.reject(ui(t));const r="signIn",i=await GT(t,r,e),s=await Is._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function KO(t,e,n,r){return dt(t).onIdTokenChanged(e,n,r)}function QO(t,e,n){return dt(t).beforeAuthStateChanged(e,n)}function YO(t){return dt(t).signOut()}const ju="__sak";/**
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
 */class KT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ju,"1"),this.storage.removeItem(ju),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const XO=1e3,JO=10;class QT extends KT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=$T(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);kO()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,JO):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},XO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}QT.type="LOCAL";const ZO=QT;/**
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
 */class YT extends KT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}YT.type="SESSION";const XT=YT;/**
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
 */function eD(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Pc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Pc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await eD(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pc.receivers=[];/**
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
 */function xm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class tD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=xm("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function mn(){return window}function nD(t){mn().location.href=t}/**
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
 */function JT(){return typeof mn().WorkerGlobalScope<"u"&&typeof mn().importScripts=="function"}async function rD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function iD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function sD(){return JT()?self:null}/**
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
 */const ZT="firebaseLocalStorageDb",oD=1,zu="firebaseLocalStorage",eI="fbase_key";class Da{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function kc(t,e){return t.transaction([zu],e?"readwrite":"readonly").objectStore(zu)}function aD(){const t=indexedDB.deleteDatabase(ZT);return new Da(t).toPromise()}function jd(){const t=indexedDB.open(ZT,oD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(zu,{keyPath:eI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(zu)?e(r):(r.close(),await aD(),e(await jd()))})})}async function O_(t,e,n){const r=kc(t,!0).put({[eI]:e,value:n});return new Da(r).toPromise()}async function lD(t,e){const n=kc(t,!1).get(e),r=await new Da(n).toPromise();return r===void 0?null:r.value}function D_(t,e){const n=kc(t,!0).delete(e);return new Da(n).toPromise()}const uD=800,cD=3;class tI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>cD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return JT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pc._getInstance(sD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await rD(),!this.activeServiceWorker)return;this.sender=new tD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||iD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jd();return await O_(e,ju,"1"),await D_(e,ju),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>O_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>lD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>D_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=kc(i,!1).getAll();return new Da(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}tI.type="LOCAL";const hD=tI;new Na(3e4,6e4);/**
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
 */function nI(t,e){return e?Fn(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Nm extends WT{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ds(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ds(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ds(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function fD(t){return GO(t.auth,new Nm(t),t.bypassAuthState)}function dD(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),WO(n,new Nm(t),t.bypassAuthState)}async function pD(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),HO(n,new Nm(t),t.bypassAuthState)}/**
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
 */class rI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fD;case"linkViaPopup":case"linkViaRedirect":return pD;case"reauthViaPopup":case"reauthViaRedirect":return dD;default:wn(this.auth,"internal-error")}}resolve(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const mD=new Na(2e3,1e4);async function gD(t,e,n){if(Ln(t.app))return Promise.reject(Zt(t,"operation-not-supported-in-this-environment"));const r=Cc(t);fO(t,e,bm);const i=nI(r,n);return new ri(r,"signInViaPopup",e,i).executeNotNull()}class ri extends rI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ri.currentPopupAction&&ri.currentPopupAction.cancel(),ri.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){Kn(this.filter.length===1,"Popup operations only handle one event");const e=xm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ri.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mD.get())};e()}}ri.currentPopupAction=null;/**
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
 */const yD="pendingRedirect",Xl=new Map;class vD extends rI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Xl.get(this.auth._key());if(!e){try{const r=await _D(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Xl.set(this.auth._key(),e)}return this.bypassAuthState||Xl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _D(t,e){const n=TD(e),r=ED(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function wD(t,e){Xl.set(t._key(),e)}function ED(t){return Fn(t._redirectPersistence)}function TD(t){return Yl(yD,t.config.apiKey,t.name)}async function ID(t,e,n=!1){if(Ln(t.app))return Promise.reject(ui(t));const r=Cc(t),i=nI(r,e),o=await new vD(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const SD=10*60*1e3;class AD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!RD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!iI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Zt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=SD&&this.cachedEventUids.clear(),this.cachedEventUids.has(L_(e))}saveEventToCache(e){this.cachedEventUids.add(L_(e)),this.lastProcessedEventTime=Date.now()}}function L_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function iI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function RD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return iI(t);default:return!1}}/**
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
 */async function CD(t,e={}){return Fs(t,"GET","/v1/projects",e)}/**
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
 */const PD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kD=/^https?/;async function bD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await CD(t);for(const n of e)try{if(xD(n))return}catch{}wn(t,"unauthorized-domain")}function xD(t){const e=Fd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!kD.test(n))return!1;if(PD.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const ND=new Na(3e4,6e4);function V_(){const t=mn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function OD(t){return new Promise((e,n)=>{var r,i,s;function o(){V_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{V_(),n(Zt(t,"network-request-failed"))},timeout:ND.get()})}if(!((i=(r=mn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=mn().gapi)===null||s===void 0)&&s.load)o();else{const a=FO("iframefcb");return mn()[a]=()=>{gapi.load?o():n(Zt(t,"network-request-failed"))},VO(`${MO()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Jl=null,e})}let Jl=null;function DD(t){return Jl=Jl||OD(t),Jl}/**
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
 */const LD=new Na(5e3,15e3),VD="__/auth/iframe",MD="emulator/auth/iframe",FD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},UD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jD(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Am(e,MD):`https://${t.config.authDomain}/${VD}`,r={apiKey:e.apiKey,appName:t.name,v:Ms},i=UD.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${xa(r).slice(1)}`}async function zD(t){const e=await DD(t),n=mn().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:jD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:FD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Zt(t,"network-request-failed"),a=mn().setTimeout(()=>{s(o)},LD.get());function u(){mn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const BD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$D=500,qD=600,HD="_blank",WD="http://localhost";class M_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function GD(t,e,n,r=$D,i=qD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},BD),{width:r.toString(),height:i.toString(),top:s,left:o}),c=lt().toLowerCase();n&&(a=FT(c)?HD:n),VT(c)&&(e=e||WD,u.scrollbars="yes");const f=Object.entries(u).reduce((m,[w,E])=>`${m}${w}=${E},`,"");if(PO(c)&&a!=="_self")return KD(e||"",a),new M_(null);const p=window.open(e||"",a,f);X(p,t,"popup-blocked");try{p.focus()}catch{}return new M_(p)}function KD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const QD="__/auth/handler",YD="emulator/auth/handler",XD=encodeURIComponent("fac");async function F_(t,e,n,r,i,s){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ms,eventId:i};if(e instanceof bm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Kx(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Oa){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const u=await t._getAppCheckToken(),c=u?`#${XD}=${encodeURIComponent(u)}`:"";return`${JD(t)}?${xa(a).slice(1)}${c}`}function JD({config:t}){return t.emulator?Am(t,YD):`https://${t.authDomain}/${QD}`}/**
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
 */const af="webStorageSupport";class ZD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=XT,this._completeRedirectFn=ID,this._overrideRedirectResult=wD}async _openPopup(e,n,r,i){var s;Kn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await F_(e,n,r,Fd(),i);return GD(e,o,xm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await F_(e,n,r,Fd(),i);return nD(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Kn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await zD(e),r=new AD(e);return n.register("authEvent",i=>(X(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(af,{type:af},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[af];o!==void 0&&n(!!o),wn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=bD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return $T()||MT()||Pm()}}const eL=ZD;var U_="@firebase/auth",j_="1.8.1";/**
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
 */class tL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function nL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function rL(t){_n(new tn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qT(t)},c=new DO(r,i,s,u);return jO(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),_n(new tn("auth-internal",e=>{const n=Cc(e.getProvider("auth").getImmediate());return(r=>new tL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),zt(U_,j_,nL(t)),zt(U_,j_,"esm2017")}/**
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
 */const iL=5*60,sL=vT("authIdTokenMaxAge")||iL;let z_=null;const oL=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>sL)return;const i=n==null?void 0:n.token;z_!==i&&(z_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function aL(t=Em()){const e=Pi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=UO(t,{popupRedirectResolver:eL,persistence:[hD,ZO,XT]}),r=vT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=oL(s.toString());QO(n,o,()=>o(n.currentUser)),KO(n,a=>o(a))}}const i=gT("auth");return i&&zO(n,`http://${i}`),n}function lL(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}LO({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Zt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",lL().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});rL("Browser");const sI="@firebase/installations",Om="0.6.11";/**
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
 */const oI=1e4,aI=`w:${Om}`,lI="FIS_v2",uL="https://firebaseinstallations.googleapis.com/v1",cL=60*60*1e3,hL="installations",fL="Installations";/**
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
 */const dL={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},wi=new Ci(hL,fL,dL);function uI(t){return t instanceof rn&&t.code.includes("request-failed")}/**
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
 */function cI({projectId:t}){return`${uL}/projects/${t}/installations`}function hI(t){return{token:t.token,requestStatus:2,expiresIn:mL(t.expiresIn),creationTime:Date.now()}}async function fI(t,e){const r=(await e.json()).error;return wi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function dI({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function pL(t,{refreshToken:e}){const n=dI(t);return n.append("Authorization",gL(e)),n}async function pI(t){const e=await t();return e.status>=500&&e.status<600?t():e}function mL(t){return Number(t.replace("s","000"))}function gL(t){return`${lI} ${t}`}/**
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
 */async function yL({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=cI(t),i=dI(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:lI,appId:t.appId,sdkVersion:aI},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await pI(()=>fetch(r,a));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:hI(c.authToken)}}else throw await fI("Create Installation",u)}/**
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
 */function mI(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function vL(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const _L=/^[cdef][\w-]{21}$/,zd="";function wL(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=EL(t);return _L.test(n)?n:zd}catch{return zd}}function EL(t){return vL(t).substr(0,22)}/**
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
 */function bc(t){return`${t.appName}!${t.appId}`}/**
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
 */const gI=new Map;function yI(t,e){const n=bc(t);vI(n,e),TL(n,e)}function vI(t,e){const n=gI.get(t);if(n)for(const r of n)r(e)}function TL(t,e){const n=IL();n&&n.postMessage({key:t,fid:e}),SL()}let ii=null;function IL(){return!ii&&"BroadcastChannel"in self&&(ii=new BroadcastChannel("[Firebase] FID Change"),ii.onmessage=t=>{vI(t.data.key,t.data.fid)}),ii}function SL(){gI.size===0&&ii&&(ii.close(),ii=null)}/**
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
 */const AL="firebase-installations-database",RL=1,Ei="firebase-installations-store";let lf=null;function Dm(){return lf||(lf=ST(AL,RL,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ei)}}})),lf}async function Bu(t,e){const n=bc(t),i=(await Dm()).transaction(Ei,"readwrite"),s=i.objectStore(Ei),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&yI(t,e.fid),e}async function _I(t){const e=bc(t),r=(await Dm()).transaction(Ei,"readwrite");await r.objectStore(Ei).delete(e),await r.done}async function xc(t,e){const n=bc(t),i=(await Dm()).transaction(Ei,"readwrite"),s=i.objectStore(Ei),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&yI(t,a.fid),a}/**
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
 */async function Lm(t){let e;const n=await xc(t.appConfig,r=>{const i=CL(r),s=PL(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===zd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function CL(t){const e=t||{fid:wL(),registrationStatus:0};return wI(e)}function PL(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(wi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=kL(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:bL(t)}:{installationEntry:e}}async function kL(t,e){try{const n=await yL(t,e);return Bu(t.appConfig,n)}catch(n){throw uI(n)&&n.customData.serverCode===409?await _I(t.appConfig):await Bu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function bL(t){let e=await B_(t.appConfig);for(;e.registrationStatus===1;)await mI(100),e=await B_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Lm(t);return r||n}return e}function B_(t){return xc(t,e=>{if(!e)throw wi.create("installation-not-found");return wI(e)})}function wI(t){return xL(t)?{fid:t.fid,registrationStatus:0}:t}function xL(t){return t.registrationStatus===1&&t.registrationTime+oI<Date.now()}/**
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
 */async function NL({appConfig:t,heartbeatServiceProvider:e},n){const r=OL(t,n),i=pL(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:aI,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await pI(()=>fetch(r,a));if(u.ok){const c=await u.json();return hI(c)}else throw await fI("Generate Auth Token",u)}function OL(t,{fid:e}){return`${cI(t)}/${e}/authTokens:generate`}/**
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
 */async function Vm(t,e=!1){let n;const r=await xc(t.appConfig,s=>{if(!EI(s))throw wi.create("not-registered");const o=s.authToken;if(!e&&VL(o))return s;if(o.requestStatus===1)return n=DL(t,e),s;{if(!navigator.onLine)throw wi.create("app-offline");const a=FL(s);return n=LL(t,a),a}});return n?await n:r.authToken}async function DL(t,e){let n=await $_(t.appConfig);for(;n.authToken.requestStatus===1;)await mI(100),n=await $_(t.appConfig);const r=n.authToken;return r.requestStatus===0?Vm(t,e):r}function $_(t){return xc(t,e=>{if(!EI(e))throw wi.create("not-registered");const n=e.authToken;return UL(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function LL(t,e){try{const n=await NL(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Bu(t.appConfig,r),n}catch(n){if(uI(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await _I(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Bu(t.appConfig,r)}throw n}}function EI(t){return t!==void 0&&t.registrationStatus===2}function VL(t){return t.requestStatus===2&&!ML(t)}function ML(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+cL}function FL(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function UL(t){return t.requestStatus===1&&t.requestTime+oI<Date.now()}/**
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
 */async function jL(t){const e=t,{installationEntry:n,registrationPromise:r}=await Lm(e);return r?r.catch(console.error):Vm(e).catch(console.error),n.fid}/**
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
 */async function zL(t,e=!1){const n=t;return await BL(n),(await Vm(n,e)).token}async function BL(t){const{registrationPromise:e}=await Lm(t);e&&await e}/**
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
 */function $L(t){if(!t||!t.options)throw uf("App Configuration");if(!t.name)throw uf("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw uf(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function uf(t){return wi.create("missing-app-config-values",{valueName:t})}/**
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
 */const TI="installations",qL="installations-internal",HL=t=>{const e=t.getProvider("app").getImmediate(),n=$L(e),r=Pi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},WL=t=>{const e=t.getProvider("app").getImmediate(),n=Pi(e,TI).getImmediate();return{getId:()=>jL(n),getToken:i=>zL(n,i)}};function GL(){_n(new tn(TI,HL,"PUBLIC")),_n(new tn(qL,WL,"PRIVATE"))}GL();zt(sI,Om);zt(sI,Om,"esm2017");/**
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
 */const $u="analytics",KL="firebase_id",QL="origin",YL=60*1e3,XL="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Mm="https://www.googletagmanager.com/gtag/js";/**
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
 */const JL={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},kt=new Ci("analytics","Analytics",JL);/**
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
 */function ZL(t){if(!t.startsWith(Mm)){const e=kt.create("invalid-gtag-resource",{gtagURL:t});return Tt.warn(e.message),""}return t}function II(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function e4(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function t4(t,e){const n=e4("firebase-js-sdk-policy",{createScriptURL:ZL}),r=document.createElement("script"),i=`${Mm}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function n4(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function r4(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await II(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(a){Tt.error(a)}t("config",i,s)}async function i4(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await II(n);for(const u of o){const c=a.find(p=>p.measurementId===u),f=c&&e[c.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Tt.error(s)}}function s4(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,u]=o;await i4(t,e,n,a,u)}else if(s==="config"){const[a,u]=o;await r4(t,e,n,r,a,u)}else if(s==="consent"){const[a,u]=o;t("consent",a,u)}else if(s==="get"){const[a,u,c]=o;t("get",a,u,c)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){Tt.error(a)}}return i}function o4(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=s4(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function a4(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Mm)&&n.src.includes(t))return n;return null}/**
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
 */const l4=30,u4=1e3;class c4{constructor(e={},n=u4){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const SI=new c4;function h4(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function f4(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:h4(r)},s=XL.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(a=u.error.message)}catch{}throw kt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function d4(t,e=SI,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw kt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw kt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new g4;return setTimeout(async()=>{a.abort()},YL),AI({appId:r,apiKey:i,measurementId:s},o,a,e)}async function AI(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=SI){var s;const{appId:o,measurementId:a}=t;try{await p4(r,e)}catch(u){if(a)return Tt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw u}try{const u=await f4(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!m4(c)){if(i.deleteThrottleMetadata(o),a)return Tt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw u}const f=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?g_(n,i.intervalMillis,l4):g_(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(o,p),Tt.debug(`Calling attemptFetch again in ${f} millis`),AI(t,p,r,i)}}function p4(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(kt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function m4(t){if(!(t instanceof rn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class g4{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function y4(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function v4(){if(wT())try{await ET()}catch(t){return Tt.warn(kt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Tt.warn(kt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function _4(t,e,n,r,i,s,o){var a;const u=d4(t);u.then(w=>{n[w.measurementId]=w.appId,t.options.measurementId&&w.measurementId!==t.options.measurementId&&Tt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${w.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(w=>Tt.error(w)),e.push(u);const c=v4().then(w=>{if(w)return r.getId()}),[f,p]=await Promise.all([u,c]);a4(s)||t4(s,f.measurementId),i("js",new Date);const m=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return m[QL]="firebase",m.update=!0,p!=null&&(m[KL]=p),i("config",f.measurementId,m),f.measurementId}/**
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
 */class w4{constructor(e){this.app=e}_delete(){return delete Fo[this.app.options.appId],Promise.resolve()}}let Fo={},q_=[];const H_={};let cf="dataLayer",E4="gtag",W_,RI,G_=!1;function T4(){const t=[];if(_T()&&t.push("This is a browser extension environment."),qx()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=kt.create("invalid-analytics-context",{errorInfo:e});Tt.warn(n.message)}}function I4(t,e,n){T4();const r=t.options.appId;if(!r)throw kt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Tt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw kt.create("no-api-key");if(Fo[r]!=null)throw kt.create("already-exists",{id:r});if(!G_){n4(cf);const{wrappedGtag:s,gtagCore:o}=o4(Fo,q_,H_,cf,E4);RI=s,W_=o,G_=!0}return Fo[r]=_4(t,q_,H_,e,W_,cf,n),new w4(t)}function S4(t=Em()){t=dt(t);const e=Pi(t,$u);return e.isInitialized()?e.getImmediate():A4(t)}function A4(t,e={}){const n=Pi(t,$u);if(n.isInitialized()){const i=n.getImmediate();if(ua(e,n.getOptions()))return i;throw kt.create("already-initialized")}return n.initialize({options:e})}function R4(t,e,n,r){t=dt(t),y4(RI,Fo[t.app.options.appId],e,n,r).catch(i=>Tt.error(i))}const K_="@firebase/analytics",Q_="0.10.10";function C4(){_n(new tn($u,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return I4(r,i,n)},"PUBLIC")),_n(new tn("analytics-internal",t,"PRIVATE")),zt(K_,Q_),zt(K_,Q_,"esm2017");function t(e){try{const n=e.getProvider($u).getImmediate();return{logEvent:(r,i,s)=>R4(n,r,i,s)}}catch(n){throw kt.create("interop-component-reg-failed",{reason:n})}}}C4();var Y_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ci,CI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,v){function S(){}S.prototype=v.prototype,A.D=v.prototype,A.prototype=new S,A.prototype.constructor=A,A.C=function(R,k,x){for(var P=Array(arguments.length-2),Lt=2;Lt<arguments.length;Lt++)P[Lt-2]=arguments[Lt];return v.prototype[k].apply(R,P)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(A,v,S){S||(S=0);var R=Array(16);if(typeof v=="string")for(var k=0;16>k;++k)R[k]=v.charCodeAt(S++)|v.charCodeAt(S++)<<8|v.charCodeAt(S++)<<16|v.charCodeAt(S++)<<24;else for(k=0;16>k;++k)R[k]=v[S++]|v[S++]<<8|v[S++]<<16|v[S++]<<24;v=A.g[0],S=A.g[1],k=A.g[2];var x=A.g[3],P=v+(x^S&(k^x))+R[0]+3614090360&4294967295;v=S+(P<<7&4294967295|P>>>25),P=x+(k^v&(S^k))+R[1]+3905402710&4294967295,x=v+(P<<12&4294967295|P>>>20),P=k+(S^x&(v^S))+R[2]+606105819&4294967295,k=x+(P<<17&4294967295|P>>>15),P=S+(v^k&(x^v))+R[3]+3250441966&4294967295,S=k+(P<<22&4294967295|P>>>10),P=v+(x^S&(k^x))+R[4]+4118548399&4294967295,v=S+(P<<7&4294967295|P>>>25),P=x+(k^v&(S^k))+R[5]+1200080426&4294967295,x=v+(P<<12&4294967295|P>>>20),P=k+(S^x&(v^S))+R[6]+2821735955&4294967295,k=x+(P<<17&4294967295|P>>>15),P=S+(v^k&(x^v))+R[7]+4249261313&4294967295,S=k+(P<<22&4294967295|P>>>10),P=v+(x^S&(k^x))+R[8]+1770035416&4294967295,v=S+(P<<7&4294967295|P>>>25),P=x+(k^v&(S^k))+R[9]+2336552879&4294967295,x=v+(P<<12&4294967295|P>>>20),P=k+(S^x&(v^S))+R[10]+4294925233&4294967295,k=x+(P<<17&4294967295|P>>>15),P=S+(v^k&(x^v))+R[11]+2304563134&4294967295,S=k+(P<<22&4294967295|P>>>10),P=v+(x^S&(k^x))+R[12]+1804603682&4294967295,v=S+(P<<7&4294967295|P>>>25),P=x+(k^v&(S^k))+R[13]+4254626195&4294967295,x=v+(P<<12&4294967295|P>>>20),P=k+(S^x&(v^S))+R[14]+2792965006&4294967295,k=x+(P<<17&4294967295|P>>>15),P=S+(v^k&(x^v))+R[15]+1236535329&4294967295,S=k+(P<<22&4294967295|P>>>10),P=v+(k^x&(S^k))+R[1]+4129170786&4294967295,v=S+(P<<5&4294967295|P>>>27),P=x+(S^k&(v^S))+R[6]+3225465664&4294967295,x=v+(P<<9&4294967295|P>>>23),P=k+(v^S&(x^v))+R[11]+643717713&4294967295,k=x+(P<<14&4294967295|P>>>18),P=S+(x^v&(k^x))+R[0]+3921069994&4294967295,S=k+(P<<20&4294967295|P>>>12),P=v+(k^x&(S^k))+R[5]+3593408605&4294967295,v=S+(P<<5&4294967295|P>>>27),P=x+(S^k&(v^S))+R[10]+38016083&4294967295,x=v+(P<<9&4294967295|P>>>23),P=k+(v^S&(x^v))+R[15]+3634488961&4294967295,k=x+(P<<14&4294967295|P>>>18),P=S+(x^v&(k^x))+R[4]+3889429448&4294967295,S=k+(P<<20&4294967295|P>>>12),P=v+(k^x&(S^k))+R[9]+568446438&4294967295,v=S+(P<<5&4294967295|P>>>27),P=x+(S^k&(v^S))+R[14]+3275163606&4294967295,x=v+(P<<9&4294967295|P>>>23),P=k+(v^S&(x^v))+R[3]+4107603335&4294967295,k=x+(P<<14&4294967295|P>>>18),P=S+(x^v&(k^x))+R[8]+1163531501&4294967295,S=k+(P<<20&4294967295|P>>>12),P=v+(k^x&(S^k))+R[13]+2850285829&4294967295,v=S+(P<<5&4294967295|P>>>27),P=x+(S^k&(v^S))+R[2]+4243563512&4294967295,x=v+(P<<9&4294967295|P>>>23),P=k+(v^S&(x^v))+R[7]+1735328473&4294967295,k=x+(P<<14&4294967295|P>>>18),P=S+(x^v&(k^x))+R[12]+2368359562&4294967295,S=k+(P<<20&4294967295|P>>>12),P=v+(S^k^x)+R[5]+4294588738&4294967295,v=S+(P<<4&4294967295|P>>>28),P=x+(v^S^k)+R[8]+2272392833&4294967295,x=v+(P<<11&4294967295|P>>>21),P=k+(x^v^S)+R[11]+1839030562&4294967295,k=x+(P<<16&4294967295|P>>>16),P=S+(k^x^v)+R[14]+4259657740&4294967295,S=k+(P<<23&4294967295|P>>>9),P=v+(S^k^x)+R[1]+2763975236&4294967295,v=S+(P<<4&4294967295|P>>>28),P=x+(v^S^k)+R[4]+1272893353&4294967295,x=v+(P<<11&4294967295|P>>>21),P=k+(x^v^S)+R[7]+4139469664&4294967295,k=x+(P<<16&4294967295|P>>>16),P=S+(k^x^v)+R[10]+3200236656&4294967295,S=k+(P<<23&4294967295|P>>>9),P=v+(S^k^x)+R[13]+681279174&4294967295,v=S+(P<<4&4294967295|P>>>28),P=x+(v^S^k)+R[0]+3936430074&4294967295,x=v+(P<<11&4294967295|P>>>21),P=k+(x^v^S)+R[3]+3572445317&4294967295,k=x+(P<<16&4294967295|P>>>16),P=S+(k^x^v)+R[6]+76029189&4294967295,S=k+(P<<23&4294967295|P>>>9),P=v+(S^k^x)+R[9]+3654602809&4294967295,v=S+(P<<4&4294967295|P>>>28),P=x+(v^S^k)+R[12]+3873151461&4294967295,x=v+(P<<11&4294967295|P>>>21),P=k+(x^v^S)+R[15]+530742520&4294967295,k=x+(P<<16&4294967295|P>>>16),P=S+(k^x^v)+R[2]+3299628645&4294967295,S=k+(P<<23&4294967295|P>>>9),P=v+(k^(S|~x))+R[0]+4096336452&4294967295,v=S+(P<<6&4294967295|P>>>26),P=x+(S^(v|~k))+R[7]+1126891415&4294967295,x=v+(P<<10&4294967295|P>>>22),P=k+(v^(x|~S))+R[14]+2878612391&4294967295,k=x+(P<<15&4294967295|P>>>17),P=S+(x^(k|~v))+R[5]+4237533241&4294967295,S=k+(P<<21&4294967295|P>>>11),P=v+(k^(S|~x))+R[12]+1700485571&4294967295,v=S+(P<<6&4294967295|P>>>26),P=x+(S^(v|~k))+R[3]+2399980690&4294967295,x=v+(P<<10&4294967295|P>>>22),P=k+(v^(x|~S))+R[10]+4293915773&4294967295,k=x+(P<<15&4294967295|P>>>17),P=S+(x^(k|~v))+R[1]+2240044497&4294967295,S=k+(P<<21&4294967295|P>>>11),P=v+(k^(S|~x))+R[8]+1873313359&4294967295,v=S+(P<<6&4294967295|P>>>26),P=x+(S^(v|~k))+R[15]+4264355552&4294967295,x=v+(P<<10&4294967295|P>>>22),P=k+(v^(x|~S))+R[6]+2734768916&4294967295,k=x+(P<<15&4294967295|P>>>17),P=S+(x^(k|~v))+R[13]+1309151649&4294967295,S=k+(P<<21&4294967295|P>>>11),P=v+(k^(S|~x))+R[4]+4149444226&4294967295,v=S+(P<<6&4294967295|P>>>26),P=x+(S^(v|~k))+R[11]+3174756917&4294967295,x=v+(P<<10&4294967295|P>>>22),P=k+(v^(x|~S))+R[2]+718787259&4294967295,k=x+(P<<15&4294967295|P>>>17),P=S+(x^(k|~v))+R[9]+3951481745&4294967295,A.g[0]=A.g[0]+v&4294967295,A.g[1]=A.g[1]+(k+(P<<21&4294967295|P>>>11))&4294967295,A.g[2]=A.g[2]+k&4294967295,A.g[3]=A.g[3]+x&4294967295}r.prototype.u=function(A,v){v===void 0&&(v=A.length);for(var S=v-this.blockSize,R=this.B,k=this.h,x=0;x<v;){if(k==0)for(;x<=S;)i(this,A,x),x+=this.blockSize;if(typeof A=="string"){for(;x<v;)if(R[k++]=A.charCodeAt(x++),k==this.blockSize){i(this,R),k=0;break}}else for(;x<v;)if(R[k++]=A[x++],k==this.blockSize){i(this,R),k=0;break}}this.h=k,this.o+=v},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var v=1;v<A.length-8;++v)A[v]=0;var S=8*this.o;for(v=A.length-8;v<A.length;++v)A[v]=S&255,S/=256;for(this.u(A),A=Array(16),v=S=0;4>v;++v)for(var R=0;32>R;R+=8)A[S++]=this.g[v]>>>R&255;return A};function s(A,v){var S=a;return Object.prototype.hasOwnProperty.call(S,A)?S[A]:S[A]=v(A)}function o(A,v){this.h=v;for(var S=[],R=!0,k=A.length-1;0<=k;k--){var x=A[k]|0;R&&x==v||(S[k]=x,R=!1)}this.g=S}var a={};function u(A){return-128<=A&&128>A?s(A,function(v){return new o([v|0],0>v?-1:0)}):new o([A|0],0>A?-1:0)}function c(A){if(isNaN(A)||!isFinite(A))return p;if(0>A)return T(c(-A));for(var v=[],S=1,R=0;A>=S;R++)v[R]=A/S|0,S*=4294967296;return new o(v,0)}function f(A,v){if(A.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(A.charAt(0)=="-")return T(f(A.substring(1),v));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=c(Math.pow(v,8)),R=p,k=0;k<A.length;k+=8){var x=Math.min(8,A.length-k),P=parseInt(A.substring(k,k+x),v);8>x?(x=c(Math.pow(v,x)),R=R.j(x).add(c(P))):(R=R.j(S),R=R.add(c(P)))}return R}var p=u(0),m=u(1),w=u(16777216);t=o.prototype,t.m=function(){if(C(this))return-T(this).m();for(var A=0,v=1,S=0;S<this.g.length;S++){var R=this.i(S);A+=(0<=R?R:4294967296+R)*v,v*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(E(this))return"0";if(C(this))return"-"+T(this).toString(A);for(var v=c(Math.pow(A,6)),S=this,R="";;){var k=N(S,v).g;S=_(S,k.j(v));var x=((0<S.g.length?S.g[0]:S.h)>>>0).toString(A);if(S=k,E(S))return x+R;for(;6>x.length;)x="0"+x;R=x+R}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function E(A){if(A.h!=0)return!1;for(var v=0;v<A.g.length;v++)if(A.g[v]!=0)return!1;return!0}function C(A){return A.h==-1}t.l=function(A){return A=_(this,A),C(A)?-1:E(A)?0:1};function T(A){for(var v=A.g.length,S=[],R=0;R<v;R++)S[R]=~A.g[R];return new o(S,~A.h).add(m)}t.abs=function(){return C(this)?T(this):this},t.add=function(A){for(var v=Math.max(this.g.length,A.g.length),S=[],R=0,k=0;k<=v;k++){var x=R+(this.i(k)&65535)+(A.i(k)&65535),P=(x>>>16)+(this.i(k)>>>16)+(A.i(k)>>>16);R=P>>>16,x&=65535,P&=65535,S[k]=P<<16|x}return new o(S,S[S.length-1]&-2147483648?-1:0)};function _(A,v){return A.add(T(v))}t.j=function(A){if(E(this)||E(A))return p;if(C(this))return C(A)?T(this).j(T(A)):T(T(this).j(A));if(C(A))return T(this.j(T(A)));if(0>this.l(w)&&0>A.l(w))return c(this.m()*A.m());for(var v=this.g.length+A.g.length,S=[],R=0;R<2*v;R++)S[R]=0;for(R=0;R<this.g.length;R++)for(var k=0;k<A.g.length;k++){var x=this.i(R)>>>16,P=this.i(R)&65535,Lt=A.i(k)>>>16,Hr=A.i(k)&65535;S[2*R+2*k]+=P*Hr,y(S,2*R+2*k),S[2*R+2*k+1]+=x*Hr,y(S,2*R+2*k+1),S[2*R+2*k+1]+=P*Lt,y(S,2*R+2*k+1),S[2*R+2*k+2]+=x*Lt,y(S,2*R+2*k+2)}for(R=0;R<v;R++)S[R]=S[2*R+1]<<16|S[2*R];for(R=v;R<2*v;R++)S[R]=0;return new o(S,0)};function y(A,v){for(;(A[v]&65535)!=A[v];)A[v+1]+=A[v]>>>16,A[v]&=65535,v++}function I(A,v){this.g=A,this.h=v}function N(A,v){if(E(v))throw Error("division by zero");if(E(A))return new I(p,p);if(C(A))return v=N(T(A),v),new I(T(v.g),T(v.h));if(C(v))return v=N(A,T(v)),new I(T(v.g),v.h);if(30<A.g.length){if(C(A)||C(v))throw Error("slowDivide_ only works with positive integers.");for(var S=m,R=v;0>=R.l(A);)S=V(S),R=V(R);var k=j(S,1),x=j(R,1);for(R=j(R,2),S=j(S,2);!E(R);){var P=x.add(R);0>=P.l(A)&&(k=k.add(S),x=P),R=j(R,1),S=j(S,1)}return v=_(A,k.j(v)),new I(k,v)}for(k=p;0<=A.l(v);){for(S=Math.max(1,Math.floor(A.m()/v.m())),R=Math.ceil(Math.log(S)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),x=c(S),P=x.j(v);C(P)||0<P.l(A);)S-=R,x=c(S),P=x.j(v);E(x)&&(x=m),k=k.add(x),A=_(A,P)}return new I(k,A)}t.A=function(A){return N(this,A).h},t.and=function(A){for(var v=Math.max(this.g.length,A.g.length),S=[],R=0;R<v;R++)S[R]=this.i(R)&A.i(R);return new o(S,this.h&A.h)},t.or=function(A){for(var v=Math.max(this.g.length,A.g.length),S=[],R=0;R<v;R++)S[R]=this.i(R)|A.i(R);return new o(S,this.h|A.h)},t.xor=function(A){for(var v=Math.max(this.g.length,A.g.length),S=[],R=0;R<v;R++)S[R]=this.i(R)^A.i(R);return new o(S,this.h^A.h)};function V(A){for(var v=A.g.length+1,S=[],R=0;R<v;R++)S[R]=A.i(R)<<1|A.i(R-1)>>>31;return new o(S,A.h)}function j(A,v){var S=v>>5;v%=32;for(var R=A.g.length-S,k=[],x=0;x<R;x++)k[x]=0<v?A.i(x+S)>>>v|A.i(x+S+1)<<32-v:A.i(x+S);return new o(k,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,CI=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,ci=o}).apply(typeof Y_<"u"?Y_:typeof self<"u"?self:typeof window<"u"?window:{});var Rl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var PI,Io,kI,Zl,Bd,bI,xI,NI;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,d){return l==Array.prototype||l==Object.prototype||(l[h]=d.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Rl=="object"&&Rl];for(var h=0;h<l.length;++h){var d=l[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(l,h){if(h)e:{var d=r;l=l.split(".");for(var g=0;g<l.length-1;g++){var b=l[g];if(!(b in d))break e;d=d[b]}l=l[l.length-1],g=d[l],h=h(g),h!=g&&h!=null&&e(d,l,{configurable:!0,writable:!0,value:h})}}function s(l,h){l instanceof String&&(l+="");var d=0,g=!1,b={next:function(){if(!g&&d<l.length){var O=d++;return{value:h(O,l[O]),done:!1}}return g=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(l){return l||function(){return s(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function c(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function f(l,h,d){return l.call.apply(l.bind,arguments)}function p(l,h,d){if(!l)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,g),l.apply(h,b)}}return function(){return l.apply(h,arguments)}}function m(l,h,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function w(l,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),l.apply(this,g)}}function E(l,h){function d(){}d.prototype=h.prototype,l.aa=h.prototype,l.prototype=new d,l.prototype.constructor=l,l.Qb=function(g,b,O){for(var $=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)$[pe-2]=arguments[pe];return h.prototype[b].apply(g,$)}}function C(l){const h=l.length;if(0<h){const d=Array(h);for(let g=0;g<h;g++)d[g]=l[g];return d}return[]}function T(l,h){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(u(g)){const b=l.length||0,O=g.length||0;l.length=b+O;for(let $=0;$<O;$++)l[b+$]=g[$]}else l.push(g)}}class _{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function y(l){return/^[\s\xa0]*$/.test(l)}function I(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function N(l){return N[" "](l),l}N[" "]=function(){};var V=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function j(l,h,d){for(const g in l)h.call(d,l[g],g,l)}function A(l,h){for(const d in l)h.call(void 0,l[d],d,l)}function v(l){const h={};for(const d in l)h[d]=l[d];return h}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(l,h){let d,g;for(let b=1;b<arguments.length;b++){g=arguments[b];for(d in g)l[d]=g[d];for(let O=0;O<S.length;O++)d=S[O],Object.prototype.hasOwnProperty.call(g,d)&&(l[d]=g[d])}}function k(l){var h=1;l=l.split(":");const d=[];for(;0<h&&l.length;)d.push(l.shift()),h--;return l.length&&d.push(l.join(":")),d}function x(l){a.setTimeout(()=>{throw l},0)}function P(){var l=J;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class Lt{constructor(){this.h=this.g=null}add(h,d){const g=Hr.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var Hr=new _(()=>new Ws,l=>l.reset());class Ws{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let In,q=!1,J=new Lt,ne=()=>{const l=a.Promise.resolve(void 0);In=()=>{l.then(Te)}};var Te=()=>{for(var l;l=P();){try{l.h.call(l.g)}catch(d){x(d)}var h=Hr;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}q=!1};function de(){this.s=this.s,this.C=this.C}de.prototype.s=!1,de.prototype.ma=function(){this.s||(this.s=!0,this.N())},de.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function be(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}be.prototype.h=function(){this.defaultPrevented=!0};var Sn=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const d=()=>{};a.addEventListener("test",d,h),a.removeEventListener("test",d,h)}catch{}return l}();function An(l,h){if(be.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var d=this.type=l.type,g=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(V){e:{try{N(h.nodeName);var b=!0;break e}catch{}b=!1}b||(h=null)}}else d=="mouseover"?h=l.fromElement:d=="mouseout"&&(h=l.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Rn[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&An.aa.h.call(this)}}E(An,be);var Rn={2:"touch",3:"pen",4:"mouse"};An.prototype.h=function(){An.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Cn="closure_listenable_"+(1e6*Math.random()|0),vA=0;function _A(l,h,d,g,b){this.listener=l,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=b,this.key=++vA,this.da=this.fa=!1}function za(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Ba(l){this.src=l,this.g={},this.h=0}Ba.prototype.add=function(l,h,d,g,b){var O=l.toString();l=this.g[O],l||(l=this.g[O]=[],this.h++);var $=Jc(l,h,g,b);return-1<$?(h=l[$],d||(h.fa=!1)):(h=new _A(h,this.src,O,!!g,b),h.fa=d,l.push(h)),h};function Xc(l,h){var d=h.type;if(d in l.g){var g=l.g[d],b=Array.prototype.indexOf.call(g,h,void 0),O;(O=0<=b)&&Array.prototype.splice.call(g,b,1),O&&(za(h),l.g[d].length==0&&(delete l.g[d],l.h--))}}function Jc(l,h,d,g){for(var b=0;b<l.length;++b){var O=l[b];if(!O.da&&O.listener==h&&O.capture==!!d&&O.ha==g)return b}return-1}var Zc="closure_lm_"+(1e6*Math.random()|0),eh={};function Ig(l,h,d,g,b){if(Array.isArray(h)){for(var O=0;O<h.length;O++)Ig(l,h[O],d,g,b);return null}return d=Rg(d),l&&l[Cn]?l.K(h,d,c(g)?!!g.capture:!!g,b):wA(l,h,d,!1,g,b)}function wA(l,h,d,g,b,O){if(!h)throw Error("Invalid event type");var $=c(b)?!!b.capture:!!b,pe=nh(l);if(pe||(l[Zc]=pe=new Ba(l)),d=pe.add(h,d,g,$,O),d.proxy)return d;if(g=EA(),d.proxy=g,g.src=l,g.listener=d,l.addEventListener)Sn||(b=$),b===void 0&&(b=!1),l.addEventListener(h.toString(),g,b);else if(l.attachEvent)l.attachEvent(Ag(h.toString()),g);else if(l.addListener&&l.removeListener)l.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function EA(){function l(d){return h.call(l.src,l.listener,d)}const h=TA;return l}function Sg(l,h,d,g,b){if(Array.isArray(h))for(var O=0;O<h.length;O++)Sg(l,h[O],d,g,b);else g=c(g)?!!g.capture:!!g,d=Rg(d),l&&l[Cn]?(l=l.i,h=String(h).toString(),h in l.g&&(O=l.g[h],d=Jc(O,d,g,b),-1<d&&(za(O[d]),Array.prototype.splice.call(O,d,1),O.length==0&&(delete l.g[h],l.h--)))):l&&(l=nh(l))&&(h=l.g[h.toString()],l=-1,h&&(l=Jc(h,d,g,b)),(d=-1<l?h[l]:null)&&th(d))}function th(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[Cn])Xc(h.i,l);else{var d=l.type,g=l.proxy;h.removeEventListener?h.removeEventListener(d,g,l.capture):h.detachEvent?h.detachEvent(Ag(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=nh(h))?(Xc(d,l),d.h==0&&(d.src=null,h[Zc]=null)):za(l)}}}function Ag(l){return l in eh?eh[l]:eh[l]="on"+l}function TA(l,h){if(l.da)l=!0;else{h=new An(h,this);var d=l.listener,g=l.ha||l.src;l.fa&&th(l),l=d.call(g,h)}return l}function nh(l){return l=l[Zc],l instanceof Ba?l:null}var rh="__closure_events_fn_"+(1e9*Math.random()>>>0);function Rg(l){return typeof l=="function"?l:(l[rh]||(l[rh]=function(h){return l.handleEvent(h)}),l[rh])}function Xe(){de.call(this),this.i=new Ba(this),this.M=this,this.F=null}E(Xe,de),Xe.prototype[Cn]=!0,Xe.prototype.removeEventListener=function(l,h,d,g){Sg(this,l,h,d,g)};function ut(l,h){var d,g=l.F;if(g)for(d=[];g;g=g.F)d.push(g);if(l=l.M,g=h.type||h,typeof h=="string")h=new be(h,l);else if(h instanceof be)h.target=h.target||l;else{var b=h;h=new be(g,l),R(h,b)}if(b=!0,d)for(var O=d.length-1;0<=O;O--){var $=h.g=d[O];b=$a($,g,!0,h)&&b}if($=h.g=l,b=$a($,g,!0,h)&&b,b=$a($,g,!1,h)&&b,d)for(O=0;O<d.length;O++)$=h.g=d[O],b=$a($,g,!1,h)&&b}Xe.prototype.N=function(){if(Xe.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var d=l.g[h],g=0;g<d.length;g++)za(d[g]);delete l.g[h],l.h--}}this.F=null},Xe.prototype.K=function(l,h,d,g){return this.i.add(String(l),h,!1,d,g)},Xe.prototype.L=function(l,h,d,g){return this.i.add(String(l),h,!0,d,g)};function $a(l,h,d,g){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var b=!0,O=0;O<h.length;++O){var $=h[O];if($&&!$.da&&$.capture==d){var pe=$.listener,qe=$.ha||$.src;$.fa&&Xc(l.i,$),b=pe.call(qe,g)!==!1&&b}}return b&&!g.defaultPrevented}function Cg(l,h,d){if(typeof l=="function")d&&(l=m(l,d));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(l,h||0)}function Pg(l){l.g=Cg(()=>{l.g=null,l.i&&(l.i=!1,Pg(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class IA extends de{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Pg(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Gs(l){de.call(this),this.h=l,this.g={}}E(Gs,de);var kg=[];function bg(l){j(l.g,function(h,d){this.g.hasOwnProperty(d)&&th(h)},l),l.g={}}Gs.prototype.N=function(){Gs.aa.N.call(this),bg(this)},Gs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ih=a.JSON.stringify,SA=a.JSON.parse,AA=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function sh(){}sh.prototype.h=null;function xg(l){return l.h||(l.h=l.i())}function Ng(){}var Ks={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function oh(){be.call(this,"d")}E(oh,be);function ah(){be.call(this,"c")}E(ah,be);var Wr={},Og=null;function qa(){return Og=Og||new Xe}Wr.La="serverreachability";function Dg(l){be.call(this,Wr.La,l)}E(Dg,be);function Qs(l){const h=qa();ut(h,new Dg(h))}Wr.STAT_EVENT="statevent";function Lg(l,h){be.call(this,Wr.STAT_EVENT,l),this.stat=h}E(Lg,be);function ct(l){const h=qa();ut(h,new Lg(h,l))}Wr.Ma="timingevent";function Vg(l,h){be.call(this,Wr.Ma,l),this.size=h}E(Vg,be);function Ys(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function Xs(){this.g=!0}Xs.prototype.xa=function(){this.g=!1};function RA(l,h,d,g,b,O){l.info(function(){if(l.g)if(O)for(var $="",pe=O.split("&"),qe=0;qe<pe.length;qe++){var ce=pe[qe].split("=");if(1<ce.length){var Je=ce[0];ce=ce[1];var Ze=Je.split("_");$=2<=Ze.length&&Ze[1]=="type"?$+(Je+"="+ce+"&"):$+(Je+"=redacted&")}}else $=null;else $=O;return"XMLHTTP REQ ("+g+") [attempt "+b+"]: "+h+`
`+d+`
`+$})}function CA(l,h,d,g,b,O,$){l.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+b+"]: "+h+`
`+d+`
`+O+" "+$})}function Oi(l,h,d,g){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+kA(l,d)+(g?" "+g:"")})}function PA(l,h){l.info(function(){return"TIMEOUT: "+h})}Xs.prototype.info=function(){};function kA(l,h){if(!l.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(l=0;l<d.length;l++)if(Array.isArray(d[l])){var g=d[l];if(!(2>g.length)){var b=g[1];if(Array.isArray(b)&&!(1>b.length)){var O=b[0];if(O!="noop"&&O!="stop"&&O!="close")for(var $=1;$<b.length;$++)b[$]=""}}}}return ih(d)}catch{return h}}var Ha={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Mg={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},lh;function Wa(){}E(Wa,sh),Wa.prototype.g=function(){return new XMLHttpRequest},Wa.prototype.i=function(){return{}},lh=new Wa;function er(l,h,d,g){this.j=l,this.i=h,this.l=d,this.R=g||1,this.U=new Gs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Fg}function Fg(){this.i=null,this.g="",this.h=!1}var Ug={},uh={};function ch(l,h,d){l.L=1,l.v=Ya(Pn(h)),l.m=d,l.P=!0,jg(l,null)}function jg(l,h){l.F=Date.now(),Ga(l),l.A=Pn(l.v);var d=l.A,g=l.R;Array.isArray(g)||(g=[String(g)]),ey(d.i,"t",g),l.C=0,d=l.j.J,l.h=new Fg,l.g=vy(l.j,d?h:null,!l.m),0<l.O&&(l.M=new IA(m(l.Y,l,l.g),l.O)),h=l.U,d=l.g,g=l.ca;var b="readystatechange";Array.isArray(b)||(b&&(kg[0]=b.toString()),b=kg);for(var O=0;O<b.length;O++){var $=Ig(d,b[O],g||h.handleEvent,!1,h.h||h);if(!$)break;h.g[$.key]=$}h=l.H?v(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),Qs(),RA(l.i,l.u,l.A,l.l,l.R,l.m)}er.prototype.ca=function(l){l=l.target;const h=this.M;h&&kn(l)==3?h.j():this.Y(l)},er.prototype.Y=function(l){try{if(l==this.g)e:{const Ze=kn(this.g);var h=this.g.Ba();const Vi=this.g.Z();if(!(3>Ze)&&(Ze!=3||this.g&&(this.h.h||this.g.oa()||ay(this.g)))){this.J||Ze!=4||h==7||(h==8||0>=Vi?Qs(3):Qs(2)),hh(this);var d=this.g.Z();this.X=d;t:if(zg(this)){var g=ay(this.g);l="";var b=g.length,O=kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Gr(this),Js(this);var $="";break t}this.h.i=new a.TextDecoder}for(h=0;h<b;h++)this.h.h=!0,l+=this.h.i.decode(g[h],{stream:!(O&&h==b-1)});g.length=0,this.h.g+=l,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=d==200,CA(this.i,this.u,this.A,this.l,this.R,Ze,d),this.o){if(this.T&&!this.K){t:{if(this.g){var pe,qe=this.g;if((pe=qe.g?qe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(pe)){var ce=pe;break t}}ce=null}if(d=ce)Oi(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,fh(this,d);else{this.o=!1,this.s=3,ct(12),Gr(this),Js(this);break e}}if(this.P){d=!0;let Ht;for(;!this.J&&this.C<$.length;)if(Ht=bA(this,$),Ht==uh){Ze==4&&(this.s=4,ct(14),d=!1),Oi(this.i,this.l,null,"[Incomplete Response]");break}else if(Ht==Ug){this.s=4,ct(15),Oi(this.i,this.l,$,"[Invalid Chunk]"),d=!1;break}else Oi(this.i,this.l,Ht,null),fh(this,Ht);if(zg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ze!=4||$.length!=0||this.h.h||(this.s=1,ct(16),d=!1),this.o=this.o&&d,!d)Oi(this.i,this.l,$,"[Invalid Chunked Response]"),Gr(this),Js(this);else if(0<$.length&&!this.W){this.W=!0;var Je=this.j;Je.g==this&&Je.ba&&!Je.M&&(Je.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),vh(Je),Je.M=!0,ct(11))}}else Oi(this.i,this.l,$,null),fh(this,$);Ze==4&&Gr(this),this.o&&!this.J&&(Ze==4?py(this.j,this):(this.o=!1,Ga(this)))}else GA(this.g),d==400&&0<$.indexOf("Unknown SID")?(this.s=3,ct(12)):(this.s=0,ct(13)),Gr(this),Js(this)}}}catch{}finally{}};function zg(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function bA(l,h){var d=l.C,g=h.indexOf(`
`,d);return g==-1?uh:(d=Number(h.substring(d,g)),isNaN(d)?Ug:(g+=1,g+d>h.length?uh:(h=h.slice(g,g+d),l.C=g+d,h)))}er.prototype.cancel=function(){this.J=!0,Gr(this)};function Ga(l){l.S=Date.now()+l.I,Bg(l,l.I)}function Bg(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Ys(m(l.ba,l),h)}function hh(l){l.B&&(a.clearTimeout(l.B),l.B=null)}er.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(PA(this.i,this.A),this.L!=2&&(Qs(),ct(17)),Gr(this),this.s=2,Js(this)):Bg(this,this.S-l)};function Js(l){l.j.G==0||l.J||py(l.j,l)}function Gr(l){hh(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,bg(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function fh(l,h){try{var d=l.j;if(d.G!=0&&(d.g==l||dh(d.h,l))){if(!l.K&&dh(d.h,l)&&d.G==3){try{var g=d.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var b=g;if(b[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<l.F)nl(d),el(d);else break e;yh(d),ct(18)}}else d.za=b[1],0<d.za-d.T&&37500>b[2]&&d.F&&d.v==0&&!d.C&&(d.C=Ys(m(d.Za,d),6e3));if(1>=Hg(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Qr(d,11)}else if((l.K||d.g==l)&&nl(d),!y(h))for(b=d.Da.g.parse(h),h=0;h<b.length;h++){let ce=b[h];if(d.T=ce[0],ce=ce[1],d.G==2)if(ce[0]=="c"){d.K=ce[1],d.ia=ce[2];const Je=ce[3];Je!=null&&(d.la=Je,d.j.info("VER="+d.la));const Ze=ce[4];Ze!=null&&(d.Aa=Ze,d.j.info("SVER="+d.Aa));const Vi=ce[5];Vi!=null&&typeof Vi=="number"&&0<Vi&&(g=1.5*Vi,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Ht=l.g;if(Ht){const il=Ht.g?Ht.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(il){var O=g.h;O.g||il.indexOf("spdy")==-1&&il.indexOf("quic")==-1&&il.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(ph(O,O.h),O.h=null))}if(g.D){const _h=Ht.g?Ht.g.getResponseHeader("X-HTTP-Session-Id"):null;_h&&(g.ya=_h,ge(g.I,g.D,_h))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-l.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var $=l;if(g.qa=yy(g,g.J?g.ia:null,g.W),$.K){Wg(g.h,$);var pe=$,qe=g.L;qe&&(pe.I=qe),pe.B&&(hh(pe),Ga(pe)),g.g=$}else fy(g);0<d.i.length&&tl(d)}else ce[0]!="stop"&&ce[0]!="close"||Qr(d,7);else d.G==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?Qr(d,7):gh(d):ce[0]!="noop"&&d.l&&d.l.ta(ce),d.v=0)}}Qs(4)}catch{}}var xA=class{constructor(l,h){this.g=l,this.map=h}};function $g(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function qg(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Hg(l){return l.h?1:l.g?l.g.size:0}function dh(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function ph(l,h){l.g?l.g.add(h):l.h=h}function Wg(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}$g.prototype.cancel=function(){if(this.i=Gg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Gg(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const d of l.g.values())h=h.concat(d.D);return h}return C(l.i)}function NA(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var h=[],d=l.length,g=0;g<d;g++)h.push(l[g]);return h}h=[],d=0;for(g in l)h[d++]=l[g];return h}function OA(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var h=[];l=l.length;for(var d=0;d<l;d++)h.push(d);return h}h=[],d=0;for(const g in l)h[d++]=g;return h}}}function Kg(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var d=OA(l),g=NA(l),b=g.length,O=0;O<b;O++)h.call(void 0,g[O],d&&d[O],l)}var Qg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function DA(l,h){if(l){l=l.split("&");for(var d=0;d<l.length;d++){var g=l[d].indexOf("="),b=null;if(0<=g){var O=l[d].substring(0,g);b=l[d].substring(g+1)}else O=l[d];h(O,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Kr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Kr){this.h=l.h,Ka(this,l.j),this.o=l.o,this.g=l.g,Qa(this,l.s),this.l=l.l;var h=l.i,d=new to;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),Yg(this,d),this.m=l.m}else l&&(h=String(l).match(Qg))?(this.h=!1,Ka(this,h[1]||"",!0),this.o=Zs(h[2]||""),this.g=Zs(h[3]||"",!0),Qa(this,h[4]),this.l=Zs(h[5]||"",!0),Yg(this,h[6]||"",!0),this.m=Zs(h[7]||"")):(this.h=!1,this.i=new to(null,this.h))}Kr.prototype.toString=function(){var l=[],h=this.j;h&&l.push(eo(h,Xg,!0),":");var d=this.g;return(d||h=="file")&&(l.push("//"),(h=this.o)&&l.push(eo(h,Xg,!0),"@"),l.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&l.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&l.push("/"),l.push(eo(d,d.charAt(0)=="/"?MA:VA,!0))),(d=this.i.toString())&&l.push("?",d),(d=this.m)&&l.push("#",eo(d,UA)),l.join("")};function Pn(l){return new Kr(l)}function Ka(l,h,d){l.j=d?Zs(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function Qa(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function Yg(l,h,d){h instanceof to?(l.i=h,jA(l.i,l.h)):(d||(h=eo(h,FA)),l.i=new to(h,l.h))}function ge(l,h,d){l.i.set(h,d)}function Ya(l){return ge(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Zs(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function eo(l,h,d){return typeof l=="string"?(l=encodeURI(l).replace(h,LA),d&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function LA(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Xg=/[#\/\?@]/g,VA=/[#\?:]/g,MA=/[#\?]/g,FA=/[#\?@]/g,UA=/#/g;function to(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function tr(l){l.g||(l.g=new Map,l.h=0,l.i&&DA(l.i,function(h,d){l.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=to.prototype,t.add=function(l,h){tr(this),this.i=null,l=Di(this,l);var d=this.g.get(l);return d||this.g.set(l,d=[]),d.push(h),this.h+=1,this};function Jg(l,h){tr(l),h=Di(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function Zg(l,h){return tr(l),h=Di(l,h),l.g.has(h)}t.forEach=function(l,h){tr(this),this.g.forEach(function(d,g){d.forEach(function(b){l.call(h,b,g,this)},this)},this)},t.na=function(){tr(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let g=0;g<h.length;g++){const b=l[g];for(let O=0;O<b.length;O++)d.push(h[g])}return d},t.V=function(l){tr(this);let h=[];if(typeof l=="string")Zg(this,l)&&(h=h.concat(this.g.get(Di(this,l))));else{l=Array.from(this.g.values());for(let d=0;d<l.length;d++)h=h.concat(l[d])}return h},t.set=function(l,h){return tr(this),this.i=null,l=Di(this,l),Zg(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function ey(l,h,d){Jg(l,h),0<d.length&&(l.i=null,l.g.set(Di(l,h),C(d)),l.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var g=h[d];const O=encodeURIComponent(String(g)),$=this.V(g);for(g=0;g<$.length;g++){var b=O;$[g]!==""&&(b+="="+encodeURIComponent(String($[g]))),l.push(b)}}return this.i=l.join("&")};function Di(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function jA(l,h){h&&!l.j&&(tr(l),l.i=null,l.g.forEach(function(d,g){var b=g.toLowerCase();g!=b&&(Jg(this,g),ey(this,b,d))},l)),l.j=h}function zA(l,h){const d=new Xs;if(a.Image){const g=new Image;g.onload=w(nr,d,"TestLoadImage: loaded",!0,h,g),g.onerror=w(nr,d,"TestLoadImage: error",!1,h,g),g.onabort=w(nr,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=w(nr,d,"TestLoadImage: timeout",!1,h,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=l}else h(!1)}function BA(l,h){const d=new Xs,g=new AbortController,b=setTimeout(()=>{g.abort(),nr(d,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:g.signal}).then(O=>{clearTimeout(b),O.ok?nr(d,"TestPingServer: ok",!0,h):nr(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(b),nr(d,"TestPingServer: error",!1,h)})}function nr(l,h,d,g,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),g(d)}catch{}}function $A(){this.g=new AA}function qA(l,h,d){const g=d||"";try{Kg(l,function(b,O){let $=b;c(b)&&($=ih(b)),h.push(g+O+"="+encodeURIComponent($))})}catch(b){throw h.push(g+"type="+encodeURIComponent("_badmap")),b}}function Xa(l){this.l=l.Ub||null,this.j=l.eb||!1}E(Xa,sh),Xa.prototype.g=function(){return new Ja(this.l,this.j)},Xa.prototype.i=function(l){return function(){return l}}({});function Ja(l,h){Xe.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}E(Ja,Xe),t=Ja.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,ro(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,no(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,ro(this)),this.g&&(this.readyState=3,ro(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ty(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function ty(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?no(this):ro(this),this.readyState==3&&ty(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,no(this))},t.Qa=function(l){this.g&&(this.response=l,no(this))},t.ga=function(){this.g&&no(this)};function no(l){l.readyState=4,l.l=null,l.j=null,l.v=null,ro(l)}t.setRequestHeader=function(l,h){this.u.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,l.push(d[0]+": "+d[1]),d=h.next();return l.join(`\r
`)};function ro(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Ja.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function ny(l){let h="";return j(l,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function mh(l,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=ny(d),typeof l=="string"?d!=null&&encodeURIComponent(String(d)):ge(l,h,d))}function Pe(l){Xe.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}E(Pe,Xe);var HA=/^https?$/i,WA=["POST","PUT"];t=Pe.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():lh.g(),this.v=this.o?xg(this.o):xg(lh),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(O){ry(this,O);return}if(l=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var b in g)d.set(b,g[b]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const O of g.keys())d.set(O,g.get(O));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(O=>O.toLowerCase()=="content-type"),b=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(WA,h,void 0))||g||b||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,$]of d)this.g.setRequestHeader(O,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{oy(this),this.u=!0,this.g.send(l),this.u=!1}catch(O){ry(this,O)}};function ry(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,iy(l),Za(l)}function iy(l){l.A||(l.A=!0,ut(l,"complete"),ut(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ut(this,"complete"),ut(this,"abort"),Za(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Za(this,!0)),Pe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?sy(this):this.bb())},t.bb=function(){sy(this)};function sy(l){if(l.h&&typeof o<"u"&&(!l.v[1]||kn(l)!=4||l.Z()!=2)){if(l.u&&kn(l)==4)Cg(l.Ea,0,l);else if(ut(l,"readystatechange"),kn(l)==4){l.h=!1;try{const $=l.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=$===0){var b=String(l.D).match(Qg)[1]||null;!b&&a.self&&a.self.location&&(b=a.self.location.protocol.slice(0,-1)),g=!HA.test(b?b.toLowerCase():"")}d=g}if(d)ut(l,"complete"),ut(l,"success");else{l.m=6;try{var O=2<kn(l)?l.g.statusText:""}catch{O=""}l.l=O+" ["+l.Z()+"]",iy(l)}}finally{Za(l)}}}}function Za(l,h){if(l.g){oy(l);const d=l.g,g=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||ut(l,"ready");try{d.onreadystatechange=g}catch{}}}function oy(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function kn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<kn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),SA(h)}};function ay(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function GA(l){const h={};l=(l.g&&2<=kn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<l.length;g++){if(y(l[g]))continue;var d=k(l[g]);const b=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const O=h[b]||[];h[b]=O,O.push(d)}A(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function io(l,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[l]||h}function ly(l){this.Aa=0,this.i=[],this.j=new Xs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=io("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=io("baseRetryDelayMs",5e3,l),this.cb=io("retryDelaySeedMs",1e4,l),this.Wa=io("forwardChannelMaxRetries",2,l),this.wa=io("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new $g(l&&l.concurrentRequestLimit),this.Da=new $A,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=ly.prototype,t.la=8,t.G=1,t.connect=function(l,h,d,g){ct(0),this.W=l,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=yy(this,null,this.W),tl(this)};function gh(l){if(uy(l),l.G==3){var h=l.U++,d=Pn(l.I);if(ge(d,"SID",l.K),ge(d,"RID",h),ge(d,"TYPE","terminate"),so(l,d),h=new er(l,l.j,h),h.L=2,h.v=Ya(Pn(d)),d=!1,a.navigator&&a.navigator.sendBeacon)try{d=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&a.Image&&(new Image().src=h.v,d=!0),d||(h.g=vy(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Ga(h)}gy(l)}function el(l){l.g&&(vh(l),l.g.cancel(),l.g=null)}function uy(l){el(l),l.u&&(a.clearTimeout(l.u),l.u=null),nl(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function tl(l){if(!qg(l.h)&&!l.s){l.s=!0;var h=l.Ga;In||ne(),q||(In(),q=!0),J.add(h,l),l.B=0}}function KA(l,h){return Hg(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Ys(m(l.Ga,l,h),my(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const b=new er(this,this.j,l);let O=this.o;if(this.S&&(O?(O=v(O),R(O,this.S)):O=this.S),this.m!==null||this.O||(b.H=O,O=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=hy(this,b,h),d=Pn(this.I),ge(d,"RID",l),ge(d,"CVER",22),this.D&&ge(d,"X-HTTP-Session-Id",this.D),so(this,d),O&&(this.O?h="headers="+encodeURIComponent(String(ny(O)))+"&"+h:this.m&&mh(d,this.m,O)),ph(this.h,b),this.Ua&&ge(d,"TYPE","init"),this.P?(ge(d,"$req",h),ge(d,"SID","null"),b.T=!0,ch(b,d,null)):ch(b,d,h),this.G=2}}else this.G==3&&(l?cy(this,l):this.i.length==0||qg(this.h)||cy(this))};function cy(l,h){var d;h?d=h.l:d=l.U++;const g=Pn(l.I);ge(g,"SID",l.K),ge(g,"RID",d),ge(g,"AID",l.T),so(l,g),l.m&&l.o&&mh(g,l.m,l.o),d=new er(l,l.j,d,l.B+1),l.m===null&&(d.H=l.o),h&&(l.i=h.D.concat(l.i)),h=hy(l,d,1e3),d.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),ph(l.h,d),ch(d,g,h)}function so(l,h){l.H&&j(l.H,function(d,g){ge(h,g,d)}),l.l&&Kg({},function(d,g){ge(h,g,d)})}function hy(l,h,d){d=Math.min(l.i.length,d);var g=l.l?m(l.l.Na,l.l,l):null;e:{var b=l.i;let O=-1;for(;;){const $=["count="+d];O==-1?0<d?(O=b[0].g,$.push("ofs="+O)):O=0:$.push("ofs="+O);let pe=!0;for(let qe=0;qe<d;qe++){let ce=b[qe].g;const Je=b[qe].map;if(ce-=O,0>ce)O=Math.max(0,b[qe].g-100),pe=!1;else try{qA(Je,$,"req"+ce+"_")}catch{g&&g(Je)}}if(pe){g=$.join("&");break e}}}return l=l.i.splice(0,d),h.D=l,g}function fy(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;In||ne(),q||(In(),q=!0),J.add(h,l),l.v=0}}function yh(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Ys(m(l.Fa,l),my(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,dy(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Ys(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ct(10),el(this),dy(this))};function vh(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function dy(l){l.g=new er(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=Pn(l.qa);ge(h,"RID","rpc"),ge(h,"SID",l.K),ge(h,"AID",l.T),ge(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&ge(h,"TO",l.ja),ge(h,"TYPE","xmlhttp"),so(l,h),l.m&&l.o&&mh(h,l.m,l.o),l.L&&(l.g.I=l.L);var d=l.g;l=l.ia,d.L=1,d.v=Ya(Pn(h)),d.m=null,d.P=!0,jg(d,l)}t.Za=function(){this.C!=null&&(this.C=null,el(this),yh(this),ct(19))};function nl(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function py(l,h){var d=null;if(l.g==h){nl(l),vh(l),l.g=null;var g=2}else if(dh(l.h,h))d=h.D,Wg(l.h,h),g=1;else return;if(l.G!=0){if(h.o)if(g==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var b=l.B;g=qa(),ut(g,new Vg(g,d)),tl(l)}else fy(l);else if(b=h.s,b==3||b==0&&0<h.X||!(g==1&&KA(l,h)||g==2&&yh(l)))switch(d&&0<d.length&&(h=l.h,h.i=h.i.concat(d)),b){case 1:Qr(l,5);break;case 4:Qr(l,10);break;case 3:Qr(l,6);break;default:Qr(l,2)}}}function my(l,h){let d=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(d*=2),d*h}function Qr(l,h){if(l.j.info("Error code "+h),h==2){var d=m(l.fb,l),g=l.Xa;const b=!g;g=new Kr(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ka(g,"https"),Ya(g),b?zA(g.toString(),d):BA(g.toString(),d)}else ct(2);l.G=0,l.l&&l.l.sa(h),gy(l),uy(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))};function gy(l){if(l.G=0,l.ka=[],l.l){const h=Gg(l.h);(h.length!=0||l.i.length!=0)&&(T(l.ka,h),T(l.ka,l.i),l.h.i.length=0,C(l.i),l.i.length=0),l.l.ra()}}function yy(l,h,d){var g=d instanceof Kr?Pn(d):new Kr(d);if(g.g!="")h&&(g.g=h+"."+g.g),Qa(g,g.s);else{var b=a.location;g=b.protocol,h=h?h+"."+b.hostname:b.hostname,b=+b.port;var O=new Kr(null);g&&Ka(O,g),h&&(O.g=h),b&&Qa(O,b),d&&(O.l=d),g=O}return d=l.D,h=l.ya,d&&h&&ge(g,d,h),ge(g,"VER",l.la),so(l,g),g}function vy(l,h,d){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new Pe(new Xa({eb:d})):new Pe(l.pa),h.Ha(l.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function _y(){}t=_y.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function rl(){}rl.prototype.g=function(l,h){return new At(l,h)};function At(l,h){Xe.call(this),this.g=new ly(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!y(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!y(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new Li(this)}E(At,Xe),At.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){gh(this.g)},At.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var d={};d.__data__=l,l=d}else this.u&&(d={},d.__data__=ih(l),l=d);h.i.push(new xA(h.Ya++,l)),h.G==3&&tl(h)},At.prototype.N=function(){this.g.l=null,delete this.j,gh(this.g),delete this.g,At.aa.N.call(this)};function wy(l){oh.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const d in h){l=d;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}E(wy,oh);function Ey(){ah.call(this),this.status=1}E(Ey,ah);function Li(l){this.g=l}E(Li,_y),Li.prototype.ua=function(){ut(this.g,"a")},Li.prototype.ta=function(l){ut(this.g,new wy(l))},Li.prototype.sa=function(l){ut(this.g,new Ey)},Li.prototype.ra=function(){ut(this.g,"b")},rl.prototype.createWebChannel=rl.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,NI=function(){return new rl},xI=function(){return qa()},bI=Wr,Bd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ha.NO_ERROR=0,Ha.TIMEOUT=8,Ha.HTTP_ERROR=6,Zl=Ha,Mg.COMPLETE="complete",kI=Mg,Ng.EventType=Ks,Ks.OPEN="a",Ks.CLOSE="b",Ks.ERROR="c",Ks.MESSAGE="d",Xe.prototype.listen=Xe.prototype.K,Io=Ng,Pe.prototype.listenOnce=Pe.prototype.L,Pe.prototype.getLastError=Pe.prototype.Ka,Pe.prototype.getLastErrorCode=Pe.prototype.Ba,Pe.prototype.getStatus=Pe.prototype.Z,Pe.prototype.getResponseJson=Pe.prototype.Oa,Pe.prototype.getResponseText=Pe.prototype.oa,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Ha,PI=Pe}).apply(typeof Rl<"u"?Rl:typeof self<"u"?self:typeof window<"u"?window:{});const X_="@firebase/firestore";/**
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
 */const Ti=new Rc("@firebase/firestore");function Fi(){return Ti.logLevel}function H(t,...e){if(Ti.logLevel<=se.DEBUG){const n=e.map(Fm);Ti.debug(`Firestore (${Us}): ${t}`,...n)}}function Qn(t,...e){if(Ti.logLevel<=se.ERROR){const n=e.map(Fm);Ti.error(`Firestore (${Us}): ${t}`,...n)}}function Ss(t,...e){if(Ti.logLevel<=se.WARN){const n=e.map(Fm);Ti.warn(`Firestore (${Us}): ${t}`,...n)}}function Fm(t){if(typeof t=="string")return t;try{/**
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
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends rn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Cr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class OI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class P4{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(rt.UNAUTHENTICATED))}shutdown(){}}class k4{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class b4{constructor(e){this.t=e,this.currentUser=rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){he(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Cr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Cr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Cr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(he(typeof r.accessToken=="string"),new OI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return he(e===null||typeof e=="string"),new rt(e)}}class x4{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=rt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class N4{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new x4(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class O4{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class D4{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){he(this.o===void 0);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(he(typeof n.token=="string"),this.R=n.token,new O4(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function L4(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class DI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=L4(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ae(t,e){return t<e?-1:t>e?1:0}function As(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Ue{static now(){return Ue.fromMillis(Date.now())}static fromDate(e){return Ue.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ue(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new G(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class fa{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return fa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof fa?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ve extends fa{construct(e,n,r){return new ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ve(n)}static emptyPath(){return new ve([])}}const V4=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends fa{construct(e,n,r){return new Ge(e,n,r)}static isValidIdentifier(e){return V4.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ge(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new G(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new G(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new G(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new G(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(n)}static emptyPath(){return new Ge([])}}/**
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
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(ve.fromString(e))}static fromName(e){return new Q(ve.fromString(e).popFirst(5))}static empty(){return new Q(ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new ve(e.slice()))}}function M4(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Z.fromTimestamp(r===1e9?new Ue(n+1,0):new Ue(n,r));return new Lr(i,Q.empty(),e)}function F4(t){return new Lr(t.readTime,t.key,-1)}class Lr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Lr(Z.min(),Q.empty(),-1)}static max(){return new Lr(Z.max(),Q.empty(),-1)}}function U4(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:ae(t.largestBatchId,e.largestBatchId))}/**
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
 */const j4="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class z4{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function js(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==j4)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++a,a===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function B4(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function zs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Nc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Nc.oe=-1;function Oc(t){return t==null}function qu(t){return t===0&&1/t==-1/0}function $4(t){return typeof t=="number"&&Number.isInteger(t)&&!qu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function q4(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=J_(e)),e=H4(t.get(n),e);return J_(e)}function H4(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function J_(t){return t+""}/**
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
 */function Z_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ki(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function LI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ce{constructor(e,n){this.comparator=e,this.root=n||We.EMPTY}insert(e,n){return new Ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,We.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,We.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Cl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Cl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Cl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Cl(this.root,e,this.comparator,!0)}}class Cl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class We{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??We.RED,this.left=i??We.EMPTY,this.right=s??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new We(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return We.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,n,r,i,s){return this}insert(e,n,r){return new We(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class je{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new e0(this.data.getIterator())}getIteratorFrom(e){return new e0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new je(this.comparator);return n.data=e,n}}class e0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Yt{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new Yt([])}unionWith(e){let n=new je(Ge.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Yt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return As(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class VI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ye{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new VI("Invalid base64 string: "+s):s}}(e);return new Ye(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ye(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ye.EMPTY_BYTE_STRING=new Ye("");const W4=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vr(t){if(he(!!t),typeof t=="string"){let e=0;const n=W4.exec(t);if(he(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:xe(t.seconds),nanos:xe(t.nanos)}}function xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Mr(t){return typeof t=="string"?Ye.fromBase64String(t):Ye.fromUint8Array(t)}/**
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
 */function Um(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Dc(t){const e=t.mapValue.fields.__previous_value__;return Um(e)?Dc(e):e}function da(t){const e=Vr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ue(e.seconds,e.nanos)}/**
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
 */class G4{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class pa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new pa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof pa&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Pl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Fr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Um(t)?4:Q4(t)?9007199254740991:K4(t)?10:11:Y()}function En(t,e){if(t===e)return!0;const n=Fr(t);if(n!==Fr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return da(t).isEqual(da(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Vr(i.timestampValue),a=Vr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Mr(i.bytesValue).isEqual(Mr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return xe(i.geoPointValue.latitude)===xe(s.geoPointValue.latitude)&&xe(i.geoPointValue.longitude)===xe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return xe(i.integerValue)===xe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=xe(i.doubleValue),a=xe(s.doubleValue);return o===a?qu(o)===qu(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return As(t.arrayValue.values||[],e.arrayValue.values||[],En);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Z_(o)!==Z_(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!En(o[u],a[u])))return!1;return!0}(t,e);default:return Y()}}function ma(t,e){return(t.values||[]).find(n=>En(n,e))!==void 0}function Rs(t,e){if(t===e)return 0;const n=Fr(t),r=Fr(e);if(n!==r)return ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ae(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=xe(s.integerValue||s.doubleValue),u=xe(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return t0(t.timestampValue,e.timestampValue);case 4:return t0(da(t),da(e));case 5:return ae(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Mr(s),u=Mr(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const f=ae(a[c],u[c]);if(f!==0)return f}return ae(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ae(xe(s.latitude),xe(o.latitude));return a!==0?a:ae(xe(s.longitude),xe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return n0(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,c,f;const p=s.fields||{},m=o.fields||{},w=(a=p.value)===null||a===void 0?void 0:a.arrayValue,E=(u=m.value)===null||u===void 0?void 0:u.arrayValue,C=ae(((c=w==null?void 0:w.values)===null||c===void 0?void 0:c.length)||0,((f=E==null?void 0:E.values)===null||f===void 0?void 0:f.length)||0);return C!==0?C:n0(w,E)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Pl.mapValue&&o===Pl.mapValue)return 0;if(s===Pl.mapValue)return 1;if(o===Pl.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const m=ae(u[p],f[p]);if(m!==0)return m;const w=Rs(a[u[p]],c[f[p]]);if(w!==0)return w}return ae(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Y()}}function t0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ae(t,e);const n=Vr(t),r=Vr(e),i=ae(n.seconds,r.seconds);return i!==0?i:ae(n.nanos,r.nanos)}function n0(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Rs(n[i],r[i]);if(s)return s}return ae(n.length,r.length)}function Cs(t){return $d(t)}function $d(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Vr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Mr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=$d(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${$d(n.fields[o])}`;return i+"}"}(t.mapValue):Y()}function eu(t){switch(Fr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Dc(t);return e?16+eu(e):16;case 5:return 2*t.stringValue.length;case 6:return Mr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+eu(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return ki(r.fields,(s,o)=>{i+=s.length+eu(o)}),i}(t.mapValue);default:throw Y()}}function r0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function qd(t){return!!t&&"integerValue"in t}function jm(t){return!!t&&"arrayValue"in t}function i0(t){return!!t&&"nullValue"in t}function s0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function tu(t){return!!t&&"mapValue"in t}function K4(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Uo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ki(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Uo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Uo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Q4(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ft{constructor(e){this.value=e}static empty(){return new Ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!tu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Uo(n)}setAll(e){let n=Ge.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Uo(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());tu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return En(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];tu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ki(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ft(Uo(this.value))}}function MI(t){const e=[];return ki(t.fields,(n,r)=>{const i=new Ge([n]);if(tu(r)){const s=MI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Yt(e)}/**
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
 */class Hu{constructor(e,n){this.position=e,this.inclusive=n}}function o0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),n.key):r=Rs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function a0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!En(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ga{constructor(e,n="asc"){this.field=e,this.dir=n}}function Y4(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class FI{}class Le extends FI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new J4(e,n,r):n==="array-contains"?new tV(e,r):n==="in"?new nV(e,r):n==="not-in"?new rV(e,r):n==="array-contains-any"?new iV(e,r):new Le(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Z4(e,r):new eV(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Rs(n,this.value)):n!==null&&Fr(this.value)===Fr(n)&&this.matchesComparison(Rs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class nn extends FI{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new nn(e,n)}matches(e){return UI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function UI(t){return t.op==="and"}function jI(t){return X4(t)&&UI(t)}function X4(t){for(const e of t.filters)if(e instanceof nn)return!1;return!0}function Hd(t){if(t instanceof Le)return t.field.canonicalString()+t.op.toString()+Cs(t.value);if(jI(t))return t.filters.map(e=>Hd(e)).join(",");{const e=t.filters.map(n=>Hd(n)).join(",");return`${t.op}(${e})`}}function zI(t,e){return t instanceof Le?function(r,i){return i instanceof Le&&r.op===i.op&&r.field.isEqual(i.field)&&En(r.value,i.value)}(t,e):t instanceof nn?function(r,i){return i instanceof nn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&zI(o,i.filters[a]),!0):!1}(t,e):void Y()}function BI(t){return t instanceof Le?function(n){return`${n.field.canonicalString()} ${n.op} ${Cs(n.value)}`}(t):t instanceof nn?function(n){return n.op.toString()+" {"+n.getFilters().map(BI).join(" ,")+"}"}(t):"Filter"}class J4 extends Le{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class Z4 extends Le{constructor(e,n){super(e,"in",n),this.keys=$I("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class eV extends Le{constructor(e,n){super(e,"not-in",n),this.keys=$I("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function $I(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class tV extends Le{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return jm(n)&&ma(n.arrayValue,this.value)}}class nV extends Le{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ma(this.value.arrayValue,n)}}class rV extends Le{constructor(e,n){super(e,"not-in",n)}matches(e){if(ma(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ma(this.value.arrayValue,n)}}class iV extends Le{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!jm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ma(this.value.arrayValue,r))}}/**
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
 */class sV{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function l0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new sV(t,e,n,r,i,s,o)}function zm(t){const e=ee(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Hd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Oc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Cs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Cs(r)).join(",")),e.ue=n}return e.ue}function Bm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Y4(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!zI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!a0(t.startAt,e.startAt)&&a0(t.endAt,e.endAt)}function Wd(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Bs{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function oV(t,e,n,r,i,s,o,a){return new Bs(t,e,n,r,i,s,o,a)}function qI(t){return new Bs(t)}function u0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function HI(t){return t.collectionGroup!==null}function jo(t){const e=ee(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new je(Ge.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new ga(s,r))}),n.has(Ge.keyField().canonicalString())||e.ce.push(new ga(Ge.keyField(),r))}return e.ce}function gn(t){const e=ee(t);return e.le||(e.le=aV(e,jo(t))),e.le}function aV(t,e){if(t.limitType==="F")return l0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ga(i.field,s)});const n=t.endAt?new Hu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Hu(t.startAt.position,t.startAt.inclusive):null;return l0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Gd(t,e){const n=t.filters.concat([e]);return new Bs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Wu(t,e,n){return new Bs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Lc(t,e){return Bm(gn(t),gn(e))&&t.limitType===e.limitType}function WI(t){return`${zm(gn(t))}|lt:${t.limitType}`}function Ui(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>BI(i)).join(", ")}]`),Oc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Cs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Cs(i)).join(",")),`Target(${r})`}(gn(t))}; limitType=${t.limitType})`}function Vc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of jo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=o0(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,jo(r),i)||r.endAt&&!function(o,a,u){const c=o0(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,jo(r),i))}(t,e)}function lV(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function GI(t){return(e,n)=>{let r=!1;for(const i of jo(t)){const s=uV(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function uV(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?Rs(u,c):Y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
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
 */class bi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ki(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return LI(this.inner)}size(){return this.innerSize}}/**
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
 */const cV=new Ce(Q.comparator);function Yn(){return cV}const KI=new Ce(Q.comparator);function So(...t){let e=KI;for(const n of t)e=e.insert(n.key,n);return e}function QI(t){let e=KI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function si(){return zo()}function YI(){return zo()}function zo(){return new bi(t=>t.toString(),(t,e)=>t.isEqual(e))}const hV=new Ce(Q.comparator),fV=new je(Q.comparator);function oe(...t){let e=fV;for(const n of t)e=e.add(n);return e}const dV=new je(ae);function pV(){return dV}/**
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
 */function $m(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qu(e)?"-0":e}}function XI(t){return{integerValue:""+t}}function mV(t,e){return $4(e)?XI(e):$m(t,e)}/**
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
 */class Mc{constructor(){this._=void 0}}function gV(t,e,n){return t instanceof Gu?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Um(s)&&(s=Dc(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ya?ZI(t,e):t instanceof va?eS(t,e):function(i,s){const o=JI(i,s),a=c0(o)+c0(i.Pe);return qd(o)&&qd(i.Pe)?XI(a):$m(i.serializer,a)}(t,e)}function yV(t,e,n){return t instanceof ya?ZI(t,e):t instanceof va?eS(t,e):n}function JI(t,e){return t instanceof Ku?function(r){return qd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Gu extends Mc{}class ya extends Mc{constructor(e){super(),this.elements=e}}function ZI(t,e){const n=tS(e);for(const r of t.elements)n.some(i=>En(i,r))||n.push(r);return{arrayValue:{values:n}}}class va extends Mc{constructor(e){super(),this.elements=e}}function eS(t,e){let n=tS(e);for(const r of t.elements)n=n.filter(i=>!En(i,r));return{arrayValue:{values:n}}}class Ku extends Mc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function c0(t){return xe(t.integerValue||t.doubleValue)}function tS(t){return jm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function vV(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ya&&i instanceof ya||r instanceof va&&i instanceof va?As(r.elements,i.elements,En):r instanceof Ku&&i instanceof Ku?En(r.Pe,i.Pe):r instanceof Gu&&i instanceof Gu}(t.transform,e.transform)}class _V{constructor(e,n){this.version=e,this.transformResults=n}}class yn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new yn}static exists(e){return new yn(void 0,e)}static updateTime(e){return new yn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function nu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Fc{}function nS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new qm(t.key,yn.none()):new La(t.key,t.data,yn.none());{const n=t.data,r=Ft.empty();let i=new je(Ge.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new xi(t.key,r,new Yt(i.toArray()),yn.none())}}function wV(t,e,n){t instanceof La?function(i,s,o){const a=i.value.clone(),u=f0(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof xi?function(i,s,o){if(!nu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=f0(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(rS(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Bo(t,e,n,r){return t instanceof La?function(s,o,a,u){if(!nu(s.precondition,o))return a;const c=s.value.clone(),f=d0(s.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof xi?function(s,o,a,u){if(!nu(s.precondition,o))return a;const c=d0(s.fieldTransforms,u,o),f=o.data;return f.setAll(rS(s)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,a){return nu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function EV(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=JI(r.transform,i||null);s!=null&&(n===null&&(n=Ft.empty()),n.set(r.field,s))}return n||null}function h0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&As(r,i,(s,o)=>vV(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class La extends Fc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class xi extends Fc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function rS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function f0(t,e,n){const r=new Map;he(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,yV(o,a,n[i]))}return r}function d0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,gV(s,o,e))}return r}class qm extends Fc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class TV extends Fc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class IV{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&wV(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Bo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Bo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=YI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=nS(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&As(this.mutations,e.mutations,(n,r)=>h0(n,r))&&As(this.baseMutations,e.baseMutations,(n,r)=>h0(n,r))}}class Hm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){he(e.mutations.length===r.length);let i=function(){return hV}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Hm(e,n,r,i)}}/**
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
 */class SV{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class AV{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Oe,le;function RV(t){switch(t){default:return Y();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function iS(t){if(t===void 0)return Qn("GRPC error has no .code"),F.UNKNOWN;switch(t){case Oe.OK:return F.OK;case Oe.CANCELLED:return F.CANCELLED;case Oe.UNKNOWN:return F.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return F.INTERNAL;case Oe.UNAVAILABLE:return F.UNAVAILABLE;case Oe.UNAUTHENTICATED:return F.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case Oe.NOT_FOUND:return F.NOT_FOUND;case Oe.ALREADY_EXISTS:return F.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return F.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case Oe.ABORTED:return F.ABORTED;case Oe.OUT_OF_RANGE:return F.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return F.UNIMPLEMENTED;case Oe.DATA_LOSS:return F.DATA_LOSS;default:return Y()}}(le=Oe||(Oe={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function CV(){return new TextEncoder}/**
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
 */const PV=new ci([4294967295,4294967295],0);function p0(t){const e=CV().encode(t),n=new CI;return n.update(e),new Uint8Array(n.digest())}function m0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ci([n,r],0),new ci([i,s],0)]}class Wm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ao(`Invalid padding: ${n}`);if(r<0)throw new Ao(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ao(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ao(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=ci.fromNumber(this.Te)}Ee(e,n,r){let i=e.add(n.multiply(ci.fromNumber(r)));return i.compare(PV)===1&&(i=new ci([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=p0(e),[r,i]=m0(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Wm(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=p0(e),[r,i]=m0(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ao extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ru{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class sS{constructor(e,n){this.targetId=e,this.me=n}}class oS{constructor(e,n,r=Ye.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class g0{constructor(){this.fe=0,this.ge=y0(),this.pe=Ye.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=oe(),n=oe(),r=oe();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Y()}}),new Va(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=y0()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,he(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class kV{constructor(e){this.Le=e,this.Be=new Map,this.ke=Yn(),this.qe=kl(),this.Qe=kl(),this.Ke=new Ce(ae)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.je(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.De(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.me.count,i=this.Ye(n);if(i){const s=i.target;if(Wd(s))if(r===0){const o=new Q(s.path);this.We(n,o,st.newNoDocument(o,Z.min()))}else he(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),u=a?this.et(a,e,o):1;if(u!==0){this.He(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Mr(r).toUint8Array()}catch(u){if(u instanceof VI)return Ss("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Wm(o,i,s)}catch(u){return Ss(u instanceof Ao?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Te===0?null:a}et(e,n,r){return n.me.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&Wd(a.target)){const u=new Q(a.target.path);this.st(u).has(o)||this.ot(o,u)||this.We(o,u,st.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=oe();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Ye(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Uc(e,n,this.Ke,this.ke,r);return this.ke=Yn(),this.qe=kl(),this.Qe=kl(),this.Ke=new Ce(ae),i}Ue(e,n){if(!this.je(e))return;const r=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.ot(e,n)?i.Fe(n,1):i.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Be.get(e);return n||(n=new g0,this.Be.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new je(ae),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new je(ae),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new g0),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function kl(){return new Ce(Q.comparator)}function y0(){return new Ce(Q.comparator)}const bV={asc:"ASCENDING",desc:"DESCENDING"},xV={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},NV={and:"AND",or:"OR"};class OV{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Kd(t,e){return t.useProto3Json||Oc(e)?e:{value:e}}function Qu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function aS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function DV(t,e){return Qu(t,e.toTimestamp())}function vn(t){return he(!!t),Z.fromTimestamp(function(n){const r=Vr(n);return new Ue(r.seconds,r.nanos)}(t))}function Gm(t,e){return Qd(t,e).canonicalString()}function Qd(t,e){const n=function(i){return new ve(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function lS(t){const e=ve.fromString(t);return he(dS(e)),e}function Yd(t,e){return Gm(t.databaseId,e.path)}function hf(t,e){const n=lS(e);if(n.get(1)!==t.databaseId.projectId)throw new G(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(cS(n))}function uS(t,e){return Gm(t.databaseId,e)}function LV(t){const e=lS(t);return e.length===4?ve.emptyPath():cS(e)}function Xd(t){return new ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function cS(t){return he(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function v0(t,e,n){return{name:Yd(t,e),fields:n.value.mapValue.fields}}function VV(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,f){return c.useProto3Json?(he(f===void 0||typeof f=="string"),Ye.fromBase64String(f||"")):(he(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Ye.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const f=c.code===void 0?F.UNKNOWN:iS(c.code);return new G(f,c.message||"")}(o);n=new oS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=hf(t,r.document.name),s=vn(r.document.updateTime),o=r.document.createTime?vn(r.document.createTime):Z.min(),a=new Ft({mapValue:{fields:r.document.fields}}),u=st.newFoundDocument(i,s,o,a),c=r.targetIds||[],f=r.removedTargetIds||[];n=new ru(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=hf(t,r.document),s=r.readTime?vn(r.readTime):Z.min(),o=st.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ru([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=hf(t,r.document),s=r.removedTargetIds||[];n=new ru([],s,i,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new AV(i,s),a=r.targetId;n=new sS(a,o)}}return n}function MV(t,e){let n;if(e instanceof La)n={update:v0(t,e.key,e.value)};else if(e instanceof qm)n={delete:Yd(t,e.key)};else if(e instanceof xi)n={update:v0(t,e.key,e.data),updateMask:WV(e.fieldMask)};else{if(!(e instanceof TV))return Y();n={verify:Yd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Gu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ya)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof va)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ku)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:DV(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y()}(t,e.precondition)),n}function FV(t,e){return t&&t.length>0?(he(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?vn(i.updateTime):vn(s);return o.isEqual(Z.min())&&(o=vn(s)),new _V(o,i.transformResults||[])}(n,e))):[]}function UV(t,e){return{documents:[uS(t,e.path)]}}function jV(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=uS(t,i);const s=function(c){if(c.length!==0)return fS(nn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(f=>function(m){return{field:ji(m.field),direction:$V(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Kd(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ct:n,parent:i}}function zV(t){let e=LV(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){he(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const m=hS(p);return m instanceof nn&&jI(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(E){return new ga(zi(E.field),function(T){switch(T){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(p){let m;return m=typeof p=="object"?p.value:p,Oc(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,w=p.values||[];return new Hu(w,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,w=p.values||[];return new Hu(w,m)}(n.endAt)),oV(e,i,o,s,a,"F",u,c)}function BV(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function hS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=zi(n.unaryFilter.field);return Le.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=zi(n.unaryFilter.field);return Le.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=zi(n.unaryFilter.field);return Le.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=zi(n.unaryFilter.field);return Le.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(n){return Le.create(zi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return nn.create(n.compositeFilter.filters.map(r=>hS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y()}}(n.compositeFilter.op))}(t):Y()}function $V(t){return bV[t]}function qV(t){return xV[t]}function HV(t){return NV[t]}function ji(t){return{fieldPath:t.canonicalString()}}function zi(t){return Ge.fromServerFormat(t.fieldPath)}function fS(t){return t instanceof Le?function(n){if(n.op==="=="){if(s0(n.value))return{unaryFilter:{field:ji(n.field),op:"IS_NAN"}};if(i0(n.value))return{unaryFilter:{field:ji(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(s0(n.value))return{unaryFilter:{field:ji(n.field),op:"IS_NOT_NAN"}};if(i0(n.value))return{unaryFilter:{field:ji(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ji(n.field),op:qV(n.op),value:n.value}}}(t):t instanceof nn?function(n){const r=n.getFilters().map(i=>fS(i));return r.length===1?r[0]:{compositeFilter:{op:HV(n.op),filters:r}}}(t):Y()}function WV(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function dS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class gr{constructor(e,n,r,i,s=Z.min(),o=Z.min(),a=Ye.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new gr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class GV{constructor(e){this.ht=e}}function KV(t){const e=zV({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Wu(e,e.limit,"L"):e}/**
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
 */class QV{constructor(){this.ln=new YV}addToCollectionParentIndex(e,n){return this.ln.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Lr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Lr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class YV{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new je(ve.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new je(ve.comparator)).toArray()}}/**
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
 */const _0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class gt{static withCacheSize(e){return new gt(e,gt.DEFAULT_COLLECTION_PERCENTILE,gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */function w0([t,e],[n,r]){const i=ae(t,n);return i===0?ae(e,r):i}class XV{constructor(e){this.Gn=e,this.buffer=new je(w0),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();w0(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class JV{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){H("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){zs(n)?H("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await js(n)}await this.Yn(3e5)})}}class ZV{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(Nc.oe);const r=new XV(n);return this.Zn.forEachTarget(e,i=>r.Hn(i.sequenceNumber)).next(()=>this.Zn.er(e,i=>r.Hn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(_0)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),_0):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let r,i,s,o,a,u,c;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,a=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),Fi()<=se.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-f}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function eM(t,e){return new ZV(t,e)}/**
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
 */class tM{constructor(){this.changes=new bi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,st.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class nM{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class rM{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Bo(r.mutation,i,Yt.empty(),Ue.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=oe()){const i=si();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=So();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=si();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,oe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Yn();const o=zo(),a=function(){return zo()}();return n.forEach((u,c)=>{const f=r.get(c.key);i.has(c.key)&&(f===void 0||f.mutation instanceof xi)?s=s.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),Bo(f.mutation,c,f.mutation.getFieldMask(),Ue.now())):o.set(c.key,Yt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>{var p;return a.set(c,new nM(f,(p=o.get(c))!==null&&p!==void 0?p:null))}),a))}recalculateAndSaveOverlays(e,n){const r=zo();let i=new Ce((o,a)=>o-a),s=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||Yt.empty();f=a.applyToLocalView(c,f),r.set(u,f);const p=(i.get(a.batchId)||oe()).add(u);i=i.insert(a.batchId,p)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,f=u.value,p=YI();f.forEach(m=>{if(!s.has(m)){const w=nS(n.get(m),r.get(m));w!==null&&p.set(m,w),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return Q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):HI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(si());let a=-1,u=s;return o.next(c=>M.forEach(c,(f,p)=>(a<p.largestBatchId&&(a=p.largestBatchId),s.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{u=u.insert(f,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,oe())).next(f=>({batchId:a,changes:QI(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let i=So();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=So();return this.indexManager.getCollectionParents(e,s).next(a=>M.forEach(a,u=>{const c=function(p,m){return new Bs(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,st.newInvalidDocument(f)))});let a=So();return o.forEach((u,c)=>{const f=s.get(u);f!==void 0&&Bo(f.mutation,c,Yt.empty(),Ue.now()),Vc(n,c)&&(a=a.insert(u,c))}),a})}}/**
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
 */class iM{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return M.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:vn(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(i){return{name:i.name,query:KV(i.bundledQuery),readTime:vn(i.readTime)}}(n)),M.resolve()}}/**
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
 */class sM{constructor(){this.overlays=new Ce(Q.comparator),this.Er=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=si();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.Tt(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Er.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Er.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=si(),s=n.length+1,o=new Q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ce((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=s.get(c.largestBatchId);f===null&&(f=si(),s=s.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const a=si(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>a.set(c,f)),!(a.size()>=i)););return M.resolve(a)}Tt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Er.get(i.largestBatchId).delete(r.key);this.Er.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new SV(n,r));let s=this.Er.get(n);s===void 0&&(s=oe(),this.Er.set(n,s)),this.Er.set(n,s.add(r.key))}}/**
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
 */class oM{constructor(){this.sessionToken=Ye.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
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
 */class Km{constructor(){this.dr=new je(ze.Ar),this.Rr=new je(ze.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const r=new ze(e,n);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gr(new ze(e,n))}pr(e,n){e.forEach(r=>this.removeReference(r,n))}yr(e){const n=new Q(new ve([])),r=new ze(n,e),i=new ze(n,e+1),s=[];return this.Rr.forEachInRange([r,i],o=>{this.gr(o),s.push(o.key)}),s}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new Q(new ve([])),r=new ze(n,e),i=new ze(n,e+1);let s=oe();return this.Rr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ze(e,0),r=this.dr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ze{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return Q.comparator(e.key,n.key)||ae(e.br,n.br)}static Vr(e,n){return ae(e.br,n.br)||Q.comparator(e.key,n.key)}}/**
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
 */class aM{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new je(ze.Ar)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new IV(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.vr=this.vr.add(new ze(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Fr(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ze(n,0),i=new ze(n,Number.POSITIVE_INFINITY),s=[];return this.vr.forEachInRange([r,i],o=>{const a=this.Cr(o.br);s.push(a)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new je(ae);return n.forEach(i=>{const s=new ze(i,0),o=new ze(i,Number.POSITIVE_INFINITY);this.vr.forEachInRange([s,o],a=>{r=r.add(a.br)})}),M.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Q.isDocumentKey(s)||(s=s.child(""));const o=new ze(new Q(s),0);let a=new je(ae);return this.vr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.br)),!0)},o),M.resolve(this.Mr(a))}Mr(e){const n=[];return e.forEach(r=>{const i=this.Cr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){he(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return M.forEach(n.mutations,i=>{const s=new ze(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,n){const r=new ze(n,0),i=this.vr.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class lM{constructor(e){this.Nr=e,this.docs=function(){return new Ce(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():st.newInvalidDocument(n))}getEntries(e,n){let r=Yn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():st.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Yn();const o=n.path,a=new Q(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||U4(F4(f),r)<=0||(i.has(f.key)||Vc(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Y()}Lr(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new uM(this)}getSize(e){return M.resolve(this.size)}}class uM extends tM{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.hr.addEntry(e,i)):this.hr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
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
 */class cM{constructor(e){this.persistence=e,this.Br=new bi(n=>zm(n),Bm),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.kr=0,this.qr=new Km,this.targetCount=0,this.Qr=Ps.qn()}forEachTarget(e,n){return this.Br.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),M.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new Ps(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Un(n),M.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Br.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Br.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Br.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.qr.mr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.qr.pr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qr.Sr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.qr.containsKey(n))}}/**
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
 */class pS{constructor(e,n){this.Kr={},this.overlays={},this.$r=new Nc(0),this.Ur=!1,this.Ur=!0,this.Wr=new oM,this.referenceDelegate=e(this),this.Gr=new cM(this),this.indexManager=new QV,this.remoteDocumentCache=function(i){return new lM(i)}(r=>this.referenceDelegate.zr(r)),this.serializer=new GV(n),this.jr=new iM(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new sM,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Kr[e.toKey()];return r||(r=new aM(n,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new hM(this.$r.next());return this.referenceDelegate.Hr(),r(i).next(s=>this.referenceDelegate.Jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Yr(e,n){return M.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,n)))}}class hM extends z4{constructor(e){super(),this.currentSequenceNumber=e}}class Qm{constructor(e){this.persistence=e,this.Zr=new Km,this.Xr=null}static ei(e){return new Qm(e)}get ti(){if(this.Xr)return this.Xr;throw Y()}addReference(e,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),M.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(i=>this.ti.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.ti.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.ti,r=>{const i=Q.fromPath(r);return this.ni(e,i).next(s=>{s||n.removeEntry(i,Z.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return M.or([()=>M.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class Yu{constructor(e,n){this.persistence=e,this.ri=new bi(r=>q4(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=eM(this,n)}static ei(e,n){return new Yu(e,n)}Hr(){}Jr(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}nr(e){let n=0;return this.er(e,r=>{n++}).next(()=>n)}er(e,n){return M.forEach(this.ri,(r,i)=>this.ir(e,r,i).next(s=>s?M.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.Lr(e,o=>this.ir(e,o,n).next(a=>{a||(r++,s.removeEntry(o,Z.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),M.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=eu(e.data.value)),n}ir(e,n,r){return M.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.ri.get(n);return M.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Ym{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Wi=r,this.Gi=i}static zi(e,n){let r=oe(),i=oe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ym(e,n.fromCache,r,i)}}/**
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
 */class fM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class dM{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return $x()?8:B4(lt())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Xi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.es(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new fM;return this.ts(e,n,o).next(a=>{if(s.result=a,this.Hi)return this.ns(e,n,o,a.size)})}).next(()=>s.result)}ns(e,n,r,i){return r.documentReadCount<this.Ji?(Fi()<=se.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Ui(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),M.resolve()):(Fi()<=se.DEBUG&&H("QueryEngine","Query:",Ui(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Yi*i?(Fi()<=se.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Ui(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,gn(n))):M.resolve())}Xi(e,n){if(u0(n))return M.resolve(null);let r=gn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Wu(n,null,"F"),r=gn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=oe(...s);return this.Zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.rs(n,a);return this.ss(n,c,o,u.readTime)?this.Xi(e,Wu(n,null,"F")):this.os(e,c,n,u)}))})))}es(e,n,r,i){return u0(n)||i.isEqual(Z.min())?M.resolve(null):this.Zi.getDocuments(e,r).next(s=>{const o=this.rs(n,s);return this.ss(n,o,r,i)?M.resolve(null):(Fi()<=se.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ui(n)),this.os(e,o,n,M4(i,-1)).next(a=>a))})}rs(e,n){let r=new je(GI(e));return n.forEach((i,s)=>{Vc(e,s)&&(r=r.add(s))}),r}ss(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ts(e,n,r){return Fi()<=se.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Ui(n)),this.Zi.getDocumentsMatchingQuery(e,n,Lr.min(),r)}os(e,n,r,i){return this.Zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class pM{constructor(e,n,r,i){this.persistence=e,this._s=n,this.serializer=i,this.us=new Ce(ae),this.cs=new bi(s=>zm(s),Bm),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new rM(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function mM(t,e,n,r){return new pM(t,e,n,r)}async function mS(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Ps(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=oe();for(const c of i){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of s){a.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ts:c,removedBatchIds:o,addedBatchIds:a}))})})}function gM(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.hs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,f){const p=c.batch,m=p.keys();let w=M.resolve();return m.forEach(E=>{w=w.next(()=>f.getEntry(u,E)).next(C=>{const T=c.docVersions.get(E);he(T!==null),C.version.compareTo(T)<0&&(p.applyToRemoteDocument(C,c),C.isValidDocument()&&(C.setReadTime(c.commitVersion),f.addEntry(C)))})}),w.next(()=>a.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=oe();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function gS(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function yM(t,e){const n=ee(t),r=e.snapshotVersion;let i=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});i=n.us;const a=[];e.targetChanges.forEach((f,p)=>{const m=i.get(p);if(!m)return;a.push(n.Gr.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.Gr.addMatchingKeys(s,f.addedDocuments,p)));let w=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?w=w.withResumeToken(Ye.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):f.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(f.resumeToken,r)),i=i.insert(p,w),function(C,T,_){return C.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(m,w,f)&&a.push(n.Gr.updateTargetData(s,w))});let u=Yn(),c=oe();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),a.push(vM(s,o,e.documentUpdates).next(f=>{u=f.Is,c=f.Es})),!r.isEqual(Z.min())){const f=n.Gr.getLastRemoteSnapshotVersion(s).next(p=>n.Gr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(f)}return M.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.us=i,s))}function vM(t,e,n){let r=oe(),i=oe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Yn();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(Z.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):H("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Is:o,Es:i}})}function _M(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function wM(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Gr.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.Gr.allocateTargetId(r).next(o=>(i=new gr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Gr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.us.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.us=n.us.insert(r.targetId,r),n.cs.set(e,r.targetId)),r})}async function Jd(t,e,n){const r=ee(t),i=r.us.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!zs(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.us=r.us.remove(e),r.cs.delete(i.target)}function E0(t,e,n){const r=ee(t);let i=Z.min(),s=oe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const p=ee(u),m=p.cs.get(f);return m!==void 0?M.resolve(p.us.get(m)):p.Gr.getTargetData(c,f)}(r,o,gn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r._s.getDocumentsMatchingQuery(o,e,n?i:Z.min(),n?s:oe())).next(a=>(EM(r,lV(e),a),{documents:a,ds:s})))}function EM(t,e,n){let r=t.ls.get(e)||Z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ls.set(e,r)}class T0{constructor(){this.activeTargetIds=pV()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class TM{constructor(){this._o=new T0,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,r){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new T0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class IM{uo(e){}shutdown(){}}/**
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
 */class I0{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let bl=null;function ff(){return bl===null?bl=function(){return 268435456+Math.round(2147483648*Math.random())}():bl++,"0x"+bl.toString(16)}/**
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
 */const SM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class AM{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const nt="WebChannelConnection";class RM extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${i}/databases/${s}`,this.xo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Oo(n,r,i,s,o){const a=ff(),u=this.No(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(c,s,o),this.Bo(n,u,c,i).then(f=>(H("RestConnection",`Received RPC '${n}' ${a}: `,f),f),f=>{throw Ss("RestConnection",`RPC '${n}' ${a} failed with error: `,f,"url: ",u,"request:",i),f})}ko(n,r,i,s,o,a){return this.Oo(n,r,i,s,o)}Lo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Us}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}No(n,r){const i=SM[n];return`${this.Fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,r,i){const s=ff();return new Promise((o,a)=>{const u=new PI;u.setWithCredentials(!0),u.listenOnce(kI.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Zl.NO_ERROR:const f=u.getResponseJson();H(nt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case Zl.TIMEOUT:H(nt,`RPC '${e}' ${s} timed out`),a(new G(F.DEADLINE_EXCEEDED,"Request time out"));break;case Zl.HTTP_ERROR:const p=u.getStatus();if(H(nt,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const w=m==null?void 0:m.error;if(w&&w.status&&w.message){const E=function(T){const _=T.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(_)>=0?_:F.UNKNOWN}(w.status);a(new G(E,w.message))}else a(new G(F.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new G(F.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{H(nt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);H(nt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}qo(e,n,r){const i=ff(),s=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=NI(),a=xI(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Lo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");H(nt,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=o.createWebChannel(f,u);let m=!1,w=!1;const E=new AM({Eo:T=>{w?H(nt,`Not sending because RPC '${e}' stream ${i} is closed:`,T):(m||(H(nt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),H(nt,`RPC '${e}' stream ${i} sending:`,T),p.send(T))},Ao:()=>p.close()}),C=(T,_,y)=>{T.listen(_,I=>{try{y(I)}catch(N){setTimeout(()=>{throw N},0)}})};return C(p,Io.EventType.OPEN,()=>{w||(H(nt,`RPC '${e}' stream ${i} transport opened.`),E.So())}),C(p,Io.EventType.CLOSE,()=>{w||(w=!0,H(nt,`RPC '${e}' stream ${i} transport closed`),E.Do())}),C(p,Io.EventType.ERROR,T=>{w||(w=!0,Ss(nt,`RPC '${e}' stream ${i} transport errored:`,T),E.Do(new G(F.UNAVAILABLE,"The operation could not be completed")))}),C(p,Io.EventType.MESSAGE,T=>{var _;if(!w){const y=T.data[0];he(!!y);const I=y,N=(I==null?void 0:I.error)||((_=I[0])===null||_===void 0?void 0:_.error);if(N){H(nt,`RPC '${e}' stream ${i} received error:`,N);const V=N.status;let j=function(S){const R=Oe[S];if(R!==void 0)return iS(R)}(V),A=N.message;j===void 0&&(j=F.INTERNAL,A="Unknown error status: "+V+" with message "+N.message),w=!0,E.Do(new G(j,A)),p.close()}else H(nt,`RPC '${e}' stream ${i} received:`,y),E.vo(y)}}),C(a,bI.STAT_EVENT,T=>{T.stat===Bd.PROXY?H(nt,`RPC '${e}' stream ${i} detected buffering proxy`):T.stat===Bd.NOPROXY&&H(nt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{E.bo()},0),E}}function df(){return typeof document<"u"?document:null}/**
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
 */function jc(t){return new OV(t,!0)}/**
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
 */class yS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=i,this.$o=s,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,i,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class vS{constructor(e,n,r,i,s,o,a,u){this.li=e,this.Yo=r,this.Zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new yS(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(Qn(n.toString()),Qn("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Xo===n&&this.I_(r,i)},r=>{e(()=>{const i=new G(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(i)})})}I_(e,n){const r=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(i=>{r(()=>this.E_(i))}),this.stream.onMessage(i=>{r(()=>++this.n_==1?this.A_(i):this.onNext(i))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class CM extends vS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}d_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=VV(this.serializer,e),r=function(s){if(!("targetChange"in s))return Z.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Z.min():o.readTime?vn(o.readTime):Z.min()}(e);return this.listener.R_(n,r)}V_(e){const n={};n.database=Xd(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=Wd(u)?{documents:UV(s,u)}:{query:jV(s,u).ct},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=aS(s,o.resumeToken);const c=Kd(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(Z.min())>0){a.readTime=Qu(s,o.snapshotVersion.toTimestamp());const c=Kd(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=BV(this.serializer,e);r&&(n.labels=r),this.c_(n)}m_(e){const n={};n.database=Xd(this.serializer),n.removeTarget=e,this.c_(n)}}class PM extends vS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,n){return this.connection.qo("Write",e,n)}A_(e){return he(!!e.streamToken),this.lastStreamToken=e.streamToken,he(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){he(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=FV(e.writeResults,e.commitTime),r=vn(e.commitTime);return this.listener.y_(r,n)}w_(){const e={};e.database=Xd(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>MV(this.serializer,r))};this.c_(n)}}/**
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
 */class kM extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.S_=!1}b_(){if(this.S_)throw new G(F.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,r,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Oo(e,Qd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(F.UNKNOWN,s.toString())})}ko(e,n,r,i,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.ko(e,Qd(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G(F.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class bM{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class xM{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=s,this.Q_.uo(o=>{r.enqueueAndForget(async()=>{Ni(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=ee(u);c.k_.add(4),await Ma(c),c.K_.set("Unknown"),c.k_.delete(4),await zc(c)}(this))})}),this.K_=new bM(r,i)}}async function zc(t){if(Ni(t))for(const e of t.q_)await e(!0)}async function Ma(t){for(const e of t.q_)await e(!1)}function _S(t,e){const n=ee(t);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),eg(n)?Zm(n):$s(n).s_()&&Jm(n,e))}function Xm(t,e){const n=ee(t),r=$s(n);n.B_.delete(e),r.s_()&&wS(n,e),n.B_.size===0&&(r.s_()?r.a_():Ni(n)&&n.K_.set("Unknown"))}function Jm(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}$s(t).V_(e)}function wS(t,e){t.U_.xe(e),$s(t).m_(e)}function Zm(t){t.U_=new kV({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.B_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),$s(t).start(),t.K_.F_()}function eg(t){return Ni(t)&&!$s(t).i_()&&t.B_.size>0}function Ni(t){return ee(t).k_.size===0}function ES(t){t.U_=void 0}async function NM(t){t.K_.set("Online")}async function OM(t){t.B_.forEach((e,n)=>{Jm(t,e)})}async function DM(t,e){ES(t),eg(t)?(t.K_.O_(e),Zm(t)):t.K_.set("Unknown")}async function LM(t,e,n){if(t.K_.set("Online"),e instanceof oS&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.B_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.B_.delete(a),i.U_.removeTarget(a))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Xu(t,r)}else if(e instanceof ru?t.U_.$e(e):e instanceof sS?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(Z.min()))try{const r=await gS(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.U_.it(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.B_.get(c);f&&s.B_.set(c,f.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const f=s.B_.get(u);if(!f)return;s.B_.set(u,f.withResumeToken(Ye.EMPTY_BYTE_STRING,f.snapshotVersion)),wS(s,u);const p=new gr(f.target,u,c,f.sequenceNumber);Jm(s,p)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await Xu(t,r)}}async function Xu(t,e,n){if(!zs(e))throw e;t.k_.add(1),await Ma(t),t.K_.set("Offline"),n||(n=()=>gS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await zc(t)})}function TS(t,e){return e().catch(n=>Xu(t,n,e))}async function Bc(t){const e=ee(t),n=Ur(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;VM(e);)try{const i=await _M(e.localStore,r);if(i===null){e.L_.length===0&&n.a_();break}r=i.batchId,MM(e,i)}catch(i){await Xu(e,i)}IS(e)&&SS(e)}function VM(t){return Ni(t)&&t.L_.length<10}function MM(t,e){t.L_.push(e);const n=Ur(t);n.s_()&&n.f_&&n.g_(e.mutations)}function IS(t){return Ni(t)&&!Ur(t).i_()&&t.L_.length>0}function SS(t){Ur(t).start()}async function FM(t){Ur(t).w_()}async function UM(t){const e=Ur(t);for(const n of t.L_)e.g_(n.mutations)}async function jM(t,e,n){const r=t.L_.shift(),i=Hm.from(r,e,n);await TS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Bc(t)}async function zM(t,e){e&&Ur(t).f_&&await async function(r,i){if(function(o){return RV(o)&&o!==F.ABORTED}(i.code)){const s=r.L_.shift();Ur(r).__(),await TS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Bc(r)}}(t,e),IS(t)&&SS(t)}async function S0(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=Ni(n);n.k_.add(3),await Ma(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await zc(n)}async function BM(t,e){const n=ee(t);e?(n.k_.delete(2),await zc(n)):e||(n.k_.add(2),await Ma(n),n.K_.set("Unknown"))}function $s(t){return t.W_||(t.W_=function(n,r,i){const s=ee(n);return s.b_(),new CM(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Ro:NM.bind(null,t),mo:OM.bind(null,t),po:DM.bind(null,t),R_:LM.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),eg(t)?Zm(t):t.K_.set("Unknown")):(await t.W_.stop(),ES(t))})),t.W_}function Ur(t){return t.G_||(t.G_=function(n,r,i){const s=ee(n);return s.b_(),new PM(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:FM.bind(null,t),po:zM.bind(null,t),p_:UM.bind(null,t),y_:jM.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await Bc(t)):(await t.G_.stop(),t.L_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.L_.length} pending writes`),t.L_=[]))})),t.G_}/**
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
 */class tg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Cr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new tg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ng(t,e){if(Qn("AsyncQueue",`${e}: ${t}`),zs(t))return new G(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ps{static emptySet(e){return new ps(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||Q.comparator(n.key,r.key):(n,r)=>Q.comparator(n.key,r.key),this.keyedMap=So(),this.sortedSet=new Ce(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ps)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class A0{constructor(){this.z_=new Ce(Q.comparator)}track(e){const n=e.doc.key,r=this.z_.get(n);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(n,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(n):e.type===1&&r.type===2?this.z_=this.z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):Y():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ks{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ks(e,n,ps.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Lc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class $M{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class qM{constructor(){this.queries=R0(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const i=ee(n),s=i.queries;i.queries=R0(),s.forEach((o,a)=>{for(const u of a.J_)u.onError(r)})})(this,new G(F.ABORTED,"Firestore shutting down"))}}function R0(){return new bi(t=>WI(t),Lc)}async function HM(t,e){const n=ee(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Y_()&&e.Z_()&&(r=2):(s=new $M,r=e.Z_()?0:1);try{switch(r){case 0:s.H_=await n.onListen(i,!0);break;case 1:s.H_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=ng(o,`Initialization of query '${Ui(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.J_.push(e),e.ea(n.onlineState),s.H_&&e.ta(s.H_)&&rg(n)}async function WM(t,e){const n=ee(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.J_.indexOf(e);o>=0&&(s.J_.splice(o,1),s.J_.length===0?i=e.Z_()?0:1:!s.Y_()&&e.Z_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function GM(t,e){const n=ee(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.J_)a.ta(i)&&(r=!0);o.H_=i}}r&&rg(n)}function KM(t,e,n){const r=ee(t),i=r.queries.get(e);if(i)for(const s of i.J_)s.onError(n);r.queries.delete(e)}function rg(t){t.X_.forEach(e=>{e.next()})}var Zd,C0;(C0=Zd||(Zd={})).na="default",C0.Cache="cache";class QM{constructor(e,n,r){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ks(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const r=n!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=ks.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Zd.Cache}}/**
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
 */class AS{constructor(e){this.key=e}}class RS{constructor(e){this.key=e}}class YM{constructor(e,n){this.query=e,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=oe(),this.mutatedKeys=oe(),this.Va=GI(e),this.ma=new ps(this.Va)}get fa(){return this.da}ga(e,n){const r=n?n.pa:new A0,i=n?n.ma:this.ma;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const m=i.get(f),w=Vc(this.query,p)?p:null,E=!!m&&this.mutatedKeys.has(m.key),C=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let T=!1;m&&w?m.data.isEqual(w.data)?E!==C&&(r.track({type:3,doc:w}),T=!0):this.ya(m,w)||(r.track({type:2,doc:w}),T=!0,(u&&this.Va(w,u)>0||c&&this.Va(w,c)<0)&&(a=!0)):!m&&w?(r.track({type:0,doc:w}),T=!0):m&&!w&&(r.track({type:1,doc:m}),T=!0,(u||c)&&(a=!0)),T&&(w?(o=o.add(w),s=C?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{ma:o,pa:r,ss:a,mutatedKeys:s}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((f,p)=>function(w,E){const C=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return C(w)-C(E)}(f.type,p.type)||this.Va(f.doc,p.doc)),this.wa(r),i=i!=null&&i;const a=n&&!i?this.Sa():[],u=this.Ra.size===0&&this.current&&!i?1:0,c=u!==this.Aa;return this.Aa=u,o.length!==0||c?{snapshot:new ks(this.query,e.ma,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:a}:{ba:a}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new A0,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.da=this.da.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=oe(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const n=[];return e.forEach(r=>{this.Ra.has(r)||n.push(new RS(r))}),this.Ra.forEach(r=>{e.has(r)||n.push(new AS(r))}),n}va(e){this.da=e.ds,this.Ra=oe();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return ks.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class XM{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class JM{constructor(e){this.key=e,this.Fa=!1}}class ZM{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new bi(a=>WI(a),Lc),this.Oa=new Map,this.Na=new Set,this.La=new Ce(Q.comparator),this.Ba=new Map,this.ka=new Km,this.qa={},this.Qa=new Map,this.Ka=Ps.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function eF(t,e,n=!0){const r=NS(t);let i;const s=r.xa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Ca()):i=await CS(r,e,n,!0),i}async function tF(t,e){const n=NS(t);await CS(n,e,!0,!1)}async function CS(t,e,n,r){const i=await wM(t.localStore,gn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await nF(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&_S(t.remoteStore,i),a}async function nF(t,e,n,r,i){t.Ua=(p,m,w)=>async function(C,T,_,y){let I=T.view.ga(_);I.ss&&(I=await E0(C.localStore,T.query,!1).then(({documents:A})=>T.view.ga(A,I)));const N=y&&y.targetChanges.get(T.targetId),V=y&&y.targetMismatches.get(T.targetId)!=null,j=T.view.applyChanges(I,C.isPrimaryClient,N,V);return k0(C,T.targetId,j.ba),j.snapshot}(t,p,m,w);const s=await E0(t.localStore,e,!0),o=new YM(e,s.ds),a=o.ga(s.documents),u=Va.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);k0(t,n,c.ba);const f=new XM(e,n,o);return t.xa.set(e,f),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),c.snapshot}async function rF(t,e,n){const r=ee(t),i=r.xa.get(e),s=r.Oa.get(i.targetId);if(s.length>1)return r.Oa.set(i.targetId,s.filter(o=>!Lc(o,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Jd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Xm(r.remoteStore,i.targetId),ep(r,i.targetId)}).catch(js)):(ep(r,i.targetId),await Jd(r.localStore,i.targetId,!0))}async function iF(t,e){const n=ee(t),r=n.xa.get(e),i=n.Oa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Xm(n.remoteStore,r.targetId))}async function sF(t,e,n){const r=fF(t);try{const i=await function(o,a){const u=ee(o),c=Ue.now(),f=a.reduce((w,E)=>w.add(E.key),oe());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",w=>{let E=Yn(),C=oe();return u.hs.getEntries(w,f).next(T=>{E=T,E.forEach((_,y)=>{y.isValidDocument()||(C=C.add(_))})}).next(()=>u.localDocuments.getOverlayedDocuments(w,E)).next(T=>{p=T;const _=[];for(const y of a){const I=EV(y,p.get(y.key).overlayedDocument);I!=null&&_.push(new xi(y.key,I,MI(I.value.mapValue),yn.exists(!0)))}return u.mutationQueue.addMutationBatch(w,c,_,a)}).next(T=>{m=T;const _=T.applyToLocalDocumentSet(p,C);return u.documentOverlayCache.saveOverlays(w,T.batchId,_)})}).then(()=>({batchId:m.batchId,changes:QI(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.qa[o.currentUser.toKey()];c||(c=new Ce(ae)),c=c.insert(a,u),o.qa[o.currentUser.toKey()]=c}(r,i.batchId,n),await Fa(r,i.changes),await Bc(r.remoteStore)}catch(i){const s=ng(i,"Failed to persist write");n.reject(s)}}async function PS(t,e){const n=ee(t);try{const r=await yM(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Ba.get(s);o&&(he(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Fa=!0:i.modifiedDocuments.size>0?he(o.Fa):i.removedDocuments.size>0&&(he(o.Fa),o.Fa=!1))}),await Fa(n,r,e)}catch(r){await js(r)}}function P0(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.xa.forEach((s,o)=>{const a=o.view.ea(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=ee(o);u.onlineState=a;let c=!1;u.queries.forEach((f,p)=>{for(const m of p.J_)m.ea(a)&&(c=!0)}),c&&rg(u)}(r.eventManager,e),i.length&&r.Ma.R_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function oF(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Ba.get(e),s=i&&i.key;if(s){let o=new Ce(Q.comparator);o=o.insert(s,st.newNoDocument(s,Z.min()));const a=oe().add(s),u=new Uc(Z.min(),new Map,new Ce(ae),o,a);await PS(r,u),r.La=r.La.remove(s),r.Ba.delete(e),ig(r)}else await Jd(r.localStore,e,!1).then(()=>ep(r,e,n)).catch(js)}async function aF(t,e){const n=ee(t),r=e.batch.batchId;try{const i=await gM(n.localStore,e);bS(n,r,null),kS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Fa(n,i)}catch(i){await js(i)}}async function lF(t,e,n){const r=ee(t);try{const i=await function(o,a){const u=ee(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,a).next(p=>(he(p!==null),f=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);bS(r,e,n),kS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Fa(r,i)}catch(i){await js(i)}}function kS(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function bS(t,e,n){const r=ee(t);let i=r.qa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.qa[r.currentUser.toKey()]=i}}function ep(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Oa.get(e))t.xa.delete(r),n&&t.Ma.Wa(r,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(r=>{t.ka.containsKey(r)||xS(t,r)})}function xS(t,e){t.Na.delete(e.path.canonicalString());const n=t.La.get(e);n!==null&&(Xm(t.remoteStore,n),t.La=t.La.remove(e),t.Ba.delete(n),ig(t))}function k0(t,e,n){for(const r of n)r instanceof AS?(t.ka.addReference(r.key,e),uF(t,r)):r instanceof RS?(H("SyncEngine","Document no longer in limbo: "+r.key),t.ka.removeReference(r.key,e),t.ka.containsKey(r.key)||xS(t,r.key)):Y()}function uF(t,e){const n=e.key,r=n.path.canonicalString();t.La.get(n)||t.Na.has(r)||(H("SyncEngine","New document in limbo: "+n),t.Na.add(r),ig(t))}function ig(t){for(;t.Na.size>0&&t.La.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new Q(ve.fromString(e)),r=t.Ka.next();t.Ba.set(r,new JM(n)),t.La=t.La.insert(n,r),_S(t.remoteStore,new gr(gn(qI(n.path)),r,"TargetPurposeLimboResolution",Nc.oe))}}async function Fa(t,e,n){const r=ee(t),i=[],s=[],o=[];r.xa.isEmpty()||(r.xa.forEach((a,u)=>{o.push(r.Ua(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=Ym.zi(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ma.R_(i),await async function(u,c){const f=ee(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(c,m=>M.forEach(m.Wi,w=>f.persistence.referenceDelegate.addReference(p,m.targetId,w)).next(()=>M.forEach(m.Gi,w=>f.persistence.referenceDelegate.removeReference(p,m.targetId,w)))))}catch(p){if(!zs(p))throw p;H("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const w=f.us.get(m),E=w.snapshotVersion,C=w.withLastLimboFreeSnapshotVersion(E);f.us=f.us.insert(m,C)}}}(r.localStore,s))}async function cF(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await mS(n.localStore,e);n.currentUser=e,function(s,o){s.Qa.forEach(a=>{a.forEach(u=>{u.reject(new G(F.CANCELLED,o))})}),s.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Fa(n,r.Ts)}}function hF(t,e){const n=ee(t),r=n.Ba.get(e);if(r&&r.Fa)return oe().add(r.key);{let i=oe();const s=n.Oa.get(e);if(!s)return i;for(const o of s){const a=n.xa.get(o);i=i.unionWith(a.view.fa)}return i}}function NS(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=PS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=hF.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=oF.bind(null,e),e.Ma.R_=GM.bind(null,e.eventManager),e.Ma.Wa=KM.bind(null,e.eventManager),e}function fF(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=aF.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=lF.bind(null,e),e}class Ju{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=jc(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return mM(this.persistence,new dM,e.initialUser,this.serializer)}ja(e){return new pS(Qm.ei,this.serializer)}za(e){return new TM}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ju.provider={build:()=>new Ju};class dF extends Ju{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){he(this.persistence.referenceDelegate instanceof Yu);const r=this.persistence.referenceDelegate.garbageCollector;return new JV(r,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?gt.withCacheSize(this.cacheSizeBytes):gt.DEFAULT;return new pS(r=>Yu.ei(r,n),this.serializer)}}class tp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>P0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=cF.bind(null,this.syncEngine),await BM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new qM}()}createDatastore(e){const n=jc(e.databaseInfo.databaseId),r=function(s){return new RM(s)}(e.databaseInfo);return function(s,o,a,u){return new kM(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new xM(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>P0(this.syncEngine,n,0),function(){return I0.p()?new I0:new IM}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,f){const p=new ZM(i,s,o,a,u,c);return f&&(p.$a=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ee(i);H("RemoteStore","RemoteStore shutting down."),s.k_.add(5),await Ma(s),s.Q_.shutdown(),s.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}tp.provider={build:()=>new tp};/**
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
 */class pF{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Qn("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class mF{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=rt.UNAUTHENTICATED,this.clientId=DI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{H("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Cr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ng(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function pf(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await mS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function b0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await gF(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>S0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>S0(e.remoteStore,i)),t._onlineComponents=e}async function gF(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await pf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===F.FAILED_PRECONDITION||i.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ss("Error using user provided cache. Falling back to memory cache: "+n),await pf(t,new Ju)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await pf(t,new dF(void 0));return t._offlineComponents}async function OS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await b0(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await b0(t,new tp))),t._onlineComponents}function yF(t){return OS(t).then(e=>e.syncEngine)}async function vF(t){const e=await OS(t),n=e.eventManager;return n.onListen=eF.bind(null,e.syncEngine),n.onUnlisten=rF.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=tF.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=iF.bind(null,e.syncEngine),n}function _F(t,e,n={}){const r=new Cr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const f=new pF({next:m=>{f.eu(),o.enqueueAndForget(()=>WM(s,p)),m.fromCache&&u.source==="server"?c.reject(new G(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new QM(a,f,{includeMetadataChanges:!0,ua:!0});return HM(s,p)}(await vF(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function DS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const x0=new Map;/**
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
 */function LS(t,e,n){if(!n)throw new G(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function wF(t,e,n,r){if(e===!0&&r===!0)throw new G(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function N0(t){if(!Q.isDocumentKey(t))throw new G(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function O0(t){if(Q.isDocumentKey(t))throw new G(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function $c(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function _a(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=$c(t);throw new G(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class D0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new G(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new G(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}wF("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=DS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new G(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new G(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new G(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class qc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new D0({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new D0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new P4;switch(r.type){case"firstParty":return new N4(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=x0.get(n);r&&(H("ComponentProvider","Removing Datastore"),x0.delete(n),r.terminate())}(this),Promise.resolve()}}function EF(t,e,n,r={}){var i;const s=(t=_a(t,qc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ss("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=rt.MOCK_USER;else{a=Mx(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new G(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new rt(c)}t._authCredentials=new k4(new OI(a,u))}}/**
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
 */class qr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new qr(this.firestore,e,this._query)}}class Bt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Bt(this.firestore,e,this._key)}}class Pr extends qr{constructor(e,n,r){super(e,n,qI(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Bt(this.firestore,null,new Q(e))}withConverter(e){return new Pr(this.firestore,e,this._path)}}function L0(t,e,...n){if(t=dt(t),LS("collection","path",e),t instanceof qc){const r=ve.fromString(e,...n);return O0(r),new Pr(t,null,r)}{if(!(t instanceof Bt||t instanceof Pr))throw new G(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ve.fromString(e,...n));return O0(r),new Pr(t.firestore,null,r)}}function VS(t,e,...n){if(t=dt(t),arguments.length===1&&(e=DI.newId()),LS("doc","path",e),t instanceof qc){const r=ve.fromString(e,...n);return N0(r),new Bt(t,null,new Q(r))}{if(!(t instanceof Bt||t instanceof Pr))throw new G(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ve.fromString(e,...n));return N0(r),new Bt(t.firestore,t instanceof Pr?t.converter:null,new Q(r))}}/**
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
 */class V0{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new yS(this,"async_queue_retry"),this.fu=()=>{const r=df();r&&H("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=df();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=df();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new Cr;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!zs(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Qn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const i=tg.createAndSchedule(this,e,n,r,s=>this.Su(s));return this.du.push(i),i}pu(){this.Au&&Y()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}class Hc extends qc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new V0,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new V0(e),this._firestoreClient=void 0,await e}}}function TF(t,e){const n=typeof t=="object"?t:Em(),r=typeof t=="string"?t:"(default)",i=Pi(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Lx("firestore");s&&EF(i,...s)}return i}function MS(t){if(t._terminated)throw new G(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||IF(t),t._firestoreClient}function IF(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,f){return new G4(a,u,c,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,DS(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new mF(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class bs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bs(Ye.fromBase64String(e))}catch(n){throw new G(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new bs(Ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class sg{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class FS{constructor(e){this._methodName=e}}/**
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
 */class og{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}}/**
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
 */class ag{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const SF=/^__.*__$/;class AF{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new xi(e,this.data,this.fieldMask,n,this.fieldTransforms):new La(e,this.data,n,this.fieldTransforms)}}function US(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class lg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Fu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new lg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.xu({path:r,Nu:!1});return i.Lu(e),i}Bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.xu({path:r,Nu:!1});return i.Fu(),i}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Zu(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(US(this.Mu)&&SF.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class RF{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||jc(e)}$u(e,n,r,i=!1){return new lg({Mu:e,methodName:n,Ku:r,path:Ge.emptyPath(),Nu:!1,Qu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jS(t){const e=t._freezeSettings(),n=jc(t._databaseId);return new RF(t._databaseId,!!e.ignoreUndefinedProperties,n)}function CF(t,e,n,r,i,s={}){const o=t.$u(s.merge||s.mergeFields?2:0,e,n,i);$S("Data must be an object, but it was:",o,r);const a=zS(r,o);let u,c;if(s.merge)u=new Yt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const m=kF(e,p,n);if(!o.contains(m))throw new G(F.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);xF(f,m)||f.push(m)}u=new Yt(f),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new AF(new Ft(a),u,c)}function PF(t,e,n,r=!1){return ug(n,t.$u(r?4:3,e))}function ug(t,e){if(BS(t=dt(t)))return $S("Unsupported field value:",e,t),zS(t,e);if(t instanceof FS)return function(r,i){if(!US(i.Mu))throw i.qu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.qu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=ug(a,i.ku(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=dt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return mV(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ue.fromDate(r);return{timestampValue:Qu(i.serializer,s)}}if(r instanceof Ue){const s=new Ue(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Qu(i.serializer,s)}}if(r instanceof og)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof bs)return{bytesValue:aS(i.serializer,r._byteString)};if(r instanceof Bt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Gm(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof ag)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.qu("VectorValues must only contain numeric values.");return $m(a.serializer,u)})}}}}}}(r,i);throw i.qu(`Unsupported field value: ${$c(r)}`)}(t,e)}function zS(t,e){const n={};return LI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ki(t,(r,i)=>{const s=ug(i,e.Ou(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function BS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ue||t instanceof og||t instanceof bs||t instanceof Bt||t instanceof FS||t instanceof ag)}function $S(t,e,n){if(!BS(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=$c(n);throw r==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+r)}}function kF(t,e,n){if((e=dt(e))instanceof sg)return e._internalPath;if(typeof e=="string")return qS(t,e);throw Zu("Field path arguments must be of type string or ",t,!1,void 0,n)}const bF=new RegExp("[~\\*/\\[\\]]");function qS(t,e,n){if(e.search(bF)>=0)throw Zu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new sg(...e.split("."))._internalPath}catch{throw Zu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Zu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new G(F.INVALID_ARGUMENT,a+t+u)}function xF(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class HS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new NF(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(cg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class NF extends HS{data(){return super.data()}}function cg(t,e){return typeof e=="string"?qS(t,e):e instanceof sg?e._internalPath:e._delegate._internalPath}/**
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
 */function OF(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new G(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class hg{}class fg extends hg{}function DF(t,e,...n){let r=[];e instanceof hg&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof pg).length,a=s.filter(u=>u instanceof dg).length;if(o>1||o>0&&a>0)throw new G(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class dg extends fg{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new dg(e,n,r)}_apply(e){const n=this._parse(e);return WS(e._query,n),new qr(e.firestore,e.converter,Gd(e._query,n))}_parse(e){const n=jS(e.firestore);return function(s,o,a,u,c,f,p){let m;if(c.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new G(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){F0(p,f);const w=[];for(const E of p)w.push(M0(u,s,E));m={arrayValue:{values:w}}}else m=M0(u,s,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||F0(p,f),m=PF(a,o,p,f==="in"||f==="not-in");return Le.create(c,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class pg extends hg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new pg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:nn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)WS(o,u),o=Gd(o,u)}(e._query,n),new qr(e.firestore,e.converter,Gd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class mg extends fg{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new mg(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new G(F.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new G(F.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ga(s,o)}(e._query,this._field,this._direction);return new qr(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Bs(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function LF(t,e="asc"){const n=e,r=cg("orderBy",t);return mg._create(r,n)}class gg extends fg{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new gg(e,n,r)}_apply(e){return new qr(e.firestore,e.converter,Wu(e._query,this._limit,this._limitType))}}function VF(t){return gg._create("limit",t,"F")}function M0(t,e,n){if(typeof(n=dt(n))=="string"){if(n==="")throw new G(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!HI(e)&&n.indexOf("/")!==-1)throw new G(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ve.fromString(n));if(!Q.isDocumentKey(r))throw new G(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return r0(t,new Q(r))}if(n instanceof Bt)return r0(t,n._key);throw new G(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${$c(n)}.`)}function F0(t,e){if(!Array.isArray(t)||t.length===0)throw new G(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function WS(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new G(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new G(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class MF{convertValue(e,n="none"){switch(Fr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Mr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Y()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ki(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>xe(o.doubleValue));return new ag(s)}convertGeoPoint(e){return new og(xe(e.latitude),xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Dc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(da(e));default:return null}}convertTimestamp(e){const n=Vr(e);return new Ue(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ve.fromString(e);he(dS(r));const i=new pa(r.get(1),r.get(3)),s=new Q(r.popFirst(5));return i.isEqual(n)||Qn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function FF(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class xl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class UF extends HS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new iu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(cg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class iu extends UF{data(e={}){return super.data(e)}}class jF{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new xl(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new iu(this._firestore,this._userDataWriter,r.key,r,new xl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new G(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new iu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new xl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new iu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new xl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,f=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),f=o.indexOf(a.doc.key)),{type:zF(a.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function zF(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}class BF extends MF{constructor(e){super(),this.firestore=e}convertBytes(e){return new bs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Bt(this.firestore,null,n)}}function $F(t){t=_a(t,qr);const e=_a(t.firestore,Hc),n=MS(e),r=new BF(e);return OF(t._query),_F(n,t._query).then(i=>new jF(e,r,t,i))}function qF(t){return GS(_a(t.firestore,Hc),[new qm(t._key,yn.none())])}function HF(t,e){const n=_a(t.firestore,Hc),r=VS(t),i=FF(t.converter,e);return GS(n,[CF(jS(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,yn.exists(!1))]).then(()=>r)}function GS(t,e){return function(r,i){const s=new Cr;return r.asyncQueue.enqueueAndForget(async()=>sF(await yF(r),i,s)),s.promise}(MS(t),e)}(function(e,n=!0){(function(i){Us=i})(Ms),_n(new tn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Hc(new b4(r.getProvider("auth-internal")),new D4(r.getProvider("app-check-internal")),function(c,f){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new G(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pa(c.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),zt(X_,"4.7.5",e),zt(X_,"4.7.5","esm2017")})();const WF={apiKey:"AIzaSyB1x6aOUfLL17gtvyH9D6iS89Hmxm6_qNg",authDomain:"homepage-board-88e25.firebaseapp.com",projectId:"homepage-board-88e25",storageBucket:"homepage-board-88e25.firebasestorage.app",messagingSenderId:"775580599019",appId:"1:775580599019:web:b8734c86dac0c1e0cf34ae",measurementId:"G-21TRLLP7JW"},yg=AT(WF);S4(yg);const go=aL(yg),GF=new Nn,mf=TF(yg),KF=()=>{const[t,e]=L.useState(localStorage.getItem("isLogin")),[n,r]=L.useState("名無しさん"),[i,s]=L.useState(""),[o,a]=L.useState([]),u=()=>{gD(go,GF).then(E=>{localStorage.setItem("isLogin",!0),e(!0)})},c=()=>{YO(go).then(()=>{localStorage.clear(),e(!1)})},f=async()=>{if(!n||!i){console.log("投稿できません");return}await HF(L0(mf,"posts"),{user:n,postText:i,author:{username:go.currentUser.displayName,id:go.currentUser.uid},time:m()}),p(),s("")},p=async()=>{const E=await $F(DF(L0(mf,"posts"),LF("time","desc"),VF(20)));a(E.docs.map(C=>({...C.data(),id:C.id})))},m=()=>{const E=new Date(Date.now()+(new Date().getTimezoneOffset()+540)*60*1e3),C=E.getFullYear(),T=("00"+(E.getMonth()+1)).slice(-2),_=("00"+E.getDate()).slice(-2),y=("00"+E.getHours()).slice(-2),I=("00"+E.getMinutes()).slice(-2),N=("00"+E.getSeconds()).slice(-2);return console.log(`${C}/${T}/${_} ${y}:${I}:${N}`),`${C}/${T}/${_} ${y}:${I}:${N}`};L.useEffect(()=>{p()},[]);const w=async E=>{await qF(VS(mf,"posts",E)),p()};return U.jsxs("div",{className:"board__content",children:[U.jsx("h1",{children:"掲示板"}),t?U.jsxs(U.Fragment,{children:[U.jsxs("div",{className:"loginMenu",children:[U.jsx("p",{children:"ログアウトする"}),U.jsx("button",{onClick:c,children:"ログアウト"})]}),U.jsx("div",{className:"createPostPage",children:U.jsxs("div",{className:"postContainer",children:[U.jsx("h1",{children:"コメントを投稿する"}),U.jsxs("div",{className:"inputPost",children:[U.jsx("div",{children:"ハンドルネーム"}),U.jsx("input",{type:"text",placeholder:"タイトルを記入",value:n,onChange:E=>r(E.target.value)})]}),U.jsxs("div",{className:"inputPost",children:[U.jsx("div",{children:"コメント"}),U.jsx("textarea",{placeholder:"コメントを記入",value:i,onChange:E=>s(E.target.value)})]}),U.jsx("button",{className:"postButton",onClick:f,children:"投稿する"})]})})]}):U.jsx(U.Fragment,{children:U.jsxs("div",{className:"loginMenu",children:[U.jsx("p",{children:"ログインして書き込む"}),U.jsx("button",{onClick:u,children:"Googleでログイン"})]})}),U.jsx("div",{className:"postList",children:o.map(E=>{var C;return U.jsxs("div",{className:"postContents",children:[U.jsxs("h3",{children:["@",E.user]}),U.jsx("div",{className:"postTextContainer",children:E.postText}),U.jsx("div",{className:"postTextContainer",children:E.time}),E.author.id===((C=go.currentUser)==null?void 0:C.uid)&&U.jsx("button",{onClick:()=>w(E.id),children:"削除"})]},E.id)})})]})};function KS(t,e){return function(){return t.apply(e,arguments)}}const{toString:QF}=Object.prototype,{getPrototypeOf:vg}=Object,Wc=(t=>e=>{const n=QF.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),sn=t=>(t=t.toLowerCase(),e=>Wc(e)===t),Gc=t=>e=>typeof e===t,{isArray:qs}=Array,wa=Gc("undefined");function YF(t){return t!==null&&!wa(t)&&t.constructor!==null&&!wa(t.constructor)&&bt(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const QS=sn("ArrayBuffer");function XF(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&QS(t.buffer),e}const JF=Gc("string"),bt=Gc("function"),YS=Gc("number"),Kc=t=>t!==null&&typeof t=="object",ZF=t=>t===!0||t===!1,su=t=>{if(Wc(t)!=="object")return!1;const e=vg(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},e3=sn("Date"),t3=sn("File"),n3=sn("Blob"),r3=sn("FileList"),i3=t=>Kc(t)&&bt(t.pipe),s3=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||bt(t.append)&&((e=Wc(t))==="formdata"||e==="object"&&bt(t.toString)&&t.toString()==="[object FormData]"))},o3=sn("URLSearchParams"),[a3,l3,u3,c3]=["ReadableStream","Request","Response","Headers"].map(sn),h3=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ua(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),qs(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(r=0;r<o;r++)a=s[r],e.call(null,t[a],a,t)}}function XS(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const oi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,JS=t=>!wa(t)&&t!==oi;function np(){const{caseless:t}=JS(this)&&this||{},e={},n=(r,i)=>{const s=t&&XS(e,i)||i;su(e[s])&&su(r)?e[s]=np(e[s],r):su(r)?e[s]=np({},r):qs(r)?e[s]=r.slice():e[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Ua(arguments[r],n);return e}const f3=(t,e,n,{allOwnKeys:r}={})=>(Ua(e,(i,s)=>{n&&bt(i)?t[s]=KS(i,n):t[s]=i},{allOwnKeys:r}),t),d3=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),p3=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},m3=(t,e,n,r)=>{let i,s,o;const a={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)o=i[s],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&vg(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},g3=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},y3=t=>{if(!t)return null;if(qs(t))return t;let e=t.length;if(!YS(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},v3=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&vg(Uint8Array)),_3=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(t,s[0],s[1])}},w3=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},E3=sn("HTMLFormElement"),T3=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),U0=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),I3=sn("RegExp"),ZS=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};Ua(n,(i,s)=>{let o;(o=e(i,s,t))!==!1&&(r[s]=o||i)}),Object.defineProperties(t,r)},S3=t=>{ZS(t,(e,n)=>{if(bt(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(bt(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},A3=(t,e)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return qs(t)?r(t):r(String(t).split(e)),n},R3=()=>{},C3=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,gf="abcdefghijklmnopqrstuvwxyz",j0="0123456789",eA={DIGIT:j0,ALPHA:gf,ALPHA_DIGIT:gf+gf.toUpperCase()+j0},P3=(t=16,e=eA.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function k3(t){return!!(t&&bt(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const b3=t=>{const e=new Array(10),n=(r,i)=>{if(Kc(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const s=qs(r)?[]:{};return Ua(r,(o,a)=>{const u=n(o,i+1);!wa(u)&&(s[a]=u)}),e[i]=void 0,s}}return r};return n(t,0)},x3=sn("AsyncFunction"),N3=t=>t&&(Kc(t)||bt(t))&&bt(t.then)&&bt(t.catch),tA=((t,e)=>t?setImmediate:e?((n,r)=>(oi.addEventListener("message",({source:i,data:s})=>{i===oi&&s===n&&r.length&&r.shift()()},!1),i=>{r.push(i),oi.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",bt(oi.postMessage)),O3=typeof queueMicrotask<"u"?queueMicrotask.bind(oi):typeof process<"u"&&process.nextTick||tA,D={isArray:qs,isArrayBuffer:QS,isBuffer:YF,isFormData:s3,isArrayBufferView:XF,isString:JF,isNumber:YS,isBoolean:ZF,isObject:Kc,isPlainObject:su,isReadableStream:a3,isRequest:l3,isResponse:u3,isHeaders:c3,isUndefined:wa,isDate:e3,isFile:t3,isBlob:n3,isRegExp:I3,isFunction:bt,isStream:i3,isURLSearchParams:o3,isTypedArray:v3,isFileList:r3,forEach:Ua,merge:np,extend:f3,trim:h3,stripBOM:d3,inherits:p3,toFlatObject:m3,kindOf:Wc,kindOfTest:sn,endsWith:g3,toArray:y3,forEachEntry:_3,matchAll:w3,isHTMLForm:E3,hasOwnProperty:U0,hasOwnProp:U0,reduceDescriptors:ZS,freezeMethods:S3,toObjectSet:A3,toCamelCase:T3,noop:R3,toFiniteNumber:C3,findKey:XS,global:oi,isContextDefined:JS,ALPHABET:eA,generateString:P3,isSpecCompliantForm:k3,toJSONObject:b3,isAsyncFn:x3,isThenable:N3,setImmediate:tA,asap:O3};function te(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status?i.status:null)}D.inherits(te,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:D.toJSONObject(this.config),code:this.code,status:this.status}}});const nA=te.prototype,rA={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{rA[t]={value:t}});Object.defineProperties(te,rA);Object.defineProperty(nA,"isAxiosError",{value:!0});te.from=(t,e,n,r,i,s)=>{const o=Object.create(nA);return D.toFlatObject(t,o,function(u){return u!==Error.prototype},a=>a!=="isAxiosError"),te.call(o,t.message,e,n,r,i),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const D3=null;function rp(t){return D.isPlainObject(t)||D.isArray(t)}function iA(t){return D.endsWith(t,"[]")?t.slice(0,-2):t}function z0(t,e,n){return t?t.concat(e).map(function(i,s){return i=iA(i),!n&&s?"["+i+"]":i}).join(n?".":""):e}function L3(t){return D.isArray(t)&&!t.some(rp)}const V3=D.toFlatObject(D,{},null,function(e){return/^is[A-Z]/.test(e)});function Qc(t,e,n){if(!D.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=D.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(C,T){return!D.isUndefined(T[C])});const r=n.metaTokens,i=n.visitor||f,s=n.dots,o=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&D.isSpecCompliantForm(e);if(!D.isFunction(i))throw new TypeError("visitor must be a function");function c(E){if(E===null)return"";if(D.isDate(E))return E.toISOString();if(!u&&D.isBlob(E))throw new te("Blob is not supported. Use a Buffer instead.");return D.isArrayBuffer(E)||D.isTypedArray(E)?u&&typeof Blob=="function"?new Blob([E]):Buffer.from(E):E}function f(E,C,T){let _=E;if(E&&!T&&typeof E=="object"){if(D.endsWith(C,"{}"))C=r?C:C.slice(0,-2),E=JSON.stringify(E);else if(D.isArray(E)&&L3(E)||(D.isFileList(E)||D.endsWith(C,"[]"))&&(_=D.toArray(E)))return C=iA(C),_.forEach(function(I,N){!(D.isUndefined(I)||I===null)&&e.append(o===!0?z0([C],N,s):o===null?C:C+"[]",c(I))}),!1}return rp(E)?!0:(e.append(z0(T,C,s),c(E)),!1)}const p=[],m=Object.assign(V3,{defaultVisitor:f,convertValue:c,isVisitable:rp});function w(E,C){if(!D.isUndefined(E)){if(p.indexOf(E)!==-1)throw Error("Circular reference detected in "+C.join("."));p.push(E),D.forEach(E,function(_,y){(!(D.isUndefined(_)||_===null)&&i.call(e,_,D.isString(y)?y.trim():y,C,m))===!0&&w(_,C?C.concat(y):[y])}),p.pop()}}if(!D.isObject(t))throw new TypeError("data must be an object");return w(t),e}function B0(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function _g(t,e){this._pairs=[],t&&Qc(t,this,e)}const sA=_g.prototype;sA.append=function(e,n){this._pairs.push([e,n])};sA.toString=function(e){const n=e?function(r){return e.call(this,r,B0)}:B0;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function M3(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function oA(t,e,n){if(!e)return t;const r=n&&n.encode||M3,i=n&&n.serialize;let s;if(i?s=i(e,n):s=D.isURLSearchParams(e)?e.toString():new _g(e,n).toString(r),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class $0{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){D.forEach(this.handlers,function(r){r!==null&&e(r)})}}const aA={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},F3=typeof URLSearchParams<"u"?URLSearchParams:_g,U3=typeof FormData<"u"?FormData:null,j3=typeof Blob<"u"?Blob:null,z3={isBrowser:!0,classes:{URLSearchParams:F3,FormData:U3,Blob:j3},protocols:["http","https","file","blob","url","data"]},wg=typeof window<"u"&&typeof document<"u",ip=typeof navigator=="object"&&navigator||void 0,B3=wg&&(!ip||["ReactNative","NativeScript","NS"].indexOf(ip.product)<0),$3=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",q3=wg&&window.location.href||"http://localhost",H3=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:wg,hasStandardBrowserEnv:B3,hasStandardBrowserWebWorkerEnv:$3,navigator:ip,origin:q3},Symbol.toStringTag,{value:"Module"})),It={...H3,...z3};function W3(t,e){return Qc(t,new It.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return It.isNode&&D.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function G3(t){return D.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function K3(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function lA(t){function e(n,r,i,s){let o=n[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),u=s>=n.length;return o=!o&&D.isArray(i)?i.length:o,u?(D.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!a):((!i[o]||!D.isObject(i[o]))&&(i[o]=[]),e(n,r,i[o],s)&&D.isArray(i[o])&&(i[o]=K3(i[o])),!a)}if(D.isFormData(t)&&D.isFunction(t.entries)){const n={};return D.forEachEntry(t,(r,i)=>{e(G3(r),i,n,0)}),n}return null}function Q3(t,e,n){if(D.isString(t))try{return(e||JSON.parse)(t),D.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(0,JSON.stringify)(t)}const ja={transitional:aA,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=D.isObject(e);if(s&&D.isHTMLForm(e)&&(e=new FormData(e)),D.isFormData(e))return i?JSON.stringify(lA(e)):e;if(D.isArrayBuffer(e)||D.isBuffer(e)||D.isStream(e)||D.isFile(e)||D.isBlob(e)||D.isReadableStream(e))return e;if(D.isArrayBufferView(e))return e.buffer;if(D.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return W3(e,this.formSerializer).toString();if((a=D.isFileList(e))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return Qc(a?{"files[]":e}:e,u&&new u,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),Q3(e)):e}],transformResponse:[function(e){const n=this.transitional||ja.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(D.isResponse(e)||D.isReadableStream(e))return e;if(e&&D.isString(e)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?te.from(a,te.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:It.classes.FormData,Blob:It.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};D.forEach(["delete","get","head","post","put","patch"],t=>{ja.headers[t]={}});const Y3=D.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),X3=t=>{const e={};let n,r,i;return t&&t.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||e[n]&&Y3[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},q0=Symbol("internals");function yo(t){return t&&String(t).trim().toLowerCase()}function ou(t){return t===!1||t==null?t:D.isArray(t)?t.map(ou):String(t)}function J3(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const Z3=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function yf(t,e,n,r,i){if(D.isFunction(r))return r.call(this,e,n);if(i&&(e=n),!!D.isString(e)){if(D.isString(r))return e.indexOf(r)!==-1;if(D.isRegExp(r))return r.test(e)}}function e6(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function t6(t,e){const n=D.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(i,s,o){return this[r].call(this,e,i,s,o)},configurable:!0})})}class St{constructor(e){e&&this.set(e)}set(e,n,r){const i=this;function s(a,u,c){const f=yo(u);if(!f)throw new Error("header name must be a non-empty string");const p=D.findKey(i,f);(!p||i[p]===void 0||c===!0||c===void 0&&i[p]!==!1)&&(i[p||u]=ou(a))}const o=(a,u)=>D.forEach(a,(c,f)=>s(c,f,u));if(D.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(D.isString(e)&&(e=e.trim())&&!Z3(e))o(X3(e),n);else if(D.isHeaders(e))for(const[a,u]of e.entries())s(u,a,r);else e!=null&&s(n,e,r);return this}get(e,n){if(e=yo(e),e){const r=D.findKey(this,e);if(r){const i=this[r];if(!n)return i;if(n===!0)return J3(i);if(D.isFunction(n))return n.call(this,i,r);if(D.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=yo(e),e){const r=D.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||yf(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let i=!1;function s(o){if(o=yo(o),o){const a=D.findKey(r,o);a&&(!n||yf(r,r[a],a,n))&&(delete r[a],i=!0)}}return D.isArray(e)?e.forEach(s):s(e),i}clear(e){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!e||yf(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const n=this,r={};return D.forEach(this,(i,s)=>{const o=D.findKey(r,s);if(o){n[o]=ou(i),delete n[s];return}const a=e?e6(s):String(s).trim();a!==s&&delete n[s],n[a]=ou(i),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return D.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=e&&D.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[q0]=this[q0]={accessors:{}}).accessors,i=this.prototype;function s(o){const a=yo(o);r[a]||(t6(i,o),r[a]=!0)}return D.isArray(e)?e.forEach(s):s(e),this}}St.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);D.reduceDescriptors(St.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});D.freezeMethods(St);function vf(t,e){const n=this||ja,r=e||n,i=St.from(r.headers);let s=r.data;return D.forEach(t,function(a){s=a.call(n,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function uA(t){return!!(t&&t.__CANCEL__)}function Hs(t,e,n){te.call(this,t??"canceled",te.ERR_CANCELED,e,n),this.name="CanceledError"}D.inherits(Hs,te,{__CANCEL__:!0});function cA(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new te("Request failed with status code "+n.status,[te.ERR_BAD_REQUEST,te.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function n6(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function r6(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,s=0,o;return e=e!==void 0?e:1e3,function(u){const c=Date.now(),f=r[s];o||(o=c),n[i]=u,r[i]=c;let p=s,m=0;for(;p!==i;)m+=n[p++],p=p%t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),c-o<e)return;const w=f&&c-f;return w?Math.round(m*1e3/w):void 0}}function i6(t,e){let n=0,r=1e3/e,i,s;const o=(c,f=Date.now())=>{n=f,i=null,s&&(clearTimeout(s),s=null),t.apply(null,c)};return[(...c)=>{const f=Date.now(),p=f-n;p>=r?o(c,f):(i=c,s||(s=setTimeout(()=>{s=null,o(i)},r-p)))},()=>i&&o(i)]}const ec=(t,e,n=3)=>{let r=0;const i=r6(50,250);return i6(s=>{const o=s.loaded,a=s.lengthComputable?s.total:void 0,u=o-r,c=i(u),f=o<=a;r=o;const p={loaded:o,total:a,progress:a?o/a:void 0,bytes:u,rate:c||void 0,estimated:c&&a&&f?(a-o)/c:void 0,event:s,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(p)},n)},H0=(t,e)=>{const n=t!=null;return[r=>e[0]({lengthComputable:n,total:t,loaded:r}),e[1]]},W0=t=>(...e)=>D.asap(()=>t(...e)),s6=It.hasStandardBrowserEnv?function(){const e=It.navigator&&/(msie|trident)/i.test(It.navigator.userAgent),n=document.createElement("a");let r;function i(s){let o=s;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const a=D.isString(o)?i(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}(),o6=It.hasStandardBrowserEnv?{write(t,e,n,r,i,s){const o=[t+"="+encodeURIComponent(e)];D.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),D.isString(r)&&o.push("path="+r),D.isString(i)&&o.push("domain="+i),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function a6(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function l6(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function hA(t,e){return t&&!a6(e)?l6(t,e):e}const G0=t=>t instanceof St?{...t}:t;function Ii(t,e){e=e||{};const n={};function r(c,f,p){return D.isPlainObject(c)&&D.isPlainObject(f)?D.merge.call({caseless:p},c,f):D.isPlainObject(f)?D.merge({},f):D.isArray(f)?f.slice():f}function i(c,f,p){if(D.isUndefined(f)){if(!D.isUndefined(c))return r(void 0,c,p)}else return r(c,f,p)}function s(c,f){if(!D.isUndefined(f))return r(void 0,f)}function o(c,f){if(D.isUndefined(f)){if(!D.isUndefined(c))return r(void 0,c)}else return r(void 0,f)}function a(c,f,p){if(p in e)return r(c,f);if(p in t)return r(void 0,c)}const u={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,f)=>i(G0(c),G0(f),!0)};return D.forEach(Object.keys(Object.assign({},t,e)),function(f){const p=u[f]||i,m=p(t[f],e[f],f);D.isUndefined(m)&&p!==a||(n[f]=m)}),n}const fA=t=>{const e=Ii({},t);let{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:s,headers:o,auth:a}=e;e.headers=o=St.from(o),e.url=oA(hA(e.baseURL,e.url),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let u;if(D.isFormData(n)){if(It.hasStandardBrowserEnv||It.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((u=o.getContentType())!==!1){const[c,...f]=u?u.split(";").map(p=>p.trim()).filter(Boolean):[];o.setContentType([c||"multipart/form-data",...f].join("; "))}}if(It.hasStandardBrowserEnv&&(r&&D.isFunction(r)&&(r=r(e)),r||r!==!1&&s6(e.url))){const c=i&&s&&o6.read(s);c&&o.set(i,c)}return e},u6=typeof XMLHttpRequest<"u",c6=u6&&function(t){return new Promise(function(n,r){const i=fA(t);let s=i.data;const o=St.from(i.headers).normalize();let{responseType:a,onUploadProgress:u,onDownloadProgress:c}=i,f,p,m,w,E;function C(){w&&w(),E&&E(),i.cancelToken&&i.cancelToken.unsubscribe(f),i.signal&&i.signal.removeEventListener("abort",f)}let T=new XMLHttpRequest;T.open(i.method.toUpperCase(),i.url,!0),T.timeout=i.timeout;function _(){if(!T)return;const I=St.from("getAllResponseHeaders"in T&&T.getAllResponseHeaders()),V={data:!a||a==="text"||a==="json"?T.responseText:T.response,status:T.status,statusText:T.statusText,headers:I,config:t,request:T};cA(function(A){n(A),C()},function(A){r(A),C()},V),T=null}"onloadend"in T?T.onloadend=_:T.onreadystatechange=function(){!T||T.readyState!==4||T.status===0&&!(T.responseURL&&T.responseURL.indexOf("file:")===0)||setTimeout(_)},T.onabort=function(){T&&(r(new te("Request aborted",te.ECONNABORTED,t,T)),T=null)},T.onerror=function(){r(new te("Network Error",te.ERR_NETWORK,t,T)),T=null},T.ontimeout=function(){let N=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const V=i.transitional||aA;i.timeoutErrorMessage&&(N=i.timeoutErrorMessage),r(new te(N,V.clarifyTimeoutError?te.ETIMEDOUT:te.ECONNABORTED,t,T)),T=null},s===void 0&&o.setContentType(null),"setRequestHeader"in T&&D.forEach(o.toJSON(),function(N,V){T.setRequestHeader(V,N)}),D.isUndefined(i.withCredentials)||(T.withCredentials=!!i.withCredentials),a&&a!=="json"&&(T.responseType=i.responseType),c&&([m,E]=ec(c,!0),T.addEventListener("progress",m)),u&&T.upload&&([p,w]=ec(u),T.upload.addEventListener("progress",p),T.upload.addEventListener("loadend",w)),(i.cancelToken||i.signal)&&(f=I=>{T&&(r(!I||I.type?new Hs(null,t,T):I),T.abort(),T=null)},i.cancelToken&&i.cancelToken.subscribe(f),i.signal&&(i.signal.aborted?f():i.signal.addEventListener("abort",f)));const y=n6(i.url);if(y&&It.protocols.indexOf(y)===-1){r(new te("Unsupported protocol "+y+":",te.ERR_BAD_REQUEST,t));return}T.send(s||null)})},h6=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let r=new AbortController,i;const s=function(c){if(!i){i=!0,a();const f=c instanceof Error?c:this.reason;r.abort(f instanceof te?f:new Hs(f instanceof Error?f.message:f))}};let o=e&&setTimeout(()=>{o=null,s(new te(`timeout ${e} of ms exceeded`,te.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(c=>{c.unsubscribe?c.unsubscribe(s):c.removeEventListener("abort",s)}),t=null)};t.forEach(c=>c.addEventListener("abort",s));const{signal:u}=r;return u.unsubscribe=()=>D.asap(a),u}},f6=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let r=0,i;for(;r<n;)i=r+e,yield t.slice(r,i),r=i},d6=async function*(t,e){for await(const n of p6(t))yield*f6(n,e)},p6=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:r}=await e.read();if(n)break;yield r}}finally{await e.cancel()}},K0=(t,e,n,r)=>{const i=d6(t,e);let s=0,o,a=u=>{o||(o=!0,r&&r(u))};return new ReadableStream({async pull(u){try{const{done:c,value:f}=await i.next();if(c){a(),u.close();return}let p=f.byteLength;if(n){let m=s+=p;n(m)}u.enqueue(new Uint8Array(f))}catch(c){throw a(c),c}},cancel(u){return a(u),i.return()}},{highWaterMark:2})},Yc=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",dA=Yc&&typeof ReadableStream=="function",m6=Yc&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),pA=(t,...e)=>{try{return!!t(...e)}catch{return!1}},g6=dA&&pA(()=>{let t=!1;const e=new Request(It.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),Q0=64*1024,sp=dA&&pA(()=>D.isReadableStream(new Response("").body)),tc={stream:sp&&(t=>t.body)};Yc&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!tc[e]&&(tc[e]=D.isFunction(t[e])?n=>n[e]():(n,r)=>{throw new te(`Response type '${e}' is not supported`,te.ERR_NOT_SUPPORT,r)})})})(new Response);const y6=async t=>{if(t==null)return 0;if(D.isBlob(t))return t.size;if(D.isSpecCompliantForm(t))return(await new Request(It.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(D.isArrayBufferView(t)||D.isArrayBuffer(t))return t.byteLength;if(D.isURLSearchParams(t)&&(t=t+""),D.isString(t))return(await m6(t)).byteLength},v6=async(t,e)=>{const n=D.toFiniteNumber(t.getContentLength());return n??y6(e)},_6=Yc&&(async t=>{let{url:e,method:n,data:r,signal:i,cancelToken:s,timeout:o,onDownloadProgress:a,onUploadProgress:u,responseType:c,headers:f,withCredentials:p="same-origin",fetchOptions:m}=fA(t);c=c?(c+"").toLowerCase():"text";let w=h6([i,s&&s.toAbortSignal()],o),E;const C=w&&w.unsubscribe&&(()=>{w.unsubscribe()});let T;try{if(u&&g6&&n!=="get"&&n!=="head"&&(T=await v6(f,r))!==0){let V=new Request(e,{method:"POST",body:r,duplex:"half"}),j;if(D.isFormData(r)&&(j=V.headers.get("content-type"))&&f.setContentType(j),V.body){const[A,v]=H0(T,ec(W0(u)));r=K0(V.body,Q0,A,v)}}D.isString(p)||(p=p?"include":"omit");const _="credentials"in Request.prototype;E=new Request(e,{...m,signal:w,method:n.toUpperCase(),headers:f.normalize().toJSON(),body:r,duplex:"half",credentials:_?p:void 0});let y=await fetch(E);const I=sp&&(c==="stream"||c==="response");if(sp&&(a||I&&C)){const V={};["status","statusText","headers"].forEach(S=>{V[S]=y[S]});const j=D.toFiniteNumber(y.headers.get("content-length")),[A,v]=a&&H0(j,ec(W0(a),!0))||[];y=new Response(K0(y.body,Q0,A,()=>{v&&v(),C&&C()}),V)}c=c||"text";let N=await tc[D.findKey(tc,c)||"text"](y,t);return!I&&C&&C(),await new Promise((V,j)=>{cA(V,j,{data:N,headers:St.from(y.headers),status:y.status,statusText:y.statusText,config:t,request:E})})}catch(_){throw C&&C(),_&&_.name==="TypeError"&&/fetch/i.test(_.message)?Object.assign(new te("Network Error",te.ERR_NETWORK,t,E),{cause:_.cause||_}):te.from(_,_&&_.code,t,E)}}),op={http:D3,xhr:c6,fetch:_6};D.forEach(op,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Y0=t=>`- ${t}`,w6=t=>D.isFunction(t)||t===null||t===!1,mA={getAdapter:t=>{t=D.isArray(t)?t:[t];const{length:e}=t;let n,r;const i={};for(let s=0;s<e;s++){n=t[s];let o;if(r=n,!w6(n)&&(r=op[(o=String(n)).toLowerCase()],r===void 0))throw new te(`Unknown adapter '${o}'`);if(r)break;i[o||"#"+s]=r}if(!r){const s=Object.entries(i).map(([a,u])=>`adapter ${a} `+(u===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(Y0).join(`
`):" "+Y0(s[0]):"as no adapter specified";throw new te("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:op};function _f(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Hs(null,t)}function X0(t){return _f(t),t.headers=St.from(t.headers),t.data=vf.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),mA.getAdapter(t.adapter||ja.adapter)(t).then(function(r){return _f(t),r.data=vf.call(t,t.transformResponse,r),r.headers=St.from(r.headers),r},function(r){return uA(r)||(_f(t),r&&r.response&&(r.response.data=vf.call(t,t.transformResponse,r.response),r.response.headers=St.from(r.response.headers))),Promise.reject(r)})}const gA="1.7.7",Eg={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Eg[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const J0={};Eg.transitional=function(e,n,r){function i(s,o){return"[Axios v"+gA+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,a)=>{if(e===!1)throw new te(i(o," has been removed"+(n?" in "+n:"")),te.ERR_DEPRECATED);return n&&!J0[o]&&(J0[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};function E6(t,e,n){if(typeof t!="object")throw new te("options must be an object",te.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],o=e[s];if(o){const a=t[s],u=a===void 0||o(a,s,t);if(u!==!0)throw new te("option "+s+" must be "+u,te.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new te("Unknown option "+s,te.ERR_BAD_OPTION)}}const ap={assertOptions:E6,validators:Eg},or=ap.validators;class hi{constructor(e){this.defaults=e,this.interceptors={request:new $0,response:new $0}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;const s=i.stack?i.stack.replace(/^.+\n/,""):"";try{r.stack?s&&!String(r.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+s):r.stack=s}catch{}}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Ii(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&ap.assertOptions(r,{silentJSONParsing:or.transitional(or.boolean),forcedJSONParsing:or.transitional(or.boolean),clarifyTimeoutError:or.transitional(or.boolean)},!1),i!=null&&(D.isFunction(i)?n.paramsSerializer={serialize:i}:ap.assertOptions(i,{encode:or.function,serialize:or.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&D.merge(s.common,s[n.method]);s&&D.forEach(["delete","get","head","post","put","patch","common"],E=>{delete s[E]}),n.headers=St.concat(o,s);const a=[];let u=!0;this.interceptors.request.forEach(function(C){typeof C.runWhen=="function"&&C.runWhen(n)===!1||(u=u&&C.synchronous,a.unshift(C.fulfilled,C.rejected))});const c=[];this.interceptors.response.forEach(function(C){c.push(C.fulfilled,C.rejected)});let f,p=0,m;if(!u){const E=[X0.bind(this),void 0];for(E.unshift.apply(E,a),E.push.apply(E,c),m=E.length,f=Promise.resolve(n);p<m;)f=f.then(E[p++],E[p++]);return f}m=a.length;let w=n;for(p=0;p<m;){const E=a[p++],C=a[p++];try{w=E(w)}catch(T){C.call(this,T);break}}try{f=X0.call(this,w)}catch(E){return Promise.reject(E)}for(p=0,m=c.length;p<m;)f=f.then(c[p++],c[p++]);return f}getUri(e){e=Ii(this.defaults,e);const n=hA(e.baseURL,e.url);return oA(n,e.params,e.paramsSerializer)}}D.forEach(["delete","get","head","options"],function(e){hi.prototype[e]=function(n,r){return this.request(Ii(r||{},{method:e,url:n,data:(r||{}).data}))}});D.forEach(["post","put","patch"],function(e){function n(r){return function(s,o,a){return this.request(Ii(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}hi.prototype[e]=n(),hi.prototype[e+"Form"]=n(!0)});class Tg{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(a=>{r.subscribe(a),s=a}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},e(function(s,o,a){r.reason||(r.reason=new Hs(s,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=r=>{e.abort(r)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new Tg(function(i){e=i}),cancel:e}}}function T6(t){return function(n){return t.apply(null,n)}}function I6(t){return D.isObject(t)&&t.isAxiosError===!0}const lp={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(lp).forEach(([t,e])=>{lp[e]=t});function yA(t){const e=new hi(t),n=KS(hi.prototype.request,e);return D.extend(n,hi.prototype,e,{allOwnKeys:!0}),D.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return yA(Ii(t,i))},n}const Ve=yA(ja);Ve.Axios=hi;Ve.CanceledError=Hs;Ve.CancelToken=Tg;Ve.isCancel=uA;Ve.VERSION=gA;Ve.toFormData=Qc;Ve.AxiosError=te;Ve.Cancel=Ve.CanceledError;Ve.all=function(e){return Promise.all(e)};Ve.spread=T6;Ve.isAxiosError=I6;Ve.mergeConfig=Ii;Ve.AxiosHeaders=St;Ve.formToJSON=t=>lA(D.isHTMLForm(t)?new FormData(t):t);Ve.getAdapter=mA.getAdapter;Ve.HttpStatusCode=lp;Ve.default=Ve;const an={regionList:["北海道","関東","近畿"],prefList:{北海道:["道北","道東"],関東:["茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県"],近畿:["滋賀県","京都府","大阪府","兵庫県","奈良県","和歌山県"]},cityList:{道北:[{city:"稚内",id:"011000"},{city:"旭川",id:"012010"},{city:"留萌",id:"012020"}],道東:[{city:"網走",id:"013010"},{city:"北見",id:"013020"},{city:"紋別",id:"013030"},{city:"根室",id:"014010"},{city:"釧路",id:"014020"},{city:"帯広",id:"014030"}],茨城県:[{city:"水戸",id:"080010"},{city:"土浦",id:"080020"}],栃木県:[{city:"宇都宮",id:"090010"},{city:"大田原",id:"090020"}],群馬県:[{city:"前橋",id:"100010"},{city:"みなかみ",id:"100020"}],埼玉県:[{city:"さいたま",id:"110010"},{city:"熊谷",id:"110020"},{city:"秩父",id:"110030"}],千葉県:[{city:"千葉",id:"120010"},{city:"銚子",id:"120020"},{city:"館山",id:"120030"}],東京都:[{city:"東京",id:"130010"},{city:"大島",id:"130020"},{city:"八丈島",id:"130030"},{city:"父島",id:"130040"}],神奈川県:[{city:"横浜",id:"140010"},{city:"小田原",id:"140020"}],滋賀県:[{city:"大津",id:"250010"},{city:"彦根",id:"250020"}],京都府:[{city:"京都",id:"260010"},{city:"舞鶴",id:"260020"}],大阪府:[{city:"大阪",id:"270000"}],兵庫県:[{city:"神戸",id:"280010"},{city:"豊岡",id:"280020"}],奈良県:[{city:"奈良",id:"290010"},{city:"風屋",id:"290020"}],和歌山県:[{city:"和歌山",id:"300010"},{city:"潮岬",id:"300020"}]}},S6="https://weather.tsukumijima.net/api/forecast",A6=()=>{const t={city:"東京",id:130010},[e,n]=L.useState(t),[r,i]=L.useState("東京都"),[s,o]=L.useState("関東"),[a,u]=L.useState(an.cityList.東京都),[c,f]=L.useState(an.prefList.関東),[p,m]=L.useState([]);L.useEffect(()=>{Ve.get(`${S6}/city/${e.id}`).then(T=>{m(T.data.forecasts)})},[e]);const w=T=>{n(a.filter(_=>`${_.id}`===T.target.value)[0])},E=T=>{i(T.target.value),u(an.cityList[T.target.value]),n(an.cityList[T.target.value][0])},C=T=>{o(T.target.value),f(an.prefList[T.target.value]),i(an.prefList[T.target.value][0]);const _=an.prefList[T.target.value][0];u(an.cityList[_]),n(an.cityList[_][0])};return U.jsxs("div",{className:"weather__content",children:[U.jsxs("h1",{children:["天気予報","(β)"]}),U.jsxs("div",{children:["地方:",U.jsx("select",{onChange:C,value:s,children:an.regionList.map(T=>U.jsx("option",{value:T,children:T},T))})]}),U.jsxs("div",{children:["都道府県:",U.jsx("select",{onChange:E,value:r,children:c.map(T=>U.jsx("option",{value:T,children:T},T))})]}),U.jsxs("div",{children:["都市:",U.jsx("select",{onChange:w,value:e.id,children:a.map(T=>U.jsx("option",{value:T.id,children:T.city},T.id))})]}),U.jsx("div",{className:"weather__forecast",children:p.map(T=>U.jsxs("div",{className:"weather__block",children:[U.jsx("div",{children:U.jsx("h3",{children:`${T.dateLabel}(${T.date})`})}),U.jsxs("div",{className:"weather__telop",children:["天気：",T.telop]}),U.jsxs("div",{children:["降水確率",U.jsxs("table",{className:"weather__chanceOfRain",children:[U.jsx("thead",{children:U.jsxs("tr",{children:[U.jsx("th",{scope:"col",children:"0-6時"}),U.jsx("th",{scope:"col",children:"6-12時"}),U.jsx("th",{scope:"col",children:"12-18時"}),U.jsx("th",{scope:"col",children:"18-24時"})]})}),U.jsx("tbody",{children:U.jsxs("tr",{children:[U.jsx("td",{children:T.chanceOfRain.T00_06}),U.jsx("td",{children:T.chanceOfRain.T06_12}),U.jsx("td",{children:T.chanceOfRain.T12_18}),U.jsx("td",{children:T.chanceOfRain.T18_24})]})})]})]})]},T.date))}),U.jsxs("div",{children:["天気予報API:",U.jsx("a",{href:"https://weather.tsukumijima.net/",children:"https://weather.tsukumijima.net/"})]})]})},R6="/homepage";function C6(){return U.jsxs(Hk,{basename:R6,children:[U.jsx(Ax,{}),U.jsx("div",{className:"page-content",children:U.jsxs(Ek,{children:[U.jsx(ql,{path:"/",element:U.jsx(Cx,{})}),U.jsx(ql,{path:"/board",element:U.jsx(KF,{})}),U.jsx(ql,{path:"/weather",element:U.jsx(A6,{})})]})}),U.jsx(Rx,{})]})}d1(document.getElementById("root")).render(U.jsx(L.StrictMode,{children:U.jsx(C6,{})}));
