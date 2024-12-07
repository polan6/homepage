(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function r1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var i1={exports:{}},ic={},s1={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ia=Symbol.for("react.element"),iR=Symbol.for("react.portal"),sR=Symbol.for("react.fragment"),oR=Symbol.for("react.strict_mode"),aR=Symbol.for("react.profiler"),lR=Symbol.for("react.provider"),uR=Symbol.for("react.context"),cR=Symbol.for("react.forward_ref"),hR=Symbol.for("react.suspense"),dR=Symbol.for("react.memo"),fR=Symbol.for("react.lazy"),Ry=Symbol.iterator;function pR(t){return t===null||typeof t!="object"?null:(t=Ry&&t[Ry]||t["@@iterator"],typeof t=="function"?t:null)}var o1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},a1=Object.assign,l1={};function Ns(t,e,n){this.props=t,this.context=e,this.refs=l1,this.updater=n||o1}Ns.prototype.isReactComponent={};Ns.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ns.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function u1(){}u1.prototype=Ns.prototype;function cp(t,e,n){this.props=t,this.context=e,this.refs=l1,this.updater=n||o1}var hp=cp.prototype=new u1;hp.constructor=cp;a1(hp,Ns.prototype);hp.isPureReactComponent=!0;var Cy=Array.isArray,c1=Object.prototype.hasOwnProperty,dp={current:null},h1={key:!0,ref:!0,__self:!0,__source:!0};function d1(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)c1.call(e,r)&&!h1.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ia,type:t,key:s,ref:o,props:i,_owner:dp.current}}function mR(t,e){return{$$typeof:Ia,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function fp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ia}function gR(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Py=/\/+/g;function Eh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?gR(""+t.key):e.toString(36)}function Dl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ia:case iR:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Eh(o,0):r,Cy(i)?(n="",t!=null&&(n=t.replace(Py,"$&/")+"/"),Dl(i,e,n,"",function(c){return c})):i!=null&&(fp(i)&&(i=mR(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Py,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Cy(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Eh(s,a);o+=Dl(s,e,n,u,i)}else if(u=pR(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Eh(s,a++),o+=Dl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ll(t,e,n){if(t==null)return t;var r=[],i=0;return Dl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function yR(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pt={current:null},Ll={transition:null},vR={ReactCurrentDispatcher:pt,ReactCurrentBatchConfig:Ll,ReactCurrentOwner:dp};function f1(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:ll,forEach:function(t,e,n){ll(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ll(t,function(){e++}),e},toArray:function(t){return ll(t,function(e){return e})||[]},only:function(t){if(!fp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=Ns;ie.Fragment=sR;ie.Profiler=aR;ie.PureComponent=cp;ie.StrictMode=oR;ie.Suspense=hR;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vR;ie.act=f1;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=a1({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=dp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)c1.call(e,u)&&!h1.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Ia,type:t.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:uR,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:lR,_context:t},t.Consumer=t};ie.createElement=d1;ie.createFactory=function(t){var e=d1.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:cR,render:t}};ie.isValidElement=fp;ie.lazy=function(t){return{$$typeof:fR,_payload:{_status:-1,_result:t},_init:yR}};ie.memo=function(t,e){return{$$typeof:dR,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=Ll.transition;Ll.transition={};try{t()}finally{Ll.transition=e}};ie.unstable_act=f1;ie.useCallback=function(t,e){return pt.current.useCallback(t,e)};ie.useContext=function(t){return pt.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return pt.current.useDeferredValue(t)};ie.useEffect=function(t,e){return pt.current.useEffect(t,e)};ie.useId=function(){return pt.current.useId()};ie.useImperativeHandle=function(t,e,n){return pt.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return pt.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return pt.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return pt.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return pt.current.useReducer(t,e,n)};ie.useRef=function(t){return pt.current.useRef(t)};ie.useState=function(t){return pt.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return pt.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return pt.current.useTransition()};ie.version="18.3.1";s1.exports=ie;var M=s1.exports;const p1=r1(M);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _R=M,wR=Symbol.for("react.element"),ER=Symbol.for("react.fragment"),TR=Object.prototype.hasOwnProperty,IR=_R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,SR={key:!0,ref:!0,__self:!0,__source:!0};function m1(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)TR.call(e,r)&&!SR.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:wR,type:t,key:s,ref:o,props:i,_owner:IR.current}}ic.Fragment=ER;ic.jsx=m1;ic.jsxs=m1;i1.exports=ic;var x=i1.exports,g1={exports:{}},Ot={},y1={exports:{}},v1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(q,J){var ne=q.length;q.push(J);e:for(;0<ne;){var Te=ne-1>>>1,fe=q[Te];if(0<i(fe,J))q[Te]=J,q[ne]=fe,ne=Te;else break e}}function n(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var J=q[0],ne=q.pop();if(ne!==J){q[0]=ne;e:for(var Te=0,fe=q.length,xe=fe>>>1;Te<xe;){var Sn=2*(Te+1)-1,An=q[Sn],Rn=Sn+1,Cn=q[Rn];if(0>i(An,ne))Rn<fe&&0>i(Cn,An)?(q[Te]=Cn,q[Rn]=ne,Te=Rn):(q[Te]=An,q[Sn]=ne,Te=Sn);else if(Rn<fe&&0>i(Cn,ne))q[Te]=Cn,q[Rn]=ne,Te=Rn;else break e}}return J}function i(q,J){var ne=q.sortIndex-J.sortIndex;return ne!==0?ne:q.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],d=1,p=null,m=3,w=!1,E=!1,T=!1,R=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(q){for(var J=n(c);J!==null;){if(J.callback===null)r(c);else if(J.startTime<=q)r(c),J.sortIndex=J.expirationTime,e(u,J);else break;J=n(c)}}function O(q){if(T=!1,I(q),!E)if(n(u)!==null)E=!0,Gs(V);else{var J=n(c);J!==null&&In(O,J.startTime-q)}}function V(q,J){E=!1,T&&(T=!1,_(v),v=-1),w=!0;var ne=m;try{for(I(J),p=n(u);p!==null&&(!(p.expirationTime>J)||q&&!k());){var Te=p.callback;if(typeof Te=="function"){p.callback=null,m=p.priorityLevel;var fe=Te(p.expirationTime<=J);J=t.unstable_now(),typeof fe=="function"?p.callback=fe:p===n(u)&&r(u),I(J)}else r(u);p=n(u)}if(p!==null)var xe=!0;else{var Sn=n(c);Sn!==null&&In(O,Sn.startTime-J),xe=!1}return xe}finally{p=null,m=ne,w=!1}}var j=!1,A=null,v=-1,S=5,C=-1;function k(){return!(t.unstable_now()-C<S)}function N(){if(A!==null){var q=t.unstable_now();C=q;var J=!0;try{J=A(!0,q)}finally{J?P():(j=!1,A=null)}}else j=!1}var P;if(typeof y=="function")P=function(){y(N)};else if(typeof MessageChannel<"u"){var Mt=new MessageChannel,Wr=Mt.port2;Mt.port1.onmessage=N,P=function(){Wr.postMessage(null)}}else P=function(){R(N,0)};function Gs(q){A=q,j||(j=!0,P())}function In(q,J){v=R(function(){q(t.unstable_now())},J)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(q){q.callback=null},t.unstable_continueExecution=function(){E||w||(E=!0,Gs(V))},t.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<q?Math.floor(1e3/q):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(q){switch(m){case 1:case 2:case 3:var J=3;break;default:J=m}var ne=m;m=J;try{return q()}finally{m=ne}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(q,J){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var ne=m;m=q;try{return J()}finally{m=ne}},t.unstable_scheduleCallback=function(q,J,ne){var Te=t.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?Te+ne:Te):ne=Te,q){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=ne+fe,q={id:d++,callback:J,priorityLevel:q,startTime:ne,expirationTime:fe,sortIndex:-1},ne>Te?(q.sortIndex=ne,e(c,q),n(u)===null&&q===n(c)&&(T?(_(v),v=-1):T=!0,In(O,ne-Te))):(q.sortIndex=fe,e(u,q),E||w||(E=!0,Gs(V))),q},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(q){var J=m;return function(){var ne=m;m=J;try{return q.apply(this,arguments)}finally{m=ne}}}})(v1);y1.exports=v1;var AR=y1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var RR=M,Nt=AR;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _1=new Set,Wo={};function Ci(t,e){gs(t,e),gs(t+"Capture",e)}function gs(t,e){for(Wo[t]=e,t=0;t<e.length;t++)_1.add(e[t])}var Bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_d=Object.prototype.hasOwnProperty,CR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ky={},xy={};function PR(t){return _d.call(xy,t)?!0:_d.call(ky,t)?!1:CR.test(t)?xy[t]=!0:(ky[t]=!0,!1)}function kR(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function xR(t,e,n,r){if(e===null||typeof e>"u"||kR(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Qe[t]=new mt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Qe[e]=new mt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Qe[t]=new mt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Qe[t]=new mt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Qe[t]=new mt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Qe[t]=new mt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Qe[t]=new mt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Qe[t]=new mt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Qe[t]=new mt(t,5,!1,t.toLowerCase(),null,!1,!1)});var pp=/[\-:]([a-z])/g;function mp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(pp,mp);Qe[e]=new mt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(pp,mp);Qe[e]=new mt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(pp,mp);Qe[e]=new mt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Qe[t]=new mt(t,1,!1,t.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Qe[t]=new mt(t,1,!1,t.toLowerCase(),null,!0,!0)});function gp(t,e,n,r){var i=Qe.hasOwnProperty(e)?Qe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(xR(e,n,i,r)&&(n=null),r||i===null?PR(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Jn=RR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ul=Symbol.for("react.element"),Hi=Symbol.for("react.portal"),Wi=Symbol.for("react.fragment"),yp=Symbol.for("react.strict_mode"),wd=Symbol.for("react.profiler"),w1=Symbol.for("react.provider"),E1=Symbol.for("react.context"),vp=Symbol.for("react.forward_ref"),Ed=Symbol.for("react.suspense"),Td=Symbol.for("react.suspense_list"),_p=Symbol.for("react.memo"),lr=Symbol.for("react.lazy"),T1=Symbol.for("react.offscreen"),by=Symbol.iterator;function ao(t){return t===null||typeof t!="object"?null:(t=by&&t[by]||t["@@iterator"],typeof t=="function"?t:null)}var Re=Object.assign,Th;function _o(t){if(Th===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Th=e&&e[1]||""}return`
`+Th+t}var Ih=!1;function Sh(t,e){if(!t||Ih)return"";Ih=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{Ih=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?_o(t):""}function bR(t){switch(t.tag){case 5:return _o(t.type);case 16:return _o("Lazy");case 13:return _o("Suspense");case 19:return _o("SuspenseList");case 0:case 2:case 15:return t=Sh(t.type,!1),t;case 11:return t=Sh(t.type.render,!1),t;case 1:return t=Sh(t.type,!0),t;default:return""}}function Id(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Wi:return"Fragment";case Hi:return"Portal";case wd:return"Profiler";case yp:return"StrictMode";case Ed:return"Suspense";case Td:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case E1:return(t.displayName||"Context")+".Consumer";case w1:return(t._context.displayName||"Context")+".Provider";case vp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _p:return e=t.displayName||null,e!==null?e:Id(t.type)||"Memo";case lr:e=t._payload,t=t._init;try{return Id(t(e))}catch{}}return null}function NR(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Id(e);case 8:return e===yp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function xr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function I1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function OR(t){var e=I1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function cl(t){t._valueTracker||(t._valueTracker=OR(t))}function S1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=I1(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function uu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Sd(t,e){var n=e.checked;return Re({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ny(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=xr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function A1(t,e){e=e.checked,e!=null&&gp(t,"checked",e,!1)}function Ad(t,e){A1(t,e);var n=xr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Rd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Rd(t,e.type,xr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Oy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Rd(t,e,n){(e!=="number"||uu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var wo=Array.isArray;function ss(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+xr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Cd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return Re({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Dy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(wo(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:xr(n)}}function R1(t,e){var n=xr(e.value),r=xr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ly(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function C1(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?C1(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var hl,P1=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(hl=hl||document.createElement("div"),hl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=hl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Go(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ko={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},DR=["Webkit","ms","Moz","O"];Object.keys(ko).forEach(function(t){DR.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ko[e]=ko[t]})});function k1(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ko.hasOwnProperty(t)&&ko[t]?(""+e).trim():e+"px"}function x1(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=k1(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var LR=Re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kd(t,e){if(e){if(LR[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function xd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bd=null;function wp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Nd=null,os=null,as=null;function My(t){if(t=Ra(t)){if(typeof Nd!="function")throw Error(B(280));var e=t.stateNode;e&&(e=uc(e),Nd(t.stateNode,t.type,e))}}function b1(t){os?as?as.push(t):as=[t]:os=t}function N1(){if(os){var t=os,e=as;if(as=os=null,My(t),e)for(t=0;t<e.length;t++)My(e[t])}}function O1(t,e){return t(e)}function D1(){}var Ah=!1;function L1(t,e,n){if(Ah)return t(e,n);Ah=!0;try{return O1(t,e,n)}finally{Ah=!1,(os!==null||as!==null)&&(D1(),N1())}}function Ko(t,e){var n=t.stateNode;if(n===null)return null;var r=uc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var Od=!1;if(Bn)try{var lo={};Object.defineProperty(lo,"passive",{get:function(){Od=!0}}),window.addEventListener("test",lo,lo),window.removeEventListener("test",lo,lo)}catch{Od=!1}function MR(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var xo=!1,cu=null,hu=!1,Dd=null,VR={onError:function(t){xo=!0,cu=t}};function FR(t,e,n,r,i,s,o,a,u){xo=!1,cu=null,MR.apply(VR,arguments)}function UR(t,e,n,r,i,s,o,a,u){if(FR.apply(this,arguments),xo){if(xo){var c=cu;xo=!1,cu=null}else throw Error(B(198));hu||(hu=!0,Dd=c)}}function Pi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function M1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Vy(t){if(Pi(t)!==t)throw Error(B(188))}function jR(t){var e=t.alternate;if(!e){if(e=Pi(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Vy(i),t;if(s===r)return Vy(i),e;s=s.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function V1(t){return t=jR(t),t!==null?F1(t):null}function F1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=F1(t);if(e!==null)return e;t=t.sibling}return null}var U1=Nt.unstable_scheduleCallback,Fy=Nt.unstable_cancelCallback,zR=Nt.unstable_shouldYield,BR=Nt.unstable_requestPaint,Ne=Nt.unstable_now,$R=Nt.unstable_getCurrentPriorityLevel,Ep=Nt.unstable_ImmediatePriority,j1=Nt.unstable_UserBlockingPriority,du=Nt.unstable_NormalPriority,qR=Nt.unstable_LowPriority,z1=Nt.unstable_IdlePriority,sc=null,fn=null;function HR(t){if(fn&&typeof fn.onCommitFiberRoot=="function")try{fn.onCommitFiberRoot(sc,t,void 0,(t.current.flags&128)===128)}catch{}}var Jt=Math.clz32?Math.clz32:KR,WR=Math.log,GR=Math.LN2;function KR(t){return t>>>=0,t===0?32:31-(WR(t)/GR|0)|0}var dl=64,fl=4194304;function Eo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function fu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Eo(a):(s&=o,s!==0&&(r=Eo(s)))}else o=n&~i,o!==0?r=Eo(o):s!==0&&(r=Eo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Jt(e),i=1<<n,r|=t[n],e&=~i;return r}function QR(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function YR(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Jt(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=QR(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function Ld(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function B1(){var t=dl;return dl<<=1,!(dl&4194240)&&(dl=64),t}function Rh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Sa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Jt(e),t[e]=n}function XR(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Jt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Tp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Jt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var de=0;function $1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var q1,Ip,H1,W1,G1,Md=!1,pl=[],_r=null,wr=null,Er=null,Qo=new Map,Yo=new Map,hr=[],JR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Uy(t,e){switch(t){case"focusin":case"focusout":_r=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":Qo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yo.delete(e.pointerId)}}function uo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ra(e),e!==null&&Ip(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function ZR(t,e,n,r,i){switch(e){case"focusin":return _r=uo(_r,t,e,n,r,i),!0;case"dragenter":return wr=uo(wr,t,e,n,r,i),!0;case"mouseover":return Er=uo(Er,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Qo.set(s,uo(Qo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Yo.set(s,uo(Yo.get(s)||null,t,e,n,r,i)),!0}return!1}function K1(t){var e=ei(t.target);if(e!==null){var n=Pi(e);if(n!==null){if(e=n.tag,e===13){if(e=M1(n),e!==null){t.blockedOn=e,G1(t.priority,function(){H1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ml(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Vd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);bd=r,n.target.dispatchEvent(r),bd=null}else return e=Ra(n),e!==null&&Ip(e),t.blockedOn=n,!1;e.shift()}return!0}function jy(t,e,n){Ml(t)&&n.delete(e)}function eC(){Md=!1,_r!==null&&Ml(_r)&&(_r=null),wr!==null&&Ml(wr)&&(wr=null),Er!==null&&Ml(Er)&&(Er=null),Qo.forEach(jy),Yo.forEach(jy)}function co(t,e){t.blockedOn===e&&(t.blockedOn=null,Md||(Md=!0,Nt.unstable_scheduleCallback(Nt.unstable_NormalPriority,eC)))}function Xo(t){function e(i){return co(i,t)}if(0<pl.length){co(pl[0],t);for(var n=1;n<pl.length;n++){var r=pl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(_r!==null&&co(_r,t),wr!==null&&co(wr,t),Er!==null&&co(Er,t),Qo.forEach(e),Yo.forEach(e),n=0;n<hr.length;n++)r=hr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<hr.length&&(n=hr[0],n.blockedOn===null);)K1(n),n.blockedOn===null&&hr.shift()}var ls=Jn.ReactCurrentBatchConfig,pu=!0;function tC(t,e,n,r){var i=de,s=ls.transition;ls.transition=null;try{de=1,Sp(t,e,n,r)}finally{de=i,ls.transition=s}}function nC(t,e,n,r){var i=de,s=ls.transition;ls.transition=null;try{de=4,Sp(t,e,n,r)}finally{de=i,ls.transition=s}}function Sp(t,e,n,r){if(pu){var i=Vd(t,e,n,r);if(i===null)Mh(t,e,r,mu,n),Uy(t,r);else if(ZR(i,t,e,n,r))r.stopPropagation();else if(Uy(t,r),e&4&&-1<JR.indexOf(t)){for(;i!==null;){var s=Ra(i);if(s!==null&&q1(s),s=Vd(t,e,n,r),s===null&&Mh(t,e,r,mu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Mh(t,e,r,null,n)}}var mu=null;function Vd(t,e,n,r){if(mu=null,t=wp(r),t=ei(t),t!==null)if(e=Pi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=M1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return mu=t,null}function Q1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($R()){case Ep:return 1;case j1:return 4;case du:case qR:return 16;case z1:return 536870912;default:return 16}default:return 16}}var gr=null,Ap=null,Vl=null;function Y1(){if(Vl)return Vl;var t,e=Ap,n=e.length,r,i="value"in gr?gr.value:gr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Vl=i.slice(t,1<r?1-r:void 0)}function Fl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ml(){return!0}function zy(){return!1}function Dt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ml:zy,this.isPropagationStopped=zy,this}return Re(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ml)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ml)},persist:function(){},isPersistent:ml}),e}var Os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rp=Dt(Os),Aa=Re({},Os,{view:0,detail:0}),rC=Dt(Aa),Ch,Ph,ho,oc=Re({},Aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ho&&(ho&&t.type==="mousemove"?(Ch=t.screenX-ho.screenX,Ph=t.screenY-ho.screenY):Ph=Ch=0,ho=t),Ch)},movementY:function(t){return"movementY"in t?t.movementY:Ph}}),By=Dt(oc),iC=Re({},oc,{dataTransfer:0}),sC=Dt(iC),oC=Re({},Aa,{relatedTarget:0}),kh=Dt(oC),aC=Re({},Os,{animationName:0,elapsedTime:0,pseudoElement:0}),lC=Dt(aC),uC=Re({},Os,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),cC=Dt(uC),hC=Re({},Os,{data:0}),$y=Dt(hC),dC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=pC[t])?!!e[t]:!1}function Cp(){return mC}var gC=Re({},Aa,{key:function(t){if(t.key){var e=dC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Fl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?fC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cp,charCode:function(t){return t.type==="keypress"?Fl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),yC=Dt(gC),vC=Re({},oc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qy=Dt(vC),_C=Re({},Aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cp}),wC=Dt(_C),EC=Re({},Os,{propertyName:0,elapsedTime:0,pseudoElement:0}),TC=Dt(EC),IC=Re({},oc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),SC=Dt(IC),AC=[9,13,27,32],Pp=Bn&&"CompositionEvent"in window,bo=null;Bn&&"documentMode"in document&&(bo=document.documentMode);var RC=Bn&&"TextEvent"in window&&!bo,X1=Bn&&(!Pp||bo&&8<bo&&11>=bo),Hy=" ",Wy=!1;function J1(t,e){switch(t){case"keyup":return AC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Z1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Gi=!1;function CC(t,e){switch(t){case"compositionend":return Z1(e);case"keypress":return e.which!==32?null:(Wy=!0,Hy);case"textInput":return t=e.data,t===Hy&&Wy?null:t;default:return null}}function PC(t,e){if(Gi)return t==="compositionend"||!Pp&&J1(t,e)?(t=Y1(),Vl=Ap=gr=null,Gi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return X1&&e.locale!=="ko"?null:e.data;default:return null}}var kC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!kC[t.type]:e==="textarea"}function ew(t,e,n,r){b1(r),e=gu(e,"onChange"),0<e.length&&(n=new Rp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var No=null,Jo=null;function xC(t){hw(t,0)}function ac(t){var e=Yi(t);if(S1(e))return t}function bC(t,e){if(t==="change")return e}var tw=!1;if(Bn){var xh;if(Bn){var bh="oninput"in document;if(!bh){var Ky=document.createElement("div");Ky.setAttribute("oninput","return;"),bh=typeof Ky.oninput=="function"}xh=bh}else xh=!1;tw=xh&&(!document.documentMode||9<document.documentMode)}function Qy(){No&&(No.detachEvent("onpropertychange",nw),Jo=No=null)}function nw(t){if(t.propertyName==="value"&&ac(Jo)){var e=[];ew(e,Jo,t,wp(t)),L1(xC,e)}}function NC(t,e,n){t==="focusin"?(Qy(),No=e,Jo=n,No.attachEvent("onpropertychange",nw)):t==="focusout"&&Qy()}function OC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ac(Jo)}function DC(t,e){if(t==="click")return ac(e)}function LC(t,e){if(t==="input"||t==="change")return ac(e)}function MC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var tn=typeof Object.is=="function"?Object.is:MC;function Zo(t,e){if(tn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!_d.call(e,i)||!tn(t[i],e[i]))return!1}return!0}function Yy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Xy(t,e){var n=Yy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Yy(n)}}function rw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?rw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function iw(){for(var t=window,e=uu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=uu(t.document)}return e}function kp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function VC(t){var e=iw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&rw(n.ownerDocument.documentElement,n)){if(r!==null&&kp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Xy(n,s);var o=Xy(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var FC=Bn&&"documentMode"in document&&11>=document.documentMode,Ki=null,Fd=null,Oo=null,Ud=!1;function Jy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ud||Ki==null||Ki!==uu(r)||(r=Ki,"selectionStart"in r&&kp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Oo&&Zo(Oo,r)||(Oo=r,r=gu(Fd,"onSelect"),0<r.length&&(e=new Rp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ki)))}function gl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Qi={animationend:gl("Animation","AnimationEnd"),animationiteration:gl("Animation","AnimationIteration"),animationstart:gl("Animation","AnimationStart"),transitionend:gl("Transition","TransitionEnd")},Nh={},sw={};Bn&&(sw=document.createElement("div").style,"AnimationEvent"in window||(delete Qi.animationend.animation,delete Qi.animationiteration.animation,delete Qi.animationstart.animation),"TransitionEvent"in window||delete Qi.transitionend.transition);function lc(t){if(Nh[t])return Nh[t];if(!Qi[t])return t;var e=Qi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in sw)return Nh[t]=e[n];return t}var ow=lc("animationend"),aw=lc("animationiteration"),lw=lc("animationstart"),uw=lc("transitionend"),cw=new Map,Zy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(t,e){cw.set(t,e),Ci(e,[t])}for(var Oh=0;Oh<Zy.length;Oh++){var Dh=Zy[Oh],UC=Dh.toLowerCase(),jC=Dh[0].toUpperCase()+Dh.slice(1);zr(UC,"on"+jC)}zr(ow,"onAnimationEnd");zr(aw,"onAnimationIteration");zr(lw,"onAnimationStart");zr("dblclick","onDoubleClick");zr("focusin","onFocus");zr("focusout","onBlur");zr(uw,"onTransitionEnd");gs("onMouseEnter",["mouseout","mouseover"]);gs("onMouseLeave",["mouseout","mouseover"]);gs("onPointerEnter",["pointerout","pointerover"]);gs("onPointerLeave",["pointerout","pointerover"]);Ci("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ci("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ci("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ci("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ci("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ci("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zC=new Set("cancel close invalid load scroll toggle".split(" ").concat(To));function e0(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,UR(r,e,void 0,t),t.currentTarget=null}function hw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;e0(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;e0(i,a,c),s=u}}}if(hu)throw t=Dd,hu=!1,Dd=null,t}function ye(t,e){var n=e[qd];n===void 0&&(n=e[qd]=new Set);var r=t+"__bubble";n.has(r)||(dw(e,t,2,!1),n.add(r))}function Lh(t,e,n){var r=0;e&&(r|=4),dw(n,t,r,e)}var yl="_reactListening"+Math.random().toString(36).slice(2);function ea(t){if(!t[yl]){t[yl]=!0,_1.forEach(function(n){n!=="selectionchange"&&(zC.has(n)||Lh(n,!1,t),Lh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[yl]||(e[yl]=!0,Lh("selectionchange",!1,e))}}function dw(t,e,n,r){switch(Q1(e)){case 1:var i=tC;break;case 4:i=nC;break;default:i=Sp}n=i.bind(null,e,n,t),i=void 0,!Od||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Mh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ei(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}L1(function(){var c=s,d=wp(n),p=[];e:{var m=cw.get(t);if(m!==void 0){var w=Rp,E=t;switch(t){case"keypress":if(Fl(n)===0)break e;case"keydown":case"keyup":w=yC;break;case"focusin":E="focus",w=kh;break;case"focusout":E="blur",w=kh;break;case"beforeblur":case"afterblur":w=kh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=By;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=sC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=wC;break;case ow:case aw:case lw:w=lC;break;case uw:w=TC;break;case"scroll":w=rC;break;case"wheel":w=SC;break;case"copy":case"cut":case"paste":w=cC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=qy}var T=(e&4)!==0,R=!T&&t==="scroll",_=T?m!==null?m+"Capture":null:m;T=[];for(var y=c,I;y!==null;){I=y;var O=I.stateNode;if(I.tag===5&&O!==null&&(I=O,_!==null&&(O=Ko(y,_),O!=null&&T.push(ta(y,O,I)))),R)break;y=y.return}0<T.length&&(m=new w(m,E,null,n,d),p.push({event:m,listeners:T}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",m&&n!==bd&&(E=n.relatedTarget||n.fromElement)&&(ei(E)||E[$n]))break e;if((w||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,w?(E=n.relatedTarget||n.toElement,w=c,E=E?ei(E):null,E!==null&&(R=Pi(E),E!==R||E.tag!==5&&E.tag!==6)&&(E=null)):(w=null,E=c),w!==E)){if(T=By,O="onMouseLeave",_="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(T=qy,O="onPointerLeave",_="onPointerEnter",y="pointer"),R=w==null?m:Yi(w),I=E==null?m:Yi(E),m=new T(O,y+"leave",w,n,d),m.target=R,m.relatedTarget=I,O=null,ei(d)===c&&(T=new T(_,y+"enter",E,n,d),T.target=I,T.relatedTarget=R,O=T),R=O,w&&E)t:{for(T=w,_=E,y=0,I=T;I;I=ji(I))y++;for(I=0,O=_;O;O=ji(O))I++;for(;0<y-I;)T=ji(T),y--;for(;0<I-y;)_=ji(_),I--;for(;y--;){if(T===_||_!==null&&T===_.alternate)break t;T=ji(T),_=ji(_)}T=null}else T=null;w!==null&&t0(p,m,w,T,!1),E!==null&&R!==null&&t0(p,R,E,T,!0)}}e:{if(m=c?Yi(c):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var V=bC;else if(Gy(m))if(tw)V=LC;else{V=OC;var j=NC}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(V=DC);if(V&&(V=V(t,c))){ew(p,V,n,d);break e}j&&j(t,m,c),t==="focusout"&&(j=m._wrapperState)&&j.controlled&&m.type==="number"&&Rd(m,"number",m.value)}switch(j=c?Yi(c):window,t){case"focusin":(Gy(j)||j.contentEditable==="true")&&(Ki=j,Fd=c,Oo=null);break;case"focusout":Oo=Fd=Ki=null;break;case"mousedown":Ud=!0;break;case"contextmenu":case"mouseup":case"dragend":Ud=!1,Jy(p,n,d);break;case"selectionchange":if(FC)break;case"keydown":case"keyup":Jy(p,n,d)}var A;if(Pp)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Gi?J1(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(X1&&n.locale!=="ko"&&(Gi||v!=="onCompositionStart"?v==="onCompositionEnd"&&Gi&&(A=Y1()):(gr=d,Ap="value"in gr?gr.value:gr.textContent,Gi=!0)),j=gu(c,v),0<j.length&&(v=new $y(v,t,null,n,d),p.push({event:v,listeners:j}),A?v.data=A:(A=Z1(n),A!==null&&(v.data=A)))),(A=RC?CC(t,n):PC(t,n))&&(c=gu(c,"onBeforeInput"),0<c.length&&(d=new $y("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=A))}hw(p,e)})}function ta(t,e,n){return{instance:t,listener:e,currentTarget:n}}function gu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ko(t,n),s!=null&&r.unshift(ta(t,s,i)),s=Ko(t,e),s!=null&&r.push(ta(t,s,i))),t=t.return}return r}function ji(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function t0(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=Ko(n,s),u!=null&&o.unshift(ta(n,u,a))):i||(u=Ko(n,s),u!=null&&o.push(ta(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var BC=/\r\n?/g,$C=/\u0000|\uFFFD/g;function n0(t){return(typeof t=="string"?t:""+t).replace(BC,`
`).replace($C,"")}function vl(t,e,n){if(e=n0(e),n0(t)!==e&&n)throw Error(B(425))}function yu(){}var jd=null,zd=null;function Bd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $d=typeof setTimeout=="function"?setTimeout:void 0,qC=typeof clearTimeout=="function"?clearTimeout:void 0,r0=typeof Promise=="function"?Promise:void 0,HC=typeof queueMicrotask=="function"?queueMicrotask:typeof r0<"u"?function(t){return r0.resolve(null).then(t).catch(WC)}:$d;function WC(t){setTimeout(function(){throw t})}function Vh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Xo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Xo(e)}function Tr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function i0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ds=Math.random().toString(36).slice(2),cn="__reactFiber$"+Ds,na="__reactProps$"+Ds,$n="__reactContainer$"+Ds,qd="__reactEvents$"+Ds,GC="__reactListeners$"+Ds,KC="__reactHandles$"+Ds;function ei(t){var e=t[cn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[$n]||n[cn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=i0(t);t!==null;){if(n=t[cn])return n;t=i0(t)}return e}t=n,n=t.parentNode}return null}function Ra(t){return t=t[cn]||t[$n],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Yi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function uc(t){return t[na]||null}var Hd=[],Xi=-1;function Br(t){return{current:t}}function _e(t){0>Xi||(t.current=Hd[Xi],Hd[Xi]=null,Xi--)}function me(t,e){Xi++,Hd[Xi]=t.current,t.current=e}var br={},ot=Br(br),_t=Br(!1),pi=br;function ys(t,e){var n=t.type.contextTypes;if(!n)return br;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function wt(t){return t=t.childContextTypes,t!=null}function vu(){_e(_t),_e(ot)}function s0(t,e,n){if(ot.current!==br)throw Error(B(168));me(ot,e),me(_t,n)}function fw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,NR(t)||"Unknown",i));return Re({},n,r)}function _u(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||br,pi=ot.current,me(ot,t),me(_t,_t.current),!0}function o0(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=fw(t,e,pi),r.__reactInternalMemoizedMergedChildContext=t,_e(_t),_e(ot),me(ot,t)):_e(_t),me(_t,n)}var bn=null,cc=!1,Fh=!1;function pw(t){bn===null?bn=[t]:bn.push(t)}function QC(t){cc=!0,pw(t)}function $r(){if(!Fh&&bn!==null){Fh=!0;var t=0,e=de;try{var n=bn;for(de=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}bn=null,cc=!1}catch(i){throw bn!==null&&(bn=bn.slice(t+1)),U1(Ep,$r),i}finally{de=e,Fh=!1}}return null}var Ji=[],Zi=0,wu=null,Eu=0,Vt=[],Ft=0,mi=null,On=1,Dn="";function Xr(t,e){Ji[Zi++]=Eu,Ji[Zi++]=wu,wu=t,Eu=e}function mw(t,e,n){Vt[Ft++]=On,Vt[Ft++]=Dn,Vt[Ft++]=mi,mi=t;var r=On;t=Dn;var i=32-Jt(r)-1;r&=~(1<<i),n+=1;var s=32-Jt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,On=1<<32-Jt(e)+i|n<<i|r,Dn=s+t}else On=1<<s|n<<i|r,Dn=t}function xp(t){t.return!==null&&(Xr(t,1),mw(t,1,0))}function bp(t){for(;t===wu;)wu=Ji[--Zi],Ji[Zi]=null,Eu=Ji[--Zi],Ji[Zi]=null;for(;t===mi;)mi=Vt[--Ft],Vt[Ft]=null,Dn=Vt[--Ft],Vt[Ft]=null,On=Vt[--Ft],Vt[Ft]=null}var Pt=null,Ct=null,Ee=!1,Yt=null;function gw(t,e){var n=jt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function a0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pt=t,Ct=Tr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pt=t,Ct=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=mi!==null?{id:On,overflow:Dn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=jt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pt=t,Ct=null,!0):!1;default:return!1}}function Wd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Gd(t){if(Ee){var e=Ct;if(e){var n=e;if(!a0(t,e)){if(Wd(t))throw Error(B(418));e=Tr(n.nextSibling);var r=Pt;e&&a0(t,e)?gw(r,n):(t.flags=t.flags&-4097|2,Ee=!1,Pt=t)}}else{if(Wd(t))throw Error(B(418));t.flags=t.flags&-4097|2,Ee=!1,Pt=t}}}function l0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pt=t}function _l(t){if(t!==Pt)return!1;if(!Ee)return l0(t),Ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Bd(t.type,t.memoizedProps)),e&&(e=Ct)){if(Wd(t))throw yw(),Error(B(418));for(;e;)gw(t,e),e=Tr(e.nextSibling)}if(l0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ct=Tr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ct=null}}else Ct=Pt?Tr(t.stateNode.nextSibling):null;return!0}function yw(){for(var t=Ct;t;)t=Tr(t.nextSibling)}function vs(){Ct=Pt=null,Ee=!1}function Np(t){Yt===null?Yt=[t]:Yt.push(t)}var YC=Jn.ReactCurrentBatchConfig;function fo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function wl(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function u0(t){var e=t._init;return e(t._payload)}function vw(t){function e(_,y){if(t){var I=_.deletions;I===null?(_.deletions=[y],_.flags|=16):I.push(y)}}function n(_,y){if(!t)return null;for(;y!==null;)e(_,y),y=y.sibling;return null}function r(_,y){for(_=new Map;y!==null;)y.key!==null?_.set(y.key,y):_.set(y.index,y),y=y.sibling;return _}function i(_,y){return _=Rr(_,y),_.index=0,_.sibling=null,_}function s(_,y,I){return _.index=I,t?(I=_.alternate,I!==null?(I=I.index,I<y?(_.flags|=2,y):I):(_.flags|=2,y)):(_.flags|=1048576,y)}function o(_){return t&&_.alternate===null&&(_.flags|=2),_}function a(_,y,I,O){return y===null||y.tag!==6?(y=Hh(I,_.mode,O),y.return=_,y):(y=i(y,I),y.return=_,y)}function u(_,y,I,O){var V=I.type;return V===Wi?d(_,y,I.props.children,O,I.key):y!==null&&(y.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===lr&&u0(V)===y.type)?(O=i(y,I.props),O.ref=fo(_,y,I),O.return=_,O):(O=Hl(I.type,I.key,I.props,null,_.mode,O),O.ref=fo(_,y,I),O.return=_,O)}function c(_,y,I,O){return y===null||y.tag!==4||y.stateNode.containerInfo!==I.containerInfo||y.stateNode.implementation!==I.implementation?(y=Wh(I,_.mode,O),y.return=_,y):(y=i(y,I.children||[]),y.return=_,y)}function d(_,y,I,O,V){return y===null||y.tag!==7?(y=ci(I,_.mode,O,V),y.return=_,y):(y=i(y,I),y.return=_,y)}function p(_,y,I){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Hh(""+y,_.mode,I),y.return=_,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ul:return I=Hl(y.type,y.key,y.props,null,_.mode,I),I.ref=fo(_,null,y),I.return=_,I;case Hi:return y=Wh(y,_.mode,I),y.return=_,y;case lr:var O=y._init;return p(_,O(y._payload),I)}if(wo(y)||ao(y))return y=ci(y,_.mode,I,null),y.return=_,y;wl(_,y)}return null}function m(_,y,I,O){var V=y!==null?y.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return V!==null?null:a(_,y,""+I,O);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case ul:return I.key===V?u(_,y,I,O):null;case Hi:return I.key===V?c(_,y,I,O):null;case lr:return V=I._init,m(_,y,V(I._payload),O)}if(wo(I)||ao(I))return V!==null?null:d(_,y,I,O,null);wl(_,I)}return null}function w(_,y,I,O,V){if(typeof O=="string"&&O!==""||typeof O=="number")return _=_.get(I)||null,a(y,_,""+O,V);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case ul:return _=_.get(O.key===null?I:O.key)||null,u(y,_,O,V);case Hi:return _=_.get(O.key===null?I:O.key)||null,c(y,_,O,V);case lr:var j=O._init;return w(_,y,I,j(O._payload),V)}if(wo(O)||ao(O))return _=_.get(I)||null,d(y,_,O,V,null);wl(y,O)}return null}function E(_,y,I,O){for(var V=null,j=null,A=y,v=y=0,S=null;A!==null&&v<I.length;v++){A.index>v?(S=A,A=null):S=A.sibling;var C=m(_,A,I[v],O);if(C===null){A===null&&(A=S);break}t&&A&&C.alternate===null&&e(_,A),y=s(C,y,v),j===null?V=C:j.sibling=C,j=C,A=S}if(v===I.length)return n(_,A),Ee&&Xr(_,v),V;if(A===null){for(;v<I.length;v++)A=p(_,I[v],O),A!==null&&(y=s(A,y,v),j===null?V=A:j.sibling=A,j=A);return Ee&&Xr(_,v),V}for(A=r(_,A);v<I.length;v++)S=w(A,_,v,I[v],O),S!==null&&(t&&S.alternate!==null&&A.delete(S.key===null?v:S.key),y=s(S,y,v),j===null?V=S:j.sibling=S,j=S);return t&&A.forEach(function(k){return e(_,k)}),Ee&&Xr(_,v),V}function T(_,y,I,O){var V=ao(I);if(typeof V!="function")throw Error(B(150));if(I=V.call(I),I==null)throw Error(B(151));for(var j=V=null,A=y,v=y=0,S=null,C=I.next();A!==null&&!C.done;v++,C=I.next()){A.index>v?(S=A,A=null):S=A.sibling;var k=m(_,A,C.value,O);if(k===null){A===null&&(A=S);break}t&&A&&k.alternate===null&&e(_,A),y=s(k,y,v),j===null?V=k:j.sibling=k,j=k,A=S}if(C.done)return n(_,A),Ee&&Xr(_,v),V;if(A===null){for(;!C.done;v++,C=I.next())C=p(_,C.value,O),C!==null&&(y=s(C,y,v),j===null?V=C:j.sibling=C,j=C);return Ee&&Xr(_,v),V}for(A=r(_,A);!C.done;v++,C=I.next())C=w(A,_,v,C.value,O),C!==null&&(t&&C.alternate!==null&&A.delete(C.key===null?v:C.key),y=s(C,y,v),j===null?V=C:j.sibling=C,j=C);return t&&A.forEach(function(N){return e(_,N)}),Ee&&Xr(_,v),V}function R(_,y,I,O){if(typeof I=="object"&&I!==null&&I.type===Wi&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case ul:e:{for(var V=I.key,j=y;j!==null;){if(j.key===V){if(V=I.type,V===Wi){if(j.tag===7){n(_,j.sibling),y=i(j,I.props.children),y.return=_,_=y;break e}}else if(j.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===lr&&u0(V)===j.type){n(_,j.sibling),y=i(j,I.props),y.ref=fo(_,j,I),y.return=_,_=y;break e}n(_,j);break}else e(_,j);j=j.sibling}I.type===Wi?(y=ci(I.props.children,_.mode,O,I.key),y.return=_,_=y):(O=Hl(I.type,I.key,I.props,null,_.mode,O),O.ref=fo(_,y,I),O.return=_,_=O)}return o(_);case Hi:e:{for(j=I.key;y!==null;){if(y.key===j)if(y.tag===4&&y.stateNode.containerInfo===I.containerInfo&&y.stateNode.implementation===I.implementation){n(_,y.sibling),y=i(y,I.children||[]),y.return=_,_=y;break e}else{n(_,y);break}else e(_,y);y=y.sibling}y=Wh(I,_.mode,O),y.return=_,_=y}return o(_);case lr:return j=I._init,R(_,y,j(I._payload),O)}if(wo(I))return E(_,y,I,O);if(ao(I))return T(_,y,I,O);wl(_,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,y!==null&&y.tag===6?(n(_,y.sibling),y=i(y,I),y.return=_,_=y):(n(_,y),y=Hh(I,_.mode,O),y.return=_,_=y),o(_)):n(_,y)}return R}var _s=vw(!0),_w=vw(!1),Tu=Br(null),Iu=null,es=null,Op=null;function Dp(){Op=es=Iu=null}function Lp(t){var e=Tu.current;_e(Tu),t._currentValue=e}function Kd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function us(t,e){Iu=t,Op=es=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(vt=!0),t.firstContext=null)}function $t(t){var e=t._currentValue;if(Op!==t)if(t={context:t,memoizedValue:e,next:null},es===null){if(Iu===null)throw Error(B(308));es=t,Iu.dependencies={lanes:0,firstContext:t}}else es=es.next=t;return e}var ti=null;function Mp(t){ti===null?ti=[t]:ti.push(t)}function ww(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Mp(e)):(n.next=i.next,i.next=n),e.interleaved=n,qn(t,r)}function qn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ur=!1;function Vp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ew(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Un(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ir(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,qn(t,n)}return i=r.interleaved,i===null?(e.next=e,Mp(r)):(e.next=i.next,i.next=e),r.interleaved=e,qn(t,n)}function Ul(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Tp(t,n)}}function c0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Su(t,e,n,r){var i=t.updateQueue;ur=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,a=s;do{var m=a.lane,w=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var E=t,T=a;switch(m=e,w=n,T.tag){case 1:if(E=T.payload,typeof E=="function"){p=E.call(w,p,m);break e}p=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=T.payload,m=typeof E=="function"?E.call(w,p,m):E,m==null)break e;p=Re({},p,m);break e;case 2:ur=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else w={eventTime:w,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=w,u=p):d=d.next=w,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);yi|=o,t.lanes=o,t.memoizedState=p}}function h0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var Ca={},pn=Br(Ca),ra=Br(Ca),ia=Br(Ca);function ni(t){if(t===Ca)throw Error(B(174));return t}function Fp(t,e){switch(me(ia,e),me(ra,t),me(pn,Ca),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Pd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Pd(e,t)}_e(pn),me(pn,e)}function ws(){_e(pn),_e(ra),_e(ia)}function Tw(t){ni(ia.current);var e=ni(pn.current),n=Pd(e,t.type);e!==n&&(me(ra,t),me(pn,n))}function Up(t){ra.current===t&&(_e(pn),_e(ra))}var Ie=Br(0);function Au(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Uh=[];function jp(){for(var t=0;t<Uh.length;t++)Uh[t]._workInProgressVersionPrimary=null;Uh.length=0}var jl=Jn.ReactCurrentDispatcher,jh=Jn.ReactCurrentBatchConfig,gi=0,Se=null,Ve=null,Be=null,Ru=!1,Do=!1,sa=0,XC=0;function et(){throw Error(B(321))}function zp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!tn(t[n],e[n]))return!1;return!0}function Bp(t,e,n,r,i,s){if(gi=s,Se=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,jl.current=t===null||t.memoizedState===null?tP:nP,t=n(r,i),Do){s=0;do{if(Do=!1,sa=0,25<=s)throw Error(B(301));s+=1,Be=Ve=null,e.updateQueue=null,jl.current=rP,t=n(r,i)}while(Do)}if(jl.current=Cu,e=Ve!==null&&Ve.next!==null,gi=0,Be=Ve=Se=null,Ru=!1,e)throw Error(B(300));return t}function $p(){var t=sa!==0;return sa=0,t}function ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Se.memoizedState=Be=t:Be=Be.next=t,Be}function qt(){if(Ve===null){var t=Se.alternate;t=t!==null?t.memoizedState:null}else t=Ve.next;var e=Be===null?Se.memoizedState:Be.next;if(e!==null)Be=e,Ve=t;else{if(t===null)throw Error(B(310));Ve=t,t={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},Be===null?Se.memoizedState=Be=t:Be=Be.next=t}return Be}function oa(t,e){return typeof e=="function"?e(t):e}function zh(t){var e=qt(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=Ve,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var d=c.lane;if((gi&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=p,o=r):u=u.next=p,Se.lanes|=d,yi|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,tn(r,e.memoizedState)||(vt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Se.lanes|=s,yi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Bh(t){var e=qt(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);tn(s,e.memoizedState)||(vt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Iw(){}function Sw(t,e){var n=Se,r=qt(),i=e(),s=!tn(r.memoizedState,i);if(s&&(r.memoizedState=i,vt=!0),r=r.queue,qp(Cw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,aa(9,Rw.bind(null,n,r,i,e),void 0,null),$e===null)throw Error(B(349));gi&30||Aw(n,e,i)}return i}function Aw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Rw(t,e,n,r){e.value=n,e.getSnapshot=r,Pw(e)&&kw(t)}function Cw(t,e,n){return n(function(){Pw(e)&&kw(t)})}function Pw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!tn(t,n)}catch{return!0}}function kw(t){var e=qn(t,1);e!==null&&Zt(e,t,1,-1)}function d0(t){var e=ln();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:t},e.queue=t,t=t.dispatch=eP.bind(null,Se,t),[e.memoizedState,t]}function aa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function xw(){return qt().memoizedState}function zl(t,e,n,r){var i=ln();Se.flags|=t,i.memoizedState=aa(1|e,n,void 0,r===void 0?null:r)}function hc(t,e,n,r){var i=qt();r=r===void 0?null:r;var s=void 0;if(Ve!==null){var o=Ve.memoizedState;if(s=o.destroy,r!==null&&zp(r,o.deps)){i.memoizedState=aa(e,n,s,r);return}}Se.flags|=t,i.memoizedState=aa(1|e,n,s,r)}function f0(t,e){return zl(8390656,8,t,e)}function qp(t,e){return hc(2048,8,t,e)}function bw(t,e){return hc(4,2,t,e)}function Nw(t,e){return hc(4,4,t,e)}function Ow(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Dw(t,e,n){return n=n!=null?n.concat([t]):null,hc(4,4,Ow.bind(null,e,t),n)}function Hp(){}function Lw(t,e){var n=qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&zp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Mw(t,e){var n=qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&zp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Vw(t,e,n){return gi&21?(tn(n,e)||(n=B1(),Se.lanes|=n,yi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,vt=!0),t.memoizedState=n)}function JC(t,e){var n=de;de=n!==0&&4>n?n:4,t(!0);var r=jh.transition;jh.transition={};try{t(!1),e()}finally{de=n,jh.transition=r}}function Fw(){return qt().memoizedState}function ZC(t,e,n){var r=Ar(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Uw(t))jw(e,n);else if(n=ww(t,e,n,r),n!==null){var i=dt();Zt(n,t,r,i),zw(n,e,r)}}function eP(t,e,n){var r=Ar(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Uw(t))jw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,tn(a,o)){var u=e.interleaved;u===null?(i.next=i,Mp(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=ww(t,e,i,r),n!==null&&(i=dt(),Zt(n,t,r,i),zw(n,e,r))}}function Uw(t){var e=t.alternate;return t===Se||e!==null&&e===Se}function jw(t,e){Do=Ru=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function zw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Tp(t,n)}}var Cu={readContext:$t,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},tP={readContext:$t,useCallback:function(t,e){return ln().memoizedState=[t,e===void 0?null:e],t},useContext:$t,useEffect:f0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,zl(4194308,4,Ow.bind(null,e,t),n)},useLayoutEffect:function(t,e){return zl(4194308,4,t,e)},useInsertionEffect:function(t,e){return zl(4,2,t,e)},useMemo:function(t,e){var n=ln();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ln();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=ZC.bind(null,Se,t),[r.memoizedState,t]},useRef:function(t){var e=ln();return t={current:t},e.memoizedState=t},useState:d0,useDebugValue:Hp,useDeferredValue:function(t){return ln().memoizedState=t},useTransition:function(){var t=d0(!1),e=t[0];return t=JC.bind(null,t[1]),ln().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Se,i=ln();if(Ee){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),$e===null)throw Error(B(349));gi&30||Aw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,f0(Cw.bind(null,r,s,t),[t]),r.flags|=2048,aa(9,Rw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=ln(),e=$e.identifierPrefix;if(Ee){var n=Dn,r=On;n=(r&~(1<<32-Jt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=sa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=XC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},nP={readContext:$t,useCallback:Lw,useContext:$t,useEffect:qp,useImperativeHandle:Dw,useInsertionEffect:bw,useLayoutEffect:Nw,useMemo:Mw,useReducer:zh,useRef:xw,useState:function(){return zh(oa)},useDebugValue:Hp,useDeferredValue:function(t){var e=qt();return Vw(e,Ve.memoizedState,t)},useTransition:function(){var t=zh(oa)[0],e=qt().memoizedState;return[t,e]},useMutableSource:Iw,useSyncExternalStore:Sw,useId:Fw,unstable_isNewReconciler:!1},rP={readContext:$t,useCallback:Lw,useContext:$t,useEffect:qp,useImperativeHandle:Dw,useInsertionEffect:bw,useLayoutEffect:Nw,useMemo:Mw,useReducer:Bh,useRef:xw,useState:function(){return Bh(oa)},useDebugValue:Hp,useDeferredValue:function(t){var e=qt();return Ve===null?e.memoizedState=t:Vw(e,Ve.memoizedState,t)},useTransition:function(){var t=Bh(oa)[0],e=qt().memoizedState;return[t,e]},useMutableSource:Iw,useSyncExternalStore:Sw,useId:Fw,unstable_isNewReconciler:!1};function Kt(t,e){if(t&&t.defaultProps){e=Re({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Qd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Re({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var dc={isMounted:function(t){return(t=t._reactInternals)?Pi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=dt(),i=Ar(t),s=Un(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ir(t,s,i),e!==null&&(Zt(e,t,i,r),Ul(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=dt(),i=Ar(t),s=Un(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ir(t,s,i),e!==null&&(Zt(e,t,i,r),Ul(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=dt(),r=Ar(t),i=Un(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ir(t,i,r),e!==null&&(Zt(e,t,r,n),Ul(e,t,r))}};function p0(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Zo(n,r)||!Zo(i,s):!0}function Bw(t,e,n){var r=!1,i=br,s=e.contextType;return typeof s=="object"&&s!==null?s=$t(s):(i=wt(e)?pi:ot.current,r=e.contextTypes,s=(r=r!=null)?ys(t,i):br),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=dc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function m0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&dc.enqueueReplaceState(e,e.state,null)}function Yd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Vp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=$t(s):(s=wt(e)?pi:ot.current,i.context=ys(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Qd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&dc.enqueueReplaceState(i,i.state,null),Su(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Es(t,e){try{var n="",r=e;do n+=bR(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function $h(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Xd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var iP=typeof WeakMap=="function"?WeakMap:Map;function $w(t,e,n){n=Un(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ku||(ku=!0,lf=r),Xd(t,e)},n}function qw(t,e,n){n=Un(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Xd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Xd(t,e),typeof r!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function g0(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new iP;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=vP.bind(null,t,e,n),e.then(t,t))}function y0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function v0(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Un(-1,1),e.tag=2,Ir(n,e,1))),n.lanes|=1),t)}var sP=Jn.ReactCurrentOwner,vt=!1;function ht(t,e,n,r){e.child=t===null?_w(e,null,n,r):_s(e,t.child,n,r)}function _0(t,e,n,r,i){n=n.render;var s=e.ref;return us(e,i),r=Bp(t,e,n,r,s,i),n=$p(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Hn(t,e,i)):(Ee&&n&&xp(e),e.flags|=1,ht(t,e,r,i),e.child)}function w0(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Zp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Hw(t,e,s,r,i)):(t=Hl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Zo,n(o,r)&&t.ref===e.ref)return Hn(t,e,i)}return e.flags|=1,t=Rr(s,r),t.ref=e.ref,t.return=e,e.child=t}function Hw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Zo(s,r)&&t.ref===e.ref)if(vt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(vt=!0);else return e.lanes=t.lanes,Hn(t,e,i)}return Jd(t,e,n,r,i)}function Ww(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(ns,Rt),Rt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,me(ns,Rt),Rt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,me(ns,Rt),Rt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,me(ns,Rt),Rt|=r;return ht(t,e,i,n),e.child}function Gw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Jd(t,e,n,r,i){var s=wt(n)?pi:ot.current;return s=ys(e,s),us(e,i),n=Bp(t,e,n,r,s,i),r=$p(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Hn(t,e,i)):(Ee&&r&&xp(e),e.flags|=1,ht(t,e,n,i),e.child)}function E0(t,e,n,r,i){if(wt(n)){var s=!0;_u(e)}else s=!1;if(us(e,i),e.stateNode===null)Bl(t,e),Bw(e,n,r),Yd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=$t(c):(c=wt(n)?pi:ot.current,c=ys(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&m0(e,o,r,c),ur=!1;var m=e.memoizedState;o.state=m,Su(e,r,o,i),u=e.memoizedState,a!==r||m!==u||_t.current||ur?(typeof d=="function"&&(Qd(e,n,d,r),u=e.memoizedState),(a=ur||p0(e,n,a,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Ew(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Kt(e.type,a),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=$t(u):(u=wt(n)?pi:ot.current,u=ys(e,u));var w=n.getDerivedStateFromProps;(d=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||m!==u)&&m0(e,o,r,u),ur=!1,m=e.memoizedState,o.state=m,Su(e,r,o,i);var E=e.memoizedState;a!==p||m!==E||_t.current||ur?(typeof w=="function"&&(Qd(e,n,w,r),E=e.memoizedState),(c=ur||p0(e,n,c,r,m,E,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,E,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,E,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=E),o.props=r,o.state=E,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Zd(t,e,n,r,s,i)}function Zd(t,e,n,r,i,s){Gw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&o0(e,n,!1),Hn(t,e,s);r=e.stateNode,sP.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=_s(e,t.child,null,s),e.child=_s(e,null,a,s)):ht(t,e,a,s),e.memoizedState=r.state,i&&o0(e,n,!0),e.child}function Kw(t){var e=t.stateNode;e.pendingContext?s0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&s0(t,e.context,!1),Fp(t,e.containerInfo)}function T0(t,e,n,r,i){return vs(),Np(i),e.flags|=256,ht(t,e,n,r),e.child}var ef={dehydrated:null,treeContext:null,retryLane:0};function tf(t){return{baseLanes:t,cachePool:null,transitions:null}}function Qw(t,e,n){var r=e.pendingProps,i=Ie.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),me(Ie,i&1),t===null)return Gd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=mc(o,r,0,null),t=ci(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=tf(n),e.memoizedState=ef,t):Wp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return oP(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Rr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Rr(a,s):(s=ci(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?tf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ef,r}return s=t.child,t=s.sibling,r=Rr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Wp(t,e){return e=mc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function El(t,e,n,r){return r!==null&&Np(r),_s(e,t.child,null,n),t=Wp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function oP(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=$h(Error(B(422))),El(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=mc({mode:"visible",children:r.children},i,0,null),s=ci(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&_s(e,t.child,null,o),e.child.memoizedState=tf(o),e.memoizedState=ef,s);if(!(e.mode&1))return El(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(B(419)),r=$h(s,r,void 0),El(t,e,o,r)}if(a=(o&t.childLanes)!==0,vt||a){if(r=$e,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,qn(t,i),Zt(r,t,i,-1))}return Jp(),r=$h(Error(B(421))),El(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=_P.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ct=Tr(i.nextSibling),Pt=e,Ee=!0,Yt=null,t!==null&&(Vt[Ft++]=On,Vt[Ft++]=Dn,Vt[Ft++]=mi,On=t.id,Dn=t.overflow,mi=e),e=Wp(e,r.children),e.flags|=4096,e)}function I0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Kd(t.return,e,n)}function qh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Yw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ht(t,e,r.children,n),r=Ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&I0(t,n,e);else if(t.tag===19)I0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(me(Ie,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Au(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),qh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Au(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}qh(e,!0,n,null,s);break;case"together":qh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Bl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Hn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),yi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=Rr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Rr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function aP(t,e,n){switch(e.tag){case 3:Kw(e),vs();break;case 5:Tw(e);break;case 1:wt(e.type)&&_u(e);break;case 4:Fp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;me(Tu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(me(Ie,Ie.current&1),e.flags|=128,null):n&e.child.childLanes?Qw(t,e,n):(me(Ie,Ie.current&1),t=Hn(t,e,n),t!==null?t.sibling:null);me(Ie,Ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Yw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),me(Ie,Ie.current),r)break;return null;case 22:case 23:return e.lanes=0,Ww(t,e,n)}return Hn(t,e,n)}var Xw,nf,Jw,Zw;Xw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};nf=function(){};Jw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ni(pn.current);var s=null;switch(n){case"input":i=Sd(t,i),r=Sd(t,r),s=[];break;case"select":i=Re({},i,{value:void 0}),r=Re({},r,{value:void 0}),s=[];break;case"textarea":i=Cd(t,i),r=Cd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=yu)}kd(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Wo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Wo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ye("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Zw=function(t,e,n,r){n!==r&&(e.flags|=4)};function po(t,e){if(!Ee)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function tt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function lP(t,e,n){var r=e.pendingProps;switch(bp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(e),null;case 1:return wt(e.type)&&vu(),tt(e),null;case 3:return r=e.stateNode,ws(),_e(_t),_e(ot),jp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(_l(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Yt!==null&&(hf(Yt),Yt=null))),nf(t,e),tt(e),null;case 5:Up(e);var i=ni(ia.current);if(n=e.type,t!==null&&e.stateNode!=null)Jw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return tt(e),null}if(t=ni(pn.current),_l(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[cn]=e,r[na]=s,t=(e.mode&1)!==0,n){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(i=0;i<To.length;i++)ye(To[i],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":Ny(r,s),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ye("invalid",r);break;case"textarea":Dy(r,s),ye("invalid",r)}kd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&vl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&vl(r.textContent,a,t),i=["children",""+a]):Wo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ye("scroll",r)}switch(n){case"input":cl(r),Oy(r,s,!0);break;case"textarea":cl(r),Ly(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=yu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=C1(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[cn]=e,t[na]=r,Xw(t,e,!1,!1),e.stateNode=t;e:{switch(o=xd(n,r),n){case"dialog":ye("cancel",t),ye("close",t),i=r;break;case"iframe":case"object":case"embed":ye("load",t),i=r;break;case"video":case"audio":for(i=0;i<To.length;i++)ye(To[i],t);i=r;break;case"source":ye("error",t),i=r;break;case"img":case"image":case"link":ye("error",t),ye("load",t),i=r;break;case"details":ye("toggle",t),i=r;break;case"input":Ny(t,r),i=Sd(t,r),ye("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Re({},r,{value:void 0}),ye("invalid",t);break;case"textarea":Dy(t,r),i=Cd(t,r),ye("invalid",t);break;default:i=r}kd(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?x1(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&P1(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Go(t,u):typeof u=="number"&&Go(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Wo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ye("scroll",t):u!=null&&gp(t,s,u,o))}switch(n){case"input":cl(t),Oy(t,r,!1);break;case"textarea":cl(t),Ly(t);break;case"option":r.value!=null&&t.setAttribute("value",""+xr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ss(t,!!r.multiple,s,!1):r.defaultValue!=null&&ss(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=yu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return tt(e),null;case 6:if(t&&e.stateNode!=null)Zw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=ni(ia.current),ni(pn.current),_l(e)){if(r=e.stateNode,n=e.memoizedProps,r[cn]=e,(s=r.nodeValue!==n)&&(t=Pt,t!==null))switch(t.tag){case 3:vl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&vl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[cn]=e,e.stateNode=r}return tt(e),null;case 13:if(_e(Ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ee&&Ct!==null&&e.mode&1&&!(e.flags&128))yw(),vs(),e.flags|=98560,s=!1;else if(s=_l(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(B(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(B(317));s[cn]=e}else vs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;tt(e),s=!1}else Yt!==null&&(hf(Yt),Yt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ie.current&1?Fe===0&&(Fe=3):Jp())),e.updateQueue!==null&&(e.flags|=4),tt(e),null);case 4:return ws(),nf(t,e),t===null&&ea(e.stateNode.containerInfo),tt(e),null;case 10:return Lp(e.type._context),tt(e),null;case 17:return wt(e.type)&&vu(),tt(e),null;case 19:if(_e(Ie),s=e.memoizedState,s===null)return tt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)po(s,!1);else{if(Fe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Au(t),o!==null){for(e.flags|=128,po(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return me(Ie,Ie.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ne()>Ts&&(e.flags|=128,r=!0,po(s,!1),e.lanes=4194304)}else{if(!r)if(t=Au(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),po(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ee)return tt(e),null}else 2*Ne()-s.renderingStartTime>Ts&&n!==1073741824&&(e.flags|=128,r=!0,po(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ne(),e.sibling=null,n=Ie.current,me(Ie,r?n&1|2:n&1),e):(tt(e),null);case 22:case 23:return Xp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Rt&1073741824&&(tt(e),e.subtreeFlags&6&&(e.flags|=8192)):tt(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function uP(t,e){switch(bp(e),e.tag){case 1:return wt(e.type)&&vu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ws(),_e(_t),_e(ot),jp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Up(e),null;case 13:if(_e(Ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));vs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _e(Ie),null;case 4:return ws(),null;case 10:return Lp(e.type._context),null;case 22:case 23:return Xp(),null;case 24:return null;default:return null}}var Tl=!1,it=!1,cP=typeof WeakSet=="function"?WeakSet:Set,G=null;function ts(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ke(t,e,r)}else n.current=null}function rf(t,e,n){try{n()}catch(r){ke(t,e,r)}}var S0=!1;function hP(t,e){if(jd=pu,t=iw(),kp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,d=0,p=t,m=null;t:for(;;){for(var w;p!==n||i!==0&&p.nodeType!==3||(a=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(w=p.firstChild)!==null;)m=p,p=w;for(;;){if(p===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++d===r&&(u=o),(w=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=w}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(zd={focusedElem:t,selectionRange:n},pu=!1,G=e;G!==null;)if(e=G,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,G=t;else for(;G!==null;){e=G;try{var E=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var T=E.memoizedProps,R=E.memoizedState,_=e.stateNode,y=_.getSnapshotBeforeUpdate(e.elementType===e.type?T:Kt(e.type,T),R);_.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(O){ke(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,G=t;break}G=e.return}return E=S0,S0=!1,E}function Lo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&rf(e,n,s)}i=i.next}while(i!==r)}}function fc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function sf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function eE(t){var e=t.alternate;e!==null&&(t.alternate=null,eE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[cn],delete e[na],delete e[qd],delete e[GC],delete e[KC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function tE(t){return t.tag===5||t.tag===3||t.tag===4}function A0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||tE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function of(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=yu));else if(r!==4&&(t=t.child,t!==null))for(of(t,e,n),t=t.sibling;t!==null;)of(t,e,n),t=t.sibling}function af(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(af(t,e,n),t=t.sibling;t!==null;)af(t,e,n),t=t.sibling}var He=null,Qt=!1;function ir(t,e,n){for(n=n.child;n!==null;)nE(t,e,n),n=n.sibling}function nE(t,e,n){if(fn&&typeof fn.onCommitFiberUnmount=="function")try{fn.onCommitFiberUnmount(sc,n)}catch{}switch(n.tag){case 5:it||ts(n,e);case 6:var r=He,i=Qt;He=null,ir(t,e,n),He=r,Qt=i,He!==null&&(Qt?(t=He,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):He.removeChild(n.stateNode));break;case 18:He!==null&&(Qt?(t=He,n=n.stateNode,t.nodeType===8?Vh(t.parentNode,n):t.nodeType===1&&Vh(t,n),Xo(t)):Vh(He,n.stateNode));break;case 4:r=He,i=Qt,He=n.stateNode.containerInfo,Qt=!0,ir(t,e,n),He=r,Qt=i;break;case 0:case 11:case 14:case 15:if(!it&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&rf(n,e,o),i=i.next}while(i!==r)}ir(t,e,n);break;case 1:if(!it&&(ts(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ke(n,e,a)}ir(t,e,n);break;case 21:ir(t,e,n);break;case 22:n.mode&1?(it=(r=it)||n.memoizedState!==null,ir(t,e,n),it=r):ir(t,e,n);break;default:ir(t,e,n)}}function R0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new cP),e.forEach(function(r){var i=wP.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Wt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:He=a.stateNode,Qt=!1;break e;case 3:He=a.stateNode.containerInfo,Qt=!0;break e;case 4:He=a.stateNode.containerInfo,Qt=!0;break e}a=a.return}if(He===null)throw Error(B(160));nE(s,o,i),He=null,Qt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){ke(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)rE(e,t),e=e.sibling}function rE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Wt(e,t),an(t),r&4){try{Lo(3,t,t.return),fc(3,t)}catch(T){ke(t,t.return,T)}try{Lo(5,t,t.return)}catch(T){ke(t,t.return,T)}}break;case 1:Wt(e,t),an(t),r&512&&n!==null&&ts(n,n.return);break;case 5:if(Wt(e,t),an(t),r&512&&n!==null&&ts(n,n.return),t.flags&32){var i=t.stateNode;try{Go(i,"")}catch(T){ke(t,t.return,T)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&A1(i,s),xd(a,o);var c=xd(a,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?x1(i,p):d==="dangerouslySetInnerHTML"?P1(i,p):d==="children"?Go(i,p):gp(i,d,p,c)}switch(a){case"input":Ad(i,s);break;case"textarea":R1(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?ss(i,!!s.multiple,w,!1):m!==!!s.multiple&&(s.defaultValue!=null?ss(i,!!s.multiple,s.defaultValue,!0):ss(i,!!s.multiple,s.multiple?[]:"",!1))}i[na]=s}catch(T){ke(t,t.return,T)}}break;case 6:if(Wt(e,t),an(t),r&4){if(t.stateNode===null)throw Error(B(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(T){ke(t,t.return,T)}}break;case 3:if(Wt(e,t),an(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xo(e.containerInfo)}catch(T){ke(t,t.return,T)}break;case 4:Wt(e,t),an(t);break;case 13:Wt(e,t),an(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Qp=Ne())),r&4&&R0(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(it=(c=it)||d,Wt(e,t),it=c):Wt(e,t),an(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(G=t,d=t.child;d!==null;){for(p=G=d;G!==null;){switch(m=G,w=m.child,m.tag){case 0:case 11:case 14:case 15:Lo(4,m,m.return);break;case 1:ts(m,m.return);var E=m.stateNode;if(typeof E.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,E.props=e.memoizedProps,E.state=e.memoizedState,E.componentWillUnmount()}catch(T){ke(r,n,T)}}break;case 5:ts(m,m.return);break;case 22:if(m.memoizedState!==null){P0(p);continue}}w!==null?(w.return=m,G=w):P0(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=k1("display",o))}catch(T){ke(t,t.return,T)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(T){ke(t,t.return,T)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Wt(e,t),an(t),r&4&&R0(t);break;case 21:break;default:Wt(e,t),an(t)}}function an(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(tE(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Go(i,""),r.flags&=-33);var s=A0(t);af(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=A0(t);of(t,a,o);break;default:throw Error(B(161))}}catch(u){ke(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function dP(t,e,n){G=t,iE(t)}function iE(t,e,n){for(var r=(t.mode&1)!==0;G!==null;){var i=G,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Tl;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||it;a=Tl;var c=it;if(Tl=o,(it=u)&&!c)for(G=i;G!==null;)o=G,u=o.child,o.tag===22&&o.memoizedState!==null?k0(i):u!==null?(u.return=o,G=u):k0(i);for(;s!==null;)G=s,iE(s),s=s.sibling;G=i,Tl=a,it=c}C0(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,G=s):C0(t)}}function C0(t){for(;G!==null;){var e=G;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:it||fc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!it)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Kt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&h0(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}h0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Xo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}it||e.flags&512&&sf(e)}catch(m){ke(e,e.return,m)}}if(e===t){G=null;break}if(n=e.sibling,n!==null){n.return=e.return,G=n;break}G=e.return}}function P0(t){for(;G!==null;){var e=G;if(e===t){G=null;break}var n=e.sibling;if(n!==null){n.return=e.return,G=n;break}G=e.return}}function k0(t){for(;G!==null;){var e=G;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{fc(4,e)}catch(u){ke(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){ke(e,i,u)}}var s=e.return;try{sf(e)}catch(u){ke(e,s,u)}break;case 5:var o=e.return;try{sf(e)}catch(u){ke(e,o,u)}}}catch(u){ke(e,e.return,u)}if(e===t){G=null;break}var a=e.sibling;if(a!==null){a.return=e.return,G=a;break}G=e.return}}var fP=Math.ceil,Pu=Jn.ReactCurrentDispatcher,Gp=Jn.ReactCurrentOwner,zt=Jn.ReactCurrentBatchConfig,ue=0,$e=null,De=null,Ke=0,Rt=0,ns=Br(0),Fe=0,la=null,yi=0,pc=0,Kp=0,Mo=null,yt=null,Qp=0,Ts=1/0,xn=null,ku=!1,lf=null,Sr=null,Il=!1,yr=null,xu=0,Vo=0,uf=null,$l=-1,ql=0;function dt(){return ue&6?Ne():$l!==-1?$l:$l=Ne()}function Ar(t){return t.mode&1?ue&2&&Ke!==0?Ke&-Ke:YC.transition!==null?(ql===0&&(ql=B1()),ql):(t=de,t!==0||(t=window.event,t=t===void 0?16:Q1(t.type)),t):1}function Zt(t,e,n,r){if(50<Vo)throw Vo=0,uf=null,Error(B(185));Sa(t,n,r),(!(ue&2)||t!==$e)&&(t===$e&&(!(ue&2)&&(pc|=n),Fe===4&&dr(t,Ke)),Et(t,r),n===1&&ue===0&&!(e.mode&1)&&(Ts=Ne()+500,cc&&$r()))}function Et(t,e){var n=t.callbackNode;YR(t,e);var r=fu(t,t===$e?Ke:0);if(r===0)n!==null&&Fy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Fy(n),e===1)t.tag===0?QC(x0.bind(null,t)):pw(x0.bind(null,t)),HC(function(){!(ue&6)&&$r()}),n=null;else{switch($1(r)){case 1:n=Ep;break;case 4:n=j1;break;case 16:n=du;break;case 536870912:n=z1;break;default:n=du}n=dE(n,sE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function sE(t,e){if($l=-1,ql=0,ue&6)throw Error(B(327));var n=t.callbackNode;if(cs()&&t.callbackNode!==n)return null;var r=fu(t,t===$e?Ke:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=bu(t,r);else{e=r;var i=ue;ue|=2;var s=aE();($e!==t||Ke!==e)&&(xn=null,Ts=Ne()+500,ui(t,e));do try{gP();break}catch(a){oE(t,a)}while(!0);Dp(),Pu.current=s,ue=i,De!==null?e=0:($e=null,Ke=0,e=Fe)}if(e!==0){if(e===2&&(i=Ld(t),i!==0&&(r=i,e=cf(t,i))),e===1)throw n=la,ui(t,0),dr(t,r),Et(t,Ne()),n;if(e===6)dr(t,r);else{if(i=t.current.alternate,!(r&30)&&!pP(i)&&(e=bu(t,r),e===2&&(s=Ld(t),s!==0&&(r=s,e=cf(t,s))),e===1))throw n=la,ui(t,0),dr(t,r),Et(t,Ne()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:Jr(t,yt,xn);break;case 3:if(dr(t,r),(r&130023424)===r&&(e=Qp+500-Ne(),10<e)){if(fu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){dt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=$d(Jr.bind(null,t,yt,xn),e);break}Jr(t,yt,xn);break;case 4:if(dr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Jt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*fP(r/1960))-r,10<r){t.timeoutHandle=$d(Jr.bind(null,t,yt,xn),r);break}Jr(t,yt,xn);break;case 5:Jr(t,yt,xn);break;default:throw Error(B(329))}}}return Et(t,Ne()),t.callbackNode===n?sE.bind(null,t):null}function cf(t,e){var n=Mo;return t.current.memoizedState.isDehydrated&&(ui(t,e).flags|=256),t=bu(t,e),t!==2&&(e=yt,yt=n,e!==null&&hf(e)),t}function hf(t){yt===null?yt=t:yt.push.apply(yt,t)}function pP(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!tn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function dr(t,e){for(e&=~Kp,e&=~pc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Jt(e),r=1<<n;t[n]=-1,e&=~r}}function x0(t){if(ue&6)throw Error(B(327));cs();var e=fu(t,0);if(!(e&1))return Et(t,Ne()),null;var n=bu(t,e);if(t.tag!==0&&n===2){var r=Ld(t);r!==0&&(e=r,n=cf(t,r))}if(n===1)throw n=la,ui(t,0),dr(t,e),Et(t,Ne()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Jr(t,yt,xn),Et(t,Ne()),null}function Yp(t,e){var n=ue;ue|=1;try{return t(e)}finally{ue=n,ue===0&&(Ts=Ne()+500,cc&&$r())}}function vi(t){yr!==null&&yr.tag===0&&!(ue&6)&&cs();var e=ue;ue|=1;var n=zt.transition,r=de;try{if(zt.transition=null,de=1,t)return t()}finally{de=r,zt.transition=n,ue=e,!(ue&6)&&$r()}}function Xp(){Rt=ns.current,_e(ns)}function ui(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,qC(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(bp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&vu();break;case 3:ws(),_e(_t),_e(ot),jp();break;case 5:Up(r);break;case 4:ws();break;case 13:_e(Ie);break;case 19:_e(Ie);break;case 10:Lp(r.type._context);break;case 22:case 23:Xp()}n=n.return}if($e=t,De=t=Rr(t.current,null),Ke=Rt=e,Fe=0,la=null,Kp=pc=yi=0,yt=Mo=null,ti!==null){for(e=0;e<ti.length;e++)if(n=ti[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ti=null}return t}function oE(t,e){do{var n=De;try{if(Dp(),jl.current=Cu,Ru){for(var r=Se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ru=!1}if(gi=0,Be=Ve=Se=null,Do=!1,sa=0,Gp.current=null,n===null||n.return===null){Fe=1,la=e,De=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=Ke,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var w=y0(o);if(w!==null){w.flags&=-257,v0(w,o,a,s,e),w.mode&1&&g0(s,c,e),e=w,u=c;var E=e.updateQueue;if(E===null){var T=new Set;T.add(u),e.updateQueue=T}else E.add(u);break e}else{if(!(e&1)){g0(s,c,e),Jp();break e}u=Error(B(426))}}else if(Ee&&a.mode&1){var R=y0(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),v0(R,o,a,s,e),Np(Es(u,a));break e}}s=u=Es(u,a),Fe!==4&&(Fe=2),Mo===null?Mo=[s]:Mo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var _=$w(s,u,e);c0(s,_);break e;case 1:a=u;var y=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(Sr===null||!Sr.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=qw(s,a,e);c0(s,O);break e}}s=s.return}while(s!==null)}uE(n)}catch(V){e=V,De===n&&n!==null&&(De=n=n.return);continue}break}while(!0)}function aE(){var t=Pu.current;return Pu.current=Cu,t===null?Cu:t}function Jp(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),$e===null||!(yi&268435455)&&!(pc&268435455)||dr($e,Ke)}function bu(t,e){var n=ue;ue|=2;var r=aE();($e!==t||Ke!==e)&&(xn=null,ui(t,e));do try{mP();break}catch(i){oE(t,i)}while(!0);if(Dp(),ue=n,Pu.current=r,De!==null)throw Error(B(261));return $e=null,Ke=0,Fe}function mP(){for(;De!==null;)lE(De)}function gP(){for(;De!==null&&!zR();)lE(De)}function lE(t){var e=hE(t.alternate,t,Rt);t.memoizedProps=t.pendingProps,e===null?uE(t):De=e,Gp.current=null}function uE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=uP(n,e),n!==null){n.flags&=32767,De=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Fe=6,De=null;return}}else if(n=lP(n,e,Rt),n!==null){De=n;return}if(e=e.sibling,e!==null){De=e;return}De=e=t}while(e!==null);Fe===0&&(Fe=5)}function Jr(t,e,n){var r=de,i=zt.transition;try{zt.transition=null,de=1,yP(t,e,n,r)}finally{zt.transition=i,de=r}return null}function yP(t,e,n,r){do cs();while(yr!==null);if(ue&6)throw Error(B(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(XR(t,s),t===$e&&(De=$e=null,Ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Il||(Il=!0,dE(du,function(){return cs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=zt.transition,zt.transition=null;var o=de;de=1;var a=ue;ue|=4,Gp.current=null,hP(t,n),rE(n,t),VC(zd),pu=!!jd,zd=jd=null,t.current=n,dP(n),BR(),ue=a,de=o,zt.transition=s}else t.current=n;if(Il&&(Il=!1,yr=t,xu=i),s=t.pendingLanes,s===0&&(Sr=null),HR(n.stateNode),Et(t,Ne()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ku)throw ku=!1,t=lf,lf=null,t;return xu&1&&t.tag!==0&&cs(),s=t.pendingLanes,s&1?t===uf?Vo++:(Vo=0,uf=t):Vo=0,$r(),null}function cs(){if(yr!==null){var t=$1(xu),e=zt.transition,n=de;try{if(zt.transition=null,de=16>t?16:t,yr===null)var r=!1;else{if(t=yr,yr=null,xu=0,ue&6)throw Error(B(331));var i=ue;for(ue|=4,G=t.current;G!==null;){var s=G,o=s.child;if(G.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(G=c;G!==null;){var d=G;switch(d.tag){case 0:case 11:case 15:Lo(8,d,s)}var p=d.child;if(p!==null)p.return=d,G=p;else for(;G!==null;){d=G;var m=d.sibling,w=d.return;if(eE(d),d===c){G=null;break}if(m!==null){m.return=w,G=m;break}G=w}}}var E=s.alternate;if(E!==null){var T=E.child;if(T!==null){E.child=null;do{var R=T.sibling;T.sibling=null,T=R}while(T!==null)}}G=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,G=o;else e:for(;G!==null;){if(s=G,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Lo(9,s,s.return)}var _=s.sibling;if(_!==null){_.return=s.return,G=_;break e}G=s.return}}var y=t.current;for(G=y;G!==null;){o=G;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,G=I;else e:for(o=y;G!==null;){if(a=G,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:fc(9,a)}}catch(V){ke(a,a.return,V)}if(a===o){G=null;break e}var O=a.sibling;if(O!==null){O.return=a.return,G=O;break e}G=a.return}}if(ue=i,$r(),fn&&typeof fn.onPostCommitFiberRoot=="function")try{fn.onPostCommitFiberRoot(sc,t)}catch{}r=!0}return r}finally{de=n,zt.transition=e}}return!1}function b0(t,e,n){e=Es(n,e),e=$w(t,e,1),t=Ir(t,e,1),e=dt(),t!==null&&(Sa(t,1,e),Et(t,e))}function ke(t,e,n){if(t.tag===3)b0(t,t,n);else for(;e!==null;){if(e.tag===3){b0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Sr===null||!Sr.has(r))){t=Es(n,t),t=qw(e,t,1),e=Ir(e,t,1),t=dt(),e!==null&&(Sa(e,1,t),Et(e,t));break}}e=e.return}}function vP(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=dt(),t.pingedLanes|=t.suspendedLanes&n,$e===t&&(Ke&n)===n&&(Fe===4||Fe===3&&(Ke&130023424)===Ke&&500>Ne()-Qp?ui(t,0):Kp|=n),Et(t,e)}function cE(t,e){e===0&&(t.mode&1?(e=fl,fl<<=1,!(fl&130023424)&&(fl=4194304)):e=1);var n=dt();t=qn(t,e),t!==null&&(Sa(t,e,n),Et(t,n))}function _P(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),cE(t,n)}function wP(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),cE(t,n)}var hE;hE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||_t.current)vt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return vt=!1,aP(t,e,n);vt=!!(t.flags&131072)}else vt=!1,Ee&&e.flags&1048576&&mw(e,Eu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Bl(t,e),t=e.pendingProps;var i=ys(e,ot.current);us(e,n),i=Bp(null,e,r,t,i,n);var s=$p();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,wt(r)?(s=!0,_u(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vp(e),i.updater=dc,e.stateNode=i,i._reactInternals=e,Yd(e,r,t,n),e=Zd(null,e,r,!0,s,n)):(e.tag=0,Ee&&s&&xp(e),ht(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Bl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=TP(r),t=Kt(r,t),i){case 0:e=Jd(null,e,r,t,n);break e;case 1:e=E0(null,e,r,t,n);break e;case 11:e=_0(null,e,r,t,n);break e;case 14:e=w0(null,e,r,Kt(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),Jd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),E0(t,e,r,i,n);case 3:e:{if(Kw(e),t===null)throw Error(B(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Ew(t,e),Su(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Es(Error(B(423)),e),e=T0(t,e,r,n,i);break e}else if(r!==i){i=Es(Error(B(424)),e),e=T0(t,e,r,n,i);break e}else for(Ct=Tr(e.stateNode.containerInfo.firstChild),Pt=e,Ee=!0,Yt=null,n=_w(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vs(),r===i){e=Hn(t,e,n);break e}ht(t,e,r,n)}e=e.child}return e;case 5:return Tw(e),t===null&&Gd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Bd(r,i)?o=null:s!==null&&Bd(r,s)&&(e.flags|=32),Gw(t,e),ht(t,e,o,n),e.child;case 6:return t===null&&Gd(e),null;case 13:return Qw(t,e,n);case 4:return Fp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=_s(e,null,r,n):ht(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),_0(t,e,r,i,n);case 7:return ht(t,e,e.pendingProps,n),e.child;case 8:return ht(t,e,e.pendingProps.children,n),e.child;case 12:return ht(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,me(Tu,r._currentValue),r._currentValue=o,s!==null)if(tn(s.value,o)){if(s.children===i.children&&!_t.current){e=Hn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Un(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Kd(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(B(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Kd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ht(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,us(e,n),i=$t(i),r=r(i),e.flags|=1,ht(t,e,r,n),e.child;case 14:return r=e.type,i=Kt(r,e.pendingProps),i=Kt(r.type,i),w0(t,e,r,i,n);case 15:return Hw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kt(r,i),Bl(t,e),e.tag=1,wt(r)?(t=!0,_u(e)):t=!1,us(e,n),Bw(e,r,i),Yd(e,r,i,n),Zd(null,e,r,!0,t,n);case 19:return Yw(t,e,n);case 22:return Ww(t,e,n)}throw Error(B(156,e.tag))};function dE(t,e){return U1(t,e)}function EP(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(t,e,n,r){return new EP(t,e,n,r)}function Zp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function TP(t){if(typeof t=="function")return Zp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===vp)return 11;if(t===_p)return 14}return 2}function Rr(t,e){var n=t.alternate;return n===null?(n=jt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Hl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Zp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Wi:return ci(n.children,i,s,e);case yp:o=8,i|=8;break;case wd:return t=jt(12,n,e,i|2),t.elementType=wd,t.lanes=s,t;case Ed:return t=jt(13,n,e,i),t.elementType=Ed,t.lanes=s,t;case Td:return t=jt(19,n,e,i),t.elementType=Td,t.lanes=s,t;case T1:return mc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case w1:o=10;break e;case E1:o=9;break e;case vp:o=11;break e;case _p:o=14;break e;case lr:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=jt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ci(t,e,n,r){return t=jt(7,t,r,e),t.lanes=n,t}function mc(t,e,n,r){return t=jt(22,t,r,e),t.elementType=T1,t.lanes=n,t.stateNode={isHidden:!1},t}function Hh(t,e,n){return t=jt(6,t,null,e),t.lanes=n,t}function Wh(t,e,n){return e=jt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function IP(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rh(0),this.expirationTimes=Rh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function em(t,e,n,r,i,s,o,a,u){return t=new IP(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=jt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vp(s),t}function SP(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function fE(t){if(!t)return br;t=t._reactInternals;e:{if(Pi(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(wt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(wt(n))return fw(t,n,e)}return e}function pE(t,e,n,r,i,s,o,a,u){return t=em(n,r,!0,t,i,s,o,a,u),t.context=fE(null),n=t.current,r=dt(),i=Ar(n),s=Un(r,i),s.callback=e??null,Ir(n,s,i),t.current.lanes=i,Sa(t,i,r),Et(t,r),t}function gc(t,e,n,r){var i=e.current,s=dt(),o=Ar(i);return n=fE(n),e.context===null?e.context=n:e.pendingContext=n,e=Un(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ir(i,e,o),t!==null&&(Zt(t,i,o,s),Ul(t,i,o)),o}function Nu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function N0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function tm(t,e){N0(t,e),(t=t.alternate)&&N0(t,e)}function AP(){return null}var mE=typeof reportError=="function"?reportError:function(t){console.error(t)};function nm(t){this._internalRoot=t}yc.prototype.render=nm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));gc(t,e,null,null)};yc.prototype.unmount=nm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;vi(function(){gc(null,t,null,null)}),e[$n]=null}};function yc(t){this._internalRoot=t}yc.prototype.unstable_scheduleHydration=function(t){if(t){var e=W1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<hr.length&&e!==0&&e<hr[n].priority;n++);hr.splice(n,0,t),n===0&&K1(t)}};function rm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function vc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function O0(){}function RP(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Nu(o);s.call(c)}}var o=pE(e,r,t,0,null,!1,!1,"",O0);return t._reactRootContainer=o,t[$n]=o.current,ea(t.nodeType===8?t.parentNode:t),vi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Nu(u);a.call(c)}}var u=em(t,0,!1,null,null,!1,!1,"",O0);return t._reactRootContainer=u,t[$n]=u.current,ea(t.nodeType===8?t.parentNode:t),vi(function(){gc(e,u,n,r)}),u}function _c(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=Nu(o);a.call(u)}}gc(e,o,t,i)}else o=RP(n,e,t,i,r);return Nu(o)}q1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Eo(e.pendingLanes);n!==0&&(Tp(e,n|1),Et(e,Ne()),!(ue&6)&&(Ts=Ne()+500,$r()))}break;case 13:vi(function(){var r=qn(t,1);if(r!==null){var i=dt();Zt(r,t,1,i)}}),tm(t,1)}};Ip=function(t){if(t.tag===13){var e=qn(t,134217728);if(e!==null){var n=dt();Zt(e,t,134217728,n)}tm(t,134217728)}};H1=function(t){if(t.tag===13){var e=Ar(t),n=qn(t,e);if(n!==null){var r=dt();Zt(n,t,e,r)}tm(t,e)}};W1=function(){return de};G1=function(t,e){var n=de;try{return de=t,e()}finally{de=n}};Nd=function(t,e,n){switch(e){case"input":if(Ad(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=uc(r);if(!i)throw Error(B(90));S1(r),Ad(r,i)}}}break;case"textarea":R1(t,n);break;case"select":e=n.value,e!=null&&ss(t,!!n.multiple,e,!1)}};O1=Yp;D1=vi;var CP={usingClientEntryPoint:!1,Events:[Ra,Yi,uc,b1,N1,Yp]},mo={findFiberByHostInstance:ei,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},PP={bundleType:mo.bundleType,version:mo.version,rendererPackageName:mo.rendererPackageName,rendererConfig:mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=V1(t),t===null?null:t.stateNode},findFiberByHostInstance:mo.findFiberByHostInstance||AP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sl.isDisabled&&Sl.supportsFiber)try{sc=Sl.inject(PP),fn=Sl}catch{}}Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=CP;Ot.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rm(e))throw Error(B(200));return SP(t,e,null,n)};Ot.createRoot=function(t,e){if(!rm(t))throw Error(B(299));var n=!1,r="",i=mE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=em(t,1,!1,null,null,n,!1,r,i),t[$n]=e.current,ea(t.nodeType===8?t.parentNode:t),new nm(e)};Ot.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=V1(e),t=t===null?null:t.stateNode,t};Ot.flushSync=function(t){return vi(t)};Ot.hydrate=function(t,e,n){if(!vc(e))throw Error(B(200));return _c(null,t,e,!0,n)};Ot.hydrateRoot=function(t,e,n){if(!rm(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=mE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=pE(e,null,t,1,n??null,i,!1,s,o),t[$n]=e.current,ea(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new yc(e)};Ot.render=function(t,e,n){if(!vc(e))throw Error(B(200));return _c(null,t,e,!1,n)};Ot.unmountComponentAtNode=function(t){if(!vc(t))throw Error(B(40));return t._reactRootContainer?(vi(function(){_c(null,null,t,!1,function(){t._reactRootContainer=null,t[$n]=null})}),!0):!1};Ot.unstable_batchedUpdates=Yp;Ot.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!vc(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return _c(t,e,n,!1,r)};Ot.version="18.3.1-next-f1338f8080-20240426";function gE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gE)}catch(t){console.error(t)}}gE(),g1.exports=Ot;var kP=g1.exports,yE,D0=kP;yE=D0.createRoot,D0.hydrateRoot;var im={};Object.defineProperty(im,"__esModule",{value:!0});im.parse=MP;im.serialize=VP;const xP=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,bP=/^[\u0021-\u003A\u003C-\u007E]*$/,NP=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,OP=/^[\u0020-\u003A\u003D-\u007E]*$/,DP=Object.prototype.toString,LP=(()=>{const t=function(){};return t.prototype=Object.create(null),t})();function MP(t,e){const n=new LP,r=t.length;if(r<2)return n;const i=(e==null?void 0:e.decode)||FP;let s=0;do{const o=t.indexOf("=",s);if(o===-1)break;const a=t.indexOf(";",s),u=a===-1?r:a;if(o>u){s=t.lastIndexOf(";",o-1)+1;continue}const c=L0(t,s,o),d=M0(t,o,c),p=t.slice(c,d);if(n[p]===void 0){let m=L0(t,o+1,u),w=M0(t,u,m);const E=i(t.slice(m,w));n[p]=E}s=u+1}while(s<r);return n}function L0(t,e,n){do{const r=t.charCodeAt(e);if(r!==32&&r!==9)return e}while(++e<n);return n}function M0(t,e,n){for(;e>n;){const r=t.charCodeAt(--e);if(r!==32&&r!==9)return e+1}return n}function VP(t,e,n){const r=(n==null?void 0:n.encode)||encodeURIComponent;if(!xP.test(t))throw new TypeError(`argument name is invalid: ${t}`);const i=r(e);if(!bP.test(i))throw new TypeError(`argument val is invalid: ${e}`);let s=t+"="+i;if(!n)return s;if(n.maxAge!==void 0){if(!Number.isInteger(n.maxAge))throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);s+="; Max-Age="+n.maxAge}if(n.domain){if(!NP.test(n.domain))throw new TypeError(`option domain is invalid: ${n.domain}`);s+="; Domain="+n.domain}if(n.path){if(!OP.test(n.path))throw new TypeError(`option path is invalid: ${n.path}`);s+="; Path="+n.path}if(n.expires){if(!UP(n.expires)||!Number.isFinite(n.expires.valueOf()))throw new TypeError(`option expires is invalid: ${n.expires}`);s+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(s+="; HttpOnly"),n.secure&&(s+="; Secure"),n.partitioned&&(s+="; Partitioned"),n.priority)switch(typeof n.priority=="string"?n.priority.toLowerCase():void 0){case"low":s+="; Priority=Low";break;case"medium":s+="; Priority=Medium";break;case"high":s+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${n.priority}`)}if(n.sameSite)switch(typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite){case!0:case"strict":s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"none":s+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${n.sameSite}`)}return s}function FP(t){if(t.indexOf("%")===-1)return t;try{return decodeURIComponent(t)}catch{return t}}function UP(t){return DP.call(t)==="[object Date]"}/**
 * react-router v7.0.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var V0="popstate";function jP(t={}){function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return df("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ua(i)}return BP(e,n,null,t)}function Ae(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function qr(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function zP(){return Math.random().toString(36).substring(2,10)}function F0(t,e){return{usr:t.state,key:t.key,idx:e}}function df(t,e,n=null,r){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?Ls(e):e,state:n,key:e&&e.key||r||zP()}}function ua({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Ls(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substring(r),t=t.substring(0,r)),t&&(e.pathname=t)}return e}function BP(t,e,n,r={}){let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a="POP",u=null,c=d();c==null&&(c=0,o.replaceState({...o.state,idx:c},""));function d(){return(o.state||{idx:null}).idx}function p(){a="POP";let R=d(),_=R==null?null:R-c;c=R,u&&u({action:a,location:T.location,delta:_})}function m(R,_){a="PUSH";let y=df(T.location,R,_);c=d()+1;let I=F0(y,c),O=T.createHref(y);try{o.pushState(I,"",O)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;i.location.assign(O)}s&&u&&u({action:a,location:T.location,delta:1})}function w(R,_){a="REPLACE";let y=df(T.location,R,_);c=d();let I=F0(y,c),O=T.createHref(y);o.replaceState(I,"",O),s&&u&&u({action:a,location:T.location,delta:0})}function E(R){let _=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof R=="string"?R:ua(R);return y=y.replace(/ $/,"%20"),Ae(_,`No window.location.(origin|href) available to create URL for href: ${y}`),new URL(y,_)}let T={get action(){return a},get location(){return t(i,o)},listen(R){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(V0,p),u=R,()=>{i.removeEventListener(V0,p),u=null}},createHref(R){return e(i,R)},createURL:E,encodeLocation(R){let _=E(R);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:m,replace:w,go(R){return o.go(R)}};return T}function vE(t,e,n="/"){return $P(t,e,n,!1)}function $P(t,e,n,r){let i=typeof e=="string"?Ls(e):e,s=Nr(i.pathname||"/",n);if(s==null)return null;let o=_E(t);qP(o);let a=null;for(let u=0;a==null&&u<o.length;++u){let c=tk(s);a=ZP(o[u],c,r)}return a}function _E(t,e=[],n=[],r=""){let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Ae(u.relativePath.startsWith(r),`Absolute route path "${u.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),u.relativePath=u.relativePath.slice(r.length));let c=jn([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(Ae(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${c}".`),_E(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:XP(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of wE(s.path))i(s,o,u)}),e}function wE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=wE(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function qP(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:JP(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var HP=/^:[\w-]+$/,WP=3,GP=2,KP=1,QP=10,YP=-2,U0=t=>t==="*";function XP(t,e){let n=t.split("/"),r=n.length;return n.some(U0)&&(r+=YP),e&&(r+=GP),n.filter(i=>!U0(i)).reduce((i,s)=>i+(HP.test(s)?WP:s===""?KP:QP),r)}function JP(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function ZP(t,e,n=!1){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",p=Ou({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!p&&c&&n&&!r[r.length-1].route.index&&(p=Ou({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:jn([s,p.pathname]),pathnameBase:sk(jn([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=jn([s,p.pathnameBase]))}return o}function Ou(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=ek(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,{paramName:d,isOptional:p},m)=>{if(d==="*"){let E=a[m]||"";o=s.slice(0,s.length-E.length).replace(/(.)\/+$/,"$1")}const w=a[m];return p&&!w?c[d]=void 0:c[d]=(w||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function ek(t,e=!1,n=!0){qr(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function tk(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return qr(!1,`The URL path "${t}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function Nr(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function nk(t,e="/"){let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ls(t):t;return{pathname:n?n.startsWith("/")?n:rk(n,e):e,search:ok(r),hash:ak(i)}}function rk(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Gh(t,e,n,r){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function ik(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function EE(t){let e=ik(t);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function TE(t,e,n,r=!1){let i;typeof t=="string"?i=Ls(t):(i={...t},Ae(!i.pathname||!i.pathname.includes("?"),Gh("?","pathname","search",i)),Ae(!i.pathname||!i.pathname.includes("#"),Gh("#","pathname","hash",i)),Ae(!i.search||!i.search.includes("#"),Gh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}a=p>=0?e[p]:"/"}let u=nk(i,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}var jn=t=>t.join("/").replace(/\/\/+/g,"/"),sk=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),ok=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,ak=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function lk(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var IE=["POST","PUT","PATCH","DELETE"];new Set(IE);var uk=["GET",...IE];new Set(uk);var Ms=M.createContext(null);Ms.displayName="DataRouter";var wc=M.createContext(null);wc.displayName="DataRouterState";var SE=M.createContext({isTransitioning:!1});SE.displayName="ViewTransition";var ck=M.createContext(new Map);ck.displayName="Fetchers";var hk=M.createContext(null);hk.displayName="Await";var Tn=M.createContext(null);Tn.displayName="Navigation";var Pa=M.createContext(null);Pa.displayName="Location";var Zn=M.createContext({outlet:null,matches:[],isDataRoute:!1});Zn.displayName="Route";var sm=M.createContext(null);sm.displayName="RouteError";function dk(t,{relative:e}={}){Ae(ka(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=M.useContext(Tn),{hash:i,pathname:s,search:o}=xa(t,{relative:e}),a=s;return n!=="/"&&(a=s==="/"?n:jn([n,s])),r.createHref({pathname:a,search:o,hash:i})}function ka(){return M.useContext(Pa)!=null}function ki(){return Ae(ka(),"useLocation() may be used only in the context of a <Router> component."),M.useContext(Pa).location}var AE="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function RE(t){M.useContext(Tn).static||M.useLayoutEffect(t)}function fk(){let{isDataRoute:t}=M.useContext(Zn);return t?Rk():pk()}function pk(){Ae(ka(),"useNavigate() may be used only in the context of a <Router> component.");let t=M.useContext(Ms),{basename:e,navigator:n}=M.useContext(Tn),{matches:r}=M.useContext(Zn),{pathname:i}=ki(),s=JSON.stringify(EE(r)),o=M.useRef(!1);return RE(()=>{o.current=!0}),M.useCallback((u,c={})=>{if(qr(o.current,AE),!o.current)return;if(typeof u=="number"){n.go(u);return}let d=TE(u,JSON.parse(s),i,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:jn([e,d.pathname])),(c.replace?n.replace:n.push)(d,c.state,c)},[e,n,s,i,t])}M.createContext(null);function xa(t,{relative:e}={}){let{matches:n}=M.useContext(Zn),{pathname:r}=ki(),i=JSON.stringify(EE(n));return M.useMemo(()=>TE(t,JSON.parse(i),r,e==="path"),[t,i,r,e])}function mk(t,e){return CE(t,e)}function CE(t,e,n,r){var T;Ae(ka(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=M.useContext(Tn),{matches:s}=M.useContext(Zn),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=ki(),d;if(e){let R=typeof e=="string"?Ls(e):e;Ae(u==="/"||((T=R.pathname)==null?void 0:T.startsWith(u)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${R.pathname}" was given in the \`location\` prop.`),d=R}else d=c;let p=d.pathname||"/",m=p;if(u!=="/"){let R=u.replace(/^\//,"").split("/");m="/"+p.replace(/^\//,"").split("/").slice(R.length).join("/")}let w=vE(t,{pathname:m}),E=wk(w&&w.map(R=>Object.assign({},R,{params:Object.assign({},a,R.params),pathname:jn([u,i.encodeLocation?i.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?u:jn([u,i.encodeLocation?i.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),s,n,r);return e&&E?M.createElement(Pa.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...d},navigationType:"POP"}},E):E}function gk(){let t=Ak(),e=lk(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},e),n?M.createElement("pre",{style:i},n):null,null)}var yk=M.createElement(gk,null),vk=class extends M.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?M.createElement(Zn.Provider,{value:this.props.routeContext},M.createElement(sm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function _k({routeContext:t,match:e,children:n}){let r=M.useContext(Ms);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),M.createElement(Zn.Provider,{value:t},n)}function wk(t,e=[],n=null,r=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let i=t,s=n==null?void 0:n.errors;if(s!=null){let u=i.findIndex(c=>c.route.id&&(s==null?void 0:s[c.route.id])!==void 0);Ae(u>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),i=i.slice(0,Math.min(i.length,u+1))}let o=!1,a=-1;if(n)for(let u=0;u<i.length;u++){let c=i[u];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(a=u),c.route.id){let{loaderData:d,errors:p}=n,m=c.route.loader&&!d.hasOwnProperty(c.route.id)&&(!p||p[c.route.id]===void 0);if(c.route.lazy||m){o=!0,a>=0?i=i.slice(0,a+1):i=[i[0]];break}}}return i.reduceRight((u,c,d)=>{let p,m=!1,w=null,E=null;n&&(p=s&&c.route.id?s[c.route.id]:void 0,w=c.route.errorElement||yk,o&&(a<0&&d===0?(Ck("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),m=!0,E=null):a===d&&(m=!0,E=c.route.hydrateFallbackElement||null)));let T=e.concat(i.slice(0,d+1)),R=()=>{let _;return p?_=w:m?_=E:c.route.Component?_=M.createElement(c.route.Component,null):c.route.element?_=c.route.element:_=u,M.createElement(_k,{match:c,routeContext:{outlet:u,matches:T,isDataRoute:n!=null},children:_})};return n&&(c.route.ErrorBoundary||c.route.errorElement||d===0)?M.createElement(vk,{location:n.location,revalidation:n.revalidation,component:w,error:p,children:R(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):R()},null)}function om(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ek(t){let e=M.useContext(Ms);return Ae(e,om(t)),e}function Tk(t){let e=M.useContext(wc);return Ae(e,om(t)),e}function Ik(t){let e=M.useContext(Zn);return Ae(e,om(t)),e}function am(t){let e=Ik(t),n=e.matches[e.matches.length-1];return Ae(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function Sk(){return am("useRouteId")}function Ak(){var r;let t=M.useContext(sm),e=Tk("useRouteError"),n=am("useRouteError");return t!==void 0?t:(r=e.errors)==null?void 0:r[n]}function Rk(){let{router:t}=Ek("useNavigate"),e=am("useNavigate"),n=M.useRef(!1);return RE(()=>{n.current=!0}),M.useCallback(async(i,s={})=>{qr(n.current,AE),n.current&&(typeof i=="number"?t.navigate(i):await t.navigate(i,{fromRouteId:e,...s}))},[t,e])}var j0={};function Ck(t,e,n){j0[t]||(j0[t]=!0,qr(!1,n))}M.memo(Pk);function Pk({routes:t,future:e,state:n}){return CE(t,void 0,n,e)}function Io(t){Ae(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function kk({basename:t="/",children:e=null,location:n,navigationType:r="POP",navigator:i,static:s=!1}){Ae(!ka(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=t.replace(/^\/*/,"/"),a=M.useMemo(()=>({basename:o,navigator:i,static:s,future:{}}),[o,i,s]);typeof n=="string"&&(n=Ls(n));let{pathname:u="/",search:c="",hash:d="",state:p=null,key:m="default"}=n,w=M.useMemo(()=>{let E=Nr(u,o);return E==null?null:{location:{pathname:E,search:c,hash:d,state:p,key:m},navigationType:r}},[o,u,c,d,p,m,r]);return qr(w!=null,`<Router basename="${o}"> is not able to match the URL "${u}${c}${d}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:M.createElement(Tn.Provider,{value:a},M.createElement(Pa.Provider,{children:e,value:w}))}function xk({children:t,location:e}){return mk(ff(t),e)}function ff(t,e=[]){let n=[];return M.Children.forEach(t,(r,i)=>{if(!M.isValidElement(r))return;let s=[...e,i];if(r.type===M.Fragment){n.push.apply(n,ff(r.props.children,s));return}Ae(r.type===Io,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ae(!r.props.index||!r.props.children,"An index route cannot have child routes.");let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ff(r.props.children,s)),n.push(o)}),n}var Wl="get",Gl="application/x-www-form-urlencoded";function Ec(t){return t!=null&&typeof t.tagName=="string"}function bk(t){return Ec(t)&&t.tagName.toLowerCase()==="button"}function Nk(t){return Ec(t)&&t.tagName.toLowerCase()==="form"}function Ok(t){return Ec(t)&&t.tagName.toLowerCase()==="input"}function Dk(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Lk(t,e){return t.button===0&&(!e||e==="_self")&&!Dk(t)}var Al=null;function Mk(){if(Al===null)try{new FormData(document.createElement("form"),0),Al=!1}catch{Al=!0}return Al}var Vk=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Kh(t){return t!=null&&!Vk.has(t)?(qr(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Gl}"`),null):t}function Fk(t,e){let n,r,i,s,o;if(Nk(t)){let a=t.getAttribute("action");r=a?Nr(a,e):null,n=t.getAttribute("method")||Wl,i=Kh(t.getAttribute("enctype"))||Gl,s=new FormData(t)}else if(bk(t)||Ok(t)&&(t.type==="submit"||t.type==="image")){let a=t.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=t.getAttribute("formaction")||a.getAttribute("action");if(r=u?Nr(u,e):null,n=t.getAttribute("formmethod")||a.getAttribute("method")||Wl,i=Kh(t.getAttribute("formenctype"))||Kh(a.getAttribute("enctype"))||Gl,s=new FormData(a,t),!Mk()){let{name:c,type:d,value:p}=t;if(d==="image"){let m=c?`${c}.`:"";s.append(`${m}x`,"0"),s.append(`${m}y`,"0")}else c&&s.append(c,p)}}else{if(Ec(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Wl,r=null,i=Gl,o=t}return s&&i==="text/plain"&&(o=s,s=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:s,body:o}}function lm(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}async function Uk(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function jk(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function zk(t,e,n){let r=await Promise.all(t.map(async i=>{let s=e.routes[i.route.id];if(s){let o=await Uk(s,n);return o.links?o.links():[]}return[]}));return Hk(r.flat(1).filter(jk).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function z0(t,e,n,r,i,s){let o=(u,c)=>n[c]?u.route.id!==n[c].route.id:!0,a=(u,c)=>{var d;return n[c].pathname!==u.pathname||((d=n[c].route.path)==null?void 0:d.endsWith("*"))&&n[c].params["*"]!==u.params["*"]};return s==="assets"?e.filter((u,c)=>o(u,c)||a(u,c)):s==="data"?e.filter((u,c)=>{var p;let d=r.routes[u.route.id];if(!d||!d.hasLoader)return!1;if(o(u,c)||a(u,c))return!0;if(u.route.shouldRevalidate){let m=u.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((p=n[0])==null?void 0:p.params)||{},nextUrl:new URL(t,window.origin),nextParams:u.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function Bk(t,e){return $k(t.map(n=>{let r=e.routes[n.route.id];if(!r)return[];let i=[r.module];return r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function $k(t){return[...new Set(t)]}function qk(t){let e={},n=Object.keys(t).sort();for(let r of n)e[r]=t[r];return e}function Hk(t,e){let n=new Set;return new Set(e),t.reduce((r,i)=>{let s=JSON.stringify(qk(i));return n.has(s)||(n.add(s),r.push({key:s,link:i})),r},[])}function Wk(t){let e=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function Gk(){let t=M.useContext(Ms);return lm(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function Kk(){let t=M.useContext(wc);return lm(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var um=M.createContext(void 0);um.displayName="FrameworkContext";function PE(){let t=M.useContext(um);return lm(t,"You must render this element inside a <HydratedRouter> element"),t}function Qk(t,e){let n=M.useContext(um),[r,i]=M.useState(!1),[s,o]=M.useState(!1),{onFocus:a,onBlur:u,onMouseEnter:c,onMouseLeave:d,onTouchStart:p}=e,m=M.useRef(null);M.useEffect(()=>{if(t==="render"&&o(!0),t==="viewport"){let T=_=>{_.forEach(y=>{o(y.isIntersecting)})},R=new IntersectionObserver(T,{threshold:.5});return m.current&&R.observe(m.current),()=>{R.disconnect()}}},[t]),M.useEffect(()=>{if(r){let T=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(T)}}},[r]);let w=()=>{i(!0)},E=()=>{i(!1),o(!1)};return n?t!=="intent"?[s,m,{}]:[s,m,{onFocus:go(a,w),onBlur:go(u,E),onMouseEnter:go(c,w),onMouseLeave:go(d,E),onTouchStart:go(p,w)}]:[!1,m,{}]}function go(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function Yk({page:t,...e}){let{router:n}=Gk(),r=M.useMemo(()=>vE(n.routes,t,n.basename),[n.routes,t,n.basename]);return r?M.createElement(Jk,{page:t,matches:r,...e}):(console.warn(`Tried to prefetch ${t} but no routes matched.`),null)}function Xk(t){let{manifest:e,routeModules:n}=PE(),[r,i]=M.useState([]);return M.useEffect(()=>{let s=!1;return zk(t,e,n).then(o=>{s||i(o)}),()=>{s=!0}},[t,e,n]),r}function Jk({page:t,matches:e,...n}){let r=ki(),{manifest:i,routeModules:s}=PE(),{loaderData:o,matches:a}=Kk(),u=M.useMemo(()=>z0(t,e,a,i,r,"data"),[t,e,a,i,r]),c=M.useMemo(()=>z0(t,e,a,i,r,"assets"),[t,e,a,i,r]),d=M.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let w=new Set,E=!1;if(e.forEach(R=>{var y;let _=i.routes[R.route.id];!_||!_.hasLoader||(!u.some(I=>I.route.id===R.route.id)&&R.route.id in o&&((y=s[R.route.id])!=null&&y.shouldRevalidate)||_.hasClientLoader?E=!0:w.add(R.route.id))}),w.size===0)return[];let T=Wk(t);return E&&w.size>0&&T.searchParams.set("_routes",e.filter(R=>w.has(R.route.id)).map(R=>R.route.id).join(",")),[T.pathname+T.search]},[o,r,i,u,e,t,s]),p=M.useMemo(()=>Bk(c,i),[c,i]),m=Xk(c);return M.createElement(M.Fragment,null,d.map(w=>M.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...n})),p.map(w=>M.createElement("link",{key:w,rel:"modulepreload",href:w,...n})),m.map(({key:w,link:E})=>M.createElement("link",{key:w,...E})))}function Zk(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var kE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{kE&&(window.__reactRouterVersion="7.0.1")}catch{}function e2({basename:t,children:e,window:n}){let r=M.useRef();r.current==null&&(r.current=jP({window:n,v5Compat:!0}));let i=r.current,[s,o]=M.useState({action:i.action,location:i.location}),a=M.useCallback(u=>{M.startTransition(()=>o(u))},[o]);return M.useLayoutEffect(()=>i.listen(a),[i,a]),M.createElement(kk,{basename:t,children:e,location:s.location,navigationType:s.action,navigator:i})}var xE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ri=M.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:i,reloadDocument:s,replace:o,state:a,target:u,to:c,preventScrollReset:d,viewTransition:p,...m},w){let{basename:E}=M.useContext(Tn),T=typeof c=="string"&&xE.test(c),R,_=!1;if(typeof c=="string"&&T&&(R=c,kE))try{let S=new URL(window.location.href),C=c.startsWith("//")?new URL(S.protocol+c):new URL(c),k=Nr(C.pathname,E);C.origin===S.origin&&k!=null?c=k+C.search+C.hash:_=!0}catch{qr(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let y=dk(c,{relative:i}),[I,O,V]=Qk(r,m),j=i2(c,{replace:o,state:a,target:u,preventScrollReset:d,relative:i,viewTransition:p});function A(S){e&&e(S),S.defaultPrevented||j(S)}let v=M.createElement("a",{...m,...V,href:R||y,onClick:_||s?e:A,ref:Zk(w,O),target:u,"data-discover":!T&&n==="render"?"true":void 0});return I&&!T?M.createElement(M.Fragment,null,v,M.createElement(Yk,{page:y})):v});ri.displayName="Link";var t2=M.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:i=!1,style:s,to:o,viewTransition:a,children:u,...c},d){let p=xa(o,{relative:c.relative}),m=ki(),w=M.useContext(wc),{navigator:E,basename:T}=M.useContext(Tn),R=w!=null&&u2(p)&&a===!0,_=E.encodeLocation?E.encodeLocation(p).pathname:p.pathname,y=m.pathname,I=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;n||(y=y.toLowerCase(),I=I?I.toLowerCase():null,_=_.toLowerCase()),I&&T&&(I=Nr(I,T)||I);const O=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let V=y===_||!i&&y.startsWith(_)&&y.charAt(O)==="/",j=I!=null&&(I===_||!i&&I.startsWith(_)&&I.charAt(_.length)==="/"),A={isActive:V,isPending:j,isTransitioning:R},v=V?e:void 0,S;typeof r=="function"?S=r(A):S=[r,V?"active":null,j?"pending":null,R?"transitioning":null].filter(Boolean).join(" ");let C=typeof s=="function"?s(A):s;return M.createElement(ri,{...c,"aria-current":v,className:S,ref:d,style:C,to:o,viewTransition:a},typeof u=="function"?u(A):u)});t2.displayName="NavLink";var n2=M.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:i,state:s,method:o=Wl,action:a,onSubmit:u,relative:c,preventScrollReset:d,viewTransition:p,...m},w)=>{let E=a2(),T=l2(a,{relative:c}),R=o.toLowerCase()==="get"?"get":"post",_=typeof a=="string"&&xE.test(a),y=I=>{if(u&&u(I),I.defaultPrevented)return;I.preventDefault();let O=I.nativeEvent.submitter,V=(O==null?void 0:O.getAttribute("formmethod"))||o;E(O||I.currentTarget,{fetcherKey:e,method:V,navigate:n,replace:i,state:s,relative:c,preventScrollReset:d,viewTransition:p})};return M.createElement("form",{ref:w,method:R,action:T,onSubmit:r?u:y,...m,"data-discover":!_&&t==="render"?"true":void 0})});n2.displayName="Form";function r2(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function bE(t){let e=M.useContext(Ms);return Ae(e,r2(t)),e}function i2(t,{target:e,replace:n,state:r,preventScrollReset:i,relative:s,viewTransition:o}={}){let a=fk(),u=ki(),c=xa(t,{relative:s});return M.useCallback(d=>{if(Lk(d,e)){d.preventDefault();let p=n!==void 0?n:ua(u)===ua(c);a(t,{replace:p,state:r,preventScrollReset:i,relative:s,viewTransition:o})}},[u,a,c,n,r,e,t,i,s,o])}var s2=0,o2=()=>`__${String(++s2)}__`;function a2(){let{router:t}=bE("useSubmit"),{basename:e}=M.useContext(Tn),n=Sk();return M.useCallback(async(r,i={})=>{let{action:s,method:o,encType:a,formData:u,body:c}=Fk(r,e);if(i.navigate===!1){let d=i.fetcherKey||o2();await t.fetch(d,n,i.action||s,{preventScrollReset:i.preventScrollReset,formData:u,body:c,formMethod:i.method||o,formEncType:i.encType||a,flushSync:i.flushSync})}else await t.navigate(i.action||s,{preventScrollReset:i.preventScrollReset,formData:u,body:c,formMethod:i.method||o,formEncType:i.encType||a,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[t,e,n])}function l2(t,{relative:e}={}){let{basename:n}=M.useContext(Tn),r=M.useContext(Zn);Ae(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),s={...xa(t||".",{relative:e})},o=ki();if(t==null){s.search=o.search;let a=new URLSearchParams(s.search),u=a.getAll("index");if(u.some(d=>d==="")){a.delete("index"),u.filter(p=>p).forEach(p=>a.append("index",p));let d=a.toString();s.search=d?`?${d}`:""}}return(!t||t===".")&&i.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:jn([n,s.pathname])),ua(s)}function u2(t,e={}){let n=M.useContext(SE);Ae(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=bE("useViewTransitionState"),i=xa(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Nr(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Nr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Ou(i.pathname,o)!=null||Ou(i.pathname,s)!=null}new TextEncoder;/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function c2(t,e,n){return(e=d2(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function B0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function z(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?B0(Object(n),!0).forEach(function(r){c2(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):B0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function h2(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function d2(t){var e=h2(t,"string");return typeof e=="symbol"?e:e+""}const $0=()=>{};let cm={},NE={},OE=null,DE={mark:$0,measure:$0};try{typeof window<"u"&&(cm=window),typeof document<"u"&&(NE=document),typeof MutationObserver<"u"&&(OE=MutationObserver),typeof performance<"u"&&(DE=performance)}catch{}const{userAgent:q0=""}=cm.navigator||{},Or=cm,we=NE,H0=OE,Rl=DE;Or.document;const er=!!we.documentElement&&!!we.head&&typeof we.addEventListener=="function"&&typeof we.createElement=="function",LE=~q0.indexOf("MSIE")||~q0.indexOf("Trident/");var f2=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,p2=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,ME={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},m2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},VE=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],at="classic",Tc="duotone",g2="sharp",y2="sharp-duotone",FE=[at,Tc,g2,y2],v2={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},_2={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},w2=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),E2={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},T2=["fak","fa-kit","fakd","fa-kit-duotone"],W0={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},I2=["kit"],S2={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},A2=["fak","fakd"],R2={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},G0={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Cl={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},C2=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],P2=["fak","fa-kit","fakd","fa-kit-duotone"],k2={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},x2={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},b2={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},pf={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},N2=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],mf=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...C2,...N2],O2=["solid","regular","light","thin","duotone","brands"],UE=[1,2,3,4,5,6,7,8,9,10],D2=UE.concat([11,12,13,14,15,16,17,18,19,20]),L2=[...Object.keys(b2),...O2,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Cl.GROUP,Cl.SWAP_OPACITY,Cl.PRIMARY,Cl.SECONDARY].concat(UE.map(t=>"".concat(t,"x"))).concat(D2.map(t=>"w-".concat(t))),M2={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const Wn="___FONT_AWESOME___",gf=16,jE="fa",zE="svg-inline--fa",_i="data-fa-i2svg",yf="data-fa-pseudo-element",V2="data-fa-pseudo-element-pending",hm="data-prefix",dm="data-icon",K0="fontawesome-i2svg",F2="async",U2=["HTML","HEAD","STYLE","SCRIPT"],BE=(()=>{try{return!0}catch{return!1}})();function ba(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[at]}})}const $E=z({},ME);$E[at]=z(z(z(z({},{"fa-duotone":"duotone"}),ME[at]),W0.kit),W0["kit-duotone"]);const j2=ba($E),vf=z({},E2);vf[at]=z(z(z(z({},{duotone:"fad"}),vf[at]),G0.kit),G0["kit-duotone"]);const Q0=ba(vf),_f=z({},pf);_f[at]=z(z({},_f[at]),R2.kit);const fm=ba(_f),wf=z({},x2);wf[at]=z(z({},wf[at]),S2.kit);ba(wf);const z2=f2,qE="fa-layers-text",B2=p2,$2=z({},v2);ba($2);const q2=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Qh=m2,H2=[...I2,...L2],Fo=Or.FontAwesomeConfig||{};function W2(t){var e=we.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function G2(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}we&&typeof we.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const i=G2(W2(n));i!=null&&(Fo[r]=i)});const HE={styleDefault:"solid",familyDefault:at,cssPrefix:jE,replacementClass:zE,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Fo.familyPrefix&&(Fo.cssPrefix=Fo.familyPrefix);const Is=z(z({},HE),Fo);Is.autoReplaceSvg||(Is.observeMutations=!1);const K={};Object.keys(HE).forEach(t=>{Object.defineProperty(K,t,{enumerable:!0,set:function(e){Is[t]=e,Uo.forEach(n=>n(K))},get:function(){return Is[t]}})});Object.defineProperty(K,"familyPrefix",{enumerable:!0,set:function(t){Is.cssPrefix=t,Uo.forEach(e=>e(K))},get:function(){return Is.cssPrefix}});Or.FontAwesomeConfig=K;const Uo=[];function K2(t){return Uo.push(t),()=>{Uo.splice(Uo.indexOf(t),1)}}const sr=gf,hn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Q2(t){if(!t||!er)return;const e=we.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=we.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return we.head.insertBefore(e,r),t}const Y2="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ca(){let t=12,e="";for(;t-- >0;)e+=Y2[Math.random()*62|0];return e}function Vs(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function pm(t){return t.classList?Vs(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function WE(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function X2(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(WE(t[n]),'" '),"").trim()}function Ic(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function mm(t){return t.size!==hn.size||t.x!==hn.x||t.y!==hn.y||t.rotate!==hn.rotate||t.flipX||t.flipY}function J2(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:u,path:c}}function Z2(t){let{transform:e,width:n=gf,height:r=gf,startCentered:i=!1}=t,s="";return i&&LE?s+="translate(".concat(e.x/sr-n/2,"em, ").concat(e.y/sr-r/2,"em) "):i?s+="translate(calc(-50% + ".concat(e.x/sr,"em), calc(-50% + ").concat(e.y/sr,"em)) "):s+="translate(".concat(e.x/sr,"em, ").concat(e.y/sr,"em) "),s+="scale(".concat(e.size/sr*(e.flipX?-1:1),", ").concat(e.size/sr*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var ex=`:root, :host {
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
}`;function GE(){const t=jE,e=zE,n=K.cssPrefix,r=K.replacementClass;let i=ex;if(n!==t||r!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}let Y0=!1;function Yh(){K.autoAddCss&&!Y0&&(Q2(GE()),Y0=!0)}var tx={mixout(){return{dom:{css:GE,insertCss:Yh}}},hooks(){return{beforeDOMElementCreation(){Yh()},beforeI2svg(){Yh()}}}};const Gn=Or||{};Gn[Wn]||(Gn[Wn]={});Gn[Wn].styles||(Gn[Wn].styles={});Gn[Wn].hooks||(Gn[Wn].hooks={});Gn[Wn].shims||(Gn[Wn].shims=[]);var dn=Gn[Wn];const KE=[],QE=function(){we.removeEventListener("DOMContentLoaded",QE),Du=1,KE.map(t=>t())};let Du=!1;er&&(Du=(we.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(we.readyState),Du||we.addEventListener("DOMContentLoaded",QE));function nx(t){er&&(Du?setTimeout(t,0):KE.push(t))}function Na(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?WE(t):"<".concat(e," ").concat(X2(n),">").concat(r.map(Na).join(""),"</").concat(e,">")}function X0(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Xh=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=n,u,c,d;for(r===void 0?(u=1,d=e[s[0]]):(u=0,d=r);u<o;u++)c=s[u],d=a(d,e[c],c,e);return d};function rx(t){const e=[];let n=0;const r=t.length;for(;n<r;){const i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Ef(t){const e=rx(t);return e.length===1?e[0].toString(16):null}function ix(t,e){const n=t.length;let r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function J0(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function Tf(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=J0(e);typeof dn.hooks.addPack=="function"&&!r?dn.hooks.addPack(t,J0(e)):dn.styles[t]=z(z({},dn.styles[t]||{}),i),t==="fas"&&Tf("fa",e)}const{styles:ha,shims:sx}=dn,YE=Object.keys(fm),ox=YE.reduce((t,e)=>(t[e]=Object.keys(fm[e]),t),{});let gm=null,XE={},JE={},ZE={},eT={},tT={};function ax(t){return~H2.indexOf(t)}function lx(t,e){const n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!ax(i)?i:null}const nT=()=>{const t=r=>Xh(ha,(i,s,o)=>(i[o]=Xh(s,r,{}),i),{});XE=t((r,i,s)=>(i[3]&&(r[i[3]]=s),i[2]&&i[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=s}),r)),JE=t((r,i,s)=>(r[s]=s,i[2]&&i[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=s}),r)),tT=t((r,i,s)=>{const o=i[2];return r[s]=s,o.forEach(a=>{r[a]=s}),r});const e="far"in ha||K.autoFetchSvg,n=Xh(sx,(r,i)=>{const s=i[0];let o=i[1];const a=i[2];return o==="far"&&!e&&(o="fas"),typeof s=="string"&&(r.names[s]={prefix:o,iconName:a}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});ZE=n.names,eT=n.unicodes,gm=Sc(K.styleDefault,{family:K.familyDefault})};K2(t=>{gm=Sc(t.styleDefault,{family:K.familyDefault})});nT();function ym(t,e){return(XE[t]||{})[e]}function ux(t,e){return(JE[t]||{})[e]}function ii(t,e){return(tT[t]||{})[e]}function rT(t){return ZE[t]||{prefix:null,iconName:null}}function cx(t){const e=eT[t],n=ym("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Dr(){return gm}const iT=()=>({prefix:null,iconName:null,rest:[]});function hx(t){let e=at;const n=YE.reduce((r,i)=>(r[i]="".concat(K.cssPrefix,"-").concat(i),r),{});return FE.forEach(r=>{(t.includes(n[r])||t.some(i=>ox[r].includes(i)))&&(e=r)}),e}function Sc(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=at}=e,r=j2[n][t];if(n===Tc&&!t)return"fad";const i=Q0[n][t]||Q0[n][r],s=t in dn.styles?t:null;return i||s||null}function dx(t){let e=[],n=null;return t.forEach(r=>{const i=lx(K.cssPrefix,r);i?n=i:r&&e.push(r)}),{iconName:n,rest:e}}function Z0(t){return t.sort().filter((e,n,r)=>r.indexOf(e)===n)}function Ac(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let r=null;const i=mf.concat(P2),s=Z0(t.filter(p=>i.includes(p))),o=Z0(t.filter(p=>!mf.includes(p))),a=s.filter(p=>(r=p,!VE.includes(p))),[u=null]=a,c=hx(s),d=z(z({},dx(o)),{},{prefix:Sc(u,{family:c})});return z(z(z({},d),gx({values:t,family:c,styles:ha,config:K,canonical:d,givenPrefix:r})),fx(n,r,d))}function fx(t,e,n){let{prefix:r,iconName:i}=n;if(t||!r||!i)return{prefix:r,iconName:i};const s=e==="fa"?rT(i):{},o=ii(r,i);return i=s.iconName||o||i,r=s.prefix||r,r==="far"&&!ha.far&&ha.fas&&!K.autoFetchSvg&&(r="fas"),{prefix:r,iconName:i}}const px=FE.filter(t=>t!==at||t!==Tc),mx=Object.keys(pf).filter(t=>t!==at).map(t=>Object.keys(pf[t])).flat();function gx(t){const{values:e,family:n,canonical:r,givenPrefix:i="",styles:s={},config:o={}}=t,a=n===Tc,u=e.includes("fa-duotone")||e.includes("fad"),c=o.familyDefault==="duotone",d=r.prefix==="fad"||r.prefix==="fa-duotone";if(!a&&(u||c||d)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&px.includes(n)&&(Object.keys(s).find(m=>mx.includes(m))||o.autoFetchSvg)){const m=w2.get(n).defaultShortPrefixId;r.prefix=m,r.iconName=ii(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||i==="fa")&&(r.prefix=Dr()||"fas"),r}class yx{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(s=>{this.definitions[s]=z(z({},this.definitions[s]||{}),i[s]),Tf(s,i[s]);const o=fm[at][s];o&&Tf(o,i[s]),nT()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:s,iconName:o,icon:a}=r[i],u=a[2];e[s]||(e[s]={}),u.length>0&&u.forEach(c=>{typeof c=="string"&&(e[s][c]=a)}),e[s][o]=a}),e}}let ev=[],rs={};const hs={},vx=Object.keys(hs);function _x(t,e){let{mixoutsTo:n}=e;return ev=t,rs={},Object.keys(hs).forEach(r=>{vx.indexOf(r)===-1&&delete hs[r]}),ev.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(s=>{typeof i[s]=="function"&&(n[s]=i[s]),typeof i[s]=="object"&&Object.keys(i[s]).forEach(o=>{n[s]||(n[s]={}),n[s][o]=i[s][o]})}),r.hooks){const s=r.hooks();Object.keys(s).forEach(o=>{rs[o]||(rs[o]=[]),rs[o].push(s[o])})}r.provides&&r.provides(hs)}),n}function If(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(rs[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function wi(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(rs[t]||[]).forEach(s=>{s.apply(null,n)})}function Lr(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return hs[t]?hs[t].apply(null,e):void 0}function Sf(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Dr();if(e)return e=ii(n,e)||e,X0(sT.definitions,n,e)||X0(dn.styles,n,e)}const sT=new yx,wx=()=>{K.autoReplaceSvg=!1,K.observeMutations=!1,wi("noAuto")},Ex={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return er?(wi("beforeI2svg",t),Lr("pseudoElements2svg",t),Lr("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;K.autoReplaceSvg===!1&&(K.autoReplaceSvg=!0),K.observeMutations=!0,nx(()=>{Ix({autoReplaceSvgRoot:e}),wi("watch",t)})}},Tx={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ii(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Sc(t[0]);return{prefix:n,iconName:ii(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(K.cssPrefix,"-"))>-1||t.match(z2))){const e=Ac(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Dr(),iconName:ii(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Dr();return{prefix:e,iconName:ii(e,t)||t}}}},Lt={noAuto:wx,config:K,dom:Ex,parse:Tx,library:sT,findIconDefinition:Sf,toHtml:Na},Ix=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=we}=t;(Object.keys(dn.styles).length>0||K.autoFetchSvg)&&er&&K.autoReplaceSvg&&Lt.dom.i2svg({node:e})};function Rc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Na(n))}}),Object.defineProperty(t,"node",{get:function(){if(!er)return;const n=we.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Sx(t){let{children:e,main:n,mask:r,attributes:i,styles:s,transform:o}=t;if(mm(o)&&n.found&&!r.found){const{width:a,height:u}=n,c={x:a/u/2,y:.5};i.style=Ic(z(z({},s),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function Ax(t){let{prefix:e,iconName:n,children:r,attributes:i,symbol:s}=t;const o=s===!0?"".concat(e,"-").concat(K.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:z(z({},i),{},{id:o}),children:r}]}]}function vm(t){const{icons:{main:e,mask:n},prefix:r,iconName:i,transform:s,symbol:o,title:a,maskId:u,titleId:c,extra:d,watchable:p=!1}=t,{width:m,height:w}=n.found?n:e,E=A2.includes(r),T=[K.replacementClass,i?"".concat(K.cssPrefix,"-").concat(i):""].filter(V=>d.classes.indexOf(V)===-1).filter(V=>V!==""||!!V).concat(d.classes).join(" ");let R={children:[],attributes:z(z({},d.attributes),{},{"data-prefix":r,"data-icon":i,class:T,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(w)})};const _=E&&!~d.classes.indexOf("fa-fw")?{width:"".concat(m/w*16*.0625,"em")}:{};p&&(R.attributes[_i]=""),a&&(R.children.push({tag:"title",attributes:{id:R.attributes["aria-labelledby"]||"title-".concat(c||ca())},children:[a]}),delete R.attributes.title);const y=z(z({},R),{},{prefix:r,iconName:i,main:e,mask:n,maskId:u,transform:s,symbol:o,styles:z(z({},_),d.styles)}),{children:I,attributes:O}=n.found&&e.found?Lr("generateAbstractMask",y)||{children:[],attributes:{}}:Lr("generateAbstractIcon",y)||{children:[],attributes:{}};return y.children=I,y.attributes=O,o?Ax(y):Sx(y)}function tv(t){const{content:e,width:n,height:r,transform:i,title:s,extra:o,watchable:a=!1}=t,u=z(z(z({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});a&&(u[_i]="");const c=z({},o.styles);mm(i)&&(c.transform=Z2({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const d=Ic(c);d.length>0&&(u.style=d);const p=[];return p.push({tag:"span",attributes:u,children:[e]}),s&&p.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),p}function Rx(t){const{content:e,title:n,extra:r}=t,i=z(z(z({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Ic(r.styles);s.length>0&&(i.style=s);const o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:Jh}=dn;function Af(t){const e=t[0],n=t[1],[r]=t.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(K.cssPrefix,"-").concat(Qh.GROUP)},children:[{tag:"path",attributes:{class:"".concat(K.cssPrefix,"-").concat(Qh.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(K.cssPrefix,"-").concat(Qh.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:i}}const Cx={found:!1,width:512,height:512};function Px(t,e){!BE&&!K.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Rf(t,e){let n=e;return e==="fa"&&K.styleDefault!==null&&(e=Dr()),new Promise((r,i)=>{if(n==="fa"){const s=rT(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Jh[e]&&Jh[e][t]){const s=Jh[e][t];return r(Af(s))}Px(t,e),r(z(z({},Cx),{},{icon:K.showMissingIcons&&t?Lr("missingIconAbstract")||{}:{}}))})}const nv=()=>{},Cf=K.measurePerformance&&Rl&&Rl.mark&&Rl.measure?Rl:{mark:nv,measure:nv},So='FA "6.7.1"',kx=t=>(Cf.mark("".concat(So," ").concat(t," begins")),()=>oT(t)),oT=t=>{Cf.mark("".concat(So," ").concat(t," ends")),Cf.measure("".concat(So," ").concat(t),"".concat(So," ").concat(t," begins"),"".concat(So," ").concat(t," ends"))};var _m={begin:kx,end:oT};const Kl=()=>{};function rv(t){return typeof(t.getAttribute?t.getAttribute(_i):null)=="string"}function xx(t){const e=t.getAttribute?t.getAttribute(hm):null,n=t.getAttribute?t.getAttribute(dm):null;return e&&n}function bx(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(K.replacementClass)}function Nx(){return K.autoReplaceSvg===!0?Ql.replace:Ql[K.autoReplaceSvg]||Ql.replace}function Ox(t){return we.createElementNS("http://www.w3.org/2000/svg",t)}function Dx(t){return we.createElement(t)}function aT(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?Ox:Dx}=e;if(typeof t=="string")return we.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){r.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){r.appendChild(aT(s,{ceFn:n}))}),r}function Lx(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Ql={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(aT(n),e)}),e.getAttribute(_i)===null&&K.keepOriginalSource){let n=we.createComment(Lx(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~pm(e).indexOf(K.replacementClass))return Ql.replace(t);const r=new RegExp("".concat(K.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((o,a)=>(a===K.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const i=n.map(s=>Na(s)).join(`
`);e.setAttribute(_i,""),e.innerHTML=i}};function iv(t){t()}function lT(t,e){const n=typeof e=="function"?e:Kl;if(t.length===0)n();else{let r=iv;K.mutateApproach===F2&&(r=Or.requestAnimationFrame||iv),r(()=>{const i=Nx(),s=_m.begin("mutate");t.map(i),s(),n()})}}let wm=!1;function uT(){wm=!0}function Pf(){wm=!1}let Lu=null;function sv(t){if(!H0||!K.observeMutations)return;const{treeCallback:e=Kl,nodeCallback:n=Kl,pseudoElementsCallback:r=Kl,observeMutationsRoot:i=we}=t;Lu=new H0(s=>{if(wm)return;const o=Dr();Vs(s).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!rv(a.addedNodes[0])&&(K.searchPseudoElements&&r(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&K.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&rv(a.target)&&~q2.indexOf(a.attributeName))if(a.attributeName==="class"&&xx(a.target)){const{prefix:u,iconName:c}=Ac(pm(a.target));a.target.setAttribute(hm,u||o),c&&a.target.setAttribute(dm,c)}else bx(a.target)&&n(a.target)})}),er&&Lu.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Mx(){Lu&&Lu.disconnect()}function Vx(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,i)=>{const s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function Fx(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let i=Ac(pm(t));return i.prefix||(i.prefix=Dr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=ux(i.prefix,t.innerText)||ym(i.prefix,Ef(t.innerText))),!i.iconName&&K.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function Ux(t){const e=Vs(t.attributes).reduce((i,s)=>(i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return K.autoA11y&&(n?e["aria-labelledby"]="".concat(K.replacementClass,"-title-").concat(r||ca()):(e["aria-hidden"]="true",e.focusable="false")),e}function jx(){return{iconName:null,title:null,titleId:null,prefix:null,transform:hn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ov(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=Fx(t),s=Ux(t),o=If("parseNodeAttributes",{},t);let a=e.styleParser?Vx(t):[];return z({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:hn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:a,attributes:s}},o)}const{styles:zx}=dn;function cT(t){const e=K.autoReplaceSvg==="nest"?ov(t,{styleParser:!1}):ov(t);return~e.extra.classes.indexOf(qE)?Lr("generateLayersText",t,e):Lr("generateSvgReplacementMutation",t,e)}function Bx(){return[...T2,...mf]}function av(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!er)return Promise.resolve();const n=we.documentElement.classList,r=d=>n.add("".concat(K0,"-").concat(d)),i=d=>n.remove("".concat(K0,"-").concat(d)),s=K.autoFetchSvg?Bx():VE.concat(Object.keys(zx));s.includes("fa")||s.push("fa");const o=[".".concat(qE,":not([").concat(_i,"])")].concat(s.map(d=>".".concat(d,":not([").concat(_i,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=Vs(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();const u=_m.begin("onTree"),c=a.reduce((d,p)=>{try{const m=cT(p);m&&d.push(m)}catch(m){BE||m.name==="MissingIcon"&&console.error(m)}return d},[]);return new Promise((d,p)=>{Promise.all(c).then(m=>{lT(m,()=>{r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),u(),d()})}).catch(m=>{u(),p(m)})})}function $x(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;cT(t).then(n=>{n&&lT([n],e)})}function qx(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:Sf(e||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:Sf(i||{})),t(r,z(z({},n),{},{mask:i}))}}const Hx=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=hn,symbol:r=!1,mask:i=null,maskId:s=null,title:o=null,titleId:a=null,classes:u=[],attributes:c={},styles:d={}}=e;if(!t)return;const{prefix:p,iconName:m,icon:w}=t;return Rc(z({type:"icon"},t),()=>(wi("beforeDOMElementCreation",{iconDefinition:t,params:e}),K.autoA11y&&(o?c["aria-labelledby"]="".concat(K.replacementClass,"-title-").concat(a||ca()):(c["aria-hidden"]="true",c.focusable="false")),vm({icons:{main:Af(w),mask:i?Af(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:m,transform:z(z({},hn),n),symbol:r,title:o,maskId:s,titleId:a,extra:{attributes:c,styles:d,classes:u}})))};var Wx={mixout(){return{icon:qx(Hx)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=av,t.nodeCallback=$x,t}}},provides(t){t.i2svg=function(e){const{node:n=we,callback:r=()=>{}}=e;return av(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:i,titleId:s,prefix:o,transform:a,symbol:u,mask:c,maskId:d,extra:p}=n;return new Promise((m,w)=>{Promise.all([Rf(r,o),c.iconName?Rf(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(E=>{let[T,R]=E;m([e,vm({icons:{main:T,mask:R},prefix:o,iconName:r,transform:a,symbol:u,maskId:d,title:i,titleId:s,extra:p,watchable:!0})])}).catch(w)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:i,transform:s,styles:o}=e;const a=Ic(o);a.length>0&&(r.style=a);let u;return mm(s)&&(u=Lr("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),n.push(u||i.icon),{children:n,attributes:r}}}},Gx={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Rc({type:"layer"},()=>{wi("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(i=>{Array.isArray(i)?i.map(s=>{r=r.concat(s.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(K.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},Kx={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:s={}}=e;return Rc({type:"counter",content:t},()=>(wi("beforeDOMElementCreation",{content:t,params:e}),Rx({content:t.toString(),title:n,extra:{attributes:i,styles:s,classes:["".concat(K.cssPrefix,"-layers-counter"),...r]}})))}}}},Qx={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=hn,title:r=null,classes:i=[],attributes:s={},styles:o={}}=e;return Rc({type:"text",content:t},()=>(wi("beforeDOMElementCreation",{content:t,params:e}),tv({content:t,transform:z(z({},hn),n),title:r,extra:{attributes:s,styles:o,classes:["".concat(K.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:i,extra:s}=n;let o=null,a=null;if(LE){const u=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/u,a=c.height/u}return K.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,tv({content:e.innerHTML,width:o,height:a,transform:i,title:r,extra:s,watchable:!0})])}}};const Yx=new RegExp('"',"ug"),lv=[1105920,1112319],uv=z(z(z(z({},{FontAwesome:{normal:"fas",400:"fas"}}),_2),M2),k2),kf=Object.keys(uv).reduce((t,e)=>(t[e.toLowerCase()]=uv[e],t),{}),Xx=Object.keys(kf).reduce((t,e)=>{const n=kf[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Jx(t){const e=t.replace(Yx,""),n=ix(e,0),r=n>=lv[0]&&n<=lv[1],i=e.length===2?e[0]===e[1]:!1;return{value:Ef(i?e[0]:e),isSecondary:r||i}}function Zx(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),i=isNaN(r)?"normal":r;return(kf[n]||{})[i]||Xx[n]}function cv(t,e){const n="".concat(V2).concat(e.replace(":","-"));return new Promise((r,i)=>{if(t.getAttribute(n)!==null)return r();const o=Vs(t.children).filter(m=>m.getAttribute(yf)===e)[0],a=Or.getComputedStyle(t,e),u=a.getPropertyValue("font-family"),c=u.match(B2),d=a.getPropertyValue("font-weight"),p=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&p!=="none"&&p!==""){const m=a.getPropertyValue("content");let w=Zx(u,d);const{value:E,isSecondary:T}=Jx(m),R=c[0].startsWith("FontAwesome");let _=ym(w,E),y=_;if(R){const I=cx(E);I.iconName&&I.prefix&&(_=I.iconName,w=I.prefix)}if(_&&!T&&(!o||o.getAttribute(hm)!==w||o.getAttribute(dm)!==y)){t.setAttribute(n,y),o&&t.removeChild(o);const I=jx(),{extra:O}=I;O.attributes[yf]=e,Rf(_,w).then(V=>{const j=vm(z(z({},I),{},{icons:{main:V,mask:iT()},prefix:w,iconName:y,extra:O,watchable:!0})),A=we.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(A,t.firstChild):t.appendChild(A),A.outerHTML=j.map(v=>Na(v)).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function eb(t){return Promise.all([cv(t,"::before"),cv(t,"::after")])}function tb(t){return t.parentNode!==document.head&&!~U2.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(yf)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function hv(t){if(er)return new Promise((e,n)=>{const r=Vs(t.querySelectorAll("*")).filter(tb).map(eb),i=_m.begin("searchPseudoElements");uT(),Promise.all(r).then(()=>{i(),Pf(),e()}).catch(()=>{i(),Pf(),n()})})}var nb={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=hv,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=we}=e;K.searchPseudoElements&&hv(n)}}};let dv=!1;var rb={mixout(){return{dom:{unwatch(){uT(),dv=!0}}}},hooks(){return{bootstrap(){sv(If("mutationObserverCallbacks",{}))},noAuto(){Mx()},watch(t){const{observeMutationsRoot:e}=t;dv?Pf():sv(If("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const fv=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),s=i[0];let o=i.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var ib={mixout(){return{parse:{transform:t=>fv(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=fv(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:i,iconWidth:s}=e;const o={transform:"translate(".concat(i/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(a," ").concat(u," ").concat(c)},p={transform:"translate(".concat(s/2*-1," -256)")},m={outer:o,inner:d,path:p};return{tag:"g",attributes:z({},m.outer),children:[{tag:"g",attributes:z({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:z(z({},n.icon.attributes),m.path)}]}]}}}};const Zh={x:0,y:0,width:"100%",height:"100%"};function pv(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function sb(t){return t.tag==="g"?t.children:[t]}var ob={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?Ac(n.split(" ").map(i=>i.trim())):iT();return r.prefix||(r.prefix=Dr()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:i,mask:s,maskId:o,transform:a}=e;const{width:u,icon:c}=i,{width:d,icon:p}=s,m=J2({transform:a,containerWidth:d,iconWidth:u}),w={tag:"rect",attributes:z(z({},Zh),{},{fill:"white"})},E=c.children?{children:c.children.map(pv)}:{},T={tag:"g",attributes:z({},m.inner),children:[pv(z({tag:c.tag,attributes:z(z({},c.attributes),m.path)},E))]},R={tag:"g",attributes:z({},m.outer),children:[T]},_="mask-".concat(o||ca()),y="clip-".concat(o||ca()),I={tag:"mask",attributes:z(z({},Zh),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,R]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:sb(p)},I]};return n.push(O,{tag:"rect",attributes:z({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(_,")")},Zh)}),{children:n,attributes:r}}}},ab={provides(t){let e=!1;Or.matchMedia&&(e=Or.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:z(z({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const s=z(z({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:z(z({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:z(z({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:z(z({},s),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:z(z({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:z(z({},s),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:z(z({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:z(z({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},lb={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},ub=[tx,Wx,Gx,Kx,Qx,nb,rb,ib,ob,ab,lb];_x(ub,{mixoutsTo:Lt});Lt.noAuto;Lt.config;Lt.library;Lt.dom;const xf=Lt.parse;Lt.findIconDefinition;Lt.toHtml;const cb=Lt.icon;Lt.layer;Lt.text;Lt.counter;var hT={exports:{}},hb="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",db=hb,fb=db;function dT(){}function fT(){}fT.resetWarningCache=dT;var pb=function(){function t(r,i,s,o,a,u){if(u!==fb){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:fT,resetWarningCache:dT};return n.PropTypes=n,n};hT.exports=pb();var mb=hT.exports;const re=r1(mb);function mv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function un(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?mv(Object(n),!0).forEach(function(r){is(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):mv(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Mu(t){"@babel/helpers - typeof";return Mu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Mu(t)}function is(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function gb(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function yb(t,e){if(t==null)return{};var n=gb(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function bf(t){return vb(t)||_b(t)||wb(t)||Eb()}function vb(t){if(Array.isArray(t))return Nf(t)}function _b(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function wb(t,e){if(t){if(typeof t=="string")return Nf(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Nf(t,e)}}function Nf(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Eb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Tb(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,u=t.spin,c=t.spinPulse,d=t.spinReverse,p=t.pulse,m=t.fixedWidth,w=t.inverse,E=t.border,T=t.listItem,R=t.flip,_=t.size,y=t.rotation,I=t.pull,O=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":u,"fa-spin-reverse":d,"fa-spin-pulse":c,"fa-pulse":p,"fa-fw":m,"fa-inverse":w,"fa-border":E,"fa-li":T,"fa-flip":R===!0,"fa-flip-horizontal":R==="horizontal"||R==="both","fa-flip-vertical":R==="vertical"||R==="both"},is(e,"fa-".concat(_),typeof _<"u"&&_!==null),is(e,"fa-rotate-".concat(y),typeof y<"u"&&y!==null&&y!==0),is(e,"fa-pull-".concat(I),typeof I<"u"&&I!==null),is(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(O).map(function(V){return O[V]?V:null}).filter(function(V){return V})}function Ib(t){return t=t-0,t===t}function pT(t){return Ib(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Sb=["style"];function Ab(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Rb(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=pT(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[Ab(i)]=s:e[i]=s,e},{})}function mT(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(u){return mT(t,u)}),i=Object.keys(e.attributes||{}).reduce(function(u,c){var d=e.attributes[c];switch(c){case"class":u.attrs.className=d,delete e.attributes.class;break;case"style":u.attrs.style=Rb(d);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?u.attrs[c.toLowerCase()]=d:u.attrs[pT(c)]=d}return u},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=yb(n,Sb);return i.attrs.style=un(un({},i.attrs.style),o),t.apply(void 0,[e.tag,un(un({},i.attrs),a)].concat(bf(r)))}var gT=!1;try{gT=!0}catch{}function Cb(){if(!gT&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function gv(t){if(t&&Mu(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(xf.icon)return xf.icon(t);if(t===null)return null;if(t&&Mu(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function ed(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?is({},t,e):{}}var yv={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},cr=p1.forwardRef(function(t,e){var n=un(un({},yv),t),r=n.icon,i=n.mask,s=n.symbol,o=n.className,a=n.title,u=n.titleId,c=n.maskId,d=gv(r),p=ed("classes",[].concat(bf(Tb(n)),bf((o||"").split(" ")))),m=ed("transform",typeof n.transform=="string"?xf.transform(n.transform):n.transform),w=ed("mask",gv(i)),E=cb(d,un(un(un(un({},p),m),w),{},{symbol:s,title:a,titleId:u,maskId:c}));if(!E)return Cb("Could not find icon",d),null;var T=E.abstract,R={ref:e};return Object.keys(n).forEach(function(_){yv.hasOwnProperty(_)||(R[_]=n[_])}),Pb(T[0],R)});cr.displayName="FontAwesomeIcon";cr.propTypes={beat:re.bool,border:re.bool,beatFade:re.bool,bounce:re.bool,className:re.string,fade:re.bool,flash:re.bool,mask:re.oneOfType([re.object,re.array,re.string]),maskId:re.string,fixedWidth:re.bool,inverse:re.bool,flip:re.oneOf([!0,!1,"horizontal","vertical","both"]),icon:re.oneOfType([re.object,re.array,re.string]),listItem:re.bool,pull:re.oneOf(["right","left"]),pulse:re.bool,rotation:re.oneOf([0,90,180,270]),shake:re.bool,size:re.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:re.bool,spinPulse:re.bool,spinReverse:re.bool,symbol:re.oneOfType([re.bool,re.string]),title:re.string,titleId:re.string,transform:re.oneOfType([re.string,re.object]),swapOpacity:re.bool};var Pb=mT.bind(null,p1.createElement);/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const kb={prefix:"fas",iconName:"pencil",icon:[512,512,[9999,61504,"pencil-alt"],"f303","M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]},xb={prefix:"fas",iconName:"q",icon:[448,512,[113],"51","M64 256c0 88.4 71.6 160 160 160c28.9 0 56-7.7 79.4-21.1l-72-86.4c-11.3-13.6-9.5-33.8 4.1-45.1s33.8-9.5 45.1 4.1l70.9 85.1C371.9 325.8 384 292.3 384 256c0-88.4-71.6-160-160-160S64 167.6 64 256zM344.9 444.6C310 467 268.5 480 224 480C100.3 480 0 379.7 0 256S100.3 32 224 32s224 100.3 224 224c0 56.1-20.6 107.4-54.7 146.7l47.3 56.8c11.3 13.6 9.5 33.8-4.1 45.1s-33.8 9.5-45.1-4.1l-46.6-55.9z"]},bb={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},Nb={prefix:"fas",iconName:"sun",icon:[512,512,[9728],"f185","M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]},Ob={prefix:"fas",iconName:"hospital",icon:[640,512,[127973,62589,"hospital-alt","hospital-wide"],"f0f8","M192 48c0-26.5 21.5-48 48-48L400 0c26.5 0 48 21.5 48 48l0 464-80 0 0-80c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 80-80 0 0-464zM48 96l112 0 0 416L48 512c-26.5 0-48-21.5-48-48L0 320l80 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L0 288l0-64 80 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L0 192l0-48c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48l0 48-80 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0 0 64-80 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0 0 144c0 26.5-21.5 48-48 48l-112 0 0-416 112 0zM312 64c-8.8 0-16 7.2-16 16l0 24-24 0c-8.8 0-16 7.2-16 16l0 16c0 8.8 7.2 16 16 16l24 0 0 24c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-24 24 0c8.8 0 16-7.2 16-16l0-16c0-8.8-7.2-16-16-16l-24 0 0-24c0-8.8-7.2-16-16-16l-16 0z"]},Db={prefix:"fas",iconName:"link",icon:[640,512,[128279,"chain"],"f0c1","M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"]},Lb=Db,yT=({isHam:t})=>{const e=()=>{const n=document.querySelector(".header__menu");document.querySelector(".header__hamburger").classList.toggle("active"),n.classList.toggle("active")};return x.jsxs("ul",{className:t?"header__menu-items":"links__items",children:[x.jsx("li",{className:t?"header__menu-items-item":"links__items-item",children:x.jsxs(ri,{to:"/",onClick:t?e:()=>{},children:[x.jsx(cr,{icon:bb}),"ホーム"]})}),x.jsx("li",{className:t?"header__menu-items-item":"links__items-item",children:x.jsxs(ri,{to:"/board",onClick:t?e:()=>{},children:[x.jsx(cr,{icon:kb}),"掲示板"]})}),x.jsx("li",{className:t?"header__menu-items-item":"links__items-item",children:x.jsxs(ri,{to:"/weather",onClick:t?e:()=>{},children:[x.jsx(cr,{icon:Nb}),"天気予報"]})}),x.jsx("li",{className:t?"header__menu-items-item":"links__items-item",children:x.jsxs(ri,{to:"/depression",onClick:t?e:()=>{},children:[x.jsx(cr,{icon:Ob}),"うつ病チェック"]})}),x.jsx("li",{className:t?"header__menu-items-item":"links__items-item",children:x.jsxs("a",{href:"https://github.com/polan6/homepage",onClick:t?e:()=>{},children:[x.jsx(cr,{icon:Lb}),"GitHub"]})}),x.jsx("li",{className:t?"header__menu-items-item":"links__items-item",children:x.jsxs("a",{href:"https://qiita.com/Polan",onClick:t?e:()=>{},children:[x.jsx(cr,{icon:xb}),"Qiita"]})})]})},Mb=()=>{const t=()=>{const e=document.querySelector(".header__menu");document.querySelector(".header__hamburger").classList.toggle("active"),e.classList.toggle("active")};return x.jsxs("div",{className:"header",children:[x.jsx("div",{className:"header__text",children:x.jsx(ri,{to:"/",children:x.jsx("h1",{children:"Polanのホームページ"})})}),x.jsx("div",{className:"header__menu",children:x.jsx(yT,{isHam:!0})}),x.jsxs("button",{className:"header__hamburger",onClick:t,children:[x.jsx("span",{}),x.jsx("span",{}),x.jsx("span",{})]})]})},Vb=()=>{const[t,e]=M.useState("");M.useEffect(()=>{e(n());const r=setInterval(()=>{e(n())},1e3);return()=>{clearInterval(r)}},[]);const n=()=>{const r=new Date(Date.now()+(new Date().getTimezoneOffset()+540)*60*1e3),i=r.getFullYear(),s=("00"+r.getMonth()).slice(-2),o=("00"+r.getHours()).slice(-2),a=("00"+r.getHours()).slice(-2),u=("00"+r.getMinutes()).slice(-2),c=("00"+r.getSeconds()).slice(-2);return`${i}/${s}/${o} ${a}:${u}:${c}`};return x.jsx("footer",{children:x.jsx("h3",{children:t})})},Fb=({count:t})=>x.jsxs("div",{className:"content",children:[x.jsx("h1",{children:"自己紹介"}),x.jsx("div",{children:"名前: Polan"}),x.jsx("div",{children:"好きなこと: コンピュータ・プログラミングの勉強"}),x.jsx("div",{children:"やりたいこと: 執筆活動"}),x.jsxs("div",{className:"links__container",children:[x.jsx("h1",{children:"リンク"}),x.jsx(yT,{isHam:!1})]}),x.jsxs("div",{className:"accessCounter",children:[x.jsx("h1",{children:"アクセス数"}),t]})]});var vv={};/**
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
 */const vT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ub=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},_T={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,w=c&63;u||(w=64,o||(m=64)),r.push(n[d],n[p],n[m],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(vT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ub(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||p==null)throw new jb;const m=s<<2|a>>4;if(r.push(m),c!==64){const w=a<<4&240|c>>2;if(r.push(w),p!==64){const E=c<<6&192|p;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class jb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zb=function(t){const e=vT(t);return _T.encodeByteArray(e,!0)},Vu=function(t){return zb(t).replace(/\./g,"")},wT=function(t){try{return _T.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Bb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $b=()=>Bb().__FIREBASE_DEFAULTS__,qb=()=>{if(typeof process>"u"||typeof vv>"u")return;const t=vv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Hb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&wT(t[1]);return e&&JSON.parse(e)},Cc=()=>{try{return $b()||qb()||Hb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ET=t=>{var e,n;return(n=(e=Cc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Wb=t=>{const e=ET(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},TT=()=>{var t;return(t=Cc())===null||t===void 0?void 0:t.config},IT=t=>{var e;return(e=Cc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Gb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Kb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Vu(JSON.stringify(n)),Vu(JSON.stringify(o)),""].join(".")}/**
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
 */function lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function Yb(){var t;const e=(t=Cc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Xb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ST(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Jb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Zb(){const t=lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function eN(){return!Yb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function AT(){try{return typeof indexedDB=="object"}catch{return!1}}function RT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function tN(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const nN="FirebaseError";class sn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=nN,Object.setPrototypeOf(this,sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xi.prototype.create)}}class xi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?rN(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new sn(i,a,r)}}function rN(t,e){return t.replace(iN,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const iN=/\{\$([^}]+)}/g;function sN(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function da(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(_v(s)&&_v(o)){if(!da(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function _v(t){return t!==null&&typeof t=="object"}/**
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
 */function Oa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function oN(t,e){const n=new aN(t,e);return n.subscribe.bind(n)}class aN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");lN(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=td),i.error===void 0&&(i.error=td),i.complete===void 0&&(i.complete=td);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function td(){}/**
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
 */const uN=1e3,cN=2,hN=4*60*60*1e3,dN=.5;function wv(t,e=uN,n=cN){const r=e*Math.pow(n,t),i=Math.round(dN*r*(Math.random()-.5)*2);return Math.min(hN,r+i)}/**
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
 */class fN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Gb;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mN(e))try{this.getOrInitializeService({instanceIdentifier:Zr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Zr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zr){return this.instances.has(e)}getOptions(e=Zr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:pN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zr){return this.component?this.component.multipleInstances?e:Zr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pN(t){return t===Zr?void 0:t}function mN(t){return t.instantiationMode==="EAGER"}/**
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
 */class gN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new fN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const yN={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},vN=se.INFO,_N={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},wN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=_N[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pc{constructor(e){this.name=e,this._logLevel=vN,this._logHandler=wN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const EN=(t,e)=>e.some(n=>t instanceof n);let Ev,Tv;function TN(){return Ev||(Ev=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function IN(){return Tv||(Tv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const CT=new WeakMap,Of=new WeakMap,PT=new WeakMap,nd=new WeakMap,Em=new WeakMap;function SN(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Cr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&CT.set(n,t)}).catch(()=>{}),Em.set(e,t),e}function AN(t){if(Of.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Of.set(t,e)}let Df={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Of.get(t);if(e==="objectStoreNames")return t.objectStoreNames||PT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Cr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function RN(t){Df=t(Df)}function CN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(rd(this),e,...n);return PT.set(r,e.sort?e.sort():[e]),Cr(r)}:IN().includes(t)?function(...e){return t.apply(rd(this),e),Cr(CT.get(this))}:function(...e){return Cr(t.apply(rd(this),e))}}function PN(t){return typeof t=="function"?CN(t):(t instanceof IDBTransaction&&AN(t),EN(t,TN())?new Proxy(t,Df):t)}function Cr(t){if(t instanceof IDBRequest)return SN(t);if(nd.has(t))return nd.get(t);const e=PN(t);return e!==t&&(nd.set(t,e),Em.set(e,t)),e}const rd=t=>Em.get(t);function kT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Cr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Cr(o.result),u.oldVersion,u.newVersion,Cr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const kN=["get","getKey","getAll","getAllKeys","count"],xN=["put","add","delete","clear"],id=new Map;function Iv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(id.get(e))return id.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=xN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||kN.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return id.set(e,s),s}RN(t=>({...t,get:(e,n,r)=>Iv(e,n)||t.get(e,n,r),has:(e,n)=>!!Iv(e,n)||t.has(e,n)}));/**
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
 */class bN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(NN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function NN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Lf="@firebase/app",Sv="0.10.16";/**
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
 */const Kn=new Pc("@firebase/app"),ON="@firebase/app-compat",DN="@firebase/analytics-compat",LN="@firebase/analytics",MN="@firebase/app-check-compat",VN="@firebase/app-check",FN="@firebase/auth",UN="@firebase/auth-compat",jN="@firebase/database",zN="@firebase/data-connect",BN="@firebase/database-compat",$N="@firebase/functions",qN="@firebase/functions-compat",HN="@firebase/installations",WN="@firebase/installations-compat",GN="@firebase/messaging",KN="@firebase/messaging-compat",QN="@firebase/performance",YN="@firebase/performance-compat",XN="@firebase/remote-config",JN="@firebase/remote-config-compat",ZN="@firebase/storage",eO="@firebase/storage-compat",tO="@firebase/firestore",nO="@firebase/vertexai",rO="@firebase/firestore-compat",iO="firebase",sO="11.0.2";/**
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
 */const Mf="[DEFAULT]",oO={[Lf]:"fire-core",[ON]:"fire-core-compat",[LN]:"fire-analytics",[DN]:"fire-analytics-compat",[VN]:"fire-app-check",[MN]:"fire-app-check-compat",[FN]:"fire-auth",[UN]:"fire-auth-compat",[jN]:"fire-rtdb",[zN]:"fire-data-connect",[BN]:"fire-rtdb-compat",[$N]:"fire-fn",[qN]:"fire-fn-compat",[HN]:"fire-iid",[WN]:"fire-iid-compat",[GN]:"fire-fcm",[KN]:"fire-fcm-compat",[QN]:"fire-perf",[YN]:"fire-perf-compat",[XN]:"fire-rc",[JN]:"fire-rc-compat",[ZN]:"fire-gcs",[eO]:"fire-gcs-compat",[tO]:"fire-fst",[rO]:"fire-fst-compat",[nO]:"fire-vertex","fire-js":"fire-js",[iO]:"fire-js-all"};/**
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
 */const Fu=new Map,aO=new Map,Vf=new Map;function Av(t,e){try{t.container.addComponent(e)}catch(n){Kn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _n(t){const e=t.name;if(Vf.has(e))return Kn.debug(`There were multiple attempts to register component ${e}.`),!1;Vf.set(e,t);for(const n of Fu.values())Av(n,t);for(const n of aO.values())Av(n,t);return!0}function bi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ln(t){return t.settings!==void 0}/**
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
 */const lO={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pr=new xi("app","Firebase",lO);/**
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
 */class uO{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pr.create("app-deleted",{appName:this._name})}}/**
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
 */const Fs=sO;function xT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Mf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Pr.create("bad-app-name",{appName:String(i)});if(n||(n=TT()),!n)throw Pr.create("no-options");const s=Fu.get(i);if(s){if(da(n,s.options)&&da(r,s.config))return s;throw Pr.create("duplicate-app",{appName:i})}const o=new gN(i);for(const u of Vf.values())o.addComponent(u);const a=new uO(n,r,o);return Fu.set(i,a),a}function Tm(t=Mf){const e=Fu.get(t);if(!e&&t===Mf&&TT())return xT();if(!e)throw Pr.create("no-app",{appName:t});return e}function Bt(t,e,n){var r;let i=(r=oO[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kn.warn(a.join(" "));return}_n(new nn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const cO="firebase-heartbeat-database",hO=1,fa="firebase-heartbeat-store";let sd=null;function bT(){return sd||(sd=kT(cO,hO,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(fa)}catch(n){console.warn(n)}}}}).catch(t=>{throw Pr.create("idb-open",{originalErrorMessage:t.message})})),sd}async function dO(t){try{const n=(await bT()).transaction(fa),r=await n.objectStore(fa).get(NT(t));return await n.done,r}catch(e){if(e instanceof sn)Kn.warn(e.message);else{const n=Pr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Kn.warn(n.message)}}}async function Rv(t,e){try{const r=(await bT()).transaction(fa,"readwrite");await r.objectStore(fa).put(e,NT(t)),await r.done}catch(n){if(n instanceof sn)Kn.warn(n.message);else{const r=Pr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Kn.warn(r.message)}}}function NT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const fO=1024,pO=30*24*60*60*1e3;class mO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yO(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Cv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=pO}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Kn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Cv(),{heartbeatsToSend:r,unsentEntries:i}=gO(this._heartbeatsCache.heartbeats),s=Vu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Kn.warn(n),""}}}function Cv(){return new Date().toISOString().substring(0,10)}function gO(t,e=fO){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Pv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Pv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class yO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return AT()?RT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await dO(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Rv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Rv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Pv(t){return Vu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function vO(t){_n(new nn("platform-logger",e=>new bN(e),"PRIVATE")),_n(new nn("heartbeat",e=>new mO(e),"PRIVATE")),Bt(Lf,Sv,t),Bt(Lf,Sv,"esm2017"),Bt("fire-js","")}vO("");var _O="firebase",wO="11.0.2";/**
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
 */Bt(_O,wO,"app");function Im(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function OT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const EO=OT,DT=new xi("auth","Firebase",OT());/**
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
 */const Uu=new Pc("@firebase/auth");function TO(t,...e){Uu.logLevel<=se.WARN&&Uu.warn(`Auth (${Fs}): ${t}`,...e)}function Yl(t,...e){Uu.logLevel<=se.ERROR&&Uu.error(`Auth (${Fs}): ${t}`,...e)}/**
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
 */function wn(t,...e){throw Am(t,...e)}function en(t,...e){return Am(t,...e)}function Sm(t,e,n){const r=Object.assign(Object.assign({},EO()),{[e]:n});return new xi("auth","Firebase",r).create(e,{appName:t.name})}function hi(t){return Sm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function IO(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&wn(t,"argument-error"),Sm(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Am(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return DT.create(t,...e)}function X(t,e,...n){if(!t)throw Am(e,...n)}function Mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Yl(e),new Error(e)}function Qn(t,e){t||Mn(e)}/**
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
 */function Ff(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function SO(){return kv()==="http:"||kv()==="https:"}function kv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function AO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(SO()||ST()||"connection"in navigator)?navigator.onLine:!0}function RO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Da{constructor(e,n){this.shortDelay=e,this.longDelay=n,Qn(n>e,"Short delay should be less than long delay!"),this.isMobile=Qb()||Jb()}get(){return AO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Rm(t,e){Qn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class LT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const CO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const PO=new Da(3e4,6e4);function Cm(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Us(t,e,n,r,i={}){return MT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Oa(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return Xb()||(c.referrerPolicy="no-referrer"),LT.fetch()(VT(t,t.config.apiHost,n,a),c)})}async function MT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},CO),e);try{const i=new xO(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Pl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Pl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Pl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Pl(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Sm(t,d,c);wn(t,d)}}catch(i){if(i instanceof sn)throw i;wn(t,"network-request-failed",{message:String(i)})}}async function kO(t,e,n,r,i={}){const s=await Us(t,e,n,r,i);return"mfaPendingCredential"in s&&wn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function VT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Rm(t.config,i):`${t.config.apiScheme}://${i}`}class xO{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(en(this.auth,"network-request-failed")),PO.get())})}}function Pl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=en(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function bO(t,e){return Us(t,"POST","/v1/accounts:delete",e)}async function FT(t,e){return Us(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function jo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function NO(t,e=!1){const n=ft(t),r=await n.getIdToken(e),i=Pm(r);X(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:jo(od(i.auth_time)),issuedAtTime:jo(od(i.iat)),expirationTime:jo(od(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function od(t){return Number(t)*1e3}function Pm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Yl("JWT malformed, contained fewer than 3 sections"),null;try{const i=wT(n);return i?JSON.parse(i):(Yl("Failed to decode base64 JWT payload"),null)}catch(i){return Yl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function xv(t){const e=Pm(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function pa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof sn&&OO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function OO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class DO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Uf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=jo(this.lastLoginAt),this.creationTime=jo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ju(t){var e;const n=t.auth,r=await t.getIdToken(),i=await pa(t,FT(n,{idToken:r}));X(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?UT(s.providerUserInfo):[],a=MO(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Uf(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function LO(t){const e=ft(t);await ju(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function MO(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function UT(t){return t.map(e=>{var{providerId:n}=e,r=Im(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function VO(t,e){const n=await MT(t,{},async()=>{const r=Oa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=VT(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",LT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function FO(t,e){return Us(t,"POST","/v2/accounts:revokeToken",Cm(t,e))}/**
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
 */class ds{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=xv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await VO(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ds;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(X(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(X(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ds,this.toJSON())}_performRefresh(){return Mn("not implemented")}}/**
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
 */function or(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Vn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Im(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new DO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Uf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await pa(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return NO(this,e)}reload(){return LO(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Vn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ju(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ln(this.auth.app))return Promise.reject(hi(this.auth));const e=await this.getIdToken();return await pa(this,bO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,w=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,_=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:I,emailVerified:O,isAnonymous:V,providerData:j,stsTokenManager:A}=n;X(I&&A,e,"internal-error");const v=ds.fromJSON(this.name,A);X(typeof I=="string",e,"internal-error"),or(p,e.name),or(m,e.name),X(typeof O=="boolean",e,"internal-error"),X(typeof V=="boolean",e,"internal-error"),or(w,e.name),or(E,e.name),or(T,e.name),or(R,e.name),or(_,e.name),or(y,e.name);const S=new Vn({uid:I,auth:e,email:m,emailVerified:O,displayName:p,isAnonymous:V,photoURL:E,phoneNumber:w,tenantId:T,stsTokenManager:v,createdAt:_,lastLoginAt:y});return j&&Array.isArray(j)&&(S.providerData=j.map(C=>Object.assign({},C))),R&&(S._redirectEventId=R),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new ds;i.updateFromServerResponse(n);const s=new Vn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ju(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];X(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?UT(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new ds;a.updateFromIdToken(r);const u=new Vn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Uf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const bv=new Map;function Fn(t){Qn(t instanceof Function,"Expected a class definition");let e=bv.get(t);return e?(Qn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,bv.set(t,e),e)}/**
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
 */class jT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}jT.type="NONE";const Nv=jT;/**
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
 */function Xl(t,e,n){return`firebase:${t}:${e}:${n}`}class fs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Xl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Xl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new fs(Fn(Nv),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Fn(Nv);const o=Xl(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const p=Vn._fromJSON(e,d);c!==s&&(a=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new fs(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new fs(s,e,r))}}/**
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
 */function Ov(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(WT(e))return"Blackberry";if(GT(e))return"Webos";if(BT(e))return"Safari";if((e.includes("chrome/")||$T(e))&&!e.includes("edge/"))return"Chrome";if(HT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function zT(t=lt()){return/firefox\//i.test(t)}function BT(t=lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $T(t=lt()){return/crios\//i.test(t)}function qT(t=lt()){return/iemobile/i.test(t)}function HT(t=lt()){return/android/i.test(t)}function WT(t=lt()){return/blackberry/i.test(t)}function GT(t=lt()){return/webos/i.test(t)}function km(t=lt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function UO(t=lt()){var e;return km(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function jO(){return Zb()&&document.documentMode===10}function KT(t=lt()){return km(t)||HT(t)||GT(t)||WT(t)||/windows phone/i.test(t)||qT(t)}/**
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
 */function QT(t,e=[]){let n;switch(t){case"Browser":n=Ov(lt());break;case"Worker":n=`${Ov(lt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Fs}/${r}`}/**
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
 */class zO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function BO(t,e={}){return Us(t,"GET","/v2/passwordPolicy",Cm(t,e))}/**
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
 */const $O=6;class qO{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:$O,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class HO{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dv(this),this.idTokenSubscription=new Dv(this),this.beforeStateQueue=new zO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=DT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Fn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await fs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await FT(this,{idToken:e}),r=await Vn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ln(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ju(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=RO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ln(this.app))return Promise.reject(hi(this));const n=e?ft(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ln(this.app)?Promise.reject(hi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ln(this.app)?Promise.reject(hi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await BO(this),n=new qO(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new xi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await FO(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Fn(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await fs.create(this,[Fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=QT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&TO(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function kc(t){return ft(t)}class Dv{constructor(e){this.auth=e,this.observer=null,this.addObserver=oN(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let xm={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function WO(t){xm=t}function GO(t){return xm.loadJS(t)}function KO(){return xm.gapiScript}function QO(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function YO(t,e){const n=bi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(da(s,e??{}))return i;wn(i,"already-initialized")}return n.initialize({options:e})}function XO(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function JO(t,e,n){const r=kc(t);X(r._canInitEmulator,r,"emulator-config-failed"),X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=YT(e),{host:o,port:a}=ZO(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),eD()}function YT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ZO(t){const e=YT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Lv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Lv(o)}}}function Lv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function eD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class XT{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Mn("not implemented")}_getIdTokenResponse(e){return Mn("not implemented")}_linkToIdToken(e,n){return Mn("not implemented")}_getReauthenticationResolver(e){return Mn("not implemented")}}/**
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
 */async function ps(t,e){return kO(t,"POST","/v1/accounts:signInWithIdp",Cm(t,e))}/**
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
 */const tD="http://localhost";class Ei extends XT{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ei(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Im(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ei(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ps(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ps(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ps(e,n)}buildRequest(){const e={requestUri:tD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Oa(n)}return e}}/**
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
 */class La extends bm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class fr extends La{constructor(){super("facebook.com")}static credential(e){return Ei._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fr.credential(e.oauthAccessToken)}catch{return null}}}fr.FACEBOOK_SIGN_IN_METHOD="facebook.com";fr.PROVIDER_ID="facebook.com";/**
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
 */class Nn extends La{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ei._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Nn.credential(n,r)}catch{return null}}}Nn.GOOGLE_SIGN_IN_METHOD="google.com";Nn.PROVIDER_ID="google.com";/**
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
 */class pr extends La{constructor(){super("github.com")}static credential(e){return Ei._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pr.credential(e.oauthAccessToken)}catch{return null}}}pr.GITHUB_SIGN_IN_METHOD="github.com";pr.PROVIDER_ID="github.com";/**
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
 */class mr extends La{constructor(){super("twitter.com")}static credential(e,n){return Ei._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return mr.credential(n,r)}catch{return null}}}mr.TWITTER_SIGN_IN_METHOD="twitter.com";mr.PROVIDER_ID="twitter.com";/**
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
 */class Ss{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Vn._fromIdTokenResponse(e,r,i),o=Mv(r);return new Ss({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Mv(r);return new Ss({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Mv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class zu extends sn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,zu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new zu(e,n,r,i)}}function JT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?zu._fromErrorAndOperation(t,s,e,r):s})}async function nD(t,e,n=!1){const r=await pa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ss._forOperation(t,"link",r)}/**
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
 */async function rD(t,e,n=!1){const{auth:r}=t;if(Ln(r.app))return Promise.reject(hi(r));const i="reauthenticate";try{const s=await pa(t,JT(r,i,e,t),n);X(s.idToken,r,"internal-error");const o=Pm(s.idToken);X(o,r,"internal-error");const{sub:a}=o;return X(t.uid===a,r,"user-mismatch"),Ss._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&wn(r,"user-mismatch"),s}}/**
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
 */async function iD(t,e,n=!1){if(Ln(t.app))return Promise.reject(hi(t));const r="signIn",i=await JT(t,r,e),s=await Ss._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function sD(t,e,n,r){return ft(t).onIdTokenChanged(e,n,r)}function oD(t,e,n){return ft(t).beforeAuthStateChanged(e,n)}function aD(t){return ft(t).signOut()}const Bu="__sak";/**
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
 */class ZT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Bu,"1"),this.storage.removeItem(Bu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const lD=1e3,uD=10;class eI extends ZT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=KT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);jO()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,uD):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},lD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}eI.type="LOCAL";const cD=eI;/**
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
 */class tI extends ZT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}tI.type="SESSION";const nI=tI;/**
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
 */function hD(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class xc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new xc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await hD(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xc.receivers=[];/**
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
 */class dD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=Nm("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function mn(){return window}function fD(t){mn().location.href=t}/**
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
 */function rI(){return typeof mn().WorkerGlobalScope<"u"&&typeof mn().importScripts=="function"}async function pD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function gD(){return rI()?self:null}/**
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
 */const iI="firebaseLocalStorageDb",yD=1,$u="firebaseLocalStorage",sI="fbase_key";class Ma{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function bc(t,e){return t.transaction([$u],e?"readwrite":"readonly").objectStore($u)}function vD(){const t=indexedDB.deleteDatabase(iI);return new Ma(t).toPromise()}function jf(){const t=indexedDB.open(iI,yD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore($u,{keyPath:sI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains($u)?e(r):(r.close(),await vD(),e(await jf()))})})}async function Vv(t,e,n){const r=bc(t,!0).put({[sI]:e,value:n});return new Ma(r).toPromise()}async function _D(t,e){const n=bc(t,!1).get(e),r=await new Ma(n).toPromise();return r===void 0?null:r.value}function Fv(t,e){const n=bc(t,!0).delete(e);return new Ma(n).toPromise()}const wD=800,ED=3;class oI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ED)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xc._getInstance(gD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await pD(),!this.activeServiceWorker)return;this.sender=new dD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jf();return await Vv(e,Bu,"1"),await Fv(e,Bu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Vv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>_D(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Fv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=bc(i,!1).getAll();return new Ma(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}oI.type="LOCAL";const TD=oI;new Da(3e4,6e4);/**
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
 */function aI(t,e){return e?Fn(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Om extends XT{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ps(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ps(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ps(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ID(t){return iD(t.auth,new Om(t),t.bypassAuthState)}function SD(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),rD(n,new Om(t),t.bypassAuthState)}async function AD(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),nD(n,new Om(t),t.bypassAuthState)}/**
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
 */class lI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ID;case"linkViaPopup":case"linkViaRedirect":return AD;case"reauthViaPopup":case"reauthViaRedirect":return SD;default:wn(this.auth,"internal-error")}}resolve(e){Qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const RD=new Da(2e3,1e4);async function CD(t,e,n){if(Ln(t.app))return Promise.reject(en(t,"operation-not-supported-in-this-environment"));const r=kc(t);IO(t,e,bm);const i=aI(r,n);return new si(r,"signInViaPopup",e,i).executeNotNull()}class si extends lI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,si.currentPopupAction&&si.currentPopupAction.cancel(),si.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){Qn(this.filter.length===1,"Popup operations only handle one event");const e=Nm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(en(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(en(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,si.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(en(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,RD.get())};e()}}si.currentPopupAction=null;/**
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
 */const PD="pendingRedirect",Jl=new Map;class kD extends lI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Jl.get(this.auth._key());if(!e){try{const r=await xD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Jl.set(this.auth._key(),e)}return this.bypassAuthState||Jl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xD(t,e){const n=OD(e),r=ND(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function bD(t,e){Jl.set(t._key(),e)}function ND(t){return Fn(t._redirectPersistence)}function OD(t){return Xl(PD,t.config.apiKey,t.name)}async function DD(t,e,n=!1){if(Ln(t.app))return Promise.reject(hi(t));const r=kc(t),i=aI(r,e),o=await new kD(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const LD=10*60*1e3;class MD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!VD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!uI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(en(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=LD&&this.cachedEventUids.clear(),this.cachedEventUids.has(Uv(e))}saveEventToCache(e){this.cachedEventUids.add(Uv(e)),this.lastProcessedEventTime=Date.now()}}function Uv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function uI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function VD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uI(t);default:return!1}}/**
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
 */async function FD(t,e={}){return Us(t,"GET","/v1/projects",e)}/**
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
 */const UD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jD=/^https?/;async function zD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await FD(t);for(const n of e)try{if(BD(n))return}catch{}wn(t,"unauthorized-domain")}function BD(t){const e=Ff(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!jD.test(n))return!1;if(UD.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const $D=new Da(3e4,6e4);function jv(){const t=mn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function qD(t){return new Promise((e,n)=>{var r,i,s;function o(){jv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{jv(),n(en(t,"network-request-failed"))},timeout:$D.get()})}if(!((i=(r=mn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=mn().gapi)===null||s===void 0)&&s.load)o();else{const a=QO("iframefcb");return mn()[a]=()=>{gapi.load?o():n(en(t,"network-request-failed"))},GO(`${KO()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Zl=null,e})}let Zl=null;function HD(t){return Zl=Zl||qD(t),Zl}/**
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
 */const WD=new Da(5e3,15e3),GD="__/auth/iframe",KD="emulator/auth/iframe",QD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},YD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function XD(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Rm(e,KD):`https://${t.config.authDomain}/${GD}`,r={apiKey:e.apiKey,appName:t.name,v:Fs},i=YD.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Oa(r).slice(1)}`}async function JD(t){const e=await HD(t),n=mn().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:XD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:QD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=en(t,"network-request-failed"),a=mn().setTimeout(()=>{s(o)},WD.get());function u(){mn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const ZD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},eL=500,tL=600,nL="_blank",rL="http://localhost";class zv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function iL(t,e,n,r=eL,i=tL){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},ZD),{width:r.toString(),height:i.toString(),top:s,left:o}),c=lt().toLowerCase();n&&(a=$T(c)?nL:n),zT(c)&&(e=e||rL,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[w,E])=>`${m}${w}=${E},`,"");if(UO(c)&&a!=="_self")return sL(e||"",a),new zv(null);const p=window.open(e||"",a,d);X(p,t,"popup-blocked");try{p.focus()}catch{}return new zv(p)}function sL(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const oL="__/auth/handler",aL="emulator/auth/handler",lL=encodeURIComponent("fac");async function Bv(t,e,n,r,i,s){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Fs,eventId:i};if(e instanceof bm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",sN(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof La){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const u=await t._getAppCheckToken(),c=u?`#${lL}=${encodeURIComponent(u)}`:"";return`${uL(t)}?${Oa(a).slice(1)}${c}`}function uL({config:t}){return t.emulator?Rm(t,aL):`https://${t.authDomain}/${oL}`}/**
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
 */const ad="webStorageSupport";class cL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nI,this._completeRedirectFn=DD,this._overrideRedirectResult=bD}async _openPopup(e,n,r,i){var s;Qn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Bv(e,n,r,Ff(),i);return iL(e,o,Nm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Bv(e,n,r,Ff(),i);return fD(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Qn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await JD(e),r=new MD(e);return n.register("authEvent",i=>(X(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ad,{type:ad},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ad];o!==void 0&&n(!!o),wn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=zD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return KT()||BT()||km()}}const hL=cL;var $v="@firebase/auth",qv="1.8.1";/**
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
 */class dL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function fL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function pL(t){_n(new nn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:QT(t)},c=new HO(r,i,s,u);return XO(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),_n(new nn("auth-internal",e=>{const n=kc(e.getProvider("auth").getImmediate());return(r=>new dL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bt($v,qv,fL(t)),Bt($v,qv,"esm2017")}/**
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
 */const mL=5*60,gL=IT("authIdTokenMaxAge")||mL;let Hv=null;const yL=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>gL)return;const i=n==null?void 0:n.token;Hv!==i&&(Hv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function vL(t=Tm()){const e=bi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=YO(t,{popupRedirectResolver:hL,persistence:[TD,cD,nI]}),r=IT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=yL(s.toString());oD(n,o,()=>o(n.currentUser)),sD(n,a=>o(a))}}const i=ET("auth");return i&&JO(n,`http://${i}`),n}function _L(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}WO({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=en("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",_L().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});pL("Browser");const cI="@firebase/installations",Dm="0.6.11";/**
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
 */const hI=1e4,dI=`w:${Dm}`,fI="FIS_v2",wL="https://firebaseinstallations.googleapis.com/v1",EL=60*60*1e3,TL="installations",IL="Installations";/**
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
 */const SL={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ti=new xi(TL,IL,SL);function pI(t){return t instanceof sn&&t.code.includes("request-failed")}/**
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
 */function mI({projectId:t}){return`${wL}/projects/${t}/installations`}function gI(t){return{token:t.token,requestStatus:2,expiresIn:RL(t.expiresIn),creationTime:Date.now()}}async function yI(t,e){const r=(await e.json()).error;return Ti.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function vI({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function AL(t,{refreshToken:e}){const n=vI(t);return n.append("Authorization",CL(e)),n}async function _I(t){const e=await t();return e.status>=500&&e.status<600?t():e}function RL(t){return Number(t.replace("s","000"))}function CL(t){return`${fI} ${t}`}/**
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
 */async function PL({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=mI(t),i=vI(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:fI,appId:t.appId,sdkVersion:dI},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await _I(()=>fetch(r,a));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:gI(c.authToken)}}else throw await yI("Create Installation",u)}/**
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
 */function wI(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function kL(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const xL=/^[cdef][\w-]{21}$/,zf="";function bL(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=NL(t);return xL.test(n)?n:zf}catch{return zf}}function NL(t){return kL(t).substr(0,22)}/**
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
 */function Nc(t){return`${t.appName}!${t.appId}`}/**
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
 */const EI=new Map;function TI(t,e){const n=Nc(t);II(n,e),OL(n,e)}function II(t,e){const n=EI.get(t);if(n)for(const r of n)r(e)}function OL(t,e){const n=DL();n&&n.postMessage({key:t,fid:e}),LL()}let oi=null;function DL(){return!oi&&"BroadcastChannel"in self&&(oi=new BroadcastChannel("[Firebase] FID Change"),oi.onmessage=t=>{II(t.data.key,t.data.fid)}),oi}function LL(){EI.size===0&&oi&&(oi.close(),oi=null)}/**
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
 */const ML="firebase-installations-database",VL=1,Ii="firebase-installations-store";let ld=null;function Lm(){return ld||(ld=kT(ML,VL,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ii)}}})),ld}async function qu(t,e){const n=Nc(t),i=(await Lm()).transaction(Ii,"readwrite"),s=i.objectStore(Ii),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&TI(t,e.fid),e}async function SI(t){const e=Nc(t),r=(await Lm()).transaction(Ii,"readwrite");await r.objectStore(Ii).delete(e),await r.done}async function Oc(t,e){const n=Nc(t),i=(await Lm()).transaction(Ii,"readwrite"),s=i.objectStore(Ii),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&TI(t,a.fid),a}/**
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
 */async function Mm(t){let e;const n=await Oc(t.appConfig,r=>{const i=FL(r),s=UL(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===zf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function FL(t){const e=t||{fid:bL(),registrationStatus:0};return AI(e)}function UL(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ti.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=jL(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:zL(t)}:{installationEntry:e}}async function jL(t,e){try{const n=await PL(t,e);return qu(t.appConfig,n)}catch(n){throw pI(n)&&n.customData.serverCode===409?await SI(t.appConfig):await qu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function zL(t){let e=await Wv(t.appConfig);for(;e.registrationStatus===1;)await wI(100),e=await Wv(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Mm(t);return r||n}return e}function Wv(t){return Oc(t,e=>{if(!e)throw Ti.create("installation-not-found");return AI(e)})}function AI(t){return BL(t)?{fid:t.fid,registrationStatus:0}:t}function BL(t){return t.registrationStatus===1&&t.registrationTime+hI<Date.now()}/**
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
 */async function $L({appConfig:t,heartbeatServiceProvider:e},n){const r=qL(t,n),i=AL(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:dI,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await _I(()=>fetch(r,a));if(u.ok){const c=await u.json();return gI(c)}else throw await yI("Generate Auth Token",u)}function qL(t,{fid:e}){return`${mI(t)}/${e}/authTokens:generate`}/**
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
 */async function Vm(t,e=!1){let n;const r=await Oc(t.appConfig,s=>{if(!RI(s))throw Ti.create("not-registered");const o=s.authToken;if(!e&&GL(o))return s;if(o.requestStatus===1)return n=HL(t,e),s;{if(!navigator.onLine)throw Ti.create("app-offline");const a=QL(s);return n=WL(t,a),a}});return n?await n:r.authToken}async function HL(t,e){let n=await Gv(t.appConfig);for(;n.authToken.requestStatus===1;)await wI(100),n=await Gv(t.appConfig);const r=n.authToken;return r.requestStatus===0?Vm(t,e):r}function Gv(t){return Oc(t,e=>{if(!RI(e))throw Ti.create("not-registered");const n=e.authToken;return YL(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function WL(t,e){try{const n=await $L(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await qu(t.appConfig,r),n}catch(n){if(pI(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await SI(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await qu(t.appConfig,r)}throw n}}function RI(t){return t!==void 0&&t.registrationStatus===2}function GL(t){return t.requestStatus===2&&!KL(t)}function KL(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+EL}function QL(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function YL(t){return t.requestStatus===1&&t.requestTime+hI<Date.now()}/**
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
 */async function XL(t){const e=t,{installationEntry:n,registrationPromise:r}=await Mm(e);return r?r.catch(console.error):Vm(e).catch(console.error),n.fid}/**
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
 */async function JL(t,e=!1){const n=t;return await ZL(n),(await Vm(n,e)).token}async function ZL(t){const{registrationPromise:e}=await Mm(t);e&&await e}/**
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
 */function e4(t){if(!t||!t.options)throw ud("App Configuration");if(!t.name)throw ud("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ud(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ud(t){return Ti.create("missing-app-config-values",{valueName:t})}/**
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
 */const CI="installations",t4="installations-internal",n4=t=>{const e=t.getProvider("app").getImmediate(),n=e4(e),r=bi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},r4=t=>{const e=t.getProvider("app").getImmediate(),n=bi(e,CI).getImmediate();return{getId:()=>XL(n),getToken:i=>JL(n,i)}};function i4(){_n(new nn(CI,n4,"PUBLIC")),_n(new nn(t4,r4,"PRIVATE"))}i4();Bt(cI,Dm);Bt(cI,Dm,"esm2017");/**
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
 */const Hu="analytics",s4="firebase_id",o4="origin",a4=60*1e3,l4="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Fm="https://www.googletagmanager.com/gtag/js";/**
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
 */const Tt=new Pc("@firebase/analytics");/**
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
 */const u4={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},kt=new xi("analytics","Analytics",u4);/**
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
 */function c4(t){if(!t.startsWith(Fm)){const e=kt.create("invalid-gtag-resource",{gtagURL:t});return Tt.warn(e.message),""}return t}function PI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function h4(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function d4(t,e){const n=h4("firebase-js-sdk-policy",{createScriptURL:c4}),r=document.createElement("script"),i=`${Fm}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function f4(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function p4(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await PI(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(a){Tt.error(a)}t("config",i,s)}async function m4(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await PI(n);for(const u of o){const c=a.find(p=>p.measurementId===u),d=c&&e[c.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Tt.error(s)}}function g4(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,u]=o;await m4(t,e,n,a,u)}else if(s==="config"){const[a,u]=o;await p4(t,e,n,r,a,u)}else if(s==="consent"){const[a,u]=o;t("consent",a,u)}else if(s==="get"){const[a,u,c]=o;t("get",a,u,c)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){Tt.error(a)}}return i}function y4(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=g4(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function v4(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Fm)&&n.src.includes(t))return n;return null}/**
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
 */const _4=30,w4=1e3;class E4{constructor(e={},n=w4){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const kI=new E4;function T4(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function I4(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:T4(r)},s=l4.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(a=u.error.message)}catch{}throw kt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function S4(t,e=kI,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw kt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw kt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new C4;return setTimeout(async()=>{a.abort()},a4),xI({appId:r,apiKey:i,measurementId:s},o,a,e)}async function xI(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=kI){var s;const{appId:o,measurementId:a}=t;try{await A4(r,e)}catch(u){if(a)return Tt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw u}try{const u=await I4(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!R4(c)){if(i.deleteThrottleMetadata(o),a)return Tt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw u}const d=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?wv(n,i.intervalMillis,_4):wv(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,p),Tt.debug(`Calling attemptFetch again in ${d} millis`),xI(t,p,r,i)}}function A4(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(kt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function R4(t){if(!(t instanceof sn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class C4{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function P4(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function k4(){if(AT())try{await RT()}catch(t){return Tt.warn(kt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Tt.warn(kt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function x4(t,e,n,r,i,s,o){var a;const u=S4(t);u.then(w=>{n[w.measurementId]=w.appId,t.options.measurementId&&w.measurementId!==t.options.measurementId&&Tt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${w.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(w=>Tt.error(w)),e.push(u);const c=k4().then(w=>{if(w)return r.getId()}),[d,p]=await Promise.all([u,c]);v4(s)||d4(s,d.measurementId),i("js",new Date);const m=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return m[o4]="firebase",m.update=!0,p!=null&&(m[s4]=p),i("config",d.measurementId,m),d.measurementId}/**
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
 */class b4{constructor(e){this.app=e}_delete(){return delete zo[this.app.options.appId],Promise.resolve()}}let zo={},Kv=[];const Qv={};let cd="dataLayer",N4="gtag",Yv,bI,Xv=!1;function O4(){const t=[];if(ST()&&t.push("This is a browser extension environment."),tN()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=kt.create("invalid-analytics-context",{errorInfo:e});Tt.warn(n.message)}}function D4(t,e,n){O4();const r=t.options.appId;if(!r)throw kt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Tt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw kt.create("no-api-key");if(zo[r]!=null)throw kt.create("already-exists",{id:r});if(!Xv){f4(cd);const{wrappedGtag:s,gtagCore:o}=y4(zo,Kv,Qv,cd,N4);bI=s,Yv=o,Xv=!0}return zo[r]=x4(t,Kv,Qv,e,Yv,cd,n),new b4(t)}function L4(t=Tm()){t=ft(t);const e=bi(t,Hu);return e.isInitialized()?e.getImmediate():M4(t)}function M4(t,e={}){const n=bi(t,Hu);if(n.isInitialized()){const i=n.getImmediate();if(da(e,n.getOptions()))return i;throw kt.create("already-initialized")}return n.initialize({options:e})}function V4(t,e,n,r){t=ft(t),P4(bI,zo[t.app.options.appId],e,n,r).catch(i=>Tt.error(i))}const Jv="@firebase/analytics",Zv="0.10.10";function F4(){_n(new nn(Hu,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return D4(r,i,n)},"PUBLIC")),_n(new nn("analytics-internal",t,"PRIVATE")),Bt(Jv,Zv),Bt(Jv,Zv,"esm2017");function t(e){try{const n=e.getProvider(Hu).getImmediate();return{logEvent:(r,i,s)=>V4(n,r,i,s)}}catch(n){throw kt.create("interop-component-reg-failed",{reason:n})}}}F4();var e_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var di,NI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,v){function S(){}S.prototype=v.prototype,A.D=v.prototype,A.prototype=new S,A.prototype.constructor=A,A.C=function(C,k,N){for(var P=Array(arguments.length-2),Mt=2;Mt<arguments.length;Mt++)P[Mt-2]=arguments[Mt];return v.prototype[k].apply(C,P)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(A,v,S){S||(S=0);var C=Array(16);if(typeof v=="string")for(var k=0;16>k;++k)C[k]=v.charCodeAt(S++)|v.charCodeAt(S++)<<8|v.charCodeAt(S++)<<16|v.charCodeAt(S++)<<24;else for(k=0;16>k;++k)C[k]=v[S++]|v[S++]<<8|v[S++]<<16|v[S++]<<24;v=A.g[0],S=A.g[1],k=A.g[2];var N=A.g[3],P=v+(N^S&(k^N))+C[0]+3614090360&4294967295;v=S+(P<<7&4294967295|P>>>25),P=N+(k^v&(S^k))+C[1]+3905402710&4294967295,N=v+(P<<12&4294967295|P>>>20),P=k+(S^N&(v^S))+C[2]+606105819&4294967295,k=N+(P<<17&4294967295|P>>>15),P=S+(v^k&(N^v))+C[3]+3250441966&4294967295,S=k+(P<<22&4294967295|P>>>10),P=v+(N^S&(k^N))+C[4]+4118548399&4294967295,v=S+(P<<7&4294967295|P>>>25),P=N+(k^v&(S^k))+C[5]+1200080426&4294967295,N=v+(P<<12&4294967295|P>>>20),P=k+(S^N&(v^S))+C[6]+2821735955&4294967295,k=N+(P<<17&4294967295|P>>>15),P=S+(v^k&(N^v))+C[7]+4249261313&4294967295,S=k+(P<<22&4294967295|P>>>10),P=v+(N^S&(k^N))+C[8]+1770035416&4294967295,v=S+(P<<7&4294967295|P>>>25),P=N+(k^v&(S^k))+C[9]+2336552879&4294967295,N=v+(P<<12&4294967295|P>>>20),P=k+(S^N&(v^S))+C[10]+4294925233&4294967295,k=N+(P<<17&4294967295|P>>>15),P=S+(v^k&(N^v))+C[11]+2304563134&4294967295,S=k+(P<<22&4294967295|P>>>10),P=v+(N^S&(k^N))+C[12]+1804603682&4294967295,v=S+(P<<7&4294967295|P>>>25),P=N+(k^v&(S^k))+C[13]+4254626195&4294967295,N=v+(P<<12&4294967295|P>>>20),P=k+(S^N&(v^S))+C[14]+2792965006&4294967295,k=N+(P<<17&4294967295|P>>>15),P=S+(v^k&(N^v))+C[15]+1236535329&4294967295,S=k+(P<<22&4294967295|P>>>10),P=v+(k^N&(S^k))+C[1]+4129170786&4294967295,v=S+(P<<5&4294967295|P>>>27),P=N+(S^k&(v^S))+C[6]+3225465664&4294967295,N=v+(P<<9&4294967295|P>>>23),P=k+(v^S&(N^v))+C[11]+643717713&4294967295,k=N+(P<<14&4294967295|P>>>18),P=S+(N^v&(k^N))+C[0]+3921069994&4294967295,S=k+(P<<20&4294967295|P>>>12),P=v+(k^N&(S^k))+C[5]+3593408605&4294967295,v=S+(P<<5&4294967295|P>>>27),P=N+(S^k&(v^S))+C[10]+38016083&4294967295,N=v+(P<<9&4294967295|P>>>23),P=k+(v^S&(N^v))+C[15]+3634488961&4294967295,k=N+(P<<14&4294967295|P>>>18),P=S+(N^v&(k^N))+C[4]+3889429448&4294967295,S=k+(P<<20&4294967295|P>>>12),P=v+(k^N&(S^k))+C[9]+568446438&4294967295,v=S+(P<<5&4294967295|P>>>27),P=N+(S^k&(v^S))+C[14]+3275163606&4294967295,N=v+(P<<9&4294967295|P>>>23),P=k+(v^S&(N^v))+C[3]+4107603335&4294967295,k=N+(P<<14&4294967295|P>>>18),P=S+(N^v&(k^N))+C[8]+1163531501&4294967295,S=k+(P<<20&4294967295|P>>>12),P=v+(k^N&(S^k))+C[13]+2850285829&4294967295,v=S+(P<<5&4294967295|P>>>27),P=N+(S^k&(v^S))+C[2]+4243563512&4294967295,N=v+(P<<9&4294967295|P>>>23),P=k+(v^S&(N^v))+C[7]+1735328473&4294967295,k=N+(P<<14&4294967295|P>>>18),P=S+(N^v&(k^N))+C[12]+2368359562&4294967295,S=k+(P<<20&4294967295|P>>>12),P=v+(S^k^N)+C[5]+4294588738&4294967295,v=S+(P<<4&4294967295|P>>>28),P=N+(v^S^k)+C[8]+2272392833&4294967295,N=v+(P<<11&4294967295|P>>>21),P=k+(N^v^S)+C[11]+1839030562&4294967295,k=N+(P<<16&4294967295|P>>>16),P=S+(k^N^v)+C[14]+4259657740&4294967295,S=k+(P<<23&4294967295|P>>>9),P=v+(S^k^N)+C[1]+2763975236&4294967295,v=S+(P<<4&4294967295|P>>>28),P=N+(v^S^k)+C[4]+1272893353&4294967295,N=v+(P<<11&4294967295|P>>>21),P=k+(N^v^S)+C[7]+4139469664&4294967295,k=N+(P<<16&4294967295|P>>>16),P=S+(k^N^v)+C[10]+3200236656&4294967295,S=k+(P<<23&4294967295|P>>>9),P=v+(S^k^N)+C[13]+681279174&4294967295,v=S+(P<<4&4294967295|P>>>28),P=N+(v^S^k)+C[0]+3936430074&4294967295,N=v+(P<<11&4294967295|P>>>21),P=k+(N^v^S)+C[3]+3572445317&4294967295,k=N+(P<<16&4294967295|P>>>16),P=S+(k^N^v)+C[6]+76029189&4294967295,S=k+(P<<23&4294967295|P>>>9),P=v+(S^k^N)+C[9]+3654602809&4294967295,v=S+(P<<4&4294967295|P>>>28),P=N+(v^S^k)+C[12]+3873151461&4294967295,N=v+(P<<11&4294967295|P>>>21),P=k+(N^v^S)+C[15]+530742520&4294967295,k=N+(P<<16&4294967295|P>>>16),P=S+(k^N^v)+C[2]+3299628645&4294967295,S=k+(P<<23&4294967295|P>>>9),P=v+(k^(S|~N))+C[0]+4096336452&4294967295,v=S+(P<<6&4294967295|P>>>26),P=N+(S^(v|~k))+C[7]+1126891415&4294967295,N=v+(P<<10&4294967295|P>>>22),P=k+(v^(N|~S))+C[14]+2878612391&4294967295,k=N+(P<<15&4294967295|P>>>17),P=S+(N^(k|~v))+C[5]+4237533241&4294967295,S=k+(P<<21&4294967295|P>>>11),P=v+(k^(S|~N))+C[12]+1700485571&4294967295,v=S+(P<<6&4294967295|P>>>26),P=N+(S^(v|~k))+C[3]+2399980690&4294967295,N=v+(P<<10&4294967295|P>>>22),P=k+(v^(N|~S))+C[10]+4293915773&4294967295,k=N+(P<<15&4294967295|P>>>17),P=S+(N^(k|~v))+C[1]+2240044497&4294967295,S=k+(P<<21&4294967295|P>>>11),P=v+(k^(S|~N))+C[8]+1873313359&4294967295,v=S+(P<<6&4294967295|P>>>26),P=N+(S^(v|~k))+C[15]+4264355552&4294967295,N=v+(P<<10&4294967295|P>>>22),P=k+(v^(N|~S))+C[6]+2734768916&4294967295,k=N+(P<<15&4294967295|P>>>17),P=S+(N^(k|~v))+C[13]+1309151649&4294967295,S=k+(P<<21&4294967295|P>>>11),P=v+(k^(S|~N))+C[4]+4149444226&4294967295,v=S+(P<<6&4294967295|P>>>26),P=N+(S^(v|~k))+C[11]+3174756917&4294967295,N=v+(P<<10&4294967295|P>>>22),P=k+(v^(N|~S))+C[2]+718787259&4294967295,k=N+(P<<15&4294967295|P>>>17),P=S+(N^(k|~v))+C[9]+3951481745&4294967295,A.g[0]=A.g[0]+v&4294967295,A.g[1]=A.g[1]+(k+(P<<21&4294967295|P>>>11))&4294967295,A.g[2]=A.g[2]+k&4294967295,A.g[3]=A.g[3]+N&4294967295}r.prototype.u=function(A,v){v===void 0&&(v=A.length);for(var S=v-this.blockSize,C=this.B,k=this.h,N=0;N<v;){if(k==0)for(;N<=S;)i(this,A,N),N+=this.blockSize;if(typeof A=="string"){for(;N<v;)if(C[k++]=A.charCodeAt(N++),k==this.blockSize){i(this,C),k=0;break}}else for(;N<v;)if(C[k++]=A[N++],k==this.blockSize){i(this,C),k=0;break}}this.h=k,this.o+=v},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var v=1;v<A.length-8;++v)A[v]=0;var S=8*this.o;for(v=A.length-8;v<A.length;++v)A[v]=S&255,S/=256;for(this.u(A),A=Array(16),v=S=0;4>v;++v)for(var C=0;32>C;C+=8)A[S++]=this.g[v]>>>C&255;return A};function s(A,v){var S=a;return Object.prototype.hasOwnProperty.call(S,A)?S[A]:S[A]=v(A)}function o(A,v){this.h=v;for(var S=[],C=!0,k=A.length-1;0<=k;k--){var N=A[k]|0;C&&N==v||(S[k]=N,C=!1)}this.g=S}var a={};function u(A){return-128<=A&&128>A?s(A,function(v){return new o([v|0],0>v?-1:0)}):new o([A|0],0>A?-1:0)}function c(A){if(isNaN(A)||!isFinite(A))return p;if(0>A)return R(c(-A));for(var v=[],S=1,C=0;A>=S;C++)v[C]=A/S|0,S*=4294967296;return new o(v,0)}function d(A,v){if(A.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(A.charAt(0)=="-")return R(d(A.substring(1),v));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=c(Math.pow(v,8)),C=p,k=0;k<A.length;k+=8){var N=Math.min(8,A.length-k),P=parseInt(A.substring(k,k+N),v);8>N?(N=c(Math.pow(v,N)),C=C.j(N).add(c(P))):(C=C.j(S),C=C.add(c(P)))}return C}var p=u(0),m=u(1),w=u(16777216);t=o.prototype,t.m=function(){if(T(this))return-R(this).m();for(var A=0,v=1,S=0;S<this.g.length;S++){var C=this.i(S);A+=(0<=C?C:4294967296+C)*v,v*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(E(this))return"0";if(T(this))return"-"+R(this).toString(A);for(var v=c(Math.pow(A,6)),S=this,C="";;){var k=O(S,v).g;S=_(S,k.j(v));var N=((0<S.g.length?S.g[0]:S.h)>>>0).toString(A);if(S=k,E(S))return N+C;for(;6>N.length;)N="0"+N;C=N+C}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function E(A){if(A.h!=0)return!1;for(var v=0;v<A.g.length;v++)if(A.g[v]!=0)return!1;return!0}function T(A){return A.h==-1}t.l=function(A){return A=_(this,A),T(A)?-1:E(A)?0:1};function R(A){for(var v=A.g.length,S=[],C=0;C<v;C++)S[C]=~A.g[C];return new o(S,~A.h).add(m)}t.abs=function(){return T(this)?R(this):this},t.add=function(A){for(var v=Math.max(this.g.length,A.g.length),S=[],C=0,k=0;k<=v;k++){var N=C+(this.i(k)&65535)+(A.i(k)&65535),P=(N>>>16)+(this.i(k)>>>16)+(A.i(k)>>>16);C=P>>>16,N&=65535,P&=65535,S[k]=P<<16|N}return new o(S,S[S.length-1]&-2147483648?-1:0)};function _(A,v){return A.add(R(v))}t.j=function(A){if(E(this)||E(A))return p;if(T(this))return T(A)?R(this).j(R(A)):R(R(this).j(A));if(T(A))return R(this.j(R(A)));if(0>this.l(w)&&0>A.l(w))return c(this.m()*A.m());for(var v=this.g.length+A.g.length,S=[],C=0;C<2*v;C++)S[C]=0;for(C=0;C<this.g.length;C++)for(var k=0;k<A.g.length;k++){var N=this.i(C)>>>16,P=this.i(C)&65535,Mt=A.i(k)>>>16,Wr=A.i(k)&65535;S[2*C+2*k]+=P*Wr,y(S,2*C+2*k),S[2*C+2*k+1]+=N*Wr,y(S,2*C+2*k+1),S[2*C+2*k+1]+=P*Mt,y(S,2*C+2*k+1),S[2*C+2*k+2]+=N*Mt,y(S,2*C+2*k+2)}for(C=0;C<v;C++)S[C]=S[2*C+1]<<16|S[2*C];for(C=v;C<2*v;C++)S[C]=0;return new o(S,0)};function y(A,v){for(;(A[v]&65535)!=A[v];)A[v+1]+=A[v]>>>16,A[v]&=65535,v++}function I(A,v){this.g=A,this.h=v}function O(A,v){if(E(v))throw Error("division by zero");if(E(A))return new I(p,p);if(T(A))return v=O(R(A),v),new I(R(v.g),R(v.h));if(T(v))return v=O(A,R(v)),new I(R(v.g),v.h);if(30<A.g.length){if(T(A)||T(v))throw Error("slowDivide_ only works with positive integers.");for(var S=m,C=v;0>=C.l(A);)S=V(S),C=V(C);var k=j(S,1),N=j(C,1);for(C=j(C,2),S=j(S,2);!E(C);){var P=N.add(C);0>=P.l(A)&&(k=k.add(S),N=P),C=j(C,1),S=j(S,1)}return v=_(A,k.j(v)),new I(k,v)}for(k=p;0<=A.l(v);){for(S=Math.max(1,Math.floor(A.m()/v.m())),C=Math.ceil(Math.log(S)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),N=c(S),P=N.j(v);T(P)||0<P.l(A);)S-=C,N=c(S),P=N.j(v);E(N)&&(N=m),k=k.add(N),A=_(A,P)}return new I(k,A)}t.A=function(A){return O(this,A).h},t.and=function(A){for(var v=Math.max(this.g.length,A.g.length),S=[],C=0;C<v;C++)S[C]=this.i(C)&A.i(C);return new o(S,this.h&A.h)},t.or=function(A){for(var v=Math.max(this.g.length,A.g.length),S=[],C=0;C<v;C++)S[C]=this.i(C)|A.i(C);return new o(S,this.h|A.h)},t.xor=function(A){for(var v=Math.max(this.g.length,A.g.length),S=[],C=0;C<v;C++)S[C]=this.i(C)^A.i(C);return new o(S,this.h^A.h)};function V(A){for(var v=A.g.length+1,S=[],C=0;C<v;C++)S[C]=A.i(C)<<1|A.i(C-1)>>>31;return new o(S,A.h)}function j(A,v){var S=v>>5;v%=32;for(var C=A.g.length-S,k=[],N=0;N<C;N++)k[N]=0<v?A.i(N+S)>>>v|A.i(N+S+1)<<32-v:A.i(N+S);return new o(k,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,NI=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,di=o}).apply(typeof e_<"u"?e_:typeof self<"u"?self:typeof window<"u"?window:{});var kl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var OI,Ao,DI,eu,Bf,LI,MI,VI;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,f){return l==Array.prototype||l==Object.prototype||(l[h]=f.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof kl=="object"&&kl];for(var h=0;h<l.length;++h){var f=l[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(l,h){if(h)e:{var f=r;l=l.split(".");for(var g=0;g<l.length-1;g++){var b=l[g];if(!(b in f))break e;f=f[b]}l=l[l.length-1],g=f[l],h=h(g),h!=g&&h!=null&&e(f,l,{configurable:!0,writable:!0,value:h})}}function s(l,h){l instanceof String&&(l+="");var f=0,g=!1,b={next:function(){if(!g&&f<l.length){var D=f++;return{value:h(D,l[D]),done:!1}}return g=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(l){return l||function(){return s(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function c(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function d(l,h,f){return l.call.apply(l.bind,arguments)}function p(l,h,f){if(!l)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,g),l.apply(h,b)}}return function(){return l.apply(h,arguments)}}function m(l,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function w(l,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),l.apply(this,g)}}function E(l,h){function f(){}f.prototype=h.prototype,l.aa=h.prototype,l.prototype=new f,l.prototype.constructor=l,l.Qb=function(g,b,D){for(var $=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)$[pe-2]=arguments[pe];return h.prototype[b].apply(g,$)}}function T(l){const h=l.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=l[g];return f}return[]}function R(l,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(u(g)){const b=l.length||0,D=g.length||0;l.length=b+D;for(let $=0;$<D;$++)l[b+$]=g[$]}else l.push(g)}}class _{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function y(l){return/^[\s\xa0]*$/.test(l)}function I(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function O(l){return O[" "](l),l}O[" "]=function(){};var V=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function j(l,h,f){for(const g in l)h.call(f,l[g],g,l)}function A(l,h){for(const f in l)h.call(void 0,l[f],f,l)}function v(l){const h={};for(const f in l)h[f]=l[f];return h}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(l,h){let f,g;for(let b=1;b<arguments.length;b++){g=arguments[b];for(f in g)l[f]=g[f];for(let D=0;D<S.length;D++)f=S[D],Object.prototype.hasOwnProperty.call(g,f)&&(l[f]=g[f])}}function k(l){var h=1;l=l.split(":");const f=[];for(;0<h&&l.length;)f.push(l.shift()),h--;return l.length&&f.push(l.join(":")),f}function N(l){a.setTimeout(()=>{throw l},0)}function P(){var l=J;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class Mt{constructor(){this.h=this.g=null}add(h,f){const g=Wr.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Wr=new _(()=>new Gs,l=>l.reset());class Gs{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let In,q=!1,J=new Mt,ne=()=>{const l=a.Promise.resolve(void 0);In=()=>{l.then(Te)}};var Te=()=>{for(var l;l=P();){try{l.h.call(l.g)}catch(f){N(f)}var h=Wr;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}q=!1};function fe(){this.s=this.s,this.C=this.C}fe.prototype.s=!1,fe.prototype.ma=function(){this.s||(this.s=!0,this.N())},fe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function xe(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}xe.prototype.h=function(){this.defaultPrevented=!0};var Sn=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const f=()=>{};a.addEventListener("test",f,h),a.removeEventListener("test",f,h)}catch{}return l}();function An(l,h){if(xe.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var f=this.type=l.type,g=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(V){e:{try{O(h.nodeName);var b=!0;break e}catch{}b=!1}b||(h=null)}}else f=="mouseover"?h=l.fromElement:f=="mouseout"&&(h=l.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Rn[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&An.aa.h.call(this)}}E(An,xe);var Rn={2:"touch",3:"pen",4:"mouse"};An.prototype.h=function(){An.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Cn="closure_listenable_"+(1e6*Math.random()|0),CA=0;function PA(l,h,f,g,b){this.listener=l,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=b,this.key=++CA,this.da=this.fa=!1}function qa(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Ha(l){this.src=l,this.g={},this.h=0}Ha.prototype.add=function(l,h,f,g,b){var D=l.toString();l=this.g[D],l||(l=this.g[D]=[],this.h++);var $=Zc(l,h,g,b);return-1<$?(h=l[$],f||(h.fa=!1)):(h=new PA(h,this.src,D,!!g,b),h.fa=f,l.push(h)),h};function Jc(l,h){var f=h.type;if(f in l.g){var g=l.g[f],b=Array.prototype.indexOf.call(g,h,void 0),D;(D=0<=b)&&Array.prototype.splice.call(g,b,1),D&&(qa(h),l.g[f].length==0&&(delete l.g[f],l.h--))}}function Zc(l,h,f,g){for(var b=0;b<l.length;++b){var D=l[b];if(!D.da&&D.listener==h&&D.capture==!!f&&D.ha==g)return b}return-1}var eh="closure_lm_"+(1e6*Math.random()|0),th={};function Cg(l,h,f,g,b){if(Array.isArray(h)){for(var D=0;D<h.length;D++)Cg(l,h[D],f,g,b);return null}return f=xg(f),l&&l[Cn]?l.K(h,f,c(g)?!!g.capture:!!g,b):kA(l,h,f,!1,g,b)}function kA(l,h,f,g,b,D){if(!h)throw Error("Invalid event type");var $=c(b)?!!b.capture:!!b,pe=rh(l);if(pe||(l[eh]=pe=new Ha(l)),f=pe.add(h,f,g,$,D),f.proxy)return f;if(g=xA(),f.proxy=g,g.src=l,g.listener=f,l.addEventListener)Sn||(b=$),b===void 0&&(b=!1),l.addEventListener(h.toString(),g,b);else if(l.attachEvent)l.attachEvent(kg(h.toString()),g);else if(l.addListener&&l.removeListener)l.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function xA(){function l(f){return h.call(l.src,l.listener,f)}const h=bA;return l}function Pg(l,h,f,g,b){if(Array.isArray(h))for(var D=0;D<h.length;D++)Pg(l,h[D],f,g,b);else g=c(g)?!!g.capture:!!g,f=xg(f),l&&l[Cn]?(l=l.i,h=String(h).toString(),h in l.g&&(D=l.g[h],f=Zc(D,f,g,b),-1<f&&(qa(D[f]),Array.prototype.splice.call(D,f,1),D.length==0&&(delete l.g[h],l.h--)))):l&&(l=rh(l))&&(h=l.g[h.toString()],l=-1,h&&(l=Zc(h,f,g,b)),(f=-1<l?h[l]:null)&&nh(f))}function nh(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[Cn])Jc(h.i,l);else{var f=l.type,g=l.proxy;h.removeEventListener?h.removeEventListener(f,g,l.capture):h.detachEvent?h.detachEvent(kg(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=rh(h))?(Jc(f,l),f.h==0&&(f.src=null,h[eh]=null)):qa(l)}}}function kg(l){return l in th?th[l]:th[l]="on"+l}function bA(l,h){if(l.da)l=!0;else{h=new An(h,this);var f=l.listener,g=l.ha||l.src;l.fa&&nh(l),l=f.call(g,h)}return l}function rh(l){return l=l[eh],l instanceof Ha?l:null}var ih="__closure_events_fn_"+(1e9*Math.random()>>>0);function xg(l){return typeof l=="function"?l:(l[ih]||(l[ih]=function(h){return l.handleEvent(h)}),l[ih])}function Xe(){fe.call(this),this.i=new Ha(this),this.M=this,this.F=null}E(Xe,fe),Xe.prototype[Cn]=!0,Xe.prototype.removeEventListener=function(l,h,f,g){Pg(this,l,h,f,g)};function ut(l,h){var f,g=l.F;if(g)for(f=[];g;g=g.F)f.push(g);if(l=l.M,g=h.type||h,typeof h=="string")h=new xe(h,l);else if(h instanceof xe)h.target=h.target||l;else{var b=h;h=new xe(g,l),C(h,b)}if(b=!0,f)for(var D=f.length-1;0<=D;D--){var $=h.g=f[D];b=Wa($,g,!0,h)&&b}if($=h.g=l,b=Wa($,g,!0,h)&&b,b=Wa($,g,!1,h)&&b,f)for(D=0;D<f.length;D++)$=h.g=f[D],b=Wa($,g,!1,h)&&b}Xe.prototype.N=function(){if(Xe.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var f=l.g[h],g=0;g<f.length;g++)qa(f[g]);delete l.g[h],l.h--}}this.F=null},Xe.prototype.K=function(l,h,f,g){return this.i.add(String(l),h,!1,f,g)},Xe.prototype.L=function(l,h,f,g){return this.i.add(String(l),h,!0,f,g)};function Wa(l,h,f,g){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var b=!0,D=0;D<h.length;++D){var $=h[D];if($&&!$.da&&$.capture==f){var pe=$.listener,qe=$.ha||$.src;$.fa&&Jc(l.i,$),b=pe.call(qe,g)!==!1&&b}}return b&&!g.defaultPrevented}function bg(l,h,f){if(typeof l=="function")f&&(l=m(l,f));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(l,h||0)}function Ng(l){l.g=bg(()=>{l.g=null,l.i&&(l.i=!1,Ng(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class NA extends fe{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Ng(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ks(l){fe.call(this),this.h=l,this.g={}}E(Ks,fe);var Og=[];function Dg(l){j(l.g,function(h,f){this.g.hasOwnProperty(f)&&nh(h)},l),l.g={}}Ks.prototype.N=function(){Ks.aa.N.call(this),Dg(this)},Ks.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var sh=a.JSON.stringify,OA=a.JSON.parse,DA=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function oh(){}oh.prototype.h=null;function Lg(l){return l.h||(l.h=l.i())}function Mg(){}var Qs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ah(){xe.call(this,"d")}E(ah,xe);function lh(){xe.call(this,"c")}E(lh,xe);var Gr={},Vg=null;function Ga(){return Vg=Vg||new Xe}Gr.La="serverreachability";function Fg(l){xe.call(this,Gr.La,l)}E(Fg,xe);function Ys(l){const h=Ga();ut(h,new Fg(h))}Gr.STAT_EVENT="statevent";function Ug(l,h){xe.call(this,Gr.STAT_EVENT,l),this.stat=h}E(Ug,xe);function ct(l){const h=Ga();ut(h,new Ug(h,l))}Gr.Ma="timingevent";function jg(l,h){xe.call(this,Gr.Ma,l),this.size=h}E(jg,xe);function Xs(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function Js(){this.g=!0}Js.prototype.xa=function(){this.g=!1};function LA(l,h,f,g,b,D){l.info(function(){if(l.g)if(D)for(var $="",pe=D.split("&"),qe=0;qe<pe.length;qe++){var ce=pe[qe].split("=");if(1<ce.length){var Je=ce[0];ce=ce[1];var Ze=Je.split("_");$=2<=Ze.length&&Ze[1]=="type"?$+(Je+"="+ce+"&"):$+(Je+"=redacted&")}}else $=null;else $=D;return"XMLHTTP REQ ("+g+") [attempt "+b+"]: "+h+`
`+f+`
`+$})}function MA(l,h,f,g,b,D,$){l.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+b+"]: "+h+`
`+f+`
`+D+" "+$})}function Mi(l,h,f,g){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+FA(l,f)+(g?" "+g:"")})}function VA(l,h){l.info(function(){return"TIMEOUT: "+h})}Js.prototype.info=function(){};function FA(l,h){if(!l.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(l=0;l<f.length;l++)if(Array.isArray(f[l])){var g=f[l];if(!(2>g.length)){var b=g[1];if(Array.isArray(b)&&!(1>b.length)){var D=b[0];if(D!="noop"&&D!="stop"&&D!="close")for(var $=1;$<b.length;$++)b[$]=""}}}}return sh(f)}catch{return h}}var Ka={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},zg={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},uh;function Qa(){}E(Qa,oh),Qa.prototype.g=function(){return new XMLHttpRequest},Qa.prototype.i=function(){return{}},uh=new Qa;function tr(l,h,f,g){this.j=l,this.i=h,this.l=f,this.R=g||1,this.U=new Ks(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Bg}function Bg(){this.i=null,this.g="",this.h=!1}var $g={},ch={};function hh(l,h,f){l.L=1,l.v=Za(Pn(h)),l.m=f,l.P=!0,qg(l,null)}function qg(l,h){l.F=Date.now(),Ya(l),l.A=Pn(l.v);var f=l.A,g=l.R;Array.isArray(g)||(g=[String(g)]),iy(f.i,"t",g),l.C=0,f=l.j.J,l.h=new Bg,l.g=Ty(l.j,f?h:null,!l.m),0<l.O&&(l.M=new NA(m(l.Y,l,l.g),l.O)),h=l.U,f=l.g,g=l.ca;var b="readystatechange";Array.isArray(b)||(b&&(Og[0]=b.toString()),b=Og);for(var D=0;D<b.length;D++){var $=Cg(f,b[D],g||h.handleEvent,!1,h.h||h);if(!$)break;h.g[$.key]=$}h=l.H?v(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),Ys(),LA(l.i,l.u,l.A,l.l,l.R,l.m)}tr.prototype.ca=function(l){l=l.target;const h=this.M;h&&kn(l)==3?h.j():this.Y(l)},tr.prototype.Y=function(l){try{if(l==this.g)e:{const Ze=kn(this.g);var h=this.g.Ba();const Ui=this.g.Z();if(!(3>Ze)&&(Ze!=3||this.g&&(this.h.h||this.g.oa()||hy(this.g)))){this.J||Ze!=4||h==7||(h==8||0>=Ui?Ys(3):Ys(2)),dh(this);var f=this.g.Z();this.X=f;t:if(Hg(this)){var g=hy(this.g);l="";var b=g.length,D=kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Kr(this),Zs(this);var $="";break t}this.h.i=new a.TextDecoder}for(h=0;h<b;h++)this.h.h=!0,l+=this.h.i.decode(g[h],{stream:!(D&&h==b-1)});g.length=0,this.h.g+=l,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=f==200,MA(this.i,this.u,this.A,this.l,this.R,Ze,f),this.o){if(this.T&&!this.K){t:{if(this.g){var pe,qe=this.g;if((pe=qe.g?qe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(pe)){var ce=pe;break t}}ce=null}if(f=ce)Mi(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,fh(this,f);else{this.o=!1,this.s=3,ct(12),Kr(this),Zs(this);break e}}if(this.P){f=!0;let Ht;for(;!this.J&&this.C<$.length;)if(Ht=UA(this,$),Ht==ch){Ze==4&&(this.s=4,ct(14),f=!1),Mi(this.i,this.l,null,"[Incomplete Response]");break}else if(Ht==$g){this.s=4,ct(15),Mi(this.i,this.l,$,"[Invalid Chunk]"),f=!1;break}else Mi(this.i,this.l,Ht,null),fh(this,Ht);if(Hg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ze!=4||$.length!=0||this.h.h||(this.s=1,ct(16),f=!1),this.o=this.o&&f,!f)Mi(this.i,this.l,$,"[Invalid Chunked Response]"),Kr(this),Zs(this);else if(0<$.length&&!this.W){this.W=!0;var Je=this.j;Je.g==this&&Je.ba&&!Je.M&&(Je.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),_h(Je),Je.M=!0,ct(11))}}else Mi(this.i,this.l,$,null),fh(this,$);Ze==4&&Kr(this),this.o&&!this.J&&(Ze==4?vy(this.j,this):(this.o=!1,Ya(this)))}else nR(this.g),f==400&&0<$.indexOf("Unknown SID")?(this.s=3,ct(12)):(this.s=0,ct(13)),Kr(this),Zs(this)}}}catch{}finally{}};function Hg(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function UA(l,h){var f=l.C,g=h.indexOf(`
`,f);return g==-1?ch:(f=Number(h.substring(f,g)),isNaN(f)?$g:(g+=1,g+f>h.length?ch:(h=h.slice(g,g+f),l.C=g+f,h)))}tr.prototype.cancel=function(){this.J=!0,Kr(this)};function Ya(l){l.S=Date.now()+l.I,Wg(l,l.I)}function Wg(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Xs(m(l.ba,l),h)}function dh(l){l.B&&(a.clearTimeout(l.B),l.B=null)}tr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(VA(this.i,this.A),this.L!=2&&(Ys(),ct(17)),Kr(this),this.s=2,Zs(this)):Wg(this,this.S-l)};function Zs(l){l.j.G==0||l.J||vy(l.j,l)}function Kr(l){dh(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,Dg(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function fh(l,h){try{var f=l.j;if(f.G!=0&&(f.g==l||ph(f.h,l))){if(!l.K&&ph(f.h,l)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var b=g;if(b[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<l.F)sl(f),rl(f);else break e;vh(f),ct(18)}}else f.za=b[1],0<f.za-f.T&&37500>b[2]&&f.F&&f.v==0&&!f.C&&(f.C=Xs(m(f.Za,f),6e3));if(1>=Qg(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Yr(f,11)}else if((l.K||f.g==l)&&sl(f),!y(h))for(b=f.Da.g.parse(h),h=0;h<b.length;h++){let ce=b[h];if(f.T=ce[0],ce=ce[1],f.G==2)if(ce[0]=="c"){f.K=ce[1],f.ia=ce[2];const Je=ce[3];Je!=null&&(f.la=Je,f.j.info("VER="+f.la));const Ze=ce[4];Ze!=null&&(f.Aa=Ze,f.j.info("SVER="+f.Aa));const Ui=ce[5];Ui!=null&&typeof Ui=="number"&&0<Ui&&(g=1.5*Ui,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Ht=l.g;if(Ht){const al=Ht.g?Ht.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(al){var D=g.h;D.g||al.indexOf("spdy")==-1&&al.indexOf("quic")==-1&&al.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(mh(D,D.h),D.h=null))}if(g.D){const wh=Ht.g?Ht.g.getResponseHeader("X-HTTP-Session-Id"):null;wh&&(g.ya=wh,ge(g.I,g.D,wh))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-l.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var $=l;if(g.qa=Ey(g,g.J?g.ia:null,g.W),$.K){Yg(g.h,$);var pe=$,qe=g.L;qe&&(pe.I=qe),pe.B&&(dh(pe),Ya(pe)),g.g=$}else gy(g);0<f.i.length&&il(f)}else ce[0]!="stop"&&ce[0]!="close"||Yr(f,7);else f.G==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?Yr(f,7):yh(f):ce[0]!="noop"&&f.l&&f.l.ta(ce),f.v=0)}}Ys(4)}catch{}}var jA=class{constructor(l,h){this.g=l,this.map=h}};function Gg(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Kg(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Qg(l){return l.h?1:l.g?l.g.size:0}function ph(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function mh(l,h){l.g?l.g.add(h):l.h=h}function Yg(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}Gg.prototype.cancel=function(){if(this.i=Xg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Xg(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const f of l.g.values())h=h.concat(f.D);return h}return T(l.i)}function zA(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var h=[],f=l.length,g=0;g<f;g++)h.push(l[g]);return h}h=[],f=0;for(g in l)h[f++]=l[g];return h}function BA(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var h=[];l=l.length;for(var f=0;f<l;f++)h.push(f);return h}h=[],f=0;for(const g in l)h[f++]=g;return h}}}function Jg(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var f=BA(l),g=zA(l),b=g.length,D=0;D<b;D++)h.call(void 0,g[D],f&&f[D],l)}var Zg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $A(l,h){if(l){l=l.split("&");for(var f=0;f<l.length;f++){var g=l[f].indexOf("="),b=null;if(0<=g){var D=l[f].substring(0,g);b=l[f].substring(g+1)}else D=l[f];h(D,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Qr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Qr){this.h=l.h,Xa(this,l.j),this.o=l.o,this.g=l.g,Ja(this,l.s),this.l=l.l;var h=l.i,f=new no;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),ey(this,f),this.m=l.m}else l&&(h=String(l).match(Zg))?(this.h=!1,Xa(this,h[1]||"",!0),this.o=eo(h[2]||""),this.g=eo(h[3]||"",!0),Ja(this,h[4]),this.l=eo(h[5]||"",!0),ey(this,h[6]||"",!0),this.m=eo(h[7]||"")):(this.h=!1,this.i=new no(null,this.h))}Qr.prototype.toString=function(){var l=[],h=this.j;h&&l.push(to(h,ty,!0),":");var f=this.g;return(f||h=="file")&&(l.push("//"),(h=this.o)&&l.push(to(h,ty,!0),"@"),l.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&l.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&l.push("/"),l.push(to(f,f.charAt(0)=="/"?WA:HA,!0))),(f=this.i.toString())&&l.push("?",f),(f=this.m)&&l.push("#",to(f,KA)),l.join("")};function Pn(l){return new Qr(l)}function Xa(l,h,f){l.j=f?eo(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function Ja(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function ey(l,h,f){h instanceof no?(l.i=h,QA(l.i,l.h)):(f||(h=to(h,GA)),l.i=new no(h,l.h))}function ge(l,h,f){l.i.set(h,f)}function Za(l){return ge(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function eo(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function to(l,h,f){return typeof l=="string"?(l=encodeURI(l).replace(h,qA),f&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function qA(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var ty=/[#\/\?@]/g,HA=/[#\?:]/g,WA=/[#\?]/g,GA=/[#\?@]/g,KA=/#/g;function no(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function nr(l){l.g||(l.g=new Map,l.h=0,l.i&&$A(l.i,function(h,f){l.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=no.prototype,t.add=function(l,h){nr(this),this.i=null,l=Vi(this,l);var f=this.g.get(l);return f||this.g.set(l,f=[]),f.push(h),this.h+=1,this};function ny(l,h){nr(l),h=Vi(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function ry(l,h){return nr(l),h=Vi(l,h),l.g.has(h)}t.forEach=function(l,h){nr(this),this.g.forEach(function(f,g){f.forEach(function(b){l.call(h,b,g,this)},this)},this)},t.na=function(){nr(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const b=l[g];for(let D=0;D<b.length;D++)f.push(h[g])}return f},t.V=function(l){nr(this);let h=[];if(typeof l=="string")ry(this,l)&&(h=h.concat(this.g.get(Vi(this,l))));else{l=Array.from(this.g.values());for(let f=0;f<l.length;f++)h=h.concat(l[f])}return h},t.set=function(l,h){return nr(this),this.i=null,l=Vi(this,l),ry(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function iy(l,h,f){ny(l,h),0<f.length&&(l.i=null,l.g.set(Vi(l,h),T(f)),l.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const D=encodeURIComponent(String(g)),$=this.V(g);for(g=0;g<$.length;g++){var b=D;$[g]!==""&&(b+="="+encodeURIComponent(String($[g]))),l.push(b)}}return this.i=l.join("&")};function Vi(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function QA(l,h){h&&!l.j&&(nr(l),l.i=null,l.g.forEach(function(f,g){var b=g.toLowerCase();g!=b&&(ny(this,g),iy(this,b,f))},l)),l.j=h}function YA(l,h){const f=new Js;if(a.Image){const g=new Image;g.onload=w(rr,f,"TestLoadImage: loaded",!0,h,g),g.onerror=w(rr,f,"TestLoadImage: error",!1,h,g),g.onabort=w(rr,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=w(rr,f,"TestLoadImage: timeout",!1,h,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=l}else h(!1)}function XA(l,h){const f=new Js,g=new AbortController,b=setTimeout(()=>{g.abort(),rr(f,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:g.signal}).then(D=>{clearTimeout(b),D.ok?rr(f,"TestPingServer: ok",!0,h):rr(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(b),rr(f,"TestPingServer: error",!1,h)})}function rr(l,h,f,g,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),g(f)}catch{}}function JA(){this.g=new DA}function ZA(l,h,f){const g=f||"";try{Jg(l,function(b,D){let $=b;c(b)&&($=sh(b)),h.push(g+D+"="+encodeURIComponent($))})}catch(b){throw h.push(g+"type="+encodeURIComponent("_badmap")),b}}function el(l){this.l=l.Ub||null,this.j=l.eb||!1}E(el,oh),el.prototype.g=function(){return new tl(this.l,this.j)},el.prototype.i=function(l){return function(){return l}}({});function tl(l,h){Xe.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}E(tl,Xe),t=tl.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,io(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ro(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,io(this)),this.g&&(this.readyState=3,io(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;sy(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function sy(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?ro(this):io(this),this.readyState==3&&sy(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,ro(this))},t.Qa=function(l){this.g&&(this.response=l,ro(this))},t.ga=function(){this.g&&ro(this)};function ro(l){l.readyState=4,l.l=null,l.j=null,l.v=null,io(l)}t.setRequestHeader=function(l,h){this.u.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,l.push(f[0]+": "+f[1]),f=h.next();return l.join(`\r
`)};function io(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(tl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function oy(l){let h="";return j(l,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function gh(l,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=oy(f),typeof l=="string"?f!=null&&encodeURIComponent(String(f)):ge(l,h,f))}function Pe(l){Xe.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}E(Pe,Xe);var eR=/^https?$/i,tR=["POST","PUT"];t=Pe.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():uh.g(),this.v=this.o?Lg(this.o):Lg(uh),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(D){ay(this,D);return}if(l=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var b in g)f.set(b,g[b]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())f.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(D=>D.toLowerCase()=="content-type"),b=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(tR,h,void 0))||g||b||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,$]of f)this.g.setRequestHeader(D,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{cy(this),this.u=!0,this.g.send(l),this.u=!1}catch(D){ay(this,D)}};function ay(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,ly(l),nl(l)}function ly(l){l.A||(l.A=!0,ut(l,"complete"),ut(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ut(this,"complete"),ut(this,"abort"),nl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),nl(this,!0)),Pe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?uy(this):this.bb())},t.bb=function(){uy(this)};function uy(l){if(l.h&&typeof o<"u"&&(!l.v[1]||kn(l)!=4||l.Z()!=2)){if(l.u&&kn(l)==4)bg(l.Ea,0,l);else if(ut(l,"readystatechange"),kn(l)==4){l.h=!1;try{const $=l.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=$===0){var b=String(l.D).match(Zg)[1]||null;!b&&a.self&&a.self.location&&(b=a.self.location.protocol.slice(0,-1)),g=!eR.test(b?b.toLowerCase():"")}f=g}if(f)ut(l,"complete"),ut(l,"success");else{l.m=6;try{var D=2<kn(l)?l.g.statusText:""}catch{D=""}l.l=D+" ["+l.Z()+"]",ly(l)}}finally{nl(l)}}}}function nl(l,h){if(l.g){cy(l);const f=l.g,g=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||ut(l,"ready");try{f.onreadystatechange=g}catch{}}}function cy(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function kn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<kn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),OA(h)}};function hy(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function nR(l){const h={};l=(l.g&&2<=kn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<l.length;g++){if(y(l[g]))continue;var f=k(l[g]);const b=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const D=h[b]||[];h[b]=D,D.push(f)}A(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function so(l,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[l]||h}function dy(l){this.Aa=0,this.i=[],this.j=new Js,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=so("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=so("baseRetryDelayMs",5e3,l),this.cb=so("retryDelaySeedMs",1e4,l),this.Wa=so("forwardChannelMaxRetries",2,l),this.wa=so("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Gg(l&&l.concurrentRequestLimit),this.Da=new JA,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=dy.prototype,t.la=8,t.G=1,t.connect=function(l,h,f,g){ct(0),this.W=l,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Ey(this,null,this.W),il(this)};function yh(l){if(fy(l),l.G==3){var h=l.U++,f=Pn(l.I);if(ge(f,"SID",l.K),ge(f,"RID",h),ge(f,"TYPE","terminate"),oo(l,f),h=new tr(l,l.j,h),h.L=2,h.v=Za(Pn(f)),f=!1,a.navigator&&a.navigator.sendBeacon)try{f=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&a.Image&&(new Image().src=h.v,f=!0),f||(h.g=Ty(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Ya(h)}wy(l)}function rl(l){l.g&&(_h(l),l.g.cancel(),l.g=null)}function fy(l){rl(l),l.u&&(a.clearTimeout(l.u),l.u=null),sl(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function il(l){if(!Kg(l.h)&&!l.s){l.s=!0;var h=l.Ga;In||ne(),q||(In(),q=!0),J.add(h,l),l.B=0}}function rR(l,h){return Qg(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Xs(m(l.Ga,l,h),_y(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const b=new tr(this,this.j,l);let D=this.o;if(this.S&&(D?(D=v(D),C(D,this.S)):D=this.S),this.m!==null||this.O||(b.H=D,D=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=my(this,b,h),f=Pn(this.I),ge(f,"RID",l),ge(f,"CVER",22),this.D&&ge(f,"X-HTTP-Session-Id",this.D),oo(this,f),D&&(this.O?h="headers="+encodeURIComponent(String(oy(D)))+"&"+h:this.m&&gh(f,this.m,D)),mh(this.h,b),this.Ua&&ge(f,"TYPE","init"),this.P?(ge(f,"$req",h),ge(f,"SID","null"),b.T=!0,hh(b,f,null)):hh(b,f,h),this.G=2}}else this.G==3&&(l?py(this,l):this.i.length==0||Kg(this.h)||py(this))};function py(l,h){var f;h?f=h.l:f=l.U++;const g=Pn(l.I);ge(g,"SID",l.K),ge(g,"RID",f),ge(g,"AID",l.T),oo(l,g),l.m&&l.o&&gh(g,l.m,l.o),f=new tr(l,l.j,f,l.B+1),l.m===null&&(f.H=l.o),h&&(l.i=h.D.concat(l.i)),h=my(l,f,1e3),f.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),mh(l.h,f),hh(f,g,h)}function oo(l,h){l.H&&j(l.H,function(f,g){ge(h,g,f)}),l.l&&Jg({},function(f,g){ge(h,g,f)})}function my(l,h,f){f=Math.min(l.i.length,f);var g=l.l?m(l.l.Na,l.l,l):null;e:{var b=l.i;let D=-1;for(;;){const $=["count="+f];D==-1?0<f?(D=b[0].g,$.push("ofs="+D)):D=0:$.push("ofs="+D);let pe=!0;for(let qe=0;qe<f;qe++){let ce=b[qe].g;const Je=b[qe].map;if(ce-=D,0>ce)D=Math.max(0,b[qe].g-100),pe=!1;else try{ZA(Je,$,"req"+ce+"_")}catch{g&&g(Je)}}if(pe){g=$.join("&");break e}}}return l=l.i.splice(0,f),h.D=l,g}function gy(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;In||ne(),q||(In(),q=!0),J.add(h,l),l.v=0}}function vh(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Xs(m(l.Fa,l),_y(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,yy(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Xs(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ct(10),rl(this),yy(this))};function _h(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function yy(l){l.g=new tr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=Pn(l.qa);ge(h,"RID","rpc"),ge(h,"SID",l.K),ge(h,"AID",l.T),ge(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&ge(h,"TO",l.ja),ge(h,"TYPE","xmlhttp"),oo(l,h),l.m&&l.o&&gh(h,l.m,l.o),l.L&&(l.g.I=l.L);var f=l.g;l=l.ia,f.L=1,f.v=Za(Pn(h)),f.m=null,f.P=!0,qg(f,l)}t.Za=function(){this.C!=null&&(this.C=null,rl(this),vh(this),ct(19))};function sl(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function vy(l,h){var f=null;if(l.g==h){sl(l),_h(l),l.g=null;var g=2}else if(ph(l.h,h))f=h.D,Yg(l.h,h),g=1;else return;if(l.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var b=l.B;g=Ga(),ut(g,new jg(g,f)),il(l)}else gy(l);else if(b=h.s,b==3||b==0&&0<h.X||!(g==1&&rR(l,h)||g==2&&vh(l)))switch(f&&0<f.length&&(h=l.h,h.i=h.i.concat(f)),b){case 1:Yr(l,5);break;case 4:Yr(l,10);break;case 3:Yr(l,6);break;default:Yr(l,2)}}}function _y(l,h){let f=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(f*=2),f*h}function Yr(l,h){if(l.j.info("Error code "+h),h==2){var f=m(l.fb,l),g=l.Xa;const b=!g;g=new Qr(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Xa(g,"https"),Za(g),b?YA(g.toString(),f):XA(g.toString(),f)}else ct(2);l.G=0,l.l&&l.l.sa(h),wy(l),fy(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))};function wy(l){if(l.G=0,l.ka=[],l.l){const h=Xg(l.h);(h.length!=0||l.i.length!=0)&&(R(l.ka,h),R(l.ka,l.i),l.h.i.length=0,T(l.i),l.i.length=0),l.l.ra()}}function Ey(l,h,f){var g=f instanceof Qr?Pn(f):new Qr(f);if(g.g!="")h&&(g.g=h+"."+g.g),Ja(g,g.s);else{var b=a.location;g=b.protocol,h=h?h+"."+b.hostname:b.hostname,b=+b.port;var D=new Qr(null);g&&Xa(D,g),h&&(D.g=h),b&&Ja(D,b),f&&(D.l=f),g=D}return f=l.D,h=l.ya,f&&h&&ge(g,f,h),ge(g,"VER",l.la),oo(l,g),g}function Ty(l,h,f){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new Pe(new el({eb:f})):new Pe(l.pa),h.Ha(l.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Iy(){}t=Iy.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ol(){}ol.prototype.g=function(l,h){return new At(l,h)};function At(l,h){Xe.call(this),this.g=new dy(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!y(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!y(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new Fi(this)}E(At,Xe),At.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){yh(this.g)},At.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var f={};f.__data__=l,l=f}else this.u&&(f={},f.__data__=sh(l),l=f);h.i.push(new jA(h.Ya++,l)),h.G==3&&il(h)},At.prototype.N=function(){this.g.l=null,delete this.j,yh(this.g),delete this.g,At.aa.N.call(this)};function Sy(l){ah.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const f in h){l=f;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}E(Sy,ah);function Ay(){lh.call(this),this.status=1}E(Ay,lh);function Fi(l){this.g=l}E(Fi,Iy),Fi.prototype.ua=function(){ut(this.g,"a")},Fi.prototype.ta=function(l){ut(this.g,new Sy(l))},Fi.prototype.sa=function(l){ut(this.g,new Ay)},Fi.prototype.ra=function(){ut(this.g,"b")},ol.prototype.createWebChannel=ol.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,VI=function(){return new ol},MI=function(){return Ga()},LI=Gr,Bf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ka.NO_ERROR=0,Ka.TIMEOUT=8,Ka.HTTP_ERROR=6,eu=Ka,zg.COMPLETE="complete",DI=zg,Mg.EventType=Qs,Qs.OPEN="a",Qs.CLOSE="b",Qs.ERROR="c",Qs.MESSAGE="d",Xe.prototype.listen=Xe.prototype.K,Ao=Mg,Pe.prototype.listenOnce=Pe.prototype.L,Pe.prototype.getLastError=Pe.prototype.Ka,Pe.prototype.getLastErrorCode=Pe.prototype.Ba,Pe.prototype.getStatus=Pe.prototype.Z,Pe.prototype.getResponseJson=Pe.prototype.Oa,Pe.prototype.getResponseText=Pe.prototype.oa,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Ha,OI=Pe}).apply(typeof kl<"u"?kl:typeof self<"u"?self:typeof window<"u"?window:{});const t_="@firebase/firestore";/**
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
 */let js="11.0.2";/**
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
 */const Si=new Pc("@firebase/firestore");function zi(){return Si.logLevel}function H(t,...e){if(Si.logLevel<=se.DEBUG){const n=e.map(Um);Si.debug(`Firestore (${js}): ${t}`,...n)}}function Yn(t,...e){if(Si.logLevel<=se.ERROR){const n=e.map(Um);Si.error(`Firestore (${js}): ${t}`,...n)}}function As(t,...e){if(Si.logLevel<=se.WARN){const n=e.map(Um);Si.warn(`Firestore (${js}): ${t}`,...n)}}function Um(t){if(typeof t=="string")return t;try{/**
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
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${js}) INTERNAL ASSERTION FAILED: `+t;throw Yn(e),new Error(e)}function he(t,e){t||Y()}function ee(t,e){return t}/**
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
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends sn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class zn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class FI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class U4{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(rt.UNAUTHENTICATED))}shutdown(){}}class j4{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class z4{constructor(e){this.t=e,this.currentUser=rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){he(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new zn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new zn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new zn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(he(typeof r.accessToken=="string"),new FI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return he(e===null||typeof e=="string"),new rt(e)}}class B4{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=rt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class $4{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new B4(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class q4{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class H4{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){he(this.o===void 0);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(he(typeof n.token=="string"),this.R=n.token,new q4(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function W4(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class UI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=W4(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ae(t,e){return t<e?-1:t>e?1:0}function Rs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Ue{static now(){return Ue.fromMillis(Date.now())}static fromDate(e){return Ue.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ue(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ma{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ma.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ma?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ve extends ma{construct(e,n,r){return new ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ve(n)}static emptyPath(){return new ve([])}}const G4=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends ma{construct(e,n,r){return new Ge(e,n,r)}static isValidIdentifier(e){return G4.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ge(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new W(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new W(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(n)}static emptyPath(){return new Ge([])}}/**
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
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(ve.fromString(e))}static fromName(e){return new Q(ve.fromString(e).popFirst(5))}static empty(){return new Q(ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new ve(e.slice()))}}function K4(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Z.fromTimestamp(r===1e9?new Ue(n+1,0):new Ue(n,r));return new Mr(i,Q.empty(),e)}function Q4(t){return new Mr(t.readTime,t.key,-1)}class Mr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Mr(Z.min(),Q.empty(),-1)}static max(){return new Mr(Z.max(),Q.empty(),-1)}}function Y4(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:ae(t.largestBatchId,e.largestBatchId))}/**
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
 */const X4="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class J4{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function zs(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==X4)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new F((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Z4(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Bs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Dc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Dc.oe=-1;function Lc(t){return t==null}function Wu(t){return t===0&&1/t==-1/0}function eM(t){return typeof t=="number"&&Number.isInteger(t)&&!Wu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function tM(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=n_(e)),e=nM(t.get(n),e);return n_(e)}function nM(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function n_(t){return t+""}/**
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
 */function r_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ni(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function jI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ce{constructor(e,n){this.comparator=e,this.root=n||We.EMPTY}insert(e,n){return new Ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,We.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,We.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xl(this.root,e,this.comparator,!1)}getReverseIterator(){return new xl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xl(this.root,e,this.comparator,!0)}}class xl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class We{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??We.RED,this.left=i??We.EMPTY,this.right=s??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new We(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return We.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,n,r,i,s){return this}insert(e,n,r){return new We(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class je{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new i_(this.data.getIterator())}getIteratorFrom(e){return new i_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new je(this.comparator);return n.data=e,n}}class i_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Xt{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new Xt([])}unionWith(e){let n=new je(Ge.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Rs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class zI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ye{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new zI("Invalid base64 string: "+s):s}}(e);return new Ye(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ye(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ye.EMPTY_BYTE_STRING=new Ye("");const rM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vr(t){if(he(!!t),typeof t=="string"){let e=0;const n=rM.exec(t);if(he(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:be(t.seconds),nanos:be(t.nanos)}}function be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Fr(t){return typeof t=="string"?Ye.fromBase64String(t):Ye.fromUint8Array(t)}/**
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
 */function jm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Mc(t){const e=t.mapValue.fields.__previous_value__;return jm(e)?Mc(e):e}function ga(t){const e=Vr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ue(e.seconds,e.nanos)}/**
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
 */class iM{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class ya{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ya("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ya&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const bl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ur(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?jm(t)?4:oM(t)?9007199254740991:sM(t)?10:11:Y()}function En(t,e){if(t===e)return!0;const n=Ur(t);if(n!==Ur(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ga(t).isEqual(ga(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Vr(i.timestampValue),a=Vr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Fr(i.bytesValue).isEqual(Fr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return be(i.geoPointValue.latitude)===be(s.geoPointValue.latitude)&&be(i.geoPointValue.longitude)===be(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return be(i.integerValue)===be(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=be(i.doubleValue),a=be(s.doubleValue);return o===a?Wu(o)===Wu(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Rs(t.arrayValue.values||[],e.arrayValue.values||[],En);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(r_(o)!==r_(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!En(o[u],a[u])))return!1;return!0}(t,e);default:return Y()}}function va(t,e){return(t.values||[]).find(n=>En(n,e))!==void 0}function Cs(t,e){if(t===e)return 0;const n=Ur(t),r=Ur(e);if(n!==r)return ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ae(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=be(s.integerValue||s.doubleValue),u=be(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return s_(t.timestampValue,e.timestampValue);case 4:return s_(ga(t),ga(e));case 5:return ae(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Fr(s),u=Fr(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const d=ae(a[c],u[c]);if(d!==0)return d}return ae(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ae(be(s.latitude),be(o.latitude));return a!==0?a:ae(be(s.longitude),be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return o_(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,c,d;const p=s.fields||{},m=o.fields||{},w=(a=p.value)===null||a===void 0?void 0:a.arrayValue,E=(u=m.value)===null||u===void 0?void 0:u.arrayValue,T=ae(((c=w==null?void 0:w.values)===null||c===void 0?void 0:c.length)||0,((d=E==null?void 0:E.values)===null||d===void 0?void 0:d.length)||0);return T!==0?T:o_(w,E)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===bl.mapValue&&o===bl.mapValue)return 0;if(s===bl.mapValue)return 1;if(o===bl.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=ae(u[p],d[p]);if(m!==0)return m;const w=Cs(a[u[p]],c[d[p]]);if(w!==0)return w}return ae(u.length,d.length)}(t.mapValue,e.mapValue);default:throw Y()}}function s_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ae(t,e);const n=Vr(t),r=Vr(e),i=ae(n.seconds,r.seconds);return i!==0?i:ae(n.nanos,r.nanos)}function o_(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Cs(n[i],r[i]);if(s)return s}return ae(n.length,r.length)}function Ps(t){return $f(t)}function $f(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Vr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Fr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=$f(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${$f(n.fields[o])}`;return i+"}"}(t.mapValue):Y()}function tu(t){switch(Ur(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Mc(t);return e?16+tu(e):16;case 5:return 2*t.stringValue.length;case 6:return Fr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+tu(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Ni(r.fields,(s,o)=>{i+=s.length+tu(o)}),i}(t.mapValue);default:throw Y()}}function a_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function qf(t){return!!t&&"integerValue"in t}function zm(t){return!!t&&"arrayValue"in t}function l_(t){return!!t&&"nullValue"in t}function u_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function nu(t){return!!t&&"mapValue"in t}function sM(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Bo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ni(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Bo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Bo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function oM(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ut{constructor(e){this.value=e}static empty(){return new Ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!nu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Bo(n)}setAll(e){let n=Ge.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Bo(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());nu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return En(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];nu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ni(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ut(Bo(this.value))}}function BI(t){const e=[];return Ni(t.fields,(n,r)=>{const i=new Ge([n]);if(nu(r)){const s=BI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Xt(e)}/**
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
 */class st{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new st(e,0,Z.min(),Z.min(),Z.min(),Ut.empty(),0)}static newFoundDocument(e,n,r,i){return new st(e,1,n,Z.min(),r,i,0)}static newNoDocument(e,n){return new st(e,2,n,Z.min(),Z.min(),Ut.empty(),0)}static newUnknownDocument(e,n){return new st(e,3,n,Z.min(),Z.min(),Ut.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof st&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new st(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Gu{constructor(e,n){this.position=e,this.inclusive=n}}function c_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),n.key):r=Cs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function h_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!En(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class _a{constructor(e,n="asc"){this.field=e,this.dir=n}}function aM(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class $I{}class Le extends $I{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new uM(e,n,r):n==="array-contains"?new dM(e,r):n==="in"?new fM(e,r):n==="not-in"?new pM(e,r):n==="array-contains-any"?new mM(e,r):new Le(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new cM(e,r):new hM(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Cs(n,this.value)):n!==null&&Ur(this.value)===Ur(n)&&this.matchesComparison(Cs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rn extends $I{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new rn(e,n)}matches(e){return qI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function qI(t){return t.op==="and"}function HI(t){return lM(t)&&qI(t)}function lM(t){for(const e of t.filters)if(e instanceof rn)return!1;return!0}function Hf(t){if(t instanceof Le)return t.field.canonicalString()+t.op.toString()+Ps(t.value);if(HI(t))return t.filters.map(e=>Hf(e)).join(",");{const e=t.filters.map(n=>Hf(n)).join(",");return`${t.op}(${e})`}}function WI(t,e){return t instanceof Le?function(r,i){return i instanceof Le&&r.op===i.op&&r.field.isEqual(i.field)&&En(r.value,i.value)}(t,e):t instanceof rn?function(r,i){return i instanceof rn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&WI(o,i.filters[a]),!0):!1}(t,e):void Y()}function GI(t){return t instanceof Le?function(n){return`${n.field.canonicalString()} ${n.op} ${Ps(n.value)}`}(t):t instanceof rn?function(n){return n.op.toString()+" {"+n.getFilters().map(GI).join(" ,")+"}"}(t):"Filter"}class uM extends Le{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class cM extends Le{constructor(e,n){super(e,"in",n),this.keys=KI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class hM extends Le{constructor(e,n){super(e,"not-in",n),this.keys=KI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function KI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class dM extends Le{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return zm(n)&&va(n.arrayValue,this.value)}}class fM extends Le{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&va(this.value.arrayValue,n)}}class pM extends Le{constructor(e,n){super(e,"not-in",n)}matches(e){if(va(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!va(this.value.arrayValue,n)}}class mM extends Le{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!zm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>va(this.value.arrayValue,r))}}/**
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
 */class gM{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function d_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new gM(t,e,n,r,i,s,o)}function Bm(t){const e=ee(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Hf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Lc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ps(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ps(r)).join(",")),e.ue=n}return e.ue}function $m(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!aM(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!WI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!h_(t.startAt,e.startAt)&&h_(t.endAt,e.endAt)}function Wf(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class $s{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function yM(t,e,n,r,i,s,o,a){return new $s(t,e,n,r,i,s,o,a)}function qm(t){return new $s(t)}function f_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function QI(t){return t.collectionGroup!==null}function $o(t){const e=ee(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new je(Ge.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new _a(s,r))}),n.has(Ge.keyField().canonicalString())||e.ce.push(new _a(Ge.keyField(),r))}return e.ce}function gn(t){const e=ee(t);return e.le||(e.le=vM(e,$o(t))),e.le}function vM(t,e){if(t.limitType==="F")return d_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new _a(i.field,s)});const n=t.endAt?new Gu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Gu(t.startAt.position,t.startAt.inclusive):null;return d_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Gf(t,e){const n=t.filters.concat([e]);return new $s(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ku(t,e,n){return new $s(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Vc(t,e){return $m(gn(t),gn(e))&&t.limitType===e.limitType}function YI(t){return`${Bm(gn(t))}|lt:${t.limitType}`}function Bi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>GI(i)).join(", ")}]`),Lc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ps(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ps(i)).join(",")),`Target(${r})`}(gn(t))}; limitType=${t.limitType})`}function Fc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of $o(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=c_(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,$o(r),i)||r.endAt&&!function(o,a,u){const c=c_(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,$o(r),i))}(t,e)}function _M(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function XI(t){return(e,n)=>{let r=!1;for(const i of $o(t)){const s=wM(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function wM(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?Cs(u,c):Y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
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
 */class Oi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ni(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return jI(this.inner)}size(){return this.innerSize}}/**
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
 */const EM=new Ce(Q.comparator);function Xn(){return EM}const JI=new Ce(Q.comparator);function Ro(...t){let e=JI;for(const n of t)e=e.insert(n.key,n);return e}function ZI(t){let e=JI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ai(){return qo()}function eS(){return qo()}function qo(){return new Oi(t=>t.toString(),(t,e)=>t.isEqual(e))}const TM=new Ce(Q.comparator),IM=new je(Q.comparator);function oe(...t){let e=IM;for(const n of t)e=e.add(n);return e}const SM=new je(ae);function AM(){return SM}/**
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
 */function Hm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wu(e)?"-0":e}}function tS(t){return{integerValue:""+t}}function RM(t,e){return eM(e)?tS(e):Hm(t,e)}/**
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
 */class Uc{constructor(){this._=void 0}}function CM(t,e,n){return t instanceof Qu?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&jm(s)&&(s=Mc(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof wa?rS(t,e):t instanceof Ea?iS(t,e):function(i,s){const o=nS(i,s),a=p_(o)+p_(i.Pe);return qf(o)&&qf(i.Pe)?tS(a):Hm(i.serializer,a)}(t,e)}function PM(t,e,n){return t instanceof wa?rS(t,e):t instanceof Ea?iS(t,e):n}function nS(t,e){return t instanceof Yu?function(r){return qf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Qu extends Uc{}class wa extends Uc{constructor(e){super(),this.elements=e}}function rS(t,e){const n=sS(e);for(const r of t.elements)n.some(i=>En(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ea extends Uc{constructor(e){super(),this.elements=e}}function iS(t,e){let n=sS(e);for(const r of t.elements)n=n.filter(i=>!En(i,r));return{arrayValue:{values:n}}}class Yu extends Uc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function p_(t){return be(t.integerValue||t.doubleValue)}function sS(t){return zm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function kM(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof wa&&i instanceof wa||r instanceof Ea&&i instanceof Ea?Rs(r.elements,i.elements,En):r instanceof Yu&&i instanceof Yu?En(r.Pe,i.Pe):r instanceof Qu&&i instanceof Qu}(t.transform,e.transform)}class xM{constructor(e,n){this.version=e,this.transformResults=n}}class yn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new yn}static exists(e){return new yn(void 0,e)}static updateTime(e){return new yn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ru(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class jc{}function oS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Wm(t.key,yn.none()):new Va(t.key,t.data,yn.none());{const n=t.data,r=Ut.empty();let i=new je(Ge.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Di(t.key,r,new Xt(i.toArray()),yn.none())}}function bM(t,e,n){t instanceof Va?function(i,s,o){const a=i.value.clone(),u=g_(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Di?function(i,s,o){if(!ru(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=g_(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(aS(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ho(t,e,n,r){return t instanceof Va?function(s,o,a,u){if(!ru(s.precondition,o))return a;const c=s.value.clone(),d=y_(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Di?function(s,o,a,u){if(!ru(s.precondition,o))return a;const c=y_(s.fieldTransforms,u,o),d=o.data;return d.setAll(aS(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,a){return ru(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function NM(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=nS(r.transform,i||null);s!=null&&(n===null&&(n=Ut.empty()),n.set(r.field,s))}return n||null}function m_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Rs(r,i,(s,o)=>kM(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Va extends jc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Di extends jc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function aS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function g_(t,e,n){const r=new Map;he(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,PM(o,a,n[i]))}return r}function y_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,CM(s,o,e))}return r}class Wm extends jc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class OM extends jc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class DM{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&bM(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ho(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ho(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=eS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=oS(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&Rs(this.mutations,e.mutations,(n,r)=>m_(n,r))&&Rs(this.baseMutations,e.baseMutations,(n,r)=>m_(n,r))}}class Gm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){he(e.mutations.length===r.length);let i=function(){return TM}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Gm(e,n,r,i)}}/**
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
 */class LM{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class MM{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Oe,le;function VM(t){switch(t){default:return Y();case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0}}function lS(t){if(t===void 0)return Yn("GRPC error has no .code"),U.UNKNOWN;switch(t){case Oe.OK:return U.OK;case Oe.CANCELLED:return U.CANCELLED;case Oe.UNKNOWN:return U.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return U.INTERNAL;case Oe.UNAVAILABLE:return U.UNAVAILABLE;case Oe.UNAUTHENTICATED:return U.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case Oe.NOT_FOUND:return U.NOT_FOUND;case Oe.ALREADY_EXISTS:return U.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return U.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case Oe.ABORTED:return U.ABORTED;case Oe.OUT_OF_RANGE:return U.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return U.UNIMPLEMENTED;case Oe.DATA_LOSS:return U.DATA_LOSS;default:return Y()}}(le=Oe||(Oe={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function FM(){return new TextEncoder}/**
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
 */const UM=new di([4294967295,4294967295],0);function v_(t){const e=FM().encode(t),n=new NI;return n.update(e),new Uint8Array(n.digest())}function __(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new di([n,r],0),new di([i,s],0)]}class Km{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Co(`Invalid padding: ${n}`);if(r<0)throw new Co(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Co(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Co(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=di.fromNumber(this.Te)}Ee(e,n,r){let i=e.add(n.multiply(di.fromNumber(r)));return i.compare(UM)===1&&(i=new di([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=v_(e),[r,i]=__(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Km(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=v_(e),[r,i]=__(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Co extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class zc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Fa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new zc(Z.min(),i,new Ce(ae),Xn(),oe())}}class Fa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Fa(r,n,oe(),oe(),oe())}}/**
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
 */class iu{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class uS{constructor(e,n){this.targetId=e,this.me=n}}class cS{constructor(e,n,r=Ye.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class w_{constructor(){this.fe=0,this.ge=E_(),this.pe=Ye.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=oe(),n=oe(),r=oe();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Y()}}),new Fa(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=E_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,he(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class jM{constructor(e){this.Le=e,this.Be=new Map,this.ke=Xn(),this.qe=Nl(),this.Qe=Nl(),this.Ke=new Ce(ae)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.je(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.De(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.me.count,i=this.Ye(n);if(i){const s=i.target;if(Wf(s))if(r===0){const o=new Q(s.path);this.We(n,o,st.newNoDocument(o,Z.min()))}else he(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),u=a?this.et(a,e,o):1;if(u!==0){this.He(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Fr(r).toUint8Array()}catch(u){if(u instanceof zI)return As("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Km(o,i,s)}catch(u){return As(u instanceof Co?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Te===0?null:a}et(e,n,r){return n.me.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&Wf(a.target)){const u=new Q(a.target.path);this.st(u).has(o)||this.ot(o,u)||this.We(o,u,st.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=oe();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Ye(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new zc(e,n,this.Ke,this.ke,r);return this.ke=Xn(),this.qe=Nl(),this.Qe=Nl(),this.Ke=new Ce(ae),i}Ue(e,n){if(!this.je(e))return;const r=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.ot(e,n)?i.Fe(n,1):i.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Be.get(e);return n||(n=new w_,this.Be.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new je(ae),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new je(ae),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new w_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Nl(){return new Ce(Q.comparator)}function E_(){return new Ce(Q.comparator)}const zM={asc:"ASCENDING",desc:"DESCENDING"},BM={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},$M={and:"AND",or:"OR"};class qM{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Kf(t,e){return t.useProto3Json||Lc(e)?e:{value:e}}function Xu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function HM(t,e){return Xu(t,e.toTimestamp())}function vn(t){return he(!!t),Z.fromTimestamp(function(n){const r=Vr(n);return new Ue(r.seconds,r.nanos)}(t))}function Qm(t,e){return Qf(t,e).canonicalString()}function Qf(t,e){const n=function(i){return new ve(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function dS(t){const e=ve.fromString(t);return he(yS(e)),e}function Yf(t,e){return Qm(t.databaseId,e.path)}function hd(t,e){const n=dS(e);if(n.get(1)!==t.databaseId.projectId)throw new W(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(pS(n))}function fS(t,e){return Qm(t.databaseId,e)}function WM(t){const e=dS(t);return e.length===4?ve.emptyPath():pS(e)}function Xf(t){return new ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function pS(t){return he(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function T_(t,e,n){return{name:Yf(t,e),fields:n.value.mapValue.fields}}function GM(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(he(d===void 0||typeof d=="string"),Ye.fromBase64String(d||"")):(he(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Ye.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const d=c.code===void 0?U.UNKNOWN:lS(c.code);return new W(d,c.message||"")}(o);n=new cS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=hd(t,r.document.name),s=vn(r.document.updateTime),o=r.document.createTime?vn(r.document.createTime):Z.min(),a=new Ut({mapValue:{fields:r.document.fields}}),u=st.newFoundDocument(i,s,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];n=new iu(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=hd(t,r.document),s=r.readTime?vn(r.readTime):Z.min(),o=st.newNoDocument(i,s),a=r.removedTargetIds||[];n=new iu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=hd(t,r.document),s=r.removedTargetIds||[];n=new iu([],s,i,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new MM(i,s),a=r.targetId;n=new uS(a,o)}}return n}function KM(t,e){let n;if(e instanceof Va)n={update:T_(t,e.key,e.value)};else if(e instanceof Wm)n={delete:Yf(t,e.key)};else if(e instanceof Di)n={update:T_(t,e.key,e.data),updateMask:rV(e.fieldMask)};else{if(!(e instanceof OM))return Y();n={verify:Yf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Qu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof wa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ea)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Yu)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:HM(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y()}(t,e.precondition)),n}function QM(t,e){return t&&t.length>0?(he(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?vn(i.updateTime):vn(s);return o.isEqual(Z.min())&&(o=vn(s)),new xM(o,i.transformResults||[])}(n,e))):[]}function YM(t,e){return{documents:[fS(t,e.path)]}}function XM(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=fS(t,i);const s=function(c){if(c.length!==0)return gS(rn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:$i(m.field),direction:eV(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Kf(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ct:n,parent:i}}function JM(t){let e=WM(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){he(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const m=mS(p);return m instanceof rn&&HI(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(E){return new _a(qi(E.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(p){let m;return m=typeof p=="object"?p.value:p,Lc(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,w=p.values||[];return new Gu(w,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,w=p.values||[];return new Gu(w,m)}(n.endAt)),yM(e,i,o,s,a,"F",u,c)}function ZM(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function mS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=qi(n.unaryFilter.field);return Le.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=qi(n.unaryFilter.field);return Le.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=qi(n.unaryFilter.field);return Le.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=qi(n.unaryFilter.field);return Le.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(n){return Le.create(qi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return rn.create(n.compositeFilter.filters.map(r=>mS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y()}}(n.compositeFilter.op))}(t):Y()}function eV(t){return zM[t]}function tV(t){return BM[t]}function nV(t){return $M[t]}function $i(t){return{fieldPath:t.canonicalString()}}function qi(t){return Ge.fromServerFormat(t.fieldPath)}function gS(t){return t instanceof Le?function(n){if(n.op==="=="){if(u_(n.value))return{unaryFilter:{field:$i(n.field),op:"IS_NAN"}};if(l_(n.value))return{unaryFilter:{field:$i(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(u_(n.value))return{unaryFilter:{field:$i(n.field),op:"IS_NOT_NAN"}};if(l_(n.value))return{unaryFilter:{field:$i(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$i(n.field),op:tV(n.op),value:n.value}}}(t):t instanceof rn?function(n){const r=n.getFilters().map(i=>gS(i));return r.length===1?r[0]:{compositeFilter:{op:nV(n.op),filters:r}}}(t):Y()}function rV(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function yS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class vr{constructor(e,n,r,i,s=Z.min(),o=Z.min(),a=Ye.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new vr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new vr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class iV{constructor(e){this.ht=e}}function sV(t){const e=JM({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ku(e,e.limit,"L"):e}/**
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
 */class oV{constructor(){this.ln=new aV}addToCollectionParentIndex(e,n){return this.ln.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(Mr.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(Mr.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class aV{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new je(ve.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new je(ve.comparator)).toArray()}}/**
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
 */const I_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class gt{static withCacheSize(e){return new gt(e,gt.DEFAULT_COLLECTION_PERCENTILE,gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */class ks{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new ks(0)}static Qn(){return new ks(-1)}}/**
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
 */function S_([t,e],[n,r]){const i=ae(t,n);return i===0?ae(e,r):i}class lV{constructor(e){this.Gn=e,this.buffer=new je(S_),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();S_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class uV{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){H("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Bs(n)?H("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await zs(n)}await this.Yn(3e5)})}}class cV{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return F.resolve(Dc.oe);const r=new lV(n);return this.Zn.forEachTarget(e,i=>r.Hn(i.sequenceNumber)).next(()=>this.Zn.er(e,i=>r.Hn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(I_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),I_):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let r,i,s,o,a,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,a=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),zi()<=se.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function hV(t,e){return new cV(t,e)}/**
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
 */class dV{constructor(){this.changes=new Oi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,st.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class fV{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class pV{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ho(r.mutation,i,Xt.empty(),Ue.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=oe()){const i=ai();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ro();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ai();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,oe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Xn();const o=qo(),a=function(){return qo()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Di)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Ho(d.mutation,c,d.mutation.getFieldMask(),Ue.now())):o.set(c.key,Xt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var p;return a.set(c,new fV(d,(p=o.get(c))!==null&&p!==void 0?p:null))}),a))}recalculateAndSaveOverlays(e,n){const r=qo();let i=new Ce((o,a)=>o-a),s=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Xt.empty();d=a.applyToLocalView(c,d),r.set(u,d);const p=(i.get(a.batchId)||oe()).add(u);i=i.insert(a.batchId,p)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,d=u.value,p=eS();d.forEach(m=>{if(!s.has(m)){const w=oS(n.get(m),r.get(m));w!==null&&p.set(m,w),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return Q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):QI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):F.resolve(ai());let a=-1,u=s;return o.next(c=>F.forEach(c,(d,p)=>(a<p.largestBatchId&&(a=p.largestBatchId),s.get(d)?F.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,oe())).next(d=>({batchId:a,changes:ZI(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let i=Ro();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ro();return this.indexManager.getCollectionParents(e,s).next(a=>F.forEach(a,u=>{const c=function(p,m){return new $s(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,st.newInvalidDocument(d)))});let a=Ro();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&Ho(d.mutation,c,Xt.empty(),Ue.now()),Fc(n,c)&&(a=a.insert(u,c))}),a})}}/**
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
 */class mV{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return F.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:vn(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(i){return{name:i.name,query:sV(i.bundledQuery),readTime:vn(i.readTime)}}(n)),F.resolve()}}/**
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
 */class gV{constructor(){this.overlays=new Ce(Q.comparator),this.Er=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ai();return F.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.Tt(e,n,s)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Er.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Er.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=ai(),s=n.length+1,o=new Q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ce((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=ai(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=ai(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return F.resolve(a)}Tt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Er.get(i.largestBatchId).delete(r.key);this.Er.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new LM(n,r));let s=this.Er.get(n);s===void 0&&(s=oe(),this.Er.set(n,s)),this.Er.set(n,s.add(r.key))}}/**
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
 */class yV{constructor(){this.sessionToken=Ye.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
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
 */class Ym{constructor(){this.dr=new je(ze.Ar),this.Rr=new je(ze.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const r=new ze(e,n);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gr(new ze(e,n))}pr(e,n){e.forEach(r=>this.removeReference(r,n))}yr(e){const n=new Q(new ve([])),r=new ze(n,e),i=new ze(n,e+1),s=[];return this.Rr.forEachInRange([r,i],o=>{this.gr(o),s.push(o.key)}),s}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new Q(new ve([])),r=new ze(n,e),i=new ze(n,e+1);let s=oe();return this.Rr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ze(e,0),r=this.dr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ze{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return Q.comparator(e.key,n.key)||ae(e.br,n.br)}static Vr(e,n){return ae(e.br,n.br)||Q.comparator(e.key,n.key)}}/**
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
 */class vV{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new je(ze.Ar)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new DM(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.vr=this.vr.add(new ze(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Fr(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ze(n,0),i=new ze(n,Number.POSITIVE_INFINITY),s=[];return this.vr.forEachInRange([r,i],o=>{const a=this.Cr(o.br);s.push(a)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new je(ae);return n.forEach(i=>{const s=new ze(i,0),o=new ze(i,Number.POSITIVE_INFINITY);this.vr.forEachInRange([s,o],a=>{r=r.add(a.br)})}),F.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Q.isDocumentKey(s)||(s=s.child(""));const o=new ze(new Q(s),0);let a=new je(ae);return this.vr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.br)),!0)},o),F.resolve(this.Mr(a))}Mr(e){const n=[];return e.forEach(r=>{const i=this.Cr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){he(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return F.forEach(n.mutations,i=>{const s=new ze(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,n){const r=new ze(n,0),i=this.vr.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class _V{constructor(e){this.Nr=e,this.docs=function(){return new Ce(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():st.newInvalidDocument(n))}getEntries(e,n){let r=Xn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():st.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Xn();const o=n.path,a=new Q(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Y4(Q4(d),r)<=0||(i.has(d.key)||Fc(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Y()}Lr(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new wV(this)}getSize(e){return F.resolve(this.size)}}class wV extends dV{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.hr.addEntry(e,i)):this.hr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
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
 */class EV{constructor(e){this.persistence=e,this.Br=new Oi(n=>Bm(n),$m),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.kr=0,this.qr=new Ym,this.targetCount=0,this.Qr=ks.qn()}forEachTarget(e,n){return this.Br.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),F.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new ks(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Un(n),F.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Br.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Br.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),F.waitFor(s).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Br.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.qr.mr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.qr.pr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qr.Sr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.qr.containsKey(n))}}/**
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
 */class vS{constructor(e,n){this.Kr={},this.overlays={},this.$r=new Dc(0),this.Ur=!1,this.Ur=!0,this.Wr=new yV,this.referenceDelegate=e(this),this.Gr=new EV(this),this.indexManager=new oV,this.remoteDocumentCache=function(i){return new _V(i)}(r=>this.referenceDelegate.zr(r)),this.serializer=new iV(n),this.jr=new mV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new gV,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Kr[e.toKey()];return r||(r=new vV(n,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new TV(this.$r.next());return this.referenceDelegate.Hr(),r(i).next(s=>this.referenceDelegate.Jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Yr(e,n){return F.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,n)))}}class TV extends J4{constructor(e){super(),this.currentSequenceNumber=e}}class Xm{constructor(e){this.persistence=e,this.Zr=new Ym,this.Xr=null}static ei(e){return new Xm(e)}get ti(){if(this.Xr)return this.Xr;throw Y()}addReference(e,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),F.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(i=>this.ti.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.ti.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.ti,r=>{const i=Q.fromPath(r);return this.ni(e,i).next(s=>{s||n.removeEntry(i,Z.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return F.or([()=>F.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class Ju{constructor(e,n){this.persistence=e,this.ri=new Oi(r=>tM(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=hV(this,n)}static ei(e,n){return new Ju(e,n)}Hr(){}Jr(e){return F.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}nr(e){let n=0;return this.er(e,r=>{n++}).next(()=>n)}er(e,n){return F.forEach(this.ri,(r,i)=>this.ir(e,r,i).next(s=>s?F.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.Lr(e,o=>this.ir(e,o,n).next(a=>{a||(r++,s.removeEntry(o,Z.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),F.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),F.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=tu(e.data.value)),n}ir(e,n,r){return F.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.ri.get(n);return F.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Jm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Wi=r,this.Gi=i}static zi(e,n){let r=oe(),i=oe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Jm(e,n.fromCache,r,i)}}/**
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
 */class IV{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class SV{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return eN()?8:Z4(lt())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Xi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.es(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new IV;return this.ts(e,n,o).next(a=>{if(s.result=a,this.Hi)return this.ns(e,n,o,a.size)})}).next(()=>s.result)}ns(e,n,r,i){return r.documentReadCount<this.Ji?(zi()<=se.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Bi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),F.resolve()):(zi()<=se.DEBUG&&H("QueryEngine","Query:",Bi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Yi*i?(zi()<=se.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Bi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,gn(n))):F.resolve())}Xi(e,n){if(f_(n))return F.resolve(null);let r=gn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ku(n,null,"F"),r=gn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=oe(...s);return this.Zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.rs(n,a);return this.ss(n,c,o,u.readTime)?this.Xi(e,Ku(n,null,"F")):this.os(e,c,n,u)}))})))}es(e,n,r,i){return f_(n)||i.isEqual(Z.min())?F.resolve(null):this.Zi.getDocuments(e,r).next(s=>{const o=this.rs(n,s);return this.ss(n,o,r,i)?F.resolve(null):(zi()<=se.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Bi(n)),this.os(e,o,n,K4(i,-1)).next(a=>a))})}rs(e,n){let r=new je(XI(e));return n.forEach((i,s)=>{Fc(e,s)&&(r=r.add(s))}),r}ss(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ts(e,n,r){return zi()<=se.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Bi(n)),this.Zi.getDocumentsMatchingQuery(e,n,Mr.min(),r)}os(e,n,r,i){return this.Zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class AV{constructor(e,n,r,i){this.persistence=e,this._s=n,this.serializer=i,this.us=new Ce(ae),this.cs=new Oi(s=>Bm(s),$m),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new pV(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function RV(t,e,n,r){return new AV(t,e,n,r)}async function _S(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Ps(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=oe();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ts:c,removedBatchIds:o,addedBatchIds:a}))})})}function CV(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.hs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,d){const p=c.batch,m=p.keys();let w=F.resolve();return m.forEach(E=>{w=w.next(()=>d.getEntry(u,E)).next(T=>{const R=c.docVersions.get(E);he(R!==null),T.version.compareTo(R)<0&&(p.applyToRemoteDocument(T,c),T.isValidDocument()&&(T.setReadTime(c.commitVersion),d.addEntry(T)))})}),w.next(()=>a.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=oe();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function wS(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function PV(t,e){const n=ee(t),r=e.snapshotVersion;let i=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});i=n.us;const a=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;a.push(n.Gr.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.Gr.addMatchingKeys(s,d.addedDocuments,p)));let w=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?w=w.withResumeToken(Ye.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):d.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(d.resumeToken,r)),i=i.insert(p,w),function(T,R,_){return T.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(m,w,d)&&a.push(n.Gr.updateTargetData(s,w))});let u=Xn(),c=oe();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(kV(s,o,e.documentUpdates).next(d=>{u=d.Is,c=d.Es})),!r.isEqual(Z.min())){const d=n.Gr.getLastRemoteSnapshotVersion(s).next(p=>n.Gr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return F.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.us=i,s))}function kV(t,e,n){let r=oe(),i=oe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Xn();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(Z.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):H("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Is:o,Es:i}})}function xV(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function bV(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Gr.getTargetData(r,e).next(s=>s?(i=s,F.resolve(i)):n.Gr.allocateTargetId(r).next(o=>(i=new vr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Gr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.us.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.us=n.us.insert(r.targetId,r),n.cs.set(e,r.targetId)),r})}async function Jf(t,e,n){const r=ee(t),i=r.us.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Bs(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.us=r.us.remove(e),r.cs.delete(i.target)}function A_(t,e,n){const r=ee(t);let i=Z.min(),s=oe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=ee(u),m=p.cs.get(d);return m!==void 0?F.resolve(p.us.get(m)):p.Gr.getTargetData(c,d)}(r,o,gn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r._s.getDocumentsMatchingQuery(o,e,n?i:Z.min(),n?s:oe())).next(a=>(NV(r,_M(e),a),{documents:a,ds:s})))}function NV(t,e,n){let r=t.ls.get(e)||Z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ls.set(e,r)}class R_{constructor(){this.activeTargetIds=AM()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class OV{constructor(){this._o=new R_,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,r){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new R_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class DV{uo(e){}shutdown(){}}/**
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
 */class C_{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ol=null;function dd(){return Ol===null?Ol=function(){return 268435456+Math.round(2147483648*Math.random())}():Ol++,"0x"+Ol.toString(16)}/**
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
 */const LV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class MV{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const nt="WebChannelConnection";class VV extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${i}/databases/${s}`,this.xo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Oo(n,r,i,s,o){const a=dd(),u=this.No(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(c,s,o),this.Bo(n,u,c,i).then(d=>(H("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw As("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",u,"request:",i),d})}ko(n,r,i,s,o,a){return this.Oo(n,r,i,s,o)}Lo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+js}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}No(n,r){const i=LV[n];return`${this.Fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,r,i){const s=dd();return new Promise((o,a)=>{const u=new OI;u.setWithCredentials(!0),u.listenOnce(DI.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case eu.NO_ERROR:const d=u.getResponseJson();H(nt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case eu.TIMEOUT:H(nt,`RPC '${e}' ${s} timed out`),a(new W(U.DEADLINE_EXCEEDED,"Request time out"));break;case eu.HTTP_ERROR:const p=u.getStatus();if(H(nt,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const w=m==null?void 0:m.error;if(w&&w.status&&w.message){const E=function(R){const _=R.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(_)>=0?_:U.UNKNOWN}(w.status);a(new W(E,w.message))}else a(new W(U.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new W(U.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{H(nt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);H(nt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}qo(e,n,r){const i=dd(),s=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=VI(),a=MI(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Lo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");H(nt,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);let m=!1,w=!1;const E=new MV({Eo:R=>{w?H(nt,`Not sending because RPC '${e}' stream ${i} is closed:`,R):(m||(H(nt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),H(nt,`RPC '${e}' stream ${i} sending:`,R),p.send(R))},Ao:()=>p.close()}),T=(R,_,y)=>{R.listen(_,I=>{try{y(I)}catch(O){setTimeout(()=>{throw O},0)}})};return T(p,Ao.EventType.OPEN,()=>{w||(H(nt,`RPC '${e}' stream ${i} transport opened.`),E.So())}),T(p,Ao.EventType.CLOSE,()=>{w||(w=!0,H(nt,`RPC '${e}' stream ${i} transport closed`),E.Do())}),T(p,Ao.EventType.ERROR,R=>{w||(w=!0,As(nt,`RPC '${e}' stream ${i} transport errored:`,R),E.Do(new W(U.UNAVAILABLE,"The operation could not be completed")))}),T(p,Ao.EventType.MESSAGE,R=>{var _;if(!w){const y=R.data[0];he(!!y);const I=y,O=(I==null?void 0:I.error)||((_=I[0])===null||_===void 0?void 0:_.error);if(O){H(nt,`RPC '${e}' stream ${i} received error:`,O);const V=O.status;let j=function(S){const C=Oe[S];if(C!==void 0)return lS(C)}(V),A=O.message;j===void 0&&(j=U.INTERNAL,A="Unknown error status: "+V+" with message "+O.message),w=!0,E.Do(new W(j,A)),p.close()}else H(nt,`RPC '${e}' stream ${i} received:`,y),E.vo(y)}}),T(a,LI.STAT_EVENT,R=>{R.stat===Bf.PROXY?H(nt,`RPC '${e}' stream ${i} detected buffering proxy`):R.stat===Bf.NOPROXY&&H(nt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{E.bo()},0),E}}function fd(){return typeof document<"u"?document:null}/**
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
 */function Bc(t){return new qM(t,!0)}/**
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
 */class ES{constructor(e,n,r=1e3,i=1.5,s=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=i,this.$o=s,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,i,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class TS{constructor(e,n,r,i,s,o,a,u){this.li=e,this.Yo=r,this.Zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new ES(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(Yn(n.toString()),Yn("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Xo===n&&this.I_(r,i)},r=>{e(()=>{const i=new W(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(i)})})}I_(e,n){const r=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(i=>{r(()=>this.E_(i))}),this.stream.onMessage(i=>{r(()=>++this.n_==1?this.A_(i):this.onNext(i))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class FV extends TS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}d_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=GM(this.serializer,e),r=function(s){if(!("targetChange"in s))return Z.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Z.min():o.readTime?vn(o.readTime):Z.min()}(e);return this.listener.R_(n,r)}V_(e){const n={};n.database=Xf(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=Wf(u)?{documents:YM(s,u)}:{query:XM(s,u).ct},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=hS(s,o.resumeToken);const c=Kf(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(Z.min())>0){a.readTime=Xu(s,o.snapshotVersion.toTimestamp());const c=Kf(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=ZM(this.serializer,e);r&&(n.labels=r),this.c_(n)}m_(e){const n={};n.database=Xf(this.serializer),n.removeTarget=e,this.c_(n)}}class UV extends TS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,n){return this.connection.qo("Write",e,n)}A_(e){return he(!!e.streamToken),this.lastStreamToken=e.streamToken,he(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){he(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=QM(e.writeResults,e.commitTime),r=vn(e.commitTime);return this.listener.y_(r,n)}w_(){const e={};e.database=Xf(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>KM(this.serializer,r))};this.c_(n)}}/**
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
 */class jV extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.S_=!1}b_(){if(this.S_)throw new W(U.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,r,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Oo(e,Qf(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(U.UNKNOWN,s.toString())})}ko(e,n,r,i,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.ko(e,Qf(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(U.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class zV{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Yn(n),this.C_=!1):H("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class BV{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=s,this.Q_.uo(o=>{r.enqueueAndForget(async()=>{Li(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=ee(u);c.k_.add(4),await Ua(c),c.K_.set("Unknown"),c.k_.delete(4),await $c(c)}(this))})}),this.K_=new zV(r,i)}}async function $c(t){if(Li(t))for(const e of t.q_)await e(!0)}async function Ua(t){for(const e of t.q_)await e(!1)}function IS(t,e){const n=ee(t);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),ng(n)?tg(n):qs(n).s_()&&eg(n,e))}function Zm(t,e){const n=ee(t),r=qs(n);n.B_.delete(e),r.s_()&&SS(n,e),n.B_.size===0&&(r.s_()?r.a_():Li(n)&&n.K_.set("Unknown"))}function eg(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}qs(t).V_(e)}function SS(t,e){t.U_.xe(e),qs(t).m_(e)}function tg(t){t.U_=new jM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.B_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),qs(t).start(),t.K_.F_()}function ng(t){return Li(t)&&!qs(t).i_()&&t.B_.size>0}function Li(t){return ee(t).k_.size===0}function AS(t){t.U_=void 0}async function $V(t){t.K_.set("Online")}async function qV(t){t.B_.forEach((e,n)=>{eg(t,e)})}async function HV(t,e){AS(t),ng(t)?(t.K_.O_(e),tg(t)):t.K_.set("Unknown")}async function WV(t,e,n){if(t.K_.set("Online"),e instanceof cS&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.B_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.B_.delete(a),i.U_.removeTarget(a))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Zu(t,r)}else if(e instanceof iu?t.U_.$e(e):e instanceof uS?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(Z.min()))try{const r=await wS(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.U_.it(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.B_.get(c);d&&s.B_.set(c,d.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const d=s.B_.get(u);if(!d)return;s.B_.set(u,d.withResumeToken(Ye.EMPTY_BYTE_STRING,d.snapshotVersion)),SS(s,u);const p=new vr(d.target,u,c,d.sequenceNumber);eg(s,p)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await Zu(t,r)}}async function Zu(t,e,n){if(!Bs(e))throw e;t.k_.add(1),await Ua(t),t.K_.set("Offline"),n||(n=()=>wS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await $c(t)})}function RS(t,e){return e().catch(n=>Zu(t,n,e))}async function qc(t){const e=ee(t),n=jr(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;GV(e);)try{const i=await xV(e.localStore,r);if(i===null){e.L_.length===0&&n.a_();break}r=i.batchId,KV(e,i)}catch(i){await Zu(e,i)}CS(e)&&PS(e)}function GV(t){return Li(t)&&t.L_.length<10}function KV(t,e){t.L_.push(e);const n=jr(t);n.s_()&&n.f_&&n.g_(e.mutations)}function CS(t){return Li(t)&&!jr(t).i_()&&t.L_.length>0}function PS(t){jr(t).start()}async function QV(t){jr(t).w_()}async function YV(t){const e=jr(t);for(const n of t.L_)e.g_(n.mutations)}async function XV(t,e,n){const r=t.L_.shift(),i=Gm.from(r,e,n);await RS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await qc(t)}async function JV(t,e){e&&jr(t).f_&&await async function(r,i){if(function(o){return VM(o)&&o!==U.ABORTED}(i.code)){const s=r.L_.shift();jr(r).__(),await RS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await qc(r)}}(t,e),CS(t)&&PS(t)}async function P_(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=Li(n);n.k_.add(3),await Ua(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await $c(n)}async function ZV(t,e){const n=ee(t);e?(n.k_.delete(2),await $c(n)):e||(n.k_.add(2),await Ua(n),n.K_.set("Unknown"))}function qs(t){return t.W_||(t.W_=function(n,r,i){const s=ee(n);return s.b_(),new FV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Ro:$V.bind(null,t),mo:qV.bind(null,t),po:HV.bind(null,t),R_:WV.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),ng(t)?tg(t):t.K_.set("Unknown")):(await t.W_.stop(),AS(t))})),t.W_}function jr(t){return t.G_||(t.G_=function(n,r,i){const s=ee(n);return s.b_(),new UV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:QV.bind(null,t),po:JV.bind(null,t),p_:YV.bind(null,t),y_:XV.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await qc(t)):(await t.G_.stop(),t.L_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.L_.length} pending writes`),t.L_=[]))})),t.G_}/**
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
 */class rg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new zn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new rg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ig(t,e){if(Yn("AsyncQueue",`${e}: ${t}`),Bs(t))return new W(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ms{static emptySet(e){return new ms(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||Q.comparator(n.key,r.key):(n,r)=>Q.comparator(n.key,r.key),this.keyedMap=Ro(),this.sortedSet=new Ce(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ms)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ms;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class k_{constructor(){this.z_=new Ce(Q.comparator)}track(e){const n=e.doc.key,r=this.z_.get(n);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(n,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(n):e.type===1&&r.type===2?this.z_=this.z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):Y():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class xs{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new xs(e,n,ms.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Vc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class eF{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class tF{constructor(){this.queries=x_(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const i=ee(n),s=i.queries;i.queries=x_(),s.forEach((o,a)=>{for(const u of a.J_)u.onError(r)})})(this,new W(U.ABORTED,"Firestore shutting down"))}}function x_(){return new Oi(t=>YI(t),Vc)}async function kS(t,e){const n=ee(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Y_()&&e.Z_()&&(r=2):(s=new eF,r=e.Z_()?0:1);try{switch(r){case 0:s.H_=await n.onListen(i,!0);break;case 1:s.H_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=ig(o,`Initialization of query '${Bi(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.J_.push(e),e.ea(n.onlineState),s.H_&&e.ta(s.H_)&&sg(n)}async function xS(t,e){const n=ee(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.J_.indexOf(e);o>=0&&(s.J_.splice(o,1),s.J_.length===0?i=e.Z_()?0:1:!s.Y_()&&e.Z_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function nF(t,e){const n=ee(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.J_)a.ta(i)&&(r=!0);o.H_=i}}r&&sg(n)}function rF(t,e,n){const r=ee(t),i=r.queries.get(e);if(i)for(const s of i.J_)s.onError(n);r.queries.delete(e)}function sg(t){t.X_.forEach(e=>{e.next()})}var Zf,b_;(b_=Zf||(Zf={})).na="default",b_.Cache="cache";class bS{constructor(e,n,r){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new xs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const r=n!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=xs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Zf.Cache}}/**
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
 */class NS{constructor(e){this.key=e}}class OS{constructor(e){this.key=e}}class iF{constructor(e,n){this.query=e,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=oe(),this.mutatedKeys=oe(),this.Va=XI(e),this.ma=new ms(this.Va)}get fa(){return this.da}ga(e,n){const r=n?n.pa:new k_,i=n?n.ma:this.ma;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),w=Fc(this.query,p)?p:null,E=!!m&&this.mutatedKeys.has(m.key),T=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let R=!1;m&&w?m.data.isEqual(w.data)?E!==T&&(r.track({type:3,doc:w}),R=!0):this.ya(m,w)||(r.track({type:2,doc:w}),R=!0,(u&&this.Va(w,u)>0||c&&this.Va(w,c)<0)&&(a=!0)):!m&&w?(r.track({type:0,doc:w}),R=!0):m&&!w&&(r.track({type:1,doc:m}),R=!0,(u||c)&&(a=!0)),R&&(w?(o=o.add(w),s=T?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{ma:o,pa:r,ss:a,mutatedKeys:s}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((d,p)=>function(w,E){const T=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return T(w)-T(E)}(d.type,p.type)||this.Va(d.doc,p.doc)),this.wa(r),i=i!=null&&i;const a=n&&!i?this.Sa():[],u=this.Ra.size===0&&this.current&&!i?1:0,c=u!==this.Aa;return this.Aa=u,o.length!==0||c?{snapshot:new xs(this.query,e.ma,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:a}:{ba:a}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new k_,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.da=this.da.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=oe(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const n=[];return e.forEach(r=>{this.Ra.has(r)||n.push(new OS(r))}),this.Ra.forEach(r=>{e.has(r)||n.push(new NS(r))}),n}va(e){this.da=e.ds,this.Ra=oe();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return xs.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class sF{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class oF{constructor(e){this.key=e,this.Fa=!1}}class aF{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new Oi(a=>YI(a),Vc),this.Oa=new Map,this.Na=new Set,this.La=new Ce(Q.comparator),this.Ba=new Map,this.ka=new Ym,this.qa={},this.Qa=new Map,this.Ka=ks.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function lF(t,e,n=!0){const r=US(t);let i;const s=r.xa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Ca()):i=await DS(r,e,n,!0),i}async function uF(t,e){const n=US(t);await DS(n,e,!0,!1)}async function DS(t,e,n,r){const i=await bV(t.localStore,gn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await cF(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&IS(t.remoteStore,i),a}async function cF(t,e,n,r,i){t.Ua=(p,m,w)=>async function(T,R,_,y){let I=R.view.ga(_);I.ss&&(I=await A_(T.localStore,R.query,!1).then(({documents:A})=>R.view.ga(A,I)));const O=y&&y.targetChanges.get(R.targetId),V=y&&y.targetMismatches.get(R.targetId)!=null,j=R.view.applyChanges(I,T.isPrimaryClient,O,V);return O_(T,R.targetId,j.ba),j.snapshot}(t,p,m,w);const s=await A_(t.localStore,e,!0),o=new iF(e,s.ds),a=o.ga(s.documents),u=Fa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);O_(t,n,c.ba);const d=new sF(e,n,o);return t.xa.set(e,d),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),c.snapshot}async function hF(t,e,n){const r=ee(t),i=r.xa.get(e),s=r.Oa.get(i.targetId);if(s.length>1)return r.Oa.set(i.targetId,s.filter(o=>!Vc(o,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Jf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Zm(r.remoteStore,i.targetId),ep(r,i.targetId)}).catch(zs)):(ep(r,i.targetId),await Jf(r.localStore,i.targetId,!0))}async function dF(t,e){const n=ee(t),r=n.xa.get(e),i=n.Oa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Zm(n.remoteStore,r.targetId))}async function fF(t,e,n){const r=wF(t);try{const i=await function(o,a){const u=ee(o),c=Ue.now(),d=a.reduce((w,E)=>w.add(E.key),oe());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",w=>{let E=Xn(),T=oe();return u.hs.getEntries(w,d).next(R=>{E=R,E.forEach((_,y)=>{y.isValidDocument()||(T=T.add(_))})}).next(()=>u.localDocuments.getOverlayedDocuments(w,E)).next(R=>{p=R;const _=[];for(const y of a){const I=NM(y,p.get(y.key).overlayedDocument);I!=null&&_.push(new Di(y.key,I,BI(I.value.mapValue),yn.exists(!0)))}return u.mutationQueue.addMutationBatch(w,c,_,a)}).next(R=>{m=R;const _=R.applyToLocalDocumentSet(p,T);return u.documentOverlayCache.saveOverlays(w,R.batchId,_)})}).then(()=>({batchId:m.batchId,changes:ZI(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.qa[o.currentUser.toKey()];c||(c=new Ce(ae)),c=c.insert(a,u),o.qa[o.currentUser.toKey()]=c}(r,i.batchId,n),await ja(r,i.changes),await qc(r.remoteStore)}catch(i){const s=ig(i,"Failed to persist write");n.reject(s)}}async function LS(t,e){const n=ee(t);try{const r=await PV(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Ba.get(s);o&&(he(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Fa=!0:i.modifiedDocuments.size>0?he(o.Fa):i.removedDocuments.size>0&&(he(o.Fa),o.Fa=!1))}),await ja(n,r,e)}catch(r){await zs(r)}}function N_(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.xa.forEach((s,o)=>{const a=o.view.ea(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=ee(o);u.onlineState=a;let c=!1;u.queries.forEach((d,p)=>{for(const m of p.J_)m.ea(a)&&(c=!0)}),c&&sg(u)}(r.eventManager,e),i.length&&r.Ma.R_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function pF(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Ba.get(e),s=i&&i.key;if(s){let o=new Ce(Q.comparator);o=o.insert(s,st.newNoDocument(s,Z.min()));const a=oe().add(s),u=new zc(Z.min(),new Map,new Ce(ae),o,a);await LS(r,u),r.La=r.La.remove(s),r.Ba.delete(e),og(r)}else await Jf(r.localStore,e,!1).then(()=>ep(r,e,n)).catch(zs)}async function mF(t,e){const n=ee(t),r=e.batch.batchId;try{const i=await CV(n.localStore,e);VS(n,r,null),MS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ja(n,i)}catch(i){await zs(i)}}async function gF(t,e,n){const r=ee(t);try{const i=await function(o,a){const u=ee(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,a).next(p=>(he(p!==null),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);VS(r,e,n),MS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ja(r,i)}catch(i){await zs(i)}}function MS(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function VS(t,e,n){const r=ee(t);let i=r.qa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.qa[r.currentUser.toKey()]=i}}function ep(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Oa.get(e))t.xa.delete(r),n&&t.Ma.Wa(r,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(r=>{t.ka.containsKey(r)||FS(t,r)})}function FS(t,e){t.Na.delete(e.path.canonicalString());const n=t.La.get(e);n!==null&&(Zm(t.remoteStore,n),t.La=t.La.remove(e),t.Ba.delete(n),og(t))}function O_(t,e,n){for(const r of n)r instanceof NS?(t.ka.addReference(r.key,e),yF(t,r)):r instanceof OS?(H("SyncEngine","Document no longer in limbo: "+r.key),t.ka.removeReference(r.key,e),t.ka.containsKey(r.key)||FS(t,r.key)):Y()}function yF(t,e){const n=e.key,r=n.path.canonicalString();t.La.get(n)||t.Na.has(r)||(H("SyncEngine","New document in limbo: "+n),t.Na.add(r),og(t))}function og(t){for(;t.Na.size>0&&t.La.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new Q(ve.fromString(e)),r=t.Ka.next();t.Ba.set(r,new oF(n)),t.La=t.La.insert(n,r),IS(t.remoteStore,new vr(gn(qm(n.path)),r,"TargetPurposeLimboResolution",Dc.oe))}}async function ja(t,e,n){const r=ee(t),i=[],s=[],o=[];r.xa.isEmpty()||(r.xa.forEach((a,u)=>{o.push(r.Ua(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=Jm.zi(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ma.R_(i),await async function(u,c){const d=ee(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>F.forEach(c,m=>F.forEach(m.Wi,w=>d.persistence.referenceDelegate.addReference(p,m.targetId,w)).next(()=>F.forEach(m.Gi,w=>d.persistence.referenceDelegate.removeReference(p,m.targetId,w)))))}catch(p){if(!Bs(p))throw p;H("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const w=d.us.get(m),E=w.snapshotVersion,T=w.withLastLimboFreeSnapshotVersion(E);d.us=d.us.insert(m,T)}}}(r.localStore,s))}async function vF(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await _S(n.localStore,e);n.currentUser=e,function(s,o){s.Qa.forEach(a=>{a.forEach(u=>{u.reject(new W(U.CANCELLED,o))})}),s.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ja(n,r.Ts)}}function _F(t,e){const n=ee(t),r=n.Ba.get(e);if(r&&r.Fa)return oe().add(r.key);{let i=oe();const s=n.Oa.get(e);if(!s)return i;for(const o of s){const a=n.xa.get(o);i=i.unionWith(a.view.fa)}return i}}function US(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=LS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_F.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=pF.bind(null,e),e.Ma.R_=nF.bind(null,e.eventManager),e.Ma.Wa=rF.bind(null,e.eventManager),e}function wF(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=mF.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=gF.bind(null,e),e}class ec{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Bc(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return RV(this.persistence,new SV,e.initialUser,this.serializer)}ja(e){return new vS(Xm.ei,this.serializer)}za(e){return new OV}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ec.provider={build:()=>new ec};class EF extends ec{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){he(this.persistence.referenceDelegate instanceof Ju);const r=this.persistence.referenceDelegate.garbageCollector;return new uV(r,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?gt.withCacheSize(this.cacheSizeBytes):gt.DEFAULT;return new vS(r=>Ju.ei(r,n),this.serializer)}}class tp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>N_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=vF.bind(null,this.syncEngine),await ZV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new tF}()}createDatastore(e){const n=Bc(e.databaseInfo.databaseId),r=function(s){return new VV(s)}(e.databaseInfo);return function(s,o,a,u){return new jV(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new BV(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>N_(this.syncEngine,n,0),function(){return C_.p()?new C_:new DV}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,d){const p=new aF(i,s,o,a,u,c);return d&&(p.$a=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ee(i);H("RemoteStore","RemoteStore shutting down."),s.k_.add(5),await Ua(s),s.Q_.shutdown(),s.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}tp.provider={build:()=>new tp};/**
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
 */class jS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Yn("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class TF{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=rt.UNAUTHENTICATED,this.clientId=UI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{H("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ig(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function pd(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await _S(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function D_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await IF(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>P_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>P_(e.remoteStore,i)),t._onlineComponents=e}async function IF(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await pd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===U.FAILED_PRECONDITION||i.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;As("Error using user provided cache. Falling back to memory cache: "+n),await pd(t,new ec)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await pd(t,new EF(void 0));return t._offlineComponents}async function zS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await D_(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await D_(t,new tp))),t._onlineComponents}function SF(t){return zS(t).then(e=>e.syncEngine)}async function BS(t){const e=await zS(t),n=e.eventManager;return n.onListen=lF.bind(null,e.syncEngine),n.onUnlisten=hF.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=uF.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=dF.bind(null,e.syncEngine),n}function AF(t,e,n={}){const r=new zn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new jS({next:m=>{d.eu(),o.enqueueAndForget(()=>xS(s,p));const w=m.docs.has(a);!w&&m.fromCache?c.reject(new W(U.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&m.fromCache&&u&&u.source==="server"?c.reject(new W(U.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new bS(qm(a.path),d,{includeMetadataChanges:!0,ua:!0});return kS(s,p)}(await BS(t),t.asyncQueue,e,n,r)),r.promise}function RF(t,e,n={}){const r=new zn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new jS({next:m=>{d.eu(),o.enqueueAndForget(()=>xS(s,p)),m.fromCache&&u.source==="server"?c.reject(new W(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new bS(a,d,{includeMetadataChanges:!0,ua:!0});return kS(s,p)}(await BS(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function $S(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const L_=new Map;/**
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
 */function qS(t,e,n){if(!n)throw new W(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function CF(t,e,n,r){if(e===!0&&r===!0)throw new W(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function M_(t){if(!Q.isDocumentKey(t))throw new W(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function V_(t){if(Q.isDocumentKey(t))throw new W(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Hc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function Ai(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Hc(t);throw new W(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class F_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}CF("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$S((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new W(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new W(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new W(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Wc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new F_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new F_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new U4;switch(r.type){case"firstParty":return new $4(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=L_.get(n);r&&(H("ComponentProvider","Removing Datastore"),L_.delete(n),r.terminate())}(this),Promise.resolve()}}function PF(t,e,n,r={}){var i;const s=(t=Ai(t,Wc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&As("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=rt.MOCK_USER;else{a=Kb(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new W(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new rt(c)}t._authCredentials=new j4(new FI(a,u))}}/**
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
 */class Hr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Hr(this.firestore,e,this._query)}}class xt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xt(this.firestore,e,this._key)}}class kr extends Hr{constructor(e,n,r){super(e,n,qm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xt(this.firestore,null,new Q(e))}withConverter(e){return new kr(this.firestore,e,this._path)}}function U_(t,e,...n){if(t=ft(t),qS("collection","path",e),t instanceof Wc){const r=ve.fromString(e,...n);return V_(r),new kr(t,null,r)}{if(!(t instanceof xt||t instanceof kr))throw new W(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ve.fromString(e,...n));return V_(r),new kr(t.firestore,null,r)}}function ag(t,e,...n){if(t=ft(t),arguments.length===1&&(e=UI.newId()),qS("doc","path",e),t instanceof Wc){const r=ve.fromString(e,...n);return M_(r),new xt(t,null,new Q(r))}{if(!(t instanceof xt||t instanceof kr))throw new W(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ve.fromString(e,...n));return M_(r),new xt(t.firestore,t instanceof kr?t.converter:null,new Q(r))}}/**
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
 */class j_{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new ES(this,"async_queue_retry"),this.fu=()=>{const r=fd();r&&H("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=fd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=fd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new zn;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Bs(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Yn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const i=rg.createAndSchedule(this,e,n,r,s=>this.Su(s));return this.du.push(i),i}pu(){this.Au&&Y()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}class za extends Wc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new j_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new j_(e),this._firestoreClient=void 0,await e}}}function kF(t,e){const n=typeof t=="object"?t:Tm(),r=typeof t=="string"?t:"(default)",i=bi(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Wb("firestore");s&&PF(i,...s)}return i}function lg(t){if(t._terminated)throw new W(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||xF(t),t._firestoreClient}function xF(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,d){return new iM(a,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,$S(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new TF(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class bs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bs(Ye.fromBase64String(e))}catch(n){throw new W(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new bs(Ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ug{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class HS{constructor(e){this._methodName=e}}/**
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
 */class cg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}}/**
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
 */class hg{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const bF=/^__.*__$/;class NF{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Di(e,this.data,this.fieldMask,n,this.fieldTransforms):new Va(e,this.data,n,this.fieldTransforms)}}function WS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class dg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Fu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new dg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.xu({path:r,Nu:!1});return i.Lu(e),i}Bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.xu({path:r,Nu:!1});return i.Fu(),i}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return tc(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(WS(this.Mu)&&bF.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class OF{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Bc(e)}$u(e,n,r,i=!1){return new dg({Mu:e,methodName:n,Ku:r,path:Ge.emptyPath(),Nu:!1,Qu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function GS(t){const e=t._freezeSettings(),n=Bc(t._databaseId);return new OF(t._databaseId,!!e.ignoreUndefinedProperties,n)}function DF(t,e,n,r,i,s={}){const o=t.$u(s.merge||s.mergeFields?2:0,e,n,i);YS("Data must be an object, but it was:",o,r);const a=KS(r,o);let u,c;if(s.merge)u=new Xt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=MF(e,p,n);if(!o.contains(m))throw new W(U.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);FF(d,m)||d.push(m)}u=new Xt(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new NF(new Ut(a),u,c)}function LF(t,e,n,r=!1){return fg(n,t.$u(r?4:3,e))}function fg(t,e){if(QS(t=ft(t)))return YS("Unsupported field value:",e,t),KS(t,e);if(t instanceof HS)return function(r,i){if(!WS(i.Mu))throw i.qu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.qu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=fg(a,i.ku(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ft(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return RM(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ue.fromDate(r);return{timestampValue:Xu(i.serializer,s)}}if(r instanceof Ue){const s=new Ue(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Xu(i.serializer,s)}}if(r instanceof cg)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof bs)return{bytesValue:hS(i.serializer,r._byteString)};if(r instanceof xt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Qm(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof hg)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.qu("VectorValues must only contain numeric values.");return Hm(a.serializer,u)})}}}}}}(r,i);throw i.qu(`Unsupported field value: ${Hc(r)}`)}(t,e)}function KS(t,e){const n={};return jI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ni(t,(r,i)=>{const s=fg(i,e.Ou(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function QS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ue||t instanceof cg||t instanceof bs||t instanceof xt||t instanceof HS||t instanceof hg)}function YS(t,e,n){if(!QS(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Hc(n);throw r==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+r)}}function MF(t,e,n){if((e=ft(e))instanceof ug)return e._internalPath;if(typeof e=="string")return XS(t,e);throw tc("Field path arguments must be of type string or ",t,!1,void 0,n)}const VF=new RegExp("[~\\*/\\[\\]]");function XS(t,e,n){if(e.search(VF)>=0)throw tc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ug(...e.split("."))._internalPath}catch{throw tc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function tc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new W(U.INVALID_ARGUMENT,a+t+u)}function FF(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class JS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new xt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new UF(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(pg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class UF extends JS{data(){return super.data()}}function pg(t,e){return typeof e=="string"?XS(t,e):e instanceof ug?e._internalPath:e._delegate._internalPath}/**
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
 */function jF(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class mg{}class gg extends mg{}function zF(t,e,...n){let r=[];e instanceof mg&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof vg).length,a=s.filter(u=>u instanceof yg).length;if(o>1||o>0&&a>0)throw new W(U.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class yg extends gg{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new yg(e,n,r)}_apply(e){const n=this._parse(e);return ZS(e._query,n),new Hr(e.firestore,e.converter,Gf(e._query,n))}_parse(e){const n=GS(e.firestore);return function(s,o,a,u,c,d,p){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new W(U.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){B_(p,d);const w=[];for(const E of p)w.push(z_(u,s,E));m={arrayValue:{values:w}}}else m=z_(u,s,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||B_(p,d),m=LF(a,o,p,d==="in"||d==="not-in");return Le.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class vg extends mg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new vg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:rn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)ZS(o,u),o=Gf(o,u)}(e._query,n),new Hr(e.firestore,e.converter,Gf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class _g extends gg{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new _g(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new W(U.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new W(U.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new _a(s,o)}(e._query,this._field,this._direction);return new Hr(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new $s(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function BF(t,e="asc"){const n=e,r=pg("orderBy",t);return _g._create(r,n)}class wg extends gg{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new wg(e,n,r)}_apply(e){return new Hr(e.firestore,e.converter,Ku(e._query,this._limit,this._limitType))}}function $F(t){return wg._create("limit",t,"F")}function z_(t,e,n){if(typeof(n=ft(n))=="string"){if(n==="")throw new W(U.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!QI(e)&&n.indexOf("/")!==-1)throw new W(U.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ve.fromString(n));if(!Q.isDocumentKey(r))throw new W(U.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return a_(t,new Q(r))}if(n instanceof xt)return a_(t,n._key);throw new W(U.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Hc(n)}.`)}function B_(t,e){if(!Array.isArray(t)||t.length===0)throw new W(U.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ZS(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(U.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(U.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class qF{convertValue(e,n="none"){switch(Ur(e)){case 0:return null;case 1:return e.booleanValue;case 2:return be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Fr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Y()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ni(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>be(o.doubleValue));return new hg(s)}convertGeoPoint(e){return new cg(be(e.latitude),be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Mc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ga(e));default:return null}}convertTimestamp(e){const n=Vr(e);return new Ue(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ve.fromString(e);he(yS(r));const i=new ya(r.get(1),r.get(3)),s=new Q(r.popFirst(5));return i.isEqual(n)||Yn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function HF(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class Po{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class eA extends JS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new su(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(pg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class su extends eA{data(e={}){return super.data(e)}}class WF{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Po(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new su(this._firestore,this._userDataWriter,r.key,r,new Po(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new su(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Po(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new su(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Po(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:GF(a.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function GF(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}/**
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
 */function KF(t){t=Ai(t,xt);const e=Ai(t.firestore,za);return AF(lg(e),t._key).then(n=>JF(e,t,n))}class tA extends qF{constructor(e){super(),this.firestore=e}convertBytes(e){return new bs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new xt(this.firestore,null,n)}}function QF(t){t=Ai(t,Hr);const e=Ai(t.firestore,za),n=lg(e),r=new tA(e);return jF(t._query),RF(n,t._query).then(i=>new WF(e,r,t,i))}function YF(t){return nA(Ai(t.firestore,za),[new Wm(t._key,yn.none())])}function XF(t,e){const n=Ai(t.firestore,za),r=ag(t),i=HF(t.converter,e);return nA(n,[DF(GS(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,yn.exists(!1))]).then(()=>r)}function nA(t,e){return function(r,i){const s=new zn;return r.asyncQueue.enqueueAndForget(async()=>fF(await SF(r),i,s)),s.promise}(lg(t),e)}function JF(t,e,n){const r=n.docs.get(e._key),i=new tA(t);return new eA(t,i,e._key,r,new Po(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){js=i})(Fs),_n(new nn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new za(new z4(r.getProvider("auth-internal")),new H4(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new W(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ya(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Bt(t_,"4.7.5",e),Bt(t_,"4.7.5","esm2017")})();const ZF={apiKey:"AIzaSyB1x6aOUfLL17gtvyH9D6iS89Hmxm6_qNg",authDomain:"homepage-board-88e25.firebaseapp.com",projectId:"homepage-board-88e25",storageBucket:"homepage-board-88e25.firebasestorage.app",messagingSenderId:"775580599019",appId:"1:775580599019:web:b8734c86dac0c1e0cf34ae",measurementId:"G-21TRLLP7JW"},Eg=xT(ZF);L4(Eg);const yo=vL(Eg),e3=new Nn,ou=kF(Eg),t3=()=>{const[t,e]=M.useState(localStorage.getItem("isLogin")),[n,r]=M.useState("名無しさん"),[i,s]=M.useState(""),[o,a]=M.useState([]),u=()=>{CD(yo,e3).then(E=>{localStorage.setItem("isLogin",!0),e(!0)})},c=()=>{aD(yo).then(()=>{localStorage.clear(),e(!1)})},d=async()=>{if(!n||!i){console.log("投稿できません");return}await XF(U_(ou,"posts"),{user:n,postText:i,author:{username:yo.currentUser.displayName,id:yo.currentUser.uid},time:m()}),p(),s("")},p=async()=>{const E=await QF(zF(U_(ou,"posts"),BF("time","desc"),$F(20)));a(E.docs.map(T=>({...T.data(),id:T.id})))},m=()=>{const E=new Date(Date.now()+(new Date().getTimezoneOffset()+540)*60*1e3),T=E.getFullYear(),R=("00"+(E.getMonth()+1)).slice(-2),_=("00"+E.getDate()).slice(-2),y=("00"+E.getHours()).slice(-2),I=("00"+E.getMinutes()).slice(-2),O=("00"+E.getSeconds()).slice(-2);return console.log(`${T}/${R}/${_} ${y}:${I}:${O}`),`${T}/${R}/${_} ${y}:${I}:${O}`};M.useEffect(()=>{p()},[]);const w=async E=>{await YF(ag(ou,"posts",E)),p()};return x.jsxs("div",{className:"board__content",children:[x.jsx("h1",{children:"掲示板"}),t?x.jsxs(x.Fragment,{children:[x.jsxs("div",{className:"loginMenu",children:[x.jsx("p",{children:"ログアウトする"}),x.jsx("button",{onClick:c,children:"ログアウト"})]}),x.jsx("div",{className:"createPostPage",children:x.jsxs("div",{className:"postContainer",children:[x.jsx("h1",{children:"コメントを投稿する"}),x.jsxs("div",{className:"inputPost",children:[x.jsx("div",{children:"ハンドルネーム"}),x.jsx("input",{type:"text",placeholder:"タイトルを記入",value:n,onChange:E=>r(E.target.value)})]}),x.jsxs("div",{className:"inputPost",children:[x.jsx("div",{children:"コメント"}),x.jsx("textarea",{placeholder:"コメントを記入",value:i,onChange:E=>s(E.target.value)})]}),x.jsx("button",{className:"postButton",onClick:d,children:"投稿する"})]})})]}):x.jsx(x.Fragment,{children:x.jsxs("div",{className:"loginMenu",children:[x.jsx("p",{children:"ログインして書き込む"}),x.jsx("button",{onClick:u,children:"Googleでログイン"})]})}),x.jsx("div",{className:"postList",children:o.map(E=>{var T;return x.jsxs("div",{className:"postContents",children:[x.jsxs("h3",{children:["@",E.user]}),x.jsx("div",{className:"postTextContainer",children:E.postText}),x.jsx("div",{className:"postTextContainer",children:E.time}),E.author.id===((T=yo.currentUser)==null?void 0:T.uid)&&x.jsx("button",{onClick:()=>w(E.id),children:"削除"})]},E.id)})})]})};function rA(t,e){return function(){return t.apply(e,arguments)}}const{toString:n3}=Object.prototype,{getPrototypeOf:Tg}=Object,Gc=(t=>e=>{const n=n3.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),on=t=>(t=t.toLowerCase(),e=>Gc(e)===t),Kc=t=>e=>typeof e===t,{isArray:Hs}=Array,Ta=Kc("undefined");function r3(t){return t!==null&&!Ta(t)&&t.constructor!==null&&!Ta(t.constructor)&&bt(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const iA=on("ArrayBuffer");function i3(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&iA(t.buffer),e}const s3=Kc("string"),bt=Kc("function"),sA=Kc("number"),Qc=t=>t!==null&&typeof t=="object",o3=t=>t===!0||t===!1,au=t=>{if(Gc(t)!=="object")return!1;const e=Tg(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},a3=on("Date"),l3=on("File"),u3=on("Blob"),c3=on("FileList"),h3=t=>Qc(t)&&bt(t.pipe),d3=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||bt(t.append)&&((e=Gc(t))==="formdata"||e==="object"&&bt(t.toString)&&t.toString()==="[object FormData]"))},f3=on("URLSearchParams"),[p3,m3,g3,y3]=["ReadableStream","Request","Response","Headers"].map(on),v3=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ba(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),Hs(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(r=0;r<o;r++)a=s[r],e.call(null,t[a],a,t)}}function oA(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const li=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,aA=t=>!Ta(t)&&t!==li;function np(){const{caseless:t}=aA(this)&&this||{},e={},n=(r,i)=>{const s=t&&oA(e,i)||i;au(e[s])&&au(r)?e[s]=np(e[s],r):au(r)?e[s]=np({},r):Hs(r)?e[s]=r.slice():e[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Ba(arguments[r],n);return e}const _3=(t,e,n,{allOwnKeys:r}={})=>(Ba(e,(i,s)=>{n&&bt(i)?t[s]=rA(i,n):t[s]=i},{allOwnKeys:r}),t),w3=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),E3=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},T3=(t,e,n,r)=>{let i,s,o;const a={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)o=i[s],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Tg(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},I3=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},S3=t=>{if(!t)return null;if(Hs(t))return t;let e=t.length;if(!sA(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},A3=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Tg(Uint8Array)),R3=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(t,s[0],s[1])}},C3=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},P3=on("HTMLFormElement"),k3=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),$_=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),x3=on("RegExp"),lA=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};Ba(n,(i,s)=>{let o;(o=e(i,s,t))!==!1&&(r[s]=o||i)}),Object.defineProperties(t,r)},b3=t=>{lA(t,(e,n)=>{if(bt(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(bt(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},N3=(t,e)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return Hs(t)?r(t):r(String(t).split(e)),n},O3=()=>{},D3=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,md="abcdefghijklmnopqrstuvwxyz",q_="0123456789",uA={DIGIT:q_,ALPHA:md,ALPHA_DIGIT:md+md.toUpperCase()+q_},L3=(t=16,e=uA.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function M3(t){return!!(t&&bt(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const V3=t=>{const e=new Array(10),n=(r,i)=>{if(Qc(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const s=Hs(r)?[]:{};return Ba(r,(o,a)=>{const u=n(o,i+1);!Ta(u)&&(s[a]=u)}),e[i]=void 0,s}}return r};return n(t,0)},F3=on("AsyncFunction"),U3=t=>t&&(Qc(t)||bt(t))&&bt(t.then)&&bt(t.catch),cA=((t,e)=>t?setImmediate:e?((n,r)=>(li.addEventListener("message",({source:i,data:s})=>{i===li&&s===n&&r.length&&r.shift()()},!1),i=>{r.push(i),li.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",bt(li.postMessage)),j3=typeof queueMicrotask<"u"?queueMicrotask.bind(li):typeof process<"u"&&process.nextTick||cA,L={isArray:Hs,isArrayBuffer:iA,isBuffer:r3,isFormData:d3,isArrayBufferView:i3,isString:s3,isNumber:sA,isBoolean:o3,isObject:Qc,isPlainObject:au,isReadableStream:p3,isRequest:m3,isResponse:g3,isHeaders:y3,isUndefined:Ta,isDate:a3,isFile:l3,isBlob:u3,isRegExp:x3,isFunction:bt,isStream:h3,isURLSearchParams:f3,isTypedArray:A3,isFileList:c3,forEach:Ba,merge:np,extend:_3,trim:v3,stripBOM:w3,inherits:E3,toFlatObject:T3,kindOf:Gc,kindOfTest:on,endsWith:I3,toArray:S3,forEachEntry:R3,matchAll:C3,isHTMLForm:P3,hasOwnProperty:$_,hasOwnProp:$_,reduceDescriptors:lA,freezeMethods:b3,toObjectSet:N3,toCamelCase:k3,noop:O3,toFiniteNumber:D3,findKey:oA,global:li,isContextDefined:aA,ALPHABET:uA,generateString:L3,isSpecCompliantForm:M3,toJSONObject:V3,isAsyncFn:F3,isThenable:U3,setImmediate:cA,asap:j3};function te(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status?i.status:null)}L.inherits(te,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:L.toJSONObject(this.config),code:this.code,status:this.status}}});const hA=te.prototype,dA={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{dA[t]={value:t}});Object.defineProperties(te,dA);Object.defineProperty(hA,"isAxiosError",{value:!0});te.from=(t,e,n,r,i,s)=>{const o=Object.create(hA);return L.toFlatObject(t,o,function(u){return u!==Error.prototype},a=>a!=="isAxiosError"),te.call(o,t.message,e,n,r,i),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const z3=null;function rp(t){return L.isPlainObject(t)||L.isArray(t)}function fA(t){return L.endsWith(t,"[]")?t.slice(0,-2):t}function H_(t,e,n){return t?t.concat(e).map(function(i,s){return i=fA(i),!n&&s?"["+i+"]":i}).join(n?".":""):e}function B3(t){return L.isArray(t)&&!t.some(rp)}const $3=L.toFlatObject(L,{},null,function(e){return/^is[A-Z]/.test(e)});function Yc(t,e,n){if(!L.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=L.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(T,R){return!L.isUndefined(R[T])});const r=n.metaTokens,i=n.visitor||d,s=n.dots,o=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&L.isSpecCompliantForm(e);if(!L.isFunction(i))throw new TypeError("visitor must be a function");function c(E){if(E===null)return"";if(L.isDate(E))return E.toISOString();if(!u&&L.isBlob(E))throw new te("Blob is not supported. Use a Buffer instead.");return L.isArrayBuffer(E)||L.isTypedArray(E)?u&&typeof Blob=="function"?new Blob([E]):Buffer.from(E):E}function d(E,T,R){let _=E;if(E&&!R&&typeof E=="object"){if(L.endsWith(T,"{}"))T=r?T:T.slice(0,-2),E=JSON.stringify(E);else if(L.isArray(E)&&B3(E)||(L.isFileList(E)||L.endsWith(T,"[]"))&&(_=L.toArray(E)))return T=fA(T),_.forEach(function(I,O){!(L.isUndefined(I)||I===null)&&e.append(o===!0?H_([T],O,s):o===null?T:T+"[]",c(I))}),!1}return rp(E)?!0:(e.append(H_(R,T,s),c(E)),!1)}const p=[],m=Object.assign($3,{defaultVisitor:d,convertValue:c,isVisitable:rp});function w(E,T){if(!L.isUndefined(E)){if(p.indexOf(E)!==-1)throw Error("Circular reference detected in "+T.join("."));p.push(E),L.forEach(E,function(_,y){(!(L.isUndefined(_)||_===null)&&i.call(e,_,L.isString(y)?y.trim():y,T,m))===!0&&w(_,T?T.concat(y):[y])}),p.pop()}}if(!L.isObject(t))throw new TypeError("data must be an object");return w(t),e}function W_(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Ig(t,e){this._pairs=[],t&&Yc(t,this,e)}const pA=Ig.prototype;pA.append=function(e,n){this._pairs.push([e,n])};pA.toString=function(e){const n=e?function(r){return e.call(this,r,W_)}:W_;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function q3(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function mA(t,e,n){if(!e)return t;const r=n&&n.encode||q3,i=n&&n.serialize;let s;if(i?s=i(e,n):s=L.isURLSearchParams(e)?e.toString():new Ig(e,n).toString(r),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class G_{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){L.forEach(this.handlers,function(r){r!==null&&e(r)})}}const gA={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},H3=typeof URLSearchParams<"u"?URLSearchParams:Ig,W3=typeof FormData<"u"?FormData:null,G3=typeof Blob<"u"?Blob:null,K3={isBrowser:!0,classes:{URLSearchParams:H3,FormData:W3,Blob:G3},protocols:["http","https","file","blob","url","data"]},Sg=typeof window<"u"&&typeof document<"u",ip=typeof navigator=="object"&&navigator||void 0,Q3=Sg&&(!ip||["ReactNative","NativeScript","NS"].indexOf(ip.product)<0),Y3=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",X3=Sg&&window.location.href||"http://localhost",J3=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Sg,hasStandardBrowserEnv:Q3,hasStandardBrowserWebWorkerEnv:Y3,navigator:ip,origin:X3},Symbol.toStringTag,{value:"Module"})),It={...J3,...K3};function Z3(t,e){return Yc(t,new It.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return It.isNode&&L.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function e6(t){return L.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function t6(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function yA(t){function e(n,r,i,s){let o=n[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),u=s>=n.length;return o=!o&&L.isArray(i)?i.length:o,u?(L.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!a):((!i[o]||!L.isObject(i[o]))&&(i[o]=[]),e(n,r,i[o],s)&&L.isArray(i[o])&&(i[o]=t6(i[o])),!a)}if(L.isFormData(t)&&L.isFunction(t.entries)){const n={};return L.forEachEntry(t,(r,i)=>{e(e6(r),i,n,0)}),n}return null}function n6(t,e,n){if(L.isString(t))try{return(e||JSON.parse)(t),L.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(0,JSON.stringify)(t)}const $a={transitional:gA,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=L.isObject(e);if(s&&L.isHTMLForm(e)&&(e=new FormData(e)),L.isFormData(e))return i?JSON.stringify(yA(e)):e;if(L.isArrayBuffer(e)||L.isBuffer(e)||L.isStream(e)||L.isFile(e)||L.isBlob(e)||L.isReadableStream(e))return e;if(L.isArrayBufferView(e))return e.buffer;if(L.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Z3(e,this.formSerializer).toString();if((a=L.isFileList(e))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return Yc(a?{"files[]":e}:e,u&&new u,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),n6(e)):e}],transformResponse:[function(e){const n=this.transitional||$a.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(L.isResponse(e)||L.isReadableStream(e))return e;if(e&&L.isString(e)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?te.from(a,te.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:It.classes.FormData,Blob:It.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};L.forEach(["delete","get","head","post","put","patch"],t=>{$a.headers[t]={}});const r6=L.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),i6=t=>{const e={};let n,r,i;return t&&t.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||e[n]&&r6[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},K_=Symbol("internals");function vo(t){return t&&String(t).trim().toLowerCase()}function lu(t){return t===!1||t==null?t:L.isArray(t)?t.map(lu):String(t)}function s6(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const o6=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function gd(t,e,n,r,i){if(L.isFunction(r))return r.call(this,e,n);if(i&&(e=n),!!L.isString(e)){if(L.isString(r))return e.indexOf(r)!==-1;if(L.isRegExp(r))return r.test(e)}}function a6(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function l6(t,e){const n=L.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(i,s,o){return this[r].call(this,e,i,s,o)},configurable:!0})})}class St{constructor(e){e&&this.set(e)}set(e,n,r){const i=this;function s(a,u,c){const d=vo(u);if(!d)throw new Error("header name must be a non-empty string");const p=L.findKey(i,d);(!p||i[p]===void 0||c===!0||c===void 0&&i[p]!==!1)&&(i[p||u]=lu(a))}const o=(a,u)=>L.forEach(a,(c,d)=>s(c,d,u));if(L.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(L.isString(e)&&(e=e.trim())&&!o6(e))o(i6(e),n);else if(L.isHeaders(e))for(const[a,u]of e.entries())s(u,a,r);else e!=null&&s(n,e,r);return this}get(e,n){if(e=vo(e),e){const r=L.findKey(this,e);if(r){const i=this[r];if(!n)return i;if(n===!0)return s6(i);if(L.isFunction(n))return n.call(this,i,r);if(L.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=vo(e),e){const r=L.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||gd(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let i=!1;function s(o){if(o=vo(o),o){const a=L.findKey(r,o);a&&(!n||gd(r,r[a],a,n))&&(delete r[a],i=!0)}}return L.isArray(e)?e.forEach(s):s(e),i}clear(e){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!e||gd(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const n=this,r={};return L.forEach(this,(i,s)=>{const o=L.findKey(r,s);if(o){n[o]=lu(i),delete n[s];return}const a=e?a6(s):String(s).trim();a!==s&&delete n[s],n[a]=lu(i),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return L.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=e&&L.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[K_]=this[K_]={accessors:{}}).accessors,i=this.prototype;function s(o){const a=vo(o);r[a]||(l6(i,o),r[a]=!0)}return L.isArray(e)?e.forEach(s):s(e),this}}St.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);L.reduceDescriptors(St.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});L.freezeMethods(St);function yd(t,e){const n=this||$a,r=e||n,i=St.from(r.headers);let s=r.data;return L.forEach(t,function(a){s=a.call(n,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function vA(t){return!!(t&&t.__CANCEL__)}function Ws(t,e,n){te.call(this,t??"canceled",te.ERR_CANCELED,e,n),this.name="CanceledError"}L.inherits(Ws,te,{__CANCEL__:!0});function _A(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new te("Request failed with status code "+n.status,[te.ERR_BAD_REQUEST,te.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function u6(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function c6(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,s=0,o;return e=e!==void 0?e:1e3,function(u){const c=Date.now(),d=r[s];o||(o=c),n[i]=u,r[i]=c;let p=s,m=0;for(;p!==i;)m+=n[p++],p=p%t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),c-o<e)return;const w=d&&c-d;return w?Math.round(m*1e3/w):void 0}}function h6(t,e){let n=0,r=1e3/e,i,s;const o=(c,d=Date.now())=>{n=d,i=null,s&&(clearTimeout(s),s=null),t.apply(null,c)};return[(...c)=>{const d=Date.now(),p=d-n;p>=r?o(c,d):(i=c,s||(s=setTimeout(()=>{s=null,o(i)},r-p)))},()=>i&&o(i)]}const nc=(t,e,n=3)=>{let r=0;const i=c6(50,250);return h6(s=>{const o=s.loaded,a=s.lengthComputable?s.total:void 0,u=o-r,c=i(u),d=o<=a;r=o;const p={loaded:o,total:a,progress:a?o/a:void 0,bytes:u,rate:c||void 0,estimated:c&&a&&d?(a-o)/c:void 0,event:s,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(p)},n)},Q_=(t,e)=>{const n=t!=null;return[r=>e[0]({lengthComputable:n,total:t,loaded:r}),e[1]]},Y_=t=>(...e)=>L.asap(()=>t(...e)),d6=It.hasStandardBrowserEnv?function(){const e=It.navigator&&/(msie|trident)/i.test(It.navigator.userAgent),n=document.createElement("a");let r;function i(s){let o=s;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const a=L.isString(o)?i(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}(),f6=It.hasStandardBrowserEnv?{write(t,e,n,r,i,s){const o=[t+"="+encodeURIComponent(e)];L.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),L.isString(r)&&o.push("path="+r),L.isString(i)&&o.push("domain="+i),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function p6(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function m6(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function wA(t,e){return t&&!p6(e)?m6(t,e):e}const X_=t=>t instanceof St?{...t}:t;function Ri(t,e){e=e||{};const n={};function r(c,d,p){return L.isPlainObject(c)&&L.isPlainObject(d)?L.merge.call({caseless:p},c,d):L.isPlainObject(d)?L.merge({},d):L.isArray(d)?d.slice():d}function i(c,d,p){if(L.isUndefined(d)){if(!L.isUndefined(c))return r(void 0,c,p)}else return r(c,d,p)}function s(c,d){if(!L.isUndefined(d))return r(void 0,d)}function o(c,d){if(L.isUndefined(d)){if(!L.isUndefined(c))return r(void 0,c)}else return r(void 0,d)}function a(c,d,p){if(p in e)return r(c,d);if(p in t)return r(void 0,c)}const u={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,d)=>i(X_(c),X_(d),!0)};return L.forEach(Object.keys(Object.assign({},t,e)),function(d){const p=u[d]||i,m=p(t[d],e[d],d);L.isUndefined(m)&&p!==a||(n[d]=m)}),n}const EA=t=>{const e=Ri({},t);let{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:s,headers:o,auth:a}=e;e.headers=o=St.from(o),e.url=mA(wA(e.baseURL,e.url),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let u;if(L.isFormData(n)){if(It.hasStandardBrowserEnv||It.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((u=o.getContentType())!==!1){const[c,...d]=u?u.split(";").map(p=>p.trim()).filter(Boolean):[];o.setContentType([c||"multipart/form-data",...d].join("; "))}}if(It.hasStandardBrowserEnv&&(r&&L.isFunction(r)&&(r=r(e)),r||r!==!1&&d6(e.url))){const c=i&&s&&f6.read(s);c&&o.set(i,c)}return e},g6=typeof XMLHttpRequest<"u",y6=g6&&function(t){return new Promise(function(n,r){const i=EA(t);let s=i.data;const o=St.from(i.headers).normalize();let{responseType:a,onUploadProgress:u,onDownloadProgress:c}=i,d,p,m,w,E;function T(){w&&w(),E&&E(),i.cancelToken&&i.cancelToken.unsubscribe(d),i.signal&&i.signal.removeEventListener("abort",d)}let R=new XMLHttpRequest;R.open(i.method.toUpperCase(),i.url,!0),R.timeout=i.timeout;function _(){if(!R)return;const I=St.from("getAllResponseHeaders"in R&&R.getAllResponseHeaders()),V={data:!a||a==="text"||a==="json"?R.responseText:R.response,status:R.status,statusText:R.statusText,headers:I,config:t,request:R};_A(function(A){n(A),T()},function(A){r(A),T()},V),R=null}"onloadend"in R?R.onloadend=_:R.onreadystatechange=function(){!R||R.readyState!==4||R.status===0&&!(R.responseURL&&R.responseURL.indexOf("file:")===0)||setTimeout(_)},R.onabort=function(){R&&(r(new te("Request aborted",te.ECONNABORTED,t,R)),R=null)},R.onerror=function(){r(new te("Network Error",te.ERR_NETWORK,t,R)),R=null},R.ontimeout=function(){let O=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const V=i.transitional||gA;i.timeoutErrorMessage&&(O=i.timeoutErrorMessage),r(new te(O,V.clarifyTimeoutError?te.ETIMEDOUT:te.ECONNABORTED,t,R)),R=null},s===void 0&&o.setContentType(null),"setRequestHeader"in R&&L.forEach(o.toJSON(),function(O,V){R.setRequestHeader(V,O)}),L.isUndefined(i.withCredentials)||(R.withCredentials=!!i.withCredentials),a&&a!=="json"&&(R.responseType=i.responseType),c&&([m,E]=nc(c,!0),R.addEventListener("progress",m)),u&&R.upload&&([p,w]=nc(u),R.upload.addEventListener("progress",p),R.upload.addEventListener("loadend",w)),(i.cancelToken||i.signal)&&(d=I=>{R&&(r(!I||I.type?new Ws(null,t,R):I),R.abort(),R=null)},i.cancelToken&&i.cancelToken.subscribe(d),i.signal&&(i.signal.aborted?d():i.signal.addEventListener("abort",d)));const y=u6(i.url);if(y&&It.protocols.indexOf(y)===-1){r(new te("Unsupported protocol "+y+":",te.ERR_BAD_REQUEST,t));return}R.send(s||null)})},v6=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let r=new AbortController,i;const s=function(c){if(!i){i=!0,a();const d=c instanceof Error?c:this.reason;r.abort(d instanceof te?d:new Ws(d instanceof Error?d.message:d))}};let o=e&&setTimeout(()=>{o=null,s(new te(`timeout ${e} of ms exceeded`,te.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(c=>{c.unsubscribe?c.unsubscribe(s):c.removeEventListener("abort",s)}),t=null)};t.forEach(c=>c.addEventListener("abort",s));const{signal:u}=r;return u.unsubscribe=()=>L.asap(a),u}},_6=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let r=0,i;for(;r<n;)i=r+e,yield t.slice(r,i),r=i},w6=async function*(t,e){for await(const n of E6(t))yield*_6(n,e)},E6=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:r}=await e.read();if(n)break;yield r}}finally{await e.cancel()}},J_=(t,e,n,r)=>{const i=w6(t,e);let s=0,o,a=u=>{o||(o=!0,r&&r(u))};return new ReadableStream({async pull(u){try{const{done:c,value:d}=await i.next();if(c){a(),u.close();return}let p=d.byteLength;if(n){let m=s+=p;n(m)}u.enqueue(new Uint8Array(d))}catch(c){throw a(c),c}},cancel(u){return a(u),i.return()}},{highWaterMark:2})},Xc=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",TA=Xc&&typeof ReadableStream=="function",T6=Xc&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),IA=(t,...e)=>{try{return!!t(...e)}catch{return!1}},I6=TA&&IA(()=>{let t=!1;const e=new Request(It.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),Z_=64*1024,sp=TA&&IA(()=>L.isReadableStream(new Response("").body)),rc={stream:sp&&(t=>t.body)};Xc&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!rc[e]&&(rc[e]=L.isFunction(t[e])?n=>n[e]():(n,r)=>{throw new te(`Response type '${e}' is not supported`,te.ERR_NOT_SUPPORT,r)})})})(new Response);const S6=async t=>{if(t==null)return 0;if(L.isBlob(t))return t.size;if(L.isSpecCompliantForm(t))return(await new Request(It.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(L.isArrayBufferView(t)||L.isArrayBuffer(t))return t.byteLength;if(L.isURLSearchParams(t)&&(t=t+""),L.isString(t))return(await T6(t)).byteLength},A6=async(t,e)=>{const n=L.toFiniteNumber(t.getContentLength());return n??S6(e)},R6=Xc&&(async t=>{let{url:e,method:n,data:r,signal:i,cancelToken:s,timeout:o,onDownloadProgress:a,onUploadProgress:u,responseType:c,headers:d,withCredentials:p="same-origin",fetchOptions:m}=EA(t);c=c?(c+"").toLowerCase():"text";let w=v6([i,s&&s.toAbortSignal()],o),E;const T=w&&w.unsubscribe&&(()=>{w.unsubscribe()});let R;try{if(u&&I6&&n!=="get"&&n!=="head"&&(R=await A6(d,r))!==0){let V=new Request(e,{method:"POST",body:r,duplex:"half"}),j;if(L.isFormData(r)&&(j=V.headers.get("content-type"))&&d.setContentType(j),V.body){const[A,v]=Q_(R,nc(Y_(u)));r=J_(V.body,Z_,A,v)}}L.isString(p)||(p=p?"include":"omit");const _="credentials"in Request.prototype;E=new Request(e,{...m,signal:w,method:n.toUpperCase(),headers:d.normalize().toJSON(),body:r,duplex:"half",credentials:_?p:void 0});let y=await fetch(E);const I=sp&&(c==="stream"||c==="response");if(sp&&(a||I&&T)){const V={};["status","statusText","headers"].forEach(S=>{V[S]=y[S]});const j=L.toFiniteNumber(y.headers.get("content-length")),[A,v]=a&&Q_(j,nc(Y_(a),!0))||[];y=new Response(J_(y.body,Z_,A,()=>{v&&v(),T&&T()}),V)}c=c||"text";let O=await rc[L.findKey(rc,c)||"text"](y,t);return!I&&T&&T(),await new Promise((V,j)=>{_A(V,j,{data:O,headers:St.from(y.headers),status:y.status,statusText:y.statusText,config:t,request:E})})}catch(_){throw T&&T(),_&&_.name==="TypeError"&&/fetch/i.test(_.message)?Object.assign(new te("Network Error",te.ERR_NETWORK,t,E),{cause:_.cause||_}):te.from(_,_&&_.code,t,E)}}),op={http:z3,xhr:y6,fetch:R6};L.forEach(op,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const e1=t=>`- ${t}`,C6=t=>L.isFunction(t)||t===null||t===!1,SA={getAdapter:t=>{t=L.isArray(t)?t:[t];const{length:e}=t;let n,r;const i={};for(let s=0;s<e;s++){n=t[s];let o;if(r=n,!C6(n)&&(r=op[(o=String(n)).toLowerCase()],r===void 0))throw new te(`Unknown adapter '${o}'`);if(r)break;i[o||"#"+s]=r}if(!r){const s=Object.entries(i).map(([a,u])=>`adapter ${a} `+(u===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(e1).join(`
`):" "+e1(s[0]):"as no adapter specified";throw new te("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:op};function vd(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Ws(null,t)}function t1(t){return vd(t),t.headers=St.from(t.headers),t.data=yd.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),SA.getAdapter(t.adapter||$a.adapter)(t).then(function(r){return vd(t),r.data=yd.call(t,t.transformResponse,r),r.headers=St.from(r.headers),r},function(r){return vA(r)||(vd(t),r&&r.response&&(r.response.data=yd.call(t,t.transformResponse,r.response),r.response.headers=St.from(r.response.headers))),Promise.reject(r)})}const AA="1.7.7",Ag={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Ag[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const n1={};Ag.transitional=function(e,n,r){function i(s,o){return"[Axios v"+AA+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,a)=>{if(e===!1)throw new te(i(o," has been removed"+(n?" in "+n:"")),te.ERR_DEPRECATED);return n&&!n1[o]&&(n1[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};function P6(t,e,n){if(typeof t!="object")throw new te("options must be an object",te.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],o=e[s];if(o){const a=t[s],u=a===void 0||o(a,s,t);if(u!==!0)throw new te("option "+s+" must be "+u,te.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new te("Unknown option "+s,te.ERR_BAD_OPTION)}}const ap={assertOptions:P6,validators:Ag},ar=ap.validators;class fi{constructor(e){this.defaults=e,this.interceptors={request:new G_,response:new G_}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;const s=i.stack?i.stack.replace(/^.+\n/,""):"";try{r.stack?s&&!String(r.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+s):r.stack=s}catch{}}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Ri(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&ap.assertOptions(r,{silentJSONParsing:ar.transitional(ar.boolean),forcedJSONParsing:ar.transitional(ar.boolean),clarifyTimeoutError:ar.transitional(ar.boolean)},!1),i!=null&&(L.isFunction(i)?n.paramsSerializer={serialize:i}:ap.assertOptions(i,{encode:ar.function,serialize:ar.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&L.merge(s.common,s[n.method]);s&&L.forEach(["delete","get","head","post","put","patch","common"],E=>{delete s[E]}),n.headers=St.concat(o,s);const a=[];let u=!0;this.interceptors.request.forEach(function(T){typeof T.runWhen=="function"&&T.runWhen(n)===!1||(u=u&&T.synchronous,a.unshift(T.fulfilled,T.rejected))});const c=[];this.interceptors.response.forEach(function(T){c.push(T.fulfilled,T.rejected)});let d,p=0,m;if(!u){const E=[t1.bind(this),void 0];for(E.unshift.apply(E,a),E.push.apply(E,c),m=E.length,d=Promise.resolve(n);p<m;)d=d.then(E[p++],E[p++]);return d}m=a.length;let w=n;for(p=0;p<m;){const E=a[p++],T=a[p++];try{w=E(w)}catch(R){T.call(this,R);break}}try{d=t1.call(this,w)}catch(E){return Promise.reject(E)}for(p=0,m=c.length;p<m;)d=d.then(c[p++],c[p++]);return d}getUri(e){e=Ri(this.defaults,e);const n=wA(e.baseURL,e.url);return mA(n,e.params,e.paramsSerializer)}}L.forEach(["delete","get","head","options"],function(e){fi.prototype[e]=function(n,r){return this.request(Ri(r||{},{method:e,url:n,data:(r||{}).data}))}});L.forEach(["post","put","patch"],function(e){function n(r){return function(s,o,a){return this.request(Ri(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}fi.prototype[e]=n(),fi.prototype[e+"Form"]=n(!0)});class Rg{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(a=>{r.subscribe(a),s=a}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},e(function(s,o,a){r.reason||(r.reason=new Ws(s,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=r=>{e.abort(r)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new Rg(function(i){e=i}),cancel:e}}}function k6(t){return function(n){return t.apply(null,n)}}function x6(t){return L.isObject(t)&&t.isAxiosError===!0}const lp={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(lp).forEach(([t,e])=>{lp[e]=t});function RA(t){const e=new fi(t),n=rA(fi.prototype.request,e);return L.extend(n,fi.prototype,e,{allOwnKeys:!0}),L.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return RA(Ri(t,i))},n}const Me=RA($a);Me.Axios=fi;Me.CanceledError=Ws;Me.CancelToken=Rg;Me.isCancel=vA;Me.VERSION=AA;Me.toFormData=Yc;Me.AxiosError=te;Me.Cancel=Me.CanceledError;Me.all=function(e){return Promise.all(e)};Me.spread=k6;Me.isAxiosError=x6;Me.mergeConfig=Ri;Me.AxiosHeaders=St;Me.formToJSON=t=>yA(L.isHTMLForm(t)?new FormData(t):t);Me.getAdapter=SA.getAdapter;Me.HttpStatusCode=lp;Me.default=Me;const Gt={regionList:["北海道","東北","関東","中部北陸","東海","近畿","中国","四国","九州"],prefList:{北海道:["道北","道東","道南","道央"],東北:["青森県","岩手県","宮城県","秋田県","山形県","福島県"],関東:["茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県"],中部北陸:["新潟県","富山県","石川県","福井県","山梨県","長野県"],東海:["岐阜県","静岡県","愛知県","三重県"],近畿:["滋賀県","京都府","大阪府","兵庫県","奈良県","和歌山県"],中国:["鳥取県","島根県","岡山県","広島県","山口県"],四国:["徳島県","香川県","愛媛県","高知県"],九州:["福岡県","佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄県"]},cityList:{道北:[{city:"稚内",id:"011000"},{city:"旭川",id:"012010"},{city:"留萌",id:"012020"}],道東:[{city:"網走",id:"013010"},{city:"北見",id:"013020"},{city:"紋別",id:"013030"},{city:"根室",id:"014010"},{city:"釧路",id:"014020"},{city:"帯広",id:"014030"}],道南:[{city:"室蘭",id:"015010"},{city:"浦河",id:"015020"},{city:"函館",id:"017010"},{city:"江差",id:"017020"}],道央:[{city:"札幌",id:"016010"},{city:"岩見沢",id:"016020"},{city:"倶知安",id:"016030"}],青森県:[{city:"青森",id:"020010"},{city:"むつ",id:"020020"},{city:"八戸",id:"020030"}],岩手県:[{city:"盛岡",id:"030010"},{city:"宮古",id:"030020"},{city:"大船渡",id:"030030"}],宮城県:[{city:"仙台",id:"040010"},{city:"白石",id:"040020"}],秋田県:[{city:"秋田",id:"050010"},{city:"横手",id:"050020"}],山形県:[{city:"山形",id:"060010"},{city:"米沢",id:"060020"},{city:"酒田",id:"060030"},{city:"新庄",id:"060040"}],福島県:[{city:"福島",id:"070010"},{city:"小名浜",id:"070020"},{city:"若松",id:"070030"}],茨城県:[{city:"水戸",id:"080010"},{city:"土浦",id:"080020"}],栃木県:[{city:"宇都宮",id:"090010"},{city:"大田原",id:"090020"}],群馬県:[{city:"前橋",id:"100010"},{city:"みなかみ",id:"100020"}],埼玉県:[{city:"さいたま",id:"110010"},{city:"熊谷",id:"110020"},{city:"秩父",id:"110030"}],千葉県:[{city:"千葉",id:"120010"},{city:"銚子",id:"120020"},{city:"館山",id:"120030"}],東京都:[{city:"東京",id:"130010"},{city:"大島",id:"130020"},{city:"八丈島",id:"130030"},{city:"父島",id:"130040"}],神奈川県:[{city:"横浜",id:"140010"},{city:"小田原",id:"140020"}],新潟県:[{city:"新潟",id:"150010"},{city:"長岡",id:"150020"},{city:"高田",id:"150030"},{city:"相川",id:"150040"}],富山県:[{city:"富山",id:"160010"},{city:"伏木",id:"160020"}],石川県:[{city:"金沢",id:"170010"},{city:"輪島",id:"170020"}],福井県:[{city:"福井",id:"180010"},{city:"敦賀",id:"180020"}],山梨県:[{city:"甲府",id:"190010"},{city:"河口湖",id:"190020"}],長野県:[{city:"長野",id:"200010"},{city:"松本",id:"200020"},{city:"飯田",id:"200030"}],岐阜県:[{city:"岐阜",id:"210010"},{city:"高山",id:"210020"}],静岡県:[{city:"静岡",id:"220010"},{city:"網代",id:"220020"},{city:"三島",id:"220030"},{city:"浜松",id:"220040"}],愛知県:[{city:"名古屋",id:"230010"},{city:"豊橋",id:"230020"}],三重県:[{city:"津",id:"240010"},{city:"尾鷲",id:"240020"}],滋賀県:[{city:"大津",id:"250010"},{city:"彦根",id:"250020"}],京都府:[{city:"京都",id:"260010"},{city:"舞鶴",id:"260020"}],大阪府:[{city:"大阪",id:"270000"}],兵庫県:[{city:"神戸",id:"280010"},{city:"豊岡",id:"280020"}],奈良県:[{city:"奈良",id:"290010"},{city:"風屋",id:"290020"}],和歌山県:[{city:"和歌山",id:"300010"},{city:"潮岬",id:"300020"}],鳥取県:[{city:"鳥取",id:"310010"},{city:"米子",id:"310020"}],島根県:[{city:"松江",id:"320010"},{city:"浜田",id:"320020"},{city:"西郷",id:"320030"}],岡山県:[{city:"岡山",id:"330010"},{city:"津山",id:"330020"}],広島県:[{city:"広島",id:"340010"},{city:"庄原",id:"340020"}],山口県:[{city:"下関",id:"350010"},{city:"山口",id:"350020"},{city:"柳井",id:"350030"},{city:"萩",id:"350040"}],徳島県:[{city:"徳島",id:"360010"},{city:"日和佐",id:"360020"}],香川県:[{city:"高松",id:"370000"}],愛媛県:[{city:"松山",id:"380010"},{city:"新居浜",id:"380020"},{city:"宇和島",id:"380030"}],高知県:[{city:"高知",id:"390010"},{city:"室戸岬",id:"390020"},{city:"清水",id:"390030"}],福岡県:[{city:"福岡",id:"400010"},{city:"八幡",id:"400020"},{city:"飯塚",id:"400030"},{city:"久留米",id:"400040"}],佐賀県:[{city:"佐賀",id:"410010"},{city:"伊万里",id:"410020"}],長崎県:[{city:"長崎",id:"420010"},{city:"佐世保",id:"420020"},{city:"厳原",id:"420030"},{city:"福江",id:"420040"}],熊本県:[{city:"熊本",id:"430010"},{city:"阿蘇乙姫",id:"430020"},{city:"牛深",id:"430030"},{city:"人吉",id:"430040"}],大分県:[{city:"大分",id:"440010"},{city:"中津",id:"440020"},{city:"日田",id:"440030"},{city:"佐伯",id:"440040"}],宮崎県:[{city:"宮崎",id:"450010"},{city:"延岡",id:"450020"},{city:"都城",id:"450030"},{city:"高千穂",id:"450040"}],鹿児島県:[{city:"鹿児島",id:"460010"},{city:"鹿屋",id:"460020"},{city:"種子島",id:"460030"},{city:"名瀬",id:"460040"}],沖縄県:[{city:"那覇",id:"471010"},{city:"名護",id:"471020"},{city:"久米島",id:"471030"},{city:"南大東",id:"472000"},{city:"宮古島",id:"473000"},{city:"石垣島",id:"474010"},{city:"与那国島",id:"474020"}]}},b6="https://weather.tsukumijima.net/api/forecast",N6=()=>{const[t,e]=M.useState(Gt.cityList.東京都[0]),[n,r]=M.useState("東京都"),[i,s]=M.useState("関東"),[o,a]=M.useState(Gt.cityList.東京都),[u,c]=M.useState(Gt.prefList.関東),[d,p]=M.useState([]);M.useEffect(()=>{Me.get(`${b6}/city/${t.id}`).then(T=>{console.log(T.data.forecasts[0]),p(T.data.forecasts)})},[t]);const m=T=>{e(o.filter(R=>`${R.id}`===T.target.value)[0])},w=T=>{r(T.target.value),a(Gt.cityList[T.target.value]),e(Gt.cityList[T.target.value][0])},E=T=>{s(T.target.value),c(Gt.prefList[T.target.value]),r(Gt.prefList[T.target.value][0]);const R=Gt.prefList[T.target.value][0];a(Gt.cityList[R]),e(Gt.cityList[R][0])};return x.jsxs("div",{className:"weather__content",children:[x.jsxs("h1",{children:["天気予報","(β)"]}),x.jsxs("div",{children:["地方:",x.jsx("select",{onChange:E,value:i,children:Gt.regionList.map(T=>x.jsx("option",{value:T,children:T},T))})]}),x.jsxs("div",{children:["都道府県:",x.jsx("select",{onChange:w,value:n,children:u.map(T=>x.jsx("option",{value:T,children:T},T))})]}),x.jsxs("div",{children:["都市:",x.jsx("select",{onChange:m,value:t.id,children:o.map(T=>x.jsx("option",{value:T.id,children:T.city},T.id))})]}),x.jsx("div",{className:"weather__forecast",children:d.map(T=>x.jsxs("div",{className:"weather__block",children:[x.jsx("div",{children:x.jsx("h3",{children:`${T.dateLabel}(${T.date})`})}),x.jsxs("div",{className:"weather__telop",children:["天気：",T.telop,x.jsx("img",{src:T.image.url,className:"weather__image"})]}),x.jsx("div",{}),x.jsxs("div",{className:"weather__temperature",children:["最高気温",T.temperature.max.celsius||"--","℃・最低気温",T.temperature.min.celsius||"--","℃"]}),x.jsxs("div",{children:["降水確率",x.jsxs("table",{className:"weather__chanceOfRain",children:[x.jsx("thead",{children:x.jsxs("tr",{children:[x.jsx("th",{scope:"col",children:"0-6時"}),x.jsx("th",{scope:"col",children:"6-12時"}),x.jsx("th",{scope:"col",children:"12-18時"}),x.jsx("th",{scope:"col",children:"18-24時"})]})}),x.jsx("tbody",{children:x.jsxs("tr",{children:[x.jsx("td",{children:T.chanceOfRain.T00_06}),x.jsx("td",{children:T.chanceOfRain.T06_12}),x.jsx("td",{children:T.chanceOfRain.T12_18}),x.jsx("td",{children:T.chanceOfRain.T18_24})]})})]})]})]},T.date))}),x.jsxs("div",{children:["天気予報API:",x.jsx("a",{href:"https://weather.tsukumijima.net/",children:"https://weather.tsukumijima.net/"})]})]})},up={sheet:[{q:"1.寝つき",a:["問題ない（または、寝付くのに３０分以上かかったことは一度もない）","寝つくのに３０分以上かかったこともあるが、一週間の半分以下である","寝つくのに３０分以上かかったことが、週の半分以上ある","寝つくのに６０分以上かかったことが、（１週間の）半分以上ある"]},{q:"2.夜間の睡眠",a:["問題ない（夜間に目が覚めたことはない）","落ち着かない、浅い眠りで、何回か短く目が覚めたことがある","毎晩少なくとも１回は目が覚めるが、難なくまた眠ることができる","毎晩１回以上目が覚め、そのまま２０分以上眠れないことが、（１週間の）半分以上ある"]},{q:"3.早く目が覚めすぎる",a:["問題ない（または、ほとんどの場合、目が覚めるのは、起きなくてはいけない時間の、せいぜい３０分前である）","週の半分以上、起きなくてはならない時間より３０分以上早く目が覚める","ほとんどいつも、起きなくてはならない時間より１時間早く目が覚めてしまうが、最終的にはまた眠ることができる。","起きなくてはならない時間よりも１時間以上早く起きてしまい、もう一度眠ることができない"]},{q:"4.眠りすぎる",a:["問題ない（夜間、眠りすぎることはなく、日中に昼寝をすることもない）","２４時間のうち、眠っている時間は、昼寝を含めて１０時間ほどである","２４時間のうち、眠っている時間は、昼寝を含めて１２時間ほどである","２４時間のうち、昼寝を含めて１２時間以上眠っている"]},{q:"5.悲しい気持ち",a:["悲しいとは思わない","悲しいと思うことは、半分以下の時間である","悲しいと思うことが半分以上の時間ある","ほとんどすべての時間、悲しいと感じている"]},{q:"6.食欲低下",a:["普段の食欲とかわらない、または、食欲が増えた","普段よりいくぶん食べる回数が少ないか、量が少ない","普段よりかなり食べる量が少なく、食べるよう努めないといけない","まる１日（２４時間）ほとんどものを食べず、食べるのは極めて強く食べようと努めたり、誰かに食べるよう説得されたときだけである"]},{q:"7.食欲増進",a:["普段の食欲とかわらない、または、食欲が減った","普段より頻回に食べないといけないように感じる","普段とくらべて、常に食べる回数が多かったり、量が多かったりする","食事の時も、食事と食事の間も、食べ過ぎる衝動にかられている"]},{q:"8.体重減少（最近２週間で）",a:["体重は変わっていない、または、体重は増えた","少し体重が減った気がする","１キロ以上やせた","２キロ以上やせた"]},{q:"9.体重増加（最近２週間で）",a:["体重は変わっていない、または、体重は減った","少し体重が増えた気がする","１キロ以上太った","２キロ以上太った"]},{q:"10.集中力／決断",a:["集中力や決断力は普段とかわりない","ときどき決断しづらくなっているように感じたり、注意が散漫になるように感じる","ほとんどの時間、注意を集中したり、決断を下すのに苦労する","ものを読むこともじゅうぶんにできなかったり、小さなことですら決断できないほど集中力が落ちている"]},{q:"11.自分についての見方",a:["自分のことを、他の人と同じくらい価値があって、援助に値する人間だと思う","普段よりも自分を責めがちである","自分が他の人に迷惑をかけているとかなり信じている","自分の大小の欠陥について、ほとんど常に考えている"]},{q:"12.死や自殺についての考え",a:["死や自殺について考えることはない","人生が空っぽに感じ、生きている価値があるかどうか疑問に思う","自殺や死について、１週間に数回、数分間にわたって考えることがある","自殺や死について１日に何回か細部にわたって考える、または、具体的な自殺の計画を立てたり、実際に死のうとしたりしたことがあった"]},{q:"13.一般的な興味",a:["他人のことやいろいろな活動についての興味は普段と変わらない","人々や活動について、普段より興味が薄れていると感じる","以前好んでいた活動のうち、一つか二つのことにしか興味がなくなっていると感じる","以前好んでいた活動に、ほとんどまったく興味がなくなっている"]},{q:"14.エネルギーのレベル",a:["普段のエネルギーのレベルと変わりない","普段よりも疲れやすい","普段の日常の活動（例えば、買い物、宿題、料理、出勤など）をやり始めたり、やりとげるのに、大きな努力が必要である","ただエネルギーがないという理由だけで、日常の活動のほとんどが実行できない"]},{q:"15.動きが遅くなった気がする",a:["普段どおりの速さで考えたり、話したり、動いたりしている","頭の働きが遅くなっていたり、声が単調で平坦に感じる","ほとんどの質問に答えるのに何秒かかかり、考えが遅くなっているのがわかる","最大の努力をしないと、質問に答えられないことがしばしばである"]},{q:"16.落ち着かない",a:["落ち着かない気持ちはない。","しばしばそわそわしていて、手をもんだり、座り直したりせずにはいられない","動き回りたい衝動があって、かなり落ち着かない。","ときどき、座っていられなくて歩き回らずにはいられないことがある"]}],calcScore:t=>{if(Math.min(...t)===-1)return-1;let e=0;return e+=Math.max(...t.slice(0,4)),e+=t[4],e+=Math.max(...t.slice(5,9)),e+=t.slice(9,14).reduce((n,r)=>n+r,0),e+=Math.max(...t.slice(14,16)),e}},O6=up.sheet.map(t=>-1),D6=()=>{const[t,e]=M.useState(O6),[n,r]=M.useState(""),[i,s]=M.useState(""),o=(u,c)=>{let d=[...t];d[u]=c,e(d)},a=()=>{const u=up.calcScore(t);if(u===-1){r("未入力の項目があります");const c=t.indexOf(-1),p=document.getElementById(`question_${c}`).getBoundingClientRect().top+window.scrollY-70;return window.scrollTo({top:p,behavior:"smooth"}),!1}else r(""),u<=5?s(x.jsxs(x.Fragment,{children:[x.jsx("h2",{children:"結果"}),x.jsxs("h3",{children:[u,"点 : 正常"]}),"心身の不調を感じた時は、医療機関に相談してください。"]})):u<=10?s(x.jsxs(x.Fragment,{children:[x.jsx("h2",{children:"結果"}),x.jsxs("h3",{children:[u,"点 : 軽度"]}),"うつ病の可能性がありますので、医療機関などに相談することをおすすめします。"]})):u<=15?s(x.jsxs(x.Fragment,{children:[x.jsx("h2",{children:"結果"}),x.jsxs("h3",{children:[u,"点 : 中等度"]}),"うつ病の可能性がありますので、医療機関などに相談することをおすすめします。"]})):u<=20?s(x.jsxs(x.Fragment,{children:[x.jsx("h2",{children:"結果"}),x.jsxs("h3",{children:[u,"点 : 重度"]}),"うつ病の可能性がありますので、医療機関などに相談することをおすすめします。"]})):u<=27&&s(x.jsxs(x.Fragment,{children:[x.jsx("h2",{children:"結果"}),x.jsxs("h3",{children:[u,"点 : 極めて重度"]}),"うつ病の可能性がありますので、医療機関などに相談することをおすすめします。"]}))};return x.jsxs("div",{className:"depression__content",children:[x.jsx("h1",{children:"うつ病チェック"}),x.jsx("span",{children:"うつ病チェックを簡易抑うつ症状尺度（QIDS-J）を使って行いましょう。"}),x.jsx("h2",{children:"簡易抑うつ症状尺度（QIDS-J）とは"}),x.jsx("span",{children:"簡易抑うつ症状尺度（Quick Inventory of Depressive Symptomatology：QIDS-J）は、16項目の自己記入式の評価尺度で、うつ病の重症度を評価できるほか、アメリカ精神医学会の診断基準 DSM-IV の大うつ病性障害（中核的なうつ病）の診断基準に対応しているという特長を持っています。世界的に知られた精神科医 John Rush 先生によって開発され、世界 10カ国以上で使用されています。日本語版は、慶応大学医学部の藤澤大介先生のグループによって作成されました。"}),x.jsx("h2",{children:"採点方法"}),x.jsx("span",{children:"睡眠に関する項目（第１－４項目）、食欲／体重に関する項目（第６－９項目）、精神運動状態に関する２項目（第１５、１６項目）は、それぞれの項目で最も点数が高いものを１つだけ選んで点数化します。それ以外の項目（第５、１０，１１，１２，１３，１４項目）は、それぞれの点数を書き出します。うつ病の重症度は、睡眠、食欲／体重、精神運動、その他6項目を合わせて9項目の合計点数（０点から２７点）で評価します。原版QIDSでは、点数と重症度は下記のようになっています。"}),x.jsxs("table",{className:"depression__table",children:[x.jsx("thead",{children:x.jsxs("tr",{children:[x.jsx("th",{scope:"col",children:"点数"}),x.jsx("th",{scope:"col",children:"0-5"}),x.jsx("th",{scope:"col",children:"6-10"}),x.jsx("th",{scope:"col",children:"11-15"}),x.jsx("th",{scope:"col",children:"16-20"}),x.jsx("th",{scope:"col",children:"21-27"})]})}),x.jsx("tbody",{children:x.jsxs("tr",{children:[x.jsx("th",{scope:"row",children:"重症度"}),x.jsx("td",{children:"正常"}),x.jsx("td",{children:"軽度"}),x.jsx("td",{children:"中等度"}),x.jsx("td",{children:"重度"}),x.jsx("td",{children:"極めて重度"})]})})]}),x.jsx("span",{children:"各項目が大うつ病性障害の症状に対応しているので、うつ症状の評価やスクリーニングに使えるほか、合計点を算出することでうつ状態の変化を見ることができます。6点以上の場合にはうつ病の可能性がありますので、まず医療機関に相談してください。"}),x.jsx("h2",{children:"質問"}),x.jsx("div",{className:"depression__question-container",children:up.sheet.map((u,c)=>x.jsxs("div",{className:"depression__question",children:[x.jsx("h3",{id:`question_${c}`,children:u.q}),x.jsx("div",{className:"depression__errmsg",children:n&&t[c]===-1&&"未入力です"}),x.jsx("div",{className:"depression__answer",children:u.a.map((d,p)=>x.jsx("div",{children:x.jsxs("label",{children:[x.jsx("input",{type:"radio",checked:t[c]===p,onChange:()=>o(c,p)}),`${p}. ${d}`]})},`question_${c}_answer_${p}`))})]},`question_${c}`))}),x.jsx("button",{onClick:a,children:"点数を計算する"}),x.jsx("div",{className:"depression__errmsg",children:n}),x.jsx("div",{className:"depression__result",children:i}),x.jsxs("div",{className:"depression__footer",children:["出典",x.jsx("div",{children:x.jsx("a",{href:"https://www.mhlw.go.jp/bunya/shougaihoken/kokoro/dl/02.pdf",children:"https://www.mhlw.go.jp/bunya/shougaihoken/kokoro/dl/02.pdf"})})]})]})},L6="/homepage";function M6(){M.useState(localStorage.getItem("isLoaded"));const[t,e]=M.useState(""),n=async()=>{const r=await KF(ag(ou,"access","counter"));e(r.data().count)};return M.useEffect(()=>{n()},[]),x.jsxs(e2,{basename:L6,children:[x.jsx(Mb,{}),x.jsx("div",{className:"page-content",children:x.jsxs(xk,{children:[x.jsx(Io,{path:"/",element:x.jsx(Fb,{count:t})}),x.jsx(Io,{path:"/board",element:x.jsx(t3,{})}),x.jsx(Io,{path:"/weather",element:x.jsx(N6,{})}),x.jsx(Io,{path:"/depression",element:x.jsx(D6,{})})]})}),x.jsx(Vb,{})]})}yE(document.getElementById("root")).render(x.jsx(M.StrictMode,{children:x.jsx(M6,{})}));
