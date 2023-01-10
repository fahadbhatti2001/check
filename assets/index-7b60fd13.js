function by(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Ty(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $i={},Cy={get exports(){return $i},set exports(e){$i=e}},Ma={},I={},Py={get exports(){return I},set exports(e){I=e}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yo=Symbol.for("react.element"),Ny=Symbol.for("react.portal"),Ay=Symbol.for("react.fragment"),Ry=Symbol.for("react.strict_mode"),Oy=Symbol.for("react.profiler"),Ly=Symbol.for("react.provider"),Dy=Symbol.for("react.context"),My=Symbol.for("react.forward_ref"),$y=Symbol.for("react.suspense"),Uy=Symbol.for("react.memo"),Fy=Symbol.for("react.lazy"),Zd=Symbol.iterator;function jy(e){return e===null||typeof e!="object"?null:(e=Zd&&e[Zd]||e["@@iterator"],typeof e=="function"?e:null)}var Mm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$m=Object.assign,Um={};function Wr(e,t,n){this.props=e,this.context=t,this.refs=Um,this.updater=n||Mm}Wr.prototype.isReactComponent={};Wr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Wr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Fm(){}Fm.prototype=Wr.prototype;function nf(e,t,n){this.props=e,this.context=t,this.refs=Um,this.updater=n||Mm}var rf=nf.prototype=new Fm;rf.constructor=nf;$m(rf,Wr.prototype);rf.isPureReactComponent=!0;var eh=Array.isArray,jm=Object.prototype.hasOwnProperty,of={current:null},zm={key:!0,ref:!0,__self:!0,__source:!0};function Bm(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)jm.call(t,r)&&!zm.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:yo,type:e,key:o,ref:s,props:i,_owner:of.current}}function zy(e,t){return{$$typeof:yo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function sf(e){return typeof e=="object"&&e!==null&&e.$$typeof===yo}function By(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var th=/\/+/g;function Pl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?By(""+e.key):t.toString(36)}function Is(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case yo:case Ny:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Pl(s,0):r,eh(i)?(n="",e!=null&&(n=e.replace(th,"$&/")+"/"),Is(i,t,n,"",function(u){return u})):i!=null&&(sf(i)&&(i=zy(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(th,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",eh(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Pl(o,a);s+=Is(o,t,n,l,i)}else if(l=jy(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Pl(o,a++),s+=Is(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Vo(e,t,n){if(e==null)return e;var r=[],i=0;return Is(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Hy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Le={current:null},bs={transition:null},Vy={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:bs,ReactCurrentOwner:of};j.Children={map:Vo,forEach:function(e,t,n){Vo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Vo(e,function(){t++}),t},toArray:function(e){return Vo(e,function(t){return t})||[]},only:function(e){if(!sf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};j.Component=Wr;j.Fragment=Ay;j.Profiler=Oy;j.PureComponent=nf;j.StrictMode=Ry;j.Suspense=$y;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vy;j.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=$m({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=of.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)jm.call(t,l)&&!zm.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:yo,type:e.type,key:i,ref:o,props:r,_owner:s}};j.createContext=function(e){return e={$$typeof:Dy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ly,_context:e},e.Consumer=e};j.createElement=Bm;j.createFactory=function(e){var t=Bm.bind(null,e);return t.type=e,t};j.createRef=function(){return{current:null}};j.forwardRef=function(e){return{$$typeof:My,render:e}};j.isValidElement=sf;j.lazy=function(e){return{$$typeof:Fy,_payload:{_status:-1,_result:e},_init:Hy}};j.memo=function(e,t){return{$$typeof:Uy,type:e,compare:t===void 0?null:t}};j.startTransition=function(e){var t=bs.transition;bs.transition={};try{e()}finally{bs.transition=t}};j.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};j.useCallback=function(e,t){return Le.current.useCallback(e,t)};j.useContext=function(e){return Le.current.useContext(e)};j.useDebugValue=function(){};j.useDeferredValue=function(e){return Le.current.useDeferredValue(e)};j.useEffect=function(e,t){return Le.current.useEffect(e,t)};j.useId=function(){return Le.current.useId()};j.useImperativeHandle=function(e,t,n){return Le.current.useImperativeHandle(e,t,n)};j.useInsertionEffect=function(e,t){return Le.current.useInsertionEffect(e,t)};j.useLayoutEffect=function(e,t){return Le.current.useLayoutEffect(e,t)};j.useMemo=function(e,t){return Le.current.useMemo(e,t)};j.useReducer=function(e,t,n){return Le.current.useReducer(e,t,n)};j.useRef=function(e){return Le.current.useRef(e)};j.useState=function(e){return Le.current.useState(e)};j.useSyncExternalStore=function(e,t,n){return Le.current.useSyncExternalStore(e,t,n)};j.useTransition=function(){return Le.current.useTransition()};j.version="18.2.0";(function(e){e.exports=j})(Py);const $a=Ty(I),xu=by({__proto__:null,default:$a},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wy=I,Gy=Symbol.for("react.element"),Ky=Symbol.for("react.fragment"),Yy=Object.prototype.hasOwnProperty,Xy=Wy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qy={key:!0,ref:!0,__self:!0,__source:!0};function Hm(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Yy.call(t,r)&&!qy.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Gy,type:e,key:o,ref:s,props:i,_owner:Xy.current}}Ma.Fragment=Ky;Ma.jsx=Hm;Ma.jsxs=Hm;(function(e){e.exports=Ma})(Cy);const wo=$i.Fragment,_=$i.jsx,A=$i.jsxs;var Iu={},bu={},Qy={get exports(){return bu},set exports(e){bu=e}},Ye={},Tu={},Jy={get exports(){return Tu},set exports(e){Tu=e}},Vm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,M){var F=P.length;P.push(M);e:for(;0<F;){var oe=F-1>>>1,he=P[oe];if(0<i(he,M))P[oe]=M,P[F]=he,F=oe;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var M=P[0],F=P.pop();if(F!==M){P[0]=F;e:for(var oe=0,he=P.length,Bo=he>>>1;oe<Bo;){var An=2*(oe+1)-1,Cl=P[An],Rn=An+1,Ho=P[Rn];if(0>i(Cl,F))Rn<he&&0>i(Ho,Cl)?(P[oe]=Ho,P[Rn]=F,oe=Rn):(P[oe]=Cl,P[An]=F,oe=An);else if(Rn<he&&0>i(Ho,F))P[oe]=Ho,P[Rn]=F,oe=Rn;else break e}}return M}function i(P,M){var F=P.sortIndex-M.sortIndex;return F!==0?F:P.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,f=null,h=3,g=!1,v=!1,y=!1,b=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(P){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=P)r(u),M.sortIndex=M.expirationTime,t(l,M);else break;M=n(u)}}function w(P){if(y=!1,m(P),!v)if(n(l)!==null)v=!0,bl(E);else{var M=n(u);M!==null&&Tl(w,M.startTime-P)}}function E(P,M){v=!1,y&&(y=!1,p(N),N=-1),g=!0;var F=h;try{for(m(M),f=n(l);f!==null&&(!(f.expirationTime>M)||P&&!ot());){var oe=f.callback;if(typeof oe=="function"){f.callback=null,h=f.priorityLevel;var he=oe(f.expirationTime<=M);M=e.unstable_now(),typeof he=="function"?f.callback=he:f===n(l)&&r(l),m(M)}else r(l);f=n(l)}if(f!==null)var Bo=!0;else{var An=n(u);An!==null&&Tl(w,An.startTime-M),Bo=!1}return Bo}finally{f=null,h=F,g=!1}}var S=!1,x=null,N=-1,B=5,$=-1;function ot(){return!(e.unstable_now()-$<B)}function ri(){if(x!==null){var P=e.unstable_now();$=P;var M=!0;try{M=x(!0,P)}finally{M?ii():(S=!1,x=null)}}else S=!1}var ii;if(typeof d=="function")ii=function(){d(ri)};else if(typeof MessageChannel<"u"){var Jd=new MessageChannel,Iy=Jd.port2;Jd.port1.onmessage=ri,ii=function(){Iy.postMessage(null)}}else ii=function(){b(ri,0)};function bl(P){x=P,S||(S=!0,ii())}function Tl(P,M){N=b(function(){P(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,bl(E))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(P){switch(h){case 1:case 2:case 3:var M=3;break;default:M=h}var F=h;h=M;try{return P()}finally{h=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,M){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var F=h;h=P;try{return M()}finally{h=F}},e.unstable_scheduleCallback=function(P,M,F){var oe=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?oe+F:oe):F=oe,P){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=F+he,P={id:c++,callback:M,priorityLevel:P,startTime:F,expirationTime:he,sortIndex:-1},F>oe?(P.sortIndex=F,t(u,P),n(l)===null&&P===n(u)&&(y?(p(N),N=-1):y=!0,Tl(w,F-oe))):(P.sortIndex=he,t(l,P),v||g||(v=!0,bl(E))),P},e.unstable_shouldYield=ot,e.unstable_wrapCallback=function(P){var M=h;return function(){var F=h;h=M;try{return P.apply(this,arguments)}finally{h=F}}}})(Vm);(function(e){e.exports=Vm})(Jy);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wm=I,Ke=Tu;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gm=new Set,Ui={};function rr(e,t){Dr(e,t),Dr(e+"Capture",t)}function Dr(e,t){for(Ui[e]=t,e=0;e<t.length;e++)Gm.add(t[e])}var Mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cu=Object.prototype.hasOwnProperty,Zy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,nh={},rh={};function ew(e){return Cu.call(rh,e)?!0:Cu.call(nh,e)?!1:Zy.test(e)?rh[e]=!0:(nh[e]=!0,!1)}function tw(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function nw(e,t,n,r){if(t===null||typeof t>"u"||tw(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function De(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var _e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){_e[e]=new De(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];_e[t]=new De(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){_e[e]=new De(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){_e[e]=new De(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){_e[e]=new De(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){_e[e]=new De(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){_e[e]=new De(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){_e[e]=new De(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){_e[e]=new De(e,5,!1,e.toLowerCase(),null,!1,!1)});var af=/[\-:]([a-z])/g;function lf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(af,lf);_e[t]=new De(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(af,lf);_e[t]=new De(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(af,lf);_e[t]=new De(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){_e[e]=new De(e,1,!1,e.toLowerCase(),null,!1,!1)});_e.xlinkHref=new De("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){_e[e]=new De(e,1,!1,e.toLowerCase(),null,!0,!0)});function uf(e,t,n,r){var i=_e.hasOwnProperty(t)?_e[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(nw(t,n,i,r)&&(n=null),r||i===null?ew(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Wt=Wm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wo=Symbol.for("react.element"),lr=Symbol.for("react.portal"),ur=Symbol.for("react.fragment"),cf=Symbol.for("react.strict_mode"),Pu=Symbol.for("react.profiler"),Km=Symbol.for("react.provider"),Ym=Symbol.for("react.context"),ff=Symbol.for("react.forward_ref"),Nu=Symbol.for("react.suspense"),Au=Symbol.for("react.suspense_list"),df=Symbol.for("react.memo"),qt=Symbol.for("react.lazy"),Xm=Symbol.for("react.offscreen"),ih=Symbol.iterator;function oi(e){return e===null||typeof e!="object"?null:(e=ih&&e[ih]||e["@@iterator"],typeof e=="function"?e:null)}var ne=Object.assign,Nl;function mi(e){if(Nl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Nl=t&&t[1]||""}return`
`+Nl+e}var Al=!1;function Rl(e,t){if(!e||Al)return"";Al=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Al=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?mi(e):""}function rw(e){switch(e.tag){case 5:return mi(e.type);case 16:return mi("Lazy");case 13:return mi("Suspense");case 19:return mi("SuspenseList");case 0:case 2:case 15:return e=Rl(e.type,!1),e;case 11:return e=Rl(e.type.render,!1),e;case 1:return e=Rl(e.type,!0),e;default:return""}}function Ru(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ur:return"Fragment";case lr:return"Portal";case Pu:return"Profiler";case cf:return"StrictMode";case Nu:return"Suspense";case Au:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ym:return(e.displayName||"Context")+".Consumer";case Km:return(e._context.displayName||"Context")+".Provider";case ff:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case df:return t=e.displayName||null,t!==null?t:Ru(e.type)||"Memo";case qt:t=e._payload,e=e._init;try{return Ru(e(t))}catch{}}return null}function iw(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ru(t);case 8:return t===cf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function _n(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ow(e){var t=qm(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Go(e){e._valueTracker||(e._valueTracker=ow(e))}function Qm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=qm(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Hs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ou(e,t){var n=t.checked;return ne({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function oh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=_n(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Jm(e,t){t=t.checked,t!=null&&uf(e,"checked",t,!1)}function Lu(e,t){Jm(e,t);var n=_n(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Du(e,t.type,n):t.hasOwnProperty("defaultValue")&&Du(e,t.type,_n(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function sh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Du(e,t,n){(t!=="number"||Hs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var gi=Array.isArray;function Ir(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+_n(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Mu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return ne({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ah(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(gi(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:_n(n)}}function Zm(e,t){var n=_n(t.value),r=_n(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function lh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function eg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $u(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?eg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ko,tg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ko=Ko||document.createElement("div"),Ko.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ko.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Fi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var xi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sw=["Webkit","ms","Moz","O"];Object.keys(xi).forEach(function(e){sw.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),xi[t]=xi[e]})});function ng(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||xi.hasOwnProperty(e)&&xi[e]?(""+t).trim():t+"px"}function rg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ng(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var aw=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Uu(e,t){if(t){if(aw[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function Fu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ju=null;function hf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zu=null,br=null,Tr=null;function uh(e){if(e=Eo(e)){if(typeof zu!="function")throw Error(k(280));var t=e.stateNode;t&&(t=Ba(t),zu(e.stateNode,e.type,t))}}function ig(e){br?Tr?Tr.push(e):Tr=[e]:br=e}function og(){if(br){var e=br,t=Tr;if(Tr=br=null,uh(e),t)for(e=0;e<t.length;e++)uh(t[e])}}function sg(e,t){return e(t)}function ag(){}var Ol=!1;function lg(e,t,n){if(Ol)return e(t,n);Ol=!0;try{return sg(e,t,n)}finally{Ol=!1,(br!==null||Tr!==null)&&(ag(),og())}}function ji(e,t){var n=e.stateNode;if(n===null)return null;var r=Ba(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Bu=!1;if(Mt)try{var si={};Object.defineProperty(si,"passive",{get:function(){Bu=!0}}),window.addEventListener("test",si,si),window.removeEventListener("test",si,si)}catch{Bu=!1}function lw(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Ii=!1,Vs=null,Ws=!1,Hu=null,uw={onError:function(e){Ii=!0,Vs=e}};function cw(e,t,n,r,i,o,s,a,l){Ii=!1,Vs=null,lw.apply(uw,arguments)}function fw(e,t,n,r,i,o,s,a,l){if(cw.apply(this,arguments),Ii){if(Ii){var u=Vs;Ii=!1,Vs=null}else throw Error(k(198));Ws||(Ws=!0,Hu=u)}}function ir(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ug(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ch(e){if(ir(e)!==e)throw Error(k(188))}function dw(e){var t=e.alternate;if(!t){if(t=ir(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ch(i),e;if(o===r)return ch(i),t;o=o.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function cg(e){return e=dw(e),e!==null?fg(e):null}function fg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=fg(e);if(t!==null)return t;e=e.sibling}return null}var dg=Ke.unstable_scheduleCallback,fh=Ke.unstable_cancelCallback,hw=Ke.unstable_shouldYield,pw=Ke.unstable_requestPaint,se=Ke.unstable_now,mw=Ke.unstable_getCurrentPriorityLevel,pf=Ke.unstable_ImmediatePriority,hg=Ke.unstable_UserBlockingPriority,Gs=Ke.unstable_NormalPriority,gw=Ke.unstable_LowPriority,pg=Ke.unstable_IdlePriority,Ua=null,kt=null;function vw(e){if(kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(Ua,e,void 0,(e.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:_w,yw=Math.log,ww=Math.LN2;function _w(e){return e>>>=0,e===0?32:31-(yw(e)/ww|0)|0}var Yo=64,Xo=4194304;function vi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ks(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=vi(a):(o&=s,o!==0&&(r=vi(o)))}else s=n&~i,s!==0?r=vi(s):o!==0&&(r=vi(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-dt(t),i=1<<n,r|=e[n],t&=~i;return r}function kw(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ew(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-dt(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=kw(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Vu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function mg(){var e=Yo;return Yo<<=1,!(Yo&4194240)&&(Yo=64),e}function Ll(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function _o(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-dt(t),e[t]=n}function Sw(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-dt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function mf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-dt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var G=0;function gg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var vg,gf,yg,wg,_g,Wu=!1,qo=[],un=null,cn=null,fn=null,zi=new Map,Bi=new Map,Jt=[],xw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dh(e,t){switch(e){case"focusin":case"focusout":un=null;break;case"dragenter":case"dragleave":cn=null;break;case"mouseover":case"mouseout":fn=null;break;case"pointerover":case"pointerout":zi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bi.delete(t.pointerId)}}function ai(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Eo(t),t!==null&&gf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Iw(e,t,n,r,i){switch(t){case"focusin":return un=ai(un,e,t,n,r,i),!0;case"dragenter":return cn=ai(cn,e,t,n,r,i),!0;case"mouseover":return fn=ai(fn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return zi.set(o,ai(zi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Bi.set(o,ai(Bi.get(o)||null,e,t,n,r,i)),!0}return!1}function kg(e){var t=Mn(e.target);if(t!==null){var n=ir(t);if(n!==null){if(t=n.tag,t===13){if(t=ug(n),t!==null){e.blockedOn=t,_g(e.priority,function(){yg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ts(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Gu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ju=r,n.target.dispatchEvent(r),ju=null}else return t=Eo(n),t!==null&&gf(t),e.blockedOn=n,!1;t.shift()}return!0}function hh(e,t,n){Ts(e)&&n.delete(t)}function bw(){Wu=!1,un!==null&&Ts(un)&&(un=null),cn!==null&&Ts(cn)&&(cn=null),fn!==null&&Ts(fn)&&(fn=null),zi.forEach(hh),Bi.forEach(hh)}function li(e,t){e.blockedOn===t&&(e.blockedOn=null,Wu||(Wu=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,bw)))}function Hi(e){function t(i){return li(i,e)}if(0<qo.length){li(qo[0],e);for(var n=1;n<qo.length;n++){var r=qo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(un!==null&&li(un,e),cn!==null&&li(cn,e),fn!==null&&li(fn,e),zi.forEach(t),Bi.forEach(t),n=0;n<Jt.length;n++)r=Jt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Jt.length&&(n=Jt[0],n.blockedOn===null);)kg(n),n.blockedOn===null&&Jt.shift()}var Cr=Wt.ReactCurrentBatchConfig,Ys=!0;function Tw(e,t,n,r){var i=G,o=Cr.transition;Cr.transition=null;try{G=1,vf(e,t,n,r)}finally{G=i,Cr.transition=o}}function Cw(e,t,n,r){var i=G,o=Cr.transition;Cr.transition=null;try{G=4,vf(e,t,n,r)}finally{G=i,Cr.transition=o}}function vf(e,t,n,r){if(Ys){var i=Gu(e,t,n,r);if(i===null)Vl(e,t,r,Xs,n),dh(e,r);else if(Iw(i,e,t,n,r))r.stopPropagation();else if(dh(e,r),t&4&&-1<xw.indexOf(e)){for(;i!==null;){var o=Eo(i);if(o!==null&&vg(o),o=Gu(e,t,n,r),o===null&&Vl(e,t,r,Xs,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Vl(e,t,r,null,n)}}var Xs=null;function Gu(e,t,n,r){if(Xs=null,e=hf(r),e=Mn(e),e!==null)if(t=ir(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ug(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Xs=e,null}function Eg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mw()){case pf:return 1;case hg:return 4;case Gs:case gw:return 16;case pg:return 536870912;default:return 16}default:return 16}}var on=null,yf=null,Cs=null;function Sg(){if(Cs)return Cs;var e,t=yf,n=t.length,r,i="value"in on?on.value:on.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Cs=i.slice(e,1<r?1-r:void 0)}function Ps(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Qo(){return!0}function ph(){return!1}function Xe(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Qo:ph,this.isPropagationStopped=ph,this}return ne(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qo)},persist:function(){},isPersistent:Qo}),t}var Gr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wf=Xe(Gr),ko=ne({},Gr,{view:0,detail:0}),Pw=Xe(ko),Dl,Ml,ui,Fa=ne({},ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_f,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ui&&(ui&&e.type==="mousemove"?(Dl=e.screenX-ui.screenX,Ml=e.screenY-ui.screenY):Ml=Dl=0,ui=e),Dl)},movementY:function(e){return"movementY"in e?e.movementY:Ml}}),mh=Xe(Fa),Nw=ne({},Fa,{dataTransfer:0}),Aw=Xe(Nw),Rw=ne({},ko,{relatedTarget:0}),$l=Xe(Rw),Ow=ne({},Gr,{animationName:0,elapsedTime:0,pseudoElement:0}),Lw=Xe(Ow),Dw=ne({},Gr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Mw=Xe(Dw),$w=ne({},Gr,{data:0}),gh=Xe($w),Uw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zw(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=jw[e])?!!t[e]:!1}function _f(){return zw}var Bw=ne({},ko,{key:function(e){if(e.key){var t=Uw[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ps(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Fw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_f,charCode:function(e){return e.type==="keypress"?Ps(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ps(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hw=Xe(Bw),Vw=ne({},Fa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vh=Xe(Vw),Ww=ne({},ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_f}),Gw=Xe(Ww),Kw=ne({},Gr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yw=Xe(Kw),Xw=ne({},Fa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qw=Xe(Xw),Qw=[9,13,27,32],kf=Mt&&"CompositionEvent"in window,bi=null;Mt&&"documentMode"in document&&(bi=document.documentMode);var Jw=Mt&&"TextEvent"in window&&!bi,xg=Mt&&(!kf||bi&&8<bi&&11>=bi),yh=String.fromCharCode(32),wh=!1;function Ig(e,t){switch(e){case"keyup":return Qw.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cr=!1;function Zw(e,t){switch(e){case"compositionend":return bg(t);case"keypress":return t.which!==32?null:(wh=!0,yh);case"textInput":return e=t.data,e===yh&&wh?null:e;default:return null}}function e2(e,t){if(cr)return e==="compositionend"||!kf&&Ig(e,t)?(e=Sg(),Cs=yf=on=null,cr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return xg&&t.locale!=="ko"?null:t.data;default:return null}}var t2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _h(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!t2[e.type]:t==="textarea"}function Tg(e,t,n,r){ig(r),t=qs(t,"onChange"),0<t.length&&(n=new wf("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ti=null,Vi=null;function n2(e){Ug(e,0)}function ja(e){var t=hr(e);if(Qm(t))return e}function r2(e,t){if(e==="change")return t}var Cg=!1;if(Mt){var Ul;if(Mt){var Fl="oninput"in document;if(!Fl){var kh=document.createElement("div");kh.setAttribute("oninput","return;"),Fl=typeof kh.oninput=="function"}Ul=Fl}else Ul=!1;Cg=Ul&&(!document.documentMode||9<document.documentMode)}function Eh(){Ti&&(Ti.detachEvent("onpropertychange",Pg),Vi=Ti=null)}function Pg(e){if(e.propertyName==="value"&&ja(Vi)){var t=[];Tg(t,Vi,e,hf(e)),lg(n2,t)}}function i2(e,t,n){e==="focusin"?(Eh(),Ti=t,Vi=n,Ti.attachEvent("onpropertychange",Pg)):e==="focusout"&&Eh()}function o2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ja(Vi)}function s2(e,t){if(e==="click")return ja(t)}function a2(e,t){if(e==="input"||e==="change")return ja(t)}function l2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pt=typeof Object.is=="function"?Object.is:l2;function Wi(e,t){if(pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Cu.call(t,i)||!pt(e[i],t[i]))return!1}return!0}function Sh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xh(e,t){var n=Sh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sh(n)}}function Ng(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ng(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ag(){for(var e=window,t=Hs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Hs(e.document)}return t}function Ef(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function u2(e){var t=Ag(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ng(n.ownerDocument.documentElement,n)){if(r!==null&&Ef(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=xh(n,o);var s=xh(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var c2=Mt&&"documentMode"in document&&11>=document.documentMode,fr=null,Ku=null,Ci=null,Yu=!1;function Ih(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yu||fr==null||fr!==Hs(r)||(r=fr,"selectionStart"in r&&Ef(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ci&&Wi(Ci,r)||(Ci=r,r=qs(Ku,"onSelect"),0<r.length&&(t=new wf("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=fr)))}function Jo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var dr={animationend:Jo("Animation","AnimationEnd"),animationiteration:Jo("Animation","AnimationIteration"),animationstart:Jo("Animation","AnimationStart"),transitionend:Jo("Transition","TransitionEnd")},jl={},Rg={};Mt&&(Rg=document.createElement("div").style,"AnimationEvent"in window||(delete dr.animationend.animation,delete dr.animationiteration.animation,delete dr.animationstart.animation),"TransitionEvent"in window||delete dr.transitionend.transition);function za(e){if(jl[e])return jl[e];if(!dr[e])return e;var t=dr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Rg)return jl[e]=t[n];return e}var Og=za("animationend"),Lg=za("animationiteration"),Dg=za("animationstart"),Mg=za("transitionend"),$g=new Map,bh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bn(e,t){$g.set(e,t),rr(t,[e])}for(var zl=0;zl<bh.length;zl++){var Bl=bh[zl],f2=Bl.toLowerCase(),d2=Bl[0].toUpperCase()+Bl.slice(1);bn(f2,"on"+d2)}bn(Og,"onAnimationEnd");bn(Lg,"onAnimationIteration");bn(Dg,"onAnimationStart");bn("dblclick","onDoubleClick");bn("focusin","onFocus");bn("focusout","onBlur");bn(Mg,"onTransitionEnd");Dr("onMouseEnter",["mouseout","mouseover"]);Dr("onMouseLeave",["mouseout","mouseover"]);Dr("onPointerEnter",["pointerout","pointerover"]);Dr("onPointerLeave",["pointerout","pointerover"]);rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),h2=new Set("cancel close invalid load scroll toggle".split(" ").concat(yi));function Th(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,fw(r,t,void 0,e),e.currentTarget=null}function Ug(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Th(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Th(i,a,u),o=l}}}if(Ws)throw e=Hu,Ws=!1,Hu=null,e}function Y(e,t){var n=t[Zu];n===void 0&&(n=t[Zu]=new Set);var r=e+"__bubble";n.has(r)||(Fg(t,e,2,!1),n.add(r))}function Hl(e,t,n){var r=0;t&&(r|=4),Fg(n,e,r,t)}var Zo="_reactListening"+Math.random().toString(36).slice(2);function Gi(e){if(!e[Zo]){e[Zo]=!0,Gm.forEach(function(n){n!=="selectionchange"&&(h2.has(n)||Hl(n,!1,e),Hl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Zo]||(t[Zo]=!0,Hl("selectionchange",!1,t))}}function Fg(e,t,n,r){switch(Eg(t)){case 1:var i=Tw;break;case 4:i=Cw;break;default:i=vf}n=i.bind(null,t,n,e),i=void 0,!Bu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Vl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Mn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}lg(function(){var u=o,c=hf(n),f=[];e:{var h=$g.get(e);if(h!==void 0){var g=wf,v=e;switch(e){case"keypress":if(Ps(n)===0)break e;case"keydown":case"keyup":g=Hw;break;case"focusin":v="focus",g=$l;break;case"focusout":v="blur",g=$l;break;case"beforeblur":case"afterblur":g=$l;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=mh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Aw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Gw;break;case Og:case Lg:case Dg:g=Lw;break;case Mg:g=Yw;break;case"scroll":g=Pw;break;case"wheel":g=qw;break;case"copy":case"cut":case"paste":g=Mw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=vh}var y=(t&4)!==0,b=!y&&e==="scroll",p=y?h!==null?h+"Capture":null:h;y=[];for(var d=u,m;d!==null;){m=d;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=ji(d,p),w!=null&&y.push(Ki(d,w,m)))),b)break;d=d.return}0<y.length&&(h=new g(h,v,null,n,c),f.push({event:h,listeners:y}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&n!==ju&&(v=n.relatedTarget||n.fromElement)&&(Mn(v)||v[$t]))break e;if((g||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?Mn(v):null,v!==null&&(b=ir(v),v!==b||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(y=mh,w="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(y=vh,w="onPointerLeave",p="onPointerEnter",d="pointer"),b=g==null?h:hr(g),m=v==null?h:hr(v),h=new y(w,d+"leave",g,n,c),h.target=b,h.relatedTarget=m,w=null,Mn(c)===u&&(y=new y(p,d+"enter",v,n,c),y.target=m,y.relatedTarget=b,w=y),b=w,g&&v)t:{for(y=g,p=v,d=0,m=y;m;m=sr(m))d++;for(m=0,w=p;w;w=sr(w))m++;for(;0<d-m;)y=sr(y),d--;for(;0<m-d;)p=sr(p),m--;for(;d--;){if(y===p||p!==null&&y===p.alternate)break t;y=sr(y),p=sr(p)}y=null}else y=null;g!==null&&Ch(f,h,g,y,!1),v!==null&&b!==null&&Ch(f,b,v,y,!0)}}e:{if(h=u?hr(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var E=r2;else if(_h(h))if(Cg)E=a2;else{E=o2;var S=i2}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=s2);if(E&&(E=E(e,u))){Tg(f,E,n,c);break e}S&&S(e,h,u),e==="focusout"&&(S=h._wrapperState)&&S.controlled&&h.type==="number"&&Du(h,"number",h.value)}switch(S=u?hr(u):window,e){case"focusin":(_h(S)||S.contentEditable==="true")&&(fr=S,Ku=u,Ci=null);break;case"focusout":Ci=Ku=fr=null;break;case"mousedown":Yu=!0;break;case"contextmenu":case"mouseup":case"dragend":Yu=!1,Ih(f,n,c);break;case"selectionchange":if(c2)break;case"keydown":case"keyup":Ih(f,n,c)}var x;if(kf)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else cr?Ig(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(xg&&n.locale!=="ko"&&(cr||N!=="onCompositionStart"?N==="onCompositionEnd"&&cr&&(x=Sg()):(on=c,yf="value"in on?on.value:on.textContent,cr=!0)),S=qs(u,N),0<S.length&&(N=new gh(N,e,null,n,c),f.push({event:N,listeners:S}),x?N.data=x:(x=bg(n),x!==null&&(N.data=x)))),(x=Jw?Zw(e,n):e2(e,n))&&(u=qs(u,"onBeforeInput"),0<u.length&&(c=new gh("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=x))}Ug(f,t)})}function Ki(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qs(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ji(e,n),o!=null&&r.unshift(Ki(e,o,i)),o=ji(e,t),o!=null&&r.push(Ki(e,o,i))),e=e.return}return r}function sr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ch(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ji(n,o),l!=null&&s.unshift(Ki(n,l,a))):i||(l=ji(n,o),l!=null&&s.push(Ki(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var p2=/\r\n?/g,m2=/\u0000|\uFFFD/g;function Ph(e){return(typeof e=="string"?e:""+e).replace(p2,`
`).replace(m2,"")}function es(e,t,n){if(t=Ph(t),Ph(e)!==t&&n)throw Error(k(425))}function Qs(){}var Xu=null,qu=null;function Qu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ju=typeof setTimeout=="function"?setTimeout:void 0,g2=typeof clearTimeout=="function"?clearTimeout:void 0,Nh=typeof Promise=="function"?Promise:void 0,v2=typeof queueMicrotask=="function"?queueMicrotask:typeof Nh<"u"?function(e){return Nh.resolve(null).then(e).catch(y2)}:Ju;function y2(e){setTimeout(function(){throw e})}function Wl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Hi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Hi(t)}function dn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ah(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Kr=Math.random().toString(36).slice(2),yt="__reactFiber$"+Kr,Yi="__reactProps$"+Kr,$t="__reactContainer$"+Kr,Zu="__reactEvents$"+Kr,w2="__reactListeners$"+Kr,_2="__reactHandles$"+Kr;function Mn(e){var t=e[yt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$t]||n[yt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ah(e);e!==null;){if(n=e[yt])return n;e=Ah(e)}return t}e=n,n=e.parentNode}return null}function Eo(e){return e=e[yt]||e[$t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function hr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Ba(e){return e[Yi]||null}var ec=[],pr=-1;function Tn(e){return{current:e}}function q(e){0>pr||(e.current=ec[pr],ec[pr]=null,pr--)}function K(e,t){pr++,ec[pr]=e.current,e.current=t}var kn={},Pe=Tn(kn),Ue=Tn(!1),Kn=kn;function Mr(e,t){var n=e.type.contextTypes;if(!n)return kn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Fe(e){return e=e.childContextTypes,e!=null}function Js(){q(Ue),q(Pe)}function Rh(e,t,n){if(Pe.current!==kn)throw Error(k(168));K(Pe,t),K(Ue,n)}function jg(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,iw(e)||"Unknown",i));return ne({},n,r)}function Zs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kn,Kn=Pe.current,K(Pe,e),K(Ue,Ue.current),!0}function Oh(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=jg(e,t,Kn),r.__reactInternalMemoizedMergedChildContext=e,q(Ue),q(Pe),K(Pe,e)):q(Ue),K(Ue,n)}var Pt=null,Ha=!1,Gl=!1;function zg(e){Pt===null?Pt=[e]:Pt.push(e)}function k2(e){Ha=!0,zg(e)}function Cn(){if(!Gl&&Pt!==null){Gl=!0;var e=0,t=G;try{var n=Pt;for(G=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Pt=null,Ha=!1}catch(i){throw Pt!==null&&(Pt=Pt.slice(e+1)),dg(pf,Cn),i}finally{G=t,Gl=!1}}return null}var mr=[],gr=0,ea=null,ta=0,Je=[],Ze=0,Yn=null,Nt=1,At="";function On(e,t){mr[gr++]=ta,mr[gr++]=ea,ea=e,ta=t}function Bg(e,t,n){Je[Ze++]=Nt,Je[Ze++]=At,Je[Ze++]=Yn,Yn=e;var r=Nt;e=At;var i=32-dt(r)-1;r&=~(1<<i),n+=1;var o=32-dt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Nt=1<<32-dt(t)+i|n<<i|r,At=o+e}else Nt=1<<o|n<<i|r,At=e}function Sf(e){e.return!==null&&(On(e,1),Bg(e,1,0))}function xf(e){for(;e===ea;)ea=mr[--gr],mr[gr]=null,ta=mr[--gr],mr[gr]=null;for(;e===Yn;)Yn=Je[--Ze],Je[Ze]=null,At=Je[--Ze],Je[Ze]=null,Nt=Je[--Ze],Je[Ze]=null}var Ve=null,Be=null,J=!1,ut=null;function Hg(e,t){var n=et(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Lh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ve=e,Be=dn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ve=e,Be=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Yn!==null?{id:Nt,overflow:At}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=et(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ve=e,Be=null,!0):!1;default:return!1}}function tc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function nc(e){if(J){var t=Be;if(t){var n=t;if(!Lh(e,t)){if(tc(e))throw Error(k(418));t=dn(n.nextSibling);var r=Ve;t&&Lh(e,t)?Hg(r,n):(e.flags=e.flags&-4097|2,J=!1,Ve=e)}}else{if(tc(e))throw Error(k(418));e.flags=e.flags&-4097|2,J=!1,Ve=e}}}function Dh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ve=e}function ts(e){if(e!==Ve)return!1;if(!J)return Dh(e),J=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Qu(e.type,e.memoizedProps)),t&&(t=Be)){if(tc(e))throw Vg(),Error(k(418));for(;t;)Hg(e,t),t=dn(t.nextSibling)}if(Dh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Be=dn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Be=null}}else Be=Ve?dn(e.stateNode.nextSibling):null;return!0}function Vg(){for(var e=Be;e;)e=dn(e.nextSibling)}function $r(){Be=Ve=null,J=!1}function If(e){ut===null?ut=[e]:ut.push(e)}var E2=Wt.ReactCurrentBatchConfig;function at(e,t){if(e&&e.defaultProps){t=ne({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var na=Tn(null),ra=null,vr=null,bf=null;function Tf(){bf=vr=ra=null}function Cf(e){var t=na.current;q(na),e._currentValue=t}function rc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Pr(e,t){ra=e,bf=vr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&($e=!0),e.firstContext=null)}function nt(e){var t=e._currentValue;if(bf!==e)if(e={context:e,memoizedValue:t,next:null},vr===null){if(ra===null)throw Error(k(308));vr=e,ra.dependencies={lanes:0,firstContext:e}}else vr=vr.next=e;return t}var $n=null;function Pf(e){$n===null?$n=[e]:$n.push(e)}function Wg(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Pf(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ut(e,r)}function Ut(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Qt=!1;function Nf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Dt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function hn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,V&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ut(e,n)}return i=r.interleaved,i===null?(t.next=t,Pf(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ut(e,n)}function Ns(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,mf(e,n)}}function Mh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ia(e,t,n,r){var i=e.updateQueue;Qt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,c=u=l=null,a=o;do{var h=a.lane,g=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,y=a;switch(h=t,g=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){f=v.call(g,f,h);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(g,f,h):v,h==null)break e;f=ne({},f,h);break e;case 2:Qt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=f):c=c.next=g,s|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);qn|=s,e.lanes=s,e.memoizedState=f}}function $h(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var Kg=new Wm.Component().refs;function ic(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ne({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Va={isMounted:function(e){return(e=e._reactInternals)?ir(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Oe(),i=mn(e),o=Dt(r,i);o.payload=t,n!=null&&(o.callback=n),t=hn(e,o,i),t!==null&&(ht(t,e,i,r),Ns(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Oe(),i=mn(e),o=Dt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=hn(e,o,i),t!==null&&(ht(t,e,i,r),Ns(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Oe(),r=mn(e),i=Dt(n,r);i.tag=2,t!=null&&(i.callback=t),t=hn(e,i,r),t!==null&&(ht(t,e,r,n),Ns(t,e,r))}};function Uh(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Wi(n,r)||!Wi(i,o):!0}function Yg(e,t,n){var r=!1,i=kn,o=t.contextType;return typeof o=="object"&&o!==null?o=nt(o):(i=Fe(t)?Kn:Pe.current,r=t.contextTypes,o=(r=r!=null)?Mr(e,i):kn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Va,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Fh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Va.enqueueReplaceState(t,t.state,null)}function oc(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Kg,Nf(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=nt(o):(o=Fe(t)?Kn:Pe.current,i.context=Mr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ic(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Va.enqueueReplaceState(i,i.state,null),ia(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ci(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===Kg&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function ns(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function jh(e){var t=e._init;return t(e._payload)}function Xg(e){function t(p,d){if(e){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=gn(p,d),p.index=0,p.sibling=null,p}function o(p,d,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,d,m,w){return d===null||d.tag!==6?(d=Zl(m,p.mode,w),d.return=p,d):(d=i(d,m),d.return=p,d)}function l(p,d,m,w){var E=m.type;return E===ur?c(p,d,m.props.children,w,m.key):d!==null&&(d.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===qt&&jh(E)===d.type)?(w=i(d,m.props),w.ref=ci(p,d,m),w.return=p,w):(w=Ms(m.type,m.key,m.props,null,p.mode,w),w.ref=ci(p,d,m),w.return=p,w)}function u(p,d,m,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=eu(m,p.mode,w),d.return=p,d):(d=i(d,m.children||[]),d.return=p,d)}function c(p,d,m,w,E){return d===null||d.tag!==7?(d=Vn(m,p.mode,w,E),d.return=p,d):(d=i(d,m),d.return=p,d)}function f(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Zl(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Wo:return m=Ms(d.type,d.key,d.props,null,p.mode,m),m.ref=ci(p,null,d),m.return=p,m;case lr:return d=eu(d,p.mode,m),d.return=p,d;case qt:var w=d._init;return f(p,w(d._payload),m)}if(gi(d)||oi(d))return d=Vn(d,p.mode,m,null),d.return=p,d;ns(p,d)}return null}function h(p,d,m,w){var E=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:a(p,d,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Wo:return m.key===E?l(p,d,m,w):null;case lr:return m.key===E?u(p,d,m,w):null;case qt:return E=m._init,h(p,d,E(m._payload),w)}if(gi(m)||oi(m))return E!==null?null:c(p,d,m,w,null);ns(p,m)}return null}function g(p,d,m,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,a(d,p,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Wo:return p=p.get(w.key===null?m:w.key)||null,l(d,p,w,E);case lr:return p=p.get(w.key===null?m:w.key)||null,u(d,p,w,E);case qt:var S=w._init;return g(p,d,m,S(w._payload),E)}if(gi(w)||oi(w))return p=p.get(m)||null,c(d,p,w,E,null);ns(d,w)}return null}function v(p,d,m,w){for(var E=null,S=null,x=d,N=d=0,B=null;x!==null&&N<m.length;N++){x.index>N?(B=x,x=null):B=x.sibling;var $=h(p,x,m[N],w);if($===null){x===null&&(x=B);break}e&&x&&$.alternate===null&&t(p,x),d=o($,d,N),S===null?E=$:S.sibling=$,S=$,x=B}if(N===m.length)return n(p,x),J&&On(p,N),E;if(x===null){for(;N<m.length;N++)x=f(p,m[N],w),x!==null&&(d=o(x,d,N),S===null?E=x:S.sibling=x,S=x);return J&&On(p,N),E}for(x=r(p,x);N<m.length;N++)B=g(x,p,N,m[N],w),B!==null&&(e&&B.alternate!==null&&x.delete(B.key===null?N:B.key),d=o(B,d,N),S===null?E=B:S.sibling=B,S=B);return e&&x.forEach(function(ot){return t(p,ot)}),J&&On(p,N),E}function y(p,d,m,w){var E=oi(m);if(typeof E!="function")throw Error(k(150));if(m=E.call(m),m==null)throw Error(k(151));for(var S=E=null,x=d,N=d=0,B=null,$=m.next();x!==null&&!$.done;N++,$=m.next()){x.index>N?(B=x,x=null):B=x.sibling;var ot=h(p,x,$.value,w);if(ot===null){x===null&&(x=B);break}e&&x&&ot.alternate===null&&t(p,x),d=o(ot,d,N),S===null?E=ot:S.sibling=ot,S=ot,x=B}if($.done)return n(p,x),J&&On(p,N),E;if(x===null){for(;!$.done;N++,$=m.next())$=f(p,$.value,w),$!==null&&(d=o($,d,N),S===null?E=$:S.sibling=$,S=$);return J&&On(p,N),E}for(x=r(p,x);!$.done;N++,$=m.next())$=g(x,p,N,$.value,w),$!==null&&(e&&$.alternate!==null&&x.delete($.key===null?N:$.key),d=o($,d,N),S===null?E=$:S.sibling=$,S=$);return e&&x.forEach(function(ri){return t(p,ri)}),J&&On(p,N),E}function b(p,d,m,w){if(typeof m=="object"&&m!==null&&m.type===ur&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Wo:e:{for(var E=m.key,S=d;S!==null;){if(S.key===E){if(E=m.type,E===ur){if(S.tag===7){n(p,S.sibling),d=i(S,m.props.children),d.return=p,p=d;break e}}else if(S.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===qt&&jh(E)===S.type){n(p,S.sibling),d=i(S,m.props),d.ref=ci(p,S,m),d.return=p,p=d;break e}n(p,S);break}else t(p,S);S=S.sibling}m.type===ur?(d=Vn(m.props.children,p.mode,w,m.key),d.return=p,p=d):(w=Ms(m.type,m.key,m.props,null,p.mode,w),w.ref=ci(p,d,m),w.return=p,p=w)}return s(p);case lr:e:{for(S=m.key;d!==null;){if(d.key===S)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(p,d.sibling),d=i(d,m.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=eu(m,p.mode,w),d.return=p,p=d}return s(p);case qt:return S=m._init,b(p,d,S(m._payload),w)}if(gi(m))return v(p,d,m,w);if(oi(m))return y(p,d,m,w);ns(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,m),d.return=p,p=d):(n(p,d),d=Zl(m,p.mode,w),d.return=p,p=d),s(p)):n(p,d)}return b}var Ur=Xg(!0),qg=Xg(!1),So={},Et=Tn(So),Xi=Tn(So),qi=Tn(So);function Un(e){if(e===So)throw Error(k(174));return e}function Af(e,t){switch(K(qi,t),K(Xi,e),K(Et,So),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:$u(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=$u(t,e)}q(Et),K(Et,t)}function Fr(){q(Et),q(Xi),q(qi)}function Qg(e){Un(qi.current);var t=Un(Et.current),n=$u(t,e.type);t!==n&&(K(Xi,e),K(Et,n))}function Rf(e){Xi.current===e&&(q(Et),q(Xi))}var ee=Tn(0);function oa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Kl=[];function Of(){for(var e=0;e<Kl.length;e++)Kl[e]._workInProgressVersionPrimary=null;Kl.length=0}var As=Wt.ReactCurrentDispatcher,Yl=Wt.ReactCurrentBatchConfig,Xn=0,te=null,ue=null,pe=null,sa=!1,Pi=!1,Qi=0,S2=0;function Ee(){throw Error(k(321))}function Lf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!pt(e[n],t[n]))return!1;return!0}function Df(e,t,n,r,i,o){if(Xn=o,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,As.current=e===null||e.memoizedState===null?T2:C2,e=n(r,i),Pi){o=0;do{if(Pi=!1,Qi=0,25<=o)throw Error(k(301));o+=1,pe=ue=null,t.updateQueue=null,As.current=P2,e=n(r,i)}while(Pi)}if(As.current=aa,t=ue!==null&&ue.next!==null,Xn=0,pe=ue=te=null,sa=!1,t)throw Error(k(300));return e}function Mf(){var e=Qi!==0;return Qi=0,e}function vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?te.memoizedState=pe=e:pe=pe.next=e,pe}function rt(){if(ue===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=pe===null?te.memoizedState:pe.next;if(t!==null)pe=t,ue=e;else{if(e===null)throw Error(k(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},pe===null?te.memoizedState=pe=e:pe=pe.next=e}return pe}function Ji(e,t){return typeof t=="function"?t(e):t}function Xl(e){var t=rt(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=ue,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((Xn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,te.lanes|=c,qn|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,pt(r,t.memoizedState)||($e=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,te.lanes|=o,qn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ql(e){var t=rt(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);pt(o,t.memoizedState)||($e=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Jg(){}function Zg(e,t){var n=te,r=rt(),i=t(),o=!pt(r.memoizedState,i);if(o&&(r.memoizedState=i,$e=!0),r=r.queue,$f(nv.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||pe!==null&&pe.memoizedState.tag&1){if(n.flags|=2048,Zi(9,tv.bind(null,n,r,i,t),void 0,null),me===null)throw Error(k(349));Xn&30||ev(n,t,i)}return i}function ev(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function tv(e,t,n,r){t.value=n,t.getSnapshot=r,rv(t)&&iv(e)}function nv(e,t,n){return n(function(){rv(t)&&iv(e)})}function rv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!pt(e,n)}catch{return!0}}function iv(e){var t=Ut(e,1);t!==null&&ht(t,e,1,-1)}function zh(e){var t=vt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:e},t.queue=e,e=e.dispatch=b2.bind(null,te,e),[t.memoizedState,e]}function Zi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ov(){return rt().memoizedState}function Rs(e,t,n,r){var i=vt();te.flags|=e,i.memoizedState=Zi(1|t,n,void 0,r===void 0?null:r)}function Wa(e,t,n,r){var i=rt();r=r===void 0?null:r;var o=void 0;if(ue!==null){var s=ue.memoizedState;if(o=s.destroy,r!==null&&Lf(r,s.deps)){i.memoizedState=Zi(t,n,o,r);return}}te.flags|=e,i.memoizedState=Zi(1|t,n,o,r)}function Bh(e,t){return Rs(8390656,8,e,t)}function $f(e,t){return Wa(2048,8,e,t)}function sv(e,t){return Wa(4,2,e,t)}function av(e,t){return Wa(4,4,e,t)}function lv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function uv(e,t,n){return n=n!=null?n.concat([e]):null,Wa(4,4,lv.bind(null,t,e),n)}function Uf(){}function cv(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Lf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function fv(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Lf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function dv(e,t,n){return Xn&21?(pt(n,t)||(n=mg(),te.lanes|=n,qn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,$e=!0),e.memoizedState=n)}function x2(e,t){var n=G;G=n!==0&&4>n?n:4,e(!0);var r=Yl.transition;Yl.transition={};try{e(!1),t()}finally{G=n,Yl.transition=r}}function hv(){return rt().memoizedState}function I2(e,t,n){var r=mn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},pv(e))mv(t,n);else if(n=Wg(e,t,n,r),n!==null){var i=Oe();ht(n,e,r,i),gv(n,t,r)}}function b2(e,t,n){var r=mn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(pv(e))mv(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,pt(a,s)){var l=t.interleaved;l===null?(i.next=i,Pf(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Wg(e,t,i,r),n!==null&&(i=Oe(),ht(n,e,r,i),gv(n,t,r))}}function pv(e){var t=e.alternate;return e===te||t!==null&&t===te}function mv(e,t){Pi=sa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function gv(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,mf(e,n)}}var aa={readContext:nt,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useInsertionEffect:Ee,useLayoutEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useMutableSource:Ee,useSyncExternalStore:Ee,useId:Ee,unstable_isNewReconciler:!1},T2={readContext:nt,useCallback:function(e,t){return vt().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:Bh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Rs(4194308,4,lv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Rs(4194308,4,e,t)},useInsertionEffect:function(e,t){return Rs(4,2,e,t)},useMemo:function(e,t){var n=vt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=vt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=I2.bind(null,te,e),[r.memoizedState,e]},useRef:function(e){var t=vt();return e={current:e},t.memoizedState=e},useState:zh,useDebugValue:Uf,useDeferredValue:function(e){return vt().memoizedState=e},useTransition:function(){var e=zh(!1),t=e[0];return e=x2.bind(null,e[1]),vt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=te,i=vt();if(J){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),me===null)throw Error(k(349));Xn&30||ev(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Bh(nv.bind(null,r,o,e),[e]),r.flags|=2048,Zi(9,tv.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=vt(),t=me.identifierPrefix;if(J){var n=At,r=Nt;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Qi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=S2++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},C2={readContext:nt,useCallback:cv,useContext:nt,useEffect:$f,useImperativeHandle:uv,useInsertionEffect:sv,useLayoutEffect:av,useMemo:fv,useReducer:Xl,useRef:ov,useState:function(){return Xl(Ji)},useDebugValue:Uf,useDeferredValue:function(e){var t=rt();return dv(t,ue.memoizedState,e)},useTransition:function(){var e=Xl(Ji)[0],t=rt().memoizedState;return[e,t]},useMutableSource:Jg,useSyncExternalStore:Zg,useId:hv,unstable_isNewReconciler:!1},P2={readContext:nt,useCallback:cv,useContext:nt,useEffect:$f,useImperativeHandle:uv,useInsertionEffect:sv,useLayoutEffect:av,useMemo:fv,useReducer:ql,useRef:ov,useState:function(){return ql(Ji)},useDebugValue:Uf,useDeferredValue:function(e){var t=rt();return ue===null?t.memoizedState=e:dv(t,ue.memoizedState,e)},useTransition:function(){var e=ql(Ji)[0],t=rt().memoizedState;return[e,t]},useMutableSource:Jg,useSyncExternalStore:Zg,useId:hv,unstable_isNewReconciler:!1};function jr(e,t){try{var n="",r=t;do n+=rw(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ql(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function sc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var N2=typeof WeakMap=="function"?WeakMap:Map;function vv(e,t,n){n=Dt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ua||(ua=!0,gc=r),sc(e,t)},n}function yv(e,t,n){n=Dt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){sc(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){sc(e,t),typeof r!="function"&&(pn===null?pn=new Set([this]):pn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Hh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new N2;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=V2.bind(null,e,t,n),t.then(e,e))}function Vh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Wh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Dt(-1,1),t.tag=2,hn(n,t,1))),n.lanes|=1),e)}var A2=Wt.ReactCurrentOwner,$e=!1;function Ae(e,t,n,r){t.child=e===null?qg(t,null,n,r):Ur(t,e.child,n,r)}function Gh(e,t,n,r,i){n=n.render;var o=t.ref;return Pr(t,i),r=Df(e,t,n,r,o,i),n=Mf(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ft(e,t,i)):(J&&n&&Sf(t),t.flags|=1,Ae(e,t,r,i),t.child)}function Kh(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Gf(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,wv(e,t,o,r,i)):(e=Ms(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Wi,n(s,r)&&e.ref===t.ref)return Ft(e,t,i)}return t.flags|=1,e=gn(o,r),e.ref=t.ref,e.return=t,t.child=e}function wv(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Wi(o,r)&&e.ref===t.ref)if($e=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&($e=!0);else return t.lanes=e.lanes,Ft(e,t,i)}return ac(e,t,n,r,i)}function _v(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(wr,ze),ze|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,K(wr,ze),ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,K(wr,ze),ze|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,K(wr,ze),ze|=r;return Ae(e,t,i,n),t.child}function kv(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ac(e,t,n,r,i){var o=Fe(n)?Kn:Pe.current;return o=Mr(t,o),Pr(t,i),n=Df(e,t,n,r,o,i),r=Mf(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ft(e,t,i)):(J&&r&&Sf(t),t.flags|=1,Ae(e,t,n,i),t.child)}function Yh(e,t,n,r,i){if(Fe(n)){var o=!0;Zs(t)}else o=!1;if(Pr(t,i),t.stateNode===null)Os(e,t),Yg(t,n,r),oc(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=nt(u):(u=Fe(n)?Kn:Pe.current,u=Mr(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Fh(t,s,r,u),Qt=!1;var h=t.memoizedState;s.state=h,ia(t,r,s,i),l=t.memoizedState,a!==r||h!==l||Ue.current||Qt?(typeof c=="function"&&(ic(t,n,c,r),l=t.memoizedState),(a=Qt||Uh(t,n,a,r,h,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Gg(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:at(t.type,a),s.props=u,f=t.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=nt(l):(l=Fe(n)?Kn:Pe.current,l=Mr(t,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Fh(t,s,r,l),Qt=!1,h=t.memoizedState,s.state=h,ia(t,r,s,i);var v=t.memoizedState;a!==f||h!==v||Ue.current||Qt?(typeof g=="function"&&(ic(t,n,g,r),v=t.memoizedState),(u=Qt||Uh(t,n,u,r,h,v,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return lc(e,t,n,r,o,i)}function lc(e,t,n,r,i,o){kv(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Oh(t,n,!1),Ft(e,t,o);r=t.stateNode,A2.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Ur(t,e.child,null,o),t.child=Ur(t,null,a,o)):Ae(e,t,a,o),t.memoizedState=r.state,i&&Oh(t,n,!0),t.child}function Ev(e){var t=e.stateNode;t.pendingContext?Rh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Rh(e,t.context,!1),Af(e,t.containerInfo)}function Xh(e,t,n,r,i){return $r(),If(i),t.flags|=256,Ae(e,t,n,r),t.child}var uc={dehydrated:null,treeContext:null,retryLane:0};function cc(e){return{baseLanes:e,cachePool:null,transitions:null}}function Sv(e,t,n){var r=t.pendingProps,i=ee.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),K(ee,i&1),e===null)return nc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Ya(s,r,0,null),e=Vn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=cc(n),t.memoizedState=uc,e):Ff(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return R2(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=gn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=gn(a,o):(o=Vn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?cc(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=uc,r}return o=e.child,e=o.sibling,r=gn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ff(e,t){return t=Ya({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function rs(e,t,n,r){return r!==null&&If(r),Ur(t,e.child,null,n),e=Ff(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function R2(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Ql(Error(k(422))),rs(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ya({mode:"visible",children:r.children},i,0,null),o=Vn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Ur(t,e.child,null,s),t.child.memoizedState=cc(s),t.memoizedState=uc,o);if(!(t.mode&1))return rs(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(k(419)),r=Ql(o,r,void 0),rs(e,t,s,r)}if(a=(s&e.childLanes)!==0,$e||a){if(r=me,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ut(e,i),ht(r,e,i,-1))}return Wf(),r=Ql(Error(k(421))),rs(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=W2.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Be=dn(i.nextSibling),Ve=t,J=!0,ut=null,e!==null&&(Je[Ze++]=Nt,Je[Ze++]=At,Je[Ze++]=Yn,Nt=e.id,At=e.overflow,Yn=t),t=Ff(t,r.children),t.flags|=4096,t)}function qh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),rc(e.return,t,n)}function Jl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function xv(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ae(e,t,r.children,n),r=ee.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qh(e,n,t);else if(e.tag===19)qh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(K(ee,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&oa(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Jl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&oa(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Jl(t,!0,n,null,o);break;case"together":Jl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Os(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ft(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),qn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=gn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function O2(e,t,n){switch(t.tag){case 3:Ev(t),$r();break;case 5:Qg(t);break;case 1:Fe(t.type)&&Zs(t);break;case 4:Af(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;K(na,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(K(ee,ee.current&1),t.flags|=128,null):n&t.child.childLanes?Sv(e,t,n):(K(ee,ee.current&1),e=Ft(e,t,n),e!==null?e.sibling:null);K(ee,ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return xv(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),K(ee,ee.current),r)break;return null;case 22:case 23:return t.lanes=0,_v(e,t,n)}return Ft(e,t,n)}var Iv,fc,bv,Tv;Iv=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fc=function(){};bv=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Un(Et.current);var o=null;switch(n){case"input":i=Ou(e,i),r=Ou(e,r),o=[];break;case"select":i=ne({},i,{value:void 0}),r=ne({},r,{value:void 0}),o=[];break;case"textarea":i=Mu(e,i),r=Mu(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Qs)}Uu(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ui.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ui.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Y("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Tv=function(e,t,n,r){n!==r&&(t.flags|=4)};function fi(e,t){if(!J)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function L2(e,t,n){var r=t.pendingProps;switch(xf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(t),null;case 1:return Fe(t.type)&&Js(),Se(t),null;case 3:return r=t.stateNode,Fr(),q(Ue),q(Pe),Of(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ts(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ut!==null&&(wc(ut),ut=null))),fc(e,t),Se(t),null;case 5:Rf(t);var i=Un(qi.current);if(n=t.type,e!==null&&t.stateNode!=null)bv(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return Se(t),null}if(e=Un(Et.current),ts(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[yt]=t,r[Yi]=o,e=(t.mode&1)!==0,n){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(i=0;i<yi.length;i++)Y(yi[i],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":oh(r,o),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Y("invalid",r);break;case"textarea":ah(r,o),Y("invalid",r)}Uu(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&es(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&es(r.textContent,a,e),i=["children",""+a]):Ui.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Y("scroll",r)}switch(n){case"input":Go(r),sh(r,o,!0);break;case"textarea":Go(r),lh(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Qs)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=eg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[yt]=t,e[Yi]=r,Iv(e,t,!1,!1),t.stateNode=e;e:{switch(s=Fu(n,r),n){case"dialog":Y("cancel",e),Y("close",e),i=r;break;case"iframe":case"object":case"embed":Y("load",e),i=r;break;case"video":case"audio":for(i=0;i<yi.length;i++)Y(yi[i],e);i=r;break;case"source":Y("error",e),i=r;break;case"img":case"image":case"link":Y("error",e),Y("load",e),i=r;break;case"details":Y("toggle",e),i=r;break;case"input":oh(e,r),i=Ou(e,r),Y("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ne({},r,{value:void 0}),Y("invalid",e);break;case"textarea":ah(e,r),i=Mu(e,r),Y("invalid",e);break;default:i=r}Uu(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?rg(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&tg(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Fi(e,l):typeof l=="number"&&Fi(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ui.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Y("scroll",e):l!=null&&uf(e,o,l,s))}switch(n){case"input":Go(e),sh(e,r,!1);break;case"textarea":Go(e),lh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+_n(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Ir(e,!!r.multiple,o,!1):r.defaultValue!=null&&Ir(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Qs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Se(t),null;case 6:if(e&&t.stateNode!=null)Tv(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Un(qi.current),Un(Et.current),ts(t)){if(r=t.stateNode,n=t.memoizedProps,r[yt]=t,(o=r.nodeValue!==n)&&(e=Ve,e!==null))switch(e.tag){case 3:es(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&es(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[yt]=t,t.stateNode=r}return Se(t),null;case 13:if(q(ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(J&&Be!==null&&t.mode&1&&!(t.flags&128))Vg(),$r(),t.flags|=98560,o=!1;else if(o=ts(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[yt]=t}else $r(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Se(t),o=!1}else ut!==null&&(wc(ut),ut=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ee.current&1?ce===0&&(ce=3):Wf())),t.updateQueue!==null&&(t.flags|=4),Se(t),null);case 4:return Fr(),fc(e,t),e===null&&Gi(t.stateNode.containerInfo),Se(t),null;case 10:return Cf(t.type._context),Se(t),null;case 17:return Fe(t.type)&&Js(),Se(t),null;case 19:if(q(ee),o=t.memoizedState,o===null)return Se(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)fi(o,!1);else{if(ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=oa(e),s!==null){for(t.flags|=128,fi(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return K(ee,ee.current&1|2),t.child}e=e.sibling}o.tail!==null&&se()>zr&&(t.flags|=128,r=!0,fi(o,!1),t.lanes=4194304)}else{if(!r)if(e=oa(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),fi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!J)return Se(t),null}else 2*se()-o.renderingStartTime>zr&&n!==1073741824&&(t.flags|=128,r=!0,fi(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=se(),t.sibling=null,n=ee.current,K(ee,r?n&1|2:n&1),t):(Se(t),null);case 22:case 23:return Vf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ze&1073741824&&(Se(t),t.subtreeFlags&6&&(t.flags|=8192)):Se(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function D2(e,t){switch(xf(t),t.tag){case 1:return Fe(t.type)&&Js(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Fr(),q(Ue),q(Pe),Of(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Rf(t),null;case 13:if(q(ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));$r()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(ee),null;case 4:return Fr(),null;case 10:return Cf(t.type._context),null;case 22:case 23:return Vf(),null;case 24:return null;default:return null}}var is=!1,be=!1,M2=typeof WeakSet=="function"?WeakSet:Set,C=null;function yr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){re(e,t,r)}else n.current=null}function dc(e,t,n){try{n()}catch(r){re(e,t,r)}}var Qh=!1;function $2(e,t){if(Xu=Ys,e=Ag(),Ef(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,f=e,h=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(g=f.firstChild)!==null;)h=f,f=g;for(;;){if(f===e)break t;if(h===n&&++u===i&&(a=s),h===o&&++c===r&&(l=s),(g=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(qu={focusedElem:e,selectionRange:n},Ys=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,b=v.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?y:at(t.type,y),b);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(w){re(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return v=Qh,Qh=!1,v}function Ni(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&dc(t,n,o)}i=i.next}while(i!==r)}}function Ga(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function hc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Cv(e){var t=e.alternate;t!==null&&(e.alternate=null,Cv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[yt],delete t[Yi],delete t[Zu],delete t[w2],delete t[_2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Pv(e){return e.tag===5||e.tag===3||e.tag===4}function Jh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Pv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qs));else if(r!==4&&(e=e.child,e!==null))for(pc(e,t,n),e=e.sibling;e!==null;)pc(e,t,n),e=e.sibling}function mc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(mc(e,t,n),e=e.sibling;e!==null;)mc(e,t,n),e=e.sibling}var ve=null,lt=!1;function Kt(e,t,n){for(n=n.child;n!==null;)Nv(e,t,n),n=n.sibling}function Nv(e,t,n){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(Ua,n)}catch{}switch(n.tag){case 5:be||yr(n,t);case 6:var r=ve,i=lt;ve=null,Kt(e,t,n),ve=r,lt=i,ve!==null&&(lt?(e=ve,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ve.removeChild(n.stateNode));break;case 18:ve!==null&&(lt?(e=ve,n=n.stateNode,e.nodeType===8?Wl(e.parentNode,n):e.nodeType===1&&Wl(e,n),Hi(e)):Wl(ve,n.stateNode));break;case 4:r=ve,i=lt,ve=n.stateNode.containerInfo,lt=!0,Kt(e,t,n),ve=r,lt=i;break;case 0:case 11:case 14:case 15:if(!be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&dc(n,t,s),i=i.next}while(i!==r)}Kt(e,t,n);break;case 1:if(!be&&(yr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){re(n,t,a)}Kt(e,t,n);break;case 21:Kt(e,t,n);break;case 22:n.mode&1?(be=(r=be)||n.memoizedState!==null,Kt(e,t,n),be=r):Kt(e,t,n);break;default:Kt(e,t,n)}}function Zh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new M2),t.forEach(function(r){var i=G2.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function st(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ve=a.stateNode,lt=!1;break e;case 3:ve=a.stateNode.containerInfo,lt=!0;break e;case 4:ve=a.stateNode.containerInfo,lt=!0;break e}a=a.return}if(ve===null)throw Error(k(160));Nv(o,s,i),ve=null,lt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){re(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Av(t,e),t=t.sibling}function Av(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(st(t,e),gt(e),r&4){try{Ni(3,e,e.return),Ga(3,e)}catch(y){re(e,e.return,y)}try{Ni(5,e,e.return)}catch(y){re(e,e.return,y)}}break;case 1:st(t,e),gt(e),r&512&&n!==null&&yr(n,n.return);break;case 5:if(st(t,e),gt(e),r&512&&n!==null&&yr(n,n.return),e.flags&32){var i=e.stateNode;try{Fi(i,"")}catch(y){re(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Jm(i,o),Fu(a,s);var u=Fu(a,o);for(s=0;s<l.length;s+=2){var c=l[s],f=l[s+1];c==="style"?rg(i,f):c==="dangerouslySetInnerHTML"?tg(i,f):c==="children"?Fi(i,f):uf(i,c,f,u)}switch(a){case"input":Lu(i,o);break;case"textarea":Zm(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?Ir(i,!!o.multiple,g,!1):h!==!!o.multiple&&(o.defaultValue!=null?Ir(i,!!o.multiple,o.defaultValue,!0):Ir(i,!!o.multiple,o.multiple?[]:"",!1))}i[Yi]=o}catch(y){re(e,e.return,y)}}break;case 6:if(st(t,e),gt(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){re(e,e.return,y)}}break;case 3:if(st(t,e),gt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Hi(t.containerInfo)}catch(y){re(e,e.return,y)}break;case 4:st(t,e),gt(e);break;case 13:st(t,e),gt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Bf=se())),r&4&&Zh(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(be=(u=be)||c,st(t,e),be=u):st(t,e),gt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(C=e,c=e.child;c!==null;){for(f=C=c;C!==null;){switch(h=C,g=h.child,h.tag){case 0:case 11:case 14:case 15:Ni(4,h,h.return);break;case 1:yr(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(y){re(r,n,y)}}break;case 5:yr(h,h.return);break;case 22:if(h.memoizedState!==null){tp(f);continue}}g!==null?(g.return=h,C=g):tp(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=ng("display",s))}catch(y){re(e,e.return,y)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){re(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:st(t,e),gt(e),r&4&&Zh(e);break;case 21:break;default:st(t,e),gt(e)}}function gt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Pv(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Fi(i,""),r.flags&=-33);var o=Jh(e);mc(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Jh(e);pc(e,a,s);break;default:throw Error(k(161))}}catch(l){re(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function U2(e,t,n){C=e,Rv(e)}function Rv(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var i=C,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||is;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||be;a=is;var u=be;if(is=s,(be=l)&&!u)for(C=i;C!==null;)s=C,l=s.child,s.tag===22&&s.memoizedState!==null?np(i):l!==null?(l.return=s,C=l):np(i);for(;o!==null;)C=o,Rv(o),o=o.sibling;C=i,is=a,be=u}ep(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,C=o):ep(e)}}function ep(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:be||Ga(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!be)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:at(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&$h(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}$h(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Hi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}be||t.flags&512&&hc(t)}catch(h){re(t,t.return,h)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function tp(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function np(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ga(4,t)}catch(l){re(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){re(t,i,l)}}var o=t.return;try{hc(t)}catch(l){re(t,o,l)}break;case 5:var s=t.return;try{hc(t)}catch(l){re(t,s,l)}}}catch(l){re(t,t.return,l)}if(t===e){C=null;break}var a=t.sibling;if(a!==null){a.return=t.return,C=a;break}C=t.return}}var F2=Math.ceil,la=Wt.ReactCurrentDispatcher,jf=Wt.ReactCurrentOwner,tt=Wt.ReactCurrentBatchConfig,V=0,me=null,le=null,ye=0,ze=0,wr=Tn(0),ce=0,eo=null,qn=0,Ka=0,zf=0,Ai=null,Me=null,Bf=0,zr=1/0,Ct=null,ua=!1,gc=null,pn=null,os=!1,sn=null,ca=0,Ri=0,vc=null,Ls=-1,Ds=0;function Oe(){return V&6?se():Ls!==-1?Ls:Ls=se()}function mn(e){return e.mode&1?V&2&&ye!==0?ye&-ye:E2.transition!==null?(Ds===0&&(Ds=mg()),Ds):(e=G,e!==0||(e=window.event,e=e===void 0?16:Eg(e.type)),e):1}function ht(e,t,n,r){if(50<Ri)throw Ri=0,vc=null,Error(k(185));_o(e,n,r),(!(V&2)||e!==me)&&(e===me&&(!(V&2)&&(Ka|=n),ce===4&&Zt(e,ye)),je(e,r),n===1&&V===0&&!(t.mode&1)&&(zr=se()+500,Ha&&Cn()))}function je(e,t){var n=e.callbackNode;Ew(e,t);var r=Ks(e,e===me?ye:0);if(r===0)n!==null&&fh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&fh(n),t===1)e.tag===0?k2(rp.bind(null,e)):zg(rp.bind(null,e)),v2(function(){!(V&6)&&Cn()}),n=null;else{switch(gg(r)){case 1:n=pf;break;case 4:n=hg;break;case 16:n=Gs;break;case 536870912:n=pg;break;default:n=Gs}n=jv(n,Ov.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ov(e,t){if(Ls=-1,Ds=0,V&6)throw Error(k(327));var n=e.callbackNode;if(Nr()&&e.callbackNode!==n)return null;var r=Ks(e,e===me?ye:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=fa(e,r);else{t=r;var i=V;V|=2;var o=Dv();(me!==e||ye!==t)&&(Ct=null,zr=se()+500,Hn(e,t));do try{B2();break}catch(a){Lv(e,a)}while(1);Tf(),la.current=o,V=i,le!==null?t=0:(me=null,ye=0,t=ce)}if(t!==0){if(t===2&&(i=Vu(e),i!==0&&(r=i,t=yc(e,i))),t===1)throw n=eo,Hn(e,0),Zt(e,r),je(e,se()),n;if(t===6)Zt(e,r);else{if(i=e.current.alternate,!(r&30)&&!j2(i)&&(t=fa(e,r),t===2&&(o=Vu(e),o!==0&&(r=o,t=yc(e,o))),t===1))throw n=eo,Hn(e,0),Zt(e,r),je(e,se()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Ln(e,Me,Ct);break;case 3:if(Zt(e,r),(r&130023424)===r&&(t=Bf+500-se(),10<t)){if(Ks(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Oe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ju(Ln.bind(null,e,Me,Ct),t);break}Ln(e,Me,Ct);break;case 4:if(Zt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-dt(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*F2(r/1960))-r,10<r){e.timeoutHandle=Ju(Ln.bind(null,e,Me,Ct),r);break}Ln(e,Me,Ct);break;case 5:Ln(e,Me,Ct);break;default:throw Error(k(329))}}}return je(e,se()),e.callbackNode===n?Ov.bind(null,e):null}function yc(e,t){var n=Ai;return e.current.memoizedState.isDehydrated&&(Hn(e,t).flags|=256),e=fa(e,t),e!==2&&(t=Me,Me=n,t!==null&&wc(t)),e}function wc(e){Me===null?Me=e:Me.push.apply(Me,e)}function j2(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!pt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zt(e,t){for(t&=~zf,t&=~Ka,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-dt(t),r=1<<n;e[n]=-1,t&=~r}}function rp(e){if(V&6)throw Error(k(327));Nr();var t=Ks(e,0);if(!(t&1))return je(e,se()),null;var n=fa(e,t);if(e.tag!==0&&n===2){var r=Vu(e);r!==0&&(t=r,n=yc(e,r))}if(n===1)throw n=eo,Hn(e,0),Zt(e,t),je(e,se()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ln(e,Me,Ct),je(e,se()),null}function Hf(e,t){var n=V;V|=1;try{return e(t)}finally{V=n,V===0&&(zr=se()+500,Ha&&Cn())}}function Qn(e){sn!==null&&sn.tag===0&&!(V&6)&&Nr();var t=V;V|=1;var n=tt.transition,r=G;try{if(tt.transition=null,G=1,e)return e()}finally{G=r,tt.transition=n,V=t,!(V&6)&&Cn()}}function Vf(){ze=wr.current,q(wr)}function Hn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,g2(n)),le!==null)for(n=le.return;n!==null;){var r=n;switch(xf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Js();break;case 3:Fr(),q(Ue),q(Pe),Of();break;case 5:Rf(r);break;case 4:Fr();break;case 13:q(ee);break;case 19:q(ee);break;case 10:Cf(r.type._context);break;case 22:case 23:Vf()}n=n.return}if(me=e,le=e=gn(e.current,null),ye=ze=t,ce=0,eo=null,zf=Ka=qn=0,Me=Ai=null,$n!==null){for(t=0;t<$n.length;t++)if(n=$n[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}$n=null}return e}function Lv(e,t){do{var n=le;try{if(Tf(),As.current=aa,sa){for(var r=te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}sa=!1}if(Xn=0,pe=ue=te=null,Pi=!1,Qi=0,jf.current=null,n===null||n.return===null){ce=1,eo=t,le=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=ye,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Vh(s);if(g!==null){g.flags&=-257,Wh(g,s,a,o,t),g.mode&1&&Hh(o,u,t),t=g,l=u;var v=t.updateQueue;if(v===null){var y=new Set;y.add(l),t.updateQueue=y}else v.add(l);break e}else{if(!(t&1)){Hh(o,u,t),Wf();break e}l=Error(k(426))}}else if(J&&a.mode&1){var b=Vh(s);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Wh(b,s,a,o,t),If(jr(l,a));break e}}o=l=jr(l,a),ce!==4&&(ce=2),Ai===null?Ai=[o]:Ai.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=vv(o,l,t);Mh(o,p);break e;case 1:a=l;var d=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(pn===null||!pn.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=yv(o,a,t);Mh(o,w);break e}}o=o.return}while(o!==null)}$v(n)}catch(E){t=E,le===n&&n!==null&&(le=n=n.return);continue}break}while(1)}function Dv(){var e=la.current;return la.current=aa,e===null?aa:e}function Wf(){(ce===0||ce===3||ce===2)&&(ce=4),me===null||!(qn&268435455)&&!(Ka&268435455)||Zt(me,ye)}function fa(e,t){var n=V;V|=2;var r=Dv();(me!==e||ye!==t)&&(Ct=null,Hn(e,t));do try{z2();break}catch(i){Lv(e,i)}while(1);if(Tf(),V=n,la.current=r,le!==null)throw Error(k(261));return me=null,ye=0,ce}function z2(){for(;le!==null;)Mv(le)}function B2(){for(;le!==null&&!hw();)Mv(le)}function Mv(e){var t=Fv(e.alternate,e,ze);e.memoizedProps=e.pendingProps,t===null?$v(e):le=t,jf.current=null}function $v(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=D2(n,t),n!==null){n.flags&=32767,le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ce=6,le=null;return}}else if(n=L2(n,t,ze),n!==null){le=n;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);ce===0&&(ce=5)}function Ln(e,t,n){var r=G,i=tt.transition;try{tt.transition=null,G=1,H2(e,t,n,r)}finally{tt.transition=i,G=r}return null}function H2(e,t,n,r){do Nr();while(sn!==null);if(V&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Sw(e,o),e===me&&(le=me=null,ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||os||(os=!0,jv(Gs,function(){return Nr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=tt.transition,tt.transition=null;var s=G;G=1;var a=V;V|=4,jf.current=null,$2(e,n),Av(n,e),u2(qu),Ys=!!Xu,qu=Xu=null,e.current=n,U2(n),pw(),V=a,G=s,tt.transition=o}else e.current=n;if(os&&(os=!1,sn=e,ca=i),o=e.pendingLanes,o===0&&(pn=null),vw(n.stateNode),je(e,se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ua)throw ua=!1,e=gc,gc=null,e;return ca&1&&e.tag!==0&&Nr(),o=e.pendingLanes,o&1?e===vc?Ri++:(Ri=0,vc=e):Ri=0,Cn(),null}function Nr(){if(sn!==null){var e=gg(ca),t=tt.transition,n=G;try{if(tt.transition=null,G=16>e?16:e,sn===null)var r=!1;else{if(e=sn,sn=null,ca=0,V&6)throw Error(k(331));var i=V;for(V|=4,C=e.current;C!==null;){var o=C,s=o.child;if(C.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(C=u;C!==null;){var c=C;switch(c.tag){case 0:case 11:case 15:Ni(8,c,o)}var f=c.child;if(f!==null)f.return=c,C=f;else for(;C!==null;){c=C;var h=c.sibling,g=c.return;if(Cv(c),c===u){C=null;break}if(h!==null){h.return=g,C=h;break}C=g}}}var v=o.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var b=y.sibling;y.sibling=null,y=b}while(y!==null)}}C=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,C=s;else e:for(;C!==null;){if(o=C,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ni(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,C=p;break e}C=o.return}}var d=e.current;for(C=d;C!==null;){s=C;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,C=m;else e:for(s=d;C!==null;){if(a=C,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ga(9,a)}}catch(E){re(a,a.return,E)}if(a===s){C=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,C=w;break e}C=a.return}}if(V=i,Cn(),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(Ua,e)}catch{}r=!0}return r}finally{G=n,tt.transition=t}}return!1}function ip(e,t,n){t=jr(n,t),t=vv(e,t,1),e=hn(e,t,1),t=Oe(),e!==null&&(_o(e,1,t),je(e,t))}function re(e,t,n){if(e.tag===3)ip(e,e,n);else for(;t!==null;){if(t.tag===3){ip(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pn===null||!pn.has(r))){e=jr(n,e),e=yv(t,e,1),t=hn(t,e,1),e=Oe(),t!==null&&(_o(t,1,e),je(t,e));break}}t=t.return}}function V2(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Oe(),e.pingedLanes|=e.suspendedLanes&n,me===e&&(ye&n)===n&&(ce===4||ce===3&&(ye&130023424)===ye&&500>se()-Bf?Hn(e,0):zf|=n),je(e,t)}function Uv(e,t){t===0&&(e.mode&1?(t=Xo,Xo<<=1,!(Xo&130023424)&&(Xo=4194304)):t=1);var n=Oe();e=Ut(e,t),e!==null&&(_o(e,t,n),je(e,n))}function W2(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Uv(e,n)}function G2(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Uv(e,n)}var Fv;Fv=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ue.current)$e=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return $e=!1,O2(e,t,n);$e=!!(e.flags&131072)}else $e=!1,J&&t.flags&1048576&&Bg(t,ta,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Os(e,t),e=t.pendingProps;var i=Mr(t,Pe.current);Pr(t,n),i=Df(null,t,r,e,i,n);var o=Mf();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Fe(r)?(o=!0,Zs(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Nf(t),i.updater=Va,t.stateNode=i,i._reactInternals=t,oc(t,r,e,n),t=lc(null,t,r,!0,o,n)):(t.tag=0,J&&o&&Sf(t),Ae(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Os(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Y2(r),e=at(r,e),i){case 0:t=ac(null,t,r,e,n);break e;case 1:t=Yh(null,t,r,e,n);break e;case 11:t=Gh(null,t,r,e,n);break e;case 14:t=Kh(null,t,r,at(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:at(r,i),ac(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:at(r,i),Yh(e,t,r,i,n);case 3:e:{if(Ev(t),e===null)throw Error(k(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Gg(e,t),ia(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=jr(Error(k(423)),t),t=Xh(e,t,r,n,i);break e}else if(r!==i){i=jr(Error(k(424)),t),t=Xh(e,t,r,n,i);break e}else for(Be=dn(t.stateNode.containerInfo.firstChild),Ve=t,J=!0,ut=null,n=qg(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($r(),r===i){t=Ft(e,t,n);break e}Ae(e,t,r,n)}t=t.child}return t;case 5:return Qg(t),e===null&&nc(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Qu(r,i)?s=null:o!==null&&Qu(r,o)&&(t.flags|=32),kv(e,t),Ae(e,t,s,n),t.child;case 6:return e===null&&nc(t),null;case 13:return Sv(e,t,n);case 4:return Af(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ur(t,null,r,n):Ae(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:at(r,i),Gh(e,t,r,i,n);case 7:return Ae(e,t,t.pendingProps,n),t.child;case 8:return Ae(e,t,t.pendingProps.children,n),t.child;case 12:return Ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,K(na,r._currentValue),r._currentValue=s,o!==null)if(pt(o.value,s)){if(o.children===i.children&&!Ue.current){t=Ft(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Dt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),rc(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(k(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),rc(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Ae(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Pr(t,n),i=nt(i),r=r(i),t.flags|=1,Ae(e,t,r,n),t.child;case 14:return r=t.type,i=at(r,t.pendingProps),i=at(r.type,i),Kh(e,t,r,i,n);case 15:return wv(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:at(r,i),Os(e,t),t.tag=1,Fe(r)?(e=!0,Zs(t)):e=!1,Pr(t,n),Yg(t,r,i),oc(t,r,i,n),lc(null,t,r,!0,e,n);case 19:return xv(e,t,n);case 22:return _v(e,t,n)}throw Error(k(156,t.tag))};function jv(e,t){return dg(e,t)}function K2(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,n,r){return new K2(e,t,n,r)}function Gf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Y2(e){if(typeof e=="function")return Gf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ff)return 11;if(e===df)return 14}return 2}function gn(e,t){var n=e.alternate;return n===null?(n=et(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ms(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Gf(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case ur:return Vn(n.children,i,o,t);case cf:s=8,i|=8;break;case Pu:return e=et(12,n,t,i|2),e.elementType=Pu,e.lanes=o,e;case Nu:return e=et(13,n,t,i),e.elementType=Nu,e.lanes=o,e;case Au:return e=et(19,n,t,i),e.elementType=Au,e.lanes=o,e;case Xm:return Ya(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Km:s=10;break e;case Ym:s=9;break e;case ff:s=11;break e;case df:s=14;break e;case qt:s=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=et(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Vn(e,t,n,r){return e=et(7,e,r,t),e.lanes=n,e}function Ya(e,t,n,r){return e=et(22,e,r,t),e.elementType=Xm,e.lanes=n,e.stateNode={isHidden:!1},e}function Zl(e,t,n){return e=et(6,e,null,t),e.lanes=n,e}function eu(e,t,n){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function X2(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ll(0),this.expirationTimes=Ll(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ll(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Kf(e,t,n,r,i,o,s,a,l){return e=new X2(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=et(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nf(o),e}function q2(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:lr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function zv(e){if(!e)return kn;e=e._reactInternals;e:{if(ir(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(Fe(n))return jg(e,n,t)}return t}function Bv(e,t,n,r,i,o,s,a,l){return e=Kf(n,r,!0,e,i,o,s,a,l),e.context=zv(null),n=e.current,r=Oe(),i=mn(n),o=Dt(r,i),o.callback=t??null,hn(n,o,i),e.current.lanes=i,_o(e,i,r),je(e,r),e}function Xa(e,t,n,r){var i=t.current,o=Oe(),s=mn(i);return n=zv(n),t.context===null?t.context=n:t.pendingContext=n,t=Dt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=hn(i,t,s),e!==null&&(ht(e,i,s,o),Ns(e,i,s)),s}function da(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function op(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Yf(e,t){op(e,t),(e=e.alternate)&&op(e,t)}function Q2(){return null}var Hv=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xf(e){this._internalRoot=e}qa.prototype.render=Xf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Xa(e,t,null,null)};qa.prototype.unmount=Xf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qn(function(){Xa(null,e,null,null)}),t[$t]=null}};function qa(e){this._internalRoot=e}qa.prototype.unstable_scheduleHydration=function(e){if(e){var t=wg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Jt.length&&t!==0&&t<Jt[n].priority;n++);Jt.splice(n,0,e),n===0&&kg(e)}};function qf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Qa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function sp(){}function J2(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=da(s);o.call(u)}}var s=Bv(t,r,e,0,null,!1,!1,"",sp);return e._reactRootContainer=s,e[$t]=s.current,Gi(e.nodeType===8?e.parentNode:e),Qn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=da(l);a.call(u)}}var l=Kf(e,0,!1,null,null,!1,!1,"",sp);return e._reactRootContainer=l,e[$t]=l.current,Gi(e.nodeType===8?e.parentNode:e),Qn(function(){Xa(t,l,n,r)}),l}function Ja(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=da(s);a.call(l)}}Xa(t,s,e,i)}else s=J2(n,t,e,i,r);return da(s)}vg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=vi(t.pendingLanes);n!==0&&(mf(t,n|1),je(t,se()),!(V&6)&&(zr=se()+500,Cn()))}break;case 13:Qn(function(){var r=Ut(e,1);if(r!==null){var i=Oe();ht(r,e,1,i)}}),Yf(e,1)}};gf=function(e){if(e.tag===13){var t=Ut(e,134217728);if(t!==null){var n=Oe();ht(t,e,134217728,n)}Yf(e,134217728)}};yg=function(e){if(e.tag===13){var t=mn(e),n=Ut(e,t);if(n!==null){var r=Oe();ht(n,e,t,r)}Yf(e,t)}};wg=function(){return G};_g=function(e,t){var n=G;try{return G=e,t()}finally{G=n}};zu=function(e,t,n){switch(t){case"input":if(Lu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ba(r);if(!i)throw Error(k(90));Qm(r),Lu(r,i)}}}break;case"textarea":Zm(e,n);break;case"select":t=n.value,t!=null&&Ir(e,!!n.multiple,t,!1)}};sg=Hf;ag=Qn;var Z2={usingClientEntryPoint:!1,Events:[Eo,hr,Ba,ig,og,Hf]},di={findFiberByHostInstance:Mn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},e_={bundleType:di.bundleType,version:di.version,rendererPackageName:di.rendererPackageName,rendererConfig:di.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=cg(e),e===null?null:e.stateNode},findFiberByHostInstance:di.findFiberByHostInstance||Q2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ss=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ss.isDisabled&&ss.supportsFiber)try{Ua=ss.inject(e_),kt=ss}catch{}}Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z2;Ye.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qf(t))throw Error(k(200));return q2(e,t,null,n)};Ye.createRoot=function(e,t){if(!qf(e))throw Error(k(299));var n=!1,r="",i=Hv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Kf(e,1,!1,null,null,n,!1,r,i),e[$t]=t.current,Gi(e.nodeType===8?e.parentNode:e),new Xf(t)};Ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=cg(t),e=e===null?null:e.stateNode,e};Ye.flushSync=function(e){return Qn(e)};Ye.hydrate=function(e,t,n){if(!Qa(t))throw Error(k(200));return Ja(null,e,t,!0,n)};Ye.hydrateRoot=function(e,t,n){if(!qf(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Hv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Bv(t,null,e,1,n??null,i,!1,o,s),e[$t]=t.current,Gi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new qa(t)};Ye.render=function(e,t,n){if(!Qa(t))throw Error(k(200));return Ja(null,e,t,!1,n)};Ye.unmountComponentAtNode=function(e){if(!Qa(e))throw Error(k(40));return e._reactRootContainer?(Qn(function(){Ja(null,null,e,!1,function(){e._reactRootContainer=null,e[$t]=null})}),!0):!1};Ye.unstable_batchedUpdates=Hf;Ye.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Qa(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Ja(e,t,n,!1,r)};Ye.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Ye})(Qy);var ap=bu;Iu.createRoot=ap.createRoot,Iu.hydrateRoot=ap.hydrateRoot;/**
 * @remix-run/router v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ha(){return ha=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ha.apply(this,arguments)}var an;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(an||(an={}));const lp="popstate";function t_(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return _c("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:to(i)}return i_(t,n,null,e)}function fe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function n_(){return Math.random().toString(36).substr(2,8)}function up(e){return{usr:e.state,key:e.key}}function _c(e,t,n,r){return n===void 0&&(n=null),ha({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Yr(t):t,{state:n,key:t&&t.key||r||n_()})}function to(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Yr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function r_(e){let t=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:window.location.href,n=typeof e=="string"?e:to(e);return fe(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}function i_(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=an.Pop,l=null;function u(){a=an.Pop,l&&l({action:a,location:h.location})}function c(g,v){a=an.Push;let y=_c(h.location,g,v);n&&n(y,g);let b=up(y),p=h.createHref(y);try{s.pushState(b,"",p)}catch{i.location.assign(p)}o&&l&&l({action:a,location:h.location})}function f(g,v){a=an.Replace;let y=_c(h.location,g,v);n&&n(y,g);let b=up(y),p=h.createHref(y);s.replaceState(b,"",p),o&&l&&l({action:a,location:h.location})}let h={get action(){return a},get location(){return e(i,s)},listen(g){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(lp,u),l=g,()=>{i.removeEventListener(lp,u),l=null}},createHref(g){return t(i,g)},encodeLocation(g){let v=r_(typeof g=="string"?g:to(g));return{pathname:v.pathname,search:v.search,hash:v.hash}},push:c,replace:f,go(g){return s.go(g)}};return h}var cp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(cp||(cp={}));function o_(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Yr(t):t,i=Gv(r.pathname||"/",n);if(i==null)return null;let o=Vv(e);s_(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=m_(o[a],y_(i));return s}function Vv(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(fe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=vn([r,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(fe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Vv(o.children,t,c,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:h_(u,o.index),routesMeta:c})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of Wv(o.path))i(o,s,l)}),t}function Wv(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Wv(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function s_(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:p_(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const a_=/^:\w+$/,l_=3,u_=2,c_=1,f_=10,d_=-2,fp=e=>e==="*";function h_(e,t){let n=e.split("/"),r=n.length;return n.some(fp)&&(r+=d_),t&&(r+=u_),n.filter(i=>!fp(i)).reduce((i,o)=>i+(a_.test(o)?l_:o===""?c_:f_),r)}function p_(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function m_(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=g_({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=a.route;o.push({params:r,pathname:vn([i,c.pathname]),pathnameBase:E_(vn([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=vn([i,c.pathnameBase]))}return o}function g_(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=v_(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let h=a[f]||"";s=o.slice(0,o.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=w_(a[f]||"",c),u},{}),pathname:o,pathnameBase:s,pattern:e}}function v_(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Qf(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function y_(e){try{return decodeURI(e)}catch(t){return Qf(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function w_(e,t){try{return decodeURIComponent(e)}catch(n){return Qf(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Gv(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Qf(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function __(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Yr(e):e;return{pathname:n?n.startsWith("/")?n:k_(n,t):t,search:S_(r),hash:x_(i)}}function k_(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function tu(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Kv(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Yv(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Yr(e):(i=ha({},e),fe(!i.pathname||!i.pathname.includes("?"),tu("?","pathname","search",i)),fe(!i.pathname||!i.pathname.includes("#"),tu("#","pathname","hash",i)),fe(!i.search||!i.search.includes("#"),tu("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(r||s==null)a=n;else{let f=t.length-1;if(s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}a=f>=0?t[f]:"/"}let l=__(i,a),u=s&&s!=="/"&&s.endsWith("/"),c=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const vn=e=>e.join("/").replace(/\/\/+/g,"/"),E_=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),S_=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,x_=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class I_{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function b_(e){return e instanceof I_}const T_=["post","put","patch","delete"];[...T_];/**
 * React Router v6.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kc(){return kc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},kc.apply(this,arguments)}function C_(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const P_=typeof Object.is=="function"?Object.is:C_,{useState:N_,useEffect:A_,useLayoutEffect:R_,useDebugValue:O_}=xu;function L_(e,t,n){const r=t(),[{inst:i},o]=N_({inst:{value:r,getSnapshot:t}});return R_(()=>{i.value=r,i.getSnapshot=t,nu(i)&&o({inst:i})},[e,r,t]),A_(()=>(nu(i)&&o({inst:i}),e(()=>{nu(i)&&o({inst:i})})),[e]),O_(r),r}function nu(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!P_(n,r)}catch{return!0}}function D_(e,t,n){return t()}const M_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",$_=!M_,U_=$_?D_:L_;"useSyncExternalStore"in xu&&(e=>e.useSyncExternalStore)(xu);const F_=I.createContext(null),j_=I.createContext(null),Xv=I.createContext(null),Za=I.createContext(null),el=I.createContext(null),Xr=I.createContext({outlet:null,matches:[]}),qv=I.createContext(null);function z_(e,t){let{relative:n}=t===void 0?{}:t;xo()||fe(!1);let{basename:r,navigator:i}=I.useContext(Za),{hash:o,pathname:s,search:a}=Qv(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:vn([r,s])),i.createHref({pathname:l,search:a,hash:o})}function xo(){return I.useContext(el)!=null}function tl(){return xo()||fe(!1),I.useContext(el).location}function B_(){xo()||fe(!1);let{basename:e,navigator:t}=I.useContext(Za),{matches:n}=I.useContext(Xr),{pathname:r}=tl(),i=JSON.stringify(Kv(n).map(a=>a.pathnameBase)),o=I.useRef(!1);return I.useEffect(()=>{o.current=!0}),I.useCallback(function(a,l){if(l===void 0&&(l={}),!o.current)return;if(typeof a=="number"){t.go(a);return}let u=Yv(a,JSON.parse(i),r,l.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:vn([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state,l)},[e,t,i,r])}function Qv(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=I.useContext(Xr),{pathname:i}=tl(),o=JSON.stringify(Kv(r).map(s=>s.pathnameBase));return I.useMemo(()=>Yv(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function H_(e,t){xo()||fe(!1);let{navigator:n}=I.useContext(Za),r=I.useContext(Xv),{matches:i}=I.useContext(Xr),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=tl(),u;if(t){var c;let y=typeof t=="string"?Yr(t):t;a==="/"||(c=y.pathname)!=null&&c.startsWith(a)||fe(!1),u=y}else u=l;let f=u.pathname||"/",h=a==="/"?f:f.slice(a.length)||"/",g=o_(e,{pathname:h}),v=K_(g&&g.map(y=>Object.assign({},y,{params:Object.assign({},s,y.params),pathname:vn([a,n.encodeLocation?n.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?a:vn([a,n.encodeLocation?n.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,r||void 0);return t&&v?I.createElement(el.Provider,{value:{location:kc({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:an.Pop}},v):v}function V_(){let e=Q_(),t=b_(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r};return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unhandled Thrown Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},t),n?I.createElement("pre",{style:i},n):null,I.createElement("p",null,"💿 Hey developer 👋"),I.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",I.createElement("code",{style:o},"errorElement")," props on ",I.createElement("code",{style:o},"<Route>")))}class W_ extends I.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?I.createElement(Xr.Provider,{value:this.props.routeContext},I.createElement(qv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function G_(e){let{routeContext:t,match:n,children:r}=e,i=I.useContext(F_);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),I.createElement(Xr.Provider,{value:t},r)}function K_(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(s=>s.route.id&&(i==null?void 0:i[s.route.id]));o>=0||fe(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,s,a)=>{let l=s.route.id?i==null?void 0:i[s.route.id]:null,u=n?s.route.errorElement||I.createElement(V_,null):null,c=t.concat(r.slice(0,a+1)),f=()=>I.createElement(G_,{match:s,routeContext:{outlet:o,matches:c}},l?u:s.route.element!==void 0?s.route.element:o);return n&&(s.route.errorElement||a===0)?I.createElement(W_,{location:n.location,component:u,error:l,children:f(),routeContext:{outlet:null,matches:c}}):f()},null)}var dp;(function(e){e.UseRevalidator="useRevalidator"})(dp||(dp={}));var pa;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(pa||(pa={}));function Y_(e){let t=I.useContext(Xv);return t||fe(!1),t}function X_(e){let t=I.useContext(Xr);return t||fe(!1),t}function q_(e){let t=X_(),n=t.matches[t.matches.length-1];return n.route.id||fe(!1),n.route.id}function Q_(){var e;let t=I.useContext(qv),n=Y_(pa.UseRouteError),r=q_(pa.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Jv(e){fe(!1)}function J_(e){let{basename:t="/",children:n=null,location:r,navigationType:i=an.Pop,navigator:o,static:s=!1}=e;xo()&&fe(!1);let a=t.replace(/^\/*/,"/"),l=I.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=Yr(r));let{pathname:u="/",search:c="",hash:f="",state:h=null,key:g="default"}=r,v=I.useMemo(()=>{let y=Gv(u,a);return y==null?null:{pathname:y,search:c,hash:f,state:h,key:g}},[a,u,c,f,h,g]);return v==null?null:I.createElement(Za.Provider,{value:l},I.createElement(el.Provider,{children:n,value:{location:v,navigationType:i}}))}function Z_(e){let{children:t,location:n}=e,r=I.useContext(j_),i=r&&!t?r.router.routes:Ec(t);return H_(i,n)}var hp;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(hp||(hp={}));new Promise(()=>{});function Ec(e,t){t===void 0&&(t=[]);let n=[];return I.Children.forEach(e,(r,i)=>{if(!I.isValidElement(r))return;if(r.type===I.Fragment){n.push.apply(n,Ec(r.props.children,t));return}r.type!==Jv&&fe(!1),!r.props.index||!r.props.children||fe(!1);let o=[...t,i],s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(s.children=Ec(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Sc(){return Sc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Sc.apply(this,arguments)}function ek(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function tk(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function nk(e,t){return e.button===0&&(!t||t==="_self")&&!tk(e)}const rk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function ik(e){let{basename:t,children:n,window:r}=e,i=I.useRef();i.current==null&&(i.current=t_({window:r,v5Compat:!0}));let o=i.current,[s,a]=I.useState({action:o.action,location:o.location});return I.useLayoutEffect(()=>o.listen(a),[o]),I.createElement(J_,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o})}const xe=I.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:c}=t,f=ek(t,rk),h=z_(u,{relative:i}),g=ok(u,{replace:s,state:a,target:l,preventScrollReset:c,relative:i});function v(y){r&&r(y),y.defaultPrevented||g(y)}return I.createElement("a",Sc({},f,{href:h,onClick:o?r:v,ref:n,target:l}))});var pp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(pp||(pp={}));var mp;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(mp||(mp={}));function ok(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s}=t===void 0?{}:t,a=B_(),l=tl(),u=Qv(e,{relative:s});return I.useCallback(c=>{if(nk(c,n)){c.preventDefault();let f=r!==void 0?r:to(l)===to(u);a(e,{replace:f,state:i,preventScrollReset:o,relative:s})}},[l,a,u,r,i,n,e,o,s])}const sk=()=>A(wo,{children:[_(gS,{}),_(pS,{})]}),ak=()=>{const e=I.useRef(!0),t=()=>{new window.google.translate.TranslateElement({pageLanguage:"en"},"google_translate_element")};return I.useEffect(()=>{if(e.current){e.current=!1;var n=document.createElement("script");n.setAttribute("src","//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"),document.body.appendChild(n),window.googleTranslateElementInit=t}},[]),_(wo,{children:A("div",{className:"flex flex-col justify-center items-center py-6",children:[_("span",{className:"w-2/6 h-px block bg-zinc-900 opacity-30"}),_("div",{id:"google_translate_element",className:"w-full flex justify-center my-6"}),_("span",{className:"w-2/6 h-px block bg-zinc-900 opacity-30"})]})})};function gp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?gp(Object(n),!0).forEach(function(r){de(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ma(e){return ma=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ma(e)}function lk(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function vp(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function uk(e,t,n){return t&&vp(e.prototype,t),n&&vp(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Jf(e,t){return fk(e)||hk(e,t)||Zv(e,t)||mk()}function Io(e){return ck(e)||dk(e)||Zv(e)||pk()}function ck(e){if(Array.isArray(e))return xc(e)}function fk(e){if(Array.isArray(e))return e}function dk(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function hk(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,s,a;try{for(n=n.call(e);!(i=(s=n.next()).done)&&(r.push(s.value),!(t&&r.length===t));i=!0);}catch(l){o=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw a}}return r}}function Zv(e,t){if(e){if(typeof e=="string")return xc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return xc(e,t)}}function xc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function pk(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mk(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var yp=function(){},Zf={},e1={},t1=null,n1={mark:yp,measure:yp};try{typeof window<"u"&&(Zf=window),typeof document<"u"&&(e1=document),typeof MutationObserver<"u"&&(t1=MutationObserver),typeof performance<"u"&&(n1=performance)}catch{}var gk=Zf.navigator||{},wp=gk.userAgent,_p=wp===void 0?"":wp,En=Zf,Q=e1,kp=t1,as=n1;En.document;var Gt=!!Q.documentElement&&!!Q.head&&typeof Q.addEventListener=="function"&&typeof Q.createElement=="function",r1=~_p.indexOf("MSIE")||~_p.indexOf("Trident/"),ls,us,cs,fs,ds,jt="___FONT_AWESOME___",Ic=16,i1="fa",o1="svg-inline--fa",Jn="data-fa-i2svg",bc="data-fa-pseudo-element",vk="data-fa-pseudo-element-pending",ed="data-prefix",td="data-icon",Ep="fontawesome-i2svg",yk="async",wk=["HTML","HEAD","STYLE","SCRIPT"],s1=function(){try{return!0}catch{return!1}}(),X="classic",ie="sharp",nd=[X,ie];function bo(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[X]}})}var no=bo((ls={},de(ls,X,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),de(ls,ie,{fa:"solid",fass:"solid","fa-solid":"solid"}),ls)),ro=bo((us={},de(us,X,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),de(us,ie,{solid:"fass"}),us)),io=bo((cs={},de(cs,X,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),de(cs,ie,{fass:"fa-solid"}),cs)),_k=bo((fs={},de(fs,X,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),de(fs,ie,{"fa-solid":"fass"}),fs)),kk=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,a1="fa-layers-text",Ek=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Sk=bo((ds={},de(ds,X,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),de(ds,ie,{900:"fass"}),ds)),l1=[1,2,3,4,5,6,7,8,9,10],xk=l1.concat([11,12,13,14,15,16,17,18,19,20]),Ik=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Fn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},oo=new Set;Object.keys(ro[X]).map(oo.add.bind(oo));Object.keys(ro[ie]).map(oo.add.bind(oo));var bk=[].concat(nd,Io(oo),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Fn.GROUP,Fn.SWAP_OPACITY,Fn.PRIMARY,Fn.SECONDARY]).concat(l1.map(function(e){return"".concat(e,"x")})).concat(xk.map(function(e){return"w-".concat(e)})),Oi=En.FontAwesomeConfig||{};function Tk(e){var t=Q.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Ck(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Q&&typeof Q.querySelector=="function"){var Pk=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Pk.forEach(function(e){var t=Jf(e,2),n=t[0],r=t[1],i=Ck(Tk(n));i!=null&&(Oi[r]=i)})}var u1={styleDefault:"solid",familyDefault:"classic",cssPrefix:i1,replacementClass:o1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Oi.familyPrefix&&(Oi.cssPrefix=Oi.familyPrefix);var Br=T(T({},u1),Oi);Br.autoReplaceSvg||(Br.observeMutations=!1);var R={};Object.keys(u1).forEach(function(e){Object.defineProperty(R,e,{enumerable:!0,set:function(n){Br[e]=n,Li.forEach(function(r){return r(R)})},get:function(){return Br[e]}})});Object.defineProperty(R,"familyPrefix",{enumerable:!0,set:function(t){Br.cssPrefix=t,Li.forEach(function(n){return n(R)})},get:function(){return Br.cssPrefix}});En.FontAwesomeConfig=R;var Li=[];function Nk(e){return Li.push(e),function(){Li.splice(Li.indexOf(e),1)}}var Yt=Ic,_t={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ak(e){if(!(!e||!Gt)){var t=Q.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=Q.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return Q.head.insertBefore(t,r),e}}var Rk="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function so(){for(var e=12,t="";e-- >0;)t+=Rk[Math.random()*62|0];return t}function qr(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function rd(e){return e.classList?qr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function c1(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ok(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(c1(e[n]),'" ')},"").trim()}function nl(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function id(e){return e.size!==_t.size||e.x!==_t.x||e.y!==_t.y||e.rotate!==_t.rotate||e.flipX||e.flipY}function Lk(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(s," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function Dk(e){var t=e.transform,n=e.width,r=n===void 0?Ic:n,i=e.height,o=i===void 0?Ic:i,s=e.startCentered,a=s===void 0?!1:s,l="";return a&&r1?l+="translate(".concat(t.x/Yt-r/2,"em, ").concat(t.y/Yt-o/2,"em) "):a?l+="translate(calc(-50% + ".concat(t.x/Yt,"em), calc(-50% + ").concat(t.y/Yt,"em)) "):l+="translate(".concat(t.x/Yt,"em, ").concat(t.y/Yt,"em) "),l+="scale(".concat(t.size/Yt*(t.flipX?-1:1),", ").concat(t.size/Yt*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Mk=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
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
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
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
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
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
  left: calc(var(--fa-li-width, 2em) * -1);
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
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
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
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
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
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function f1(){var e=i1,t=o1,n=R.cssPrefix,r=R.replacementClass,i=Mk;if(n!==e||r!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var Sp=!1;function ru(){R.autoAddCss&&!Sp&&(Ak(f1()),Sp=!0)}var $k={mixout:function(){return{dom:{css:f1,insertCss:ru}}},hooks:function(){return{beforeDOMElementCreation:function(){ru()},beforeI2svg:function(){ru()}}}},zt=En||{};zt[jt]||(zt[jt]={});zt[jt].styles||(zt[jt].styles={});zt[jt].hooks||(zt[jt].hooks={});zt[jt].shims||(zt[jt].shims=[]);var ct=zt[jt],d1=[],Uk=function e(){Q.removeEventListener("DOMContentLoaded",e),ga=1,d1.map(function(t){return t()})},ga=!1;Gt&&(ga=(Q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Q.readyState),ga||Q.addEventListener("DOMContentLoaded",Uk));function Fk(e){Gt&&(ga?setTimeout(e,0):d1.push(e))}function To(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,o=i===void 0?[]:i;return typeof e=="string"?c1(e):"<".concat(t," ").concat(Ok(r),">").concat(o.map(To).join(""),"</").concat(t,">")}function xp(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var jk=function(t,n){return function(r,i,o,s){return t.call(n,r,i,o,s)}},iu=function(t,n,r,i){var o=Object.keys(t),s=o.length,a=i!==void 0?jk(n,i):n,l,u,c;for(r===void 0?(l=1,c=t[o[0]]):(l=0,c=r);l<s;l++)u=o[l],c=a(c,t[u],u,t);return c};function zk(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=e.charCodeAt(n++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Tc(e){var t=zk(e);return t.length===1?t[0].toString(16):null}function Bk(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Ip(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Cc(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,o=Ip(t);typeof ct.hooks.addPack=="function"&&!i?ct.hooks.addPack(e,Ip(t)):ct.styles[e]=T(T({},ct.styles[e]||{}),o),e==="fas"&&Cc("fa",t)}var hs,ps,ms,_r=ct.styles,Hk=ct.shims,Vk=(hs={},de(hs,X,Object.values(io[X])),de(hs,ie,Object.values(io[ie])),hs),od=null,h1={},p1={},m1={},g1={},v1={},Wk=(ps={},de(ps,X,Object.keys(no[X])),de(ps,ie,Object.keys(no[ie])),ps);function Gk(e){return~bk.indexOf(e)}function Kk(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!Gk(i)?i:null}var y1=function(){var t=function(o){return iu(_r,function(s,a,l){return s[l]=iu(a,o,{}),s},{})};h1=t(function(i,o,s){if(o[3]&&(i[o[3]]=s),o[2]){var a=o[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=s})}return i}),p1=t(function(i,o,s){if(i[s]=s,o[2]){var a=o[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=s})}return i}),v1=t(function(i,o,s){var a=o[2];return i[s]=s,a.forEach(function(l){i[l]=s}),i});var n="far"in _r||R.autoFetchSvg,r=iu(Hk,function(i,o){var s=o[0],a=o[1],l=o[2];return a==="far"&&!n&&(a="fas"),typeof s=="string"&&(i.names[s]={prefix:a,iconName:l}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});m1=r.names,g1=r.unicodes,od=rl(R.styleDefault,{family:R.familyDefault})};Nk(function(e){od=rl(e.styleDefault,{family:R.familyDefault})});y1();function sd(e,t){return(h1[e]||{})[t]}function Yk(e,t){return(p1[e]||{})[t]}function jn(e,t){return(v1[e]||{})[t]}function w1(e){return m1[e]||{prefix:null,iconName:null}}function Xk(e){var t=g1[e],n=sd("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Sn(){return od}var ad=function(){return{prefix:null,iconName:null,rest:[]}};function rl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?X:n,i=no[r][e],o=ro[r][e]||ro[r][i],s=e in ct.styles?e:null;return o||s||null}var bp=(ms={},de(ms,X,Object.keys(io[X])),de(ms,ie,Object.keys(io[ie])),ms);function il(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,o=(t={},de(t,X,"".concat(R.cssPrefix,"-").concat(X)),de(t,ie,"".concat(R.cssPrefix,"-").concat(ie)),t),s=null,a=X;(e.includes(o[X])||e.some(function(u){return bp[X].includes(u)}))&&(a=X),(e.includes(o[ie])||e.some(function(u){return bp[ie].includes(u)}))&&(a=ie);var l=e.reduce(function(u,c){var f=Kk(R.cssPrefix,c);if(_r[c]?(c=Vk[a].includes(c)?_k[a][c]:c,s=c,u.prefix=c):Wk[a].indexOf(c)>-1?(s=c,u.prefix=rl(c,{family:a})):f?u.iconName=f:c!==R.replacementClass&&c!==o[X]&&c!==o[ie]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var h=s==="fa"?w1(u.iconName):{},g=jn(u.prefix,u.iconName);h.prefix&&(s=null),u.iconName=h.iconName||g||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!_r.far&&_r.fas&&!R.autoFetchSvg&&(u.prefix="fas")}return u},ad());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===ie&&(_r.fass||R.autoFetchSvg)&&(l.prefix="fass",l.iconName=jn(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=Sn()||"fas"),l}var qk=function(){function e(){lk(this,e),this.definitions={}}return uk(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var s=i.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(a){n.definitions[a]=T(T({},n.definitions[a]||{}),s[a]),Cc(a,s[a]);var l=io[X][a];l&&Cc(l,s[a]),y1()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(o){var s=i[o],a=s.prefix,l=s.iconName,u=s.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[a][f]=u)}),n[a][l]=u}),n}}]),e}(),Tp=[],kr={},Ar={},Qk=Object.keys(Ar);function Jk(e,t){var n=t.mixoutsTo;return Tp=e,kr={},Object.keys(Ar).forEach(function(r){Qk.indexOf(r)===-1&&delete Ar[r]}),Tp.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(s){typeof i[s]=="function"&&(n[s]=i[s]),ma(i[s])==="object"&&Object.keys(i[s]).forEach(function(a){n[s]||(n[s]={}),n[s][a]=i[s][a]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(s){kr[s]||(kr[s]=[]),kr[s].push(o[s])})}r.provides&&r.provides(Ar)}),n}function Pc(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=kr[e]||[];return o.forEach(function(s){t=s.apply(null,[t].concat(r))}),t}function Zn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=kr[e]||[];i.forEach(function(o){o.apply(null,n)})}function Bt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ar[e]?Ar[e].apply(null,t):void 0}function Nc(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Sn();if(t)return t=jn(n,t)||t,xp(_1.definitions,n,t)||xp(ct.styles,n,t)}var _1=new qk,Zk=function(){R.autoReplaceSvg=!1,R.observeMutations=!1,Zn("noAuto")},eE={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Gt?(Zn("beforeI2svg",t),Bt("pseudoElements2svg",t),Bt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;R.autoReplaceSvg===!1&&(R.autoReplaceSvg=!0),R.observeMutations=!0,Fk(function(){nE({autoReplaceSvgRoot:n}),Zn("watch",t)})}},tE={icon:function(t){if(t===null)return null;if(ma(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:jn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=rl(t[0]);return{prefix:r,iconName:jn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(R.cssPrefix,"-"))>-1||t.match(kk))){var i=il(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Sn(),iconName:jn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var o=Sn();return{prefix:o,iconName:jn(o,t)||t}}}},qe={noAuto:Zk,config:R,dom:eE,parse:tE,library:_1,findIconDefinition:Nc,toHtml:To},nE=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?Q:n;(Object.keys(ct.styles).length>0||R.autoFetchSvg)&&Gt&&R.autoReplaceSvg&&qe.dom.i2svg({node:r})};function ol(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return To(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Gt){var r=Q.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function rE(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,o=e.styles,s=e.transform;if(id(s)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=nl(T(T({},o),{},{"transform-origin":"".concat(u.x+s.x/16,"em ").concat(u.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function iE(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,o=e.symbol,s=o===!0?"".concat(t,"-").concat(R.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:T(T({},i),{},{id:s}),children:r}]}]}function ld(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,o=e.iconName,s=e.transform,a=e.symbol,l=e.title,u=e.maskId,c=e.titleId,f=e.extra,h=e.watchable,g=h===void 0?!1:h,v=r.found?r:n,y=v.width,b=v.height,p=i==="fak",d=[R.replacementClass,o?"".concat(R.cssPrefix,"-").concat(o):""].filter(function(B){return f.classes.indexOf(B)===-1}).filter(function(B){return B!==""||!!B}).concat(f.classes).join(" "),m={children:[],attributes:T(T({},f.attributes),{},{"data-prefix":i,"data-icon":o,class:d,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(b)})},w=p&&!~f.classes.indexOf("fa-fw")?{width:"".concat(y/b*16*.0625,"em")}:{};g&&(m.attributes[Jn]=""),l&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(c||so())},children:[l]}),delete m.attributes.title);var E=T(T({},m),{},{prefix:i,iconName:o,main:n,mask:r,maskId:u,transform:s,symbol:a,styles:T(T({},w),f.styles)}),S=r.found&&n.found?Bt("generateAbstractMask",E)||{children:[],attributes:{}}:Bt("generateAbstractIcon",E)||{children:[],attributes:{}},x=S.children,N=S.attributes;return E.children=x,E.attributes=N,a?iE(E):rE(E)}function Cp(e){var t=e.content,n=e.width,r=e.height,i=e.transform,o=e.title,s=e.extra,a=e.watchable,l=a===void 0?!1:a,u=T(T(T({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});l&&(u[Jn]="");var c=T({},s.styles);id(i)&&(c.transform=Dk({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=nl(c);f.length>0&&(u.style=f);var h=[];return h.push({tag:"span",attributes:u,children:[t]}),o&&h.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),h}function oE(e){var t=e.content,n=e.title,r=e.extra,i=T(T(T({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=nl(r.styles);o.length>0&&(i.style=o);var s=[];return s.push({tag:"span",attributes:i,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var ou=ct.styles;function Ac(e){var t=e[0],n=e[1],r=e.slice(4),i=Jf(r,1),o=i[0],s=null;return Array.isArray(o)?s={tag:"g",attributes:{class:"".concat(R.cssPrefix,"-").concat(Fn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(R.cssPrefix,"-").concat(Fn.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(R.cssPrefix,"-").concat(Fn.PRIMARY),fill:"currentColor",d:o[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:n,icon:s}}var sE={found:!1,width:512,height:512};function aE(e,t){!s1&&!R.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Rc(e,t){var n=t;return t==="fa"&&R.styleDefault!==null&&(t=Sn()),new Promise(function(r,i){if(Bt("missingIconAbstract"),n==="fa"){var o=w1(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&ou[t]&&ou[t][e]){var s=ou[t][e];return r(Ac(s))}aE(e,t),r(T(T({},sE),{},{icon:R.showMissingIcons&&e?Bt("missingIconAbstract")||{}:{}}))})}var Pp=function(){},Oc=R.measurePerformance&&as&&as.mark&&as.measure?as:{mark:Pp,measure:Pp},wi='FA "6.2.1"',lE=function(t){return Oc.mark("".concat(wi," ").concat(t," begins")),function(){return k1(t)}},k1=function(t){Oc.mark("".concat(wi," ").concat(t," ends")),Oc.measure("".concat(wi," ").concat(t),"".concat(wi," ").concat(t," begins"),"".concat(wi," ").concat(t," ends"))},ud={begin:lE,end:k1},$s=function(){};function Np(e){var t=e.getAttribute?e.getAttribute(Jn):null;return typeof t=="string"}function uE(e){var t=e.getAttribute?e.getAttribute(ed):null,n=e.getAttribute?e.getAttribute(td):null;return t&&n}function cE(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(R.replacementClass)}function fE(){if(R.autoReplaceSvg===!0)return Us.replace;var e=Us[R.autoReplaceSvg];return e||Us.replace}function dE(e){return Q.createElementNS("http://www.w3.org/2000/svg",e)}function hE(e){return Q.createElement(e)}function E1(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?dE:hE:n;if(typeof e=="string")return Q.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(s){i.setAttribute(s,e.attributes[s])});var o=e.children||[];return o.forEach(function(s){i.appendChild(E1(s,{ceFn:r}))}),i}function pE(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Us={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(E1(i),n)}),n.getAttribute(Jn)===null&&R.keepOriginalSource){var r=Q.createComment(pE(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~rd(n).indexOf(R.replacementClass))return Us.replace(t);var i=new RegExp("".concat(R.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(a,l){return l===R.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var s=r.map(function(a){return To(a)}).join(`
`);n.setAttribute(Jn,""),n.innerHTML=s}};function Ap(e){e()}function S1(e,t){var n=typeof t=="function"?t:$s;if(e.length===0)n();else{var r=Ap;R.mutateApproach===yk&&(r=En.requestAnimationFrame||Ap),r(function(){var i=fE(),o=ud.begin("mutate");e.map(i),o(),n()})}}var cd=!1;function x1(){cd=!0}function Lc(){cd=!1}var va=null;function Rp(e){if(kp&&R.observeMutations){var t=e.treeCallback,n=t===void 0?$s:t,r=e.nodeCallback,i=r===void 0?$s:r,o=e.pseudoElementsCallback,s=o===void 0?$s:o,a=e.observeMutationsRoot,l=a===void 0?Q:a;va=new kp(function(u){if(!cd){var c=Sn();qr(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Np(f.addedNodes[0])&&(R.searchPseudoElements&&s(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&R.searchPseudoElements&&s(f.target.parentNode),f.type==="attributes"&&Np(f.target)&&~Ik.indexOf(f.attributeName))if(f.attributeName==="class"&&uE(f.target)){var h=il(rd(f.target)),g=h.prefix,v=h.iconName;f.target.setAttribute(ed,g||c),v&&f.target.setAttribute(td,v)}else cE(f.target)&&i(f.target)})}}),Gt&&va.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function mE(){va&&va.disconnect()}function gE(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var o=i.split(":"),s=o[0],a=o.slice(1);return s&&a.length>0&&(r[s]=a.join(":").trim()),r},{})),n}function vE(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=il(rd(e));return i.prefix||(i.prefix=Sn()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Yk(i.prefix,e.innerText)||sd(i.prefix,Tc(e.innerText))),!i.iconName&&R.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function yE(e){var t=qr(e.attributes).reduce(function(i,o){return i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return R.autoA11y&&(n?t["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(r||so()):(t["aria-hidden"]="true",t.focusable="false")),t}function wE(){return{iconName:null,title:null,titleId:null,prefix:null,transform:_t,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Op(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=vE(e),r=n.iconName,i=n.prefix,o=n.rest,s=yE(e),a=Pc("parseNodeAttributes",{},e),l=t.styleParser?gE(e):[];return T({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:_t,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:s}},a)}var _E=ct.styles;function I1(e){var t=R.autoReplaceSvg==="nest"?Op(e,{styleParser:!1}):Op(e);return~t.extra.classes.indexOf(a1)?Bt("generateLayersText",e,t):Bt("generateSvgReplacementMutation",e,t)}var xn=new Set;nd.map(function(e){xn.add("fa-".concat(e))});Object.keys(no[X]).map(xn.add.bind(xn));Object.keys(no[ie]).map(xn.add.bind(xn));xn=Io(xn);function Lp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Gt)return Promise.resolve();var n=Q.documentElement.classList,r=function(f){return n.add("".concat(Ep,"-").concat(f))},i=function(f){return n.remove("".concat(Ep,"-").concat(f))},o=R.autoFetchSvg?xn:nd.map(function(c){return"fa-".concat(c)}).concat(Object.keys(_E));o.includes("fa")||o.push("fa");var s=[".".concat(a1,":not([").concat(Jn,"])")].concat(o.map(function(c){return".".concat(c,":not([").concat(Jn,"])")})).join(", ");if(s.length===0)return Promise.resolve();var a=[];try{a=qr(e.querySelectorAll(s))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=ud.begin("onTree"),u=a.reduce(function(c,f){try{var h=I1(f);h&&c.push(h)}catch(g){s1||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(h){S1(h,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(h){l(),f(h)})})}function kE(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;I1(e).then(function(n){n&&S1([n],t)})}function EE(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Nc(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Nc(i||{})),e(r,T(T({},n),{},{mask:i}))}}var SE=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?_t:r,o=n.symbol,s=o===void 0?!1:o,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,f=n.title,h=f===void 0?null:f,g=n.titleId,v=g===void 0?null:g,y=n.classes,b=y===void 0?[]:y,p=n.attributes,d=p===void 0?{}:p,m=n.styles,w=m===void 0?{}:m;if(t){var E=t.prefix,S=t.iconName,x=t.icon;return ol(T({type:"icon"},t),function(){return Zn("beforeDOMElementCreation",{iconDefinition:t,params:n}),R.autoA11y&&(h?d["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(v||so()):(d["aria-hidden"]="true",d.focusable="false")),ld({icons:{main:Ac(x),mask:l?Ac(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:S,transform:T(T({},_t),i),symbol:s,title:h,maskId:c,titleId:v,extra:{attributes:d,styles:w,classes:b}})})}},xE={mixout:function(){return{icon:EE(SE)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Lp,n.nodeCallback=kE,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?Q:r,o=n.callback,s=o===void 0?function(){}:o;return Lp(i,s)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,o=r.title,s=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,h=r.extra;return new Promise(function(g,v){Promise.all([Rc(i,a),c.iconName?Rc(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var b=Jf(y,2),p=b[0],d=b[1];g([n,ld({icons:{main:p,mask:d},prefix:a,iconName:i,transform:l,symbol:u,maskId:f,title:o,titleId:s,extra:h,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.transform,a=n.styles,l=nl(a);l.length>0&&(i.style=l);var u;return id(s)&&(u=Bt("generateAbstractTransformGrouping",{main:o,transform:s,containerWidth:o.width,iconWidth:o.width})),r.push(u||o.icon),{children:r,attributes:i}}}},IE={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,o=i===void 0?[]:i;return ol({type:"layer"},function(){Zn("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(a){Array.isArray(a)?a.map(function(l){s=s.concat(l.abstract)}):s=s.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(R.cssPrefix,"-layers")].concat(Io(o)).join(" ")},children:s}]})}}}},bE={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,o=i===void 0?null:i,s=r.classes,a=s===void 0?[]:s,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return ol({type:"counter",content:n},function(){return Zn("beforeDOMElementCreation",{content:n,params:r}),oE({content:n.toString(),title:o,extra:{attributes:u,styles:f,classes:["".concat(R.cssPrefix,"-layers-counter")].concat(Io(a))}})})}}}},TE={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,o=i===void 0?_t:i,s=r.title,a=s===void 0?null:s,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,h=r.styles,g=h===void 0?{}:h;return ol({type:"text",content:n},function(){return Zn("beforeDOMElementCreation",{content:n,params:r}),Cp({content:n,transform:T(T({},_t),o),title:a,extra:{attributes:f,styles:g,classes:["".concat(R.cssPrefix,"-layers-text")].concat(Io(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,o=r.transform,s=r.extra,a=null,l=null;if(r1){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return R.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,Cp({content:n.innerHTML,width:a,height:l,transform:o,title:i,extra:s,watchable:!0})])}}},CE=new RegExp('"',"ug"),Dp=[1105920,1112319];function PE(e){var t=e.replace(CE,""),n=Bk(t,0),r=n>=Dp[0]&&n<=Dp[1],i=t.length===2?t[0]===t[1]:!1;return{value:Tc(i?t[0]:t),isSecondary:r||i}}function Mp(e,t){var n="".concat(vk).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var o=qr(e.children),s=o.filter(function(x){return x.getAttribute(bc)===t})[0],a=En.getComputedStyle(e,t),l=a.getPropertyValue("font-family").match(Ek),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(s&&!l)return e.removeChild(s),r();if(l&&c!=="none"&&c!==""){var f=a.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?ie:X,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?ro[h][l[2].toLowerCase()]:Sk[h][u],v=PE(f),y=v.value,b=v.isSecondary,p=l[0].startsWith("FontAwesome"),d=sd(g,y),m=d;if(p){var w=Xk(y);w.iconName&&w.prefix&&(d=w.iconName,g=w.prefix)}if(d&&!b&&(!s||s.getAttribute(ed)!==g||s.getAttribute(td)!==m)){e.setAttribute(n,m),s&&e.removeChild(s);var E=wE(),S=E.extra;S.attributes[bc]=t,Rc(d,g).then(function(x){var N=ld(T(T({},E),{},{icons:{main:x,mask:ad()},prefix:g,iconName:m,extra:S,watchable:!0})),B=Q.createElement("svg");t==="::before"?e.insertBefore(B,e.firstChild):e.appendChild(B),B.outerHTML=N.map(function($){return To($)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function NE(e){return Promise.all([Mp(e,"::before"),Mp(e,"::after")])}function AE(e){return e.parentNode!==document.head&&!~wk.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(bc)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function $p(e){if(Gt)return new Promise(function(t,n){var r=qr(e.querySelectorAll("*")).filter(AE).map(NE),i=ud.begin("searchPseudoElements");x1(),Promise.all(r).then(function(){i(),Lc(),t()}).catch(function(){i(),Lc(),n()})})}var RE={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=$p,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Q:r;R.searchPseudoElements&&$p(i)}}},Up=!1,OE={mixout:function(){return{dom:{unwatch:function(){x1(),Up=!0}}}},hooks:function(){return{bootstrap:function(){Rp(Pc("mutationObserverCallbacks",{}))},noAuto:function(){mE()},watch:function(n){var r=n.observeMutationsRoot;Up?Lc():Rp(Pc("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Fp=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var o=i.toLowerCase().split("-"),s=o[0],a=o.slice(1).join("-");if(s&&a==="h")return r.flipX=!0,r;if(s&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(s){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},LE={mixout:function(){return{parse:{transform:function(n){return Fp(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Fp(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,o=n.containerWidth,s=n.iconWidth,a={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},h={transform:"translate(".concat(s/2*-1," -256)")},g={outer:a,inner:f,path:h};return{tag:"g",attributes:T({},g.outer),children:[{tag:"g",attributes:T({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:T(T({},r.icon.attributes),g.path)}]}]}}}},su={x:0,y:0,width:"100%",height:"100%"};function jp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function DE(e){return e.tag==="g"?e.children:[e]}var ME={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),o=i?il(i.split(" ").map(function(s){return s.trim()})):ad();return o.prefix||(o.prefix=Sn()),n.mask=o,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.mask,a=n.maskId,l=n.transform,u=o.width,c=o.icon,f=s.width,h=s.icon,g=Lk({transform:l,containerWidth:f,iconWidth:u}),v={tag:"rect",attributes:T(T({},su),{},{fill:"white"})},y=c.children?{children:c.children.map(jp)}:{},b={tag:"g",attributes:T({},g.inner),children:[jp(T({tag:c.tag,attributes:T(T({},c.attributes),g.path)},y))]},p={tag:"g",attributes:T({},g.outer),children:[b]},d="mask-".concat(a||so()),m="clip-".concat(a||so()),w={tag:"mask",attributes:T(T({},su),{},{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,p]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:DE(h)},w]};return r.push(E,{tag:"rect",attributes:T({fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(d,")")},su)}),{children:r,attributes:i}}}},$E={provides:function(t){var n=!1;En.matchMedia&&(n=En.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:T(T({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=T(T({},o),{},{attributeName:"opacity"}),a={tag:"circle",attributes:T(T({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:T(T({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:T(T({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:T(T({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:T(T({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:T(T({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:T(T({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},UE={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),o=i===null?!1:i===""?!0:i;return n.symbol=o,n}}}},FE=[$k,xE,IE,bE,TE,RE,OE,LE,ME,$E,UE];Jk(FE,{mixoutsTo:qe});qe.noAuto;qe.config;qe.library;qe.dom;var Dc=qe.parse;qe.findIconDefinition;qe.toHtml;var jE=qe.icon;qe.layer;qe.text;qe.counter;var U={},zE={get exports(){return U},set exports(e){U=e}},BE="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",HE=BE,VE=HE;function b1(){}function T1(){}T1.resetWarningCache=b1;var WE=function(){function e(r,i,o,s,a,l){if(l!==VE){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:T1,resetWarningCache:b1};return n.PropTypes=n,n};zE.exports=WE();function zp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ln(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?zp(Object(n),!0).forEach(function(r){Er(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):zp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ya(e){return ya=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ya(e)}function Er(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function GE(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function KE(e,t){if(e==null)return{};var n=GE(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Mc(e){return YE(e)||XE(e)||qE(e)||QE()}function YE(e){if(Array.isArray(e))return $c(e)}function XE(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function qE(e,t){if(e){if(typeof e=="string")return $c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $c(e,t)}}function $c(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function QE(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function JE(e){var t,n=e.beat,r=e.fade,i=e.beatFade,o=e.bounce,s=e.shake,a=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,f=e.pulse,h=e.fixedWidth,g=e.inverse,v=e.border,y=e.listItem,b=e.flip,p=e.size,d=e.rotation,m=e.pull,w=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":s,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":h,"fa-inverse":g,"fa-border":v,"fa-li":y,"fa-flip":b===!0,"fa-flip-horizontal":b==="horizontal"||b==="both","fa-flip-vertical":b==="vertical"||b==="both"},Er(t,"fa-".concat(p),typeof p<"u"&&p!==null),Er(t,"fa-rotate-".concat(d),typeof d<"u"&&d!==null&&d!==0),Er(t,"fa-pull-".concat(m),typeof m<"u"&&m!==null),Er(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(w).map(function(E){return w[E]?E:null}).filter(function(E){return E})}function ZE(e){return e=e-0,e===e}function C1(e){return ZE(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var eS=["style"];function tS(e){return e.charAt(0).toUpperCase()+e.slice(1)}function nS(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=C1(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?t[tS(i)]=o:t[i]=o,t},{})}function P1(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return P1(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=nS(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[C1(u)]=c}return l},{attrs:{}}),o=n.style,s=o===void 0?{}:o,a=KE(n,eS);return i.attrs.style=ln(ln({},i.attrs.style),s),e.apply(void 0,[t.tag,ln(ln({},i.attrs),a)].concat(Mc(r)))}var N1=!1;try{N1=!0}catch{}function rS(){if(!N1&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Bp(e){if(e&&ya(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Dc.icon)return Dc.icon(e);if(e===null)return null;if(e&&ya(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function au(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Er({},e,t):{}}var z=$a.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,o=e.className,s=e.title,a=e.titleId,l=e.maskId,u=Bp(n),c=au("classes",[].concat(Mc(JE(e)),Mc(o.split(" ")))),f=au("transform",typeof e.transform=="string"?Dc.transform(e.transform):e.transform),h=au("mask",Bp(r)),g=jE(u,ln(ln(ln(ln({},c),f),h),{},{symbol:i,title:s,titleId:a,maskId:l}));if(!g)return rS("Could not find icon",u),null;var v=g.abstract,y={ref:t};return Object.keys(e).forEach(function(b){z.defaultProps.hasOwnProperty(b)||(y[b]=e[b])}),iS(v[0],y)});z.displayName="FontAwesomeIcon";z.propTypes={beat:U.bool,border:U.bool,beatFade:U.bool,bounce:U.bool,className:U.string,fade:U.bool,flash:U.bool,mask:U.oneOfType([U.object,U.array,U.string]),maskId:U.string,fixedWidth:U.bool,inverse:U.bool,flip:U.oneOf([!0,!1,"horizontal","vertical","both"]),icon:U.oneOfType([U.object,U.array,U.string]),listItem:U.bool,pull:U.oneOf(["right","left"]),pulse:U.bool,rotation:U.oneOf([0,90,180,270]),shake:U.bool,size:U.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:U.bool,spinPulse:U.bool,spinReverse:U.bool,symbol:U.oneOfType([U.bool,U.string]),title:U.string,titleId:U.string,transform:U.oneOfType([U.string,U.object]),swapOpacity:U.bool};z.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var iS=P1.bind(null,$a.createElement),oS={prefix:"fab",iconName:"skype",icon:[448,512,[],"f17e","M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 112 32 50.2 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z"]},gs={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]},vs={prefix:"fas",iconName:"gavel",icon:[512,512,["legal"],"f0e3","M318.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-120 120c-12.5 12.5-12.5 32.8 0 45.3l16 16c12.5 12.5 32.8 12.5 45.3 0l4-4L325.4 293.4l-4 4c-12.5 12.5-12.5 32.8 0 45.3l16 16c12.5 12.5 32.8 12.5 45.3 0l120-120c12.5-12.5 12.5-32.8 0-45.3l-16-16c-12.5-12.5-32.8-12.5-45.3 0l-4 4L330.6 74.6l4-4c12.5-12.5 12.5-32.8 0-45.3l-16-16zm-152 288c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l48 48c12.5 12.5 32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-1.4-1.4L272 285.3 226.7 240 168 298.7l-1.4-1.4z"]},sS={prefix:"fas",iconName:"flag",icon:[448,512,[127988,61725],"f024","M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32V64 368 480c0 17.7 14.3 32 32 32s32-14.3 32-32V352l64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48V32z"]},aS={prefix:"fas",iconName:"users",icon:[640,512,[],"f0c0","M144 160c-44.2 0-80-35.8-80-80S99.8 0 144 0s80 35.8 80 80s-35.8 80-80 80zm368 0c-44.2 0-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80s-35.8 80-80 80zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM416 224c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"]},lS={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]},ys={prefix:"fas",iconName:"handshake",icon:[640,512,[],"f2b5","M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L512 316.8V128h-.7l-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48V352h28.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123zM96 128H0V352c0 17.7 14.3 32 32 32H64c17.7 0 32-14.3 32-32V128zM48 352c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16zM544 128V352c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V128H544zm64 208c0 8.8-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16z"]},ws={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.7 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]},uS={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},Hp=uS,Vp={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]},cS={prefix:"fas",iconName:"earth-europe",icon:[512,512,["globe-europe"],"f7a2","M266.3 48.3L232.5 73.6c-5.4 4-8.5 10.4-8.5 17.1v9.1c0 6.8 5.5 12.3 12.3 12.3c2.4 0 4.8-.7 6.8-2.1l41.8-27.9c2-1.3 4.4-2.1 6.8-2.1h1c6.2 0 11.3 5.1 11.3 11.3c0 3-1.2 5.9-3.3 8l-19.9 19.9c-5.8 5.8-12.9 10.2-20.7 12.8l-26.5 8.8c-5.8 1.9-9.6 7.3-9.6 13.4c0 3.7-1.5 7.3-4.1 10l-17.9 17.9c-6.4 6.4-9.9 15-9.9 24v4.3c0 16.4 13.6 29.7 29.9 29.7c11 0 21.2-6.2 26.1-16l4-8.1c2.4-4.8 7.4-7.9 12.8-7.9c4.5 0 8.7 2.1 11.4 5.7l16.3 21.7c2.1 2.9 5.5 4.5 9.1 4.5c8.4 0 13.9-8.9 10.1-16.4l-1.1-2.3c-3.5-7 0-15.5 7.5-18l21.2-7.1c7.6-2.5 12.7-9.6 12.7-17.6c0-10.3 8.3-18.6 18.6-18.6H400c8.8 0 16 7.2 16 16s-7.2 16-16 16H379.3c-7.2 0-14.2 2.9-19.3 8l-4.7 4.7c-2.1 2.1-3.3 5-3.3 8c0 6.2 5.1 11.3 11.3 11.3h11.3c6 0 11.8 2.4 16 6.6l6.5 6.5c1.8 1.8 2.8 4.3 2.8 6.8s-1 5-2.8 6.8l-7.5 7.5C386 262 384 266.9 384 272s2 10 5.7 13.7L408 304c10.2 10.2 24.1 16 38.6 16H454c6.5-20.2 10-41.7 10-64c0-111.4-87.6-202.4-197.7-207.7zm172 307.9c-3.7-2.6-8.2-4.1-13-4.1c-6 0-11.8-2.4-16-6.6L396 332c-7.7-7.7-18-12-28.9-12c-9.7 0-19.2-3.5-26.6-9.8L314 287.4c-11.6-9.9-26.4-15.4-41.6-15.4H251.4c-12.6 0-25 3.7-35.5 10.7L188.5 301c-17.8 11.9-28.5 31.9-28.5 53.3v3.2c0 17 6.7 33.3 18.7 45.3l16 16c8.5 8.5 20 13.3 32 13.3H248c13.3 0 24 10.7 24 24c0 2.5 .4 5 1.1 7.3c71.3-5.8 132.5-47.6 165.2-107.2zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM187.3 100.7c-6.2-6.2-16.4-6.2-22.6 0l-32 32c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l32-32c6.2-6.2 6.2-16.4 0-22.6z"]},fS=cS,dS={prefix:"fas",iconName:"dollar-sign",icon:[320,512,[128178,61781,"dollar","usd"],"24","M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c10.6 1.6 42.1 6.7 55.1 10c17.1 4.3 27.5 21.7 23.2 38.9s-21.7 27.5-38.9 23.2c-9.3-2.4-37.6-7-48.9-8.7c-32.1-4.8-59.6-2.4-78.5 4.9c-18.3 7-25.9 16.9-27.9 28c-1.9 10.7-.5 16.8 1.3 20.6c1.9 4 5.6 8.5 12.9 13.4c16.2 10.8 41.1 17.9 73.3 26.7l2.8 .8c28.4 7.7 63.2 17.2 89 34.3c14.1 9.4 27.3 22.1 35.5 39.7c8.3 17.8 10.1 37.8 6.3 59.1c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.2-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.4 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.7 .5-16.8-1.3-20.6c-1.9-4-5.6-8.5-12.9-13.4c-16.2-10.8-41.1-17.9-73.3-26.7l-2.8-.8c-28.4-7.7-63.2-17.2-89-34.3c-14.1-9.4-27.3-22.1-35.5-39.7c-8.3-17.8-10.1-37.8-6.3-59.1C25 114.1 53 89.3 86 76.7c13-5 27.2-8.2 42-10V32c0-17.7 14.3-32 32-32z"]},ar=dS;const hS=e=>{const{cardsData:t}=e;let[n,r]=I.useState(t);return A("div",{className:"col-span-1 p-8 flex flex-col justify-center items-center text-center card-bg border-[6px] border-y-0 rounded-md "+n.bordercolor,children:[_("img",{src:n.image}),A("h1",{className:"text-2xl text-gray-400 font-light py-4",children:[n.heading,_("br",{}),"Daddy"]}),_("p",{className:"text-sm text-gray-400 font-light",children:n.shortDescription}),A("p",{className:"text-base font-light pt-2 "+n.textcolor,children:["$",n.price]}),_("p",{className:"text-sm text-gray-400 font-light text-justify py-4",children:n.description}),A("a",{href:n.skype,className:"text-white flex flex-col justify-center items-center",children:[_(z,{icon:oS}),_("h1",{className:"text-sm font-bold",children:"SKYPE"}),_("p",{className:"text-ellipsis w-1/2 overflow-hidden",children:n.skype})]}),A("button",{type:"button",className:"text-white mt-4 p-2 w-full "+n.bgcolor,children:[_(z,{icon:sS}),A("h1",{className:"drop-shadow-2xl shadow-black",children:["REPORT",_("br",{}),"DADDY"]})]})]})},pS=()=>{let[e,t]=I.useState(QT);return _(wo,{children:A("div",{className:"w-full flex flex-col justify-center items-center pb-96 px-80",children:[_("h1",{className:"text-white text-4xl font-semibold mb-4",children:"Featured Sugar Daddies"}),_("div",{className:"grid grid-cols-3 px-6 gap-2",children:e.map((n,r)=>_(hS,{cardsData:n},r))})]})})},mS="/assets/logo-1d63a908.png",gS=()=>A(wo,{children:[_("nav",{className:"py-4 w-full flex justify-center",children:_("img",{src:mS,className:"w-16"})}),A("nav",{className:"navbar navbar-expand-lg py-2 relative flex items-center justify-center",children:[_("div",{className:"flex items-center justify-center",children:A("div",{className:"inline-flex shadow-md hover:shadow-lg focus:shadow-lg",role:"group",children:[A(xe,{to:"#","aria-current":"page",className:"flex flex-col justify-center text-center gap-2 rounded-l px-3 py-2.5 bg-primary-1 text-primary-3 font-semibold text-[75%] leading-loose hover:bg-primary-2 transition duration-150 ease-in-out",children:[_(z,{icon:lS,className:"text-lg"}),"Featured",_("br",{}),"Daddies"]}),A(xe,{to:"#",className:"flex flex-col justify-center text-center gap-2 px-3 py-3.5 border-y border-primary-1 text-primary-1 hover:text-primary-3 font-semibold text-[75%] leading-loose hover:bg-primary-1 transition duration-150 ease-in-out",children:[_(z,{icon:fS,className:"text-lg"}),"Find",_("br",{}),"Daddies"]}),A(xe,{to:"#",className:"flex flex-col justify-center text-center gap-2 rounded-r px-3 py-2.5 border border-primary-1 text-primary-1 hover:text-primary-3 font-semibold text-[75%] leading-loose hover:bg-primary-1 transition duration-150 ease-in-out",children:[_(z,{icon:aS,className:"text-lg"}),"Become a",_("br",{}),"Sugar Daddy"]})]})}),A("div",{className:"flex flex-wrap items-center justify-between",children:[_("div",{className:"flex items-center",children:_("button",{className:"border border-white navbar-toggler py-3 px-4 rounded lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContentY","aria-controls":"navbarSupportedContentY","aria-expanded":"false","aria-label":"Toggle navigation",children:_("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas",className:"w-5",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:_("path",{fill:"currentColor",d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"})})})}),_("div",{className:"navbar-collapse collapse grow items-center lg:block hidden",id:"navbarSupportedContentY",children:A("ul",{className:"navbar-nav mx-auto lg:flex flex-col",children:[_("li",{className:"nav-item",children:A("a",{href:"/how-to-find-a-sugar-daddy-in-china/",className:"flex flex-col items-center",children:[_(z,{icon:Hp,className:"text-white"}),_("h1",{className:"dropdown-toggle px-4 py-1 text-white font-medium text-base transition duration-150 ease-in-out flex items-center whitespace-nowrap",type:"button",children:"Home"})]})}),A("li",{className:"nav-item flex flex-col items-center group",children:[_(z,{icon:ar,className:"text-gray-400 group-hover:text-gray-200 transition duration-150 ease-in-out"}),A("div",{className:"dropdown relative",children:[A("button",{className:"dropdown-toggle px-4 py-1 text-gray-400 group-hover:text-gray-200 font-medium text-base transition duration-150 ease-in-out flex items-center whitespace-nowrap",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false",children:["Pricing Plan",_("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"caret-down",className:"w-2 ml-2",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:_("path",{fill:"currentColor",d:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"})})]}),A("ul",{className:"dropdown-menu min-w-max absolute bg-primary-5 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 hidden m-0 bg-clip-padding border-none","aria-labelledby":"dropdownMenuButton1",children:[_("li",{children:A(xe,{to:"#",className:"flex items-center gap-1 dropdown-item text-base py-1 px-6 font-normal w-full whitespace-nowrap text-white hover:bg-primary-4 transition duration-150 ease-in-out",children:[_(z,{icon:ar}),"Lifetime Plan"]})}),_("li",{children:A(xe,{to:"#",className:"flex items-center gap-1 dropdown-item text-base py-1 px-6 font-normal w-full whitespace-nowrap text-white hover:bg-primary-4 transition duration-150 ease-in-out",children:[_(z,{icon:ar}),"Featured Plan"]})})]})]})]}),A("li",{className:"nav-item flex flex-col items-center group",children:[_(z,{icon:gs,className:"text-gray-400 group-hover:text-gray-200 transition duration-150 ease-in-out"}),A("div",{className:"dropdown relative",children:[A("button",{className:"dropdown-toggle px-4 py-1 text-gray-400 group-hover:text-gray-200 font-medium text-base transition duration-150 ease-in-out flex items-center whitespace-nowrap",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false",children:["Follow Us",_("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"caret-down",className:"w-2 ml-2",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:_("path",{fill:"currentColor",d:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"})})]}),_("ul",{className:"dropdown-menu min-w-max absolute bg-primary-5 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 hidden m-0 bg-clip-padding border-none","aria-labelledby":"dropdownMenuButton1",children:_("li",{children:A(xe,{to:"#",className:"flex items-center gap-1 dropdown-item text-base py-1 px-6 font-normal w-full whitespace-nowrap text-white hover:bg-primary-4 transition duration-150 ease-in-out",children:[_(z,{icon:gs}),"@#             "]})})})]})]}),A("li",{className:"nav-item flex flex-col items-center group",children:[_(z,{icon:ys,className:"text-gray-400 group-hover:text-gray-200 transition duration-150 ease-in-out"}),A("div",{className:"dropdown relative",children:[A("button",{className:"dropdown-toggle px-4 py-1 text-gray-400 group-hover:text-gray-200 font-medium text-base transition duration-150 ease-in-out flex items-center whitespace-nowrap",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false",children:["Partner",_("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"caret-down",className:"w-2 ml-2",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:_("path",{fill:"currentColor",d:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"})})]}),_("ul",{className:"dropdown-menu min-w-max absolute bg-primary-5 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 hidden m-0 bg-clip-padding border-none","aria-labelledby":"dropdownMenuButton1",children:_("li",{children:A(xe,{to:"#",className:"flex items-center gap-1 dropdown-item text-base py-1 px-6 font-normal w-full whitespace-nowrap text-white hover:bg-primary-4 transition duration-150 ease-in-out",children:[_(z,{icon:ys}),"PARTNER WITH US"]})})})]})]}),A("li",{className:"nav-item flex flex-col items-center group",children:[A("div",{className:"flex gap-1",children:[_(z,{icon:ws,className:"text-gray-400 group-hover:text-gray-200 transition duration-150 ease-in-out"}),_(z,{icon:Vp,className:"text-gray-400 group-hover:text-gray-200 transition duration-150 ease-in-out"}),_(z,{icon:vs,className:"text-gray-400 group-hover:text-gray-200 transition duration-150 ease-in-out"})]}),A("div",{className:"dropdown relative",children:[A("button",{className:"dropdown-toggle px-4 py-1 text-gray-400 group-hover:text-gray-200 font-medium text-base transition duration-150 ease-in-out flex items-center whitespace-nowrap",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false",children:["Privacy & Terms",_("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"caret-down",className:"w-2 ml-2",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:_("path",{fill:"currentColor",d:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"})})]}),A("ul",{className:"dropdown-menu min-w-max absolute bg-primary-5 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 hidden m-0 bg-clip-padding border-none","aria-labelledby":"dropdownMenuButton1",children:[_("li",{children:A(xe,{to:"#",className:"flex items-center gap-1 dropdown-item text-base py-1 px-6 font-normal w-full whitespace-nowrap text-white hover:bg-primary-4 transition duration-150 ease-in-out",children:[_(z,{icon:ws}),"Privacy Policy"]})}),_("li",{children:A(xe,{to:"#",className:"flex items-center gap-1 dropdown-item text-base py-1 px-6 font-normal w-full whitespace-nowrap text-white hover:bg-primary-4 transition duration-150 ease-in-out",children:[_(z,{icon:vs}),"Terms and Conditions"]})})]})]})]})]})})]})]}),_("div",{className:"navbar-collapse collapse grow items-center lg:hidden block",id:"navbarSupportedContentY",children:A("ul",{className:"navbar-nav mx-auto lg:flex flex-col",children:[_("li",{className:"nav-item my-4",children:A(xe,{to:"#",className:"flex flex-col items-center",children:[_(z,{icon:Hp,className:"text-white"}),_("div",{className:"dropdown relative",children:_("button",{className:"dropdown-toggle px-4 py-1 text-white font-medium text-base transition duration-150 ease-in-out flex items-center whitespace-nowrap",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Home"})})]})}),A("li",{className:"nav-item my-4 flex flex-col items-center group",children:[_(z,{icon:ar,className:"text-gray-400 group-hover:text-gray-200 transition duration-150 ease-in-out"}),A("div",{className:"dropdown relative",children:[A("button",{className:"dropdown-toggle px-4 py-1 text-gray-400 group-hover:text-gray-200 font-medium text-base transition duration-150 ease-in-out flex items-center whitespace-nowrap",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false",children:["Pricing Plan",_("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"caret-down",className:"w-2 ml-2",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:_("path",{fill:"currentColor",d:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"})})]}),A("ul",{className:"dropdown-menu min-w-max absolute bg-primary-5 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 hidden m-0 bg-clip-padding border-none","aria-labelledby":"dropdownMenuButton1",children:[_("li",{children:A(xe,{to:"#",className:"flex items-center gap-1 dropdown-item text-base py-1 px-6 font-normal w-full whitespace-nowrap text-white hover:bg-primary-4 transition duration-150 ease-in-out",children:[_(z,{icon:ar}),"Lifetime Plan"]})}),_("li",{children:A(xe,{to:"#",className:"flex items-center gap-1 dropdown-item text-base py-1 px-6 font-normal w-full whitespace-nowrap text-white hover:bg-primary-4 transition duration-150 ease-in-out",children:[_(z,{icon:ar}),"Featured Plan"]})})]})]})]}),A("li",{className:"nav-item my-4 flex flex-col items-center group",children:[_(z,{icon:gs,className:"text-gray-400 group-hover:text-gray-200 transition duration-150 ease-in-out"}),A("div",{className:"dropdown relative",children:[A("button",{className:"dropdown-toggle px-4 py-1 text-gray-400 group-hover:text-gray-200 font-medium text-base transition duration-150 ease-in-out flex items-center whitespace-nowrap",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false",children:["Follow Us",_("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"caret-down",className:"w-2 ml-2",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:_("path",{fill:"currentColor",d:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"})})]}),_("ul",{className:"dropdown-menu min-w-max absolute bg-primary-5 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 hidden m-0 bg-clip-padding border-none","aria-labelledby":"dropdownMenuButton1",children:_("li",{children:A(xe,{to:"#",className:"flex items-center gap-1 dropdown-item text-base py-1 px-6 font-normal w-full whitespace-nowrap text-white hover:bg-primary-4 transition duration-150 ease-in-out",children:[_(z,{icon:gs}),"@#             "]})})})]})]}),A("li",{className:"nav-item my-4 flex flex-col items-center group",children:[_(z,{icon:ys,className:"text-gray-400 group-hover:text-gray-200 transition duration-150 ease-in-out"}),A("div",{className:"dropdown relative",children:[A("button",{className:"dropdown-toggle px-4 py-1 text-gray-400 group-hover:text-gray-200 font-medium text-base transition duration-150 ease-in-out flex items-center whitespace-nowrap",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false",children:["Partner",_("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"caret-down",className:"w-2 ml-2",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:_("path",{fill:"currentColor",d:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"})})]}),_("ul",{className:"dropdown-menu min-w-max absolute bg-primary-5 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 hidden m-0 bg-clip-padding border-none","aria-labelledby":"dropdownMenuButton1",children:_("li",{children:A(xe,{to:"#",className:"flex items-center gap-1 dropdown-item text-base py-1 px-6 font-normal w-full whitespace-nowrap text-white hover:bg-primary-4 transition duration-150 ease-in-out",children:[_(z,{icon:ys}),"PARTNER WITH US"]})})})]})]}),A("li",{className:"nav-item my-4 flex flex-col items-center group",children:[A("div",{className:"flex gap-1",children:[_(z,{icon:ws,className:"text-gray-400 group-hover:text-gray-200 transition duration-150 ease-in-out"}),_(z,{icon:Vp,className:"text-gray-400 group-hover:text-gray-200 transition duration-150 ease-in-out"}),_(z,{icon:vs,className:"text-gray-400 group-hover:text-gray-200 transition duration-150 ease-in-out"})]}),A("div",{className:"dropdown relative",children:[A("button",{className:"dropdown-toggle px-4 py-1 text-gray-400 group-hover:text-gray-200 font-medium text-base transition duration-150 ease-in-out flex items-center whitespace-nowrap",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false",children:["Privacy & Terms",_("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"caret-down",className:"w-2 ml-2",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:_("path",{fill:"currentColor",d:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"})})]}),A("ul",{className:"dropdown-menu min-w-max absolute bg-primary-5 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 hidden m-0 bg-clip-padding border-none","aria-labelledby":"dropdownMenuButton1",children:[_("li",{children:A(xe,{to:"#",className:"flex items-center gap-1 dropdown-item text-base py-1 px-6 font-normal w-full whitespace-nowrap text-white hover:bg-primary-4 transition duration-150 ease-in-out",children:[_(z,{icon:ws}),"Privacy Policy"]})}),_("li",{children:A(xe,{to:"#",className:"flex items-center gap-1 dropdown-item text-base py-1 px-6 font-normal w-full whitespace-nowrap text-white hover:bg-primary-4 transition duration-150 ease-in-out",children:[_(z,{icon:vs}),"Terms and Conditions"]})})]})]})]})]})}),_(ak,{})]});/**
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
 */const A1=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},vS=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},R1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=o>>2,f=(o&3)<<4|a>>4;let h=(a&15)<<2|u>>6,g=u&63;l||(g=64,s||(h=64)),r.push(n[c],n[f],n[h],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(A1(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):vS(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||f==null)throw Error();const h=o<<2|a>>4;if(r.push(h),u!==64){const g=a<<4&240|u>>2;if(r.push(g),f!==64){const v=u<<6&192|f;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},yS=function(e){const t=A1(e);return R1.encodeByteArray(t,!0)},wa=function(e){return yS(e).replace(/\./g,"")},O1=function(e){try{return R1.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Ne(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ne())}function _S(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function kS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ES(){const e=Ne();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function SS(){try{return typeof indexedDB=="object"}catch{return!1}}function xS(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function IS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const bS=()=>IS().__FIREBASE_DEFAULTS__,TS=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},CS=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&O1(e[1]);return t&&JSON.parse(t)},fd=()=>{try{return bS()||TS()||CS()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},L1=e=>{var t,n;return(n=(t=fd())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},D1=e=>{const t=L1(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},PS=()=>{var e;return(e=fd())===null||e===void 0?void 0:e.config},M1=e=>{var t;return(t=fd())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class NS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function $1(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[wa(JSON.stringify(n)),wa(JSON.stringify(s)),a].join(".")}/**
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
 */const AS="FirebaseError";class bt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=AS,Object.setPrototypeOf(this,bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Co.prototype.create)}}class Co{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?RS(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new bt(i,a,r)}}function RS(e,t){return e.replace(OS,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const OS=/\{\$([^}]+)}/g;function LS(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function _a(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(Wp(o)&&Wp(s)){if(!_a(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Wp(e){return e!==null&&typeof e=="object"}/**
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
 */function Po(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function _i(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function ki(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function DS(e,t){const n=new MS(e,t);return n.subscribe.bind(n)}class MS{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");$S(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=lu),i.error===void 0&&(i.error=lu),i.complete===void 0&&(i.complete=lu);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $S(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function lu(){}/**
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
 */function Qe(e){return e&&e._delegate?e._delegate:e}class In{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Dn="[DEFAULT]";/**
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
 */class US{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new NS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(jS(t))try{this.getOrInitializeService({instanceIdentifier:Dn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Dn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Dn){return this.instances.has(t)}getOptions(t=Dn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:FS(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Dn){return this.component?this.component.multipleInstances?t:Dn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function FS(e){return e===Dn?void 0:e}function jS(e){return e.instantiationMode==="EAGER"}/**
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
 */class zS{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new US(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var W;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(W||(W={}));const BS={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},HS=W.INFO,VS={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},WS=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=VS[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class dd{constructor(t){this.name=t,this._logLevel=HS,this._logHandler=WS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in W))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?BS[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...t),this._logHandler(this,W.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...t),this._logHandler(this,W.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,W.INFO,...t),this._logHandler(this,W.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,W.WARN,...t),this._logHandler(this,W.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...t),this._logHandler(this,W.ERROR,...t)}}const GS=(e,t)=>t.some(n=>e instanceof n);let Gp,Kp;function KS(){return Gp||(Gp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function YS(){return Kp||(Kp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const U1=new WeakMap,Uc=new WeakMap,F1=new WeakMap,uu=new WeakMap,hd=new WeakMap;function XS(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(yn(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&U1.set(n,e)}).catch(()=>{}),hd.set(t,e),t}function qS(e){if(Uc.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});Uc.set(e,t)}let Fc={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Uc.get(e);if(t==="objectStoreNames")return e.objectStoreNames||F1.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function QS(e){Fc=e(Fc)}function JS(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(cu(this),t,...n);return F1.set(r,t.sort?t.sort():[t]),yn(r)}:YS().includes(e)?function(...t){return e.apply(cu(this),t),yn(U1.get(this))}:function(...t){return yn(e.apply(cu(this),t))}}function ZS(e){return typeof e=="function"?JS(e):(e instanceof IDBTransaction&&qS(e),GS(e,KS())?new Proxy(e,Fc):e)}function yn(e){if(e instanceof IDBRequest)return XS(e);if(uu.has(e))return uu.get(e);const t=ZS(e);return t!==e&&(uu.set(e,t),hd.set(t,e)),t}const cu=e=>hd.get(e);function ex(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=yn(s);return r&&s.addEventListener("upgradeneeded",l=>{r(yn(s.result),l.oldVersion,l.newVersion,yn(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const tx=["get","getKey","getAll","getAllKeys","count"],nx=["put","add","delete","clear"],fu=new Map;function Yp(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(fu.get(t))return fu.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=nx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||tx.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return fu.set(t,o),o}QS(e=>({...e,get:(t,n,r)=>Yp(t,n)||e.get(t,n,r),has:(t,n)=>!!Yp(t,n)||e.has(t,n)}));/**
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
 */class rx{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ix(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ix(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const jc="@firebase/app",Xp="0.9.0";/**
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
 */const er=new dd("@firebase/app"),ox="@firebase/app-compat",sx="@firebase/analytics-compat",ax="@firebase/analytics",lx="@firebase/app-check-compat",ux="@firebase/app-check",cx="@firebase/auth",fx="@firebase/auth-compat",dx="@firebase/database",hx="@firebase/database-compat",px="@firebase/functions",mx="@firebase/functions-compat",gx="@firebase/installations",vx="@firebase/installations-compat",yx="@firebase/messaging",wx="@firebase/messaging-compat",_x="@firebase/performance",kx="@firebase/performance-compat",Ex="@firebase/remote-config",Sx="@firebase/remote-config-compat",xx="@firebase/storage",Ix="@firebase/storage-compat",bx="@firebase/firestore",Tx="@firebase/firestore-compat",Cx="firebase",Px="9.15.0";/**
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
 */const zc="[DEFAULT]",Nx={[jc]:"fire-core",[ox]:"fire-core-compat",[ax]:"fire-analytics",[sx]:"fire-analytics-compat",[ux]:"fire-app-check",[lx]:"fire-app-check-compat",[cx]:"fire-auth",[fx]:"fire-auth-compat",[dx]:"fire-rtdb",[hx]:"fire-rtdb-compat",[px]:"fire-fn",[mx]:"fire-fn-compat",[gx]:"fire-iid",[vx]:"fire-iid-compat",[yx]:"fire-fcm",[wx]:"fire-fcm-compat",[_x]:"fire-perf",[kx]:"fire-perf-compat",[Ex]:"fire-rc",[Sx]:"fire-rc-compat",[xx]:"fire-gcs",[Ix]:"fire-gcs-compat",[bx]:"fire-fst",[Tx]:"fire-fst-compat","fire-js":"fire-js",[Cx]:"fire-js-all"};/**
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
 */const ka=new Map,Bc=new Map;function Ax(e,t){try{e.container.addComponent(t)}catch(n){er.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function tr(e){const t=e.name;if(Bc.has(t))return er.debug(`There were multiple attempts to register component ${t}.`),!1;Bc.set(t,e);for(const n of ka.values())Ax(n,e);return!0}function sl(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Rx={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},wn=new Co("app","Firebase",Rx);/**
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
 */class Ox{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new In("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw wn.create("app-deleted",{appName:this._name})}}/**
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
 */const Qr=Px;function j1(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:zc,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw wn.create("bad-app-name",{appName:String(i)});if(n||(n=PS()),!n)throw wn.create("no-options");const o=ka.get(i);if(o){if(_a(n,o.options)&&_a(r,o.config))return o;throw wn.create("duplicate-app",{appName:i})}const s=new zS(i);for(const l of Bc.values())s.addComponent(l);const a=new Ox(n,r,s);return ka.set(i,a),a}function pd(e=zc){const t=ka.get(e);if(!t&&e===zc)return j1();if(!t)throw wn.create("no-app",{appName:e});return t}function St(e,t,n){var r;let i=(r=Nx[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),er.warn(a.join(" "));return}tr(new In(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Lx="firebase-heartbeat-database",Dx=1,ao="firebase-heartbeat-store";let du=null;function z1(){return du||(du=ex(Lx,Dx,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ao)}}}).catch(e=>{throw wn.create("idb-open",{originalErrorMessage:e.message})})),du}async function Mx(e){try{return(await z1()).transaction(ao).objectStore(ao).get(B1(e))}catch(t){if(t instanceof bt)er.warn(t.message);else{const n=wn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});er.warn(n.message)}}}async function qp(e,t){try{const r=(await z1()).transaction(ao,"readwrite");return await r.objectStore(ao).put(t,B1(e)),r.done}catch(n){if(n instanceof bt)er.warn(n.message);else{const r=wn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});er.warn(r.message)}}}function B1(e){return`${e.name}!${e.options.appId}`}/**
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
 */const $x=1024,Ux=30*24*60*60*1e3;class Fx{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new zx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Qp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=Ux}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Qp(),{heartbeatsToSend:n,unsentEntries:r}=jx(this._heartbeatsCache.heartbeats),i=wa(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Qp(){return new Date().toISOString().substring(0,10)}function jx(e,t=$x){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Jp(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Jp(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class zx{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return SS()?xS().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Mx(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return qp(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return qp(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Jp(e){return wa(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Bx(e){tr(new In("platform-logger",t=>new rx(t),"PRIVATE")),tr(new In("heartbeat",t=>new Fx(t),"PRIVATE")),St(jc,Xp,e),St(jc,Xp,"esm2017"),St("fire-js","")}Bx("");function md(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function H1(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Hx=H1,V1=new Co("auth","Firebase",H1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp=new dd("@firebase/auth");function Fs(e,...t){Zp.logLevel<=W.ERROR&&Zp.error(`Auth (${Qr}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(e,...t){throw gd(e,...t)}function xt(e,...t){return gd(e,...t)}function Vx(e,t,n){const r=Object.assign(Object.assign({},Hx()),{[t]:n});return new Co("auth","Firebase",r).create(t,{appName:e.name})}function gd(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return V1.create(e,...t)}function L(e,t,...n){if(!e)throw gd(t,...n)}function Rt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Fs(t),new Error(t)}function Ht(e,t){e||Rt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em=new Map;function Ot(e){Ht(e instanceof Function,"Expected a class definition");let t=em.get(e);return t?(Ht(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,em.set(e,t),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wx(e,t){const n=sl(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(_a(o,t??{}))return i;mt(i,"already-initialized")}return n.initialize({options:t})}function Gx(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ot);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Kx(){return tm()==="http:"||tm()==="https:"}function tm(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Kx()||_S()||"connection"in navigator)?navigator.onLine:!0}function Xx(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(t,n){this.shortDelay=t,this.longDelay=n,Ht(n>t,"Short delay should be less than long delay!"),this.isMobile=wS()||kS()}get(){return Yx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(e,t){Ht(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qx=new No(3e4,6e4);function Jr(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function or(e,t,n,r,i={}){return G1(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=Po(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),W1.fetch()(K1(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function G1(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},qx),t);try{const i=new Jx(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw _s(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw _s(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw _s(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw _s(e,"user-disabled",s);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Vx(e,c,u);mt(e,c)}}catch(i){if(i instanceof bt)throw i;mt(e,"network-request-failed")}}async function al(e,t,n,r,i={}){const o=await or(e,t,n,r,i);return"mfaPendingCredential"in o&&mt(e,"multi-factor-auth-required",{_serverResponse:o}),o}function K1(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?vd(e.config,i):`${e.config.apiScheme}://${i}`}class Jx{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(xt(this.auth,"network-request-failed")),Qx.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _s(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=xt(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zx(e,t){return or(e,"POST","/v1/accounts:delete",t)}async function e3(e,t){return or(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function t3(e,t=!1){const n=Qe(e),r=await n.getIdToken(t),i=yd(r);L(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Di(hu(i.auth_time)),issuedAtTime:Di(hu(i.iat)),expirationTime:Di(hu(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function hu(e){return Number(e)*1e3}function yd(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Fs("JWT malformed, contained fewer than 3 sections"),null;try{const i=O1(n);return i?JSON.parse(i):(Fs("Failed to decode base64 JWT payload"),null)}catch(i){return Fs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function n3(e){const t=yd(e);return L(t,"internal-error"),L(typeof t.exp<"u","internal-error"),L(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lo(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof bt&&r3(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function r3({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i3{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Di(this.lastLoginAt),this.creationTime=Di(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ea(e){var t;const n=e.auth,r=await e.getIdToken(),i=await lo(e,e3(n,{idToken:r}));L(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?a3(o.providerUserInfo):[],a=s3(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Y1(o.createdAt,o.lastLoginAt),isAnonymous:c};Object.assign(e,f)}async function o3(e){const t=Qe(e);await Ea(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function s3(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function a3(e){return e.map(t=>{var{providerId:n}=t,r=md(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l3(e,t){const n=await G1(e,{},async()=>{const r=Po({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=K1(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",W1.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){L(t.idToken,"internal-error"),L(typeof t.idToken<"u","internal-error"),L(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):n3(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return L(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await l3(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new uo;return r&&(L(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(L(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new uo,this.toJSON())}_performRefresh(){return Rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(e,t){L(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Wn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=md(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new i3(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Y1(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await lo(this,this.stsTokenManager.getToken(this.auth,t));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return t3(this,t)}reload(){return o3(this)}_assign(t){this!==t&&(L(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new Wn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Ea(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await lo(this,Zx(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,v=(s=n.photoURL)!==null&&s!==void 0?s:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:w,isAnonymous:E,providerData:S,stsTokenManager:x}=n;L(m&&x,t,"internal-error");const N=uo.fromJSON(this.name,x);L(typeof m=="string",t,"internal-error"),Xt(f,t.name),Xt(h,t.name),L(typeof w=="boolean",t,"internal-error"),L(typeof E=="boolean",t,"internal-error"),Xt(g,t.name),Xt(v,t.name),Xt(y,t.name),Xt(b,t.name),Xt(p,t.name),Xt(d,t.name);const B=new Wn({uid:m,auth:t,email:h,emailVerified:w,displayName:f,isAnonymous:E,photoURL:v,phoneNumber:g,tenantId:y,stsTokenManager:N,createdAt:p,lastLoginAt:d});return S&&Array.isArray(S)&&(B.providerData=S.map($=>Object.assign({},$))),b&&(B._redirectEventId=b),B}static async _fromIdTokenResponse(t,n,r=!1){const i=new uo;i.updateFromServerResponse(n);const o=new Wn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Ea(o),o}}/**
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
 */class X1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}X1.type="NONE";const nm=X1;/**
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
 */function js(e,t,n){return`firebase:${e}:${t}:${n}`}class Rr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=js(this.userKey,i.apiKey,o),this.fullPersistenceKey=js("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Wn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Rr(Ot(nm),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Ot(nm);const s=js(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const c=await u._get(s);if(c){const f=Wn._fromJSON(t,c);u!==o&&(a=f),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Rr(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new Rr(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rm(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(J1(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(q1(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(e0(t))return"Blackberry";if(t0(t))return"Webos";if(wd(t))return"Safari";if((t.includes("chrome/")||Q1(t))&&!t.includes("edge/"))return"Chrome";if(Z1(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function q1(e=Ne()){return/firefox\//i.test(e)}function wd(e=Ne()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Q1(e=Ne()){return/crios\//i.test(e)}function J1(e=Ne()){return/iemobile/i.test(e)}function Z1(e=Ne()){return/android/i.test(e)}function e0(e=Ne()){return/blackberry/i.test(e)}function t0(e=Ne()){return/webos/i.test(e)}function ll(e=Ne()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function u3(e=Ne()){var t;return ll(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function c3(){return ES()&&document.documentMode===10}function n0(e=Ne()){return ll(e)||Z1(e)||t0(e)||e0(e)||/windows phone/i.test(e)||J1(e)}function f3(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r0(e,t=[]){let n;switch(e){case"Browser":n=rm(Ne());break;case"Worker":n=`${rm(Ne())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Qr}/${r}`}/**
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
 */class d3{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h3{constructor(t,n,r){this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new im(this),this.idTokenSubscription=new im(this),this.beforeStateQueue=new d3(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=V1,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Ot(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Rr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Ea(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Xx()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Qe(t):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&L(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ot(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Co("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Ot(t)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await Rr.create(this,[Ot(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return L(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=r0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function ul(e){return Qe(e)}class im{constructor(t){this.auth=t,this.observer=null,this.addObserver=DS(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function p3(e,t,n){const r=ul(e);L(r._canInitEmulator,r,"emulator-config-failed"),L(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=i0(t),{host:s,port:a}=m3(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||g3()}function i0(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function m3(e){const t=i0(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:om(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:om(s)}}}function om(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function g3(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Rt("not implemented")}_getIdTokenResponse(t){return Rt("not implemented")}_linkToIdToken(t,n){return Rt("not implemented")}_getReauthenticationResolver(t){return Rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v3(e,t){return or(e,"POST","/v1/accounts:resetPassword",Jr(e,t))}async function y3(e,t){return or(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w3(e,t){return al(e,"POST","/v1/accounts:signInWithPassword",Jr(e,t))}async function _3(e,t){return or(e,"POST","/v1/accounts:sendOobCode",Jr(e,t))}async function k3(e,t){return _3(e,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E3(e,t){return al(e,"POST","/v1/accounts:signInWithEmailLink",Jr(e,t))}async function S3(e,t){return al(e,"POST","/v1/accounts:signInWithEmailLink",Jr(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co extends _d{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new co(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new co(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return w3(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return E3(t,{email:this._email,oobCode:this._password});default:mt(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return y3(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return S3(t,{idToken:n,email:this._email,oobCode:this._password});default:mt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Or(e,t){return al(e,"POST","/v1/accounts:signInWithIdp",Jr(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x3="http://localhost";class nr extends _d{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new nr(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):mt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=md(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new nr(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return Or(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Or(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Or(t,n)}buildRequest(){const t={requestUri:x3,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Po(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I3(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function b3(e){const t=_i(ki(e)).link,n=t?_i(ki(t)).deep_link_id:null,r=_i(ki(e)).deep_link_id;return(r?_i(ki(r)).link:null)||r||n||t||e}class kd{constructor(t){var n,r,i,o,s,a;const l=_i(ki(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,f=I3((i=l.mode)!==null&&i!==void 0?i:null);L(u&&c&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=c,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=b3(t);try{return new kd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(){this.providerId=Zr.PROVIDER_ID}static credential(t,n){return co._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=kd.parseLink(n);return L(r,"argument-error"),co._fromEmailAndCode(t,r.code,r.tenantId)}}Zr.PROVIDER_ID="password";Zr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ao extends o0{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends Ao{constructor(){super("facebook.com")}static credential(t){return nr._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return en.credentialFromTaggedObject(t)}static credentialFromError(t){return en.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return en.credential(t.oauthAccessToken)}catch{return null}}}en.FACEBOOK_SIGN_IN_METHOD="facebook.com";en.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends Ao{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return nr._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return tn.credentialFromTaggedObject(t)}static credentialFromError(t){return tn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return tn.credential(n,r)}catch{return null}}}tn.GOOGLE_SIGN_IN_METHOD="google.com";tn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends Ao{constructor(){super("github.com")}static credential(t){return nr._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return nn.credentialFromTaggedObject(t)}static credentialFromError(t){return nn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return nn.credential(t.oauthAccessToken)}catch{return null}}}nn.GITHUB_SIGN_IN_METHOD="github.com";nn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends Ao{constructor(){super("twitter.com")}static credential(t,n){return nr._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return rn.credentialFromTaggedObject(t)}static credentialFromError(t){return rn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return rn.credential(n,r)}catch{return null}}}rn.TWITTER_SIGN_IN_METHOD="twitter.com";rn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await Wn._fromIdTokenResponse(t,r,i),s=sm(r);return new Hr({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=sm(r);return new Hr({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function sm(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa extends bt{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Sa.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Sa(t,n,r,i)}}function s0(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Sa._fromErrorAndOperation(e,o,t,r):o})}async function T3(e,t,n=!1){const r=await lo(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Hr._forOperation(e,"link",r)}/**
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
 */async function C3(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await lo(e,s0(r,i,t,e),n);L(o.idToken,r,"internal-error");const s=yd(o.idToken);L(s,r,"internal-error");const{sub:a}=s;return L(e.uid===a,r,"user-mismatch"),Hr._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&mt(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a0(e,t,n=!1){const r="signIn",i=await s0(e,r,t),o=await Hr._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function P3(e,t){return a0(ul(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N3(e,t,n){var r;L(((r=n.url)===null||r===void 0?void 0:r.length)>0,e,"invalid-continue-uri"),L(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(L(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(L(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A3(e,t,n){const r=Qe(e),i={requestType:"PASSWORD_RESET",email:t};n&&N3(r,i,n),await k3(r,i)}async function R3(e,t,n){await v3(Qe(e),{oobCode:t,newPassword:n})}function O3(e,t,n){return P3(Qe(e),Zr.credential(t,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L3(e,t){return Qe(e).setPersistence(t)}function D3(e,t,n,r){return Qe(e).onIdTokenChanged(t,n,r)}function M3(e,t,n){return Qe(e).beforeAuthStateChanged(t,n)}function $3(e,t,n,r){return Qe(e).onAuthStateChanged(t,n,r)}function U3(e){return Qe(e).signOut()}const xa="__sak";/**
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
 */class l0{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(xa,"1"),this.storage.removeItem(xa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F3(){const e=Ne();return wd(e)||ll(e)}const j3=1e3,z3=10;class u0 extends l0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=F3()&&f3(),this.fallbackToPolling=n0(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);c3()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,z3):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},j3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}u0.type="LOCAL";const c0=u0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0 extends l0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}f0.type="SESSION";const d0=f0;/**
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
 */function B3(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class cl{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new cl(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await B3(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}cl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class H3{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=Ed("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(f){const h=f;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(h.data.response);break;default:clearTimeout(c),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(){return window}function V3(e){It().location.href=e}/**
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
 */function h0(){return typeof It().WorkerGlobalScope<"u"&&typeof It().importScripts=="function"}async function W3(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function G3(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function K3(){return h0()?self:null}/**
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
 */const p0="firebaseLocalStorageDb",Y3=1,Ia="firebaseLocalStorage",m0="fbase_key";class Ro{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function fl(e,t){return e.transaction([Ia],t?"readwrite":"readonly").objectStore(Ia)}function X3(){const e=indexedDB.deleteDatabase(p0);return new Ro(e).toPromise()}function Vc(){const e=indexedDB.open(p0,Y3);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Ia,{keyPath:m0})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Ia)?t(r):(r.close(),await X3(),t(await Vc()))})})}async function am(e,t,n){const r=fl(e,!0).put({[m0]:t,value:n});return new Ro(r).toPromise()}async function q3(e,t){const n=fl(e,!1).get(t),r=await new Ro(n).toPromise();return r===void 0?null:r.value}function lm(e,t){const n=fl(e,!0).delete(t);return new Ro(n).toPromise()}const Q3=800,J3=3;class g0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vc(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>J3)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return h0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cl._getInstance(K3()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await W3(),!this.activeServiceWorker)return;this.sender=new H3(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||G3()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Vc();return await am(t,xa,"1"),await lm(t,xa),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>am(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>q3(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>lm(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=fl(i,!1).getAll();return new Ro(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Q3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}g0.type="LOCAL";const Z3=g0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eI(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function tI(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=xt("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",eI().appendChild(r)})}function nI(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new No(3e4,6e4);/**
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
 */function rI(e,t){return t?Ot(t):(L(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Sd extends _d{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Or(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Or(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Or(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function iI(e){return a0(e.auth,new Sd(e),e.bypassAuthState)}function oI(e){const{auth:t,user:n}=e;return L(n,t,"internal-error"),C3(n,new Sd(e),e.bypassAuthState)}async function sI(e){const{auth:t,user:n}=e;return L(n,t,"internal-error"),T3(n,new Sd(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return iI;case"linkViaPopup":case"linkViaRedirect":return sI;case"reauthViaPopup":case"reauthViaRedirect":return oI;default:mt(this.auth,"internal-error")}}resolve(t){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI=new No(2e3,1e4);class Sr extends v0{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Sr.currentPopupAction&&Sr.currentPopupAction.cancel(),Sr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return L(t,this.auth,"internal-error"),t}async onExecution(){Ht(this.filter.length===1,"Popup operations only handle one event");const t=Ed();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Sr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,aI.get())};t()}}Sr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI="pendingRedirect",zs=new Map;class uI extends v0{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=zs.get(this.auth._key());if(!t){try{const r=await cI(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}zs.set(this.auth._key(),t)}return this.bypassAuthState||zs.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cI(e,t){const n=hI(t),r=dI(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function fI(e,t){zs.set(e._key(),t)}function dI(e){return Ot(e._redirectPersistence)}function hI(e){return js(lI,e.config.apiKey,e.name)}async function pI(e,t,n=!1){const r=ul(e),i=rI(r,t),s=await new uI(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI=10*60*1e3;class gI{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!vI(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!y0(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(xt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=mI&&this.cachedEventUids.clear(),this.cachedEventUids.has(um(t))}saveEventToCache(t){this.cachedEventUids.add(um(t)),this.lastProcessedEventTime=Date.now()}}function um(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function y0({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function vI(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return y0(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yI(e,t={}){return or(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_I=/^https?/;async function kI(e){if(e.config.emulator)return;const{authorizedDomains:t}=await yI(e);for(const n of t)try{if(EI(n))return}catch{}mt(e,"unauthorized-domain")}function EI(e){const t=Hc(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!_I.test(n))return!1;if(wI.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const SI=new No(3e4,6e4);function cm(){const e=It().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function xI(e){return new Promise((t,n)=>{var r,i,o;function s(){cm(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{cm(),n(xt(e,"network-request-failed"))},timeout:SI.get()})}if(!((i=(r=It().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=It().gapi)===null||o===void 0)&&o.load)s();else{const a=nI("iframefcb");return It()[a]=()=>{gapi.load?s():n(xt(e,"network-request-failed"))},tI(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Bs=null,t})}let Bs=null;function II(e){return Bs=Bs||xI(e),Bs}/**
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
 */const bI=new No(5e3,15e3),TI="__/auth/iframe",CI="emulator/auth/iframe",PI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},NI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function AI(e){const t=e.config;L(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?vd(t,CI):`https://${e.config.authDomain}/${TI}`,r={apiKey:t.apiKey,appName:e.name,v:Qr},i=NI.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Po(r).slice(1)}`}async function RI(e){const t=await II(e),n=It().gapi;return L(n,e,"internal-error"),t.open({where:document.body,url:AI(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:PI,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=xt(e,"network-request-failed"),a=It().setTimeout(()=>{o(s)},bI.get());function l(){It().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
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
 */const OI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LI=500,DI=600,MI="_blank",$I="http://localhost";class fm{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function UI(e,t,n,r=LI,i=DI){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},OI),{width:r.toString(),height:i.toString(),top:o,left:s}),u=Ne().toLowerCase();n&&(a=Q1(u)?MI:n),q1(u)&&(t=t||$I,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[g,v])=>`${h}${g}=${v},`,"");if(u3(u)&&a!=="_self")return FI(t||"",a),new fm(null);const f=window.open(t||"",a,c);L(f,e,"popup-blocked");try{f.focus()}catch{}return new fm(f)}function FI(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const jI="__/auth/handler",zI="emulator/auth/handler";function dm(e,t,n,r,i,o){L(e.config.authDomain,e,"auth-domain-config-required"),L(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Qr,eventId:i};if(t instanceof o0){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",LS(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,u]of Object.entries(o||{}))s[l]=u}if(t instanceof Ao){const l=t.getScopes().filter(u=>u!=="");l.length>0&&(s.scopes=l.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${BI(e)}?${Po(a).slice(1)}`}function BI({config:e}){return e.emulator?vd(e,zI):`https://${e.authDomain}/${jI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu="webStorageSupport";class HI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=d0,this._completeRedirectFn=pI,this._overrideRedirectResult=fI}async _openPopup(t,n,r,i){var o;Ht((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=dm(t,n,r,Hc(),i);return UI(t,s,Ed())}async _openRedirect(t,n,r,i){return await this._originValidation(t),V3(dm(t,n,r,Hc(),i)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Ht(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await RI(t),r=new gI(t);return n.register("authEvent",i=>(L(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(pu,{type:pu},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[pu];s!==void 0&&n(!!s),mt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=kI(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return n0()||wd()||ll()}}const VI=HI;var hm="@firebase/auth",pm="0.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GI(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function KI(e){tr(new In("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((a,l)=>{L(o&&!o.includes(":"),"invalid-api-key",{appName:a.name}),L(!(s!=null&&s.includes(":")),"argument-error",{appName:a.name});const u={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:r0(e)},c=new h3(a,l,u);return Gx(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),tr(new In("auth-internal",t=>{const n=ul(t.getProvider("auth").getImmediate());return(r=>new WI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),St(hm,pm,GI(e)),St(hm,pm,"esm2017")}/**
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
 */const YI=5*60,XI=M1("authIdTokenMaxAge")||YI;let mm=null;const qI=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>XI)return;const i=n==null?void 0:n.token;mm!==i&&(mm=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function QI(e=pd()){const t=sl(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Wx(e,{popupRedirectResolver:VI,persistence:[Z3,c0,d0]}),r=M1("authTokenSyncURL");if(r){const o=qI(r);M3(n,o,()=>o(n.currentUser)),D3(n,s=>o(s))}const i=L1("auth");return i&&p3(n,`http://${i}`),n}KI("Browser");var JI="firebase",ZI="9.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */St(JI,ZI,"app");var eb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O,xd=xd||{},D=eb||self;function ba(){}function dl(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Oo(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function tb(e){return Object.prototype.hasOwnProperty.call(e,mu)&&e[mu]||(e[mu]=++nb)}var mu="closure_uid_"+(1e9*Math.random()>>>0),nb=0;function rb(e,t,n){return e.call.apply(e.bind,arguments)}function ib(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function Te(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Te=rb:Te=ib,Te.apply(null,arguments)}function ks(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function ke(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(r,i,o){for(var s=Array(arguments.length-2),a=2;a<arguments.length;a++)s[a-2]=arguments[a];return t.prototype[i].apply(r,s)}}function Pn(){this.s=this.s,this.o=this.o}var ob=0;Pn.prototype.s=!1;Pn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),ob!=0)&&tb(this)};Pn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const w0=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Id(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function gm(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(dl(r)){const i=e.length||0,o=r.length||0;e.length=i+o;for(let s=0;s<o;s++)e[i+s]=r[s]}else e.push(r)}}function Ce(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Ce.prototype.h=function(){this.defaultPrevented=!0};var sb=function(){if(!D.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{D.addEventListener("test",ba,t),D.removeEventListener("test",ba,t)}catch{}return e}();function Ta(e){return/^[\s\xa0]*$/.test(e)}var vm=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function gu(e,t){return e<t?-1:e>t?1:0}function hl(){var e=D.navigator;return e&&(e=e.userAgent)?e:""}function wt(e){return hl().indexOf(e)!=-1}function bd(e){return bd[" "](e),e}bd[" "]=ba;function ab(e){var t=cb;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var lb=wt("Opera"),fo=wt("Trident")||wt("MSIE"),_0=wt("Edge"),Wc=_0||fo,k0=wt("Gecko")&&!(hl().toLowerCase().indexOf("webkit")!=-1&&!wt("Edge"))&&!(wt("Trident")||wt("MSIE"))&&!wt("Edge"),ub=hl().toLowerCase().indexOf("webkit")!=-1&&!wt("Edge");function E0(){var e=D.document;return e?e.documentMode:void 0}var Gc;e:{var vu="",yu=function(){var e=hl();if(k0)return/rv:([^\);]+)(\)|;)/.exec(e);if(_0)return/Edge\/([\d\.]+)/.exec(e);if(fo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(ub)return/WebKit\/(\S+)/.exec(e);if(lb)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(yu&&(vu=yu?yu[1]:""),fo){var wu=E0();if(wu!=null&&wu>parseFloat(vu)){Gc=String(wu);break e}}Gc=vu}var cb={};function fb(){return ab(function(){let e=0;const t=vm(String(Gc)).split("."),n=vm("9").split("."),r=Math.max(t.length,n.length);for(let s=0;e==0&&s<r;s++){var i=t[s]||"",o=n[s]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],i[0].length==0&&o[0].length==0)break;e=gu(i[1].length==0?0:parseInt(i[1],10),o[1].length==0?0:parseInt(o[1],10))||gu(i[2].length==0,o[2].length==0)||gu(i[2],o[2]),i=i[3],o=o[3]}while(e==0)}return 0<=e})}D.document&&fo&&E0();function ho(e,t){if(Ce.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(k0){e:{try{bd(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:db[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ho.X.h.call(this)}}ke(ho,Ce);var db={2:"touch",3:"pen",4:"mouse"};ho.prototype.h=function(){ho.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Lo="closure_listenable_"+(1e6*Math.random()|0),hb=0;function pb(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++hb,this.ba=this.ea=!1}function pl(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Td(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function S0(e){const t={};for(const n in e)t[n]=e[n];return t}const ym="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x0(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let o=0;o<ym.length;o++)n=ym[o],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function ml(e){this.src=e,this.g={},this.h=0}ml.prototype.add=function(e,t,n,r,i){var o=e.toString();e=this.g[o],e||(e=this.g[o]=[],this.h++);var s=Yc(e,t,r,i);return-1<s?(t=e[s],n||(t.ea=!1)):(t=new pb(t,this.src,o,!!r,i),t.ea=n,e.push(t)),t};function Kc(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=w0(r,t),o;(o=0<=i)&&Array.prototype.splice.call(r,i,1),o&&(pl(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Yc(e,t,n,r){for(var i=0;i<e.length;++i){var o=e[i];if(!o.ba&&o.listener==t&&o.capture==!!n&&o.ha==r)return i}return-1}var Cd="closure_lm_"+(1e6*Math.random()|0),_u={};function I0(e,t,n,r,i){if(r&&r.once)return T0(e,t,n,r,i);if(Array.isArray(t)){for(var o=0;o<t.length;o++)I0(e,t[o],n,r,i);return null}return n=Ad(n),e&&e[Lo]?e.N(t,n,Oo(r)?!!r.capture:!!r,i):b0(e,t,n,!1,r,i)}function b0(e,t,n,r,i,o){if(!t)throw Error("Invalid event type");var s=Oo(i)?!!i.capture:!!i,a=Nd(e);if(a||(e[Cd]=a=new ml(e)),n=a.add(t,n,r,s,o),n.proxy)return n;if(r=mb(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)sb||(i=s),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(P0(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function mb(){function e(n){return t.call(e.src,e.listener,n)}const t=gb;return e}function T0(e,t,n,r,i){if(Array.isArray(t)){for(var o=0;o<t.length;o++)T0(e,t[o],n,r,i);return null}return n=Ad(n),e&&e[Lo]?e.O(t,n,Oo(r)?!!r.capture:!!r,i):b0(e,t,n,!0,r,i)}function C0(e,t,n,r,i){if(Array.isArray(t))for(var o=0;o<t.length;o++)C0(e,t[o],n,r,i);else r=Oo(r)?!!r.capture:!!r,n=Ad(n),e&&e[Lo]?(e=e.i,t=String(t).toString(),t in e.g&&(o=e.g[t],n=Yc(o,n,r,i),-1<n&&(pl(o[n]),Array.prototype.splice.call(o,n,1),o.length==0&&(delete e.g[t],e.h--)))):e&&(e=Nd(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Yc(t,n,r,i)),(n=-1<e?t[e]:null)&&Pd(n))}function Pd(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[Lo])Kc(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(P0(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Nd(t))?(Kc(n,e),n.h==0&&(n.src=null,t[Cd]=null)):pl(e)}}}function P0(e){return e in _u?_u[e]:_u[e]="on"+e}function gb(e,t){if(e.ba)e=!0;else{t=new ho(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&Pd(e),e=n.call(r,t)}return e}function Nd(e){return e=e[Cd],e instanceof ml?e:null}var ku="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ad(e){return typeof e=="function"?e:(e[ku]||(e[ku]=function(t){return e.handleEvent(t)}),e[ku])}function ge(){Pn.call(this),this.i=new ml(this),this.P=this,this.I=null}ke(ge,Pn);ge.prototype[Lo]=!0;ge.prototype.removeEventListener=function(e,t,n,r){C0(this,e,t,n,r)};function we(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,typeof t=="string")t=new Ce(t,e);else if(t instanceof Ce)t.target=t.target||e;else{var i=t;t=new Ce(r,e),x0(t,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=t.g=n[o];i=Es(s,r,!0,t)&&i}if(s=t.g=e,i=Es(s,r,!0,t)&&i,i=Es(s,r,!1,t)&&i,n)for(o=0;o<n.length;o++)s=t.g=n[o],i=Es(s,r,!1,t)&&i}ge.prototype.M=function(){if(ge.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)pl(n[r]);delete e.g[t],e.h--}}this.I=null};ge.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};ge.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Es(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,o=0;o<t.length;++o){var s=t[o];if(s&&!s.ba&&s.capture==n){var a=s.listener,l=s.ha||s.src;s.ea&&Kc(e.i,s),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Rd=D.JSON.stringify;function vb(){var e=R0;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class yb{constructor(){this.h=this.g=null}add(t,n){const r=N0.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var N0=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new wb,e=>e.reset());class wb{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function _b(e){D.setTimeout(()=>{throw e},0)}function A0(e,t){Xc||kb(),qc||(Xc(),qc=!0),R0.add(e,t)}var Xc;function kb(){var e=D.Promise.resolve(void 0);Xc=function(){e.then(Eb)}}var qc=!1,R0=new yb;function Eb(){for(var e;e=vb();){try{e.h.call(e.g)}catch(n){_b(n)}var t=N0;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}qc=!1}function gl(e,t){ge.call(this),this.h=e||1,this.g=t||D,this.j=Te(this.lb,this),this.l=Date.now()}ke(gl,ge);O=gl.prototype;O.ca=!1;O.R=null;O.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),we(this,"tick"),this.ca&&(Od(this),this.start()))}};O.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Od(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}O.M=function(){gl.X.M.call(this),Od(this),delete this.g};function Ld(e,t,n){if(typeof e=="function")n&&(e=Te(e,n));else if(e&&typeof e.handleEvent=="function")e=Te(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:D.setTimeout(e,t||0)}function O0(e){e.g=Ld(()=>{e.g=null,e.i&&(e.i=!1,O0(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Sb extends Pn{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:O0(this)}M(){super.M(),this.g&&(D.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function po(e){Pn.call(this),this.h=e,this.g={}}ke(po,Pn);var wm=[];function L0(e,t,n,r){Array.isArray(n)||(n&&(wm[0]=n.toString()),n=wm);for(var i=0;i<n.length;i++){var o=I0(t,n[i],r||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}}function D0(e){Td(e.g,function(t,n){this.g.hasOwnProperty(n)&&Pd(t)},e),e.g={}}po.prototype.M=function(){po.X.M.call(this),D0(this)};po.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function vl(){this.g=!0}vl.prototype.Aa=function(){this.g=!1};function xb(e,t,n,r,i,o){e.info(function(){if(e.g)if(o)for(var s="",a=o.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var f=c.split("_");s=2<=f.length&&f[1]=="type"?s+(c+"="+u+"&"):s+(c+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+s})}function Ib(e,t,n,r,i,o,s){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+o+" "+s})}function xr(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Tb(e,n)+(r?" "+r:"")})}function bb(e,t){e.info(function(){return"TIMEOUT: "+t})}vl.prototype.info=function(){};function Tb(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if(o!="noop"&&o!="stop"&&o!="close")for(var s=1;s<i.length;s++)i[s]=""}}}}return Rd(n)}catch{return t}}var ei={},_m=null;function Dd(){return _m=_m||new ge}ei.Pa="serverreachability";function M0(e){Ce.call(this,ei.Pa,e)}ke(M0,Ce);function mo(e){const t=Dd();we(t,new M0(t))}ei.STAT_EVENT="statevent";function $0(e,t){Ce.call(this,ei.STAT_EVENT,e),this.stat=t}ke($0,Ce);function Re(e){const t=Dd();we(t,new $0(t,e))}ei.Qa="timingevent";function U0(e,t){Ce.call(this,ei.Qa,e),this.size=t}ke(U0,Ce);function Do(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return D.setTimeout(function(){e()},t)}var Md={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Cb={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function $d(){}$d.prototype.h=null;function km(e){return e.h||(e.h=e.i())}function Pb(){}var Mo={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Ud(){Ce.call(this,"d")}ke(Ud,Ce);function Fd(){Ce.call(this,"c")}ke(Fd,Ce);var Qc;function yl(){}ke(yl,$d);yl.prototype.g=function(){return new XMLHttpRequest};yl.prototype.i=function(){return{}};Qc=new yl;function $o(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new po(this),this.O=Nb,e=Wc?125:void 0,this.T=new gl(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new F0}function F0(){this.i=null,this.g="",this.h=!1}var Nb=45e3,Jc={},Ca={};O=$o.prototype;O.setTimeout=function(e){this.O=e};function Zc(e,t,n){e.K=1,e.v=_l(Vt(t)),e.s=n,e.P=!0,j0(e,null)}function j0(e,t){e.F=Date.now(),Uo(e),e.A=Vt(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),Y0(n.i,"t",r),e.C=0,n=e.l.H,e.h=new F0,e.g=my(e.l,n?t:null,!e.s),0<e.N&&(e.L=new Sb(Te(e.La,e,e.g),e.N)),L0(e.S,e.g,"readystatechange",e.ib),t=e.H?S0(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),mo(),xb(e.j,e.u,e.A,e.m,e.U,e.s)}O.ib=function(e){e=e.target;const t=this.L;t&&Lt(e)==3?t.l():this.La(e)};O.La=function(e){try{if(e==this.g)e:{const c=Lt(this.g);var t=this.g.Ea();const f=this.g.aa();if(!(3>c)&&(c!=3||Wc||this.g&&(this.h.h||this.g.fa()||Im(this.g)))){this.I||c!=4||t==7||(t==8||0>=f?mo(3):mo(2)),wl(this);var n=this.g.aa();this.Y=n;t:if(z0(this)){var r=Im(this.g);e="";var i=r.length,o=Lt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){zn(this),Mi(this);var s="";break t}this.h.i=new D.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:o&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,s=this.h.g}else s=this.g.fa();if(this.i=n==200,Ib(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ta(a)){var u=a;break t}}u=null}if(n=u)xr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ef(this,n);else{this.i=!1,this.o=3,Re(12),zn(this),Mi(this);break e}}this.P?(B0(this,c,s),Wc&&this.i&&c==3&&(L0(this.S,this.T,"tick",this.hb),this.T.start())):(xr(this.j,this.m,s,null),ef(this,s)),c==4&&zn(this),this.i&&!this.I&&(c==4?fy(this.l,this):(this.i=!1,Uo(this)))}else n==400&&0<s.indexOf("Unknown SID")?(this.o=3,Re(12)):(this.o=0,Re(13)),zn(this),Mi(this)}}}catch{}finally{}};function z0(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function B0(e,t,n){let r=!0,i;for(;!e.I&&e.C<n.length;)if(i=Ab(e,n),i==Ca){t==4&&(e.o=4,Re(14),r=!1),xr(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Jc){e.o=4,Re(15),xr(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else xr(e.j,e.m,i,null),ef(e,i);z0(e)&&i!=Ca&&i!=Jc&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Re(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Gd(t),t.K=!0,Re(11))):(xr(e.j,e.m,n,"[Invalid Chunked Response]"),zn(e),Mi(e))}O.hb=function(){if(this.g){var e=Lt(this.g),t=this.g.fa();this.C<t.length&&(wl(this),B0(this,e,t),this.i&&e!=4&&Uo(this))}};function Ab(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?Ca:(n=Number(t.substring(n,r)),isNaN(n)?Jc:(r+=1,r+n>t.length?Ca:(t=t.substr(r,n),e.C=r+n,t)))}O.cancel=function(){this.I=!0,zn(this)};function Uo(e){e.V=Date.now()+e.O,H0(e,e.O)}function H0(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Do(Te(e.gb,e),t)}function wl(e){e.B&&(D.clearTimeout(e.B),e.B=null)}O.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(bb(this.j,this.A),this.K!=2&&(mo(),Re(17)),zn(this),this.o=2,Mi(this)):H0(this,this.V-e)};function Mi(e){e.l.G==0||e.I||fy(e.l,e)}function zn(e){wl(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,Od(e.T),D0(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function ef(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||tf(n.h,e))){if(!e.J&&tf(n.h,e)&&n.G==3){try{var r=n.Fa.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)Aa(n),xl(n);else break e;Wd(n),Re(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Do(Te(n.cb,n),6e3));if(1>=Q0(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Bn(n,11)}else if((e.J||n.g==e)&&Aa(n),!Ta(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const f=u[4];f!=null&&(n.Ca=f,n.j.info("SVER="+n.Ca));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=e.g;if(g){const v=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var o=r.h;o.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(o.j=o.l,o.g=new Set,o.h&&(jd(o,o.h),o.h=null))}if(r.D){const y=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.za=y,Z(r.F,r.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var s=e;if(r.sa=py(r,r.H?r.ka:null,r.V),s.J){J0(r.h,s);var a=s,l=r.J;l&&a.setTimeout(l),a.B&&(wl(a),Uo(a)),r.g=s}else uy(r);0<n.i.length&&Il(n)}else u[0]!="stop"&&u[0]!="close"||Bn(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Bn(n,7):Vd(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}mo(4)}catch{}}function Rb(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(dl(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function Ob(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(dl(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function V0(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(dl(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Ob(e),r=Rb(e),i=r.length,o=0;o<i;o++)t.call(void 0,r[o],n&&n[o],e)}var W0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Lb(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var o=e[n].substring(0,r);i=e[n].substring(r+1)}else o=e[n];t(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Gn(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Gn){this.h=t!==void 0?t:e.h,Pa(this,e.j),this.s=e.s,this.g=e.g,Na(this,e.m),this.l=e.l,t=e.i;var n=new go;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Em(this,n),this.o=e.o}else e&&(n=String(e).match(W0))?(this.h=!!t,Pa(this,n[1]||"",!0),this.s=Ei(n[2]||""),this.g=Ei(n[3]||"",!0),Na(this,n[4]),this.l=Ei(n[5]||"",!0),Em(this,n[6]||"",!0),this.o=Ei(n[7]||"")):(this.h=!!t,this.i=new go(null,this.h))}Gn.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Si(t,Sm,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Si(t,Sm,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Si(n,n.charAt(0)=="/"?$b:Mb,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Si(n,Fb)),e.join("")};function Vt(e){return new Gn(e)}function Pa(e,t,n){e.j=n?Ei(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Na(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Em(e,t,n){t instanceof go?(e.i=t,jb(e.i,e.h)):(n||(t=Si(t,Ub)),e.i=new go(t,e.h))}function Z(e,t,n){e.i.set(t,n)}function _l(e){return Z(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ei(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Si(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Db),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Db(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Sm=/[#\/\?@]/g,Mb=/[#\?:]/g,$b=/[#\?]/g,Ub=/[#\?@]/g,Fb=/#/g;function go(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Nn(e){e.g||(e.g=new Map,e.h=0,e.i&&Lb(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}O=go.prototype;O.add=function(e,t){Nn(this),this.i=null,e=ti(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function G0(e,t){Nn(e),t=ti(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function K0(e,t){return Nn(e),t=ti(e,t),e.g.has(t)}O.forEach=function(e,t){Nn(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};O.oa=function(){Nn(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let o=0;o<i.length;o++)n.push(t[r])}return n};O.W=function(e){Nn(this);let t=[];if(typeof e=="string")K0(this,e)&&(t=t.concat(this.g.get(ti(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};O.set=function(e,t){return Nn(this),this.i=null,e=ti(this,e),K0(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};O.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function Y0(e,t,n){G0(e,t),0<n.length&&(e.i=null,e.g.set(ti(e,t),Id(n)),e.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const o=encodeURIComponent(String(r)),s=this.W(r);for(r=0;r<s.length;r++){var i=o;s[r]!==""&&(i+="="+encodeURIComponent(String(s[r]))),e.push(i)}}return this.i=e.join("&")};function ti(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function jb(e,t){t&&!e.j&&(Nn(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(G0(this,r),Y0(this,i,n))},e)),e.j=t}var zb=class{constructor(e,t){this.h=e,this.g=t}};function X0(e){this.l=e||Bb,D.PerformanceNavigationTiming?(e=D.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(D.g&&D.g.Ga&&D.g.Ga()&&D.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Bb=10;function q0(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Q0(e){return e.h?1:e.g?e.g.size:0}function tf(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function jd(e,t){e.g?e.g.add(t):e.h=t}function J0(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}X0.prototype.cancel=function(){if(this.i=Z0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Z0(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Id(e.i)}function zd(){}zd.prototype.stringify=function(e){return D.JSON.stringify(e,void 0)};zd.prototype.parse=function(e){return D.JSON.parse(e,void 0)};function Hb(){this.g=new zd}function Vb(e,t,n){const r=n||"";try{V0(e,function(i,o){let s=i;Oo(i)&&(s=Rd(i)),t.push(r+o+"="+encodeURIComponent(s))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Wb(e,t){const n=new vl;if(D.Image){const r=new Image;r.onload=ks(Ss,n,r,"TestLoadImage: loaded",!0,t),r.onerror=ks(Ss,n,r,"TestLoadImage: error",!1,t),r.onabort=ks(Ss,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=ks(Ss,n,r,"TestLoadImage: timeout",!1,t),D.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Ss(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function kl(e){this.l=e.ac||null,this.j=e.jb||!1}ke(kl,$d);kl.prototype.g=function(){return new El(this.l,this.j)};kl.prototype.i=function(e){return function(){return e}}({});function El(e,t){ge.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Bd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ke(El,ge);var Bd=0;O=El.prototype;O.open=function(e,t){if(this.readyState!=Bd)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,vo(this)};O.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||D).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fo(this)),this.readyState=Bd};O.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,vo(this)),this.g&&(this.readyState=3,vo(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof D.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ey(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function ey(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}O.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Fo(this):vo(this),this.readyState==3&&ey(this)}};O.Va=function(e){this.g&&(this.response=this.responseText=e,Fo(this))};O.Ua=function(e){this.g&&(this.response=e,Fo(this))};O.ga=function(){this.g&&Fo(this)};function Fo(e){e.readyState=4,e.l=null,e.j=null,e.A=null,vo(e)}O.setRequestHeader=function(e,t){this.v.append(e,t)};O.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function vo(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(El.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Gb=D.JSON.parse;function ae(e){ge.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ty,this.K=this.L=!1}ke(ae,ge);var ty="",Kb=/^https?$/i,Yb=["POST","PUT"];O=ae.prototype;O.Ka=function(e){this.L=e};O.da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Qc.g(),this.C=this.u?km(this.u):km(Qc),this.g.onreadystatechange=Te(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(o){xm(this,o);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const o of r.keys())n.set(o,r.get(o));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(o=>o.toLowerCase()=="content-type"),i=D.FormData&&e instanceof D.FormData,!(0<=w0(Yb,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,s]of n)this.g.setRequestHeader(o,s);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{iy(this),0<this.B&&((this.K=Xb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Te(this.qa,this)):this.A=Ld(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(o){xm(this,o)}};function Xb(e){return fo&&fb()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}O.qa=function(){typeof xd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,we(this,"timeout"),this.abort(8))};function xm(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,ny(e),Sl(e)}function ny(e){e.D||(e.D=!0,we(e,"complete"),we(e,"error"))}O.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,we(this,"complete"),we(this,"abort"),Sl(this))};O.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Sl(this,!0)),ae.X.M.call(this)};O.Ha=function(){this.s||(this.F||this.v||this.l?ry(this):this.fb())};O.fb=function(){ry(this)};function ry(e){if(e.h&&typeof xd<"u"&&(!e.C[1]||Lt(e)!=4||e.aa()!=2)){if(e.v&&Lt(e)==4)Ld(e.Ha,0,e);else if(we(e,"readystatechange"),Lt(e)==4){e.h=!1;try{const a=e.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=a===0){var i=String(e.H).match(W0)[1]||null;if(!i&&D.self&&D.self.location){var o=D.self.location.protocol;i=o.substr(0,o.length-1)}r=!Kb.test(i?i.toLowerCase():"")}n=r}if(n)we(e,"complete"),we(e,"success");else{e.m=6;try{var s=2<Lt(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.aa()+"]",ny(e)}}finally{Sl(e)}}}}function Sl(e,t){if(e.g){iy(e);const n=e.g,r=e.C[0]?ba:null;e.g=null,e.C=null,t||we(e,"ready");try{n.onreadystatechange=r}catch{}}}function iy(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(D.clearTimeout(e.A),e.A=null)}function Lt(e){return e.g?e.g.readyState:0}O.aa=function(){try{return 2<Lt(this)?this.g.status:-1}catch{return-1}};O.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Gb(t)}};function Im(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case ty:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}O.Ea=function(){return this.m};O.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function oy(e){let t="";return Td(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Hd(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=oy(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):Z(e,t,n))}function hi(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function sy(e){this.Ca=0,this.i=[],this.j=new vl,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=hi("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=hi("baseRetryDelayMs",5e3,e),this.bb=hi("retryDelaySeedMs",1e4,e),this.$a=hi("forwardChannelMaxRetries",2,e),this.ta=hi("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new X0(e&&e.concurrentRequestLimit),this.Fa=new Hb,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}O=sy.prototype;O.ma=8;O.G=1;function Vd(e){if(ay(e),e.G==3){var t=e.U++,n=Vt(e.F);Z(n,"SID",e.I),Z(n,"RID",t),Z(n,"TYPE","terminate"),jo(e,n),t=new $o(e,e.j,t,void 0),t.K=2,t.v=_l(Vt(n)),n=!1,D.navigator&&D.navigator.sendBeacon&&(n=D.navigator.sendBeacon(t.v.toString(),"")),!n&&D.Image&&(new Image().src=t.v,n=!0),n||(t.g=my(t.l,null),t.g.da(t.v)),t.F=Date.now(),Uo(t)}hy(e)}function xl(e){e.g&&(Gd(e),e.g.cancel(),e.g=null)}function ay(e){xl(e),e.u&&(D.clearTimeout(e.u),e.u=null),Aa(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&D.clearTimeout(e.m),e.m=null)}function Il(e){q0(e.h)||e.m||(e.m=!0,A0(e.Ja,e),e.C=0)}function qb(e,t){return Q0(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=Do(Te(e.Ja,e,t),dy(e,e.C)),e.C++,!0)}O.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new $o(this,this.j,e,void 0);let o=this.s;if(this.S&&(o?(o=S0(o),x0(o,this.S)):o=this.S),this.o!==null||this.N||(i.H=o,o=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=ly(this,i,t),n=Vt(this.F),Z(n,"RID",e),Z(n,"CVER",22),this.D&&Z(n,"X-HTTP-Session-Id",this.D),jo(this,n),o&&(this.N?t="headers="+encodeURIComponent(String(oy(o)))+"&"+t:this.o&&Hd(n,this.o,o)),jd(this.h,i),this.Ya&&Z(n,"TYPE","init"),this.O?(Z(n,"$req",t),Z(n,"SID","null"),i.Z=!0,Zc(i,n,null)):Zc(i,n,t),this.G=2}}else this.G==3&&(e?bm(this,e):this.i.length==0||q0(this.h)||bm(this))};function bm(e,t){var n;t?n=t.m:n=e.U++;const r=Vt(e.F);Z(r,"SID",e.I),Z(r,"RID",n),Z(r,"AID",e.T),jo(e,r),e.o&&e.s&&Hd(r,e.o,e.s),n=new $o(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=ly(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),jd(e.h,n),Zc(n,r,t)}function jo(e,t){e.ia&&Td(e.ia,function(n,r){Z(t,r,n)}),e.l&&V0({},function(n,r){Z(t,r,n)})}function ly(e,t,n){n=Math.min(e.i.length,n);var r=e.l?Te(e.l.Ra,e.l,e):null;e:{var i=e.i;let o=-1;for(;;){const s=["count="+n];o==-1?0<n?(o=i[0].h,s.push("ofs="+o)):o=0:s.push("ofs="+o);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=o,0>u)o=Math.max(0,i[l].h-100),a=!1;else try{Vb(c,s,"req"+u+"_")}catch{r&&r(c)}}if(a){r=s.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function uy(e){e.g||e.u||(e.Z=1,A0(e.Ia,e),e.A=0)}function Wd(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=Do(Te(e.Ia,e),dy(e,e.A)),e.A++,!0)}O.Ia=function(){if(this.u=null,cy(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=Do(Te(this.eb,this),e)}};O.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Re(10),xl(this),cy(this))};function Gd(e){e.B!=null&&(D.clearTimeout(e.B),e.B=null)}function cy(e){e.g=new $o(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=Vt(e.sa);Z(t,"RID","rpc"),Z(t,"SID",e.I),Z(t,"CI",e.L?"0":"1"),Z(t,"AID",e.T),Z(t,"TYPE","xmlhttp"),jo(e,t),e.o&&e.s&&Hd(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=_l(Vt(t)),n.s=null,n.P=!0,j0(n,e)}O.cb=function(){this.v!=null&&(this.v=null,xl(this),Wd(this),Re(19))};function Aa(e){e.v!=null&&(D.clearTimeout(e.v),e.v=null)}function fy(e,t){var n=null;if(e.g==t){Aa(e),Gd(e),e.g=null;var r=2}else if(tf(e.h,t))n=t.D,J0(e.h,t),r=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;r=Dd(),we(r,new U0(r,n)),Il(e)}else uy(e);else if(i=t.o,i==3||i==0&&0<e.pa||!(r==1&&qb(e,t)||r==2&&Wd(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:Bn(e,5);break;case 4:Bn(e,10);break;case 3:Bn(e,6);break;default:Bn(e,2)}}}function dy(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function Bn(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var r=Te(e.kb,e);n||(n=new Gn("//www.google.com/images/cleardot.gif"),D.location&&D.location.protocol=="http"||Pa(n,"https"),_l(n)),Wb(n.toString(),r)}else Re(2);e.G=0,e.l&&e.l.va(t),hy(e),ay(e)}O.kb=function(e){e?(this.j.info("Successfully pinged google.com"),Re(2)):(this.j.info("Failed to ping google.com"),Re(1))};function hy(e){if(e.G=0,e.la=[],e.l){const t=Z0(e.h);(t.length!=0||e.i.length!=0)&&(gm(e.la,t),gm(e.la,e.i),e.h.i.length=0,Id(e.i),e.i.length=0),e.l.ua()}}function py(e,t,n){var r=n instanceof Gn?Vt(n):new Gn(n,void 0);if(r.g!="")t&&(r.g=t+"."+r.g),Na(r,r.m);else{var i=D.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var o=new Gn(null,void 0);r&&Pa(o,r),t&&(o.g=t),i&&Na(o,i),n&&(o.l=n),r=o}return n=e.D,t=e.za,n&&t&&Z(r,n,t),Z(r,"VER",e.ma),jo(e,r),r}function my(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new ae(new kl({jb:!0})):new ae(e.ra),t.Ka(e.H),t}function gy(){}O=gy.prototype;O.xa=function(){};O.wa=function(){};O.va=function(){};O.ua=function(){};O.Ra=function(){};function it(e,t){ge.call(this),this.g=new sy(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!Ta(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Ta(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new ni(this)}ke(it,ge);it.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;Re(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=py(e,null,e.V),Il(e)};it.prototype.close=function(){Vd(this.g)};it.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Rd(e),e=n);t.i.push(new zb(t.ab++,e)),t.G==3&&Il(t)};it.prototype.M=function(){this.g.l=null,delete this.j,Vd(this.g),delete this.g,it.X.M.call(this)};function vy(e){Ud.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}ke(vy,Ud);function yy(){Fd.call(this),this.status=1}ke(yy,Fd);function ni(e){this.g=e}ke(ni,gy);ni.prototype.xa=function(){we(this.g,"a")};ni.prototype.wa=function(e){we(this.g,new vy(e))};ni.prototype.va=function(e){we(this.g,new yy)};ni.prototype.ua=function(){we(this.g,"b")};it.prototype.send=it.prototype.u;it.prototype.open=it.prototype.m;it.prototype.close=it.prototype.close;Md.NO_ERROR=0;Md.TIMEOUT=8;Md.HTTP_ERROR=6;Cb.COMPLETE="complete";Pb.EventType=Mo;Mo.OPEN="a";Mo.CLOSE="b";Mo.ERROR="c";Mo.MESSAGE="d";ge.prototype.listen=ge.prototype.N;ae.prototype.listenOnce=ae.prototype.O;ae.prototype.getLastError=ae.prototype.Oa;ae.prototype.getLastErrorCode=ae.prototype.Ea;ae.prototype.getStatus=ae.prototype.aa;ae.prototype.getResponseJson=ae.prototype.Sa;ae.prototype.getResponseText=ae.prototype.fa;ae.prototype.send=ae.prototype.da;ae.prototype.setWithCredentials=ae.prototype.Ka;const Tm="@firebase/firestore";/**
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
 */class Ie{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ie.UNAUTHENTICATED=new Ie(null),Ie.GOOGLE_CREDENTIALS=new Ie("google-credentials-uid"),Ie.FIRST_PARTY=new Ie("first-party-uid"),Ie.MOCK_USER=new Ie("mock-user");/**
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
 */let zo="9.15.0";/**
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
 */const Vr=new dd("@firebase/firestore");function He(e,...t){if(Vr.logLevel<=W.DEBUG){const n=t.map(Yd);Vr.debug(`Firestore (${zo}): ${e}`,...n)}}function Kd(e,...t){if(Vr.logLevel<=W.ERROR){const n=t.map(Yd);Vr.error(`Firestore (${zo}): ${e}`,...n)}}function Qb(e,...t){if(Vr.logLevel<=W.WARN){const n=t.map(Yd);Vr.warn(`Firestore (${zo}): ${e}`,...n)}}function Yd(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
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
 */function Xd(e="Unexpected state"){const t=`FIRESTORE (${zo}) INTERNAL ASSERTION FAILED: `+e;throw Kd(t),new Error(t)}function Ra(e,t){e||Xd()}/**
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
 */const We={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ge extends bt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Lr{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class wy{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Jb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Ie.UNAUTHENTICATED))}shutdown(){}}class Zb{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class eT{constructor(t){this.t=t,this.currentUser=Ie.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let o=new Lr;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Lr,t.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const l=o;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{He("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(He("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Lr)}},0),s()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(He("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ra(typeof r.accessToken=="string"),new wy(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Ra(t===null||typeof t=="string"),new Ie(t)}}class tT{constructor(t,n,r,i){this.h=t,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=Ie.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Ra(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class nT{constructor(t,n,r,i){this.h=t,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new tT(this.h,this.l,this.m,this.g))}start(t,n){t.enqueueRetryable(()=>n(Ie.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rT{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iT{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,n){const r=o=>{o.error!=null&&He("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.A;return this.A=o.token,He("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{He("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.T.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.T.getImmediate({optional:!0});o?i(o):He("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Ra(typeof n.token=="string"),this.A=n.token,new rT(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oT(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class sT{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=oT(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=t.charAt(i[o]%t.length))}return r}}function _y(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class aT{constructor(t,n,r,i,o,s,a,l){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Oa{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Oa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Oa&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */var Cm,H;(H=Cm||(Cm={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";function Eu(){return typeof document<"u"?document:null}class lT{constructor(t,n,r=1e3,i=1.5,o=6e4){this.Hs=t,this.timerId=n,this.mo=r,this.yo=i,this.po=o,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&He("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),t())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class qd{constructor(t,n,r,i,o){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Lr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}static createAndSchedule(t,n,r,i,o){const s=Date.now()+r,a=new qd(t,n,s,i,o);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ge(We.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function uT(e,t){if(Kd("AsyncQueue",`${t}: ${e}`),_y(e))return new Ge(We.UNAVAILABLE,`${t}: ${e}`);throw e}function cT(e,t,n,r){if(t===!0&&r===!0)throw new Ge(We.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function fT(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Xd()}function dT(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Ge(We.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=fT(e);throw new Ge(We.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm=new Map;class Nm{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new Ge(We.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new Ge(We.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,cT("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Nm({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Ge(We.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new Ge(We.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Nm(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Jb;switch(n.type){case"gapi":const r=n.client;return new nT(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Ge(We.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Pm.get(t);n&&(He("ComponentProvider","Removing Datastore"),Pm.delete(t),n.terminate())}(this),Promise.resolve()}}function hT(e,t,n,r={}){var i;const o=(e=dT(e,ky))._getSettings();if(o.host!=="firestore.googleapis.com"&&o.host!==t&&Qb("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},o),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let s,a;if(typeof r.mockUserToken=="string")s=r.mockUserToken,a=Ie.MOCK_USER;else{s=$1(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new Ge(We.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ie(l)}e._authCredentials=new Zb(new wy(s,a))}}/**
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
 */class pT{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ie.UNAUTHENTICATED,this.clientId=sT.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{He("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(He("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ge(We.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Lr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=uT(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}class mT{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new lT(this,"async_queue_retry"),this.Wc=()=>{const n=Eu();n&&He("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const t=Eu();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.qc){this.qc=!0,this.Qc=t||!1;const n=Eu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.qc)return new Promise(()=>{});const n=new Lr;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Lc.push(t),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!_y(t))throw t;He("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(t){const n=this.Bc.then(()=>(this.Gc=!0,t().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(o){let s=o.message||"";return o.stack&&(s=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),s}(r);throw Kd("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(t,n,r){this.zc(),this.jc.indexOf(t)>-1&&(n=0);const i=qd.createAndSchedule(this,t,n,r,o=>this.Yc(o));return this.Uc.push(i),i}zc(){this.Kc&&Xd()}verifyOperationInProgress(){}async Xc(){let t;do t=this.Bc,await t;while(t!==this.Bc)}Zc(t){for(const n of this.Uc)if(n.timerId===t)return!0;return!1}ta(t){return this.Xc().then(()=>{this.Uc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Xc()})}ea(t){this.jc.push(t)}Yc(t){const n=this.Uc.indexOf(t);this.Uc.splice(n,1)}}class gT extends ky{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=new mT,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||yT(this),this._firestoreClient.terminate()}}function vT(e,t){const n=typeof e=="object"?e:pd(),r=typeof e=="string"?e:t||"(default)",i=sl(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=D1("firestore");o&&hT(i,...o)}return i}function yT(e){var t;const n=e._freezeSettings(),r=function(i,o,s,a){return new aT(i,o,s,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new pT(e._authCredentials,e._appCheckCredentials,e._queue,r)}(function(e,t=!0){(function(n){zo=n})(Qr),tr(new In("firestore",(n,{instanceIdentifier:r,options:i})=>{const o=n.getProvider("app").getImmediate(),s=new gT(new eT(n.getProvider("auth-internal")),new iT(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new Ge(We.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Oa(a.options.projectId,l)}(o,r),o);return i=Object.assign({useFetchStreams:t},i),s._setSettings(i),s},"PUBLIC").setMultipleInstances(!0)),St(Tm,"3.8.0",e),St(Tm,"3.8.0","esm2017")})();/**
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
 */const Ey="firebasestorage.googleapis.com",wT="storageBucket",_T=2*60*1e3,kT=10*60*1e3;/**
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
 */class Tt extends bt{constructor(t,n,r=0){super(Su(t),`Firebase Storage: ${n} (${Su(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Tt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Su(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Su(e){return"storage/"+e}function ET(){const e="An unknown error occurred, please check the error payload for server response.";return new Tt("unknown",e)}function ST(){return new Tt("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function xT(){return new Tt("canceled","User canceled the upload/download.")}function IT(e){return new Tt("invalid-url","Invalid URL '"+e+"'.")}function bT(e){return new Tt("invalid-default-bucket","Invalid default bucket '"+e+"'.")}function Am(e){return new Tt("invalid-argument",e)}function Sy(){return new Tt("app-deleted","The Firebase app was deleted.")}function TT(e){return new Tt("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class ft{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=ft.makeFromUrl(t,n)}catch{return new ft(t,"")}if(r.path==="")return r;throw bT(t)}static makeFromUrl(t,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+i+s,"i"),l={bucket:1,path:3};function u(w){w.path_=decodeURIComponent(w.path)}const c="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",g=new RegExp(`^https?://${f}/${c}/b/${i}/o${h}`,"i"),v={bucket:1,path:3},y=n===Ey?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",p=new RegExp(`^https?://${y}/${i}/${b}`,"i"),m=[{regex:a,indices:l,postModify:o},{regex:g,indices:v,postModify:u},{regex:p,indices:{bucket:1,path:2},postModify:u}];for(let w=0;w<m.length;w++){const E=m[w],S=E.regex.exec(t);if(S){const x=S[E.indices.bucket];let N=S[E.indices.path];N||(N=""),r=new ft(x,N),E.postModify(r);break}}if(r==null)throw IT(t);return r}}class CT{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function PT(e,t,n){let r=1,i=null,o=null,s=!1,a=0;function l(){return a===2}let u=!1;function c(...b){u||(u=!0,t.apply(null,b))}function f(b){i=setTimeout(()=>{i=null,e(g,l())},b)}function h(){o&&clearTimeout(o)}function g(b,...p){if(u){h();return}if(b){h(),c.call(null,b,...p);return}if(l()||s){h(),c.call(null,b,...p);return}r<64&&(r*=2);let m;a===1?(a=2,m=0):m=(r+Math.random())*1e3,f(m)}let v=!1;function y(b){v||(v=!0,h(),!u&&(i!==null?(b||(a=2),clearTimeout(i),f(0)):b||(a=1)))}return f(0),o=setTimeout(()=>{s=!0,y(!0)},n),y}function NT(e){e(!1)}/**
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
 */function AT(e){return e!==void 0}function Rm(e,t,n,r){if(r<t)throw Am(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw Am(`Invalid value for '${e}'. Expected ${n} or less.`)}function RT(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var La;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(La||(La={}));/**
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
 */function OT(e,t){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,o=t.indexOf(e)!==-1;return n||i||o}/**
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
 */class LT{constructor(t,n,r,i,o,s,a,l,u,c,f,h=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=s,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=f,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,v)=>{this.resolve_=g,this.reject_=v,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new xs(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const s=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&o.addUploadProgressListener(s),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(s),this.pendingConnection_=null;const a=o.getErrorCode()===La.NO_ERROR,l=o.getStatus();if((!a||OT(l,this.additionalRetryCodes_))&&this.retry){const c=o.getErrorCode()===La.ABORT;r(!1,new xs(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new xs(u,o))})},n=(r,i)=>{const o=this.resolve_,s=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());AT(l)?o(l):o()}catch(l){s(l)}else if(a!==null){const l=ET();l.serverResponse=a.getErrorText(),this.errorCallback_?s(this.errorCallback_(a,l)):s(l)}else if(i.canceled){const l=this.appDelete_?Sy():xT();s(l)}else{const l=ST();s(l)}};this.canceled_?n(!1,new xs(!1,null,!0)):this.backoffId_=PT(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&NT(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class xs{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function DT(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function MT(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function $T(e,t){t&&(e["X-Firebase-GMPID"]=t)}function UT(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function FT(e,t,n,r,i,o,s=!0){const a=RT(e.urlParams),l=e.url+a,u=Object.assign({},e.headers);return $T(u,t),DT(u,n),MT(u,o),UT(u,r),new LT(l,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,s)}/**
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
 */function jT(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function zT(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */class Da{constructor(t,n){this._service=t,n instanceof ft?this._location=n:this._location=ft.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new Da(t,n)}get root(){const t=new ft(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return zT(this._location.path)}get storage(){return this._service}get parent(){const t=jT(this._location.path);if(t===null)return null;const n=new ft(this._location.bucket,t);return new Da(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw TT(t)}}function Om(e,t){const n=t==null?void 0:t[wT];return n==null?null:ft.makeFromBucketSpec(n,e)}function BT(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken=typeof i=="string"?i:$1(i,e.app.options.projectId))}class HT{constructor(t,n,r,i,o){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=Ey,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=_T,this._maxUploadRetryTime=kT,this._requests=new Set,i!=null?this._bucket=ft.makeFromBucketSpec(i,this._host):this._bucket=Om(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=ft.makeFromBucketSpec(this._url,t):this._bucket=Om(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Rm("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Rm("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Da(this,t)}_makeRequest(t,n,r,i,o=!0){if(this._deleted)return new CT(Sy());{const s=FT(t,this._appId,r,i,n,this._firebaseVersion,o);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(t,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,i).getPromise()}}const Lm="@firebase/storage",Dm="0.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy="storage";function VT(e=pd(),t){e=Qe(e);const r=sl(e,xy).getImmediate({identifier:t}),i=D1("storage");return i&&WT(r,...i),r}function WT(e,t,n,r={}){BT(e,t,n,r)}function GT(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new HT(n,r,i,t,Qr)}function KT(){tr(new In(xy,GT,"PUBLIC").setMultipleInstances(!0)),St(Lm,Dm,""),St(Lm,Dm,"esm2017")}KT();const YT={apiKey:"AIzaSyDKgU0hinlqT9wTstTYt2TKkJhJR7CP7jY",authDomain:"sugardaddy-find.firebaseapp.com",projectId:"sugardaddy-find",storageBucket:"sugardaddy-find.appspot.com",messagingSenderId:"178486831723",appId:"1:178486831723:web:26aac8d007837752e7df2e",measurementId:"G-1E2DKGX5CD"},Qd=j1(YT),pi=QI(Qd);vT(Qd);VT(Qd);const XT=I.createContext(),qT=({children:e})=>{const[t,n]=I.useState({}),r=async(a,l)=>await O3(pi,a,l),i=async a=>await A3(pi,a),o=async a=>await R3(oobCode,a),s=async()=>U3(pi);return I.useEffect(()=>{const a=$3(pi,l=>{L3(pi,c0),n(l)});return()=>{a()}},[]),_(XT.Provider,{value:{user:t,signIn:r,logOut:s,forgetPassword:i,resetPassword:o},children:e})},QT=[{id:"1",bgcolor:"bg-primary-6",bordercolor:"border-primary-6",textcolor:"text-primary-6",image:"/images/rich.png",heading:"Rich",shortDescription:"He is now listed for 3 months. He paid..",price:"350",description:"This is a rich Sugar Daddy and paid $350 to be featured on the top. If you want to be his Sugar Baby, you can add his Social Media accounts below.",skype:"https://join.skype.com/invite/test"},{id:"2",bgcolor:"bg-primary-7",bordercolor:"border-primary-7",textcolor:"text-primary-7",image:"/images/business.png",heading:"Business",shortDescription:"He is now listed for 1 months. He paid..",price:"150",description:"This is a business Sugar Daddy and paid $150 to be featured on the top. If you want to be his Sugar Baby, you can add his Social Media accounts below.",skype:"https://join.skype.com/invite/test"},{id:"3",bgcolor:"bg-primary-8",bordercolor:"border-primary-8",textcolor:"text-primary-8",image:"/images/regular.png",heading:"Regular",shortDescription:"He is now listed for 1 week. He paid..",price:"50",description:"This is a regular Sugar Daddy and paid $50 to be featured on the top. If you want to be his Sugar Baby, you can add his Social Media accounts below.",skype:"https://join.skype.com/invite/test"}],JT=()=>_(wo,{children:_(qT,{children:_(Z_,{children:_(Jv,{path:"/",element:_(sk,{})})})})});Iu.createRoot(document.getElementById("root")).render(_($a.StrictMode,{children:_(ik,{children:_(JT,{})})}));
